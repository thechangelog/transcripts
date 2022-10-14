**Jerod Santo:** I'm Jerod, your internet friend, and I'm joined by two of my friends. Nick Nisi - what's up, man?

**Nick Nisi:** Hoy-hoy! How's it going?

**Jerod Santo:** It's going great. I'm also joined by Kball. What's up, Kball?

**Kevin Ball:** Hoy-hoy. How's it going? I was thinking, as Nick paused, that I should just like try to do my best hoy-hoy impression.

**Nick Nisi:** That was really good.

**Jerod Santo:** I mean, maybe we won't even know the difference, so we're gonna have to introduce Kball again after that one... Well, it is Party Time. It's for us, I guess, a different time... More of a party day. We're recording on a Friday; we normally record on Thursday... So Friday is kind of more of a party day, but we're not recording at more of a party time. It's early morning for us. This is because of internet problems yesterday. So you listening non-live, it's the same for you, but for us, we're kind of like having our coffee, and talking about the news. That's the plan, at least. Hopefully, it feels like a party anyhow, but it's going to be a news discussion kind of an episode.

First, I thought it'd be fun to talk about some personal news, like what have we been working on lately, what have we been up to... I had this idea because I saw that Nick had finished this cut-over... You've talked about it a couple of times throughout, I think... You've been working on this switch to Vite; or was this a new thing that I didn't know about?

**Nick Nisi:** I probably have been talking about it... It's been going on for a little while; very slowly replacing Create React App with Vite. And it's been a lot of fun. It's been much, much faster, and it's been kind of bringing us up into more modern JavaScript ES modules, things like that... Which has been really, really fun. It is only one app in like a very, very large monorepo full of apps, so there's lots of Create React App to go. But I did fully switch out and remove React scripts, which meant like reconfiguring Jest to manually have that configured, and then delete it... And then I did it for a second app last night in the mono repo, and it took like an hour. Very exciting, because I've already hit all of the pitfalls that are possible, I'm pretty sure. So I just hit him, and I was "Oh yeah, I know how to fix that, I know how to fix that" and just carried right along.

**Jerod Santo:** That does feel good, once you've already -- it's like playing the same level that you've already played previously on Mario Brothers, or something. You're "I can just cruise through this level. I know all the particulars."

**Nick Nisi:** Sometimes that just feels good.

**Kevin Ball:** That first migration is a lot harder than it feels like it should be, though.

**Nick Nisi:** Yeah.

**Kevin Ball:** I did a similar migration beginning of this year, last year, something like that... And we have not a Create React application, but we were using WebPack and all these things, and we migrated to Vite... And there was like a week that I was focused on it, and then there was trickle on work, fitting it in around the edges for a couple of weeks after that before we finally got it switched over.

**Nick Nisi:** \[05:53\] Oh, yeah. We had to really start lower-level, because we were on older versions of everything. We had Node 14, so we had to get up to Node 16 at least to continue with that... But then we had to upgrade the version of Storybook we were using, and then we used the Storybook Builder Vite to replace its WebPack build with a Vite build... And honestly, that was the most startling of changes, because Storybook would take over 90 seconds to start up, and when I switched it over to Vite, three seconds, tops.

**Jerod Santo:** Nice.

**Kevin Ball:** That's the type of speed-up we saw with Vite. Well, that's interesting... So we have been using a Storybook equivalent called Ladle, that somebody built specifically --

**Nick Nisi:** Oh, nice.

**Kevin Ball:** Storybook didn't support Vite, so it was like, "Okay, this is way faster", and all these sorts of things. But we ran into some limitations, because it's not all of Storybook. And so hearing that Storybook itself sped up that much moving to Vite - that might be an argument that we actually don't need this slightly less supported variant just for performance.

**Nick Nisi:** Yeah. I like Storybook, but it's still difficult, and the documentation is tough. But it makes for much faster component-level development, which I really, really like.

**Kevin Ball:** Yeah. That was the win we got. Especially our development environment still references a cloud database, which means that local development can be often very slow... And cutting that out of the loop is amazing.

**Nick Nisi:** Yeah. We have some internal packages as well that we consume, and I actually converted those to ship both a common JS and ESM version, so that we could use either with different projects. And I didn't switch it to Vite, but I switched it to ESbuild, which is the Go library that Vite uses. And it was going from (I don't know) 10 seconds to build those projects to like 300 milliseconds. It was just ridiculously fast. But then ESbuild - all it does is ignore the types; it doesn't actually provide that...

**Kevin Ball:** \[laughs\]

**Jerod Santo:** Nice.

**Nick Nisi:** So if you want to ship a library and have the type definitions with the library, you have to also do that... So it's like, "Oh, we can switch this to ESbuild and get it down to 300 milliseconds, and then add six seconds to generate types with the TSC compiler."

**Jerod Santo:** Ignoring the types - that just sounds like something I should get into.

**Nick Nisi:** There you go... \[laughs\]

**Jerod Santo:** I ignore the entire TypeScript, not just the types themselves.

**Kevin Ball:** Nick Nisi, there's a project for you - TSC compiler built with Go.

**Nick Nisi:** I hear that it's not super-possible, right now at least. But there are some cool projects out there, and maybe we will talk about some of them today. But referring back to what Jerod just said - it's only a matter of time, Jerod.

**Jerod Santo:** \[laughs\] Well, you can continue to say that... And you could be right, but it could be a matter of a long time. I'm incredibly resolute, you'll find...

**Nick Nisi:** Oh, I know.

**Jerod Santo:** \[laughs\]

**Kevin Ball:** So types helped me as an individual, but what really made them blow my mind is when I'm working with a team and trying to help refactor and prevent issues and help people refactor...

**Jerod Santo:** Yeah.

**Kevin Ball:** ...and like -- Jerod, you're basically a solo developer still, right?

**Jerod Santo:** Totally.

**Kevin Ball:** I know you work with a couple of folks on Changelog, but...

**Jerod Santo:** Yeah.

**Kevin Ball:** ...I feel like they can be helpful for an individual, but a lot of the value prop is "Okay, you have these larger teams that are trying to understand APIs, and refactor APIs", and having both the auto doc type stuff and the refactoring assurance is just such a huge win.

**Nick Nisi:** Oh, yeah.

