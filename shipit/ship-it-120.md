**Justin Garrison:** Hello and welcome to Ship It, the podcast all about what happens after you git push. I'm your host, Justin Garrison, and with me as always is Autumn Nash. How's it going, Autumn?

**Autumn Nash:** Hey.

**Justin Garrison:** It is an exciting show. I'm so glad that Du'An just jumped in... Because I messaged him like last week.

**Autumn Nash:** He makes networking accessible and interesting.

**Justin Garrison:** He mentions it in the interview that he likes going to in-person conferences and stuff more than virtual things, and that's the first time I met him, and I remembered him ever since then. So absolutely, if you get a chance to be at a conference, say hi, because he's fantastic to talk to, and knows a lot, and it's super-fun just to talk and learn.

**Autumn Nash:** He's very knowledgeable, and he's got a great presence.

**Justin Garrison:** Yeah. So I was going to say, the thing that I kind of learned out of the conversation was really just, I love how -- I didn't realize he was in the military, and I didn't realize that he started with just his first networking in IT, was there learning OSI. Because OSI for me came much later. I didn't know what the heck that even meant.

**Autumn Nash:** I've met a lot of people from the military - maybe it's also because I'm more involved in the military community, but I've met a lot of people that start their networking career or maybe hardware career, or people that work in data centers through the military, and I think it's amazing, because it's a lot of hands-on learning in that. So I think it makes really great networking in hardware engineers.

**Justin Garrison:** Yeah. I really wonder how the education in any sort of service differs from something like a boot camp, or other areas you might try to go learn the same stuff... Because it seems like a lot of the people that come out of that learning experience - it sticks with them for a really long time.

**Autumn Nash:** Well, when your lives depend on your networking abilities... You've got to get it right.

**Justin Garrison:** The stakes are a little higher.

**Autumn Nash:** Well, not just that, but you're going to scramble really hard to fix it when it does break.

**Justin Garrison:** Do you have any big takeaways from the conversation?

**Autumn Nash:** I just thought it was another example of people in tech from different backgrounds having so much to offer.

**Justin Garrison:** Yeah. And also, this conversation, I guess, meanders a little bit. We started networking, and we ended up in AI, but it's all kind of tied together still. There was a lot of these fundamental learnings that played a role in all the pieces of conversation. So... Really fun.

**Autumn Nash:** I think a lot of our jobs are pushing us to do what we started, but then also pushing us to have something to do with AI. It's getting more -- I think everyone's trying to figure out where they can put it in their tech stack, and how they can be more efficient with it; well, companies are. So it's kind of a shift that everybody's kind of dealing with right now.

**Justin Garrison:** And the people that are trying to go -- I've been learning a lot about it, but I'm mostly trying to find where to not put it in. The experts are the ones that'll tell you when to not use something and why. And if I could tell someone "Just go do the machine learning thing instead of the gen AI thing", maybe that's a better outcome; or just a straight regex or if statement. Like let's find the lowest common denominator here to add value.

**Autumn Nash:** I'm always looking for something to be more efficient, and to be more productive, and to be better at building software... But I also think, for one, we can't talk about it if we don't know about it. We can't give our opinions, and people are always asking your opinions, and I don't want to say something -- like, people are always like "Oh, I hate AI" or "AI is going to be good, or bad about this." But if we don't do our due diligence to learn about it, we can't give an opinion on either.

**Justin Garrison:** Yeah. And at some point, you just have to ship something. You have to say "Hey, we built the thing. Here's why it didn't work out, and why you might want to choose something else." So let's go ahead and jump into that interview, and we will see you all after to talk about the Meta white paper I read. \[unintelligible 00:04:28.25\]

**Break**: \[00:04:32.04\]

**Justin Garrison:** Hello and welcome to the show, Du'An Lightfoots. Du'An's a developer advocate at AWS. Welcome and thanks for coming on the show.

**Du'An Lightfoot:** Hey, thanks Justin, and thanks Autumn, and the whole Ship It community for having me on.

**Justin Garrison:** We met one time, I believe, at internal AWS DevRel summit. And you do -- you focused on networking at the time, and I think you still are. What do you do as a networking DA?

**Du'An Lightfoot:** I basically do everything that I used to do my entire career, except for like the production side of engineering. But I'm still learning about networking, but specifically in the cloud, and how it's being used for engineers on-prem, as well as developers. And I kind of take everything I learn and explain it in a way that they understand. So if we're talking about hyperconnectivity - okay, let's talk to engineers about what that looks like on AWS. If we're talking about automating workloads with application networking or something, let's talk to developers about how we're doing this through Kubernetes, and VPC Lattice, and things like that. So I may do that through videos, blogs, conferences... Wherever I need to go, wherever the community is, and where they're at, I try to go there and meet them, and just help them grow in advance.

**Autumn Nash:** Where do you post your stuff? Because I'd love to learn about networking. When I was in networking classes, it felt like Charlie Brown's teacher talking to me... I'm trying to do the math, and I'm just like "But why?"

**Du'An Lightfoot:** So traditionally, before I started AWS, I had a YouTube channel. Lab Every Day was my YouTube channel. And so I posted a lot of stuff there... Also before I joined AWS I worked at Cisco. And so I made a lot of content at Cisco, specifically at DevNet. I even created a course, Python for Network Engineers, that Cisco sells to this day.

So now at AWS, I make content on - I would say I've done some blogs, but a lot of my content is in-person, because I like going to events, I like talking to people and I like solving the problems that they actually have. Because a lot of the content that's out there has already been done, because we have some amazing essays that have been talking about networking forever. So if you are looking for the content, networking content delivery is what it falls under, whether it's on blogs, whether it's on videos, whether it's on YouTube; you can find basically all the topics under that search.

**Autumn Nash:** How did you get into networking? Tell us about your networking career before you got to be a DA.

**Du'An Lightfoot:** Yeah. So how did I start in networking? Well, I went to the military back in the year 2000. So this was right at the Y2K. And when I was in, my first course in tech was on networking. It was a course on the OSI model. And so it was like a four-week course where we started from the physical layer, taking cables, plugging them in, splicing them, doing all types of things. This was when fiber - you had to do the figure eights, and actually cut and splice your own fiber cables. And I think at the time we were on like Cat 3 Ethernet. So this was a long time ago. But yeah, that's how I actually got started, just in the military, doing that. And yeah.

**Autumn Nash:** It seems like a lot of network engineers are former military, because I think it's one of the -- like, it gives a lot of good hands-on experience learning that type of skill.

**Du'An Lightfoot:** \[00:12:03.15\] Yeah. Networking is one of those technologies where people either start at, or come from somewhere else. Telecom, a lot of phone engineers that were doing analog phone systems, or PBS phone systems, they migrated from doing that to network engineering. And then I actually listened to a lot of like CEOs from like Google, and large companies... They actually started in networking, for some reason. And yeah, it's just one of those things where people start out and then kind of go other directions.

**Autumn Nash:** I think it's like learning one of the harder pieces of engineering, because network engineering is a very in-depth skill, that is complicated to learn, but also it's not one that you hear people making content for, and it's not like the sexy "Oh, everybody should go learn this." Maybe the cloud or other things are, you know. So what is different about learning networking in the cloud? What are you learning different working at AWS, doing that kind of...?

**Du'An Lightfoot:** I think the first thing you have to understand is that it's the physical part, the layer one side - take that out of your mind. Even the layer two connectivity, kind of take that out of your mind, and really start from that layer three when it comes to networking. So the IP addressing, and the routing - all of that is there. So if you're getting started with network on AWS, you're going to start at that Amazon VPC. So think of this like a container for all of your compute. You store your compute, whether it's EC2, you can actually connect to Lambda functions through databases, et cetera, and through the VPC. And then from that VPC, you start to establish connectivity to different VPCs, other clouds on-prem, and et cetera. So you're kind of building your own data center inside of that VPC.

