**Nadia Eghbal:** I'm Nadia Eghbal...

**Mikeal Rogers:** And I'm Mikeal Rogers.

**Nadia Eghbal:** On today's show Mikeal and I talked with Jan Lehnardt. Jan is a developer and business person from Berlin, co-creator of Hoodie, vice-president of Apache CouchDB and co-founder and CEO of Neighbourhoodie Software.

**Mikeal Rogers:** With Jan we focused on building healthy communities. We talked about how he approaches community organizing, his evangelism of CouchDB, creating Hoodie and what it means to build sustainable open source.

**Nadia Eghbal:** We also talked about drive-by contributions, contributor funnels and the differences between popular and healthy open source projects.

**Mikeal Rogers:** Hey Jan, how's it going?

**Jan Lehnardt:** I'm fine, thanks. How are you?

**Mikeal Rogers:** Pretty good, pretty good. I've known you for a long time and really learned a lot from you. Why don't we get into... Maybe we can start out before I met you and maybe talk about some of the... Where did you start in open source and what did you learn there?

**Jan Lehnardt:** I think my very first interaction with something that I would call an open source community was a small - at that point larger - German community that had a website that would explain how to do websites, which was kind of revolutionary at the time, because you barely have a medium that explains how the medium works; that totally blew my mind, it explained everything about how the web works. I've been a fan of the web ever since; it had a nice community attached, and everything.

I quickly learned all the HTML and CSS that was around in '99, and then PHP came around and I wanted to check that out, and also found a community there. That's kind of how I got started.

I've spent nearly ten years in the PHP community, from just learning and understanding how it all work, to eventually becoming a core contributor.

**Nadia Eghbal:** How did you two meet?

**Mikeal Rogers:** We met through Ted Leung He is sort of like a guy behind a guy for a lot of Apache stuff, and so I worked on this thing called Chandler Project at Open Source Applications foundation. That was fun, but T. J. was there, I believe he was a mentor to the Apache project, so he introduced me and Jan in the early CouchDB days.

**Nadia Eghbal:** Nice. I met Jan through a cold email. I think I stumbled upon Hoodie somewhere, and I was like "Oh my gosh, this is the most perfect project ever!" because there was like a whole section that was talking about all these different experiments they were doing for funding, and he was so friendly and splashy. I was just like, "This is the kind of project that I wish more projects looked like."

**Jan Lehnardt:** That's very nice to hear, thank you very much.

**Nadia Eghbal:** Well, thank you, because that conversation... I just sort of like enthusiastically emailed you, like "Oh, can we like... I can understand better how Hoodie gets funded, and all this stuff." But I ended up understanding so much more about open source culture and community-based on that conversation... I thought we were just gonna talk about funding, but just hearing some of Jan's experiences...

I remember Jan saying, when he was talking about CouchDB, that he didn't actually start CouchDB, but a lot of people associate him with it because he was the one who was talking about it all the time. So it was cool just to hear from someone who's had the experience... Like, it doesn't always matter who writes the original code, but also all these other different support functions that help projects grow. So yeah, it was super influential for me.

**Mikeal Rogers:** Yeah, I remember when I was getting into CouchDB that the tone and - for lack of a better word - the personality of the project was very Jan, and attached to Jan.

\[00:04:05.25\] I think I remember a blog post that Damian did about how popular it's been with basically no marketing, unless you count Jan, he said. \[laughs\]

So I'm kind of curious, how did you get involved into CouchDB and how did you end up taking on that role, as an evangelist for it and a community organizer?

**Jan Lehnardt:** It was a time nearly ten years ago when I was adrift... I was doing stuff, but I didn't know what I was really doing. I was starting university and had an RSS reader a million entries long; I just read everything I could find on the internet when that was still possible, and eventually found Damian's blog and learned about CouchDB. But at the time I did a bunch of experiments with other things as well, with native Mac app development; I have some friends in that community still, which is kind of nice, but it didn't turn out to be the thing that I really wanted to do.

Then I eventually learned about CouchDB and the thing I was doing professionally at the time was PHP, MySQL work, specifically scaling MySQL. It was a fun topic ten years ago; it's kind of solved these days, but it was quite cutting edge then. And then when I read about the principles behind CouchDB I thought, "Well, I'd better get behind this, because then I'll be out of the job real soon if I don't get on board with this."

I was kind of a little bit early... We now have this whole NoSQL movement and CouchDB kind of kickstarted all that. I had a kind of fear of missing out really early on, so I got involved. This topic specifically is really obscure. Damian, the inventor or CouchDB at the time had his development environment on Windows, and I had my development environment on everything but Windows, so I had to figure out how to get CouchDB going on my machines - on Mac, on Linux, on all the UNIX systems.

I emailed, I said "Here's my plan for porting this, and supporting it", and he's like "Yeah, give it a try", and I gave it a try. That worked out, and I kind of stuck around since then. I wrote the How To Build CouchDB For Your Linux Distribution readme. That wasn't really a guide or documentation or wiki entry. And then started hanging out with Damian online and learning more and more about CouchDB and helping write the PHP library, example applications, trying to attract spam bots to a forum that I wrote to show how scalable CouchDB is, because all the spammers were using it. It was quite fun.

**Mikeal Rogers:** \[laughs\] That's funny. So in those really early days when you were first starting, the community is growing and you're trying to bring something to the community... What are the things from the PHP community that you wanted to be different or the same? What did you wanna imbue in the community as you were sort of fostering it?

