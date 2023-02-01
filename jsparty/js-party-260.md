**Nick Nisi:** Ahoy-hoy! Welcome to another exciting JS Party. I'm your host, Nick Nisi. Ahoy-hoy! I'm here today with Kball. Kball, what's up?

**Kevin Ball:** Hello, hello!

**Nick Nisi:** Welcome back to the show. I'm excited to chat with you again. And we have a special guest - please welcome back Fred K. Schott. Fred, how's it going?

**Fred K. Schott:** It's going great, thanks for having me on. I forgot what an absolute gem that intro music is.

**Nick Nisi:** Absolutely. That's the main reason to be here. I don't think it's actually in the -- well, it is kind of in the main show, like the produced show.

**Kevin Ball:** Oh, yeah.

**Fred K. Schott:** Are you robbing your audience of that sick beat?

**Kevin Ball:** No, it's there. Our dancing is not in the main show though. If you want the dancing, you've gotta come to YouTube.

**Nick Nisi:** Yup. \[laughs\] So we have you back... We had you in - I think it was August, you spoke to Amal about an exciting project that you were working on, and you had the 1.0 release, and it was called Astro; the 1.0 release was there... And I just relistened to that episode to kind of see where you left off with that, and one thing that Amal said right at the end was "If you shipped all of this in version one, I can't wait to see what you do in version two." And we're here today to talk about version two that is coming.

**Fred K. Schott:** Setting the bar high, okay... I hope I can deliver...

**Nick Nisi:** I have no doubts. So yeah, first off, why don't you tell us a little bit about Astro, and what it is?

**Fred K. Schott:** Yeah, absolutely. So if anyone hasn't been following the project, we are a web framework, much like a Next.js or a SvelteKit, or any one of the kind of many attempts at helping developers build better websites. Our take is a real focus on content-focused websites. Performance is probably our big headline. We're faster than any other framework, and the way we do that is by really focusing on content sites, so the idea of -- you wouldn't really use Astro to build a full application, like the next Facebook, but it would be a great thing to build a blog, a portfolio, a publication site... Anything where the focus is on the content itself.

And then we give you interactivity, the nice bits of UI that can kind of react to you, and run with JavaScript, but they're really focused on these islands of interactivity. So Astro Islands is kind of the killer feature of Astro, that makes it really unique. Your whole site is gonna be static HTML, zero JavaScript by default, and then you can kind of pepper in the little bits of interactivity that you need. A much more performant model than shipping everything as JS all at once.

**Kevin Ball:** So it's like a JavaScript framework that's back to the progressive enhancement concept, where you start with HTML, but you're progressively enhancing your islands.

**Fred K. Schott:** Yeah. The joke is that it feels a lot like PHP. Like, we've essentially recreated PHP, with that PHP tag... Like, you're writing your server code, but at the end of the day what you're outputting is HTML, with these -- you can still use React, you can still use Svelte... We're really agnostic to the frameworks, so... It's really cool. It's very unlike what a lot of the other tools in our space are doing, but it also feels very familiar, if you've ever used a more server-focused framework before.

**Nick Nisi:** Yeah, that's kind of the main things... Like, when I look at Astro, the main highlights of it are that you can bring whatever you want to use, like Vue, React, Svelte, and use those, but then also, you have to give it a special property to actually get it to render on the client side, otherwise it just statically renders it.

**Fred K. Schott:** Yeah, so we take this pretty seriously. You can put a React component on your page, like a Buy button, or an image carrousel, and it's just gonna be static HTML, unless you add what we call these client directives... Client load being "Hey, when this gets to the page, actually hydrated, this island is gonna become interactive as soon as it can." But then that opens the door for really cool optimizations. So there's client:idle, which is like "This isn't really a priority. When the browser is idle, go and fetch this JavaScript kind of behind the scenes. Don't impact your performance of first page load."

And visible is my favorite one. Like, if this isn't even visible on the page, we're not even gonna load the JavaScript. You're essentially gonna get this for free; when the user scrolls it onto the view, then it's going to behind the scenes go and load it, hopefully before the user even notices.

So yeah, once you start to think of your page as this collection of different components, you can start to prioritize them and almost customize them to a really interesting degree.

**Kevin Ball:** So is all explicit? The developer is always choosing "Okay, this thing is interactive, this thing is not"? Does that add a lot of cognitive overhead?

**Fred K. Schott:** What's interesting is you actually end up starting to do a lot more in Astro as like HTML-focused syntax. So what's really great about it is you can migrate essentially a Next.js app, a Svelte app, really easily. Like, literally copy those components in, and you have access to them in your Astro project. So it's a great place to start. But then we've found that users wind up writing a lot more in our syntax language, which is like the .astro file... And really, all that is is HTML with a little place for like some server-side JavaScript if you wanna inject it... But then you can kind of lean into that a bit more, and that's a little bit more server-first by default.

So you can kind of walk the line however much you want. If you wanna stay 100% in the React world, you can; the overhead isn't too much of a problem if you're living in the React world almost entirely. You're just gonna put that on your page, and then now you're in React, and you can everything you wanna do in React.

So the size of your islands is really up to you. Some people build full-page islands, like these giant, bloated islands, other people really small islands. I'm sure a smarter person can make a bunch of geography puns, but... Yeah, your islands are kind of what you make of them.

**Nick Nisi:** \[06:00\] I'm gonna ask a kind of naive question, maybe... With the .astro files, you mentioned having some space to put server-side functions, and I see things like the YAML front matter, to specify different things... But then can you put anything in there? Like, could I put React, or just plain HTML, or anything like that in a .astro file? Or would you kind of have those separated out.

**Fred K. Schott:** Yeah, so if you're trying to put a React component on your page, you would still build that in a JSX file. Svelte gets built in a .svelte file, Vue in .vue... What's really interesting is we've kind of almost -- like, just at the same time that React is trying to figure out what server components looks like, I'd say our approach has been almost like the exact same problem being solved, but from a totally different angle. So what React and others are now trying to do is "Okay, we have 10 years of building React as a frontend framework, and SSR was this thing that we've built", so they would not have like this huge uncanny valley, blank screen wall, all the JavaScript... Like, "Let's build the HTML for the users, so they can at least see something." That's what Next.js kind of really pushed the boundary of, is SSR should be table stakes, and the industry has generally caught up with that.

