**Mat Ryer:** Hello and welcome to Grafana's Big Tent, the podcast all about the people, community, tools and tech around observability. I'm here with my co-host Tom Wilkie. Hey, Tom.

**Tom Wilkie:** How are you doing Matt?

**Mat Ryer:** Pretty good. Not bad, thanks. How are you doing?

**Tom Wilkie:** Very well, thank you. Did you enjoy dinner the other night?

**Mat Ryer:** I did, yeah. Tom made me dinner. It was so good.

**Tom Wilkie:** I didn't make you eat it though.

**Mat Ryer:** No, that was by choice.

**Tom Wilkie:** Just to be clear, yeah.

**Mat Ryer:** Sorry, I don't think anyone was expecting that I've gone round to your house and then you've forced-fed me dinner.

**Tom Wilkie:** Although that might have been more entertaining.

**Mat Ryer:** Not for me, but yeah. Could be.

**Tom Wilkie:** I've been looking forward to this episode...

**Mat Ryer:** I know, I know, because this is a sort of -- this is your hobby, isn't it, really?

**Tom Wilkie:** It is one of my hobbies, yeah. I do a lot of this, and it keeps me sane. I feel like I can't program for fun anymore now that it's my day job. So I need to find a technical hobby that, you know... Maybe not as entertaining an anecdote as I thought it was going to be.

**Mat Ryer:** Well, it was pretty good. And speaking of not as an entertaining anecdote, we're also joined from Grafana Labs by Richie Hartmann. Hello, Richie.

**Richard Hartmann:** Hello, hello.

**Mat Ryer:** It's a pleasure to have you on the podcast. Welcome to Grafana's Big Tent. How are you doing?

**Richard Hartmann:** Pretty good.

**Mat Ryer:** Is this the first time we've had you on the podcast, Richie?

**Richard Hartmann:** Yes.

**Mat Ryer:** Oh, that's surprising. I thought we would have had you on earlier.

**Richard Hartmann:** Me too.

**Tom Wilkie:** We've been fighting you off with a stick, I thought...

**Richard Hartmann:** Yeah.

**Mat Ryer:** Well, don't worry, we've also got Pavel is joining us from Prusa Research. Pavel Strobl is also here. Hi, Pavel.

**Pavel Strobl:** Hiya.

**Mat Ryer:** Welcome to the podcast. Maybe you could start -- just tell us a bit about yourself and what you do there at Prusa Research.

**Pavel Strobl:** I'm a DevOps engineer at Prusa Research, and I joined two and a half years ago, right after we embraced Grafana for the DevOps department... Even though usage of Grafana is much longer at Prusa Research. What I do - I'm mostly the observability and platform guy, so that's everything I do.

**Mat Ryer:** Nice.

**Pavel Strobl:** And \[unintelligible 00:02:21.25\] digging in Grafana is my hobby.

**Mat Ryer:** Oh, wow.

**Tom Wilkie:** Very cool.

**Mat Ryer:** Great. That is cool.

**Tom Wilkie:** I guess this is, as you said in your fantastic introduction, Mat, this is an observability podcast. So why are we doing an episode on 3D printing, Richie? Why are we here?

**Richard Hartmann:** Several reasons. We do have a lot of engineers, obviously, and most of them are software engineers... So the thing is if you work on software all day, every day, you don't really see any results... But still, we like tinkering, so we have a large maker community, and it's roughly split three-way, between woodworking and 3D printing and electronics, I'd say. And in particular with 3D printing, which next to woodworking is my thing, all the software observability is kind of boring by now. I've been in the business for like 20 years. But also, using the same technology to understand the real world and derive more information from what's actually happening with things you can touch - that's just super-interesting, and just an intersection of interests... So I guess that's why we're doing this.

**Tom Wilkie:** It's one of probably our most busy Slack channels I reckon, on the company Slack is the 3D printing channel.

**Mat Ryer:** The incident channel is quite popular as well. Where all the incidents go.

**Richard Hartmann:** I was about to say maybe the non-work channel, the most popular and busy non-work channel.

**Mat Ryer:** Yeah. I like to think of 3D printing as really the opposite of woodwork, Richie... But you're interested in both. Pick a team, pick a side.

**Richard Hartmann:** No, you're right. One is additive manufacturing, and one is subtractive manufacturing, so it's literally coming from opposite ways... But the kind of thing at least I tend to do is roughly the same, which is basically useful stuff around the house, and you can use both for either. Or either for. You know what I mean.

**Mat Ryer:** \[00:04:13.17\] That's the killer use case with me. The idea that you could have a -- you know, you need a spanner of a particular size, and then you would be able to just create what you need... That's like the Star Trek. That's the dream that I was sold when I watched Star Trek. And really, I do want that with food as well, ideally.

**Tom Wilkie:** Yeah. Except for creating the spanner takes three hours, and a year or two's worth of skills in CAD modeling.

**Tom Wilkie:** There are chocolate printers, so...

**Mat Ryer:** Oh, yeah?

