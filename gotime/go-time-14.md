**Erik St. Martin:** We are back for episode number 14. On the show today we have myself, Erik St. Martin, we also have Brian Ketelsen. Say hello, Brian...

**Brian Ketelsen:** Hello!

**Erik St. Martin:** ... and Carlisia Campos.

**Carlisia Pinto:** Hi!

**Erik St. Martin:** And our special guest today is Matt Holt, who we're gonna talk a bit about TLS, ACME and his own project, Caddy. How are you doing, Matt?

**Matt Holt:** Hi there, good.

**Erik St. Martin:** So we're having a little bit of déjà vu here because we did have you on the show when we were kind of kicking things off and doing some dry runs and all that jazz, so this is actually fun because you've had some new things come out for Caddy recently.

**Matt Holt:** Yeah.

**Erik St. Martin:** And we're a bit more seasoned now, so I think that works well.

**Matt Holt:** Yeah, the timing is good.

**Erik St. Martin:** So wanna kick it off with Caddy? Because I think that's probably the most common thing everybody knows you for. You wanna talk a little bit about what Caddy is and kind of your motivations behind creating it?

**Matt Holt:** Sure. And that will be a good way to segue into the TLS and ACME conversation. Caddy is an HTTP2, HTTPS default web server. It's written in Go, of course. About two weeks, we released Caddy 0.9, which was a pretty big release because I rewrote it from scratch, as a whole new architecture, inverted all the dependencies... But this is actually really cool, because the idea about Caddy now is that it's not just about serving the web -- well, it is, it is first and foremost a web server, but the goal here is that other applications written in Go that use the network can take advantage of Caddy's features, such as its easy configuration with that text file called the Caddy file and its magic TLS features. So any server type, whether it be HTTP, which it currently is, or if someone writes say, I don't know, maybe a Git server or a mail server, it can take advantage of Caddy's TLS features. There's actually a DNS server on its way, so you can use Caddy to serve DNS pretty soon.

**Erik St. Martin:** This is Meek's Core DNS project, right?

**Matt Holt:** Yeah.

**Erik St. Martin:** It's kind of his rewrite of Sky DNS.

**Matt Holt:** Yep, so that's a Caddy plugin which will be available soon.

**Brian Ketelsen:** Also, this is a plugin to Caddy, rather than core DNS kind of leveraging shared libraries; it's actually the other way around, where Caddy takes plugins. Am I understanding that correctly?

**Matt Holt:** Right. I was really excited when he forked this, thinking that it would be beneficial for a DNS server and it turns out that it is. But the problem is that you have a bunch of duplicated code, you have to maintain a fork, and so to alleviate some of that pressure and to help Caddy serve a wider audience and really do it, I want people to do, and that is use TLS. I redesigned Caddy so that it can handle different server types other than HTTP, so now the DNS server is a plugin. Well, it will be. The HTTP Server is a plugin, and so it can do all those things now.

**Brian Ketelsen:** \[00:03:53.27\] Wow, that's awesome. So I wanna kind of circle back for one second, because you happened to mention that 0.9 was a complete rewrite, so how long did that take and what was the motivation behind kind of just scrapping and starting over? Was it new functionality and new ways of looking at your project?

**Matt Holt:** Yeah, so people's feedback really expanded my vision a lot of what they wanted and what was possible and what Caddy really was. On day one for me, Caddy was just a web server that makes it easy to spin up a new website in just a matter of seconds, but after the launch of Let's Encrypt and more people using Caddy, I realized that what people really want is just an easy way to configure their standard web services and to do so securely, without having to worry about it. Caddy 0.9 makes that possible, but I had to redesign a lot of it to handle more... Because before, the only thing that a plugin could do is handle HTTP requests, basically. But now, Caddy can be extended so that plugins can do a number of things, including serving something completely other than HTTP. So that was kind of the goal, and that rewrite took almost six months. There was a lot of code to splice over piece by piece.

**Brian Ketelsen:** Wow.

**Matt Holt:** But I love Go, and it was a pleasure.

**Erik St. Martin:** And this is all while maintaining and doing bug fixes to prior releases, right?

**Matt Holt:** Yeah, one or two... Admittedly, I started maintaining the older release once I got about two months into the rewrite.

**Erik St. Martin:** PR's accepted. \[laughs\]

**Brian Ketelsen:** That's right.

**Matt Holt:** Yeah.

**Brian Ketelsen:** So we get awfully excited about Caddy around here, mostly because -- well, actually, there's two reasons. One, everything that I serve on the web is served through Caddy and it has been for, I guess, about a year-and-a -half now, almost since Caddy was released. So we love Caddy a lot.

But I think another reason that I get particularly excited about Caddy is because to me Caddy is kind of the poster child for how awesome and easy it is to do something in Go. When you look at the features that Caddy has and then you look at the Caddy code base, the code base isn't as big as you would expect it to be and it's kind of this great, big bucket of awesome.

**Matt Holt:** Yeah, I think it's a good showcase for some of Go's capabilities, at least the web and maybe some of its crypto portion, super easy to do things. Most people and most Go developers don't really need Caddy if they just need to serve static files; Go makes that one or two lines, and it's so easy. Use Caddy if you want more integrated environment.

But it's a really good showcase for these people who come from Node or Python or PHP environments and they're working a lot in those languages, to use something like Caddy is a breath of fresh air for them from what I've heard. Because they're used to installing runtime environments and dependencies and setting up process managers and everything, but with a Go program like Caddy it's a good showcase, I think, because you just set it, run it and forget it.

**Erik St. Martin:** I think even from using it as a customer kind of perspective, we serve the GopherCon and GopherAcademy sites using it. Some of the stuff just makes it so easy, like the Let's Encrypt functionality; it's just easy to get certificates.

**Matt Holt:** Yeah, and Caddy is designed to be -- if you're familiar with web servers like Apache or Nginx, you configure a web server. With Caddy when you configure it you don't think about servers so much, you think about sites. You can think of it this way, every 10 years or so, a new layer or abstraction comes along to build upon another layer or technology that's existed.

\[\\00:08:08.18\] For example, recently we're seeing chat bots that are emerging on top of messaging platforms. And so you might view those chat bots as kind of another layer of abstraction on top of another technology, the messaging protocols. And in a way, I think, in a similar way Caddy is that layer above the web layer or the server layer, in that you don't have to think about the server so much, you can just configure your sites and think about it from a site perspective. And these site configurations give you the added functionality that you need as a website owner.

