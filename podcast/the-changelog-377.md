**Jerod Santo:** Dan, we're here to talk about Algo, the VPN that works... Before we do that, let's get to know you a little bit, and how you became part of the team that built Algo, with Trail of Bits. Tell us about yourself and tell us about your business.

**Dan Guido:** Yeah, sure. My name is Dan Guido. I'm the CEO and co-founder of Trail of Bits. We are an eight-year-old software security research and development firm, which means that we try to work on things that are unsolved problems in the field of computer security.

I founded the company with a few friends of mine back in 2012, and it's just grown iteratively, piece-by-piece, over the last eight years. We started off doing a lot of research for the U.S. government with DARPA. We added on an engineering team that built software on contract for people a few years back, and now we have an assurance team that does code reviews for people that are building software themselves.

Algo VPN really sits outside of all that. It's a little bit of a hobby project that I made somewhere in those eight years, that's kind of grown out of control and is now the most popular project that we have on our GitHub. I did not expect that.

**Jerod Santo:** It's funny how that happens.

**Dan Guido:** Yeah.

**Jerod Santo:** That's the tale of lots of open source software.

**Dan Guido:** \[laughs\] Yeah, I knew I had a winner when we put it out there. We don't really do any marketing behind it; I just put up a blog post. The number of likes on GitHub just exploded, to the point that -- you know, we produce software as a company, so there are dozens and dozens of projects, that much more talented developers than me have released as open source... But Algo VPN kind of blows them all away in terms of traffic, in terms of stars, in terms of GitHub issues... Every metric I could imagine.

So it's kind of funny that me, the guy who writes about a page of code a year now, is still sitting on top of the most popular project in the company.

**Jerod Santo:** Well, you struck a chord, and it's interesting with VPNs - they're something that existed I think entirely in the land of nerds like us, for many years, and have started to trickle out because of the mass need for security and privacy. VPNs are now mainstream, sort of, in terms of like the concept of VPNs.

Now, I did read that you used to teach a course at NYU on security, so you think educationally. How do you explain VPNs to neophytes? ...to the brand new, what's a VPN - how do you start there?

**Dan Guido:** Yeah, sure. Funny you bring that up - yes, I was an instructor at NYU for about seven years. They made me into the hacker in residence at NYU for a while; funny title.

**Jerod Santo:** Nice.

**Dan Guido:** \[03:58\] I got to do a lot of things there. I taught their Capstone course in software exploitation for a while, I taught about 300 kids how to write exploits (that was fun), and then I tried to represent their program to other random folks - that could be students, that could be sponsors, that could be people that hired those students for a long time. It was a really fun part of my career, but at some point I kind of grew out of it. I've lost touch with the kids these days... \[laughter\] So now I try to support people that are starting their own companies instead, which is a little bit closer to my current experience.

**Jerod Santo:** Gotcha.

**Dan Guido:** There's other folks at Trail of Bits that do a lot of teaching still, and I think it was really like a formative part of my past career. I got a lot out of it, and certainly a lot in terms of how do you explain something that people can understand when it's a complex topic like this one.

The really easy analogy here is that when you're talking to a website and you're not going over a VPN, there's a chance that what you're doing is you're kind of sending them a postcard. You've written some instructions about "Hey, Comcast, please send me the contents of such-and-such website", and you scribble it on the outside of a postcard and you send it through the mail system.

As that postcard goes through the mail system, every single person that handles it can read exactly what you requested. Not only that, but on the other way, when it comes back, somebody can read the response. That's open to abuse, and it has been abused, by a lot of people.

Sometimes people pull out their own pen and scribble some extra stuff on the end of it. Other people will tear off part of that postcard and send back only half of it. Then sometimes people are like "Oh, this is going to Dan?", and they'll strap a glitter bomb to it. \[laughter\] And then it'll show up at my house and I'll have to be cleaning for weeks.

**Jerod Santo:** Surprise...!

**Dan Guido:** Yeah. So a VPN is one way to ensure that at least a part of that conversation you have with a third-party is stuffed inside of an envelope. And not just any envelope, but a lockbox, like a safe. You're mailing a safe through the mail now. The other person you're speaking to doesn't have the key to it. Really, the person that has the key is somebody at the postal service.

That way, all the mail handlers -- like, the guy who delivers your mail, your mailman, can't read whatever you scribbled on that note now, but the person at the United States Postal Service can still open it up. They have to be able to, so they know where to send the contents of it.

**Jerod Santo:** Right.

**Dan Guido:** So there's not complete protection, but it's still pretty good. It's much better than just sending postcards to everybody all the time.

**Jerod Santo:** Yeah, protected in transit, definitely. That's a great analogy for laymen, and I think probably equipping our audience with ways of explaining these things to friends and family, of course. That being said, most of our listeners do know what VPNs are, in terms of conceptually how they are.

If you go down the stack a level and maybe get a little more technical and describe a VPN to a developer who's not very security-aware, or maybe your 101 students back when you were teaching at NYU - get into the nitty-gritty a little bit and explain how VPNs work.

**Dan Guido:** Yeah, sure. I mean, it's just protecting data in transit. It's a lot like -- if you know how TLS and SSL works, it's pretty much the same sort of thing, just at a different level of the OSI stack. Here you're protecting individual packets, and not like a higher-level HTTP communication, but we're using IPSec and we're using WireGuard inside of Algo VPN. In particular, we're using a suite of IPSec standards called IKEv2, which is the latest version of that standard.

