**Natalie Pistunovich:** So today we have Michael Quiqley from NetFoundry joining to talk about zero trust. Michael, how are you doing?

**Michael Quigley:** I'm good. How are you, Natalie?

**Natalie Pistunovich:** I don't trust you. Are you sure? Are you sure that you're good? How do we establish trust? \[laughs\]

**Michael Quigley:** That's a tricky one. That's the heart of the matter, unfortunately. \[laughter\]

**Natalie Pistunovich:** Yeah, I'm doing good as well. I'm trying to do good as well. What is zero trust?

**Michael Quigley:** So zero trust started with this -- I mean, I'm exactly sure when it started, but it sort of became popular with this concept that came out at Google called BeyondCorp. So they started this big initiative, and I don't remember the exact timeframe. I want to say it might have been maybe -- let's call it a decade ago, or something like that... Where they had this BeyondCorp initiative, and it was about not considering the difference between LANs and WANs. Kind of like where you are in terms of physical security being related to how your network security is postured. So a lot of times a while back we would have configured access to things by "I'm in a corporate office" or "I'm in some physical location where I've got a specific network access to something." Zero trust was sort of about getting rid of that concept, and going to "It doesn't really matter where you're physically located and what your underlying network is", and treating the security posture differently than that. So using certificate authentication, and crypto, and things to strongly identify whoever's using your network resources; like, actually securing them that way. So that was sort of the genesis of the zero trust concept.

**Natalie Pistunovich:** Was there anything specific that kind of created that? Was there some big DevCon incident? Was it just a growing pressure?

**Michael Quigley:** I think it was more of a growing pressure for like remote workforces, and that kind of thing. This was pre-COVID, and all that sort of thing, so I think people were just starting to really get into -- not having to be tied to an office, and that sort of thing. It made sense, and I think it was sort of a "How can we make this work better than it had worked previously?" Because in the old days you'd have VPNs, and you'd have facilities to sort of make you act like you're on a local network, and some of those sorts of things, instead of actually solving the real problem. So I think zero trust is sort of a response to that.

**Natalie Pistunovich:** Yeah. And how did the adoption go in the early days?

**Michael Quigley:** I think the adoption is still -- I think in the early days it was sort of a pipe dream, and a little bit of a... It probably worked for a lot of folks at Google, or certain segments of the Google workforce might have been using that sort of BeyondCorp approach. And actually no, I wasn't there, but I think it's been a slow adoption over time. I think a lot of the VPNs and some of the other styles of securing things are still very commonly used, and I think there are progressive organizations and people that are really starting to get into zero trust and start using those tools. There's also better tooling coming out, there's a lot of infrastructure that's better than it was a while back.

I want to say that the White House might have had some sort of initiative around zero trust. That's actually a talking point, in terms of like -- yeah, I think that's a thing that people are sort of being exposed to more now, because it's sort of a commonly used talking point, about cybersecurity and some of those kinds of buzzwords.

**Natalie Pistunovich:** Okay, that's nice to be up to date with the times...

**Michael Quigley:** I think that's reasonably accurate.

**Natalie Pistunovich:** \[laughs\] And then how would you describe the world of zero trust these days?

**Michael Quigley:** There's a lot of really interesting products out there. I mean, I'm obviously biased to the things that I work on. I think we solved some of those problems in especially clever and innovative ways... But there's a lot of really great tools out there now. There's all kinds of ways to solve the zero trust problem. Some of them look more like traditional VPNs, and some of that sort of thing, and then on the other end of the spectrum we have tools like the stuff I'm working on, which is OpenZiti, and zrok, and some of those things that take zero trust in this other different direction. But the tooling in general is getting a lot better. I think it's one of those things that -- people understand it more now than they did a while back... So as people understand things more, the tooling gets better, and people start iterating on tools, and conceptually they improve.

**Natalie Pistunovich:** And so tell us about what is different in your approach.

**Michael Quigley:** So we started working on OpenZiti, I want to say it was maybe six or seven years ago at this point... Probably about six years. We started with a sort of whole cloth solution to this. We actually started with a proprietary product that we sort of built a wrapper around. It was this closed source thing that was used by the Department of Defense and some of those kinds of people to do spread spectrum-like security and some of those kinds of things around securing data in motion. We kind of built that and added some additional layers of security on top of it. And then we started looking at the problem from sort of a holistic perspective, like "How do we want this to work?" And what we ended up with was sort of a network overlay, that doesn't sort of piggyback on top of IP in terms of like IPsec, or WireGuard or anything like that, where it's actually reencapsulating and encrypting the data. Conceptually, what we built is closer to something like Tor, where we have a mesh network that you we call the overlay, and then all of the underlying IP networking, whether it's WAN links, or whatever it might be, we refer to that as underlay. So all of the overlay is basically running in user space, and we've got this mesh network of routers that has smart routing, has its own sort of addressing protocol built on top of it, and layered into that from the very beginning is strong cryptography and strong security around identity. So it truly is zero trust from that perspective, in that you can't really do anything on the network without having strong identity in the loop.

\[06:14\] But that let us do some interesting stuff where we can sort of tailor the addressing model, and the naming model, and the policies and all those sorts of things at a user space level. Even the routing protocols across the mesh, they basically are running in user space. And you can reroute traffic, you can say "I only want this traffic to go through these links", you can control costs to process things however you want... So in the early days of a lot of this stuff I was working on the underlying fabric, the mesh networking and the architecture around that. And then on top of that we've layered various edge protocols, and higher-level constructs that allow you to embed the stuff in the applications. And if we're talking about like an elevator pitch for this, I think the main thing that we like to talk about in terms of like how we would explain OpenZiti to people is that it's more of a programmable network. So we really come at it from the perspective of -we have SDKs and we've got infrastructure that's designed for programmers to embed this stuff into their applications.

