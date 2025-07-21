**Jerod Santo:** Today we're joined by longtime listener and community member, and even caller inner to our annual State of the 'log episode, Don McKinnon. Welcome, Don.

**Don MacKinnon:** Hello. Thank you for having me.

**Adam Stacoviak:** Caller inner. I love caller inner.

**Jerod Santo:** Well, you know... I'm a professional with words...

**Adam Stacoviak:** I like it. What about friend? Do you want to call him friend, Jerod? Or should we wait for that?

**Jerod Santo:** We'll see. We'll see, Don.

**Adam Stacoviak:** We'll see. Okay.

**Jerod Santo:** Don, you've been hanging out a long time, you've been listening a long time... You came over to Zulip, you're in Zulip with us... Curious just how you came across the pod, how you found us, what interests you etc.

**Don MacKinnon:** Oh man, I don't remember where I first came across the Changelog, but I've definitely been listening to not only like the main podcast, but all the other shows you guys were producing at the time before... So it just kind of became part of my weekly ritual, commuting to work, listening to the Changelog... And then I joined the Slack community, I was there for a bit, and then now Zulip.

**Jerod Santo:** Yeah. And you left us a voicemail, BMC remixed your voicemail, and in your voicemail you professed your love of Adam Jacob, or your like of Adam Jacob, and his thoughts and his career... And BMC took some creative liberties with that ain't that right?

**Don MacKinnon:** Yeah, he definitely took it to another level of like creepy stalker-ness...

**Jerod Santo:** And it just so happens I have that audio with me. \[laughter\]

**Don MacKinnon:** Oh, wow... No...

**Adam Stacoviak:** I was like "Cue it up! Cue it up...!"

**Jerod Santo:** We're not going to play your original, we'll just do the creepy one. So... You can defend yourself afterwards. Here we go.

**Don MacKinnon:** Okay.

\[04:40\]

*"My favorite episode was from Chef 2 System Initiative. I've been following Adam Jacob on social media for a while... I've been also following Adam Jacob to work, and I got kicked out of his company. So it was interesting to hear more about his career journey that led him to kick me out of his company. And I disagree with him, but regardless, he's always entertaining, and he's always kicking me out."*

**Jerod Santo:** "He's always kicking me out..."

**Adam Stacoviak:** \[laughs\]

**Jerod Santo:** Oh, gosh...

**Adam Stacoviak:** What did you call that whistle, Jerod? Cop whistle, or something like that?

**Jerod Santo:** Yeah, I think it sounds like a cop cherry... You know, as it goes up...

**Adam Stacoviak:** Cop cherry.

**Jerod Santo:** I mean, that's what I call it. The cherries are actually the lights, I think, but...

**Don MacKinnon:** Oh, it's not like a slide whistle, or...

**Jerod Santo:** I mean, probably it is a slide whistle, but it just reminded me... And I think he was trying to evoke, you know, as if you're getting arrested, because you got kicked out of Adam Jacob's company for stalking him. That's my thought. I don't know.

**Adam Stacoviak:** Yeah, I took it as like that, but maybe like a uh-oh, or a ooh...

**Jerod Santo:** Maybe.

**Adam Stacoviak:** Like some sort of auditory signal that this was a major throwdown, kind of thing.

**Jerod Santo:** Like all good art, it's open to interpretation. BMC knows how to make good art. Well, we have some things crossing here. Don is a Denverite... Is that what you call him? Denverite?

**Don MacKinnon:** Denverite, yeah. That's good.

**Jerod Santo:** Don's a Denverite. BMC makes good music. BMC is going to be making good music in Denver, at the end of July. We've talked about it before. Don has tickets, might be coming, but we're doing a live show... And we've picked Denver because it's a cool place, it's kind of centrally located... And Don, you like Denver. You live there.

**Don MacKinnon:** Yeah, I've been here on and off since '93, so kind of before it became cool...

**Adam Stacoviak:** That's a long time, man. '93, gosh...

**Don MacKinnon:** I even moved away for a while. I moved to New York for a bit, and then I came back, because I'm like "Yeah, Denver's a lot better."

**Adam Stacoviak:** Yeah. I love Denver. Denver's a fun town. Going back again for a purpose that is not GopherCon is kind of strange, Jerod... I've only ever gone to Denver for GopherCon. That's my reason for all the times I've gone.

**Don MacKinnon:** Wait, what is GopherCon? You have to dig into that.

**Adam Stacoviak:** Well, Gopher is the mascot of Go, the language, Golang... And GopherCon is the conference that was begun in Denver, by Erik and Brian. What is Erik's last name? Brian Ketelson, but what's Eri's last name?

**Jerod Santo:** St. Martin.

**Adam Stacoviak:** Yeah, St. Martin. Erik St. Martin. Those two folks founded that conference, and GopherCon has been like the staple conference for Go developers for many, many years. I think they now have GopherCon like EU, and like GopherCon elsewhere... So it's transcended Denver in the United States, and I think it's gone to even different cities.

**Jerod Santo:** Yeah. It was in San Diego one time, it was in Florida... I think it's in Chicago now, but it was definitely in Denver for the first few GopherCons.

**Adam Stacoviak:** Yeah.

**Jerod Santo:** And we would travel up, because we had Go Time, the podcast, and we also were doing some filming work, and just trying to create stuff, and do cool things. And so we went to Denver as a team a couple of times, but this will be the first time back as the Changelog.

**Adam Stacoviak:** For not that purpose, yeah. To close the loop, GopherCon.com... There is one coming up, August 28th, 2025, so a few months from now in New York City.

**Jerod Santo:** Oh, wow.

**Adam Stacoviak:** There you go. Check it out.

**Jerod Santo:** \[08:01\] Well, Don, we're here to talk about you and your new thing, Searchcraft, going after the search space... Which is an interesting part of the world, and it seems like one that's maybe changing dramatically, or at least potentially changing dramatically, with all these new large language model tools and ways of searching and finding and synthesizing... Why don't you tell us about Searchcraft and what it is and why you're doing it?

**Don MacKinnon:** Yeah, so to take you back as to the problem space, Searchcraft is a search engine. It's written in Rust, and the reason we made it is because my co-founder and I, we worked at an agency before this, before we started to found a product company. And we were building for a lot of startups, and other types of companies, and we were integrating search a lot. And so when you're going fast and building a startup MVP, you kind of try to reach for things off the shelf that you can integrate quickly... So there are options out there for search, but none of them we felt were that great for moving quickly. But we're kind of selfish, in that we want something that's not only easier for us, but once we hand off our code to clients, that they can kind of manage it themselves without having to be an expert at maintaining clusters of search engines, and things like that. Yeah, so that's kind of why we decided to build it... But when we started building it, this whole AI thing was not a thing yet.

**Jerod Santo:** Right.

**Don MacKinnon:** We started building Searchcraft back in 2021, mostly because I was really excited about Rust and the performance benefits, and reducing the kind of hardware you'd need to run a good search engine. But now that the AI thing has really kind of become this whole movement over the past year, we're kind of having to shift... But also, there's a lot more companies that are now coming to the realization that they need to look at how they're doing search... So it's been like a good kind of convergence of forces. We're kind of coming out with this new thing, and there's a lot of people who are reevaluating how they're approaching search now via AI... So yeah, I think the timing is really good, and it's kind of primed to change, I guess.

**Adam Stacoviak:** Search is one of those weird things where you just don't want to have to build that, right? It seems like it should have been done by now... It's part of that whole "Don't make me think" from Steve Krug, back in the UX days, of like the early days of Learning UX, at least for me, reading that book, was how crucial search was... It's just one of those things you don't want to build. It's like "Can I just have that off the shelf, please, and plug it in?"

**Don MacKinnon:** Yeah, totally. There's a lot of things people just should not solve. It's been a solved problem. If you are building an app and you need a login system, you're not going to write your own authentication layer anymore. You shouldn't, because you're probably going to get hacked, so you get something off the shelf. If you want analytics, you're going to get something off the shelf. It's kind of the same thing as that. Search - you definitely notice, if your product doesn't have search in it, and it's difficult to do it correctly... So I feel like there is room for improvement in what's out there. That's kind of why we decided to hop into this space.

**Jerod Santo:** So it was 2021, you wanted to create a search product... There's a bunch of stuff out there. Top of my head - Algolia, Elastic, TypeSense... What's the Y Combinator one...? Actually, there's probably way more than one, in Y Combinator... Anyways, those are top of the head. Adam, have you got any more?

**Adam Stacoviak:** That was my list.

**Jerod Santo:** \[12:03\] Yeah. Don, have you got any more than that?

**Don MacKinnon:** There's more, yeah. I don't know if you want me to go down the list, but those are the big ones. Algolia and Elastic kind of are the big two as far as open source. TypeSense is probably the third, I would guess.

**Jerod Santo:** Alright, so that's a fair enough crowd. We know there's more out there, but...

**Adam Stacoviak:** Mealy, Melly... What is that one?

**Don MacKinnon:** Meilisearch, yeah. Those guys, I am aware of them because they're one of the only ones who are also written in Rust.

**Jerod Santo:** Yeah, I remember that one. I haven't heard much about them recently.

**Adam Stacoviak:** You know, it just makes me sad about that name, though. Meilis...? Like, you can never -- I can spell Searchcraft. Test me. Go ahead.

**Don MacKinnon:** \[laughs\]

**Adam Stacoviak:** I mean, I can't spell Meilis-- and if I spelled it for you, you'd be like "That spells Miley?"

**Don MacKinnon:** I often throw in one too many Ls when I do it.

**Jerod Santo:** Right.

**Don MacKinnon:** I think they're a French company.

**Adam Stacoviak:** They're like Melissa spelled wrong, or something like that. You're like "No, it's \[unintelligible 00:12:52.19\]

**Jerod Santo:** It's probably a French word.

**Don MacKinnon:** It is a French word, I think. Or a made up French word, maybe. I don't know.

**Jerod Santo:** Well, regardless of Adam picking on their name... Sorry, Miley, or Mealy, or Miley.

**Adam Stacoviak:** I had to.

**Jerod Santo:** Searchcraft - where did you guys decide to differentiate, make something different? There's open source offerings, there's expensive offerings for scale, I'm sure there's enterprise... There's lots of people who've kind of carved out different areas... And what were you thinking with Searchcraft? What was going to make it different?

**Don MacKinnon:** Yeah. So for one thing, we didn't want to try to be everything to everybody. Elastic, I think, is a great product. They've put a lot of work into it. It does a lot of things great. But I think it does too much. You can use it for content search, you can use it for log search, and everything. So because it tries to do a lot, there's so many different ways you can configure it and tune it, and it makes it overly complicated for the majority of people who just want to add search to their website, or their app, or whatever.