**Justin Garrison:** I think a lot of the AWS abstractions and concepts are all just rooted in this data center sort of mindset of like "Oh yeah, if you know what a data center is, and you ran one before, AWS is going to feel right at home." And then I feel like some of these newer cloud environments, like CloudFlare or something else - it's like global workers. It's like "Well, how does that work? What's going on here? Like, I have this thing that runs everywhere..." You're just like, just ignore all the pieces below that layer of where your application is.

**Du'An Lightfoot:** Yeah.

**Justin Garrison:** But what do you see -- because this is a Ship It show, and this is all about people running applications and maintaining things... What's one of those like things you see people do incorrectly on a VPC when they create it, that hit them like a year later, when they're actually in production, shipping code? Is there something that you would call out and say like "You should do this when you're setting up your VPC the first time"?

**Du'An Lightfoot:** Yeah, I think people are oversizing VPCs, or not thinking about subnets, like the actual use. Because if you're on-prem - okay, I can do this whole \[unintelligible 00:14:57.09\] in my VPC... And then you do that, and then you have all these IP address conflicts, you have overlaps because you didn't right-size that VPC. So I think just understanding what you really want to accomplish with your VPC, what type of workloads are going to live in there, how big will you want to scale those workloads to... And then kind of map that out in the beginning, and then make it easier as you start to connect to other regions, or maybe even connect to on-prem, or even other clouds.

**Justin Garrison:** I think that overlap is really hard, because how you set it up changes over time. And what we created the first day is different than how we're using it in three years, and you have so many different orgs, and other VPCs and overlaps... It becomes difficult. What's your take on IPv6?

**Du'An Lightfoot:** I think IPv6 is good. I think IPv6 should be used more. If I'm a dreamer right now, and I'm thinking about networking, I think the way we allocate IPv4 IP addresses should be a thing of the past. I don't know if you use VPC lattice, but it has this concept of a service network. You create your service network, and then you create services that are associated with that service network.

\[00:16:08.28\] And when you create the service network, you get an IP address, IPv6 IP address space, and it handles all of the networking and DNS for each of your services. So let's say you have different VPCs, and the services that are in those VPCs, and they need to communicate between the services. Normally, you would have to worry about ensuring there's no IP address overlap. But with VPC lattice, it handles all that for you, because it's assigning IPv6 addresses, and it's kind of handling the communication in a PIP address, the 169.254 that you will never see. So it handles all of that connectivity within AWS, within the region, for your different VPCs and your services, removing the need to even have to worry about IPv4.

So when I think about IPv6, I think that we should use it. It's so large that we don't really have to worry about overlaps and the challenges that we face, and then when we think about networking and routing and things, I think at the end of the day, a network engineer's job is going to look a lot different in 10 years than it does today.

**Justin Garrison:** Because of the address space, or because of how things get --

**Du'An Lightfoot:** Just because of -- like, what I'm seeing with VPC Lattice, I think we could actually do that on a larger scale. Enterprise could actually do this maybe globally, to where they don't have to worry about routing within the enterprise. They could kind of just use IPv6 and DNS to, I would say, automatically connect devices to a specific domain or infrastructure, without the need of saying "Okay, let's deploy this router. Let's establish all the VLANs, let's establish all the connectivity in the scopes that we need for IP address space." Everything is kind of done automatically. That's my thinking.

**Justin Garrison:** Let me just back up a little bit for anyone that's not familiar with VPC Lattice. VPC Lattice was one of the very first PR facts that I read inside of Amazon when I started. And I was excited for it, because I was like "Oh, this is really cool, because you just handle all that stuff and it becomes invisible." But let me see if I describe it the way it's actually implemented, because I don't actually know the details under it.

Essentially, you have networks everywhere, and they all have their own subnets and IP address range. And Lattice comes in and attaches another virtual IP address that can route to anywhere else inside of AWS. It could also be a different account, or a different region, or a different VPC, and that can route to any other endpoint because of the way it handles it on almost like the backend of a VPC, or the backend -- a lot of people say you have to connect your VPC together with like star topology, or these things... Like "Oh, we have to interconnect these." No, Lattice is just like "This application should be able to talk to these other applications. I don't care how they're connected, AWS, you route it." Is that roughly it?

**Du'An Lightfoot:** It's region-specific, so it's going to handle it within a region. So you have your service network. And your service network -- think of if you need to connect two VPCs. You're either going to use something like VPC parent, you're going to use maybe a VPN, or you could use a transit gateway to establish connectivity between the two. With VPC Lattice, you create a service network and associate those VPCs with the service network. It doesn't matter what the IP addresses of the VPCs are.

And then once you have a service within those VPCs, or a service that's created, it doesn't matter what the IP -- let's say you've got a Kubernetes cluster or a node or whatever, that's serviced within Kubernetes, and it needs to communicate outside of Kubernetes, or within Kubernetes. How are you going to connect to those services? Via IP address or the domain DNS, right? And so what it actually handles is that DNS, and it's using IPv6 rather than IPv4 to connect in between the services. So there's no need for a VPC parent, there's no need for a transit gateway. Because the service network of VPC Lattice is kind of handling that for you. It is handling that for you.

**Autumn Nash:** Where do bastion hosts come in?

**Du'An Lightfoot:** Bastion hosts is if you're trying to connect let's say from the internet into a VPC that's in a private subnet.

**Autumn Nash:** Oh, okay.

**Du'An Lightfoot:** \[00:20:13.00\] Because a private subnet - you don't want to have direct connectivity from the internet. You're going to go through a bastion host, which will be in a public subnet, meaning that it's a subnet within a VPC that has connectivity from the internet.

**Autumn Nash:** So kind of like gates to make sure that you're staying secure.

**Du'An Lightfoot:** Correct.

**Justin Garrison:** But if you're SSH-ing to prod \[unintelligible 00:20:30.13\] You still might be having some problems... But yeah, I mean, it's like a proxy for SSH, and you're like "Oh, I need to get to that host."

**Autumn Nash:** I just want you to know that I just wish I knew you when I was taking my AWS tech tests, because there were just DNS, and VPCs, and I was like "What is any of this?"

**Justin Garrison:** And so much of cloud, or at least what I like to call -- like, the traditional cloud is networking fundamentals. And if you don't understand how to set up a network, you're going to have a bad day. Once you're shipping something, you're like "Oh, we need to expand", or we bought this company and we need to incorporate their stuff... Because all of that peering immediately is like "Oh, what's your IP address range? Oh, we can't route to you, because IPv4 is not going to allow."

I remember at Disney+ we literally were like -- they bought the startup, and they're like "Hey, we want you to be part of the Disney Global Network." We're like "No we use all those CIDRs. We can't route to you until you move to --"

**Autumn Nash:** Okay, the CIDR math though - nobody prepared me for all of it. Like, nobody prepared me for that. Okay, so if you weren't in networking, or really good at the cloud, how would you explain IPv4 versus 6, and why one is better, I guess.

**Justin Garrison:** Autumn, I told you, we've got like a half hour. Du'An's gonna get it done. He's got this.

**Autumn Nash:** No, but I think that it's different when you read things. And then when you have someone like you to talk to, it is so much better to learn in that way. And I think there's some things that we do great trying to create content for it, but when you get to have a conversation about it, I think we can really teach people and help people, because there's so many things that they go into just enough information on like exams, or like videos... But you still have questions, and it's cool to talk to someone like you who actually really thoroughly understands this stuff.

