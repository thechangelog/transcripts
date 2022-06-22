**Gerhard Lazu:** Hi, Frederic! Welcome back to Ship It. Just in time for summer!

**Frederic Branczyk:** \[laughs\] Thanks for having me back.

**Gerhard Lazu:** So we last met in episode 33, Merry Shipmas. It was Christmas. Can you believe it? And it's almost summer. This was six months ago, and we had a great time talking about trying out Parca. And I enjoyed trying it out.

**Frederic Branczyk:** Yeah, time flies.

**Gerhard Lazu:** And Michal Kuratczyk, thank you for figuring out what we were doing wrong with Erlang perf maps. That was Parca Agent issue 145. So thank you, Michal, for helping us figure it out.

This happened very recently... Thank you David Ansari for writing that amazing blog post, how to do use pprof and how to do Flame Graphs with RabbitMQ, and mentioning Parca. I'm really excited to see what happens next. That was very nice to see; we'll drop a link in the show notes...

And Kemal - he wrote two blog posts on various topics, which... There's lots of things happening in this space. So do you wanna tell us more about it, Frederic? Because this is like the tip of the iceberg, literally; the tip of the Polar Signals iceberg. There's been so many things happening in the background.

**Frederic Branczyk:** Yeah, I mean - where to start, right? I think one of the most exciting things, that have nothing to do with software for us at Polar Signals, is that we grew the team a ton since we've last talked. I think we doubled the team since you and I talked last... So we're now 11 people, which is extremely exciting to see organizationally. But then, of course, the software that we're building is becoming ever better, ever more features, and more stable, and everything.

Yeah, I think it's cool that you started with the Erlang bit, because that's where we left off last, and it's entirely random that just yesterday that RabbitMQ blog post \[unintelligible 00:03:58.27\] was published, showing what we were trying to do last time is properly supported by Erlang.

**Gerhard Lazu:** \[04:10\] You know, when things are meant to happen, they just happen... So sit back and just let them happen. Just going with the flow. Big fan of that. And seeing things come together this way - we're definitely on the right track with this.

So I know that Kemal Akkoyun was with you back in December... He wrote two blog posts, amazing blog posts, on this topic. Fantastic Symbols and Where to Find Them, Part 1 and 2. We'll drop them in the show notes. They explain a lot more of the issues that we're seeing, and issues we're specifically symbolizing stack traces - Kemal did an amazing job explaining it in great detail. There's some screenshots there... David covers a lot of this in his blog post, the recent blog post... So it's a really deep dive into this topic, and I really enjoy these fantastic people spending a lot of time just to explain in very detailed terms what the problem is, why it's important, how it works... Big fan of that, too.

So in these sick six months, what changed with Parca.dev?

**Frederic Branczyk:** So I think almost everything has changed, at least a little bit. Since you've mentioned the work that Kemal has been doing in all of the blog posts that he's been writing -- the blog posts are kind of the result of all of this work. Basically, they are the blog posts that he wished he had had when he was working on this... Because there's so much archaic information out there. Basically, Linux has grown over the last 30 years (my gosh), and even before that, ELF binaries - they've been around for a long time. There's just a lot of intricate things that can happen, and then there are random things that compilers do to binaries to optimize them... And that kind of just all makes our life really miserable, but also kind of interesting in the profiling world.

So Kemal has kind of -- like, one of the really important things that came out of all of this work that Kemal was doing, and what ultimately resulted in those blog posts as well, is something call position-independent executables; support for these. And the reason why this is really important is basically all binaries, or all shared objects, shared libraries - think of libc, it's kind of the one that basically everything dynamically links to, right? But anything you can think of that is like a shared object, shared library in Linux - those are position-independent executables. And the term comes from that they can essentially be mapped into memory, into random places in the process basically... And even if they are mapped in those random places, we can still kind of translate those memory addresses back to something that is understandable uniquely for that shared library. So even if there are two different binaries that do completely different things with these libraries, the shared object is the same one, and we can treat it as the same one.

So that was really important, so that we can do analysis of an entire infrastructure, where as I said, lots of binaries link to the same libraries, and we can then link all of this information and say "Hey, there are hundreds of binaries using this function in libc that is super-unoptimized", or something like that. Not that that's really the case... Libc is a very well optimized library, but you get the idea. It's basically a super-power in order to get whole system visibility.

So that's exciting... And kind of as a bonus, every Rust binary out there is a position-independent executable. So that means that just by doing all of this work we now support Rust, even better than we did before.

**Gerhard Lazu:** \[08:04\] That's amazing. That's amazing. The one thing -- so thank you for slowing me down, because you're right, this is important; to talk about those two blog posts, the Fantastic Symbols and Where To Find Them... The first one, the ELF Linux executable walkthrough - that picture I think is worth a thousand words in this case. It explains so well how this breaks down, how the ELF binary breaks down, what it is... Sorry, the ELF format. And there's so much to that. And then in part two, where we talk about JIT and Node is given as an example, how does it actually work in practice. It's really nice to see that and to basically connect those dots, because as you mentioned, the problem space is huge, and if you're missing those fundamentals it's very difficult to understand how the pieces fit together, and what are you even looking at.

Why is this important? David, he wrote it in the Improving RabbitMQ Performance blog post. He showed the importance of understanding what is happening at a very low level when it comes to reasoning about performance, when it comes to improving performance in whatever you're running. So where is the time spent, what is least efficient. And because these things are so complicated, can we have a universal language, please, to understand what is happening? And I think, to a great extent, eBPF allows us to do things that were not possible before, or were very hard before, and only a handful of people were able to pull this one off. And even then, spend a lot of time. Brendan Gregg comes to mind. He did so much for the Flame Graph, understanding CPU sampling, CPU profiling, all that.

