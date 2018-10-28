**Suz Hinton:** Today you're listening to JS Party, which is a weekly celebration of everything Javascript. I'm Suz Hinton, I'm your host for this episode, and I'm very lucky to be joined by some fantastic panelists... So let's say hello to all of them. First we have Kball. Hey, KBall, how's it going?

**Kevin Ball:** Going good. Excited to talk about failure.

**Suz Hinton:** Yeah! And we also have Nick, who'll hopefully share some stories with us today. Welcome back, Nick.

**Nick Nisi:** Hello! I'm an excellent failer.

**Suz Hinton:** \[laughs\] And I caught up with you too recently at JS Conf, which was really fun. I think I've met both of you in real life for the first time as well.

**Nick Nisi:** Yeah.

**Kevin Ball:** Yup.

**Suz Hinton:** It was super fun. And last but not least, we also have Jerod on this show. It's also really cool to have you on this episode, too. I think that you have a really cool story about our Twitter account to share, right?

**Jerod Santo:** Well, I don't know if "cool" is the word, but I think "fail" is definitely the word. Happy to be here.

**Suz Hinton:** \[laughs\] So as mentioned, then, we are talking about Javascript fails for the topic for this episode... So if you are listening in on the livestream and you're in our community Slack, please share some stories and we would love to be able to either have you call in, or you can also have the stories read out by us.

If you aren't in the community Slack or the livestream, what are you doing? You should totally come in. You'll be able to find the different links on our website in order to check that out. So without further ado, let's get started about some Javascript failures and gotchas.

I'm seeing that Kball had a weird time/date parsing issue with my home country, by the sounds of it... Do you wanna tell us a little bit about that?

**Kevin Ball:** Sure. I mean, it's not that crazy, but it's in that theme of "I've been doing this how long (...?) and I still f this up." I have a client right now that's based in Australia, and I don't know if you all know, but they do their days and months backwards over there...

**Jerod Santo:** Whaat...?

**Suz Hinton:** It's not backwards, it's different... You know what I mean?

**Kevin Ball:** \[laughs\] I think it probably actually makes more sense... But beyond that, it's different from how things are in the U.S., and it's different from how Moment parses things by default. Actually, I don't know if that's true... Does Moment change how its default parsing is based on the time zone of your computer? Because that would be kind of cool if it did that...

**Suz Hinton:** I think there are default configurations, and as usual, it tends to be based towards the more U.S./American-centric way of doing things, which you definitely encounter a lot, surprisingly, when you're not a developer in the U.S. But anyway, that is a tangent...

**Kevin Ball:** \[00:04:22.06\] Yeah, so anyway... I was developing the site, I'm doing it statically, and I had a bunch of dummy data that I was dumping in. I dumped it all in, and couldn't figure out why -- it would display fine, because I was just displaying the data straight up, but then I'd try to do sorting or computations by it and it would just totally shatter and break down and not work... And I eventually traced it to the fact that -- to sort it, I took it from the strings of dates, and I would parse it by moment, and then do sorting with moment, but everything with a day above 12 would parse as an invalid date, because Moment was assuming that those were the months, and it would just kind of blow up...

Eventually, what I ended up doing is essentially building a wrapper around everything that I did time-wise, so that you always parse it in through these wrapper methods, you always put it out through these wrapper methods, and it's fine. I probably could have changed the default config too, but that was too smart for me.

**Suz Hinton:** I feel like there's a deep-seated fear in the development community to deal with just time zones, dates in general, and I feel that Javascript the language itself has already set us up to fail... And the reason why things like Moment and date functions are such popular libraries is that you really do have very scant support for doing anything productive with dates in Javascript.

**Kevin Ball:** Yeah, time is terrible... It's really terrible, and I'm trying to remember what it was, but I was reading some article that was talking about building a calendar, or something like that... It's the type of thing that you think is gonna be relatively straightforward, but there are so many edge cases around time zones...

And even now -- Google Calendar is pretty darn good, but if I'm traveling and moving around or sending invites to people that are in different time zones, or worst of all, I'm trying to schedule something for something in one time zone, but I'm scheduling it for somebody who's currently in a different time zone but will be in my time zone when they get here... It's the most confusing thing!

I was scheduling interviews for one of these conferences, and the conference was gonna be in Pacific Time, I'm sending out these invitations, or using Calendly or whatever, folks are signing up, they're overseas or they're on the East Coast, and there was so much confusion over "What time did I sign up for? When am I supposed to be here?"

**Suz Hinton:** That sounds like a nightmare.

**Nick Nisi:** I saw a tweet a little while back, I wish I could find it to attribute it correctly, but it said something along the lines of "I was really excited for humans to travel to Mars, until I realized the impact it would have on date parsing and time zones." \[laughter\]

**Suz Hinton:** That's really good! There's also a comment in our Slack, which is from \[unintelligible 00:07:16.21\] saying that I recently learned of Julian format, which is you have your four digits for the year, and then you just have the amount of days in the year. They said that today would be 2018, 256, because we're at our 256th day, or 257th day... Interesting.

**Jerod Santo:** Time is really hard, especially when you're trying to organize a live show. Maybe, Suz, you can talk about how you do it with Twitch, and stuff... For instance this show, the question is always -- you don't wanna be so USA-centric, even though we are in the USA, so the timing of the actual recording kind of has to be around the people who are gonna be on the show... That being said, we want as many people as possible to listen live, and we want to message to them in a way that, you know, comes to them, as opposed to come to us.

\[00:08:05.26\] So it's always difficult, like how do you say "Join us on a Twitter thing that's gonna be tomorrow at 12 PM Eastern?" Well, if you just say 12 PM Eastern, which would be the wrong time anyways, you'd show up an hour early. Now, if you said 1 PM Eastern, which is our normal time, then people have to translate it into their own time zone.

There is a cool website called time.is, which will take a UNIX timestamp, which is the offset milliseconds since January 1st, 1970 or something like that... And you can pass it into that and it will just use Javascript, I assume, or locales, or whatever, in order to translate into every viewer's local times... So that's what we used to share.