So rather than sort of being a network layer thing that you use like a VPN, or you use as like some sort of bolt-on your application to sort of try and secure it and bolt zero trust to it, I think our ideal use case is we want people to take our SDKs and embed this stuff directly into their applications. So that's the main difference, I think.

**Natalie Pistunovich:** You talked about meshes, and I'm thinking of Istio and similar meshes as well...

**Michael Quigley:** Yeah, there's a lot of overlapping concepts. In fact, we've got people on our team who are working with OpenZiti in Kubernetes and that kind of stuff, and there's a lot of things we can do with our mesh that I think are interesting in that kind of a managed, containerized sort of environment... So yeah, there's definitely overlaps there.

**Natalie Pistunovich:** Does it also do things like logging and home monitoring while edit, or tracing?

**Michael Quigley:** Yeah, we've got all those things. Metrics, all the things you'd expect to have in a network like that. Yeah, we do those things.

**Natalie Pistunovich:** So it's a sort of a full stack mesh.

**Michael Quigley:** Yeah, yeah. And the nice thing about the design too is you can take whatever layers make the most sense for what you're trying to do -- like, we generally ship the entire stack to customers, and they use the whole thing, but you could use just the mesh if you wanted to, you can... And then going up even higher, now that Ziti is starting to become mature, I've sort of pivoted my work and I work on an open source project called zrok now. And zrok was sort of a -- the name, you can kind of tell what it was inspired by just the name. Most people are familiar with ngrok; that kind of had the... I was basically like "Go figure out what something like ngrok would look like on top of OpenZiti." So I built zrok. And one of the cool things about zrok is that you look at tools like ngrok, and it's awesome that you can share a private resource on a public URL, and let anyone use it, and you don't have to open any security holes... All those things are great. But one of the cool things about Ziti is because we have this overlay network, and we control the addressing, and it's all zero trust, we can do peer-to-peer across that network without requiring any of the peers to expose themselves publicly, or anything like that. All the peers can remain "dark", but we can still have peer-to-peer communication. So that lets us do things like private sharing, where we can say "I want to share a network connection between two completely dark peers", and the traffic will go across the overlay, across the internet, but none of that's exposed to any of those things. All that data is end­-to-end encrypted, it's all zero trust under the covers... So that's one of the things that's really cool about it. So zrok ends up becoming like a really good use case for showing people how you can use something like Ziti to build things that you couldn't otherwise easily build.

**Natalie Pistunovich:** \[09:59\] And how does all this fit with go?

**Michael Quigley:** So that's an interesting story. So when we started building Ziti, it was almost accidental that we ended up on Go. And I couldn't be happier that we chose -- I mean, Go... I've been doing this a long time, and I would say that Go has replaced a lot of other programming languages for me.

**Natalie Pistunovich:** Like what?

**Michael Quigley:** Oh, anything that I would probably have done in Java 15 years ago, I would do in Go now, without even missing a beat.

**Natalie Pistunovich:** How did you come to hear about Go? When did you first try it, and why?

**Michael Quigley:** That's part of this story. So we started building OpenZiti... One of the things we were looking at was we've got this mesh network, this overlay, and we want to obviously make it as performant as we can. So one of the things we were taking a look at was what kinds of protocols could we use to implement this mesh. And at the time, we were big into Quic. We were taking a look at Quic. Quic, it's an alternative HTTP style protocol that Google put out. And the main implementation that you could find on the internet of Quic was written in Go. It's quic.go, it's the library. It's still widely used... So we accidentally started building Ziti in Go because of quic.go.

**Natalie Pistunovich:** Interesting. So that was the reason. Were there other languages that you were considering, and you said "Nah, quic.go is more important"?

**Michael Quigley:** I want to say an early, early version of some parts of Ziti that I had worked on back then were written in JavaScript. So it was Node. We actually started parts of it with Node. And as soon as we started messing around with quic.go, and started getting into -- there were a couple of us working on this stuff at the time... As soon as I started working in Go, I was just like "This is it."

I'm sure a lot of people have very similar stories with Go adoption; it took me not a lot of time to understand the language, but then some of the idioms... When you're building a mesh router, or anything like that, there's a lot of complicated state in that, and there's a lot of complicated concurrency in that. And some of the patterns in Go took me a little -- you know, I've been mutexes, and semaphores, and things like that for years... Some of the chan, and some of the concurrency patterns in Go took a minute to get used to...

**Natalie Pistunovich:** Mm-hm. Until you stop writing JavaScript in Go.

**Michael Quigley:** Yeah, stuff like that. And I wouldn't say that I'm still perfect at it... Occasionally I do slap a lock around something, because it just seems like the right way to do it, but...

**Natalie Pistunovich:** It feels safer.

**Michael Quigley:** Yeah, it feels safer, exactly. So yeah, that's how we ended up in Go. And in retrospect, I wouldn't change a thing.

**Natalie Pistunovich:** Nice. And then how was the community adoption? Did you start speaking with Go developers, or how did you -- how was your interaction with that, with the community?

**Michael Quigley:** We're actively working on that stuff. I think, like a lot of open source projects, that's always a challenge, to get the word out and to get people to understand what you're doing. I think one of the things that's tricky for us too is that Ziti is fairly different in terms of like what we're doing philosophically, and like how we think about overlays, and security, and that sort of developer-first approach. It can be a little hard to explain to people. I think when people think overlay networks, and zero trust, they think like VPNs, and they've sort of got a bunch of concepts already in their head, and they're used to thinking about these things in certain ways. So we kind of have to say "Well, like that, but different in these ways." And it can be a little bit of a challenge.

