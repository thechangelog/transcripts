**Kris Brandow:** Hello, hello, hello and welcome to Go Time. This week we're talking about the news, or at least some of it. For this episode I have two wonderful co-hosts. I'm joined by Ian Lopshire. How are you doing today, Ian?

**Ian Lopshire:** I'm doing wonderful.

**Kris Brandow:** Excellent. And I'm also joined by Johnny Boursiquot. How are you doing, Johnny?

**Johnny Boursiquot:** I'm doing alright.

**Kris Brandow:** Alright. So yeah, we've got a couple news articles that were -- I guess they're all not news articles. Some of them are social media posts... But also, we've got a whole bunch of articles that we're going to talk about, a whole bunch of news we're going to talk about. And first up is this discussion from Reddit about what might happen if Google decided to part with the core Go team, and what that might mean for Go's future adoption.

**Ian Lopshire:** Let's start by like explaining why this came up... The layoffs at Google. They appear to have fired a large number of the Flutter team, the Dart team, and a lot of their Python teams... Just a little bit crazy there.

**Johnny Boursiquot:** Is this like Google's uncanny ability to get rid of useful products that people still use and love? They're like "Well, let's extend this philosophy to language teams." \[laughs\] It's not just products on the chopping block. It's programming languages, it's frameworks...

**Ian Lopshire:** I feel like we need a verb Google getting rid of useful things, like inboxing, or something...

**Kris Brandow:** Inboxing... Or what was the really popular one? Google waving it? \[laughter\]

**Johnny Boursiquot:** Oh, man... Man, if you're old enough to remember Google Wave... Well, I am, so I'm not gonna say anything bad about it. \[laughter\] But dang... Google has been waving off products for a long time, huh.

**Kris Brandow:** That's a good verb for that, too. It's like "Oh, wave goodbye to those products." But yeah, so that's the background of it, as Ian said... They've decided to lay off some more people. This is like an interesting time in the tech industry as far as big companies doing lots of rounds of layoffs of various different teams... But given that background and context, there's quite a bit of discussion, some thoughts... I think that the top comment, or the top -- because this isn't Reddit, so the top reply... It's basically kind of saying "There's probably not going to be that big of a problem if they did, but they probably won't do it." What do you think? What do you guys think?

**Johnny Boursiquot:** Well, Gulp is open source, right? So I don't know, there's a lot of open source projects that -- I mean, it is open source, that's great, but we can't underestimate basically having a corporate benefactor behind certain corporate projects, if they weren't funding the development of these things in some way, whether directly, or sponsoring the teams at work, the contributors that were out in the community that sort of keep something alive... I don't think we can underestimate the power of a mega funder like Google. But I'd say that there are enough large companies using Go that rely on Go, whether it's at the infrastructure level, or part of their product, or whatever it is, that I think if -- I mean, that's my hope at least, that if Google were to sort of take a back seat on sort of the leadership for Go, other companies would definitely be vying for that spot; they would definitely want to step in.

Now, what the governance model would be? Right now it's the Go team that decides what goes in, obviously with input and contribution from the community, but it's a centralized sort of corporate decision body, basically. And so far - I can't really complain with some of the decisions they've made. Not everything has been smooth. You can't really expect it to be. But they've done a pretty good job. So if all of that were to change, we don't know what we would get for leadership of the language now. \[unintelligible 00:07:14.06\] sort of a branding blow to Go, not a critical technical blow. But it will also create a leadership sort of uncertainty for a while until the dust sort of settled.

**Kris Brandow:** I feel like if Google did just like "Okay, we don't want to do Go anymore, we're gonna get rid of it. We're gonna lay off the whole team", I feel like one of the other big tech companies like Amazon or Microsoft would just pick up that whole team and be like "Okay, then we'll just start doing this." I mean Microsoft, they basically almost did that with Open AI, and that was a whole lot more people than the Go team. And as we'll talk about later, Microsoft seems to have a pretty significant investment in Go.

\[00:07:58.09\] So it seems like some kind of corporate benefactor, someone would want to actually pick this up and run with it. It was kind of the whole team just being let go at once... Or like a foundation, because I think as mentioned in the Reddit post, the CNCF has so many different projects that are written in Go. You're not going to rewrite Kubernetes at this point in another language, so...

**Johnny Boursiquot:** Some will try... \[laughs\]

**Kris Brandow:** I mean, people will try, but is the CNCF really gonna -- like, if they have to weigh it, are they going to let Go just disappear and then try and rewrite all of their projects in other language? Or would they just be like "Okay, we're gonna help pick up the slack."

**Johnny Boursiquot:** So by comparison, does C have a major corporate body behind it? I mean, C is still around, it's still being used, and it certainly underpins a lot of technologies that we build on top of, so...

**Kris Brandow:** I mean, C is a standard, so they have the standards body that's behind it, just like C++ is also a standard, so it has a standards body behind it.

**Ian Lopshire:** We've also seen these languages be spun off corporate benefactors before, right? Like, Rust survived Mozilla's dive, so... Yeah, I don't think it's gonna happen, but if it did, I'm not sure there's a ton to worry about.

**Kris Brandow:** Yeah, I feel like the more worrying thing would be like the slow starvation of resources from the Go team. If Google slowly started underinvesting in Go, and then you'd have to be like "Okay, well--" That almost seems worse than just that smooth "Okay, we're just getting out of the whole game. Goodbye, we're shutting down this whole division. Figure it out, rest of the world."

**Ian Lopshire:** Laying off half the team would be way worse than all of them, right?

**Johnny Boursiquot:** Right. If all of a sudden Ross Cox has been reassigned to something else, and Ian Lance Taylor all of a sudden " I have other projects..." Or, you know, well known people who lead the team, at least technically, sort of change roles and get reassigned, or something... I don't know, I'd be scratching my head. I'd be wondering, "Hey, what's about to happen here? Are we getting waved off, or what's happening?"

**Ian Lopshire:** I do wonder what would happen to the module repo and the Go.dev site, the docs site... Because that's all Google hosted right now, right?

**Kris Brandow:** Yeah, there's a whole bunch of infrastructure that is currently hosted by Google, and there'd have to be some plan to actually migrate it. But even in that case, I don't think Google would be like "Oh, we're just going to shut everything down." I think they'd probably do something like Google domains and be like "Okay, we're going to find somebody else who wants to have this now."

**Johnny Boursiquot:** Squarespace now hosts go.dev. \[laughs\]

**Kris Brandow:** I'm sure it'd be picked up by like Amazon, or Microsoft, but...

**Ian Lopshire:** It's now go.squarespace.com.

**Johnny Boursiquot:** \[laughs\] That is so freakin funny. Oh, man... Some ads, like "Come along when you go check out some vulnerabilities."

**Kris Brandow:** Like "Oh yes, you edit the Go website in their nice, whizzy way."

**Johnny Boursiquot:** \[laughs\] Some ads and some shops that's auto-suggested to you in your go.mod file. "Check out these shoes,

they're 50% off."

**Kris Brandow:** "You imported this module, and people that import this module like lasagna. So here's some good frozen lasagna you can buy."

**Johnny Boursiquot:** \[laughs\] Oh, man. It's so funny. I have tears. Please, Google, don't do this.

**Kris Brandow:** I don't think Google is gonna sell go to Squarespace. I think we're okay.

**Johnny Boursiquot:** Oh, man...

