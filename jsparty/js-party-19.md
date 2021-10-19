**Alex Sexton:** Alright, welcome to JS Party, where it's occasionally a party with JavaScript. I refuse to say weekly, since it's been a few weeks... But nonetheless, we're here ready to party. So this week we have a special guest filling in for Mikeal - Myles Borins. Introduce yourself, Myles.

**Myles Borins:** Hi, I'm Myles. I'm a developer advocate--

**Alex Sexton:** Yeah, that's enough... \[laughter\] Rachel is also here with us, and this is Alex. Myles, you work on Google Cloud and Node and a bunch of stuff - actually introduce yourself now.

**Myles Borins:** I'm Myles... I going to take long pauses, to make sure that I don't get stopped. I work on Node, I'm on the CTC and TSC.

**Alex Sexton:** What are those?

**Myles Borins:** That is the Core Technical Committee and The Technical Steering Committee. I have a SlideDeck that you can look at if you're interested in learning more about how the governance model in Node works. That means I'm involved in some of the higher level technical decisions and architecture of the project itself. I also work at Google on the Google Cloud platform where I'm a developer advocate. A good chunk of my work is devoted to the Node ecosystem and working on that stuff. I travel around, I talk, and I also work internally with various product teams and engineers to make sure that the products we're making for Node developers are products that Node developers want to use.

In a past life I was an artist and a musician and I'm hoping to find time to do that again in the future.

**Rachel White:** Yay!!!

**Alex Sexton:** Yeah, that segues well into what we wanted to talk about today, which is some music. I think between the three of us, we either have dabbled in web audio or are musicians... Rachel, what's your music story, what's your music history? You definitely have at least like a lot of cred in old indie bands.

**Rachel White:** Yeah, so I started out as a web person because I did a website for an online music magazine for teens, so my first concert was Warp Tour 2001 to go and interview bands like Good Charlotte.

**Alex Sexton:** NOFX?

**Rachel White:** No, I've never interviewed NOFX, but I definitely --

**Myles Borins:** What about Goldfinger?

**Rachel White:** I have not interviewed any ska bands, actually... Which, Goldfinger is questionably ska, I guess. But I've interviewed a lot of pop/punk bands. I interviewed New Found Glory, and 311... \[laughs\]

**Alex Sexton:** Hey, 311 was my favorite band for a long time. The drummer's name is Chad Sexton - unrelated, but I'm also a drummer, so...

**Rachel White:** Ooooh...! \[laughter\]

**Alex Sexton:** \[04:07\] It's not that big of a deal, he's good. \[laughter\]

**Rachel White:** Hold on, sorry... My cat... \[laughter\]

**Myles Borins:** I'll translate - her cat, her cat. \[laughter\]

**Alex Sexton:** I think I understand. \[laughter\] Rachel, do you wanna mute and we can keep going?

**Rachel White:** I'm sorry, my cat was on my lap, and he jumped off and his foot got caught on my headphone. Yeah, we're okay. Go ahead.

**Alex Sexton:** Okay, speaking of NOFX, there used to be no way to do music sound effects on the internet, but -- sorry about this segue, in retrospect... Myles, have you done some audio API stuff? Is that what you were interested in talking about it, or did you just wanna talk about music?

**Myles Borins:** Yeah, my first larger web app that I ever wrote was actually an accessible keyboard. I've been hacking around with Web Audio API for I guess going on five years now. That's how long it's been since I first started hacking on it though, not like a measure of the total amount of time that I devoted to it.

**Alex Sexton:** Sure, a solid, unrelapsed five years of pure time. So is that your only project? So you have a keyboard, I assume, on your keyboard. You pretend like you're playing a piano, and then it makes the sounds in the browser?

**Myles Borins:** Exactly. The thing that was neat about it was that it was built with this JavaScript framework that was all accessibility first. The website actually had no instructions on how to use it unless you were using a screen reader, and if you were using a screen reader, it had a full in-depth tutorial on how to use it. It also had an exposed API, so you could change what the frequency of A4 was.