But now they're trying to figure out, "Okay, we actually want this to run most entirely on the server", and the problem that you have to ship your whole application to the client is actually a problem to solve that hurts performance at times. That's like the next frontier of web performance, is the fact that we're shipping an entire application down to the user's phone, which is gonna be really slow to become interactive.

**Nick Nisi:** Yeah.

**Fred K. Schott:** So what's interesting about Astro is we kind of get to approach this from much more of a server-first, just by virtue of having to tackle this problem without the baggage of ten years of what Astro is. We got to kind of define it as server-first, so that - put anything up there; it's essentially a place for server code... That default server workflow, with the option to go client-side when you need it is a really nice flipping of the model, that is essentially what everyone now is trying to back themselves into, but we get the benefit of starting from that place.

So yeah, the PHP analogy... Like, put your server code there, call a database directly in your component - you can do that. It's all in the server; there's no concerns about that running on your browser and exposing secrets. It's fully, 100% server-side; you have that safety. You get cool features like top-level await... Yeah, it's a pretty neat model.

**Kevin Ball:** It's so funny to see this all come back around...

**Fred K. Schott:** \[laughs\] It's the PHP analogy. We're just PHP.

**Kevin Ball:** Well, I mean, this question of server-side versus client, or whatever... This is probably the fourth iteration in the software industry of this... It's really funny. I do have a couple questions related to that. So one of the drivers for the most recent round of "everything's on the client" - call it the React era. One of the drivers for that was it lets you get a completely consistent developer experience throughout. It lets you not have to swap your headspace between "Okay, this is server-side" versus "This is client-side." We all used to do that - call it the PHP world, call it the Rails world, or whatever. You were writing server-side and thinking you're server-side, and then you were writing your interactivity and you were in JavaScript, and you were making it happen. So having all of that feel the same was a nice reduction in cognitive load, and that let somebody feel very productive. Now, it came with the downsides that you've highlighted.

How does Astro handle that sort of mental space, when you're thinking about server-side versus client-side? Does it require that big jump of "Okay, I can do this here, but not there"? Or does it feel consistent throughout?

**Fred K. Schott:** Yeah, that's a great question. You just reminded me of my first project, the first company I ever worked at my job; we were building a UI server-rendered HTML through PHP, I think, and then we had to reimplement that HTML using React. This is like the earliest days of React, we were trying it out, and we just had to maintain the same UI in two different languages, two different codebases... But God forbid they ever got out of whack, because then that re-render is gonna just totally blow out \[unintelligible 00:09:50.07\] something jarring. We've come a long way from that.

\[09:56\] I think what we are seeing is that DX of "It's one codebase" was absolutely -- that is why React won to the degree it did. It's not just a UI framework, it's like a way of... Or I guess that's really the SPA; it's a way of building your app, that you get one codebase; you think of your website as an application, and that lets you do really powerful things as a developer. So the DX of something like Next.js was light years ahead of anything else at the time... And it still is incredible.

The problem is I think that idea of changing headspaces is now what Next.js is trying to figure out, or the React team is trying to figure out with server components... And I don't know if they actually have figured that out. The idea of "Okay, so if I want this to be a server component, I have to put "use server" at the top of my file as like a special string." Okay, now there's a new set of rules for this JSX file. I actually can use an await in my function. If I don't have that, I have to use the "use" keyword; how does that work?

The idea of context-switching was actually one of our biggest concerns with Astro syntax; it's like "Are we actually asking the user too much?" They have to have the .astro file for the server, and then the .jsx file for their React components on the client... But what we've learned since then is actually that feels like the right separation. There were just different roles. You can make a database call on the server, you can't do that on the client... And trying to pretend that that's not the reality actually is causing more problems that we see in how server components are being developed and shipped... Versus just a really explicit, like "Let's design something that is really focused on the server and everything the server can do, and it doesn't have the complexity of user interaction to deal with rerendering..."

And then use the frontend frameworks which have ten years; like, we're never gonna beat React at being React. It's great; you should be able to use that. And our idea of reuse is that those can still live in the same codebase, it's still the same application, they can reuse the same functions, the same libraries, the same utilities, but the language of expression, the templating language would change based on where you're living. The separation actually ends up being a benefit, not a cost.

**Kevin Ball:** Well, the reuse sparked another question that I had, which is - so you're thinking about the different components on your page as islands, as separated chunks of functionality. Imagine for example I have five different React islands. Are they able to reuse the same runtime, or are you running five versions of the React runtime because you have five different completely separated islands?

**Fred K. Schott:** Oh, my God... \[laughs\] No, thankfully not. It's actually really interesting... It's so funny now, with our framing, seeing how frameworks think... The answer is once you load a React component, you're never paying the cost of React again. So you come with that upfront cost. That first island, it's got a little React, and that's not a lightweight library. I think 40 kb plus, the last time I checked, just for the rendering engine...

It's really funny, because you realize like "Oh, the React team, they don't really care about that, because they just assume --" Like, React and Next are so tied; Facebook, React, Next - they all think of it as like "Well, of course you're loading React somewhere... So who cares \[unintelligible 00:12:39.13\] Svelte, Vue, Preact - they all come from a much more minimalist mindset of "the framework footprint is something to minimize." I think the next biggest one after React is down to like 12, less than 10 maybe kilobytes...

So it's really funny, React is the one where you do pay a cost. That first island that's coming with React - luckily, all the other ones can share it. But if you switch from React to Preact, if you're able to do that, you get a pretty significant boost on that first island; it's not gonna have to pay that cost in the same way.

**Nick Nisi:** And you can do that with Astro?

**Fred K. Schott:** Yeah.

**Nick Nisi:** Awesome.