**Suz Hinton:** Yeah, that's super smart. I know that there are some Twitch extensions you can use which you can install as little panels at the bottom of your stream, and it basically has a countdown, which I think is how Twitch has gotten around it. I ran into this when two years ago I started my Twitch stream, and I lived in New York, and so I was like "Cool, 11 AM sounds like a pretty chill time to stream on a Sunday. I get to sleep in etc. etc.", and then joke's on me, I moved to Seattle three months ago and now I have to do it at 8 AM, because just because I moved doesn't mean that everyone's expecting me to all of a sudden start streaming three hours later...

**Jerod Santo:** Oh, no...!

**Suz Hinton:** So that has been a struggle, but also I had to send out an online survey to all of my viewers, asking them "If I was to change the time to be later in the day, would that actually literally prevent you from watching?" just to be able to see, because even just changing it by one hour could mean that all of a sudden someone was watching while preparing dinner, for example, which is a thing for a couple of people... And then they are now eating with their family during the exact hour I start.

So I have to be aware that not everyone is getting up at 8 AM to watch my stream, and that most people are actually watching from totally different time zones. So me just rolling out forward one hour monumentally affects everybody. And when I start my stream, I also say "Good morning, good afternoon, good evening, wherever you are around the world", so it's actually really nice and inclusive, but you always have to be aware of that.

**Jerod Santo:** Well, that kind of stinks that you have to do it at 8 AM. Does that change your mood, your content, the quality of the streams?

**Suz Hinton:** I'm a little more sleepy, but I'm an early bird anyway; it's just that sometimes I'm hungry, because I didn't' have time to make breakfast, so yeah...

**Jerod Santo:** So what was the overall consensus? Are you okay to move it, are you stuck at 8 AM?

**Suz Hinton:** I think I'm going to move it to 9 AM, and I honestly think that'll be the sweetest spot, because then I have the rest of the Sunday to do whatever I want after the stream... But I have to sort of be very careful about announcing that. And then I think I'm gonna install a panel that uses Javascript to take a timestamp to do the countdown from now on, too; I think that's actually what I've learned from this chat.

**Jerod Santo:** There you go.

**Kevin Ball:** It makes me wonder a little bit about like -- so we in the U.S. and most of the world have this idea of time zones, where we're basically trying to make a particular time mean about the same thing wherever you are... But you can look at a place like China, which as I understand has one time zone for all of China. That makes coordination a lot easier, but then what a particular time means is very different, depending on where you are in the country.

**Suz Hinton:** It's so true. And I know that even during different parts of the year I know that some countries just sort of stop working for weeks at a time as well... So you're usually expecting them to be doing the regular thing, or attending meetings, and all of a sudden they just kind of disappear. Because from a cultural perspective, time is, as you said, a very different thing.

**Jerod Santo:** All this makes me want to move to a remote place in Montana and just become a farmer, or something... \[laughter\] It seems like a simpler life.

**Kevin Ball:** Yeah... I periodically think about leaving the tech industry, and then I realize "I'm in Silicon Valley. If I left the tech industry, I wouldn't be able to afford to live."

**Suz Hinton:** \[00:12:02.10\] That's so true. I feel like every Javascript fail I've had has made me want to become a farmer in Montana. \[laughter\] I definitely relate to that a lot. KBall, you have another one - you were talking about metrics counting.

**Kevin Ball:** Oh, god... So this is not Javascript, but this is sort of a highlight of how bad this stuff can get and lessons learned... Back at one of the -- I started a couple startups years ago, and there was a time period we were trying to get VC funding, so we were fundraising and doing a bunch of stuff... And if you're ever fundraising, you need lots of metrics of how your application is doing, how is it growing, how is this, how is that... And we hadn't totally formalized all of our metrics, partly because we were still learning what people wanted and what was useful.

I was the CTO, so I had direct access to the data, and I'd get a request from my co-founder, sometimes at odd times, like "I need this, because these people need this! Can you compute these metrics?" or whatever... So I was often pulling metrics at random times of day, and as we started to get an idea of what were the metrics that we wanted to record all the time, we would formalize it into -- rather than me going and writing some queries, I would just sort of handle it on the Rails console, or on a SQL console or something, and we'd actually codify in code and put it into a regular report.

At some point I was doing that and discovered that there had been an error in some of the data that I had pulled previously. I'd forgotten one step of filtering, or something like that... So we had reported metrics that were better than our actual metrics, to people that we were raising money from. When something like that happens and you see it and you run the numbers again, and you run the numbers again, and they're all coming out and you can see like "How did that thing happen?!", your gut just comes up into your throat, and all these things...

**Suz Hinton:** Oh, no...

**Kevin Ball:** So what we had to do was essentially send out info like "We were wrong, sorry... These are the corrected numbers." \[laughter\]

**Jerod Santo:** "Sorry about that..."

**Suz Hinton:** Whoops...

**Kevin Ball:** That potentially canned that round of fundraising for us, it did all sort of terrible -- it was a very rough time, along many dimensions. A few different lessons coming from that - one is that your metrics code should be treated like your production code, in that you should never be running it straight from the console without it being reviewed. You should code it, you should have tests, you should have code review... It doesn't matter how early that is, that stuff is important, too.

But yeah, that was probably one of the biggest tech fails I've had.

**Suz Hinton:** It's so embarrassing when you know that you have to tell people to -- you're like "Well, this is one we can't sweep under the rug", so I admire you for having to do that communication afterwards.

**Kevin Ball:** Yeah, it was terrible... But what else are you gonna do? You could try to lie about it, but that's only gonna make things worse.

**Suz Hinton:** Yeah, exactly. We've seen companies that have done that; it's not so good.

**Jerod Santo:** That just made me think of another failure story... The more we talk, the more fails I'm having over here -- go ahead, Nick; I'm just piling them up.

**Nick Nisi:** Do you want me to talk about my fails?

**Suz Hinton:** Yeah, I see a classic one that you'd like to share, which I think is about asynchronous things in loops.

**Nick Nisi:** Yeah, this actually just happened to me not too long ago; just a few months ago, I think... Doing asynchronous things inside of loops doesn't always mean that things are going to run as you would expect them, because if you're not capturing that, then the results of those asynchronous things -- and in my specific case, this was a pull request that I made to CodeSandbox; I was adding in the ability to basically go in and find the type definition files for code if it exists, from unpackage or from wherever it's pulling that data from.

