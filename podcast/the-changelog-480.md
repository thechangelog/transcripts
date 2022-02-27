**Jerod Santo:** So we are joined by Annie Sexton, a UX engineer at Render and the author of a very interesting blog post recently, "Git Organized: A Better Git Flow." Annie, thanks for coming on the show.

**Annie Sexton:** Yeah, thanks for having me.

**Jerod Santo:** So a better Git flow... I think we all have an idea about how to flow with our Git processes... And some could be better or worse, or it works for me, but it may not work for you... It's an interesting topic of conversation. But really, it comes down to communicating and collaborating. There's lots of things, like "Who am I serving here? Who is this for? How do I do it? How do we do it together? How do we get on the same page?" I'm curious how you came -- we're gonna talk about the nitty-gritty details of this particular process and how it compares to other ways that you can Git... But I'm curious how you came to this process, what your process was to land here and think "I've gotta write about this."

**Annie Sexton:** Yeah, well it really started with a co-worker of mine making some comments about some PRs that I was making... And he offered some advice about doing Git differently. And up until that point, I really hadn't had a lot of coaching around Git, aside from just the basics... And it made me realize that there was a lot of things that I didn't understand about Git, and it was a lot less scary than I expected it to be... And it opened up this great conversation where he introduced me to his method of cleaning up his commits; although our techniques differ a little bit, he tends to rely more on using rebase interactive, rather than just like a full-on reset... But through teaching me all these elements of Git, it introduced me to this new way of approaching Git flow that is way less stressful, and also results in a much cleaner Git history.

**Jerod Santo:** \[04:26\] So we do wanna talk about the process... I wanna go up a level for a second, because I think there's an interesting meta-game involved, with regards to tools and processes and software in general, which is opinionated versus unopinionated. It's interesting that Git is kind of unopinionated about how you use it, considering the original authorship... And sometimes there are other ecosystems or tools that are like, "Hey, there is one way to do it" or "There is one best way to do it." Go comes to mind, Python, around their PEPs, and like "This is how you write idiomatic Python." And then there's the Perl and the Ruby TMTOWTDI idea of like there is more than one way to do it, and we like that. I'm curious of your thoughts on not just Git, because you can use Git in many different ways; in fact, I think the Linux kernel team - they still email patches around to each other, and stuff...

**Annie Sexton:** Yeah.

**Jerod Santo:** ...to a certain degree. But do you like the flexibility it provides? If there was only one way to use Git, we wouldn't have to even have this conversation, or your blog posts, where like "This is just how you do it, is this way." But instead, there's flexibility, which some people like, but also now we have to decide how to use it. I'm just curious what you think about that trade-off.

**Annie Sexton:** Yeah, I've thought a lot about this, because -- I'm gonna use a comparison. So I'm a full-stack developer, really, but the two frameworks that I am most used to are React and then Rails. And those are kind of two ends of the spectrum as far as opinionated stuff goes, like how much structure do you get right out of the box. So with Rails, you do things the Rails way. Ruby - yes, there's lots of flexibility, but with Rails there's a way you do things; you have the MVC flow, and that's what you do. Whereas with React, I would say you have pretty simple concepts, and as a result, many React apps - there's so many different ways of structuring them. And it can be quite intimidating when you're joining a new team, and being introduced to a new React app that you're not familiar with, because everyone can do it differently. So you get more control with that.

Once you're actually more familiar with the codebase and you're the one in the driver's seat making these decisions, then I think that flexibility can be really empowering... But sometimes it can be quite overwhelming, because if there's not a precedent already set, then that can be a challenging task.

Luckily, I do think that Git is old enough that many, many people, many veterans of Git have tested it a lot of different ways, tried it different ways, and have some really valuable workflows that people can rely on... But it's still flexible enough that people can do it other ways if they want to. So I think -- I tend to like to know how things work under the hood. I don't love when things just sort of magically work, and I think that's actually what made Git so intimidating for the longest time, is because there was just a lot under the hood that I didn't understand... And that's not to say that I am now a Git expert by any stretch, but I know a lot more than I did then.

I think when you're able to -- when you're just getting starting, having some basic, obviously knowledge about Git, but also practices that other people have tried and tested, can really help minimize the need to get super into the weeds... But then when you start to run into problems and you gain more experience with it, having that extra knowledge about how things work behind the scenes is really valuable.

**Adam Stacoviak:** \[08:11\] I will say that Git can be very, very intimidating. I was once on a team -- this is back in the day, I was still remote, too... It was Change Healthcare, the company I was working with; I was a contractor, and I was definitely not an engineer. I was definitely designer UX. Not to say that those folks don't get deep into Git, but -- I committed code, but I was mostly a frontender. This is probably 2007-2008... Or 2010 maybe, I don't know. I don't know the exact year, but it was early Git days. So even my knowledge around Git was still young then. I had to rebase often, I'm like "Oh my gosh, am I diverging somehow from the master branch? Oh my gosh, where am I at?" and I'd have to call in error support... And this was before Zoom. I think we actually did remote meetings with like GoToMeeting, or something like that, and I had to screenshare... That's how back in the day this was.

And I would just get into situations where I'm like "I just wanna commit my code. I just wanna get my code into the repo and move along with my day", because all my cognitive load and all my brain was on this Git flow, versus my actual job, which was marking up the form, making sure it worked, making sure the markup was right and the styles are right, and nothing would break on mobile, and different stuff like that. I was totally outside of my job's perspective, just trying to commit code. And it's such an intimidating thing when you're in that position, when you're like "You know what - I just wanna get my code committed."

**Jerod Santo:** I think unless you're Linus, or maybe you predate Git and you were using CVS, or using SVN, and then you decided to switch to Git - unless you're one of those elder statespeople of our community, pretty much all of us have to use Git before we're gonna understand Git. Nobody has a four-year degree in Git and then they start coding, right? You're coding, and then you're like "I need to share this. I just wanna get it out there." So almost all of us start just by memorizing a handful of things that you can do, and having no idea how it works.

**Adam Stacoviak:** Yeah.

**Jerod Santo:** And just like "Here's this incantation", and then when this messes up... And the design, the API of the command line tool - somewhat obtuse. It's gotten better over the years. It used to be very unintuitive how you would for instance delete a remote branch I still don't know why... There's a reason for that, I'm sure. But yeah, as you use it, first you start off just memorizing the commands, then you start emulating people who have been around longer, and then you start to kind of understand how it works, and it does become less intimidating, but you still aren't sure if you're using it right.

