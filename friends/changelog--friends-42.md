**Paul Orlando:** I am talking you through outer space, which we can discuss as well.

**Jerod Santo:** How so?

**Paul Orlando:** Well, I'm on Starlink.

**Jerod Santo:** Oh. So all of your words are going up into the air, and then coming back down before they get to us.

**Paul Orlando:** Yes. It's amazing.

**Jerod Santo:** Do you know exactly how high those things are? Because they've solved the latency problem of other satellite internet providers, because they're not that high.

**Paul Orlando:** That is absolutely true. They're in a lower orbit than the Ka band that the original direct PC Hughes aerospace satellites... Those are actually a lot further away. The Starlink constellations are relatively close. That's why you can see them with the naked eye... Much to the chagrin of astronomers.

**Jerod Santo:** And anybody who likes to look up in the sky at night. Now you're seeing all this stuff flying around out there.

**Paul Orlando:** Well, I look up in the sky, and I like to... I also like to see human works flying around in space, just because it inspires me. It makes me think "Hey, the future is actually here." By that, I mean, I find New York City, or Madrid, or Hong Kong, many places... Los Angeles at night. If you're flying into Los Angeles at night, that's the actual LA you want to see. Because you're flying for an hour over just endless lights, and you're like "Where does the city begin?"

**Jerod Santo:** It's pretty amazing.

**Paul Orlando:** Something that I find that -- all of our human works, there's a beauty to it. I'm not like "Oh, tear down human civilization." No, I'm like "Build up human civilization." Now, I understand the problem of littering space with a bunch of junk. That's a different --

**Jerod Santo:** Yeah, like LA, you know, the smog, and then eventually, we have so many low-orbit satellites up there that... I don't know, maybe we never have darkness again, or something. They reflect light, but they don't put off light, do they?

**Paul Orlando:** You could just send up a high altitude balloon and just hook onto one and just "Whoah, there we go...!" \[laughter\]

**Jerod Santo:** That would be interesting.

**Paul Orlando:** Well, actually, one of my next balloon projects, I'm hoping to connect to some satellites, actually.

**Jerod Santo:** How many balloon projects do you have, Ron?

**Adam Stacoviak:** Oh, my gosh \[unintelligible 00:03:30.04\]

**Jerod Santo:** I know. He just assumes that we know "This guy has balloon projects." Please, tell us.

**Paul Orlando:** Oh, well... So last year was my third year in a row of speaking at FOSDEM, the awesome Free and Open Source Conference in Belgium, in Brussels... And it was my third edition of the Go Without Wires saga. First year it was Go Without Wires, about Bluetooth. Second year, Go Further Without Wires, about local area networking with Wi-Fi... Last year it was Go Even Further Without Wires.

**Jerod Santo:** \[laughs\] I think you're running out of titles though...

**Paul Orlando:** Oh, no. Not even close.

**Jerod Santo:** \[laughs\] Okay...

**Paul Orlando:** So it was about long-distance radio networking using LoRaWAN, which is a standard for using unlicensed spectrum, that's free to use for anyone in the public.

**Jerod Santo:** Oh, I haven't heard of this. LoRaWAN.

**Paul Orlando:** Yeah, LoRa, like Long Distance Radio...

**Jerod Santo:** Okay.

**Paul Orlando:** And then on top of that is a routable protocol called LoRaWAN. Like, wide-area networking. And the real pioneers in this space are the Things Network, which is an open source/commercial open source organization that has a whole network of these routers. Basically, you can connect to these local long-range radio networks, and then it has a backhaul to the internet. That way, you don't necessarily have to have your own private network, it can just get routed through the Things Network to whatever cloud servers that you want to. So this is, of course, really useful for applications in industrial, or agriculture, or smart cities... They have quite a few of them. There's a bunch of telcos that are also participating in this.

So the finale of my talk was a high-altitude balloon programmed with TinyGo, using a Raspberry Pi RP-2040 Pico board. Since these tiny balloons are called Pico balloons, so I'm very literal, I thought "Oh, I should build one with a Raspberry Pi Pico." I mean, obviously... It was in the instructions, as far as I was concerned. It's in the title.

**Jerod Santo:** It's right there in the name, yeah.

**Paul Orlando:** Yeah. So I have a long distance radio, I had a GPS, I had an accelerometer... It was all hand-wired using a protoboard and wire wrap, just because I got into this retro computing thing. And it happened to be the weekend that everybody was talking about the balloons of Chinese origin.

**Jerod Santo:** \[00:06:17.23\] Oh, right, that were floating over the US.

**Paul Orlando:** Yeah. Now, to be fair, all parts are of Chinese origin... So it's just sort like --

**Jerod Santo:** \[laughs\] Yeah. Hard not to find \[unintelligible 00:06:26.22\] Chinese origins.

**Paul Orlando:** Yeah. I mean, certainly anything that's in the toy category... So less than 250 grams, you don't have to file a flight plan, or anything. It's basically toy balloons, which --

**Adam Stacoviak:** No way. Wow.

**Paul Orlando:** ...literally, I had ordered from Amazon and other such places \[unintelligible 00:06:42.22\] that toy stores. I mean, I only work with toys now generally, and it's only if you're gonna let me have anymore.

**Jerod Santo:** \[laughs\] It's a policy. Just toys only.

**Paul Orlando:** Yeah. Like, if you just give him toys, it'll keep them busy, and he won't get into much trouble.

**Jerod Santo:** So how high up would this balloon go?

**Paul Orlando:** So this particular balloon - it was on Hackaday; you can get some of the stats. It was called \[unintelligible 00:07:01.07\] the first one. We released it on Sunday there, and we did a countdown, we released it... It reached an altitude of about - I think somewhere between 6000 and 8000 meters, and it traveled approximately 400 kilometers, from Brussels, South of Orleans, France, before we lost contact.

**Jerod Santo:** Wow.

**Paul Orlando:** So I don't know if it was the French Air Force shut it down, or if the battery died, or something. I haven't gone back to France since then.

**Jerod Santo:** You're not going to collect this hardware.

**Paul Orlando:** Well, no, it didn't land. It just kept floating. That was just where we lost contact.

**Jerod Santo:** How do you know it didn't land, Ron?

**Paul Orlando:** Well, I mean, I imagine it landed somewhere, sometime...

**Jerod Santo:** Okay, well, you just said it didn't land, so I was like "What...?" Okay. Well, you don't know where it landed.

**Paul Orlando:** No, no. But it was a very successful first flight. We got telemetry the whole way, every 30 seconds, thanks to the Things Network. It proved that the long-distance radio networking and support in TinyGo actually worked, just because -- yeah, it was way out of my hands. So that was very cool.

Then we did a reprise of it at the GopherCon EU in Berlin in the summer. That launch was a little trickier. It traveled just -- it was just a little ways north of Dresden when we lost contact. And I'm like "Oh no, not an American balloon going over Dresden. I won't be able to go back anywhere."

**Jerod Santo:** Right.

**Paul Orlando:** That was -- the wind conditions were a lot more difficult, so... Both of those were battery-powered, and my next one will be solar-powered. That way I can actually circumnavigate the globe, and ideally, connect to some of the new satellite networks that are being built, that will be supporting this same LoRa protocol.

**Jerod Santo:** Wow.

**Paul Orlando:** So yeah, I'd like to go around the world in 80 days, with a toy balloon, programmed entirely with TinyGo, that's sending telemetry data... Just as far as citizen science, and reducing the cost of entry for experimenters, and explorers, and people to find out more of the things that they can really do.

So these are some of my hobbies, and also a great way for proving out some of the technologies. Like, if it works here, it'll probably work in a more conventional farm vehicle, or something, that's of terrestrial origin.

**Adam Stacoviak:** Yeah, it's really pushing it to the extreme being that high. I'm looking at photos on Hackaday, and it looks like it's got - not just one balloon, but multiple. It seems like maybe three, maybe four balloons. Is that right? Like, they're clear balloons... What's inside the balloons? How did you design this? Give us the details and like the exact innovator's dilemma of making this real, and going in the air like that.

**Paul Orlando:** Well, like any wise person, I go onto the internets and find out what other people have done before I do anything.

**Adam Stacoviak:** Okay. So you watched YouTube.

**Paul Orlando:** There's a whole community of Pico balloon enthusiasts who are doing --

**Adam Stacoviak:** Really?

**Jerod Santo:** \[00:10:13.12\] Of course there is.

**Paul Orlando:** Oh, yeah. Oh, yeah. They're doing amazing things. So I borrowed some of their design ideas. Specifically the balloons are toy balloons made of vinyl. And you have to stretch them out. They're filled with helium, that you could just get in any baloon-type party store. In fact, that's where I get my helium, is from party stores. Pay with cash at the party store. No, no... \[laughter\] So these -- they're transparent, ideally, so that some can get through to charge whatever solar cell...

**Adam Stacoviak:** Right. Which is beneath it.

**Paul Orlando:** This one I didn't have the solar thing set up. I actually had the equipment, but I didn't try to use it, because I had some software problems actually with the low power mode. So I had it working to charge, but it would discharge in about five minutes, so I couldn't... You know, the idea with these things is it recharges when it hits the sun, wakes up, send some telemetry data, goes back to sleep, and so on, as long as it's in sunlight... You know, generally done with a thin film solar panel and some super-capacitors. So I had the design, I built it again from specific parts that I happened to have on hand, and I was able to do with a wire wrap... But these balloons - you stretch them out, and since gas expands when you hit higher altitudes, that's the reason why there's four of them, is that each one is only partially filled. You fill them partway, that way when they reach, you know -- what I thought was gonna happen was that it was going to go a lot higher, and then pop. What instead happened was it reached apparently an altitude where it was just stretched out enough to not lose any gas, or have any bursting.

**Jerod Santo:** Perfect.

**Paul Orlando:** Yeah, beginner's luck on that one. The second, it was a little harder, just because there were a bunch of big trees right there in the venue... So that's always very exciting.

**Jerod Santo:** So you want to circumnavigate the globe... Do you want to be able to then control these things, like drive them? Or you're just saying you send it in a direction and hope it ends up going around the world?

**Paul Orlando:** Oh yeah, there's no controlling. They're just release, no catch. They just go. Generally, this type of high-altitude ballooning is done either by people doing this with a toy balloon thing, or people will use latex balloons with a payload with a parachute. With those, you actually file a flight plan, to be responsible, to make sure that you're not going to interfere with any air traffic, since...

