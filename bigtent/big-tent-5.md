**Matt Toback:** Hello, everyone, I'm Matt Toback. Hi, welcome to Grafana's Big Tent, the podcast all about the people, community, tools and tech around observability. I'm here with Mat Ryer. Hello, Mat.

**Mat Ryer:** Hello, Matt.

**Matt Toback:** Mat, I've realized something... We're locked in a battle, and I don't think that you realize that we're in it.

**Mat Ryer:** I didn't know we were in a battle. What kind of battle are we in?

**Matt Toback:** So for the last few weeks you've been trying --

**Mat Ryer:** I hope it's wits...

**Matt Toback:** \[laughs\] For the last few weeks you've been trying to figure out what my nickname is, because I've got two t's in my name, and then my last name starts with a t... And then I realized that it's the first to come up with a name for the other. So I think we've been doing this wrong, and I think that we can call you the either One T, or Uno T...

**Mat Ryer:** Because I just have one T in my name.

**Matt Toback:** Just one t, yeah. Uni-T.

**Mat Ryer:** Uni-T. Oh, that's actually quite cool.

**Matt Toback:** Uni-T.

**Mat Ryer:** That's a nickname I would actually adopt. It makes me sound like some kind of Marvel superhero.

**Matt Toback:** What would your superpower be?

**Mat Ryer:** Just do things just once... But I don't know; you just do something once, get it right the first time... That'd be a nice one.

**Matt Toback:** \[laughs\] I was thinking, it's like a superhero - you would bring people together, you would help people align for a common cause, a common goal... But no. You want to just make coffee right the first time.

**Mat Ryer:** No, I want to do those things as well, bring everyone together, peace on Earth, but I also would like to be able to throw a balled up piece of paper and get it in the bin the first time every time... You know what I mean?

**Matt Toback:** \[laughs\] Yes. Alright, so Uni-T, what are we here today for?

**Mat Ryer:** \[laughs\] Well, today we're talking about logs, and I'm very excited about this...

**Matt Toback:** Is that your Uni-T voice? \[laughs\]

**Mat Ryer:** Did I change my voice?

**Matt Toback:** I mean, a little bit. You went into a slight superhero cadence. A little superhero...

**Mat Ryer:** \[unintelligible 00:02:14.04\] You took your glasses off earlier and I didn't know who you were, so talk about --

**Matt Toback:** Well, that's fine. \[laughs\]

**Mat Ryer:** I always used to think Superman -- that's so unrealistic. Clark Kent is just glasses. It doesn't change you that much. But honestly, Matt, when you took your glasses off, I was like "Who's this bloke?"

**Matt Toback:** I was thinking -- the other day I watched the new Batman trailer... And I was like "How do all these people that are dating Batman not recognize the bottom part of his face?"

**Mat Ryer:** Yeah, I don't know... It's a good question.

**Matt Toback:** Well, do you have a costume or no?

**Mat Ryer:** Would I have a costume? Uni-T Man.

**Matt Toback:** Just Uni-T.

**Mat Ryer:** Uni-T. Oh. A costume? Yeah, it would be an all-in-one. Everything has to be about one... It'd be like a unitard.

**Matt Toback:** Oh, that's true, that's true. You wouldn't wanna have a two-piece. The internet would call you out for that.

**Mat Ryer:** Yeah, exactly. You could be in it as a baddie, with a three-piece suit,

**Matt Toback:** That's right.

**Mat Ryer:** Because you've got the three -- yeah, I feel like we're on to something here. I'm just gonna make a quick note - how do you spell "unprofessional"?

**Matt Toback:** \[laughs\]

**Mat Ryer:** Oh, \[unintelligible 00:03:15.03\] Google knows... Um, yes, I'm very excited about talking about logs, because it's one of those areas where as a programmer you start off using them really just for yourself, and then as systems grow and get bigger, they become then kind of a serious thing that you sort of have to pay attention to. They sort of get too big. And who else is better to talk about this, especially after all the superhero talk, than the lead on the Loki project himself, engineer turned manager, Ed Welch. Hello, Ed.

**Ed Welch:** Hello!

**Mat Ryer:** Welcome to the Big Tent.

**Ed Welch:** Thanks. I really wanted to hop in on that... I had some thoughts on what your outfit should be, but I wasn't introduced yet... \[laughter\]

**Mat Ryer:** \[03:59\] Well, what would you say? What should my outfit be then?

**Ed Welch:** Well, I feel it should be like maybe a combination of a onesie and a T-shirt; you know, like a Uni-Tee...

**Mat Ryer:** Oh, yeah, yeah. Mm-hm.

**Ed Welch:** So basically a onesie with short sleeves...

**Matt Toback:** I'm definitely getting the visual...

**Mat Ryer:** But wouldn't I look slightly unusual, maybe?

**Matt Toback:** Not for a superhero. Not when you're \[unintelligible 00:04:22.27\] Because think about -- like, if you went to the superhero bar and looked around, you wouldn't look ridiculous in a costume. But if you went to a normal bar and you were wearing a superhero outfit, everyone would try to look. "Oh, who's that guy?:

**Mat Ryer:** No, fine. I don't mind looking different to normal people, but I'm just thinking of the Marvel poster. You've got all these very muscular, and -- people are very athletic. And then there's me on the end with tights and a big T-shirt on. I feel like I'm not gonna fit in there.

**Matt Toback:** They have to be one though. They're integrated.

**Mat Ryer:** Oh, yeah. \[laughs\] Nice. Okay, so Ed, tell us a bit about how you got into logs, and your background with it. Because you weren't always in engineering, were you?

**Ed Welch:** Yeah, I did start my career as an electrical engineer, and I've always really enjoyed hardware. I really liked the areas that sort of software meets the real world. But I don't know, I either lack the attention span, or the attention to detail... Iteration cost is high, so if you design a circuit board and make a mistake, reworks are expensive, they take time...

**Mat Ryer:** You could do with Uni-T there coming in and getting it right the first time...

**Ed Welch:** Seriously, right? Like, you'd kill in the hardware industry. \[laughter\]

**Matt Toback:** Like, "How did you channel your powers?" and you're like "I made a sensor."

**Ed Welch:** The second part of that -- I don't know. It's one of those things that you look back afterwards and it feels good to solve a hardware problem, but the process is extremely tedious. You're usually using oscilloscopes, or often it was blinking LEDs to try to understand if the code that I wrote was working... Hooking up debuggers in systems is possible, but often tricky... And I sort of started working more into software. I was writing C, and embedded systems... I actually started writing some PHP for business systems at this small company that I was at, and I started to realize, "Man, my crappy code is a lot easier to work with when I can log stuff and run debuggers." I don't know if PHP has a debugger, I don't think it does, but you know, you log things and figure out what's... I apologize, I don't mean to offend anybody. I have nothing but nice things to say about PHP; despite what everybody else says, it was great for me.

