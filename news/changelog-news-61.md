**Jerod Santo:**

What up, my nerds? I'm Jerod and this is Changelog News for the week of Monday, September 11th, 2023.

The web dev world erupted last week after Ruby on Rails creator and long-standing contrarian David Heinemeier Hansson ripped TypeScript out of Turbo 8 and proclaimed the move loudly on his blog. Folks lined up for/against and heatedly debated TypeScript's merits, DHH's voice in the community, and (of course) who _really_ cares about code quality (and who doesn't).

If you want my thoughts on the matter, stay tuned for this week's episode of [JS Party](https://jsparty.fm). We're recording an "emergency pod" (it's not really an emergency, but that's fun to say and makes us feel important) all about the TypeScript "exodus" this afternoon with special guest Rich Harris...

Ok, let's get into the news.

**Break:**

**Jerod Santo:**

Bun –Jarred Sumner's [Zig](https://ziglang.org)-based JavaScript runtime that's giving Node and Deno a run for their money– is now "stable and production-ready." The big 1.0 release dropped to much fanfare with a 30-minute intro video in the image of an Apple keynote. What is Bun all about? In their words, "Bun's goal is simple: eliminate slowness and complexity without throwing away everything that's great about JavaScript. Your favorite libraries and frameworks should still work, and you shouldn't need to unlearn the conventions you're familiar with."

Bun boasts NodeJS compatibility (not 100% coverage), extreme speed (4x faster than Node at boot, more when running TS files), built-in TypeScript and JSX support, ESM & CommonJS compat, web APIs like `fetch` and `WebSocket`, and cool features like built-in support for SQLite, password hashing & more. It's pretty impressive how much has been done by such a small team.

**Break:**

**Jerod Santo:**

Linux users get the first crack at running Mojo locally (Mac and Windows coming soon). What's Mojo? "A new programming language for AI developers that will grow into being a superset of Python over time." They're calling it 'Python++' because...

"Python is pervasive, but not the right tool for tasks that require high performance or exotic hardware. Mojo enables high performance on CPUs, as well as support for exotic accelerators like GPUs and ASICs, providing performance on par with C++ and CUDA."

This first release of the Mojo SDK includes a shell with a REPL, a VS Code extension & Jupyter kernel so you can run Mojo notebooks.

**Break:**

**Jerod Santo:**

Large language models are multiplying like wet gremlins! The question is... which one(s) to use? Vince Lwt wondered the same thing, so he built a thing: "I had the idea of writing a script that asks prompts testing basic reasoning, instruction following, and creativity on around 60 models that I could get my hands on through inferences API. The script stored all the answers in a SQLite database, and those are the raw results."

On the linked website, you can view all the answers from a specific model or all the models answering a specific prompt.

My takeway from the prompt: "Argue for and against the use of kubernetes in the style of a haiku." Is that most models don't understand the rules of a haiku... Example! Code Llama says...

"Kubernetes is a tool, A tool to manage your containers, But is it worth it?"

A profound poem,
But a haiku it is not,
Don't quit your day job

**Break:**

**Jerod Santo:**

Last October, Will McGugan [told us](https://changelog.fm/511) about his plan to bring TUIs to the web.

**Will McGugan:**

[Clip from The Changelog #511](https://changelog.com/podcast/511)

**Jerod Santo:**

Well, now he's gone and done it with [textual-web](https://github.com/Textualize/textual-web). Just like he said in the clip, with the textual-web command you can publish any Textual app on the web, making it available to anyone you send the URL to. This works without creating a socket server on your machine, so you won't have to configure firewalls and ports to share your applications.

Check out the linked [demo video](https://www.youtube.com/watch?v=A8k8TD7_wg0) to see it in action. I didn't totally get it when Will described this to us the first time, but I think I see the value now. You write a terminal app with your Python knowledge, making full use of the [widgets](https://textual.textualize.io/widget_gallery/) and other niceties that Textual provides... Then point textual-web at it and _easily_ expose that exact same app to non-terminal folks, too!

**Break:**

**Jerod Santo:**

It's now time for some Sponsored News!

Tailscale has partnered with Mullvad to make its global network of VPN servers available for their customers!

([Mullvad](https://mullvad.net/) is a VPN service that’s known for its strong commitment to user privacy, anonymity, and security. It safeguards user privacy by not logging or monitoring user activity, and it uses a unique account number system for subscriptions, meaning personal data is not tied to your account. Services like Mullvad help you browse the internet more privately.)

Taking advantage of this new partnership means that even when you’re far from home, you can stay connected to the things you care about via Tailscale and maintain private internet browsing from your tailnet thanks to Mullvad’s secure and high-speed global network.

Learn more about Tailscale and this new Mullvad offering at changelog.com/tailscale. Once again that's changelog.com/tailscale

**Break:**

**Jerod Santo:**

James Haydon went deep (and I mean _deep_) to investigate what exactly went wrong on August 28th, 2023 when _NATS_, the UK's air traffic control operator, suffered a major technical incident and had to cancel 2000+ flights costing an been estimated £100+ million GBP.

This #longread takes you on a ride, much like a good whodunnit novel. Here's James' thoughts from the denouement on what went wrong:

1. The software that processes flight plans was written in a buggy way
2. The software and system are not properly tested
3. The system has bad failure modes

Each of these three points has sub-points that include "the procedure was very fiddly and failed for a silly reason" and "A single flight plan caused a problem, and the entire FPRSA-R system crashed."

This reminds me of the tail end of [our conversation](https://changelog.com/friends/11) with Landon Gray & Justin Searls when I said the stakes have never been higher and Justin said...

**Justin Searls:**

[Clip from Changelog & Friends #11](https://changelog.com/friends/11)

**Break:**

**Jerod Santo:**

That's the news for now! But this week's companion newsletter has a bunch more goodies in it, including the Commit Mono programming typeface, an excellent piece by Ramona Schwering for Smashing Mag about The Testing Pyramid, and a silly game that shows you pictures of people's faces and you try to decide whether they're a serial killer or a programming language inventor.

Speaking of serial killers, I leave you with this excellent quote from John Woods: "Always code as if the person who ends up maintaining your code will be a violent psychopath who knows where you live."

Have a great week, share The Changelog with your friends who might dig it, and I'll talk to you again real soon.
