**Adam Stacoviak:** So Tim, we're back. Techno Tim, we're back, I guess. Not just Tim, Techno Tim.

**Techno Tim:** That's right.

**Adam Stacoviak:** The state of Homelab. My idea for this show was really just to have a reason to talk to you again, really... And then also, Tim, from the community, because that's half the battle with podcasting, is you get a chance to talk to some of your favorite people out there doing some cool stuff, that inspire things you do... Now, I'm by no means watching every single video these days; I feel like you're just moving at such a pace... And I have less time for homelab stuff, so I feel like the tables have turned a little bit. But it's great to have you back and talking about the state of homelab. What are you thinking?

**Techno Tim:** Yeah, great to be back, and great to have you. Yeah, it's been wild. I've seen a lot of trends over the last year, especially a lot of changes, but a lot of trends. I'm picking up on the trends, and I've even implemented some of them myself, for sure.

**Adam Stacoviak:** What do you call a trend in homelab? Is it like network speed, like 1 gig to 2.5 gig? That's obviously a trend I'm seeing with -- I want everything to be 2.5, at least, as a minimum; it's a standard for me. But what else is a trend for you?

**Techno Tim:** Yeah, that one's kind of touchy, because I feel like most homelab enthusiasts go from 1 to 10. So 2.5 I feel like is a road bump. It's like this consumer road bump, where they're pushing it out to consumers... But homelab enthusiasts have always thought "Well, I need more than one. The next logical step is 10." So I've seen a lot of people do 10. 2.5 gives you a lot of interesting stuff with native Ethernet and stuff like that, so you can plug in an Ethernet cable, versus using a transceiver to change it, and all of that... But yeah, I have seen that one, for sure. And a lot of people are going to 2.5. I think what's driving that - not only consumers, but consumer internet, right? Consumer internet is getting faster. You're paying for internet that's now faster than one gigabit. Well, now you're the bottleneck.

So I see that trend continuing... As consumers get faster internet, home network speeds will get faster; not necessarily for local file transfer speeds, but because they want to get the internet that they're paying for. So yeah, that's definitely one; that's going to continue. And I feel like 2.5 is a speed bump, because even Google Fiber offering 5 now. What do you do with 2.5? I have another 2.5 on the table. So I feel like it's moving at a very fast rate now, and I think consumer internet is driving that.

Another big trend I've seen, and I've even adopted myself, is just efficiency and power usage. The easy and simple thing used to be go to eBay, find a used enterprise server, run that at home. And then we have a power crisis, and then people realize "Hey, I'm paying a lot of money to run this server." And at the same time, then we're getting these low-power devices that are 10x more efficient, and 10x more powerful, at a fraction of the cost of even some of this used enterprise stuff.

So I think a lot of people are realizing too "Hey, all of that compute I thought I needed, I don't really need. And my power bill is kind of high." So at the same time, I do see people -- I don't want to say downsizing, I want to say... I don't know, upgrading. I don't know if that's an upgrade; it depends on what it is, and how you look at it. Because they're totally different classes of gear. Enterprise gear has - you know, it has dual NICs, it has ECC RAM, it has multiple slots for hard drives to get redundancy... Not to mention lots of PCIe lanes... So different class of gear, but I think a lot of people are starting to realize "Hey, this Intel NUC, or this Minisforum, this tiny little PC that uses 40 watts of power is giving me the same thing that I got in this other thing." So that's a huge trend I see, power and efficiency.

And that's something I did a long time ago... I've three 1U servers. I still have them, they're back there... But I realized, each one of these is using anywhere from 100 and 110 Watts apiece. And that's actually pretty low; that's low for an enterprise server. But I realized, hey, I have this Intel NUC that uses about 30. And I can do the same thing on it. I can run Proxmox, I can run a hypervisor, I can run six virtual machines, I have enough RAM, it has an NVMe slot for fast storage... And it has an SSD slot for the OS and some more fast storage. So I quickly realized "Hey, maybe I can run my three 1U cluster on these three Intel NUCs, and that's exactly what I did. And now I'm kinda reaping the savings now, but it's interesting. It's interesting, for sure.

I think the power crisis, and the cost of energy has definitely made people think about it again, especially in Europe; especially not in the United States, I guess I should say, because even though ours has gone up marginally, a fraction, it's gone up in a lot of other places. So I think that's where people started realizing "Hey, maybe I don't need to run all of this."

**Adam Stacoviak:** Yeah. Well, it's fun to tinker... And the tinkerer's heart, like any given hacker/developer person that decides to jump into the in-quotes - and we'll have to define it too, Tim, again... Because I'm sure we have to keep redefining what homelab is... You know, these folks that want to get into this homelab \[unintelligible 00:05:52.10\] just for a hobby, or for a reason... I find that for me it's more hobby than reason. I don't really need the things I have. It's fun, right? And they add expenses etc. but I think the efficiency part of it that you're mentioning, the power efficiency, the Intel NUC fashion - I followed your lead on one of those things. I bought an Intel NUC 12, a barebones system, tricked it out a little bit, and it's my Proxmox server for the home.

\[00:06:21.15\] I've got a few things on there... Even that is overkill. I mean, it's even overkill for the things I have for it... But I also didn't want to buy something that I utilize to full efficiency right away, because that left no room for growth in the future. And I have other plans and stuff like that, but I haven't done it yet.

Okay, so 1 gig to 2.5 gig is kind of trending. You're seeing 10 gig is really the jump, 2.5 is just a hurdle. What else is trending?

**Techno Tim:** Yeah, storage. So storage is another one. It's always trending... I think a lot of people in the homelab community are just waiting for disks, spinning drives, the capacity of spinning drives to be available on SSDs... And it's not happening anytime soon for the price that we see. But storage is always going to go up; people are increasing their storage. That's a big one. When I got into this game, I don't know, four or five years ago, at least on YouTube... Well, YouTube was probably three years ago, when I got into the homelab game on YouTube. But I'd been doing it for a long time. You know, people thought three terabyte drives were big. They were like "Yeah, that's plenty." My four, like I did, four three terabytes... Yeah, it's gonna last me a long time. Now people don't even flinch when you say 14 terabyte drive, or 20 terabyte drive.

So I see a lot of people increasing their storage in a large capacity, to hopefully prepare for the future. So yes, storage is always going up. The one thing I think everyone wants though is solid state drives. And they want solid state drives, they want faster drives, rather than spinning drives. But the challenge there is that, one, we can't get those drives in those capacities. Two, not even near the cost we would for spinning drives. And then three, a lot of people don't realize that some SSDs, especially NVMe's, use more power than a spinning drive.

**Adam Stacoviak:** Wow.

**Techno Tim:** It seems counterintuitive, but it's actually more efficient to spin that drive and let that drive spin than it is to use an NVMe drive. I mean, this is all -- I don't think people take that into consideration. That's just a little-known fact; I actually learned it from a storage vendor, and then tested it myself, and it's true. NVMe drives actually do you use more power than hard drives. And they have \[unintelligible 00:08:37.22\] spinning drives. But storage - I think storage is exploding lately. It's exploding. It is exploding. People want to keep their videos, people want to keep everything now themselves. They want to keep everything forever. And I think a lot of that's related to cloud costs going up, getting these tiny cloud drives from - you name it, OneDrive, or Google... I think OneDrive is a little bit more lenient on how much space they give you... But people are saying "Hey, I'm not going to put my stuff there. Why would I put a fraction of my stuff there when could put all of it at home?" And so they do the math on the drives, they do back of napkin math, and they say "This is what I pay in the cloud, and this is what I would pay at home, and I get 10x more value out of doing it at home, because I can do all these other things", like block storage...

Web storage just gives you one type of file storage; it's usually just object storage. Store a file. But people are doing block storage, people are wanting to do \[unintelligible 00:09:40.20\] people want to have SMB shares... They want to host all different kinds of stuff on that storage.

**Adam Stacoviak:** For sure. Okay, storage is obviously exploding... I'm a fan of stores. We can dig into that, for sure. What else?

**Techno Tim:** \[00:09:57.11\] It's a tough one... I mean, we kind of talked about efficiency... CPU I think is another one. CPU and GPU is one that I see kind of changing, I guess I will say. The biggest use case typically for people in homelab, for a GPU, is usually to transcode something, right? I have a collection of media - on Plex, or Jellyfin, or whatever - and I ripped it at 1080p, and my TV downstairs or wherever is only 720p. So something needs to convert that, or transcode it on the fly. And typically, people would buy a GPU for that. They would get a GPU, they would put it in, they would say "Sweet. Now I can transcode my media, I can watch it on any resolution, and transcode it on the fly." But traditionally, servers don't have a GPU on their chip, so you buy a GPU. And now with people going to lower models, they're finding that "Hey, this Intel CPU that I have also has this thing called Quick Sync, which can transcode or encode videos at this bit rate and this codec much more efficiently, and at a better capacity and more efficiently than this GPU."

So I'm seing a lot of people saying "You know what, I don't need a GPU. I'll just get a desktop class processor that has Quick Sync in it, which can do my transcoding for Plex and Jellyfin." And then I think a light bulb goes on, and they're like "Whoa, where has this been all this time?" And it's been something that's been there for a long time.

I think Quick Sync on Intel is probably one of the best kept secrets from Intel, at least for transcoding. I don't know why it's a secret, but it is. And if you look at any of the stats for it, it's incredible how efficient it is, and how many simultaneous streams it can also do. We're talking -- like, you could on an older one 2, 3, 4K streams down to 1080p, and it's not breaking a sweat. So...

**Adam Stacoviak:** Yeah, I can attest to that, because I actually was watching something Byte my Bytes, or something like that on YouTube... What's his name?

**Techno Tim:** Byte my Bits. Yeah, Jason.

**Adam Stacoviak:** Byte my Bits. Jason. And he's actually who inspired me to like "Oh my gosh, I should build my own thing." I think he had one where he was like "You know what, can I actually transcode 4k Plex videos in unRAID reliably? Does it make sense to just rip 4k and just transcode as you want?" And he's like "Well, if I get this beefy 13-gen 13900k CPU", with iGPU in it, of course, you've got Quick Sync, as you mentioned, which is what Plex actually builds towards; like, that's part of their spec as they rely upon in a lot of cases Quick Sync being available to do transcoding very well; hardware transcoding. And I'm like "Okay, so I can get this, I can get a motherboard that is workstation-ready, that can allow ECC RAM..." Because I wanted it to be a storage server, as well as a Plex server... And so I wanted an Intel GPU in there with iGPU, Quick Sync, all that good stuff, and I wanted enough threads so that if I really wanted to push it, I could. And I wanted the option to have ECC RAM, because, probably like you, I'm a ZFS fan, and ZFS really thrives when it stores its cache in RAM. That makes it super-fast... And so it's not RAM-hungry, is RAM-efficient; it uses your RAM. So if you have 120 gigabytes of RAM like I do, it's ECC on this workstation, I have a Plex server, I have a storage server, and I have a Samba server, all in one beefy box. And if I spun it up right now and I checked on htop what my CPU is doing right now, it's basically doing nothing... Because I'm not watching anything on Plex. But as soon as I do, it can spin up to maybe like 3% or 4% of usage. It's still super-efficient... But yeah, Jason influenced me to sort of like build my first thing. I was like "You know what--" I had always been intimidated by this idea of homelab, and this idea of building my own thing... And can I actually build a computer? Can I actually buy a motherboard and piece this together? Yes. And I did...