But yeah, so I've become very appreciative of how much information and how quickly you can get out of a running program through a log statement. And since then, my career has largely moved towards software, and completely software. And then I ended up building and working on a log aggregation system. Now logs are my life.

**Mat Ryer:** I share that. I also love it when software reaches out into the real world. But it is always very complicated. One of the nice things about software is how malleable it is, that we can iterate quickly and change it, and all that... And in fact, I don't use a debugger when I write code. I write a lot of Go code normally, and there are decent debugging options that you have. But for whatever reason, I just log things out. I will just print things out. That's logging, isn't it?

**Ed Welch:** It's funny to me though, because -- it'll ruin my character here, but man, I love a debugger... \[laughs\] Log statements are great, but if you can wire up a debugger, that's so much quicker to me... But there are a lot of cases, especially when we run in complex distributed systems and wiring debuggers into containered environments is possible, but tricky. So yeah, often the tool that is the easiest to reach to, and one we're all familiar with, is just logging some garbage to a log file and leaving it there forever.

**Mat Ryer:** Yeah. Well, I think for devs, a lot of people kind of -- I don't know, we start off, as you... Yeah, I want you to say that thing you said earlier, about the first program...

**Ed Welch:** \[08:16\] Yeah, that the first thing that every programmer ever does is write a log statement. Hello World is a log statement. And so the very first thing we ever do is to see if a program works. Maybe the reason why I like that interaction with the real world, with programs, is because when a program is running, if it doesn't log anything, or have metrics or another output, you have no idea if it's doing anything, or what it's doing. It exists somewhere, and it runs... So log statements are the kind of first and easiest, and the one that have been around forever, for how you get some idea if your application is even running or doing anything.

**Mat Ryer:** Yeah. So it's familiar then, I think, for most devs, what logging is. We're literally just talking about printing information out. And when you're writing a program and iterating on it and trying to get it to work, that's a great tool for that. And then the question is - because you end up sometimes with quite a lot of stuff being written out there at the end... Do you go back through and just delete it all, and then only start to log bits you need as you find out in the future? Or do you log everything and just ignore the things you don't need? And then of course, at scale that starts getting complicated and expensive. So what's your approach with that?

**Ed Welch:** Are you asking me personally what I--

**Mat Ryer:** Yeah, what do you do?

**Matt Toback:** Kind of, yeah. There's a part of me that thinks -- it seems like everyone makes these decisions independently. So yeah, what's yours?

**Ed Welch:** So it's been a little bit of all of those things. I definitely have created systems where I've gone back through to iterate over the log lines to make them follow some practices that we can talk about, to make it more useful. But I can guarantee you that there's some debug lines out there with git-blame with my name on them that have zero value, because they lack in context, or they just explain a thing that you know that I needed to figure out at a time, and I didn't go back and remove it... So it runs both. I mean, I do try to -- so I've come up with some things that are good practices, that I try to adhere to, to make it a little bit better for everybody.

**Mat Ryer:** So how early do you think we should be as devs? How early in the process should we start to think about the logging strategy? Should we be thinking about who the user is of logs from the beginning?

**Ed Welch:** The interesting part there is that it's probably one of the things that we're most familiar with, and then something that we really don't think a lot about at all. It is an after-the-fact thing where you go back and now realize "I have way too many logs" or "I can't understand them." So thinking about it upfront and trying to build up some ideas for how to approach them is definitely gonna help everybody. So you really probably should think whenever you log something "What is this log line gonna be used for? Who's gonna use it?" "What level should it be logged at?" - this is a hard one. We can talk about that, too. But it really helps to think about what the lifecycle of that log line should be, how can it be useful in the future... And if it's not; like, do you really need it?

**Matt Toback:** Are log levels used -- I know we'll get to this, but... Well, actually, can you just help me understand what's a log level?

**Ed Welch:** Yeah, good question.

**Matt Toback:** You were like, "I hope I get through this and nobody asks..."

**Ed Welch:** \[11:46\] Yeah, well, it's funny - so every programming language has a sort of different definition of levels. I think the range runs from something like trace, debug, warn, info, warn, error, and that's kind of the severity. Most loggers let you choose a severity that you can log at. So if you said "info", only info, warn and error logs would be displayed. If you said "trace", everything would be displayed.

**Matt Toback:** Are those generally agreed upon, or do you kind of pick and choose which ones you care about, in the same way that you would pick severities of support tickets? I feel like I've been on teams where you pick like 15, which then it basically means nothing. Or you pick 2. Is everyone using the same levels?

**Ed Welch:** No. Nobody uses the same levels, and nobody can agree on how to use those levels. \[laughter\]

**Mat Ryer:** Yeah, no two people have been found so far... I agree.

**Matt Toback:** We need unity in log levels...

**Mat Ryer:** Well, actually, on that subject, I tend to use two levels. So just so people know, each log line gets a level. So you're deciding -- you're basically tagging a log line to say either like "This is an error." So this line represents an error, that something's happened. That's very useful.

And you then have another level that's maybe like for just information -- or warnings are also in there too, but... You know, it's difficult to separate out those different levels. And I always try and go for as few as possible, and I usually get away with two, which is either an error, or this is just sort of info. And then sometimes you want extra bits for debug and things when things are really going wrong, but...

**Matt Toback:** So now you're talking about three... Oh, man. Slippery slope. Do you see -- this is off-topic a bit, but... How long someone's been a developer, how senior they are - does a junior developer use all the levels, or sets everything to errors, and then the more senior you become, the more you hone in and decide what an error actually is, and the rest just goes into warn?

**Ed Welch:** Good question. I think my experience there would say that everybody sort of develops their own patterns, and they tend to maybe mature their pattern or change their pattern over time, but everybody sort of comes with their own conclusion of what levels should be logged. Even what should be contained in the log line. Some of the things I would touch on about what should be in the log line - I think more senior people will recognize the value of that. But when it comes to what level to log things at - I think there's generally little to no agreement.

I have an opinion, for example, that an error log line should represent a problem in your system. So this is a thing that I'm gonna go search my log lines, because it's gonna help me understand why something is wrong with the software that I wrote. A warning log line would indicate an error in somebody else's system. So either I'm getting bad data in from an input, or I'm getting a bad response back from another API that I'm calling... But it helps me understand why somebody else might be having problems, or how to give them information. But you know, I don't know if anybody would agree with me on that. There's certainly not a body of standards here for this kind of thing. People tend to look at things and be like "Yeah, that's an error, that's a warning", or... It makes sense, I think, to limit the number. Having like 16 levels for varying log lines - I'm not sure how you differentiate that; what's the difference.