**Jerod Santo:** Yeah. When it boils down, I was trying to think of the episode - I think it was the Deno Fresh episode, where Luca Casonato pinned me to the table because I was just giving him a hard time about TypeScript, because Nick wasn't there, and I had to give somebody a hard time. And he eventually pinned me down and started talking about all these benefits to this stuff, and I said, "At the end of the day, it's just solving problems that I don't have, as a solo dev." I just don't have those problems. And so for me, it's just additional tooling, additional things. Now, it's getting to be where it's like built more and more in, but I just don't have these problems. Now, working on teams, I can totally see those upsides, and I'm sure they outweigh the downs.

**Kevin Ball:** \[10:04\] Well, and honestly, that's the type of optimization we should all be making, right? Going back to the React debate episode, right? Like, if you're working on a relatively static site, why the heck are you using React? It's solving problems you don't have.

**Jerod Santo:** Totally. In fact, I was just talking to somebody the other day who was telling me that our entire website should be on Next.js. And I was like, "I don't know, it's pretty good... Like, it works pretty well as is. It's an Elixir backend, JavaScript sprinkles, frontend server-side rendered HTML..." And I just asked them, I said, "What do I gain by rewriting my entire website in Next.js, besides being able to say it's on Nest.js?" And I said it's cached all around the world, really fast, and I'm sure there are some gains... But what a huge undertaking. And so it's really like --

**Kevin Ball:** I wouldn't be sure there's some gains.

**Jerod Santo:** Well, that's how I head, I say "I'm sure there's some gains", because I don't know what they all are, and I don't want to be bullheaded about it, but... Why rewrite when you don't have to? It just doesn't make any sense. But because everyone's using Next.js now, it should be in React.

Now, when it comes time to do a redesign or something, we're going to revisit what we use, and at that time we're going to try to do our best to make a sound decision. But yeah, use the right tool for the job. And the hard part is figuring out what that tool is. The easy thing to do is to just use the popular thing. And that's not always the right tool for the job.

**Nick Nisi:** Agree.

**Jerod Santo:** Okay, moving on from Nick's personal news... I've been shipping some stuff lately. We shipped chapters support across all Changelog podcasts. This was a longtime desire of mine and a feature we've been working on - not straight through, but off and on for the last three or four months. There was one big technical hurdle, which is that we were previously doing all of our ID3 tags on the mp3s by shelling out to FFmpeg. And FFmpeg is an amazing tool, with lots of features... I mean, the longest man page in human history.

**Kevin Ball:** That's how you know it's good.

**Jerod Santo:** Yeah, because there's so many features. But one feature it does not have is the ability to write ID3v2 chapters, which is like this special addendum to the v2 spec... And the FFmpeg folks are not interested in it, because it's very much an audio thing, and that's more of a video tool, generally speaking.

So we needed a way of writing those tags in Elixir, so we worked with our friend Lars Wikman, who wrote an ID3v2 Elixir library for us, which we open sourced... And then I took that, integrated it into our stack, and we are now chaptering all of our shows, which feels really cool. I've been talking about it a lot. I'll put some blog posts into the show notes for people who are interested in the details of that... But I'm about done talking about it; we've covered it. And happy to have it out there; we're just gonna keep chaptering our shows.

So if you're listening in a podcast app that supports chapters, unlike Spotify, then check it out. It's right there. You're in a chapter right now, you can see what's coming up next, you can skip to cooler parts of the show, or whatever you want to do. That's probably the biggest thing we've shipped in terms of a technical change to our podcasts since we added transcripts.

**Kevin Ball:** And are you manually deciding the chapter names?

**Jerod Santo:** Yep. So as producers, we decide the chapter names.

**Kevin Ball:** So you have like 10x-ed your workload in terms of figuring out titles...

**Jerod Santo:** Yes. So you set the title one thing on the show, and then a subtitle... And now we have to title that still, plus every single chapter has some sort of a title; which is actually kind of fun, though. I'm starting to like put little jokes in the chapter names, and stuff, because we realize that most people don't care, and really might get a laugh out of it... So that's actually kind of been a nice, creative outlet. It has added probably 20 to 30 minutes to our overall production flow, because they've gotta be there, and we want them to be good; if they're not good, what's the point? So yes, I have to do a lot of titles. But they're like lower stakes titling, you know? It's like naming your fourth kid, versus the first one.

**Kevin Ball:** \[laughs\] What's your fourth kid's name, Jerod?

**Jerod Santo:** \[14:05\] Sorry, Nora... No, she's five. Ezra... Sorry, Ezra. I threw you under the bus. Kball, what are you been working on lately? I don't see anything in the doc.

**Kevin Ball:** Yeah, well - so that's the fun thing about being a manager, is it's really hard to like point to something concrete that I did.

**Jerod Santo:** Answer some emails?

**Kevin Ball:** I was thinking about this...

**Jerod Santo:** Schedule some meetings?

**Kevin Ball:** Lots of meetings... Yeah, one of the fun things I get to do is scare engineers off from being managers, because anytime they need to schedule something with me, they open up my calendar, they look at it and they go "AAAAHHH!!!" and run away. \[laughter\] I did an all day planning meeting the other day. That was fun. I got to tell a lot of people, "No, you can't put 10 pounds of stuff in a five-pound bag. Can you please tell me which five pounds is the most important? All of them, all 10 pounds does not help."

**Jerod Santo:** All 10 pounds. Right. It's all highest priority.

**Kevin Ball:** And I was reflecting... Like, as a manager, that is like half of your job, is you tell one set of people, "No, you can't put 10 pounds in a five-pound bag. Please prioritize" and you tell another set of people, "Please, can we make this five-pound bag into a seven-pound bag? What do we need to do?"

**Jerod Santo:** \[laughs\] That's awesome. I saw a funny tweet the other day that said along the lines of "I didn't become "an engineering manager." Instead, what I did was I "accepted a pay raise in which I must agree to never write code again." And I was like, "Huh, that's interesting..." I wonder if you ever feel like that.

**Kevin Ball:** I do write some code still... But it's pretty rare, and it's declining. In fact, there's an interesting aside on this, something that came up in a retro. So I still occasionally will tech lead a project, where I'm doing the architecture, and things... That's actually pretty common in the industry. There's this like whole role of like tech lead manager, somebody who's managing a set of people and tech leading; lots of companies do this... And it sucks. And it sucks for a few different reasons.

