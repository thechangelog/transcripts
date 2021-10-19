**Mat Ryer:** Hello there, and welcome to Go Time. I'm Mat Ryer, and welcome to a very special fireside edition of Go Time, where we essentially just get very close to the microphone; it's very intimate... We'll be chatting with each other and asking each other questions, and also taking your questions. You can tweet at us. If you tweet at me, @matryer, I'll ask your question on the show, or you can join in the conversation on Gopher Slack in the GoTimeFM channel.

I'll introduce my fellow hosts today... It's JB, JC and JD. It's Johnny Boursiquot, Jon Calhoun, and Jaana B. Dogan. Hello!

**Jon Calhoun:** Hello!

**Johnny Boursiquot:** Hello!

**Jaana Dogan:** Hello!

**Mat Ryer:** How are we doing?

**Jon Calhoun:** I think we're all doing good. I hope we're doing good...

**Mat Ryer:** Well, I'm glad to hear it. I thought we could start off - this is something that I always wonder about other devs... Because of course, we're a busy bunch often; if we're lucky, we're busy... And sometimes we either aren't really able to do side projects, for whatever reason, in our companies or in our day jobs, or maybe we just don't have the time or the energy or whatever after doing a full day... Given that, if you could just have two weeks to build anything, to do anything in Go, what would you do? Say you've just got two weeks - or if you need more time, you can have it... It's really relaxed. What would you do? Is there anything in mind that you'd build, or work on, or is there anything you're interested in exploring?

**Jon Calhoun:** I guess I can kick this one off... Building something isn't necessarily something I'd do; well, I guess I'd build something... But what I'd be more be focused on is I'd love to spend some more time looking at different aspects of how we design code, and just spending more time on that... Specifically, I would love to actually build a project using globals, and all sorts of things; basically, just leaving globals everywhere... Like a global db connection, a global set of templates, things like that... And just set it all up and actually write tests for it to sort of show what that looks like.

**Mat Ryer:** Is that just to give Peter Bourgon an aneurysm? \[laughter\]

**Jon Calhoun:** No... If I had the time, what I'd like to is take that and then gradually refactor it to something that doesn't use the globals, and to actually see in each little refactor how that changes things, and actually see what changes, how the tests change, how you can actually tell what's required a little bit better in some areas... And maybe even in some areas I might find that globals weren't actually as bad as we made them out to be.

\[04:08\] Because I know in my own stuff there's a couple times where I'll do all this jumping through hoops to make globals not necessary, and at the end of the day I'm like "I don't know that I actually need it to do this."

I think the one example that always comes to my mind is whenever I'm building a web application where I'm generating HTML from the server, I will have all this stuff that I do to make my HTML templates not global, and if I just had a global registry of all my templates that were parsed, it probably wouldn't be that big of a deal... But you know, I try to avoid it for all these reasons, and then -- at the end of the day I'm like "I'm not really sure it's worth it", because when I go to read the files, I often require them to be in a certain file structure, or on a local file system in a certain spot to work anyway... And that might be configurable, but there's still limitations to it, and at the end of the day it's like "Is it really worth making it so they can completely customize the file structure of all these template files, versus just put them in the right structure"?

**Mat Ryer:** Yeah, that is an interesting point. We do talk, we tend to talk a lot in terms of absolutes, and we'll say like "Don't use global variables" as a general rule, because if you're just getting started or if you don't want to have to worry too much about some of the other aspects of code, then I can see why these rules help; they guide you and just prevent a whole class of problems.

But like with almost everything - and it's rare, and I don't know that there are even any where I would say "Absolutely, this is the answer to something." I think there is a lot of grey area, and sometimes yeah, a global variable is just so easy in the context of what you're doing... Like "This is just my little program that I'm gonna run, or just me and one other" versus "This is a big open source package." I think that would change things. But yeah, I could see sometimes that being the case. It's an interesting one. But Jon, you do a lot of teaching, don't you? So is your interest in that because you then want to teach people?

**Jon Calhoun:** It would partially be that, but I think it's partially just exploration for myself to see "Is it really worth doing it here?" Because I think we get in these habits of like "I do it this way because I've been doing it this way", and sometimes it's like "Are the trade-offs of what I'm doing actually worth it?" Spending some time exploring that would be useful for long-term, but it's just hard to find that time of like... And I find a couple hours to actually try these two different approaches and see which one is better whenever one is working, and you know, I've got a lot of other things to do.

**Mat Ryer:** Yeah, I think the same thing applies to testing as well, because I've been through all different kind of cycles of TDD and all kinds of things where -- there's been times when I've been very adamant that everything is red-green tested, so I would have a unit test fail before I write any of the main program code... And be very strict with myself about that. And I've found that it had some benefits. But of course, the trade-off was that the tests were so tightly bound to exactly what my program code was... It was a little bit like having a test for a CSS file that just says "This text color has to be red" and then in another file you say "I'll make sure that that text color is red." You're just saying the same thing twice, and that's not quite -- that wasn't quite useful.

Then I go the other way and look at "Let's do just end-to-end testing. Don't worry about the internals..." As long as the whole system works, I know it's working. That had, again, benefits and other problems. One of the downsides to that was you didn't get any kind of laser focus on where things had broken. You just knew that things weren't working as they should. You didn't have much help on where the problems were, or what the impact was that you'd had that was unexpected...

\[08:00\] I'll do the same thing with what you're talking about, Jon, so that we have a little project and unit-test it very tightly. Have the same project and just have integration tests, and then play around somewhere in the middle, because probably that's where the perfect solution is somewhere... Probably not a perfect solution, but a solution maybe.

Okay, anyone else? What would you build if you could do anything? Let me ask you this first then... Can you work on side projects?

**Johnny Boursiquot:** Let me talk to my lawyer... \[laughter\] Hang on, I have to text him real quick. Well, it's time, time... When you asked that question, I was just thinking "Man, if I had two weeks of uninterrupted time, what I would do with that..." And really, my mind immediately went to teaching, because that's something I enjoy doing a lot. But it's slightly different from the live teaching. Recently, I've been thinking about "Okay, you enjoy teaching, and you enjoy doing it live..." There's something about seeing that light bulb go on on somebody's face. There's something about that I just find magical. I enjoy that tremendously. But at the same time, I do realize that, okay, I'm still one person; how do I scale myself, so to speak? How do I do that, have a wider impact? At least the kind of impact I wanna have.