**Matt Toback:** Yeah, "Super-duper-bad error." \[laughter\]

**Ed Welch:** Right. The approach of having two is not unreasonable, separating... But there's another thing too, which is the type of logs. So we can kind of jump into the weeds a little... Not all log lines are the same. We've talked so far about log lines that you would use for understanding what your program is doing, as a debugger, or as a human debugging it, to know if it's working properly. But most of the log content in the world are things like access logs. It's an event in time where a resource was requested, or an order was created.

**Mat Ryer:** \[16:06\] Is that for like auditing purposes, and things like that?

**Ed Welch:** Yeah. And then those often have much different use cases, like business intelligence, or security, or just understanding -- well, I guess that's business intelligence; how often is a thing used, or a resource requested, what are maybe some metrics on response time for different resources and different paths... These things get logged at tremendous volume, they're very uniform... And we don't really have log levels assigned -- you know, the log level concept I've just described doesn't include something like audit log or access log. So I think there's maybe room to think outside the box here a little bit.

**Matt Toback:** So what I'm learning is that logs are everything and anything, basically. \[laughs\]

**Ed Welch:** Yeah. And then we can talk about structure, or the lack thereof... They literally can be anything, in any structure.

**Matt Toback:** Logs are like the air that we breathe. It exists all around us.

**Mat Ryer:** It kind of does. And the thing is - we were talking about those levels being different, and different types... Does it depend a lot on the use case? Does it depend a lot on your specific system? Is that why there isn't any kind of common, agreed things?

**Ed Welch:** Good question...

**Matt Toback:** Oh, it also feels like a nightmare to inherit anyone else's code... Is that true also? Is it a nightmare to be like "Oh, how did they figure this out?" Go back to what you're saying, but that just feels like a disaster, to pass things around, if everyone is making decisions separately.

**Ed Welch:** Yeah, I don't know... I don't know if I remember what I was gonna say. I don't know if a universal -- I think you could relatively standardize logging approaches. I think you could have a best practices that was taught at the university level, or intro to programming levels, to help with this.

I think maybe the thing we should teach people or people should think about is that there's a cost associated with a log statement. As we all learn the costs associated with software, and you hear software development lifecycle - this is true for a log line, too. What's the lifecycle of the log line you wrote? Sometimes I write logs because I have no idea what I'm doing, and the thing doesn't work, and I have no idea why, so I just spray log lines all over the place, trying to figure out--

**Matt Toback:** Or use a debugger...

**Mat Ryer:** That's cheating...

**Ed Welch:** \[laughs\] But those should be removed, right? They shouldn't survive once you've fixed the problem, once you know how to make it work... But things like every time you make an API call or a database connection, or you interact with something and it can go wrong - those log lines are very important, and need to live for a very long time. So thinking about what content goes in them is really important, and it's not something that I think a lot of people think about. Like, database connection failed - off we go, you know? You think about the person on the other end of that, that just got paged, and they pull up that log line and it's like "Database connection failed." Like, okay... Is it gonna retry? Do I care? I mean, it's good that I have an idea what went wrong, but what should I do about it...?

**Mat Ryer:** That's interesting then... I'd love to get into more, because I feel like -- I'd love this episode to actually just be packed full of useful tips and tricks for devs as well... And Ed, you're a great person for this, because you're on the side where you're really paying attention to logs. In fact, you're working on Loki, so your experience is great.

And Matt, to your question earlier about is it a nightmare with other people's code, and stuff - basically, what happens is you just ignore the logs. You're sort of ignoring them. Or it's very common when you're working on something to put lots of stars at the beginning of the line, to sort of draw your attention to it, in the stream of noise... That's what it feels like.

\[19:53\] It's funny, it is kind of like almost as if it's an afterthought all the time, so it's very interesting to me to change that and start to think "What's our logging strategy upfront?" And like you're saying, Ed, that log line - how do you make it useful to somebody? Like, can we just put like a runbook link in for a certain error, and things like that?

**Ed Welch:** I'm even just feeling anxiety on this idea that -- so if you're just ignoring most of it, that's still noise. I don't care about the cost, I don't care about the cost of storage, I don't care about anything, but it just feels like it just adds so much noise to what you're trying to look at and what you're trying to focus on. You're like, "Oh, no, I only look at this, and I only look at this. Something with six stars at the beginning is important, but something with five stars - oh, that was Ed, but now it's Matt's time..." Like, it's too much.

**Matt Toback:** I recommend -- now my go-to is Unicode emojis to get attention to my log lines.

**Ed Welch:** Uni-T emojis.

**Matt Toback:** Yeah.

**Mat Ryer:** Like a poop emoji for errors... \[laughter\]

**Ed Welch:** It's nice to be able to search...

**Mat Ryer:** That's a good idea, actually.

**Ed Welch:** One thing I can say -- this is very true, and something that is operating as like kind of a log aggregation solution... You know, earlier in my career when we didn't have hundreds of servers we had machines that had names, and you'd log into them, you'd SSH into them, and you would tail files, or cat files. And what you would do - you would \[unintelligible 00:21:13.00\] everything. You'd just start removing things that are stuff you don't care about. You'd look at the line and you'd just start -- so at least for me, that was a pattern that I was very familiar with, and it's something that I think log solutions should probably try to adopt, to give that familiarity with the command line, to be able to say "I'm looking at just garbage. I can start picking off things that I know don't matter to me right now, and just filtering them out, to start reducing the result to something that's hopefully gonna help me understand what I'm looking for."

**Mat Ryer:** Yeah. So you see, knowing that upfront, I think, can help them. So now we're thinking, when we write our logs, we're gonna enable that by deliberately thinking about the kinds of things we want to do later. And maybe you could give us a little intro to what structured logging is. Because this is something that I don't know -- I suppose this gets taught, but I don't know, and it's quite new, I would say; relatively new. What is structured logging, and do you recommend it?

**Ed Welch:** I'm laughing because I have an opinion here... It's actually changed a little bit over time, but... So structured logging is basically you wanna log something in a format that's machine-parsable, machine-readable, in a relatively easy way. I don't have to write a regular expression with matching conditionals and things moving around, right? I wanna make it very easy to either match a specific pattern, or logging something that's in a serialized format, like JSON.

