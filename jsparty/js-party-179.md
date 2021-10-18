**Nick Nisi:** Hello, hoy-hoy! Welcome to JS Party. I'm your host this week, Nick Nisi, and I am very excited to have a special guest, and that is Tanner Linsley. Tanner, how's it going?

**Tanner Linsley:** It's going great. How are you?

**Nick Nisi:** I'm doing excellent. Welcome to the show. Thanks for being here, and we are excited to talk about the TanStack, which is a really exciting set of projects that you have worked on and created. Let's dig right in...

**Tanner Linsley:** Let's do that.

**Nick Nisi:** First off, maybe tell us a little bit about yourself.

**Tanner Linsley:** Sure. I'm an open source software developer and entrepreneur. I've been developing for probably about eight years, ten years, somewhere in between there. I've been doing React -- I started using React about a year after it came out; so not like super-early adopter, but I've been using it for quite a while.

**Nick Nisi:** What got you into React?

**Tanner Linsley:** Well, initially I was an Angular fanboy. Whatever I'm into, I dig my heels in real hard... So I just loved Angular. Eventually, I just started hitting bottlenecks, and design constraints, and architectural questions that I didn't like the answers to... And one day it just became apparent that I needed to change. So I took the plunge, and I actually took the plunger from Angular into both React and Redux at the same time. So it was a big change.

**Nick Nisi:** Oh, wow. \[laughs\] Yeah, a completely different mindshift. And just to give a context for the time period - this probably would have been Angular 1.x then? Is that right?

**Tanner Linsley:** Yeah, this Angular 1.x, Angular.js, back when it was still cool. At look at Angular now and I don't even know what I'm looking at, but...

**Nick Nisi:** Yeah, for sure.

**Tanner Linsley:** \[04:09\] Actually, Vue reminds me a little bit more about the Angular that I used to use.

**Nick Nisi:** Nice. I have luckily avoided Angular.js in my career so far, but not true with Angular 2+. But yeah... Cool. So you got into React into something like the 2014 time period... What got you thinking about open source? Because you have a lot of really cool and popular open source projects. What got you started with that?

**Tanner Linsley:** Believe it or not, I was in open source before I even started really programming a ton... Just because from my young, naive mindset it was like a place to get free software. So I was like "Wow, people are building things for free and I can just take them." So I was a leecher for a very long time as a youth, and even in my early development career, when I was doing WordPress for a long time, before I even became a "real" programmer. I used so much open source stuff for WordPress, and that was kind of when I started getting into contributing little bug fixes, and dealing with PHP... It was a mess. So really when I kind of started diving into it was when I learned about Angular, and I learned that it was this open source piece of software that was just really cool, and it really changed my life, to be honest.

I love React, but Angular was my first big love into frontend. And when I learned it was open source, I just thought that was awesome. And then I learned that I could start creating my own open source libraries... I remember going to meetups -- in fact, I remember one of the very earliest meetups I went to; Kent C. Dodds was actually there, here in Utah...

**Nick Nisi:** Nice.

**Tanner Linsley:** And I think it was one of our first meetups for both of us, but he was there presenting one of his very first open source libraries that he had created. He's like "Yeah, I created my own library", and I was like "Man, that guy is cool. I wanna do that, too." I thought he was my hero, and he was doing this awesome stuff... Little did I know, he's still learning, too. We all don't know what we're doing, but we like to make it look like we do.

So from that point, I just kind of became obsessed with "I'm gonna build these great tools in open source and give them back to the world for all of the leeching that I have done in my past." That's how it all started. The reasons that I'm into open source today, and even in the last few years, have changed drastically from that mindset... But that's kind of what got me started.

**Nick Nisi:** Nice. So now, today, do you work on open source full-time, or what do you do as your day to day?

**Tanner Linsley:** So a majority of my day is spent on my startup, Nozzle. I started Nozzle with two co-founders. Our CEO is in the office behind me, and our VP of backend in the other office behind him. So us three, we started Nozzle about seven years ago, and - it's always hard to describe what Nozzle does, but essentially we are reverse-engineering Google search rankings. Google is crawling the internet, but we are crawling Google, to find out where people rank, why they rank where they do... Basically, take everything on the search page and just turn it into big data. That's what Nozzle does, and we do it as scale, and there's a lot of hard, fun problems that come with trying to do that.

**Nick Nisi:** Nice. I can probably guess that you're using React in that stack for Nozzle...

**Tanner Linsley:** \[07:37\] Absolutely. Nozzle uses a lot of React. I mean, to be honest, a lot of the tools that I have built in the last few years have been there because I needed them at Nozzle. It's kind of this symbiotic relationship where if I can build a tool that's open source and help other people, and also get their help in testing the library and getting the features so that they're solid... There's only two of us frontend developers here at Nozzle, but sometimes I feel like there's hundreds with all the help and the people who help out with my open source libraries... In a way, they're kind of directly contributing back to what I've built for Nozzle. So it's kind of cool to see the two of them work together.

**Nick Nisi:** Yeah, that's awesome. So we are gonna dive into some of the projects that make up the TanStack, but I wanted to ask you about that specifically - TanStack is like a great way to market this set of projects together, and I'm wondering how you got started with that, or that mentality or thinking mindset when it came to packaging and/or marketing these tools together. And the tools are react-query, react-table and react-charts.

**Tanner Linsley:** Right. You know, I have to give credit to Shawn Wang (@swyx). One day I was talking with Shawn and he's like "Man, you've got these libraries. This is so great." I was like, "Oh, thanks." He was like "You need a brand", and I was like, "I know. I just use my name for now." He's like, "No, it's the TanStack!" And he kind of said it -- I don't know if it was tongue-in-cheek, but in a funny way... And I was like "Oh, man. That's just seems so narcissistic." And then I think he told a few other people, and then one other person was like "Well, the TanStack..." And at one point I just said, "Okay, it sticks... And it sounds cool, because it rhymes with JAMstack..." And I was like "Yeah, let's do it. Why not."