**Adam Stacoviak:** Yeah, absolutely.

**Paul Orlando:** That's something -- I mean, just because there's no actual law preventing you doesn't mean you should just go and do something stupid.

**Jerod Santo:** \[laughs\] There's wisdom there. \[unintelligible 00:13:09.19\]

**Paul Orlando:** A tiny modicum of common sense, perhaps... I mean, you can't think of every possibility, but it's certainly a good thing to not release balloons right next to, for example, the US Naval Air Station in San Diego... Which is why I did not do that at GopherCon US... I'm like "You know, this is both stupid, and it's also very rude. Like, impolite. You should know better, and also, you should just know better."

**Adam Stacoviak:** Yeah. Definitely exciting, Jerod, and I think you'll also get on the wrong people's radar, potentially.

**Paul Orlando:** Yeah, no, you're definitely on the wrong people's radar right away.

**Adam Stacoviak:** Because you're already not filing flight plans, which - you're okay, with the grams and the weight... But at the same time, if you did this with let's just say a paper trail; not paying cash at the party store, for example... You could be called upon for some --

**Paul Orlando:** Well, I'm a known white hat, which is why they would be so angry.

**Adam Stacoviak:** Oh, okay.

**Jerod Santo:** \[00:14:11.04\] Oh, because you'd be darkening your hat up doing that.

**Paul Orlando:** No, it'd be just a matter of like I actually do know better.

**Adam Stacoviak:** That's true, yeah. Come on now...

**Paul Orlando:** This is also a matter of -- like, what is your purpose in doing this? My purpose is to help show young scientists the opportunities they have to do some exploration in a way that costs very little, and that gives them a chance to learn quite a lot... But these are things that are quite important, not just in the future, but really in the present.

A great example of citizen science being a lot better was a cool project a few years ago when the Fukushima incident occurred, called Safecast. And it was basically being able to turn your mobile phone and connect it to turn it into a homemade Geiger counter. And that way, they could get a lot more accurate readings of the type of data, just because the government would go in, they would take their readings of certain meter height, at a certain frequency, and it was a relatively small dataset. So this allowed a bunch of citizens to start collecting data. And one of the things they found, for example, was that there was a lot higher concentration of radiation lower to the ground than at the two or three meter height of these poles. So that was one reason why it tended to affect younger people, pets, and animals, and people who are in wheelchairs, just because they were lower to the ground, and so this higher concentration affected them more than adults. So this is data that they wouldn't have had if they didn't have just people who were interested, who cared about this. So it's a great example of open science, open source technology, working for social good... To me, that's the sweet spot of why we do this.

**Break**: \[00:16:05.14\]

**Adam Stacoviak:** Can we talk about that Geiger counter for a second? Because I'm curious about this, because like if you -- are they readily available? Can you just go buy one?

**Paul Orlando:** Oh, sure. Sure. And this was using, I believe, some photographic parts that -- Safecast. I don't know all the details. I did not make one of these myself. I've got enough problems without ordering parts that could be used \[unintelligible 00:18:56.27\]

**Adam Stacoviak:** Well, did you explain what the use of a Geiger counter is, so that the folks who don't know -- because I'm barely initiated, okay? So for the barely initiated, or the fully uninitiated, what is a Geiger counter, and why would you want to include one to gather data, given this kind of mission?

**Paul Orlando:** So a Geiger counter is a device whose purpose is to be able to read the ambient level of radiation in a local area. And they're generally used when you're working around sources of radiation, whether they're natural ones, like uranium ores, or artificial ones, the X-ray machine, for example. There's a reason why when you go in and get X-rays, that the technician - first of all, they leave the room, that way they're standing on the other side of a lead shield. Lead is a very dense element, and so the X-rays are unable to go through the lead. That's why they give you a lead apron to put over your sensitive parts when you go in for one of those X-rays, is to protect you from this radiation, just because repeated exposure... This is actually one of the reasons why it's going to be quite difficult for us to leave the Earth and go to, for example, colonize Mars, is the colonists, by the time they got there, would be barely alive, if alive at all, just because of the radiation in space.

**Adam Stacoviak:** Okay.

**Paul Orlando:** So a Geiger counter is one of the original - it's a very old device, it's a very simple device, generally speaking, that is able to measure this ambient radiation. So the Safecast team, they were basically using an Arduino connected to some salvage electronics parts, to be able to then connect this to your mobile phone and take readings that you could then upload to their web-based data store.

**Adam Stacoviak:** Yeah. I'm glad you explained that, because you did a much better job than I would have done explaining a Geiger counter... Although I do understand the radiation and measuring it. I was surprised, I've never looked into this to know it's really available, where you can just maybe go -- maybe not readily, literally available in literally any Radioshack, or go buy it at Target or Walmart or whatever... But they're available to maybe hobbyists and purists who want to like look into this. But the reason why I think it might be odd for any given civilian to buy this thing is because you can learn things about the Earth and its atmosphere, and let's just say scientific beliefs that may not actually be factual in our world. Like, you can learn for yourself, as a scientist would, for example. Even specific to the radiation belt that's around the Earth, that you say prevents or could prevent human travel to Mars, or let's just say the Moon.

**Paul Orlando:** No, just even staying in a high orbit.

**Adam Stacoviak:** Right. Was it the Van Allen belt? Is that right?

**Paul Orlando:** Yeah, that's one of several belts in the ionosphere, which protects us from -- and it's a very thin... If you look at the actual atmosphere relative to the planet, it is a thin little tiny piece of transparent... It's not even aluminum.

**Adam Stacoviak:** \[00:22:11.10\] Nothing, basically.

**Paul Orlando:** It's like jello. It's like this tiny little skin, you know...

**Adam Stacoviak:** Like an eyeball, almost; like a membrane around an eyeball.

**Paul Orlando:** Yeah, that's just protecting us from literally getting cooked.

**Adam Stacoviak:** When you said that about Mars, do you lean the way of exiting Earth, as humanity may or may not have? Are you a conspiracy theorist? Which way do you lean when it comes to humanity's departure from Earth, and have we or have we not?

**Paul Orlando:** Oh, I think we're a long way. There's a great -- I can't remember the name of the couple that wrote this book... It's about how to colonize Mars, basically. That's not the actual title. We'll have to look this up.

**Jerod Santo:** That'd be a terrible title.

**Adam Stacoviak:** A paraphrased version.

**Paul Orlando:** So they started out super-optimistic, they're like "Yeah, we're gonna see this in our lifetime. And by the time they got to the point where they could actually write the book, the enormous reality check of the distance between the technology we have today and the technologies that we actually would need is quite vast. Just to keep people alive between here to there, let alone --

**Jerod Santo:** Then once you get there...

**Paul Orlando:** When you get there, now what, right?

**Adam Stacoviak:** Yeah. Whole different problems.

**Paul Orlando:** I mean, if you live in a modern city, you're already drinking the refined -- the water system in your city is already purifying people's urine, and you're drinking it today, okay?

**Jerod Santo:** Don't tell me that, Ron...

**Adam Stacoviak:** Come on now...

**Paul Orlando:** This is the municipal water supply in most major cities. But it's also got other sources, right? On Mars, this is it.

**Jerod Santo:** It's the only water we have.

**Paul Orlando:** This is the only water we've got.

**Adam Stacoviak:** Did he answer my question though, Jerod? Or do you think he --

**Jerod Santo:** No, he's talking Mars. He's talking Mars.

**Adam Stacoviak:** ...circumnavigated my --

**Paul Orlando:** So I think that it's a great thing for the human exploration of space... But the reality of where we'd actually need to be to get there is a long way from this... You know, Spaceship Earth is the spaceship. This is the place. We have to maintain, preserve, and improve this one, because it's going to take quite a few more generations before there's any reality of being able to send humans to survive, even one generation. It's going to take an incredible collective effort just to do that little tiny bit. And Spaceship Earth is the place, so...

**Jerod Santo:** Right. You'd think we could practice on the Arctic, you know? Like, let's survive cold, and like colonize the Arctic and the Antarctic. There's people there, but very few. Let's build cities there and thrive there. It's very harsh terrain and environment, but hey, they have oxygen, which is nice, you know? And if we could do that, maybe we can do something like Mars. But until then...

**Paul Orlando:** We have one, it was called biosphere.

**Jerod Santo:** Oh, was that a Pauly Shore movie?

**Adam Stacoviak:** That was a movie, right? Biodome.

\[00:25:18.29\]

*The bio dome: a pure, self-contained environment where five scientists are about to be sealed off from every conceivable form of contamination... Except one.*

**Paul Orlando:** Yeah, Biodome -- that was probably one of his better movies... Which is really frightening.

**Jerod Santo:** Which isn't saying much. \[laughs\]

**Paul Orlando:** But that was actually based on the true story... I know, hard to believe. So they built it in, I think, the Arizona desert. The idea was to have a totally self-contained system, where - I forget how many people, like seven people entered it, or something...

**Jerod Santo:** How many walked out the other side?

**Paul Orlando:** No, they all left, but they really hated each other by then. They didn't actually speak to each other for several months, one group and another...

**Jerod Santo:** Wow...

**Paul Orlando:** \[00:26:08.04\] It was kind of an amazing experiment.

**Jerod Santo:** It's kind of like the real world. Remember that old MTV show, the real world? Only this is inside of a biodome.

**Paul Orlando:** Oh yeah, that's even more real.

**Jerod Santo:** That would have made good television.

**Paul Orlando:** Yeah, they'd still be doing it if that existed at the time.

**Jerod Santo:** Yeah, really.

**Paul Orlando:** Maybe somebody should pitch that.

**Jerod Santo:** That's actually kind of a cool idea.

**Paul Orlando:** But I mean, they did learn quite a lot. One thing they learned was having so many different environments was very impractical. That having a smaller number of environments was more practical for being able to try to maintain continuous ecosystems... Because they had to do a lot of maintenance. I mean, it was full-time maintenance work.

**Jerod Santo:** Right. Did they try to have a desert, and a forest, and...? Did they have all these different --