There's kind of a hybrid that is common in the Go world, logfmt. So it's a key-value pair, but it's also structured. That's nice, right? Having things be machine-parsable is great, because we do a lot of stuff with our logs, with machines. Like business intelligence - trying to know the number of orders that we processed that succeeded or failed, or generating metrics, and things. But there's an interesting crossroads here, which is that logs also need to be human-friendly. We have to go through, from time to time, and actually look through our logs, and -- this is where I kind of come at odds with JSON as a log format, because it's not human-readable. It's not. And you can pretty-print it, but what you've done is you changed what was horizontal space for vertical space. And if you're trying to scroll through thousands of log lines, you've taken something that was one line and you've made it 400 lines, or 20 lines.

\[23:42\] I think it's fine to log JSON; I'm not gonna say don't log JSON, because it's ubiquitous, and all of the logging tools work with it well. So definitely use JSON, use structured logs. But my only opinion here is keep the objects really simple. Don't do complex, nested JSON objects in your log lines. Keep them very flat, and try to split that difference of having it still be somewhat parsable by a human, and also machine-readable.

Like, if you need to log complex data, do it in a way that machines work better. Use a database, or store it someplace else. Or log, you know, 500,000-line JSON objects; I don't wanna tell you what to do, but... \[laughter\]

**Mat Ryer:** I love the fact that you used fmt... Anytime someone says the word "fmt" outside the Go community, it elicits an interesting reaction, so I'm really happy that you did that before I did... So what is logfmt then, if JSON's not your preferred --

**Ed Welch:** \[laughs\] Is this real? Do people say this out loud? Like, when a bunch of Go people get togehter, they just go like "Fmt, fmt, fmt..."

**Matt Toback:** I've only ever heard two people say it, and Mat is one of them, so...

**Mat Ryer:** We don't chant it though. It's not like the Order of Gophers --

**Matt Toback:** At GopherCon it's just chants that emerge just out of nowhere when six or seven gophers get together...

**Mat Ryer:** Yeah, everyone's just in some ancient robe, and it's all very mystical... No, not at all. If anything, it's science-based. \[laughter\] But yeah, we do say fmt though... Well, I do... It's weird. Ed said it first, so... \[laughs\]

**Ed Welch:** I coined it, yeah. I was the first.

**Mat Ryer:** Yeah. Have a go at him.

**Ed Welch:** So logfmt is --

**Mat Ryer:** What is it?

**Ed Welch:** It's a key-value pair that's space-delimited, and then the values are wrapped in quotes if they have spaces in them, and then quotes are \[unintelligible 00:25:33.10\] inside of that if they have quotes within the quotes... It's structured, but what I like about it personally is that it removes the curly braces and a lot of the commas and the quotes. It's a little bit more condensed, and it's definitely easier to scan as a human trying to read log lines... Within extents though; because if you have 50 key-value pairs and it's gonna line-wrap, it still presents some challenges. But I still think it's a little bit easier to read than JSON objects. Like I said, JSON is -- it's always better to have some structure than no structure. The worst scenario is having all of these log lines that have just no way to easily parse them with a machine after the fact without writing regular expressions.

Probably the most common structured format - my favorite is the Apache Common Log... I don't know if it's -- if you googled Apache Common Log Format, you would see it. But my favorite is there's nothing common about it at all. It's --

**Mat Ryer:** Other search engines are available...

**Ed Welch:** \[laughs\] You can define it any way you want, and include any number of things that you want. Everybody's usage of it tends to be different, because - you know, do you want response times in there? Do you want headers? Do you want cookies? But it's most commonly found in server access logs, like NGINX or Apache, obviously. And that can be fine too, as long as your definition of it is consistent, and then you can write a -- Loki has a thing called a pattern parser, which is an easy way to do this... But regular expressions, something that's easy to be able to write to pull the values out of it, to parse them at query time, or... Depending on your log solution, you might parse them \[unintelligible 00:27:10.26\] time too, but just make your life easier by trying to consistent your format.

**Mat Ryer:** Yeah, that's interesting. That again speaks to me as though like it's gonna depend in everyone's case what you log. Are there any common things that you think we should just always put in the log line? Is there anything that's just sort of low-hanging fruit that we should all be doing?

**Ed Welch:** Yeah.

**Mat Ryer:** Tell us them, please. Now. \[laughter\]

**Ed Welch:** \[27:38\] The one thing that every log line needs to have - with a couple exceptions - is some context. Good examples of contexts are something like a trace ID, an order ID. Something that's very -- what's the word I wanna use here...? Like, unique, I guess. \[unintelligible 00:27:55.19\] are good examples. You want to be able to search for all of the events across your huge distributed systems (or not) that correspond to the flow of a thing through your system. And if you don't log an order ID, or a request ID, or a trace ID, or something, all of the log lines that were part of that that don't have that context are useless. You'll never find them, you'll never be able to understand if they were related or not... And they really shouldn't be logged at all at that point, I guess. Or multiple of those things, too. You know, user IDs, \[unintelligible 00:28:32.13\] IDs, and all of that stuff. Make it easy for yourself to correlate your logs. So that would be probably the biggest one.

I did mention there are some exceptions... You know, we have log lines that say "server started", "server stopped" - sort of higher-level systems, you know, they're not correlated, and it's more to the application itself... I'm sure there are others, but generally speaking, if you're writing a log line and you don't have some unique context going in it, you probably should be figuring out how to add it.

**Matt Toback:** Yeah. That makes a lot of sense. And also, then it operates in a vacuum at that point, where you have to go and try to make those connections or correlations yourself, independently. So that makes a ton of sense. And think about even in a troubleshooting workflow - basically, without a clue of where to go next, it feels like it'd be frustrating at 3 AM.

**Mat Ryer:** Yeah. A great man once said "A log line without context is sad and useless." That was Ed. \[laughter\] Pop that on a T-shirt, straight away.

**Ed Welch:** I have a picture that I had in a presentation; it's a picture of some trees cut down, and somebody spray-painted sad faces on... And it was like "This is my sad logs picture, so you can visualize that now."

**Mat Ryer:** There you go. Yeah. That is emotive. And yeah, you talk about also - not just the context, but then what other help... I love the idea, and I've done this a few times in the past myself, where I've made -- I actually deliberately made the errors quite funny and silly... And quite conversational. Imagining a developer seeing this error; just having a little chat with them almost, in the error message... So it's kind of like a little bit unnecessary, but... I did then start to say "Try this, try this, try this..." and link to things... It got very -- it actually turned out to be quite useful. Something that started as a joke. But I suppose - do people do that? Is that good practice?