So it wasn't a super-conscious decision at first. It was just more of like a hashtag, right? And after he did that and I started calling it the TanStack, I was like "Well, now I'm really deep in. So I have to buy the domain, and I have to get all the things..." So that's kind of how it all started with the branding.

**Nick Nisi:** Nice.

**Tanner Linsley:** And early on -- so the only other big library I built before these was react-static. And I initially built react-static under Nozzle's GitHub, which ended up being kind of strange, because it really didn't have anything to do with what we did at Nozzle. The goals weren't aligned, and I actually ended up not using react-static that much anyway. That's another story for another day. So react-static is gone... I just figured I needed a home that wasn't my startup, but was in my personal name, to kind of put these projects and let them even potentially live on beyond me. The TanStack - yeah, it's got Tan in it, but it doesn't necessarily mean that if I were to leave, it couldn't be called TanStack still. It was just kind of fun.

**Nick Nisi:** Yeah, absolutely. That's been the interesting thing, too. For me, coming to know about you has been through React Query, and we'll kind of dive into that library a little bit here after the break... But I saw that, and the docs have been really great going there, and I get a little pop-up in the docs that talks about the TanStack, and that's where I got the introduction to that. That's all just to say that it is very catchy and memorable, so...

**Tanner Linsley:** Oh, thanks. Good.

**Nick Nisi:** I think it's working.

**Tanner Linsley:** Yeah, I think so...

**Nick Nisi:** Props to swyx for that name, because it's really nice.

**Tanner Linsley:** Yeah. I own him lunch \[unintelligible 00:11:07.23\] come and visit.

**Nick Nisi:** Yeah. \[laughs\] Awesome. So what has that journey been like so far? Creating these popular libraries that have quite a few stars on GitHub, for example, and react-query in particular - that's the one I'm most familiar with; but it's very popular... I've heard about it on other podcasts, and see articles about it all the time, and I really like using it at my day job... But what has it been like riding that wave of popularity with these really nice open source tools?

**Tanner Linsley:** It just kind of comes at you really fast. I remember -- I wasn't surprised necessarily that I was able to get a couple thousand stars with react-query. React-table was the first library I built that kind of got a fair amount of stars, but it was much slower over time, so it didn't really take me by surprise with react-table, just because it's slow. But with react-query it was different, because I could tell early on that there was something kind of magical about the timing and all of the ecosystem that it was released in. It was prime for a library like this to come out. And I could tell because I wrote it internally for Nozzle at first, used it internally for a couple months, and then decided it was time to open-source it. And when I released it, I got a lot of stars; more stars than I had ever gotten on any other project, really early on.

\[12:37\] I was marketing it, I was telling people about it, but not necessarily any more than I was doing with react-table. I still think that it could be that react-query is just a little more general-purpose than any other library. So I think comparing the two isn't really apples to apples for me, but it's been a whirlwind. Lots of influx of users, so many feature requests, so many bugs... There have been so many people that have stepped up to help, and people that have stepped up to voice their opinions as well, kind of the leechers of today... And there's a lot of things that have come up, but none of them necessarily have been new; they've just been at a bigger scale than I'm used to.

**Nick Nisi:** Okay.

**Tanner Linsley:** Luckily, I've had great people step up to help. Niek Bosch and Dominik Dorfmeister (TkDodo) - these have been two people that have really stepped up with react-query specifically to help triage and work on features with me, and fix bugs. I'm more of the inventor mentality/inventor personality, and I can't tell you how valuable it's been to have people who are definitely more of the maintainer personality step up and help me take care of things.

**Nick Nisi:** Yeah, I imagine it must be tough with being a co-founder in a startup and having these very popular libraries... How do you find the time? Is it really just the influx of help that you get from other maintainers and other contributors to the projects that helps you stay on top of that?

**Tanner Linsley:** A lot of bug fixes and triaging does happen asynchronously, not during the day, and for the most part I don't have to do too much. I kind of set aside at least an hour every day, maybe at night when things calm down, to just go through as many issues as I can, and pull requests, and make sure that things are moving well. I try and get on my Discord channel and answer any really pertinent questions that pop up... But for the most part, I'm trying to let the community handle it as much as I can, just for my own sanity. Because it is a lot to juggle a startup and also a bunch of open source, and my family. There's just a lot of things to do and not enough time to do it. So managing time is probably one of the hardest things to do as a maintainer.

**Nick Nisi:** Absolutely, yeah.

**Tanner Linsley:** When it comes to -- like, the most time that I'll spend on a library is usually when Nozzle needs something new, or I need something new out of the libraries that either doesn't exist, or needs to exist in a new version. That's when I can justify taking a large chunk of a few days and say "Okay, I'm going to work on these new features for the library, which I need for my startup." That feels right to me.

For the last few days I've been taking maybe half of the day and working on the new version for react-table, because there's new things that I need for Nozzle that I need in this new version. So it's easy for me to justify taking that time and investing that into the library?

**Nick Nisi:** Yeah, absolutely. Scratching your own itch raises all boats, to mix metaphors...

**Tanner Linsley:** \[15:56\] Yeah, and it's important to dogfood your own libraries, right? That's one of the reasons that I'm still around on these libraries, is because I need them. They're not just some weekend project that is now a burden. They're just as much of a dependency of my business as it is my stack.

**Break:** \[16:16\]

**Nick Nisi:** Admittedly, I was very excited to get you on this podcast to talk about the project of yours that I've used the most, and used quite extensively at my day job, and that is react-query. Maybe I thought we could start with you describing the power of react-query. How would you describe what it is and what you can do with it?

