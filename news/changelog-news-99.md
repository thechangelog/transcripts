**Jerod Santo:**

What up, nerds? I'm Jerod and this is Changelog News for the week of Monday, June 17th, 2024.

After months of sorting more than 50k bricks & numerous weekends of building, Paul Vierkant & his son finished [their greatest Lego project ever](https://scicomm.xyz/@paul4kant/112297446962213752)! 7.5k colorful bricks comprising the "the fastest hunk of junk in the galaxy."

This is how we built stuff (on a much smaller scale) back in my day... ok, let's get into the news.

**Break:**

**Jerod Santo:**

[The onset of "Senior Engineer Fatigue"](https://luminousmen.com/post/senior-engineer-fatigue)

I'm starting to feel this article by "luminousmen" in my old bones:

> As you move deeper into your engineering career, a peculiar phenomenon starts to set in — a phase I like to call the onset of "Senior Wisdom".
>
> It's the juncture where your career trajectory pivots from a steep upward learning curve to a more nuanced expansion either vertically into leadership or horizontally across technologies. But alongside this wisdom comes a less discussed but equally important companion: "Senior Fatigue".

What characterizes "Senior Fatigue"? According to the author: deliberate deceleration, efficiency over activity, the question of value vs relevance & the overwhelming desire to start a podcast. Ok I made up that last sentence, but did I really though? 😉

**Break:**

**Jerod Santo:**

[Microsoft rethinking Recall?](https://blogs.windows.com/windowsexperience/2024/06/07/update-on-the-recall-preview-feature-for-copilot-pcs/)

It might be too early to call this a *Total Recall* (😏), but Microsoft is pumping the brakes on the AI-based [Recall](https://support.microsoft.com/en-us/windows/retrace-your-steps-with-recall-aa03f8a0-a78b-4b3e-b0a1-2eb8ac48701c) feature that was coming to *Copilot+ PCs* (worst name ever?) due to "feedback" on "security concerns":

> Today, we are communicating an additional update on the Recall (preview) feature for Copilot+ PCs. Recall will now shift from a preview experience broadly available for Copilot+ PCs on June 18, 2024, to a preview available first in the Windows Insider Program (WIP) in the coming weeks.

I tried Recall for myself on the Microsoft Build show floor. It reminded me some of Apple's Time Machine feature, but on steroids. It was super cool, but also a bit creepy/concerning. What is strange to me about this announcement is they reference **security** as the reason for their hesitancy, but it seems that we technologists are far more concerned with the **privacy** implications.

Here's one *particularly cynical* take by HN user [segasaturn](https://news.ycombinator.com/item?id=40683526) (which I have a hard time completely disagreeing with)

> Every major power broker wants something like Recall to become the norm - bosses to spy on their employees, governments to spy on their citizens/enemies, and tech CEO's to collect training data for AI and target more ads at end users.

**Break:**

**Jerod Santo:**

It's now time for Sponsored News!

[Strong, unique passwords for you & your team](https://1password.com/changelogpod)

Have you ever checked in to 1Password's developer tools? They have some much great stuff! You can:

- Push, pull & sign your Git commits
- Secure your SSH keys
- Authorize SSH connections with biometrics
- Manage it all from the `op` command line tool

That's "op" for "one password" but also maybe "overpowered"? It kinda is...

**We use 1Password** and we think you and your team should too. So, here's a deal just for our readers: sign up at [1password.com/changelogpod](https://1password.com/changelogpod) to double your free trial to 28-days! (vs 14-days for the plebs)

Once again that's [1password.com/changelogpod](https://1password.com/changelogpod) and thanks to 1Password for sponsoring Changelog News!

**Break:**

**Jerod Santo:**

[Fifty years of diff](https://exple.tive.org/blarg/2024/06/14/fifty-years-of-diff-and-merge/)

Mike Hoye gives a big shout out to a piece of software so foundational to our work that we mostly take it for granted: `diff`

> I haven’t seen anybody mentioning it or even noticing it; it’s just the water we swim in now, if we make software. But this month marks the fiftieth anniversary of a core piece of free software technology that would quickly become a seminal piece of collaborative software, the bedrock under every version control system and arguably the single most important piece of social software ever created.

Hard to believe that `diff` pre-dates `merge` by three years and `patch` by a decade! Mike goes on:

> My friend Greg Wilson has argued, and I absolutely believe, that you can divide the entire computational universe into who has diff and patch, and who doesn’t. It’s the seed crystal of all workable open collaboration, and people living without it don’t even have the language to recognize how bad they’ve got it.

Happy 50th birthday, `diff`!

**Break:**

**Jerod Santo:**

[ChromeOS switching to the Android Linux kernel](https://www.osnews.com/story/139941/chrome-os-switching-to-the-android-linux-kernel-and-related-android-subsystems/)

Thom Holwerda for OSNews:

> Surprisingly quietly, in the middle of Apple’s WWDC, Google’s ChromeOS team has made a rather massive announcement that seems to be staying a bit under the radar. Google is announcing today that it is replacing many of ChromeOS’ current relatively standard Linux-based subsystems with the comparable subsystems from Android.

I've always thought it was odd (but admittedly Google-y) that they funded two distinct variants of the Linux kernel and its related subsystems. The work began with the Bluetooth stack, which now uses Android's *Fluoride* implementation, which is written in Rust and has a simpler architecture, according to The GOOG. Once it's solid, they intend to split out this Bluetooth stuff into an open source project (named Project Floss) and share it with the broader Linux ecosystem. Then fire the team that supports it. Ok I made up that last sentence, but did I really though? 😉

**Break:**

**Jerod Santo:**

[How Alexa dropped the ball](https://www.mihaileric.com/posts/how-alexa-dropped-the-ball-conversational-ai/)

Both Apple's Siri & Amazon's Alexa were poised to become top conversational AI systems, but somehow they let ChatGPT (and potentially a wave of new startups) steal the ball. In this post, Mihail Eric (who worked on Alexa from 2019 to 2021), tells the inside story on Alexa's failure:

> We had all the resources, talent, and momentum to become the unequivocal market leader in conversational AI. But most of that tech never saw the light of day and never received any noteworthy press.
>
> Why?
>
> The reality is Alexa AI was riddled with technical and bureaucratic problems.

From their bad technical process, to the fragmented org structures, to a product-science misalignment... this post shares the gory details from Mihail's perspective. He still thinks it's anyone's game, though, and he lays out how he'd organize a dialogue systems effort from the ground-up. In brief:

1. Invest in robust developer infrastructure especially around access to compute, data quality assurance, and streamlined data collection processes.
2. Make LLMs the fundamental building block of the dialogue flows.
3. Ensure product timelines don’t dictate science research time frames.

**Break:**

**Jerod Santo:**

That's the news for now, but also scan the companion Changelog Newsletter for more stories, including A Macintosh for under 5 pounds, Elixir 1.17 shipping the first features of their new type system, my co-host Adam joining Oxide and Friends & more.

We have some great episodes coming up this week: [Jacob DePriest](https://www.linkedin.com/in/jacobdepriest/) talks securing GitHub with us on Wednesday & our old friend [Daniel Stenberg](https://daniel.haxx.se) from `curl` on Friday!

Have a great week, give us a 5-star review if you dig The Changelog, and let's talk again real soon.
