**Jerod Santo:** Hello, friends. The sounds of those Breakmaster Cylinder beats means it's time once again for JS Party. I am Jerod, your internet friend, and I have three of my regular JS Party panelists here with us today. The first one is Feross. Hey, Feross, what is up?

**Feross Aboukhadijeh:** Hey-hey!

**Jerod Santo:** And we also have Kball here. What's up with you, Kball?

**Kevin Ball:** Hey! I was just enjoying how we were all bobbing our heads to the beat. It was pretty fun. \[laughs\]

**Jerod Santo:** I agree. We should get a synchronized version of that out there on some sort of animated gif, or something. Get that done, Nick.

**Nick Nisi:** Can do.

**Jerod Santo:** Just kidding. Hey, guess who else is here? It's Nick Nisi! What's up, Nick?

**Nick Nisi:** Hoy-hoy! How's it going?

**Jerod Santo:** It's going good, because we're here for you today, Nick. This is your big show; this is your coming out party...

**Nick Nisi:** Oh, no...

**Jerod Santo:** It's not a TypeScript party, but you're gonna find a way of making it... It's not a Vim party, it's a React party. What's going on here...? So Nick, we're tentatively titling this episode "Nick's big rewrite." He recently did a talk at React Global Online Summit about componentizing an application with React and XState. And to do that, he has rewritten an application that he previously wrote in Dojo, in React, with XState. So we're here to talk about that, we wanna hear your story, your findings, your troubles along the way, whatever you wanna tell us, Nick, and then we're gonna React to your React tale. Go ahead, take it away, Nick.

**Nick Nisi:** I get it, that's awesome.

**Jerod Santo:** Do you like that one?

**Nick Nisi:** Yeah. \[laughs\] So yeah, I don't know, it was like maybe a year or two... Probably two years ago, creating that gameboard for JS Danger, which is what it was originally called, and it's kind of been genericized a little bit more to a quiz show...

**Jerod Santo:** Yes.

**Nick Nisi:** And it has theming for both JS Party and Go Time, which is really awesome. But I wrote it in Dojo because that's what I was super-familiar with back then. I was kind of ramping back into React. It was just a fun -- a little project to play with that and get the gameboard built out based on a set of configurable options that you can pass in, so that you could develop these large JSON objects that define how the game is played... And Jerod is probably very familiar with that, because I think you've probably developed most of them...

**Kevin Ball:** \[04:21\] Oh, large JSON objects... I've just heard someone describe React to me as just transforming JSON into pixels... And that's React.

**Jerod Santo:** Right.

**Kevin Ball:** All you do is transform JSON into pixels, and now it's a brainworm and I can't get it out of my head.

**Nick Nisi:** Yeah, I like that.

**Jerod Santo:** Well, it's actually a nice way of defining... I guess it's really configuration, in this case, for the games. So like Nick said, we have multiple games... Y'all may know our JS Danger episodes, which was like our "Don't call it Jeopardy" game show. You can go back into the feed and find those; they're pretty fun. And we also genericize it, like Nick said, to run on the Go Time podcast; they run a version called Go Panic. And every time we were having an instance of that game, it would be nice to not have to handcode or rewrite or do a bunch of stuff. If I could just author the different bits, the questions, the answers, the people involved etc. in a JSON file, and let some sort of smart piece of software basically hydrate that into an application, that's pretty usable, at least for a nerd like me. Maybe not so usable for somebody who's not a programmer. But once you have a JSON data format, you can then build builder UIs pretty easily. So that was kind of the general idea. So yeah, it's all JSON authoring, and then Nick takes it from there... And you wrote it in Dojo, like you said --

**Nick Nisi:** Yeah.

**Jerod Santo:** ...which for me wasn't so great, because I had a hard time contributing... But maybe it's just because I'm dense.

**Nick Nisi:** Yeah, I should clarify that it's not Dojo 1.0, which has been around since like 2005. It was modern Dojo. I don't remember the exact version. It was probably like 6 or 7, something like that. But it looks and feels a lot like React, if you're familiar with React. It uses JSX, and it kind of has almost a functional React style to it. You can just write plain functions... But you do a lot of wrapping of it. You create a typed wrapper, and pass a callback to it that then renders everything.

That typing helps you -- it's like a factory function that creates all of the types for you, applying the prop types, and things like that... And then returns it for you, and it's treated like a regular component from there.

The other thing is Dojo has always been kind of considered this kitchen sink framework from the 1.0 days. It's had everything in it, and there's the "Dojo already did that" from JSConf that has been catchy... And it was no exemption here. Instead of using something like Redux or anything like that, it was using just the Dojo store's API that it provides, to store all of that. So it would take in the JSON object and then just break that down into the different pieces that it needed to store. And that's things like a list of contestants, a list of rounds, and the rounds have categories in them... If you think to the Jeopardy board, one round you would have five different categories going across the top... And in a full round you'll have five questions, rated 100 through 500 in point value for each of those categories. And those are the values that you can pick from.

