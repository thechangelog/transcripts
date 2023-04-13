**Nick Nisi:** Hoy-hoy! Welcome to another exciting JS Party. I'm Nick and I will be your host for today, and I am joined by my pal, Kball. Kball, how's it going?

**Kevin Ball:** It's going great. Good to hear you're Mr. Burns, as always.

**Nick Nisi:** Yeah, I'm excited to chat with you once again. We have a special guest today, and that is Thomas Eckert. Thomas, how's it going?

**Thomas Eckert:** Hey, it's going well. I kind of feel like I've been pulled up onstage at a rock concert... This shows the value of hanging out in the Changelog Slack. You just loiter around long enough, and on some given Thursday you might get pulled onto JS Party... That is exactly what has happened to me, and I'm happy to be here today as we chat, have coffee, and just keep it really loose. So thank you for having me on.

**Nick Nisi:** Yeah, thanks for joining us. We totally didn't even pitch you on that promo for the Changelog Slack... \[laughter\] But we are excited to have you on today. So to give some background, I suppose - Kball and were just going to kind of have an unscripted coffee chat for this week's episode, and we posted out about, what should we talk about, and what questions we had, and you came with a whole list of questions.

**Thomas Eckert:** I just got thinking about it, and some of them are serious, some of them are silly, some of it goes into a lot of the topical things that are going on in JavaScript right now... And I'd love to pick your brains and get you guys talking, and... Yeah.

**Nick Nisi:** For sure, for sure. So before we do any of that, why don't you tell us a bit about yourself?

**Thomas Eckert:** Yeah. Well, my name is Thomas Eckert; I am a little bit of an imposter here, because mostly I write Go... But I also write a lot of TypeScript.

**Nick Nisi:** Okay. Phew!

**Thomas Eckert:** I work at a company called HashiCorp, which you may know from TerraForm, and other fine products... I work on Consul, which is a service mesh solution. So I'm much more focused in the networking side of things. But at my old job, I wrote a lot of TypeScript on the weekends, and in the evenings; I write a lot of JavaScript, a lot of TypeScript, and I'm a huge fan of the web, and I care about how the web evolves, and the tools that we get to make it great.

**Nick Nisi:** Awesome. Yeah, well, we are very excited to have you. We will probably edit out that part about writing Go, but that's okay... \[laughter\]

**Thomas Eckert:** Yeah... Just put that in the Go Time podcast.

**Kevin Ball:** I used to write Go also. But here I am...

**Thomas Eckert:** There you are... \[laughs\]

**Kevin Ball:** I have yet to see a good -- I mean, is there like a WebAssembly Go runtime yet? I mean, can you write client-side code in Go and have it --

**Thomas Eckert:** You can. You can do it.

**Kevin Ball:** Alright. So even as a Go developer, you belong.

**Thomas Eckert:** I do. I do. I appreciate that.

**Nick Nisi:** We're all inclusive here, for sure.

**Thomas Eckert:** That's right.

**Nick Nisi:** So how do we want to do this? Do we want to jump right into some questions? Do we want to -- Kball, should we grill Thomas a little bit beforehand? What should we do? \[laughter\]

**Kevin Ball:** So that's the interesting question, right? We're gonna run your questions right back on you.

**Thomas Eckert:** Alright, alright.

**Kevin Ball:** I kind of want to know your answer to your second question, which is "Who would win in a fistfight between the Tailwind CSS folks, and true CSS people?"

**Thomas Eckert:** The true CSS, the pure CSS. Well, I personally am a fan of Tailwind CSS. I've written a lot of Tailwind, I've written a lot of CSS CSS, and I think there's a lot of value in both, depending on your environment. My personal website, I do everything in Tailwind. I've shipped client projects using Tailwind... And who would win in a fistfight? I think - is it all Tailwind CSS people and all CSS CSS people at the same time? Because I think there's --

**Kevin Ball:** Pick a random one on each side.

**Thomas Eckert:** Yeah, exactly. I think Adam Wathan has been working with a personal trainer lately too, so he might have a little bit of an advantage there.

**Kevin Ball:** I don't know, I feel like the people who are into Tailwind, they strike me as the folks who are using the machines in the gym, right? Like, it keeps you on the straight line, it keeps you in the borders... And like the people who are doing hardcore CSS, they're like the kettlebell experts, right? Like, rough and ready, dealing with all the edge cases... And in my impression, you can build some impressive muscles on gym machines, but you're not gonna get that street toughness that you will if you're working out with like kettlebells and free weights. So I'm kind of thinking, the originals, the hardcore folks, they're gonna win.

**Thomas Eckert:** The OGs.

**Kevin Ball:** OG CSS.

**Thomas Eckert:** What do you think, Nick?

**Nick Nisi:** I go the other way, I think... Because if you're looking for longevity, the people who have the perfect form, which the machines will give you the better form, they're going to be at it longer, they're not going to hurt themselves, they're not going to get into a lot of trouble, as I currently am with my non-Tailwind projects... So I think like in a long game, they're gonna come out ahead.

**Kevin Ball:** \[00:06:15.18\] Well, we weren't asking about longevity, we were asking about a fistfight.

**Nick Nisi:** That's true. Yep, that's true.

**Thomas Eckert:** Well, what are the advantages in a fistfight? You've got a lot of discipline, you know exactly how to fight... It's not all about pure strength, but it's about kind of fitting into and accomplishing the task, which is winning the fistfight. And maybe those Tailwind CSS people, they have that discipline, they know exactly what to use. None of the CSS they ship is unused, by definition. So perhaps they're using all of their energy in the fistfight very, very accurately. And that's a way you can win.

**Kevin Ball:** Alright, I think we've punched that one in the face enough times... What are some of the other spicy questions that you had on there we might discuss? Is Agile overrated? I feel like that is one I've seen going around a fair amount. What's your take?