**Frederic Branczyk:** Yeah, absolutely. And I think our mission with the Parca Project is to take all of this information from all of these communities and kind of bundle it into one. Like you said, Brendan Gregg has done phenomenal work showing us how to profile Java applications, but also native binaries... And then completely on the other side of the spectrum there are really amazing Python and Ruby profilers. One that I'm really excited about is Rbspy, that was originally created by Julia Evans. It basically outlines how we're going to have support for CPU profiling for Ruby processes as well.

That's what I'm kind of trying to say - we learned also about Erlang; that's kind of something that actually came out of this podcast, which I think is really exciting... Just kind of getting all of these pieces together, so that we can have actual, whole system profiling, so that we can look at our entire infrastructure as one, regardless of what language we're talking about. And as we can see based on this podcast, that's a long road to go, but it's one worth going.

**Gerhard Lazu:** I really like how simple you make this. I think that's one of my favorite aspects of Parca, how something that's fairly complex - and if you have to do this by hand, just go and look through all the instructions. And if you haven't done this, you'll realize by step number five or six you go "You know what - do I really wanna do this?" You're questioning whether you really wanna do that. That's just how involved it is.

And having an open source project that makes this really, really easy - that's what just got me excited the first time I heard about Parca... Because I knew how difficult it is to get it right. And I think everyone that's spent a bit of time with pprof and - which is the other one? DBG? No, GDB... Oh, my goodness me. Oh, wow. That's like another tool which is so difficult to use. And I had to spend a bit of time there, and I almost always forgot my steps. There's so many. So unless you do this all day, every day, it's really hard stuff. And Parca makes it simple, and I love that story.

**Frederic Branczyk:** \[12:00\] It's funny that you phrase it in that way, because a couple of weeks ago I was talking to a high-frequency trading company, and as I think everybody can imagine, shaving off a single CPU cycle is a competitive advantage to them. And even in those kinds of environments, they were telling us that -- like, they love how we're going the extra mile, and doing continuous profiling... But they would already be happy with profiling products that just made it easier to do profiling. So we're kind of doing multiple things there. We're doing exactly that, like you already said, and then we're also going that extra step of actually giving them performance data of all of time, not just a single point in time.

**Gerhard Lazu:** Yeah. And just as we've shown in episode 33, there's even like a pull request that goes with it. Anyone can take this; if you have Kubernetes, it's super-simple. One command and you have it. That's all it takes. And it's open source; you're free to look at it, contribute to it, make it your own... Whatever you wanna do with it, because it's such an important piece of technology, I think.

**Frederic Branczyk:** Yeah.

**Gerhard Lazu:** Speaking of which, I've noticed straight off the bat your website, and I think -- wow, Parca.dev? I really like the new website. Tell us a little bit about that, because I haven't seen such a big change, such a positive change happen just like within a couple of months. What's the story behind it?

**Frederic Branczyk:** Honestly, that has very little to do with our team, and has all to do with the really incredible team at Pixel Point. They're a web consultancy, but I got to know them through some other open source projects. They did the website for the K6 project, they did the website for \[unintelligible 00:13:56.07\]

**Gerhard Lazu:** Cilium...

**Frederic Branczyk:** Yes, Cilium... Maybe even the eBPF.io website, I'm not 100% sure. But basically, they've become THE consultancy for open source projects and deep tech projects... So I was really excited to kind of just reach out to them and see if they're interested in a project like this, and working with us, because we felt like we needed a makeover for the Parca.dev website... And they're just absolutely mind-blowingly amazing. They really try to understand what Parca does, and they themselves got really excited about it. That of course is a bonus, but because they tried so hard to actually understand what Parca does, they were able to tell the story really amazingly, and then they're also just brilliant designers.

**Gerhard Lazu:** Yeah. I wanna give a huge shout-out to Pixel Point, because I rarely see a website that captures something as well as Parca.dev does. I really like this story. I mean, I knew Parca, but it just basically opened it up in ways which were surprising to me. Even the screenshots - they've got them spot on. How it works, why it's important... All that good stuff. Good job, Pixel Point. Good job.

**Frederic Branczyk:** Yeah. Actually - funny thing... One of the things that actually kind of went the other way was we did the screenshots and they were like "Can we edit the screenshots to look prettier?" And we were like, "I don't think that's being genuine to our users, or potential users." So what happened was they made the edits to the screenshots, and then we actually implemented those changes in Parca, so that it would actually look that way... And then we did real screenshots again.

**Gerhard Lazu:** Oh, wow.

**Frederic Branczyk:** So that was a cool collaboration that I think unless you ask about it, you don't really find out... But aside from the website, they actually also influenced the way that Parca looks today.

**Gerhard Lazu:** \[16:05\] So I'm really glad that you mentioned that, because when I looked at the new website and I've seen the Flame Graphs, my first thought was "Hang on... They didn't look like this. Is this real? Has this actually happened?" I ran the update, checked the new Flame Graphs, and they're exactly the same. And I remember that we talked about this around episode 33, and I was thinking, "Hm... That's one thing which could do with some improving, because it's a bit difficult to understand certain things..." Still, huge improvement over what we had before, but not as easy as it could be. And it was great to see... That's one of the first things which I've noticed.

The other thing which I noticed is your favorite Easter Egg. Can you tell us a bit about it?