So it's just like set that all up in this object store that Dojo comes with, and you can then create these -- I'm completely forgetting the name of what you create, but there are like these executors that are ways of modifying those little pieces of the object in a way that is reactive, so that it'll trigger an update to the UI whenever those small pieces are updated... So if you wanna update a user, you'd pick the user and then have some way of filtering down to the exact user that you want if it's in an array, and then update their score, or mark a question as used. Those are kind of the two main updates that you'd have to do. But then it just gets rendered out.

\[08:08\] And early days of it - I can't remember exactly where the conversation came about, but Jerod, you and I were talking about having that as like some cool demo project where we had it in like a number of different frameworks or implementations of it, just as a cool way to kind of play around with that... So when I decided to put together this talk, I was thinking of like a good application -- you know, I can't use my dayjob stuff in the talk, right? So I wanted some good application that I could use to kind of portray the concepts that I wanted to get across... And it was really actually a good, small, contained project, because it does have kind of a few different views. You have the main gameboard, you have a question view, you have a way to list contestants, a contestant view, and like a winner view. And then it's not just like a boring form... So like it has that appeal to it as well. It's more interesting.

And then - yeah, you are dealing with this larger structure, and when I'm thinking about the state that I want to put together, and the talk that I was giving, which was kind of talking about XState specifically, it fit really well into a finite state machine... To where I had these finite states, but then I had an infinite number of questions that I could have, and how I deal with that... And then - yeah, it just seemed like a really good way to lay out those concepts.

And kind of the crux of the talk - it was a junior-level talk, kind of introducing XState with React as like a state management library that you can use in your app... And the piece that I was really trying to convey across was because of the way that you can develop state machines - and specifically XState can render state charts from those machines - you can treat your whole application state as a component, just like you would your React component, a player component that shows a player with their score, and things like that. You could have that for the entire state of the game. And you can even use Storybook to render out that chart, so that you can just go look at Storybook and see exactly how the state is supposed to behave, and work on it and complete it without any other UI being generated.

**Jerod Santo:** So this was very much talk-driven development. You didn't do this to learn or to have fun; you did it for a talk. Maybe you learned and had fun along the way, but that's why this was something you were doing.

**Nick Nisi:** Absolutely.

**Jerod Santo:** So at the end of the day, we have our multi-implementation gameboard - did you replace the Dojo stuff, or is it like "We'll have a Dojo version and we'll have a React version in the repo together"? How is that gonna end up?

**Nick Nisi:** Yeah, so I haven't gotten that far yet... But right now they're just in kind of two separate repos. But I would like to combine them and then maybe pull it out into more of like a monorepo style, where you could have a Dojo implemenation and you could have a React implementation... And really update the Dojo version to use XState. Like, kind of have XState be its own component too, or its own package that everyone of them consumes... And in that way, all of the game logic is in one place that can be updated for all of them.

**Feross Aboukhadijeh:** That's really cool. That's almost like a to-do MPC...

**Kevin Ball:** Yeah, I was thinking that... It's like the new to-do MPC. Though I wonder if standardizing XState is gonna prevent some takes, or some approaches.

**Nick Nisi:** That's a good question. It definitely could. There's some warts around -- well, specifically XState and React. There's some ways that I would like to do things that are a little bit harder because of -- I mean, I guess it's more of the way I set things up, but... I kind of treat XState as being this project that exists completely outside of React, meaning outside of any kind of React context, or anything like that... So all of the really cool projects and things that you wanna use in React, like hooks... The React Query specifically is like a really big one that I wanna be able to use, that I can't call from XState... Well, I kind of can, but it exists outside of there, so I can't just make hook calls. And in this project I haven't done anything too crazy with that, but in other projects I have done a couple of different iterations of things like setting up my own Pub/Sub listener to have a component that's only job is to listen for a publish to happen, and then do something in React land, because it can call hooks. And then I can just publish those out from the state machine and it'll update in the UI.

**Jerod Santo:** \[12:44\] So how many, generally speaking, lines of code are we talking about? If somebody was like "Well, I'm a Vue advocate. I use Vue. I would love to do one of these in Vue", and then you have the Vue implementation alongside these other ones... Is that like a weekend project? Does that take like 40 hours and no one wants to do 40 hours for something this silly? What do you think would be the amount of work that would have to go into each version of this, if we were to have such a thing?

**Nick Nisi:** Yeah. So not a lot, I don't think, because -- I guess it only took me a couple of weeks, very much part time, around kid schedules and everything, to get the Dojo version working a couple years ago... And it only took me a couple of hours to get it converted to React. And just running clock on the project, the React version, it's 37,627 lines of code. However, 36,000 --

**Jerod Santo:** Was that Node modules?

**Nick Nisi:** No...

**Jerod Santo:** Okay. \[laughs\]

**Nick Nisi:** I am excluding all of the git-ignored files. So it's 36,000 lines of that are the JSON files, the config files for --

**Jerod Santo:** Ah, yes... So it was a thousand lines, roughly...

**Nick Nisi:** Yeah, 1,204 lines, with 837 of them being TypeScript. Oh, wait. No. That's the Dojo version.

