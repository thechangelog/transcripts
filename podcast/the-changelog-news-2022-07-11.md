**Jerod Santo:** Hello friends, I'm Jerod and this is Changelog News for the week of Monday, July 11th, 2022

Just one note before we get started. I was pleasantly surprised to hear that y'all enjoy the little pop culture sound bites I've been sprinkling in, but it can be frustrating when you miss a reference. So, from now on I'll name and link to each sound bite's source material in the transcript.

**Guinness ad:**

[Brilliant. Brilliant!](https://www.youtube.com/watch?v=2K8Osz9RnvY)

**Jerod Santo:** OK, now to the news.

Probably the biggest piece of software to drop into our laps of late is Jarred Palmer's fast, all-in-one JavaScript runtime: Bun.

**Sir Mix-a-Lot:**

[Don't want none unless you got buns, hun](https://genius.com/4102404)

**Jerod Santo:** You can do side bends or sit-ups, but please don't lose that native bundler, transpiler, task runner and built-in npm client. Bun is here to compete with Node and Deno and is designed to be a drop-in replacement for your current JS and TS apps. The goal of Bun is to run most of the world's JavaScript outside of browsers, which is ambitious to say the least, but it has early testers and users confessing to its impressive speed.

**Lightning McQueen:** [Focus. Speed. I am speed](https://www.youtube.com/watch?v=4LaYn0541ro)

**Jerod Santo:** Jeremy Brown writes: Kubernetes is a red flag that signals premature optimization.

Which is weird, because he's spent much of his life advocating for and selling a distribution of Kubernetes and consulting services around it. Now, he didn't write this post merely to pick on Kates. Do people say Kates? Kay Eight Ess. Kubernetes. He says he's, "directing this post at every possible bit of premature optimisation engineers make in the course of building software."

The overwhelming sentiment can be summed up in these two points. One: Your organization needs engineers to create an impact on the mission, and two: try do more with less

Over the weekend, Armin Ronacher blogged a blog called "Congratulations: We Now Have Opinions on Your Open Source Contributions"

But I think he's being sarcastic about that congratulations bit, because he's not too excited about this.

**Inigo Montoya:** [You keep using that word. I do not think it means what you think it means.](https://www.youtube.com/watch?v=dTRKCXC0JFg)

**Jerod Santo:** This post is in response to a change made in Python's PyPi package manager. They are beginning to require 2 factor auth for "critical" packages. About this, and his newly deemed "critical" package, Armon says: "Once packages are within a certain level of adoption compared to the global downloads, they are considered critical. Currently if you maintain a "critical" package it means that you need to enroll a multi factor authenticator. It appears that the hypothetical consequence of not enrolling into 2FA is not being able to release new versions. My visceral reaction to this email was not positive."

I think we can all agree that increasing supply chain security is a noble goal for every package ecosystem, and on paper it makes sense for this requirement to not affect every package maintainer (at least not at first), but I can still see how it rubs people the wrong way. Again, Armon says: "When I create an Open Source project, I do not chose to create a “critical” package. It becomes that by adoption over time. Right now the consequence of being a critical package is quite mild: you only need to enable 2FA. But a line has been drawn now and I'm not sure why it wouldn't be in the index's best interest to put further restrictions in place."

File this one under: open source... it's complicated.

Next up, Rustlings: small exercises to get you used to reading and writing Rust code. This repo (that's maintained by the Rust team) has made Changelog News in the past, but Daniel Thompson from Tauri (yes, that's how you pronounce it: Tauri) recommended it on The Changelog so we linked it up again. Here's a bit of Daniel telling us how Tauri is like a gateway to Rust:

**Daniel Thompson:** Because you don't need to write Rust from the beginning, it lowers the barrier to entry. Because you can say you've built a Rust-based application. Just being able to say this is one of those visualization techniques of getting better at things... understanding that, yes, you are capable of doing it. And the fact is  people get interested by it. Over the three years we've been working on this project a couple people have very visibly improved in their Rust. In the beginning they're like, "this is hard!" Everything is hard if you've never done it before. Having Tauri as a gateway to understanding: ok, well I need a compiler. Why do I need a compiler? Well, having a compiler is good because it makes my app small. Great, so you get that out of the way. Then you discover that, oh maybe there's this special custom feature you want to make and you follow the instructions and you write a couple lines of Rust. Then the compiler's like, "you did it wrong", and you're like, ok what'd I do wrong? Oh that's what I did wrong! And you figure it out. Suddenly you've written a couple lines of Rust.

**Jerod Santo:** Last one for today: Jargon from the functional programming world in simple terms!

FP provides many advantages and I can say that in my career as I learned and applied functional principles to my code  (even in OOP languages like Ruby and JavaScript) my software became easier to reason about, less error-prone and more maintainable.

Unfortunately, all that FP jargon can be a real sticking point. It can make you feel like a Baby Boomer trying to communicate with Gen Z:

**Gen Z Villain:** [You tryin' to flex on me... pull up in a suit? I'm not trying to buy car insurace, bruh.](https://www.youtube.com/watch?v=65kPTniJusE)

**Jerod Santo:** If arity, currying, idempotent, monoid, monad, or applicative functors have you cappin'... Check out this glossary which includes defintions and example code.

**Jerod Santo:**

That's the news for now. We'll be back in your ears on Friday with that Tauri episode. It's a deep one, clocking in at almost an hour forty before mastering.

We'll talk to you then.