So again, its ability to render markdown as HTML on the fly is something that is really helpful and productive for site owners these days, but that's a layer above the web server. I'm hoping that we can step up from just worrying about the web layer and focus on your sites and what you wanna get done as a site owner. Does that make sense?

**Erik St. Martin:** Yeah.

**Brian Ketelsen:** It makes a lot of sense, yeah.

**Matt Holt:** So all the security stuff is just taken care of, because that's the layer below your site; all the TLS stuff - you don't have to worry about it so much. And features available to you like Markdown or Abiola's Git plugin that allows you to deploy your site with the git-push, that kind of builds upon an existing layer of technology that now you don't have to -- it's not a separate thing anymore, because site owners find that productive and useful.

**Brian Ketelsen:** Yeah, that was the biggest appeal for me once we started playing the hugo-plugin with the git-plugin. It replaced a ton of ugly workflow that I had previously. Every time we did an update to the GopherCon site or we made a new blog post on blog.gopheracademy.com, that was minutes of work that I could've done something else. You talk about the security being a layer below the web service; the real boon for me in Caddy is the layer above those plugins that make my life drastically easier.

**Matt Holt:** Cool, yeah. I hope there will be more plugins with time.

**Erik St. Martin:** There was one I remember seeing that was WebSockets, where you kind of balance STDIN and STDOUT to a Web Socket.

**Matt Holt:** Yeah.

**Erik St. Martin:** I'm interested to see some use cases there, but I thought that was kind of interesting.

**Matt Holt:** Yeah, that was inspired from a project called WebsocketD, which is devoted to doing just that…

**Erik St. Martin:** Okay.

**Matt Holt:** …which is also written in Go. Pretty cool project.

**Erik St. Martin:** See this goes to that -- who claimed it? Somebody named it Ketelsen's Law. \[Laughter\] Somebody just this afternoon called that Ketelsen's Law, the whole everything interesting in the web world.

**Brian Ketelsen:** I think that might have been Scott Mansfield.

**Erik St. Martin:** Yeah. Brian said it on the show a long time ago and someone claimed it as Ketelsen's Law.

**Carlisia Pinto:** I also said that the whole Internet is being rewritten in Go, so you can quote me on that \[laughs\].

**Erik St. Martin:** It seems that way. Have you looked at any stats to see how many websites are running Caddy these days?

**Matt Holt:** No, I don't know where to get that information. I mean, reliably. A lot of people that are security-conscious will hide the server header, and it doesn't phone home. I know that there is an estimated 30,000 downloads, but that doesn't include any that are automated installs from scripts.

**Erik St. Martin:** Right. It'd be interesting to see... But for a lot of us, it's just so easy to just get up and going. And like I said, one of my favorite things is the kind of Let's Encrypt in SNI support.

**Matt Holt:** \[00:11:51.04\] Yeah, we should talk about that, because there's no reason that only Caddy can do this. I think every Go program that uses the network should do this, for a number of reasons. Well, Brian, you write a lot of network software, do you think about this?

**Brian Ketelsen:** At Backplane we do distributed load balancing and we definitely think about it, and we use Let's Encrypt to get certificates for all of our clients; so yes, we think about it a lot.

**Matt Holt:** Cool. How do you do that?

**Brian Ketelsen:** I didn't write it, I don't know. Magic happens... Anthony wrote it, Anthony Voutas.

**Matt Holt:** That's good. I guess the reason I ask is because... So Let's Encrypt is a service that lets you get free TLS certificates, and the thing is that it's an automated service, so you don't point-and-click your way through a checkout form and then check your email and click a link, download a certificate and install it. You need code to use this, and there are some great Go libraries out there that make it possible to add this layer of security to your application.

You know, it's interesting because I was talking to some people, and some people dispute the need for it, saying their application, in their use case they don't TLS at all. Others are saying that -- actually I was just talking to someone, a project or a team leader at a large organization here recently, and he was extremely skeptical of Let's Encrypt and their certificates. And so there seemed to be a lot of, I don't know, a lot of confusion about the topic as well that I think it would be good to clear up a few things.

**Carlisia Pinto:** But when you say skeptical in the case of this person, do you mean in terms of how much security it is actually adding, or what exactly?

**Erik St. Martin:** I think in this case you're referring to whether the Let's Encrypt organization can be kind of trusted with being a root CA. Is that what you're referring to, and not necessarily the security of TLS itself?

**Matt Holt:** For that particular person, yeah, it was the legitimacy of Let's Encrypt, but I've seen conversations all over the board, from "Their certificates are not secure, for some reason" to "TLS is broken, in general" to "Let's Encrypt is not a long-lived organization", or something. And all of these claims or disputes are actually really irrelevant. I'm gonna go out on a limb here and I'm gonna say that every application that uses the network - which is many Go applications, I'm sure - need transport layer security, unless your threat model assumes that your transport is already trusted.

Is TLS broken? If you do it wrong, yes, it's broken. But the current modern standards are pretty good, and with TLS 1.3 coming out, there is one or two concerns about it, but it's not finalized yet, but TLS 1.3 looks really promising, as well.

If you have a problem with TLS, it's probably more due to the problems with PKI (Public Key Infrastructure). No, PKI isn't perfect, but it's pretty good what we've got right now. So for you to assume that your transport is already secure is a really big claim, and I think that only few use cases can really make that claim.

**Brian Ketelsen:** I'd go out on a limb and say that anybody who thinks their transport layer is secure is probably deluding themselves. There is no secure network anywhere.

**Matt Holt:** \[00:15:50.24\] So one exception perhaps is the loopback interface. Your loopback interface is probably safe without TLS.

**Erik St. Martin:** Yeah, the loopback probably is, and even though I wouldn't do this at Comcast, I know at least for the cable side they have their own backbones and private internet. And that's, of course, segregated from other networks. It's like -- I think in some cases there, but still, there's multiple...

**Brian Ketelsen:** I'm gonna argue.

**Brian Ketelsen:** I'm not advocating that you don't encrypt there, but it is kind of one of those, "You know, depending on the service and how well...", but I think it's just a good idea to use TLS in general. I mean, thinking about things like Kubernetes and all those that's using TLS in between all of the services, there's just no reason not to use it. And especially, like as Matt was kind of advocating too, with all this tooling it becomes much easier to do that and to set this up.

