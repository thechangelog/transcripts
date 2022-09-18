**Jerod Santo:** Ahoy-hoy, friends... Hey, I'm not supposed to say that. I'm Jerod, your internet friend. I'm not Nick Nisi, but he's here. What's up, Nick?

**Nick Nisi:** Ahoy-hoy. Can I still do it?

**Jerod Santo:** Is there an echo in here?

**Nick Nisi:** \[laughs\]

**Jerod Santo:** Yes, you can still do it. In fact, we're waiting for the day that Nick goes to a conference or an event IRL, and somebody walks up and says, "Are you the hoy-hoy guy?" Aren't you waiting for that day? Won't that be fun?

**Nick Nisi:** I am... I'll tell my children about that day.

**Jerod Santo:** And not ahoy-hoy, but hey, Kball. It's you. Kball, what's up?

**Kevin Ball:** Hoy... Hoy...?

**Jerod Santo:** \[laughs\] See, you can't pull it off. Only Nick can pull it off, no matter how hard we try.

**Kevin Ball:** Hoy-hoy?

**Jerod Santo:** That was actually pretty good.

**Nick Nisi:** It was pretty good. Stop it.

**Jerod Santo:** Don't move it on Nick's space, man. He's trying to create a brand. Now, every time you say that, you pay a royalty to The Simpsons, to Matt Groening?

**Nick Nisi:** Brought to you by Carl's JR.

**Jerod Santo:** There we go.

**Nick Nisi:** Another one Kball won't get...

**Kevin Ball:** I think I've gotta send my royalties to Nick, and then he forwards them on.

**Jerod Santo:** Oh, and he can just take like a penny out of it and pass on the rest.

**Kevin Ball:** Old school pyramid schemes.

**Jerod Santo:** There you go. Well, if I had a nickel for every time I bombed an intro, I'd have one more nickel than I did this morning, because we're going nowhere. Let's get into the show. Hey, friends. We have an awesome show for you today. We're gonna go ahead and get started with it. The first thing we're going to do is we are going to Holla.

**Jingle:** \[00:03:34.25\]

**Jerod Santo:** Today's Holla segment is holla-ing at React India. This is India's biggest React conference, it's back again, and this time, it's going to be bigger, better and hybrid, which is definitely a growing trend. If you haven't heard of the event, React India is an international conference that provides a platform for developers to share and discuss their insights and experiences with React. It provides developers from India an opportunity to meet, listen and network with React developers and open source contributors from all around the world.

This year the event is held on September 22nd to September 24th. Like I said, it's hybrid, and so it will be live in Goa, India, and also online. They have some great speakers, names you'll probably recognize. Tejas Kumar - he's been on the show recently; Josh Goldberg, Lidia Halley and many more... So definitely attend React India, if you're in the area. If you're not, don't worry about it. It's hybrid. Hop online, meet some folks, learn some cool things. So we'll have a link in the show notes to that. Like I said, it's just a few weeks away... So check it out, React India. This has been Holla.

**Jingle:** \[00:04:51.14\]

**Jerod Santo:** Now, we have some other awesome segments for you as well. The first one we're going to do is "I'm excited about X", where X is literally anything. However, we do not have a theme song for this, and I was not gonna go sing a theme song, because the last time I did that, Kball ridiculed me endlessly.

**Kevin Ball:** And you deserved it.

**Jerod Santo:** And the last time Nick did that, I ridiculed him endlessly. So instead, I went out and talked to our good friend, Horse JS, and I asked HorseJS if they would sing an "Excited about X" jingle. This is what they came up with.

**Jingle:** \[00:05:26.16\]

**Jerod Santo:** Thank you, HorseJS, for that spectacular jingle. We'll be sure to use that every single time.

**Kevin Ball:** And that's it. How do we follow that?

**Jerod Santo:** Right. And that's the segment, folks. Moving on... No, we do have some cool stuff to talk about. This is a segment where we just talk about what excites us right now, and we're doing it right at the top today because hey, when you're excited about something, you don't want to wait till the end to talk about it. So let's talk about it right up front. I have myself first in the list, but that's not a very gracious thing to do, so I'm going to kick it over to Kball to start us off. What are you excited about?

**Kevin Ball:** I am excited about container queries. Woo-hoo! We had a news of the week not that long ago that they are about to go production in Chrome. So the next mainline chrome release will include container queries... And I've started talking with folks on my team about how do we want to use them, and how do we want to take the approach. And I think it's going to be fun, because it gives you a different way of thinking about responsiveness baked into CSS; and there'll be a discovery period, like when does this make sense and when doesn't it make sense?

I mean, I think there's some obvious cases... One obvious case is, say I have kind of a main product surface, and I have some independent panels that can go in and out and change the size of that product surface... Being able to scope my media queries to be it in that main product surface and to have that container, rather than having to do math around "Okay, is this open? And is that open? And how wide are they?" and all those other things - like, that's super-straightforward and no-brainer application?

But then there's other questions, of like "Does it make sense to have a component that changes how it looks depending on the space given to it and you drop it in some place? Or does it make more sense to have that be explicit? And when does it and doesn't it make sense?" and all these different things. So I'm really excited to be kind of exploring a new paradigm for thinking about responsivity in CSS.

**Nick Nisi:** So maybe just for some of us who aren't following along, what is a container query?

**Kevin Ball:** Yes. Oh, good point.

**Jerod Santo:** Asking for a friend...

**Kevin Ball:** Good question. So first off, you're probably familiar with media queries in CSS. But if you're not, I'll highlight - these are queries that you can write in your CSS that let you change the way something is styled based on some attribute of the viewing browser. Traditionally, these were mostly around size of the browser window. Now, there are also media queries around capabilities and other different things that you can do there.

\[00:07:59.13\] But if we scope this to size, because that's what's relevant for container queries, traditionally you'd have to say, "Okay, how wide is my browser? If it's smaller than some amount, do this thing; if it's larger than some amount do this other thing." And this was how we are able to make responsive websites using purely CSS. Container queries take this and say, "Okay, instead of having that only be based on the browser width, we're going to pick an element in our page and call that a container, and we can then use queries within it to change the way that things are styled based on the size of that container."