**Frederic Branczyk:** Yeah, this is awesome... I mean, it's kind of a design gimmick, but I think it's really cool... We talked already about Parca and the relationship to eBPF... eBPF has this B as a logo, and as you scroll through the website, the B kind of flies through the pictures and out of the website, which I think is -- I love that detail.

**Gerhard Lazu:** I'm disappointed if a website doesn't have an Easter Egg. I think Chainguard spoiled it for us, with the hair on various people... I mean, now I'm looking for Easter Eggs. And I think Changelog.com needs an Easter Egg, too. If Jerod is listening to this, that's okay. And if not, I'll mention it in our next Kaizen. But Easter Eggs are so important. They just -- you know, like, play, and having a bit of fun is so important... Because our day-to-day - it's hard enough as it is, let's be honest about it. So every little opportunity to have a bit of fun - I think we should seize it.

**Frederic Branczyk:** Agree.

**Gerhard Lazu:** That's how I think of Easter Eggs.

**Break:** \[17:46\]

**Gerhard Lazu:** So I think that you can almost anticipate this question, because I think I asked it last time... Do you use profile Parca.dev?

**Frederic Branczyk:** All the time.

**Gerhard Lazu:** Nice.

**Frederic Branczyk:** All the time, yes. Specifically, our demo cluster - so if you go to demo.parca.dev, that's Parca profiling itself, but also the Parca Agent profiling itself; so it's all super-meta... And actually, we have like a Prometheus setup that is monitoring it as well. So all of this we're kind of using to do improvements all the time, and to figure out whether the improvements that we're doing actually make sense and have the desired effect.

**Gerhard Lazu:** \[20:10\] I think that's so important. Dogfooding your own product, and the thing that you're working on, in this case, like your open source -- would you call it a product? Would you say Parca is a product, or a project?

**Frederic Branczyk:** Parca is the project, and then Polar Signals Cloud is the product.

**Gerhard Lazu:** Right. So Parca, the open source project - using it, and seeing the improvements, and... Even for itself, it's so important... But I have noticed this blog post about profiling Next.js apps with Parca, and that made me thing "Oh, hang on... There must be something more to it." And I know that Parca.dev runs on Vercel, which is the Next.js company... And in that case, I was thinking you must be doing something with the website as well.

I haven't seen that in the demo; maybe I wasn't paying enough attention... But the fact that it's the live... Is it for the website itself as well?

**Frederic Branczyk:** Okay, so parca.dev itself is 100% a static website that's hosted on Vercel. So that we're not profiling, though maybe we can partner with Vercel one day and profile all of the applications there. That's not something that we're doing today. But, actually, Polar Signals Cloud is Next.js, and that we're profiling with Parca.

**Gerhard Lazu:** And is that what the demo does?

**Frederic Branczyk:** No, that's our internal Polar Signals Cloud project.

**Gerhard Lazu:** I've noticed that it runs on K3s. Is it Civo, by any chance?

**Frederic Branczyk:** It's Civo, yeah.

**Gerhard Lazu:** Nice. Okay. I can see it. I can see it. It was really nice... Like, click on the Demo, and I was wanting to know more about it - where it runs, how it's set up, what is being profiled... And I'm glad that you mentioned all those things, because now it just makes a lot more sense in my head.

So the other thing which I - you know, just reading around and doing a bit of research, I've seen you mention that Matthias recently fixed some things in the Polar Signals IO pipeline, the continuous delivery pipeline. So six minutes from PR to dry run, diff \[unintelligible 00:22:08.21\]

**Frederic Branczyk:** Yeah, this is pretty exciting.

**Gerhard Lazu:** How does this relate to Parca -- I don't think this is Parca.dev, right? This is just for the agent, for the server...

**Frederic Branczyk:** This is the Polar Signals Cloud product. Basically, we have a monorepo that contains all of Polar Signals Cloud, and within that repo we now have - from opening the PR, to doing a dry run apply to our Kubernetes cluster within six minutes. That includes building all of the container images, running previews of the UI... All of these things, everything in six minutes. So in six minutes you can basically try out your change in a staging-like environment, and it will tell you when you merged this pull request, this is the changes that we're gonna be applying to the production Kubernetes cluster.

**Gerhard Lazu:** Okay, okay. So I'm just trying in my head to imagine... How do you view if the changes are positive or negative? Do you look at the profiles? Do you have some -- how does that work? ...to see if the change that you're rolling out is a good one.

**Frederic Branczyk:** So in this case, it was just that we added much more aggressive caching in our builds... So here it was really just seeing whether the total runtime was less than what we had before. But that was very noticeable, because before it was like 26 minutes, and after doing some very aggressive caching, we got down to six minutes.

**Gerhard Lazu:** Okay. So what runs the CI/CD? Is it the GitHub Actions, and what does the caching --

**Frederic Branczyk:** It's GitHub Actions, yeah.

**Gerhard Lazu:** Okay.

**Frederic Branczyk:** \[23:45\] We just do -- so previously, we did most of our caching through Docker layers, but we ran into a couple of issues with that where I wasn't... I don't remember exactly anymore what the problem was, but there were some permission issues and we couldn't figure out why that was happening, and the saving and loading of Docker caches was actually taking longer than running the builds... So we decided we're not gonna do the actual build within the Docker files anymore. Because we have 100% statically-linked Go binaries - that's all that Polar Signals Cloud is made up of - so we're building the statically-linked binaries before, and then we just put those into containers.

**Gerhard Lazu:** Okay.

**Frederic Branczyk:** So basically, all we're doing is we're using the Go caching from GitHub Actions now.

