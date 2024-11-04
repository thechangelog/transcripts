**Jerod Santo:**

What up, nerds? I'm Jerod and this is Changelog News for the week of Monday, November 4th, 2024.

Shout out to all the new friends we made at All Things Open last week! You know who you are.  We recorded some awesome conversations while we were there. We put [one](https://changelog.com/friends/68) out last Friday and there's more coming Real Soon Now.

Ok, let's get into this week's news.

**Break:**

**Jerod Santo:**

[Tactile controls are back in vogue](https://spectrum.ieee.org/touchscreens)

Here's Gwendolyn Rak, writing for IEEE Spectrum:

> Apple added two new buttons to the iPhone 16, home appliances like stoves and washing machines are returning to knobs, and several car manufacturers are reintroducing buttons and dials to dashboards and steering wheels.

She goes on to interview [Rachel Plotnick](https://mediaschool.indiana.edu/people/profile.html?p=raplotni), a leading expert on buttons and how people interact with them, all about the pendulum swinging away from touchscreens and back to physical controls. This is yet another instance of the tech industry's propensity toward extreme adoption before settling in to a reasonable balance. It's like:

1. Here's a New Thing!
2. New Thing GOOD, Old Thing BAD!
3. Let's use New Thing everywhere!
4. Hmm, New Thing doesn't work great everywhere!
5. Let's go back to Old Thing, where appropriate!

You'd _think_ we could skip a few of these steps, but I guess we just can't figure out "where appropriate" without first realizing "where *inappropriate*". C’est la vie...

**Break:**

**Jerod Santo:**

[Tools for Generative AI scripting](https://microsoft.github.io/genaiscript/)

Microsoft has released *GenAIScript*, which they say "brings essential LLM prompt tooling into a cohesive scripting environment."

> GenAIScript is a scripting language that integrates LLMs into the scripting process using a simplified JavaScript syntax. Supported by our VS Code GenAIScript extension, it allows users to create, debug, and automate LLM-based scripts.

Honestly, I had a hard time figuring out exactly what people would do with this tech, but the case studies they include in the docs helped me get the drift. A good example is [this script](https://microsoft.github.io/genaiscript/case-studies/image-alt-text/), which uses the OpenAI Vision model to analyze images in an Astro site's assets folder and generates alt text for them.

Aside: they also provide a ten minute "podcast" generated NotebookLM you can listen to as a primer. I made it about 30 seconds into that audio and was thoroughly creeped out.

**Break:**

**Jerod Santo:**

[We can now fix McDonald’s ice cream machines](https://www.ifixit.com/News/102368/victory-is-sweet-we-can-now-fix-mcdonalds-ice-cream-machines)

This is a *sweet* victory for Right to Repair advocates across the country! Here's iFixit's Elizabeth Chamberlain:

> Ever tried to get an ice cream at McDonald’s, only to hear, “Sorry, our machine’s broken?” You’re not the only one: almost 15% of ice cream machines at McDonald’s are broken right now around the US—and in New York, it’s 32%. But today, we won more ice cream, and things should start to change.
>
>The U.S. Copyright Office just handed down a ruling that marks an important victory for Right to Repair: we can now legally repair commercial food preparation equipment, including McDonald’s machines, without running afoul of copyright law.

With this win, you are now free to hack your ice cream machine!

> For years, McDonald’s franchise owners have struggled with error codes and malfunctioning ice cream machines that could only be fixed by manufacturer-authorized technicians. The machines would often sit broken for extended periods because owners couldn’t troubleshoot or repair them on their own, due to digital locks embedded in the machine’s software. These locks are protected under Section 1201 of the Digital Millennium Copyright Act (DMCA), which generally makes it illegal to bypass software locks known as “technological protection measures,” even for legitimate repairs.
>
> That changes today.



**Break:**

**Jerod Santo:**

It's now time for Sponsored News!

[Join the Open Source Pledge](https://open sourcepledge.com/?utm_source=changelog&utm_medium=newsletter&utm_campaign=changelog-news)

David Cramer and the team at Sentry have launched [Open Source Pledge](https://open sourcepledge.com/?utm_source=changelog&utm_medium=newsletter&utm_campaign=changelog-news) to raise awareness and call for teams and orgs to support the open source they're using.

> We don't think it’s the only solution, nor do we think it’s the only way to give back, but we do believe giving cash money to maintainers is an appropriate way to show your thanks, to recognize their hard work, the value they create for you. Maybe, just maybe, we’ll do our small part in encouraging the maintainers to keep putting up with us in the enormous ecosystem we rely on.

After reading David's post, you may have two questions about this pledge:

1. What does it take to join the Pledge?
2. What’s the ROI your company gets from joining?

If so, [head to open sourcepledge.com](https://open sourcepledge.com/?utm_source=changelog&utm_medium=newsletter&utm_campaign=changelog-news) to learn all about it! And thanks again to Sentry for sponsoring Changelog News.

**Break:**

**Jerod Santo:**

[Re-imagining technical interviews](https://danielabaron.me/blog/reimagining-technical-interviews/)

After hearing us rant (a little) about the tragedy of technical interviews on [Friends 68](https://changelog.com/friends/68), Daniela Baron sent me this post she wrote over the Summer:

> For companies that choose to use LeetCode exercises for the evaluation, these are an unrealistic reflection of daily engineering work. Often, the complexity in software engineering comes from trying to figure out what to build rather than how to build it. In over 20 years of software development, the only time I've encountered a linked list was in computer science classes at school!

This #longread covers the shortcomings of current technical interview methods and tries to offer a better way that aligns more closely with the skills that drive successful engineering projects. A must-read for all engineering managers and a nice-read for the rest of us.

Let me also submit [Principles for hiring engineers with Jacob Kaplan-Moss](https://changelog.fm/479) for your consideration. Link in the newsletter.

**Break:**

**Jerod Santo:**

[Democratising publishing](https://john.onolan.org/democratising-publishing/)

Ghost founder, John O'Nolan, shares some thoughts on open source governance and how to create trust within technology, communities, and media. (Apropos of absolutely nothing at all, I'm sure)

> Ghost is a distributed non-profit foundation which gives away all of its intellectual property under a permissive MIT license. The company has no investors and, in fact, no owners of any kind. I don't own any part of Ghost, and neither does my co-founder Hannah.
>
> We currently generate around $7.5M in annual revenue, and have been profitable and sustainable for the past 12 years.
>
> *"Wait, what?"*
>
> I'm glad you asked.

Those are some pretty astounding facts, when they're all presented together like that. John lays out all the details of how Ghost is structured in this post:

> The structure we've chosen for Ghost — a single-entity non-profit organisation — has helped us to create a lot of trust and clarity around the Ghost project and the Ghost brand. Neither myself nor Hannah own any shares, assets, domains, trademarks, or other companies related to Ghost. Everything is owned by the Foundation.

That structure has served them well, but he doesn't think it's sufficient for where Ghost is going. Ghost's board is just two people, himself and co-founder Hannah Wolfe. In the future, it will change. John says 'No BDFL', which is interesting in light of our conversation with DHH last week. I sure hope it works. Democratizing publishing is a big deal and Ghost is making a real run at it.

**Break:**

**Jerod Santo:**

That's the news for now, but don't forget to scan that companion newsletter for even more stories worth your attention. Such as, Trench is open source analytics infra, A curses based, UCI compatible, chess GUI & our world famous unordered list of links! Read all about it at changelog.com/news

Have a great week! Leave us a 5-star review if you dig our work, and I'll talk to you again real soon.