WireGuard is itself the name of the code that implements the WireGuard protocol, so it's kind of got a little bit of an overloaded term there, but that's fine... But that's a brand new VPN protocol that was designed from scratch in the last year, by somebody who actually knows what they're doing, and isn't subject to a huge designed-by-committee kind of review, like the IETF or the IEEE, to put them through. So this is your benevolent dictator for life kind of situation.

**Jerod Santo:** Who is that person?

**Dan Guido:** \[08:00\] Jason Donenfeld. He really knows what he's doing, and he's had the code and the protocol for it reviewed by a lot of academics, by a lot of software security professionals, and he's been able to really whittle down the design to the minimum possible amount of code required to implement it as well, the minimum number of cryptographic components required to implement it... Which really is the kind of stuff that gets protocols like IPSec in trouble.

But this is a whole other tangent. Let's just talk about what Algo VPN is...

**Jerod Santo:** Sure.

**Dan Guido:** Algo VPN is a way that you can gain access to these industry-standard VPN tools for yourself. It's a set of Ansible scripts that spin up a personal VPN server that is private to you, and is hosted typically on a cloud provider, for which Algo has built-in support of like ten or so different services. So you can just download this project, run the installation script, it prompts you for about 5 to 10 different questions, you type in the answers, and then five minutes later you have your own, completely modern, absolutely secure VPN server that only you can access... Which means that it's gonna be fast, it's gonna be safe, you're gonna be aware of where all the traffic gets sent, and it's probably not gonna get hacked.

**Jerod Santo:** There you go. I like that "probably". Qualifiers are important...

**Dan Guido:** Yeah.

**Jerod Santo:** So let's talk about the VPN landscape. You've just described Algo VPN - very important, it's self-hosted, but cloud-enabled... So you self-host it in terms of your own control, but you don't have to have your own hardware somewhere sitting on a rack... And yet, the alternative to that is available commercial VPNs.

In your announcement post you mentioned this isn't a branding project. You wrote that announcement in December 2016, so three years ago. Algo VPN was announced and still gaining steam... In fact, I've found it just a few months back, and I think people are continuing to find it, as interest in VPNs continues to boom.

So there are commercial VPNs, and one of the things that you say in there is that they're all crap, and you link to Kenn White's Gist, which I'll also put in our show notes, which goes through some of the pitfalls with commercial VPNs. And it's interesting, because there is a boom in VPN services right now. I think it's somewhat an easy industry to get into, and then it's also booming... So there's competition. I mean, you hear them advertising all over podcasts, and YouTube - NordVPN, ExpressVPN, PureVPN, tigerVPN... The list goes on and on; there's probably a dozen, maybe two dozen popular ones. And they're all advertising or they're offering ease of use, and other things. I'm sure they add their own features.

Why would you opt for a self-hosted, "I have to worry about it myself" VPN like Algo, versus one of these commercial VPNs? Why are they all crap?

**Dan Guido:** Yeah, sure. So a lot of these VPN services - you're right, start-up costs are pretty minimal. You tomorrow could be running your own VPN service, and hawking your wares on whatever Reddit subforum that these things are popularly discovered on. The start-up costs are like a dude with a server somewhere in Iraq, and an ability to make posts to Reddit or to Twitter, and get a fancy logo designed.

So there's the proliferation of hundreds of these services. You don't really know who's running them, you don't really know what they're doing with the traffic. But hey, they're gonna shift your location and let you watch TV that you couldn't before. And that's the general reason that people use VPNs, I think - they're trying to get around content blocks, usually for geographically locked-down media. So security isn't really top of mind, I think, for like 98% of the people that are using VPNs.

The issue here is that you really do need to think about security when you're using a VPN service. What is that person going to do with your traffic? Because you're taking every single packet that comes out of your computer and handing it over to some guy you've never met, in a country that's not yours, that has a different set of laws that you might not be familiar with, that might not have the competence to actually run it.

\[12:09\] I can probably set up a VPN service, but I'm a super-conservative security professional and I don't think I can do it right. At least not right now, and not with the resources I have today.

So if I can't do it right, what makes you think that some random dude out in Eastern Europe can? \[laughs\] First off, there's this question of trust, like "Who are these people running the service, and are they actually living up to whatever they say in their marketing?" That's problem number one.

Problem number two is do they have the competence to be running a complex network service like this, that requires ultimate security?

Problem number three is they have this problem of user support. If you describe the ease of use as a major factor in the proliferation of these services, you have to support every device under the sun. Somebody's gonna sign up with an Android phone from five years ago, and it's gonna have all these different weaknesses, and its APIs and its SDKs, and you still need to take that person's money and provide a service to them... So how do you support that? And that's what Kenn White was railing on in that Gist - was all these people have adopted the lowest common denominator for VPN protocols. They've taken L2TP, and IKEv1, and they have static passwords, and they have all these poorly-configured network services in order to support the largest number of people. Because at the end of the day you wanna make as much money as you can. So the incentives aren't really set up right...

**Jerod Santo:** Interesting.

**Dan Guido:** ...to provide the highest security service. And then number four is the way that people find out about these is through marketing. You have an inexperienced buyer; as a buyer of a VPN service, it is not easy for me to investigate whether it's well-constructed. So because you have this information disadvantage -- there isn't really a good incentive for you to do your job well. So yeah, all these things combine in this perfect storm to make this very shady industry of people that are willing to take \[unintelligible 00:14:05.11\] and say "Oh yes, please, give us all your traffic." \[laughs\]

