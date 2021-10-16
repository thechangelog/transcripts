**Jerod Santo:** Greg, I have to tell you that Singularity was not on my radar, it wasn't on Adam's radar, but we had two different people ping us, listeners of the show - first, Jacob Chappell, a.k.a. phpHavok (thanks, Jacob!) and then Andre Marcelo-Tanner... I feel like I've ruined that name before...

**Adam Stacoviak:** Kzap.

**Jerod Santo:** Kzap. Kzap we know well, he hangs out on our Slack... Within a few days saying "Hey, you've gotta do a show on Singularity", and they both gave really strong pitches, so... It seems like maybe you have a hidden gem here; there's lots of people using it, but there's a lot of other people who have no idea what Singularity is. Let's just start off with what it is, and then we'll figure out why it's so quiet.

**Gregory Kurtzer:** That is a great question... It's probably best to start off with a little bit of my background and what created it, what caused it, and why there is this large amount of users. We've definitely hit critical mass, but nobody knows of it. That's a kind of weird dichotomy.

To start off with, I've spent a number of years (almost 20 years) working for Lawrence Berkeley National Laboratory as a high-performance computing architect. In that role I had the opportunity to work with a lot of researchers, a lot of scientists, and people that had problems that they needed to solve computationally. In that role, I would develop these large HPC systems in order to solve the problems or whatever they had, that we had to build up for.

So about I'd say maybe six years ago now at this point (time flies), scientists started asking for containers... And my site, as well as a lot of other sites, started looking at the various container options that exist out there. Mostly it was all Docker at that point. When we looked through this, we looked at the architecture of Docker and we know the architecture of our HPC resources pretty well; we tried to super-impose one upon the other and found that it's nothing against Docker or the security or anything regarding Docker - Docker is a fantastic solution; it was designed for something very specific, but that architecture didn't transpose very well to high-performance computing.

\[00:04:04.07\] We have sometimes tens, hundreds, or even thousands of unprivileged users. Users that don't have root, users that are just regular users on the system, and they have shell access, and they're gonna run their HPC in their compute-focused jobs across lots of nodes, maybe hundreds or thousands of compute nodes... And the Docker solution was just not really fitting that need. So I basically would respond to most of the users and the scientists and I'd say "No, sorry, we can't support containers on this system."

This went on for (I would say) at least half a year, or basically just having to keep saying "No, sorry, we can't do it", to the point where I did something kind of novel, which is I asked the scientists and the researchers and the users, I said "What problems are you trying to solve? What is the issue? Why are you asking for containers?" And we got some really interesting and fantastic responses, and a lot of it is along the lines of "We needed things like reproducible software stacks. We need mobility of compute. We need absolute control of the environment that we need to run on an HPC system", and so on and so forth; there's more.

And from the HPC side, from the system side, we're like "Okay, well, we can't give any of these users root, we can't give them any mechanism to get root, so we have to build something that's very specific." We have to support workflows like NPI, and other compute-based workflows, and resource managers, which are kind of like the equivalent of orchestrators in the enterprise world... And we have to support all of this sort of stuff and support this infrastructure.

So I started looking at this and I said "Well, okay, if I were to develop a solution from scratch, what would that look like?", and I prototyped something. And when I prototyped it, I showed it to a few scientists who basically said, "This is fantastic! When can you install it?" I thought, "Well, first I need to actually write it." This is a prototype, not something that I can actually install.

I've created various projects in the open source realm, and the one thing that seems to be somewhat consistent is every time I start a big open source project, I know it's gonna be successful when the first implementation of it, the first version sucks and people laugh at it.

If I write something and it gets out there and people start saying, "This isn't all that good. You're kind of on some good ideas here, but the first implementation just kind of -- you know, let's start over. Let's wipe it and begin again."

**Jerod Santo:** Why do you think that is?

**Gregory Kurtzer:** Oh, I don't know. I think I'm just weird. I see things a little differently. So the first version actually ended up being extraordinarily like what Ubuntu Snaps is today. Very, very similar to that. Basically, I was doing a ptrace of an application run; as it executes, I was watching all of the system calls of everything that it's opening, and building a reproducible environment based on that, based on that ptrace, that run. Then I would build what looks like a container out of that. That was version one of Singularity.

I released it, and everyone basically said the same thing, "This is great. You're on to some really great ideas here... But we need more to really make this fantastic." When people started articulating this to me, I said "Well, okay, so we have to revamp this a little bit."

\[00:07:47.09\] I decided early on that the first major version is going to articulate the format of the container image. I'm jumping around here a lot, and I'm sorry about that... But one of the reasons why we call it Singularity is because it uses a single image format. That was used from day one. So we basically said that as soon as we hit the version, as soon as we make that change in the container image format, we have to increment the major version of Singularity. So within like two months we went from version one to version two...

**Jerod Santo:** Well, that's progress. \[laughter\]

**Gregory Kurtzer:** And version two lasted for years. The uptake was just phenomenal. Within about six months it was installed on most of the biggest supercomputers in the world. It just continues to grow through not just high-performance computing, but through this whole new area of enterprise-focused compute, like AI, machine learning, compute-driven analytics, data science - all of these new areas that enterprise, non-traditionally compute-focused centers are now trying to do compute all of a sudden... And Singularity really being designed for that compute focus, and being really good at that, and solving the problems on data mobility, containerization mobility, reproducible workflows, trusted containers, being able to sign your actual container image, package that up and then move it around and then know that you can always validate and guarantee immutability, guarantee the fact that it's not been tampered with, things like that.

This is basically in the direct architecture of Singularity. These are some of the primary tenants of why we created it... So it makes it a very smooth transition, going from HPC and science-focused compute, to things like AI and machine learning and so on, into these other areas. So we've built this critical mass; we have a lot of users using Singularity at this point.

I did a download and a GitHub clone count, and of course you have to approximate this quite a bit, but we're basically looking at over a quarter million downloads at this point, and we can account for being installed on some of the biggest super-computers in the world, and actually even being on the RFPs as line items for some of the biggest computers in the world.

So we have great advances, we have a huge community at this point, yet nobody outside of compute has even heard of Singularity.

**Jerod Santo:** Yeah. A couple of thoughts there - first of all, we did a show about high-performance computing the last year; I was actually looking at the ship date and it was almost to the day, with Todd Gamblin, who's a listener and a friend of ours. He works at the Lawrence Livermore National Laboratory... And he was sharing this whole world that Adam and I know very little about, and there seems to be a gap between what we call industry developers, versus Academia and research, and the people who are doing high-performance computing. There just hasn't been much overlap in knowledge sharing, and tooling, and stuff like this...

So that kind of sometimes explains why is this brand new to so many people, and yet, like you said, inside of that community you guys have hit critical mass; you have huge computers running this, you have NVIDIA using it, you have Harvard... You have all these very important institutions using it, but very few people heard about it, and it seems like maybe what you point out -- I just wanna highlight what you pointed out there, it seems like maybe artificial intelligence needs, with deep learning and the other high-performance computing needs are moving over into enterprise, and that might be kind of the tie that binds these two worlds together, or at least starts to.

