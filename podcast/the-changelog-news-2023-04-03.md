**Jerod Santo:**

What up, nerds?! I'm Jerod and this is Changelog News for the week of Monday, April 3rd 2023.

Let's do it.

**Break:**

On Friday, Twitter Engineering wrote about and open sourced the recommendation algorithm. People who previously decided Elon Musk is very good thought this release was very good. People who previously decided Elon Musk is very bad thought this release was very bad.

Me? I thought it was just okay.

**Mitch Hedberg:**

Band joke.

**Jerod Santo:**

On one hand, it's not the full algorithm. In fact, the architectural diagram released with the code shows this big cloud neural network in the middle called "Heavy Ranker", and the training data for that model is not part of the release. On the other hand, there is a substantial amount of code in this release. We're talking 235 thousand lines of Scala, 136 thousand lines of Java, 22 thousand lines of Python and 7 thousand lines of Rust in the main repo alone.

Lots of weird stuff has already been found, such as a metric tracking code that groups Twitter users into four types: democrat, republican, power user and... Elon.

And some useful stuff has been learned as well, such as how it weights tweet characteristics and engagement. Btw, likes are a 30x boost, retweets a 20x boost, and images/videos are a 2x boost, according to Rowan Cheung, who spent the weekend feeding the code into GPT-4, because of course he did.

Perhaps the best thing this open sourcing produced... a treasure trove of absolutely ridiculous new Issues posted on the project's repo with titles like "there is bug", "Twitter is pretty cool, but weird", "my cat gave birth to 4 kittens", and "Join the Fediverse"

Speaking of the fediverse... I'm happy to announce I'm open sourcing an approximation of Mastodon's recommendation algorithm right here on Changelog News: Are you ready, write this down: `select * from toots order by published_at desc;`

**Break:**

**Jerod Santo:**

Okay that was far too much non-AI content I am so sorry here comes some large language models. Like, really large ones.

**The Usual Suspects:**

Big fat guy, I'm talking like orca fat.

**Jerod Santo:**

Oh my, I just had an idea. Maybe we can repurpose all those "yo momma so fat" jokes for large language models and they'll still be funny without hurting anybody's momma's feelings. Hey ChatGPT, write me 3 funny "yo LLM so large" jokes pronto:

1. Yo LLM so fat, it needs a search engine just to find its own information.
    > Not bad…
2. Yo LLM so fat, it can't even fit in the cloud; it needs its own weather system.
    > Not _good_…
4. Yo LLM so fat, it's the reason for global warming.
    > That's just depressing.

**Break:**

**Jerod Santo:**

Auto-GPT is an autonomous GPT-4 experiment. You provide a name, role, and up to 5 goals, and Auto-GPT will do actions to fulfill the goals — on its own. Not only is this a cool experiment in and of itself, it also has a breakthrough feature: it's able to write its own Python code and execute it. That means it can recursively debug, develop and self-improve.

**Break:**

**Jerod Santo:**

Speaking of LLMs, Simon Willison will be back on the podcast this Wednesday. Adam and I chatted with Simon for a full two hours and honestly I think this episode's even better than the Stable Diffusion discussion we had back in September.

After our chat, Simon wrote up his thoughts on how we should be thinking about LLMs. He calls them "calculators for words", saying "This is reflected in their name: a “language model” implies that they are tools for working with language. That’s what they’ve been trained to do, and it’s language manipulation where they truly excel."

This makes large language models very good at a specific set of things, including: summarization, question answering, fact extraction, rewrites, and suggesting titles.

**Break:**

**Jerod Santo:**

Eric Elliot recently wrote about and released SudoLang: a powerful pseudocode programming language for LLMs. He didn't write it himself, though, because that would be so passé.

**Fergie:**

I'm so 3008. You so 2000 and late.

**Jerod Santo:**

With GPT-4's help, Eric invented SudoLang, which has commands, modifiers, and arguments. The spec for the language [available on GitHub](https://github.com/paralleldrive/sudolang-llm-support/blob/main/sudolang.sudo.md). All you have to do is paste it into ChatGPT with GPT-4+ running and you’ll be off to the races. About the project Eric says, "AI turns everyone into a conjurer, and we have only witnessed the tip of the iceberg."

**Break:**

**Jerod Santo:**

Have you heard people use the term "stochastic parrot"? I heard it a few times on our _Practical AI_ podcast and didn't really know what it meant, so I looked it up so you don't have to. When people use this term in reference to a language model, they're referring to the limitation of the model's understanding of the words it is spitting out.

"Stochastic" refers to the random element in generating responses, and "parrot" highlights the notion that these models merely repeat what they have seen during training, like parrots do when you teach them to speak words. Here's [Daniel](https://changelog.com/person/dwhitena) saying just as much on _Practical AI_:

**Daniel Whitenack:**

The model has no clue what it's saying, and nor does it have any sort of […] morality[…]. It's just producing coherent output, the same whether it's a text-to-image model, or it's a language model[…]. It's auto-completing text, right? [A]t the end of the day […] that's a vast over-simplification, and you can not like that, but […] ultimately, you're giving a prompt, and it is producing output that is seeded by that prompt[…]. [I]t's just trying to produce this coherent output that's consistent with both the data that it's seeing and maybe some type of extra mechanism like the human feedback or something that it's seeing. But ultimately it's just producing output that seems coherent and probable. […]

**Jerod Santo:**

The term comes from a 2021 paper called: "On the Dangers of Stochastic Parrots: Can Language Models Be Too Big?"

Dr. Jo on Quora summarizes it as: "a stochastic parrot has form but no underlying model. We ourselves create the illusion of an underlying mind."

**Break:**

**Jerod Santo:**

That is the news for now. We'll be back in your ear holes on Wednesday with our conversation with Simon Willison. Have a great week, share Changelog News with your friends if you dig it, and we'll talk to you again real soon.