\[00:16:29.27\] The code that was actually doing that was doing that for every single file, and then returning... But because I was doing an async fetch of those files inside of a for loop and not actually capturing the promises that were being returned from that, and then waiting on that, the method would just immediately return, and it would result in the code thinking that it had successfully loaded all of the files, but then they're not actually being there, so then the editor would show you that it has no idea what module you're trying to import, because it can't find it... And it was kind of an intermittent bug for a while. And it took a while, because it's not something that I would have thought, because it's something that's kind of hidden in the new syntactic sugar of the language, with like async/await and all of that. I wasn't thinking about returning the promise from each one of those, so I had to go in and change it to instead of doing a forEach loop, do a map and then return the promise and then await the promise.all of that array of promises before the function would actually return, so that it would hold up the rest of the parsing until everything was actually there.

**Suz Hinton:** That's so tricky, because it seems like one of those times where because it's happening intermittently and the error doesn't seem to point exactly at what's going on - yeah, that must have puzzled you for a while.

**Nick Nisi:** It did. The code is trying to do some caching of those files, so I'm like "Oh, I wonder if I'm caching invalid things and I need to clear that", so I was going through and having to clear that with the dev tools every time, and trying to figure it out... It just led to a lot of headache that just ended up being something really simple.

**Suz Hinton:** Yeah, I was talking about this on Twitter just recently with the online development community - whenever there's a bug, you always overcomplicate it and assume that it's this really complex thing that's happening, whereas a lot of the time it falls back down to a very simple issue.

**Kevin Ball:** Async stuff on the web is the source of so many issues... Especially when you're in a development environment, you're at work or something like that, you're either fetching things from local or over a very fast network, so you get these race conditions where most of the time it will work because your network is fast and everything comes back before you get onto whatever the thing that's gonna depend on it is, even though you're not waiting for it... And then you try to do it someplace with a slower network, or something funky happens and just one comes back slow, or out of order, or what have you, and it's just like "Where did that come from...?!"

**Nick Nisi:** Yeah... That also is a testament to actually testing with the network latency in the dev tools, or just testing on a slow network, not just relying on straight testing local host, because it's not always a true representation of what might actually be in production.

**Suz Hinton:** Jerod, do you wanna tell a story?

**Jerod Santo:** Hm... \[laughter\] This is only JS-related in so far as it's JS Party related... And it was a very recent fail; in fact, it still hurts... But it all ended well, so I'll spoiler it right there. So I was listening to Feross' interview with the Beaker crew recently, and you know when you're listening to the livestream and you're just kind of participating, you're kind of working, you're kind of just dinking around... Well, I was dinking around and I was on the @JSPartyFM Twitter handle, because I tweeted out the live show, or something like that... And I thought "Oh, the description of the show in the Twitter bio is outdated. I'll just go in there and I'll fix that up."

\[00:20:03.28\] Then I noticed that there's some extra fields there, like location, and birth date, and all these things... And I thought "You know what would be cute...?" There was no birth date on the handle, and I thought it'd be kind of cool if we set the birth date of the Twitter handle to the day that the first episode of JS Party aired... Then it would just represent at least how long the show has been around, show a "Born on" date, kind of thing, which was just a couple years back - it was 2017, at the beginning of last year.

So I'm editing the Twitter bio and I set the birth date to sometime in 2017, and then I saved it...

**Suz Hinton:** \[laughs\] I see where this is going.

**Jerod Santo:** Do you know where this is going?

**Suz Hinton:** Yup.

**Jerod Santo:** And Twitter said, "Oh, your account is suspended, because you're too young to use Twitter" and they just locked it out. And I'm sitting there thinking "What the what?!" Now, when they suspend an account, it's not just you can't tweet or you can't sign in... It's 404's. And I'm thinking "That was the dumbest thing I could have possibly done. Trying to be cute... Now this handle is completely gone." It's 404's, you can't mention it etc. This is one of the primary ways that we communicate with our listeners.

The only recourse was I could fill out a form, basically begging Twitter to put the account back into good status. This form was silly, and I had to upload an image of my driver's license to prove that I'm of age... \[laughter\] Because apparently they just expect people to tell the truth about their birthday. Like, if I was five and I wanted a Twitter account, I'd just lie about my age; or if I was 12... I think 13 is the cut-off.

Anyways, you fill out this form, and one thing it says on the form is "This is your only chance to submit this form. We have a high demand for (whatever)... There's a long queue. We'll get back to you... And if we say no, you're done." And I'm sitting there thinking "I don't have the highest set of confidence in Twitter's management and abuse teams right now... There's no chance I'm ever getting this account back." I thought it was just gone... And I'm thinking "Why was I such an idiot to think that this would be funny?"

So I've submitted the form, I uploaded my driver's license... And props to Twitter, because it was restored within 5-6 hours and everything went back to being normal. But it was a total fail; I felt like an idiot. I remember I was driving to the gym after that show, thinking "That was about the stupidest thing I could have done today." It kind of ruined the afternoon.

What was scary a little bit is when they restored the account they didn't restore the followers, so I think we had 700-something followers... And you don't wanna have to rebuild that. It's not a huge number, but it's a start.

I got the e-mail, I'm like "Yes! Account restored!" and I went and checked it, it said zero followers and zero tweets, or something... So I suspect some kind of cache or CDN thing hadn't updated yet, but I thought they just started us over from scratch. Nonetheless, everything was back to normal and a couple hours later the follower count showed up, and everything... All was well, but man, that was sure a fail. It was last week.

**Suz Hinton:** Oh, it was last week?

**Jerod Santo:** Yeah. Well, whenever Feross' show was...

**Kevin Ball:** Right during that episode, right?

**Jerod Santo:** Yeah, right during Thursday Afternoon Feross show, yup.

**Suz Hinton:** \[laughs\] You know what, this is also props to Twitter though. They have their time and date parsing correct.

**Jerod Santo:** Yes. \[laughter\] That's true.

**Kevin Ball:** Well, the year is the easy part, right?

**Suz Hinton:** Yeah, that's true. Usually the year is pretty solid. Are we on the Gregorian Calendar? What calendar do we use in the West?

