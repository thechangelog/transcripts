**Jerod Santo:** Oh yes, the sound of those Breakmaster Cylinder beats means you know what time it is. It is time for JS Party. I'm Jerod, your internet friend, and I'm joined today by my friend, Nick Nisi. What's up, man?

**Nick Nisi:** Ahoy-hoy. How's it going, Jerod?

**Jerod Santo:** Can I ask you a question, Nick?

**Nick Nisi:** Absolutely.

**Jerod Santo:** Do you like jam?

**Nick Nisi:** I love jam.

**Jerod Santo:** Do you like Game Jam? Do you like React Game Jam?

**Nick Nisi:** I love React Game Jam.

**Jerod Santo:** Do you have deja vu? Because I asked you these exact same questions last time. We were getting ready for a another React Game Jam. And this time we're joined by a developer who likes to put 3D games in the browser. He's been doing it for a while now, and his name is Brian Breiholz. That's the best I can do. Brian, welcome to JS Party!

**Brian Breiholz:** Happy to be on the show. Thanks for having me.

**Jerod Santo:** We're happy to have you, and you're gonna have to hold our hands and take us gently, softly into the world of 3D game engines in the browser, because I am a complete neophyte on the topic. Nick, I'm assuming -- do I assume too much? Do you know this well?

**Nick Nisi:** I'm very, very interested in it, but specifically when it comes to like 3D games -- I've done some 2D platformer stuff in the browser, but like 3D game stuff... I'm like a flatlander. I can't see that third dimension, or how you even do that.

**Jerod Santo:** So you're gonna have to really hold our hands, Brian. Tell us about yourself. Tell us your history with game development, how you're doing this, maybe how you make a living so that you can do this... All the all the good stuff, so we can get to know you a little bit.

**Brian Breiholz:** Sure. So my name is Brian Breiholz, I'm from Germany, in Flensburg. I'm originally a web developer, but transitioned recently to making games, especially using Three.js and React Three Fiber. And yeah, how do I make a living off that? I had the luck that my dad was supporting me a few years ago, so I had like a good buffer of about two years where I could just grind away and didn't have to worry about it too much... And yeah, after that, I was pretty lucky to join the web game dev community, and through that I eventually met a guy, Chris Baumgartner - I hope I don't butcher his name here - who asked me if I wanted to do some client work with him. And yeah, that's been going on over the last year, and transitioned slowly to making more and more tools, and moving in the direction of making an actual game engine for the web using web tools. And yeah, that's where we are right now.

**Jerod Santo:** Cool. So this client work has to do with the game engine? They're paying you to build the game engine, or those are separate things?

**Brian Breiholz:** Yeah, he managed to make it that way. So we had a good portion of the budget to be able to start building a game engine, and then go from there, and build the actual app. So that was all of his -- I don't want to say scheming, because the client got an actual product at the end, but... He managed to organize it all that way.

**Jerod Santo:** Very cool. So you're making a living off of in-browser game development. It seems like that's a rare thing, I would think.

**Nick Nisi:** So cool.

**Brian Breiholz:** Yeah, I think so.

**Jerod Santo:** That's awesome.

**Brian Breiholz:** Really lucky.

**Jerod Santo:** Tell us about your React Jam. So this will be your third one. We should mention that React Game Jam, which we talked about in the past on this show, is coming back up again. In fact, as we record, it's a week away. As this episode goes out, if you want to be involved, you'll probably have to move relatively quickly, because it'll be starting up either now, or in six hours from now... Or depending on when you come to this, maybe it's already over. But as the episode will ship, it'll be like burgeoning. In fact, they haven't even announced what the theme is this time around... I think last time we did a show, we knew what the theme was; this time we don't know. And so we're a little ahead of that game... But a very cool game jam, Reactjam.com. I will be volunteering as a judge once again, because this is the easiest volunteer job one could ask for. I just play a few video games with my kids, and then we just pick which ones we liked the most. I mean, how hard is that? I mean, I should be getting major volunteer props from people. Don't you think, Nick?

