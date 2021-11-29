**Amal Hussein:** Hello, party people! I mean, you're JS Party people, so you're like fun nerds, right? So hello, fun nerds. I'm so excited about today's show. We are here with the wonderful, the one and only, my very good friend, Rachel Nabors. Welcome!

**Rachel Nabors:** Hello, Amal. Hello, Amelia. Good to be with you today.

**Amal Hussein:** Yay! And we have Amelia Wattenberger. Hello, welcome, Amelia.

**Amelia Wattenberger:** Hey-hey! Happy to be here.

**Amal Hussein:** Alright, excellent. So today's show -- I mean, you know, unless you've been living under a rock, you can guess what it's about... So the React team a few weeks ago, maybe two weeks ago, or one week ago - I don't know, time is a flat circle...

**Rachel Nabors:** Two weeks, I think...

**Amal Hussein:** Yeah, two weeks ago had dropped the new React documentation site. So it's the same link, but just put a beta in front. So it's beta.reactjs.org. Essentially, there's a whole new redesign, and it's beyond just kind of a fresh website; it's really a fresh take, I think, on education and documentation for popular web libraries. So kudos to you all.

Anyways, I'm gonna stop yapping... Let's first get into introducing who Rachel is, and then we'll get into some of those specifics next. So hello, Rachel. You can tell I'm excited, because I've been talking non-stop for about two minutes... Can you tell us who you are and tell us a little bit about yourself?

**Rachel Nabors:** \[04:12\] I'm Rachel Nabors, I am the documentation engineer working with the React core team, as well as React Native and Relay, which is a React data solution you may or may not have heard about in the open source ecosystem, but basically, the React fam of technologies, as I like to think of them.

I've started out actually -- I came in working on React Native's documentation, and lately I've been working with the React core team on the React documentation as well.

**Amal Hussein:** That's awesome. And what's it been like to -- I know you used React before you had joined the company, but what's it been like to work closely with the React team, and be able to see that part of the sausage come together?

**Rachel Nabors:** Well, the interesting thing about the React core team is that they are engineers. If you've worked with engineers before, you can kind of imagine what it might be like to work with the React core team. It's definitely different though. I really like working on a team that's building things that other people are using to build their own solutions to problems. And I think that was the real attraction for me about working with the React team. I used to work with the W3C on APIs and standards, and for a little while I worked on Edge, the browser, over at Microsoft.

I've always liked working on the things that enable other people, and that team here, working on React at Facebook - well, I think it's Meta now... But anyway. This team really focuses on the impact that React has across so many people's developer experiences across the open source ecosystem.

I think it's interesting, because when you're going back through the blog posts on the React site, you can see how React started as this kind of cool, skunkworks "What if we thought about building the interfaces as components? Yes... And you could compose components, integrator interfaces..." And you know design systems in parallel, we're thinking about componentizing design... So it's interesting to see the JavaScript community and the design community both thinking more and more about "Yeah, we just need to get a slider in there. We do not need to reinvent the slider. Yes, we need that slider there." It's interesting to see that evolving over time. And you can tell that originally React was kind of this niche, small "Ooh, maybe this is a new way of thinking about it." Everyone was using Angular, Angular 2 was coming out... And then it just took off. And suddenly, you go from "Oh, React is this cool alternative" to React's website gets 2 million developers visiting it from all over the world every month, and React's dev tools are used by 3 million developers. It's just like "Oh... Ah... H-hello there... Yes. You're using this very important JavaScript library. Hm."

And I think that's been the most interesting thing about working on the team, is that it still very much has the vibe of that original sentiment of "Let's try building interfaces in a different way", only it has a huge, huge consuming audience now. It's gone from being a niche project to a stadium project in a very quick amount of time, if you look at the numbers.

**Amal Hussein:** Yeah. The adoption of React is really massive. And to give everybody a mental model for what the scale of the web is - React is still used by only 2% of websites on the internet. So think about how widely React is adopted, and then think that's only 2%. So just how massive the web is. That 2% is ridiculous amounts of traffic. It's in the millions/billions, right Rachel? I mean, Facebook alone is in the billions, so... Yeah, Facebook plus all the other websites, so... It's huge. It's really incredible.

\[08:09\] So what's your relationship with React? How is your relationship -- so it was really nice to hear you describe what it's been like for you to witness it all come together, and that experience, but how has your relationship with React the library changed now that you're on the "inside"

**Rachel Nabors:** Let's be honest, I kept trying to learn React, and kept not making it stick. It would just go in one ear and out the other. And I was like, "Well, maybe I need a job where I'm working with React." But at the time, I was thinking about what I wanted to do next, and I was like "You know, I could just learn React from the people who build it. Oh, look over there... There's a team. They work with React a lot. Hello... Do you need any assistance? Can I do anything for you?" "Oh, okay, yeah... Let's write some educational materials. I'm pretty good at that."

So partly, I ended up taking on these projects, and this mission to teach people React and React Native. And it was partly because I wanted to learn it myself. I came in with a bunch of really weird notions about React that I'd picked up, like many of us do, in the community, reading Medium posts, watching YouTube videos, taking the odd course that probably is a couple of years out of date, and getting into really grokking React. I realized it was a lot different from what I'd been led to believe, and I wanted to share some of those learnings with other people.

When you work on a team, building something for so long, it can be easy to lose track of the beginner's mindset; that fresh "I have no idea how props and state work."

**Amal Hussein:** The "je ne sais quoi..."

**Rachel Nabors:** Yeah.

**Amal Hussein:** Literally, the je ne sais quoi. It's like the literal je ne sais quoi. Yeah, you don't know what the hell you're doing. Right. So yeah, I get it...

**Rachel Nabors:** And that can be surprisingly valuable, especially if you're writing materials for other folks who are coming in for the first time as well.

**Amal Hussein:** Yeah.

**Amelia Wattenberger:** What do you think is the biggest thing either people have trouble with when they're first starting to learn React, or the biggest thing that you can lose track of after you've been using React for 3-5 plus years?

**Rachel Nabors:** I'd like to think that the Beta Docs actually changed this... Because I know for me, it was really grokking how rendering works. In the older docs you could really only find out what rendering was by -- there's like one paragraph on the site that briefly describes render and commit processes. Now, these were perhaps less important to know about back when we had classes and lifecycle methods. You just had to memorize the lifecycle methods and there you go. But hooks really leans on understanding the render and commit process behind React. Rendering is when React calculates the component based on how state has changed, and commit is when that component goes and is inserted into your platforms tree.

When I say "platform tree" here, you're probably thinking "What is she talking about?" If you're working on the web, that would be your DOM, your document object model. But React can actually output to different platforms, including iOS and Android, React Native... They have different trees; they have UIView trees.

