**Jerod Santo:** Guess, what time it is, friends? It is JS Party time once again! My name is Jerod Santo, I'm your internet friend, and I am joined by my internet friend, Amal Hussein. What's up, Amal?

**Amal Hussein:** Hey, everybody.

**Jerod Santo:** And we have a very special guest, here to talk about Redux, Redux Toolkit, and I hear rumors of Redux's demise are greatly exaggerated... We're joined by Redux maintainer, Mark Erikson. Mark, thanks for joining us.

**Mark Erikson:** Hi! I'm very glad to be here.

**Jerod Santo:** We are glad to have you. It blows my mind - Amal has just informed me that Redux has been around for over five years now. It's crazy to me.

**Mark Erikson:** I mean, that's like 30 in internet library dog years...

**Jerod Santo:** Absolutely, and it's still alive and kicking... And you are now maintaining this. Can you introduce yourself insofar as how you came to be here on JS Party today in terms of Redux's history? How did you get involved with the project and become the maintainer of this very popular library?

**Mark Erikson:** Sure. So Redux, as most people know, was originally created by Dan Abramov and Andrew Clark in the summer of 2015. I was actually just getting started learning React myself right about at that same time... And I was reading blog posts and hanging out in chat channels and I'd seen some other Flux-like libraries being discussed at the time, and this Redux thing kept popping up. I started reading about it a bit; other people were asking questions about it... And I kept seeing the same questions popping up everywhere, like Stack Overflow, and Reddit, and the Reactiflux chat channels and whatnot... And I think it was around January 2016 I actually kind of half-volunteered to write an FAQ page for Redux based on all the stuff that I'd been seeing asked... And I did it, and Danny Abramov gave me commit rights to the repo after that.

I spent the next few months just sort of helping triage issues, and tweak the docs... And about that time, Dan got hired to work on the React team at Facebook, and he messaged myself and another guy named Tim Door, and basically said "Hey, congratulations! You're the maintainers now. Here are the keys. Have fun!" It actually took me a little while to really feel like I actually had any permission to have an opinion on what the code itself should be like, but it kind of became my thing after that.

**Amal Hussein:** \[00:04:13.14\] Yeah. And Mark is actually, again, being very humble... Because in addition to -- just having a lot of really great leadership over this incredibly important project for our ecosystem... Because Redux, although maybe it was popularized via the React community, because I think it was the most popular implementation of the Flux architecture, it really grew legs and it kind of quickly got adopted with lots of other communities... And I think what Mark has really done a great job of doing is I think practicing, I would say, a resistance... And you might be wondering "What is resistance?" Well, he's practicing resistance because he's resisted the urge to change Redux. It has such a small footprint, and the API has really been fairly consistent over many years. Of course, the wonderful thing about Redux is it has this wonderful pluggable architecture, and so there's this just vast ecosystem within Redux that's just incredible. I mean, how many packages are like Redux plugins, Markus? Like hundreds, right?

**Mark Erikson:** Yeah... For a while, I was keeping up a running catalog of basically every Redux-related library and add-on that I could find, and that got up to about probably about 2,000 different packages before I just had to stop adding to that list, because I needed to focus on other things.

**Amal Hussein:** Yeah. So to say that it had legs is being maybe even -- it's an understatement. But I think one of the things I really wanna take a minute to shout out Mark for is the fact that he is kind of this (I would say) tech support for the React community at large; that's the best way to put him. Reactiflux is a wonderful community, that we'll link to in the show notes... It's a Discord server where you can -- there's different channels on different kind of popular React frameworks, libraries, or just areas of expertise... And Mark really is very active there, answering questions... And he's very patient, because he's answered the same questions multiple times, again and again and again. He's been answering the same questions; as this community grows and you have all these newcomers entering the community, Mark is just patiently -- he's not even linking them to the answer anymore, he's just like answering the same questions... And I just really wanna thank you for that, Mark, because you're such a good custodian and teacher, and you're so patient, and we're just really lucky to have you, and I just wanted to say thanks for everything you do.

**Mark Erikson:** I will freely admit that I have a number of prewritten answers that I routinely copy-paste in response to these questions...

**Jerod Santo:** There you go. Text expansion.

**Amal Hussein:** Okay. Now we know the secret. \[laughs\]

**Jerod Santo:** Mark, do you feel like what Amal is saying rings true? I know you wanna be humble, but do you feel like you've been tech support for the React community? I mean, that's a big role...

**Mark Erikson:** In a lot of ways, yeah. I've not entirely jokingly said that I answer questions about React and Redux literally everywhere there's a comment box on the internet... And it is a very significant portion of my free time at this point. I like answering questions almost too much. There's been times when I've seen someone ask a question that I know the answer to, and I've actually kind of had to restrain myself from taking the time to answer it... It's like, just because a question exists doesn't mean I have to take the time to answer it myself personally right now.

**Jerod Santo:** Right. That's amazing... It's just amazing that you wanna do that, because most of us can't be bothered. It's like "Ohh, another question... RTFM, dudes." You know, that's the typical response. But you're like "No, I am the manual. Here! I already read the manual, let me tell you what it says. It's amazing."

**Mark Erikson:** \[00:08:08.28\] I actually just saw a really good blog post just yesterday...

**Amal Hussein:** I was just gonna talk about it. I retweeted that tweet; that was amazing. Such a good blog post.

**Mark Erikson:** A blog post from Ned Batchelder, who's been very active in the Python community... And I've seen a bunch of good posts over the years about how to ask a good question. Stack Overflow has their guidance... You know, minable, runnable example, and all that kind of stuff. But this was actually a post that tries to give guidelines on how to best answer questions online. Like, try and be positive in the way you respond, focus on their question instead of sniping about the formatting or other stuff. A lot of really good advice in that post.