**Tanner Linsley:** My description has changed over the last two years, as people ask what it is... I still think one of the best descriptions is just what's on the react-query.tanstack.com, "Performant and powerful data synchronization for React." That's really what it is. I think a lot of people equate react-query with a fetching library when they first hear about it, and they're like "Nice, it's gonna replace my thunks" or "It's gonna replace my fetch promise hook" or whatever. And yes, it can replace some of that functionality, but it's agnostic to how you fetch. Really, it's more of like a coordinator of fetching, if you can think of it that way. And it really is more of a library for synchronization instead of just fetching kind of one-offs. It almost takes people by surprise when they're like "Oh, sweet, now I get to rip out all my used state and use \[unintelligible 00:18:55.18\] stuff and then put react-query in." But then they realize that it's not just fetching once, it's kind of like "Wow, it's keeping my stuff up to date." It's almost like a meta stream of data coming into your application. It's not WebSockets or anything live like that, it's just using intelligent user input actions to trigger those refetches under the hood.

So synchronization is always the word that comes to my mind when people are like "What is react-query?" Well, it's synchronization between remote data and your application. And the next word that comes to mind is cache. It is a temporary mirror of things that live in a remote location in a very accessible way. So a little different than how I initially described it, but it's what it is.

**Nick Nisi:** I like that a lot, and I think it's very accurate based on my usage of it as well. I'll tell you, me coming into it -- so I came into it about a year ago, and I was kind of thrown in with this, and I think we were looking at another tool, like maybe SWR at the time... And we were also creating a lot of new GraphQL endpoints. So I immediately - just based on the work that we were doing - equated it with that; and then looking through the API, it has a mutation... Is that what it's called, mutate...?

**Tanner Linsley:** \[20:21\] Yeah, use mutation.

**Nick Nisi:** Use mutation, that's it. A use mutation hook. So I was like "Oh yeah, this is just a GraphQL library." But then as I actually started using it, and thinking kind of "This is gonna replace Axios throughout our application, and we're just gonna be using React Query, and doing GraphQL queries and mutations." That was the mindset that I went in with it. But then as I used it, I realized that, like you said, it's really not about replacing any of those. We're still using Axios.

**Tanner Linsley:** You're still using Axios? Oh, okay...

**Nick Nisi:** Yeah... \[laughs\]

**Tanner Linsley:** It's kind of a surprise; you get in there and you're like "Oh. Oh, okay..."

**Nick Nisi:** Yeah, it's great. So we're still using that, and we are using it with GraphQL as well, and I think we're wrapping GraphQL Request with this.

**Tanner Linsley:** Very common.

**Nick Nisi:** Yeah. That's the cool thing about it - you really don't need to think about it as just strictly fetching data. It kind of works just with promises. Anything that is asynchronous, it can work with. So you can use that to pretty much do anything.

**Tanner Linsley:** Yeah. I've had people even wrap asynchronous SQLite things with react-query. People have wrapped a lot of different things, if it supports a promise. There's even people that will use it with Firebase; the initial request to Firebase will be a promise, and then they'll also set up a subscription on Firebase and say "Anytime that it changes, we'll just update the data that's in react-query", or invalidate, whichever way you wanna do it.

**Nick Nisi:** Yeah, nice.

**Tanner Linsley:** As long as it's got a promise...

**Nick Nisi:** That's the powerful piece of it. I mean, that's kind of half of it. And then the other piece is -- I don't know how best to describe it in technical React terms, but every query that you do, you give it a key, and that key can be a string (we use a string a lot), or it can be an array, or an object, and that'll get serialized into some unique value... And then it's used as like an identifier in the "global" state that react-query is storing the values for everything. And that's a way that you can reference it and pull it out later to use everywhere.

That is super-powerful, I think, because then I can use a useQuery anywhere, and the way that I create it is basically wrapping useQuery with my own hook, and then using that hook somewhere else.

**Tanner Linsley:** That's a great pattern. I think that's the best way to use react-query, is creating a custom hook for some asset, and then just passing that hook around. It encapsulates so much of good practices, I guess, of not repeating keys that you might have typos in, and having to pass the functions around everywhere. You can encapsulate all of your side effects, and your data manipulation that happens in between fetching and supplying it to your components... It can all happen in one place.

That is the powerful part about it - you can use that custom hook after that anywhere in your application, at any level, and you can use it as many times as you want. You could have ten, or a hundred of those useQuery instances on the same page, but it's really only ever going to result in one query going out.

**Nick Nisi:** Right. That's the super-powerful thing, is just being able to use that, but then also that goes back to synchronization that you used as kind of a keyword to describe it. When you start using that hook everywhere, and then data gets updated through some invalidation process, it's going to update everywhere that's using that data, and then React just takes over and rerenders from there. So yeah, that's the super-powerful part of it.

\[24:09\] Also, some of the things that I really like about it are how much configuration that you can really do, but also how much you don't really have to do... But you can really customize how it controls its cache, and things like that. Do you want to maybe talk about some use cases for that?

**Tanner Linsley:** Yeah. I love how you say that you can configure everything, but it comes with some automatic stuff. In the docs I actually call this "aggressive, but sane defaults."

**Nick Nisi:** Yes.

**Tanner Linsley:** And that's exactly what it is; there's an option for everything, but you should never have to supply everything, and infer as much as you can. And the defaults that come with react-query are very aggressive. The defaults are there to basically overfetch; the first priority is just to keep your data up to date all the time, really almost at any cost. So every time you refocus the window -- there's no stale time. So data is always considered out of date as soon as it hits the client. And anytime you click the screen, refocus the window, it's gonna go fetch everything again. And if the network reconnects again, it's gonna go fetch everything...

