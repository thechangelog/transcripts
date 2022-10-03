**Jerod Santo:**

What up, nerds.

**Homer Simpson:**

[Nerd!](https://www.youtube.com/watch?v=Z7_QQn_2McM)

**Jerod Santo:**

I'm Jerod and this is Changelog News for the week of Monday, October 3rd 2022.

Yes, October has arrived and you know what that means. Hacktoberfest 2022 is in full swing. This year, there's a new emphasis on non-code contributions, which is super cool.

**Mr. Freeze:**

Freeze!

**Jerod Santo:**

Get your 4 contributions accepted during the month of October and Digital Ocean will plant a tree in your name, or send you the official Hacktoberfest 2022 t-shirt.

Our transcripts repo is a great way to get started. Pick an episode that interests you, fix the unintelligibles in the markdown file, and open up a PR. Legend has it, we operate the fastest merge button this side of the metaverse.

**Han Solo:**

[She's fast enough for you old man](https://www.youtube.com/watch?v=bosSsgzgenA)

**Jerod Santo:**

Ok, let's see what's new.

**Break:**

**Jerod Santo:**

Divam Gupta's DiffusionBee turns 1.0: I mentioned this GUI app for macOS on our episode with Simon Willison. It is the easiest way to run Stable Diffusion locally on your M1 Mac. One-click installer, no dependencies or technical knowledge required, and so on.

On the pod, I said DiffusionBee supports "Text to Image" generation (which it did), and "Image to Image" generation (which it did not). I was fooled by the UI, which had a placeholder for the feature, but when you actually click on it, it said "Coming Soon". Soon is right, because it works now and it's amazing. If you're on an M1 Mac, I highly recommend checking out DiffusionBee.

**Break:**

**Jerod Santo:**

Our friend and repeat podcast guest Zeno Rocha released Dracula UI this week.

**Count Dracula:**

[Allow me to reintroduce myself. I'm Count Vladislaus Dragulia.](https://www.youtube.com/watch?v=JVWrVCLs8ms)

**Jerod Santo:**

It's an open source and totally free dark-first collection of patterns and components made with React. If you've heard Zeno on the show, you know he sweats the details like we do. Dracula UI is built for dark mode first, designer friendly with a carefully crafted Figma fila, and has a great DX with VS Code snippets provided. Check it out at ui.draculatheme.com.

**Break:**

**Jerod Santo:**

GitX is back with new maintainers

**Dr. Frankenstein:**

[It's alive. It's alive!](https://www.youtube.com/watch?v=QuoKNZjr8_U)

**Jerod Santo:**

I mentioned this macOS git GUI two weeks back while covering GitUI. GitX is the only tool I've preferred over the command-line for performing certain git tasks like chunk & line staging. The app has a long history of various branches and versions maintained by various people over the years. At some point, it fell into a state of disrepair, but a few open source samaritans picked it up off the side of the road and gave the project new life.

The gitx org & gitx repo are an attempt to consolidate and move forward with a current, common, community-maintained version. I've been using it for the last week and I couldn't be happier that this tool made a comeback.

**LL Cool J:**

[Don't call it a comeback...](https://www.youtube.com/watch?v=Xi7v2ZqnpXA)

**Break:**

**Jerod Santo:**

The engineering team at Prerender.io just finished a multi-month migration off AWS and saved themselves a bundle of money in the process. Their annual server costs reduced from $1 million to just $200k: that's an 80% reduction.

Now, it's worth noting what they were doing with AWS. Prerender caches and prerenders their customers' JavaScript pages so search engines can have a pure HTML file to crawl and index. They're handling over 70,000 pages per minute, and storing around 560 million pages.

Side note: perhaps server-rendering and pre-rendering HTML are good ideas after all? Just sayin'

Turns out storing multiple terabytes of prerendered web page contents in this way on a 3rd party server is hugely expensive. Not only that: but traffic costs add up too.

Moving off AWS and on to internally owned storage and saved Prerender big, but they state the major savings was on the outbound traffic cost. "“The true hidden price for AWS is coming from the traffic cost, they sell a reasonably priced storage, and it’s even free to upload it. But when you get it out, you pay an enormous cost."

I wonder what a switch to Cloudflare's R2 would've done to their costs? Outbound traffic on R2 is completely free and it would probably be a much faster and easier migration that might yield them most of those same savings.

The takeaway for me: the cloud is a great place to get started, but when your business begins to scale it pays off to revisit that strategy and see if there are better options.

**Break:**

**Jerod Santo:**

That's the news for now. But stick around if you have a few more minutes. Adam and I recorded a special message inviting you to join us at All Things Open at the end of the month. Have a great week and we'd love to see you there.