**Thomas Eckert:** I think Agile has become so many things... It's hard to really pin down what it is. I think almost every team I've ever worked on will refer to themselves as being agile, but they work in different ways. And those ways, actually, those processes do actually end up working, and we produce great output. But what even Agile is, I think you'd have to pin it down before you could really say if it's overrated. Is it really this specific way of working, or is it more of a concept? And I mean, I've also been on teams that have worked in a more waterfall fashion, especially for coordinating between two or more very large projects... And that works pretty well sometimes. When you need to get everyone on the same page, sometimes having a big document that says "This is everything I'm going to do over the next three months", it's not a bad idea.

**Nick Nisi:** Yeah, I always feel like it's -- it's what you said; nobody knows exactly what Agile is. And if I had to call it anything, instead of agile development, I'd call it like Schroedinger's development, because you think it's agile until you measure it and see that it's waterfall.

**Kevin Ball:** If you ask the influencers on Twitter what Agile is, they'll say, "Well, you should never file a bug, because if you're filing a bug, you're not being agile enough. \[laughter\] Real agile software doesn't ship bugs!"

**Thomas Eckert:** Yeah. All software ships bugs, and you can't solve all your problems at the exact same time, so you have to have some system to coordinate. And as those systems grow, and you need to report upwards, sometimes moving away from Agile is the right decision.

When it comes to non-agile approaches, you often have to write these documents, that you're sharing -- I mean, you have to read a lot of documentation in an agile environment too, but with waterfall you might have more RFCs, you might have these proposals, these high-level docs... And what I've experienced is I've not found a perfect tool for writing those docs, getting feedback from multiple stakeholders. I know some teams use Dropbox Paper, I know that we use Google Docs, some teams use Notion... What have been your experiences? What's the best tool for sharing those non-code, specific ideas and getting feedback?

**Nick Nisi:** Ah, this is an ongoing, ever-long debate.

**Thomas Eckert:** Well, I think if you took an engineer's perspective, they might move more towards pure Markdown and GitHub, right?

**Nick Nisi:** Yup.

**Thomas Eckert:** That I think is a wonderful solution. But I, like many people, work with fantastic people who do not want to use GitHub, who do not want to learn Git, who feel much more comfortable commenting in a shared environment like Google Docs, Google Drive. What's been your experience around that?

**Nick Nisi:** \[00:10:08.04\] Yeah, this is actually something that we have recently tried to make everyone happy with. And the way that we've done that is through Markdown in GitHub. But there's a plugin, like a GitHub Action that you put some metadata at the top of the Markdown file, and it will sync that as a Confluence document, which can then be in read-only mode there, but you can comment on it there in Confluence. And this is also like - not everyone in the company has access to GitHub, so it's a way to get that out there, but also keep the developers happy, writing their comfy Markdown, like myself...

**Kevin Ball:** And do comments get synced back from Confluence into something in Git, or GitHub, or how does that coordination work?

**Nick Nisi:** I don't actually remember. I think something happens with that, but I also haven't tested that.

**Kevin Ball:** Because the last time I was dealing with that combination, and had Confluence, a lot of our engineers never went into Confluence, and so they would miss any comments that happened over there.

**Nick Nisi:** I think that that's the problem with Confluence and Google Docs, and probably Dropbox Paper... But like, the fact that they're not tangible, predictable URLs like that I can get to, they're some random string in there along with it means that things just feel completely lost to me, and their search sucks enough that I'd never want to go -- I mean, I'm talking in terms of Confluence, I guess, at this point... Their search sucks enough that I never want to even look in there. And having that stuff, especially if it's like more developer-focused outside of the code, means that it doesn't get updated with the code... Whereas it has a greater chance if it's in line with the code and you can kind of see, with the Git versioning, when it was last updated, and push for a little bit more there.

**Kevin Ball:** Yeah. I'm not sure there is a perfect answer to this... Like the question of how agile do you get - like, there's trade-offs that depend on your environment, who you're working with. A combo that I've used, that sort of meshed that is we had them in Google Docs, but we had a shortlinks tool, and so we could create memorable short links and put those in code comments or other places where you could make it easier to sync. Pros and cons, once again; like, doing stuff in Google Docs is more painful for many engineers than doing things in Markdown... But we had enough weight of people wanting to get in there who weren't necessarily in the code that it made a lot of sense.

**Nick Nisi:** Fire question, real quick... You have to search for something, you have to know something that you know is documented somewhere. What's the first thing you do? Thomas.

**Thomas Eckert:** For me, I've actually -- we've been really lucky; at HashiCorp we've built this tool called HashiDocs. It's now publicly being released as Hermes, or Hermes... I don't know what the right pronunciation is. But this is a wrapper around Google Docs, and so all of our decisions are made in Google Docs, and actually, the content of the documents themselves has been - they've been indexed, and the search is fantastic. Like, you can really find the right thing. So that's one solution.

If I know it's in the code, ripgrep is my go-to. I go to that repository, and I ripgrep for the closest thing that I can, and I start reading the code. So it depends on -- if I'm looking at "Why did we make this decision?" I'm going to look at the RFCs, which I think is a really powerful thing about the RFC model. I can go back to the very start of the product that I work on and say, "Okay, why is this thing like this? Oh, there was a decision that was made because we needed to ship at this date. Okay, so this is not one of those things that I can never change", right? That's where I would start. How about yourself?

**Kevin Ball:** \[00:13:52.13\] That points to something, and I'm going to detour you off in a different direction... But that points to something that I've been thinking a lot about, which is documenting in decision documents, whether they're RFCs or other forms, or durable decision docs, or whatever model you use, but documenting what are the situations in which this decision might make sense to reopen. Because I find that -- I mean, maybe this is just engineers, but we love to relitigate decisions. And a lot of times, those docs are not perfectly annotating all the things that were considered, or they're opaque enough that people look at them, and then they still want to reopen, even though oftentimes the reason they want to reopen is rehashing something that was a deliberate decision. And so one question I have to you all is, "How do you think about when does it make sense to reopen a document, or a decision? And how is that annotated or indicated?"

