**Divya Sasidharan:** Hello, hello, to a new episode of JS Party! Today on the panel we have with us Jerod Santo.

**Jerod Santo:** Hello, Divya! How are you?

**Divya Sasidharan:** Good. I'm really good. And I'm tuning in from Chicago. Today for our guest we have Guillermo Rauch from ZEIT. How's it going?

**Guillermo Rauch:** Thanks for having me. Very excited!

**Jerod Santo:** Happy to have you.

**Divya Sasidharan:** Yeah, we're super-psyched to speak to you, because there's lots of things that you're working on at ZEIT, and with Next, and we'd love to dig into a lot of that. I guess one of the things that we can start with is just like what's new, and what are you working on currently at ZEIT or with Next.

**Guillermo Rauch:** Yeah, timing is great, because we've been making a lot of announcements over the past few weeks, primarily around new capabilities in Next.js. One of them that I am personally really excited about and we've been working on for a while is the next generation (somewhat pun intended) static site generation support.

So Next.js had kind of a middle ground support for producing static pages in the past, but it was kind of an all or nothing system, you could run next build, and then next export, and then you would export a simplified version of your website that was fully static, and it required quite a bit of config, and it had some trade-offs... And what's been super-interesting about Next.js is that it's become a hybrid framework, where a lot of the flexibility that comes from using it is because you can make decisions on a per-page basis.

\[04:19\] So with the new static site generation support we basically are giving people two methods - one called getStaticProps, which is an alternative to getInitialProps, which will be executed at build time, and therefore producing static HTML... And then getStaticPaths, which kind of goes hand-in-hand with a feature that we added a while back, which was dynamic path segments.

So for those of you that are familiar with Next.js, we've always had file system-based routing, where inside the pages directory you define your JS files, and then URLs basically become paths.

But then we introduced dynamic ones, so you can use bracket notation to say, for example, pages is `/blog/[slug].js` and that's a dynamic one. So in conjunction with getStaticProps, you get a new method called getStaticPaths, that allows you to basically say to Next.js "Well, there is 100 blog posts that I need to generate" or "There's 100 e-commerce items that I need to generate, and you're basically giving Next.js in this case the slug, and then Next.js basically does all the rest and it produces a site of the size that you want with regards to static site generation.

**Divya Sasidharan:** Cool. So that would reduce the build time overall, specifically if you were wanting to build pages on the fly... So you can have the benefit of pre-rendering, while also choosing--

**Guillermo Rauch:** Yes. More specifically, you are now able to say "Hey, these pages are definitely static. They'll never go through a server at all, they'll never even use serverless functions... They'll be purely static. And I wanna do this work ahead of time.

When I think about static site generation - there's lots and lots of benefits, but for the developer, one that's key is you kind of de-risk your project at build time. If you're producing 100 blog posts, and one of them you made the wrong assumption, for example, about the shape of the data that was being returned, and the HTML fails to be produced because JS throws, for example, then your entire project get blocked at the build pipeline, and it doesn't go out.

So there's this idea that by using static site generation you de-risk. So you de-risk from errors, which in my mental model that falls under availability. Whether you're online or offline. Further in the availability spectrum, the nice thing about static site generation is that if you've built them, then they can't possibly go offline, unless things go seriously wrong with the internet; generally, your database that generated those pages can go offline, your blog CMS backend can go offline, whatever, but your pages are still alive.

And then there's certainly a performance benefit. A helpful mental model that I've been using recently is what you're doing at build time would have happened eventually at runtime, and it would have hit your users. So I see it as timeline displacement. What would have happened later when you ship your website, when SSR kicks in, and a request is made to a database and whatever, there is time being spent there that in this case is happening at build time. So by the time your visitors come, not only is your website more likely to be available, it's also more performant.

**Divya Sasidharan:** Cool. So getStaticPaths is definitely creating those dynamic paths, so it does cache as well. So it does do the dynamic page generation, but it does utilize the cache as well?

**Guillermo Rauch:** \[08:10\] Right, exactly. Basically, it just outputs HTML. The important part here is that you might have hundreds of blog posts, thousands of blog posts, millions of blog posts... So getStaticPaths allows you, the developer, to decide which ones are the ones that I wanna generate at build time.

I think something that sets Next.js apart, and perhaps we're the first to do this, although I would have to do some peer review on this... But I'm pretty confident that we're the first to also let you grow that dataset at runtime, meaning that -- one of the limitations that ostensibly a static site generation has always had is, well, you can't generate two million pages. You're basically gonna have to make two million database calls, or headless CMS API calls at build time; even if you could, you might not really want to, because you enter this trade-off of like "Okay, for how long are we blocking the release to get that kind of de-risking and optimization that I mentioned earlier?" And most companies are not gonna want to wait for two million pages to be -- all the I/O, and all the network I/O, and so on.

Although that might continue to grow in the future, meaning that what we consider okay today may continue to grow in the future, as we become faster and faster at build time... But the reality is with the JAMstack model what we can do is we can generate for example 1,000 pages, our most popular ones, and then we can defer the rest at runtime. Next.js allows you to do this, because getStaticPaths will say "There's this thousand blog posts that I wanna generate", but then it generates optionally a skeleton as well. So if there is a new blog post later on, you're not gonna get a 404, you're not gonna have to rebuild your entire website. It kind of gives you this JAMstack model out of the box of like "Hey, some of my stuff is pre-rendered, and some of my stuff can be done fully dynamically later on."

**Divya Sasidharan:** Cool. I noticed yesterday that Tim opened the RFC for incremental site generation on Next. Is that similar to what you're talking about?

**Guillermo Rauch:** Yeah, so we designed this API for static site generation, first of all to give people this ergonomic benefit, as I mentioned, that they don't have to use next export anymore, and they can make these decisions in a very granular basis, they can do it on a per-page basis, they can decide how many "dynamic" pages they wanna generate... But also, we designed this with this idea in mind that we knew that everyone that has chosen Next.js has chosen it for its scalability. And we knew that we wanted to have this idea of incremental static site generation open. That's, for example, why we introduced that idea of the fallback.

When you go to a page that would be altogether new, and that was not know at build time, Next.js contemplates that case. So by using getStaticProps and getStaticPaths, you're basically 99% of the way in also getting the capabilities of incremental static site generation.

**Divya Sasidharan:** Right. Yeah, I actually think that's a really interesting approach, especially within the JAMstack model... A lot of the criticism tends to be that it's really fast, so and so, but the moment your site increases in the number of pages - if you're talking about thousands, or a million pages - the build time automatically increases exponentially, so that whenever you make one change or you're adding a new page, the entire site needs to rebuild...

**Guillermo Rauch:** Totally.

**Divya Sasidharan:** ...which can take anywhere from a couple of minutes to hours. And I think that's the general criticism that JAMstack gets a lot, just because people are like -- I mean, users get the benefit of a faster site, but you as the key stakeholder, the people building the site have to incur the cost of having to wait for the entire site to build and update.