So our focus from the get-go was let's think about developer experience, and think about how we can simplify this. Because we don't think people should have to be an expert at search to integrate search. We are really very much targeting frontend devs. A lot of startups have TypeScript developers and whatnot; they're used to building React applications, and they're not going to know how to stand up a search cluster, and tune JVMs, and things like that. So we don't want them to have to deal with that kind of thing.

So whenever we build a feature, or decide to add something to the product, we're like "Let's think about how this affects what the developers are doing, and how they're using Searchcraft" and "Does that make sense?"

**Jerod Santo:** And what was your process towards that end? I think Rust was involved... But what else? What kind of decisions did you have to make to get there?

**Don MacKinnon:** Yeah, so Rust came -- one, I was a big fan of the language. I've primarily worked in the last few years in TypeScript and JavaScript, and I started learning Rust back in 2019... And I was very impressed with how well-designed the language is. And when we chose to build Searchcraft, I was like -- I think this is a good marriage of tech and vision, in that we wanted to inherently make something less complicated, and lower the hardware requirements, which was like a good fit with Rust. Because you automatically -- you don't have to deal with JVMs, you don't have to deal with standing up... Okay, maybe I had to have a three-node cluster before; now I can just have a single machine running, serving millions of records on this tiny little machine, because Rust doesn't use the same amount of memory as a Java app would. So that's kind of where that came from, is if we can reduce the size of the cluster, then we don't have to deal with complexities like sharding, and cluster management, and things like that. So for the majority of people, they can have a very simple setup.

**Jerod Santo:** Is it set up to be self-hosted then, or how does it --

**Don MacKinnon:** \[16:13\] Yeah, so to be upfront, the core engine is not open source, but we do offer it for free. You can download it from Docker Hub and self-host it. You can also -- we have a SaaS cloud that is free as well. There's a free plan on there, that's not functionally crippled at all. You can do whatever you can do with the highest tier plan. You just don't get as many documents or requests.

**Jerod Santo:** Sure.

**Don MacKinnon:** But yeah, we encourage people to download it and try it out. When you're a developer, you're going to want to play with something before you bring it up to your boss or whatever and "Hey, I think we should use this." So...

**Jerod Santo:** So it's free and available to self-host, but not open source. Is that a business decision? Is that a timing decision? What's your thoughts on that?

**Don MacKinnon:** It's kind of both. One, I didn't want to open source something just to open source it and then risk at any point in time down the road pulling that back. I'd rather just not even open that door, if that was a possibility. So that was part of it. We did take some investment to start the company, and I had concerns about that down the road, if that was ever an issue... Also, single-vendor contributions to open source are kind of -- I don't know if there is a lot of benefit to... I don't know. Search is a very niche kind of field, in that I doubt a lot of people would be able to contribute to it to begin with. Does that make sense? All of our microservices and integrations, those are all out there as open source, but the core is not.

**Jerod Santo:** Well, it's certainly a decision to make. I think that there are projects that don't need to, or shouldn't, and there are others that should. And you have to ask yourself why. "Why are we doing this?" And if the primary reason would be contribution, I think in this case that probably isn't a very compelling reason, because like you said, if you have a -- I've always asked people and wondered about open source projects that are almost entirely, or sometimes entirely contributed to by a singular corporation, and how they deal with what is open source, but not really open contribution software... And it's a very tricky thing to do right, because you're not actually interested in a lot of the things. Or if you are, then why would people contribute, if you're just going to be making money? There's all that kind of weird gray area that can be avoided if you just opt out. And the nice thing is, you can change that later, whereas you can't easily go the other direction later, without rug pulling, right?

**Don MacKinnon:** Right. That's totally it. I don't want to arbitrarily make that decision and then "Okay", down the road change that and then get the angst from the community about it.

**Jerod Santo:** So it's Rust, it's Docker, it's faster and memory-efficient compared to Java-based software, which is... Is that Elastic? I don't think I've even --

**Don MacKinnon:** There's a few. So Elastic is the biggest one. We're definitely smaller and faster than Elastic. There's also Solr, which is an open source project... They're both actually built on the same core library, Lucene, if you guys are familiar with Lucene. So they both use that core library. And then there's Open Search, which is Amazon's fork of Elastic.

**Jerod Santo:** \[20:03\] And Rust was one of the reasons, but what else in terms of like, I don't know, indexing, or storage engine, or... There's gotta be other things that you considered along the way that have helped us to become fast and efficient.

**Don MacKinnon:** Yeah, so our storage engine, it was a database that was designed for like embedded. It's an embedded database, so it's designed to run very minimal hardware. So a lot of the crates in the Rust ecosystem are designed to be like embedded system compatible, which was another kind of motivation to go that route. So they're already geared towards efficiency.

**Jerod Santo:** So what's it called? Is it like an off the shelf thing, or something that you built?

**Don MacKinnon:** No, I did not build that. We're using a database called Sled.

**Jerod Santo:** Sled. Okay.

**Don MacKinnon:** You can look it up if you want.

**Jerod Santo:** That's a new one for me. Adam, have you heard of Sled?

**Adam Stacoviak:** Not until today, man. Just now.

**Jerod Santo:** Okay, I'm checking it out. Sled. Rust crate. A high-performance embedded database with an API that's similar to BTreeMap. Interesting. And then how does this thing work down under the covers? Do you know how that works, Don?

**Don MacKinnon:** I mean, when I was evaluating it back when I started, I really got into digging into it... And I mostly chose it for speed.

I looked at a couple other ones just, like Rkv DB, whatever -- the key-value map database. LMDB... There's a couple of other ones I looked into, but... I was really going for like performance at all costs at the time, and so that's kind of why I went with SLED.

And if you dig into the maintainers -- he's got this whole kind of manifesto about his approach to writing software that I thought was very interesting.

**Adam Stacoviak:** Is that spacejam, Tyler Neely? Is that right?

**Don MacKinnon:** Yeah. Spacejam. Yup.

**Adam Stacoviak:** They call themselves "The champagne of beta embedded databases."

**Jerod Santo:** The champagne.

**Adam Stacoviak:** The champagne.

**Jerod Santo:** What's the Space Jam reference?

**Don MacKinnon:** I think that's his GitHub handle.

**Jerod Santo:** Okay. Spacejam, Tyler Neely.

**Adam Stacoviak:** Yeah. So literally, this person's handle is spacejam.

**Jerod Santo:** Okay. The handle is spacejam and the name is Tyler Neely.

**Adam Stacoviak:** Tyler Neely. Yeah.

**Jerod Santo:** Okay. Cool. Is this like a Michael Jordan Space Jam, or a LeBron James Space Jam? Because... Quite a bit different.

**Adam Stacoviak:** Well, I mean, based on their avatar, it's neither. It's -- I actually have to start saying neither. My wife yells at me for saying neither. I don't know about you guys, but my wife is like "Don't say neither. It's neither." "Okay, babe." It's some sort of dragon. Some sort of dragon for their avatar. I don't know.

**Don MacKinnon:** Are you a tomato guy as well?

**Adam Stacoviak:** Nah... Tomato, man. But then how do you spell it? Is it --

**Jerod Santo:** Yeah... I've never actually met a tomato person. Have you, Don?

**Adam Stacoviak:** Me neither.

**Don MacKinnon:** Well, that's like the saying, like tomato/tomato.

**Jerod Santo:** Yeah, totally. But I've never actually met a tomato.

**Adam Stacoviak:** Me neither.

**Don MacKinnon:** Maybe if you're from England, I don't know.

**Jerod Santo:** Yeah, perhaps. It's a nice tomato.

**Adam Stacoviak:** I've met people who spell potato differently. Like a T-O-E, or a T-O.

**Don MacKinnon:** Well, no one says potato.

**Jerod Santo:** That's right.

**Adam Stacoviak:** No.

**Jerod Santo:** But wasn't there a politician who couldn't spell potatoes?

**Don MacKinnon:** Dan Quayle.

**Jerod Santo:** Dan Quayle. This is going back to the nineties, Don... You're just dating yourself. Remember that, Adam?

**Adam Stacoviak:** Oh, yeah. Barely.

**Jerod Santo:** He corrected some kid in elementary school who had spelled -- because you know, when you pluralize potatoes, you throw an E in there, right?

**Adam Stacoviak:** Right.

**Don MacKinnon:** Oh, yeah. Wasn't it like he up at like a chalkboard, and the kid came up and like corrected his spelling?

**Jerod Santo:** It's either that or the other way around. I feel like the kid had it right, and then Don Quayle corrected his spelling to be wrong. I think that might've been what happened. It could be either way. Either way, it's a hilarious moment. It kind of ruined his career, didn't it? Dan Quayle, not Don Quayle. Dan Quayle.

**Adam Stacoviak:** I'm also liking that Freudian slip, though. That's a good Freudian slip.

**Don MacKinnon:** I mean, that is such a different time... If you think about like people could be disqualified from politics for not knowing how to spell...

**Jerod Santo:** Right? I was talking to somebody about that recently with the -- who was the politician who like yelled on stage, and it ruined his... It like ruined his campaign.

**Don MacKinnon:** Oh yeah, he was like a -- I remember. He was like the DMC chair for a while.

**Jerod Santo:** \[24:05\] Yeah. He effectively did the "Developers, developers, developers, developers" yell, similar to Steve Ballmer.

**Adam Stacoviak:** Yeah. "Politics, politics, politics, politics."

**Jerod Santo:** Yeah, it was like that.

**Don MacKinnon:** It was very exciting. He was like \[unintelligible 00:24:13.00\] And the people were like "No...!"

**Jerod Santo:** Yeah. He went so over the top that it literally trashed his campaign. Like, he just disappeared out of political life after that, pretty much. And I was telling someone, remember when you could use to get disqualified by like just being awkward on stage one time, and yelling? But now it's darn near impossible to say anything that's gonna -- anyways.

**Don MacKinnon:** Different time.

**Adam Stacoviak:** Well, if we give it a goog... I'll throw back to \#define.

**Jerod Santo:** Please do.

**Adam Stacoviak:** Give it a goog. When you type in Dan, D-A-N, space Q-U, it spells out Dan Quayle, and then potato.

**Jerod Santo:** There you go.

**Adam Stacoviak:** It's like, "You should be searching for Dan Quayle potato."

**Jerod Santo:** It's kind of sad that this man who I don't know, and I don't know even his politics, but his entire life now, historically, is characterized by misspelling potato one time, you know?

**Don MacKinnon:** It's like, yeah, what's he's known for...

**Jerod Santo:** \[laughs\] That's what he's known for.