**Gregory Kurtzer:** \[00:12:00.17\] Yeah. There is a person that I love to quote for this line - Al Gara, a fellow at Intel, has said that the cross-pollination of AI, traditional simulation, which is HPC in compute, machine learning and so on and so forth - we're gonna end up with systems and technology that is basically crossing those chasms. We're basically able to start tying some of this together - some of the compute side that's coming from HPC, as well as the compute side that enterprise is looking at, and leverage the technology from both.

For example, we've been doing things with distributed parallel jobs for a long time; we know how to do that. We know how to do things like parallel file systems, we know how to do things like very efficient batch scheduling. And on the enterprise side, the HPC world is like "Well, now there's this new thing called orchestration. How can we redevelop some of our scientific workflows to be service-based compute, versus batch-based compute? And how can we use that to do real-time analytics, data processing, and so on and so forth, using this new technology called orchestration? And how do we cross that chasm?"

Singularity has been picked out, from a lot of different organizations, as being this primary area for cross-pollination.

So this is where we see a huge opportunity, and we're starting to see a lot of uptake in the needs of, as I said before, enterprise-focused compute... And we're also seeing that this is a new area. I spoke to one enterprise who is really leading the advancement - for them, at least - in AI; they're doing a phenomenal job there. But at the same token, they don't have anything to do with batch schedulers, they don't have anything to do with distribution of jobs and actually building up an infrastructure and a resource that can actually support hundreds or thousands of these AI-type jobs, and the training of these AI models.

So we're seeing some really interesting necessity for that cross-pollination, just because what's new in enterprise, HPC has been doing for 30 years.

**Jerod Santo:** Right...

**Gregory Kurtzer:** And vice-versa is happening, right? Some of the new developments in enterprise, in massive scale, and support for this massive scale, is now starting to get an interest in the HPC world... Both science, as well as commercially-driven HPC.

**Jerod Santo:** That's awesome. It goes to one of the things that I talk about a lot on this show, which is the cross-pollination of ideas and techniques, and even code, from one industry to another, or from one language/ecosystem to another. The benefits of that across the open source world are amazing to behold. It sounds like there's a really big market opportunity here, maybe an arbitrage, where you have like "Here's a bunch of stuff that the HPC people are good at, and here's a bunch of enterprises who are ready to make money off of these things, and they need those things", so maybe that's where Singularity and Sylabs try to sit in that gap and fill that need.

**Gregory Kurtzer:** Can I bring you on my pitch when I go out to VCs and whatnot? \[laughter\] Exactly! Yes, yes, huge opportunity.

**Adam Stacoviak:** Well, point them to this episode.

**Jerod Santo:** Yeah, there you go. "Just listen to this, and buy this license", or whatever you're selling. Oh, pitch - yeah, so raising money for sure.

One of the things I did want to talk about - you mentioned that your version one was really just a go at it, it was like this proof of concept maybe, or like you said, if people are somewhat skeptical, or they think you're crazy, maybe you're on to a good idea... Version two seemed like maybe that was a semantic versioning kind of a thing, where it was just like it was gonna break existing users, so that's why you went to two... One thing that kzap said in his pitch - speaking of pitches - on why we should do this show with you is that there was this big rewrite for version 3 from Python, Bash, to Go and C. I'm curious if you could maybe elucidate why that rewrite, how did it go etc.

**Gregory Kurtzer:** \[00:16:25.26\] Yeah, absolutely. And by the way, I love how you're reasoning through that - yeah, it was definitely a proof of concept, version one, and we totally meant to do that. \[laughter\]

**Adam Stacoviak:** That's funny. "We meant to do that... But maybe not." \[laughter\]

**Jerod Santo:** Everything's intentional in retrospect, right?

**Gregory Kurtzer:** \[unintelligible 00:16:45.29\]

**Jerod Santo:** Yeah, exactly.

**Gregory Kurtzer:** \[laughs\] Yeah, so I like how you positioned it like that.

**Jerod Santo:** Take me on your pitches. I'm good at this.

**Gregory Kurtzer:** \[laughs\] So what was the question -- oh, yeah, as we've been moving forward... So version one was this kind of prototype, proof of concept. Version two basically solidified the idea and the model of what we wanna do and where we're going with it, but it was also developed in a silo. I mean, it's over three years old at this point. This is before OCI existed, this is before CNCF existed; it was pretty much Docker. Everybody talking about containers was talking about Docker. Docker, of course, wasn't the only container system at this point, but it was definitely the lion's share in terms of what brought containers and created a household name for containers. So most everything was really focused towards Docker at this point.

We did some work to enable the compatibility with Docker because there were a lot of containers, and there are a lot of containers, that are in Docker Hub, in Docker registries, and whatnot... So we basically took the Singularity base, which is actually -- you know, the first version of Singularity, as well as the second version, was predominantly C. I wrote mostly in C, and we had some fantastic contributions and people from the community that jumped on board and basically said "Well, we've got a whole bunch of containers that are out there in Docker. We need to support those containers. We need to somehow leverage those existing containers, that existing work, bring that into Singularity in a way that makes sense, and then build support for that." That was what we've done through version two.

So the first version of Singularity version two didn't support Docker at all, but as we got to 2.1, 2.2, 2.3 and so on and so forth, that was brought in via Python. So we had a bunch of code that was written... Vanessa Sochat from Stanford has done a fantastic job at building all of that and bringing in that support for compatibility with Docker, but in the end it wasn't in Go. So it was kind of a reimplementation; looking at the public documentation, looking at the API, what can we do with it and how do we reimplement that. So it never had perfect support for Docker, and really it was just because we were not using OCI/Docker code.

So when we started evaluating "What should we be doing as we're moving forward?", Singularity was really -- we spent our life in a silo of science and HPC, focusing on that side of compute. From the time that introduced Singularity, we developed Singularity and we're on our own pathway, which is different than what the rest of the enterprise ecosystem was going in, right? We had OCI, CNCF, and we had other container runtimes that are kind of coming up and gaining headway and gaining traction, but they're all kind of focused on the same set of original goals as what Docker was focused on.

\[00:20:02.21\] And here we are, going in a completely opposite direction, and to speak honestly, we're just as much to blame for the lack of cross-pollination as anyone, because we were not looking, we were not watching what enterprise was doing. So we came up with a solution, we're going in our way, doing our thing, and it wasn't until later when people started saying "We're using this for AI" or "This is the perfect solution now for AI or enterprise-focused compute. Here's the tools and here's the applications and here's the APIs that we need to support as we're going towards enterprise", and that has a lot to do with Kubernetes.

So we're like, "Okay, how do we now back-track and start supporting a lot of what the enterprise and what the industry has already standardized on?" Now we had to back up and say "What's the best way of doing this?" Now, because we developed in a silo, things are really different for us than they are for what most people are used to when they think of containers. It is a very different structure, it's a very different feel for containers.