So platform tree is an internal lingo saying "Whatever it is that React is spitting out to - that." It's usually a tree, full of nodes representing content and data. But when I first came in, I wasn't really sure how the state was working. I mean, when you look at Vue, when you look at other kinds of UI platforms, they tend to have more mutable state models. But React is different. It has a one-way data flow. You have to deliberately set the state. And that act of setting the state tells React "Yo! Things have changed. Look at that component. Did that component change because the state has changed? If it has changed, go to that platform tree and make any necessary adjustments." The render and the commit process. And that was something... Once you get that, everything else really falls into place. Hooks, the API that you use with React - it lets you hook into different parts of this process. Like you use effects and they happen after the render process, and set state, that hook itself kicks off the render process.

\[12:30\] Anyway... I think grokking that when you come in, just like "Oh, I'm telling React what to do with these APIs. That's pretty cool." I think that is the difference between really succeeding and running with React, and being like "What is going on here?"

And now, the new docs are completely written from the ground up with hooks first, so that you really understand these internal processes.

I think as you go on with your React journey, the challenges become more about edge cases and interacting with external libraries, things that wanna manipulate the DOM, that maybe React has some control over... And how do you tell React "Hey, I'm touching your things, React. React, I'm touching your things."

**Amal Hussein:** I hope this is consensual touch, Rachel.

**Rachel Nabors:** I was thinking more like, you know, little kids... "I'm touching your CDs..."

**Amal Hussein:** \[laughs\] Yes, yes, I'm just joking.

**Rachel Nabors:** "I'm in the basement, I'm messing with your stuff. Are you gonna come down here...?"

**Amal Hussein:** Oh, I see. Yeah, yeah, that type of -- yes, yes. Okay.

**Rachel Nabors:** Right.

**Amal Hussein:** \[laughs\]

**Rachel Nabors:** Another challenge is more around figuring out the escape hatches from the React system.

**Amal Hussein:** Yeah, for sure. Amelia is kind of like this interesting brain to have in this conversation, because she's got the unicorn thing going, where she's like "Designer - excellent. Developer - excellent." She's like a designer-developer, so I think -- what do you think, Amelia? It feels like your world is bridging a little bit, in some ways, with these improvements...

**Amelia Wattenberger:** Yeah, I haven't had a chance to dig in really deep with the new docs, but I love how there's the interactive sandboxes, you have challenges you can do in the docs themselves... There's gotchas, call-outs of like "Oh, you might think this, but actually it's this other thing." Those are all really great ways to teach as well, because you're trying to think of common problems people may have, and also letting them invalidate their wrong mental models with the challenges... So if you think it's one way and then you try it and it doesn't work out, then it's a really quick feedback cycle, which I think those are really awesome. Were those always in the plan when you were at the beginning like "We're gonna have interactive components littered throughout the docs", or is that kind of like a stretch call?

**Rachel Nabors:** No, man... These were the -- first off, Amelia, by the way, big fan... I absolutely love what you do in the data viz space. And I haven't said this to you in person, I don't think, but congratulations on your book; it's beautiful, and I have immense respect for your work.

**Amelia Wattenberger:** Thanks, Rachel.

**Rachel Nabors:** Now, back to the React world. You're pretty awesome. \[laughter\] Let's be honest, it's a room full of awesome today.

**Amelia Wattenberger:** It's true.

**Rachel Nabors:** So... Let's see. Hang on - you know what? It's a little late here in London time... I completely forgot what I'm responding to.

**Amal Hussein:** The question - was it intentional for you to do all that interactive... Like the sandboxes and the visuals and the gotchas - was all of that like a stretch goal, or was that like --

**Amelia Wattenberger:** Yes...

**Amal Hussein:** See, I'm listening to Amelia, Rachel for God's sake...

**Amelia Wattenberger:** Thanks, Amal... \[laughs\]

**Rachel Nabors:** Yeah, that was baked in.

**Amal Hussein:** But that's okay, anyways. We're good, you're forgiven. You're Rachel Nabors, you can do no wrong. Rachel, you can do no wrong, okay? It's fine.

**Rachel Nabors:** Oh, trust me, I can do plenty of wrong.

**Amal Hussein:** \[15:50\] This is a fart cloud that smells like strawberries and fresh chocolate chip cookies, okay? You can do no wrong. \[laughs\]

**Rachel Nabors:** You know, if I could come up with a pill that would do that, I would be a millionaire. I feel like there are entire crack teams of scientists working towards solving that problem.

**Amal Hussein:** Right, right, right. It's like, "My farts smell like cookies." \[laughs\] That is Rachel Nabors.

**Rachel Nabors:** Genetic engineering. It's gonna be an add-on.

**Amal Hussein:** Actually, Rachel, that could be your tagline, "My farts smell like cookies." That could be your branding as an engineer.

**Rachel Nabors:** That will attract the wrong crowd of people...

**Amal Hussein:** \[laughs\] Okay, that's true. Back on track, back on track. So...

**Rachel Nabors:** So that is a great question... So working on the React Native documentation like, I used to be I used to be a UX designer, I've been way too many roles in my career. Now I get to add documentation engineer onto the list.

**Amal Hussein:** Wow.

**Rachel Nabors:** I just -- I'm interested in things, and I wonder over and "Hello, friend... What are you doing?"

**Amal Hussein:** You are a mis-shapen puzzle in a world of squares and circles... So you can fit anywhere. I think you're just a really adaptable person, and I think that's why your career is so awesome and different all the time. I think that's a skill. This is a safe space for you to acknowledge, Rachel Nabors, that you are a highly adaptable human being. And that's badass.

**Rachel Nabors:** This is on YouTube. This is hardly a safe space.

**Amal Hussein:** \[laughs\] Well, yeah, YouTube is not the primary outlet, but yes, we are currently streaming live on YouTube. Like and subscribe, everyone...

**Rachel Nabors:** Hello, YouTube. So you may have recalled that I originally -- the first test that was set for me when I came and was like "Alright, I'm gonna go work with the people who built this stuff... What am I gonna do?" And they were like, "Alright, Rachel, spin this straw into gold." This is how everything in my life starts... It's like, "Yes, I can totally spin that straw into gold."

The React Native documentation needed a bit of love when I arrived, and that was my first task - turn the React Native documentation around. It was sorely out of date; I ran some community API documentation update drives around that, love you guys, and adding more on-ramps etc. But the point was I didn't just arrive and start writing. No... Because I used to be a UX person back in the day; I was like, "Yeah, you say the docs need work, but what exactly needs done? What do we need to do?" "Well, we should just ask the people who are using them what they'd like."

So you know, I conducted user interviews, I formulated a couple of ideas... I really got to know the React Native community over here in the EU, which was really cool. It's a pretty hoppin' place. And I started running surveys for the React Native and React communities, to really start feeling out what it was that we were lacking, what they wanted more of.

And one thing that came through for both communities, time and time again, was - "It needs more examples. Interactive examples. I see the code, but I'm not gonna spin up an environment..." I was like, "Come on...!"