**Guillermo Rauch:** \[12:13\] Totally. And I think what's been great about JAMstack, even prior to Next.js for example addressing this problem, is that you were still getting this very customer-friendly and end user-friendly benefits, which is why I think it's gained so much popularity... Because I've talked to people that have used very long build processes, and at the end of the day they were still happier relative to sometimes their website being down or being slow.

But it is true that it's a false dichotomy. I think JAMstack can't scale to manage millions of pages, and I think the right balance to strike here is that you can do some of the work at build time, and then you can defer some of the work at runtime. So it hasn't been an all-or-nothing kind of situation ever, but for example if you wanted to do this today, by hand, it would be a little bit difficult. You would have to use a static site generator, then you would have to generate a skeleton for the page -- let's say you're creating an e-commerce site, and your store has millions of products. So you would have to have the page with no data, and then you would have to write the code path for using the JAMstack to render on the client side, when that fallback kicks in.

But then the really cool thing that we are doing with Next.js is that if one of those pages gets produced on-demand, it's almost like it had been added to the build... So we are able to reuse the work that was incurred in capturing that longer tail.

Imagine that you generate 1,000 e-commerce products. Then the 1,001 gets dynamically-generated on demand, so you receive a skeleton, it gets populated etc. But then also, in this case this is done by the ZEITCDN automatically, but anyone that implements this Next.js capability gets it - we can also back-fill the cache. so the CDN gets a copy of that new product that we generated. So basically you're getting infinitely-scalable JAMstack.

From the perspective of the developer, the only two APIs that they need to implement are getStaticProps and getStaticPaths. So I'm really happy with how ergonomic this capability has ended up being.

**Divya Sasidharan:** Yeah. I actually really like that model of how to optimize for both - both the developer experience, as well as the user experience. One of the things that I heard specifically with this was an article - I think it was on CSS-Tricks - that Phil Hawksworth wrote, just about the whole trying to do... Because I think generally people think of JAMstack as prerendering everything, and I think that's where the criticism for build time comes into play... But I like the approach of prerendering as much as possible, because that's where the benefit of the speed comes in, and then almost having the --

**Guillermo Rauch:** And de-risking, by the way.

**Divya Sasidharan:** De-risking, for sure.

**Guillermo Rauch:** Yeah, because we've gotten so many comments on our platform of developers being happy that their build failed. It's kind of counter-intuitive. Maybe it was because they made a typo in the code, or something happened to go wrong with the network at that exact time... And they were like "Oh wow, this is so awesome. In an alternative universe my website would be down right now."

**Divya Sasidharan:** Oh definitely, yeah. And it's just a matter of prerender as much as possible, and then in the cases when you do update it, having that as the ability to almost -- it's sort of like serverless rendering. Because it's on the fly, you're essentially dynamically creating that, and in the background, without the user seeing, back-filling the cache, and making sure that things are up to date.

**Guillermo Rauch:** \[16:06\] And something that's really cool, that I think Phil does touch on in that article is that we still are as fast as possible from the edge every time you hit one of these pages... Because basically, what we give you is the page as if it was an SPA. We give you the shape, or the skeleton of the page that's missing. So your customer is never held up waiting for a page that doesn't load, that doesn't feel immediately responsive... Or even a page that could fail in a way that is not recoverable.

**Divya Sasidharan:** Oh, definitely.

**Guillermo Rauch:** One thing I love about JAMstack is as long as you downloaded the HTML and the JS, there is so much that you can do to make sure that that rendering is successful, that traditional server rendering has not been able to accomplish. A great example is retrying API calls, falling back to service workers... This is kind of the beauty of this model - you're not really trading off any of the benefits of JAMstack.

**Divya Sasidharan:** Definitely. And I think one thing worth nothing, which I think you mentioned a little bit, is that generally, whenever we talk about using serverless functions, there's always this general thing - in a lot of cases, when you have a site on a CDN that's super-close to the user, so you don't have as much latency, but the moment you include a serverless function, that might not necessarily be at that specific edge node in which you're serving your site...

**Guillermo Rauch:** Right, right.

**Divya Sasidharan:** ...so that can add lag time, which I think often people don't think about. They just assume everything is at the edge, which is not necessarily the case.

**Guillermo Rauch:** Totally.

**Divya Sasidharan:** But I think what could make this a lot faster is if you have that logic live on the CDN. Essentially, the edge logic - either it's a Cloudflare edge worker, or whatever that may be... So that you have the speed of the CDN, plus the ability to essentially serverlessly render as quickly as possible.

**Guillermo Rauch:** Totally. I think what Cloudflare is doing is really cool. We'll see how these technologies end up integrating... Because I think these benefits have to come to the developer in a way that's super-natural.

I think what's been interesting about serverless is we really need to hold the bar of the usability of all these tools - for JAMstacks, for serverless, for functions - with the same kind of super-easy adoption and development process that old-school monolithic apps had. So I think the instant that the developer has started worrying about "Oh, this should be in the worker, but this should be on the client... On what edge am I running?", things get really complicated. So I really agree with what you said.

I think we have to make it fast, but not let the developer fall for traps where like "Oh, my code is not running in the right place, and the database is slow, and therefore I'm hurting my end user", which again is why I love to prerender as much as possible... Because it kind of removes all that uncertainty.

**Divya Sasidharan:** Yeah. I think it's about making sure the mental model matches... I think this, again, is another thing around edge workers - you're like, at what point do you prerender, at what point do things live as an edge worker, and then with that, how much should you put in the edge worker, how much should the edge worker do?

**Guillermo Rauch:** Correct.

**Divya Sasidharan:** Because it's also like a different model of thinking about things. You're writing your application in Next, or whatever tool you're using, and then you're almost having to shift your mental model to look at another piece of tool.

**Guillermo Rauch:** To another spectrum of JS, correct.

**Divya Sasidharan:** Yeah.

**Guillermo Rauch:** You have to think about "Okay, this is the Next.js codebase, but wait - there's this other codebase, which is a worker codebase." So you have to be really clear, or make the abstraction work in such a way that you don't realize there is that edge code running.

But I'll add two more things that I think a lot about when I think about loading edge code... One of them is that loading code opens yourself back up to failure modes that are not as easy to anticipate, right?

**Divya Sasidharan:** \[20:13\] Yeah.

**Guillermo Rauch:** The most obvious and theoretical one is that a Turing-complete language like JS - we cannot decide ahead of time if the code is gonna halt or not. So you might deploy an edge worker that results for a certain subset of users into a deadlock, for example.

**Divya Sasidharan:** Yeah.

