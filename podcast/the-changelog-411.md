**Jerod Santo:** Jon, you have a long list of credentials and experiences. You're an award-winning author, a journalist, you appeared in the Guardian, Wired, TechCrunch amongst others... You're a world traveler, you visited over 100 countries, and you're a software engineer, which it seems like one of these things doesn't fit in with the others, but maybe it does. You tell me.

**Jon Evans:** It's kind of a weird \[unintelligible 00:03:14.27\] The engineering came first, I did my degree in that, and I then decided I wanted to go bouncing around the world, and then decided I wanted to write. I usually describe myself as easily bored, which is how all these things fit together. So I took five years off to be a full-time novelist, and then returned to the warm embrace of the tech industry.

**Jerod Santo:** Are you staying busy, or are you getting bored again, or how are you feeling?

**Jon Evans:** I'm staying pretty busy... I have a couple of different things I'm working on. I'm actually writing a new novel, so... We're all staying fairly indoors these days, so it's mostly interior projects, as you might imagine.

**Jerod Santo:** No doubt. So back to writing - you're also the CTO of HappyFunCorp, which is a software development product agency that works with startups and enterprises... But most germane to this conversation - you're the founding director of the GitHub Archive Program, which is exactly what we're here to talk about today. I would love to hear how this program started.

**Jon Evans:** \[04:13\] The way it started for me was... Nat Friedman, the CEO of GitHub, who I've known for some years, had reached out to me saying he was interested in archiving software, in particular open source software, which is GitHub's - I don't know about main focus, but certainly a main interest for Nat and myself... And he wanted to look into the possibilities for that. So we kicked around a couple of ideas and decided that the best thing would be to actually go ahead and launch a program under the auspices of GitHub itself. So I took a sabbatical from HappyFunCorp (HFC) and came on to work full-time at GitHub on that last year.

**Jerod Santo:** So Nat came to you... Why you? Why Jon? Did you have a history of archiving things, were you a friend of his? Why did he select you for this?

**Jon Evans:** We never talked about it explicitly, but I think the notion was that he wanted someone with enough technical depth and background to understand the nitty gritty of how actually to get all the code into whatever very long-term storage we were talking about, which is a non-futile process. But also, a sense of imagination, enabling this to work outside of the usual thinking, and I guess the history of writing novels and bouncing around the world spoke to that, to some extent.

**Jerod Santo:** Hm. So you took a sabbatical and you decided "Well, we're gonna archive this under the auspices of GitHub." What were the first steps?" Was it like "Go find the coldest place on Earth" or "Get a file format down"? What were your first steps?

**Jon Evans:** Well, the first steps were obviously to see what other people were doing in this area, which was actually super-interesting. There's a project called [The memory of mankind](https://www.memory-of-mankind.com/), which is built in a salt mine in Austria, for instance, which is perhaps one of the oldest working mines in the world; it's been worked since probably 3,000-4,000 BC. They are writing down data to ceramic tablets and putting it in this ancient salt mine in the Alps. The salt slowly moves and accumulates over time, and so this is gonna be sealed off by this giant, slow wave of salt, as a time capsule for the future... Which is a fascinating idea. It didn't really fit with what we were doing, as it's hard to fit terabytes of code on ceramic tablets, it turns out... And also sealing off a time capsule with a giant wall of salt isn't the most convenient way to get to it.

**Jerod Santo:** Yeah, salt doesn't sound like the best way.