So suddenly, you can have a component that understands how to resize itself or be responsive to size based purely on where it's located in your page, and how much space is available to it. This is a feature that CSS developers have been asking for as long as I have been in web development, I believe. I remember looking it up -- like, it was in the early 2000s when there were the first requests for this. For a very long time everyone said it's impossible. You can't do it. It's impossible. Nobody will ever be able to do it. And then at some point, somebody figured out, "Oh, wait... We do have a way to do this." And now all the browsers are working on it, and Chrome is the first one shipping it.

**Jerod Santo:** So how far away is it?

**Nick Nisi:** Don't look at Can I Use...

**Jerod Santo:** No, for use...

**Kevin Ball:** For Chrome it's the next mainline release, which is -- I don't know, T minus six weeks at most, and I don't know exactly when that is.

**Jerod Santo:** Right.

**Nick Nisi:** According to Can I Use, it was released August 29th. So...

**Jerod Santo:** It's out.

**Nick Nisi:** Two days ago...

**Kevin Ball:** Okay.

**Jerod Santo:** Boom. Update your Chrome. Get some container queries on.

**Kevin Ball:** Update your Chrome; you've got container queries. Exciting. For Firefox, I don't know. So if you're worried about Firefox, if you're worried about all those funny cross-browser things - yeah, you'll probably still have to wait for a little while. But you have the ability to start playing with it now.

**Jerod Santo:** Yeah. Is there any way to like polyfill this? It seems like it'd be difficult to polyfill.

**Kevin Ball:** That's a great question, and I don't know the answer.

**Jerod Santo:** Because it looks like -- I'm on Can I Use now. Safari has it in 16 Technology Preview. And like you said, it's released in Chrome. Is safari 16 -- that's not out, right Nick? Safari 15 is out. I don't know.

**Nick Nisi:** Right. But come next week, iOS, whatever, 16, will probably be out with that.

**Jerod Santo:** So there you get most mobile devices, and then -- I mean, Chrome plus Safari is most mobile devices at that point...

**Nick Nisi:** True.

**Jerod Santo:** ...pretty much. You've got Android and iOS covered. And then you have Chrome, which is like 65% browser share, but then you're missing Firefox, Edge...

**Kevin Ball:** So it looks like there is a polyfill.

**Jerod Santo:** Okay...

**Kevin Ball:** It only works in browsers that support :where. And it has a couple other limitations, and I suspect it's pretty performance-intensive. So it's not necessarily something you're going to want to use a lot.

**Jerod Santo:** So Nick, for those who don't understand what polyfills are, can you give us the 101 on polyfill? What's a polyfill?

**Nick Nisi:** That would be being able to fill in capabilities that aren't supported natively by the browser, but can be kind of implemented in in JavaScript, most likely, or in some technology... But you can ship it as a third party library that mimics the same API, and fills that in when it's not available. So it usually does some kind of test to see if it is available, and then provides that functionality, and otherwise lets the browser handle it natively.

**Jerod Santo:** Right, which is really nice for features like these, that are new, and only implemented in a few browsers. If you want to use them, and if they do have a polyfill, now you're bloating a little bit your application size by including that polyfill, but it's trade-offs... And then you can use those technologies of the future today. And as browsers add them, eventually the polyfill becomes unnecessary.

So let's just imagine that you have an application that you want to use container queries and let's just say there's no polyfill. At this point, we have Chrome and Safari - call them green; full support. And let's just say they're released. But we're missing Edge, we're missing Firefox. Would you guys use this, or would you say "I've gotta support Edge and Firefox?"

**Nick Nisi:** Honestly, it depends on the use case I have and the stability of the polyfill.

**Jerod Santo:** \[00:12:09.20\] Let's say there's no polyfill.

**Nick Nisi:** Oh. Then no.

**Jerod Santo:** It's a hypothetical no.

**Kevin Ball:** Only for play projects.

**Jerod Santo:** Play projects...

**Kevin Ball:** At work we're serving enterprise folks... There's a ton of people using Edge.

**Jerod Santo:** Right...

**Kevin Ball:** I can't user-advocate anything that won't work in that environment. However, for fun, for play projects, for just consumer-facing, "I'm not trying to make any money off of this", yeah, sure.

**Jerod Santo:** Right. Or for things that you know are only targeting specific browsers, like Chrome extensions. That's what's kind of fun about building extensions, is you can be like "This is for Chrome, so I can use everything Chrome has", and not worry about all the things that us professional adults have to worry about. You can kind of just play around and have fun.

**Nick Nisi:** And obviously not for something like this.

**Kevin Ball:** That is a really interesting idea, too. If you have a Chrome extension that's manipulating web pages, and you're injecting components of some sort, now you have a way to make those components responsive to whatever it is you're injecting them into. That is a fascinating use case.

**Jerod Santo:** Very cool. You are excited about this... But we have to move on. I'm excited as well; I'll be I'd be more excited with better browser support. But those things happen over time. What I don't understand with Can I Use, which is just like a Can I Use complaint, is like - when I see Edge doesn't support, it doesn't tell me like... I would love to have like their official stance. If they've said they're going to support it, even if they back down on it later, or like, they're never gonna -- sometimes it's like, "Yeah, they're never gonna do this. They've said it." Other times it's like "We're waiting." And sometimes I would love to have that information, without having to go dig it myself. That's just a caniuse.com feature request... But I digress.

**Kevin Ball:** They're downstream of Chromium, right? \[unintelligible 00:13:52.12\] Chromium?

**Jerod Santo:** I don't think so.

**Nick Nisi:** No... Well, I guess that's browser versions. But right, Chrome 1.05 is the one that included that, and Edge says that its version is 1.04. Presumably, it's coming soon, but there's no --

**Jerod Santo:** Oh, okay.

**Nick Nisi:** I mean, I'm just reading that. I'm not --

**Jerod Santo:** You're reading between the lines.

**Nick Nisi:** Yeah. Not sure if that's what they actually do.

**Break:** \[00:14:15.23\] to \[00:16:16.16\]