\[00:13:55.15\] It took me a little bit to learn everything and what components I would want, but I was influenced by "I would like to rip my 4k discs onto my storage server, and not worry where I'm at in the world... Whether I'm downstairs with a 720p, or 1080p TV, and still be able to play my 4k movies anywhere in the house." Because I have kids, and they've got Super-Mario Brothers... That thing is -- I bought the 4k disc, right? I'm not gonna squelch on my resolution, so I pulled the 4k, and no matter if they're on my phone at a restaurant or wherever and they want to pull that movie up, we can. Now, we're not watching them maybe every single day, but it's an example of what you had just said, which is "I want to rip to 4k, and I want to transcode anywhere, and I want to do that with an efficient, consumer-grade desktop CPU", which is what that CPU is I mentioned.

**Techno Tim:** Yeah, it's nice. It's nice. So yeah, one trend I see is people are just saying "You know what? Instead of doing the Xeon processor, with then buying an NVIDIA GPU", they're just saying "Hey, Intel desktop, i7, i9, i3, i5... As long as it has Quick Sync, it's good enough."

**Adam Stacoviak:** Right. And I think you would only go to, like I did, to the i9 13900k because you're crazy, and you just don't care... Because I don't need that much. Realistically, I could have gone with an i7, or even an i5, and got, I assume, a pretty similar experience in terms of performance. But Jason is influential, and I was like "You know what, I'm going all out. I don't want to mess around. I don't want to have one chance of this 4k transcode not going as I want", or being able to do like four simultaneously. I think his test was like 18 before it began to frame-drop... So it was intense. And I'm like "I want that capacity", so I went there with Jason on that front.

Okay... I think all the trends you're talking about - that lays the groundwork for where we can go. I kind of feel like when we talk about homelab, it's what like, "What exactly is homelab?" Are you tired of answering this question? Do you get this question on the daily? What's your perspective on what is homelab?

**Techno Tim:** Yeah, I don't get that question as much anymore. I think it's become a more popular term, at least in tech circles that I'm in. But I always say this, and I think I said this last time... It means a lot of different things to a lot of different people. I don't know what I could compare it to, but if you had just a general term for all things tech - like developer. "Hey, I'm a developer." What do you do? It's like, how do you explain what you do as a developer? Is it front end, is it backend? Is it mid-tier? What type of developer are you? And I think that's where homelab is, too. If you say "I'm a homelabber", the first thing I think is "Okay, great. Do you like the networking side? Do you like the storage side? Do you like compute? Are you doing virtual machines? Have you done containers? Are you running Kubernetes? Do you self-host stuff in your home? Do you self-host stuff publicly?" And I immediately start asking those questions, more clarifying questions, that I think you would ask to anyone, even if they said they're a developer.

So that's kind of where I go... It means a lot of different things to a lot of different people, and I gravitate towards kind of it all; I gravitate towards it all, because I like it all... But at the end of the day, I think it's just an environment where you can play and experiment, and break things if you want. Most people don't have this playground anywhere. They don't have a playground at work, they don't have a playground in the cloud, they don't have a playground anywhere. And on top of that, most of the architecture is already decided when you start a job. I mean, unless you're one of the lucky few that gets to help start a job, where you get to decide the architecture, and you get to play and experiment and figure out what works best, or you're someone who's also lucky - maybe, maybe not - who gets to redo the architecture at your job... Most people, the architecture is predetermined. So you go to a job, "Here's what we use, and here's how you use it."

\[00:17:58.09\] And so what homelab lets you do is say "Here's what I want to use", or "Here's what I'm thinking about using", and here's how I want to use it. Now, it might be totally crazy, no one would ever do this, but that's part of homelab, is being able to, I think, be the network administrator, be the architect, be the developer, be the DevOps person to do all of this in your own environment, without the fear of destroying your work's environment, and still keeping your job.

**Adam Stacoviak:** For sure. I agree with that, because as odd as it is, I'm not as developer as I want to be, because I podcast more than I develop... And I think homelabbing gave me a reason to get back and to be curious about particular tech. I'm not hosting web stacks, and I'm not building websites, but I'm also doing a lot of interesting things around networking, and VLANs... And in particularly Bash scripting. There's a lot of stuff I've, along with my good friend, AI, ChatGPT has helped me to script some various things... Everything from -- here's an example. So all of our productions -- so this podcast will eventually become a 7Z, compressed, single artifact, right? It takes a directory, done with single 7Z, which is a - I guess you'd probably call it, similar to like a zip file, it's a compression algorithm down to a single file. And I save about half storage. So if a directory is five gigs, it's probably gonna be around three gigs once I've run it through this, and I put it on our storage server. It's long-term storage.

The cool thing about 7Z is you can actually inspect the files within it without having to uncompress it. So there's a lot of cool things you could do with it. And so - great, 7Z is available. It's open source, you can install it on any Linux box... Too easy, right? Accessible. What's not there is batching. Like, I want to take a list of all the things in our archive directory, and one by one churn those out to a secondary directory of this finalized directory to 7Z file, to go into our storage server. Those things weren't there, so I had to learn how to do a lot more Bash scripting. I knew enough to be dangerous, but then I didn't know enough to really write all these things. And now I kind of have these ZFS utilities, and 7Z toolkits that I've built for myself, that are still not open sourceable in my opinion, because they're just sort of like --they're yucky right now. They could use some work. But at some point, I want to put this 7Z toolkit out there, because it's what I use to create, confirm, verify all these things that I do for our stuff, on our storage server. But again, I don't get to develop as often, because I'm mostly podcasting, I'm mostly looking at the lens of the world, versus actually being in the world of software... And this gave me a chance and a reason realistically to be, like you said, the infrastructure person; what am I going to put it on? The ops person to "How do we get it there?", to the dev person to write the script. It gave me a chance to sort of put those hats on in an environment where I fully control it, and I can fully just sort of have fun and tinker... And it kind of brought some joy back to these things for me, because like you said, again, you can be lucky and go to a job, and you get a chance to sort of design what happens there... And that could be the unlucky side too, because you could be like "Ah, I totally screwed up." Right?

But here's me, inch by inch, little by little, making progress on this... And now our entire Changelog archive of the last 14 years is now 7Z compressed... And while I do have tons of storage, because I am a storage nut, and I don't mind buying 20-terabyte drives, like you had mentioned before... It doesn't mean I want to use them all, but I'm saving half, Tim. Half. If it's 10 gigs, it's about five or six gigs compressed down to 7Z, which is just phenomenal. And I can easily just like unzip that thing in about a minute. It does take a little bit of in and out, because it's an algorithm compressing that... And it does take some compute power. So when you do the compression, it spikes my M1 Pro Max CPU to the full tilt for that two or three minutes it's compressing it. So it does take compute power... But I have it, so why not use it?

**Techno Tim:** \[00:22:06.01\] Yeah, that is awesome. That is awesome. I love to hear it. I always love to hear when people can work in a homelab and then apply that to work. And then vice versa, you learn things at work, and then you bring that home. And I just love that cycle. It's like homelab lifecycle between your home and job. I love it. Because there's so many things - and I don't want to discredit any company out there, but there's so many things I learned at home that I've applied at work. But it also goes both ways. There's so many things I learned at work that I get to bring home. Would I be able to learn about Redis and how to have a terabyte of RAM in Redis with all these key value pairs at home? No. No. But do I at work? Yeah. It's pretty awesome.

And so I get to apply some of those things I learned about Redis at home, and I feel like it's just this awesome middleground, where you're in the middle, and you get to choose "Hey, I use this at work. I like it. Let's apply it." "I learned this at home. Let's apply it at work, if they'll let me." Or "They won't let me, so I'm just gonna run it at home and learn all about it." Yeah, it's fantastic.

And on top of that, I think too that homelab provides a nice way for people to get a safe introduction to Linux, too. Most people grew up on Windows; it's just kind of how it is. The world runs on Windows. And people have Macs, and whatever, but at the end of the day, most companies are running Windows as their desktop, and that's their first intro to most things, because Windows laptops are super-cheap and available. So I think homelabs also give people a safe place to experiment with Linux, too. The world really runs on Linux behind the scenes...

**Adam Stacoviak:** That's true.

**Techno Tim:** ...but what people see is Windows. I mean, everything runs on Linux. So that's another thing that you wouldn't necessarily get to do or play with unless you had an environment to do that. And so I think having -- even if you just had... I mean, you could do that on a Raspberry Pi. I also consider Raspberry Pi's being part of homelab, as well as even virtual machines, like Virtual Box, or something like that. It doesn't have to be physical. But just having that environment to be able to play around and learn is, I think, vital to growing as a person in tech.

**Adam Stacoviak:** Yeah. I feel like the intimidating factor though for a homelab might be - and maybe I'm wrong - the network. I feel like for me it kind of begins there. It's the gateway to the "homelab drug", if that's even a fun thing or proper thing to say. I feel like that's what it is for me... Because I can recall in 2017 when we moved into our new house, we had the default ISP Wi-Fi upstairs, in the furthest corner, in a closet... And my wife saying "The Wi-Fi is just terrible, IT/husband." So it's my fault, right? Whatever the situation is, it's my fault. "You know about software. You know how things work. It's your job to fix it." And that's not exactly what she said, but it was definitely on my responsibility table to deal with.

And so I was like "Okay, I have no idea besides maybe a new Wi-Fi thing. And maybe that thing is not as powerful as the ISPs. I might need to have, I don't know, repeaters, or whatever." And I started going down that rabbit hole, and I learned about UniFi, and Ubiquiti. And I learned about "Well, I have Ethernet all over my house. I could put wired access points back to a place. I can replace the routing I was doing in my ISPs Wi-Fi/modem. I can just simply use that as an access pipe, and now I could put in this thing called--" I think at the time it was the UniFi gateway, the security gateway, the USG. And they had the small one, but I'm like "I'm gonna rackmount this thing, because dang it, I'm a homelabber here", or whatever. This was even before homelab. "I'm a man. I'm gonna put this thing on a rack. Racks are cool. I'm gonna put it on a rack. I want to go all the way." I'm a maximizer, Tim. When I do things, I do them to the max. So I'm like "I want to rack-mount this thing", and I got the USG, and I got a 24-port POE switch, a few access points, and I was off to the races. Now I learned - which was very hard - thanks to the other fella... Not ShopTalk. Help me out, you know his name... He's very famous with UniFi. Not Network Talk...

**Techno Tim:** \[00:26:21.14\] Oh, Crosstalk Networks?

**Adam Stacoviak:** Crosstalk. Yeah, Crosstalk Solutions.

**Techno Tim:** Yeah. Chris.

**Adam Stacoviak:** Chris. You know these people. These are your friends.