**Guillermo Rauch:** Whereas with pushing HTML to the edge, we've kind of removed that entire uncertainty. The other one is the time complexity. What I love about static files at the edge is you basically have constant time complexity. And with code - well, developers have to think about all their data structures, and allocating memory correctly, and what happens to time to first byte, if I have arbitrary code running at the edge?

And finally, there is the other one of like "Hey, am I handing errors correctly? Am I retrying correctly?" So edge code creates complexity. This is why for now we haven't really incorporated that into the model. What we're saying is Next.js will generate static pages, and then later on it can generate more static pages. The edge network basically only receives HTML JS and CSS, but I do think that there is a future where the developer can also run some just-in-time logic at the edge as well.

**Break:** \[21:48\]

**Jerod Santo:** I'd love to zoom out a little bit and talk about the industry trend toward JAMstack itself. I made a joke recently, I think on Changelog News, as I was linking to another CSS-Tricks article - how you can almost rename it JAMstack-Tricks at this point, because so much of CSS-Tricks is about the JAMstack. And then I started to get introspective and I was like "Wait a second, we've done Gatsby, and now Tom Preston-Werner with Redwood, and now Guillermo with Next, and it's like, maybe we need to be JAMstack Party instead of JS Party, because it's definitely a thing that's getting a lot of air time and thought time amongst developers.

**Guillermo Rauch:** Yeah, and I'll also add something really interesting to that. I do think that JAMstack is the way to make JS successful at scale. I've sometimes told my team internally that I personally always thought that Node.js was gonna go further as an industry trend; I thought it was gonna get much bigger, I thought it was gonna have much more enterprise success. But then I realized, thinking really deeply about the way that you use Node.js, what it constitutes a Node.js app. And it's understandable that it didn't get as big as we once hoped, because I think the execution model for JavaScript as running a monolithic server that has to be up and running continuously, that has to manage memory optimally, that has to be really optimal in terms of throughput and latency...

\[24:10\] I don't think JS is as -- I mean, it's great, don't get me wrong, but I actually think that JAMstack has picked up really the essence of where JS belongs, truly the good parts of JS... So much so that I think that JAMstack is superior to other programming models that use native programming languages. Because if you think about JAMstack and deploying code at the edge, for example, what better language could exist than a scripting language that compresses really well, that's very tiny, that can be minified, that can be iterated on very quickly, that can interact very quickly with new platform features, and browsers, and so on, and is all about being optimized for being loaded safely, securely and dynamically inside a browser sandbox. That is where JS belongs, where JAMstack has put it.

And then JAMstack has really also embraced serverless functions, and that's also a place where JS is shining relative to this, again, monolithic Node.js model. If you look at enterprises that adopted JS on the backend, the reality is that many of them ended up moving to Go, to Rust etc. But I do think that the serverless function model also makes Node.js and JS shine again, because it fixes a lot of the problems that JS has with managing concurrency, and scaling horizontally, and throughput. And if you have a memory leak, in some ways the old serverless functions also have your back.

So in terms what you've just said, like "Let's rename JS Party to JAMstack Party" - I mean, obviously, you're not gonna do it, and I love the name JS Party, but it does make sense that this is what we should all be rooting for, because it's gonna help make JS so successful for just about everyone in the world.

**Jerod Santo:** So JAMstack has a lot of roadbumps, things to get over. These are the things that we've been talking about in the first segment, like "How do we do these things well?", especially the problem of incremental builds, or not rebuilding the entire world, and these "developer experience at deploy time" is one of the big ones... From your perspective, what are its virtues?

You mentioned some in the first one, but I'd love for you to just highlight like "This is why JAMstack is worth all of the effort that we're going through." Because one of the things I say often is it sounds like we're jumping through a lot of hoops just to avoid some server-side rendering... And we are. That being said, I'm not against it. It just seems like "Wow, there's a lot of complexity to get around this other complexity", which at least was mentally straightforward of "I take in a request and I do some stuff, and then I respond with some HTML." So why is JAMstack worth all the effort?

**Guillermo Rauch:** I would say number one - and why I agree with you that it makes sense to go through any hurdle that it presents - is that it's the most user-centric technology that I can think of... Because it optimizes for your user, your customer, your buyer getting the information that they want (in the ideal case, again) prerendered and server directly from the edge... So never offline, always fast, always what they need.

It's also embraced a very rigorous testing methodology. A lot of people that are building in a JAMstack ecosystem, like Gatsby, Next.js, Netlify, Eleventy - they've all kind of embraced this performance-first mindset. You see it with -- we're always discussing Lighthouse, we're always discussing edge, we're always discussing CDN, we're talking about how much JS we're shipping... And this is why, again, it's so healthy for the ecosystem to go in this direction, because -- I don't think in the days of SSR... The user of SSR that went global - I think of WordPress, right? You would install it in Apache, you would set up PHP, and then you have your WordPress SSR. WordPress never really had the opportunity to optimize these two things. Availability was pretty bad; the error connecting to MySQL database, &lt;h1&gt; HTML kind of became synonymous with WordPress being stressed at scale...

**Jerod Santo:** \[28:23\] Right. The old Slashdot effect, that became the Digg effect, then it became the Hacker News effect...

**Guillermo Rauch:** Totally. \[laughter\]

**Jerod Santo:** "I got slashdotted!" That was the old saying.

**Guillermo Rauch:** And number two -- I don't know if you remember, but WordPress had this helper method called WPMQ script that would add JS libraries to your page... And it was being used basically with no limit. And if you inspect any WordPress page -- and again, in my mind this is all caused by the trend away from other languages and into JS, and the demand for JS increasing... You know, there were unlimited JS files being loaded into a WordPress template coming from dozens of different sources, some from a CDN, some from your own... The caching headers weren't being correctly configured, there was no bundling whatsoever... So each page inside of WordPress that you would go to, it loaded 10, 20, 30 from different origins, of different sizes. I would always inspect WordPress sites and find multiple copies of jQuery that were being MQed into the page from different plugins and themes.

**Jerod Santo:** Oh, yeah.

**Divya Sasidharan:** Yeah...

**Guillermo Rauch:** So JAMstack, if you think about it, we're saying "Well, we kind of know how to solve all the problems of APIs, editing data in a CMS..." We can even reuse WordPress as a headless CMS. JAMstack is saying "Okay, now let's focus on the user. Let's ship optimized JS, let's focus on that First Contentful Paint metric, let's focus on the time to interactive metric.

So really I think it is the culmination of a process that has been going on for decades now, of really understanding the web, what the web is best at, understanding where prerendering makes sense, where SPA type architectures make sense, and the community has now spent time building the infrastructure both for edge and framework to kind of give you this best practices in a box. That's in a nutshell. Adopting JAMstack today is as easy as executing Npx create-next-app. That's the world we're going.

So I do think, to your point, there are some challenges today in adopting JAMstack, but this is why we're building all these robust frameworks, so that you can get the all without thinking too much about it.

