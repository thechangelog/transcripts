**Jerod Santo:**

What up, nerds? I'm Jerod and this is Changelog News for the week of Monday, March 11th 2024.

Crazy times: both Bitcoin and Linux are at all-time highs while Python's GIL has reached its lowest point ever. The ability to disable it altogether [just landed](https://github.com/python/cpython/pull/116338) on Python's main branch.

Ok, let's get into the news.

**Break:**

**Jerod Santo:**

[Puter is the internet OS](https://github.com/HeyPuter/puter)

> Puter is an advanced open source desktop environment in the browser, designed to be feature-rich, exceptionally fast, and highly extensible. It can be used to build remote desktop environments or serve as an interface for cloud storage services, remote servers, web hosting platforms, and more.

I've been around long enough to see a bunch of "desktop OS in a browser window" demos and toys, but this is the first time I've been impressed by one long enough to keep the tab open longer than 30 seconds. From the URL structure, to the cloud storage integration, to the developer portal... Puter strikes me as an actually viable internet-based operating system with potentially real-world use cases. And that's saying a lot!

Oh, and it's almost entirely built with vanilla JavaScript and jQuery... so you know the devs haven't cargo-culted together something they can't grow & maintain.

> For performance reasons, Puter is built with vanilla JavaScript and jQuery. Additionally, we'd like to avoid complex abstractions and to remain in control of the entire stack, as much as possible.
>
> Also partly inspired by some of our favorite projects that are not built with frameworks: VSCode, Photopea, and OnlyOffice.

**Break:**

**Jerod Santo:**

[Optimizing technical docs for LLMs](https://docs.kapa.ai/blog/optimizing-technical-documentation-for-llms)

SEO is looking old & dusty but LLM-O is certainly on the rise. This list of best practices by the kapa.ai team looks like a great place to start thinking about the subject. Their bullet points:

1. Embrace Page Structure and Hierarchy
2. Segment Documentation by Sub-products
3. Include Troubleshooting FAQs
4.  Provide Self-contained Example Code Snippets
5. Build a Community Forum

Each of these subjects is treated in detail along with a few more practical tips at the end.

If you missed our conversation with José Valim about Elixir's unfortunate (but perhaps short-lived) lack of LLM optimization, here's a clip from that conversation.

**Clip from Changelog & Friends 28:**

[José Valim on creating a custom GPT for the Elixir community](https://www.youtube.com/watch?v=sl7Dz1YSdU4)

**Break:**

**Jerod Santo:**

It's now time for Sponsored News!

Is your code getting dragged down by JOINs and long query times? The problem might be your database…Try simplifying the complex with graphs.

A graph database lets you model data the way it looks in the real world– instead of forcing it into rows and columns.

Stop asking relational databases to do more than they were made for. Graphs work well for use cases with lots of data connections like supply chain, fraud detection, real-time analytics, and genAI.

With Neo4j, you can code in your favorite programming language and against any driver. Plus, it’s easy to integrate into your tech stack.

People are solving some of the world’s biggest problems with graphs…Now it’s your turn.

Visit Neo4j.com/developer to get started

That’s (spell out) N E O 4 J dot com slash developer

**Break:**

**Jerod Santo:**

[Daytona is an open source Codespaces alternative](https://www.daytona.io)

We all know the pain of setting up a new development environment, and with the constant job churn in the tech industry, just imagine how much productivity is lost world-wide to the process. The promise of Daytona is big: just execute `daytona create` and you'll be up and coding:

> Daytona automates the entire process; provisioning the instance, interpreting and applying the configuration, setting up prebuilds, establishing a secure VPN connection, securely connecting your local or a Web IDE, and assigning a fully qualified domain name to the development environment for easy sharing and collaboration.
>
> As a developer, you can immediately start focusing on what matters most—your code.

It can be self-hosted and uses the [Dev Containers](https://containers.dev) spec so trying it out should be pretty easy if you're already set up on Codespaces or CodeSandbox. Is this subject worth another Changelog Interview? Let us know in the comments.

**Break:**

**Jerod Santo:**

[Gleam v1.0 has been released](https://gleam.run/news/gleam-version-1/)

The Gleam language is, in their own words:

> The power of a type system, the expressiveness of functional programming, and the reliability of the highly concurrent, fault tolerant Erlang runtime, with a familiar and modern syntax.

Because it runs on the [BEAM](https://en.wikipedia.org/wiki/BEAM_(Erlang_virtual_machine)), Gleam inherits a rich ecosystem of Erlang & Elixir open source libraries. Because it compiles to JavaScript, Gleam can run in the browser. Because it isn't a project from Microsoft or Google, Gleam is powered by a community of passionate people. Here's what v1 means, according to the announcement post:

> Version 1 is a statement about Gleam’s stability and readiness to be used in production systems. We believe Gleam is suitable for use in projects that matter, and Gleam will provide a stable and predictable foundation.

**Break:**

**Jerod Santo:**

[Rolldown is a JavaScript bundler written in Rust](https://rolldown.rs)

Rolldown is intended to serve as the future bundler used in [Vite](https://vitejs.dev/) (frontend tooling from the Vue team). It's currently in active development and isn't ready for prime time yet, but they're building it because Vite currently depends on two bundlers:

- esbuild (blazing fast and feature rich, but its output, especially in terms of chunk splitting limitations, is not ideal for bundling applications.)
- Rollup (mature and battle tested for bundling applications, but is significantly slower than bundlers written in compile-to-native languages.)

If it fulfills its goal, Rolldown will replace these with a singular solution that provides the best of both worlds. It will also be usable outside of Vite, of course, so many projects can benefit from these efforts. Excited about that future?

> Rolldown is still in early stage. We have a lot of ground to cover, and we won't be able to do this without the help from community contributors. We are also actively looking for more team members with long term commitment in improving JavaScript tooling with Rust.

**Break:**

**Jerod Santo:**

That's the news for now, but it's time once again for some [Changelog++](https://changelog.com/++) shout outs!

**SHOUT OUT** to our newest members: Pontus H, Christian K, Putu W, Eric C, Jan K, Adam S, Jon J, Matthew B, Jordan P, Niklas S, Paul W, David M, Alex B, Steve B, Alex L, Ryan B, Marouane T & James T!

_We appreciate you_ for supporting our work with your hard-earned cash.

(If [Changelog++](https://changelog.com/++) is new to you, it is our membership program you can join to ditch the ads, get closer to the metal with bonus content, receive a free sticker pack in the mail, directly support our work & get shout outs like the ones you just heard. ☝)

Have a great week, **leave us some kinds words** [using the form in the show notes](https://changelog.typeform.com/to/A6Q3aUTb) if you dig it & I'll talk to you again real soon. 💚