So I had already kind of realized why it sucked for me, because it feels like there's too many things and you can't be good at any of them. But came up in this retro a couple of other reasons that sucks. It sucks for the team, because number one, you create a bad power dynamic, right? So like a tech lead needs to be making estimates; they probably need to be asking their team, "What's reasonable?" but they kind of also need to put a line in the sand, like, "I think we can do it by this time." That's hard enough as it is, but if the person who's trying to put those lines out and asking the team, "Is this reasonable? Can you do it? Is there a manager?", now there's a power dynamic that makes it harder for them to be clear and say no. And you can overcome some of that through relationships and other things, but that's also a structural power thing. That's not going away. So that's a problem.

The other problem comes back to the calendar thing, right? If you're tech leading your project, you want to be available to everybody on that project to answer questions, help guide, do all these things. I'm in meetings from eight till I get done with work. How is that going to happen? I'm not available if I'm also tech-leading the project.

So I thought that was a really interesting insight, and especially because -- once again, I had sort of thought, "Okay, this is not a great situation for me, but it's filling holes in the team; it's going to help us get there", but it's actually harming the team when you have a manager also being the tech lead.

And so you know, realities being what they are, in many teams you don't have somebody else to do that. Thankfully, I do have some people who can tech-lead, and we're kind of making sure that that happens going forward. But yeah, it was kind of an interesting, like, "Oh, I was thinking about me, but I should have been thinking about the team when it comes to why this is a bad idea."

**Jerod Santo:** Yeah. So does the tech lead role gain that individual material things in compensation? Or is it just like a street cred thing, or you know...?

**Nick Nisi:** So tech lead is a really interesting thing, because different companies treat it differently. And even sometimes different teams within a company treat it differently. So some people treat it as a durable thing. Tech lead is a title, it's a role, this is a thing you're doing, that might come with rewards financially, or otherwise, or it may not.

**Jerod Santo:** Right.

**Kevin Ball:** \[18:00\] Many other places - certainly the way my team is handling it - a tech lead is a transient thing related to a project. You are tech-leading this project. And it's a set of things that are part of being an engineer, and you do them in the context of a project. So it's not like a different role, a different title, or anything like that durable.

**Jerod Santo:** Right. Is it rotational then, or is it based on -- like, some people lead better than others, they're practiced in that, so it seems like it could be a skill thing; but is it rotational, or is it certain people are always kind of leaders and they rotate around?

**Kevin Ball:** I think it varies a lot by team. What we're doing on my team right now is - it's not always the same person, and it has to do with a few factors. It has to do with aptitude. Is this type of project something that is in your kind of wheelhouse? It has to do with desire. Do you want to be tech-leading? Is this something exciting for you? Or is this something like super-stressful? It has to do with your growth roadmap. Like, is this a direction that you're trying to grow right now, and learn?

So right now, I have kind of two folks who are more regularly tech-leading, and then I have two other folks were I'm looking for the right project, because it's kind of in their growth stretch area... But it's a rotation, and based on a number of factors.

**Jerod Santo:** Gotcha.

**Nick Nisi:** Yeah, the ways that I've typically been in that role - it's been project-based, so I'm the tech lead of this project, or that project... And what it usually would boil down to was I would be much more involved in the roadmap discussion, creating the technical side of the tickets; laying down the details of what actually needs to be done to get the product built, or meet whatever goals there are. And then I would spend about 50% of my time actually working on tickets, and then the other 50 is mentoring code reviews, like shepherding that part of it through and just keeping the oil flowing. I don't know why I said oil, but... Keeping things flowing...

**Jerod Santo:** \[laughs\]

**Kevin Ball:** Technical project management, essential.

**Nick Nisi:** Yeah. Yeah.

**Jerod Santo:** Keep that oil flowing. Well, we want to keep the oil flowing around here as well, so we're gonna take a break. That's been our personal news. Nick shipped Vite, I shipped some chapters, Kball shipped seven pounds of stuff in a five-pound bag... We'll be right back and we'll talk industry news right after this.

**Break:** \[20:24\] to \[21:45\]

**Jerod Santo:** Alright, we have a group of stories and links and things going on around the web development world... First one up is Cloudflare has made a few announcements this week. I think it's like their birthday week, or something. This is a new trend I'm seeing, where companies will launch a bunch of stuff in a row, and really try to make a splash. I know Supabase has done that, they call it Launch Week, where they launch five days in a row, one thing a day; kind of a cool way of going out. And Cloudflare has announced a bunch of stuff this week.

The one that we're focusing in on is not the workerd-- open source workerd, we may do a full episode on that, maybe not hold on. We aren't focusing in on the open source workerd which I do think is interesting, because they're taking their Cloudflare workers runtime and they're releasing an open source version, so that you can run it on your own infrastructure, which I think is a wise move, and probably one that most clouds would do well to imitate.

But the one that I actually was more excited about - and honestly, I've already implemented on our website in a matter of 30 minutes - was Turnstile. So Turnstile is a new user-friendly, privacy-preserving alternative to Captcha. And Captcha, as we all know, is one of the banes of our existence... Nick, let me ask you something - how many Stop signs have you identified in your life?

**Nick Nisi:** Oh, too many...

**Jerod Santo:** How many trains? How many planes? How many automobiles?

**Nick Nisi:** Ah, they're getting worse and worse, too...

**Jerod Santo:** It's so annoying.

**Kevin Ball:** I feel like I fail 50% of the time on a Captcha.

**Jerod Santo:** Yes.

**Nick Nisi:** Yeah. I hate that it takes you -- it'll be like, "Oh, identify all the ducks in this page", and there's a whole bunch of like... I'm like, "Is a mallard a duck?"

**Jerod Santo:** "Is a mallard a duck?" \[laughs\] Or there's the one where it's like it's a Stop sign, but it crosses two grids, you know... And there's like the main grid, which like - are you wanting me to have every part of the stop sign selected? Or just the main portion? I always think about that.

**Nick Nisi:** If there's a pixel of the Stop sign...

**Jerod Santo:** You're afraid you'll do the wrong one and then get rejected, you know?

**Nick Nisi:** Yeah... \[laughs\] But that's the thing, if it sends you to another page and asks you to do it again, did it reject you? Because I get rejected a lot.

**Jerod Santo:** I think that's a rejection, man. I think you're darn near a robot at this point.

**Nick Nisi:** \[laughs\]

**Jerod Santo:** So Google does have their -- of course, most Captchas, reCAPTCHA, Google reCAPTCHA, the one that's on our website, is Google based... And at the end of the day, Google is a large ad company, so you're putting their trackers on your website, and requiring people to identify themselves to Google to prove they're not robots... So there's that angle as well.