**Matt Toback:** But you know why it feels different though, Mat, about what you're saying, and the way Ed's talking about it? It's almost like you're doing it for the audience, in some way; or it sounds like you're doing it for the audience, so the expectation is that someone else is gonna have to deal with it. But then a lot of where logging starts is trying to self-serve. And you're like, "Oh, I know what that is." And that's interesting. I'm curious if that really is just a difference in approach, or if that's something that as the piece of software gets more mature, then you start thinking about "Someone else is gonna have to deal with it, so therefore I'm gonna change what the logging is, and therefore what they can do with it." I don't know. Ed, is there room for both of these things? I guess there is, right?

**Ed Welch:** Yeah, I think -- well, I think you've both sort of hit on a thing that... I think this should be a practice, and the way we've talked about logging so far is how we tend to do logging today, that's probably not including that kind of practice... Which is that idea of "Who's ever gonna read this message in the future? Who's gonna read this message, and under what context are they gonna read this message?"

So for error logs - that's probably the most obvious to start with, but the more that you can give some useful information in your error log... That means the less someone has to copy that error log, open up their editor and search the codebase for that error message to find the code that generated it, to try to figure out what they're supposed to do. So when you write that error message, write it for your future self, if you're running your own apps that you build. Like, what do I do about this? What happens if this error message fires? Or what is the application gonna do about it for me, so that I can go back to bed, or whatever?

\[32:07\] Another way that I would say too is like error messages that end up being propagated through APIs - the same thing; if a user of your system gets back an error, what should they do? A 500 error - what do they do about it? Do they just try again? Do they contact somebody and ask for a limit increase?

As much as you can make the errors prescriptive saves everybody time. Mat, you mentioned -- Uni-T, you mentioned the runbook approach...

**Mat Ryer:** \[laughs\]

**Matt Toback:** It's gonna stick... \[laughter\]

**Mat Ryer:** No, it's not. I could see in his eyes when he said it, he was like \[unintelligible 00:32:47.09\]

**Matt Toback:** Okay, fine, fine. Alright, it's dead. Uni-T is dead. It's been killed.

**Mat Ryer:** He had that classic "This is not gonna stick" look in his eyes.

**Matt Toback:** It was fun while it lasted...

**Ed Welch:** But yeah, the runbooks - the risk there is what system did you define your runbook in. I think if you link to a Git repo with the application source in it and have high assurance that that's not gonna change over time, that could be a good for it. But when you write an error message, think about it more about who consumes that, than the problem you were solving when you wrote it. Think about what is somebody gonna do in the future when they get paged, and they're scrolling through error lines or whatever, or debugging a problem - how can they make use of that?

My favorite is - I've seen error messages that say "Corrupted something or other." Like, that sounds bad... \[laughter\] "Uh-oh..." Right? And it's like, "What do I do?" A lot of times I just hope it goes away, right? It could say that; be like, "Corrupted block. Well, try again" or "Delete it and we'll recreate it" or "You're really in trouble. I hope you had a backup."

**Matt Toback:** All I keep thinking, Matt - we chatted a couple days ago, I think we were talking about UX, and maybe about some of the stuff you're working on... And then you were talking about even just the UX of APIs. And this is all I can think about here; it's the same thing. Almost like "What's the UX of logs?" Like, who is gonna consume it, and what are the circumstances in which they are going to try to deal with it? Just thinking about who your user is.

And there's a part of me that feels like I'd get a groan if I said that out loud to people, and being like "The UX of logs." They'd be like "Nope, I'm not listening to that talk." \[laughter\] But it kind of feels true.

**Mat Ryer:** Yeah. Honestly, I think that's right. To be honest, it's becoming for me a universal thing, where you should always think about who is the person that's gonna use this at the end? Because obviously, with structured logging, we're making it easy for the machines. And I do wanna dig into Loki a little bit as well later.

So yeah, they're for humans to read as well... So what's that human trying to do? You mentioned earlier, Matt, at 3 AM - logs are... One of the use cases, one of the personas is "Very tired and upset developer. Very angry."

**Ed Welch:** Yeah.

**Mat Ryer:** Yeah. Where they've been woken up by Grafana On-Call. Other tools are available... They've been woken up rudely by Grafana On-Call and told "Something's gone wrong." You're blurry-eyed... You know what I mean? You can't find your slippers...

**Matt Toback:** You're looking at a bunch of poop emojis and you're trying to figure out --

**Mat Ryer:** There's lots of poop emojis because Ed's been in there, emojifying all the logs...

**Ed Welch:** But you know, I wrote this log line at least... I don't remember why, but... \[laughs\] It's got my signature emojis on it.

**Mat Ryer:** Yeah. So even considering that emotional state of that person might change how you would do logging. That sounds kind of far-fetched, probably...

**Matt Toback:** I think this could turn into a rule. How many rules are there about logging, Ed?

**Ed Welch:** How many did we write down here? I don't know...

**Matt Toback:** 17? Alright, so let's add one more. "Be conscientious. Be kind in your logging. Think about a person."

**Ed Welch:** \[36:02\] I do like that idea, the "Throw some kindness aspect in there." Help somebody out that's got a -- a lot of times it's you. I don't remember --

**Matt Toback:** Yeah. Be kind to future Ed.

**Ed Welch:** ...much stuff, you know? \[laughs\] So I'm looking at these log lines and I'm like "Oh no, what am I gonna--" You know, I'm copying and pasting into source code, and I'm searching for it, and then I'm gonna read some code to try to understand what this block of code does, and what happens when it goes wrong, and what I should do about it...

The person that wrote that code and wrote that error message had that all in their head at that one point in time. They had all of that in their head, and all they needed to do -- it sounds simple, right? But put some of that... You know, it's self-documenting, which is another favorite \[unintelligible 00:36:45.10\] You know, document out what you do in your log messages. Capture some of what was in your head in your log messages.

**Mat Ryer:** I was once building a package for somebody. They were gonna consume it and build something else into a feature... So all of the error messages were just targeted to him. And I was just like, "No, Billy. As I clearly stated, you don't pass this here. This is the kind of ID for this one." And it was that sort of thing.

But really, thinking about who's the user of these messages and how can I help them - I think that does work, as a general rule. It's something that we probably don't do, because we're serving our own case all the time, and then we end up with logs by accident, which we then have to go and retroactively work on and fix.

**Ed Welch:** I don't wanna take us off again, but what happens then? So we're talking about this, and the more prescriptive you can get in the log, the more helpful it would be if someone reads it. But then the software is changing all the time... So how quickly does that very helpful remark become -- like, how quickly does it expire? And I know there's no answer, but I'm just thinking... If you got some sort of very nice and conscientious and kind message at 3 AM, but it was six months out of date and it put you down like a 45-minute rabbit hole that was no longer true - I would be triply angry... At past me, or at actual Ed.

