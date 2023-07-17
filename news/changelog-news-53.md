**Jerod Santo:**

What up, nerds? I'm Jerod and this is Changelog News for the week of Monday, July 17th 2023

I'm happy to announce that despite recent Red Hat drama, we here at Changelog News are dedicated to remaining bug-for-bug compatible with our upstream sources.

Ok, let's get into the news.

**Break:**

**Jerod Santo:**

Our [Efficient Linux at the CLI](https://changelog.fm/547) episode revealed my recently-closed ⌃r knowledge gap (I know, right?!), which prompted Matt Lehrer to point me towards [Atuin](https://atuin.sh) by [Ellie Huxtable](https://ellie.wtf). Atuin is a command-line tool that enables you to make better use of your shell, by giving ctrl-r superpowers.Every line you write is stored - ready to be queried and run again at any point, from any machine you wish. Never forget again! You can even Sync your history between all of your machines, and search it from anywhere.

How does Atuin do it? By replacing your existing shell history with a SQLite db, recording additional context for your commands, and syncing that db (fully end-to-end encrypted) via a server Ellie hosts or your own setup.

**Fry:**

Shut up and take my money!

**Break:**

**Jerod Santo:**

Here's Dmitry Kudryavtsev:

> ...today writing is so underrated, that most people want to avoid it. But the truth is–you will have to write. Comments, documentation, design documents, presentations. Whether you like it or not. So why not become better at it?

He goes on to outline three reasons engineers should write more:

1. Writing is a way to organize your brain
2. Writing is a way to learn something
3. Writing helps you identify mistakes

I have to agree with him. And it's astonishing how many people we talk to on our shows who can link their career success directly or indirectly to writing prose in addition to code. And finishes up with how to write more, including this unpopular opinion: abolish the copy-paste

**Bender:**

Oh no you didn't.

**Break:**

**Jerod Santo:**

LazyVim promises to transform your Neovim setup into a full-fleged IDE with dozens of hand-picked plugins pre-installed, easy customization with [lazy.nvim](https://github.com/folke/lazy.nvim) & sane default settings for options, autocmds, and keymaps. If you've heard me talking about Vim and Neovim lately, my common refrain is that too much time and effort is wasted getting it up to par with modern alternatives like VS Code. I'd rather be coding.

But projects like LazyVim remove the up front cost and make getting started with Vim a much less daunting proposition.

**Break:**

**Jerod Santo:**

Let's do some sponsored news.

Is it time for a new password manager? Passbolt's Shelby Lee Neubeck thinks so: "passbolt is a bit of an anomaly when it comes to password managers. It offers a unique architecture that’s tailored for secure collaboration and built on top of open standards. Does this mean there’s no risk? Of course not. But it does mean that the way we analyse and address risk is different."

passbolt is 100% asymmetric end-to-end security, backed by OpenPGP, and packed with features for businesses and teams in mind. Read all about it by following the link in your show notes and chapter data.

Thank you to passbolt for sponsoring this week's Changelog News. And thank you to Shelby for writing up why she thinks it's time for a new password manager.

**Break:**

**Jerod Santo:**

CSS is evolving faster than ever. Don't take my word for it, [take Chris Coyier's](https://youtu.be/YHC8jEgpVfk).

**Chris Coyier:**

[There's never been a hotter time in the CSS world](https://www.youtube.com/watch?v=YHC8jEgpVfk)

**Jerod Santo:**

Or, take Chris' old CSS-Tricks collaborator [Geoff Graham's](https://geoffgraham.me) excellent write-up for Smashing Mag all about modern CSS and the features that have had the most influence on his current approaches to the declarative language so many devs love to hate:

"I, for one, am stoked beyond all heck about how CSS is evolving. Many of the latest features are ones [we have craved for many, many years](https://css-tricks.com/2019-css-wishlist/). And indeed, there are several of them finding their way into my CSS. Again, not drastically, but enough that I’m enjoying writing CSS more now than ever. Let me count the ways."

Container queries, layered styles, `:is()` & `:where()`, the new color function syntax, user preferences & more get detailed treatments followed by a list of features Geoff is not using.

**Break:**

**Jerod Santo:**

Brad Fitzpatrick has been involved in FOSS communities like memcached, OpenID, Go, and others for over 25 years, so he's seen his share of bad behavior on public issue trackers. He started collecting a public list of those behaviors that we should all read, because one: misery loves company, and two: if you do any of these things...  **please stop**

The blaster, The At-er, The duper, the template ignorer, the cookie licker, the... well check the full list before somebody else has to check it for ya.

**IceCube:**

[Check yo self before you wreck yo self.](https://www.youtube.com/watch?v=5aAbOgdbTbM)

**Break:**

**Jerod Santo:**

That is the news for now.

Adam and I interviewed [Steve Yegge](https://en.wikipedia.org/wiki/Steve_Yegge) on Friday and it was so much fun! He's chock full of great stories and told a couple previously-untold Bezos tales. That episode drops on Wednesday. On Friday, we're hanging out with Bryan Cantrill and Steve Tuck from Oxide Computer. They recently shipped out their first rack!

Have a great week, share Changelog with your friends if you dig it, and we'll talk to you again on Wednesday.