**Paul Orlando:** Yeah, it was like some '70s movie... It was Kumbaya, and "Hey, we're hippies in space." And then the reality is like "Yeah, but I mean, man, we've got to do weeding in space. All the plants are trying to grow, or dying, and the ones we don't want are taking over... And we're in space. What do we do now?"

**Jerod Santo:** Right...

**Paul Orlando:** But the worst thing about it though is they didn't keep going. They stopped. They did one run, they were like "Wow, that was really crazy", and they shut it down. They needed to keep doing that for 20-30 more years to really learn something as far as science. There's a big difference between R&D for scientists and R&D for businesses. Scientists, they go in and they do a bunch of research, they spend a bunch of time, they come back and they say "After spending my entire life, I've discovered that the answer to that question is no." And everyone's like "Oh, Nobel Prize. Amazing."

**Jerod Santo:** \[laughs\]

**Paul Orlando:** Now, you try to do that when you're working for some company; forget all your whole life's work. Two months later your boss's boss comes in "Oh, how's it going?" "Oh, I'm starting to think we can't do this." Like, "What?! This program's canceled. You're fired. Everyone."

**Jerod Santo:** Right,

**Paul Orlando:** If the answer was Yes - we were paying you to figure out how. This is not science.

**Jerod Santo:** That's one of the hard things about science and about research, is that there are certain incentives, where the capital comes from. There are certain tests and certain things that are never going to be funded in order to be run, and so you're not going to have -- you don't get credentials by failing... But not a failure. Like, proving a hypothesis is false is not a failure. But when it comes to getting more money, it seems like it is a failure. Nobody wants to say no.

**Paul Orlando:** This segues perfectly to the conversation about machine learning, I think, but... \[laughs\]

**Jerod Santo:** Let's do it. Let's do it. Take us there.

**Paul Orlando:** Just because yes, if your discovery is that something isn't going to work, this is an enormous contribution to the community knowledge of humankind... Because you figured out "Oh, let's try this other direction." But this is not something that's commercially exploitable, generally speaking, and we need quick results. And this is one of the big problems with fundamental research and for things like machine learning, and commercialization of things, which must be privatized now... Whether they work or not, we just need monthly recurring revenues. You've got to do whatever is going to take to get me there, and if you don't - again, you're quite fired.

**Jerod Santo:** Yeah.

**Paul Orlando:** But do not look at the man behind the curtain. And it's a classic case of Roy Amara. Roy Amara was the guy who said we have a tendency to overestimate the short-term benefits of technology, and underestimate the long-term ones. I'm gonna make an unpopular prediction... 90% of the companies that are trying to do machine learning will fail, and the reason they'll fail is because they won't actually produce anything of value whatsoever. Perhaps of negative value. The other 10% will survive, not because they're actually doing anything worthwhile, but because they'll figure out how to do something. And this is just --

**Jerod Santo:** \[00:30:06.26\] That's all part of the process, right?

**Paul Orlando:** Right, that's part of the process. It just gets distorted a bit by large sums of money. There is a great video... Every entrepreneur's putting "machine learning" in their investor deck, whether or not it makes sense.

**Jerod Santo:** For sure. Yeah. Every company is an AI company now, yeah.

**Paul Orlando:** And this is kind of throwing away the baby with the bathwater as far as, okay, a bunch of this is sort of nonsense... But that doesn't mean we shouldn't be trying to learn something from it. But with so much noise and so little signal, it makes it quite difficult to sort it out. I did a talk in Spanish called "That machine always lies." I haven't ever done it in English. Hopefully, I'll get the chance to do it at some point. But it was a take-off on that my brother always lies, the logic puzzle.

**Jerod Santo:** I don't know that.

**Paul Orlando:** So it's one of these --

**Jerod Santo:** Game theory things?

**Paul Orlando:** It's more of an example of exclusive or. So you are a traveler; in some versions of the story you're a soldier, trying to go home from the wars, others you're a traveling merchant... You come to a crossroads. And standing at the crossroads are two identical twins. So one of them -- there's a sign, it says, "One of these brothers only tells the truth, and the other one always lies."

**Jerod Santo:** Okay, this is ringing a bell.

**Paul Orlando:** You can only ask one question of one of them, and you have to figure out which way to go. So it's one of these classic logic puzzles that - I think it's been around since maybe the 1600s, or maybe longer... It probably was around longer, they just they never got around to writing it down.

**Jerod Santo:** What's the move? What are you supposed to do? How do you figure it out?

**Paul Orlando:** So think about it this way... One brother will always tell the truth, the other one will always lie. You're only allowed one question. The question is quite simple. "Which way would your brother tell me to go?", you asked one of them.

**Jerod Santo:** You ask the one that tells the truth, and then he --

**Paul Orlando:** It doesn't matter which one.

**Jerod Santo:** Both of them will give you -- right.

**Paul Orlando:** Exactly. So this way the one that always tells the truth will tell you about the lie of the brother who always lies. The one that will always lie will simply lie. So you go the opposite way of the way that either one of them tell you, and that's the correct way.

**Jerod Santo:** Couldn't you just ask the one that tells the truth "Which way should I go?"

**Paul Orlando:** You don't know which one is which.

**Jerod Santo:** Oh, you didn't say that one. Okay.

**Adam Stacoviak:** That's right. Well, because --

**Jerod Santo:** Did he say that part and I missed it? \[laughs\] That makes sense.

**Adam Stacoviak:** Well, no one thinks, I think, that logically the one who does tell the truth can overhear you asking the one who may or may not be the one who does tell the truth the question. So you can say, like he had said, because you can ask one of them, it's a 50/50 chance this person tells the truth. The other one is a 50/50 chance of being a liar, and they overhear it.

**Jerod Santo:** That's 100% chance if you ask that question.

**Paul Orlando:** Well, no, it's perfectly consistent in this example. Something like exclusive or. Maybe a better example would be Zeno's paradox.

**Adam Stacoviak:** Enlighten us.

**Paul Orlando:** Zeno's paradox is the oldest paradox I know of. So Zeno is from Crete. And Zeno says, "All Cretans (people from the island Crete) are liars." So now, here's the paradox. If he is telling the truth, and he is from Crete, then it is impossible that all of the people from Crete are liars, because he simply told you the truth. On the other hand, if he did not tell you the truth. So you see, this is known as Zeno's paradox, and we're just touching upon the paradoxes which exist in human thought. It's not perfectly rational. So how to encapsulate that and reduce it down to any form of quantitative calculation is something which we actually don't really know how to do. So calling it artificial intelligence is out of the gate "My brother always lies." That does not mean these things are not useful potentially, and that we should not learn from them. But pretty much everything you've been told is not actually true.

\[00:34:18.11\] And a great example of this -- I mean, let's say you have a company, and your company does some database sorting. Don't you want people to think like "This database sorting is so powerful that it could literally destroy human civilization as we know it. If you buy this database sort, index sorting, this query engine, it literally could destroy society as we know it." You as a CEO would be like "How do I get my hands on that thing? I want that baby." You wouldn't be like "Oh my God, we could do a database query that could destroy our entire planet." You'd think like "Man, I've gotta get that before the other guys." If you're selling this database engine, you literally want people to think it's as if you have nuclear fuel inside the database engine.

Now, just substitute machine learning for database engine, and I believe we have a pretty good view of the distance between hype and reality, and how that is a great marketing... Like, everybody wants to get this thing on their side, get it away from their competitor. And before we go into some other area... I think it's great to read the paper that really started the whole controversy from Timnit Gebru, the researcher at Google. The paper's named "On the danger of stochastic parrots." And I don't read a lot of academic papers; I'm not an academic. I'm on the technology side. I'm the person who's looking for other people's research to turn it into my development... Because I have to go to the money people and say "Yes, this is going to work. These people proved it." Not "Well, we don't know." So I'm looking for research that I can turn into something.

**Jerod Santo:** Yeah.

**Paul Orlando:** Because I'm a technologist. That's my thing. So I don't read a lot of academic papers, but I've read a few. This one's quite short... And as academic papers go, it's quite concise, and quite clear. And by the way, it's the paper that got her fired from Google, with much controversy. And this is before the whole Open AI thing came along and sucked all the oxygen out of the air as far as the conversation about machine learning... But I read this paper about maybe a year ago, a year and a half ago... And the first thing I thought was "Yeah, okay, cool." But the next I'm like "Wait, they got fired for this?" There's nothing in there which could possibly be objectionable. The ostensible reason was for lack of academic rigor.

**Jerod Santo:** Well, summarize its statement. What's the abstract?

**Paul Orlando:** Essentially, it was saying that these large language models - because that was the generative AI that the researchers were concerned with - they need to be looked at as far as what is the source of the training data, what are the implications for its use as far as on society as a whole, and on specific working groups, and people affected by it... And that we also need to look at the economic and carbon cost of the computation necessary to train and use of them. That was it. It just said "We need to look at these things." So nothing really controversial.

**Adam Stacoviak:** There was a bit more than that, based on using a large language model to discover what this paper might be about. It said "Environment impact, bias and fairness, misinformation, harm, lack of transparency, and economic and social impact." So it's a bit deeper than just simply environmental.

**Paul Orlando:** \[00:38:07.17\] Okay, I thought I summarized a few of those... But that's a good summary.

**Adam Stacoviak:** Yeah. I didn't summarize the summary. It's just, you mentioned just one part. That's why I was adding to.

**Paul Orlando:** My bad. But it was not saying "We should not do this because of these things." It was saying "We need to analyze on these axes. Here's a framework for analyzing the impact of this particular technology set."

**Adam Stacoviak:** Yeah, which I agree with. I think those are all fair.

**Paul Orlando:** There's nothing to disagree with. I've read this paper twice. First, just because I knew of it, and then the second time, just because I couldn't put my head around why this was such a big deal. But then it made me think... You know, it's very hard to get a person to understand the thing when their job depends on not understanding that thing.

**Adam Stacoviak:** Oh, yeah. "What are you talking about here? I don't know..." Exactly.

**Paul Orlando:** Right. "Nothing to see. Nothing to see here. Move along."

**Adam Stacoviak:** \[laughs\] Yeah.

**Paul Orlando:** And this is where the open source machine learning to me is such an important, genuine open source. So when Meta AI's Llama first leaked, I found it absolutely fascinating. Because first of all, these things don't leak. If you ever signed a nondisclosure with one of the really big companies... I mean, let's keep in mind that one time, one guy had an iPhone that he had at a bar, and literally the San Jose Police came with guns \[unintelligible 00:39:42.20\] dragged off to the jail, like this guy was some type of bioterrorist, right?

