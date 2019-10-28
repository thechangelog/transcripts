**Adam Stacoviak:** Today we're joined by Olivier Lacan...

**Olivier Lacan:** That was close.

**Adam Stacoviak:** Did I do good? Was it close?

**Olivier Lacan:** You did better in practice.

**Adam Stacoviak:** I did, yeah... Long story short, our guest is French, so obviously his name is a little difficult to pronounce. I'm here, Jerod's here, and we're here to talk about changlogging, which is sort of meta in a sense... And if you know the voice of Olivier, then you've probably heard it on Ruby5; you're prolific in Ruby and you do things at CodeSchool, so I'm sure you've got your voice out there all over the place, right?

**Olivier Lacan:** Sadly, yes. I talk a lot.

**Adam Stacoviak:** Well, in any case, welcome to the show.

**Olivier Lacan:** Thank you. I'm happy to be here.

**Adam Stacoviak:** It is sort of meta, because I've stumbled upon this project of yours which is Keep a Changelog; the subtitle is "Don't let your friends dump git logs into changelogs", which I thought was pretty cool, because you know, we're "The Changelog", and everybody who does open source - or any sort of software really - is to some degree keeping changelogs; even proprietary software has changelogs, right? So this isn't just open source, this is sort of software as you see it.

**Olivier Lacan:** \[00:04:09.21\] This is what I wish people would do, but I've realized in the recent months as I was actually going through upgrading a lot of old apps, a lot of apps that we have internally, that people actually don't do that. People actually tend to think that their software maintains itself, or as long as they contribute to it, then it's done and you don't really have to do the side work, because it's kind of boring to keep a changelog and actually write down like a journal... Like, "Okay, we did this this week, and that week..." Because it's just tedious, and people would rather be as impactful as they want to be.

**Adam Stacoviak:** Well, even think about those who are shipping apps to the App Store, like Apple's App Store, or the Play Store, even those apps... Actually, a lot of the developers have a lot of fun with these -- I don't know if they're called changelogs there or not, but...

**Olivier Lacan:** Release notes I think they call them...

**Adam Stacoviak:** Release notes, yeah... But it's still the same thing.

**Olivier Lacan:** Yeah. I actually have a folder of screenshots that every time one of those developers makes an amazing changelog where they're either really funny or they actually go through insane lengths to explain "By the way, watch out - this is the new stuff that's in this version. You might wanna stick to this version..." - so much thoughtfulness in a few developers, but the rest are just minor bug fixes, minor bug fixes. Improvement. Speed improvements. Bug fixes. All these releases... What bug are you fixing?! Tell me. Maybe I had that bug, and now I'm super happy.

**Adam Stacoviak:** The issue number, or something. Yeah, "Give me some context."

**Olivier Lacan:** Yeah, and especially for iOS stuff, so many little subtle bugs that you could make people happy if you just mentioned what bug you fixed. It seems so obvious, but people don't do it.

**Jerod Santo:** So is there a semantic difference between changelog and release notes? Maybe just the audience? It seems like -- when I think of a changelog, I think of the audience being technically sound, and maybe even developers... When I think of release notes, maybe it's just in the app store, and obviously you're speaking to your end users; it maybe just depends on who your end user is...

**Olivier Lacan:** Right. I realized that while I was doing this project. As soon as I put it up, someone came up and said to me, "Hey, so you're calling this a changelog, and there's actually a different thing called History or News" and in the GNU community there's apparently a differentiation between those two. So there's one that's more release note oriented, and I think that's the News... Yeah, so it's the News text file that you leave in your repo; that one's more generally, like if you wanna parse it really quickly... And then changelog, they contend - and I'm kind of not super happy about that - that it's okay if it's just a Git diff dump... And I think there's no value in that.

If we use Git and we can use git log, why would you ever -- you can do the same thing on GitHub; you can do a compare between two tags or two specific release commits, and you will see that diff, you will see those commit messages, and you can go through every single one and how -- sometimes there's just an angry developer going "I fixed this super-annoying thing!" There's this no context, there's no semantics... It's very strange to me.

