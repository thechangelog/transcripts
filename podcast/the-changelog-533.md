**Jerod Santo:** Alright, well, I'm here with Filippo Valsorda, formerly of Google's Go team, now a full-time open source maintainer. Welcome to the show.

**Filippo Valsorda:** Thank you. Nice to join you.

**Jerod Santo:** Nice to have you, and a big congratulations. You made the announcement official February 2nd of 2023 on your blog. Pretty cool, man. You made it to full-time.

**Filippo Valsorda:** Indeed. Thank you. It was a big relief. When I left Google, this was basically just a project, an idea, and when I started recruiting clients, it was entirely like "This might work, this might not work... I might just be looking for a job in six months."

**Jerod Santo:** Right

**Filippo Valsorda:** And it was actually a big relief sending out the blog post and saying "Alright, so this is it. I can share it now.

**Jerod Santo:** Yeah. Very cool. And you're not merely surviving on like a ramen kind of a thing; you said in the post you have six amazing clients at the time, and you're making an amount of money equivalent to your Google's total compensation package, which is - that's a nice package, right? It's not like "I'm just barely surviving."

**Filippo Valsorda:** Yup. You know, I don't want to make this too materialistic, I totally get that people do open source not just for the money, and that's me, too. I've built a career in open source also by doing a lot of it on the side, and not specifically to make money. But I think it does matter a lot too whether this is sustainable or not. Because most open source maintainers that maintain large projects, they are doing project management, they're doing strategy planning, they're doing team management sometimes even, or team leading, architecture... They're doing all the things that when I was at Google were on the interview checklist, on the interview agenda for hiring senior engineers. And so these people can access senior engineering jobs. And if we just rely on them not ever needing to make more money or wanting to make more money, either because their life changes in some ways, or any other reasons, then it's not really a sustainable way to guarantee that maintainers can keep doing the thing we need them to do for the open source ecosystem. So it's not just about making more money, but it's about proving that this is a thing that people who could go and be senior software engineers can do without taking the major pay cut that open source usually involves.

**Jerod Santo:** \[06:31\] Exactly, exactly... Which is why I do think it's a big deal, that this is a model that you've succeeded at and have written down how you did it, what you're doing... We're gonna dive into the details of exactly the setup that you have. Let's first talk about your open source bonafides, as they say, like your history. I know you from the Go Time podcast, which I produce; you were on there a few times, talking fuzzing, talking security, I know you're on the security angle of things around the Go team, or were... Tell us about the open source projects you've started, or worked on, or have in your portfolio.

**Filippo Valsorda:** Yeah, so I started early on with YouTubeDL, the Python program - not too little these days - that downloads from the various websites.

**Jerod Santo:** Did you start that? Or did you work on it?

**Filippo Valsorda:** I absolutely did not. But I joined at a time...

**Jerod Santo:** I was about to say "Thank you, thank you." I still use it to this day. I mean, I'll still say thank you, but even more so.

**Filippo Valsorda:** No, they were actually super-nice. They let me join as maintainer when I was barely more than a kid, figuring out Python. And yeah, I was around when the maintainers had other things to do, so I just took a bit of the lead of working on it.

One thing I remember doing is making it a little easier to add modules. At the time, it used to support just five different websites, and then I made it easier to just drop a Python file in a folder, and now you support another thing, just adding a couple of regex'es. And that was a hell of a lesson on open source, because suddenly there was a community that started adding support for more and more websites, and that gave me an early taste of the power of a community that forms around the project.

By the way, as a tangent - when the RIAA went after YouTubeDL, and GitHub then obscured them, then reinstated them, and did that fantastic job setting up the fund, I was emotionally involved with the whole thing, and tried to help as much as I could, because it is a bit of my origin story. I'm glad that they're doing well.

**Jerod Santo:** Yeah. So maybe you can catch me up then, because I was definitely paying attention then, but I continued to use YouTubeDL until very recently; it seemed that something changed, and the way I used it wasn't working, and so then I switched to... Is there a takeover project? YT-DLP? I'm not sure if it's the same people, different people... How does that work?

**Filippo Valsorda:** Yeah, so at the time, the thing resolved with YouTubeDL carrying on with the same maintainers, and I can't claim to be a maintainer anymore. I do Go these days. But I think what happened is that they also got busy in life, and that is the very churn of open source maintainership we're talking about. And I think YouTubeDL, the original is still maintained, but with less activity, and there is this other fork that has a lot more activity... Which is also an interesting lesson in open source. It was out there, and then it slowed down, and then some people picked it up, and are running with it. It is what we like with open source, isn't it?

**Jerod Santo:** That's the beautiful thing, is like, this one stopped working, and then I was like "Dang, it was working so well. It's not working", and I went out and I was like "Oh, there's a fork that the community is running with called YT-DLP, and because it's a fork, it was actually feature-flag compatible, at least with the simple feature flags that I use... And so I could literally just swap out the executable and continue on my merry way.

\[09:59\] Going back to your work, though - so some people don't know this, and it took me a while to realize this... I just thought it could download off of YouTube. But pretty much at this point darn near any web page that has a video in it somewhere, it's probably going to figure it out, and that's probably because of this ecosystem that built around these modules.

**Filippo Valsorda:** Yep, indeed. It's built so that it has zero dependencies, but it's very easy to drop in a new module and just write the regex'es it needs, and has helpers for everything. It can just download from about any website. At some point I need to download some videos of a conference and it didn't support that, so I just wrote 20 lines, added support for that, and use all the architecture.

**Jerod Santo:** Beautiful.

**Filippo Valsorda:** So yeah, it's a project that's still very close to my heart.

**Jerod Santo:** And very useful.