**Tom Wilkie:** Surely, aren't -- Pavel, isn't my HP inkjet like a 3D printer? It prints in two dimensions and time.

**Mat Ryer:** Oh, that's a great question.

**Pavel Strobl:** If you think about it, a 3D printer is basically 2D printing, but a lot of layers of 2d printing. Yeah. But apart of HP, it's actually reliable.

**Tom Wilkie:** I will say, yeah, it is -- my Prusa printers are much more reliable than my HP inkjet, for sure. But there's also quite a big intersection between 3D printing and observability, as you kind of said in your intro, Pavel. You're using Grafana all over the place at Prusa Research, aren't you?

**Pavel Strobl:** Yeah. As I said, the DevOps department is mostly used for web development. As you probably know, we are observing web services that are running at our Kubernetes cluster, etc. Pretty usual stuff. But we do as well use Grafana for our development department that is developing the 3D printers. But their use is pretty much different, because they have to develop the printer, so they have pretty much different kind of data than we do, and use different technologies. Even though I'm not in charge of this department, observability, I know a lot of stuff about it, and it's even accessible at our GitHub.

**Tom Wilkie:** Oh, really? So what kind of things are the people designing these 3D printers - what are they using Grafana for?

**Pavel Strobl:** Basically, when you are optimizing the printer, you have to test it, and you can see metrics from the load cell. For example, the probing of the heatbed - you can see the value of the filament sensor, which is analog. So you see that the values change when you are printing, for example, PLA or PETG, or flexible filaments. It changes, and you can get this data, and analyze it, and implement stack filament detection, which was released in, I think, version 6.0 firmware... Or all the other data that's also interesting for the users. For example, current voltage. So you can calculate power consumption.

**Tom Wilkie:** Oh. Okay, that's cool. I can remember the first time I saw a 3D printer, and it was actually -- it was a Mendel. It was one of the A-frame 3D printers. But it was Prusa's modifications to the Mendel. It was at a jobs fair, and this was a homebrewed 3D printer at a jobs fair. I mean, it's got to have been 15 plus years ago. And I've been into it ever since. I asked the chap on the stool where he got it from, he said he printed it himself... I'm like "What did you use to print it?" He's like "Another 3D printer I made..."

**Mat Ryer:** \[laughs\]

**Tom Wilkie:** Yeah, seriously. That was the whole RepRap thing. He printed the parts for me, and I beg, stole and borrow the components to put one together. It never really worked very well. I remember I bought one of Prusa's first products, which was a nozzle made out of peak. I've still got it somewhere. But that was so long ago. What's the story behind Prusa research? How long have they been around, and how did they come to be?

**Pavel Strobl:** \[00:08:03.05\] Yeah. As you said, it started with Prusa Mendel. It's been 2012 by starting the company, but Prusa Mendel I think is 2009. And since then, Prusa developed multiple printers... i3 for yourself, Prusa Mini, Prusa XL, multi-tool, multi-material printers etc. But Prusa Research is not only about 3D printers, it's also about the software around, because even though you have amazing hardware, you have nothing without software. So amazing job that our developers did with the firmware, implemented the first input \[unintelligible 00:08:44.05\] without accelerometer. It's all calculated on the fly, but the values of the accelerometer are pre-calculated, and a lot of web services are online, like for example Prusa Hub or Knowledge Base, Prusa Shop, obviously... Printables, almost the biggest 3D model website that you you can find around. And there's a lot of stuff that isn't even seen, like Prusa support. That's probably the most interesting about us, because we have live support almost 24/7 for 3D printers. We have a Prusa forum, where you can ask; we have big community that we are grateful we have, and we are printing also the next 3D printers \[unintelligible 00:09:35.09\] because we can push forward because you are buying our printers, obviously.

**Tom Wilkie:** Oh, my pleasure. Yeah. No, I remember when Richie and I were first kind of exchanging notes on 3D printing, and Richie was very keen to get in touch with someone at Prusa Research and see if they were using Grafana. Richie, I can't remember the exact story. Did we see it in a video? How did we, how did we first get in touch with Pavel?

**Richard Hartmann:** Prusa used to run Prusa Live podcast. They sadly stopped. And I watched it basically immediately, as soon as you can watch it, on 2x speed, of course. Nobody's got time for 1x speed. And I did reach out to a few people who were -- or basically everyone who was in the podcast, and no one ever really replied to me. And when I was organizing PromCon 2022, I just happened to see Prusa Research on their registration list. I'm like "Oh, that's interesting." So that's how Pavel and I got to know each other. He attended PromCon, and the rest is history.

**Tom Wilkie:** Yeah, that's right. I remember I met you there. The first time I met you there, Pavel. And then they very graciously had us over for a visit in in their factory and research facility in Prague. Is it Prague?

**Pavel Strobl:** Yeah. Actually, we have manufacturing and development in one complex in Prague. \[unintelligible 00:11:01.22\] We have multiple buildings around Prague, but mostly in \[unintelligible 00:11:08.12\] We are having our headquarters, manufacturing, development, web development, and also me as DevOps, are sitting there in the offices.