**Techno Tim:** Yeah, that's right. I'm in a Discord with a lot of these people.

**Adam Stacoviak:** That's right. They're your buddies now. So I learned about all these things from him, and I'm like "Wow, if he can do it... He's got the tutorial, and I can learn how to do it." And that was the beginning for me. I feel like homelab begins, to some degree, with this itch to make your network better, more performant. Usually Wi-Fi, and it's usually somebody else nagging you... Like, we've got more users, Netflix doesn't work, this or that... And that was really it for me. And once I learned about that, I'm like "Wow, there's a whole world here."

**Techno Tim:** Yeah.

**Adam Stacoviak:** Now I want to move this loud - because I'm a podcaster - this loud storage server, which was a Mac and six drives, over here, where it's really loud, that's actually in my audio... I want to move it upstairs, and network-access it. Versus - I don't need it to be right there. And so I just started to open up more and more things. I need faster network, I need faster Wi-Fi. I need distance from my storage server, because it's loud. I need this or I need that. What are your thoughts? Do you feel like it begins with the network?

**Techno Tim:** Yeah, that's a good question. I have always said that one of the gateways I know about is Plex. I mean, Plex is always the gateway, I feel like, into homelabbing... Because it's like, I have this machine, I want to stream stuff to it, I need bigger hard drives, so I need to transcode... And so it just leads to everything exploding exponentially. But yeah, network is a great one too, because - you're exactly right; someday, someone may come up to you, and you being the nerd that you are, they'll say "Why is the network slow?" Or "Can you get to this website?" Or "Why is it always buffering?" Or "Is Plex down?" Those types of things happen quite often.

And so yeah, I think for me personally, my wife is actually faster at telling me something's down than Uptime Kuma, and Uptime Robot. I have my personal uptime checker... Because we depend on a lot of things in our house. But yeah, network is definitely one. And it does start with wireless, you're absolutely right... Because people are like -- you depend on it. I mean, tablets, phones, everything. TVs, you name it. Consoles... All depend on it. And whether it's your significant other saying "Hey, something's down, or not working, or it's too slow", or your kid's saying "Hey, my ping time is ridiculously high. I cannot play these games with a ping time this high... Because so and so has the advantage."

**Adam Stacoviak:** I'm not there yet, man. My kids aren't doing that to me yet. So...

**Techno Tim:** I don't have kids, but I have heard. I can only imagine, with kids trying to get their ping times down to the server... I mean, if you asked a kid five years ago about ping times, they'd be like "What?" But after Fortnite and everything else, they know all about ping times.

**Adam Stacoviak:** Oh, okay...

**Techno Tim:** And response times on monitors... All that's coming.

**Adam Stacoviak:** Right.

**Techno Tim:** But it's those types of questions that come up, that then lead you to be curious about "Hey, why is this happening?" And then the wheels start turning, and all of a sudden you're like "Yup, I'm gonna upgrade..." Well, first you watch a lot of YouTube videos, like you mentioned, across networks; you watch Chris's videos, and...

**Adam Stacoviak:** Chris is amazing. Yes.

**Techno Tim:** Oh, yeah.

**Adam Stacoviak:** He's so good, too. He really is. He makes it look easy. He really does. Like, he can rattle off version numbers of which UniFi software's on there, he can rattle off the exact - not only the name, but the model number for different devices, versions... I mean, he's just so good at it. He's amazing.

**Techno Tim:** He's good. He's a good showman, too. I've seen him do live stuff, and I talk to him in Discord every now and then. He just seems like an all around good guy. Very knowledgeable, very level-headed, very smart. And yeah, Tom Lawrence is another good one.

**Adam Stacoviak:** Yeah. I love Tom.

**Techno Tim:** \[00:29:59.05\] Yeah, Tom's another guy... He's my go-to for TrueNAS and pfSense. Those are my go-to's. He knows obviously a lot more XCP-ng, and he knows a ton about networking, and even business stuff... He's my go-to for a lot of stuff. Chris, absolutely my go-to for UniFi stuff, too. And Tom does a lot of UniFi. But yeah, then you start researching, and like you said, you start seeing "Hey, this person has a pretty good tutorial. I could follow it. It seems logical." And then you start buying stuff, and then all of a sudden you're just like "I have a 10-gig network in my home. Everything's hardwired, because I hate wireless, and now everything's wired now, because I realized that wireless is like a pipe dream, and there's nothing better than actually plugging a wire into something." And you go from there. I joke about wireless... I mean, mine's super-reliable here. But at the end of the day, if I have a choice between Ethernet and wireless, I'm plugging that Ethernet in, you better believe it. Consoles, TVs, everything.

**Break:** \[00:30:57.28\]

**Adam Stacoviak:** Well, here's the question I think that I come to for networking. And while I am a UniFi - I won't say fanboy really. I like it a lot. And I've chosen it because it's an easy default, and it doesn't require me to spend so much time consuming, configuring it, and you know, VLANs, and access points... There's a lot of fun things that come from the system they built out, but for those who are like "I don't want to buy UniFi. I have other preferences." What do you say to folks who are like "Meh..." Jeff Geerling, for example, he's like anti-UniFi, I've learned... And I would say he's a pretty smart nerd when it comes to what to choose for your home, or to choose for your tinker hobby fun stuff. And I feel like if he's anti-UniFi, and you and I obviously are, because I know what you've got, I pay attention to you... What do you think about UniFi/not UniFi, other brands that are interesting to you, when you should choose non-UniFi and do something else?

**Techno Tim:** Yeah, great question. Jeff - I think he has a couple of UniFi things in there...

**Adam Stacoviak:** He says no. Last time I talked to him -- I could be wrong, but he said no. "Nothing, Adam. Nothing. No UniFi." I think we even have it in the transcript. \[unintelligible 00:36:03.02\]

**Techno Tim:** Alright, alright, we might need to get a litmus test on Jeff lately...

\[00:36:13.04\]

**Jeff:** I think at this point I don't have anything proprietary running in my rack right now. I still have a bunch of stuff on my computer, but at this point it's all open source on the rack.

**Adam Stacoviak:** Is UniFi's OS proprietary?

**Jeff:** Nope. I do not use UniFi.

**Adam Stacoviak:** I thought you had like something in there...

**Jeff:** No. All these YouTubers use UniFi... Well, I do -- so I have NETGEAR.

**Adam Stacoviak:** Techno Tim does. Well, I guess just Tm, but...

**Jeff:** Yeah. I mean, UniFi... Ubiquiti makes great stuff, that's for sure. But it's a) expensive, and I try to go cheap, and b) I feel like I learn more when I don't have my hand held as much. When you have to get in the weeds on things - I like that. So...

**Techno Tim:** But anyways, I'm teasing Jeff, because again, he's in Discord... I met Jeff, I got to hang out with him for a couple of days. Great guy. But anyway, so a lot of people have opinions and preferences. It's like, what kind of shoes do you buy? And maybe that's not a good one, but what kind of TVs do you buy? I buy Samsungs. I'm brand-loyal to Samsung. I will not buy anything other than a Samsung. Yeah, you're probably an LG guy. You seem like an LG guy to me...

**Adam Stacoviak:** Sony.

**Techno Tim:** I wouldn't have thought that. Anyways. You see how it strikes that kind of emotion, and that kind of opinion, and automatically you make assumptions about that person? I feel like networking gear is kind of there, too. So there are gripes with UniFi. They claim to be this huge -- they're enterprise-ready. So people who had been doing Cisco forever, or now Meraki stuff maybe, or HP, or any other enterprise solution that's been out there for 20 years, will start to pick apart some of the features and services and things that UniFi might be missing. Now, I don't know if they're missing, or if that's a choice. Is it a bug or is it a feature? Or have they not had time to develop that?

\[00:38:08.29\] I'm not defending them; I'm just saying, there are a lot of people who have a lot of networking experience, that have their choice and their brand that they stick with. And maybe it's because the CLI is familiar. Maybe it's because you can do stuff in the CLI. So there's so many reasons. It'd be like you asking somebody about their IDE, and this IDE that just came out yesterday is missing a ton of features, but is really great for people who are new to developing. But at the same time, someone who's been using, I don't know, Eclipse, is saying "VS Code doesn't have these 30 features I've been using it in Eclipse forever. VS Code is just a code editor. It's not an IDE, it's a code editor. It's a text editor." It's kind of that same thing, I think.

With networking, a lot of people say you're buying Ubiquiti gear for the software. And I'll kind of agree with that. Yeah, I am getting a single pane of glass to do a lot of very complex things. I am not a network administrator either, so it's super-nice. Again, lots of apps that work really good... And so yeah, maybe I am.

Anyways, all of that aside, you asked about hey, what are my preferences? Well, if you want to run an open source network firewall that you can build yourself - I've done this for years - pfSense is a great choice. Now, I'm not going to go into like pfSense versus OpenSense, and licensed changes and all that, because you probably know that conversation. But if you want to run something open source, that you don't have to worry about "Is it going to go away? Are they going to change the UI on me?", OpenSense is a great place to start. It is pretty complex, but it's so popular; there are bounds and bounds of tutorials that you could use to follow.

If you're looking for a nice edge firewall, you have an old PC, or you have a good PC, you know, that you want to use, even an old one, or a mini PC that has a couple of NICs on it, you could build your own firewall today and start protecting your home network with that. Get rid of your ISPs router, use that instead.

When you start to get into switches and stuff like that, everybody, again, has their own preferences. A lot of people still - I've noticed that people like pfSense as their firewall, and are okay with Ubiquiti UniFi switches. And so they'll say, "Hey, I'm not going to run UDM Pro. My edge is going to be pfSense." But I do like their switches, they're pretty affordable for what you get. And I'll configure them that way.

So it's tough... I mean, what I see most of the time in the homelab community is people are just buying used enterprise stuff. As long as it can do layer two, layer three switching, so it has VLANs, they'll configure them themselves, and they don't care about a single pane of glass, as long as it's performant and it's relatively cheap.

Noise is a big one too, once you start to get into older enterprise switches. A lot of them could be really loud. But that's kind of where I see people. It's either you love it... UniFi - you either love it, and then you go all-in with their ecosystem... I should say Ubiquiti, but their UniFi line of gears... Or you don't like it, and you want to run open source stuff, and then you choose used enterprise switches, or you still buy Ubiquiti switches, because they're pretty good for what you get. So it's tough. I mean, I don't see a lot of people running their own switch, although possible.

**Adam Stacoviak:** Yeah, for sure. I do like the idea of pfSense, and doing your own home router/edge. And I don't understand, I guess, when you choose to use Ubiquiti's UniFi switches in that environment what you gain. Do you still use, I guess, their dashboard and adoption process? Do you still do -- I mean, I don't know how it works at all.

**Techno Tim:** Yeah, yeah, yeah. So you still get their network controller. So their network application. It's hard to separate those two if you only have a UDM, because it's like "Wait, it runs on my UDM, but they have a whole line of products." That thing actually runs on a CloudKey. But you're like "I don't have a CloudKey. I have a UDM." Well, UDM is all of that in one.

