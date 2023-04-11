**Jerod Santo:**

What up, nerds. I'm Jerod and this is Changelog News for the week of Monday, March 13th 2023.

It's been a frantic week in the software world, to say the least. Many of our friends, partners, and listeners' were jolted by the FDIC's take over of Silicon Valley Bank on Friday. Thankfully, it appears the worst of all possible outcomes has been avoided. Yesterday, in a join statement by the US Treasury, Federal Reserve and FDIC, they announced that all depositors will have access to all of their money starting today, March 13. And that no losses associated with the resolution of Silicon Valley Bank will be borne by the taxpayer.

Ok, that's a quick Financial Update. I'm not super qualified to go deeper than that. Here's your Software Update.

**Break:**

**Jerod Santo:**

Most of the movin and shakin of late has been around large language models. Surprised?

**Agent Smith:**

[You hear that Mr. Anderson? That is the sound of inevitability.](https://www.youtube.com/watch?v=x5m1A7zoIcc)

**Jerod Santo:**

Facebook Research recently released LLaMA: A foundational, 65-billion-parameter large language model. Alongside the models themselves, they published some example code which demonstrates loading the models and running inference in Python.

With that in hand, Georgi Gerganov coded up llama.cpp. If that name sounds familiar, it's because I've referenced Georgi's work on Whisper.cpp and the fact that he's coming on The Changelog soon, which is even more exciting now than it was last time I said it.

llama.cpp runs LLaMA inference using 4-bit quantization on a MacBook. It was hacked in an evening, but that didn't stop curious devs from downloading Georgi's code and running it on their desktops, laptops, Raspberry Pi's and even a Pixel 6 phone.

Our friend Simon Willison (who is also scheduled to come back on the pod next month) said this about it: "It's now possible to run a genuinely interesting large language model on a consumer laptop. I thought it would be at least another year or two before we got there, if not longer"

But it doesn't stop there. GitHub user 'cocktailpeanut' combined llama.cpp and llama-dl (a script that does high-speed downloads of LLaMA) to create Dalai LLaMA.

**:**

**Jerod Santo:**

The simplest way to run LLaMA on your local machine. Just run `npx dalai llama` followed by `npx dalai server` and visit localhost:3000 to launch a hackable web app that takes input and starts autocompleting from there.

**Break:**

**Jerod Santo:**

Here's a cool website you should know about: inputoutput.dev. It's a bunch of simple web tools with no popups, no cookies, no tracking — all under 14kB in size, and working without JavaScript.

The site currently provides unit converters, random number generators, text manipulation tools, and a whole bunch of unicode generators.

**The Joker:**

[Where does he get those wonderful toys?](https://www.youtube.com/watch?v=tGA1q_Y5HgA)

**Jerod Santo:**

The site's creator, Nathaniel, says this about it: "Everyone should be able to use the internet to perform basic tasks without being bombarded with popups, compromising their privacy and security, or damaging the environment."

**Break:**

**Jerod Santo:**

Question: do you like Wikipedia? If you answered 'no' skip to the next chapter.
Question: do you like the terminal? If you answered 'no' skip to the next chapter.

Ok now that you've chosen this adventure I will tell you about wik: a tool to view wikipedia pages from your terminal.

It's written in Python, so `pip install wik`  then pass it the appropriate flag. `-i` if you want the entire article, `-q` if you just want a quick summary,  `-s` to search any topic, and `-x` if you're feeling lucky and want to read a random wikipedia article.

**Dirty Harry:**

[You gotta ask yourself a question. Do I feel lucky?](https://www.youtube.com/watch?v=abmULTYJJEg)

**Break:**

**Jerod Santo:**

Rspack is the latest entry in the growing list of JavaScript-tooling that isn't powered by JavaScript. Launching on March 10th, Rspack combines TypeScript and Rust with a parallelized architecture in an attempt to bring frontenders the ultimate developer experience.

Rspack is lead by a team of devs at ByteDance and I was very impressed by the list of credits they included in the readme. Shouting out webpack, swc, esbuild, Parcel, Vite, Turbopack and other projects that came before and inspired Rspack's design.

The benchmark provided shows Rspack beating out webpack with SWC by a factor of ten when running with a cold start on 50,0000 modules.

**Break:**

**Jerod Santo:**

It's time once again for another lightning round.

This week's list: things that have been submitted to Changelog News that might be cool, but I don't know it's a tough call. They're interesting for sure, but are they good? You decide.

Up first: Doodle, a pure Kotlin, UI framework. It's expressive, with powerful, vector-oriented rendering, fully customizable layouts and simple pointer and keyboard handling. It's single language, with apps written entirely in Kotlin. No CSS or JS libraries necessary. And it's multi-platform, targeting the browser with JS and the JVM using common widgets and business logic.

Next up: Marqo, A tensor-based search and analytics engine that seamlessly integrates with your applications, websites, and workflows. They call it tensor search for humans. It's open source, but also has a cloud offering so you can scale seamlessly.

Last but not least: ILLA, an open source alternative to Retool, with low-code UI components and support for multiple data resources. Build internal tools in minutes and run them on your self-hosted ILLA infrastructure or ILLA cloud.

**Break:**

**Jerod Santo:**

That is the news for now. Wednesday on The Changelog, we deliver on our previously-mentioned Nathan Sobo interview. Nathan was the primary dev on the Atom Editor inside GitHub and now he's back with a brand new, high-performance, multiplayer code editor called Zed.

Check it, I've been using Zed since last week when we talked and I'm not gonna lie, I may have finally found a replacement for Sublime Text. It's early days, but it's pretty great so far.

Stay tuned for that conversation with Nathan, it's a good one. Have a great week, share the show with your friends if you dig it, and we'll talk to you again real soon.