**Jon Evans:** Yeah. But yeah, that was interesting. There was something called [The Arch Project](https://www.archmission.org/), which is actually dropping copies of various things on the Moon, to just sort of crash-land various archival facilities, drives and so forth onto the Moon. Again, very cool idea, but not super-useful in the case you wanna access it at any time in the near future, or in a whole bunch of possible futures.

And then we had found out that there is a Norwegian company called [Piql](https://www.piql.com/), a little software joke for the relatively few who will get it; I guess a disproportionate number in this podcast...

**Jerod Santo:** \[laughs\]

**Jon Evans:** ...which had just recently built, in cooperation with the Norwegian government, or this mining company owned by the Norwegian government, a vault beneath an Arctic mountain in Svalbard. That was obviously of some interest, so we pursued things further with them, and it turned out that was gonna be a pretty good fit... Which is good, because building an entire, elaborate super-structure apparatus for archival is obviously a non-trivial job, so it was kind of nice that someone else had done a lot of that work for us.

**Jerod Santo:** So that's ultimately where you all chose, this Svalbard Archipelago. Have you been there personally, or was it merely satellite images?

**Jon Evans:** Yeah, we went last year. Although I should probably mention that that's the charismatic megafauna part of the archives, the thousand-year part, and that's probably the most whacky, out-of-the-box thinking... But there's also more day-to-day, prosaic ongoing archival programs that we're doing with the Internet Archive, and the Library of Alexandria hopefully, and the Bodleian Library, and the Software Heritage Foundation, and so forth.

So it wound up being a much larger thing of archiving on a sort of week-to-week, month-to-month basis, and also the very long-term Arctic mountain, under-the-permafrost one.

**Jerod Santo:** \[08:14\] Right. So let's leave the permafrost for now and let's talk about some of these warm stores. So you're gonna have this warm-to-cold storage strategy, where you have dailies, or weeklies, or whatever it is - you can lay it out - that go to these different places. So of course, like you said, the frozen thunder is what gets all the press, right? And of course, it's the coolest, weirdest part about it; and it's like, that's the video. It's not gonna be of the Wayback Machine... But the Wayback Machine is involved. Tell us about all the things you're doing to do the warm long-term storage.

**Jon Evans:** Yeah... And in fairness, the Wayback Machine does look cool. I don't know if you've been there, but...

**Jerod Santo:** No, I haven't.

**Jon Evans:** ...at least one cup of the Wayback Machine sits on the Internet Archives headquarters in San Francisco, which is a former church... And they have these walls of hard drives, and the back of the former church with little lights blinking whenever somebody archives them.

**Jerod Santo:** Oh, that is cool.

**Jon Evans:** So there's a certain dramatic effect which goes on there. But yeah, part of archival is making things available to people, and in particular something like GitHub, which is a tool that people use, and has critical aspects that people wanna be able to access - it's useful to have other backups of that there. So the Internet Archive is currently sucking down a whole bunch of GitHub public repositories, with the intent of making them available as GitHub repos on the Wayback Machine. So you can point your Git command line to the Internet Archive URL and pull down your Node package from there, if need be, in the future.

**Jerod Santo:** Right. So those are effectively Git clones that are synchronized.

**Jon Evans:** Yeah. And I guess a larger perspective - we were sort of inspired by Stewart Brand from the [Long Now Foundation](https://longnow.org/) you may be familiar with. They're the people who think that we have this mayflyish attitude towards history, when in fact history, it turns out, is a very large thing. When they give the year, they preface it with a zero to reinforce this. So we're in the year 02020 right now, which is sort of a fun, little eyebrow-raiser they do.

**Jerod Santo:** It shows their perspective, huh?

**Jon Evans:** Yeah, exactly. And Brand wrote this piece about Pace Layers, about how certain aspects of a society or a civilization move very quickly, and other aspects move quite slowly, and it makes sense to look at things from that point of view. So we kind of adopted that into archiving Pace Layers. We have that very, very slow under-the-ice-for-a-thousand-years, but we also have this sort of more dynamic, faster, "let's grab changes as they occur, several times a year" Pace Layer, which sort of maps a software, too. Obviously, everything is changing and iterating, but you still have your baseline of the tried and true technologies that everyone uses, and then you have the new stuff that people are playing around with, and changes are coming thick and fast.

**Jerod Santo:** Yeah, exactly. So when you look at the Wayback Machine's version - is it like a day old thing, a week old thing? How old are those snapshots? Or are they synchronized in real-time?

**Jon Evans:** Well, they're working on a couple of test projects right now. The objective is to get the snapshot several times a year, so for it to never be more than 3-4 months old. The actuality of that - I mean, they're still working away on it, but they are very good at what they do, so that's our hope and expectation.

**Jerod Santo:** And that's effectively a backup. Is the point of that "If GitHub disappears, at least we have the Wayback Machine"?

**Jon Evans:** I mean, GitHub could disappear through some sort of BSD hacking. Pieces of the internet could vanish for a day because someone messed with BSD. Sorry, [BGP](https://en.wikipedia.org/wiki/Border_Gateway_Protocol), not BSD.

**Jerod Santo:** Right.

**Jon Evans:** It's a globally insecure protocol. So it's nice to have that handy if, for whatever reason, GitHub's IP numbers aren't accessible in your country at that time, that sort of thing. And more generally, it's just useful to have another copy around, so you can go back and refer to that if needed.

**Jerod Santo:** Then there's also [GH Archive](https://www.gharchive.org/), which - I think it lives in BigQuery. Is that right? We use it for our Changelog Nightly newsletter, which queries. It's queryable, and it's the events that happen on GitHub, but there's also source code involved in that as well. Is that part of the archive program, or is that a separate project altogether?

**Jon Evans:** Yeah, they're affiliated with us. They predated the archive program, and we sort of reached out and tried to incorporate them into that. There's them, there's also [Software Heritage](https://www.softwareheritage.org/), who are doing much the same thing... [The Internet Archive](https://archive.org/) - except they're trying to get all source code everywhere, and keep it in one single monorepo of their own. They're based in Inria in Paris, and they have their own technology and scraping and so forth. So you know, as with all backups, we want multiple copies.

**Jerod Santo:** \[12:26\] Yeah. If it doesn't exist in three places, it doesn't exist, right?

**Jon Evans:** Right.

**Jerod Santo:** So that's the warm store; you've got the GH Archive, which is associated, and you have the other foundation which is associated, and then you have this long-term -- which is a snapshot; you all did the snapshot on February 2nd, 2020, I believe. Was this all public GitHub repositories at the time, or you picked your favorites, you picked the most relevant repos?

**Jon Evans:** We talked about that very early on, whether we wanted to be sort of editorial about what we picked and chose, and we decided to avoid that to the extent possible.

**Jerod Santo:** I think that's a good idea.

**Jon Evans:** Yes... I mean, some of the reasons are obvious, some of them are less so... We have this amazing advisory board of anthropologists and historians and linguists and so forth, and one of the interesting things that they mentioned to us, which I found fascinating... You look at existing archives of like the Renaissance, and it's full of lists of wealthy and important people, almost all of them men, of course, because they're in the 15th century... You know, "These are the important books that should be preserved for posterity", and apparently, we have so many of those, we don't know what to do with them. We don't really care about them. What we really want from that era to understand how that era worked is ordinary people's shopping lists, and almost none of those survived, because they weren't considered important at the time. So we thought it would be more democratic and more inclusive, and also possibly more important and give a more complete view to be as broad as we could.

**Jerod Santo:** Isn't that amazing, that what we're not after is some official narrative? What we're after is a snapshot, a view into the daily lives of the people, or the things they were doing, or what they were thinking during a time period to reconstruct our own view of what was going on at that time. It's amazing.

**Jon Evans:** Yeah, exactly. If you're deciding what's important, then you're passing judgment on what's important, and maybe our judgment isn't so great. Maybe 100-200 years from now they're gonna look back and think "What we really care about are the Hello World apps, the Hello World stuff, and where they came from , and what timezones they were in. That what's the most interesting thing to us right now."

**Jerod Santo:** So if you had public code on GitHub on February 2nd of 2020, then you have code in this archive, is that correct?

**Jon Evans:** Yeah, I can break that down for you in more detail. It was a little more complicated, because we did have space restrictions. So any repos with any commits of any kind, regardless of how many stars or anything, between the day that the program was announced - that was GitHub Universe 2019; November, I think - and the snapshot date, so in the 80 days before the snapshot, all of those repos were captured.

**Jerod Santo:** So active projects.

**Jon Evans:** Yes.

**Jerod Santo:** Somewhat active.

**Jon Evans:** Yeah. Any repos with any stars at all - and you can star your own repo on GitHub, of course - from the previous year before the snapshot.

**Jerod Santo:** We all do, don't we?

**Jon Evans:** Yes, exactly. \[laughter\] I've been known to star mine, I'm not gonna lie. \[laughs\] So anything with a commit for a full year before the snapshot was also taken. And anything with more than 250 stars, regardless of commit date, was captured. So if there's old stuff that the community thought was important but hadn't been updated in some years, we grabbed that as well, because we figured 250 stars was a pretty significant indicator that somebody thought this was okay.

Obviously, this has some level of judgment, because we did have a limited amount of space, but we tried to minimize that to the extent possible, and be as inclusive as we could with that certain criteria.

**Jerod Santo:** So let's talk about the space required then of that snapshot. How big was it, in laymen's terms, so we can understand? Terabytes, petabytes, whatever.

**Jon Evans:** Yeah, 21 terabytes, and that's compressed.

**Jerod Santo:** Okay.

**Jon Evans:** So it added up.

**Jerod Santo:** And do you know how much it would have been if you had just said "All public repos, even the old, stale ones"? Would it have been like 10x, 100x that?

**Jon Evans:** I don't really know. We looked into it and we were like "That's gonna be more than we probably have space for." 10x seems high to me, but not super-high, but that's a gut feeling. I don't really have the numbers off-hand.

**Jerod Santo:** \[16:18\] Sure. So when you that "we have space for", are you talking about terabytes, are you talking about physical space in this vault? You only have so much surface area in there, volume that you can fill. Is that correct?

**Jon Evans:** Yeah, I mean -- the vault is a former coal mine. So in terms of cubic meters or cubic feet, there's a very large amount of space. \[laughter\] Coal is not the densest stuff on earth. But we had a limited amount of tapes that we were generating, and 186 I think it turned out to be... And each of those has a limitation of about 110 gigabytes, which - you know, on the one hand it's actually fairly dense, for something which is written to a visual format... But on the other hand, when you're accustomed to one terabyte USB sticks and so forth, it seems a little worrying, and something you have to sort of recalculate around.

**Jerod Santo:** Yeah. And so a quick note for the listener - if you're curious, "Do I have code in the GitHub Arctic Code Vault?", just go to your profile; they've added now a badge for everybody who does. And if you were active during that time period at all, then likely you do. But you can be sure - and they'll even list; if you hover over that, they'll even list which repos... A shortlist of the ones that you contributed to, which yes, do have code in the Arctic Code Vault.

Very cool. Adam and I were looking at that, because we started to notice there's a badge on some people's repos, and we were thinking it was just like "If you contributed to Ruby, or Rails, or the Go programming language, or Npm, or these very important repos, then you might be an Arctic Code Vault contributor", and then we both realized we were both Arctic Code Vault contributors. "Oh, cool!" So it must have been not that, because we aren't contributing to those large projects... And it's very interesting to hear that that decision was made. I think it was a very wise one, to say "If it's active, we're gonna snapshot it", because that's smart for many reasons.

**Jon Evans:** Actually, not everyone. I have co-workers at HappyFunCorp who did not have the badge... Because you know, they're professional software developers, but they work in private repos day in, day out, and so forth... So I got a couple of comments like "You could have told us, Jon. You could have mentioned that this was happening." \[laughs\]

**Jerod Santo:** Because they missed the boat. Or I guess it's a train. Or an airplane? I don't know how you get out there.

**Break:** \[18:36\]

**Jerod Santo:** So we were talking about storage format, and many of us have ran into the scenario where you think you backed something up, and then you wait a few years and you realize that there's nothing in the world that can read that anymore... Whether it's Betamax, or it's been damaged; CD-ROMs, DVDs... They're still out there, but you go 100 years into the future - there may not be any CD readers out there that will work. So I'm sure that was a huge consideration. When you're trying to shoot for 1,000 years...

**Jon Evans:** Absolutely.

**Jerod Santo:** ...that format is super-important.

**Jon Evans:** Yeah. And ironically, that's one of the reasons of the archive - to document things like file formats and so forth, for the future. And fortunately, this is a thing which the format that we're using, which is sort of a hardened microfilm (it's an oversimplification but it's not too much of an oversimplification), is useful for. Because ultimately, to just get basic information out of a piece of film, you need some source of light and some magnifier. So each of those 186 reels is actually in and of itself a self-contained archive. It stars with human-readable, visible text and pictures, explaining in several languages what is on the reel, and how to access it, and how to make sense of its contents, and an index of the things which are on it... Before going into the more encoded, QR code(ish) visual data.

**Jerod Santo:** Like an instruction manual.

**Jon Evans:** Yes, exactly.

**Jerod Santo:** What's the physical medium?

**Jon Evans:** The physical medium is silver haloed on polyester film, which the ISO rates for 500 years, but Piql has a special, hardened film which the Norwegian Military has done some initial tests with, and say it should be longer than that. Piql thinks it could be good for up to 2000 years. We're saying 1000 years, out of what seems like a reasonable abundance of caution.

**Jerod Santo:** Right. How do they do that, "This thing will last 2,000 years? We've tested it for three months."

**Jon Evans:** Well, they do artificial testing... Sort of like heat treating, and other forms... But to an extent, yeah - the only way obviously you can actually test if something will last for 1,000 years is to leave it out for 1,000 years. That said, I mean -- as the ISO will tell you, this stuff, silver- haloed on polyester is widely considered to be one of the most stable formats around, and it's not gonna be going anywhere anytime soon, particularly if stored. These are in boxes, and the boxes are wrapped in aluminum film, and the aluminum film is in the steel vaults, and vaults are in the coal mine, and the coal mine is in an Arctic mountain etc.

**Jerod Santo:** It seems pretty safe.

**Jon Evans:** We'd like to think so, yes.

**Jerod Santo:** Until a meteor hits that mountain. That particular mountain. \[laughter\]

**Jon Evans:** Well, there is actually another backup; we're taking a couple of reels with the 15,000 most-starred repos on GitHub, and also a random sampling of just all other repos, because we still wanted to include some of the sort of "inclusive democratic everyone" thing in this what we are calling *The Greatest Hits* version, and we're gonna give those to libraries. So we're intending to give those to various more traditional archives and libraries in other locations around the world.

**Jerod Santo:** Yeah, that's interesting, because I did read from some of your marketing copy - you say "This protects the priceless knowledge by storing multiple copies on an ongoing basis, across various data formats and locations." And I was like "and locations..." So I thought maybe this Arctic storage vault is just the first of multiple locations. But is that referring to like the Wayback Machine and these other libraries, or do you think you'll say "Well, we've got one in the Arctic. How about the Antarctic? And how about the Equator?" That'd be a bad place to store it, but...

**Jon Evans:** Well, yes to all of those, maybe. We don't really have a fixed formal plan for the next snapshot, but I personally expect that there is going to be a next snapshot five years from now maybe. We're working with [Project Silica](https://www.microsoft.com/en-us/research/project/project-silica/), which is this kind of amazing Microsoft Research project that uses fs(femtosecond) lasers and 5D polarized light technology to store enormous amounts of data on quite small platters of glass. So that's a possible format of the future.

\[24:05\] That's theoretically good for 10,000 years, because obviously 1,000 years isn't good enough... \[laughs\] But it's a little uncertain what the next snapshots will look like... But the general idea is that another way to get redundancy is to have multiple snapshots in multiple different locations.

**Jerod Santo:** So potentially more locations coming... What was the process to get them out to this particular place? You mentioned it was February 2nd, 2020 the snapshot was taken, you have 186 reels put in boxes... Were these just -- you slap a FedEx shipping label on them, or how do you get them up there?

**Jon Evans:** \[laughs\] Originally, we were going to go with -- in fact, we went ("we" being a small team of GitHub people) last year to investigate this site, put an initial reel with 6,000 repos in, sort of to proof-of-concept, prepare for the announcement, that sort of thing. So we did go to Svalbard, to the coal mine, and so forth... And the plan was to return for the actual deposit this year. But then the pandemic broke out, which as you might imagine, kind of confused the whole international logistics part of the operation.

**Jerod Santo:** Yes...

**Jon Evans:** Fortunately, Piql was based in Norway, and Norwegians at the time - only Norwegians could go to Svalbard, which is still Covid-free, by the way; there has not been a single case. And it's famously quasi-illegal to die out in Svalbard, so that's good...

**Jerod Santo:** Wait, wait, wait... Quasi-illegal to die - please unpack that. Tell me what that even means.

**Jon Evans:** I think this is kind of an apocryphal, maybe a too-good-to-check kind of story, but they don't really have any facilities for death on Svalbard. There's no morgue, you can't bury anyone in the permafrost, and so forth... So generally, when there's a serious medical condition, you get sent back to the mainland, one way or another.

**Jerod Santo:** That's hilarious... And somewhat morbid, but interesting. \[laughs\]

**Jon Evans:** So in this particular case, our Norwegian partners wrote the data to film, and then there are -- Svalbard is more accessible than people might think. Until recently, it was growing into a significant tourist destination, and there are flights there a couple times a week still. So it flew in the belly of the twice-weekly flight to Svalbard, this -- I think roughly the size of a Toyota Prius, for some reason, the volume unit we started using; the GitHub archive is about the size of a Prius. So they basically packed this Prius into the belly of a passenger plane, flew it up to Svalbard, and then sent it up to the mine in the mountain itself, which is actually not far above the airport. It kind of overlooks the runway.

**Jerod Santo:** How many people live up there?

**Jon Evans:** 3,000. It's variable, because there's a university there, so there's sort of an occasional university population, but 3,000 seems about right. It's certainly by far, given its latitude, it's by far the largest thing North, of about 70 degrees.

**Jerod Santo:** So you can't die there, but could you visit the mine and see the GitHub boxes, or at least a sign that says "GitHub lives here", or something like that?

**Jon Evans:** You can visit the mine. The vault itself is locked and sealed off, but I believe they do run - or at least they were running tourists to the mine itself. So you can get reasonably close. Similarly, the famous Global Seed Bank is right around the corner. You can walk from one to the other. It's about a mile distance between the two, from the mine to the Seed Bank and vice-versa. So you could do that too for a survival tourist destination.

**Jerod Santo:** I'm not familiar with the Seed Bank. Is that where they keep a bunch of seeds for things?

**Jon Evans:** Yeah, the Global Seed Vault. Every country has a seed bank, to maintain seeds of the various agricultural plants that they use... And then the global seed vault is sort of the backup to the backup for those seed banks, and it has this very dramatic wedge-shaped building, also in Svalbard.

**Jerod Santo:** Oh yes, I have seen the picture of that building. It's very cool. So you can't do any bug fixes though; so you can't go up there, extract your code, fix something real quick... Because that's in history forever. I'm sure I have bugs in there.

**Jon Evans:** \[27:48\] Oh, I definitely do. I fixed one the other day, and I actually thought "The stupid little typo is now eternal." \[laughter\] So yeah, one of my personal repos that happened to get captured up there... But I guess that's part of the appeal. Maybe in the future they'll look back and think "In these antiquated days of software development they still had bugs, they didn't have AI to automatically fix them while they were working. How fascinating." You know, maybe something like that.

**Jerod Santo:** Or they might think "We don't know who this Jerod Santo fella is, but he was a real idiot. He was a real bad programmer." \[laughter\] Well, speaking of that, I guess, can you opt out? Can you say "Yeah, not for me... This code is public, but I don't want it to be in perpetuity."

**Jon Evans:** You can opt out. In fact, you could, between the announcement and the snapshot. We got very few opt out requests. I forget how many, but it was like fingers of one hand, something like that, I think. But it is possible, and there's an option on your Settings page in GitHub somewhere in the app to opt out. I don't think it's -- I think most people are mostly opt-in. They like the idea of their stuff going into the future, and they like the idea of the broader perspective of capturing not just the open source on which society relies - though that's obviously crucial as well, and that's the part that may be in the medium-term of practical use; but being part of this big capture of not just software, but kind of the tech community, and to an extent a way of life that is being snapshot and put up there.

**Jerod Santo:** Yeah. How would you imagine somebody finding this or unpacking it a thousand years from now? What would they do with this archive? Would they read the code and try to figure out what we were like? Would they try to run the code, execute it? Are they trying to restore from backup, because something went crazy? \[laughter\] What do you imagine?

**Jon Evans:** We've talked about this a lot. I think the most likely thing is that it's going to be a primarily historical value. I think people might try and run the code again, especially since there are some games there... The Internet Archive - you can go to the Wayback Machine right now, or at least to archive.org, and play the initial Prince of Persia, for instance, which is very popular. And the same when the 8 bits became a weird aesthetic not so long ago. It's possible that people will wanna craft emulators of today's antiquated computers and run software the way it used to be in the old days, in the same way that people build 19th century train sets, or mount train sets today. There's also the possibility that you know, this will actually be useful.

A thing that people don't realize necessarily is that software is surprisingly ephemeral. It's all on hard drives. Hard drives don't last that long - years, maybe decades. Backup tapes are also -- they're good for decades. And over the long run, we kind of expect everything to get copied to the next storage medium, and the next storage medium, and so forth... And probably most of it will, but also, they're gonna have losses along the way... So it's easy to envision some piece of industrial software, that something vital has been running on for the last 40 years, without anyone noticing suddenly we need to patch, or some data format that's suddenly important for some high-profile legal case or something that we need to be able to access, that sort of thing... And someone going back and saying "Wait, where is that code from 2017 describing this obscure data format that looked like a good idea at the time for about two years?" in 2067. And someone's like "Um, Svalbard? Maybe we could find it there." \[laughter\]

**Jerod Santo:** Kind of like the beginning of an Indiana Jones movie - he's gotta go to Svalbard to find the thing.

**Jon Evans:** Yeah, exactly.

**Jerod Santo:** I mean, it could be sort of a Rosetta Stone if there were other code that was found, that they didn't know how to interpret it, or didn't know how to execute it... Because this has those instructions. Maybe there's an opportunity there to find the runtime that that ran against, or fix that dependency problem... Like "Hey, is all of Npm in here? Maybe we can actually resolve these dependencies." That's what I think about, when it comes to execution... Because a lot of the code up there - you're not vendoring your dependencies in your repo, right? So a lot of the source code is there. Are you taking binaries too, like executable code? Or would everything have to be built from source in this hypothetical situation where someone's trying to restore something.

**Jon Evans:** \[31:59\] There are some binaries up there. The repos with a lot of stars have gotten binaries, though mostly it's just source. I am kind of curious myself just how many copies of Node modules we wound up caching because I thought seriously about excluding that from the archive, but then I decided not to in the end... And even that might have some value, an implicit snapshot of the various dependencies along the way, and how those changed. But it wouldn't shock me greatly if there were a lot of Node modules just raw up there, duplicated over and over and over again. But that might be useful as well.

There is also gonna be a master index. So in principal, assuming everything's on GitHub, which most open source is these days, and it's not some sort of private repo, then you should be able to, given time and good computers, sort of reconstruct most of the dependency tree for any given project.

**Break:** \[32:51\]

**Jerod Santo:** So one of the things I read about in the documentation around this is this idea of a tech tree. Maybe you already described this with the manuals, but it's like a Tech Tree, and I wasn't sure exactly what that is. Can you describe what the Tech Tree is and how that concept plays into the archive?

**Jon Evans:** Sure, yeah. I'm glad you brought that up, because it is a distinction. It's not the same thing as the manuals or the guide, and these sort of instructions for decoding that's on every reel, that turns every reel into its own self-contained archive. The Tech Tree is a reel, or possibly two - we're still compiling it; we're gonna add it to the mass once it's done - just of larger, higher-level explanatory stuff. Mostly pre-existing works, books and so forth, to explain what software engineering is, what an algorithm is, what a computer is, how you would hook together transistors and Op-amps, and so forth, to form a NAND gate; how NAND gates would make up ultimately a small microprocessor, that sort of thing.

So in theory, there'd be enough information that you could in fact reconstruct a fair amount of modern technology from the information in those various books. Now, this is a very romantic and compelling image. I should mention also in all honesty that our advisors were like "Yeah, this is cool, but we are living in what is gonna be the best-documented era in all of history already." It's very unlikely we're gonna have a future in which many copies of these books don't already exist around in many other physical libraries that are kind of easier to get to... But we figured it'd be useful as context and general understanding for the source code which goes with it as well.

**Jerod Santo:** \[35:58\] So did you end up packaging that stuff up, or this is an idea that's ongoing?

**Jon Evans:** It is gonna be packaged up. We actually just released it for public commentary last month, and I've been sort of incorporating pull requests and issues on that recently... So we're going to compile those books, we're going to put visual copies... This will all be human-readable, not encoded, for obvious reasons, so that you've got the background to begin with... Except for Wikipedia, because that's too big. But we're gonna put a snapshot of Wikipedia.

**Jerod Santo:** I was just gonna ask that. It seems like that would be the Easy button for this - just put Wikipedia up there and you're done.

**Jon Evans:** One of the highest-rated comments on the video when we first released the video last year was "Don't forget to store Stack Overflow next door."

**Jerod Santo:** \[laughs\]

**Jon Evans:** But Stack Overflow is also Creative Commons, so we are in fact going to get a dump of Stack Overflow and drop it in the Tech Tree as well, next to Wikipedia, yes.

**Jerod Santo:** That's awesome. What else is going in there?

**Jon Evans:** Wiktionary, a couple of other things, and a list of about 200 books, mostly but not exclusively technical, all of which is available on [The Archive Program repo at GitHub](https://github.com/github/archive-program).

**Jerod Santo:** I'll snatch that one up and link it for those interested in seeing all the things inside the Tech Tree. Are you guys taking suggestions?

**Jon Evans:** We are actively taking suggestions right now. We're incorporating some at the moment, yeah. We still have to work with publishers, since we're literally making a copy. Copyright becomes an issue, obviously... So we have to figure out the rights issues with a bunch of these and so forth, which is one reason it's been a little slower than the rest of the project... But we are actively working on compiling that and adding it to the vault.

**Jerod Santo:** Okay, very cool. Yeah, I've found it, and you have it broken out into different areas, such as hardware architectures, hardware development, electronic components, and then you have books, and you have articles, I assume... Written modern software development, and under there you have these different books that are gonna be included... So that's very interesting.

What's the next iteration of this then? What's the timing? Like you said, the pandemic has changed timings. Was the hope to be once a year you'd ship another thing to the Arctic, or would it be every once in a while? When would you be updating the vault?

**Jon Evans:** I think we're still figuring out the roadmap. I wouldn't expect every year. That seems a little -- I don't think we need that much frequency. The first deposit captures the last (hopefully) 20-30 years of software. I could see every five years, and I could see different data formats, again, for each one; sort of redundancy through variability, that kind of thing. The tech three is also a thing which I think we'll iterate over time. The romantic image of the Tech Tree, and one that we do aspire to, is an actual manual for rebuilding technological civilization from scratch.

The v1, as with the Long Now's Manual For Civilization, is existing works, but I could see things being constructed for this purpose, of kind of courses over time. But that is a hypothetical, somewhat pie in the sky stuff for now. I think the roadmap, at least the one that I personally have in mind, is some snapshots every five years or so.

**Jerod Santo:** Oh, it looks like you're including Wiktionary as well.

**Jon Evans:** That's correct, yes.

**Jerod Santo:** This is a pretty big Tech Tree. You have a lot of copyrights to get figured out here, don't you? I guess you just speak to each publisher once, and you probably get all the permissions you need for that publisher.

**Jon Evans:** Yeah, that's the idea. I mean, already some have been extremely helpful, like O'Reilly, Packt - they've been great. We're having trouble just sort of working out the whole list of publishers. There's quite a long list if you go through them. But we'll get them one at a time, as time goes on, hopefully.

**Jerod Santo:** Somewhat interestingly related, with regards to the cultural and technical context of the time period - all of the Changelog and our whole network's podcasts transcripts are open source on GitHub. So they are undoubtedly also in there.

**Jon Evans:** Yes, that's true. Everything up until February 2nd will be recorded, word for word.

**Jerod Santo:** So you have thousands of conversations of technologists through the years associated with that. That's the kind of thing that I think is interesting in a tech tree as well - what were people saying to each other?

**Jon Evans:** \[40:05\] Yeah, and actually that's one of the things that I get excited about. I mean, there's a lot of source code, source code is very important, there's the fundamental pinnings of open source, which is a cornerstone of technology and civilization as we know it - that's critical as well. But also, as we all know, people use GitHub for all kinds of weird things.

**Jerod Santo:** Right...

**Jon Evans:** There's recipes on there, there are books on there, there are random notes on there all over the place... And the extent to which historians of the future will find that this weird and unexpected treasure trove is kind of appealing.

**Jerod Santo:** Yeah. All the things you'd find in there would be quite an interesting thing to dive into.

**Jon Evans:** Exactly.

**Jerod Santo:** What about the issues? So lots of conversations go on on GitHub that are about the source code. Is GitHub issues gonna be involved anywhere?

**Jon Evans:** We did indeed also pull the issues, and the issues are in there.

**Jerod Santo:** So how do you decide which issues to pull? Of the repos you decided, you just took all the issues?

**Jon Evans:** Yeah. Issues, it turns out, are not that spacious. They're mostly text.

**Jerod Santo:** Right.

**Jon Evans:** So yeah, the issues were quite compact. They were not really a significant figure in the sizing.

**Jerod Santo:** And all the comments on the issues as well, I would assume.

**Jon Evans:** That's correct, yeah.

**Jerod Santo:** I'm just enjoying the fact that there's so much drama around that's just been immortalized in the Arctic Code Vault... Developer drama. \[laughter\]

**Jon Evans:** I was actually just thinking of that - the future might look back and think "Wow, this was a testy and easily aggravated time... \[laughter\]

**Jerod Santo:** "What's wrong with these people?" Or they might look back and think "Man, they were so civilized back then. Look at how they reacted..."

**Jon Evans:** \[laughs\] "They were so passionate. They really cared about their bugs."

**Jerod Santo:** "What's with these two-dimensional emoji? We use four-dimensional emoji now."

**Jon Evans:** \[laughs\] I mean, we got the unicodes and all the emoji are in there as well, so I look forward to history looking back on those. The guides - there are some translations, as I mentioned... Arabic, Spanish, simplified Chinese and Hindi. Most of it in most of the Tech Tree is in English, at least this iteration. And certainly, that might change in future iterations... But a thing which surprised me and I thought people might be interested in is that we have this great linguist, this consultant, John McWhorter at Columbia, and he said that people assume that -- since English has changed a great deal in the last thousand years, they assume that it will change a great deal in the next thousand years. But he thinks the evidence shows that's actually quite unlikely. His estimation is that English is more or less stable now.

People learn it younger, everyone's more interconnected; it's not like in little islands evolving off on its own... So the expectation is that the English many hundred years from now will be as different from today as like Jane Austen's English is. A little weird, a little courtly, a little formal, but not that different. His exact quote was "As uncool as it may be, you'd be alright with just English."

**Jerod Santo:** Huh... That's interesting. I assume that it would move -- I mean, it's such a long time. You'd assume it would move to where it'd at least be difficult to understand, but...

**Jon Evans:** It was impressive to me as well, actually. You know, we did cover our bases by after all adding these other five translations of the most significant languages. We also in fact -- just to be on the paranoid safe side, each reel begins with the Universal Declaration of Human Rights in every known written language in unicode. That's several hundred. So even if only some obscure Basque language survives, we do in fact have a Rosetta Stone for that on each reel as well.

**Jerod Santo:** I wonder if there was a sense of dread when it came time to actually ship... Because in software, we have the advantage over most disciplines of just shipping iterative improvements at all times... And I remember talking with folks who wrote code for NASA and stuff, where it was like "This had to work. This was our one chance." You ship it to some satellite, or some orbiting thing... It was just like -- even back when they had to package up software on a Compact Disk and put it into a box and sell it to you in a box, that idea of like "This is the final (what did they call them) Gold/Goldmaster (I don't know what they called them back then).

**Jon Evans:** Right.

**Jerod Santo:** \[44:08\] But that was like THE version. And sure, we could ship patches maybe, but they weren't gonna get in for three months. This is like "You get one shot at this snapshot." You put in the Declaration of Rights and stuff; these things where you're like "What else should we shove in here?" Did you have that moment where you were like "No, we've gotta close the vault. We're just gonna stop shoving stuff in", or was it difficult to stop?

**Jon Evans:** No, we totally did. It was difficult to say "Okay, this is it." It was useful that we actually had a fixed date, and like "This is gonna be the snapshot." We set that fairly early on, and that was good. My degree is in electrical engineering, and I did a couple of co-op terms. I went to Waterloo in Canada, that does co-op of chip designs at Nortel and at Hewlett-Packard before I went into software, and spent the entire rest of my career after I graduated in software, with hardware being much too unforgiving and permanent...

But the chip design was a lot like that - you're working on this VHDL, and you get it working, and you get the test working, you think, and then you actually send it out to be fabricated somewhere, and burned into silicon... And if you screwed up, there's nothing that can be done.

**Jerod Santo:** There's no going back.

**Jon Evans:** Exactly. So it reminded me of that for the first time in a very long time, that you are committing this to the world, whether you like it or not.

**Jerod Santo:** Yeah. As a software developer, I assume that you have all but forgotten that feeling... Because don't we have the freedom right now to just not really worry about that?

**Jon Evans:** It was pretty unusual, the feeling of perpetuity, of irrevocability. It had been a long time since I'd felt that professionally.

**Jerod Santo:** The permafrost.

**Jon Evans:** \[laughs\] Yes, excellent metaphor.

**Jerod Santo:** Excellent metaphor, the permafrost. \[laughs\] Well, that is really cool. Anything else about the program that we haven't touched on, that I haven't asked about, that you would like to discuss? I mean, it's really awesome, and I really appreciate you sharing the details of this program, and all the work you did to archive these things. Anything we haven't touched on that you think we should?

**Jon Evans:** I think we have captured most of the things. I mean, I wanna stress just how important and how useful our partners have been - the Internet Archive, Software Heritage, Stanford, the Bodleian etc. I'm sure I'm leaving someone off now who really shouldn't be left off. This is inevitably the way when you try and list people... But I think it was really important that we cast a broad net, trying to work with as many of these organizations... The Long Now. The Long Now have been great. Having a conversation with anyone at The Long Now is always a mind-opening experience, even if it's a relatively simple one. And Silica, another partner...

That's a long list, but I think it was important to treat this not as a thing that one company is doing for one company, but that a broad consortium are doing, and hopefully has general goodwill. I mean, this is not a project which has an ROI. This is a project which we think is actually important, or could be important. It's sort of a weird project, in that you hope it's not really that important. In a perfect world, all this data will be saved anyway, and you just sort of grab it off the internet, and no one will care about it.

**Jerod Santo:** Right. But you never know.

**Jon Evans:** Yeah, exactly. Anyone who works on backups knows it's important, even if it's not used.

**Jerod Santo:** So you say there's no ROI on this... What was the magnitude of the I, at least? You don't have to share specific numbers, but was this a large investment? Is the rent high on the mine? How much went into this kind of project?

**Jon Evans:** \[47:27\] I'm pretty sure I'm not supposed to share numbers, but I can say I think it was more economical than people assume... And in fairness, Piql, who are obviously the partner I really should have mentioned, in the Arctic World Archive, were very understanding in working with us and realizing that this was a beneficial project more than a private benefit project. So there was no sort of rent we paid upfront for storage in perpetuity in the World Archive, which is useful and is probably quasi-eternal, as much as things are eternal these days... And it's owned by the Norwegian government.

The Svalbard Archipelago actually has its weird own legal structure. Anyone can go to Svalbard, you don't need a passport to go there. Anyone can work there, and it's governed by its own special treaty, which was signed after World War I, which made it a place officially free of war, and free habitation for any human being that can get there.

**Jerod Santo:** Is it sovereign then, or is it underneath --

**Jon Evans:** Well, it's definitely Norwegian, but it has its own special legal status as sort of extra-national territory as well.

**Jerod Santo:** Wow.

**Jon Evans:** I mean, I'm not a lawyer; my wife is a lawyer and I'm sure she'll be very upset at me misrepresenting the legal status... \[laughter\]

**Jerod Santo:** Well, you go ask her and get back to us.

**Jon Evans:** Yes, that was my crude layman's takeaway from the strange legal status that Svalbard has, which is kind of an international zone of peace, freedom and availability. So it's sort of an optimal place to store something. It's not likely that conflict is gonna break out there any time soon.

**Jerod Santo:** Right. It's optimal for storage, but sub-optimal for living, which is why there's only about 3,000 people there. No one's breaking down the doors, even though it's 100% Covid-free.

**Jon Evans:** That is correct, yes.

**Jerod Santo:** Awesome, Jon. So like I said, a storied career, you've done a lot of things... This is a very cool project; I would think the highlight of your career - or at least if it was my career, it would be the highlight of my career...

**Jon Evans:** Absolutely, yes.

**Jerod Santo:** What's coming next for you then? Can you top this one, or do you go back to building software products? What's next?

**Jon Evans:** I am going back to building software. I think it's important to keep doing the thing that you care about, and I do think software is important. I'm working on a new novel; who knows what will come out with that...? This year has been pretty bad for plans in general, as you may have noticed. I have friends calling it the Great Reset here, so we will see what happens in 2021... But I expect to stay involved with the Archive Program on an indefinite, ongoing basis, and hopefully I'll work on the next iteration of it as well.

**Jerod Santo:** Awesome. Well, thanks for coming on the show and telling us all about it. We appreciate it.

**Jon Evans:** Thanks very much, it was a great talk.
