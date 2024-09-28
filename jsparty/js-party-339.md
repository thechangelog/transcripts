**Nick Nisi:** Ahoy-hoy. Welcome to another exciting JS Party. I'm your host this week, Nick Nisi, and I am very excited to welcome back a friend of the show, a frequent visitor of the show, Josh Goldberg. Josh, how's it going?

**Josh Goldberg:** It's going great. I'm always happy to be here, Nick. How are you doing?

**Nick Nisi:** I'm doing fantastic, and I'm really excited to be talking to you today. And with Josh, we also have an exciting new guest to the show, and that is Dimitri Mitropoulos. Dimitri, how's it going?

**Dimitri Mitropoulos:** Great. Exciting reveal here - for those listening, you won't be able to see this, but I wear a Party Parrot shirt in honor of JS Party.

**Nick Nisi:** Nice.

**Dimitri Mitropoulos:** Here we go.

**Nick Nisi:** Nice. I love that. Cult of the Party Parrot...

**Dimitri Mitropoulos:** Yeah, it's my favorite.

**Nick Nisi:** Yeah. I miss Slack. Not really... \[laughs\] So, Dimitri, why don't you tell us a little bit about yourself?

**Dimitri Mitropoulos:** Sure. Yeah, I'm a developer, I live in Michigan. I run a -- I'm one of the people running a podcast... Well, many things. A YouTube channel, we do some podcast stuff called Michigan TypeScript... And as part of that, sometimes we have these local events and we bring people over to Michigan to speak to us locally here at a meetup that we have... And one of those people was Josh. Josh is well known for doing TypeScript ESLint work, and many other open source things.

So I picked up Josh from the airport, and 15 minutes into the car ride to Ann Arbor from the airport we started talking about how we both wish there was a tooling conference, that we could have something to go to as attendees to revel in our passion of software tooling, and dev tools, and web tooling, and stuff like that.

And yeah, now, fast-forward to today, Josh and I are starting a conference together called SquiggleConf, which is, as the name implies, for the people who make squiggles happen in your editor, and linting, and tooling, and performance measurement, and all kinds of things. It's a wide topic, actually. CLIs, debugging, all that kind of stuff.

**Nick Nisi:** That is such a unique and fun name. I love it. I've never called them squiggles, for some reason. I guess my editor doesn't even show squiggles, so that's probably why... But I love that. I need to configure my editor to show squiggles.

**Dimitri Mitropoulos:** Yes.

**Nick Nisi:** Yeah, so that's exciting. SquiggleConf - that's a big topic that we're here to talk about today, and that is the conference that you two are putting on. And dev tooling - yeah, that is... I mean, obviously, when I think of dev tooling and TypeScript, I think of you, Josh. Just to refresh our users' memories on you -- our users; our audience's memories on you... It's Monday morning, folks... You are the maintainer of TypeScript ESLint. You've also written a book on TypeScript, and - well, why don't you continue your intro?

**Josh Goldberg:** Yeah, I'm one of the lead maintainers on TypeScript ESLint, I wrote "Learning TypeScript", the O'Reilly book... I'm just kind of generally floating around the TypeScript community. I give a lot of conference talks, and workshops, and such on it. I'm also now one of the committers on ESLint, and one of your co-hosts now shares with me the joy of having maintained Mocha. I'm now one of the maintainers on Mocha. Shout-out, b0neskull Chris.

So yeah, it's not something we get to do very often, go to a conference and have it be about web dev tooling. Normally it's some kind of side thing, like there's a React Conference, and then one talk on React's tooling. Or a general conference, and then a couple of talks on JavaScript. So it's really nice to be able to just really focus in on squigglies, perf tooling, dev tools, stuff like that.

**Nick Nisi:** Yeah, I love that. It's so nice having a conference dedicated to that, because when I think of dev tooling, that is the stuff that I interact with every day, and it's the stuff that can make things really fun or really terrible, or both. And being able to solve problems like that... And it always does feel like -- it's almost like a taboo thing to talk about, or to focus on really, because it's like "Oh, that's not really like solving your problems." Like, it's a nice thing to have, but more -- you've gotta ship stuff, and you're not shipping stuff when you're tweaking your dev tooling. But I love just tweaking my dev tooling.

**Josh Goldberg:** \[00:08:09.04\] 2Yeah. This always irritates me. I see these posts on Twitter or whatnot, about "Why do you care about this? It's not actually shipped to the \[unintelligible 00:08:15.19\] Like, it's a poor craftsperson who doesn't care about their tools. This stuff is actually really useful and relevant, and it makes you go faster, and it's a really positive investment in your time to put a modicum of effort into your dev tooling.

**Dimitri Mitropoulos:** I have like an emotional, fuzzy reason that I like doing dev tools. I've realized recently I've been basically working at dev tools companies exclusively for years now, and I didn't even know that I was doing that until - looking back, I'm like "Oh wait, that's interesting. They're all dev tools things I've worked on."

I think the reason that I like or I'm drawn to it is because I feel like it's a matrix multiplication of my efforts. Like, for every hour that I spend making something faster that's a dev tool, all developers then have a faster experience, or a better experience doing whatever it is they do at their companies... And I feel like it's a -- well, I said it, a multiple matrix multiplication type of situation where I can make a bigger impact, and do more than I would be able to do it at just a particular company, delivering on a particular initiative.

**Nick Nisi:** Yeah, for sure. And it's just interesting to me, because it's so easy for me to put myself in the shoes of a user of dev tools, because that's me. I'm the demographic for that. Whereas working on other tools, it's like - well, I'm an advertiser, or I'm a salesperson, or an HR person, and I need to use this tool to get some job done. It's harder for me to get into that and be as excited about it as I am with dev tools, because it's literally solving the problems for me, which is always like where the passion comes from.

**Josh Goldberg:** For sure.

**Nick Nisi:** Yeah, so you mentioned, Dimitri, that this kind of came about from the meetup where Josh came to talk at Michigan TypeScript. How did that exchange go? Did you just like walk up and say "Hey, do you want to do a conference?

**Dimitri Mitropoulos:** Well, I mean, there were a few like layers in between. I think it was also -- it's funny, when people ask me how the conference is going, usually I tell them how much I like Josh, instead of telling them how the conference is going... Because the act of organizing something like this is very personal, and it's a lot of long night hours... We both have things we're doing during the day, so it's a lot of like meeting at 8 p.m. and stuff. On every weekend, we basically are meeting every day almost.

So the relationship you have with the person you're working with on something like that is so important. And so I think there -- we didn't like necessarily decide that we were going to do something, like "Oh yeah, let's do it together" in the first 15 minutes of meeting. But it was an interesting coinkydink that it was on our minds, and we both were wishing that there was something like this.

I mean, after all, when you go to a conference and you are a passionate DevTools enthusiast, usually the meat and juice or whatever of the conference that you're really excited about is like some side channel off in the corner thing. Like, you might go to a React conference, and there's like one talk about React tooling or something that is really applicable to what you care about... And that's the same for language conferences -- not just library conferences like React, but it's the same for language conferences as well. You might go -- like, I'm going to RustConf, because I work on Rust as well... I'm going to RustConf tomorrow... And yeah, there's lots of different topics, but it's not like Rust tooling is the purpose of the conference. The Rust language and many things around it is the purpose of the conference.

