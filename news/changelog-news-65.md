**Jerod Santo:**

What up, nerds? I'm Jerod and this is Changelog News for the week of Monday, October 9th 2023.

We're gearing up to fly out to [All Things Open](https://2023.allthingsopen.org/) early next week. Will you be there?! Make sure to stop by our booth (4th floor hallway track) and say Hi!

Ok, let's get straight into the news.

**Break:**

**Jerod Santo:**

Jacob Kaplan-Moss has been disappointed with the tenor of the conversation from many of his peers about so-called “Return to Office” (RTO) policies. So with full understanding that he's inviting flames, he tried to articulate a more nuanced way of looking at working from an office versus remote or working from home (WFH).

His core position is that neither remote nor office-only are globally “better”: the “correct” model is contextual. In the linked post, he tries to articulate the contextual differences and provide "default" guidance for which kinds of roles are better suited for in-office work and which make more sense for remote/WFH arrangements.

Jacob thinks _deeply_ (and, in my experience, fairly) about these kinds of topics. Here's brief clip from his latest appearance on The Changelog on principles for hiring engineers, just to give you an idea of what he brings to the table.

So, if you're struggling to make (or rationalize) decisions around RTO vs WFH, I highly recommend you read his recommendations.

**Break:**

**Jerod Santo:**

The [Practical AI](https://practicalai.fm) guys asked, and Duarte Carmo delivered! What resulted is an AI-powered™ search engine from Changelog's open source [transcripts](https://github.com/thechangelog/transcripts)!

The back-end is built around SuperDuperDB and the front-end is in NextJS. In addition to search, the app provides a [chat function](https://changelog.duarteocarmo.com/chat), so you can ask questions to Changelog hosts/guests and see what they've said (or might say) about specific topics. Example, I asked "Adam Stacoviak": How cool is your co-host? And he/it responded: "I have not mentioned my co-host's coolness in the given context."

Sounds about right!

**Break:**

**Jerod Santo:**

Tom Hacohen has been writing software for 20 years, over time he's grown certain that strong static typing is "not just a good idea, but also almost always the right choice."

Notice the hedge in that sentence? "Almost always" is the way people talk when they've been writing software for a long time. After laying out his exceptions, Tom goes on to state his case:

"would you rather work a bit more and get invariants checked at compile-time (or type-checking time for non-compiled languages), or work a bit less and have them be enforced at runtime, or even worse not enforced even at runtime (JavaScript, I'm looking at you...). Getting errors at runtime is a terrible idea. First, it means that you won't always catch them during development. Second, when you do catch them, it will happen in a customer facing manner. Yes, tests help, but writing tests for every possible mistyped function parameter is impossible given the endless possibilities. Even if you could, having types is much easier than testing for wrong types."

His overarching points are that a) types lead to less bugs, and b) types lead to a better developer experience. And the money quote:

"Writing software without types lets you go at full speed. Full speed towards the cliff."

**Break:**

**Jerod Santo:**

It's now time for Sponsored News!

There’s so much going on in the data and ML space – it’s hard to keep up! Example: did you know that graph technology lets you connect the dots across your data and ground your LLM in actual knowledge?

To learn about this new approach, don’t miss Neo4j's NODES online conference on October 26th.

At this free online conference, developers and data scientists from around the world share how they use graph technology for everything from building intelligent apps and APIs to enhancing machine learning and improving data visualizations.

There are 90 talks over 24 hours, so no matter where you are, you can attend live sessions.

To register for this free conference, visit neo4j.com/nodes that's That’s N – E – O – the number “4” – J – dot – com – slash NODES. Or just follow the link in your chapter data and the newsletter.

**Break:**

**Jerod Santo:**

Orhun Parmaksız was inspired by an old viral YouTube video of a college student bringing an old school typewriter into their classroom to take notes. The result, daktilo ("typewriter" in Turkish) is a small command-line program that plays typewriter sounds every time you press a key. Orhun says "It also offers the flexibility to customize keypress sounds to your liking. You can use the built-in sound presets to create an enjoyable typing experience, whether you're crafting emails or up to some prank on your boss."

Prank on your boss? Ferris Buehler style?

**Break:**

**Jerod Santo:**

Here's Luke Plant, spittin' hard truths about simplicity: "A lot of developers want simplicity in the same way that a lot of clients claim they want a fast website. You respond “OK, so we can remove some of these 17 Javascript trackers and other bloat that’s making your website horribly slow?” – no, apparently those are all critical business functionality. In other words, they prioritise everything over speed. And then they wonder why using their website is like rowing a boat through a lake of molasses on a cold day using nothing but a small plastic spoon."

I could pull quote every paragraph form this piece, but I'll limit myself to just one more:

"Of course we all claim to hate complexity, but it’s actually just complexity added by other people that we hate — our own bugbears are always exempted, and for things we understand we quickly become unable to even see there is a potential problem for other people... I think a good test of whether you truly love simplicity is whether you are able to remove things you have added, especially code you’ve written, even when it is still providing value, because you realise it is not providing enough value."

**Break:**

**Jerod Santo:**

That's the news for now, but also take a moment to scan the companion email newsletter. It includes an extra 12 links, like Flappy Bird implemented in macOS' Finder, a new tool for exploring Linux command-line space-time, and PostHog sharing their results after burning money on paid ads for a dev tool. They must've forgot to sponsor Changelog News, or maybe they left it out because it wouldn't qualify as burning money...

We have some great podcasts for you coming up this week: an interview with Marcin Kulik from [asciinema](https://asciinema.org) on Wednesday and Gerhard returns to Changelog & Friends for Kaizen 12 on Friday.

  Have a great week, Give Changelog News a 5-start review if you dig it, and I'll talk to you again real soon.
