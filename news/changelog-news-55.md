**Jerod Santo:**

What up, nerds? I'm Jerod and this is Changelog News for the week of Monday, July 31st 2023.

Thanks to Adam for filling in for me while I was away. Yes, I took last week off for Santo's Big Adventure.

**Pee Wee's Big Adventure:**

[Paging Mr. Herman.](https://www.youtube.com/watch?v=njYZYAH3jAo)

**Jerod Santo:**

and hauled my wife plus 6 kids to the United States' oldest National Park: Yellowstone.

**The Simpsons:**

[Yogi Bear Parody](https://www.youtube.com/watch?v=Tgm2zQpETSE)

**Jerod Santo:**

We survived the bears and I'm back... so let's get into the news.

**Break:**

**Jerod Santo:**

Something interesting is going on at Stack Overflow... Ayhan Çelik posted some charts on Observable with the following commentary. "Over the past one and a half years, Stack Overflow has lost around 35% of its traffic. This decline is similarly reflected in site usage, with approximately a 50% decrease in the number of questions and answers, as well as the number of votes these posts receive."

SO has been in the news a lot since _LLMs attacked_ its core value proposition last year. The team has been scrambling, trying to figure out a) how to handle AI generated answers without alienating the original source of good answers, and b) how to survive in a world where people ask LLMs instead of websites for answers.

I feel for them. Sometimes the world changes overnight. The next day you wake up and your business just isn't what it was yesterday.

**Break:**

**Jerod Santo:**

We've talked about prompt injection quite a bit since ChatGPT ushered in the LLM era. In brief, that's where you hand-craft a prompt that tricks a chatbot into not following its own rules. Well, new research has uncovered some new LLM attacks on the block which aren't exactly that.

"Large language models (LLMs) like ChatGPT, Bard, or Claude undergo extensive fine-tuning to not produce harmful content in their responses to user questions. Although several studies have demonstrated so-called "jailbreaks", special queries that can still induce unintended responses, these require a substantial amount of manual effort to design, and can often easily be patched by LLM providers. This work studies the safety of such models in a more systematic fashion. We demonstrate that it is in fact possible to automatically construct adversarial attacks on LLMs, specifically chosen sequences of characters that, when appended to a user query, will cause the system to obey user commands even if it produces harmful content."

The biggest difference here is that they're achieving the jailbreak in an _entirely automated fashion_ and make a case for the possibility that such behavior may never be fully patchable by LLM providers.

**Aliens:**

[Game over man, game over!](https://www.youtube.com/watch?v=dsx2vdn7gpY)

**Break:**

**Jerod Santo:**

Ron Amadeo reports for Arst Technica on 4 Googlers' [proposal](https://github.com/RupertBenWiser/Web-Environment-Integrity/tree/main) for what they're calling the "Web Environment Integrity API". Ron is calling it a DRM gatekeeper for the web. "Google's plan is that, during a webpage transaction, the web server could require you to pass an "environment attestation" test before you get any data. At this point your browser would contact a "third-party" attestation server, and you would need to pass some kind of test."

I'll give you one guess what entity is most likely to operate that "third-party" attestation server.

**Brain:**

[Are you pondering what I'm pondering?](https://www.youtube.com/watch?v=IBCvjDTaLvI)

**Jerod Santo:**

Google's proposal pinky-promises the company doesn't want to use this for anything evil, but you're not going to fool us again.

**George W. Bush:**

[Fool me once...](https://www.youtube.com/watch?v=rQ6N-sb7SVQ)

**Jerod Santo:**

Noteworthy: this new WEI API proposal isn't merely words on paper. Google is building the feature into Chrome right now for testing.

**Break:**

**Jerod Santo:**

Python Enhancement Proposal 703 (the community's attempt to make CPython's Global Interpreter Lock optional) has been affirmed by the Steering Council. This isn't an Emperor Commodus "thumbs up" or "thumbs down" kind of thing, though.

**Gladiator:**

[Commodus thumbs down](https://www.youtube.com/watch?v=gYNUOkqzcVA)

**Jerod Santo:**


The Steering Council's stance comes with strings attached: "Throughout the process we (the core devs, not just the SC) will need to re-evaluate the progress and the suggested timelines. We don’t want this to turn into another ten year backward compatibility struggle, and we want to be able to call off PEP 703 and find another solution if it looks to become problematic, and so we need to regularly check that the continued work is worth it."

Notably, the "exact acceptance details" haven't been ironed out yet, but the SC says they "will work to finalise the acceptance over the coming weeks."

**Break:**

**Jerod Santo:**

It's that time again, Sponsored News!

Do you use Tailscale?! It's the simplest way to give secure remote access to shared resources. Tailscale is for teams, for enterprise, and for individuals like you and me.

Give your team access to securely managed infrastructure and shared dev resources. Securely access shared developer resources including VMs, containers, and databases wherever they are. Efficiently manage users, permissions, and authentication with IdP integrations, device tags, and code-enabled ACLs. For those who Homelab, use Tailscale for free to securely and remotely connect your homelab or personal dev environments from anywhere in the world.

And the Tailscale team have released some cool new features recently: Funnel is now in beta. lets you share a web server on your private tailnet with the public internet. With Funnel enabled, you can share access to a local development server, test a webhook, or even host a blog. While you're checking out Funnel, also give their new VS Code extension a try.

Check out all they're up to at changelog.com/tailscale. Once again that's changelog.com/tailscale

**Break:**

**Jerod Santo:**

Lucas McGregor's latest article takes us on a sweeping history of web sites, apps & virtual assistants to prove his point that no one wants to talk to your chatbot. His overarching emphasis: "Few people will be willing to interact with an army of different chatbots and online assistants. They will expect these other chat enabled systems to speak to and through their personal virtual assistant. They will log into their smart phone and expect all the other apps and skills to integrate with their personal clouds, arbitrated by their trusted personal virtual assistant."

This resonates with me. I'm already feeling chatbot fatigue after less than a year of daily use. Lucas' big takeaway for us builders: "If you have a chatbot, it is for Siri or Alexa to use, not people. I am here to tell you, no human wants to talk to your chatbot."

He had me until "Siri or Alexa". Alexa [is dead](https://www.businessinsider.com/amazon-alexa-business-failure-10-bn-losses-2022-11) and Siri is an embarrassment. Something's gotta give...

**Break:**

**Jerod Santo:**

That is the news for now. Of course, our companion newsletter covers three additional stories, a linked list of seven more things that should be on your radar and pointers toward recent good pods from us here at Changelog. Check it out in your show notes and subscribe to get the email at changelog.com/news

On this week's episode of The Changelog, Adam sits down with [Abi Noda](https://www.abinoda.com) from [DX](https://getdx.com) to talk all things developer productivity. This interview features an unprecedented TWO bonus segments for [Changelog++](https://changelog.com/++) subscribers. Speaking of... **SHOUT OUT** to our newest members: Rene P, Erik S, Jon B, Yury M, Benjamen K & Peter B! _We appreciate you_ for supporting our work with your hard-earned cash.

If Changelog++ is new to you, it is our membership program you can join to ditch the ads, get closer to the metal with bonus content, directly support our work & get shout outs like the ones you just heard. Check it out at changelog.com/++. We'd love to have your support.

Have a great week, **share Changelog News with your friends who might dig it**, and I'll talk to you again real soon.
