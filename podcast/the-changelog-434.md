**Jerod Santo:** I'm joined by Alex Neumann, who is the maintainer of the Restic program. Alex, thanks for coming on the Changelog.

**Alexander Neumann:** Yeah, thanks for having me. It's an honor to be here.

**Jerod Santo:** It's an honor to have you. I should say we're having you back, sort of, because you were on Go Time...

**Alexander Neumann:** Yeah, that's right.

**Jerod Santo:** ...episode number 48. You haven't been on the Changelog before... But I have to tell you, that episode resonated with me, because you said something on that episode which I think I've quoted half a dozen times since then, probably on the Changelog, maybe even without attribution, so I'm here to give you your due credit today... You said "Nobody wants backup, everyone wants restore."

**Alexander Neumann:** Yeah, that's a great quote. It's not by me, it's by The Admin Zen, which is a collection of sysadmin-related things that you should do. This resonates with me quite well, because really, a backup isn't worth anything if you cannot restore. So you need to practice this bit and do it regularly, to make sure that in the event you need something, that you can really restore it.

**Jerod Santo:** Not only that, but back-ups are kind of a pain in the butt, right?

**Alexander Neumann:** Oh, yeah...

**Jerod Santo:** It's kind of like the saying -- what's the saying? "Code is liability, features are assets", or something like this... Like, the code is actually a problem that you're gonna have to deal with, and maintain etc. The feature is what brings value. And the same thing with the restore - the restore is the value, but the backup itself is kind of a liability at the end of the day, isn't it.

**Alexander Neumann:** Yeah. And you never know if the backup will restore correctly until you really do it. And most people tend to only do that when they need it, and this may be too late already. We're trying to change that with the project.

**Jerod Santo:** Yeah. So you've been doing this project for a very long time... Like I said, you were on Go Time \#48, and I think they're in the 200's now, or close to it... So that was 2017 years ago, and you were already working on Restic for a while at the time...

**Alexander Neumann:** Yes...

**Jerod Santo:** So it's been around. Tell us about the genesis of this project and why you decided -- you already gave a little bit of the why, but what was going on when you decided "I'm gonna solve this problem in the open source world"?

**Alexander Neumann:** Initially, I tried to avoid having to solve this problem for myself, because I cannot really do everything... So I had to look around, and at the time I was in need of a backup program. Really, a few years before; I started Restic in 2014, and I've been thinking about doing it since back in 2012, or something like that.

**Jerod Santo:** Wow.

**Alexander Neumann:** \[00:04:03.04\] Because at that time we threw money together with a few friends and bought a small server, and hosted it in a data center to use as a backup box. But the thing was that there were several administrative users on that system. It was a bunch of friends, but some people I knew better of these friends, and some people I don't know that well... So it was always a concern that when I leave my data there, will it be secure? Because everybody with administrative privileges could obviously be deleting it. But on the other hand, it was like my personal data - financial statements, whatever - and I was concerned that whenever there's another administrative user, that they can access my files.

So I had to look at what other backup solutions were around there, and it basically fell into two categories. One category was the enterprisy thing, which means that there was like a daemon and a distributed system of agents, and they are meant to backup service... But I would like to just backup my working directory on my personal mobile machine, and so on... And this was too overblown. And they also tend to trust the central server with everything; the data is just collected by the agents, and the central server will just collect the data and store it somewhere, but the threat model for these implementations does not include another administrative user on the central machine, that is potentially trying to access data.

On the other end of the spectrum were tools like -- I think Obnam was pretty popular at the time, which is a backup that encrypts everything before sending it to some storage location... But it depends on GPG, which is really, really slow. So even at time I had a fast machine, but it was unable to saturate my upstream bandwidth.

So the problem with backups is that they need to be, in my opinion, really fast, and not disturb any operation... Because whenever there's something that makes backups harder, or makes it increase the amount of friction that I need to go through in order to do a backup, then I won't do it at some point, and then I will not have the version of the file that I need right now.

So the backup process itself, of saving data somewhere, needs to be as frictionless as possible. And some of these tools did not satisfy my threat model. Other tools were just too slow, because Obnam at the time had a great design, but it was depending on calling the GPG binary every time a file was to be encrypted, and this was not enough performance for me.

**Jerod Santo:** So it's worth noting you're saying things like "threat models" and "administrative privileges", and "multi-users"... So you have a security background. You're a penetration tester, just letting a listener in on that... So I assume Restic has a lot of security things baked into it, or at least that mindset is part of what Restic was from the very start. Is that fair to say?

**Alexander Neumann:** Oh, yeah. I'm working as a penetration tester, so I'm used to breaking things at work... And in the evening, I'm a recreational programmer. So I'm trying to build things whenever I'm not on the clock, so to say.

But Restic's design decisions are heavily influenced by what I see at work every day, and I also took my colleagues at work into discussions about the design, and so on... So Restic has an explicit threat model, for example, because it's always very important to let the users know what Restic takes into consideration in terms of the threat model... Like, what can it guarantee, but what maybe it cannot guarantee; that's also very important.

**Jerod Santo:** So it's very intentional about that... Why don't you go ahead and give a few of the other things that Restic tries to do right out of the box, that you think are core to what makes Restic Restic.

**Alexander Neumann:** \[00:08:05.15\] Yeah, what makes Restic Restic - that's a great question, actually. What makes Restic Restic is that it's really fast; it tries to maximally use all the resources that are available, but it tries to do that without shutting the machine down. We did that initially on accident; we can talk about that in a bit, if you like.

The other thing is that Restic must be easy to use. That's really important, because as I already said, whenever there's friction; when I have to look something up in the man page and I'm not able to find it - like the command line of tar, for example, is really awful to new users... And whenever you need, for example, while restoring an important file and your boss is on your back and breathing into your neck, and then you have to look up what the tar command line is - that is just not gonna work with backups.