**Jerod Santo:** Yeah, I've read that one as well. I thought it was spectacular. We'll link that one up for sure. Real quick, Mark, just in the spirit of inclusion and accessibility - we know Redux has been around for a very long time, and since you answer all the questions about it, there are probably people listening who are just coming to JavaScript, or they're just JS-curious, and maybe they don't know what Redux is. So can you do a Redux 101 for us, and just kind of like lay the groundwork, so we can build a conversation around it?

**Mark Erikson:** Sure. So Facebook announced React publicly in 2013, and at the time there were a lot of very object-oriented approaches to managing data in web applications, like Backbone. And in 2014, Facebook announced a pattern that they had come up with internally, which they called the Flux architecture. The idea was to simplify the data flow patterns within an app by kind of centralizing where, when and how your state can actually get updated; rather than having a bunch of object models that can trigger events all over the place, the rest of the application calls a central object called a dispatcher and passes in an object that describes some event that happened in the app, and that object is called an action.

So over the next year, dozens of different Flux libraries came out across the ecosystem, experimenting with this pattern in different ways. In mid-2015 Dan Abramov, who had picked up a bit of notoriety in the React ecosystem for some of the other things he'd worked on, started creating his own Flux-related library called Redux for a conference talk. And that library very quickly took off, far more than he ever thought it would, and it basically killed off all the other Flux libraries. I refer to it as it kind of won the Flux wars... And it basically is now the only largely-used implementation of the Flux architecture.

So the idea is that you write all of your state-updating code in functions called reducers, which will get the existing state, and some action object that describes something that happened, like "User clicked a button" or "Fetched some data from the server", and the reducer then decides what the new state should be in response. So the rest of the application is not allowed to just modify the existing state, instead it has to say "Here's the thing that happened", and it calls store.dispatch, where the store contains a single global set of data that all of the app can refer to.

So there's a deliberate level of indirection here, compared to just saying myobject.value=123... But there's a lot of value in trying to centralize some of this management, as well as separating the process of what happened in the app from "how does my state update" in the application.

**Amal Hussein:** \[00:11:58.13\] This kind of shift, of bringing pub/sub and one-way data flow into frontend applications was just game-changing... Previously, event and state management inside of frontend apps was just a nightmare; it was this Rube Goldberg, there was no real organization, no direction, no nothing. It's one of the reasons I personally think two-way binding in Angular was also popularized... Because I think it just took away some of the headaches around event and state management, where it was just like "Just link to the thing", you know? Real-time.

**Jerod Santo:** Exactly.

**Amal Hussein:** So Redux is and was just really amazing in all of the benefits that it brought... But there was also pain points around adoption. Do you mind maybe speaking to some of that? Because I think that's a really good segue into why Redux Toolkit was created - to kind of address some of the pain points around using Redux.

**Mark Erikson:** Sure. So really since its inception, Redux has been known for requiring you to write a fair amount of boilerplate code, in some form. Dan Abramov tweeted back in 2015 to the effect that Flux and Redux were never intended to be the shortest way to write code. They were intended to make it very straightforward and clear to understand when, where, why and how your state is changing throughout the app.

If you look at the Redux docs, there is a page called "Reducing boilerplate", and that page has been in there since - if you check the history - late 2015, right after Dan was writing the original docs. And it shows some patterns for some little abstractions that you can create yourself for common use cases.

And as Redux got a lot more popular and a lot of people were adopting it, either deliberately or because someone else told them to, that refrain of "Redux requires a lot of boilerplate" has been a very constant theme. And we mention the number of packages that the community has come up with, and a lot of those were trying to solve the same kinds of problems, but everyone was just making their own little version of various utilities... And you kept seeing the same patterns repeated over and over.

There are some other pain points... Redux was built to be extensible, but because of that, the core library includes almost nothing built-in; even the most common approach for writing async logic was broken out into a separate package called Redux Thunk. And it's only like 12 lines of code, but the idea was "We're not going to force you to have to use this one approach, in case you want to do something else." And a lot of other people do.

Along with that, the process, because there's all these different ways you could set things up, the code that you have to write to configure and set up a Redux store involves a number of steps. And granted, you only have to do that once per application, but frankly, it was annoying to have to write that every time you started a new app.

So these were all very common pain points that people pointed to as reasons why Redux was hard to use, or they didn't like it... And even as far back as 2017, I had filed a discussion issue asking "What are some ways that we can offer some better built-in abstractions, make it easier to user Redux, make it easier to teach Redux?" And it took a while for some of these ideas to percolate through the system, but where we ended up is that in the late '18, early '19, we began working on an official package that we originally dubbed Redux Starter Kit. In it we would add some official utilities for these most common use cases, of things like setting up the store, writing reducers, action creators, action types... And trying to handle immutable updates in a way that's easier to read and write.

\[00:16:09.29\] We officially published that as 1.0 in last October, and right about at the same time people were also pointing out to us that the name Starter Kit had its own issues. People assumed that it was either a pre-built boilerplate that you were supposed to clone, or it was only good when you were setting up a project, or it was only good for people who were beginners and had never used Redux before. And none of those was true. So we ended up renaming it to Redux Toolkit.

**Amal Hussein:** I think I was in that camp, by the way... I was in the camp of "This is like training wheels. I don't need this. I'm a pro." I was in that camp, for the record... \[laughter\] I think I just assumed that it was for newbies, yeah.

**Mark Erikson:** Yeah. And the intent was that it should be helpful for both people who are starting with Redux, but also experts who have written lots of Redux code. So we officially named it to Redux Toolkit and switched to a different package name at reduxj/toolkit on Npm. And it's working out wonderfully.