**Annie Sexton:** Right.

**Jerod Santo:** I've been using it since it came out... Actually, SVN was more intimidating to me than Git was... Because I kind of learned Git as I started programming. I just had the right timing in my career, and I had to do some SVN stuff, because I was making WordPress plugins, and I'm like, "This thing is intimidating..." But I've had enough experience with Git, probably -- however many years it's been publicly available... And I still question whether I'm using it right.

**Adam Stacoviak:** Totally. I'm always in the docs, man... How do I revert that, again? What's the syntax to do it? It always seems to jump around and I have to consult the docs for Git constantly.

**Annie Sexton:** Absolutely.

**Jerod Santo:** So the standard, typical -- now that GitHub is established and most of us are doing PRs, or if you're on GitLab you're doing MRs (merge requests), kind of a standard flow for a feature or even bug production... Bug production - that's what most of us do on accident. \[laughter\] It's a feature branch, but I've got bugs alongside. I remember I made an image one time of -- it was a meme I was trying to get going... It was like a ship that was shipping a ship... Not a cargo ship, but an airplane. Have you ever seen those -- they're carrying a little one on top maybe it was a rocket on top, or something...

**Adam Stacoviak:** Oh, yeah.

**Jerod Santo:** \[12:05\] And it was like -- the big one that was flying was like the feature that you're shipping, and then the little one along for the ride was the bug that you're shipping alongside, just because, like, it's there. So yeah, we have bug production... But the typical flow is I'm on my main branch, I'm ready to start my feature, I create a feature branch, I check it out, so now I'm there... And I go about, I do some things, I make a commit, I describe what I did, I do some more things, I make a commit, I describe what I did. Maybe I have two of those, and then I get back on the main... Or maybe I have 27, because it's been a long-standing deal, and maybe I've rebased it along the way... Who knows what I've done. But I've had these commits, commits, commits, and then it's time for a pull request, and I merge back onto the main branch. And that's pretty standard. There are other ways of doing it, and people that don't do it that way, but that's what you're typically gonna see out there.

So when you talk about this better Git flow that you describe in your post, Annie, it's better than that, is what you're saying. So let's start with saying, that flow right there - what are some of its drawbacks? Why is it not always ideal?

**Annie Sexton:** Well, one of the issues is that it's much riskier to roll back commits, especially if your commits aren't as tidy as they could be... You know, when you have that sneaky little bug that's piggybacking on top of another commit that you didn't realize was there... When you roll things back, then all of a sudden you might be also breaking other things, that if your Git commits aren't as self-contained as they ought to be, that can be really problematic, because you can roll things back, and maybe you fix the bug, but then you introduce a new issue, because something else was depending on the code that you just committed. So that can be problematic.

I actually think that more importantly what makes this flow better is for PRs, the actual review process. For most of my career, I've hated doing reviews on PRs, because it's code that somebody else wrote and I don't understand exactly how everything is connected... Especially if there's a ton of files, and they don't give you a very good description of what's actually happening, their commits aren't actually broken up into logical steps, because they just committed to save the work. So some things are sort of half finished between commits, and that can be kind of overwhelming to review. It's possible, obviously, but it's not the nicest process. So what I like about this Git flow is that it introduces a way to keep your Git commits really clean, so that they are easy to revert and easy to review.

**Adam Stacoviak:** So in like a pull request then with this kind of flow, would you - and Jerod, in our case... I'm looking at PR \#400, "Move assets to S3", the most recent one... So in this case -- and you may not have this as a reference, but it's just a pull request and you can kind of see the atomic commits over time from Jerod and Gerhard essentially committing code to our repository that moves our assets from a local disk to S3 as part of the process. So in this case, would you then just -- with all those atomic commits over time, by going the reset route, would those be gone?

**Jerod Santo:** Well, hold on, she hasn't described the new way yet.

**Adam Stacoviak:** Oh, okay. Sorry. I'm jumping ahead. My bad.

**Annie Sexton:** \[laughs\]

**Jerod Santo:** So those are the two things... Reverting is problematic because you might actually revert something that you didn't think you were going to, because the commits are messy, and over time -- especially the longer you do a thing, you end up doing things that aren't core to that feature; they're just tangential. And then the code review is the same problem that manifests in a different way, which is like there's just more things in there. And that's probably the way that that pull request you're looking at, Adam, goes.

**Adam Stacoviak:** Yeah.

**Jerod Santo:** \[16:07\] But now describe this other way, so at least we'll have both methods on the table. Then we can discuss the differences. So how do you propose, or how are you doing it these days, that you learned from Dan?

**Annie Sexton:** Sure. So what I do these days is when I am developing a feature, fixing a bug, Git is really not something I'm thinking about too often. The first stage is just fix the thing, make the feature; along the way I still wanna save my work, obviously, and push up to a feature branch, but I tend to just always commit things with a WIP (work in progress) message, and that's it. I don't try and describe what I was doing, because all of that I intend to just completely rewrite.

So build the feature, do the thing, and then when you're ready -- and I actually didn't list this in the article, but... So the next step would be to do a reset to origin main, or origin master. I tend to do a git fetch and then I rebase on top of master... Just a plain rebase, not interactive, just so I know that I have the most up to date version of code that I'm building off of, and then from there, I will reset origin master.

Now, with reset, without any parameters aside from the branch that you're resetting from, it doesn't change your working tree, so all of your files stay intact. Reset was always really intimidating to me... I think I was coached back in the day that things are irreversible if you use reset, and it's super-dangerous... And it's not. It's really not. There's actually very few things in Git that you can't undo.

**Jerod Santo:** Yeah, it's almost always in there.

**Annie Sexton:** Yeah, it's in there. Because it's an append-only database, so...

**Jerod Santo:** Right.

**Annie Sexton:** So that's a huge relief. So I do want my work in progress commits, then I do a reset, which basically makes it look like you've just made all of your changes all in one go, without ever making a single commit. And then, you can go through and pick out which files seem to go together the best, and just group your changes into logical commits. And especially if you have an editor that makes this a lot easier, I think that -- I use VS Code and it's quite easy to just click through the files that I've changed, see the changes and verify that they should be grouped together, and then I make individual commits saying exactly what I did.

So it's as if I was a perfect person and I knew exactly what I was gonna build, every single line, and I committed them one after the other, as if I was like a robot, or something... \[laughter\] So it's quite nice, actually... The end result is a very, very tidy and well-organized Git history. But what I love about this is that they're completely separate tasks. When I'm in development mode, I'm in development mode, and I'm just problem-solving, and I don't have to switch mentally to thinking about Git as well, because all of that gets taken care of later. So that's personally why I really prefer this reset method.