So it's very heavy on fetching out of the box. I think that's pretty safe bet for most people. Some people like to worry a lot about network bandwidth, and I think that is a concern if you are building a very specific kind of application for low bandwidth devices. But for the most part -- if you're fetching really small JSON blobs, latency might be a thing to worry about. But other than that, the user can always refresh the page. If they refresh the page five times, they're gonna be making five brand new rounds of requests. So it really shouldn't be any different than the user doing that. That should not bring your app to its knees.

So I feel like that's been a really good default, to just kind of be aggressive. And it's easy to teach people how to tune it back from that point. You can change the stale time to make it so that when data comes back to your application, it's considered fresh and up to date for a certain amount of time before React query will try and go and fetch the latest version. So if you've got some asset coming back from your API, you know that it's never, ever changing. I get situations like - the demos that use the Pokémon API... Pokémon are not changing. They're stats, and all the info of the Pokémon is not changing really ever. You could put stale time to infinity and React query is like "Yay, I got the copy. I don't need it again. That's it."

**Nick Nisi:** \[unintelligible 00:27:02.19\]

**Tanner Linsley:** But if you have something like an admin dashboard for teams of people that are working together, you'll have objects that are getting edited and saved all the time between people. And that's a situation where, regardless of whether you set up WebSockets or something to listen to those changes, it's just kind of nice to be able -- you know, you come back to your application and everything's just up to date. You don't have to do anything. So that's where the aggressive part really comes in handy. But like I said, you can tune that back as far as you want.

**Nick Nisi:** Yeah, definitely. And I think I agree with you on the balance between aggressiveness and usability with that. For the most part, we haven't touched that in our app. One of the key distinctions or highlighted behaviors that we see with react-query is what you said - we're kind of transitioning between the Chrome DevTools and the app, and you immediately see new network lines going into the network tab, because we're refocusing, and the cash is invalidated, so it's refetching.

**Tanner Linsley:** Yeah.

**Nick Nisi:** \[28:11\] But then on the other hand, or at the same time, we have some -- specifically, I worked on some code that's pulling in some documents, so it's like kind of bigger, raw HTML blobs that it's pulling in, and will use. And those are not changing. So I set the cache time on that as like an hour, so they're only pulled in once and we don't have to go fetch them again probably throughout the entire session. But that's something that I can really just configure because I'm making those custom hooks wrapped around react-query every time. I can just configure that per hook and have it set up so that anyone who tries to fetch those documents is always going to get this data that is cached for an hour, versus -- you know, when we're pulling up live user data, that is immediately invalidated, so every time it will try and refetch that... And it's overall a good balance. The configuration is there when I need it, but otherwise I don't have to think about it.

**Tanner Linsley:** Yeah, that's great. That's exactly why I designed it the way I did. I was gonna say, there's also something to be said about the garbage collection features of it, too. Caching is a hard problem, but what we're talking about is in-memory caching, but react-query also has some semi-persistent caching too, where if you request something and it gets cached and then you kind of leave that screen and it becomes unused, it still stays there in the cache for a specific amount of time, so that if you ever go back to that screen, it will show you the outdated data right immediately, and then get the newest stuff in the background.

It also has this automatic garbage collection lifecycle behind the hood that's saying "If there's old, unused data that lives beyond a certain amount of time, kind of like a max age inside of the cache, then it gets garbage collected."

**Nick Nisi:** Is that all based on max age, or does it somehow know what is actually being used and rendered by a live component?

**Tanner Linsley:** It's based on both. So the max age garbage collection lifecycle never kicks in if you have active subscriptions to any data on the screen. But if you have a subscription to a user and there's five hook instances, then if all five of those instances disappear off the screen, and that hook user data is still in the cache, by default it will sit there for five minutes. And if that five minutes passes and a new instance doesn't pop up to bring it out of cold storage, then it gets evicted from the caching garbage collected.

**Nick Nisi:** Nice. Another cool thing that I really like about it is really the way that react-query kind of hides -- not hides, but it makes working with the fact that the data that you're working with is asynchronous, it makes it really kind of seamless in a lot of ways. And one of those ways could be, like we were saying, just wrapping the hook and then I could provide it with an empty array whenever useQuery \[unintelligible 00:31:01.07\] is true, or whatever.

But another thing is you can set a primary set of data for it, so that it'll just return that immediately. Is that also a way that you could hydrate it with server-provided data?

**Tanner Linsley:** Yeah. That goes into a lot of cool things, what you've just said. So there's a couple of different concepts there. There's the concept of placeholder data; placeholder data is just fake data. It's nothing that you really wanna keep in your cache, it's just kind of like a loading state data that you can provide. Sometimes it's an empty array, or an object with a bunch of John Doe type fields in it.

So there's placeholder data. Then there's initial data, which - initial data is more of like "Hey, here's the data that I'm fetching. I already know what it is, I already have it, so I'm going to provide it with initial data." It gets puts into the cache. So that is useful if you are -- say you fetched a list of users, and then you're moving into a detailed user view. You can take the users that you already fetched from the list of users and use it as the initial data for the user subscription, the individual one.

**Nick Nisi:** \[32:16\] Nice.

**Tanner Linsley:** And it'll kind of "hydrate" that way. But if you're actually talking about SSR hydration, there's much better ways of doing that with react-query. There's a whole SSR kind of recipe to get a great experience with it. And really the way that that works is you just kind of use all of your queries as if the data is there, and then during your SSR stage you basically just kind of suspend your SSR and prefetch the data that you need into your cache, and then you render and all the useQueries just kind of work synchronously, because the data is already there.

So it's definitely a spectrum of temporary data, to persisted data, and when it gets picked up. There's a recipe for everything in react-query, so...

**Nick Nisi:** Yeah, definitely. And those recipes allow you to, for example from your component, really be able to trust that the data is there. it's also suspensified, or it does support suspense, so that you can use that if you like, as well.