**Jerod Santo:** Nick, what has you excited these days?

**Nick Nisi:** I am excited -- and I can't remember if I've ever talked about this on the podcast, but I probably have... And it's an app called Obsidian. Have you heard the good word?

**Jerod Santo:** Oh, yes. You've told me about this. I'm not sure if it was on the show or not. But you've got me excited about it, so much so that it's in my list of things to look at. But I haven't looked at it yet, so please, tell us more.

**Nick Nisi:** It is just such a fantastic note-taking app that specifically works on a folder full of markdown files. That is literally all it is. So it's as portable as you can get. There's no unencrypted Notion databases that it's going into, or... I didn't mean to call out any competitors specifically, but it can't possibly corrupt your notes, because you can just pull them out as the markdown files they are, and throw them into any other markdown viewer and look at them there.

**Jerod Santo:** Right.

**Nick Nisi:** But it just does so much around the plugins that it has, and the ability to automate different pieces of it. I have like so many notes that are automatically generated for me... Like, I have a daily note every day that fills in information about all the JIRA tickets I'm working on automatically; it pulls from the tickets, it pulls from GitHub, it pulls from my to-do list about what I did yesterday, it pulls from my logbook about the meetings I had yesterday in case I want a quick reference to that... It pulls just random information. It queries me about like daily questions that I asked myself, and I kind of give myself a rating on "Did I learn something new today? Was I a good dad, doing fun things with the kids? Did I exercise?" All that. And I can graph that over time and see how I'm doing. And it's just amazing. And it's all written with web technologies, right? So I can hit Command+Shift+I on obsidian, open up the dev tools, and I can write my own extension right there by forking a TypeScript starter project and get going. It's just so nice and easy to use.

**Jerod Santo:** That's neat.

**Kevin Ball:** \[00:18:05.19\] Is it seamless to sync notes across devices?

**Nick Nisi:** It can be...

**Jerod Santo:** Using a different tool?

**Kevin Ball:** Would I have to set that up myself, or do they have some easy way to do it? Because I use Roam Research right now for note-taking, which - I'm looking at this, and it looks like this supports a lot of things. The big thing I love about Roam right now is I use it across my phone, I use it across multiple computers, all these different things, and it just keeps everything synced easily.

**Nick Nisi:** Yeah. It does for me, too. I use their sync service, which like -- I had to create my own encryption key and use that. And like, if I lose that, I lose access to all my data. So I know it's all encrypted like that. It's very fast and seamless through that, but I pay yearly for that. And that's like the part of Obsidian that I pay for. If you don't want to do that, you can use iCloud or Dropbox to do that sinc-ing. I also do a backup to a Git repository. So I have a plugin that just every half hour during work hours just pushes a new commit to a private Git repo, and backs everything up that way as well.

There are several ways that you can do it, but that's like the best part of it, is it's just a folder of markdown files, and if your phone can open that, too... Like, you wouldn't even have to use Obsidian on the phone. They have mobile apps, but you can just use it anywhere.

**Jerod Santo:** So do you find the markdown that it produces to be as good a markdown as if you're writing it inside a plain text editor?

**Nick Nisi:** I do. They have a Vim mode for all of that, so it's really nice and easy.

**Jerod Santo:** Oh, no wonder they got you...

**Nick Nisi:** Yeah... \[laughs\]

**Jerod Santo:** Do they have a TypeScript mode, where you can just type your notes in TypeScript? Because then you'd be really love...

**Nick Nisi:** Have you ever used like a Jupyter Notebook? ...like, being able to write stuff and then put data right in there?

**Jerod Santo:** A little bit. Not enough to speak well on it, but...

**Nick Nisi:** Yeah. There's like a plugin that's not in their official plugin repository yet, but there's a plugin for that, where you can just write TypeScript or Python... Like a number of different languages right in line, and it will render that out. So you can make it do whatever you want, which is really cool.

But the really cool thing also is that they have a like a WYSIWYG style editor. When I'm on the line or whatever, it's markdown, but then when I go to another line, it renders out to what it would look like if it were --

**Jerod Santo:** It renders the markdown on a line-by-line basis, instead of like left/right panes, which is typically what you see. That's interesting.

**Nick Nisi:** Yeah.

**Kevin Ball:** It sounds a lot like Roam, except it's local markdown files, rather than on there.

**Nick Nisi:** It's local markdown. But then there are some really popular plugins. There's one called DataView, that lets me write code blocks, fence code blocks... And for the language, I just put \[unintelligible 00:20:37.05\] if I want to intermix JavaScript with that. And that is basically like an SQL language for my markdown files. So I can say, "Create a table based on every note that has this tab..."

**Kevin Ball:** That's cool...! Okay, you might have just sold me. \[laughs\]

**Nick Nisi:** It's amazing. My daily note is basically a bunch of those, that are like, "These are the notes that I've left unsorted. These are the notes that have this specific tag that are in progress right now. These are some notes that are completely uncategorized", and I can just like have a dashboard into everything and see it right from there. It's just so cool.

**Kevin Ball:** That is really freaking cool. Okay, I just went from "Okay, this sounds cool, but I've already got a good solution" to "I might have to try this."

**Nick Nisi:** Yeah. It's amazing.

**Jerod Santo:** Well, Nick, that Obsidian affiliate fee you have going is really gonna work out nicely...

**Nick Nisi:** \[laughs\]

**Jerod Santo:** Just kidding. I'm sure this is pure enthusiasm.

**Nick Nisi:** It really is.

**Jerod Santo:** And I do want to check this one out as well. I can go round and round talking about note-taking, but we're gonna move on so we can have other topics in this show... But you're speaking my love language as well, so... Maybe I will finally try it, even though I'm just stuck in my ways.

\[00:21:48.16\] Alright, what I'm excited about - Stable Diffusion. You all heard this, you all know this term... This is blowing up in interest and popularity right now. This is an open model based off of what we see with OpenAI's closed - well, proprietary; OpenAI's proprietary... Anyways, DALL-E. And it's a text-to-image diffusion model. The best roundup that I've read is Simon Wilson, who I think I've referenced him probably a few weeks ago, with his Curl and with his SQLite tip. So he's been writing lots of good stuff lately. He has a great blog post about Stable Diffusion, he calls it a really big deal. He says "If you haven't been paying attention to it, you really should be."