**Mat Ryer:** Pavel, at the offices on the campus, is there just loads of 3D-printed stuff everywhere? Because I looked on printables.com and you can actually get a 3D model of a crab spoon rest, that holds a wooden spoon, a crab. Do you have things like that knocking about everywhere?

**Pavel Strobl:** Yeah. Basically, yeah. Not only that, but everything you can imagine. A lot of plant pots, for some reason; for some reason there's a lot of them, because they are \[unintelligible 00:11:47.18\] And we have like seven printers in the office, two XLs, multiple MK4s, one Mini... And everybody just goes into the office, "Hey, can we borrow your printer?" "Yeah, yeah. Of course." And there's plant pots \[unintelligible 00:12:06.06\] around me, and tissue holders, or something like that. That's very popular. Everybody's printing that.

**Tom Wilkie:** \[00:12:16.05\] And when you say your office, you literally just mean like your room in the complex, right?

**Pavel Strobl:** Yeah, yeah. At our department of \[unintelligible 00:12:23.06\] there's even a small SLA farm, a lot of printers in the other offices etc. You have always a place to print.

**Richard Hartmann:** And to be clear, the seven is a downgrade. I saw both his old and new office, and Tom, the office which you saw was the old one. I would guess this was more like a thousand, one and a half thousand printers in the older, smaller room, and now it's actually a downgrade to only like seven. And basically, all the rooms look like this.

**Tom Wilkie:** I only have four 3D printers in my office at home. Three of them are Prusa Labs. I'm a huge fan. I've got one of pretty much everything they make. And if you can hear printers in the background, that's what you can hear. I can hear them over Pavel's mic as well. I can hear your XL doing the fast travels occasionally.

**Pavel Strobl:** Yeah. I'm printing key chains for a friend.

**Tom Wilkie:** Key chains. I'm printing wind tunnels. It was a present for my brother who designs a racing cars... So I bought him some little model racing cars of ones that he designed over his career. And instead of -- this was for his birthday. Instead of just giving him a model of a car he designed, I thought "Wouldn't it be cool to 3D print a wind tunnel to put it in, with like smoke effects, so you could see the interaction of the air going over the car?" Do you want to see -- I actually have the prototype from the first version. It's a visual thing, so this is going to be great for a podcast, but... Do you want to see the first version I made?

**Mat Ryer:** Yeah, Pavel, you can criticize it for the people at home. What do you think of that? Oh, to be fair, that looks amazing.

**Pavel Strobl:** No, not so much of orange, I think.

**Mat Ryer:** It's Grafana Labs though, Pavel. We've got to.

**Tom Wilkie:** It's also the Prusa Labs colors as well.

**Richard Hartmann:** They're orange and black.

**Pavel Strobl:** Yeah, exactly.

**Mat Ryer:** But Tom, some of that's got see-through. What's that see-through bit? Is that printed?

**Tom Wilkie:** That's acrylic that I bent with a hairdryer. So no, that's not \[unintelligible 00:14:15.13\] It was an unsuccessful experiment, the bending it with a hairdryer.

**Mat Ryer:** Where have you got a hairdryer from?

**Tom Wilkie:** I borrowed yours, Matt.

**Mat Ryer:** I don't need it.

**Tom Wilkie:** Another visual \[unintelligible 00:14:26.04\] So speaking of things we have in common with Prusa Research, it's not just the color scheme, but everything that Prusa Research is also open source as well.

**Pavel Strobl:** Not everything, of course, but yeah, we open source our firmware. Basically, you can build your own. We have only like a closed source bootloader. So you have to pull the appendix from the motherboard, and it's like opening a bootloader at your Android phone. It's basically the same.

You can flash your firmware if you want to. And there were actually a few custom firmwares in the past. I'm not sure if at this moment there is something for Excel MK4, but for Mini there was alternative firmware, and for MK3, of course, there are a lot of alternative firmwares... Because it was built on Marlin. Even MK4 is built on Marlin, but MK3 was built on Marlin as well. It was running an 8-bit CPU, so it was pretty easy to program for.

**Tom Wilkie:** No, I distinctly remember. I really appreciate the open source nature of Prusa Research and their things, because during the pandemic, it was impossible to get hold of Prusa Mini, because they were sold out. So I ended up making my own one. I downloaded all your designs, 3D-printed it... The bits that I couldn't source, I got replacements for. I didn't use the Buddy board. Is it the Buddy board?

**Pavel Strobl:** Yeah, it's Buddy.

**Tom Wilkie:** I didn't use the Buddy. I used one from a Chinese manufacturer, from BIGTREETECH instead. And it worked, would you believe it? And the thing is, I made it and gave it as a present to a friend of mine for his birthday, and he's still using it to this day. And I can't believe a hacked up 3D printer that I made from some open source designs and some cheap Chinese components, and had cables sticking out the side... And he's been printing with it for three or four years now.

**Mat Ryer:** That's amazing.

**Tom Wilkie:** \[00:16:16.20\] So it's one of the things I really like about Prusa Research, and one of the reasons why I have your printers, is because I know I can hack on them and modify them.