**Nick Nisi:** It's not, for us... \[laughter\]

**Kevin Ball:** Do you see the same problem I mentioned then?

**Nick Nisi:** Oh, yeah. Absolutely.

**Thomas Eckert:** Well, I think it hits even at a problem that we all encounter when we join a company as an engineer, is navigating what decisions -- and a codebase is an artifact of multiple decisions. What decisions in that codebase are fundamental and intentional, and what are just externalities of another decision? Or, "Oh, I've just got to put this here." And you can, once you've learned the culture of your team, ask these questions of "Is this thing here because it has to be like this, or did you just write this in a day and that's why it looks this way?"

**Kevin Ball:** Though that approach you'll lose if you have a lot of turnover, right?

**Thomas Eckert:** Yeah, exactly. Yeah, because then you have to learn the team, and then I think that's a big value in these documents, is that they outlive an individual's tenure at a company.

**Kevin Ball:** So how would we fix that?

**Thomas Eckert:** My instinct is to put something closer to the code, right? I encountered a change just before we got on this podcast, where there was a make script, or an instruction or a makefile, and there was a readme that was next to this command... And it said, "We need to pass this empty file because this codegen thing needs something as the headers. It just needs a file." But we don't have any headers to add to it, so we just pass it an empty file. Well, I looked at that, I went to Git blame and I saw who wrote that, and the fact that it was written about three years ago. So I went and I looked at what flags actually needed to be passed to that command now, and realized that we don't need to pass an empty file anymore. So I just deleted that empty file that was just there to solve a problem.

So the closer to the code, I think, the better when it comes to making decisions in situ as an engineer. But when you're talking about architectural decisions, I think you need something like these decision documents, and maybe they need to be written in less formal English, and maybe just "Hey, we had this discussion." And if I can go into a topical topic, maybe we need a system that can read all of these decision documents, and you can have a Chat with a GPT model to say "Why do we have these modules broken up?" "Well, I've referenced, I've ingested all of the RFCs, and I know the answer", right? And it can point to an answer.

**Kevin Ball:** And the beauty of this is if it doesn't know, it'll tell you just as confidently... \[laughter\]

**Thomas Eckert:** \[00:18:02.23\] It'll make it up! It'll just make it up. That's the problem; you need at least some kind of source of truth, something that it can point to.

**Nick Nisi:** That is the big problem. And I feel for us also a lot of this is "not documented" by being documented in Slack history, and you have to go back --

**Thomas Eckert:** That is a problem.

**Nick Nisi:** Yeah.

**Kevin Ball:** Oh, Slack is a terrible system of record.

**Nick Nisi:** It is. It really is, yes.

**Thomas Eckert:** But what if you could have some kind of AI attached to your entire Slack instance, and you could go back and query these things? "Do you remember when we made this decision around should we use x or y?" I think that could be really valuable.

**Nick Nisi:** It could be. And just simple things, like "Oh, you have this RFC talking about this specific topic, and that was created or last updated on March 4th, 2022. But I see that on September 8th 2022 you talked about this in Slack, and it looks like you came to some kind of conclusion. Do you want to update these docs?" Having that kind of context could be kind of cool.

In looking at this - so we had Fred Schott on a few months ago now probably to talk about Astro 2, and we didn't really talk about it on the show much, but soon after that he announced Houston, which is like a language model that's trained on Astro's docs. And ever since then, it's just been in my mind, like "I want that, but for literally everything at work."

**Thomas Eckert:** Yeah.

**Nick Nisi:** And I actually kind of started looking for solutions to that, including like going down the rabbit hole of the dependencies that he used, or the Astro team used to create that, which is like Langchain, and this -- I think it was some Go stuff, unfortunately... \[laughter\] Sorry. But then I did come across this product on Product Hunt - it's called IngestAI, and it does literally this; it takes Confluence, it takes it Jira, it takes Microsoft Teams, it takes Slack, it takes Notion, it takes all of these sources, puts them all together, reads all of that, and then gives you a prompt that you can ask anything.

**Kevin Ball:** Does it link back to sources?

**Nick Nisi:** Probably. I haven't tried it. I would have to go through...

**Kevin Ball:** I think that's where you get something really interesting, right? You have a conversational interface, it can give you its best attempt, but not only that; if it can show you how it got there, you can go and validate that answer. And suddenly, you have something that is not able to just purely bulls\*\*t you.

**Thomas Eckert:** Yeah.

**Nick Nisi:** And I think that that's the promise of a lot of these things right now... Like, Copilot for Docs is a perfect example. It gives you examples, and it gives you where it's pulling the data from. Same thing with Houston; it does that. And if it doesn't tell you, it tries to tell you that it doesn't know... But they also have a big banner at the top saying "I might be totally wrong in what I'm telling you."

**Thomas Eckert:** "I might just lie", yeah.

**Kevin Ball:** It's not that hard to get it to hallucinate, too. I've played around with it some... \[laughter\]

**Thomas Eckert:** Well, you even in passing mentioned this point around "Oh, you mentioned this RFC. Do you want to go back and update it?" Well, that opens up this bigger question - what is the timeline on which you can go back and update your RFC? Because for us, we produce an RFC, it gets reviewed, it gets accepted, and then -- and usually, there's some implementation that goes along with the RFC. You're not just completely waterfalling, "I'm not going to touch code until this Google Doc is accepted." But you reach a point where the document is accepted, and as you get further along in your implementation, things change. Do you go back and change the record of these decisions? How do you do that?

