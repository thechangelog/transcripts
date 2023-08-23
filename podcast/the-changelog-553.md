**Jerod Santo:** So on August 16th 1993, 30 years ago to the day, Ian Murdock first announced the Debian project to the world. And today, we are joined by the current Debian project lead, Jonathan Carter. Thanks for coming on the show, Jonathan.

**Jonathan Carter:** Thank you for having me.

**Jerod Santo:** 30 years is a long time. That's like three quarters of my life. I'm wondering how old you are, Jonathan. How much of your life is that?

**Jonathan Carter:** That's about three quarters of my life. I was 11 years old when Debian was released, so I'm 41 years old now.

**Jerod Santo:** Okay.

**Jonathan Carter:** Back then I did not know Debian existed even. I was using Windows 3.1, and MS DOS 6 back then, on my little 386. It was very exciting times. At the library once I found a book on an x386, and started reading through that. I was thoroughly confused, because I had no idea what this was talking about... But that was my experience of Linux back then.

**Jerod Santo:** Well, here you are today, and the current project lead. If you go to the website, or the Wikipedia list of Debian project leaders, I counted them up, I think you might be the 18th. And so a long line of people that have taken on this role that you currently hold. Maybe tell us about what it means to be the project lead, and how you got to that position with this community.

**Jonathan Carter:** Well, that's a long story... But we have time, and we have an hour as far as I know. I'll try not to fill the whole hour with this... My first time that I've tried Linux was in 1999. I installed a Red Hat Linux that I got from a CD. I can't remember where it was; it was in a magazine, or something like that. And I was thoroughly disappointed at it. I said it was trash, I'm not going to waste any more time on this. Then I started working at a computer shop and fixed PCs the whole day long. It was also horrible... Mostly removing viruses from Windows machines, fixing all kinds of Windows issues... I did not enjoy it, and I said "I'm done with computers. I will find another career, I'll figure something out. Even if it means I have to paint, or do tiling, or anything else but computers."

Then I happened to come across Red Hat 7.2, and it was just a completely different experience than my first experience with Red Hat Linux version 6. Suddenly, my modem worked, my display worked... All of these things that was possible to get working on my computer just suddenly worked, and I thought, "Wow, if free software could make this big of an improvement in just a span of two years, what's going to happen over the next 5 or 10 or 20 years?" And I started getting interested in it, and learned how to set up basic things like a DHCP server, a web server, and all the typical common things you'd do with a Linux server back then. And I thought, "Well, this is great. Maybe I can learn our kids how to do this, so that when they leave school, if they couldn't go to university, or they wanted to start working in IT somehow, they could start a career in Linux and they'll have a good basis."

\[00:08:33.20\] And at that point, I messaged the local Linux user group about this, and I got in touch with the Shuttleworth Foundation. That's a local nonprofit founded by Mark Shuttleworth. They wanted to start a project to get Linux into schools; not specifically to get kids leveled up in technical skills, but mostly just as a kind of a pilot to show that you can run Linux on desktop in schools, and kids can do all their learning on there. So I started volunteering for them.

We had a big volunteer group where we went to schools on Saturdays and we installed a lab from scratch in one day. And we ended up installing 200 of these computer labs. So we would take a bunch of all donated computers from companies and install an \[unintelligible 00:09:19.04\] for the school.

So that was very exciting, and I ended up doing contract work for Shuttleworth Foundation, I ended up working there full-time, and that's how my career in free software and open source started. And from there I became an Ubuntu contributor, and a very long and winding tale. I ended up working in Canada for about three years, working on the next deployments in the US, in school districts there. I came back here, working for a university now... And yeah, I've been doing open source and free software since, for the last 20 years or so. I've been thoroughly enjoying it, it's fantastic.

**Jerod Santo:** So from Ubuntu to Debian project lead... Close that loop for us, in terms of - this is like a thing that you're elected for? Certainly you got involved with Debian and grew into this somehow, right?

**Jonathan Carter:** Yeah. Ubuntu is so complex, and the community has changed so much. At some point, I wasn't happy with some choices that Canonical made, and it was just so top-down, and the community didn't get much of a choice. And the more I read about Debian and now it works, that it's not controlled by any one company, that it's more like a democracy, but also not quite; it's difficult to explain... But people with technical skills come together, and the people who actually do the work get to make the decisions. And it works.

Debian just keeps getting better and better at it. There's a definite arrow of improvement if you look at Debian over time. And this is because technical people get to make the decisions; not the salespeople, not \[unintelligible 00:11:06.26\] squeeze more money out of this quarter. It's really a project by the users, for its users, and I got attracted to that.

I firstly switched over to using Debian, and then switched to Debian at work, and gradually started contributing more... We organized a conference for Debian in Cape Town in 2016. That was a lot of work and lots of fun... And in 2017, I became a Debian developer. So I'm actually quite a young Debian developer for being a Debian project leader. But yeah, I started maintaining packages, and getting more involved, and I saw some things I wanted to change in Debian, so I made a platform - that's what you do when it's election time - and explain what you'd like to do if you become Debian project leader the first time. I didn't win; someone else beat me. But then on the second try I became a Debian project leader, and that was a little bit more than three years ago.

**Jerod Santo:** \[00:12:08.08\] Okay. So you mentioned the organization, some of the simplicity, the structure, the way it works... To me, that is kind of the most interesting part about Debian. Because as far as a Linux distribution, it's kind of boring insofar as it's not going to have the latest stuff, unless you're on Sid. That's the experimental, the unstable. But if you're on like mainline Debian, it releases very infrequently. The major releases are infrequent. 11 so far, over the course of the 30 years. The brand new stuff isn't going to be in there. But this is great, because it comes with stability, it comes with reliability, and somewhat this tried and true, boring thing. But when you look at Debian as this group of people around the world, and this history, it's now suddenly kind of an interesting thing. It's different... It's amazing that it works. I mean, it's kind of somewhat the ideal of what we think of of like an open source governanced large collection of people working together, right?

**Jonathan Carter:** Yeah, I'm still amazed and surprised that it does work. If you imagine -- I mean, Ian Murdock was 20 years old when he came up with this manifesto of what Debian should be. If he came out and said that today and Debian didn't exist, people would really just dismiss him and say "This is not possible. This is much more difficult than you think. Don't waste your time on it; you're not going to do that, because it takes a huge amount of effort to create not only a distribution - that anyone can do - but to create something that has stable releases of security updates, and all of the kind of enterprisy things that we do for free as well." It would seem impossible, and if we didn't do it, I'm not sure if anyone would think that it's even possible.

And yeah, it's a social project and a social experiment. And we're not sure -- I've often asked myself what would Debian look like in 20 years? Will it still exist in 20 years? What's the potential paths of failure that could exist that could cause it to crash and burn, and what can we do to avoid that? It's a bit like flying in the dark at times, because there's no playbook for this kind of thing. For many commercial companies there's lots of rules and best practices, for pure nonprofit communities, for charities... But for projects like Debian - it's so unique that we have to kind of figure it out as we go.

**Jerod Santo:** So in the detailed history, which - this is very cool; there's like an entire darn near book written by you all... All about the history of the Debian project, and all the releases, and how it got started... And it says that "When it began, Debian was the only distribution that was open for every developer and user to contribute their work. It remains the most significant distributor of Linux that has not a commercial entity. It is the only large project with a constitution, a social contract, and policy documents to organize the project."

So I think when you ask about like how something doesn't crash and burn, usually you start thinking -- I mean, I just go to like "Money." Well, people need to eat food, and do stuff, and so commercialization is sustainability, to a certain extent. And if you go look at the list of users - now, these are just self-reporting organizations. It's not like you have telemetry on Debian installations; probably not. But these are people who've come to the website and signed up and said, "Hey, we use Debian." And you go to that page, and there's thousands of governments, there's nonprofits, there's commercial organizations who have listed themselves as Debian users. So much money, so much value, so many people building on top of this thing... How does it continue to run on the backs of volunteers?

**Jonathan Carter:** \[00:15:56.11\] I'll have to think about that one for a minute.

**Jerod Santo:** \[laughs\] Okay, we'll come back to it.

**Adam Stacoviak:** You don't want to jinx it, Jerod.

**Jerod Santo:** Right?

**Jonathan Carter:** No, I think what makes it work is so many companies see the value of their employees contributing to Debian. So people get to contribute to Debian as part of their day job. When I go to Debian, there are many people who are literally rich. They have lots of money, and they do this just because it's their passion. And they don't even have a day job; they just work on Debian all day long, because they don't have to do anything else, and they actually just completely love this.

