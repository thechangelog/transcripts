**Jerod Santo:**

What up, nerds? I'm Jerod and this is Changelog News for the week of Monday, July 28th, 2025.

If you didn't make it to Denver for our live show, I'm sorry but the FOMO was *very real*. One attendee called the entire weekend **"a smash hit"**. I have to agree. We [met up](https://changelog.zulipchat.com/user_uploads/66849/soTqG5R4COo5nUoWblUEvMzi/Photo-Jul-25-2025-9-24-24-PM.jpg), we [chatted](https://changelog.zulipchat.com/user_uploads/thumbnail/66849/h1_OtUDJzTI3-phc2I8BIdeO/image_08E0D83A-C76C-4339-B12A-28EC6F042360_1753494850.heic/4032x3024.webp), we [laughed](https://changelog.zulipchat.com/user_uploads/66849/n8_Mh7PWPsuKOvE3i2XpO41V/IMG_4331.jpg), we [hiked](https://changelog.zulipchat.com/user_uploads/thumbnail/66849/Rf3wIN9_zCuQP_OaLoMkiM6Y/image_E2BD0730-2C09-4B3B-8522-D44CE8F57EE5_1753635262.heic/4032x3024.webp), we [ate too much](https://changelog.zulipchat.com/user_uploads/66849/CfhD1Jsv7g_smAh32Z7UqiA_/IMG_4328.jpg), we did a [big thing](https://changelog.zulipchat.com/user_uploads/66849/zFQM6W4A2c1iBoWlXWjin7Wh/20250726_084323.jpg) (no spoilers), and we even started dreaming up the next one...

Huge thanks to Gerhard Lazu, Breakmaster Cylinder, and Nora Jones for making the show extra special. We're producing the live bits now and will ship the resulting episodes and videos starting next week.

Ok, let's get into the news.

**Break:**

**Jerod Santo:**

[It's time for modern CSS to kill the SPA](https://www.jonoalderson.com/conjecture/its-time-for-modern-css-to-kill-the-spa/)

Jono Alderson takes aim at SPAs as the answer to the inevitable request, “Make it feel like an app.”

> At some point during the scoping process, someone says the words. A CMO. A digital lead. A brand manager. And with that single phrase, the architecture is locked in: it’ll be an SPA. Probably React. Maybe Vue. Almost certainly deployed on Vercel or Netlify, bundled with a headless CMS and a GraphQL API for good measure.
>
> But the decision wasn’t really about architecture. It wasn’t even about performance, scalability, or content management. It was about *interactions*. About how the site would feel when you click around. 
>
> The assumption was simple: Seamless navigation requires us to build an app.
>
> That assumption is now obsolete.

Jono's claim (and I 100% hope he is correct) is that the new [View Transitions API](https://developer.chrome.com/docs/web-platform/view-transitions/) teamed with [Speculation Rules](https://developer.chrome.com/docs/web-platform/implementing-speculation-rules/) give us everything we need to "make it feel like an app" without needing a single line of JavaScript.

**Break:**

**Jerod Santo:**

[Turn almost any device into a file server](https://github.com/10301/copyparty)

This copyparty is a seriously cool piece of open source software. Here's the pitch:

> Portable file server with accelerated resumable uploads, dedup, WebDAV, FTP, TFTP, zeroconf, media indexer, thumbnails++ all in one file, no deps

Once the server is up and running, the files can be accessed from *any* web browser (even IE6)! The [README](https://github.com/10301/copyparty?tab=readme-ov-file) is top notch, too. It features screenshots, videos, a quickstart guide, the project's philosophy, and a [read-only demo server](https://a.ocv.me/pub/demo/) running on a nuc in the author's basement 👀

This is so obviously a passion project. It's hard to fake this level of care / attention to detail. 🍻

**Break:**

**Jerod Santo:**

[The Game Genie generation](https://tedium.co/2025/07/21/the-game-genie-generation/)

Ernie Smith refreshed his 2015 piece on Game Genie in honor of its 35th (!) anniversary. 

> July 1990, a full 35 years ago, was supposed to be the coming-out party for one of the best accessories ever created for the Nintendo Entertainment System. It made games easier, sure, but it also made them more interesting. It presented a new way of thinking about the games that you brought home. But Nintendo didn’t like it—and the company sued. That device eventually emerged, and despite the legal battle, it became a defining part of what made the NES great.

I *loved* my Game Genie when I was a kid and I always wondered how it worked. Ernie's excellent exposition on the history and (still-relevant) impact of the device linked me to [this clip](https://www.youtube.com/watch?v=nJ9zJ_PDatU) from Modern Vintage Gamer that answers the question I've had since childhood, but never took the initiative to answer.

**Break:**

**Jerod Santo:**

It's now time for sponsored news!

[Depot build autoscaling for everyone](https://depot.dev/blog/build-autoscaling-now-generally-available)

Depot just launched general availability for build autoscaling, which dynamically scales your remote build capacity based on workload demand. Whether you’re pushing one commit or a hundred, your builds stay fast—without managing any infrastructure. And it's available today on all paid plans.

Here's Founder and CEO Kyle Gailbrath:

> When we first launched Depot, our goal was to make Docker image builds exponentially faster. Why? Because we experienced the absolute drudgery of waiting for container builds locally and in CI. The modern day equivalent of watching paint dry because saving and loading layer cache over networks negated all performance benefits of caching, and building multi-platform images required emulation, bringing builds to a crawl. So, we built the solution we had always wanted: a fast, shareable, and reliable container build service that could be used from any existing CI workflow or anywhere you were using "docker build".

Learn more at [Depot.dev](https://depot.dev/blog/build-autoscaling-now-generally-available).

**Break:**

**Jerod Santo:**

[How Anthropic teams use Claude Code](https://www.anthropic.com/news/how-anthropic-teams-use-claude-code)

I recently posited that Anthropic may have a "virtuous cycle" style advantage building Claude Code because they are best positioned to leverage Claude Code productively. If true, this post sharing how their internal teams use the tool might become one of the [classic blunders](https://www.youtube.com/watch?v=RWW6aDpUvbQ) (probably not):

> Anthropic's internal teams are transforming their workflows with Claude Code, enabling developers and non-technical staff to tackle complex projects, automate tasks, and bridge skill gaps that previously limited their productivity...
>
> Through these interviews, we've gathered insights on how different departments use Claude Code, its impact on their work, and tips for other organizations considering adoption.

Hear from their teams representing data infrastructure, product development, security engineering, data science, growth marketing, and more.

**Break:**

**Jerod Santo:**

[The future is NOT self-hosted](https://www.drewlyton.com/story/the-future-is-not-self-hosted/)

Drew Lyton did something radical. He built his own cloud. 

> My wife and I now have a computer in our house that runs open-source equivalents to Google Drive, Google Photos, Audible, Kindle, and Netflix. It syncs to all of our devices. It's secured behind our own VPN. And it's wholly, truly owned by us.

After doing all that, he sat down to share with us how he did it, what he learned, and why he thinks self-hosting is NOT the future we should be fighting for.

> Self-hosting is cool. I've had a lot of fun building my home-server. And it does give me some peace of mind as a digital life backup.
> 
> But if we want to live in a world where we are not bent at the knee to corporate lords and also don't fall victim to the myth of self-reliance and rugged individualism, we need to think radically differently about how we create communal, shared internet infrastructure.

What follows are his initial thoughts on what needs to happen instead.

**Break:**

**Jerod Santo:**

That's the news for now, but go and subscribe to the Changelog Newsletter for the full scoop of links worth clicking on. Such as:

- [Google announces new Trends API](https://www.seroundtable.com/google-trends-api-39820.html)
- [Enough AI copilots! We need AI HUDs](https://www.geoffreylitt.com/2025/07/27/enough-ai-copilots-we-need-ai-huds)
- [Reading QR codes without a computer](https://qr.blinry.org/)

Get in on the newsletter at changelog.news

Have a great week! Like, subscribe, and leave us a 5-star review if you dig the show, and I'll talk to you again real soon.