**Jerod Santo:** Yeah, Gregorian.

**Suz Hinton:** Yeah, so generally, we're not swapping calendar systems just like ways of expressing the order of things. Thanks for sharing that, because I realize that would have felt quite humiliating, so I'm actually like -- yeah, props to you, Jerod, for sharing that. I didn't even know this happened until you told the story.

**Nick Nisi:** Yeah, I didn't realize it was that dire. That's funny.

**Jerod Santo:** \[00:24:07.19\] Yeah, I mean... I did post it into the Changelog Slack, but I played it off as no big deal... But I was definitely sweating bullets, because it's just such a stupid thing to lose an account over... There's just no reason for it. So lesson learned is don't try to be cute with the birth date on your Twitter accounts. They will suspend you, and you may or may not get back on.

**Break:** \[00:24:35.03\]

**Suz Hinton:** So I have a story of when I was first learning Javascript, and I didn't know that different browsers were running different versions of Javascript... So this was pretty early in (I guess) the game. Not super-early - I guess it was 2011. I don't know if anyone else has run into stuff like this, but I believe that in ECMAScript version 3 versus version 5 the parseInt() function is slightly different in what it does implicitly, unless you're super-explicit about what base you want to parse your integer into. Does this sound familiar to anybody?

**Nick Nisi:** Yeah.

**Suz Hinton:** So what I was doing was I ended up implementing a pretty nasty production bug, because I was parsing strings that were numbers into the integers, and I was just assuming that it would do base 10 every single time, and I ended up parsing integers that had a leading zero in front of it. In ES3, which was still being run by certain versions of Internet Explorer at the time, that we were supporting as part of our product, it was doing it into I think base 8 instead... That's what it would do if it discovers a zero in front of the actual rest of the digits at the front.

So we were just like "Why is this number or this whole piece of functionality on the website randomly failing in this one browser?", but it's just not super-apparently obvious, and so it took a couple of developers going through the feature that I had released for them to spot it, which was not spotted at code review either, which was kind of scary...

So yeah, it's amazing how just that one little leading zero and an implicit conversion can be so invisible. That was the first time that I learned the power of destruction that you can have just with a simple thing in Javascript... Because I was very, very new to the language at the time.

**Jerod Santo:** Somewhat related, I think, the second argument to parseInt() is how I learned the word radix, because I had no idea what it meant. \[laughter\] It's like, "What the heck is a radix? I guess I'll just pass 10 every single time."

**Suz Hinton:** Yeah, exactly. So I got really strict about it, and I think that even when I moved on to my next job and we weren't supporting that version of the browser anymore, I remember in my first pull request people were like "You don't have to put the 10, it's okay..." I'm like "No, I do! I don't want this to ever happen again!"

**Jerod Santo:** Yeah. Once bitten...

**Suz Hinton:** Yeah, exactly.

**Kevin Ball:** \[00:28:20.05\] I feel like that type of pedantic little thing is a huge part of the growth from junior developer into more advanced. We were talking earlier on the pre-party call about pattern recognition... But attention to detail is a huge one. It's fascinating how many bugs I end up finding when I'm helping somebody debug, where the answer ended up being "I pedantically checked every single line." \[laughter\]

**Jerod Santo:** Right, and every character... Exactly.

**Kevin Ball:** What do I assume is happening here? Okay, I'm gonna validate every single one of those assumptions, one by one by one. I'm gonna look at exactly what you wrote. Not glance at it... Oh, you used an "a" into the spelling here and an "e" in the spelling there. Random things like that... But that is like a rite of passage. It's discovering that to be in this job, you have to be anal retentive about at least one thing.

**Suz Hinton:** I totally agree. I think that I've been doing HTML and CSS in a professional stance for at least seven or eight years before I landed a job where it was very heavily Javascript-driven stack. So that was very new to me, because previously, I'd been working for agencies creating websites for clients, and clients didn't usually wanna pay for the Javascript bells and whistles. That's how they saw it. So it took a really long time for me to start learning Javascript, and I think that I was just so overconfident, because I was like "Well, I know this HTML and CSS thing. How hard could this Javascript thing be?" I think that's when I realized, "Hey, Suz, you should really sit down and learn this language and stop just spraying lines of code around, thinking that it's fine."

So yeah, I definitely call out that story specifically as that rite of passage, because that's when I started really taking the language a little bit more seriously when it comes to growth and knowing how to wield it in a responsible manner.

**Nick Nisi:** Yeah, I really like that the tooling has gotten better, too. With things like Prettier there's a lot fewer things that you need to be pedantic about, because the tool can do that for you. But how do you feel about the things that the tool still doesn't handle? Do you feel like you're just a jerk for calling that out, or...? Like, if the tool is not catching it, should you care? ...I guess that's where I always fall.

**Suz Hinton:** I think that the gap between what the tool can do and what we do is really why we still have a job... \[laughter\] You know, it's sort of like, okay, so the tool can do all this static analysis, and then we have to do the things where -- you know, machines don't think like humans at all, so it crosses over into us being intentional with what each line actually does, and I think what I'd like to see is for that sort of gap to close a little bit... Because you know, we do still as developers do a lot of drudgery as part of our tasks, because we're just not quite clever enough yet to make the computer understand that intent, if that makes sense.

So there is still a lot of boilerplate that we can't necessarily always automate, and things like that. So yeah, I think that's a really interesting question, but I think that we definitely don't run into those sort of radix passing stuff that we used to, because we've gotten a lot better with our tools.

**Kevin Ball:** \[00:31:54.20\] I think there's two pieces to that question. One is the human factor of "What are the standards that we as a team are going to adopt to make our code consistent and readable and understand...?" and there I feel like the level of pedanticism should be something that you kind of agree on. It's really obnoxious if there's one person who's way more pedantic that everyone else, and in that case, even if you're the person, you should probably dial it back or convince the others why that's an important thing, rather than just continuing to be that guy or that girl.

But then the other piece of it is that computers are actually pretty pedantic... \[laughs\] So some amount of that pedanticism is there because it makes a difference in how the code runs.

