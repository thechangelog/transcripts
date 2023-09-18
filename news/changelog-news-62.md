**Jerod Santo:**

What up, nerds? I'm Jerod and this is Changelog News for the week of Monday, September 18th 2023.

We're packing up our bags and flying out on Wednesday to sunny St. Louis for the LAST [Strange Loop](https://thestrangeloop.com)! If you're going to be there, leave us a comment and let us know so we can connect IRL. If not, stay tuned for some _awesome_ [conversations](https://changelog.fm) with "the creators and users of the languages, libraries, tools, and techniques at the forefront of the industry."

Ok, let's get into the news, shall we?

**Break:**

**Jerod Santo:**

Andrei Taranchenko says the software industry is learning once again that complexity kills and wonders: "How did we get here? How did our aim become not addressing the task at hand but instead setting a pile of cash on fire by solving problems we don’t have?"

He's talking about, microservices, of course! And in an attempt to answer this question, Andrei takes aim at JavaScript and NodeJS, which I tend to disagree with and may trigger you if you're of that ilk, but his overall point is about information silos: "my point really was more about the dangers of hermetically sealed software ecosystems that seem hell-bent on re-learning the lessons that we just had finished learning. We ran into the complexity wall before and reset - otherwise we'd still be using CORBA and SOAP. These air-tight developer bubbles are a wrecking ball on the entire industry, and it takes about a full decade to swing."

He then turns his attention to the VC-funded tech startup boom that only recently busted: Investors needed to see explosive growth, but not in profitability, no. They just needed to see how quickly the company could hire ultra-expensive software engineers to do … something. And now that you have these developers, what do you do with them? Well, they could build a simpler system that is easier to grow and maintain, or they could conjure up a monstrous constellation of “microservices” that no one really understands."

This post is salty, for sure, but there's also a lot of level-headed reasoning that is worth your consideration.

**Break:**

**Jerod Santo:**

Casey Muratori wasn't too surprised last week when Unity [announced a retroactive(!) change to its pricing model](https://blog.unity.com/news/plan-pricing-and-packaging-updates) from charging per-seat to per-install: "I do follow game business trends to a certain extent, and for well over a year now, I’ve been warning that Unity’s relationship with game developers would inexorably change for the worse. This was not based on any inside knowledge. It was based solely on the financials they report, and the kinds of statements they make to investors in their earnings calls."

The move sent shockwaves through the developer community (so much so that Unity has since announced they will soon be making changes to the new policy) and left many people looking for alternatives to Unity. In the linked post, Casey outlines a long list of options for folks, depending on their particular situation: Unreal, Godot, Defold, RayLib, Open 3D, Bevy & more.

Many people have opinions and advice on this subject. Check the newsletter for links to further reading.

**Break:**

**Jerod Santo:**

It's now time for Sponsored News, brought to you by Sentry!

Are your users facing embarrassingly slow page loads and rendering?

Let’s put a stop to that. Learn the basics of frontend application performance monitoring with Sentry in this upcoming livestream.

In less than 30 min, you'll be able to install & configure performance monitoring, interpret key metrics, and troubleshoot a performance issue. With visibility into end-user experience, you can build a blazing-fast app in record time.

This live tutorial is happening this Wednesday, September 20th. Sign up early using the link in the show notes to have your questions answered in the live Q&A!

**Break:**

**Jerod Santo:**

Pineapple ONE is a functioning 32 bit RISC-V (macro) processor built by 19-year old (!) Filip Szkandera over the course of two years. "We chose to build a cpu only out of discrete, off-the-shelf components. You heard it right, there is no FPGA nor any microcontroller, there are just logic gates and memories. Our goal is to prove that designing a “modern” CPU isn’t that hard, so we have released our schematics and made it open source as well."

Filip calls this "groundbreaking for homebrew CPUs" and put together [a great video](https://www.youtube.com/watch?v=KzSaFFpBPDM) demonstrating the hardware.

**Filip Szkandera:**

Clip from the demo video.

**Break:**

**Jerod Santo:**

Matt Basta tells the fascinating tale of the time he single-handedly built a web-based Excel clone for the data scientists inside Uber only to have the entire division sold to another company a week(ish) later. He learned _a lot_ about how Excel works and shares some of the interesting bits and he has a super healthy outlook on what happened to all his hard work: "My first reaction was to publish the code [on Github](https://github.com/WebSheets). My second reaction was to move on. There was maybe a part of me—my younger self—that was disappointed that this major piece of code that I’d labored over had been so gently used before being retired. I wasn’t recognized for it in any material way. My manager didn’t even know what I’d built.

On the other hand, we as engineers need to be real with ourselves. Every piece of code you write as an engineer is legacy code. Maybe not right now, but it will be. Someone will take joy in ripping it out someday. Every masterpiece will be gleefully replaced, it’s just a matter of time. So why get precious about how long that period of time is?"

**Break:**

**Jerod Santo:**

Pagefind looks pretty cool! It's a fully static search library that aims to perform well on large sites, while using as little of your users’ bandwidth as possible, and without hosting any infrastructure.

It runs after your SSG (Hugo, Eleventy, Astro, etc) does its thing and generates a static search bundle to your built files. It then exposes a JavaScript search API that can be used anywhere on your site.

"The goal of Pagefind is that websites with tens of thousands of pages should be searchable by someone in their browser, while consuming as little bandwidth as possible. Pagefind’s search index is split into chunks, so that searching in the browser only ever needs to load a small subset of the search index. Pagefind can run a full-text search on a 10,000 page site with a total network payload under 300kB, including the Pagefind library itself. For most sites, this will be closer to 100kB."

I'd love to see a comparison (link me up if you know of one), but my guess is this could easily replace Algolia on lots of open source docs and sites. One less service to depend on!

**Break:**

**Jerod Santo:**

That is the news for now! We have an _excellent_ interview for you coming up on Wednesday: RedMonk's [Stephen O'Grady](https://redmonk.com/team/stephen-ogrady/) joins us in the wake of Llama 2 and HashiCorp's relicense to discuss why [he believes](https://redmonk.com/sogrady/2023/08/03/why-opensource-matters/) the open source definition really matters.

Have a great week, **tell your friends about Changelog News** if ya dig it, and I'll talk to you again real soon. 💚