We are now officially recommending it as THE way to write Redux code. You can still write code by hand if you want to, but the point is you don't have to, and we're no longer teaching that you should do that. And if you look at the downloads rate, it's just a very steady growth on a nice, straight line, angled upwards. I think it actually just broke the 50,000 downloads a day mark on a consistent basis... It's still nowhere close to the actual downloads of the core Redux package, but the adoption has been very solid, and the feedback from the community is telling me that -- you know, I used to hate Redux, and Redux Toolkit made me love it again.

I just migrated our code from plain Redux to Redux Toolkit, and I cut the number of lines of code in half, and so on... So the very, very enthusiastic, positive response tells me we're headed in the right direction.

**Jerod Santo:** That sounds great. We're gonna dive deep into Redux Toolkit after the break. But before that, I wanna throw a bit of a curveball at you here...

**Mark Erikson:** Uh-oh...

**Jerod Santo:** You are a maintainer of these things, and so you can into a project and you said "Let's improve what currently exists." Dan wrote the library in such a way that it was modular, and really unopinionated, because it can be used in all these different ways...

**Mark Erikson:** Very much so.

**Jerod Santo:** ...and that caused this particular challenge that you've tried to fix. If you were gonna go back and write it yourself, do you think he made the right choices that he made then? Or would you have more training wheels built in, or more opinions? Or do you think the modularity and the generality of it made it successful?

**Mark Erikson:** I think given the constraints and the design goals at that point in time, in the summer of 2015, Dan and Andrew made some amazingly good design choices in a two-month span, that worked out amazingly well. Now, given what we now know and how we saw -- Redux Toolkit could not have been created if we hadn't seen the thousands of other packages that people created, the patterns that people were working with, the problems they were trying to solve, the pain points they were running into, and especially if a particular package called Immer hadn't been created. A quick explanation of that...

Redux requires that you write your updates immutably, which means you always have to make copies of objects and update the copies, rather than modifying the originals. And writing immutable update code in JavaScript is a royal pain, because you wind up having to do lots of nested object spread operators, and concat and map your arrays... It's really long, and it's very verbose, and hard to read, and really easy to make mistakes. And the number one mistake that I see people making with Redux has been accidentally mutating their state, either in or out of the reducer functions.

\[00:20:20.22\] Meanwhile, Michel Westrate, the creator of the MobX library, made a separate package called Immer, which uses JavaScript proxies to wrap some data... And you provide a callback function that receives a draft object that looks like your original data, but it's actually been wrapped in a proxy. And you can actually write mutating code, like state.value=123, inside of the callback. Immer tracks the attempted changes and internally converts them into safe, immutable updates, so that the return result of this function is a new, immutably-updated object, as if you'd written all that spread operator code by hand yourself.

So Redux Toolkit was built around using Immer from the very first prototype that I wrote. And while we could have written some of the other utilities well earlier, using Immer really is core to how Redux Toolkit works, and one of the key ways that it makes it easier to write your Redux logic.

**Jerod Santo:** Great.

**Mark Erikson:** To go back and answer your question, there's probably a few things that Dan and Andrew could have done differently, like, say, at least including the Thunk package out of the box, so you don't have to install a separate library... But given what they're aiming for and the constraints at the time, it was frankly a brilliant design.

**Break:** \[00:21:55.17\]

**Amal Hussein:** Mark, that was really a wonderful back-story into the reasons behind Toolkit's creation... Going back to the problems of Redux... I think with trying to serve the JavaScript community, you're always trying to serve the widest base possible, because JavaScript is so ubiquitous. Everybody's always writing JavaScript. Java devs are writing JavaScript, Python devs are writing JavaScript... Or maybe I should say Java devs are attempting to write JavaScript... \[laughs\]

**Jerod Santo:** Cheap shot...

**Amal Hussein:** Sorry... \[laughter\] I'm just saying, sometimes JavaScript's accessibility lends to problems of foot-gunning, you know?

**Jerod Santo:** Yeah.

**Amal Hussein:** But anyways - so it appeals to so many people, but then obviously there were certain things around boilerplate, for example, that was a problem... But quite frankly, that was part of the design, in the sense that from my understanding Dan Abramov was really trying to achieve something that was greppable... So to kind of coin the term "grep factor" - the grep factor of Redux is high, because you have this constant action creator, and you just grep for it, and you can see everywhere it's being used. You can very easily just grep your code and just see where this one action is -- how it's being traced throughout your source code... And for me, that's just huge, especially in terms of readability, maintainability... And I'm always one to err on the side of being a little more verbose for code that's supposed to be maintained by multiple people over many years... And so I'd rather have more readable code than short, abstracted code.

\[00:24:37.17\] So my question is like - with Redux Toolkit you've built these abstractions, but what have we lost for power users, or for people who want more of that grep factor? And then also more so, from reading the docs, we have abstractions, but we also have more power. Things like Immer - they bring a lot more to the table right out the gate than previously. So can you just kind of speak to this dichotomy of giving people a jetpack, but then also giving them guard rails?

**Mark Erikson:** Sure. So the Redux core, literally the library and the functions themselves are so minimal that you can use them in lots of different ways. This is then both a strength and a weakness... And I actually wrote two very long blog posts that talked about the intent behind Redux's design, what the library literally requires you to do in terms of how you write your code, but then why a lot of common usage patterns actually exist. I dubbed these posts "The Tao of Redux. Part I: Implementation and Intent" and "Part II: Practice and Philosophy."

Let's look at one of the common examples. One of the most common complaints about boilerplate is "I have to write my action types and my reducer code in my action creator functions, in separate files, and I have to write my action types as const variables, where both the name of the variable and the text of the string are all upper-case, or screaming snake care capitalization." The Redux library actually requires none of that. It doesn't care about your folder structure, it doesn't care whether you've defined your action types as const variables or written them inline, it doesn't care whether they're upper-case, lower-case, dashes, whatever... But these are all common conventions that existed and were shown in the docs for a reason.