And I've been thinking maybe the way to do that is to dive into recorded courses, maybe like a YouTube channel and try to live up to the likes of Francesc and JustForFunc, or something along those lines... To try and -- I mean, I'm not gonna use grandiose terms like "change the world" or any of that nonsense, but basically just to find a way to reach more people I think is what I would like to do... So having recorded courses, and making some available for free, and making some copaid as well, because I do have a family to take care of, that kind of thing... But really, that's where my mind went - try to find a way to reach more people, and hopefully serve more people.

**Mat Ryer:** Yeah, the nice thing is when you teach somebody something, Johnny, you kind of enable them to do things that they couldn't do before. So you get this sort of exponential effect, and I think that's easy to overlook, but so important... So yeah, I think that's great. I've never been in any of your classes, but I have heard good things about them. Do you tend to do that at conferences then?

**Johnny Boursiquot:** Yeah, I do that at conferences. Usually a pre-conference workshop, and also I do the GoBridge workshops... Oh, actually this is a good time for me to mention that. If you live in the Baltimore area, there is a GoBridge workshop coming up on the seventh of December, next month. This will be my last GoBridge workshop of the year, and basically I just wanted to give the opportunity for those that are looking to enter the year with a new skill, provide the learning opportunity for them to do so... So if you are listening to this and you know somebody in the Baltimore Metro Area, DC, Virginia, that kind of thing, that could benefit from a full-day workshop to learn Go, this is a great opportunity to do so.

**Mat Ryer:** And how do they find out more information about that?

**Johnny Boursiquot:** Well, they would go to gobridge.org, and that will probably link them to the GitHub repo. I forgot we've changed that now... Actually, if you go on meetup.com and you look for the Baltimore Go Meetup, that is one of the events listed. So you can either google for it, or go to meetup.com/baltimorego \[unintelligible 00:11:57.07\] You'll see the event. If you are in the target demographic, I encourage you to sign up.

**Mat Ryer:** \[12:11\] Great. Awesome stuff. These are good answers so far. Another question I had was "What's the thing if you had to pick (which you do) is the thing that grinds your--"

**Jaana Dogan:** I still have to answer, Mat...

**Johnny Boursiquot:** Yeah, don't forget about Jaana...

**Mat Ryer:** Oh, sorry... I just assumed that you've--

**Jaana Dogan:** If we'll run out of time, it's actually okay... This question really hit me hard, because I have exactly two weeks at the end of this year to do whatever I wanna do. And the question is -- probably I will use Go if I wanna write code... And the question is "What am I going to do?" This is more of like an existential crisis type of question for me probably... \[laughter\] There was one crazy idea I had for a long time. I was wondering if it's possible to highlight some of the concurrency related stuff in a text editor.

Imagine if a library -- if you're making a call, it starts the goroutine, whatever... You just don't know from the API surface, but the goroutine just runs some stuff, and other goroutines, and whatever... I wonder if you can highlight in the editor that "Oh, some of the pieces here in this block is just going to run a different goroutine", or may run in a different goroutine, or whatever.

I was thinking about this dynamic tool - you just run your program, it maybe collects some profile or whatever, and then you apply that profile to your text editor and it gives you all these different colors. "This has been run in these different goroutines" and so on. So it helps you to -- it's not a perfect solution, but it could be a good experimentation point and may influence maybe some other people to work on this type of problem.

We had this discussion last week - there's no good way to say "Hey, I'm just going to run some stuff in a different goroutine." Some libraries are doing a good job documenting this, but some others don't. So that is an interesting area to work on.

**Mat Ryer:** Yeah. Would it look like the code coverage stuff, where the background changes color? So you might see -- red would be used for the main thread, but you kicked off a goroutine somewhere and you can see that code.

**Jaana Dogan:** Exactly. It's the same idea. You run the program, and--

**Mat Ryer:** Right.

**Jaana Dogan:** It only can capture -- just like the test coverages... Test coverage can only capture the tests you are running. It goes over those lines as it's running... So it's going to be the same. You run your program, it will only capture the cases that you actually executed, but it might give you some hints like maybe -- I don't know, maybe over time it could be an incremental thing. Maybe it could be even like a global repository of something. This is just a very rough idea, I just wanna experiment...

**Mat Ryer:** It sounds cool.

**Jaana Dogan:** Thanks, thanks.

