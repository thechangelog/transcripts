**Jerod Santo:**

What up,nerds? I'm Jerod and this is Changelog News for the week of Monday, January 22nd, 2024.

On Saturday, I shipped our first ever [Changelog++ exclusive](https://changelog.com/jsparty/plusplus-308-pre-party) episode of JS Party. The public mp3 is a 6-minute "teaser trailer" for the 52-minute [Changelog++](https://changelog.com/++) full version. Is this kind of thing interesting? Does it compel you to sign up (or stay signed up)? Or is it lame and gatekeepy? I'd love to hear your thoughts on it. Always experimenting!

Ok, let's get into the news.

**Break:**

**Jerod Santo:**

Let's start today with some quick headlines to whet your appetite: after four months of work, OpenTofu is now generally available for download. Flipboard has started its 3-phase process of joining the Fediverse. Mozilla now maintains a dashboard to track Platform Tilt against Firefox. The Concise TypeScript book is free and open source on GitHub. And the Apache Answer team is looking for contributors.

Links to all of these are in the companion newsletter.

**Break:**

**Jerod Santo:**

Alex Ellis writes: "The time-sharing computers of the 1970s meant operators could submit a job and get the results at some point in the future. Under the guise of "serverless", everything old is new again."

Back in those days, users would submit tasks or batch jobs to large computers and collect the results when the jobs where done. Alex's new project, [actions-batch](https://github.com/alexellis/actions-batch), is bring that workflow back thanks to GitHub Actions. How it works:

1. You write a bash script and pass it in as an argument
2. A new repo is created with a random name in the specified organisation
3. A workflow file is written to the repo along with the shell script, the workflow's only job is to run the shell script and exit
4. The workflow is triggered and you can check the results

He has a bunch of example scripts in the README showing everything from generating ASCII art to using Llama from HuggingFace and more.

**Break:**

**Jerod Santo:**

DevDocs.io is my new favorite documentation browser. It combines multiple API documentations in a fast, organized, and searchable web interface. This installable web app works offline, has keyboard shortcuts for quick navigation, supports fuzzy matching & is 100% free and open source. I've been using it non-stop since I found it last week. It's so nice to have a unified interface for disparate languages/ecosystems right there in a browser tab waiting for you.

**Break:**

**Jerod Santo:**

It's now time for Sponsored News!

Socket for GitHub protects your apps from those dreaded supply chain attacks right where you live: Whenever a new dependency is added in a pull request, Socket analyzes the package's behavior and security risk.

The best part: Socket is quick and easy to install! Just install the official GitHub app from the marketplace, choose the repos you want it to protect & Socket will automatically analyze your project and keep them secure. Too easy! But don't take our word for it... [Check it out for yourself](https://socket.dev/features/github?utm_source=changelog&utm_medium=newsletter&utm_campaign=changelog-news) using the link in the show notes and chapter data.

Thanks again to Feross and our friends at Socket for sponsoring this week on Changelog news.

**Break:**

**Jerod Santo:**

Bun creator Jarred Sumner reiterates just how popular JavaScript is and then explains why existing shells don't work in JavaScript.

> macOS (zsh), Linux (bash), and Windows (cmd) all have slightly different shells with different syntaxes and different commands. The commands available on each platform are different, and even the same command can have different flags and behaviors.

Because of this, the community relies on npm packages (rimraff, cross-env, which) to polyfill missing commands. To help JS devs write shells scripts with less ceremony and more speed, the Bun team decided to build a shell right into the runtime:

> The Bun Shell is a new experimental embedded language and interpreter in Bun that allows you to run cross-platform shell scripts in JavaScript & TypeScript.
>
> It works on Windows, macOS, and Linux. We've implemented many common commands and features like globbing, environment variables, redirection, piping, and more.

The code samples all look pretty sweet, but the one thing Bun Shell has going against it: _potential vendor lock-in..._

**Break:**

**Jerod Santo:**

Web components have been discussed a lot recently as [browser support creeps up](https://caniuse.com/custom-elementsv1) and web developers look for non-framework-specific ways of creating their components:

> Unfortunately, framework-specific components fail us in a number of ways:
>
> - You can only use them in the framework they’re designed for 🔒
> - Their lifespan is limited to that of the framework’s ⏳
> - New frameworks/versions can lead to breaking changes, requiring substantial effort to update components 😭

Web components solve these problems and Shoelace is a library to help you use web components directly.

> Shoelace provides a collection of professionally designed, highly customizable UI components built on a framework agnostic technology. Why spend hundreds of hours (or more) building a design system from scratch? Why make a component library that only works with one framework?



**Break:**

**Jerod Santo:**

Homelabbers, unite around this awesome guide by Martin Heinz! Martin says: "Low indoor air quality - or high CO2 - negatively impacts cognitive performance, causes headaches, drowsiness and more. It's easy to fix though, just use a CO2 sensor and open a window from time-to-time. But why stop there, when you can set up complete air quality monitoring solution using CO2 sensor, Prometheus, Grafana dashboards and alerts?"

The entire guide and sample code are available for you to follow for yourself. His closing thought is yet another demonstration that the hacker spirit is alive and well 🙌

> Could you just use the phone app that comes with sensor? Sure. Is this setup over-engineered? Probably. Is it unnecessary? Most definitely; but it works, and it's fun to tinker with hardware.
>
> It also gives you full control of the data; transforms it into standardized format in case you want to play with it further, and you don't have to rely on closed-source smartphone app.

**Break:**

**Jerod Santo:**

That is the news for now, but also scan the newsletter for more stories like Brent Simmons on why corporations are not to be loved, an insane post where the author implemented a GPT in 500 lines of SQL, Baldur Bjarnason's disillusionment with Deno & more. If you don't also receive the Changelog News(letter) pop your email address in at changelog.com/news and fix that bug.

We have some amazing guests coming coming on the pods this week: Raza Habib from Human Loop on Practical AI, the Boxy HQ team on The Changelog, Shaundai Person on JS Party & Jose Valim on Changelog & Friends.

Have a great week, **hit us up with a 5-star review** if you dig our work, and I'll talk to you again real soon. 💚