There's a funny little meme that I posted to the Algo VPN Twitter account. It's a screenshot from Rick and Morty where they're in the Devil's little shop, where he's selling them all these wares that perform actions on Morty, and some they don't expect, and I think the quote is "You could say that you don't pay with money..." \[laughter\] Because a lot of the data that you send in there just gets abused, and that's how they make up the cost.

Okay, end of rant... Does that all make sense for why I'm a little bit skeptical of these things?

**Jerod Santo:** Yes, I'm with you on that. I understand that there's a lot of misaligned incentives. I didn't think about it with regard to the lowest common denominator of security because you want to service as many people as possible, so that's very interesting. I'm sure there are some of these services which are doing the best they can, and aren't some random person in Europe, or wherever they happen to live - and there's nothing wrong with Europe - but I definitely see where that is problematic... And I think where it becomes an issue, especially for folks who aren't well-versed in these things, it's like "How can you tell which ones are worth their salt and which ones aren't?", especially when there's so many of them, and like you said, it's so easy start up.

That being said, the entrepreneur in me, and the one that likes to see these things as like -- it's a perfect market opportunity. I do like when people take something that is exclusive to technical folks and can open it up to a broader user base, and say like "That's a business opportunity." It's like "Here's this thing which is very useful", and whether you're using it to get access to Disney+ or you're using it to actually secure yourself while you're at a coffee shop and you don't want people reading your email, it's very useful service... But it's traditionally difficult to acquire for people who aren't technical. And now we can all get access to it. I like that idea, but I understand how it ends up not so idealistic.

**Dan Guido:** \[16:06\] I just cannot imagine how many VPN installations that baby Yoda has driven in the last few weeks... \[laughter\] But let's dive into that, because yeah, there are some VPN service providers out there that are doing a good job, and are doing their diligence, as good as one can do with those kinds of risks. Because no matter who you are, if you're running a VPN service, you're painting a huge target on your back.

**Jerod Santo:** For sure.

**Dan Guido:** That means there's one person who has stood up and said "I own the traffic for these hundreds of thousands, these millions of people. It all goes through the set of services that I own", and that means that you become a target for hackers, you become a target for law enforcement, and you can't make any mistakes. Because if you make any of those hare-brained mistakes that people do when they manage technology equipment, it might mean disclosing ultimately all the security of your users, including historical content that they have sent through your network. The consequences for failure are kind of high.

I've gotta give credit where credit's due... There's a woman named Yael who worked on a review of VPN service providers for WireCutter, that is by far the best review that I've seen done.

I really appreciated that the way that she started that review was "Okay, the only people that are gonna qualify for the WireCutter review are the people that have had professional security reviews. If you haven't had a professional security review, get out. You're disqualified." Because I think that's the minimum standard that these kinds of third-party services need to meet in order to accept all of this potentially privacy-sensitive information from hundreds of thousands or millions of people.

There's a huge variance in that. There's a lot of people that are offering these no-log reviews, which I think are kind of janky, and hard for me to trust... Obviously, a security review is a point-in-time review. Somebody is gonna get the keys to your production infrastructure, and they're gonna go pinball around, looking for logs, like some truffle hog, trying to sniff out the secret place where you're backing everything up. And then maybe they don't find anything. And just because they didn't find anything doesn't mean that you're not logging, and also, just because they didn't find anything doesn't mean that the day after they leave you don't just go and turn the logging back on. So these no-log reviews I don't think are really productive.

On the other hand, there's a different kind of review, where you're doing a security architecture review. You're looking like "Hey, is this service defensible from attack?" If somebody came in and stole the keys from one of my system administrators, would it be possible for them to tap all of the network data that's being sent through the VPN service? That I think is far more productive, because then you get into a back-and-forth conversation with the VPN service provider and the engineers that work there around what changes they can make to further withstand external attacks, or further secure their users' data. That's, I think, a lot more impactful than these no-log audits, which I think are close to meaningless.

**Jerod Santo:** I swept up that WireCutter review, the Best VPN service for 2019, and put it in the show notes for those who are interested in at least seeing what's out there, and a review that you can trust. It's interesting - you can't trust the services themselves, sometimes you can trust the reviewers themselves, so now we have to trust you, Dan. Here's a guy who says "This reviewer of these kinds of services is good", and I guess our listeners can judge for themselves.

**Dan Guido:** \[laughs\] Yeah. It's frustrating, because you're right, a lot of the review sites are actually driven by the marketing budgets from all the VPN providers. They pay for those reviews. I know for a fact, because I've participated in a WireCutter one that there was no payment involved.

\[19:32\] On the other hand, a lot of people cite that there's that one privacy site for something, where it tries to break down every single technical specification whatsoever. Hundreds of indicators, like 200 different feature comparisons that they use to try and figure out what the difference is between all these different VPNs... And really, it just boils down to three to five different features, like "Did you get a security review?" That's a great one to start. "Are you using modern VPN software? Have you been compromised in the past?" \[laughs\] These are some things -- or like "Is the ownership of your company known? Why can't I find out who it is?"

When you look into the details, there was a study done this year where they've found that close to one third of the VPN services on the market were secretly operated by firms in China. If you look at PIA, somebody found out last -- actually, I think it was Kenn White... He found out last week that PIA is actually founded and operated by the same guy who ran Mt. Gox, the Bitcoin exchange that lost hundreds of millions of dollars in Japan. Nobody knew that... \[laughter\] So is that the guy that you wanna be giving all your traffic to? Like, every packet that you send to the internet? Probably not.

**Break:** \[20:46\]