It was released just recently, like August 22nd, by a company called Stability.ai. And like I said, it's a lot like OpenAI's DALL-E, but they released the entire thing. So anybody can use it, anybody can build on it... It's very permissively licensed, and available to create new things. And because of that, there's been like this big explosion of people building things around it.

So this is the art generation AI. I mean, you type in a prompt, and it generates art for you. And it's really good. I mean, the results coming out of it are quite impressive, and it has all sorts of things people are building. One of the things that somebody has built is called Image to Image.

A typical thing is like you give it a text prompt. You say, "a raccoon floating in space" or something, and it shows you art of raccoons flowing in space. And that's cool. And that's mostly what I've been doing as I've been playing with this thing. It's very addictive as well. Careful, it does cost money if you use their hosted service... And you'll run out of those free credits very quickly, at which point you'll be so into it that you'll start pumping money into it... So be careful. But you can also run it on your own GPUs locally on your machine. I just haven't gotten that far. And it's pretty fast... So it's actually cheap in terms of energy consumption.

That's cool, but then there's a new thing called Image to Image. In this case, instead of just providing a text prompt, you provide it a source image that you've like hand-drawn or something, and then you provide it a text prompt. And so the example they give is basically like line art of a circle, and some rectangles... You're kind of just like laying out what you want, and then the description is something along the lines of like "A distant, futuristic city, full of tall buildings inside a huge transparent glass dome, in the middle of a barren desert full of large dunes, sunrays, art station, dark sky full of stars, with a shiny sun, massive scale, fog, highly-detailed, cinematic, colorful." Like, you feed it that, and I will link to the results in the show notes from that. Like, your source image, which is like this really low-res, almost like MS Paint style thing, then the text describing it, and then the results... And they're stunning. They're stunning. So that's just one thing that's going on.

People are creating Photoshop plugins where you can just like highlight a section of your Photoshop project, and like describe some stuff, and hit Generate, and it inserts it right there... And then you can edit it, do it again, generate, it insert new stuff... The amount of art that's going to come out of this thing is going to be staggering. It's pretty exciting. I've been playing with it way too much, and it's so much fun. Have you guys tried it yet? Kball is nodding yes.

**Kevin Ball:** I'm like going right now. Somebody published on Hacker News a hosted thing...

**Jerod Santo:** Yes.

**Kevin Ball:** I'm actually thinking about this... This would be a cool way to generate blog post images, right? So you write something up... Like, there's always the tricky thing of like, "How do I generate a cool image to go with this?"

**Jerod Santo:** Totally.

**Kevin Ball:** Like, start with that, download it, add some text, or what have you...

**Jerod Santo:** So Peter Cooper of JavaScript Weekly, and all those weekly newsletters - he has started to use this; he might be using actual DALL-E, he might be using Stable Diffusion. I'm not sure. DALL-E is like a sign up, paid-for service, there's a free plan etc, that you have to use there. But Stable Diffusions is like, anybody can download this and use these things, and so people are really starting to do cool stuff with it... But he's done that a few times at the top of his newsletters, and it has some super-cool results.
\[00:26:10.10\] I subscribe to his Postgres Weekly, and the Postgres mascot is an elephant, and he just has this really cool, artistic, painted elephant at the top, and he's wearing a spectacle... And the topic was like "Looking inside of Postgres..." I don't know, it was like on-point for the topic. It was like, "That's a really cool way to add some flair to your content." I'll put the link there in the chat if you guys want to check out the result of that thing I explained. It's so cool.

**Kevin Ball:** Yeah... Some things -- I'm tinkering around with it. It's pretty hit or miss. But when it hits, it's really freaking cool.

**Jerod Santo:** Yeah. There are ones that aren't as good. If you click through, if you're on the \[unintelligible 00:26:44.07\] I think is like the one that's the hosted that's paid for, and it gives you some free credits to start... They have an actual thing where they'll teach you how to prompt it better. And once you read through that, you'll get much better results.

The main thing is you actually have to tell it what kind of style you're looking for. You can tell it specific artists; you can like, "Like Rembrandt", and it's going to do it in the style of Rembrandt etc.

So once you learn how to prompt it better, the results are more, I guess, consistent... But yeah, there's still gonna be hit or miss, but... That's the nice thing about having humans working with the AI, is then we can do the last mile, right? We can pick the best one.

**Kevin Ball:** It's human augmentation, not replacement.

**Jerod Santo:** Yeah, it's like collabing with a computer, which is kind of weird, but cool...

**Nick Nisi:** There was a conference, I went to locally called Connectaha, and one of the speakers - every image that they had in their slides came from the DALL-E Caryion site... And it was just really cool seeing that. He just typed in some prompt that was based on the slides, and it gave its best representation of what that could be, and it was -- it was a really cool way to talk about that, and he kind of also talked about how he did that... It was kind of cool. I loved that idea.

**Jerod Santo:** Yeah, there's a lot of interesting, I guess, long-term will be legal, as well as ethical questions, because these are similar to the way GitHub Copilot's come into question, of like, "Okay, is this legal, first of all? Is it moral to do this?" etc. It's a very similar process. This thing gathers gigabytes and gigabytes and terabytes, or whatever -- like, billions of pictures from around the web, distills them down into like, I don't know, matrix math or something, some crazy math things, and then uses that as like a filter through which to run this neural network... And out pops something, "new", or derivative, I guess is the right word... And you know, the concept art that we're seeing come out of this, and think about how far it's come from the initial DALL-E release to this, and then go like a year or two ahead, and think about what it'll be then... It's rivaling what humans can do at this point. So like, there's a lot of people who do -- concept art is their job, right? Or like branded content with artwork... I don't know.

**Kevin Ball:** Yeah. I mean, the blog post example I'm talking about - I usually buy those images, right?

**Jerod Santo:** Yeah. I mean, logos...

**Kevin Ball:** But if I can generate it for what feels like free, because it's essentially embedded in my electricity bill and my already paid-for laptop...