Then there's lots of people who are students, who have lots of time to contribute to Debian. Their bills are paid, they don't work yet, they don't have to pay rent yet, but they do have some time to contribute. But then there is this very large amount of people that are professionals, that have day jobs, but either their employee wants them to do some work towards Debian as part of the day job, or it's a company that gives them 20% time off to go work on other stuff that might benefit the company, even indirectly.

So we have this huge mix of people, and in terms of being able to contribute - well, almost everyone has their own unique story. We do find that it's a bit difficult increasing our diversity in Debian. We want to bring in more women, we want to bring in more non-white people, but we find the privilege that exists out they really makes that difficult, because if you have children to take care of, or family to take care of on top of your day job, it makes it more difficult for some people to have more free time to contribute to something like free software. And we find that around Africa, for example, it's really difficult to convince someone that they should be contributing to some project for free. And we find this a lot easier in Europe and in the US than in most of the rest of the world.

**Adam Stacoviak:** Is there a particular initiative y'all have to increase the odds, I suppose? ...you mentioned the privilege that's there... Like, to sort of increase the privilege for those that don't have that, like maybe through grants, or maybe there's sponsorship from companies to say "Okay, we'll sponsor somebody to be--" Maybe they are volunteering, but it's more like "Hey, can you give me a $10,000 grant so I can contribute to Debian for three or six months?"

**Jonathan Carter:** Yeah, up until this year we did Google Summer of Code and \[unintelligible 00:18:26.25\] They tended to be very expensive. We had to pay lots of money per person to do that. And our return has been relatively low. So this hasn't been announced yet anyway, and I don't have final details, but we're looking at starting our own outreach program within Debian. That way we can have a lot of micro-grants. You'll be able to ask for something like $1,000, or $10,000, depending what you need, and submit a project idea or what you want to work on, and then there will be some form of a committee that will decide whose requests get approved. Because we get lots of money into Debian, but we're limited in what we can spend it on, because we're only allowed to spend money on things that will directly benefit Debian. So we don't give out salaries or anything like that, but we can do outreach. So the idea is that we have all these micro-grants that people can apply to, and that will hopefully help a lot of people to contribute more to Debian and solve a bunch of specific problems.

**Adam Stacoviak:** Yeah. What is the business of Debian? How is it formalized currently? I know that in your 2022 DPL platform that you mentioned - so you mentioned you established a platform when you wanted to get elected. That 2022 platform mentioned formalizing Debian, formal registration, things like that, that sort of, I guess, formalize the organization of Debian. Can you speak to the formalization that Debian currently is, and how it takes in money, and how it distributes money? Is it a nonprofit? What exactly is Debian as an organization?

**Jonathan Carter:** \[00:20:03.04\]Great. So that's still on my to-do list from my platform back then. So how we exist at the moment is - it's called an association of volunteers. And that's not even recognized everywhere in the world. So what an association of volunteers is is we get together, we have a meeting, we come up with a constitution, and we define what Debian and its contributors is. And some states in the US recognize us, other states don't. Canada, UK, South Africa recognizes that as an organization; other countries just see it as a non-existing organization, because it's not formally registered at some office. But that hasn't been much of an issue for us, because -- well, in some ways it has, but I'll get to that later.

How we work is we have SPI, software in the public interest. It's a nonprofit in the US that was actually initially started as a backing organization for Debian. So this was going to be our Debian organization way back 30 years ago, when I didn't know that Debian existed. But it's grown so much; there's over 100 free software projects hosted with SPI now, and they've grown into such a successful spin-off of their own that they can't really handle all the edge cases we have in Debian, and all the special things that we need from them. They are too cookie-cutter \[unintelligible 00:21:24.14\] a bit more to be more consistent across all the projects that they host. While this is actually a good thing, it's not so great for Debian. So when we have legal troubles, or things like trademark issues we need to sort out, working through SPI just gets too complicated and long-winded. And for smaller projects, it's fine. For Debian, we've just outgrown it. And we also have Debian France, and Debian Switzerland. They are two other organizations that handle Debian money and trademarks. So we work through these three, what we call trusted organizations, which are formal organizations that we use as fiscal sponsors in Debian.

**Adam Stacoviak:** Interesting. SPI is interesting. So it's software in public interest? Is that what it's called?

**Jonathan Carter:** Software in the public interest. Yeah, that's correct.

**Adam Stacoviak:** Okay, gotcha. So that's at spi-inc.org, if I got that correctly.

**Jonathan Carter:** That is correct. Yeah. They're useful because that means we can accept charitable donations in the US.

**Adam Stacoviak:** Yeah. You need a fiscal sponsor somewhere, especially when you're a global organization, because you can't -- to be mostly volunteer-ran, I guess in all ways volunteer-ran, you can't expect to be registered everywhere. It's physically impossible to tackle that task. You've got bigger problems, like distributing Debian and whatnot.

**Jonathan Carter:** They also handle accounting and a lot of really boring stuff that no volunteer really wants to do. Even though we do have a treasurer team, we're glad that they mostly take care of the numbers coming in and going out.

**Adam Stacoviak:** So in that same platform that we were just speaking of from 2022 there is a section where you talk about trusted organizations, which you then acronym as TO's, and you speak to relying too much on various TO's, and conflicts, and verbal agreements, and things like that. Formalizing Debian, from an organizational standpoint, is one thing, but then also formalizing your relationships is another thing. What's the stability of these relationships you have, the verbal agreements and the handshakes and the TO's that you've got in place currently? What's the stability of that?

**Jonathan Carter:** So that's a weak point that I want to address, and it's why it's a part of my platform. So this is a bit of Debian internals that I'm getting into now, but to give you some vague idea, or some idea at least, at one DebConf, which is our annual Debian conference, some handshake agreement was made between a Debian developer and someone at SPI that when we get donations, we won't pay the 5% admin fee, when we're getting donations for DebConf. Because these numbers get really huge, so 5% of all these funds end up to a lot of money for just administrating a bank transfer, essentially.

\[00:24:18.15\] But at the same time, someone else had a handshake agreement with SPI saying that we definitely should pay the 5% on those, because it helps grow SPI, and makes it more sustainable. And this caused huge tension in our DebConf treasurer team, because there was this disagreement. This is just one example, but I want to formalize our relationship between Debian and our TO's, but it turns out we can't even properly do this until Debian is registered as its own organization, because between who do you actually make this agreement if Debian isn't recognized in some of these areas where we actually want agreements like this?

So it's one of these niggly admin things that we have to take care of in Debian. We're all technical people, we want to take on technical challenges, but we have all these organizational challenges that we also have to take care of in order to make Debian work.

**Adam Stacoviak:** Are these things that the Linux Foundation -- I mean, obviously, Debian is Linux, so is this something that the Linux Foundation themselves can provide? I know they have a ton of attorneys that are involved, and that sounds like an attorney challenge, really. Attorneys tend to do business or corporation legal agreements, obviously, registration in certain places, or at least assist in that advice. Is that an opportunity for you all to leverage?

**Jonathan Carter:** Not really. I reached out to them and other organizations like the Software Conservancy and Free Software Foundation Europe, and they're all interested in becoming another TO for Debian. But that still doesn't solve our original problem that we can't actually set up an agreement with them. So I'm very open to the idea of having many more TOs for Debian in different countries around the world, but I'd like to have that infrastructure in place so that we can define what the requirements is for TO. So far, it's just happened organically, and it would be nice to say "This is what we expect from a TO. Here's a contract that we can sign, and then you can keep money or accept donations for Debian."

I just want to formalize that completely, because I think it can become a real problem going forward. We had one TO that basically closed down, and we don't know what happened to the money. It was a German trusted organization, and they held some money for Debian. I don't think it was a huge amount of money, but there's nothing we can do about it. We had no contract with this organization, nothing on paper... And that's a risk for everywhere we hold money at the moment, I think, and it would be good to solidify that in a way that we know these trademarks that we hold of these organizations, and this money, and the domain names, they will belong to Debian and it's on a public record.

**Adam Stacoviak:** Yeah.

