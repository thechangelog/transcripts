**Erik St. Martin:** Welcome back everybody to another episode of GoTime. We had a little bit of a long break there (two weeks), but we are back. On the show today we have myself, Erik St. Martin, Brian Ketelsen is also here...

**Brian Ketelsen:** Hello!

**Erik St. Martin:** And Carlisia Pinto.

**Carlisia Pinto:** Hi there!

**Erik St. Martin:** And our special guest for today actually gets to blend two worlds for us, both Go and information security. Please welcome to the show Aaron Hnatiw.

**Aaron Hnatiw:** Hey, everyone!

**Erik St. Martin:** For anybody who may not be familiar with you, do you wanna give a brief background, maybe how you got into security and how you transitioned into Go, and a little bit of how that fits into your current role?

**Aaron Hnatiw:** Sure. Starting out in security - I never really got into the industry early on; it was a little bit later when I was in university. I originally went to school for criminology and I was on the path to becoming a federal police officer, but when I was at school I ended up meeting a guy who was into hacking, and he was actually pretty good at what he did. He was showing me some of the stuff he was doing, and I remember one day he pulled open his laptop - he was running Linux on it, probably some Ubuntu derivative - and I think he was hacking the Wi-Fi. He showed me this and it blew my mind. I said "You can do that with a computer?" From then on, I basically spent all my time just researching how we did that and how this stuff works, and I was spending all my time doing that, so I figured "Why not just switch into doing that permanently?", instead of going on the path I was going on, and I ended up switching into computer security as the end goal. To get there, I knew that I had to do a lot of other things, cover a lot of bases to get to the point where you're doing security, so I ended up going back to school for essentially systems administration and networking. Then I did another program for computer programming.

I worked at a firewall company, and just kind of found my way through different roles, like system administrator, network engineer, developer, with the ultimate goal of getting into security. I ended up starting my own security consulting company after a couple years of doing those other jobs. That went really well; it was more of a red team side of things, and we can talk about what red team means later on. I was working with smaller companies.

Then I ended up getting approached by the company that I work for now, and I had the opportunity with them to do security consulting as well. The big draw for me was that the people that worked there were all really smart and they knew a lot about security, so I knew I could learn a lot from them... And not only that, but they had a more international clientele, so I wanted the opportunity to work with big clients, to travel around the world and really see how security works at a bigger scale than what I was working on before.

\[00:03:41.09\] So I got into consulting that way, and eventually found my way, after doing that for a few years -- I really enjoyed it, but I found that I was getting to a point where I needed to get more coverage than depth. I was doing a lot of the same stuff over and over again, and it was interesting, but I wanted more. I wanted to be able to dive a little deeper. Now the job that I'm in is I'm a security researcher at Security Compass. The role basically involves me diving deep into security, into technologies and finding ways to break them, to better secure them, and then from there going around and sharing what I learned at conferences, at local user groups, and just sharing what I have. Part of that background that I didn't really mention that ties into this is I was also a college professor in applications security for some time. Fun fact - I chose to use Go as the programming language for that, and a lot of the students really enjoyed it and it was an interesting experience. I can get into that more later, too. That's kind of how I found my way to this point.

As far as Go, what got me interested in Go was I have a friend who's name is Thomas Shadwell; he's a senior security engineer over at Twitch, and I think everyone knows Twitch is a pretty big proponent of Go... So he uses it every day in his job, and he loved using it; he's really, really good at it, he's a super smart dude, and he showed me what he was doing with it and it kind of helped guide me through some of the basics. Then from there I just latched on and I really enjoyed using it.

Sort of building some open source tools, contributing to projects... I actually started using it as the scripting language almost for my pentesting work. Python is kind of the most common one now, but I started using Go on a regular basis... I just picked it up and started using it more and more, and to this day I really enjoy working with it, for a number of reasons. That's kind of the long-winded answer to how I got to where I am today.

**Carlisia Pinto:** I wanna pick up on one thread... You mentioned that you were using Go to teach, yeah? Two related questions - how did it go teaching Go? Did the students find it easier, did they complain, did they have praises for it? How did that go? And how do you think Go compares with Python for security related things?

**Aaron Hnatiw:** To answer the first question as far as how it went teaching it - teaching it was good. I was teaching developers; they were a group of third-year programmers, so they had some of the basics; I think they had done a lot of work in Python before, Java as well, so they had some of the basics and fundamentals down. It was just a matter of teaching them -- the approach that I took was forcing them to learn a lot on their own, because as we know, when you're in software development (and InfoSec especially) you have to teach yourself a lot. So now that they knew the basics, what I did was I pointed them towards a few resources, like the Go Tour, which is fantastic, and giving them a few books on Go.

I think the one that I used in the course was The Go Programming Language by Donovan/Kernighan. Now I think both Brian and Erik have both put out as well... There's so many out there, there's a ton of resources. So I pointed them to the right resources and then guided them through using it in real applications, and I think that was the real key point - giving them projects where they had to actually build things in Go. Starting out easy, but being able to tie that into really useful, interesting things like building a fuzzer in Go, or writing a deliberately vulnerable web application where it was vulnerable to something like SQL injection.

I gave them something interesting to work on... This is how I've always approached learning a language - finding a project to build on, and I think by doing that with them, it made it a little bit easier for them. I wouldn't say it was super easy for them to pick up, but having those resources and then being able to answer questions to them was really valuable for that.

The second question was how it compares to using something like Python for InfoSec...

**Erik St. Martin:** \[00:08:07.03\] I'd like to hear that from a more generic perspective, because a lot of InfoSec people use Python, and I think a lot of that is they can do things like HTTP servers and things like that significantly easier, and I think the standard library that Go provides makes a lot of that easier. So I'm really interested in both that learning example and just in the broader area of developing security tools... Because most of it is developing one-off things, right? A lot of people build scripts and stuff they reuse, but a lot of times it's just one-off things, and I'm really curious myself too, to follow up on that - how you feel about using it to write those tools, in place of Python.

**Aaron Hnatiw:** There's no doubt that Python right now in most cases is the easier choice and the better choice because there is a ton of libraries out there right now that support Python for security. But the thing is Go is getting to the place where there's more support for that... A lot of the work that I've done to this point has been mostly with the standard library, and it's entirely possible; it's one of the things I love about Go - it's possible to write full applications and even scripts just using the standard library. But as more and more libraries come online and packages become available and more people start contributing to Go from the security world, it's going to get a lot more use and it's gonna be a lot easier.

Right now I would say it is more difficult for most things, because you have to really do it almost from scratch, you have to do it from a much lower level, but it's not impossible, and I think once you get the basics and once you start to learn what's available to you in the standard library, then it becomes easier.