**Du'An Lightfoot:** Yeah. IPv4 is a 32-bit address. So if you're using like decimal to binary, that means you have four octets of eight, rather than - with IPv6 it's going to be 120 bits, and it's hexadecimal. And so if you're thinking about, let's say something like IOT, Internet of Things. We only have so many usable IP addresses that are IPv4. And so with Internet of Things you have billions of devices that need an IP address, that could possibly connect to the Internet. Well, if you try to do that with IPv4, we basically already ran out of space. IPv6 enables you to have - I don't know, I think it's billions of IP addresses.

**Justin Garrison:** I literally was setting up an EC2 instance two weeks ago... It took me two days to try to set up IPv6, so I could publicly hit this EC2 -- I did not. I failed. I didn't get it to work. But I learned a lot along the way, which is fine. So it wasn't a complete failure. But the subnet you get from a VPC -- because AWS assigned you an IPv6 CIDR. And it was like 16 quintillion addresses.

**Du'An Lightfoot:** Yeah, it's crazy.

**Justin Garrison:** It's just like, "This is the smallest one we're going to give you." I don't -- I need one. I just want one IPv6. But it's just such a large, large number, because there's only four billion IPv4 addresses. You're just like, "This is like IPv4 20 times", and it's just like "Yeah, we're not -- we're good."

**Du'An Lightfoot:** Exactly.

**Autumn Nash:** Which is wild, because if you just look at your home network - I have four satellites in my house, because everything's connected to the Internet nowadays, and it's crazy how many devices just in our house, just in regular things around our houses that are connected. My fridge is connected to my network, because I have the fridge with the screen. You know what I mean? Like, it's just --

**Du'An Lightfoot:** \[00:24:09.20\] When we talk about like home networks, they're actually -- you probably have one IPv4 address for your home, and everything is using a private IP address space, and then it's using something called NAT, network address translation to communicate with the internet. So it looks like you're one IPv4 address at home, but it's using a port to say "Okay, when I'm communicating from my refrigerator, use this port", which is at layer four. The layer three address is what's traversing the internet; when it comes back, it's saying "Okay, I came in on this port", and then it goes back to your refrigerator. That's the layer four. That's kind of why you need to understand the OSI model, because that works at the, I would say the network, the transport layer, but it also - when you're dealing with your applications and you're understanding the port connectivity to the application, now if you're serving a web server on port 80, you can't serve multiple web services on that port 80 if you already have one using port 80. So now you may have to have another web server running on port 8080.

**Autumn Nash:** See, you just made networking interesting. It was just like Charlie Brown teaching. Now I'm going to go down a rabbit hole for three days and learn...

**Justin Garrison:** Autumn, your question about like the networking CIDR math... I've found this tool called CIDR, which - as I was doing IPv6, I was trying to split it up. Fantastic command line tool, because you can just say "Does this subnet overlap with that subnet?" And you just give it this -- this is an amazing tool, that I wish I would have had a long, long time ago. So I'll put it in the show notes, because I love it.

**Autumn Nash:** Okay. Because when I was a solutions architect and they made us go through TechU, and I'm sitting there trying to do like CIDR math... Yo, I was not ready. I was like "I don't even know what a VPC is." And like a VPN, and DNS, and... We went eight hours a day for four weeks to learn about networking, and my head felt like you just jumbled things in it. Like, now I understand it a lot more, but all at once it was a lot.

**Justin Garrison:** Yeah, it's way too much. And to the source \[unintelligible 00:26:05.05\] problem... I worked at a university for a while, and one of our network engineers had this great idea to save a bunch of money, which was fantastic. They used just non-commercial, like end user IP address or network connectivity for the dorm rooms. And it had plenty of bandwidth, because they were fast enough. It was like \[unintelligible 00:26:23.06\] in the area, or whatever... But what we ended up hitting was we ran out of open ports on the actual gateway, because everyone was connecting to so many different things that you can use 65,000 ports, and then you can't do anything about it. It was a fascinating outage, learning a bunch about "Wait, how did this happen?" And they're like "Yeah, we just used all the ports on the gateway." I'm like "You can do that?" Sure enough...

**Autumn Nash:** See... This is like -- you know when your friends say "What happened was" before they tell a ridiculous story... The solutions architect to me, he was like "So somebody had an idea to save a bunch of money." I was like "Oh, no, where is this going...?" It's never good. When it starts like that, it's always going to go left.

**Du'An Lightfoot:** Yeah.

**Justin Garrison:** So Du'An, you've been sharing a lot online about your learnings with AI stuff, and I'm kind of curious what that overlap is, what it is that you're trying to move into, or just explore the space, and how that affects what you do for teaching networking.

**Du'An Lightfoot:** It's a tough thing, because when you say AI, we understand that "Okay, that's artificial intelligence." Well, under that you have machine learning. And under that you have deep learning, and then under that you have generative AI. So a lot of what I was doing was around trying to understand generative AI. But the more I did that, the more I realized I didn't really understand let's say like deep learning or machine learning. So I've kind of been going backwards and starting from the machine learning level, trying to understand that.

So I went through a couple of courses learning how to build my own GPT, my general purpose transformer. And that kind of showed me "Okay, here's what's happening." Now I realized I need to understand math. So I need to go back and learn some more math. And also, I need to understand algorithms, because I need to know how that works. But that's just me trying to really understand what's going on, so I can solve some problems that I want to have.

\[00:28:12.20\] Now, for the generative AI side, it's seeing how what we do every day, let's say as a network engineer... Back in like 2016 there was a real push to start using automation. The challenge at that time was that many of the devices on premises, you had to connect through SSH, meaning that you're not dealing with structured data. And so people were automating, that was happening, but now fast-forward to let's say 2020, more devices were becoming API-driven, along with more workloads were becoming hybrid, as well as cloud-native. So if you're dealing with APIs, you're dealing with structured data, so now you can really leverage the power of automation.

Well, once you start doing that, and you're automating - okay, that's great. But now with generative AI, you could actually take the API responses and let generative AI kind of handle them, and then do something else. So now we're talking about agents, we're talking about leveraging tools... The possibilities that are available to me are endless right now, and they really haven't been thought of. Because when I think of myself, let's say working in a NOC, or a SOC, or somewhere where you have to log into all these different systems to find out "Okay, why is there latency on my link?" Well, one thing generative AI is great at is analyzing data. What if it had access to all of these logs, it had access to all of these APIs, you ask the question "Why is there latency from on-premises to another workload that's in another location, or between sites?", what if you can use generative AI in some type of chatbot that could make those API calls for you, analyze the data, and then return a response? And then once you return a response, then from there what if you say "Okay, contact this service provider to find out what's going on." And then it makes the request to the service provider, sending them an email, and then all of that is automated through this chatbot. Like, this is the type of possibilities I'm thinking of now.

**Justin Garrison:** And the first part of that isn't a gen AI problem. Like, getting access to data and categorizing the data - that's just straight machine learning, or pattern recognition. Like, that's a regex. In a lot of cases, like "Oh, search the logs for fail, error", whatever, and we can we grab some of that out and then present it in a way. But oftentimes there's too much of the data. As a single person trying to troubleshoot this, you're trying to fit all the context of everything that's going on, and that's where it gets really difficult, where - troubleshooting my house is hard enough. Like, TCP dump on one port - that's just going to stream everything to me. And I'm like "Okay, now when I scale that out to a data center, or multiple data centers, multiple applications", ignoring the noise is where that becomes a problem, because the gen AI stuff doesn't play a factor in like "Let's just collect the data and see what's going on." But presenting it to the person, I think, is the thing that like "Hey, give me this in a way that I can understand the context of it, and then know what's going on." That's a really interesting point about like just how that kind of shifts a little bit more into the human to computer interface, and not just the data to human interface.