**Jerod Santo:** Well, if we look at Debian, step back and talk about what makes it so special, and obviously, the volunteer-run aspect of it and the democratic aspect of it is one of the things. And even though myself over here is saying like "How could it continue without commercialization?", but it's like the proof's in the pudding. We're here, it's 30 years later. Debian is still around and thriving, and it's still a community that's continuing to release. I misspoke; it's not 11 releases. I did notice that number 12 \[unintelligible 00:27:34.10\] came out here recently.

One of my favorite things back in the early days of Debian - because I was in and around three, four or five; that was my really running a lot of Linux servers timeframe for me - was just the naming of the major releases, all using the Toy Story theme. I always love that. Bookworm I'm not sure. What's Bookworm all about? Have you moved beyond Toy Story at this point? Ran out of proper nouns?

**Jonathan Carter:** Oh, Bookworm is a Toy Story character.

**Jerod Santo:** \[00:28:03.03\] Oh, okay. Maybe it's like Toy Story 4, or something. Something I haven't seen yet.

**Jonathan Carter:** I think it was actually earlier. I've only seen Toy Story 4 recently... But yeah, they keep making movies, so hopefully by the time we run out of Toy Story characters, there will be more.

**Jerod Santo:** \[unintelligible 00:28:15.06\]

**Jonathan Carter:** Forky, which is --

**Jerod Santo:** Oh yeah, Forky is a good one.

**Jonathan Carter:** Yeah, Forky is Debian 14. So 13 will be Trixie, 14 will be Forky. Forky was from Toy Story 4.

**Jerod Santo:** Yes.

**Jonathan Carter:** It was like a discarded plastic fork that someone made into a toy.

**Jerod Santo:** Right. Is it the spoon fork? Like it's a spork, isn't it? Or was it just a regular fork?

**Jonathan Carter:** Yeah, I think it's a spork.

**Jerod Santo:** I was in and around like the Wheezy, Jessie era of Debian. And I remember, of course, Sid. So Sid is, for those who are uninitiated, that's the experimental, dangerous branch of Debian. This is like if you want to go on unstable. Sid - I think you guys \[unintelligible 00:28:53.12\] It's like something in development. What's the stand for it, Jonathan?

**Jonathan Carter:** Exactly. And Sid was, of course, also the unstable kid in Toy Story, that used to torture the toys.

**Jerod Santo:** Yeah, exactly. The perfect name.

**Adam Stacoviak:** Yeah, that was great. What I couldn't connect though was that Debian was released in 1993. Now, I don't know the history from '93 to '95, but Toy Story 1 was released November 22nd, 1995. So there's a two year gap there that I'm not really sure where the names came from. What was Debian 1? What was the earliest days of Debian before Toy Story was a thing?

**Jonathan Carter:** I think Debian 1 only happened in late 1994, and then it didn't have a release name yet. But also, Debian's history with Toy Story comes from before the movie was released, because \[unintelligible 00:29:42.16\] worked at Pixar at the time. So Debian was actually used for the rendering of Toy Story, and for a while the Debian lists were even hosted at a Pixar domain. So it was \[unintelligible 00:29:55.17\] @pixar.com for a little while, until Debian got its own domain.

**Adam Stacoviak:** Wow.

**Jonathan Carter:** So Debian and Pixar goes together for a long time. And it's interesting, because Next and Pixar also went hand in hand for a long time. Steve Jobs once said "If it wasn't for Pixar, they wouldn't have been Next." So you have this Apple history going back to the \[unintelligible 00:30:18.01\] Debian history, and without Pixar, the world would have looked very different right now.

**Jerod Santo:** Yeah, for sure. Okay, I looked up Bookworm. He is a minor antagonist in Toy Story 3, a green worm with glasses and a sturdy flashlight. A genius who loves reading books. That particular character did slip my mind. I don't remember Toy Story 3 very well. It's the one that I guess falls through the cracks for me. I don't remember Bookworm. But fair enough, you guys did your homework. And I'm excited about Forky, that's going to be a good name.

**Jonathan Carter:** And Forky is relevant with all the forks happening right now. There's always forks in free software, and controversial folks as well... So we'll see if there's any fun forks around Forky when that's released.

**Adam Stacoviak:** When will Gabby get a release name? That's what I'm curious about. Gabby.

**Jonathan Carter:** Gabby? Who's that?

**Adam Stacoviak:** Gabby is in Toy Story 4, and she is the doll that -- I'm gonna spoil plots here for people who may not have watched it...

**Jerod Santo:** Don't do it, man...

**Adam Stacoviak:** Antagonist character for a bit there. She's a bad doll for a bit, until she was good. It's perspective, like with every character you find. You don't like them for a while, until you realize why they're the way they are, and then you love them and you cheer for them. So that's Gabby. Gabby is the -- you know, the doll.

**Jonathan Carter:** I wish they could have taken that name while I was DPL, because my one dog's name is Gabby. So that would have been perfect.

**Jerod Santo:** That would have been nice. Gabby/Gabby.

**Adam Stacoviak:** Gabby/Gabby.

**Break**: \[00:31:52.13\]

**Jerod Santo:** You've mentioned the free aspects... And so when I think about what makes Debian special, I think the completely volunteer-led thing is obviously huge, and I think also the free aspect, because this is 100% free and open source software. And we're talking free as in freedom, and also free as in beer. But this is like one of the things Debian does, is it won't install, or it won't pre-package - maybe you can help me figure out exactly how it works, Jonathan... I remember having to install certain things after the OS install because they weren't 100% compatible with an open source license. For instance like an mp3 encoder/decoder. You know, mp3s license from some entity etc. And so Debian wasn't gonna pre-package that. You could install it later, by adding the right apt sources... But Debian is 100% free, and I think that makes it different as a distro. Not unique - there's probably other ones that do that - but different enough that it stands apart.

**Jonathan Carter:** Well, in terms of freedom, when we talk free as in free, we call it DFSG free, which stands for Debian Free Software Guidelines. This was the document set up way back. I think it was somewhere '96. I'm not even completely sure. But if you look at the Debian Free Software Guidelines and the open source definition, you'll notice they almost look exactly the same. And that's because when the open source definition was founded, they pretty much copied Debian's free software guides.

**Jerod Santo:** Oh, really?

**Jonathan Carter:** Yeah. And Debian was fine with this. Debian encouraged this even. So the DFSG even predates the open source definition by a few years. And it's great. And when it comes to device drivers and non-free stuff, we had to change recently our policy towards that... Because how it used to work is if you installed Debian on your laptop a few years ago, for example, your Wi-Fi wouldn't work outside of the box, because the Wi-Fi firmware is all non-free, and it can't be shipped on our default installation media. But we started to run into problems recently. Everything's just getting more and more complicated. If you run a Debian live system on some new computers, you would just get a black screen, because it needs the display firmware in order to show anything on the display. You can't even show text without initializing the display code with its firmware. And that's a big problem when you want to install something or bootstrap a system.

\[00:38:08.26\] And to make it worse, even the audio you need these days, the sound drivers need non-free firmware in order to start up. So you can't even play a sound, or for blind users you can't guide them through an installation. So last year we had what we call a general resolution where the whole project votes on a specific issue. So we had a general resolution to include non-free firmware by default on the Debian installation media, which is a big departure from our previous policy. A few people weren't happy with this, but unfortunately it's just necessary, because the way computers work now, the choice basically comes down to whether we want to be able to install physical hardware, or just be a distribution that installs an Ubuntu container, or a WSL on Windows, or Docker on Mac, or something like that. But people did feel that we do need to keep Debian installable on physical hardware, and this is where we decided to make this compromise and include non-free firmware on our installation media by default. And it makes it easy for the users, so I think overall it is a good thing. And while it is a compromise, there's also other projects that we do with to kind of counter it. You've probably heard of the RISC-V Architecture. It's almost like ARM, but we get completely free implementations of it. So we're investing in that quite a lot, and putting in a lot of effort to make Debian run on RISC-V, because this means that if someone does want a completely free system, there is at least completely free hardware available out there to install Debian on.

So we're taking a step back in terms of total freeness, but at the same time, we're taking some steps forward in order to fix that as well. I mean, we can't really control what Nvidia does, or what AMD does.

**Jerod Santo:** Right. That's interesting. I did not know that.

**Adam Stacoviak:** Yeah, the last time I installed Debian I recall getting asked to scan the system, I think, if I recall correctly. It was like some sort of request to say "There could be non-free software for you to install." I think it was like a system check of sorts. They'd be like "Okay, do you have Wi-Fi and other peripherals that might need it?" And it's an option to let me install it. Is that what you're speaking to, just that angst of like, okay, Debian the base version is really like all free software, but you can opt into the non-free versions of firmware and whatever else might be needed?