**Divya Sasidharan:** Yeah, I really like that definition of it. And I think Chris Coyier also has a talk where he talks about the -- I forget what the exact title is, but he just talks about the reign of the frontend developer, just gaining so much more control because the whole model of the JAMstack focuses more on the browser.

In the past, whenever we did web development, you had to split time between what the browser could do and what the server could do, because you're thinking about monolithic applications that were dynamically-rendered from the server... So there were different things and assumptions you had to make if you were dealing with the server or dealing with the browser... Because if things were being run server-side, you don't have access to a window, you don't have access to the DOM, or anything like that...

**Guillermo Rauch:** Totally.

**Divya Sasidharan:** But I think within the JAMstack model there's so much focus on just the experience of the user that you don't even have to split between what is possible from the server side, what is possible from the browser side, or the client side, because you're focusing so much on the client side... But at the same time, you're also trying really hard not to -- because there's so much criticism these days, particularly in performance, around "There's too much JavaScript. You're loading too much JavaScript." So the JAMstack model kind of pushes to be like "Is there a way that you can build websites where you're still using JavaScript, but you're prerendering, so you're not using a lot of JavaScript? You're using enough, that you just need."

**Guillermo Rauch:** Totally.

**Divya Sasidharan:** \[32:26\] And then if you need extra functionality that's tacked on, you would just throw that in a serverless function and invoke it when you need, rather that loading it client-side and having it run constantly.

**Guillermo Rauch:** And also, I think what's been important too is making sure that if you do need a function or a server, it's not blocking that delivery of that first interaction with the system... So the idea that there is an uncertainty of what happens and how long does this code take to execute - whether that happens upfront, or whether it happens later, I think makes a big difference.

In the case of prerendering, for example, I get the full content of what I'm interested in, whether it's product, or whether it's blog posts, marketing page, whatever it is... And then, as you said, more code can be executed later. But that code that gets executed later is not blocking my first interaction with the core functionality of the page.

So you're really optimizing for what the user is after. Think of the idea of getting the data that the user is searching for on a search engine and getting basically the performance of AMP, but without even necessarily needing to use AMP... And then having the full power of JS on top to do more stuff later on.

**Jerod Santo:** So it seems like if you consider a full-stack application - we used to have a very straight up divide between frontend and backend... It seems like in terms of a full-stack developer what's happening with JAMstack and modern JS practices is the frontend is kind of eating the backedn, so to speak. It's moving in that direction, versus the other way.

**Guillermo Rauch:** I would agree. I would certainly agree with that.

**Jerod Santo:** And especially when it comes to serverless functions... So you're empowering frontend developers to do more.

**Divya Sasidharan:** Completely.

**Jerod Santo:** Completely. But you still have the A in JAMstack. You still have the API aspect, and you still have to be able to construct an API to interact with the backend, with a database or a data store of some kind. I think one of the misconceptions about JAMstack is the A is always somebody else's code, like you're gonna be talking to some third-party API... And it seems like that because a lot of the companies that are promoting JAMstack - not just the clouds, so to speak, like ZEIT and Netlify, but a lot of the APIs as a service are like "And we're a part of your JAMstack because now here's your auth right here" or "Here's your image processing", like that's a third-party API. But I think in lots of cases you're writing your own APIs.

**Guillermo Rauch:** I do think that the truth is somewhere in the middle, because for example a lot of the functions that we write at ZEIT for core systems are acting as glue sometimes between -- they're not fully us. Think of it as like writing assembly code versus writing a high-level language. We're not necessarily always writing raw infrastructure inside those functions. We're sometimes maybe invoking a bunch of API calls to Stripe to perform some sort of billing-related task. So the A, arguably, the heavy-lifting of the A is being done by Stripe, and we're simply adding some more business logic on top.

Something that's really cool about functions and I think doesn't get discussed enough is that, for example with ZEIT functions, we allow you to say what region you wanna deploy them to, and we tell you "Well, this region maps to this AWS region, or it's close to this Google Cloud region..." So say that your API provider, in this case, let's say is Stripe; for your billing, charges, customers, whatever. And they're in U.S. East, in the Virginia data center or around there. If you deploy your function far away from Stripe, if you're making lots of API calls to Stripe to get a certain result, you're gonna see very bad latency.

\[36:29\] You're gonna see that your function takes multiple seconds to execute. However, if you deploy it right next to Stripe, it's basically like functions are literally augmenting the Stripe codebase, because you're literally deploying them to the same data center, and all of a sudden you go from like instead of a 90 millisecond roundtrip, you go to sub-millisecond, because it ends up being the same data center as the Stripe computers are in AWS.

So I see functions of this incredible, almost open plugin ecosystem for the world. I think longer-term we're gonna be writing functions that do very little in terms of, like I said, that low-level infrastructure stuff, and it's more like you're just gonna be invoking different API providers. It's happening a lot with databases. A lot of databases are moving to providing HTTP gateways for executing their payload... So it feels like when you're talking to Aurora MySQL in AWS, it feels like you're talking to just yet another RESTful API; only that it has more flexibility with regards to the queries that you send.

**Divya Sasidharan:** Yeah, I think that's really interesting. I would like to talk about one particular thing... So you've talked in various places, in various conferences, the concept of -- so serverless is really cool and really interesting, specifically edge functions, because it gives you the ability to offload logic that's otherwise server-side to something that runs a bit faster, that doesn't require you to pay for a server, and the uptime and all of that... But one of the downsides of using edge functions in serverless is that it's generally stateless, so you don't have the concept of a previous state... And I think you talked a little bit about this concept of stateful serverless, where you -- I think you demoed this Pokémon game, where you were showing...

**Guillermo Rauch:** \[laughs\] Yeah.

**Divya Sasidharan:** That was really cool. Can you speak more to the whole concept of how stateful serverless works?

**Guillermo Rauch:** So the reality of why I think we're gonna see a lot of functions that call to other infrastructure is that functions today are a little bit more limited than servers in terms of their ability to, for example, preserve a cache in process.

A great example is Discord recently wrote about how they maintain these very highly-optimized in-memory data structures to maintain the real-time state of a certain room, of the connection state of the people that are chatting inside Discord... And a lot of the optimizations that they're making and a lot of what makes these super-real-time immersive experiences possible is that they're basically not calling out to other systems. You're basically being taken into the right in-process cache, that contains a lot of the information that you're interested in.

Now, if you think about Lambda functions, the misconception is that they're stateless. In reality, you can maintain some memory that is shared by previous invocations, and then subsequent invocations. The big limitation that they have is that that cache tier cannot really be relied upon that much, because each discrete invocation might start with no memory whatsoever when you started scaling up or down... You're not gonna have that high cache hit ratio that you would otherwise have with a server.