**Jerod Santo:** Right.

**Kevin Ball:** ...I probably will do that instead.

**Jerod Santo:** Plus, if you're like, "Okay, I can pay --" Let's just take like "I've got a new company and we need a logo." I could hire a person, talk to them and tell them like "Distill down my company", like have them give me three iterations... "Oh, I like that one. Let's go back and --" and go through that whole process, which I'm sure I've done plenty of times, probably everybody else has as well... Or I can go for 10 bucks onto this website and do like 10,000, just keep hitting the button and generate new ones till I find one that I like... It's gonna be disruptive... But it's still exciting. I mean, it's really cool stuff. And I love the Stable Diffusion as opposed to DALL-E, because of its open nature, and the fact that you don't need to use a hosted service; you can download it, run it on your laptop, you can play with it, you can change it, you can build new things, which is what's happening. We're six days, seven days since it got released, and there's already people who are doing things you wouldn't have imagined with a hosted service. So that's cool.

Alright, I'll quit ranting... This has been "Things that we're excited about", and we'll not force you to listen to that jingle again. We'll just stop right here.

**Kevin Ball:** \[laughs\] Wait, you're not excited about the jingle?

**Nick Nisi:** You don't sound very excited.

**Jerod Santo:** Okay, fine.

**Jingle:** \[00:30:26.04\]

**Kevin Ball:** Did you use Stable Diffusion to create that?

**Jerod Santo:** \[laughs\] No, that's manual. I used Adobe Audition, and my own brain... But I probably should have, because it would have been better. \[laughs\]

**Kevin Ball:** Next time.

**Break:** \[00:30:50.07\]

**Jerod Santo:** Alright, next up we are going to discuss a topic that has been forming in the mind of Kball. It's not fully formed, but he's been forming it. I guess he wants some help, to ping-pong it off a few of us, maybe off of you, the listener... You can tell us what you think afterwards, and maybe this will become a profitable discussion. So I'm gonna pass it to Kball to describe. I could read his blurb, but I won't do that to all of us. I'll let him blurb out loud. Kball, what will we be talking about?

**Kevin Ball:** Yeah, so this is something that, as you kind of said, I've been like -- it's been rattling around in my head for a while, and I feel like it's out of focus, so maybe y'all can be my Stable Diffusion to move it to something that looks beautiful...

**Jerod Santo:** Okay.

**Kevin Ball:** But kind of high-level is thinking about how, as you move up in your career, the timelines of the types of projects or types of change that you're trying to make shift, and you get kind of different interactions and feedback loops between different types of timeline things.

For an example, as a junior dev, you might work primarily on tasks that are a single ticket, that might have a timeline of hours, maybe days; you have rapid iteration loops, you get quick feedback on whether you're in the right direction or not... As you get into more senior roles, maybe you start planning full features, larger projects; they might take weeks or months, and consist of many of those smaller tasks, and you have to think about "How do I build up to this? What are the early signs that we might not be hitting our \[unintelligible 00:36:06.27\] things like that.

\[00:36:10.16\] And then continuing moving up, as you become a manager, or a staff plus engineer, things like that, some projects might take years to pay off. I'm working on a cultural initiative at work that I started trying to seed things of two years ago, and it's still going, and it might take another six months or a year before it actually pays off in terms of fruition.

So I feel like the thing I'm trying to think about or get more of a sense of is like, how do I think about the interactions between these different levels of timelines, and how do I better identify, "Okay, this project - this is going to be a six-month project, so I should be thinking about it this way... Whereas this is a tight loop; this is going to be done in a week. We gotta narrow it down"?

**Jerod Santo:** My initial answer to that would be... Intuition? I don't know. Experience? It's tough to speak about these in abstract terms without actual project details...

**Kevin Ball:** Let me use one in particular.

**Jerod Santo:** Okay.

**Kevin Ball:** This is one actually I've been coaching one of my reports through... So we're working on trying to make accessibility something that is a (I wanna say) first-class concept at work; something that is incorporated in all of our planning, thinking timelines... Everything that we ship should be fully accessible, at least at double A level, things like that. This is something new for our company. So one of the challenges in doing this is like, this involves human behavior change, which to me -- I said, "Okay, this is human behavior change. This is at least a six-month project. If we want to actually change the way people are behaving by default, it's going to take at least six months." But we can identify like micro projects within that. Let's create a linter for this. Let's upgrade this area of the site. Let's do an audit. That sort of thing.

But I think you're one of the things I've been working with this report on is, if you're not used to thinking in terms of those timelines, you can think, "Okay, I'm going to do this work, and I'm going to go, and it's been three weeks, and nobody's changed their behavior yet." And that's really frustrating, and it feels like, "Is it worth doing this at all? Where should I go with this?"

**Jerod Santo:** Right.

**Kevin Ball:** But because we're talking about behavior change, we've got to look for all the different ways to kind of hook in, and nudge people forward, and remind them, and put it in our process here, and put it in our tooling here, and kind of look for all these ways to align it, with the expectation that this is going to take six months or a year to fully play out.

**Jerod Santo:** Yeah. I think in that case, you also have the fact that it's a cross-cutting concern, right? Like, you can't silo it to a specific area of a website, or to a specific team... Right? Like, there's kind of vertical features, and there's like horizontal. And this would be a horizontal thing, where it's like, everybody in the engineering teams, however many there are, has to adopt --

**Kevin Ball:** Plus design...

**Jerod Santo:** Yeah. I mean, not just engineering, but like a product etc. And especially the people who are going ahead and implementing those things, but it probably starts even earlier than that, with like design and actual thinking out the product. But that's tough, because how do you accomplish such a broad, sweeping thing in an organization that does require behavior change? And maybe even six months is under-selling it. Have you thought about that?

**Kevin Ball:** That's why I said it's at least -- you know, if it involves behavior change on more than one individual, I'm like, "Minimum six months." It could be much more than that.

**Jerod Santo:** Right.

**Kevin Ball:** But I think you're raising a really good point, right? How many teams are involved in this? How many teams does this touch? That's a factor, for sure.