**Ian Lopshire:** Could Google even sell Go? Is that a thing they could do?

**Kris Brandow:** I mean, I pretty sure they own like the copyrights, so... Yes? I mean, it'd be kind of weird, but I think they --

**Johnny Boursiquot:** They own the brand, yeah.

**Kris Brandow:** That's right. The people that built Go worked at Google at the time, and Google has those all-encompassing contracts of like "We own all of it."

**Johnny Boursiquot:** \[00:12:16.13\] So Go is open source... What does intellectual property law look like for open source? Like, open source means you just can use it, freely reuse it and do all kinds of things, right? Does that mean --

**Kris Brandow:** It means that if you forked it, you couldn't call it Go? Like, the same thing happened with TerraForm, where they forked TerraForm, but they can't call it TerraForm, because TerraForm is intellectual property of HashiCorp. So Go is intellectual property; like, the brand of it.

**Ian Lopshire:** Wait, who forked TerraForm? I get off topic a little bit...

**Kris Brandow:** CNCF did, with OpenTofu...

**Johnny Boursiquot:** Ian's been living under a rock for the last couple of weeks... \[laughs\]

**Kris Brandow:** \[unintelligible 00:12:52.00\] Maybe we should do more of these.

**Ian Lopshire:** Wait, was this after they sold to IBM? Is that --

**Johnny Boursiquot:** No, that was way before. This was like six months ago.

**Ian Lopshire:** How did I miss this? I don't know.

**Johnny Boursiquot:** Yeah, maybe because you don't use TerraForm that often.

**Kris Brandow:** HashiCorp did the Redis thing -- or I guess Redis did the HashiCorp thing, which \[unintelligible 00:13:09.00\] dual license, and everybody was like "No." And so the group of people got together and they forked TerraForm, and they made OpenTofu.

**Ian Lopshire:** Alright, another thing to add to my reading list.

**Kris Brandow:** Yeah. Thankfully, there's only one fork, unlike Redis, where there's so many.

**Ian Lopshire:** Wait, there's an Apache fork of Redis now, right?

**Kris Brandow:** There's a lot. Okay, we're getting off topic.

**Johnny Boursiquot:** Oh, I'm sure there's lots of forks of Redis... I mean, my mom probably has a fork of Redis at this point. \[laughs\] So it's fine. It'd be interesting if IBM sort of reverted the whole TerraForm licensing debacle...

**Kris Brandow:** I think I was reading something where I think IBM does have a fork of TerraForm, like an open source fork of TerraForm, and everyone is like "Huh?" \[laughter\] It's an interesting situation. So I guess the answer to the question is yes, you could sell Go, or at least the IP to it. I mean, if you sold it to someone like Oracle, I'm sure they'd try and find a way to unopen source it as well, but... I think everybody else would just kind of take it and run with it, and be like "Okay..."

**Johnny Boursiquot:** Yeah, maybe.

**Ian Lopshire:** Well, let's all hold our breath and hope that doesn't happen...

**Johnny Boursiquot:** Yeah, but which part? All of it?

**Ian Lopshire:** Specifically the Squarespace bit, but... All of it.

**Johnny Boursiquot:** Okay, good. Yeah, we're in agreement there. Oh, good, Lord... Yeah.

**Kris Brandow:** I mean, I think we're all pretty safe from Google abandoning Go. But also from like a contributions standpoint, I think the majority of core contributions come from outside of Google. So it's not like the language would necessarily slow down in development. You'd just have to -- you'd need to find a new home for things, and as I think you said, Johnny, a new governance model to figure out how do proposals happen, what gets into the core language as far as big things, not like the small things, where people are just kind of like maintaining a library, or something like that. So yeah, I mean, it'll be interesting to see. But for now, we are safe. There is no risk of Go being sold to Squarespace.

**Johnny Boursiquot:** As far as we know. I mean, we're three peeps on a podcast, just making wild guesses as to what a mega corporation might or might not do. I mean, they're laying off entire language teams and entire frameworks. Can you imagine if you're like -- what is it, like Flutter data laid off, or something? Or Dart, or whatever it is? Can you imagine if you invested like years into these frameworks and languages, and all of a sudden, on some corporate execs whim, like "Well, nah, we need to now divert these funds into AI. No more of these side things. These are not core to our mission. These do not align with our objectives." And all of a sudden, just with that sentence, your livelihood is now at risk. Can you fathom it?

**Kris Brandow:** \[00:16:17.29\] I mean, yes, but...

**Johnny Boursiquot:** Do not put all your eggs in one basket, folks. Do not put your eggs, all of them in one basket. Never, never, ever.

**Kris Brandow:** Yeah. I mean, it'll be interesting, especially with all this AI development and whatnot, to see where everything goes...

**Johnny Boursiquot:** Well, speaking of corporate benefactors that might come to Go's rescue... There's a story about Microsoft on here, isn't there?

**Kris Brandow:** Yes. Very good segue, Johnny. So we have a nice little blog post from Microsoft about the fact that they have started a Go blog... Although they've kind of snuck in here as well that they basically have their own fork of Go they use internally, and that they're contributing things upstream... Which is super-interesting. I think it's not common, but it's not necessarily uncommon for companies to have their own internal forks of things that they use to do little tweaks, and whatnot... But I think the whole "We're gonna upstream as much of the changes as we can", is a very interesting philosophy for them to have. Yeah, what are your guys' thoughts?

**Ian Lopshire:** Well, I mean, first, it's not just an internal fork now. I mean, it's public. You can use it if you want.

**Johnny Boursiquot:** Does it do goroutines differently? Does it like shell out to C\#, or something? \[laughs\]

**Ian Lopshire:** No, if you actually go through and read what it is... I mean, it's basically just crypto changes to comply with like government standards.

**Kris Brandow:** Like FIPS, the FIPS standard, and stuff?

**Ian Lopshire:** I have no idea what FIPS is, but... FIPS 140-2.

**Johnny Boursiquot:** You're not familiar with FIPS 140-2?

**Ian Lopshire:** I'm not, no...

**Johnny Boursiquot:** Nobody is, man... \[laughs\] Unless this is your bread and butter, your daily work, I don't think anybody even pays attention to these things unless they have to.

**Ian Lopshire:** I think it's like government contracts.

**Kris Brandow:** Yeah. It's the Federal Information Processing Standards.

**Johnny Boursiquot:** Yeah, I guess if you're an engineer working with the government, these things are going to be very familiar to.

**Kris Brandow:** Yeah. It's for the non-military government agencies and contractors.

**Johnny Boursiquot:** So I assume government agencies and military contractors do something different.

**Kris Brandow:** Well, yeah. The military agencies and military contractors...

**Johnny Boursiquot:** Undisclosed.

**Kris Brandow:** ...use something probably a bit more advanced, more secure. I don't know.

**Johnny Boursiquot:** Yeah, more kept close to the vest. You don't want to reveal that information to the enemy. Yeah, yeah.

**Kris Brandow:** Classified.

**Johnny Boursiquot:** Yeah. So let's get back to the news. \[laughs\]

**Kris Brandow:** But yeah, so I think this is interesting, of Microsoft taking an even stronger stance of investing in Go. I feel like that's part of their whole trajectory of trying to become a big open source company again, like when they bought GitHub, and all this other stuff... And I think - didn't GitHub have a lot of investment in Go, too? So I think they probably got a ton of Go investment from that. Yeah, I mean, I think this is interesting. More versions of Go also sounds nice. We've got the two big ones, I guess, and --