**Jonathan Carter:** Yeah, the installer used to detect that you have a Wi-Fi card that needs firmware, or a sound card that needs firmware, and then it would prompt you that, you know, if you have a USB disk that contains this, you can insert that now and it will load that firmware to continue to install it. Now that firmware isn't included on all the installation media by default... So at least it doesn't need to do that anymore. From your perspective, the hardware will just work.

**Adam Stacoviak:** Is this as of version 12 then?

**Jonathan Carter:** Version 12, yes.

**Adam Stacoviak:** Okay. I was gonna say... Because the last one I did install was 11.

**Jonathan Carter:** Yeah, 12 was quite a leap forward. 12 is a very -- we've got great feedback from 12 overall, so I suggest giving it a shot sometime.

**Jerod Santo:** What kind of stuff comes out in a Linux distribution? Maybe even step back from that, and for the completely uninitiated - maybe just like the typical Mac developer, like, what is a Linux distribution, of which Debian is one? Why isn't it just Linux? What do you have to do in addition? And then from there you can talk about that ongoing work that goes into it.

**Jonathan Carter:** Okay, great. So Debian is almost comparable to Wikipedia. Wikipedia wants to build this huge base of articles of all knowledge in the world. Debian does that for free software. So if you just take a Linux Kernel and boot it up, you don't get anything much exciting; you get a screen with black text scrolling by, and then nothing much else will happen. But what Debian does is it packages and integrates tens of thousands of pieces of free software out there.

\[00:42:12.10\] Our goal is to eventually package all of the free software that exists. The only problem is that the amount of free software that exists keeps on growing exponentially, and we're always playing catch up. But at the moment with Debian 12 there's 60,000 binary packages. If you just read the descriptions for all of those packages, you could spend a lifetime, probably more just reading the descriptions. And many of these pieces of software have multiple books written about them.

So there's this huge library of free software that exists, that you can use to build new things from, and it's exciting, all the different software that exists from the web perspective, there's lots of programming languages, web servers, database engines... If you use it on a desktop, there's different desktop environments, things that some people might be familiar, like Chrome, and Firefox, and Thunderbird, and clients for things like Telegram, or Signal... And there's all this software that makes it usable for desktop, servers, mobile computers... I even have a little cell phone here that's -- well, this is actually quite a big cell phone... But this is even -- people are listening, they won't be able to see it, but let me show it to you, just in case you might find it interesting... This is an actual cell phone running Debian. I have to enter the correct PIN as well. I don't know if you've seen this; this is Librem 5...

**Jerod Santo:** What's it called?

**Jonathan Carter:** Librem 5.

**Jerod Santo:** Librem 5. I have not seen this.

**Jonathan Carter:** Yeah. So this is actually a completely open source phone as well. The hardware is all open source.

**Jerod Santo:** That's cool.

**Jonathan Carter:** Yeah. And it runs Debian, and it's -- I've just upgraded it to Debian 12 a while ago... But it's really a thick phone as well, because it has lots of replaceable hardware, and it's meant to be a development platform. But yeah, it's fantastic that you can run Debian on everything, from a supercomputer to a cell phone. And that's also why we call it a universal operating system, because it's built out of all these little pieces, and you can adapt and tweak it to so many different use cases. It's also run on the ISS, the International Space Station, they use it on Mars missions... So it's really a widely used and very useful operating system for many different things.

**Adam Stacoviak:** Literally universal. That's cool.

**Jerod Santo:** Yes. The universal.

**Adam Stacoviak:** That's pretty cool. I was listening to something recently... Somebody was on Joe Rogan and they were talking about the monopoly of iOS. That it's like more than... I think it's like 58%, and so the monopoly rules here in the United States, where - Jerod and I are in the United States - are 50% or more. If you have 50% or more, the government can block you from doing something, or force you to break up your company because of just the rules of monopoly and society and how that plays out. That's interesting that y'all have a Linux desktop -- or, I guess, a mobile version of it, which the same Linux does, the same Debian. Is it a different version of it, a different flavor of it?

**Jonathan Carter:** This is called Mobian. So it's a team within Debian that creates -- it's slightly divergent from the same installation media you'd use to use a desktop or a server... But in the future we'll probably have one installation media that you can use to install it on your phone as well.

**Adam Stacoviak:** Yeah. Well, the point I was trying to make - there's choice. We really do need choice. I'm not sure if I would choose open source hardware and open source software on my phone yet, because it's like in such an immature state. And I would love to check out Mobian. But it's an interesting world, because we only really have two choices here in the US. I mean, maybe it's the same for worldwide. I haven't gone to Europe or South Africa to buy a phone and get a phone plan, and so I don't have that experience... But here are the States you basically have a choice of Android or iOS, both backed by the F and the G in FANG... Which has its pros and its cons, obviously.

**Jerod Santo:** \[00:46:08.28\] The A.

**Jonathan Carter:** \[unintelligible 00:46:08.15\]

**Adam Stacoviak:** Oh, sorry. The A. My bad.

**Jerod Santo:** Off by one there.

**Adam Stacoviak:** I was thinking Facebook. I'm glad you got my back. It's in the FANG, man... It's in the FANG. You're picking up my breadcrumbs.

**Jonathan Carter:** It's in the FANG, yeah.

**Adam Stacoviak:** Yeah. So I mean -- which is okay, I guess, for a while there, because back in 2007 Steve Jobs got up on a stage and proclaimed iPhone, and the world has changed pretty much since then when it comes to mobile intelligence and mobile accessibility to the internet, and communication, and information... It's just drastically changed. It was akin to the internet being born, the iPhone being born, and what that revolutionized. But we don't really have much of a choice. And we really need the open source choice, which is for the freedom, is for the user I guess in almost every case that you can think of. And we don't really have that with iOS, and with Android. We don't quite have that. And some will say that I think Android might be, or at least was open source. I'm not sure of the details of the license, and the specifics of its being open source or not... But I understand it to be open source-esque, worst case.

**Jonathan Carter:** Yeah, the core of Android is open source, but all these apps that you need to actually make it useful, they're all closed source from Google. So as a whole, it's definitely not open source. But you could take Android and install it on some custom device, but you can't get Google Maps or all the Google account stuff, and the things that you actually really, really need to make an Android device useful.

So yeah, I'm hoping that Debian on phones work out. There's lots of different reasons why that could be fun. At the moment, this is just a toy, basically, the one I have. I can't really use it for actual serious day to day stuff, also because the specific phone that I have us more of a development phone. Its battery life - it only lasts like six or seven hours at most... So it's really not useful as an actual phone.

There are new ones that are being made. There's the -- it's called the Pine Project, they have what they call the Pine Phone, and that one is a lot better. It's thinner, and it lasts a lot longer, it's faster... So there's a few different projects working on making phones that can run Debian, and it's interesting to see in which direction it will end up going. At least it can receive SMS'es, it can make phone calls, do all the usual things you'd expect from at least a dumb phone. Plus it runs a full Gnome desktop environment, and you get all the usual Gnome apps.

But yeah, the universality (is that a word?) of Debian is quite a big aspect of it. And also that it's -- we talked about the licensing and freeness of it a bit earlier as well. The fact that you can access it without needing to have an account anyway, or fill in your email address is really powerful. Also, you can take Debian, build your product on it, and ship it to your customers, and you never have to interact with us. You don't need our permission, we don't need to sign any NDA or contract... You can just do this. And we often have to really reassure companies that you can really do this, because they keep asking us to sign documents or ask permission. "Is this really okay? Can we really do this?" And we're like "Yeah, please. You really don't have to ask us."

**Jerod Santo:** Well, it's almost too good to be true, you know, Jonathan?

**Jonathan Carter:** It's almost too good to be true, yeah.

**Jerod Santo:** And the old saying is if something feels too good to be true, it probably isn't true. And so we tend to stop and say, "No, seriously, can you sign this?" Because that's almost unheard of. I almost can't believe it to be the case.

**Jonathan Carter:** \[00:49:53.00\] I've almost wondered if I should make some web form where you can enter your company's name, and then it just auto-generates a PDF that says "This company is authorized to use Debian \[unintelligible 00:50:01.22\]

**Jerod Santo:** And sign it Forky, you know? Like, have Forky sign it, or somebody.

**Jonathan Carter:** That's a good idea. That's a good idea.

