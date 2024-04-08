**Jerod Santo:**

What up, nerds? I'm Jerod and this is Changelog News for the week of Monday, April 1st 2024.

Yes, it's April Fools Day. The worst day of the year to be an internet denizen. But don't worry, Changelog News is 100% prank free, AI free and gluten free, too.

The big story right now is the recently uncovered backdoor in _liblzma_ (aka _XZ_) – a relatively obscure compression library that happens to be a dependency of OpenSSH.

This incident is noteworthy for so many reasons: the exploit itself, how it was deployed, how it was found, what it says about our industry & how the community reacted.

Today's issue is almost entirely dedicated to this story, looking at it from all those angles. I'll throw in a list of other interesting links at the end, though, in case you're not interested in the deep-dive.

Ok, let's get into the news.

**Break:**

**Jerod Santo:**

[The discovery](https://www.openwall.com/lists/oss-security/2024/03/29/4)

Let's start our story the same way most folks did, on Friday when Microsoft researcher Andres Freund posted an email to Debian's oss-security list containing this bombshell:

> After observing a few odd symptoms around liblzma (part of the xz package) on Debian sid installations over the last weeks (logins with ssh taking a lot of CPU, valgrind errors) I figured out the answer:
>
> The upstream xz repository and the xz tarballs have been backdoored.
>
> At first I thought this was a compromise of debian's package, but it turns out to be upstream.

Andres goes on to explain his findings in detail. The **mind blowing** thing is that he decided to shave this particular yak because he was [doing some micro-benchmarking](https://mastodon.social/@AndresFreundTec/112180406142695845) and needed the system to be super low load, which made him realize `sshd` was using a lot of CPU.  Go read all the work he put in to find the backdoor and then consider how specific his situation had to be in order to even notice it... Thankfully, he found the backdoor relatively early in its rollout:

> Due to the working of the injected code (see below), it is likely the backdoor can only work on glibc based systems.
>
> Luckily xz 5.6.0 and 5.6.1 have not yet widely been integrated by linux distributions, and where they have, mostly in pre-release versions.

**Break:**

**Jerod Santo:**

[The code](https://bsky.app/profile/filippo.abyssdomain.expert/post/3kowjkx2njy2b)

The exploit itself is super interesting as well. I'm not ashamed to say most of it's over my head, but [recurring Changelog guest](https://changelog.com/person/filosottile), Filippo Valsorda, does a great job explaining the nitty gritty details. Follow the link if you're interested in all of the particulars, but this statement sums it up well:

> This might be the best executed supply chain attack we've seen described in the open, and it's a nightmare scenario: malicious, competent, authorized upstream in a widely used library.
>
> Looks like this got caught by chance. Wonder how long it would have taken otherwise.

So the attacker is competent, malicious & has authorized write access to a widely used library. How'd that happen?!

**Break:**

**Jerod Santo:**

[The maintainer](https://tukaani.org/xz-backdoor/)

This page is maintained by Lasse Collin, the _solo maintainer_ of XZ. Can you guess where all this is headed? Lasse says:

> XZ Utils 5.6.0 and 5.6.1 release tarballs contain a backdoor. These tarballs were created and signed by Jia Tan.
>
> Tarballs created by Jia Tan were signed by him. Any tarballs signed by me were created by me.
>
> GitHub accounts of both me (Larhzu) and Jia Tan are suspended.

Jia Tan?! Who is that? The plot thickens!

**Break:**

**Jerod Santo:**

It's not time for Sponsored News!

[AI-powered Autofix debugs & fixes your code in minutes](https://blog.sentry.io/ai-powered-autofix-debugs-and-fixes-your-code-in-minutes/)

Ben Peven writing for Sentry:

> Sentry knows a lot about the inner workings of an application’s codebase. So we got to thinking, how can we use this rich dataset to make debugging with Sentry even faster?
>
> Many generative AI (GenAI) tools (e.g. GitHub Copilot) improve developer productivity in their dev environment, though few have the contextual data Sentry has to help fix errors in production. Our new AI-enabled Autofix feature understands what your users are doing when an error occurs, analyzes the error, generates a fix and even opens a pull request for your review. It’s like having a junior developer ready to help on-demand.

I've used this a couple times and was pleasantly surprised by its "ideas." Give it a try... oh, and don't forget to use code `CHANGELOG` when you sign up for Sentry to get $100 off their team plan. ✊

**Break:**

**Jerod Santo:**

[The attacker](https://boehs.org/node/everything-i-know-about-the-xz-backdoor)

Evan Boehs looked up the public history of GitHub user JiaT75 (Jia Tan), which goes back to 2021. Tan starts slowly then slowly gains trust alongside a few other accounts that appear to be sock puppets. Evan tried to use other public information to identify who Jia Tan really is, but a potential LinkedIn match seems unlikely:

> I have received a few emails alerting me to a LinkedIn of somebody named Jia Tan2. Their bio boasts of large-scale vulnerability management. They claim to live in California. Is this our man? The commits on JiaT75’s GitHub are set to +0800, which would not indicate presence in California. UTC-0800 would be California. Most of the commits were made between UTC 12-17, which is awfully early for California. In my opinion, there is no sufficient evidence that the LinkedIn being discussed is our man.

Analysis of the name has also been performed, but when you include the middle name (Cheong) that was found in one `git log` it seems unlikely that it's a real name:

> It’s most likely our actor simply mashed plausible sounding Chinese names together.

As of the time of this recording, it's unknown who Jia tan really is.

**Break:**

**Jerod Santo:**

[The pattern](https://robmensching.com/blog/posts/2024/03/30/a-microcosm-of-the-interactions-in-open-source-projects/)

Rob Mensching lays out the process of the attack and focuses in on step 0:

> Original maintainer burns out, and only the attacker offers to help (so attacker inherits trust built up by the original maintainer)

Someone found an email thread that captured the individual messages sent when step 0 was taking place, and Rob goes through and picks out salient messages to paint a picture for us.

> First, we start with a reasonable request asked reasonably. The question forces the maintainer to address his “failings”. I use “failings” in quotes here because a. the maintainer doesn’t actually owe anything here so he hasn’t actually failed and b. I know exactly how this feels. It feels terrible to let down your “community”.
>
> > ”Is XZ for Java still maintained? I asked a question here a week ago and have not heard back.” - https://www.mail-archive.com/xz-devel@tukaani.org/msg00562.html
>
> The maintainer acknowledges he’s “behind” and is struggling to keep up. This is a cry in pain. This is a cry for help. Help will not be coming in this thread.

This question does not originate from Jia Tan. Instead, its author eventually points to Jia Tan as a good person to "have a bigger role in the future..." How many of us find ourselves in positions similar to Lasse? I've spoken with so many maintainers who would love to pass their project on to someone capable/interested, but it's darn near impossible. Rob closes with this:

> It takes skill and knowledge to write software. And while many skills and some knowledge will transfer, working on a new software project inevitably requires developing new skills and more knowledge.
>
> Software developers are not fungible cogs that you can swap in and out at will.
>
> The email thread ends with the complaining consumers offering no help while continuing to make demands. Only the attacker is left.

**Break:**

**Jerod Santo:**

[The debate](https://lcamtuf.substack.com/p/technologist-vs-spy-the-xz-backdoor)

In the wake of this event, many voices have called out the unhealthy relationship between unpaid maintainers and companies that benefit from their work. Don't get me wrong... YES. That is absolutely a problem. But Substack writer [lcamtuf](https://lcamtuf.substack.com) wrote up a different take (that I haven't heard previously) that I absolutely believe plays a part:

> The real issue with a lot of small, foundational OSS libraries is just that there isn’t enough to do. They were written decades ago by a single person — and beyond bugfixes, they are not really supposed to change much. You don’t do major facelifts of `zlib` or `giflib` every year; even if you wave some cash around, it’s hard to build a sustainable community around watching paint dry. After a while, the maintainer just isn’t all that into it anymore; they are eager to pass the baton to anyone with a pulse and some modicum of skill.

Unfortunately, sometimes that person with "a pulse and some modicum of skill" is a highly competent, malicious actor.

> More fundamentally, the xz backdoor isn’t a technical problem and it probably can’t be solved with technology alone. To a large extent, it’s a counterintelligence challenge — squarely within the competencies of governments and a handful of commercial entities with ecosystem-wide surveillance capabilities. This notably includes Google and Microsoft.

**Break:**

**Jerod Santo:**

That's the news for now, but scan this episode's companion newsletter (link in the show notes) for more commentary on the XZ backdoor, oh and 13 other interesting links that are completely unrelated.

Have a great week, **leave us a 5-star review** if you dig it & I'll talk to you again real soon. 💚