**Jerod Santo:** So 1,200 lines Dojo version.

**Nick Nisi:** Yeah.

**Jerod Santo:** Buyer beware, it's written in TypeScript, so that does knock it a few points, but... Keep going. \[laughter\]

**Nick Nisi:** You'll come around. No, the React version is 1,342 lines. So a little bit bigger, but not much.

**Kevin Ball:** That does seem very tractable... And I wonder even if you could step back from a React version and say "Okay, what if we built a version of this using Next? What if we built a version of this using Remix? What if we built a version of this using what have you?" Separating out -- I think keeping the XState actually as an implementation detail rather than something that's shared, because...

**Nick Nisi:** Oh, yeah.

**Kevin Ball:** ...I don't know how well this would work in a Remix project. If I was thinking in Vue, I would probably wanna use VueX rather than XState...

**Jerod Santo:** Right. The common denominator should be the features and the JSON files.

**Nick Nisi:** Yup.

**Jerod Santo:** Those two things should be the things that don't change across implementations, and I think everything else would be fair game. But Nick, maybe open up XState a little bit. Now, we have a whole episode with XState's creator, so we have a deep dive, that you were on that one, Nick... So people can go back into the feed and get a real deep-dive on XState. But for those who are just like "Okay, I know what Redux is, kind of" or "I know that I have state problems inside my single-page apps", what does XState bring to the table, and why was it something that you wanted to reach for and teach other people this technology?

**Nick Nisi:** Yeah. So that was episode 191 of our podcast, where we had David on to talk about XState... And XState was something that I was interested in because -- one thing that we were doing in my dayjob was doing this complete refactor or rewrite of one of the most complex pieces of our application... And our dev team was working with our product team on scoping out exactly everything that it needs to do, and they were using this Miro board that ended up just being giant, with like "We're gonna start here. This is the entry into it. And based on this criteria, you're gonna go here. And based on this other criteria, you go here." And it branched off into like 15 different branches. And then some of them came back together, and then went back out...

\[16:10\] And the whole time I was looking at that, I'm like "That kind of looks like a state chart almost." And I was like, "What if we could just throw this Miro board out and have a generated board based on the actual code that's running?" And it would have every little intricate detail of that; every possible little tiny bit of state that we need to keep track of, would be kept track of. But we could also walk through that, and it would make sense to everyone, at all technical levels, as we're walking through it.

So that was kind of the jumping off point for doing a quick spike on XState to see how we could implement it, and what the risks are, where we would have been with it, and all of that. So we kind of jumped into it from there.

Before that, we really weren't doing a ton of state management. We don't have a Redux at all... And I haven't used Redux since the early days of it, when it was not very fun to use. It just seemed like a lot of boilerplate scattered across a lot of different files, in like the recommended ways of setting it up, that just didn't seem worth it at the time. And this was pre-ES2015, so a long time ago. And it's gotten a lot better since then, I'm sure, and there's a lot of projects, like Redux Toolkit, that are built up to help with those things, I think... But XState was something that I was really excited about. I liked that it's more framework-agnostic, and you can bring it in and use it anywhere... And I really like the ideas of it, and just the appeal of generating that chart was really big on my list for trying it out.

**Break:** \[17:42\]

**Jerod Santo:** So the JSON files are somewhat interesting, because they have the information about this version of the game, but they also have some config, like the name of this game - is it the JS Danger version, is it the Go Panic version? Because we'll style the gameboard differently there as well. But then we also have information about the people playing the game, the actual state of the game as it's being played as well... So it's kind of like we're munging everything into one concern. That being said, it's not so complex that we would need these different JSON files. But have you found that harder to work with? Because at one point you're just kind of reading these things in, and then there's other areas that you're actually reading and writing as the game gets played.

**Nick Nisi:** \[20:19\] Yeah, it's not too terrible, because it's not a lot. If it grew any bigger, it probably would be more cumbersome, and it's something that I'd wanna separate. One thing that is in there - and it's kind of just in there so that we have a value - is like for each player that's playing, it lists a score. And for each question there's like a used bullion that stars off as false, and then as we go, it changes to true. And ideally, I'd like to have that actual game state - like this player's current score, and whether this question has been used - separated from the actual game data that's being plugged in... But I think it was just as a matter of like quickly getting it going when I originally did it. I just kind of munged them together and have them set up.

Back in the Dojo world - and I guess with XState, too - one of the really cool things is on every state you define the exact events that can happen at that state, and exactly what happens on it. So I can easily specify "Only when a question is being shown can I actually increment or decrement a score on a user." And I could easily set that up so that it's only doing that for the current user that is playing the game, or the current player that's answering the question. So I'm very locked into one way of doing things... And that's the benefit of XState - there's no impossible states, or... There's not one way to jump from this one state where I'm showing the gameboard, to this other state, where I have a winner. You have to follow a specific flow to get there, and you define that flow exactly how you want, and you can't deviate from that, which is like a really big benefit.