**Alex Sexton:** I see... In case you were a 432-er.

**Myles Borins:** Yeah, and it also allowed you to change how many steps you wanted to break the octave into, and then it would distribute keys appropriately. You could set up patterns and start arpeggiating, and then start playing the musical canon instead of the notes, which was a fun little hack.

**Alex Sexton:** Yeah, that's great. That's pretty cool. I'd be actually really interested in seeing that. Does it still exist online?

**Myles Borins:** Yeah, it's on GitHub; I have no idea if it still works, but it's called The AutoMagic Music Maker.

**Alex Sexton:** Yeah, that's cool. There's a fun story about prints -- there's like a whole cult of people who think that middle A shouldn't be 440, it should be 432. And they'll show you all these cardioid graphs that look way prettier than the ones at 440 and they're like "See? The math works out to be more beautiful visually, so it's gotta be true."

But a lot of people thought for a long time that Prince detuned his guitar to E flat instead of E, but it's actually not quite E flat, it's E, but in the tuning of where middle A is 432 instead of 440. Just some fun Prince facts.

**Myles Borins:** Yeah, that's amazing.

**Alex Sexton:** A lot of his better tone -- a lot of people tune down to E flat just to get... You can play thicker strings because they're a little looser, so you can have kind of a fatter tone, so a lot Prince's well-known guitar tone comes from the fact that he detuned his guitar, essentially, and then was able to kind of play fatter strings, and stuff. Just some fun, normal JavaScript/Prince trivia.

The other interesting thing about your explanation -- I forgot... You're of the origin of Canada, yes?

**Myles Borins:** \[08:05\] Mm-hm.

**Alex Sexton:** Yeah, the JavaScript owes...

**Myles Borins:** It came out...

**Alex Sexton:** Gives it away.

**Rachel White:** I feel like Myles is secretly Canadian, because he doesn't -- when I first met him I didn't know, and he kind of was like, a little quiet about being Canadian.

**Myles Borins:** Am I supposed to introduce myself that way? "Hello, I'm Myles. I like maple syrup and it's called peameal \[laughter\] Thank you. Would you like a poutine and a Caesar?

**Alex Sexton:** I'd actually flip it around to where you start there and then say your name.

**Rachel White:** Yeah, that's usually... That's how it goes. Usually we know when you say "JavaScript", so...

**Myles Borins:** I'm changing my Twitter profile, it says "Canadian Myles" now.

**Alex Sexton:** How do you pronounce the library that is the most popular for transpiling ES6 into ES5?

**Myles Borins:** Oh, are you talking about Babel?

**Alex Sexton:** I am. Did you change the way you pronounce it?

**Myles Borins:** So I did say it Babel \[beɪbəll\] at first, and then I was corrected by Seb. I then proceeded to send him a whole bunch of photos of the pig Babe, which I'm not sure if he appreciated. \[laughter\]

**Rachel White:** Wait, is it Babel? \[bæbl\] Because I say Babel, but I've heard a bunch of other people say Babel \[beɪbəll\].

**Alex Sexton:** It's mostly Canadians that say Babel. \[beɪbəll\] But Wes Bos does all the tutorials, and so a lot of people come across the term Babel for the first time from Wes, and since he's Canadian, they hear Babel \[beɪbəll\] for the first time and then they repeat it mindlessly, which is now what America is about, right?

**Rachel White:** I think that's actually where I heard it, which made me question everything I knew, or thought I knew.

**Alex Sexton:** Shout out to Wes for making people question everything they thought they knew. Cool. I feel like we didn't get very deep into the audio APIs... Rachel, have you done any Web Audio stuff?

**Rachel White:** I haven't yet. I actually know nothing about music. I took piano for like two years and that was about it. So I haven't, but I've seen a lot of people do really interesting stuff with the Web Audio API. I've seen Myles do some very cool stuff with spatial audio, which I'm sure he'll talk about a little bit more. But I've seen some other really cool examples of people using the Web Audio API with CSS and doing orchestral stuff with the spatial audio... But for me, I don't really know anything about sound, so I haven't played around with it, no.