**Jerod Santo:** Yeah. So this is where Richard Hipp, who's the author of Fossil, would say you're basically lying to everybody. You're going through and you're tidying up history that wasn't there, and you're rewriting history... Because in Fossil, every commit that you commit is immediately shared over the network with everybody else. There's no hiding anything. Now, you can go back and change things and append new things that fix other things. But he/they believe in "Let it all out there", which - I'm more on your side; I like to prepare myself. I'm like, "I'm gonna get cleaned up before I go to the restaurant."

So that's very interesting. That now comes into the conversation that Adam was getting into with collaboration, because you have this feature branch along the way... And this is pushed remote, I assume. You're not keeping that on your laptop, right? No, you aren't, or yes, you aren't? I asked it in a weird way.

**Annie Sexton:** Oh, I am pushing it to a remote branch.

**Jerod Santo:** You're sharing. Okay. I asked in a double-negative fashion...

**Annie Sexton:** Sorry... \[laughs\]

**Jerod Santo:** \[20:19\] No, I'm sorry. So it is shared... And then when it comes time to open a PR then, are you force-pushing -- like, is that branch only there so that it exists in more than one place, or is there collaboration along the way during these WIP commits, or are they just for you?

**Annie Sexton:** The WIP commits are just for me. When I push up to the feature branch, sometimes I do have -- but I am pretty comfortable doing a forced push, because that's usually when I have gone through and made my cleaner commits afterwards. So there's no harm in doing that way.

**Adam Stacoviak:** --force is so scary...

**Annie Sexton:** I've gotten a lot less intimidated by it since doing it this way, because I know exactly what I'm changing...

**Jerod Santo:** Sure.

**Adam Stacoviak:** It comes down to knowing how Git works, and knowing that and being comfortable. Because if you have a scalpel and you don't know it's sharp, you can cut somebody, right? You're still holding the same object. It could be a dull scalpal it could be a sharp one but if you don't know how sharp it is, then you can still do some damage.

**Annie Sexton:** Right.

**Adam Stacoviak:** Then if you're using a forced push in this case -- so essentially this forces a rewrite to the remote repository, and that forces everybody else who tracks that repository to adhere to whatever you... Like, you kind of revert some things. Does it only happen in the branch then?

**Annie Sexton:** Yeah, it only happens in the branch. It's just the branch. That's why it's pretty harmless.

**Adam Stacoviak:** So if you're only doing that to a branch, it's different then... Because if you're doing a --force on master or main...

**Annie Sexton:** No, I would not do that... \[laughs\]

**Jerod Santo:** Right, right, right.

**Adam Stacoviak:** Somebody's upset.

**Jerod Santo:** Yeah, a lot of people are upset. So --force is there for a reason... So as long as we know why you're wielding that scalpel, and you're doing it to precisely do what you want to do, it's totally fine. And in the case of a remote branch that's there merely for you to not have a single point of failure - it's there so that you can work on it elsewhere or whatever, but it's still just Annie's code, she's working on this feature, and if you go and look at it, you're gonna see a bunch of WIP commits that are just like "Okay..." You're not going to collaborate on that.

But once you get to the point where you've done all of that, you've done all your reset - which by the way, I learned about this use of reset from this post, so thank you. Like I said, I've been using Git for many years... But I've only ever used Git reset to unstage some stuff. I can't remember what I used it for. But this is like all the commits that you did between when you forked -- not forked; when you branched, and what's there now, assuming you've rebased, so you have the latest... All those commits "disappear" and everything goes on stage, but all your changes are right there.

**Annie Sexton:** Right.

**Jerod Santo:** So it's like, your code is still changed, but your history is now "gone", it's hidden, and you can recommit it logically, and it's a beautiful thing. You basically cleaned up your room, and got dressed, and now you're ready for the world to see your stuff.

**Annie Sexton:** Right. And I would say that -- because I've heard some people complain that "Well, that sort of defeats the purpose of having those point in time commits to track exactly actually what happened." And I would say "Well, what's the point of having those early timestamps?" Because they don't actually serve your teammates. What actually helps your teammates understand and navigate the changes that were made is when they are actually properly organized. So the fact that you sort of like "erased" (I'm using quotation marks) those old commits...

**Adam Stacoviak:** For Richard's sake, yes. Erasing the history.

**Jerod Santo:** I was also doing air quotes, and I forgot to say it out loud, because you're watching me, but...

**Annie Sexton:** Right. \[laughs\] You know, the fact that you "erased" those old commits doesn't actually change how other people will interact with the code. In fact, it makes it a lot easier. Because the fact that you did at a certain point in time I would argue doesn't really matter as much as the changes that you actually made, and then the order that they were committed. The order is really what matters. And so when you know that, and as long as you're committing them in an appropriate order, where you're not leaving the code in a broken state, then you're still keeping the repository in a clean state that's easy to review, and easy to manage for other teammates as well.

**Break:** \[24:40\]

**Adam Stacoviak:** So Annie, I've mentioned somewhat prematurely this pull request that we have out there, [pull request \#400](https://github.com/thechangelog/changelog.com/pull/400) on our main repository. So if you go to GitHub user thechangelog/changelog.com (that's the repo), and then pull request \#400 on it, you can track along with that. We'll also have a link in the show notes. But this is a pull request recently -- and hey, by the way, we talked about this on Ship It \#40, our Kaizen episode. If you haven't listened to Ship It yet, that's a great episode to begin at. We talk about the behind-the-scenes here at Changelog and how we actually improve our infrastructure and platform, and this is part of that.

So we talked about moving our assets to S3, that's pull request \#400... And what this pull request has is an opening commit and comment from Jerod saying kind of what we're doing with this pull request, stating the case. And then along the way you see -- and because I know Gerhard and Jerod did not use your Git flow, I know that these are atomic commits in the, I guess, normal fashion Jerod had mentioned in part one. So what you see here is you see a collaboration between Gerhard adding commits that add Crossplane features to our Linode provider, and then all down the line; you see different comments and commits, you see Jerod's atomic commits on dropping Waffle to replace Ark, and a bunch of other stuff that essentially make us move our local assets from a disk at Linode to S3.