**Adam Stacoviak:** Yeah. Because it could be cheeky and fun, rather than legitimately serious. Let's laser in on that, because one of the sponsors of DebConf for this year, 2023, is Proxmox. And I believe one of the products you're talking about, at least I assume, that builds on top of Debian is Proxmox. You can install Debian and then install Proxmox on top of Debian if you have one of those weird systems where you just have a challenge of installing Proxmox directly. But Proxmox is built on Debian, and that's been a big thing for its success too, that it's built on a stable Linux, that is not -- I guess BSD kind of gets a bad name, to some degree, in some circles of Linux, because it's not truly Linux... I don't want to get into that fight, because I'm not part of that fight, but the point I'm trying to make is that Proxmox could be an example of one of the companies you're mentioning, that builds their product on top of it.

Now, Proxmox is also open source, so it's an open source product, but the way they commercialize it is through support. So you can go and buy a support license through Proxmox for your hypervisor, and move along with your life. But I'm curious, is that one of the examples you're talking about, or is it is there somebody else?

**Jonathan Carter:** That's one of the examples, but there's thousands of companies. It's many. I don't know of all of them even, and I've had many of them email me, but once I tell them "You can really use Debian, it's fine", sometimes I sign for them, and I forget about them shortly after. And there's so many of them.

It's amazing how big Linux has grown in the last 20 years or so. When I first started using Linux and showed it to my friends no one knew what it was or that it even existed. Now it's almost a household name. Even if people don't know exactly what it is, they've heard the name. But if you look at how widely it's used... Every television you buy is running Linux these days. If you're using an eBook reader like the Kindle or Kobo, they all run Linux. If you have a DSL or fiber router in your home, that's running Linux. If you have a car, that probably has five or six Linux systems in these days.

There's so many Linux computers everywhere that they outnumber all the other devices multiple times... And it's just exploded so much. Even the supercomputers up until I think four years ago, it was 498 out of the 500 top supercomputers ran Linux, and then they switched the last two over recently as well. So now it's all 500 of the top supercomputers running Linux. It's just exploded everywhere, and it's become even impossible to avoid --

**Adam Stacoviak:** I guess I'm not that surprised by that, honestly, because - I mean, from my perspective, or at least many people's perspective, Windows is not necessarily designed to be a multi-machine or a headless machine operating system. It's meant to be a personal operating system. macOS 10, or macOS has traditionally been a personal operating system. They've had a server flavor of it, but they're not trying to compete with it, I think probably because they couldn't really compete well with it. Whereas Linux has been so free and so flexible in so many ways... And obviously, 1993, and Ian Murdock, and all these different things with Debian... Like, that has been the trend of the universal operating system to work on a headless machine, work on an HPC, work on a server, work for a web application... Linux is far more flexible that I think Windows or macOS was designed to be, so I'm kind of not surprised, but -- I'm definitely cheering with you, but I'm kind of not surprised because Linux has been designed to be what it's accomplished.

**Jonathan Carter:** It's funny, because Microsoft used to absolutely hate us. Steve Ballmer even called Linux a cancer at one point. And Apple just ignored us, pretended we don't exist. And in recent years, when Microsoft wanted the users to upgrade to Windows 10 -- almost a Debian 10...

**Adam Stacoviak:** \[laughs\]

**Jonathan Carter:** \[00:54:06.26\] They basically had to give Windows 10 away for free in order to get people onto it, so that people don't get stuck on these old versions of Windows. And this meant that Windows wasn't this cash cow it usually is. But they did Linux on Azure, and Azure completely skyrocketed. So they made so much money out of Linux that it more than made up for the money they lost for having to give away Windows 10 for free, and then made record profits. So Microsoft learned to embrace Linux, and it worked out for them. And with the release of the Apple M1 best laptop, MacBook, they demoed how well the ARM-64 version of Debian runs on a virtual machine, on this machine, in an Apple Keynote. This would have been unheard of a few years ago, or almost unbelievable... So they will find value in this, and there's some integration. I don't know where it's going to go in the future, but at the moment it seems like there's lots of space for coexistence and working together.

**Adam Stacoviak:** Yeah. You mentioned the M1 machines, and this new Apple silicon direction they've taken... And the one thing -- I don't know if they'll ever do it, but the one thing I want them to do is just natively support Linux. I don't care about Windows on a Mac, I really don't. I would love to just like install straight Linux on the machine, versus macOS. Because they have the most amazing hardware, bar none, across the board. I mean, they win in almost every category when comparing hardware.

Now, I don't always want to choose macOS. I do want to keep choosing Mac hardware, though, because I think they have, in most cases, a leg up. But then at the same time I really enjoy building out my own systems, too. So I like to buy Intel NUCs, and tinker, and have fun, and like swap out my RAM, and choose my own SSD, so I kind of don't agree with that all the time... But at the same time, if I could just buy a Mac Mini without the macOS -- or with it, but then swap out Linux, that would be a dream for me.

**Jonathan Carter:** Yup. There's lots of work going into that, and there's this one guy doing an amazing amount of work reverse-engineering all that Apple stuff to make Linux work on them. And I was a bit concerned at one point that Apple would try to block this, add something to the new M1 designs that it would not boot anything else than macOS... But Apple has actually made a commitment, and it's part of the M1 and the later M2 and M3 designs that you can boot whatever you want on that CPU, and they basically guarantee this would --

**Adam Stacoviak:** Is that right?

**Jonathan Carter:** Yeah, that's a fantastic -- plus one point for Apple in this case.

**Adam Stacoviak:** Yeah, I didn't hear that news.

**Jonathan Carter:** Yeah, so Linux is just going to get better on the M1 and above hardware. That is some good news, at least for people who like the Apple hardware.

**Adam Stacoviak:** So they're not blocking it... But are they supporting it? You know what I mean? So it's one thing to not block an alternate operating system from being installed, but it's another thing to support it. I would love it if Tim Cook, and supportive of just an open, free world, support Linux on that hardware, natively. That would be amazing. Like, don't just allow a separate operating system that's not macOS. Literally put your hand down and say "I support Linux on Mac hardware." To me, that's a phenomenal world to live in. And I think for humanity.

**Jerod Santo:** Don't hold your breath...

**Adam Stacoviak:** Jerod's like "Hm..." What are you saying, Jerod? Go ahead.

**Jerod Santo:** I just said "Don't hold your breath." I just said "Don't hold your breath."

**Adam Stacoviak:** I can tell you my dreams, can't I?

**Jerod Santo:** I know, I've got no problem with your dream. I'm just here thinking like it's a pipe dream. Yeah, there you go.

**Adam Stacoviak:** I'm holding my breath... No, no, I'm not holding my breath. It is a pipe dream. But you know, what got me into this -- this, Jerod, because I started to tinker with Linux on old Mac hardware that was Intel. And so when I got to the T2 chip supported - it was still Intel, but it had that T2 chip - well, Linux is just very challenging. Debian, or Ubuntu, you pick your flavor... Very challenging to install properly on an Intel-based Mac with a T2 chip.

\[00:58:05.26\] And so as a Mac user, I've got this old hardware, I've got like three old Intel Mac Minis sitting over there that don't really have a life necessarily. And I can install Linux on those. I did choose Ubuntu, so forgive me; it is an ancestor, I guess a derivative, a sibling...

**Jerod Santo:** Yeah, it's to some degree family.

**Adam Stacoviak:** It's based on. But there's some \[unintelligible 00:58:27.20\]

**Jerod Santo:** Oh, there you go...

**Adam Stacoviak:** Exactly. Like, that's the super-old school one. I said - what, 2003?

**Jerod Santo:** That's a really old Mac Mini.

**Jonathan Carter:** I was thinking this was 2006...

**Jerod Santo:** It's got a Disk Drive. Is that a CD ROM, or a DVD Drive on that thing?

**Jonathan Carter:** That is a DVD drive.

**Jerod Santo:** Wow. I remember those.

**Jonathan Carter:** This was my only Mac computer I ever bought.

**Adam Stacoviak:** For those listening, Jonathan held up an old Mac Mini, showed it off, and Jerod and I immediately knew what he was showing off there.

**Jerod Santo:** And it had an Ubuntu sticker on the corner.

**Jonathan Carter:** Yeah. This was back when I used Ubuntu. I briefly ran Ubuntu on this Mac Mini in 2006.