**Du'An Lightfoot:** Think about -- you remember the huge Reddit outage, and they had to go through like millions of lines of logs...

**Justin Garrison:** Yeah.

**Du'An Lightfoot:** Imagine if generative AI was around there, and how quickly they could have found that issue by leveraging generative AI.

**Justin Garrison:** I'm trying to think, like -- I don't remember what they had at the time, but they probably had like Elasticsearch. They probably had some way for them to search for the data, because the logs were semi-structured, and they're able to like "Hey, we need to find this." But the person trying to fit all the context of not knowing what happens into this -- like, now we need to discover something, and not knowing how all these complex systems plug together... Especially at that networking layer. Like, if this is a networking problem, you are below where most people are comfortable diving in. Some people are like "Oh, I'm going to look at my system logs." No, no, no. You need to look at like packets on the wire, and figure out... I love that overlap of -- like, networking is so physical, where it's like literally when you're tracing... Like, there's electrons that are flowing somewhere, outside of the computer, and you could like cut a wire and like "Oh, look. They're gone." You could actually affect that from the real world.

**Du'An Lightfoot:** \[00:32:23.20\] Yeah, that's true. But I think in the Reddit case it was actually a CNI for one of the older Kubernetes workloads that wasn't compatible when they tried to update that environment. And so if you're analyzing that, that's a whole application layer issue. You know what I mean?

**Justin Garrison:** I mean, that's encapsulated networks. And like that gets super-tricky, super-hard. I remember -- I think it was Cillium, is what they were using. It was like the old version of Cillium had a problem with that version of Kubernetes, or whatever it was. At that at that scale, they're like "Oh, you know what? These things are hard to put together, and hard to verify. And one bit us."

**Du'An Lightfoot:** Yeah. And I think that's one of the things VPC Lattice was trying to solve; not \[unintelligible 00:33:03.16\] talk about that, but when we talk about \[unintelligible 00:33:06.01\] and all these connectors, as far as container and application networking. But...

**Autumn Nash:** I actually think that is awesome, because I had never heard of VPC Lattice, but it seems like it would solve a lot of problems that I ran into trying to build things, and experiment with it... So that's actually really cool.

**Break**: \[00:33:28.02\]

**Autumn Nash:** I thought what you said earlier was really interesting, is when people just talk about AI, they only talk about AI as one big, I guess, kind of glob of artificial intelligence... But really, machine learning, deep learning, generative AI... I think people think that you're going to use generative AI for everything, which - it has got a lot of great uses; I use it all the time, personally. But also, machine learning is so interesting, and so is deep learning, and it's like we almost forgot about it... Which is wild, because I think that is going to -- I mean, it's in so much of our life. Alexa is always like "You forgot to order popcorn." And I'm like "Dang it, Alexa. I'm spending my money \[unintelligible 00:37:20.14\] They get me every time. Alexa is like "I think you want to buy this." And I'm like "You're right, I do." So I feel like we almost forgot like all these actual -- well, not actual, but like uses, and these different cool things... And it's really, like you said, math, but we don't even think about that. Is there anything that you've like really enjoyed learning about deep learning or machine learning in your process of learning?

**Du'An Lightfoot:** There's a lot that I've enjoyed learning. I think the most is developing applications. Because I'm not -- one of the things, if I could do it again, I would go to school for computer science to learn and think like a developer. So as I've been building out the applications that I'm building, it's challenging me more to think about how to really design this application and the problem I really want to solve. Especially when you start using tools, you have to route the request and the response, and work with these large language models and then think about "Okay, when I structure my prompt, how is the wording of this prompt going to affect this model at scale?" Because I need this to be repeatable. And so when I'm designing these applications, it's really helping me think about things like that in a way that I haven't been challenged before.

**Autumn Nash:** I think that's really interesting, because everybody thinks that coding and being an engineer is just the technical parts of writing code. But one of the most underrated skills of being an engineer is being able to ask good questions, good context, and do a good search... Even in Google. Even if it's not prompt engineering. But I think prompt engineering teaches you how to be even more selective, and that is such an underrated skill. You are never going to have the answers to everything, but being able to go seek out the right answers - so underrated.

**Du'An Lightfoot:** Yeah. Have you all used Perplexity AI?

**Autumn Nash:** I haven't. I usually stick to ChatGPT and Bedrock, usually.

**Du'An Lightfoot:** So when I use Perplexity, it's kind of like a research tool. So let's say you have a question about "How do I use VPC Lattice?" Or "How do I set up a Kubernetes workload in AWS? How do I deploy that?" It's going to ask the question, but then it's going to actually take your question and rephrase your question to other questions that you could be asking. And then it's going to analyze that and generate a response. But then other than that, it's actually going to have the next question that you probably need to ask. And then you can click on that and kind of understand how to think, and the challenges you may face along this journey. And that's one of the things I like about it. I think Google has always done that at the bottom of the search, listed questions, next questions that people are asking.

**Justin Garrison:** Similar, yeah.

**Du'An Lightfoot:** Yeah. But this actually does a way better job at that.

**Justin Garrison:** \[00:40:09.00\] One of the things that Perplexity does really well is exposing that path for you. Because it's not just "Here's the next question" or "Here's a similar question that other people are asking." It's not the SEO side of it. It's the "How deep do you want to go into this, and finding that?" I've only used it a couple times, but I mostly read about it in the news from all the data they scrape, and what they're doing... It seems a little bit like "Oh, maybe we shouldn't have done this." But also, it's a useful tool, and that is a difficult thing to kind of come to terms with, of "Hey, this thing adds value to my life and my learning", but also it has stolen information from people that would have tried to give me that as well, but I did not know how to get to them. I didn't know how to ask the question to find their content.

**Du'An Lightfoot:** Yes...

**Autumn Nash:** I wonder if they could somehow find a way to give back to those places by -- you know... Because I think that's my favorite use of AI, is to learn. Everybody expects AI to do for us, but I'm like "Dude, AI could be a teacher." It is such a good -- like, you can only read and do listen to PowerPoints and videos for so long before your brain just kind of checks out... So asking AI questions, and almost using it to have a conversation about a new subject, and then learning what I need to know and give you an overview, and then I can go dive deep on things is one of my favorite ways to use it.

**Justin Garrison:** Have you heard the -- Sal Khan, from Khan Academy, had a TED talk about how AI was changing how people are learning. Because it allows that sort of like individualized tutorials, and just like "Hey, you ask me the next question. I'm not going to pretend I know where you're going to go through this flow." Like, that tutorial becomes a lot shorter, because you can just say "I want this paragraph of information. Hey, which question is interesting next?" And now we can go to the next question.

And all of these things that we say "Hey, here's the end to end, from scratch to Kubernetes and AWS", versus "Where do you want to start? Do you need to know how to do the VPC? How deep do you need -- are we calculating CIDRs here? Or are you just going to go pick the defaults and you don't care?" And you can do that. And I think that is a fascinating take on where this overlap of learning and AI is. I think the gap is a lot of that, what you said, Autumn, the giving back side... Mostly because a lot of the online content is free because it's that you pay for it with marketing. You have to visit the website, you have to spend time on the website, and the AI bots don't do that. They're just like "Give me the data. I'm going to take that back and just send it to someone else."

There's situations, like, I was a DA, Du'An, you're a DA... We're professionally paid to make that content, and it's offset by "Hey, you're paying me so I can make this content for you, and that can live for free, and I don't need to monetize it some other way." But there's a lot of other people and companies and content out there that's not that. And being able to figure out how to give back in those areas is really tricky.

**Du'An Lightfoot:** If you all get a chance, there's an interview that the old Google CEO Eric Schmidt did. It actually got banned and taken down.

**Justin Garrison:** The Stanford... Yeah.

