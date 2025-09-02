**Jerod Santo:**

What up, nerds? I'm Jerod and this is Changelog News for the week of Monday, September 1st, 2025.

If you need an uplifting story that displays the human spirit triumphing over tyranny, look no further than your local [Taco Bell drive-through](https://www.bbc.com/news/articles/ckgyk2p55g8o). 

My favorite fast food chain has been forced to *rethink* their AI ordering system after one heroic patron crashed it by ordering **18,000 waters**. Now that's what I call "High Quality H2O"

Ok, let's get into this week's news.

**Break:**

**Jerod Santo:**

[Next.js is infuriating](https://blog.meca.sh/3lxoty3shjc2z)

Dominik Meca finally decided to write a blog post. Because anger is the best motivator. And he's angry at Next.js:

> The Next.js devs have a vision and it's either their way or the highway. Note that if it was just the middleware, I wouldn't be sitting here, wasting away my weekend, ranting about a React framework. Believe it or not, I've got better things to do. It's constant pain you encounter daily when working with Next.js.

After <strike>complaining</strike> ranting some more, Dominik points to the [issue tracker](https://github.com/vercel/next.js/issues) and calls it a dumpster fire, which I have a hard time disagreeing with.

The top [HN comments](https://news.ycombinator.com/item?id=45099922) on this post (400+ as I write this) are in vehemently agree with him. I'd summarize the core issue as "too many layers of abstraction" with a sprinkle of "not enough extensibility" and a dash of "Vercel-based feature roadmap"...

**Break:**

**Jerod Santo:**

[Open source is one person](https://opensourcesecurity.io/2025/08-oss-one-person)

Josh Bressers was offended by The Register's recent story titled [Putin on the code: DoD reportedly relies on utility by Russian dev](https://www.theregister.com/2025/08/27/popular_nodejs_utility_used_by/):

> If you’re not real smrt, it seems like pointing out an open source project is written by one person in a country you don’t like is a bad thing. It could be. But it also could be the software running THE WHOLE F\*\**\*ING PLANET is written by one person. In a country. But we have no idea which country. It’s not the same person mind you, but it’s one person.

Josh goes on to point out (with receipts) that almost all open source is literally one person:

> A project exists called ecosyste.ms that catalogs a lot of open source. Most of it I would guess, but not all. They currently have 11.8 million open source projects in their data... So what do we mean by one person is open source. What I mean is if we look at all the projects that ecosyste.ms is tracking, how many have a single person maintaining that project? It’s about 7 million.

He also looks at npm package downloads and found that of the projects with over one million downloads this month (a proxy for usefulness), ~6,000 of them have solo maintainers while ~6,800 of them have more than one maintainer.

**Break:**

**Jerod Santo:**

[Why 'Copy as cURL' is so useful](https://huonw.github.io/blog/2025/08/copy-as-curl/)

 In this article, Huon Wilson does an excellent job describing the usefulness of web browser dev tools' “Copy as cURL” functionality and how best to work with its output to get stuff done.

> “Copy as cURL” gives bulky curl CLI invocation that captures almost exactly what **the browser sent to the server**, explicitly including all headers, authentication information, and any request data, in a **directly executable** way. Being executable means it can be used to easily replay the request as the browser sent it.

Huon says this is great for unambiguous communication with other people and easy edit/run debugging loops because it's executable and easily modified in a shell script. There are downsides to using this technique pervasively, such as accidentally sharing secrets in pasted output, and verbosity, because the output can sometimes be quite large.

**Break:**

**Jerod Santo:**

It's now time for sponsored news!

[Bring your own agent to Zed](https://zed.dev/blog/bring-your-own-agent-to-zed)

You shouldn't have to settle for subpar editing environments in order to use the AI agent of your choice.

Zed is a high-performance, open source code editor built for flow, collaboration, and speed. And they just launched the [Agent Client Protocol](http://agentclientprotocol.com/) (ACP) so you can build and use multiple external agents directly in Zed. You can now interact with third-party agents directly within Zed! To make this possible, they created ACP and partnered with Google to integrate Gemini CLI as the initial reference implementation.

Write your own agent, or fork Gemini CLI. Use it in Zed, or bring it to another ACP-compatible editor. This is AI tooling the way it should be: flexible, fast, and fully yours.

Head to [zed.dev/blog](https://zed.dev/blog/bring-your-own-agent-to-zed) or follow the link in the newsletter to learn more. And thanks to our friends at Zed for sponsoring Changelog News.

**Break:**

**Jerod Santo:**

[Bear is now source-available](https://herman.bearblog.dev/license/)

Bear, a "privacy-first, no-nonsense, super-fast blogging platform", was MIT licensed until yesterday. Herman Martinus, Bear's creator, explains why he decided to change it:

> Unfortunately over the years there have been cases of people forking the project in the attempt to set up a competing service. And it hurts. It hurts to see something you've worked so hard on for so long get copied and distributed with only a few hours of modification. It hurts to have poured so much love into a piece of software to see it turned against you and threaten your livelihood. It hurts to believe in open-source and then be bitten by it.

He decided to adopt the [Elastic License](https://github.com/HermanMartinus/bearblog/blob/master/LICENSE.md), which is almost identical to the MIT but with the stipulation that the software cannot be provided as a hosted or managed service. Herman cites sixth other projects that have made a similar change in the past few years, and concludes:

> We're entering a new age of AI powered coding, where creating a competing product only involves typing "Create a fork of this repo and change its name to something cool and deploy it on an EC2 instance".
>
> While Bear's code is good, what makes the platform special is the people who use it, and the commitment to longevity.
>
> I will ensure the platform is taken care of, even if it means backtracking on what people can do with the code itself.

**Break:**

**Jerod Santo:**

[The hidden costs of dependency bloat](https://oneuptime.com/blog/post/2025-09-02-the-hidden-costs-of-dependency-bloat-in-software-development/view)

Nawaz Dhandala unpacks why dependency bloat is such a pervasive problem:

> Dependency bloat has become the silent productivity drag on software projects. It's not just about the size of your node_modules folder or the length of your requirements.txt. It's about the hidden costs that compound over time, making your codebase harder to maintain, your applications less secure, and your development process slower and more frustrating.

I like some of his advice on how to prevent dependency bloat in the first place.

1. Question every addition
2. Regular dependency audits
3. Embrace minimalism
4. Monitor your attack surface
5. Foster a culture of ownership

These steps, of course, can be taken too far. The "yin" to Dependency Hell's "yang" is [Not Invented Here](https://en.wikipedia.org/wiki/Not_invented_here) syndrome.

**Break:**

**Jerod Santo:**

That's the news for now, but go and subscribe to the Changelog Newsletter for the full scoop of links worth clicking on. Such as:

- [A new kind of Ruby management tool](https://andre.arko.net/2025/08/25/rv-a-new-kind-of-ruby-management-tool/)
- [VIM Master](https://github.com/renzorlive/vimmaster)
- [Martin Fowler on LLMs and software dev](https://martinfowler.com/articles/202508-ai-thoughts.html)

Get in on the newsletter at changelog.news

We have some great episodes coming up this week: On Wednesday, Jim Remsik from XO Ruby tells us how he's organizing 6 conferences this fall and on Friday, Christian Rocha from Charm is with us talking CLIs, TUIs, and your new coding bestie.

Have a great week! Like, subscribe, and leave us a 5-star review if you dig the show, and I'll talk to you again real soon.