**Tanner Linsley:** Yeah. Some people don't like that, if you use -- I don't mind either way. I like -- you know, useQuery, I just kind of have it return a query object, and it's universal throughout the app. You've got asynchronous queries and you've gotta handle your loading, and your error states, compose them together, whatever.

Some people don't like that that leaks into everything, so you can set up suspense and just kind of say "useQuery" and the data is going to be there all the time... Because you know that the queries are going to suspend your rendering until it is. So you're just kind of trading that status boolean checking in your rendering - you're exchanging that for suspense and error boundaries is really all you're doing.

**Nick Nisi:** Yeah. Nice. Now, there is one other piece -- a couple of other pieces, actually, that I wanted to touch on... And one really cool thing about react-query is that it does actually come with its own dev tools. What gave you the idea to ship custom dev tools as part of the project?

**Tanner Linsley:** Well, I think it was natural, looking at other tools, to do it. Redux has dev tools, and Apollo has dev tools... A lot of things have dev tools, and I also saw -- Kent likes to talk about shipping your own dev tools a lot as well. It's just kind of been around. I knew that I wanted dev tools from the very beginning, because I wanted to be able to inspect this -- the lifecycle of react-query can be a mystery sometimes, unless you have the dev tools there to show you what's going on.

So I knew I wanted them from the very beginning, I just didn't know how I wanted to implement them. I looked into building an actual Chrome extension, and I can tell you that that was very quickly not going to work for me, mostly because of the time that I was going to have to invest. It was not worth the ROI.

Chrome extensions are a bunch of domain knowledge that I don't really want to have and I don't really care about right now; maybe in the future, but I don't want right now. So I'm like, "I'm just gonna use the tools that I have and that I know work for me. I'm just gonna build a component. It's a React component, you can put it anywhere you want, and it's the dev tools. And I'm gonna ship it with a bunch of in-line styles." I even made a little styled-component type thing that just uses inline styles, and a theme, and everything. It just kind of ships an all-in-one inclusive component. And it worked out great; you can render it wherever you want, or you can just use the React dev tools main one and it just renders at the bottom of your screen type of thing... And it works great.

There are some drawbacks... People are like "Oh, I wish it wasn't taking up part of my screen. I wish I could have it in an external window." Yeah, sorry... If that's really that much of a pain, you can go build the dev tools extension, because I'm not doing that.

**Nick Nisi:** \[36:10\] Yeah. At C2FO where I work we're pretty used to seeing the little floating flower down at the bottom of the screen.

**Tanner Linsley:** Yeah, I love seeing that now. I see it in random places too on videos, and screenshots, and it just kind of makes me giggle a little bit... Just like "Oh, look, there's the React flower."

**Nick Nisi:** And then one other thing I wanted to touch on with this - and correct me if my timeline or understanding of things is wrong, but I think that when I came in and started using this project it was written in JavaScript. But now it's written in TypeScript. And I'm just curious about the transition to that.

**Tanner Linsley:** I mean, I've known that TypeScript is in my future since I heard about it. Types are great, and they come with a lot of great things. I didn't know how to write TypeScript and I didn't have a lot of experience with typed languages. I just know from programming principle perspective, like "Yes, I want types. I want things to be strict. It's gonna help me out." But it was difficult to go all in on that when I didn't have that skillset. I wasn't using TypeScript at Nozzle, and I wasn't using it in any of my personal projects or my open source... So I was really new. And I just knew that one day there was gonna come a point where I have to do it. React-table almost got me there, because there's a lot of people who use react-table. But for the most part, there's people in the community that were like "We're gonna build types for react-table." I was like "Sweet! Do it. I don't wanna have to do that." And I've been getting away with not using types at Nozzle for a while. I was. And then react-query got huge, and at some point you've just gotta bite the bullet and say "Well, I guess I'm learning TypeScript." And there's a lot of great things that come with TypeScript, and I'm glad that we moved... But I can't even remember when we moved over. I actually didn't even do the initial TypeScript migration for react-query. That was actually all Niek Bosch, who is just a wizard. He really understands TypeScript, and he has more of an object-oriented background, which is why you'll see a lot of that in react-query core. There's a lot of classes... And that's all great. TypeScript and classes work great together, and the model actually fits really well, since 99% of react-query isn't even React; it's kind of just TypeScript.

So yeah, after that I was like "Well, my library is in TypeScript now. \[unintelligible 00:38:37.26\] So I started learning TypeScript and migrating Nozzle over, migrating some of my smaller tools, internal tools over to use it... And then right now I'm actually building react-table version 8, and it's all in TypeScript. It's a full -- I wanna say I'm migrating, but it's really just a rewrite. I'm rewriting it in TypeScript with entirely new -- I wouldn't say new API; that's gonna scare people that it's gonna be breaking changes... But it's gonna be new for TypeScript. So yeah, unavoidable, but great.

**Nick Nisi:** \[laughs\] Yeah. So it's safe to say that it's kind of lived up to the thoughts that you had, or the hopes that you had for converting over to TypeScript.

**Tanner Linsley:** Yeah, writing libraries - this is something that I had to learn very quickly, but writing library TypeScript code is just a whole other ball game than just using TypeScript. Unless you've written a library that uses generics and is even moderately complex, you have no idea. You don't know what you don't know. So I'll just say that - writing generic code in TypeScript is just like you're writing in the meta, meta level of programming. It's mind-boggling sometimes. But it's a lot of fun. It is a lot of fun. Sometimes I've gone too deep with that, I got sucked into a plugin rabbit hole with React table for the last nine months, and I'm finally back out of it and just kind of using TypeScript instead of trying to bend its limits and go crazy with generics.