So it must be really easy to use, and we're still using this to improve the workflow whenever we add a feature or correct something, we make sure "Well, how does this feature look like for new users? Are they able to understand it, or is it too complicated?" And for each option or each flag that we add to the Restic program, we always talk about "Is it really necessary to expose this flag? Do we really need that, or do we want to keep it internally? And if there are some power users who want to change this constant, for example, then they can just easily rebuild the program." This is the second important thing.

The other thing is that Restic doesn't make many assumptions about the location at which data is stored. This may be used, for example, on a shared machine somewhere, on a virtual machine where somebody else is a system administrator, and I cannot prevent (as the programmer) that somebody deletes my data, but I must be able to, as a user, detect that data is missing. This goal cannot be reached completely whenever there's somebody else as system administrator... But I need to know whenever there's a modification that would prevent me from properly restoring files. This is the deliberate attacker model.

On the other hand, we've built several layers of fail-safes into Restic, so that users are able to recognize whenever for example their machine has a problem. And we have a dedicated label on GitHub whenever Restic discovers that somebody is using faulty hardware. I think the last time I looked at the list, there was like 7-8 cases where we discovered broken hardware in the wild... So Restic has several layers of fail-safe that users can check themselves. You can also, for example, order Restic to download and check everything from the repository and see if everything is in order.

**Jerod Santo:** Very cool. So I do wanna hear that story, but first, what does it look like to use this program? So it runs on Linux, BSD, Mac and Windows, a cross-platform thing, it's written in Go, so it has that single binary, a single executable in terms of installation, and getting Restic onto other machines is very simple in that way... It just has to be executable on your path and you can run it... But let's just say I wanted to back-up my laptop's Home directory. What would that look like, if I hadn't done anything yet?

**Alexander Neumann:** It's basically a two-step process. The first thing is similar to Git, which Restic takes heavily inspiration from... You have to initialize a repository. So we try to use the same or similar works, and the same or similar meanings, so that people don't have to learn a completely new vocabulary.

\[00:11:40.26\] The first thing is that you need to tell Restic where to store the files. For example, you would like to use a folder on a USB drive, or something like that. Then you would call restic--repository--repo, and tell it to store the files at /srv/external\_data, or something like that... And then you tell it to run the subcommand init, and that's about it. Then it initializes the repository and asks you for a password twice. And this password is very important. You can also give it to the program via, for example, a password file, or call an external program to get the password, or use an environment variable, or something like that... And this password is the most important thing about the repository, because if you ever lose it, then you won't be able to access any data. I made sure that this assumption holds.

This was the first part... And the second part is just call restic--repo, with the path again, and then tell it to backup. This is the other subcommand that's important here. /home/jerod, for example, and then it will just start working.

**Jerod Santo:** Then you go ahead and just run that on a schedule, and...

**Alexander Neumann:** Yeah, basically. You have to supply it with the location of the repository where the files should be stored, and the password that the repository uses, and that's it.

**Jerod Santo:** Nice. So what about destinations? Are there lots of different ways? Maybe you can SSH to another machine, maybe you can connect to a cloud account... I'm sure there's gotta be concerns for those kinds of things. Like, where can I back up to? I've got my NAS on my home network etc.

**Alexander Neumann:** Yeah, exactly. We have a list of built-in backends that we support. There's the local file system that's the easiest one, and the other one that I had in mind when I started the project was SFTP, which means that you can use for example your local NAS or some virtual machine somewhere in a data center, as long as you're able to SSH into it and run an SFTP server. There's no need for a server-side component or anything like that.

Other backup solutions - we can talk about interesting alternatives later, maybe. Other backup solutions require to install a server-side component in the roughly correct version to be fast or responsive, and Restic doesn't need that. We have a list of built-in things, we've talked about the local folder and the SFTP server, and I think 4-5 different main line cloud storage backends, like Backblaze B2, or Google Cloud Storage, Amazon S3, and Microsoft Azure. These are the built-in ones.

We also support using another popular open source program called Rclone, which you can just use as a backend for Restic. It has a special built-in mode to be used as a Restic backend, and then you can basically use any cloud storage service that is supported by this program. Even obscure ones like FTP, or something like that, so these arcane protocols are still supported via Rclone.

**Jerod Santo:** That's interesting that you mentioned some of the cloud providers, because when I see things like Restic - and let me just say, I've never spoken to a Restic user who hasn't just raved about it.

**Alexander Neumann:** Oh, that's great to hear.

**Jerod Santo:** It's beloved by its users... And I always think "How can we bring this to the 99%?" Because we have the 1% of people who understand a terminal, and these things... And maybe it's more than 1% of the humanity, but probably not more than 2%. And it's like, this is such a valuable thing. A reliable, secure etc. well-written, cared-about program, that's gonna back up your files and really do it well. How can we get this to more people? And then I go to thinking "Well, most of the people who want that but don't have the skills are using something like a Backblaze, or a \_insert your cloud provider here\_. But they're paying them to do that... So I'm curious, when you say you have a Backblaze interface, or a Backblaze adapter, what exactly does that do, and why would I want to plug into a Backblaze? Don't they back up everything for me anyways? Like, via their built-in tools?

**Alexander Neumann:** Backblaze the company has different services, as far as I know... And one is the popular backup program, and another one is just a simple blob storage. They're using their high-availability, multi-location storage thing, and you can just use it to store files. And this is what Restic uses. It's got nothing to do with the Backblaze backup service.

**Jerod Santo:** \[00:16:12.07\] Gotcha. So it's kind of like a power user feature of Backblaze.

**Alexander Neumann:** Yeah, something like that.

**Jerod Santo:** It's like "We just want their cloud storage. I don't want all their other things."

**Alexander Neumann:** Yes.

**Jerod Santo:** Cool.

