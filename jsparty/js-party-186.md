**Emma Bostian:** What is up, my party people? How are we doing today?

**Kent C. Dodds:** Pretaaay! \[laughs\]

**Emma Bostian:** So exciting! Today we have -- I was gonna say "the infamous Kent C. Dodds", but I realized now after looking it up that's really bad thing, so...

**Kent C. Dodds:** It's more than famous.

**Emma Bostian:** Yeah, but not in good way. So we have the famous Kent C. Dodds with us here to talk about React tonight, and I am thrilled, because when I think React, you're one of the first people that pops into my mind... So welcome to this show. We're excited to have you.

**Kent C. Dodds:** Oh, I'm excited to be here... Just honored to be a part of JS Party. I've definitely listened to this podcast many times, so I'm really happy to be here.

**Emma Bostian:** Yeah, great. And we also have Nick Nisi with us today. How are you doing, Nick?

**Nick Nisi:** Hoy-hoy! Happy to be here. Hi, Kent.

**Kent C. Dodds:** Hello.

**Emma Bostian:** Well, for those listening, if you're not aware, we do a livestream with YouTube video, and Nick is wearing an NSYNC shirt, which I love, and Kent is wearing a shirt that matches his background perfectly... So I love that for us. But today we're here not to talk about attire, we're here to talk about React, which I'm excited about, because I never liked React when I started with it, to be honest... And I started my frontend career with Dojo, which was quite the experience - a little bit scarring for me - and then I moved into one of the early Angulars, and then I worked with Vue for quite a long time, and I loved Vue. And when I joined my previous company, LogMeIn, they were using React with Redux, and I was like "Oh my gosh, I have to learn this... There's so much overhead." And now you could not pay me to leave the React ecosphere. I'm in love with it. What about y'all? What are your journeys with React?

**Nick Nisi:** So the first JavaScript conference I ever went to was JSConf 2013, where Facebook introduced React... So I was in that room, and didn't necessarily hear boos, but if you could see boos, that's what it looked like. I looked up my old tweets from back then, and I was definitely like "Oh, this looks like PHP. Gross! Why would you combine your model and view together? It's yucky!" And here I am, several years later, writing React full-time.

**Emma Bostian:** \[00:04:05.03\] Right... "No two-way data binding? This is absurd!"

**Nick Nisi:** \[laughs\] "I'll just stick with Backbone, thank you..." That's literally what was going through my mind at the time. But yeah, it's been a journey. I started off writing a Rect wrapper around Dojo components, just to get them to run... And I didn't really like React back then, and it was mostly like the class-based syntax that I jumped in on. I wasn't a big fan of that, and the prop types, and setting all of that... It just seemed like a lot of busy work. But that's now how I write React today. Today I really like it, and I'm with you, Emma. I don't wanna leave.

**Emma Bostian:** \[laughs\]

**Kent C. Dodds:** Cool. I certainly don't wanna leave either. I'm really happy with React. So I first heard of React on a podcast that I was listening to while I was driving to the first ng-conf, which I think was 2014... And yeah, I think Christopher Chedeau was on there, and Pete Hunt, and Jordan Walke. I think all three of them were on there, if I remember correctly... And they were talking about this thing, and it sounded interesting... I was pretty fresh in my developer career; I was actually still in school, I think, at the time... So I was like "That sounds interesting, but I'm going to an Angular conference. Wooh!" So it was a while before I tried it out. And when I did, if you go through my tweets back then, I was just tweeting a bunch of lines in the docs that were really solid general programming principles that they were calling out in the docs, and I was just like "This is great stuff. Even if I don't end up using React, this is really good material."

But I actually did try React. And in the docs at the time they said "Give it five minutes and you'll fall in love", and I did. I just really appreciated the simplicity of React. It may not have all the bells and whistles that you get from a framework like Angular, where you have to bring more in to make a full application, but it's much easier to build a simple application when you have a simple framework, so I really appreciated the simplicity of React. I started working with React finally full-time at the end of 2015 when I joined PayPal, and haven't looked back. It's been awesome.

**Emma Bostian:** Yeah, it's funny that we were all into different frameworks or libraries at the time. I made the switch because I had to. I was actually quite intimidated by React, because it was like the hot new thing... And I think to some extent it still kind of is the hot thing, although Vue I think is the hot new thing...

**Nick Nisi:** Or Svelte...

**Emma Bostian:** Yeah, that's true, Svelte. Yeah. One thing that was really hard for me to understand was the difference between a framework and a library, because if you ever want to get clout on Twitter, just tweet out that React is a framework, and you will achieve that goal. So what exactly -- Kent, do you have any good explanation or analogies for what the difference is between a framework and a library?

**Kent C. Dodds:** Yeah, so -- oh, shoot, I'm blanking on his last name. His first name is David. He is a co-host on the Soft Skills Podcast. Dave...

**Nick Nisi:** Smith maybe...

**Kent C. Dodds:** He's amazing.

**Emma Bostian:** We'll link him in the show notes.

**Kent C. Dodds:** Yeah. But he once told me - or I overheard him talking about this - he said that a library is you calling into the library code. So you're calling library functions. And a framework is that they are calling your code. There's a lot more nuance than that, but I kind of like that generally. Technically, React is calling our code; we may pass our React components to create elements \[unintelligible 00:07:27.09\] but ultimately, React is calling our code. And we kind of do both; we call useState and stuff, but personally, I consider React to be a framework, and then stuff like Remix or Next.js - I refer to those as meta-frameworks. So it's a framework on top of a framework. And people can yell at me all day long about React being a library, I don't care. It's a really great tool in my tool belt.

**Emma Bostian:** That's very true. And it is nuanced, for sure. Nick, what were you gonna say?

**Nick Nisi:** \[00:07:57.28\] I think a lot of the distinction comes down -- and I don't know if it's so much true anymore, but it used to be viewed as just purely the Vue layer; it was just how you were going to render and look at that. But I think with things like -- more of the state management built in, with the use state hooks, and all of those different hooks, it does seem like it's taking over more and more of it. And then of course, there's other things that you bring in. So no React app looks the same, unless you're using something like Remix or Next... But there's a lot of flexibility in that, and I think that overall that's a positive thing.

**Emma Bostian:** Well, it can sometimes add overhead too, if you're trying to build a big app and you don't know how to architect it... But yeah, I would take the flexibility -- well, I don't know; I flip-flop. I like rules, so... \[laughs\] I don't know. But I think this begs the question, why would someone learn React, and why would they choose it over another framework or library? Because personally, I've found Vue much more beginner-friendly for me. I don't know what it was -- and this was several years ago. So now, looking at the ecosystem, I would say they're on-par with each other, because now that we've got React Hooks and the docs are super-thorough and all of that, I find React today to be much more approachable than it was back in the day when you had class components, and functional components... The syntax was just -- like, why would you do one over the other? We'll talk about that in the next segment... But yeah, why would someone learn React over another framework?

