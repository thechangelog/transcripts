**Jerod Santo:**

What up, nerds? I'm Jerod and this is Changelog News for the week of Monday, September 8th, 2024.

After our [conversation](https://changelog.fm/607) with Alya Abbott last week, we decided to try [Zulip](https://zulip.com) in earnest for a bit. So far so good! The overall experience isn't quite as polished as Slack, but it's Nerd Built and you can tell they've put a lot of love into it. If you'd like to kick the tires with us, [I'll put the link to join at the top of this week's newsletter](https://changelog.zulipchat.com/join/4b3juauttqendhpyjarm6cd3/).

Ok, let's get into the news.

**Break:**

**Jerod Santo:**

[Is Linux collapsing under its own weight?](https://sporks.space/2024/09/05/is-linux-collapsing-under-its-own-weight-on-rust-for-linux/)

A Rust for Linux developer, Wedson Almeida Filho, [resigned from the project](https://lore.kernel.org/lkml/20240828211117.9422-1-wedsonaf@gmail.com/) after an [unfortunate interaction](https://youtu.be/WiPp9YEBV0Q?t=1529) with another maintainer. Wedson's parting words:

> I am retiring from the project. After almost 4 years, I find myself lacking the energy and enthusiasm I once had to respond to some of the nontechnical nonsense, so it's best to leave it up to those who still have it in them.

After that, Asahi Lina (developer of the Apple GPU drivers for Linux) [sounded off](https://vt.social/@lina/113045455229442533) with her own frustrations with maintainers and Rust from the DRM perspective. Her conclusion:

> But I get the feeling that some Linux kernel maintainers just don't care about future code quality, or about stability or security any more. They just want to keep their C code and wish us Rust folks would go away. And that's really sad... and isn't helping make Linux better.

The post I'm linking to is in response to those two events. The author ("cb") thinks they "signal deeper issues in Linux, both technical and cultural." Some of the technical & cultural issues are explained in the post. What does this mean for the Rust for Linux project?

> I think Rust for Linux as a project is in danger as a project, not because of technical reasons, but because of social ones. It’s trivial for a maintainer who doesn’t want Rust to sandbag integration efforts for their subsystem, for whatever reason (not liking it, not wanting the workload, etc.) via refusing to help.

And what does this mean for the future of Linux? The author seems to believe an eventual fork is likely...

**Break:**

**Jerod Santo:**

[Bret Victor introduces Dynamicland](https://dynamicland.org/2024/Intro/)

Bret Victor, a well-known interface designer and computer scientist best known for his amazing talks on the future of technology, has been working quietly on a new project, Dynamicland, for many years. Turns out he's done being quiet about it.

Dynamicland is essentially making the real world *computational* then giving people what they need to compute it however they like. You really should watch the six minute introduction video, which is filled with amazing statements like:

> You don't have to simulate a virtual world when the real world simulates itself.

And this one, which is just bonkers (emphasis added):

> Everything I've shown is taking place in our communal computing system, called Realtalk. And this is it. **Realtalk is not a codebase. It's a poster gallery.**

To call this endeavor _ambitious_ would be an understatement. Here's the sum, which, if they pull it off (and maybe they already have?) would be a big technical achievement & an enormous cultural achievement:

> Dynamicland is nonprofit, and Realtalk is not a product. You don't buy communal computing. You don't download communal computing.
>
> Our goal is to invent a form of computation which local communities of non-specialists can make for themselves. From the ground up, for their own needs, which they fully understand and control.
>
> A form of computation which is learned and taught, not downloaded and used. Like reading and writing, or mathematics, or the arts.
>
> Not a product, but a practice.


**Break:**

**Jerod Santo:**

["SRE" doesn't mean anything useful any more](https://rachelbythebay.com/w/2024/09/03/ops/)

Rachel (by the bay) laments her realization that "Site Reliability Engineer" has become useless as a way to categorize people with a *very particular set of skills*, much like every other title has before it:

> Clearly, somewhere along the line, someone lost the thread, and it has completely destroyed any notion of what a SRE was supposed to be.
>
> Just so we're operating on a level playing ground here, I'll lay down my own personal definition of the term, and what I expected from people in that role and what I expected from myself.
>
> To me, a SRE is *both* a sysadmin AND a programmer, developer, whatever you want to call it. It's a logical-and, not an XOR.

She goes on to detail what is meant by "sysadmin" and what is meant by "programmer", but what she's been seeing in attempts to hire are "SRE"s who are just ops people. I agree with Rachel, but not just about SREs... I've found most job titles in the software world to be relatively useless, and so much more so as each title ages.

Rule of thumb: adopt any title necessary to make that money as long as you can deliver the goods

**Break:**

**Jerod Santo:**

It's now time for Sponsored News!

[3.7 million fake GitHub stars](https://socket.dev/blog/3-7-million-fake-GitHub-stars-a-growing-threat-linked-to-scams-and-malware)

How much weight do you put in a project's GitHub star count? Probably too much...

Socket researchers have uncovered 3.7 million fake GitHub stars, highlighting a growing threat linked to scams, fraud, and malware, with these campaigns rapidly increasing over the last six months.

Based on this research, Socket is launching a new “Suspicious Stars on GitHub” alert that utilizes the low activity and clustering heuristics to detect packages associated with repositories that have fake stars.

if you want to get proactive alerts and check your entire organization for suspicious star packages (and 70+ indicators of supply chain risk), install the free [Socket for GitHub app](https://socket.dev/features/GitHub) in just 2 clicks (link in the newsletter). Whenever a new dependency is added or updated in a pull request, Socket analyzes the package's behavior and security risk, alerting you before any malicious code has the chance to land in your project.

**Break:**

**Jerod Santo:**

[Your company needs Junior devs](https://softwaredoug.com/blog/2024/09/07/your-team-needs-juniors)

Doug Turnbull does a good job laying out the case for hiring junior devs, a drum that I've been beating off & on for years.

> Lately, BigTech only wants elite squads of Staff devs that can “hit the ground running” on the big (often AI) initiative. It’s been remarked (over and over) that AI will completely replace junior developers. Juniors, after all, exist to do “code monkey” work, easily replaced with an LLM.
>
> However, that misses the mark on why we have junior employees. Coaching junior employees becomes its own force multiplier for innovating at scale. It’s not about the added labor, it’s about a psychologically safe culture that values teaching and learning, and the innovation that this unlocks.

Doug makes a lot of great points in this article. I'll add one: junior developers are *plenteous*! That means you can take your time and find the ones that will really gel with your organizational culture. Also you don't have to pay them as much while you train them up & make them more valuable so you can pay them more.

Q: "But what if we train them up and they leave?"
A: ["What if you don't train them and they stay?"](https://philsforum.com/2017/08/dont-train-stay.html)

**Break:**

**Jerod Santo:**

[The LLM honeymoon phase is about to end](https://www.baldurbjarnason.com/2024/the-llm-honeymoon-phase/)

Baldur Bjarnason has been *consistently* bearish on the current crop of AI tools/products since I've been following him. I don't agree with him in all aspects, but he does a good job of arguing his position, so I appreciate his writing on the subject.

In this latest post, Baldur explains how weaknesses in how LLMs work are making them great targets for manipulation.

> We’ve also known for a while that [prompts are effectively impossible to secure](https://softwarecrisis.dev/letters/prompts-are-not-fit-for-purpose/).
>
> It should not come as a surprise that some researchers decided to see if prompt “security” could be bypassed with a malicious token stream that completely bypasses the whole “comprehensible language” part.
>
> The process for discovering these malicious token streams – sorry, “Strategic Text Sequence” – is quite similar to what Profound, the company mentioned earlier, seems to be doing. You automate a process of shoving customised prompts into one end of the LLM black box and you map the output to discover token streams that have an unusually big impact on the output.

Given the opportunity for businesses to gain an unfair advantage... we all know what they'll do with it. Baldur thinks this is going to go from bad to much, much worse as these techniques are uncovered:

> This is going to get automated, weaponised, and industrialised. Tech companies have placed chatbots at the centre of our information ecosystems and butchered their products to push them front and centre. The incentives for bad actors to try to game them are enormous and they are capable of making incredibly sophisticated tools for their purposes.

**Break:**

**Jerod Santo:**

That's the news for now, but also scan this week's Changelog Newsletter for even more news worth your attention: like creating a git commit the hard way, greppability as an underrated code metric, and more!

Get in on that newsletter by popping your email address in at changelog.com/news

We have some great episodes coming up this week:

- On Wednesday: [Erez Zukerman](https://www.zsa.io/voyager) talking ergonomic keyboards
- On Friday: [Natalie Pistunovich](https://changelog.com/person/nataliepis) talking AI coding tools

Have a great week! Leave us a 5-star review if you dig our work, and I'll talk to you again real soon.