**Nick Nisi:** Absolutely.

**Jerod Santo:** This is philanthropy. The philanthropy arm of JS Party here.

**Nick Nisi:** It's bringing your work home to the kids and being like "Look how cool my job is!", right?

**Jerod Santo:** Yeah, I definitely get cool points. But I do not get to build 3D game engines in the browser for a living, so if I introduced my kids to you, Brian, I would be second coolest guy... \[laughs\] Second coolest job. So that's cool. Tell us about your first couple of game jams, and what you've built, and we'll go from there.

**Brian Breiholz:** Yeah, okay. So I've joined two game jams, React jams, so far; game jams as well. The first React jam was my first game jam ever. I think the first one had the theme party. I participated in the single player challenge both times, mainly because they used to have the restriction that you could not do widescreen games in the multiplayer challenge, and I wanted to do flashy 3D experiences, and kind of thought "Okay, I want at least have like a smartphone screen available", or a wide smartphone screen. So I did the single player both times. This has changed, though, as far as I know, recently... So I think - check the rules again, but if you're going to participate in this jam, you will be able to do widescreen games as well.

So the first jam, I landed a third place, with a game called Disco Warrior. When the theme wasn't announced yet, I was already set though on making this hack and slay third person kind of game... So where it's this guy with this huge sword, and he jumps at people, and lashes away... And then the theme party game was revealed, and I was a bit stumped for half a day, but then I thought "Okay, well, I'll just turn the whole thing into \[unintelligible 00:07:05.13\]

**Jerod Santo:** \[laughs\] So it was a hack and slash warrior game, and then you're just like "Well, I'll make it a disco warrior", and you're gonna be doing your hacking and slashing inside of a disco, and there you go. "Now I'm back on theme." That's smart.

**Brian Breiholz:** And to be fair, I spent almost two days working on a nice disco ball, and having the lights reflect every -- or faking reflection, because that's way too expensive for the browser, but... So there was some work invested into this theme.

**Jerod Santo:** Well, we've also invested in disco balls here at JS Party. Nick, what were you gonna say?

**Nick Nisi:** I was gonna say, this reminds me of a shirt I just saw on the internet, like yesterday...

**Jerod Santo:** What's that?

**Nick Nisi:** It just said, "Surely not everyone was kung fu fighting." \[laughter\]

**Jerod Santo:** Oh, yeah. That is a good one.

**Brian Breiholz:** That's a good one, yeah.

**Jerod Santo:** And this disco warrior game has an epic soundtrack, a very loud soundtrack, so when you pop the tab open and get warrioring, it's in your ears... As well as some nice voiceovers, like "Get off of our disco", or like "You have no moves..." I don't know, I can't remember the exact things that you said, but there's some voiceover...

**Brian Breiholz:** I don't know, there were like 20 hours left -- by the way, it was also horrible time management on the first one... So I introduced tons of features on the last night, and it backfired at some point as well... But the voice lines did happen. I spent like two or three hours on some AI voice generation website, first brainstorming up lines together with ChatGPT, and then put them into the voice generator, and had like three or four personas that were kind of fitting... Because you know, you couldn't actually say at the website, "Okay, it needs to be threatening", and then it's "You're standing on a disco floor". And then, okay, that's not really fitting. \[laughter\]

**Jerod Santo:** A lot of iterating to get to that actual...

**Brian Breiholz:** Yeah, yeah...

**Jerod Santo:** That's when you're just done coding, and you're like "I need to do something else for a while. I'm gonna go make some voices, and integrate these."

**Brian Breiholz:** Yeah, I needed a break at that point, so I did like two or three hours of that.

**Jerod Santo:** That's the fun stuff. So was your main problem with time management was just introducing too many things too late in the game?