**Nick Nisi:** To jump in there real quick, I think in the early days of it, and going back to 2013 when it was introduced, one of the biggest things that was like a hang-up for me was "I'm not really writing JavaScript. I'm writing this weird JSX syntax that goes in there." And initially, for some reason, I had a big problem with that. I don't really know why... But it took until probably, like 6to5, which became Babel, for me to realize that I haven't really written JavaScript in a long time... Like, straight JavaScript. It's all being compiled down to something, and it was okay for me to let go at that time.

**Kent C. Dodds:** Yeah. Actually, it's interesting you say that, because I saw all of the other frameworks as being even more not writing JavaScript... Because you spend a lot of your time writing template DSLs (domain-specific language) for Angular. And one of the things that I was really frustrated about is I've spent a lot of time in learning Angular... And very little of what I learned in the Angular world transferred to anything else. And that was really frustrating to me.

React has JSX, but I argue that you can use JSX in a day or less. It doesn't take that long to learn the nuances around JSX. And if you learn it the way that I teach it in Epic React, I feel like you can see the JavaScript behind the JSX, which makes you have a lot more power. Whereas with other frameworks, you're forced into learning their specific syntax; like, they need to invent syntax for if statements and different things like that... Whereas with React it's really just JavaScript once you figure out how JSX converts into JavaScript. None of the other frameworks has that. You can't convert their template DSL into JavaScript; that's just not a thing. So I really appreciated that about React...

And then as far as like why learn React over anything else - I mean, there are other great libraries and frameworks that are awesome. Vue and Svelte have already been mentioned, and Angular... There's still Ember, and stuff... React - it's really hard to determine popularity of a library. You can't look at downloads because there's caching, and CI is always downloading... You can't rely on any of that. But I think a pretty reasonable metric - the most reasonable that I can find - is the DevTools. So if somebody has that installed, they're more likely to actually be using it. And if you use that as the metric, then React is twice -- or React is more popular than all of the other frameworks combined.

So if what you're looking for is a job, then you're certain to find a job with Vue or Svelte, but you're going to have more options and have more choice with React. And then like all of the other things that fall out of being the most popular, having a very vibrant community -- I've got a lot of thoughts about why the React community has so much innovation going on versus the other frameworks; we can talk about that later if you want.

\[00:12:11.17\] But yeah, there's just so much that you get out of React just because it's popular. Now, whether it's technically better or technically more suited for different types of projects - that's honestly fairly subjective. I think that most frameworks can handle 99% of the use cases that a typical person has... So that comes down to a subjective argument. Hopefully, I gave a couple more objective reasons...

**Emma Bostian:** No, that's great... If you look at ease of learning, the community aspect that's backing it, the fact that it's a very innovative community - those three things, plus other factors, I think make this one of the most robust frameworks in the community... And I don't think it's going anywhere, it's only getting better. And to Ken's point, most job postings, if you look at frontend development jobs today, a lot of the newer companies are either already using React, or are switching/in the process of migrating their legacy codebase to React. So if you're looking for a job, it is definitely the most sought after framework on the resume.

However -- I got my React programming job only having known Vue. So I think if you've got the comparable experience, that's great. The caveat is - if you are only focused on learning the framework, make sure that you're not neglecting your foundational JavaScript skills. Kent mentioned earlier that one thing he loves about React is that you can still write JavaScript; it feels more like the foundational language, whereas other frameworks might abstract that away a little bit.

So make sure that when you are interviewing for jobs, that you are comfortable writing your plain JavaScript, because they shouldn't test you on your knowledge of React.

**Kent C. Dodds:** Yeah. Actually, on that note - when I was at PayPal, interviewing people a couple times a week, it felt like, what I typically would try to do is get them really comfortable and ask them what they're really good at; have them tell me "Okay, so what's the thing that you're very best at." And then I would ask them questions about that thing. And often, it was "I'm really good at React."

So I did ask quite a few questions about React, because that's what they told me they were really good at... And my reasoning there was if you say that this is the thing you're best at, then show me how good you are at it and I'll have a pretty good understanding of where you're at technically.

**Emma Bostian:** I love that. That's what we should be doing as interviewers, is playing to their strengths... Because their weaknesses can be nurtured and learned over time.

**Kent C. Dodds:** Yeah. So if somebody said "Well, I'm not super-great at React, but I'm super-good at Vue" -- nobody actually said that; I never had anybody do that. But what I would do is I would ask them "Okay, show me how to build this in Vue." It just gives me a better idea of - when they say "I'm really good at this", what does that mean. That's what I'm looking for.

**Emma Bostian:** Yeah. I remember having a conversation with Dan Abramov briefly when I was in London for my first conference, and he was saying that he did interview for the Facebook React core team, and he did not ask React questions when he was interviewing for the React core team. And just goes to show that -- I feel like in your case, Kent, that was done very well, where you were like "Okay, what are you good at? What do you enjoy?" and you play to that. But yeah, most employers should not be testing framework-specific knowledge, because again, a lot of it is also proprietary architecture, at least with React apps. You can know React, but when you come into these enterprise applications, it can be very jarring to see it in an enterprise codebase... And yeah, I mean - I would rather have a candidate who is great at foundational... Like, they understand scope, they understand asynchronous JavaScript, things of that nature.

**Nick Nisi:** \[00:15:54.08\] Yeah. And it seems like with React - modern React at least - it is kind of shying away from a lot of those "tougher parts" of it. And I'm specifically talking about classes. It kind of went away from that, and you don't have to worry about context nearly as much. The scope is still a big deal, obviously... And then just understanding the flow of like "This component function is going to get called over and over and over again." But I was going to ask Kent why you thought that React is so good at teaching the fundamentals of, or inspiring the use of the fundamental JavaScript. When that comes to my mind, it's things like using map inside of your JSX to map out, turn a property into a component. And then things like ternaries for the same type of thing.

**Emma Bostian:** Or array destructuring out of state. That was the first time I'd seen array destructuring used, and I was like "What the heck is this syntax?"

**Kent C. Dodds:** Yeah, I think that because JSX is converted directly to react.createElement or the JSX function now, and you can actually call that and get a return value, and that return value is interpretable; you understand what that is. It's called a fiber. They're just React elements... Or UI descriptors I think is what I've called it before, too. But that alone makes it so much more approachable to me, because I'm literally just dealing with objects. I'm creating a bunch of objects and I'm returning those objects in my functions. That's all it is. React's component is a function that returns a React element, which is an object. And it can't get simpler than that. I really like that.

Now, we could talk about useEffect, and idempotent, and all of these other things that can make React a little bit more tricky... But once you have the right mental model, then it is less tricky.