**Filippo Valsorda:** And that's how I got started in open source. After that, I started working more and more on security, on cryptography, and on Go, which are pretty much what I work on these days. I built the Heartbleed test back in 2014, when the big Open SSL vulnerability came out. I was basically emulating something that Adam Langley did the year before for a different vulnerability, the go to fail one in Apple's verifier... And that one didn't get press, Heartbleed did. I did not expect that, let me tell you. And that got very popular. And I wrote that in Go, because it was the simplest TLS stack to modify to make a test out of it. I made it open source, and Amazon comped me a bunch of AWS machines retroactively, which I was very stressed about until that happened...

**Jerod Santo:** Oh... Did you have a big bill?

**Filippo Valsorda:** Yeah... For where I was at the time, yeah. Just out of high school... It started getting into the five figures, and I was like -- sorry, four figures. But still...

**Jerod Santo:** Four figures just out of high school... That definitely can be overwhelming. So you were providing a website that people would go and test, and then you'd run the tests in the background, or how come the bill was on you?

**Filippo Valsorda:** Exactly, yeah. It was a website, and you could type a domain, and it would connect, try to exploit Heartbleed, and if it succeeded, say "Hey, this is vulnerable", and even include a little snippet of memory from the website, which I had to turn off for Yahoo! at some point, because it was actually leaking passwords...

**Jerod Santo:** Oh, no.

**Filippo Valsorda:** Like, in the 32 bytes it was presenting as a proof... So that wasn't great. \[laughter\]

**Jerod Santo:** The things you learn...

**Filippo Valsorda:** Yup. Oh, there were a lot of lessons learned. But yeah, that was another early start that got popular, and I started talking about a few companies, and I landed at Cloudflare, where I worked on some closed source stuff, their DNS stack, their DNSSEC implementation, and some open source stuff, like the DNS library that backed it, and eventually some Go standard library upstream, which is how I started working on the Go project itself.

Then, long story short, I left Cloudflare and joined Google a few months later to work on the Go standard library, on the cryptography in the Go standard library. For folks that don't use that much Go, Go doesn't do like most other languages that mostly have bindings to OpenSSL. Instead, to make it very easy to cross-compile Go and to produce static binaries, Go has its own implementation of everything. We have our own implementation of AES, of ciphers, of TLS, of everything from the primitives to the protocols. Elliptic curves, RSA... We have code for all of that, so that it can easily cross-compile without having to use cgo, which if you use Go, you know that is kind of painful to use.

And I worked on that for Google on the Go team for about four years. I was lead of the Go security team while Katie Hockman joined, and \[13:56\] is still on the Go team, still working on cryptography, so we work together still.

\[14:04\] And then, yeah, as we were saying, I left in May, both to take a break over the summer, and to test this new model that we're here to talk about. So I'm still a maintainer on the Go standard library, I still have the commit bit, and I still do issue triage, and all that, just now working independently.

Aside from that, I have a number of side projects, like makecert, a little tool to generate self-signed certificates that are trusted by your local browser, and Age, a file encryption tool... Which I pronounced Aghe...

**Jerod Santo:** Oh, you call it Aghe?

**Filippo Valsorda:** Yes... \[laughs\]

**Jerod Santo:** In my mind it's been Age this entire time, and now I know it's actually Aghe...

**Filippo Valsorda:** Yup... I figured tech projects with a G in them need to have a controversial pronunciation to get successful...

**Jerod Santo:** \[laughs\] Well played. You've hopped on the meme and you're riding it. I like that.

**Filippo Valsorda:** So yeah, that's pretty much what I've done. Basically, for the past five years or so I've been working on open source full-time, one way or another, which I've really enjoyed. Working in public can get tiring, and I really feel a lot of those maintainer posts where they get frustrated, and even sometimes rage-quit... So I totally get that, but it also has a lot of rewarding and beautiful interactions with your users and your community.

**Jerod Santo:** Well, as you probably know, here on the Changelog we have been speaking with maintainers for years, we've been interviewing people, learning about what they're up to with regards to sustainability, always interested in new ways of doing it, hearing what's working, what's not working... We've seen, of course, open core, we've seen the rise of sponsorware, there's straight-up donation style, we've seen some hostile moves going on, where people get very upset... It's been interesting, and we care about maintainers so much in the open source ecosystem that anytime I see a success story, especially one like yours, where you're not just saying "I had success", but also you're saying "And here's how I'm having success, and so maybe you can also replicate this", maybe, maybe not - we want to feature that, we want to highlight it, we want to help our fellow open source people learn from each other in the spirit of open source.

So let's talk about what you're up to, how you're doing it, and how you're able to make this so far sustainable for you in a way that's not overly burdensome. We talk about -- there's kind of two ways that are sustainable. Ones like "I work for a large corporation, and they pay me to work on open source." That seems to be working for a small subset of people, and it's great when it works. It has its pros and cons. And then there's like the "I started a business around this open source project, and now I'm not just an open source maintainer, but I'm also a businessperson" - that works for some people, and there's different models inside of that. And they have their pros and cons as well. You seem to be going a little bit different route. Can you tell us exactly what you're doing?

**Filippo Valsorda:** Yeah, so I clearly come from the corporate full-time employment model. I don't know as much about the build a business around your project, and I feel like that works for different projects from the ones I'm used to work on. I'm not really sure how I would sell Age as a product, or how Go would work as a product.

The corporate sponsorship - I think it's great. I think Google did a lot of good to the ecosystem by starting Go, by funding the team, and by investing so much in it, to the point that I think they don't get as much credit as they should. I have plenty of negative to say about Google, too; this is not an ad. But I feel like people don't realize how much the Google team is focused on the community; much more than the Google internal users.