As developers, we often put code of different types into different files or different areas of the codebase. So let's split up our action creator functions - which aren't required, but are a common patterns - from our reducer functions, which are definitely required. Okay, they both need to refer to the same action type strings... Well, we don't want to copy-paste the strings in multiple places, because maybe you make a typo, or something. So you wanna define it in one place...

**Amal Hussein:** Or maybe you wanna reuse it...

**Mark Erikson:** Yeah, yeah. So let's define those as variables, and if the variable is needed by two other files and it needs to be in its own file... There's a very logical train of thought for why these patterns exist. But at the same time, the default patterns that were always shown in the docs did tend towards some very verbose examples. And I've seen Dan say that he didn't necessarily think people would actually write code the way it was shown in the docs... And as much as I love Dan, I think that was maybe a slightly naive opinion... Because of course people are gonna do what you showed in the docs.

**Jerod Santo:** Yeah.

**Amal Hussein:** But people also love Dan. Let's be real.

**Mark Erikson:** Oh, yeah.

**Amal Hussein:** If Dan published his food and music and clothing schedule or whatever, I think people would just do it. They would just like "npm-install dan abramov". I think he's got a very serious fan club.

**Jerod Santo:** \[00:28:07.04\] Do you think he has a clothing schedule, Amal? \[laughs\]

**Amal Hussein:** Yeah, like "I wear this on Monday..." Or the brands that he wears...

**Jerod Santo:** I just thought, "Oh, it's 8:30 AM. I'd better put on my pants."

**Amal Hussein:** It's got a following. That, too. Let's be honest, though; these days it's like "Monday, Tuesday, any day..." Any day is a pants-free day these days... \[laughs\]

Speaking of which, actually - I don't know about you though, but you said that you put your code in different files... I don't do that. \[laughter\]

**Jerod Santo:** "I don't do that..."

**Amal Hussein:** I just put it all in one file called bundle.js. \[laughter\]

**Jerod Santo:** I'm a minimalist. All my code goes in one file... Across multiple projects.

**Amal Hussein:** Yeah, exactly.

**Jerod Santo:** Even different languages. It's all one file.

**Amal Hussein:** Yeah. You just use namespaces and IIFEs, you know? \[laughter\] Anyways...

**Mark Erikson:** The thing is, the docs showed a pattern of organizing your different types of code into different files, and then organizing those files into folders by type. So you have a reducers folder, an actions folder, a constants folder etc.

A guy named Erik Rasmussen actually came up with a pattern for putting all the logic for a given feature into one file, which he named the Ducks pattern. A small segment of the Redux community adopted it, but we didn't officially suggest it. And I always had a couple concerns about it, particularly about how it kind of suggests that only one reducer can never handle an action of a given type, when really the intent was any reducer can respond to any action.

So given that these are specific pain points that people talked about, how does Redux Toolkit try to address them? The docs say that I created Redux Toolkit really to solve three different problems. It's too hard to set up a store, you have to add a bunch of extra packages to do anything useful, like Redux Thunks, and Reselect and whatnot... And it requires too much boilerplate code.

Item one, Redux Toolkit has a function called configureStore, that is a one-line call. You provide either the reducer function you've already built yourself, or the slice reducers for the different features, and it will assemble them itself. It automatically sets up the Redux DevTools' browser extension setup that is needed, and it automatically adds the Redux Thunk middleware, and in development mode a couple of dev check middleware that will throw errors if you do things like accidentally mutate any state in the store... So protecting against by far the most common mistake that people make when using Redux.

From there, there's a couple of utilities like \`createAction\`, which generates action creators based on a given type string... And \`createReducer\`, which allows you to define reducers using an object look-up table syntax rather than a switch statement, because for some reason a lot of people really hate switch statements.

