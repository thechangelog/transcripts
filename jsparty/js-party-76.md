**Kevin Ball:** Alright, hello party people, and welcome to another episode of JS Party, where we are every week throwing a party about Javascript and the web. I am your host this week, Kball, and I am joined by two of our amazing regular panelists, one who is a new panelist; I'm super-excited, I've loved all of her episodes so far, but I haven't been on one with her, so welcome and thank you for joining me, Emma Wedekind!

**Emma Wedekind:** Yay! I'm so happy to be here. I am excited to chat more with you.

**Kevin Ball:** Did I butcher your last name, by the way? I'm sorry...

**Emma Wedekind:** It depends... Are we speaking it with an American accent, or are we trying out the German version? You nailed the American one, but for the German one it's Wedekind.

**Kevin Ball:** Wedekind, okay. I will endeavor to do better. And then our other panelist today, Chris Hiller a.k.a. b0neskull. Chris, how's it going?

**Christopher Hiller:** Hi! It's just me...

**Emma Wedekind:** \[laughs\]

**Kevin Ball:** Just you.

**Christopher Hiller:** Yeah, it's just me...

**Kevin Ball:** Just you... Okay... So today we are going to do a set of our fun, recurring segments, starting off with a segment that got a lot of interest the last time we did it, our fun ELI5 (Explain it Like I'm Five) segment. Now, we can take ELI5 and just explain it simply, or even more fun, you could actually try to do it for a PAW Patrol. I think the last time around we did this, I used the PAW Patrol, which is a thing my five-year-old (now six-year-old) is really into... So you can use actual stuff from kids if you want to, but you can also just make it super-simple.

I wanna start off with my question, since then somebody else will talk... My question is Explain It Like I'm Five Node streams. I've done UNIX streams for a long time, but somehow when I've tried to tinker around with it in Node, it's always been confusing.

**Christopher Hiller:** Do you mean piping stuff in Bash?

**Kevin Ball:** Yeah. That feels normal, I know how that works. Streams in Node? I feel like I should know how that works.

**Christopher Hiller:** Yeah. I feel like it's a little different, but I don't really know the guts of how piping works in a shell... So I'm gonna take a crack at this. I must apologize - I have explained many things to a five-year-old, and I don't think I'm actually any good at it, so please stop me if I say something that is in reference to something that you \[unintelligible 00:03:31.10\]

Node streams - so you can think of a stream kind of like a collection of data, sort of. You can think of it like an array, except not every item in the array is available at once. Maybe a better way to think of it is if you're familiar with an async iterator. It's this collection of data, the data is not available at once; typically when you interact with a stream, you consume each item from that stream individually. It also means then that because they're not all available, not the entire dataset that's in that stream is in memory at once, and this is great if you are working with very large datasets especially... But the use cases for streams are limited to very large datasets, but they're very useful for them.

\[00:04:26.07\] An example I remember - this is kind of trivial - in Python, if you're familiar with Python, there is a built-in function range(). What that does is it essentially gives you a list of however many numbers, or what have you. So you say "range(10)", you get a list with 0 to 9, or something like that.

And there's another function called xrange(), and it's different -- it essentially doesn't hold the whole array in memory. So you can say xrange(50 billion zillion), and Python will just go ahead and go through, but if you said range(), well, then we're gonna fill up memory with this huge, huge array.

So in Javascript if an array is working with a range operator, streams are more like xrange(). Does that make sense so far?

**Kevin Ball:** Yeah, I think so. Basically, an array that is paged into memory a piece at a time.

**Christopher Hiller:** Yeah, essentially. Another feature of streams - and this is where this idea of piping comes in. Streams are composable. There are two basic types of streams. One of those is a readable stream, and the other one is a writeable stream. A readable stream you can think of as a source, and a writeable stream you can also think of as a sync. These are interfaces, essentially.

An example of a readable stream might be a standard in. If you're in Node and you want to read some information from standard in - readline, or whatever, and it's a readable stream, then you can pipe it to some output. So readable streams have a method "pipe". You'll frequently see this.

Maybe another good example is there's a function in the Fs module, and that's "createReadStream". So instead of calling, say, "fs readfile" - and what that's gonna do is it's gonna read the file and load its contents in the memory - you might wanna call "fs.createDreadStream" instead, so this will give you a stream, and it won't load the whole file into memory, and let you process it piece by piece.

So readable streams, again, you can pipe them to some output. A writeable stream you cannot pipe. A writeable stream goes somewhere. A typical writeable stream is like process.stdout, or process.stderr. So you can read a file with, say, "fs create readstream", and maybe it's a text file, or something. And because it's readable, you can pipe it to the write stream created by "fs create write stream." With "fs create write stream" you give a filename, and so basically you're reading the file and then writing it out into another file. You do that piece by piece. You can read the file, or you could pipe it to stdout, and it'll just dump the file contents to stdout.

So there's readable and writeable... Does that make sense? You can pipe a readable stream, you cannot pipe a writeable stream. A writeable stream goes somewhere else.

What makes them composable is that some streams can implement both interfaces. These are typically transform streams or duplex streams. There's a bit of a difference. The transform stream (I find myself working with quite often) is where you take some sort of readable stream, and then you pipe it through this kind of middle man, and then that finally pipes out to the writeable stream.

An example of that might be reading with "fs create read stream" and then piping it to Zlib. Zlib will let you zip up a file, or create a gzip, or whatever archive... And then you could pipe the result out from that to a writeable stream and write the file out. So you can read a file, then zip it up and write it out without loading the whole file into memory, which is really cool. That's a transform stream.

A duplex stream I never really have tried to implement... It's essentially a stream that will go both ways; it works as a readable or writeable, but I don't know... It doesn't entirely make sense to me. Don't worry about it.

**Kevin Ball:** \[00:08:26.11\] \[laughs\]

**Christopher Hiller:** So yeah... The entire dataset is not in memory. A good example is something that I've written in the past where I needed to download some huge thing from some website, in maybe a big json file or text file, and process it, and then write it out to a file. Instead of going and fetching the file, I used HTTP request. That will give you a readable stream, and then I could pipe that stream into maybe a transform stream that I implemented, process the data somehow, and then I can pipe that back out to whatever I need to write to.

That's the idea of streams. Streams are all over Node. Many different modules have some sort of stream available in them. You can work in Node and never really touch streams, but they're really good for this kind of idea of processing large datasets and composing things.

**Kevin Ball:** Cool. It seems like a topic we could go a whole segment on. Awesome. Thanks, Chris. Do you wanna ask your question next, and then maybe Emma can tackle that?

**Christopher Hiller:** My question would be -- I've been trying to get my head around CSS Flexbox. Can somebody please explain CSS Flexbox to me?

**Emma Wedekind:** Yeah, absolutely. Prior to Flexbox in Grid, if you wanted to lay things out on a page, you had to use floats, or even worse, tables, and things just became a nightmare. I swear I couldn't lay things out in the UI basically the first year of my career.

Flexbox is now a CSS spec that allows you to lay elements out along one access. If I'm explaining this to a five-year-old, they're probably sitting there like "What the heck...?" So let's say you have... Hm. What's something that would be relevant to a five-year-old? I don't know, let's say they have five cars, and they're all over the floor, and we want to get them all in one horizontal line, like they would be if they were going through a drive-through, for example.

What you can do is let's say they're in a container, which was the road, so we set a display of flex on this road element, and everything inside of that, all the individual cars would then be in line along the road. So they're all in a line, you can lay them out at the front of the road, or at the back of the road, or in the middle, and it makes it really easy to do that. You could even have one car go to the front of the road, and the rest stay at the back, but by setting display of flex on this parent container, it makes it really easy to lay things out along one access.

When you're talking about a two-dimensional access, that's where things get a little trickier, so CSS Grid enables you to create these really complex layouts. Let's say we have a website and it has a sidebar, with a bunch of navigation items, and then let's say we have a header that spans the whole width of the top of the page, and maybe we've also got a footer. This is the kind of two-dimensional layout that we're talking here, and it's a little too complex for Flexbox. You could use Flexbox, but you'll have a lot of wrapper divs, and that can get unsemantic and messy.

At this point you can create a grid of two-dimensional elements, and you can set different grid areas. You can say "I want this to be five columns wide, and I want the first two columns to be for the aside." And you can just snap elements into place like this. It's really quite easy, but I think the misconception is that you have to use either/or, and that's not true. We can use Flexbox and Grid together. It's kind of about identifying the correct use cases.

If you wanna lay things out in align, for example, Flexbox is the right tool. If you need to lay things out - for a lack of a better term - in a grid, that's where CSS Grid can come in handy.

**Christopher Hiller:** \[00:12:00.08\] I was running into problems because all I had was Flexbox, and I was trying to make a table... So I was like "Is this the right tool for what I'm trying to do?" And I think that sounds like the answer is no.

**Emma Wedekind:** Yeah... I mean, you can use it, it just won't necessarily match up perfectly. You can say flex-wrap and you can set widths on the children inside, but it's just not the most efficient solution. It's one of those things if you wanna make a table without using a table element, you would just create this grid and maybe have some rows in there, and use Flexbox within the rows.

**Kevin Ball:** One of the distinctions that I've heard that I really liked was that Flexbox, from the word "flex" - it's about distributing things in space in a way that you want them to be controlled by what's in the content, or what's in the elements itself, let the elements sort of figure out together how to distribute themselves... Whereas Grid is much more command and control; so if you're trying to say "I want these things to be in columns", or "I want these things to take exactly this space", Grid is much more intended for that. And you can kind of, as you say, shoehorn Flexbox into more exact things, but that's not what it's intended for really, and that's not what it's best at.

**Christopher Hiller:** This has been very informative, even just this little bit. Thank you.

**Emma Wedekind:** I wrote a blog post on this, about when you should use Grid vs. Flexbox, and I walk through a few examples. It's one of those where when you see it, the more you practice, you'll be able to just look at UI, or look at a design and just kind of in your mind chunk whether it should be Flexbox, or Grid, or both. You should definitely check out that post if you would like to learn more, because I think learning when to use each is definitely a super-power.

**Kevin Ball:** Awesome. We'll include a link to that in the show notes. Great! Emma, do you wanna ask your question and I'll try to answer it real quick in the time we have left for this segment?

**Emma Wedekind:** Yeah... Hm, I don't know what kind of question you wanna answer...

**Kevin Ball:** Or concept to explain, or...

**Emma Wedekind:** Yeah, so we just talked about Flexbox and Grid, but sometimes I have problems when I'm writing my CSS and my properties aren't' showing up, or my styles aren't being applied appropriately... So could you tell me a little bit more about specificity?

**Kevin Ball:** Alright, specificity... And I'm gonna try to explain it like you're five, so I'm gonna go back to metaphors. My kids are no longer into PAW Patrol; the latest and greatest thing is Ninjago. Ninjago is a combination word for Ninja Legos. They are these ninja characters made up of legos, and they all have different abilities, but they're kind of all over the place. The story writing is thin. Sometimes one character is doing better, sometimes the other, and often times whichever one arrives last is gonna hit it. So if we start coming back to CSS specificity, thinking about it as Ninjago and how Ninjago is going to tackle problems.

CSS specificity, before we go into the metaphor, is essentially a set of algorithms or rules for how styles choose to get applied, and there's two core elements of this. There's how strong is the thing that we're applying, and there's what order is it that we apply it in.

In the Ninjago world I might hit something with a punch. That's kind of weak. I might also hit it with a punch and with a weapon. Okay, that's a little bit stronger; it's more likely to hit. In CSS that might an element selector is the weakest specificity; that might be my punch. I wanna go a little bit stronger and I'm gonna select based on a class; that's a weapon. So if I've got two different things, the one with the weapon is gonna take precedence over the one with just the punch. If I put a punch and a weapon together - that's gonna be both of them.

There's this whole range of different pieces... In specificity you have an element, you have a class selector, you have ID selectors, various things. Each one of those is a little bit stronger, meaning if you just have two of them head-to-head, the stronger one is going to take precedence. And if you combine them, it has the combined strength of the two. And you can add multiple weapons, a.k.a. multiple classes, or multiple IDEs. The more you select, the stronger it is.

\[00:15:53.10\] The second piece of this is the fact that it's not necessarily that well though ahead. The last one to hit wins. So if I punch it and ninjutsu characters are -- they've got these ninjas; they have Jay, and Cole, and they are all stupid, and they all have their own neuroses, and they're all trying to hit things... Whichever one hits last, if they're hitting the same amount of difficulty, that's the one that's gonna take precedent. So the stronger the hit, the stronger whatever it is, it will take precedence; but if you have two things that are the same strength, whatever hits last, which in CSS is literally the order you write the code when it is landing in the file - whichever one hits last, will apply.

And the final Spinjago reference is when all is lost, and they just have to blow something up, they go to what they call Spinjitzu, which is basically they turn into whirlwinds and spin around. And that is the important flag. If you have some property that just has to happen, no matter what, you can throw everything in the air, throw your specificity rules out of the way, write "important" and that's Spinjitzu; it just wins. It's not very advisable, either in Ninjago or in CSS, but that's your breakthrough.

**Emma Wedekind:** I loved that. That was a great analogy.

**Kevin Ball:** Okay, and with that, let us close this segment. We're gonna take a short break, and we will be back shortly, talking about stories of the week in the Javascript and front-end space.

**Break:** \[00:17:10.06\]

**Kevin Ball:** Alright, welcome back JS Party people! Let us roll into a segment that we call Story of the Week. Each panelist is going to bring a story that they found particularly interesting or salient this week, and maybe talk a little bit about what it is, why it was interesting, and any impact it has on the ecosystem. Let's go reverse order from what we did last time, so let's start out with Emma.

**Emma Wedekind:** Awesome. So, full transparency - this is not a news article, however I find this to be extremely informative and relevant. My story of this week is called why, how and when to use semantic HTML and ARIA. Recently I've been seeing a lot more about accessibility coming up, which is really great, because we should all be aware of how to write accessible applications... And there were some really key points that I pulled out of this. For reference, this is on CSS-Tricks, one of my favorite sites.

So what are the things that I pulled out of this? ARIA provides additional contextual information for your web pages, and they allow people who are blind, or have other visual impairments, to be able to use your site without trying to discern what is what. So if we have a full page of divs, they can't navigate this page, versus if we have a main element, and then we've got a form with an input - this is a lot more semantic.

Here's a practical example - I've seen people use divs, and they've set specific properties on these to style them as a number; or they used the wrong thing, but if I'm trying to input a telephone number, what you should do theoretically is have an input with the type of telephone number, and that gives the users the actual keypad to be able to type in a phone number, as opposed to having to use the full keyboard to type in a number, which is kind of annoying on mobile.

\[00:19:47.24\] So it's better for screen readers, and it creates a hierarchy of information on your page. And what I see a lot of is that people try to slap ARIA on as kind of like a Band-Aid on their non-semantic HTML. You'll see divs with role="checkbox", and the ARIA checked attribute that they're updating... And this is kind of backwards, right? ARIA shouldn't be used as a Band-Aid for things; we should definitely be using the semantic HTML where applicable. So instead of using this div with these ARIA attributes, we should be using an input with the type of checkbox, and it's all this stuff baked in, so we don't have to worry about updating those.

I found this to be quite interesting... I'm not sure how familiar you all are with the nitty-gritty of ARIA and accessibility, but I've found this to be really relevant and helpful in getting started.

**Kevin Ball:** Yeah, I have seen that article as well, and what I loved about it was this emphasis around ARIA being a tool, rather than the solution. You need to be thinking about this holistically. I saw another related article somewhere that was just highlighting how much we basically get in our own way when it comes to accessibility, because we just keep trying to reinvent the wheel, where the browser will do most of this for us, if we let it.

**Emma Wedekind:** Yeah. And there are certain things that don't exist in HTML yet, and that's where ARIA can help fill in the gaps... But yeah, it definitely shouldn't be used as a crutch, it shouldn't be an afterthought; it should be something that we learn how to build our applications from the ground up using semantic HTML, and from that ground level, your app is already more accessible. Writing accessible and semantic HTML is not hard, it just needs to be prominent.

**Kevin Ball:** Awesome. Alright, Chris, what's your story of the week?

**Christopher Hiller:** My story is an announcement of a library. That library is called Pastel. Pastel is a framework which wraps essentially yargs, which is an argument parser, and it helps you build command line apps, essentially. So it wraps yargs, and it wraps something called Ink. If you haven't heard of Ink - that basically allows you to create React components, and the renderer is your terminal, it's not a browser or a mobile device, or Windows 10, or whatever. So Ink is essentially React in the terminal.

Pastel looks like a pretty cool idea. Ink is just kind of this React layer, it's just this adaptor, but Pastel ties this together with yargs in a way that you can write components in React, and these components can essentially look like subcommands. So if you're familiar with Git, you would say something like "git commit", where if you were going to implement that using Pastel, the commit command would be its own component.

I think this is really interesting. There may be a bit of novelty to using React on the command line; there are certain applications where it makes a lot of sense actually, but what's really interesting, I think, is that you could package up a command and distribute that as a standalone module, because it's just a component, it's self-contained... So you could essentially pull a bunch of components down from Npm, and then smash them together into your own CLI. You could reuse commands from other developers. That looks really interesting.

You can't actually do that yet. I think there are some barriers to making that happen, but I think the potential to be able to compose CLI apps in this way is there, and I think that's really cool. I'll be keeping a close eye on Pastel.

**Kevin Ball:** That is really interesting. I was having trouble imagining why in the world I would wanna use React to do stuff in my CLI, but the composition aspect is kind of interesting. It forces this model that we know works well for how to compose independent pieces, and have \[unintelligible 00:23:49.17\] and that sort of thing.

**Christopher Hiller:** It works well for stuff, especially like if you were gonna implement Top, or something, which takes up your screen, and then it updates every couple seconds, or whatever. I think that would be a really great use case.

**Kevin Ball:** Right, that makes sense.

**Christopher Hiller:** \[00:24:08.17\] There's some others, too. It helps with formatting... But I brought this up earlier - it offers a Flexbox model, so I was trying to make it render a table, and it was not having it, so I have to look into that.

**Kevin Ball:** That is interesting. Yeah, CLI, but potentially actually using your entire terminal. More like \[unintelligible 00:24:26.26\] than what I might traditionally think of as a CLI, just interacting with one thing at a time. Huh. Cool.

Okay, so my article that I wanna bring forward was an announcement by Microsoft. We had an episode at the end of last year, I believe, where we were talking about some of the challenges in the reduced diversification of the browser ecosystem, and Microsoft going to use a Chromium-based Edge is something that is very much on our radar... But they've made a really interesting announcement just recently, that they are actually going to build Internet Explorer into that Chromium Edge... And here's why. There are lots of businesses out there that have these old, decrepit internal web apps that they use to run their business, and have for years and years, that were developed 10-15 years ago, nobody knows how to modify them, and they only work on Internet Explorer... And that has been one of the reasons why businesses have continued to force employees to use Internet Explorer in businesses outside the tech industry, and why it has refused to die.

Microsoft is saying, "Okay, we're gonna give you a browser that for those applications will behave like Internet Explorer, so you can use it... And for everything else it's actually a modern browser." To me, I was like "That's brilliant." It's using technology to solve a very non-technology, very human \[unintelligible 00:25:44.12\] business problem, but it will be a huge step forward in getting some of the last remaining, lingering people using really old, broken browsers out of that world.

**Christopher Hiller:** Does that mean we don't need to test in IE anymore?

**Kevin Ball:** It might...!

**Emma Wedekind:** That would be a blessing.

**Kevin Ball:** Yeah. So we'll see... Microsoft has been trying to kill IE for years now. Basically, ever since Edge came along, they've been trying to kill off an end-of-life IE and then failing. It just keeps lingering and lingering and lingering. And this to me seems to address one of the real use cases why that was happening.

**Emma Wedekind:** That's really cool. I'm kind of scared to find that there are applications that only work in IE... Like, what applications are those?

**Kevin Ball:** I think it's pretty much exclusively old internal business applications. This is the same type of thing like "Why are there still jobs for COBOL developers?" Some old, decrepit thing that was built years ago, and maybe one person knows how to maintain it (if that), and there's a striking amount of software like that.

**Christopher Hiller:** It might have to do with stuff like ActiveX and proprietary APIs, too...

**Kevin Ball:** Alright, so that I think wraps up our story of the week segment. Let's take another short break and then we will come back with some pro tips.

**Break:** \[00:27:11.02\]

**Kevin Ball:** Okay, welcome back! The last segment of today's JS Party - we are going to share some pro tips, talking about how you can make your life better, whether it's how you do your development, debugging, just general life tips... Anything along that dimension. I know we've expanded the gamut before, and we probably will again today. Let's start off with Chris. Chris, what are your pro tips to share with our audience?

**Christopher Hiller:** I've worked remotely for the better part of the decade, so I have some pro tips around working from home. Some of these are probably obvious, but... You'll need a home office. You need somewhere where you can shut the door and just essentially separate yourself from the rest of your family. You need this home office. You don't always have to work in the home office, but it needs to be available.

One thing I've found - and this is a recent upgrade for me - is an adjustable desk. I can sit or stand... That's great.

**Kevin Ball:** Yes... Yes.

**Christopher Hiller:** I love it. And another thing that keeps the work-life balance for me is having a computer for work and having a computer for not work. I'm on my work computer during the day; at the end of the day I shut the work computer, and if I want to do something else, I play video games, I do something, I will get my other computer... But that work computer doesn't get opened up until the next day.

**Emma Wedekind:** I need to do that... I have that problem where I'm really lazy; I got a new computer, but I haven't set up the same settings on there for my dev environment and whatnot... So if I wanna play around with coding, I'll just do it on my work computer, which I shouldn't do.

**Christopher Hiller:** Yeah, I will do that -- I have been doing most of my coding, if I'm coding in the evenings, which is not that often anymore, I'll probably just use my work computer, because again, I don't have everything set up on my other one... But mostly I'm just playing games on that other machine.

Another thing - invest in a decent microphone and some headphones. If your computer doesn't have a webcam, get a good webcam, because you're gonna be video-conferencing, or on Skype etc. a lot. So make sure people can hear you, make sure your stuff works every time. You don't wanna be screwing around, trying to get your audio set up right... It would be really helpful to make sure that you plug in instead of Wi-Fi, because that helps with video-conferencing, and such.

You don't have to dress up, but you should...

**Kevin Ball:** Get dressed... \[laughs\]

**Christopher Hiller:** ...be presentable. Yeah, you should get dressed.

**Emma Wedekind:** Yeah... \[laughs\]

**Christopher Hiller:** I wear comfortable clothes around the house. I go through slippers -- they're essentially disposable. \[laughter\] I just wear the hell out of slippers, because I just wanna be comfortable around my house, and when I'm working. I wanna be comfortable, not have to fuss with my clothes. Just wear comfortable clothes, be presentable, do things like shave and take a shower... This is stuff that I've forgotten to do in the past, and it's something I have to remind myself, "Oh, I should probably shave, so I don't look like a bum." Video-conference when you can. It helps you take care of yourself, essentially...

**Emma Wedekind:** That's funny, because every time I work from home I sit in a fluffy bath robe, and then when I have to get on my GoToMeetings, people are like "Why don't you turn your video on?" and I'm like "You really don't wanna see this dumpster fire of a look right now."

**Christopher Hiller:** Yeah... I mean, I've been there. It's something you have to work at, for sure. And then another thing is if you have issues with sleep, or don't get enough sleep, you will find working from home -- your bed is very nearby, and it can be tempting to use your bed for sleeping, during the day. I've found that if I make the bed, I am less likely to go try to lay in it. Make your bed. That's my tip.

**Emma Wedekind:** How often do you get out of the house? Because I feel like if I were to work from home, it would be my fortress that I would never leave. My husband sometimes doesn't leave the house -- he wouldn't leave the house if it weren't for me. I don't think he would go outside for like a fortnight.

**Christopher Hiller:** \[00:32:09.23\] Honestly, I don't leave the house that often, but it's more to do with my personality, that I'm kind of a recluse. I do go outside, and that sort of thing, especially after the workday is over, and on the weekends... But during the workday I'm pretty much always at home. I don't like to go and work from a coffee shop, because I find that it really affects my productivity. I like to be in my comfortable space and just totally zone out. That's how it works for me.

I don't think I could do the digital nomad thing. I need my comfort and my familiar space and my control over my environment.

**Kevin Ball:** I also work from home all the time, and on exactly that getting out thing - there's a habit that I've adopted that I now advocate to everyone... And it wasn't my intended pro tip, but it is an amazing tip... I try to once a day go for a walk outside, and during that period - living in a place with beautiful weather, or the place - I find something to be grateful for, and reflect on that as I walk. I'll walk outside, I'll be like "Oh my gosh, I'm so lucky to live in such a beautiful place, with beautiful weather", or whatever it is.

The thing with this is actually there's science behind this, which says it activates two things that make you feel better. One is just moving your body; being more active will make your body feel better. There's just the physical reaction. And two is it's shown that gratitude and practicing gratitude will make you feel happier, and it's one of the things -- if people are struggling, keeping a gratitude journal and various other things...

And working from home, it's like -- I get outside the house. I'll usually go walk somewhere for lunch. Or if I eat lunch in, I'll take a walk after lunch. But go for a walk, find something on that walk that I feel grateful for, and reflect on it. When I started this practice, it totally shifted my emotional well-being along a number of dimensions, plus working from home, it got me out of the house.

**Emma Wedekind:** Yeah. That sounds like a Brain Science episode.

**Kevin Ball:** It could be. I have a lot of those hacks. I'm gonna tell about one in a little bit, but I wanna hear your pro tip first.

**Emma Wedekind:** Yeah, I changed my mind like four times, but I finally settled on one that's quite relevant. I recently spoke at my first technical conference, which was simultaneously terrifying and also just thrilling... So I have a few tips around how to give your first technical talk. Often times people think that you have to be an expert on something to give a talk on it, and I would say that's just not true. Use it as a chance to learn a new skill that you've been wanting to learn for a while; you don't have to be an expert. People come to hear your point of view on something, and even if they are familiar with the topic, often they'll walk away having learned something new.

My biggest thing was I forget to breathe, so I recommend breathing when you give a talk, because it could be really useful... And having water -- I actually had to stop talking a couple of times and go take a drink of water, which wouldn't have been so painful if the table was closer... But I literally had to stop and walk over, and take a thing, and the whole process took a solid 20 seconds. It was fine, but I recommend having some water.

Also, it's really important to make eye contact. So don't just stare at your computer. Make sure that you're engaging with the audience a little bit. And then going back to the brief discussion we had on accessibility - make sure that your slides have a big font and enough color contrast with the projector to be accessible for everyone.

And then just two more... One is don't talk too quickly (I have this problem a lot), and especially if you're at an international conference, you'll get people from all over the world, so make sure you don't talk too quickly, which... It might be hypocritical. It might be hypocritical, because I'm sitting here talking really quickly... But yeah, try to talk slowly.

And lastly, just don't put a lot of words on your slides, especially if your content is really technical. Make sure that you use mostly images, or just a few words. Don't pack your slides full of content.

If you're interested in giving a technical talk, go for it. What's the worst thing that happens, honestly? I think you'll get more out of the experience than if you were just too afraid to do it, so... I highly recommend everyone try it out.

**Kevin Ball:** \[00:36:11.09\] Yeah, speaking is a great hack.

**Christopher Hiller:** Can you talk more about breathing? I have that problem, too.

**Emma Wedekind:** Yeah... It's really hard. I'm the kind of person -- like, if I know my subject material, I kind of just wanna get through it as quickly as possible. Or just my brain is like two steps ahead of my breathing, so after each slide, or after I made a statement, I would kind of pause for like two seconds and kind of let them digest what I had just said.

It also makes you seem more important, pausing for effect. While it lets me catch up -- people don't know that; they think I'm just pausing for dramatic effect... I'm like, "No, I'm seriously just trying to live over here."

**Kevin Ball:** That's awesome. Speaking is a great hack for introverts, because you got to a conference and you wanna meet people, but if you're like me, you're kind of shy. You wouldn't think that I'd be shy with the speaking that I do, but I am; and a lot of folks are. But if you're a speaker, people wanna talk to you, so you don't have to put yourself out there any more than just getting on stage, which as scary as it is, I find less intimidating than going up to people I have no idea who they are, or that I am excited to know but I don't know, and being like "Hi...!" But if you're a speaker, then they'll come and talk to you.

It's easy to connect with other speakers, because you're a speaker and they're a speaker, and you're gonna have the speakers' lounge, and you can just tweet at them beforehand and say "Hey, I see you're speaking. I love your stuff! I'm gonna be there, too!" It's great.

**Emma Wedekind:** Right. But no one will ever shut you down if you try to talk to them. We're all there to learn and to get to know people. The last conference I was at was React.js Girls London, and I've gotta say it was the most inclusive and friendly environment I've ever been to. It wasn't just women who were there; it was women speakers, which was pretty neat. But the environment was so inclusive, and what was terrifying is I was the first speaker, so I got up on stage, and the React and React Native core teams were sitting in the front row... And I had no idea that they were coming, so I just got up on stage and I'm like, "Okay, so Dan Abramov is sitting in the front row, watching me give a talk about React... What could possibly go wrong?" If I can live through that, anyone can live through any conference experience.

**Kevin Ball:** Awesome. Alright, I think I'm the last one with a pro tip, and I sort of teased this because I said I have a lot of brain hacks; this is also kind of a brain hack, and it comes from a personal growth guru that I follow, because I'm into that kind of stuff... Both woo-woo and not woo-woo; I actually prefer the not woo-woo that's backed by science, but take from it what you will.

Anyway, so there's this guy named Brendon Burchard, and he has this thing that he says - he says "If you think about a power plant, a power plant doesn't have energy, it generates energy. You take that and think about it for your own life." One of the biggest things for me in terms of my productivity, in terms of what am I getting done, in terms of being able to get out and interact with people and do things is like "Where's my energy?" And when I heard this and started thinking about it, it completely shifted my mindset about this. I should not expect my environment to give me energy, or other people to give me energy, or the project even necessarily to give me energy. I need to think about how do I internally generate energy, and bring it to whatever scenario I'm gonna be in. This can apply to more than energy.

I now have this self-mantra of the things that I want to bring into everything that I do. For me, those things are curiosity, joy and love. When I show up in my best self, it's because I brought those things to the table, and this concept shift of whatever it is that is your best self - and that's hard to figure out sometimes; it's very personal - focusing on the ways that you can generate that and bring it to the table, rather than expecting other people in your environment and whatever else to bring it to you. That has been revolutionary for me, so I wanted to share that as an idea.

**Emma Wedekind:** \[00:39:51.23\] I love that idea. I think in one of the JS Party episodes we talked about favorite books, and one of them was The Originals, and I believe it was in that book where they discussed if you're unhappy, you've got two options - you can just walk away, or you can actually bring something to the table and try to fix it. I'm a huge proponent of that, as well - you can't just expect the Universe or expect people to give you things, especially if you don't tell them that you have these expectations. You should bring things to the table, and things will happen upon you in return to those.

**Kevin Ball:** Yeah, 100%. And this is not to say stuff doesn't happen; bad stuff happens, and if you've had bad stuff happen to you, that can be really rough. I'm not trying to say that you can or should be able to generate these things in yourself all the time, however what I'm saying is for me the mind shift of going from "This is stuff that happens to me, somehow I was in really good energy today and somehow I was not" to "This is something that I at least have partial control over, and can work on myself and iterate and figure out what are the things that I do that help me generate energy and joy and curiosity and all those things." That was very empowering. So yeah, stuff does still happen to you...

**Emma Wedekind:** But it's how you choose to handle those situation that defines you and shapes your future... So yeah, I fully agree.

**Kevin Ball:** Alright. So that wraps up our pro tips, and this wraps up another episode of JS Party. Thank you all for joining, thank you for listening. Listen live every Thursday... I guess they tell you that in the after-show, but I'm gonna say it, too. Listen live Thursday, because it's so much more fun when y'all are hanging out with us and chatting in the Slack room, and everything like that.

Thank you Emma and Chris, and we will see you next week.

**Emma Wedekind:** Yay! Thank you.