**Alex Sexton:** Myles, tell us about the spatial stuff.

**Myles Borins:** Okay. Do you want like a 5-minute version, a 2-minute version? I can talk about this for hours.

**Alex Sexton:** I mean, start going and I'll cut you off when whenever everyone's asleep.

**Myles Borins:** So there's a handful of different ways of doing spatialized audio. The most often used one is what's known as binaural, and that's using what are known as HRTFs (head-related transfer functions). A transfer function is a black box that can take some data, output some data as a pure function of some math stuff. But basically, with an HRTF you can take an audio signal, you can put it into the HRTF, you can give the HRTF a handful of tunings and it'll give you back an audio signal that is spatialized.

The Web Audio actually has some HRTFs built in. They are not super accurate. In general, you kind of need an HRTF to be tuned specifically for your head and your body. They're called "head-related" because of how our brains play sound in space.

**Alex Sexton:** \[12:00\] So in order to tune one, do you need one of those microphones that looks like a head, or do you have to put microphones in your ears? How does that work?

**Myles Borins:** So you can tune it by sitting in an anechoic chamber - which is a room that's designed to have no echoes - putting microphones inside of your ears, or wearing specific kinds of headsets, which will then create a whole bunch of different sounds in the room and measure the filters of your body. So your ears are really good at determining if a sound is far away by how loud it is, if it's to the left of the right of you, based on how much energy is in each ear. But being able to tell if it's above you, behind you, in front of, below you - all of that's actually based on the filters of your body and the way it filters the sound, and your brain just knows that, if you're just kind of always hearing it that way.

**Alex Sexton:** I'll interject some interesting information... I have a project studio at the house. The rooms that you see -- like when people mix in rooms, they have all the sound foam and stuff like that on the walls, and those are to prevent early reflections. Your brain has a hard time discerning between the straight sound from the speaker to your ear, and then the sound that goes from the speaker, off the wall, to your ear, because they happen so close together that it feels like the same sound, it's just mushier. Whereas a sound that bounces off a wall 30 feet away and comes back, your brain is like "Oh, that's clearly an echo, or a reverb in the room, and it's not part of the original sound."

So tuning rooms is really important because you wanna remove all of the early reflections that would cause some of that smearing to happen. People have existed for a really long time, so we actually are better at discerning early reflections off of the ground than we are off of walls or ceilings, which is really interesting to me. Your brain can kind of know if the speaker has a sound, it bounces off the ground and gets to your ear. It can do a lot better job of discerning the difference between that than off of a wall, like from the side, which is just kind of magic to me... But it makes sense, because there haven't been walls for that long of human existence, so evolution would maybe kind of cover it.

**Myles Borins:** I wanna expand on that a little bit though, something that's like just a thought experiment that I always found really interesting - sound comes out of a person or a speaker or something, and it reflects off of surfaces; each time it reflects off of a surface, it decays a bit. This is the way that you can just think about filters in general - it's like a change in amplitude or a delay.

As the sound bounces around the room and each time it reflects, it decays more. Generally, that decays is happening in an exponential curve. But mathematically, would it ever reach zero, or is sound infinitely decaying and it's just that kind of sub-perceptual levels, and are we constantly surrounded by the infinite sound of eternity?

**Alex Sexton:** Yeah... You go half way to the wall an infinite amount of times and you never reach the wall type of thing. I do like the idea of that. It kind of makes you wonder, are we surrounded by this sound, eventually -- like, you know how on a screensaver you wait for it to finally hit the exact corner? (I guess that was The Office) Maybe sound eventually hits the ground at the exact perpendicular direction in order to escape the earth, right? So it still exists, but it no longer is surrounding us maybe... Could be. Maybe the atmosphere bounces it back in though. I wonder if the atmosphere has sound bouncing...