For example, a container is an actual file; it's a file that sits on your computer. If you wanna move that container somewhere else, well you can SCP it, you can FTP it, you can transfer it however you want; you can put it on an NFS server, or in an HPC realm you can put it on a parallel file server like Lustre, or GPFS, and you can run it from there. So it's a very different look and feel.

If you wanna run a container, the command is literally "singularity shell" and point it at that file. If you wanna run a Docker container, well the command is "singularity shell docker://" and point it at that registry, or Docker Hub, or wherever it is. If you wanna run from an OCI bundle or something, we support that too now.

To get back on track - my thoughts bounce all over the place; I apologize for that.

**Jerod Santo:** It's all good.

**Gregory Kurtzer:** We basically developed in a silo, we were going in our own direction, we realized later - kind of late to the party - that the rest of the ecosystem went in a different direction, and now we've gotta go play catch-up. So we spent some time, we invested in "How do we properly interface with things like Kubernetes? How do we properly support new types of compute-based workflows? How do we absolutely 100% trust the containers that we run on? Things like cryptographic validation, things like encryption - how do we do that?" Those are the things that we've been working on, and we've solved most of them at this point. But again, it's a different solution than what most people are used to, so we're kind of a little late to the party, even though we were early to the party. \[laughs\]

**Jerod Santo:** It's almost like there were two parties, and then it's like "Let's merge these two parties into one. Hey, everybody, did you know Singularity exists at this party over here?"

**Adam Stacoviak:** Given your experience though in open source, I'm curious why you think you operated in a silo?

**Jerod Santo:** Yeah, I was gonna the same thing. Good question.

**Gregory Kurtzer:** Yeah, it is a good question. We operated in a silo just because of the ecosystem of what high-performance computing is typically like. We have these very large systems that are a very different architecture than pretty much everything that's being done, at least to my knowledge, on the enterprise side. From our perspective, there's just not a lot of necessity for cross-pollination, and going back 3-4 years, AI was just really starting to pick up steam and whatnot, and for most enterprises it wasn't even on the roadmap yet. So there wasn't even a necessity for any cross-pollination... But from my perspective, that's really the gist of why it was kind of pigeon-holed into just the HPC sector.

\[00:24:01.21\] Another open source project that I created, which is still live and kicking and actually uses the basis of something called OpenHPC for provisioning is a very large-scale operating provisioning and management system called Warewulf. I founded that project in 2001, and I still lead it today, although honestly I haven't been spending as much time on it, for a couple of reasons... First off, Singularity has been taking most of my time, but also it's incredibly stable, and the few amount of changes that we need has been basically driven and spearheaded by the OpenHPC community, which is a Linux Foundation and Intel project. But there's not been much cross-pollination there either. At some point, there were some fairly large web infrastructures that decided that they wanted to use Warewulf to manage their web server load... But aside from that, I've never heard of anybody in enterprise using something like Warewulf to manage all of their servers.

**Adam Stacoviak:** What is the opposite of not working in a silo? So if you're working in a silo, what does that look like? Do you just not give talks? Do you not talk to user groups locally, or are your docs not open, are you not tweeting about it? What does being in a silo look like, or the opposite?

**Gregory Kurtzer:** So the HPC industry is really big; it's a 40 billion dollar annual - at least by 2020 it's forecasted to be about a 40 billion dollar industry. There's a lot of conferences, there's a lot of user groups, there's a lot of meetups, but that whole thing is kind of like siloed. The example you guys gave about there's two parties going on is a really good one, because the people that are at that party almost never go to the other side, and vice-versa. I mean, there's just not a lot of cross-pollination; they've been two completely separate worlds for so long.

At one of these conferences, at a super-computing event, which last year we brought in about 13,000 people, just to give you an idea of scope... Usually, wherever super-computing goes, we sell out the whole city. Hotels are usually going for like 3 to 5 times their normal price, because there's just no room anywhere.

There were some people from the more traditional enterprise side that are looking at some of the primary tools and resources that we rely on in high-performance computing confused on why they even exist, because Kubernetes can do that, or something else can do that. There's just such a misalignment between the two communities, and that cross-pollination, especially now as we're seeing the advent of things like artificial intelligence and machine learning, focused on the enterprise side... I think this cross-pollination is really fortunate, and it has to happen. I mean, it's going to happen.

And to go back to the earlier point, that's really why we've created Sylabs, why there's such an interest to commercialize this as an open source project - how do we better support both sides of this, and how do we sit in-between and offer services to both sides, and offer the benefit that both sides have been able to glean, and then help to bring these two communities together?

**Break:** \[00:27:36.20\]

**Jerod Santo:** So Greg, we both mentioned Sylabs off-handed; we've obviously been talking about Singularity... You said that the reason for Sylabs at the end of the last segment -- let's talk about that relationship, the dichotomy between an open source project... Maybe you can tell us about Singularity licensing and all that, what Sylabs brings to the table, and your thoughts on commercializing open source in general.

**Gregory Kurtzer:** With my prior hat on, working for the U.S. government, Department of Energy, building open source projects was always kind of an incidental thing; it's like "We need something, let's build that, let's hope the community will get involved and it will help", and whatnot. There was never a necessity to build a business model.

As I've now moved away from the Department of Energy, created a company, and this company is built around the idea of an open source project that has gained a lot of momentum, gained a lot of steam, how do you take the open source users, the open source community and monetize it in a way that allows us to be not only sustainable, but hopefully a little bit profitable, and not alienate the open source community, not do anything that creates a resentment or creates any sort of a misalignment? And that's a challenge. There's been a lot of companies out here that have really tried to monetize on open source projects, and again, it's a very difficult, tight rope to walk.

Red Hat has been incredibly successful at this, and there's been others as well, but there's also been ones that have not been successful. There's ones in our own ecosystem, in the container world, that right now is trying to figure out still, even though they've done incredibly well for themselves from a business perspective, they're still trying to figure out what that business model looks like.

I have the luxury of coming at it from an open source side, where I understand -- I've built communities, I've built projects, and I've watched how companies have not done this right, and I've seen only a couple that have actually done this right... And so I'm taking my own stab at it.

Basically, the main part of what we need to be doing is we need to be making every piece of software, every line that we write for Singularity has to be open source. The first thing we do - we don't have a private repository for Singularity within Sylabs. We basically push everything live. Every bit of development, everything we're testing, everything we're playing with goes directly into the open source community. In a manner of speaking metaphorically, you can almost think of that as Fedora.

\[00:31:46.05\] Then what we do is we'll take snapshots of that. As we've done open source releases, we will take snapshots, and we will basically say, okay, we're going to build this in a supportable way, where we know exactly what it is, we know how we built it, we know how it's supposed to work, it's curated, we know exactly what this is, and this is now a supported version. We call this SingularityPro, and we license that and we offer support on that. But it is a feature equivalent to what's out there in the community, and we're doing that on purpose... Because if we were to add any additional features to that, or make any additional spins on that that are not also available in the open source version, then what we're doing is we're holding that open source community hostage, in a manner of speaking; or that project - we're holding that hostage... And we're holding that hostage to our business model. That model inherently is broken, because as soon as you limit or you stunt the uptake of one, you're going to adversely affect the other.