**Amal Hussein:** Yeah, especially a React environment. There was an entire friggin' side baby project company born out of that called Create React App. It was complex to do React on your own, and especially as a new engineer. So the pain is real, that's not even exaggerated.

**Rachel Nabors:** React is not a platform, it's a UI library. Let's be honest. It's not even a hammer, it's a nail.

**Amal Hussein:** Oh, yeah. A hundred percent.

**Rachel Nabors:** This would be like if you invited someone to a craft workshop and said "Here are all these nails." "Okay, great. I love the nails. What do I do with them?" So to show you the nails, it's great if you can give people like, "Here's a piece of wood and a hammer. Now, hammer all the nails you want here." And that's sort of what the interactive examples do. You don't have to worry about spinning up an environment. You don't have to make big decisions, like "Next or Gatsby?! Or should I spin my own? I don't know!" No, just go poke the code; poke the code until you're in love with the code. Then you can make all those life-changing decisions. I mean, stack-changing decisions. But no pressure, no commitment, no renewal fees. Get in there.

\[20:02\] So we implemented these interactive examples for React Native, which were a new and bigger challenge, and they took off. Everyone loved them. They loved the API docs having interactive examples, they loved that every single example on the site was suddenly interactive. There were a bunch of other little things that were tested out in the React Native docs effort that tested so well, got such great feedback before and after, having made good on these... And we saw the same things going on with React's docs. It was like, "Well, we know exactly what to do here."

**Amal Hussein:** Yeah.

**Rachel Nabors:** Anyway... The new interactive examples - I wanna give a shout-out to our partners at CodeSandbox, because they were working on this cool Sandpack API. You can actually go use this API to embed interactive examples from CodeSandbox on any project of your own. It works really well with MDX.

So when future people are wanting to update examples or add examples to the React documentation, you can just do it right there in Markdown. Even edit the CSS. It's super-cool. Just a great workflow for the contributor, and I just wanted to give them a shout-out, they do a great job. It was a pleasure working with them.

**Amelia Wattenberger:** I actually set that up yesterday, or two days ago, and it was so nice. You just -- this is something where you just get an endpoint, and you send it some code, and it's like "Here's your Sandbox ID", and you can just include it.

**Rachel Nabors:** I really hope to see more people embedding interactive examples into their teaching materials. I think it's just fabulous. It's changed the way people learn. These toolchains are getting more and more complex. It's harder and harder to ask somebody -- you know, one of the things when doing research on how people learn is that the start of any bootcamp is usually just installing dependencies, and "Run this line on your terminal. Run this, run that. Oh no, that didn't work. Brew install this. Did you update that? Delete that file. Re-run." And it's a huge barrier to play.

And let's be honest, a lot of folks are not learning React to build something from scratch. They're learning React so that they can work on something that was built in React already. So that's a waste of their time. They just wanna figure out why set state isn't doing the thing they expected. They don't wanna have to go figure out how to start a blog site...

**Amal Hussein:** Yeah, how to start a blog site, or what Babel transform are you missing, ma'am who has yet to know what even JavaScript is, or something... Like, it's crazy. So yeah, I know, the barrier to entry is very real.

I think we've kind of skirted around a bunch of things on this site, so can I -- just for the sake of it... In your own words, what is this project about, what were the goals...? And then we are gonna take a break after that, because there's so much to dig into, I think, off of that discussion. So... Close this out, Rachel Nabors.

**Rachel Nabors:** Alright. The goal, our mission in this project, your mission, should you choose to accept it, was to provide the best React education in the industry, for anyone who wants to get started, or dive deep, no matter their background, income, or location. The goal was to create this resource that would teach people not just what is React, but how to think in React, how to go from good to great in React, and if they were having some problems somewhere, you know, wanting to know what that third argument in an API is, that they would have a reliable resource they could go back on.

Additionally, we wanted to give this to people who are training folks to learn React, too. People who are writing articles, who are running meetups and workshops... We want them to be able to be like, "Yeah, if you're struggling with that, just check out the React docs." Or "We're introducing you to this API today", and the link goes to one page in the React docs that has anything, to answer any question, any hiccup that people might have. We wanted to create a resource that would empower the community to become authority in their own right.

**Break:** \[23:57\]

**Amal Hussein:** Okay, Rachel, those are some really great goals. I'm really curious to hear if you think you have achieve them or you are on track to achieve them... And also, can you share some insights into the big TBD section that's on the website right now, where it's like "We're this percent complete with the API docs. We're this percent complete with the learning docs." So can you speak more about that?

**Rachel Nabors:** Awesome. Yeah, we're about 75% done with the learning documentation. That's because the remaining documentation is mostly, well, how to use things around edge cases. Effects are largely used for doing things with React, interacting with things outside React. There's additionally -- you know, we're going to have to add some things for React's developer tooling, which is coming later this year... So there's some stuff that we didn't have finished, but we had enough done that we didn't wanna hold back until things were perfect. We wanted to make sure that we were actually getting the content to the community.

The API documentation itself is still very nascent. We wanna really make sure that we are -- because hooks are very challenging to document, compared to more traditional APIs. They are deeply nested, they do interesting things with -- you know, there's this thing that returns a function, and that returns a clean-up function, and it takes a dependencies array, but it does different things depending on the state of that array... And a lot of those APIs depend on how we document that last 25% of content, how we explain how to use them. So there's sort of road block by finishing the rest of the guides themselves. So they're still en route.

Now, the community of course is very eager to assist in any way possible, and that is awesome, and we appreciate it... But we're not quite ready to accept community assistance. These flagship pieces of documentation are really things that come right from the core's heart... And it's not just something you can churn out. I would know, I've tried. It really does get a lot of input from the core team.

**Amal Hussein:** So there's a lot of nuance, is what you're saying... Not only nuance, but -- well, I guess, do you ever get pull requests on your documentation?

**Rachel Nabors:** We do.

**Amal Hussein:** Okay.

**Rachel Nabors:** And we really appreciate pull requests for things like typos, "This example could be done like that..." I actually did partner with a couple of people from the community who work on the documentation so far, and we'll continue to do so... For instance, I wanna give a shout-out to Sylwia Vargas. Originally, all our docs had kittens in the examples. We were using placekitten for everything. And I loved putting the cats jokes in there, but cats are not very inclusive. Not everyone loves cats, not every culture loves cats... So we were like, "We should do something with these docs that really showcases all of humanity." Great scientists, cities, art, that sort of thing. And we've partnered with Sylvia, who went through and updated all of the examples to showcase these amazing topics, and really bring in added spark.

\[28:18\] But there will be ways in the future for the community to have even more impact. There'll be a translation effort that will kick off, and that is a great time to get involved then. But for now, we're mostly writing and generating and editing the content on team, and with the people we've been partnering so far. It's like getting mentored by a team member, so it's pretty awesome. I feel great about the quality that has been produced so far.