And what I'm curious of, since I know that it nulls your flow, and we talk about collaboration with the pull requests, because in a lot of cases you do have a lot of collaboration. Sometimes they're single individuals committing and it's just a review; so it might be you committing a feature and your teammates coming on, and you wanna organize things so it's easier for them to do the review, because that's never fun to do, organize a review...

So how does collaboration happen? So if this is an example of non-Annie workflow, if we can call it that, let's just say... If we know it's not that, how do we then collaborate in your style? How does it change?

**Annie Sexton:** So I think that the reset method that I outlined could technically work for this. It might be a little trickier, because as I've said before, when you're cleaning things up, you're doing that forced push to clean up your feature branch. And I think that can get tricky when you're collaborating with other people. Now, the way that I have collaborated with others is we just each keep our own branches and they exist on GitHub as completely separate branches, and we might reference our branches and pull requests in another pull request, and so we have a conversation there... But I think that actually maybe a rebase interactive might make it a little easier. It's still the same sort of principle, where you clean up your commits afterwards, but doing a rebase interactive might make it a little bit easier when you're -- because it sounds like you guys are working on the same branch, is that right? Or two people were working on the same branch?

**Jerod Santo:** Yes, so let me describe how this went down. So you'll notice, for people who are paying close attention and actually click through to the URL, that if you look at the commit list, which there's 31 commits on this, the first commit is on January 16th, 2022, and if you look at when I opened the pull request, I opened it on November 29th, 2021. So there's definitely some rewriting going on at some point anyways...

**Adam Stacoviak:** Yeah...

**Jerod Santo:** I think you can see how it's like Jerod authored and Gerhard committed... So somehow Gerhard did something that changed the timestamps around anyways... But the way that I generally work - and this is a feature that I put in 90% of the work, opened up the pull request, and the rest of the work was like "Now we need to kind of reconfigure and change some environment variables and some part of our infrastructure deployment stuff before we merge this, so that it'll go out smoothly."

\[31:51\] So I did the feature, and then Gerhard came in later and kind of did the end things... And if you scroll to the bottom of the commit list you'll see it's pretty much Gerhard by himself doing some stuff. And I'm not actually sure how you do those Jerod Santo authored and Gerhard committed... It's like a sign-off or something you can do inside Git, and somehow GitHub is doing a good job of describing that... But the way I work is actually somewhat similar to the way that you're describing, until I get the pull request open. And then I just kind of go chronological from there. That's where I was confused with this process. Once you've shared, and I assume there's gonna be follow-up commits based on code review, maybe you have a teammate who's like "Hey, I'll hop in and do something..." And I guess once you do your reset and your rewrite and you get it all logically awesome, and submit it for code review - from that point on, do you just do commits naturally and push them to the branch? Or are you still going to do a reset at the very end when it's time to merge?

**Annie Sexton:** Um, it depends on what changes I'm making. If it's a "Hm, we really need to rethink how we're designing this component" or if it's a simple "Oops, there's a typo." If there's a typo, let's do a Git commit amend, honestly...

**Jerod Santo:** So you're force-pushing all the time.

**Annie Sexton:** I mean, if I'm the only one making the changes and no one else is making commits to this branch, I don't think it matters that much. But if other people are making commits, that's a little bit different.

**Adam Stacoviak:** Right. If you know there's collaboration, you can't do forced, because that really would ruin their branch. They would be divergent to the branch at that point because it wouldn't match up.

**Annie Sexton:** Exactly. I mean, you could still do it; you would just have to --

**Jerod Santo:** It would work. It just causes more pain for them.

**Annie Sexton:** It does. So it's a matter of how much do you need to rewrite, how much are you collaborating, how much is the work shared between two people? Because if somebody else -- if there's quite a bit of work that is shared, then you'll probably wanna do fewer forces; and if you do forced pushes, you have to stay in communication with each other. So it's a matter of -- you know, do you work in different timezones, or it's the same time of day, you're on Slack at the same time, so you can just be like "Hey, by the way, I did a forced push. You're gonna have to do this."

So I think it all sort of depends on how closely are you communicating with your collaborators; is it super-asynchronous communication? If so, then you might wanna be a little more considerate about the commits that you make... Because you're right, force-pushing can be quite extreme when somebody else is also touching that same branch. So it really depends on how you're working together and what they're willing to do.

Sometimes a force is just absolutely necessary and you can just let them know... But I think a rebase would be a good way of more delicately handling these. It does require a little more tweaking and knowing exactly what to do when you're doing an interactive rebase, to say like "Fix up this, squash this, rearrange these things." But even then, I think that can still -- I don't think that would result in a forced push, but... But that can help, I would say.

So a lot of people have brought up "You can use rebasing as an alternative", and I think this is actually a really good use case for when you might actually wanna use rebasing instead of like a full reset.

**Adam Stacoviak:** Let's play a little game then... Let's imagine we're a collaborator with Annie on a pull request, and for some reason she has to do a forced push. What then -- and Jerod, I'll say what I think, and we'll see who's Git flow is better. Yours may be better. Let's assume we're the collaborator. We're on the same branch and are collaborating, and she has to do a forced push. And she messages me in Slack and she says "Hey Adam, sorry, I did a forced push." I think what I would do then is if I had some --

**Jerod Santo:** Throw a temper tantrum...

**Annie Sexton:** \[laughs\]

**Adam Stacoviak:** \[35:49\] Well, I might be upset, but if you know your Git, then maybe there is no tantrum. It's just more like a blip of cognitive shift to get my Git right, and then get back to my -- I'm gonna just keep saying Git... I'm gonna get my Git stuff back in order.

But I think what I would do then is if I've got some -- let's just say I've got my own WIPs locally... If I know she's got a forced out there and I've gotta essentially consume what she's got because I'm out of sync, I would probably maybe keep my work in progress commits... I essentially wanna rebase her branch. I wanna have my changes in place; probably commit all my changes, even WIPs or actual messages, get all my stuff staged actually in my commit log, and then I wanna rebase that branch back locally, all my changes back onto hers. That's essentially how you deal with a forced, right?

**Annie Sexton:** Yeah.

**Adam Stacoviak:** Because otherwise, if I didn't do that, Git would yell when I'd try to push to that branch and say -- I don't even know what it would say. It'd probably say I'm out of sync, or I'm ahead, or I'm behind, or something like that, from the head of the branch. Is that how you would do it, Jerod? Did I win?

**Jerod Santo:** Likely. How do you win if we're both gonna do the same thing?

**Adam Stacoviak:** Well, is that the right way? Since you could probably do it different ways, how would you do it?