And a lot of reason why people avoided it before is getting certificates or stuff, and wildcard certificates and installing these things, it was really time-consuming and most of the time people were generating their own certificates and then you'd have to set up your applications to trust them or just use insecure, and then kind of what's the point if you're doing that? So I think we live in a different space now, where it becomes easier and there's no real reason why you shouldn't, even if you think that bad actors aren't on your network.

**Erik St. Martin:** They are, Brian. I'm gonna beat that dead horse. They are.

**Matt Holt:** Assume they are. If you believe your transport layer is secure, you need to kind of guarantee four things: integrity, confidentiality, nonrepudiation at a technical level at least, and authentication, of course. You need to know who you're talking to. So confidentiality is obvious. You don't want people snooping on you. Now, if you can trust that your private network is actually private and that people who have access to the network aren't bad actors - okay, maybe that is covered.

Then you've got authentication, so you need to make sure that each machine knows who they're talking to. Again, if you can trust your network hardware and all the other software that interacts with your network, maybe you have that covered.

Integrity is one that people often forget. If they have a site or service that they say, "Oh, there is no private information here. There is no sensitive information. I don't need TLS.", that's false because your application will break if it gets malformed data probably, or your website is a liability if you're displaying content that you shouldn't be displaying. So integrity guarantees that it's not modified in transit.

And then nonrepudiation is more complicated, but at a technical level it basically means that the use of a private key has been invoked, so that the parties who are involved in this authenticated transmission, they have proved -- they can't deny that they were part of it. Now again, at the technical level that's true, but those are all valuable properties, those for things. If you're not going to use TLS, you need to be really sure and careful about that.

**Brian Ketelsen:** Use TLS.

**Carlisia Pinto:** I was gonna ask earlier, for the people who do want to use TLS, what are the things that people need to watch out for? I also wanted to ask you - and I'm trying not to jumble a lot of questions in one sentence - to talk about the ACME protocol. Because apparently Let's Encrypt is one entity, and there are others, like StartEncrypt, and they are not all the same and not all of them implement the ACME protocol. Is it relevant that these entities implement this protocol? Was is so special about this protocol?

**Matt Holt:** \[00:19:54.16\] Okay. Yeah, great question. The first question was what should you watch out for if you're using TLS - is that what you asked?

**Carlisia Pinto:** No. If you're getting a TLS from a particular CA - Let's Encrypt is one, but there are others... There are different places to get a certificate from.

**Matt Holt:** When you get a certificate, cryptographically it doesn't matter what kind of certificate you get, as long as the certificate authority is trusted by your users. There are certain certificate authorities that I would favor more than others or not favor less than others, based on their business practices... You'll be the judge, right? So the whole point of getting a certificate is to have that third party validate you, to speak for you in that sense and to put out a good word. So you wanna choose a certificate authority that you also trust, and not just because you can buy certificates from them, but because you believe that they're doing business well and that their mission is good, and that you can trust who's on their team.

**Brian Ketelsen:** So let's actually talk about that for a second. I mean anytime we talk security, that's always gonna come up, this trust. That's ultimately what it comes down to, is who do you trust? So let's talk about some of the things that can go wrong if you chose a certificate authority that may not be trustworthy, like the types of things that are certificate authority is able to do on your behalf or man-in-the-middle type things that can take place by using a certificate authority that they themselves are issuing certificates on your behalf to other parties, or their keys have been stolen.

**Matt Holt:** Yeah. I'll use an example, and this is just a recent news item. I'm not endorsing or I'm not suggesting one way or another, but recently Symantec issued certificates that were SHA1 signed. Now, SHA1 is officially deprecated for TLS certificates, because of weaknesses with collisions that have been recently found. So they issued certificates that were SHA1 signed, and then they revoked those certificates because they said it was a mistake and, you know, they were called out on this as well, because certificate transparency logs raised the alarm.

And then when they officially asked after that for the issuance of seven SHA1 signed certificates a special case, the request contained unusual strings in one of the fields in the certificate. And that was concerning, because at least the security researchers say that a collision attack could likely include such unusual string somewhere in the certificate. Their explanations for why those strings were there was considered insufficient. I'm actually taking this - I should give due credit -paraphrasing from the Bulletproof TLS Newsletter, the Feisty Duck TLS Newsletter, and it's fantastic. You know, on Twitter it does a really good job curating this.

Anyway, so here you have the certificate authority whose practices are disputed. Now, in the end they issued the certificates, but they took out those questionable strings. I mean, you be the judge of who your certificate authority is, but cryptographically remember that no certificate is better than another. You can make your own certificate. The only difference is that your certificate isn't trusted by everyone out there.

**Carlisia Pinto:** \[00:23:50.06\] Exactly, but how... Let's say I'm a developer, and for some reason I don't wanna use Let's Encrypt. Let's say I don't wanna pay and they renew every three months, and I don't wanna go through the renewal process every three months.

**Matt Holt:** Why not?

**Carlisia Pinto:** Let's say I have reasons, let's say I at least consider other entity. How do I go about trusting an entity? What are the rules of thumb that I need to think about? Are there things that I can look at? Like, this company does this, or …

**Matt Holt:** You know, the way I do it is I just follow the TLS news, TLS-related news. Certificate transparency logs is like a raw source of who is issuing what certificates. Whether a certificate authority even submits to certificate transparency is probably a good indicator. I just Google Security research. They do some really good investigations into certificate authorities and kind of a good alarm system there, and they'll publish a blog post when something alarming happens, especially related to Google services. I just follow the news, I suppose.

**Carlisia Pinto:** And how about the ACME protocol? I was thinking... It sounds like a big deal. I also noticed that not every company that issues certificates implements this protocol. What is it and does that even matter?

**Matt Holt:** Okay, yeah. The ACME protocol - this is a really big deal, because it automates away the job of certificate authorities. Now, we still need certificate authorities, but the manual process of interacting with them goes away. The ACME protocol stands for Automated Certificate Management Environment. This was developed after three years of research at the University of Michigan.

J. Alex Halderman was one of the researchers there. The project, as it came to fruition, it came through the Internet Security Research Group and Mozilla funding and their brand now is Let's Encrypt; it is really making the ACME protocol shine. And so what this means is that you have the certificate authority Let's Encrypt, that is trusted by all the major browsers and vendors and their only way of issuing certificates is automated using this ACME protocol.

So this protocol allows them to verify your claim that you own a domain name and they can issue you certificates. And the protocol has been vetted pretty thoroughly for flaws and bugs. Is it perfect? No. They found a couple, but they fixed it. They're still in beta. But this protocol basically automates in two seconds what normally would take you half a day or more to do manually.