So I think that's one of the things that we're actively working on, is trying to figure out how to get the message right. And like a lot of people that work in tech, we're not always awesome at marketing; sometimes we struggle with these things... Just like we're not awesome with documentation all the time. It can be a little tricky to get that going. But definitely, things are picking up, we've got a lot of great customers, there's a lot of people that are -- we're starting to get a lot more attention, basically.

**Natalie Pistunovich:** I guess you can always try to speak to the heart of Go developers saying that you wouldn't write Go syntax the Java way, or the JavaScript way. Same logic.

**Michael Quigley:** Yeah, absolutely. And I think if you look at our Go SDKs, we've got our -- I kind of think of it as there's OpenZiti and then there's zrok layered on top of it. And zrok is kind of a really good way to sort of understand at a high level what's going on with some of this stuff. You can start with that perspective and sort of drill into it.

\[14:14\] So there's an OpenZiti Go SDK, but there's also a zrok SDK. And the zrok SDK, like if you're a Go network developer, it's net.Conn and net.Listener at the end of the day. It couldn't be any more simple than that. There's a couple of extra lines of code to sort of establish identity and that sort of thing, but beyond that, like, dial and bind, and you're there. It's basically traditional net.Conn and net.Listener and you've got a working network. And everything's zero trust, and it's secure, and peer-to-peer, and all those kinds of nice things.

**Natalie Pistunovich:** Okay. So you say that what you do is different from some of the traditional zero trust... So let's talk about what is a traditional zero trust architecture, what are some components there, and what is different with you.

**Michael Quigley:** Sure. I could be wrong in this perspective, but I feel like when I think like traditional zero trust...

**Natalie Pistunovich:** It's not the best word, but in a lack of a better word, we go with that...

**Michael Quigley:** Yeah. I would think of things like Zscaler... So Zscaler is a commercial product that you can buy, that I believe fairly closely mimicked the sort of BeyondCorp, the Google approach. And I haven't spent a ton of time working with Zscaler, but my sort of naive understanding of it is that it's more or less sort of a network proxy. So a lot of these traditional zero trust products kind of want to be a proxy that mediates security for you, and that deals with identity, and deals with validating that your users are who they say they are, and those kinds of things. We're different than that in that we establish an overlay network, a true overlay network, that mesh network, and then endpoints can sort of sit wherever they are. So you don't go through a proxy, you're basically connecting to that mesh network. And that lets us do all kinds of things with citing resources wherever they need to be on that mesh, and we've got all kinds of fancy load balancing, all that kind of stuff, but it can be dealt with at the right level of abstraction for the applications you're working with. So your applications - you can put resources wherever they belong. You can do the same thing without a proxy, but it feels different and acts different at the end of the day. Does that make sense?

**Natalie Pistunovich:** I don't want to sound like a ChatGPT, but if you were to summarize the core parts of your average zero trust architecture, what would be those components?

**Michael Quigley:** I would think -- I mean, again, these things all look a little different these days, but I would say the average zero trust implementation is probably some form of a proxy. So that's what that looks like.

**Natalie Pistunovich:** And you can move that responsibility around, basically.

**Michael Quigley:** Yeah. Yeah, you can put that proxy and that border wherever you think it makes the most sense.

**Natalie Pistunovich:** And what are some misconceptions or misunderstanding, or like wrong usage patterns of zero trust, if that exists at all?

**Michael Quigley:** Honestly, I feel like one of the anti-patterns of zero trust is trying to treat it almost like a VPN. And I think that's one of the things that we try very hard to sort of steer users away from, is rather than -- you can take our components, and we've got a really powerful tunneler, we've got resources that will let you get down to layer two and layer three, and those kinds of things... And let you treat what we do almost like a VPN. But I kind of see that almost as an anti-pattern. The right way to do this is to embed that zero trust capability, that border directly into your application code. The less optimal way of doing it would be to sort of try and bolt it on through some sort of gateway, or something like that. That to me feels a little bit clunkier, and a little bit more disjointed.

**Natalie Pistunovich:** Does the use of zero trust components in general make at all ISO certification for security more complicated, simpler, or have no effect at all?

**Michael Quigley:** \[18:02\] I don't actually know. I haven't been through a certification process like that, so I don't really know. Yeah, I don't have a good answer for that. So I don't know.

**Natalie Pistunovich:** I can definitely see the value of using that on the technical side, but usually you do security -- if you spend a lot of focus on security, you're probably going to display that for others to know, and know that this is a checklist that they mark, and are able to use, so...

**Michael Quigley:** Right.

**Natalie Pistunovich:** Yeah, interesting.

**Michael Quigley:** Yeah. I would assume, like most certification processes, you've got to sort of go through and vet all the components that are involved, and that kind of thing. So yeah.

**Natalie Pistunovich:** And let's say you have a system that uses whatever security measures, and you want to integrate/introduce zero trust into that... How do you go about that?

**Michael Quigley:** It depends. If these are things where you don't have access to source code, or willingness to change source code, there's all kinds of ways to add zero trust layers on top of things. For Ziti we've got what we refer to as a desktop edge, or a mobile edge, which is something that sits -- it's a piece of software, it's more or less sort of an end user-facing daemon, or in the case of like a headless Linux system it's just sort of an actual daemon, that mediates connectivity into the overlay. And from there - I mean, your application just treats the local Ziti endpoint as if it was the remote resource. So it's just a matter of configuring things in a way that makes sense. So really, the non-zero trust, non-secure traffic doesn't leave your local host. When it leaves your local host, it's going through a security layer; through Ziti, more or less.