**Adam Stacoviak:** A little side quest here... Let's close the loop. In June 1992, during a spelling bee at Munez Rivera Elementary School in Trenton, New Jersey, Dan Quayle famously altered a student's correct spelling of potato to P-O-T-A-T-O-E, which is incorrect.

**Jerod Santo:** Oh, with no plural. Gotcha.

**Adam Stacoviak:** Yes. This since became a wildly circulated gaffe that resulted in widespread ridicule.

**Jerod Santo:** Yes.

**Adam Stacoviak:** To this day.

**Jerod Santo:** To this day, 2025, we're still razzing him about it.

**Adam Stacoviak:** Poor fella. Poor fella. He was the vice president at the time.

**Don MacKinnon:** I mean, I guess that is what he's known for. We're talking about it now.

**Jerod Santo:** That's right.

**Adam Stacoviak:** And obviously, that's an easy slip.

**Jerod Santo:** Well, because if it's plural, you do put the E in there.

**Adam Stacoviak:** Yeah.

**Jerod Santo:** But if it's not plural, you don't.

**Adam Stacoviak:** That's when the E's in there, because it's in there for the E-S.

**Jerod Santo:** That's right.

**Don MacKinnon:** I mean, English is kind of like the JavaScript of language...

**Jerod Santo:** It really is. And you've gotta learn all the exceptions, like that one.

**Adam Stacoviak:** Now we know.

**Jerod Santo:** Anyways, he was the vice president... I think we can hold him to that standard, you know?

**Adam Stacoviak:** Now we know.

**Jerod Santo:** The elementary school kid had it right.

**Adam Stacoviak:** Yes. And I got us there by, I think, saying either instead of either, or either instead of either... My bad.

**Jerod Santo:** That's what you did. You said neither.

**Adam Stacoviak:** Neither. It's neither, apparently.

**Don MacKinnon:** Oh yeah, because we were talking about spacejam. I forgot where we were.

**Jerod Santo:** That's right.

**Adam Stacoviak:** That's right.

**Jerod Santo:** We're way upstream. We're like six hops up.

**Break**: \[26:36\]

**Adam Stacoviak:** What makes search cool? Obviously, we all need it, but what makes it cool to build? What's fun about it?

**Don MacKinnon:** Yeah, so I think because it's kind of a niche problem, it's difficult to solve correctly. But there's a lot of areas to innovate, because it's not an area that a lot of people are working in. So that's exciting. And we decided to start over and not build on Lucene. For better or worse... Maybe we're learning things the hard way, but we got to learn as we went on how these systems work, and digging into things like relevancy storing, and those kinds of algorithms, and how to quickly navigate through BTtreeMaps efficiently. When you have to do things like "Okay, we're doing typo tolerance." That's a feature that search engines typically need to have. So if I misspell something, how do I still find this term that I'm looking for?

So when I dug into that, I was like "Okay, well now I'm learning about things like Levenshtein distance", which I had never learned about before, in school. That was something that I learned while building Searchcraft. Levenshtein distance is how far can you get from the original term and still match. And the further places you go out, the more nodes you have to travel down through your BTreeMap, which reduces performance. The more nodes you go down, the slower it gets to do your lookup. So you have to find a balance between how many places can you go before it starts not only affecting performance, but also accuracy... Because then you start matching to a lot of things that are not good matches, which means your search is actually becoming less relevant, when the intention is to make it more relevant and still match when the user makes mistakes, but the data is very similar.

**Jerod Santo:** Right. Is there a sweet spot that you've found, or...?

**Don MacKinnon:** Yeah, three.

**Jerod Santo:** \[laughs\] Okay. Let me just write that down. All your competitors are like "Oh, there's some work we don't have to do... The answer's three."

**Don MacKinnon:** Oh, no, I gave it away. Actually, the number is different based on how long the phrase is.

**Jerod Santo:** Okay.

**Don MacKinnon:** So the longer the phrase, the more distance you actually want to give it, because then you can account for multiple mistakes. And the shorter the word, the tendency to -- there's a tendency to be less mistakes, and also you want less false positives when you have shorter words. So you tend to reduce that number when you go smaller.

**Jerod Santo:** Gotcha.

**Don MacKinnon:** There's a certain threshold where we go to three, but below a certain threshold, we have a set of like two.

**Jerod Santo:** I see. So I think in a video you sent over, we watched your indexing Wikipedia on a Raspberry Pi with Searchcraft, and you were giving examples of quick lookups with misspellings. I think Einstein might've been one... You just spelled that singular word wrong. And that would be a case where you would... Is it three characters that you're search -- like, what's the three applying to when it comes to misspellings?

**Don MacKinnon:** \[32:10\] Yeah, like up to like positions away from the original term, essentially. Yeah.

**Jerod Santo:** Gotcha.

**Don MacKinnon:** Where like you could have "How many mistakes can you accommodate before you're making too many false matches?" Which is why smaller words, you'd want to do less, because it's going to match to too many things.

**Jerod Santo:** Yeah, exactly. And then for longer phrases, you could actually match multiple misspellings in different words throughout the phrase, and it would still --

**Don MacKinnon:** That's correct.

**Jerod Santo:** Okay. That is interesting.

**Don MacKinnon:** And the way a lot of search engines work is you have your word, and each word is considered a token... Which people are becoming more and more familiar with now because of LLMs; tokens, and \[unintelligible 00:32:50.28\] So when you're doing the ingestion process, you pull in your data, you chunk it out, usually by like \[unintelligible 00:32:59.14\] or whatever into tokens, and then those tokens are used and stored in columnar format, which gives you fast lookup times against that token.

**Jerod Santo:** And as you said in the opening, I think it is a good time to be a search engine, because everybody is now realizing that maybe our search isn't as good as it could be... Because it's kind of a thing that - and I've done this; I've done it twice. I rolled it out on Postgres, and forgot about it... And then we switched over to TypeSense and we rolled it out in TypeSense, and kind of just forgot about it... And it just is what it is. But then here comes ChatGPT and friends, and everyone's starting to think "Well, couldn't you just talk to my website and it will just show you what you want to find?" And it makes that interface, that chat interface where these models have seemingly endless knowledge of the entire world - except for my website - is so compelling that everyone's like "Ah, maybe our search is not good. Maybe our search needs to be good now." And so then you kind of poke your head up and start looking around and see what people are doing.

I'm on the TypeSense mailing list, and they just shipped some features with LLMs doing something... I can't remember what they're doing. I think they're actually like kind of writing your query for you. Like, you put in plain text and they turn it into their query language with an LLM... Which seems like a cool thing. And I'm sure Algolia is doing stuff, I'm sure Elastic's doing stuff... Everyone's like "Okay, we need to revamp all these search engines." So what are you guys then --I'm sure there's some kind of pivot involved with the current fast-pacing world of LLMs.

**Don MacKinnon:** Yeah. And you're totally not alone in the fact that you're like -- you had set up search in a couple iterations and then kind of like forgot about it and left it.

**Adam Stacoviak:** You're supposed to.

**Don MacKinnon:** Every company did that, right?

**Jerod Santo:** Yeah, of course.

**Don MacKinnon:** They're like "Okay, yeah, I mean, it checked the box, we have the little magnifying glass in the corner... Alright, we're done."

**Jerod Santo:** You can find stuff, sometimes you can't, and they're like "This would be better if you --" And I'm like "Yeah, it would be, but..."

**Don MacKinnon:** Most of the time it's like you can find stuff, kind of. It's not great, but it's there, and we checked the box. And a lot of companies were like that. They were like "We checked the box. We have search. It kind of works. But we don't really care, because people can just search Google, and Google will give us the traffic to our article that we just published yesterday." And that's what everyone did, literally. They're like "Google will just give us traffic, so our search on our website doesn't have to be great." But now, because Google's doing like the whole AI summary thing, they're like diverting traffic to sites less and less. And this is not just an opinion. Companies are saying it across the board, where their traffic is just plummeting because Google's not sending them there anymore. They're either keeping them on Google, or sending them to Google-owned properties kind of thing, which is kind of nefarious, I think... But their traffic's dropping off, so they're like "Okay, well, I guess we have to make our search better now." And what are people doing? They're like "Well, there's this whole ChatGPT kind of experience that's out there. Let's look at that."

\[36:11\] So companies like Algolia, Elastic and us were like "Okay, we have really powerful keyword search, but people are wanting to do this natural language thing... So let's do that." So we do have, as you said, a pivot in that we have an AI offering that is coming out in our SDK very shortly... But the thing about these, I would call them first-generation kind of AI approaches is that a lot of them, while they've really focused on the natural language, semantic reasoning layer with the language models, they haven't put a lot of thought into the information discovery aspect of it. That middle layer that says "Okay, yes, the LLM can translate the user's intention, but powering that with something that can actually serve you up accurate information, accurate and relevant information, and recent information is a problem still." So you'll use these chat interfaces, and they'll give you -- you've seen it, either non-existent information, or wrong information.

**Jerod Santo:** Right.

**Don MacKinnon:** And that's an information discovery problem, in that they aren't using the proper tooling underneath. Kind of like if you're going to do a keyword-based search, you typically don't want a wildcard against like a SQL database, because it's not going to be what you need it to be. You need other relevancy tuning features in there.

I think companies will get there. I think the advantage that search-based companies have is they understand relevancy already, and they've solved relevancy now... So we let the language models kind of handle the semantic reasoning part, and the language models convert that user intention into the proper kind of machine API queries. So like "Let's turn that natural language question into machine API queries, and then query the right kind of system to get that information back." You'll see more of that kind of like second generation approach where they're hooking it up to the right tools, and then that experience is going to get better.

**Adam Stacoviak:** Is fuzzy search and intention similar? Because it feels like it's similar to me, but I don't think it is an implementation.

**Don MacKinnon:** Fuzzy search -- so there's a couple of different things. There's fuzzy search, which is like "Let me not have to put the complete thing." Like, I can do partial search, and it completes it for you. There's also -- kind of related, but different is typo tolerance, where I misspell it, and it knows what I'm doing. But then there's also things like synonyms, which is like "I'm looking for shoes, but I should also match on like sandals, or loafers, or whatever." Where the words are completely different, but they could have the same intention.

**Adam Stacoviak:** When someone searches or types into a search box with Searchgraph, have you been -- Searchcraft. I want to be more clear on my -- I almost said Searchgraph. That's kind of cool, too. Searchcraft... If they're using that, are you doing any intention analysis in addition to like fuzzy search, and stuff like that? Or is that where the LLM comes in, what Jerod was saying?