**Gerhard Lazu:** I see, I see. Okay. So I think you're thinking about the BuildKit caching; so the BuildKit caching integration with the GitHub Actions cache is slower than actually running the commands... And I have seen this before, and there's like a great story for another time behind that. Eric is someone that I work with, and he's one of the BuildKit core maintainers, and he's well aware of this, and he's working towards a solution... But I know what you mean. I know that sometimes using the layer caching, the BuildKit layer caching with GitHub Actions can be slower, for sure. Okay, that makes sense. So where do you build those binaries, the statically-linked Go binaries?

**Frederic Branczyk:** Those we build just through normal GitHub Actions.

**Gerhard Lazu:** Okay.

**Frederic Branczyk:** Beforehand we load the go mod cache from previous runs, and then we save the cache if it changes.

**Gerhard Lazu:** Okay. Yeah, that makes sense. Okay, I can see that. So in six minutes you get your change-out in a staging cluster, and then what happens afterwards?

**Frederic Branczyk:** Then people review it. The cool thing is because we also run previews on Vercel, basically you can try out the entire pull request after six minutes. We've got the UIs that can either be pointed at different versions of the API, or even the production API... Because you know, most of the time it's either or - a pull request that only does changes to the frontend, and in that case it's actually nicer if you can just use production data immediately. And then if it's approved and merged, then within the next six minutes it's gonna be deployed.

**Gerhard Lazu:** Nice. How many deploys do you do per day? Because this sounds very efficient. You must be doing a lot.

**Frederic Branczyk:** Yeah, I mean - it depends on what people are working on... But we can easily do tens of deploys if we want to.

**Gerhard Lazu:** That's very nice. That makes a huge difference. Being able to make small changes, try them out in the final place where they will run, gaining that confidence and then just saying "Yup, this looks good to me", and then a few minutes later - in this case several minutes later - you have it. Nice.

Have you ever found yourself in a situation where you have to roll back? A change had unexpected consequences in production, that were not visible in staging?

**Frederic Branczyk:** Absolutely. That's where another really cool piece comes into play... One of my colleagues - I think you mentioned Matthias already... He built a really cool tool called Pyrra, which is for planning, but also maintaining and tracking SLOs. And all of our APIs have SLOs through Pyrra. So when we have a genuine user impact through a merge and we get notified within a couple of mintues, then we can easily roll back the change, and at worst, we have the time that it took to alert us, which is usually somewhere between five to ten minutes, if there's a really drastic problem, and then we roll back. So turnaround, 16 to 20 minutes until we would have rolled back a severe change.

**Gerhard Lazu:** \[27:50\] That sounds like a very nice setup. Very, very nice. I bet it must be so nice working with all this tooling, that you mostly built, and you understand how everything fits together, and you have like a very nice and efficient system of getting changes out... And if something -- I don't wanna say breaks; if something behaves unexpectedly, you can go back and you can see when it happens.

**Frederic Branczyk:** Yeah.

**Gerhard Lazu:** So I know that you mentioned Pyrra last time that we talked. I don't remember how much of it made it in the final conversation in the episode... But can you tell us a bit more about it, and how is it coming along since we last spoke? Because I remember you mentioning it, I was excited about it, but I didn't have time to follow up on that.

**Frederic Branczyk:** So I highly recommend actually that you do an episode with Matthias, because he's much more qualified to talk about it than I am... Because I'm just a user, Matthias is the creator, and he just does everything around that project.

**Gerhard Lazu:** Okay.

**Frederic Branczyk:** And really, it's not anything that we do at Polar Signals, it's just something he's also passionate about... So it made its way into the Polar Signals infrastructure, and it's an amazing tool. I find myself not going to Prometheus Alert Manager, or even Prometheus. When I get a page, the first thing I do is I hop into Pyrra and see what my error budget burnt rate is, and how severe those changes are actually affecting my users.

So Pyrra itself is, like I said, a tool to manage SLOs, essentially, specifically for Prometheus setups. It doesn't integrate into any thing else. And that's just because that's the only tool that we use. But with Pyrra, you can kind of say "I have this gRPC API that I have metrics for in Prometheus, and I have this goal of three nines. 99.9, or 99.95." And then Pyrra will automatically generate multi-window error burn rates. This is a very long term, and there's a lot of theory behind this, why these alerts are better than a normal threshold of 0.1% error rate is happening right now... Because we don't really care if that error rate happens once and just spikes for a very brief second. We actually care about "Are we going to fulfill our promise to our users over the next 30 days?" or within the last 30 days. So we really only want to get paged if we are in danger of violating that kind of contract that we have with our users.

So multi-error burn rates essentially calculate how quickly are we burning our error budget, and if we continue at this rate, are we going to run out of error budget? Essentially, when are we going to get to that point where we're violating that contract we have with our users. That's essentially -- Pyrra allows you to efficiently manage those, but also it's just much smarter than I am, for example, to generate those Prometheus alerts, because there's a lot of math behind those that you really need to understand pretty deeply to do useful alerts. And Matthias has spent countless hours studying this, and really implementing something really unique with Pyrra.

**Gerhard Lazu:** Alright, that's a conversation that I'm really looking forward to. Thank you for mentioning it. I remember last time when, again, we just briefly talked about it, but the focus was something else - now that you mention it again, this comes up, and there's a demo.pyrra.dev, that's really interesting. It's pyrra.dev on GitHub.

This is something -- you know, you have those projects that people get like ideas they are very excited about for a few months, and then they stop being as excited, and then it becomes abandonware... This doesn't seem to be that. And I really like that a lot of interest is on this; you're using it, you're seeing the benefits of it longer-term, more than a few months... And I'm very curious to see where this goes. I think this has some great potential, and I like how Matthias is thinking about it, for sure, so that' one's coming up. Thank you, Frederic, for mentioning that.