**Mat Ryer:** Yeah... Honestly, because the logs are amongst the code, I think it's probably quite safe.

**Ed Welch:** So like it self-prunes. As the code changes, the logging changes...

**Matt Toback:** Yeah, with the caveat that this is a thing that needs to be taught, right? It's not uncommon when we go in and patch-fix some code that we are pretty narrowly focused on a few lines... And we fix it, and like - did you scroll enough?

This may be a function of how well modular or encapsulated the code is, but like did you roll enough down to see "Is there an error message that the behavior may have changed now because of the change that you made?"

Generally, I would say -- I don't know what to call you now, Mat with a single t.

**Mat Ryer:** Just Mat would be good. Just move that back to that.

**Matt Toback:** Alright... \[laughs\] But generally, I think it's encapsulated really well, and you don't have to -- it would be pretty reliable over time, because they're close together, and you're gonna be seeing... But there's some sort of mindset here - as long as everybody understands to look for log messages and clean up the campsite kind of thing...

**Mat Ryer:** It's a bit like testing as well. Testing can just get to the point where the tests aren't maintained, no one pays attention to them. People just only add to it, and things... You should really treat it like a first-class citizen and look after it properly. Same with logs. And as soon as I think we have that shift, if you have that little cognitive shift, I have seen the quality just kind of shoots up. Usually, it comes from pain. You're trying to solve a problem and you realize it's lacking, and then it's an active thing to go in and fix it. But you probably can save a lot of time thinking about this upfront, to some extent.

**Matt Toback:** It does feel almost lifecycle-related, right? Ed, you said it at the beginning... At the beginning you don't know what's working, what's not working, and you're sort of littering it, because you want insight. But then eventually, as it goes into production and it's more mature, I feel like that would -- calling that down would only be more helpful for actually keeping it up and running. And then it's less noise, it's less stuff... But that feels the same way about testing, right? You know, you start pulling that stuff out as you start to become more confident that it's gonna operate the way it's expected.

**Break:** \[40:22\]

**Mat Ryer:** These problems are all quite small when it's just you working on the project, on your laptop, or it's just a couple of you doing it. It's not a big problem, logs. Even if there's noise, it's probably not too much. It's when you start running systems at scale that suddenly all these logs really do start to add up, and it becomes quite a serious thing. Like you said earlier, there's a price to a log line. I don't think I've ever really thought of that before.

So when it comes to then storing logs, what do we do? Do we just kind of store everything and then make it searchable, or is that too expensive? What's the approach, what do people do?

**Ed Welch:** I think there's a lot of approaches, and there's a lot of solutions that exist for how to store logs. And I think where I usually start in -- and I think obviously I'm a bit biased on Loki, but I think why Loki is doing well and why it's a good fit for this problem is... Think a little bit about maybe what the access patterns are for your logs. Most of the time it's a write-once, read-maybe-never. That's the user, the developer, the operator use case. You tend to go look at these logs to answer a question or solve a problem, but lots of them go sadly unread, sadly unnoticed. But there are other use cases. There are the access logs, there's security use cases around things, like looking for patterns where machines are constantly looking and reading these things... So it does matter a little bit what you wanna do.

With Loki, we generally try to target the developer and operator use case. I wanna be able to go look up stuff quickly, find it, search it, find what I'm looking for.

**Matt Toback:** I was surprised, before we move off that -- and maybe this is where Loki took hold, but hearing, from talking to people, our customers, hearing how overnight sometimes the world would come down... It feels like one day someone looked at the budget and was just like "Logging is too expensive", and they just cut it. And they're like "Don't log." Or "Stop logging." And you're like -- it feels like the decision came from on high, and you're like "What do I do?" And I get that. There's no budget for it. But also, it just feels like of two minds that devs have to react to. They can't justify it, because no one was reading it, but then also they feel completely cut off by not being able to have it. Maybe that's exactly where Loki exists, but...

**Ed Welch:** Well, another part of that too is it is a scale problem. One of the things that I think has changed my mind a little bit about what we've done with Loki is maybe thinking of logs a bit differently. Like, it's not a search problem, it's a scale problem. Or rather it's a scale problem first, and a search problem second. So that's where the indexing of your logs becomes important. So if you take the time to build a complete index of all of the data that comes in - you know, you build a big index and you have to store it, you have to be able to load it... If your scale gets to a certain point, hundreds, and probably into the terabytes a day range, that index is now its own problem. It has to be loaded in and out of memory... So now you have a thing that can search really fast if you can give it enough memory and resources to use the index properly.

The approach with Loki is a big different here. This gets a little bit off topic, but I'll just touch on it real quick, where - intentionally, the index is kept small, and it's just some metadata around where your logs came from, to make it easy to find them. And then instead of having that sort of quick look-up, like a reverse index, like at the back of a book, that says that this word was on page 23, we have like a table of contents that says "This word is between pages 100 and 300", and then we just go tell 100 computers to go read all those pages at the same time.

\[44:14\] And obviously, that has a resource cost associated with it too, but with this pattern of... You know, we tend to infrequently look at the data - that cost is transient, and you can control it, you can set how much parallelism you wanna read at the same time, and you now store a really small index, that's easy to load in and out of memory, and you pay a transient fee for sort of searching that... And it can be really fast. It can be -- I mean, a full reverse index is very fast. These are apples and oranges in some regards, but when you start playing around with large scales and lots of data, parallelism is really fast, too. So it's kind of an interesting trade-off.

**Mat Ryer:** Hm. So why are the indexes in Loki so small then?

**Ed Welch:** Largely because it's just some key-value pairs. The tagline of Loki, of "Prometheus, but for logs", is largely based on the labeling strategy that we use within Loki, which is key-value pairs that identify a log stream, which is the sort of unique thing that we store. So logs come in as a stream, we bundle up those streams into blocks of a certain size, an then flush them and store them in an object store... So key-value pair is how you find your logs.

And labeling in Loki is probably one of the more important things to understand and do correctly... Because if you choose really high cardinality labels, if you try to put something like \[unintelligible 00:45:38.10\] you end up building effectively a reverse index. You end up having this label that will tell you exactly where all your log lines are, but now the index gets really big, and it defeats the purpose.

I've taken several attempts over time to try to change that mindset in a couple blog posts. This idea that yo don't need to do that. It's very intuitive for people to think of indexing stuff to make things fast, because that's how most databases have traditionally worked. And the trade-off with Loki is we use brute-force parallelism to make it fast. So we don't need the big index. It's a little bit hard to conceptualize, or just not what we're used to.

