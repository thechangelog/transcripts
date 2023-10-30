**Jerod Santo:**

What up, nerds? I'm Jerod and this is Changelog News for the week of Monday, October 30th 2023.

Move over, T. Swift! [Changelog Beats](https://changelog.com/beats) logged over 5k streams in our first week as an 'artist'. Now if we could just get one of our tracks into a viral TikTok dance challenge...

Oh, and we'll be at [KubeCon NA 2023](https://events.linuxfoundation.org/kubecon-cloudnativecon-north-america/) next week! No booth this time, so you'll have to reach out to meet up or hope you run into us wandering around in the hallways like everyone else.

Ok, let's get into the news... which is admittedly web dev heavy this week.

**Break:**

**Jerod Santo:**

The hubbub of the web dev world right now is Next.js' integration of [React Server Components](https://react.dev/learn/start-a-new-react-project#bleeding-edge-react-frameworks), specifically the `use server` directive which lets you write React components that run SQL queries and presumably other server-side things.

People's gut reaction to this has been all over the map. You may be having a guttural reaction right now. Maybe it sounds super powerful and expressive to you. Maybe it sounds super dangerous and sloppy. Me? It reminds me a lot of the `index.php` files we wrote at the turn of the century, which isn't something I want in my life anymore... but I'm withholding judgment until I see more.

In the wake of this divisive news came criticism / acclaim for Next.js itself (even though it is the React team enabling/promoting the behavior). Which leads us to our next headlines...

**Break:**

**Jerod Santo:**

Kent C. Dodds is a [Remix](https://remix.run) guy, so it's no surprise that he prefers it over Next. But he gets asked a lot _why_ he prefers it, so he wrote down his reasonings, with the following disclaimer:

> I like to focus most of my time and attention on the positive side of software development. I would much rather write a post titled “Why I Use Remix” and written about the things I love about Remix (I have already done this). But a lot of people have asked me specifically about Next.js and this post is for them
>
> I’m not here to “bash on Next.js.” I’m just here to add an honest take of my personal perception and experience with Next.js. If you’d rather not hear negative things about Next.js, then I invite you to stop reading now, go outside, and touch some grass.

I'll give you the bullet points and you can click through for the full explanations, if you're interested:

- Next.js doesn't always use/promote the web platform
- Next.js is attached to Vercel (both dev and easy deploy)
- Next.js is eating React
- Next.js has too much magic
- Next.js is getting overly complex
- Next.js favors features over stability

**Break:**

**Jerod Santo:**

In response to Kent's post, Lee Robinson (VP of DX at Vercel) makes the case for Next.js, with the following disclaimer:

> Kent is an incredible member of the React community. I've learned a lot from him over the years (especially his material on testing) and this blog actually uses a library he created, mdx-bundler, so thank you.
>
> If you're new here, I'm Lee. I work on Next.js. I've also made some courses about using Next.js before I joined Vercel. Both Kent and I are passionate about the tools that we use...
>
>  I'm often asked about my opinions on Next.js versus other frameworks. This post is for the folks in the Next.js community who are wondering about some of the points Kent brings up.

I'll give you the bullet points and you can click through for the full explanations, if you're interested:

- Learning Next.js helps you learn the web platform
- All Next.js features work self-hosted
- Server Components and Server Actions are independent of Vercel
- The React canary channel is stable for frameworks like Next.js to adopt
- Server Components are production ready

**Break:**

**Jerod Santo:**

It's now time for Sponsored News!

Socket for GitHub protects your apps from those dreaded supply chain attacks right where you live: Whenever a new dependency is added in a pull request, Socket analyzes the package's behavior and security risk.

The best part: Socket is quick and easy to install! Just install the official GitHub app from the marketplace, choose the repos you want it to protect & Socket will automatically analyze your project and keep them secure. Too easy! But don't take our word for it... [Check it out for yourself](https://socket.dev/features/github?utm_source=changelog&utm_medium=newsletter&utm_campaign=changelog-news) using the link in the show notes and chapter data.

Thanks again to Feross and our friends at Socket for sponsoring this week on Changelog news.

**Break:**

**Jerod Santo:**

The NixOS team has successfully perfomed a reproducabile build of a) All packages that make it into the ISO, and b) The building of the ISO itself. This is progress from the 2021 announcement, which only reproduced the individual packages. Why are [Reproducible Builds](https://reproducible-builds.org/) important?

> While there are a number of ‘side-benefits’, the main point of Reproducible Builds is that it gives us a reliable way to verify the binaries we ship are faithful to their sources, and have not been tampered with anywhere in the build pipeline (e.g. on Hydra).

They still haven't arrived at the promised land yet, because there's a lot more to to reap the benefits of reproducibility, such as removing a few hacks they put in to achieve this, making more packages reproducible, setting up infrastructure so they can regularly independently rebuild artifacts, and more. But, progress!

**Break:**

**Jerod Santo:**

[OpenSignLabs](https://www.opensignlabs.com)' mission is to democratize the e-signing process, making it accessible and straightforward for everyone. The software currently features secure signing, a user-friendly interface, audit trails, and an API for integration into other software and services. Host it yourself (React, Node.js, MongoDB) or use their cloud hosted version.

**Break:**

**Jerod Santo:**

That's the news for now, but we have some great pods coming up this week! On [Tuesday](https://gotime.fm): Filippo Valsorda & Roland Shoemaker from the Go Team talk cryptography libraries on Go Time. On [Wednesday](https://changelog.fm): Jean Yang joins Adam and I for a deep-dive on API observability. [Thursday](https://jsparty.fm) brings Valerie Phoenix from _Tech By Choice_ on JS Party and [Friday](https://changelog.com/friends): we have The _mysterious_ Breakmaster Cylinder on Changelog & Friends

Have a great week, **tell your friends about Changelog News** if you dig it, and I'll talk to you again real soon. 💚