\[40:11\] Now, that doesn't mean that the memory inside the function, or even the /temp directory doesn't exist. No. It's there, and you should use it. What I demonstrated in that demo is that you could even write a fully stateful system if you relied for example on Redis. So what I did to make that Pokémon demo work is that I moved the state into Redis, and then I didn't care if a certain function had this cache hit happening or not. And if it was a cache hit, because the same function keeps getting reused, I would take advantage of that.

So it's interesting to consider that, because when you're operating at a very high scale, or you're doing a lot of things that are very real-time, you do want to have some shared memory between lots of different requests. Now, this is why I think that functions in combination with these novel database systems like Dynamo, and CosmosDB and Fauna are gonna be really the way that we can solve this durable functions problem, of like "I need to not just do a trivial transformation in my function. I want to do I/O, and keep state, and scale correctly." We're gonna have to start heading towards the databases that are appropriate for those cases.

**Divya Sasidharan:** Yeah, definitely. I think that's one thing that -- I was looking at AWS Step Functions, and just the ability for you to do I/O between functions... Because oftentimes we talk about functions as in isolation, like "This function just does one thing", but sometimes you have functions that rely on other functions, so it's just a sequence of events... So how would you do that? ...because I think generally, whenever we hear people talk about serverless functions, there isn't a lot of talk about how you would chain functions together, how they would pass from one to the next...

**Guillermo Rauch:** Yeah. I do think that the DX of that today for most implementations of serverless functions is not good enough. It's doable, with storing the state somewhere, and then another function kind of responding to that state change... But I do agree that -- I love the spirit of making your function invocations very short-lived, so that you can scale certain parts of the lifecycle of what you're doing independently. In a transformation pipeline you might have steps that require even different memory and CPU configurations.

The crazy thing about functions is they're super-configurable, and they're super-granular. So when you compare this to the old serverful world, the difference is kind of crazy. In an old Express server you had kind of like free for all; all the endpoints share everything with everybody else, CPU and memory is the same, but it's shared by the entire server... The environment even, in terms of security, the variables are applied to the entire server. With functions we can make all this granular. Now, the question becomes "Are you getting too ahead of the optimization game when you were writing just a prototype?"

**Divya Sasidharan:** Yeah.

**Guillermo Rauch:** So this is why in Next.js API functions we did as much a we could to make it feel like you're writing Express almost, even easier in some ways because you have the file system. So you just create an API directory in said pages and then you put your functions in there. But we're conscious of this thing, because there's a lot of power that comes with functions, but you don't wanna over-complicate it either, right?

**Divya Sasidharan:** Definitely.

**Guillermo Rauch:** \[43:53\] This is why some people keep saying "Oh, for my A, I'm still okay with Ruby on Rails. And I'll use JAMstack for the frontend." I think that comes from perhaps the function world being still nascent, in some ways.

**Divya Sasidharan:** Yeah. I think the other thing also that's worth mentioning is that with functions - and I think this is the case; it's ubiquitous across every functions offering out there - dependency management is a little bit clunky at the moment, just because of the way that you would serve a function. You would have to ship the function by zipping the entire thing, and having an executable, so that all the dependencies live with it, and then you have to make sure that that specific dependency is not -- it has to live in the same place that your function lives, so it has access to it...

**Guillermo Rauch:** I think in a nutshell, the reality that we're living in today is that functions run Node.js; that's the runtime.

**Divya Sasidharan:** Exactly, yeah.

**Guillermo Rauch:** ...but the ecosystem is shared. We all use Npm. But the ecosystem itself is targeting these environments that share the runtime, but are actually quite different. So there's almost this impedance mismatch where developers come to using a function and then they expect that everything that they're used to in the Node.js world works out of the box. And that mismatch ends up sometimes being a paper cut. We've seen this with databases...

If you just wanna use the pg client for Postgres from Node, and the way that connection pooling works with PostgreSQL servers, and then you may use it with functions now, you almost immediately run up against the wall of "Oh, I opened too many connections to Postgres", and the connections were not gracefully closed. So now basically I was promised my website would never go down because of JAMstack and serverless, and now three database queries and my server is exacerbated.

**Divya Sasidharan:** Yeah.

**Guillermo Rauch:** And by the way, this impedance mismatch is exactly what we were talking about with regards to that server-versus-clients rendering environment. You would have to use node-fetch for the server, and then fetch for the client, and they're slightly different. And then one context has window and the other one doesn't.

Npm had to navigate that problem, too. I remember Seldo started realizing by looking at the data that browser-js was getting deployed a lot to Npm. And keep in mind that to them, to Isaac and Seldo, that was a surprising emergent behavior from the community, because Npm was literally designed to be the Node package manager. I think maybe that's what originated the joke of -- you know, all the different acronyms of Npm.

**Divya Sasidharan:** Oh, yeah... \[laughs\]

**Guillermo Rauch:** Nice People Matter... And yeah, they rotated on the website. But it's true, JS is so -- this is not a great word now, with Coronavirus, but JS is so viral that Npm has become kind of a repository of everything. And then the developer has to make the right decision for what package fits the environment that they are deploying to.

**Divya Sasidharan:** Definitely, yeah. And that's why I'm really excited to see the emergence of Deno, and ES Modules, because it's completely shifting the model away from all of the problems we had with Node and Npm.

**Guillermo Rauch:** Yeah, for example if Deno focuses on functions - which I think they are - from the get-go, then we can have a higher degree of certainty that if I write Deno functions, then they will have thought about these problems early on, and there is less of that bumping against the wall problem.

**Break:** \[47:50\]

**Jerod Santo:** So you two are deep in the weeds of this stuff, which is awesome to listen into and hear about the ins and outs of solving particular problems - with JAMstack, with SSGs, serverless, Lambda functions etc. I feel like I'm a little bit on the outside looking in, trying to look at the trend as a whole, and going back to this concept of the technology adoption lifecycle. I'm not sure if you guys are aware of this, but the of you have innovators, early adopters, early majority, late majority, laggards - this flow... And on this particular new type of web application all on the JAMstack, I'm just curious what you two think, where we are in that adoption lifecycle? If it's still in the innovator phase, or if it's moved beyond that, and then what stands between where we are today and some sort of mass adoption, where like most developers are building JAMstack style apps in their day-to-day use.

That's for either one of you to kick off - where are we and what's still in the way before everybody can start doing this?

**Guillermo Rauch:** I think we're past the early innovation phase, clearly. I think we've seen lots of large websites, large teams, large companies use our platform, Next.js in the JAMstack structure, in production. I think the recognition of "Hey, this is definitely the solution" - it's still not 100% that everybody says like "Oh, I absolutely need to use JAMstack for absolutely everything that I create", especially as you get deeper and deeper into companies that have been running their workloads in a different way, and they're thinking about what the future is for them.

