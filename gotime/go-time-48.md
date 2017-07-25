**Erik St. Martin:** Alright everybody, welcome back for another episode of GoTime. Today's episode is number 48. Today's show is sponsored by Toptal, and on the show today we have myself, Erik St. Martin; unfortunately, Carlisia could not make it, but Ashley McNamara was so gracious to join us...

**Ashley McNamara:** Hello. I am not replacing for Carlisia... She's great. Hi, I know you're listening, wherever you are!

**Erik St. Martin:** Yes, she will start listening here soon.

**Ashley McNamara:** I'll only say \[unintelligible 00:01:10.11\] once... There it is.

**Erik St. Martin:** \[laughs\] Do you have your cheat sheet? And then we have Brian Ketelsen here, although he does not sound like Brian Ketelsen...

**Brian Ketelsen:** I don't... I sound like the nasal Brian Ketelsen. Sorry about that.

**Erik St. Martin:** He's auditioning for the next Mucinex commercial. \[laughter\]

**Brian Ketelsen:** I bought my second round of antibiotics for this monster thing, so... One of these day's it'll go away.

**Ashley McNamara:** I may or may not have given it to him. We don't know that yet.

**Brian Ketelsen:** Shhh! We're not supposed to tell anybody about that, Ashley. We were gonna keep that our secret.

**Ashley McNamara:** I think \[unintelligible 00:01:51.15\] I think I gave it to everyone; I don't know...

**Erik St. Martin:** And then our special guest for today's show is Alexander Neumann. Now, I'll let you kind of lead in a little bit of kind of who you are and what you're working on. He came today to talk with us about a very cool backup program that he's written... Over like three years I think you said, right?

**Alexander Neumann:** Yeah, I got started in 2014, something like that. I have a formal background in computer science and math, but I'm also a recreational programmer because I work in infosec IT security as a penetration tester, so... While it's fun to break things and get paid for it, sometimes it's also nice to create something. A few years ago I tried to find a backup program that would suit my needs and discovered that basically all the backup software that I looked at at that time was either very old, or broken, or both.

So I started a new program and I tried to find a project for writing something in Go, and I felt that "You know, maybe a backup program", and using Go for systems programming once in a while is a nice project... It turns out that a lot of people liked it, and also my colleagues liked it, so we went on to discuss the concept for this backup program. This is really nice, and many other people also like it.

**Erik St. Martin:** Now, Brian, you wouldn't know anything about not being able to find a backup program you like, would you? \[laughter\]

**Brian Ketelsen:** Well, I have to say I've been using Restic for about three months now...

**Alexander Neumann:** Oh, that's awesome!

**Brian Ketelsen:** And I have a Bash script that runs in cron that backs up locally on my laptop, and then one -- so it alternates it: it does a backup to my laptop, and then it does a backup to my network-attached storage, both using Restic. It is faster than hell! I can't even get over how fast it is... It's awesome!

**Alexander Neumann:** Yeah, and this is even with all the deduplication and work, and every byte that needs to be deduplicated and needs to be read is accessed at least three or four times. I think one of the main differences between Restic and all the other backup programs is that for Restic the focus is really on the one hand security, but on the other hand speed and usability, because nobody wants backup, everybody wants restore, right? So backup needs to be very fast, because otherwise you are tempted to skip it. If it's too slow or too complicated to do, then you think "Oh no, I'm not gonna do the backup today. Maybe tomorrow, maybe next week", and then your hard drive burns down and all the data is lost.

I think it's very important to make it very easy for users to just run a backup now and then, and not needing to think about it, and how to \[unintelligible 00:04:47.25\] and so on. The program should figure it out, and I can restore my data later - that's the most important thing. And I'm glad you liked it.

**Brian Ketelsen:** Well, my GOPATH is 25.1 gigabytes, and the backup locally takes less than a minute and a half, with all the compression...

**Ashley McNamara:** That's crazy.

**Brian Ketelsen:** It's just insane. It makes me so happy.

**Erik St. Martin:** I really like that analogy, too - nobody likes backup, everybody likes restore.

**Ashley McNamara:** That's true.

**Brian Ketelsen:** True.

**Erik St. Martin:** It's so true!

**Alexander Neumann:** Yeah, it's not from me, it's from the AdminZen. It's a website that's collecting all the wisdom that administrators need to keep in mind, and this is one of them. Nobody wants backups, everybody wants restore.

**Brian Ketelsen:** I like it.

**Erik St. Martin:** Yeah.

**Ashley McNamara:** So why did you choose Go?

**Alexander Neumann:** To be honest, I was in need of a project to learn Go and have a look at the language. I've used several languages before, starting with Pascal and Delphi when I was in school.

**Erik St. Martin:** Oh, Delphi...

**Alexander Neumann:** Yeah, Delphi on Windows 95, or something like that... I did a lot of things with Delphi.

**Erik St. Martin:** There was a Trojan horse that I used to hack on back in the '90s that was written in Delphi. \[laughter\]

**Alexander Neumann:** Was it Sub7 maybe?

**Erik St. Martin:** The Trojan?

**Alexander Neumann:** Yeah, the Trojan.

**Erik St. Martin:** This one was called DeepThroat, I think. I forget what Back Orifice was written in...

**Brian Ketelsen:** Oh, my God...

**Alexander Neumann:** I think it was C \[unintelligible 00:06:23.18\] \[laughter\]

**Brian Ketelsen:** It was a family-friendly show...

**Ashley McNamara:** Nerd so hard right now...