So what we really wanted was a cross-language conference where people who, for example, make JavaScript tooling, but in Go, or Zig, or Rust, or other languages - they don't really have a home for what it is that they do. There's no conference for them. They just get kind of chucked into these other little corners, and we wanted to create that space, that platform.

**Nick Nisi:** \[00:11:55.24\] Yeah, that's really interesting to think about too, because - yeah, a lot of these tools... Like, the tooling around the web is moving out of JavaScript, for performance reasons primarily, but other reasons as well. And there's a lot of really great tooling... And embracing the right tool for the right job is awesome. But it can be intimidating to -- or probably if you're one of the developers on one of these tools that's in Rust or Zig or whatever, and you're like "Oh, I want to talk about this", but yeah, finding the right conference to do that at can be difficult... Because you could go to a conference that has JavaScript in the name of it, and you're going to go there and talk about Rust - like, are people going to actually go to your talk?

**Dimitri Mitropoulos:** Yeah. And then the same thing, if you have a Rust conference, "Oh, I'm a Rust developer. Look at me", and then you're going to talk about puny little JavaScript over here. No one wants to hear that, right? I'm joking, but you know, there's this social dynamic that -- you know, changing it. But to answer your question - sorry - about the meetup... I mean, it's interesting, because I used to be participating in -- I mean, I was a member of different meetups in the state here in Michigan before the pandemic... And there was one specifically called Southeast Michigan JavaScript, that was really pretty well known, I think, and had like 100 to 150 attendees basically every month. And then all those people, 60 of those people get up and go to the bar together to hang out for a couple hours afterwards, and talk, and stuff. So it was a pretty lively experience.

I ran a React meetup in Detroit during that time. So I wasn't involved with SemJS, but... Michigan TypeScript was a combined force with the people who were running SemJS before. And so we opened it back up after the pandemic, and it went from - you know, for years and years of 100 people showing up, 80 people showing up every time, to like seven, 12, 15 on a good day... I mean, it was really -- the difference was really stark. So it makes you think about what it is that gets somebody to come to something like this, and trying to provide value... People have different motivations now than they did before - and we can get into that - but things are different now. And I think a reset button was hit somewhere in the universe, and whatever we reset to is different than what it was. Palpably different.

**Nick Nisi:** I agree. Yeah. The pandemic changed it a lot, and attendance at lots of things feels way different than it did before. And tying that back to the conference, or just conferences in general - how do you feel the conference scene has been? To me, it feels like it's picking up again, for sure. With conferences like this, other conferences that I've gone to this year... They're really starting to fill out with attendees, and really great content. The reason for going is back, for sure. But that's my opinion. What's yours?

**Josh Goldberg:** Yeah, I definitely agree. I've been to a lot -- actually, I only started doing international conference travel post pandemic, and it's especially the last year. We see a lot more people than just after the year after COVID peak... We're seeing a lot more sponsorships come in, including for SquiggleConf. We were pleasantly surprised that there were companies willing to put money towards advertising, and working with people at conferences.

The one thing that I think has been lagging behind the others has been corporate budgets for conferences. A lot of companies are still tightening the purse, not really putting as much into the morale, or learning, or et cetera budgets. Which is, I think, kind of a pity, and it's a sign of the job market being less friendly towards employees and more friendly towards employers... Which I think is starting to ease up a little, but it's really hard to say.

**Nick Nisi:** Yeah, interesting. I hope you're right.

**Dimitri Mitropoulos:** We hope so, too.

**Nick Nisi:** So with SquiggleConf, what do you hope your audience gets out of going to the conference?

**Josh Goldberg:** We want to give them two things, at the very least. I'm sure Dimitri will have more... At the very least, we want to give them bang for their buck. You go here, you spend whatever the ticket cost is, whatever the hours you spend, and then you come back and very quickly, within a quarter, your team is more than that more effective or productive as a result. You come here, you learn about the accessibility tree from one of our speakers, and then you have fewer accessibility bugs and a more accessible product. Great, wonderful.

\[00:16:12.23\] We also just want to generally get people excited about this stuff. Like we were saying earlier, everyone who is a developer has some connection to DevTools. At the very least, they're using this stuff. So we want to kind of get that more in the forefront; make people really think more about it. There's a lot of talk online - you know, Next.js this, Remix that, or Vite versus WebPack or whatnot. But not a lot of developers really sticking their hands into the weeds and pulling stuff up and seeing what does or doesn't interest them. So we're hoping for more of that.

**Dimitri Mitropoulos:** So it's interesting what Josh was saying... It was reminding me of the CFP process, because when you have the very visceral experience of looking through all of these different submissions, and we had -- for a first-time conference, I think we did really well. We had 101 people submit 157 submissions. And the question you start asking yourself over and over again is "But why is this going to be valuable to somebody who may not care about your tool?"

So for example, we have Robbie Russell coming to talk about -- how do you say it, Oh My Zeesh? I've heard like six different ways. Oh My Zosh - actually, I heard somebody advocate for Oh My Zosh. But the ZSH tool, Oh My ZSH. So Robbie's coming to talk about his 15-year journey with that very popular, very well-loved and well-known tool. And even if you don't use ZSH, even if you don't care about that stuff, there's so much to learn from somebody who's gonna share their battle stories about the gains that they've had over a successful project like that. So from a conference organization standpoint, you look at talks like that and you kind of can see the value.

But for most talks, if it's just like "I'm gonna tell you about this thing that my company does", the very first question we immediately bring to our minds is "Well, what is this going to do for somebody who doesn't deploy to whatever your cloud platform is of your company, or doesn't use your tool? Are they still gonna be able to get something out of it?" And that's really where the rubber meets the road on providing a conference experience. So Josh mentioned the accessibility tree. We have Karina talking about the accessibility tree, and it's a topic that most people have never really looked at, or they haven't been exposed to... And so we spend a lot of time trying to figure out, how can we expose people to things that they're gonna go "Oh, I've seen this before. Oh, I know what this is"? Next time they come across it, they have skills now that they didn't have in the first place, that they're gonna walk away with from the conference.

**Nick Nisi:** Yeah, that's fantastic. And really -- I don't know, thinking about Robbie Russell specifically, I've been a ZSH user for probably 15 years. Yeah, 15 years exactly. And Oh My ZSH was coming out right when I did that, started getting into it.

I specifically didn't use it, because I wanted to force myself to dig in and learn... And I've never used it, but I respect the hell out of Robbie Russell, and the work that he's put into it...

**Dimitri Mitropoulos:** Right. Exactly.

**Nick Nisi:** ...and I am so excited to hear him talk about it. Yeah, it's just -- it's so fun being able to dig into this. And another thing that I think about with this kind of stuff, or just talking to like non-developers, who still work at computers, do nine to five jobs that isn't specifically programming... If you teach them -- in a lot of cases if you can teach them a little bit of programming, or a little bit of like scripting here and there, to automate little tiny pieces of their day, that's like a superpower in those jobs. And in a lot of ways, I feel like the equivalent for us is being like the expert on these dev tools, and knowing how to implement them, knowing when to implement them, and how to solve problems with them. That's what 10x-es us, is being able to do all of that.

