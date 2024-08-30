**Jerod Santo:** Hello, JSParty animals. It's Jerod, your internet friend, and I am joined today by a new friend, Eric Bailey. Hey, Eric. Welcome to JSParty.

**Eric Bailey:** Hey, y'all. How's it going? Thanks for having me.

**Jerod Santo:** Happy to have you. So, according to your website, you are an inclusive design advocate, a writer, a developer, a speaker. You also are a worker at GitHub currently... And I would love to talk about all those things, but first I want to talk about Dungeons & Dragons.

**Eric Bailey:** Oh, yeah. Let's get into it. Let's get nerdy.

**Jerod Santo:** Because this is how I was like -- I had been following your work for a little while, and when I saw your Dungeons & Dragons post, I was like "Gotta get Eric on the show", because you struck a nerve. Although I personally have not played D&D. I'm a kindred spirit to D&D, but I actually did not play D&D growing up. Did you?

**Eric Bailey:** Well, first of all, that's a problem we can fix. So if you ever want to do a one-off session, just hit me up. But yeah, I'm a gigantic nerd. So I've played more editions of D&D than I care to admit... And yeah, you're looking at a founding member of my high school role-playing game club.

**Jerod Santo:** There you go. Well, even though I didn't play D&D itself, I'm also a nerd and a role-playing game fan. I did play a game, another tabletop game called Shadowrun. I'm not sure if you're familiar with Shadowrun...?

**Eric Bailey:** Oh, yeah. That's the good stuff.

**Jerod Santo:** And that was kind of my tangential, adjacent relationship to Dungeons & Dragons. Even though none of my friends were Dungeons & Dragons nerds, I did hang out with some Shadowrun nerds, and we definitely had long sessions where we would describe what we were going to do in Shadowrun. So I feel like I know what it's like to play D&D, even though I haven't.

**Eric Bailey:** Oh yeah. Yeah, that totally qualifies. It's wild also to like go from high school, where it's the shame of kind of just being like "Where are you going?" "Oh, I'm going to a D&D club. Don't tell..." People were doing sessions, and they were filling out literal, honest to God, stadiums, and like people were paying tickets to watch other people play D&D.

**Jerod Santo:** Wow, stadiums even?

**Eric Bailey:** And I'm like, "What happened?!" Yeah... Yeah.

**Jerod Santo:** Well, as Jeff Cannata used to say back in the early aughts, when his podcast/show, which was called "The Totally Rad Show", was earning awards and winning things... This was like basically a show that commented on pop culture. He would always say "Nerd is the new cool." That was kind of his saying, and I think that was very much true then, and I think it's become so true that it's almost cliché at this point. Nerdy stuff is cool now, so hooray.

**Eric Bailey:** Hooray.

**Jerod Santo:** So the reason I bring up Dungeons & Dragons isn't just merely to bring it up, because you wrote this post about how it taught you everything you need to know about alt tags... Those stinking alt tags or properties that we are supposed to put on things and we either don't, or honestly, don't know what to write in there half the time... And so I'd love to talk about that, pick your brain... And where I honestly get stuck on alt text is especially on an element that has a title as well, is like "Am I being redundant? Do I need the alt text if there's a title? Should they be different?" What's the best practice in your strategy, and what did you learn about that from Dungeons & Dragons?

**Eric Bailey:** Yeah, so D&D didn't teach me about the title attribute, but... You know, hope spring's eternal. We could definitely have a standards-based campaign world.

**Jerod Santo:** There you go.

**Eric Bailey:** Yeah. I think in terms of good frontend practice, if at all possible, excise the title attribute from your images. It's got a very narrow use case, and that's basically the iFrame element, where you kind of just describe what the iFrame has inside of it. And the reason for that is if you're using a screen reader and you hit an iFrame element, it'll say "What's going on inside here?" and then you can say "Yeah, I want to explore that more." Or "Nope. I don't really want to pay attention to that."

**Jerod Santo:** Gotcha.

**Eric Bailey:** That's really handy for things like YouTube videos, where it's before you get into a whole player, it's like "Do I even want to watch this video?"

**Jerod Santo:** Okay. So I can just leave title off from now on.

**Eric Bailey:** Yeah. Just live free.

**Jerod Santo:** I like it. Less work.

**Eric Bailey:** Less work...

**Jerod Santo:** I don't feel redundant. I can just simply fill out the alt tag -- I keep calling them a tag. It's a property, it's an attribute. I can fill out the alt attribute. But what do I write in there? So I've had a few different tries at this... I mean, you're trying to like describe what's in the image, basically... And that's kind of hard to do.

**Eric Bailey:** Yeah. Yeah. There's definitely -- I mean, it's not the most inclusive term, but like choice paralysis, where you're faced with a blank sheet of paper and you're like "Oh my gosh, what do I even do here?" The little trick I like to teach people at work and not at work is pretend like you're describing a photo you're looking at to a friend you're talking on the phone with, and that picture is communicating something that that other person really needs to know. So like "Hey, this is our friend Dave, and he's standing in front of a fire station, and he's given two thumbs up, and behind him is a fire truck with its lights blaring, and firefighters like grinning and waving at the camera."

**Jerod Santo:** \[00:06:28.00\] So did you learn that from D&D then?

**Eric Bailey:** Um, I didn't learn about fire engines from D&D, but... \[laughter\]

**Jerod Santo:** How do you tie D&D back in?