**Jerod Santo:** And for me, then I start thinking, "How do you eat an elephant one bite at a time?" So the thing is like, "Okay, this is a huge project, it's going to be at least six months, according to Kball... It could be two years, we don't know. How do I actually attack such a large thing?" And the answer goes to "Well, first of all you try to break it down into the tasks that you're talking about." Maybe the linter is the first one.

\[00:39:52.22\] Then you actually target some sort of a sample group for that first thing. It's like, "Okay, we're gonna build a linter and we're gonna release it to my immediate team, and see if we use it for a while. And then start thinking about..." So it's chunking and breaking things down, and that helps you think about the timeline, because the timeline becomes smaller for those individual parts. I don't know... Nick, you're nodding along, but you haven't said much. What are your thoughts on this?

**Nick Nisi:** First off, I'm just wondering why do you think that at a higher scale estimates would be any use, when they're not useful at the low end? \[laughs\]

**Jerod Santo:** True...

**Nick Nisi:** But I think that you just have to break it down. So you can have this goal, or this area of responsibility that you want to attack, but then have like -- you have projects that line up with that overall goal, and those projects are the things that you can measure. That's just breaking it down. You can break those down, you can try and estimate those, and then just sum them together and multiply by two, and add 1.7, whatever... You know, whatever heuristic you have for estimates, and do it from there.

But then also, I think that -- especially if it's something that's cross-team, or you have different areas with maybe different folks in those areas, you have to think about how to get that buy-in. And I'm thinking of this Derek Sivers talk that I saw probably 10-15 years ago, about finding your first follower, and they will help you get others on board. So if you need to sell some new way of doing things, how do you sell that to one person, who can then help you sell that to everyone else? You get that first follower doing that. So how do you get the buy-in?

**Jerod Santo:** Have you seen that Seth Godin one, where it's the third person that sells it? Have you seen that one?

**Nick Nisi:** Maybe. I'm not recalling it.

**Jerod Santo:** Okay, so here's the Seth Godin one... It's a video of a guy at a music fest... And there's like a side of the hill, and one guy dancing, and everybody else is just sitting there, watching the music on picnic blankets...

**Nick Nisi:** Yeah.

**Jerod Santo:** And he's like having a great time, but everyone thinks he's a crazy person; like, no one's dancing. And then the second person comes and starts dancing with them. And now it's like, "Okay, this is still weird, but it's two weird people dancing." And everyone looks at them, and they watch them, and like, "Okay, two weird guys." And they were like jumping around, and they're sweating, and everything... And then comes the third person. And as soon as the third person joins that group, now it's like validation is there, and everybody just goes in there, and they all start dancing. Like, the third person actually tipped the scale.

I just bring that up because it was a very similar concept, but for some reason Seth Godin says the third person is the key to starting a movement... Whereas the second person is just your first follower, the third one's like "Now it's a group."

**Kevin Ball:** Yeah. "Now we're a team. We're going somewhere" or something.

**Jerod Santo:** Yeah, exactly. But you've got to start with one before you get to two...

**Nick Nisi:** Exactly.

**Kevin Ball:** It's really interesting when you think about the linkages there to the individual projects and the timelines, right? Because now we're talking about influence - how do you estimate timelines for influence? You're gonna have to have a lot of conversations. You're kind of hunting; you're looking for who are going to be those people that could be your first follower, second follower.

**Jerod Santo:** Was I describing the Derek Sivers one?

**Nick Nisi:** You were... \[laughs\]

**Jerod Santo:** It wasn't Seth Godin?

**Nick Nisi:** No...

**Jerod Santo:** So I just changed the ,person cut you off and explained the exact same thing that you were explaining already.

**Nick Nisi:** Exactly. But that's okay...

**Jerod Santo:** Gosh... What an a\*\*\*\*\*\*.

**Nick Nisi:** You're the first follower. It's perfect.

**Jerod Santo:** So does he talk about the third one though?

**Nick Nisi:** I don't know. That's where I got confused on it.

**Jerod Santo:** I'm pretty sure this is also on Seth Godin's blog, but he talks about the third one.

**Kevin Ball:** It might have been Seth Godin did a take on --

**Jerod Santo:** This was back when they did blogosphering... Reaction blogs... Like, one guy would blog, and then the other person would blog based on what the other was saying...

**Nick Nisi:** Yeah...

**Jerod Santo:** Think of it like a TikTok remix for the youth...

**Nick Nisi:** It's a quote tweet.

**Jerod Santo:** Yeah, it's a quote tweet. I'm going to find Seth Godin's and validate me stepping all over you... But yes, we're talking about the exact same thing. I'm sorry.

**Kevin Ball:** \[00:43:43.06\] So definitely my logical mind is like, "Okay, I start -- this is big. I need to break it down." \[unintelligible 00:43:48.10\] Where I start to wonder, or where I feel like I'm still not totally clear is... I feel like, one, when you start talking about influence and stuff like that, it doesn't break cleanly, right? It's not like, "Okay, here's a set of serialized projects that I can take on." It's like, "Here's a set of almost campaigns that I need to be running continuously, and that are going to gradually build momentum." But yeah, then there's also this question of like, if I know this is a large project, what are the signs that I can look for on those shorter terms that tell me, "Is this going the right direction? Or do I need to course-correct?" I'm not sure if it's as simple as watching the progress of my broken-down micro projects. Maybe it is, but that's kind of where I'm stewing.

**Jerod Santo:** Sorry, Kball, I've been googling Seth Godin this whole time... \[laughter\]

**Kevin Ball:** That's okay. Did you find it?

**Jerod Santo:** No... I might be completely wrong... It might be Derek Sivers...

**Kevin Ball:** See, if you had Obsidian, you could search through your notes and keep track of it.

**Nick Nisi:** Exactly.

**Jerod Santo:** Oh, you assume I would have noted that down... It was like a decade ago. How else was I to get this right?

**Nick Nisi:** Yeah... \[laughs\] Well, you can't even tell by watching the video, because like quality is so poor that you can't even see who that is.