\[24:15\] There's other alternatives. We tried hCaptcha for a while, which didn't work as well as reCAPTCHA, so we just use reCAPTCHA in anger... This is a cool alternative, and it's interesting because they're not requiring any human interaction, but they are doing a whole bunch of device challenges... Like, they're trying to identify you as a human based on different aspects of your web browser, the JavaScript runtime... Kind of some stuff that we don't really know exactly all that's going on, which might be a little creepy as well...

**Nick Nisi:** You mean browser fingerprinting?

**Jerod Santo:** Yes, all sorts of things that -- but they're guaranteeing that it's... Private.

**Kevin Ball:** In what manner are they making this guarantee?

**Jerod Santo:** Well, they do have this whole...

**Kevin Ball:** Like, are they sending network traffic back to Cloudflare, or are they keeping it all on your domain and local?

**Jerod Santo:** They're certainly sending stuff back to Cloudflare. They certainly are.

**Kevin Ball:** There's no way for us to verify their guarantee that they're keeping it private.

**Jerod Santo:** Right... Well, they do say Cloudflare has a long track record of investing in user privacy, and each one of these words is a link to something they're doing in the privacy space... And they are using this cool, new technology that they developed with Apple called Private Access Tokens, which actually allows the device and Apple -- something deep down in your device that Apple can do... I don't know if it's in the Secure Enclave, I'm not sure how it works, to actually identify this as a human without any identifying information. So there's at least collaborators there. So it's not like all Cloudflare is doing.

**Kevin Ball:** I mean, they might be guaranteeing your privacy, or actually keeping your privacy, I should say, but if they're sending network traffic back and we're not looking at exactly what's being sent, and if there's cookies attached to it, and all these things, we have no way to verify that that is actually guaranteeing privacy. It's just kind of a "Trust us."

**Jerod Santo:** Yes.

**Kevin Ball:** I'd rather trust them probably than Google, because...

**Nick Nisi:** Oh, yeah.

**Jerod Santo:** Which is why they appeal to their track record. But also, you're kind of at least distributing your trust to a couple different entities. It's not all Google. It's like, "Well..."

**Kevin Ball:** Pros and cons to that, right? Google does already have all my data, so...

**Jerod Santo:** Resistance is futile, all will be assimilated?

**Nick Nisi:** \[laughs\]

**Kevin Ball:** I mean, there is some truth to that.

**Jerod Santo:** Well, what if we stopped giving them all so much of our data? What if we remove Google Analytics? What if we use alternatives for all these different little services that they are using to collect our information? And then all they have is our personal emails and private thoughts.

**Nick Nisi:** We'll just buy those little services.

**Kevin Ball:** All they have then is all my emails, all my documents, all my search history, my browser history -- except I use Brave, so maybe not that, but yeah.

**Jerod Santo:** Right.

**Kevin Ball:** And me - I might be a little more paranoid than the average bear, and there are a few people who are probably more paranoid than the average bear... But like 70%, 80%, 90% of the population - I don't see how this is gonna make that big of a difference in how much info Google has about them. But that's not to say it's a bad thing. And reCAPTCHA sucks. So not having to deal with reCAPTCHA - that's already a huge win, right? If you can do it automatically. I just -- I love the emphasis on privacy, and I think that ship has sailed for pretty much everyone.

**Nick Nisi:** I think that that is a good point, though. I hate doing those stupid, Captcha things. So this is like a trade-off of comfort versus security, and I will pick that every time. But I am overly paranoid, and like half the time I have to reload Safari without content blockers to even get the Captcha to show up, because they're trying to block whatever creepy thing that the Captcha is adding to the page to begin with.

**Kevin Ball:** \[28:03\] I wonder if that'll impact this...

**Nick Nisi:** It's true.

**Kevin Ball:** It depends, I guess, on how creepy it looks to a content blocker?

**Jerod Santo:** Yeah, we've definitely had all sorts of -- like, our number one support request on changelog.com is like "I can't sign up", and it's because of reCAPTCHA. Because of something with their browser, where they're blocking, or the thing doesn't show, or hides behind, or whatever. And we actually had more of a failure rate with hCaptcha, because I was trying to not use Google for a while, and I was like, "Ah, this thing just doesn't work", switched to reCAPTCHA... And here's the problem, y'all... We still get tons of bots signing up. Now, I think they're like human bots. Like, I think they're just like mechanical Turks or something, because they're passing the reCAPTCHA. I mean, we're talking about probably a dozen a day, we get fakes, either spammers -- they're human spammers, or they're robots that have figured out reCAPTCHA. So it's still not solving my problem 100%, but it cuts it down from like -- we were getting hundreds a day before I put it on now, and now we're getting like a dozen.

I just installed Turnstile last night, and I will say, if you're on reCAPTCHA and you want to give a Turnstile a try - literally 30-minute cut-over, which is pretty fast for a rollout. It's super-simple. It's pretty much the same API. You just like change the URL, change the script, and sign up and stuff. It's free for everyone, so that's cool...

**Kevin Ball:** You've got to come back next week and tell us how it impacted your robot signups.

**Jerod Santo:** Yes. So they do give you a nice dashboard. I've had 38 challenges issued, 63% visitor solve rate, 47% API solve rate. I don't know what the difference is between those two; I'll need to learn. It does a non-interactive solve, which is like the detection, stuff and then it will fall back to, I think, showing you something for an interactive solve, but I think it's just the checkbox, which it's had 24 non-interactive solves, zero interactive solves and 14 fails. So that's probably in the matter of 12 hours... No. 16 hours. So I'll follow up, but interesting offering. Big problem out there, dealing with bots and spammers and privacy non-protecting large organizations that provide us free tools... So we'll see what happens.

Alright, up next, let's talk about updates from the 92nd TC39 meeting. I think it was Nick's.

**Nick Nisi:** It was, yeah. I put this in there.
**Jerod Santo:** Update us.

**Nick Nisi:** Well, I actually just need to have a conversation about it, because I put this in there, and then I didn't learn about these --

**Jerod Santo:** You didn't read it?

**Nick Nisi:** I did. I did. Specifically, the thing that was interesting in there was the movement to stage one of something called extractors, or extractor objects. And I was hoping that one of you could explain what this is to me, because I looked at it, I looked at the syntax, and it didn't make a whole lot of sense. It did in one specific use case, but I'm not sure that I'm understanding it correctly.

So it says that this is like -- there's prior art in potentially Rust and Scala. Scala has extractor objects. Are either of you familiar with extractors?