**Jerod Santo:** Okay, so you \[unintelligible00:21:32.09\] or at least the only ones approved by WireCutter... But you have Algo VPN, and we're all nerds, and I can set up my own self-hosted cloud thingy... So why did you build Algo VPN and what inspired it in the first place?

**Dan Guido:** This was back in 2016, and -- I live in Brooklyn, New York City, and my girlfriend, who I'm still with, took a job in Berlin for a year. She was on contract with a large engineering firm, and was gonna write software for them from Berlin for a year... Which was great. It was a huge opportunity, she took it, and I love Berlin, so I knew that I was gonna have fun traveling there. But on my very first flight there, I was on the plane right over, and I'm like "Oh, shoot. I probably should get something to tunnel my traffic back home. Is there a way I can send all my IP back through a server at my house, or...?" You know, DigitalOcean has a data center in New York... Just so that it's a lot like home. And I've found that this was a lot harder to do than I expected, in 2016.

IPSec, especially services like strongSwan and the other services that implement those protocols are very difficult to use, and there were some existing projects - the Streisand project was one - that purport to offer easier setup of these services. So I started with Streisand, I started to install it, and while I was installing, it also installed about 40 different services that I wasn't really aware that it was doing. It installed Tor, it had all these weird listening ports on this Linux server that wasn't really configured to be defensible... I didn't know if any of those services were getting patched. It created dozens and dozens of keys...

Now, I'm sure some listeners out there are in the position where they've got like 1,000 two-factor auth keys, and they have no idea what to do with them when they get a new phone... This was the situation that I thought about when this thing was spitting out keys at me, like "What have I gotta do with all this stuff? I need to protect it somewhere, I need to rotate these keys every once in a while... What are these keys even good for?" So I kind of panicked, and I shut down the install right in the middle; I'm like "I can't do this." And it was at that moment that I decided I would set up my own.

\[23:46\] So I dove into strongSwan, I got a lot of help from some of the strongSwan developers to come up with the ideal, the perfect strongSwan configuration for just a roaming laptop around the world... And that took a lot of work. I didn't wanna support every protocol under the sun; I didn't wanna enable a lot of these features that are more suited for enterprise use. I really wanted the minimal configuration possible, where there's only one way to do it right, and then set that as the standard, and that would be it.

As I was building this up, I finally got it to work after a couple days after I landed in Berlin... Which was even funnier, because I walk into the apartment that this firm rented for my girlfriend, and the TV is set to all-Russian channels, and it has this really cheap Chinese router that's already been set up with internet service, she didn't know where it came from...

**Jerod Santo:** And you're thinking "I wish my VPN was setup already."

**Dan Guido:** \[laughs\] Yeah, I should have had some forethought... But I finally got it to work after 2-3 days, and then I started to automate it. I added some Ansible scripting around it...

**Jerod Santo:** That's a long time, two or three days.

**Dan Guido:** Oh, and that wasn't even working well. That was like "Oh, I can send a packet, and the it dies." Or it only works on this version of macOS, or whatever... It took me a while to work out all then kinks, but I just started wrapping more automation around it, until we got to this minimum viable product of one simple Ansible script that set up a server that was pretty vanilla. Over time it got a lot more complicated. Once I got it to work, I shared it with my company, and then it became the standard VPN for anybody at Trail of Bits when we go to travel, and then everybody had feature requests.

So we started adding more code to it, we started sandboxing every service inside of an AppArmor security policy, we added some CPU accounting to make sure it was harder to exploit things like heap overflow, or whatever... So you would just get your process killed if it started to use up too much memory.

**Jerod Santo:** So was Ansible always your tool of choice, and you just happened to be like "Well, I'm just gonna write some Ansible scripts, because that's what I do..."? Or did you start it off with a Bash script, and then you graduated it? Was it just Ansible from the start?

**Dan Guido:** Yeah, it was just Ansible from the start, I think. Ansible is nice, because there is a non-server component to it. It's really just a thin wrapper around SSH. It's like a structured Bash script. Chef and Puppet - they have a lot more complexity involved in building out infrastructure, and I think today, if I was rebuilding this from scratch, starting today I'd probably be using Terraform... But Ansible is still a great tool. It's very simple, it doesn't require any server-side components, which is nice.

**Jerod Santo:** That is nice. I just know I personally wouldn't even reach for Ansible, I would just be writing Bash scripts. And then I probably would have never packaged it up, and it'd be just living on my computer... So you took it a step farther than I would have. I wonder if that's just the way you always do things, or were you -- I guess your company, you were gonna share it internally, so that's why it required you to at least put it in Git and get it out there, and start collaborating with people...

**Dan Guido:** Yeah... I mean, if you're not using Ansible and you're just using Bash, it's really hard to test that. It's much more structured; you can find errors in your code a lot more easily if you're using Ansible, and there's also a set of reusable components that we can rely on... So it's possible for us to support all the cloud providers we do because we use Ansible; they have Ansible plugins for all of them. I didn't have to invent the Universe from scratch, which was nice.

**Jerod Santo:** That is nice.

**Dan Guido:** Yeah. We've done Bash for a couple other projects that were one-offs, but the bar for code that Trail of Bits puts out is pretty high. We try, even for our hobby projects, to meet a pretty good standard of quality whenever we release something. It's got tests, and tests run in CI, that it's maintainable, that it's easy to track down errors and debug things with it... So that approach shows up in the way that we designed Algo VPN.