**Eric Bailey:** Yeah, yeah. So in the post there's a -- if you haven't read the article, there's a thing called Dragon Magazine, which was sort of like a fan magazine for the game... And there was an advice column, and in the advice column somebody was being like "I feel like my players are getting bored, and they're kind of confused", and the advice that the advice columnist -- like Dear Abby, but for D&D. I love it. It was like "Describe the most important thing first." So when you walk into a room, do you want to know what kind of carpet's there? What color of the walls are painted? What kind of art they have hanging up? What food is on the table? Or do you want to know the house is on fire and the room is currently ablaze? Like, you've got to take the most important thing first, put it up in front. And that gives somebody something to react to, which lets them kind of make an informed choice if they want to keep listening to what the description is, or move on.

**Jerod Santo:** I like that. Most important thing first. Is there a limit? Is there too much?

**Eric Bailey:** Yes and no. So if I can dive into this a little bit...

**Jerod Santo:** Sure.

**Eric Bailey:** There's a myth out there that there's a max character limit on the alt attribute, and platforms like Mastodon, and... I'm always going to call it Twitter. It's not X, it's Twitter. Instagram... They'll actually impose a character limit, and that's kind of, I think, just to prevent somebody from doing bad things. But as long as it's a single, uninterrupted string of text, it can be as long as it needs to be to describe the thing you're describing.

So there's a little bit of an art to it, where if you're describing a painting, you might want to go HAM on like the quality of the paint, and the brushstrokes, and the topic, and like the mood it evokes... So it might be a little bit longer. But if it's something that's like mostly informational, like say it's a screenshot of a news headline, you just want to say what the headline says, and maybe a little bit of extra context of "This is a photograph of a newspaper."

**Jerod Santo:** Yeah. One alt that I find myself writing often is I'll take a screenshot of our Changelog News stories for the week, where it's like the main headline, and then a list of "Here's all the other stories." And I'll just like do a square shot of that for Instagram, and for LinkedIn, and stuff... And it's completely inaccessible to anybody who can't see, obviously... And so I'll fill out the alt text. And for that, I just go back to the original source text and just paste it in. So it's basically the same thing. Is that a good move?

**Eric Bailey:** Yeah. I love it. Yeah, and I love that you're kind of saving yourself the effort by copying and pasting.

**Jerod Santo:** Yeah. Yeah. Why not, right?

**Eric Bailey:** Yeah. And as somebody that reads the newsletter, I appreciate it. I've definitely had a situation where I was on the train and the internet crapped out, and I was still able to read the text on it... So it's one of those --

**Jerod Santo:** Oh, nice.

**Eric Bailey:** ..."I see what you're up to there. Yeah. Game acknowledge game."

**Jerod Santo:** That's cool. I appreciate that. You always wonder if it's worth your effort, because we can talk about accessibility, and audience size, and the percentages \[unintelligible 00:09:42.17\] and of course, if you have so much time and money to apply how important is it... You're an advocate, so of course, very important is your answer. There's a sliding scale. And I think there's strong reasons why it is very important. But you do have to decide what you're going to invest your time in. And I'm always wondering, like, "Well, I always go the extra mile", because that's the kind of guy that I am. It's like "Well, let's go the extra mile." But I wonder, is it worth it? Does it have benefit? And then when I hear even a story like that, for somebody who doesn't have a disability with regarding to a scene, but in a certain situation it pays dividends for you, and so that's motivating.

**Eric Bailey:** \[00:10:22.00\] Yeah, yeah. The aggressive answer that sometimes I'll give is - when I get questions like that, sometimes if I'm in a bad mood and I haven't had my coffee, it's "Let me rephrase that question of like "Who are you willing to exclude?" Which again, doesn't really make you friends. And in the game of accessibility, I'd rather build bridges and relationships. So I think I have always personally been pleasantly surprised by what I put out on the internet. And especially when I have like alt text. I have blind folks on Instagram who've followed me because I take the time to include descriptions. And my Instagram is really boring. It's just like weird things in nature, I find... But you know, it's not my business to make the judgment call of like "Is this for you or not?" It's just like "Here it is. If you want to read it or look at it, go for it."

**Jerod Santo:** Right. I also have a reader of Changelog News who is vision-impaired, and will reply to our emails, and give me tips, as well as kudos when I'll do a good -- because I'll put memes in there, and different images, and sometimes I'll just kind of punt, and the alt will just kind of like say "It's a meme of a thing." It's because I was in a hurry, or I didn't exactly know how to describe the thing, and so I just put it in there. And then he'll reply - he or she; I'm not sure who they are. They'll reply and say, "That was a worthless alt text, dude." \[laughter\] And I'm like "Dang it!"

So even though there's probably only a handful of people that this affects, it affects them in a major way. And they're people too, and so let's look out for them. And like you said, include as many people as possible, because why not, right? So that's cool. But when it comes to alts, there's other areas where I'm sure what to say. For instance, if you are putting a logo as an image, and then you want to provide an alt for that... Do you just say like "It's the logo"? Or do you describe what the logo looks like? What do you do for that situation?

**Eric Bailey:** Yeah. So it depends, which is the worst answer... But honestly, oftentimes it's --

**Jerod Santo:** I may have heard that one before.

**Eric Bailey:** Oh, yeah. Oh, yeah. Tell me you worked on the web without telling me you worked on the web.

**Jerod Santo:** Right.