**Don MacKinnon:** Yeah, so our semantic layer is language model-based, so it kind of converts that into "Okay, what--" I don't know how much of the secret sauce I should give out, but it does convert it into like what machines can understand.

**Jerod Santo:** Give it all, man. You already gave three... What else can you do?

**Don MacKinnon:** \[39:49\] Oh, no. I'm just giving it all away. No, it converts that into like what the machines expect. But also, if you're using a search engine underneath your semantic layer, you do things with relevancy tuning that improves, right? Like I mentioned before the synonyms. So knowing that shoes matches to sandals, or other things like that. And that's just handled for you on that retrieval layer.

**Jerod Santo:** So has this required you to go back and get more money, or slap AI on your pitch deck, and raise a second round? Or what are you doing there?

**Adam Stacoviak:** "Now with AI..."

**Don MacKinnon:** "Now with AI." So when we started out, AI wasn't as -- it was just kind of nascent and starting out. It wasn't really a thing. We started Searchcraft May of 2024. So we are kind of working on it on the side.

**Jerod Santo:** Oh, I thought you said 2021.

**Don MacKinnon:** That's when we started working on it. Yeah.

**Jerod Santo:** Oh, that's when the business started. Gotcha.

**Don MacKinnon:** So we started building it in 2021, but we had to build the core... And then it got to the point where "Yeah, this is really good." Maybe we shut down our consulting agency and build our own product company. And that's what we did May 2024, and then at that point my co-founder and I had to learn "Okay, well, how do we pitch and get investment?" I had never done it before.

We were fortunate enough that we were able to do our first raise with like all angel investors, individual angels... And we were able to close that rather quickly, which allowed us to shut down our agency company and start full-time or going full steam on Searchcraft. So that meant turning essentially our proof of concept core and then making a company around that; building customer dashboards, and billing, and all of our SDKs that we made for the frontend, and all that.

**Adam Stacoviak:** Is that company Chalk? Is that what that is?

**Don MacKinnon:** Yeah, yeah. Chalk was my previous company. So we consulted for startups. That was kind of our bread and butter.

**Adam Stacoviak:** Do you know how I found that?

**Don MacKinnon:** Google?

**Adam Stacoviak:** I stalked you. You kicked me out of your company.

**Don MacKinnon:** \[laughs\]

**Adam Stacoviak:** I was just thinking -- I was thinking Searchcraft is really cool... You know, no offense to our friends over at Typesense, but I think Searchcraft says search, because it literally has the word search in it. And you couldn't really get a better mark than that. Like, Searchcraft is pretty strong. And I was thinking, "Geez, I sure hope Don has the trademark for that, because that's a pretty cool mark." And sure enough, somebody has it. You know who has it, Don?

**Jerod Santo:** Chalk.

**Adam Stacoviak:** Chalk does.

**Don MacKinnon:** Yeah, yeah. We registered originally under Chalk, but...

**Jerod Santo:** All good. Still works.

**Don MacKinnon:** At some point it's going to transfer it to my co-founder and I.

**Adam Stacoviak:** Well, it doesn't matter who owns it as long as somebody does and they can't take it.

**Don MacKinnon:** Somebody owns it, yeah.

**Adam Stacoviak:** Yeah. I guess it's IP itself, you sold the company... But for now, don't worry about transferring it. Eventually, it should get transferred though. But...

**Don MacKinnon:** Yeah, we made sure before we were completely sold on the name that we picked something that someone didn't have. Because I would hate to like build up branding, and register all the domains, and then you're like "Oh wait, somebody else has it."

**Adam Stacoviak:** Yeah. It's like racing and you're at the wrong track. "Dude, I just won the race." "Yeah, because no one's here. Okay? No one's here. Go over there." Not a one-to-one, but pretty similar. Wrong name, right business kind of thing...

**Jerod Santo:** Well, it's the second craft that we've come across recently, because we had a show with Andreas Møller, of Nordcraft, previously Toddle, renamed to Nordcraft. You are Searchcraft. Of course, there is Minecraft, as we mentioned on that show... We failed to mention there is Starcraft, there is Warcraft... There's all these different games that were crafts, but now we have like startups that are crafts. This could be like the new web 2.0 naming, where they just take the vowel out of the end, like Flickr, and Fiverr... No, Fiverr -- yeah, Fiverr did take it out. Or the ifys. Shopify, Friendify... That's Friendster. Anyways, craft could be like the new --

**Adam Stacoviak:** \[unintelligible 00:43:55.18\]

**Don MacKinnon:** Or the .ly...

**Jerod Santo:** Oh, yeah. Fastly...

**Don MacKinnon:** Bitly... I don't know. Cluely... That's a new one, actually.

**Adam Stacoviak:** Shopifyly...

**Jerod Santo:** Anyways, a new trend here.

**Don MacKinnon:** Is there a craft TLD? I'm guessing no.

**Jerod Santo:** Hey, that could be your next business. Craft TLDs.

**Don MacKinnon:** \[44:20\] Oh, someone's going to buy it... Yeah, no, it's kind of funny, because I have a little hobby thing I was thinking about coding in a weekend... I was like "What else should I name it?" And so I was like -- it was going to be ending in craft, because I couldn't think of anything else.

**Jerod Santo:** Of course. You've got to get the trend going somehow. Just keep coming out with crafts.

**Don MacKinnon:** But the name very much -- once we've settled on what the name would be, the branding was like real easy to come up with after that.

**Adam Stacoviak:** Yeah. You did a good job on that. Searchcraft I think is strong, obviously, because it's got the word search in it. I mean, you don't have to explain it. There's no explanation necessary.

**Don MacKinnon:** What we do is in the name.

**Jerod Santo:** There you go. It's a good name right there.

**Don MacKinnon:** We were talking about investment, to go back...

**Jerod Santo:** Yes. Go back to your experience. The first time fundraising...

**Don MacKinnon:** Yeah, so --

**Jerod Santo:** You said all angels... What were your steps? What was your plan? What did you actually do?

**Don MacKinnon:** Okay. We'll start at the beginning of the process. So when you go to do a raise, you have this idea for a company, but then you have to kind of like "Okay, how do I translate that idea to business people?" And that's a pitch deck. You write a pitch deck. I had never written a pitch deck before, so my co-founder and I, we kind of talked to a few different mentors in the space... We had worked with startups as our clients, so we actually knew a couple of people who had written pitch decks for those startups... So we're like "Can you like show us how to do this?" And they kind of told us "Okay, well, you kind of have to tell this whole story about like "This is the change in the world. And then these are the winners and losers, and this is how you can be a winner by taking advantage of this change that's just happened in the world." And that's kind of like how you sell it to investors.

**Adam Stacoviak:** Interesting.

**Jerod Santo:** There's like a formula for it.

**Don MacKinnon:** There's a formula. And if you don't follow the formula, they kind of instantly throw you out of the room, kind of thing, and we didn't know about it either...

**Adam Stacoviak:** Is that the exact formula you just shared? Or can you be more precise, less vague? Can you give us the formula?

**Don MacKinnon:** I mean, that's kind of like the general formula...

**Jerod Santo:** The gist of it.

**Don MacKinnon:** There's multiple steps in along that way. They even get as far as like "On slide three, this is what you need to show. On slide seven, this is what you need to show." Like, there's a formula to it. And the VCs know it, but people, first-time founders don't necessarily know this.

**Adam Stacoviak:** Yeah, I want to learn this framework. I want to learn it.

**Don MacKinnon:** Yeah. So we had a guy who kind of showed us the ropes on that... He didn't know our product well enough to kind of come up with the messaging, but he kind of gave us the basic structure of how we should form the pitch, and then we kind of took that and ran with it, and refined. We've probably written like a dozen versions of the pitch deck by now, maybe even more. It's one of those things you have to keep tweaking, especially as the industry changes and you're doing a different kind of -- if you're at a different round of raising, it changes. They very much want to know more about revenue projections the further along you go, and things like that.

**Jerod Santo:** This could be a really good idea for a series, or something... It's like "Startup pitch decks, five years later", or however -- like, once they've arrived and you go with a founder, and you go back to their original pitch deck, and they walk you through it, and then you can talk about all the stuff that's changed; what were they right, what were they wrong, what have they changed since then... That would be very interesting.

**Adam Stacoviak:** \[47:50\] Yeah. We almost did that with Beyang Liu last time I talked to him, because he was talking about -- it was either him or Quinn. I think it was Quinn, actually, now that I think about it. Quinn Slack, his co-founder. They were sharing how their vision has been similar, but it's obviously changed, over like as progress has happened and technologies change... But their mission, their core mission with developers has been the same. He's like "If you go back to the original pitch deck--" And I think he was supposed to actually link it up to me, so I should go back to their show notes... Or go back to them and get a link. But that was the closest we've gotten, to my knowledge, of like surfacing the original pitch deck and going through it.

**Jerod Santo:** So you've tweaked yours a dozen times so far...

**Don MacKinnon:** Yeah, at least.

**Jerod Santo:** And you're still a couple of years into it, right? Like two years in?

**Don MacKinnon:** Yeah. I mean, I guess we're technically a year and a couple of months out.

**Jerod Santo:** Yeah, less than two. And you added AI, you sprinkled AI into every slide...

**Don MacKinnon:** We had to... Okay, so from the individual angels, they were excited by what we were building, and saw the potential, and they wrote the check and we got in there. But subsequent talks we've had with more institutional offices, like venture funds and pre-seed funds and things like that... Like, AI has sucked up all the oxygen in the room. That's where all the dollars are going. You have to have AI, unfortunately. It feels like it's a cliché thing, but it is the truth. They're only investing in AI right now. And I don't know if that pressure is coming from the lending partners wanting to be in that space, or it's just kind of like the thesis supports investing in AI because AI is such a transformative kind of shift right now.

**Jerod Santo:** Right.

**Adam Stacoviak:** What it is, is the true overlords of this earth are forcing money to flow to AI to do this thing. That's what's happening. It's the Illuminati.

**Jerod Santo:** Okay.

**Don MacKinnon:** Oh, the Illuminati.

**Jerod Santo:** Oh --

**Adam Stacoviak:** That's right.

**Don MacKinnon:** You know what --

**Adam Stacoviak:** Somebody is puppeting and orchestrating with the money.

**Don MacKinnon:** I was actually thinking about this the other day... So there's this huge fear as developers that AI is going to replace all of us. And -- I mean, not even just developers; you're a writer, you're an illustrator... All of these professions are getting supposedly replaced by AI, right? So is that just a transfer of wealth from all of these people to, like, okay, a few handful of companies that control the models? Like Anthropic, and OpenAI... All that money is going to funnel to them?