**Du'An Lightfoot:** So in the interview he mentioned something about how creators of content - a way that they could actually get paid. So I don't know if you all have ever done music, but there's something called like ASCAP. Well, if you make a song and it then gets played on the radio, the way you get paid is by the number of times it's played, you register with ASCAP, and ASCAP tracks all of this across all radio stations, and wherever your music is played. And then they send you a check based off those number of plays.

And so what he's saying is that there probably will need to be some type of ASCAP for texts and images that people post publicly, and then they get a percentage of that revenue back from the content they paste. And I'm like "I could see that." I actually could see that.

**Autumn Nash:** \[00:43:58.05\] I like that. It would suggest the actual links and tell people "Hey, this is a blurb. Now go click on this link." So you still get your clicks. Because it's instead of trying to fight change, we just need to embrace it. You know when you see all these people that are old try to make laws, in like Congress, and you're like "Bro, you don't even know what TikTok is." You know what I mean? Like, why are you --

**Justin Garrison:** "You know, old people making laws..." That's a problem.

**Autumn Nash:** Like, you don't even you don't even know what TikTok is. How are you going to make a law for it? Instead of trying to fight change, let's find a way to make it better.

**Justin Garrison:** So Du'An, when we started this, you said that you made a course for Cisco, and they're still selling it to this day. They're making money, and people from it... You don't make a dime from that. And I think of that and I contrast that to the movie industry. Because why does the movie industry have royalty checks? Why does that exist? And why even is like the end of a movie have 20 minutes of names on a list that I'm going to not sit through usually? And most of that comes down to the unions, and the fact that workers have power. And the workers, the people that do the actual work to create the thing have a voice to say "Hey, we collectively can say "No, you cannot do this anymore." And I feel like that's a really big missing piece in this free world of the internet and content creation. And all of the individual creators have no collective power, which I find really interesting. I'm not like a super-union person, but when I contrast those things and I say "Oh, I worked in the movie industry and it was very unionized", and it was unionized because those people were individuals and they float between studios and they do a lot of different projects, but then collectively they can say "We're not going to do that unless you're paying us correctly, and we're going to go on strike." But YouTubers and TikToks, they're not going on strike, because someone else can come in and just create the content for you, and then it kind of goes through, and there's no way to get those residuals.

**Autumn Nash:** That's actually really interesting too, because like if you look at it... So when Microsoft bought LinkedIn and all the different things happened, and LinkedIn laid off their content team, now we all get those emails saying "Hey, do you want to contribute to this?" But it makes me feel bad, because we're contributing to them getting rid of content creators. Like, the people that we all learned from to get these amazing careers. And then just the layoffs that's going on in engineering and stuff, I wonder if -- like, a lot of people talk about engineering unions. So that's actually really interesting, your take, Justin, and how those could relate.

**Justin Garrison:** Well, and that happened over a hundred years of like how movie industries were treating people that worked for them. Because back in the day, if you remember way back in the day, Cary Grant and stuff, they worked for a studio. They worked for one studio, they were hired by the studio, and they were like the face of that studio.

**Autumn Nash:** Oh, I didn't know that.

**Justin Garrison:** Yeah. And then a lot of stuff changed in the early twenties; this golden era of movies shifted when basically the government broke up the movie theater and said "You cannot own the full stack. You can't own the movie theater, the studio that creates the content, and the people that are working for you, because you can treat all of them poorly." And so they had to break it up and say "You get a movie theater over here." That's an external company. And now they're actors and actresses, they broke contracts and they didn't have to work for a studio, and they could go around. But then they still needed some collective way to say "Hey, don't treat me like crap."

**Autumn Nash:** Which is funny, because now look at all the monopolies that they're breaking \[unintelligible 00:47:17.08\] So that's like funny. This also kind of goes back to what we were talking about a couple of weeks ago, about how when you have a different background, that's not a traditional tech background, like, I think it makes you so - like, you bring more to the table.

Think about all the different things... You were in the military, right? Justin used to work in animation, and all the other things that you did beforehand. And I just think, like, all the people that we meet, that did theater and all these cool things - it brings such a perspective to building software, you know?

**Du'An Lightfoot:** Yeah. You mentioned the monopolies... If you look at Google and what they're going through - I don't know if you paid attention to the case that they're going through now, but...

**Justin Garrison:** Which one?

**Autumn Nash:** I know, there's like three. But the big one is the search monopoly, right?

**Du'An Lightfoot:** \[00:48:03.20\] Yeah, the search monopoly. Because the number one search engine for the longest time was Google. And then from there, the number one search engine was YouTube. So I think now it's TikTok. But still, number two and three is Google and YouTube. So they own both of those. And then the advertising for both of those, they own that, too. So they control that entire market. If you think about a monopoly --

**Autumn Nash:** Not just that, but that's a dangerous monopoly, because that's how people get their information. I'm not saying Google's doing anything wrong right now...

**Du'An Lightfoot:** Yeah, me neither.

**Autumn Nash:** ...but if somebody evil took over Google and they were like "We're only going to feed you misinformation", how would we -- look at how the SEOs or whatever, how they give you the stuff that's sponsored before the stuff that's actually like...

**Justin Garrison:** I also think that, like, monopolies - I don't wanna say they're not bad, but they're useful to me as a consumer. I know a lot of startups in tech companies that want to be the new Apple. And what is Apple but a monop-- like, they own the hardware, the OS, your phone, your headphones, your services on top of it... I'm trying to back up my iPad, and it's like a terabyte iPad. And I'm like "Oh, I've got to like up my plan by like two factors", and I have no other option. I can't plug in a drive and say "Please back up and restore from this thing. I could back up my photos in certain ways, I could do certain pieces, but not what Apple gives me as a monopoly stack to own the entire thing.

**Autumn Nash:** And can we talk about it? I love Apple for that monopoly, because I love that my phone and my laptop and my --

**Justin Garrison:** People love the simplicity, right?

**Autumn Nash:** Yes, because it's the undifferentiated heavylifting of your life. Like, you don't have to think about all those little pieces, and now all of a sudden it's syncing, and my kids stuff works, and I have a family \[unintelligible 00:49:43.12\] But then at the same time, they also own a lot of my data, and a lot of my business. So you're just like "Uhh..."

**Du'An Lightfoot:** But Justin makes a great point, because when I tried to go to -- I've had it since the iPhone three. And when I used to back up my iPhone three, I would back it up to my -- it was iTunes at the time.

**Justin Garrison:** Yeah. You'd plug in iTunes... Yeah.

**Du'An Lightfoot:** Yeah. I would plug in iTunes on my computer and back it up that way. As well as I could just open up a drive on my iPhone and look at the pictures. Like, it was just a drive and I could copy those pictures over. But now, it's not that simple. Like, you can't do those things anymore.

**Justin Garrison:** Yeah. And monopolies are great, until they're not. And that's the problem, is like where's the line of "This is useful to me, and you own the whole stack", versus you are now either treating people poorly, or prices are going up, and all of that stuff. The competitive nature needs to still exist. Competition has to be there, and it's just not for certain things. And look what happens to Apple in the European union. Third party app stores are out now, and you can go get a third party app store, which is like incredible to me that that is a thing that exists. That should exist worldwide, in my opinion, and so many other things in competition could happen if you get those deeper hooks into things. And most of the time that just only happens through regulation and saying - the government's like "Actually, there's no competition here. We need to force you to open up to make sure that someone can make some money off of the things that you've engineered and built."

**Du'An Lightfoot:** And I want to be clear, I'm not calling no company a monopoly. That's not up for me to decide. I just think that sometimes companies get so big that it makes it hard to get out of that ecosystem, to do things in a way that are, I would say maybe more beneficial for the user or the consumer, if they were outside of the ecosystem.