**Jerod Santo:** Well, another way you could do it is basically unstage your WIPs and stash them, and pull, and then unstash. I do that a lot... I'll just stash, pull, or rebase if you have to, and then unstash... Because if those are WIPs anyways, you don't care about the history of those commits.

**Adam Stacoviak:** Right, right. You could do the reset back to the SHA using Annie's method, back to a known SHA prior to Annie's current head on the branch. Then you could make one gigantic commit of that. Maybe a massive WIP versus many WIPs, right?

**Jerod Santo:** Sure.

**Adam Stacoviak:** Do another rebase off of her branch; you've got that. Or you could do the stash. See, that's the thing with Git - if you know the different tools and how they work, you can get more comfortable. That's why I wanted to play this little game, because there's like probably 3-4 different ways, and none of them are right. They all work, they all get you back to work. It's a matter of which tool you're most comfortable with, which can you do quickly, so that Annie's interruption cognitively doesn't shift you away from your work.

**Annie Sexton:** Right, exactly. And this is actually -- I think this brings up a question of "What's the best way to collaborate at all?" Is it always that you're on the same branch? Because in situations like this, it depends on if you're touching the same files, then it can be a little bit tricky... But if you're not, I think that there's always a benefit in just having completely separate branches.

**Jerod Santo:** I've never done that before, so this is a new thought process to me. I don't see why it wouldn't be good, I just had never done it that way.

**Annie Sexton:** When you're touching the same files it can be tricky, and I would probably reevaluate who's doing what...

**Jerod Santo:** Your life...

**Annie Sexton:** \[laughs\] Try to reevaluate if this is better left to one person, or if it really needs to be collaborated on by two people... But if you're touching relatively different files, then just creating different branches and merging them in separately - that also saves you a lot of the headache of "What happens if I force-push?" I know a lot of people have opinions about not force-pushing, and they're welcome to those opinions.

**Jerod Santo:** My opinion is once you have more than one person pushing to the same branch, you should be done with your force-pushing.

**Annie Sexton:** Right, exactly.

**Jerod Santo:** Just because it's causing them more work if you're doing that. I have no problem with it if you're on your own branch.

**Adam Stacoviak:** Yeah, same with me. I mean, I'll forced push all day long to my own repos, because there ain't anybody there to get upset. \[laughs\]

**Jerod Santo:** That's right. Pushing nobody around.

**Adam Stacoviak:** That's right.

**Jerod Santo:** So most of the collaboration that I do on small teams - our teams are like one, two, sometimes three people. And I know there's people that work on larger teams and collaboration is harder amongst more people, so I'm not sure how those processes scale... But most of what we do is tag team. So it's kind of like I do some commits, the pull request is open or something, and we talk about it, and then it's kind of like "tag your it", and so now here comes Cody is another collaborator of ours. He did a lot of the UI of things that I would build the backend for, to create a full-stack developer between the two of us... And it's like, "Hey, your turn. Let me know when you're done doing some stuff." And then he works on that same branch for a while, and then he says "Passing it back to you", and then I pull, and work...

\[40:22\] That's how a lot of my collaboration has been, is kind of just like pass the baton, more so than like we're both working simultaneously on the same feature. So I think in that way, one branch makes a lot of sense. But if you're simultaneously collaborating on a feature, maybe different files, but you're not passing the feature back and forth - I could see where two branches, or N branches for that many collaborators is a better flow.

So tell us about the teams that you work on and how many collaborators you usually have, and what's your setup usually like.

**Annie Sexton:** Sure. So at Render we have a lot of people working on many of the different repos, and we tend to have one person per branch. I don't know that there's many people who have multiple people working on the same branch. In fact, most of the time we tend to preface our branches with our names, slash whatever feature we're working on.

**Jerod Santo:** Gotcha.

**Annie Sexton:** And in that regard, it's quite easy to keep our work separate, and there's no real mix-up. And the collaboration that we do happens more in the form of pair programming and the conversations that actually happen in the PRs. So that's what collaboration looks like. And if it's a bigger feature that can't be completed in a single branch, then -- and I'm not actually sure if we do this, but I just thought this might be an option... You can have sort of like a long-running feature branch that you then diverge from individually with. So you've got the main feature branch, and then --

**Adam Stacoviak:** Like a pseudo-main almost.

**Annie Sexton:** Right, exactly. Essentially staging, but feature-specific. So that would be another way of having people have their own branches they can manage, that they then have people review. And then you merge those into your main feature branch, if that makes sense. And that eventually that can get merged into main as well.

So that has been what collaboration has looked like in the past for me. I actually don't have much experience working directly on the same branch. It's usually been you have your own feature branch, that only touch, and if somebody else is messing with it, it's because they're helping me solve a bug that I can't crack. And then when we figure it out, then maybe they make a commit, or they just tell me what they did and then I write it.

**Jerod Santo:** I'm curious which is more common. So if you're listening and you're like "Our teams work Render style, Annie style, which is each person has their own named feature branch named after themselves, and collaborate that way, or more like the way I've described, where it's tag-teaming the same branch, and passing it back and forth or collaborating that way." Let us know in the comments or hit us up on Twitter and just send us a note, what style do you do. Because like I said, there's more than one way to do it, and this is a way that I actually haven't heard anybody elucidate in the way that you have. Apparently, totally common at Render; maybe it's totally common at a lot of shops, and it's just that we don't talk about these things all that often. So yeah, that's pretty cool.

**Adam Stacoviak:** Back to the flexibility of Git though - I think that's what makes it so cool, that it is so flexible... Back to your example, Annie, between React and Rails. You know, there's just so much you could do with it, and so I think that's why it's such a good fit and why it's actually lasted so long. Like, why it won and why it's lasted, despite reset seeming scary because of what it actually names, or the way you would delete a branch to a remote repository by pushing, and despite the odd API sometimes with Git, and some of the scary innards, it's so flexible. It lets you and your team work the way you want, other teams work the way they want. It's really about leveraging its tooling inside of Git to work the way you need to for a team to collaborate in the way that it actually works out on GitHub itself.

**Annie Sexton:** Totally. And I would say that one of the benefits of having a lot of different ways to achieve the same objective in Git is that it also means that if you screw up, there's a lot of different ways of fixing it. And that's really nice. So there's a huge relief when you start to learn more about Git, and find that it's really not as scary... It definitely can seem scary, but the complexity is really beneficial when you realize that a lot of these things are salvageable as long as you know how or you have somebody who can help you.

**Break:** \[45:02\]