**Frederic Branczyk:** \[32:14\] Yeah. I'm sure he'll be happy to do an episode with you.

**Gerhard Lazu:** Amazing. So I'd like us to take this like a half-point, so I'd like us to do like a conversation cleanser... But I would like to talk about the orange farm. I'd like you to tell us more about that orange farm, Frederic... \[laughter\] What is this orange farm?

**Frederic Branczyk:** Yeah, so just before KubeCon EU, we at Polar Signals did our very first in-person off-site. So for those who don't know, Polar Signals was founded end of 2020, so the Covid pandemic was in full...

**Gerhard Lazu:** Swing. Oh yes, full swing.

**Frederic Branczyk:** Full swing, yeah. And so we're a fully remote company, and up until that point, I even as the founder hadn't seen a lot of the people who we ended up hiring at Polar Signals in-person. So we spent kind of the entire week before KubeCon together, kind of partly working, doing hackathons, and doing some strategic planning, but also just spending some quality time together. And yeah, one of the team events that we did was we went to an orange farm in Valencia, because KubeCon EU was in Valencia, and Valencia is famous for their orange farms... And I love orange juice...

**Gerhard Lazu:** Okay, I can see where this is going... I can see where it's going...

**Frederic Branczyk:** And we went to this really lovely orange farm just outside of Valencia. We booked kind of like a private tour on the farm, where they kind of taught us through the history of how modern-day oranges were even developed, and the personal history of their family on the orange farm, and so on. And yeah, we got to pick oranges right out of the tree, and they told us how to actually eat oranges, which apparently I've been doing wrong all my life...

**Gerhard Lazu:** So how do you do it? Hang on, this is important... How should you eat oranges?

**Frederic Branczyk:** Yeah, I didn't know this, but essentially you take the orange with the stem upwards, the green part upwards, and you just kind of bite into it, and you kind of bite out the top part of the orange, you throw that part away, and then you can kind of squeeze the orange juice into your mouth and drink it. And then once you've squeezed most of it, you kind of just break it open and then you eat the flesh.

**Gerhard Lazu:** Wow.

**Frederic Branczyk:** You can actually do that without making a mess. It's mind-blowing.

**Gerhard Lazu:** Okay... Wow, that sounds like great tips. Thank you very much for that. And that sounds like a great team activity. I know it's really hard to adjust to the new reality, because we always thought that's short-term, things will come back to normal, we'll be back in offices... But that hasn't happened. I'm not seeing it. I think the world has moved on to a new model, where most of us are remote. There's no office... I mean, who would have thought that this will become the norm, especially among the startups... And that has so many benefits.

One of the drawbacks is that you don't get to spend in-person time, quality time, with the people that you work with... Because it makes a huge difference. And activities like this just create those bonds which are so important to a good, healthy team, and I'm glad that you are taking every opportunity you can to do that. It's so important to build a healthy team and a healthy company.

**Frederic Branczyk:** Yeah, I couldn't agree more.

**Gerhard Lazu:** Okay.

**Break:** \[35:40\]

**Gerhard Lazu:** So there's another huge thing that happened just before KubeCon EU... You introduced ArcticDB, and that's what I would like us to talk about next. So what is ArcticDB and why does the world need something like ArcticDB?

**Frederic Branczyk:** Yeah, this is something that I've been excited about building for a really long time, and I've kind of been thinking about this problem space for a really long time... So kind of in the name, it's a new database, it's an embedded database written in Go. Maybe listeners are familiar to BadgerDB, or LevelDB, or even kind of like RocksDB, where you're using it as a library in your application to build something around. I guess SQLite is the most classic example of this.

ArcticDB is a columnar database. As opposed to many other databases, where let's say in SQLite, for example, typically the data is stored in rows, if you insert a new row into your SQLite database, physically, on-disk, all of the data that belongs to the same row are physically collocated. That's a row-based database. And then a columnar database - we store all of the values of an entire column collocated. And that's really useful when you wanna do analytics of the data. So if you wanna scan an entire column, and then say you wanna aggregate it, you wanna sum all of the values in there. Or you want to do comparisons of strings, or something like that; it just turns out that the way that computers work, that's much more efficient to do than doing kind of random access on disk, and loading individual pieces off of this to do those things.

\[39:55\] So that's why we for Parca needed a columnar database. We kind of realized that pretty early on. And I have some kind of prior experience with the Prometheus TSDB, which if you squint a lot, is also a columnar database, but highly, highly optimized for the Prometheus use case.

The one thing that is additionally kind of different in ArcticDB, that really there's no other database out there that allows you to do something like this, which is - we have semi-flexible schemas. So you can define a schema, and you can say "These columns must always be there" if you insert a new row, but then we also have something that we call dynamic columns. And this is specifically useful for label-style data, similar to what Prometheus has. We wanna be able to attach labels to specific data points, so that we can then slice and dice data by random infrastructure labels. It can be the region of our data center, it can be the name of our data center, it can be our namespace in our Kubernetes cluster, it can be our pod, it can be our container, it can be our process ID.

