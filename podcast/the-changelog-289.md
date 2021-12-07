**Jerod Santo:** So Renovate is a project that hit our radar because of Ping, and specifically, we have to give a shoutout to Nicholas Young, whose name and avatar rings a bell, so I think he's probably submitted before... Who told us "You've got to have Rhys Arkins talk about Renovate." Nicholas gave Rhys this compliment, he said "It's the first GitHub app that has changed how I develop software by easing the frustration of managing dependencies for the most part automatically", and he gets bonus points for not saying "automagically", one of my least favorite words. So that's quite a compliment, and we'll get into that.

We're happy to have you here, Rhys. Real quick, we do wanna take a quick moment before I do that and talk about Ping, and some changes that are happening with Ping. For those who don't know, Ping is our open inbox on GitHub (GitHub.com/thechangelog/ping), and for years now we've taken submissions there, Ask Us Anything style posts, questions, feedback, and most importantly I think, show ideas; if you've been listening to the Changelog for a while, a lot of our best shows are because of our community, who submitted the ideas to Ping, this show being one of those.

We love that and we want that to continue happening. However, we've also been taking news and article submissions - projects, articles, blog posts - we love those as well. We no longer want those on Ping however, because we've actually built a version of that into the website where you should submit instead. Adam, do you wanna tell them about that?

**Adam Stacoviak:** I think it can be summarized best with the update to the readme, which says "This is no longer the place to share projects, articles and news, because Changelog.com/news/submit is the new URL for that." What you can do when you go there - we'll actually ask you to sign in and create an account, but the important thing is that you can share with us links, articles - whether you wrote it or not - and that gets served into Changelog News, our homepage, and then potentially it can hit Changelog Weekly, which is a highly sought after, beloved newsletter we ship every single week. If you're not subscribed to that, I would suggest you go to Changelog.com and you will see an option to subscribe, so just follow that lead and do that.

Ping is for show ideas, and the evolution now is to share your news through Changelog.com/news/submit.

**Jerod Santo:** \[03:55\] There you have it. Rhys, let's get to Renovate, let's hear your story and this app that -- at least you've got one happy customer, Nicholas Young, who it's changed his life a little bit. So tell us about Renovate, what it is and the back-story of how it came to be.

**Rhys Arkins:** Yeah, thanks, and thanks to Nicholas, of course. Renovate is a command line tool that is also being adapted to also be a GitHub app, which is what Nicholas refers to... But primarily, it's a command line tool that is used for automating dependency updates for projects such as JavaScript and Dockerfiles and a few things like that. It automates it using branches and pull requests in your existing project to try to fit in with the workflow you already have.

**Jerod Santo:** Very straightforward. How about the back-story? Why did it come to be and how did it come to be?

**Rhys Arkins:** Renovate is not the first to actually do this. I was using another tool called Doppins for a project of mine; it was a web app, and Doppins was really good, but I broke the app into (you could say) a monorepo with Docker containers, where they each had their own package.json, and that meant that I couldn't keep using the automated pull requests from Doppins, and none of the tools that were available at that point or any apps supported having a package.json dependency file that was outside the root of the project, so I just didn't have it anymore.

A few months later I had a problem which was affecting up to 5% of users - weird errors getting caught in my Sentry reporting, and I probably spent two days trying to figure out what was going on. There was actually another developer one day, and myself a day, and eventually we discovered that it was a really strange bug that had been fixed by Google's Firebase a month earlier, or something... And I just decided "Never again", because that was a really -- I couldn't even tell exactly how it was impacting users; you're getting exceptions thrown, but you don't know for sure what they're seeing or what's failing for them, and two days of developer time as well - it's too much, so I decided to hack together a script.

Basically, it was like a Bash script with Git commands - git branch, git pull, git checkout, git push - combined with just a little bit of JavaScript to make the pull request.

**Jerod Santo:** I just wanted to comment on the fact that so many awesome projects begin with "So I decided to hack together a script..." How many times did we hear that?

**Adam Stacoviak:** Lots.

**Rhys Arkins:** Yeah, this was absolutely one of those cases, like necessity, or whatever. So I worked out how it could be done, but again, it was like another week, another week, so I actually paid a freelancer - I just advertised and found someone who wrote that, and by the time he finished it, I realized that I didn't actually need to use Git, that actually GitHub itself provides a Git API... So somewhat for no real good reason, but I decided to rewrite it then myself using pure API. And there it stood, and it worked. So at that point it was still just a script that I was using, and I was thinking like "Maybe I should open source this." Then I had the idea that I would open source it for SEO (search engine optimization) because I was working in real estate, so I still had it... And I had this thing where whenever I'd open source something, I would pick a name that was relevant to real estate; I already had one product called Lint Condo, which was a lint container for Docker. That one actually got in Docker.com's newsletter and things like that, and I got some links back to my blog.

\[07:59\] Another one I released was called Home Inspector, which was another screenshot regression testing... And for this one then I hit on the name Renovate. It was only when I got the name that I thought "That's a perfect name", and I decided to open source it. I blogged an announcement about it; there'd be a few sites interested in it and I'd get some links back to the site, because it's just a bootstrap real estate site, with no advertising budget. That was basically my first reason to open source it. So it came out of necessity why I wrote it, I open sourced it for search engine optimization, but then people actually discovered it and used it. And kind of like out of obligation or pride, when they would say "This is really cool. I just need this, so can you add that?", I started doing it.

**Jerod Santo:** When was that? What year was that?

**Rhys Arkins:** That was about one year ago, around January of 2017.

**Adam Stacoviak:** Before you go further, I'm curious how does the SEO impact the naming? Maybe I'm missing it, what is the reasoning there for that?

**Rhys Arkins:** Well, Google still fundamentally works on backlinks; if you're important, people link to you.

**Adam Stacoviak:** Right.

**Rhys Arkins:** But then Google of course tries to work against gaming of the system. You can't just spam a bunch of links or spam keywords and things like that... But if real, legitimate sites link to you, then that kind of counts, and that's what they use to decide whether you should be high enough or not. Part of it though is they also are smart and they filter out if links seem to be completely irrelevant to what you're doing, such as in my case the real estate side. But if people link to it with an anchor that says like "renovate" or "home inspector" or "condo", then in my theory that should hopefully be good enough to by-pass that a little bit. I didn't really see anything wrong with that, because people are linking because it actually is something useful, and it's always fun to have a naming convention for the things you do.

**Adam Stacoviak:** I love that, yeah.

**Rhys Arkins:** That was what sealed it for me; it was like "Okay, I'm gonna release it, and I'm gonna give it the name Renovate, and people are gonna link to my blog, which is hosted on the same domain as my website, and that'll be worth it..." Better than paying some SEO person $1,000 to give me some spam kind of links that don't look spam; I may as well actually do something useful.

**Adam Stacoviak:** So does it actually feed back into your real estate site, too? Is that part of the point?

**Rhys Arkins:** Well, it was more just that when I put it on the blog, the blog's saying "Here's what I wrote", because I didn't have any RenovateApp.com or anything then. The point is that people would link to that, which describes it, and of course, then go to GitHub and use it. But apart from that, it really wouldn't have anything to do with -- I actually had a separate blog page on the real estate site called "Our tech" to separate out real estate blogging from open source work.

**Jerod Santo:** Here's a big picture question related to all of this, and something that I've thought about sometimes... When we talk about real estate, domains are online real estate, and something that I'm a believer in is owning your own real estate and not putting all your pearls on other people's platforms... Syndicate, right? Like with Changelog.com, we write for our website and we syndicate out to these different media: to Twitter, to Facebook, to even micro.blog now we're syndicating, so RSS. But everything comes back to that one place, and that's really what you're doing when you blog about it on your real estate site - you're linking everything back to there. But one thing that all of us developers don't do is we don't host our own Git repos, we don't host our own documentation, we don't host our own stuff, so ultimately, we're giving the last mile to GitHub because we're hosting our actual things there, where people are linking to and spending their time, to GitHub.