**Brian Breiholz:** Yeah. Previously for the game engine that we were working on, I've written this huge animation system, character animation system. In modern games there are these insanely complex state machines where you have a character that goes from idle to walk, to run, and potentially those different states are state machines again, where it's \[unintelligible 00:09:52.22\] and then if you think about a game like Red Dead Redemption, the characters just walk so naturally, right? They have all these start and stop animations, everything is smooth... So I was really hoping to showcase that in the game. And I had this model from the Unity store, which had like a bunch of animations, like 70 or something... So I just ended up making the tech combos more and more complex. So there's this base combo, which is like to two or three, I think three different hits... But if you jump and then hit attack - you can test it yourself later - there's going to be a different animation. There's going to be this jump into smash. And then there's another one, and another one, and I just kept adding them... And of course, it introduced a ton of bugs that I get didn't get to fix at the end. But yeah, first time.

**Jerod Santo:** Do you just stop and move on? Or do you keep polishing your game after it's all over with?

**Brian Breiholz:** After the jam?

**Jerod Santo:** Yeah.

**Brian Breiholz:** No, I actually never touch that codebase again, because it was like 70% --

**Jerod Santo:** \[laughs\] I know that feeling.

**Brian Breiholz:** ...like 70% through the thing. Everything was looking pretty good. I was thinking "Okay, you could actually keep on working on top of that." But it just degenerated completely over the last two days. Lack of sleep, lack of time, so you just end up hacking stuff in the worst way possible... So I didn't open that project again.

**Break**: \[00:11:32.05\]

**Nick Nisi:** You mentioned a couple times that you're working on a game engine, and I'm curious about - like, when it comes to these... I assume that you're using your game engine in this, but is that something that you come pre-prepared with? Do others come with their own game engines, or their shared -- or how does that work?

**Brian Breiholz:** So to start with, we have the requirement it has to be React, right?

**Nick Nisi:** Yup.

**Brian Breiholz:** And in the case of these games, they are not just, let's say, a Three.js app, and inside a React wrapper, where it's like, okay, there's an app and a full-screen canvas, and that's it. There's no more React. No. This is an actual React game engine, so you will find React components that say like -- there's obviously a physics component, there's a... If you look into the file and read the text, there's like mesh, health \[unintelligible 00:16:21.13\] physics collider etc. So it is actually integrated into React. We haven't released anything yet. This wasn't during the games; I was using an earlier iteration of the engine. We are planning to start releasing this year, over the course of this year, hopefully. \[unintelligible 00:16:40.24\] so no one else is using it so far. But I think there were other Three Fiber projects as well, and those are very close. This game engine is basically Three Fiber with game stuff added on top.

**Nick Nisi:** Okay. Yeah, that was kind of gonna be my question, is what's the difference between like Three.js and React Three Fiber, and then the game engine. What does Three provide, and then what does the game engine provide on top of that?

**Brian Breiholz:** Okay. So yeah, let's start with vanilla Three. Vanilla Three.js is a renderer, so there are no game-specific tools. Obviously, there are a lot of tools that you also use for games, but you can also just use it for some product page. And probably the most use cases of Three.js aren't games; they are like interactive 3D websites. But it's the foundation, the renderer is what talks to the GL - or WebGPU in the future - and render stuff onto the screen.

Then there's React Three Fiber, which is just 3GS, but it gives you a React syntax for it. So it allows you to express your scene as JSX. Meaning instead of having a bunch of scene.addmesh1, scene.addmesh2, mesh2. addchild, you have your JSX hierarchy, where it's, okay, mesh, and then child mash, and maybe another child mesh.

There's obviously a lot of people who prefer one over the other. I personally like Three Fiber a lot, because JSX just gives you this immediate visibility of what's going on. You open a file and you see what is there. And in turn, it's gives you the ability to abstract a lot.

With Three Fiber we have this collection of components called Drei, which - they're mostly rendering abstractions, but they are insanely helpful. A lot of stuff that you would have to do yourself if you're using vanilla Three.js, that just saves tons of time to make a scene look good. And that's kind of the question, "Okay, Three.js was there 10 years earlier. Why isn't there a collection of components like that as well?" And that's kind of where, okay, maybe it's a community, but Three.js has a very large community as well... So that's where React kind of comes in. It allows you to create these abstractions and share them with people, it allows people to create an ecosystem of components that can be reused... So yeah, that's basically what Three Fiber is, and our engine is basically Three Fiber, but let's give you the ability to add game data to your JSX as well, to your game entities. Yeah, I've been going on for a little while...