So what is interesting about Next.js - and it's still the case that it's a hybrid framework - is you can still opt into SSR for certain things, and some companies feel comfortable with adopting new technology in that progressive way. Perhaps the thing that they're after at that given time is React, and they feel more comfortable saying "Look, I can maintain almost everything the way it is today, and then I get the benefit of React."

So I think this is why I'm a really big fan of incremental adoption of JAMstack, where we tell customers "Think of adopting it even one page at a time, and then you'll see the benefits for yourself. And then you'll see the higher conversion."

I've now seen customers tell me "Look, I went into this very interested in what you're saying, very interested in the case studies that you're showing, but when we actually rolled it out, we saw an improvement on our business metrics. Not just like Lighthouse - forget all that. We've had so many customers tell us "I'm converting better." That's what we wanna hear. That's what we wanna hear from VPs of marketing, that's what we wanna hear from CTOs, we wanna hear it from everyone that chooses this technology, like "Hey, it's giving us better business results."

And then the other side of that is the developer satisfaction. I think that's where -- sure, there's some edges. Sometimes as projects grow, for some people the build times get longer, and whatever... But for the most part, as Divya was saying, for example now you're writing in one JS environment, and you're not worrying about the dual execution, and you're not worrying about servers, the dev workflow is simple and fast...

\[52:07\] On the other side of that, not only do you get better business metrics, but you get more developer satisfaction... And what's happening in terms of that curve that you were talking about is developers tend to gravitate to the tools that they feel most productive in, and that give them the best results in terms of shipping your features, and iterating, and solving problems efficiently. We're seeing tons of momentum there. Next.js gave people a great DX for React applications, and we see, as you also mentioned, that frontend teams are now more and more eating companies, and being the decision-makers.

I would say that we're past the innovation phase, because we've seen that it was front-end teams that took this technology into so many big names. When we talked to the Hulu team, it's like "Okay, how did this idea of using Next start?" and it typically starts with front-end developers, and it typically starts with that desire to create more interactive experiences, and shipping faster.

So I think we've seen plenty of results already, but I'm still super-optimistic that relative to how young this movement is, there's so much upside. We're still really in the early innings, but what's interesting is that we already have so much proof that this works well for very large size in customers.

I think this is pretty unique to JAMstack itself, because typically -- I was part of the early days of Node, and Node always had a lot of problems for being production-ready... And it had that developer excitement, but the production usage was more like "Yeah, we made it work, but it took this and that..."

**Jerod Santo:** Right.

**Guillermo Rauch:** It seems that there were a lot more obstacles. Now, this time it feels the opposite. Sometimes - as you pointed out - maybe the developer was more comfortable with the Ruby on Rails monolith, but in reality the JAMstack solution works way better in prod. So it's a very unique situation, and I love it.

**Jerod Santo:** Yeah, that goes back to this directional shift of the frontend eating the backend. When Node first hit, there's a promise of -- what's it called, isomorphic apps? So basically writing your code and running it on the front and the backend... And that attracted some. But there are plenty of us - myself included - that it's just like "Well, I'm pretty happy with my backend technology." The stuff that I build doesn't always have to be "web scale", and I'm fine with that. But JavaScript on the frontend has always been the lingua franca, it's always been the thing that all companies, all developers, anybody on the web is gonna be using, despite (or regardless of) their backends. And where JAMstack is actually attacking the frontend, and saying "Here is a better way of doing..."

**Guillermo Rauch:** it's a better fit.

**Jerod Santo:** Yeah. So now you have a much bigger potential audience, because you didn't have to convince them to ditch their server-side technology. You're actually convincing them to rebuild in a different way.

**Guillermo Rauch:** Yeah. And that's what I meant by the incremental adoption curve that I love - I think the trend that now is in the place of like the laggards or whatever is enterprises have been moving towards decoupling their front and their backends. Some chose REST, some are choosing GraphQL, but that trend is now mature. Companies know that there is a big benefit to exporting their systems as publicly-consumable APIs. And even that movement in itself I think has a lot of upside still. But let's say that that's a more mature trend.

\[55:52\] So now when you think of JAMstack, which is a more young trend, it's really fitting in so well with where the ecosystem already was. If you're a larger established player, you already have that API. Or you were in the process of creating it. I think this trend also hops onto the rise of mobile, because mobile native needed GraphQL, needed REST. So now you come in and you create a frontend architecture that matches what you were already doing for mobile.

**Jerod Santo:** Right.

**Guillermo Rauch:** It's so compatible with the other co-existing trends, and that's what I think has been giving it this boost in adoption.

**Jerod Santo:** Right. This was a similar thing that Tom Preston-Werner said a couple weeks back, when we were talking about Redwood. I think it was actually during a break, but maybe it made it into the post-show... I was talking about "Wouldn't it be better for developers, in terms of mental model, if we could just take the straightforward unidirectional flow of a server response..." - you know, I get a request, I do some logic, I output some HTML.

That's a very straightforward mental model for developers, and one of the reasons why React was so successful is because it took that unidirectional flow and brought it to the frontend. I said "What if we could just take that and just distribute it to the edges, and have my local database...?" If I could just take my monolith and make 1,000 monoliths at different CDNs around the world, wouldn't that be better for developers, if I could still do my server-side rendering?" His response to was "That does not solve the multi-client problem", which is exactly what you're talking about.

**Guillermo Rauch:** And there is another problem with that, by the way, which is the latency problem that I was describing with the Stripe example. With the exception of Fauna's geo-replication model, which is built on a novel replication and coordination system called Calvin. With the exception of that, and perhaps Google Spanner, databases are not mature enough yet to co-exist with your edge.

**Jerod Santo:** Right. I was giving him a hypothetical world where this was true, so I wasn't assuming--

**Guillermo Rauch:** That's a super-interesting hypothetical.

**Jerod Santo:** Yeah.

**Guillermo Rauch:** I think we're nowhere near that world existing. I think - this is why I'm excited about Fauna - considering how the world in some ways had already been "sheltering in place" with regulations, and stricter borders... And these are all things that are not very exciting, especially when it comes to -- you know, we've had speakers get detained at the border, or sent home; it's a horrible trend. But the reality is that as Vilagis tweeted recently, he was saying this Coronavirus might be accelerating trends that were already kind of there. For a lot of us, work from home and remote work and distributed teams was a reality, but for the vast majority of the world it wasn't... So now this is gonna accelerate it. It's gonna accelerate Zoom adoption, it's gonna accelerate deploy previous. We've seen that even over the past two weeks - the number of builds and deploys to ZEIT have just skyrocketed.

So all these trends are gonna get accelerated, and when it comes to databases, databases having a sense of locality has been what governments have always wanted. The most obnoxious and extreme version of this is how China wanted its own "shard" of iCloud, that lives in China, and doesn't have end-to-end encryption.