**Carlisia Pinto:** So you're saying that part of the difficulty is having to write things from scratch, but it's more difficult because people are not aware of the functionality in the standard library? Because it's such a common thing for Go developers to want to always build things from scratch, and they find that there are a lot of benefits from that.

**Aaron Hnatiw:** Yeah, if you're coming from a developer's standpoint, I would say it's a lot more fun to do that. You get to understand the language a lot more. That's one of the things that I've benefitted from in writing Go - I've gotten to understand how it works at a much lower level, because I'm diving into the source code of the actual standard library more than I would have done in any other language. So I'm learning a lot more about Go in the process, but I think the problem comes in where a lot of people that are in security are not necessarily developers, they don't have a developer background. A whole separate point is why developers would make good security engineers and good pentesters (I can cover that later), but the reason why I think it's harder is because, like I said, a lot of people in InfoSec don't necessarily come from a software development background. For me, I do, so I enjoy doing that, and I think that's one of the things that's made it easier for me. But I think a lot of people want -- Erik's right, there's a lot of one-off scripts, and if you can do something quickly using another library, then it makes it a lot easier. That's something that I think we can contribute more to, and what I'm trying to do is help build more of those things, but there's only of me and there's a lot that needs to be done... So I would say that if you wanna contribute to InfoSec from the Go side of things, start looking at what Python libraries are available.

Beautiful Soup was one that was made in Python (it was pretty big) for scraping web content. I know that recently there was an open source version of that in Go that I looked at. There's a major package called Scapy that does low-level packet manipulation in Python, and there may be something out there (but I haven't found it) that does similar things, but if you can build something like that in Go, to do easy low-level packet manipulation, then that would be -- that's probably one of the most heavily-used libraries in InfoSec, when we're talking about developing.

\[00:12:19.20\] To answer your question, it's hard because of the lack of libraries, because not a lot of people come from a development background, but if you do come from a development background, it's awesome and you'll learn a lot doing it, and you just get better over time. It's the same with anything.

**Carlisia Pinto:** That makes total sense.

**Brian Ketelsen:** Speaking of the background thing - one of the things that stands out when you were talking about how you got into this is just the breadth of your background. Do you feel like there's room for somebody to just come in and start learning about InfoSec and security, or do you feel like having that really broad operations and security and programming background is required, or just helpful?

**Aaron Hnatiw:** There's no doubt that it's helpful. The way I look at it -- I get asked all the time, "How do you learn to hack?", it's kind of the most common question that I get, and the answer I always give is hacking is really understanding a technology or understanding how something works so well that you can find ways to abuse it or ways around it that other people haven't thought of. You don't need a deep operations background to do that, you don't need to have done a lot of development to do that; you just need to start somewhere that you really wanna understand more, and dive into that and start looking at it... The most fun part is looking at applications like you're an attacker; look at an application or a technology and say "If I was going to attack this, what would I do?" The three things you wanna really look at is - it's called "the CIA triad" - confidentiality, integrity and availability. So if you can look at breaking one of those three things in an application, if you understand it well enough, you'll probably find a way to break it, regardless of your background. It's just a matter of diving deep into something to understand it well enough that you can find a way around it.

**Erik St. Martin:** And I thinks sometimes it comes down to -- you know, you fuzz things a little bit and then understanding why it broke. If you can reproduce it breaking, then you can usually exploit that, but you have to understand why it broke, so that you can use that to your benefit.

It's really for people who love deep diving into stuff, and "Why does this work?" and things like that. It's a lot of fun, though.

**Aaron Hnatiw:** Yeah, and that's why I think developers love it, or developers could be really good at it, because I think every developer I know who's really, really into it, you have to keep learning, you have to dive deep into a technology all the time, and that's really the same basis for InfoSec.

**Erik St. Martin:** I think it takes a creative mind, too. When you understand alll the pieces and how they fit -- it's almost like solving an engineering problem or troubleshooting some issues... If you understand how it's supposed to work, you can figure out the point of attack and how you can sneak around, using it the way it's supposed to. And for anybody who wants to just try their hand at it, there's a bunch of sites for that stuff: vulnhub.com has vulnerable virtual machines that you can attack, and if you need a little help, there's usually walkthroughs for those. I think OverTheWire has some from like a Linux systems' perspective, where you try to attack permissions issues and things like that.

I'm trying to think if you wanna get into reverse engineering, there's a few sites for \[unintelligible 00:15:48.02\] stuff, too. But I think everybody should try their hand at it, just to kind of understand the perspective an attacker comes from.

**Aaron Hnatiw:** Yeah, and you're totally right when you say it's just like an engineering problem, or an engineering challenge. The way I look at it a lot of the time is it's a game, it's a really fun, deep, technical puzzle that you have to solve, and there's a ton of resources out there to practice it. That's really how I started learning...

\[00:16:17.18\] Way back in the day, people started learning by essentially doing criminal activities, where you're hacking into things you're not supposed to be hacking into, but you don't have to do that anymore.

The way I learned was I basically set up a virtual lab using a VM or a virtual box, and I would have three VMs going at once. I would run an old version of Ubuntu, I'd run maybe an old version of XP, and then -- there's also a few other virtual machines that you can use... There's one called Metasploitable, there's one called Mutillidae... There's a couple other ones out there. There's a ton of different deliberately vulnerable VMs you can go and attack, and that's what I did. You learn how to do it through doing it.

If you want more of a collaborative environment, there's essentially games called "Capture the flags." I can get into that more, but it's essentially a hacking game, or a hacking competition, and they're held all over the world; you can access them online. There's a website called ctftime.org, and it's essentially a location where you can find where all sorts of active "capture the flag" games are happening and you can sign up for them. That was another way that I learned a lot of about security, through those competitions.

Those competitions are good because they teach you how to think like an attacker, they don't necessarily teach you as many real -- some of them teach you the real applicable attacks you can use, but a lot of them are about really tough challenges that force you to think the way an attacker would have to think. So there's all different ways to actually learn on your own through those \[unintelligible 00:17:54.24\] services as well.

**Erik St. Martin:** I think it's interesting though too, because there's a lot of similar aspects when you think about learning engineering, where you go down these avenues, and maybe it doesn't get you to what you're trying to build, but you've learned a lot in the process. I think information security is the same way - when you're trying to attack something, being able to identify that you're chasing a red herring... It's easy to lose a ton of time, because something looks like that's the way, and it's actually much easier, so being able to kind of step back and take a fresh look. Yeah, it's so much fun...

I kind of have a question too, because you border these two worlds, right? You've got an information security background and a development background, and I'm really interested on your perspective about how those two worlds meet. From my standpoint, the way I see it is there's a lot of information security people talking to information security people, and there's a lot of programmers taking to other programmers, and I don't think there's a lot of cross-pollination between those two worlds. It's constantly the other side feeling like the other side is evil, they're the enemy...