**Brian Ketelsen:** At least, yeah.

**Matt Holt:** So the certificate authority is actually irrelevant here. The fact that Let's Encrypt is the automated certificate authority is just a matter or circumstance right now. But any certificate authority can implement ACME. It's an open protocol, it's published. I see the link here in Slack for the spec. So I'm hoping that over the next few years, we'll see several ACME-capable certificate authorities appear. No reason to let Let's Encrypt be the only one, although they are doing a fantastic job pioneering it.

**Carlisia Pinto:** That's also important because, as I understand it, you can be a CA, but the rules of how you validate a certificate's authority, they are very loose, correct?

**Matt Holt:** Certificate authorities have pretty rigid guidelines. I don't know a whole lot of details, because I don't work for one. The ACME protocol is not any more lenient in issuing certificates than traditional certificate authorities.

**Brian Ketelsen:** \[00:28:05.19\] It automates the process, really. If we think about the traditional approach of getting a certificate, they typically want you to add a DNS record to show that you have control of the authoritative zone, or they make you add something to the web page, or there's some sort of process to validate that you own a domain. A lot of those things can be automated, so is it so different than having a protocol? And I'm not familiar with exactly how the protocol works, how it vets who owns the domain.

**Carlisia Pinto:** Exactly. But this process of validation, if there is a protocol and the company is following that protocol, we know that that protocol validates in a secure way and we can trust it. I think it was a very good initiative, because you can have implemented a validation process that's either manual, or it can even be also automated, but not be very secure, and that's happened before.

**Matt Holt:** Right. In fact, we saw a similar problem with StartEncrypt, where they had an issue with their API, a security issue, and they don't use ACME, they do something else. So you have to be careful, it's not easy. ACME is pretty good, it relies on the integrity of DNS, just like traditional domain-validated certificates. I mean, DV certificates get their name because they are issued based on validating the domain name, ownership of the domain. So if your DNS is compromised, it's not any different now than it was before. So ACME, again, just speeds it up. You can see Caddy do it in 2 seconds. Your own Go programs can do it in 2 seconds using Go libraries like LEGO and so.

**Erik St. Martin:** Alright, well, this is a good opportunity for us to take a break and thank our sponsor Equinox. Many of you probably create applications that you need to ship to end users or customers, and if you've been in that boat like I have, you'll know that there are two things that are pretty important: the first is making the installation experience easy and the second is keeping the customers up to date. Equinox solves both of those problems.

The installation experience is dead simple because they create Debian, RPM, Microsoft Installer, Mac packages and they have a Brew Install option that lets your customers get your application pretty much any way that they're comfortable doing it. They also have a hosted download page for your application. So any way that you want to get your customers that app, Equinox supports it.

That second feature of keeping your customers up to date is probably the harder part of delivering your application and Equinox lets your programs self update, which is I think probably the neatest thing ever, because they just give you library code that you can use to automatically add an update flag to your command line app. That's really cool. They deliver binary patches, right in line, so your apps can self-update. Equinox is free for community and personal projects and you can see more about Equinox if you go to equinox.io/gotime. I use Equinox and I strongly recommend it.

Now that we've talked about our sponsors, I have a question for Matt again, which is the economics of the certificate space. You know, just two years ago before Let's Encrypt existed or was doing anything, certificates, especially on the website, were insanely expensive and a big money maker. How do you feel the landscape has changed now that Let's Encrypt is out and giving everybody free certificates for nothing?

**Matt Holt:** \[00:32:08.12\] Well, I'm not a certificate authority, so I don't know financial numbers exactly, but I'm willing to bet that they're probably scrambling. A couple of certificate authorities I've observed have made rash moves in terms of public relations that I wouldn't deem wise or sensible, because I think the idea that people can now get certificates and masks for free is concerning to them.

I don't think that automated certificates, whether free or not, I don't think they're going to -- because ACME, by the way, it doesn't say the certificates have to be free, at least as far as I know. I don't think the automated certificates are gonna put CAs out of business. I do think it's going to make them more accountable, which is a good thing. It will make them focus their business on actually the valuable part.

There wasn't ever a whole lot of technical or business value in plain domain validated certificates, especially since everything on the CA side is automated; it was just the customer that had to mainly do everything. I think once everything rolls out as HTTPS, because certificates become ubiquitous, I think that once everyone starts getting that green padlock, then maybe no one will get the green padlock except for the people who are paying for the extended validation certificates, which really does have business value, because it adds trust for those banks and those other institutions that need to earn their customer's trust.

**Brian Ketelsen:** Well, didn't one of the web browsers just make that change recently? I wanna say maybe it was Chrome. There was an update I saw just a few weeks ago, that standard DV validated certificates were going to be shown gray and EV would be green. They'd still have the padlock, but I agree that the enhanced validation is where the money is going to be in the CA industry.

**Matt Holt:** Yeah, that's the plan.

**Erik St. Martin:** I think I have two concepts there. One is the free certificates. What percentage of that is taking away from paid certificates? This may be new people coming on that didn't want to go through the burden of setting up certificates or financial pain for them and wildcard certificates because they want more than one subdomain. So some of it I don't think it's taking business away, and I think the other side of it is -- I think your big guys are going to pay for extended validations and stuff. I think then it just becomes like a tier of how much validation did you go through to get your certificate and your banks and financial institutions and healthcare providers are going to pay excessive amounts of money for these extended validations. That's kind of my take on it.

I don't think it's gonna put them out of business, but I don't think that they're gonna make the money that they currently are. And the other side of it is if TLS is almost free, maybe the domains cost more if they're wanting to keep the same income. It's kind of hard to tell.

**Matt Holt:** Right, it will cause the CAs to have to be a little agile here to stay relevant. But again, extended validation is really valuable, you can't automate that either. So I say charge for that, and I think businesses will pay for that.

**Brian Ketelsen:** As long as the consumers perceive value, they will.

**Matt Holt:** Right.

**Brian Ketelsen:** But as we educate more about what TLS is, what encryption is, what security is in a web browser, you know, maybe those extended enhanced validations matter less. It'd be interesting to see.

**Matt Holt:** \[00:36:00.06\] It's possible. Yeah, it will be interesting to see what happens.

**Erik St. Martin:** Now, before we move on to our news and interesting projects part of the show, I did wanna touch back on ACME for a second. We kind of talked about what the model is to manually validate your domain to get a certificate. Do you wanna walk us through how ACME does that?