I think one of the frustrating things in Google Docs - I think it exists, but it's not always easy to find, is there's not like a git blame functionality. I can't see what the RFC looked like at all these different points, or see things highlighted, like "This addition was made after this was accepted", right? And I'd love to go back and make notes on it.

\[00:22:16.04\] And I think there's an appropriate window, like maybe one or two months after the RFC that you can go back and add things to that. But - I mean, imagine if I were to go back to one of the original RFCs for Consul that's a couple years old now, and start making changes. That would feel wrong, because I'm disturbing this document that is a record, even though maybe I'd be making it more accurate.

**Kevin Ball:** I have a couple of immediate reactions. One is this is a big advocate in favor of Git-based RFCs.

**Thomas Eckert:** Yeah.

**Kevin Ball:** Because I think the sort of pull request-based process and the resulting commit-based historical record is order of magnitudes better than what you end up with in tools like Google Docs, or Confluence, or anything like that. And it lets you have a discussion about "Why are we updating this? Should it actually be updated, or should this be a new version and this is a historical version? What's the right approach to it?" So I think that's one piece of this.

The other immediate reaction is that I think your sort of core question of "What are the timelines under which this can be revised?" is actually something that is important to hash out broadly, within a culture, and individually for a particular RFC. Like, what are the conditions and timeframes under which revisions to this RFC are acceptable?

**Thomas Eckert:** No, and I don't know if I've ever been in an engineering culture that has really laid that down in a concrete way. I mean, what is the appropriate window where you can make those adjustments? It kind of becomes this "Does it feel right?" Like, I can tell which ones feel right, but I don't know if everyone would agree on what that window is.

And I think one thing I've really enjoyed going back to the idea of these git-based RFCs is I've participated recently in work in the Kubernetes - now I'm bringing up Kubernetes; sorry, everyone... Kubernetes contributor space around the gateway API, and a project called Gamma. And the only thing to bring up there is all of these proposals, these gateway enhancement protocols, or gateway enhancement proposals or GEPs are submitted in GitHub, and we can track all that stuff. It's just fantastic to have that record.

**Kevin Ball:** That works well in an environment where everyone involved in the process is a developer.

**Nick Nisi:** Yeah. That's a tough problem to solve.

**Thomas Eckert:** It's a really tough problem. I have not seen it solved completely.

**Nick Nisi:** This is really though where I do feel like language models have the most potential for impact, is in adding these correlations between these seemingly disparate sources, if they get access to them.

**Thomas Eckert:** Making those connections and inferences. Yup.

**Kevin Ball:** Though, once again, I think -- so there's a question of connecting between disparate pieces. But then there's also a question around kind of what Thomas is saying, of like "Where is the source of truth? And how is that updated?" I don't think a language model should be a source of truth.

**Thomas Eckert:** No.

**Kevin Ball:** That sounds like a very dangerous proposition. It might be one that recognizes sort of the constellation of different things out there that connect to the source of truth, prompts you when the source of truth should be updated, things like that... But there is still this core question of "What is the source of truth? When and how can it be updated, and how does that relate to the historical record?"

**Nick Nisi:** Not sure that we have an answer for that.

**Thomas Eckert:** \[00:26:06.12\] No. But maybe there's somebody listening who can develop that product, and it needs to be usable by engineers; there needs to be vim bindings, there needs to be the ability for multiplayer in comments, complete history, tracking between multiple documents to show that "This RFC affects the decision that was made in this RFC." And then there also needs to be a machine learning model on top of all that to tell us all of the reasoning behind all the decisions. And it needs to be able to not make stuff up. So that's just -- that's the product. I think all you need is a name, and that --

**Kevin Ball:** Sounds like a weekend project. Right?

**Thomas Eckert:** That's a weekend project, yeah, really. \[laughter\]

**Kevin Ball:** So speaking of timelines, there's a question in the Slack chat of "What is the longest time over which you've ever chased down a single bug? What was wrong, and how did you finally figure it out?"

**Thomas Eckert:** That's a tough one. Longest time chasing a single bug... I mean, I could say that in general the category of bugs that take me the longest to solve are usually in some kind of serialization of something that isn't nicely formatted. I have had fun experiences working with Yaml, where I think a lot of the categories of bugs that I had to solve -- so what I had to do is ingest Yaml, and then parse that and create a rules engine around that, and say like "If this is set, then this can't be set", and had to navigate up and down that tree. But part of the Yaml in this configuration was executable script. So I'd have to grab that, execute that script, get the output, trace back and find the -- so at that point, I'm holding in my hands the response from the script, I'm holding the JSON parsed model of that Yaml, and I'm also holding a reference to that line number where the error occurred.

So being able to report back and say -- I mean, when you're running code and you end up with some sort of error message that's like "Missing semicolon at etc.", like some crazy line or something that's outside of your code even, those kinds of problems where you're trying to parse something in and keep track of all these different parts of the data, so that you can report back and say "Your error - I'm pretty confident it's here." But there are all kinds of problems around that, where you could have multiple keys, where you don't know whether or not what you're being fed is complete. And the user could get back some crazy bugs just because I would parse a string from the beginning of this value all the way to the end of the document, and having to solve bugs around that. It was really hard to track down all of the error cases. So that's not a single bug, but it was a whole family of bugs as I processed that, trying to get Yaml and these scripts to give you feedback on whether or not this was a legit input.

**Kevin Ball:** Evaling code that lives within Yaml... As soon as you said that I got goosebumps. That sounds terrifying.

**Thomas Eckert:** \[00:29:54.06\] This project - at one point we were given the instruction that the user should be able to add or annotate their configuration with comments. And so it was suggested that we write our own Yaml parser that would also read in comments. And I did manage to dissuade the idea that we go and write our own Yaml parser that also includes comments. I was like, "That is a bad idea."