**Adam Stacoviak:** \[00:42:07.16\] I used to have a CloudKey. I used to have the one that dongled in. It was PoE-d in, that thing that hung out of it, from back in the day. Yeah, that's how I had to do it. It was a CloudKey. And I guess they now have a true CloudKey, which is actually in the UniFi cloud.

**Techno Tim:** That's right. Yeah. And so a lot of people will just still use that network application to configure their switch, to keep it up to date... Basically, manage it without their firewall. But then that means they're doing double administration. I have to add VLANs into pfSense, and then I have to make sure that these VLANs exist, or are acknowledged, I guess, or are configured in UniFi as well. So yeah, it's pretty interesting. A lot of people still do it, because they like the switch hardware, they just don't want their edge firewall to be a UDM, possibly.

**Adam Stacoviak:** Yeah. Personally, I don't mind the firewall on it, although my reasons of why it can't be quantified, because I don't really have a lot of true, I guess, configuration and concern to be like "Oh, this is exactly why." I just don't mind out of the box what they give me. But I do really appreciate the access point adoption, I appreciate the camera adoption, I use the -- I have the NVR, the separate 4-drive... Because the single disc in the UDM Pro was just too slow for our family. Again, my wife is the telltale; she would always say "Why do we have this really "awesome" stuff, Adam, and yet when I tried to scan the timeline of our cameras, the front of the house or whatever, and look at the thing, I can't. It stops. It gets stuck." And I'm like "Well, because UniFi is a black box, in that case." Maybe I can dig into the logs and figure it out, but I don't know how. I don't know why. The only best thing I could do is RAID it. Make it RAID. And so that's what the \[unintelligible 00:43:51.02\] does, is it gives you four different drives, it puts them in a RAID, and you can configure in the configuration, I suppose, inside the network controller, what kind of RAID you want to use; whether it's mirrored or whatnot. And so far, since I've moved to that, it's so fast to access all of our stuff. And we have probably six or seven cameras, plus we have the G4 doorbell, the PoE version, Tim.

**Techno Tim:** Oh, man. You're upping me, in a couple of ways.

**Adam Stacoviak:** Well, I was like "At some point, they're gonna come out with the PoE version of this doorbell", and so when I built my house last year, I wired it with the typical doorbell, and then also Ethernet there, because I'm like "I'm going to want to PoE this thing." So the real issue was it got so hot, I had to replace three of them. Via Wi-Fi, this thing would get so hot, and it would die. And I'm in Texas, so we have 100-degree temperatures here all the time. So I had to -- and thankfully, their RMA process is so easy, and I've never been turned down RMA-wise from Ubiquiti. Every time we've done it, they've replaced it. And even this last time they swapped out my white non-pro version with a black pro version of it, just because they were out of the older version of it, the G2 I believe it was... And I was like "Well, that's really awesome because you didn't have it in stock \[unintelligible 00:45:07.17\] and you gave me the upgrade at no additional cost."

But anyways, that aside, I just wanna give them some praise, because their RMA process is pretty awesome. But I planned ahead and I thought "They're gonna have Ethernet there, so I'm eventually gonna buy the PoE version of this to just power my doorbell."

So anyways... Six cameras, maybe seven, plus the doorbell, and it runs like lightning. It's so fast. And I have visibility around the entire circumference of my house. So if you come to my house, you're gonna be seen. You're gonna be on camera.

**Techno Tim:** Yeah, same here. I'm at 10 cameras, which includes the doorbell. I'm still in the UDM Pro, or UDMSC. The scrubbing of the timeline is pretty okay. I haven't noticed -- if I scrub too fast, maybe it was a version number, I don't know, but...

**Adam Stacoviak:** Here's the thing though, Tim - it was her, not me.

**Techno Tim:** \[laughs\]

**Adam Stacoviak:** \[00:46:03.18\] So whenever I would go to the same camera and scrub the timeline, it was fast. And then I would go to her -- and she has the same phone as me. Like, there's nothing different really about our experiences, except for it literally is a different user/different computer/slash different phone. And I can't reproduce this on your side or on my side, so I don't know; let's just upgrade, right? Let's just upgrade.

**Techno Tim:** Yeah, I like it. That's right. Easiest way to get the agreement on upgrading is something she wants.

**Adam Stacoviak:** That's right.

**Techno Tim:** Yeah.

**Adam Stacoviak:** Okay, let's go then from if we both agree that network is definitely part of the gateway to homelabbing... You mentioned Plex and storage. Let's talk storage. I'm a diehard -- I think maybe our listenership might be tired of hearing me say ZFS... And I definitely think our Slack folks are like "Adam, just shut up already with the ZFS stuff. Why?!" And so we have a couple questions behind the scenes around ZFS, but let's just talk about storage in general, and then specifically the file system. Because I'm a ZFS guy, I think you are too... I could be wrong. Maybe Btrfs if the use case permits... But how do you then think about storage? Okay, SSDs, we talked about that, NVMe's being potentially more power-hungry in cases than a hard drive... I don't personally mind hard drives. I think six gigabits per second is fast enough for me in most things I need to do. It's definitely fast enough for Plex, so why would need to abandon the massive storage opportunity, and the literally decades of usability experience that hard drives provide? And I get to keep a bunch of money in my pocket. Because SSDs and NVMe's can't compare size-wise, but they do compare dollars-wise, and they're very expensive. At four terabytes they're extremely expensive per drive. And if you want to RAID anything, or have anything substantial, you're talking like 16 terabytes, maybe 8 terabytes to 16 terabytes... That's thousands of dollars on the low end for SSD or NVMe. Let's talk storage.

**Techno Tim:** Yeah, yeah. So yeah, good question. I just went through this whole exercise of moving my TrueNAS from virtual to physical, and moving it around... And that's not important. But I do use ZFS quite a bit. I've learned a lot about ZFS. And I think, at least in homelab, the reason why most people are wanting to use SSDs, or something faster, I should say, then spinning hard drives, is because of network. Because of network. If you put in a 10-gig line, if you have a 10-gig connection, your hard drives aren't fast enough to push 10 gig. So again, you're leaving some performance on the table; each hard drive's roughly 150 megabytes per second. Each hard drive.

**Adam Stacoviak:** Yeah.

**Techno Tim:** And so how many do you need to saturate a 10-gig line? Well, about 10. You'd have to put 10 in a RAID to get the throughput that 10-gigabit would get you, roughly. And so that's where I think like --

**Adam Stacoviak:** That's RAID 0, right?

**Techno Tim:** Yeah. Yeah, you need 10 spindles. 10 individual spindles. I think my back of napkin math is right... To saturate a 10-gig line. And so that's where I think it's this push and pull, right? You get faster storage in your NAS, but then all of that speed is locked up inside of there. So then you get faster network, so you can unlock that speed... But then you need to do it on the other end, too. Now your hard drive, probably in your workstations, probably in SSD, and it could probably handle it. But I think it's somewhere in there. It's somewhere between "My network is faster than my drive speed, or faster than my drives can push it", or vice versa, "Hey, I have this speed locked up inside of my drives, and I can't take advantage of that speed with a gigabit or a 2.5 gigabit." And so that's what I've found.

\[00:49:49.10\] I recently got an HL15 from 45drives... I redid all of my storage. I went with TrueNAS bare metal this time, and then I went down this path of "I want the fastest thing possible. I want to saturate 10 gig." And so I started to realize "Oh, six drives can't saturate 10 gig... Oh, really?" I'd never thought about it. I'd never thought my spinning hard drive now was going to be the bottleneck for this, even with six, or seven. And so that's where I had to bring in some stuff for caching, and stuff like that... So I've done a lot of tuning lately to make sure that I get 10-gig all the time. Why? Who knows why? Because I'm paying for it.

**Adam Stacoviak:** Because I can, that's why.

**Techno Tim:** That's right. That is exactly right.

**Adam Stacoviak:** It goes back to your question on LinkedIn where you said "Is it an obsession, or a quest for optimal performance?" I said both. Because it is. It's an obsession and a quest.

**Techno Tim:** That's right. I saw it on LinkedIn. And yeah, and so that's where it was; I had this thing inside of me that said "I'm not going to stop until I get the 10 gig that I'm promised by my network." It's that kind of thing. It's like if you're paying for gigabit internet, and your provider is only giving you half that. Are you gonna stop and say "Heh, good enough"? No, you're not. You're gonna chase down the --

**Adam Stacoviak:** Well, let me ask you a question on that front, if that logic is true... Because if it's ZFS, that means it's cached in RAM, and that means that it's likely -- doesn't ZFS serve from RAM?

**Techno Tim:** Maybe. Yes. So it depends. So there's a lot of caching involved with ZFS. On reads, yes. If it's still there. So on reads, yes. If it's still there, yes it will. It depends on how much RAM you have.

**Adam Stacoviak:** But it can even load 2 RAM so much faster than the disks -- well, I suppose you could probably stream from RAM faster than it can put in... Yeah, either way. I just wonder if that logic is true, because RAM is obviously way faster than disks... And it's faster than NVMe as well.

**Techno Tim:** Let's take cache off the table. Let's just say "Hey, you just rebooted it." There's nothing in the cache, right?

**Adam Stacoviak:** Cold cache, yeah.

**Techno Tim:** Or it's a file you haven't accessed since the last time you rebooted.

**Adam Stacoviak:** Tim, I don't reboot man. I don't reboot, sorry. No way, man.

**Techno Tim:** \[laughs\] I hear you, I hear you.

**Adam Stacoviak:** Cache or life.

**Techno Tim:** That's right. Cash money.

**Adam Stacoviak:** Continue then on your example. Go ahead, I'm listening.

**Techno Tim:** Yeah, so you reboot, you have no cache. All of a sudden -- or you have little cache. Let's say you have 32 gigs of RAM, and the file you want to pull is a 50-gig file. Like I do; all my video files are, I swear, minimum 28 gigs...

**Adam Stacoviak:** For sure.

**Techno Tim:** ...for YouTube. So that's not going to be in there. I want to pull a read, and I want to copy it local, for whatever reason... I'm going to be limited to the read speed of those drives, and how your RAID is configured. I do mind mirrored \[unintelligible 00:52:27.05\] Kind of complicated, but it's basically - think of an old school RAID 10. Not really, but two drives that are mirrored, that then span the total volume.

**Adam Stacoviak:** Right.

**Techno Tim:** So I have 10 drives in there. So that's five pairs of two, and then it's striped across there. I mean, it's a lot more technical than that, but that's how I like to wrap my head around it.

**Adam Stacoviak:** It gets more technical to maintain that too over time, doesn't it? Like, if you had a failure, or you think about -- what's that term? Business continuity, I suppose. Homelab continuity, okay? Isn't that scenario like more challenging to deal with than say like a RAID Z2, which is what I chose?

**Techno Tim:** Maybe. So you get more continuity out of RAID Z2. I think you can have two drives fail. I can have - depending on how many pairs I have, but I can have one drive within those pairs die. If two drives in a pair die, it's gone. Highly unlikely.

**Adam Stacoviak:** Well, I mean, that's a 50/50 chance, right?