**Autumn Nash:** I tried to switch to Samsung a couple of years ago after having an iPhone for so long... I had to switch back. I couldn't do it. I was like "Apple's got me." Every time I meet someone and it's like a green bubble, and I'm like "But why though?" Why would you do that to yourself?

**Justin Garrison:** They're even getting RCS now. Again, another technical thing that was required to say "Hey, you have to support this better protocol, that's more secure, that has better features..." And Apple dragged their feet to be like "Oh, SMS. 120 characters."

**Autumn Nash:** \[00:52:12.22\] And the chargers, and stuff... But this all goes back to what we were just talking about - we need people that are educated enough in technology to make these laws. I don't know if the people that we have in positions of political power in the United States have enough background in technology to even be able to make these laws. I don't know what they're doing different in the EU, but half of the -- have you ever seen them argue about technology on the Senate floor? I'm like "Who do these people talk to?" Like, pay one of us, because we'll help you.

**Justin Garrison:** More senators need to know the OSI model, and I think that's the full circle...

**Autumn Nash:** They don't even know the -- Nancy Pelosi was trying to talk about algorithms... \[unintelligible 00:52:50.19\] had a heart attack. I was like "Can you please talk to a human that's under 40, maybe 40?" I don't know... It's wild.

**Justin Garrison:** Du'An, this has been really fun. Thank you so much for coming on the show. Where should people find you if they want to reach out online, or find some of the videos and content you're making?

**Du'An Lightfoot:** Yeah, you can find me at Lab Every Day on our social media platforms. Just keep it simple.

**Autumn Nash:** Look, I want to find your content. Teach me about networking. You make it make sense, and I'm just... Look, we need to be friends, because I just -- I want to understand networking so bad... Because it really relates to so many things in the cloud, but sometimes I'm just like "Who wrote this?" I think people that write about networking that have done networking for so long, I'm like "Can you explain it to me in English, in like normal--"

**Du'An Lightfoot:** Yeah, that's purpose of generative AI. Copy and paste it and tell it to explain it to you --

**Autumn Nash:** That's what I do. I even use it to interview me sometimes. I'm like "Ask me these questions. Change it this way." And it really works, I'm telling you.

**Justin Garrison:** Alright, thank you so much for coming on the show, and we'll talk to you again later.

**Du'An Lightfoot:** Yeah, thanks.

**Break**: \[00:54:05.23\]

**Justin Garrison:** Thank you so much, Du'An, for the interview. And actually, you're sticking around for the outro, because we were just talking, and we're just like "Let's just keep going." We've got 20 more minutes, and we were figuring out the outro piece... So thanks for sticking with us right now.

**Du'An Lightfoot:** No problem. I'm excited.

**Justin Garrison:** Yeah. The outro we wanted to go over was actually the new Meta LLaMA 3 white paper. And I finished this paper this last week, and it was a struggle. It probably took me two weeks to read the thing. It's like 74 pages, and it is one of the most dense white papers I've read for a long time.

**Autumn Nash:** Look, I'm just going to be honest, I did not finish that paper. I was in pain watching you finish the paper. I've never googled so many acronyms in the first page of a white paper in my life.

**Justin Garrison:** Every section had new acronyms, and at least two or three other resources. Like "We're just referencing this other major work from this other white paper."

**Autumn Nash:** I actually thought that was really cool, though. Meta does -- I don't always agree with them, but the way that they outsource and open-source things... It's amazing how transparent they'll be. And how they give a lot of information, and that they give credit to the other white papers that they learned it from. I really appreciate that about them.

**Justin Garrison:** To me, this really -- what we were just talking about in the interview... Like, summarizing a website and content and then saying "This is what I'm using." And when you go ask the AI and say "Hey, what does that website say?", you're giving the credit, because it's like "It came from here", but no one's going there. I'm not reading all these white papers and then figuring out the depth of it, because sometimes these references - they get it wrong. And that is one of the most fascinating pieces to me about this whole academic infrastructure of how these white papers reference each other, and they get like bonus points the more they reference, and all this stuff. That is a very interesting area, and that's what we want to talk about today.

**Autumn Nash:** That stood out to me a lot, that they gave people not just credit, but they were like "Here, you can go learn more about this", which I really appreciated... Because I had friends that worked in Academia, and they spend like years and months of their lives writing these papers, you know? So to give them credit back was really cool.

**Justin Garrison:** Yeah. And the fact that there are so many references makes me assume that this isn't AI-generated, but also, from other news or court cases and whatnot are making up some like thing that doesn't actually exist... Because I have read some AI white papers, and I'm like "You generated this." You don't have to tell me that some AI -- I don't even hav to do the test of like "This whole section, you just generated it and made a couple of edits, and that was it."

**Autumn Nash:** And it also makes me feel like I trust the source more. When I'm reading something, maybe it's --

**Justin Garrison:** When they give all the references?

**Autumn Nash:** Yeah. Well, it's like when you are having a Facebook argument versus a college essay. Like, when you have to quote your sources and I know that you actually did the research, obviously they're going to do the research. But you know what I mean? Like, it just gives you more street cred to me.

**Justin Garrison:** So here's the three things that I learned from reading this paper. And there's a bunch of stuff in it... Again, it's like 74 pages long, but these are the things that I kind of took away and I'm like "Oh, that's fascinating." And one of them I remember came out a little while ago, where the hardware alone that Meta trains the LLaMA 3 -- and again, if people aren't familiar, this is an open model from Meta. LLaMA 3 comes in three different sizes. There's an 8 billion, a 70 billion and a 405 billion parameter models. So you can get different sizes. You can run it locally with something like Ollama, and it's out there. It's not a completely open model, because there's no standard for what open means. And if you're a company using this, like if you're over a certain revenue, you can't use it, all this stuff. But for my intents and purposes as someone learning the stack and trying to play with it and learn more about how they built it, it's open enough for me to understand what they're doing under the hood here.

So the first thing is just the training side of it. They used over 24,000 H100 GPUs. 24,000. Their infrastructure is more than that. But they're like "This is for the LLaMA 3, we use 24,000." That alone is over $700 million.

**Autumn Nash:** Wow.

**Justin Garrison:** That's just the GPUs. And looking at the infrastructure diagrams they have in here, all of the high bandwidth -- because Du'An, this isn't like straight up Ethernet network. This is -- what's the link? Oculink? Not Oculink.

**Du'An Lightfoot:** InfiniBand?

**Justin Garrison:** InfiniBand. Yeah, yeah, yeah. This is an InfiniBand. It's super-expensive. Like, you're doing InfiniBand between nodes... And inside of a node they have multiple GPUs, with high bandwidth between the PCI buses. And then they do InfiniBand between external nodes to say like "Oh, we need to go talk to that node over there and send data." And that's not your normal switch.

**Du'An Lightfoot:** \[01:02:07.12\] I've been talking to a lot of engineers about NVIDIA, and data center networking for these types of workloads... A lot of engineers don't know it, but I think it's a lot of opportunity for them to get up to speed, and maybe shift their careers to this area where not too many people have the expertise.

**Autumn Nash:** Ooh, that's an interesting upskill and pivot, because I think a lot of people right now are scrambling like "How do we upskill to make ourselves marketable in this new market?" That is a really interesting pivot.

**Justin Garrison:** Yeah. So just the GPUs alone, over $700 million. I'm assuming the rest of the hardware, they're well over a billion dollars on just like buying racks and stacks and computers and network and all that stuff. And then you've got the people that literally actually train it and do the rest of the stuff. There's billions and billions of dollars.

**Autumn Nash:** What about the power source? You know what I mean? Like, I really wish somebody would tell us how much electricity... Because that's a resource. We were very into climate change and all that stuff a couple of years ago, and now we're just like "Light it on fire!" Yo... I want to be able to go outside later...