**Jerod Santo:** Let me tell you where you sold me in the intro blog post... It's when you said that it only does the most secure thing, and that's the only way that it works; it just does this one way... You said you wanted one way to do it. And this is how it works. You don't have to pick your cryptography, your hashing... I don't want any choices on those particular things. Yes, give me customization on usability, but...

\[28:00\] I remember distinctly - this was probably years ago now - when I set up a stock, vanilla NGINX server for a customer, and I went out and ran SSL Labs against it, or something... And you accept -- not insecure, but deprecated, old SSL and TLS versions, and that means that your NGINX install is not hard, and it's not as secure as it could be... And I remember thinking "Why shouldn't it just come out of the box, doing the best thing?" I understand, because it's backwards-compatibility, and there's lots of reasons why that's like that, or developer laziness, whatever it is... And I'm a fan of NGINX, so I'm not -- this is just the way things are; it's like "I support these 13 different handshakes." It's like "Well, but 12 of them shouldn't be used anymore."

**Dan Guido:** What do you need them for?

**Jerod Santo:** Right.

**Dan Guido:** Yeah, it's totally backwards.

**Jerod Santo:** Just pick the best one, and we don't have to all think about it, because Dan and his team at Trail of Bits have thought about it, and this is kind of an industry standard, and it's just gonna do that one way... That's it. Stop thinking about it. I love that.

**Dan Guido:** Yeah. Choice is bad. When it comes to cryptographic protocols, you don't want a choice. You just want to have something that's safe all the time. A lot of the history behind a lot of that choice comes from things like encryption regulations. There used to be export ciphers that software built in the U.S. had to weaken themselves when it got exported outside the country... So every single piece of software, like an IPSec VPN, would have to have this configurable mode where there was like "actually good" mode and then "crippled" mode.

**Jerod Santo:** Right...

**Dan Guido:** And then there's also this huge design by the committee, where the IETF standards for a lot of these protocols have various people from different companies, that all say "Oh, I want my thing to do this, and I want my thing to do that...", and you have to kind of satisfy them all.

But if you look at WireGuard, WireGuard does the same thing conceptually that Algo VPN does, where it only supports one cryptographic protocol, there's one suite of algorithms, you don't get a choice... You can't screw it up.

So really, Algo VPN is made so that you can't screw it up... All the way to the point that like once you create the Algo VPN server, all those keys that I mentioned, that Streisand created for me - Algo VPN just takes them all and deletes them.

**Jerod Santo:** Nice.

**Dan Guido:** It's like "We just needed this to set up a server. You're never gonna log into this ever again... So let's just make it a black box that routes your traffic, and you don't need to ever be able to log into it." And that's the safest way to do it... Because if you can log into it, that means other people might be able to log into it, which means they could hack the box and they could change the configuration and they could grab logs out of it, or whatever. So why would you even want that feature? It's really an anti-feature. It's something that degrades the quality.

**Jerod Santo:** Yeah, and that's the other thing that impressed me about Algo when I first came across it - you have a list of features, and you also have a list of anti-features... And you say "These are things that you don't do. And it's not that we don't do them because we don't care or we're incompetent, we don't do them because you shouldn't want these things. These are anti-features." So it's a strong way of setting yourself apart from other options, saying "These are things that we don't do on purpose." Is that something that you do with all your stuff? Where did that idea come from, like "I'm not gonna list anti-features"? Just because you're a very opinionated person? \[laughter\]

**Dan Guido:** This is a real "security engineer building software" kind of approach...

**Jerod Santo:** Yeah, I think that's true.

**Dan Guido:** I'm thinking about this like "I have a budget, and there's only so many things that I can do." First off, before I overwhelm the user -- like, already I mentioned that there's about 5-10 questions you need to answer when you deploy Algo VPN. I was always worried that was too much, and there's been certain features that we've eliminated from Algo VPN after we realized people didn't use them, and it made operating it too complicated.

But yeah, there are certain things, certain features that we can add to Algo VPN that would compromise the ideals, that would compromise the mission that it has, the values that it has. Installing OpenVPN is a good example. OpenVPN as client software has had tons of issues. If you wanna force your users to install client software, they have to patch that. I don't wanna make people patch anything. This should be software you don't need to patch. It should have enough defense and depth, and it should re-use existing components so that it's much lighter-weight, which means I don't have to think about it as much.

\[32:10\] We don't wanna depend on TLS either, and OpenVPN does. TLS has been riddled with all kinds of security issues, a lot because you can negotiate those ciphers and negotiate the protocols that you're using with TLS, which OpenVPN inherits. This is a total shoehorn in the first place.

TLS is not made to be a VPN. It operates at a totally different layer, it's made to do something different. It was a poor fit to begin with, and we shouldn't be using it here.

And then yeah, the marketing, really to differentiate ourselves from the VPN services. There are things that a VPN can do, and there are things that it can't... And what it can't is it can't prevent you from getting arrested by the FBI, as we've seen many times. But that's kind of how marketing works for these people. They say anything, there's no repercussions about it, and a bit part of Algo VPN is I don't wanna lie to anybody.

**Jerod Santo:** Unpack that for everybody, "It does not provide anonymity." You think it does, but there's no Onion routing or anything in a VPN. You go ahead and explain it - why do people get that wrong, or what are people promising? That this is like a completely anonymous thing? Is it because they're sending your traffic through a third-party IP address? Is that the deal?

**Dan Guido:** The simplest way to describe it is not even in technical terms at all. All you have to do is look empirically at how many people have been arrested, that have used VPN services. There's quite a long list.

