**Jerod Santo:**

What up, nerds? I'm Jerod and this is Changelog News for the week of Monday, May 28th 2024. But delivered to you on Tuesday, the 29th because Memorial Day here in the States.

Hello to all our new listeners who learned about this program [on the freeCodeCamp podcast](https://www.freecodecamp.org/news/open source-is-changing-the-changelog-host-jerod-santo-on-how-to-keep-up-podcast-125/)! Sit back, relax & enjoy the Changelog-y goodness.

For those who missed it, I spent almost 2 hours chatting with my old friend Quincy Larson about too many topics to list here. But I will play you a sound bite of one of my favorite moments that begins with Quincy saying they don't do clips of their podcast and ends with me telling him he should make a clip...

**Quincy Larson:**

[Clip from freeCodeCamp podcast](https://www.youtube.com/watch?v=vfcqsP99U90)

**Jerod Santo:**

There's a taste for ya. Like I said, 2 hours. There's some good conversation in there. I'll put a link in the newsletter for those interested. Ok let's get in to this week's news.

**Break:**

**Jerod Santo:**

[Why you shouldn't use AI to write your tests](https://swizec.com/blog/why-you-shouldnt-use-ai-to-write-your-tests/)

This well-reasoned piece by Swizec feels like a punch in the gut: I thought writing tests for us was the _perfect_ tedium-reducing role of LLMs! He starts by listing out why people write tests:

- To find related changes
- The Beyonce rule (CYA?)
- To avoid talking
- To trick programmers into thinking
- To catch regressions

After a brief survey of all those reasons, he asks: "do _you_ think deriving tests from your implementation is valuable?" The answer he wants you to come to is: NO! Then what instead? Swizec recommends writing higher level tests:

> An integration or end-to-end test higher up the stack would be way more useful. When a user clicks this button and enters a phone number, does the search work?
>
> That test won't need to change until the feature changes. You could swap out the whole implementation underneath and keep the same test. That's a valuable test.
>
> AI writing tests like that would be fantastic. Don't worry about code coverage. Focus on feature coverage.

What a relief! We can once again have AI write our tests. Just not the tests we're probably having it write for us currently. This reminds me of a conclusion I made back in my heavy TDD days:

In my experience writing the right tests was the hard part. Once you figured that out, the design of the implementation was pretty much baked, making it trivial to write the implementation code. So maybe we're thinking about this all wrong... maybe _we_ should write the tests and have the AI write the implementation! Someone try that and report back.

**Break:**

**Jerod Santo:**

[A self-organizing file system with llama 3](https://github.com/iyaja/llama-fs)

I feel like we're starting to understand what LLMs are good at: expanding text, contracting text, organizing text, etc. With that in mind, I imagine Llama does quite well at the otherwise mundane job of organizing the files on your system:

> LlamaFS is a self-organizing file manager. It automatically renames and organizes your files based on their contents and well-known conventions (e.g., time). It supports many kinds of file, and even images (through Moondream) and audio (through Whisper).

Point it at your `~/Downloads` folder and see what happens?

**Break:**

**Jerod Santo:**

[The internet is full of broken links](https://sherwood.news/tech/the-internet-is-full-of-broken-links)

A recent Pew Research analysis confirmed what many of us _very online_ people already know: "some 38% of links from 2013 led nowhere as of October 2023." So that's news, but probably not new. Here's something else from the linked article that was new to me: the "[dead internet theory](https://theconversation.com/the-dead-internet-theory-makes-eerie-claims-about-an-ai-run-web-the-truth-is-more-sinister-229609)" which:

> ...posits that the web has been colonized by bots that are pumping out the majority of content that we encounter online, become more ardent. Indeed, some commentators now argue that we’ve moved into the “zombie internet” era, where once-human-operated entities are now automated content farms publishing AI-generated images...

This is a good time to mention a page (which hasn't changed since 1998!): [Cool URIs don't change.](https://www.w3.org/Provider/Style/URI) Give that a read if you like, but the title pretty much says it all.

**Break:**

**Jerod Santo:**

It's now time for Sponsored News!

[Monitor your homelab with Cronitor](https://cronitor.io/homelab)

You've probably heard my co-host [Adam](https://changelog.com/person/adamstac) raving about how he uses Cronitor in his homelab. It turns out, he's such a fan of the service that he went and got them as a sponsor! 😆

Here's what Adam loves most about Cronitor:

- There's an easy CLI for Linux
- It captures the status, metrics & output from every job
- You can name & organize each cron job
- It works with every kind of background job
- It makes monitoring Cron jobs "too easy" (his words)

Monitor your homelab (or your side projects / work stuff) at cronitor.io/homelab

For $10/month you can monitor 30 cron jobs and website monitors, retain a year's worth of data & more. Or use Cronitor for free with their Hacker plan and get 5 monitors. Again that's cronitor.io/homelab

**Break:**

**Jerod Santo:**

[An interactive study of queueing strategies](https://encore.dev/blog/queueing)

A spectacularly executed explainer on queueing strategies, by Sam Rose for Encore:

> In this post, we're going to explore queueing in the context of HTTP requests. We'll start simple and gradually introduce more complex queues. When you're finished with this post, you will know:
>
> - Why queues are useful
> - 3 different types of queue.
> - How these 3 queues compare to each other.
> - 1 extra queueing strategy you can apply to any type of queue to make sure you don't drop priority requests.

This is a <strike>must-read</strike> must-experience. The interactive bits are expertly-crafted to get the point across while also invoking _fun_ by enticing you to overload the queue being described. Bravo!

**Break:**

**Jerod Santo:**

[Clear, readable code is probably the hardest code to write](https://read.engineerscodex.com/p/clever-code-is-probably-the-worst)

Filed under: _we all know this but we ignore it 99% of the time anyway_

Jordan Cutler took the ol' axiom and put it to the test by taking a real-world pile of _functioning_ spaghetti code and split it into 30+ diffs that he described as "A beautiful landing of the data enrichment module, with easy to read, clear code."

The end result?

> While I was proud of it, there was suddenly a problem when I talked to my manager about it.
>
>>  “While I understand how complex this was, when it comes to performance reviews, this code looks trivial. It looks too easy, too simple.
>
> I would recommend writing an implementation doc of this module just so we can demonstrate that this was actually quite complex.”
>
> I was shocked - this wasn’t some startup. This was one of the biggest companies in the world, known for their engineering culture.
>
 I now understood why Big Tech seemingly had so many docs — half of the docs I wrote didn’t need to be written, except they did… because I wanted to get raises and be promoted.

That's the trouble with clear, readable code: it's super hard to write, but it _looks_ super easy to write! What are you gonna do...

**Break:**

**Jerod Santo:**

That's the news for now, but we have some great episodes coming up this week: Scott Guthrie from Microsoft Build on Wednesday & Luis Villa from Tidelift on Friday!

Have a great week, **leave us a 5-star review** if you dig our work & I'll talk to you again real soon. 💚