**Suz Hinton:** That's true. I know that for those who are more picky on the teams, I've seen people approach this really well, where they will preface every pedantic thing on a pull request with "Oh, this is just a minor knit" or something like that... So it kind of shows like "I'm not attacking your character for this little thing; it's just that i care about this." It's a very nice way of saying "It doesn't matter, but for consistency, I would feel better about this going out if you fix this one thing..."

So I think that that is a nice way of doing it. I definitely learned that from a colleague in my previous job; he was saying "Just a minor knit, but..." It just definitely stops me being so defensive, because that person was pretty much the self-identified pedantic person on the team, so I appreciated that from him.

**Jerod Santo:** Another way of handling that graciously is to start with a compliment before you bring a criticism... And it can be large or small, but it's nice to first acknowledge quality, or something that's good, before you state something that's wrong or incorrect, whether it's a big thing or a small thing. Tell people something good before you bring criticism, and it helps it become better received.

**Nick Nisi:** The compliment sandwich.

**Suz Hinton:** The old feedback sandwich, exactly. So we actually have a community story about a fail that they had in production, that they would like to share... roberttables in our JS Party Slack, so we're actually going to have a listen to that right now.

"*Hey, this is David Poindexter, also known as roberttables out there on the interwebs. I've got a fail story. This is from when I was a very, very new developer, very excited, getting started on a big community open source project in higher education; in the end, the university had flown me out to Maryland to work with their development team. I thought "The first thing I can do as a front-end person is do a little speed evaluation, a little performance thing." I noticed that "Enable GZIP" was recommended. Uh... And I, using a Java thing, Java... and so I enabled GZIP compression for Jetty, which was the server that we used locally. I pushed that through, it got approved, merged into the main branch, and deployed out to our QA servers that our QA team used half the world away... And as it turns out, they were using Tomcat, and I broke their build for an entire day, a team of 150 people, broken for the entire day. This is David Poindexter and that's my fail."*

**Jerod Santo:** \[laughs\] Oh, no...

**Suz Hinton:** Ouch...!

**Kevin Ball:** So 150 people - I'm gonna guess India, or somewhere over there... Let's estimate - $20/hour... How much did he cost...? \[laughter\]

**Suz Hinton:** When it's your peers too, when you broke it for all of your colleagues, it actually feels much closer to home than customers. Even though you are writing software at the end of the day for customers, you feel the wrath of your colleagues, because they are the ones that are hitting you up directly. There is no shield in between you and your peers as well, and you're like "I am so sorry..."

**Kevin Ball:** \[00:35:58.14\] I think that is one of the really important things about the trends that I've seen recently, of people sharing their failures and what we're doing today, but you know, I've seen a lot of folks on Twitter being like "Hey, I've been doing this for 10 years or 20 years, and I did this stupid thing and it's still broke", because it normalizes it... We're human. We all f up. This stuff happens, but especially if you're new to the industry, or new to a company, or you haven't had this stuff before... It can be so crushing, where you think "Should I be doing this at all?" We all do that.

I shared my story. It probably lost us hundreds of thousands of dollars in fundraising; I'm not gonna calculate the cost of David's thing right now, but that's lots of money... It happens, it's part of this business, and we need to accept that.

**Jerod Santo:** Absolutely.

**Suz Hinton:** Yeah, absolutely. And I think that what hits newcomers especially is they'll ask someone who's more senior on the team for help, and they'll just look over their shoulder and point out the issue immediately, and what they think at first is "That person is so smart. They saw it immediately, and I'm never gonna be like that, and that's humiliating that they were able to see it and I wasn't...", but what they're not realizing is that happens to all of us, even at the senior level, because we end up with biases about our confidence; we're like "Oh yeah, this is my code; it's good code. It can't possibly be this silly typo that I did", and they don't understand how easy it is to spot something in someone else's code, looking over someone's shoulder, as opposed to looking for it in your own code.

I'm really happy that we're talking about this particular topic on this episode, because I'm particularly passionate about seniors being vulnerable and sharing their stories, and also just seeing that they still do it to this day, as has been mentioned previously by other panelists.

**Kevin Ball:** Plus, the reason that I see your error so quickly is because I made it, too.

**Jerod Santo:** Right, 17 times in a row, and now I've learned better

**Kevin Ball:** Exactly. We have these pattern libraries that we've built up by beating our heads against the wall so many times, and after it happens the first time, you're like "Okay, whatever." After it happens the 5th time, you start to notice it. By the time it's 17 or 18 times, now every time you run into a set of something that's not working, you check for that.

**Suz Hinton:** It's an extremely efficient neural network in your brain, going "Okay, let's try these paths first." \[laughter\]

**Nick Nisi:** I used to go teach classes on various Javascript topics, and right before one class I made a change to the workshop tool that I was using; I basically added in support for in-browser transpilation of TypeScript, so that we could run examples and see those immediately. But I didn't test it against all of the thousand of existing examples, I didn't test it against all 1,000 of them, and I broke several of them. This was a weeklong workshop, and every morning I was coming back in and being like "Okay, you have a new ZIP of the materials you can download, that fixes this, and this, and this..."

That ended up being one of the best workshops that I taught, because I took the time to explain why it broke, and we got to dive into code and they got to see me fail quite a bit. It was totally embarrassing for me and I hated going back to the hotel every night and doing that, but it ended up being one of the best workshops I've ever taught.

**Suz Hinton:** That is awesome. Yeah, I think that sometimes when people feel intimidated by you, even just being able to have more of a collaborative experience like that makes them feel even more confident about whether or not they'll be able to learn your material, too... So I actually think that's almost like an excellent icebreaker that makes people more emotionally invested in your course; that's really cool... But I'm sure, very painful for you.

**Jerod Santo:** Well, I could tell the one about how I left a password backdoor on the production, customers of mine, for six months, but... I don't know. That one hits pretty close to home. Maybe we should just read some stories from around the community... Or do you guys wanna hear that terrible tale?

**Suz Hinton:** \[00:40:04.25\] That is such a tease, and everyone always wants to know about the password backdoor. \[laughter\]

**Jerod Santo:** Okay, I'll keep it really short, if possible; I don't wanna give too many details. A long-time customer - I'm a contractor, I've been doing contract development for a decade(ish)... And a long-time customer, old Ruby on Rails application, so old and never heeding my advice to upgrade either Ruby or Rails, still on the 1.x rails branch...