**Natalie Pistunovich:** Does this affect in some way latency in the system?

**Michael Quigley:** Yeah, I mean, I think it's physics... If you add extra machinery in the middle, it's definitely going to impact performance. The interesting thing about that though is - you know, throughput latency, and those kinds of things, you would be surprised at how little impact that actually has in practice. It's actually -- we're not fully there yet, but we've worked very hard to sort of make these things perform well and not be overly late... And yeah, there's extra connection setup involved, and connecting an overlay; you're gonna have to talk to a control plane that you wouldn't otherwise talk to. But you'd be surprised that in practice it doesn't really make that big of a difference.

**Natalie Pistunovich:** Good thing you're using Go.

**Michael Quigley:** Yeah... Yes. The performance of our Go code is very high, for a relatively low cost. So to get good-quality performance out of code, Go is a great choice, because the overhead of getting there to me feels lower than C++, or something like that. So...

**Natalie Pistunovich:** Did generics affect your codebase at all?

**Michael Quigley:** One of the developers who's currently working on a lot of the low-level stuff in the mesh layer now has done a lot of work with generics. But when we've built most of OpenZiti, generics wasn't a thing. So I think there are layers that were sort of adding some generics to, because it does actually make a difference; I think some of that stuff is some of the persistence layers, and those kinds of things. We're using a Bolt for a lot of storage. Bolt is like in Etcd, and some of the -- it's part of Kubernetes, basically. So we use that as a persistence layer. And we've got a whole bunch of infrastructure around that, that does use a bunch of generics and things. But I don't think there's a ton of generics in OpenZiti as a whole.

**Natalie Pistunovich:** Is there any prediction that you do or plan to do something with usage of AI in recognizing potential good, bad, recommended behaviors, or any other use of AI?

**Michael Quigley:** So one of the things that we talked about a lot, that I think I mentioned earlier, is the smart routing capabilities. So we have this overlay network, and there's connections in all directions, and we've got this mesh. And we have sort of a basic implementation of what we call smart routing. And that's about rerouting traffic to a different path if there's a better path available, or rerouting around damage, and some of those kinds of things. There's a couple of things that I think could pull AI into the mix. We're talking about multi-tenancy, and we've got this big data plane, and we want to build to allow multiple customers to share large amounts of resources on the overlay network. So we're having a big, giant, well-provisioned mesh, and then we let lots of customers use that mesh. It's one of the things that's a discussion point.

\[22:21\] And then our smart routing implementation could very easily use statistical learning or ML or something along those lines to sort of make smarter decisions around optimization, potentially. So I think there is an aspect of what we're doing with that overlay that could benefit from that kind of an approach.

**Natalie Pistunovich:** Have you seen that at all? Is that some trend that might be coming?

**Michael Quigley:** It's mostly just something we've talked about in discussions about the product. I don't think there's anything necessarily -- there's no mandates or anything like that coming down the pipe. It's not a huge area of focus, but it's something that we've talked about a bit as a team.

**Natalie Pistunovich:** And generally -- it's a question about the ecosystem, and it's obviously a very big question on something that moves way too fast, but is this a trend, or a direction (direction is a good word) that the zero trust ecosystem is going towards?

**Michael Quigley:** I don't think I've seen much about zero trust architectures in AI at this point. I think most zero trust implementations are mostly trying to get people to understand a) the need, and b) the architecture and how you kind of adopt these things, and getting a good foothold for what they do. I don't know that, by nature, a lot of these things are going to be tools to help you optimize a lot of what's going on. I mean, I do have some interesting stories about that in terms of optimization stuff that we've done along the way, but...

**Natalie Pistunovich:** That's very interesting.

**Michael Quigley:** Yeah. As a side note, one of the things that I worked on a couple years ago was we -- one of the things that our previous closed source product did was it did a really good job of sort of being a WAN optimization layer. So you could send traffic through it, and it would in some cases outperform a generic TCP connection by a good bit. Sometimes two, to four or five times what a TCP would do, especially on like a poor-performing link, the other side of the planet, that kind of a thing. Big, long link, with a lot of packet loss. So one of the things I worked on was a library I called Dilithium. And the overall product, I just called it -- I apparently was on like some sort of Star Trek kick at the time... I called it Transwarp. And it was to build a user space protocol that acted like TCP. So the goal was to have the same reliability guarantee, to have the same sort of look and feel as an end user, as something like TCP, but provide a better performance than TCP.

So I actually was able to get to a point where on lossy links especially, and certain -- it didn't work in every case, it wasn't always faster than TCP, but in a good handful of cases we saw two to five times faster performance. The main thing that I think helps in those cases, it's all about - if you look under the covers, TCP is doing packet loss mitigation; it's trying to look and see "Hey, I sent all these UDP datagrams, and things didn't arrive; things have gone missing." And there's certain fairness heuristics built into TCP, where if you've got 100 TCP connections that are all sharing an oversaturated link, they're all going to try and back off and be generally fair to try and make sure that all of the TCP connections or whoever else might be using that link is getting a reasonable slice of the available bandwidth. Well, the protocol I built didn't care about that. It assumed that the only thing that was going across that link was this Dilithium connection. And it didn't try and be fair, or do anything like that. It just tried to saturate the link as much as it possibly could.

**Natalie Pistunovich:** And because it worked best for the edge cases where it was, for example, far, and then it also means it was not very common, so it was not competing too much, so it's okay, kind of... It's okay greedy.