**Eric Bailey:** In the context of like a primary navigation, when you have the logo say in the upper left-hand corner on an English website, I'll usually do something like Home, because then the experience there for a screen reader might be something along the lines of, you know, link, home... And that's informative in a way that's like practical.

**Jerod Santo:** I see.

**Eric Bailey:** If you're on a, say, press Download page, where it's like all about the brand, and all about "This is us. This is what we're up to. This is the mode and tune--", sorry, "the mood and tone we want to evoke", that might be the time to describe what the Starbucks logo looks like. And there's also a little bit of maybe just like do it once, and then every other time just say it's the logo.

**Jerod Santo:** Gotcha. That home one is interesting, because I haven't thought about using the alt like that. It's almost like providing directions. Now, if that was wrapped inside of an anchor element, for instance, would the title on the anchor be home, and so you're kind of being redundant at that point? Or...

**Eric Bailey:** Yeah, I'd just let the image do the work, and just wrap it with the anchor, and leave it at that.

**Jerod Santo:** Okay, so the anchor doesn't need a title in that case?

**Eric Bailey:** No, you should be fine. If you want to get to brass tacks here, the title will override the images alt attribute, but if they're the same, it's kind of a nothingburger. But again, just get rid of those title attributes and you're good to go.

**Jerod Santo:** Okay. So we're obviously down there in the \[unintelligible 00:14:00.12\] details... That seems like where a lot of the accessibility stuff is, though. There's probably big picture things you can say, about like how to construct a page, or how to have like 80% accessibility coverage... But then it's from like the 80% to the 100% that is where a lot of the "It depends" is, and the questions, and the - honestly, the lack of confidence from even a seasoned developer like myself, that makes us kind of just punt and just not do anything at all. Isn't it?

**Eric Bailey:** \[00:14:34.02\] Yeah, I think that, again, speaks to kind of that choice paralysis. And like when I'm at work, it's something I kind of always try to keep in the back of my pocket... Which is like, this is something that's historically been missing from the frontend, and honestly backend developer experience. It's usually taught - if it's taught at all - for like half an hour in most traditional CS education. So it puts the person in a really bad spot, which is you're being held accountable to something you didn't even know existed, and then somebody you've never really interacted with strolls up and tells you like "You're wrong, and everything you're doing is wrong. And also, you're hurting people." That is not a great feeling.

**Jerod Santo:** Yeah.

**Eric Bailey:** So there's a person in the disability community whom I really respect, Meryl Evans, and she has this philosophy of progress over perfection. So when you tell me "Yeah, we're at 80%", I'm like weeping tears of joy because every little bit helps. And the more you can kind of move the needle, the better. And the cool thing is, websites aren't bridges. You can go back to what you build, and like tweak it and change it, and you don't have to get it all in one go.

**Jerod Santo:** Yeah, I like that. Progress over perfection. That's definitely a phrase that I've uttered oftentimes to myself, or to my teammates, or to my wife, or whoever... Especially us perfectionists, we have to remind ourselves that often, because the perfection goal is the enemy of progress, sometimes. It's the enemy of good. It's like "Well, it has to be perfect." Well, it's already good. Let's ship good, and then let's iterate towards perfect. But --

**Eric Bailey:** Yeah, we're already -- and it's interesting, we're starting to see quantitative, and qualitative as well, if you read some of the community feedback... But quantitative results for that kind of mindset, where we're investing in our design system Primer, making some structural changes, which has like a really good ripple effect... And for the human-facing impact, that's amazing, because that means more people can use GitHub. And then for the numbers go up kind of folks, it's great, because our audit risks go down, which means our legal liability goes down.

But also, things are just kind of getting generally more stable on the frontend perspective, because we are encouraging folks to take those bespoke, one-off implementations and replace them with something that's been kind of battle-tested, and in addition, you just get some accessibility for free.

**Jerod Santo:** Yeah, I was reading about the work that you did recently... You published this back on the GitHub blog on May 8th of this year, about your work on tables specifically, and how there have been, as of the writing - I think you said 75 bespoke table implementations across GitHub's vast surface area of HTML templates. I'm sure there's probably thousands of templates out there in the repo. And of course, you get to a new place and you roll another table. I actually just rolled a table this morning in our admin, because it's like "Well I need another table of things." And so of course, I just go and copy-paste what I did last time, because it's an admin, and it doesn't need to be accessible to anybody but myself and Adam, pretty much... But in your guys' case, you are rolling out this new table, which is built on the Primer components. Can you tell me more about that, and then just the process of basically replacing all these? Because it probably wasn't just you doing that work, right?

**Eric Bailey:** \[00:18:16.11\] Yeah, no. I was fortunate to partner with Josh Black, \[unintelligible 00:18:20.00\] and then an external consultant, James Schultz... And we created this really nice kind of working cadence, which is my preferred, which is very anti-waterfall, which is get the design far enough to where you're facing diminishing returns if you make it pixel-perfect. Switch over to code, break it down into its little atomic pieces... So like for this kind of functionality that we need, like "What is a table row? What does it mean?" And then review it, to make sure it makes sense with assistive technology. And that really tight feedback cycle means that it sailed through kind of our last final audit process pretty cleanly, which makes me happy.

And then to the point of adoption, there's a whole kind of game around ergonomics of providing an API to a consuming developer, as like "Is this easier to use than rolling your own?" And if yes, great. If no, it's probably time to go back to the drawing board. So like you said, the name of the game is to beat that copy-paste the last thing I did.

**Jerod Santo:** Right.