**Brian Ketelsen:** Oh, my God... \[laughter\] Ashley and I are just gonna take a break and blow our noses while you guys have your little nerdgasms with all of these sexually-connotate penetration-testing names... \[laughter\] Back Orifice...

**Erik St. Martin:** That term didn't even exist in the '90s though.

**Alexander Neumann:** Yeah, so Go was just a tool for getting the job done. I would like to have a backup program, and basically I started this to scratch my own itch. Go came along, and I would like to do something in Go, so it was Go. To be honest, I really liked the community and so on, but the most important part of this Restic backup program/project is not the code itself and also not the programming language... For a backup program the most important part is that you can always restore the backups, even like 10 years in the future, or something like that.

I started developing some things and trying out this cool deduplicating algorithm that I found in an old math paper, and then I basically started and wrote a detailed design document for the server-side storage data that is to be backed up.

Usually, my programs (at least before Restic) tended to be like I'm hacking on things, and the specification is the code... But this is not a good idea when you plan to restore from a repository that has been created like 10 years before; for maybe that the code doesn't compile anymore we have like Go 3, which is not backwards-compatible to Go 1, so it's very important to have this specification which is separate from the actual code.

Somebody even started a Python implementation for the repository format, and so on.

**Brian Ketelsen:** Oh, that's neat.

**Ashley McNamara:** Yeah, that is pretty cool.

**Brian Ketelsen:** Well, I have to say, looking at the repo, one of the things that we do before the show - we kind of go in and look at the source code... And you have committed your vendor directory, and I say kudos to you, my friend! Kudos to you for committing that vendor repository. That is awesome.

I think as a person who ships binary, you should commit that vendor directory if you want to have reproducible builds, and your whole point is to have nice, simple, easy builds for the people who are using Restic, so good job!

**Alexander Neumann:** Thank you! This is actually one of the things that took some time to \[unintelligible 00:08:49.27\] a binary that can be described completely by the GitHub commit ID that is currently checked out in the branch.

The other thing in Restic that's a bit different from other projects - maybe other projects like Camlistore and Docker already also have that - we have a build script called build.go. At the moment you can't install Restic by using go get, and some part of that is intentional, because when I'm using go get, then I don't have any information when this binary was built and which code exactly was built into the binary, apart from the timestamp of the binary itself. But the build script uses the vendor dependencies and also includes the commit ID or the version number in the \[unintelligible 00:09:39.14\] binary and in the GitHub issue template I have this slot for "Please insert the output of Restic version here", and there's everything you need: there's the build timestamp, there's the commit ID, there's the version number, there's the Go version and the operating system and architecture.

This proves really valuable over time, because sometimes people tend to build strange setups and strange things, and I was always able to pin down the exact software version that somebody was running, and this was really helpful.

**Ashley McNamara:** So you did this project just to learn Go, or was there a specific use case for yourself that you were trying to solve for?

**Alexander Neumann:** Primarily, I would like to solve my personal use case, which is like a 20-25 gigabyte directory in my Home directory called "Shared", and I would like to create a backup of it at least once a day, even better when it's more than once a day. And I would like to keep a lot of revisions of this shared directory, because \[unintelligible 00:10:48.15\] my older projects are in there... So I would really archive this directory a lot of times, and it should also be possible to not only save this backup on the local machine, because when the hard drive dies or the SSD dies, then everything's gone, but also put it on a server somewhere and being able to restore from this server when the SSD dies.

The problem with that is that I have access to many different servers, but usually these are not for my exclusive use, and these are even located somewhere like in a data center, or there's a co-administrator who also has root access. This needs to be taken into account, Restic has a defined threat model. One of the things that this model defines is that the storage location for the Restic repository where all the data is saved isn't necessarily completely trusted, which means that there may be a co-administrator or they may be an attacker with access to this system.

The only thing that such people can do is remove files or destroy the repository, but they shouldn't be able to decrypt my files or get any information about the data that I back up. And especially, I would like to notice when somebody changes things or tinkers around with the files saved there. This is also a nice property because for Restic I'm saving all the data in so-called pack files, which is a combination of smaller data blobs; they are saved on some server, and the name for the file is the SHA-2 hash sum of the contents. So on a server you can easily set up a cronjob and regularly compute the SHA-2 hash of the file and compare it with the file name and you instantly know that the file has been changed on the storage medium, so that you can detect bitrot, for example.

**Erik St. Martin:** That sounds really similar to the way git files are stored, with the pack files.

**Ashley McNamara:** Right.

**Alexander Neumann:** Yeah, the design of Restic is heavily inspired by git and pop and so on. I think there are so many good ideas in these designs... So I just had a look at it and took the part that can be applied to backup, \[unintelligible 00:13:06.11\] storage location, and that worked really beautifully.

**Ashley McNamara:** Were you expecting it to become so popular so quick? Now how are you dealing with contributors and releases? Was it an accidental burden at some point?

**Alexander Neumann:** What do you mean by burden?

**Ashley McNamara:** You know, like when you accidentally create something that's really great and then everyone wants more and more and more of your time and you didn't realize that you didn't have any time...? \[laughter\]

**Alexander Neumann:** Oh yeah, that's a good question. Yeah, I was not expecting for it to be so popular, but it seems that I was not alone in the result of my research for a good backup program. I'm trying to dampen the enthusiasm of the contributors a bit, because this is a weekend recreational project for me and I don't have any plans to commercialize it, or something like that.

In terms of support requests, there haven't been so many, but there have been several companies that would like to use it. It's BSD-licensed, so they can just use it, but they cannot expect from me to give them support apart from what support I can give in my spare time.