**Jan Lehnardt:** I've learned a lot of terrific things from the PHP community. Technically, some of the smartest people on this planet have taught me stuff that still helps me in my day-to-day job. Some of the folks running Facebook's infrastructure these days have 10-15 years ago spent a lot of free time teaching a 17-year-old kid from Germany a lot of stuff about computers, which was really nice. But there was also a distinct culture; not necessarily the PHP project itself, although it also had a specific culture, but also the surrounding communities, especially the German PHP community.

Just as an example for one of the things of how then it was really, really terrible... You know how Perl scripts have the file ending .pl, and on IRC you can ban people based on the domain they're connecting from, so we just banned all Polish people just because they looked like Perl scripts, from our German IRC channel. For no reason. \[laughter\] So if you look at the German-Polish history, this was a really terrible idea. \[laughter\] But it's fun, because it was just a bunch of guys on IRC being funny. "Oh, it's so cool, no PL people. No Perl scripts. Ha-ha!"

\[00:08:13.22\] Back then PHP was the new kid, kind of what you're seeing in NodeJS these days... And you have to pick a bunch of fights to prove yourself, so Perl was one of the fights that we picked early on. But this complete lack of empathy for anyone was throughout everything, including IRC etiquette. The person who did the bug triaging on the PHP issue tracker, a retired Finnish army guy, with a very drill sergeant tone, being really nasty to a lot of people, but being very effective at pruning popular open source project bug lists, but generally a lack of empathy. I've learned over the years that I'm a very emphatic person, and I kind of wanted to avoid the bad of this, like excluding people based on their domain name, for example, or other silly things.

**Nadia Eghbal:** Did you have a moment where you just became a nicer person? Or was it over time that you matured?

**Jan Lehnardt:** That was a couple years later, maybe around 2010, when Twitter was starting to become really good at drive-by snark, like really hurtful cynicism, criticizing all the people... At some point I felt that when I was doing that I wasn't helping anyone, I wasn't adding anything useful. Other people will be snarkier than I, or faster at snark than I was, so it wasn't worth doing. So I decided to just be nice on Twitter, just not be not nice on Twitter, and I kind of adapted my whole online persona; it got me started there.

**Nadia Eghbal:** I have a really hard time picturing you being a not nice person.

**Jan Lehnardt:** I can show you chat logs from 15 years ago, I was a terrible person.

**Nadia Eghbal:** We need evidence! \[laughter\] And what specifically were you doing around CouchDB to grow the users and contributors and spread the word?

**Jan Lehnardt:** A bunch of things came to mind right when you asked the question. I was very active on the users mailing list. Typically, open source projects back in the day had mailing lists where people could ask questions. I knew this from other communities as well, they were kind of hostile... There were very strict rules about "Oh, is this the right question to ask?" or the way you asked the question is not exactly answered in the Frequently Asked Questions, but it's actually in there if you just know where to look, but that's the point for beginners, they don't know where to look. Other communities I'd seen were like, "Read the freakin' manual!" I didn't want that. If somebody asked the same question for the 500th time, I would answer it and point to the documentation where to find it and explain the thought process behind it so they can find it the next time and everyone who reads it understands how that all fits together so maybe they can point to stuff later.

One of the revelation moments were when I was on vacation or was gone for a while, like a week or so, and other people started replying in my voice - in the same tone, in the same kind of emphatic voice... And I was like, "Oh, I kind of created a culture here. That's kind of nice." So that's one of the things.

I was fortunate enough to be relatively flexible with my life, and one of the challenges I set for myself - because again, I knew this from the PHP community... Germany had the first PHP conference, which I was at back in 2001 or 2002, really early on. I've since grown to love the PHP conference life, where a lot of people from all over the world come together and have a good time, and I wanted to be a part of this and not having to pay for it, basically... Because we'd usually be invited and paid for everything.

\[00:12:09.20\] So I wanted to become a speaker. I asked a bunch of local user groups to give talks, and one of the talks I proposed was about CouchDB, the new thing that I'd found that year. And they said, "Oh, that was really good. I blogged about it", they blogged about it, then another user group in a different country asked me, "Hey, can you do this again but in English?", so I did that again, they paid for my train over there to Switzerland...

Afterwards I said to them, "This was my first English talk, was it any good? Can I apply at conferences?" They said, "Yeah, sure." This was better than a bunch of the talks that you'd see at other conferences. And I don't wanna brag, I'm pretty sure my talk wasn't that good, but it was okay, they gave me enough confidence to apply at bigger conferences, international ones.

In 2008 OSCon flew me over to Portland, I think, and that's where I met Mikeal, coincidentally. I gave my first US CouchDB talk there. And yeah, I just wouldn't shut up about CouchDB. I had conferences where my other nerd friends would hang out, and eventually... When you introduced me, it's like my claim to fame for CouchDB is less like any of the technical contributions that I've done - which I've done a lot, but none of them are standing out, really. But the thing I can credit myself with was that everyone who knows CouchDB, either I told them or they learned it from someone I told. Then there are a couple hundred people that read Damian's blog, but that is... I just spend a lot of my personal time being the face and voice of CouchDB.

**Mikeal Rogers:** And now you're one of the faces and voices of Hoodie, right? You've started this new project that's also going really well, we heard a little bit about it earlier. Similar to the previous question, what did you take from the CouchDB community and what did you wanna do differently when you started up Hoodie and you had kind of a green field and you could really be a founder and leader of that community.

**Jan Lehnardt:** Yeah, green field is a really good word. I was really excited to not have... I learned a lot through being part of the CouchDB community, helping setting it up, and I learned a lot about other open source projects as well. The more popular one gets, the more you learn about others as well. Especially if you have a database project, you get to speak with all the language communities, so you learn a lot from these as well. I understand how the Ruby people work, and the Python people, and the PHP people and so on. That was kind of at the genesis of what's now the JavaScript community, which is also nice to know. So a lot of experience to draw from there.