**Techno Tim:** Well, it depends on how many spindles you have, right? So I have 10 spindles, five pair. So as you grow pairs --

**Adam Stacoviak:** I think you're at risk, Tim. I think your choice was wrong. I'm just kidding with you... \[laughs\]

**Techno Tim:** I was about to dig into your choice, but now I'm kidding... \[laughs\]

**Adam Stacoviak:** Please do. Yeah, I'm only just being funny when I say that. Because that's what I thought about, was maintainability and continuity. Because if you have mirrored pairs in both \[unintelligible 00:53:53.05\] failed, then you've got a catastrophe.

**Techno Tim:** Yeah.

**Adam Stacoviak:** That's 50/50. That's a flip of a coin.

**Techno Tim:** \[00:54:01.27\] Yeah, yeah.

**Adam Stacoviak:** Whereas me, I've got RAID Z2, and I've got six discs... I've got two out of six that can fail.

**Techno Tim:** I also have two out of six, but at the same time, it would have to be the same two. And that's where it's the same, right? I have the same probability, except for if you have two drives, it can be any two. If I have two drives die, it can't be the same two that are on the same pair. So I don't know the probability of that... But I still have -- I can lose... If I have six drives, I can lose one, and still be fine. I can lose a second, as long as it's not the pair of the first.

**Adam Stacoviak:** Yes.

**Techno Tim:** So I still have roughly the same probability, except there's that other piece on top of it that says "Hey, you better not be the pair of the one that died." But that's true among all your pairs. But the more pairs you get, the less likely it is happen.

**Adam Stacoviak:** Sure. Performance is better, though. So I agree with your choice on performance.

**Techno Tim:** That's right.

**Adam Stacoviak:** And that's probably where you hinged on, was the performance of mirrored pairs... Because that's so much faster than my RAID Z2.

**Techno Tim:** Yeah, there's two reasons why I chose this. One was absolutely the performance; you get both the read and write performance, right? You get two spindles to write to, or two drives to read from, maybe, if ZFS is aligned properly; if the ZFS guys are aligned properly.

**Adam Stacoviak:** Sure.

**Techno Tim:** And then two, on top of that it's easier to expand your storage in the future. I used to be a RAID Z2. I had done it twice, and I kicked myself twice.

**Adam Stacoviak:** Uh-oh...

**Techno Tim:** Yeah, here's the gotcha.

**Adam Stacoviak:** Growing.

**Techno Tim:** Exactly. You can only grow by the same number of drives. So let's say you have six drives right now. They're all 20 terabytes. The only way you're going to be able to grow that, unless you can hold out on the time that they release this feature; that feature doesn't exist, so that aside... But the only way you can grow those six drives is by replacing or creating a new one with six drives. So the next time you upgrade, you've gotta buy six 40-terabyte drives. The next time I upgrade, I only need to buy two. And so I can add mirrors and pairs over time. So as I grow, another mirror pair; another mirror pair.

Now, the other downside of what I'm doing is I lose 50% as sunk costs. Because they're mirrors. So I lose 50%. I buy two 14-terabyte drives, I can only use 14 terabytes.

**Adam Stacoviak:** That's right.

**Techno Tim:** So yours is a little more cost-effective, harder to grow further down the road. Mine is expensive, because I lose 50%, but easier to grow. And so now I've just decided, "Well, when I need to grow, I'm buying two drives." That's it. I don't need to buy six, or eight, or whatever I set my RAID Z2 up as. Two drives at a time. And you pop those in, you add them to the pool, and boom, it's like magic. Extend your pool.

**Adam Stacoviak:** Yeah. So I talked to Matt Aarons, I think about two years back, and I think he alluded to the feature you're talking about, which I think is expanding...

**Techno Tim:** That's right.

**Adam Stacoviak:** ...which, traditionally it's just been challenging to expand a ZFS store. And I don't know all the details, and I'm not gonna pretend... I'll just link up that episode. And I think even when he described it to me, he said it wouldn't be a perfect world. It would still leave data not perfectly paritied across all the disks; it could only do certain things, there was only so much logic it could do... And while it could grow by less than the disks of the original set. So in my case, six RAID Z2; four of those are used for storage, two are used for parity... To grow that by two if I wanted to in the future with this new feature, just buy a couple disk versus all six - they call that expanding. It's not perfect.

**Techno Tim:** That's right. Yeah.

**Adam Stacoviak:** Trade-offs.

**Techno Tim:** Yeah, yeah. Because they're not gonna go through and defrag the drive, and allocate all of those blocks...

**Adam Stacoviak:** It's just impossible to -- yeah, the logic is impossible, really. It's infinite.

**Techno Tim:** \[00:57:57.22\] And that's why they sometimes say -- you'll get a free defrag when you do that; maybe not, but people like to every now and then take all their data off those drives and put it right back on. \[laughs\] Because then it distributes it evenly.

**Adam Stacoviak:** Right. Which is totally -- you could totally do that. I mean, you could do that with a temporary pair of disks. But you've gotta have your pool down in sort of maintenance for probably -- if you're doing it right, you should do a burn-in test too. You should do a burn-in test, which is basically a week for large drives like you and I are working with. Like, I think I did a burn-in test and I was like "Is this thing gonna be done? It's like 10 days later."

**Techno Tim:** Yeah.

**Adam Stacoviak:** And I was like -- to be really pedantic about the process of burn-in test, then move data off, then move data on, all that good stuff, that's gonna take... It could take weeks. But in a homelab scenario - sure you can do that. But my kids, they want their Plex, and they want it now.

**Techno Tim:** So I did this -- I just went through all this. I just went through exactly this, but I had the luxury of having a second server. If you don't have a second server, you just plug in more drives. But I did exactly that; I tested all my drives. I didn't do a true burn-in test, but I ran a super-long smart test that -- you know, it's going to say "Hey, if it's going to die in the first eight hours, this will catch it." If it's gonna die outside of there, that's everything else, just like anything else.

**Adam Stacoviak:** Yeah.

**Techno Tim:** And I did a copy onto that drive... I still kept everything live; didn't cut over. I copied everything to the drive... That copy took forever. I did another copy to do a catch-up. It's like a database... You know, if you ever migrated a database. Then I had to do a catch-up copy again... That was really quick. Then I flip-flopped them, then I copied one more time back to them, and then I left that pool alone. I just left it alone, because they were new drives too. And I said "Hey, if anything goes wrong in the next - whatever - week, I've got this set of data", and then after a week I just destroyed it. But it's kind of complicated stuff.

But I will say though that just because I chose mirrored pairs doesn't mean that's the best solution out there. We didn't even talk about access patterns at all, and I think a big driving force of why you choose one RAID Z over another should be access patterns, too. So is mine the best for large files? No, I think yours is. I think RAID Z2 outperforms for large contiguous files, versus tons of individual files. So I don't want to like just blanket statement like "Hey, mine is the best." But in my head...

**Adam Stacoviak:** That's a good choice for you, yeah. I think it was the wrong choice, but it's a good choice for you. I'm just throwing stones... Okay, so the better question to answer -- I'm just kidding around... Because I mean, isn't that the -- if you're a ZFS nerd, you can argue about configuration all day long, in every way possible, and I'm just being funny when I say that.

So the real question, I think, is why. Why do you choose ZFS over Btrfs, or - I think unRAID gets lumped into, even though it's not... It's using, I think, Btrfs inside the system. What makes you personally choose ZFS?

**Techno Tim:** Yeah, good question. One, I think because it's popular in homelab. I mean, it's easy to kind of get started. I think the number one reason why I choose it, or chose it in the beginning, is because of TrueNAS. TrueNAS came along, and it was FreeNAS at the time... It was this NAS system that had ZFS, that I had no idea what it was, that could give me a lot of storage services in a good UI. I could put drives in it, it was open source, I knew it was going to work, and I didn't need a RAID controller; I didn't need a hardware RAID controller. Huge selling points for me. "What? I could spin up a NAS? I don't need this RAID controller that I used to buy all the time? It's portable? If that machine dies, I can bring that array with me, and put it in another machine, and just import the array, and it works?" It was all magic to me.

\[01:01:56.11\] So those are things I liked in the beginning, and then FreeNAS put a nice UI on top of it, did a ton of work to develop ZFS 2, and then on top of that they had apps, and everything else. And then I could do NFS, SMB, object storage, all of these other things that I wanted to do, all in one NAS. And I thought "This is exactly what I need." You know, some people run a NAS to run apps; I run a NAS to get SMB, NFS, \[unintelligible 01:02:17.28\] and object storage. Basically, all of the types of storage you could want.

**Adam Stacoviak:** Yeah.

**Techno Tim:** And that did it for me. So it wasn't until later that I learned about all of the cool things about ZFS, like snapshots. Snapshots are awesome. And in my TrueNAS system I take snapshots every hour, of every item in my pool. And that's basically the diff, but really quickly, I can go back and revert to a snapshot if something goes wrong. ZFS snapshots are like lightning quick. I do them every hour, on everything, and throw out the ones that are empty... Because why not? And again, it's only the diff.

So that's awesome. I get quick snapshots, easy ways to revert... The integrity check, the scrubbing of the pools, the integrity check where however often it's going to go through and -- I don't know if it's a SHA, or hash everything, but it's going to do an algorithm to figure out "Hey, are the things I have on disk - do they match the things in RAM?", which is pretty awesome. And then all the other things you could do. If you have two systems, you could move those snapshots really easily to another system. So if you do a 3-2-1 backup at home, three copies to two mediums, one off-site - I always forget - spin up another TrueNAS server and there's your second local copy, and the snapshots outside of the first one is just going to be the diff, so it's really quick. You could do that off-site if you wanted to, really fast.

And so for me, it was just like, okay -- Btrfs I typically see being used, and I think it's unRAID, like you mentioned, but also in Synology... And Synologies aren't devices that I have. I've had options to use them, but at the end of the day, hey, TrueNAS -- I honestly think a lot of it has to do with just TrueNAS being a great product by iXsystems. And on top of that, Proxmox runs on ZFS, too. So it's like, two of my favorite things are using ZFS, so it kind of came with the territory. And they made, I think, good technical decisions when they were building those two products. And for me, it's -- you know, I'm still uncovering all of the things that make ZFS a good file system. But I will say, it's snapshots, it's scrubbing, it's integrity checks... And yeah, and then storing everything in RAM, and having it lightning fast. That's kind of Linux'es way; that's what Linux does really good, is store everything in RAM.

**Adam Stacoviak:** For sure.

**Techno Tim:** Why not? If you have unused RAM, that's a waste. And so Linux does that really good, to just say "Hey, I'm gonna use all my RAM." Sometimes you look at machines and you're like "Why is all my RAM used?" I think the question to ask is "Why isn't all my RAM used?"

**Adam Stacoviak:** Absolutely.

**Techno Tim:** On Windows too, or Mac. Use it all. I don't want you to go to disk for anything.

**Adam Stacoviak:** That's what it's there for.

**Techno Tim:** Yeah, exactly.

**Adam Stacoviak:** Use the RAM.