So there could be a world in the future where the database is everywhere, and therefore the logic for the code that interacts with that database can also be everywhere. But that's not where we're today. We're nowhere even close to that. So the most that you can have is a distributed cache like what Cloudflare is trying with I think they called it KV, or something like that...

\[01:00:05.07\] But today, what's more realistic is that you have a certain database origin, and therefore you have a collocated API origin as well. What we're starting to see is that you can move certain functions to other locations, or even to all the edges. But that's more of a distant reality. I would be surprised if it even happened in the next 2-3 years at scale.

I think what's more likely to happen is, again, you're gonna create an API in your region that, makes the most sense; one way or another everyone has picked Virginia... And that's gonna be your start, and you're gonna create an API around that. But then what you're gonna distribute everywhere is your frontend, and your static generated pages, and so on.

And by the way, I love that too, because like I said, I think the best outcome for consumers is that when they go to the content, there is no API call at all, there is no servers, nothing. It's just like "Hey, give me the copy of the content that I want."

**Jerod Santo:** Right.

**Guillermo Rauch:** I'm pretty happy with that world.

**Jerod Santo:** Until a meteor hits Virginia, and then we're all in trouble.

**Guillermo Rauch:** Correct. \[laughter\]

**Jerod Santo:** During one of the old AWS downtimes years ago somebody made a joke, like "It turns out the cloud is just some building in Virginia." Because they brought down so many websites.

**Guillermo Rauch:** And it's still true today. If you think about it, the latency from Europe to Virginia is not bad at all. I always say "Pay attention to the latency figures that every developer should know" by a famous Googler... And one of the ones he mentions is California to the Netherlands roundtrip is 150 milliseconds or so; maybe even less.

**Divya Sasidharan:** Oh, wow.

**Guillermo Rauch:** But let's add some padding, right? So if you think about like a critical market for you, which is London. London to Virginia is actually pretty damn fast. And California to Virginia as well. Now, I'm not advocating for a sub-optimal world, because then your customer in Sao Paolo should probably have a database in Sao Paolo; that's the reality.

**Jerod Santo:** Right.

**Guillermo Rauch:** But again, there's a lot of technology that needs to be created for that world to exist. If the political climate around the precedent of Brazil wanting all the data in Brazil, and the precedent of Russia wanting all the data in Russia continues, maybe that'll accelerate that movement. But the counter-movement that might exist in those cases is the emergence of local clouds. The reality is that Alibaba Cloud is probably gonna dominate in China as well. And even in those cases, they're looking for solutions that fit their local market. So I think when it comes to deciding where your API origin is, you have to be thinking a lot about what business problems you have.

And with regards to availability, you also have the thing about disaster recovery, like you said, for the meteorite case. But increasingly managed databases have already thought about this problem on your behalf. We use CosmosDB, and our disaster recovery contract with them is if something hits a certain coast, we have in the worst-case scenario five minutes to failover the API origin to the other coast. Everyone is always going to one API origin, but then we also can flip the switch and go to another API origin.

**Divya Sasidharan:** Yeah, I think that's key. I think we're coming to the end of the session... Jerod, do you have anything you wanna ask?

**Jerod Santo:** I scooped up a couple of questions from the chat, and from Twitter, that I can pitch, but I don't have to ask those... Divya, you take--

**Divya Sasidharan:** \[01:03:50.07\] Yeah, I just wanted to ask one last question, which is just that we talked a lot about -- I think we're moving closer to this particular question... We talked about edge functions and what's possible, what the JAMstack is like now - because it's been five years since it was introduced... But where do you see the future of the JAMstack moving in (let's say) the next five years?

**Guillermo Rauch:** I think we're gonna see frameworks give you the best practices, and kind of the gems, like architecture, out of the box. This is for us, like I said Next.js started as this SSR thing and then it really evolved into being a JAMstack framework that gives you these best practices as the defaults.

I'm really excited about that trend, because it answers one of the things that came up, which is we can't create obstacles to the adoption. But we can create lots of questions, we can create lots of do-it-yourself type things around how to successfully start with one page, and then add more and more, and then have this become your primary architecture for your company. I'm really excited about that.

I'm really excited as well -- I read all the ideas of integrating with other systems. We're seeing lots of interesting collaborations right now with all the headless CMS providers, with a new feature that we're introducing with Next.js previews. So whether you've chosen Sanity, or prismic.io, or Strapi, this will have increasingly nicer and nicer integration stories into the frameworks, so that it truly feels like -- again, going back to WordPress, we were saying "Oh, we have problem A and problem B", but when you think about the amazing things that it gave the world, one of them was this "It's all in a box sort of experience". You had your themes, you had your output, you had your frontend, but then you could go to the admin panel, and then everything was already there. You weren't thinking about "Oh, I'm gonna make a query to my headless CMS provider." That's kind of odd, if you really think about it on its own; if you look at it objectively, it's odd.

I always take the example of like - imagine that you take this paradigm or new standard to a non-technical person. And ten years ago you show them a demo of WordPress, and now ten years later you show them a demo of your JAMstack plus headless CMS thing... And there's a lot of rough edges in that kind of experience, especially for the editor part. But I think JAMstack now has the ability to leapfrog those experiences.

So what we're gonna see in the next (even) year or so, I'm excited about new technologies like Tina, where we're gonna see that we're merging the headless CMS editing experience - and Sanity is doing it as well with Sanity Studio - and we're collocating that with a frontend experience. So I always believe in leapfrogs. Our bar should not be to be as good as WordPress was; we have to be better, too.

So making a website that has all this amazing performance and availability features, but also feels like Webflow. I think we're really close to there. If you wanna check out a demo that we put early on, that uses the Next.js preview technology, it's next-preview.now.sh. This is basically a fully static page, it's always served through in the edge, unless you are in preview mode. If you are in preview mode, we render "WordPress style", where we're always going to the data source, in "real-time" or synchronously.

So what it ends up being is that it feels like you're editing the website in real-time, while you're in preview mode. But then, in the future, especially with integrations with Sanity, and Tina, and type.io, we're gonna be able to say "Well, now I wanna commit this change." And then it goes into the production pipeline, and again, the static pages get generated, and we end up with basically the best of both worlds.

\[01:08:18.16\] So in a nutshell, I'm really excited about, again, elevating the bar of user experience, developer experience... Because I think we've made a lot of progress with the infrastructure itself. I'm really happy with how fast these pages are to load, and the technology that we've created for incremental static site generation. So what we can do now is fill that gap in terms of "Can we make this really feel like no code even?"

**Jerod Santo:** It's pretty cool stuff.

**Divya Sasidharan:** Yeah, I like that you focused also just -- and you shined a light on the non-technical audience... Because often when we talk about websites - sure, developers are building the website, but we also have non-technical contributors, like content authors or marketing people...

**Guillermo Rauch:** Totally.

**Divya Sasidharan:** ...who need to contribute. And I think often with JAMstack it's like "Hey, you can use a headless CMS", but sometimes--