**Eric Bailey:** So that makes me kind of happy. There's always work to be done, but I'll take the W here.

**Jerod Santo:** Yeah. Anytime you can do that as well, you're providing that same developer speed on future tables. Like, maybe this one hurts to go ahead and conform what they did previously into whatever you're providing as an API or a component that they're going to pass properties to, and stuff... A lot of times those tables always have some weird little thing that's different. Right? And it's like "Well, it's 98% like the ones on every other page, but this one has a filter button up in the upper right-hand corner." And so your thing has to be able to manage as many of those as possible. Isn't that the challenge?

**Eric Bailey:** Yeah. There's definitely like a "You only know what you know" phase. So we kick it out the door and then there's those kinds of use cases that definitely come in. I think that's like part of the process. And if it doesn't happen, I honestly start to get nervous, because I'm like "Okay, what's going on here?"

**Jerod Santo:** No one's using it, yeah.

**Eric Bailey:** But yeah, I think for things like that it's definitely a negotiation... Because you want your components to meet people where they are. And then in the same breath, every time there is a one-off little thing, you start to like put on your detective hat, and you're like "Why is it this way? Why did we kind of break the established standard? Is this an opportunity to consolidate, so there's more consistency of experience across GitHub, or is it a situation where we need to fold this functionality in, because some constraint somewhere means it's unchangeable?"

**Jerod Santo:** Right. How do you make that call? It depends?

**Eric Bailey:** Yeah... \[laughter\] I talk to people.

**Jerod Santo:** Sure. But is there like a number of instances, like "Okay, we've seen this particular widget inside of a table", whether it's like a sort, or a filter, or whatever; an emoji picker. And we've seen this once. It's like "Well, okay. We've got a lot of work to do." Or we've seen it twice. Okay. Maybe "Three times. Alright. Let's go ahead and fold it in." Is it something like that?

**Eric Bailey:** Yeah, it's that, and then it's also "I'm going to go talk to your boss's boss", and "Oh, it turns out this is a load-bearing button that brings us in 3 million a year."

**Jerod Santo:** Load-bearing. I like that. I like that analogy. I've never heard that, actually, with regards to buttons... It reminds me of the Buy Now button I ranted about on our last episode. But yeah, I mean, if it was bringing in 3 million a year, there's no "It depends", right? It's like "Well, we're going to make this one work."

**Eric Bailey:** \[00:21:58.28\] Yup. Pretty much. And it's like what I like to say internally, "We can make it happen. It just might take a little bit more time and a little bit more resources." So if that button is inaccessible, but it's like critical to the business, we can figure it out. We've got solutions. We've just got to kind of know what we're dealing with and why.

**Jerod Santo:** So how far has that table component, which has accessibility baked in - as much as you possibly can bake in, right? Obviously, there are last-mile things that the user has to do in order to keep it or to go like a hundred percent accessible, if that even is a thing... But how far has that table, which you've had rolled out to 75 instances as of May - is that continuing to proliferate across GitHub's codebase? Are you at hundreds of tables now? Where are you at?

**Eric Bailey:** I haven't checked, to be honest, because it's always like off to the next thing... But I would assume so, just kind of by sheer probability. GitHub's a really big site, so we have a really nice tool that one of our developers built that we can kind of query where things are. So I would not be surprised, but in the same breath, even if it's not, that's nice too, because numbers are not going down for it, which means that the experience isn't so bad that people are yanking it out of their templates... Which is also a nice thing.

**Jerod Santo:** What's very cool about this is it's all out there, Primer.style... So you can look at this data table that you guys linked to from the post, which lays out the anatomy, it looks like the best practices on how to use it... So this is GitHub stuff, but out there for all. I mean, steal our work? Is that what this is for, like "Go ahead and use it"? Or is it just more of an example of how you might build a table?

**Eric Bailey:** Yeah, I think both. It's the beauty of open source. I definitely have my qualms with some of the model, but one thing I really believe for frontend accessibility in particular is it shouldn't cost money to do the right thing, which is like there shouldn't be knowledge hoarding, or proprietary secrets for this stuff. So on Primer you can read about the data table, why we kind of did the choices we did, what best practices we're recommending... And then you can take the code, inspect it and reverse-engineer it to your heart's content.

And the interesting thing about Primer - and I didn't realize this before I started - is because it is open source, people are using it to build their products as well. And so it's wild, where it's like -- this was made by GitHub for GitHub, but also there's completely independent businesses out there who are like "I need a UI solution", so they turn to Primer. So there's some downstream effects I wasn't even thinking about there.

**Jerod Santo:** Well, if your frontend UI is not like a differentiator, and you're okay with that, and you just want a good one, it's like, why not, right?

**Eric Bailey:** Yeah.

**Break**: \[00:25:03.03\]

**Jerod Santo:** Tell me more about this Primer design system, because I see there's sub-menu items about Figma, Rails, React etc. What are all the places this plays, and how do you play with it?

**Eric Bailey:** Yeah, that's a zesty question. Primer is I think one of the, if not the oldest frontend design systems on the internet. And so as you mentioned, it's kind of like three design systems in a trench coat, where there's the Rails experience, which GitHub has historically been built on... There is the React experience, where some of the newer, more dynamic portions of GitHub are getting built out... There's the Figma layer, which is our product designers will turn to that to sketch on kind of initial product work. There's the brand component, which is kind of adjacent to Primer, but also invested in Primer. There's kind of like a UI packages sort of situation for experimental stuff... So Primer is a lot of things, and each one of those is its own kind of special domain. So it's a wild ride to kind of keep it all in your head.