The way I would explain it - maybe I have to explain how Hoodie got started. We had a project in Couch called Couch Apps, which was this idea of running full HTML web apps inside a database. It was a neat idea, but kind of a dead end. We thought we'd revolutionize web development with it. One of the problems with it was that we only ever implemented 20% of the vision, and then one year at a conference the Hoodie co-inventor, Gregor Martin, showed me an app and was like "Hey, I build a Couch app. I noticed that there was 80% missing, I just filled that up with a bunch of coffee script and NodeJS. I think it works... Wanna check it out?" I checked it out and I was like, "Oh my god, this is what we want. This is the thing." But I realized very quickly that we have to break from CouchDB with its particular constraints to make this more mass appeal thing. From the failure of Couch Apps and the web community not adopting it, we rethought about how can we position the project that we wanna be as ubiquitous as jQuery, that is appealing to a lot of people, and that kind of informed the whole rest of the project, basically.

We started thinking about community and contribution and ownership and funding before we wrote any code or before we had any of the technical demos that we had early on.

**Mikeal Rogers:** \[00:15:57.12\] That was great. We're getting ready for a break now... When we come back, Jan's gonna talk a little bit about the relationship between healthy and popular open source projects.

**Break:** \[00:16:08.16\]

**Mikeal Rogers:** Okay, we're back from the break, and we're gonna hand it over to Nadia to get into some of the popular and healthy and sustainability topics that she's so passionate about.

**Nadia Eghbal:** Yeah, I'm kind of curious to have this be a little bit of an informal chat between us around some of the different topics that have come up around building healthy communities. I think I actually got this language from you, Mikeal, around popular versus healthy projects. Or at least the topic of healthy open source; you had written a post about that.

One of the tensions that I see in building healthy communities is, well, what happens if a project is being used by tons of people but it's not healthy, whatever that definition is? Do they have any incentive to change? Is it necessary that a project is healthy in order to thrive? So maybe just starting by talking a little bit about what does it mean for a project to be popular, versus healthy. I'm curious whether we all have the same definition around it.

For me, a popular project is one that's being used by a ton of people, or a ton of people depend on it, and a healthy project is one that has a lot of great processes and positive culture around good governance. People understand how to join, how to contribute, people feel valued for their contributions. Does anyone have similar or different definitions?

**Mikeal Rogers:** I think if you're looking for a metric, you could probably define it as some kind of ratio between the number of people contributing to it in some meaningful way, and the number of people using it. If that gets too off balance and there's a lot of people depending on it and nobody working on it, it gets pretty problematic.

Hoodie has an amazing number of people engaged in it and people are definitely using it, but I think it probably has the highest ratio of contributors to users that I know.

**Jan Lehnardt:** At this point yeah.

**Mikeal Rogers:** I'm curious what you've done there... You're converting users into meaningful contributors at an astonishing rate, and I'd like to hear some of your thoughts about that and what you've done.

**Jan Lehnardt:** Probably not actually converting users into contributors, but recruiting contributors specifically and then targeting first-time contributors or people who haven't coded, haven't been doing a lot of programming in the past, or haven't programmed in an open source context before. So when we're targetting those, and at this point we're kind of trying to convert them into users, but there's probably not the usual flow.

\[00:19:36.07\] Hoodie is kind of close to 1.0 and has been for a while. The last major rewrite coincided with a complete restructuring of the project to make it more accessible for new contributors, because we realized we could build that 1.0 that we've all dreamed of, but it's gonna take us three years, and we'd rather have more people working on this and get there faster. So we spent the first of these years basically turning the project upside down and chopping it up into a lot of small pieces so that they're easier to understand. If someone finds an issue they wanna solve for us that we may have prepared they don't have to learn the whole architecture of Hoodie and all the little details, but only the one sub-project where that issue is filed, and everything that's beneath that. So that's one of the first things that we did, kind of like a hyper-modularity of the project itself.

Then we started documenting it. We have a policy on GitHub, every subdirectory needs a readme. You have to explain, like "This is the test directory. This is what we use for testing libraries. Here's an example of how to do a test." Other subdirectories explain how the particular components of the software work, and are a little more in-depth than the top-level readme of the file. So making it approachable for people to get in, as well.

Then the third thing we've done is specifically curating beginner issues; going out of our way to explain... A lot of open source projects on GitHub make use of the fact that a lot of open source developers understand how GitHub works, but a lot of people don't. Even if they're programmers, they're just not used to the pull request review process, and maybe they have a hard time about... Posting something online for others to review, this can be a very scary proposition for a lot of people.

We make beginner issues that explain how to make a pull request as part of the issue; it's just linked into the common documentation from other nice people in the community. Then we make step-by-step guides for just how to fix a typo on the website. While that might sound like a bit of overkill, if you do that a bunch of times with enough people, there's more work that you get done through other people than doing all that work yourself. This is our way of scaling ourselves to get more contributors in.

**Mikeal Rogers:** Yeah, there's a lot of similar things to it that we've done in the reforms to the NodeJS project as well. If you just look at it from a number standpoint, there's not a lot of new full-time open source contributors that are coming into open source, but there's an insane amount of people coming in to be casual contributors and part-time contributors. These are people that tend to be on the more beginner end of the scale, maybe need a little bit more help, and there's all of these little barriers to entry, but cultural are technical are a really big deal to get them past. But if you target those people, that's how you see a lot of contributor growth. As they level up, you pertain them in the project; they then become the people that mentor the new people.

You have this spectrum of contributors that really engage people to help out all of the newcomers that's all of the former newcomers, right?