**Alexander Neumann:** And there is even a commercial offering of somebody who's written a very nice local web UI for Restic, which it's even compatible with, as far as I know, with end users who are not that technically savvy. It's called Relica, and it's written by Matt Holt, who has also written the Caddy web server...

**Jerod Santo:** Yeah, Matt...

**Alexander Neumann:** ...and they're offering it as a subscription model. And what they also added was distributed backup storage among a group of friends, so that you can join and buy the subscription, and then you can share your files with all of your friends, and you store some files for your friends, so you have a distributed backup in your local cloud of friends, so to say.

**Jerod Santo:** Right. Which is kind of where you started with this back in 2012; you wanted a server that you and your friends could all share, and could back up to there.

**Alexander Neumann:** Exactly. But with a subscription I don't think you need a server; it'll just distribute the files among your peers.

**Jerod Santo:** Right. It's like, they host their--

**Alexander Neumann:** But they also offer upload to cloud services, and so on.

**Jerod Santo:** So that's cool. Have you ever considered that for yourself and Restic? We're gonna talk about some of the open source community sustainability etc. which ultimately goes to like "Hey, valuable thing... Why can't you extract some value? You're putting all this value into the world..." And here we have some other open source people doing that with Restic, which is awesome. Have you considered anything like that for yourself, or are you just happy to hack on it nights and weekends style, and keep your day job? What are your thoughts around that?

**Alexander Neumann:** I think it's twofold. One thing is that as soon as I'm doing Restic as like a full-time job, then it may be not so interesting anymore to work on it, because it's a job... And at the moment, I can decide that this evening or this week I don't have any time for Restic, and I'll just let other people which we have right now take care of the project. On the other hand, IT security pays really well, so...

**Jerod Santo:** True.

**Alexander Neumann:** And I really like my day job at the company I'm working for. So this was not an option for me right now. It seems like also I'm not like the entrepreneur kind of person; I'm more an engineer, I think. And I'm happy that there are other services who offer Restic support, and so on.

**Jerod Santo:** Yeah, that's really cool. I think it's well said... I mean, penetration testing is really kind of like -- I've done it some; I used to do it back in college, and right out of college. I did some penetration testing on contract, and it is really kind of like a game. It can be fun, but it also can be a grind, right?

**Alexander Neumann:** Yeah, you have to write a report at the end, right?

**Jerod Santo:** Yeah, exactly. The report at the end... If you can get someone else to write that for you, then it's just fun; the whole thing is fun. But if you enjoy your day job, and like you said, it's good-paying, so you can live a quality life off that salary, and keep it fun and free, and a hobby, you don't risk ruining it by making it your job.

**Alexander Neumann:** Exactly, yeah. I also like explaining things to people, and usually our customers are very interested in what we find, so this is a very satisfying job, at least for me.

**Break:** \[00:19:27.18\]

**Jerod Santo:** So Alex, you've described to me how you use Restic... We haven't talked much about how Restic accomplishes what it does; we talked about it's written in Go, it's a single binary at the end of the day, so distribution is somewhat simple... But how does it work on the inside? Explain to us a few of the internals that are interesting.

**Alexander Neumann:** Yeah, let's do that. The first thing that Restic does whenever it sees a new file that it hasn't seen before - it will just open the file and read all the data. It will then try to cut the file into so-called chunks, which is some data blob in between 5-12k, to like 4 or 8 megabytes, which is the largest size. And it'll recognize these chunks and install them separately, independent of the file. So whenever you have the file that is a copy of another file, it recognizes that and it'll also recognize whenever there's -- like, this is a lockfile, for example, and a day later Restic sees the same file, but there has been 100 MB appended to it, then it will not store the first part of the file again, but it will see that these chunks have already been stored. So in this case, it'll do a so-called deduplication of all the data that is stored in such a repository.

This is really interesting, because the algorithm that we're using to cut the parts is able to recognize parts even if some data has been inserted at the beginning of the file; then you will just have changes in the first chunk, but all the others will still properly deduplicate. So it's different from most other backup solutions which work on either complete files, or strict one-megabyte boundaries of these chunks.

When Restic reads a file, it will see which chunks the file consists of, and it will upload only the new chunks that haven't been seen before. So you have a global deduplication within one repository, which is very space efficient. And basically, if you have a backup which contains not much changed data, then you will only have to store the differences to the previous version.

In contrast to the other backup programs that have been out there for a long time, Restic doesn't distinguish between full backup and an incremental backup. In this case, every backup Restic stores is independent of all the others, so that you can just restore the backup because it just consists of a list of files, and a list of chunks that the files consist of. So you need to do an operation called prune, which does a bit of garbage collection; whenever you remove a snapshot, according to the policy, for example, then it needs to look up all the chunks that are stated in the repository and remove the ones that aren't used anymore.

**Jerod Santo:** Interesting. So with a Restic repository backup you have snapshots, effectively...

**Alexander Neumann:** Correct.

**Jerod Santo:** ...each time that Restic is scheduled to run. So if you schedule it once a day, it'll have 31 at the end of January, right? Snapshots of what your files look like on disk at the time it ran.

**Alexander Neumann:** Exactly.

**Jerod Santo:** But it does do incremental insofar as it's saving differences between those snapshots, but you can also -- maybe I didn't track... You said it's not incremental, but it sounds like it is. Maybe explain it again.

**Alexander Neumann:** Yeah, it sounds like it is...

**Jerod Santo:** \[laughs\] You confused me.

**Alexander Neumann:** Let's say you create a picture at the 1st of January - maybe a New Year's Eve celebration, something like that - and you store it in a folder that is saved by Restic. So at the 1st of January, Restic will reach the files, split it into chunks, and store these five chunks somewhere in the repository. Let's talk about that in a bit.