These are all interesting questions that are probably too far outside of the bounds of web audio. \[laughter\]

**Rachel White:** \[16:13\] So I actually wanna interject for a second, because I've seen a lot of proof of concept demos for what people can do with the Web Audio API, but I don't think that I've ever actually seen it in actual use... I guess mostly because I've only seen artsy demos and stuff, but in terms of practical application, I'm thinking of like, obviously, this is gonna have a big space with AR and VR type applications, but what have you two seen that utilizes it in an actual practical end use sense?

**Alex Sexton:** I'm not sure I can think of -- I guess there are games (like legit games, not just demos) that I've seen that use the Web Audio API. But as far as just like business product, I don't see a lot of Web Audio API in those.

**Myles Borins:** I was recently visiting IRCAM, which is a music technology research facility in Paris, and they actually have an entire team that is building interactive installation work and interactive web demos, and it's all built on web technology. One of the examples that I saw that was particularly interesting was this DJ app that they had. It had a native component to it to hook into Bluetooth, but essentially, you would have a loop on your phone, and you would have headphones on; when you got close enough to someone else in the room, your two phones would find each other on Bluetooth and your two things would sync, and then you would be playing music together and make impromptu dance parties throughout the room. The entire audio engine was all Web Audio for that.

**Rachel White:** That's pretty cool. I'm thinking now of like -- what is Spotify written in? Because Spotify is a web app that's like wrapped in something, right?

**Alex Sexton:** Right. Well, to some degree... But it's a little different; just playing a song is almost to the point of -- like, maybe they used the Web Audio API to do it, but they're not using the Web Audio API for anything other than like play/pause, start/stop. They're not doing compression or sound leveling, or any of their actual transforms on audio in the client, I don't think... That I've seen, at least.

**Rachel White:** So what exactly is the Web Audio API?

**Myles Borins:** The Web Audio API is an implementation of an audio graph. It gives you nodes that you can use to create sound, and to modify sound. It uses an abstraction that's called unit generators, which is an abstraction... This kind of audio graph unit generator approach is one that you'll see all over the place in audio programming environments, and under the hood of a number of popular audio software; it's how the programmers of those are implementing it.

You'll have a node for the output, you'll have a node for your microphone, you'll have a node for a delay line, and you can connect the microphone to the delay, to the speakers, and it will do its thing. You can add and remove nodes to the graph, and you use a combination of various unit generators to create different effects and different sounds and different audio interactions.

**Alex Sexton:** \[20:05\] So you can have audio being generated... Can you use the same modifiers from non-generated audio, like audio that's just being sourced from an input, or something like that? (like a guitar) I've seen -- I'm pretty sure it was a Web Audio API, but there was a JSConf EU from a few years back where you did like guitar stompboxes, and stuff like that. Is that the Web Audio API, or is that something different?

**Myles Borins:** Yeah, that would likely be the Web Audio API. You could take an external input and run it through any number of filters.

**Alex Sexton:** Okay, cool. And you can write your own filters, and build a grunge box, and a delay pedal and all that kind of stuff.

**Myles Borins:** Mm-hm, and you have primarily two different ways of doing that. You can do that by either using the variety of Nodes that are provided for you in the API, or you can actually write your own unit generators using the ScriptProcessorNode. As far as I know, the ScriptProcessorNode has been deprecated though, and there's some real problems using it for sample accuracy, because there's a time delay between sending messages to the node and getting the samples out of it.

**Alex Sexton:** I see. The DSP is all about latency at some point.

**Myles Borins:** I've done some experiments with early asm.js and cross-compiling the Faust signal processing language to the script processor nodes, and we were actually able to get really intense analog amplifiers with non-linear -- all sorts of really fancy stuff running at near native speeds in the browser. The major issue was not the ability to process, but the 10-14 milliseconds you would have in delay going to and from a script processor node.