**Nadia Eghbal:** I'm really curious about this for the both of you - people talk about the contributor funnel, which is sort of like "How do you get someone who fixed a typo on the website to become a dedicated member of the team?" I think there's a lot of... I don't really fully understand it, and there's a lot of confusion around like "Are drive-by contributions valuable? How do you turn someone who makes casual contributions into a more regular contributor? Should you even do that at all?" I'm curious for both of you and your experiences what that funnel looks like, and is it okay if some people just hang out in different stages of the funnel?

**Mikeal Rogers:** I think there's two ways to approach this, and one of them will surely fail, and that is like "I'm a full-time contributor to this project, I've been maintaining it for a while. How do I make more people like me, and how do I get people to where I am?" That never works, ever. It never has worked.

What you have to do is you have to say, "Oh, there's all these people that I need to be contributors. How do I meet them where they are, and sort of bring them into the project?" And in terms of retention, I think that you do have to be okay with some of these people not sticking around, but enough of them will. And those people sticking around will encourage other people to stick around.

**Nadia Eghbal:** \[00:24:02.14\] So do you think it's not really realistic or possible... I'll hear some maintainers talk about mentoring one person to bring them on and get them to be this serious contributor to the project, and bring them on the core team. And I've heard some frustrations in that when it doesn't work out, because you're devoting all of your energy into one person who might not love the project as much as you do. So is it realistic to ever expect anyone to do it? How does anyone join the team then? Is it just sort of like over time some of them will, but you don't optimize for that?

**Jan Lehnardt:** There's this joke about the CFO asking the CEO, "What happens if we invest in our people and they leave?" and the CEO replies, "What if we don't and they stay?" \[laughter\] I think investing in people is always worth it. We have very tangible examples of this. We have people who have basically switched careers into programming, found Hoodie as their first community, we taught them a lot of programming, a lot of Hoodie, and they have since moved on. They talk about their journey... They do other things now, but every time they give a conference talk now, like "I started out with the Hoodie people." Like, every time. And this person gives a lot of talks, so every time they're on stage, we get an honorable mention. We're getting basically free PR for this.

They're relating their experience, and other people also want to have that experience and also come here. They're like, "Hey, you did really nice things for that person. How can I be part of this?" And it's always worth it, even though sometimes that interest doesn't go anywhere. It's just something that you have to be okay with.

**Mikeal Rogers:** I think 'mentorship' is a really loaded word, too. We're all very pro-mentorship, but I think there's two ways to do that. One is to have mentorship be kind of a core value, like you're always trying to help people level up. But often times I see a group of people that maintain a project have a process that they like that works for them, but isn't working for new people. So mentorship is like, I sit down with somebody and get them over all these barriers to entry once, and then they need to stick around. And that doesn't work, and it doesn't scale very well.

All of these things that Jan talked about, like documenting all of this stuff, that doesn't help people that already know it, it helps people that don't know it. You have to prioritize that, right?

**Jan Lehnardt:** Yeah. It was a radical transformation for Hoodie itself, as well as for the project - adopting these things and, like you said, meeting people where they are, as opposed to getting them to where we are.

**Mikeal Rogers:** I'm also interested, you mentioned that you broke things up into a lot of smaller components and that that really helped. We did this in NodeJS too, where we... You know, the website repository is where a lot of people get their feet wet, and it's so different from contributing to the core, but we actually see a fair amount of people move from that to core, even though it's a totally different skill set. They get through the cultural barriers, right? They get comfortable with the project and then they just learn the new technical skills, which is really cool.

**Jan Lehnardt:** Yeah, that's exactly my history with PHP. I was studying English to German documentation translations, and I filled out missing bits in the English translations, then I built features that weren't documented... I started building features and documenting them, and got further and further in, because I got a hook on the very outskirts of the project. I think that's just how it works.

**Mikeal Rogers:** What are some of those repositories that you see a lot of that happening in now in Hoodie, and in other projects that you're involved in?

**Jan Lehnardt:** We have a dedicated editorial project for Hoodie, a separate repository. I've put out a job ad for an editorial team that would take care of our blog and Twitter, and schedule posts and collaborate on reviewing things and have an interview series. There are lots of stuff that you can do on the blog, really useful community-building stuff, and we found a bunch of people who were excited about doing this, and we have a bunch of writers, and like a librarian working on Hoodie. How cool is that? It was like nerds from areas that aren't necessarily tech, working on Hoodie. It was very, very cool.

\[00:28:14.25\] We kind of modeled after NodeJS. They branched out into other areas, of education, design, we have dedicated teams that have their own culture of dealing with things. Then the code team is just another part of the project, as opposed to how it's usually - there's the code team of the project, and everyone else is kind of scattered around.

For Couch we started experimenting with a marketing team a couple years ago, and it was a huge success as well. There were very similar obligations with what the Hoodie editorial team does, but it actually does also do proper marketing, speaking with industry analysts, doing phone calls with them, that kind of stuff, because care should be placed in that area. And the Apache Software Foundation behind it has support for this as well. This is really dedicated stuff that has nothing to do with code, where people are trying to push CouchDB forward in ways that are really unusual for open source projects.

I can only recommend this. You get to meet a lot of fun people that are being very passionate about stuff.

**Nadia Eghbal:** I'm wondering about playing devil's advocate in a couple different situations... Do you think that having tons of casual contributors or drive-by contributors - if you had all that and people weren't really sticking around to become regular long-time contributors, would you call that project healthy, if stuff got done?