\[12:03\] I think it was Patrick McKenzie back in the day (patio11), who's become kind of internet famous in developer circles/entrepreneurial circles because of all his writing around entrepreneurship and what have you... He made a split-testing Ruby gem years ago, and he refused to put it on GitHub - or maybe it was on GitHub as well, but everything he did was he hosted that... It was open source, Git, all that, but he hosted it on his website, and the reason was the reasons that I'm saying. I'm curious if you guys have had thoughts about that, and if we're all just kind of giving all of our Google juice to GitHub.

**Rhys Arkins:** I don't have too much concern with that part, because I think it's partly to do with how closely related your source code is to your main website. Even if you're gonna self-host, you're most likely gonna end up putting it on git.renovateapp.com, or something like that, so it's still technically gonna be like a separate domain.

I think GitHub did a really great job of capturing the open source market all that years ago. Opinions differ about how much they keep doing to retain it, and you can debate for a long time about "Does the community owe GitHub, or does GitHub owe the community?" I mean, they're hosting stuff for free, and they don't put ads and things like that, they don't sell your details, so you're not quite the product.

**Jerod Santo:** Yeah.

**Adam Stacoviak:** I don't know about that...

**Jerod Santo:** What do you think, Adam?

**Adam Stacoviak:** That's a good question, because we link out to lots of open source, and whenever I have a chance to link to somebody's landing page, which is usually their domain, versus the repo, I will more often than not link to their homepage, and then in the details of promoting this new thing or describing what's going on, "Here's also the source on GitHub", because I feel like what you feel, like the hub and spoke model. I feel like people should own their content, and I don't have anything against GitHub and the open source, I just feel like the legitimacy of that --

**Jerod Santo:** Strategically, it's smarter.

**Adam Stacoviak:** Yeah, I feel like giving it to them first -- because a GitHub readme looks like GitHub, it doesn't look like a branded version of X, and sometimes... Like, Homebrew - you go to Homebrew's website and it's a beautiful-looking site, the documentation is clear; you can easily see that it's on GitHub, you can see all the other things they can advertise. You're removing their ability to better communicate to their community by only linking to the readme, which is essentially a GitHub repo.

**Rhys Arkins:** I think that's a good idea. These days, I have RenovateApp.com, which essentially is for the app part, not so much for the open source, as in it's intended for people who don't care too much about the source, they wanna use the app, and I try to filter out all the stuff about how to host it yourself and so on, because that just confuses people if you give them options that aren't actually valid to an end user. So I tend to adjust where I link to depending upon the audience or what they're after.

**Adam Stacoviak:** Yeah. I surely wouldn't wanna self-host my Git.

**Jerod Santo:** Yeah, it's a matter of convenience in that case.

**Adam Stacoviak:** Yeah, I'm not gonna do that. But GitHub owns that, they do a great job, and like we said, "Do we owe them or they owe us? Are we the product?" I think the open source community is their product, because GitHub is -- I mean, they're giving it away, but at the same time they're getting so much traffic, they're getting so much authority... Think about all the Google juice that's going to them, Rhys, that you're after. Imagine the exact opposite. We've been linking to GitHub for years; not that we're a big source for their juice, but multiply us by 10,000 other media outlets that are linking to GitHub. They're getting a lot of benefit.

**Jerod Santo:** \[15:52\] Yeah. It's an ecosystem, everybody gets things out, and I agree, it has to do with convenience. I guess my takeaway from this is kind of what you said, Adam... Specifically, have your own homepage; you host your code there on GitHub, all the tools are there, your clones can be off GitHub or what have you, but if you have an open source project and it's not just like a throw-away -- like, I have open source stuff that I just throw up on GitHub and whatever... But if it's actually a thing that's in support of a goal of yours, like is the case with Rhys, with his Renovate and his other tools, where they're trying to provide some benefit back to his business - well, have a homepage for that and own that domain, so if GitHub goes away, or you ever wanna move off it or whatever, you're not tied to that URL, you're tied to a URL that you own. And then sure, host the source code where it makes sense. Cool. Well, that was off-topic...

**Adam Stacoviak:** That was a fun aside though, I think. \[laughter\]

**Jerod Santo:** These are the things that I think about, and then I hear somebody talking about it and I'm like "Wait a second, I've been thinking about this, too."

**Adam Stacoviak:** Yeah.

**Rhys Arkins:** Well, I'll put a little bit back on and I'd say that with open source -- I didn't actually know it was that, but there are companies that do try to use their open source to bring attention to themselves. They host their open source page on their main domain, or on a domain important to them. I've seen others (that I forget now) that do sort of use names that are aligned with their business. I don't know if they're like me and they're desperate for back-links, or if they just think it's cute to have a naming scheme that reflects your company... But I think a lot of companies could probably do better to host it on an open source sub-page and use that to focus attention a bit more.

**Jerod Santo:** I agree, absolutely. So that's the back-story of how Renovate came to be - you created it as a "scratch your own itch" shell script, you open sourced it for Google juice, because you had a cool naming convention going that you wanted to-- by the way, Renovate is a perfect name, so I know why you hopped on that and felt good about it.

**Adam Stacoviak:** I love it.

**Jerod Santo:** It plays very well, especially now knowing that you're in the real estate business, it makes it even more poignant, I guess.

**Rhys Arkins:** Yeah. And from there, it required a few little rocket boosts to be where it is today, at the very early stage. One was when one enterprise user mailed me just out of the blue and said that the tool was actually really important to them right now, and they'd hate to see it just sort of die, and would I consider a way of getting paid for it, kind of thing. They wanna see it alive, and they understand... I declined that, I said "Thank you very much, it's not really necessary at this point", but that was a really good motivator, that people found it that useful.

The second one was when another person from an enterprise posted about a year ago and said "Would you object to switching to the Jest testing framework? Because it's much better and I'd be able to submit quite a lot of tests for you if you did that." I'm just looking at that from my mobile - I was on holiday at the time - and just going "Okay..." I think I literally replied like "Well, sure. I can't say no to somebody promising me to add tests" kind of thing... Trying to reinforce like "Okay... That's what you offered." And sure enough, I switched it to Jest, improved a lot of things... I was not a testing expert, and it improved the test coverage a lot. That was basically I think him thinking that "Well, we use this and I don't wanna see it breaking on me, so I'm gonna add tests for this stuff that I know is important to me, so you at least get noticed if you break stuff that I need." But that was also really shocking to me, that someone would do that. It was probably like two days' worth of work maybe, and that again kept me going.

Then the final bit which sort of turned it was that I had multiple people saying to me, even still though they said "Well, this looks really great, and this is actually exactly what I need, but I'm not gonna use it", and they said like "If you ran it as a service, I'd pay you to use it, but I don't wanna be running another server, another thing I have to monitor, to watch." That was really interesting, because when I heard that a few times, I thought "That's interesting." That's where I sort of got the idea that maybe this has a long-term future as like part service, part software.

**Adam Stacoviak:** \[20:23\] There's a couple topics in there. It sounds like this was your... And I don't wanna say this negatively, and maybe just say it is the easiest way --this sounds like this is the first "successful" open source project you've had...

**Rhys Arkins:** Yeah, definitely.