\[18:01\] But still, the problem is that teams like that inside a company don't scale well when the project is successful. And I've seen this at all sorts of companies. I've seen this at Microsoft, I've seen this at Google, I've seen this all over the place, so it's really not a Google-specific or Go-specific pathology, in a sense. What happens is that the project gets successful, more and more external users use it, and so more and more maintainer time is required, and the maintainers have more and more work to do. But at the same time, the value to the company doesn't really grow as much, because the value for the company was branding, and senior engineering recruitment, and internal expertise... And those don't double every time the user base doubles.

**Jerod Santo:** Yeah. They kind of stay where they are.

**Filippo Valsorda:** Exactly. And so what happens is that the resources don't increase, the workload increases, people burn out, they start churning, and now, since a team -- I like that concept that a team is the connections between its people, not its nodes. A team is a collection of edges, not of nodes. And so as people churn, the team is less efficient, inevitably, and so work increases more and more.

And I've seen that happen with so many teams, to the point that sometimes you sit down with A fellow maintainer, and they're like "Oh yeah, the entire team that maintains that thing at that company has quit", and you go "Oh, yeah, tell me about it. I recognize exactly how that goes."

So I felt like we need a better model for something that is so important to the ecosystem. And my theory is that one such model can be that a maintainer can go to the various companies that depend on the project that they maintain, and do what Patrick McKenzie aptly described as enterprise sales. And I'm not going to hide that this has a lot of overhead, but by sharing that, by spreading that across the multiple companies that use the project, this scales and grows much better with the success of the project. Because as the project gets bigger and bigger and more and more successful, there is more work to do. But at the same time, there are more companies that can be interested in both sustaining the project, but also getting access to the direction and the roadmap of the project, and finally getting access to the expertise of the maintainers. Because probably if a company is using your project, they work in the area that you are an expert in, and they know you're an expert because you're a maintainer of the project that they're using. I feel like that aligns incentives very well.

So this is pretty much what I'm offering. I go out there and I talk to companies. And I've started with companies that already get open source, because this is a new model, and I wanted people who could get up to speed quickly. But I tell them, "Well, first of all, you have a business risk that depends on Go. You have built your stack on Go, and that's critical to you, and you want it to be maintained, and you want me to keep doing security and cryptography work on it. So the first thing you're getting is that by paying me, by entering a retainer contract, you're making sure that I'll keep doing this." And that's good incentives for everybody. But I do get that that's what everybody has been trying to do with sponsorships, and that's usually not enough, right?

The second thing is what I call reciprocal access. The companies don't have the time to spend an engineer or half an engineer to just monitor the issue tracker of Go, right? That's our job; we spend our time on the Go issue tracker, and then we put out releases. And a release comes out, and then two months later a company starts upgrading, and they're like "Oh no, wait, the performance of this does not work with our workloads" or "That new API sounded great, but we can't use it, because we need it to support this older mode. If we had been involved during the proposal process we would have told you, but we didn't know this was going on." And this is not good for anybody. This is not good for the company, that now can't either upgrade, or needs to wait for a backport, or can't use the new API... It's not good for us, because we want to make a thing that works well for our users, for the places where it's deployed. And so by having that relationship, and here I'm talking about establishing a contractor relationship with these companies...

**Jerod Santo:** \[22:30\] Right. A retainer.

**Filippo Valsorda:** A retainer, exactly. What we have is a high-bandwidth channel to talk about these sorts of things. And I go in at the beginning of the relationship and I ask them "What would you use Go for? What are your concerns? What are your worries? What things work well? What things don't?" And then I just keep it in mind. And when I start working on something that's relevant, I go back in and I'm like "Hey, I remember you told me something about how you needed TLS session handling to work a little more this way, or more that way." Or "I remember you use a lot of RSA, and my theory is that I can make decryption slower as long as I make encryption faster, or the other way around. Is that right?" And they tell me, and the final result is better for everybody. And they didn't have to dedicate headcount to "Hey, look at every issue that comes out on the Go issue tracker to make sure that things go our way."

**Jerod Santo:** I kind of like that, because basically what they're paying for is a bit of an advocate or a representative that's on the team...

**Filippo Valsorda:** It is.

**Jerod Santo:** ...that's they don't directly influence, and say "Hey, Filippo, you've gotta get this feature in." Maybe that's something else that they might do. But you just know their systems, because you are basically consulting them, and then you can take their best interests, and I guess meld them with everybody's best interests, of all your clients, as well as the project, and then represent those.

**Filippo Valsorda:** Exactly.

**Jerod Santo:** And then on the other side, you are now better equipped to make decisions, because you have not just your one narrow-scoped view of the world, but you also have these enterprise customers who all have varying needs and concerns with regards to the project... And so you're now a better-informed maintainer as well.

**Filippo Valsorda:** Precisely. You captured it so well. This is not about paying for features, or "Oh, we need you to review this thing and get it landed." It is much more of an advocate. And to be clear, it's something that companies can absolutely get for free by just subscribing to the right mailing list, and participating in the right conversations... None of this is about closed-door access.

When my clients come to me and they're like "Oh, we need something about the runtime", or something like that that's not really in my wheelhouse, I don't tell them "Oh, I'll flag down Keith and start a private conversation." I tell them, "Oh, you should probably open an issue here" or "You should email this mailing list and CC this person." I just direct them at help them navigate the project.

These are all things that are just out there, but companies don't have the headcount, nor would it make business sense to have people so embedded into every project that they depend on. But at the same time, they want good outcomes for their critical dependencies. They want to make sure they stay aligned with their systems, and would rather not have to reimplement something down the line because things diverged, because we didn't see each other's requirements. So that's exactly it.