**Jerod Santo:** Well, Nick, "Extractors would augment the syntax of binding pattern and assignment pattern to allow for new destructuring forms, as in the following examples..."

**Nick Nisi:** So looking at that, it looks like it's doing like the destructuring, like the object or array destructuring that we're all accustomed to now, hopefully, in JavaScript. But in this case, they're calling a method, like foo, on the property that they're destructuring. Is that just all it is? Is it a way to perform calculations in-line on a destructured value?

**Kevin Ball:** Yeah, I think that's what I'm seeing here. It's doing some sort of more complicated logic as you destructure, and some of that might even be like the -- I'm looking right now at what the Rust example is... Like, being able to match for more complicated structures than just like a very simple object, right?

\[32:14\] So "Okay, destructure into this, but only if A and B both exist, and have this relationship to each other", or something like that. Kind of pattern matching as a way to do branches in functions, or things like that; it's a pattern that has not shown up in JavaScript that I'm aware of before, but it's something that is, I think, pretty widely used in functional languages as a way to--

**Jerod Santo:** Yes. But isn't pattern matching also making its way through TC 39?

**Kevin Ball:** I don't know.

**Jerod Santo:** ...as its own feature. I think it is, but I'm not sure. I agree with you, it seems like the intention of this is to do assignment and binding in a case where you're doing more logic in the actual expression, because you're calling a function which can do some smarts, whether that's match, or condition, and then return what you're assigning to out of that... Which is, I guess, a little bit kind of syntax sugar, because you could always just do that in a more verbose way by not doing that... But, I mean, it still could be handy.

**Kevin Ball:** Destructuring is syntax sugar, and it's wonderful.

**Nick Nisi:** It is...

**Kevin Ball:** It makes for such more readable code...

**Jerod Santo:** It's more readable.

**Nick Nisi:** Let me try and give like a simple example. If I had an object that had an X property on it, and X is a string, normally what I would do is I would destructure X, and then I would say x.toLowerCase() Is this thing that I could just destructure and toLowerCase() it all in one line?

**Jerod Santo:** Yes.

**Nick Nisi:** Okay. I'm sold. I want this.

**Jerod Santo:** I think that's what it's saying. I said that very confidently...

**Kevin Ball:** I think that's what it's saying. And not only that, you could potentially coerce it, right? So you could say this is coming from three different types, and I'm going to coerce it to a string and lowercase it.

**Jerod Santo:** Now, can you send it -- so I would assume that that logic though lives elsewhere...

**Kevin Ball:** In an extractor object.

**Jerod Santo:** In an extractor object, right.

**Nick Nisi:** That's what that foo is in this example.

**Jerod Santo:** Right. So you can't just like do it with an anonymous function or something. Maybe that's also in there... But you have to have this extractor object that you're defining elsewhere and then calling in the assignment expression.

**Nick Nisi:** Okay. And you define the matcher with a symbol. So you get to use all sorts of fun things that you hardly ever use in JavaScript.

**Kevin Ball:** I mean, it's stage one proposal, so this is going to change, how it looks...

**Jerod Santo:** This will never happen. \[laughs\]

**Kevin Ball:** It may happen... But however it happens has very high likelihood to look nothing like the current syntax.

**Jerod Santo:** Right. This is a proposal that's very early on.

**Nick Nisi:** Nut I'm sold. I like that idea. There are several times where I think "Man, I just have to destructure something and then have another line to do some additional thing on it." And if you're setting it with const, you can't do that; you'd have to let it, so that you can then change it later, or assign it to another variable... And it's just messy.

**Jerod Santo:** Are you hating on let?

**Nick Nisi:** Yes, of course.

**Jerod Santo:** Why? It's so handy in that case.

**Nick Nisi:** There's a TypeScript reason for that, because const will narrow the types further for you, and let won't.

**Jerod Santo:** Not my problem, Nick. Not my problem. \[laughter\] Alright. So there's that... Stage three Array.fromAsync. Has anybody looked at this one, or should we move on to the next story? This was the other piece of information from this meeting.

**Kevin Ball:** I mean, I think this is a relatively simple one, and kind of moving to once again being able to make async stuff a little bit more first-class, and be able to kind of do a set of awaits for an array of things.

**Jerod Santo:** Yeah. So it's the same thing as from, but it's an async. It's fromAsync. That's what I'm seeing here. Is that right?

**Kevin Ball:** Yup.

**Jerod Santo:** Okay, so stage three on that sucker. So where does it go from there? Stage four?

**Nick Nisi:** Yeah, stage three would be it's getting implementations in browser engines, and it's relatively stable at that point. It's very unlikely that the syntax will change at this point.

**Jerod Santo:** \[36:05\] Gotcha. It hasn't made its way in the canIuse yet, unless I'm spelling it wrong, or something. Alright, so those are some notes, those are some updates from the 92nd TC 39 meeting. You know what would be fun? We should maybe figure out when the 100th TC 39 meeting is, and everybody crash it, you know? Wouldn't that be kind of cool?

**Nick Nisi:** Yes.

**Jerod Santo:** I mean, I'm sure they'd appreciate it. Maybe like a few thousand people show up to the meeting... It's a Zoom meeting, right? I don't know what it is.

**Kevin Ball:** Is there a way we could do like a flash mob style thing? So not only do people show up --

**Jerod Santo:** That's what I'm talking about.

**Kevin Ball:** ...but they like do something.

**Nick Nisi:** Yeah. Maybe that'll coincide with the advancement of the type annotations proposal, and we can stage a sit-in until they approve it, or something...

**Jerod Santo:** Stage a sit-in... \[laughter\] "We're not leaving..." This dog might hunt, let's continue to riff on this idea. So dear listener, if you have ideas around how we might make their 100th meeting very special, whether it be a protest or a party - we're up for anything. Let us know in the comments or on Twitter.

Okay, let's go back to another story... Linkify shipped their version 4.0. Have you guys heard of that, Linkify?

**Kevin Ball:** Nope.

**Nick Nisi:** No, not before this.

**Jerod Santo:** Yeah, this is a cool plugin... It seems like a common problem that lots of people have. It's just a JavaScript plugin, and it takes well-formed plain text and linkifies it. So maybe you have some bare URLs in there, maybe you have some hashtags, maybe you have an @ mention... And you just want to take that plain text, pass it off to some library and end up with like hyperlinks integrated into that, all prettified, all linkified... That's what linkify does. So the news, I guess, is that they've shipped version four, which means they've been iterating a lot, or making a lot of breaking changes if they're just semantic versioning... Because you know, v4, that's a big number... But it's been around for a little while; it works server-side, I think, and browser-side... And so you can use it in server-side rendering, no cost to your users. You can ship it in the browser, and I'm not sure what it's going to cost them; it'll cost them a little bit. But your own code will also cost them something as well.