**Jerod Santo:** How do you feel about Ubuntu? I know you said Canonical, there were issues when you were involved... But as an operating system, maybe in comparison to Debian... Because it does have -- it's more modern in terms of like it's going to have more newer software on there for you, more maybe usable for a desktop experience... But what do you think about it?

**Jonathan Carter:** Well, this is something that I liked about Debian 12 as well. For once, at least at release time, we had lots of new software. We had all the latest software at the time of release, which was great, because users are fine when things gradually get older, but when you even have outdated stuff by release time, it's not a lot of fun... And also Debian has backports these days, so you can enable the backports repository, and then you can install newer versions of stuff that Debian was not originally released with. So you can still get newer versions of software, it doesn't have to get outdated. The backports repository is really great for that. And we support Flatpak, and we support Snaps just as much as it's supported in Ubuntu. So you can install things from a Flatpak repository, or from Canonical's Snap server, and also get newer software like that.

Ubuntu feels very familiar to me because it also has apt and dpkg. I don't like when they swap out things, when you'd expect to get a \[unintelligible 01:00:25.12\] when you apt-install something and it actually swaps it out for Snap in the background. I think my study users don't like that much either.

**Adam Stacoviak:** That's sneaky...

**Jonathan Carter:** That is a bit sneaky. They did that initially with the web browsers, and now they do that with more software. But yeah, I would want to get a Snap. If I snap-install something, and if I apt-install something, I want my Debian package installed.

The other problem I have with Ubuntu is - well, they talk a lot about how they're free, and open, and open, and they want to share, but their binary packages aren't free. Their source packages are. What this means is if you want to build your product on Ubuntu and distribute it, you can't do that without signing a license agreement with Canonical first. Either that, or you have to rebuild all the Ubuntu sources and remove all the Ubuntu branding from the system, which is actually quite a bit of work. So I'm surprised there hasn't been like a CentOS kind of project for Ubuntu in order to allow other people to build their -- but I think what people do is they just come to Debian in that case where Ubuntu doesn't work.

**Jerod Santo:** Right. Close enough, right?

**Jonathan Carter:** Yeah, exactly.

**Adam Stacoviak:** That's what I'd do... In regards to Snap, that's how you can check your Snaplist, literally with Snaplist, and list out the Snaps you have installed. So if you've recently installed something with apt, or something else, and you feel like maybe you were SNAFU'd, just run Snaplist and you'll see what's installed via Snap on Ubuntu.

**Jonathan Carter:** SNAFU'd, that's a new way --

**Jerod Santo:** I like that one. "Ah, they SNAFU'd me." Alright, so that's Ubuntu, Jonathan. Now do Arch. Come on, break it down.

**Jonathan Carter:** \[01:02:02.16\] I love Arch. What's not to love? \[laughter\] The problem with Arch \[unintelligible 01:02:06.01\] is it does have stable releases. So if you want to install it on 5,000 servers, or use it in your enterprise, or even in your university, it just changes too fast. You don't want your web servers not starting one day because the config file format changed with last night's upgrade, or something like that. So Arch is fantastic for what it is. If it wasn't for Debian, and I didn't need to support a system professionally, I would probably use Arch as well. I think it's a great system.

There are a lot more lax on certain things than we are. In Debian, for example, when you package something new in Debian, the Debian developer needs to go through all of the source code and document the copyright of literally every file in that upstream source tarball in the Debian copyright file. In Arch they just look at what the GitHub page says. And if it says it's MIT-licensed or GPL, they basically just have a tag that says "This is the license of this package." But meanwhile, there's a bunch of files in the package that might be under another license. And I think especially if you want to build your product on these packages, it helps to be able to tell exactly what the license terms are that you're using.

So I think as a hobby system, Archie is fantastic, but for more professional stuff, I'd definitely stick with Debian.

**Jerod Santo:** Makes sense.

**Adam Stacoviak:** In regards to the state of the Enterprise Linux Standard, do you have opinions about that? ...this whole Red Hat, and Rocky, and CentOS, and...

**Jerod Santo:** Alma Linux...

**Adam Stacoviak:** All this different stuff that's kind of come down... What's the state of Enterprise Linux for you, open source Enterprise Linux Standard?

**Jonathan Carter:** As far as I'm concerned, Debian is the only enterprise Linux that's exists.

**Jerod Santo:** Good answer.

**Jonathan Carter:** I was actually thinking of creating an enterprise theme for Debian that you can install. You apt-install a Debian theme, and it will show Debian Enterprise all over the system. Because what's an enterprise system? The biggest difference between Debian and enterprise systems is that they call themselves Debian enterprise systems. And that's an easy enough fix to make.

**Adam Stacoviak:** Yeah.

**Jonathan Carter:** The long-term support is a lot longer on Red Hat. I mean, you can go up to ten years with them. But if you delve deep into the issues, the reason why people want 10-year support is they want to install a system, and forget about it, and have very low maintenance for a very long time. And it turns out that it's not really that simple on RedHat systems. They use these really Frankenstein kernels on those machines. They would backport entire stacks from much newer kernels back to the older kernels that they used on the older versions of Red Hat... And you end up having these wildly divergent stacks together that wasn't made to run together the way that they do it. And they come up with all kinds of odd bugs. And if you look at how easy it is to upgrade a Debian system -- and you can also get up to five years support with Debian with the LTS project.

It becomes clear, at least to us, and also to the people who use Debian out there, that it's actually better to have good regression testing and upgrades that work well, so that you can have a really easy, really quick upgrade that is almost effortless, than trying to maintain this weird stack of old software, and integrating new stuff with it over a period of ten years. Because there's been lots of cases where this really \[unintelligible 01:05:38.20\] hard luck. If you've followed stuff like Heartbleed, and whether you had to upgrade to TLS 1.3... You can't just upgrade OpenSSL; you have to upgrade everything that builds against OpenSSL, and it's just -- it ends up being a huge mess. And there's more and more of these cases where it really proves that being ahead of the curve in things like that and upgrades really help a lot. Like the people that did really big Debian web installations, they could just enable TLS 1.3 and it was done, instead of it being this big, complicated fix.

**Jerod Santo:** \[01:06:16.04\] I like this idea, though...

**Adam Stacoviak:** When I hear folks though -- like, this whole snafu with Red Hat Enterprise Linux, and if they can't have that, or if they can't have CentOS, they say, "Okay, well, then I want Rocky." I don't hear them say "I want Debian instead." Why do you think you feel that way? And I think that I don't disagree with you, but when the general public says "Okay, I can't have a Red Hat-compatible Linux, or an Enterprise Linux that's Red Hat-compatible, why are they moving to Rocky or Alma because they can't have CentOS instead of Debian?

**Jonathan Carter:** Well, we have lots of people moving to Debian after the Red Hat saga... But I think for some people, it's a case of they've invested-- they have all their configuration against Red Hat Linux, or CentOS, And they have so much config and software configured against that that it would be easy for them, or at least the path of least resistance to just use Rocky Linux or Alma Linux, or one of these others for another two or three years until they could figure out a longer-term strategy on how they want to do things. Maybe they want to see how things evolve in the Enterprise Linux space as well, but I think it's mostly to buy themselves some more time.

**Adam Stacoviak:** Is this something you're planning to take advantage of in somehow? Like, while you may be "enterprise" in your eyes or in the public's eyes, is this something y'all are planning to take advantage of? Is there a concerted effort inside to take advantage of this mungy standard, I suppose?

**Jonathan Carter:** Not at all. Unfortunately, our marketing sucks. We're not good at promoting ourselves, or marketing...

**Adam Stacoviak:** You're painting a good picture. I love it.

**Jonathan Carter:** And that this has been a concern brought up over the years with Debian, and we're trying some different things, but we're just not good at blowing our own trumpet. I am, because I'm Debian project lead, and I'm good at converting people to Debian. A few weeks ago my one Linux friends told me that Linux is basically dead on the desktop, and I said, "Well, okay, I believe you." But then the stats came out from Netcraft... Or was it -- someone released the big desktop stats from the user share, and Linux is at an all-time high on desktop. If you look at all the browser stats that come in, it reached 3% for the first time I think last month... And that's big news. So Linux is not only not dead on desktop, it's bigger than it's ever been.

**Jerod Santo:** I saw that.

**Jonathan Carter:** I was going somewhere with this...

