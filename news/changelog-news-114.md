**Jerod Santo:**

What up, nerds? I'm Jerod and this is Changelog News for the week of Monday, September 30th, 2024.

Soooo the WordPress mess (implosion?) is almost too much for me to pick a single, canonical link to summarize it. BUT I also don't want to do an *entire* episode about that one story. What's a guy to do?

Punt it entirely to the bottom of the newsletter but make up for it with a rock-solid meme + an (un)ordered list of links! To review, the WordPress mess is today's newsletter (link in the show notes) the audio version remains squeaky clean.

Ok, let's get into the rest of the news.

**Break:**

**Jerod Santo:**

[Display custom maps on your website for free](https://openfreemap.org)

OpenFreeMap takes map data from OpenStreetMap and serves up the necessary tiles (in various [styles](https://github.com/hyperknot/openfreemap-styles)) for anyone to render them on their website (or app) for zero dollars. Kinda amazing:

> Using our public instance is completely free: there are no limits on the number of map views or requests. There’s no registration, no user database, no API keys, and no cookies. We aim to cover the running costs of our public instance through donations.

That sounds almost too good to be true... and it is, if nobody steps up with recurring donations. However, the service's creator, [Zsolt Ero](https://hyperknot.com), has taken a few steps to make sure it's not prohibitely expensive:

> There is no tile server running; only nginx serving a Btrfs image with 300 million hard-linked files. This was my idea; I haven’t read about anyone else doing this in production, but it works really well.
>
> There is no cloud, just dedicated servers.

**Break:**

**Jerod Santo:**

[How I designed a Dieter Rams inspired iPhone dock](https://arslan.io/2024/09/23/dieter-rams-inspired-iphone-dock/)

I'm beyond impressed by what Fatih Arslan was able to create with nothing but some old Braun catalogs, a 3D printer & some serious iteration:

> I'm still astonished by what you can do with CAD software and a 3D printer at home. Even though I'm a software engineer, it allows me to experiment with other arts and skills in my spare time.

You'll have to check the chapter image or newsletter to see for yourself. You can download the 3D model for free, but he also created a [Gumroad page](https://fatiharslan.gumroad.com/l/dieter-rams-inspired-vintage-iphone-standby-dock) so you can donate as well.

**Break:**

**Jerod Santo:**

[Rewriting Rust](https://josephg.com/blog/rewriting-rust/)

Joseph Gentle thinks the Rust programming language feels like a first-gen product, kinda like the first iPhone. Tons of potential, but missing so much.

> I fell in love with Rust at the start. Algebraic types? Memory safety without compromising on performance? A modern package manager? Count me in. But now that I've been programming in rust for 4 years or so, it just feels like its never quite there.

Sometimes he lies awake at night and fantasizes about forking the Rust compiler.

> I know how I'd do it. In my fork, I'd leave all the rust stuff alone and but make my own "seph" edition of the rust language. Then I could add all sorts of breaking features to that edition. So long as my compiler still compiles mainline rust as well, I could keep using all the wonderful crates on Cargo.

In the linked post, Joseph lays out what his fork would look like (in extreme detail). The sub-headings:
- Function traits (effects)
- Compile-time Capabilities
- Pin, Move and Struct Borrows
- Comptime
- Weird little fixes

Perhaps you're thinking what I was thinking: why doesn't Joseph get involved and help move Rust in the direction he wants? Perish the thought...

> A few years ago I would have considered writing RFCs for all of these proposals. But I like programming more than I like dying slowly in the endless pit of github RFC comments. I don't want months of work to result in yet another idea in [rust's landfill of unrealised dreams](https://doc.rust-lang.org/reference/items/associated-items.html).


**Break:**

**Jerod Santo:**

It's now time for Sponsored News!

[System Initiative has launched](https://www.systeminit.com)

DevOps is now multiplayer! Here's what Adam Jacob, co-founder and CEO of System Initiative has to say about the challenges of DevOps before System Initiative.

> Part of the reason it's so hard for us to achieve the outcomes we're looking to achieve with the kind of DevOps and operational work that we do is because the tools we're using cause those tough outcomes. It's a lot harder to write static code, have your friends review it in a PR, and then turn that into infrastructure. That's alot of time and steps in the process of creating and managing infrastructure.
>
> System Initiative gives you a living architecture diagram to put together all the different relationships between the things that you use. Then you can program that architecture diagram to do all the stuff you need it to do. It automatically understands how to do things like, create resources and delete them, update their tags, or set IP address ranges. You can also extend it with your own custom policies and the whole thing happens in real time, in multiplayer. You apply that change set and it goes and makes that infrastructure real. You can see the real thing as real infrastruture. It's the coolest thing in the world. I'm so proud of it.

Go to [systeminit.com and get started](https://www.systeminit.com) in just three clicks. They have an awesome free tier. No credit card required.

**Break:**

**Jerod Santo:**

[Web Components are not the future](https://dev.to/ryansolid/web-components-are-not-the-future-48bh)

The web dev community is debating the viability of [Web Components](https://developer.mozilla.org/en-US/docs/Web/API/Web_components) once again. There's been a lot of hand-wringing & hostility on the socials about this, but I think this post by Ryan Carniato & the below-linked rebuttal by Cory LaViska are both well-written and *pretty* well-reasoned stances. Ok this particular sentence is probably over the top:

> Web Components possibly pose the biggest risk to the future of the web that I can see.

Here's Ryan's major point:

> So the fundamental problem with Web Components is that they are built on Custom Elements. Elements !== Components. More specifically, Elements are a subset of Components. One could argue that every Element could be a Component but not all Components are Elements.
>
> So what? It means that every interface needs to go through the DOM. Some in well-defined ways that aren't a perfect fit, and some in newly defined ways that augment or change how one would deal with Elements to accommodate extended functionality.

Ryan believes this fundamental design flaw combined with the formalization (stagnation) that comes from standardization makes Web Components a cost not worth bearing. Cory disagrees...


**Break:**

**Jerod Santo:**

[Web Components are the present](https://www.abeautifulsite.net/posts/web-components-are-not-the-future-they-re-the-present/)

> It’s disappointing that some of the most outspoken individuals against Web Components are framework maintainers. These individuals are, after all, in some of the best positions to provide valuable feedback. They have a lot of great ideas!

I happen to think Ryan _is_ providing feedback, just not the kind of feedback Cory is referring to. Setting that aside, he directly answers to Ryan's "fundamental problem" quote from above:

> To be fair, I’ve never really liked the term “Web Components” because it competes with the concept of framework components, but that’s what caught on and that's what most people are familiar with these days.

"Framework components" is the answer to the "not all Components are Elements" issue. So your app might have some Web Components (that map to the DOM) and it might have some other components that don't. Makes sense to me.

> As to why Web components don’t do all the things framework components do, that’s because they’re a lower level implementation of an interoperable element. They’re not trying to do everything framework components do. That’s what frameworks are for.

Cory goes on to theorize that framework authors are against the web platform because Capitalism, which is probably over the top, but he finishes with this:

> The Web platform may not be perfect, but it continuously gets better. I don’t think frameworks are bad but, as a community, we need to recognize that a fundamental piece of the platform has changed and it's time to embrace the interoperable component model that Web Component APIs have given us


**Break:**

**Jerod Santo:**

That's the news for now, but we have some great episodes coming up this week!

- **Wednesday**: Pablo & Łukasz from core.py talking GIL-free Python 3.13
- **Friday**: Abi Noda from DX talking developer (un)happiness

Have a great week! Leave us a 5-star review if you dig our work, and I'll talk to you again real soon.