So that's the base pitch, right? That's what I call the gold tier of the contract. And it was what I started with. Back in May, the idea was to go for pretty much just this. I didn't have quite these words to explain it. Then I had a bunch of conversations over the months trying to find other things to make this work, but at the same time, things that are reproducible, things that most critical projects can do.

\[26:03\] Because this is a thing that I can do and other projects can't - lots of projects that are critical for companies can offer what we just talked about, right? And here -- by the way, I'm saying critical a lot. The model I'm trying to build is tailored for the kind of project that would take months to replace.

When I go to clients, I basically start a conversation with this: "Alright, imagine that what I do went unmaintained. Would that a) be okay, and b) how many engineer months would it take to replace it or maintain it yourself? If your answer is "We would be okay with it, or we would just replace it in a couple of weeks, that's great. I'm glad the thing works for you. Email me anytime you want. I still read my emails. I don't think a retainer is a good fit for us. We each go our separate ways. If they tell me "Oh, well, no, this is a critical part of our stack. This is important to our business, to our projects, to our infrastructure", then we're talking.

**Jerod Santo:** And when you're talking with them, are you talking to them about the Go programming language? Are you talking about certain security things inside of it, or Age, or your other projects? What exactly is the thing they can't live without?

**Filippo Valsorda:** So personally, when I go in, I talk about my work on the Go cryptography libraries, and some of my work on security, although I always make it clear that I'm not the only person driving this, because Go is a big project, and as I said, Roland is still working at Google on all this, and we work together a lot... Julie Qiu is now leading the security team, and she's great, along with the vulnerability database, and all they're doing. So I talk about all the work I do, and I make it a point of writing it up periodically on my newsletter, writing up the changes that went into the past release, what I plan to put in the next release. And then I talked about Age, I talked about Yubikey-agent, I do a lot of work around transparency trees, which Go developers may know as the checksum database... Or even better, they might not know it, because good security UX is stuff you don't notice; it just make things more secure and doesn't break, so you don't know it's there.

**Jerod Santo:** Right.

**Filippo Valsorda:** The Go checksum database is a way to ensure the integrity of the modules you download from the module proxy in a way that even if the proxy itself wanted to lie about, it could.

**Jerod Santo:** Gotcha.

**Filippo Valsorda:** It uses Merkle trees for that. I could talk for an hour about that, but we would be going off-topic.

**Jerod Santo:** We'll get you on Go Time to talk about that.

**Filippo Valsorda:** Exactly. If people are curious, Katie Hockman gave a fantastic talk at GopherCon a few years ago about it. Anyway, we were saying that that's what the whole offering was at the beginning.

**Jerod Santo:** Right.

**Filippo Valsorda:** And then I started thinking, "What other things would work for other open source projects?" And we talked about it with \[unintelligible 00:28:45.11\] we talked about it with Kelsey Hightower, and what came out of it is that open source maintainers are also very legibly experts. Legible as in seeing like a state; the concept of these large companies sometimes can or cannot understand something depending how it's framed, how it's presented.

**Jerod Santo:** Able to communicate well. Is that what you're saying? Like, they are good communicators? When you say legible.

**Filippo Valsorda:** It's a little different from just being a good communicator. Legible is -- so it comes up when you're trying to get a loan, for example. If you have a job like mine currently, and you go to the bank, and you try to get a loan, they're gonna be a little skeptical, because they've never seen this. They don't know what it's about. There is no contract...

**Jerod Santo:** Right.

**Filippo Valsorda:** I mean, there are some contracts, and that helps, but there is no employment contract, there is no W-2... And so they're like "I don't know, do you actually make this much money every year? Last year you didn't", because - well, I started recently, so I'm pretty much not legible from the bank as a reliable borrower. And instead, when I had a job at Google, I would just show up with a paycheck and they're like "Ah, yes, I know those. I know that if you have one of those, you'll probably still have it next month", although - asterisk...

**Jerod Santo:** Yeah, exactly. The same or more next year. Yeah.

**Filippo Valsorda:** \[30:08\] Yeah, exactly. So that's the legibility. And becoming legible is trying to structure what you present in a way that's familiar to the counterparty. And sometimes that means, for example, a lot of what I do is I send PDFs, I send a quote, and then there's a purchase order, and I accept payments through ACH, which to many companies is much more legible than "So there's this thing called GitHub Sponsors. It involves you giving money to Microsoft, and then they send it back to me, but you need to have a credit card for that, unless you have a contract with them." And you've already lost accounting. Accounting is like "No, this is not happening."

**Jerod Santo:** It's abnormal, it's hard to understand, and therefore it's risky.

**Filippo Valsorda:** Yeah, exactly. Instead, I present myself as a vendor. You have 1000 of those. I'll go through whatever vendor assessment process you have. We'll sign PDFs, and click Docusigns, and...

**Jerod Santo:** Right. All the things required to be a vendor.

**Filippo Valsorda:** It is, of course. Then I'm going to bill you an amount of money that's commensurate with that. And that is, I think, what made this attempt different from other attempts in the past. And I realized that I keep straying from what is this other thing that I decided to --

**Jerod Santo:** Yes, what's the new thing? I think I know what it's gonna be, but our listener does not know.

**Filippo Valsorda:** The new thing is just being accessible as an expert. Because for example, a lot of companies that care about my work on Go cryptography care about Go and cryptography, or maybe just Go, or maybe just cryptography. And they get a lot of value out of just having me on a retainer, the same way you can have a lawyer on a retainer.