**Matt Holt:** Sure. So ACME relies again on the integrity of DNS and the spec presents three different challenges that you can solve to get a certificate to prove your ownership of domain name. So for example, Caddy will solve two of these challenges for you by default, just out of the box, it will just work. The third one is for special cases some people prefer. So the first two are the HTTP challenge and the TLS SNI challenge.

The HTTP challenge is basically where you serve up a resource at an HTTP endpoint on your server. The ACME CA will do an authoritative DNS lookup, make a request to your server for that special resource, and if it can find it there then it proves you own the machine or that you own the domain name, and so you can get the certificate.

Caddy does this one. It does the TLS SNI challenge as well, which is the same idea as the HTTP challenge, except that it performs a special TLS handshake. And if your server, which is the client, in this case, can complete that special handshake with the special server name in the SNI extension, then the ACME CA will validate for you and give you the certificate.

So Caddy can do both of those for you by default, automatically. There are Go libraries that can do at least the HTTP challenge. That seems to the standard one. The problem though with these two is that it requires opening a port. The HTTP challenge requires Port 80 and the TLS SNI challenge requires port 443. Those are the hardcoded into the spec, you can't change it. If you wanna use a different port, you have to forward it. If you use TLS termination, you can't do the TLS SNI challenge obviously, or if you're behind a load balancer or other complicated infrastructure, the outside ACME server may not be able to reach your machine inside.

Then there is the third challenge, which is the DNS challenge. And this one, you have to set a record in your zone file on your domain name for a special name on your host, that validates that you own the DNS, that you have access to that. And the ACME server will perform an authoritative lookup for that special record. - it's a text record - and if has the right value then it will issue a certificate. The nice thing here is that the ACME server doesn't need to communicate directly with your server, so you don't need to open any ports or anything.

The downside is that you either have to do this manually or you have to give your ACME client credentials to your DNS provider, and they have to have to have an API to allow you to set records. Now unfortunately, lots of DNS providers have an API of some sort. Caddy, for example, ships with support for 10 DNS providers, especially the most common ones - CloudFlare, Namecheap, Digital Ocean etc. And you can specify these credentials in your environment variables, so Caddy can perform the DNS challenge as well as of 0.9.

Those are the three challenge types, and if you're having a hard time with Let's Encrypt or with the ACME protocol in general, I'm willing to bet it's probably because your tooling has not quite arrived yet or it's not mature yet, or you're asking a lot from the Let's Encrypt servers, and that's when people run into raid limits. But honestly, this covers 95% to 99% of the use cases.

**Erik St. Martin:** \[00:40:11.19\] So is there anything else that a listener should know about either Caddy or TLS or ACME before we move on? Is there anything else you'd like to add?

**Matt Holt:** Encrypt - just use TLS. Do it right, do it well, look into the tools. We'll probably have links in the show notes for some of these TLS resources.

**Erik St. Martin:** Yeah, we definitely will.

**Matt Holt:** But if you think you don't need encrypt, think again and think really hard about it.

**Brian Ketelsen:** Yay! Retweet that, quote it.

**Carlisia Pinto:** You mentioned that there are Go libraries or a library that will help people put TLS on their servers - did you mention what it was?

**Matt Holt:** I didn't. I can do that, yeah. So the default of course is Go's built-in listen and serve TLS. The NET package also has a TLS listener that you can use. Now, that is if you have your certificates already; you just pass in the file name of certificates and it will load and use those. Now, your service may run for a year and then your certificate expires and you need to renew it and you have to reload your Go application.

So if you wanna use ACME and automate all of this and forget about it, there is a library by Russ Cox, rsc/letsencrypt on GitHub, that I believe solves the HTTP challenge at least. And then there is a really cool library that I like, called ACME Wrapper; that's dkumor/acmewrapper on GitHub. That's really cool, because it's a lot like HTTP listen and serve, but with just one line of wrapping code to automatically manage your TLS features.

Of course, Caddy does all of this too. All of its TLS features are available for your program to use, especially if you wanna integrate with Caddy. If your web service is configurable and you want to just serve over TLS without having to think about it, you can do that with Caddy, too. I'll be talking about this more at dotGo later this year, at least for few minutes.

**Brian Ketelsen:** Good plug.

**Erik St. Martin:** That's in November?

**Matt Holt:** In October.

**Erik St. Martin:** There's another one is November.

**Matt Holt:** That's the Brazil one, right?

**Carlisia Pinto:** Yes.

**Erik St. Martin:** Yes, it is.

**Carlisia Pinto:** But GothamGo is also in November …

**Erik St. Martin:** That's right.

**Carlisia Pinto:** November 18th.

**Erik St. Martin:** And then Brazil one is early November, I believe.

**Carlisia Pinto:** Yeah.

**Erik St. Martin:** So again, perfect timing for interesting Go news, right? GopherCon Brazil...

**Carlisia Pinto:** Exactly, I'm so excited about that. It's going to be the first GopherCon Brazil. The first GopherCon in the whole Latin America, so we're expecting it to be very, very exciting. It's gonna be on November 4th and 5th and Bill Kennedy is going to do a workshop on the 6th. Bill Kennedy is going to be a speaker. We also have Francesc as a speaker, and we have CFP, the CFP is open. We have submissions in English and in Portuguese. It's all on the website, the links are there. We - and when I say we, I'm helping out a little bit, so I feel very proud.

**Erik St. Martin:** You're joining the list of insane people who have decided to organize or co-organize a conference?

**Carlisia Pinto:** I don't know. I don't know how that happens. I'm trying not to …

**Erik St. Martin:** We tried to warn you and you still did it.

Carlisia Campos:… I know, I know.

**Brian Ketelsen:** We did. I swear, we pulled you aside at GopherCon and said, "Don't do it, don't do it!"

**Carlisia Pinto:** I know, I just can't help it. Everybody is so excited and doing such hard work. Sponsors are welcome. It's going to be a great way to reach awesome developers in Brazil. What else? We expect 300 people, we can even fit more than that, but we think 300 will be easy to get.

\[00:44:00.26\] CFP is open, the registration is open, the sponsorships are cheap, cheap, cheap, cheap, cheap, because it's a small conference and the exchange rate is crazy. So take a look at the prospectus. Support is so appreciated and needed, especially for this first one. We really wanna set the standard for it to be a yearly event and a technical landmark in the tech community in Brazil.