We as Polar Signals don't want to dictate how you organize your infrastructure, and so we want to give you that flexibility to choose the labeling however you like it. That philosophy came from Prometheus, and we felt like that was one of the things that made Prometheus really successful... So it's something that we felt like we had to replicate. But the nature of profiling data means that we have unique sets of labels much more often than Prometheus. And this is kind of the classic cardinality problem that people run into with Prometheus. And there's nothing wrong with Prometheus. It's designed with that. Prometheus is not meant for the undefined, unbound cardinality use cases. It can actually handle them surprisingly well, but it wasn't designed in that way. Again, nothing wrong with that, but continuous profiling needed something different, because we don't know what stack traces will occur, how often they will occur... That's completely random. It depends on what the process is actually executing. So we needed this storage that actually internalizes that, and where we don't pay a penalty for cardinality.

Essentially, the way it's done in ArcticDB is that every time we see a new label key, we dynamically create a new column that is then inserted into, and everything else is just treated as this column is just null, basically, for all other rows.

**Gerhard Lazu:** So I'm really glad that you mentioned this, because this cardinality used to come up - I'm sure it still does - in the context of Prometheus... And I know that that had memory implications, as well as disk implications. It would basically use up more memory, more disk space to store the data. Does it affect ArcticDB in the same way when it comes to memory size and disk size? Does ArcticDB use more memory and more disk, if there are more labels?

**Frederic Branczyk:** So there's at least one fundamental point here that I think I need to point out, which is if you have more data, then you need to pay for it in some way. There's no such thing as storing data for free. If we're able to do that, then I think the fundamentals of computing change.

**Gerhard Lazu:** Of course. Okay.

**Frederic Branczyk:** \[43:41\] But the characteristics of paying for cardinality are dramatically different. In Prometheus we want to keep series of data alive for as long as possible, because that improves compression, and that's ultimately one of the pieces that make Prometheus as efficient as it is. Again, that's why I keep going back to - this is a good design for Prometheus, because it allows Prometheus to exploit several pieces of that equation to be able to serve things like the super-low latency queries like Prometheus does.

In ArcticDB we're not paying per series, we're basically paying per row that we're inserting. And the point is we're kind of bringing the cost of inserting a row down so much that we don't care anymore how many columns we have in that row. Basically, our cost is at the row level, as opposed to the cardinality level.

**Gerhard Lazu:** I see, I see. Okay, that makes sense, because when we used to have lots and lots of labels on metrics in Prometheus, what used to happen when you would query them - you'd use a lot of memory, so things would take a lot longer. And if you wanted to have them optimized, you'd use more disk space, if I remember correctly, and memory... So I'm wondering, those ad-hoc queries which you don't know what labels you'll be querying for, so then you just add up -- I mean, you don't have to declare what the labels are, because I think it will also create different time series, if I remember correctly. This is all coming back; I haven't used this in maybe a year now, give or take, six months, something like that. And the more labels you would have, the more time series you would get... Is that right?

**Frederic Branczyk:** That's right. Every unique combination of labels identifies a time series in Prometheus.

**Gerhard Lazu:** That's it. And then that is what was resulting in that excessive storage and excessive memory usage, like disk space and memory... And if Parca doesn't do that, that's amazing, because that means the cost of label is much, much lower than it is in Prometheus. As you say, two different systems designed for specific use cases... But ArcticDB seems to have tackled head-on the problem of cardinality, which makes a huge difference.

So does that mean that you can store the samples or the profiles that you get with arbitrary labels, like customer names, or service names, or things like that? Because that opens up the world to hosts of new possibilities if you do that.

**Frederic Branczyk:** Yeah, that's absolutely right. And one of the first things that we started implementing once we had ArcticDB - we haven't released this yet, but it's something that I've talked about a couple of times already... It's that we attach a trace ID to a stack trace. That way, what we can do is we can pull up all of the CPU time that was created by a single request, across services. Because we have a single trace ID that is piped through all of our services.

Now, this only does work if you actually have application-level instrumentation for profiling as well, because the profiler needs to know about that trace ID somehow. But if you put in that work - and it's not a lot of work; as a matter of fact, this can actually be done as kind of an OpenTelemetry wrapper, so you only need to install a library and then you have all of that information automatically. And then you can jump from a distribute trace to all of the profiling data associated with that request, or whatever your trace ID represents.

**Gerhard Lazu:** So because you mentioned how Prometheus is being used not as it was designed \[unintelligible 00:47:35.05\] here's a crazy idea, and you tell me if ArcticDB would be abused if it was used for this purpose - what would happen if ArcticDB would be used to store events with arbitrary labels? Would it work?

**Frederic Branczyk:** That's exactly the use case that it's built for.

**Gerhard Lazu:** Okay. Nice.

**Frederic Branczyk:** \[47:55\] Yeah. You could absolutely use ArcticDB to store distributed tracing data, or log data. It's not something that we're focusing on ourselves right now, just because it's important for us to stay focused on continuous profiling...

**Gerhard Lazu:** Of course.

**Frederic Branczyk:** But I think the possibilities are exciting. One of the first comments that we got when we open sourced ArcticDB was "Can we use this instead of Prometheus TSDB, to solve some of the cardinality issues?" and definitely this is a possibility, but also we need to take it with a grain of salt. ArcticDB - we open sourced it the moment it started working, and Prometheus TSDB has had seven years of performance optimizations.

I think there is a possibility in the future to explore that path further, but it's definitely gonna take a while to get any sort of similar performance characteristics. And like I said, Prometheus was specifically designed for those super-low-latency queries, so the fundamental setup does mean that Prometheus should always outperform ArcticDB... But ArcticDB I think can get pretty close because of the couple of tricks that we're doing with the data.

**Gerhard Lazu:** Hm. So let me see if I got this right. Prometheus was optimized for metrics, ArcticDB is optimized in build, for events.