**Nick Nisi:** No, this is super-interesting. It's always nebulous when I hear game engine... To me, that's the really cool part of game development. I've never really done much with game development, but that's where -- so Three and React Three Fiber, it sounds like that's using React to kind of give you the tools to render this 3D world. Then your engine is what would give you the tools to interact within that 3D world? Like create a camera, maybe, an entity that's moving around, like a player or something...

**Brian Breiholz:** Yeah, that hits pretty close. Where three fiber provides a lot of rendering abstractions, our engine is able to provide behavior abstractions. So in React Three Fiber there's no way to attach data to a mesh. And if you say "Okay, your mesh is your player, for example." It's an example. Then, okay, how are you associating data, like position, health, I don't know, weapon type, whatever you have, with that mesh? It has to live outside of React. But what our engine does is it allows you to just add that data as well inside your JSX as components. And it's like, okay, you have an opening tag mesh, and then in there goes health, position, and a bunch of others. And then that data is associated with your player, and you can also have React again get that data, work with it, and write your typical -- your game loops, right? Where it's, okay, I have a velocity, I have a position... The classic example - okay, each frame, I need to add the velocity to my position update, update the player... That's something that I don't want to do inside React, inside the React component, because the question is "Okay, in React, if it's --" What's the data? Is it a state, is a React state? Because then that would mean if data updates 60 times a second, I'm re-rendering the React tree at 60 FPS. And that's not something I want to do. I want React just to be this layer where I can compose things, and read what's there, but it shouldn't have any performance impact. There should be almost no React re-renderings happening during gameplay.

So that's where our engine comes in and it allows you to, at the same time separate the data, have it live outside of React, update it imperatively 60 times a second, but at the same time, compose it inside JSX and have it there together with your mesh, with your player, where you're looking for it.

**Nick Nisi:** With the React wrapper around this - like you were mentioning, being able to see everything from a JSX kind of level, see everything that's loaded into the page, and things like that... That's really cool, and I agree with that. I'm curious if other metaphors from React carry over. Do you end up writing a lot of utility things as like hooks, or is that kind of just left alone? How far does the React integration go?

**Brian Breiholz:** Definitely. There are hooks, as I mentioned. There are engine uses, what's called an ECS, Entity Component System; we probably don't have the time to go into that, but it's a way to manage your data and functionality. And for example, we provide hooks, like use component, where it's,okay, you give a ref to your entity, you provide the component type, and you get a reactive hook. Or if the data updates too fast, like position or ammunition, for example, you get a callback function, so that you can manually write into a diff, or whatever, as your output.

So there are definitely hooks, which are similar to classical React; they are higher-order components, where in Cooper & Onita for example I had these big, red buttons that you could walk on, that would lift a platform. That was basically the mesh for the button, together with a higher order component for - I think I called it pressure plate, or something like that... Where it's, okay, it will have this logic attached to it, you can move things up and down, but whatever gets rendered is up to you. And all the other platforms - like, there was a lift, or some rotating thing... All of them were higher order, in the sense that you could pass whatever gets rendered into there, and it will work out of the box.

**Nick Nisi:** Regarding the game engine, you mentioned one thing, and that was state machines. So I had to ask about that. Is that something that the game engine provides? And then also, towards that, does the game engine provide things like -- I'm just thinking of my very vague experience with things like Unity, and things like that. Does it provide level designers, or -- how would going about actually creating the disco floor... What would that development look like?