**Nick Nisi:** I was trying to think of mine... And I don't fully remember the specifics of it, but it took me probably a good, solid week. And it was something as silly as just animations not working properly, but it was not something that you could test locally. Because it worked every time locally. It was only out in production. But this was in the golden age, I think, of JavaScript, where we were using... This was a Dojo project, and so we would have been using AMD, or asynchronous module definitions, which are effectively the same in production and development. You build by just combining them all together, but otherwise, they're all the same exact thing.

And so this was the first time I learned how to use Charles Proxy to like on the production site proxy in my local copy of the app. But it was just basically the same thing. So I wasn't having to run a build step; I'd just make code changes, and then refresh, and it was grabbing from my local machine instead... And I was able to reproduce the bug over and over and over again.

And it ended up being something where it was like a race condition between when animations finish and some scripts that was being injected at the time, and because of some network speed... But the way that it was doing it - like, you couldn't even test that with the slow 3G, or whatever; yeah, the dev tool. So I can't remember exactly why, but this is a horrible story... But it eventually came down to effectively being some CSS animation code that by reworking it or coming at it from a different angle, we were able to effectively make the bug go away... Which was good enough for this case, but it was - it was like a week straight of just like loading this production site, trying to figure it out, proxying my own code, and running through it... Yeah, it was a nightmare.

**Thomas Eckert:** No, I think you're hitting on an entire class of really difficult bugs, where the actual source of the bug is the environment in which the code is running... And so it could be mysterious. And I think we've gotten better in general at replicating the dev, and test, and production environments... Docker has been a huge benefit here... But it's still not perfect, and those are really hard to debug, because there are invisible things that you might never realize that you were even setting in the first place.

**Kevin Ball:** Yeah. My debugging horror story is exactly one of those. This took me on the order of a month to debug. And the situation was this. So we were hosting our code on Google App Engine, and at some point in December - this was probably December 2019, or something like that - we started having outages, where once traffic would hit to some certain point, the machines would just start freaking out, swapping out of nowhere, and then we'd have cascading outages. And we could not figure out what was going on. We tried -- like, because it was it was App Engine, everything was Dockerized. We had old bundles, we had old instances, and we could actually recreate -- we had an old instance that would not exhibit, as far as we could tell, the bug. Now, we didn't have a perfect reproduction case, because it was tied to some amount of traffic, so we weren't sure what the situation was. But we had an old bundle that seemed to not reproduce it. However, if we took that snapshot of code, rebuilt it, deployed it, it would reproduce the issue. And so we were able to sort of pinpoint, "Okay, something changed in the environment between X date and Y date." I don't remember what they were. And we were like going back and forth with Google support, and we can't figure things out, and all these different things...

\[00:34:20.16\] I will say a potentially important piece of information - Google App Engine has multiple variants. We had some applications being deployed on App Engine standard, which were not showing this, and some that were deployed on App Engine Flex, which were showing this problem. So we thought, "Okay, maybe it's related to that", but not all of our applications were such that we could move them over to standard; they were using different Docker images, which you could do custom on Flex, and not on the other... So we couldn't just switch out of it.

We went on and on and on, trying to find different things... And their support was worthless. Absolutely worthless. But after a month of tracking this down, there were a few different things that came up. So one is we were able to see that the leading indicator that seemed to go into this is suddenly we would get lots of disk traffic. And so there would be lots of disk traffic on these instances for reasons we had no idea, including instances that like we weren't writing anything to disk; like, what is going on...? And this disk traffic would start thrashing the IO, which would then thrash everything, and it would cascade down.

Eventually, what we were able to do was we were able to get SSH into the boxes, and actually get out of our application environment and just kind of look around and catch when one of these is going on, and find out what was writing all this disk traffic. And it turns out Google App Engine uses Fluentd to handle all of this logging. Now, if you're not familiar with Fluentd, it's basically just like system software that pulls in logs and pipes it other places; it manages your log, and it's a multiplexer. So you can pull it from some locations, push out to other locations. And it has this functionality where if it can't write -- it's trying to write a log somewhere, and the network fails or times out, it will dump the logs that it's trying to write, to disk. And then five minutes later, it'll try to load up all the things that have been -- it's on some sort of fallback mechanism, but sometime later it'll try to load up all those things and rewrite them, assuming network failures are transient. And if it doesn't get that, it'll dump them back. And if it's the same set, it'll dump more and more and more.

And what had happened was Google had changed the location of one of the places that they internally dump logs to, and they had updated this in App Engine standard, but they had somehow managed to not update this in App Engine Flex. So Fluentd would just keep trying to write to the old location, say "It's not working. This must be temporary. Let me dump a bunch of stuff to disk. Let me load all that stuff up to disk. Go, go go." And there are timeout mechanisms after which it'll drop the logs, but at some threshold of traffic, you would start thrashing the disk so much that the machine fell over before you got to the threshold where you would drop those old logs. And we were able to point this to them and say "Fluentd changed. Here's where it's trying to send to. It happened at these times", and then finally, they said, "Oh, you're right. I guess it is our problem after all. We'll fix it."

**Thomas Eckert:** I mean, I get it from their end... It's hard when you have people who are using your product and saying, "Oh, something's wrong", and sometimes it's like, "Well, you are holding it wrong." But no, really, when you can point that out... And I think you have this real perfect storm of a bug there, where not only do you have this environmental aspect where you can't see the real cause... The easiest bugs to fix are ones where you can see all the inputs, you can see all the outputs, you can see each step of how they are transformed... You can go "Oh, okay, I can put a breakpoint here, here, here, here. Ah, okay." But when your bug is dependent on these conditionals, like traffic load... Traffic load itself is such a pain to replicate, especially if you're working on a smaller project. When you're working at scale, you want to have that kind of testing, but... That really does -- ah, man...

**Nick Nisi:** \[00:38:12.25\] So, Kball, your bug kind of leads into another one of Thomas's questions that I want to ask, which is "How much backend should a frontend dev know?"