**Guillermo Rauch:** Or even technical people in retirement, right?

**Divya Sasidharan:** Yeah, definitely.

**Guillermo Rauch:** Because I see it this way - I wanna edit the copy or suggest a copy edit of our marketing pages sometimes, the infamous now JAMstack spelling. Is it JAMstack - lower-case, upper-case? And I'm not coding anymore; so I'm luckily on the other side, where I don't wanna go to GitHub. I don't wanna go boot up a dev thing... I just wanna press an Edit button, and then be able to submit my preview to my co-workers. So it would be like "Hey, what do you think? We can say this."

**Divya Sasidharan:** Yeah.

**Guillermo Rauch:** So yeah, I totally agree with that. Like you said, sites are meant to be accessible; the web is meant to be accessible to everyone. You'll have probably seen that there are so many memes on Reddit and elsewhere where people use the dev tools to create fake content.

**Divya Sasidharan:** Oh, yes... \[laughs\]

**Guillermo Rauch:** So the dev tools have done a better job so far at making this technology available to everybody than the rest of the world so far. But now, admittedly, we clearly see a path forward. I believe we're about to open-source the preview example too, so that everyone can plug it into their headless CMS of choice...

**Divya Sasidharan:** Cool.

**Guillermo Rauch:** But now I see how all this is fitting in. Gatsby is also working on some initiatives around this, on making blocks drag and drop... So it's a really exciting future for broadening access to the web.

**Divya Sasidharan:** Yeah, definitely. Cool. So with that, there's like a very bright future ahead for JAMstack. I'm very optimistic myself, and I almost echo your sentiments around wanting to make sure the editing experience is nice. I'm a developer, but I still don't like writing in markdown, which I think is a fairly controversial opinion... \[laughs\]

**Jerod Santo:** I thought we were friends.

**Guillermo Rauch:** And by the way, another thing I was gonna add, in terms of our bright future, is mobile web. I recently tweeted about a component that we designed for switching teams in our dashboard... And I've been really excited about it, because if you put in the effort for the UI parts - and I think one of the goals of our chat today was gonna be talking about different browsers and whatnot, but there was a lot of content to unpack... But one thing I'll say about browsers, as a final note - I think the JAMstack might have a really good chance at making mobile web really competitive with native.

One of the things I'd love to give to the community is the challenge of thinking more about the interactions that feel native in terms of the web, that actually are possible. Obviously, there are always constraints, and we all know that mobile Safari has all kinds of weird limitations, but if you create a component system and a UI system that embraces that environment, you can do really cool things that make mobile web super-competitive with native.

Going back to how JAMstack mirrors the application architecture of a native app, in terms of like, you know, you boot up with some code, or some shell, and then you make API calls, and so on... I really think that in the next five years we're gonna see lots of progress in the mobile web ecosystem.

We've been working together with the folks of Ionic around Ionic and Next integrations, and they have really cool ways of embedding your apps in native shells. So I'm really optimistic that we're gonna be creating JAMstack apps that really stand on their own in comparison to native apps, both when they're distributed on demand from a web browser, but also when they're wrapped in a shell like React Native WebView's, or Ionic View's.

**Divya Sasidharan:** Yeah. Cool! Well, thank you so much for being on the show. We're really glad to have you. This was really interesting. I think we talked about so much within this show...

**Guillermo Rauch:** For sure.

**Divya Sasidharan:** ...there's so much to unpack. So yeah, thank you again for being on the show.

**Guillermo Rauch:** Thank you so much for having me.

**Jerod Santo:** You're welcome back anytime!

**Break:** \[01:13:38.07\]

**Jerod Santo:** Is it rude to just -- so, Slack etiquette... I almost never use @channel.

**Guillermo Rauch:** I do.

**Jerod Santo:** You do use @channel?

**Guillermo Rauch:** When we hosted Backendless Conf, it helped us tremendously, and people received it well. I think of it as like getting a push notification for something that you signed up for. For the company, we've "banned" it, because it can be -- like, people not realizing how much of an impact it has, and things like that... But for conferences and meetups I've used it and people haven't gotten too mad.

**Jerod Santo:** Okay. I'm won't use it, because I usually use @here. Our JS Party chat room has 800 people chillin'... @here means you're -- what does @here mean? Does it mean you're signed into Slack, in this team, and you're also active on your computer? Is that what @here means?

**Guillermo Rauch:** I'm not sure.

**Jerod Santo:** Nobody knows maybe...

**Divya Sasidharan:** I assumed it was whoever was -- like, I don't know if they made a change or something, but I assume that @here at one point was everyone in the channel... And then I don't know if they changed it so @here was whoever was active and in the channel. That would make sense, but I don't know.

**Jerod Santo:** Yeah, active and in the channel... Which is probably maybe like 5% of the people that are in the channel. I'm gonna give it a shot, and see if anybody gets mad at me. Sorry if you're in the Slack and already listening; you're gonna get -- oh, 23 times...

**Guillermo Rauch:** \[laughs\]

**Jerod Santo:** See, that's what scares me - 787 people, and 23 times "Are you sure?"

**Guillermo Rauch:** It's tough.

**Jerod Santo:** It is tough. Yeah, send it now.

**Guillermo Rauch:** They should have @channel with a reasonable timezone.

**Jerod Santo:** Yeah, exactly.

**Guillermo Rauch:** Like, down-scaled variances.

**Divya Sasidharan:** Oh yeah, that's true.

**Jerod Santo:** It's like the low-key @channel.

**Guillermo Rauch:** Because @here doesn't work. @here literally requires that they've been active, and if they've been active, they already got the message.

**Jerod Santo:** Right. Alright, well I went for it... If you got that and you're mad at us, then I guess leave the JS Party chat room and you won't get the next one.

**Guillermo Rauch:** This would be a cool Slack integration, to be honest... Because you could say, like I said, "message everyone that is not currently active that is in a reasonable timezone.

**Divya Sasidharan:** That's true, yeah.

**Jerod Santo:** Yeah. And then you'd have to have some definition of "reasonable". Maybe like business hours(ish)...

**Guillermo Rauch:** Business hours, yeah.

**Jerod Santo:** Yeah. Like 8 AM to 8 PM or something. Not sleepy time, basically. Alright. Well, I did it...

**Divya Sasidharan:** Well, based on whatever you set your hours to be, I guess... Because you can do that with Slack.

**Jerod Santo:** Yeah. Oh, you can?

**Divya Sasidharan:** Yeah, you can set hours... I mean, I do that for work, just so that I don't get notifications past a certain time.

**Guillermo Rauch:** True, true, true. So that's why also I feel confident about @channel too, because I think most people should have that setting. I even think that it might be a default now.

**Jerod Santo:** Okay, cool.

**Divya Sasidharan:** Yeah.