**Brian Breiholz:** Okay, so first off, there are basic tools that you will encounter in any game engine that we offer, like an input system, a decent camera system, things like that. Then we are working on the editor as well, or on a editor, that will probably be a later release. So right now if you're asking about level design, I personally do that in Blender. So I lay out in this example the disco floor in Blender, export as glTF, run it through glTF JSX, with his which is a great tool that turns the mesh hierarchy into JSX-readable format, which is great. If you want to, say, highlight a certain mesh inside your model, say there's a special lamp or something, and whenever you hover it, or the player comes close, you want to highlight it; that could just be inside React. The code will look just like hovering a button. It's "Okay, on hover, set the state, change the color", whatever.

**Nick Nisi:** Nice.

**Jerod Santo:** So if you don't know Blender, you're up a creek.

**Brian Breiholz:** At least for now.

**Jerod Santo:** Okay... Sorry, Nick. We're done. We're done here.

**Nick Nisi:** I was done a long time ago, but it's super-interesting... \[laughter\]

**Jerod Santo:** This is why we're flat -- what do you call yourself, a flatlander? That's why we're flatlanders, you know? 3D is just a different breed. Is this game engine going to be open source? Is it going to be for sale? How's it going to be released?

**Brian Breiholz:** It's going to be open source. It's going to be part of the -- I'm always not sure how to pronounce it... \[unintelligible 00:26:58.05\] The collective around Three Fiber, that has a bunch of other libraries under it, like Zustand, and React Spring, and a bunch of others.

**Jerod Santo:** Now your next React Game Jam, you went from a meager third place to first place... Which you can't actually go any higher than that; I wonder if you knew that or not... So you might as well just give up now and not do another one, but... First place, best game overall. This was a Cooper & Onita: Midnight Snack. A co-op jump and run with puzzle elements. You play as two characters, Cooper and Onita. It's like a dog and a cat, right? And you can hop back and forth between them, on their mission to find some midnight snacks. Do you wanna tell us about that one?

**Brian Breiholz:** Yeah. So when the second theme was announced, it was a lot more stressful than the first time around, because I had no idea how to incorporate the theme of cooperation into the game. You can't just fake it and say "Yeah, look, it's a disco. It's on the theme." Right?

**Jerod Santo:** \[laughs\] Right.

**Brian Breiholz:** So it has to be something that actually involves gameplay. So I was contemplating what to do. Eventually I ended up on the Unity store again, browsing for cool-looking models, and I was already working with the Cooper model, the dog, earlier, doing animation work... And the artist has absolutely amazing stuff on the Unity store, and they have also published this cat model, which ended up being Onita. So I saw both of them, and I kind of thought "Okay--" It kind of went from there where I thought "Okay, maybe we can have both of these characters. They look really good. They also showcase animations... Maybe you switch between them", and it kind of just happened from there.

Aside from that, time management was a bit better. I didn't scoop in that many features on the last night, but it was also -- it was still stressful. I think for everyone participating in these jams, it's just -- it's a lot. And I had to fix Engine Box for like three days straight, where the scene switching wouldn't work. In Cooper & Onita there are the stages, where once you collect the bone for Cooper and the fish for Onita, the stage is complete, and you can load the next one.

Originally, those were supposed to be different scenes, handled by our scene managing entity. But it turned out that it was horribly buggy, and they were bugs that you couldn't ignore. It was like "Okay, the new scene gets loaded. Suddenly, Onita is 100 meters tall." And you have like the whole model across the screen. I didn't get to figure it out in two or three days, so I ended up hacking it together again. Everything is just one scene; things get switched out when they need to. But it was ugly as well, again. And I was also thinking "Man, this code is looking pretty good. It could be a real game after that." But not until -- not after that happened.

**Jerod Santo:** So you haven't touched the code since, just like the other time.

**Brian Breiholz:** Nope. Nope. I've been thinking about doing a second version of it. I wanted to make some games for one of the online platforms, like Rune, for example, or Pokey... Crazy Games I think is another one... And that's when I thought "Okay, maybe do a remake of Cooper & Onita." But I haven't gotten to that yet.

**Jerod Santo:** And what did you win, last game? I mean, they've got some cash prizes... It's not just kudos, you get some actual stuff, right?

