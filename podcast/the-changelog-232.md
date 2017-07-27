**Adam Stacoviak:** Welcome back everyone, this is The Changelog and I am your host, Adam Stacoviak. This is episode \#232, and today Jerod and I are talking to Max Howell, famously known as the creator of Homebrew. It has been more than six years since Max has been on the show.

We talked about his tweet that was heard around the world from that time he interviewed with Google but didn't get accepted, the creation of Homebrew, the naming process, as well as the difficulty of letting go. We also talked about his passion for the Swift programming language and his work on Swift Package Manger while at Apple.

We have three sponsors: Code School, Toptal and our friends at GoCD.

**Break:** \[00:00:53.11\]

**Adam Stacoviak:** Alright, we're back with Max Howell. Max... Wow, it's been a long time. Episode \#35, Jerod - this is basically a lifetime ago. 2010... Jeez!

**Jerod Santo:** Six years.

**Adam Stacoviak:** What's wrong with us? Max, why didn't we have you back on sooner?

**Max Howell:** Who knows? You have to ask yourselves...

**Adam Stacoviak:** I would just say maybe you were busy and we were busy... Everybody's busy.

**Max Howell:** I certainly have been. I've been very busy.

**Jerod Santo:** Well, thanks so much for joining us. Max, as many know, you are the creator of Homebrew, amongst other open source projects, of course, that one being a massive hit, and one used daily by thousands, perhaps millions -- millions might be a stretch... Thousands around the world.

**Adam Stacoviak:** I'd say millions.

**Max Howell:** It's millions.

**Jerod Santo:** Is it millions?

**Adam Stacoviak:** I'd say millions, for sure.

**Max Howell:** Yeah.

**Jerod Santo:** Oh, man... I'm not even stretching.

**Max Howell:** It's difficult to estimate precisely, but it's definitely millions.

**Adam Stacoviak:** How do you know that number? Is that a guess, or is that somewhat educated?

**Jerod Santo:** Well, they've got the analytics now.

**Max Howell:** It's a guess, but I can look at the GitHub logistics and see the amount of clones, and we also have other statistics now. It can't be precise, but I just can't see how it could be less than millions at this point. Every developer uses a Mac pretty much...

**Jerod Santo:** Right. Well, we'll definitely go back and touch base on Homebrew's creation, but let's go even further back... We like to find out the origin stories of hackers that everybody looks up to, and you, sir, are one of them. Tell us how you got started, give us a little bit of your background and where you're coming from, and what really got you into software and open source.

**Max Howell:** Well, way back when I was six we had a BBC Micro. It was a common computer in England of the time, or the U.K., hence the BBC part. I don't know the exact history about why it was branded BBC, but I assume that they sponsored its development, or something... And my dad started teaching me programming, and initially I just made awful games, like you're fighting a monster, pick your weapon: a sword, a stick, or colorful language... \[laughter\]

\[00:04:00.16\] That was good fun, but it was always a hobby for me, I never considered it for a career right up until the end of college, which I did chemistry for.

The only reason I got back into programming -- I'd been doing it on and off all through my teen years, mostly making toys or little tools... I made this little clock for Windows that when you clicked it, it moved to the opposite corner of the screen... Things like that.

**Jerod Santo:** Nice.

**Max Howell:** ...back when Windows didn't have the time in the corner. Obviously, when they added that it made less sense. And I had a great Y2K bug; it turned \[unintelligible 00:04:41.21\] that little clock I made. After 2000 I tried building it out again and it claimed like it was the 15th century, or something... Couldn't handle it.

**Jerod Santo:** Wow...

**Adam Stacoviak:** So for those who may not actually remember that, maybe those born after 2000, what was that?

**Jerod Santo:** Yeah, give us the Y2K rundown, that would be good.

**Max Howell:** \[unintelligible 00:04:58.22\] terrified of the year 2000 in the software industry because - if you can believe it - 10, 20 years before that bytes were extremely valuable; we had hardly any RAM. I remember my first PC had 2 MB I think, and that was a pretty good one. So rather than store the full date, we optimized by destroying the last two digits. A pretty minor optimization, but at the time it seemed worth it; as a result, when 2000 started rearing its head, date software would typically think it was the 19th century, or something like that. It depended on how it was written, what exactly it did with those two digits.

My step dad at the time was working in software and he made a fortune going around banks, investigating how their software would handle the Y2K transition. It became a media hysteria of course, as well. Everyone thought that the world had a 50/50 chance of falling into chaos on 1st January 2000. Nothing really happened in the end, I guess...

**Adam Stacoviak:** It sure was a different world then though, right? That world then was so uneducated about what software was capable of... It was a different world; no one had a smartphone in their pocket, no one really knew what an application was... It was just such an ignorant society at that time to technology.

**Max Howell:** I think, to be fair, our software was even flakier back then, if you can believe it. People had very little confidence that software could handle big events, but then it turned out that everything was fine.

**Jerod Santo:** So either the contractors made it to every last line of code and updated their date implementations, or it was all for naught and it was gonna be okay anyways, and perhaps people were profiteering -- or what's the right word for making boatloads of money based off of fear...? Probably a little bit of both.

**Max Howell:** Yeah, most likely both. I'm sure it would have been bad if the banks had problems, but they were the ones who were most interested in correcting it, and maybe some minor, less important industries had problems, but it didn't cause the end of the world, certainly. But date and time is still a problem, of course... You hear regularly about companies that have to turn their databases off at the daylight savings time because they can't handle being at the same time twice in the same day, and things like that.

**Adam Stacoviak:** That's a whole new \[unintelligible 00:07:33.13\] time.

**Jerod Santo:** Oh, man... Let's not get started on time, we'll never find our way back out again. But funny that it did actually affect your Windows clock app. You were not Y2K compliant.

**Max Howell:** \[00:07:47.15\] I was not. Didn't even think about it, which is a common thing with software development, of course. Anticipating everything is hard. Yeah, so I did a chemistry degree and I have a masters in chemistry as it happens. But in my third year... Because in the U.K. most courses are only three years for university, I did a four-year course with a year in the industry. So my third year I went to work at Kodak in London - which was a bad choice; I should have picked one of the beautiful chemistry labs in the middle of the British countryside. It probably would have changed my life if I'd done that, but I went to Harrow in London, which is possibly the most disgusting place in the entire world, and discovered that chemistry is very boring, actually... Really, really boring. \[laughter\]

So after that four months of this year I was quite depressed and I decided I'd install Linux on my computer and get into making apps, although no one really called them apps at the time. So like programs, or...

**Jerod Santo:** Programs, yeah.

**Max Howell:** Yeah. So I started working on KDE, which is still around, a Linux desktop environment. I really enjoyed the sense of community, and making things that other people enjoyed using, so I almost got fired from Kodak, even though they would rarely do such a thing with these interns that they had. Then I went back to university, spent most of the year working on two apps. The first was Filelight, which was the first thing I ever made, really. It's like DiskDaisy on Mac, it uses the same idea of representing the files and folders concentrically in pie charts that nest inside each other, which really helped -- again, back then we only had so much disk space, so you really needed to figure out who was using what and delete files regularly.

And Amarok, which was a music player - that was my first proper open source project. We were working as a team of three or four of us. It became pretty popular, because there weren't any good music players on Linux, and we were doing things that other people hadn't really considered at the time as well, like showing the Wikipedia information for the artist you were listening to. I think we invented that... So I almost failed my chemistry degree. It was close, very close. I basically started going to classes and somehow managed to cram and get the minimum grade required, which was just as well, because I'd signed up to do a PhD, so I didn't know what to do with myself.