**Michael Quigley:** \[26:02\] Yeah, exactly. It was designed to be used in cases where it was okay to be that kind of greedy. I believe that's still available as a transport option in Ziti. So I think it's still -- I don't know, I haven't looked to see if anyone's pulled it out, but I want to say you can still set up a transport mesh and have that protocol... And again, there's certain cases where I think it might perform less well than TCP. I think local hosts -- like, there's a couple places where the fact that it runs in user space, there's some buffering issues and things where it doesn't always perform as well as it could... But for certain kinds of links it's definitely -- you'll get a pretty good performance boost over TCP. And that repository is in our -- if you go to github.com/openziti/testkitchen, we've got a separate sort of GitHub group. There's a -- I believe it's there; there's a Dilithium project. It's all in open source, so people can check that out.

**Natalie Pistunovich:** Taking notes of all the things you're mentioning - and this will all be part of the show notes, with links... So if anybody wants to go and check this out, you will find this in the show notes.

**Michael Quigley:** Yeah. If there's any links that you don't find or anything, let me know, I'm happy to help out with that.

**Natalie Pistunovich:** Yeah, it's interesting... When you say that, I'm thinking of a project that I did as part of my graduation project in university; or it was a somewhat similar, but I like finding comparisons between two fields. So that one, when you do sampling of signals, you have to follow the Nyquist rule, or theorem.

**Michael Quigley:** Yeah.

**Natalie Pistunovich:** And then that was specialized -- the by-focus was on the subnyquist, when it's a very dead and empty -- I forget all the terminology already, but when it was in subnyquist, then you can change the behavior also to be more greedy. So it's nice to see the same pattern goes over everywhere.

**Michael Quigley:** Yeah, absolutely. I'm also a musician, and I do much audio engineering, so I'm familiar with Nyquist... Yeah, I get that.

**Natalie Pistunovich:** Yeah, what is your favorite theorem as a musician?

**Michael Quigley:** My favorite theorem? I don't know that I have a favorite theorem. I probably don't have a favorite theorem, but... Yeah, I'm familiar with Nyquist, and \[unintelligible 00:28:03.20\]

**Natalie Pistunovich:** Yeah. Identity and access management, and audit log, and so on - is this something that is also common in zero trust?

**Michael Quigley:** I think different products approach it in different ways. I know for us, we -- so, like any business, we have to find a way to make money... So we kind of break our universe internally into what we -- all of our products are open source projects. So we don't really have special things that we sell for more money, or anything like that. We do -- primarily, our main bread and butter is hosting OpenZiti for people, and running it in a professional way. We call that CloudZiti. So we've got OpenZiti and CloudZiti. And I know that CloudZiti does have full -- there's audit logs and all that kind of stuff for all those things. And the way that access management works in Ziti - we have a policy system. So identity -- \[unintelligible 00:28:58.16\] there's identities, there's services, and those things are controlled; like, who can access what is controlled by policies. So it's very much a rules-based access control sort of thing.

**Natalie Pistunovich:** In your cloud solution are you using Ziti?

**Michael Quigley:** Oh, yeah. We run the exact same code that we ship as open source. We haven't added anything new to it, or anything. There's no special sauce, or anything like that. It's literally the open source project.

**Natalie Pistunovich:** But are you also users of it yourself?

**Michael Quigley:** Yeah.

**Natalie Pistunovich:** Like, are you trying it once from the user side, and once from the -- so you experience all the pain points.

**Michael Quigley:** Absolutely.

**Natalie Pistunovich:** Cool.

**Michael Quigley:** One of the people on the team -- I always use the old dogfooding analogy, like eating your own dogfood... It's like, no, no, no; we drink our own champagne. That's a better -- so our champagne drinking is that... We used Slack in the old days; we switched to Mattermost. So we use Mattermost, and our Mattermost is zitified. So the only way it's completely dark, and the only way you can access our Mattermost is through Ziti. So every day, all day, our internal communications are all through Ziti.

**Natalie Pistunovich:** So every time there is onboarding, something in the documentation gets better.

**Michael Quigley:** \[30:10\] Yeah, that's the hope. Documentation is hard, though.

**Natalie Pistunovich:** Yeah, for sure. Although I guess it's one of those things that ChatGPT can also help with "Here's what we do. Explain this better."

**Michael Quigley:** Yeah. I've actually been -- not just ChatGPT, but I've been running a bunch of local LLMs for various writing tasks and stuff, and that stuff can be very useful.

**Natalie Pistunovich:** What is your favorite LLM these days?

**Michael Quigley:** One of my favorite LLMs is Karen the Editor. There's an LLM called Karen the Editor, and it's basically an LLM that was trained to edit text. So I kind of almost use it like a Grammarly kind of thing...

**Natalie Pistunovich:** Interesting.

**Michael Quigley:** Yeah. And I don't often take the text right out of it, but I'll look at what it suggests and I'll sort of rewrite that... Because I very much like to sort of do my own editing as much as possible. But it's good to sort of diff what I wrote and what it thinks. I'm sure I could just use something like Grammarly and have it be a little slicker for me, but I kind of like the DIY ethos of doing that myself.

**Natalie Pistunovich:** Yeah, yeah. Interesting. I'd never heard of that one, but it's also in the show notes.

**Michael Quigley:** Yeah, okay. Yeah, Karen the Editor. Yeah. On Hugging Face there's a user called TheBloke, that anyone that uses open source LLMs is probably familiar with. He has a 4bit quantization of that model that I use all the time.

**Natalie Pistunovich:** What's a good practice of integrating that with DevOps pipelines?

**Michael Quigley:** A good practice of integrating that with DevOps pipelines...