This is the kind of thing that we all kind of unit-test -- like, it's a nice, usually simple, starting a couple of regex, unit-test it, and I'm good to go, and there's just tons of hairy little edge cases that end up biting you, and you have to write lots of unit tests over time and slowly learn where your linkifying broke. So cool to see a community project here, an open source thing where everybody can work on the same thing and solve a lot of those problems. They have lots of cool little features where you configure it to add attributes like no-follows, or l=UGC those kind of things... So that if you're using it on user-generated content, and you're linkifying their strings, the spambots will leave you alone, because they're not going to get their SEO juice. So that's Linkify. Thoughts?

**Nick Nisi:** My first thought immediately, because the example is showing this working in Markdown, and to continue my discussion of Obsidian on this podcast - there is an Obsidian plugin; I've found that, and it's awesome. You can just like put it in your own syntax. I can put gh: and then I could just have like something, and it will just linkify that to a GitHub link, to specifically what I want it to be.

**Jerod Santo:** Oh, that's cool. So you just configure it for yourself and use it.

**Nick Nisi:** Yeah.

**Jerod Santo:** That's neat.

**Kevin Ball:** \[39:47\] Yeah, it looks like - I'm looking through it - it's very configurable. So you can kind of look for a match against different types of domains, or different -- you know, if you have like a @ mentions, you can decide "Does that go into GitHub, or Twitter?" Or maybe you do a little bit of checking in some way, you could probably add your own stuff... So yeah, this looks neat.

**Jerod Santo:** Yeah. And they have this test function as well. They've obviously built up this huge matcher library of different strings and regular expressions. I'm not sure how it's implemented under the hood. Maybe there's like a AST down in there, a string AST, that that has all tests. So you can actually even use it with linkify.test, pass it a string and you can -- is it a valid email? Is it a valid domain? These things that we end up implementing ourselves - you can rely on that in your test suite.

**Nick Nisi:** Some real-time follow-up... That Obsidian plugin is in no way using Linkify.

**Jerod Santo:** Oh, it's not? It's just called Linkify.

**Nick Nisi:** It's just the same name. \[laughs\]

**Jerod Santo:** Okay... Well, it's a good name.

**Nick Nisi:** Still cool.

**Jerod Santo:** Yeah, it's still noteworthy...

**Kevin Ball:** I'm just looking at what it's doing right now... It looks like it's tokenizing the string. It does have some amount of like regex replacements for like escaping, and things like that... Yeah.

**Jerod Santo:** Is it getting the Kball seal of approval? Is this a code review? Is this how Kball does code review in his work?

**Kevin Ball:** We could do a code review.

**Jerod Santo:** \[laughs\]

**Kevin Ball:** I'm being much more ad-hoc than I would for a real code review, but I'm just kind of jumping in a little bit. So it looks like it has its own little tokenization logic. So it is --

**Jerod Santo:** It's serious.

**Kevin Ball:** It is serious... How is it doing this tokenizing? Let's see...

**Jerod Santo:** You can use it with React, you can use it with jQuery, or directly with the browser DOM. I'm just filling in Kball's blank space while he reads code... Alright, final code review, Kball. What grade do you give this?

**Kevin Ball:** It's definitely more robust than just a set of regexes. Yeah, it's doing kind of a robust -- it has a state machine-based parser going through, so... This is better than you're gonna write on your own.

**Break:** \[41:55\] to \[46:47\]

**Jerod Santo:** Alright, well, in big news, sort of old news at this point, but big splash was the Adobe acquisition of Figma for 20 bills. No, that's not $20, it's $20 billion. A large price tag. One of the largest tech acquisitions, I think, of all time. I know Slack, I think, was 27 billion... But these are huge numbers. And for me, it was a total surprise. I don't know if you guys saw this one coming. I mean, I think the acquire in retrospect is obvious, but I just didn't think we'd see a big acquisition, especially with the state of the market. So what was your guys' initial reactions to the Figma acquisition?

**Kevin Ball:** Well, s\*\*t.

**Jerod Santo:** \[laughs\] Well said...

**Kevin Ball:** Also, I know a guy over at Figma... Alright, he's rich now.

**Jerod Santo:** Good for him. Yeah.

**Kevin Ball:** Good for him. So, actually, let me put a little bit color around my "Well, s\*\*t."

**Jerod Santo:** It's already pretty colorful.

**Kevin Ball:** I'm less concerned about the future of the core design tool. I think Adobe actually, for all that their stuff gets pretty complex, they care deeply about the core design tools; they've done a reasonably good job on historic tools. I think they're going to invest in it, because Figma is a really good thing that fits well into their wheelhouse. What I'm more concerned about is -- you know, FigJam, and a range of things like that.

\[48:13\] So I love FigJam. It's built on the Figma engine, but it's just this very simplified UI, and it's for like brainstorming and other types of things. It's like an infinitely better version of whatever Google's Jamboard thing is, right? It is like 1,000 times better than Jamboard. And I use it all the time. I use it for myself, for organizing thinking, I use it to run different types of meetings and conversations... For a distributed team, it's a phenomenal tool. And I don't know that it fits in Adobe's wheelhouse. I don't know that it's something they're gonna care about, keep investing in, or anything.

I also had a conversation with some folks at Figma the last time I was kind of looking around for possible other jobs, which I ended up deciding, "No, I like it where I am", but they were looking at all sorts of other takes, like that of "Where can we take this core engine of Figma and apply it in sort of a limited or specialized way to a particular problem domain?" Which I think is a really, really, really cool area, and not something that feels like Adobe's approach. And so I think we may end up missing out on a lot of potentially cool innovation that could have happened around that... And I'm terrified that we're going to lose FigJam, because I love that tool.

**Nick Nisi:** I've never used FigJam, and this is awesome.

**Jerod Santo:** I've never heard the word FigJam until a few minutes ago.

**Nick Nisi:** Same.

**Kevin Ball:** If you lead discussions in a distributed setting, it will change your world. It is absolutely freakin' phenomenal.

**Nick Nisi:** It looks a lot like Miro, which is something that I'm more familiar with... But I like this.