\[00:24:11.10\] And on the subsequent days, whenever it sees the file, it will first recognize that it has seen this exact file before, so it will not store it again, but just use the list of blobs the file consists of from the previous backup done at the 1st of January.

And whenever you modify the file... For example, let's say you add a fancy border around it or something like that, and save it again - it will recognize that the file has been changed, and it will read the file again. A picture is not a good example here, because let's say only the beginning of the file and the end of the file have been modified. In the middle, the 20 MB file and the 15 MB in the middle are completely unchanged. Restic will read the files, see that the first few chunks at the beginning and the last few chunks at the end have been modified, so it'll make a new list of chunks the file consists of, and it will only store the new chunks that haven't been stored before in the repository.

Each of these snapshots are completely independent, which means that Restic stores all the metadata information for the file on the 1st of January, which means the file name, and the modification timestamp, and the list of chunks it consists of. And when you change it on the 5th of January, it will also store this metadata information, which means the file name, a new modification timestamp, and a new list of chunks it consists of.

**Jerod Santo:** Gotcha.

**Alexander Neumann:** So the Restic repository really stores a few different things... The first is the arbitrary number of chunks, and the other is metadata information for files and folders. And the third is the snapshot information - when was a snapshot made, and which metadata does it consist of.

**Jerod Santo:** Yeah. So you kind of have the best of both worlds, because with the incremental backup generally you have your last full backup, and then you have 95 incrementals since then, or however many there were... And in order to get to number 94, you have to have the full, and then you have to also be able to run, usually, in order, those incrementals to get to the point where it is. But this has the advantages of incremental, insofar as you're storing incremental changes, or you're storing just the new chunks, or the changed chunks...

**Alexander Neumann:** Exactly.

**Jerod Santo:** ...but the incremetal backup itself is not incremental, because is has the metadata it needs. That's pretty neat. Now I track you.

**Alexander Neumann:** Yeah. And whenever you need -- at least on macOS and Linux and BSD, whenever you need a file but you're not really sure which version of it that you need, then you can just use Restic mount and have a fuse mounted (a virtual file system) and you can browse all the snapshots and all the files in there... And you can use your regular shell functions like find and ls and \[unintelligible 00:26:58.20\] and so on, to get to the file version that you need. And it will only fetch the data from the possibly remote repository that it needs at that time... It's really fast, it also has a local cache with metadata, but whenever you open a file, it will only pull down and download the chunks that are needed to fulfill the user's request and show it the picture, for example.

**Jerod Santo:** Gotcha. So the backup repository is very much a Restic thing, in terms of you're not mirroring a file system onto a backup.

**Alexander Neumann:** Yeah.

**Jerod Santo:** In other words, you need Restic to restore.

**Alexander Neumann:** Yes.

**Jerod Santo:** If Restic backs it up, you need Restic to restore.

**Alexander Neumann:** Yes, that's right. Right now, by the way, we've achieved complete version compatibility even with the first released versions of Restic. So you can still use a very old version of Restic to restore a repository that has been created recently with a recent version, and vice-versa.

\[00:28:01.23\] What we also have, and which was really helpful, because people started to reimplement the repository algorithms that we used in other programming languages - we have a complete specification written down as a Markdown (I think) document, which is completely independent of the implementation of Restic itself. This was very handy to have.

I've started with Restic and implemented the chunk-cutting algorithm and everything, but then I sat down and wrote the first version of the design document, which is, as I said, independent of the implementation. It is really valuable to get back to that, and improve the wording, and so on... And also, show it to other programmers who are interested in understanding the data structures involved, so we can just point to the document and say "Okay, this is the set of vocabulary that we use, these are the data structures..."

At the end of the day, a Restic repository is just a collection of files and folders, and there are files there consisting of the data chunks, there are files in there consisting of the metadata chunks, and there are a few other files, like for example for each snapshot there is a small file that contains the timestamp of the snapshot, and the user, and which metadata, and files and folder structure it references... And you can start from that and then look at the implementation and how Restic does things.

This was one of the very interesting discoveries when I discussed it initially with my friends and my co-workers, that the most important thing about the Restic project is not the implementation itself, but it is the repository format... Because users expect that they can restore their backups even ten years or twenty years from now. So the most important thing is not what features does the backup program have, but how good is the specification of the storage format.

There are toy implementations that reimplement all the things needed to access data in a Restic repository from scratch, just by using the design document. This is somehow like the -- I think there's a FreeBSD manual which explains the design of the operating system FreeBSD from the ground up. I haven't read it, but it's on my bucket list to do that. This is something like that for the repository format.

**Jerod Santo:** Well said. You obviously saw where I was driving to when I said "You need Restic to restore Restic", because if restore is the feature and it's not stored as like an operating system level primitive - although it is, at the end of the day, but it has its own format - then you obviously want Restic to be around... But it sounds like you guys are well prepared for backwards compatibility, and even this specification where Restic could disappear, it could be completely changed, but somebody could go out and reimplement the restore, because it's been documented so well... So that's spectacular.

**Alexander Neumann:** Yeah, this was really important for me, because the realization that the storage format is more important than the implementation and also the community - this is something that once you've thought about it, it's easy to see in hindsight; but to arrive at this point, I had several discussions with many people before realizing it.

We have a forum where people can ask questions and usage stories about it, and one person there asked about "Why was Restic written in Go?" and I have tried to answer that, but the first thing that I made sure to include in this section was like - the programming language is nice to have, and I really love the Go ecosystem, but the programming language is not the most important part of the project, and even the implementation isn't. It's the repository format and the backwards-compatibility.

I also made sure that -- at the beginning I had the decision between which license I should use for Restic, and I've decided that at least for all of my code and all the code that's contributed to Restic it's the 2-Clause BSD License, which is one of the most permissive licenses there is... So it's no GPL, or anything like that. You can even take the code and use it commercially, without contributing back.

**Jerod Santo:** \[00:32:20.19\] What led you to that decision?