Sometimes you need to be very direct and honest to people creating issues. Something like "Oh, we're building a Kubernetes integration for Restic. How much support can you give us?" I try to be direct and honest, so that they know...

**Erik St. Martin:** Like, zero...

**Alexander Neumann:** Yeah, so that they know what they can expect.

**Brian Ketelsen:** That's where you say "That Fork button is right up on the top, there on the right. Just hit that little Fork button right there. There you go."

**Ashley McNamara:** \[laughs\] Yeah, that's what I did.

**Alexander Neumann:** Yeah, exactly.

**Brian Ketelsen:** "It's all you, baby."

**Alexander Neumann:** It's very awesome that people sit down and fork the project and create their own add-ons and their own backends. There have been several proposed backends for example in the past. For example, we support at the moment a local backend where all the backups are just stored in the local file system. We support SFTP, because that's what I'm primarily using, and we also support S3 with Minio, so you can run a Minio server or use AWS S3 for storage, which is really popular.

People have already suggested that it may be a good idea to support Backblaze, which is a backup storage company by itself, but they also have an API for blob storage. Somebody created such backend code for Restic, but unfortunately it was not good enough in terms of the project wasn't ready to accept this backend, so this pull request was closed. I really like what people are doing with this Maintainerati stuff - that's something that resonates with me a lot, because sometimes you need to tell people "I value your contribution, but I'm not gonna merge it", and this is not so easy.

**Brian Ketelsen:** No, it's very difficult. I like the Minio integration. I run Minio on my NATS at home, and I point Restic to the Minio instance that's running on my NATS and it's just so darn fast. And I love the fact that Minio is written in Go, and I just have this tiny little binary running on my NATS -- because the NATS isn't that powerful, but Minio doesn't take a lot of processing power to run in the background, so I have a nice distributed backup using Restic.

**Alexander Neumann:** You should check out the latest release of Restic, which I've done a few hours ago. It's a pre-release for 0.6.0, and the S3 backend support is much more awesome now. I'm using a lower-level API for the S3 library by Minio, and I was able to reduce the allocations by a factor of around 98% less allocations for memory.

**Brian Ketelsen:** Holy cow.

**Alexander Neumann:** So try it again...

**Brian Ketelsen:** Wow! It was fast before... I love it. Alright, downloading.

**Erik St. Martin:** I know you have another project that basically spun out of Restic, which is what you do, kind of like your deduping. Have you done the deduping from the beginning? How much less space did your backup start consuming once you kind of jumped on that?

**Alexander Neumann:** This deduplication thing was built into Restic right from the beginning, because at first I thought "Oh, I'd like to have a backup program", and then I started thinking about it and discussing with my colleagues what should a backup program do, and one of the things that you have in a backup program - you have duplicate data. Either you have the same file at different times - sometimes files haven't been modified, so you have exactly the same data and that's really easy to handle, but sometimes you have virtual machine images of like 100 gigabytes and you just have changed one or two bytes within the whole image, and it would be really a shame to store this 100 gigabytes twice, because most of the data is exactly the same.

So I started looking into algorithms that try to detect changes or similarities in data, and one of the ideas that have been built into this is this really old tool called Rsync. There's a PhD thesis by somebody called Andrew, I think... I've forgotten the name.

Rsync does really interesting things. For example, when you try to copy a file to a remote server, then on the local site they have some process that opens the files, starts reading and sending to the \[unintelligible 00:18:58.22\] If this is cancelled for some reason - for example, you cancel the program locally or your internet connection breaks down... Afterwards you restart this process and Rsync will detect that there is some part of the file already on the remote side, it will open it and it will find where it left off on the previous run.

This is the easy part, but what happens when the file on the remote side was modified and you would like to make it pristine again and copy the original file over to the remote side again? You can just delete the remote file and start transferring again, but that's not very efficient. Rsync cuts the file into different blobs and detects which blobs need to be transferred. For example, if you just changed one byte because of a hardware error on the HDD or something like that, then you just need to detect which of the blobs changed. For example, the first blob, the first 1,000 bytes or so - Rsync will detect that and will transfer this small amount of data and reconstruct the file on the remote side.

The algorithm that it uses is called a rolling hash sum. It starts by reading the file and taking all the subsets of 32 bytes from the file, and for each of these 32 bytes it computes a hash. When this hash has some property, for example the lower bits are set to zero, then it says "Oh, I've found a block boundary!", and afterwards is uses a real hash function, a cryptography hash function - I think it uses MD5, or something like that - to detect if the content of the blob has been changed.

So you could have also kept the file into 1 kilobyte pieces, but then the problem is you cannot detect when one byte has been inserted at the beginning, because all your blob boundaries are wrong. And when you have these dynamically-sized blobs, then you can detect "Oh, there has been a byte inserted; the first blob is different, but all the other blob markers at the end of the file are completely the same again." This is really efficient to dynamically slice the file into blobs, and this is what Restic does.

The problem with the algorithm that Rsync does is that it is targeted at really small blobs, for example 100 bytes or 5,000 bytes, and in a backup program we don't deal so much with inter-file duplication, but with intra-file duplication. We have some files that are not exactly the same, but mostly the same. So it's a good idea to have larger blobs, because when you have a snapshot that I'm doing of my directory now, and two days from now most of the files will be exactly the same and some will be modified, but most of the data will probably be exactly the same, so it makes sense to reduce the number of blobs that you need to handle and have larger blobs.

