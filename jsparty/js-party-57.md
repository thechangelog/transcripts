**Nick Nisi:** Welcome to another fantastic episode of JS Party. This is our last episode for the year 2018, so it'll be a fun one. I'm Nick Nisi, and joining me today is Kevin Ball, or Kball.

**Kevin Ball:** Yo!

**Nick Nisi:** Then also Chris Hiller, or BoneSkull.

**Christopher Hiller:** Hello!

**Nick Nisi:** Today we've got some pretty exciting topics, and we're gonna start off by addressing a little bit of follow-up, and that is with the State of JS survey. We had an episode about that a few weeks ago, where we talked about the data and some things that we like about it, but also some minor criticisms that we have of it, and we actually got a response for that... Kevin, do you want to summarize that?

**Kevin Ball:** Sure. Yeah, our big criticism or the thing that we talked about was a concern about the transparency of the data and how it was collected, and sort of this question of how representative is this data of the broader Javascript ecosystem. At the time that we did that podcast, there wasn't actually that much visible on the survey about who answered it, or how it was answered, or how they reached those folks, and there had been some concerns trickling through the community discussion about that, so we brought that up... And I'm probably gonna mispronounce his name, but Sascha Greif, who's one of the three folks who did that survey, responded, which - first off, props; thank you for engaging with us.

**Nick Nisi:** That was really cool.

**Kevin Ball:** It was super-cool, and it really shows that their hearts are in the right place, they're trying to figure out how to do this right... So what they did is first they exposed a little more data. They exposed some data on the survey itself, essentially around the aggregation of "How did you hear about the survey?" And then he wrote up a blog post talking about all that.

There were 20,000(ish) respondents, of which something on the order of 7,000 answered that question, of how did they hear about it; the rest it's either Other or Unknown, which we don't actually know which one is which... And then kind of broke it down - their biggest sources were e-mail and Twitter, followed by Reddit, and various other things.

\[00:04:07.16\] He did some additional digging, looking at referrer data, which doesn't tell you how they first heard of it, but how they got to the survey, and various other things. So kind of really trying to address some of that transparency question of like "How did they reach folks? What does the sample look like?"

I think we can discuss what that data ended up looking like, and how representative we think it actually is, but I think it's a really positive step towards transparency. He highlighted in the end of his post, and he said they're trying to get closer and closer to the truth of the Javascript ecosystem, and their approach or their goal, the thing they think is the best way to do that is to keep trying to grow the number of people taking the survey, so they could just get a large enough response that they're gonna be representative. Is that a reasonable summary?

**Nick Nisi:** Yeah, I think so.

**Kevin Ball:** So what did you guys think? Did you read through their response? What was your reaction?

**Christopher Hiller:** I guess it's unclear to me what does "Other/Unknown" mean. Does that mean that there was a question on the survey, "How did you hear about that?" and the declined to answer it, or what?

**Kevin Ball:** I suspect there's some in that camp, and some who -- there's probably an Other response... But yeah, it's a good question, and there's no distinction right now between somebody who said "Oh, I learned about it some other way, versus somebody who just didn't answer the question."

**Nick Nisi:** Yeah, it is interesting that it's such a high value that is in the Other/Unknown category. It'd be good to know the distinction between that, but this is also a good way to improve the survey next time, I think.

**Kevin Ball:** Yeah. I mean, having done a bunch of attempted analytics stuff, I think that's pretty common. If you did into your Google Analytics data, there's usually a big chunk that you can't account for... And I at least tend to operate under the assumption that the distribution of the unaccounted for is gonna roughly match the distribution of the accounted for... But I don't know if that's accurate.

**Christopher Hiller:** I'd be curious to know if they have user agent information, and if they were suspicious that somebody might be trying to game it, as well. I don't see anything that necessarily suggests that, but it's good to rule out...

**Kevin Ball:** Yeah, so they talked about some of the referrer values... They had the browser referrer info, which gives you essentially the last hop. It says "Okay, what was the last thing that actually linked them here?" It doesn't necessarily tell you how they heard about it. They might have seen the e-mail, gone to the announcement post, and then clicked through from the announcement post, which was the top referrer of their recorded sets... But yeah, so there's some data there.

**Christopher Hiller:** Well, by user agent I mean "Are people taking this on their mobile device? Is this a desktop Chrome, or is this somebody's bot?"

**Kevin Ball:** Hm, interesting.

**Christopher Hiller:** I'm not suggesting that happened here, but again, it's good to rule that out, data scrubbing and the like. It would be nice to really just get the dump of the raw data, and just kind of...

**Kevin Ball:** That would be. And in fact, when I was talking to folks in the channel about this feedback, somebody said "Hey, this is good, but what I'd really like to do is dig into the data myself and say, okay, for example, you say all these folks came in via e-mail... Can we get a perspective of--" And I think Sascha said in there that the e-mail list is mostly folks who took the survey in the past, so that doesn't actually tell us anything about what niche of the ecosystem they're from, just that they happened to see this in the past... But maybe if we could dig into the data, we could actually do our own correlations, to say "Hey, all these e-mail people said that they used React" or "All these e-mail people said they used Angular", or what have you. Maybe that would let us get a little bit better sense.

**Nick Nisi:** \[00:08:16.21\] Do you think that that level of openness could skew or create unrealistic perspectives, potentially?

**Christopher Hiller:** How do you mean?

**Nick Nisi:** Like, if you had that and you started building up your own ways of analyzing it, those could be biased, and then you're writing a blog post based on that, and the Angular folks are biased one way, and the React folks are biased another...

**Kevin Ball:** Of course, yeah... What is it, "lies, damn lies and statistics"? You can use the data to show whatever the heck you want. There's some truth to that, but I also think that the only way we get to a real understanding of this is through discussion.

**Nick Nisi:** Absolutely.

**Kevin Ball:** And maybe having more people looking at that data, and slicing it and dicing it. If the data is out there and it's available, then somebody could do that story and somebody else could say "No, you're cherry-picking the data, and here's why, because I can show you with the real data."