**Mat Ryer:** That's also crazy that you printed some of the 3D printer. That is a little bit baffling. That's a bit like how --

**Tom Wilkie:** Oh, quite a lot of it, yeah.

**Mat Ryer:** Yeah. Soon we won't be able to make 3D printers without already having 3D printers. Are we already there?

**Pavel Strobl:** We have obviously metal parts that cannot be printed on 3D printers... But on MK4, all of the parts that were plastic were 3D-printed. For MK4S, there are actually injection-molded parts, like a CD cover, and a cover of the \[unintelligible 00:16:53.12\] But even then, you can still print them and modify them any way you want... Because that's how we work. We are making the parts easy to manufacture for us, because it's much cheaper to injection-mold than 3D print... But for you, for the community, we really like to get something so you can get the step files, modify them anyhow you want, and just put them on your printer and make, I don't know, from your printer, or change the color. Just change the colors. My wife wanted a pink 3D printer, so she has a pink MK3.5.

**Richard Hartmann:** Pavel is actually underselling himself there. The vast majority of everything which Prusa ever produced was enabled by 3D printing. And when you visit -- and they do tours. There's hundreds and hundreds and hundreds of 3D printers running 24/7, just churning out parts for new 3D printers, which is part of why they are so reliable, because they use them for their own production. It's not just a product they shove out the door and it's your problem now. They actually run long-term. And Tom and I - we saw printers which had been running for 400 hours, with basically no maintenance, and an empty airlock. We checked on site, they just keep running.

**Tom Wilkie:** Yeah, that was one of the most impressive things about the site visit, was the printer farm. It's huge. You can't imagine. There's photos of it online. You can't imagine how many printers there are, and they're all just producing more printers to sell... It's actually a really good point you make there, Richie, because that's another thing that I think Grafana Labs and Prusa Research have in common. We use a lot of our own tooling at Grafana Labs, and our staging cluster is our main operations cluster. So we use our own Grafana Cloud product, Mimir, Loki, Tempo at Grafana to monitor our Grafana Cloud SaaS. And it's that that drives the reliability. Because ideally, if there is a problem with any of our software, we're the ones to discover it first in our ops cluster. And so we're constantly pushing out changes, and testing them, and using them in anger, and then only then giving them to customers. That dogfooding is something that I think really drives a quality product, and I think it's fantastic how Prusa Research do that.

**Mat Ryer:** Yeah, print your own dogfood.

**Pavel Strobl:** Yeah, you can say that our print farm is like our staging cluster, because we are running over 700 printers, I think.

**Mat Ryer:** 700?

**Pavel Strobl:** Yeah. And most of them are MK4s. Then a few XLs for the details that are printable only on XL, because they are too big... And no Mini, because Mini doesn't make sense for us to have on the farm. However - yeah, thanks to the 3D printing farm, we actually increased the reliability of our printers, and we found out a few issues before the printers were released.

\[00:19:56.06\] And as well with the input shaper, for example - it was tested at the farm as well, and we were actually able to get profiles for the printers optimized. And the farm is a crucial part of the company. Without the farm, we cannot produce any printer. And having a test environment like this is actually useful.

**Tom Wilkie:** I really like drawing those parallels between two seemingly very unrelated activities and organizations. You do dogfooding like we do, you do open source for a lot of the same reasons we do, and your logos are black and orange.

**Pavel Strobl:** Coincidence. Our logo is mostly black, but we have used orange as our \[unintelligible 00:20:41.13\] color. If you will see an orange printer, then you'll know it's Prusa.

**Mat Ryer:** Yeah, that's cool. But you talked about that farm, the print farm. That sounds amazing. 700 printers... So that really makes it clear why Grafana is going to help there with the observability. What did you do before you had Grafana? How did you manage something like that?

**Pavel Strobl:** Before we had Grafana, as far as I know correctly, we had nothing... At least for the 3D printing part of the company. Because when MK3 was in development, there was a need for monitoring the printers. And mostly at the farm you still had to go and to print and take the prints out etc. You will notice probably that there's some issue with the printer.

For the web development, I knew that Datadog was used, but yeah, I joined Prusa Research when Grafana was embraced, thankfully, and we are using Grafana since then. We, for DevOps, I can say that we are cutting edge. So we are running on the last version, 10.4.1, and we are preparing to migrate to version 11. But for the development part, it's a little bit older.

**Tom Wilkie:** Nice, nice. You're going to really like 11. The new Explore metrics and logs experiences in there are game-changing, in my opinion. It makes it so much easier for more people in an organization to access their Prometheus metrics and their Loki logs. But you're not using Prometheus for a lot of things, are you? You use something else.

**Pavel Strobl:** Yeah, I'm DevOps. Yeah, we use Prometheus; it makes sense, because we are scraping \[unintelligible 00:22:22.21\] But yeah, for the printers Influx is used.

**Tom Wilkie:** Oh, very cool.