**Alexander Neumann:** At first, when I started with free software in the late '90s, the GPL was really popular. If you're using GPL software and you're developing it further, then you have to contribute your changes back, at least when you start publishing your software. But in practice, what I also saw, for our customers for example - it was really hard sometimes to use GPL software in a commercial context, because of the considerations that the legal departments of the companies for example have against the GPL. So whenever you have -- like, they are not a user of a program, but they are modifying it and using it for internal processes, for example, then it's sometimes hard to get a GPL program or GPL library approved at all. And this is one other thing that can be a source of friction; whenever you have a license that you need to get approved before you can use a program, then maybe you postpone implementing backups until someday you need a restore and you don't have a backup.

So maybe I'm too naive or too idealistic, but I think that the 2-Clause BSD License is a great choice for a backup program.

**Jerod Santo:** What else is cool or unique about Restic?

**Alexander Neumann:** Everything in a Restic repository, besides the really tiny bits of data, is completely encrypted. As I said in the beginning, when you initialize a repository, you have to supply a password, and this password is not optional. You have to supply some kind of password, and it uses strong cryptography and stores everything encrypted. So all these data chunks that I talked about earlier, and all the metadata - it's all encrypted. There is almost nothing that's not encrypted in a Restic repository. So the security is very important to me personally there.

**Jerod Santo:** So write down that password somewhere, because if you lose it, you lose your backup.

**Alexander Neumann:** Yeah, sometimes we get discussions with people who'd like to use Restic but don't have the necessity to have strong cryptography encrypt their data. For example, they are storing the repository on an already encrypted drive, and they'd like to spare the CPU cycles to encrypt the data, so they would like to have an option to turn off the password requirement, for example. But that's really hard to do with the current design. The easiest would be to just use some dummy password. But if the people are required to input some password, even if it's a password like "test", this alone makes it a bit harder for attackers to just guess and just use the default password. So this is why we don't permit using empty password, for example... So that you have some kind of hurdle for \[unintelligible 00:35:01.10\] attackers there. And even if you use a single-character password... Yeah.

What happened with other backup programs was also that once you have a code path that Restic for example could be used with a repository without supplying a password, then sometimes there were bugs in the past for other backup programs, so that attackers could for example remove the original repository for a user, create a new repository that's not encrypted, and on the next run of the backup tool the data is saved without encryption. So this was something that I'd like to prevent with Restic, so there is no code path in Restic which leads to a repository with data that is not encrypted.

**Jerod Santo:** Yeah. I think that's a good stance to take. I could definitely see where the pushback would come, because it's definitely a convenience versus security trade-off...

**Alexander Neumann:** Yes, it is.

**Jerod Santo:** But some things, you might want them to exist in duplicate, but you do not care about them being private, or secret, so you want the convenience. I'm sure you have better reasons than I would have why people might want that, but I could see where that would be something that certain folks would want.

\[00:36:15.00\] That being said, the other advantage of staying strong on that particular feature is you don't have to bifurcate anything in the code; and I'm not sure how it's architected. Maybe this is a simple place where it's like "To encrypt or not to encrypt", and it's just like a toggle... But lots of times those kinds of decisions end up kind of permeating the codebase, where you have to check in a bunch of places what you're gonna do or not do. How's Restic designed? Would it be a simple change, or would it be a complex thing to allow for unencrypted back-ups?

**Alexander Neumann:** It would be a really complex thing. Supplying a default password and just encrypting the data anyway - that would be a rather easy change. But everything in a Restic repository is encrypted, which means that a chunk of data, for example, coming back to the example of your photo that you took at the 1st of January... All the data chunks are encrypted and then signed, and then concatenated together as a file of multiple chunks, and then uploaded to the repository. And the metadata information for the folder that contains the file is a JSON document internally; it's encrypted, it is assigned, and then it is uploaded to the repository.

So whenever you have these things, at every place you would need to check if it's a repository that should only contain encrypted data, or is it not. So you'd have to insert this check at every place.

The other things that -- all the files, or almost all the files in the repository are named after the SHA-256 hash of the content. So on a server you can easily check with the SHA-256 sum tool that a file is unmodified; that there is no bit rot. And you can do that from the outside, without even having a password for the repository.

Some design decisions within Restic - for example, there is also lockfile whenever you do a backup or you start a backup. Restic uploads a lockfile to the repository to tell other clients that might be run concurrently that currently a backup is in progress, so that you don't start removing just uploaded data chunks, for example.

And the creation of these lockfiles, for example, require that the filename is always unique, and we guarantee that by taking the encryption properties into account. For example, each encryption generates a new nonce value, which is like a 16-byte random value, which leads to a completely different filename, because the SHA-2 hash of the content is completely different. All these things that you would lose whenever you rip out the encryption.

You could say that "Okay, let's not encrypt, but let's sign the data", which is not the baddest idea, because you can verify that a data has not been modified, for example by accident even... But you'd need to rip out the cryptography and the encryption everywhere, and it's tightly integrated. I think that's a good idea. That's a feature.

In general, the Restic program and the community around it is pretty opinionated. We took that from the Go project, which is also pretty opinionated. We're not trying to cater every use case.

**Break:** \[00:39:28.09\]

**Jerod Santo:** Alex, like I said in the beginning, one of the things I'm impressed by is how long you've been working on this project. Restic 0.12, your most recent release, February 14th. Still truckin'. Still making improvements. That one had many speed improvements, and a special thanks went out to Alexander Weisz, who did those. So you have a bunch of people helping you out here; it was a major release. A lot of cool things done by Alexander... Tell me about the community around Restic and how you've built it in to be something that people are making major contributions to.