**Amal Hussein:** Yeah. That makes a lot of sense. It's a completely rational decision and I think a good move to make sure you can take full ownership of the message, you can own the mistakes and you can own the success. I get that. So that's awesome.

I'm just kind of curious -- I was gonna ask about... I've noticed there's more diverse examp -- everything; it's not even just examples. It's like imagery, examples, iconography... Whatever. It feels diverse and inclusive, and I couldn't quite put my finger on it, because I initially thought "Oh, it looks like maybe they're just highlighting women in tech", and then I looked around and it's like, "No, no, no. This is broader than that." And so really, kudos to -- was it Sylvia? And to you also, for listening and putting that feedback into action. So that's awesome.

Is there like a formal feedback kind of channels that you established with the community around questions, and/or whatever? I'm just curious...

**Rachel Nabors:** There are three ways you can give feedback on the docs, and they're all linked to from the frontpage of the site, at beta.reactjs.org. You can fill out a survey, privately drop your feedback directly to the team... You can leave a comment on GitHub... There's a supporting conversation going there; we get all the feedbacks, for all kinds of things, and this is great; we love having that feedback. It often gets turned into an issue which someone acts on. We've got someone who made dark mode persistent recently, and that's awesome. I adore that.

But you know, if you're shy, you can also leave feedback using the Feedback button on each page, if you wanna give us your feedback directly on something you saw. Maybe something wasn't working, maybe something was confusing... This particular tool will let you tell us all about what you want, where you want it. And that's actually really helpful to us at this stage, getting that kind of feedback about what's working, what isn't. We really wanna make sure that these docs do right by everybody. So if you do have that feedback, we do want to hear it. We hope we have made enough places and enough channels for you to get that feedback to us.

**Amelia Wattenberger:** You mentioned that you did a bunch of user experience interviews for the React Native docs... Have you been doing that with these docs? Did you just do them at the beginning, or have you been kind of doing them all the way through?

**Rachel Nabors:** Absolutely. We did them at the beginning, we did them with a prototype site, and did them - well, right now. We're kind of always taking feedback. You know, this sort of thing where you hand people the site and you just sit back and you watch them and take notes and ask them probing questions... The development of the site started that way and has continued onward that way.

One of the challenges with this was we could have -- you know, it is a new design; we could have just designed things and thrown them over the wall and seen how they did, or showed people designs with mock content in it... But we really wanted to test the design with the content and see where people were getting stuck, where they were doing well... We caught a lot of stuff early, for instance networking issues that were making the examples take very, very long to load in different parts of the world. We caught those so early; we're really happy we were able to do that.

\[31:59\] Other things -- like, at first, people didn't realize that the interactive examples are interactive. They thought they were -- I mean, interactive examples are still fairly new. They're gonna be like old hat in a few days, I'm sure... But right now, people are still like "I thought that was a picture of the code." Or "I expected that to be a code block." So we had to do some things where we rejiggered the design to make it more interactive and more like a coding editor, with numbers down the side etc. But there's no way we would have known this if we'd just been like "Waterfall! Launch everything with horns." So this is why we did so much testing along the way.

There's also been formal surveying of people coming in and out of the testing pools, to get a better idea of how does this stack up against the old docs which you've recommended to a friend... And the signal has been strong, and it remains strong. We're still getting really good feedback. But now there's a question, because you know, you can sit over a person's shoulder and watch him for an hour, you can ask them to fill out a survey after they've interacted with the docs for a week, but now the question is "What kind of feedback do we get after people have been using the docs in beta for a while?" That's the feedback. This is the third stage of user testing. And that's why we are exceptionally keen to get that feedback.

**Amal Hussein:** And this is the uncharted territory stage too, right?

**Rachel Nabors:** The super-embarrassing stage where podcast hosts might say things like, "Yeah, I tried the docs, but I've gotta ask, when are you finishing all the API docs?"

**Amal Hussein:** "Where's the close button?" Just kidding. Hey, no, I didn't ask that to be prudish, I asked it to say "Hey, everyone, still work in progress." And really, I was gonna ask about how can people contribute, but you answered that on your own. Maybe because you knew I was gonna ask that. But still, thank you for doing it. You saved me the -- I didn't know what the answer was gonna be, so... You saved me the hassle of asking.

**Rachel Nabors:** I am pretty sure you asked about contributions, at least in your opening statement there.

**Amal Hussein:** Oh, okay. I did.

**Rachel Nabors:** I'm pretty sure that I heard you mention that. Don't worry about that one. But no, what I mean is like - now the feedback is more public. It's gonna be one of those things where somebody might wake up in the morning and go on to Twitter and be like "The emperor has no new clothes."

**Amal Hussein:** Right.

**Rachel Nabors:** Who knows...? But you do have to eventually take your baby, release it into the wild, and see how it gets on with others. And it's all part of the iterative process. I think one of the things that's really awesome about the new documentation is that we've really approached it like a product, like something we would develop -- like, we would solve these challenging issues that have come up for the community. We've been collecting this feedback, we know what we think people want. Now we've gotta see if we actually solved those problems. And there's no better way to test something than production.

**Amal Hussein:** Yeah. You know, it's so funny - there's that saying, and I swear I have to remind myself all the time, because I'm an absolute perfectionist... But it's - if you wait till you're not embarrassed about your code to show your code, you've waited too long.

**Rachel Nabors:** That is so true...!

**Amal Hussein:** Yeah, if you wait till you're not embarrassed, then you've missed so many opportunities for early feedback, that could have maybe even made it better. Because that's the beautiful thing about feedback - you always are in a better place because of it. The collaborative experience, even if it just shifts you by one degree, you are one degree better than you were without this feedback. So I can only imagine what it's like to really be receiving that kind of feedback from a percentage of two million developers. That's a pretty big percentage.

**Rachel Nabors:** We wanted to make sure that people were giving us... Like, some stuff, like networking issues - we don't want people to have to tell us that. We should be doing that ahead of time.

**Amal Hussein:** When you say that, do you mean like CDN coverage that you needed to add? Or when you say networking, do you mean just that the site was chunky? What do you mean by networking?

**Rachel Nabors:** Oh, we just had some issues in the beginning when we were still working out how the interactive examples worked... You know, in some places they took a little longer to render than others, and we didn't want to launch with something that was --

**Amal Hussein:** Subpar...

**Rachel Nabors:** \[36:10\] ...not polished enough for everybody. So there was a reason for keeping it behind a gate for a bit, to make sure that everybody was gonna have a great experience, that user testing was all around positive, people realized that the interactive examples were interactive, for instance... That was all good stuff. But now? Now the real question is "How is it gonna do in production?" And you can only test on a subset of users for so long. Eventually, you do have to see how it's gonna go. And you're absolutely right; you can run all the tests on your code to make sure it's working, but in the end, doing the code review is going to probably give you the most insights. Eventually, you have to share.

**Amal Hussein:** Yeah.

