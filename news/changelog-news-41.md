**Jerod Santo:**

What up, nerds?! I'm Jerod and this is Changelog News for the week of Monday, April 24th 2023.

One of my _favorite_ things about our new email format is we no longer proxy links through email.changelog.com! That's awesome for two reasons:

1. 📈 Privacy: we have no idea which links you're clicking on
2. 📈 UX: you can hover on a link to see where it's gonna take you

If you appreciate direct links as much as I do, pop in your email at changelog.com/news. And if you've already done that, tell a friend about Changelog News. Ok, let's get into it.

**Break:**

**Jerod Santo:**

The dataset wars are heating up! The [NY Times reports](https://www.nytimes.com/2023/04/18/technology/reddit-ai-openai-google.html) that Reddit will begin charging for access to its API. They appear to be following Twitter's playbook here, only with much better tactics. They won't be charging small-time researchers or indie bot/app developers. It's companies like Google and OpenAI who want the data to power their machine learning projects who will have to pony up. (Stack Overflow is also [getting in on that action](https://www.wired.com/story/stack-overflow-will-charge-ai-giants-for-training-data/).)

I expect this will become increasingly common as increasingly AI-focused product offerings require increasingly large, diverse, and high quality data sources at the same time companies who are well-positioned to provide said data sources experience increasingly less advertising revenue. It actually feels like a better business model for the Reddits, Stack Overflows and Pinterests of the world.

And as a user of these systems, for some reason I feel better about trading my data in to be compressed alongside millions of others and synthesized by an AI than I do having it used to profile me for personalized ads. Not that they won't do both, but still. Are you with me on that sentiment? Or am I out on a limb here. Let me hear about it in the comments.

**Break:**

**Jerod Santo:**

The team at [Suno.ai](https://suno.ai/) is helping change the game in text-to-speech realism by releasing [Bark](https://github.com/suno-ai/bark), a transformer-based text-to-audio model that can generate highly realistic, multilingual speech as well as other audio - including music, background noise and simple sound effects. It can also laugh, sigh, cry & make other non-word sounds that people make. Crazy, right? It's multi-lingual as well and can switch languages mid-audio. Here's an example that includes "sad" and "sighs" metatags:

**Bark Prompt:**

\[Sad\] My friend’s bakery burned down down last night. \[sighs\] Now his business is toast.

**Jerod Santo:**

And one more with laughter:

**Bark Prompt:**

I don't like PyTorch, Kubernetes or schnitzel. And xylophones flummox me. \[laughs\]

**Jerod Santo:**

You can still hear some digital artifacts and blips here and there, but we're getting closer to synthesized audio that's indistinguishable from the real thing. And that's cool / scary.

**Break:**

**Jerod Santo:**

In [a tweet](https://twitter.com/KentBeck/status/1648413998025707520?s=20) that went viral last week, [extreme programming](https://en.wikipedia.org/wiki/Extreme_programming) creator Kent Beck proclaimed: "I’ve been reluctant to try ChatGPT. Today I got over that reluctance. Now I understand why I was reluctant. The value of 90% of my skills just dropped to $0. The leverage for the remaining 10% went up 1000x. I need to recalibrate."

I think Kent is realizing what many others of us have, or are about to: the rules of engagement are changing in the software world. It's time to embrace, adapt, or watch your skills become obsolete in short order.

He expands on that tweet in a full-on blog post where he tells the story of his "a-ha" moment. Oh, and if you're hoping for a scientific  explanation of the 90/10 split and which remaining skills get the 1000x boost... don't. Kent says he was just extrapolating wildly from a couple of his experiences, which is what he does.

**Break:**

**Jerod Santo:**

Stability AI, the team behind Stable Diffusion, released a new open source language model they're calling StableLM. It's currently available in 3 billion and 7 billion parameters, with 15 billion to 65 billion parameter models to follow. This model is usable (and adaptable) for both commercial and research purposes.

They're also releasing a set of research models that are instruction fine-tuned. These are under a noncommercial license and they're built as a combo of Alpaca GPT4All, Dolly, ShareGPT, and HH. Some of these we've covered on the pod. Others I haven't even heard of. I love how much the open(ish) AI advancements build and feed off one another. More like this, please!

**Break:**

**Jerod Santo:**

It is now time for some Sponsored News. Thanks, Sentry! (Ca-ching)

Instead of spending time writing tests with little to no visibility if the tests actually give you meaningful coverage in a given change, using Sentry's integration with [Codecov](https://codecov.io?utm_source=changelog&utm_medium=newsletter&utm_campaign=changelog-news) lets you see the untested code causing errors directly in the Sentry Issue stack trace. Which means, no more time wasted trying to analyze your codebase to find out where you need test coverage.

Here's what Alex Nathaniel, Directory of Technology at Vectare has to say about it: "With the Sentry and Codecov integration, **I no longer have to analyze our codebase and spend cycles thinking about where we need test coverage**, instead, Sentry just tells me exactly where I need to focus - saving me several weeks out of my year and reducing my time spent on building test coverage by nearly 50%."

Check the link in your show notes and chapter data to learn more about using Sentry with Codecov and how to get it all set up.

Thanks again to Sentry for sponsoring Changelog News.

**Break:**

**Jerod Santo:**

Mitchell Hashimoto weighs in on prompt engineering in a long, detailed article titled Prompt Engineering vs Blind Prompting. His premise: "A lot of people who claim to be doing prompt engineering today are actually just _blind prompting_. "Blind Prompting" is a term I am using to describe the method of creating prompts with a crude trial-and-error approach paired with minimal or no testing and a very surface level knowedge of prompting. _Blind prompting is not prompt engineering_."

Mitchell goes on to make the argument that prompt engineering is a real skill that can be developed based on real experimental methodologies. He displays this with a realistic example where he walks through the process of prompt engineering a solution to a problem that provides practical value to an application.

**Break:**

**Jerod Santo:**

That is the news for now. I'll finish out this episode with some shout outs  to our newest [Changelog++](https://changelog.com/++) supporters: Jordan, Brian, Wolodja, Liam, Jack, Richard, Aaron, Enmanual, David, John, Richard, Matthew, Joe, Max, Carl & Anthony! 💚

On this week's Changelog interview episode, Adam sits down with Andrew Klein from Backblaze to chat hard drive reliability and how they manage more than 250,000 hard drives.

Have a great week. Share Changelog with your friends if you dig it, and we'll talk to you again real soon.