**Mat Ryer:** I don't know his last name, I will look it up, but there's a great talk by [Ivan](https://twitter.com/idanyliuk) about visualizing concurrency in Go. I don't know if you've seen that.

**Jaana Dogan:** Exactly. From the GopherCon a couple of years ago, right?

**Mat Ryer:** Yeah, so if you haven't seen that, check that out. It is amazing. I chat to him every time I see him at conferences, and he was kind of talking about maybe even augmented reality or virtual reality ways of visualizing...

**Jaana Dogan:** You're just like basically running into your goroutines and all that stuff...

**Mat Ryer:** Yeah, you'd be inside somehow and see the things around you. Maybe you'd be able to actually see hotspots. I don't know if we could somehow visualize the contention, or something like that. Imagine being able to go and actually look and see heat spots of where there's things in contention, or something. I don't know, but...

**Jaana Dogan:** \[16:03\] Yeah. It was amazing just to see things in 3D, to be honest. I've seen visualization tools only in 2D... But it made so much sense, because you have one level of more dimension when there's concurrency. I think it was the right model, so I'm really excited about the virtual reality thing.

**Mat Ryer:** Yeah. It finally makes us look like the hackers from the movies as well. You know, the meme where it's like a 3D cube, and we'll complete the cube, and that's when we know we finished... There's no scope creep in that world... Everything's -- when the cube is done, we're done, and we can go home. That's all we want, isn't it?

**Jon Calhoun:** Is that what you would build in two weeks, Mat? ...some way for us to code in a 3D world?

**Mat Ryer:** Well, people have kind of played around with it a little bit. It is quite an exciting thing. Even just thinking of having a virtual reality headset and then having many monitors in front of you. It's the most boring possible use of that technology, but it could be essentially like -- and you could mix it with what's actually being seen as well, so that it isn't just like screens only, but you could have other backgrounds, I guess, and things... It's gonna look nice, basically. Let's put it that way.

**Jon Calhoun:** We're getting off-topic slightly, I guess, but that's okay... I saw one cool VR demo where somebody had it where like you actually just saw a JavaScript editor you were coding in... But when you made 3D models and things like that, you'd actually just look to your right and you would see it actually rendering it.

**Mat Ryer:** Oh yeah, that's cool...

**Jon Calhoun:** So it was the coolest use case, where it's like--

**Mat Ryer:** Playground.

**Jon Calhoun:** Yeah, you just get to see it in 3D, and you can move around and see the thing. I see stuff like that and I'm like "Alright, VR could be awesome if we get there." It just takes some time, sadly.

**Mat Ryer:** Yeah, probably. But they're working on it, aren't they?

**Jon Calhoun:** Let's hope. Now, Mat, I suppose you can go to your question.

**Mat Ryer:** Yeah, I was gonna ask about if there's anything in Go that would grind one's gears, as it were... That's what the kids say these days, I think...

**Jaana Dogan:** I actually had to look it up. I actually had to look it up, just to make sure that it means what I assume it means... \[laughter\]

**Mat Ryer:** Oh, no... Is that right? I need to really think more before I speak...

**Jon Calhoun:** I think it's hard as a native English speaker. All the random phrases, and stuff like that, that don't necessarily make sense if you aren't used to them.

**Jaana Dogan:** This is kind of obvious. I mean, it's not that obvious -- I mean, it's obvious. You can guess, right?

**Mat Ryer:** I don't know, actually... That's a good question. I'm in awe by anyone that speaks multiple languages, so I can't really imagine what that's like... So I don't know, is the honest answer. I like hearing phrases in other languages, translated, and you don't have any of the context, or anything. They are brilliant. Some of them are absolutely brilliant.

**Jaana Dogan:** So I should give you a list, and... I can score you. \[laughs\]

**Mat Ryer:** Oh, we should do that on Twitter. That's hilarious. We should definitely start that. \[laughter\] Speaking of grinding gears - what's the thing that annoys you the most about Go? That was another question I thought might be an interesting one to chat about.

**Jaana Dogan:** I have a couple of things. I mean, I actually have one specific thing. Shadowing. You know, there's all this convenience stuff for error types, and then it just sometimes works, sometimes doesn't work... Or it doesn't quite work what I want it to work like, so it's just very inconsistent...

**Mat Ryer:** How would you change it then? Would you just disallow it, so if you tried to use it, it says "This variable has already been used in another block"? Or do you allow it? What would you do? How would you change it?

**Jaana Dogan:** Currently, they only allow shadowing of errors. If they take it further, to allow people to - you know, for convenience, to shadow the other variables. I think it would be way too much. So I would say that I think it's fair as it is, but it's annoying... Because it gives me this inconsistency.

\[20:11\] I can see there's no other way to do this. They can completely disable it, and that would be such an inconvenient thing, because you have errors all around, so you wanna sometimes shadow it for the convenience... But it's just annoying. And sometimes I need to declare the variable, and sometimes I don't... I don't know. I really don't like how inconsistent it sometimes looks.

And people are just copy-pasting the style sometimes, and they're just assuming that that's the only way to do, or whatever... So you know... Not my taste maybe.

**Mat Ryer:** Yeah. That thing sometimes when you have to switch the := with the =. Those little things. And also not being able to declare a variable without using it has great foundations, but as you're in the weeds of something, sometimes it would be nice to be able to just declare a variable and just don't use it... Take it out. If the compiler knows you've not used this variable, just take it out. I know, put a warning on or something, but just pop it out; don't worry about it. That would be my advice.

**Jon Calhoun:** I suspect some of that stems from knowing what imports you have, and all that stuff... It leads to a lot more things.

**Mat Ryer:** Yes, yes.

**Jon Calhoun:** Also, the shadowing stuff can be annoying, like you said, if some code changes and now all of a sudden the := doesn't work; it can be annoying when you have to change a line that has nothing to do with the PR, or what you're changing... So it's just like "Why did you change the signs?" "The code will not work without me changing that line."

**Mat Ryer:** Yes, I agree with you completely. That's why I like the extra comma at the end of lists, because you can just change lines. You don't have to go and reformat another line in an unrelated way. Yeah, I completely agree with that.

**Johnny Boursiquot:** My -- I wouldn't say it grinds my gear...

**Mat Ryer:** Well, I know. Not cool enough.

**Johnny Boursiquot:** Yeah... \[laughter\] Right, so it's not cool enough... It's kind of closely related to that, to what Jaana was saying - I see it often, especially I think the typical example that's given is if you're in a for loop, you have an iterator, you have an i variable or something, and then you're launching a goroutine inside of there... Because of the closure that happens over the variable, you think you can actually use an iterator inside of your goroutine, inside of your function... And then not realizing that basically you're not really using a copy of that variable; basically, you're using the same reference to it. So your goroutines end up stepping all over each other.

I've seen code like that pop up enough times that I don't quite have a solution for it, but it's just something that happens often enough and I'm not sure of a way around that other than teaching people to "Hey, this is actually what happens because of the closure. If you don't pass another copy of this variable, you're gonna get unexpected results."

**Mat Ryer:** We could probably detect that. Is there a linter or something that warns, or some warning tool that checks that? I feel like that would be able to detect that statically. I don't know.

**Jon Calhoun:** I don't know if there are or not. It wouldn't shock me if it's possible to inspect... But one of the issues you run into there is that a beginner who is most likely to run into the issue is the least likely person to have that linter set up... So you're solving a problem that by the time they know to use that tool, they don't necessarily have the problem.

**Mat Ryer:** Right. So we need to time-travel packages... Packages that are time travel-enabled.

**Jon Calhoun:** It would almost have to be built into stuff, which I don't know how that would work. It's not to say that there couldn't be a solution, but...

**Mat Ryer:** Right. So instead of doing time travel as a package, you think it should be built in; that's the challenge with doing time-travel code...

**Jon Calhoun:** I'm just gonna ignore you, Mat... \[laugh\]

**Mat Ryer:** Yeah, fair enough.

**Johnny Boursiquot:** \[laughs\]

**Mat Ryer:** Fair enough.

**Jon Calhoun:** \[24:00\] I know for me one of the things that gets me at times - and this is a very minor grief - I avoid using in-line structs. When you just define a struct inside of something, there are a lot of times where I'll avoid doing that, simply because recreating that type later becomes slightly more annoying. You can't just construct the whole thing without being like "Oh, and I have a struct here, and here are all the fields..." It just seems like so much extra work at times. So it would be nice if there was an easier way to do that, because I do think reading in-line structs is very useful at times. There's all sorts of cases where I'm like "I don't actually need another type. I can just throw this in there, just sort of nest the data in this type." So that's the type of thing that it would be nice to simplify some of that...

**Mat Ryer:** And it must be able to do that, because they're statically-typed, so it knows the type at compile time.

**Jon Calhoun:** Yeah. You can do var t thing and then do t.a.b.c = something and it gives them all zero values, so it definitely knows that it's there, it's just a matter of when you're declaring it or setting it up, you have to do it a slightly different way, which - I just don't like that it leads to code that it's like "Why did you do it this way this time?" "Well, because I'm using these nested things. It looks a little bit weird if I have to do it that way."

**Mat Ryer:** Yeah, again, the same thing - if you're doing something, it's nice for there to be a reason for it, not just make a thing happy.

**Johnny Boursiquot:** Happy is good, yeah.

**Break:** \[25:32\]

**Jon Calhoun:** The next question...

**Mat Ryer:** Yes.

**Jon Calhoun:** ...unless you have something, Mat, you wanted to talk about, that grinds your gears... \[laughter\]

**Mat Ryer:** No.

**Jon Calhoun:** Okay.

**Mat Ryer:** Nothing. I don't use that phrase, actually. \[laughs\] I'm trying not to.

**Jon Calhoun:** So since I'm working in a bright, pink room right now - or recording from one - and if you haven't seen the tweet, you can go check that out... Basically, the question is "What is your idea of working environment?" That can be room, basically anything. Open work environment, open space versus an office, headphones, what type of music, anything like that. I'm just kind of curious what do you guys prefer, what makes you productive?

**Jaana Dogan:** Definitely not open spaces. \[laughs\]

**Mat Ryer:** Yeah. That was the first thing I thought, too. Definitely not open-plan offices. I have a feeling that they're just way cheaper, or something. This is just a really obvious reason why they exist.

**Jaana Dogan:** \[27:43\] I think it depends. Sometimes in the beginning of a project you just wanna design, you wanna discuss for hours and hours, and whatever... It's nice if you can just go to a meeting room or whatever, but sometimes you wanna be in the same environment and still keep debating, or whatever. Open space is also not really good for this type of stuff, because you don't wanna disturb the people around you...

I've seen this other model, this old school offices for 4-5 people. You just put the team in, your immediate peers, and you are working from the same office. It has doors and everything, so you can actually close the door, you can have as many meetings as possible, if that's what you're going for...

I really personally like my sofa a lot, and recently I realized that I'm way more productive when I'm working from home, because I don't have any interruptions, or anything.

**Mat Ryer:** Yeah.

**Jon Calhoun:** I still think the open office space was like a recruiting tactic.

**Mat Ryer:** Why?

**Jon Calhoun:** As a new college grad, if you walk into an office space with a bunch of cubicles, and then you walk into an open space like Facebook office or something, the one just seems like a better environment from where you're coming from.

**Johnny Boursiquot:** Because you're a fool. \[laughs\]

**Jon Calhoun:** Yeah, you don't know any better at that point, and a lot of the companies I've seen push them hire a lot of new grads. So it's almost like they're optimizing for that in some ways. I don't know if that's actually true, but it seems that way. Because I've worked in the cubicle spaces, and I get when you walk in the office you're like "This looks kind of like corporate and boring and not cool", but at the same time it's nice to be able to sit down and be like "This is my space. Nobody's bugging me. I don't hear as much."

**Johnny Boursiquot:** I'm gonna speak from experience here, because once upon a time I was in an environment that specifically designed the office space to be an open floor plan, with glass walls, if you can call them that... Even the conference room was kind of like a fishbowl. It was a glass, and if you walked into the office, as you walk by, even if we were having meetings in that office, in that conference room, it was all glass. It looked beautiful, I'm not gonna lie.

**Mat Ryer:** Could you write on it?

**Johnny Boursiquot:** Yes, yes, you could. Absolutely. It was meant for that. It was beautiful. It was a digital agency, so there was a lot of creative folks seated all over the place... And when you walked in there, the effect -- you could see people working on illustrations, design work, doing really beautiful stuff, and I think that was part of the reason for that. If you bring your prospect into the office, if you bring a customer into the office, the impact that that brings - you got hit with that. You're like "Okay, this space is serious."

The coders then sat upfront with the designers because they were doing the cool stuff. The coders were like "We just look at text all day." There's nothing appealing about that when you first walk into the office. But that was part of the appeal of it. It was modern-looking, it had a nice, open and airy feel to it... And if you think about it, in your own home -- in my home right now I'd like to knock down a few walls, make it open, make it airy, make it feng shui, or whatever... You want that. But you know, it didn't take long before we quickly realized "Okay, this is sort of a focus killer." It's fine to look at, but if you're trying to get work done, with all the buzzing and the activity going on around you, you just can't get anything done, which is why it didn't take long... A month in, everybody got noise-canceling headphones, because we just couldn't get anything done.

**Jaana Dogan:** How does the visual noise work like? Is it as disruptive as noise?

**Johnny Boursiquot:** It's an echoey noise. You could have two people staying on the other side of the office, and you could still hear them if you're on the other end...

**Jaana Dogan:** Wow...

**Johnny Boursiquot:** Because there's nothing in between.

**Jaana Dogan:** Yeah, it sounds like the entire office was a stage, or something. A stage for the customers... You're just running a show... \[laughs\]

**Johnny Boursiquot:** Right, it was literally like a performance. We were performing work. It was incredible.

**Mat Ryer:** I'm a big believer in letting the engineering team decide how it works, and I wonder how many would choose that kind of setup.

**Johnny Boursiquot:** \[32:03\] Well, let's not go to the extreme now... Don't get me wrong, I liked the look of the office, I liked the feel of the office. It did feel welcoming in some ways. I had a penchant towards the nice, eclectic and sort of modern look. I think these days I've kind of swung back around to the more cozy and warm kind of feel, but... It did have an appeal to it as you walked into the office. You were like "Okay, these folks are serious." But there was a downside to it that we just didn't know, because at the time -- this was like a decade and a half ago... At the time open floor plan was the thing. Everybody wanted to have an open floor plan. Articles were being written...

It's kind of funny, because the same -- I don't know if it was the same people, but you used to see articles about how open floor plan is the new ish, right? And then now, you're seeing a bunch of articles saying "No, that is not ish. It's just... Crap. Don't do it." The pendulum has swung. You go back and forth. That's really just a warning that "Hey, whatever is hot and cool today - just give it a moment, settle down a little bit, learn to see what's what, and then you make a decision on your own." Don't get carried away.

**Mat Ryer:** Yeah. That's great advice. I like working remotely, and I have done that now for the last five years... And sometimes I miss the office. Occasionally, I have to go out into town -- well, you know, I go because I want to, if any of my friends are listening... Which they're not. \[laughs\]

**Johnny Boursiquot:** You don't have friends?

**Mat Ryer:** No, I do have friends, but they don't listen to Go Time.

**Johnny Boursiquot:** Oh.

**Mat Ryer:** JS Party. JS Party, mate. That competitor. Yeah, so... And I miss it. I miss the kind of atmosphere that you can get when you are collocated. But for practical productivity I can't beat screen sharing, working with people have the audio on and screen sharing you're just chatting, one of you sharing the screen... I do pair-programming a lot, so it's nice because you're not physically next to the person, but you're having the same kind of experience.

**Jaana Dogan:** How do you pair-program without physical contact? I've never been in a situation where there's pair-programming going on... How does it work nowadays?

**Mat Ryer:** Well, you just share the screen. That's how I do it with David. We just share the screen, and one of us is driving and the other one is watching the screen. And we sort of build things together. We get the immediate knowledge share; that happens automatically, because we're both doing this... We also get the two minds at the same time, and often we think about things in slightly different ways, or we have different perspectives, or we care about different things... So what we end up with is usually a pretty good first version of things, because it's almost like the second version already, because it's had two of us build it.

We also share a lot philosophically... We will happily just throw things away; we're not precious about -- even if we've spent a lot of time building it, we know that there's a lot of value that isn't just in the code, so throwing the code away and restarting things like that... Which are very privileged practices to be able to do. I know a lot of dev teams - that sounds like a crazy luxury that you just don't have. To some dev teams, testing sounds like a luxury. I think they're necessary, and that's what you have to do, if you can, is fight for those things.

It's nice, because -- there was actually a piece of tech... There's an app called Screenhero that Skype bought. And Skype may have it -- I'm not sure if they've got it integrated or not... But that was great, because it was basically screen share with audio, and it gave you two mouse pointers. One was basically fake, but it gave you the impression that the other person was sat there with you and they have their own pointer on your screen.

\[36:05\] So as you're talking, you can see them circling something when they're drawing your attention to it, pointing about some code and saying "It's this... Or what about this?" And they can even type, too. So you could both type. So if someone knows "Oh, this is how we should do it... Look", they could just jump in at any point. Stuff like that was just so useful for us, and we just got so good at that; we got so used to that way of working... If we meet up now in real life, we tend not to be very productive. We try and do other things other than coding. We don't meet up to code, or anything like that, just because it works so well for us.

**Jaana Dogan:** Do you think that it's also a thing between you two? I find it very intimidating to peer-program myself... Especially with people who I've never worked with before. So maybe it's also just the environment, and you feel productive because of the specific peer. Anyways, it's likely a different topic, probably...

**Mat Ryer:** No, but it's an interesting point, because you're right - it doesn't work with everybody. It's not the same experience. In fact, every pair-programming session is unique, because it's two people. If it's a different person, of course it's gonna be a different dynamic. And yeah, we've just found a way where it's okay for us to be wrong. We aren't embarrassed if one of us is wrong. If you can get that in your team, I think you're really ahead of the curve, because you have to be able to be wrong about things. Otherwise we're gonna be too careful with ideas, and we're gonna have to do too much research before-- and there might be people in the team that have a similar idea, have maybe tried things before... You get a lot of benefits from having that space where you can just be wrong and it's okay. Things like that definitely help.

**Jaana Dogan:** Yeah, true.

**Break:** \[37:59\]

**Johnny Boursiquot:** With the pairing, I keep thinking that even with things that I've taught, or talked about, or explained a dozen times wherever, the moment I get on a pairing session it's almost like I'm seized by this sort of -- I think Jaana might have hit the nail on the head... Basically, this intimidation that I feel. I feel like there's a pressure to be right. Like you're saying, Mat, you've established a rapport, and that comes if you've been working with somebody for a while... You've established a rapport where you can be wrong.

Right now at work I get to pair with folks from other teams, and sometimes we're pairing for the first time, and they're basically saying "Hey, I'm trying to do this Go thing... They say you're the person to help", and all of a sudden I feel that pressure, and it's like "Oh, crap." "I don't know who told you what..."

\[40:01\] Now there's this expectation that I'm gonna solve all problems related to Go. Then we're talking and we're explaining something, and I'm like "Okay, normally it would be me sitting and looking at the problem and thinking of the best way to deal with it, and now you're asking me to do this in real time." I have to basically say "How would I do this? How would I do this?" And they're sitting there, waiting for me to provide some guidance and insight, and I'm sitting there thinking like "Crap!" Normally, I'd be sitting down and thinking through this thing. It takes hours for me to come up with something good, and now I have to do it in real time, and come up with the right design pattern, come up with the right abstraction, and come up with the right way to have these goroutines communicate with each other, or whatever it is.

There's this pressure in the moment that just feels insurmountable. I think I've been getting better at it, but for that reason alone I don't enjoy pairing as much, if I'm not the one driving... But I realize that if I'm going to help somebody else, they need to be the one doing the driving, because they're the ones that are gonna learn from that experience, and they can't do that if they're just watching you do the work. They have to do the work, so it's like a personal problem that I have to kind of get over... But yeah, pairing is just one of my least favorite things to do, but I realize I have to lean into it, kind of thing.

**Jaana Dogan:** Yeah, one of the first jobs I had in tech we were actually pairing a lot... And at that time I wish that I was able to tell myself that "You don't have to pair. This is only one way..." Because it was giving me way too much stress, especially as a junior person where you don't feel that security, and so on... If I can go back in time, I would probably just tell myself "Hey, you can just ask to work in a different environment, with regular code reviews, or whatever." Which I think brings us to the next question. The next question is "What advice would you give yourself at the start of your tech career?"

**Mat Ryer:** It's a great question.

**Jaana Dogan:** And I think I answered I wouldn't necessarily think that pair-programming is my thing, so I wouldn't really stress myself out because I'm not really good at it.

**Mat Ryer:** Yeah, I think that's a great one. Mine would be something about it being okay to not know everything when you start a project. It was very tempting to fall into this trap and believe that the best software was designed meticulously and then implemented in that kind of waterfall fashion, which is how I assumed things worked... And it wasn't until -- it took me years, I think, to sort of shed that, and instead focus on, or realize really that as you're building it, you learn so much... And that should influence then what you're doing. You'd feel something back from the code, as well as you're not just in control of it. It kind of feeds back information to you as well.

So if as you're building something, something doesn't quite fit, or it doesn't feel right, or maybe abstractions are wrong, something like that - that often in the early days felt like "Well, we've failed. The design had failed, in some way", when it hadn't... Because it had got us to that point where we then had the extra learning that we wouldn't have had without it. So it would be something along those lines... I assume I'm there for a while, because I don't have to go into all this detail... But it's unfortunately not a snappy little one-liner, but it would be something around that, I would say.

**Jaana Dogan:** Did you get that impression because of your perception of the other engineering fields? Because you know, the feedback loop in software engineering is really fast compared to everything else. If you're designing cars, for example - yeah, you're designing and over time you learn... But it takes years, and sometimes decades to actually iterate on things. And in software it's just a matter of weeks or days.

**Mat Ryer:** \[44:02\] Yeah, exactly. That's it. We do have this virtual kind of world that we are operating in, and the rules are different. It has its own laws of physics, kind of. So yeah, you're right, we can do things differently like that. And I think it was ignorance really to the fact that people -- it just seemed like that's the way people did things. The places I worked, people would very often ask "Give me the exact plan of what's gonna happen, when it's gonna happen by", and it felt like if you don't know these dates of when these things are gonna be delivered, then you weren't good enough, or something. Well, I didn't realize - which I now know - nobody knows how long these things are gonna take. It's just some of us are honest about that, and others, for whatever reason, aren't... \[laughs\] So yeah, those sorts of things I would say to my young self. And be creative and play around.

When I was very young, what first interested me and got me interested in programming was that I could control this crazy world, in ways which were unique, and it just felt amazing to be able to do this. We'd do things like write out the computer games from magazines, and we wrote a pool game once... And we were able to dig around in the -- they'd have these arrays that described where the pockets were... So we were able to make the pockets really big. So then we were able to play this pool game with massive pockets. That sort of control -- and it was a childlike sort of thing, of being able to manipulate this kind of world, and do these crazy things... And that is still what drives me to do things today. That never changed.

So that would be more advice for my young self - and I do say this to people - "It's okay to play and to do things for fun." If you do, then your work is much more enjoyable, much easier, and sometimes doesn't even feel like work.

**Jaana Dogan:** Yeah, totally. Estimations are completely nonsense, I think. Even if you wanna estimate, play around just a bit, have a PoC or whatever, just understand what are some of the trade-offs, some of the difficulties and so on, before actually saying anything.

**Mat Ryer:** Yeah. Another similar piece of advice, I would say, as well as the -- if you do TDD, or if you're into testing a lot, there are times when prototyping and playing around is what's needed for you to figure out what to do, and tests can get in the way sometimes for that. It depends. Because you sometimes need to know exactly what you're gonna build to get the testing right... So sometimes now I will actually do some prototyping first, get a sense of what kind of thing this is gonna be, and then I'll actually start with some tests and make sure I've got some bits that I'm confident are good foundations to build on. So again, it tends to come down to being a bit more relaxed, and not too strict about things... Because it is a complicated process. Writing software is absurdly complicated, and I'm constantly surprised anything is working at all, ever.

**Jaana Dogan:** \[laughs\]

**Mat Ryer:** But it does...

**Johnny Boursiquot:** Jon, you've been quiet.

**Jon Calhoun:** No, I was just thinking, I guess... For me, I think the biggest thing I would tell myself isn't specific to coding, it's more like what to expect in a work environment.

**Mat Ryer:** I thought you were honestly gonna say the lottery, or something... \[laughter\]

**Jon Calhoun:** Here are your numbers...

**Mat Ryer:** "It wouldn't be so much Go, it would be more about what to expect in the lottery numbers..." \[laughter\] Sorry, mate.

**Jon Calhoun:** \[47:55\] No, what I mean is I think a lot of people graduate and they go take a job, and they're like "Alright, you're gonna be a junior engineer, or whatever. You're gonna have a mentor..." And in their mind, what they expect that to be, versus what it actually is, is very different. I think in your head you imagine "I'm gonna have this guy/girl who's gonna look over my shoulder, show me when I'm doing things wrong, and is gonna be there...", and they forget that this mentor is somebody who has their own job, they have their own work to get done... And depending on how much time they have, they can check some things, but you still have to go figure a lot of this out on your own.

I know at some of my first companies I worked at, I would get thrown all these different technologies and all these things... Google was especially rough with that, where they have all this internal stuff and it's all really useful, but when you're first learning it all, it can feel overwhelming... So there's a while where you feel like you're just drowning in all this stuff and you really doubt whether you should be there at times... And from talking to people I've learned now that that's kind of normal. It's just too much for somebody to comprehend all at once. You sort of take it one small step at a time, and you gradually improve and learn about more stuff, and you do the best you can... But it's kind of rough when you're there in the moment, just thinking like "How am I ever gonna get through all this? How am I gonna figure out how these things work?" And you don't have a mentor who's there showing you every step of the way... So it can just be like you feel like you're failing, even though you're not.

So I'd probably just have a conversation around that aspect of like "It's okay to feel lost or confused, or to feel like you don't know everything. That's normal." In ten years from now you'll be amazed at how much you know and how much you take for granted, that you'll be almost making the same mistakes that current senior engineers are making, where they're just assuming you know all these things... And it's not intentional, it's just - ten years brings you a lot of knowledge and experience, and it's hard to forget that that's all stuff you know.

**Jaana Dogan:** Yeah, it's a really good point, especially the questioning... And sometimes you question yourself because the tools are broken, or not documented; you immediately think that the problem is you, but it's actually the environment, and everything is always -- nothing is really well-polished or complete in tech. Everything has lots of bugs, all these legacy decisions... So you're somewhat questioning yourself because it doesn't truly align with what is maybe the ideal, and then you have to accumulate some knowledge and experience in order to understand why things ended up being that way. That comfort I think comes in eventually, because you understand how the industry works, and how everything is completely always broken and it really depends on the specific experience, whatever.

I always try to tell people "If you are struggling with a tool, or a library, or whatever, it's not you; everything is completely broken all the time... And the easiest way to do it is to be able to access the right people to ask how it works." So I think it's just hard when you're very junior, but that's the only way, I guess...

**Johnny Boursiquot:** So my advice I'd give to myself... What I've found, and we can all probably attest to this as well, is that over time I've found myself being concerned less with the technical aspects of things and more with the -- we like to call it soft skills in this industry, but I think they're just skills, honestly... The lessons that I've taken to heart over the last -- I've forgotten how long I've been doing this at this point... But basically the core lessons for me - the first one I'd say I'd give myself and perhaps anybody out there who's had a similar path, is basically you'll never be good at estimating, simply because you can't predict the future. You might get better (by some definition of "better") at estimating, but there's too many variables that you certainly do not control, on the business side, and maybe even the marketing side, or whatever. \[51:59\] There are things at play that you do not control, that trying to put a specific date or timeframe on something, especially something that is not quite yet defined, is just futile.

I've been doing this for at least 20 years and I've never been successfully able to do that. At some point I realized "Okay, it's not me. I can't blame myself for being bad at estimating. It's just the nature of the business, it's just the nature of the beast, so... Chill with that, alright?"

**Mat Ryer:** Yeah, it reminds me of what Jon said earlier about you feel like you're failing, but you're not. And estimations do that to us, as well. If we don't hit our deadlines, we feel bad. Well, these deadlines were crazy in the first place, so we really shouldn't feel bad, but we do. And when people say "Oh, we just want a ballpark number. We're not gonna hold you to it..."

**Johnny Boursiquot:** \[laughs\] Lies...

**Mat Ryer:** ...I just wanna say "Why did we just work the weekend then?"

**Johnny Boursiquot:** Right, right...

**Mat Ryer:** Because it does happen. People do tie other commitments to it; it does get into the other side of the business, which is whatever isn't the tech bit... But yeah, so we are asked to do our best, but I just think it's a bad practice. I like the sort of agile -- the idea of "Expose the progress. Show people the progress." That's a great way to get a sense of what's actually happening. Because that's often what people -- sometimes that's really what they really want from these estimations. They just wanna make sure things are happening... And it might be their job to make sure things are happening, so there might be other ways that we can do that.

But yeah, it is one of those things where we constantly were feeling like we were behind, and late... And we weren't. We really weren't. We were very fast, and delivering very rapidly, so we should feel like that.

**Jaana Dogan:** Yeah, we never valued ambiguity. I think our company is doing a better job... They measure -- if you wanna go become a very senior engineer, it's just like your skills to deal with ambiguity. And it's not about the technical challenges, it's about the business challenges. It's about negotiating with people, communicating things...

Isn't it funny that we call this stuff soft skills? These are very hard stuff, and it's just completely not up to you. You may have some skills, or you may just help the situation, but it's just extraordinarily complicated. You need to have really good skills all across, including technical skills, to deal with any of this... And you feel like the only limit is just becoming this type of issues. I mean, technically, I think everything is possible. I mean, not everything is possible; technical problems are easy... The actual limitations are this type of problems, and it's amazing that we underestimate them as soft skills.

**Johnny Boursiquot:** Personally, I think these are part of problem-solving skills. For me, the best way of understanding problems is to basically understand the business you're in, and that means you're talking to people that are not other techies, or they're not in the room coding with you, or designing with you, or whatever. So you have to actually step outside of your bubble to understand the greater world around you, and the people you work with. And hey, take the salesperson out for coffee. Get them to explain what the process is like. Go sit down with marketing and see what they do all day, and talk to the business operations folks and see what they -- I mean, you're gonna get a view of the business that is gonna inform how you solve problems, and actually recommend solutions as like keep moving a ball forward... But that starts with people, and being able to interact with people.

Along those lines, I usually tell people "Look, at the end of the day, the tech is a tool that enables some entity to arrive at a particular goal... Be that goal money, or doing good in the world, whatever the case may be." Tech is a tool, and you're a specialist who knows how to use that tool. So tech doesn't matter as much as people... So be kind, and learn to interact. Give of yourself. Give and you will receive, right? Not money, but time. Give OF yourself.

\[56:20\] Along those lines, the last thing I'll add is basically I've found - and over time - I like to use that phrase, "Ego is the enemy." I've found over time your ego, your self is always putting obstacles in your way. The whole thing I talked about earlier - when I pair, I feel the intense pressure to perform. That's ego. That's basically saying, "Hey, you'd better look good. Our survival depends on it." \[laughter\] Constantly you have this voice in the back of your head saying "Oh, you messed up here, man. You shouldn't have done that." Or "You've gotta say the perfect thing here", or "You've gotta be the perfect person here." That's causing you to act a certain way, causing you to act selfishly, causing you to pretend to be things you're not. All these things - that's just part of the self. Stay on top of that. Honestly, that's the next decade over my life that I'm honestly trying to work on, is trying to identify when the ego is taking me for a ride, and just kicking him out the car.

**Mat Ryer:** Great. Yeah, you know, that little small voice in your head that tells you not to say things... What is that? How do you get one? \[laughter\]

**Johnny Boursiquot:** Do you want one of those?

**Mat Ryer:** Is it like an in-app purchase? That'd be good, if you could just in-app purchase stuff into your brain, wouldn't it? We think of it like it's the matrix, but it wouldn't be free, would it? You're gonna have to pay for that. If you wanna learn how to fly that helicopter, sit down, put this in your head, but put your credit card here, please... \[laughter\] That's how it would be.

But that's great advice, Johnny, actually... And I also do recognize that. And that's the thing about finding a good partner and a good team to work with - if they're decent people as well, it's easier to get over some of those things, and you can sometimes be honest about it and say "Yeah, you know what - I think I was unreasonable there", or whatever. You can be a little bit more open about these kinds of things, and then you can move past it, and stuff. I think that's great.

**Jaana Dogan:** Yeah, I think in order to let go of the ego, you need to be vulnerable a bit. This also works the same way in relationships... Any sort of relationship. I think a couple years ago I was in a situation where I finally ended up feeling more comfortable being vulnerable, and it completely changed my life. I finally understood what I need to do to do the next thing. And now, similarly, to Johnny - probably I will spend the next ten years working on this type of skills.

**Jon Calhoun:** I think it goes to show that when Mat talks about pair-programming all this time, he talks about a co-founder that he's been doing this with for a long, long time, and whenever you talk about when you feel uncomfortable, it's with new people; it's with people you don't have that trust with, or that relationship with, and I suspect that's part of the reason why -- like, I know I'm included in this; I don't like livestreaming myself coding on Twitch, because I'm like, "If I make a mistake, there's gonna be that one person there who makes a big deal out of it." And it's like, we all make mistakes, but somebody's gonna be like "That guy doesn't know what he's doing. He made that mistake." So you just get worried and paranoid.

But I also know that I've done screen-sharing, either to review code or to look at some tough parts of a codebase, at a startup I was at a while back... And the actual founder and I both did this all the time, but we had a really good relationship, and that just made it -- the guy didn't mind jumping in there and being like "I have no idea what's going on here, or how to deal with this..." And it was easy to solve. And we both had that relationship, where he could do that with me too, and it solved a lot of problems. But when you don't know somebody, it's hard, because you're like "How are they gonna react when I have to tell them I don't know...?"

**Mat Ryer:** \[01:00:05.08\] Yeah. Well, from a tech leadership point of view it's a red flag when somebody never says "I don't know." If there's somebody who's always certain about everything, then they probably obviously are not. Something else is going on. So that's a good bit of advice, I think, for people. And again, it's very easy for me to say this... We're now more senior, so it is easier; I have to struggle to remember what it was really like... Although it's not THAT many years ago, is it? Come on...

**Jaana Dogan:** Some good leaders actually create some opportunity to make themselves look vulnerable. They even actually just create situations where they can easily say "Hey, I don't know. We need to understand this", whatever. So they would just keep reminding you that it's not you, it's not your lack of knowledge, or experience, or whatever. So that's one step I think further. Saying "I don't know" is a good step, but if you actively are creating those moments, that just really gives a lot of comfort to people around you.

**Mat Ryer:** Yeah, that's interesting. I did a pair-programming session a few years ago with a more junior developer, and we were plowing through something, and it was kind of halfway through I realized I'm probably just going way too fast; I probably look really good doing it, but I make this look really hard, and like you have to be some amazing coder to be able to do it... Which, of course, isn't the case. So yeah, you're right, you have to be mindful of that as well. I was just doing my thing, trying to solve a problem, and I wasn't bringing people along with me in that case... So that was an important lesson for me.

I think it is kind of a great way to work, but yeah, it does rely on that trust in the teams, and things... And I think you're right, being vulnerable and admitting "Yeah, I don't know about this. We're gonna have to figure it out together. We'll succeed together, or we won't succeed together." It is better, because you remove a lot of these personal, difficult challenges that people feel. You can remove a lot just by having a slightly different culture like that.

**Jon Calhoun:** I think you even see it with how people react to issues. We've all heard those stories about "Oh, some junior developer deleted the whole database", or something like that... And how the company responds to that demonstrates how they're going to take that vulnerability, how they're gonna treat it. It's a very clear indicator. So when you see a company that's like "Well, this happened. It shouldn't have been able to happen. We're not blaming him. Here's how we're fixing it." Then you're like "Okay, I have way more confidence in being vulnerable here." But when you see the person get fired, you're like "Well, time to not let anybody know about my mistakes."

**Mat Ryer:** Right, exactly. Yeah, it's a bad signal. Cloudflare did it recently... There was an issue that was just a bad config file that got pushed, or something... And they were just transparent and open about it. People were asking, and someone said "Is this person gonna be fired, or something?" and the answer was "No." I think the CTO said "No. These things happen. It's a process issue we have to look at." I think that is the right attitude... Because otherwise, think about what happens if you create these toxic cultures. This is a whole other area, I think, for another time. I believe our hour has come up now.

Thank you very much to everybody for joining me - Jaana, Jon and Johnny - and we'll see you next time on Go Time!