**Jerod Santo:** Well, I think you can at least keep it all in your sidebar over there, so people who do want to check it out...

**Eric Bailey:** Oh, yeah.

**Jerod Santo:** ...and whether you're working with React or with Rails, assume those are like server-side template renders, and stuff. It's all componentized, so check that out if that interests you. I just was thinking of another line of questioning, and I've just blanked on it. Give me a second to get it back.

\[A few moments later...\]

**Eric Bailey:** Well, I got you. I did want to say... I think it was two newsletters ago you put all the links in order of ascending line length, and I was just like \[unintelligible 00:28:46.11\]

**Jerod Santo:** Oh, that's hilarious. You know what? More people appreciate that than you would actually believe. Like, I just did that because I'm being a nerd... I've also done it the other direction. And people just get geeked out on this, so I've started to do it more often. It's funny.

**Eric Bailey:** Yeah, it's like -- you know, I read for a living, and it's one of those things where I see that and I'm like "Oh, signs of life. Like, there's a human on the other end of this."

**Jerod Santo:** Well, one of the things that I try to do with the newsletter is make it as human as possible, even though it does has a style and a format... And so I just want you to know that yes, I'm here. Because there's certain newsletters - I won't name names - where it's like "Yeah, this is just ChatGPT summarization", you know? And I don't want that to be, ever -- I mean, it's never going to be Changelog News. And I want to make that clear, and so I do little things like that. And yeah, that one in particular nerds love; I'm not sure why. I think it is somewhat just aesthetically pleasing just to like see it that way.

**Eric Bailey:** Yeah. There's some deep part of my brain that's like - you know, the little endorphins light up, where it's like "Ooh, yeah. Yeah, yeah, yeah."

**Jerod Santo:** Well, shoot. Now I've gotta leave this part in, because it was such a nice compliment. We'll leave that in there. Jason, we'll figure it out somehow. You can even just leave the slow dramatic pause of me trying to remember my line of questioning - which I remembered it as you went, so thank you for that, Eric.

I was talking with Zach Leatherman recently on the show, who I've known for a long time, and he is just expert in lots of things - performance, accessibility... The list could go on. And in that conversation I was like "Dang, Zach, you know so much of this stuff... And I wonder how you got to know all of this stuff, and then how we get everybody else to know it." Because with perf - it's a very similar thing with accessibility, insofar as the devil's in the details, it's very important, but also pushed to the end a lot, which means that has to have advocates. I think Google has pushed perf higher up the value chain because of their insistence on using it for \[unintelligible 00:30:46.22\] stuff like that. But you can still shoot yourself in the foot pretty easily, and there's a lack of confidence... And web devs have to learn tons of stuff anyways. Talking about surface area, there's such a breadth to what you need to know o be a web developer, whether you're frontend, backend, full stack. How did you get where you are with accessibility? ...I mean, to know all of these things. And then how can we educate? How can we bring others along? Or is the answer to put it in the tooling? I'll just open that up for you.

**Eric Bailey:** Yeah, yeah, that's a great question, and shout-out to Zach, who is a good \[unintelligible 00:31:19.16\] Big Eleventy fan over here. That's a really big question. And I think for me personally, the most success that I've had is to collaborate. And I used to think that this was something that everybody should know and do. And I still kind of believe that at a very high level, but to a certain extent it is a specialty, and there are specialists within the web field. And so for me - again, I'd like to turn to that progress over perfection mindset, which is "What can you do to move the needle a little bit?" Can you add x CI checks to your code to catch stuff before you merge it in? Because usually, that's code-level stuff of like "Hey bud, you did this, and you should probably do that instead." And usually, that's not like an end of the world refactor fire. It's usually like "Change this one attribute to this other attribute."

\[00:32:23.29\] And that's great, because it's an omniscient robot scanning your codebase, kind of just telling you "Six should be a seven here." It's not somebody leaning over your shoulder being like "That's bad, and you should feel bad." And kind of within that, the uncomfortable truth is for a lot of web accessibility the bar is in hell. So every little bit you can do to improve it helps.

**Jerod Santo:** So if we just hang out there on that one tip... What's the easy button for doing that? Let's just assume a GitHub Actions workflow.

**Eric Bailey:** Yeah. Axe, which is produced by a company called Deque, puts out a suite of tools. There are paid CI checks, which we use a modified version of, augmented by some internal stuff... There's also a browser extension that is kind of a way to sell the services for if you have money to spend for this kind of thing... And that's free, and you can just run it, and it'll scan the page or a portion of the page, tell you what the problem is. And then my favorite part is they have a link to their internal knowledge base. So if you're like "This is a lot of jargon I don't understand", I can click the button, it'll pop open a browser window tab, and you can just read to your heart's content about what they're saying, when they say it. And a lot of it is like "What's the problem? How do you fix it?" And then, wham, bam, thank you, ma'am.

**Jerod Santo:** Very cool. I will scoop this up. Deque.com/axe. It looks like the place to get started. We'll put that in the show notes for anybody who just wants to go out and grab the Chrome extension or learn more etc. Nice sales pitch for these folks. Is there alternatives? Is there competition? Are there other things you can use?

**Eric Bailey:** Yeah, there's a few other in the market. There's the ARC toolkit, put out by a company called TPGI, formerly the Patchyellow Group. There's a few others... To be honest, I've found them to be a little less comprehensive than the other two. So I encourage the competition in the market, but free and comprehensive is pretty hard to turn your nose up at.