**Alexander Neumann:** Yeah, that's a very interesting thing. I'd like to thank all the community around Restic, because when I started the product, I was on my own... With two friends helping me out sometimes, but I was the main developer. I still think that most of the code is written by me, but I think at some point there will be the point where I'm in the minority... Because somehow the project attracted a few very talented engineers, and we even have people hanging out in the Discourse forum that we installed for Restic... And just helping other people.

In the beginning I made sure to set the right tone, so I responded in a cheery way, and whenever somebody hit a bug or something like that, I would say "Oh, I'm sorry that you hit a bug. Here's what you can do." This was really important, and set the tone for all the other interactions happening in Restic project spaces.

I mentioned the Discourse forum a few times already, and I think this is an excellent piece of software, that helped us very much, because it's almost no work to moderate it, because there are community moderators. Sometimes even they can just flag things with Spam for example, and whenever three or more people have flagged it, who spend enough time around in the forum, it will be automatically hidden from the public, and so on.

And setting the tone in the beginning really set the tone for the whole project, in the GitHub issues, in the forum... And people are so helpful and so positive, it's amazing. And this attracted people who just hang around in the forum and helping people. They don't contribute code, and they don't need to; they are just trying to help other people, and I think that's completely amazing. That blew me away whenever I see that.

We managed somehow - and I'm not sure how - to attract several great engineers, for example. There's Michael, who does a lot of the bug fixing and triaging things. There's Leo, who responds to issues, and there's Alexander Weisz, who from scratch (more or less) reimplemented the garbage collection algorithm that at the beginning took a lot of time, because I wrote the algorithm in the dumbest way that I can imagine, in order to be really sure that no data that is still used is accidentally removed.

\[00:44:01.18\] I took a week of vacation last year to just read through all the code that he did to really make sure that there are no bugs that I could spot, and afterwards I merged it. These speed improvements are completely awesome, because we didn't have to change the repository format in any way. This was like -- changing the repository format is out of the question for most things... But setting people limits, in terms of technical limits, like, "The data structures are this way, and we have to keep backwards-compatible changes..." And sometimes they get really great ideas on how to improve the speed without changing the repository format, and without changing the barriers that I set them... And it is amazing.

**Jerod Santo:** Let me back up for a second... You took a week off of vacation to work on Restic? I mean, talk about amazing...

**Alexander Neumann:** Yes, I did. Sometimes I like to call myself a recreational programmer, and I had a bit of vacation days saved up at the end of last year, and my wife just started working again after having kids, and she didn't have the vacation days, so I just took them and I had a bit of spare time for myself... And then I took a coffee, got into the basement and started reading GitHub issues and pull requests, for example.

At the moment, unfortunately, the project is way too large for me to manage it myself, so we have a bunch of people helping out there. At the moment, I'm not contributing as much as I'd like to. We have a global pandemic going on and my life is crazy right now... But it's great to know that I can jump back in and they will just ask questions that are more like management things, like "Shall we do this, or is it maybe a better idea to leave it out of the project?" This just feels great, to know that there are other people caring about the project and keeping the work going and improving it.

**Jerod Santo:** Yeah. That's spectacular, and I think they follow your lead. "Here's a guy who is willing to sit down and triage issues on his vacation, and look at PRs..." You very much show that you're dedicated to this project, even many years after you began it... And kudos to you on the community that you've built, because as you had that insight of like "Well, you have to lead with regards to the way you want people to act", and you had to be upfront with that... Because culture really does come from the core, and the first person that starts the project is the core. So you've built this cool community culture around Restic. Any other lessons learned that you've had over the years? Because you've been doing this for seven years, eight years now maybe, working on it?

**Alexander Neumann:** Yeah, something like that. The first released version was in April... I started working on it, I think, in April 2014, or something like that, so it's quite a while back...

**Jerod Santo:** Yeah.

**Alexander Neumann:** And the first recommendation that I have for other projects is install a Discourse forum. The software is really amazing, and it's valuable to distinguish between bug reports and feature requests, and other things, like users asking "Okay, I have this setting and I'd like to do backups this way. Is there a better way to do it?" or something like that... So that you have a separate place for other discussions.

The second thing is that sometimes people sound harsh on the internet, but it's not meant to be harsh... And sometimes it really helps to clearly point people out, like "Okay, you come across as very aggressive, or very demanding... Sarcasm doesn't help here. Can you please say it in another way?" Just write it in a GitHub issue, and most of the time they'll respond like "Oh, you're right. I'm really sorry. I wasn't in a bad mood, or something like that... So this is what happened."

\[00:47:51.25\] Another trick that I've just copied from another open source project is that whenever you report a bug or a feature request for Restic on GitHub, you get a questionnaire of things that you'd like to do, like report the version number, which operating system are you on, what are you using for storing the repository... And at the end of the issue template, there is the question that "Did Restic help you today? Did it make you happy in any way?" And at the end of a bug report, whenever I read through a bug report, I can see "Okay, this failed. The user got a strange error message that I didn't manage to format in a nice way. The program spit a backtrace at the user and they are confused and they didn't know what to do... Maybe it was important", or something like that...

And at the end of the issue template, you read "Okay, Restic is an amazing program. It saved my ass several times already. Just keep continuing what you do", and oftentimes we have a really dry and maybe even bad/negative-sounding bug report, and at the end of it there is a really positive ending, because the user is really happy and would just like to improve the program and get a bit of help on how they can, for example, restore files... And this trick is really amazing, because it gives you a personal connection to the bug reporter, and it really makes it much easier to gauge is the user just pissed at the program - because it didn't work, or is it just like "Okay, you can fix this sometime. It's not important anyway."

This is a really nice trick, and if you look at the issue template in Restic's repository, I even included a link to the other repository that I got this trick from.

**Jerod Santo:** Yeah, that's spectacular. I think it's always an advice that I've given and I try to practice when I open up a bug report or I ask a question "Why is this not working the way I expect it to work?", that I try to provide some level of praise or positivity about the thing... Either at the beginning or at the end; or if you can sandwich it - great. Sometimes you're not feeling all that positive about it, so you have to work harder...

