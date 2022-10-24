**Jerod Santo:**

I'm Jerod and this is Changelog News for the week of Monday, October 24th 2022.

Heads up y'all, there will not be a News episode next Monday because we'll be in Raleigh, North Carolina for All Things Open's 10th annual conference. If you're going to be there, don't forget to stop by booth 60, the best booth in the building, and say hi. We'll have stickers, t-shirts, our microphones, and a Nintendo Switch, which we're giving away at the end. Come game with us.

**Ben Stiller:**

Do it. DO IT.

**Jerod Santo:**

Ok, let's get in to the news.

**Break:**

**Jerod Santo:**

Search tooling innovation continues apace. The newest (to me) entry to the space is Sonic: a fast, lightweight & schema-less search backend. It's an alternative to Elasticsearch that runs on a few MBs of RAM.

Its creators describe it as a simple alternative to super-heavy and full-featured search backends such as Elasticsearch in some use-cases. It is capable of normalizing natural language search queries, auto-completing a search query and providing the most relevant results for a query. Sonic is an identifier index, rather than a document index; when queried, it returns IDs that can then be used to refer to the matched documents in an external database.

It was built in Rust with performance and code cleanliness in mind and provides benchmarks and limitations (which we'll link to) for those interested.

**Break:**

**Jerod Santo:**

After 5 years of site reliability engineering, Brandon Willett shares his view on how to build software like an SRE. This post is filled with lessons on coding, on merging, on deploying, and on operating.

Here's an example from the coding section which directly contradicts my current practice. Brandon says you should not have in-code fallbacks for configs. Here's why: "If your service can’t load the config on startup for any reason, it should just crash – that’s much easier to diagnose than the result of one borked instance going down an ancient code path because no one remembered to clean up that line `config.get(enable_cool_new_thing, false)` after finishing their rollout."

He also says use Git, use Docker, use Kubernetes, use Helm, and run 3 of everything. I'm starting to believe Brandon would fit right in with Gerhard on Ship It!

**Break:**

**Jerod Santo:**

Speaking of "Ship It!", Ruby on Rails creator David Heinemier Hansson will be on the pod in early November to discuss 37Signals's move off the cloud. In the meantime, he also wrote about it on HEY... World... HEY World. Their reasoning is two-fold: turns out AWS is super-expensive at scale, but also DHH says: "It’s... about what kind of internet we want to operate in the future. It strikes me as downright tragic that this decentralized wonder of the world is now largely operating on computers owned by a handful of mega corporations. If one of the primary AWS regions go down, seemingly half the internet is offline along with it."

I tend to agree with him on that point. I'm not as hopeful about the future of the internet as this guy was back in 1996...

**Chip Douglas:**

["The future is now" speech.](https://www.youtube.com/watch?v=w3wRvmPmUr0)

**Jerod Santo:**

Amos, also known as fasterthanlime...

**Mitch Hedberg:**

[Saved by the buoyancy of citrus.](https://www.youtube.com/watch?v=hEyna39ouDM)

**Jerod Santo:**

has published the HTTP crash course nobody asked for. Beware: it is a 60 minute read. Amos starts with HTTP 1.1 and then covers H2 as well. This article has everything: netcat, tcpdump & wireshark, openssl, rustls, httparse, nom, and of course, being very pedantic about nomenclature and citing RFCs every other paragraph.

**Julie Andrews:**

[These are a few of my favorite things...](https://www.youtube.com/watch?v=0IagRZBvLtw)

**Jerod Santo:**

If you're in webdev, but don't feel like you have a great handle on exactly how HTTP works. This is your chance to fix that bug.

**Break:**

Sam Magura is a software engineer at Spot and the 2nd most active maintainer of Emotion, a widely-popular CSS-in-JS library for React. So, the webdev community took notice when Sam announced in a blog post that he and the entire Spot engineering team have decided to switch away from it.

**Cable Guy (again):**

So what are you trying to say?

**Jerod Santo:**

Sorry, I have Cable Guy on the brain this morning. What were we talking about? Oh yea, CSS-in-JS. For the unitiated, this is the controversial practice of co-locating a component's CSS styles directly in the related JavaScript code. In his post, Sam lays out the good, the bad, and the ugly of it. The good includes locally-scoped styles, so you don't accidentally get bit by the cascade. The bad focuses on additional runtime overhead and increased bundle size. The ugly is about how the practice forces the browser to do a lot of extra works and the numerous things that can go wrong, which Sam is quite familiar with as a maintainer of Emotion. Let's just say the project gets more than its fair share of bug reports.

Sam's conclusion: "Like any technology, it has its pros and cons. Ultimately, it's up to you as a developer to evaluate these pros and cons and then make an informed decision about whether the technology is right for your use case. For us at Spot, the runtime performance cost of Emotion far outweighed the DX benefits, especially when you consider that the alternative of Sass Modules + utility classes still has a good DX while providing vastly superior performance."

In other words, "It's not you, CSS-in-JS, it's me."

**Neil Sedaka:**

[Breaking Up Is Hard To Do](https://www.youtube.com/watch?v=tbad22CKlB4)

**Break:**

**Jerod Santo:**

That is the news for now. We have an awesome conversation for you on Friday. Jay LaCroix from Learn Linux TV hops on the pod to do some serious Linux mythbusting with us and to top it off we nerd out on retro video gaming and the Retro Pi.

Have a great week, we'll talk to you again on Friday.