And what I've found is that for some of those things there are really low-level primitives upon which we can build really powerful abstractions, and we just use the abstractions. Most of my code actually - my production code - doesn't use useEffect very often. I'm using other abstractions that are doing that for me... Which is, I think, the way that it's supposed to be. When Dan introduced it, he said that hooks were the elements within an atom. And you don't typically interact with protons and electrons, you interact with the entire atom.

So I've found React to be really simple because it allows me to simply abstract away shared code, use that shared code, and then just return objects. And when we're interacting with objects, it becomes a simple matter of "I've got an array of things. I'm going to turn this array of strings or whatever it is into an array of objects." And that's something that anybody who's done JavaScript for a while should be able to do. Or if they can't do it now, then they can learn it, and then they'll know it. And that's what's cool about React, is the better I get at React, the better I get at JavaScript, and vice-versa. And that was not true when I was working with Angular. The better I got at Angular, I might get better at JavaScript, depending on what I was doing, but mostly I was just getting better at Angular... And that was frustrating, when I moved on from Angular to React. All of that stuff that I'd learned - it's gone. And I can't even remember it now, so it literally is gone... \[laughter\]

**Emma Bostian:** Yeah. I'm kind of curious - when y'all were learning, did you encounter anything that was really difficult for you to wrap your mind around? Because I had been coding React for a year and a half, two years by the time Hooks came out, and I remember some of these hooks just threw me for a loop. UseContext was very confusing to me. If you don't work in enterprise applications, or very large-scale data-driven apps, you don't really come into this hook often... Or - I'm trying to think of some of the other ones. UseMemo and useEffect, all of these were just really difficult -- useState was basically the only one that I was like "Oh, I know what it does."

**Nick Nisi:** \[00:19:46.21\] I think that a big part of that is just the naming of it. They're using -- I don't know for sure, but I assume that it's more like computer sciency terms for effect and context, and things like that... And when I see useEffect -- when I first saw that, I was like "Wow, what effect is this having? It seems so grandiose." It just seemed like it was really tough to get my head around it because of the terminology, but it actually is pretty simple once you really think about that.

**Kent C. Dodds:** Yeah. You know, I can actually tell you... So when I was first learning React, we didn't even have classes. It was createClass, and all of that; and I think it was the same for both of you. So coming into Hooks, it took me a little bit of time to be like "Okay, this is kind of interesting." A little time as in like minutes. Initially, I was like "I'm not sure about this", then "Oh my gosh, I love this." And the biggest thing for me was getting rid of class components and shareability of code... Because with class components, we always talk about the separation of concerns and how important that is in maintainable architecture... And one of the things I loved about React was that it embraced the fact that HTML, CSS and JavaScript are part of a single concern. Those aren't separate concerns. Those are separate technologies when combined, to create a single concern, of your button component, or your accordeon, or whatever it is.

But within that individual component there could be multiple concerns in there. One part of it is updating the document title to say how many unread messages you have, and the other one is subscribing to Firebase to get those messages... And it's spread between these lifecycles. And so with Hooks, I was able to keep those concerns together within the component; and if it was a reusable bit, then it's just a matter of pulling that out and sticking it into a function. It's just JavaScript at that point. You're just moving stuff around, just like you do with JavaScript.

Anyway, I didn't have a huge problem with jumping into Hooks, but I know a lot of people switching from classes to hooks was a bit of a big jump. But one of the things that I just wanted to mention too, like some of the hard parts of learning React - I can tell you based on the number of people who are reading my blog posts what are the things people have the most trouble with... \[laughs\] Because I don't track Google Analytics on my blog, but I do have Netlify Analytics, and that gets when people land on my blog... And the number one blog post right now over the last month is "How to use React context effectively." That, Emma, speaks to you... And then useMemo and useCallback are the next. And that one actually has been really popular for years. Yeah, those two are tricky. They're absolutely tricky.

**Emma Bostian:** Yeah.

**Kent C. Dodds:** And then I've got a couple of things about testing... And state management is another thing that people struggle with quite a bit... And then useEffect and useLayoutEffect are pretty big ones, too. So I would say that there are definitely hard parts about learning React, and it's very possible that it's harder to learn React than it is to learn other frameworks... But I just come back again to - I feel like React is simple, and it's easier to build a simple application with a simple framework than it is to build a simple application with a complicated one.

**Nick Nisi:** As a sidenote, I think I probably make up 50% of the traffic on your "Common mistakes with React Testing Library." \[laughter\] I think I link to that in almost every pull request that I'm doing.

**Emma Bostian:** Yeah. We're using React Testing Library too, and I'm like "Oh, gotta go see Kent again..."

**Kent C. Dodds:** Yeah. Actually, Nick, I thought about this the other day... If other people find themselves in this situation where they're linking to my blog posts on pull requests, a good way to stop doing that is to talk to your manager about getting your team licensed to epicreact.dev. Everybody can go through that, and you're all on the same page, and then you don't have to link to the blog post all the time.

**Nick Nisi:** Absolutely.

**Emma Bostian:** Indeed.

**Kent C. Dodds:** There's a little self-plug.

**Emma Bostian:** And we're gonna link Kent's course in the notes and we'll talk about it a little bit at the end as well... But we're gonna take a quick break, and when we come back we're gonna talk about some of the core React concepts, and learn a little bit more the difference between hooks and class components.

**Break**: \[00:23:45.24\]

**Emma Bostian:** Okay, so we talked quite a bit about hooks in the first segment, but I wanna talk a little bit about hooks versus class components... Because when I was learning React, it was very much about class components. And my biggest question is "What benefits do hooks have over class components, and should newcomers to React even bother learning class components anymore?" Those are loaded questions, and I know that.

**Kent C. Dodds:** Everybody's throwing opinions about this, but I'll wait till next Nick shares his.

**Nick Nisi:** I'm trying to think... Like, from my own personal standpoint, I would rather work on projects that are completely using functional components and hooks. I'm trying to think if there is an actual valid reason to use class-based. Kent, you probably know more...

**Kent C. Dodds:** Yeah, okay. So... Y'all ready for this?

**Emma Bostian:** Here we go...! \[laughter\]

**Kent C. Dodds:** So I actually have a talk that you can find on my talks web page, that explains why React hooks are so useful, and what the benefits of hooks over class components are. And I'll just mention really quickly... So first is the JavaScript classes have a number of challenges with them, especially when we're talking about React... So yeah, I explain a couple of the gotchas when you're working with -- I remember when I was teaching React class components, the first half of the workshop was teaching about classes, and the nuances there... So it's great we don't have to worry about classes.