The FBI has put out indictment after indictment of people doing really evil things, that were using a VPN to hide their activity, and it turned out that wasn't a big deal for them to get around. You can send national security letters, you can get a lawfully ordered subpoena, you can modify the software that runs inside of a VPN service provider to collect logs even when it didn't before, which is why I said those no-log audits aren't really sufficient to prove anything to me.

So empirically, if you were doing bad things on the internet and it catches the attention of the FBI, they're going to sit and wait and plot for months or years until they have the success they need to find you and arrest you. \[laughs\]

It's also a full-spectrum activity. It doesn't just have to be the VPN that screws up. A lot of people that were operating Tor-hidden services were discovered by law enforcement services... Not because of any flaw in Tor, but a flaw in the way they operated the service, a flaw in how they set up their server. They left some HTTP header turned on on their Apache, and Apache had a virtual host that was serving on their \[unintelligible 00:34:50.08\] instead of their Tor config. Then you could find the real address, then you could go track down who owned it... That kind of stuff. That's exactly how VPN services shoot themselves in the foot, too.

NordVPN getting hacked last year, or... Who's the other one? There was another one; I have a note here about it. Whatever. Yeah, there were a couple VPN services that were all completely compromised end-to-end by some kid probably, in the last few months, that got access to their data center and started rebooting machines and getting super user access to all of them, and just digging through files...

**Jerod Santo:** It's interesting, there's a couple kinds of trouble. There's the kind of trouble where you're in trouble, but you know you're in trouble. And then there's the kind where you think you're not in trouble, so now you're brazen and bold... And you actually are. And then you find out. Ignorance is not bliss in this case. So if you think you're anonymous and you're being promised anonymity by somebody, or maybe you set it up yourself, like you said, and you're assuming the anonymity - well, now you can get yourself in all sorts of trouble, because you assume that to be the case and it's not true. This happens I think a lot.

**Dan Guido:** \[36:03\] I think the Grug has a really good quote here. There's a tweet he made, I think it was something along the lines of "No one is gonna go to jail for your $5/month 'logless' VPN service." If it comes down to the operator of that service having to spend ten years in prison versus handing over the details...

**Jerod Santo:** They're gonna turn you over.

**Dan Guido:** Yeah. "Sorry, man. It's not gonna work." But yeah, that's just the thing - when somebody like that, whether it's the NSA, the CIA, the FBI, the FSB - whoever it is, if they've got their sights on you, a VPN is not gonna be... Like, you need to think about this more holistically, if you're an actual target of attackers like that.

But luckily, you know what - most people aren't. Most people are using VPNs to access TV, so... \[laughter\] You shouldn't be selling out all your internet traffic to some random dude, so that you can watch Disney+.

**Break:** \[37:05\]

**Jerod Santo:** So briefly walk us through setting up the Algo server today. What do you do, what does it do, what don't you have to do? ...and then we'll talk about running it as a client, and we'll kind of go from there. But how do you just get it going? It's an Ansible script, so I'm assuming it's Python. Get some Python on your machine and run it.

**Dan Guido:** Yeah, pretty much. We wrote the readme so that it is simple enough that if you can open a terminal and copy and paste what's in the readme into the terminal, then you can set up Algo VPN.

Basically, at a high level, the steps include - on Mac or Linux, or Windows if you have Windows Services for Linux - you download one of the releases, you unzip it, you CD into it directly, and then you install some dependencies, Python if you don't have it, and then you just run the install script. Once you have those dependencies, it'll just work.

The install script will ask you some questions, like "What do you wanna name the server?" You have to give it a name. It has a default name, and you can just press enter. You have to give it an API key, and that means the one cloud service that you'd like to deploy it to - you need to go log into that cloud service with your account there, and then grab an API key from that service, that lets the Ansible scripts do things to it.

\[39:41\] Now with that API key Ansible and Algo VPN will start up a server, add the VPN software to it, generate the keys needed on your local machine, send those keys over to the remote server, and then lock the whole thing down. And locking it down means a lot of things. it means setting up AppArmor policies for each service, it means reconfiguring a couple of Linux defaults to be a little bit more secure, changing some file permissions in places, some kernel parameters in places, setting CPU accounting to make sure that certain services can't run out of control...

And then at the end of it it prints out a congratulations message that says "You've got a new personal VPN, and here's the key for it." At the end of that message, now you've got a bunch of files that are like preconfigured profiles for the VPN users that you wanted to create. So those profiles are things like an Apple profile, so if you have an iPhone, you can take an Apple profile, send it over to your iPhone, and then now you've got your VPN on your iPhone.

We usually suggest people Airdrop those, because that's kind of an encrypted local communication between you and your desktop.

It also has WireGuard profiles. WireGuard profiles are cool, because they're QR codes, so yo don't have to airdrop anything. You can just take your phone, hold it up to the screen and scan it, and then you've got your configured WireGuard VPN on your phone.

**Jerod Santo:** WireGuard is a third-party thing on iOS? Is it a part of iOS?

**Dan Guido:** With WireGuard you'd have to download an app. And there's apps in the Android App Store, and the iPhone App Store, and there's also the Mac App Store... It's got support for pretty much everything these days, including Windows.

**Jerod Santo:** Okay. But you said the other option of airdropping a config - that's without a third-party app, or do you still need WireGuard?

**Dan Guido:** That's right. That's with IPSec, and IPSec is built into that.

**Jerod Santo:** Gotcha.

**Dan Guido:** When we were originally developing Algo VPN, we ran into a lot of complexity, getting random operating systems to support the best version of IPSec... In particular, Windows just has some weird rough edges where they didn't actually support the protocols and the cipher suites that we really wanted them to... So we had to have all these weird corner cases for it. Android, too.