**Frederic Branczyk:** I don't know if I would even call it events. It's really just tagged data, whatever that means to you. I work with a couple of people who want to store super-high cardinality data that they're grabbing from eBPF, and this is totally possible. There's no existing type of data that could be used to describe this; it's just super-high cardinality data that you want to search by a label-based system.

**Gerhard Lazu:** One last question before we move from the ArcticDB topic - well, kind of... Is there a single process of ArcticDB -- I mean, so first of all, it is embedded. That's something that you mentioned, and that is important.

**Frederic Branczyk:** Yeah.

**Gerhard Lazu:** Does it have any primitives when it comes to clustering? Does it understand the cluster of processes that have ArcticDB embedded?

**Frederic Branczyk:** So that's something that we're building for Polar Signals Cloud right now, and it's possible that we'll open source this in the future. The reality is we're a business, we need to at some point start making some money, right?

**Gerhard Lazu:** Of course, of course.

**Frederic Branczyk:** So it's just something that we haven't spent too much time on, but it's definitely a path that we wanna keep open. And I think it's inevitable that we'll probably do this eventually. Like I said, it's just something that we purely need in order to run Polar Signals Cloud today, so that's why we're building it, and then we'll see what we'll do potentially in the open source community.

**Gerhard Lazu:** Before we talk about the Polar Signals Cloud, I would like to cover some of the shout-outs for ArcticDB, because I've seen that you've collaborated with a lot of people on this... So it's not just you coming up with a crazy idea and seeing how it works...

**Frederic Branczyk:** No, absolutely not.

**Gerhard Lazu:** So you've mentioned some amazing people... The one which I would like to start with is Tyler Neely. I didn't even know about him until you mentioned him. He's been building Rust databases since 2014 - Sled, and Rio - so he has a lot of experience. I was watching one of his FOSDEM talks from 2020... He's smart.

**Frederic Branczyk:** My God... \[unintelligible 00:51:33.13\]

**Gerhard Lazu:** Like genius smart, sort of...

**Frederic Branczyk:** Yes.

**Gerhard Lazu:** So tell us more about the people that you collaborated on ArcticDB, at least the ideas.

**Frederic Branczyk:** Yeah. Let's start with Tyler, actually. So I've known Tyler for six years, seven years almost... He actually rented a desk from us at CoreOS times, in the CoreOS Berlin office... And he was already -- he had some history at Mesosphere, working on Zookeeper as well... And yeah, just any crazy distributed system or high-performance databases that you can think of, he's had his hands in somehow.

\[52:12\] I'm also friends with Tyler, I like to go for a coffee with him or something, and we just have common interests. I was talking to him that we're thinking about building this new database, with these kinds of characteristics, and I'm not sure about our model for transactions. So we just spent kind of several hours together, discussing various isolation and consistency mechanisms... And ultimately, what we ended up implementing is 100% his idea.

**Gerhard Lazu:** Wow...

**Frederic Branczyk:** So like I said - sure, we might have written the code, but Tyler was the person who came up with the mechanism. So yeah, huge shout-out to him for that.

I guess the next one we definitely need to mention are Paul Dix and Andrew Lamb from InfluxDB. Basically, they're building something very similar in Rust. Actually, they've been building it for much longer than we have... \[laughs\] So they were kind of vital, and they were very generous in sharing their experience of what they're building, which is InfluxDB IOx. It's kind of their next-generation columnar database for \[unintelligible 00:53:24.12\] and they essentially have something super-similar with the dynamic columns, and they're also building on top of Apache Arrow and Apache Parquet... So a lot of the foundational pieces are extremely similar, and like I said, they were super-generous in sharing their experience, because we definitely would not be here this soon, this quickly, in this kind of quality if they hadn't shared all of that experience.

**Gerhard Lazu:** Yeah. This is it, right? This is the secret to great teams and great products, and great open source projects - great people coming together over coffee, or a meal, sharing ideas, and then the best ones win, always. And the bad ones eventually go away. There's lots, lots of bad ideas, and there's a lot of fun to be had... So they are important, but it's always amazing people coming together and creating something amazing, and then putting it out there, and see what happens. I love that. You also mention Achille Roussel from Segment...

**Frederic Branczyk:** Oh, yeah.

**Gerhard Lazu:** That was another shout-out. And Julien Pivotto from the Prometheus team.

**Frederic Branczyk:** Yeah, so I've never actually spoken to him in-person, but I've spoken to other people at Segment. I think it's pronounced Achille. So Achille is an incredible engineer. He's put together most of the Parquet Go library that we're using under the hood. And it was kind of a collaboration... In January I was doing research of which Parquet libraries are out there, and I wanna say I might have tweeted it, or something like that, and then Achille was like "I've got something for you." At that point the library was actually still closed source. Just Segment was working on it by themselves. Then they kind of open sourced it, and we've had a super-tight collaboration. I wanna say I've done 20 pull requests myself against this library by now, and they're just -- it's a very, very fine piece of engineering. Huge shout-out. The APIs are just super-thought-through. The performance is just incredible. ArcticDB would be nowhere if it wasn't for that work. Listeners, don't take away anything else from this conversation; just check out that library. I'm a huge fan.

**Gerhard Lazu:** Right. We'll put it in the show notes, because that sounds like a very important one. Okay, okay.

**Frederic Branczyk:** Yeah.

**Gerhard Lazu:** So for those that stuck with us to this point, we need to talk about the Polar Signals Cloud, because I'm sure that you want to hear about it. So what is the Polar Signals Cloud? Tell us about it.

**Frederic Branczyk:** In essence, Polar Signals Cloud is hosted Parca. \[laughs\]