The other thing is lifecycles. The mental model for thinking about the lifecycle of a component I think is wrong... And then logic reuse. And we had render props, and higher-order components, and each one of those had problems with those. So we've eliminated those problems by using hooks. And code reuse for me is the biggest one. I love being able to say "Oh, this is a really interesting set of hooks that I'm using here. I wanna use that over here", and I literally just make a function out of it and that's it.

Sometimes it can be a little bit more challenging when we're talking about different variables that need to be in scope and stuff like that, but most of the time it's a pretty simple refactor.

Anyway, on the "Should you bother to learn class components?" About every six months I will tweet a poll to ask people "What percentage of your time is spent working with hooks vs. classes?" Just as I predicted, over time it's more and more and more on 0% working with classes. "I'm just spending all my time with hooks." It's been almost three years since Hooks was announced, so this is not a surprise... So as soon as Hooks was released officially, I completely stopped teaching classes. I haven't taught anybody how to use a React class component for 2,5 years now... And that has proved to work out really nicely.

\[00:27:56.13\] The thing is that if you really get into a codebase where all of a sudden now you need to use a class, then great. Go look up the bagillion articles about how to write class components with React. I've got a course on Egghead that's still available. It's the "Original Beginner's Guide to React", and you can learn everything you need to know about writing class components... Or you could watch my other course on Egghead that shows you how to refactor a class component to a function component with Hooks, which is what you should be doing whenever you run into a class component anyway.

So I suggest learn on-demand. When you need to learn it, then go ahead and learn it. The only thing that you can't do with hooks that you can do with classes is error boundaries, and I wouldn't bother writing one of those anyway, because it's on Npm; it's called React Error Boundary. I'm the maintainer of that actually, so... \[laughter\] So I do write class components, but... That's literally the only one that you need in your app. You don't need class components at all.

**Emma Bostian:** It seems like we chose the right person to bring on and talk about React today...

**Kent C. Dodds:** I have opinions, sorry... \[laughs\]

**Emma Bostian:** No, no, it's good, because it's helpful to inform newcomers' opinions when we have someone who's worked so intimately with React. And actually, I fully agree with your explanation. It's basically like - you will likely encounter class components if you're working in a "legacy" React codebase, so something older than three years... But unless you're doing that, you really don't need it. So yeah, that was a really great explanation.

One thing that really tripped me up was this paradigm of what a hook actually is, when I first joined... And I remember, I got to read the Hooks specification before it was published, and I read through it and I'm like "Okay, cool. Sounds nice", and I didn't fully understand the impact this was going to have. But if you were to try to explain what a hook is exactly... I know there are a bunch of different ones that do different things, but what exactly is a hook?

**Kent C. Dodds:** So I've got just the best resource for people who want to get a deep answer to this question, and it is from Shawn Wang, also known as @swyx. He has a blog post and a talk titled "Getting closure on React Hooks", where he builds React hooks from scratch. He builds a useState hook. It's phenomenal. It's a really great resource. I would write it, except he already did, so I won't even bother, because it's just that good. So I would recommend going into that.

It's difficult to describe what he does in audio format, so I don't think I'll try... But basically -- yeah, I guess I will try it. React keeps a record of every time you call a React hook. So when it's rendering your function component, because your function component is synchronous, it can do a little bit of setup work before calling your function, it'll call your function and then do some work after. So it knows what hooks you called when it calls your function, and it just keeps track of those. Every time it calls your function again, it's going to give you the right return values based on the hooks that were called.

This comes with a couple of trade-offs, which is where the rules of hooks come from. You can't conditionally call hooks and stuff like that, because it needs to be able to track those. But anyway, if you wanna dive a little deeper into that, Swyx's blog post about this and talk are just phenomenal, and I recommend people look at that.

**Emma Bostian:** Absolutely. All of this is gonna be -- these are gonna be the largest show notes we ever create. I love it. One question that I still see to this day is "Does useState or do hooks replace Redux?", especially because there's the useReducer hook, and it's like "Okay, do I even need Redux anymore?" Because I know at Spotify we're in the process of ripping out Redux; that's what I was doing today, I was replacing Redux with hooks today. But can we fully replace Redux with hooks?

**Nick Nisi:** This is a question I have too, because we don't use Redux, but I've used the useReducer hook minimally, and from that little bit of time that I've spent with it, it does seem like it... But I'd love to know your thoughts...

**Kent C. Dodds:** Yeah, I've got lots of opinions on this, too.

**Emma Bostian:** Let's hear it!

**Kent C. Dodds:** \[00:31:50.23\] I never liked Redux. I tried it once, and I used it in a production application at PayPal, and what I've found was when I was working with Redux I spent so much time switching tabs to different files. I had 30 files open when editing any single feature. Now, there's the Redux Toolkit, which is a drastically improved situation... And things with Redux have improved even with hooks - there's some nice hooks there - although you miss out on some of the optimization that Redux does for you (performance optimizations) when you use those hooks, until we get the useMutableSource( ), if that's what it ends up being called... I think there's actually useContextSelector, or something - that one's gonna be huge; that will be awesome when we get something like that.

So there's some performance optimizations you miss out on if you're using the Redux hooks right now. But yeah, I just didn't like having to open so many files to do anything. And it's not just like the "Oh, this is annoying. I have to open so many files." It's the context-switching, and it's the "I'm touching code that is totally unrelated to the feature that I'm working on." And that's dangerous anytime you do that; ask anybody who's done regular, old CSS and they'll tell you that "I don't know if it's okay for me to change this, so I'm gonna duplicate it", and now we've got -- at PayPal (this is not made up) we had 90% unused CSS on the project I was using, because everybody was afraid to touch the old stuff, so we just duplicated something new and called it something else. And you might just say that we're bad at CSS, but maybe CSS was bad at us, I don't know... \[laughter\]

**Emma Bostian:** Well, that's why StyledComponents and CSS-in-JS was so pivotal; it was like "Oh, hey, we can actually encapsulate all of this logic inside the component that it's touching and don't have to worry about bleeding code anymore." It's so much easier to delete things, and add things, and all of those things.

**Kent C. Dodds:** Yeah, you're precisely right. That was the problem that those things were made to solve. And I'd love to talk about how Remix changes the game with CSS-in-JS. I don't use CSS-in-JS anymore because of Remix, because there's some really interesting things that Remix does to make it --

**Emma Bostian:** I don't even know what that is, to be honest...

**Kent C. Dodds:** Yeah, well let's talk about it later, for sure...

**Emma Bostian:** Yeah, give us a SparkNotes edition.

**Kent C. Dodds:** ...because it is great. But yeah, you're absolutely right. And that's one of the things that I loved about React, was like - okay, so what is the concern? The concern is the component, and a component isn't complete without all three, JavaScript, HTML and CSS. And CSS-in-JS made that possible.