In the security world they wear their programming abilities like a badge of honor. The first thing almost every security person says when they get up on stage is "I know my code is crap, but..."

**Aaron Hnatiw:** Yeah, so bridging the two worlds - I mean, do you have another two hours to talk about this? \[laughter\] It's an issue that I think a lot of us have seen. I'm fortunate in that I have that background to be able to speak to developers and not be intimidated. I think part of it may be an intimidation thing, because both fields are really deeply technical, and really specialized.

\[00:19:58.07\] Stepping back, part of my role and part of what I do is I go to conferences and I speak about security, but a lot of the conferences that I go to are security conferences and I'm not alone in doing this. A lot of us are going to the echo chamber that is the security world and saying "Hey, these things are broken, we need to fix it", but not a lot of people are going to other platforms, so speaking to developers, going to a Linux conference, or going to another conference where you have people that aren't necessarily in security and teaching them about security... I think that's something that is lacking. If we were to do more of that, for example coming on here and being able to speak to a whole bunch of developers about security is an honor and it's really I think a good opportunity to educate people about this, because the people that are implementing security aren't necessarily the security people. People implementing security are people in operations and development, mostly. So those are the people that need to know a lot more of this information than necessarily those people who are almost siloed in the security team.

So as far as how to approach that - it's a tough challenge. What I found in work with a lot of clients has been the most effective thing I can do is have conversations with individual people, individual developers about security and just answer their questions and get them a little bit interested in one little area of security. Developers are a curious group, InfoSec people are a curious group. If you teach and you get them excited about one little thing, from there that spark ignites something more and they start to grow on their own and start to learn on their own, and I think that's one of the most effective things that you can do in an organization... Not siloing security in the security team, but teaching a little bit at the time to different people and getting them interested. From there -- developers are smart people; operations people are smart people. If they have that interest, they will find a way to learn what they need to learn, and way more than you can just teach them sitting down, spewing information about InfoSec. So if you just give them the basic information, I think that is a really good way to start, because they'll lead themselves down the path to learn more. That's the way I found is the best way to cross over.

**Brian Ketelsen:** I kind of wanna argue a different point of view on that just a little bit. I agree that developers are really smart people, but I also think that developers are overloaded with all of the things that they already need to know, like how databases work and how to index things, and how networks work... Adding security is yet another thing that makes it hard to be successful as a good engineer. Have you thought about ways to make security easier for developers? Are there things that you thought of that we can do as a security community, as a developer community to make writing more secure software easier, other than the obvious things like garbage collection and safe memory access? What are the things that we can do as a group to make applications more secure?

I keep looking at these news articles about all these compromised machines across the globe, and thinking that that's a failure on our part as developers in whole, or as companies, as businesses even, to secure software.

**Erik St. Martin:** I think that that's also a management problem too though, right? Because it's not part of the lifecycle, and I think that engineering and security are two different hats. Even if you possess both skills, it's very hard to look at the problem in both ways, right? I think there's time developing features and then I think there's time kind of really going over your code in a meticulous way, looking for potential attack factors.

**Carlisia Pinto:** Before Aaron answers, I wanna throw one perspective... I've been sitting here and thinking about security and thinking "Oh my god, if I had to learn enough about security to make an application thoroughly secure, it is so much..." Like Brian was saying, we have to know so many different things. And the context switching, like Erik said - you have to look at things from a totally different perspective to think about security.

\[00:24:09.20\] I was sitting here, thinking I am surely glad the place where I work now, they have a security team (like many companies do) and there is an audit process. So at some point in the software development, once it gets close to being ready for production, it goes through this audit. For me, it's like "Yeah, great! Find out all the problems the software has, tell me and I'll fix it." But having to know a lot more about security than I do - it's burdensome, I think.

**Erik St. Martin:** Security is a really broad world, and I'll let Aaron speak to this as far as red teams and how involved that is, how many people there are with specialized skills when they do that... But I think when we talk about engineers, I think we're talking about a surface level of security. The better majority of things that happen are usually the trivial things. It's SQL injection, it's unsanitized inputs; especially for PHP, it's local and remote file inclusion vulnerabilities, and these are really easy things to catch. I think that most of us are aware of what they are, right? I think if you were asked a question in an interview, like "What is SQL injection?", most engineers could describe what that is. But I think having the time and actually exploiting a cross-site scripting vulnerability or a SQL injection vulnerability starts to make you aware of how it's used, and I think it makes it easier to catch.

**Aaron Hnatiw:** I think the point that you bring up about having the basics covered is really important. It is intimidating to think about all of the things you need to think about to be an expert in security, to know what different kind of vulnerabilities there are out there... And I'm gonna let you know a little secret - no matter how much you catch, there's always gonna be something there. I don't think it's possible to have code that is completely secure, unless it's maybe one line, developed in isolation, and has no callouts and no inputs. It's almost impossible. I don't think you can necessarily lose sleep over that. You have to look at it from the basics perspective, and then from there, I think what a good security person will do is understand -- because the way to make something the most secure is to make it not functional at all. You have to have a tradeoff.

A good security person will look at something and understand the business risks and understand really what it's trying to do, and find the best way to put the most security measures in place. But some of the basics -- I mean, I can go over some of the basics you should probably know, as a reference, to cover the basics.

I think three main things stand out that you can easily do and keep in mind when you're developing something, and then you're covering a substantial amount of vulnerabilities. The first one is the patch. Just make sure your libraries are up to date as much as possible, especially if there's a security vulnerability. So just be aware that the latest one is probably going to be the best for that. It's not always possible to keep things up to date, I understand that. In an environment where you have so many dependencies, sometimes upgrading is not an option. From there, there's other mitigations you can put in place - put something in front of it, or try to learn what the exact vulnerabilities are and find out the ways of mitigating it. So patching and keeping things up to date is probably one of the most important things and one of the easiest wins you can have. That applies to operating systems as well, and applications and libraries.

The second thing - and probably the most important thing - is input validation. Understanding that the input that you're getting from a user is what you think it is, and checking that on the server, rather than on the client. Because client-side control can be bypassed very easily.

\[00:28:01.24\] In a browser, if you use a proxy like Burp or ZAP you can intercept the request, change the data after it's left the browser, and then send it on and it completely by-passes any kind of client-side input validation. So checking that the information that you're getting is what you think it is, and not some malformed input like a super long string to get a buffer overflow, or negative numbers when you don't expect negative numbers, or special characters that you don't expect... The best way to do that is to use a whitelist over a blacklist.

The difference between a whitelist and a blacklist means -- a whitelist is looking for a set number of things that are allowed, whereas a blacklist is looking for a set number of things that are not allowed. The number of inputs that can be allowed through is significantly less when you use a whitelist, so you are much more aware and you're much more in control about the data that comes through, as opposed to with the blacklist... Where there may be a ton of things that you haven't even thought of that could come through and could get around your validation.