**Josh Goldberg:** Yeah, it's the funniest thing. The industry goes through cycles of opinions on the "What is a 10x developer?" subject. The idea of a 10x developer as someone who is directly producing more stuff than 10 other people - a little problematic. But the idea of someone who makes 10 people around them that much more effective - that is wholly within our grasp. That's what web platform tasks and initiatives and teams are for. It's fantastic. And it feels so good. You know, I turn on a new lint rule, and we catch a dozen bugs in production, and over the next year 100 bugs before they hit prod, that wouldn't have otherwise be caught. Oh my gosh, that's 15, 30, one hour of effort for untold hours of savings.

**Nick Nisi:** Yeah. And the tool that is stuck in my mind lately, that really can help 10x, is Codemods. Just like being able to be one person who writes a script, that can then just go modify the entire repository or project in a monorepo. Like, you can really be a 100x developer with that. But also teaching people how to use those tools is --

**Dimitri Mitropoulos:** It's a good idea. I should put that on my resume. 100x developer.

**Nick Nisi:** Yeah. \[laughs\]

**Break**: \[00:21:05.26\]

**Nick Nisi:** So when we were talking about doing this show, obviously we wanted to talk about SquiggleConf, and you said you had a lot to say about the conference organizing process. And we've kind of talked about some aspects of it, but I'm curious what specifically stood out in your mind when you when you said that.

**Josh Goldberg:** Nick, it's the stress. The stress of it all. My gosh. I've done enough conferences to see enough organizers to know that an organizer the morning of a conference is -- it's like a stress ball that's just perpetually being squeezed. And every hour you think they've been squeezed maximally, and then the next hour there's more stress.

Everything from if we mess up someone's flight and they arrive the wrong day, we've just burned their ability to talk, and their thousand dollars, whatever, to "You know, if we don't sell enough tickets", which, by the way, is really annoying, because people only ever buy tickets the last minute, for some ungodly reason... You go from, you know, breaking even to losing $10,000 each. Oops. It's so stressful. I hate this.

**Dimitri Mitropoulos:** I think the thing that's stressful for me is - not to take the high road, but I'm used to not having to ask anyone for anything, ever. And it's really nice. I told you, we have this YouTube channel, Michigan TypeScript... I think last year there were like 60 people that came on the channel... It's been really fun and really cool, but no money has ever changed hands. We don't even accept -- like, nothing. And we've featured a lot of products and companies, and stuff, and that's just because they have cool stuff and we want to show it, and it's so nice to be able to be in that position to say that "Yeah, well, if I don't have time, or the team doesn't have time to find people and put stuff together, then there's just not a video for a month, and that's okay." But it's not like that when you run a conference. Like Josh said -- I mean, who knows what exactly is going to happen, but we almost definitely will not make any money from this conference ever; even if there is money that gets made off the top on like really exceptional ticket sales - which is awesome, and we'd love to see - that money is just going to get folded back into it. Like, it will go to the speakers, it will go to the... We didn't mention, but Josh is running Boston TS Club, so those are the two meetups then... And maybe in the future we'll have a - hint-hint, if anybody is in New York and really passionate about TypeScript, maybe we'll have a... Or hook up with people who are already doing things in New York.

So I think at the end of the day it's a passion project, and we feel like we're giving. We feel like we're really putting ourselves out there, and providing this. But the problem is when you go to somebody and say "Come to my conference", what they hear is you're shaking the money bag saying "Give me money." And we don't view it that way, because we're not making any money. We will be losing money personally. But this is something we really care so much about, and we're really passionate about, and we want it to exist. Over time -- it's just the first year this year, so there's a lot of startup costs, so many things that you have to do about... I don't know, there's some Steve Jobs quote of when he left Apple to go to \[unintelligible 00:25:06.20\] he was like "I forgot that you have to like call the electrician to have him come turn on the power." There's so much stuff like that that we're doing on a daily basis, that we're going to be able to repeat next year.

So SquiggleConf is definitely happening again in the future, and that's something that really makes me motivated and helps mitigate the stress, is Josh is super-organized about everything, and I'm also pretty organized... I would say I'm like a six out of his 10. So keeping all of that stuff in place - I feel like we have a stamp that we can reproduce, and we can do a lot of the same stuff next year, and spend more time thinking about the audience that we're reaching, and the speakers that we're able to attract from different language communities. We don't want this to be a JavaScript or TypeScript conference. This is more broad than that, but also more specific at the same time, if that makes sense.

**Nick Nisi:** Yeah, I love those aspirations. And there's a couple of things that you said that I want to hit on... Because I've also organized some conferences, and yes, it's just like ringing all of the bells of like the stresses that come with that. Specifically, you mentioned having to ask people for things.

\[00:26:15.24\] For Nebraska JSConf I was in charge of, for lack of a better term, herding the cats that were the speakers... And trying to get information out of the speakers was so difficult sometimes.

**Dimitri Mitropoulos:** We have the solution. Wanna hear the trick?

**Nick Nisi:** What's that?

**Dimitri Mitropoulos:** Okay, we are a Discord-first conference. And what we did is we set up hotline channels with every single one of the speakers, and we really encouraged them - and thankfully, none of them pushed back on that. We really encouraged them to just be in the Discord. If anyone wants to join, it's Discord.SquiggleConf.com. But we have private hotline channels for all the speakers, and we use that extensively to communicate with them, to push them information, and also get information from them. It's a lot more casual than sending an email. So if they have a question about something or they have a concern, we can just jump right on it. And we are very, very attentive to those.

I think that that's helped us a lot, because - you don't realize; like, when you're starting out, there's such a thing as email reputation, and you can totally hose your ability to send emails for like very non-spammy reasons. Like, we're trying to give people information that they really need, but our email gets shut off, because we have 16 speakers, and if you send 16 of very similar emails, problems arise. So Discord solves that, because we can just send them the information that they need, and get back to them quickly, and they get back to us. It's been really nice.

**Nick Nisi:** That's great. Yeah, we definitely didn't use Discord. We used Slack, and we invited the speakers and everyone into that... This was like 2015 through 2019, so it was a different era. But yeah, that sounds like a fantastic idea. And it's really easy... Because for some reason - this might just be a me thing, but there is a barrier to me hitting Send on an email. You send me an email, I might start typing a draft, but hitting that Send is like - it's a monumental thing. Whereas like just casually -- the tone is so casual in Discord or Slack... It's so easy to just quickly give you what you want that way.

So yeah, that's great. That's a great solution for that. The other thing that is -- well, yeah, I don't know...

**Josh Goldberg:** We've got channels for every group that you can conceivably imagine. We're going to have - we should talk about this at some point - the MCs channel, the all speakers channel, they've got hotlines for each speaker, for all the sponsors... We're going to be doing a Q&A for the conference setup, where after each full length talk, the speakers can have some kind of MC-provided questions given to them... We're actually going to be live streaming with Prisma, a quick little Q&A app, using Pulse, their fancy schmancy real time product, which I'm really excited about...