\[40:15\] So it was difficult to learn, I'm still learning, but I feel like I'm in a good place now, where I recognize the trade-offs. There are definitely places where I wish TypeScript had better answers for things that I wanna do. And most of those are centered around generics and how to type flexible APIs. Some of that may never change, but that's okay.

**Nick Nisi:** Yeah. Well, hopefully it does. Hopefully they can bring that functionality, to keep it as flexible as possible, while still being as performant and powerful as it is.

**Tanner Linsley:** I mean, just to make sure that the TypeScript team knows that I appreciate even just the work that's gone into the last year or year and a half of TypeScript has just been phenomenally amazing. That's been another reason too that it took me so long to change over, is just because I felt like it just wasn't quite where I wanted it to be yet... But I can tell you that for the regular use case there's very little that TypeScript can't do now.

**Break:** \[41:18\]

**Nick Nisi:** Alright, so we talked about react-query quite a bit, and that fantastic framework or utility for writing synchronized code that is coordinated throughout our frontend. Trying to use the keywords that you used to describe it in that sentence... But I did wanna touch on another piece of the TanStack, and that is react-table. This is an interesting project, and I think you said in the last section that you're working on version eight of it right now... Is that right?

**Tanner Linsley:** Yup.

**Nick Nisi:** Nice. To be honest, I hadn't really heard of it before too long ago. I think I saw you talking about it, probably in the context of TypeScript; I think I saw you talking about it on Twitter. But it is a pretty interesting library. And one of the biggest things that immediately struck me when I was researching it was the fact that it's not actually a table component. It's just a series of utilities for you to build your own, which is fascinating. So do you wanna talk about what it is and introduce this in a way that is better than what I just did?

**Tanner Linsley:** Yeah. So I'm gonna throw out a term here, and then I'm gonna describe the background of this term... React-table is very much a headless UI utility.

**Nick Nisi:** Yeah. I like that.

**Tanner Linsley:** And people are becoming very familiar with this term, headless UI, because even the Tailwind guys have built headless UI. It's kind of the same concept, where they're building a UI library, but it just has no styles, is very unopinionated about what it renders, and they actually took the term headless and branded it.

**Nick Nisi:** Yeah. A project by Tailwind Labs.

**Tanner Linsley:** \[43:57\] Perfect. So I got it right. It's becoming more popular, this term... But back when I learned about it - way, way back when, just a couple years ago - was there was a utility that Kent wrote. If you can't tell, I just love everything Kent does. I hope he loves the stuff that I do, too... But Kent wrote a utility called Downshift. It's for building autocomplete and select box experiences... But it doesn't render anything, it just gives you the utilities to build your own. And I was like "This is genius", because especially for tables -- so version 6 of react-table was a component. And it came with all the bells and whistles. You drop it in and it just works. But it was the worst to maintain, because it had over 120 props for customizing HTML. And then within those options, there was just like "Okay, now you can override the style, and the class name, or you can give it your own component." Once you own any of the markup or the styles, you're in for a world of hurt... Because people do not like your styles. People don't want your styles, they don't want your markup. Even if they think they do, they won't in the future. I knew this because I built my own React table library. I was like "I'm gonna build react-table." And then I dropped it into Nozzle, that I needed it for, and I was like "Well, this doesn't match at all. The style here does not match." And we just used it because we needed to. I was like "Okay, I'm actually gonna tweak react-table's core styles to kind of look like Nozzle, that way I don't have to do any work."

But everybody else that uses react-table, their tables are gonna look like Nozzle. I hated that, and a lot of other people hated it too... And I would listen to people talk about competitor libraries like AG Grid, or Material-UI table, and they're like "I can't change the theme. I can't change the styles. I can't override this. What if I wanna move this part of the table to the bottom?" I'm like, "Um, sorry." That's why when I saw Downshift, I said "This is genius. I'm going to take react-table and I'm just going to rip it into two pieces. I'm going to rip all the UI and the styles and the markup away from the logic, and just turn it into a render prop component." I was like "Let's do it."

I was in the middle of writing react-table version 7 render prop style when Hooks came out. And I was like "Oh, man... This is so good." The day that hooks came out, I downloaded it and I started building react-table in Hooks. And it was the best thing ever.

**Nick Nisi:** Nice.

**Tanner Linsley:** I even built a compatibility library for Hooks, so you could use it on version 16.whatever, but still get Hooks, so you could use react-table. I'm glad I didn't end up shipping that, but... That was fun.

Anyways. It's a headless library now. There were some people who definitely cried. Gnashing of teeth, many tears shed over the fact that react-table was no longer a component library. They were like "What? I have to build my own markup and my own styles? Are you kidding me? I'm out of here." I'm like "Okay, bye... Because this is so good." And what happened was great, because I realized that the examples could just use table markup really simple. You didn't have to understand a whole lot of the UI to grasp the concepts of what this table library did. And when you break it down from that, instead of being a grid, it just became this kind of sequential package of utilities that's responsible for all of the data grid things that people want. Just to name a few, but it's like, as soon as you wanna add filtering, sorting, grouping... If you wanna have column metadata, or have custom renderers per column, or have an abstraction layer, or invert control for columns to render things however they want - as soon as you wanna do any of that, it's a pain. And that's what react-table solves.

\[48:09\] Today it's still called react-table, but it's more of just like a data manipulation and data modeling library than anything else. You could take the data that spits out of react-table and put it into a chart if you wanted, but...

**Nick Nisi:** Yeah.

**Tanner Linsley:** It's convenient for tables, and there's a lot of utilities inside it for tables... Like calculating headers, and building row headers that are nested, calculating column and row spans, resizing columns... All the typical things that usually come with a table. But it's all headless, so you get to do whatever you want. You wanna build it in Tailwind, you can do it. If you wanna take Material-UI and shove react-table on top of it, you can do that. And that made people really happy, especially bigger enterprise companies that are like "We have very specific UI library stuff and we need it to look a very specific way, but we need all this great functionality."