**Alex Sexton:** Right... All the platform delay, not the actual code. That's interesting. The nice part about that though is that it shows that it's possible in the future to fix, it just doesn't seem like it's a priority.

Mozilla for a long time prioritized a lot of web audio stuff, and I think they have some of the only built-in tooling to be able to kind of modify it... Does that sound correct? Is that what you used?

**Myles Borins:** I never used those tools, but they did have developer tools specifically around viewing the audio graph, if I remember correctly.

**Alex Sexton:** Right, yeah.

**Myles Borins:** There is spec work being done right now on AudioWorkerNode which would work more similar to web workers, and I believe they might even have access to SharedArrayBuffers, which would solve the delay issue... Although it would now create the complexity of multiple things maybe \[laughter\]

**Alex Sexton:** Yeah, you trade one for the other. Well, cool. I look forward to the day when I can load VST plugins into the browser and just go for it... Which doesn't seem too far off -- I imagine wasm even takes the distance between the native stuff even closer. So it seems like getting those nodes to have zero latency or whatever seems to be a priority. I'd be interested -- if anyone wants to follow up if there's like work... Like, is the worker the solution that we're gonna go with, or can we make the current one faster? Let us know.

Break: \[23:41\]

**Alex Sexton:** Okay, next we're gonna talk about -- I think this is a little bit of a jumping off point... There was a fun issue lodged on the TypeScript repo that claimed that TypeScript was too incomplete, and there were some people with some requests for mathematical proofs... But he had a pretty compelling example where all he did was add types, and then was able to get like a prime number figure router out of the type checking.

I think he was mostly saying "If you stop the recursion part of this, it'll stop", but it was just kind of a funny issue that, like, you add enough complexity in your type system on top of your language and suddenly you have another Turing complete language on top of your language.

I don't know if there's too much to talk about from this... Have you guys ever seen the Turin complete CSS games, and stuff like that?

**Rachel White:** Yeah.

**Alex Sexton:** Do you know how those work, can you explain it?

**Rachel White:** No, I don't know how they work. \[laughs\]

**Alex Sexton:** Cool. So it always requires input... If you haven't seen the CSS games -- the most simple example of CSS that works like a program would, versus one that works in a way that styling would is a slideshow. If you think about check boxes as having a style around checked or unchecked, you can kind of like put a giant transparent check box on either side of a slideshow, and whenever you check a checkbox - you know, put one between each slide - you can kind of say "Show the slide that is the sibling element (the next sibling) of the selected check box", and then you hide all the check boxes to where they're transparent, but on top. So you essentially build this whole slideshow that has no JavaScript, but every time you click the next hidden check box, it shows the next slide because now the next slide is the one that's the next sibling of the thing. So you can kind of see how you can take JavaScript out of the equation by using this one cool trick to say "Do something based on the act of check box."

You can actually do the same thing to make a game. Tic-tac-toe is an interesting one, to where you can theoretically make check boxes that have x's or o's, but you can make the game have a win state, like say "You won" if it detects any of the potential win states as like, you can imagine, like a selector that has the selector for all possible combinations of three x's in a row. So people can make tic-tac-toe based solely on selectors, and that's kind of like making games that rely on no JavaScript... And there are much more complicated games than that.

**Rachel White:** So isn't the majority of the time that people make the Turing complete CSS projects when -- it's to refute the notion that CSS isn't a "real" programming language?

**Alex Sexton:** \[28:05\] I think that it's more just for fun. Definitely no one is suggesting that people should use CSS like this, I think. The slideshow is maybe a good example of something that could work, but the tic-tac-toe is unreasonable, and I don't think anyone's saying that. It's the ideal situation.

**Rachel White:** So I guess what is the importance of having a language be Turing complete? I guess it's just another abstraction that's Turing complete in regards to the issue that we're talking about, but what is the importance of that necessarily?

**Alex Sexton:** I wouldn't say that there's an importance. I think it's more like exploration as fun. I think the person who wrote the issue did a good job of kind of making light of the situation, saying "No one cares about this. This is just a funny thing." You could turn it off if you didn't want -- because in this case it came along with a problem where you could accidentally create infinite loops of type-checking.