**Jerod Santo:** That was a big controversy, I remember that.

**Paul Orlando:** Right.

**Jerod Santo:** \[unintelligible 00:39:52.23\]

**Paul Orlando:** That's very extreme, but just dial it back only the tiniest little bit. There's more lawyers than they have people in your whole social network.

**Jerod Santo:** Yeah. Like 1,000 lawyers work there.

**Paul Orlando:** Right, exactly.

**Adam Stacoviak:** So there was something leaked, and somebody was -- I didn't hear about this story though. Something was leaked from Meta, and they were arrested?

**Paul Orlando:** No, no, no. I was using this as an example.

**Adam Stacoviak:** Okay, gotcha.

**Jerod Santo:** A Gizmodo deal back in the day where the person who worked at Apple took their iPhone to a bar, and the Gizmodo people got their hands on it...

**Adam Stacoviak:** Okay, gotcha.

**Jerod Santo:** ...he was saying that person was heavily-handled -- heavy-handed...

**Paul Orlando:** Right. But the big hyperscalers have not gotten more friendly and nice since then. So when Llama, the model first leaked -- ostensibly, it was given to some researchers on their specific agreements to not publish anything from it. Within 72 hours or something it was on torrents, and people were downloading it... And all of a sudden, it was everywhere. Now, I don't know anything, but it just seems to me, like, there is no human being brave enough to say "Oh yeah, no problem. They won't catch me with these watermark things." So I have a slightly different theory, which is a bit more... You know, when you're losing a game of chess, or you think you are, or poker or whatever, and you just flip over the board... Just like "Ah, we've got to start over." Right?

**Jerod Santo:** Yeah. Well, why would they leak it? So you're theorizing perhaps that Meta let it leak out on purpose. Couldn't they just release it though? Because why leak it when you could just release it? You get more goodwill by saying "Hey, this is --" I mean, that's what they're doing now.

**Paul Orlando:** Adam, you asked me about conspiracy theories. I'm trying to give you one here, man. Come on, I'm giving you what you asked for...

**Jerod Santo:** \[laughs\]

**Paul Orlando:** Plus, it's a PR thing. I mean, you're losing the mindshare. I mean, these are a bunch of really serious researchers who've done a lot of good work over like many, many years. These are not just randos like myself. These are actual people, who know things.

**Adam Stacoviak:** \[00:42:06.15\] "Actual people..." \[laughter\]

**Paul Orlando:** And all of a sudden, everyone's like "Oh, Open AI, Open AI..." And if you're on that team, you're probably not too happy about this.

**Jerod Santo:** Sure.

**Paul Orlando:** I mean, research is very competitive. Whether it should be or it should not be is -- I'm not an actual researcher.

**Jerod Santo:** Sure. So Llama leaks out, potentially on purpose, but...

**Paul Orlando:** So Llama leaks out, and that really sets off the Cambrian explosion of suddenly new things popping up day after day after day. People take this model and quantize it, and then Alpaca is a smaller, lighter version of Llama... And then - I mean, every two days something new is coming out. So one guy, just on the internet, says "I wonder if I could run this on my MacBook M1." And like any of us, he decided to devote his weekend to it. Sure enough, kind of got something to work. Because usually you'd be like "Oh, I'm gonna stand up some type of cluster of machines, with a bunch of GPUs." You know, it's a big person's game, with lots of hard-earned money to throw at it... So this person's like "No, actually, I could run this on my laptop." Gets it to work. All of a sudden, it changes the game yet again. So "I made a few early contributions to that project, just because this is very near and dear to my heart. Take the fire and give it to all the humans, and damn the consequences, because if we don't, it's going to be so much worse than if we do."

Now, I'm no Prometheus, I'm gonna be running like hell. Plus, I wasn't the one that actually stole the fire initially. I just passed it out to a couple people along the way. Don't blame me.

**Jerod Santo:** Yeah, you're just the distributor.

**Paul Orlando:** I'm just the of the crew, man... \[laughter\] You want the big boss over there. But I mean, it really is setting off -- it was the beginning of a whole... You know, now there's oh so many, and there's so many things happening in so many areas... And the vast majority of the interesting work is happening in the open. And I think this is a very good thing, because it means that the means of computation -- seize the means of computation, as Cory Doctorow says. I don't think it's good to, on the one hand, limit this to only big companies that have the money to do something with it, or on the other to have governments that are regulating it in the way that favor those big companies to the exclusion of independent and interesting and innovative things that are happening out here at the ground level.

**Break**: \[00:44:45.02\]

**Jerod Santo:** What do you think about Meta's newfound open-ish worldview that Zuckerberg talks about a lot? You have Llama 3 now also open... They're calling it open source. I'm not necessarily saying comment on the open source definition and all that, but then you also have their embracement of the Fediverse, with Threads, you have the new Horizon OS which runs their Meta Quest VR... They say that they're going to open that up. I don't think they're going to actually open-source it, but they're allowing other people to build stuff with it... So there's kind of this - it seems like newfound open-ish strategy coming out of Meta. Do you have thoughts on that? Do you think that's good, bad, side-eye? What do you think about it?

**Paul Orlando:** Well, I mean, I can't really comment specifically on Meta's particular take, just because I don't know anyone there... But I think it's part of a larger trend, saying "Oh, the end of corporate open source." I think we're nowhere near the end of corporate open source. But we need to compare open source as an asset category -- I mean, Meta throwing money at open source is because they're looking for relevance in the world that they're losing relevance in. I think this is very similar to what Google's doing, in a lot of ways, struggling to try to figure out "Oh, how do we keep our revenues going? What's the next thing?" But I don't think they know what that is. I think that open source is a strategy now, because it's a way to try to win the hearts and minds of people, and to have them invest their time and their energy. But they also think that the rug pull is kind of the number one strategy in corporate open source now, private equity open source...

**Jerod Santo:** Which is not a good strategy, right? I mean, that's --

**Paul Orlando:** No, I think it's a very bad strategy.

**Jerod Santo:** ...damaging.

**Paul Orlando:** I think if you say it upfront, "Look, we're a business, we're in here to make money. This is the line. This is the free part. This is the paid part. Join us if you like that, if not, don't." You know the rules getting in, you could decide "Do I want to play or not?" These are the table stakes.

Changing the rules partway - it's very much Darth Vader telling Lando Calrissian. \[unintelligible 00:50:21.15\] This is like "You should have had your plan to get out of Cloud City a while ago."

**Jerod Santo:** \[laughs\] Yeah.

**Paul Orlando:** When they first arrived, you should have been like "Yeah, yeah. The meeting is when? Oh yeah, I'll be there. I'll be there", and you're like "Okay, we're out." Don't even take the meeting; run for your lives. And I'm not judging anybody, because the money changes them. If I had a bunch of money, then I'd be changed, too. You'd be like "Oh, man, that guy Ron used to be so cool. Wow." I feel like the Grateful Dead... When they were asked "Aren't you selling out?", they're like "We've been trying to sell out for years, it was just no one was buying."

**Jerod Santo:** No one was buying... \[laughs\]

**Paul Orlando:** But then I think it's the change of the rules of the game midway. Or not even midway, late in the day. But also, let's define some new categories. Corporate open source actually now is either directly -- like a project that's a pet project of one of the hyperscalars, or it's one of the big Linux Foundation type groups, where it's basically not something you get to join as an individual. Like "Hey, can I get in the club?" "Uhm, yeah, sure. You've just got to pay our annual dues of this many bazillion credits, and you're in. No problem."

**Jerod Santo:** Right. Right.

**Paul Orlando:** So I mean, that's a way of making sure that it's sort of a cartel; like, they control the narrative in a way that doesn't generally threaten anything... Just because something generally new and open source that destabilizes a bunch of existing companies is quite dangerous to them, and they don't want that to happen without some way to control it. I mean, it's just a way to perform your fiduciary responsibility to your shareholders.

**Jerod Santo:** \[00:52:11.11\] Sure.

**Paul Orlando:** Buy that company, and make them go away.

**Jerod Santo:** How does Hybrid Group do it? Because you guys fund a bunch of stuff. I mean, TinyGo, Meccanoid, GoBot... I mean, Hybrid Group is your company, right? And these are legit open source. These aren't rug pulls, are they? Are you still waiting to pull the rug out, or...?

**Paul Orlando:** Oh, man... Yeah, no...

**Jerod Santo:** \[laughs\]

**Paul Orlando:** I have a slightly different attitude... But I'll get to that in one second, because I want to talk about the second kind. So you've corporate open source, then we have we call private equity open source... Private equity open source is what happens when a company gets bought by a big company, and then their whole purpose is to basically extract all the value out of it with whatever's left. There are some big companies that do this; you probably have seen them. Some of them, their strategy is go after mid-cap companies, buy them... This has happened to a number of companies. Travis was a particularly sad example, just because a lot of us depended on Travis CI.

**Adam Stacoviak:** Yeah. CodeShip was that, too.

**Paul Orlando:** They got bought by private equity, and then squeezed all the juice out. I would say IBM's strategy, with what happened with Red Hat, was very much an example of that same sort of "Let's just get all that we can out of whatever we've got in this company left." And again, I don't judge these people.

**Adam Stacoviak:** Well, even in Red Hat's case, could they continue as a private company that builds on top of their open source? What is the next big move? What is the exit for that kind of company? It really is either remain independent, IPO if that's possible for them - which it totally is, and they did - or get purchased by the next bigger behemoth, which obviously would be like a Google, an IBM, or a Microsoft, or an Apple. And then even HashiCorp, where their purchase from IBM was similar. Like, there's Linux infrastructure, there's TerraForm infrastructure - which was actually called TerraForm. Basically, the whole purchase was for what happened with TerraForm, the relicensing. We talked about that a bit with OpenTofu, and... We actually missed the ball. We talked with Adam Jacob the morning of the afternoon's announcement. So we talked at like 10 o'clock, Jerod, AM, our time, Central? And then like an hour or two later, after the conversation - we've laid it all down, we've put it on tape, and the announcement of the acquisition... Well, hints of the acquisition was talked about, and then the solidification of it was, I believe, the very next day. We missed that ball. But yeah, I mean, that's what's happening. You've got core infrastructure like Red Hat, which was essentially the definition of open source Enterprise Linux, and everything that open source Enterprise Linux built upon, extracted.