Android for years has been \[unintelligible 00:41:52.13\] by a really bad VPN implementation that comes stock with Android, and there wasn't any way to work around it. Android as an operating system backed themselves into a technical corner where there could only support IKEv1, and where they could only support certain cipher suites that we didn't wanna use.

As WireGuard has matured, it's been able to circumvent all of these problems, on all the different platforms that we'd like to support, so that you can just download the WireGuard app on every platform and it'll just work.

As we've mentioned before, there's no real way to configure WireGuard, it either works or it doesn't.

**Jerod Santo:** Nice.

**Dan Guido:** That makes it pretty easy. And since WireGuard is built as defensible software, it's got very little code that implements it. The chances that there are catastrophic plugs in it are pretty small, so we're comfortable doing that

**Jerod Santo:** Is WireGuard itself open source?

**Dan Guido:** Yes. The protocol is openly documented, it's been reviewed by academics, there's some formal verification on top of the cryptography... The code itself is open source, and a lot of it is being upstreamed to Linux right now. So the current version of Linux, that's in development right now, has had WireGuard merged into it, which means that a few months from now it'll actually be included by default on every Linux system out there... Which is amazing...

**Jerod Santo:** Wow.

**Dan Guido:** ...because I would like to make it even easier to use, and that'll be one way to do that. But yeah, so once you get that QR code for WireGuard, you scan it and now you've got your VPN. For me, now you've got the VM up in DigitalOcean or AWS or whatever, that's routing all your traffic; from time to time we enhance the way that Algo VPN works. You don't update Algo VPN. There's no "How do I upgrade from version 2 to version 3?" You don't.

**Jerod Santo:** I was gonna ask you that.

**Dan Guido:** Yeah. You just blow up the server. \[laughs\]

**Jerod Santo:** I like that answer.

**Dan Guido:** Yeah. Just throw it out. There's absolutely no reason to maintain this. You just destroy the server and you start it up again, and the new version will have any enhancements that we made.

**Jerod Santo:** So then you just reprovision your config, or the thing on your devices, and you're good to go.

**Dan Guido:** \[44:06\] Yeah. The first time you use Algo VPN it might be like 10-20 minutes to really learn what it expects, how to use it, but then subsequent redeployments are really just gonna be muscle memory. You're just gonna open up that ZIP file again, run through the commands, press Enter, it'll take 2-3 minutes end-to-end, and you'll have a new, fresh server.

I do that about once a month. When taking a new vacation out to Atlanta, or whatever, maybe I'll deploy a new one. But in general, I don't worry about it took much. We're not adding massive new features.

**Jerod Santo:** I was gonna say, how much churn is there on the Algo software? It seems like it can't be that much new things that I'm gonna have to snatch up and use...

**Dan Guido:** It's not. A lot of it is support for new cloud providers. Sometimes we tighten the constraints on the AppArmor policies or the CPU accounting, update some dependencies now and then... But again, even if there's some kind of exploitable bug in strongSwan, a remotely exploitable bug in the VPN service that's on the Algo VPN server, you're gonna have a lot of -- you'll have to get through the AppArmor sandbox, you'll have to avoid tripping the CPU accounting, you'll have to get out of all the Linux security controls that we tightened around it, and then you're on this box where there's literally like nothing else running. It's kind of a difficult environment for somebody to successfully attack.

The need to patch the day something comes out -- and nothing like that has ever come out, because finding remotely-exploitable bugs in services like strongSwan is kind of like mining for diamonds nowadays; it's really, really difficult.

**Jerod Santo:** You should add this to your list of anti-features - "There's no upgrade path."

**Dan Guido:** Yeah. \[laughs\]

**Jerod Santo:** When it comes to self-hosted software, even for technically-minded folks who understand all the implications and they're like "Well, do I actually wanna run yet another thing? Because I have all these little self-hosted things that I run..." Always the question is like "How much maintenance is this gonna require? How many times am I gonna have to SSH in and fix a thing, or reboot a thing, or upgrade a thing?" The upgrade path is often painful.

As somebody who's run a lot of services just for myself or small teams over the years, it can become where you're like "Oh, not another upgrade. Stop working on your software." But it's kind of nice if you're like "Well, this is the kind of thing that you just blow it away and start over, no big deal." It's like "Okay, that's an anti-feature that I like."

**Dan Guido:** There is Ubuntu \[unintelligible 00:46:35.22\] updates turned on, and that's configurable. If you wanna turn that off, that's fine. Some people may perceive risk, and - "Well, what happens if somebody sends down a Trojan software update, and somebody's backdoored WireGuard, or whatever? ...and now, instead of protecting my keys, it tarballs my keys and sends them out to a remote server." Stuff like that has happened.

I think the Bitcoin community, the Python community, the Npm community, Ruby Gems as well - all of these package managers have at some point had \[unintelligible 00:47:07.08\] dependencies, they've had developers that had their accounts compromised and malicious packages uploaded... Or Chrome extensions too are pretty popular for attacks like this. So that's another reason why we wanted to limit the software on Algo VPN to the minimum possible, because I don't wanna inherit all the supply chain risk.

**Jerod Santo:** Yeah, there's no need to be running software that you don't need, or to be updating software that you're not using. It's supposed to do one thing, do that well, and do nothing else. That's a sound security practice right there, for sure.

**Dan Guido:** Yeah. But you're right, it is supposed to be very easy.