**Fred K. Schott:** And the thing we don't talk about as much, because it's kind of like the dark magic, like "use at your own risk", is you can mix these components in a project on Astro in a way you can't in others. So you can have a React component, a Svelte component, a Vue component... Every framework you want can be on the same page, living in harmony. You can even nest one inside the other. It gets pretty whacky, but they're just islands, so you get that isolation. The idea of isolating from each other is actually a huge architecture.

**Kevin Ball:** It's like the ultimate micro-frontend framework.

**Fred K. Schott:** Yeah, exactly. Well, that's the thing - you say micro-frontends and people have a... It's like Tailwind, they have a really emotional reaction to it... So we don't talk about it as much. I'm not trying to scare away people who maybe don't care about that... But yeah, we're absolutely a great micro-frontend framework.

**Nick Nisi:** With a focus on static content, or more static content, which is really good. Yeah, I really like that focus for Astro. I think Amal mentioned it in the last podcast, which is why I'm thinking about it, and just how refreshing it is to have something that is so focused on that.

**Fred K. Schott:** \[14:03\] And no one's doing it. I think there's this thinking that if we go super-complex and build apps, we can work our way back to the much simpler content. I think that's how everyone's thinking about this right now, and I just fundamentally disagree. Like, we get to do things that - it's been a year and a half; no one's been able to copy us on this, because it's a fundamentally different architecture. It doesn't make sense for apps.

**Kevin Ball:** It's much harder to remove complexity once it's already there.

**Fred K. Schott:** Yeah, exactly. Exactly. So we started from "Let's start with this. It is simpler, but we can do things then because it's simpler, that others can't." And our goal is to move up the interactivity scale. So if you imagine a spectrum between really content-focused versus really app-focused, everyone else is trying to go from app to content and struggling. We are starting from a much simpler side on content; we'll have our own challenges, obviously, but we think that that's a more promising path... Or at the very least, it's like the second inning of whatever this is gonna look like, so we think there's a lot more unknown to explore here... And "What does it take to start from this first principle and work the other way?"

**Nick Nisi:** Do you see yourself -- like, you mentioned at the beginning of this you wouldn't build a Facebook with Astro. Do you see yourself moving more towards that goal, or some middle ground between that, as Astro matures?

**Fred K. Schott:** Only \[unintelligible 00:15:09.24\] Ryan Carniato has been doing some really cool stuff. So if anyone has been really paying attention to this story, I'd say Ryan Carniato, the creator of Solid.js gets a huge shout-out. His SolidStart framework, which is essentially like the Next.js of the Solid UI library - he's doing some really interesting stuff. I don't know how much of it is going to make it into their final v1. I think they have a real experimentation culture... But one thing that's really interesting is taking that idea of islands and applying it to something that feels more like the Next.js app structure. This idea of like -- you can have these nested layouts, that are actually islands within islands within islands... So you're thinking of your site as an application, but almost like -- maybe onions would be the better term. You have like these layers of it that are all isolated from each other, but then you move within a layout, like from one page to another, you're actually only flipping out that one page inside of the overall shell. So it actually brings a lot of this thinking into an app architecture.

It's really cool, it's something that ultimately -- again, it's the second inning of a long game, so I think there's definitely going to be something here. Our focus still is on the content story right now, but there's some really promising undiscovered stuff here.

**Kevin Ball:** So this story of basically meeting less of the demands, but still enough for a lot of cases strikes me as -- it's a pretty classic innovator's dilemma style story, where you're competing on a new access... And because the existing frameworks have overdelivered functionality relative to most people's needs. But typically in that, while you're only meeting some of their needs on the app side, there's some other dimension where you're outperforming. You've decided a new basis for competition. What is it for Astro? What is the dimension you're going on that nobody else is doing

**Fred K. Schott:** Well, I'm going to use this as a pivot into Astro 2, because that's definitely what I am super-excited about. I think Astro v1 - we had a lot of ideas in our early days; that was all about finalizing, formalizing... And this has really been the first time in a while we've been able to say "Okay, let's take the next step forward on this content story and what it means." So there's a lot of features going out with the v2, but I think the biggest one, the one that I'm most excited about is this idea of - if we're gonna be content-focused, let's really make it incredible to work with Markdown.

We're one of the few frameworks that ships Markdown support by default. I say frameworks - Hugo, Eleventy... There are others, but they're more like in the static site category. Static site generators. We see ourselves as more of like a web framework, so if you look at Next.js, SvelteKit, Remix, we really have this great first-party Markdown experience. We're doubling down on that. We have really cool type safety for your Markdown. So you're not just getting a Markdown object and then you have to go figure out what you have to do with it. These APIs are type-safe, we validate your frontmatter, we let you enforce a schema... You're never gonna get like an undefined frontmatter error again, because we actually validate it as it comes in through Astro. You can set SEO requirements, hence there's some really cool stuff with treating your Markdown as something to be validated, and then giving you type safety through TypeScript, for free, as a result of just enforcing that. So if you ever reference something that doesn't exist, you'll get a type error, you'll get a validation error. Safety kind of all the way down the stack.

**Kevin Ball:** \[18:12\] That's cool. And I saw you're exposing it to plugins as well... So when you have that type safety plus you have the plugin story, it gets really interesting.

**Fred K. Schott:** Yeah, the way we've framed it - it's not just a way to import content, it's this idea of a content collection as like a first-party primitive, basically. So the idea is you actually give your folder a name, give it the blog name, and that's where your blog posts go. And it's an idea of content inside of a collection that actually feels -- it's much more than just a way to import markdown. It's a whole system for growing your Markdown collection, growing your content collections, balancing a newsletter, a blog... You can even put more data-focused stuff. You have like your authors as a collection... So you have ten blog posts, ten different authors, you can start to reference -- the implications are really cool. I'm really excited about this.

**Break:** \[19:00\]