**Pavel Strobl:** InfluxDB, version - I don't know. But the main reason why Influx is used is because a need of nanosecond precision. That's something that is not possible obviously with Prometheus, and that's why we are using Influx. Because when you are developing a printer, you really have to know when something occurred, and nanosecond precision is a must.

**Tom Wilkie:** Richie, why don't we have nanosecond precision in Prometheus?

**Richard Hartmann:** Because it's always an engineering trade-off, how much precision versus how much data usage. And for most computer things, microseconds are more than enough. And that's why we use them. I mean, Pavel and I had this discussion recently, and my somewhat strong opinion - for everything where you actually need the super-high precision, you tend to not have super-long running things. And how the rest of the industry tends to do this, or actually pretty much all the established industries do it, is you use metrics with whatever precision for your long-running stuff. And when you have your microburst on the network, or you have your jitter on the power supply, or whatever, you use actually logs, or events with super-high precision for a very short time. And only the really important stuff gets emitted. But I don't think the firmware of Prusa is there yet.

**Tom Wilkie:** No, that's super-cool. I do think, even if it's just to get Prusa Research using Prometheus for their printer development, we should add nanoseconds. I think that's a good enough reason for me.

**Pavel Strobl:** \[00:24:05.29\] You can actually get metrics into Prometheus from the printers, thanks to Prusa Exporter that I wrote.

**Tom Wilkie:** Oh, did you write that? I didn't know you wrote that.

**Pavel Strobl:** Yeah, yeah. It's been a while since I touched it... But yeah, I wrote that. And basically, it's like getting the metrics from the printer and it transforms them into \[unintelligible 00:24:23.09\] for Prometheus. That's basically what it does. And what the printer sends is almost the line protocol for Influx, but it's not the line protocol, because in the line protocol you have timestamps. There is no timestamp, because the printer doesn't have enough memory to send timestamps, so it sends delta, and it sends for how long it's running, so you have to remember somewhere for how long the printer is running, actually.

**Tom Wilkie:** And Richie takes a 3D printer to almost every Grafana Labs event and shows that work.

**Richard Hartmann:** Yup.

**Tom Wilkie:** We're going to New York next week, aren't we, for ObsCon? Are you going to take one to ObsCon, Richie?

**Richard Hartmann:** So for the listeners, we have two printers which are actually owned by Grafana. One is in Europe, and one is in the US. So yeah, we are shipping over the one we have in the US. And basically, we use it, A, to print swag, like Grafana coins. I'm holding them up, but you probably can't see them. Or for shopping carts, where you have to put in a coin to get the shopping cart out of the lock, and things like these. Basically, just little trinkets, which are just fun, and hand pleasers, and you can fidget and whatever... But also, you can see them being made on site. But the other thing, and the main thing, actually, is we can display all the data which the printers are emitting in Grafana, and this gives you a little bit more of a tangible thing. We can put up all the demos and all the recorded videos and everything we want, but to really drive home the point of the versatility of the whole platform, we - or myself - came up with the idea of "Well, show something which people can actually touch, as opposed to just yet another Kubernetes cluster, and you can't really see what's happening." So you see something in the real world, you can touch and even get the product, and you can see how it's made on the Grafana dashboards.

**Tom Wilkie:** No, that's super-cool. I'm actually 3D -printing a wind tunnel right now to take to New York to do the same thing. So we're going to have a wind tunnel next to the 3D printer. And then in the wind tunnel is a little load cell, and you can measure the amount of downforce generated on a little toy car, and we're going to have that all displayed in a Grafana instance. And then, at the end of the event, we're going to give it away as a prize draw to one of the attendees. So yeah, it's all a bit convoluted, but you know, just having something a bit more -- to Richie's point, something a little bit more interesting than yet another Kubernetes cluster running on a bunch of Raspberry Pis is our main aim here.

**Mat Ryer:** I don't know, it's a bit cliché, but I think giving away a 3D-printed wind tunnel --

**Tom Wilkie:** Oh, it's been done before, hasn't it, Mat?

**Mat Ryer:** Yeah, sorry. Yeah. I was just checking printables.com for other things we could give away... You can download and print a cat skull. It's available on printables.com.

**Tom Wilkie:** There are other ways of getting hold of cat skulls as well. You don't have to print them.

**Mat Ryer:** Is this for like a replacement if your cat's not well? You mentioned the medical use earlier. Is this really -- are we using 3D printers in the medical world now?

**Pavel Strobl:** Yeah, obviously, you have to buy a medical \[unintelligible 00:27:29.10\] You cannot use a usual printer. You have to have a special one.

**Mat Ryer:** What's special about it?

**Pavel Strobl:** Yeah, it's optimized for medical use. \[unintelligible 00:27:39.17\] It's a resin printer, so it's good for like printing teeth, and --

**Mat Ryer:** Printing teeth?

**Pavel Strobl:** \[unintelligible 00:27:44.08\]

**Tom Wilkie:** \[00:27:48.10\] Seriously, my dentist just down the road that I go to has a Prusa 3D printer in their shop. And if you do like an X-ray 3D scan of your mouth, they 3D print your dentures to fit. I don't think they're the final ones though. I think they send them away for the final ones. They're just for fit and finish, or something. I'm not sure. I have all my own teeth for now.