**Jerod Santo:** So \[unintelligible 00:47:43.17\] about running this for other people... I did notice it's multi-user, and you start to think "Okay, well I'm savvy enough that I can get Python 3 on my machine and run this, but I would like to run it for my girlfriend, or my wife, or my friends, or my mom and dad", and that seems like something that's totally feasible, especially if you can just get them to download WireGuard and then send them this QR code and say "Boom, here's your QR code. You're all set, you're on a VPN." Is it as simple as that to get multiple people up and using it?

**Dan Guido:** \[48:12\] Yeah. There's a config file in Algo VPN, and you just add however many users you want to a list. Our of the box it comes pre-configured with those users - Dan and Jack. \[laughs\] Jack is my co-developer.

**Jerod Santo:** Man, you're trying to hack your way into all of our VPNs, man... Come on.

**Dan Guido:** It's just a username, I don't actually have any private keys.

**Jerod Santo:** \[laughs\]

**Dan Guido:** Those are all generated on-demand. But yeah, so Dan and Jack are the default accounts. But you would just add Michelle, Alicia, Lauren etc. to your list of users, save that file, and then when you deploy your Algo VPN, it'll have all those accounts built-in. So as a rule, you wanna generate one account for every device. You actually don't wanna generate accounts for people. So you want a different one for your phone, a different one for your laptop, a different one for your desktop...

It doesn't hurt to generate extra. You can always just make like 20 of them and hand them out as you encounter people that you would like to add to your VPN server. But because Algo VPN requires no maintenance, you could do this over Thanksgiving or over Christmas break or whatever, and you're probably not gonna have to touch that server until next Christmas. Because that's the challenge - once you get somebody to install it, it's usually a lot harder to talk to your parents and tell them "Oh, you have to go delete this profile, and uninstall this software..."

**Jerod Santo:** Right. All of a sudden, the no-upgrade-path becomes a headache, because you have to basically reprovision every device if you do update the software.

**Dan Guido:** Exactly, yeah. So really, for people like that, a once-a-year upgrade cycle, when you actually seen them in person over the holidays, is kind of a reasonable approach.

**Jerod Santo:** What about practical concerns there in terms of your bandwidth? Because maybe I give it to my friend Sally, and she lives somewhere they can't get Disney+, and so she's using my VPN and she's using it for Disney+ and she just can't get enough baby Yoda... Am I gonna get my DigitalOcean bandwidth just exploded, or what's gonna happen?

**Dan Guido:** Probably not. In terms of bandwidth accounting, there's a lot of services out there that offer a flat rate. Amazon Lightsail and DigitalOcean both have these flat $5/month plans that make them really easy to predict how much it's gonna cost for you to run them.

On the other hand, the concern that you might have as well - if they're using all the bandwidth to torrent the latest season of Silicon Valley or whatever it might be, am I gonna have enough bandwidth/am I gonna suffer by sharing a VPN service with them? And overwhelmingly, the answer is gonna be no. The amount of bandwidth that's provisioned to a single virtual instance of an Ubuntu server in a service like DigitalOcean or Amazon is just enormous.

\[50:56\] I have Gigabit Fiber at home. I'm calling you from a files connection where I routinely (without a VPN) get like 950 mbps... And that isn't really slowed down when I'm running a VPN. My upstream to the internet, even though it's tunneling through one of those cloud services, really does not see a whole lot of slowdown at all. So I don't anticipate that somebody out there is gonna be completely saturating a 500 mb link 24/7. And if they are, then I actually probably would use that to start a conversation with them.

**Jerod Santo:** \[laughs\] Yeah, now it's time to have a conversation...

**Dan Guido:** Yeah.

**Jerod Santo:** Cool, Dan. Well, thanks so much for joining us today, thanks for Algo... I'm definitely gonna give this a try, and get it set up. It looks very useful, and I like a lot of the opinions you have here, and the way you've gone about this I think is sound. I think there's no doubt why it's becoming the most recommended self-hosted VPN out there. So keep up the good work...

How can the people contact you, how can they get involved? We'll have, of course, all the links to the different things we've mentioned in the shows notes, and Algo is on github.com/trailofbits/algo, so that will also be in the show notes... But what are some waypoints where people can get involved, either in the software, or in Trail of Bits, or other things you're up to? I know you have other projects as well.

**Dan Guido:** Yeah. So Trail of Bits - we do a ton of outreach, really trying to put out code that people wanna use. Algo VPN is just one of the more accessible ones. Our GitHub is filled with projects that people should look at. There's some really nice and easy ones like TWA (Tiny Website Auditor), that helps you review the security of various websites that you're on... Or various fuzzers and tools like KRF, our kernel syscall fuzzer.

But you can keep up with us on Twitter, @TrailOfBits. I'm personally @dguido on Twitter. We have a mailing list on MailChimp, it's always pinned to the top of our Twitter. Very low-volume, every other week, it summarizes all the cool stuff that we do. And we also do a lot of engagement with the open source community. We just wrapped up some projects with the Python Software Foundation to help them at two-factor authentication to PyPI, so that when you get those packages hopefully they're not backdoored, because all the people using PyPI now can use WebAuth and TOTP tokens and secure their accounts.

So if you're in the position where you need somebody to add security features to your software, you should definitely talk to us, because we'd love to help you.

**Jerod Santo:** Very cool. Well, as I said, links in the notes; you all know where the notes are... And that's our show. Dan, thanks again. This has been a lot of fun.

**Dan Guido:** Yeah, thanks for having me.