**Adam Stacoviak:** So Annie, in the pre-call we talked about your Twitter bio, and I will reveal some things about you to our audience that may not know you yet, and will know you after this show, and may go to your Twitter bio and follow you... One of the things you say is React.js; that's the first thing, and then you say "ADHD brain, lover of neuroscience." And you obviously put the brain emoji there, so that's beautiful... And then UX engineer at Render, previously at Heroku. "She/her", your pronouns, some Japanese I can't read, but you can... And then opinions are your own, blah-blah-blah; and that's actually what it says, "blah-blah-blah."

So I wanna bring the neuroscience in there, because I think one outlier here that we haven't really talked about, that may not even have made it into your post, that I just looked to see if cognitive was mentioned, is the load that thinking about your commits as you make them does to a creator's brain, whether you're a frontend designer, or a full-stacker, or a backender, or API - it doesn't matter. If you're using Git, which you probably are - we've demonstrated that by this conversation - you're thinking in commits. You're thinking in code, but you're thinking in commits if you're committing back to a repository, whether it's yourself or other collaborators. How does the cognitive load tie into this -- and maybe why even call it a better workflow, a better Git flow?

**Annie Sexton:** Sure. And I would have a disclaimer - I would just say that it's better than the one that I've outlined earlier. Not that it's better than everyone's Git flow; just the simple one that I outlined in the post.

**Jerod Santo:** Right.

**Annie Sexton:** But yeah, there is a good amount of mental shifting that is required, that I think many people sort of take for granted, that happens when you're both developing a feature and also thinking about "Wait, should this be its own commit right now?" And that ability to pause and shift your focus and think about something else requires a lot of working memory, your short-term memory, and a lot of executive functioning, which if you have something like ADHD or you have another disorder that deals with executive dysfunction, then that might be a little bit difficult. And I do not speak for every neurodivergent person, but I have just found for me that that is a moment when it's advantageous to let myself just hyper-focus on writing my code first, and then worrying about how to organize that in Git later. Because that mental shifting is not something that I'm great at; it's something that I quite struggle with due to my personal brain chemistry, and as a result, I think it's great that I'm able to use this other flow that really works a lot better for my brain. And I think other people might not want to do it this way, because their brain is a little bit different. And in fact, many people responded to this post bringing up rebasing as an alternative.

Rebasing is a really great option, we've talked about it before... And I think that rebasing can actually be faster than the reset method that I've mentioned, as long as some of your commits are able to be left relatively intact. So if you have to -- the thing is, when I'm writing code, it's really difficult for me to also keep in my whether or not I should be committing at the same time. I tend to just commit just to save my work along the way, and then organize things later. But if you're able to do that little mental shift easily, and it's something you are quite practiced at and it comes naturally for you, then it's a great tool. Because the more commits you can just leave intact, the easier it's gonna be to clean up later, obviously. So that's where rebasing interactively could be a great option. But I find that for the effort that it's worth for me, in the moment, during development, it's quite disruptive. So taking this approach is a lot more manageable for a brain like mine.

**Adam Stacoviak:** \[52:14\] Can I define executive function for us, so that way we have our audience caught up on some of the neuroscience things around it?

**Annie Sexton:** Yes, sure.