A good example that I enjoyed, that I make all the time - there was this company that doesn't have as much cryptography expertise, but they maintain something that uses a lot of cryptography. And they got a PR to replace their library, an elliptic curve library. And they're like "Well, the PR says it's faster, so it's better, I guess... But how do we assess that?" And they didn't have the in-house expertise, nor did it make sense for them to hire it. Just like it didn't make sense for them to hire somebody to spend their days on the Go issue tracker, it didn't make sense for them to hire a cryptographer to assess the occasional cryptography change. So what they did is they just called me and they were like "Oh, hey, this PR came in. What do you think?" And I recognized the author, and I told them "Oh, this is a good engineer. They write good code. You've got to be a little careful about the licenses, because some of their stuff is AGPL, and that might work or not for you... And since you are replacing this component, know that this is not very well specified in some edge cases, and if that matters for your consensus application, here's a giant bag of test vectors that I used for the standard library, that you can use to lock in behavior to make sure that you're not changing anything you don't want to change." It took me 15 minutes, 20 minutes. So it didn't take away a lot of time from my maintenance work. But it was a lot of value to this company, because they didn't have to neither hire a security firm, nor did they have to employ a cryptographer just to have them on hand for this sort of thing.

**Jerod Santo:** It's like having that lawyer available just when you need them, to say, "Hey, can you just look at this real quick and make sure it's legit?" And they spend five minutes and then they're like "It's legit."

**Filippo Valsorda:** Exactly.

**Jerod Santo:** Or "It's not legit", and they can tell you why. So this is more traditional consulting tied in, right? But it's not like "We're gonna get X hours of Filippo's time per month, on a retainer."

**Filippo Valsorda:** Correct.

**Jerod Santo:** That's more of like a development consulting thing. This is really just the advice, on-call, on-demand. What are the terms for this? Is it very loosey-goosey, or do you give them exact "I'll answer you within 15 minutes"? How does it work?

**Filippo Valsorda:** They have a minimum guaranteed amount of meetings they can use, but I always tell them, "Look, it's unlimited. If you have interesting questions, in particular if they're relevant to the project, but even if they're not, up to a point it's going to be fine. You just reach out. If it's not working, we're going to talk about it." And so far, I had no problems with any of my clients going over any virtual line of how much time I can invest in each.

\[34:20\] They do get solved SLA for vulnerabilities, so every time a new vulnerability comes out in Go or in one of my personal projects, I'm available for the next 24 hours on a six-hour SLA if they need urgent help figuring out "Are we affected? What should we do? Is this mitigation good?" So the kind of thing that hopefully you never need, but when you need it, it's the one thing that you really need fast, is usually around vulnerabilities.

**Jerod Santo:** Right.

**Filippo Valsorda:** They don't get preview access to anything, because of course, that's not mine to give. It's a bigger project than myself. But immediately after disclosure, they have access to that. But yeah, I usually talk about it in unlimited terms. A lot of companies understand it from the concept of a startup advisor; the startup advisor usually gives them 1% of pre-dilution shares when you're starting out, and then you get to call them and ask them, "Hey, we're stuck with this, or that, or that." There's no fixed "Oh, this is how many hours you're getting." And sometimes you only call them twice in a year, but those two times were really useful and delivered a lot of value.

**Jerod Santo:** Yeah. And so because it's not fixed to a time standard, it scales a little bit nicer than it would be if you were just divvying up "I've got 40 hours in a workweek", or 60, depending on how hard you like to work, and "I'm gonna divvy them out across these clients. And you get five hours, and you get 10 hours."

**Filippo Valsorda:** Exactly.

**Jerod Santo:** This is just an advisor or an on-call expert, in addition to the other things that you're getting, which is - let's just call it sustainability of the project, or risk management on the project continuing... And then the second one being reciprocal access. And then this -- but you said this is like a platinum-level thing, so not all of your customers want to pay for this or have to have it. It's an add-on.

**Filippo Valsorda:** Exactly. And you're right, it's about how it scales, and how it aligns the incentives. The whole reason I can offer this advice is that I'm a maintainer that maintains this software. If I stopped doing that and started just doing consulting full-time, I would probably be out of date and not that useful in two years, three years. So it's both in my interest and in the company's interest and in the project's interest that I keep doing maintenance work, I keep doing my day to day learning about the libraries, and thinking about the APIs, and learning about the other projects in the ecosystem... And then all that expertise is available to these companies for amounts that are a fraction of a full-time employee. So I'm much cheaper than hiring a cryptographer full-time, but at the same time, a significant enough fraction that having five, six of them brings me to a place where I can pick this instead of a full-time job as a senior software engineer without taking that massive pay cut that we were talking about when we started.

**Jerod Santo:** Right. So as of a month ago, when you wrote this, you had six current customers. Is that still the number? Has it fluctuated at all?

**Filippo Valsorda:** Yeah, it's still the number. As I mentioned, I slowed down the sales and outreach. I have two clients that I'm talking with, who we're still finalizing a deal with, and I'm hoping to get them on board soon... But now I'm mostly trying to kick the tires of the model. Like, now we got it started, let's see how happy they are, what there is to learn... Also learning how much extra time each client is, because I didn't want to get on board 15 clients and find out that I don't have time for all of them. I actually think there's space for more than six, but I wanted to start conservative, make sure --

**Jerod Santo:** \[38:09\] Do you have a sense of what a top would look like?

**Filippo Valsorda:** At this point, I feel like before growing and starting to hire other people it would probably be between 15 and 20 at various places in the scale just silver, gold platinum...

**Jerod Santo:** Right. And with six you're at a good Google salary, so I mean, you're talking double that, maybe triple it. That's a heck of a good living for open source maintenance, right?