**Thomas Eckert:** Is this for me, or is this for Kball?

**Nick Nisi:** For either of you.

**Thomas Eckert:** What do you think, Kball?

**Kevin Ball:** I think it really depends on what you want to do. So the advantages of knowing backend, even if you're working primarily in the frontend, is you get a much better sense of what is and is not possible. And a much easier time talking with your backend partners about what you need. You have a good \*bleep\* detector, you can understand what's going to be easy, what's going to be hard... And if, for example, you're in a small company where people move around a little bit, sometimes some folks are overloaded, and you just need a darned API endpoint hooked up, maybe sometimes you go down and you hook it up. So there's a lot of advantages to that.

That being said, I also think that, like everything we've been talking about, it's environment-dependent. If you're in a place where you have large enough teams that you can legitimately purely focus on the frontend, and there's a clean interface to the backend, maybe everything's going through GraphQL or something else - like, you don't need that. So it really depends on your setting and what you want.

**Nick Nisi:** What about in terms of like the frontend's deployment, or like serverless, like learning AWS Amplify, or whatever the Google Cloud or Azure equivalents are... Or Vercel, or Netlify... There's a lot of different pieces that are more like company-specific, depending on what backend...

**Kevin Ball:** Yeah, I mean, if you're working in an environment where they've got tools and they just wor... Like, why? Why? It's your setting, right? If you're working in a small company, in a startup, and you're blocking for hours on end because you're waiting for the expert on this - like, yeah, learn it, and then you can get it done. But if you're working at a big company where they have push button tools and it just works... Like, you don't need that trash; just let it go.

**Thomas Eckert:** I think that as you work in the frontend, the more that you might know of the backend, it allows you to have that ability to navigate around these blockers. I mean, I've had times when I'm debugging something that's building on Vercel, or on Netlify, or working in that way, and I've had the Jurassic Park moment of, "Oh, it's a Unix system...!" And I just go "Oh yeah, this is Linux. I can SSH into this", and then I can figure out "This is why this thing is weird." And that I think will always be valuable, but then again, I'm a little bit more biased towards the backend, because that's where I spend most of my time. But you don't need to know eBPF. You don't need to know eBPF, that's okay.

**Nick Nisi:** Good, because I don't know what that stands for.

**Thomas Eckert:** \[laughs\]

**Kevin Ball:** I don't either.

**Thomas Eckert:** It's the new hotness.

**Nick Nisi:** Early Bird Performance Framework...?

**Thomas Eckert:** Extended Berkeley Packet Filters. This allows you to read and respond to any of the Linux sys calls as they occur.

**Nick Nisi:** Interesting.

**Thomas Eckert:** It's the new hotness; it's not even that new...

**Nick Nisi:** As soon as you said "Berkeley", I was like, "That's probably not new..."

**Thomas Eckert:** "Oh, it's Berkeley..." \[laughter\]

**Kevin Ball:** I think another thing to bear in mind here is where you are in your career. Right? Like, if you are early in your career, it is way too easy to spread yourself too thin. Like, this field is so big, and so wide, and changes so fast, that if you're trying to learn everything at once, you're never gonna get anywhere.

\[00:42:06.21\] So if you're early in your career, I would pick one place to focus. And further than that, I wouldn't just focus on frontend. Frontend itself is so massively wide. I would focus on, "Okay, I'm going to learn how to do good web-based frontends using React, or using Vue." Or "I'm going to learn how to build good mobile frontends using --" I'm not a mobile developer, but one particular framework, whether it's Flutter, or it's React Native, or what have you.

After you feel like you can deliver just about anything you need in that space, now you can start to diversify. I mean, you could do it before that, but my sense is you'll be thrashing yourself. It's hard to learn the level of depth when you're trying to do everything at once. And once you do have that level of depth, the other things become easier to learn. Because as broad as this field is, there are a lot of related concepts, and you are going to be able to pick things up faster. So early career - don't even try to do backend as well as frontend. Pick one lane in frontend and specialize there. And once you are really feeling comfortable there and able to deliver just about anything anyone asks you of it, then start to branch out.

**Thomas Eckert:** What I think might be the most valuable as you branch out too is not to go and buy a book on Linux internals, but to start off by working way back through the dev tools, through the networking tools in your browser, or whatever your frontend environment makes accessible to you, see the network, and then learn tools that allow you to debug what's going on in the backend. Or at least see how these things might connect. And then you can google your way through to a solution.

**Nick Nisi:** Yeah, I think that's great advice. And it's like a more focused path too if you're looking at how to interface through the parts that you're already touching through the network interface; then you have like a starting point, rather than "Here's Linux..."

**Thomas Eckert:** "What do you want to know? Start reading the source code..." \[laughter\] No, I actually have been mentoring someone as they've gotten into tech, and we're working on a project together, and I showed him the Chrome Dev Tools, and the networking tools, and I just encouraged him, "Go to different websites. See how does Reddit load its frontpage. How does Netflix stream in a video?" You don't need to understand the details of what's happening on that backend, but what do things look like as they come to you through the network, and what do these different protocols mean?

**Break:** \[00:44:50.08\]

**Nick Nisi:** We did get one question -- we asked this question also on Mastodon, and we got one response... And so what is an underrated library or package?

**Thomas Eckert:** An underrated library or package is a package that doesn't get enough attention... \[laughter\] Proportional to how valuable it is.

**Nick Nisi:** \[laughs\] Do you have an example of that?

**Kevin Ball:** \[laughter\] Well played, sir.

**Thomas Eckert:** Yeah... I really -- working with Svelte and the mdsvex library has been fantastic. Are you familiar with this? It's very similar to the MDX that you see in React, where you can write these Markdown files that use components from React, and you can just pull that right in. But with mdsvex - I don't know how they want us to say it, but that is the equivalent for Svelte. And Svelte is such a great library, such a great framework for creating personal blogs, and websites like that... And being able to then bring in Svelte components into your markdown is just such a superpower, because you can write your own, say, codeblock; you can build really cool models, or you can use like a 3D asset in Svelte, you can create that in a component and then just use it in Markdown. It's such a superpower. I've really enjoyed doing that in the past.

