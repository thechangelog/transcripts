**Jerod Santo:**

What up, nerds? I'm Jerod and this is Changelog News for the week of Monday, October 27th, 2025.

R.I.P, Dead Internet Theory. A [new study](https://sherwood.news/tech/reading-an-article-online-its-now-a-coin-flip-whether-it-was-authored-by-a/) found that AI is writing as many web articles as humans (and that's just counting the robots they actually caught)

I think it's time we pronounce the *Theory* dead, because the *Dead Internet* itself is alive and growing. Oh, and did I [mention](https://www.bbc.com/mediacentre/2025/new-ebu-research-ai-assistants-news-content) that AI assistants misrepresent news content 45% of the time? 🫠

Ok, let's get into this week's news.

**Break:**

**Jerod Santo:**

[Code like a surgeon](https://www.geoffreylitt.com/2025/10/24/code-like-a-surgeon)

Needless to say, we're all trying to figure out how to best "do the code thing" in a post-LLM world. Should we *direct*? Should we *babysit*? Should be ignore the hype and *JUST KEEP TYPING*?! Geoffrey Litt has opinions:

> Personally, I’m trying to code like a surgeon.
>
> A surgeon isn’t a manager, they do the actual work! But their skills and time are highly leveraged with a support team that handles prep, secondary tasks, admin. The surgeon focuses on the important stuff they are uniquely good at.

This "software surgeon" concept isn't a new idea, Fred Brooks talked about it way back in 1975. Back then the support roles were all other humans, but that means it scales way better when we can get our support from robots. In other words, we can all be surgeons now! 

*(Cue "Weird Al" [doing](https://www.youtube.com/watch?v=notKtAgfwDA) what he does best)*

Even with this metaphor in hand, the hard part remains identifying what matters and what doesn't. 

And that... A) is a moving target, B) can be a hard pill to swallow (if you enjoy things that no longer matter), and C) requires change

Change is often the hardest part of all.

**Break:**

**Jerod Santo:**

[How to tame a user interface using a spreadsheet](https://blog.gingerbeardman.com/2025/10/11/how-to-tame-a-user-interface-using-a-spreadsheet/)

Matt Sephton:

> Many years ago, while working at Apple and running a lab at WWDC, I met a guy who was using a piece of [Apple software designed for creating interactive ads](https://en.wikipedia.org/wiki/IAd_Producer) to design a Car Play user interface for a popular US car manufacturer. I was impressed by his ability to think outside the box and told him so. I mentioned to him how human interface designers at Apple [were using Keynote to rapidly prototype user interfaces and animations](https://www.youtube.com/watch?v=DGn7BcFGigc&t=474s). The discussion then took a strange turn onto spreadsheets.

I remember having my mind blown when I learned that the lead designer behind [Grooveshark](https://jerodsanto.net/2010/12/the-tech-behind-the-new-grooveshark/)'s enviable UI did all of his work in Keynote. It's an amazingly malleable piece of software! 

Matt, it turns out, thinks spreadsheets "are one of the greatest user interface design tools ever created." In this post, he shows you why (and how).

**Break:**

**Jerod Santo:**

[Front-end maximalism](https://www.natemeyvis.com/front-end-maximalism/)

Nate Meyvis:

> Here's a question that comes up all the time:
>
> Q: I have a front end that calls into a back end. It needs to do things now, and might need to do more things later. How much filtering and preprocessing should the back-end do before it passes the data to the front end?
>
> And here's an answer I like:
>
> A: As little as possible.

Nate takes a *front-end maximalism* approach, which I actually **disagree with** pretty strongly (for some of the reasons he lists in the "When not to use a front-end maximalist approach" section). 

I'm happy to link to Nate's post, even tough I think he's wrong, because I appreciate the viewpoint diversity and these are absolutely discussions we should be having. 

Also because I find his use of [Gall's Law](https://www.laws-of-software.com/laws/gall/) to advocate for putting *more* logic in your front-end... kinda hilarious.

**Break:**

**Jerod Santo:**

It's now time for sponsored news!

[GitHub Actions, but faster](https://namespace.so/docs/solutions/github-actions/caching)

=
Your CI shouldn't be the bottleneck between commits and customers. But the truth is, it can be. GitHub Actions can feel slow out of the box. Long builds, redundant installs, wasted minutes...it all adds up.

Namespace fixes that with blazing-fast caching for GitHub Actions. It accelerates dependency installs, reuses previous builds, and keeps your pipelines warm. So instead of waiting for containers to build or parts of your toolchain to install, you're shipping new features.

The result? Less coffee breaks, more deploys. Teams are shaving minutes off every run, saving many hours per week. That means faster iteration, faster fixes, and faster customer impact.

If you're using GitHub Actions and love your time, check out Namespace.

Learn more at [namespace.so](https://namespace.so) or by following the link in this week's companion newsletter

**Break:**

**Jerod Santo:**

[Why the 9-5 is underrated](https://thehustlingengineer.substack.com/p/maybe-the-95-isnt-so-bad-after-all)

As a guy who hasn't worked a 9-5 since 2011, I deeply understand both the pros and cons of self-employment. So I wince when I see people fetishize "being your own boss" like it's the end-all, be-all of career achievement.

It's not very often that I see somebody explicate why typical 9-5 employment is actually a great option for many people, so I thought I'd link up this post by Hemant Pandey, which does a good job of it:

> The 9–5 has been unfairly villainized. We treat it like a cage, but for most people, it’s actually the best launchpad to build a great life...
>
> You don’t have to quit your job to build a meaningful, fulfilling life. You just have to be intentional with how you approach it.

Hemant lays down five ways you can intentionally approach your 9-5 to make it work for you:

1. Find the right environment
2. Invest in skills that compound
3. Build something small on the side
4. Redefine freedom
5. Use stability as leverage

Lots of good advice in this post, ending with this, which I will gladly cosign:

> Maybe one day you will quit and go all-in, but do it because you’re ready, not because the internet told you to.

**Break:**

**Jerod Santo:**

[React vs Backbone in 2025](https://backbonenotbad.hyperclay.com/)

David Miranda built two simple password strength testers: [one](https://gist.github.com/panphora/8f4d620ae92e8b28dcb4f20152185749) in React, and one in [Backbone](https://gist.github.com/panphora/1cfc175c2bbffe4ed802e6e61e945603). Remember Backbone?!

> Look at the two implementations above. The code is roughly the same length. They do exactly the same thing. One was written with a framework from 2010, the other with a framework that's had countless developer hours and a massive ecosystem behind it for over a decade.
>
> The interesting part is not how much better React is—it's how little progress we've actually made.

David argues that React *looks* cleaner, but you're trading explicit simplicity for abstraction complexity. And that magic has a high price. 

I think the comparison falls short, though, because the comparison app itself is too simple. I'm not sure if David was there in 2010 when we were all building web apps with Backbone, but I sure was. Everything starts off great, but eventually you end up with [the world's largest ball of twine](https://biggestball.website).

React's biggest innovation was bringing one-way data flow to web apps, which dramatically simplifies the mental model devs have to carry in their brain when building complex apps. I don't love React, myself, but I wouldn't go back to Backbone for that reason alone. 

(I would (and do) go back to jQuery style sites, when all I need is JavaScript sprinkles. And let's be honest: JavaScript sprinkles is so often *exactly* what we need.)

**Break:**

**Jerod Santo:**

That's the news for now, but go and subscribe to the Changelog Newsletter for the full scoop of links worth clicking on. Such as:

- [You already have a git server](https://maurycyz.com/misc/easy_git/)
- [How we saved $500k/year by rolling our own “S3”](https://engineering.nanit.com/how-we-saved-500-000-per-year-by-rolling-our-own-s3-6caec1ee1143)
- [You should feed the bots](https://maurycyz.com/misc/the_cost_of_trash/)

Get in on the newsletter at changelog.news

Last week on the pod: Ellie Huxtable joined me to discuss bringing Atuin to the desktop and Gerhard Lazu took us through all our latest improvements in Kaizen 21!

Coming up this week: Adam Jacob from System Initiative on Wednesday and a spooky special with Adam and yours truly on Friday.

Have a great week! Like, subscribe, and leave us a 5-star review if you dig the show, and I'll talk to you again real soon.