So input validation is probably the most important, because really any vulnerability, any exploit comes from user input. If you can control that, if you can find some way of mitigating that, you could probably reduce at least 50% of the vulnerabilities that you may have in place, which is huge.

The third one is output encoding, and this is more of a preventative measure. When you're outputting data onto a web application, for example, if you encode it with HTML encoding, for example, by doing that you will then reduce the likelihood of something like cross-site scripting, which is essentially when an attacker can get Javascript to run in a client browser through input they provided. So if you can encode those characters, then it won't look like Javascript and it won't execute like Javascript, it will just look like a string of gibberish, almost.

So doing patching, input validation and output encoding are three of the biggest things. There's a few other things that I can just briefly mention, in case you're taking notes and you want some more depth... One is hardcoded credentials in API keys. I think probably like four months ago it showed up on Hacker News that you could just do a search for password in Git pushes - you search that and you find thousands and thousands of Git commits that had a password in it, or had someone mentioning a password, or taking a password out of their application. So having those hardcoded credentials, especially in open source software, is trivial to find, and then someone could take that easily; they don't have to have any skills, and they could just access your machine. So making sure you have a safe way of passing up strings and secure information and secrets to an application is important.

Then two other key things is authentication and authorization, so making sure that people are doing the things that they should be doing, and they're allowed to do that and they're gated from doing things they shouldn't be doing. Then the last key point is encrypting data arrested in transit; making sure that you're using a TLS over the web, you're implementing a security certificate. Letsencrypt makes it super easy to do that now. And then encrypting it at rest, so using proven crypto, like AES or Bcrypt for hashing - just some examples.

I know that was a lot to take in, and I'm sure that a lot of people are probably gonna go back and review over that... But if you can just cover those things, just keep those in mind as you're developing, I guarantee you'll reduce at least 90% of the vulnerabilities that can be introduced in your application just from those things alone.

**Brian Ketelsen:** How about my favorite one, which is don't roll your own crypto? \[laughter\]

**Aaron Hnatiw:** Number one rule in crypto: don't roll your own crypto!

**Brian Ketelsen:** Yeah... Please.

**Carlisia Pinto:** I was gonna say, what you just said, that list, it will make a great blog post.

**Aaron Hnatiw:** Absolutely. I might do that.

**Carlisia Pinto:** Yeah, if you do it, make sure to share it with us, and we'll share it with everybody.

**Erik St. Martin:** \[00:32:00.26\] These are kind of generic from any programming language. How about - since you've had some time in Go, how about Go? What are some attack factors that exist in Go, or what are some areas where Go saves you from yourself?

**Aaron Hnatiw:** So Go is pretty good at saving you from yourself, especially on the web side. The number one thing that I've seen that makes it a lot easier to defend against attacks - and I had my students go through using this as well - is HTML templating in the standard library. It provides automatic output encoding on your HTML pages; I'm pretty sure that most of the web frameworks out there now are using templating - it would be kind of a waste of time not to - but the default HTML templating does open encoding for you, which saves you a lot. And output encoding isn't just for client-side, it's also applied to when you're passing data into a database, into like a SQL database in the back-end.

One other thing that Go does for you, if you're using a lot of the SQL packages that you can use -- they have the concept (actually, they all should have this) of parameterized queries. What that means is when you're passing data into your database connection, when you're sending a SQL query, you're not just simply passing data that a user provides and adding it directly into the SQL query, so concatenating it into a string... By doing that you're essentially allowing an attacker to make whatever SQL query they wanna make on your database, and if you return that data into the application in some way, then they can see sensitive data, or they can even just drop all the tables. There's a classic xkcd comic, it's called Bobby Tables... If you look that up you'll see a funny example of SQL injection. So that's really good for that.

**Erik St. Martin:** You know, one of my favorite things learned in SQL injection was for years I understood SQL injection and getting content back on the page or inserting data, logging in using SQL injection, but the one that really blew my mind when we talk about the creativity of a hacker is blind SQL injection... I'll let you describe how this works, but it's just amazing that people can just use things like SLEEPs and enumerate data...

**Aaron Hnatiw:** Yeah, so blind SQL injection is like a whole other level of SQL injection attacks, and it's more common nowadays because there's even better SQL protections in place by default in most languages. So a blind SQL injection, like you referred to, is using ways -- so when you don't have immediate feedback as to what the results of your SQL injection was, you have to find other channels to determine what happened.

A perfect example is people use timing attacks. So if you make a SQL request where you pass in data that results in a SQL injection, it will return back in a certain amount of time fairly consistently, on a normal request. But if you were to inject a SLEEP command, and then suddenly the application takes ten seconds or however long you specify longer to actually return back to you, then you know that you've gotten a SQL injection and from there it's a matter of mapping it out.

There's a really useful tool -- I don't know how many people actually do manual SQL injection anymore, because it's so complex and there's so many good defenses in place now, but there's a tool called SQLmap that does this automatically for you. It's got a lot of really good options, but it essentially enumerates what kind of injection vectors there are and tell you how vulnerable it was, what kind of strings will result in an injection attack, things like that. It automates a lot of it for you, and most of the people that I know that do SQL injection will usually start with something more manual, like doing a SLEEP command, for example, and then once they find that there's something there, then they'll throw a SQL map at it and get some more detailed output... Because there's just so much to know when it comes to SQL injection. I'm sure there are a few experts out there, but it's a lot.

**Erik St. Martin:** \[00:36:12.12\] There's also a newer tool called NoSQLmap that is for like MongoDB and things like that, too.

**Aaron Hnatiw:** Oh, nice.

**Erik St. Martin:** To kind of go more in-depth about the blind SQL attack, an example of that would be -- most of the time when you see a SQL injection you'll see where people try to login, with a username, and they'll put their parenthesis and stuff, but basically you could do where a username like a percent sign, and then you could do a SLEEP. Then basically you'll go through and you're like "Oh, C slept for five seconds. I know it starts with C. Let me move to the next character." The fact that somebody had that creativity blew my mind.

**Aaron Hnatiw:** It's really crazy. One book I'd recommend for anyone that's interested in web application security - I would say this is probably the standard book you can reference... You don't even need to read it from cover to cover, just using it as a reference is important; it's called The Web Application Hacker's Handbook. It's really good and it covers a lot of these topics in depth that you need to know for web-specific security. So if I can make a recommendation, I'd make that one.

**Erik St. Martin:** I don't think I have that one.

**Aaron Hnatiw:** It's really good. I think it's at the second edition now.

**Erik St. Martin:** Yeah, most of those books are in like their second, third, fourth edition. It's like the same problems keep repeating themselves.