**Jan Lehnardt:** It's tricky to say. When we mentioned the funnel, what it definitely suffers from... We have a lot of first-time contributor issues, but we don't have second-timer issues, or the third time. We don't have a very well-defined documented funnel for people to follow. It's something that we definitely wanna work on, but we haven't gotten around to just yet. But that's definitely another area of work that we're gonna go towards.

I don't wanna nail people on a metric for being healthy or unhealthy. Every open source project has its own kind of... Depending on the scope and what it wants to do at some point maybe it's done, it needs to switch into maintenance mode, so it actually doesn't need a healthy community by the metrics of another project.

There are other people running their own successful open source projects that are completely contrary to everything that we've been talking about, and they're still nice projects and nice people. I don't wanna say these are wrong because they use their own metrics, or something. I just wanna be careful and not stay that this is the only way.

**Mikeal Rogers:** I'll be a little bit more aggressive about that. \[laughter\]

**Jan Lehnardt:** Alright, go!

**Mikeal Rogers:** I do think that if people are showing up and wanna contribute in any way, and you're not accepting those or you don't have a policy to accept them, or you don't have the people, that is gonna burn out your community at some point in time, and things are gonna start to shift negatively towards the project.

I do agree that I wouldn't hold to any particular metric, because there are a few projects that I can think of that have a ton of casual contributors coming, have a single maintainer who's really nice and really encourages the stuff, and is fine with the maintenance burden of actually doing all of that stuff. Lodash is probably a good example of this, or J.D.D. is just on top of every issue that comes in.

**Jan Lehnardt:** He also is being paid to do this, which is maybe one of the angles of how... It's like, "Why can some people afford this and some not"

**Mikeal Rogers:** He was doing it before he was paid to do it. And also I think his job pays him to do other stuff as well, it's not his only job. But he's also not complaining about drive-by contributors, he's not complaining about the maintenance overhead. If you're gonna complain about the maintenance overhead of casual contributors, then you need to do a better job of creating new maintainers. You don't get that. \[laughs\]

**Nadia Eghbal:** \[00:31:58.16\] It makes me wonder why does this stuff matter to a project? Because Jan, you're certainly being careful to say not every project is like this, and that's okay. At the same time, I see Hoodie as like "Wow, this is a really strong example of why this stuff matters." But does it not matter in certain situations? Like, if you have a project that's... I've talked to a couple recently that were like this, where it's like they have a BDFL and the project is really heavily used. There is a company that sponsors the development, or it's perfectly sustainable and no one is stressed about maintenance, but they don't' see... Like, what incentive do they have to actually involve the community on a deeper level?

**Jan Lehnardt:** It's probably based on what they want to achieve, and if they achieve all that they want, that's kind of great, but they're kind of closed to other ideas in the project.

One of the success stories of Hoodie is turning someone who literally just fixed a typo on the website and then became basically our accessibility person, to make sure that all our websites and the example projects are accessible by default. They've since moved to other things in the project, but has brought into the project the perspective that accessibility is obviously one of the topics that are really important in that area. But the core group of people at Hoodie, we thought that was important but then it was like "We'll do this later, because we other things that are more important", and that person thought "No, this is really important, we should do this now." So that's kind of part of the culture now.

If you don't have a project that has a regular influx of more people of more diverse backgrounds, you're kind of missing out on these new things where a project could be taken. Sometimes that's okay, but that's also an opportunity missed, and I kind of don't like those.

**Mikeal Rogers:** I would also say that if the project's usage is growing, you need to grow the contributors. If you have enough money to continue hiring, then that will work out. What I see really often is people get hired to maintain a project at a particular level of popularity, and when it doubles or triples, they don't have twice or three times as many contributors to handle all of the new demands on the project.

There was a point in time where Joyent employing Ryan Dahl was enough for Node. We didn't really need any other full-time people, and that was fine. But the project grew so much... No company could keep up with hiring people to stay on the project, and we really needed to find a way to bring more contributors in.

**Jan Lehnardt:** I've definitely seen this in Hoodie as well. Talking about the challenges of this... Scaling is really important. One of the downsides of all of this that we're having is that people like Hoodie a lot and like contributing a lot because we're acknowledging their work and their contributions a lot, and we're thankful for the work that they're doing. Then we're kind of guilt-tripping them into contributing more, and then they can't, and then they feel bad or they do and they burn out.

**Nadia Eghbal:** Interesting.

**Jan Lehnardt:** That's a really tangible problem that we're seeing, especially since Hoodie is kind of focusing on more diverse contributors... We'll welcome everyone, but we're kind of trying to specifically reach out to under-represented groups in open source specifically. These people just have a harder time finding spare time to work on open source stuff. If you make a really nice place for them they really want to contribute, but if all they have is like a half hour every month, then either they... They can't follow the project chat, for example. That's all they do, and still miss stuff. We need to be able to, on the one hand, chop tasks into small enough pieces that these people can contribute, and on the other hand you have to make sure that they feel comfortable with that level of contribution being okay for them and not feeling bad about it, or going beyond their limits and burning out.

This is something that we haven't solved yet. This is just an active, ongoing problem.

**Mikeal Rogers:** \[00:35:58.10\] You do know quite a bit about that, though. I mean, you've been involved in JSConf EU and really did a lot of work to make JSConf EU one of the most diverse conferences in the whole conference space, in terms of people attending and people speaking, but especially people speaking and getting that kind of stuff in. I'm curious how you've adapted those learnings into a code project and not a conference, right?

**Jan Lehnardt:** Yeah, interesting. We did a kind of connect very early on, before the Contributor Covenant was a big thing, and we kind of pioneered that for Apache as well at CouchDB. We started to recognize that open source is people coming together, and people coming together need guidelines that are very similar to those at events.