I was doing computational chemistry for my dissertation, so the professor I was working for told me that he was mathematical, and I was doing quite well at that, but I didn't get the grade required to stay there and do the PhD, so I had to go home. I just kept working on open source basically, until I got a job at Last.fm in London because of Amarok, because we were using Last.fm and scrobbling quite heavily. I went there and that's what got me into the industry, without a computer science degree or anything similar.

**Jerod Santo:** Nice.

**Adam Stacoviak:** So when you were on the Changelog the last time, which was 14th September -- at least the publish date was 14th September 2010, were you at Last.fm then?

**Max Howell:** No, I had been at TweetDeck at that point since January 2010. I was at Last.fm two and a half years, which is the longest I've ever been at a single company. But it was a lot of fun at Last.fm, and they had the right attitude towards startups, and open source, and things. They got acquired by CBS in 2007, and it gradually degraded after that. All my friends left, and all the really talented people had left, so I moved on and I went to TweetDeck, where I built the Android app and redid their iPhone app just before Twitter acquired them... Which happened after the last episode that we did together.

**Adam Stacoviak:** \[00:11:59.17\] So you should work at companies, because they get acquired.

**Max Howell:** Basically, it seems to be that way. I like small companies. I like having lots of hats, and learning new skills and applying them.

**Adam Stacoviak:** Well, something I picked up was that, Jerod, like many hackers who come on this show, their beginnings tend to be in games to some degree, but something that Max had said was the community. He really enjoyed the community part of it, so it would make sense that you prefer smaller companies because it's far more of a community feel in a smaller company, because you can't hide... You have to sort of face the demons that sort of wait in the hallways, they're just there. You tend to be more civil potentially even, or maybe not...

**Max Howell:** Yeah, I agree. There's something insulating about big companies, and it becomes so much more political, and I can't stand that. I want to get things done, I don't want to have to persuade people to let me get things done.

**Adam Stacoviak:** Yeah. Bureaucracy is a no fun battle, that's for sure, especially if you're like someone like you who has the ability to, and having the track record of things like Homebrew, that millions of software developers use every day...

**Jerod Santo:** Millions...

**Adam Stacoviak:** Billions... \[laughter\] Did you say 'billions', Jerod?

**Jerod Santo:** We'll have to check the stats.

**Adam Stacoviak:** Okay... But lots of people use what you make, so if you're that kind of person, why put reins on you?

**Max Howell:** Yeah, well, I hate to be arrogant in that respect, but I feel that I get so much less done when I've got barriers in place. I don't wanna be that kind of person, but it turns out that I am... I really \[unintelligible 00:13:42.19\]

**Adam Stacoviak:** So Amarok was your first foray into open source, and that was just before Last.fm... Is that right?

**Max Howell:** I started working at Amarok in probably 2004, and then I joined Last.fm in 2007.

**Jerod Santo:** I'm walking down memory lane with you Max, because I ran KDE for a few months in college... I only lasted a few months and then I had to go back to \[unintelligible 00:14:06.22\] for some reason. Who knows... Probably something did work. But I was using Amarok and I have fond memories of Last.fm, of course scrobbling, I think, because Last.fm's big thing was scrobbling, and I was getting my... I think my iTunes was scrobbling the Last.fm, which would post to my WordPress... You're pulling me along down memory lane as you go from place to place.

TweetDeck - I've got no ties there, but you had me at Last.fm for sure. Where did Homebrew begin?

**Max Howell:** Homebrew began probably right at the end of Last.fm. Because at Last.fm we were making cross-platform software - I had to scrobble in every platform - and managing the dependencies that we had, which there were a few (not many), but \[unintelligible 00:14:58.11\] what people have nowadays \[unintelligible 00:15:00.03\] but there wasn't really any good way of doing that, so Homebrew was a kind of response to wanting a system that could be cross-platform and would allow me as a developer to control the dependencies on my system in multiple places. It's funny that these features do exist, but are not very used, they're not why it's successful at this point, but it is something it can do. You can install multiple instances of Homebrew, you just have to check it out at different places, and it will install to those places, the cross-platform as well as in Ruby. There is now a well-maintained Linux port, but the original goals was that it could be.

So I started building it at the end of Last.fm, and then when I left, I left in order to make iPhones apps, because it was right at the beginning of...

**Jerod Santo:** \[00:15:52.29\] Yeah...

**Max Howell:** It was 2009, so the App Store had been around for about a year, and the stories of people making a million dollars out like Doodle Jump and things like that were inspiring. And I had the experience of iPhone development, because at Last.fm we'd made an Android app, we'd made an iPhone app and a Blackberry app.

**Adam Stacoviak:** Wow, Blackberry...

**Max Howell:** The Blackberry app was awful... They did have an SDK, it was just terrible. I don't think that lasted very long in the end.

**Jerod Santo:** What language would you use for Blackberry?

**Max Howell:** It was C++.

**Jerod Santo:** Okay.

**Max Howell:** Which... Yeah. Well, \[unintelligible 00:16:31.26\] C++, I never wanna do again certainly... But at Last.fm we used Qt, which is a C++ cross-platform toolkit. Qt was very nicely designed using a subset of C++ like any good frameworks tends to, because there's just too much of it. It had a very similar to Cocoa kind of way of working, Cocoa being the name of Apple's frameworks for Objective-C and now Swift.

So yeah, I had the experience so I thought I'd quit and make apps and make millions of dollars and be very happy, but the problem was I kept working on Homebrew because I needed it for various other things, and once I put it on GitHub, people started to notice it.

One day this guy, I think his name is Simon Willison - I forget... He used to be Twitter famous, so I'm not sure if he is anymore, but he posted a super-user question about how to manage dependencies on this Mac, so I answered with "Oh, I made this new project", and I explained a lot of the rationale behind it. That got it noticed by \[unintelligible 00:17:45.19\] who I think is at GitHub now; he was at 37signals. So he tweeted when he upgrades to Leopard, which was Mac's 10.5, he would install Homebrew, and that got me my first hundred forks, and then it just kept going up and up. Then it became addicting, because every day I'd wake up and there was a bunch of -- pull requests didn't exist at that point... It was just tickets from people saying, "Oh, I made this formula, it's in my fork. Won't you merge it?", so I'd merge it.

From the start, I designed Homebrew to be really simple to contribute to, because I knew I didn't wanna write all the formula. One of my issues with \[unintelligible 00:18:27.19\] it seemed opaque, it seemed really difficult to figure out how to contribute, so I designed it so that there were commands on the command line to help you see the formulae, contribute to the formulae, edit them... It was all built on Git, that was the update mechanism, so you could just push straight away with your edits. That was the key really to its success. I think it was just the understanding about how people don't really like contributing to open source because they don't know how, so you've gotta build that in as like an easy way for them to just push back their contributions.

I designed the formulae themselves to be very readable, so you could open any formula and understand how to make your own. It was always a part of the design I went for.

**Jerod Santo:** Another aspect of Homebrew that I recall making it popular, which, interestingly, we just had Mike McQuaid on the show back in episode \#223 talking about Homebrew's 1.0 release and the current core/primary maintainer, and he has inherited a lot from you, he has inherited the naming convention, and I think Homebrew as a name and then the metaphor of the naming convention, applying formula, and kegs and cellars and all these things had a certain attractiveness... It marketed itself, in a certain way.

**Max Howell:** Yeah...

**Jerod Santo:** Maybe you talked about this in \#35, but six years ago, none of us remember - what was the impetus behind the naming convention of Homebrew and this whole metaphor you came up with? How did that come about?

**Max Howell:** \[00:20:04.29\] Well, I love names. I mean, I hate names. \[laughter\]

**Adam Stacoviak:** I love/hate names.