**Matt Toback:** Does Loki warn you? Does it get to a point where it says "Um, this might not be a good idea..."?

**Ed Welch:** So we control that -- within Loki, as an operator of Loki, there is stream limits. So for a specific tenant, if you create too many streams, you'll get 'stream limited', so that's a way you would have some awareness that you have too many labels...

**Matt Toback:** So the person who's operating Loki or who's admining Loki would be able to know that perhaps there's trouble on the horizon. Is that right?

**Ed Welch:** Yeah. You generally know pretty quick, because when you pick a label that has infinite cardinality to it, like IP addresses tend to have huge amounts...

**Matt Toback:** Yeah.

**Ed Welch:** You know, if you're extracting content from your log line into a label, under most circumstances you probably shouldn't be doing that. The exception to that is the other end of the spectrum, where if you logged all of your logs in one stream, if you had one label that said "job=logs" and you sent everything, Loki works by taking streams and charting them horizontally across compute resources. So if you have one stream, it only goes to one computer, and then it gets replicated for durability, depending on how you configure it. But you can't horizontally scale one stream. So there are times where we use labels to shard data more effectively, across more compute resources.

An example that I've used for that before is our NGINX Ingress logs tend to be quite high-volume, and we've extracted from those logs the label for the -- I think it's called the upstream, but in my mind downstream makes more sense... But the resource that the logs are ultimately going to, and that splits that log line now amongst those number of resources into separate streams, and then those can be parallelized over the infrastructure.

\[48:11\] If you think about it a different way, it's also what are good access patterns, or query patterns; it's probably reasonably intuitive that I would only wanna look for the logs from one of those upstreams at a time, so having a label for it also makes sense in that case.

So there's a bit of tuning there. We want ideally to be as intuitive and easy as possible, but there are definitely cases where you need to pay a bit of attention for getting that kind of right volume per stream.

**Mat Ryer:** So what are examples of good labels that you've seen in Loki then?

**Ed Welch:** Yeah, topology is a word that I think is right here. So the environment, the cluster, the application... In the Kubernetes world we use pod as a label... You could not, if you wanted. You could sort of condense multiple pods into a single stream, but usually even at tens of thousands of pods churning a day it's not too much for Loki.

Loki, with its current index, in our experience - you don't wanna churn more than maybe 200k or 300k streams in a day. At that point the amount of data going into the index starts making it quite big, the amount of work that we have to do to search it starts to become more noticeable... There's some work underway for us to kind of iterate over that index design to see if we can -- ideally, we wanna increase that by, say, like an order of magnitude and be able to get in the millions of streams a day... Just to make it easier for -- like, there are a lot of ephemeral workloads that exist in the Kubernetes spaces, where they can churn tens or hundreds of thousands of pods a day. We wanna make that easy to handle, too.

But the goal should always be to kind of think of labels as sort of an intuitive way to find your logs. So good labels are things that would come to mind. \[unintelligible 00:49:50.15\] I've been trying to figure out how to organize my life a little bit better; you know, like where to put stuff... I've got a lot of stuff; I like stuff. \[laughter\]

**Mat Ryer:** It is very popular...

**Matt Toback:** "I like stuff..." \[laughter\] \[unintelligible 00:50:03.29\]

**Ed Welch:** Right? But like, I still dabble a lot in hardware; I really still enjoy it, so I have a lot of parts, and things... So a lot of good advice that I tend to see about things is when you're trying to figure out how you would store your stuff, you pick up a thing and the first thought that comes to mind is "Where would I look to find it? Where I would look to find this thing?" So that parallels a little bit here with logs. Think of labels as like "How would you go find the thing you're looking for?" And that usually maps pretty well to a good label set.

**Mat Ryer:** Well, I always find that things I find -- if I'm looking for something, it's always in the last place I look, not the first...

**Ed Welch:** Yeah, I mean - you can build your Loki however you want...

**Matt Toback:** And also, now I'm thinking of the user again, right? So you organize your hardware shed, which now I'm picturing as a full-on shed outside your house, but...

**Ed Welch:** Yeah.

**Matt Toback:** You're like, "Oh, this is manufactured in Florida. I went to Florida in 1998, so that goes next to this other thing that reminds me of this other thing in Miami." You know, like - it makes complete sense. \[laughs\] I walk in there...

**Ed Welch:** Well, using your analogy, a better way to think I think would be like if I was looking for a rake where would I look? I would go to the garage or the shed? If I was looking for a plate, I would go to the kitchen. If I was looking for -- so try not to make your strategy so... I don't know what the word is for that, but...

**Matt Toback:** Individual.

**Ed Welch:** Yeah, exactly. This is probably a bad analogy, because that gets easier in practice... Because logs usually come from a cluster, they come from an application, they come from maybe a server, or they come from an environment dev, prod, tests... So - editor, edit out that analogy completely? I don't know... \[laughter\]

**Mat Ryer:** It doesn't work when you do it, Ed.

**Ed Welch:** It doesn't work for me? \[laughs\]

**Mat Ryer:** No.

**Matt Toback:** Alright, so then I kind of like this idea about whatever, organizing other stuff. But then what else can we do with logs? What's untapped yet?

**Ed Welch:** Oh, man. I'm glad you asked, Matt, because you can do everything. \[laughter\]

**Mat Ryer:** \[52:09\] What can't you do with logs would be a shorter podcast...

**Ed Welch:** Right?!

**Matt Toback:** Store IP addresses...

**Ed Welch:** Yeah... \[laughs\] Well, but you can, so --

**Matt Toback:** Well, it's true, yeah.

**Ed Welch:** Yeah.

**Matt Toback:** You just can't put in a label.

**Ed Welch:** Exactly. So one of the things that's been fun as we built Loki, and we use it to run Loki, so we monitor Loki with Loki - one of the great things about anybody that has the experience of using the tools that you build... It's a fantastic experience to have. So we use Loki, and we have logs for lots of stuff. But the one that I think has become the most interesting to us is query logs. So if you write a query to Loki, we log the result. And over time, we've created this log line. Metrics.go is usually what I find it with, with a filter pattern, because we log the calling file name. And in it s a whole bunch of stats around every query - so execution time, throughput, what the query was, what the type of query was, how long it was for... And basically, I can put infinite cardinality in a log line. I can put every metric, everything in a log line. So now I have infinite cardinality metric data that's indexed with a really small index though.