**Johnny Boursiquot:** Is that an unpopular opinion? Did we already jump to that bit? More versions of Go?

**Kris Brandow:** Sorry, not versions... More implementations of Go.

**Johnny Boursiquot:** Why do you want more implementations of Go? You don't like the one you have?

**Kris Brandow:** \[laughs\] I like the one that we have, but we already have three... Two at least... Well, I guess three. Depending on how you count. We have the GC compiler, which is the main Go compiler, you have GCC Go, you have TinyGo... And there's a few others. Is there one that works with the GNU compiler system? GCC Go. And there's llgo. That's the other one I was thinking of. Yeah. There's a lot of different versions -- not versions. There's a lot of different implementations of Go, which is how they the designers meant it to be. So adding another one in there seems like a fine thing to do.

**Johnny Boursiquot:** \[00:19:58.01\] Okay. Alright. I'll give it a pass.

**Kris Brandow:** I mean, you can disagree, Johnny, if you want to disagree...

**Johnny Boursiquot:** No, no, no, no, I'll allow it... \[laughter\]

**Ian Lopshire:** I'd like to know who is using these other implementations.

**Kris Brandow:** I know depending on what architecture you're targeting - some people use like either GCC Go, or like the LLVM Go, like llgo, if there's a backend for those compilers that the standard Go compiler doesn't have. For a while, I think there wasn't support for the Z architecture, IBM's mainframe architecture; it wasn't officially supported within the Go compiler, but it was supported within LLVM's backend, so people were using llgo for that... Or if you want just compatibility with other languages, and a nicer way, you can use those alternative compilers. And then obviously, for things like TinyGo, it's like, well, if you want to run Go on a microprocessor, you want something that is not going to give you like a 80-megabyte binary. \[laughs\]

**Ian Lopshire:** Yeah. So what do we think this means for Go? In their announcement post they say they're going to be posting about running Go workloads on Azure. I think we're gonna see more compatibility there. I don't use Azure, so I don't even know how it works with Go... But I know AWS has some nice build-in. You run Go on Lambda, right?

**Kris Brandow:** Yeah, I assume that more of their products are going to support Go natively... I imagine they already have quite a bit of Go -- I mean, because I feel like anything that has like Kubernetes integration, like if you're doing all of that work, you're probably doing a lot of that work in Go, so you probably already have substantial Go expertise within your cloud infrastructure teams.

So many CNCF things are written -- I mean, so many cloud things are written in Go that I don't think you can have a cloud company that doesn't at least have a pretty strong familiarity with Go.

**Johnny Boursiquot:** If you do anything in the cloud, whether or not you interact with it directly, you probably have Go somewhere in your stack. I think that's fairly certain at this point.

**Kris Brandow:** Yeah. I mean, all three of the big cloud providers have Kubernetes systems, product offerings, so... That right there is great. Yeah, I mean, it's exciting to see other companies doing investment. Also, I think that helps kind of with what we were talking about before, where there's just less of a risk of like one company being able to do something that might deal a critical blow to Go... Because now if Microsoft over the course of the next few years really establish themselves as a big contributor to Go, then if there ever is a risk of Google saying "We don't want to do this anymore", there's an obvious successor, there's an obvious company to pick the language up and keep going with it.

**Johnny Boursiquot:** Yeah, yeah, I think this is a good thing overall. I think I was joking earlier that all of a sudden having a job at Microsoft in the Go engineering group all of a sudden doesn't seem like a bad thought. They need somebody to evangelize this stuff internally, right? \[laughs\]

**Kris Brandow:** I mean, it's not the Microsoft of the old times, of when Johnny first started programming, in an ancient time.

**Johnny Boursiquot:** You know, it's a different world, my friend. I mean, it's a different world. It's not when I used to install Windows with disquettes on machines...

**Kris Brandow:** Those Windows floppy disks...

**Johnny Boursiquot:** It's not those times... \[laughter\] Those floppies no longer --

**Ian Lopshire:** How long ago was that?

**Johnny Boursiquot:** Don't ask, don't ask... Please... \[laughs\]

**Ian Lopshire:** I can't imagine Windows on a floppy. Is it like 30 of them?

**Kris Brandow:** It was a decent number, yeah.

**Johnny Boursiquot:** Yeah, just about. Yeah.

**Kris Brandow:** It was annoying to install...

**Ian Lopshire:** Here is Windows, four megabytes at a time.

**Johnny Boursiquot:** Yeah. Now insert disk 17. \[laughs\] You just hit the Load button, pop out the 16th one...

**Ian Lopshire:** Is that what a floppy was, 4.3 megabytes? Is that right?

**Johnny Boursiquot:** Oh, they varied in size over time. It depends on when you entered into this game. You could have entered at the -- was it 5,5, or 5,25?

**Kris Brandow:** 5,25, and 3,5...

**Johnny Boursiquot:** \[00:24:07.17\] And then we sized it down to the 3.5 \[unintelligible 00:24:10.07\] or something... But in between there we went through all kinds of various kinds of mediums, and zip drives, and this and that... I mean, the kids these days, they have no idea how good they have it.

**Ian Lopshire:** A ZIP drive was legit a tape, right?

**Kris Brandow:** No, ZIP was still like \[unintelligible 00:24:29.07\]

**Ian Lopshire:** Oh, was it?

**Kris Brandow:** Yeah... It was just a fancy one. Because I grew up in the era of ZIP drives and floppies. When I was in high school, we had to save all of our Word documents onto floppy disks, for classes, or whatever. I don't wanna remember that era of life. And then thumb drives came along, and that just changed everything.

**Johnny Boursiquot:** That did change everything. I remember when a 5-meg thumb drive was like 50, or something.

**Kris Brandow:** 80 dollars.

**Johnny Boursiquot:** Yeah, it was something ridiculous. But at the time, it was like "Wow, five megabytes?! Do you know how much you can store on that? That's like 12 Wolfensteins", or something. It was crazy. \[laughter\]

**Ian Lopshire:** Wolfensteins...

**Kris Brandow:** Wow, five megabytes - that's like a 10th of an image coming out of a camera. \[laughter\] But yes, back to Microsoft being redeemed, and... \[laughter\]

**Johnny Boursiquot:** Those tangets, you know? Those fun, entertaining tangents...

**Kris Brandow:** This is from the late '90s of Microsoft. But it's nice seeing that... Because a few years ago, when Microsoft was like "Yes, we're going to try and become a better open source contributor. We're going to basically atone for our sins from the past", I think everybody was kind of like "Oh, we're not really sure..." And then there was the problems and issues of like when they bought GitHub, and everybody was like "Uh-oh... Is GitHub gonna look a little weird? Are we gonna have Clippy on GitHub?" And I think they did a pretty good job with that. So seeing them kind of continue all of that is a really nice thing.

**Ian Lopshire:** Yeah, it does feel like just a continued path for them. I mean, they did .NET Core, they did the GitHub acquisition, they had Linux Subsystem for Windows... So I'm excited to see them get on the Go train now.

**Kris Brandow:** Yeah. That part is nice. You're seeing this gradual progression of what they're doing and how they're doing it. It's like, okay, nice; you aren't pulling the rug out from under us.