**Amelia Wattenberger:** I'm so curious if you have any quantifiable metrics to know how it's doing, or any goals that you can measure.

**Rachel Nabors:** I have a couple. One thing that we measure across all the documentation in the React family is a-ha moments in the testing phases of the documentation. We're actually looking at still testing to see if there's a way to let people tell us if they've had an a-ha moment on a page. This is a really good signal that the content is landing, and that people are feeling like they're grokking something; like something has been a revelation to them. You know when you're having an a-ha moment. So that's one metric that's been really good for early testing.

There's also questions that you can ask in a more mature documentation, that's been released for a while. You can ask things like MDN does, which is "Did you find what you were looking for today? What were you here to do? Were you referencing the documentation? Were you learning something from scratch? Were you decoding an error? Were you making a decision?" And from these different things, you can triangulate where your documentation might need to be filled out more. This is a survey that you can share with 1% of people who are visiting, and it kind of really helps you keep the pulse of your documentation, so you don't necessarily have to run gigantic surveys once a year. This way you're getting a sample from all your user base throughout the year, and it's much less intrusive.

Additionally, I like to use -- there's this thing called Net Promoter Score, which is a measure of how likely someone is to recommend a resource. It has been abused all over the place. There are people who use Net Promoter Score with call centers; like, why would you do that? You're just being mean with the people at the call center; the Net Promoter Score doesn't really work well with people outside the American culture, because, like, Germans - you can ask a German person "How likely are you to recommend this on a scale from 1 to 10?" and they will give you exactly what they feel. Net Promoter Score is calibrated for Americans, where if it's not like a 9 or a 10, you failed. They're not really into it. But in Germany, a 6 is actually pretty good. They did not hate it.

**Amal Hussein:** \[laughs\] It's more than half.

**Rachel Nabors:** Yeah. That's pretty good. So this is an interesting measure... And you really do have to read up on it before you start using it. But for me, from doing so much metric tracking with all the documentation efforts since getting here, it tracks really well with a bunch of other satisfaction metrics. So if that metric is doing well, I kind of expect that a bunch of other questions I could ask are also doing well, which means I don't have to ask people as many questions. "How likely are you to recommend this particular set of documentation to a friend or a colleague?" And that is a pretty good baseline from which you can compare before and after photos, or compare how well is my JavaScript documentation doing next to my Android documentation? Well, NPS is x, NPS is y... We can see that people are less likely to recommend this one, so let's investigate that. It's really good for taking the pulse, and before and after pictures.

\[40:09\] You can always do page metrics, thumbs up, thumbs down... Those are great for tracking how people are feeling about the documentation after you've moved on from the project. They're a little less useful when you're doing beta testing on new content, because you don't have a lot of people there thumbs-upping and thumbs-downing. You know, four people give you a thumbs up doesn't necessarily mean that that particular page is stellar. So that's the interesting thing about metrics. The more people you have giving you the data, the more trustworthy it is. When you're doing little tiny beta tests, you end up leaning more on qualitative feedback... Like, "What did you think of the docs?" People say "Ah, this is amazing. It's exactly what I need." That's a really good signal.

So it's a mixture -- when you're developing a new learning resource, it's a mixture of qualitative and quantitative. But once you release it into the wild, it really is helpful to have the quantitative metrics set up and running, to help you ensure, you know, look and be like, "Oh, these docs haven't been updated in a while and they're getting a lot of thumbs down. We should look into that." "Huh, we're getting a lot of feedback that people are coming to the references section, but they're not finding what they need. Hm... I wonder what it is that they need. Let's dive into the comments."

So metrics, and those quantitative and qualitative are your friend in changing ways throughout the educational material development lifecycle. Did I answer your question, Amelia? I kind of gave you a dissertation...

**Amelia Wattenberger:** Yeah, that was very thorough. I really appreciate it.

**Amal Hussein:** That was extremely thorough. I'm like, "I should be taking notes..." That was awesome. So where do I even start...?

**Rachel Nabors:** You can edit that down for the podcast; you do not need to share all that...

**Amelia Wattenberger:** No, it was great.

**Amal Hussein:** No, you don't need to edit any of that; it was phenomenal. So it seems like there's a few things I wanna ask you... Maybe I'll combine them into two questions. One is like, what was it like to work in the open, or what was it like to not work in the open? ...because I don't actually know how were you working on this project before you had this massive drop-the-ball moment... Or did people have like a smell that this was coming? I'm just curious how you did that.

And then the second question is really what it was like to work with all these people, maybe external to the React core team? Because it seems like there was a whole group of people. So who were they, and what was it like to work with them? Sorry for two big questions, but...

**Rachel Nabors:** I'm gonna have to pick one of them... You know I give dissertations one interview is like an entire essay here.

**Amal Hussein:** Okay... The external people. Actually, you know what? No, no. I think you can list that pretty quickly. I just was curious who was working with you. But I think I'm maybe more curious about how you worked on this before the launch. What was that experience like?

**Rachel Nabors:** Well, it was a couple of different experiences. We had to build a new site, that would contain the new documentation, and had a really good contribution workflow. It was hard to write the documentation before the site was finished, because so much of the documentation is interactive. You know, you'd be writing a Google Doc, and then you'd have to put a link to a CodeSandbox to explain what you're talking about, and this would be embedded. It was really, really slow and churny. But things picked up once we got a prototype site in place. That was a quick collaboration to set something like that up.

**Amal Hussein:** Did I read it correctly that Jared Palmer helped build the site?

**Rachel Nabors:** Jared Palmer helped build the prototype site that we were using to write the documentation up behind the scenes, yes.

**Amal Hussein:** Wow.

**Rachel Nabors:** That was spun up super-quickly. CodeSandbox had a dedicated team working on integrating the Sandpack with the site... And that was really fun too, because we were sort of their Guinea pig, they were also our Guinea pig, so we were kind of like co-Guinea pigs.

**Amal Hussein:** Guinea-pigging...

**Rachel Nabors:** Yeah. That was fun. And then, to actually build out the final site, there was a design effort. We had a UI designer in-house who worked on the code diagrams and how the interactive examples would work. And another designer, who came up with the design system which actually folded into a bit of a design refresh for the React brand - you might notice that the logo is a little smoother around the edges now. It's very, very subtle...

**Amal Hussein:** \[44:13\] \[laughs\] But is this the difference between a squircle and--

**Amelia Wattenberger:** A rounded rectangle?

**Amal Hussein:** ...a rounded rectangle? You know, that's very subtle... How different is this logo?

**Rachel Nabors:** I would actually say that's an accurate depiction.

**Amal Hussein:** Oh, okay. Excellent. Yay! That's what I figured, because it's not very noticeable...

**Rachel Nabors:** Yeah... And I was Razvan and Dan

**Amal Hussein:** What is it with big companies and the desire to constantly change logos or names? Google has done this a hundred times, Facebook did this... No, we don't need to talk about the actual -- like, just in general... It's just like this hilarious thing that we don't need to spend any time on...