I think the way we got there is - and I'm paraphrasing a good friend, Florian Gilcher, who's running a bunch of Ruby events in Berlin, or has in the past - whenever you do an event, the most important question to ask as an organizer is "Who's not here and why?" It was arguably also very important - if not the most important - for open source projects, "Who's currently not contributing and why aren't they contributing? What can we do to remove those barriers to contributorship?" If you make a habit and process of working on these things, you'll get to a point where you have a lot more people contributing that couldn't before.

**Nadia Eghbal:** Alright, we're about hitting our time for a break. When we come back we're gonna talk about a couple other challenges and edge cases around community building.

**Break:** \[00:37:31.15\]

**Nadia Eghbal:** Alright, we're back from the break. We're here with Jan and my co-host Mikeal. One thing that I was wondering about from our last conversation was... I mean, Hoodie is a great example of a project that baked in all these really great community values from the start, but what happens when you have a project that is older and maybe didn't do that in the beginning and is now having trouble with contributions?

I know that Jan had written this post called Sustainable Open Source referencing a couple of projects that were making these public appeals for contributions. They were both very popular projects, but they were saying, "We didn't do the community side very well." So how you do that once... Is it too late when you've got a project that's heavily used but has virtually zero contributions?

**Jan Lehnardt:** It's tricky. Even inside Hoodie, when we did the big revamping of the project last year, most everybody was on board with what we were gonna do, but it takes some... Communities have inertia, and you have to overcome that. The older the community is, the more inertia it has. Whereas in Hoodie, setting up a code of conduct took about an hour and a half, after having produced a draft, to agree that we should have that.

In CouchDB it took a couple weeks to close to six months to actually have all of the community agree on it. We even had to forcibly eject one community who was violently against the code of conduct because, as it turns out, they were regularly showing behavior that would be in conflict with the code of conduct. That whole process is very long-winded and very tough for a project, especially for someone who has a project that has traditionally valued tech contributions over everything else, and then have a very prolific contributor that needs to be ejected from the project.

\[00:40:14.13\] You need to have procedures for that, you need to have everyone understand what all the consequences are, and be on board with this. Arguably, for Couch this was kind of the worst case of what a project can go through; I'm thankful for the experience but I also don't ever wanna do this again. So I don't envy projects that don't readily have to convince the constituents, like "Okay, code of conduct is a really important thing", and then you have a three-month debate about this, instead of like, okay, everybody's kind of like "Yeah, thumbs up. This is a good idea."

I guess that's a way of saying you need to talk to a lot of people, the bigger a community is, to understand their point of view and maybe bring them onto your point of view if they differ, if you have at all the chance to get there.

**Mikeal Rogers:** I think you're touching on an interesting strategy though, that I think does work. These processes and the status quo work for the people that are in power, that have power; they're already there, they've already made it through all these barriers to entry. You're basically changing it and making it somewhat less convenient sometimes for them, in order to get new people that don't have power, that don't have a voice. But you and some other people from Hoodie, you had some success with this model that you could point to. It was a related community, you had credibility within the CouchDB project, and that kind of helped you do it. And also, you cared enough to stick around for six months and actually convince everybody, which is also very hard, right?

I think when you look at other communities you can see something similar. Say if you wanted to change the way that Python Core worked, you could look towards communities in the Python community that have leaders that have had success with this and use that as a model and then advocate it. Those people care enough probably to stick around.

When we reformed the NodeJS project, Rod Vagg had never really worked on Core; now he's like the TSC Chair. But at the time he never worked on Core because it was just not that interesting in terms of the contribution policies around it, but he had done a bunch of pioneering work in the Node ecosystem around better contribution policies and in the level of community and stuff like that. So a lot of what we did was adapt to those, and we were able to play on the success of that model that we already knew worked and it was coming from people that were respected within that community.

**Jan Lehnardt:** Which I guess is why it's so important that we talk about these things, so people understand that these things are important, and talk about them and maybe steal from us as much as they want and then make up rules of their own for their own projects.

**Nadia Eghbal:** How do you tell someone who is basically a single maintainer of a popular project, how do you get from zero to one with that, where they're sort of like "Oh my gosh, I've been doing all this work and I really love this idea of a community model, but where do I begin?"

**Jan Lehnardt:** Yeah, "You want me to do even more work?" \[laughter\]

**Mikeal Rogers:** What I've had some success with is first you crack open the process. So you say, "Look, it's not on you to design a process. You're talking about having a more open process. Why don't you use that process to create the process?" Create an empty governance.md doc and then let people send pull requests to it and encourage people to send pull requests to it, and have that conversation and get people engaged.

**Jan Lehnardt:** That's what we did with the Hoodie editorial team. We just said, "We need an editorial team. Here's roughly the things that you need to be doing, that we'd like you to do." If anyone's interesting, your first job is to figure out how to do what you wanna do, and write down how you wanna do that. The genesis of the project is its own governance.

**Nadia Eghbal:** That's a practice I really like about Hoodie. You would call out these specific types of contributions you were looking for and saying... Maybe that's where people started saying "Hey, I'm looking for this type of thing", and treating it almost like a job board.

**Jan Lehnardt:** \[00:43:56.16\] And then maybe a little bit more tangible for that single maintainer person that we dreamed up here. I can spend ten hours to just fix ten bugs, or I can spend ten hours to write a failing test case and describe in an issue how that bug would be fixed. Then ten people can fix one bug and I only have to review their work. Within the first ten hours I have ten fixed bugs, and then the next ten bugs come. With the other one, I have fixed ten bugs and I have ten more contributors that potentially could fix ten more bugs, so all of a sudden I'm a 10x programmer. \[laughter\] Sorry for that very stupid joke. But the incentive is that you're creating more versions of yourself; they're in a sense lesser, because they have less understanding of the project and less vision of the project, but then that's gonna be your job - teach people the innards of the project, teach people the vision of the projects so that they in turn can internalize that and continue your work.