**Brian Breiholz:** Yeah, I think it was like $500, and a bunch of subscriptions. I can't remember them all, it's been too long, but there's a bunch of stuff in there. It's really cool.

**Jerod Santo:** So you can't go up from first place, but you can probably continue to refine your game engine if you continue to compete in React Jams. Is that your main motivation? It seems like you're doing it for fun, but you're also -- each time, your game engine is getting better, and you're hitting against different issues that it has, and you take that with you, even if you leave the rest of the code to never be touched again.

**Brian Breiholz:** For sure. That has been one of the factors. Of course, it's great fun. It's always a nice vibe hanging out in the Rune Discord during the jams... I also just like the competitive feeling of - okay, you have to lock in; it's going to be you and your game code for a week, and nothing else matters. And in reality, that's not always how it turns out, but the idea is nice. But in terms of practicality - yeah, there are huge benefits from just testing out the engine in the wild. The scene switching back, for example - that's one. And just getting a feeling for what parts of the API aren't that smooth yet, what parts are kind of annoying, where do you have a lot of boilerplate... Stuff like that. So there's definitely been a lot of improvements from joining in those events.

**Jerod Santo:** One thing that's interesting about this one is the title of the page. It says Vite + React + TS. What's this TS that you speak of?

**Brian Breiholz:** I think that's the Vite TypeScript style template that I used.

**Jerod Santo:** You never got around to changing those \[unintelligible 00:32:43.13\] titles. There's certain things that just don't matter during Game Jam. I mean, he still took first place, even with the Vite default starter template title... \[laughter\]

**Brian Breiholz:** No, they were -- with Cooper & Onita I ended up finishing at 8pm here, because that was the time that I discussed with my girlfriend that I have to stop then... Because on the first jam, they do end at like 8 or 9 AM here. So it means "Okay, if you want to get all of the time in, then you're going not going to sleep on the last night", right? So on the first one -- that's not the worst part. I was so focused on animations and having a cool character controller that there wasn't any type of gameplay, score system, or checking is a level complete, or anything. All of that happened in the last two hours, where my brain was already completely fried. So I ended up hacking a - you get some type of score, I think, for hitting enemies, or for killing enemies while you have health points as well. But when they go to zero, you don't even die; the original score just gets reset. But there was no time for something else. All sorts of bugs. The enemies, once they die, whenever they respond, there was a bug where they continually end up being stuck in the ground, more and more. If you play for like five minutes, all of the characters are going to be under the ground, so you have to reload the page. Yeah, so the Vite template definitely wasn't the worst part.

**Break**: \[00:34:31.14\]

**Jerod Santo:** You mentioned your girlfriend, and timing problems... I mean, this is an 11-day jam... You certainly have to have people in your life who are cool with it. I mean, I'm thinking -- I would love to do one of these, I just couldn't do 11 days. My whole life would fall apart. People might literally die. I don't know, Nick. You probably are in a similar boat, right? You'd lose your job, Nick. Probably.

**Nick Nisi:** Yeah. I couldn't imagine doing one day of this...

**Jerod Santo:** Right. I mean, we've done hackathons in the past where it's like a weekend, or 24 or 48 hours... And that's -- you can't really do much in that much time. I mean, I like the fact that it's 11 days, because you can actually build a game, versus 48 hours... I mean, Brian, you were working on like one bug for like 48 hours. So I get it, but man, that's just a lot of time to dedicate. And probably a lot of sleepless time, and people who normally rely upon you, just like "Brian's unavailable till Thursday..." \[laughs\]

**Brian Breiholz:** Yeah, it's definitely tough. That's why we had this discussion after the first one, because it definitely was too much. I am in the position that it is my job to work on a game engine, and this definitely falls under the umbrella of "Okay, testing the engine in the wild." So that's the first part there, where I get way more time than people that have a day job, and that only can start working at 7pm, or something. And then yeah, my girlfriend was super-supportive, but after the first one it was totally madness. I have this -- I don't know if you know it... Worker Time. It's this tool inside WebStorm ...