**Paul Orlando:** Yeah. It sort of indicates -- the general pattern for these companies when it's closed source, and it's mid-cap companies acquired by PE, it generally means the game is over; now it's just cut it up for parts, and get as much as they can. And that just means it's kind of over. Like, the dream has ended, and I think - is that the case with HashiCorp? I don't know the answer to that. But it is interesting. If the cycle of time -- like, the time it takes from founding of a major important piece of open source that is relied upon as key infrastructure, the time of creation to the time where it's basically like -- it's not leaving, nor is it going anywhere; like, it's not going to expand, nor is it going to contract easily, so now it's just like squeeze the value out... We see this with a lot of other private equity investments, into other categories, and looking at open source as an asset category is somewhat interesting. It's hard to evaluate exactly. There's a lot more value created by open source than captured. Right? And that's a good thing. That makes it a public good. It doesn't cost me anything for you to use my open source. It costs me something to create it.

\[00:56:26.23\] So this goes kind of to the third model. So we've got the corporate open source model, we've got the PE open source, which is like "Okay, rug pull, extract the value, damn the torpedoes." Obviously, there's little tiny individuals... But then there's this other category, which I like to think of as the volunteer fire department model of open source, or the federation of open source. So what is this? If you are doing something with open source that benefits you, and I am doing something with that same open source that benefits me, and our interests are aligned, then we'll work on it together. Like, we're going on an adventure; we're in the same dungeon party, because we're trying to do the same basic thing. And TinyGo is a great example of -- you know, TinyGo is a Go compiler written in Go, licensed with the same BSD license that Go is, on purpose, because the idea is that nobody really owns TinyGo. And nobody really can. The idea's that you use TinyGo to make something of value; use it to build your business. Take TinyGo, use it, make money, be successful, and contribute back. Put in time, put in money... We haven't had as much of that. But people are very welcome to hire Hybrid Group to help them, or - you know, we're probably going to introduce some paid support offerings; not as an exclusive thing... I mean, I'd like to see a dozen consultancies that have consulting practices based specifically around TinyGo implementation. Not just, "Oh, come to Hybrid Group for these things." Because it's about letting 1,000 flowers bloom, and it's also about -- like, if you look at the people who actually work on TinyGo as their full-time activity - for example, there's some people at Fastly. Damian Gryski and Dan Kegel in particular, who - why are they doing that? Because Fastly's compute platform, which is a WebAssembly system interface running WebAssembly in the cloud - it's really a cornerstone of their technology platform that they charge customers for. So it's in their interest to put people to work on TinyGo, because it benefits them. We don't need a foundation; it's more of a federation of like-minded interests, and it's a model that is a bit more sustainable, only because - let's say that tomorrow I decide "I don't want to do TinyGo anymore", which, I want to keep doing TinyGo, by the way...

**Adam Stacoviak:** This is just hypothetical.

**Paul Orlando:** Or I just decide "That's it, delete all the repos." It'd be the same as OpenTofu. You know, the internet is designed to route around blockages. And no human institution lasts forever, since they're made of people. No one's perfectly incorruptible. Some people get tired, they have to retire, do something else, do a paid job, whatever. The purpose is to make it so that these things are as anti-fragile as possible, so that they can withstand whatever changes occur, and the core idea can keep moving on if it's a real value. But the only way to make this work is to be like the Wu Tang Clan, where each one of the members of the clan can go do their own recording, sign to a different record label, get whatever deal they can to get paid... They don't have to go through this centralized hierarchy, "Oh, everyone's got a--"

\[01:00:05.09\] Generally speaking, if you and I have a band, and we've recorded, and we would go to some record label... So we would sign a record deal. And then if we had a side band, we would have to sign with the same record label with that other band. We couldn't just go and do our own thing. Oh, no, no, no. If we just did a side project of just recording some music on the film, they would want a piece of that as well.

The Wu Tang Clan's big innovation to the music industry, in part, was anybody who's in the crew can go and sign with whatever record label they want, you can bring in whatever guest star it is you want, you can do whatever deal you want, do any deal you can. And this is sort of the same thinking that we have with the TinyGo crew. Anybody is free to go and take TinyGo and use it to make something of value and to make money. And that's how it's able to be sustained, is because then those same companies and people put time back into it.

So it's a little different than the swing for the fences VC mentality. Why we haven't taken investors - we're happy to take grants, where you give money and we don't promise you anything, and we don't have to give it back.

**Adam Stacoviak:** Yeah.

**Paul Orlando:** But we're not looking -- TinyGo itself is not a thing that... You can only invest in it by actually rolling up your sleeves and doing the hard work, or paying the people to do it.

**Adam Stacoviak:** Yeah. It's like the opposite of death by 1,000 paper cuts; its success by 1,000 innovations. I guess the question, though, in that scenario is "Is there a BDFL?" How is stewardship operated, how are contributions accepted when you have corporate partners, or lack thereof - just participants, let's say, from Fastly, as the example you mentioned; they have an interest to advance TinyGo. I would say probably advance it in their best interests as well. How are contributions and innovations and features added? Or how are they approved of? What's the process to govern contribution, or to veto a contribution? What's the mechanisms there?

**Paul Orlando:** It's highly informal. Part of that is because I've seen a lot of obsession with governance, that has taken a lot of time and energy and not really yielded substantial benefits. They still had massive drama, and they forked the project, and went off on their own, and everyone hated each other and was all mad. And they had all kinds of governance documents. We can't get around, nor do we wish to get around the fact that open source collaboration is first to human activity, and only second does it have to do with code and technology. It really has to do with the attitude about how you wish to approach it. I think of it -- you know, because the big dictator implies a certain centralized command and control, which has worked really well for certain projects... Sometimes despite that, not because of, I think.

**Adam Stacoviak:** Yeah.

**Paul Orlando:** I look at it more like I'm the park ranger, the game warden, the curator of the museum, not the owner of the park, not the owner of the museum. Because it belongs to everyone. I'm just the steward of it to try to -- like me, personally, that's my attitude.

**Adam Stacoviak:** Yeah.

**Paul Orlando:** And there's always the opportunities, if somebody genuinely is like "We want to take it in this way", there's not a consensus for doing that; we're taking it in our own way. They should do that, that's not a bad thing. Like, we don't have to all -- if we reach a fork in the road, it's not two brothers. This time, it's actually a business decision about something or another.

\[01:04:08.10\] And I mean, TinyGo has grown into a very big thing in WebAssembly. It wasn't originally created to do that. That was an emergent property of the ecosystem. And one I'm very glad for, and I'm very involved with now myself. But the original vision with TinyGo was very specifically for small embedded devices, and bringing Go to the microcontroller. And then it just so happened "Oh, we could actually compile this to WebAssembly." There was some very nascent support in GigGo for WebAssembly at the time, and that's something that the LLVM toolchain that TinyGo was based on - not BigGo, but that TinyGo is based on. So it's like "Oh, this would be a cool feature to add. We should do that. No real specific, more just like "Oh, it's like a low-hanging fruit. Some people seem really interested in this. We should do it." Next thing you know, "Oh, wow... TinyGo is so much better for WebAssembly than BigGo." And we're like "Wow, it is? How interesting! Why is it better? What does it do?" Like, we didn't even know ourselves some of it. We were just genuinely interested. It was an emergent property of the community, of a problem that they wanted to solve, that BigGo was not solving for them... So a bunch of people started devoting time and energy to improving that Web Assembly support in TinyGo. And then the Web Assembly system interface, which is Web Assembly on servers, and serverless... The Web Assembly not in the browser. You know, part of the fact that we were interested in it ourselves, that also we move a lot faster than BigGo. We can. We can innovate a lot more quickly. We haven't given a 1.0 guarantee yet, so we can change things... We're not -- even though largely, I would say the Road to 1.0 for TinyGo is more about the hardware interfaces than it is about compatibility with Go itself. Because we've had pretty good compatibility for a while. But it was very much an emergent property of the community.

And as more and more of us said "Oh, wow, WebAssembly... That's really a very interesting thing. We have some problems we wanna solve with that", and Go being a really good language, for whatever, that this has been an aspect of TinyGo which was not something that was part of any master plan. It's something that the community wanted, that the community is, and does, and is not at all -- there's no need for it to be a zero-sum game. Oh, it can either be for embedded or it can be for Web Assembly, or it could be for Linux, or for Windows, or for macOS - that's a false dichotomy. It could be for whatever we collectively want it to be for. But again, with that sort of curation in mind - like, you can share the park, but you can't just like go in and start digging it up to build your own little thing, when that's disturbing the flora and fauna of the ecosystem. And so that's in a compassionate, kind way... But also looking at like the why. Why is this person asking for this thing? Usually, it's because they either have some need, or they can't figure out how to get the thing you have right now to do the thing that they want. Either way, that's kind of on you. If it's a need they could solve some other way, you could recommend that. If it's a thing that your software doesn't do yet, but that it could, you could mention that, and say "Oh, maybe you can help." Sometimes they're like "Oh, I don't know enough programming." Yeah, but they already took the project in a better direction just by saying "Hmm, here's this thing that somebody might need."

\[01:08:19.28\] WebAssembly again - a really great example. There's a lot of people who are very involved in blockchain applications. I'm not really one of them. I don't judge people for what they choose to do with their computational power. My currency is render graphics, play games, churn through large language models... This is on you, not on me. I'm just trying to create technologies that are useful.

So there's a bunch of people who are using TinyGo specifically because they wanted to use Web Assembly as part of their engine for doing their processing... And so they were looking for basically what we call Web Assembly unknown, Wasm unknown, which is sort of a naked Web Assembly. It's web assembly with no expectations of what the running environment would be.

So for the listener, if you haven't checked out WebAssembly, first of all, do. There's lots of interesting things happening. You can run it in your browser, you can run it on serverless applications like fermion spin, you could use it to build plugins for your current software, like Extism, or you could use it to actually run on microcontrollers and embedded devices with TinyGo and Meccanoid. So there's all sorts of different, interesting areas to do this in.