Yeah. So one of the things that I've learned from conferences is that you never at any point in time want people to be asking "What now?" or "What next?" That's confusing. If I'm an attendee and it's lunch, I should know what's the end time for lunch? When should I head back? What are the talks after? I should be able to go back and get the slides or whatnot \[unintelligible 00:29:17.07\] from the previous talks. So as long as that's on the website, in a broad sense, and then real time updates given over Discord, then I don't have to wonder what am I doing at this conference.

**Nick Nisi:** I love that. And, I guess a little segue from that, you did mention MCs, or an MC room. I suppose I could mention that I'm MC-ing SquiggleConf, alongside Fatima Sarah Khalid. That's going to be very exciting.

**Josh Goldberg:** We're so excited. Nick, I've been seeing you MC conferences for years. You MCed, I think, the first conference I ever attended in person, TFConf.

**Nick Nisi:** Oh yeah, that was your first?

**Josh Goldberg:** I think so. You were pretty good, gotta say.

**Nick Nisi:** Thanks. Yeah, managing the stress for that... On the way there, on the plane ride there, I was obviously very stressed. For the other conferences, they were local. Nebraska JSConf was local for me... So I just stayed up all night. I couldn't sleep. But I always found some project to do, to try and, I don't know, keep my mind busy, to not freak out about having to go on stage... And so the first night before the first NEJS Conf, I stayed up, and -- do you remember that show on HBO, True Detective? I don't know if you saw that at all.

**Josh Goldberg:** \[00:30:29.14\] Oh, yeah.

**Nick Nisi:** They had a really unique opening intro, where they had like silhouettes, but it was like old night scenes, and dirt roads, and things that were kind of floating in the background of the silhouettes... And so I stayed up all night, doing that in CSS for all of our speakers; having an intro slide thing that would play in between talks. And for no reason at all. Other years I did videos, and things... But the first night of TSConf, on the plane ride over, I was looking for all of the diagnostic messages in TypeScript the TypeScript project, and then had a little simple algorithm that would look for syllables in those, and then I made haikus out of them. And the most validating part of that was when Anders Hejlsberg laughed at one of them. I was like "Yes! Success." \[laughs\]

**Josh Goldberg:** That's where that came from. You're the origin of the TypeScript haikus thing.

**Nick Nisi:** Yeah.

**Josh Goldberg:** I know this is like a whole silly little tangent, it's funny and cute, but that's actually a really positive point for a community or for a language. When you have cute little things that make people have a better time, or feel more comfortable with it, they're more likely to get engaged and use it.

The fact that TypeScript has a really welcoming community conference, and haikus jokes, and the release notes have these little puns that Daniel Rosenwasser always puts in there... That makes it a little more psychologically safe, a little more fun and welcoming to contribute to it, or work around with it. And that's kind of, I think, one of the reasons why we're really excited about SquiggleConf, and Boston TS Club, and Michigan TypeScript - that we can, by our ridiculous, weird personalities, kind of help push the community towards the fun, welcoming version of itself, rather than the weird, hostile, buttoned-down version that we don't want it to be.

**Dimitri Mitropoulos:** I love that about the name, that it's specific enough, because the name describes what it's about - it's about squiggles, broadly - but I like that it's fun. It's not just like some very like Web Dev Tooling Conf. it could be so much more sterile.

**Nick Nisi:** Yeah. I mean, it's a perfect name, because squiggle is such a silly word, but it is what it is. It's what you see, and it's it's the perfect tool or UI to deliver these errors, or diagnostic messages, or whatever. And yeah, I don't know. I don't know where I'm going. It's great.

**Dimitri Mitropoulos:** I think it makes a difference to have fun while you're doing this kind of stuff. Josh reminded me - does anyone remember that, for TypeScript, if you went on the wiki on the TypeScript GitHub and looked at the long-term goals, they have a short page there, and hasn't been updated in like so many years, and they're proud of like sticking to their goals? But one of them has always been to change all the error messages to be iambic pentameter; you know, like poetry rhyming. So it's obviously a joke, but I just love that that's there, and it makes a difference. It makes you feel like you're doing something fun as you're going through the days.

I mean, if you're somebody who's going to be so dedicated as to go find that wiki document and look at what the long-term goals are, and pick apart every word - you know, it's a good idea to do some fan service and put something fun in there. I think that came out of the first TSConf.

**Josh Goldberg:** Yup. Yeah, it all comes together.

**Dimitri Mitropoulos:** Oh, really?

**Josh Goldberg:** Nick, you tweeted this, then you got retweeted, and then eventually Daniel Rosenwasser added it to the roadmap.

**Nick Nisi:** \[00:33:58.09\] Yes.

**Josh Goldberg:** That's hilarious.

**Nick Nisi:** So that's great. It's exciting to hear that you're doing this for the right reasons, that you've got the right goals in mind, and you've got a killer lineup for speakers here. Like, we've talked about Robbie Russell. Oh My ZSH. I'm very excited about that. And that's not like JavaScript or TypeScript-specific. It's very like broad. ZSH, I mean. And I love that. But what are some other speakers that you're really excited about?

**Dimitri Mitropoulos:** What a loaded question. How are we supposed to answer that?

**Nick Nisi:** I know, it's --

**Dimitri Mitropoulos:** Come on! \[laughter\]

**Josh Goldberg:** I hate to go on your podcast and criticize you, Nick, but that puts us in such a hard spot. How are we supposed to choose who to offend, and who to, you know --

**Nick Nisi:** No, of course.

**Josh Goldberg:** I don't want to pick any one person. I could go alphabetically...

**Dimitri Mitropoulos:** I could say broadly. I'm excited that we are not just covering hard things. Something that I thought was going to be like maybe the thing that could break my relationship with Josh is that going into this, what I wanted was nine nonstop hours with no lunch break of like AST parsing talks. Talks about the compiler API... I just wanted to be clobbered over the head with the most dense material possible, because I love that kind of thing. And I was worried, because Josh kind of had been trying to nudge me before the CFP that like that doesn't make for a fun experience at a conference, and you're going to just be overloaded. And I was like "No, no, I can do it. I can do it. I would love that. That's what I want. That's my goal." But when we did the CFP, we realized "Wow."

We got some great submissions, for example, on the topic of how to write documentation about your tool. That is a thing that even people who feel that they're good at it usually feel like they have something to improve on. And also, we have another talk that's about how to socialize your tool; how to kind of genuinely and authentically discuss what it is that you're building without seeming scammy, or pushy in any way.

So broadly speaking, I'm really excited that we have not just -- we do have some compiler API type of AST discussion, we have Lawrence Crowe from the Zig Foundation talking about making a language server protocol in Zig... So that's cool, because even if you don't care about Zig, you probably care about language server protocol, and so that's a kind of two for one talk. And even if you just care about one of those things, you're going to learn about both.

So I like that we have that kind of separation, and we're not just going to be talking about the same thing over and over again; that you're going to learn what it is that goes in... I've been saying to people briefly, it's kind of like a tooling makers conference. I hesitate sometimes to say that, because I don't want to give people the impression that if you're not a tooling maker, you shouldn't come. It's for people who care about this kind of stuff, too. But this is the kind of constellation of talks that we've arranged. It's a big thing, it's a big topic, or it's a wide space that goes into building something that's a successful tool... And it comes down to quite a lot more than just making a cool tool. Getting people to know about it, being able to talk about it, documenting it, making sure the performance is good, debugging it, accessibility... And all the things I just mentioned are topics that we're going to have talks specifically covering. Debug and tracing - all that stuff is being covered. We're really happy about that.