**Adam Stacoviak:** So the homepage for this project is keepachangelog.com. If you're listening live, you wanna follow along -- this is a podcast, so you are listening if you're hearing this... But keepachangelog.com, and one of the questions down there says (to Jerod's question) "Is there a standard changelog format?" Your answer is "Sadly no", but you hope to make this particular one you're making as part of this project become the standard changelog file for all open source projects, and I would assume maybe others to follow along.

It's got this idea of Added, Deprecated, Removed, Fixed, which I think is really important, because it kind of gives you a rhythm to follow at least, you know?

**Olivier Lacan:** \[00:08:14.14\] Yeah, and this is something that I noticed - a lot of people just say what was added and say what was removed, but they don't say "Okay, was something not deprecated?" Because usually, when you parse things, it's also as important to you to know that nothing was deprecated in this version, and you can safely upgrade. Because if it's not mentioned, maybe it's not there, but maybe they forgot. And it happens a lot in open source projects, because you merge a contribution and you forget -- that person didn't make a changelog commit, and boom, you're suddenly breaking all these installs from people... And it's just a lot of friction and pain that I think we could easily remove with a little bit of forethought.

**Adam Stacoviak:** I love the dog you have in the background, too. You warned us, but the dog is still there. I might edit that out, but I don't think so...

**Olivier Lacan:** Well, he's actually going nuts... He's having fun right now. He's actually never done that before, but I think he can sense that I'm talking, and he's like "Okay, let me screw with him."

**Adam Stacoviak:** It's giving your side of the audio a little character, so to speak.

**Olivier Lacan:** Yes.

**Jerod Santo:** So let me read your definition here of a changelog back at you, and then we can kind of discuss the difference between this and other things that may exist. You say that "A changelog is a file which contains a curated, chronologically ordered list of notable changes for each version of an open source project."

**Olivier Lacan:** Right.

**Jerod Santo:** So I'm guessing that -- I'm reading in the tea leaves here that you're emphasizing curation, chronologically ordered and notable as kind of the key differentiators between this and what might be a history file, which maybe is all the commit logs. Is that fair?

**Olivier Lacan:** That's very fair. And I think the difference is clear in the same sense -- so if you think of an API, a public-facing API, when you change things on the API, you wanna make sure that everybody understands what they are; not really the low-level stuff that you changed, but the actual public API stuff.

So the private API stuff is nice to know, it's good, but it's not as crucial for you to know. This is basically the same differentiation -- this is for the outward world, not the people who work on the project necessarily.

The people who work on the project know that there were things added privately, that they did some groundwork for a new release, for instance, but that's not necessarily notable for the people using the software. And I think that actually -- we talked earlier about release notes for iOS apps or just Android apps...

**Adam Stacoviak:** Yeah.

**Olivier Lacan:** I feel like -- I wish open source developers would basically crank up the empathy on their open source end users the same way that iOS developers sometimes do with their paid customers... Because yes, people don't pay, but if you keep such a well-curated list of all the changes, first of all it encourages people to do the same, it makes it easier for people to jump in and contribute...

For instance, I think Haml was an example... I was waiting for a feature in Haml or a feature in Redcarpet, in one of those things, and I was about to start working on it, and I thought "Okay, so it's not listed in the readme, I can't find it anywhere", and I went through the changelog real quick and Boom, there it was. Footnotes were added I think recently in Redcarpet and I was super-excited because for my blog - just little footnotes, and you could do that very easily... And I didn't have to go any further.

Of course, you can improve your feature descriptions on your library, but it's also great for people to just jump in and see, "Wow...!" Yeah, when you jump in a project, you always assess "How well-maintained is this project?" What better way to see how well-maintained a project is than show "You know what - every month, every week, every year we have these incremental changes, and this is all the things we carefully change and add."

**Jerod Santo:** \[00:12:05.03\] Yeah, absolutely. I think as a user of open source software and somebody who's written a lot of software over the years, I used to get really excited for every single project update. I was like, "Oh, I can't wait to upgrade, and get this in there...", and kind of as you get scar tissue to the process of software development, and realizing that your regression test suite is not as awesome as you thought it was and there's still bugs that affect you and trickle down... I get to the point where I am very wary of upgrading dependencies...

**Olivier Lacan:** That's so sad!

**Jerod Santo:** But let me just say, a solid change, like a release notes or a changelog that actually provides me the information of "Here's the value in upgrading to our newest release", like high-level bullet points, kind of what you're advocating for here, of like "Here's why it's worth it for you. Here's the new stuff that is of value", goes a long way. It gets me to pull the trigger and say "Okay, this is worth me actually going through the process of upgrading this dependency."

**Adam Stacoviak:** That process you talk about, too... To your point, Olivier, you say that you wish more software developers, more open source developers took some -- I'm not sure what your exact words were, but I'll think of it like just making it an important thing to curate (to use your own words back at you) this changelog... And I almost feel like open source developers already have so much on them with issues, and other stuff... I think that as it's gotten more social, it's gotten harder and harder to take care of these staples, so to speak: the changelog, readme, a history... All these files are staples in software, and I feel like it's just more added overhead to deal with.

**Olivier Lacan:** It's a good point, and... I think the word I used was "empathy." And it's a difficult thing, because when you're drained, when you've worked so hard - and I know that a lot of people get a lot of flack on their issues, and people come in and just crap all over their project, even though they've worked for years and years to make it... But I feel like in a way if you think of it as a preventive (preventative? I don't know) measure, you can basically "Okay, let me carpet bomb in a way this information to make sure that less misunderstanding and less confusion will happen."

To me, if you keep a changelog and you do that often and regularly, you're actually saving yourself the hassle of having to deal with people who misunderstand or who are having upgrade issues. Basically, you're just saving yourself a lot of time... And it's hard to see, of course, because just writing down little things like that means that you have to take some time to reflect after a release or just as you're about to release... Or you have to find out like "Oh, what pull request did I merge in? Did they put a changelog item?", stuff like that.

But if you do, then you're actually allowing your project to be more lightweight, in a way... Because stuff is written down, and you don't have to worry -- you're not the central repository of "Will this break my software?" The file is.

**Adam Stacoviak:** Yeah.

**Jerod Santo:** Well, let me just kind of -- this might be hard for the listening audience, but kind of just go through your version on keepachangelog.com... Just kind of describe the format that you've laid out, because...

**Olivier Lacan:** This is sexy. Let's read the changelog together.

**Jerod Santo:** \[laughs\] I'm gonna do it really slowly.

**Adam Stacoviak:** Should I slow the music down, and everything?

**Olivier Lacan:** Mm-hm. Get some Barry White rolling.

**Adam Stacoviak:** Put your bassy voice on, Jerod.

**Olivier Lacan:** Yes.

**Jerod Santo:** "Markdown format." \[laughter\] I don't have a bassy voice--

**Adam Stacoviak:** Did you say the word "format"?

**Jerod Santo:** \[laughs\] Yeah, "Markdown format." Is everybody getting excited already?

**Adam Stacoviak:** Everybody's excited.

**Jerod Santo:** So you're advocating for a markdown format...

**Olivier Lacan:** Yup.

**Jerod Santo:** \[00:16:04.16\] The first thing you have -- okay, the title; we'll get past that. But for each changelog entry you have a version number, a well-formatted date, which you have a section all about dates in here... Then you have four sections: Things added, Things deprecated, Removed, and Fixed.

In this example you give, your Added has three bullet points, but they're hyphenated, the things added. Then your Deprecated, Removed and Fixed are all empty, but you don't just leave them empty, you actually explicitly state "Nothing."

Can you just go through the thought process behind this format and why you decided and think that this is -- I know you say it's not the truth at the bottom at the page, but it's just something that you're advocating that people use.

**Olivier Lacan:** There's a ridiculous amount -- so this is where we get really nerdy, because every single thing you said, I had thoughts going "Okay, I have to explain this."

The date format is a big deal, because Brits are super -- this is great, I hope you have Brits listening; I'm French though... This is igniting a war; we've got generations of war between us... Brits have the stupidest date format. They put the number, they say 8 April 2014, and they pronounce it "April 8th." It's just mind-boggling. Basically, they have the wrong writing -- so if they write it in an article... If you go to The Guardian and read an article in The Guardian, they often do that.

Americans have an also stupid way to write dates where they put the month, and then they put the day, and then they put the year... Just because, you know, why have a logical order ever?

**Jerod Santo:** Yeah, I thought ours was truly the worst, but you're saying that the Brits' is actually worse than ours.

**Olivier Lacan:** It is actually worse. So this is what I do - I basically anger people, and then I say, "No, let's hate on these guys more." \[laughter\]

**Jerod Santo:** You're just tearing us down over our date formats.

