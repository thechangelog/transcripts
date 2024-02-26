**Jerod Santo:**

What up, nerds? I'm Jerod and this is Changelog News for the week of Monday, February 26th 2024.

If my math is correct (rare), our good friend [Gerhard Lazu](https://changelog.com/person/gerhard) **officially turns 4 years old** on Thursday! Happy Leap Year Birthday, Gerhard!

Aside: one of my first ever programs for school calculated leap years, so I learned _the hard way_ that it's more complicated than "is the year divisible by 4?"

The logic is actually: `year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)`

But I digress... let's get into the news.

**Break:**

**Jerod Santo:**

GPTScript is a new scripting language to automate your interactions with LLMs (which just means OpenAI for now).

> The ultimate goal is to create a fully natural language based programming experience. The syntax of GPTScript is largely natural language, making it very easy to learn and use. Natural language prompts can be mixed with traditional scripts such as bash and python or even external HTTP service calls.

The project includes examples of how to [plan a vacation](https://github.com/gptscript-ai/gptscript/blob/main/examples/travel-agent.gpt), [edit a file](https://github.com/gptscript-ai/gptscript/blob/main/examples/add-go-mod-dep.gpt) or [run some SQL](https://github.com/gptscript-ai/gptscript/blob/main/examples/sqlite-download.gpt). The central concept is that of "tools". Each tool performs a series of actions (similar to a funciton) and you GPTScript composes the tools to accomplish tasks.

**Break:**

**Jerod Santo:**

Adam Wiggins' writes a Muse retrospective. We went deep on Muse (a canvas-based thinking tool for iPad and Mac) during our [two](https://changelog.fm/513) [part](https://changelog.fm/514) Heroku interview with Adam, so it's sad to see him move on from the project:

> We raised $2M in funding, grew the team to seven, had tens of thousands of active users, and thousands of customers. Despite that, we never reached sufficient organic growth or found the right business model for financial viability. I stepped away along with majority of the team in fall of 2023, leaving the business in the hands of one of my former colleagues.

With a laudable level of transparency, he lays out Muse in its entirety: from its origins and original vision to why it didn't work and his final takeaways, including: Inventing a new document type is hard, helping to define an emerging category is hard & stuff that works… eventually stops working.

**Break:**

**Jerod Santo:**

It's now time for sponsored news!

If you are experiencing slowdowns in your application due to excessive JOINs and lengthy query durations, it might be time to re-evaluate your database. Consider the power of a Graph database.

Graph databases let you model data the way it looks in the real world, instead of forcing it into the confines of traditional row and column structures.

Move beyond the limitations of relational databases for tasks they aren't built to handle. Whether it's managing intricate supply chains, detecting fraud, conducting real-time analytics, or powering genAI applications, graph technology excels in scenarios rich with interconnected data.

Neo4j offers the flexibility to develop using your preferred programming languages and connect via any driver, ensuring seamless integration with your existing technology stack.

People are solving some of the world’s biggest problems with graphs…Now it’s your turn.

Begin your journey at Neo4j.com/developer

**Break:**

**Jerod Santo:**

Nikita Prokopov surveyed a bunch of popular websites to see how much JS they loaded on their pages. The results bring out the parent in me: "Your mother and I are not angry with you, but we're disappointed." Here's a sampling of the offenders:

- Zoom, 6 MB
- Vercel, 6 MB
- Pinterest, 10 MB
- Gitlab, 13 MB
- Google, 9 MB

Niki approximates that 10MB of minified JS expands to ~300k lines of code... and remember:

> It’s not just about download sizes. I welcome high-speed internet as much as the next guy. But code — JavaScript — is something that your browser has to parse, keep in memory, execute. It’s not free. And these people talk about performance and battery life...

**Break:**

**Jerod Santo:**

Pages CMS is a no-hassle CMS for GitHub Pages, with a sales pitch that sounds like the start of an infomercial:

> Tired of juggling Git and YAML to update your Next.js, Astro, Hugo or Nuxt website? Make it easy on you and your team, get a user-friendly CMS running straight on top of GitHub.

I'm not personally tired of juggling Git and YAML (Ok, maybe YAML) but I love how this tool might enable technical and non-technical team members to collaborate on a (100% free) static website.

**Break:**

**Jerod Santo:**

Jim (hyphen) Nielsen writes about what he calls the web's superpower: permission-less link sharing

> To some, the hyperlink is dangerous and must be controlled: they want to control what you can link to, they want to control how many links you can make, they want to monetize your links and give you no credit...
>
> And yet, we keep on linking:
>
> - To whatever we want (👋 Apple)
> - However many times we want (👋 Meta)
> - And with no expectation of return (👋 Google/Open AI)

Couldn't agree more! I've long said the most important element of the web is the humble `<a>` tag. Go forth and link to things! Or in Jim's words: "Subvert the status quo. Own a website. Make and share links."

**Break:**

**Jerod Santo:**

That's the news for now, but I'm pretty excited for our upcoming follow-up episode with Nathan Sobo about the Zed editor. I've been using Zed ever since they open sourced it a few weeks back and I have to say, it's the first editor that's kept my attention for this long since... Sublime Text.

I'll leave you with this quote from Grady Booch: "The function of good software is to make the complex appear to be simple."

Have a great week, make good software, share The Changelog with other makers of good software, and I'll talk to you again next week.
