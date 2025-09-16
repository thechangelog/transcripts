**Jerod Santo:**

What up, nerds? I'm Jerod and this is Changelog News for the week of Monday, September 15th, 2025.

If you think Roombas are cool, wait 'til you get a load of [Dusty Robotics](https://www.dustyrobotics.com)' "Roomba" for the construction industry.

Instead of vacuuming the floor, it drives around printing the construction floor plan on the bare slab. Such a simple concept that will remove soooo much inefficiency in the construction process. Love it!

Ok, let's get into this week's news.

**Break:**

**Jerod Santo:**

[Just enough automation](https://bevel.work/blog/just-enough-automation/)

I used to try to automate everything. Eventually, I learned there are some things that just aren't worth it. But where exactly is that line? Zach Gates tried to quantify it. After a few iterations, he came up with this:

<pre>
Long Term Value = 
  Value of the Task * Number of Iterations for the Task
  - The Effort of Automating the Task
  - Maintenance Costs
  - Documentation Costs
  - Mistake Costs
  ± Long Term Effects
</pre>

Sometimes the biggest challenge is predicting the *actual* effort of automating the task. We devs tend to underestimate that, forcing ourselves to learn the hard way. But if you can get that right, maybe this equation will help you decide whether or not to automate your next repetitive task.

**Break:**

**Jerod Santo:**

[Albania welcomes its first AI overlord](https://apnews.com/article/albania-new-cabinet-parliament-ai-minister-diella-corruption-5e53c5d5973ff0e4c8f009ab3f78f369)

Look out corrupt Albanian politicians, there's a new AI-generated "minister" in town, and "her" name is Diella.

> Albania’s prime minister on Friday tapped an Artificial Intelligence-generated “minister” to tackle corruption and promote transparency and innovation in his new Cabinet.

Diella will be a "member of the Cabinet" according to Prime Minister Edi Rama, but needless to say not everybody is on board with the idea. But maybe that doesn't matter?

> Lawmakers will vote on the new Cabinet but it was unclear whether Rama will ask for a vote on Diella’s virtual post. Legal experts say more work may be needed to establish Diella’s official status.

I'm all for tackling corruption and promoting transparency, but is today's state-of-the-art AI even close to ready for that? So far, thankfully, it seems Diella's work has been more akin to a digital librarian:

> Diella, depicted as a figure in a traditional Albanian folk costume, was created earlier this year, in cooperation with Microsoft, as a virtual assistant on the e-Albania public service platform, where she has helped users navigate the site and get access to about 1 million digital inquiries and documents.

(h/t to Tim for sharing this news [in Zulip](https://changelog.zulipchat.com/#narrow/channel/455469-news/topic/Albania.20just.20appointed.20an.20AI.20minister.20to.20tackle.20corruption/with/539509512))

**Break:**

**Jerod Santo:**

[Really Simple Licensing for the AI-first internet](https://rslstandard.org)

RSS co-creator, Eckart Walther, along with some big names on the web (Tim O'Reilly, schema.org's R.V. Guha, Simon Wistow from Fastly, to name a few), have designed a new open standard for licensing content in a machine-readable form.

Really Simple Licensing (RSL) is similar to Cloudflare's [pay-per-crawl](https://blog.cloudflare.com/introducing-pay-per-crawl/) idea, but with more forms of compensation, the ability to license nonpublic content (books, videos, and datasets), and a bigger community behind it; Reddit, Quora, wikiHow, MIT Press, and more organizations have committed support to the standard.

The technical bits aren't that complicated. There's a new xml namespace for RSL with elements publishers add to their RSS feed to specify content licensing requirements. Consumers use the RSL [Open License Protocol](https://rslstandard.org/api) (OLP) to acquire access to the content from a license server specified in the feed. There's a list of [open license servers](https://rslstandard.org/guide/license-servers) linked up in the newsletter, but you can also operate your own.

**Break:**

**Jerod Santo:**

It's now time for sponsored news!

[Remote agent sandboxes on Depot](https://depot.dev/blog/now-available-remote-agent-sandboxes)

One of the biggest pain points of AI coding agents is the local setup tax. Every time you spin one up, it's fighting your environment, your dependencies, your laptop fans. Not fun.

Depot's answer is remote agent sandboxes. Instead of wrangling Claude Code on your machine, you get a clean, consistent sandbox in the cloud. No setup, no drift, just a fresh environment every time.

Why does this matter? Because reliable context is the difference between "wow, that agent's useful" and "ugh, it broke again." Sandboxes give Claude Code a stable home to reason about your repo, test changes, and run reviews without trashing your dev setup.

Learn more and try it for yourself at depot.dev/blog or check the newsletter for the link to the full post.

**Break:**

**Jerod Santo:**

[UTF-8 is a brilliant design](https://iamvishnu.com/posts/utf8-is-brilliant-design)

Vishnu Haridas has a lot of nice things to say about UTF-8 encoding:

> The first time I learned about UTF-8 encoding, I was fascinated by how well-thought and brilliantly it was designed to represent millions of characters from different languages and scripts, and **still be backward compatible with ASCII**.

The backwards compatibility with ASCII is the most impressive part, in Vishnu's eyes, and he goes on to explain how it works in detail. He even built a [UTF-8 Playground](https://utf8-playground.netlify.app/1F44B) to visualize and play around with the encoding. I agree with Vishnu on its brilliant design, but my favorite thing about UTF-8 is that it's so good that I don't really think about string encoding anymore.

If you're at all interested in how UTF-8 got its brilliant design, Rob Pike [told the tale](https://www.cl.cam.ac.uk/~mgk25/ucs/utf-8-history.txt) of how it was designed, in front of his eyes, on a placemat in a New Jersey diner one night in September or so 1992.

**Break:**

**Jerod Santo:**

[I've got your shovelware right here](https://justin.searls.co/links/2025-09-08-i-ve-got-your-shovelware-right-here/)

Justin Searls disagrees with last week's headline story by Mike Judge that argued we'd be seeing a whole lot of shovelware if AI coding tools were making us as productive as we think they are. Justin's retort:

> suggesting that AI-generated code is a nothingburger because we haven't yet been drowned in shovelware just four months after coding agents became *remotely useful*? Get outta here. And right now, only the early adopters are even using them! I talked to a manager the other day whose team has been given carte blanche to burn through all the Anthropic tokens they want and for whom not a single developer touched the account in the month of August.

Justin also points to some vibe coded [shovelware](https://github.com/searlsco/imsg) of his own to counter Mike's assertion:

> Took about a day of wall time to build and another calendar day for me to tighten up with feedback. I spent probably a grand total of three hours staring at computers in the furtherance of the project... Would have taken me weeks to build by hand, and more importantly, it wouldn't have been built at all—I wouldn't have bothered.

**Break:**

**Jerod Santo:**

That's the news for now, but go and subscribe to the Changelog Newsletter for the full scoop of links worth clicking on. Such as:

- [Dotter is a dotfile manager / templater](https://github.com/SuperCuber/dotter)
- [asciinema has been rewritten in Rust](https://blog.asciinema.org/post/three-point-o/)
- [Hosting a website on a disposable vape](https://bogdanthegeek.github.io/blog/projects/vapeserver/)

Get in on the newsletter at changelog.news

Have a great week! Like, subscribe, and leave us a 5-star review if you dig the show, and I'll talk to you again real soon.