**Jerod Santo:** Their valuations are just through the roof, right? The valuations on these companies are astronomical, and they only actually make sense if that plays out. If that plays out, they make total sense. Like, invest right now. But if not, then obviously, a lot of people are burning up cash making that bet. That's pretty much the bet they're making, isn't it?

**Don MacKinnon:** I think that is the bet. But is that -- I mean, to be existential about it, is that like good for humanity? Instead of paying people, companies are paying the AI companies. Instead of people. But eventually, they're probably going to pay the same amount. I think a lot of that GPU usage is being subsidized by VC capital right now.

**Jerod Santo:** Correct.

**Adam Stacoviak:** Oh, yeah.

**Don MacKinnon:** The true cost is not there, and you're hooking people in to make them dependent on these systems, and then you're going to raise the price, once the VC money comes in.

**Jerod Santo:** I mean, that's always been the play, right? You just subsidize the price of the thing until you have critical scale and mass, to the point where you don't have to do that anymore... And then you turn on the moneymaking machine, and everybody who is subservient to that is less better off than they were prior. We're all like "Wait a second... This doesn't actually scale. Now it's more expensive", you know?

**Don MacKinnon:** That's what Uber did, right? That's what the --

**Jerod Santo:** Uber was what I was thinking of when I was talking about that. Yeah.

**Don MacKinnon:** Yeah, Uber did that. They killed the cab industry, and now they control transportation. The streaming providers --

2:Well, there's still cabbies out there, they're still doing their thing... And they have had to change the way they work, and so I feel like it was an industry that was rife for disruption, because it was entrenched, and I think unionized as well. I'm not sure about that. It might depend on this --

**Adam Stacoviak:** Definitely in the bigger cities.

**Jerod Santo:** Yeah, the bigger cities.

**Adam Stacoviak:** That was a big thing for New York.

**Jerod Santo:** \[52:06\] And just like not a good -- I mean, it wasn't a good customer service. And now the cabbies, I think -- I mean, I've taken a cab, because they've been hustling for my money. You're waiting for your Uber, and they pull up and they're like "I'll take you right now for five bucks less." Let's roll, you know?

**Don MacKinnon:** Oh, yeah.

**Jerod Santo:** I've got no problem with that. So that's been good, but then there's obviously been fallout as well. So it is nuanced. It's not all good, not all bad. But certainly, Uber did that. They just made it so cheap to take an Uber for so long... And it's just not cheap anymore. Airbnb was the same way. It used to be cheaper than hotels, and now it's -- I go to a hotel. I prefer a hotel to an Airbnb at this point.

**Don MacKinnon:** I'm a big fan of -- especially if you go to places like New York, they have like really nice, boutique hotels that you can go in.

**Jerod Santo:** Yeah, totally.

**Don MacKinnon:** Like "Oh, I don't have to worry about cleaning up after myself for the Airbnb host, so I don't get cleaning fees..."

**Jerod Santo:** There's always one thing that goes wrong with an Airbnb, in my experience... Where it's like, I had to go out of my way for whatever it was. Like, the key didn't work, or the instructions weren't clear on the trash cans, or this thing... And you're like talking to the host... And they're not what it was originally, which was like just another friendly person in society. Like, they're a small business trying to do a bunch of these things... Whereas the hotels pretty much have that all figured out, and you can just go to the front desk... There's just like a professionalism to it. And then it also costs less now, because of the cleaning fees. So it's been interesting to watch that. Because when Airbnb first came out, I was all about it. Like, I was saving money, I was in the city, not at a tourist trap, or something...

**Adam Stacoviak:** Yeah.

**Jerod Santo:** Real people, helping them out, living in someone's house was cool... And now I'm just like "Nah, give me the hotel." So it's been a weird full circle for me.

**Don MacKinnon:** I mean, I think if you're still traveling with like a big group, it's pretty good.

**Jerod Santo:** For sure.

**Don MacKinnon:** Like, you've got like five people or whatever, it's going to be better than separate hotel rooms probably.

**Jerod Santo:** Yes. If you have to get two hotel rooms, one Airbnb will almost always be cheaper. But that I think is the exception to most travel, which is two people, or whatever. Anyways.

**Adam Stacoviak:** Where else has this happened, though? An industry where it's subsidized. I was thinking -- honestly, I was thinking about cars, versus like horse-drawn buggies. Like, was there any subsidization happening then? Because like, it's a step change or a step function change in how humanity works to go from a horse-drawn buggy or cart to a car. And clearly, we have not gone back, you know? So I'm wondering where else a big step change happened in humanity where it was subsidized for a bit... Because that's what AI is. It's a big step change, right?

**Don MacKinnon:** Oh, was gasoline cheaper than feeding your horse, or whatever, or stabling your horse back then?

**Jerod Santo:** Yeah, I'm not a historian. I don't know the answer to these questions.

**Don MacKinnon:** Yeah, I thought automobiles, when they came out, I thought there was kind of like a rich, wealthy person thing. I don't know.

**Jerod Santo:** I'm sure it started there and worked its way down. I mean, that's how most new technologies work.

**Adam Stacoviak:** Right. It was probably like the -- what do you call that? What's the Apple thing with the goggles? What's that thing called again?

**Jerod Santo:** Vision Pro?

**Adam Stacoviak:** Vision Pro. Gosh.

**Jerod Santo:** That has not trickled down yet.

**Adam Stacoviak:** Yeah, it's like that...

**Jerod Santo:** Their sales are trickling out... Well, the smartphone is a better example. Like, when the iPhone first revolutionized phones - which it really did - and internet communicators, it was a rich person's device. And now, there are phones all the way down the pricing ladder to free with a plan, for everybody pretty much, for the populated, civilized world, that nobody could afford that original iPhone if you didn't have all kinds of disposable income. So I do think new technology generally comes out expensive, and works the price down. But the subsidies, I think, is where we were kind of keying in on. Don, you were going to say something...

**Don MacKinnon:** \[56:02\] Now it's the reverse, though, at least from the software and services side, where it comes in cheap, and then they raise it.

**Jerod Santo:** It comes in free.

**Don MacKinnon:** Yeah.

**Jerod Santo:** Quote-unquote free.

**Don MacKinnon:** They get you dependent on it, and then...

**Jerod Santo:** Yeah, it's more of the drug dealer model, which I've said before. The first hit's always free.

**Don MacKinnon:** Mm-hm.

**Jerod Santo:** And it is addictive. So, I mean, it really does work, to a certain extent, where it's hard to go back to life before. Isn't it, Adam? You said that a few times, where it's like "Would you go back?"

**Adam Stacoviak:** No. I mean, especially to like a car, versus...

**Jerod Santo:** I'm talking about with your ChatGPT relationship.

**Adam Stacoviak:** Don't take my ChatGPT away from me, please.

**Jerod Santo:** \[laughs\] See? It is a good product.

**Adam Stacoviak:** Yeah, I really couldn't imagine life -- you know, this word calculator is just too good. It really is. I couldn't imagine life -- I couldn't imagine running businesses without it. You have to have this thing. You have to think so much faster, and it thinks bigger and faster for you. Now, you're still evaluating the output... It's just helping you get to that result, the data faster, or even running scenarios against a business model, for example. Like "Destroy this business model for me." And it uncovers these new ways that you will die. And it either draws new fear in, or it makes you more invincible, because you feel "Oh, I can sustain all that", you know?

**Don MacKinnon:** I mean, it is definitely a faster way to work for certain things. I don't go to Stack Overflow anymore. I go to my LLM and ask it a question.

**Jerod Santo:** Right. Well, Stack Overflow is dying.

**Don MacKinnon:** I mean, where do you guys stand on the whole thing about like trading data? Like, was it fair that these models were trained on this information that was out there? Like, what are your opinions on that?

**Adam Stacoviak:** Let me think about it for a second, because I don't want to be wrong about this... I think my gut reaction is it's public on the internet, so it's the internet's information... But then that doesn't feel good, because sometimes you put personal ideas that belong to me, Adam, on public. Does that become somebody else's idea, or somebody else's thing? It's really hard to answer that without specifics, but I think Stack Overflow in particular, it's like such user-generated content, so it's kind of like, it's owned by the world, in a way... And Stack Overflow enabled the ability to have this new place to go to, this new website to go to, and built all the form and function around the usefulness of exchanging questions for answers, essentially... And hopefully, this dialogue back and forth of which one's right and which one's the one you should follow.

Hard to tell. It really is hard to tell. I think baseline judgment, without more specifics, will be like if it's public on the internet, then sure. Because if I went and studied like a thousand machines could, I could learn the same information. It's just done at scale, and in perpetuity, I suppose. Hard question to answer, really. It's a lot of nuance, a lot of facets to that one.

**Don MacKinnon:** But as you're learning - to take it back to like you could learn all these things, and read all this information, and absorb it - in exchange for learning, you're giving them an ad impression, right? So the people querying through the language model interfaces, they're bypassing that, right? They're getting that from the language model, versus giving an impression to the originator of the information.

**Adam Stacoviak:** Well, there you go.

**Jerod Santo:** Yeah, but Adam --

**Adam Stacoviak:** Therein lies the rub, yeah.

**Jerod Santo:** Adam could read a book, and he could learn from that book, and then he can come tell me what he learned. And I don't think there's anything immoral about that, at all. And so I think when it comes down to infringement on somebody else's creation, I think it should be focused on the outputs more than the inputs. And if you are directly copying and redistributing somebody's creative work as an output, I think you're outside of bounds.

**Adam Stacoviak:** \[01:00:08.04\] That's what I was trying to say, right there. That's what I was trying to say. \[laughter\]

**Jerod Santo:** You can't copy my sentence. I just said it.

**Adam Stacoviak:** It was good, though. I like the way you framed that, because it's all about outputs, versus the inputs. We can all learn things. This is about what comes out, not what goes in.

**Jerod Santo:** But the inputs do need to follow the laws, I think, and the copyright... And you can have things that are consumable and things that are not consumable. So if you're consuming things that are not legally consumable, then you're also outside of bounds. I mean, Anthropic just won a big court case with what they did with these books, scanning books and bringing them into their model.

**Don MacKinnon:** Yeah, but I think that was more -- they won because the plaintiffs didn't form their argument correctly.

**Jerod Santo:** Do you think so?

**Don MacKinnon:** The judge also said like "Hey, if you had actually argued it this way, you could have won, but you didn't. So I can't find for you."

**Jerod Santo:** How would they have changed the argument to be a winner?

**Don MacKinnon:** I don't remember.

**Jerod Santo:** Okay.

**Don MacKinnon:** I just remember that was that the judge's opinion. It's like, he was kind of prodding them along, like "If you had came at this court case from this angle, you would have had a case... But you didn't, so I can't find for you." He kind of like showed them the way...