**Feross Aboukhadijeh:** So how do you compose these states? It seems like there's quite a lot of latitude. You can do it in a lot of different ways. Did you do a state for every question? How do you break it down?

**Nick Nisi:** Yeah, good question. So the way that I set it up is I actually have the state machine doing a lot more than it may need to as well... But when the state machine starts up, it starts off and you specify like an initial state. And I have two top-level states; there's a load state and a game state. Oh, and then a winner state. The winner state is like the final, and the state machine is done at that point.

The load state will look for the specified JSON file for the game. Right now it's just hardcoded, but to bring it up to parity with the Dojo version it would look in the URL params to get the path to the specific JSON file that you want to load. And it has a state machine that just triggers a service to do a fetch, grab that JSON data, and then populate the context. So state machines have this context that you can set, where you can store things that would be like infinite states.

So I wouldn't want to have a unique XState state for every question that we have, because that could be infinite. Instead, I just have like an array of questions in there, and then I have a -- I treated it as like an idle state showing the game board, and then a question state showing a question, and then a show answer state internal to that, showing the answer on that state... But every time that it gets into there, it's reading what the current question is from the context, and then using it right there. So the context is where you can actually store data that's not state-specific, or it could be like infinite states, and then you can read and write from that.

**Feross Aboukhadijeh:** So if a question goes from being unused to used, that wouldn't be a state transition in this system...?

**Nick Nisi:** \[23:57\] No, actually it wouldn't. It would be like -- once I hit the show answer state, that's when I consider the question to be used... Because you wouldn't bring it back up after that. So you can trigger these side effects once you enter or exit states, and once you enter the show answer state, one side effect that it does is that it goes to that question, marks it as used in the context, and then the next time it rerenders it'll update that to blank out that question on the board.

**Kevin Ball:** Wait, so that's interesting... So what you're saying is that the state machine is the UI state, not the underlying data state.

**Jerod Santo:** Right...

**Nick Nisi:** That's how I'm treating it in this, yeah. But it's kind of both a little bit, because it's treating the loading of the game data and setting all of that up, and then it goes into this question state, or game idle state, where you can actually play the game... And then I am triggering off of that. If I'm in the idle state, then render this. I'm not using anything like React Router or anything to show the different routes. I'm just checking whether the state match is idle, then show this; if the state match is question, then I have a question and render that view, and then if I have a winner, render that view.

**Kevin Ball:** Okay. So where is the ongoing game state, of like what are people's scores, and what's been answered, and all of that? How is that modeled? That's not in XState?

**Nick Nisi:** It is, yeah. It's in the context. So in the context there's a contestants array, and each one of those has like a name, their Twitter handle and avatar image (a link to an image), and then their score. And that score is the thing that just keeps constantly getting updated as their score changes.

**Feross Aboukhadijeh:** So the context object is like a free-for-all. You can basically change that however you feel like, whenever a state transition happens...

**Nick Nisi:** Yeah.

**Feross Aboukhadijeh:** ...and there's not really anything enforced in there about how you're changing.

**Nick Nisi:** Right. You enforce it through those actions that you set up. So XState comes with this -- you know, anytime an event happens, you can trigger these actions which are like side effects, and it has a whole helper to help you set that up, where you can, say, assign and give it the key of something in the state. So I can say "Assign contestants", and then give it a callback function that will accept the current context, and the event that was triggered, so I can pull data that was passed on that... And then return an updated contestants list that has that updated state in there.

**Kevin Ball:** So if I'm understanding correctly, basically you're controlling the context because it's only being manipulated by actions that are happening within XState.

**Nick Nisi:** Correct.

**Kevin Ball:** But does XState have any sort of model or conceptualization for validating context data? Like, what types of things are valid and allowed in that data versus not?

**Nick Nisi:** Not really... So when you create it, you can pass in a generic to define the shape. So I create an interface of like "This is exactly what the context looks like", and then it's type-safe from there. And I can also create a type alias of all of the possible events that I can send to it, and I'll get a TypeScript error if I try and send an event that is not defined in there. Beyond that, it's pretty much free for all. If I said that "This is gonna be a string", I can't change it and set it as a number, but that's just TypeScript helping out there.

**Feross Aboukhadijeh:** So it seems like there's a bit of an art to deciding when to make something... You could have every question be its own state object that gets used up, and then you could have the context object - instead of being an array of questions, it could be an array of nested XState objects which have state transitions to go to used.

**Nick Nisi:** Yeah.

**Feross Aboukhadijeh:** So it's up to you to decide when to do that. How do you decide how much XState is too much...? Where do you draw the line? \[laughs\]

**Nick Nisi:** \[27:51\] That's a good question. And for this, and for this talk, I specifically kept it as just like one, pretty -- a single state machine that has a couple of nested states. But I kept it pretty simple on purpose, just so I could fit -- like, when I render that state chart, I could fit it all on the screen and show it, and it's easily something that you could walk through.

In the main project that I'm working on with XState at my day job, there's actually one orchestrating state machine, and then every page that you go to - it invokes a child state machine to handle the state of that page that doesn't matter to the overall state... And it's much, much more complex.