**Jerod Santo:** Yeah, 100%. Cool. I'll link up that one as well. I mean, I think, even if it's just installing that Chrome extension and pointing it at your website - I mean, that's going to be valuable to a lot of folks. Because like you said, there's a lot of low-hanging fruit. There's single line changes, single attribute changes... There's also structural ways that you can be more or less accessible, aren't there? I mean, those to me seem like the harder way. It's like your layout, the way that you order your HTML elements, stuff like this. Does that kind of stuff matter, too?

**Eric Bailey:** It does. And the good news is there's two things that are really working in your favor, which is left to right, top to bottom. So if you write your markup in the order that you read it, you're probably not going to have problems. And the other is Ethan Marcotte's miracle of responsive web design does a lot to prevent content loss. So like if it works on mobile and it goes in a logical reading order, you're pretty much set for a lot of like weird gotchas.

The other thing I'd recommend is headings. So h1, h2, h3, h4, h5, h6 is the number one way people who use screen readers navigate. And that basically - like, think about when you hit a website and you're just kind of looking for that one little line of code you need or that one little paragraph. And so you like scroll up and down and kind of flip around and be like "Where is it? Oh, my God. I don't care about your life story. I just want to know how many servings it makes."

And so jumping by heading is kind of the same thing, where it's just like "Okay, what's this subsection about? What's this subsection about? Oh, that sounds relevant. I'm going to dig in here."

\[00:36:21.10\] So there's a browser extension that I really love called Headings Map, and it shows your heading structure in a tree view, and it lets you click and navigate around. It'll also flag where there might be problems... And yeah, maybe just spend a lunch session kind of just reading up on the heading elements, and that'll do a lot to really help folks out.

**Jerod Santo:** It looks like Headings Map is available for Chrome, Edge and Firefox. Good on them.

**Eric Bailey:** Oh, yeah.

**Jerod Santo:** I was just about to complain, because it's like, everything's just a Chrome extension. You know, some of us don't use Chrome anymore. But there it is. I'm just gathering up links for the show notes as you're talking, and I'm thinking "I wish this was available outside -- oh, look at that. They do it." They do cross-platform extensions. I mean, those are people who care right there.

**Eric Bailey:** I mean, I'm going to be spicy here. I wish the browser had this built in. Because --

**Jerod Santo:** Yeah, dude.

**Eric Bailey:** Yeah. I mean, if you hit up like a Wikipedia page and it's like five miles long of scrolling, I want to know what's going on before I really dig in.

**Jerod Santo:** Yeah, totally. Now, Wikipedia does provide some hierarchy on the right-hand sidebar, but oftentimes, especially on smaller devices, that'll be hidden for responsive web design purposes. But yeah, if you could have just a headings-based outline automatically on any webpage, that would be a cool browser feature, for sure.

Cool. What else should we talk about in the world of accessibility? I mean, you've been doing this, you've been writing about it a ton... What else is interesting to you, or that you would point out to our listener as something that they should think about, do, know?

**Eric Bailey:** Yeah. Yeah. I want to echo again your comment on like not knowing where to start, or like thinking like it's too big... Another resource that we created is on the a11y accessibility project, a11project.com. We have a checklist, and again, this kind of speaks to my belief that this sort of knowledge you shouldn't have to pay for. So it's an open source free, relatively plain language breakdown of the web content accessibility guidelines, and it is presented in a checklist format. You don't have to observe the checklist, but you can definitely scan through it... And that gives you a really good kind of like 10,000-foot view of things you should be on the lookout for as considerations for things like color, for things like hierarchy, and reading order...

And the whole goal there was to try to take this very dense, arcane, honestly, sometimes cryptic messaging when you read the letter of the law, and distill it down into something that a project manager can scan and incorporate into their acceptance criteria, or you as a developer can read and be like "Oh, okay. That's what they mean when they say this."

**Break**: \[00:39:20.02\]

**Jerod Santo:** You know, a lot of times with accessibility I feel like I often focus on the argumentation, the why... And because we all have deadlines and lives and decisions to make, and a lot of times you need to be sold... The ones who aren't paying attention, they need to be sold on why they need to pay attention. And that's why I think with performance in particular, Google providing that carrot was such a huge win. And it seems like with accessibility, there are a few small carrots; there are reasons why it just provides better overall usability for everybody... I mean, you even described one case where as a non-disabled person you still had an accessibility win in a circumstance where you didn't have internet, for instance. But there's also a stick, it turns out... The EU is forming a stick and slapping people with it, right? Isn't there a new law that's either in the works or has passed in the EU about this stuff?

**Eric Bailey:** Yeah, it's coming. There's upcoming regulation for Europe, which is a big place, that basically has stipulations for the private sector, the way currently in the United States government services and government adjacent services need to provide accessibility.

And so I'm going to set aside the motivation and why you should care, but I'm at the school of thought that giving that a glance and starting to think about like if you do business in the EU, or you want to do business in the EU, how you can kind of proactively start to build some bridges, and set up some stuff internally for what you do to get ready for it, we're internally at GitHub already starting to have those conversations, because we definitely do business in the EU as a global company...

**Jerod Santo:** Right.

**Eric Bailey:** ...and it's one of those things where some people higher up the leadership chain didn't know it was coming, but having an answer already in place for them helped to take a lot of that initial panic and be like "Nope, nope. Got it handled, got a plan. Here's what we're doing. Here's why we're doing."