**Aaron Hnatiw:** Yeah. It's just that it evolves so much and so quickly over time... That's one of the things I love about it - it's a constant game of learning and cat and mouse, but because of that it's hard to have a standard paper book as a medium nowadays, because it's so fast.

**Erik St. Martin:** Before we kind of close out on this, there's a couple of things I'm interested in... Do you think that the nomenclature between the sides helps create that kind of polarization? You know, "red team vs. blue team", it kind of creates that tension between the sides? Do you think there's a way that we can change that? Because it really does feel like a game, right? Like, you versus them, and that's not really how I think we're going to evolve. I think that becoming team members is more important.

**Aaron Hnatiw:** That's a really good point. It's funny you bring that up - that's the thing I'm researching most right now. There's a term that covers this movement towards integration of developers, operations and security, and it sounds very buzzwordy, but...

**Brian Ketelsen:** It's the dumbest term ever. \[laughter\]

**Aaron Hnatiw:** I know, I don't necessarily agree with the term; saying it, I feel... Anyways, it's called DevSecOps. The way I look at it, it's just an integration between those three groups. The idea is to have developers, operations and security work together in a lot more ways. From what I've learned when I'm working with clients with this is the top two ways to do that is through automation and through education, as well. There's more to it, but basically, by automating things you can make it easier for developers to not have to worry about security as much, or to fix things more easily, and that's kind of where the DevOps movement comes in - automating a lot of the common tasks that you're gonna be doing.

There's no way that you can automate everything; I really don't believe that at least in the next 5-10 years everything will be automated away in security, because things are changing so much and there's so much room for creativity... But there are certain common things that you can automate, even just doing regular expressions, looking for common mistakes or looking for SQL strings that have a plus character in it for concatenation. Simple things like that make it easier to move quickly and to not have to worry about security as much.

\[00:39:55.24\] And then where the education standpoint comes in is -- there's a few approaches to this. One is like a Security Champions, so to have an individual in each team represent security. There's also center of excellence, where you have one security group where they then disseminate information through the organization. Adobe has a belt program... There's all different ways that people go about doing it, but the idea is essentially that you are sharing information about security actively with your developers and operations team, so that they are able to at least understand it a little bit more. Not necessarily as thoroughly as like a security expert will, but at least they have the basic understanding.

That's where things like the OWASP top 10 comes in handy, which is the top 10 most common security vulnerabilities on the web. It's a little older, but it's the SANS and CWE top 25 most dangerous software errors. There's a few lists like that help, but coming back to DevSecOps (the buzzwordy term), it's the idea of joining all three together, and doing it as very unique to an organization. Essentially, it really revolves around automation and education.

**Brian Ketelsen:** So there's one thing that I wanna add in terms of automated help... HP Labs released an app called Gas that's included in gometalinter, and it's truly my favorite in terms of automation. Gas lets you check your code in an automated fashion against several types of vulnerabilities and known insecure things, and you can tweak which tests it runs. I highly recommend it if you're gonna have an application in production that you run Gas in your CI, in your tests suite before you put it into production. I've found that it's got some pretty decent defaults in terms of security, and it catches things like using string concatenation in your SQL queries, and things like that. I like Gas a lot. That came from HP Labs originally, but I think they've put it under its own domain. It's on GitHub now at github.com/goASTScanner/gas.

**Carlisia Pinto:** We need a link for that, Brian... Please.

**Brian Ketelsen:** Okay.

**Carlisia Pinto:** And Aaron, so if I'm an engineer, and we only have so much to keep up with, but if I do want to learn at least to make sure that I'm doing the basics, and I wanna do a little bit at a time, like I don't wanna go do a project, what recommendations would you have?

**Aaron Hnatiw:** I think one of the obvious answers to me right now is -- there's actually a product at Security Campus made just to solve that problem. I don't know if there's anything else out there right now like that, but what it is is it's called SD Elements. Think about it as a software security requirements checker. So you give it a list of what you're doing - it's a web application written in this language, let's say Java, and it has these kinds of users. You give it those requirements, and it basically gives you a checklist of things that you need to know as a developer to write things securely.
There's also things like -- the OWASP top 10 is probably another really good resource, because it's giving you just 10 things that you should keep in mind when you're writing web applications. There's more to the OWASP, there's more than just the OWASP top 10, but it's a really good start, and if you had those fundamentals, then it will cause a huge improvement in your security. So I would recommend those two things just to start.

**Erik St. Martin:** I think a lot of that stuff is almost from a blue team perspective. I think what Carlisia might have been hinting at, if you wanna kind of be more aware of the red team angle and maybe educate yourself to attack these vectors, but had minimal time to invest in that training... Is there kind of like any recommendations for places to start?