**Erik St. Martin:** And for anybody in the US wanting to travel internationally, I did the math on what it cost to go and it's actually not bad. The ticket itself -- what was it Carlisia, was it like $30 US?

**Carlisia Pinto:** The ticket is like a meal price, it's very low. If you get in now it's $15, and if you get the day off, it will be $30.

**Erik St. Martin:** And the hotel was I think $50 a night and then plus airfare. I mean, it's probably like $800 or something to fly from the US.

**Carlisia Pinto:** And the location is an amazing island in Brazil in November summer time. I cannot stress that enough, it's gonna be beautiful.

**Erik St. Martin:** Hey, somebody was asking for GopherCon Hawaii. This is probably as close, I mean …

**Brian Ketelsen:** That's right, it sounds pretty awesome. Now I'm feeling like I need to go. I'm getting some FOMO.

**Erik St. Martin:** I know. I told Carlisia that I wanna go, but I'm also gonna submit a talk to KubeCon so I need to see how that goes first, because I think I would literally fly out the last day of the conference to make it over there.

**Carlisia Pinto:** Submit it to both. And I also wanted to say there will be simultaneous translations, so if you are an English speaker and you don't Portuguese, we are totally ready and expecting you.

**Brian Ketelsen:** That's awesome.

**Erik St. Martin:** So Go projects. I have one that I saw come through - I think I saw it on Twitter a few days ago, but it goes along with this whole security mindset that we're talking about this episode, which is Hewlett-Packard released a library called [`gosec`](https://github.com/securego/gosec) - a command line tool, anyway - to statically analyze your code for common security or vulnerabilities, and some of which were actually validating the TLS ciphers and protocols within your project, and then there was some SQL injection vectors it looked for, and I think using some crypto primitives and stuff that were weaker. There is a whole slew of things, and it will actually be interesting now that this is here to see how many more security checks people add to the code.

**Matt Holt:** Yeah, I saw that. It looks really cool.

**Erik St. Martin:** Did you take a look at that, Matt, at all?

**Matt Holt:** Yeah, I saw that. I haven't used it yet. Laura looked at it in detail. With a few of the comments that were posted, I could understand how it might come up with some false positives, but that's probably better than false negatives.

**Brian Ketelsen:** Any static analysis tool you're gonna end up with checks that might be false positive or don't apply. I mean, even Govet has some that don't really work all the time, but it's better to have them and know that you're ignoring them than not have them.

**Matt Holt:** Right, yeah.

**Erik St. Martin:** Yeah, so that's the only problem I think I find with false positives, is you accept them, and I would rather have them and not have them. But the difficulty comes in how they're addressed, because you ultimately want to ignore them, right? Because you don't wanna keep looking at the same thing and being like, "Oh yeah, I already determined that's not an issue."

You also don't wanna ignore it, because that may actually become a real vulnerability. And I think I struggle with that, like how do you trim the fat on the warnings being thrown, without continuously ignoring what could become future problems?

**Brian Ketelsen:** \[00:48:04.00\] That might be a show of its own, right there. So somebody write a library for that/ \[laughter\] Like, so many runs, or if the line changes, or surrounding lines change - I wanna know to look at it again.

And then also along those lines, Stripe has a package called SafeSQL which also looks for some SQL injection vulnerabilities - which I haven't run, but I'm interested to see how that works from the static analysis side. \[\\00:48:36.05\]using tools like sqlmap and stuff from the client side, looking for SQL injection vulnerabilities that are exposed.

**Brian Ketelsen:** So one that I saw that I thought was very exciting was sync.errgroup, which was released by the Go Team a week or two ago. That is a pretty slick package that kind of helps you do all of the right things when it comes to synchronization, concurrency and organizing a bunch of goroutines to do stuff, and lets you get the errors back out of them easily, it lets you cancel them nicely.

So it's a thin shell around sync.WaitGroup and the context package, but it's nice that it's all done correctly and you can count on that to do the right things when you're doing concurrency. That's one of the things I think in Go that's awesome, their concurrency, but it's really easy to do it wrong. So that's a great package to use - sync.errgroup.

**Erik St. Martin:** So this is kind of like an HTTP request coming in and you're kind of fanning out to do multiple units of work kind of concurrently, and possibly those fan out even further, and this helps kind of propagate the errors back up to the kind of originating Go routine as well as cancelling all other goroutines in the event that one of them errors out?

**Brian Ketelsen:** Exactly. So you can use it for just that concept, the cancellation; you can use it to run lots of goroutines in parallel and keep them synchronized, or you can use it as a pipeline to run pull data between goroutines and still capture all of the errors in between them. So it's a neat package. I intend to use it.

**Erik St. Martin:** I now intend to use it.

**Carlisia Pinto:** So I was gonna say about the functest one. Did somebody keep that on purpose?

**Erik St. Martin:** No. What's the functest one?

**Matt Holt:** I put that in there. I thought that was pretty cool, too.

**Carlisia Pinto:** Yeah, talk about it.

**Matt Holt:** So it makes it easier -- well, less mundane to write table during test. This is by Brad Fitzpatrick. I haven't actually used it yet, but looking at it, my mouth is watering. I write table tests all the time.

**Erik St. Martin:** Yes, so do I.

**Carlisia Pinto:** I agree, my mouth is watering too, because I'd love table tests. This makes it a little bit easier, just cleaner. I'm wondering, so if it's from Brad, it's sanctioned, we can use it? Like, no worries about having that extra dependency?

**Matt Holt:** Well, I mean I guess you weight the cost... But for little projects it seems like a really great thing at least.

**Brian Ketelsen:** That's neat.

**Carlisia Pinto:** It looks pretty neat.

**Brian Ketelsen:** I haven't seen this yet, it's very sleek.

**Erik St. Martin:** Now I'm gonna wanna play with this. Can we like pause the show for a few minutes so I can mess around with this?

**Carlisia Pinto:** I'm lucky I have a bunch of new tests to write, so I'm gonna probably using it.

**Brian Ketelsen:** So here's one I stumbled across on Twitter the other day, and I'm gonna butcher this poor guy's name, but github.com/matiasinsaurralde/go-dotnet. It is a Go wrapper for .NET that lets you do basically see Go-ish things using .NET assemblies. The first thing I thought was, you know, "Put down the crack pipe and walk away slowly", but I can see that there are definitely opportunities for the Go world to communicate with all of the amazing software that's in the .NET ecosystem, especially now that .NET is multiplatform. So a very interesting tool, I look forward to seeing that one mature.