**Ian Lopshire:** I think GitHub got better after Microsoft, too. Like, unlimited free private repos... I enjoyed that.

**Kris Brandow:** It got cheaper, for sure... I remember being like "$4 a month for all this stuff? That's great."

**Break**: \[00:26:53.12\]

**Kris Brandow:** What's next, what's next? We are going to think -- I think we also wanna talk about... Oh, yes, this nice post from the Go blog about evolving the standard library with the first v2 package in the form of math/rand getting a new version. This one feels like it's a long time coming. I've always had my own dislikes of how math/rand has worked, and especially -- I get why they made it different from crypto/rand, so you couldn't like accidentally use \[unintelligible 00:32:37.29\] But it was still very annoying. You had to use like a completely different API if you wanted to have a pseudo random number generator instead of a cryptographically random one.

But yeah, I think this is like an interesting next step when it comes to all of the changes that we've been making, that have been made over the years, when it comes to really realizing that Go 2 vision. Even though Go 2 isn't a thing, it is just a set of features being added to Go to allow it to advance. It's nice to see that we're kind of coming to the full view of that, and seeing the standard library being able to incorporate newer things and these types of changes without breaking backward compatibility.

**Johnny Boursiquot:** It's the first v2 in the standard library. After all these years, we went from theoretical, to practical in the standard library itself, with regards to Go module package versioning.

**Kris Brandow:** So what are your thoughts, Ian? Do you have any thoughts?

**Ian Lopshire:** I think the article makes some really interesting points, kind of about the drift between the version one and version two, which we don't want to happen, right? So it goes on to say any v2 package will be able to completely do what a v1 package does at the time of release. So it's not going to be like a v2 package that \[unintelligible 00:34:01.18\] part of another package, which I think is good. And it also goes on to say that the plan is to kind of make the v1 packages just a thin wrapper over v2 packages, so v1 packages can get bug updates and fixes from changes in the v2 packages... Which I think is great. I hope that works out.

**Kris Brandow:** \[00:34:22.22\] Oh, change the v1 package to be wrapped around the v2 -- okay, yeah.

**Ian Lopshire:** Yeah. So I mean, I think that's smart, and I hope it works. It doesn't seem like it's gonna work for everything, but...

**Johnny Boursiquot:** It worked for -- well, what did it work for? I'm trying to think of a package where that actually... No, I'm thinking of something else. I'm thinking of when context was formally introduced. It basically went from experimental to being part of a standard library. Back in the day you used to use an HTTP package to do new requests, right? http.NewRequest. When the context package was formalized, new with requests was introduced, but the existing new requests was simply change to under the hood create a context for you. That way every request would have a context by default. So things like that, where changes are introduced to the language, and under the hood you're gonna have to go change your code. I think that's a great way to do that. But like you said, Ian, there are some APIs that are going to be so different that you can't really -- maybe some values got added, you need to now invoke with more arguments... Some things have changed, maybe some value, a particular data type is no longer required, or it's not required... I mean, there's gonna be some situations where it just can't work. And I think you're gonna see basically what happened with the math/rand package here. You're gonna see a v2 sort of being introduced for that new capability.

And thankfully - I mean, I do like this approach, fundamentally. This is doing exactly what the Go compatibility promise sort of promised, basically. Not breaking any existing code out there. When the API changes, or when there's something fundamentally different about how a particular behavior works, we rely on a v2. And I think it's not going to be just the job of the standard library to do that, right? Things like linters are gonna kind of have an impact on this.

Even right now I tried to get a random number generator initialized earlier this week, and I'm not sure which one of my linters - I have like a dozen at this point... And I'm not sure which one caught it, but it told me like "Hey, you no longer need to do the whole dance with the seeding of the time, you don't need to do that. Just use the math rand package, as you normally would." So it was nice. I was like "Oh, yeah, that's right. This was introduced back in March." I'm so used to do it in this particular way, I didn't even realize I was doing it the old way, or I didn't even realize you could do it the new and better way. So my linter, my editor, my development environment sort of helped me move along and catch up with the future kind of thing with current state. So I think it's gonna be the job of basically the entire ecosystem to move everybody towards the new thing when there's a new thing.

**Ian Lopshire:** Yeah, I think that that brings up one of the great strengths of like the semantic import versioning... v1 and v2 can just exist in the same codebase, and you can gradually move. So like you said, you can use that v2 now, without changing everything.

**Kris Brandow:** Yeah. I also think the fact they added the functionality that in the go.mod file there's like the version of Go you're compiling with, which I think allows them to fix a lot of things that might have been attempted to be fixed with like a v2 package in the past, or like a v2 of the language in the past. I think the shadowing stuff that they just got rid of, I think it was one of those things where it's like "Oh, well, it would have been very difficult to fix this before." But now that you can be like "Oh, okay, you're compiling for this older version of the language, so we're going to keep those semantics the same." Or "Oh, you're in this newer version of language. Now the semantics are different."

\[00:37:54.06\] Or like the ability to just used a number in a range, which I've wanted forever... \[laughter\] Like, just being able to do that kind of stuff, and be able to detect based on like "Oh yeah, you're on this version of the compiler, so we know that we have these features, we have this functionality" I think helps make sure that we don't rush to v2 packages when we don't need them, and that we actually go to the v2 when we actually have a pressing need to do something at a higher level that's different, like something semantically different, instead of just some "I don't like this index", or "I don't like this particular thing."

**Ian Lopshire:** Are y'all excited for any v2 packages?

**Johnny Boursiquot:** I don't think anybody's excited about any v2 packages... It's just, that's the system we've got, so...

**Kris Brandow:** Yeah, I don't like semantic import versioning...

**Johnny Boursiquot:** ...love the one you're with. \[laughs\]

**Kris Brandow:** I think semantic import versioning is still kind of garbage, but I mean... If it's what we've got, it's what we've got.

**Ian Lopshire:** I like it now. Like --

**Kris Brandow:** I mean, I haven't used many, because I think so many people just pinned at like version zero or version one to avoid the problem... But when there were the modules that were on version five, and they had a whole bunch of packages, trying to get the right package to get imported using go imports was a pain for a long time. I don't know if that's been fixed. But that was definitely my biggest headache; writing code became much more annoying with semantic import versioning, because it applied to individual packages, and not to the module as a whole... Which I think is a fine way to do it, but there's still all those problems. But I think it probably works pretty fine for the standard library, because there's not going to be as many -- it's going to be a long time before we have like a v5 of a package. And I think there's going to be a lot of very careful things that are done to make sure that when you import something, you get the correct version of it.

**Ian Lopshire:** I'd be surprised if we ever got to a v3... Because they're not v2-ing packages unless \[unintelligible 00:39:50.25\]

**Johnny Boursiquot:** Listen, you live long enough -- Ian, you live long enough, and funny things happen. Like, we no longer have ZIP drives, right? \[laughter\] So don't dismiss it. It's fine. Just give it time. Stick around.

**Ian Lopshire:** Alright, let's put a bet on it, and I'll talk to you in 10 years and we'll see who's right.

**Johnny Boursiquot:** \[laughs\] We'll have an inaugural -- no, no... What do you call them? The one thousandth episode, or something... And then we'll be invited back as old timers to come talk about "Back in my day we had v2... That was the most you could expect."