**Jerod Santo:** Like a Pomodoro thing?

**Brian Breiholz:** Yeah, that tracks the actual programming time that you did over the day.

**Nick Nisi:** It's like a Rescue Time type thing.

**Jerod Santo:** Okay, gotcha.

**Brian Breiholz:** And it showed, I don't know, over 70 hours of actual programming time. And you're also standing in front of the whiteboard, or just staring at the wall, trying to figure out what the hell is going on... And on top of that, there were 70 hours of just raw programming. But I needed a full week off after that as well. I was destroyed. Luckily, I'm an ex World of Warcraft player, so I'm kind of used to that sort of behavior, but... I'm getting old as well, so that's definitely the limit.

**Jerod Santo:** Right.

**Nick Nisi:** What do you mean, "as well"?

**Brian Breiholz:** Oh, no, sorry... \[laughter\] That was a mistake.

**Jerod Santo:** "Listen here, sonny..." That was great.

**Nick Nisi:** You know though, in a lot of ways I guess I've been preparing for this interview, because I just watched the Half Life documentary from Valve on YouTube, that came out like five months ago... Because Half Life came out 25 years ago, and it was like a celebration of that. And it was so cool just watching that, seeing these old guys now talking about "Back then we did this, and I stayed up all night... And oh, we just walked over to \[unintelligible 00:41:02.08\] and came out with the Quake source code", and all of that. Just super-cool... And I just kept thinking the whole time, "In 25 years, no one is going to be interviewing me about the form I wrote today..."

**Jerod Santo:** Aww...

**Nick Nisi:** But you...

**Brian Breiholz:** Maybe. Maybe.

**Jerod Santo:** You have a chance, Brian. You have a chance.

**Brian Breiholz:** I mean, so far it's still pretty niche, but one can dream.

**Jerod Santo:** What is your dream? What kind of games do you like to build yourself? Is it always 3D? I know you're working on an RPG card game, it looked like, according to your Twitter bio... Is that like a hobby thing, or is that part of this? Tell us about what you want to build.

**Brian Breiholz:** That's the long-term project that I've been rewriting for like five or six times. I basically started it when I came out of college... It basically started as a Halftsone clone. I don't know if you're familiar with it... It's this card game from Blizzard. A bit like Magic, for example, just a lot more simpler. And I ended up basically cloning that, but putting it on a chessboard, where all of the minions that you summon are a piece on the board. So you have like two components - you have your cards, and you move around your \[unintelligible 00:42:14.12\] And that was completely 2D, just an HTML table with some \[unintelligible 00:42:22.16\] And it's slowly grown in complexity to, okay, now it's kind of the dream to have a semi-open world, where actually the minions have gone completely, you're playing a character, it's an RPG now, you're playing a mage, a warrio, whatever, and the cards are your abilities; just skills. So when it comes to designing your class fantasy, this is equivalent to building your deck... Because what's the most fun in card games, in my opinion, is building cool decks.

Yeah, so that's my dream game. Aside from that, I'm really hoping that web games in general just take off. Slowly we've got the tech... WebGPU is at least in Chrome, but in a few years it'll likely be widespread... And there's just something really cool about sharing your game over a link. If some friend messages me "Okay, there's this is new, cool game. Let's play around together", what do I have to do? I have to download an app, I have to make an account, I have to get him on my friend list, and then click Join Lobby, or something like that. On a web game it could just be "Click on this link" and you're right in there, in my lobby, four guys, awesome, whatever; all those types of games. Tech wise it could work on the web. And there's just such a low barrier of entry when it comes to playing together with friends.

**Nick Nisi:** Well, someone like me, who only has Macs, I can open those.

**Brian Breiholz:** You can just join them, that's right. Hopefully not in Safari, but it works on a Mac.

**Jerod Santo:** I may have just played Cooper and Onita in Safari. I hate to tell you, but I did... \[laughs\]

**Brian Breiholz:** I haven't tested it in Safari, but... I mean, it didn't crash, apparently.