**Adam Stacoviak:** Well, you were talking about marketing. I'm curious if you all have -- well, it was more like is there a concerted effort on the inside to take advantage of this mushy term of the enterprise, the Open Source Enterprise Linux Standard? It's in question now because of the change that Red Hat made with REL, and then obviously, it's going to be more challenging for Rocky and Alma to be bug for bug compatible with Red Hat Enterprise Linux, because it's just not going to be that way. And there's a chance now to reestablish what it might be to be this open source Enterprise Linux Standard.

**Jonathan Carter:** Well, you probably saw that \[unintelligible 01:09:21.20\] is doing a hard fork of Red Hat Enterprise Linux... And it might be that Alma and Rocky might end up tracking that instead, and that that becomes a bigger -- I don't want to call it a standard, because it's not really a standard. Maybe it could be a de facto standard if all the companies that build their products --

**Adam Stacoviak:** That's how I'm using the term... It's not literally in quotes the standard, but it kind of is based on usage.

**Jonathan Carter:** Yeah, exactly.

**Adam Stacoviak:** Right? A lot of enterprises do use Red Hat Enterprise Linux, and they often use CentOS, or they did before it changed and was acquired by Red Hat, and then changed in terms of Stream, and then they would use Rocky in tandem with Red Hat Enterprise Linux in production... One, because they just don't want to pay licenses for every possible machines they ever have, because don't need to support every single machine, you know? And so that was why CentOS made sense and why Rocky made sense.

**Jonathan Carter:** \[01:10:17.10\] So if you look at the actual enterprise software that you'd need Red Hat Linux for like SAP, or an Oracle database server; these will never support the free variations of that system. If someone rebuilds the sources of Red Hat and say "I want to run SAP only", for example, they will just simply say "Your system is not certified to run this."

**Adam Stacoviak:** Right.

**Jonathan Carter:** So for certified software, you want the real thing; you want the Red Hat Linux or the Oracle Linux. Then there is another clause of software, like cPanel and the like; they actually sell themselves as a product that runs on RedHat Enterprise Linux, but if you run them on CentOS, they will run just fine as well. And many web hosts across the internet run cPanel, for example, on CentOS and similar systems. So I think those will either move to this Suse hard fork, or they will start supporting additional systems, too. cPanel specifically is starting to support Ubuntu now as well. So you can run cPanel on Ubuntu, where previously you could only run it on Red Hat systems. So I think that's something we're getting to see more and more of; some of these big pieces of software that used to just run on Red Hat Linux is going to expand a bit.

**Jerod Santo:** Yeah. No, I think they're gonna dilute their overall market share that way, through this process. It seems inevitable, as these changes continue to lose trust and credibility.

**Jonathan Carter:** Also it's instability for your organization if you have to rely on whatever flavor of the day Red Hat \[unintelligible 01:11:53.16\] you have to use.

**Jerod Santo:** That's one of the things I loved about Debian as I was using it back when I administered more servers than I do now. I wasn't afraid of any of the upgrades or anything. It was always just like "Yeah, go ahead, apt-get update", or whatever. Debian just worked. And I would upgrade it with impunity, because it would never break stuff. And just like I like Postgres for that exact reason historically as a database server, as an operating system, silky smooth and reliable for me is number one. And if I have to go grab some new piece of software that's not pre-packaged - sure, I'll go ahead and update my sources, and I'll go get it or download it, or compile it myself if I have to. But that stable foundation, especially if you're running a business... Like, the last thing you want to be doing is dealing with these infrastructure changes as the rug gets pulled out from underneath you when you're trying to push other areas of your enterprise forward, not manage a crisis down in your inner workings. So I know that Debian as the free universal system isn't always the choice for enterprises that need a certain license, and stuff. But for everybody else - I mean, it's kind of a why not proposition in my opinion.

**Jonathan Carter:** I'm surprised that the likes of cPanel haven't started to support Ubuntu or Debian previously. But I think there's clout that comes with running on an Enterprise Linux system. CentOS even had a lot of clout around it, and I think \[unintelligible 01:13:24.14\] on top of that as well.

**Jerod Santo:** Are there companies or entities that provide enterprise support around Debian, as you can hire them in a bind to come in and do stuff for you?

**Jonathan Carter:** Yeah, there's quite a number of them. The biggest one I can think of is called \[unintelligible 01:13:42.11\] which is not a very enterprisy name...

**Jerod Santo:** No...

**Jonathan Carter:** But they actually managed the LTS project for Debian, and the extended LTS project. So if you want to go above five years of support for a Debian system, you can sign a contract with them and they'll provide the longer-term supports. So if you have specific packages that you need to keep running, they'll update it and provide security updates for it. But for other Debian things, like software development, packaging, and also LTS stuff, there's so many companies out there that provide professional support for it.

**Jerod Santo:** \[01:14:21.27\] Well, there's the \[unintelligible 01:14:20.20\] that many people need in order to make a choice like that... Because it's usually just that. It's usually like "Well, I don't want to have unmitigated risk, and so how can I somehow hedge against a catastrophe?" And the answer to that is some sort of support contract. And there's your Enterprise Linux, right?

**Jonathan Carter:** Unfortunately, we just don't match the global scale of these big companies like \[unintelligible 01:14:45.28\] or Oracle. Most of these companies, the bigger ones might cover big parts of Europe or big parts of the US, but no one is as global as Red Hat or Oracle. And maybe we'll get there. Maybe some of these companies will grow to that level. It's more of a journey than a destination, and Debian has the steady and slow growth that's been happening over the last 30 years, and I hope that it continues to grow in at least that same trajectory over the next 10, or 20, or 30 years. If it happens faster, that's fine. But if it just keeps on going at the current pace, it will get there eventually. It's just a matter of time.

**Adam Stacoviak:** How long is it that you can continue to run for DPL? Here in the US a president can be president twice. Two terms. How many terms can you do as a DPL, for example?

**Jonathan Carter:** I don't think there's a limit inside of the project. So you could probably go on forever if you have enough stamina. I'm at my end, so this is my last term.

**Jerod Santo:** It seems like one or two years is what most people are doing.

**Adam Stacoviak:** Right.

**Jonathan Carter:** One or two years is I think as long as a normal person can hold out.

**Jerod Santo:** It's a lot of work, or why?

**Adam Stacoviak:** Is it one year at a time, or is it two years? When you get elected, is it one single year?

**Jonathan Carter:** One year. One term is one year. But I want to return to technical stuff. I've so many ideas, and so many -- well, relatively small projects, but that has a big impact. Next year I want to focus on that. I have so many ideas to make the installer stuff better, to make it easy to find the \[unintelligible 01:16:28.11\] One person called our downloads page an IQ test, because just finding the Debian image they want to \[unintelligible 01:16:35.27\]

**Adam Stacoviak:** It is pretty challenging, I can attest to that.

**Jonathan Carter:** There's still so many low-hanging fruits that -- well, anyone else could do too, but that I have an itch to scratch, that I want to make better... And the DPL role is so time-intensive; there's so much to do, it's kind of mind-blowing. What I do like about the previous DPLs is each previous DPL from the last few years did some work to lower the responsibility of a DPL, which is fantastic. And I'm doing work on that as well. For example, we have a reimbursement system where Debian developers can buy stuff and claim their money back from Debian... And for each one of those reimbursements, it's like 20 or 30 emails; it's just too much paperwork. And we're finally moving to a web-based system now that will take care of that.

So at least that's some load that I'm taking off of future DPLs... Yeah, also something that will continue getting better over time. And maybe we won't even have a DPL in the future. Maybe we'll have a small board. This is all stuff that's continuing to evolve, and hopefully we can make it better and easier on everyone.

**Adam Stacoviak:** This position you hold is a fully volunteer position?

**Jonathan Carter:** Yeah, that's right.

**Adam Stacoviak:** So what's your day job?

**Jonathan Carter:** \[01:17:51.15\] At my day job, I work at a university. We use Debian there as well. We do maths and science, we get mathematicians from all over Africa together and get them on PhD level. And all our classes run on Debian, all the servers run on Debian. They do all these AI courses, and math and science of Debian... So it's exciting. It's fun.

**Adam Stacoviak:** That's cool. Does your full time job then kind of support the fact that you're the DPL for Debian? Do they give you hours? Do they sort of subsidize some of your employment to focus on Debian?

**Jonathan Carter:** We don't have a very formal agreement, but they know I'm working on Debian in worktime, and even after worktime. And when I go to DebConf, I still get my salary for that time, so it's not like I have to take holiday or unpaid time off to go do Debian stuff... Which helps a lot. If it wasn't for that, I wouldn't be able to do it.

