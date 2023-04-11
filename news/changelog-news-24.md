**Jerod Santo:**

How do you do?

**Steve Buscemi:**

[How do you do, fellow kids?](https://www.youtube.com/watch?v=VMin0i_h8PI)

**Jerod Santo:**

I'm Jerod and this is Changelog News for the week of Monday Dec 12th, 2022. Let's do it.

**Break:**

**Jerod Santo:**

First up, it's tRPC which allows you to easily build & consume fully typesafe APIs without schemas or code generation. How does it do that? By making good use of TypeScript inference. And since TypeScript is core to tRPC, it comes with autocompletion and all the tooling benefits that TS users love. tRPC creator Alex says this about the project:

"I built tRPC to allow people to move faster by removing the need of a traditional API-layer, while still having confidence that our apps won't break as we rapidly iterate. Try it out for yourself and let us know what you think!"

**Lloyd:**

[That sounds good, I think I'll have that.](https://www.youtube.com/watch?v=aufzEgP97Kg)

**Break:**

**Jerod Santo:**

The top-clicked link in the latest Changelog Newsletter was Michael Muré's git-bug repo. This is a cool idea: a bug tracker that is fully embedded in git, which means that anywhere your git repo goes, the bug tracker goes with it.

**Matt Foley:**

[Ol' Matt's gonna be your shadow. Here's you, here's Matt. There's you, there's...](https://www.youtube.com/watch?v=Xv2VIEY9-A8)

**Jerod Santo:**

You create and manage bugs right from its CLI with commands like `git bug add`, `git bug push`, `git bug ls` and such. The software ships with an interactive terminal UI and a work-in-progres web UI as well.

git-bug also bridges to other bug trackers like GitHub, GitLab, Jira & Launchpad. This project is super cool, but in the README Michael says, "Help needed! This project has grown bigger than I can handle by myself, especially with a day job. I'm looking for people to help on or maintain part of it..."

If you know Go, or want to learn it by experience, this looks like a great open source project to get involved with.

**Break:**

**Jerod Santo:**

Are you captivated by ChatGPT? Have you tried asking it a few things and gotten mixed results?

**Mrs. Doubtfire:**

[Help is on the way, dear! Help is on the way!](https://www.youtube.com/watch?v=nGUORSB1V14)

**Jerod Santo:**

Check out prompts.chat, an awesome list of prompts that get great results. Here's an example I cribbed from the list and adapted for the lulz: I want you to act as a poet. You will create poems that evoke emotions and have the power to stir people’s soul. Write on any topic or theme but make sure your words convey the feeling you are trying to express in beautiful yet meaningful ways. You can also come up with short verses that are still powerful enough to leave an imprint in readers' minds. My first request is "I need a poem about changelogs."

Without further ado, I present to you a poem about changelogs by ChatGPT:

**ChatGPT:**

A changelog is a record of change
A document that tracks each new feature and fix
Each update, each addition, each bug that is squashed
A changelog is a living, breathing document.

It grows with each release, each iteration
A reflection of the hard work and dedication
Of the team behind the code, the ones who pour their hearts and souls
Into making something better, something whole

A changelog is a glimpse into the past
A record of all that has come to pass
A reminder of the progress we have made
And the road that still lies ahead, unafraid

So here's to the changelog, a testament to growth
A celebration of change and all that it brings
May it continue to evolve and shine
A beacon of hope in a world that is constantly changing.

**Break:**

**Jerod Santo:**

Mike Nikles thinks dev environments in the cloud are a half-baked solution.

**Half Baked:**

[Brian's list of munchies.](https://www.youtube.com/watch?v=dzIJNG5__8s)

**Jerod Santo:**

We've talked a lot about Codespaces and a little about GitPod, even as recently as last week with Christina Warren, so I found this article super timely and compelling. Here's Mike's top-level gripes with cloud dev environments: 1) you must have internet access, 2) service availability is never 100%, 3) product quality varies, 4) latency is an issue, 5) vendor lock-in is a thing, and 6) the pricing model incentivizes not working.

Mike finishes up by saying the fully baked solution is a hybrid in your backyard and he places his bet on who has the best host at building such a solution. If you're curious about that, you know where to find the link.

**Break:**

**Jerod Santo:**

The last bit of news for today, OpenAI's Whisper model has been ported to C/C++. Georgi Gerganov's implementation has no dependencies, treats Apple Silicon as a first-class citizen, supports x86 architectures, has low memory usage, and runs on the CPU. The entire implementation is of the model is contained in just 2 source files. I played with this some over the weekend and can confirm it's very easy to compile and run compared to the official Python/PyTorch setup and works extremely well for me so far.

Because this port is so lightweight it can go many places PyTorch cannot. For example, Georgi shows it running the model on an iPhone 13 fully offline and it even runs in the browser via Wasm.

**Break:**

**Jerod Santo:**

That's the news for now and this is the final News episode of the year. We always take two weeks off at the end of December to relax, rejuvenate, and reboot our brains for what's next.

We'll still ship our regular interview show this Friday, which is a fun one. Shawn "Swyx" Wang returns to the pod this time to discuss these new prompts in our lives. Stable Diffusion 2, ChatGPT vs Google, and all that jazz.

**Chicago Soundtrack:**

[And all that jazz...](https://www.youtube.com/watch?v=J_YaxIL8MvM)

**Jerod Santo:**

After that you can expect our annual state of the log episode sometime next week. And then that's it, we're done 'til the calendar flips a new one.

Thanks so much for listening, have a great week and we'll talk to you again on Friday.