Restic at the moment is configured to try to have one megabyte of data as one blob, and this was just not possible with the algorithm that Rsync uses. So I looked at an algorithm called rabin fingerprinting. It's a really old idea by a mathematician called Rabin from the '80s, and I read the original paper and it was a typeset with a typewriter, and I think the formulas were manually inserted and painted in there, something like that. I tried to understand the math behind it and then implemented it in Go.

**Ashley McNamara:** Wow...

**Alexander Neumann:** It turns out that the Go version is really fast already. On my laptop it can do 150 megabytes/second/core, something like that, so that's not an issue to just \[unintelligible 00:22:47.00\] all the data. And this is just the fingerprinting calculation, which yields blob boundaries for files. At the moment, Restic starts by reading a file, piping all the bytes of this file through this algorithm to the chunker, and afterwards you have your blobs.

What it does is it uses a window of 64 bytes, so it calculates a hash of the first byte to the 64th byte, then the second byte to the 65th byte, third byte to the 66th byte and so on. And whenever the hash has a certain property that enough bits are set to zero, then there's a blob boundary.

When Go 1.6 was released, I think this was the first release of Go that really yielded another speed increment in the chunker just by building it with the newer version of Go, and the speed increments in recent versions are impressive. For example, I think in 1.7 it was that I recompiled the chunker and I gained like 10% speed just by recompiling it. It's enormous.

**Brian Ketelsen:** Yay, Go!

**Alexander Neumann:** This was really great. So when Restic then kept the file into these blobs, it will compute a SHA-2 hash over the content of the blob and then have a look-up table and see "Is this blob already known?" If not, the blob is saved to the repository. These blobs are bundled into pack files and only then sent to the repository, and they are encrypted of course, and signed... This is all very secure. And if this blob has already been saved, then it doesn't need to do anything; it just writes a JSON file that File A was constructed by these blobs, and just test the SHA-2 hashes of blobs there. And that's it.

Basically, the repository for Restic just stores metadata in JSON and the blobs themselves, that's it. And they're encrypted, and so on.

In the Restic blog we have an article about digging a bit into the data structures that are there, and you can also use the Restic command cat (restic cat) to print out the metadata JSON things so you can inspect them and \[unintelligible 00:25:00.29\] to have a look around.

**Brian Ketelsen:** Oh, I haven't tried that yet. Now I'm gonna try that.

**Alexander Neumann:** Yeah, you should. It's really easy. I will insert the blog entry URL later in the show notes.

**Ashley McNamara:** This is so cool!

**Alexander Neumann:** Thank you.

**Brian Ketelsen:** It really is. I love how you can do snapshots and you can just list the snapshots - "Show me all the snapshots that I have over time." Of course, mine are hourly, so I've got a lot of snapshots, but they don't take up a ton of space because of the deduplication. It's an awesome thing.

**Alexander Neumann:** Yeah, if you have a new snapshot and you have changed the file and the file has one megabyte of data changed, then your snapshots should not take much more than this one megabyte of changed data, and that's it.

Have you tried the Fuse Mount yet?

**Brian Ketelsen:** I have not tried the Fuse Mount yet.

**Alexander Neumann:** Oh, you should.

**Brian Ketelsen:** It's kind of like having ZFS, but without having to fight with ZFS.

**Alexander Neumann:** You can tell Restic to present all the snapshots in this directory via Fuse, and then you can browse around in your snapshots, and data is only fetched on the demand, so that you can have like a thousand snapshots stored in S3 somewhere and just browse around and have a look at what are the timestamps of the snapshots; then you can use CD and your shell tools to find files or play a video of whatever... That just works, and it's really great.

**Brian Ketelsen:** Shut the front door...! That's awesome! Alright, that's it. I'm gonna spend the rest of this show playing around with the Restic command line. You guys have a nice show! \[laughter\]

**Erik St. Martin:** I suppose I should really set a backup for my works...

**Alexander Neumann:** Yeah, you should!

**Ashley McNamara:** Yeah, I also need to do that...

**Erik St. Martin:** It's on my to-do list, where it's been for a couple of years.

**Ashley McNamara:** Isn't that on everyone's to-do list though? And for the same reason...

**Erik St. Martin:** I feel like right about the time I get around to setting it up properly is about the time that I pave my machine, and then it goes back on the list. \[laughter\]

**Ashley McNamara:** Yes.

**Alexander Neumann:** I have set up backups to several locations...

**Brian Ketelsen:** And it's really, REALLY easy with Restic... I'm just saying.

**Ashley McNamara:** I used to backup religiously, and I would backup in three locations, because it's not IF something fails, it's WHEN it will fail, and I'm terrible at it now. I don't know what happened. I haven't had anything catastrophic enough happen, I think.

**Alexander Neumann:** The interesting thing is that there are a lot of statistics around when SSD's fail or when hard disks fail, and personally I haven't seen a hard disk fail that was just one byte changed, or something like that... So this is very abstract for me, but recently a user opened an issue and said (I think it was the Check command, or something like that), "The Check command is broken for Restic, because it says that my data is wrong." And in the GitHub issue we \[unintelligible 00:27:50.23\] and found out what was wrong, and indeed, his hard drive started to fail and Restic detected it.

**Brian Ketelsen:** Nice...!

**Alexander Neumann:** This was really interesting, because it was the first time I saw such a silent failure \[unintelligible 00:28:04.14\]

**Brian Ketelsen:** That's awesome! There's nothing better -- how do you... Without using mocks or something like that it's almost impossible to simulate that occurrence, so having a real world disk failure proof that your software is correct is kind of awesome.