**Adam Stacoviak:** Something that opened your eyes to how open source works and how to interact with the community, or even take in suggestions, like switching to Jest for testing, or whatever. And then also it's opened your eyes to how potentially this open source thing that you created as a scratch your own itch that you never really seemed like you were like "Hey, I can make a business out of this" now has some entrepreneurial business opportunities for you that you're now either planning or investigating, or at least opening your eyes to it. So it's two-fold there - your first step into open source, and then now it can be something that you can actually turn into a service.

**Rhys Arkins:** Yeah. Like I said, these were sort of like turning points. If I didn't have those motivations, I wouldn't have put probably more time in it, I would not have got as many people, and so on. So chance and luck plays a big part in this sometimes.

**Break:** \[21:32\]

**Jerod Santo:** Alright, Rhys - well, the front of the package says "Automated Dependency Updates." That's a very simple sentence, but undoubtedly there's a lot that goes into providing that, either as a tool or as a service. Can you unpack it for us and tell us how Renovate does what it does?

**Rhys Arkins:** Yeah, sure. One quite interesting thing is that the tool behaves basically the same as the app. The app is actually a thin wrapper around the tool; there is no fork going on or a different behavior. So you could basically uninstall the app and go back to self-hosting. All the pull requests you have open and things like that will still be valid and updated, and so on. So pretty much everything I've described covers both the tool or the app.

The way it works is at the base it runs on a schedule, and I normally recommend to people one hour, but some enterprises run every ten minutes... And it scans this repository for package files that it understands, like package.json, Dockerfile, Meteor, package.js files, Google's Bazel builder as well... And just recently we added NVM, RC and travis.yml files, because people wanted to be able to upgrade their Node versions in sync, and they can actually -- Node versions can be found in many different places.

So it scans for all the files, it extracts the dependencies that it finds, it applies a cascading config to it, which gives you a lot of power, but also complexity. And then, based upon how you've configured it, it looks up updates and determines what you should be made aware of. It builds a list of "Okay, this is what we need to do." It checks what's already there, and if anything needs updating or creating, then it does it. And it actually does this by keeping all the state in the repository, so the tool itself you could say is stateless, in that it doesn't need any state file which could be corrupted, or out of date. It actually uses GitHub's Git repository and the list of branches that have been created or pull requests that have been closed, and it basically uses that as its state.

The naming of branches and the naming of the pull requests becomes quite important, because they kind of become like look-up keys. So yeah, it just runs... One difference in the web app is that it's been web-hooked, so it listens to GitHub webhooks for every repository it's installed on, and if that webhook event looks meaningful, such as the person has updated a package.json file, or they've updated their renovate.json file, then it runs again on demand to update it. Then it's quite nice, because if people edit their dependencies, all their pull requests get updated if necessary. If they change their config, then again, everything gets updated if necessary.

\[27:46\] Then it also has a listener for npmJS, so it basically gets updates or notifications using a kind of subscribe notify approach of CouchDB. So it gets updates whenever any new package is updated. We do keep a little bit of state, but it's in a way unimportant state. It looks for any repositories that had that dependency the last time they ran, and if so again, it puts them in the queue. That means that if a package you depend upon on npmJS gets an update, then you can expect to see a pull request within minutes. This gets particularly helpful when you have multiple repositories that belong to the one organization or the one project.

An example is in GraphQL - there's a lot of GraphQL repositories using Renovate, and the Graphcool guys, and that'll often do an update in one upstream repository, and then that flows down to a downstream one where it needs to get merged, and that might flow down to another one. Thanks to the webhooks, it means that that can be done in minutes. It's almost like an alternative to the monorepo, because at least you're not having to update it manually, and it happens within minutes. That's a little value-add onto the app that you can't really do in a stateless command line tool; it would need to be alive and listening and you have to make sure it doesn't crash and all that kind of stuff that I take of with the app.

**Jerod Santo:** Okay, so it's not exactly the way that I was thinking that it would work in terms of the -- it's checking live, so to speak, each time it's run on a schedule, or if there's a webhook that comes in, of course, it knows and it sends the new version of that particular dependency. But when it does a full run on a specific project or repo that you have, it's going to go to all the sources - in many cases, that's just NPM - and just check for the most recent version of that library. It's gonna do that for each of your dependencies, each time you run it?

**Rhys Arkins:** That's right, with some caching, and so on.

**Jerod Santo:** Yeah, so caching is definitely important there. I was thinking more of like the Library.io's approach, where they're basically creating a huge dependency graph in the sky of different libraries and versions, and they have all of that data on their own, and then when it runs, it would already be preexisting without require a centralized service and all that. Okay, very cool...

**Adam Stacoviak:** And potentially even a lot of unknown knowledge you didn't really need to have. Rhys's version is on-demand, so it's not--

**Jerod Santo:** It's more pragmatic for what he's up to, and Library.io's mission is much bigger in terms of what they're trying to do.

**Rhys Arkins:** The stateless aspect of it, where the state is really in the Git repository itself - it makes some things difficult to do, but it also provides huge numbers of benefits, because you reduce the risk of corruption or state mismatches or things like that, given that everytime it runs, it ensures that the correct view is there right now. To give an example, if there was some kind of error - it might be my error, it might have been a server-side error, like a bad response from GitHub, when we looked up at changelog.md... So if a pull request was created and the content of that pull request, which said "We're updating you from 2.1 to 2.2", and the changelog is empty - if the next we run and that problem has been fixed, or maybe the person wrote the changelog, then that pull request gets patched. Because everytime it runs, it ensures that everything is kind of like correct at that point in time, it makes it quite self-repairing. If it crashes halfway through, for some reason, then -- there's not type of crash I'm aware of that causes any state problem that requires manual intervention.

**Jerod Santo:** \[31:59\] I think it would also make the conceptual model in your head, as you're writing that - which is a complex thing to run through, especially with those transitive dependencies and everything - more simplified, because you're guaranteed a known state at the start of every run, right?

**Rhys Arkins:** Yeah.

**Jerod Santo:** It's all there, it's not gonna change as you're running.

**Adam Stacoviak:** I've got a question on that front, Jerod, since you've mentioned that... Considering how complex this is, and it's potentially always in your head, Rhys, and now that it's been open source and other people are contributing, do you ever put a visual to some of these things that like it's difficult to talk through, because maybe a visual can say "This is how the model works, in a visual standpoint" - do you have things like that? Is that important to you, visualizing workflows for this?

**Rhys Arkins:** It isn't currently there, but it is quite a good idea. I mentioned earlier that it has a cascading config, and in my mind I think of it as like -- I use a term like "ridiculously configurable" or something, meaning that you can control the functionality so much, to the point that you can do things that are even silly. You can write a rule that says "For patch versions of this exact dependency, inside Dev Dependencies, in this package file, then do this" kind of thing. Like CSS, it cascades - you can have global rules, you can have rules per package, you have rules per path, you can have rules per dependency type, you can have catch-up rules for packages. So you can use regular expressions to define your matching rules, and things like that.

Because I found that so many people, in their requirements, they have a lot of "if else/if else/if else" kind of requirements themselves. So they'll start off by saying "I just wanna get an update every week", and it's like "Yeah, that's easy. Just add this preset, "schedule weekly." And then they're like, "Oh yeah, but this package I need, that's my own package", and you're like, "No problem, okay. Add this exception to that rule." Then they're like "Oh yeah, but I only wanna order-merge the minor ones, not the major." It's like, "Yeah, that makes sense, so then you set this."

So when people have the freedom to describe exactly what they want, then they end up having a quite wicked set of requirements. When people realize that they are in control of how Renovate behaves, then they start kind of getting more and more advanced. Some people have got amazingly complex configurations files that Renovate dutifully implements.