**Jerod Santo:** Even Google's old book project - I can't remember what that was called... Google Books, probably. And their entire purpose was to index the world's information and make it freely available, or whatever their whole mission is. That project would just take books that were either public domain, or purchased, or whatever they would acquire through libraries, and they would scan them into a digital form and they'd OCR them. And that was a huge court case years ago, that I think they end up winning. I can't remember the actual end result... But I think it's a similar construct, I guess. It's similar in pattern to that, where it's like, you are an owner of a thing. Can't you not digitize that thing that you own? Like, you purchased it, for instance.

Now, the other thing with Anthropic was there was -- and Meta is in a similar situation. There was two kind of angles. Because one was like "Do you have the right to actually do this with purchased copyright, or purchased IP?" Versus they were downloading pirated versions off the internet, and scanning those in... And I think that was the clearly illegal stuff. And I could see why. But -- I mean, libraries have been formed around this entire thing. Like, you get copyright, in America at least, and then you agree to have it publicly available as well. Then you can sell it. So it is --

**Don MacKinnon:** There are specific rules around like distribution though, right? You have the right to purchase and kind of like absorb that content, but distribution is a different thing. There's different rules around it.

**Jerod Santo:** That's why I said output should be what we should focus on, because that is distribution, isn't it? If I'm redistributing 311's new album... Do they make albums anymore? That was the first autocomplete that came to my brain there... And I'm just like verbatim throwing it out - that's clearly illegal distribution of their copyright. However, if I'm using their album as inspiration for something new, quote-unquote new - and that's where it gets really technically difficult to describe whether or not it's new or not. Like some of these new video channels on YouTube - you guys have been watching this - where there's new YouTube channels that are just taking over the charts, and it's completely AI-generated everything.

There's a specific like '80s synth wave band that doesn't exist, that has like has 310 million subscribers or something now, in the last six months; probably a lot of bots. But people are liking this music, and it's like straight up using Suno or whatever it is to create the music... And I went and listened to their song and watched their video, and it's like, this is new music. It is, however, clearly derivative of old music. And for me, that's -- I'm kind of okay with that. Like, this is new. But what Vanilla Ice did to What's Their Names, with the high hat - that was clearly copyright infringement, because he was just redistributing the same exact sound.

**Don MacKinnon:** \[01:04:09.10\] Well, the music industry kind of like dealt with this, right? If you want to take the analogy from the hip hop community and like sampling, right? Early hip hop was all based around sampling.

**Adam Stacoviak:** Beastie was all samples.

**Don MacKinnon:** Yeah, it was all sampling. So they've found "Okay, you can do that", but the caveat is you have to get permission. You have to get a license to do it. If you don't get the license, that's when you get in trouble.

**Jerod Santo:** Yeah. And there's a lot of that stuff getting set up. I mean, Reddit has licensing agreements, I think Stack Overflow as well, with a few companies... But then there's also people that just aren't going to get that license and they're going to just do what they do. And it's kind of a Pandora's box situation.

**Adam Stacoviak:** Who's this Alsup person in this argument? Who's Alsup? Do you know? Was that the judge?

**Jerod Santo:** Which argument...? Are you back on the Anthropic?

**Adam Stacoviak:** Anthropic still yet, yeah.

**Jerod Santo:** Trying to get that figured out...

**Adam Stacoviak:** Well, I'm reading the CNBC, and I want to pull a quote here, but it says "Alsup wrote", A-L-S-U-P, is the person's last name. I'm trying to figure out -- oh, it's the judge. Sorry. U.S. District Judge William Alsup said this. Okay. So what he said was -- this is the judge saying it back to whomever. I'm not sure if this is CNBC, the reporter, the journalist, whoever, but this is the quote. "The purpose and character of using copyrighted works to train LLMs to generate new text was quintessentially transformative", Alsup wrote, "like any reader aspiring to be a writer." So the way he framed it was like they trained them on the works so they can learn how to write. Not to redistribute what it read, essentially, for lack of better terms. Like it read it, consumed it... "Oh, this is how you write."

**Jerod Santo:** Right.

**Adam Stacoviak:** It was like frameworks, sentence formation, story arc, stuff like that, versus "Let's literally redistribute there." But I think it's possible --

**Jerod Santo:** Right, but you can tell them "Give me a story in the voice and tone of Mark Twain", and it will do that. Now, he's long gone and dead, but that's -- and that's kind of what a lot of these music... It's like "Make it sound like the Beastie Boys", you know? Only not.

**Adam Stacoviak:** Yeah, but like, can't you do that with a friend, though? Couldn't I say, "Hey, Jerod, do me a favor. I know you're really good at rapping." You're pretty good at rapping.

**Jerod Santo:** I mean, no...

**Adam Stacoviak:** "Would you mind rapping in the form of Vanilla Ice?" You know?

**Jerod Santo:** Alright, stop!

**Adam Stacoviak:** Yeah, exactly. You might use some of the hook phrases...

**Jerod Santo:** \[laughs\]

**Adam Stacoviak:** And that's what the LLM is doing back to you. All it is is giving you an output of similarity.

**Jerod Santo:** I know... It's tough, because then when you say "Give me this picture in Studio Ghibli style", that's pretty much exactly the style of Studio Ghibli...

**Adam Stacoviak:** Or "Make me a walrus..." Yeah. In that case there, that is --

**Jerod Santo:** That's the same concept.

**Adam Stacoviak:** I mean, couldn't you do that to an artist, though? Couldn't you take anybody who can draw, and draw well, who maybe train themselves on that style, and ask them to do the same thing? I suppose it's about output and potential usage...

**Jerod Santo:** Well, that was a whole industry... Wasn't it duplicates -- what was that called? Copy... People that would actually clone artists' work for resale at a cheaper price. Because they were good enough painters that they could paint it like Picasso, without actually being Picasso.

**Don MacKinnon:** That's been a thing for centuries, right?

**Jerod Santo:** Yeah. I just can't think of what it's called.

**Don MacKinnon:** \[unintelligible 01:07:31.27\]

**Jerod Santo:** Yeah, exactly. So yeah, I mean -- but was that moral and legal? I don't know. I mean, you're stealing his ability to sell...

**Don MacKinnon:** You still had to have an ability to do it... I don't know.

**Jerod Santo:** Yeah. I mean, it took some skill. Just like my vanilla ice wrap is pretty good, but...

**Adam Stacoviak:** Yeah. Alright, stop... You had it down. You were pretty good. \[laughter\]

**Don MacKinnon:** \[01:07:54.29\] Like, there's a difference between "Okay, I learned how to play instruments and I'm in a cover band, covering Vanilla Ice..."

**Jerod Santo:** Right.

**Break**: \[01:08:04.29\]

**Jerod Santo:** Yeah, there's something about the scale and the speed which just changes the calculus.

**Adam Stacoviak:** It does. I agree with that.

**Jerod Santo:** And it makes it more, I don't know, infringy. Infringy, that's my professional word of the day.

**Adam Stacoviak:** I like it. It's actually pretty good, infringy. So close to be infringed.

**Jerod Santo:** Well, Don, you opened up a can of worms here, my friend... And I don't know how we get back on the right track. I guess my response would be "What do you think about that?"

**Don MacKinnon:** About the whole training on copyrighted material?

**Adam Stacoviak:** The infringy, the infringiness of it.

**Jerod Santo:** The infringy... Ness...

**Don MacKinnon:** The infringy part? I mean, a lot of people try to argue it's like "Oh yeah, I'm just like teaching myself." It's like teaching an entity how to read, or whatever.

**Jerod Santo:** That's what Adam said. Right.

**Don MacKinnon:** And I think there's a difference between using the information to learn how to read and write, versus I'm going to give you something that is clearly derived from this thing. So whether or not they're ever going to be able to determine "Okay, this is like 30% Mark Twain, so you owe Mark Twain's estate 30% of your creation's value...", I don't know.

With the previous iterations of this remixing, like with music, they figured out a mechanism of licensing and royalties and things like that. Maybe that's something down the road. Maybe if you're training on datasets as a whole, you pay into a fund that compensates people who are creating.

My fear is that the people with these skills are -- these skills are not going to be in demand, so there's no impetus for people to become an illustrator, or a writer, or a developer... And so what happens 20 years from now, when there's no one coming into the ecosystem anymore, doing these things?

**Jerod Santo:** We've just talked about that with Thorsten Ball in light of open source, and our new agentic coders, where it becomes almost free to just generate some code. Why open source, maintain and share libraries when a coding agent can just create me a new auth library very quickly? One-offs for everything. Why wouldn't you just have a bespoke everything? And what does that look like in 20 years? Because all of a sudden, I'm not incentivized to go find open source, download open source, contribute to open source, open source my own code, when it's just disposable anyways. All code is disposable.

\[01:12:01.27\] And then we lose public code eventually, because -- I mean, this is just like a potential truth, and not necessarily that's going to happen. But yeah, it's similar with illustrators and creatives of all kinds, where there's no longer incentives to do that. Although I think when it comes to music and art, and even writing, people are going to continue to do it because they love it. And maybe that's the same answer with code and open source.

People didn't originally make music to make money. They'd make music and they'd want to make money so they can make more music, you know what I'm saying? And then some people found ways of getting real rich off that, and of course, the celebrity culture, and there's all other reasons why people make music... But a lot of it's just because people love making music. And so I don't think humans are ever going to stop making music, even if the robots are better at it. And maybe that's true of illustration, and photography, and copywriting... I don't know. Novels... But it's not necessarily -- it doesn't feel good, because those people don't have a way of ever making money, whereas they used to. But I think they're going to keep creating, because I think fundamentally, we are creative.

**Don MacKinnon:** It'll be one of those things though where it's like it's never at the scale that it was, or it's never something for like creating commercial value. Like, I'm never going to be an illustrator and make money off it. I just do it for fun.

**Jerod Santo:** Potentially. I think that's a real potential.

**Adam Stacoviak:** That's where I think your position, Jerod, where you say "input/output." But then I would also add usage, because I feel like it's not actually deployed to the world in a refactored format from input to the LLM, output as requests from the prompt, you know, reviewed by the human and used, deployed into the world. I feel like that last mile is potentially where the hook is. Because if I end up using copyrighted material knowing it was, or Studio Ghimli, or Ghibli, or however you say it, if I'm breaking the copyright law by trying to act like somebody else -- force the LLM to help me be similar to somebody else's creative works, it's up to me to have the moral and legal boundaries of just following that, I would say. The LLM is just trying to give me what I want, and it's my usage that takes me to the legal side of it. That's how I feel, I guess.