**Pavel Strobl:** Yeah, yeah, yeah. \[unintelligible 00:28:06.12\] for temporary.

**Richard Hartmann:** There are actually medical uses for -- and I know for a fact that they're using Prusa, because this was something which Prusa actually sponsored, and they gave a few 3D printers away for free into both Ukraine and Africa. Splints for when you break a bone, or something. One of the main plastics you print with is called PLA, and it has a relatively low temperature point where it starts to become soft, like 60 degrees, roughly, Celsius. So you can print it, you can dump it into hot water, you can take it out and you can press it against the skin of the patient, and it takes shape or it resettles into shape around the specific arm, hand, foot, whatever, of the person, as a super-low cost and in-the-field way of making splints and such.

**Tom Wilkie:** And of course, during the pandemic, Prusa did all that work producing PPE as well.

**Pavel Strobl:** Yeah, we were producing the face shields. I don't know if somewhere else outside of the Czech Republic, but in the Czech Republic there was a movement of 3D-printed face shields... And even I was part of the movement. I had MK3 back then, and I was printing the \[unintelligible 00:29:21.24\] It was using that plastic sheet for papers, you can use. And I remember that I destroyed my printer, because I moved it too close to the wall, and I destroyed the cable that surrounds from the heat pad to the printer.

**Tom Wilkie:** Oh, no...

**Pavel Strobl:** Yeah, it basically snapped... And yeah, I wasn't printing for a while, because I wasn't able to get replacement parts. But yeah, the printer is actually still working, and I was using it from 2017.

**Tom Wilkie:** Oh, wow.

**Mat Ryer:** See, we're not just big, massive nerds. We're saving lives over here.

**Pavel Strobl:** \[laughs\] And Prusa Research also distributed a lot of those shields. And you can even buy them at this moment at Prusa e-shop. But they are for different use at this moment.

**Richard Hartmann:** They're even certified across the European Union. So this is an actual medical device which has been certified across all of the European Union.

**Pavel Strobl:** Yeah. Certification is something that we are moving forward to. For example, our PETG, something like PET for the bottles, but just similar. It's not the same.

**Richard Hartmann:** How is it called? UV0?

**Pavel Strobl:** V0 certification. It's not flammable, and it can exhaust itself. Very good use for automotive or electronics overall.

**Tom Wilkie:** So one of the things I always wondered, now that you're gathering all this data, not just from your software infrastructure and your websites and so on, but from the printers - what is the most interesting kind of artifact or thing you've discovered that you previously didn't know?

**Pavel Strobl:** Maybe how a printer has worked for me - I cannot speak for the whole company, but for me it's how a printer works with power supply, and how effective it is while it's printing. When it's not printing, it was around 15 watts. But when it's printing, it's actually used with modulation for covering everything it needs. It's much older than I thought. It was used as well at MK3, but for MK4... And also for XL, because you have like 4x4 heatbeds. There's not one big heatbed, but 4x4 smaller ones. It uses this modulation for getting correct temperatures, and also expandability of the heatbeds. Because the heatbed is expanding while it's heating. So that's why it's not one big heatbed, but smaller ones.

**Tom Wilkie:** Were there any other kind of interesting use cases or things you've found?

**Pavel Strobl:** \[00:32:11.17\] Yeah, for 3D printers it was probably the use of load cell data. Basically, if you have any 3D object in reality, you can use the load cell sensor on the nozzle to probe the model or anything you have on the printer to get the shape of the model in 3D space. It's not easy, obviously. You have to calculate a lot, and get the data from the printer... But yeah, you can actually get a 3D model from the load cell sensor. It's like a 3D scanner, and everyone -- not everyone, but a lot of people are asking when we are going to release a 3D scanner. Yeah, we already did. \[laughter\]

**Tom Wilkie:** I used my iPhone to 3D-scan a car recently, and it was quite difficult, quite painful. And so if you do happen to make a 3D scanner that can scan a car, I'll be the first in line to buy one.

**Mat Ryer:** Was that somebody who cut you up, but instead of taking a picture, you're like "Right, hold on... I want to get the whole car."

**Tom Wilkie:** I just parked there for an hour, in perfect sunlight... No, it was -- my dad's got a kit car, and I wanted to 3D print a model of his kit car to put in the wind tunnel. So it all connects. So yeah, so I 3D-scanned it with my phone, and I've now got a massive point cloud that I need to figure out how to do something with... But that's a problem for a long flight someday.

**Pavel Strobl:** As a load cell sensor, it's interesting that you can actually print on any surface you want. And we recently did this video about printing on different surfaces. And there was also a PlayStation 4 used as a printing sheet...

**Tom Wilkie:** Oh, wow.

**Pavel Strobl:** ...and we were printing directly on the PlayStation 4. Or you can print on T-shirts. Actually, it works pretty well. And you can print like a giant Grafana logo on your T-shirt, with Excel, obviously... And thanks to the load cell sensor, it will be printed, actually. Yeah, the load cell sensor is actually a really amazing technology that we accompany our printer. And no leveling issues, finally, after MK3.