**Gerhard Lazu:** Okay.

**Frederic Branczyk:** \[56:09\] Basically, it's kind of the classic SaaS model. You wanna reap all of the benefits of continuous profiling, you understand that it's useful, but you don't wanna have to maintain the backend system, the APIs, uptimes, storage efficiency and all of that... Running a distributed database... All of those things. So basically, the entire experience of Polar Signals Cloud is you just deploy the Parca Agent on your Kubernetes cluster, you point it at Polar Signals Cloud, and you're automatically profiling your entire infrastructure, just like that. There's nothing else that you need to do. So yeah, that's the product that we're currently working on. It's not generally available yet; we trialing it with a couple of early beta customers... But yeah, if there are any listeners that think that they'd be a particularly good case study for us, please reach out. You can sign up on our website; we'll get an email that you've signed up, and we can chat and figure out if it makes sense.

**Gerhard Lazu:** Yeah. I really like that simplicity of just setting up the Agent, and you have it all. I remember from when I used to set up Prometheus and Grafana on Kubernetes, and managing them, the upgrades and all that... It's not difficult, but it's an extra thing that you have to do. And sometimes there's higher-value things that you may want to do instead. Different use cases, different setups...

I remember when we made the switch, and what a big difference that made. I remember when we set up the Honeycomb agent, because you can't install Honeycomb, the UI and the server, and just use it as a service... And I really enjoyed that experience, I have to say.

Parca - I remember when I set everything up, and I was thinking, "Huh, I wish there was just the agent." Episode 33, remember? And we had the server, and the UI, we talked about memory, we talked about a bunch of things... And now you have it, six months later, you're trialing it... It's amazing to see that.

My most important take-away from our conversations, Frederic - I usually ask the guests, but this time I'll go first, because I think it's so important to mention this... It's how much I enjoy our interactions at like a very basic level, person-to-person. I really enjoy seeing the journey that you're on, yourself, with the company, with the people that work with you, and get excited about your ideas, and they see things the way you see things. And it's been amazing to watch that as a bystander.

Every six months, or every few months, actually - it hasn't been that long - when I check in, there's always something new and exciting that you have out there. Shipping ArcticDB was such a huge achievement. Seeing you at KubeCon EU, the excitement that was generated - it was great to see, and you're still such a small team. So that story, from a human, one-to-one, to a team, to a product, to a company - it's been great to watch. And great people do great things, I don't know. It may sound a bit cliché, but it is what it is. There's no secrets. If you truly believe, if you're aligned, and everything, like what you say, and what you do, and what you think, they're all the same, the sky is the limit. It's been great seeing that come together. And Polar Signals Cloud - I'm really looking forward to trying it out, because I've seen what the world looked like before, and I wanna see what it looks like after, and I have a good feeling about this... So let's see how well it works in practice. I have no doubts, but I still wanna see it.

**Frederic Branczyk:** Yeah.

**Gerhard Lazu:** \[59:54\] So what about your key take-away for the audience? You mentioned about the people a little bit, but ArcticDB \[unintelligible 00:59:58.10\] but maybe first, what are you thinking in the next six months? Where are you going with the Polar Signals Cloud, what do you expect to happen next...? Just a few things that you can share.

**Frederic Branczyk:** Yeah, we want to GA the product. We wanna make it as accessible to anyone who wants to, as much as we can. Like you said, it'll really only take deploying the agent and you're automatically profiling your entire infrastructure.

That said, we wanna make sure -- because profiling is one of those... It's kind of like with any other data problem. If people don't trust the data, that's a huge problem. People lose confidence in a product very quickly when that happens. So we wanna be careful that when we do make the product generally available, that it is very solid and that people can rely, depend on it, and trust it, most importantly.

So yeah, that's kind of our mission for all of this year, let's say. And then, after that we'll see; there's definitely a lot of -- there's so much opportunity to build things on top of continuous profiling. There are very exciting things that you can do with this data, that isn't just as a human analyzing this data.

But yeah, just kind of going back to what you were saying - I don't think I realized it as much before going into this call, but because you and I have been kind of checking in every six months or so, it's just mind-blowing to kind of check in on the growth of the company, of the people, of the project... Because I'm very close to all of it, so I don't necessarily see -- I see small changes, but if I then look back six months and think about all of the things that we achieved, I'm just blown away.

Yeah, I couldn't decide whether that is my top thing, or something that we kept on bringing up about ArcticDB is kind of how important community is, and how important is leveraging your network, but also... I think whenever I talk about that, I also have to talk about sharing your network. That's the most powerful thing you can possibly do to someone else - give people access to your network. It'll put their careers or their projects or whatever it is on hyperspeed. I think that's something I learned early on in my career, and in both directions it's helped me tremendously, but I also try to give it onwards as much as I can.

**Gerhard Lazu:** That's a good one, that's a good one. Well, Frederic, I will definitely check in again in six months' time, but what I would like to do is keep in closer contact, because I'm seeing some of the amazing things that you're building, and six months - it's almost like we're not doing justice to all the amazing things that come out of Polar Signals, the connections that you make, the ideas that you generate... And I think I would like to share a bit more of that, because there's a lot of amazing stuff going on. And I think time - that's the only limit. There's only so many hours in the day, and there's only your attention and your mindshare is limited, but definitely worth it. So thank you for joining me here today, and thank you for sharing all the wonderful things, and I'm looking forward to what you do next. It'll be great, I'm sure, but... Thank you, Frederic.

**Frederic Branczyk:** Thank you for having me... Again.