The problem with Redux in that vein is it wasn't Redux by itself. In fact, I have a blog post on epicreact.dev/articles page that is "My state management mistake." So at PayPal I switched over to another project, it was brand new, fresh project, and we decided to go with a different state management library solution because I didn't like Redux at all. It was a unilateral decision. We all kind of decided. So we ended up in pretty much just the same hairy mess, and ultimately, the problem wasn't Redux, it was storing so much of our state globally, and also treating our server cache the same as we treat our UI state, and mixing those two concepts just made things really difficult, and you end up having to make changes to files that are far away from what you're actually working on, and you could end up breaking something else inadvertently.

So this is why I'm so excited about React Query, although - again, Remix kind of eliminates this problem as well, so I don't need to use React Query when I'm using Remix. But if I'm not using Remix, I'm absolutely gonna be using React Query, because it takes all of my server cache stuff, puts it in a really nice abstraction, and then all I have left is UI state, and I don't need Redux for that. I collocate it with useState, pass props a couple levels, I'll compose things properly so I don't have to pass props a couple levels, or if it really just becomes a bit of a pain to pass things around, then I reach for context, and context is good enough that I don't need all the extra bells and whistles that Redux has to offer.

**Nick Nisi:** I'm right there with you.

**Emma Bostian:** Indeed. I've found Redux pretty confusing to learn.

**Nick Nisi:** \[00:36:03.17\] I really like React Query. It's made state management simpler, in just the way that I'm thinking about it... And as a little plug for us, we did talk to Tanner Linsley about React Query on episode 179, so we'll have that in the show notes.

**Kent C. Dodds:** I've listened to that one, it was great.

**Emma Bostian:** Nice. So - okay, we've talked about hooks theoretically, but let's just quickly go through what some of these are... Because you know, we might have some new listeners and I think it's really beneficial to just kind of run through what a few of these do, the ones that you're gonna see the most often. In my opinion, useState is probably the one that's used the most often. The syntax was, again, very confusing to me when I first saw it, because I had not seen array destructuring in like a proper, practical way... So you'll see `const` and then you got two square brackets and inside you've got two variable names, most likely. Do you always need to put the setter and the state variable? You need both, right?

**Kent C. Dodds:** Yeah, if you wanna have a value that you can change, then need to get the value and then the way to change it.

**Emma Bostian:** Yeah...

**Kent C. Dodds:** There are use cases for getting a value that you can't change, just so that you keep that stable initial value... But yeah, most of the time you'll want both.

**Emma Bostian:** Right. Okay, cool. So usually you've got the first variable, and the square brackets is gonna be the piece of stage; so let's say we've got color. Let's say we're building a T-shirt application and we need to keep track of the color options that are available, the selected color that the customer is currently looking at. So we've got color, and then the updater function is setColor. That's kind of like the -- I don't think it's a rule, but it's the... What's the word I'm looking for?

**Kent C. Dodds:** Convention.

**Emma Bostian:** Convention, exactly. The convention is named set, and then whenever the state variable is called... And then you've got this =useState, and inside the parentheses you've got your default state value for that. So maybe we wanna default to a color of blue, or a string of blue. So yeah, this just keeps track of the state for different pieces, whether that's like your sidebar is expanded or collapsed, or your modal is visible or hidden, things of that nature.

What about useEffect? We had mentioned this earlier, but why would you use useEffect?

**Kent C. Dodds:** Well, I think Nick mentioned earlier that useEffect was a confusing name, and I tend to agree. The challenge is -- a better name might be useSideEffect. So they just saved us four characters every time we use this, I guess... \[laughter\] But yeah, useEffect basically -- I've found that in teaching people React with hooks, the people who had the most trouble were the ones who had actually used React with class components before... Because they looked at useEffect and they said "Oh, here's \[unintelligible 00:38:36.15\]." And then all of the code that you had in those lifecycles is the code that you're gonna put into useEffect, but the mental model for it is completely different.

And so with hooks, instead of thinking about lifecycles and when this component mounts or unmounts, in fact you shouldn't even think about mounting or unmounting when you're working with React and with hooks. What you should be thinking about is with useEffect the objective is I've got some state inside of my application, like the modal is open, or whatever it is, and then I've got some state in the rest of the world that's not in my application. I've got a database, I've got local storage, I've got the document title. This state lives outside of your application. And so if we are looking at a list of messages or how many shirts you have in your cart, and you wanna update the document title to say how many you've got in the cart, then that document title is outside of your application; it's a different thing. So to keep that thing up to date, that is a side effect to update that value imperatively. You say documentTitle= whatever you want it to be.

So if you update your UI state that's managed by React, but you don't update the document title, then you're out of sync, so you end up with the stale state of the world. So useEffect's job is to synchronize the state of the world with the state of your application. That's all that it does.

\[00:40:03.20\] The entire objective of useEffect is to synchronize the state of the world with the state of your application. If you enter a chat room, the state of the world is off, because you're not subscribed to the messages from that chat room, so you're gonna use useEffect to subscribe to those messages, and as a message comes in, you can update the state to synchronize the state of your app back with the state of the rest of the world. So that's the job, is to just keep things in sync between your app and the rest of the world, everything outside your app.

**Emma Bostian:** Have you ever considered making a React course? Because you seem like a good teacher.

**Kent C. Dodds:** \[laughs\] Well, that's very nice of you.

**Emma Bostian:** That was a really beautiful explanation. I never thought about it like that.

**Kent C. Dodds:** And actually - sorry to interrupt you - this is why the dependency array is so important. I think it's important to talk about that. By default, useEffect is going to re-run every time the component is rerendered... Which is good, because - let's say that we're updating the document title; all we care about is how many shirts are in the cart, so we don't need it to re-run every time the user opens and closes this modal, or something... But it's not bad to have it re-run and update the document title to just the same thing. It's not incorrect to do that. So I'm glad that that's the default. But there are other things that we do, like make requests and stuff that would probably not be a good thing to do unnecessarily... So we have this dependency array.

When we're talking about synchronizing the state of the world to the state of our app, we need to tell React what are the things that, if changed, will cause this to be out of sync. So that would be the short count, or the number of shirts in our cart. So that's what we put in the dependency array. And if we say "Oh, you know what - I only care about this happening on mount", or something like that, and you put your open and close brackets as the dependency array there, that's fine; you'll have to ignore the ESLint rule, which you probably should have enabled on your project - you'll have to do that, but I always say doing that is turning on bug mode in your application... Because you are absolutely going to run into bugs by doing that... Because you're effectively telling React "There's no way for the state of the world to fall out of sync with the state of the app, so don't bother running this again", where that's actually not the case.

**Emma Bostian:** That's beautiful. I love that. Wonderful. Well, Nick, did you have something to add to that?

**Nick Nisi:** Yeah, going on a little bit of an aside on hooks - I have an architectural question for you, Kent.

**Kent C. Dodds:** Sure.