I think more than anything it's just like a fun exploration of taking technology to its limits and exploring areas of it that weren't for an intent, but then being able to do crazy things because of that. Other things that come to mind are using -- there's a language called JSFuck (you can bleep that later), which is completely based off the fact that arrays cast themselves into integers, and then... It's be insane to explain here, but yeah... Go ahead.

**Rachel White:** Actually, that's just an abstraction of the esolang Brainfuck it sounds like. I don't know if you're familiar with that.

**Alex Sexton:** Yeah, I am. It's not... It's similar, but it uses very specific properties of JavaScript to where it can kind of bootstrap itself by grabbing letters off of prototype functions and then eval-ing them, all based on positions and arrays... It's very interesting-looking, and it doesn't really work the same as the other one you mentioned, but it is very similar in its incomprehensibility... But everyone should check it out.

I think it's just a good example of doing something entirely unexpected with a language. It falls into the category of uselessware that I think you and I have talked about, Rachel, before; at least on Twitter, maybe... Of just like building something for the sake of saying "This is cool and fun and weird", but no one should necessarily do this for their job.

**Rachel White:** Yeah. I mean, I think it takes a certain type of person that has a full grasp, a full down to the nuts and bolts grasp of a language to be able to even get down to figuring out that kind of stuff... At least from my perspective, as someone who does not have a full grasp of a language. Not even English, let's be honest.

**Alex Sexton:** Yeah... \[laughs\] Sorry, I was saying 'yeah' to myself. \[laughter\] Yes, you are bad at English, Rachel. I do find it really fun to try to get so deep into some topic to where you can kind of flip it on its head, break the norms and do something interesting and cool, even if like -- there's a reason why it's not the norm, because it would be a terrible idea. But it's just kind of like, take everything to its logical maximum, to where theoretically we only need three characters in JavaScript to run any program, which is a cool idea, and I'm glad that someone wrote a compiler for it and we can talk about it on the show, but I don't anticipate anyone actually using it in their application. For one, it would break all my CSP rules.

\[32:17\] Myles, can you think of -- this is a little bit on the spot, but can you think of other things in this vein? I know you tend to gravitate -- not gravitate, but you tend to be associated with a lot of projects that do similar... For instance, making a piano that has a tunable middle A, and programmable interval keys is a good example of breaking outside the norm. I'm trying to think if there's other things...

**Myles Borins:** Can you just give me a tiny bit more context? Which norms are we talking about? Are we talking about language norms, or...?

**Alex Sexton:** Yeah, so I'm just trying to find more examples of this stuff. The situation with TypeScript is we have a thing where someone wanted to add, like "Alright, we wanna type-check integers in these places" and it's like, "Okay, now we have more complex types and we wanna do this and this", and eventually you have such an amount of complexity to where you can kind of do a whole programming language out of the thing that is supposed to attach to your programming language.

It's a fun game to play, but I don't think anyone is going to be programming in TypeScript types anytime soon, if that makes sense... I think this question is potentially just a bad question. Do you have any thoughts on the topic?

**Myles Borins:** I think that I know where you're going at here, which is like the beauty of combinatorial complexity...

**Alex Sexton:** Sure.

**Myles Borins:** You see this happen a lot-- and I'm gonna bring it back to audio, because I'm in that mood now. You see this happen a lot in algorithmic composition, or any sort of generative environments, where like where you get things that are really interesting is you may have one thing that's like repetitive and it's in the randomness that it gets interesting, and in overlapping randomness, but then when you actually make like the ability to program that.

A really good example would be, I've seen a performance where there was like four or five different voices that are playing in there. They're playing different patterns, and each of those patterns have a randomness value that can be added that will randomize the patterns, and this performer mapped that to a fader. So you can make it more random or less random. The way he would do his performances would be kind of put everything out super random and then slowly dial at it, to the point where it reached a stable state.