**Olivier Lacan:** Right. I'm just making people -- it's a strategy. Hear me out. So the last one is the slightly international date format, which to us is the MySQL database format, where you put the year, then the month, then the day. It makes more sense, because 1) it's sortable, easily; if you have files in a folder and they're named with "2014-05-31", you can sort that and it will never go out of whack when you're sorting it. So that's one reason.

But the other reason is you can figure it out because it's different enough from the English and the American one that you can say "Okay, this is clearly the year, and why would the next thing be the day?", unless you really have the backwards American way of thinking, and you actually inverse that thinking.

**Jerod Santo:** Let me just say - I use this format personally: yyyy-mm-dd. I use that on everything. It's always just considered the nerdy format (I don't know if it's the international format) because only nerds would use this; people who think about "Oh, it sorts naturally in a directory", which I do think about... And I use that on checks, and people--

**Olivier Lacan:** You use that on checks?

**Jerod Santo:** Yeah. You put the date on the check and you use it.

**Olivier Lacan:** Wow.

**Jerod Santo:** I like consistency, so I'll just use the same everywhere...

**Olivier Lacan:** I'm gonna do that.

**Jerod Santo:** ...I'm not gonna be like "Well, this is my check context, so I'm gonna switch to American date format" - no, I'm just gonna use the nerdy version. And people here in America - they get mad at me for this. \[laughter\] They're like, "What?! What's up with your date format?" I'm like, "It makes the most sense. You know, biggest to smallest, it's unambiguous..." So I'm totally in with you on your sensible date format. I think we should use it even outside of changelogs... Like, let's just use it everywhere.

**Olivier Lacan:** Okay. Let's start a revolution. See, you have to make another website, a single-page website like this where you talk about "Let's keep a date format", or I don't know what you wanna call it, but basically that.

\[00:20:00.19\] The things that scares me in what you say is I didn't realize, being outside of -- well, having grown up outside of the American culture mostly, I don't know what's super-weird. I just know what doesn't make sense to me... But there are things that I say or do that shock people and that surprise me, because it's just not a big deal in Europe or in France.

Anyway, so the date is one super-important thing. The other part actually is... It's like Heading, so the first heading -- and this is something I've been criticized for and I'm completely okay discussing it, because as you mentioned, it's not the truth, it's just an idea for a convention; we can agree or disagree, we can improve it, to be better.

But the first heading - markdown has pound signs for headings, so header 1 is Changelog. The title is "changelog" just because what if you discovered this file and you have no idea what it is? If you're a beginner to open source and you jump into this text file that says "changelog", "What is this...?" You see Changelog, and then there's a subtitle, a little paragraph underneath that says "All notable changes to this project will be documented in this file." Self-explanatory. I have context now. I don't need to be a nerd (like us) to understand why is the date format like that. Now you know "Okay, I can sort of decipher what's this thing about."

Then I use header level 2 for every single version, because -- well, one of the reasons is that GitHub added I think GitHub Flavored Markdown, the auto-linking anchors on these headers... Yes. Which is great, because that means you can automatically -- if it's parsed as markdown, you can link to the release by clicking on the little paragraph sign that shows up next to the anchor level 2. It's kind of hard to demonstrate.

And finally, there's the third one, which is the groups of changes - the added changes, deprecated changes, and stuff like that. And the dashes are simply because now -- I think it's a GitHub Flavored Markdown format, but a dash makes unordered list item, so it just looks better...

**Adam Stacoviak:** I think that's markdown unanimously that they did the star or the dash...

**Olivier Lacan:** You're right, absolutely.

**Adam Stacoviak:** ...because so many people use that in email format and whatnot, so the idea was to translate from like the normal way of writing words to something you can actually mark up without trying to.

**Olivier Lacan:** Which is a great idea.

**Adam Stacoviak:** Yeah. Or I guess mark down.

**Olivier Lacan:** Right.

**Jerod Santo:** Yeah, I didn't realize that the dash also did unordered list; I thought that was just the asterisk.

**Olivier Lacan:** Yeah, so I'm the guy on open source projects that actually goes and submits pull requests through your readme, and then sneakily changes all the stars to dashes. \[laughter\] I'm that guy.

**Adam Stacoviak:** Your PR is just nothing but stars to dashes... What's up with that change?

**Olivier Lacan:** No, I sneak it in with other things, so people go "Alright, sure... I guess... Whatever" and they just merge.

**Jerod Santo:** Do you ever get your PRs rejected and be like "This was a great change, except for the whole stars to dashes thing you tried to sneak in there..."?

**Olivier Lacan:** So now that it's public, it will happen... But no, it's never happened. Actually, my evil plan worked every single time.

**Break:** \[00:23:08.01\]

**Adam Stacoviak:** Another thing I like about this format too is that -- you know, there's a debate in your GitHub issues for this, to some degree, at least talking about what the format should be. I think there were some other sort of unusual formats that you kind of balked at, and I think it's a closed issue right now... But you might recall that one... Some sort of other -- I don't even know what the file format was, but it was something weird.

I think markdown reads well because you can read it as you would not marked up to HTML, you know?

**Olivier Lacan:** Precisely.

**Adam Stacoviak:** But you can read it just like it would be, without reading HTML. It's just easier to read on its own, but at the same time if the parser is smart enough, it can take that same format, and like you said earlier, put the anchor tags on certain headings and allow you to deeplink within the same document... So it has a lot of added benefits, regardless if it's plain text markdown or actual kind of like markdown -- I don't know what you'd call that... Parsed, I suppose; that would be the better word.

**Jerod Santo:** HTML-ized?

**Adam Stacoviak:** Yeah, no matter how you get the file, whether it's the dumb version text or the smart version parsed, you get the same user experience... Or at least a similar user experience.

**Olivier Lacan:** Right. So it's portable, basically.

**Adam Stacoviak:** Yeah.

**Olivier Lacan:** The idea is that you can have it on your local machine even if you don't have a markdown parser; it'll look fine, and then it'll look even better on GitHub or on Bitbucket or anywhere because they will parse it, and you'll see it.

Again and again, the idea is just try to keep it as accessible as possible. I don't wanna go talk about that right now, or I don't know if you guys wanna talk about right now, but that stems from kind of what my original open source -- I don't know, what's the religious thing where you just go convert people?

**Adam Stacoviak:** Evangelism.