**Nick Nisi:** When it comes to hooks and setting all of this up, do you tend to just have like a bunch of useEffects? You said you don't use that too much, but - like, have a lot of hook calls in your component, or do you try and abstract those into a custom hook and just call that?

**Kent C. Dodds:** Yeah, I'm so glad you asked this question... I see React Components as basically exactly the same as I see regular functions. So whether I'm writing React code or just some server Node stuff, or a CLI, or whatever - it's all the same to me. So in general -- I have this blog post called "AHA programming", which Cher Scarlett came up with that acronym; it's really great... It's "Avoid Hasty Abstractions." The idea is you want to avoid abstracting things too early, because the tendency is to add to an existing abstraction and re-use it, and then that abstraction just gets really complicated, where it would have been easier just to duplicate, or maybe have multiple abstractions.

So anyway, I tend to try to collocate as much as I can, and I'll stuff as much as I can stand in a component. People come up with all these rules about, you know, "If the component is a hundred lines long, then break it out." I actually have another blog post about when to break up a component into multiple components. Just because a component is 100 lines long does not mean it needs to be broken out, it doesn't mean that it's complicated at all. What complicates things is when you have lots of mixed concerns, and that can make things more complicated.

So when I start getting into that sort of area, that's when I'll start thinking about "Okay, let's make a hook out of this" or sometimes I'll just stick a comment above this section of hooks and say "This section of hooks is doing this." Because the fact is, as soon as you move code into another function, you instantly increase the complexity of that. That's just the way that that works. So you wanna avoid doing that by just putting things in line.

\[00:44:11.07\] So I am super-opposed to just arbitrarily moving the raw hooks into custom hooks, because you end up making things more complex just by default, by doing that... But I'm not opposed to making custom hooks, even if they're not reused. It just kind of depends on how complex that component is getting, just by nature of the various concerns that are mixed.

**Emma Bostian:** Nice.

**Nick Nisi:** Great insight. I agree with that.

**Emma Bostian:** Yeah, that's awesome. We're gonna take a quick break, and when we come back, we're gonna continue this custom hook conversation, to learn a little bit more about why you would create a custom hook and how you do so.

**Break**: \[00:44:52.12\]

**Emma Bostian:** Okay, so before the break we were talking about custom hooks... I wanna ask you, Kent, what is a custom hook, and what kinds of things work well for custom hooks?

**Kent C. Dodds:** Like I said, this is one of the things I loved about custom hooks when they were introduced... A custom hook, this is the definition - it's a function that calls another hook. That's it. That's what a custom hook is. So the hook that it calls could either be a react.useState, or it could be another hook, like useQuery, or something like that. So it doesn't matter what kind of hook it is, whether it's a custom hook or a built-in one, but it's actually -- it's very analogous to a custom component. A function component is just a function that returns a React element. A custom hook is a function that calls other hooks and that's it.

So why would you create one? The biggest and most important use case is for code reuse. So let's say that you wanted to synchronize the document title - then that's gonna be a useEffect, and the useEffect will have a dependency on whatever you want the title to be, and then inside the useEffect you'll say documentTitle = whatever that value should be. So that's a pretty simple thing... I probably wouldn't bother abstracting that one, but for our purposes we'll say "We wanna reuse this in another part of our codebase", so we're gonna just literally make a function called `useUpdateDocumentTitle` it accepts a single parameter that is what the title should be, that is a string, and then you move your useEffect into that function (you don't have to even return anything) and then you call that function inside of its original place, and you pass in what the title should be, and now you can reuse that all over the place, and update the title willy-nilly, however you want. That's the primary use case for hooks.

\[00:48:09.16\] The really cool thing about this is because it's a pretty low-level primitive, it works really well. So I think the best example of custom hooks actually comes from Tanner Linsley. He has just phenomenal libraries that use custom hooks. His React Virtual and React Table, and React Query - all of these things just do a really great job of abstracting things away into a custom hook that you simply call in your function component, and sometimes you'll get stuff back... Yeah, it's really powerful.

And actually, Tanner has a talk that he gave at JS Hawaii, that did a really good job of explaining the power of custom hooks too, that I recommend people go look.

**Emma Bostian:** That's wonderful. Yeah, at Spotify we have a ton of custom hooks, because we've got a huge application... But one of them is about using the color extraction. If you ever create a playlist, you'll know that the entity header, the playlist header - the color changes depending upon if you have custom artwork for your playlist title, or if you just have four songs, it'll do a mosaic, and it'll extract the colors out... We've got a custom hook to do that, which is really cool.

And you had mentioned before the use convention - that is one of the conventions of a custom hook, it has to be called useSomething, right?

**Kent C. Dodds:** Yeah, yeah. And that convention is important, because the React ESLint plugin relies on that convention to do some of its rules of hooks checking, and stuff... But the convention doesn't matter, and you literally can call it anything... Because remember, all that is happening is React sets up some stuff before it calls your function, then it calls your function, which is synchronous, so whether it's custom hooks or not, they're all gonna get called at that time, and then it knows which hooks were called. So that's why this works, that's why it's so brilliant, is because -- it doesn't matter how deep in the call stack JavaScript has to go to call those hooks, eventually they're all called, so React can keep track of them... And that's why it works to just like "Oh, I wanna make this custom - I'll just literally do the same thing that I do in any other JavaScript when I wanna reuse code." And I love that; that part of React Hooks is just brilliant.

**Nick Nisi:** And talking about the usePrefix on there, I just love -- this is the perfect example of custom ESLint rules, and they are super-helpful, because as soon as it can find a function that you're calling that starts with use, it knows that it's a hook, and it will make sure that you're not conditionally calling it if you have these ESLint rules set up. And if you're using a useEffect, it'll tell you exactly what you need to pass in to the second argument in the array, to make sure that it's set up properly. It's just a fantastic use ESLint in that custom way.

**Kent C. Dodds:** Yeah. Honestly, they nailed it too, because -- they were so lucky that that wasn't already a convention for something else. We never call our functions "useWhatever", so yeah they lucked out... And honestly, it makes sense to me that that would be the convention... So yeah, it's cool.

**Emma Bostian:** That's awesome. I would like to switch gears if that's cool with y'all and talk about something that is either going to excite people, or make them cry... And that is React with TypeScript.

**Kent C. Dodds:** Wooh! I'm excited!

**Emma Bostian:** Yeah, I was definitely a slow on-boarder to TypeScript, because I was so scarred by Java, which is a strongly-typed language... And I was like "I love that JavaScript is flexible", but I would spend hours trying to debug these issues that I could only find at compile-time/runtime/whatever. React with TypeScript - should I use TypeScript with React?

**Nick Nisi:** \[whispering\] Yes...

**Kent C. Dodds:** Yes.