**Nick Nisi:** Yeah, that's a good point.

**Kevin Ball:** That probably is more work for the team behind the survey, because there is probably some amount of anonymization they need to do, there's probably some amount of data cleaning they need to do, so that they're not leaking private data... But yeah, so Sascha, if you're listening to this, or other folks - we love it, thank you; we want more. We want it ALL! \[laughter\]

But it would be really neat to be able to access the raw data... And I think in a lot of ways the goal of this survey is to get a sense of what's actually legitimately going on in the ecosystem, and the reason folks are wanting more data here is that we care, and we want to understand what does this represent, and how representative is it of the ecosystem. Going back to that original episode, we talked about -- or I talked about my assumption based on who is giving the survey, that their audience is gonna be very React-focused.

And based on the data that I have visible here, I'm actually -- I don't know how much of this is just reconfirming my own bias, but I don't see anything that necessarily disproves that... Because if I think about how are these folks gonna have their own audience? Most, it's gonna be the people who heard about it through e-mail and Twitter, right? These are the people who are already following the folks giving the survey in one form or another. That's my assumption, I don't know that for sure. If we could dig into the data, we might be able to tell.

But of the folks who responded to that question of how they first heard of it, taking out the Other and Unknown, 60% of the folks who actually answered the question were e-mail and Twitter. So that's a pretty strong set from what I'm assuming - and once again, just an assumption - is their existing core audience.

**Nick Nisi:** And I think that that's something that's going to get better with time, because we all took the survey, and presumably we'll be on a mailing list about it next year, and... I know I tweeted about it and I posted it in some Slack rooms, and tried to get others to participate as well, and I think that that will just have a compounding effect as the survey goes on.

**Christopher Hiller:** I guess I don't have any reason necessarily to distress the analysis of this, so while I think the raw data would be great, I think the bigger question to me -- and I remember back... So there was an episode of the Changelog from - and I just looked it up - Friday, June 2nd, 2017; they had Frannie Zlotnick and Nadia and Mikeal on there, and they were talking about the GitHub open source survey of 2017... And a great portion of this discussion talked about how they really agonized not so much over the questions or the dataset that came back, but how they reach out to people to take the survey. That was the big concern, especially as Frannie put it... Because depending on who you ask and how you ask them, it's going to skew your results one way or the other.

\[00:12:30.21\] You kind of have to start with answering those questions, "Okay, this is how we chose where to promote our survey, this is who we e-mailed, this is what we did to get people", not necessarily how the people -- I mean, it's part of the question, but not necessarily how the people wound up with the survey, but what did you do as the survey author to get the survey into the hands of respondents?

I would really encourage anybody who's interested in surveys, just trying to gather data like this, like the State of Javascript - anybody who's involved in that, check out this particular episode on the Changelog. It's episode \#252. It's really interesting, about some of the thoughts and planning that go into a survey like this, that the scientists at GitHub had to go through.

**Kevin Ball:** That's a really good recommendation. I do like this idea... I mean, I think getting more rigorous about it is probably a good thing. I do think there's definitely some value to the approach of like "Let's just get as many people as possible, as we can, outreach to as many different communities as we can."

So I'm wondering, does it make sense -- should we brainstorm some quick ways to help get this out to more folks next year, so maybe we get a broader survey? Maybe the State of JS folks could partner with GitHub and get some sort of flag on any Javascript repo, that would be kind of amazing... Or maybe they can partner with npm and get anybody using npm packages through there.

**Christopher Hiller:** I mean, any business who would sign up for that would want access to that data, so I suppose that it depends on whether that's an interest of the people behind the survey.

Yeah, absolutely, partnering with sites that people go to, sure. GitHub, npm, Stack Overflow. But again, they have their own surveys...

**Nick Nisi:** I was just gonna say that, all three of those have their own... \[laughs\]

**Kevin Ball:** Very true.

**Nick Nisi:** But that raises an interesting thing, and I'm trying to correlate this to political surveys, which I absolutely don't want to do... But a lot of times people will look at aggregates of those surveys to try and see trends, because they might be biased in one way or another, and maybe one way to beat that bias is to have a comparison of the surveys and the data that they're getting to give you an average.

**Kevin Ball:** That's a great point. I think in the political world aggregates of polls have been shown to be an extremely effective way to model the system. They'll do -- I think the most famous set is FiveThirtyEight... And they aggregate, and they have every pollster, they will look at their history over time and sort of show what their biases are, and try to adjust for that. So yeah, that's a really interesting possibility; as you said, GitHub's doing a survey, npm's doing a survey, Stack Overflow is doing a survey, here's the State of Javascript survey... Yeah. Who's gonna do it?

**Nick Nisi:** JS Party, 2019. You heard it here first. Yeah, that is something that I do personally; I'll look at the specific results that I care about from this survey, and from the npm survey, and from GitHub. I'm really interested in what TypeScript is doing, and seeing the trends with that, and being able to just, in a non-scientific way, put that together on my own, and kind of see "Oh yeah, all of them are kind of saying that TypeScript is huge right now", so it makes me believe it a lot more.

**Break:** \[00:16:25.02\]

**Nick Nisi:** So we were talking about the survey in the previous segment, and just to close that out, I just want to say that I do appreciate the work, and I think that we all share the sentiment - we appreciate the work that Sascha and his team are doing, and I look forward to taking it next year and seeing the results going forward.

Also, I'm appreciative of the other surveys. One that is going on right now is the npm survey, which you can go and participate in right now, and let your voice be heard.

With that, we're gonna change topics and talk about the other big news of the last week or so, and that is the news that Microsoft Edge is dropping its browser engine, and it's going to be revived as a Chromium browser, and adopting V8 over its ChakraCore Javascript engine. I thought that this would be a really great topic to talk about and to get your ideas on what this means, and whether you're excited about it, or disappointed, or fearful... What are your thoughts?