**Kevin Ball:** I have a package that is extremely widely used, and yet I would still say underrated... And that's ESLint. And the way in which I think it's underrated is just about everyone uses it and a set of linters out of the box. They'll pull down a template from somewhere, or they'll use one of the built-ins. We as developers all develop opinions; our teams develop ways of doing things and ways not of doing things. Writing custom linters and custom configurations in ESLint is something I want to see way more teams doing, because I think the ability to put in those kind of automatic ratchets that check for the types of stylistic things that your team looks for are extremely valuable, and will cut down a lot of people's time where otherwise they'd have to do that in code reviews, and other places. So I think as widely used as ESLint is, it is still extremely underutilized, and therefore underrated.

**Thomas Eckert:** \[00:48:28.10\] Yeah. What do you think is keeping it underrated? Do you think there needs to be more accessibility to writing your own rules? Is that a culture that needs to be created? Why is that not happening?

**Nick Nisi:** I think probably because -- you know, some projects bring it in automatically by default. I just was messing around with Next 13, and it brings in its own ESLint rules, which is great, because it helps you with the server components piece of it. It'll warn you if you're trying to use things that you can't use in a server component, for example. Super-cool stuff. The React rules are great too, because they'll tell you you're not using new state properly, you're not passing the right things to the second argument, the array of values that it has to check...

Where I think it falls down for a lot of people, or it just becomes super-overwhelming, is like when you start bringing in like Airbnbs rules', and just blindly accepting them... And you're wondering "What's it yelling at me about this time?" and you just lose faith in it pretty quickly when it's starting to warn you about all these things that you really don't care about.

**Thomas Eckert:** I have made that exact mistake before with the Airbnb lint. And especially as somebody who's more of a backend, when I've worked on frontend projects and really -- one of my first instincts was like "Oh, I want to bring in all the tools around to make this the best." And I was like "I know what I'm doing. No, I don't need that suggestion. Thank you." Oh, man...!

**Kevin Ball:** Well, and this comes back to what to me has been a running theme in our conversation, which is it's situation-dependent.

**Thomas Eckert:** Yeah.

**Kevin Ball:** Right? Airbnb's rules were specific to their situation. And they published them on open source, which is great, but then we try to pull them down and apply them blindly as if they're going to apply to our situation. Probably they won't know.

**Nick Nisi:** Yeah.

**Kevin Ball:** I think, to your question, we as developers, we think about our own personal environments a fair amount, but I don't think we tend to think about our team environment as just as important for us to be optimizing and thinking about, probably because it involves having to have conversations with people, and reach agreement on stuff... But the most effective teams I've been on are constantly having this conversation of "How do we as a team want to improve our approach, or align our approach, or get you better synced on our approach?", rather than just a bunch of individual developers running their own ways.

**Thomas Eckert:** Yeah, I think you're pointing to the right thing around the messiness of humans, and I think one other aspect there is that it's constantly changing. You will add new people to your team, people will leave, people will get promoted... I at one point was working at a company and we had a senior engineer with a lot of tenure come into a project, and we had been working on this JavaScript project, and I don't know why we had made this decision, but we were using two spaces to indent. And all the code was using two spaces to indent. And the first thing this person contributed to the codebase was to change the indentation for the entire codebase to four spaces. Didn't ask; just opened up a pull request and approved their own pull request. They probably shouldn't have been able to. That was probably an oversight. But that does not feel good. And needing to have these difficult conversations around "How do we best write code?" is very difficult.

\[00:52:09.24\] I mean, I can understand some of the hate around Go, but this is something that Go has gotten really right. There are no arguments about what Go should look like. And the nice thing is, regardless of what codebase I go into, I know exactly what's going on. I can read all the code. Whereas even with the C++ that I've written in the past - C++ may as well be a different language in every repository you go into, because different people pull in different libraries, and you have to learn that specific flavor, in a lot of ways.

**Kevin Ball:** It's almost as if -- so you mentioned your example, and you'd made this decision, you weren't sure why, and he came in and changed it... It's almost as if we need some sort of approach, or documents for the decisions we make, and when they need to be reopened or not, and what the criteria were...

**Thomas Eckert:** And then we need to ask ChatGPT "Why are we using two spaces to indent?"

**Nick Nisi:** Because you didn't think to use tabs...

**Thomas Eckert:** I'm a big tabs person now. That's been one of my major life shifts in the past few years as I've grown older. I'm a tabs guy now.

**Nick Nisi:** And I think I read that Prettier is going to default to tabs in an upcoming release.

**Thomas Eckert:** I think it's great.

**Nick Nisi:** Yeah. More accessible, for sure.

**Thomas Eckert:** I'm all the way on tabs.

**Kevin Ball:** It does point back to this problem though, of we're thinking about the decisions in the product differently than we're thinking about our decisions about our approach to building the product, and maybe we shouldn't be. Maybe we should be applying the same level of rigor and iterative thinking and improvement and experimentation to our processes as we are to our products.

**Thomas Eckert:** Yeah. And I think that takes a level of ownership and being empowered as an engineer to feel that you can make changes to the code or the repository as a product itself. I think that's something that's very difficult when you come in on a team; if you want to be friendly and nice, you don't want to just start saying, "We should really be automating this. We should really be doing this. Have you thought about dev containers?" But when you are in an environment that you feel empowered to do that, you really can make those changes, and I think having a sense of experimentation is really valuable there, too.

**Nick Nisi:** Also just knowing how to approach that.

**Thomas Eckert:** Yeah.