**Erik St. Martin:** \[00:52:23.28\] So this is so that you can call out to the .NET runtime from your Go code?

**Brian Ketelsen:** Correct. And it may work the other direction. I haven't tested it, so I don't know, but it may work the other direction, too - calling to go from .NET; I don't know.

**Erik St. Martin:** It is interesting, though. I mean it's similar to kind of Cgo. We'd prefer not to write Cgo, but it does afford us the ability to operate with code that already exists and is well vetted and performant. So yeah, this will be interesting.

**Brian Ketelsen:** So one thing that came to mind immediately for me is that it's relatively simple to write user interfaces in the .NET world. You can write some pretty decent GUI screens in .NET and having a Go wrapper to that might make it a little less painful to do a GUI application if you really needed one in the Go world, I don't know.

**Matt Holt:** Brian, that's black magic right there.

**Brian Ketelsen:** Yeah, I'm telling ya. I'm not willing to try it myself personally, but I would love it if somebody else did and let me know how that worked.

**Matt Holt:** That would be an interesting proof of concept.

**Erik St. Martin:** And just kind of like a cross-platform GUI library to have native interfaces, so if you could interface with .NET here to kind of do a native Windows interface and GTK or QT or something on the Linux side. I've never written a GUI application for Mac, is it Cocoa, is that what the library is underneath?

**Matt Holt:** I think so, yeah.

**Brian Ketelsen:** Yeah, you have to use interface builder, it's ugly.

**Erik St. Martin:** I don't know what's under the covers there. I know I use Xcode to do so. What the library is underneath, I have no clue. And then outside of projects and news, Carlisia is now a convert to Vim, right?

**Brian Ketelsen:** This is a big deal.

**Erik St. Martin:** It is.

**Carlisia Pinto:** So let me clarify. I have been using Vim for the last few years and I've used just straight up Vim for a few months, but then I went back to an IDE and used Vim inside an IDE, and that was Atom. And I broke up with Atom last night - and that's not Adam from the Changelog, it's Atom \[laughs\]. I just cannot hear the difference. So the editor Atom - him and I, last night, we split.

**Erik St. Martin:** Not the robot from Real Steel?

**Carlisia Pinto:** Also not that. \[laughter\] So basically, last night I broke up my Vim... I already was running Jessie's dot-vimrc.

**Brian Ketelsen:** Jessie Frazelle?

**Carlisia Pinto:** Yes, I was running her dot-vimrc file and I went through \[unintelligible 00:55:17.22\] tutorial notes. He gave a tutorial at GopherCon. I was not there, but he wrote it out, it's all spelled out, it's beautiful. So I didn't even finish the whole thing, I just skipped around for the things I wanted the most and I'm gonna go back and do the rest.

So basically, he tells you exactly what to do. Jessie already had a bunch of the shortcuts that he was suggesting to do, so I was like, "Okay, cool, I'm just cruising through this", and now I've got vim-go going, I'm not going to go back to an IDE, and I'm very happy. And if you are interested, I suggest you take the jump into it, because it's very easy, relatively; if you know what things do, you just copy and paste stuff and done.

**Erik St. Martin:** \[00:56:13.28\] I'd actually like to see those notes, because I feel I've been using Vim for entirely too long. I'm kind of like stuck in my ways and I feel like maybe I'm antiquated. I should look at Vim with fresh eyes again and change what plugins and things I use.

**Carlisia Pinto:** You definitely should. I always do that, every once in a while I go back and look. And that reminds me of another good point, that he's always releasing things. He's always batch releasing a bunch of Go features. I've talked to him this morning, and basically this is the rundown. He has a changelog file on the repo and there he will list things that will be released. And as long as your package is refreshed to whatever the latest master wrench, that is the released version.

If you check the repo, you see that something new has been released, you refresh your master and then you run the Go install binary, because some of the stuff he does is related to Go tools, and some of the stuff is related to Vim. So you just update all of those things and you've got fresh new shiny features.

**Brian Ketelsen:** Freshies.

**Carlisia Pinto:** And I also discovered that the right place to go talk about Vim-go is the Vim channel on GopherSlack.

**Brian Ketelsen:** Awesome, welcome to the fold.

**Carlisia Pinto:** \[laughs\] Thank you.

**Erik St. Martin:** You can't leave now, otherwise Brian and I are gonna be upset.

**Carlisia Pinto:** No, it's pretty awesome. And I like it because everything is there, everything is released as one package, so there is no conflict. Because for me, I'm gonna work today and I can't have surprises, I can't update my IDE and have, "Oh, this thing is now conflicting and I don't have my shiny feature that I rely on so much." I can't have that, and that kept happening with Atom.

So with vim, it's gonna be consistent. The way Vim-go is released is as a unit, so that doesn't happen. And now the advantage is I'm now working with Vagrant box on my machine, I can just upload that there and there I have my Vim, my IDEs, it's beautiful...

**Brian Ketelsen:** Happiness.

**Carlisia Pinto:** Happiness.

**Erik St. Martin:** See, now we have our free software Friday, but I feel we've all given Vim and Vim-go love. Like does that count?

**Brian Ketelsen:** It counts as some, for sure.

**Erik St. Martin:** I think we should still list some.

**Brian Ketelsen:** Alright, so if you're not familiar with our Free Software Friday plan, it's just our way of taking a moment to say thanks to all of the people who released software packages in the open source world that we use, that we love. They don't have to be Go-related at all; not often are they all Go.

Today, I'm choosing Python, which is a language that I never personally use, but it powers two-thirds of everything I do. I don't know how many times I look up at the terminal window at the title and see that it's actually Python behind Neovim or its Python behind some other thing that's running, like Supervisord. So thank you to the Python team. Python is ubiquitous, it's out there everywhere, and even though I don't use it intrinsically, I use it a lot. So thanks, Python team.

**Brian Ketelsen:** How about you Carlisia?

**Carlisia Pinto:** So I wanted to talk about one thing that I can't believe I haven't mentioned before, which is Exercism. It's double good, because it's open source, of course, and you can work on it if you're looking for an open source project to practice or help out. Also, you can use it to learn Go or get better at Go. And I also found out that there are a bunch of issues labeled "good first patch."