**Justin Garrison:** The power side of it, and also just the general heat usage brings me to the second point that I felt -- like, the first time that I like stopped and reread a sentence in this paper like four times... I was like "Wait, what?" They say that not only do they have failures all the time with these GPUs. I forget what the rate was. I'm trying to search for it and I couldn't find it.

**Autumn Nash:** When you say GPUs, do you just mean the chips?

**Justin Garrison:** Yeah, like the chips in the GPUs. Some failure... And they break it down in the paper of like how much --

**Autumn Nash:** Oh, okay. What was the main failures that they talked about? If you don't have it, it's totally fine. I will eventually struggle through and read them, but... It's just interesting. Like, you wouldn't think about some failures that you get when you're really in depth in something, you know?

**Justin Garrison:** And this is one of the things that I wish that's Apple books had a better search for PDF. I can probably just pull up the PDF straight up, and...

**Du'An Lightfoot:** So one thing that you could do is actually -- I don't know if you use any type of large language models, chatbots... You could take the PDF and then just put it in there, and then ask the questions...

**Autumn Nash:** Which ones can you do that? Because that -- that's how I learn.

**Justin Garrison:** ChatGPT.

**Autumn Nash:** What?! Okay, so I can put it in ChatGPT and then ask questions about it?

**Du'An Lightfoot:** Yes, you can.

**Autumn Nash:** Yes...! Because that is how I learn. I need to be able to have that conversation. So that is fire. I might actually make it through this white paper, y'all. I love a new way to learn. I read books on how to hack your brain to learn more... So that, I'm all for it.

**Du'An Lightfoot:** Another thing, there's actually a -- and I've seen a repo as well, but there's a Bedrock cloud chatbot that you can deploy in your account, and then it'll give you a chatbot where you can actually take and -- I don't know if you know anything about RAG. Retrieval-augmented generation.

**Autumn Nash:** Oh yeah, I've read about that.

**Du'An Lightfoot:** Yeah. So you could take like a link to the white paper, add it to your RAG, your data store, and then it'll take it and now you can ask questions about it, but you can add additional docs. And so now when you actually ask the question, it'll reference that point in the doc. If you use ChatGPT or Claude, it's not going to reference where it got that information in the doc. So you don't really know if it hallucinated, so you still need to kind of research.

**Autumn Nash:** Yes, that's what I want. Because sometimes I've like used ChatGPT to learn things, but then I have to go back and there's so much work to verify. And I never want to speak on something that you're still learning and get it wrong... So I think that would be really beneficial, because I am always really worried about -- like, I don't want to say something in a talk or teach a class and not have all the information... So I think that would help me utilize AI to learn more, and to be more confident in my answers.

**Du'An Lightfoot:** Yeah. RAG can help you do that. But I'll be quiet so Justin can keep going.

**Autumn Nash:** No, that was so good.

**Justin Garrison:** No, I'm mad at you now, because that completely worked. I uploaded the paper, and it completely worked.

**Autumn Nash:** Look at you. That was fire.

**Justin Garrison:** I'm super-mad at you right now.

**Autumn Nash:** \[01:06:15.00\] Real-time over here...

**Justin Garrison:** You kept that conversation going just enough. I uploaded the paper and I asked it "How many GPU failures did Meta have in this paper?"

**Autumn Nash:** What did you upload it to? ChatGPT?

**Justin Garrison:** ChatGPT.

**Autumn Nash:** What? I love this.

**Justin Garrison:** It doesn't give me the table. I wish it would tell me where... I want that in the doc; like what page, or whatever. But 30% of the failures were hardware failures on the GPUs. It was 148 failures. They trained over a 54-day period, so roughly two months or so. They had 148 GPUs just like dead. Just failed. And they had 419 other failures, but some of them were like OS updates, and things that were like "Oh, we interrupted you for whatever reason." But 30%, the biggest majority of it was hardware GPUs just died. And those are expensive GPUs.

**Autumn Nash:** Yeah. It's very interesting. Because I wonder, when you go into a model, and say they go on their next research project, do they now have to account for 30% more GPU just to cover?

**Justin Garrison:** Be able to say "We need to finish on this time", or whatever?

**Autumn Nash:** Yeah.

**Du'An Lightfoot:** So there's two things. \[unintelligible 01:07:20.25\] modify your prompt to give you an excerpt from the actual document where we see the information. So ask the question, and then say "Provide a direct source to the information from the doc."

**Justin Garrison:** Yeah. Give me the quote or the link.

**Autumn Nash:** That is fire. Yes.

**Du'An Lightfoot:** When we're talking about the GPUs, what I find interesting is that they can do like distributed training. And so you've got these 20,000 GPUs, and you would think when you're training on a large language model, you're using it to train this one model, right?

**Justin Garrison:** A thing. Yeah.

**Du'An Lightfoot:** Right. But they actually can break the workloads down, and do parallelism, and distributed training. So it trains a little bit over here, it trains a little bit over here, it trains a little bit over here to make it more efficient, and then they go back and kind of glue it all together.

**Justin Garrison:** As an infrastructure nerd, that was the most interesting section to me, because they did break down how they separated that out. Because they're like "Hey, do we want to base this on like types of information that we want across nodes? Do we want this on type of queries or type of use cases?"

**Autumn Nash:** So is it kind of like spot instances in the cloud?

**Justin Garrison:** No, no, because this is just like one node is going to have however much memory in GPUs, that's high bandwidth on the PCI bus. And they're like "Hey, but I need to go talk to another node to get information about something else that I don't have the data for." Because these datasets are huge. And so they're like "I've gotta go find the data."

**Autumn Nash:** Oh, like nodes in a database.

**Justin Garrison:** Yeah, it's kind of like a distributed database. How do you shard it?

**Autumn Nash:** Yeah. Okay. Now we're speaking my language.

**Justin Garrison:** And that's exactly it. So they say "How we're going to shard the data depends on how fast we can query it and how efficiently we can actually train the model." Because if we're going to do multiple round trips, if we can save that and put it on the same node, that's so much faster." It was so much faster just to go locally.

**Autumn Nash:** I wonder if that also saves on networking costs and different things, too.

**Justin Garrison:** Well, so the second piece of like "Are they planning for 30% more or whatever to compensate for failures", the thing that I read over and over again was -- in the paper they say they had a 1% to 2% throughput, depending on the time of day. If you train your AI models at night, you will just save 2%.

**Autumn Nash:** But aren't they the only people that are training on that stuff, or are they using --

**Justin Garrison:** No, so many people are like much smaller scale. Because Meta -- let's say it's a billion dollars for infrastructure. If you can save 2% on a billion dollars, it's like "Oh, actually I can go hire someone else." But even smaller companies that are like "Hey, I have a team. We're trying to train something. We want to build some stuff. We have our own data center." If you can spend the time to work on things during the day and just train at nights, they're like "Actually, we just got better throughput." Just the models worked better because the atmosphere was cooler, and things just worked better.

It was a heat thing.

**Autumn Nash:** \[01:10:02.15\] Oh, okay. I didn't think about that, the atmosphere being cooler. I was thinking about like shared infrastructure and other things are running. But I'm like, if they bought that infrastructure just for that, nothing else would be running.

**Justin Garrison:** This is all on prem, this is all their stuff, this is dedicated to them, and they're just like "Throughput was better 1% to 2% by just going at night."

**Autumn Nash:** That is wild.

**Justin Garrison:** I could not believe -- I read that one so many times, like "What are you talking about?"

**Autumn Nash:** I would have never considered that and the heat.