**Emma Bostian:** Yeah, I think so too. I've used it -- well, we use it as Spotify, we used it at my previous company as well, and it just saves your butt if you have large applications that deal with -- or very complex object structures. Let's just take an example, like a Spotify playlist. You've got a list of songs. Every song has an artist, it has a duration, it has an album, it links to these different artist pages, it can feature people, playlists have names, and custom cover art... And the shape of these objects are so intensely complex that it's super-easy to forget different pieces of what's required when using them...

\[00:52:28.04\] So TypeScript has saved my butt so many times with creating the shape of these different objects. You know, it has autocompletion, and it helps me avoid a lot of bugs that otherwise I would spend hours looking for the solution to.

**Nick Nisi:** Kind of going back to class-based -- or I don't know if it's exactly class-based React, but when I first got into React, one thing that I found super-annoying was I was creating my class, and I think I had like a static props property on there, that was everything listed out, and then I had all of that duplicated again in the prop types... And that was just so much code for not very much. A simple TypeScript interface kind of replaced it all. And it's of course not doing any runtime type checking, but it's really good enough for what we need.

**Kent C. Dodds:** Yeah, if you want runtime type checking, then that's what we have with prop types, right? People will often ask me "Does TypeScript replace prop types?" and most of the time people will just say yes, but there is nuance to that. With prop types you did get runtime type checking, but with prop types you had to run the code to get the warning, whereas with TypeScript you don't have to run the code at all. You can just get the warning right in your editor.

So I think it's a fair trade as long as you do a good job of typing at the edges, where you're reading things from local storage, or getting things from the API. As long as you are confident with those typings, then you're just way better off with TypeScript.

I used Flowtype before using TypeScript. We were on Flow at PayPal and then we migrated to TypeScript... Yeah, using a typed language, or type checking - I wouldn't do it any other way. It's just phenomenally better.

**Nick Nisi:** I also just wanna give props to the TypeScript team for so quickly jumping on and supporting things like JSX with TypeScript. They even changed the casting. It used to be the open angle brackets for casting, and now you can do "as" whatever. That was just immediate so that you wouldn't get confusing bracket syntax inside of your JSX.

**Kent C. Dodds:** Right.

**Emma Bostian:** I liked that sneaky little pun... You "wanna give props" to the team... \[laughter\] Cute.

**Nick Nisi:** Totally intentional.

**Emma Bostian:** I know. Dad joke radar has gone off. But I will say, if you are new to the React ecosystem and you're learning to get a job or whatnot, I would recommend not learning TypeScript right away. I think it's a lot of overhead to learn at once.

I think prop types is a really great introduction to a strongly-typed version of React without all the nuance of learning union, and intersection, and all these other really complex TypeScript concepts that are definitely more, I would say -- I don't know what the right term is. They remind me more of Java, or other strongly-typed languages than prop types. Prop types is definitely a nicer introduction to that concept.

So I'm gonna switch gears once more, because we're kind of nearing the end of the show, but I wanted to come back to something that you said, Kent, which was that you feel the React community is the most innovative. I would love to hear your thoughts on that.

**Kent C. Dodds:** Yeah, I definitely have thoughts on this... And I don't know, they could be controversial, but the way that I see it is React choosing to be a very specific slice of our stack ended up forcing the React community to be innovative... And I'll explain what I mean. So if we're in the Angular -- I'm not gonna speak for Vue, because I was never a part of that community, but I was a part of the Angular community, and I can say that if somebody came up with a really neat animation... Sorry, let me say that differently. They have an animation library built in. They also have an HTTP library. So many things are just built into the framework, which is great. It means that I can install it, and I have all of the tools at my disposal to use for these different things that I need to do.

\[00:56:11.22\] But if those things don't satisfy my use case properly, or maybe I don't like the API, or it just doesn't fit into what I'm trying to accomplish - which always happens; we've all experienced this - we're using an abstraction and it's not quite working for what we want. So you have a couple of choices when you hit that. You're either going to work around it and just do some sort of weird workaround to make that work, or you're going to maybe file an issue and ask for somebody to fix this or change it, and potentially even make a pull request... You could potentially use Patch package and change it yourself, so you're basically vendoring the library and taking ownership over that code... Or you can write your own library and use that. Or just not use the abstraction at all. Or maybe find a different library. So you've got a couple options there...

When you have a built-in and blessed library that you're supposed to use for this particular solution, you're much more likely to work around it. You're just way more likely, especially when the built-in thing is built by a really smart team of developers who are working on it and they're getting paid to work on it, whatever it is - it's like the official, blessed thing. So you're way more likely to work around it, you might file an issue on it. However, with React you're using a library to do most things. So if that library doesn't satisfy you, then you can look for something else, because it's not the blessed thing, so you're not like "I have to use this thing. I'll go look for something else." And if you can't find it, then you're gonna build it. It's just, because of the way that React has structured things, where "We're just gonna focus on the core, and everybody else does everything else around us", it forces the users to innovate.

So rather than a team of really smart and awesome engineers who are trying to solve all the problems for all of the people, you instead just open it up to the entire world by accepting "We're not gonna be able to solve all of the problems for all the people, so you go solve your own problems. We'll solve this one." And for that reason, we see just a ton of innovation. Now, there are some libraries that kind of come out on top as like the natural... I don't know why anybody would use anything other than React Testing Library, for example, and React Router, the same thing. It's just kind of become the de facto standard. But I think that those only became what they are because of the innovation in the rest of the community. So that's one of the nice side effects.

Now, the bad side effects there is of course that you do have to innovate as a community. Luckily, if you're just getting into React now, you don't really have to worry about that too much, because so many of the common problems have been solved already, but you won't have to worry about like "Oh, there's this official, blessed thing. I'm just gonna work around it." Instead, you can innovate, and they give you all of the right hooks (no pun intended) into React, so that you can build your own abstractions for whatever you're trying to do.

**Nick Nisi:** Do you think that that's also possibly a detriment to it, just in that I'm over here writing my React, and you're over there writing your React, and if I come join your team, there's a pretty good chance that I don't know a lot of the stack that you're using... Whereas with something like Ember I just jump in and pretty much go.

**Kent C. Dodds:** Yeah, I've heard that a lot from people in the Ember community; they can just jump to a different project. And yeah, I don't really have too much to say about that. it is the trade-off, I think.

**Nick Nisi:** Yeah.

**Kent C. Dodds:** Personally, I prefer the trade-off that React has made.

**Nick Nisi:** Yeah, I agree. I like that phrasing of it. It's a trade-off, but overall, I think that's it's led to a lot of innovation, and things are kind of getting weeded out, and things are getting kind of promoted to being more top-tier, so that at least the concepts are being reused all over, which is really good.