**Kris Brandow:** Yeah. I mean, I think it's interesting because the only reason you really need a v2 is if you want to reuse a name... Because otherwise you just make a new package with a new name, right? If it's like "Oh, this is the more advanced one", it's like "Okay, here's the new name." Kind of like what they did with the FS package, where they were just like "Okay, well, we're just gonna make a new package, and a new name for this new thing." It's not like the OS v2 package, or something like that.

**Johnny Boursiquot:** Or you can do what some projects did... They pretty much said "Listen... Just assume that when you do a go get the next time, even though the package path is going to be the same, you're getting the v2." \[laughter\] "If you want the v1 of anything, you'd better pin to a commit hash, bro..."

**Kris Brandow:** Oh god, the bad ol' days...

**Ian Lopshire:** I did just add a package to something I was working on, and I think it was like version 44... And I was so confused. I wish I could remember what it was...

**Kris Brandow:** I mean, I guess some people just were like "Oh, semantic import versioning. We're just gonna go hog wild."

**Ian Lopshire:** \[unintelligible 00:41:29.02\]

**Kris Brandow:** I think it's an interesting challenge of our industry... You know I have my gripes with semantic import versioning and how a bunch of this stuff works... This does feel like one of the better ways this has been done in the industry. We've basically successfully managed to move Go into Go 2. Like, "This is Go version 2", without actually having any breaking changes... Which I think is kind of incredible, because we didn't have to run into like the thing that happened with Python, or happened with so many other languages, where it's just like "Oh God, we have these few years of awfulness, because we had to make all of these changes at once, and now everybody's mad at us, and everybody stuck on the old thing for an extra decade, and we don't know what to do..."

\[00:42:21.29\] But with Go, it's just kind of like -- it's like, you're stuck on the old thing for not that long, because you can just move forward. And I think that's also partly because of Go's history with like the Gofix tool, and a whole bunch of other stuff that's like "Okay, well, we'll just rewrite your code for you, to help you upgrade some of \[unintelligible 00:42:37.10\]

**Johnny Boursiquot:** Thank goodness we didn't take a page from the JavaScript community and just start creating polyfills everywhere, and transpilers, and this and that... Yeah, the JavaScript community is a --

**Johnny Boursiquot:** Be nice, be nice, be nice...

**Kris Brandow:** ...it's an interesting approach they've taken, which - it feels like they don't have a lot in their standard library, so they have like a crapload of packages, and then their packages all depend on other packages... But it seems to work. It's not like they're all -- like, JavaScript hasn't had the same kind of breaking change problem that Python had, for example, and they've advanced that language considerably over time. So I think it's another approach to solve the same sort of problem... But I think the approach that Go took only works if you have some centralized control of the language. If you have the Go team that is making all of these decisions. I think if you have a much more representative democracy style way of doing things, that's going to be a lot harder to do, to actually make sure that you're charting the right path at the end of the day... So I think what JavaScript did is probably what would have been possible with the type of community that they are. And it works, so...

**Johnny Boursiquot:** And to be fair, you have people who mean well, that want to advance the language and the community forward, but you have a lot of incumbents who - basically, their money is made with the status quo. It's the same problem across any and everything. Whenever you need to make a change to something, change is disruptive. Somebody has built an entire business, be it browser makers, or plugin vendors, and this and that. People don't want change, because whenever you change these things and the underlying technology, that means now they have to put in more costs to also adapt and change their wares... And that means they are making less money. The tyranny of shareholders, you know what I mean? You can't keep increasing your costs and not be giving money to shareholders.

This reminds me of an interesting lesson I had to learn in sort of the early days of my career, where I figured out that technical decisions were rarely purely technical decisions. I'd present a really well argued, well structured reasoning, logical sort of proposals for changing from this framework to that framework, this language to that language, or this architectural style to that one, and blah, blah, with a clear path to migration... You know, not blow things up, but just incremental changes... A release schedule, roadmap... I'd do all this work, and then they'd be like "Oh yeah, we'll take it from here." And then the decision is made in some room somewhere, where I'm not at the table in, and I'm realizing "What?! You're going with this approach? But this makes no sense. Technically, it is a poor, bad decision. You don't know what the heck you're doing." Literally, I would be getting mad about this stuff, and then I realized one day "Crap, it's not about the technical decision all the time." Right? There are other factors that I'm not privy to, that go into these decisions. So yeah, it's the same thing with -- even in the open source community there's going to be incumbents who don't want things to change that much, because they have a lot of stake.

**Kris Brandow:** \[00:46:05.09\] Yeah. And I think that's why forking is a good thing. I remember back when my last couple of -- I think maybe last year or so of actively doing Drupal development there was this big push for the new version of Drupal; it was gonna be Drupal 8, and it was gonna change everything... And there were a whole bunch of people that were like "We kind of like how Drupal 7 worked, and the historical way Drupal worked... So we're just gonna go fork it and make this other thing." And it seems like both things are thriving. So it's like "Okay, well, if you want the old thing, then go over here, use this backdrop thing; if you want the new thing, then go use the new Drupal stuff."

**Johnny Boursiquot:** Wait, hang on a second... I've gotta go fork Redis. \[laughter\] Speaking of which, don't we have another Redis clone or something on our list of news?

**Kris Brandow:** Yes, yes, we do.

**Johnny Boursiquot:** Of course we do.

**Kris Brandow:** Any last comments about the math/rand v2 package, or the evolution of Go?

**Ian Lopshire:** This is just a thought... I would love to see Go written that first year, compared to it now. Has it changed that much?

**Johnny Boursiquot:** Go look at the commit history.

**Kris Brandow:** You mean like someone writing Go in like --

**Ian Lopshire:** With an HTTP server \[unintelligible 00:47:19.22\] How old is Go? I don't know... At v0, versus--

**Kris Brandow:** Oh, from 2009?

**Ian Lopshire:** 2009 to now. It's definitely changed, but not that much. If you ask Mat Ryer, he can probably tell you, because he's been writing "How I still write Go after 20 years", or something...

**Ian Lopshire:** 13 years he said, yeah.

**Johnny Boursiquot:** 30, yeah.

**Kris Brandow:** After 20 years, Johnny, the languages isn't 20 years old.

**Johnny Boursiquot:** \[laughs\] I'm using recruiter math, sorry. So after 32 years of writing Go... \[laughter\] I still handle my routes, or something, right?

**Kris Brandow:** I feel like there'd probably be a bigger delta difference between the initial open source version of Go and the v1 of Go, like a 1.0, than it would be between Go 1.0 and now. I feel like that change would probably be very subtle. Like, okay, we have context now. We have a few of these other things. But the change in those first few years is probably much more of like "Oh, this --" Well, I mean a) it probably doesn't even compile with a modern compiler... Whereas something written with Go 1.0 should technically still compile. So yeah... But that would be interesting to do. Someone should go out there and write a blog post about that.

On to more forks. Redis. So we have a little Redis reimplemented in Go, with SQLite backing it.

**Johnny Boursiquot:** Are you calling that SQLite? Wait, hang on, hang on. I think we're about to have another debate here...

**Kris Brandow:** I flip-flop between --

**Johnny Boursiquot:** Do you call it GIF or GIF?

**Kris Brandow:** I go between SQLite and SQLite... But if we're ever going to be --

**Johnny Boursiquot:** Pick a side, bro. Pick a side.

**Kris Brandow:** ...very pedantic, it would be SQLite, because the language is called SQL.