**Kevin Ball:** It's terrible!

**Nick Nisi:** \[laughs\]

**Kevin Ball:** I mean, I say that -- I don't use Edge much; a tiny, tiny bit, and as a developer, in the short-term this is gonna make my life easier. However, I think it's making a bad situation worse, in terms of we're already seeing sites that don't work if you're not using Chrome. We're already seeing some of this return to the early days of the web, where it was like "Build your site for IE, and the site only works in IE." That's terrible. That was what Chrome was trying to break away from - creating more of a standard-spaced, competitive browser culture, and we got a solid almost 5 or 10 years of really great competition in the browser world that led to extremely rapid progress and advancement in this web platform, and now it seems like everything is consolidating back to one browser.

I think in the short-term that makes our lives easier, and there's all these great stories about "Okay, now that everybody's investing in this one thing, it's gonna move faster", and whatever, but we've seen what happens when something gets monopolized. This is not a unique story, this is something that just happens over and over and over again; monopolies lead to stagnation.

**Nick Nisi:** Yeah. The problem is that not everything is moving towards it. There's still Safari and WebKit, and WebKit as a mobile browser is super-popular because you have no other choice... So where does it leave that? And then of course we can't forget about Firefox. They've had a very good history of going against the grain in terms of IE. They really pushed IE to move forward, and pushed the web forward a ton, because we could still be on an old version of Internet Explorer without that.

**Kevin Ball:** How big of a gap do you say there is between WebKit and Chromium? Aren't they basically the same thing?

**Nick Nisi:** \[00:20:12.19\] That's a good question, and I wanted to talk about that a little bit. Internet Explorer has its own codebase, and they had their -- I don't remember what their original Javascript engine was called, but now it's ChakraCore... Mozilla has its -- is it Chaos Monkey? Not Chaos Monkey... Something-Monkey engine, and then there was Safari, and Safari was built on WebKit... And then Chrome came around, and it was originally built on WebKit as well, but then they were trying to add to many features that the WebKit team or the Safari team I guess wasn't interested in, so they had to end up forking that instead of just adding a ton of Chrome-specific flags... So they forked that and created Blink, and Blink is what Chrome is built on now -- and Chromium, for that matter... And then Opera dropped their engine and went with Blink, so they're a Blink-based browser. Brave is a Blink-based browser, and now going forward Edge will be a Blink-based browser.

**Kevin Ball:** Just to make sure then - Blink is the rendering engine? Because in a browser you've got a rendering engine, which deals with "How do I take this HTML and this CSS stuff?" and then you have a Javascript engine, which interacts with that but is not the same thing. Chrome is Blink and V8. Is WebKit using a different Javascript engine, or is it also using V8? It looks like it was originally the KDE Javascript engine, I'm looking now...

**Nick Nisi:** JavaScriptCore.

**Kevin Ball:** JavaScriptCore, okay. So it does actually have a distinct -- it's a distinct Javascript engine, and while it's a similar background, it has a distinct renderer as well. Is that correct?

**Nick Nisi:** I think so. I was conflating all of those things, so thank you for the clarification on that.

**Christopher Hiller:** We should be careful not to conflate Chrome with Chromium, as well.

**Nick Nisi:** Yeah. So how would you characterize a definition for each of those then?

**Christopher Hiller:** Chromium is the open source -- I don't even know... \[laughs\]

**Nick Nisi:** Chromium is the open source browser that Chrome is built on top of.

**Christopher Hiller:** When they say Edge is going to be built on Chromium, does that really just mean Edge is going to pull in Blink and V8? Because I don't quite understand. Does that mean that "No, actually we're going to extend Chromium with what we want for Edge, like Chrome does"? I'm not quite sure what that means.

**Kevin Ball:** Yeah, I think it is worth breaking apart what these different pieces are. As I said, there's the core rendering engine - this is "How do we take HTML and CSS and create a visual page?" We have the Javascript engine, which is the interaction piece, and then there's the user interface piece of this. My understanding is Chrome, for example - and Brave, for that matter, and a lot of these others - they're using the same rendering engine, Blink, the same Javascript engine, V8, and then they each have their own set of user experience pieces they add on top of that.

Chrome has the identity stuff, and various other pieces. Brave has all these interesting ad-blocking and other things they're putting on top, but they're all using the same underlying rendering engine and the same underlying Javascript engine, and I think for Edge the plan, as I understand it, is the same thing. So they're gonna continue doing a unique user interface and try to innovate at that layer, but they're moving to a shared rendering engine and a shared Javascript engine.

**Nick Nisi:** That's my understanding as well, at least.

**Kevin Ball:** \[00:23:52.26\] And it gets to some interesting question... In my mind, browsers are increasingly almost an operating system. And especially as you start adding things like WebAssembly, and stuff. This is the new application environment for the web. If you actually map that metaphor over into real operating systems -- we have right now kind of three big actual operating systems out there. There's Linux and its whole side of things, Windows and its whole side of things, and then there's the BSD macOS side of things... And then there's a bunch of micro-operating systems that never got any traction.

Here we have a scenario where there's been three big, possibly four -- the WebKit Blink thing is interesting, because that's... I mean, maybe that's the equivalent of Linux and BSD, I don't know. But you had three big(ish) between Firefox, Edge and its whole history, and Chromium-based stuff, Chromium/WebKit. Maybe four, if we call WebKit different, and now we're just dropping one; we're getting rid of it, it's going away.

**Nick Nisi:** Well, it's not gonna go away right away. We're still supporting older version of IE... I am, at least. And also Edge, and now I'm going to be supporting a Chromium-based Edge and the old Edge, and then also old IE potentially, forever. It might just be adding another piece into that; at least the Chromium Edge will be very similar to Chrome, which admittedly I mostly do my development in... So it probably will be much easier and won't be that much of a burden over what I'm currently doing... But the old stuff won't be going away tomorrow.