If I wanted to recreate something similar to Mark Twain, if I'm the kind of person who would do that and would put it out there... Like, it's Adam, but it's also Mark Twain - well, then that's kind of my fault, right? Not the LLMs.

**Jerod Santo:** Well, I'm not blaming any computer programs. I'm just talking about how we use them. So at the end of the day, Anthropic the business is getting sued, not Claude personally. So I agree with you on that one, for sure.

**Adam Stacoviak:** Yeah.

**Jerod Santo:** But it's still complicated, and we can't simply rely on the morality of other people. We have to actually institutionalize rules and consequences for rules, and I think it's going to be super-muddy over the next 10 years, trying to figure this out. And I think there's going to be winners and losers, and hopefully the losers aren't the people who are really just good at drawing and making music and writing poetry. But they might be. We might be.

**Don MacKinnon:** To take it back to like software development... Okay, so the selling point is like "Okay, seniors can be 10x productive." Now I have code gen, I have agents, and I have conversational AI in my IDE and all this, and so I can produce more code. So maybe I don't need to hire juniors anymore. But if there's no juniors being hired, then eventually, who's going to replace all these senior level people?

**Adam Stacoviak:** Yeah, I think that's where --

**Jerod Santo:** The agents themselves, I don't know.

**Adam Stacoviak:** Yeah, maybe so. The advancements of the agents may transcend the need for a future true junior, or what we call a junior/human being developer.

**Jerod Santo:** \[01:16:14.07\] I think the answer to Adam's point is like "Where does the technology plateau, if at all?" Like, if we're getting to the plateau, I don't think any engineers really - except for the really sucky ones - are going to go anywhere. But if it continues to advance at the rate of change it has... And I've just been very impressed with the most recent round of models, where I was unimpressed previously. Same thing with the image gen stuff. It's way more compelling now than it was 18 months ago. And if it stays where it is, I think we're not going to have these existential problems that we're discussing. But if it continues to change at the rate that some of the capitalists who are highly incentivized to say it's changing, such as Anthropic's CEO, who says 18 months from now there'll be a reckoning, and "I know, because I can see the future, because the future is inside of our walls, so to speak." And if he's right about that, then I think everything does change, and we don't have answers to -- and maybe we don't need juniors, or seniors... But maybe it's going to plateau kind of where it is. I don't know the answer to that.

**Don MacKinnon:** I mean, I think there's some exaggeration on both sides. The model companies, they have to say that, because they've received money to make that happen...

**Jerod Santo:** And they're currently raising more money...

**Don MacKinnon:** Yeah. I mean, billions and billions and trillions of dollars, right? So they have to say that. But I don't think that's necessarily accurate. We'll see. But on the other side, will I get to the point where I won't need supervision? Maybe it's plateaued, maybe it hasn't. If it hasn't plateaued, then maybe there is no need for developers, right?

**Jerod Santo:** I mean, it's getting pretty good, and I could imagine 18 months from now me saying things like "I don't even look at the code ever anymore." I'm just telling the thing what to write, at small portions, and building up systems with my prose, and it just works. I'm saying that with like personal scripts and stuff right now, things that only my machine -- like I told Adam recently, like "Yeah, I'm just letting the thing write it, and then I use it, and if it works, it works." But that's not leaving the network, you know what I'm saying?

**Don MacKinnon:** I mean you can still say that with code that like, okay, I hire a code school boot camp grad...

**Jerod Santo:** Sure.

**Don MacKinnon:** And they write they know how to write React, but they don't necessarily know TypeScript very well. And they write code that works, but it's not written in a way that is great, from someone looking at it from like a senior developer perspective. You're like "Oh, this code is not good, but it does do what the JIRA ticket said."
**Jerod Santo:** Right. But they didn't write it in 24 seconds.

**Don MacKinnon:** Yeah...

**Jerod Santo:** That's a difference. And I can say "Nah, not like that. Like this." And it's 30 seconds later, and I have my next iteration. And so I think that person - they're dead to me.

**Adam Stacoviak:** Oh, my gosh... \[laughter\] "They're dead..."

**Jerod Santo:** You know what I mean.

**Adam Stacoviak:** Yeah, I feel ya. I feel ya.

**Jerod Santo:** In the functional sense of me going to -- I'm not going to go to that person already. So...

**Don MacKinnon:** Yeah. And I think that a lot of these bootcamps - not to like crap on them, but they sprung up when there was a really high demand for developers, and there was not enough developers to fill seats, and so they turned people out that maybe shouldn't have been writing code to begin with...

**Jerod Santo:** Right.

**Don MacKinnon:** Who were just looking for it from a paycheck perspective, and not like the craft of writing code perspective. And the not as skilled people are always going to get filtered out, no matter what.

**Adam Stacoviak:** I don't think it's going to kill software, that's for sure. I don't think it's going to kill a software developer... I just wonder if really the end result of all this is, like you said, I don't get the code anymore. And maybe that's true for certain things, like you said, for scripts.

**Jerod Santo:** \[01:20:03.19\] It's already true.

**Adam Stacoviak:** Yeah. I can't disagree that since that conversation I've had this this fear... I'm not sure I want to call it a fear. It's like this - I can't let it go. I know something not a lot of people know, and I have concern. My friends have no idea about that conversation. My friends have no really idea about the deep conversations we had with Steve, or others, that scared the crap out of us, basically. That conversation with Steve Yegge was probably the one that scared me the most. I think that was that conversation you said "What do we do about open source?" And the moment you said that, I was like "Yeah, what do we do about open source?" And I kept thinking about the ability to generate quickly. Now, does it kill all open source? No. I think it will diminish the need for such widespread open source. Like, do we really need to widespread open source larger frameworks? Yeah, probably. But at some point we may care less about the code, because we've got quality assurance checks that balance out, and they are always true, and so we look at the code less. I've really been a little concerned about open source since then.

**Don MacKinnon:** I mean, does that lead to the development of like new programming languages kind of going away? Like, if what we have out there works well enough, is there no impetus to like make another language?

**Adam Stacoviak:** I think it comes down to who's writing it and who cares, right? Like, you just said "good code". And I was thinking -- when you said "good code", I was like "Well, just because I think you said a React developer wrote some TypeScript", is that right? Was that the analogy? Or was it reversed.

**Don MacKinnon:** Yeah, they know React, but they don't know TypeScript very well.

**Adam Stacoviak:** Right. They know React, they don't know TypeScript very well. But it works. So is that good code? What do we call good code? Something that a human can read, and it's well formed and understandable, or something that actually gets the job done and works? Which one of those is good code?

**Jerod Santo:** Well it has to it has to work correctly, first.

**Adam Stacoviak:** For sure.

**Jerod Santo:** And then it has to be correct, or maintainable. I think its ability to change easily is one of the prime characteristics of good code. And that's why I said I think the calculus changes if these things continue to get better at a rapid pace, because maintenance might not be the same concern as it always has been. I've always written software to be maintainable, because any software product that's useful is going to continue to exist and change. It's never finished. And if you can't change it, then you're atrophied and you're stuck.

And so that's why I say "Slow down to go faster." Get it right in the first place, you go faster over the long term. However, that calculus changes if now we can generate quickly small amounts of code that are good enough to replace - not refactor. Replace. Rewrite. It used to be very expensive and tool hardy to do that. But maybe it becomes very cheap and quick, and you can get 10 versions, which one's the best, plug it in... Oh, it's not the best anymore? Plug in a new one. Just keep plugging in. You know. Then all of a sudden just the way that we think about building software does change.

**Adam Stacoviak:** It does.

**Jerod Santo:** And a lot of my old tenets, a lot of the things I've been saying for 30 years - that's not true. \[unintelligible 01:23:13.21\] They go away. They're wrong now.

**Adam Stacoviak:** And that's the part that scares me the most, I'd say.

**Jerod Santo:** Maybe I go away.

**Adam Stacoviak:** I'm not even sure -- I keep using the word "scared"... I'm not fearful at night.

**Jerod Santo:** Maybe I'm dead till then.

**Adam Stacoviak:** Maybe you're dead till then...

**Jerod Santo:** \[laughs\]

**Adam Stacoviak:** That's the part that really gives me concern, I would think then, because at that point -- it's just a whole different world when the calculus changes. When you thought truths for 30 or 20 years were true, and suddenly a lot of these foundational truths are now up for grabs for change... I think a lot of it changes, really. You know, how we think... Like you said, building software has been about sustainable software, and that's been good software, sustainable software.

**Jerod Santo:** Right.

**Adam Stacoviak:** But if you don't have to maintain it and you trust the thing that generated it, and so long as it knows the language - what is good code at that point? What is the code we need to have to get the job done?

**Jerod Santo:** \[01:24:06.00\] This, Don -- this is why everybody wants AI on their pitch decks.

**Adam Stacoviak:** That's why.

**Jerod Santo:** Because the implications are massive. And anytime you have this much up in the air, you know, people are looking to catch some of that for themselves. And so they want the AI solution, because it's changing stuff, and I want to be involved. You know, I want to be on the upside of this potential future, not on the downside. Because the downside is super-scary, right? A lot of people's skills become -- invaluable actually means valuable? That's a weird word, right? Not valuable. I always thought that was weird, invaluable means valuable. But non-valuable, perhaps.

**Don MacKinnon:** Yeah. And invaluable is like what? The valuation can't be measured.

**Jerod Santo:** Yeah, exactly. But it does sound like -- it just means very valuable, but usually, "in" means not. Anyways, go ahead.

**Adam Stacoviak:** What about unvaluable? Does that work?

**Jerod Santo:** Yeah, you become unvaluable. No, it's not. But we're making up words today.

**Don MacKinnon:** No, there's a lot of fear, and I think making decisions on fear is not always a great thing...

**Jerod Santo:** Sure.

**Don MacKinnon:** ...so companies are embracing AI regardless if they need to or not.

**Jerod Santo:** Just in case?

**Don MacKinnon:** Yeah. They're like "We have to have a story for AI, so let's do the thing--"

**Jerod Santo:** "We have to have a mobile app."

**Don MacKinnon:** Yeah, totally. It's like the mobile trend.

**Jerod Santo:** "We have to outsource."

**Don MacKinnon:** Like, is it the right decision for the long term? You have to ask yourself that question as a business owner.

**Jerod Santo:** For sure.

**Don MacKinnon:** Like, does it make sense, or are we just doing it to follow the trend?

**Jerod Santo:** So what does Searchcraft look like over the next 12, 18, 24 months? Like, you're raising more money, you're switching a little bit of things...

**Don MacKinnon:** Yeah, we're raising some more money, and we're also -- you know, we are throwing out some of our AI initiatives, because we have to... \[laughter\] Since if you want money, you've got to have AI.