**Techno Tim:** Exactly. I'm sure there's a lot smarter people out there that know so many things that are probably yelling right now, "What about this?" and "What about this?" And I think all of those are right. But my experience has been those handful of things. And TrueNAS and Proxmox were my gateway into it. I didn't even know that I wanted ZFS on Proxmox when I got Proxmox. It just kind of came along with the ride.

**Adam Stacoviak:** \[01:05:40.01\] Yeah. I like how it's a forethought with them. It's definitely a first-class citizen in the Proxmox world. And I like -- yeah, all the reasons you said that you like the use of ZFS, I agree. I don't exactly operate on 3-2-1. However, I do have at least two medias, in most cases. Sometimes both on-site, sometimes I'll rotate some disks... So in my case, I recently backed up a mirror pair to a ZimaBoard. So I spun up two disks on a ZimaBoard, I didn't even have an external disk to install Ubuntu to; I just installed to the -- I think it's like ECC, or whatever the onboard storage is for them...

**Techno Tim:** The EMC, yeah.

**Adam Stacoviak:** The EMC, yeah. I always forget what that's called... Which has been just fine. And so ZFS send, ZFS receive; pretty easy, like you said. That first one is gonna be, you know, as long as it takes to move all the data, but the diffs between them is really easy. So it's pretty easy to keep one kind of primary and one secondary, as a backup. And you could script that if you want to, obviously, and make it automated, and do all the things. So I agree with that.

**Techno Tim:** Yeah. I don't have 3-2-1 here either. I think I'm at 2-2-1 right now, just because I don't have another 100 terabytes of disks laying around. So yeah, two copies. Yeah.

**Adam Stacoviak:** Well, when you mentioned earlier in the show this idea "Why storage? I want to store all the things", I just think "Okay, now you have to backup all the things."

**Techno Tim:** Oh, yeah.

**Adam Stacoviak:** As soon as you think about storing, you've got to think about continuity of some sort. So you have to have some version of a plan. And then you can do B2, you can do R2, you can do S3, you can do a lot of different twos or threes out there. We actually did a show "B2-R2-S3", I believe... Anyways, I won't bore you with the show name, but we had fun naming that show, because we talked about all the different options for object storage, or external cloud storage for backups and whatnot... Which was kind of fun.

**Techno Tim:** Yeah, when you start thinking about it, not only do you get high-capacity drives; then, like you mentioned, you need continuity, business continuity. So you put those in a RAID. Now you're losing 30% to 50% of that. And then on top of that, best practice is to back that thing up again local, and have another local copy of it. It's like "Oh, my gosh... How many drives do I need?" But I'm guilty of my second local copy being on a RAID 0 on another server, because I'm like "I don't care. It's my backup local."

**Adam Stacoviak:** Right.

**Techno Tim:** If that dies, I'll scramble, get another drive, do another RAID 0. Who cares? I'll be backing up again. And that drives, plus my main NAS drives - I'll get it from the cloud. So my second local copy is like usually \[unintelligible 01:08:22.14\] server. It was an old PC conversion...

**Adam Stacoviak:** Like a ZimaBoard.

**Techno Tim:** Yeah.

**Adam Stacoviak:** It's kind of like modern \[unintelligible 01:08:29.00\]

**Techno Tim:** Yeah, that's right. That's right. But it's like, every hard drive it can find, put it in a RAID. I don't even care. And if I see a success in the report, it's good. And on top of that, I only turn that machine on at night, during that hour, to only do that backup during that time, because it uses power, so... But yeah.

**Break:** \[01:08:50.28\]

**Adam Stacoviak:** Okay, so we've talked about networking, deep; storage, deep. We can go on. And the next question I get asked all the time is connectivity. How do I homelab, but then also access homelab stuff externally? Now, my easy button answer is Tailscale, because Tailscale is just amazing. But that's really WireGuard underneath, and you can get more nerdier and more configurable than that. What do you do? What's next on your list? Is connectivity pretty important to you? What do you do?

**Techno Tim:** Yeah, how much time you got? Because this gets into self-hosting, where it's like, that's also --

**Adam Stacoviak:** Well, this dovetails into the self-cloud too, I think. I mean, we can blend these topics, because that's what you're trying to do; you're trying to create a cloud that you can connect to, period.

**Techno Tim:** That's right. So I just did kind of a walkthrough of my homelab services or my self-hosted services for 2024, I just released that a couple of weeks ago. It's kind of a walkthrough of my network, how traffic comes in, what it's running on, and I have both logical and physical diagrams, and then everything I use. So thinking through that, what I typically use -- now, I know you can use tunnels, like you mentioned, Tailscale, or Cloudflare tunnels, or whatever you want, where you expose something externally by creating a secure tunnel from home to your proxy in the cloud, and having that proxy be where it's exposed, versus exposing it at home. I don't do that. I guess I do it the hard way; I'd been doing it before tunnels were kind of a thing, these reverse tunnels. I actually use a reverse proxy to do that in port forwarding.

So what I typically do - and I do two layers of it. Firstly, I use CloudFlare, their reverse proxy. So I point all my DNS to Cloudflare's reverse proxy, which does a couple things. One, it gives me some anonymity. Whoa, peace -- oh, that was Apple. I liked that.

**Adam Stacoviak:** Tim said "Whoa!" because he did a peace sign and the bubbles came up, or the balloons came up. And so it startled him.

**Techno Tim:** Yeah. Sorry. That's yeah -- tell me you're on a Mac without telling me you're on a Mac. So anyways, it gives me some mm -- that word's so hard for me to say, but it keeps my IP address hidden. It keeps me anonymous, where I use their proxy. But on top of that, it filters out all the bad stuff, and all their known bad stuff, so that only the good things are coming through. And then on top of that, I port-forward port 443, so SSL or TLS, to a reverse proxy that I host locally, too. And so that can be NGINX proxy manager; super-easy to use, a good UI, you can automate your own certificates... But I use Traefik, which is spelled a little bit odd... Which is more of a -- they do Docker and Kubernetes, but more of a cloud-native type reverse proxy, which kind of does the same thing.

So long story short, I forward Traefik from the public internet into my home. I host stuff here. A lot of my TechnoTim.live -- there's a lot of things that I have hosted here, and that's why I have to ensure that my network rules are set up properly. I kind of walk through that and how I do that. But at the end of the day, that's what I do. And I use Let's Encrypt to get certificates. I have my own certificates, I don't pay a hosting provider or anyone to get my certificates. It happens automatically. It's always secure. Every three months, I get brand new ones; they're automatically put into the load balancer in Traefik. And then behind there, I have Kubernetes.

\[01:14:08.24\] So I do self-host Kubernetes at home. It used to be Docker stuff for a long time... But all of my self-hosted services that I have, that are public-facing are then in VLAN, that is my public VLAN, where those things live. And so anyone coming in from the public internet comes in through all of those things, comes in through UniFi, and it's terminated to a load balancer that has my own certificates... That provision publicly from Let's Encrypt, but they're trusted publicly, and they get to my services securely. So that's kind of how I have things set up.

You could do a tunnel. Now, I know tunnels are awesome. I play with them, I think they're awesome. I just have a -- I have a hard time with opening up a tunnel on a node directly, and just saying "Here, do whatever you want to do", and bypassing all of those layers of protection that I have in between. And I know they're secure ways to do it, and I'm not saying they're insecure... But having an agent running on a node that then just is like - I have to trust that they have the right rules in place to only do 443 or whatever port you say... I don't know, I'm not there yet.

**Adam Stacoviak:** Okay.

**Techno Tim:** I know they're awesome, and don't get me wrong, there's plenty of use cases... If you have double NAT, or you're a carrier-grade network, where "Hey, you can't do port forwarding." Definitely some use cases there. But I don't know, maybe I'm old school. I don't know if that's old school, or what.

**Adam Stacoviak:** I think you probably do it because you can, and because obviously you create content around the things you do in terms of exploration... So to me, it totally makes sense. Me, I don't make money doing what you do, or maybe you don't make -- I don't know.

**Techno Tim:** No, I don't...

**Adam Stacoviak:** At least you put a lot of time into it. I felt like "Well, the thing I'm optimizing for is not what you were optimizing for in that scenario."

**Techno Tim:** Yeah, absolutely.

**Adam Stacoviak:** I was like "Yeah, Tailscale works for me." So I totally get that.

**Techno Tim:** Yeah, absolutely. No, I love Tailscale, don't get me wrong. I'm probably going to be bringing in Tailscale here soon. I'm doing a colo project; you can maybe see my servers back there. I've got three servers back there on my workbench; I'm going to be moving those to my own... I don't know, it's going to be my private cloud...? But I'm going to be self-hosting stuff in the cloud, along with here. And so I'll need something to build secure tunnels. Tailscale. Great solution for that, to build tunnels securely between home and my colocation, where I'm putting these servers. So...

**Adam Stacoviak:** It's pretty intense to -- I can see why people can be "What is homelab?" and then intimidated by homelab, because they probably hear folks like you and I geek out... And you're way more geekier than I am, because you go so deep...

**Techno Tim:** Thank you, thank you.

**Adam Stacoviak:** Whereas I'm just a tinkerer, you know? We haven't even talked about -- you did drop the spade, Proxmox. So you did break spades. But we didn't go deeply into it, which is a whole different thing, where you can sort of do private cloud stuff. I've got the Intel NUC, that's low-powered, that runs Proxmox. And I've got several things on there. Home automation stuff on there. And long-term plans on there. I could have Plex on there, but I don't, because I have a different machine, like we talked about, before it was dedicated. Like, why would I undo that to put it on a NUC? I mean, sure, I could, but that's ruining all the fun of why I built that machine, and why I'm gonna keep it for life, even though it costs me $10,000 a month to power that.

**Techno Tim:** \[laughs\]

**Adam Stacoviak:** I'm just kidding. I mean, sure, it's quite expensive, but... Yeah. Okay, so accessing things... Do you get it all into home automation, i.e. NFC tags, any automation whatsover? I haven't heard you talk about it too much, but what do you do automation-wise?

**Techno Tim:** Oh, I've got lots of home automation here. Last I checked, I kind of walked through it on my homelab services tour... I don't know, I think I have 50 or 60 IoT devices here, if not more.

**Adam Stacoviak:** \[01:18:01.01\] How in the world do you manage all this stuff? You do so much. How in the world do you even have time to keep it in your brain space, to consider the managing of it?

**Techno Tim:** I don't know. It's poorly managed, at best. Well, so I have a lot of smart devices in my home, and I have all of them in Home Assistant. Super-nice. If you don't know, or someone doesn't know, it's an open source kind of hub for a lot of your smart stuff. If that smart device doesn't connect to your home hub of choice, either an app, or Google Home, or Apple's HomeKit, most likely the smart people with Home Assistant have figured it out and got it connected there. Then on top of that, it's not collecting data... Your actions, I will say, stay within your home. So a huge, huge, huge privacy boost if you switch to something like that.