Loki is very good at visualizing... So with roots in the Prometheus query language, we use the same rate functions: count over time, sum over time, max over time, quintile over time... So you can slice and dice all of that metric data to view it, and now you can answer really interesting questions, like "What is the 99th percentile query time for a specific user?" Or a specific query type for a specific user. Or even specific types of queries of types per user. I don't know, I made that one up.

But I'd like to close the loop on this one, because there's a catch here, there's a gotcha. A log is a string, and we parse it, and Loki's quite fast, but if you wanted to search over 30 days, for example, your query logs - they could be terabytes of data. And we can parse terabytes of data in 20, 30, 40 seconds; it's doable. But there's limits. So what then I think becomes a nice complement to this is something within Loki you can do is write recording rules. So you could turn those log lines, with that data, into metrics. What's kind of neat about that is it does it in a way where you have a lot of cardinality reduction, because that can take all of my query logs and write a recording rule for the 99th percentile per tenant. And you know, maybe we have tens of thousands of tenants, but you can generally do tens of thousands of series in a metrics database like Prometheus.

So you can take that data that has this huge amount of cardinality, pull out the values that are interesting and turn them into metrics, because metrics have the distinct advantage of being a Float64, so searching over lots of them over long periods of time is way faster, and way more capable. So I think the combination of both of those has been more and more interesting to us. We spend a lot more time in this space now, trying to get the best of both worlds.

**Mat Ryer:** Yeah, that does get interesting when you think of turning logs into metrics. That really is quite interesting. And we are working on a blog post at the moment, because you can actually use that technique to use the Grafana's machine learning forecasting thing to predict and learn regular patterns in your logs, and then alert when you fall out of that. So we expect some level of errors always happening. And probably in some kind of pattern, as your usage kind of flows around.

So you can actually then build a model that predicts on the frequency of the word error, or maybe particularly "Record not found", something like that; something you care about. And then have the model predict the future, sort of forecast it, and alert on that, too. So I think logs into metrics is very exciting.

\[56:12\] I also got a bit excited when you talked about logging the file name, because then I was thinking - you could start to tie back into the dev experience real log example data. A log line - you'd be able to hover over it in your IDE, VS Code maybe, and see real examples of what that line has produced. And this is all about closing that feedback loop on making sure that we're thinking about the usage, what's the end point of these logs and visualizing that. It gets quite interesting.

**Ed Welch:** Yeah, maybe I spend too much time hanging out with log lines and things, but what we've talked about so far, like building some set of standards or some set of ideas around your log lines - those unlock a lot of potential for their use. And so the more useful that they are, the more you can offset the cost of having them.

**Matt Toback:** Well, you justify them. They're self-justifying, in a way.

**Ed Welch:** Yes. So having your logs be able to triage incidents for you, having your logs be able to give you information around the effectiveness of your system, and very granular levels, event-driven levels, and then aggregating those into metrics to have better visibility and reporting over time - it all sort of ties together. And then yeah, the machine learning use cases - I've played around a little bit with access logs, and error rates, and things... Like, can I look to see what the sort of normal error rate -- because we see normal error rates; people configure machines with invalid IDs and then leave them for all of time, right? \[laughs\] So we have a noise floor of failed login requests. But then that can change, so it's good to be alerted on that. Like, maybe we broke something, or maybe someone is doing something nefarious.

**Mat Ryer:** Maybe you accidentally fixed something. \[laughter\]

**Ed Welch:** Maybe I fixed something, you know? I do that every day...

**Matt Toback:** Accidentally fix something... Also noise floor. I like noise floor. So Ed, what did we hit? Because I think we're just about out of time... But let's take it to the bottom line. We decided that we like logs; we still like logs, right?

**Ed Welch:** They're alright. They're alright.

**Mat Ryer:** Ed spends all his time hanging out with them, he said. Some of his best friends are logs.

**Matt Toback:** Two, we think it's important to think about who's gonna be consuming the logs; if that's future you or someone else. That's critically important. And then what's three?

**Ed Welch:** Context. Make sure your logs have contexts. Specifically like an ID or something that's unique to link lots of log lines together.

**Matt Toback:** That's a good one, yeah.

**Ed Welch:** \[59:04\] We skipped this one a little, but make sure your logs are structured. Use a logger that produces JSON, or logfmt, or... I mean, non-XML, but...

**Mat Ryer:** Yeah. Not that.

**Ed Welch:** Probably not that. But you know, it's fixed space, with some things that make it -- because we live in this weird space where we have this thing that both machines and humans need to read as efficiently as we can, so we're really working with a compromise no matter what... But have a compromise that -- so if you do JSON, keep them simple, keep them small. And you know, every byte matters. I'm not saying write log lines that are shorthand, but be reasonable with the data that -- I think maybe I'm just picking on some cloud providers that we capture logs for, that we get JSON documents that are 30k, or something... Like, what am I gonna do with that? \[laughs\]

**Mat Ryer:** Wow...

**Matt Toback:** And then I like the little bit at the end there, which is maybe get creative, or keep an open mind about what you can do with logs... Because it's not this thing -- it's not decided. And being able to pull out elements of it, put it into metrics, get a little bit creative about how you alert or even how you predict on it... That feels exciting to me also, just because it's basically saying "Keep an open mind and still try and do more with it, because there's a lot more to do." I like that.

Alright - well, I think that's it. We've come to the end here. Mat Ryer, thank you so much.

**Mat Ryer:** Thank you, Matt Toback.

**Matt Toback:** It's a pleasure. And Ed Welch, thank you so much for coming and talking about logs, talking about Loki. There was so much today.

**Ed Welch:** Absolutely. Thank you.

**Matt Toback:** We'll see you next time on Grafana's Big Tent.

**Outro:** \[01:00:58.02\]

**Mat Ryer:** Yeah, I wrote a package once for somebody... I was writing something for them to implement, so it was like a pairing thing... No, it wasn't a pairing thing. Editor, please edit that; it wasn't pairing. I was working alone, as usual. Uni-T. \[laughter\]

**Matt Toback:** Did you say that was gonna stick? \[laughter\]

**Mat Ryer:** I'm starting to like it... No, I can't be called that. I can't be called that. It's silly. I was working on a project once for -- I was building a package for a friend of mine... At work... \[laughter\] Let me start the story again. It's difficult to explain... It's the simplest concept, but I'm really struggling to just explain this one. Let me have another go.

**Matt Toback:** And you said your power is to do it right the first time...

**Ed Welch:** \[unintelligible 01:01:51.24\]

**Mat Ryer:** After it's been edited, you'll find that is indeed the case. Yeah, editing -- make friends with the editors. That's my top tip.