**Filippo Valsorda:** Yeah. I feel like it's important that there's a success path that grows, right? Because there is significantly more risk in this than taking, again, the proverbial senior software engineer job. And usually in capitalism how we reward risk is with more potential upside. So what I'm hoping becomes possible is that what starts as a solo thing becomes a bit of a firm, or a partnership that scales and sells to maybe the same pool of clients, because they all are interested in some of the same things, and then it starts growing, and eventually maybe even spawning off new firms that then start growing, which is sort of what happened with security consultancies in the '90s.

What started as a few people trying to make of this weird basement thing an actual job... InfoSec was very much not a job. And some people actually got a lot of hate for "selling out" when they started. And then they made a firm, and then the firm grew, and then some of the partners went off and made their own firms, and now it's a job, now it's a thing you can start at junior... As much as we talk about the fact that there aren't enough junior jobs in InfoSec, but - it's still a career. And open source maintainer is not. And that's kind of what I'm hoping to fix in the big project, in the big scheme. I won't open source maintainer to be a profession. A thing you start at junior, that you start by joining something bigger than just yourself, and then you grow in it, and eventually spawn off your own thing, hopefully.

**Jerod Santo:** Right. Yeah, that would be super-cool. Curious how successful your pitch has been to get to the six customers. Obviously, you had some relationships with some of these prior to starting this, which always helps... And I think many maintainers of critical infrastructure have those relationships, kind of because that's what they've been doing. But did it take meeting with 20 clients to get six, did it take meetings with six to get six? How much time did you put into this whole aspect, and how successful were you at selling them this idea that you have?

**Filippo Valsorda:** So what was very effective is that oftentimes I had champions in the engineering org. Engineers who either work on open source themselves, or who have a past as maintainers, who see the model and want it to succeed, and then that go in and connect me with the right people internally, and help me navigate the process.

I think I probably actively engaged between 15 and 20 companies, seriously pursued maybe 10, and of those 10, six are clients, two are still maybes, and two didn't pan out.

**Jerod Santo:** Sure. Okay.

**Filippo Valsorda:** And it's been slow, it's been painful, it's been... Enterprise sales.

**Jerod Santo:** I was gonna say, how much of your life is just enterprise sales now?

**Filippo Valsorda:** Oh, for the first months, a lot of it. That's kind of what I'm trying to change the balance of right now. But starting out, I had to start this from scratch, so now it's different. Now I just have to keep up with churn, and eventually decide if I want to grow. But initially - yeah, initially this was pretty much what I did full-time for maybe 3-4 months.

\[42:02\] And hey, I'm not going to claim it's easy. I'm not going to claim it's not a bunch of extra work. I'm not going to claim it's different from the work I want to be doing, or that I'm particularly good at. I'm good at, I don't know, cryptography; the stuff on that board. And talking to people about this model, as much as they get excited about it, and as much as they already knew me, and so there was an existing relationship - it's extra, different work.

But the thing that I never heard is, I don't know, a dentist say, "You know, I studied a bunch for dentistry, and I really like fixing teeth, and this is what I'm good at... But starting a clinic? That seems like so much overhead. It's not like I'm a businessman. I'm not. I just like fixing teeth. So... Too bad. I can't really make any money out of this, huh?"

**Jerod Santo:** Right.

**Filippo Valsorda:** So other professions have figured this out. Now, to be fair, other professions have the tools; other professions have CRMs for dentists, and the job of a clinic administrator is a whole job that you can hire for, and you can go to trainings for it, and you can --

**Jerod Santo:** They're legible. These other careers are legible.

**Filippo Valsorda:** They are legible. There you go.

**Jerod Santo:** I'm learning.

**Filippo Valsorda:** You can go to a bank and get a loan to start your dentistry clinic. So there is a lot of road to pave, but I don't think it's fundamentally a deal-breaker the fact that this model involves a bunch of administrative overhead. We need to start with people like in my position, where we don't mind doing the extra work, and where we already have some of the relationships so that we can start building the tools and paving the road. But I think there is request in the market for this kind of services from open source projects, and we can build the offer, we just need to make it a legible, understandable model.

**Break:** \[44:05\]

**Jerod Santo:** Well, it's really cool that you're having success, and I think just talking about it, sharing it as you did on your blog, and encouraging other people to follow in your footsteps starts to -- you know, you create that path, and other people can kind of walk behind you in the path, and they may have to pave their own ways to a certain degree, but it just gets easier and easier as more and more people do it, and as more and more companies get used to the prospect of "Oh, this is something that's available to us. We had no idea we could even acquire such a relationship. We would love to have that kind of a relationship, we just didn't know existed." And - well, it really doesn't yet, or kind of does, just barely.

I should point out that there's lots of different kinds of open source, and there's lots of different models, and they're not all going to work for all different kinds. Nayafia on GitHub has a great repo called Lemonade Stand. Our old friend, Nadia, who put together a list of all the different ways you can -- there's always money in the lemonade stand. No, the banana stand. I don't know. But anyways, we'll link that in the show notes as well, just to say there's so many different ways people are trying to do this. And you pointed out at the beginning, and I want to emphasize that you think that this is a sustainable, reproducible model for certain types of open source; specifically, you're talking about critical projects. And I know there's plenty of listeners, and I've done it in the past, like "Well, this is great for Filippo, but it's never going to work for me." I think there are certain things that do work in the small, but not in the large, and I'm wondering, with regard to critical projects, do you think there's other ones that we could think of, name, or maybe even characteristics of the fact that you're sitting on the team of a programming language in a niche of that language, the security niche, which many firms are not well staffed in, that this intersection is nice? ...but are there other areas where you're like "You could totally do this for Laravel" or "You could totally do this for Python"? What are some other projects where you think somebody could do this?