So it is a mutualistic synergy between the open source version and the commercial version. If the open source version does fantastic, we're hoping that we get some small percentage of that that will basically move over and become commercially supported, and we will then be able to build a revenue line, build a business line. Now, that's one business offering.

**Adam Stacoviak:** I've got a question for you there, on that note, before we move on.

**Gregory Kurtzer:** Yeah.

**Adam Stacoviak:** Does that mean that others can support Singularity as well, like you are? I'm thinking like the Tidelift models, for example.

**Gregory Kurtzer:** Yeah, absolutely.

**Adam Stacoviak:** So you're not saying that you're the only supporter of it, it just means that you're taking the snapshots, that you can put them to the side, call it SingularityPro, and provide support and licensing?

**Gregory Kurtzer:** Yeah. And it's a risk, right? But that's the risk with open source. Anybody can always fork an open source project, and then spin it their own way.

**Adam Stacoviak:** Of course. I like how you're not holding it hostage, as you said; that's the point I wanted to get at, that you're not even holding the business model hostage.

**Gregory Kurtzer:** We believe 100% that if you build a company -- and this is one of the reasons why I think my open source projects have always done very well... It's because I build these based on integrity, I built it based on stated values, stated ethics, and I maintain that. I believe that the best project, the best product and the best supplier is going to win. And what makes someone the best is, well, you're not only doing a fantastic job of what it is that you're set out to do, but you also have a high level of integrity, you have a high level of respect, and you want to work with people.

So if somebody else were to come along and try to fork Singularity, well they're gonna not only have to beat me on being better at support, but they're also gonna have to beat us at being higher levels of integrity and everything else. And if that's the case, then they deserve to win. That's the game that we're playing; we want to be the best, and we have an advantage, because the primary developers of Singularity - you can believe, I have lured and hired... Because it's not just me anymore. And as a matter of fact, I've hired and recruited people into the open source community and into the company who are much better people at developing software, much smarter than I am. Because believe me, many people can do this better than I can. I told you about my version one already... \[laughter\]

**Adam Stacoviak:** I changed your direction. Go back to where you were going. I don't wanna derail you completely.

**Gregory Kurtzer:** \[laughs\] Where was I going...?

**Jerod Santo:** Completely derailed. Good job, Adam.

**Adam Stacoviak:** Sorry about that.

**Gregory Kurtzer:** I'm trying to remember what the question was...

**Adam Stacoviak:** Well, you were moving on from the fact that you're not holding the open source hostage, by describing you supporting it.

**Gregory Kurtzer:** Oh, yeah, thank you. So the first product that we have is basically just a re-spun version of the open source code that's out there, and we professionally support it - we offer professional services, we offer support for it, everything you can imagine. It's somewhat obligatory, right? We have an open source project, we have this piece of software that we're supporting and we're maintaining out there - we have to be able to support it, we have to be able to help people with it... So those are the obligatory offerings.

\[00:36:09.07\] Then we have some uniqueness that this particular container system offers. For example, one of these is we support cryptographic signatures. I've alluded to this already previously. If you were to sign a container -- and remember, our containers are a different format from OCI; this is a new format. The format is capable of supporting OCI, and encapsulating OCI and Docker containers and whatnot, so we can take all of that and we can properly encapsulate it into a single file.

We no longer require any registries or anything to run that, but because it's now in a single file, a single binary file that has an open standard behind it, we can do things like cryptographically sign it. And in this file, which was originally modeled after the ELF binary, we can add an object block for a cryptographic signature. So now this cryptographic signature block can basically do things like guarantee immutability of the file, and accountability. This is really interesting, because when you build a container, when you sign a container, it uses a very traditional PGP-type, public and private keys to do this. So you're gonna sign with a private key, nobody else has that private key, and when you distribute it, you wanna share your public key out. So when people validate, they're gonna be validating against your public key, and they can guarantee, again, immutability, and because they have your public key, they can guarantee accountability; they know who signed it.

So one opportunity that we have is to add value to this open source project. So whether somebody's using this as an open source project or whether somebody's using our commercial project, if we were to, let's say, host a key store for public keys, so it's very easy to cryptographically sign your containers, push those keys into our key management service, and then however you distribute your container, wherever you bring it, you can do a Singularity verify, point it at that file, and it knows how to contact our key store, or you can run your own key store on-prem and validate that container and see who signed it.

You can say, for example - now you can say definitively - "Well, if I trust Greg, I will trust any containers that he creates. If I trust Ubuntu, or if I trust NVIDIA or Red Hat, or Suse", as long as they have their key, they've signed it with their key, you can now absolutely guarantee that level of trust. This is really important when you start thinking about some of the recent CVEs that just happened within the container ecosystem. A malicious container could actually do damage to the container runtime on the host, such that -- let's say for example you're using runC, or you're using Docker or something... If you were to spin up a malicious container, it can actually create a trojan inside that program that basically spun it out. So runC had a CVE just recently against it.

**Jerod Santo:** That's not supposed to be possible.

**Gregory Kurtzer:** Oh, it's not supposed to be, but it's... \[laughter\]

**Jerod Santo:** I don't think you're gonna say how these things work. You can't do that.

**Adam Stacoviak:** That's why the signature is so important.

**Gregory Kurtzer:** Yeah. From our perspective, you can do one of two things... Or you should do one of two things. You should absolutely never, never run a container as root. That's first off. Second off, if you have to run a container as root, you should never, under any circumstance, run an untrusted container as root.

\[00:40:07.21\] Here's a really simple example. As a system administrator - I imagine that there's a lot of system administrators that are gonna be listening to this show... So as a system administrator who has root on a very high-visibility production system, it's probably discouraged, it's probably looked down upon to go to the internet, download a whole bunch of random code and start executing it as root on your production system, right? You don't wanna run untrusted code as root.

**Jerod Santo:** Right.

**Gregory Kurtzer:** Now, the container ecosystems do what they can to isolate, but there's always going to be - at least from my perspective, and I'm now getting into religion, so I'm sorry if I'm going up against somebody's religion here, but... You know, POSIX was kind of defined around the idea of users, and privilege, and whatnot, and we have a very strong standard for "Well, the super-user is the super-user." When you're root, you're root. The whole system is yours. Now, what we're doing with the container ecosystem is we're saying, "Yeah, but root over here is not the same as root over here, is not the same as root over here." Everything is seen as a different thing, but at the same token, POSIX is defined, and traditional UNIX standards have defined that "Well, root is root." So we're trying to limit what root can do. And I know I'm going off on another tangent here again, but that's the premise of this security issue from our perspective. If you want to limit the exposure, don't run it as root. But if you have to run it as route, make sure it's trusted. We offer a trusted solution here.