**Kevin Ball:** It's kind of -- yeah, Miro has some similarities. FigJam is better.

**Nick Nisi:** Yeah. When I heard this news, I was pretty excited, because now my daughter will have some software keys to share with her friends during high school, for Figma, like I did with Photoshop...

**Jerod Santo:** \[laughs\] Nice.

**Nick Nisi:** I mean, I never did that...

**Jerod Santo:** Well, now we don't know what to believe, Nick... Did you or didn't you?

**Nick Nisi:** If you're a lawyer, or seeking litigation, I never did that.

**Jerod Santo:** Right...

**Nick Nisi:** This is not an admission.

**Jerod Santo:** Well, I mean, we do think probably Adobe sees a lot of those keys into the world, because then they get you hooked really young, when you don't have any money... Then you love Photoshop, and you get older, start making some money, and you're like, "Oh, maybe I should pay for this." Brilliant. A masterstroke, if that's what they did.

**Nick Nisi:** It worked perfectly for me. I was like, "Man, this is amazing", and then I got Pixelmator, and...

**Jerod Santo:** Yeah... So I'm an Adobe user now, begrudgingly at first... And I've grown to appreciate a lot other tools. They're definitely complex, and have steep learning curves, and are so non-web. They're so pre-web tools, that this was an -- like I said, once I heard it, I was like, "Well, that's a really good move for Adobe", even though their stock dropped to match... Like, it's dropped 20 billion or something, something like that... The investors didn't like the move, at least initially. But it seemed like a smart move for Adobe, because they have a lot of great engineers over there, and some really top of the market software; but it's not webby, and they're getting their lunch eaten by Figma, as the price tag indicates... And so good for them. I hope they're good stewards of it. I have no idea about FigJam or whether or not that's gonna continue to be a thing. I hope it is for your sake, Kball.

But I guess tying into this news is there's now this other thing, Penpot, which raised a big round of funding... I know that about it. I don't know much about Penpot, but I did see an announcement of funding in the wake of the Figma acquisition. So somebody tell us about Penpot and how this plays into the conversation.

**Nick Nisi:** \[51:58\] Yeah, I saw this probably on Hacker News, or somewhere, on the same day that the Figma news was released. In a lot of ways, that was probably a reaction to this, to that news... But it looks very similar, to my non-design eyes, as Figma. But it is more SVG-based. So it's built more on open standards.

**Jerod Santo:** ProductHunt, over 1,000 upvotes on Product Hunt, they raised a series A, designed freedom for teams... They're calling it "The first open source design and prototyping platform meant for cross-domain teams. Web-based, and it works with open standards SVG." Kball, what do you know about Penpot?

**Kevin Ball:** Nothing.

**Jerod Santo:** Okay.

**Kevin Ball:** I like SVGs. I think if they can make it work, that's great. One thing that I felt like Figma got really right was the collaborative aspect of it. They made sort of conversation about design a huge part of their approach. This was how they ate Sketch'es lunch, right? They realized that in a web world, in the design world, you're not creating these things in a vacuum, you're creating these things to share, to discuss, to talk about, to hand off... So they have both the commenting and discussion stuff built in, and also, when you look at a component, you can like see exactly, you can annotate it, you can put all sorts of stuff about what's the CSS, and what are the different things there.

I don't know what Penpot is or does, but I'm like scanning the video on their homepage and I don't see either of those aspects being shown right now. So to me, this feels like this is a solo design tool. It might grow into it, but if they're not thinking about not just the process of an individual creating design assets, but the holistic design process, which is about communication and feedback and handoffs, and all of those things, I don't think they're going to be able to compete.

**Jerod Santo:** So Penpot is completely open source. It looks like a pretty permissive Mozilla Public License, web-based, and they say it's specifically for cross-domain teams. So I think that that's at least on their radar, if not an emphasis.

**Kevin Ball:** Actually, as it gets to later in the preview, I am seeing -- they did have some commenting stuff. So I guess it'll depend on how they execute it.

**Jerod Santo:** Yeah.

**Kevin Ball:** That would be my -- so few people are able to get that whole collaboration process right. And Figma really did.

**Jerod Santo:** Yeah.

**Kevin Ball:** And I think that's what's made them excel.

**Jerod Santo:** Well, it will be interesting to watch, see how Adobe handles the acquisition and the takeover, and what happens with Figma from here... And I just think that we'll see more -- maybe Penpot is the one, but we'll see more competitors in this space, as Figma laid the groundwork for what is clearly a better way of collaborating. And we know that one of the most expensive, cumbersome and slow parts of the software development lifecycle is the integration point between design and dev. There's so much room for gains there, and productivity wins, and better collaboration, which produces better end products that there's certainly room for more tooling. And we'll continue to see advancements as these things build out.

Alright, that's what's new and noteworthy. Any last links you guys just have to shove in there that don't have TypeScript in the title before we call it a show?

**Nick Nisi:** I feel like I'm being called out here. I had a TypeScript thing...

**Kevin Ball:** I'm gonna call out a non-tech one that I think is going to rock the tech world a little bit, which is this California pay transparency law...

**Jerod Santo:** Oh, yeah, that's interesting.

**Kevin Ball:** \[55:45\] California just signed, or created, passed -- what's the word I'm looking for? ...passed a new law, that California companies for California jobs have to post -- all the job postings have to include pay ranges. We've already seen -- before this most recent like mini-bust that's going on, we saw the kind of distributed world salaries skyrocketing in a lot of different places, as more and more companies based in these high-paying locations were hiring... But I think there's still probably a whole large amount of the tech world that does not realize how bloody much money Silicon Valley companies throw at developers. It goes around periodically... If you work for big tech, and you're even a few years out of college, you're fully loaded, probably making half a mil.

**Jerod Santo:** I was gonna say, 300k to 500k is pretty typical, right?

**Kevin Ball:** Yeah. And I think a lot of folks just have not internalized that. And this is going to change that. Because suddenly, these folks -- it's going to be visible. And there's all sorts of interesting and weird ripple effects, right? Those big tech companies can do that because they have massive revenue streams relative to employees. They have figured out businesses or business models where they get massive leverage on engineering employees. If that was the salary across the board, there's tremendous numbers of software businesses that today are viable, that would not be viable, right? Because not everybody's able to make that amount of revenue per software engineering employee. And so this is gonna -- I don't know, it's gonna have some really interesting downstream...