**Justin Garrison:** And this is a data center, right? This is controlled environments. And you're like "Oh, well, you control the A/C. Just turn the AC down a couple of clicks, and you're fine." And it's like "No, no. Someone's dad's over there. You can't turn down the AC right now."

**Autumn Nash:** Well, not just that, but certain places... Like, in Virginia, when I lived there, you could be running an AC, but the humidity... You know what I mean? You'd have to get a dehumidifier and run that at the same time as your AC. So can you imagine just when it drops at night, it probably is working so much more efficiently, even with the AC, you know?

**Du'An Lightfoot:** I wonder though how did they break the workloads down to just train at night? Or did they just monitor continuously?

**Justin Garrison:** They just monitored. Yeah. Because they were trying to cram it into like a short period of time, so they wouldn't extend out their training by double the time, by saying "We're only going to do this at night." \[unintelligible 01:11:14.12\] we're actually going to train all the time." But they noticed their throughput dropped during the day.

**Du'An Lightfoot:** Okay. Yeah, because I don't even think you could break it out to say "We're only going to train at night."

**Justin Garrison:** They have a lot of snapshotting, because of the failures and because of things... They're like "We snapshot a lot, so we can restore from a previous state." It does take time, it's not free, but there was a lot of things they talk about in the paper of like "How do we avoid some of these outages that were unexpected?" Or "How do we make sure that the expected interruptions wouldn't cause big problems?" So they go like "We snapshot this workload. We can just basically drain the GPU memory, and then restore it back at some point and say "Oh, you're good now. Just keep doing what you were doing."

**Autumn Nash:** That's so interesting.

**Justin Garrison:** So the last piece that I've found really interesting was in the conclusion. And Autumn, when I was reading this, I was thinking of you... This was exactly what you had talked about previously at Scale with your talk, and various things about just like diversity inside of these datasets and LLMs... And what I'm calling the Conway's LLM, because they call out that they separated out who was testing the prompts and responses, versus who was training the models. And they said that improved their actual accuracy for use cases so much more than having those in an integrated team, and saying the person training the model is the best expert to prompt the model, and then to validate the solution. Because that stack just made so much biases against like "Oh, well, we know what we want, and so we're just going to train a little bit more." Because everything about an LLM is adding bias. Everything in here is like "We need to be more biased towards how a person acts, or how a person expects to respond", something like that. So everything's about like "Well, what type of person? What type of environment? What's the use case?"

And they say by separating those out organizationally -- and they said they have two different... Let me read the quote here. "We ensure that our human evaluations remain trustworthy by allowing only a small set of researchers who do not contribute to model development to perform and access evaluations." It says that "While organizational decisions are rarely discussed on technical papers, we've found them to be pivotal to the successful development of the LLaMA 3 family of models."

**Autumn Nash:** That's fire.

**Justin Garrison:** So literally, your org chart is the reason that LLaMA 3 is successful.

**Autumn Nash:** I'm going to cite that in my GitHub talk. But no, but I really think that we're out here acting like diversity and inclusion is some sort of charity work, and I'm like "So we're just going to ignore return on investment in building good software, and having to iterate because you made a mistake that nobody caught, because you didn't have diverse perspectives in the room?" Let's make good software. This is not charity. This is good business.

**Justin Garrison:** \[01:13:47.16\] And they don't even address the diversity piece. They just say "By having a firewall between these two components of the model benefited our model." And it's like "Okay, now I want to talk about - let's go one step further than that. What else do we need to make this data?" Because they even call out like the fundamental things that they needed was just good, clean data. And they're like "We just need to have that data. We have to have that data. We pay for it in a lot of places." And if you don't have that data, you cannot ever even start with Gen AI.

**Autumn Nash:** I mean, Gen AI, machine learning, deep learning, all of it. If you put bad in, you will get bad out, you know?

**Du'An Lightfoot:** Well, that's what I was going to ask. You said they pay for it... Because one of the topics that I've been reading about is synthetic data, like using genitive AI to output training data.

**Justin Garrison:** And they talk a lot about that in areas they use that, because that was another kind of piece that I thought was interesting, where these models and use cases are so varied and so large that they couldn't pay enough people to make enough data in time. And so they had to train -- they used a lot of LLaMA 2 to say "Hey, we want you to make data that looks like this in these scenarios, and help us get information out."

So they have basically clean data to like start. And then they have an AI model that's like creating new synthetic data based on that, their new model training off it, and then another AI model like judging it, in some cases. And there was a lot of human feedback loop on that judging piece, of like "You did it wrong, LLaMA 2. Let's go ahead and adjust and tweak these areas." But in most of those cases, the synthetic data generation and the judging - they weren't general purpose LLMs. Most of them were very specific. It was more of the traditional machine learning side of things instead of the "Generate the world for me."

And so a lot of those cases are like - it was LLaMA 2-based, but reading between the lines a lot, it was like "Oh, this isn't LLaMA 2 with ChatGPT. You're using a machine learning model to like figure out that data, make a new version of it." And it seemed like specific.

**Autumn Nash:** That's wild. That's dogfooding on a new level.

**Justin Garrison:** And at that scale they had to, which was fascinating. They talk a lot about comparisons, which are fine. I didn't know that there was this mini like LLM comparison and charts and things that like "Oh, we did all these tests and all these test beds..." I didn't know this existed.

**Autumn Nash:** Yeah, I've been trying to dig deeper on that stuff. I took a PyTorch class a long time ago, and I did not realize how much calculus and linear algebra and all that...

**Justin Garrison:** Machine learning.

**Du'An Lightfoot:** Them algorithms... The crazy part to me is it'll have this much data, and then be able to compress a model down to where it's like downloadable, you know what I mean? To be a couple of hundred gigs.

**Autumn Nash:** And compression alone is its own algorithms and complexity and math, you know? So when you think of it all together, it's really... It's amazing. Think about what human computers were doing 50 years ago or 40 years ago, and then how far we've come.

**Du'An Lightfoot:** Yeah. I think that -- because if you look at like the deep learning side, and how a lot of the data is just removed during compression, but it's still able to establish the right relationship, and infer how to respond to your question. Even though a lot of that data has been removed, it just understands the relationships in those neural networks, and that's the part I've been trying to learn. Like, that to me is - it's crazy. It's magic.

**Autumn Nash:** I think deep learning and machine learning are so -- they're not even getting the attention they deserved during the generative AI boom... And I use generative AI a lot, but I think that deep learning and machine learning is where we're going to get most of the really impactful use cases.

**Justin Garrison:** Well, and machine learning walked so Gen AI could run.

**Autumn Nash:** It did, but we're just over here like "Let's prompt everything." And I'm like "You couldn't prompt things if we didn't have machine learning."

**Justin Garrison:** And Du'An, to your point - I downloaded the LLaMA models, all three of them, to my computer, so I could try them out locally while I was reading this paper. The 8 billion model is just under five gigs. The 70 billion model is 40 gigs, and the 405 billion model is 229 gigs.

**Du'An Lightfoot:** Exactly.

**Autumn Nash:** That is wild.

**Justin Garrison:** I mean, that's 300 gigs on my computer to like go play with this thing and see how it works, and kind of prompt it myself. And a lot of their testing in the paper is like - the 405 billion model obviously is the best one, and it's competitive to a lot of the closed source models in various tests. But it was fascinating just seeing how they walk through this; again, with references it's almost a hundred pages of white paper. I don't recommend that everyone read it, but absolutely go put this in ChatGPT and ask some questions.

**Autumn Nash:** I'm gonna do that. I'm trying to dig deep on all that stuff.

**Justin Garrison:** Alright. Well, thank you so much everyone for listening to this show, and Du'An, again, thanks for joining and talking to us all about networking and AI stuff. This was fun. And we will talk to you all again soon.