**Nick Nisi:** To be clear, I thought that you would give an answer like that. \[laughter\] You love all of your children, I know. But yeah, no, that's great. And I think that that's really important. Having that broad range in there, that kind of touches on everything... You'll find the talks or the topics or the speakers that you're really interested in hearing from or hearing about... And then you'll just tangentially hear about other things that are related to that. And you get a really well-rounded view of the DevTools world, and what people are excited about, what's going into all of this. And I think that this conference has that. It's got a very well-rounded set of speakers that are going to give you up and down the range or the spectrum of talks or topics that you're going to want to see. So yeah, I'm excited about like the AST talks as well, but also, I really suck at documentation, and I would love to learn how to not suck.

**Josh Goldberg:** \[00:38:18.22\] If there's one thing I've learned from years of working in, around or on linters, it's that especially when it's a tool developers aren't predisposed to love, documentation is so gosh darn important. It might be the most, or if not, by far the most important thing.

If you give someone a red squiggly and you don't explain yourself, or if you write a tool for your team to fetch data, and you give some cryptic error when the things fail, or if they don't know how to hook it up... Oh, my God. You have not just made them dislike you or have an instinctive dislike of you and your tool, they might now just reject the entire concept of the tool and the tech gets built on altogether. The whole straw man ad hominem shenanigan. It's really, really important.

**Nick Nisi:** I immediately thought of that... That screenshot of a Windows modal that just says "Task failed successfully."

**Josh Goldberg:** Yeah. \[laughs\]

**Break**: \[00:39:12.20\]

**Josh Goldberg:** If I can brag here for a moment also, we're trying to be a really good conference, not just in a high quality sense, but for the people around the conference. We've got roughly 40% not dudes as speakers. The website's accessible, real accessible. We're roughly a dry conference, meaning we're not gonna be throwing things at bars or having alcohol during the conference itself. We have a volunteering event with a local not-for-profit; shout-out AFH Boston, Artists for Humanity, that works with teens to give them trainings, and workshops, and mentorship. This is the kind of tech community that we're trying to build. Not just well-rounded in the type of topics we discuss, but also how we interact with the people around us, and the partnerships we set up with the local organizations. We're really excited about that.

**Nick Nisi:** Yeah, that's great. That's so nice to hear, that you're doing this for all the right reasons, and you're involving the community, and involving all different aspects of it. And kind of speaking of community, I wanted to briefly touch on the fact that we're all meetup organizers as well. I run Nebraska JS, Josh, you're running Boston -- is it Boston TS Club? Yes. And Dimitri, Michigan TypeScript.

**Dimitri Mitropoulos:** Boston TS Party was taken. You know, because the tea party... Anyway.

**Josh Goldberg:** He's still really bitter about that.

**Dimitri Mitropoulos:** I am very bitter.

**Josh Goldberg:** He's been trying to bully me into changing the name, but I wanted it to mirror Philly JS Club. Shout-out Philly JS Club, which I used to be an organizer when I lived in Philly. It's a good lineage to draw from.

**Nick Nisi:** Yeah. That's great. And it's obvious that your motivations and your excitement around this conference kind of stem from your want to contribute to your local communities, and to the general web and tooling-related communities. And you're doing it up and down the spectrum. You have the conference, which is like a larger thing, which is in Boston... I don't know if we actually mentioned that, but... Yeah. And then the local meetups as well. So I'm curious how you got started in this, or what drew you to contributing back to your communities?

**Dimitri Mitropoulos:** I was a CTO at a FinTech company for a little while here in Detroit, a small one... And I found something out that was really kind of surprising. I was younger in my career, I climbed the ranks very quickly, but I learned that the best talent was grown, not hired.

I mean, we had amazing feats of just incredible engineering accomplished by people who were ostensibly junior engineers, but they were subject matter experts because they'd been working for just one year in the thing that we were really focused on as a FinTech company, traders and investors in the market, and all of that. And I started to realize that if we really -- I mean, as a CTO, one of my jobs is hiring... And so we did quite a lot of interviewing and hiring. And we were also hiring for Go in like 2016 or whatever it was, 2015, and at the time people would tell us "Go is not--" We talked to recruiters and they'd be like "That's not a language." And we'd be like "No, no, we promise it is." And then they'd go to the golang.org webpage, and at the time -- like, please, I encourage any listeners, go on the Wayback Machine and go to the Go homepage during that time... It looked like an absolute toy. It looked like a joke. They're not web developers; props to them for making a beautiful language, but...

So we had this struggle, and I realized that -- through experience; I didn't come up with this. But I was forced to realize that the best talent was grown. So I started thinking about "How do we attract people who are interested, but may not have all of the expertise yet?" And it wasn't long before we said "Let's start a React meetup." Because also React was -- in those years, a lot of the meetup talks were like "Is React better than Angular 1?" Or it was just called Angular at the time, because there wasn't an Angular 2 yet. So we started kind of grappling with that and getting involved with the community, and I just loved it. I loved meeting people, I loved the deep dish pizza... I loved all of it. We had a good deep dish pizza place in Detroit at the time. RIP Giordano's, they closed during the pandemic. But I loved the whole vibe and the experience, and I never kind of shook it off.

And so now, it's not related to my work, I'm not hiring... In fact, it's the other way around. I'm very happy that there's a decent number of people now in Michigan who have gotten jobs through people they met or connections they made attending the meetup. And that's awesome. We really love to see that. So it's kind of like one of the best metrics of success to me. So yeah, that's my story, I think, of how I got into it.

**Nick Nisi:** Nice. Josh, how about you?

**Josh Goldberg:** \[00:45:53.18\] Yeah, I've been trying to remember... I used to live in Seattle. One of my favorite things is telling people all the cities I used to live in, and then complaining about those cities. But no, Seattle is wonderful, and there was a really strong meetup scene there. I remember going to like the \[unintelligible 00:46:03.13\] for their - I think it was React meetups, and SeattleJS, \[unintelligible 00:46:06.04\] all these things. And learning a lot there that I then took back to my teams at work. This was actually around the same era, Dimitri, 2015. You were a CTO, I was software engineer one.

And I didn't have any other opportunities to feel like I was part of a community that was around programming things. Like, I had my coworkers, and then I had my friends. And then the programming stuff - it was the confluence of it all, but it was just really lovely to go to a place, get some free pizza... Sorry, the Seattle pizza scene was not quite as good. And learn about some cool new stuff and talk about it with people.

And then I think that community work kind of really helped me understand the mentality of a developer who's going above and beyond. There's kind of the archetype of the person who stays at work, the nine to five, and then does something else, and goes home. And then there's a separate archetype of someone who works as a developer nine to five, and then passion projects, hacking around, doing their startup, whatever it is, after work. And learning how to understand both of those archetypes was really useful for me, both in my regular day-to-day job, but then also on open source projects, where I had to kind of cater to both personalities. So I've always seen this as not just something fun and useful that benefits other people, but also a really good way for me to be better at my various roles as a developer.

