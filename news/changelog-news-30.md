**Jerod Santo:**

What up nerds, I'm Jerod and this is Changelog News for the week of Monday, February 6th 2023.

Thanks to everyone who weighed in on our decision about upgrading this Monday News brief to its own podcast. I think we're gonna go for it.

**The Mask:**

[Ooh, somebody stop meee](https://www.youtube.com/watch?v=91YS3fNegmE)

**Jerod Santo:**

I was kind of overwhelmed by how much feedback we received. I love hearing from y'all, it gives me those warm, fuzzy community vibes. Keep the messages coming. Please.

Speaking of community, Thomas, AJ, Mary and a few others in our Slack had some fun brainstorming a new name for the spin-off. Memecached, The Fix, "The Newslog", and "Hyperloglog" were all fun suggestions.

If you aren't hanging out in our Slack, let's fix that bug. Join 6300 of your fellow devs who've already joined. It's free, the signal to noise ratio is excellent, and it's just a really nice place to hang your hat and feel at home on the web. Get in on it at changelog.com/community

Okay, let's get in to the news.

**Break:**

**Jerod Santo:**

OpenAI announced on Tuesday that it's working on an AI classifier trained to distinguish between AI-written and human-written text. But it's not very good at it.

**The Good Place:**

[I'm not mad, I'm just disappointed.](https://www.youtube.com/watch?v=MT42AZwSuBo)

**Jerod Santo:**

In their evaluations, the classifier correctly identified 26% of AI-written text while incorrectly labeling human-written text as AI-written 9% of the time. This looks to me like the beginning of yet another cat and mouse game but this time OpenAI is playing the roles of both Tom and Jerry.

**Tom and Jerry at MGM:**

[Performed live by the John Wilson Orchestra.](https://www.youtube.com/watch?v=kYrUWfLlYI0)

**Jerod Santo:**

Text isn't the only battlefront in this generative AI arms race. We see the same game being playout in video where GANs (Generative Adversarial Networks) are being used to create deep fakes and other GANs are being used to detect deep fakes.

What I haven't seen yet, and let me know if you have, is any efforts to detect AI-generated code. Sounds like a hard problem to solve. Maybe someday we'll get so good at generating code that you can detect a human having written it merely by the presence of bugs. That'd be pretty cool.

**Break:**

**Jerod Santo:**

Oz Nova and Myles Byrne from Bradfield School of Computer Science have published a guide to teach yourself computer science. This is perfect for bootcamp grads and self-taught engineers who can get the job done, but would benefit from deeper knowledge of core computing concepts.

**Billy Madison:**

[Back to School Song](https://www.youtube.com/watch?v=WBeDPZiwZqQ)

**Jerod Santo:**

I love this for two reasons. One: we had Oz on the show a few years back and I am convinced that he's a legitematly good teacher of this stuff. Two: as it says on the website, there are so many resources out there these days, but some are better than others and you usually don't want another listicle of them. What you do need is answers to these questions: why subjects should I learn, and why? And what is the best book or video lecture series for each subject?

teachyourselfcs.com is their attempt to definitevely answer these questions. The TL;DR; of the guide is the following: "Study all nine subjects listed below, in roughly the presented order, using either the suggested textbook or video lecture series, but ideally both. Aim for 100-200 hours of study of each topic, then revisit favorites throughout your career"

**Break:**

**Jerod Santo:**

Charles Genschwap recently realized that all the various programming philosophies can be boiled down into a simple statement about how to work with state.

Example: object-oriented programming says modifying a lot of state at once is hard to get correct; encapsulate subsets of state into separate objects and allow limited manipulation of the encapsulated sub-state via methods.

Meanwhile, functional programming says modifying state is hard to get correct; keep it at the boundaries and keep logic pure so that it is easier to verify the logic is correct.

Charles goes on to apply this state-oriented thinking to declarative programming, imperative, monoliths, microservers, and service-oriented architecture.

It's an interesting thought experiment, if nothing more. And it does show how difficult it is to reason about and manage the state of things in our programs.

**Break:**

**Jerod Santo:**

This just in: you probably don't need Lodash or Underscore anymore.

**Cher:**

[I don't need you anymore...](https://www.youtube.com/watch?v=nZXRV4MezEw)

**Jerod Santo:**

They are solid JavaScript utility libraries, and are widely-used by frontend devs, but modern browsers have built in many of the utilities they provide. Depending on what you're up to, you might not need them.

**Cher:**

[I don't need you anymore...](https://www.youtube.com/watch?v=nZXRV4MezEw)

**Jerod Santo:**

To help you make that determination, the "you-dont-need" community...

**Cher:**

[I don't need you anymore...](https://www.youtube.com/watch?v=nZXRV4MezEw)

**Jerod Santo:**

has put together a list of JS methods which you can use natively plus an ESLint plugin that will help you identify places in your codebase where they're no longer needed.

**Cher:**

[I don't need you anymore...](https://www.youtube.com/watch?v=nZXRV4MezEw)

**Jerod Santo:**

Now, if you're working server-side with Node or Deno, pulling in a utility library is a relatively low-cost endeavor. But remember, any code you ship down the wire to web clients incurs network and CPU costs that should be avoided if at all possible.

So, if you're using Lodash or Underscore, especially in your frontend check out this list and see if you really need to.

**Break:**

**Jerod Santo:**

Waseem Daher is the CEO of pilot.com and he still personally emails every new customer and offers to get on a call with them. Many startup founders balk at this, especially because he does it entirely manually. Wasseem says this about their reactions: "This reaction is an example of a prevalent founder behavior: a tendency to think that everything needs to be made scalable—and therefore you either need to (a) simply not do unscalable things, or (b) build processes that let you do them more scalably."

He's talking about scaling a business, but all of the same principles apply to software. Because seriously, name a business that isn't built on software these days. Some things should be built to scale, other things shouldn't. Deciding which is which is often the hard part.

We had a great discussion about this with Rachel Potvin who has scaled engineering teams to huge sizes at both Google and GitHub. I asked her precisely this question about knowing when to build for scale and when not to. That episode drops on Friday the 17th.

**Break:**

**Jerod Santo:**

That is the news for now. If you're excited about our upcoming changes to the show or are concerned you'll miss the transition, don't worry about it. We'll make sure everyone is informed as we roll things out. Oh, and hop on the master feed (or Changelog++ if you're nasty) and you'll automatically get every episode of every podcast we produce.

We'll be back in your earholes on Friday with Nathan Sobo, one of the primary developers of GitHub's now-defunct Atom Editor. Atom may be dead, but Zed is NOT dead.

Have a great week, and we'll talk to you again real soon.