But it is an interesting perspective with the way things are going. Now we have Google and Microsoft that will be collaborating on the same engine, or the same codebase, for their browsers... So there'll be a lot of shared features in there. And then Opera is in there as well, although at a much smaller scale.

Then we have Safari going its own way, which still kind of has a little bit of a shared history with Chrome, in terms of Chrome originally being WebKit-based.

And then we have Firefox, that is their own thing, with SpiderMonkey and their Gecko rendering engine, going another way. How do you see those browsers - the non Chrome-based browsers - being able to compete with this going forward? Because the Chromium project will have Microsoft and Google - two of the biggest players in technology - behind it, and being able to potentially throw their weight around on features that they want, and want to support, that may not be the best thing for the web, or something that Mozilla or Safari are interested in going forward with.

**Kevin Ball:** That's my big concern. Because this is putting a scenario in place where there is no balance of power, and competition is small. If you look at browser user share, how much does Firefox have?

**Nick Nisi:** 10%.

**Kevin Ball:** 10%. You have WebKit, you said, on mobile... Or it has to be on mobile; I think that's only in iOS, right? Android is on Blink-related browsers.

**Nick Nisi:** Yeah.

**Kevin Ball:** It's a real concern, and I'm worried it's gonna fragment the web, because you're gonna end up with essentially Chrome running one way, and not enough counterbalance on the other, or it's gonna stagnate the web, where there is no sort of exchange of ideas.

If we think about some of the contributions that the browser team at Microsoft \[unintelligible 00:27:38.16\] CSS Grid was initially implemented in IE. That proved out as a concept and initial implementation in a non-Chromium browser, and it's a phenomenal leap forward for the web. Would that have happened if they hadn't been doing their own independent browser innovation? I'm not clear.

**Nick Nisi:** \[00:28:01.25\] Yeah, that's a really good point, and a concern going forward... Because there will be potentially less innovation coming from these two combined companies, or their combined word. So it'll be interesting. But they could also be pushing things that are very specific to them. Or we run into another issue where Microsoft wants to do something, but Google doesn't want to do that, and then they end up adding more and more flags, if I understand the story correctly, about the WebKit Blink split... Maybe they go for a while, and then it splits off into two different things. Again, that's also a possibility.

**Kevin Ball:** It is, though it'll be two different things that, once again, have more of a shared history, which... I don't know. I mean, another way that we could think about this - and it's something that's sort of been mulling in my head - is in terms of where the layers of innovation are. Maybe the browser stack is getting close to mature, and especially -- I think we're on a train right now to get WebAssembly working well on the web. Once that is in place, maybe that's not the place where we're doing the innovation. Maybe it's at higher levels, and having just one thing that you're working on can actually enable a lot of innovation at the higher levels of it, at the level of application development, things like that. I don't know.

I'm not sold on that argument, but it makes me wonder, because you see this also play out in the history of technology - when a technology is new, you have lots of competitors and different people try to jump in and doing things, and as it matures, it consolidates down to one or two companies, but that's not where the innovation layer is anymore; now the innovation layer is building on top of that, or using that as a building block inside something else.

**Nick Nisi:** Yeah, definitely. It's interesting to theorize about where this is gonna go, and I guess in my mental model of it I've been using Brave as an example. Although it's not a perfect example, it is a Chromium-based browser that has a little bit of a different look and feel, and some different functionality on top of it. They're innovation in their own ways, and there's a Changelog episode about that... But they are effectively bringing in Chrome to get the best browsing experience, instead of doing their own engine or relying on that; they're going to get the up-to-date features. They definitely don't have the market share of Microsoft or Google, for that matter, to probably hugely sway things, but they get a lot of the benefits... And now Microsoft is going to be getting a lot of the benefits of that.

I'm wondering if -- I don't know the fate if the F12 Developer Tools, but I'm assuming that those are going to be replaced with the Chrome DevTools, and that'll be interesting. That is kind of one of the reasons that I mainly use Chrome as a development browser, because I really like those tools, I know how to navigate around them very well, and they're the same tools that if I want to debug a Node process; because Node's using V8, they work really well with that. So it definitely seems like we're moving towards a monoculture with that, although Firefox still has excellent development tools, and WebKit - they're sure trying. \[laughter\] But yeah, it's interesting.

**Kevin Ball:** I also just have concerns about the level of concentration of power at Google. Frankly, they own too much, and I feel conflicted about this, because unlike Facebook, which I also have concerns about... Facebook - I could leave their product behind and not be bothered. Google - I love a lot of the stuff they're doing. Search is amazing, Gmail is amazing, they've got the best calendaring options... They're doing great, great stuff, but they also have just a ridiculous level of control of the web. They suck up over half of the web's advertising dollars, they have massive browser market share, they have massive e-mail market share, they have massive market share along all these different dimensions, all in one company that has basically shown that their business model is to get the best possible model of who you are as a person, so they can show you the best ads. That's terrifying.

**Nick Nisi:** \[00:32:12.19\] Yeah, definitely. They have the biggest mobile market share too, because Android is huge, and then Blink is the most popular mobile browser, because every one of them but Safari is built on it. Yeah, it is terrifying to think about how much weight Google has in all of this, in the technology that we use every day.

**Kevin Ball:** Yeah. I live in the Bay Area, and I know a number of people who work at Google, and they all are trying to do the right thing, but we also know that power corrupts, and the more power that is concentrated in a single place, the more likely it is to cause problems... And you see, they've had little missteps, for example the whole -- if you log in with Gmail on Chrome for a while, it would automatically log in Chrome with that user, so you are getting tracked your login experience across every tab you had in Chrome. And there was big backlash, so they backed off of that. But how many things -- are there decision being made that aren't as public, that aren't as visible, that are all leaking away our privacy, and things like that, going to Google's benefit? There's too much power there, and this I think is just another step in that direction.

**Nick Nisi:** What if things went the other way? What if Mozilla and Safari both switched over to becoming Chromium browsers, and they all just contributed to Chromium to make it the one browser project of the web? Do you think that would be good or bad?