**Natalie Pistunovich:** I guess you have internally some DevOps pipelines. You mentioned you're using generally Ziti internally, so maybe something that you can share that you are doing internally...

**Michael Quigley:** I mean, so internally we've got a pretty extensive smoke test. As a side note to that, there's another open source project that we kicked off a while ago called FabLab. And it originally stood for the Fabulous Laboratory, or something like that. I forgot -- it's taken a life of its own, but it's basically DevOps tooling for Ziti. And we've got a number of smoke test components and things like that that run as part of our CI. So we do a lot of CI stuff with Ziti internally to test it and make sure that -- you know, smoke testing and those sorts of things.

So zrok as a project sits on top of Ziti. So it's what we call a Ziti native application. And the thing that makes that interesting - it's about automating the control plane in addition to just using Ziti as a framework for communication... But there's a bunch of CI-related bits that we very much run Ziti, and host zrok on top of it. And that's a service that users can actually go to zrok.io and sign up for. Just like you can sign up for ngrok, you can sign up for zrok; it's the same sort of idea. But that's all running in production, it's running OpenZiti, and basically there's some CI components to make sure that we're always up to date, and that sort of thing.

**Natalie Pistunovich:** How do you measure if this is doing a good job with zero trust?

**Michael Quigley:** How do we measure?

**Natalie Pistunovich:** Yeah. What would be even a KPI for zero trust, other than "We're not getting hacked"?

**Michael Quigley:** Right?! \[laughter\] Probably, I would imagine usage. If you were an organization and you kind of wanted to measure zero trust uptake, how much uptake there is for zero trust, the number of services, the number of endpoints, the amount of traffic, things like that would be good indicators of like the success of that, versus how much traffic is not going through a zero trust network or through zero trust endpoint. That differential might be a useful thing to measure to know how you're doing with that.

**Natalie Pistunovich:** And maybe also delay or latency before and after...

**Michael Quigley:** Sure. I would think of that as more like an operational metric, like how well is the overlay performing. And I would imagine -- there are cases, like with the whole Transwarp/Dilithium thing, there's cases where an overlay could improve the performance of what you're doing, but I think in general most people aren't using them to try and make things faster or better. I think it's more about -- it's physics. If you're going to put your bits through more CPU, it's gonna take longer.

**Natalie Pistunovich:** \[34:13\] Yeah, yeah. It's a trade-off that probably is okay to have also...

**Michael Quigley:** Yeah.

**Natalie Pistunovich:** This is a question in the context of what would you measure and not. Like, is it good or bad...? Sometimes we have to do that.

**Michael Quigley:** Yeah, absolutely. I mean, operationally, CPU utilization, all those normal things are all good things to measure in terms of performance.

**Natalie Pistunovich:** I'm trying to understand now if I want to do tracing, and all the tunneling, and like finding smart paths happening. What would tracing look like? Would you be able to see the lifespan and location span of such a request?

**Michael Quigley:** I believe we've got the tooling to do all of that. I know that that's one of those things that's looked different throughout the life of Ziti. Things have gotten better, and responsibilities have moved around; that is a tough problem, because there's a lot of layers to something like this. It's going through an overlay, there's various underlays where you're going from overlay concepts to underlay concepts... Overlay concepts being like "This identity, in this service", and underlay concepts being like "These pairs of IP addresses, and these ports." There's a lot of translation that needs to happen at various layers, and I do believe we're at a point now where having run this stuff for production customers for a number of years now we've had to solve enough problems and drank our own champagne enough that we can --

**Natalie Pistunovich:** I see what you did there.

**Michael Quigley:** Yeah... Those tools are reasonably mature at this point. You know, Ziti in general is still pre 1.0. I think we're pretty close to getting a 1.0 out the door, but we're still at like 0.30, or something.

**Natalie Pistunovich:** There will be champagne at 1.0.

**Michael Quigley:** Yeah. I know back in the early days I had built some tooling that would let you look at over -- just like you would do like a TCP dump of an underlay network, like taking a look at what packets were there. There was -- it probably is still there, but there was tooling to do the same thing for overlay concepts, like looking at what flow control is doing, and routing, and some of that kind of stuff, and how things are packetized. But just like most traceability things, I'm pretty sure we can assign a UID to a connection and trace it all the way through.

**Natalie Pistunovich:** Yeah. It's always interesting.

**Michael Quigley:** Yeah. Those are tough problems to solve.

**Natalie Pistunovich:** Yeah, yeah, for sure. Those are very interesting challenges that you're having... And I guess you're accepting contributions to the open source repos, always...

**Michael Quigley:** Absolutely. We love external contributions. That's one of the things I'm very happy about with all of this, is that we're very committed to open source; we're very much an open source-first company. It's one of my favorite things about the stuff that I get to work on. I feel very fortunate that I'm able to work on open source full-time. That's amazing.

We're a bunch of real people who are sitting around and working on this stuff, and we do keep track of stars on repos, and stuff. So every time a flurry of stars comes in, there's a lot of us that get pretty happy about that. So we always appreciate those things. Anytime anyone submits a PR or something, we're like "Oh, my God, there's somebody from the outside world submitting a PR right now." It's always really nice.

**Natalie Pistunovich:** Can anyone submit a PR? Are there some guidelines that you're asking to follow, or is this pretty easygoing?

**Michael Quigley:** I think it's pretty easygoing. We do have contribution guidelines. I think you have to -- I think there might be a little form, or something... Like a lot of projects. I think there might be a form or something you have to fill in, but it's relatively straightforward. There's not too much to it.

**Natalie Pistunovich:** And Hacktoberfest is around the corner.