**Dimitri Mitropoulos:** That's funny, I had a parallel experience like from the other side as a manager... Sometimes I would have to talk with other wings of the company, like the tech support people, or the marketing people, and I would try to explain to them that this is not just my -- you know, the engineers; this is not just their job. This is who they are. This is their identity. Some of them had been -- we have people on the team who have been coding since they were small children. This is a part of who they are, intrinsically. And when they go home on the weekend, they do this. But when you go home on the weekend, you don't do like marketing and sales. You go home and like do other things, woodworking or whatever it is. And they also have hobbies too. It's not like they're one-dimensional. But this is what they do for fun as well, as their work.

So the intersection of that ends up with a different work experience than maybe for something that really doesn't make sense to do as a hobby, unless you're like really into lead gen, you know?

**Nick Nisi:** Yeah. \[laughs\] I don't even know what lead gen is.

**Dimitri Mitropoulos:** Ah, lead generation. Top of funnel, man. Anyway...

**Josh Goldberg:** 10 touch points per user.

**Dimitri Mitropoulos:** 10 touch points. Yeah.

**Josh Goldberg:** One of the things that I really liked about getting involved with organizing local meetups - and at this point, I'm just trying to get more people... I'm sales pitching everyone. If you have the ability and the time and the energy, go organize or help organize a local meetup. It's fantastic. It's that you can have a surprisingly direct line and influence to how those meetups go. Like, for Boston TS Club, we do a lot of the things right that I've seen not attempted, or that I've really liked from other meetups. Instead of just always having pizza at meetups, we have - shout-out \[unintelligible 00:49:01.22\] - vegan catering every time. So I've been to a lot of places where if you're lactose-intolerant - oh, you just don't get food. So that makes me really happy. And then we try to have lightning talks from people --

**Dimitri Mitropoulos:** It's so good, too.

**Josh Goldberg:** Oh, it's -- oh, my God. There was this dark chocolate truffle thing at the last one... Oh, my gosh. Amazing. And we try to have lightning talks on things that are explicitly not TypeScript or technical at all, because people need to flex their minds. You can't just sit for two hours and listen to TypeScript. And then it's just been really fun to -- everyone from people who've been programming for 30 years, to people who are undergrads in university, coming over and getting them to mingle together. It's really cool to see what happens.

**Nick Nisi:** Yeah, that's true. I love that broad spectrum. But -- I mean, this is anecdotal to us, but I've definitely seen that kind of change, especially post pandemic. And I was curious how that might have affected your meetups as well.

**Dimitri Mitropoulos:** \[00:50:00.12\] I can tell you a horror story. Do you want to hear one that's just so hard for me to accept? And I'm sorry if whoever's listening is one of the people that does this. I do appreciate you, and all that... So we have a venue that's a coworking space. Shout-out to Cahoots in Ann Arbor. It is a fantastic coworking space. It's very up-to-date, and modern, and fast internet, and it's just an awesome space... And we're very lucky to be there, in their events space. But one of the things about that is there are people working at the coworking space that used to be literal organizers of the meetup I told you about before, Southeast Michigan JavaScript. So they were organizers, and very engaged and very involved, and sometimes we're having our meetup and they have to walk through the event space to leave. They physically -- like, not during a talk. They're not rude. But they walk through the event space, and then leave, and go home. And I'll say "Hey man, you should stick around." I mean, I know them. It's like "You should stick around. I know this is something you're passionate about." And they're still TypeScript developers, and all that. And like "Nah, nah, nah. I'm going to go home." And it's like "Come on. What have you got to do at home?" It's like "Ah, I don't know. Nothing, really." It's like, "Dude, you're you're physically here for a thing that you care about and are engaged about." But no shade on them. Things are just different. People kind of settled in...

I have a friend from Sweden, a good friend of mine, who says "I used to go to meetups all of the time. I went multiple times per week to meetups. And after the pandemic, it's just a zero for me now. I just don't go to these kinds of things anymore." And so I've learned to appreciate and accept... In fact, it's been good for me to have the outlet of the YouTube channel, because even if -- I genuinely feel good if 10 people show up to the meetup... And usually it's like 20 or so. So it's like, if 20 people show up to the meetup and they have a great experience and we sit afterwards, we go to this bright board game cafe that's right across the street, and we talk sometimes for hours, and they have a good experience... That makes it worth it. But also, when we post the video -- we posted a video about Rescript, for example, which is a topic there's not a lot of talk out there about. It has - whatever, 8,000 views on YouTube. And 8,000 people watching that meetup talk is bigger than the biggest JavaScript talk in the world. It's a huge number of people to see a talk on a topic like that. And it's, I think, such a big success if even one eighth of those people actually engaged with it and watched it. Like, it's so many people.

And so for me, bringing the meetup into the modern age - it's absolutely a requirement to record the talks and post them online... Because otherwise I feel let down. I feel like I'm here, and I'm here, and there might be 50 people in the room, there might be a hundred people, but it's still gone forever after the meetup is over if it's not recorded and published. So I'm really hoping that people will see that even if you don't have a huge attendance, you can still build a thriving community. And guess what? Those people I mentioned, who are physically there at the meetup and leave - they do watch the videos later. They talk to us about it. They're like "Oh, I love the video you had last month" or whatever. So they engage with it that way. That makes me feel really good about the way that we have it organized, and feel like it's not an aimless thing that we're doing, with no long-term successful outcomes.

**Nick Nisi:** Yeah, I love that. Can't say that I always feel like we're not aimless sometimes, but I am trying to get more on the recording -- like, making sure to record it, just because I feel like that's a good incentive too for people to come talk... Because then that's something that you can--

**Dimitri Mitropoulos:** Yeah, speakers... Exactly. Speakers love that, and it's really nice. I feel sometimes -- like, if there's a problem where you have some AV issue and it doesn't \[unintelligible 00:53:30.09\] I feel very bad about that. I try to be noncommittal. But speakers do really appreciate that -- in fact, one of the people I'm thinking of who got hired because of a talk at Michigan TypeScript; it was because of the recording.

**Nick Nisi:** Oh, yeah?

**Dimitri Mitropoulos:** They met their current employer because they made a talk, and their employer was aware of the talk, but didn't connect it to them. And so like midway through the interview process, they're like "Oh, are you the guy that -- I saw your talk on X, Y, and Z", and it really added credibility. They're a great developer. They didn't need the credibility, but it always helps to have stuff like that.

\[00:54:04.01\] So I think, personally, the hardest part of having these kind of meetups is finding speakers. It's not for me. It's not finding attendees. Attendees will show up, if they feel engaged or not. It doesn't matter in my case, because it's recorded, so I don't feel bad. I never pressure people at this point about attending and RSVPs, because if they do, they do, if they don't, they don't. They can watch it later. And that's this hybrid system that we've created. But getting good speakers is so hard... And when you have a really nice platform that they can see that there's attention on it, and they're going to be able to get out there - that gives them a lot of motivation, and I feel like that's really important to make it easier on an organizer, to not have the soul crushing experience of saying "Am I going to speak at my own meetup for the third month in a row this month?"