But that's another thing with XState - it's like, you create these machines and then you invoke them, or you interpret them (is the function that you call), which creates an instance of that... And you basically can treat that as an actor model. You have the actor that has its own private state that it can work with. And when I trigger these child machines, they can't access the parent state, but they can send messages to each other to relay the data that they need up and down the chain. But then everything is treated as private and only accessible by that machine.

**Jerod Santo:** Here's a heuristic, Feross, when you know you have too many state - it's once you have 50 states, then you have to stop. That's the heuristic. \[laughter\] So we're not letting Puerto Rico in, Washington DC, you're not gonna be a state... We've got 50 already. That's the limit. So just keep that in mind.

**Kevin Ball:** It's when introducing new states, am I disrupting the balance of power?

**Jerod Santo:** There you go...

**Kevin Ball:** A question about persistence... And we talked about this a little bit over the break, but - so right now this is only client-persisted? If you reload the page it restarts your game?

**Nick Nisi:** Absolutely.

**Jerod Santo:** Don't do that.

**Kevin Ball:** How hard would it be to do something stronger than that? Like, could you store a serialized version of your state machine in either local state, or a database, or what have you?

**Nick Nisi:** Yeah, it doesn't do that currently because I didn't want to complicate the talk any more than I needed to... But you absolutely can do that. You can store off a serialized version of the context, and you could throw that in local storage, for example. And then you could read that back in, and when you call that interpret to actually start up the state machine again, you can give it an initial state and you can give it an initial context to start with. You can say, "Oh, here's the context that I pulled out of local storage, set all of the values exactly as they were. And oh, by the way, when you refresh the page, you had a question open. Here's the current question", and so you can actually trigger it to not start at the top of the state machine or whatever you signified as the initial state; you can have it start exactly where it left off from there.

**Kevin Ball:** So is that relatively trivial, to do that serialization and deserialize? For example, could you put a global side effect that anytime the state machine changes, it writes a new serialized version to local state, and then anytime you reload the page, it boots off of that?

**Nick Nisi:** Yeah. When you create that service, calling the interpret method - which I also... I didn't mention this, but I do that and then I store the current running state machine in just a React context, and then I access it through - you know, I wrap everything with a provider, and then I can access that through some custom hooks to get what I need. And in there, with the value that I'm storing in context, you could just give it like an on method, or an on callback, and every time it gets a transition, you could "only on specific transitions", or whatever. But in there, you could have it update the local storage value from the context, and then use that, so that every time a transition happens or everytime an action happens, write that to your local storage as well, or sync it up to a server, or whatever you need to do.

**Jerod Santo:** Can you tell the story of when you over-engineered our avatars?

**Nick Nisi:** \[laughs\] I knew this was gonna come up...

**Jerod Santo:** I think we wanna hear this one...

**Nick Nisi:** \[31:48\] \[laughs\] So originally, in the game data -- so just looking at the contestants list, there is name... And I'm looking at the one for our CSS Tricks show. So there's like name, Chris Coyier. And then there's a handle in there, so Chris Coyier's handle on Twitter, which is just his name. And then I think you added avatar in there, which is a string to an image; you said that you could just pull that... And then it has the score. And in my original design there was only name, handle and score, but no avatar, because I was like, "Oh, if I know their Twitter handle, I can just go fetch that and use it." But Twitter doesn't allow CORS calls, so I just created a simple Node server that would just relay that, go grab it from Twitter, and then pull it down.

**Jerod Santo:** So he replaced my hardcoded URL to an avatar image with a Node server in order to resolve the exact same URL from Twitter... And I'm just loving this commit message you have, which says "Add a service to handle avatar lookups."

**Nick Nisi:** \[laughs\]

**Jerod Santo:** Do you remember the message that you wrote in that?

**Nick Nisi:** No...

**Kevin Ball:** I mean, let's be honest, who among us has not written a simple server to get around COR issues, and pull images from one of these social media services?

**Jerod Santo:** Me? I don't know... \[laughs\]

**Kevin Ball:** Really? I've done this like five times \[laughs\]

**Jerod Santo:** I just hardcode it into the --

**Feross Aboukhadijeh:** Twitter makes it super-hard.

**Jerod Santo:** You know, just put the URL in there.

**Nick Nisi:** They do.

**Jerod Santo:** Listen to this commit message. It says "The service we were using to get Twitter avatars client-side is no longer working, so this is a very simple TypeScript server that does exactly one thing: return the avatar for a Twitter handle. It's very small, untested, and doesn't handle errors very well... \[laughter\] But it should do the trick, and can stand as a basis for future server integrations." Don't you love that pitch there at the end? Like, "Listen... If we get serious about this sucker, we're gonna rewrite a whole server-side thing." I love that message, Nick.

**Nick Nisi:** I like that I called out that it's untested, and it doesn't handle errors well... Because usually, that's just implied with my code. \[laughter\]

**Kevin Ball:** Wait, why do you say "my"? Usually that's just implied with code.

**Nick Nisi:** Yeah, that's true.