**Jerod Santo:** It worked. No complaints. I opened up the other one in Brave - so there's your Chromium engine there - the warrior one. And that worked really well. I didn't try that one in Safari, but... Default browser, but I'm using Brave to open up these links, so for some reason it went into Brave, even though I have a default browser. I guess that makes sense; you're following link in Brave, it goes to Brave. But the other one was via email or something, I can't recall. Anyhow. What are you going to build this time?

**Brian Breiholz:** I'm probably sitting out this time, actually...

**Jerod Santo:** Oh... Too much.

**Brian Breiholz:** I have much too much stuff to do for the engine. I'm rewriting the animation system right now... But I'm likely going to join the one after that, again, this time with a multiplayer challenge, because that's just really exciting, having a lot of people actually play your games. So I'm looking forward to that.

**Jerod Santo:** Yeah, it seems like they're gaining steam with this game jam. They've done a pretty good job of doing it recurring, running a good jam, I guess - I don't think there's something else to call it - a good contest... And the fact that, especially with the Rune games, there's people in there playing them... So it's pretty cool, because it gets a little bit of exposure to your game, even if you're just out there testing an idea. Because you can build a game in 11 days, but even like you said, this was not a full-fledged game. It was an idea of a game, maybe a teaser... But if you have an idea of something that you might want to build into a real game, it's a great way to build a prototype, see if people actually like it, see if it's fun, and then maybe throw that prototype away and start fresh when you're not overworked and underslept. Or just build off of it if you hit that 70% mark, and you don't trash it in the final 30%. I think that's a great way to test out a game idea, is by doing one of these.

**Nick Nisi:** Yeah. On that, with a game jam, but also just in general, getting started with game development on the web, or with React, or whatever... What's the best way to do that? Is it to go create a game engine?

**Brian Breiholz:** Probably not.

**Jerod Santo:** Probably not... \[laughs\]

**Brian Breiholz:** But you might try. I would actually recommend you join the Web Game Dev Discord. That's what I did. Super-cool people hanging out there. Everyone's building different stuff, from Three.js, Three Fiber, Play Canvas, Babylon, Phaser, lots of people building 2D games as well... But everyone enjoying living on the web, using tools you're familiar with... Because after all, it's about having fun. If you're not trying to do it professionally, you want to get something on the screen, you want to build things, and why not use the tools that you're used to? If your day job is this working with React, that just makes sense. If there are tools to build games as well, and you're interested in doing that - just use what you're familiar with?

**Jerod Santo:** Very cool. Well, reactjam.com. If you don't want to participate as a game dev, you can still just follow along and play the games as they come out, like I do. It's lots of fun. There's a handful of -- I mean, probably a dozen or so people submit games, and I would say out of those 12, 9 of them are playable. And of the 9, 5 of them are actually pretty fun. So it's a good time. Check it out. Brian, what's the best way folks can connect with you, especially if they're waiting around for you to release that open source game engine for them to check out? What's the best way to stay in touch with you?

**Brian Breiholz:** Probably on Twitter, \[00:48:02.23\] Other than that, I'm very active in the Web Game Dev Discord. I think the website is just webgamedev.com, or .org. You can probably find me in there. Yeah, those are the places.

**Jerod Santo:** Very cool. Well, you have all the links to all the things in your show notes, especially this webgamedev.com. It looks like a great resource for all kinds of links to other places to get started. And including that Discord. So we'll definitely link up that one, as well as all the other stuff, so you can just click through and find your way.

One of the great things about the web is just sharing links, right? It's so easy, so universal, it opens in any browser... Best rendered on IE4... No. And that'll get you on your way. Of course, reactjam.com, check that one out... And that's it. So on behalf of Nick Nisi, Brian, thanks so much for stopping by, hanging out and telling us about your work. It sounds like very cool stuff. I'm a little bit jealous of your full-time job... But mine's not too shabby either, so gotta keep my jealousy in check.

That's it for today. I'm Jerod, this is JS Party, and we will catch y'all on the next one.