**Jerod Santo:** It's a love/hate relationship.

**Max Howell:** So often they're terrible. People often don't think carefully about their names, especially in programming for classes and functions, and they're so important. I'm a big believer that you don't need to comment if the name is good and the responsibility boundary is clear; I feel if I need a comment on this function or class or whatever, that I haven't named it correctly. So I've always been very keen to pick the right names for things, but I also understand the marketing importance of the name for an open source project. If you call it Package Manager X, no one's gonna talk about it.

**Jerod Santo:** Right.

**Max Howell:** You need something inspiring. So I was just looking for names at Last.fm while I was there, near the end. I was like, "I want a theme. I want the name to then lead to other names in use in this product", and one of my co-workers said, "Well, it should be a beer theme obviously, Max", because a startup, community - obviously, there's quite a bit of drink there. And London... There's so much drinking in London. That's one of the things my wife, who is American, said about London. It's just like, you get a job in London, and then in the evening you go to the pub. Every day, you go to the pub. And that's true, basically. Not everyone goes every day, but someone in your company is going every day. It might not be the same person every day, but you know you can go to the pub across the road from the office and there will be someone you know there.

It's one of the nice things about pubs in Britain - they're really places you can go to meet people you know, and it's friendly, and it doesn't have the stigma that it does in America. In America you have bars, and probably there's some guy who's there every day and he's a loser, and he's a drunk. Pubs, in Britain, are like where you go.

**Jerod Santo:** It's true. He's there right now, actually.

**Max Howell:** \[laughs\] He probably is. But well, London overdoes it, honestly.

**Adam Stacoviak:** I think it's important to draw a distinction too, because what you call pub is probably a cool place to hang out, watch sports and see friends that you may have not seen in a while, whereas my version of it might be more like a bar, like a small town bar... Which is similar, but not the same.

**Max Howell:** Yeah, a pub is a lot more family-friendly, I guess would be one way of describing it.

**Adam Stacoviak:** They serve good food even.

**Max Howell:** Yeah. And hopefully it's owned by the same family for a while, although that's less and less the case, sadly. So yeah, they're a lot more savory, but still, London overdoes it, it really does. So at the time I was 28, so there was a lot of beer in my life; to be fair, I drank British beer, which is usually 3% - 3.5%, so... It seemed like a great idea. Then I thought, "Well, Homebrew is a great name for it." At the time I didn't think about the \[unintelligible 00:23:21.23\], I was just thinking about how I wanted it to feel like a platform that you could create your own packages for, and customize them the way you wanted them to be customized, so it seemed like a great name, and it just lead to the other names.

I thought carefully about each one. There was a while that it wasn't gonna be 'formula', it was gonna be 'recipe', because they're not really formulae in the homebrewing beer space, but 'formula' was more unique. And kegs and cellars... Kegs are stored in racks, technically, but that's not really something people know. It's fun, it worked out really well. I hope I didn't contribute somewhat to the silly naming systems that seem to go on in open source nowadays.

\[00:24:12.18\] People seem to name their things completely randomly nowadays, just to have a distinctive name. I saw an image library the other day called King Fischer; why is it called King Fischer? It doesn't make any sense.

**Adam Stacoviak:** Yeah.

**Jerod Santo:** It's gotten to the point where it's more akin to domain names where the real estate is running out and there's namespace clashes... Many times that we see names that are exactly the same as another project in a slightly different ecosystem or language, and like you said, people are trying to draw more and more attention to their open source projects because there are more projects and so it's harder to get noticed... So you start taking the vowels out, you know? \[laughter\] You're doing what you can do, but...

**Max Howell:** Yeah, you're right, that's a more reasonable explanation for why it's happening. Still, a name needs to have some sense of purpose, so you have an idea about what it is. Admittedly, people always say "Well, King Fischer is an image library" or whatever, but there's so many to remember... You need a mnemonic for your own brain to remember what it's about, and if the name tells you it as well, then you'll remember it properly.