**Amelia Wattenberger:** It's a rhetorical question...

**Amal Hussein:** Let's move on! Rhetorical question. Yes, that's exactly what it was. So yeah, I don't know... Amelia, you go. I mean, I have so many thoughts, but this is amazing...

**Rachel Nabors:** Wait, I haven't finished with my thank you credits...

**Amal Hussein:** Oh, you haven't finished. Oh, sorry. Okay. Great.

**Rachel Nabors:** Yeah. So then we had these cool designs, and we worked with Dustin and Dane over at This Dot, and they did the implementation for the designs. So there were a couple of different teams at different places, doing different integration work. Different people designing UI, different people implementing it, different people putting the new design system into place... And Maggie Appleton - the original prototype site was all my sketches and doodles everywhere... Because I'd be in a meeting, and I'd be like "Okay, and does state work like this?" "No..." "Like this? Is this a good metaphor?" "Okay, that's close..." And I put all these illustrations and hand-drawn diagrams in. And you know what the alpha tester feedback was?

**Amal Hussein:** What?

**Rachel Nabors:** "These illustrations are interesting and nice, but I cannot read the text." My handwriting was so bad. So toward the end we ended up bringing in Maggie Appleton, who does amazing React illustrations, to come up with a diagramming system that really helps... And you'll see that soon. We're still in beta. They're gonna be implemented. You'll see them soon.

And these take my chicken-scratchings and makes them actual diagrams.

**Amelia Wattenberger:** The ones on the site right now? I thought those are your illustrations, right?

**Rachel Nabors:** They are. The actual illustrations -- like, you'll notice there are illustrations that show React Head, who's like this IKEA dude doing things...

**Amal Hussein:** Yeah...

**Rachel Nabors:** Those are final illustrations

**Amal Hussein:** Gender-neutral dude... Or maybe not so gender-neutral. I don't know.

**Rachel Nabors:** It's React Head.

**Amal Hussein:** It's React Head, yeah.

**Rachel Nabors:** Not the star of a horror movie, but your helpful IKEA person, assisting you with assembling your component.

**Amal Hussein:** I feel like "Helpful IKEA person" is very gender-neutral though, so I figured React Head was non-binary, or something... But who knows.

**Rachel Nabors:** I like to think of it that way. And there are diagrams which are still very sketchy. You've got a proper diagramming system coming in for those.

**Amelia Wattenberger:** That's super-cool.

**Rachel Nabors:** That's pretty awesome. I think I've given thanks to everybody... Of course, the actual docs themselves, the learning path, everything - this was design by Dan Abramov, who you might remember has been blogging about React on overreacted.io forever. You read these docs and you may be like, "Rachel, you must know everything about React." I do not. Oh no, I do not. A lot of this is collaboration with Dan, with the core team, to bring these information to light. And yes, I have wordsmithed a lot of it. One or two of those pages are definitely exact products from Rachel, but most of them are a team effort. They have been through lots of revisions, iterations, there are "How to think in React" directly from React core team members, and... That's what's so special about this. I mean, it was kind of like getting to co-author a book on React for a year, and also produce the interactive part of it, too. That was just so cool. And the docs are the way they are because of so many amazing people putting in their efforts. We wouldn't have been able to test on real people without that prototype. We wouldn't have been able to get the interactive examples without CodeSandbox. We wouldn't have had these amazing examples in the first place without Sylvia.

So I really think when you look at these docs, you're looking at a synthesis of so many efforts, and a feedback of so many amazing volunteers who joined us at the start of the journey.

**Break:** \[48:33\]

**Amal Hussein:** Okay, Rachel, that was really incredible to hear, about just how many people were involved, and vendors, volunteers, you name it... You have a whole kind of smorgasbord of people helping birthe this into the world; it's just so exciting. I'm curious - the goals are kind of these lofty goals, right? Like, "Hey, you should be able to more or less master React through these docs", and you should be able to be comfortable, the API reference should cover everything you need to know to stay safe and be productive. So I'm assuming, as much as I know when I'm learning, I'm usually learning from multiple sources on the same topic... And usually, that's because they don't all cover the same thing, in the same way, and I don't always learn from them in the same way... So what gaps do you think that you guys are never gonna cover, and what types of things would people wanna kind of look to other places beyond the docs to gain mastery?

**Rachel Nabors:** \[52:19\] Well, for one thing, the docs strictly teach React. They don't teach React and Next, or React and Gatsby, or React for building a blog, or React for building your own app. It's strictly how to get great with React. If you want to learn those other things, there are amazing resources available. The documentation at Next and Gatsby is excellent.

What we wanted to do though was to make sure that these people who build great courses, great platforms etc. - that they have reference material that they could link out to, lean on, or even re-explain React better than we could to their audiences, but feel certain that they were -- in the case of trainers making courses, really be sure that they were explaining it right. We're not able to go out and offer editorialship to everyone's documentation and courses. We wish we could...

**Amal Hussein:** I know. I know you wish you could. Y'all are so generous with your time and feedback already, honestly. I really feel that truly about the React core team. You're very, very good about giving feedback to educators, and also just in general. You have folks like Mark Erikson; how can I talk about React without talking about Mark, who's @acemarke on Twitter and Discord. He's a phenomenal educator, super-patient... But I feel that very strongly about the React community. Y'all are just incommunicado. But I'm so glad to hear that that was the goal; that's so cool. It's very platformy. It's like, "I'm gonna build a platform for platforms", which is like "I'm going to make sure that we're supporting the educators when they're talking to their audiences, in the language that their audiences prefer." So that's really cool.

**Amelia Wattenberger:** One thing I wanna ask about is the layout and navigation is a little bit different from the official docs, or the last docs, which - I think they're both gonna live in harmony now...

**Rachel Nabors:** Well, eventually the beta documentation will be the documentation.

**Amelia Wattenberger:** Gotcha.

**Rachel Nabors:** Beta.reactjs.org will get merged to Reactjs.org. That's the end goal.

**Amelia Wattenberger:** Gotcha. Okay. Thanks for clarifying that. I read once that there's four, at least four types of documentation that are all kind of different. There's tutorials, how-to guides, explanations and references, and it seems like you've kind of split out to treat at least two of those separately, which - I'm curious what was the thinking behind that, and what is going where.

**Rachel Nabors:** That is great, thank you for bringing that up. Originally - I don't know if you've looked at Reactjs.org recently, but it's sort of... All of it is guides. There's some API documentation in there, but depending on what you're looking for, it could exist in multiple places. Like, you go find where the API docs are on the site; it takes a little bit of rummaging around. And if you're looking for a hook, you're gonna be rummaging a couple of different places. But you know, this is what happens when your information architecture kind of gets away from you here.