**Jerod Santo:** That's right.

**Don MacKinnon:** But no, it's because people are asking for it. It's what people are excited about, right? They want a search experience that has some AI, and it's -- at least that natural language and semantic reasoning. So we're building for what people are requesting. So that's what we're doing.
As far as the next 12 months, we're looking to kind of work with more customers, and we're also looking to expand into more platforms. We rolled out with like our very first initial handful of frontend SDKs. So of course, we did a JavaScript one, we did a React one, we did a Vue one... But we want to get into other places where developers are at as well. We want to get into Laravel, get into Ruby on Rails, and all of these other areas as well.

**Jerod Santo:** A lot of easy wins there. Ways you can scale horizontally across different ecosystems, and just provide the service to more people that way.

**Don MacKinnon:** Yeah. So there's language platforms, tthere's also like direct integrations with other systems... Because at the end of the day, search is really -- it's a mechanism of information discovery, and information discovery is a way of delivering the most relevant and accurate information to a system, right? So we're essentially like a data pipe for any kind of platform. So learning more about what people are building, and how we can give them the information they're looking for in a quicker and more accurate way... That's the problem we're solving for. So probably more integrations for these other platforms, you know.

**Jerod Santo:** Mm-hm. Is there a common API integration that anybody can go out and code against? I assume you haven't attacked the Elixir ecosystem quite yet...

**Don MacKinnon:** No.

**Jerod Santo:** We're pretty small, but... Can I code against a REST API or something, and get information in and out of Searchcraft?

**Don MacKinnon:** Yeah, so our core system is like a REST API, right? So the integrations and the SDKs just make it more convenient.

**Jerod Santo:** Yeah.

**Don MacKinnon:** But anyone can use a REST API. We also did put out an MCP server. So if you didn't want to manually configure your search index cluster, you could just pull down the MCP server project and tell it to do that for you, and then it does it.

**Jerod Santo:** \[01:28:15.20\] Nice.

**Adam Stacoviak:** That's the better way to do it, right?

**Jerod Santo:** That's right.

**Don MacKinnon:** Yeah, sure. Save yourself some time.

**Don MacKinnon:** Yeah, so we're API-based. I like to think we have pretty good documentation. If we don't, someone please tell me; I'm sure they will.

**Jerod Santo:** For sure. It's one of our favorite things to complain about.

**Don MacKinnon:** But yeah, as like a developer-focused company, documentation was very important for us, and my mentors have impressed that upon me, like "Hey, if you're going to do a developer tool company, your documentation has to be good, or people are going to come for you." As a developer, I find it incredibly frustrating, and I'm going to complain about some people right now, because like... AWS - a lot of people use it, but... Come on. I can't be the only one who thinks their documentation is not good.

**Jerod Santo:** I've largely avoided AWS from the get go, except for S3, mostly because of the documentation, and then just the web UI was just a hot mess forever, and it probably still is. They've got lots of services, so it's not an easy problem to solve, but the docs were always lacking. And so I was always looking for other platforms, except for S3, which kind of became a de facto for object storage. The other services of AWS I've never really glommed on to. I used CloudFront a little bit, and their domain service, their DNS service Route, whatever it is, 53...

**Don MacKinnon:** Route 53, yeah.

**Jerod Santo:** Yeah. And that's about it, because of that reason.

**Don MacKinnon:** I mean they literally have a service for everything... So much so sometimes it's a decision paralysis situation, where you're like "I don't know which one to choose." But I think their weakness in the documentation has kind of like led to opportunities for other companies.

**Jerod Santo:** For sure.

**Don MacKinnon:** These other cloud providers that make it a simpler experience for developers, like Vercel, or Fly, or these other ones.

**Jerod Santo:** Mm-hm. Awesome. Well, Searchcraft - is it well baked? Is it ready for use? Get out there and try it? That's the situation?

**Don MacKinnon:** Yeah, so I mean, obviously, like I said at the beginning of the talk, we're not trying to do everything, but what we do, we try to do very well. And what we try to do very well is content-based search; not necessarily log searching and whatnot... But yeah, people can either sign up for the cloud account and try it there if they don't want to host it anywhere, or they could download the Docker image, and run it locally, and play with it...

**Jerod Santo:** Very cool. Adam, any other thoughts or questions before we let him go?

**Adam Stacoviak:** I was just gonna make note of what I think is a bunch of AI-generated images... Don do you know about this?

**Jerod Santo:** He's smiling...

**Don MacKinnon:** Are you holding me acc-- okay, so...

**Jerod Santo:** \[laughs\] Are they Studio Ghibli style?

**Adam Stacoviak:** I mean, I'm just noticing your website, and I'm just noticing that they all seem -- especially this one that has you on it, when you were a pilot, Don.

**Don MacKinnon:** Oh, okay. You're talking about the Dr. Don?

**Adam Stacoviak:** That's right.

**Jerod Santo:** Dr. Don. Tell me more.

**Don MacKinnon:** Okay, \[unintelligible 01:31:09.27\]

**Adam Stacoviak:** \[unintelligible 01:31:10.06\] I've browsed away from it, and I can't find where I was at.

**Don MacKinnon:** So we kind of go after Elastic a little hard on our site...

**Adam Stacoviak:** That's right. Elastic versus Searchcraft.

**Don MacKinnon:** So it's like a feeling bloated page, right? And so we're kind of making fun of these -- you know, the whole NLP, or what was it... The ozempic drugs, right?

**Jerod Santo:** Oh, yeah.

**Don MacKinnon:** To lose weight.

**Jerod Santo:** Feeling bloated?

**Don MacKinnon:** Feeling bloated, right? And so Dr. Don is not a real doctor, but I prescribe Searchcraft every day to be less bloated, kind of thing...

**Jerod Santo:** That's funny.

**Adam Stacoviak:** At the very the very bottom there. And that's -- that is you.

**Don MacKinnon:** That is me. That is my face on somebody else's body.

**Adam Stacoviak:** See?

**Jerod Santo:** \[01:31:55.06\] That's cool.

**Don MacKinnon:** So we do --

**Adam Stacoviak:** That's cool. \[laughter\]

**Jerod Santo:** That's cool. That's the other problem with these things, it's so stinking cool you're like "Hm..."

**Adam Stacoviak:** It is cool. But I just noticed that every image on your site that's like a person seems to be this new, trendy -- I don't know if it's trendy or not, but it seems to be like out there a lot, so I guess that's trendy...

**Don MacKinnon:** Yeah. So we have a very strong -- it's like a science fiction space kind of theme is what we have... But yeah, my co-founder, his background is in design, and so he makes a lot of these. He has the idea for like what he wants to do for the page. This page is going to have kind of this theme... And then he uses tools like Midjourney to get part part of the way there, and then he'll take that kind of generated image and then like edit it, and refine it in like Photoshop, or whatever.

**Adam Stacoviak:** I didn't hear you say the word Vectron, unless I missed that part. Did you say Vectron? Did you talk about the dashboard?

**Don MacKinnon:** Oh no, we can talk about that if you want, and talking about the space theme. It's really cool. Vectron is our user dashboard for people who are on Searchcraft Cloud. It's where you sign up for your account, you manage your plan... There's a UI for managing all of your search cluster, and the schema thing.

So part of Searchcraft is, as far as our experience building out search for customers - we would hand it off to these startups, and maybe they didn't have search experts on their team after we handed it off... And so they'd come back and be like "Hey, can you tweak this setting, or add some synonyms, or whatever?" And we were like "Okay, we can, but we'll have to charge you our rate." And that's kind of a gap, we feel like, in the market... Like, let's make it easy enough so non-developers can tune relevancy for their search index. So you can do that in Vectron. You can go in, you can add synonyms, you can change language settings, you can do things like boosting and waiting on your fields, and not have to do a developer -- it doesn't require a deployment. You just save it, and it updates it right away, without having to bring your cluster down, or do a deployment, or anything like that. So you don't have to talk to your developer once it's set up initially.

**Adam Stacoviak:** Now that you say that, "You don't have to talk to your developer", it makes me thing we've been trying to do that for years... And now we're finally there, where we can do that, I guess, ad nauseam. It's a big deal.

I like the imagery, I like the space-ness of it... It's cool. It's got a good tone to it. Vectron is a cool name... I like very much so that old school computer that you've got there to show it off on that comparison page; we'll link it up in the show notes...

**Don MacKinnon:** Oh, yeah, dude --

**Adam Stacoviak:** ...for Elasticsearch and Searchcraft.

**Don MacKinnon:** If you go in and go through the account creation process, it's like, we're very inspired \[unintelligible 01:34:48.27\]

**Adam Stacoviak:** Oh, yeah.

**Don MacKinnon:** That's kind of like the inspiration for that.

**Adam Stacoviak:** Yes, I like it. Being inspired is cool. It's cool. That's all I've got. I was just noticing, as I was browsing these various styles of imagery, and I wanted to -- since we've been so deep in AI, I was like "Well, these seem like they're AI-generated, so they probably are."

**Don MacKinnon:** Yeah, the images -- well, there was human curation and intervention...

**Adam Stacoviak:** You know what, I feel like we have to apologize --

**Jerod Santo:** It's a jam session.

**Adam Stacoviak:** Yeah. Somebody was like "Hey, did AI do that?" Yeah, absolutely, because I'm concepting, and I'm ideationing with my new buddy. That's how it works.

**Don MacKinnon:** Yeah. To take it back to development - it's like a pair programmer. Like you're collaborating. So instead of collaborating with the person, you're collaborating with the machine. Same with design. You're collaborating with Midjourney to make images... But the idea still comes from the human.

**Jerod Santo:** That's right. For now.

**Don MacKinnon:** For now.

**Adam Stacoviak:** For now.

**Jerod Santo:** Well, Don, this has been awesome. We look forward to seeing you in Denver, at our live show, hopefully... And Searchcraft.io, of course. If you haven't checked it out yet, go see Dr. Don at the bottom of the Elasticsearch comparison page... As well as some -- there's some cool comparisons. Each one has their own vibe. The Meilisearch versus Searchcraft is like an old school, pixely 8-bit pong comparison. So each one has their own theme, which is rad. Any final words, anything else to say before we let you go?

**Don MacKinnon:** Yeah, I just encourage people to check it out and give feedback. We're very much a collaborative bunch here, so if you have ideas about things, we'd love to hear them. And we'd love to hear what you're building.

**Jerod Santo:** Awesome.

**Adam Stacoviak:** Nice to meet you, Don. Thank you.

**Jerod Santo:** Yeah, thanks for coming on.

**Don MacKinnon:** Great meeting you guys.
