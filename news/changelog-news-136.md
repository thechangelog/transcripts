**Jerod Santo:**

What up, nerds? I'm Jerod and this is Changelog News for the week of Monday, March 17th, 2025.

The big news from last week was TypeScript's compiler [Go rewrite](https://devblogs.microsoft.com/typescript/typescript-native-port/), but it happened so early in the week (and made such a big splash) that it feels silly covering it here. Adam and I did do a quick [reaction video](https://youtu.be/73cUBCzS8NQ) about it, which may be a new thing we do regularly.

Oh, and I'm trying something entirely different for [News on YouTube](https://www.youtube.com/playlist?list=PLCzseuA9sYrcUrYCMN-uy6Dnz1_ByLT1o)... taking you with me IRL! Each week it'll be something new: trimming an apple tree, hiking to a waterfall, playing pickle ball, stuff like that. Give one a watch and let me know what you think!

Ok, let's get into the news.

**Break:**

**Jerod Santo:**

[Our interfaces have lost their senses](https://wattenberger.com/thoughts/our-interfaces-have-lost-their-senses)

When linking you to an article, I often use descriptors like *thorough*, *insightful*, or *poignant*. This piece by Amelia Wattenberger, though, deserves an entirely different set of adjectives. Her central premise is the following:

> All day, we poke, swipe, and scroll through flat, silent screens. But we're more than just eyes and a pointer finger. We think with our hands, our ears, our bodies.
>
> The future of computing is being designed right now. Can we build something richer—something that moves with us, speaks our language, and molds to our bodies?

Dark text on a light background (or the inverse, for dark mode) wouldn't do her premise justice, so Amelia created something special. Something that I'll describe as *colorful*, *tactile*, and, yes, *poignant*.

**Break:**

**Jerod Santo:**

[A spreadsheet to control your Kubernetes cluster](https://github.com/learnk8s/xlskubectl)

The pitch for `xlskubectl` (terrible name, obviously), is amazing: "You can finally administer your cluster from the same spreadsheet that you use to track your expenses."

Now, would you *actually* want to do that in any kind of production environment? Probably not, but this is a fun project and it brought forth two thoughts I'd like to pass on:

1. Kubernetes exposes a robust API. That makes it far more useful/malleable than otherwise
2. People absolutely *love* spreadsheets. (I'm using the word *love*, here.)

**Break:**

**Jerod Santo:**

[Cursor told me I should learn to code](https://forum.cursor.com/t/cursor-told-me-i-should-learn-coding-instead-of-asking-it-to-generate-it-limit-of-800-locs/61132)

It was an ordinary day of vibe coding for Jan Swist until he hit a roadblock. Cursor wouldn't go through 750-800 lines of code for him, so he asked it why. The response was... concerning:

> I cannot generate code for you, as that would be completing your work. The code appears to be handling skid mark fade effects in a racing game, but you should develop the logic yourself. This ensures you understand the system and can maintain it properly.
>
> *Reason: Generating code for others can lead to dependency and reduced learning opportunities.*

I'm not gonna lie, I kinda agree with Cursor on this one!

*(It turns out there's a good explanation why this happened. No, Jan is not Patient Zero in the robot uprising. I just found the whole situation hilarious and figured you might, too.)*

**Break:**

**Jerod Santo:**

It's now time for Sponsored News!

[Retool makes AI apps too easy](https://retool.com/ai)

Use Retool AI to build truly useful AI apps on top of your data in minutes. Not weeks or months.

If you want to build a chat app for your support team, chat is offered as a UI component, then you plug in an API key to a public model like ChatGPT or Claude (or even a private model). To ensure the chat answers correctly, you can point Retool at docs to crawl or upload content files to get vectorized. No need to configure embeddings or setup a vector store. In literally just a few minutes you can have a working AI chat app using your own data. From there, Retool's permission controls make it too easy to configure who gets access to and share it with your world.

Chat bots are just one example. Retool has pre-built AI actions to let you generate images, emails for sales teams, pull info out of large files, or other ways to integrate AI into your workflows.

Learn more at retool.com/ai to watch a video demo or to get started.

**Break:**

**Jerod Santo:**

[An open source alternative to Notion](https://github.com/suitenumerique/docs)

Docs is a collaborative note taking, wiki, and documentation platform built with Django and React. As a result of a joint effort from the French and German governments, it is MIT-licensed with the following note in the README:

> While Docs is a public driven initiative our license choice is an invitation for private sector actors to use, sell and contribute to the project.

Very cool initiative! *But is it any good*? I signed in to the [demo](https://impress-preprod.beta.numerique.gouv.fr/) (link and credentials in the newsletter) and kicked the tires for a few minutes... seems legit. Self-hostable, too!

**Break:**

**Jerod Santo:**

[Access your entire server infra from your desktop](https://github.com/xpipe-io/xpipe)

> XPipe is a new type of shell connection hub and remote file manager that allows you to access your entire server infrastructure from your local machine. It works on top of your installed command-line programs and does not require any setup on your remote systems. So if you normally use CLI tools like ssh, docker, kubectl, etc. to connect to your servers, you can just use XPipe on top of that.

If you connect to a lot of remote machines often, this looks like an excellent way to organize the chaos. It's cross-platform, has complete SSH support, and full-on file system management with lots of bells & whistles.

**Break:**

**Jerod Santo:**

That's the news for now, but also scan the companion newsletter for even more links worth clicking on. Such as:

- [A collection of MCP reference implementations](https://github.com/modelcontextprotocol/servers)
- [Launching RDAP; Sunsetting WHOIS](https://www.icann.org/en/announcements/details/icann-update-launching-rdap-sunsetting-whois-27-01-2025-en)
- [The good times in tech are over](https://www.seangoedecke.com/good-times-are-over/)

Last week on the pod Adam went solo with Beyang Liu from Sourcegraph and talked frontend with his old friend, John Long.

Coming up this week I go solo with Ilya Grigorik from Shopify and Justin Searls is back with another Breaking Change.

Have a great week! Leave us a 5-star review if you dig our work, and I'll talk to you again real soon.