**Kevin Ball:** Oh... I'm sorry...

**Jerod Santo:** Yes, very old. And at a point now where it's like basically a legacy maintenance mode, like "Keep it running, keep the bugs out..." It's so brittle and old that they just can't add features, so there's gonna have to be a rewrite at some point. But we did add a feature earlier this year, and I had a new laptop, and so my development environment was broken, and I had to get set back up for developing this application. Well, the Ruby version is so old, the OpenSSL version that that Ruby relies upon is no longer a thing, you can't even get an old download... I would spend all this time trying to get set back up, and everything worked just fine, except I could do password auth because for some reason the cryptographic functions just couldn't execute; it would segfault every time I'd try to log in to develop.

So I basically short-circuited the password prompt in certain circumstances in development only, and I remember putting a little comment above that says like "Uncomment this before deploying", or something like that...

**Suz Hinton:** \[laughs\] Oh, so classic...

**Jerod Santo:** I know...

**Kevin Ball:** Rather than checking the actual environment... ? Which actually I don't remember if it was easy to get to in Rails 1.whatever.

**Jerod Santo:** Yeah, you can't do like Rails.env.development? back then. I was kind of at my wits' end trying to get the thing running, so I could do what they wanted me to do, which was add a little feature... So all this time spent wasted on just getting set up, that I was like "I'm just going to by-pass it and then I'm going to fix it before I deploy..." And those were my famous last words.

So I by-passed it and then I deployed it, and then I fixed it six months later, when we realized that this was still alive. To my credit, it's not live, like completely open to the world; there was a very specific set of circumstances, it was limited to certain IP addresses. It was definitely a security hole, and we finally had somebody fall upon it and realize that they could sign in with any password... And right when my customer e-mailed me - I was actually on vacation - I knew immediately. It was one of these things where the memory just flush it back into my head. I just knew exactly what it was, right when the e-mail came in... And I thought, "This is why I have general liability insurance for my business, because this is really bad." And I don't feel like I was being negligent, but it was like an honest mistake that happened because of a terrible circumstance... But I did it, and that's bad. If there's issues, that's on me.

I thought they were gonna hate me and be super angry and wanna sue me... So I fixed it as fast as I could, e-mailed them back, apologized 100 times, and they were just super-happy that I fixed it. They were just like "Thanks! Awesome, you're the best! Have a great vacation!"

**Suz Hinton:** Wow. That's a great ending.

**Jerod Santo:** So I have great customers.

**Suz Hinton:** Yeah, that is a great customer.

**Kevin Ball:** That's the same thing where, like, your stomach jumps up into your throat, where you're like "Oh, my god..."

**Jerod Santo:** Oh, my goodness. I felt like the worst person alive. I couldn't believe that I did that, and I was just thankful that everything worked out okay.

**Suz Hinton:** Thanks for sharing that story. I feel like yours have been some of the scarier ones, Jerod... \[laughter\] Where you've had that moment, and you're like, "Oh, no...!"

**Jerod Santo:** \[00:43:51.25\] Yeah... Yeah, I guess they have been. Those are both recent as well, and like Kball said, talking about the experience - we all still do it; this has been my job for my entire career, and I made that mistake in April or March of 2018. This was not like the battle days, when I used to stink at this. This was very, very recent. So mistakes happen, and that's the issue with leverage... I mean, this is a concept that I bring up a lot and I think about a lot - the power of leverage and what we have as software developers - this is why it's kind of intimidating, because... Think about a popular open source project - the Linux Kernel, Npm... Think about something where you can write a little bit of code and substantially improve the lives of millions of people when that code gets deployed around the world. That's an amazing amount of leverage. The time spent versus the value produced is outstanding, and that's why it's so cool.

On the other side, little mistakes are also leveraged, right? So one little mistake, Kball, can affect an entire business' future, or 150 people in the business... It's intimidating, for sure.

**Suz Hinton:** And the multiplier effect is definitely very real.

**Break:** \[00:45:14.04\]

**Suz Hinton:** So we're gonna segue from failure to have something practical to maybe avoid future failures, and we're gonna be talking about lessons and advice from yourself. We have done this in previous episodes, but this time we wanted to focus on something slightly different... So instead of saying if you could give advice to your past self, going back in time when you were first starting out, this time we want the panelists to imagine that they're getting started today in the world of development, in the world of Javascript development specifically...

You know, given that things might have changed since you first got into things, and things have kind of moved along and are very different these days, what kind of advice would you give yourself? Would you do things differently if you were learning Javascript this week, instead of X amount of years ago?

I can go first, just to kind of set everything up... I would probably tell myself -- and just for background, I first started professionally developing about 13 years ago, and then I started learning Javascript properly after that radix incident in 2011... So I haven't actually been doing Javascript as long as other people have, but it has been a good seven years now, I guess.

\[00:47:57.23\] So the things that I would tell to somebody or myself if I was starting right now would be - college is now too expensive, in my opinion; I definitely know that it was more affordable to myself when I was living in Australia at the time... But learning some of the things that you would normally learn in college I think are useful for being able to understand some of the really complex stacks that you set up for yourself these days with Javascript and single-page applications, things like that.

I think that our responsibilities as a front-end developer have gotten a lot more complex, and it was definitely not like that when I was first starting out. I had the advantage of already being in the professional industry and being able to sort of quickly ramp up and learn from colleagues with already some kind of background knowledge. So I would recommend learning data structures and algorithms, as boring as that sounds; I think that once you've learned some of them, especially as you're learning Javascript, you're gonna see some of those overlaps in different things that you're setting up, such as in Redux if you're using React, or being able to figure out "Okay, I have to process this piece of data lots and lots of times. What's going to not clog up the UI thread?" and things like that.

I think that data structures and algorithms can offer you a lot of insights into starting to instinctually write performant things, or starting to instinctually understand maybe how some of the popular libraries you use work under the surface. I've found that since filling in those gaps for me personally, I've actually been able to just faster identify things, and it almost feels like you start getting a sixth sense.