**Adam Stacoviak:** Very cool. The last term as DPL... Do you think you'll get the organization -- so what are some of your items that you plan to make sure you get done before you call it mic drop on DPL?

**Jonathan Carter:** These two things we discussed, and two other things at least are very high on my list. Getting the - whatever we call it, the diversity... I forgot what we want to call it. The outreach delegation. That's what we're calling it. The Debian Outreach Project, where we can give micro-grants to people who want to work on specific areas of Debian. That would be one pot to finalize and get done. The other one would be to get the formalization of our organizational structure finished, and better agreements with our trusted organization, and some framework to connect to new trusted organizations, because we have the three at the moment, but it would be nice to have even more, and in more different regions of the world.

**Adam Stacoviak:** How many TOs do you have throughout the world? Is it hundreds, a small handful? How many TOs are there for you all?

**Jonathan Carter:** It's SPI in the US, and there's Debian Switzerland in Switzerland, and Debian France. So it's just the three.

**Adam Stacoviak:** That's cool.

**Jonathan Carter:** But we've had more organizations who wanted to come on board, and we just didn't have the structure to do that properly. So for small tiers like Debian France and Debian Switzerland it's easy, because they were specifically founded to be TOs for Debian. But there's so many others, like the Software Conservancy and Free Software Foundations in Brazil, in Taiwan, in India, and other countries who want to be able to accept donations for Debian and \[unintelligible 01:20:26.03\] our resources, but we just need that framework in place to be able to do that. So those two things I would like to finish.

**Adam Stacoviak:** So if there's somebody listening to this that can support you in that effort, what kind of support could you need from the public? From just those out there who care about Debian, and can in some way, shape or form either make a contact for you, or help you with a connection, or leverage their network... What kind of support would you call for from the community?

**Jonathan Carter:** For that point - unfortunately it's something we just have to do. But if someone has lots of legal experience in this area and they'd like to get in touch, I'd be happy to listen to some advice.

**Jerod Santo:** Jonathan, before we let you go, I did want to ask about this section in the detailed history... I know you didn't write this document, but chapter four of the history of the Debian project - it lists out all of the releases, and then it also has important events. And this is a very interesting section, because it's like the official history of Debian, and it's mostly a list of people who have passed away. Some tragically, many young. Of course, you and I both know, maybe our listener doesn't know that the project's founder, Ian Murdock, passed away in 2015, so he's no longer involved... But there's like a 12 to 15 list of important events, and these are all Debian contributors who have died. And I thought that was kind of interesting, and maybe poignant to an extent, and maybe showing how much this project's about the people... But I just wanted to see if you've noticed that, if you've read that, and if you can comment on it.

**Jonathan Carter:** \[01:22:05.03\] Yeah, it's tough, because we're over 1,000 people... And also, as DPL, if someone gets cancer, if someone gets divorced, if someone's going through any kind of tough time, they get in touch with you. So you get to know -- statistically, out of 1000 active developers, you're going to get some bad news now and again, and unfortunately, someone does get terminally ill, and unfortunately sometimes someone passes away, and it's tough on all of us, especially if we've been in a community for a very long time.

So yeah, we work together every day... Even though we don't work for the same company, we see each other at Debian events. So you get to know people over a period of many years, and you think of them as family and friends. So the human connection is definitely very strong. So some of us don't even know where the other people in Debian work in their day job. We know this person does this piece of work, and we know what they're interested in and what the technical capabilities are... But for us, we're like a Debian family. It sounds so cheesy; I almost don't want to say it because it sounds so cheesy, but it is true. There's a very strong connection between us, and we do care about each other.

**Jerod Santo:** Yeah. That's the sense that I got when I read this. I thought "Who puts together a history of their project?" A lot of times it's like milestones: this many users, some big deal happened, a big release... And it's like "Here's our history", and it's a listing of people who were Debian contributors, who had passed on... And I thought, that is interesting. How do you all communicate and collaborate and come together? How does this bond form remotely, amongst Debian's 1,000 volunteers?

**Jonathan Carter:** It's a huge mess, because we have so many communication platforms... So we use IRC a lot, we use mailing lists a lot... Lots of other unofficial channels that we use to communicate. Some Debian people use Telegram and Signal a lot these days, although those are not officially sanctioned, in the sense that we don't have any -- we leave it to them; whatever they do, there is not something that we monitor or actively promote on our website. So we tend to steer people to mailing lists and IRC the most. We also have a Matrix instance now, which is getting some traction...

Our in-person events is really the thing that really glues together. Without that we really struggle. When we had COVID and we had to do everything remotely, initially it actually worked really well, because we know each other personally, and it was fun seeing each other on our computer screens, which we oddly never did before COVID, but once COVID started, many teams just started video-conferencing, and I said "Hey, this is great. We should do this more often." And we were very enthusiastic about this. But by 2021 we got what they call Zoom fatigue; we got really tired of being at our computers, and productivity over the whole Debian noticeably went down.

Once we were able to get back together in person again, things improved drastically. If you look at the Debian 12 release, it had the shortest release cycle of any Debian release. Before, typically we tried to release about every two years, and sometimes it goes up to 25 or 26 months. This time it was, I think -- I don't even have that data with me, but it's something like 18 months after the previous release. So having back the physical events really drove up the enthusiasm again. And we have all kinds of in-person events; there's these birthday parties coming up on the day that this episode is released. There's sprints, which are activities where people get together to fix bugs, or all kinds of releases... And the in-person events really, really make Debian work.

\[01:26:02.29\] I know you want to wrap up, but another thing that was part of my DPL platform was to establish a more formal framework for local groups. So local groups are groups of just Debian users who get together and do Debian stuff. So for example, in Brazil and in other parts of the world they just have like a big Debian party where they do talks, and have cake, and drink beer, and have all these kinds of Debian events happening. And we want to see how we can support these groups, either financially, or sending them some swag for their events, or helping people get bootstrapped when a new local group is formed. And that's a big part of what I'd like to achieve in this DPL team as well - make local groups easier, make it easy for people to start off. I've been wanting to get one off the ground in my country for a long time, and I finally have a few people who are interested in helping out... But there's little documentation and help that I can send them to right now. Hopefully, we can get that bootstrapped and fixed for the future.

**Adam Stacoviak:** One thing we did before was we had Zach Latta on a while back, talking about Hack Club. Not Hat, if I mispronounced... It's hackclub.com. So I would suggest that you check out that episode...

**Jerod Santo:** Yeah.

**Adam Stacoviak:** Because hey, why not promote our back catalog? But at the same time, just pay attention to what they're doing, because they did a lot of stuff in-person, but Zack talks specifically about this online presence, and a lot of the things you're talking about that really revived the Debian community, but then also thrived it prior to COVID, and not being able to meet as much in-person or whatnot... But there's just a lot that they've done that keeps the spirit alive despite not always being able to have that many teen hackers out -- what do they call themselves, Jerod? Hackers? Hack clubbers?

**Jerod Santo:** Probably...

**Adam Stacoviak:** Hack clubbers is what they say online.

**Jerod Santo:** Yeah.

**Adam Stacoviak:** So there's some things I think you can check out that they're doing well, and if you want an intro to Zack, I'd be happy to connect you, because he's a great dude, and has a lot of great ideas, and obviously has done well with Hack Club. It's a 501(C)3, it's a nonprofit organization, and it thrives very, very well. So I'd check out what they're doing well when it comes to how you may plan future Debian meetups and localized things.

**Jerod Santo:** Especially locally, yeah.

**Jonathan Carter:** Yeah, I'd love to speak to him. I see on their website they are here in Cape Town as well, so maybe I can take out the local instance of Hack Club locally.

**Jerod Santo:** There you go.

**Adam Stacoviak:** Yeah, absolutely.

**Jonathan Carter:** Excellent.

**Adam Stacoviak:** Well, very cool.

**Jerod Santo:** Yes.

**Adam Stacoviak:** Thank you so much for taking us on this Debian journey, these 30 years...

**Jerod Santo:** 30 years.

**Adam Stacoviak:** ...this year being your fourth year of service; as you said, your last year of service, and you have some goals that you have in mind for it... Really a big fan of Debian. Thanks so much for just sharing the journey here with us, and all your effort to make it what it is today and what it will be tomorrow, technically or organizationally.

**Jonathan Carter:** Yeah, man. Thank you for having me and helping us share some Debian thoughts with the world out there.