**Kevin Ball:** Terrible. That's even more of the same issue of monoculture. On the one hand you can make the argument, okay, now you have all these same companies that were already doing things, they're now all engaged, but they're just engaged in a different way. But I think history matters and the institutions around it matter. Chromium has been owned and run by Google for a long time, and even if they're doing a lot to distribute that project management across the web, and distribute the management of that organization, they are gonna continue to have an outsized influence on it.

Right now, Mozilla gets to make all the decisions for Firefox, and they also do it in a very open way, and they have an open source community, and yadda-yadda-yadda... But make no bones about it, Mozilla is making those decisions. The same thing is true with Chromium and Google.

**Christopher Hiller:** These companies - Apple, Google, Mozilla, Microsoft - control essentially the specification for the web. They're the members of the WHATWG, so one could look at this and say "Alright, well, if they are coming to agreement on standards, and have fought back against W3C's EME DRM (which they have) what does that mean? Does that suggest that these companies can work together in a way that is beneficial for the open web? I mean, I guess I'm not convinced it's all doom and gloom necessarily. I feel like of those four companies, the only one that really has this incentive to invade your privacy is Google. Apple, Mozilla, Microsoft are not advertising companies. So maybe that balances things out...

\[00:35:46.03\] I guess it's difficult to say what would happen if everybody coalesced around the same basic web browsing engine. It would certainly be cool for developers, who would have a lot more confidence in the environment that they deploy their code to... But other than that, I don't know. In a perfect world I would love a non-profit entity, an entity that is concerned with users' privacy to have more of a stake. But it's kind of all about the resources, and who can throw developers at the problem, and so far that's been a lot of Google.

**Nick Nisi:** Yeah. And I think you hit on it correctly - once this takes over, and once the old Edge and Internet Explorer die, in the short-term that will probably be a better experience for users and developers, because most likely they'll be aligned on things. Things will get easier for us, because it's -- things will just work a lot better, and have more consistency between everything. But as things go forward and decisions have to be made and disagreements are had, that's where things are gonna start falling apart, because Google has way too much control over this.

Do you think that you would feel better if Microsoft had instead chosen Mozilla's browser technologies to build on instead?

**Christopher Hiller:** Personally I don't really care, because I don't use either of those... \[laughter\] I use Vivaldi. That's my main browser. It's built on Chromium. I like that Chromium has enabled browsers like Vivaldi and Brave to exist. I think it would be damn near impossible for them to exist if there wasn't such a project as Chromium.

**Nick Nisi:** I agree with you that Chrome and Brave - they're taking different routes, but they are trying to figure out ways to serve you ads in different ways. Mozilla doesn't really seem to be doing that, and Apple doesn't really have a foot in the advertising game from that perspective, as far as I can tell. Microsoft does, right? Is Bing even still a thing?

**Kevin Ball:** Bing is still a thing... Though if they just changed the default search engine on their Chromium-based thing, they'd get just as much out of it as having a unique browser, which I'm sure is part of the calculus that they made. They could be investing way less, and be at the forefront, get probably better usership, because I think users don't care about a lot of these long-term questions; they're just saying "What's gonna serve me best now?" And if they have their default search be Bing, they get that money.

Mozilla makes their money based on search as well, right? They have a search deal, I think, with Google right now, to have Google be the default search engine on Firefox. It's all coming back to advertising money... Which, that's kind of the way the web has been built. That's the one reason why in some ways Apple can go a different way - they are the only one that their web browser stuff there is about feeding back into the hardware ecosystem, rather than driving money through search.

**Nick Nisi:** We should all switch to Safari.

**Christopher Hiller:** I think this is fair to mention that... Back when IE was king, that was proprietary software, and Chromium is not. I think that will make a significant difference in how this plays out. I guess I'm not entirely convinced that it's all doom and gloom... Obviously, Mozilla has it in their interest to say so, but it is not the same thing that happened in the past, in my opinion anyway.

**Nick Nisi:** \[00:40:00.03\] That is a good point - things weren't open source in the past, so there was no control or no insight or oversight into anything. There will be more oversight, and I think a possible consequence of that is they just fork and go their own ways if things ever get too crazy... But hopefully, going forward they will all coalesce around being built on fully open source technologies that we can see into and contribute back to, and understand what they're doing.

**Christopher Hiller:** That being said, one of the major problems was not just that it was proprietary, it shipped with the OS. Microsoft EDGE ships with the OS, so... Yeah. Maybe I'd have more concern about Microsoft's role, but again, they've kind of turned things around. I'm just not convinced it's gonna be the end of the open web, and everything is gonna go to crap.

**Break:** \[00:41:06.08\]

**Nick Nisi:** For this final segment, we thought we'd talk about -- since this is the last recorded episode of JS Party for the year, we'd look back on what were some of the big highlights of JS and the ecosystem in 2018. BoneSkull, do you want to maybe start off? Do you have a big highlight of the year?

**Christopher Hiller:** I don't really love TypeScript, but I feel like TypeScript is really -- a lot of people do, and it seems to have really taken off.

**Nick Nisi:** \[laughs\]

**Christopher Hiller:** I like that TypeScript definitions exist, and I like that I can use them in my Javascript to get more insight, but... Okay for others, not for me.

**Nick Nisi:** It really does seem like TypeScript is one of the big winners of 2018. They had version 3.0 come out in the middle of the year, Babel supports it now in Babel 7, and a big thing is that Create React App ships with a flag where you can enable TypeScript support right in that. So it's easier than ever to adopt it, and it really seems like more and more places are doing that.

**Kevin Ball:** Well, I know also that the announcement has been made that the next major version of Vue.js will be built with TypeScript.

**Nick Nisi:** Oh snap, yeah. I think that from a -- I might be biased, but from a framework committer's perspective TypeScript really is a great feature for that, because you can still build stuff that works really great in Javascript, but you get really nice type safety to eliminate a lot of common bugs, and in my opinion it's just more welcoming to contributors who want to come in and take part in developing.