**Johnny Boursiquot:** And you call it SQL? Like, whenever you refer to SQL.

**Kris Brandow:** Yes, I call it SQL the vast majority of times. Sometimes I will call it SQL. Most of the time I call it SQL.

**Ian Lopshire:** The only thing worse than SQL is when people call it squeal, or --

**Johnny Boursiquot:** Squeal... \[laughs\]

**Ian Lopshire:** I've heard people do that, and it's --

**Kris Brandow:** Squeal Lite! But no, there's history there, of like it's called SQL because there was another basically competing language that was trademarked called Sequel, so they couldn't call it SQL. So they had to call it SQL.

**Johnny Boursiquot:** But if you know, you know. \[unintelligible 00:49:47.05\]

**Kris Brandow:** Well, that's like calling tissues Kleenex; it's like, okay, yes, it's technically a tissue... \[unintelligible 00:49:54.12\]

**Johnny Boursiquot:** Yeah, we've been having these debates for time immemorial. Just the same way we're like "No, bro, serverless doesn't mean no servers." We have these conversations all the time. But eventually you're just like "You know what, let me just stop fighting the marketing people, and just go with it." \[laughs\]

**Kris Brandow:** \[00:50:17.01\] I think the hard part is English isn't a phonetic language. You can't look at a word and know how it's supposed to be pronounced... So that's half the battle.

**Johnny Boursiquot:** Well, some hills I'm not willing to die on. I don't have time.

**Kris Brandow:** How do you pronounce it? How do you pronounce the image format? Is it GIF or is it GIF?

**Johnny Boursiquot:** Okay, do you refer to the individual known as God - do you refer to him as Geod?

**Kris Brandow:** \[laughs\] That's not how pronunciation works, Johnny. G can make a ge or a ga sound.

**Johnny Boursiquot:** Yes, yes... I have a friend named George. I don't call him Gorge, although that's kind of funny... \[laughter\]

**Ian Lopshire:** I kind of like that one.

**Kris Brandow:** Yeah, I guess it's the difference between do you see it as like G I F as a word, so you have a GI - which would be a ga - or do you see it as a gr word, which would be like a ga. A gea or a ga? I don't know, it doesn't matter. It truly does not matter. It's like one of the dumbest debates.

**Johnny Boursiquot:** You know what is not a dumb debate though? Tabs of spaces. Choose carefully.

**Kris Brandow:** The tabs, because we're writing Go. What do you mean?

**Johnny Boursiquot:** Alright. Yeah, we're still friends. \[laughter\]

**Kris Brandow:** Like, you literally can't use spaces. I don't know...

**Johnny Boursiquot:** Although you could configure your editor every time you hit the Tab key to add four spaces... \[laughs\]

**Kris Brandow:** And the go fmt will just turn it back into tabs.

**Johnny Boursiquot:** \[laughs\] Those people must hate go fmt. They're probably not doing Go anyway.

**Kris Brandow:** I mean, if you're a diehard spaces person, then... Anyway, weren't we supposed to be talking about Redis?

**Johnny Boursiquot:** Yeah, we are.

**Kris Brandow:** We got so off track... So I don't know, what are your thoughts about all of these new forks and things of Redis? Or this one in particular, of...

**Johnny Boursiquot:** Redka.

**Kris Brandow:** Redka.

**Johnny Boursiquot:** The good parts... So you're already opinionated. The good parts of Redis with SQLite.

**Kris Brandow:** As opposed to the bad parts.

**Johnny Boursiquot:** You know where all that comes from, right? Remember that book, "JavaScript, the good parts"? And then ever since then, people started coming up with the good parts. It's like, "Johnny, the good parts." Like, what? What do you mean?

**Ian Lopshire:** There's also "The hard way."

**Johnny Boursiquot:** "The hard way", right.

**Kris Brandow:** But I feel like the Good Parts with JavaScript also was contrasted with "JavaScript, the Definitive Guide." The Definitive Guide's like 1000 pages long, and The Good Parts is like 150.

**Johnny Boursiquot:** Right. Yeah, exactly. It's such a nice contrast. You kind of have to be in the publishing business to kind of get the inside joke there.

**Kris Brandow:** Yeah.

**Johnny Boursiquot:** I would imagine. In any case, Redka. How do you feel about it?

**Ian Lopshire:** I'm interested in all these new things popping up using SQLite... I know SQLite has always been well used, right? It's popular. But I feel like in the last year I hear about SQLite more and more and more.

**Johnny Boursiquot:** It took off. You know, I will agree... And for me personally, you know what sort of started making it even more relevant in my life? It's --

**Kris Brandow:** Oh, Ben Johnson?

**Johnny Boursiquot:** Ben Johnson, exactly. He created BoltDB, which for a long time I use constantly... Yeah, he's very knowledgeable in databases, and writing database servers, and everything else. And he had this project, I think it's called Litestream, where basically if your use case is right, you can literally put SQLite into production, and actually have a reliable system that has continuous streaming backups, and you don't lose your stuff... He kind of opened my eyes to the possibilities of actually treating SQLite not just as a toy database, or something I use locally when I'm developing, or something I use in sort of low-power devices, or whatever it is, but actually using it instead of relying on sort of the go-to's: the Postgres, the MySQL, and so on and so forth.

\[00:54:15.16\] So I agree, SQLite is very capable for certain use cases. The primary thing for me has always been sort of the lock issue with writes, that we can only have one write at a time... So that creates a problem. In some cases you kind of have to be clever with how you get around that. Maybe you just have one writer, with a ton of readers... But you have to kind of approach your design architecture a little differently than some extra thinking you have to do around the design of your software when you're not using a full-blown database like Postgres or MySQL or something like that.

**Kris Brandow:** I suppose... Although when you're using SQLite you're operating at like many orders of magnitude faster than like a Postgres or a MySQL... Because it's just like, you don't have a network. You're just kind of there, \[unintelligible 00:55:03.01\] So it's a lot faster in general, I think... But I also think like the -- you do have to structure things differently, but I think there's also like the macro structuring of your application differently if you want to put SQLite at the center of what you're doing.

**Ian Lopshire:** I've seen articles where it's people that are literally using one SQLite database per user.

**Johnny Boursiquot:** Yeah, things like that... The moment you start thinking about the problem a little differently... It's just a file on disk. Why not just give each user a file, that when they log in, they have their own database. Like, it's a little trippy. If you're used to just like the good old style of well-trodden path of framework servers connecting to databases, RDS databases, relational databases, that you need to have connection pools, and this and that... I mean, it's very trippy, but the more you think about it - like, why not? Why can't I give every user its own database?

**Kris Brandow:** I mean, SQLite is also interesting because it's one of those actually very stable, very solid file types, basically. The Library of Congress has listed it as one of their acceptable file types for data that needs to last like centuries. I think it's the only binary ones. I think the other ones are like text, or like CSV and JSON. But SQLite is right there next to it, and that's like a full-fledged system you've got right there. I'd actually advocate a lot of SQLite used as like an application storage format, which is I think why it probably is the most popular and most used database in the world.

**Ian Lopshire:** I think a lot of the Apple apps ship with a built-in SQLite database, right?

**Kris Brandow:** Yeah. And every browser does as well.

**Johnny Boursiquot:** Yeah, I think everything ships with SQLite in it.