So this group of blockchain enthusiasts said "We really want to run TinyGo with Wasm, with no external dependencies." And the people who are doing Wasi are like "Oh, that doesn't sound very useful", just because it doesn't have any ability to call any specific thing. And these folks were like "Oh, that's okay. We don't care. We have our own APIs." So it took a while before it actually turned into something which landed in TinyGo, just because it had to build a little bit of a critical mass. Just one person wants it, just one or two, they're not willing to do any programming work on it, but they'd like to have this feature... Okay, that's a signal of intent. There's maybe other people. Is it useful for other things as well? Well, yes, as it turns out. That same pattern of Wasm unknown is exactly the pattern that's being used for Meccanoid, for running WebAssembly on embedded devices, like microcontrollers.

So if it was not for the blockchain community sort of priming the pump of starting to think about this, then those of us who are actually interested in using that same pattern for something completely different would not have maybe worked on it and adding it to TinyGo. So again, the community is defining what the thing is, because the purpose of TinyGo is to serve the community's needs. It's a means to their ends, whatever those happen to be.

**Jerod Santo:** I really liked this Wu Tang Clan analogy, and I'm over here, just reminiscing on Wu Tang...

**Paul Orlando:** And you can still record the desk that only one person has, that's like $6 million or something...

**Adam Stacoviak:** Yeah.

**Paul Orlando:** And you could use TinyGo to do it.

**Jerod Santo:** That'd be cool... Have you written down this Wu Tang Clan form of open source, and like promote it as an idea?

**Paul Orlando:** I'm sure I read it somewhere.

**Jerod Santo:** Okay, so someone else is doing this. Are there certain projects - obviously TinyGo being one of them - that lend themselves well to this form? Or do you think this is something that almost every open source project could adopt as a way that they go about doing things? ...like "Well, we're gonna do the Wu Tang Clan thing? We're going to be a loosely affiliated group of people who all have similar ideals, and want to collaborate, and do awesome stuff, and may make some money, like Wu Tang."

**Paul Orlando:** Well, first of all, you know, you've gotta have some flow. I mean... \[laughter\]

**Jerod Santo:** Okay, well said.

**Paul Orlando:** Most likely you don't, okay? I mean, you know... Like, not every one of my songs was actually any good. Luckily, I didn't play it for too many people. They were like "Oh, wow. That's a really bad idea." I'm like "Oh, yeah? Cool..."

**Jerod Santo:** \[01:12:12.17\] \[laughs\] Sure.

**Paul Orlando:** But it comes to like the thing that it is... Like, you're not gonna make money off your programming language, man. I'm sorry, okay? You're probably not. It's just not going to happen.

**Jerod Santo:** You're killing my dream right now, Ron. You're killing my dream.

**Paul Orlando:** I know. All these people are like "I'm gonna make my own language, and I'm gonna be retired, with a mansion and a yacht." It's like, "No, you're probably gonna make -- not only are you not gonna make any money, it's gonna cost you a great deal of money just to even do this thing." Now, lots of money is made off of programming languages, but it's not the language.

**Jerod Santo:** Not selling the language, yeah.

**Paul Orlando:** Like, nobody's going like "Oh yeah, we sold Python." No, it's like "Yeah, we made this thing with Python, and we sold it for a bunch of money, and..." Well, Python's really cool. I mean, pick a language: Go, Rust... Any language. The money is not there. The value creation is. It's creating enormous value. I mean, probably it's the most... I mean, I will take a giant leap and say the single most valuable asset on Earth, which is consistently undervalued, is the collective all of open source. Like, how much is that worth? It is worth a lot. I know there was a study some university did, trying to figure out "Okay, if there was no open source, how much would it cost to write it all?" It was like a bunch of trillions. Not to mention like "Okay, we'd better get started, because we've got -- okay, we've got a $3 trillion budget, but how are we going to spend it? Like, it took years. It's not like we're gonna like "Okay, we know exactly what to do now." Right? So it's an emergent phenomenon.

So that does not mean that there's not ways to do it. But I think it's not -- like, a project which is clearly part of core infrastructure for a bunch of companies is that they're not planning on selling the cloud-enabled version of themselves in order to make money... Because that's a lot of -- oh, yeah, it's this cool server that does some thing. You can work on it, and you can stand it up yourself... Or you can use our cloud service. And then the next week somebody's like "Oh yeah, we could stand up a cloud service." And they already told people like "Wait, no, not like that...!"

**Jerod Santo:** Yeah, yeah, exactly.

**Paul Orlando:** I think about it more like "Hey, if they could do the same thing we're doing, but cheaper, we should just buy it from them and resell it ourselves if we're trying to make money." You have to think about - do you care about it being from you? Do you care about it existing? Or are you trying to use it to make a living? There may be some overlap in those things, but it's not -- this is not a strategy that's going to work for every open source project, especially if it's a thing where the cloud-enabled version is the thing you're going to sell... Unless you're perfectly cool with the fact that your own direct competitors are your collaborators in the project.

Now, if you've got some secret sauce that you can add, that you think is gonna make it better, but that can't be copied... Like, "Oh, our UI is so much further." Well, yeah, they can look at your UI, like "Oh, we should do that." Like, okay, that's not enough. Like, you have to have some differentiator. Either that, or it needs to be very verticalized, like it's for a particular industry. Go for industrial computing. Go for automotive. Go for entertainment. Go for whatever -- like, verticalized, as opposed to horizontalized.

**Adam Stacoviak:** I was gonna let him keep going. Like, how many can you come up with here? Go for what.

**Paul Orlando:** Oh, I can keep going. I've got a pitch deck, too.

**Jerod Santo:** I'm trying to think of what Go for entertainment looks like, you know?

**Paul Orlando:** Uh-oh, I might've said too much.

**Jerod Santo:** \[laughs\] Well, we did not sign a nondisclosure agreement, Ron, so...

**Paul Orlando:** \[01:15:58.28\] Yeah, no, I don't sign -- I mean, I'll sign them if pressed, but I've never asked anyone else to sign them. Like, I respect the customs of others, so I'll be like "Yeah, I'll sign your NDA." But I wouldn't ask me to sign mine. I'm like "Are you kidding?" If hearing my idea's enough to just go do it, please hire me. \[laughs\]

**Adam Stacoviak:** Right, right.

**Jerod Santo:** I think it'd be funny to have an NDA, and then come on a podcast to talk about stuff, you know?

**Paul Orlando:** Well, yeah, that's also quite hilarious. Like, come on...

**Jerod Santo:** "Please don't share this with anybody." It's literally the point.

**Paul Orlando:** Exactly. Like, they're missing -- but again, it's more opportunistic using like "Oh, open source. Yeah, we're gonna totally wrap ourselves in the open source flag." It's like, there is none. Like, "Yeah, we just want to talk to like the open source community." Like, there's no single open source community; there's many. In fact, one could splinter into two, or three, or ten, at any point. I mean, you actually can't -- it's an algorithm, it's not a formula. You don't just substitute the numbers and out comes open source at the other end. You turn the crank, and you don't really know what's gonna happen. Anything could happen at any point. It could be magic, or it could just be like we spent a bunch of time to -- we redid the wheel, but our wheel is square, and made of wood. And then all of a sudden, one day we saw round, rubber wheels and we're like "Hey, our project is now archived..." \[laughter\]

**Jerod Santo:** Exactly. No longer maintained.

**Paul Orlando:** Right. "That's it. We're done. Thank you. Thank you, good night."

**Jerod Santo:** Sometimes that's a relief, you know? Sometimes that's a relief. You're like "Oh, a better way. Cool. We can just stop this maintenance process", you know?

**Paul Orlando:** Well, again, it's like, do you want the ego gratification of "Oh, my name's on it"? Or do you want to solve the actual problem, and do something else? Actually, Dr. Nick Williams, he was a person who really instructed me... He gave a talk about this, about retiring open s-- this was many years ago, back when we were all involved in Ruby. I think he's still in Ruby. I still love Ruby, but I haven't actually used it in years. But hugs and kisses to everyone at Ruby, because I think it's a really cool language, and a cool world. He did a talk, and he was mentioning about letting go of projects. And his metaphor was "My kids-", he has a bunch of kids, "I don't just have them living at home forever. I mean, eventually, they have to leave. And either they go off and they do their thing, or whatever." I was like "Whatever?" You know... \[laughs\] But maybe the kids metaphor - that was too extreme. But it was more that, you know, you don't have to maintain the project forever. Either other people will rise to the occasion, or the thing will be replaced by something else... But it's not on you. Like, there's nobody -- and if there's something generally better that you could actually use yourself to solve the problem you started out to use... Well, you learned something, and it was cool, and now - yeah, move on to the next thing; jump on another project and help them.

**Jerod Santo:** Yeah.

**Paul Orlando:** Some of the contributions I'm most proud of are a single pull request I made on someone else's project, where I was able to solve a problem... And I'm really proud of a project that I maintain, GoCV, which is the Go wrappers around OpenCV, for the same reason that there's a lot of people who've made one pull request. It was missing one thing, and they were able to figure out how to find that thing was missing, what they had to do to add it, and it was successfully added. And their problem was solved, and they moved on, because they were trying to do a thing, not be an open source contributor. They were just trying -- to me, that's a massive success as a collective. We've made it possible for you to solve your problem, and to help the next person along the way. And yeah, it took a lot of work to do that. It's much easier to just do things directly.

**Jerod Santo:** Yeah. Right.

**Paul Orlando:** But you have to be in the long game if you want to create this sort of sustainable... You know, maybe I'll call it sustainable open source. It's what VCs would call a lifestyle open source.

**Jerod Santo:** \[laughs\]

**Paul Orlando:** \[01:20:01.15\] And for them it's like an insult.

**Jerod Santo:** Yeah, that's an insult.

**Paul Orlando:** For me that's like "Okay, cool. That means -- maybe I want to be in, because I don't want to shoot for the stars and crash into a mountain. I don't want to actually crash." Plus, we can actually get up that mountain so many other ways that don't involve rocket fuel, and half destroying the village that the other half of the rocket lands on... Like, we could just hike up there, and with our camera, and get the shot, and we're done.