So there was an information architecture overhaul. We have API references, and we have the actual React Learn content, which is step-by-step lessons and guides for how to install, how to get something quickly running, and how to dive deep with React. These guides are actually a little bit different from the conceptual overview and guides docs you mentioned. They're kind of a merging of the two, because it's very hard to talk about React conceptually without actually showing things in progress. And if we did split up the conceptual overview, we'd run into a situation where we might end up with long essays here, and then explanations that don't really help you understand what's going on over here. And you can guess how much time people are gonna spend on which.

\[56:04\] So this goal-based approach to learning React actually kind of blends those two kinds of content into one. So as you're learning about how state works, you're also learning about the concept of render and commit, which is necessary to understand how state works. Setting state triggers a render process. Oh... But what is that render process? "Don't go to the other side of the site; stay right there, kiddos. We're gonna tell you about it right there." So that was the approach that we took with these. It's a little different, a little experimental, but it seems to be doing well with test audiences, and we think it's doing well in production so far... So - fingers crossed. We did take that particular approach here.

We do want to add some tutorials once we've gotten out of beta and gone fully-loaded into the new site... That is on the roadmap for the future. So I'm so glad that you brought of those different content types.

**Amal Hussein:** That's incredible. I mean, it really does feel very intentional, and it's clearly laid out when you're kind of learning, and then when you're really just in execution mode, trying to access API docs... And then when you're learning, I really like the new organization of top-level contents, like buckets, as well. I think that's like -- you've really shifted the mental model for how people should understand React. I remember you mentioned earlier just kind of that more of a focus on the rendering lifecycle, more of a focus on how things work under the hood... It's phenomenal. It just feels good. You know, when it feels good to navigate and read and learn in that order... I've spent a couple of hours on the new docs and I just didn't feel exhausted two hours later... And that's a good thing.

**Rachel Nabors:** Well, that's wonderful feedback. I'm gonna write that down.

**Amal Hussein:** You should write that down. It did not feel exhausting after two hours. \[laughs\] Don't ask about other symptoms. No, just kidding. So what's your favorite part of the site? I wanna hear - you, Rachel, what did you love? ...whether you helped contribute to it or not. What are your favorite parts?

**Rachel Nabors:** That's a really good question.

**Amal Hussein:** Because your answer is gonna be the title of the book called React Docs, The Good Parts. Just kidding. \[laughs\] Just kidding, kids... Anyways.

**Rachel Nabors:** I love so much of the documents here. Even some of the content -- like, there was the question of... There was this one piece called "Thinking in React", which was one of the original "Here's how React helps you think about building UI." And at first, it was like, "Yeah, I've gotta make a whole new page all about thinking in React. Yeah. And for the modern world." But people in beta testing kept being like "Don't forget about keep thinking in React. I love that piece, man." And I was like, "You know, it's such a classic. We can't burn it down." So I went through and gave it a bit of a facelift for the modern era. You know, the original Thinking in React piece was very, you know, "Here's a new way you may not have thought about thinking about your interfaces, kids. Have you heard about atomicity?" Yes, everyone has heard of that by now. Let's write this as though people probably have encountered some of these concepts already. They've permeated other branches of programming, they've inspired new approaches out there, so let's talk more in the present and less in the past... But just updating that classic was a real honor. It was very awesome to see it with actual interactive examples, showing the thing that it was describing originally in the text.

My personal favorite is the Describing the UI section, which is really just introducing you to the concept of components and props... You know, "What are these things? How do you structure them into extra files?" There's a lot of stuff there that we saw people coming out of bootcamp maybe not quite take this up yet. We got to cover some of those basics again, and it was actually a lot of fun to work on some of those pieces, and break things down. And even more fun to read through the individual feedback on those pieces. You hear someone say "This was the best explanation of this that I've ever read", and I'm just like

**Amal Hussein:** \[01:00:14.24\] Yeah! Nailed it!

**Rachel Nabors:** "Yes! Yes! Yes!" So I'm kind of proud of the whole thing, but exceptionally proud of the guides and the work done on those. People love it. It just came out so well.

**Amal Hussein:** Yeah. That's the educator in you. Rachel, I think at core maybe you are just a teacher, honestly... And I shouldn't say "just". But I think you are -- I think education has definitely been the theme that's been woven through everything that you've done, I think...

**Rachel Nabors:** Yeah, it's kind of the red thread.

**Amal Hussein:** It's the red thread, yeah. So I think it's no surprise that those are the pieces that come home for you... But that's really exciting. Very, very cool.

**Rachel Nabors:** I'm glad that I had the chance to be a part of this. It's inspiring. I know that these resources are going to change; who gets great with React, who gets what jobs, who teaches who, and the quality of how people about that, and the confidence that they have going forward. I'm really honored that I got to be a part of something that's gonna just be so useful for so many folks.

**Amal Hussein:** Yeah, for sure. And I think what's interesting also - kind of circling back to your earlier comment around you're really excited to make better materials for educators... I think what's great about this is it's one of those things that's like "A rising tide lifts all boats." It really feels like with the core docs being better, everything else is going to have a new baseline as well, in some ways. Of course, not everything, but those things that choose to participate, I think, and pull from these docs, will certainly be elevated, right?

**Rachel Nabors:** And that makes me wanna give a callback to something we talked about earlier about the metrics... Funny thing about Net Promoter Score - it's always falling.

**Amal Hussein:** Interesting.

**Rachel Nabors:** Do you know why that is?

**Amal Hussein:** No. Oh, because recency bias? I don't know... Why?

**Rachel Nabors:** I don't actually know that expression...

**Amal Hussein:** Oh, recency bias? It's probably because it's something I made up; I don't know if it's official... But it's like just the thing that's most recent. Let's say you have a competition and there's five people pitching, and it's usually like the last one or two people pitching, they have the recency bias advantage, because they were most recent... Because we tend to forget things. We have low RAM, you know?

**Rachel Nabors:** This is not that.

**Amal Hussein:** This is not that. Okay, cool.

**Rachel Nabors:** So there's a word for this, and jump in and tell me if you've heard of it before... It's where today's amazing becomes tomorrow's expected. Remember when the iPhone came out? Everyone was like, "It's a touchscreen! It doesn't have keys!"

**Amal Hussein:** Oh, yeah...

**Rachel Nabors:** And now it's like, would you be able to sell someone a phone that wasn't a touchscreen? No. Nobody would buy that, except for very strange people who have specific needs. Like, those keys are so much easier to feel if they're actually physical. But let's be honest, the mass market has changed its baseline; they now expect what was once unexpected.

**Amal Hussein:** Oh my God, yeah.

**Rachel Nabors:** I mean, think about it... People are gonna expect interactive examples in their docs. People are gonna come to the React documentation in a few years and they're gonna be like "Yeah, but I can't just click a button and it builds my app for me." Or "You know, these are great, but I expect to be able to dial in and talk to a core team member when I have trouble."

**Amal Hussein:** \[laughs\]