**Jerod Santo:** Yeah, I noticed on your sale page - or on your homepage, I should say - you use the adjective "unopinionated", which seems like it's the opposite of what most softwares as a service, or frameworks, or whatever it is... People try to sell their software as opinionated, and most of us appreciate opinionated software because it has opinions, and that's making decisions for us. I found it interesting that you explicitly say "This is unopinionated", and it sounds like the reason for that is because there's so much variance in the way that people wanna handle their dependencies that I guess the 80% solution is not good enough.

**Rhys Arkins:** Exactly, the variance is huge... And it's almost amusing at times, because I see people at the complete opposite ends. I see people that want the fire hose approach - separate everything, and then you see others that want to group everything together. You see people that want to have ranges in their package.json and other that say "No, let's lock this down to pinned, exact versions." You see people that wanna have a lockfile, you see people that say "I don't have a lockfile for this project." So the opinions of other people are very wide.

\[36:05\] I don't know if you saw this one, but I added like a motto for the tool maybe about a month ago; half is a joke, but it's warming on me and I'm thinking of keeping it... The motto of Renovate is "Flexible, so you don't need to be", because that basically describes how I view the users - I don't wanna be in arguments with them, convincing them why they have to have a lockfile, or they should be pinning, or why they should separate them, so that one bad apple doesn't spoil... I just want people to do be able to do what they wanna do, and then maybe over time they'll realize "Oh, yeah, grouping all of them together every week basically always results in a broken build, because at least one thing breaks, and I end up merging nothing."

The person that at first is very resistant and says "Oh, this will be disruptive" changes their mind and says "Okay, well maybe I'll just group all the minor updates then." Then over time they'll be like "You know, I'm still getting a lot of breaks..." All this disruption they thought would happen by having separate pull requests actually is outweighed by the disruption of them having to look through pull requests with like 12 different upgrades and figure out which one broke... Versus if you put them separately and configure them to automerge or something like that, you wouldn't have that problem. But I'm kind of proudly in that sense flexible or unopinionated - "You wanna do it? You can do it." I don't wanna be in the game of trying to talk you into why you should do the one way that I think is best.

**Jerod Santo:** Right, you let people learn on their own by trial and error, definitely.

**Rhys Arkins:** Yeah. And for sure, not everybody is gonna converge on the same behavior either.

**Jerod Santo:** I was gonna ask that - is there a best practice that you know what it is, and you're just letting people... Everybody's gonna eventually get there. Because if that's the case, then you might as well just start preaching and get people there faster.

**Rhys Arkins:** Occasionally, yes. For example, I think that you should always have a lockfile, but there's some very smart people who have written a lot of great software better than mine who think that libraries should not have lockfiles, because then the thing that you're -- if you're not getting the random roll of the dice when you npm-install like your users are, then you're gonna be seeing something different to what they see... That's their argument, for example.

There's other things - I think that pinning your dev dependencies makes a lot of sense. The reason why you don't pin dependencies sometimes is because you have downstream users and you don't want to be unnecessarily restrictive of your downstream users. They may end up with duplicates, or whatever. But your dev dependencies never leave your project, and it makes sense to be like "Yeah, these are the exact dev dependencies that we know are working for us right now."

**Jerod Santo:** I've definitely been in a situation as an end user of a library trying to upgrade, and the library I'm depending upon pinned their dependency too tight, whereas there was no reason for it besides that's just the version that they were on when they've last released, and you could go run their test suit against that new -- even if it's just a patch; I think it was just a patch, and it works just fine. If they would have just loosened that or not had it at all, then I would have been able to upgrade without having to bug them... But because they did pin it, now I need my dependency to unpin and/or update before I can even continue with my work.

**Rhys Arkins:** Yeah.

**Adam Stacoviak:** What is the process of pinning? What is that?

**Rhys Arkins:** At least in Renovate terms, that's when you install renovate and Renovate says "Well, now that you're automating this kind of stuff, you can pin dependencies." That would mean that for example rather than having like a range that says "ESLint 4.0.0" (the carrot), that instead you would say "ESLint 4.2.1", or something like that. And then, at your choosing, based on your configuration, when you wanna update ESLint, you can do so and you might upgrade it to 4.3.0, or something like that.

\[40:11\] ESLint itself is maybe not a good example, but a better example might be, say, if you use eslint-config-airbnb, or something like that, because those ones are quite opinionated, and the whole point of many of the releases of those presets for ESLint is that they're introducing new rules or stricter rules, or they're catching something bad that they were missing before. So the whole point of a linter, in a way, is to break your build, but it's not very nice if you have open ranges in the lockfile, so users come along and run install and try to run the tests and they find that the lint fails because a new rule got introduced without explicit approval of merging. That's an example - you want to pin that down, because nobody gains from just having a random new version appear on some people's computer while others have a cached older version and say "Well, it works on my machine."

**Jerod Santo:** Exactly, yeah... All nothing but trouble. So we've been talking specifically in the context of NPM and packaged JSON, but we haven't asked you yet if Renovate supports other packaged ecosystems or if it's just NPM.

**Rhys Arkins:** Yeah, so the two major ones are NPM and Docker, but it's definitely in -- my goal is that Renovate becomes a universal tool... Universal in terms of language and as well as in terms of platforms. Because apart from GitHub, it supports already GitLab and VSTS, and Bitbucket support is in a pull request... So my goal is to make it cross-platform and cross-package manager. We've already added Docker support, and there's requests for others, like Python, or Java, Maven, and things like that. Yeah, the goal is to make it like a universal approach.

**Jerod Santo:** Did you have that goal from the start, or is it at least -- when I think of expanding beyond where you are, I think of "Well, I hope the architecture is set up to be pluggable to a sense. and not like "Okay, in order to support Python, for instance, we're gonna have to rewrite 60% of our codebase to do that."

**Rhys Arkins:** Yeah... It definitely was not in my foresight at the start. Most of the features of Renovate have come from users suggesting it; it's been very much like a user-driven thing. Almost every time a user wants a feature and I figure out a way to kind of gracefully add it, I kind of breathe a sigh of relief that whatever choices were made previously weren't too limiting. So yeah, again, it's a bit of luck there.

It started with NPM only, and then someone came along and asked if I could support Meteor. And because Meteor itself is really just referencing NPM dependencies, it was like 30 lines of code in about six different files and it was done. When Docker came along, that one came along because people were chatting in maybe a blog post or in a Discourse discussion, something like that... And they were talking about the challenges of keeping Docker dependencies updated, in particular the hashes. Because even though most people use Docker tags -- even if you use a tag, like 8.9.4 for Node.js, that's not an immutable tag like in NPM. If 8.9.4 or something is published to NPM, you know that that's always gonna be the same, whereas in Docker those may look like a semver, but it's really just a tag, and you can change anything underneath a tag.

\[44:08\] So the only way to have immutable references in Docker is to have an SHA-256 hash, which is enormous and it's very un-user-friendly. Someone actually commented that it's a pity there isn't like a renovate for Docker, and sort of mentioned me, or something like that... That's how Docker support came about, because I thought "Yeah, that's really good", because when we look at package.json dependencies, in a way you could argue that we're just automating something that people could do manually. You're automating a feasible manual job. Well in Docker you have these big, long hashes - that's starting to get to the line where it's like this automation is now essentially making something possible that really isn't feasible manually. Looking up hashes and pasting them in and not making a mistake - that's getting a bit beyond what's reasonable, and that's why hardly anybody actually uses hashes... Whereas now, when people use Dockerfiles with Renovate, and even if they have Node latest, even though they wanna do it that way, at least now it will pin Node latest at hash, and so every time Node latest actually changes, you get a pull request that kind of tells you it's changed and you can see if it still passes or doesn't break anything.