**Jerod Santo:** You went above and beyond in that commit message. I love it.

**Nick Nisi:** \[laughs\] I was gonna say - Elon, if you're listening, core support would be something that you could bring to Twitter.

**Jerod Santo:** There you go... "Put that up to the priority list." Ah, funny... Well, it works. So are you telling me in your rewrite you went back to the URL. You were like, "I'm not gonna have the whole Twitter service thing", didn't you?

**Nick Nisi:** Yeah. So this talk was yesterday, and I didn't actually start or finish the talk until Tuesday, the day before. But I had rewritten the app using React and XState before that, over the weekend... I was on a crunch, basically, because of a bunch of different factors, but mostly kids... So I don't have a lot of time to work on fun projects.

**Jerod Santo:** To over-engineer a solution that worked just as well with a hardcoded URL.

**Nick Nisi:** \[laughs\] Yeah.

**Jerod Santo:** That's a good thing, Nick. Constraints. Constraints actually serve us well to keep things simple.

**Nick Nisi:** Absolutely.

**Jerod Santo:** Especially when somebody puts a \[unintelligible 00:34:50.11\] as their Twitter avatar and you live-pull it in on the show... \[laughter\] Oh, goodness...

**Break:** \[34:59\]

**Jerod Santo:** Hey, since it's Nick Nisi day here at JS Party, it's Pro Tip Time. Nick, take it away.

**Jingle:** \[36:59\]

**Nick Nisi:** I'm so sorry... \[laughter\]

**Jerod Santo:** Spectacular. Alright, Pro Tip Time is a time in which we share some pro tips. Let's do it. Nick, you're first. It's your show, baby. You're the star.

**Nick Nisi:** Alright... I was trying to think of a pro tip, and I went to Twitter and I typed "Nick Nisi pro tip", to see if I tweeted any pro tips. And one came up from 2011, I think, so 11 years ago...

**Jerod Santo:** Oh, wow.

**Nick Nisi:** ...and it was "Pro tip: Don't check in broken code." \[laughter\] So there you go...

**Jerod Santo:** That ties well into your epic commit that we've just read earlier.

**Nick Nisi:** Exactly. \[laughs\] But no, then I was thinking about it a little bit more, and I was going to talk about git worktrees, and I was like, "I wonder if I've talked about that", and I went to JS Party and I typed in the search and I've found in our transcripts that I talked about that exactly three weeks ago from today. So I'm not gonna use that one...

**Jerod Santo:** Don't repeat yourself. Stay DRY.

**Nick Nisi:** There you go. That can be your tip. So I do have one tip... And I'm not sure if I've talked about it, but there's a cool website that is called ConventionalComments.org, and it's just kind of a loose framework for doing pull request comments that I try and follow... And I really like it, because I feel like just the simple act of labeling triggers in my mind a specific way to write the comments that I wanna write on a pull request, and also I feel like it makes them impersonal in a good way, to where it doesn't seem like I'm attacking your code. It's more of just a "This is a labeled, generic way of me telling you this is something that I think is a suggestion that you could do, this is an issue that I see that is blocking or non-blocking, this is just a little nitpick I have, or this is some praise", which I always try and give a little bit of praise on anything, just to have that nice compliment or criticism sandwich.

**Jerod Santo:** This is a very nice pro tip, Nick.

**Kevin Ball:** Yeah, I like it. I'm looking at this. This is great. I'm gonna share this at work.

**Nick Nisi:** And I've seen variations of it where they use different emoji to signify different things, which I like, too.

**Jerod Santo:** Feross, do you have a pro tip for us?

**Feross Aboukhadijeh:** Does this have to be developer-centric--

**Jerod Santo:** Nah...

**Feross Aboukhadijeh:** ...or can it be anything? Okay.

**Jerod Santo:** It's loose.

**Feross Aboukhadijeh:** Alright. I have a pro tip. You should all go see "Everything, everywhere, all at once."

**Jerod Santo:** Okay.

**Feross Aboukhadijeh:** It's a movie. It's incredible. It's hard to describe, but it's one of the best movies I've seen in years. Go see it in the theater. It's awesome. It's like a darling of the critics, but also of like normal people, too. It has like 99% on Rotten Tomatoes, from viewers and from critics.

**Jerod Santo:** Wow.

**Feross Aboukhadijeh:** Yeah, it's really good.

**Jerod Santo:** What kind of move is it? Is it like a take a date, or is like take a kid, is it like go with your homies? What kind of movie is this?

**Feross Aboukhadijeh:** I wouldn't take a date... I would go with your homies or go alone, maybe.

**Jerod Santo:** Okay. Don't take your kids.

**Feross Aboukhadijeh:** It's intense. It'll make you reconsider a lot of things in your life. You'll wanna just go on like a couple hour walk afterwards and just think about all of your life decisions and how you got to where you are... \[laughs\] In a good way.