And I've seen it happen, so I see other people do that as well... But I think if you're prompting somebody, you're kind of actually giving them that explicit opportunity where maybe they weren't even thinking about it. A lot of times when it's time to report a bug --and it depends on the project; maybe with Restic it's not this way, but if it's a library you're using, or a framework... Sometimes you're hours into it, and you've thrown up your hands, and you can't figure it out... And maybe it is your own problem for a while, but then you realize "Oh, it WAS the library" or "It WAS Restic's fault." And it's just at that spot to take a breath and look at the bigger picture. But maybe you've been down that road because you've been using Restic for all these years, backing everything up perfectly, and then you've found this little issue... And that prompts somebody to say "Oh no, I love Restic. This is one of my favorite things ever. I'm just really mad at this particular moment..." \[laughs\] So I think giving people that explicit prompt to have that opportunity is a great idea.

**Alexander Neumann:** Yeah, it's really motivating to read that, because in the issues usually (for most projects) you get all the negativity - all the bugs, all the missing features, or whatever... And having every issue report end with some kind of positive note really helps tremendously.

I was completely blown away by how people use Restic. For example the CERN, the European Atomic Research Institute - I'm not sure what the correct name is; I think it's in French - they are using Restic. I've found that out by somebody who tweeted at me and said "Hey, here's a presentation about Restic at CERN. What they are doing?" And then the author chimed in and it turns out they are using it for one of their computer pool installations for like 60k users, something like that...

**Jerod Santo:** Wow.

**Alexander Neumann:** \[00:51:53.17\] And sometime in (I think it was) November, several years back, somebody opened an issue and said "Okay, Restic is not working here..." and I said "Okay, can you debug this and paste the output?" and he said "I can do that, but in order to download the debug binary, it will take until tomorrow." And I was like "Do you have some kind of problem with the downstream bandwidth? Why are you using a remote repository?" and so on... And it turned out they were on a ship, cruising through the Arctic in a scientific expedition, and they were using Restic with MinIO to back up all their research data.

**Jerod Santo:** Cool.

**Alexander Neumann:** They only had satellite internet, with 64 kb/s bandwidth, and Go binaries are great, but they are not that small...

**Jerod Santo:** Right...

**Alexander Neumann:** So I made sure to send them a source code patch so they could build it locally. This was just amazing, knowing that my little backup program that I'm doing in my spare time for recreational purposes is used by scientific installations and scientific institutions to save really important data.

**Jerod Santo:** Right. Well, the fact is that some data is so important that the backup - it's everything. It's peace of mind, especially when you know you can restore it. But having that backup is such a peace of mind... That's why I think it's not a surprise that so many people who talk about Restic love it... Because it's like, "This program has my back. This has my backup, literally." And maybe my job's on the line; maybe nuclear research is on the line. Maybe this science experiment is on the line. Whatever it is. But if it's working the way I expect it to, I can sleep better at night. Not much software does that; it gives you peace of mind.

So it makes sense to me that this is a hobby/passion project that you've been able to sustain for so long - no financial arrangements, a lot of hard work over the years - because you're really affecting people's lives in a really positive way, and I'm sure when you hear those stories, it feels so good.

**Alexander Neumann:** Oh yeah, it does. Unfortunately, sometimes it guilt-trips me into spending more time on Restic than I'd like... Years ago I've switched off all GitHub email notifications, because my inbox on GitHub is completely unusable with a project with 12k stars... And we also have many more pull requests open than I'd like to have, but we don't have the resources or the time to review them all. Sometimes people contribute something, and it takes a lot of back and forth, or they even don't get a response for several months... This is an issue with several other open source projects as well.

Sometimes in the evening I have a bit of spare time and I read an issue request for somebody who's lost their master thesis and their repository is broken because the RAM was bad, or something like that... And at some point I spent half of my night writing a patch for it so that they can at least restore part of it; they were really grateful and it felt amazing to help them, but I cannot do that every week. That's out of the question. So I turned off all the notifications, and I only look at Restic whenever I have a dedicated hour or two to look at it...

In the last 2-3 months I haven't really been able to do that regularly... But I'd like to do that. At the moment we have winter in Germany, so it's long nights, and it's very dark, and I just usually go to bed early and leave the GitHub notifications when I have the time for them.

**Jerod Santo:** Yeah. Do you have an exit strategy? Is there a future for Restic beyond Alex, or no? Are you eternally linked?

**Alexander Neumann:** That's a great question. At the beginning I made sure to not link the project to my person so much, so I created a GitHub organization for it, which is independent of my personal account... And I also made sure that other people have administrative access. So two of my best friends have administrative access to the organization in case I'm not available anymore, and there are, I think, around 10 or 12 people having write access to the most important repositories, for example Restic itself.

\[00:56:20.07\] So whenever there's somebody who submits a pull request and one of the other people who have write access approves the pull request, then it can be merged, even without my intervention. And I made some notes -- there's a governance.md markdown file in the Restic repository to tell people how the project is structured... At the moment I'm the benevolent dictator for life, but it doesn't need to be like that forever. I can see that the Restic project is taken over by somebody else at some point in time.

So it works really well at the moment, with me being in the loop for big decisions, and for the day-to-day bug triaging many other people invest their resources... At the moment it works really well, but I can think of situations where I will step back whenever there's the need for it, and appoint somebody else as the new benevolent dictator for life.

**Jerod Santo:** There you go. So let's talk about the future a little bit... Restic is at 0.12, as I mentioned. That's 7-8 years in the making to get there... Is there a 1.0 ever gonna be a thing? And it does look like it's maybe semver, so you're hesitant for 1.0, I suppose, because it's such a big thing to commit to... But I'm just curious what does 1.0 look like, or what is the next release at Restic; what's going on down the road?