Even if you wanna be "non-semver-versioning", you can still get updated whenever that hash is changed whatever tag on docker hub.

I did some refactoring recently to make it a lot easier to add languages in, and there's someone who's told me that he thinks he can add in Docker Compose support pretty easily now, given that there's already Docker there. Hopefully, we'll see a lot more languages added a lot more quickly now that the code is a little bit more welcoming of outside languages and package managers.

**Jerod Santo:** You mentioned that with package.json you're basically automating something that people could do manually, and I'll tell you right now that you're automating something that I do manually for our application... We have an Elixir app which also has JavaScript, as all web apps have JavaScript somewhere in the mix. So we have a mix.exs, which is the Elixir side, and we have a package.json... And Adam and I were just talking about this, like "How do we keep up with the Joneses...?"

**Adam Stacoviak:** You sound frustrated just describing it...

**Jerod Santo:** Well, it's not like it's fun -- it's not fun work. I do it manually, a) because I haven't seen a compelling tool that will do it automatically. If this will work for our package.json, I would implore you to add Elixir support, or I would sign up on a list of people who will wait for that eagerly, although admittedly not probably high on your list in terms of language penetration... But yeah, it's just a task. I'm kind of (I don't know), maybe a pedantic, an obsessive control developer kind of person, so I want to see what actually is changing, and I want to pick and choose, "Yes, we want this update; no, we don't want that update." So I probably would have the super-complex configuration.

**Rhys Arkins:** Yeah, I mean... Once people learn that they can control it, they start really going for it, adding exceptions to rules, and...

**Jerod Santo:** It's a whole new yak shave, yeah.

**Rhys Arkins:** Yeah, yeah. One of the points on the Renovate repository where I say Renovate's approach, where I try to describe what's my philosophy - the first point is that I believe that everybody can benefit from some level of automation... And if the way Renovate works now, whatever is you're gonna say "That's not really for me" - well, if it truly isn't for you, then I kind of think "Okay, but tell me what would be for you", because I guarantee you that zero automation is not the best for you.

\[48:14\] Looking up the changelog for each dependency, figuring out which file the source repository uses for changelog, and then clicking and then manually looking at the delta, instead of just like a pull request that actually captures it... That's why I think that everybody benefits from some level of automation. It's up to me to try and make sure that I provide the capabilities that I can do that.

**Jerod Santo:** Right. There's some automation built into the package managers, so I don't go and look up all the dependencies and see; I run either mix hex.outdated, or yarn outdated or something, and it will show the version differences, and then what I'll do is I'll just update one, run the test suite, see what happened, maybe while it's running I'll go check their changelog... So there are some tooling around that, but I'm sure I'm doing way more work than I should be.

**Adam Stacoviak:** There's a couple different points to consider here. One, it's the waste of time, and potentially time is money...

**Jerod Santo:** Right, yeah.

**Adam Stacoviak:** So the waste of time and the money, doing something manually that you could potentially automate if you feel comfortable with it, or the extreme flipside is just not doing it at all, and it's like "I'm just never gonna care, I'm just gonna keep moving forward." In your case, Rhys, earlier on in the story you'd mentioned how you'd seen some breakage and you were like "What's the thing?" and it was because something wasn't updated; it was probably because you were not doing it at all. So you've got Jerods, who are gonna do it manually until something like this comes around, you've got people who are extreme and wanna automate it, but they wanna start extreme with the configuration, they wanna highly configure it, and then start to maybe loosely unconfigure themselves because they've become more comfortable with it. Then you've got those who don't do it at all... But either way, you've got this menial process that essentially wastes time and potentially a lot of money. Can we quantify how much time and money has been wasted doing what is now automatable, if that's a word?

**Rhys Arkins:** Well, it's pretty hard to quantify, but there's certainly a lot of different ways to look at it.

**Adam Stacoviak:** That would be an interesting perspective on your side. That's a selling point, because if you could say "I'll save your organization this because you've researched--", just like Nadia did, Jerod, with that hypothetical number way back with open source, which isn't a point I'll drive home here (look it up if you want to), but the point is you can to some degree...

**Jerod Santo:** ...get a proxy for it.

**Adam Stacoviak:** Yeah, get a proxy for it, and share that, and then quantify it for each individual team or repo or project or company, and let that be the selling point. "We can save you X."

**Rhys Arkins:** Yeah, by the way, you're right - this is getting to marketing, but I just was reading this week and I put a to-do that says "You should focus on what it does for people, not what the features are" kind of thing, and that's pretty much what you're saying now.

One of my favorite anecdotes, and I've been tempted to put this on the web page, at least on the RenovateApp.com - it's from Equifax... You guys know the unprecedented...

**Adam Stacoviak:** We're aware, yeah.

**Jerod Santo:** Yes.

**Rhys Arkins:** ...leak of personal data. So the ex-CEO, who retired after it happened, when he testified - I think it was Congress, I forget exactly... But he basically said that "Well, this was caused because one individual in our development team did not pay attention to a notice that said we should update our web server version, and it's all his fault."

**Jerod Santo:** Wow.

**Rhys Arkins:** So basically, that entire leak of like half of America's social security numbers was blamed on like -- there was a single developer who missed a notice. That's a process failure; you can't say "I'm blaming one guy because he missed an email, or something like that."

**Jerod Santo:** Yeah.

**Rhys Arkins:** \[52:00\] I mean, it's probably more than an email, but the reality is that if you don't have automation, you are gonna risk having those types of things happen to you. You kind of need to keep up with patches, or you will eventually have problems; that's pretty much a solid rule.

**Break:** \[52:22\]

**Jerod Santo:** Rhys, with Renovate and really with all dependency management, as you've found - which is why it's so unopinionated - the devil is very much in the details, and you can shoot yourself in the foot, whether you're going the manual route, probably the automated route... If you're going the "Don't upgrade" route, you're definitely shooting yourself in the foot. But a lot of the details have to do with versions themselves, their meaning... What I think is 1.0 is different from what you think is 1.0; I even have a hard time deciding when I depend on a library... How volatile is this? Should I pin it to the patch, should I allow up to the major? What are your thoughts around that, with versioning, and what it all means?

**Rhys Arkins:** Yeah, thanks. So to paraphrase a saying about democracy, I think semver is the worst for of versioning, except for all the others; that's basically how I look at it, because there's lots of challenges, there's lots of things that are going wrong... But right now, it's still the way to go, it's not anything to throw out.

The challenge is -- I think there can be a mismatch between people's expectations about semver... Like, is semver for the consumer, or is it for the producer of the packages? You used the word 'volatile', which is actually a really good one to include there, because semver works on a major minor patch, and in recent years there's been a movement to sort of clarify that a little as being like "breaking feature fix", mapping to the major minor patch.

To give an example, if I have a JavaScript library and I do nothing except for deprecate support for Node 4, I just say "Okay, I'm not gonna support that from now on" - is that a major minor or a patch? It wasn't meant to be a trick question, sorry...

**Jerod Santo:** Yeah, I was gonna say, it's a deprecation, so I would think that is a patch; you're not really doing anything.

**Rhys Arkins:** No, no, it's a major because it is breaking functionality.

**Jerod Santo:** No, you're just deprecating it though...

**Rhys Arkins:** Oh, sorry, but removing support for it. "Node.js 4 is no longer supported."

**Jerod Santo:** Oh, okay, so that would be a --

**Rhys Arkins:** I'm not saying something breaks, but...

**Jerod Santo:** Okay. So yes, if you're removing support, then that's definitely a breaking change.

**Rhys Arkins:** Yeah.

**Jerod Santo:** \[55:58\] I thought you were just notifying of an upcoming breaking change. Okay, so you've got me.

**Rhys Arkins:** So we saw that a lot we saw people remove 4. But if you're not using Node.js 4, what's the volatility of that? It's like zero. It's not a risk to you.

**Jerod Santo:** Right.

**Rhys Arkins:** None of the actual code changed, it was just saying "Well, we're not gonna keep supporting Node 4 from now on, so if you're using it, don't upgrade to this major version."

Now, the next thing is let's say I add a new language support to renovate, but I put it behind a feature flag, it's isolated into one file, and it does nothing unless you actually enable that feature. That's a minor, I've added a feature, right?

**Jerod Santo:** Yeah.

**Rhys Arkins:** What's the risk of that? It's behind a feature flag, it does nothing unless it's turned on... I mean, the risk to you as an existing user would be like "Well, I don't care." Realistically, that's a very low risk to you.

**Jerod Santo:** Shouldn't that be how every minor is -- there's new functionality, but there's no risk in upgrading, because...

**Rhys Arkins:** Ideally, but you can also have features that might touch 20 files, or things like that; I'm giving you the example of the simplest of features, but it is a feature. Now I'll give you the final example. Let's say I build an edge case, a corner case that's really complicated and really nasty to try and fix, and it takes me like 17 files of touching to add like an extra state across the whole app to track to remove it. Now, that's considered a fix, but that one's the highest risk of all of them, because I've had to touch 17 files... And I'll tell you, I've broken things with fixes; that's just how it is.

But when I'm trying to work out my versioning, I feel compelled by this concept that I should be following breaking feature fix. If I'm truly fixing an edge case, I don't wanna call that a feature, or people will say "Well, who are you trying to kid? That's a bug." But the reality is you as the consumer - forget all of the breaking feature minor major, all you're trying to do is, like you said, volatility. You just care "What's the chance it's gonna break me?" That's really all you care about.

**Jerod Santo:** Yeah, exactly.

**Rhys Arkins:** And that's where semver is kind of not working for us very well, because as the end user, you just wanna know your risk level. A breaking feature fix is a good general rule, but it lets you down in so many times, and that's the biggest problem we have with semver right now. We could do a better job somehow (I don't have the implementation idea) of the producers being able to communicate risk to the consumers. The major minor patch by using feature and fix - that's not really working very well today.

**Jerod Santo:** What if we could add -- so instead of saying "Well, let's throw a semver out and do something--", I know you're not saying that, but like, let's have another standard that's better... What if we added more metrics in addition to semver, so that still is there to communicate the intentionality of the release, right? That feature -- what was the first one? Feature or something fix? Major minor patch...

**Rhys Arkins:** Yeah, breaking feature fix.

**Jerod Santo:** Yeah, breaking feature fix - that's our intention, so we continue to do that, we release things according to our intentions, but we have tooling around the history and the changes and all that, and so maybe in addition to that you have additional metrics, like "This is a patch, according to what it did, but it also added 17 files and touched 60% of the codebase." That would give you-- the things that you're describing to me... Because we can automate all that, that's what our tooling does already.

**Rhys Arkins:** Exactly.

**Jerod Santo:** We can flesh it out.

**Rhys Arkins:** Yeah, I mean... Again, that's why I firmly think that everybody needs a little bit of automation, even if it's just something that's giving you a report about like the estimated stability of this fix... Is it a typo, or is it 17 files?

**Adam Stacoviak:** \[59:57\] Yeah. I like that, "Everybody could use a little automation." Or automate ability is what you've said? I like that.

**Rhys Arkins:** Yeah, yeah.

**Jerod Santo:** Rhys is good at these one-liners, man...

**Adam Stacoviak:** Yeah, we'll quote you on that.

**Jerod Santo:** He's flexible, so we don't have to be.

**Adam Stacoviak:** I like also that you talk about the risk management too, because that's something you don't really consider... That's one thing Jerod and I talked about in the pre-call; it was like, you know, it's essentially risk management of like how far you're willing to go, how configurable you make Renovate for yourself it's curbing risk management.

**Rhys Arkins:** Yeah.

**Jerod Santo:** And then the ultimate extreme is this automerging feature, which seems scary to me... Can you tell us about that? Going back to our conversation months ago, Adam, about looping, with...

**Adam Stacoviak:** That's right, Tim Mecklem.

**Jerod Santo:** Thank you - Tim, where they would close the loop on their diabetes machines... What are those called? I'm dropping the ball on it, but...

**Adam Stacoviak:** I don't remember...

**Jerod Santo:** The ultimate was to close the loop where it would actually regulate things for you in your body, and that was scary.

**Adam Stacoviak:** Predictive, too.

**Jerod Santo:** Automerging to me is like, "Okay, at least let me look at the thing before it gets merged", but why don't you tell us about that feature tell us about that feature.

**Rhys Arkins:** Yeah, so to give you just some perspective... Automerge is where you give Renovate the permission to merge a new version to your master branch, whatever is your base branch, if it passes your test. So you do these for ones that you're confident of. And for example, like dev dependencies, or if you're updating Jest, you're updating ESLint... I mean, if you've got a new version of ESLint and all the tests pass, are you really gonna inspect anything else?

**Jerod Santo:** Yeah, exactly.

**Rhys Arkins:** So the rule that we use is like if you were just gonna click that Merge button anyway, why don't you save yourself the trouble? And if you wanna really get out there, there's the option to do what we call the branch order merge, where it just creates a branch, and if the tests pass on the branch, it does a merge onto a master without even raising a pull request, so you reduce your noise... So that's automerge.

Right now, actually, when I look at the statistics, we have about a 2:1 ratio between manual merge and automerge. That's like thousands a week are being automerged by people. People are feeling safe enough to be increasing that.

**Jerod Santo:** Nice.

**Adam Stacoviak:** That's an interesting metric too to use for getting people's buy-in, to say "Do you know what the ratio is between the risky, which is automerge, to the Jerods that will inspect it manually, and/or just go the other way?"

**Rhys Arkins:** Yeah, yeah. I try to force myself -- whenever I merge a pull request, I think to myself, "Have I ever looked into that? Have I ever spun up a VM and checked that it still works, the whole search this/that, or am I just clicking Merge and waiting for someone else to find it?" And if the answer is "I'm not actually spending that time?", then I may as well let the bot be negligent, not myself, if that's the way I'm gonna be.

**Adam Stacoviak:** Especially -- I mean, if you're branching, you're testing and you're merging, then you're merging back to master... I mean, it's fairly easy; it is Git, you can roll back.

**Rhys Arkins:** Yeah.

**Adam Stacoviak:** It'd be different if it was a permanent change you can never revert back to, but I guess if you're several commits in a line and maybe two deploys later - I don't know, maybe it's too far back to really do that, maybe it gets more complex infinitely, but for the most part it is Git, and that's the point of Git, is for people to roll down changes.

**Rhys Arkins:** Yeah. So to give you a little insight into the future of Renovate as well, is that what I wanna do is augment that such that -- because now we have some scale, have fun... So there's now around 5,000 repositories using Renovate on GitHub alone, so that gives me some really good statistics... And what I wanna be able to do is allow people to configure automerge rules that say "Well, if it passes my tests and passes an expected number of everybody else's tests, then merge them."

\[01:03:59.16\] I mean, for ESLint you don't really care, but say if it's a new version of like the Angular core or the React core, then we give you the ability to say "Automerge it if it passes 95% of tests." Or in the future you might say "Automerge it if 30% of everybody else has already merged it" - to allow people to have these kinds of metrics that give you more a feeling of surety or safety. I think that that's part of the future of the automation--

**Adam Stacoviak:** That's really interesting, actually... You're using the wisdom of the crowd and past performance to say "90% if people automerge this."

**Rhys Arkins:** Yeah, yeah.

**Adam Stacoviak:** Where would that UI surface at?

**Rhys Arkins:** Well, it bases to be configuration; you can configurate thresholds... That's my intention.

**Adam Stacoviak:** Where would you communicate that information, the wisdom of the crowd? Where would that be communicated?

**Rhys Arkins:** Oh, in the pull request.

**Adam Stacoviak:** Okay.

**Rhys Arkins:** I saw a nice trick that TJ Holowaychuck uses for something he does at GitHub polls. He actually embeds .svg files as an image into GitHub issues, if you're using his GitHub polls... That is feeding back to a lambda function that polls DynamoDB, and basically it gives you like a dynamically updating issue comment, where you don't have to rely on a bot to be continually refreshing it and saying "Okay, now 843 tested it." It's actually an image, and the image, every time you refresh, pulls the latest number from the back-end.

**Jerod Santo:** That is super cool. Can you give us a link to that in action so we can include it in the show notes and check it out ourselves? Because that's a great idea.

**Rhys Arkins:** Yeah, sure. It's a really good idea. I'm actually considering making half of the pull request being essentially like a text .svg, so that you can kind of be able to dynamically update the information in a pull request description, graphs and so on, without actually needing to continue to be hitting the GitHub API, to be annoying people by popping it into their news feed, or whatever.

**Adam Stacoviak:** I think it's interesting too how hackable .svg's are. I've seen some really interesting stuff, this included, as well as I think the way CodeSponsor did their thing with .svg's... That was really inventive; no one would have ever thought of that, and Eric did, and that was really cool.

**Rhys Arkins:** Yeah... Sorry, if I could say just one more thing - I think one of the challenges with the updates, and this is the hesitance that everybody has... Sometimes it's the fatigue they have after the initial positivity is that the updates become a bit like a fire hose. Automation 1.0 is sort of like, you know, whenever there's an update, here it is; it's in your face. But I've continually worked to try to have ways to reduce that noise, and so automerging is really one of those, because if you can automerge it without you needing to do something, then that's one... But other ways include grouping and scheduling. For example, you can say "Don't submit any new pull requests during our working hours", which also has a benefit meaning that your CI machines can not be holding you up with application code during working hours as well.

So grouping, scheduling, automerging - these are all ways to try to kind of reduce that noise, and reduce people's frustration, that you don't have to have the firehose. If somebody says "Are you interested in getting healthy", and you say "Yeah", and then they say "Okay, well the only solution is 5 AM boot camp every day", then you're like "Ugh, that's a little bit extreme." So if you say to people are you interested in keeping updated? and they say "Yeah", and you then you say "Okay, so here's what's gonna happen - I'm gonna hit you with a pull request every single hour of the day." That's like the equivalent of this 5 AM boot camp.

**Jerod Santo:** Right.

**Rhys Arkins:** Some people want that, but by by having that flexible configuration, they can just be like "You know what? Let's make dev dependencies weekly/monthly." They have that flexibility to be able to just schedule things down.

**Jerod Santo:** \[01:08:08.06\] I want the version that's likened to the machine that you walk into and it has a nice rubber belt that just jiggles... Do you know those things? They just jiggle the fat right off you?

**Rhys Arkins:** Yeah, yeah.

**Adam Stacoviak:** That's not real, Jerod.

**Jerod Santo:** Give me that version of automated dependencies. Just jiggle the fat right off my app, will ya?

**Adam Stacoviak:** Oh, my gosh... \[laughter\] I thought you weren't going there, but you did. That's a good one, I like that.

**Jerod Santo:** My app, Adam.

**Adam Stacoviak:** Yes, your app. Well, Rhys, I think - maybe I'm jumping the gun here; if we have more to talk about on this subject we can, but I think during this conversation I've been revealed through discussion and your excitement for this that there's a serious business here for you, and you potentially accidentally stumbled on an open source itch that could very likely be a business, but that's kind of scary, because you're gonna build this business potentially around somebody else's product, and kind of volatile ecosystems, and Jerod asking you for Elixir support. What do you think about that?

**Jerod Santo:** \[laughs\] "How much money do I have?" is the question.

**Rhys Arkins:** It's exciting as well as a little bit stressful, because the concept of monetizing open source can be a hot topic at the best of times... But as I mentioned earlier, the epiphany to me was when somebody said "This is exactly what I want, but I won't run it. If you'll run it, I will pay you", and then I realized "Okay, I'm gonna work on this, because it's fun", but I think it tends itself towards being a service, and it also tends itself (as we've just talked about) towards having a network effect, where the more people are using it, the better it can be for everybody. That's essentially being the motivation. But until now I've been running it as a free app. It currently supports around 500 installs and about 5,000 projects on GitHub, which is quite a lot of scale, at least to me.

**Adam Stacoviak:** That's a lot.

**Rhys Arkins:** Yeah, I think so. I'm pretty chuffed with it. I still remember when each day you see it go from 25 to 26, or something like that... So yeah, it's been going very well.

**Jerod Santo:** Plus with some big names using it - you've got Algolia, Google Chrome Labs, Mozilla, you've mentioned Angular... So you have some very significant projects that are dependent on this.

**Rhys Arkins:** Yeah, yeah. It's super exciting whenever I see big names on the installs. It's very like flattering almost. Yeah, it's really nice.

**Adam Stacoviak:** How do you track the installs? Is it currently a service where these are their own installed version of it, or is it--

**Rhys Arkins:** Oh yeah, right. So these are actually only the people who have installed Renovate on public repositories on GitHub. I have a -- not that probably anybody has read it, but I have a point in my Terms & Conditions that says "If you install Renovate on a public repository, we have the right to use your logo and your name without further permission. But if you have that, you can tell us and I'll remove it within seven days." I put that because it's better to beg forgiveness than ask permission.

That list of customers is actually -- or I should say "users", because no one's paying... That list of users - that's only ones that have installed it publicly. I actually have -- how would I say it? There's other unicorns, we could say, that are running it privately that I'm aware of, but I don't put their logo up because I haven't asked them, and it's self-hosted, so that's their own business.

**Jerod Santo:** Right.

**Adam Stacoviak:** So I guess the way then to get this into an open source application is to go to github.com/apps/renovate, which is linked to from your readme, and that's the way -- there's a big, green button up at the top, you click Install, and then you choose the repository to install it into. Is that the process?

**Rhys Arkins:** \[01:12:13.07\] Yeah, that's right. GitHub gives you the option of either installing it on all repositories, or selectively picking them one by one. That interface is not particularly friendly, so a lot of people end up ticking all out of convenience... But yeah, basically you install it, you pick which repositories you want it to run on, and the next thing that happens is it gives you an onboarding pull request. And that one does nothing except say "Okay, here's our recommended default config, and if you use this, then here's what'll happen next. You'll expect seven pull requests, and here's what they'll look like."

It gives people the ability to then edit that pull request, edit the config to add these exceptions, these configurations, and Renovate will then run immediately and give you an updated prediction. If you started with "Here's your seven pull requests" and then someone adds a preset that says "Group all together", then it'll (hopefully within a minute, or something) update to then say "You'll have one pull request called Update All Packages." It's sort of like an interactive onboarding where nothing happens until you then click the button to merge.

**Adam Stacoviak:** I guess the first step is to either choose all or choose the repo, then you have to add a config to your repo, is that right? So that's actually a file that lives in your repo?

**Rhys Arkins:** Yeah, that's right. It is actually possible to run it without a config file. So if you actually just close that onboarding pull request, that's good enough to get it to start, because you've already installed it on the repo, so clearly you want it.

**Adam Stacoviak:** Right.

**Rhys Arkins:** So it is possible to do it without a config file. What that means is you just get the application defaults, and those are the ones which I'll call fairly unopinionated. Over time, over major releases, I've often changed default settings for configuration to make them (I'm trying to think of how to describe it) less action -- I'm missing a word, but you know... Less volatile. It does less by default as each one goes on, meaning that people kind of opt into things.

For example, in the very early releases it was a bit more opinionated and said "Let's pin everything, let's do this...", whereas now you kind of have to opt into that if that's what you wish. It will attempt to autodetect.

**Adam Stacoviak:** I guess this couples with potentially a new announcement... I think this is fairly new for you too, which is inclusion in GitHub's Marketplace - do you wanna speak about that? Can you talk about those details?

**Rhys Arkins:** Yeah, absolutely.

**Adam Stacoviak:** How does that reflect back on the two different processes to install it, so to speak?

**Rhys Arkins:** Yeah, so to be a part of GitHub's Marketplace you don't have to actually be a GitHub app; you could be an OAuth app, or things like that. The two are very closely related, but not tied to the hip. So if you go and install the app without going through the marketplace, it will install and run and give you the onboarding, and very soon - not today, but very soon, it will start giving people polite reminders that it is necessary to select a plan... Sorry, that's only if they're actually on a private repository, I should add. Soon it will start prompting people to say like "Renovate is available on the GitHub Marketplace. Please select a plan." Then eventually it will run out of patience and say "Well, you've got like seven days left", or something like that.

That's my planned approach for how to nudge people onto the plans, if the use is in private repositories, rather than open source.

**Adam Stacoviak:** Yeah, this is only private repos, not open source repos.

**Rhys Arkins:** Correct, correct.

**Adam Stacoviak:** So that's a clear distinction there.

**Rhys Arkins:** Exactly. That's a pretty standard GitHub add-on business model - open source is always free. Sometimes people have to have reasonable use limits, but it's been going pretty well so far. Like I said, I've got 5,000 projects, and that's being fairly manageable, so I think that we can continue managing with open source being free indefinitely.

**Adam Stacoviak:** \[01:16:15.02\] Does it make sense to mention this? I don't know if this is brand new or how long this will be real, but it seems like you maybe even have an opening special for personal plans, that's like $1/month... Is that on Git forever?

**Rhys Arkins:** Yeah, yeah. You know, it's challenging when you go from a free offering to saying to people "Hey, pay me."

**Adam Stacoviak:** "Give me some money", yeah.

4: Exactly... And I thought that one of the nicest ways I could do that is almost like a Kickstarter-like approach, where it's like, your earliest back is get the best price. So that's why it's opened with this opening special, where it's a price that will be as you are sort of asking; it will be grandfathered in, because that's actually GitHub's policy. GitHub's policy is if you sell someone a plan at price X, then you keep delivering it basically indefinitely, until that person cancels it. That works really well, because what that has allowed me to do is to offer this kind of opening special prices, and starting tomorrow, I'll be pointing some of the people I know have been using it for a long time and saying "Hey, sign up with this. You'll get that price forever. Thank you for helping promote Renovate."

I thought that having this kind of carrot approach to pricing, rather than a stick approach which says "Pay up now, or else... You've had long enough", I thought that might be a nice way of transitioning, where you offer the existing users a price that they know is really, really fair.

**Adam Stacoviak:** $1/month is really fair, for most fans.

**Rhys Arkins:** Yeah, that's the...

**Adam Stacoviak:** The personal plan.

**Rhys Arkins:** That's for the personal accounts. I remember I would have been willing to pay like $5-$10 minimum kind of thing, so I think a dollar is good. And people can sign up and lock that in.

Another reason for charging a dollar and not saying free is that I know that if I sign up to a service and they've got a free plan that suits me, I always have a concern that one day they're gonna say "You know what, we can't keep offering that, and it's now $35/month", or something like that. They'll go from free to a price that is just not valuable to you, it doesn't match with the value. So I personally prefer to have something where I can be like "Okay, I'm a paying customer then, and I get this price, and I know that there's a good chance they'll grandfather that in." That's another part of my line of thinking - not so much just like "Oh, I worry whether they'll be sustainable", because you know $1/month is not really gonna help with that, but it's more like "Oh, but I know I've got a price locked in, and that I like." This is the approach I'm taking.

**Adam Stacoviak:** I know it's tough to ask this question, and I won't ask you for the five-year plan, but give me some time span that's reasonable for you to share with the listening audience where Renovate is going, where you have dreams about going, and considering now you're in Marketplace, it's becoming a paid-for product that can sustain itself and grow, what's on the horizon for you? What's next?

**Rhys Arkins:** Yeah, so while I obviously hope that there'll be good take-up from the Marketplace, the marketplace itself can be very good exposure... People finding it via the Marketplace that wouldn't have otherwise heard about it. You guys haven't heard about it, for example.

**Adam Stacoviak:** We should hear about it, right, Jerod?

**Jerod Santo:** Yeah...

**Adam Stacoviak:** I'm glad Nicholas told us, because without Nicholas, we'd be in the dark still yet.

**Rhys Arkins:** Yeah, thanks Nicholas.

**Jerod Santo:** That's right, we need this. We need Elixir support.

**Adam Stacoviak:** Thank you, Nicholas.

**Rhys Arkins:** \[01:19:41.05\] Yeah. So look, my long(ish)-term plan for Renovate - fundamentally, it remains an open source-first tool, with a very good core that you can run yourself, if that's what you wanna do. I plan and hope that a lot of people will prefer to have the app. I'm only aware of one company who is running their own app, their own bot, or whatever you wanna call it, on GitHub.com, meaning that most people -- it is free, but I still think that the convenience in having someone else watch it, monitor it, alarm it, and things like that, and saver logs, I think that'll benefit.

I also plan to add some things to the app that are not really easy to do in an open source command line tool, and that's things like a web interface to view your history, like "Were there any failed attempts yesterday?" or "What was the log from three hours ago when it created this pull request that looks a little bit weird to me?", things like that... And that's only possible when you're actually keeping state, storing logs, providing a web interface, and so on.

I think that the tool can remain a very powerful open source tool, while the app can provide what you expect from an app, as a service, rather than just simply software.

**Adam Stacoviak:** Very cool. Well, I know I'm excited. I think this was an eye-opening topic for me, because automating something can be pretty scary... Like Jerod said, he hasn't found a reasonable tool to do it for ourselves, so we've been basically wasting time and money, and I'd be excited to have Jerod have more of his time back, so we can make some more money or find just different, fun things to do, and it's just such a shame that there's so many -- like, you just repeat that 50,000 times, people wasting their time and money updating dependencies that Renovate could save so much out there, and automate it so much, too.

**Rhys Arkins:** Yeah. My goal is that there's always some setting or some level that works for everybody, so for anybody that thinks it's not for them, there must be something that is right, and... "Well, if it just did this..." Because we've got some ideas, and if I find that people like them, then I think there's a few other approaches and models that could be used.

**Adam Stacoviak:** Yeah. Well, Rhys, thank you so much for sharing your story and your passion for this project, and your commitment to open source, and just sharing the details around the sometimes tough subject of open source to business and how you balance all that. I know it's tough, but thank you so much for sharing your time today, and all your ideas with the show.

**Rhys Arkins:** Yeah, thank you very much. It's been a real pleasure, and thanks for your time, as well.