**Michael Quigley:** \[37:44\] Yeah, yeah. That would be amazing. One of the things that are part of my world right now is we do have that zrok SDK, and that's sort of the easiest possible way to sort of get yourself programming on top of something like OpenZiti. You can sign up for a zrok account, download it, take the SDK for zrok as a dependency in a Go project and have a working application in five minutes. It's super, super-easy. We are rolling out SDKs for other languages and stuff, too. I know for a fact we're working on Python and Node right now. And I'm sure we'll probably roll out something in Rust, and I'm sure we'll hit some of the high points there, but... I mean, it's actually a really good time to get involved with some of that stuff. It's really easy to build very powerful peer-to-peer stuff.

The example I built for zrok is sort of a -- I called it a paste bin, because when I first started coming up with this, I was thinking of it kind of like a paste bin sort of thing, but distributed. It's probably not the best name for it, but it's basically a buffer that you can work with between any pairs of machines. Any enabled zrok machine, you can shove data through it like it's a copy and paste buffer. And it's also the SDK example. The core of it is like three lines of code on both the server and listener side. Like, it's trivial to get your head around some of that stuff.

**Natalie Pistunovich:** And if I start with the Go SDK, what is kind of the out of the box, out of the simplest box things that I can look at?

**Michael Quigley:** In terms of like the Go SDK?

**Natalie Pistunovich:** Mm-hm.

**Michael Quigley:** I mean, at the end of the day it's pretty straightforward. A lot of the SDK itself sort of wraps the identity concepts. So all of the things that you would have to deal with - they're complicated; like the identity, and the cryptography around it, and all those things are sort of already wrapped up with a convenience wrapper in the SDK. So all you have to do is call the right API calls, and basically, you've got all your identity and all those things working. And then from there, it literally walks and talks just like a regular Go server or client. It's net.Conn, net.Listener, and those things act just like they would act if it was just plain TCP, or something along those lines. So if you're familiar with writing a network server or writing a network client, it's pretty much the same thing, but it goes over and overlay and it's all secure and zero trust, and those kinds of things.

**Natalie Pistunovich:** Lots of questions and lots of interesting learnings for me here.

**Michael Quigley:** Yeah.

**Natalie Pistunovich:** What is your favorite protocol? You keep saying TCP. Is it TCP?

**Michael Quigley:** No. What's my favorite protocol...?

**Natalie Pistunovich:** \[laughs\]

**Michael Quigley:** I don't know, some of the more interesting things I've done in my career have involved building custom protocols on top of UDP.

**Natalie Pistunovich:** What was the customization doing?

**Michael Quigley:** So in a previous life I worked on a product that was telepresence-oriented. So I actually have a patent for embedding haptic data into live telepresence streams.

**Natalie Pistunovich:** What is haptic data?

**Michael Quigley:** Touch data.

**Natalie Pistunovich:** A-ha!

**Michael Quigley:** So like controlling devices, and things like that, things that involve touch, and then synchronizing that with audio and video, so that it's an immersive experience. Actually, I was the author of a patent along those lines.

**Natalie Pistunovich:** Wait, I'm trying to imagine what does it do. You touch the screen and then it makes sounds, basically?

**Michael Quigley:** The device on the other end, basically...

**Natalie Pistunovich:** Mm-hm.

**Michael Quigley:** Yeah, so it was used in the entertainment space. But it's the low-level implementation of it I built, and at the time - this was pre WebRTC. So this was before WebRTC was a thing, which is built in every browser now, and it's a good C++ library for doing that sort of stuff. I had to build my own engine that was basically audio/video, more or less like a Skype or a Zoom. I had to actually build that from the ground up... Which sounds like a lot, but --

**Natalie Pistunovich:** It does.

**Michael Quigley:** ...the nice thing about doing that was I was able to cut corners, because I didn't have to worry about interoperability. So I didn't have to worry about like conforming to standards, or anything. I could just say "I'm going to use VPA, and I'm going to use this audio codec", and not worry about negotiations, or anything like that. So I was able to build something that let me save some time, because I didn't care about interoperability. But that did allow us to sort of -- one of the things you have to deal with when you're writing an audio/video client like this is you have to make sure that the lips move at the same time that the words come out, like when you hear the audio.

\[42:05\] So there's a lip sync thing that has to happen, because generally, the audio and video streams show up independently; they're separate UDP streams. So you have to synchronize those in the client; you actually have to play them out at the same time. So synchronizing arbitrary streams of data is just a matter of building a synchronization primitive that lets you synchronize more things.

**Natalie Pistunovich:** So you were building this type of synchronization on top of the UDP, basically.

**Michael Quigley:** Yeah, yeah. So again, telepresence is always about UDP, because you need the lowest possible latency, and also, versus something like TCP, you can't -- TCP will hide the fact that there's packet loss from you, whereas UDP, you're dealing with low-level data grams, so you know if you lose packets. So the way that you tune -- if you're building like a telepresence client, the way you react to packet loss is you're going to tune a codec, or change your transmission rate; you're going to change things in a different way than you would for like a network protocol, because you're concerned with latency.

**Natalie Pistunovich:** Yeah. And you can interpolate, and that's okay.

**Michael Quigley:** Yeah, exactly. There's things you would do in that domain that you wouldn't do in other domains. It's one of the things I'd like to work on at some point. I'd like to actually do some telepresence stuff on top of overlays in things like Ziti. One of the cool things about zrok is it lets you share things really easily without having to worry about "Do I have to open ports?" or any of that sort of stuff. It'd be really cool to do a self-hostable peer-to-peer telepresence setup on top of something like Ziti. Maybe it's something I'll get to work on in zrok at some point, I don't know... But I would probably enjoy that.