\[01:00:03.07\] So for people who are looking to contribute to open source doing Go and they don't have experience or they're shy or they want a beginner project, this is perfect. And you'll also be helping, you know, this project which also is kind of meta because it teaches people. You're trying to learn and you're helping people teach Go, and of course other languages as well, that's why Exercism is extra super good.

**Brian Ketelsen:** And then how about you, Matt?

**Matt Holt:** Yeah, I have been really happy -- it's a Go project with a quick implementation in Go by Lucas Clemente. I don't know, I'm a huge fan of modern web technologies, and this is the first and only working QUIC implementation I've seen in Go. QUIC is a protocol that Google is experimenting with that is built on UDP and offers faster HTTP as communication basically, and with some other benefits.

One of my favorites is if you change networks - let's say you're downloading something on your phone and then you switch from WiFi to cellular, the download will continue without interruption. Even though you have a new IP address and you're on a totally separate network, it's because UDP doesn't have a connection to break. And it still has reliable transport and stream multiplexing and security. So I'm really looking forward to where QUIC goes with QUIC Go. \[laughter\] Did you see what I did there?

**Erik St. Martin:** So that actually kind of reminds me of a project that I used -- I don't even know how long ago this was. I think it still exists, but it was called Mosh, which was mobile shell.

**Matt Holt:** Oh yeah, I've seen that.

**Erik St. Martin:** Yeah, I think it came out of MIT and it used kind of the same concept of using UDP; that way if you have lag or you close your laptop and move, you could stay connected.

**Brian Ketelsen:** I use Mosh, every day, Erik. It definitely still exists and it's awesome.

**Erik St. Martin:** Oh yeah, look at this. It doesn't look like it has a new release recently, but still, that's awesome. I'm gonna drop a link in the channel too, because it was pretty cool. I'm gonna have to do that again.

**Brian Ketelsen:** Yeah, Mosh is great. Thumbs up.

**Erik St. Martin:** So you're actually still using it?

**Brian Ketelsen:** Yeah, I keep a Mosh session open to my Linux machine for my Mac and it doesn't matter whether I close the lid, whether it suspends, hibernates or whatever. It's just always there.

**Erik St. Martin:** So we get extra projects this week on our shout out. So for me, I wanna actually thank Wireshark, because in the past couple of days I've had to be dealing with it quite a bit. And I guess also a huge shout out to TCP Dump too, because Wireshark uses libpcap under the covers, but so nice to be able to just follow TCP strings and diagnose network protocol issues. In this case, there was actually unpegged streams, but still... Any network connectivity, Wireshark is awesome.

I'll have to shoot out some links and stuff, but there's actually a lot of nice kind of custom configurations and filters and things like that that you can set up to make it more usable for diagnosing specific things. I think I even saw a GRPC1 a while back, too. You can kind of hand it your certificates to be able to read the connections as it passes through.

**Brian Ketelsen:** So if you spend a lot of time in Wireshark, can you actually see the matrix? \[laughter\]

**Carlisia Pinto:** If you squint. \[laughter\]

**Erik St. Martin:** \[01:03:55.18\] I use Wireshark enough to be familiar with it; I use Wireshark not enough for me to completely lose my mind and memorize all the filters and things like that. But I imagine a lot of people do spend a lot of time in there, especially if you're reverse engineering network protocols.

**Carlisia Pinto:** So I wanted to ask you, because I've looked at Wireshark before, it's definitely a tool that I need to master. If you have links to extra good tutorials... I've gone through the manual, it's always kind of dense. If so, drop those links there, please.

**Erik St. Martin:** Actually, there's two books I used to have on my bookshelf, and I actually lent them to a friend a couple of months ago. I'll send to you a link in the show notes. One of which is actually like walking through particularly troubleshooting scenarios. It's almost like example uses, rather than looking at documentation.

It's like, "Oh, well if you were trying to discover X, here's what you do", and it itself came with some nice configurations out of the box too, which might be nice for me to look through. I'll go steal the book back so that I can look through some of those configuration things that I used to like. Because I don't have any of that stuff, I didn't commit it to like my DOT files. But yeah, I'll show you some good tutorials or books and stuff like that for Wireshark usage.

And TCP Dump is good to use too, because you won't always have GUI access to stuff, so you can use TCP Dump, you know, on the server from a container and things like that, and kind of poke around and filter and look for things going on. Wireshark also will read the TCP Dump logs too, so you can kind of run TCP Dump elsewhere and transfer over your pcap and look at it through Wireshark.

**Carlisia Pinto:** Awesome, awesome. Thank you.

**Erik St. Martin:** So with that, I think that we are about out of time.

**Brian Ketelsen:** I think this show wins the award for the most protocols discussed. I think we covered all of them.

**Erik St. Martin:** Right.

**Brian Ketelsen:** Or at least nearly. There will be a test.

**Erik St. Martin:** I hope not.

**Carlisia Pinto:** We should do that, we should have a quiz.

**Erik St. Martin:** We should not have a quiz.

**Brian Ketelsen:** The only person that's gonna pass is Scott Mansfield. I think we should just give him a star now and move on.

**Erik St. Martin:** \[laughs\] No commentary. I'm actually surprised. He must not be listening living anymore.

**Brian Ketelsen:** That's too bad.

**Carlisia Pinto:** He gave up on us.

**Erik St. Martin:** So I guess unfortunately, it is time to close out the show for this week. I definitely wanna thank everybody who is on the panel here today, Brian and Carlisia and especially Matt for coming on and talking with us about half of the protocols that we discussed today, and Caddy, which is a fantastic project. If you haven't used it yet, definitely go download it and give it a try.

I definitely thank the listeners, those listening live and those who will be listening live. We've dropped a few more episodes, so everybody can catch up and hopefully here in the next couple of weeks we will be -- or even days, depending on how fast we do stuff, we'll get as close to real time as possible, and then we don't have to be trolled by Francesc anymore. \[laughs\]

If you've not subscribed already, go to GoTime.fm. We have a newsletter that we'll be starting there, so you can go ahead and sign up. We are on iTunes and Android. The best way to get us is @GoTimeFM on Twitter or github.com/GoTimeFM/ping if you have ideas and suggestions for the show, or just updates to things that might go on our show notes, things that we got incorrect or additional things that might help people.

With that, thanks everybody and goodbye.

**Brian Ketelsen:** Goodbye. Thanks, Matt.

**Matt Holt:** Goodbye, yeah.

**Carlisia Pinto:** Thank you. Thank you, Matt, and goodbye everybody.

**Matt Holt:** Goodbye.