Going back now to the business model, and I'm sorry again for the tangent... In terms of the business model, we have a key store. And this key store, plus Singularity, plus the design of the Singularity image format, gives us the ability to absolutely trust these container environments. So if you're gonna run it as root, you should run something you trust, and we offer that as a service now.

So it is a free service that we're offering, and we're going to be figuring out some way of monetizing something at some point; the business people keep telling me that that's important, so we're working through that...

**Adam Stacoviak:** Is it a popular service?

**Gregory Kurtzer:** Say that again?

**Adam Stacoviak:** Is it a popular service at this point, or is it still new?

**Gregory Kurtzer:** We haven't even released a GA yet.

**Adam Stacoviak:** Okay.

**Gregory Kurtzer:** As a matter of fact, we're going to be releasing a GA--

**Adam Stacoviak:** Soon to be popular.

**Gregory Kurtzer:** Yeah, in about a month. So we're expecting to see some increase and uptake... But at the same token, this is still brand new for people, right? Most people think of containers -- and you know, OCI has a portion of their spec talking about how to sign containers and whatnot... But it's signing the metadata for those containers, it's not actually signing the runtime format. Those containers are actually tarballs, and those tarballs get splat out the disk, and that creates new data. The signed tarball - well, that relates to the tarball, not the new data. And then that new data can honestly take a life of its own and nobody would ever know. Our format is the actual runtime format, so there's no metadata, there's no tarballs...

**Jerod Santo:** That's interesting.

**Gregory Kurtzer:** You just download a 10 or a 100 GB container, you type in "singularity shell" and you're instantly inside that container, because it doesn't have to splat anything out to disk.

**Jerod Santo:** What you get is what you get, and what you get is what's been signed.

**Gregory Kurtzer:** Yes, exactly. So that's one of our business models, which is to add value. Don't hold it hostage, but somehow add value to that open source piece of software... And we can do that commercially. That's a cloud service. That's not something that we're planning on open-sourcing. That's a cloud service.

**Jerod Santo:** But you're making it pretty, so...

**Adam Stacoviak:** For now. For now.

**Jerod Santo:** Free for now. Freemium.

**Gregory Kurtzer:** \[00:44:06.14\] Yeah, so we've talked about the freemium thing too, and I have mixed emotions about it... But at this point, what we know for sure is we need to drive adoption. We want people to use this, we want people to be able to run trusted containers, we want people to be able to leverage Singularity in our format, and make good use of it within their environments, their ecosystems... And we have to hit critical mass. Or at least we're trying to. We've hit it in HPC--

**Jerod Santo:** Well, you mentioned the pitch deck, so you're raising money, right?

**Gregory Kurtzer:** Yes... \[laughs\]

**Jerod Santo:** So you're gonna have to hit critical mass. That's the trade-off, right? If it was all bootstrapped, you could open up -- is it called Sylabs Cloud? I'm reading about that... Is that what you're referring to, the service?

**Gregory Kurtzer:** Yup.

**Jerod Santo:** You could open that up, just charge some money from day one, and if the gross revenues cover your expenses and there's some leftover at the end of the day, you've got your profit.

**Gregory Kurtzer:** \[laughs\]

**Adam Stacoviak:** Business 101, y'all. Thanks, Jerod.

**Jerod Santo:** You're welcome.

**Gregory Kurtzer:** \[laughs\] I'm taking notes.

**Jerod Santo:** But you're not going that route. You're going for the home run.

**Gregory Kurtzer:** We're trying to drive adoption and usage, not get just enough to pay the bills. We wanna actually encourage people to utilize this. We want to help support the ecosystem, and change how people think of trusted environments. We want people to feel like they can absolutely trust whatever environment that they're in, and manage that environment like any other data that they have to manage.

**Jerod Santo:** Did you consider closed source? Was it even a thought? Because that simplifies business cases a lot, but it complicates other things.

**Gregory Kurtzer:** For Singularity, we never considered it. For our cloud development -- I mean, it is a cloud service, so that's not something that we're open-sourcing. So that is definitely a closed source. But we've actually gotten some really interesting information, which is - everybody's talking about cloud, everybody's talking about getting all their apps and everything up to the cloud, and so we developed this cloud service thinking everybody wants to go up to the cloud. A really interesting spin on this, and something I totally didn't expect, is that almost everybody - well, maybe not everybody; I'm exaggerating... Maybe about half of the people that we talk to wants to run that on-prem, and I wasn't expecting that.

So we are figuring out how to relicense and rebrand our cloud services, and allow people to run those on-prem. And we have several different cloud services at this point. The key store that I was mentioning before is just one of them. Another one is a build service, so you can actually build containers without requiring root or without requiring any sort of privilege escalation, because we have a service that does that in a controlled way. We also have something called the container library.

Now, in compute - and I'll give a little bit of background on this - there is various regulations. In pharma, for example, on the science side and the bio side, they have various FDA regulations even, that they actually have to manage the environments for any software that contributes to a diagnosis of a medical issue. Anytime software is involved in that, that entire stack has to be treated as a medical device, and a medical device has to be archival for 5 to 10 years, meaning we have to be able to reproduce those results and reproduce that environment for 5 to 10 years. Well, Singularity provides a perfect solution for that.

\[00:47:59.15\] Our container library, one of our services, is kind of built around the idea of "What are the specific benefits of this binary image format that we have, and how do we archive and always allow people to go back to previous workflows?" and so on and so forth. That's a feature that we have in this container library.

The other one is - you know, a lot of people talk about DevOps, and they pass recipes around; they pass the source code, in a manner of speaking, around, or their environment. Well, again, because our containers are 100% immutable and cryptographically verifiable, why don't we just pass the container around? And that way you never have to rebuild it. So it goes from the developer, you build that binary container, and then it can run through a DevOps pipeline that can be completely built up for whatever the pipeline is, and customized via CI/CD integrations and whatnot, and then come out the other side as "This binary immutable image has passed all of this." This gives us the ability now to inject things like the security teams into the DevOps workflow... Because once this pipeline, once this container image is going through this pipeline and it gets to security, and security is like "Okay, I've audited this. I feel good about it. I'm gonna now sign it", and then continue it on its way - well, we just added a cryptographic signature on it that wherever you run in production, you can say "I'm never gonna trust this container unless it has this key fingerprint. And if it has this fingerprint that your security team owns, then I will allow it to run in production."

So it gives us the ability to do things like inject security back into the DevOps workflow, and it changes things. It changes how we're doing this.

**Jerod Santo:** That's cool.

**Gregory Kurtzer:** So all of this is in our cloud services that we're building right now, and people are asking for it for not only cloud access, but also on-prem. So in terms of, again, building our model, the idea is if we're gonna build anything that's non-open source, it has to 100% add value; not hold hostage, but add value to that open source codebase.

**Jerod Santo:** This reminds me of Isaac Schlueter...

**Adam Stacoviak:** Dude, I was right there with you.

**Jerod Santo:** Were you right there with me?

**Adam Stacoviak:** Yes!