**Kris Brandow:** If you look at something, you're like "Oh, I'm using this application. Where is it storing its data?" Probably in an SQLite database. It's probably there.

**Johnny Boursiquot:** Probably SQLite, yeah.

**Ian Lopshire:** I do think it's a good fit for Redis as well, because Redis is already single-threaded. It's a queue of requests. So that whole write lock doesn't seem as much of an issue.

**Kris Brandow:** Yeah, I mean, it does fit that kind of use case really well. Even if you want to do like a distributed Redis sort of thing, I think there's a -- someone has done it a couple times, where they put like Raft on top of Redis... I think it's called RQLite, or something like that... And kind of distributed -- you could do the same type of thing with Redis, where you put Redis, and then Raft behind it on top of SQLite, and you can basically do the same thing.

**Ian Lopshire:** It is also nice that it comes shipped with its own Go client... I don't think you even have to use the wire protocol if you're running on the same --

**Johnny Boursiquot:** That is cool. Now, this thing has me interested in reevaluating SQLite in some of my life choices.

**Ian Lopshire:** Dropped this a star while we're talking about it...

**Johnny Boursiquot:** Yeah, yeah, for sure. It's like a month old, so... \[laughs\] I mean, don't go deploy anything critical in production with it.

The first commit was a month ago, so careful out there, people. I feel like SQLite also was having kind of a resurgence in Go specifically, because there was -- I don't remember his name, but there's a guy that's been basically working on trying to make it so you would have SQLite in pure Go, so you don't have to use cgo... And I think that actually just went 1.0 recently, or got to some very stable point, so you can start using it more, and it literally is a drop-in replacement for SQLite, which means that if you want to use SQLite but in Go, you don't have to use cgo, which I think is a huge advantage, and really opens the opportunities.

\[00:58:36.01\] I mean SQLite was pretty easy to embed into Go in the first place, because it's packaged and shipped as a single C file, with no dependencies... So as far as things that you integrate into Go from C land, it's pretty easy to do... But just having it so you can like still do cross-compiling and all of that easily is like a huge advantage.

**Johnny Boursiquot:** We should do an episode on licensing, because I'm still -- when I see licenses... Like, the only thing I know is MIT good, everything else suspect. Right? \[laughter\] If I see like BSD 3-Clause, blah, blah, blah... Now I need to go do research to see if I can go get this thing.

**Kris Brandow:** I mean, BSD and MIT are the two \[unintelligible 00:59:14.27\] Those are basically the attitude of those licenses.

**Johnny Boursiquot:** Yeah, I think we should do an episode on licenses.

**Kris Brandow:** Yeah. We could probably get a Luis Villa back, because he's a lawyer. We talked to him out other IP-based stuff. It'd be an interesting thing to talk about licenses with him.

**Ian Lopshire:** If he's on an episode, you'll want to listen. Those are the best episodes we've ever made, in my opinion. I mean, I think you said that in episode 300, so... In the "This is Sparta" episode that Johnny likes so much, even though it's a 20-year-old movie... \[laughter\]

**Johnny Boursiquot:** So what else? Are we all newsed up, or...?

**Kris Brandow:** I mean, I think there's a couple other news things we can talk about if we'd like to talk about them... Or we could do

a nice quick round of unpopular opinions. Let's do unpop. I've got places to be. \[laughter\]

**Kris Brandow:** So, with that, on to unpopular opinions.

**Jingle**: \[01:00:13.05\]

**Kris Brandow:** Alright, Johnny, you have an unpopular opinion.

**Johnny Boursiquot:** Fork Redis... If you haven't already.

**Kris Brandow:** That seems to be like peak popular opinion, sir...

**Johnny Boursiquot:** \[laughs\] Oh, man... I'm having too much fun with myself.

**Kris Brandow:** Okay...

**Johnny Boursiquot:** Yeah, that was it.

**Kris Brandow:** Okay, fork Redis. Unpopular opinion. Okay. Ian --

**Johnny Boursiquot:** If you haven't already, yeah.

**Ian Lopshire:** I don't think "Fork Redis" is an opinion. "You should fork Redis." That's an opinion. \[laughter\]

**Kris Brandow:** I mean, Ian, you fit in right well with us being that pedantic about things. Okay...

**Ian Lopshire:** I actually do have an unpopular opinion.

**Kris Brandow:** Okay, go for it.

**Ian Lopshire:** So I always thought the fancy office chairs were silly. Like the Herman Millers, and the expensive office chairs... And I've been using a chair designed to be at a dining room table for like two and a half years.

**Kris Brandow:** That sounds awful for your back, but continue.

**Johnny Boursiquot:** Ian, baby, what is you doing...?!

**Ian Lopshire:** Well, my back kind of hurts. Maybe I should look at a new chair.

**Johnny Boursiquot:** \[laughs\] Do you think...?

**Ian Lopshire:** So I finally bought an office chair, the Herman Miller Embody, and it is life-changing. Everyone should do this right now. My back doesn't hurt... I should have done this ten and a half years ago. So my opinion is that expensive chairs are not overrated. \[laughter\]

**Johnny Boursiquot:** \[01:02:08.25\] That's like when you go from Notepad, and you start coding in an actual editor. For the longest time you're like "What are those fools, like with their fancy syntax highlighting? Error notifications... What is this fancy stuff? I like Notepad, it works just fine."

**Kris Brandow:** Like, "A thousand dollar desk chair? I'd rather have to pay for back surgery instead."

**Johnny Boursiquot:** Oh, man...

**Ian Lopshire:** Well, I got it cheap though, so no worries there...

**Johnny Boursiquot:** Ian, my man, my man... Wow. Wow. Okay.

**Ian Lopshire:** I thought I was just getting old. It turns out it was sitting in a bad chair for ten hours a day.

**Johnny Boursiquot:** You've just been using the Notepad of chairs for 10 years. \[laughs\]

**Kris Brandow:** The Notepad of chairs... I mean, when you first jump into like an IDE or like a good editor - yeah, it's like "Oh, okay..." I mean, at least upgrade to Notepad Plus Plus. Like, how are you gonna be in Notepad?

**Johnny Boursiquot:** Well, no, it's only available in Windows, right? Notepad Plus Plus? I know that because I used it for a couple of, dare I say, years. It was the ish back then.

**Kris Brandow:** Notepad Plus Plus?

**Johnny Boursiquot:** Yeah, because it supported -- yeah, it was the ish, because I could have different lang syntax files in there, and things... It was great.

**Ian Lopshire:** I was a Sublime Text guy for a long time.

**Johnny Boursiquot:** Eventually, we all -- I mean, weren't we all? This was like the granddaddy of new new age editors...

**Kris Brandow:** I never used Sublime. But that's because I went from awful Eclipse-based IDEs into Vim, and then I was just like "Okay, I'm gonna live here forever."

**Johnny Boursiquot:** Oh, you went extremes. You went from Eclipse, heavyweight, to just text in Vim,

**Kris Brandow:** Yeah, it was one of the Eclipse spinoffs for PHP, and then I was like "This thing takes forever to start up, so I'm using -- not like BBEdit, but one of the... Oh, TextWrangler. I was using TextWrangler for some things, and then... I was just like "I just need to learn one of these better editors. I'm in servers all the time..." So I was like "Do I pick Vim? Do I pick Emacs?" \[unintelligible 01:04:13.08\] and it was like "Okay, they're probably the same." And then it was like "Oh, well, Vim is quite default on every system, so I'm just gonna learn Vim."