**Kevin Ball:** I'd love to dig in a little bit more about this idea of collections and plugins, and tying those together... Because it seems to me this potentially enables something very similar to what you might do - I'm thinking like the old Rails engine world, where you can create sort of a complete vertical stack of "Here's a type of content, here's a type for that type of content", and maybe a whole bunch of (I don't know) default rendering, or other types of things. Maybe can you talk a little bit about the plugin API and what's available, what can plugins do within Astro, and how that ecosystem is developing

**Fred K. Schott:** Yeah, so the ecosystem around Astro is super-important to us. I'd call out our integrations right now; it's how you can add all these multiple frameworks working together; the theme ecosystem... We've just launched a new theme catalog... So we really care about building that out. And yeah, I think that's where I get really excited around the idea of content as a first-class primitive. There's a couple of cool things that we've seen. One is the idea of content being this -- like, it's schema-based. You can now basically set a schema that is -- it's always gonna have title, description, author, these properties, we're gonna validate it... But packages can ship their own schemas, so you could have something like a theme, "Here's my blog theme", and that would actually expose a schema. For you to work in My Blog Theme, just make sure you have these five properties, and that can now validate for sure that we can display your content. So that kind of mixing of like once you have an idea of content as something reliable, you can pass it around your ecosystem, and people can enforce what they need to enforce, developer experience stays really strong, you're not getting opaque, undefined errors, but you're able to pass that around.

I think the RSS feed integration is the first one taking advantage of this. It exposes a schema that's -- if you wanna have RSS properties, just make sure you have these three or four or five, and we'll do the rest. We'll give you an RSS feed without any extra work on your part. We're barely scratching the surface of this. I don't think there's -- that's I think the only first-party really cool integration that we have, but the door is open now for our ecosystem and community to start building for this.

**Kevin Ball:** Yeah. I'm imagining it -- I know there's these headless or API-first e-commerce systems, right? That seems like a natural candidate. "Okay, here's your schema, set it up, and you can now be selling a product." Super-simple. You mentioned blogs... But I feel like there's a ton of these. Anything you could call content, there's an opportunity here.

**Nick Nisi:** So when you say you have type-safe Markdown, and this whole schema based around that, are you saying like -- does Astro expose a way, I guess, from like a developer tooling perspective, to say like "You're writing a blog post, so you need these pieces"? Like, you need a slug, you need a tag, or something...

**Fred K. Schott:** Ben is gonna love this. So I'll shout out Ben Holmes on our team. He's the one who built this. One of his earliest ideas - along with Tony, also on the team - like, "Let's actually expose consistent ideas... Like, a blog post is this." If anyone knows the Open -- is it OpenGraph API, or OpenAPI?

**Nick Nisi:** Yeah.

**Fred K. Schott:** \[21:57\] There actually is this already repository; it's like this full -- like, anything in the world can be categorized via this schema. Schema.org is like essentially like anything in the world can be categorized and schema-fied. Your house can be represented in a schema from schema.org.

We were originally planning to ship like "Here's what a blog post is", but realized developers don't really have a consistent idea of like the five properties. Some people like Date, some people like Created at and Updated at, some people like -- essentially, everyone is coming with their own idea, because this has never existed.

The other problem schema.org has is there's a hundred properties for a blog post, because they're trying to be comprehensive. So you might only need five, but it's probably not these same overlapping five properties that I need, that Kball needs... So we ended up really struggling with like "Okay, what is a good developer experience around a hundred different properties? ...all of them optional, because none of them are required." And I think that's the next step here, is can we come up with a consistent, like "Here's a blog, so now every theme in our ecosystem implements that same consistent blog type", and now any post that you write, you can almost switch themes in and out without too much work. That would be the goal of this, but the problem is no one's writing their content the same way, so we're a couple steps off. But absolutely, that's so interesting you say that, because I think that was the first thing that clicked for us, is like "Our ecosystem could become more powerful because we have this feature."

**Nick Nisi:** Yeah, I wasn't sure if there was a way -- like, the thing that led me to that question was like looking at the content collections documentation, and kind of trying to understand that.. It has a newsletters section, for example, and that might have different properties than a blog post, for example.

And then another thing I wanna ask about is - like, with the .astro files I think it's really cool that you get to own that a little bit more, you get to come out of preconceived notions about what a file is, if it's a ts file, or a tsx file, what it has in there, the syntax, and you get to kind of define your own playground a little bit more when you have that... And I'm playing around a lot with language servers, and I noticed that there is an Astro language server as well, and I was curious how that ties into this. Is that what's really powering the type-safe Markdown and different aspects of that?

**Fred K. Schott:** Yeah, so the type safety is really interesting. There's a couple of pieces at play, but yeah, the dev tools I think deserve a huge shout-out, especially -- if anyone tried \[unintelligible 00:24:17.19\] Like, we barely had syntax highlighting, let alone any sort of developer tools experience in VS Code... Erika on our team has done an incredible job over the last year building that out to something really powerful... So that is what is exposing the type information back to you, but it's also being powered by our compiler, and then these content collections are essentially looking at your schema and creating types automatically for you, so that when you go and query "Give me all my blog posts", we've done the kind of stitching together to make sure that it knows "That blog post has this type."

This is actually all powered by a really cool library called Zod, which is essentially this schema validation built for TypeScript. So it's powering both the validation for us, and also then the types that you get back based on the type you define. So you give us the title description, we're gonna make sure that object has those properties. Set them as optional - they're optional; set them as required - they're required. It's really, really powerful, and kind of wrapped in a super-simple API.

**Nick Nisi:** It's awesome.

**Fred K. Schott:** One more thing I'll add - and feel free to slot this in however you want - the idea of being TypeScript-first is something that's very... Kind of new to us. We were a little bit like -- we built Astro, and we wanted it to be kind of TS for the people who want it, JavaScript for the people who don't, and then kind of realized "Well, we kind of have to choose one." We need TypeScript in some capacity, so to support it... It's also so flexible. TypeScript is a superset, so JavaScript is still valid TypeScript.

We ended up essentially just shipping full TypeScript support in Astro. So we never really talk about it, but Astro is -- there's no way to turn TypeScript off. You can make it super-relaxed, but it's this really interesting thing where it's always on, and it's your choice to write TypeScript or just write JavaScript. Our idea is that we can get out of the way if you're writing JS, but it's there if you want it.

\[25:59\] So we're kind of surprisingly -- especially with this release, we are very TypeScript-focused and first, in a way that I think a lot of other frameworks are still figuring out... But we kind of just accidentally built it, and now we can't turn it off... So if you love TypeScript, we are fully, 100% TypeScript at this point... And it lets us do some really cool things.

But yeah, going back to your point about the fact that we have our own language - we can kind of hide the fact that it's TypeScript for the people who don't want it, because you're not doing .ts, you're doing .astro, regardless of whether you're using it or not.

**Nick Nisi:** Yeah. That's music to my ears, TypeScript-first. Obviously. Yeah, I'm very excited about that.

**Fred K. Schott:** Although -- I don't know if y'all saw the State of JS Survey, but I think there's more people writing TypeScript now than JavaScript, so that is...

**Kevin Ball:** Absolutely.

**Fred K. Schott:** ...a wild change in such a short amount of time.

**Nick Nisi:** Yeah. That's amazing.

**Kevin Ball:** Well, and part of the reason is it's become so easy, right? Everybody's packaged everything up. And there's type support for pretty much anything you're gonna pull in at this point. So I think we've reached a critical mass where the default for many, many people is now "Okay, I'm gonna use TypeScript because it's just as easy to set up as JavaScript, and it's gonna save me headaches."

**Nick Nisi:** Well, and I think that there's just a huge benefit to VS Code being one of the most popular editors, and you just kind of get that for free, whether you want it or not...

**Fred K. Schott:** Yeah.

**Nick Nisi:** ...for your JavaScript.

**Fred K. Schott:** That's so funny. Yeah, you could be writing JavaScript and you're still benefitting from your dependencies having been written in TypeScript, because VS Code is still analyzing and giving you that data back. That is probably the sneakiest, best thing they ever did for the ecosystem. There's some really cool stuff in there.

**Kevin Ball:** Well, and the addition of being able to use docstring style typing and things like that, where folks who don't like the syntax of TypeScript can still benefit from type safety, and still layer that on... And the sort of ability to gradually add types... They did so many things right that have worked out for it.

**Fred K. Schott:** Yeah. That's an incredibly strong team, so yeah, we definitely -- if we had to bet on one technology... Yeah, the fact that they're so willing to kind of build for people who don't even like TypeScript is a huge sign of its strength.

**Nick Nisi:** Yeah. But also the innovation of -- like, the concept of language servers, which you benefit from as well having your own... I'm just fascinated by that, I guess; I keep going back to it. Like, you get to really control this whole world, and what you can present, and how you present it, and have a much more rounded and personal Astro development experience because of that.

**Fred K. Schott:** Yeah. There's a couple interesting decisions... We are not a Vite plugin. We are very much like you run astro dev, not vite dev. But yeah, I think that idea of owning the experience so that we can control it and make it great...

We actually -- so for some ancient history, originally, our compiler was a fork of Svelte's compiler. So we were actually super-Svelte-like in the earliest days. But we \[unintelligible 00:28:36.00\] but I'm gonna create an island that is also a Svelte component. How do I even know what --" Like, the fact that we can just kind of "Astro is Astro, it is its own thing" - that gives you the freedom to then basically treat every framework as equal, versus one is our favorite... And yeah, the context switching cost, obviously, is a part of that. But yeah, we were very Svelte-like in the earliest days, both technically and also in our syntax, and we kind of found our groove, especially for that more content-focused side. The things we could do that Svelte couldn't do started becoming more apparent.

**Kevin Ball:** So this idea of owning the compilation, which lets you do things... Svelte does a lot of magic with that; it lets them do some really interesting things syntactically, but also from an optimization standpoint. I'm actually talking later today with Miško Hevery, who's doing Qwik, which they're also doing all sorts of magic by owning the compilation process... I'd love to hear a little bit more about what types of things are you doing that take advantage of owning that. We talked about having a well-rounded developer experience, so Astro feels like Astro, and you talked about sort of being able to integrate different frameworks and have them all feel the same... But what else are you taking advantage of in sort of owning that whole package?

**Fred K. Schott:** \[29:53\] Yeah, that's a great question. Qwik is, I think, one step even further... To call them out, it's like, they use that compiler ownership to take a really interesting approach to hydration, or what they would call resumability... This idea of what you can do when you own the actual technical implementation. We're in an interesting spot where we've actually intentionally shot for the middle here. Very much the strength that we see is that we're not forcing you to throw away your framework, or letting you bring it with you. That idea means that we still then have to defer to that framework to do the rendering. So if you're using React, we're gonna call React. That's a huge shortcut for us. We're just gonna let React do its thing; it's great at rendering. But obviously, we're treating that island really isolated, not just from other parts of your page, but almost from our runtime. It is its own thing, running -- we can optimize the payload, we can make sure it's fast, but at the end of the day, if you're using React, it's gonna be slower than if you would have picked Solid, and we can only do so much there.

So I think we very intentionally made this choice to not reinvent the entire world, but instead reinvent the DX around how you use your framework components, and then bringing more server rendering into the world through the .astro component. So I think we almost -- it's such a technical break from the norm in terms of island architecture, but the reason everything exists is we wanted to get the DX totally right of "This should feel super-modern, it shouldn't force you to throw everything away", and the performance of islands will basically speak for itself. That's what we see the kind of being so opinionated about the way of thinking in islands \[unintelligible 00:31:25.01\] ironically bring more of what you're already using, versus having to throw things out and start from scratch.

**Break:** \[31:32\]

**Kevin Ball:** So I love the way that you're bringing islands architecture, which is something people have been talking about for a while, but making it centric to how you talk about Astro and what you're building there. There is a question that I have about islands, which is sometimes the components on our page just can't be completely isolated from one another. And a classic example in a content-focused site is e-commerce. You have a Buy button somewhere, and you have a shopping cart somewhere. And when you do the Buy button, something has to happen with the shopping cart, even though they may be on disparate parts of the page. So how do you deal with connections between the different islands?

**Fred K. Schott:** That's a really interesting problem to solve. It's funny, it's actually very different per framework. Some frameworks are really set up for this. So I'd say Svelte - its whole idea of passing state across your site is actually a primitive that they own, this idea of a store... Whereas React comes from much more of this Redux, like "All your state is managed in one place, globally, so everyone has to be talking to the same root for that to work", which islands very much break; you have two isolated islands, that have two different states in the Redux world. It really ends up being dependent on the state library. So we don't ship our own by default, we kind of leave that to you. For libraries like Svelte it means you can use your own, or for others - even the React ecosystem has newer takes to state management that follow a similar model of using your imports more in a managed state than having to think of it as a component concern, or a UI concern. Jotai is one of them, I believe. There's a couple of others... Yeah, essentially every ecosystem has one.

Yeah, it's a really interesting problem - different islands are running in isolation, so they need a way to pass state to each other. That's the easiest way to solve that problem. There's different ways to send messages, but you really do wanna kind of map it into something that was built for the framework, because that's gonna trigger a re-render... So you can always, you know, literally call a function that you somehow imported across islands, but we wouldn't really recommend that. We'd much more push you to use a state library that works with islands, and we have a couple of those recommended on our docs site if you are looking for advice or guidance.

**Nick Nisi:** Would React Query or TanStack Query be an example of one that would be supported?

**Fred K. Schott:** \[33:48\] Yeah, actually that's been probably the most interesting -- totally independent of islands is this idea of thinking of state as almost managed by the thing that's making the request to fetch that state for remote data. That's really interesting; so that's one step forward, which is the idea that two different islands, both querying the same data from an API using something like TanStack. They are both gonna still share the same cache ultimately. So one will make that request first, get it back after it comes back from the server, the next one will actually be able to use the same cache. So it's like this global shared caching thing, but each one is still managing their own state. You're just speeding up the idea of requesting data. That's a really powerful pattern that actually works well with islands, instead of being a hindrance.

**Nick Nisi:** Yeah. That's awesome.

**Fred K. Schott:** Yeah. Tanner has done some really cool stuff with TanStack. I'll just shout out all of those projects... Which is funny, because some of the routing stuff is very much anti-SSR. So you'd think these projects would not be aligned, but the fact that we're taking over the server rendering actually makes it a little bit more fitting to use something that's just so fully frontend router-centric. We had this kind of unspoken \[unintelligible 00:34:47.17\] for Astro, that is the idea of like some part of your site can just be like the SPA. So if you have a marketing site, but then you want one thing to just be your dashboard that you log into, you can essentially just -- again, we go back to that bloated island concept... Your whole page could be an island that is essentially a SPA. Like a SPA injected into Astro itself. And then you can use a much more frontend app, like developer experience, using something like TanStack, React Router... These things can -- instead of having to build SSR into those, you can almost like "Well, this is my admin dashboard. This isn't even meant to be indexed. This is meant to be a super logged in experience." You can still do that with Astro without giving up that developer experience.

**Kevin Ball:** Would we call those continents?

**Fred K. Schott:** Yeah, exactly. \[laughs\] The trenches...? I don't know. The earliest names for this project were all puns on different bodies of water or bodies of land.

**Kevin Ball:** Well, should we talk a little bit about how far you've come, and Astro's impact on the world so far? We just did an episode on the State of JS, and Astro featured pretty prominently.

**Fred K. Schott:** Oh, nice. Yeah, I've been looking at that data, too. I'd be curious what y'all thought about the survey overall.

**Nick Nisi:** It's been surprising.

**Fred K. Schott:** Sorry, let me shut up. \[laughs\] I'm not the interviewer; I'm taking us on a tangent here. Never mind, ignore me.

**Nick Nisi:** No, I think it's been surprising. We talk about it on a show, so we'll have a link to that episode... But overall, I think there's a pretty good, a very large set (compared to the previous year) of respondents, and there's a lot of good data in there. It's very interesting that -- like, React is still king when it comes to usage, but it's thrown a slipping in terms of like... I forget what they call it. It's like interest and retention...

**Fred K. Schott:** Yeah.

**Nick Nisi:** Those have been supplanted by other things, maybe like Astro. I think Astro is number one in both of those, actually.

**Fred K. Schott:** Yeah, so it was a really strong year for us. We actually were lucky enough - we were on the survey last year, got good ratings, but I think our usage was like 3%. We were still v0... I think it surely made a big splash, but 3% usage is pretty small. I think that tripled out to close to 10%.

**Nick Nisi:** Nice.

**Fred K. Schott:** And yeah, retention and interest were the two that I think we've beat out, kind of number one slots in both of those, so that was really exciting for the project. Yeah, I thought it was a really interesting survey. On my Twitter account I did like a deep-dive where I'm going through the data, because I think there's a couple interesting things there. One was what you all are speaking to, this idea of like "Is there interest in something new?" There were a couple of the \[unintelligible 00:37:12.12\] One was "Is JavaScript moving too fast?" Which is like -- I remember five years ago that was such a meme; everyone though it was moving too fast. ESM was coming, React had just come out, so we were still thinking in Backbone... It was just like a lot of churn in npm, and JavaScript, and frontend, and it was very scary. But if you look at that survey, they've been asking that for like six or seven years now - it really stabilized over the last three years, to a place which seemed pretty like "No, it's not moving too fast."

**Nick Nisi:** Yeah.

**Fred K. Schott:** And this was the first year where all of a sudden that started to trend back into the other direction. It was a pretty significant reversal. I think that comes from an interest in like -- or maybe it's like people aren't satisfied, so they're going out and trying new things... And other people maybe are satisfied, maybe they just do something that work, and that's their stack, but they see this activity, they see the water is maybe still on the surface, but it's really churny below the surface, and I think that's what the data really stood out to me, is for the first time there's a real interest in a project.

\[38:16\] So Astro did very well, Solid did very well, Qwik did very well... These were all on the top of that chart, of not just interest, but also developers who use it come back to it, and I think that's what's really interesting. That wasn't the case two years ago. People were happy with the current state of things, and weren't really -- like, outside of our small community, which was starting to grow... But this is a fairly new story after many years of kind of peace and quiet.

**Nick Nisi:** Yeah.

**Fred K. Schott:** So it was probably one of the most important State of JS surveys that I saw, in terms of showing that reversal of stagnation and into trying new things. Some of them will work, some of them won't, but there's clearly an interest that is growing into now usage for the first time in a while.

**Kevin Ball:** I think tied to what you were talking about earlier, people are starting to realize that using React for everything is over-engineering for a lot of problems. And on that same survey you can see React going up and up and up in usage, and then sort of topping out. Everybody's using it... But maybe not everybody's excited about using it anymore. Maybe some folks are starting to say "Hey, you know what - I'm building a blog. Do I really need Create React App?" ...or Next, or something like that.

**Fred K. Schott:** You're making me really wanna do like a "What is every framework's biggest challenge right now?" If I had to answer that for React - they've hit that level where the problems they have left to solve are really complicated... And I think their biggest challenge is solving it in a way that it doesn't alienate your users, for that exact reason. It's like, not everything needs to be solved by React. What they're doing with Server Components is gonna involve moving your fetch -- like, they're gonna polyfill fetch so that it works with the rendering logic. At what point does a library that started very focused on UI become like the Angular equivalent? There's a certain point where you keep doing more and more that you will hit that.

**Nick Nisi:** Yeah.

**Fred K. Schott:** So can they walk that line? And yeah, I think there's a natural interest in "Not everything has to be solved by this thing." So what does that look like in the future, when they actually have a solution? Are developers gonna want that? Are they gonna keep going for other options in the ecosystem? Are they gonna try something new, like Solid?

**Nick Nisi:** I think when they're that big, they have this much market share, and this much usage, it's really hard for them to inject any further opinion, because they're gonna alienate someone at some point. But that does leave a lot of room for smaller frameworks to come up and add opinion to that. Arguably, Astro does that a little bit, because it supports React. You can still write React, but do it in a more opinionated way, with this full ecosystem around it to support the needs that Astro is trying to solve, the problems that Astro is solving. And the same thing with other frameworks, and they can take ideas from that and kind of build on it... But the core ideas there are kind of solidified.

**Fred K. Schott:** And I don't say like it becomes like Angular as an insult at all. The best thing you can do is become like jQuery. It's not cool anymore, but oh my God, it became so popular it became a part of the browser. A project has a lifecycle; I am starting to see that story play out more and more, of where is a project. There is no such thing, at least there never has been a history of like a forever library, a forever framework. So \[unintelligible 00:41:19.16\] late stage of its life is really interesting to me.

**Kevin Ball:** That speaks to the cycles that we were talking about, right? The last time we had this much consolidation behind a single way to do things, it was jQuery. jQuery owned the market. Everybody was doing jQuery. And then it started to reach limitations in terms of how complex of an application you could build, and so you saw people trying to overcome it with Backbone, and then what really broke through was React and this concept of component-centric app development. And Angular was trying to do it... You had a whole bunch of frameworks trying to do that. Well, okay, that idea has won. We're writing frontend applications using component-centric architectures. It works better than what we had done before. React has won that market. What's the next thing that's coming up?

\[42:05\] We're starting to see this diversification again of ideas and people trying to play in that space, and I think it's related to what you were talking about - the bloat, the sense that all of this going to the client is too much for most situations, and it's slowing things down.

This is something that I feel like has gotten a lot of developer mindshare in the last few years. We talked about it in an episode that shipped a couple weeks ago around the rise and fall of JS frameworks; Chris Ferdinandi, with his very strong opinions about this... But I think there's been momentum behind this idea that "You know what - we should actually only be shipping what we need to ship, the complexities that we absolutely need to do the job that we're trying to do." And that has traction in a way that two or three years ago it did not.

**Fred K. Schott:** Yeah, I think we're talking about \[unintelligible 00:42:51.07\] you solve a problem, but then you create a slightly smaller problem. So the thing you've done is better than the alternative, but it doesn't mean it's painless, because you've made trade-offs that create problems. And then that becomes so popular, and it gets so big that then that problem becomes bigger, so now people wanna solve that... But yeah, it is a pendulum. I think the DX that was created by this SPA mentality was so far and above what was there before, but then performance just grew and grew and grew. I don't think Astro would have succeeded four years ago, because I don't think people had the same problems they have now. This late in the story it's only getting worse, it's starting to hit a breaking point, and I think that's where we find ourselves now.

**Nick Nisi:** I'm just looking through this thread that you have on the State of JS results... There's a lot of good insights.

**Fred K. Schott:** I would call out -- I think the interesting part of React and Next sort of like merging a little bit right now is Next.js I don't think is... That's a strong project, that people are very happy with, and that's starting to become -- it's gone from like "Wow, they're doing a great job" to like "This is fairly abnormal." I think it speaks to the fact that React is so big, and there's not really a competitor to Next. You can think of SvelteKit and Nuxt on the Vue side, but everyone's so framework-specific... No one really -- Remix is I think the first time I've seen a second framework for an ecosystem come along and really challenge it... So I really wonder how much of that is like there just aren't really other alternatives in the React ecosystem, and the fact that React is so big, it just kind of like by default is like the top of that food pyramid... But at the same time, it also speaks to just people are happy; like, they're not really looking around for other things... Maybe because they don't have other things in front of them, but also it'd be very different if it's like "I use it, but I hate it." If interest was low, there'd be a real risk there. But I think it speaks to the strength of that team continuing to innovate. There are huge risks to continuing to change things at this late stage, but there are big rewards to staying top of mind, and keeping your number one spot as the most popular -- you know, you're not the newcomer anymore.

**Kevin Ball:** So speaking of innovation, we've talked a lot about Astro 2, which will be launching right as this episode goes live... What are you looking forward post-release? What's next on the horizon? What is the focus area for the Astro team coming out of the release?

**Fred K. Schott:** Yeah, we've got a couple things going on. This is actually going to be the first time we're opening up our roadmap. v1 was just "Get it out", and v2 is the first time we really had to step back and like "Alright, what's next?"

We've had an RFC process, we've had an open development process for a while, but that was always a little tough to see into what was the status on anything... So we just revamped that, and actually leaning on some of the writing that the Remix team did on this, and the idea being that from that process we will actually get essentially a roadmap that you can see what's being prioritized, you can get involved, you can help out... That's something I'm really excited about going forward.

In terms of what actually goes on that roadmap, I think it's a little bit more open. We've got some really cool stuff going on around -- this term "primitives" I'm really loving right now, so the idea of the primitives of Astro images, analytics... Like, how are all these things that you use within Astro, fonts and icons, how are all these things you use to build your site managed within your project?

\[45:58\] Right now there's still a lot of like "Throw it in this directory and reference it by URL", but seeing how successful Next has been with their image component, with their font component... There's some really cool stuff. Party town is a really cool project to move scripts off of the main thread. I'm really excited about this idea of instead of going big picture for a while, let's just focus in on these really key features that our users are actually working with every day... So I think we're gonna see a lot of that coming out in the next couple of months.

**Nick Nisi:** That's really cool, and I think it's going in a really good direction. I can't wait to open up the roadmap and kind of see, as that goes forward into 2.0 and beyond... And we've talked about the State of JS survey, and kind of the big wins that Astro has had... But I'm curious if you have any other sources of inspiration for really cool things that have been going on within the Astro community, that aren't highlighted on that survey. Is there something that somebody cool is doing with Astro right now that you wanna shout out?

**Fred K. Schott:** God, yeah, there's a couple things... So one thing I'd say is -- because it's gonna be around the time of this coming out... A really cool thing that our community does is every couple of months we will take our Open Collective funding - we're lucky to have a couple of great sponsors; Netlify, Storyblok... We get about $8,000 a month in that sponsorship, and we really take it seriously, like "How can we use this for our community?" One of the things we ended up doing is every couple of months we'll actually just take 100% of that and essentially give it back to the people who are building our community.

People have done great learning resources, great projects, great packages, themes... It's kind of a chance to let the community vote on who the stars in the community have been, and then actually give them this open source funding, which - that's exactly what it's for, is for growing and investing in our own ecosystem. So I actually won't pick any favorites, I won't show my hand... That's coming out I think on Thursday of the week that this podcast is coming out.

**Nick Nisi:** Nice.

**Fred K. Schott:** But yeah, I would say that the ecosystem overall has just kind of exploded over the last year... So I'll shout out our themes; I think it's been the most exciting thing. There was a while where our official themes were kind of gnarly... And we've been investing in ours, but at the same time there's five other great community themes that are equal quality to the new one we're building. It's like "Oh, alright--" Before, we were the only ones, and we really had to do it, and now we're sharing that load with the community. Those themes are really, really strong.

**Nick Nisi:** Nice.

**Kevin Ball:** Oh, man... I just got back to thinking about themes, and images, and this stuff you're talking about, and how they play with your type-safe Markdown. Imagine treating images as a content type, and maybe it's a folder, it has a set of files, the image are different sizes, it has some metadata, alt text, things like that, and you just plug it in somewhere.

**Fred K. Schott:** So the meme on the team has been like "Everything is content."

**Kevin Ball:** Everything is content.

**Fred K. Schott:** Because we were doing the RFC, we were talking with our community, and it's like "What about this?" It's like, everything is content. We talk about content as the thing that your website exists to describe... But yeah, once you start to think in this way, it's hard to shake it. I think that's the kind of genie that we've let out of the bottle and it's not going back in. It's like, everything's type-safe by default; because we own the dev experience, we can essentially guarantee that in a way that like -- we still have to honor this idea of like "We're not gonna force you to write TypeScript if you don't want to."

So those two ideas are kind of in conflict, but I think stuff like that shows that there is a middle path there where great libraries can generate the types for you for free, without forcing you to write them by hand. So that is a pretty big part of our strategy going forward, until we find a reason not to use it; people seem to really be resonating with it, and it gives you so much for free.

**Nick Nisi:** It really is amazing. Now, as this episode goes out, Astro 2 will be available... And how can people get started with it? What's the one thing they should do to jump right in?

**Fred K. Schott:** That is a great thing to be mentioning \[unintelligible 00:49:29.12\] astro.build is our website. There's all the instructions you need there. There's gonna be a great blog post kind of summarizing what's going on. Our docs team has just been killing it with the migration guides, upgrade guides... So if you have an existing project, plenty of resources there for you. And if you're running a new project, you can either do it on the command line with npm create astro...

**Nick Nisi:** Nice.

**Fred K. Schott:** ...or astro.new. It's the website that essentially open up Astro in the browser using StackBlitz. Shout-out to StackBlitz. So if you're just kind of dipping your toes in, trying to see what it's about, you don't even have to run npm on your command line. You can just totally in the browser go to astro.new and check out the new stuff.

**Nick Nisi:** That's awesome. Such a great way to just immediately get people going without any kind of setup... Just take care of all of that and you can jump right in. I love that.

**Fred K. Schott:** Yeah. StackBlitz is magic. It's very cool. We're lucky to have them powering some of our stuff.

**Nick Nisi:** Awesome. Well, Fred, thanks so much for coming on and telling us about Astro 2, and all of the cool stuff that you're doing. You're welcome back any time to continue this discussion, to talk about Astro 3 and beyond, and all of the amazing work that you're doing in the JS and web community. So thanks for being a part of it, thanks for \[50:45\] and we will see you next time.

**Fred K. Schott:** Right on. Thank you so much for having me.