And \`createReducer\` also uses this Immer library inside to let you write what looks like mutating syntax in your reducers, but it's actually turned into safe, correct, immutable updates internally. So from there, we have an API called createSlice, and we've traditionally used the word "slice" to refer to the reducer for a single part of your Redux state. For example, if I have a blogging app with state.users, state.posts and state.comments, the users reducer and the users actions represent a slice of your state.

\[00:31:55.03\] So createSlice builds on createAction and createReducer. You give it a set of reducer functions in an object, and you give them meaningful names. Giving the classic to-do app example, todoAdded, todoToggled, changeFilter, stuff like that... And it automatically generates the action creators and the action types internally, based on the names of the reducer functions that you provided. And this actually gets to that grepability factor that you were asking about earlier.

One of the advantages of having all those action types as const variables in the codebase was that you could look at the Redux DevTools and see "Okay, I dispatched the Add\_todo" action type, and now I can Ctrl+Shift+F, search the whole codebase textually for uses of that action type.

Well, we're actually now recommending that people use a naming pattern where the string is lower camel cased, and you define it as domain-eventname. For example, maybe the domain is todos/todoadded, rather than upper screaming snake case AddToDo.

**Amal Hussein:** That feels very like RPC. It's like the shift from REST to RPC. It's very similar to GraphQL. GraphQL lets you structure the data that you get from the server in an events-driven way, as opposed to resource-driven... And so this kind of feels a little more in line with that. I like the idea of using domain and then action as kind of one thing for your action type.

**Mark Erikson:** Yeah. I've seen a lot of different naming conventions. The NgRx folks actually use square brackets domain space, like an actual sentence describing things.

So in this case we picked a new convention, and we're encouraging it, and Redux Toolkit uses that convention internally... But createSlice generates that action type string based on a string name that you provide for the slice, like "todos", and then it just concatenates that with the name of the reducer function that you provided, like "todo added".

So if I look at the dev tools and I see a todos/todoadded action type, I should still be able to grep for the todoadded name and find the exact reducer function in the codebase that resulted in that action type being generated. But the nice thing is action type strings are almost now an implementation detail. You no longer have to write them in your code, you don't refer to the action type anywhere; it's just the string that shows up in the dev tools when you're looking at the history of the actions.

**Amal Hussein:** Yeah, that's pretty cool. I think it's very interesting that you've even included APIs like the adapter -- what's it called?

**Mark Erikson:** \`createEntityAdapter\`.

**Amal Hussein:** \`createEntityAdapter\`, yeah. Can you tell us about that one? What is that, and what problem is that solving?

**Mark Erikson:** Sure. So after writing the Redux FAQ in the spring of 2016, I followed that with a recipes section called Structuring Reducers, which gives some guidelines on things like "Why do we split up reducer logic into multiple functions? What are some ways that you can organize that reducer logic? And one of the patterns that I'd seen being used just in the first year of Redux's existence was this idea of normalizing your state, which generally has two aspects of it. One is that you don't wanna have duplicate copies of data being kept in the store.

\[00:35:59.13\] If we go back to that blogging example - so we've got users, posts and comments - every post probably has the user who created it. And if we fetch that data from the server, every post object might have a separate copy of the users object nested inside. We don't want to store 50 copies of the user object in the Redux state, we just want to have one copy of the object per each user. And there's a lot of cases where we want to be able to find a given user, a given post, a given comment by their ID.

So normalizing state generally implies that you're going to store things as a look-up table, where the keys are the IDs, and the values are the items themselves, rather than storing them as an array. And so I wrote a docs page called "Normalizing state shape" that describes what this pattern is, and specifically suggest it as a good idea.

Despite that, we never included anything in the Redux library itself that ever helped you with the process of normalizing state in any way. There was a very popular library that's been used with Redux called Normalizer, which I think Dan either started or helped maintain for a while. There's also a library called Redux-ORM, which provides a class model-like facade over the plain data in your Redux store; and I did use that on one of my projects. But there was nothing built into the core library itself.

So after we'd built out the initial APIs for Redux Toolkit, earlier this year I was starting to think about that idea of normalization as a problem space, that we ought to supply something to help with. So I was looking over various packages and third-party libraries other people created that help with that in some way, and I ran across something that the NgRx store people had created. NgRx is basically a reimplementation of Redux for the Angular ecosystem, built around the RxJs package. And because of that, there's a lot of overlap in the kinds of things that both Redux and NgRx do.

The NgRx maintainers had created an add-on called createEntityAdapter, which basically it provides a set of pre-built reducer functions for things like add one, add many, set all, upsert one, remove all etc. The typical CRUD-type operations you would do on a set of data. And I looked at it, I'm like "You know what - this package only has one or two references to NgRx at all. It's almost library-agnostic. Is there any way we could make this reusable, so we could start using it with Redux Toolkit?" And they started looking at it, and I started playing around with it myself, and I ended up actually kind of porting it over and half-rewriting it. I added the use of Immer inside, the arguments for their functions were in the update,state order, instate of state,update... So I switched them around, so we could actually used them as reducer functions.

So ultimately, I ended up porting it, but none of that would have existed if the NgRx folks hadn't created it in the first place... And it's really cool to see that cross-pollination of ideas going back and forth, because NgRx was inspired by Redux, our createEntityAdapter, was a port of theirs... So it allows you to skip having to write reducer logic in a lot of cases for the most common kinds of update scenarios that you might be dealing with when dealing with a collection of some items. And you can either use them as the entire reducer function for a given action type, or you can use them as helpers within a larger reducer function as part of the logic that you're writing.

**Amal Hussein:** \[00:40:11.07\] I love how you're just like this uber-nerd about everything, Mark... It's awesome. \[laughs\] There's so many interesting points there. One is a really good segue into what we're gonna get into next, which is really not only the ecosystem, but more specifically state management as a whole inside of frontend applications, and the age-old debate of when to use what; local state versus application state. Then there's the whole data management, and fetching, and Apollo client. There's so many new things in the ecosystem, specifically even just React. React has some interesting new APIs, with like the Reducer Hook... Just very cool stuff. We'll get into that next.

Really quickly, I wanted to say that one of the things that a lot of people complain about - so we talked about the three reasons being "Okay, configuring a Redux store is too complicated", the second thing being "I have to add a lot of Redux packages to get Redux to do anything useful", and the third complaint being "Redux requires too much boilerplate code" - I would say all of those things speak to my nerd heart, in the sense that I feel very attacked when I read that... Because for me, it's like -- I just love the open architecture of Redux. The fact that it stood this long and it's still relevant - it just goes to show it's the open architecture and the clean architecture that it has, that uses plugins etc. That's why it stood the test of time.

For me, the most fun part of setting up a new project when I set up my Redux stores and everything - it's adding all of those packages. And I love the fact that I know exactly what's going into Redux every time I configure my applications; depending on what it needs, it's a little different. One size definitely never fits all.

I get that people have -- okay, there's this baseline of packages that everybody always wants, so let's just ship Redux Toolkit with it... But there is a nice beauty to just building your own ecosystem, very much like Minecraft or very much like Node.js, where you're just importing all of your modules, because you want them and you know exactly what's going into your lasagna. So the lasagna factor is the one that I'm sad about losing... But you can still add things with Redux Toolkit.

**Mark Erikson:** Yeah. It doesn't take anything away in terms of the ability of how you can configure your store. You're still saying "Here's the reducer that I want." It adds some middleware by default, but you can choose to insert additional middleware or just drop the defaults and say "Here's exactly the ones that I want." You can still add store enhancers of various kinds... So it's everything you could do with createStore already, but it's actually got an easier API, because createStore takes three positional arguments: of the reducer, the initial state, and the one and only store enhancer... Which means that you are responsible for combining together, say, applyMiddleware and DevTools enhancer into a single composeEnhancer yourself, and passing them positionally... Whereas configureStore has an object-based options argument, and you say "Here's the reducer, here's an array of middleware, here's an array of enhancers, here's an option straight upfront for turn on the DevTolls Yes or No", and even that right there makes it easier to see what's going on with how you set it up.

**Amal Hussein:** Yeah, absolutely. Well, ladies and gentlemen, Redux - definitely not dead yet. We're gonna hear a lot more about when to use what and why in the next segment.

**Break:** \[00:44:28.09\]

**Jerod Santo:** So in the spirit of making your own lasagna, maybe you follow our recipe, but the stuff that Amal was talking about, where she's a Redux junkie and she wants to do it the way that she does it, and she loves to twiddle the bits and configure it just so... Is it advisable, Mark, to use Redux Toolkit in a recipe style reference?

What I used to do back in the day was with HTML5 Boilerplate - I'm not sure if you guys remember that awesome project from Paul Irish and the gang - is I would never actually use the boilerplate code. I would generate the boilerplate code, and then I would stare at it as I wrote my own, and just picked and chose what I liked and what I thought was good, and I just discarded the rest. Could you use this project that way and not actually install it itself, but just use Redux and maybe pick and choose, and use it as like a best practice, as a guide, but not the code... Or is it better just to use the code and go from there?

**Mark Erikson:** So Redux Toolkit is a set of distinct API functions. Each one for a different purpose - configureStore(), createAction(), -Reducer(), -Slice(), createAsyncThunk, and createEntityAdapter. As well as including the Reselect createSelector() API out of the box and we use it with createEntityAdapter.  And we certainly suggest that you should be using all of them as the default approaches in your Redux application... But they are all "pick and choose your own adventure".

**Jerod Santo:** Okay.

**Mark Erikson:** Certainly, there's a lot of benefit from using configureStore to set up your store, catch accidental mutations etc. and I personally would say that should be the first thing you should do when either setting up a new Redux project or starting to migrate an existing one, but nothing says we have to. And you can really migrate an existing app to Redux Toolkit very incrementally.

Say you've got a large existing Redux app, and you want to start using Redux Toolkit. So you swap out your store setup code for configureStore once, you pick a reducer and the associated action types, you replace them with a call to createSlice, you swap up hooking up the reducer function and dispatching those actions. All the rest of the existing code works just fine as is. And then you just keep migrating one reducer and its related actions at a time.

**Amal Hussein:** Actually, Mark, that brings me to the question - is there a diff out there that is viewable to the public, where it's like "Here's an actual app that used Redux, and here's the commit diff to use Redux Toolkit..."

**Jerod Santo:** \[00:48:16.07\] Well, that would be awesome.

**Amal Hussein:** "...and here's all the negative lines of code removed", or whatever. I'm just curious, is that something that's available somewhere on the interwebs?

**Mark Erikson:** In fact, when I wrote a set of tutorials for the ReduxToolkit.js.org docs, I actually did exactly that with what I dubbed The Intermediate Tutorial. So it takes these standard Redux to-do app with React example that has your object spread operators and the reducers and stuff, and it shows how to incrementally migrate it over to use Redux Toolkit. Now, granted, this is not a large app, so it's not like there's gonna be huge, huge diffs... But it does show how to migrate, and in fact I did set it up in a way that there is an example repo, and I literally did link to specific commits throughout the tutorial, demonstrating the step-by-step process of migrating over.

**Amal Hussein:** Nice. That's awesome. We'll have to link that in the show notes. It sounds great. And the reason why I asked that is because I feel like as much as -- I love tutorials that are very granular, and kind of go through things step by step, but I think when developers are learning something new from something old, that mental map that they need to do, it's just so much nicer to look at the diffs on like a real project... Like, "Here's how it worked here, and now here's the diff." And then I think it's just much easier to digest that information, so we'll definitely have to link that in the show notes.

**Mark Erikson:** One other thought on that topic - the Redux Toolkit docs are currently written (especially the tutorials) under the assumption that you do already know what Redux is and how to write that code by hand. But I'm actually working on changing that assumption in general. We now recommend that people use Redux Toolkit as the default syntax for writing Redux code. And so along with that, a lot of people have noted that the core Redux documentation -- if you look at the existing tutorial sequence, it's like "Here's a to-do app. Here's a Reddit app. Go have fun. Bye!" And there's not really any good real-world examples in the docs themselves.

I actually spent the first half of this year working on a brand new tutorial sequence for the Redux docs that I've dubbed "The Redux Essentials" tutorial. It has a few goals. One is that it is more focused on a top-down, "Here is the right way to use it" approach to learning Redux, whereas the existing tutorial sequence is bottom-up, "Here's how it works."

Another is that it does teach Redux Toolkit and the React Redux Hooks API as the default, standard way to write Redux code. The demo application that it builds is a small social media type app that demonstrates some CRUD-type behavior... And it also has a good amount of explanation for "Why does Redux exist? When does it make sense to use it?" The intent is that someone could read through that and start building some kind of a meaningful app using Redux Toolkit, without necessarily knowing all the details of what is actually going on behind the scenes.

Now, Redux Toolkit certainly does work best if you understand how to write that code by hand, so that you know what those abstractions are doing for you. But my goal was that you should be able to use it without necessarily knowing what's going on under the hood.

**Amal Hussein:** \[00:52:00.29\] Yeah, that's our favorite thing as JavaScript developers - "It just works, we don't need to know how; let's just keep moving. I've got tickets to close, I've got users to make happy, so just get out of our way." \[laughs\]

**Jerod Santo:** There you go.

**Amal Hussein:** That's really great. Mark, I wanna get back to the age-old problem, again, of...

**Mark Erikson:** Oh boy, here go again...

**Amal Hussein:** This paradigm came out - application state management, what lives where... Now we have React, now we have Apollo Client, now we have just all these competing things which really make it very difficult for the average person who's coming in to a new project, who needs to make some decisions... There's a lot of research and contextual knowledge, and there's a missing manual here of what to do when, and what to use when, and something that's objective, in the sense that -- I think it should be objective because it's not about trying to get people to use this tool versus that tool, it's about making sure that you're using the right tool for the problem that you're trying to solve, right?

**Mark Erikson:** Exactly, yeah.

**Amal Hussein:** And ultimately, that's what it always comes down to. Quite frankly, as much as I love Redux, if I find another tool that meets my needs in a better way - by all means; I'll abandon. But that day is yet to come.

**Jerod Santo:** Careful, Mark. She's gonna jump ship on you. \[laughter\]

**Amal Hussein:** That day is yet to come, people. But when it does, it'll be exciting, and I will embrace that with open arms, because quite frankly, the web is a very unforgiving place, right? It leaves many people behind. So if you need adopt, and you need to change--

**Mark Erikson:** MooTools!

**Jerod Santo:** Ooohhh, he said it.

**Amal Hussein:** ...adapt to stay current... Yeah, new tools, sure. Did you say MooTools, or...?

**Jerod Santo:** No, he said MooTools.

**Mark Erikson:** I said MooTools.

**Amal Hussein:** Oh, boy... It's funny that MooTools rhymes with new tools, right? \[laughs\]

**Jerod Santo:** That's ironic...

**Amal Hussein:** Yeah, that is ironic. But anyways, so can we talk about that real quick? Because really, we could do a whole episode on this, and maybe we should in the future... But really, what are some kind of guiding principles? Because I have heard you say you do not need to use Redux if you will have XYZ. For example, if you already have an app that uses Apollo for data fetching, you don't need to bring in Redux to do data fetching. And people's code is always in various states. They're always adopting tools at various stages in their application lifecycle... Yeah, anyways. I'm done ranting, I'd love to hear your thoughts.

**Mark Erikson:** Sure. So I am a huge proponent of a couple of specific ideas. One is that you should always try to understand what problems a specific tool is trying to solve, and part of that is "What is the time and the context and the reason why this tool was even invented in the first place?" And another is that you need to understand exactly what problems you are trying to solve in your own application right now, and pick the tools that solve your problem best; not because someone else said you should use them, not because they're popular, but because this is what works best for me in this particular situation.

So in the case of Redux, it was invented as an implementation of the Flux architecture, which was in turn created to deal with limitations people had found in event-trigger-based state management, like Backbone specifically. So I set user.firstname, it triggers a "change first name" event, some other code is listening to that, it triggers another event... Next thing you know, you're 15 events down one big synchronous call stack, and you have no idea why this happened in the first place. That's what Flux was invented to solve, and Redux basically perfected that particular approach. And that was the problem people were trying to solve in 2015.

\[00:56:18.25\] Now, it also happens that because React Redux used the old-style React Context API from its beginning, using Redux in a React app also kind of happened to somewhat accidentally solve another common problem, which is that a) many different parts of my app need to use the same state at the same time, and I would normally have to lift that state up maybe all the way to the root app component in order for many components to share the data. But if I do that, I would then have to prop-drill and pass that data as props through every level of the component tree, which is a royal pain. So using Redux with React to let people side-step that issue... And that is a reason why many people picked Redux in '15, '16, '17.

Well, with React 16.3, React came out with a new, improved Context API, which unlike the old one, was recommended for production usage from the day it came out. And the only purpose of Context is to act as a dependency injection mechanism scoped to some portion of your subtree, where you say "Here is a value", and any portion of that component subtree can ask to read the value. That's literally all it does.

So if the only thing you needed to do with Redux was avoid passing data as props through 15 levels of your components - well, that's literally what Context was invented to do. So if that's all you need, then you don't need to add Redux just to add that capability; use Context instead.

Now, I'll go off on a specific point here. I am constantly seeing people compare "Should I use Context or should I use Redux?" And they seem to think that Context itself is a state management system. It's not. It's a dependency injection mechanism, and you can put whatever value you want in Context, and most often you are the one managing that state in a React component, with the useState hook or the useReducer hook. And you're the one deciding where the state lives, handling how to update it, and then putting the value into Context for distribution.

So yeah, useReducer plus useContext together kind of make up a state management system. And that one is more equivalent to what Redux does with React. But Context by itself is not a state management system.

On the flipside, almost everyone is needing to cache some server state in their apps. Let's go fetch some data on our users, on our posts, on our comments, and then display them. And traditionally, that's been done by REST APIs and whatnot... But these days we have GraphQL. And while not everyone is using GraphQL, a lot of people are. And while GraphQL by itself is just a data transfer protocol, "Here's how I format my request, here's how I format my response", the assumption is you're probably using a sophisticated client like Apollo Client to manage that data. And Apollo Client has a lot of features built in, like handling a normalized cache of all the data, and if I ask for the same thing, it's already there. And it gives you this nice little interface where it's just like "use query" and it gives you back "data is loading error" in your components, so you can decide what to render.

\[01:00:14.16\] Similarly, if the only thing you were doing with Redux was storing cache data from the server, and you choose to use GraphQL and you choose to use Apollo Client, then you've just fulfilled the use case that you were previously choosing to use Redux for, and for that situation you don't need Redux.

Similarly, there's a couple new libraries - SWR and React-query, which do the same kind of thing, but focused around more of a REST API. It's just "Here's my URL, fetch it, give me back "data is loading error" and they cache the stuff officially and can share it some. And again, if that's the only thing you were doing with Redux and you choose these other tools, then they replace that use case and you don't really need Redux at that point.

On the other hand, while you can do some limited bits of client state management with Apollo or maybe with React-query, that's really not the use cases they were meant for. So the way I would distinguish it is Redux is a very generic state management tool that can be used for a broad array of use cases. Caching state from a server, UI state, other complex data management on the client... But it's probably not going to be the best or most efficient tool at any of those use cases. Other tools like React-Query or Apollo are much more specialized for this specific case of data fetching.

So you can do many things with Redux. It might not be quite the best at all of them, but you can do lots of different things. You can do server caching with Apollo and React-query, they're gonna be very good at those, but you can't do some of these other things. So it's really a question of "What specific problems are you trying to solve? What problems do these tools solve?" and "Where's the overlap between those?"

**Amal Hussein:** That makes perfect sense. This is such a deep topic, really. It's fascinating, and it's really nice to see how the ecosystem has also evolved to specialize in areas of state management, which is also nice... But I would say we're all kind of standing on the shoulders of giants, and I think Redux and the patterns from the Flux architecture in general have really paved the way for just saner state management overall. So it's just very exciting to see how far we've come.

**Mark Erikson:** Even just the existence of the Redux DevTools basically is table stakes at this point. If you're introducing a new library, you either have to have your own dev tools, or find a way to integrate your library with the Redux DevTools as a baseline... And I've seen lots of libraries try to do that.

**Amal Hussein:** What is it, Jerod - raise the tide for all boats? Am I saying it correct?

**Jerod Santo:** That's right. A rising tide raises all ships.

**Amal Hussein:** Yes, thank you. There we go. Much better. Yeah, so thank you so much for your time, Mark. It's been awesome.

**Jerod Santo:** Yeah, absolutely, Mark. You have definitely rised the tide -- I don't know how you rise the tide, but--

**Amal Hussein:** Rised... We English good! Just kidding.

**Jerod Santo:** We English good around here. That's why we podcast...

**Amal Hussein:** \[laughs\]

**Jerod Santo:** We're thankful to you for coming on JS Party and sharing -- you have an amazing amount of depth of knowledge about not just Redux, but application architecture. Thanks so much for sharing it with us, and for all the work you do... The often thankless work of answering people's questions on the internet - we're here to thank you on their behalf. That is super-cool.

**Mark Erikson:** I appreciate it.

**Jerod Santo:** What's the best way folks can hook up with you and maybe tap your wisdom, and maybe say thanks for all the work you do on Redux and in the community?

**Mark Erikson:** \[01:03:57.21\] Sure. My blog is at blog.isquaredsoftware.com. I've got a lot of React and Redux and some other stuff on there as well... Probably my most popular recent post was a 6,000-word treatise on how React rendering behavior works. Like, when does React re-render, what stops React from rendering, how do you optimize it, how do Context and React Redux interact with that. I also just put up a couple new posts in the last couple days with some bits of coding career advice on things that I've found useful in my career as a developer. One post was on the value of keeping a daily work journal, and another was some tips for how to correctly evaluate third-party libraries and software tools. So lots and lots of writing on my blog.

I'm pretty much active on Twitter at @acemarke. Also in the Reactiflux Discord chat channels, same handle. I'm generally either @acemarke or @markerikson in various places on the internet.

**Amal Hussein:** Mark, I'm doing a talk at NodeConf EU on dependency management at scale, and that's one of the things I'm gonna be talking about - the rubrics that I use for when I'm picking packages... So I'm now gonna add your blog as a list of resources for my talk. Thanks for that. \[laughs\]

**Mark Erikson:** Sure.

**Jerod Santo:** Absolutely. I did find that one a mostly complete guide to React rendering. All the links to all the things are in the show notes for your clicking enjoyment. Thanks so much for listening. That's JS Party for this week.

Hey, stay tuned next week, it's our big frontend feud game show. It's gonna be an extravaganza, you don't wanna miss it!

**Outro:** \[01:06:03.18\]

**Amal Hussein:** JavaScript developers love, I would say, no code... In the sense of like "Less code is good."

**Jerod Santo:** What developer likes more code...?

**Amal Hussein:** Nobody. But sometimes--

**Mark Erikson:** I'm told that's the Java folks...

**Jerod Santo:** Okay, I was waiting for that one... Served that up on a platter...

**Amal Hussein:** Sometimes more code is... Yeah, I feel like sometimes more code is--

**Jerod Santo:** So brevity is the soul of wit, but it's not necessarily the soul of readability.

**Amal Hussein:** Or maintainability. That's the thing. That's exactly it.

**Mark Erikson:** It's really easy to over-abstract, and I've been guilty of that myself before.

**Amal Hussein:** Thank you. Thank you! That's exactly it. So it'd be good to get into that, and then obviously some other super-powers that you've built into Redux Toolkit... Like the fact that it's super-charged, but there's also rails... Anyways.

**Jerod Santo:** Okay, love it. So Amal, can you re-say that? ...work on the brevity side, tighten it up.

**Amal Hussein:** Okay, I'll work on the brevity side.

**Jerod Santo:** We'll start the show, and I'll just say "Go!" and then you open it back up and we'll just go as if we didn't just say it out loud; we can just say it on the show, okay?

**Amal Hussein:** Yeah, yeah. Say it on the show, yes.

**Jerod Santo:** Alright, go!