**Tom Wilkie:** Yes. Yeah, no, tell me about it... So you said before the podcast, when we were chatting, that you're thinking of adopting Mimir for your metrics.

**Pavel Strobl:** Yeah, exactly. We are using Prometheus, obviously, as our backend... But for Federation, we have multiple instances. We use Thanos at this moment, and we are experimenting with Mimir, because we are going to move our DevOps cluster to a different region. And yeah, this is a really good opportunity to migrate the data, because mostly we are going to scrap them, you know... We are moving somewhere else, so we are probably going \[unintelligible 00:34:58.19\] And using Graphana Mimir for myself, for my purposes, for Prusa Exporter, exporting data for everything I want... It works pretty well. And for me, it's more scalable. And this is the future of the DevOps department for now. And hopefully, if we implement Prometheus metrics for the printers \[unintelligible 00:35:22.26\] as well.

**Tom Wilkie:** No, that's very cool. I mean, so far you've mentioned Datadog, you mentioned Influx, now Thanos... I want to say, this is the Big Tent podcast, so we embrace all of the metrics backends. That's totally cool. But why are you moving off of Thanos to Mimir? What's motivating that move?

**Pavel Strobl:** \[00:35:45.09\] For us, it's slow queries. We have over two years of data. Yeah, there's some discussions inside of the company if we need this amount of data... But yeah, there's two years of data. And if you query over 14 days, it takes a lot of time to get the data from Thanos. And yeah, that's basically the main reason. The store gateway is starting too slowly etc.

**Tom Wilkie:** One of the things that we designed Mimir -- I mean, I wrote the early versions of Mimir before it was called Mimir, when it was called Cortex. But one of the things we designed it to do is lots of parallel queries, and really be able to scale in that dimension. And we did it for fun, and it turns out, at the time at least, it might not have been the thing people actually needed, because most people needed what you've just described, which is querying over months or years of data. But the thing I'm most excited about is we've finally found a use case for being able to handle high concurrent query load. And it's this new Explore Metrics. So in Grafana, the Explore Metrics, when you click on a metric, it's gonna go off and do a query for every single label behind that metric, to see which labels have kind of outliers in, and what the distributions are. And so just clicking on a metric issues like 15 queries instantaneously, and puts a lot of load on the Mimir cluster. But it's something Mimir handles very well. And it's really interesting, because we've had a lot of users tell that story where "Oh, I'm moving off of Thanos, because I started using the explore metrics and it was killing my cluster. And so I'm starting to move to Mimir, or to Grafana Cloud." We run our Grafana Cloud Mimirs with many, many replicas of the querier, to deal with this exact use case. So it kind of was a solution in search for a problem for a while, but we've found one, finally.

**Mat Ryer:** It's another version of dogfooding, really. We basically DDoS ourselves, and then we have to make sure that works and keeps working. It's quite fun.

**Tom Wilkie:** I remember when the explore metrics team were like "Oh, we've got to be careful with how many queries we issue to the metrics back", and I'm like "No, no, no. You're just giving the metrics team a challenge. Giving them something to work on."

**Mat Ryer:** And we've done that for logs, profiles and traces, of course, as well. Yeah, we'll post a link in the show notes for more information about those apps. Okay, before we wrap this up, a quick question for each of you. What is the best thing you have 3D-printed?

**Tom Wilkie:** So we're all holding up a little 3D-printed Grot. So Grot is the Grafana Labs mascot. And the reason it's called Grot is we initially had a GitHub bot called the Grafana bot. And it was our bot that would deploy stuff, and close issues we didn't things, things like that. And our art department did a little 2D mascot of the Grafana bot, and we renamed it to Grot. And it started to be used by our marketing team, and then it started to be used by our community team, and suddenly we've got this little company mascot that's a little like a junior kind of juvenile dinosaur, like... So I went on Fiverr - is it Fiverr? Yeah, Fiverr, which is like a gig website, and found someone who would turn the 2D images that our art department had done, turn them into a 3D STL. And then posted it up on Printables, and Pavel downloaded it, and colorized it, because I didn't at the time have a multicolor printer... And so Pavel's got a giant Grot in the Grafana colors. I've got a little one now that I printed off... And yeah, I just think the power of both collaborating over the internet, finding a random person to design it, and then Pavel coloring it in... Yeah I just think it's a really cool story. And of course, we'll post links to the Grot on printables in the show notes. And if you want a 3D-printed Grot, I printed off about a hundred of them - it did take a while - and gave them out at re:Invent in Vegas last year. And so I'll probably do the same this year. So come find me at re:Invent and I might have a 3D-printed Grot.

**Mat Ryer:** Nice. Yeah, very cool. Can you beat Grot? By the way, be careful what internal jokes you do, because sometimes they do get out...

**Richard Hartmann:** \[00:39:56.04\] You mean like a onesie?