**Jerod Santo:** Okay. So go alone maybe. \[

**Feross Aboukhadijeh:** \[40:05\] Yeah, go alone or go with someone you wanna talk to about it.

**Jerod Santo:** Yeah, contemplative. A contemplative mood you should be in before.

**Feross Aboukhadijeh:** Yeah, yeah. It's intense.

**Jerod Santo:** Okay.

**Feross Aboukhadijeh:** But really good. Really good.

**Jerod Santo:** I'm gonna follow that tip and I'm gonna see it.

**Feross Aboukhadijeh:** I have a couple other ones that are more coding-related... A pro tip is if you have a site that needs to fetch data from npm - we were just talking about CORS headers... There's now CORS headers on the npm.js package metadata endpoints, so you can pull package metadata and package tarballs directly from npmjs.com now, without having to build a proxy server.

**Jerod Santo:** Did you hear that, Twitter?

**Feross Aboukhadijeh:** It's possible.

**Jerod Santo:** It's possible. You can do it, too. \[laughs\]

**Kevin Ball:** All you need to do is get bought by Microsoft.

**Jerod Santo:** Kball, do you have any pro tips?

**Kevin Ball:** Oh, yeah. I have one that y'all I think probably have heard variations of this before from me, but it's been crystallizing in my head over the last year... Which is to deliberately embrace and name your personal personas. What are the roles that you play in different ways? How are they different? And the example I'm gonna draw for you is me. From my life, I have two personas that I use all the time: Kevin and Kball. You've only seen Kball on JS Party. \[laughter\] Kball comes to JS Party.

And here's the thing - Kevin is an introvert. He's shy. He doesn't like going up to people he doesn't know, he needs a lot of alone time and quiet time. Kball is an extrovert! Brings the energy, excited about all sorts of stuff, jumping in, talking off the top of my head... And these are two different modes. Over time, I've actually very deliberately started to think about and embrace these as different personas for myself... And think about, in a particular situation, which one of these personas needs to show up? If I'm giving a talk or I'm hosting a meeting or doing something like that, Kball probably needs to show up. When I'm doing a one-on-one with someone, or talking about something that's a little more sensitive, that should probably be Kevin. And it really shockingly helps.

I know a lot of people who have public speaking anxiety, and I used to as well. And Kball has no public speaking anxiety. And I can say that honestly. If I get myself into the Kball model, I can get up on stage in front of hundreds of people and just go, and it's fine.

So thinking about what are those aspects of yourself that - maybe they're not fully fleshed out yet, maybe you only occasionally have been in that mindset or whatever, but what are they, that would help you in your life, and name them and think about them and figure out how to bring them on for yourself and go with it. At least for me, it's been phenomenally helpful.

**Nick Nisi:** Kball, have you been watching Severance?

**Kevin Ball:** No, I don't even know what it is.

**Nick Nisi:** It's basically that, as a TV show.

**Kevin Ball:** I don't really watch TVs or movies... I've had in the back of my head a talk that is like "Your Twitter handle is your rapper name" around that idea a little bit... But really, in the last year or two it's been crystallizing... Like, this is an incredibly useful tool to get yourself into different mental zones and do things that are uncomfortable for you. It's like, create a persona, find the part of you that is a persona and give it life. That persona is not bothered by this.

**Nick Nisi:** Nice.

**Jerod Santo:** So if this was Severance, Kball and Kevin wouldn't know each other, and you'd send Kball to work, and Kevin would live your personal life, and Kball would just have to work all day.

**Kevin Ball:** I don't know.

**Jerod Santo:** Think about it.

**Kevin Ball:** If I go to a party I've gotta embrace Kball.

**Jerod Santo:** Yeah.

**Kevin Ball:** I'm somebody who has historically often not been comfortable going to parties, especially if I don't know that many people there. It was really hard in college. I didn't have that Kball persona to lean on to. But I think post-pandemic -- I mean, it's hard to go to parties when you have kids, but if I ever go to a party, I'm bringing Kball, and he's gonna do so much better than Kevin...

**Jerod Santo:** Ha-haa!

**Feross Aboukhadijeh:** \[43:54\] This is so appropriate, because the movie I mentioned, "Everything, everywhere, all at once" is also about these alternate reality versions of yourself, that could have been... And it has a bit of a Matrix vibe where they will jump into that persona and out of that persona, so they'll have completely different skills and life experiences, and behave completely differently when they need to, to accomplish things in the movie. So it's just like that.

**Jerod Santo:** I like it. I'm gonna think about this as well. You know, I actually went the other direction though; I used to have an online persona and I ditched him. I was like, "You know, I'm just Jerod. Everywhere I go, I'm Jerod." And I think that's served me well. So maybe you can have multiple strategies.

That being said, I do have a pro tip, and it's "Take a hike, man." Take a hike. Now, we probably all know this, so this is more of a reminder than a tip... Oftentimes we get stuck, and the best way to get unstuck is to step away and take a hike. A hike is a placeholder for take a walk, take a shower, take a nap, take a break, get away from the keyboard...

I just was reminded of this yesterday or two days back... I was sitting there, banging my head against this function that I'm writing... And it's one of these situations where there's five or six different potential entry points into this function where data could be in these different states... And there's a couple nested ifs, and then there's like -- it just got over my head, and I just couldn't think straight through it. This was like 4:30 PM on a Tuesday. So not my best thinking time. And I sat there for 45 minutes and I just said "Nah, I'm gonna figure this out. I'm gonna bang my head through it." And I never figured it out. I had it kind of working at the end of the day, but it just wasn't there... And I just left, went home - I was already at home, but... I went the rest of the way home, down the stairs, took a break... I actually slept on it completely at that point.

And I woke up in the morning, and I was driving to work out, and that problem popped up in my head, and I saw it so much more clearly. And I was like, "Actually, if I early return on this particular case, everything else is simple." But I was trying to handle that case as well throughout these other conditions, and it was just like, everywhere I went, that one little edge kept breaking all of my structure. And I had it where it was like -- I hate when you have logic that requires itself to run in the same order every time, if you know what I mean... Like, if you can reorder them and they still make sense, I think it's just safer code in the long-term. It was so order-dependent... And I was like, "Actually, if I just handle this one case right upfront, get rid of that one, the other ones jive." And it wasn't even that hard of a problem, but it just snapped.

\[46:37\] So I'm the kind of guy that will sit there and just force myself to figure it out... And even if I do, it's like "Well, that took 2,5 hours." But if I would have stepped away, taken a hike, taken a walk, it probably would have taken 20 minutes, versus the 2,5 that it took me.

So just a reminder that we often come up with our best solutions when our mind is not actively trying to solve that problem, but is doing some other aspect of life... So take a hike. It'll help.

**Feross Aboukhadijeh:** Do you wanna know what comes up when you google "Take a hike"?

**Jerod Santo:** Sure

**Feross Aboukhadijeh:** All the synonyms.

**Jerod Santo:** Oh.

**Feross Aboukhadijeh:** Go away. Get out. Leave. Be off with you. Shoo. Make yourself scarce. On your way. Beat it. Push off. Clear off. Clear out. Shove off. Scram. Scoot. Skedaddle. Buzz off. And there's some vulgar ones here too, that I can't say... \[laughter\]

**Kevin Ball:** Feross, are you appealing to authority again? \[laughter\]

**Feross Aboukhadijeh:** I guess I am.

**Kevin Ball:** Authority Google.

**Feross Aboukhadijeh:** I didn't know there were so many ways to say this.

**Jerod Santo:** I was gonna say, that must be a common phrase, because there's so many different ways of saying the same thing.

**Feross Aboukhadijeh:** Yeah. The definition is "Go away (used an expression of irritation or annoyance)." So yeah, there's a lot of different ways to say that.

**Nick Nisi:** Is there a particular way that works for you best, to take a hike?

**Jerod Santo:** For me?

**Nick Nisi:** Yeah. Like, is it a shower epiphany that often happens, or...?

**Jerod Santo:** So if I'm actively trying to solve a problem, it's usually literally a walk. But I do have great ideas in the shower, compared to my other ideas. It's all relative, right? But I don't take a shower in order to solve a problem that I can't solve. But something I can do is really just walking, or riding a bike. Those two things are usually the best for me. But you know, that's weather-dependent. So you've gotta have some solutions for when you can't get outside. But I think getting outside is the best. How about you guys?

**Kevin Ball:** You could just come live in California, and then you can get outside 340 days of the year, or something.

**Jerod Santo:** I think everyone's moving the other direction, Kevin. No one's moving in, they're all moving out at this point.

**Kevin Ball:** I know.

**Nick Nisi:** As soon as they realize our winters are terrible...

**Jerod Santo:** They're gonna move back. \[laughs\]

**Kevin Ball:** It's ridiculously expensive, but I can go for a walk all but like 20 days of the year.

**Jerod Santo:** Yeah. I love San Diego weather, and I like San Diego in general, so I would be very happy to live there. There's something about the springtime in Nebraska... When you haven't had it for the last three months, where it's like -- if it's always sunny and 70 that's a nice life; but if it's not, but today it's sunny and 70, there's something just much more sweet about that. So I do appreciate the seasons, even though I super-appreciate San Diego weather.

**Kevin Ball:** Do you do long fasts as well?

**Jerod Santo:** I try to break my fast daily. \[laughter\]

**Nick Nisi:** That was fine, Jerod, before the pandemic, where you could actually go places when it was cold. But it's just been awful this winter, and the last winter, and the winter before.

**Jerod Santo:** It's been a rough couple of years, but you know... It's easy to say it now, because it's springtime; so I'm looking outside, thinking --

**Nick Nisi:** Is it though? It was like 20 degrees yesterday.

**Jerod Santo:** Today. Today is the day, Nick. Okay, we've gotta end the show, because we're going outside. Thank you, everybody, for listening. Thanks guys for hanging out, on behalf of Nick Nisi, Kball and Feross Aboukhadijeh. I've been Jerod Santo. This is JS Party, and we will talk to you guys all next week.

**Outro:** \[49:47\]

**Horse JS:** Elon Musk is buying Twitter. I'm buying JavaScript.