**Nick Nisi:** Too real. \[laughs\] I just spoke last month, and we had the last three times --

**Dimitri Mitropoulos:** Oh, sorry... \[laughter\]

**Nick Nisi:** The last three times I've had AV issues, because I'm trying to record using my phone, but I have an iPhone 15 with a USB-C. So I'm trying to directly record onto an external SSD... The problem is I'm dumb, and I'm running the iOS 18 beta, and my phone just like overheated and shut down partway through. It was over.

**Josh Goldberg:** Yikes.

**Nick Nisi:** Yeah.

**Dimitri Mitropoulos:** Did it come back to life afterwards though?

**Nick Nisi:** It did, but I had already missed a significant chunk. It was awful. I felt really bad about that, because I was -- I'm really trying to get things posted, and get videos posted, and things like that. But kind of touching on that, finding speakers is definitely hard... And I'm trying to, but there's two questions I wanted to ask. And one of them is -- I kind of saw this Reddit post maybe a couple of weeks ago, and I forgot what Subreddit... I think it was like Experienced Devs, or something like that. But they were talking about meetups specifically, and they were saying "I just never really see senior developers there anymore." And I'm curious if that's been what you see at your meetups, or...? Do you have a sense of the demographic that goes from that standpoint?

**Josh Goldberg:** I don't agree with that perspective for specifically the meetups I've been at. We do get a fair contingent of senior devs, but I will say it does skew junior in some amount. I think one of the motivations out of many that people have for meetups is to get a better job, or to upskill in their current. And once you're a little more comfortable, that motivation is less pressing.

It's interesting, I feel like it kind of mirrors the natural flow in the career. Like, every career is a funnel where you have a lot of people in the beginning, and then it slowly dips off towards the end. So I also wonder how much is that.

**Nick Nisi:** Yeah, that's a good point. And to be clear, I don't think that I really agree with that either. Like, I feel like we have a pretty decent -- we're pretty small still. Post pandemic we're getting -- if we get 20, that's a very good number. And so it's not the numbers that it used to be. We used to get like over a hundred at each meetup. But I would say that it feels like it's pretty balanced in terms of like skill level. There's newer people... And I really want to focus more on newer talks. Like, we used to be the Omaha jQuery meetup, and then we transitioned to Nebraska JS. After doing like an intro to jQuery for the fourth time, we're like "We can't just talk about jQuery anymore." And so I think a lot of that, we kind of skewed away -- or I don't know, maybe I'm just like thinking about this too much, but I feel like we skewed away from those beginner level talks, because we were just like so in that for a long time... But getting back to that I think is like a really good draw, maybe to encourage new developers to come in and be like "Oh, I'm in React, but maybe I want to learn the intro to Vue", or something like that. So trying to get a more diverse set of topics. But finding speakers is also a challenge, because I've spoken at my meetup a couple of times this year, and I don't like making it the Nick show.

**Dimitri Mitropoulos:** They used to have a rule at SemJS that no organizers are allowed to speak, which I thought was such a brutal way to force the topic...

**Josh Goldberg:** Brutal...

**Dimitri Mitropoulos:** Yeah, it totally is.

**Nick Nisi:** \[laughs\]

**Dimitri Mitropoulos:** \[00:58:11.15\] I used to work with a guy who was in his sixties, and he would often joke that people would ask him throughout his career "Where are all the old programmers?" And he would say, "We're all still here, there just never were that many of us." Because you look at our field and it's pretty young people in general. And I guess the -- I don't know if this is still true, but I know that at least fairly recently the number of software engineers was doubling every five years... And another way to look at that statistic is if you have five years of experience, you are above average.

So I think that when you, when you look at it that way, you realize that - yeah, when you're growing like our field has been, you're going to find more people, largely more people who are newer and more introductory content. In fact, not to plug it for the thousandth time, but one of the reasons I started Michigan TypeScript as a YouTube channel, and we started doing more content than just in the meetups, was because I felt like there wasn't a place for advanced TypeScript content being covered. Go check it out, we have a three-hour video on building a JSON parser purely in TypeScript types. So if that's interesting to you, please go look.

And I was really excited about putting that kind of stuff out, because I used to get angry, like "Why is nobody doing this? We're all this beginner and sometimes intermediate content, but nothing on the other end of the spectrum." TypeScript is 10 years old now. There are people who've gone as deep as you can go, and they're looking for more.

But I've found out that there are just not that many people that are in those groups. And so if you just target them, you have to be ready and prepared to have a pretty small viewership compared to the larger group, because like I just said, the larger group is growing so much faster than the 60-year-old programmers, who - they're all still here, like my friend said, but there just never were that many of them. And people fall off, and people come in, and you have to kind of account for that...

But yeah, in general, there's a balance, and that's just a choice you have to make, where you want to sit in the spectrum. And if you want to sit to the other side, where there are fewer people who are interested in this stuff, that can be good... But you're not going to ever make a business out of that. Or at least not for another 10 years anyway.

**Josh Goldberg:** I actually have a nice piece of advice, both for finding organizers and finding speakers. You've got to talk to people one-on-one in a way that they're comfortable with. We've gotten exactly to date zero responses on our general speaking form. \[unintelligible 01:00:37.20\] Please, for the love of God, someone submit to the form, so I can't say that anymore... But when you have like a general "Hey, does anyone want to speak?" or "Hey, does anyone want to organize?", you're at the whim of whatever unwillingness or biases or misconceptions or just plain fear that people have.

**Dimitri Mitropoulos:** Self-selection.

**Josh Goldberg:** Self-selection. I hate self-selection. All these self-selections and biases and fallacies, they all hurt us. And one of the things I've actually found when I talked to people directly is the number one reason, by far the number one reason why people either don't speak, or don't help organize at a meetup is that they mistakenly believe they don't have the experience or the skills needed to do so, which is a load of crap. Everyone, especially senior devs, they see these brilliant talks from these people who've been working in industry for 20 years, and they think "I need to do that." Whereas in actuality, the perfect meetup talk is going to be something like "Hey, here's this cute little thing I learned. Here's some interesting nuances about it that anyone can use. Let's talk about it." It's supposed to be this nice, casual environment where you learn how to do these things as you do them. It's not some ridiculous, high-intensity PhD thesis.

And when you talk to people directly and ask them what their actual blockers are from speaking to organizers, then you can help explain to them "No, you don't need to be Richard Feynman. You can be their great chemistry teacher", still very valuable and awesome, in a different than their own right.

**Nick Nisi:** \[01:02:07.05\] That is -- yeah, that's so perfectly put. People want to hear stories. Stories are what our minds are just drawn to. And Dan Harmon, for example, he created Rick and Morty and Community and these TV shows... He has this story circle that's like a formula for every episode. It goes through these circles, and it starts and ends in the same place, and it takes the character on a journey of change, that gets to the end. And you can do that with a talk on JavaScript, too. And you're telling your story; you're not up there reciting the JavaScript manual, if there was one. It's all your experience with it, your journey, the problem you were solving... That's very interesting. And that's what can get people hooked on a good conference talk.

And you don't have to be the expert. It's better if you're not, honestly, because then you get to see the trials and tribulations that you went through, and you get to share that to come to a solution in some way. And so I think that that's something really important to try and convey to would-be speakers, is - we want to hear your story about using this particular thing, rather than knowing that you're the expert on it.