**Filippo Valsorda:** It's a very good question, because it is the most common objection. And it's a valid one. And as I said, I'm targeting a subset of projects. I also think that I am in one of the best positions to do this, I acknowledge that. And that's part of why I'm doing it. I realized that I'm in such a good position that if I can do it, the model doesn't work. Or I'm very bad at it, I guess, but... \[laughter\] But a lot of people reached out after I started sharing this, and some of them had already started trying to build something similar. And what they work on has been surprising.

There's a person who was going for approximately the same thing, to the point that they were formulating the same three value propositions, and they work in robotics. Completely in my blind spot. I had no idea that this project existed, it's not my ecosystem, not anything I know anything about. But this person builds and maintains the library used by a lot of robotics companies, and can offer exactly that. I feel like it's important to consider critical as in the eye of the beholder as a perspective-based thing. The same project can be completely non-critical for one company, and the core of the business for another company. It's easy to think about older projects that are critical to a bunch of companies... I don't know, FFmpeg. There might be companies that need FFmpeg everywhere in their stack, but they don't have the in-house AV codec expertise, right? Or HTTP servers. You might have built your entire serving pipeline on top of Caddy, but have no specific expertise on HTTP, and so you could benefit from having Matt Holt on call. By the way, I love Matt; he did not endorse any of this, but --

**Jerod Santo:** \[50:07\] \[laughs\] Shout-out to Matt.

**Filippo Valsorda:** Yes. Who, by the way, did a lot of experimentation with making open source sustainable, so that's part of why he's top of mind. So I really think different projects are well-positioned with different markets, and different segments, and different companies... Although, before you asked what was the hardest part of selling this, and honestly, it was not selling it to companies; maintainers were such a harder sell about this being doable than companies were. Companies most of the time - even if they were negative, they were like "Oh, I totally see that. Our approval process is a pain right now, and we are on a budget, and totally can't get approved, but I get it." Lots of maintainers instead were extremely negative, and I get it. I get that anger, and I know that I've angered some people that I care about, that I wish the best to, because they tried and they were burned, and they're like "Ah, it's just how it goes. Companies just take your project and build a multimillion-dollar company on top of it, and you never see any money out of it." And you know, it's kind of exactly what I'm trying to change.

And part of why I'm doing it myself is that I've figured that the only way to disprove the idea that that's the only way it can go was to show an existing proof of the model. I think that a lot of it rests on how legible - and we keep getting back there, don't we? ...you are. Because if you're just like "Hey, you should really donate to me, because you're making a lot of money." Very hard sell. Not because companies are bad people, but because companies are off doing their business, and they have their own internal mechanisms. And if you've ever tried getting a donation approved at a big company, you would - yup, no, that's gonna go through 15 layers of bureaucracy more than getting a vendor approved.

**Jerod Santo:** It's easier for them to make you a vendor and sign a contract than it is to donate through GitHub Sponsors sometimes.

**Filippo Valsorda:** Exactly. That's exactly it. So yeah, I think there's a lot of projects this can work for; I think it's got to go in cohorts. It's got to start with people who are highly motivated, have a bunch of privileges, honestly, to allow them to try this. Part of why I can do this is that, as I said, I could spend six months being like "Will this work, or will I be out of a job still in six months?" And lots of people can't afford that. That's entirely fair. And the model is just not ready for people who need that much financial stability.

So it has to start with people who can be less risk-averse, and who have a lot of the connections already, because we're still teaching a lot of companies what this model is about. Hopefully, over time, there's going to be more and more on-ramps and more and more projects this works for.

**Jerod Santo:** Yeah. Well, it's cool to see you leading the way, it's cool to have the proof of concept, right? It can work, at least for one person, in this one way... And let's see if it can work for more people in this same way, or maybe similar ways. Maybe the three things that you offer turn into four for somebody else, or maybe they find out nobody really wants their advice, but they really want that risk aversion, and so it may be like different iterations on this same idea.

And time will tell. I mean, you're still in your first year as well. So one of the things that will be a big testing ground for you next year, and prove to you how much value you're bringing is "Will these companies do it again next year?"

**Filippo Valsorda:** Exactly.

**Jerod Santo:** \[53:57\] And if it's super-easy, just like, yeah, keep it going, then that's like complete validation, right? Because now you don't have to do it in three months of enterprise sales either. You're just like "Hey, should we keep going?" and they say yes. And if they're all like "Well, we gave you a shot, and actually, we're going to reassign this budget elsewhere", now you have to go out and beat the streets again, and maybe it doesn't sustain the way that we hope it does.

**Filippo Valsorda:** Yeah, exactly. February 20-24th I guess there's going to be a newsletter, one way or another. And I'm thinking a lot about that, because I try to keep contact with the companies. One failure mode I see is that they just don't ask me anything. They're just "Oh yeah, go, do your thing." And then in 12 months, they're like "So why do we pay you again?"

**Jerod Santo:** "Why are we paying you again...?"

**Filippo Valsorda:** Yeah. So I reach out, I proactively send them little summaries of the vulnerabilities when they come out... One company had a very good suggestion that I need to decide whether to spin up, and they basically wanted a sort of newsletter, but not like mine currently is, that just goes into deep-dives about various topics, but just "What am I looking at right now? What interesting cryptography topics are out there?" So basically just a curated view of the ecosystem; which makes a lot of sense, because if they're hiring me to be their expert in cryptography, having that executive summary of what happened in the cryptography world in the last three months makes a lot of sense. And it is another thing we can learn from other industries. There is a whole business around preparing reports, and industry outlooks. Some call it lobbying, some call it blogging, some are just very good, and everybody reads them, even outside the industry, and they're called \[unintelligible 00:55:43.01\] \[laughter\]