**Adam Stacoviak:** So executive function - thanks to [understood.org](https://www.understood.org/articles/en/what-is-executive-function) for making this definition right there when you google "executive function", so thank you to this... This is not me bringing this out of my own memory, I'm leveraging the internet. So here we go. Executive function is a set of mental skills that include working memory, flexible thinking, and self-control.

Another post goes into deeper details, which is the seven executive functions. They include proficiency in adaptable thinking, planning, self-monitoring, self-control, working memory, time management, and organization. And as any creative, as you're thinking, these different executive functions are constantly being taxed. You may be thinking "I'm hungry", so that's self-control on like "Do you want to eat?" Self-monitoring. "Am I actually hungry?" Time management, "Is it time to eat?" All these different things that are monitors as you're just doing life. So these things get taxed by anybody.

So from your perspective then, what you're saying is when you work it's just easier for you to sort of like blaze through things without taking that time to have to stop. It keeps you in flow for you, and you can just -- maybe you have an alias where it's like "WIP" and you move along. I don't know. But whatever it is, your pauses are less -- maybe they're just as frequent, but they're not that long. So your time between creative, Git, commit, and then back to creative again is minimized.

**Annie Sexton:** Exactly. And you know, executive functioning -- the main thing that I find difficult in switching between thinking about development versus my commits is that transitioning skill. That is something that if you have ADHD, it's something that we tend to struggle with. Not with everything... So the ways in which your executive function impairments show up for everyone with ADHD is quite different. And ADHD is not the only disorder where people struggle with this. It's just the one that I'm the most familiar with. But that ability to transition is a skill that's managed in the prefrontal cortex, it's all part of your executive function skills, it relies on dopamine and norepinephrine to be able to shift that way. And if you are deficient in those abilities, then it can be quite difficult. So it's really, really great to find different ways of working with your brain, rather than expecting it to do -- work in ways that it just wasn't really built naturally for that.

**Jerod Santo:** So do your WIP commits literally just say "Work in Progress"? Or do you also -- I do this locally as well, but I'll kind of leave myself breadcrumbs, to a certain degree. I actually do it less efficiently than you. I have one WIP commit that I just amend to. And I usually leave in there what I was doing, or what I'm thinking; notes to future me. And I'm curious if you take time to do that, like "Here's what I'm trying to accomplish", or "Here's what I did during this hour"? Or it's literally just like "WIP, WIP, WIP, WIP", and you leave them blank for later?

**Annie Sexton:** I just use "WIP, WIP, WIP, WIP."

**Jerod Santo:** Okay.

**Annie Sexton:** So if I wanna keep track of what I'm working on for myself, I just use a notes app, or something.

**Jerod Santo:** Gotcha.

**Annie Sexton:** Just because it's serving a different purpose. It's not there to keep my history in check. I really just need to keep track of what was the bug that I was on, what was the thing that I was struggling with. But I will say, I know a number of people that do write little notes in their WIP commits, and then later when they choose to do a rebase, it's a lot easier to rearrange things as needed.

**Adam Stacoviak:** \[56:09\] Did I guess it right that you have an alias, or do you not have an alias for making your WIPs easier? Do you actually type "git commit - m"?

**Annie Sexton:** I should. I should have an alias. I really don't though. That's a good idea. I'll do that.

**Adam Stacoviak:** Let's get you an alias. Maybe GWIP, I don't know.

**Annie Sexton:** Just WIP.

**Jerod Santo:** Just WIP.

**Adam Stacoviak:** Maybe it's just WIP, yeah.

**Jerod Santo:** It's so fun to say, and probably really fun to type as well.

**Annie Sexton:** Yeah. \[laughs\]

**Jerod Santo:** So what's the time span at which you are doing this, and at what frequency? Because at a certain degree, if you're literally just WIPping in order to have a backup for something, you're basically just hitting the Save button again in Git, which means you really don't trust your SSD... Which is fair, I think. But is this over the course of hours, days, weeks, months?

**Annie Sexton:** Usually hours. Definitely at the end of the day, at the very least, so I can push up to my future branch because I don't wanna lose any changes... But it's really whenever I remember. But because it's all gonna get rewritten, it doesn't really matter how frequently I do it, as long as it's at least at the end of the day. But it's really just for saving your work at that point, if you're doing it in the method that I've described.

**Jerod Santo:** Right. You can actually write a watcher to do that for you.

**Annie Sexton:** Yeah, if you want to.

**Jerod Santo:** It can run every 30 minutes. And if you have unsaved changes, every 30 minutes just do a WIP commit. Because there's no abnormalness to any of your WIP commits. They're just like --

**Annie Sexton:** Yeah.

**Jerod Santo:** So who needs an alias? Just get a script, and just -- boom!

**Annie Sexton:** \[laughs\] Right.

**Adam Stacoviak:** We're automating Annie's world.

**Annie Sexton:** But I would say, that does kind of marry you to the reset option.

**Jerod Santo:** Totally.

**Annie Sexton:** You know what I mean? You wouldn't wanna --

**Adam Stacoviak:** Right.

**Annie Sexton:** Those WIP commits are gonna be kind of useless if you're doing a rebase interactive.

**Adam Stacoviak:** Let's keep the human in control here, Jerod. C'mon.

**Annie Sexton:** \[laughs\]

**Jerod Santo:** I'm trying to help her out. I'm trying to get her as efficient as possible. Because then your cognitive load never switches.

**Annie Sexton:** Exactly.

**Adam Stacoviak:** That's true.

**Jerod Santo:** Because even switching to the command line and typing up "git commit - m wip"

**Annie Sexton:** You know, but then I would just forget how to use Git... \[laughter\]

**Jerod Santo:** Fair enough. It's all trade-offs.

**Adam Stacoviak:** All trade-offs.

**Jerod Santo:** So how has the community responded? Because this has been out there a couple of weeks... We've covered it in Changelog News, people have been reading it, there's Twitter responses, I think there's a Hacker News thread probably... What has been the consensus, the response? Because people do care about their Git, and people do think they have the best flow. And you have a better flow.

**Annie Sexton:** Yeah...

**Jerod Santo:** You don't specify "Better than the one I'm giving the example to."

**Annie Sexton:** \[laughs\] Exactly.

**Jerod Santo:** What have people been saying?

**Annie Sexton:** Well, that's just to give it a catchy title; that's all it was.

**Jerod Santo:** Totally.

**Annie Sexton:** It's been a really mixed response. I would say most people have responded fairly positively, saying "I like this. I do it slightly differently." That's been the general response. And a lot of people have responded that they tend to rely more on rebasing interactive and Git squashes. Git squashes can be really helpful. I am not the biggest fan, because I like to have a little more granularity in what my commits are defining.

**Jerod Santo:** Describe a Git squash. I don't know how that's different than a rebase, or a reset.

**Annie Sexton:** Usually, a Git squash is what you might do when you have your PR, it's been approved, and to squash it, rather than having all of those individual commits, they all get squished into one commit that contains all of those changes. So it simplifies things.

**Jerod Santo:** Right.

**Annie Sexton:** But then you lose that granular view of what has actually happened. So I prefer not to use Git squash as much, but for some things it can be kind of nice... But I totally understand.

**Adam Stacoviak:** \[59:47\] Is Git squash a first-class citizen in VS Code, in terms of like its -- since you've mentioned you use VS Code, it's pretty easy to hit the plus sign on a file to stage a change on like... If you knew you worked on two files, and you're reviewing your reset for example, it's like "Okay, those two files go together, these three files go together." You just hit the plus sign and easily do that. I just wonder even if a squash is like a first-class citizen in the workflow of VS Code. I don't think it is, to my knowledge...

**Annie Sexton:** I don't know. I'm mostly familiar with relying more on VS Code for knowing what to stage and what not to stage, because it's a lot easier to be specific about which files -- especially, if you're doing this process where you're only staging some of them, and not all of them. So I'm not sure.

**Adam Stacoviak:** I wasn't sure what your flow was particularly because that's how I tend to use VS Code; I'm usually a command line junkie with Git, unless I'm already in that visual mode and I've got my commit sitting here unstaged might as well hit the plus button on these two files and just commit them right there, because I happen to be there. Now, I also use Sublime Text, I occasionally use Vim, too... But most of the time I'm doing commits into a repository it's been VS Code primarily.

**Jerod Santo:** Early Google search says you need the Git Graph extension for this in VS Code... But that's also 18 months old, so who knows; they could have brought it into the main editor.

**Adam Stacoviak:** Squash is good if you know -- I mean, that's the thing... Again, there's no one way to roam. There's just so many roads there...

**Annie Sexton:** Right.

**Adam Stacoviak:** If squash gets you there, it's basically the same as doing a reset and choosing files. I mean, it's almost the same. The end result is almost the same. You've done away with that actual commit. If you have three individual commits and you squash them to one, it's still the same files touched; one single commit, one new message. The end result is basically the same. How you get there is just a different route, really.

**Jerod Santo:** Yeah. Once you've decided you're gonna rewrite the history to make it a clean history, then it's like "Well, how do I achieve that?"

**Adam Stacoviak:** Yeah. And there's no one way to do it. There's so many different ways.

**Jerod Santo:** There's at least three that we've discussed. There's probably more.

**Adam Stacoviak:** I like the way you've described it though, Annie, because for you in particular, if your executive function is challenged whenever you have to divert away from your creative brain, and you pause, or whatever -- they call they call that the state of flow. And you mentioned dopamine and norepinephrine - those are two neurochemicals that keep your brain in that world. Dopamine is primarily a reward kind of chemical, whereas norepinephrine is kind of keeping you back in adaptability, keeping your awareness of time, and self-control... Those are things that happen. So if that's a challenge for you, then this is one of the perfect flows for you, because it just helps you to stay in flow.

**Annie Sexton:** Right, exactly. People with ADHD tend to -- it's not that we have deficiency in attention, it's that we have a hard time regulating our attention.

**Adam Stacoviak:** Right.

**Annie Sexton:** And this is exactly a situation where I personally find that -- it's not impossible by any stretch, and I'm sure if I just practice a little bit more, it might be easier for me to keep my commits as I'm building them in a little more tidy of a manner... But at the end of the day, if I do the reset method, my commits are gonna be as clean as possible. The end result is just fantastic. So why spend the energy upfront to do that when I can just clean it up and do it perfectly in the very end? That's my take.

**Adam Stacoviak:** Yeah. And you get one more dopamine hit.

**Annie Sexton:** Yeah, it feels great.

**Adam Stacoviak:** When you do that, it's like --

**Annie Sexton:** Check that off.

**Adam Stacoviak:** Bonus dopamine. "Thank you. End my day. See ya!"

**Jerod Santo:** Absolutely.

**Annie Sexton:** Right.

**Adam Stacoviak:** I'd say to each their own, right?

**Annie Sexton:** Yeah.

**Adam Stacoviak:** Whatever works for you, I think that's -- but I think one point of this conversation is 1) Jerod learned about reset, and you taught me about reset as a result of your article... But then 2) deeply examining what workflow works for you, and why.

**Annie Sexton:** Yes.

**Adam Stacoviak:** And then someone's gonna hear this show and think "You know what, Annie - that's a great workflow for you. I like that for the reasons you've stated." Mostly I'm a reset kind of person, I love interactive reset. I know Mark Erikson, one of the core contributors to Redux, commented on your tweet for your article, and just shared essentially the exact opposite; not that your way was bad, but they prefer reset, based upon their tweet.

**Annie Sexton:** \[01:04:17.17\] Rebase?

**Adam Stacoviak:** Sorry. Yeah, rebase. My bad. I should reset what I said, and say rebase. \[laughter\]

**Jerod Santo:** That's a WIP.

**Adam Stacoviak:** That's the thing though - it's deeply examining the way we leverage common tools.

**Annie Sexton:** Right.

**Adam Stacoviak:** And what works for you may not work for me, but now I know. And one -- I guess several points, but a main point is now I have a very deep point of empathy with you. If I was your co-worker and you did this and I didn't understand your back-story, it may drive me crazy if I was like "Why in the world is she resetting? That doesn't make any sense." But now I know. Now I have --

**Jerod Santo:** Her PRs are so clean and instructive... I hate it. I hate how logical her commits are.

**Annie Sexton:** \[laughs\]

**Adam Stacoviak:** Right. Such amazing commits... But for whatever reason, I can -- not so much down-talk your methodology, but not understand it. If I didn't understand your back-story... There's something that changes in humanity when I or someone knows somebody else's back-story. Think of a villain in a story. Whenever they're sharing that story, for a little while they're a villain... Until they share their back-story and they describe why they're the villain. Even the most recent version of Joker, for example -- I'm not sure if you're a fan of this, but...

**Annie Sexton:** Yeah.

**Adam Stacoviak:** Joaquin Phoenix played that role amazingly. And traditionally, Joker is a villain, right? He is a villain. But now you have this significant point of empathy with that character, because wow, that's what they went through in life and why they ended that way. It doesn't make it okay, but at least now you can understand them better. I think that's what we're trying to do here, is like -- you're the villain. I'm kidding, you're not the villain...

**Annie Sexton:** That's exactly what I was about to say... \[laughs\]

**Adam Stacoviak:** I know--

**Jerod Santo:** I was drawing some lines here and I'm wondering where you're trying to go with this

**Annie Sexton:** I am the Joker, I am the Joker. \[laughter\]

**Adam Stacoviak:** I'm trying to massage my analogy here...

**Jerod Santo:** This whole show was one big reveal... \[laughter\]

**Annie Sexton:** Surprise!

**Adam Stacoviak:** It's a point of empathy, it really is... Because there's no one way to roam, and obviously, Git can be a divisive kind of conversation, because people have feelings and emotions around their ways and their things... I think it just provides that point of empathy, for real.

**Annie Sexton:** Yeah. And I think that it doesn't need to be a point of tension, because -- especially with the things that I've outlined... If you have your own feature branch and it's just you, and it's how you manage your local commits, it ain't nobody's business how you do that, and how you deal with it. It really isn't. It's whatever works for you. And I see a lot of value in how other people have described how they managed to get through rebasing and I think that's fantastic. And I don't think it needs -- to me, there doesn't need to be a fight about it. At the end of the day, it's just whatever works for you... And I think it's awesome that Git can accommodate so many different ways of approaching this.

**Adam Stacoviak:** Let me ask you this - do you think Render has less customers because of the way you commit your code, or more customers? They don't even know, is the answer. They don't even know. They still love the platform...

**Jerod Santo:** It's none of their business! \[laughs\]

**Adam Stacoviak:** Yeah, it's none of their business. If the end result is still a working product that customers love, that's the point, right?

**Annie Sexton:** Right.

**Jerod Santo:** Well, Annie, we appreciate you coming on the show today. This has been a fun conversation. And we appreciate you writing this blog post. Hopefully, you have future posts in mind, and we encourage you to keep writing... Because as you share this way -- I learned something, Adam got some more empathy, we revealed that you're the Joker... See? Good things happen --

**Adam Stacoviak:** That's right.

**Jerod Santo:** ...when you publish on the internet. So we really appreciate it. And just broadening the conversation around a tool that we all know, and most of us love is just helping everybody involved. So we appreciate that, and we just encourage you to keep writing.

**Annie Sexton:** Thank you so much.

**Adam Stacoviak:** Any advice for those out there following along? Any final words of wisdom?

**Annie Sexton:** I would say don't let the imposter syndrome get to you too much. I think that's really what drives a lot of people's strong opinions; if you were maybe taught a certain way, and when you were learning early on that you're supposed to do it this way, and that was something that you struggled with, then that history may have contributed to some amount of imposter syndrome. But the reality is there's a lot of different ways of accomplishing the same thing. This goes for beyond Git, just in development in general. The more we are curious about how other people approach the same problems, the more we can learn, and I think it's a lot better for the community if we approach these conversations through a lens of curiosity, rather than trying to find the right answer.

**Adam Stacoviak:** I agree. For the curious! Thank you, Annie. It's been awesome.

**Annie Sexton:** Thank you.