**Jerod Santo:** We have a show -- I'll pitch Adam's show here; Adam has a show called Founders Talk, and his most recent episode of Founders Talk (we'll link it up in the show notes for listeners) is fascinating. He spoke with Isaac Schlueter, who is the co-founder, former CEO, chief of product at Npm, which is a hockey stick style package registry - a similar business to a container registry. And he had very interesting insights, which I won't share here (you can go listen to all of what he says) about going service-based and on-prem at the same time, and some of the things they've learned... So I'll just submit that to you, Greg, as something that you might wanna listen to and learn from his experience. Not that it's gonna 1-to-1 match with what y'all are up to, but anytime you can learn from somebody else's experience, you can save yourself bad experiences as well.

**Adam Stacoviak:** Well, it just leans into the whole idea of cross-pollination, right?

**Jerod Santo:** Yeah.

**Adam Stacoviak:** This is the JavaScript package management world, potentially influencing Greg and future stuff around the cloud.

**Gregory Kurtzer:** Exactly. Thank you for that pointer, by the way.

**Jerod Santo:** Go check that out.

**Break:** \[00:51:46.04\]

**Adam Stacoviak:** Kubernetes is well-known for its community. If you have a conversation around Kubernetes, even the founder of it will say it's about community. They've had that lens since the beginning. What is your perspective on community and how are you using that to grow?

**Gregory Kurtzer:** Okay, so the open source community and the idea of what it was to be an open source community and how to maintain an open source community has changed, right? Back when I first started doing it, the open source community was brutal. People were mean, people were obnoxious, and they liked to prove everybody else wrong and prove themselves being better. It was competitive, and whatnot. It took a very hard and callous personality to be able to excel in it, and I'm not that kind of a personality.

I tried working with various other open source projects because I love the idea of open source; I'm a biochemist by degree, turned into a computer geek, because I thought it was totally cool how we were able to create bio-informatics tools based on Linux in the mid-nineties. I thought that was fantastic, so I just immediately became enamored with the idea of open source, but I didn't have the personality, honestly, to really be part and be so callous to be able to handle this sort of things, and whatnot... So I actually found it easier to start communities, and start them with a different tone, start them with a much more friendly tone, a much more considerate tone, and people always felt comfortable.

As an example of this, I would start up a mailing list, start up an IRC server, or a joint Freenode or something, and start building up the community, start chatting with other people... Back in the day we had Freshmeat - I don't know if you guys remember Freshmeat, where you'd post your open source...

**Jerod Santo:** I do remember Freshmeat. I haven't heard that name in a long time...

**Gregory Kurtzer:** Just a quick, funny story... My mother at some point decided to do a search for me, and Freshmeat came up; she was like "I don't know what Freshmeat was. I'm scared to click on the link... Why are you on Freshmeat?"

**Jerod Santo:** \[laughs\] That's hilarious...

**Gregory Kurtzer:** But Freshmeat was really the big way that you'd get your new open source stuff out there. So I'd post to Freshmeat, and build this community, but it was always just about super-friendly, wanting to just chat with people, be real with people, be open to people, be open to new ideas, teach people, bring them up to speed and whatnot... I mean, even early Warewulf days, early CentOS days, people would ask questions. On the CentOS mailing list people would say "Oh my god, I'm stuck in Vim, and I can't get out! Aargh!" They'd post questions, really simple, basic questions, and...

**Jerod Santo:** \[00:56:11.17\] That's still an issue for many people.

**Gregory Kurtzer:** \[laughs\] ...and I'm always so happy to just help out.

**Jerod Santo:** Thousands of developers are fighting that fight on a daily basis.

**Gregory Kurtzer:** \[laughs\]

**Jerod Santo:** Sorry. Continue.

**Gregory Kurtzer:** No problem at all. \[laughs\] I'm just thinking of all the \[unintelligible 00:56:25.23\]

**Adam Stacoviak:** We have the tweets to prove it.

**Jerod Santo:** There's literally hundreds of developers currently stuck in Vim, as we speak, just trying to get out.

**Adam Stacoviak:** And listening to this show.

**Jerod Santo:** That's right.

**Gregory Kurtzer:** I always ended up landing in Vim, and I did most of my development in Vim, so I feel the pain, and at the same token, I was always really happy to help people get out of it. From the perspective of an outsider, here's the lead developer, the project lead, helping somebody with these extraordinarily basic questions, and I think that is absolutely necessary. And if it's the fifth time or the tenth time or the hundredth time that that question gets asked, it's obviously still an issue; you should still answer it. If you just did a Google search and just looked through their logs and the archives, you'd be able to find that, you know, I'm sorry; it's a pompous response, and it's not very welcoming.

So I would always be very supportive, very appreciative of everybody that came into the group, whether they're developers, whether they're users, and set the tone right away as that, and set it from the top down. I didn't tolerate people that became the jerk mentality. And it's nice to see that many more open source projects are adopting this behavior, but I feel as though it was a critical facet for what makes a good, strong community, and how do you develop that strong community and keep it on track.

I'm not sure if that completely answered the question, but that's been my experience with open source communities, and leading them and running them.

**Jerod Santo:** Well, and I'd definitely say that your success, especially with CentOS and building that into what it still is today - I wasn't familiar with Warewulf, it didn't hit my radar previously, but I think it's safe to say that if you're looking at open source competitively, which some people do, some people don't, I think friendliness and setting expectations and all the things that you were doing back then, was a competitive advantage back then, and it set you apart... It was like, "Wow, this is actually a nice group of people to be around." I would agree with you that more and more it's becoming table stakes, to a certain degree, for successful communities in open source; that'd be the baseline of what they do.

I'm curious with regards specifically to Singularity and the dichotomy that we've been discussing about between the commercial enterprise and the open source project, and then also this siloed HPC world, bringing that into the enterprise world - how do you build out other companies, other individuals who are willing to contribute back to Singularity, or to really buy into the project at a contributor level, with the enterprise attached, with the commercial side attached?

And then also, do you want those kind of -- you know, there's open source projects where it's like... Somebody had a good term for it - it's like, "where you can look at the code." You know, it's open code, or it's viewable code, but it's not as if the company actually wants you helping, unless you're doing a trivial bug fix, or something.

In terms of features and direction, how do you manage the community side of those things, when you're trying to build a business around an open source project where maybe the community's contributions may actually go against the business' interests?

**Gregory Kurtzer:** You brought up a couple of really just amazing points.

**Jerod Santo:** Well, thank you. \[laughter\] Tell me more. Just kidding.

**Gregory Kurtzer:** \[01:00:11.02\] For example, when you have a company that releases some software, and they release it to the open source community, it's almost becoming a marketing initiative. They're not interested in the collaborativeness and the openness and the community side of releasing software into the open source community. What they're really interested in is getting that stamp, "We are open source." And they will just release it; they don't take contributions, or they don't look favorably upon them, or when they do get them, due to wanting to run and manage and host all of their own copyrights - I've seen organizations that will actually rewrite PRs, rewrite patches using all of their own resources, because they don't want any contamination of copyright. So the fact that it is open source - it's a marketing vehicle.

So that's one side. There are companies out there doing it. That is not our side at all. We are first and foremost -- we started off as an open source community. I developed a company, I have a lot of experience with open source, I am a huge open source advocate. And when I say open source, again, not from the marketing perspective; I'm an open source advocate because there are very important advantages that the open source community and the development model brings to bear.

We absolutely support collaboration. We want other companies, other organizations adding code, being part of Singularity, joining our Slack, joining our Google group and contributing, whether it's just simple "Here's my experiences using it", whether it's documentation, whether it is working on the core code, or whether it's even going out there and just speaking at events and user groups, and whatnot. We absolutely want it.

We've had contributions from companies, from individuals (obviously) from companies, we've had a lot of academic and other government involvement... So all of this is incredibly important to us, and it is extraordinarily appreciative, and this is why we put every bit of our code, first and foremost, into the master branch; because we want to engage in that collaboration, we want to foster that communication and build a project - both a project, as well as a product - that is really meeting the needs of the users. We're not out here trying to push something that doesn't exist. Everything that we've done is because we're solving a problem that our users are having, that people are complaining about, and we're solving pain points. That's kind of our model, and if we're not engaging with that community of users, we have no idea if we're even solving the right points. And honestly, I want people solving those points with us.

**Adam Stacoviak:** A question on the pro versus open source though... I'm curious, just because I'm not involved in the details of this, how usable is Singularity on its own, as just open source, and not via the stamped version. Is there any incentive to use the shared up open source version, versus SingularityPro?

**Gregory Kurtzer:** \[01:03:53.17\] If you don't need commercial support, there is no advantage at all. Go use the open source stuff. If you represent a company, if you represent an organization that doesn't want to rely on best effort support from a group of people sitting in a Slack channel, then that's when you wanna contact us. But in terms of individuals, in terms of developers, in terms of contributors, and many organizations that honestly just wanna work with open source software, go use it. There's no limitations, we are not holding it hostage, and we encourage it. We would love people to be using our open source software.

**Jerod Santo:** Well, I don't think anybody will second-guess your bona fides, considering just your long history of building open source communities and projects. So that's awesome. How has it grown so far? You have people out there who are championing this, we've named off a few of the organizations who are using Singularity... How has the contributor base grown beyond Sylabs "walls" - and I know you're all remote and around the world, so there aren't any walls... But beyond your payroll - have you had an uptick in not just users, but is NVIDIA, Suse, these other organizations, are they getting involved and really making this feel like a community-driven project, or are you still trying to get that ball rolling outside of Sylabs?

**Gregory Kurtzer:** It's kind of funny, because every time -- not everytime; mostly, when we have people join our community, and they start being really productive, they're adding features, they're adding code, and they start to really get used to us and we all like each other, we're all friends, and we joke around a lot, I typically - and maybe this is good, maybe this is bad; I don't know - recruit them. \[laughs\] And I try to get them to work for Sylabs. And in doing so, a lot of times what we're seeing is, you know...

**Jerod Santo:** You're gobbling up a community...

**Gregory Kurtzer:** Yeah... \[laughter\] And I don't know if that's good or bad, but the fact is it's hard to find the developer skills that we need to basically run and create a whole container platform.

**Adam Stacoviak:** Yeah.

**Jerod Santo:** Yeah.

**Gregory Kurtzer:** It requires not only a lot of knowledge in the upper end of application design, but also going all the way down to kernel. And there's no many people that are really anxious and eager and love to do operating system coding anymore. To kind of poke fun at this a little bit, we see -- and we saw this as well when I was working for the Department of Energy, as we were trying to recruit scientists... It was really hard, because coming out of the universities and the Ph.D's and whatnot, instead of doing research and science, they wanted to develop games for the iPhone; they were developing a dog-walking app, or something, instead of wanting to cure cancer, or something along those lines.

So we've seen it as well, again, with my previous hat on, as well as from Sylabs - it's hard to find the right people. And it's really nice when we do have an open source community, because we are attracting individuals - not just corporations, but individuals; individuals at those corporations... But, I mean, there's the personal side of it. You get to meet these individuals and develop relationships with them. And as you do it, it's fairly easy to offer them jobs.

**Jerod Santo:** \[01:07:51.15\] So the takeaway here, developers out there in developer land, is hop on the Singularity repo, start contributing back significant things, and you'll end up with a job at Sylabs. \[laughter\]

**Adam Stacoviak:** Expect an email. Make sure you have your email in the GitHub profile, so it makes it a little easier.

**Jerod Santo:** That's right. Yeah, exactly.

**Gregory Kurtzer:** To get back to the question on a more serious note, we've had a lot of -- people join our Slack; both contributing to GitHub, as well as joining our Slack, being part of our mailing list - we have an extremely active and friendly email list, and the same thing on the Slack side. It's a lot of very friendly people. Honestly, it's much just idle chat, and getting to know each other and having fun, as well as developing code and coming up with new and innovative ideas for doing really amazing things.

We have a lot of people that are involved with the process. In terms of GitHub, the last -- actually, I don't even wanna quote a number, because I don't remember, but I think it was... It's not a huge project when you compare it to something like Kubernetes and whatnot, but we have about 1,000 stars... Now it's making me wanna look. I think it's like 1,000 stars, and I think it's under 100 contributors, but it's a good amount. We're all very appreciative of everybody who wants to join the community. And again, someone doesn't have to be a developer to join. As a matter of fact, we encourage non-developers as well, because the amount of benefit in terms of feedback, in terms of just looking at things, being part of this, helping potentially with documentation, even just pointing out bugs, pointing out issues that they're finding, or being a conduit for reaching other people is so valuable, is so helpful. So we are very receptive of that.

**Adam Stacoviak:** On the repo now you've got 98 watchers, 998 stars, and 252 forks, on Singularity.

**Gregory Kurtzer:** You know what would be fun - after this podcast, it gets out there, it'd be fun to see how much this increases.

**Jerod Santo:** There you go.

**Adam Stacoviak:** The Changelog effect.

**Jerod Santo:** Okay, listeners... Get out there, Singularity, star that repo...

**Adam Stacoviak:** Fork that repo!

**Jerod Santo:** ...make us proud...

**Adam Stacoviak:** That's right.

**Jerod Santo:** Because we know that all value in open source can be derived by star count. That's like the ultimate goal, right?

**Adam Stacoviak:** That's true. That's the only metric that matters.

**Jerod Santo:** That's the only metric that matters, in life.

**Adam Stacoviak:** I'm curious of your focus though when it comes to the future. You'd mentioned community, you'd mentioned business, you'd mentioned your principles around open source... Where are you personally placing your focus around Singularity and Sylabs? What are the biggest challenges you're facing today to move forward?

**Gregory Kurtzer:** We are placing a lot of emphasis and investment in everything computational. Somebody asked me recently, are we an HPC company? No, we're not. We are a compute company. We are focusing on all of the different types of compute-based workloads that are out there, and we wanna use all of the cool tools to do that; everything from Kubernetes, to HPC resources, InfiniBand, parallel file systems, batch scheduling systems... And go all the way out to edge, and cloud, and IoT. This is where we're spending a very reasonable investment in terms of moving forward.

We want to facilitate the movement of AI workflows. For example, as opposed to more traditional compute, where basically you have a big HPC cluster and you run everything on that big HPC cluster, there's a lot of AI and ML workloads that are distributed. You may need a big HPC type system to train that model, but once it's trained, you now have to distribute that model wherever you're running your inferencing. In some cases, the inferencing and where you're executing these models is not extraordinarily -- it doesn't need a huge amount of resources in terms of compute... In many cases. In some cases, of course, it does, but we're seeing really different types of workflows, and these workflows - in a lot of cases, we're still doing science, trying to figure out how best to support and optimize these workflows, but these workflows are really interesting to us

\[01:12:24.13\] Singularity offers a really interesting and elegant solve for "How do you take these workflows, for example how do you build and train your model, and then how do you distribute that model to where you're doing the inferencing?" And where you're doing that - it could be any sort of workload. You could be doing streamed AI, you could be looking at data, data analytics, you could be doing all sorts of different types of things, but the workflow as a whole and how do we support that, how do we create an architecture to build a pattern that we can replicate easily, and better enable easy wins, where everybody's looking at AI? That's one of the big areas. Big organizations are like "AI is on our roadmap. We wanna get there, we wanna do it, but we don't know how to enable any quick wins, and it's really complicated, and it's a really high lift, and we're just gonna keep watching it for now."

We have this really cool technology that enables those quick wins, that enables the distribution of those workloads, that enables mobility of models. That's something that we find really interesting as we're moving forward.

**Adam Stacoviak:** We mentioned - somewhere in this show; I can't remember if it was just in the breaks only, or if it was in the show - jokes around slides and Jerod helping you with the next VC pitch... You'd mentioned that you're raising funds; if there's any venture capitalist listening, are you seriously raising funds? Should they reach out to you? What's your state of fundraising, and how does that play into the sustainability of the project?

**Gregory Kurtzer:** Great questions. We are seed-funded at the moment, and right now we're burning on the seed, as well as living off our revenue. We are going to be doing a series A pitch. Kind of interesting is that as we are evaluating our series A pitch and doing comparables, it seems like all of our comparables are more like series B and greater, just because we've de-risked the company at this point so greatly... But yeah, a raise is gonna be coming up pretty soon, and happy to have any introductions if anybody listening is interested.

**Adam Stacoviak:** I said that because just a few shows ago we did an entire show with Joseph Jacks around OSS and venture-backed commercial open source, so I'm sure we're picking up more interest around there, and I'm sure that any new audience from that kind of show too is listening... Plus, I'm sure there's a lot of VCs out there in that venture capital world paying closer attention, and they're listening to shows like this to get insights.

**Gregory Kurtzer:** We should have a Changelog discount. If anybody comes and they reference Changelog, we can have a discount code.

**Adam Stacoviak:** Right.

**Jerod Santo:** There you go.

**Adam Stacoviak:** Give me a million, and we'll act as if it's 1,2.

**Jerod Santo:** Right. You get an extra 5% ownership.

**Adam Stacoviak:** Right. I like that.

**Jerod Santo:** That's no big deal, right? 5% isn't that much, right? Not amongst friends.

**Gregory Kurtzer:** \[laughs\]

**Adam Stacoviak:** We haven't really mentioned the Mac app; I don't know how much that plays into it, but maybe paint the picture of the future of getting involved - people who will wanna play with this, there's a Mac app, there's some user groups coming up... Help people that are looking to get plugged in, get plugged in.

**Gregory Kurtzer:** \[01:16:03.08\] Fantastic point. You mentioned the Mac support - something that we are working on right now and should have something released by next month is something called Singularity desktop, which is basically just being able to run Singularity in all your containers on your Mac. And again, the command line interface for Singularity is incredibly simple - it's Singularity shell pointed at your Ubuntu container, your CentOS container, or Suse, or TensorFlow event... And you hit enter, and you're now sitting on your Mac, you're now sitting in that same terminal but you're now running Linux, running inside that container. No dependencies or anything, you just install Singularity. It manages all of that operating system support and whatnot.

We're also gonna be doing the same thing for Windows here in a little bit, but of course, first we're hitting with Mac, just because it's a little bit closer to home in terms of how to enable that on the Mac... So that's something we're working on. Imagine you don't need a VM anymore, install VMware, or anything to run Linux on your Mac. So that's something that we're working on.

The other thing as well - again, this is kind of on the community side - is we've had a lot of people really interested in a user group. We reached out to some people and we said, "Hey, is anybody interested in this?" The San Diego Supercomputing Center basically raised their hand and said "Yes, we're really interested in this, and we'd love to help support this." So SDSC (the Supercomputing Center in San Diego) is gonna be hosting our user group; it is next month. We just closed our CFP, so we're now just basically building up the agenda... But if people are interested, maybe that's something that -- I don't know; guys, can we post the link for that?

**Adam Stacoviak:** Yeah. Link in the show notes, for sure. We'll make sure we get that from you and put it in the show notes. Listeners, you know that - when you go and you listen to a show like this, you know to expect great links in the show notes, so hit that up. Links there.

**Gregory Kurtzer:** Very cool. I didn't wanna presume that I could plug in, and whatnot.

**Adam Stacoviak:** No, please do.

**Gregory Kurtzer:** Too much.

**Adam Stacoviak:** No. Absolutely.

**Gregory Kurtzer:** Okay, so that's happening next month. We have some great talks aligned; it's gonna be mostly focused on the containerization side of compute. So if people are interested in compute and how to containerize those workflows, both HPC, science, as well as AI and enterprise-focused workflows, I encourage you to check out that user group.

**Adam Stacoviak:** Good deal. Thank you so much, Greg, for coming on the show, man. It's been awesome to hear from you. Jerod, I'm so glad we're in the know now; I feel better about my life because now we know about Singularity. \[laughter\]

**Jerod Santo:** That's right.

**Adam Stacoviak:** Maybe that's what the audience feels like, too. Audience, if you do, we have discussions on our show...

**Jerod Santo:** That's right.

**Adam Stacoviak:** ...so go back to Changelog.com, look up the podcast; every single podcast has discussions now. Greg, I'm sure you're gonna be tuning in and listening to our community coming there and sharing more stories with you, or questions, or whatnot. So if you've got those questions, head to Changelog.com and drop them in the discussions, and have a chat with Greg and the rest of us about Singularity and the future of where this is going.

Greg, thank you so much for your time.

**Gregory Kurtzer:** It's been a pleasure. I love chatting with you guys, and both the on-show, as well as the off-show discussions have been fantastic. A lot of fun, I enjoyed it thoroughly, and if you guys ever want to chat with me again, open welcome.