**Tom Wilkie:** No, no, the Grot is -- so the thing I find amusing is the Americans don't get that. But Grot in British English is kind of dirty. Like, grotty means dirty, right?

**Mat Ryer:** Oh, does it not mean that there?

**Tom Wilkie:** No, and I think there might even be worse connotations to the word. But we've called our mascot Grot, and that's here to stay.

**Mat Ryer:** Yeah, that's it. Richie, do you like that name?

**Richard Hartmann:** I'm pretty certain I was part of the people pushing for the name and the subsequent creation of the original 2D thing. Because it follows the Grafana G thing, to some extent. Like, if you look at it not too closely, you can see that this is actually inspired by a G, and it's following the Grafana G.

**Mat Ryer:** Yeah. But that used to be a dinosaur, didn't it, as well? The original Grafana logo, you can still find it on the web.

**Richard Hartmann:** It wasn't a dinosaur... I forgot the English term. It's a lizard. Not a bartagame...

**Tom Wilkie:** So what's the best thing you printed then, Richie? The suspense is killing me.

**Richard Hartmann:** Honestly, it's probably the first thing which I printed, which is a lamp holder, which I whipped up with no skills within like half an hour in -- what's the thing? The super-basic 3D thingy online. I forgot the name, but basically, I meshed up a few shapes and I printed a lamp holder, and it's still going strong, years later, and it still holds up the lamp. So that's probably it.

**Mat Ryer:** You pointed to the ceiling there. Did you print the ceiling? Is that the thing that's holding the lamp?

**Tom Wilkie:** No, he was pointing to heaven, where the lamp holder is now.

**Mat Ryer:** Oh, right.

**Richard Hartmann:** Up is the direction. Also, maybe this is a fun fact I can share here, and I'm going to shock Tom and Pavel here... I never in my life printed a Benchy.

**Pavel Strobl:** Oh, no...

**Tom Wilkie:** What?! You're not really a 3D printer.

**Richard Hartmann:** So far, for the audience, Benchys are like a calibration print thingy.

**Tom Wilkie:** That's a good point, actually. I haven't printed a Benchy on the XL yet. I need to --

**Mat Ryer:** What is it?

**Tom Wilkie:** It's a little boat. I've got one up here.

**Mat Ryer:** Oh.

**Richard Hartmann:** It's for calibration, basically.

**Mat Ryer:** A calibration boat.

**Tom Wilkie:** Yeah. And it's quite a -- I mean, it used to be quite a tricky print, because you're printing in thin air, and it's got lots of overhangs... It's got this bow that's kind of difficult to print... On that printer it didn't print very well at all. So it used to be quite a tricky print. Now any printer you buy will print a Benchy straight away. And now there's this thing called the speedboat race, which you see how quickly you can print a Benchy... And I think the record's like two minutes. You can turn out one of those in two and a half minutes. I mean, it's barely recognizable. It's a blob of plastic, but it's just about a recognizable Benchy.

**Mat Ryer:** And do they float?

**Tom Wilkie:** No. They turn over in the bath.

**Richard Hartmann:** They capsize.

**Mat Ryer:** In the bath... He's taking it in the bath, ain't he?

**Tom Wilkie:** Yeah... \[laughter\]

**Richard Hartmann:** There was actually a YouTube video about a lady. I forgot it -- Emily the engineer. She 3D-printed a Benchy which was large enough for her to sit in.

**Mat Ryer:** That's amazing.

**Tom Wilkie:** Pavel, what was the best thing you've ever printed? Please don't say Benchy.

**Pavel Strobl:** No, it's not Benchy, but it was \[unintelligible 00:43:05.20\] And that's why the printer motherboards are called Buddy. However, it was probably -- if you know Stargate Atlantis, then Atlantis the city was one of my first prints. And I still have it somewhere. It's Silver PLA, in 2017... And yeah, that's probably the best print I ever did, because I still remember it. And yeah, I also printed the SGC logo as well... But yeah, the Atlantis is the best thing I ever printed.

**Tom Wilkie:** You can download your GitHub timeline, the green dots, as an STL to print, where each one's like a different height, depending on the...

**Mat Ryer:** Oh...

**Tom Wilkie:** Yeah, I know. You've got to do it.

**Mat Ryer:** Yeah, that is cool.

**Tom Wilkie:** Go on, Mat. I'll print yours for you and send it over.

**Mat Ryer:** Oh, let me do some coding first.

**Tom Wilkie:** Yeah, you have to do some work first.

**Mat Ryer:** Yeah. It'll just be a flat -- I could probably do it at the moment with a 2D printer.

**Tom Wilkie:** Yeah, it's just a blank sheet of paper for Mat.

**Mat Ryer:** Okay. Well, sadly, that's all the time we have today. Thank you so much. And I'll say, I'm genuinely considering getting a 3D printer now, just for that GitHub thing alone.

**Richard Hartmann:** Do it!

**Mat Ryer:** Yeah. Thank you so much, Tom. Richie Hartmann, also here, and our special guest, Pavel Strobl. Thank you very much. I'm Mat Ryer, and we'll see you next time on Grafana's Big Tent.