**Jerod Santo:** Well, VCs are fundamentally about the moonshots. They're trying to ride the rocket ship, and then have an exit before it blows up. I mean, they're not about a sustainable lifestyle. So of course, for them lifestyle - that's an insult, like you say. But for open source maintainers, it's all that we have, because the rocket ship - I mean, you've gotta rug pull to get your rocket ship, right? I mean, some people started in open source and made money in addition to it, but not I don't think because of it. But for most of us, we're just trying to --

**Paul Orlando:** You make money off of the thing you make with it, not off of the thing itself.

**Jerod Santo:** Right. We're trying to get some stuff done, we're trying to run a business, we're trying to help people write software... And we are collaborating on the parts that we can. And that's a lifestyle. Like, you want to keep doing that... Ron, you've been doing it a long time. I guess Adam and I have as well, at this point. We don't want to crash in the side of the mountain.

**Adam Stacoviak:** Not on purpose.

**Jerod Santo:** And we don't want anybody to. I don't want the person who maintains the dependency that I have, that we run our business off of - we don't want that person to leave the internet and give up, and be gone. We'd love for that person to thrive and sustain, and be able to maintain that project of theirs, and we'll help them if we can, you know?

**Paul Orlando:** Or even hang it up. Like, that's okay, too. Like, thank you for your service. You've done a lot, you got us this far. We'll take it from here. You know what I mean? That's -- I really respect and admire the people who know when to do that... And usually, we don't as a community -- we don't have the sensitivity. A lot of people don't have the -- we don't talk about mental well being. I don't wanna say mental health, because mental health sounds like illness. I'm gonna use the term well being, only because it makes it sound more like that sustainable. Mental illness - "Okay, you're better now. Back to the salt mines." Versus well being, like "I'm sorry to inform you, I'll be unable to come to work this week, because I'm feeling too well. I'm feeling too good this week to come to work."

**Jerod Santo:** That sounds like a good one, yeah.

**Paul Orlando:** Not like "What?!" If we were athletes, we would have like personal trainers, and team physicians, and they'd be like "Oh, you know..."

**Jerod Santo:** Dietary...

**Paul Orlando:** Right. So we're doing Olympic-level cognition, and it's like "Here's a coffee and a doughnut. Go! What, feeling burnout? No, you'll be fine. We've just got to make it through this next sprint." You don't want to talk about it...

**Jerod Santo:** A 6-pack of Mountain Dew, stay in the basement.

**Paul Orlando:** Right. And you don't want to talk about "Oh, I'm feeling stressed", because that's you as a professional athlete saying, "Yeah, I'm not sure about my ankle." Like "Oh yeah, we're not sure about your contract then... Good luck selling cars." I was a hero last week, and this week I literally have no job... This is I think, in people's minds, and I think it's in their minds for good reason. Because saying "Oh, don't worry, the industry will take care of you." No, the industry will fire you in a heartbeat. Just because a bunch of investors said "We have to let go of 7%." "Why 7%?" "Because everyone's doing 7%. Because 7%." \[unintelligible 01:23:34.28\] It's what plants crave.

**Jerod Santo:** \[laughs\]

**Paul Orlando:** \[01:23:42.04\] And you're like "No, it can't be a documentary from the future", but I'm afraid it is. So yeah, don't tell your boss about you're not feeling good, because it's too risky. This is what I think is on a lot of people's minds. And I can't tell them "That's not true. Don't worry", because I think circumstances have shown that maybe isn't necessarily true.

So what do we need to do? We need to find mutual support. You have to have peers that you can communicate these things to, and we have to build a vocabulary around it in order to, first of all, not tell the suits what's going on... Because they're gonna be like all freaked out. Like, "You're trying to tell me my star player can't play?" Like, "No, no, don't worry. Don't worry." Like, they're worried, because they don't even know, is this a soccer ball? A football? Like, "Well, actually, that's the same thing, sir, in this country."

So this is a fundamental dichotomy between the creators, many of us who -- we like to create. We're going to create. We want to be of use. That's our purpose for being. And yeah, we need to thrive and survive, but we're not doing it for the sole purpose of exploitation. We're doing it because we get satisfaction out of improving the human conditions. And we're human, so we can be improved along the way, right? We're not just a resource to be exploited... Just like "The brain machine, it's \[unintelligible 01:25:15.02\] Oh, I'll get some more brains."

**Jerod Santo:** \[laughs\]

**Paul Orlando:** How many times have you heard literally something that is the equivalent of that in management meetings? I've heard that a lot over the course of my career, and I don't generally try to single it out, because that's not very effective. But it is a thing that -- I mean, anyone who's feeling extreme burnout, definitely do seek help outside of your workplace. There are people that you can talk to about mental well being. And we as a technology profession need to be able to talk about this in a way that doesn't threaten our employment. So that's my hot take.

**Jerod Santo:** Yeah, well said.

**Paul Orlando:** I've been through times in the past where I had all those feelings. And I don't tell people, usually... I'm telling everyone in the world on this podcast, because I think it's important that we talk about it... And it's been a long time since I had that feeling. Because I learned to recognize the signs. Because I did seek some professional assistance to figure out what was it that I -- what was wrong with me, and what could I do about it to be healthier and happier and better for it? So I'm a resource, reach out to me privately if you need to, fellow human. I care.

So that's what keeps me doing it... Just because I'm an idealist, and I think "Alright, in the end this is going to be better than all the other alternatives", which is closeness, which is, you know, how much I can get just for me... And maybe sugarcoat it with some philanthropy. But when the act itself is a form of philanthropy, then it's a sustainable way to live. And ultimately, what is the technology for? I think we were talking about this the last time we were in Portland, at OSCON, actually.

**Jerod Santo:** Yeah. 2019.

**Paul Orlando:** Yeah. It was "The purpose of technology is to improve the human condition."

**Jerod Santo:** Yup.

**Paul Orlando:** So that's what keeps me going.

**Break**: \[01:27:30.05\]

**Jerod Santo:** Before I let you go, I would be remiss not to bring up one of my favorite Go Times of all time. I want the director's commentary... You actually called into Go Time from the future... I'm sure you remember this.

**Paul Orlando:** Well, that hasn't happened yet.

**Jerod Santo:** That episode was called "2053..."

**Paul Orlando:** I saw that episode, and I was like "This is crazy. Who is this guy? This guy looks just like me." But...

**Jerod Santo:** You were from the future, you were calling Mat Ryer and Natalie Pistunovich to tell them all about the future of Go.

\[01:28:04.23\]

**Paul Orlando:** Well, this is the reason why I’m making this call. I’m using all of the battery energy that I’ve saved for several years in order to make this transmission, to send you a warning from the future. You see, I am the last Go programmer alive in 2053.

**Natalie Pistunovich:** Whaat?! No, don’t say that…

**Paul Orlando:** And it’s terrible. All I do is maintenance programming. I haven’t added a new feature in over 20 years.

**Jerod Santo:** Can you give me the director's commentary? This whole thing was your idea. I think you pitched it to Matt or somebody, and you actually had this cool setup where you looked like you were calling in from the future, and everything else... And I just produced the episode. I had no part of the planning. I would love to hear, where did you come up with that, and why did you do it?

**Paul Orlando:** Alright, director's commentary. So Matt sends me a message, "Hey, do you want to come on Go Time today?" Or it was tomorrow maybe. I don't know. It's like your typical "Oh man, we're out of guests."

**Jerod Santo:** Yeah, great planning...

**Paul Orlando:** Like, "Geez, who could I think of who's like always available?", you know... \[laughter\] And the idea originally was "What if we were the product managers of Go in the future?" Kind of a meh idea; not that great. I mean, it was an idea... Well, so I'm like "Alright, hmm... Alright, I'm gonna go over to the studio." I have a collaborative workplace called \[unintelligible 01:29:29.29\] which is where the local creative technology community get together. It's not a co-working, it's more like a collaborative space. Really amazing spot. A lot of cool things happening. So we have a studio there that's set up for music recording, for streaming... All my \[unintelligible 01:29:52.08\]

So I'm driving over and all of a sudden it hits me. I'm like "Oh, I know what I need to do." It was just -- you know, I don't spend a lot of time alone. When you leave me alone for a few minutes, it's really dangerous. I start thinking. By the time I get to my destination, who knows what's coming on? So I call my collaborators over at the studio, I'm like "Look, I'm doing this thing... It's a streaming from the future. I need some lasers, and... Do you have any tinfoil?"

**Jerod Santo:** \[laughs\] Yes...

**Paul Orlando:** Now, you have to understand, we've collaborated a lot together... And \[unintelligible 01:30:32.18\] streaming, he's a brilliant guy. English/Spanish. He totally gets it. He's like "Alright, no problem. I'm coming in hot", because we've got to do this show. So I get there, and they got the lasers set up, and the smoke machine, just because lasers and smoke machine, future - d'oh... So I tell Mat, "Look, new plan." \[laughter\] "I'm gonna call in from the future, and you're gonna ask me some questions. And that's it."

**Jerod Santo:** That's it, that's the whole idea.

**Paul Orlando:** Now, Mat is the straight man in the comedy act; he's always interesting... He gets it. So it just -- it started going. And I had some ideas that I thought about on the way over, just because it was not -- it was very comedic, but I also had some very serious things to say. And if you kind of parse it and listen to it with that eye, it's a cautionary tale, and it's a genuine, heartfelt outreach to a lot of different communities about some things that I think were going on with Go in the world at the time.

\[01:32:02.08\] But my idols - you know, Robin Williams, or Eddie Murphy, people who were... I mean, I'm no Robin Williams. I'd like to be. Because more lucid human being, more present, more quick-witted... It'd be hard to find another human being with that type of rapidity of thought. So these were my -- somewhere between that and the old Jewish comedians... "Take my computer, please", you know... \[laughs\] And definite hat tip to Back to the Future, and some of these other tropes that are formed us.

**Jerod Santo:** Sure. Oh, yeah.

**Paul Orlando:** These are the things that made us who we are, because we were them in part, and they were us. And Matt was amazing, Natalie - they were amazing. It was a great moment of inspiration, and I really appreciated that everybody could go with so little information about what I was going to do, and that it came out so fantastically. I really am very grateful to all of the sources from the past and the future that I stole from, and all my collaborators that put it together... It keeps getting views. Look, until 2053, that thing is still -- like "Let's see..."

**Jerod Santo:** It's still the future.

**Paul Orlando:** "We've still got two more years before NostraRonmus is wrong", you know? \[laughs\]