**Kevin Ball:** Another big thing that happened this year - JS Party restarted.

**Nick Nisi:** Yeah, that was big news.

**Kevin Ball:** All of us are new this year...

**Nick Nisi:** That was big news, yeah. I think in May was the first episode of the reboot.

**Kevin Ball:** April, I think.

**Nick Nisi:** April, yeah. You're right.

**Christopher Hiller:** I guess at some level I'm surprised we're not talking about the cool new web framework... Because there isn't one. \[laughter\] Which is nice.

**Nick Nisi:** I mean, Dojo 2 did come out in 2018... \[laughs\]

**Christopher Hiller:** I mean... You know... \[laughter\]

**Kevin Ball:** \[00:44:05.15\] God reaction, good reaction.

**Christopher Hiller:** The big players, the ones with the most market share - it seems like the ones that were big in 2018 were also big in 2017. It's nice that there's not this incredible new framework that everybody says "Oh, wow, I need to trash all my code and convert to this new thing!"

Yeah, it feels like where there was once a lot of fatigue, there's sort of been this stabilization a bit this last year, and I dig that.

**Nick Nisi:** Yeah, for sure. I think that that's a great thing, and React is huge, but I think that -- well, maybe it was 2018, but some of the big news is that Vue is really a contender to it, so there's healthy competition there... But you're right, it's not 10,000 frameworks or a new framework every day. It's healthy competition between the big frameworks, and they're all just growing in functionality and ease of use and adoption.

**Kevin Ball:** Npm published some really interesting stuff this year in Javascript, and one of the things they highlighted was - yeah, React's growth has started to slow down relative to overall ecosystem growth; Angular is still going strong, relatively flat. Vue has been growing strongly. Ember has started to come back, at least number of npm downloads... Which is cool, because they do a lot of really interesting, innovative stuff. The only framework that seems to be continuing to really die away is Backbone.

**Christopher Hiller:** It's incredible that we're still talking about Backbone.

**Kevin Ball:** You know what I learned -- because I was digging into... Oh, this is actually big news 2018 - WordPress just released officially a React-based editor as their primary editor. Gutenberg is now React. So WordPress, which has been both the most popular framework for building websites for forever, and also every developer's bane, is legitimately modernizing and embracing modern Javascript. But anyway, looking into that, they're still using Backbone for some of their API wrappers.

**Nick Nisi:** Interesting. I've heard interesting things about Gutenberg.

**Christopher Hiller:** And what are those interesting things? \[laughter\]

**Nick Nisi:** I've heard that it's not the most accessibly-built code.

**Christopher Hiller:** I too heard that.

**Kevin Ball:** Yes. I think it is possible to say that Gutenberg is a big step forward along many fronts, and also a big problem and potentially a step backwards on other fronts... And accessibility is one where it sounds like there were problems from the very start, in terms of process and how it was being evaluated, and those problems have not been resolved.

**Christopher Hiller:** Remind me how we know this... There was like a Medium post about it from somebody on a team...? I feel like it was something like that. And they had resigned in protest, or something. Is that what happened?

**Kevin Ball:** There have been dozens of posts about this particular issue...

**Christopher Hiller:** Dozens?

**Kevin Ball:** Yeah. I've featured at least three on my newsletter. It's been coming up a lot. Let me see if I can find some... There were definitely folks raising flags, resigning from the accessibility team on WordPress, various other things... And essentially saying that their concerns had not been -- I don't wanna say they hadn't been addressed, but they hadn't been taken seriously or really thought about.

They were raising what are essentially design-level questions, of saying like "How should we be approaching this in a way that can facilitate accessibility?" and the team was not even listening to those, and essentially trying to bug-fix their way to accessibility.

**Nick Nisi:** \[00:47:50.25\] That's disappointing that their priorities weren't there from the start, but hopefully it does improve. I have to say that I think that a big winner in terms of the web and open source for 2018 really has to be Microsoft at this point, because they had a lot of big news. We talked about TypeScript, that is growing in popularity, but they also bought GitHub this year, and that's big news there. That's a big investment into open source and the open source ecosystem.

They're rebuilding their browser in Chromium - that can count as 2018 news, even though we just talked about it in the last segment, and... There was one other thing. Oh, Visual Studio Code is just exploding in popularity. A large majority of web developers are using Microsoft technologies every day, or most things, which is pretty crazy.

**Christopher Hiller:** The same company, Microsoft, now essentially owns -- of course, VS Code is from Microsoft, but they also own Atom, which it seems has been kind of declining in popularity because of VS Code. And I thought just (was it even) yesterday, Facebook announced that their editor built on Atom is being retired.

**Nick Nisi:** Nuclide.

**Christopher Hiller:** Yeah. So that's being retired, too. I think Atom is kind of a loser this year because of these things.

**Nick Nisi:** I always forget that they also technically own Atom. \[laughs\]

**Kevin Ball:** Yeah, that is interesting that they're retiring it. I didn't see that, but I'm seeing it now... Do they say why?

**Christopher Hiller:** Oh, Facebook? I didn't see anything about why, but one can assume that they're all probably just using VS Code.

**Nick Nisi:** I'll be holding on to Vim until the bitter end, but it is exciting to see that, and there are a lot of really cool features in VS Code that make me jealous sometimes, but... I'll just be the old \[unintelligible 00:49:53.02\]

**Christopher Hiller:** Oh wait, you're the Vim guy, right.

**Nick Nisi:** Yeah... \[laughter\] I'm a Vim guy.

**Kevin Ball:** I may also be a Vim guy...

**Christopher Hiller:** I too use Vim, but not as my main editor. Hey, what about editor monoculture?

**Nick Nisi:** I'm afraid of that, too.