**Natalie Pistunovich:** Interesting, yeah. There must be some interesting usage in here also for interpolation, and just using UDP to make it fast \[unintelligible 00:43:43.21\] some data. We have to brainstorm later.

**Michael Quigley:** It's still a thing in our roadmap to talk about -- you know, the mesh network that we build now is all about... It uses TCP connections primarily. TLS-encrypted TCP connections. But it's still very much on our roadmap at some point to get around to renewing the work I started with Dilithium, and talking about UDP-based transports and things for Ziti... Because you can get some performance out of those things.

**Natalie Pistunovich:** For sure. How reasonable is it to plan some UDP for zero trust? How bad would be packet loss in the context of zero trust?

**Michael Quigley:** I don't know that those are necessarily super-related. On top of the overlay itself - so we actually do TCP connections between routers, but the data gets repacketized on top of the overlay. So it's not like a connection between endpoints goes across the overlay; it's basically taking all of the local loops from each end of the -- so you have the overlay, you've got the endpoints, they each have their own connection to the overlay, and then the data that goes across the overlay is packetized again at a higher level. So it actually acts like UDP across the overlay... Which is part of how we avoid -- one of the things people often talk about is you're going to sort of tunnel TCP through another layer that's more or less TCP, you end up with weird effects with flow control, and those kinds of things. We avoid that by repacketizing the data.

**Natalie Pistunovich:** And is data loss that can happen with UDP a problem?

**Michael Quigley:** No, because all of these things have the normal kinds of flow control and retransmission and all the things that you would expect to have in any sort of packetized network.

**Natalie Pistunovich:** Mm-hm. So basically it's solved on another layer, making sure that this is consistent. I see.

**Michael Quigley:** Yeah, yeah. So the overlay guarantee -- well, if you send a packet across the overlay, it's guaranteed to arrive just like a TCP connection. But that may actually incur packet loss that needs retransmission, and some of that sort of stuff.

**Natalie Pistunovich:** All those trade-offs.

**Michael Quigley:** Yes.

**Natalie Pistunovich:** Okay, so UDP is your favorite protocol.

**Michael Quigley:** I would think so, yeah. To me it feels very pure, and...

**Natalie Pistunovich:** A lot to do \[unintelligible 00:45:54.12\]

**Michael Quigley:** Yeah. To me, UDP is sort of... You know, datagrams - that's the internet.

**Natalie Pistunovich:** Okay. Then I will ask one more question as we are moving into the unpopular opinions.

**Jingle**: \[46:11\]

**Natalie Pistunovich:** So do you have an unpopular opinion? ...on any topic at all. It doesn't have to be on packets or on protocols.

**Michael Quigley:** I have a lot of unpopular opinions... Yes, I have an unpopular opinion. My unpopular opinion is I think we're going to look back at some point in the future - let's call it 10 years, 15 years - and this whole model of content and things being shared, or things being hosted by somebody else for the sake of convenience, streaming, whatever you want to call it, will flip back around. I think we're going to move back to a world where I can own a piece of content and curate it and manage it myself. I feel like it's sort of a fundamental human thing to want to collect things, and curate collections, and build collections... And I think the world we live in right now, where everything is sort of streaming doesn't really support that very well. I mean, it's very common you might fall in love with some TV show and all of a sudden it's just gone. I think we're gonna move back to a place at some point where the -- I don't know how that will look technically, or how that'll work socially, but I think we'll move back to a place where you can sort of say "I own this thing." And I think that's an unpopular opinion.

**Natalie Pistunovich:** I saw an interesting startup that does something a little bit similar... In some way, let's say it reminds me of that - as an artist, you upload images, or something that you do, and then people can generate images in your style, and you get the royalties for that. So that sounds like a --

**Michael Quigley:** Yeah...

**Natalie Pistunovich:** ...relative of this concept.

**Michael Quigley:** Yeah. I mean, personally, I kind of wish there was a -- if you're familiar with Bandcamp... I walk this walk. I have huge collections of media that I curate, and I own. I still buy CDs, and I still buy a lot of music from Bandcamp, because I like to download it and own a copy of it. I kind of wish there was something like Bandcamp, but for movies. I don't actually care about owning a BluRay, but I'd love to own the highest possible quality copy of like my favorite film, and be able to legally download a good copy of it. That would be fantastic. I'd be a huge customer or something like that.

**Natalie Pistunovich:** Interesting. I think I will disagree with you here. I don't mind having this just as a on-demand. And I'm also not the person who watches the same movie twice, so... Maybe I'm not even in the focus group anyway, but it's a good start for an unpopular opinion, yeah. \[laughs\]

**Michael Quigley:** Yeah. I figured that would be a very unpopular opinion.

**Natalie Pistunovich:** I have an unpopular opinion that I'm still trying to phrase on this field... So I'm mostly agreeing with it, but maybe I'm still not fully agreeing with it myself... But zero trust is a little bit like a trust issue. So if you want to have practical trust issues, maybe you can learn something from the fundamentals of zero trust... But maybe it's a bad idea. Maybe I will vote against this when this becomes a poll on Twitter as well.

Well, that was educational and interesting. Thank you for answering all the many questions, and thanks for a great conversation on networks as well while at it.

**Michael Quigley:** I really enjoyed it. Thank you for having me.

**Natalie Pistunovich:** And all the many, many tools and links and repos that you mentioned will all be in the show notes.

**Michael Quigley:** And we're all real people, so feel free to reach out. We're on GitHub, and we're very, very reachable.

**Natalie Pistunovich:** Thank you very much, Michael.