**Adam Stacoviak:** I wonder when I watch that if it was like that short film that you see gets produced into a full-on movie... Or something that's like a precursor to something that is at least annual or repetitive in some way that has not just one occurrence, but some sort of episode. Not so much like weekly, or it needs to be a thing, but something where it's a thing you do more than just one single time.

**Paul Orlando:** Well, I will -- when is this show coming out? This show is coming out sometime in the future...

**Adam Stacoviak:** This Friday.

**Jerod Santo:** Friday.

**Paul Orlando:** So if I were you, humans of the internets, I would go to Chicago in July to the GopherCon US, and I would make sure -- well, first of all, go there for the community day before the whole thing starts, for the hardware hack session. That is always amazing. We'll have drones, hardware... All sorts of cool stuff.

**Jerod Santo:** Balloons?

**Paul Orlando:** That's during the community day. That's before -- it's totally free, by the way, to go to the hardware hack session. You don't have to pay extra. You just have to have a ticket. We're not even checking your tickets, actually. You know.

**Jerod Santo:** Don't tell them that...

**Paul Orlando:** Maybe somebody is. So do get the conference ticket. But definitely be there day one of the conference, because there may be, there may be a chance that something from the future may appear in the present. Well, that's still in the future.

**Jerod Santo:** There you go. It's the future, but it will be the present. It'll be a present.

**Paul Orlando:** It will be the present when the future comes, then.

**Jerod Santo:** Yes.

**Paul Orlando:** Yes.

**Adam Stacoviak:** Is this a conference-conference thing, like a talk? Or is this like a maybe thing at some before thing? What are you trying to say that first day?

**Paul Orlando:** Well, the day before the conference, come to my hack session.

**Adam Stacoviak:** I see. Okay.

**Jerod Santo:** The day of the conference...

**Paul Orlando:** The day of the conference, make sure you're there for the opening talk.

**Jerod Santo:** Hm... That's all he's gonna say though...

**Paul Orlando:** The official announcement hasn't come out yet, so I may well have just scooped...

**Jerod Santo:** That's alright, we like scoops. A little treat.

**Paul Orlando:** But yes, it's going to be outrageous.

**Adam Stacoviak:** I love outrageous. That's a very awesome word, and a very awesome thing, to be outrageous.

**Paul Orlando:** \[01:35:50.07\] Like many of the things I do, it will be a spectacle. Whether it's the spectacle I intend or some other spectacle is not important. I promise a spectacle, and spectacle I will deliver. \[laughter\[

**Adam Stacoviak:** There's a girl on the internet, her name is Ali Spagnola. I don't know if either of you have heard of her, but she has a really -- maybe the same way you run and scientifically explore the permutations of all code, and Geiger instruments and whatnot to check out radioactivity in the atmosphere, this thing... She's like that, but with like human behavior, and like just humanity. She's into fitness, and she eats the same thing literally every day. She's like a human science experiment. If you haven't seen her...

**Paul Orlando:** No. want to check that out though.

**Adam Stacoviak:** ...it'd be an absolute treat to go check her stuff out. She's just -- she makes music, she does all sorts of healthy things, fitness-related things... A literally outrageous type person. She says that word a lot. It's part of her kind of core brand, and so I just thought I'd mention that, because she's pretty, pretty wild, if you haven't seen that before.

**Paul Orlando:** I haven't. I don't usually use that word, actually...

**Adam Stacoviak:** I'm sorry. You should do it more.

**Paul Orlando:** I'm in California, I usually say awesome, just because like everything's awesome.

**Adam Stacoviak:** Yeah.

**Paul Orlando:** But this is one that -- it's the 10-year of GopherCon, so something special has to happen... And - well, I will do my best.

**Jerod Santo:** Well, we appreciate you stopping by and doing your best at making an awesome episode of this. This was lots of fun. It always is, Ron. In fact, we haven't seen you since OSCON, man. It's been that long.

**Adam Stacoviak:** Gosh.

**Paul Orlando:** I miss you guys.

**Jerod Santo:** It's been a while.

**Adam Stacoviak:** We miss you, too.

**Paul Orlando:** The real world... I mean, the internet are all well and good, but I haven't left for another planet yet. I'm still here. Not as often as I was, but I'll definitely be -- I'll be at GopherCon, I'll probably be at some other stuff this year... I'm going to try to make more of an effort. I do a lot of the European conferences. I live in Spain, so it's very quick and easy, inside the European Union.

**Adam Stacoviak:** We've gotta get to a FOSDEM, Jerod. Jerod and I haven't been to a FOSDEM before... So I think we need to make that a priority. I think that could be like an easy connection with Ron, because you've been there three years straight... I'm sure probably even more than that, given --

**Paul Orlando:** Oh, more than that. Actually, this was my seventh year in a row giving a talk at FOSDEM...

**Jerod Santo:** Wow.

**Paul Orlando:** Which is kind of amazing, just because, you know --

**Jerod Santo:** Is FOSDEM in the January-February timeframe? When is FOSDEM usually?

**Paul Orlando:** It is February. It takes place at the campus of the University of \[unintelligible 01:38:34.01\] in Brussels. It's kind of an anarchist conference, by which I mean there's no registration. You just show up. So the organizers, the way they organize it is each room of the campus - you pitch. They take pitches for subject areas. Like, there's a Go dev room, there's a Rust dev room... And once they choose the subject areas, each one of those sub-organizers is 100% responsible for choosing the speakers, organizing them, making sure they do their thing... It's 100% on them. The campus - they have streaming A/V. They just provide that, running throughout the day, from volunteers. There's no corporate sponsors... It's like a social anarchist conference, and it's really quite amazing.

A lot of people who are maintainers just show up there and hang out. The hallway track is incredible. I've never even made it in the Rust room, but I've had the most amazing conversations with people waiting to try to get in. So I highly recommend FOSDEM. Also, the night before it begins -- it takes place over the weekend, Saturday and Sunday. Friday night, traditionally they have an opening party at the Delirium Brewery, which is a classic Belgian trappist brewery, famous for the Delirium Tremens ale. So there's people I would only see at that beer event. Like Charles Nutter.

**Adam Stacoviak:** \[01:40:13.17\] I've known Charles for many years, yeah.

**Paul Orlando:** Maintainer of JRuby.

**Jerod Santo:** Yeah.

**Paul Orlando:** An amazing guy, super-smart. Didn't expect that JRuby would be so successful and would take over his entire life and career... And since I'm not too involved in Ruby, the only time we would bump into each other is at the beer event the night before FOSDEM. And a great chance to catch up on things, just because he's a great guy. Our paths just don't cross because of, you know, life. So yeah, please come to FOSDEM.

**Jerod Santo:** We'll try to make that happen. We'll see if we can do it next year.

**Adam Stacoviak:** Yeah. All that to say is like, when we see you, I feel like life is just a little bit - actually a lot more - better after seeing you. You're a joy to talk to digitally, like we are right now, in a podcast form, and via video, via the low Earth orbit satellites that you're streaming from via Starlink... So thank you, Elon and those folks making that kind of stuff possible.

**Paul Orlando:** Mr. Mush - yeah, thank you. Thank you, Mr. Musk, for my bandwidth. Please don't cut it off again after those last things I said. \[laughter\] I mean, I meant them, but please don't listen.

**Jerod Santo:** Don't bite the hand that feeds you, Ron. Don't bite the hand that feeds you.

**Adam Stacoviak:** Absolutely. I mean, it's good to see you even in this form... But I know that when we met you -- Jerod, what was that conference?

**Jerod Santo:** Well, I think it might have been... It was GopherCon, OSCON...

**Adam Stacoviak:** Was it GopherCon? It was, right. Okay, at the pre-party, right? We went at the pre-party the day before the conference actually kicked off.

**Jerod Santo:** Maybe, I don't know. A long time --

**Paul Orlando:** You'll notice I love those pre-parties before the conference kicks off. It's almost guaranteed, if there's a conference and there's a pre-party, you'll find me there.

**Adam Stacoviak:** 2014. Is that right, Jerod? Was it 2014?

**Jerod Santo:** That sounds about right, yeah.

**Adam Stacoviak:** It sounds so long ago.

**Jerod Santo:** I remember being like "Who is this guy?" Because you were talking our ear off on Gobot, I think, at the time... Or what was the Ruby one? R2?

**Paul Orlando:** R2.

**Jerod Santo:** Yeah.

**Adam Stacoviak:** And you had like a Sphero partner, I believe, that year; you had your hack day, the last day, the unofficial last day of GopherCon...

**Paul Orlando:** That was the first GopherCon. Yeah, that was actually pretty amazing... I had a bunch of hardware, not just because I had just given this talk, but because I was actually going to Berlin for another conference right from there, and to do a workshop. So I had all these flight cases full of robots from Sphero, and drones, all this different stuff... And we had a day in between of travel, and it was just -- there was this room for the community activities, which was like nothing planned. There was nothing planned, it was just a bunch of people hanging out. So --

**Adam Stacoviak:** Yeah, that was the best.

**Paul Orlando:** So I was just like opening my flight cases, let people play with my toys... And the next year was like "Yeah, so you're coming for the community day, for the hardware hacking?" And it's like "Oh, is that a thing now? Because yes..." \[laughter\] The answer was yes. I mean, you don't even have to -- you had me at hardware hack. \[laughter\]

**Adam Stacoviak:** Yeah, absolutely. Well, all that to say is that this is Changelog & Friends, and so you are -- Jerod and I would consider you very much a friend.

**Jerod Santo:** Absolutely.

**Adam Stacoviak:** And I think you're an awesome human being. I love all the work you're doing in the community. I love just the heart you put into things, and I think that your outlook is infectious in a positive way... And I just really appreciate you coming on and just sharing this crazy journey you take in software, and just dragging us with you, happily, of course... But yeah. Very cool.

**Paul Orlando:** Well, thanks. Thanks for having me. I really appreciate all of the great guests that you have, all the interesting things... I learned a lot from listening, and it's really fun to -- it's fun to chat with you, and fun to share, and I really appreciate the work that you're doing, and thanks for having me on.

**Adam Stacoviak:** Yeah, alright.

**Jerod Santo:** You bet.

**Adam Stacoviak:** Bye, friends.

**Jerod Santo:** Bye, friends.