**Olivier Lacan:** Evangelism. My previous thing was Shields, and Shields was about GitHub metadata badges, and the idea was, again, keep things accessible, because there might be people who don't use your project who will see it and then just get turned off immediately because they don't know what it's about, what version it's on, stuff like that. So it's the same mindset basically - just making things as accessible as possible.

The format you mentioned is Org-Mode, which I didn't know about before...

**Adam Stacoviak:** Yes, that's the one... So what was that? Did you dig into it more?

**Olivier Lacan:** A little bit... Basically, it's -- in the Emacs community they use Org-Mode for stuff like this; they use Org-Mode for everything that I think is metadata about the open source project. I might be completely butchering this, but... This contributor talked about it... It's nice that the Emacs community has this, but again, Org-Mode seems so obscure, and I think there was some syntax issues with the way -- I think it could parse markdown, but yeah... Again, make a great case for it...

What I'm trying to achieve is not to please everybody; it's this idea, I guess, that I take from the Ruby community, in a way (because I'm a Ruby developer), that it's great to have opinions, everybody, and I certainly have them, but right now we're in a state that's not good, I think... And I think first we should achieve a modicum of consensus, like just have a little bit of a convention on at least this basic format. Then we can evolve it, if you want, but let's have that first, so that way at least every project you can think of, you can go and click on a changelog file and see what's in it. Sadly, of course, the naming is an issue, but...

**Adam Stacoviak:** I like the naming, but you know...

**Jerod Santo:** There's lots of projects that don't have any changelog whatsoever, so something would be a huge step up, right?

**Olivier Lacan:** \[00:27:54.16\] Right. So what I encourage listeners to do is basically what I've been starting to do in the last few months - I've put this page up and I've used this page as argument bullets to go inside of a project that I use. Basically, when I do an upgrade, there's a shock and I don't know why something doesn't work, and I say "Okay, let's see the changelog." If there's no changelog, I say "Okay, do you want me to make a changelog for you? This is what I offer, this is the format. Are you cool with that?" and at least two, or three, or four, or more people actually have been like "Yeah, sure. You can do it. Just send a PR."

I think one of the contributors for Discourse, a really great British guy... I can't remember his name. But yeah, if you go to Discourse, they use something to -- rack-mini-profiler. It's this really cool profiling thing that you can use in Ruby apps. Sam Saffron. And his changelog was strange, because it was backwards; so the oldest changes was at the top, which is kind of counter-intuitive... And the date format was a little strange, because he's British; we can't judge, but yeah...

**Adam Stacoviak:** \[laughs\] A little jab there...

**Olivier Lacan:** Yeah. But again, he's an amazing contributor, but because of his cultural background...

**Adam Stacoviak:** It's that one thing, the date - you just can't like it because of that?

**Olivier Lacan:** Yeah, but it's not just that; it was more stuff. So if you look at the history of that file, you see kind of the -- what I'm trying to do first is reorganize and use markdown. And people get hung up about markdown, but markdown, as you said, is accessible...

**Adam Stacoviak:** It's very portable, yeah...

**Olivier Lacan:** Right. You don't need to know markdown to understand what markdown is about. And then the chronological thing was the second thing. So basically, I'm gonna use this as a template for how you would improve an existing changelog and/or create a new one.

I'm trying to create one for a Rails gem called Strong Parameters, which is hugely important to anyone who's using older versions of Rails than the current one, and sadly, it's very hard to find out what was added to this stuff; some of it really is, again, crucial, because if you don't know exactly the difference between version X and Y, then it's suddenly very frustrating, and I don't want that. I want that removed as much as I can, as far as frustration.

**Adam Stacoviak:** What are the other culprits of frustration? In your notes, or at least on the homepage of Keep a Changelog you've got dumping a diff, you've got these kind of lazy ways to do a changelog, but not do a changelog, that sort of upsets everyone... So what are some of the ones that really get you angry?

**Olivier Lacan:** So the one thing if you ever do a changelog - having a section about Added and Removed is fine. If you ever make a backward-compatible change and you don't put it in your changelog -- that should just be the only thing you put there. So really, if you hate changelogs and you think I'm silly, just put one line for every single time where you change your API and you bump it up. If you use semantic versioning, then I will -- bless you, you're the best person in the world; that's great. But some people don't understand semantic versioning, some people think you follow it, but you don't really follow it... Things like that.

So if you're going to change your public API so radically, just make a little line that says "Okay, now this doesn't work. You have to use this." That's it. That's the only thing I'm asking.

Again, a huge generator of heat and rage in the open source world is that - breaking the API. And you're like, "Oh, there's a new version of this thing! Let's upgrade!" and then you turn into Adam, you just get really sad and bitter about upgrading... Which is what happened to me. Everything I've contributed for this, basically, is fueled by mostly anger, and... Yeah. It's all fueled by anger, so I take the anger and I try to turn it into something positive... Because I was upgrading this old app, and this was happening over and over and over again, as you said. Test suite, green, "Nope, not working." "Oh, why?" That's why. And you figure it out.

**Adam Stacoviak:** And that whole little kind of... for the listeners, about 4 or 5 minutes back you mentioned Shields, which -- Chad Whitacre has been on the show before; I saw you all do a virtual high five whenever that moved over to Badges... That was super-cool. So that's a cool project, just for one, so just to make sure you know that we think it's an awesome project... And we haven't had you on this show -- I never really knew who did it, I just knew it was a cool thing, and now it's part of Badges, and I think there's an org behind it; they're all kind of collected into one org now on GitHub, which is just good across the board, because it's like the U.N. for badges, basically.

**Olivier Lacan:** \[laughs\] Okay, I'm gonna steal that, because that's a really good description.

**Jerod Santo:** New tagline.

**Olivier Lacan:** I have a blog post that I wrote about this called "An open source rage diamond", and that's exactly what it's talking about. I like that we went there, because Shields is exactly the response to "Why is everybody doing it wrong?" So you can rant about it and make a blog post first, and be on Hacker News, and everybody hates and likes you, I don't know... Or you can take the approach of "What's the lowest amount of effort I can exert to fix this?" and to me it was -- I was originally a designer, which is weird... Graphic designer, and then web designer, so I have Photoshop skills. They're rusty as hell, but I have them. So I was like, okay, there's this Travis Badge and this Dependencies Badge from (I think) Gemnasium, then there's Code Climate Badge, at the time, which was like a blue badge that just said "Code Climate." I was just mind-boggled by that...

**Adam Stacoviak:** Because it didn't have any other additional info?

**Olivier Lacan:** No.

**Adam Stacoviak:** Well, that's not a badge, that's marketing.

**Olivier Lacan:** Yeah, right... Which I can sort of understand; you're trying to market your business. But... It's kind of like the PHPBB Signature era, you know? Like, "Let's put animated GIFs in all our readmes, so that it's all flashing! Super-cool!"

**Jerod Santo:** That sounds pretty awesome to me.

**Olivier Lacan:** No. No, no, no. Stop it. \[laughter\]

**Jerod Santo:** "Let's get them into our changelogs!"

**Olivier Lacan:** People have done that though. It's kind of funny when you put one GIF, and it's just... Okay. You see it at the bottom and it's really funny.

**Jerod Santo:** Well, maybe one GIF per release? Can we get that going?

**Olivier Lacan:** \[laughs\] I think you should make one GIF per release for the emotion the release is supposed to instill in people.

**Adam Stacoviak:** Yes, that's good.

**Jerod Santo:** There you go.

**Olivier Lacan:** So there you go. Jerod, that should be your thing.

**Jerod Santo:** I'll open a pull request on your changelog...

**Olivier Lacan:** Crap, we're live... Somebody will probably register that website. \[laughter\] So basically, I just made a template. I just made a simple template. The idea of Shields is simple. It's called Shields because of one of the best TV shows of all time, The Shield. You should watch that, by the way, as a side note. It's a great show. The idea is a key and a value, just like we know; it's just like JSON or any format that has a key and a value.

The key is "What is it about?" and then the value is - a simple example is "Build - passing or failing." "Dependencies - up to date, or not up to date." "Gem version - what is the gem version?" Code Climate chose this. I've actually talked to Bryan Helmkamp from Code Climate and a bunch of people from other third-party vendors that did those badges, and I said "You have this GPA thing on Code Climate, which is really cool. Why not put that on the badge, instead of your name?" And he was like, "Yeah, actually we wanted to do that, but we were super-busy with our startup." So now you know why they did that, because it was just a stopgap.

So you end up getting in touch with all these really great people who just meant to do well, but either didn't have the graphic skills to make a badge that looks exactly the same as -- I think the Travis badge was the first...

\[00:36:07.26\] So I made this thing and I talked to the Travis people and I talked to the Code Climate people and a bunch of other people (Gemnasium was really cool, too) and I said "Okay, how about we make badges for you and they're all consistent, similar color tones and similar font, and the font is more legible, so people don't have to squint, like "What is the gem version?" And then we make sure that everytime you put a badge on these, we just recommend people to link to that thing you do, instead of trying to use the badge as an ad platform. You provide value, and then we link to you, and people will see "Oh, Gemnasium is really cool! Oh Travis is awesome!" And that took off like crazy.

People started using the original PNG version of those badges all over the place, even before we actually had figured out a sustainable way to make them... So it was just me and my friend, Nick Acker, just making them manually, or generating them manually for everybody... Which ended up taking a lot of time.

**Jerod Santo:** But it's a success story nonetheless, right?

**Olivier Lacan:** And eventually open source did its magic after a year... A few people created APIs; I think we had a Go API, we have a Node.js API, we had a Ruby API to generate them on the fly... And this is what Shields.io is. If you go to Shields.io, you'll see tons of examples of things you can just simply pass a URL to, and it will generate a badge for you... Which is now used by a bunch of services.

And what's even greater is that you can do that for your license. You can show easily what your license is, how you take donations for your open source projects (if you do), and then finally, they're all SVGs - so they're scalable, they work great, you can zoom it, they're easy to update... So yeah.

**Jerod Santo:** So you're trying to bring up a convergence similar to that around changelogs, right? That's kind of the idea, it's like "We can all just converge on this one format, we can all decide that changelogs are important things that we need to try to do well..."

**Olivier Lacan:** Right.

**Jerod Santo:** So let's assume that you've talked me into that and I'm like "Okay, I'm a developer, I wanna keep a good changelog, I'm down with this format that he's proposed...", there's still a few things that I think are difficult, and maybe you can help navigate that... The first one being "When do I add to my changelog?" Is it every release? Is it just minor releases? Is it patch releases, is it just major releases? So that's question one - when do you make a changelog entry?

Then question two - you say it's a curated list of things... So how do I decide what's worth putting in there and what's just noise?

**Olivier Lacan:** The first part is every single release. If you don't have something notable, you can say "No notable changes." This is something that I'm glad you asked, because this is something I hadn't really answered yet on the site... So I'll probably add that. So "When should I do that?" "All the time."

It's very unlikely that you're going to make a release, or cut a release, or push a release if you don't have any notable changes. It's extremely rare. There might be some bug fixes, but even those bug fixes you can say "Okay, we had a few bug fixes - about what?" It just takes you just really quickly parsing through... If you're the release manager, or if you're main/lead contributor, it takes just asking in your contribution -- so GitHub added support for contributing.md, that you can add in your repo to say "This is what we want you to do when you contribute, so start here first. If you start an issue, it's linked to it.

\[00:40:04.04\] As a maintainer, why not put in there and say "Hey, if you're going to fix a bug, please make a changelog entry. A bunch of open source projects do that. Then there you go - every minor release now has a changelog entry that says "Okay, we fixed this bug. Nothing else was added, so you can be relaxed, because we didn't screw up your thing in the background."

The second part of your question was -- can you remind me? Because I've lost your second part.

**Jerod Santo:** Deciding what goes in and what's not worthy of going into the actual entry.

**Olivier Lacan:** I think we discussed it a little bit earlier. If this is something that people as end users will send you packages with poop inside - if they find out and you didn't do it... It's such a simple check.

**Jerod Santo:** Are you speaking from experience there?

**Olivier Lacan:** No, but I would do it. \[laughter\]

**Adam Stacoviak:** I like how you went there... Like, "If they send you hate mail, that's cool. But packages with poop in it - bad."

**Olivier Lacan:** Imagine your GitHub profile on open source projects had your address in it. Would you be cool with that? Well, that's another issue that may be really creepy...

**Adam Stacoviak:** Chad might.

**Olivier Lacan:** Yes, Chad would. But imagine that people could actually send you mail, physical mail, and it could be dangerous because they could put poop in it. Would that happen with this release because you forgot to mention something? I think the poop test is a great test; I might actually add that --

**Adam Stacoviak:** I think your idea though of putting stuff in it that breaks it... I'm thinking of -- when I upgrade Wordpress plugins for the site, or different sites that are still in Wordpress, or whatever... Whenever I've gotta bump up that plugin, I mainly don't care about new features they add, I mainly care if it's gonna break Wordpress because it's database-backed, and I've gotta keep this database backup, and if something does go crazy, I've gotta do a reimport of the old database to fix things, or something that gets crazy.

I've had plugins totally break a Wordpress theme, and all I wanna know is like "What is it breaking? What bugs were fixed that might break my theme?"

**Olivier Lacan:** Regressions. People are acting as if bug fixes are just this holy thing that never ever creates regressions on anything... But if I knew you fixed a bug in the language parses, and suddenly I update and the language parsing doesn't work for some thing, then I can tell "Oh... Okay, let me roll back. This is probably what happened."

So again, you're lessening the frustration level and you're allowing people using your software who know it's open source - so they know it comes without a warranty basically, in a way - to self-diagnose more easily.

**Adam Stacoviak:** Yeah. Release notes is a good word for it, too. I like the idea of the de facto being changelog... The changelog.md even, or just a plain old flat no extension changelog file in there; that's cool with me too, as long as that format stays the same, because that's I think what's been the way for so long. But basically, release notes are a way for you to communicate to those using it about the notable things, as you've mentioned before; the most important things.

**Olivier Lacan:** Yeah. There's something that worries me with -- well, it doesn't really worry me... So GitHub released something called Releases, and that was about a year ago, I think; there's a blog post for it. And their idea was "Let's be smart" -- I think they were thinking really hard about how to improve that too, on their end, and Releases is fueled partially by Git tags. I wanted just to mention that, because what I don't like about the way changelogs are made right now - and a lot of people don't like them either - is that you can't really base them off releases, or if you actually tag your releases... So you say, "Okay, this commit is the point at which this is version 1.0", in that git tag, which contains -- a lot of people don't know you could put a message on a Git tag. So if you do git tag -m, you could put a message.

\[00:44:11.04\] Not a lot of GUIs allow you to see those messages, which is kind of crappy... And I don't know if GitHub and other open source repositories allow you to see that. But you could basically put those entries - the Added, Removed, Deprecated stuff - in those Git tags... And that would be great, except nobody knows how to do that.

So they've added support for automatically pulling -- when you're trying to create a release on GitHub, it will actually tell you "What is the Git tag? Do you have a Git commit or a Git tag we could use?" and if you have a message on that Git commit or the Git tag, it will pull that and say "Do you wanna use that as your release note?"

That's great, except that it's very rare that people actually -- it's even more rare that people keep up-to-date Git tags for every version they release than it is for them to even have a changelog in the first place... So it's a little like "Ugh, I wish people would--" It's asking even more than I'm even asking from open source developers, it seems.

**Break:** \[00:45:22.01\]

**Adam Stacoviak:** I think we might be kind of talking around this issue that you have on the project, "Why not use GitHub release notes?", and you've got a couple chimes in from GitHubbers - technoweenie, BeeKeepers... And I almost feel like GitHub muddied the waters, so to speak, by having this concept of releases. While there's always been this concept of changelog, why not just enforce that or help lift that up and pull it in too, like they had done with pull requests and merges... They made these hard concepts so much easier, which is why GitHub has blown up the way it has... Because they took what used to be hard to commit to a project or fork it or add to it, and they made it so much more accessible socially. Why not do the same thing for this idea of what a changelog is and represents for a project?

**Olivier Lacan:** It's true, but at the same time I've had conversations with them... So I don't generally work for GitHub, and I just have a few people I know that work for GitHub, and every time I talk to them, it's a really good conversation and I can tell they care. I can tell they're trying to do -- that contributing file, for instance, is a good example of what you're saying... Why not just parse that changelog file and then display it somehow in the open source project's dashboard? In a sidebar, or something. That way, it will be (as you said) easier to do, and it wouldn't add one more entry point for releases...

\[00:47:57.16\] But I'm thinking maybe they have a point in the releases -- I think something that I've noticed GitHub doing is just trying to make Git more accessible, in general, for every possible way... And Releases is kind of saying, "Okay, you have tags, but tags don't really mean anything to most people." It's just like, "What is a tag?" It could be a lot of things.

A release is a tag that has a specific kind of meaning... Because you could have tags that just say "Experimental" or "Rails 4", or whatever; you have this little branch, and you tag that. That's not really a tag, actually. It's confusing. It's just a branch called that.

But in this instance, I think you could see tags -- yeah, if you go to Releases on GitHub, you could see all the tags that a project has, and there's not a lot of metadata there, there's not a lot of context. They were basically trying to say "Okay, we know that Rails and jQuery and all these projects have tags in their releases, and stuff like that. What if we just use that?"

So I guess they had a way to do that, and I think it's really interesting how they make it -- the flow of creating a new release as an open source maintainer... Just - okay, you pick a tag version, or you make a tag version, and you target a branch or a commit (a recent commit), you put a title on it... Which is kind of "Ugh!" for me, because... Okay, so what's the title? "A new day"? "A new hope"?

**Adam Stacoviak:** Right. And we already know naming is hard, so...

**Olivier Lacan:** Right. So you're making it harder on them. But at the same time--

**Adam Stacoviak:** Well, it's more that overhead that prevents you from doing it in the first place.

**Olivier Lacan:** Right. So this is why conventions are useful, because it means less thinking and more -- so what I like about their approach is the Git tag stuff. I think down the line if Git tools or Git itself makes it easier for -- but is more like a three-year vision than a "In six months I can fix this."

**Adam Stacoviak:** Right.

**Olivier Lacan:** If they made it easier to manage and deal with tags, then it would be very simple for us to generate a changelog on the fly, based on the Git tags. That would be, to me, the best possible paradigm, because now instead of managing this file, you could have any service parse your Git tags and generate a changelog on their own and display it the way they want... And it would be portable by virtue of being in your Git history.

**Jerod Santo:** Yeah, the only time it would be lost is if someone downloaded like a bundle of your files, or something, without the Git hidden directory

**Olivier Lacan:** Right. But let's say you could have a little generator with whatever your make tool is, to make your release - you could have it just actually dump an actual changelog file, and that'd be really cool.

**Jerod Santo:** Yup.

**Adam Stacoviak:** We've gotta find a way... We've gotta find a way. And I'm glad you're on this mission, because you seem very passionate about it, plus - I don't think we got this in the show, but you're into linguistics, so you seem like you've got some passion around the right words to say in the right ways; that's why you used the word "notable", not just "important", or something like that. I think "notable" is an even more clarifying word to what you should put in your changelog.

To close the show out, we always ask a couple cool questions, which we tend to get some neat answers to, so... We're hoping always that you deliver here as well. Jerod and I both, and the listeners are also wondering too, but who is your programming hero?

**Olivier Lacan:** See, I've thought a lot about this question because you've sent me that a little earlier, and... I think it's not really so much programming as just the way to think of "What's the smallest thing I can do, that can have the greatest impact?" Right now, my hero is Aaron Swartz, just because through him so much great change and important change has been affected. I hope I'm using "affected" right, because if I'm calling myself a linguist, I guess that would be terrible...

You guys know, he sadly killed himself I think last year while he was being investigated by the FBI... And through basically just this sordid affair of just trying to release information that the public owns and should have access to... Research, basically. All the public research that is funded by the American government, and you, your tax dollars.

\[00:52:14.14\] Being French, it's weird for me to care about this, but there's even less care in France for that... So for me, people like him -- I don't want martyrs, I want people like him who just have passionately tried to make things right, and don't accept that because it's the way it is, then it should stay the way it is. When people say, "Oh, it's the law", it doesn't mean you have to break it, but that doesn't mean you can change it.

If there's a bad law, or Congress is trying to make the internet less good then, maybe you should do something about it, and you could start with a tiny little thing. If you help bolster the open source community by making an open source project that allows for people to see campaign contributions... Or I have a friend called Tim Faust, and he's this crazy, super Excel genius guy, and he's currently parsing through the Texas (I think) gubernatorial, or one of those -- basically, the campaign spending on each parties, to see what parties waste money on... Which is super important information. It's basically civic hacking type stuff.

People like that inspire me a lot. Beyond technical... It's just like, "Okay, so why are you doing this? What is your purpose?" Because your technical prowess is great...

**Adam Stacoviak:** I think it's nice when you marry those two - the socially aware to the technically capable.

**Olivier Lacan:** Right.

**Adam Stacoviak:** A lot of people were behind his -- and he was a big proponent of the free internet, and the freedom in internet, of our data, data security, data portability... So I think he kind of stood for a lot of that, and I can totally see why you feel that way.

**Olivier Lacan:** Yeah. So I recommend anybody listening to this try to get a copy or see The Internet's Own Boy, which is a documentary that was made about it... And it's very sad, you will cry; there's no way you can come out of this like "Yay!" But it might actually spark some care for you, and just -- it doesn't have to be as epic or as dangerous as some of these things are. It could be something simple like this. So yeah, that's my hero.

**Adam Stacoviak:** We'll put a link out to Aaron. And then we also linked out to the video you were talking about... It was an interview of him as a teaser to the documentary; we linked that out in the Changelog Weekly, our weekly email that we were sending regularly; we took a hiatus and we're relaunching it... So if you're sending us hate mail, I'm gonna keep ignoring it for the next weeks, and then I'll let you know what's gonna happen with it, but...

**Olivier Lacan:** Or poop mail.

**Adam Stacoviak:** ...we linked out to that video, because like you said, it's pretty powerful, and I think it's important to just be mindful of at least what his life represented, and then what internet freedom is for us... Because I think he was the cheerleader, so to speak, for that.

**Olivier Lacan:** Is it the SOPA video?

**Adam Stacoviak:** I believe so, yeah. I think he was at a conference and he was being interviewed, and it was sort of like happenstance... But the questions and the interview I think was just -- I can't recall the scenario, but it was a trailer for that documentary you mentioned.

**Olivier Lacan:** Yeah. It's basically the story of how they destroyed SOPA by just working hard.

**Adam Stacoviak:** And he just basically ranted - in a good way, obviously; sometimes the word "rant" could be used in a bad way - about his beliefs on why we should care about this and why it's important... And sometimes people just are like oblivious to things, and they just don't see, and then you've got one outlier that's like "Well, hang on a second... There's bright spots here no one's paying attention to, and here's what they mean for us 10 or 5 years from now." I think that's a really important -- internet freedom is important.

**Olivier Lacan:** \[00:56:10.28\] To give you a quick person to admire that is sadly not dead -- hopefully not dead...

**Adam Stacoviak:** Sadly... \[laughter\]

**Jerod Santo:** That was backwards...

**Olivier Lacan:** Let me just...

**Adam Stacoviak:** We've got a linguist on the call who said he is -- just kidding... \[laughter\]

**Olivier Lacan:** So Lawrence Lessig was a mentor of Aaron Swartz, and he's currently running a campaign called Mayday... I forget the total name of it, but basically he wants to create a super PAC to stop -- to basically disable super PACs.

**Adam Stacoviak:** I've seen this.

**Olivier Lacan:** Super PACs being big political action committees that can raise tons of money, even though -- basically, skirting campaign contribution laws in the U.S., which is also a problem anywhere else. There's tons of issues with campaign contributions. Basically, if you have money, you can buy enough stuff so that you can get your friends elected to do things like, say, internet neutrality -- meh, not necessarily that important. So things like that.

He's a great example of the kind of spirit of Tim Berners Lee, Aaron Swartz, Lawrence Lessig. Boom. I got three for you.

**Jerod Santo:** Nice.

**Adam Stacoviak:** Those are good heroes. We'll put links in the show notes... For those of you who those may be new names for you; a couple of them are for me, at least one of them - the last one you mentioned. So I'll put notes in the show notes for that.

Another question we like to ask is what's a call-to-arms...? For this project -- so we talked quite a bit about the importance of keeping a changelog, what that means, and what you put in there and what you don't put in there, the right format, and the markdown, and all these different notes of this, but what is the overarching call-to-arms right now for Keep a Changelog?

**Olivier Lacan:** If you're gonna make a change, keep it. That just came to me, as you were talking. So if you're going to try to make things better - because open source developers generally kind of have this urge, some of them, to change the world... Well, what if you make it a little better first, before you wanna change it? Because "change the world" doesn't have a clear angle; it's like, "What are you changing it to? Is it bad or is it good?" So what if you fix a little problem, and then another, and then another, and when you do that, remember that other people can help you and that you're not this island...

I think Shields for me was the best example of that. I was this island. It was like 11 PM, and I was pissed off, and I thought I was the only person who cared, and I wasn't. And because I documented my project, because I spoke about it, because I talked about it with friends, people came in and they multiplied my -- you know the lever effect? Basically that. I was this one guy at the end of a huge stick, and a boulder, and then a bunch of people showed up and we just like lifted this gigantic boulder, out of nowhere.

This is why I'm so excited about open source in general. It's just like, if you care, if you pay attention to the details that you think maybe won't matter, then people will come and help you and make what you're trying to do even more powerful and impactful... So I hope people can take that out of that.

**Jerod Santo:** Awesome. Our next question - and our last question - if you weren't doing what you're doing now, which is working at Code School, and podcasting, and your open source contributions... If you weren't doing all that, what would you be doing?

**Olivier Lacan:** Photography. I sold my camera when I was getting into programming a lot, because I had so much stuff to learn, and so much money to spend elsewhere, that I sold all my rigs -- and I had been taking photos since my mom (I think) had a camera when I was a kid... And I've always loved taking pictures of landscapes and stuff like that, but recently I purchased a Sony RX1R, which has blown my mind... It's a full-frame, small format, non-interchangeable lens camera, so you can't pop it off and put another lens in, but it's a 35 mm great camera, full-frame and everything...

\[01:00:11.06\] And I've started doing a thing that I've been terrible at all my life - trying to take pictures of people... So trying to take portraits of people and trying to capture not their good angle, not their sexy looks, not their -- I don't know... But trying to capture their essence, and trying to see -- if I show this picture to somebody else, if I put it on Facebook, for instance, will the people who know this person say "This is so you!" It's a completely different kind of creativity thing that you have to do in your head to figure that out, because you have to talk to people, and I think that's actually really helpful for open source, or just programming in general... Because we tend to do that slightly in a vacuum.

Having to either trick people into trusting you, or having people trust you enough to get close to them and take a picture of them, and have them be genuine to you - that's really, really exciting. I've been doing that -- I've had this Instagram thing... I wish Instagram had public -- okay, big rant... If anybody who knows anybody at Instagram... Okay, they have tags, they have these hashtags, and none of them are available on the internet. You can see my profile on Instagram.com/me, and you'll see them, and you can find them, but you can't have a hard permalink to -- and it's not public data; I know they own it... But please, someone at Instagram, make those tags public, because sure, there's some really crappy ones, but there's something great called "People of Orlando." \[01:01:44.20\] and I used to live in Orlando, and there's so many great people... So much crap from being in Florida, of course, but there's so many great people, and there's this photographer called Patrick Chin that started this thing where he basically goes up to people and asks them about their life, their story, and then takes a picture, and then he tells that story on Instagram...

**Adam Stacoviak:** Wow.

**Olivier Lacan:** I think it's a really cool thing that a lot of people do in other cities... But they're strangers, she's never met them, and they all have great stories. So that's what I'm trying to do, basically.

**Jerod Santo:** I was just checking out their API docs while you were talking, because I'm thinking "Man, you've gotta be able to get at them somehow...", and there's definitely tag endpoints in the Instagram API, so someone could build this...

**Olivier Lacan:** But you have to be auth-ed. So I think Statigram, or whatever Statigram is now called - you can see tags, but you have to be authenticated as yourself. It's not a public endpoint, I think. That may be the problem.

**Adam Stacoviak:** Anytime I get interested in something new -- let me give you a half a second, or I guess half a minute rant... For a bit there I was really into learning about drones, right? So you've got the Phantom 2 and you've got several others... And it's really easy to kind of dig deep into what's the pulse of something going on visually - in even like (I guess) the 10-second video they offer - by just kind of browsing tags on Instagram. \#Droning, \#phantom2, \#pickyourname... Even if you're somebody who's an audio geek, researching a new mic, you can go on there and see... Like, \#bourbons if you're into bourbon, \#mics if you're into mics... And just kind of like look at the tags and get a snapshot of what the community around that interest is doing, saying, using, how it looks in their environment... I make product decisions sometimes based on what I see people using.

**Olivier Lacan:** I'm a foodie, I go to restaurants, and I do that all the time. I go to the restaurant's Instagram or I look at whatever tag you can find for that restaurant, and I look at the food, and I see how good their presentation is, and I'm like "Hm, I'll go there." Because Yelp sucks at that. Their photos are terrible.

**Adam Stacoviak:** Yeah. The last question we ask -- we do have kind of a... Not so much a hard stop, but we just try to keep it to a certain range here, so we don't lose people... And people don't listen anyways if it's too long... Is what would you be doing if you weren't doing what you do?

**Jerod Santo:** Adam, I already asked that one, man...

**Adam Stacoviak:** Did I miss that?

**Olivier Lacan:** Yeah.

**Jerod Santo:** He'd be doing photography.

**Olivier Lacan:** Yeah, yeah. So we've just talked about that. That's how we got onto that topic.

**Adam Stacoviak:** Oh, my Lord... \[01:04:12.20\] for just a quick second, I asked Jerod to take over, and I totally missed it, so... Since you're listening live, you'll get this; the people who listen on the podcast will not get that. I will keep my comments to myself and just roll on out... \[laughter\]

**Jerod Santo:** Leave it in!

**Adam Stacoviak:** That's awesome. Well, in any case, it was a good show; I think this is an important topic, so I wanna thank you for joining us on the show today.

**Olivier Lacan:** It was a pleasure.

**Adam Stacoviak:** Let us know however we can help... You know, we obviously like to keep a changelog on our own, so we're definitely into this; you're not fighting the fight alone.

To trail off the call, I wanna thank three of our sponsors: Toptal, Codeship and Rack Space for helping make this show possible. That's it for this week, and we'll be back next week... I think we've got...

**Jerod Santo:** Justin Searls with Lineman.

**Adam Stacoviak:** Yes, yes.

**Olivier Lacan:** I love that guy! He's the best. I'm so happy.

**Adam Stacoviak:** That's actually who you were referencing -- or who actually put the... Which one was it...?

**Jerod Santo:** He opened the issue about using GitHub's release notes...

**Adam Stacoviak:** That's right, yeah.

**Jerod Santo:** And he uses it for Lineman... We'll have him on next week.

**Adam Stacoviak:** Yes, so we'll probably extend this conversation a little bit there, just because... So that's it for this week. Let's everybody say goodbye.

**Jerod Santo:** See ya!

**Olivier Lacan:** Goodbye!