**Jerod Santo:** Right. Yeah, that's how you can become a hero inside your organization, is when that hammer drops and all of a sudden everyone's like "Oh no, we need to be in compliance with this stuff." You're like "Hey, we've already been doing our due diligence all along, so you're good to go." Do you have any idea of the form of that, the actual nitty-gritty of like what it will mean, what you'll have to provide, what you'll have to do and what the consequences are going to be? Or is it too early for that kind of stuff?

**Eric Bailey:** I think it's a little too early, but if I could wager a guess, I think it'll be a lot of when it comes to discovery, in case of like a lawsuit or a legal action, it'll probably be taking that criteria and using it to determine if somebody is at fault or not... Which I think personally is well and fine and good, in that there is a baseline, it is legal law, it is established, and it's going to be less ambiguous... And a lot of accessibility can be ambiguous, which is why we do have the Web Content Accessibility Guidelines.

So like if it comes to it, you can kind of go down the list and be like "For this kind of standard that applies to multiple governing bodies--" It's an ISO standard, which is wild... You can say like yes or no, and yes or no. And that really helps for some of the subjectivity... Because disability is not a binary, and it can impact individuals in a lot of different ways. So it's a good way to kind of take some of that fuzziness and translate it into something where you can determine in a legal context "Yes/no. Are your civil rights being violated? Yes or no? Here's why."

**Jerod Santo:** \[00:44:02.16\] Right. Now, what are the odds that this particular legislation backfires, just like the cookie laws backfired? ...where it's like, people are going to stop tracking. They're like "No, we're just going to put annoying cookie banners everywhere and just continue to track you, but you have to agree to it first."

**Eric Bailey:** Yeah, I think there are two things I'm really worried about there; three things. Cookie law is definitely one of them.

Second is going to be well-intentioned people trying to capitalize on it and doing more harm than good. That's a whole side conversation. I think there's going to be an initial kind of scramble.

But the thing that I'd like to specifically talk about here is I think accessibility overlay companies are going to predate on a lot of well-intentioned people who only want to do the right thing. And I'm not sure if you're familiar with the drama surrounding accessibility overlay companies...

**Jerod Santo:** No. Tell me about it. I don't even know what that means.

**Eric Bailey:** Yeah. So there is a phenomenon on the web where, as you kind of described, people say "Web accessibility is hard", and so they go to search for how to fix it, and there is a few companies in this area who have a one-line code fix solution that pops up a little overlay, for lack of a better term, that "fixes" your accessibility problems. And there's a few problems with this... First and foremost, they don't work. So - false advertising.

**Jerod Santo:** That is problematic. Yes.

**Eric Bailey:** Secondly, a lot of disabled individuals - and you can check out some of the particulars here in the overlayfactsheet.com - they actually say the experience makes it worse. So people who use assistive technology on websites that have accessibility overlays are like "This turned it from like annoying, but usable, to absolutely unusable."

So God help you if you want to order a pizza, and suddenly these nice people that run the local pizza parlor put this code in, and suddenly you're prevented from doing that, because they wanted to do the right thing. Like, that sucks. There's actually been court cases where we proved in a legal context, and have actually helped to provide evidence as an auditor that they don't do what they say. They just have the benefit of a ton of SEO goodness and venture capital to kind of override other solutions that are actually more long-term and sustainable.

So there's also the fact that it's kind of spyware, in that a lot of these companies don't disclose what they do with their data, and in opposition to a lot of European data privacy laws. And that gets into a really uncomfortable situation, where the majority of assistive technology when interfacing with web content - and this is the same thing for kind of like browser privacy... You don't want individual people to be de-anonymized, for a variety of reasons, but in a medical context, especially.

So we don't know if they're tracking people, and selling that information to third-party brokers. We don't know if they're compiling lists, or what they're doing with that information... And they're also not answering requests to disclose that through established channels... So basically, the TL;DR here is "Big yikes. Avoid overlay companies, especially if you actually want to help people."

**Jerod Santo:** That's good to know. I literally had never heard of this, and I feel like I know generally what's going on out there in the web... So this seems like a blind spot for me, pun not intended. How do they work technically? What are these overlays? Is it a JavaScript snippet? Do you have any idea what they're doing? And then what are they actually doing to your page that they claim is making it better?

**Eric Bailey:** Yeah. So it's functionally a lot like those little chat bubbles in the bottom right-hand corner of your screen, where it pops up an agent that's just ChatGPT, and you just scream for a...

**Jerod Santo:** For a human?

**Eric Bailey:** \[00:48:02.23\] ...human. They basically pull a lot of different party tricks, which is just running some arbitrary JavaScript to do stuff like flip the background colors, or bump the text size, or clamp your line length... And the interesting thing is is sometimes it kind of/sort of works, a lot of the time it doesn't, because there are so many different ways to implement the UI... And this JS isn't necessarily always robust enough to actually do the thing it's going to do.

The further irony is some of these overlay widgets are actually inaccessible to assistive technology. So if you try to click that button to help you out, it actually just doesn't work...

**Jerod Santo:** Because there's something in the way, or like there's literally --

**Eric Bailey:** They just built it bad.

**Jerod Santo:** Yeah, just built bad.