**Alexander Neumann:** Yeah, this is something like the question earlier regarding support... I had two other instances where people created an issue and said "Oh, something is very strange here." One guy started using Restic and made a backup of this complete laptop, like 200 gigabytes, to S3, something like that. Then he started restoring into the test directory and said "Oh yeah, this works." Then he canceled the restore and reformatted his hard drive. Afterwards he tried to restore the data from S3 and Restic kept telling him "The password is wrong."

Then he created an issue and at first it was like, "If you have mistyped your password, then your data is gone." There's a really good key derivation function that that's the password to \[unintelligible 00:29:11.16\] conversion (it's called Scrypt). It even uses a lot of memory to be hard against custom \[unintelligible 00:29:20.19\] that can crack this... So if you lose your password, then your data is gone for real. I made sure that this is the case. But it turns out that he just had a typo in the S3 buckets pass at the end, so he just had the wrong directory on S3, so the error message could be improved, and I did that afterwards and all his data was safe.

When I first read this issue when I came home from work and said "Oh, what did I do?! Why did I release software that let people backup their data into a cloud service, and so on?" But the resolution was really good, because he just logged into the S3 console and saw that it was the wrong directory and everything was fine. This was really interesting.

**Erik St. Martin:** That brings up a valid point, though... That is a little scary to hand stuff over to people and know that you are responsible for their data. I mean, it's open source, but still...

**Alexander Neumann:** I'm not really responsible in terms of a license, because it's a BSD license and it says "There is no warranty at all/At your own risk", and so on.

**Erik St. Martin:** But as the person, you feel guilty if something happened, you know...?

**Alexander Neumann:** Yeah, exactly. You may not be legally liable, but I think we all want to produce things that make people's lives better, so finding out that there was something catastrophic caused by something you wrote always hits people close to home.

**Brian Ketelsen:** Well, that means that you should feel awesome when somebody has a catastrophic failure and the backups work and they restore their data to a new system. So the corollary to that is that you should get to feel awesome pretty often, because people are restoring backups.

**Alexander Neumann:** Exactly. I do, because people are creating backups, and this is so much better than not having backups at all. It must be really easy to do backups, because otherwise nobody does it.

When I started with Restic, I had a look around and tried different backup programs, and there was this old approach to doing backups where you have to decide "Do I do a full backup or an incremental backup?" This was mental workload that -- as a user, I would just like to create a backup; I'm not interested in making this decision every time I do a backup.

**Ashley McNamara:** Oh, it's so annoying...! It's the reason we don't do backups. You're right.

**Erik St. Martin:** I guess that was one of the reasons I love Time Machine. The first time I got a Mac with that on there... I only had to tell it where to store the backup data, and from there it kind of just did its thing.

**Ashley McNamara:** You guys, I lost my Synology in the divorce... Sad times for me. \[laughter\] And my time machine is like "You haven't backed up in like 600 days", or something like that. I'm like "Yeah, I know..." Way to remind me, guys...

**Brian Ketelsen:** It's time to get a new NATS.

**Ashley McNamara:** I know! I can do better this time... On both accounts, probably.

**Alexander Neumann:** Yeah, so after having a bit of research done for other backup programs I started a list of open source backup programs that work on Linux, and I keep discovering new ones... The list already has like 80-90 entries, something like that. It's on the GitHub.com/restic/others. I've even discovered that there was a program with a very similar design called Attic. Unfortunately, it wasn't actively developed anymore, because the original author I think lost interest, or something like that, and it was forked to another backup program called Borg, like the Borg from Star Trek.

This is written in Python mostly, and it also had a C component and uses OpenSSL for the crypto. This is also very nice, but sometimes the workflow is not so great, because when you create a backup and there's this Borg Create command, then you need to give it a name. And every time I'm trying to use it, I'm thinking around "What's the name for that? My backup, or is it Monday, or is it my awesome laptop machine's backup, or something like that?" This is where users stumble, and they just need to save some files.

**Brian Ketelsen:** I like the workflow of Restic. It seems like you thought through nicely the idea of having multiple different repositories, and being able to backup to different repositories makes my life really easy. I like that a lot.

As far as user interface and user experience goes, Restic is good.

**Alexander Neumann:** Okay, that's very nice to hear, because this is really the focus of Restic.

**Brian Ketelsen:** It is hard to do with a backup software -- I mean, it's backup software, it's not an easy thing. So it's nice that Restic is...

**Alexander Neumann:** Yeah, indeed.

**Brian Ketelsen:** But you use Viper for the command line interface now \[unintelligible 00:34:28.18\] Viper is about as good as it gets on the command line side of things in Go.

**Alexander Neumann:** Yeah, I thought of writing my own framework and then found Viper, and it does all that I need it to do right now. What's missing from Restic at the moment -- no, I think Cobra is the CLI framework and Viper is the configuration framework.

**Brian Ketelsen:** Oh, you're right.

**Alexander Neumann:** This Viper thing is a bit scary at the moment -- I don't know how it effectively works, and in terms of configuration files, Restic doesn't have a configuration file yet, because I haven't found a way to do this nicely. I prefer that people write their own shell scripts to run Restic, instead of having a bad configuration file.

**Brian Ketelsen:** That makes good sense.

**Ashley McNamara:** Yeah, it's good advice.

**Erik St. Martin:** What would happen if somebody changed their key in the middle of a backup? Just thinking of things that could go wrong with config files...

**Alexander Neumann:** Yeah, this is an interesting question. What I was talking about was like a local configuration file where you say like "Oh, this is my backend, this is my exclude list for this directory" and so on. When you change the key, in Restic there is only just two keys for one repository. Whenever you initiate a new repository, then Restic randomly generates an encryption key and a sign in key, and that's it. Those are just symmetric keys for \[unintelligible 00:35:56.00\] this is the Mac algorithm. These two keys are encrypted with a key derived from your password.

It's especially important - the password is independent of the key. You can change your password and still access the old data that has been saved in the repo weeks before. So there is no key that you can change.

There was a GitHub issue of somebody who said "Oh, we need to have cipher agility and be able to re-encrypt the complete repository and being able to use another algorithm instead of IAS, and this was something that I would not like to do. I think too many knobs for users and too many different code paths and algorithms is not a good idea, especially in a software program that tries to be robust... And we've seen what happens when you try to be more flexible than you need to be with TLS, which still suffers from the old crypto algorithms that have been implemented in TLS in the '90s, and we still see vulnerabilities that are caused by these old algorithms. They are disabled, but they still cause issues.

For Restic, I would always say that it shows a same default and make things configurable for users that need to be, but if in doubt, there won't be a knob for it.

**Erik St. Martin:** So I think that we've probably overshot our sponsored break a little, so let's go ahead and take that real quick. Our sponsor for today is Toptal.

**Break:** \[\\00:37:33.11\\\]

**Erik St. Martin:** And we are back, talking to Alexander Neumann from Restic. Before we went to break we were talking about some of the feature requests and things that you've had... What's next for Restic? What are some things that you do want to implement? Where do you see this going?

**Brian Ketelsen:** Yeah, so I did the 0.6.0 release today, the release candidate, so the development for that is done. The next projects are getting more backends into Restic. There's a Swift backend; this is some kind of object storage thing that you can also rent from OVH, for example. There's the Backblaze backend that I would like to start working on, and there's a new version of the repository format that I would like to do, because this repository format that we're using right now is basically the same that I wrote two-and-a-half years ago, and there are some things that I would like to change.

For example, I would like to support compression, because at the moment, when the file is read and spit into blobs, and these blobs are encrypted and saved the way they are into the repository... So having compression may be very efficient, because sometimes blobs can be compressed very efficiently. This is not supported yet, but this is one of the most requested features ever, I think.

Other parts of the project - we have a huge list of things that need to be reworked. It's the same, I think, with every non-trivial program. One of the things is that some operations for Restic are not so fast as they could be, and mainly this is a problem that we don't cache any data locally. Restic does not have any local states; all the state is in the repository.

Some operations, like the prune operation - which goes through the list of all the blobs and looks for blobs that are not in use anymore but are not referenced anymore, and this is very time-consuming because it \[unintelligible 00:40:08.10\] tree structures in JSON and requests all the trees from the repository... So this is something that needs to be done every once in a while and it's really slow, so this is something that I would like to tackle and improve a lot.

I have many ideas which can also be made better, but this is the case with all the open source programs out there, I think.

**Erik St. Martin:** So here's an interesting question, because there's some uniqueness to the way this application works... So how are upgrades performed? Is it that you've kind of pre-built into the storage layer some information for the tool to be able to kind of work backwards-compatible with old ways that the data was stored, or was there some sort of upgrade where you upgrade the backup so that it's compatible?

**Alexander Neumann:** Yeah, there will be a migrate command, which is able to convert a repository to a newer version - maybe also to an older version, I haven't decided that yet.

At the moment - and I think that this is one of the most astounding things, at least for me - almost the first version of the repository that I released two-and-a-half years ago is still working today, so we haven't really changed much over there. The repository always has a configuration file which is also encrypted, so that you can check if you locally have the right key to decrypt data into the repository... And there is some metadata in this file. For example, there is the repository version number.

At the moment Restic tries to access the repository, it downloads the configuration file, decrypts it and checks whether the configuration file has a version number that is compatible to the currently-run binary. So when we do the next version of the repository format, then there will be a 2 instead of a 1 in the version field, and then all the Restic instances know that this is version 2 of the repository. We plan to be backwards-compatible to version 1, so that you can still write to repositories with version 1. Also, for newer repositories that are initiated later, version 2 is used. For example, this enables features like compression.

I'd like it to be as compatible as possible, because when people start using Restic, then they depend on us - mostly on me, in this case - but they are able to restore their backups in like ten years or so. For Go it's really great, because you can always say like "Okay, if you need to handle version 1 repositories and you need to restore data from it, there's the statically-linked binary from five years ago, and you can use that."

This is really great, because you don't need any configuration, any libraries, any runtime, anything. It's all built into the binary. For the most part, we'd like to be as compatible as possible.

**Erik St. Martin:** It's great that you at least really thought of that with the version stuff.

**Alexander Neumann:** Yeah, this came out of many discussions with my colleagues at work, because they're also quick thinkers and we are also very interested in having a working backup program, so this is something that at work we sometimes saw failures. For example with TLS, version detection has been a problem, and this was something that was built in one of the first versions, so we already have that.

**Erik St. Martin:** That's awesome. So I think we probably have about 15-20 minutes left, and I know the past couple of weeks we skipped over all the projects and news, and even \#FreeSoftwareFriday last week.

**Brian Ketelsen:** Wow, that's against the law.

**Erik St. Martin:** So do you guys wanna jump into anything there? I know we have kind of like a lot of stuff that's probably piled up.

**Ashley McNamara:** I didn't contribute anything to the news, but I can talk to Kelsey Hightower's DevOps Days speech.

**Erik St. Martin:** That's right, you were there.

**Ashley McNamara:** I was there, in person, crying like a baby.

**Brian Ketelsen:** Aw...

**Alexander Neumann:** I skipped over the video a few minutes ago and it seems to be that he was very agitated. I haven't seen it yet.

**Ashley McNamara:** He was not agitated, he was just emotional. He was sharing an experience and it was very vulnerable, and he cried, and then we all cried, and then we all group-hugged, and then we all had barbecue. It was great! Well, Kelsey didn't have barbecue, I'm kidding, but it was great!

**Brian Ketelsen:** That's true, he's a vegetarian.

**Ashley McNamara:** Yeah.

**Brian Ketelsen:** I kind of feel at this point that if you're not Kelsey Hightower, you're gonna have a really hard time doing a great job with a keynote, and everybody else that's just not Kelsey... You're either Kelsey, or you're not Kelsey. I mean, he deployed a Kubernetes cluster with voice control.

**Ashley McNamara:** With his voice!

**Brian Ketelsen:** Okay, Google... Ship it! How the hell are we supposed to even reach that standard? We can't.

**Ashley McNamara:** You can't. There's only one Kelsey.

**Brian Ketelsen:** The rest of us all are just not-Kelsey. I'm gonna put that in my LinkedIn - "Not Kelsey."

**Ashley McNamara:** It's already in my LinkedIn and I've had 100 people endorse me... \[laughter\]

**Brian Ketelsen:** For being not-Kelsey?

**Ashley McNamara:** Yeah. It's insulting a little bit, but you know...

**Brian Ketelsen:** It's pretty rough. So Go 1.8.2 and 1.8.3 were released... Yesterday, both. 1.8.2 was a security fix for an elliptical curve and something around there. 1.8.3. had the other fixes that had been saved up since 1.8.1. None of them sounded really big, like compiler fixes and little things... So fire up your downloaders and get up to 1.8.3...

**Erik St. Martin:** Delve also had a release candidate for their version one, which is awesome.

**Brian Ketelsen:** Yes. Oh, and speaking of Delve, and in an unrelated sort of way - well, semi-related... The 0.6.60 release of Visual Studio Code has some really killer code lenses. They have Delve integration, so you can hover above a test and click a button and debug a test in Visual Studio Code. That is so awesome.

**Ashley McNamara:** I just switched over to VS Code, like last month, and I haven't used anything else since. It's crazy how good it is.

**Erik St. Martin:** And spoiler alert - Ramya will actually be on the show next week.

**Brian Ketelsen:** That's right!

**Alexander Neumann:** Oh, that's nice!

**Brian Ketelsen:** Oh, much geeking out will happen.

**Ashley McNamara:** Oh, I wanna be on this show next week.

**Brian Ketelsen:** Actually, maybe you can, because I'm teaching in San Francisco next week, but why don't you sit in for me next week? You can be on the show, because I'm not gonna be here... I just realized that.

**Ashley McNamara:** Yay! I whittled into another show... Just like that. \[laughter\]

**Erik St. Martin:** So GopherFest also happened a couple weeks ago. Videos are out for that on YouTube, for anybody who hasn't seen it. We'll link to that in the show notes.

That's crazy how much stuff has passed that we didn't get a chance to talk about because we were either -- I think we missed an episode, and then got chatting a lot. Other than that, Francesc did a State Of Go talk, too... The May 2017 edition. We can link to the SlideDeck of that.

**Brian Ketelsen:** I didn't think that talk was very complete. My name was not mentioned once... \[laughter\] I briefly looked through the slides, I didn't even see a link to my GitHub repositories... So I don't feel like this is a very complete State of Go talk. I mean, I appreciate that he did it...

**Ashley McNamara:** You know, it was in there, and then he said --

\[\\00:47:49.17\] And at this point in the conversation the audio just stopped recording for some reason. Computers, am I right? By the time the technical difficulties were all sorted out, Alexander just began talking about his \#FreeSoftwareFriday pick, rofi-pass. Let's hear what he had to say.

**Alexander Neumann:** It's an interactive input thingy. You can have a list of lines, pipe it into rofi; it displays an interactive list where you can select an entry, for example by typing in one of the characters that is in there, select the entry, and it will spew out this line to stand it out, and you can use it for all kinds of shell scripts. I'm using it for all my stuff at work, and that's really awesome.

And there is another shell script called rofi-pass, which uses the password stored at Orc password manager. It's a really nice thing in itself, it uses GPG for example, and it uses rofi and pass to do interactive password logins. It can do all kinds of things, like in the password store you can have a user field and a password field and then you can go to some websites, have a shortcut for rofi-pass \[unintelligible 00:48:58.29\] the name of the website and it can enter "Here's the name and the password and a tap character in between, so I don't need to do anything, I don't need to copy or paste any username or password." It's awesome.

**Ashley McNamara:** You guys can't see this, but in the notes - and I'm assuming this is from Brian, it's all caps - it says "WHAT?! ROFI-PASS? OMG!"

**Brian Ketelsen:** Yeah... I saw the show notes, that rofi-pass is in here... The first thing I did was wipe my calendar clean tonight because I am setting up rofi-pass. I've been using a pass database for my passwords for about three weeks now, because 1Password doesn't have a Linux client that's useful...

**Erik St. Martin:** Yeah, I keep tweeting at them and stuff...

**Brian Ketelsen:** No...! \[laughter\] So when I found out that there was a rofi-pass -- because I already used rofi, and it's awesome. Rofi-pass - that made my day. It might have even made my week, it's possible. But you know, that sign, when you clear your calendar because you've gotta set up rofi-pass... \[laughter\]

**Alexander Neumann:** It's not so much that you need to set up; you just need to install it, run it and that's it, because all the configuration is already done when you set a pass... So you don't need to set up anything.

**Brian Ketelsen:** That's trye, but I still have about 400 passwords that aren't in pass yet.

**Alexander Neumann:** \[laughs\] Me too!

**Brian Ketelsen:** So those are good ones. We'll accept two this week just for that, because that's pretty awesome.

**Erik St. Martin:** Yeah, that is really awesome. I haven't seen the rofi-pass. I've used rofi for -- I don't even know how long.

**Brian Ketelsen:** I've been using it for years, yeah.

**Erik St. Martin:** Yeah. So first it was dmenu2, and then it was rofi.

**Brian Ketelsen:** Yeah, rofi's just fast...

**Erik St. Martin:** Well, first it was dmenu, then dmenu2.

**Brian Ketelsen:** Yeah, when I was a kid... So my \#FreeSoftwareFriday is in the same vein actually, because all of this to me kind of revolves around Linux and the command line and the nice ex-Windows toys. Mine is barista, which is at GitHub.com/soumya92/barista, and it's an i3 status bar that's written in Go... So you can have pretty much anything in the entire world you want in your i3 status bar if you're willing to write Go code for it, and that is really fun.

So it's more of a toolkit for writing a status bar, and it also happens to give you a couple examples of how you can make your own... But running a custom "I did it myself" status bar in i3 is really awesome, especially when it's written in Go.

**Alexander Neumann:** Oh, I need to check this out tonight, because I'm also using i3.

**Brian Ketelsen:** Oh, I knew we were gonna be fast friends, Alex. \[laughter\]

**Erik St. Martin:** Yeah, we love i3 here.

**Alexander Neumann:** I've met the author, Michael Stapleberg at the Case Communication Congress in Hamburg two years ago, and I bought chocolate - that was really nice - as a nice little thank you present.

**Ashley McNamara:** Now I want chocolate.

**Erik St. Martin:** Ashley, I know we invited you on last-minute, but did you have anybody you wanted to give a shoutout to?

**Ashley McNamara:** Check out Kelsey Hightower's talk - that's all I've got for \#FreeSoftwareFriday.

**Erik St. Martin:** I wouldn't say that's all you've got. I mean, all the stuff Kelsey does is great, and that whole talk was super emotional.

**Brian Ketelsen:** He's knocking it out of the park these days with his talks. There's no comparison. You're either Kelsey Hightower or you're not. How can you keep that level of quality up long-term? I don't think you can.

**Ashley McNamara:** I did say Visual Studio Code! Thanks, Matt. Shoutout to Matt.

**Erik St. Martin:** \[laughter\] That was just so out of nowhere...

**Alexander Neumann:** Random!

**Ashley McNamara:** It was not random, it was in the Slack channel.

**Brian Ketelsen:** It was totally random. Wait, just because it was in the Slack channel doesn't mean that everybody else has context, Ashley.

**Ashley McNamara:** You have to be there!

**Erik St. Martin:** So my \#FreeSoftwareFriday is actually a person... I'm gonna give a shoutout to Brendan Gregg, who is a performance engineer at Netflix. His website, BrendanGregg.com, or his book, or the many talks he's done that are on YouTube, for like profiling and performance tuning are freakin' amazing...

**Brian Ketelsen:** FlameGraphs...

**Erik St. Martin:** Yeah, and FlameGraphs and all the tools and stuff that he releases are just amazing... I can't be more grateful for having that stuff available.

**Brian Ketelsen:** Well, here's a good opportunity for me to slide in a little plug. If you like FlameGraphs, if you like profiling, if you like benchmarking, you should come to my workshop at GopherCon this year, because I just opened up a new workshop at GopherCon and we talk about Brendan Gregg's \[unintelligible 00:53:40.29\] during that workshop... So go buy my workshop.

**Ashley McNamara:** I'm gonna go to your workshop. I'll be there. \[laughter\]

**Brian Ketelsen:** \[unintelligible 00:53:48.11\] if you like FlameGraphs, you might like barbecue... It's actually true - there is a direct correlation. This is not scientifically proven, but we're pretty sure that there's a direct correlation between FlameGraphs and barbecue.

**Erik St. Martin:** It sounds legit.

**Brian Ketelsen:** Yeah, it is. Totes legit!

**Erik St. Martin:** I know we're coming up on some hard stops for everybody, so let's go ahead and wrap today's show. I wanna thank everybody for being on the show. Thank you, Ashley, for coming in and joining us as a co-host.

**Ashley McNamara:** Thank you!

**Erik St. Martin:** Huge thank you to Alex for coming on the show and talking to us about Restic, and for making me finally get around to setting up backups, because it's now easier.

**Alexander Neumann:** Thanks! Thanks for having me.

**Brian Ketelsen:** Thank you for creating Restic... What a great application! We appreciate it.

**Alexander Neumann:** Thank you!

**Erik St. Martin:** And a huge shoutout to our sponsor, Toptal, for helping make this podcast possible. Definitely share this show with fellow Go programmers, friends, family, all that good stuff. You can subscribe to us on GoTime.fm. Follow us on Twitter, @GoTimeFM. If you wanna be on the show or have suggestions for guests or topics, you can hit us up on GitHub.com/GoTimeFM/ping. Just file an issue and we'll try to track those and get people schedules. With that, thank you everybody! We'll see you next week.

**Ashley McNamara:** Bye!

**Brian Ketelsen:** Thank you! Thanks, Ashley! Thanks, Alex.

**Ashley McNamara:** Alright, talk to you guys later... I've got a meeting. Bye!

**Erik St. Martin:** Bye!

**Alexander Neumann:** Bye! Peace out!