**Kevin Ball:** It's a problem, but there will always be a hardcore segment of people using VIM. And there's data out there - I think Triplebyte has published data... Triplebyte are like a recruitment firm, essentially, but what they do is they have engineers who interview engineers, and then help match -- so they pre-screen folks, and then match them to a bunch of companies... But that means they have a bunch of data about engineers and how well they do on the sort of standardized engineering tests. And they did a bunch of stuff about skill level by editor, and the clear, obvious winners are Vim and Emacs, and that can have nothing to do with the fact that those people are old school and have been doing this forever, and clearly is a statement about the beneficial qualities of using Vim and Emacs.

**Nick Nisi:** Exactly.

**Kevin Ball:** \[laughs\]

**Nick Nisi:** One of the things that really drew me to Javascript way back when I first got out of college was I didn't need this big, cumbersome editor. Eclipse was what we were using at my first job, and I didn't need that to actually feel productive in Javascript, because I've really felt that it didn't give me anything, so I could kind of go my own way and understand the language... And I really liked that, and switched over to Vim, and I do use the language service for TypeScript, for example, so I do get auto-completion and things like that... But I'd be terrified of an editor monoculture where you need an accompanying editor to do your work and nothing else will really work. That would be terrifying to me.

**Kevin Ball:** One other big thing that I think really hit its stride this year is GraphQL. It's starting to be very much a thing. In fact, I was looking back at all the episodes we did - we talked about JS Party restarting... The most popular episode to date of our new round has been the episode on GraphQL.

**Nick Nisi:** \[00:52:13.12\] Have either of you used it?

**Kevin Ball:** No, are you kidding? \[laughter\]

**Christopher Hiller:** I haven't implemented anything with it, or tried to create an API or anything like that, but what I have done is I have used GitHub's GraphQL API, and I found that for picking out very specific points of data it's really nice, compared to trying to work with a RESTful API, especially since you can just load up GraphiQL - I don't know how you pronounce that; it's basically just a GraphQL query editor... And just fire off queries at the API and get data back.

Yeah, I found it a lot easier to do, especially since you don't have to make all these sequential calls to get at what you want. I think it's pretty cool just from a consumer API point of view.

**Nick Nisi:** Yeah, definitely. I don't think that that'll be a technology that we are done hearing about in 2019.

**Kevin Ball:** Yeah. I haven't used it, but I've been watching and reading. They have some real things to figure, in terms of like -- one of the really nice things about REST is the way that it can lean into browser caching semantics and all that, but most people aren't actually using that. Most people are not having their RESTful resources be cacheable and things like that, because they're just keeping things fresh all around.

I do think GraphQL had some really interesting things, both in terms of the ease of use, but also in terms of moving -- like, even if you just use it to wrap a RESTful API, now you're making all those REST calls down in a presumably very fast networking side of your data center, rather than from whatever slow network you're in with your mobile phone, or whatever... And the slow network only has to make one call.

**Nick Nisi:** Yeah, and I'll post a link in the show notes - there's a good blog post by Netflix about their learnings from adopting GraphQL. That's an interesting read.

**Christopher Hiller:** I read that too, and I was kind of confused because it was a year or two ago, I don't remember, but they had their own thing, Falcor, and it is GraphQL-like; as far as I understand, it's less full-featured than GraphQL, so I wonder what that means for the future of the Falcor project. I mean, is that something Netflix is still committed to, or are they thinking about abandoning it and just going for GraphQL, like the rest of the world, or what? Obviously, none of us work at Netflix, so I don't think we can answer those questions, but I'm curious to know.

**Nick Nisi:** Yeah. And they did mention that they had considered using Falcor, so maybe I'm wondering if this is just like a different internal team that had a decision to make and decided to go with GraphQL... But that would say a little bit towards Falcor and maybe its future, but we don't know. In terms of learning from what they learned about GraphQL, it is an interesting read.

**Christopher Hiller:** I was gonna say, what are your predictions for 2019?

**Nick Nisi:** I think more and more things will be written in TypeScript. I'm also really excited to see what comes out of the Deno project, and see if that gets any traction. Deno, in case you don't remember, is a Node-like environment built on TypeScript, but without a lot of the faults that Node has, and it's created by the original creator of Node, Ryan Dahl.

**Kevin Ball:** \[00:56:08.04\] That is an interesting thing to look in. I think a lot of the trends that are going on will continue. The safest, most predictable way to predict the future is say "Well, what just happened in the past, that's probably gonna keep happening." I do think we may be hitting a place where Javascript has a bit of a reckoning when it comes to security, and thinking about security. There's been more and more stuff in that direction, with npm introducing their audit tools, there have been a lot of discussions, some of these high-profile hacks, and things like that... But I still feel like the ecosystem right now is very fast and free, and not thinking about that that much, and I think we may be starting to hit a turning point on that. So maybe in 2019 that'll be when we all start doing security audits of our code, and managing all of our dependencies for security.

**Nick Nisi:** I hope so. I think a big focus on that is and will be a good thing... And I think that npm is in the right place -- their minds are in the right place for enabling that.

**Kevin Ball:** That was one of the things I thought was pretty interesting about Deno - they were talking about one of the challenges with Node was that it's very hard to do security in Node, and they wanted to put that in place, and sort of sandboxing and thinking about what has permissions to do what, from the bottom up.

**Nick Nisi:** Yeah, so by default in Deno I think that an application doesn't have I/O access to the hard drive, and it may not have network access, so it can't really do anything unless you specifically give it, or call it with a --net flag, or an io flag, and enable that. But I'm sure there's ways for modules that you would use to specifically state "These are the flags we need enabled" and then being able to run it like that. And if those flags ever change, then that can be a big alert that you need to go look into what they're actually trying to do.

**Kevin Ball:** Other predictions? Hm... I think maybe Vue passes Angular and becomes -- they're already number two in hype to React, but I think in terms of usage Angular might actually still be a little bit ahead... But Vue is on a better growth curve, and it's also infinitely more awesome. So that's my prediction - in 2019 Vue passes Angular in use.