**Jerod Santo:** How long do you think until we like see ramifications of something like this? Are we talking 12 months, 18 months, are we talking about five years? How long does it take for us to start to see this actually change the way people talk about these things, the way they hire etc?

**Kevin Ball:** I think it depends a lot on the job market. So we saw -- in the tight job market distributed world that we saw in 2021, we saw massive changes in the course of a year. Now everybody's doing layoffs, and belt tightening, and not hiring anymore, and things like that. But we may not see much for a while, because jobs are a little bit more scarce. But the next time they get tight, that's when we're going to see extremely rapid change, I think, in this area, in terms of what people are asking for. And they're going to have this benchmark now.

**Jerod Santo:** Right. Power to the people.

**Nick Nisi:** Does this just affect like base pay? Is that something that they need to disclose, but not necessarily the other perks?

**Jerod Santo:** Individuals?

**Kevin Ball:** Hm... Let's see.

**Jerod Santo:** Yeah, the devil's in the details of that law and how it's actually going to be enforced and rolled out.

**Nick Nisi:** Yeah. And depending on how that is, that might affect how those are distributed. Like, it might be lower or it might be higher base pay, and then like different metrics on --

**Jerod Santo:** Right.

**Kevin Ball:** Unclear. It's unclear. Well, and it does create weird dynamics... So you have Netflix, which is famous/infamous for -- they don't do RSUs, they don't give out stock, but they have sky-high salaries. So mostly when you're hearing that 300k to 500k range for like a big tech company, maybe 150k of that is in salary, and the rest is RSUs. Maybe it's a little higher if you're more senior, things like that. But most of it is in restricted stock units, which is a fun tax-accounting game, and all this other stuff. Netflix - it's in bloody cash; a lot of the engineers there are getting 500k in cash each year.

**Jerod Santo:** It will be interesting to watch. Alright, we've gotta end it... But Nick, I'll throw you a freaking bone here. "TypeScript 4.9 Beta satisfies" - is that a statement, or is that a feature? What's going on here with this satisfaction?

**Nick Nisi:** I'll be quick on this... But in 4.9 they're adding a new satisfies keyword, so that you can say -- you can define that this object or whatever satisfies some type that you define later, but it does so in a way that doesn't affect how that type is then used or narrowed later on... So like previously, we have this "as" keyword, which is like -- what's that term from other languages?

**Kevin Ball:** \[01:00:01.02\] Typecasting?

**Nick Nisi:** You cast. You're casting to something else. You can do that in TypeScript; they have the traditional angle bracket cast syntax, but also they have this "as" keyword, so that it plays better with React, like JSX. And now they have this satisfies keyword, which will do the same thing, so I can say, "Oh, this object satisfies this interface", or whatever. But it won't actually change that. So if you said that it was -- if you're satisfying this requirement that this be a key-value pair, where the key is a specific key, like red, green, or blue, and the values are a string or a number, you're not casting to that, so that when you do a check later, you're doing like "Oh, myobject.red is equal to a string or a number." It won't cast it to be either a string or a number for that value, it'll be the actual value that it is, that it knows that it is, being number or string, so that you can do like number operations or string operations directly on it, without having to do an additional check.

So it's just some syntactic sugar on top of that... It's a little bit more of an intelligent casting, in that it won't mess up the types that you already have. And as I learned this morning, you can chain those. So I can say "satisfies this constraint", and then after that do "satisfies this constraint", and it'll like block on either of those... And it's just proving that TypeScript gives you more satisfaction.

**Kevin Ball:** So if I understand correctly, it's allowing you to make more type assurances without manipulating the types of what's coming down.

**Nick Nisi:** Exactly, yeah. So you can say - going back to my toLowerCase() and you can do that because you know that you set red as a string value, like a Hex value, or whatever. And then myobject.blue you set as a number, meaning like, I don't know, a number value. You can't do toLowerCase on a number, and so it'll throw an error at you if you try and do that on blue specifically... Whereas if you did the casting of it, the value would be either string or number, and you would have to further narrow the type on your own before you could do either of those operations... Whereas with satisfies you can ensure that you're meeting whatever type that you're wanting to meet, without actually affecting that and having to do more manual type narrowing later on.

**Kevin Ball:** So looking at Jerod's face, and knowing that he doesn't work with TypeScript very often, I think the only thing that can be said here is "He can't get no... Satisfaction..."

**Nick Nisi:** \[laughs\] This is a whole bunch of interesting tidbits about code that never actually runs at runtime, so... More TypeScript goodness.

**Kevin Ball:** Didn't somebody show that the type system itself is Turing-complete?

**Nick Nisi:** Yes. There are some fun examples of that, too. There is a -- I forgot the name of that game, but the text-based game adventure, where you type in "Look left", and then it tells you you looked left and you saw a wall, or you saw a door.

**Kevin Ball:** There's a lot of those, yeah.

**Nick Nisi:** Yeah.

**Jerod Santo:** Right.

**Nick Nisi:** Somebody did that in the type system. So you just like append types of like --

**Jerod Santo:** Yes, they did. TypeScript Text Adventure, I saw that.

**Nick Nisi:** It's amazing.

**Jerod Santo:** I just feel like we built this house of cards, and then we took a bunch of popsicle sticks, and we're trying to frame it up around the outsides with the popsicle sticks, and TypeScript is the popsicle sticks. And that just leads us to one last thing to say... \[Christopher Hiller\] "JavaScript should be destroyed!" As always, Chris gets the last word... And we really can't top that.

This has been JS Party. All the links to all the things are in your show notes. If you haven't subscribed yet - hey, maybe consider subscribing. We've got some really cool episodes coming down the pipeline. Docusaurus is coming up, we have Kevin Powell, the great CSS-based YouTuber coming on the show... A couple of book authors, Martine Dowden and Michael Gearon talking about tinycss projects... We've got Thomas Steiner coming on, talking project FUGU from Google... So lots of interesting guests. And of course, we always mix in fun and roundtable discussions, or whatever this one was... We mix these kind of ones in as well throughout. So subscribe to the pod if you haven't yet, and that's all. Any final words from you guys? I guess I said Chris gets the final word, but then I happened to open it back up again. Move quickly...

**Kevin Ball:** I've gotta try my mimicking this time... "JavaScript should be destroyed!!"

**Nick Nisi:** You did not just say that... \[Christopher Hiller\] "That's a great idea. I'm glad I had it."

**Jerod Santo:** Alright, that is our show. We will talk to you on the next one.