**Jerod Santo:** So I remember specifically a blog post where it explained how special that third person is. It's like the video is embedded, but there's actual text around it. I wonder if Derek Sivers wrote that as well. But that's what I'm looking for. So I wasn't listening, Kball... I'm a bad friend.

**Kevin Ball:** That's okay.

**Jerod Santo:** I don't know what Nick's excuse was...

**Nick Nisi:** No, I was listening.

**Jerod Santo:** \[laughs\]

**Nick Nisi:** I was trying to google quickly for the name of the thing that I was going to bring up... And it's -- I can't find it. I will find it for the show notes, but there's some law that anything that you can measure becomes gamifiable, or whatever.

**Jerod Santo:** Oh yeah, Conway's Law.

**Nick Nisi:** Conway's Law. Yes. Thank you.

**Jerod Santo:** Yes. Any target that becomes a measure ceases to be a good target.

**Nick Nisi:** Yes.

**Jerod Santo:** Yes.

**Nick Nisi:** So I was gonna bring that up as like, if you could measure whether you're making progress or not, then eventually that's not going to work pretty quickly, because people will just be going toward that measurement, rather than maybe what the overall goal is.

**Jerod Santo:** The problem with estimates, and timelines, and all these things...

**Kevin Ball:** I've found -- Sivers did a TikTok... Or sorry, a TED talk...

**Jerod Santo:** \[laughs\] Now, we're all googling this thing...

**Kevin Ball:** Yup... He did a TED talk, and he says, "The first follower transforms a lone nut into a leader."

**Jerod Santo:** Okay...

**Kevin Ball:** "The second follower is a turning point. It's proof the first has done well. Now it's not a lone nut, and it's now two lone nuts. Three is a crowd, and a crowd is news."

**Jerod Santo:** That's what I was referring to...

**Kevin Ball:** So I think it was Sivers the whole way along...

**Jerod Santo:** The smoking gun...

**Kevin Ball:** But I'm sure Seth Godin will appreciate the fact that his brand has been so strong in this space...

**Jerod Santo:** His brand is so strong.

**Kevin Ball:** It's like the "Everything was Mark Twain" type of thing, right?

**Jerod Santo:** Yeah, exactly. Or Albert Einstein. Okay, so it was Sivers the whole time... Sorry, Derek. And is that called "The first follower"? Or is it called "The second follower"? \[laughs\]

**Nick Nisi:** The TED talk I think it's called "How to start a movement."

**Jerod Santo:** Okay.

**Kevin Ball:** Yes... And his -- I've found this through something on his blog that's titled "Leadership lessons from dancing guy."

**Jerod Santo:** Okay. That's definitely the content we're referring to... I just thought Nick was talking about one follower, and I was like, "No, there's two followers. That's the whole point." So I continue to apologize...

**Kevin Ball:** But you might have to be out there dancing for a long time before you get those followers.

**Jerod Santo:** And how do you estimate how long you need the dance?

**Kevin Ball:** "Maybe I should stop dancing, because it's been 30 minutes, and I'm getting sweaty, but nobody's dancing with me..."

**Jerod Santo:** Right... How do you know?

**Nick Nisi:** That's where Seth Godin's book, The Dip comes in...

**Jerod Santo:** Yes... \[laughter\] Tie it all together...

**Kevin Ball:** Say more.

**Nick Nisi:** It's been a long time since I've read that one too, but that is effectively like --

**Jerod Santo:** Well, let me tell you, let me tell you... No.

**Nick Nisi:** \[laughs\] It's when to keep going and when to give up, I think.

**Jerod Santo:** Well, should we keep going or should we give up here?

**Kevin Ball:** \[00:47:53.06\] \[laughs\] So I think dancing guy is an interesting example in some ways, because he's not explicitly asking people to come out and dance. He's out there, leading by example, purely. I think if you're trying to lead change in an organization, an important piece is you should be actively seeking out those followers, and kind of trying to get a sense of like "What is important to you? How can I tie what's important to you into this thing that I'm trying to achieve, so that you become my first follower, second follower, or crowd that creates a movement?"

**Jerod Santo:** Yeah, it's more like a wedding party, where it's more intentional... Similar problem at a wedding; maybe you're at a wedding reception after the ceremony is over, and you'd like to have dancing at your ceremony, but everyone's kind of sitting around, they're not dancing... And so of course, you start with the married couple, and then you bring in the parents, perhaps. So there's a few special dances. But then a good strategy to get people dancing is to have the people who are on the floor go out into the crowd, and convince somebody to come with them. So it's way more intentional. And if you can get that going, a similar effect happens. But you have to actually convince somebody like "This is a good idea" and it's always hardest to convince the first couple of people. But once you have the movement, it's easy to follow the crowd. So maybe that's a better alignment with what you're talking about here, where it's actually like, "How do I persuade to get this thing going inside of this organization, and actually affect change, versus just being out here dancing all by myself?"

**Kevin Ball:** Yeah. And the thing I like about that as well is when you first start trying to make a change inside of organizations, you'll run into this where getting that first couple of followers and getting them going takes a tremendous amount of time. And then at some point, you hit this place where they're ready, and they're going out and pulling people in, and it seems like now the change happens very quickly. And so someone who's not kind of thinking about the timescale and thinking about all of those different leading things will say, "Oh, this change happened really fast." And then if you talk about the person who made it happen, they say, "You know what, I've been working on this for three years. You saw the changes that happened in three months at the end of the project."

**Jerod Santo:** Right. Yeah, the overnight success that's been going for a decade. This reminds me -- we had a conversation on the Changelog with Cory Wilkerson from GitHub, and he talked about effecting change inside of GitHub. You know how GitHub - like, they moved everybody over to Codespaces; like, their whole engine -- I mean, not 100%, but like 90x% of their engineers now use GitHub Codespaces, and they're coding in the cloud, which... You know, talk about something that's difficult to convince an engineer to do, is like adopt this new coding environment. And he talked about in detail how he went about evangelizing, leading, persuading people inside of GitHub to try Codespaces, to use it, to adopt it, and how that spread over time to the point where they got there.