**Ian Lopshire:** But can you close it?

**Johnny Boursiquot:** Can you exit out of it? Kris probably has the same session he opened 20 years ago... \[laughs\] Still can't figure out how to exit...

**Kris Brandow:** Like, "How do I get out of here? Colon what? :q, but I have a modified buffer. What do I do...?!"

**Johnny Boursiquot:** \[laughs\] Oh, man...

**Ian Lopshire:** I do remember trying to do an interactive rebase for the very first time, and literally just deleting that branch. \[laughter\] \[unintelligible 01:04:55.06\]

**Kris Brandow:** I mean, it's not that hard to get out of Vim.

**Ian Lopshire:** It is if you don't know you're in Vim... \[laughter\]

**Johnny Boursiquot:** Oh, man... Y'all came with jokes today.

**Kris Brandow:** I mean, I've got the Vim posters. Gotta represent.

**Johnny Boursiquot:** That's how you know. That's how you know \[unintelligible 01:05:29.26\] epic shortcut for exiting on there?

**Kris Brandow:** Um, no.

**Johnny Boursiquot:** ...on your poster... \[laughs\]

**Kris Brandow:** For anybody that's listening, it's :q. If you want to save an exit, don't be a fool and use an extra keystroke by doing :wq. Just do :x. It's more efficient.

**Ian Lopshire:** I didn't know that. I still use :wq.

**Kris Brandow:** Yeah. :x does the same thing :wq does.

**Ian Lopshire:** Kris, do you have an unpopular opinion?

**Kris Brandow:** \[01:05:58.29\] Vim is the best text editor in the world... What did I say? Yeah, no. \[laughs\] No, let's see... Unpopular opinions. Do I have one? I mean, "Do I have one I want to say out loud?" is the real question. I probably said this one before, but speaking of editors, go learn Vim or Emacs. Go learn a nice text -- like, a terminal-based editor. And at least try it out for a while, because I think your productivity kind of... It soars in a way that I don't know does if you use IDEs. Now, I've got nothing against IDEs. I mean, everybody \[unintelligible 01:06:29.06\] But those terminal --

**Johnny Boursiquot:** I have to disagree with your list there. Emacs is not just an editor. It is a lifestyle.

**Kris Brandow:** I mean, so is Vim...

**Johnny Boursiquot:** So one does not just -- one does not "just" anything with Emacs. It's a way of life. So if you want to just try some editors, you don't just try Emacs. It's an investment. You have to ease yourself in and learn the way, preferably from a guru or a master; become a Padawan, find a Jedi Master to help you out.

**Kris Brandow:** If you used to play the piano, Emacs is for you.

**Johnny Boursiquot:** \[laughs\]

**Ian Lopshire:** Change your keyboard layout to Dvorak, and...

**Johnny Boursiquot:** \[laughs\]

**Ian Lopshire:** Is that how you say that, Dvorak? I have no idea.

**Kris Brandow:** I have no idea. But you know, Emacs - if you like Lisp as well, Emacs is very good for Lisp. No one likes \[unintelligible 01:07:22.02\] Thankfully, in Neovim we have Lua now... And Go. You can write plugins for Neovim in Go, which is really cool. I've been experimenting with that lately. But yeah, I would say my unpopular opinion is learn a terminal-based editor... It's not for everybody. It's not like with IntelliJ, or the kind of JetBrains IDEs, where you open the thing and you're good to go. You have to do some configuration, you have to build the thing that you want to have. But if you figure out how to do that, it's a really nice experience.

I enjoy not having to take my hands off the keyboard to do most of the writing that I want to do. So... Just try. That's all I'm saying. Everyone should try it out. If it's not for you, it's not for you. We all like a little bit of exploration of ourselves, on a little journey... Or as Johnny said, a lifetime saga of figuring out how Emacs works.

**Johnny Boursiquot:** \[laughs\]

**Kris Brandow:** I mean, you're not wrong. Org mode for Emacs... Some of my friends keep telling me, like "You should use you use org mode. It's a good way to organize your life." I get it. People really love Emacs. People live in Emacs. They'll run their entire lives off Emacs. I mean, almost literally. \[laughter\] They'll put all their tasks, the calendar, their to-do list... I'm sure there's a way to check your email... You can do everything in there.

**Johnny Boursiquot:** It's a way of life, like I said. It's a way of life.

**Kris Brandow:** Yeah. And maybe that way of life is for you. Then try it out.

**Johnny Boursiquot:** Nah... I prefer calendars. I'm good.

**Kris Brandow:** I mean, I hate calendars. That's a whole different rant. I don't want to --

**Johnny Boursiquot:** Yeah, let's not start that. \[laughter\]

**Kris Brandow:** We should have a bonus episode of "How much does Kris hate calendars?" Anyway... But that sounds like a good place for us to end.

**Johnny Boursiquot:** Kris just shows up randomly for appointments on different days and times. That's how much he hates calendars.

**Kris Brandow:** I use calendars begrudgingly. Don't even get me started.

**Johnny Boursiquot:** Abort, abort...!

**Kris Brandow:** Unless we want to make a Plus Plus segment of this, where you talk about calendars...

**Johnny Boursiquot:** No... Abort. \[laughter\] Mayday, Mayday.

**Ian Lopshire:** \[unintelligible 01:09:31.25\]

**Kris Brandow:** See, Johnny, don't troll me too much, because you don't know what's gonna happen. I might have a half-hour rant on calendars. Alright... Well, this was a fun episode, talking about some news and all that fun stuff... But yes --

**Johnny Boursiquot:** Yeah, we should do it more often.

**Kris Brandow:** Yeah. Listeners, if you enjoy us talking about news... Although this was also kind of like meta news, plus news. But you know, Johnny being on the episode - of course it's gonna get meta. But if you liked this episode on news, and you want to have us do some more news coverage, let us know. Reach out to us on the various platforms, in Gopher Slack, in Changelog Slack... If you're not in Changelog Slack, you should get in there... And yeah, let us know if you enjoy this and we'll set some more up.

With that, thank you for joining me, Johnny. It was wonderful having you.

**Johnny Boursiquot:** And Ian. You forgot about Ian? \[laughs\]

**Kris Brandow:** I was going to wait for you to say --

**Ian Lopshire:** I thought we were friends, Kris. I thought we were friends.

**Kris Brandow:** Thank you for being here. And then I was gonna say "Thank you for being here, Ian." I was doing the outro.

in reverse order I did the intro. Next time I'm gonna put you last. I'm gonna say "Thank you for joining me, Johnny", and you'll be like "Oh, thanks for having me." And I'm like "And thank you as well, Ian", and you'll say "Thank you for having me." And it's like "Okay, good. We're done." But we can't do that, because you had to be all snooty. I'm not gonna do that to my friend. Ian's my friend. Yeah. That was rude, Johnny.

**Johnny Boursiquot:** \[laughs\]

**Kris Brandow:** It was a pleasure having you both here, Ian and Johnny...

**Ian Lopshire:** It was a pleasure being here, Kris.

**Johnny Boursiquot:** Yes, Ian was here. \[laughs\]

**Kris Brandow:** Oh, Lord... And thank you, listener, for sticking through this whole episode. And we'll catch you next time on Go Time.