**Dimitri Mitropoulos:** I have a concrete thing I can share, that for Meetup organizers is very reproducible, that has worked pretty well for us. I've just been too busy to push it further, but it worked the few times we tried it. And it goes like this. Whatever your thing is about - let's say it's about Java. Or, okay, let's stay on topic. Let's say it's about TypeScript. TypeScript has releases every six months, or whatever they do, and you can create a culture in your community where you say "Hey, we would like a five-minute lightning talk on as many of the items from the release notes as possible." And you can go to the people in the community and say "Dylan, I would like you, Dylan, to be the one to present about this feature that's coming up. You can read it in the beta notes, you can read it in the RC... And please just come talk about it." And then Dylan will say -- Dylan's not a real person. So then Dylan will say, "Well, I don't know. I don't really understand what that is." And I'll be like "Yes, exactly. And nobody does, because it's new. So you're on the same footing as everybody else. You don't have to feel intimidated because you're not an expert in this. Genuinely, no one is. Take this item..."

And I tell people, "Please, you can literally put up the release notes on the screen, and read them, and tell some experience you had trying to understand what it is, and just explain it like you would to a colleague, and get off the stage." You don't need to make a presentation, you don't need to make a code example. It's great if you want to. A code example is way better than a presentation. However, just take that and run with it.

And we've done kind of like assigning to people. I mean, they always agree to it. We're never forcing anyone. But - I mean, we had one night last year where we had 13 people just do TypeScript release note talks, little ones. And it was a really cool night. It was one of my favorite nights that we've had at the meetup. And other than that, we've had people do like one or two, and it's been a nice way to kind of break up the cycle of the meetup... And it's so ready-made content. It's just there, and people understand what they can talk about, and they don't have to hem and haw about how to present it, or what they should say, and it's very obvious... And release notes usually have examples, so they might just like literally go in the playground with the nightly and show the example working, and people might ask a question or two, and then that's it.

It's very low commitment, and I would encourage anybody running a meetup to think of a thing like this that applies to your subject area, that you can do to get people engaged, that might not otherwise have wanted to come to stage, for any reason.

**Nick Nisi:** I love that. I'm going to steal that, for sure.

**Dimitri Mitropoulos:** Please do. I tell people all the time -- they're like "Well, what if somebody else does a video about it?" I'm like, "Do you understand how big this pie is?" A small slice of this pie is still good. People might need to see it twice. Like, we can all do content about the same things. It's no big deal. Let's just get up there and talk about it, it's no big deal.

**Josh Goldberg:** Yeah.

**Dimitri Mitropoulos:** Same team.

**Josh Goldberg:** \[01:05:54.03\] I've started telling my meetup that I want worse talks. I hate to harp on the "It's good to be casual and first timer" stuff, but I really like it when someone gives their first talk, because those people are the ones who put the most effort into it, the most polish. And if you're there to help them, then they ask for help the most they feel comfortable, so hopefully they do.

I've been telling people "Hey, I want people to give rough talks", with the explicit context of "Hey, this is my first one or my second one", because this is the best way, in one of the most supportive environments for you to learn how to give a talk and enhance your, even create your public speaking skills that you can later use to be one of those ridiculous, awesome, frequent conference speakers.

**Dimitri Mitropoulos:** Take a CLI tool, take a config file... Like, you could literally -- every month somebody is going to present on one more TS config option. Like, it's there, ready to do it. You can think outside the box and just like show people how to use these things, little pieces at a time, and create a series that can go on for years, and be valuable every single time, and get people engaged that might not otherwise come up on the stage. So I think it's -- I would love to see people doing that more. It worked really well for us, but we just got so distracted with so many things in SquiggleConf... We'll come back to it.

**Nick Nisi:** Well, that's great. Yeah. I love how focused you are on the community about bringing people together, giving people ideas of how to engage, how to -- like, lowering the barrier of entry. That's fantastic. And you're doing the same thing with the conference - lowering the barrier of entry for tooling, giving a focused conference, specifically all about tooling, which, like we covered at the beginning, is so important, and is such a... It can really just level you up, knowing your tools in and out. And so yeah, that's fantastic. Where can people go to learn more about the conference?

**Josh Goldberg:** We are on most of the social media platforms as SquiggleConf. Our Mastodon server is \[unintelligible 01:07:51.27\] I should know this. Also, 2024.SquiggleConf.com, because we're definitely going to be doing 2025. Look out for information for that in some amount of time. But also just SquiggleConf.com redirects to it.

Also, if you know, or know of, or follow Dimitri and/or myself, you can always just DM us, or whatnot. We're always happy to talk about the conference.

**Dimitri Mitropoulos:** Come on the Discord. We're easy to find on the Discord. Discord.SquiggleConf.com.

**Josh Goldberg:** Yeah. Hang out with us. Ticket sales are still open. We are happy to work with you. We have bulk discounts, we have a volunteer forum still open, we'd love to have more volunteers... We have a DEI scholarship form, if anyone wants... If you are in or around Boston, and you're in a company, we're happy to give you some kind of deal on bulk tickets. We have those on the website as well to start.

Also, if you work for any kind of, or work with any kind of non-profit, for-good, bootcamp, fellowship, student club, anything in that area, we would happily, happily give you some extreme discounts; like really shocking discounts on tickets to get people new to the industry, or from historically underrepresented groups or whatnot to the conference. So please work with us. We'd be happy to work with you.

**Dimitri Mitropoulos:** If you're in Boston, this is your conference. There are - I don't want to say none, but if you're in Boston, you are aware that there are very few software conferences happening in Boston... And this is yours. It's not going to be a corporate conference at any point in the future. We want to keep this a fun, small, but exceptionally high-quality experience for the Boston community.

**Nick Nisi:** Nice. Yeah, I'm very excited to go, I'm very excited to be there, and I'm very excited to see you all and to hear from all of these amazing speakers. I think there's not a bad talk in the bunch, so I'm really excited about it. And this is October 3rd and 4th of this year in Boston, and I hope to see more of you there.

**Josh Goldberg:** At the New England Aquarium.

**Dimitri Mitropoulos:** Yeah, can we plug this? It's in the freaking aquarium, with the penguins.

**Josh Goldberg:** \[unintelligible 01:09:52.12\] attached to the aquarium, but you know...

**Dimitri Mitropoulos:** There's a penguin exhibit, Nick...

**Josh Goldberg:** Oh, my God. I saw it earlier this year, just to -- oh my God, just to have a good time. Also, they have these really cute jellyfish that light up like LEDs, which ar near the penguins.

**Nick Nisi:** Nice!

**Josh Goldberg:** Wonderful. Wonderful.

**Nick Nisi:** Well, you can't miss that, for sure. Cool. Well, thank you so much, Josh and Dimitri, for coming on and talking to us about SquiggleConf, about conference organizing, and about meetups. And please keep up the good work in the communities. You're change agents in your communities, and you're bringing people together, so thank you for that. And we will see you next time.

**Dimitri Mitropoulos:** Thanks for having us.

**Josh Goldberg:** Yeah, thanks for having us, Nick.