**Rachel Nabors:** Who knows what's going to happen with the future of documentation...?

**Amal Hussein:** Yes... Because ReactJS developers will all become Oracle Enterprise developers, too. Anyways. Actually, no, Rachel, OMG, I can't believe -- that's why I was gasping while you were saying that, because I just realized that yeah, this is one of those tipping points where React has enough of a market in the developer tooling community that we are going to now see this be the new standard. Similar to how zeroconfig became a new standard for developer tooling. Install and run commands; don't worry about config files if you don't need to.

\[01:04:18.04\] So this whole kind of like smart defaults movement, interactive API documentation, like Stripe - and this is a really good segue into some of the inspiration for this site... But Stripe set the bar; literally, everything became copy-paste after that, where you see services like Twilio... It just was the first domino, so this might be the first domino in that same way, which is interesting.

And actually -- yeah, I'll let you respond, but I do remember the question that I wanted to ask you from earlier, which I think is a very relevant question from our listeners... So my question, Rachel, is "How long are the current docs going to live side by side with this beta?" And can we expect that the current docs, the content is always going to be the most accurate and latest and greatest on both the beta and the current? I just wanna know what's the lifecycle and management of these two? Because you can't strictly cut over yet, because of the API docs that are still in progress, and whatever else.

**Rachel Nabors:** And for achieving content parity.

**Amal Hussein:** Right.

**Rachel Nabors:** There's still some documentation and content on the main site that needs to be ported to the new site. We're writing the documentation live right now... I can't give you an exact date about when that will land... If anything, I think the last year has taught us that exact dates are kind of a tricky thing to promise...

**Amal Hussein:** I know...

**Rachel Nabors:** But if you want the latest and greatest, the beta.reactjs.org is a safe bet. We are actively developing the content there and contributing to it, and that is the place to go to.

**Amal Hussein:** That's awesome. Thank you so much for that. So I guess we can close out on the inspiration... It's clear that there's echoes from many different things, including even just in your collaborations. This new beta site wouldn't have been possible without all of the hard work from folks like Sandbox, CodePen, JSFiddle... Whatever was the first thing, made it easy for us to write JavaScript and interact with it in a web browser.

There's so many shoulders of giants that you're standing on... So can you maybe talk us through what were some of your inspirations, and how did they feed into this final product?

**Rachel Nabors:** I think a lot of our inspiration for this, it came from honestly texts about how to teach people. Making It Stick is a really good example of one of those books that really changed how we approach React, instead of just telling people "This is how React works" with a bunch of diagrams. We added actual interactive challenges, so that people could get retrieval practice in.

We were inspired by textbooks as well. The structure of textbooks, with chapters, overviews... A lot of people in courseware design are doing really amazing things that could apply to the realm of documentation. Course design, courseware design, which takes a lot of inspiration from textbooks and formal education.

I know some people who work on whole computer science, aligning how their documentation and educational materials teach to new computer science standards for curricula that are coming out for United States and the United Kingdom. There's an entire formal education component where I could not name all the different inspirations. We tried to bring a little bit of that here. We wanted it to be something that could be a good foundation, or at least plug in nicely to other people's curricula.

And of course, the Stripe documentation - you already mentioned it. There are a lot of things that didn't make it out of the prototyping stage that we wish we could have done, but we really wanted to focus on getting to beta. Stripe has just been such an inspiration... I love how they used scrollytelling to get through the examples, and line-by-line, the code. I really found that informative.

\[01:08:09.03\] And lastly, I do wanna give a shout-out to everyone's favorite, MDN. Way back in the day, I used to write documentation for the Web Animations API with MDN, and that spirit of collaboration, of - you know, everyone who's written on MDN gets their name added to the... Well, if you dig around on GitHub, you can find it, but... That spirit of "This is a team effort." It's documentation as open source, and I loved how MDN did that. I loved how MDN partnered with the community to teach the community, and I think that a lot of that spirit has found its way into the project as well.

**Amal Hussein:** Wow. Well, that was inspirational... Are you inspired? I'm inspired, Amelia...

**Amelia Wattenberger:** Oh, yeah. Yeah, such a good list.

**Amal Hussein:** Solid list. It's near impossible to talk about documentation and not mention Stripe... It's just like, I can't do it; if you find a person who can, really, is my challenge to you... But speaking of docs - listening to you, I had this thought that I wanted to share, which is... I wonder if any other industry uses technical documentation in the same way that engineers do; software engineers, particularly. Because I studied biomedical engineering, so I do have a background in engineering that's not related to software... And I can tell you, we'd read textbooks and open things in whatever; you know, my thermodynamics book, or whatever... But you don't really go back to your reference material in that way. Versus, like, me - Iike, I'm opening API docs, I'm looking at reference material and I'm reading technical content, and there's something very educational about our documentation, in a way that I feel like your comment about how so much of good courseware design could be applied to technical docs... I think that that's the first time I've ever heard of that, and I couldn't agree with you more. I just kind of wish that we really thought about technical docs really as more education, versus just trying to get something done.

**Rachel Nabors:** I agree. And I've noticed this. I came in as a developer advocate/docs at Hybrid, and obviously, I've found after a little bit working here, I realized "Wow, the documentation just has such a scaling impact." I can get up on stage and give a few talks, but once you write something, everyone can reference it, repeat it; it catches like wildfire, and that's the big impact.

But I feel like between developer advocacy, which is very much going out and really interacting with the community, and there's a community stewardship aspect to it, there's the information and teaching aspect to it... And with documentation you've got the teaching aspect, you've got the formalized making of features concept... But there's a space that sometimes falls in between the two. This developer education space. And it's not always clear who's running with that ball. And I'm always interested to see who in the community is making that their job, and really investing efforts in that... And I think you see that in some places, like Stripe and Twilio, where they're really going all-in on the developer education aspect... And I think that's something we'll be looking at more and more. And pardon me for saying it, but the pandemic, with everyone being inside, not being able to be on stages - we really only had one way of communicating, which was through the screen... I think it brought the focus back onto "Well, how do we scale this knowledge? How do we convert the great content that the core engineers are making, that advocates are sharing on stage and in workshops - how do we turn that into something that anybody can access at any time and anywhere?" And I just can't wait to see what the next couple of years hold for this space.

**Amal Hussein:** I couldn't think of a better way to end this show... I didn't even make that connection myself, around technical docs and the pandemic, and there being less ways to learn these days. You can't go to an in-person workshop as easily as you could in the past... So we're forced to get better at this. It's similar to how a lot of companies started investing in their testing infrastructure once the pandemic hit, because they've found all these bugs on their websites...

So I just wanna say thank you so much for everything that you bring to this community, Rachel. We're really lucky to have you. And truly, this is a game-changer, and I'm really excited to at least be witnessing this bar get raised right in front of my eyes... So thank you so much, and... That's all for today, kids. Have a good day, y'allz...