So if you're interested in this topic, maybe not on the timeline side, but on like the persuasion side - he gives a lot of actual strategies that he employed to get that done. I'll put that one in the show notes, episode 459 of the Changelog. A bigger conversation, but inside that was this deal, where he had to do this, not completely by himself, but as a leader inside a large engineering team, in order to adopt a brand new way of building stuff. And he got it done.

**Kevin Ball:** It reminds me also of the sort of adages for startups - or startup founders - about doing things that don't scale, and the stories of the Collison brothers starting up Stripe and literally going to people and being like, "No, give me your laptop. I will code in a Stripe integration for you." And kind of doing this because - to the point we've been discussing - those first followers are what turns this from "This is something weird and new" to "No, this is the cool new thing."

**Jerod Santo:** And here I just thought we're supposed to write code for a living...

**Nick Nisi:** Yeah.

**Kevin Ball:** You can do that and you will sort of top out probably around a senior engineering level at most large orgs. And you can make a very good living just writing code. But if you want to keep advancing up the career ladder, or keep advancing your influence, I think all this stuff is super-important.

**Nick Nisi:** Isn't that sad? The more senior you get, the less direct influence you have? Not necessarily, but the less code influence you have. You have more influence, potentially, but...

**Jerod Santo:** \[00:52:17.00\] There's more leverage at the higher levels.

**Nick Nisi:** Yeah.

**Jerod Santo:** The further away you are from the code editor, the more leverage you have, but the less tactile...

**Kevin Ball:** But that also ties into these feedback loops, right? Part of what makes the coding so satisfactory is you get this really tight feedback.

**Jerod Santo:** Right...

**Kevin Ball:** If you've got a good dev environment, it's like seconds. "I tweaked this thing, and now it's different. And I tweaked this thing, and now it's different." A very tight feedback loop is extremely satisfying.

**Nick Nisi:** Yeah.

**Kevin Ball:** That's actually one of the reasons I've been thinking about this a lot, is both I and then some of the people I'm coaching are moving more into architectures, strategic roles, change-making, all these different things... And you have to figure out, like, what are the signals? How do I look for what's -- am I actually doing the right thing and moving in the right direction?

**Nick Nisi:** It's much harder to revert bad policy than it is a bad commit.

**Kevin Ball:** Yeah, that too.

**Jerod Santo:** Well, if I learned anything from Nick Nisi by way of Seth Godin, it's you have to know when to power through, and you have to know when to stop. And I feel like we powered through and we came to a very good place, and I think it's time now to stop. And so this has been a very interesting conversation, it's gone to many places I didn't expect, and that's always fun. We hope that you all enjoyed going on that party with us. We'll put a link to Derek Sievers stuff on starting movements, and we will not link to Seth Godin's stuff on starting movements; but we'll put The Dip in there for you if you want to check that out.

Kball, Nick, thanks so much for partying with us today. Any parting words or final thoughts before we call the show?

**Kevin Ball:** Ahoy-hoy... \[laughter\]

**Jerod Santo:** That was not Nick. That was an impostor.

**Nick Nisi:** Impressive though...\]

**Jerod Santo:** That was totally sus... Are people still saying sus? I don't know. I'm always a month behind, just like Nick is on TikTok/Instagram...

**Kevin Ball:** That has become a thing inside our household, because our kids got excited about watching Among Us, and then we started playing Among Us in real life, in our household... Which by the way, if we were gonna do Pro Tips, and you have kids, get them excited about Among Us in real life; it's a great way to get them doing chores.

**Jerod Santo:** In real life...!

**Kevin Ball:** Because you put the chores that you need to get done as the tasks in your Among Us tasks in real life. And even if they're not doing the ones that are the actual chores, you can do chores, they're playing a game, they're totally happy. You're getting s\*\*\* done, and it's great.

**Jerod Santo:** I've just gonna bleep -- I'm gonna bleep your hoy-hoy and your other words. But I'm mind-blow - you're playing Among Us in real life? Like, I've only played it on video games. Like, you can just play the game.

**Kevin Ball:** Yes, you play Among Us -- you get like a whiteboard. You write out a bunch of tasks...

**Jerod Santo:** It's all DIY; there's not like a thing you buy.

**Kevin Ball:** Totally DIY.

**Jerod Santo:** Okay...

**Kevin Ball:** Write out a bunch of tasks that you've got to do, get a bunch of paper slips and write, you know, crewmate, or--

**Jerod Santo:** And you get your kids doing chores...

**Kevin Ball:** Yeah.

**Jerod Santo:** That is sus...

**Kevin Ball:** And some of them are like "Put away this thing" or like "This thing needs to be cleaned up" or "Make the beds", and those are the tasks. And of course, there has to be something where you're okay if the imposter undoes it, right? Like, "Make the beds", and they undo the beds - not a big deal. "Clean up the floors" - you don't want them dumping stuff on the floor again, right? Or like dirt, or whatever.

**Jerod Santo:** I feel like my kids would see straight through this and be like "Nah..." \[laughs\]

**Kevin Ball:** You've gotta include -- one, they've got to start being excited by Among Us.

**Jerod Santo:** Okay.

**Kevin Ball:** So if they're excited by Among Us, you say, "Guys, we're gonna do Among Us in real life!"

**Jerod Santo:** Okay.

**Kevin Ball:** And you've got to include some ringers too, that are not just chores, but like are fun things that they've got to do.

**Jerod Santo:** Oh, okay.

**Kevin Ball:** But even if it's like, you're trying to get time to get this stuff done while they're entertaining, and they -- I don't know about your kids; you've got enough, maybe they entertain each other just fine... But ours will go at it. But you get them playing Among Us, and like now it's fun, and it's a game, and they're working on this, and they're working on this, and "I'm doing the dishes over here, because that's on our task list, man..."

**Jerod Santo:** I like it. I'm gonna try it. Nick, any final words from you? \[soundboard Ahoy-hoy\] And with that... I'm just kidding. \[laughter\] Do you want to say something?

**Nick Nisi:** No... It's perfect.

**Jerod Santo:** That's perfect. Alright... I'm Jerod, this is JS Party... Thanks for hanging out, and we'll talk to you all on the next one.