There's a company that is really big. Everybody uses this product; every developer I know uses this product, and they're releasing something new in a month that uses react-table. I don't even know if I can say what it is; I probably could, but just to be safe, I'm not going to. But it's so cool that it's going to look exactly like their branding, and you're not even gonna really know that it's react-table, but it's using it under the hood to perform all this data manipulation. It's really cool.

**Nick Nisi:** Yeah. That's fascinating, and it's a fascinating way to build out this functionality, because really, when you're working with that, the hard parts are the filtering, the sorting, those pieces... I've worked on a data grid component for Dojo back in the day (it was called dgrid) and a lot of the bugs, and as a user of it, a lot of the work that would go into using it was in being able to customize how it rendered rows, or rendered columns, or rendered column headers, and how the footer was placed, and what that looked like, and how the pagination buttons looked and worked, and everything that they did. There was so much -- every client that we had that would work with that, they wanted it customized to look like their stuff. They didn't want this generic grid. And this is just such a mind-blowing thing to look at as something that I'm just seeing right now, because it eliminates all of that, and it takes away all of the stress from you as a maintainer, because you just get to focus on the stuff that it's going to do best, which is the data store manipulation type stuff, and then getting you what you need to do the rendering that you want exactly. Once you build those components on top of this, you can reuse those yourself, which is super-great.

**Tanner Linsley:** Yeah. I won't lie, some of it was selfish. I just did not wanna have to go through issues anymore, that says like "How can I change the styles on the header?" And now, I don't even get issues like that, but for a while I was like "You just change them, because it's yours. You own it, and when you design a bad abstraction around your styles, you're the person responsible, not me."

**Nick Nisi:** That's brilliant as a maintainer. I love that. So some of the things that it does, looking at this - is it fair to say that it ships as like a set of hooks that you would use for this?

**Tanner Linsley:** Version 7, yes. There's a base use table hook, and then you kind of add in functionality as you need it, to that hook. That's how it ships.

**Nick Nisi:** Yeah, that's what I'm looking at, is the docs for that, and specifically use table. So you pass in an object that lets it know what the columns are that it's going to render, and then a second object that is the data. And I'm curious, does it do anything -- does it just work with that static dataset, or does it have a way of doing any kind of dynamic fetching, or anything like that? Or is that kind of left up to the user as well?

**Tanner Linsley:** It's mostly designed as a controlled component. And the more I get into building complex dashboards and data manipulation experiences, I think that's the best decision. And that's partially why I built react-query - if you wanna do data fetching the right way and synchronization, use react-query and then pipe it into the table.

\[52:15\] It's built in a way so that you can control -- well, version 7 is not as good as good as v8 is gonna be, but you can control and opt-in to control specific parts of the table from outside. And you can do that just by passing in some state overrides, and using some callbacks. And that's kind of the concept around asynchronous data, is that you fetch the data and you supply it to the table. That was I don't have to deal with any asynchronous stuff inside of the table. I think that's the best way forward that I've found.

**Nick Nisi:** Yeah, and that's a good merging of those two projects together to create these really powerful components. And then of course, you can take that data and render it as a chart with your other library...

**Tanner Linsley:** Which is exactly what I'm doing... \[laughter\]

**Nick Nisi:** I love that. I love how it all comes together and they just work together very well for the different pieces that they're in charge of, but then they can also be used separately for each individual piece. Yeah, that's great.

So what can we expect to see in version 8, that's kind of the defining feature of that?

**Tanner Linsley:** TypeScript's gonna be a big one.

**Nick Nisi:** Nice.

**Tanner Linsley:** The community types are less than okay today. This new version is going to be just so great for types, and autocomplete. There are a lot of options for react-table. The API surface area is larger, even for a headless utility, but it's all gonna be autocompletable, and you're gonna have some really good type safety options with really great generics that kind of permeate through the entire system and keep things really easy on you, the developer. And that's more like a developer experience improvement, and also it's covering a lot of just like the static testing layer that didn't exist before in react-table, that we kind of just had more of like the integration testing type stuff.

So this is gonna cover a whole slew of tests that we don't have to write, and then on top of the developer experience improvements, it's coming with a couple of API improvements as well. So controlled tables are going to be much easier to do . So you'll be able to basically house all of the state for the table outside of the table, say in a larger dashboard container...

**Nick Nisi:** Nice.

**Tanner Linsley:** ...and use that to control the table. But you'll be able to opt into specific pieces. So if you don't want to manage the pagination, you can just let react-table keep managing that automatically internally. But for everything else, it can call back out into your code. So the controlled aspect of it is gonna be a lot better.

There's gonna be some quality of life improvements for performance, so I've eked out a couple more -- you know, like 100 more milliseconds less on the rendering time for accessing rows, and there's gonna be some better APIs for composing your own row props, or building your own plugins. And plugins is a great thing to bring up, because v7 has this concept of plugins.

Let me tell you, building a plugin system in JavaScript is the easiest, coolest thing you can do with JavaScript, because it's just like "What do you wanna do? We can do it. It's flexible. We can do whatever you want. You've got a callback? We can mutate things." TypeScript doesn't even enter the picture. But building a plugin system with TypeScript - I spent the last nine months researching the best way to do this, and ultimately, I decided that there's no sunk cost fallacy here; I'm not going to do a TypeScript plugin system in version 8. And that might take people by surprise, like "What?! All my plugins I wrote for v7, they're gonna go away?" I'm like, "Yeah. You asked for TypeScript, this is what's happening."

\[56:01\] So version 8 is going to be shipped with -- basically, all of the features that you're currently looking at as plugins are going to be just in a monolithic bundle. But that bundle is going to be half the size of what it would have been if they were individual, because all of the glue code disappears, and everything just works much closer together.