**Nick Nisi:** We use spaces... I would love to use tabs. I'm not going to open a pull request and merge my own pull request with that. It's a conversation that has to be had, and I might lose, and that's fine. \[laughs\]

**Thomas Eckert:** In Go, in one of the releases recently, they've added a keyword "any" that is syntax sugar for \[unintelligible 00:54:46.16\] right? It's essentially the same as something that when you see interface empty curly braces, what does that mean? It means that can be any type. Do we go back in our codebase and swap all of them out? How do you make that as an argument, "Oh, this is what I'm gonna go spend some dev time on", right? Do you do it piecemeal? It's really complicated, and it's a very sticky, interpersonal thing.

**Nick Nisi:** Yeah. And I think we might have hit our threshold of Go... So maybe this is --

**Thomas Eckert:** Oh, okay, I'm sorry. I'm getting kicked off. What? Oh...

**Nick Nisi:** \[laughs\] That hook is coming from the curtain... \[laughter\] No, this has been fantastic. This is probably one of the fastest hours we've ever had on the show.

**Thomas Eckert:** This was great.

**Nick Nisi:** A flow of -- yeah. So with that, any parting thoughts as we play out? Kball, do you wanna go first?

**Kevin Ball:** Everything is context-dependent, and you can't get away from humans. The problems that you're solving in tech have to do with humans. When we're talking about decision documents, and what's the right approach, it depends on the people, and you need to have conversations. When we're talking about tabs versus spaces, it depends on the humans, and you have to have conversations with people. If you're talking about Go versus TypeScript, the answer is TypeScript.

**Nick Nisi:** \[00:56:16.28\] Yes, I agree.

**Thomas Eckert:** Yeah. No, I mean, I don't disagree. I love me some TypeScript. Yeah, I think in a similar vein, when you're thinking about people - you're right, that everything boils down to people making decisions, and the interpersonal skills. I think two pieces, two nuggets of wisdom or whatnot, is when you are joining a project, feel empowered to ask the questions of "Why?" and to seek out the answers there, and to take notes around what is a purposefully decided decision? What's an externality?

And also as a piece of advice for more senior engineers, to whom these decisions seem obvious, these connections seem obvious - begin to question how obvious they are to other people. There is -- I don't even know if it's real, it might just be apocryphal, but it's a good story... A concept of knocking and listening, where when you have these two participants in an experiment, one of them will knock on a table the rhythm to a song, and the other person will try to guess what that song is. And the person knocking the song characteristically gets upset, frustrated. "Why can you not figure out what I am tapping?", because they hear the song in their head, and they have this context. And I think as you grow in your understanding of a product, these decisions seem more obvious. You've been around long enough to know "Oh, yeah, because that guy Bill made that decision. That's why we do it this way. It's obvious, it feels obvious." Question that instinct, and over-explain, and make those decisions transparent... Because ultimately, we need to foster the right development environment, and that environment is the team, not just your vim configs and whether or not you use ESLint.

**Nick Nisi:** Called out there... \[laughter\] Yeah. No, I totally agree. Like, an example on a project I work on is like - we have a lot of these weird service files that exist, that are like singletons, that don't do a whole lot, and new developers come in and they're like, "Oh..." They don't question it, they just start using it, they start replicating those everywhere... And the actual reason why we have those is because when we converted to React, we converted from Angular, and that was the style at the time in Angular, so they brought it over to React. And we shouldn't really be --

**Thomas Eckert:** It was the fashion at the time... Everyone wore an onion on their belt... \[laughter\]

**Nick Nisi:** Glad you got the reference. And very few people actually come in and be like, "Why are we doing it this way? Could we be doing it better? Should we be doing it better? I think we should." The real reason why we're at like so many decisions is because somebody did it once, and then we replicated that, but there was no real thought that went into that initial implementation... And it's totally fine to come into a project and question everything. Don't just go change it, like in the case of the tabs versus spaces, but definitely question it, and make the teams defend their positions on things.

**Thomas Eckert:** I think that can be really powerful. I think it takes a team that can be open to that, and is accepting, and I think that psychological safety plays an important role. If you want to trace back where psychological safety can lead to better development, faster velocity etc. that's it there - can you ask these questions and say, "Why are you doing it this way?" without the answer being "Because that's how it's done. Like, please stop asking questions", right? And you need to be polite.

**Kevin Ball:** Yeah, your tone matters.

**Thomas Eckert:** Your tone matters, yeah.

**Kevin Ball:** "Why the heck are you using tabs instead of spaces?"

**Thomas Eckert:** Yeah. "Are you guys using JavaScript? Use TypeScript! Come on!" Like, "Okay, well, we have a good reason." So I think also having a trusted person on that team, having a buddy while you on board who you can pull aside and be like, "Have we talked about TypeScript before?" And they're like, "Yeah, yeah, we have..."

**Nick Nisi:** Definitely. Well, Thomas, thank you so much for coming on. We literally only got through --

**Thomas Eckert:** Thank you for having me on.

**Nick Nisi:** Yeah, thank you. We only got through half of your questions, so I guess that means we'll have to have you back...

**Thomas Eckert:** Some of them were just trolls. I mean... Some of them are just impossible questions.

**Kevin Ball:** And this is a problem why?

**Nick Nisi:** Yeah. \[laughs\]

**Thomas Eckert:** Yeah, that's true. \[laughs\] That's true. Sweet.

**Nick Nisi:** Yeah, thank you so much for coming on, and for being so active in our Slack, and please continue to do so... And yeah, we'd love to have you back sometime.

**Thomas Eckert:** Yeah, I encourage anyone listening who's not in that Slack to join, because there's lots of good ideas floating around, and you might get pulled on stage... It's just a great place to be, and everyone's really nice.

**Nick Nisi:** We try. And with that, we'll catch you next week. See ya!

**Thomas Eckert:** See ya!