I think that's kind of what you're talking about, where you create this combinatorial complexity, and within this complexity come these new higher level attributes that you can work with, and then you can use those as the means in which you program.

I think you see that happen a lot in environments like Ableton, or like other kind of programming music environments, where you're no longer worrying about the notes that you're playing, so you can focus on other aspects of the song, such as the timbre, or playing with compressors, or just like effects and stuff like that.

**Alex Sexton:** Yeah, I think it's a -- for the tough question that I asked, I think it's a good example of kind of like just taking these side effects of something and using that as kind of your core. It's like someone allowed randomness for one purpose, and then you take randomness and now you're making randomness the core thing. Kind of like types were the point to enforce against this language, and then you're kind of taking them and literally just throwing the language under the covers and only using types, and kind of starting from that new baseline.

\[36:16\] I think it's a thing that kind of -- again, it's always gonna sit on the fringe, but I think it's an art, just like that person kind of created art out of the randomness... Noticing things and doing, like, the CSS games, and all these edge case situations I think definitely falls in the realm of beauty and art, and creativity, in a way that is super interesting to people.

It's similar to -- I think it's called like A Single Div...? Is that a thing?

**Myles Borins:** Yeah. Oh, who did that again? That was such a beautiful project, from India.

**Alex Sexton:** a.singlediv.com. I'm gonna go ahead and start into the projects of the week -- sorry, the picks for this week. My pick this week is gonna be A Single Div. A Single Div is an interesting website where CSS developers get a single div and they create icons and pictures and cartoon characters and scenes and all sorts of stuff, all with just like after-after-after-after-after content type tricks, in order to make a single div turn into an infinitely scalable, beautiful little picture icon type thing, and they're extremely impressive. Lynn Fisher is the person who made that.

**Rachel White:** Cool.

**Alex Sexton:** Rachel, do you have a pick this week?

**Rachel White:** I do, only because I asked someone for suggestions and they gave me a good one...

**Alex Sexton:** Nice.

**Rachel White:** Full transparency... So there is this project that came out this week called StackBlitz that is an online VS Code IDE for Angular and React. I just hit my microphone, sorry. Basically, it lets you create Angular and React projects that are immediately online, so you don't have to push anything to production or rely on any other kind of thing. It just lets you code, and then it installs the dependencies and does magic, and then it's there. So if Angular and React are your thing, I figured since we talked about TypeScript a little bit earlier - this is a nice pseudo-tie-in - you can give that a shot.

**Alex Sexton:** Myles, I'm potentially putting you on the spot, but did we tell you to try and pick something ahead of time, or do you have anything new?

**Myles Borins:** I do just-in-time picks, and I've got it... Just in time.

**Alex Sexton:** Cool.

**Myles Borins:** \[38:56\] It's a GitHub repo called Omnitone. It's from the Google Chrome Org. It's a library for doing spatialized audio. It's built on a lot of the stuff that I was talking about earlier. It's a robust implementation of a first-order-ambisonic decoder, and a binaural renderer. It allows you to take spatialized media and play it and rotate it and play it through virtual speakers, and then to actual physical speakers in the headphone.

The thing that's really cool about it too is if you're doing any stuff with Web VR, you can use this in conjunction with Web VR to do spatialized audio that will actually move around with the movement of your viewer.

**Alex Sexton:** Nice, that's really cool. Well, this episode got into the weeds a little bit more, Myles, and I tend to be bad at staying on topic. I don't apologize... Hopefully, you enjoy one episode like this and hopefully Mikeal can be back and ground us a bit.

**Rachel White:** Hey, it's better than nothing... Better than nothing.

**Alex Sexton:** Well, let's not get ahead of ourselves.

**Myles Borins:** You don't realize you're basically apologizing in saying that I'm better than nothing, right? \[laughter\]

**Alex Sexton:** No, I said let's not get ahead of ourselves, but... Thanks for listening this week, this has been JS Party.