**Emma Bostian:** Yeah. I think this community is definitely innovative, and I loved the explanations as to why, because I never really thought about that before... One thing I've said on our other podcasts about React - this goes for any popular tool though - it's popular for a reason, and that means the community is very large, which is wonderful, but just be aware if you're new to React that it can be intimidating to break in sometimes, because you do get a lot of people that are extremely knowledgeable, which is helpful, but also, you're gonna get people that potentially aren't as welcoming in the community.

\[01:00:25.26\] The gatekeeping aspect I felt so much more in the React community than I did in the Vue community, and it's most likely just that React was around a lot longer, and was more widely used... But yeah, just be aware, there are trade-offs, but I wouldn't leave this community for another framework at this point in time. The benefits outweigh the costs, in my opinion.

**Kent C. Dodds:** Yeah. It is a shame, there definitely is some gatekeeping and there are some toxic individuals in the community... And I don't wanna excuse that; we just need to improve. I think one aspect of that problem is because the React community is just so big, we get a percentage of the world as part of this community. Unfortunately, a percentage of the world are a bunch of jerks, and so they're jerks in every community, just for that reason; there just happen to be more in the React community, because the React community is bigger.

But again, I don't want to excuse the React community for that. And to be clear, for folks outside the React community, this is not a super-common problem, I think. For the most part, the React community is awesome...

**Emma Bostian:** Yeah, absolutely.

**Kent C. Dodds:** ...and I wouldn't say the React community is especially toxic... But there is some there. We'd love your help, to join our community and make it better. \[laughs\]

**Emma Bostian:** Yeah. And you know, it's teachers like you and other industry pioneers that are doing a really great work, and calling out the bad behavior and standing up... Dan Abramov has done a really great job on that front, making it known that we've got work to do... But all those steps are steps forward, and it's just that the jerks scream louder. But to Kent's point, it's in every community, so don't let that be a deterrent to you. There are more good eggs than bad.

Real quick - Nick, I think you had wanted to talk about Remix...

**Kent C. Dodds:** So Remix has eliminated so many of the problems that I've had with React, that I didn't realize were problems. That I just kind of had accepted. That's what hooks did for me, actually. I remember when I first saw Hooks, I told Ryan Florence "I feel like Hooks are making React better, when I thought React was as good as it could get." And Remix is kind of doing the same thing. So Remix is a framework that is built by Ryan Florence and Michael Jackson, the creators of React Router... And it is a phenomenal framework. It's still pre-release, but it is -- let me put it this way... I'm building a really awesome React application right now for my website, and my website is an actual application - there are user accounts, and a bunch of really cool things I'm adding to it. It's not just like a developer portfolio. And I have never been more productive working with React than having Remix.

I also have maybe two calls useState in the whole thing. I might have one useEffect in there... It's a real app. I'm not just throwing together some toy stuff. I'm also not using any CSS-in-JS. I can write regular CSS, because what remix does is it gives you nested routing, and it allows you to have a lot of control over what is on the document at any given time. So you're in charge of rendering the entire document. You are rendering the HTML element, from the top down.

Actually, when I said earlier that updating the document title is a side-effect, with Remix it doesn't have to be, because you actually render the document title. You could put that in state and just render that, which is really awesome. I have a class name on the HTML element that's actually in state... So it gives you control over the link tags that are on the page, the meta tags... You don't have to use something like React Helmet... And yeah, I could go on for way longer than we have. We've already probably talked too long... But if you haven't already looked at Remix, give it a really solid look, because it is -- it's changing the game, it really is... And I think that you should give it a solid look.

**Emma Bostian:** Absolutely. I love that.

**Kent C. Dodds:** \[01:04:12.23\] Oh, and -- sorry, I should add also... They are not paying me to say this, so there's no conflicts of interest here. People often will be like, "What are they paying you for that?" No, they're not. I just tell people what I'm excited about naturally, and I've never been more excited about Remix, or about building React applications since Remix came around.

**Nick Nisi:** One more thing I wanted to (I guess) kind of plug for you, is that Epic React course.

**Kent C. Dodds:** Yeah. Thanks. \[laughs\]

**Nick Nisi:** I will say, as a paying user of that, I used that to learn hooks and learn how to do more modern React, after doing a lot of class-based React before... And I will say also that your genius marketing of the podcast you did with Chantastic on that.

**Kent C. Dodds:** Oh, yeah...

**Nick Nisi:** I've listened to all of the episodes before I bought the course, and it was just phenomenal being able to go through that, hear about your career and your life, and what led you to create this course, and such. And then it was just a very effective course to get me up and running with React.

**Kent C. Dodds:** Thank you.

**Emma Bostian:** Yeah, our whole team bought it as Spotify, and we had an Epic React weekly meeting. Unfortunately, life gets crazy when you're working on building a Spotify desktop app, so we had to commence -- or not commence...? Pause...? English is hard for me... But yeah, I can attest to that, where your course is definitely the most comprehensive one for all things React. It's not just intro to hooks, it's from conception to deployment, including testing...

**Kent C. Dodds:** And performance... Yeah. Thank you. I'm glad that you mentioned that. And the podcast people can find that at epicreact.dev/podcasts. But yeah, I put a lot of stuff into this. I've been teaching React for a really long time, and it's a pretty big thing, so thank you for your kind words.

**Emma Bostian:** Of course. Well, we're really happy that you could join us today. It was such a pleasure to talk with you again. For those who don't know, Kent is like the nicest human. I met you the first time at All Things Open in Raleigh a couple of years ago, before the panoramic happened... And he literally invited me to his house in Utah, and his wonderful family made me waffles, and I got to play with his kids. So if you're in Utah, let Kent know. He'll invite you over. \[laughter\]

**Kent C. Dodds:** Yeah, that was great.

**Nick Nisi:** Before we go, I do want to bring up one quick announcement... Emma, this is your last show with us for a while.

**Emma Bostian:** It is my last show. I mean -- man, I've been on JS Party for a couple of years. It's been a while, so it's definitely bittersweet. I think I need to take time to focus on my mental and physical health... But yeah, it's definitely sad, because I have loved working with all of you for the past couple of years. But what an episode to go out on... I mean, man, it was such a good time talking...

**Kent C. Dodds:** I feel honored.

**Emma Bostian:** Yeah, absolutely.

**Nick Nisi:** I think I easily speak for the entire JS Party community that you are welcome back any time.

**Emma Bostian:** Thank you. Yeah, I'd love to take you up on that. Hopefully this is just like a sabbatical, and not like a "See you never" kind of a thing... \[laughter\] I'll still be dropping in the chats, don't you worry.

Alright, well thank you again to Kent for joining us... And we've got the world's largest show notes, full of amazing resources and humans for you to go check out... And with that, I hope you all listening have had a great day.

**Outro**: \[01:07:27.26\]

**Horse JS:** Are web apps fundamentally different from web sites?” I think y'all know what side I'm on.