**Eric Bailey:** Yeah. And so the really interesting thing here is there are established ways for people to get around these kinds of things, and that's good. I think that's one of the strengths of the web, which is if you don't like it, you can change it. There's lots of extensions out there, there's lots of browser preferences, operating system preferences... And the really important bit is when you go onto the internet, you don't go onto the internet to use Jim's Jerky Shop 24-7. So it's like, if you do make those tweaks to this website, they don't carry over to other experiences. So say you have a traumatic brain injury, and you are sensitive to extreme contrasts in colors, and that gives you migraines, and pain, and fatigue. That's not your fault. But what you can do is use the operating system's color overlay feature to kind of even and normalize the colors, and reduce that eye strain, and therefore reduce your pain. That's something that you can do. That's something that an overlay widget can't do. There's also a browser extension that a few friends I have use called Midnight Lizard, which is a great name...

**Jerod Santo:** I like it. Midnight Lizard, huh?

**Eric Bailey:** And all that does is really just normalize colors across the web. And that's one of those - like, if that's what you need to make things work, like make websites look a little bit more perceptually uniform, just so you can kind of like have a more guaranteed experience... Great. Go for it. Yeah. Get what you need. I don't care.

**Jerod Santo:** I love it. It's your web. Make it the way you want to in order to make it more enjoyable, or even useful when it might not even be usable. There are a handful... I'm seeing some overlay blockers in the various extension worlds. It seems like these might be more about overlays of like a "Subscribe to our newsletter" overlay, versus an actual like accessibility overlay though.

**Eric Bailey:** Yeah. Well, let me flip the script for a second.

**Jerod Santo:** Okay...

**Eric Bailey:** Do you use any web extensions to make the web a little more tolerable for yourself?

**Jerod Santo:** That's a really good question. I'm somewhat a vanilla kind of a person. I'm now going to look at my list of extensions and see if I can. I did use tweaks for Twitter for a very long time... I think that that broke at some point, probably right around the time that you would think it would break...

**Eric Bailey:** R.I.P...

**Jerod Santo:** \[laughs\] Yeah. When it no longer became Twitter. And I used to -- I mean, in my younger years I did all kinds of stuff. Was it Grease Monkey, was the name of the Firefox thing? Yeah, where you could just run your own stuff on every website... And I would tweak almost every website that I went to often. I would be like "This is going to be the way I want it to look." Nowadays, not so much. So I do have, just besides ad blockers and privacy stuff - yeah, all I have installed in this particular browser is tweaks for Twitter, and it's turned off... I have Open in Ivory, which is just a Mastodon integration. So if you're on a Mastodon page, you can click on that little button and it just opens it up inside of ivory, which is a Fediverse client... And then just ad guards, and stuff. That's about it. How about you?

**Eric Bailey:** \[00:51:56.26\] Oh, too many... But yeah, I want to to kind of push a little bit on the ad blocker, because a dirty little secret in the accessibility world is ad blocking can be considered assistive technology. And here's a reason for that. The same way you don't want to be distracted by like a banner ad that comes in that's like flashing, and distracting, if you're photosensitive and you can get seizures on the web, that's something that you as a consumer can do to kind of protect yourself. And irritation is kind of one end of the spectrum; \[unintelligible 00:52:34.17\] is the other. So if you can sidestep by that by installing an ad blocker, you should be able to, at least until there's better regulations in this space. Because as we both know, it's a little bit of the Wild West.

**Jerod Santo:** Yeah, 100%. I mean, I think that you should be able to do whatever the heck you want to do with your browser. And so I think ad blocking is totally fair game. Like, you're sending your thing into my computer, and I should be able to take or not take that thing that you're giving me. That's just my opinion.

**Eric Bailey:** Yeah. It's buck wild when you think about it with hindsight; you could not execute arbitrary JavaScript on another website from one website...

**Jerod Santo:** Oh, yeah.

**Eric Bailey:** But yeah, here we are...

**Jerod Santo:** Here we are. Good stuff, Eric. So connecting with you - it looks like ericbailey.website - is that the one place where we should send people, or are there additional places where people can get a hold of you and meet up and talk?

**Eric Bailey:** Yeah, yeah. EricWBailey.website. I've got links in the footer, if you are so inclined. I'm on Mastodon, I'm on Bluesky, waiting for the dust to kind of settle for like where people go...

**Jerod Santo:** Right.

**Eric Bailey:** Flirted with Threads. I don't think it's for me. I am still processing my feelings on Twitter, and... Yeah, email also works, too. I do offer office hours as well, and those are for free...

**Jerod Santo:** Oh, cool.

**Eric Bailey:** Basically, the web's been really good to my life and my career, and accessibility is a huge gnarled knot... And if you have questions, hopefully I can help you. I'd rather pay it forward if I can, and get you situated... So feel free to reach out if that's something you're interested in, too.

**Jerod Santo:** Very cool. I love that. Office hours... That's quite an offer, when you think about the one thing we have in this life is time, and we can't buy it back... So just giving that away to the people who are interested I think is a big deal. I think that's pretty cool.

**Eric Bailey:** Thanks. Yeah.

**Jerod Santo:** Well, we appreciate your time today, spending about an hour with me... Great to meet you, great to hear about your work and all of the things you're doing at GitHub, and your writing, which I enjoy very much... So keep up the good work. To our listener, all the links to all the things are in your show notes, including every extension, I think, that we mentioned along the way, if I did my job... So check those out. They are completely accessible to you via the show notes button in your podcast app or browser of choice. So Eric, thanks again. This is JS Party for this week.

That's all for me. We'll talk to you all on the next one.