It's radically different from like, "Okay, I'll sit down for an hour and do this release, because I love coding and I love fixing stuff in the code, and I can spend an hour and it's really enjoyable for me. Or I can sit down and write documentation...? Really?" But then if you do this a couple of times, then people bite and stick around. It's kind of addicting, too. We're trying to optimize for getting more people; this is how we got into the whole Hoodie contributors thing, cloning ourselves to become more efficient as individuals in this project.

**Mikeal Rogers:** An interesting aspect of this too is that you have to distribute the ownership over this stuff along with asking people to contribute, right? At some point they need a decision maker who has authority over it. And if you have a big enough project where you can actually start breaking off components, you can distribute authority to those people really early, because it's a totally separate repository, or something else out of the main project.

The most successful version of this that I know of is the work that we did in io.js to build out the localization effort, and literally we got 146 people in 27 languages in a day. Essentially we were like, "Tell us in this thread if you want to start a localization community, and I will create a repository and then add you to it." Then literally I would log at the first issues, and it says "Fill out the readme, fill out the description, get the Twitter account..." It's all these things that they own, that they're doing, that they're contributing, and it's very clear that they own this space, and then they would invite a ton of extra people, and it just blew up so fast. It was amazing.

**Nadia Eghbal:** A couple theme I feel like I'm hearing from all these different suggestions, around opening up your process, transparency and making it easier to saying out loud what you're doing so that other people know what you're doing, and makes it easier for you to get involved. Then also that aspect of "Yeah, this isn't more work. This is actually making this process more efficient and more distributed, which means less work for you." I think too often it's associated with "Oh, I just wanna write code and I don't really wanna do other stuff", but it's really thinking of it as this is actually you doing less work by making the one-time investment that's reusable across a lot of other things.

**Jan Lehnardt:** And it eventually frees up... If the hard programming challenges is what you really thrive on, it allows you to focus on ever more harder problems in your projects, because other people are taking care of the less hard problems.

**Nadia Eghbal:** Right, exactly. The other flipside I was wondering about was some people I've talked to have had bad experiences when they've opened up their process to other people, or let other people in. Somebody ended up taking over, or making decisions they didn't agree with, so it's scary for them to think about giving up control. I'm curious what your experience has been like around... Have you had bad experiences where you've handed off responsibilities to someone and they broke your trust in some way? How do you learn to be okay with that and take risk?

**Jan Lehnardt:** \[00:48:04.19\] I don't think I've had a very bad example of this, but also both Couch and Hoodie, I'm very involved and there are no BDFLs in this projects, but I carry a lot of influence that I can usually turn the bad things around before they happen. The problem is when you really can't, and you're part of the side that doesn't want a particular change, but the majority of the people who can now make decisions do want it. How this all works in Couch is institutionalized by the Apache Software Foundation, and it's done through voting people into specific circles, and then they get more power to decide things.

My measure of control at this point is I will only vote people into that higher circle of being able to make binding decisions that may be decisions that I disagree with, they're only people that I trust that much that even though I disagree, I know they have the best of the project at heart and they won't ruin the project and they really think it's the best for the project, and I'm wrong on this, so I have to be okay with this. But that's a very, very deep level of trust that can only be earned over years and years of collaboration. It's really hard to relinquish that, and I think it's part of the challenge that I still have to learn to go through to be able to do that. It's really easy to relinquish control of things that are... I'm not saying they are not important, but it's really hard to \[censored\] up documentation. Of course, it's easy to make bad documentation, but it's kind of straightforward how you would wanna do this, or the type of language you want in there. And there's other subprojects that are really hard to really screw up, aside from like how a really core feature works, or whether a feature is gonna be in a certain version of a project, or things like that. At that point it is down to probably a lot of discussion between people that are passionate about this, and they have to work it out. And whether there's a process for this or not doesn't really matter. They have to work it out within themselves, and sometimes it means some people leave the project, sometimes it means people are grudgy for a bit, and that's fine, and sometimes it means we have two projects now. Maybe that's also good for the community, like we've seen with io.js, for example.

**Mikeal Rogers:** I think another strategy that calms people down is that you quantify the risk of somebody doing something wrong. Like, what is the cost of a mistake in the documentation? It gets fixed pretty quickly, it's up there for a few minutes - it's not a big deal. So if you can break that off into its own repository and relinquish control - great. Same thing with stuff like the website.

Then in the core project - I think we even do this around the master branch a little bit - one, Git allows you to fix any mistakes. So if you're not Subversion, you're not in this horrible situation where "Oh my god, I have to redo everything!" Commits that go into master don't automatically land in a release. There's another review process, where they land in different branches based on how much they might break things or what the risk profile is. And there are people that just engage in that, and they know that the basic stuff is already done with a review; they're really just looking at, you know, "Can this land in LTS, or is it something that only lands in the new release line?" and that really allows us to liberalize the control around master and have many more people contributing and committing and reviewing in master.

**Jan Lehnardt:** But then this meets what we talked about, the funnel - the funnel doesn't end with the contributor, There's the user, the first-timer, the contributor and there's also the maintainer type; that's what you want people to upgrade to eventually, and Node definitely has a lot more people in there than Hoodie has, for example.

\[00:52:00.11\] If you wanna be in a position where you can afford to have that kind of infrastructure where it is easy to relinquish control, you also have to work on having more contributors really badly, because you can only do that if you have a lot of people. So this is all like self-evident coming around to you should focus on getting contributors more than anything else in the project. Anything bad that can come, you can solve with more contributors.