That also means that types are gonna be way better together, there's not gonna be this weird mismatch of types between plugins... And I just think it's gonna be overall better. You won't be able to get down to 5 kilobytes for react-table. It'll probably be more like 12 to 15. But it's a data grid library, for crying out loud. Go use AG Grid or Material-UI Grid and tell me how big those are. Now I'll let you complain about how big it is. I was making the wrong trade-offs... I'd rather have a system that works great than worry about code-splitting on a library that probably doesn't even really need it.

So those are gonna be probably some of the biggest breaking changes. Overall though, everything's gonna be way more performance, especially for people who are trying to \[unintelligible 00:57:11.00\] their rows, or save on renders throughout the table; they're gonna be able to do that a lot easier.

So I realized I just said a lot about v8. That's what I'm working on right now, so it's easy for me to spew information about it. I'm really excited about it. It's probably about a third of the way done.

**Nick Nisi:** Nice. Awesome. That's great to hear. Great to hear that there's going to be an improvement, or -- not an improvement, but an improved focus on developer experience. I'm really looking forward to playing with v7 now more, and getting into v8 when that comes out as well.

One thing that I just wanted to close on real quick is just kind of a general comment about the TanStack in general, and that is the documentation is just fantastic. I really appreciate the work that has gone into that, because clearly, you can see that work has -- everytime I have to go look up very specific react-query options that I wanna set, like increasing the cache, or being able to invalidate the cache after I run a mutation on other queries, it's really easy, there's really good examples... And in a lot of cases you link out to code sandboxes so I can just go play with it and see it running live and change it right there, which is great. I appreciate that, and thank you for the work that you've put into that.

Any closing thoughts that you have as we close out the show on TanStack?

**Tanner Linsley:** Yeah, something just came to my mind, something that's been on my mind - not necessarily for react-query, but for react-table. I've been digging into open source sustainability for a long time. I'm in a unique position where I don't necessarily have to sustain my projects, because I have a startup, I have a job, and I'm not full-time on my open source. But for some reason, I feel like the open source sustainability model could be better, and I would want that to be an option if I wasn't in my position. So I take that as an opportunity for me to explore new ways of sustaining open source that wouldn't put my family in danger or put my career in danger, because I have great things to fall back on.

One of the things that I've been trying over the last year or two has just been general sponsorship for my libraries. And it's working out really well. I've learned there's sponsors that care about different things; some of them want developer advertising by showing their logo, some of them want consultation hours, or free courses, the react-query course, or whatever. Or some of them just wanna give back. Everybody has different reasons, and it's been fantastic so far.

One of the things that I'm going to be trying here with react-table version 8 is kind of a new experiment; not new like I'm the first one doing it, but new for me. I'm going to be running version 8 as kind of a time-based sponsorware for a little bit.

\[01:00:14.28\] So version 8 is going to come out as an alpha and a beta for react-table. The alpha version is going to be available to upper-level sponsors for a few months, and the beta is going to be available to upper and lower-level sponsors for a few months, and then there's finally going to be a general public roll-out as a full open source product. Because I do believe that everything should stay open source that is, and I wanna keep building open source software to help everybody out. But I think that this is going to be a great opportunity to explore sponsorware as a viable solution.

So I just wanted to put that out there for people listening. If tables are something that you're excited about, and react-table version 8 sounds like it's gonna be game-changing for you and your company, I'm always looking for sponsors who are willing to - not just help out with the project and maintaining, but also help design the beginnings and work through the initial design of these alpha stages. Kind of shape the future of react-table, if you will. So that's gonna be coming very soon. I'm gonna be opening the alpha stage of react-table probably in the next month or two, I hope, and that's gonna be a thing. So I'd like to just throw that out for anybody listening that that's the plan.

**Nick Nisi:** That's great. I'm glad you brought this up. It is kind of a whole other topic to talk about, but it is something that I'm glad that you're exploring. Sustainability in open source is something that is obviously a problem that we need to experiment with and to solve, and to just become more comfortable with. Open source doesn't necessarily just mean it's free forever and that you should just work on it for free, and give up all of this time, because it's just not sustainable, it'll lead to burnout, and overall, packages will get abandoned, or they just won't keep up, which is not great for anyone. So I'm glad that you're exploring this. Where would people go to sponsor that? Is that your GitHub Sponsors page?

**Tanner Linsley:** Yup. I'm doing it all through GitHub. If you wanna become a sponsor, it's just GitHub.com/sponsors/tannerlinsley is where you can sign up to be a sponsor. There's some different tiers there; there's a tier for everybody, depending on what you wanna do. Also, even if you don't wanna be a sponsor, I have a Discord channel that you can sign up for. There's a link to the Discord channel on tanstack.com. So you can basically get anywhere that you need to get for all my stuff if you go to tanstack.com. Everything's gonna be there.

**Nick Nisi:** Cool. Yeah, we will put that in the show notes, for sure. And like I said, I'm glad that you're exploring this, and I'm excited about other projects too that are exploring it, because we do need that sustainability in open source.

**Tanner Linsley:** Yeah. And I plan to keep exploring it even beyond the sponsorship level. I'm hoping soon that I'll be able to build something akin to an AG Grid, enterprise grid that's like an actual paid product. Supported by an open source entity, but has a paid manifestation. It kind of reminds me of what Ryan and Michael are doing with Remix. I think that's also a great way. I'm really excited about exploring these new ways to keep open source going and keep it healthy.

**Nick Nisi:** Yeah, absolutely. Well, good luck with that. I hope that your experiment works out really well. We'll have links to that in the show notes. Tanner, thank you so much for coming on. Hopefully we can have you back to talk about that maybe sometime, and see how it's going, and the future of these projects as well.

So thank so much, and we will see you next time.