**Brian Ketelsen:** \[00:43:59.27\] I also wanted to point out that there is a Go specific OWASP book at [GitHub.com/checkmarx/go-scp](https://github.com/checkmarx/go-scp). I have not read this yet, but I have heard of several people who have and found it to be a pretty decent guide as to following OWASP standards from a Go app. So if you do read it, let us know what you think about it.

**Carlisia Pinto:** Nice.

**Aaron Hnatiw:** Yeah, I read through the first part of that, it's actually pretty well done. It did cover a lot of good, specific Go \[unintelligible 00:44:28.14\] security issues that you need to be aware of.

**Erik St. Martin:** And there's a new book that's being worked on called Black Hat Go.

**Carlisia Pinto:** Oh yeah, I saw that. I bought it, actually. I just didn't wanna miss it.

**Aaron Hnatiw:** Yeah, I've already pre-ordered mine.

**Carlisia Pinto:** Yeah, I wanted to make sure I didn't forget about it.

**Erik St. Martin:** I didn't know that they were selling it. I've reviewed a couple of chapters for them, but I didn't realize it was for sale.

**Carlisia Pinto:** It's in pre-order, they don't have anything to give yet.

**Aaron Hnatiw:** I'm also doing a technical review of that as well.

**Brian Ketelsen:** Nice.

**Erik St. Martin:** Awesome!

**Aaron Hnatiw:** So the question that Carlisia had - if I'm getting it right - was "What's something that you can do fairly quickly to understand security a little bit better so you can develop a lot more securely?", is that correct?

**Erik St. Martin:** Let's kind of frame it as you're an engineer and you're trying to become more red team, but you don't have a lot of time to invest in that... Like, book recommendations or something.

**Carlisia Pinto:** Alright, I'm gonna be annoying. Wait, I'm gonna be annoying.

**Erik St. Martin:** Go ahead.

**Carlisia Pinto:** Let's define red hat...

**Brian Ketelsen:** Red team.

**Carlisia Pinto:** Or team...

**Erik St. Martin:** Oh yeah, I think we said we would come to what those were, but I don't think we ever defined...

**Aaron Hnatiw:** Yeah, this is a problem in InfoSec, because we use terms all the time that we understand, we use them in everyday conversation all the time, we throw out terms like red team, blue team, even purple team, assuming that people know what it means, and it's the same in any deeply technical field; that happens all the time. So the idea of red team, when you're talking about -- so there's two different ways that red team is used.

One is the term of the offensive side of security - red team. Blue team is the defensive side of security. It comes from the military term where they would do simulations or they would do practice attacks, and the red team would be the attackers and the blue team would be the defenders.

There's also a practice called red teaming - and this is I think what Erik referred to earlier... The idea of red teaming is doing a full simulated attack on an organization, on an environment, with the particular goal of, for example, getting to database admin, or getting HR records. The idea is you're essentially emulating an attacker with no holds barred, and doing everything that an attacker would.

I've done a number of these assessments myself, and what it essentially involves is let's say you have an organization that you're choosing to attack, and you use means that are technical, social engineering as well comes into play, so you're tricking people into doing things for you, or giving you information... There's also a physical side of things; you will physically break into buildings or pick locks, things like that, and all of it really is around emulating a real attacker, someone who wouldn't be held back by needing to come in between 9 to 5. So that's another way that people use red teaming, in that specific type of attack.

**Erik St. Martin:** And I think to feel better about the breadth of security knowledge, those red teams are usually composed of multiple people - there's a web guy, there's a Wi-Fi guy... Usually they'll reverse-engineer depending on what's being attacked. So no one person kind of encompasses all of that knowledge. There's just too many attack factors to be familiar with.

**Carlisia Pinto:** \[00:48:07.25\] So what is the difference between red hat and red team, and blue hat and blue team, black hat, black team? I don't know if there is a black team.

**Aaron Hnatiw:** What you're probably thinking of is white hat/black hat.

**Erik St. Martin:** And grey hat...

**Aaron Hnatiw:** Grey hat, yes... If we wanna talk about grey hat, if that's even a thing... \[laughs\] The difference is the idea of -- it takes the term from those old cowboy movies, where usually the good guy would be wearing a white cowboy hat, and the bad guy would be wearing a black cowboy hat. So usually when you're looking at a hacker, a malicious attacker would be a black hat, whereas someone who's doing security for the good guys, protecting an organization, is usually a white hat.

There's the term grey hat, which people can argue as a thing, but I think it's just... You know, the idea is to do things that maybe - it's almost like chaotic neutral - could be illegal or could be attacks, but you're doing it for good reasons. It's that middle zone where you're not really sure whether they're the good guy or the bad guy.

**Erik St. Martin:** I guess a good example of that would be you possess hacking skills and you're constantly looking for vulnerabilities in sites that you don't have permission to do so, but you're reporting to them. So you're hacking in the sense that that's not legal, you don't have permission to do that, but you kind of are trying to do it for your own righteous cause. I don't know whether hacktivism falls into grey hat. I think that's too far on the black side.

**Aaron Hnatiw:** Yeah, so what you're referring to is now -- I think it's a \[unintelligible 00:49:46.25\] I think that was what it was originally, how people referred to it. Now most people that do that call themselves freelance security researchers; what's more common is they're involved in bug bounty programs. It's transitioned to a model where -- a bug bounty program is a way for an organization to open up an application and set specific guidelines around the ways that can be attacked, but they open it up for attack to anyone, as long as they follow the rules of like "This thing can't be touched." As long as you're not doing denial of service attacks, everything's open. If an organization opens up their application or their system for doing that, then anytime someone submits a bug to them, a security vulnerability, they will be then rewarded with swag or with real money. There's a few big players in that space - there's HackerOne... Sidenote - HackerOne actually has a couple of really good resources if you wanna learn more about security and bug bounties. It's a really good way to keep up. They have something called the Zero Daily newsletter, which as it sounds, it's a daily newsletter for security, which is showing just some of the latest bug bounty reports.

Then there's also HackerOne and Cobalt.io is another one. Those are kind of the main players in the bug bounty space. It's a way that people practice it in a legal way, but people still do it in that grey area where they're finding problems and they're submitting issues. The problem is an organization technically could issue a legal action, and it has happened many times; that's where it becomes problematic, and there's a whole other debate around whether that should happen or not, but I think that's kind of what you were referring to, Erik - people doing research and finding these things and submitting them, and that still does happen.

**Erik St. Martin:** Any questions before we move on to our projects and news?

**Brian Ketelsen:** I think it's time.

**Erik St. Martin:** Carlisia, any follow-up questions?

**Carlisia Pinto:** No, just... If Aaron could drop a link eventually for that tool he mentioned, the developers \[unintelligible 00:51:54.19\] do a check of all the things they're doing and get a recommendation.

**Aaron Hnatiw:** Sure. Yeah, I'll do that.

**Carlisia Pinto:** Thank you.

**Aaron Hnatiw:** \[00:52:04.19\] No problem. And I should note that if anyone has any questions, there's so much that can be covered and I could probably be on here for another three hours and talk about security to help discuss what the issues are... But I'm open if anyone wants to reach out to me at any point in time. I'm sure we'll post my Twitter in the show notes, but I'm always open to talk and I wanna help people with this. There's a lot to know, and I feel like sharing what I know is a way to help improve that, so don't be shy to reach out.

**Carlisia Pinto:** And are you going to be at GopherCon?

**Aaron Hnatiw:** I so badly wanted to, but I have to be at a wedding that day that my wife's actually involved in the wedding, so I couldn't get out of that one.

**Carlisia Pinto:** Oh, that's a bummer...

**Brian Ketelsen:** That's a pretty poor excuse...

**Aaron Hnatiw:** I tried... \[laughter\]

**Brian Ketelsen:** I'm not buying that. Just because your wife has to be at the wedding doesn't mean you need to miss the greatest conference on Earth...

**Aaron Hnatiw:** I know, I know...

**Carlisia Pinto:** The only people we forgive for missing the conference is people who are actually getting married that day.

**Brian Ketelsen:** Or giving birth, that's also a good one.

**Carlisia Pinto:** Yeah, giving birth as well.

**Erik St. Martin:** So is your wife in the bridal party?

**Aaron Hnatiw:** Yeah, she is.

**Erik St. Martin:** See, so if they have the bridal party table, you're not gonna stay there anyway... \[laughter\]

**Aaron Hnatiw:** That's a good point, maybe I'll use that on her. \[laughter\]

**Erik St. Martin:** "You're gonna be taking pictures, and you know..."

**Aaron Hnatiw:** "But honey, you won't even know I'm not there..."

**Brian Ketelsen:** That's right, "This is like the olympics for Go; how can you let me miss this for just sitting at some table with all of the other spouses?" \[laughter\]

**Carlisia Pinto:** If it's support you need, there's more where that came from, so just get in touch with Erik or Brian.

**Brian Ketelsen:** Yeah, just let us know, we're good at this; we've got years of experience.

**Erik St. Martin:** "Honey, it's 2017. There's Facetime." \[laughter\]

**Brian Ketelsen:** "We gave them a really nice gift from the registry..." \[laughter\] Alright, we better move on to news before we get ourselves all divorced. \[laughter\]

**Carlisia Pinto:** I was gonna make a comment, but never mind.

**Brian Ketelsen:** It's too, late, right? \[laughter\]

**Erik St. Martin:** Now, I'm interested... What was that comment going to be?

**Carlisia Pinto:** \[unintelligible 00:54:17.10\]

**Brian Ketelsen:** Go news.

**Erik St. Martin:** Right, so I saw an interesting article - I think it was earlier this week - called "Fencing Off Go" and it was based off of like a whitepaper. It's really interesting - I won't go into too much detail there; I'll put it in the show notes, but it's a lot of cool stuff in trying to find deadlocks and risk conditions in your Go programs. I'll drop that in the Slack channel now for anybody who's following along live... Anybody else have anything cool they've found this week?

**Brian Ketelsen:** Yes. First of all, Go 1.9 beta 2 was released, and that's big... Very, very big.

**Erik St. Martin:** So speaking of 1.9, what do we have coming in that? Aliases? Parallel compilation - that was something that's really cool.

**Brian Ketelsen:** Parallel compilation, that's a big one.

**Erik St. Martin:** I'm interested to see -- has anybody done any comparisons on compile time, now that parallel compilation is in there?

**Brian Ketelsen:** No, I'm actually cloning a fresh copy of Kubernetes this afternoon, so I can do a test with 1.8 and 1.9 just to see... Kubernetes is about the biggest Go app I can think of to download and compile, with each version.

**Aaron Hnatiw:** Isn't there support for ARM 64-bit as well on this one?

**Erik St. Martin:** I think it was PPC64...

**Brian Ketelsen:** I think it's ARM7. We've always had ARM-- well, not always, but we recently already had ARM 64... I think it's ARM7 that is new. But I could be wrong.

**Aaron Hnatiw:** I'll have to google it again later.

**Brian Ketelsen:** \[00:56:08.13\] We'll have to go look at the release notes.

**Erik St. Martin:** Yeah, we'll link to the 1.9 release notes in the show notes. I'm trying to think of anything else that was really big there... I think they implemented a concurrent map in the standard library.

**Brian Ketelsen:** Yeah, concurrent maps, and... Oh, and the big thing that this enables though is Go 1.8 on App Engine. So finally, Go 1.8 is in beta on App Engine; if anybody's got Go apps and have been frustrated by being stuck at Go 1.6.2 forever, now Go 1.8 is in App Engine, because we have type aliases. That's a big deal.

**Erik St. Martin:** Alright, what else do we have?

**Brian Ketelsen:** I found a package that I liked... I haven't used it, but it looked interesting. It's called GoRef, and it's at GitHub.com/mreithub/goref, and it reminds me of the package that I kind of did a proof of concept on, which was my Trace package, and that this is an invocation tracker; it tracks the execution times of your functions, it finds bottlenecks in your code, making sure all your goroutines exit properly, and it tracks all the calls to your HTTP endpoints. It was implemented very similarly to the way I did; the only difference in this one versus mine is that I built mine with context support. I wanted to go dig into this and see what kind of things I could learn to improve mine, because it looks pretty good. I'll drop the link to that in the Slack.

**Erik St. Martin:** I think other than that, we have a lot of conference stuff going on right now. GopherCon is in two weeks... if you're slacking, buy your ticket. GothamGo I think just started doing ticket sales, one of the other GopherCons just started doing ticket sales, too. DotGo has announced speakers, and Brian is one of them...

**Brian Ketelsen:** And same for Golang UK - Golang UK is announcing speakers, and I'm one of those, too.

**Erik St. Martin:** It's that time of the year, conference season.

**Carlisia Pinto:** Get ready for GopherCon Brazil. The CFP is not open yet, but it's gonna happen in November; they're selling tickets...

**Brian Ketelsen:** Can you guys hear that lightning? We'd better wrap this show up before we lose electricity again... \[laughter\]

**Erik St. Martin:** So are we ready for \#FreeSoftwareFriday?

**Carlisia Pinto:** I wanna mention a couple things... One, the \#GopherConOrBust hashtag on Twitter has been very sad.

**Brian Ketelsen:** It has.

**Carlisia Pinto:** The years before it was awesome; two weeks to go for the conference it was buzzing. It's very sad now, so people, start using it.

**Erik St. Martin:** I think last year it was because so many people started commuting there. You know, they were driving from Canada, and Brian drove up from Florida...

**Carlisia Pinto:** That is true. There was that big CoreOS bus. They're not doing that?

**Brian Ketelsen:** That was two years ago...

**Erik St. Martin:** Yeah, so for your commute to GopherCon, all your travels and preparations for GopherCon, \#GopherConOrBust is kind of fun. And mine will start a week from Monday. That's when I travel out there.

**Brian Ketelsen:** Really? Is it that soon?

**Erik St. Martin:** It is that soon.

**Brian Ketelsen:** Omg.

**Erik St. Martin:** So by the time this is released, it will be like only a couple days until we hop on a plane. Wow, that thunder is really going, huh?

**Brian Ketelsen:** \[00:59:46.06\] Yeah, we're in trouble. So I promised that I would announce my big news today, but I have to kind of couch that a little bit. I have accepted an offer at an exciting company, but they've asked me not to announce it until roughly next week, because they're getting a full-page ad for the New York Times together, and Washington Post and CNN. So I won't announce where I'm going, but I do have a very exciting new job. I could not be happier about joining the team. I can't tell you where it is yet. And that full-page ad thing was a joke, sorry. I heard no laughing... \[laughter\] But yeah, that was a joke. So you get to hang another week to find out where I'm going... Amazon whole foods.

**Erik St. Martin:** Putting your votes in. We need a Twitter poll. \[laughter\] Alright, so \#FreeSoftwareFriday. For anybody who's new to the show, every Friday -- well, we release these on Thursdays, but it started as a Free Software Friday, so we're keeping it that way. We just try to give a shoutout to a project or a maintainer, not necessarily Go-specific, but just to show to love... They don't always the good feedback, so let's praise everybody. There used to be a \#FreeSoftwareFriday on Twitter, I don't know whether people are still using it, but definitely do that, too.

**Brian Ketelsen:** I see some, but I haven't been leading the way either, so... Because we do it on the show; it's kind of overkill.

**Erik St. Martin:** Alright, so who --

**Brian Ketelsen:** I'll start, if you want. I've got a package that I've found over the last two weeks that I absolutely love. I think it's been pretty obvious that I've moved over to Windows, I've given up my Mac completely - I don't have any Macs left; I do have a single Linux machine left in my house, but it's not turned on anymore, so I'm pretty much 100% Windows at this point... And I've been using Windows Subsystem for Linux and the command prompt in Windows is getting significantly better, but it's still nothing like a really good Linux terminal prompt.

So I've found an app called WSLtty. It basically a bridge between Mintty - which is the nicest Windows command terminal thing - and WSL. It allows you to have what I would expect to be a decent Linux terminal prompt, but in Windows, and pointed at the Windows Subsystem for Linux. It has made me significantly happier working on the command line... So thank you to the WSLtty team. That's at GitHub.com/mintty/wsltty.

**Carlisia Pinto:** Alright, I'll go next - I've found this actually on the Go newsletter, it's called Goman. It's a tool to produce man pages based on the readme that you have on your repo, and especially for open source projects I think it's really cool. If you go to their repo readme page, they list other tools that are related... There is one called GomanGo -- gosh, I have to go there and see... But it will let you produce a man page based on comments that you put on your Go code itself. I haven't used it, but it looks really neat, and I do wanna use it.

**Erik St. Martin:** That's really cool.

**Carlisia Pinto:** Yeah...

**Brian Ketelsen:** Yeah...!

**Erik St. Martin:** Now, if I could just get a tool to generate Bash and Zsh completions for me automagically. I suppose you could do that if you use something like...

**Brian Ketelsen:** Ruby?

**Erik St. Martin:** Cobra? \[laughter\] So there's a lot of Go command line app tools, so you could do some static analysis...

**Brian Ketelsen:** \[laughs\] That was my dynamic language troll of the week... I'll step away from the microphone now. \[laughter\]

**Erik St. Martin:** How about you, Aaron, did you have anybody you wanna give a shoutout to this week?

**Aaron Hnatiw:** \[01:03:55.12\] Yeah, I'm gonna give a shoutout to Visual Studio Code, and specifically the Go plugin, because that is like -- I use it for everything related to Go: everything I write, everything I review, all done in there and it's really easy. I know you guys are heavy Vim users, and I've yet to make the jump, the leap over to it full-time, but for now it's Visual Studio Code.

**Brian Ketelsen:** Code is awesome. Did we release our episode with Ramya? We did, right?

**Erik St. Martin:** Yeah.

**Carlisia Pinto:** Yeah.

**Erik St. Martin:** Yeah, I haven't used VS Code, but I think people should use whatever they're comfortable in, whatever they're productive in. You don't have to kind of follow suit... If I hadn't been a Vim user for -- I don't even know now; it'll probably make me feel old thinking about it... I think VS Code looks really good.

**Brian Ketelsen:** You know, I have absolutely no problem jumping editors constantly. I use Visual Studio Code, I use Gogland and I use Vim. The only thing that I do is I consistently use the Vim plugins for the editor and the IDE when I'm in Gogland and Visual Studio Code, but they're both great editors. Visual Studio Code is just fast and it's light and it's easy to open, Gogland has all kinds of awesome, powerful features, and Vim is Vim. I have no problem jumping between them, and I don't feel the need to apologize.

**Carlisia Pinto:** Yeah. My policy is every two years I check out a new editor. A big thing with me is I have no problem being the user of a couple editors simultaneously; I'll use one for most things, but I'll use another one for things that that particular editor is really good at. There is no problem with that either. It's not a religion.

**Erik St. Martin:** I might make that my mission after GopherCon - do a two-week or a month stint with VS Code.

**Brian Ketelsen:** I highly recommend it, especially if you use the Vim plugin, which is really good for both Gogland and VS Code. You won't be sad about your muscle memory, but you'll get some really pretty tools. The code lenses in Visual Studio Code are gorgeous. I love those.

**Aaron Hnatiw:** The debugging is pretty useful, as well. It's got Delve built-in.

**Brian Ketelsen:** Yeah, debugging is for wimps. \[laughter\] Format.printline. \[laughter\] Actually, just printlines; I said format.printline, but if you use just printline in your debugging, then you don't have to remove an import when you're done debugging... So don't use format.printline, just use printline, with a lower-case "p", it's a built-in. \[laughter\]

**Aaron Hnatiw:** Good to know.

**Brian Ketelsen:** It's your tip of the week.

**Carlisia Pinto:** Stop trolling, Brian.

**Brian Ketelsen:** I'm not trolling. \[laughter\] A little bit... Much.

**Erik St. Martin:** \[01:06:49.17\] My \#FreeSoftwareFriday for this week is actually something that Target put out K8GUARD. It's really interesting, and for anybody who listens to the show, it's programming Kubernetes and InfoSec for me. So this is a Kubernetes thing, and it's basically something you install on your cluster and it works really great for clusters that have a lot of stuff, especially multitenancy, where there's multiple teams deploying multiple apps, and it kind of monitors the cluster for things that are running that have specific violations, on the size of the image, whether they're setting UID or GID, whether the containers are running privileged, whether you're mounting host volumes, whether there is only single replicas... Just kind of like a variety of filters on looking at things that are running in the cluster and kind of producing notifications about those.

So it might work really well for an operations team that's supporting multiple development teams, pods and stuff... And I will drop a link to that in the channel, and it will also be in the show notes.

**Brian Ketelsen:** Drop the mic.

**Erik St. Martin:** Alright, any other shoutouts before we close this thing out? Alright, I will take that as a no. So a big thank you for everybody for being on the show, especially Aaron - thank you for coming on.

**Aaron Hnatiw:** You're welcome, thanks for having me.

**Erik St. Martin:** This has been really great, and as Aaron said, he's available for anybody who has questions and wants to learn more about security and writing better code. We'll drop all of his contact details - home address, phone number...

**Brian Ketelsen:** His home address, his social security number... \[laughter\] Yeah!

**Erik St. Martin:** We get all of that before we put people on the show. \[laughter\] It keeps them in line.

**Aaron Hnatiw:** I forgot to send you the CVV code, I'll get that to you after. \[laughter\]

**Brian Ketelsen:** Thank you.

**Erik St. Martin:** So huge thank you to all of the listeners right now... You can find us at @GoTimeFm on Twitter, GoTime.fm online, and if you wanna be on the show, have suggestions for guests or questions, hit us up on GitHub.com/GoTimeFm/ping. With that, we'll see you next week. Bye, everybody!

**Brian Ketelsen:** Bye!

**Carlisia Pinto:** Bye, this was fun!

**Aaron Hnatiw:** Bye, everyone!