**Nick Nisi:** I look forward to actually using Vue in 2019. Another prediction that I have is I think that we'll see some common WebAssembly things coming out that we're using. So maybe we'll be using things that aren't written in Javascript, or a variant, like TypeScript, but something that's actually compiled with WebAssembly and then used in general use.

**Kevin Ball:** You are already, aren't you? Don't you use Source Maps?

**Nick Nisi:** Good point, yeah.

**Kevin Ball:** It's just invisible, man... It's under the covers.

**Christopher Hiller:** I can tell you what won't happen in 2019 - ES modules in Node. \[laughter\]

**Nick Nisi:** If they're still going the mjs route, then that's a good thing.

**Christopher Hiller:** As far as I understand, the LTS is set up so that the earliest that they could release a stable module implementation would be 2020... Just because they can't ship anything new until then for this sort of thing. But hey, at least there's esm, the package, which works great... So check that out.

I think maybe we'll see some good (or better) solutions for shipping ES modules in Node code simply from userland.

**Kevin Ball:** \[00:59:58.17\] Yeah, it's surprisingly hard right now. I was trying to -- I mostly do stuff just purely for the web, and so I'm very used to using Webpack to bundle my stuff... And I was building a little Node app to just dig up some data for myself, and I was trying to do it with Webpack, and it was such a nightmare. And I'm used to using ES modules and getting everything -- I ended up changing it and just using straight Babel to compile it, not Webpack. That seems to work, transpiling my -- I think it did transpile my ES modules into requireable things... I don't remember; or maybe I had to switch to using require instead of my expected ES modules. No, I think I was able to use ES modules then, and just Babel took care of it for me.

**Christopher Hiller:** If all you need are the modules, check out the esm package. Basically, you just require it, like --require, or you can bootstrap it in the first script you load and it just enables... It's kind of magic, and it just kind of works, and you can use all the ES modules. There's some flags and stuff if you prefer mjs, or you want to use require AND import, and all these things. It's really quite clever and cool.

Also, along those lines - I'm eager to see what npm does with their Tink project, in terms of a third-party module loader... I don't even know what you'd call Tink.

Likewise, Yarn's... Gosh, I forgot what it's called. Plug'n'play, or something like that. What is Yarn's thing called that's similar? Anyhow... Yeah, I'm eager to see what comes up there. I guess I'm not eager to see what breaks... But people will start coming along and say "Hey, I'm trying to use Tink, and then I get bugs, because my stuff doesn't work with Tink", and it's like "Oh, god...!" But yeah, they're doing some cool stuff there in terms of cutting down on the load times and the install times, and build times, and stuff like that, and I think that's pretty neat.

**Nick Nisi:** Yeah, that whole Node modules list's future does seem very interesting, and it'd be interesting to see where that goes in 2019, for sure.

**Kevin Ball:** You know, one thing we didn't talk about that happened in 2018 was Babel 7. They're sort of back away -- the backing away of implicitly include all the new features, and towards being much more explicit about what Javascript proposals that are not yet standardized do you want to pull in? I think that's actually a really interesting development.

It's kind of saying, "We got ourselves into trouble being too eager to pull all these new things in before they were stabilized. Let's actually change the tooling, so that we don't get that problem as much."

**Nick Nisi:** Yeah, for sure, and that is a step in the right direction for adopting features that have a very high likelihood of actually being part of the language, and being safety, so... Yeah, I definitely applaud them on that decision.

**Christopher Hiller:** I mean, that's cool, but at the same time I think that's gonna push more people into using TypeScript, or maybe other alternative transpilers that just do it all for you.

**Kevin Ball:** Yeah, there was a really interesting thing that Laurie Voss of npm said on the interview that Nick and I did with him, which shipped--

**Nick Nisi:** Last week.

**Kevin Ball:** \[01:03:49.07\] Well, last week from now, but two weeks ago from when you're gonna hear this, or when this episode ships... But he commented, he was like "One of the things that the rise of TypeScript is showing is that if you have to do a build step anyway, you might not choose Javascript." I think that's an interesting problem for Javascript to address.

The promise of Javascript, the original appeal of Javascript is you didn't have to deal with make, and compilers, and this and that and the other, and we've gotten back into a world where we're dealing with essentially make, except we call it Webpack, or we call it npm, or whatever... And we've got compilers, and we've got module bundlers, and we've got this, and we've got that, and if we're having all of that overhead anyway, is Javascript the language we're gonna use? Should we use TypeScript? Should we use Rust? Should we use some other language that gives us more power?

**Christopher Hiller:** And that makes me wonder, if you're not writing for the web... I mean, I feel like the adoption of tools like TypeScript and Babel have been primarily driven by those people deploying for the web. Will Node be this wasteland of Javascript, and the web is all written in TypeScript? \[laughter\] Is that what's gonna happen? I don't know... Because if you're writing for Node 10, or whatever, Async is there; they've got all the features already in V8, so the only thing that they don't have is the modules. But require is synchronous, and that works great for Node, so what does Node need there?

I think a lot of people who are writing tools and stuff in Node don't necessarily see TypeScript and Babel as the necessity that others do... Yet.

**Kevin Ball:** \[01:05:52.22\] \[laughs\] Yeah, that's interesting. I'd be curious to know how many -- I mean, npm is an interesting thing which started for Node, and now is also the de facto package manager for the web... But I wonder how many people who are writing explicitly for Node are using a build step, or is all the build step stuff web-focused?

As I said, when I went into Node, I wanted my ES modules, so the way that I found to do that involved a build script, and I was comfortable with that, because I was already doing it. But yeah, if you don't have to, why would you?

**Nick Nisi:** Yeah, I think that that's a much easier decision, now that Async/Await is in Node. Before that, that would have been the main feature that drove me to using a build step.

Well, those are some interesting predictions, and it's really great to see what's happened in 2018, and I'm really excited to see what's happened in 2019. One final prediction that I can pretty much guarantee is that the party will continue on in 2019, so we look forward to you all joining us then.