**Mikeal Rogers:** Right. Like, what are the things that you need to have happen, and if they're that important, people should show up to do them, as long as you make it easy enough for them to do it, right?

I think that there was a lot of worry that "Well, who's gonna sit and review all these LTS patches and port them over. IBM really cares about long-term stability for their customer, so it turns out that they will hire people to do that, as long as we make it easy for them to do that.

I think what you can't do is you can't say "We have project goals, and then we're going to make the community care about them." You have to optimize for people to show up and do what THEY care about. This is why we don't really have a roadmap for NodeJS. We have some basic stuff that we know we wanna do in the future, but it's really like, what you show up with is what goes in. The more that we try to define what the next release is going to look like, the more that we kind of deincentivize people to show up with working code and ideas.

**Jan Lehnardt:** Yeah, that's what killed the original PHP 6, which was meant to be the Unicode release, and then because the project decided the next goal is Unicode, it turns out only two people cared about Unicode and everybody else was agreeing with Unicode but didn't care about that, so that didn't go anywhere. It was nixed eventually and we got a different PHP 6 now that has... I don't know whether it actually stands with Unicode support, but that was one of the examples of when a project sets a goal and tries to get people behind it, but like I said, that doesn't work. Like you said, you need to get around what people want instead of getting them around to what you want.

**Nadia Eghbal:** It's tough. I'm curious just to zoom out and talk about what we think success looks like for an open source community and project. I know we talked a little bit about metrics and how those can be sort of... You don't wanna hold everyone to the same standard, but beyond just sort of a basic gut feel, how does somebody know if they're doing community right or not, if that's even a thing?

**Mikeal Rogers:** Are people happy? \[laughs\]

**Jan Lehnardt:** Yeah, I was gonna go there. Like, if you throw a party, you kind of know when it's a good party and when it's not a good party. It's really the same thing - how do people feel? How do you see people strive doing their thing? Do you see people reaching the goals they said they wanna reach in the time that they said they wanna reach it? Do they flourish? Do people have a good time? That's probably it.

**Mikeal Rogers:** I think looking at the party is probably a really good metric, right?

**Nadia Eghbal:** Yeah, I like that.

**Mikeal Rogers:** At the JavaScript conferences everybody is super happy and having a great time and doing karaoke, and some of these conferences that I go to that I won't name, it's just people getting drunk in an airport, or in some hotel ballroom... \[laughter\]

**Nadia Eghbal:** If someone doesn't care whether other people are happy and they sort of just care about... I mean, more in a BDFL type of situation - is it just gonna suck for everybody else who loves that project that can't be involved?

**Jan Lehnardt:** I think of benevolent dictators that benevolence isn't shown through understanding that people work best when they're happy is not benevolent, so they're not a BDFL by definition.

**Nadia Eghbal:** They're just a DFL.

**Mikeal Rogers:** There's a lot of DFLs out there. \[laughter\] I don't know, in my opinion the BDFL model has kind of run its course. I think that the demographics of contributors have changed enough that that's just not a sustainable model for the most part.

**Jan Lehnardt:** \[00:55:56.05\] Yeah, and the few times it really worked is when the people who stepped up to be the BDFL were really exceptional people, and we kind of can't optimize a culture of open source for exceptional people, because they are the exception.

**Nadia Eghbal:** So you kind of flip it on the other side... Like, we've talked a lot about what maintainers of projects can do to build healthy communities, but if you're a part of a community, how can you help advocate for yourself and for others back to the maintainers?

**Mikeal Rogers:** Point them to this podcast. \[laughs\]

**Nadia Eghbal:** Great idea!

**Jan Lehnardt:** We're coming back to... It's the same as with events - people need to feel safe to effect change. If you don't feel safe at the project, try to get that going; if you can't get that going, find another project. I think that kind of the baseline for this is a code of conduct for a project that defines what that safe place looks like and what happens if that safe place is violated. But there's a lot more that makes people feel safe at an event or an open source project... But that's kind of the baseline that you need, and then people feel comfortable. It's like, "Hey, I'm not sure if everyone agrees with this, but I'm feeling really strongly about this", and then the discussion is going. Then you're off to the races and you can see if you actually have a chance of changing the community in the ways that you're interested in, or if you shut down, or if your idea gets evolved to something that's even better than what you ever could imagine - which is usually what happens... Because that's the beauty of human collaboration. But yeah, get the ball rolling on feeling safe, and once you're there just try to have fun.

**Mikeal Rogers:** I think some projects just aren't gonna change until they hit a point of crisis. You don't necessarily have to feel bad about leaving, or even leaving publicly; that is a good example, and when they do hit a crisis point, that will give them a reason to change, and some context. To some extent, there are a lot of projects out there that are nice that you can spend your time on. Don't burn out trying to change a project when there are so many good ones out there. And eventually, if enough people do that... Like, the project will hit a crisis point and they will be forced to change the way that they do things.

Alright, I think that's a really good spot to end it on, it's a great little note. So you can head over to RFC.fm for more shows and to subscribe.

**Nadia Eghbal:** Thanks, Jan, for coming back.

**Jan Lehnardt:** Thank you for inviting me, and if you ever want me back, I'd definitely be a guest again. I'm looking forward to the next episodes.

**Mikeal Rogers:** Yeah, we'll think of another topic to nerd out on real deep.

**Nadia Eghbal:** There's many more. Alright, bye everyone.

**Mikeal Rogers:** Thanks, bye!

**Jan Lehnardt:** Bye!