So I do use Home Assistant. I use it kind of in a weird way, but I have everything in Home Assistant. I then kind of use it as an interface to get some of my non HomeKit devices into HomeKit. For example, I have Wemo switches everywhere. It's a decision I made 10 years ago. They're not compatible with HomeKit. It's like great, I'm not going to go replace 10 Wemo switches. Well, I've found that Home Assistant can see those and then present those to HomeKit.

**Adam Stacoviak:** Interesting.

**Techno Tim:** Yeah. And so that's what I've been doing for a long time. I used to use this thing called Home Bridge, and it was totally dedicated to being that interface between the device and HomeKit. And then I decided "Well, Home Assistant can do the same thing, plus I get all this other stuff." So long story short, I have a lot of different devices which I like, lots of different manufacturers. I get them all into Home Assistant, and then I can present all of them to HomeKit. And people are probably like "Why the heck are you using HomeKit?" Well, because I can use voice commands on my phones, I get dashboards on my phone, I get all this stuff...

**Adam Stacoviak:** Preach.

**Techno Tim:** Yeah. I get all this stuff through my MacBook... Like, don't get me wrong, Home Assistant is great, but what it would take me to move to Home Assistant would be replacing the voice assistant on my phone, so then I can just press a button and bark out commands for it to work.

**Adam Stacoviak:** Or your watch. Do you have a watch, too? I usually use my watch, too.

**Techno Tim:** I do, yeah.

**Adam Stacoviak:** I'm known for being like James Bond. "Living room off." It's what I'll say to -- and my kids hear me say that and just know "Okay, we're moving along to go upstairs and play, or whatever. Whatever we're doing here is over now. Dad's home. Living room's off, let's go upstairs." And that's just telling my TV to turn off.

**Techno Tim:** I do it all the time when I'm carrying out the recyclables, and I'm saying "Open the garage door", and my neighbors probably think I'm crazy. Well, they know I'm crazy. They're confirming it.

**Adam Stacoviak:** Yeah. \[unintelligible 01:20:43.22\]

**Techno Tim:** But you know, because I have my garage door... Yeah, that's right. So yeah, so I do that... And then on top of that - you might like this - I have UniFi cameras. They're not compatible with HomeKit. But there's an open source solution called Scripted, that allows you to connect all of your UniFi cameras securely to HomeKit. And so now --

**Adam Stacoviak:** Wow, okay.

**Techno Tim:** Yeah, it's so odd. It's called Scripted. I have a video on it.

**Adam Stacoviak:** I haven't seen that one yet, so... That's on my list now.

**Techno Tim:** Yeah. So anyways, anytime I can check within the app to see what's going on to any camera, I could do whatever. If I'm watching something on my Apple TV and someone comes by and delivers a package, it'll show a pop up and say "Someone's at your door with a package." It's fantastic. So those types of integrations are nice. And so that's why I lean into Home Assistant; even though I don't use it full on, I'm still a huge fan of it, and I still use it every day. It's in my homelab, and it takes very little care and feeding. It's so awesome. I can't sing its praises enough.

**Adam Stacoviak:** Do you run it as a Docker image, or is that on your Proxmox machine, obviously?

**Techno Tim:** \[01:21:53.11\] Yes, all the above? So yes, it's -- ready for this? It's a container inside of my Kubernetes cluster, that's inside of a Proxmox virtual machine. So I run it in Kubernetes.

**Adam Stacoviak:** Oh, gosh... Come on, Tim.

**Techno Tim:** I know, I know. At the end of the day though you can run it as a container, or you can use the Hass.io, the full installation of Home Assistant, which is great. If you're a beginner to it, do that, because you're gonna get plugins, you're gonna get all this additional stuff. To me, I say "I don't need your plugins for NGINX, Proxyman" - I don't need all those plugins, because I can install those myself. So I do run in a container, but I would advise if you're going to do it, just run it on a virtual machine, a dedicated virtual machine; a small form factor device that you don't mind being on, that sips 10 watts of power all day long.

**Adam Stacoviak:** Yeah. Let's broach that then, because I feel like there's a divide there, where you can go Proxmox, VM, dedicated to Docker virtual machines, or you can go the crazy route, like you did, because you don't mind managing Kubernetes... So there's some that will say "Should I run Kubernetes in my homelab?" Obviously, your answer is yes, but I think it comes with caveats, because you don't mind what's required to do so. Me personally, I'm cool with like just simply spinning up a machine for a few, maybe even like one dedicated -- because I have capacity, and I don't care. I'm not trying to cram it all in; I might just run one single VM just to run Docker on it, for one single application like Home Assistant, for example. Or I might run a more beefier VM, with more cores attached to it and more RAM available to it. And I might run Portainer or something like it, to have multiple Docker instances on a single machine, and then do \[unintelligible 01:23:36.00\] etc.

At what point do you say "Okay, this makes sense for Kubernetes and homelab", or "This makes sense for a Portainer, or a beefy machine, beefy VM, with multiple Dockers"? Or just a single Ubuntu instance with one Docker? How do you feel about, I guess, all those scenarios? Not really a question, but more like -- there's a hodgepodge, Tim. Make sense of that.

**Techno Tim:** No, I like it. Should you run Kubernetes at home? No. \[laughter\]

**Adam Stacoviak:** Okay. Unless...

**Techno Tim:** I'll answer the first question. Yeah, there are some caveats. I just asked that question yesterday on a live stream, and a lot of folks think that there's this natural linear progression to Kubernetes, right? As we had from virtual machines. Physical machines turned to virtual machines. And then people realized, "Hey, with containers I don't need all of that excess OS stuff, so I'll just run containers." And it's this linear progression.

The next linear progression isn't always Kubernetes. Kubernetes provides a lot of things, and does a lot of things different than just Docker itself. And so that might be a side quest, or a dotted line to somewhere else, to basically ask yourself "Do I need things to be highly available? Do I need health checks? Do I need unified storage and unified networking? Do I need load balancers? Do I need all of these things?" Really, really, because Kubernetes was made to run things at scale. And so what can you run at scale at home? Almost nothing. Almost nothing. There are caveats, but almost every single Docker container for home and homelab is built as a monolith. So what does that mean? It means "Hey, I have my API in there, I have my database in there, I have all of my code to run, and I have all the dependencies I need. And when I hit Start on that thing, I say, docker start, compose up, whatever, it has everything it needs." So most are built that way in a monolith.

Can you scale monoliths? No. No, because then you start to get in split brain scenario. You spin up one Plex server, he thinks he's -- "Hey, I'm in charge. I've got everything. I know what your movies are, and I know who's watching what." Spin up another one -- you know, he thinks he's in charge, and they don't know about each other, right? So you end up in the split brain scenario.

\[01:25:54.00\] So most of the time, for 99% of the things that people do in homelab, Kubernetes is not going to be a good fit for scaling. Now, is it a good fit for if you want something highly available? I'm not saying totally fault-tolerant, but highly available. Maybe. You're running this Plex, this Plex dies, or this node goes away; right now, the Docker way is to "Oh, hurry up and spin up a new machine, and get Docker on there, and backup that data, and bring that data over, and start Plex again, and you're back in business." The Kubernetes way is to say "This one died? Okay, well, you have a couple of nodes over here that this could run on. I'm going to spin you up over here." And things continue to run. Obviously, there's going to be a blip and all this stuff, and timeouts that need to happen... But at the end of the day, that's one thing that Kubernetes is going to get, you even if you are running it at home.

Anyway, but a lot of people think it's this progression, "I did Docker, I mastered Docker, and I'm running everything here... Now I've gotta go to Kubernetes." I would just caveat it with don't think of it as "I'm going to migrate all of my services to Kubernetes." Think about it like "I'm going to spin up Kubernetes in my homelab, in this environment that I have, this playground, and I'm going to play with it. And I'm going to see if it applies. And if it's too complicated, if it's too much overhead, if I get frustrated and I'm not having fun anymore", don't do it.

So that one's out of the way. So that one's -- I would say it's a great skill to learn. If you can learn it on your own, awesome. If you can learn it on work time, even better. But if you can't learn it on work time, and they need someone who knows Kubernetes, it might be a good fit for you to learn at home. Or it might be a good fit for you to level up, so that maybe you can go manage Kubernetes somewhere else.

But then that aside, so then we get into "Where should I put my Docker containers?" I think that's kind of like the question. And "What do I do if I have multiple, and all of this?" So I've been through this a lot. I used to run multiple Docker hosts, I'd put some here and some here, and I'd have to figure out that -- I'd have to do the math in my head to say "This one uses a lot of RAM. This one doesn't. This one uses a lot of disk IO, this one doesn't." And I had to separate them before; things that Kubernetes would help with... But anyways, I'd gotten to the point where I started running just a single Docker host, and I didn't think about it anymore. Like, I didn't think about it in terms of what the resource constraints were, because I had a server that could do anything that I wanted; I could give it 24 cores, I could give it 256 gigs of RAM if it needed... And then it has disks that are multiple SSD drives, that are backed by ZFS... So once I got out of the hardware requirements, I decided "I'm gonna put them all on one." And I honestly think that's the way to go, until you need to start separating stuff out based on the network requirements.

So I would highly recommend, hey, if you're running one Docker container in one Docker container another VM, I would just put them all on one, and I would stack it. I would go vertical. Because that's the benefit of Docker, and running things as a single host - scale vertically, as far as you can, until you can't anymore. And then if you have something, like hey, let's say you want to host something publicly, you have a website, and you don't want to forward all your traffic to all of your private stuff, that's where I would say "Okay, move this one workload off onto another VM, and have that be where your public workloads run." Not so easy to figure out; it's not so easy in your head to figure out "Does this have public incoming stuff?" But basically, wherever you're going to port forward those ports, or open up a tunnel, I'd say that's probably a good candidate to put somewhere else.

And so I started dividing mine up logically, and not by resources, because I knew that my Proxmox host could handle anything that I would throw at it. And by dividing them up, I was actually causing more points of failure; it's something that I just even recently did with my Plex migration recently. I was giving myself more latency and more points of failure by separating stuff out.

\[01:29:58.08\] And so now with my Plex server - you know, I used to run it on a machine, and then it would connect to my NAS to get data. And then now, if I reboot my NAS, Plex is down. If I reboot my Docker host that's running, Plex is down. So I just doubled my downtime or probability of something being down just because I wanted to separate them out.

So for me it's always expand, and consolidate; expand, consolidate. But the more I do it, I think the better reasons I have to do it. In the beginning I didn't have a lot of reasons other than I just think it should be this way. But now as I start to do it a lot, I have some experience to back it. But yeah, that's kind of my thing. I'm at the point now where it's like "Consolidate as much as you can on the same machine." It means less machines on. If it's a virtualization host, put them all on one VM; it's only one thing to backup, less points of failure, it's only one thing to triage, only one thing to patch... But if you get to a point where you're going to start hosting things publicly, you might want to move that off that stack, put it on its own stack, and that becomes your public-facing stuff... Which may or may not be hard to do, because it might be Plex, where - where does that fall? Because I'm kinda hosting things publicly, but at the same time it's not a public website, you know?

**Adam Stacoviak:** Yeah.

**Techno Tim:** Anyways, that's kind of how I do it.