So that's something that I would recommend; even though it sounds super-boring, I found it super-helpful. And also just learn how to comfortably pair-program with mentors, because when you're first starting out, you want to be able to see the kind of challenges people run into every day and how they solve those problems. And if you're lacking that experience at first, it could be really helpful to watch how other people solve problems. I think that I was too nervous to do that when I was first learning Javascript, and I think that these days, because of how many different things you have to learn, I think it's better to fast-forward your learning by not just doing things by yourself. So definitely trying to find people to teach you things would also be my advice.

**Jerod Santo:** Good stuff. Now, I'm not sure what I'm gonna say now, Suz. You got all the good ones.

**Suz Hinton:** No, I did wanna say more, but I left it out, so... \[laughter\] There are other stuff that you can do... Sorry.

**Jerod Santo:** Okay, thanks.

**Nick Nisi:** Yeah, and I would agree with all of yours, actually. I did go to college for this, and I feel like I learned how to learn on my own a little bit on it, but it's not something that I couldn't have done outside of college. But going into a real job, I totally didn't -- like, nothing from college really carried over to that. So I would agree with that.

For mine, specifically with Javascript and learning it today, I think that you should start with ES2015 syntax, and go from there. There's a lot of syntactic sugar and it is very important to know what is happening with that, what it's covering up... But I don't think that it's immediately important for you to do that.

For example, you can use classes today, you can use the class syntax without having to understand everything about prototypes, but definitely learn that later. But getting up to speed with that, you don't have to go backwards and start with ES5 and going on from there.

And don't worry about builds yet. Don't get into the mess of configuring Webpack or thinking about that. Just look at the code -- and I know that that can be tricky, because finding code that can run without needing a build step can be difficult... But stick with the fundamentals of the language before going into a framework or going into code that absolutely needs to be built.

**Suz Hinton:** \[00:52:03.26\] You know what's so interesting about that advice is that back in the day we were saying that you should learn the difference between what jQuery is doing and just native Javascript is doing... Would you say that that is a similar parallel these days with things like Webpack, but also like Javascript frameworks and stuff? Just, like, staying with ES2015, so that you can recognize the other abstractions?

**Nick Nisi:** I think so, yeah. It's difficult to -- I don't know, I'm trying to think of how I would handle this if I was trying to get into this, and going through all of this and being like "Oh, well, this is Javascript... Well, why doesn't it run here? Why doesn't it run in Node? What's this Webpack thing?" I think that it's good to learn all of that, but I'm still wondering about navigating that and knowing what can be -- like, if something fails, why did it fail? Maybe it's because it's not supported in the browser or in the version of Node that you're trying to run it in, and being able to quickly understand that.

I think that we're kind of in a bind with that kind of understanding for new people right now, coming in... But I don't know. What are your thoughts?

**Kevin Ball:** I think one thing to be a little cautious of - and this is something that I find myself falling into as well - is it's really easy once you can do a lot of things, to say "Gosh, go back and focus on the fundamentals, and build it up." But if you start from just the fundamentals, a lot of times it feels like forever, until you get to something interesting.

One of the most important things I think to sustaining learning is being excited about what you're able to do, and sort of maintaining that excitement and energy.

So I think I would actually almost say start with one of these frameworks, but start with one where you get batteries included, where you can get to something that's really cool, really quickly, but then dive into the fundamentals of each piece of that. So you start with something that lets you get to something really neat and interesting, but don't stop there. Don't stop and say "Okay, I've got Vue and it gives me everything out of the box, so all I care about is Vue." You say "Okay, I've got Vue, and it gave me everything I cared about... Now let's dive into one piece of that. How does the router work? What if I changed that around? Or let's dive into what the heck is actually going on when we're setting up these objects, and the callbacks, and all these various other things."

As somebody who didn't major in CS because the first CS class I took bored the hell out of me, I think it's really important that we don't take our expert's view and say "Gosh, I wish I'd worked on fundamentals", but instead look back to like -- when I'm just starting in this, I want something that's actually gonna be really cool right away, that's gonna show me the power of what's possible here.

**Suz Hinton:** I think someone who does a really good job of teaching Javascript fundamentals but also trying to keep it fun is Wes Bos; he has his JavaScript 30 series, and I think that you build these things that give you that instant gratification, but you are actually kind of learning the language itself, and I think that that is probably a really good mix to have. That can be very difficult to find on your own, but I think that's a really good point, Kball.

**Nick Nisi:** Yeah, I agree with that. And that's also a good point that -- like, in a lot of those, the development environment is already kind of set up for you, and so I guess if you can abstract away from that and not have to think about that too much, then that's not too big of a deal... And I know that with tools like Create React app and others, that makes it really easy to at least get started.

**Kevin Ball:** Yeah. I learned about web development -- I had done other stuff, but I learned about web development from Ruby on Rails. I started with Rails, and then moved back into, like "Wait, how does this Ruby stuff actually work? Which parts of this are Rails, and which parts of this are Ruby?" But the thing I really appreciated about that is that they gave you everything, but then they also worked really hard on making things swappable. So you could start with this full stack experience, but then if you really wanted to change something out and really understand it, really optimize it, you could go down and do that.

\[00:56:03.26\] Things like Create React app, things like the view templates - these sorts of things are way better for beginners to start from, where you have something that's gonna work, so long as you can then, as you advance your knowledge, focus on different pieces and swap those things out... Because if it takes forever to get to something working, most people will bail.

**Jerod Santo:** I would definitely echo that, Kball. I think when we did advice to yourself the first time, that was definitely my advice - get a real project. So I would just add my amen to your statement there. For me personally, that's what pushed me over the edge - having something that I wanted to see exist, and learning enough to get that into the world, and then kind of rinse and repeating. Sometimes that was my own project, sometimes it was client work, but it really aids in learning, because you kind of have to learn, you don't really have a choice; it's like, "I need this thing to exist", so I think that's powerful.

So I definitely would echo that, and I also am in agreement with pretty much everything you all have been saying. I will point to a very specific resource that I would probably point myself to today, which didn't exist back when I was learning this, which is freeCodeCamp. FreeCodeCamp has thousands of projects and a huge curriculum, it's all free, it's all in one place, and they have like a trail map. So if you're brand new to coding, they recommend you start at the beginning, but they even have certifications for certain things, which... You know, anybody can make up a certification, but this is pretty intensive training. The responsive web design certification requires at least 300 hours of effort, and so it's not something to balk at.