**Alexander Neumann:** Initially, I started with the 0.something releases to be able to at some point say like "Okay, at this point we break the repository format and we add something or change something that's not backwards-compatible." But this hasn't happened the last couple of years. The most important thing that I think in terms of the backwards compatibility for the repository would be to add compression. Restic does not support compression yet, because the data would need to be compressed before it is encrypted by Restic. So you need to have something built into Restic.

I can see a way how to add compression to a repository, but this would break compatibility with prior versions of Restic who don't know about compression. Once we add that, i can think that it would warrant a release of 1.0, or something like that... Like, okay, before we had everything was compatible, and you can even use the newer version of Restic to restore from old repositories... But whenever you initialize a repository with 1.0 and have compression support, then you cannot restore with an older version. We also have a version field in the repository, so Restic can even give you a nice error message that it's unable to understand the repository format because it's too new. So this would, I think, warrant a 1.0.

Unfortunately, changing the repository format can open a can of worms, because there are so many things that could be made better... And personally, I started working on this, but I'm not sure where to stop. Like, do I just add compression, or do I also add support for error correction? Whenever you have a file where there's a one bit flip and you cannot restore this chunk in this file, because there's a bit flip, and the signature doesn't match anymore, and Restic says "Okay, the ciphertext verification failed because something is wrong" - it would be nice to have, for whatever correction, as Reed-Solomon called, for example, where you make every file 10% bigger in order to be able to correct one or two bit flips. This is an interesting feature to have, but does it warrant another repository version, or do we do this in one step? And I'm not sure where to go from there.

\[01:00:04.18\] On the other hand, changing the repository format is not an easy thing to do, because you have to keep so many things in mind... And until somebody else steps up and really does that to my liking, I don't think we will get that for now... But I hope to find the time in the future to really do that. I'd really like to do that. I'd like to add compression.

In the beginning I didn't add it because there were concerns by several users with also a crypto background - crypto means cryptography in this case - that adding compression would mean to increase the attack surface that attackers can use. For example, there were several issues with compression in the TLS protocol, which is something different, because it's an interactive protocol and sometimes they have a man in the middle/person in the middle modifying the packets as they go... This would be a bit different with a repository, but there's also like -- yeah, I can access a repository, the attacker changes something, the next day I access it again... So you have some kind of back and forth.

And the other thing was that at the time I designed the repository format there was no great compression algorithm already baked into the Go standard library, or available as an external library... But this has changed, because there is a person called Klaus Post; he's working in Copenhagen, and he does all kinds of completely crazy stuff with compression. He's also a Restic user, by the way, and there's this issue 21, which is infamous, and I've locked it for now, because there's so much discussion about "Shall we add compression to Restic?" because the answer is obviously yes, but people tend to get distracted by discussing the merits of different compression algorithms. This is the classic bikeshedding problem...

**Jerod Santo:** Right...

**Alexander Neumann:** And Klaus turned up in the issue and made a comment like "Okay, it would be nice to have compression", and then I responded "Okay, what would be the compression algorithm?" and after a bit of back and forth we decided that Zstandard would be a great fit... But there was no Go library available for it. We could use a C library and link it from Go, but I'd like to keep it a Go-only project if possible, and not have any C or C++ code in it, because I like the memory safety guarantees that Go gives me... But unfortunately, that would all be void as soon as you link any C code into it.

And yeah, then Klaus started writing a compression library in Go, and implemented Zstandard for Go. It's almost as performant as the C version the last time I looked. And sometimes he is on Twitter and tweeted "Okay, I had an evening of free time and I made the compression algorithm 10% faster."

**Jerod Santo:** \[01:02:54.11\] Wow.

**Alexander Neumann:** And he keeps doing that, month after month after month. That's completely amazing. So this would be my obvious choice for a compression algorithm.

**Jerod Santo:** I will link up famous issue number 21... 167 comments by the time that you locked it...

**Alexander Neumann:** Yeah, it's really long.

**Jerod Santo:** ...so if you want a long read, and probably some fun back and forth, and some real bikeshedding action, you can find that in the show notes. That's funny.

**Alexander Neumann:** The problem with compression algorithms is that there are so many of them, and if we were to add compression to Restic, there will be like three settings. The default one would be Auto, which would leave Restic to decide if some chunk of data should be compressed or not, and the other things were completely off. I would get the speed as fast as possible, and optimize for minimum size. So whenever I have a small upstream bandwidth of just one megabit or something like that, I can make the most use of it. So this was everything. And I would like to avoid having the user being able to choose the compression algorithm as a user. Other backup programs do that, but for Restic we are opinionated and say "Okay, we will make the decisions for the users", which means we don't cater to any use case... But that's fine \[unintelligible 01:04:08.29\]

**Jerod Santo:** Very cool. Alex, anything else, any ground we have no covered, or anything in your notes that you wanna make sure "Oh, this has to be in the conversation" that we haven't quite gotten to?

**Alexander Neumann:** I don't think so. We did not cover all the different commands that are available for Restic, but give it a try. Kick the wheels and let us know how it goes. Come by, hang out in the forum and just tell us what you like, what you don't like... That's perfectly fine.

**Jerod Santo:** Excellent. Well, listener, know that all the links to all the things are in the show notes. You can go back and listen to Alex on Go Time \#48. We've got Restic in there, Relica, we've got the GitHub issue \#21, you can check out that issue template - all the things. So definitely follow up and check out Restic. It's got your back...

Alex, thanks so much for coming back on the show and talking to us about backup. Thanks for all the work you've put in over the years. I mean, taking a vacation to work on an open source backup program is so epic... I just appreciate your dedication to the program and all the value provided for backing up people's files all these years. Pretty awesome.

**Alexander Neumann:** Yeah, thank you. You're welcome. And thanks for having me.