**Jerod Santo:** Like Package Manager X. \[laughter\[

**Adam Stacoviak:** PMX.

**Jerod Santo:** Go literal.

**Adam Stacoviak:** I guess the only question I have for you on the naming front... So sure, you enjoyed the pubs and beer, it's where you're from, it's part of your culture to appreciate that, but at what point was it like, "Yes, this..." Did you start applying it? Did you start thinking about formula, keg, and all the permutations of the naming that could eventually come out and you're like, "Okay, this does fit", and how long did it get you to be like, "Okay, it's a perfect fit. Let's call it Homebrew"?

**Max Howell:** After the suggestion, a couple of days. Then I had most of the names done within a week or so. I find it very important to have the names, for some reason. It really helps me to identify the product clearly in my head. Sometimes I know an app I wanna build, or an idea for a tool, but I don't start until I've come up with a name. I can't start until I've come up with a name, although partly that might be because often I'm using Xcode, and Xcode's name refactoring tools are abysmal.

**Adam Stacoviak:** This is a good place to pause real quick... We've got a break we'll take here, and when we come back we'll dive a bit deeper into Homebrew and other fun stuff with Max. We'll be right back.

**Break:** \[00:26:50.23\]

**Adam Stacoviak:** Alright, we're back with Max Howell and we're talking about Homebrew. Jerod, we love/hate names, and Max, you said it best, you love, and then you said you hate names. Homebrew is a pretty good name, and then you sat down and you thought about the architecture of Homebrew and how it mapped out and all these different things... That's a pretty deliberate choice on a name for one, but then also it's a kind of like sit down and think about it and how it would all play out, so tell us a bit more about that.

**Max Howell:** Well, like I say, good names are so great, that's why I love... Because they allow you to understand the thing. That's what I think a lot of programmers don't understand about names - understanding of what the thing is is in the name. Homebrew into this wonderful set of metaphors for how the architecture fit into the naming, and it really helped me to design it, but I had a clear metaphor for what a keg was, what a formula was, and the rack, and the cellar - it all made sense, so it really helped to design \[unintelligible 00:29:25.08\] and then I eventually added the taps.

I'm kind of working on the Soup Homebrew right now, and I'm using the term 'growler' to define what the thing is, \[laughter\] and it's just perfect.

**Adam Stacoviak:** So that's one of the refillable things then, or...?

**Max Howell:** I don't wanna reveal what it is... Because the name works, so you're thinking along the right lines.

**Adam Stacoviak:** Okay... Yeah, it's perfect.

**Jerod Santo:** Nice. So tell us about the transition, because you built Homebrew, you maintained it for a long time, it grew to massive adoption... Pretty much anybody who develops on a Mac uses Homebrew nowadays. But we've just had Mike McQuaid on, who's the lead maintainer, so there's a certain point where you handed it off. Can you tell us what prompted you to move on and how that transition went?

**Max Howell:** So for at least two years I really enjoyed working on Homebrew still, and it gradually accumulated more and more people to help. Mike was one of them, and I knew Mike, he was a friend from the KDE era, in fact.

**Jerod Santo:** Wow.

**Max Howell:** He had moved to London and worked at a company that was somewhat related to us, so we were friends. He had contacted me not long after we started getting attention to us to work on it as well (he's a workhorse). He was there from very near the beginning, but after two years or so I'd solved all the interesting problems and I'd started to lose interest. It was basically done; I think that's a big problem that I have in general... I lose interest in things once they're done, and I'm always looking for the next thing after that.

So I started contributing less, and one day got @ replied by someone who was angry about some formula that they wanted to have merged and it'd been rejected, and the reason it was rejected was really my own fault, because initially when I had made Homebrew I was adamant that it wouldn't have trivial crap in it. Because it's like the App Store - it would perhaps be better if it was a bit higher quality; now I disagree with that decision. There was ways to work around that, and we invented them. It's the tap system.

\[00:31:53.11\] Also because the more stuff you had in there, the harder it was to really have high-quality core formula, but the tap system solves that. So I disagreed with the other guy's decision and then I merged it without talking about it because I was being arrogant, and it resulted in an argument and I decided that I didn't want to be part of a project where there was conflict like that, so I left, basically. The project had been always been on my name at that point, under @mxcl, and I was kind of proud of that because it was for a long time the most forked, most starred project on GitHub, and my name was next to it. And that had lead to quite a number of interesting e-mails and conversations and phone calls from people that were just browsing GitHub and found my names. There was opportunity definitely associated with having a very high profile project on my name, but they wanted me to move it onto the Homebrew organization, and that made sense, I couldn't deny it. If I wasn't gonna work on it actively anymore, then it needed to be moved to an organization so that it didn't... You know, while it was on my name, I could just delete it, effectively... Which would be kind of an interesting movie, probably... Disaster movie. \[laughter\]

**Jerod Santo:** Like left-pad.

**Max Howell:** Yeah, exactly. Just like left-pad. That was very interesting I thought, at the time, and I was at Apple then, and everyone at Apple was asking me how this package manager was not going to be affected in the same way. So I moved it, but it took me like four hours with the button on my screen before I could summon the courage to push it. Emotionally it was so hard to give it up, because it never could come back.

I'm very proud of Homebrew, it was a project I put a lot of time, effort and thought into, and it paid off the way I thought it could, and that doesn't happen very often in your life.

**Adam Stacoviak:** This is exactly why we say on this show, Jerod, to everyone listening, "Be nice to your maintainers", because it's that kind of heart that mauls over for four hours, it's that kind of spirit you put into that kind of project, and that kind of care and love that we have to appreciate and honor, and if you don't do that, then it's just not cool. And I can hear the anguish in your voice sharing that story, bro... I'm glad you shared it, it sucks it turned out that way, but to have people like you out there in open source is super cool to me.

**Max Howell:** Well, it was the right thing to do.

**Adam Stacoviak:** Of course, yeah.

**Max Howell:** I care about the project, and if I wasn't willing to maintain it anymore, then it needs to be given over to the community, and I was just glad that the community was there to take it.

**Adam Stacoviak:** It's more about the finality of it than it is the act is what I mean by what I said.

**Max Howell:** Yeah, I understand.

**Adam Stacoviak:** Because it's this moment -- like you said, it can't come back... There's this point of no return, and that's hard to deal with.

**Max Howell:** Yeah, it was... I felt a sort of relief once it was \[unintelligible 00:35:10.09\] Like, for one, my GitHub notifications were never readable. \[laughter\]

**Adam Stacoviak:** You could actually use them.

**Max Howell:** Yeah, exactly. Well, I had other open source projects and they were just \[unintelligible 00:35:23.08\] because I couldn't know when someone was actually trying to get my attention for them; I couldn't really know why people wanted my attention on Homebrew either... Homebrew's notifications are not designed for a project of that popularity, for sure. So the moment it was gone, suddenly I could get back into my other projects and things that I was more interested in at the time. It made sense.

**Adam Stacoviak:** So once you were done with Homebrew, what was the next step for you? What was the next bigger milestone for you in life?

**Max Howell:** Well, at that point or now?

**Adam Stacoviak:** When you were done with Homebrew... Back to that moment where you pushed the button, the next big milestone for you.

**Max Howell:** \[00:36:05.14\] Well, basically I'd been doing iPhone development at that point for three or four years, and at the time I was in Chicago. Between the last Changelog and now I've moved to America, I met an American girl and we moved to Chicago, and we now live in Savanna, Georgia. So I was in Chicago at the time and I was teaching iPhone development part-time like half a week, which I really enjoyed. It allowed me to learn a lot about how people approach learning how to code. It was a boot camp, so these things are kind of rip offs and I kind of felt bad about that, but I was just the employee, so...

I was working on PromiseKit, which is probably the open source that I maintain the most at the moment, which is just Promises for iOS. I'd use Promises because I'd done a lot of Javascript development in between as well, and Promises just made so much more sense for asynchronicity, and there was nothing good for iOS so I was like, "Okay, I'll build it." So I was working on that, but about that time the boot camp I was working for was running out of money, so they said "Well, Max, sorry, you're the most expensive person here, - \[laughs\] I didn't realize - we're gonna have to let you go." So suddenly I was left with no regulate income, and I didn't wanna do any more iOS contracting - which I'd done a lot of - because it just sucks the soul out of me, working on other people's apps I didn't really care about. It was very good money, but I could only do it for a few months at a time before I became depressed. I just wanted to do open source or something that made sense to me.

Me and my wife didn't know what to do, and Google had been e-mailing me for years saying, "You should come at an interview, you should come at an interview", and I'd always thought "No, I don't wanna go there. I'm not a big company person. I wouldn't fit it. I don't have computer science... It doesn't make sense." But because things had just suddenly shifted around for us, we thought we'd give it a go, so I went to the interview.

**Jerod Santo:** That probably leads us to the "tweet heard around the world."

**Adam Stacoviak:** Pretty much.

**Jerod Santo:** Or around the developer world at least... Which was June 2015; you said "Google: 90% of our engineers use the software you wrote (Homebrew), but you can’t invert a binary tree on a whiteboard so f\*\*\* off." Tell us about that tweet from your perspective, because I know it from mine, but I don't know it from yours.

**Max Howell:** Yeah, I don't know if anyone knows it from mine, apart from people who know me; I haven't really talked about it. Basically, the recruiter who I talked to in the interview process was pretty adamant that I would mostly get asked about iOS stuff, and that's what they wanted me for - iOS stuff. So despite their e-mail giving me a big list of computer science stuff I should know, I didn't do any research or studying for it, because I assumed that they wanted me for the knowledge I had, and not the knowledge that I could have if I studied \[unintelligible 00:39:32.29\]

So my first interview was the binary tree question, and I think I did a fairly good attempt for someone who didn't even know what they were talking about, although it wasn't a binary tree question, it turns out... But I didn't know, I just assumed it was... It's where you have an array and you can divide it in two to get... Blah - I can't remember. Anyway, after failing at that, I went home and looked it up and figured out how to do it, just to prove to myself I could.

\[00:40:08.23\] I did well in like half of the interviews; I've actually talked to the people that interviewed me, because of the tweet, and they said that it was a difficult choice that they made that they decided not to, based on the way they do these things. They have a very strict process.

But anyway, a week went by and they phoned and said no, and I just fired the tweet out, because I was like, "This is ridiculous." Considering the popularity of Homebrew, I just assumed that they could fit me in somewhere with something. They have enough engineers that use it, surely I would have some value to them; that was my thinking. Even though I thought I was getting \[unintelligible 00:40:50.14\] So I fired it off, didn't really think about it... I put a Homebrew in brackets I guess because I was thinking, "Well, if it's retweeted, people will know what I'm talking about." And obviously the 90% is bullshit; it was a flippant tweet. I was exaggerating... Who knows what the percentage actually is; probably all their Mac developers, or the majority. There's still some die-hard Mac ports used out there for sure.

Well, that exploded, that's for sure; 20 minutes later I checked back and I had like 400 retweets, so I was like, "Oh, dear..." \[laughter\] People started linking me to the Hacker News article, then I got one of my co-workers to look it up Hacker News, and he was like "Where do you think you're ranked on Hacker News?" I was like, "I don't know... Top 20?" He was like, "Try the top..." and took a screenshot of my tweet on the top of Hacker News.

I never read any of that stuff, and I didn't reply too much... Because it was never my intention to make that much fuss. I feel kind of bad for Google, because to be fair, they told me what I needed to read. The recruiter had made me think differently, but they sent me an e-mail that was very specific and clear about what I needed to know, what I should know. And it wasn't fair because 90% is obviously not true. I got a lot of googlers saying, \[unintelligible 00:42:23.20\] \[laughs\] And I don't like it because I came across so arrogant, but I like the conversations that arose because of it, because they definitely could have found it useful.

**Jerod Santo:** Yeah. There was a lot of conversation around this, as you said. Some of it is in the replies to the tweet, everything from people saying, "Well, you're not a real programmer if you can't invert a binary tree", to other people defending you, "Who's at fault here?", and I liked that in retrospect... The numbers -- of course that was not the actual number; did you survey all their engineers and get that 90%? \[laughter\] But I liked that knowing the full story it seems like I agree with you that it just makes sense - with how many engineers they have and how many do use Homebrew, and you've demonstrated over time that you can have software that's valuable to many people, I could totally see where you would be thinking, "Surely there's a position for me. Since they're already interested in having me work there..." It's not like it's a cold interview; with that being said, hearing that they did give you what you needed to know... They made it clear that they were gonna require this of you - that makes it look like it's not so bad on Google's side.

**Max Howell:** No, but I feel bad for them, but this is how things are nowadays with social media and virality, and 140 characters.

**Adam Stacoviak:** \[00:44:03.01\] The question is would you do it again? If you had to rewind back to the day, would you do the same tweet?

**Max Howell:** Yes, but only because it inspired some conversation in the industry about how these interviews should be. I really feel bad for shaming them; I guess they probably don't take it personally... And I feel bad because I'm sure a lot of people think I'm just an arrogant ass now, but I try not to think about it personally in that respect. It was just flippant, and I went from 3k followers to 16k in like a month.

**Adam Stacoviak:** Wow.

**Max Howell:** I don't like that either.

**Jerod Santo:** Why don't you like that?

**Max Howell:** Most of these people aren't following me for anything that I actually care about. They're following me because they...

**Adam Stacoviak:** Maybe they are, maybe they discovered you because of that.

**Max Howell:** Maybe...

**Adam Stacoviak:** Maybe it was the entry point for you, at least to them, so to speak. I think the interesting thing there is that you'd do it again, but with some regard. At the same time, none of us are identified by our tweets. My tweets don't define me. And I may say something sometimes that doesn't exactly identify who I am, but the thing is that the people tend to take the black and white text we put on the internet as like the version of us that's the truth, and there's a grey area there, where you're not exactly the person you seem you are. And there's a person behind that, versus just a tweet.

**Jerod Santo:** Right.

**Max Howell:** Absolutely.

**Jerod Santo:** I definitely like the conversation, because I knew you previously. I hadn't followed you on Twitter, but I knew you as the Homebrew guy, and when I saw that tweet I thought - and I've never been interviewed by Google, so I don't know what that process is like; I know they have brain teasers and whiteboarding and stuff like that, but I hadn't thought about the interview process at large companies because I've never been part of a large company. And the conversation around it wasn't just "Should Max have gotten hired/Should he not have gotten hired? Is Google evil? Is Max arrogant?" Of course, those things are always said, they're on any popular conversation (unfortunately), but it was "Is interviewing broken? How can we do this better?", those kinds of things.

I felt like the end of it, there were a lot of think pieces that were written. I think there were a lot of good things that came out of that, and so I would hope you'd do it again too, just so we can continue having these conversations. So that leads us to where you actually did land, which was Apple. Can you compare and contrast the hiring process between the two? Would that be profitable, or...?

**Max Howell:** They're similar in that they're all day. It's exhausting. Apple had more interviews, but I was interviewed by the people I had worked with. Google really do seem to -- I don't know if they've changed anything, but I heard from a friend who was at Google at the time that my tweet went around Google and it inspired a lot of internal conversation. So I don't know if they've changed how they do it at all and, well, humbly enough, I got two calls the week after from a couple of people at Google asking me to come and interview with their team, and that it would be very specific to their team, because they wanted me to do the iOS stuff for them. That's partly because of PromiseKit, because it's a pretty good framework; I designed it carefully, like I designed Homebrew, and I needed it, just like I needed Homebrew. The best things I make are always the things that I make from tools I need.

\[00:47:49.06\] So Apple interviewed me personally, while Google -- it's like jury duty, it's the impression I got. You get an e-mail saying, "You have to interview Max Howell on that day. Be prepared." And then they have a box full of questions that you can generate a random number and pick one. But the interviewers get quite a lot of choice... One of my interviewers at Google knew what my skills were and asked me stuff about it, and I did pretty well. Another one had me redesign an API and I did pretty well. The ones I couldn't do were the data algorithm stuff, which they really needed. But I think I made a pretty good attempt.

That's I guess what I'd change about the interviewing process at these places - did I demonstrate that I could solve problems given input, even if I don't have the specific knowledge? But it seems ironic at Google - learning how to do that is just a Google away, and that's what I did when I got home... To prove to myself that I could do it after feeling stupid, which is for \[unintelligible 00:48:58.20\]

Apple interviewed me personally and apparently were told to give me an easyish time because of my tweet. \[laughter\]

**Adam Stacoviak:** Wow.

**Jerod Santo:** Nice.

**Adam Stacoviak:** Don't mess with him, he'll tweet about you.

**Max Howell:** Yeah, that was one of my concerns with the tweet. I was like, "Well, you've just screwed up a lot of chances for yourself." But at the same time it wasn't. I got two hundred e-mail, give or take, because of the tweet, from different companies saying, "Well, if you want, give us a call. We could use you." That was an interesting side effect, certainly. Including SpaceX... I was like, "Wow, that would be cool", but I didn't...

The only reason I considered going to Apple was because I met Chris Lattner while I was at WWDC, and talked to him, and he was awesome. They were like, "Well, we kind of need something like Homebrew but for Swift", and I was like, "That's amazing", because I was so into Swift then. As an iPhone developer for a few years at that point, and Swift just suddenly came out the previous WWDC, and I could see that it was a really nice language, with forward thinking in the right places, learning from the right places of different languages... It was the language I wanted to use, and maybe use for ten years... Who knows? I hesitate for the most of my life in this industry, but ten years seems to be like forever.

**Jerod Santo:** Right.

**Max Howell:** So the opportunity to shape that language was just irresistible... Because I wouldn't have gone to another interview probably, after the Google experience. It just wasn't for me, I knew it wasn't for me. The only reason I'd done it was because we landed in a situation we didn't know what to do with ourselves exactly, and I didn't wanna do contracting anymore.

Their interviewing process was much nicer, but at the same time I don't think they should have hired me, quite honestly... Maybe Google had the right idea.

**Jerod Santo:** \[laughter\] Why not?

**Adam Stacoviak:** That's so funny...

**Max Howell:** Well, I was only there a year... It didn't work out. I'm just not the right kind of person for these big corporations. I was trying to make the Swift Package Manager the way I knew the community needed it. I'd been involved with CocoaPods and Carthage and used them heavily, and obviously made Homebrew, so I had lots of opinions about how a package manager should be, and especially for a language package manager, which is different than just a packet manager. I came in with all these ideas, and I can persuade anyone about many of them, but it was very frustrating. At the same time, they couldn't really persuade me about their alternatives...

**Jerod Santo:** So you weren't persuadable, they weren't persuadable...

**Max Howell:** Yeah... I wanted to work like I worked in open source, where I produced stuff and then we reviewed it and considered how it would go from there. I stewed on ideas for a couple months and then talked about it.

\[00:52:08.07\] And Apple -- I can't speak for the whole company, I really can't, because every department is very isolated, and that could be a good or a bad thing, I won't go into it, I guess; so all I can talk about is for developer tools, and developer tools is a very old department. They've been around since, like, ever.

**Adam Stacoviak:** Since the beginning.

**Max Howell:** Xcode itself has existed 20-25 years; I've never worked on a codebase that's that old with clunky clunks upon clunky clunks... And they have to work with it, because they can't rewrite the thing. But I was mostly working independently about that with the Swift team, but I wasn't on the Swift team, I was on the build systems team. So I was isolated from the Swift team, and that was probably a mistake on their part. I should have been with the Swift team.

It was not bad... Chris Lattner is a genius, and I'd be having meetings with my team, trying to decide how we should take the product, and he'd come in and instantly appraise everybody in there, figure out their needs, wants, motivations, and just say the right thing. It was amazing.

**Jerod Santo:** This is interesting... Your pinned tweet on Twitter says, "The foundation of the modern world is developer tools", and here you are at Apple, with the ability to affect a huge portion of the software development community, or surely the entire portion of the Apple developer community, working with Chris Lattner who's a genius, on the Swift Package Manager, which is to be an open source project, and yet something's not jiving here. I'd like to dig into that a little bit more on the other side of the break.

We are hitting our next break, so we'll pause... Think about that a little bit, Max, and when we get back, Swift Package Manager inside Apple, open source, but there's trouble here... So let's pause and we'll be right back.

**Break:** \[00:54:10.17\]

**Jerod Santo:** Alright, we are back. Max, before the break we were talking about your time at Apple. You were there for a year, working on the Swift Package Manager, which is out there and is open source, and so you got to be there I believe during the launching of that, which had to be fulfilling, I would think... But there was some struggle between you and management, or between you and your position; you just couldn't quite have the impact that you were desiring to have. Is that fair to say?

**Max Howell:** Yeah. I wanted to make a really great thing. Because, like I say, I plan to use Swift for... I don't know when I'll stop using it, so it having a vibrant, active community, a good packaging system was important to me personally as well as professionally, and for the good of the language.

\[00:56:01.29\] But Apple have the way they're working, which didn't fit with me specifically. I butted heads with my manager and various other people many times. I've gotta say though the Swift team were great. They seemed to be -- I don't wanna be insulting, but they seemed to be really forward thinking; they used modern development methodologies, they were extremely smart, they worked well together, they talked well together, they figured things out that I wouldn't have figured out if I was in their position. Little details of how to design the language so that it caters to so many different ways of working, and yet still maintains the strictness, the safety, the fun that is Swift. They were great.

I said to my manager when I joined there I partly came to Apple because I wanted to learn from people who were smarter than me, and he used that so many times... He said that I didn't want to learn from them actually... It wasn't a good match.

**Adam Stacoviak:** That happens sometimes, I think... People go into positions with super high hopes, right? Like, "Dream job... I wanna work here all my life. Developer tools, I've got the chops for this, this is perfect", and then it's just some sort of like bad mixture you never expect and you're like, "I gotta get out of here..." I've been there.

**Max Howell:** It made me realize how important team fit is. I've been lucky my entire career in that I just lucked into great teams that I fitted well in and that we worked well together. When you don't have that, it's just impossible.

**Adam Stacoviak:** Yeah.

**Max Howell:** And I did my very best, because I cared so much and it drove me to quite a stage of depression, actually. I really wanted to make something great, I just didn't know how to do it there. I'm pleased that some aspects of the Swift Package Manager succeeded to get in and are there; I think it has a good base. I'm glad... Otherwise I would go, "I failed completely." But I think it could be a good thing still.

**Adam Stacoviak:** So is a lot of what is there, is it -- you mentioned earlier, liking it back to your Homebrew days, that your architecture and what you laid out and how it worked, a lot of what we see there, not so much the code, but how it works, how it's laid out, how it's supposed to work - the plan for it, basically... Is that a lot of what you contributed?

**Max Howell:** Yeah, with some compromises here and there. A lot of the time I was able to at first to get my way without it being too difficult, so as a result it's a highly modular system, which is one of Swift's powers - you can easy make modules. And it's a convention-based layout system, so you make new directories for each module, and then sourcers can edit part of the modules... So you're not messing around. It's really easy to write code really fast.

Syntax for the package description, for all the recipe, the formula is in Swift, which I had to fight pretty hard for, which means that you have flexibility with it. You can import modules into it - well, they didn't want that... They really didn't want that, because it's not very Apple.

**Jerod Santo:** What was the other option? Like a .plist, or XML files?

**Max Howell:** Yeah, probably .plist, because that's -- I don't know... It would have been JSON, I expect. But it's difficult to add things... Like, what if you want to make a module where you only want the files with a Windows extension for the Windows platform, and things like that? It's really hard to describe that kind of behavior in JSON, but with Swift it's easy - you do a "hash if Windows", and then you add to an array...

\[01:00:04.19\] Programmers like to program, is my opinion on the matter. We like code, we write code, we want the power of code even if that results in some danger, with a real language.

That is decentralized. I'm very pleased to see centralized -- I wish Homebrew had been decentralized to a certain extent in the first place, but it is now, with taps. Because it makes it easy for people to just push out their packages without having to conform to some system. For example CocoaPods, which is the most popular iOS packet manager currently - when I contribute to another CocoaPod, I have to ping them for like a week or so for them to push an update, so that I can actually use it without messing around in my Podfile. It shouldn't be like that. I should be able to just make the changes, use my fork very easily, and then have it ready to go into the main fork.

That's what GitHub is about, it's about this decentralized open source community. These things should be all over the place, and if I think that somebody is doing something wrong, I should be able to easily fork it and use it. Or if I'm in a company and I need to make a change but I can't release it, I can just use my private fork of the thing easily etc. I believe that's how these things should be, for language packet managers at least.

I feel that it's a pretty good base, and the people that are now working on it, they're great, they're really very good, and I think they'll do a great job. Probably better than me, because I just couldn't figure out how to navigate Apple. I couldn't figure it out.

**Jerod Santo:** Well, I'm looking at the GitHub page for the packet manager, and I'm happy that the file that you're talking about is called Package.Swift, and it's not called Package File. As somebody who respects the names, I think it was a nice break from convention there.

**Max Howell:** Oh, that cost me sleepless nights getting that. \[laughter\] It's just difficult. Apple, basically -- I'm pretty sure I can say these things without getting an e-mail from HR to shut the... It's all about who you know. If you don't have the right influence with the right people, you don't get your way, even if you've got the right idea. And you only get that through years; you have to be there years. You have to put in five, ten years before you can make an impact, and I didn't have five or ten years, as far as I was concerned; I had a year. Otherwise, this product was gonna suck, and it needed to be good now.

Also, I found that there's a lot of people there who love to invent work, and I don't, so I didn't go on with that aspect.

**Jerod Santo:** One thing you said earlier was that you're proud of Homebrew. Would you say that you're proud of the work that you did at Apple?

**Max Howell:** No.

**Jerod Santo:** Hm... Well, that's sad.

**Max Howell:** Yeah. As I said, I blame myself as much as I blame anyone else. I knew before for any of these interviews that I didn't work well with teams, and I don't. I can, if it's just the right team and we all get along and we all can see each other's perspectives, but I can't stand when there's a bunch of stuff that isn't the work that must be done in order to get things done, and at Apple there's constant meetings and constant disagreement, and constant battles about things that really weren't important in the slightest...

\[01:04:08.14\] That's \[unintelligible 01:04:08.18\] when Chris Lattner turned up, because he would just see through all that. This is why he's done so well. He's very easy to admire.

**Jerod Santo:** Well, it sounds like Swift is in good hands with Chris.

**Max Howell:** Yeah, Swift has got a fantastic team, it's gonna do really great, and I'm so glad that they open-sourced it. Without that, it would have only ever been like for iPhone, even if someone else figured out how to compile it on Linux or whatever, or bring their own Swift compiler... Because it's open source, I feel that it has a good chance to be the next big scripting language, replacing things like Ruby, Python, maybe even replacing Node. I know that that's gonna be harder, because people love their Javascript so much...

**Jerod Santo:** So the Swift Package Manager is open source; Swift, of course, famously open source... Big shift really, for Apple to open source things on their own accord, and not because they're complying with a GPL, or something like that.

**Max Howell:** Well, that's not strictly true...

**Jerod Santo:** Were you involved with the open-sourcing idea around the package manager? Were you in any of those meetings?

**Max Howell:** I didn't make the decision. That was already made.

**Jerod Santo:** Okay. Just thought it would be interesting to be a fly on that wall, around... You know, when you talk about the arguments and whether or not to open source, it's a big discussion.

**Adam Stacoviak:** Or the motivation.

**Jerod Santo:** Yeah. It makes sense for the language for sure, because if they want \[unintelligible 01:05:39.17\] it could be the next major scripting language, or a primary language that you teach children... These things it has to be.

**Max Howell:** Yeah. Well, Apple really care about \[unintelligible 01:05:51.04\], that was the impression I got. They want this stuff to be used, they want kids to learn to code, and they wanna help that. That was a lot of the motivation; I know people want to be suspicious, as though Apple are just a company that are trying to get your money, but my feeling while I was there is it's definitely not that.

**Jerod Santo:** Yeah. So what about Swift? You said earlier that this could be your language for the next ten years, you fell in love with it. First give us a rundown of some of the earlier languages that you know, which will give us a little bit of help contextually, and then tell us what it is about Swift that you love so much.

**Max Howell:** Well, the first language I have ever used was BBC Basic, which was basically the same as QBasic. Then I started learning C because there didn't seem to be anything else at the time. This was when I was like 11, 12... Then C++, and that was my first professional programming language.

Then when I decided to make Homebrew, I wanted it to work without having to be compiled or installed, so it had to be some scripting language that came with Mac; I'd seen a lot of people talk about Ruby and how great it was, so I tried it out and I agreed - so Ruby.

Then I did about a year and a half of Javascript while I was working on a music app with someone that was on the web, and they also had a bunch of C for a little app, and stuff... And I really quite liked Javascript. I loved the functional aspect of it, I liked the dynamic aspect of it, and the use of Promises and things was new to me, so I enjoyed that. There were some things I liked about it, like you could call a function with as many arguments as you wanted and then figure it out later... \[laughter\] I could see how it would easily lead to devastating behavior, but it was fun.

\[01:07:52.07\] Then I went back to Objective-C... I've done a bunch of that as well before that. I loved Objective-C, at least until Swift came out. So that's my language history... I've done dabbling in other languages like Python - I've written a few scripts in Python and Bash... If you consider Bash a programming language.

**Jerod Santo:** Of course.

**Adam Stacoviak:** What made you suspect that Python, Ruby might get supplanted by it and then you even said Node, which is more of a framework on top of a language than a language itself... What makes you say that?

**Max Howell:** Yeah, well Node made Javascript feasible as a set-aside and not just in the browser system.

**Jerod Santo:** Right.

**Max Howell:** Well, what's wonderful about Swift - well, it's familiar. It's familiar to almost anyone. It's C-based, but it also has influences from so many other languages, and you feel it. But the safety of it - that's what scripting languages really don't have. A scripting language is great, because you can just power stuff out and it more or less works, and it's easy to fix (at first, at least). They have a good packaging system, so you can get all these third party libraries... But they're not safe. With Swift, everything is safe.

You end up programming in such a way that you know there's no way that there's an error or anything in this program that you haven't accounted for. I think that the biggest problem software has right now is it's flaky; software sucks, it breaks. You're using an app and you push a button and nothing happens. Or a spinner starts, and the spinner never finishes. Or the buttons move around incorrectly when you rotate it and it doesn't recover, or crashes, or the data gets lost... Flakiness is the problem.

We solved speed of development, we solved it being difficult to crank out an app, but safety - there's not safety. And Swift naturally forces you to be safe. The optional is obviously a big deal... It's not an invention of Swift or anything -- most of these things aren't inventions of Swift. The invention of Swift is the way they put it all together in such a nice package. They carefully thought about the keywords and how they interact with each other. They carefully thought about which things to bring to the language, and which things not to bring; which things have the most benefit.

With Swift, everything's -- either it is or it's not, but if it's not, then you have to wrap it as an optional. This means you're always considering the cases where there's nothing, and you're trying not to have nothing. I try to write my apps now so optionals are almost never there. And without the nil, at least with Objective-C, it was a huge cause of bugs, and Objective-C handled nil differently to other languages. If an object was nil or null, it would just do nothing. So a common bug in iPhone apps was you'd push a button and nothing would happen, because it was connected to something that was nil. Of course, in a Java app it would just crash.

With Swift you don't crash, and you don't do nothing, so both of these issues... But they understand that it's still necessary to be pragmatic, so they have implicitly unwrapped optionals, which are optionals where you say, "Well, I know this is never gonna be nothing" - because sometimes you need that, but that won't crash. But you have to opt into that; you have to really think about it. You have to be careful with it, and then you have to \[unintelligible 01:11:31.10\] whenever you use it, reminding you that you're not being safe, that you're a bad programmer, that you should feel bad about yourself.

**Adam Stacoviak:** That's funny. Great explanation, too.

**Max Howell:** \[01:11:45.00\] With version 2 they released guard, which is this statement where you can't get past it unless the thing you're evaluating is true or not true -- I can't think about it. It just means that you can write a function and then have \[unintelligible 01:12:02.24\] at the top, and you can't leave the guard statement unless you return or leave the function in some meta, so you have to leave it safely. You're not crashing, although you could put a crash in there; the idea is to make you behave correctly, to write code that behaves correctly.

**Jerod Santo:** So if you had to put your forecaster's hat on - I know you like to wear a lot of hats... So put on your forecaster hat and tell us where Swift is five, ten years out. You said it could be your programming language. Do you think it will come to dominate the programming landscape, or do you think it will always be inside Apple's bubble?

**Max Howell:** I think it's already starting to leave Apple's bubble because it was open-sourced for Linux support, and since then some people at Facebook have made it work on Android, and some people are working on making it work on Windows. So we're getting to this point where you can write your app in Swift for every major platform apart from the web. But you could write your server-side in Swift, and someone's already made a Swift to Javascript compiler, so you could write the frontend in the Swift as well if you trust the compiler. I don't know, I haven't really looked into it.

So I really want it to be. I think it's a lovely language, and I'm not just saying that as someone who's been a bit of an Apple fanboy for so long. I've been disappointed with Apple in many ways, not just because I worked there. I think MacOS is really in need of work, or at least some hooks so that developers can change how it works. I wanna get rid of the dock, I wanna get rid of the menu bar, I wanna experiment with many different ways of making it a better platform for me. I've been using Windows a lot lately, and I think Microsoft are doing a lot better with Windows 10 than Apple are doing with MacOS right now.

**Adam Stacoviak:** Wow, that's a bold statement.

**Jerod Santo:** ...from a longtime Apple fanboy.

**Max Howell:** Yeah. Well, I switched... Obviously, Linux, and then I switched to Mac because I got fed up with my Linux Wi-Fi driver failing every time I upgraded my kernel...

**Jerod Santo:** Yep.

**Max Howell:** ...and Mac was UNIX underneath. And now Windows 10 has this Bash and Ubuntu interface I haven't tried yet. It can be UNIX, and that's the main thing that a lot of us want, at least - a UNIX system. So I'm pretty tempted by Windows 10, but currently all my projects are on Macs for now.

**Jerod Santo:** You just bought a brand new MacBook Pro, so...

**Max Howell:** Yeah, I did. Having said I wouldn't, I did. That's why you shouldn't believe anything I say on Twitter.

**Jerod Santo:** \[laughter\] Or podcast, maybe.

**Max Howell:** \[laughs\] Well, you know...

**Adam Stacoviak:** As we're getting closer to the end of the show, Max, I know you've got a couple things on your side you wanna mention before we close out. I know you've got a startup going on... What's new for you? What do people not know about you these days?

**Max Howell:** Well, since I've been out of Apple for about four months - not very long, but it feels like it was... The day I handed in my resignation I felt like such a weight off my shoulders, it was incredible. I decided I wasn't gonna work for a big company again for sure, so I consider myself an indie now. I've been trying to work on a few things to make myself independently financed; I don't wanna be rich, I decided. I don't need to be rich. What I wanna be doing is cool open source, being involved in the open source community, and just trying to improve the world. And the little bit I can improve - bits of software here and there.

I joined a startup with a friend and we're doing music stuff, which I've always been interested in. We have an app in the store right now called MixMessage, which is an iMessage app, and you can make a mixtape with a friend, take turns where he/she puts a track in, you put a track in, keep going like that. It's fun, surprisingly fun.

We whipped that up when the messaging apps came out, because we thought it would be neat.

**Adam Stacoviak:** What's the URL for it?

**Max Howell:** \[01:16:07.24\] It's MixMSG.com. It's unfortunately named in a respect -- we didn't realize this until afterwards... Google always thinks you're talking about MixMag...

**Adam Stacoviak:** Oh, autocorrect...

**Max Howell:** "Did you mean MixMag?" Yeah...

**Adam Stacoviak:** I hate searches where there's like "Did you mean...?" or the autocorrection... No, I really meant to write what I wrote like three times now. You stop correcting me. \[laughter\]

**Max Howell:** Yeah, I just don't understand that.

**Adam Stacoviak:** I mean, I like autocorrect and it helps me a lot because I type fast sometimes, but it just drives me crazy when it's like "No, I clearly mean that acronym. I know it's weird and all, but I mean that."

**Max Howell:** \[laughs\] But once you corrected it once, why would it try to correct it again to the same thing...? Yeah, so it's MixMSG - MixMessage.

**Adam Stacoviak:** Gotcha.

**Max Howell:** It's nice, our team has a really good designer, and I'm doing the \[unintelligible 01:17:00.02\]. And we're also working on an app for local music that's going to be called Audiyo. We're hoping to have that \[unintelligible 01:17:14.05\] discovering local bands, local music near you... Something I'm somewhat passionate about. I've always felt that the music apps that exist are not good. Like... Like Apple Music - it's just not very good. Beats is better. I don't know if you ever used Beats. Apple bought it and then ruined it. Spotify - I just... I'm not gonna say anything about them.

**Adam Stacoviak:** What was the name again for this last one?

**Max Howell:** Audiyo. We're hoping to have that out (a beta) before Christmas, hopefully.

**Adam Stacoviak:** Is it a .com?

**Max Howell:** I'm not sure we even have a website, so you're gonna have to just wait.

**Adam Stacoviak:** Okay, I was gonna say... Because I can't find it on the web, so I'm assuming that either somebody else has got it, or... You said you love names, but then you said you hate them, so...

**Max Howell:** Well, I didn't name these things... \[laughter\]

**Adam Stacoviak:** Gotcha.

**Max Howell:** That's all I'm gonna say. \[laughs\] And I'm working on something for Homebrew. I don't think I'm gonna go back to the core, but I always have a notebook full of ideas, tools I need, and that's why that tweet is still pinned, even though I'm not working at developer tools with Apple anymore - "The foundation of the modern world is developer tools", because I believe it, it is. And I love being a developer because we can make our own tools. It's like the only industry apart from maybe blacksmithing - and I'm not sure if they even do make their own tools - that we can make our own tools to improve our workflows, to make ourselves more efficient and productive. So I always have a notebook full of ideas for stuff, and this is one that I've been toying around with for a couple of years and I'm really trying to make it now. And yes, it has growlers in it, and I don't wanna say anything more about it because I don't like to jinx myself. I feel like if I say things about some new ideas I have that I then don't finish them. I really wanna finish this one though, also because I'm thinking about how to make money with it, and that's what I want: I wanna be able to work on open source full-time.

**Jerod Santo:** Nice.

**Adam Stacoviak:** Well, I can poke around on GitHub and I did see /growler, which is an empty repo, sitting there waiting. So if you're listening to this, maybe go watch that, or start it at least, or something, to kind of keep up. I'm assuming that's it, right?

**Max Howell:** That's part of it.

**Adam Stacoviak:** There's no description, there's no message shared, so you're not being committed to your idea.

**Max Howell:** \[01:19:58.11\] Well, I needed the repo to exist for various reasons, but yeah... It's not gonna be filled yet.

**Adam Stacoviak:** Gotcha.

**Max Howell:** One of the things Apple do - they hammer into you, in fact - is surprise and delight, and I agree.

**Adam Stacoviak:** Right.

**Jerod Santo:** Yeah.

**Adam Stacoviak:** Well, Max, thank you so much for taking us down this trip of yours. I know that you've got some history to you, and as you had said before, millions use software you've worked on, so you've got some history with everyone listening to this... At least those who use MacOS. I use Homebrew all the time, so thank you for the work you've put into that. Even the angst you had with pressing the button to share it back, I can appreciate that and understand your feeling there, and just thank you for being the maintainer you are and the software developer you are, and the encourage you are, especially with that tweet to sort of change how people look at the interview process. That's gonna be a huge help to many software developers out there for years to come.

**Max Howell:** I hope so.

**Adam Stacoviak:** Any last words to share with us before we tail up the call?

**Max Howell:** No, I'm all good. Thanks for what you've just said, it was very kind.

**Adam Stacoviak:** Awesome.

**Max Howell:** And thanks for having me on.

**Adam Stacoviak:** Alright, well, listeners, thank you so much for tuning in, we love you. If you don't subscribe to our weekly e-mail, we would love for you to, so go to Changelog.com/weekly. Jerod and I, we put in so much work into that e-mail and every single week we scour the internet for our favorites in open source and software development, and we do whatever we can to share that back in that e-mail: our latest episodes, our latest announcements, we're doing lots of fun stuff, we're growing, we're expanding... So if you like what we're doing with this show, check out Request For Commits, check out GoTime, check out Founder's Talk (we're bringing that back), we have a new show coming up very soon called Spotlight... So much fun stuff happening, and the place we announce all that fun stuff is at Changelog Weekly, so go to Changelog.com/weekly, subscribe to that.

For those listeners who have been listening to The Changelog for years, back to Max's episode \#35, subscribe to our master feed. Many of you love all we do, so just go to Changelog.com/master - it's our master feed; it's in iTunes, on Overcast, and you get everything we do. Don't miss out, don't be that person, and if you see us at a conference, high fives and hugs, okay?

Fellas, that's it for this show, so let's say goodbye.

**Jerod Santo:** Goodbye! Thanks, Max!

**Max Howell:** Goodbye! Thanks very much!