They have the fundamentals from HTML, CSS and so on, all the way up to front-end libraries, data visualization... There's just a huge catalog, and they walk you through from zero, really, to functional, which I think is really powerful. So it's free, it's all in one place, and if you don't have a project that you wanna see exist, but you still wanna learn... I agree with Suz that Wes Bos has great resources as well; freeCodeCamp is definitely another one to check out.

**Kevin Ball:** I wanna jump in on that project, though... Find a project, seriously. Because if you just go through tutorials and courses, you will find yourself bounded by the ways that the people who created those tutorials and courses are thinking about things... Whereas if you have a project, it pushes you into the edge conditions and you're gonna have to jump across and interpolate and put things together. But you don't have to have a perfect project. Pick something, don't wait for something perfect.

A metaphor I always use is you can't steer a boat that isn't moving. Try something, start moving forward, and if it turns out that that project is crap, pick a different project; but at least you got partway along and you were learning as you went.

If you're just doing tutorials and courses, you're gonna really struggle when you start to hit real stuff, because there will be something that you thought you got, but it only worked because it was exactly the way the tutorial person had set it up.

**Suz Hinton:** I definitely agree with that advice. I think the first project that I did, because I was personally interested in it, was what made me fundamentally really understand some parts of Javascript that I hadn't formally really god. There was a bunch of stuff that I would copy because experts were doing it, but I didn't really feel it in my bones as to like why that was set up that way.

The secret for me was picking something that I was really excited about as the subject material of the project, because I was not so excited about learning Javascript, if that makes sense... So I picked something hardware-related and I was like, data sheets, and screens, and pixels and things, and having to figure out how to send that to the device...! They were exciting problems I wanted to solve, and I just decided to try and solve those problems specifically in the language I was trying to get better at.

\[01:00:02.04\] My first Node.js library was, you know, doing a hardware thing, because that was something that I was way more excited about, and Javascript was just a side effect of "Well, maybe other people will find some use in it." That library ended up helping me find my next job, that I actually really enjoy doing, because it was a way for me to show "Well, I understand certain concepts", and so that's what helped me sort of get through that first interview filter, if that makes sense.

So I'm still very affectionate about that library, and it still is up there on Npm, because it has a lot of things that even now I look at it and I know that "Oh, I've learned even more since then, so I would approach this project in a super-different way." I think that having a topic area that doesn't have to be just about learning the Javascript can really motivate you to keep with the project.

**Kevin Ball:** Well, since we're pausing there, let me jump in with another couple of recommendations... One would be pick one area or one frameworks or something and go deep on it. I think early on I sort of jumped around a lot; I see a lot of folks who are like, "There's so much... How do I pick? What am I gonna do? I've gotta learn Vue and React and Angular, and this, and that, and all these things...", and you will get so much further if you pick one of those and go deep. The thing that is not always visible when you're getting started is how much getting that understanding will actually help you learn those other things later.

If you go and you really deeply understand Vue, or you really deeply understand... Let's start with Vue - then when you go to pick up React sometime later, you're gonna learn it so much faster than if you had tried to do those both at the same time, just at a beginner level.

**Jerod Santo:** Can't you get stuck on the pick one...? A lot of people, the questions that you see around are like "Which one should I pick?" and it's like, "Well, just get started." What do you tell people in that situation?

**Kevin Ball:** You can't steer a boat unless it's moving...

**Jerod Santo:** Right, but there's the paradox of choice - there's a lot of choices, they're comparable, a lot of them seem really good, there's hype, there's this and that, and it's like "Oh, what do I do?" You don't wanna pick the wrong thing, and then you've gone really deep on something that's irrelevant in a year. So I think that's the paradox, or what gets a lot of people stuck. So what do you say to that question?

**Kevin Ball:** I was trying to think about that, and I actually wrote up how I decide things, and tried to codify it a little bit... So I created this little framework for myself that I blogged about, called "The Three Mo's", which are money, motivation and momentum. So when I'm trying to decide what to learn, I'll sort of try to evaluate it in those lenses. Money is - is there somebody who's literally gonna pay me if I know this thing, or pay me to learn it? A lot of times as a contractor you can get a job where maybe you're focused on one piece, but they have another part of their system and if you learn that, you have more work. That's a very promising way to do it. If you're not a contractor and you're just getting into the industry, maybe it's looking real quick and seeing "Where are the most jobs in this? Where are people actually hiring people with this?" Right now if you're looking at front-end stuff, there's so many React jobs. Money would point to React, if you don't have anything else.

The other two pieces are momentum - what is learning this going to set me up for? For example, if you are just getting into the industry and you're trying to decide -- maybe you're starting on the server side and you're like "Should I learn Ruby or should I learn Node?", if you're also interested in front-end, that would actually lead you towards doing Node, because it sets you up better for learning stuff on the front-end than Ruby, which is gonna be somewhat different. So evaluating things like "What does this set me up for?" and if you don't know that, that's an easy thing that you can ask folks like "Hey, I'm trying to go here, but I'm here right now... What's gonna help set me up in that direction?" That's an easy question to ask.

Then the last one was motivation, like "Is this something that's particularly exciting to me?" A lot of people right now are particularly excited about Vue, for whatever reason. So trying to look at things in that framework and using that to help guide what I learn is kind of what I recommend.

**Jerod Santo:** That's really good advice. I thought you were just gonna name a framework and we would be done, but that's really good advice.

**Suz Hinton:** \[laughs\] I don't think it's ever as simple as naming a framework.

**Jerod Santo:** See, actually he did name a framework, but it's his own framework, called The Three Mo's. Now I've gotta go learn the Three Mo's? Come on, Kball, this is too hard.

**Kevin Ball:** I know, right?

**Suz Hinton:** I wanted to thank everyone for sharing all of their stories today; a special shout-out to roberttables, David Poindexter  for calling in and sharing his. I know that takes a lot of guts, so we definitely very much appreciate it.

Thanks for listening to JS Party, we hope that you've enjoyed it as much as we did producing it, and we will catch you next time.