**Jerod Santo:** Right. Yeah, punditry, whatever you call it. I mean, that also scales well horizontally across customers, because - okay, you have to do all the work once, but at least you're doing it once, and you can send it out to all your clients as a value-add. Or you can just publish it publicly, on behalf of your customers, to the world, and then that just continues to establish you as an ongoing expert...

**Filippo Valsorda:** Exactly.

**Jerod Santo:** ...and so that has some payoffs as well. So yeah, I can see that being an angle, an add-on or an angle that flushes out this idea.

**Filippo Valsorda:** I was just thinking the other day that there are a lot of topics that I would totally read, from every month to every three months digest of everything that happened. The OpenBSD world has sort of that with undeadly, which is just this curated executive summary of all the things that happen in OpenBSD land. And is it even relevant to me? Not really. I guess that Raspberry Pi over there does run OpenBSD, but that is the extent of my exposure to the platform. But still, they do a lot of interesting work, and having somebody surface "Oh, this thing was just committed by Theo de Raadt into the OpenBSD tree" - I would have never learned about it. But now I know about a new security technique that maybe we'll see in Linux in five years.

**Jerod Santo:** Right.

**Filippo Valsorda:** And they know, because they work on OpenBSD every day, but we don't, because we're sitting outside of it. And if it looks almost exactly the same shape as what I do for these companies, it's because it is. I work on ongoing cryptography every day, they don't, and what things can I produce to make that valuable?

**Jerod Santo:** I like that idea. Well, we'll have to check back in. Definitely keep writing as you go, because you have had some success; as we said, it's early days, so you still need to prove out some stuff. To our listener, if you're thinking of trying out Filippo's model - I know many of our listeners are in very similar circumstances that you are in, experts in a field, maintaining a very critical piece of open source infrastructure, and maybe or maybe not struggling to turn that into their full-time gig... What's the best way that folks can reach out to you and ask for help, or advice, or read your blog? What are the touch points?

**Filippo Valsorda:** \[58:02\] Oh, I read every email I get, and I get emails at every address at my domain, Filippo.io. So you can type whatever at Filippo.io and I'll read it. I'm not yet set up to help people one-on-one. This is very much something that I want to be able to do at some point, like give you a handbook of how to get started, what things to consider to decide whether this is going to work, what things to look out for, what things have I learned. It's just that I don't know the whole thing well enough yet to tell anybody "Oh yeah, this is a paved path. This is what I know, this is the map." I don't have a map yet. However, if people are determined and in a position to take risks, and basically would do it even without a map, even if I wasn't doing it, I really want to talk, because now is the time for that cohort, the people who can try it with me. And I'm happy to share everything -- like, some people reached out and they were at a similar position as I was, and I sent them my perspectives, my rates. Everything I could share without breaking clients confidentiality I'm sharing, because really, I'm not in this to, I don't know, start a platform, or somehow capture centrally the value of the whole thing. That's not interesting to me. I want to see other people succeed at it, too. So yeah, email is definitely the thing that reaches me. I can't promise to answer everybody, but I read every email.

**Jerod Santo:** So as we stand here, I'm looking at the Lemonade Stand repo's Table of Contents, just the high-level categories of types of ways that you can make money from open source, and I'm just wondering where your model actually even fits in, because it's kind of -- so top-level you have like grants, consulting, paid support, SaaS, copyleft, open core... It's kind of consulting, it's kind of paid support, it's kind of a hybrid of these things... And so I'm wondering if maybe some sort of a "name it to tame it", you almost need a name for what you're doing. I like the enterprise sales moniker that Patrick McKenzie said, but it's something to think about; a way of claiming what is this model. Maybe it's just a hybrid of those two things, but maybe some things to ponder on the way out...

**Filippo Valsorda:** Yeah, you have a good point. I'm looking at the table of contents too now, and - yeah, there's a bit of advertising and sponsorship, there's a bit of grants, in a sense... But I don't like grants, half because you are spending half your time writing grants, and that's how Academia ends up. And I don't want that to be the future of open source. And also because you're basically always building a new thing, and adding complexity to pay down the complexity depth of everything you built so far. And I'm not a big fan of that. But there is a bit of consulting, of course, there is a bit of paid support, although I don't go in --

**Jerod Santo:** Right. Something to think about.

**Filippo Valsorda:** Yup.

**Jerod Santo:** Because it allows other people -- it gives people permission to follow in your footsteps, if they can say, "I'm trying this, maybe the Filippo way, and it's these three things", for example.

**Filippo Valsorda:** If I have to pick now, it would probably be something like professional maintainership. Do you feel like that's specific enough? Maybe not...

**Jerod Santo:** I like the style of it. I think if I was looking at it as a category, I wouldn't know what it meant when I looked at it as a top-level category. But something to workshop. I think that's a start. I like the idea.

**Filippo Valsorda:** And maybe some listener has a good idea and will email me the right name for the model.

**Jerod Santo:** There you go. Send Filippo an email, or let us know in the comments, whatever; we'll make sure that gets back to him. Very cool. Well, I appreciate you coming on the show, I appreciate the work that you're doing. I always love when people have success, and they don't just hoard it to themselves, they actually put it out there and say, "Hey, this could work for you as well." So please do keep working at it, and keep writing, and we'll be cheering for you.

**Filippo Valsorda:** Thank you, and thank you for having me, and for the great questions. I feel like you're onto the model, and that's really reassuring and encouraging.

**Jerod Santo:** You bet. Alright, thanks again. It's been fun. We'll talk to everybody on the next one.

**Filippo Valsorda:** Thank you. Bye!