**Adam Stacoviak:** It's a good synopsis of how you work out. I mean, especially with Plex... It sounds like you have Plex on its own machine, and the storage is somewhere else external to Plex. Is that right?

**Techno Tim:** It used to be that way. It's been that way for years. Just recently, I moved it onto TrueNAS. Because I thought

"Why have two points of failure?" I separated it for a long time because I needed a video card. Well, I got to a point -- I just did it last weekend. Not last -- yeah, last weekend. I just moved the video card inside of TrueNAS, spun up the TrueNAS Plex app, and said "There goes my latency, there goes my two points of failure..." Like, Plex always needs access to my media. Why put it on anything else?

So there's one use case where it's like - Plex can't run to well without media. I mean, it can, but at the same time --

**Adam Stacoviak:** It's pointless, really.

**Techno Tim:** Yeah, exactly. So I ended up putting it on my TrueNAS, put the video card in there, and now I'm just like "This is awesome. Now I don't have that virtual machine to even worry about." It's in Plex. Less latency, less points of failure.

**Adam Stacoviak:** So in your case you're using a video card, not the iGPU in Quick Sync. Or you're probably still using Quick Sync, but is it external to that? What video card are you using?

**Techno Tim:** So I'm using a -- I bought it a while ago and it's still great. It's an NVIDIA P2200. So it's one of their -- it's not the NVIDIA -- I forget; it's a Quadro series card, so more geared towards vector, but also has a really good NVENC encoder inside of it. I would use Quick Sync, but the CPU that's running inside of my NAS is not a core processor, it's a Xeon, actually. A low core count, low wattage Xeon. So I don't have a video card, so...

**Adam Stacoviak:** Is that on your AV15 then, as your TrueNAS server?

**Techno Tim:** HL15.

**Adam Stacoviak:** Okay. \[unintelligible 01:33:09.23\] Well, didn't you have an AV15 as well?

**Techno Tim:** That's right. Yeah, I did.

**Adam Stacoviak:** So you have both?

**Techno Tim:** I have both. Yup.

**Adam Stacoviak:** So you have 30 disks available of hard drive storage, Tim? On two machines, of course, but that's still a lot of capacity.

**Techno Tim:** Yeah, I do. Yeah. So yes. I have more. I have more slots to fill everywhere.

**Adam Stacoviak:** Gosh...!

**Techno Tim:** \[laughs\] But yeah. So I had an AV15 earlier, from 45Drives, they sent it to me. And then as part of going out and working with them, with the HL15, they sent me one too, which was super-nice of them to do... And it helped me, give it a review and go through all the parts and pieces...

**Adam Stacoviak:** For sure.

**Techno Tim:** \[01:33:50.24\] And at the same time I realized, that's about all the Xeon I need. It's a great server, because you know, at first I kind of balked at the six cores, and 1.9 gigahertz processor speed, but then I realized, this thing's running at 80 watts less all day long, and that's real money savings. And I don't use CPU on it anyway, so... It actually turned out to be like the perfect --

**Adam Stacoviak:** Smarter.

**Techno Tim:** ...the perfect CPU, I think, for that box.

**Adam Stacoviak:** Well, we barely touched on Proxmox, which is fine with me... Let's look at the future. What do you think's coming this year? What's coming this year that's got you excited, at least?

**Techno Tim:** Well, that's tough... Because I feel like, you know, with a lot of the homelab stuff I do, I feel like I'm really on the cutting edge, or on at least some edge, at least for me... I tend to keep my network stuff on the edge, my server stuff pretty much on the edge, my desktop stuff on the edge... So it's tough. It's like, what's coming that is interesting?

I will say that one thing I played with over the last week or so is OCuLink, which is pretty cool. I don't know if people have even heard of OCuLink, but it's this interface on a motherboard where you can get more PCI Express devices, or PCIe slots, or lanes, so that you can run more devices, basically is what it boils down to.

So it's this weird port on some motherboards where if you plug it in, you can plug in a PCI Express device and give you four more lanes. So why is that interesting? Well, some people don't have enough lanes or slots to run more NVMe drives, and so I've found that "Hey, this is pretty cool." If you wanted to run a video card or an NVMe drive over OCuLink, you totally could. I would say that -- you know, the cable is the most expensive thing, but at the same time, it's pretty cool. Pretty cool. So I'd love to see that taken advantage of some more.

It's pretty interesting, because if you start to think about mini PCs, if you buy a mini PC, you're kind of locked into your video card. Something with OCuLink could unlock that, to where it's like "Oh, okay, now I can do some kind of compute outside of there." It's pretty interesting.

Local AI stuff is pretty cool and pretty interesting. I will say though, it takes a ton of compute to actually do anything local AI that's worth it. You realize how much GPU or how much compute clouds are using to do this stuff all day, every day. If you're using even the most aggressive GPU to do any kind of AI stuff, it's still pretty slow compared to clouds. That's definitely interesting to me...

Yeah, it's a tough call. I feel like in my daily/weekly type stuff I'm usually working on a lot of this stuff that hasn't yet fell into most homelab members' hands yet. Not because they don't want it, it's just because I kind of got to stay a little bit ahead, just because of the industry I'm in, because I'm making content for folks. But I would love to see -- so this is not on radar, but I would love to see Intel actually - or even AMD, for that matter - unlock some more CPU lanes for PCI Express on their processors. It's something that's like driving me crazy and preventing me from upgrading to a new Intel machine, the whole 20-lane limit on their PCI Express slot. But that again kind of goes into homelab, because a lot of people are starting to use desktop processors for the homelab stuff, and having 20 lanes is almost kind of pointless for homelab stuff, depending on what you're doing. 20 lanes is -- you put in a GPU, that's 16. So you get four after that. So...

**Adam Stacoviak:** Yeah. Similar to that, I think I have an AV15 as well, and there's a 10 gigabit fiber card, dual fiber card. So I've got two 10-gigabit connections, so it's just basically just a bigger pipe, not 20 at that point. And that thing I think uses 16 lanes. And at that point you really don't have anything else you can add to the machine after that. Now, it's also got the HSB card in there as well, which is a lot of lanes for all those discs; between the network card and that, all the PCIe lanes are consumed to their fullest potential, really.

**Techno Tim:** \[01:38:03.16\] Yeah...

**Adam Stacoviak:** I agree with you on that. I wish there was a bit more flexibility there. I think on my other machine I have an IPMI card I could put in it, but I didn't put it in it because I have chosen to put a four-lane NVMe card in instead. I'm gonna choose NVMe over IPMI any day. I could just figure it out; I'd go over and touch it and reboot it, so I'm not worried about IPMI. It's right here; I don't really need to have that remote accessibility to its reboot, and features, and whatnot. So I chose that... Which, that in particular is a Proxmox machine, and all of the things run on those four NVMe's. So that essentially is the ZFS stores that Proxmox sits on, all of its backup, all of its speed etc. So that's how that works for me.

And I think there might be one NVMe on board, which is where the operating system is installed. So one NVMe on the motherboard, and a carrier car with four NVMe's... I think it's like four terabyte total in RAID 0. It may be RAID 2, or mirrored. I don't know what I did. I forget. It's safe. It might be zero... It might be. Because why not?

**Techno Tim:** \[laughs\] Yeah, it's tough, because people in homelab like their slots. They like their slots, they like their PCI Express lanes, and it gets tough... Like, when now you have motherboard manufacturers building motherboards that only have a couple of slots... They're doing that because the CPU itself can only address so many lanes. And I think you've got a lot of people in homelab saying "Well, there aren't many choices if I want to run three devices that take up three slots. I've gotta go to this old to enterprise thing." And so yeah, I would love to see board and CPU manufacturers just put more slots on it. I know it's a technical thing, and I know you can get around it using server class processors, and that's what you have to do... But at the same time, everyone loves to tinker. Until everything starts coming on your board that you would slot in, we still need more slots.

**Adam Stacoviak:** Always. Yeah. For sure.

**Techno Tim:** Yeah, it's tough. But I think we're gonna continue to see people... I don't want to say downsizing, but I will say -- maybe physical downsizing... But I think we'll continue to see people getting smaller form factor stuff using that as homelab type stuff. I think we're going to continue to see people using Quick Sync for GPU to do transcoding, and maybe stuff in the future... I would love -- I think people are going to buy more hard drives; there's no doubt about that. People are going to buy more hard drives. And then on top of that, people still want SSDs that are gigantic, but I don't think we're gonna see them anytime soon.

**Adam Stacoviak:** Yeah. Or the price tag. I think every time I've considered buying any more than two terabytes, I'm like "I can't do that. It just hurts too bad."

**Techno Tim:** Yeah... That's where the jump is, I think, right now, going two to four.

**Adam Stacoviak:** Yes. It's like a more than double jump in most cases.

**Techno Tim:** Yeah.

**Adam Stacoviak:** I mean, obviously, it's storage double as well, but it's just -- you know, 800 bucks for one drive, I think it's the last time I checked it... I could be wrong. But it was more that I was like "Yeah, I can't buy four of those, so... I'm not gonna buy one of those." You know what I'm saying? \[laughs\]

**Techno Tim:** That's right. Yeah, we've gotta buy stuff in twos, and fours, and threes. Homelab is always that way. I buy my servers in threes, my RAM in twos, my drives in twos... There's no one of anything...

**Adam Stacoviak:** That's right.

**Techno Tim:** ...unless it's a PCI Express device, you know? It's tough. It's tough.

**Adam Stacoviak:** Yeah. Well, good, Tim. I think we covered most of what I wanted to cover. Some direct and indirect questions from our audience. Appreciate those folks in Slack saying hello, so I appreciate that. Anything left unsaid? What's left?

**Techno Tim:** Yeah, I don't know. I mean, it depends on the day and what I'm doing now. I don't know. But I really appreciate coming on, and I'm happy to answer any questions anyone has. You know where to find me, but you can ping me at any time. I love talking homelab... It's like this itch that I need to scratch. And I say this a lot even to my audience - it's the one time a week, and now I've got two times a week with you; thank you... But my streams, and talking with people about homelab - I get usually one time a week to totally geek out for an hour. Because a lot of the people I'm surrounded by don't do what I do, or have any idea what I'm talking about... So I really appreciate being on here and getting to geek out for a second time this week on homelab stuff... Because it's pretty awesome. It is. And you start talking to people in different circles, and you start mentioning PCI Express or ZFS, they're just like "What are you even talking about?"

**Adam Stacoviak:** Yeah. They're like, "What is ZFS, and why are you so excited about it?" "Listen, I can't even tell you, okay? I'm sorry."

**Techno Tim:** "How much time you got?"

**Adam Stacoviak:** That's right. "Do you know about Plex?" "What's Plex?" "Oh, forget it..." \[laughs\]

**Techno Tim:** Yup. But yeah, I really appreciate coming on, and thanks for sharing me with your community.

**Adam Stacoviak:** For sure.

**Techno Tim:** If I didn't answer anything, you can ping me anywhere and I'll try to get an answer for you.

**Adam Stacoviak:** Cool. Alright. Bye, friends.
