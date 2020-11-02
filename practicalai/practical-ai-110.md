**Daniel Whitenack:** Welcome to another episode of Practical AI. This is Daniel Whitenack; I am a data scientist with SIL International, and I'm joined as always by my co-host, Chris Benson, who is a principal emerging technology strategist at Lockheed Martin. How are you doing, Chris?

**Chris Benson:** I am doing very well, Daniel. I'm enjoying this beautiful fall weather. How's it going with you?

**Daniel Whitenack:** Going good, it's a busy week. There's a conference paper deadline tomorrow that I'm trying to meet... So last night - and I'm guessing tonight - will be a little bit restless for me.

**Chris Benson:** I bet. Has anyone out there actually ever submitted their conference paper before this final moment?

**Daniel Whitenack:** ...you mean like the actual day of--

**Chris Benson:** Yeah...

**Daniel Whitenack:** I mean, when you have to make three \[unintelligible 00:03:20.29\] tables where the tweaking of those - each one adds like a day, or something... \[laughter\]

**Chris Benson:** Yeah... I'm terrible about that. I'm coming down to the final hours...

**Daniel Whitenack:** Yeah... But it's a good time. I enjoy it. We're collaborating with some interesting people, so it's good to do that, and a good exercise to organize all your thoughts into that paper format. It's kind of good. What's going on in your world?

**Chris Benson:** I am actually trying to do as little AI as possible right now. The weather has been just too nice outside, and if I even look at my laptop, my wife gives me a scathing look, like "You idiot! What are you doing?"

**Daniel Whitenack:** \[00:04:03.29\] "Why are you not hiking, or...?"

**Chris Benson:** Exactly. Look outside the window. So we're trying to get some outdoor time in when we're not working right now.

**Daniel Whitenack:** Awesome, awesome. Chris, I don't know if you remember - actually, this is kind of a long story, but part of the reason why this podcast exists is because I met our editors at GopherCon... I believe it was in 2016. I do a little bit of Go programming, as our listeners probably know... And I met Adam Stacoviak and -- actually, I think it was just Adam there who is editor in chief at the Changelog... And that's actually what got us started talking about doing an AI podcast.

Well, at that same conference I met our guest today, and have been following their company for some time, and using some of their packages that they've open-sourced... They're just doing really cool stuff, so today we're joined by Hamish Ogilvy, who is founder at Sajari, talking to us all the way from Australia, I believe. How are you doing, Hamish?

**Hamish Ogilvy:** I'm good. I'm in San Francisco though...

**Daniel Whitenack:** Oh, really?! Did you move?

**Hamish Ogilvy:** I did. I did. I had to move across, yeah. \[unintelligible 00:05:16.15\]

**Chris Benson:** So from our perspective, it's earlier today rather than tomorrow where you are.

**Hamish Ogilvy:** That's right, yeah.

**Chris Benson:** There you go.

**Daniel Whitenack:** Awesome.

**Hamish Ogilvy:** It's not Tuesday, yeah.

**Daniel Whitenack:** So is the whole company now in San Francisco?

**Hamish Ogilvy:** No, most of the guys are in Sydney still. We have a few people in Vietnam, New York, Ohio, and then there's a few people here in the Bay Area as well.

**Daniel Whitenack:** So were you all doing remote workers before it was cool and necessary to do remote workers, now in this world?

**Hamish Ogilvy:** I'd like to say we were, but we weren't. We were actually out -- engineering we always have in one location, which was in Sydney, and I was probably the exception to the rule... But I came across to build our team up in the U.S. But we always have in-house, not remote engineers, because some of the stuff that we do is so complicated that we often fill whiteboards and argue for two hours at a time before we make a plan to do anything.

Covid's been really interesting, because it has kind of flipped everything, and everybody's working from home, although it's not too bad in Sydney at the moment. The guys still get into the office, but... Yeah, we're talking about reducing office space, and everyone's working remote, so it's definitely a different world.

**Daniel Whitenack:** Yeah, I would say there's a lot of things about working remote that can be really efficient, but trying to get a new effort underway and brainstorming and whiteboard time - it's pretty incredible when you're in-person, and I'm not sure that I've experienced anything of that nature in a remote setting.

**Chris Benson:** There's a business opportunity right there.

**Daniel Whitenack:** Yeah, I'm sure there's virtual --

**Chris Benson:** Remote team whiteboarding that's actually really amazingly wonderful, which - pardoning those that are already in that space, I haven't experienced it either.

**Daniel Whitenack:** I think I'd have to have some type of special surface to write on, because otherwise drawing with my mouse it'd just look like something a four-year-old would draw, or something...

**Chris Benson:** \[laughs\]

**Hamish Ogilvy:** Even if you get past that, you've still got time changes and stuff for us as well.

**Daniel Whitenack:** Oh yeah, sure. That's rough.

**Hamish Ogilvy:** It's brutal, whichever way you look at it, but... It's definitely not solved, that's for sure.

**Daniel Whitenack:** Well, as interesting as that topic is, I think you and I have talked a bit about what you're doing at Sajari, and some of your work there, but I actually don't know your personal background and how you got into this space, and eventually ended up founding Sajari... So maybe you could give us a little bit of that story.

**Hamish Ogilvy:** Yeah, I'll try to give you the short version, because it's probably a long story... But my background was actually originally in physics. I've got a Ph.D. in physics, and used to--

**Daniel Whitenack:** Score another one for the physicists...

**Chris Benson:** No kidding. You guys are just all over the place.

**Daniel Whitenack:** Yeah, we have a few on here occasionally...

**Chris Benson:** We're \[unintelligible 00:08:07.02\] physicists have gone to AI. What's going on with that?

**Hamish Ogilvy:** \[00:08:12.00\] I know, it's funny... I was one of the rare few when I first made that path into this space, and now I think the university has got full programs set up around transitioning people down that line. But yeah, I did a Ph.D. in physics, I used to design lasers...

**Chris Benson:** Oh, cool.

**Hamish Ogilvy:** Lasers are still used for surgery, and skin treatments, and other things, but... I shipped out into analytics, worked in analytics for probably 4-5 years, and then jumped out to start the business... So yeah, different route.

**Daniel Whitenack:** I'm interested in the back-story of Sajari a bit... But maybe before we get into that, maybe you could just say in a short blurb what Sajari is, what it's trying to do..

**Hamish Ogilvy:** We're basically trying to offer machine learning-based search as a service, but we want it to be really, really fast. I guess one of the trade-offs that people make is speed for accuracy, so we're trying to kind of mesh the two of those things together in a short way.

**Daniel Whitenack:** Cool. And how did that idea, how did the AI and search, but also the performance side of that - how did that creep up as something that you thought was a space that you wanted to live in?

**Hamish Ogilvy:** It's really interesting, but search interested me even back during my Ph.D, because I was doing something really obscure, that was very difficult to find literature on... You'd go search for things, and type in -- if you typed in two keywords, you'd get the phonebook. If you'd type in three, you'd get very, very few results. If you'd type in four words, you'd get nothing. And just this space, because it was very small, it always seemed really bizarre to me, because I'd written a bunch of papers, I had enormous volumes of context in text that I'd actually written, and yet I couldn't use that to actually search and find something on context.

That kind of sparked my brain (I guess you would say), because it always seemed like we should be able to search more conceptually... And then the university actually spun out some of the research that I was doing during my Ph.D. into a company, and one of the first things that they did was an IP literature search. Then the pattern emerged all over again, that the IP search company was basically -- they had a spreadsheet, and they said "You keep filling it up with queries until you keep getting the same results." Just looking at that was kind of crazy...

So fast-forward, I kind of ticked along in the background and chatted to some friends about it, and played around in the background, couldn't really get any of the technology out there to do what we wanted to do, and kind of saw that there was this convergence of -- machine learning, was starting to come up. Search technology was basically mostly built from around the '90s. It hadn't changed too much in approach. It's changed a lot more recently. But you could kind of see that there was this convergence of smart machine learning and information retrieval. So we jumped on that train, and been following it ever since. I think the fast side of things, when we were talking previously about making things really fast - I don't know if you guys saw, but there was a study a few years ago on Amazon; they intentionally added blocks of 100 milliseconds delay in their eCommerce queries and saw a drop of 1% of revenue for every 100 miliseconds delay they introduced. I think Google did the same thing and saw a 20% drop in clickthrough rates, and things like that.

So there's this huge correlation between speed and performance... But then a lot of the things that you do in AI can be quite hard to make performant... So there's just these interesting challenges where you're trying to balance--

**Daniel Whitenack:** That's definitely true. And it's like, you read about this cool model and you wanna make it work, but then you read about "Oh, how do you make it performant?" "Oh, you get this GPU server..."

**Hamish Ogilvy:** \[00:12:14.22\] You take the smarts out.

**Daniel Whitenack:** Yeah. Just brute-force it, which not all of us have the capability to do; maybe some fortunate people do.

**Hamish Ogilvy:** Yeah.

**Chris Benson:** So as we kind of get going here - and I know Daniel has known you for a while, but as I'm learning, as a novice here, can you differentiate a little bit more, or talk about the specific areas that you're addressing, versus a Google?

With obviously AI being a topic that's in search kind of broadly at this point, what areas are you guys really addressing, and how does that differentiate you from the others that are out there?

**Hamish Ogilvy:** interestingly, we jumped into site search around 2015, when we were first kicking things off. The reason that we did that was because Google was talking about getting out of site search... And I don't mean searching the public web, but I mean searching your internal website, for instance.

**Chris Benson:** Right.

**Hamish Ogilvy:** So they retracted back, \[unintelligible 00:13:07.21\] bright, yellow boxes that people used to put in their data centers... What a different world it is. But they also got rid of their product where they were doing that as a service, and basically said you could use ad-supported, or find another product, basically. So we saw an opportunity there, and it was a good test bed to starting, because all of the data was public already, so you didn't have security implications, and privacy... So it was kind of an easy area to get started. I've done so much in the background in marketing analytics, and site tagging, and things like that, that we saw that we could basically automate that entire workflow.

So that was the origins of the company... And now as we move forward, we're kind of going where the transactional value of search is highest, which is eCommerce, where you're just seeing that you make small changes and they mean millions of dollars... And you can measure it, which is very different to searching a website, where people don't care as much.

**Daniel Whitenack:** I'm kind of curious on this site search side of things... In terms of how big and how many results a site needs to have until this really starts becoming a problem? And I was wondering if that's at all related to -- like, you can put in a lot of design work in terms of making your site easy to navigate, but it seems like if you're able to search something and have it come up instantly and it was a good result, then it also maybe reduces the burden there.

Could you talk to that a little bit, in terms of the scale that we're talking about, and when this type of thing becomes a really big problem?

**Hamish Ogilvy:** Yeah, I think it's interesting, because you remember websites back in the day had these enormous navigational structures, and those 500 links on a page... And now you go to sites and there's basically nothing. So we've had this interesting move where everything's gone to mobile, and people have an expectation that they can just search and find what they want... So you find that you don't need that much content before it actually becomes useful.

The second aspect of this is that in user testing we've actually had customers come to us and they said in user testing the first thing people do if there's a search icon, they go to the search icon. They don't wanna be bothered going through five different nested navigation structures to find what they want if there's a search box there... But it has to work.

**Chris Benson:** I was just gonna say, I've noticed that especially -- I will go through other avenues myself, but I do notice, my wife - she goes to the search box for absolutely everything. I mean, everything. She almost doesn't use navigation other than that.

**Hamish Ogilvy:** \[00:15:59.11\] And user testing is showing that more and more and more. It's just becoming a base-level expectation, which is kind of interesting. But the other side to that is that you actually get people's intent. So we talk about it in terms of intent analytics. A cable TV company that's a customer, for instance, "cancel" is their biggest search. And when people search for "cancel", they may happen to know their account ID, so they can automatically do things like feed retention programs... You can't do these things as easily if people are navigating around, because you don't know specifically what their intention is. But if they type it in, you've got a pretty good idea that you know what it is.

The other thing that we see is that if you have searches that are by far and away bigger than anything else, then they probably should be navigation components. So there's a whole suite of -- it's a workflow where you can just continually improve user experience.

**Chris Benson:** I was gonna say, it almost informs the UX of the site itself, so you can evolve it with the results from the search. That's great.

**Hamish Ogilvy:** That's right, yeah.

**Daniel Whitenack:** It's really interesting. I wasn't thinking along that vein. It's almost like you're treating the search box -- because I've worked a bit in chat and other things, and you're treating that query almost as like a chatbot input. Not that the user is wanting a chat response, but you're trying to detect potentially \[unintelligible 00:17:25.02\] and track those over time. That's super-interesting.

**Hamish Ogilvy:** Yeah.

**Daniel Whitenack:** Because users' website data a lot of times is something that they hold near and dear, and don't want to give their dat out, or all of that sort of stuff... Especially usage type things. Has that been an interesting challenge, in terms of bringing AI to someone's side, or maybe their own infrastructure, versus them -- or maybe it's not; maybe they reach out to Sajari service, like as an API or something... How does that balance work?

**Hamish Ogilvy:** Yeah, so we do get a lot of companies that ask to host our stuff internally, and we don't do it at the moment. We've just chosen to offer a service for now... Which is tough, because we know that we could do some really interesting things, and there's been banks, and defense, and investment companies that have treasure troves of data and they wanna be able to actually start doing more interesting things with it, but there's no way they're gonna ship it out to third-party providers... So we haven't gone down that route yet, but we do keep it in mind for the future, for sure.

**Chris Benson:** As Daniel was asking you that and I was listening to you talking, it made me think -- I suddenly realized that we all probably assume that we know search really well over the years, but I know it's evolving very rapidly. It just occurred to me that I probably don't know search nearly as well as I think I do... So actually, if you would take just a moment and maybe give us a landscape of how search has evolved, what is search right now as we are at the end of 2020, and what is different from the way we might have thought of it a few years ago, when we were originally thinking we were learning it so well?

**Hamish Ogilvy:** Wow. Where to begin?

**Chris Benson:** I know, it's wide open. You can go anywhere you want on it.

**Hamish Ogilvy:** Yeah... It's really interesting, because when you see things like AI and machine learning and where they can apply in search, it's not just one area; it's many different areas that they can apply on. I think historically we saw search engines split away from databases because you wanted to be able to run these really long tail language-based queries that used to just absolutely crush databases... So search engines enabled you to basically write out indexes that were mutable, that you could have very high query concurrency on... But then that came with trade-offs, where you couldn't update the data as fast... And then we fast-forward through the years and machine learning became more and more involved in search...

\[00:20:06.14\] So I guess we sort of transitioned to learn to rank models, where people could re-rank a set of results with machine learning, and that started becoming popular. We've got NLP entity extraction, and things like that... So if you go to an eCommerce site and you search for "size 14 black shoes", then you should get size 14, black shoes, but most often you don't... Which is really interesting. So there's this sort of language extraction aspect to it.

And then you've got things like reinforcement learning, which we're big fans of. Say you don't wanna build a model, and one of the challenges that we have is that we have hundreds of customers, and so we can't go and build a custom model for somebody paying with a credit card; it's not economical. So how do you improve performance for them without the added overhead? Reinforcement learning is one of the ways that we see, that work really well. So there's a lot... It's a hard question to answer, really. It's so broad.

**Daniel Whitenack:** Yeah. It's interesting to me -- of course, we've talked about reinforcement learning a few times on the podcast, and I think particularly in relation to robotics, or maybe autonomous vehicles, and that sort of thing... So I think maybe people might not be as familiar with the idea of reinforcement learning in search, or also marketing analytics type things, which I've also heard.

You said you're big fans of reinforcement learning... I know there's still some people out there that maybe think that it's not quite there in terms of being practical yet, or something like that... How has your experience been over the years? When did you start thinking that this is really practical for our use cases, and has the tooling around it to make it useful, I guess?

**Chris Benson:** And we may wanna define it along the way, by the way, just for those who have joined who aren't familiar with it.

**Hamish Ogilvy:** Yeah, and that's the interesting thing, defining it. You can take reinforcement learning from an AI standpoint, or you can take reinforcement from a statistics standpoint... You know, people would probably be familiar with things like Optimizely, that use bandit algorithms for optimization. That's one of our favorite techniques, is actually a Bayesian, bandit-style reinforcement learning. And the reason for that is that it just works, with very little overhead, as opposed to building these big, complex machine learning models where anything can happen. And yes, you can probably do a lot better in a very fixed use case, but if you have broad use cases and lots of different variables changing, it's a different story.

**Daniel Whitenack:** Could you describe from your perspective where reinforcement learning is specifically applicable to search? What sort of tasks are -- because I think most people, when they think of search, they think of "Oh, I put in a query and then I get a result." But of course, you're doing much more sophisticated analytics, and intent mapping, and routing... So where does it fit into that puzzle, from your perspective, in terms of tasks?

**Hamish Ogilvy:** Yes, I can give you an example, say with Covid-19 this year. If people went pre-Covid and searched for "face masks", you can imagine women sitting at home in front of the TV with their face masks on, and then Covid hits and everybody's looking for N95 respirators. How do you evolve when that change started to happen? How do you know when someone's searching for face masks - do they want the face masks of the past, or do they want an N95 respirator? That's an example where --

**Daniel Whitenack:** It took me a second to get there... I was like, I don't think about that first type of face masks that you were talking about very often...

**Chris Benson:** It took me a moment, too... \[laughter\]

**Daniel Whitenack:** \[00:24:11.28\] I thought you were talking about the goop you put on one's face...

**Chris Benson:** The green face, right? With the towel...

**Daniel Whitenack:** Yeah, yeah. \[laughter\]

**Hamish Ogilvy:** Mud mask, or... Yeah. Sorry, I should have--

**Daniel Whitenack:** No, no... I had my own search difficulty in my mind.

**Hamish Ogilvy:** Context, right?

**Chris Benson:** Daniel, we've really shown we're not thinking expansively enough. Shame on us.

**Hamish Ogilvy:** It's a common problem. I guess it alludes to the same problem that you have in search - context. What is the context, in text in particular, is highly ambiguous. You can use the situation to help you, you can use past queries... So you can see if there's a pattern in what people are doing. But overall, it's ambiguous, and this is where keywords search kind of falls down.

Another example that we saw quite a lot of is "as seen on TV". So if you type "TV", you could possibly match on things that say "as seen on TV", because they have TV in the text, but obviously, there'd be poor results... But how do you know that? A word is a word...

So one of the interesting things is that AI and word embeddings and other things have been able to transition that out into vectors. So you can start to actually see the context that something's used in to understand what the meaning is. So when you search for TV, you get TVs, you don't get "as seen on TV". So there's a whole host of interesting ways to try to embed that context into the way that the indexes work.

Going back to reinforcement learning - the reinforcement learning is really interesting, because it's trying to look for the maximum reward. In the case that we mentioned before, the N95 had a high purchase rate, and so that's rewarding the algorithm to move more towards that and optimize the results. So the medical mask, or the cosmetic-style masks... And that happens in a relatively short timeframe.

Then you have tradeoffs in timeframe. If you put a six-month timeframe, it wouldn't have changed. If you put a two-week timeframe on, it would change, but you've got less data, so you've got less certainty. So there's a whole host of different things that play into how that would work... But yeah, it works really well.

**Chris Benson:** I feel like I'm almost asking it as a tangent, but I was just curious, as we're talking about reinforcement learning - are there other architectures that you're finding very common, or is reinforcement learning really the dominant architecture given the use case that you're addressing?

**Hamish Ogilvy:** It's really interesting... I think learn to rank style stuff is probably more popular, I feel like... But reinforcement learning -- I know a lot of people have picked up more reinforcement learning, particularly recently. Microsoft were big pioneers of that. There's a whole host of research articles on Microsoft. I think they have a whole unit dedicated to reinforcement learning.

But for us, that's always been one of our main things, and it's probably getting more and more popular because it's easier than learn to rank models and such, for sure.

**Daniel Whitenack:** One of the things that even in my workshops that I teach, this topic comes up a lot - searching around for tooling for reinforcement learning, and all of that... There's some things that have come onto the scene, they seem like they're rapidly advancing... Have you found yourself having to roll your own internal infrastructure around reinforcement learning?

**Hamish Ogilvy:** We wrote our own, for performance benefits... And it's probably quite different, but we actually bake some of that information into the indexes themselves.

**Chris Benson:** That makes sense.

**Hamish Ogilvy:** \[00:27:59.01\] Yeah, yeah... It does, except the implementation is very difficult, because you actually have to be able to live edit the reverse indexes, which historically in searches that is a no-no, basically. Search indexes have immutable, particularly the scoring... And I think it was a few years ago LinkedIn - they released a few different libraries around actually being able to update the scores for intersections in reverse indexes in place... And part of the logic behind that was they don't have to rebuild the entire index every time they do it.

So it's not a common thing there... It's one of those things that if you're used to immutable index structures, you would probably not even try to do this, because it would seem so foreign... But because we build our own index from the ground up, we were thinking about this from day one, basically. So yeah, it probably it makes it a little bit different, I guess.

**Daniel Whitenack:** Yeah. And for those out there that may be a little bit more new to search, \[unintelligible 00:28:56.21\] immutable indexes and reverse indexes... Could you just explain briefly how that fits into search, and how it would interact with a model, or something like that?

**Hamish Ogilvy:** Yeah, so a reverse index is basically like when you read the back of a book, and you have a list of terms that link to the pages that those terms actually exist on... And it's very similar, but the links are to actual document IDs. So for any given term, you can tell which documents that term appeared in, where it appeared in the document, and we also include things like the context of how it occurred in the document, as well. That's what reverse indexes do. And what was the second part then? I forgot?

**Daniel Whitenack:** Yeah, so just like why in general these would be immutable, and why maybe it's necessary that they not be in the case of applying these more advanced techniques.

**Hamish Ogilvy:** Yeah, so the beautiful thing about immutability is that you can have as many readers as you want, basically, because you know the data is not gonna change. So as soon as you have mutable indexes, you have to manage concurrent reads and writes, which has a whole heap of locking and other implications that can affect performance in other things.

Originally, when search indexes were first done, they were immutable because of speed and performance reasons. I remember back a while ago disk space was very expensive, CPUs were expensive... And so if you could compress the information down to as small as you could possibly get that, it had huge advantages. So historically, search indexes are very well-compressed, and they can do that because they know exactly what's in the dataset before they write it out into an index.

I'll give you an example, delta encoding - if you know the maximum or minimum number in a l ist of numbers, then you can massively cut down the size of the storage for those numbers because you know that you can basically add an offset to recreate the number. There's always compression techniques that allow them to get the indexes very small. When you're working with mutable indexes, you can't do that the same way, because you may change a number, and then that would change the boundaries for how things are encoded. You just have a different set of trade-offs that you have to deal with. From an algorithmic standpoint, it works okay today with things like Elastic and Solr, because people have built in these differential -- when you delete something or when you edit something, they don't actually make that deletion or edit straight away; they buffer them and then re-merge them out to disk...

\[00:31:48.16\] So you kind of buffer up the changes and then you pay for them in one big hit, as they're remerged out to disk. So just different trade-offs there, but from an algorithmic standpoint, that's why a learn to rank is typically a second for however many passes, where you get the initial set of results and then you basically re-rank them with a model externally; so the model you can update more frequently, and it's totally decoupled from the way that the indexes work.

So we kind of went a different route, where we said we wanted to have the indexes more involved in that initial ranking process; we wanted to better initial ranking process. So it's just a different way of solving the problem.

**Break:** \[00:32:35.04\]

**Chris Benson:** So I guess to get very practical, given that we are Practical AI, I wanted to ask - if I am in charge of an organization's website and we are trying to figure out what to do, and I decide "Hey, I wanna put your toolset into my website to be able to apply search", what does that workflow look like to me as that practitioner who has to actually get it up and running? What am I experiencing? What do I need to know? What kind of prerequisites are there that I need to be thinking about? Can you describe that whole process of how you go implement it?

**Hamish Ogilvy:** Yeah, so it's basically two ways that we implement. The easiest way is just to buy a crawl; you point it at a website, tell it what to touch, what not to touch, and then we go and crawl that information that's public. You can also link it into intranets, and things like that. But basically, it's a crawl process. The positive side of that is that it's very easy, very low overhead, no code basically to implement it... The downside is that crawling is a kind of a black art. It's amazingly hard to keep everything up to date and in sequence. You have to know when somebody changed a particular piece of content, and then to go and recrawl it, for instance. So that's difficult.

In applications like e-commerce, you find that people wanna have things more tightly coupled to their data. So in those cases, you have integrations. We have integrations for things like Shopify, for instance. You can use an API, so you can custom-load your data in, which gives you a lot more control. So if some of the e-commerce customers we have do over 500 product updates a second, and they're updating things like inventory in real-time, the performance of things in real-time, and other such things.

Even the other day I went to buy a jacket online, and it wouldn't go through. It kept telling me I could buy it, but it wouldn't go through. And then I just basically gave up and then I went back in 20 minutes later or a half hour later and the jacket was actually sold out.

So you could tell that the search and the frontend was not aware that it was sold out, so it was kind of letting me, but then when it went through to the purchase, it wasn't. So the need for real-time data integration is much more important with things like e-commerce.

**Chris Benson:** \[00:35:59.28\] So given those integrations and given the fact that -- you know that's a whole bunch of different dependencies that you have to deal with, those integrations... Would you almost think of an implementation sort of as a system of systems, based on whatever that user is needing... And as you address that, obviously you've talked about the speed and all the things that you've done to make your service fantastic - how do you keep these integrations that are depending on APIs beyond your control from impacting, if something does go down, them thinking that it is your service, as opposed to another? How do you manage that process?

**Hamish Ogilvy:** It's a really good question, and it's one that we think about all the time. At the moment, we're kind of taking this approach of middleware, where we have a translation layer that does the connection with the external services, but then once it's inside, it's all kind of the same for us... So it's much easier for us to have a consistent view and see when something connecting to external is broken... But there are interesting implications as well, because say things like we're trying to generate a decent ranking algorithm for you out of the box... If we say that you have something like a size or a color, then we're trying to add in the NLP automatically, to be able to pick that out, so that if somebody does come along and search for size 14, black shoes, it will automatically map exactly to your categories, so you'll get that exact result. So there's interesting implications here; if you come along and then you get rid of sizes tomorrow - although I don't see why you would do that - then what's the implication there?

So there's not only the connecting the data, but there's also how it's inferred in search, is another problem there. One of the things that we're trying to do is actually run algorithms in the background, and we do quite a bit of back-testing as well. So if you come up with a new algorithm, you can actually look behind the scenes and we can backtest to see would that have given you a greater return on historical data. What we're looking to do moving forward is actually be making changes in the background, back-testing them for people automatically, and then reporting back to them to say "Hey, we've found a new algorithm that is actually better for you. If you press this button, you can put it into an A/B and then move it into live." Eventually, I would like to get to a point where we're actually surfacing and allowing people externally to come in and write better algorithms within our system. So it's quite complicated."

**Daniel Whitenack:** Yeah, coming from a company that does manage all of these different models and config for all sorts of different clients, do you have any kind of practical advice and wisdom in terms of model management and managing -- or maybe even automating some of the training and updating and models while not also losing the ability to debug when things go wrong? Any advice there?

**Hamish Ogilvy:** Yeah, I would say version everything, and make it part of your entire workflow, so that that flows all the way through to the analytics. We record analytics for every single key press. We know exactly what that flowed through, where it hit, how long it took, everything. So versioning in that is critically important to making things work. That's probably the thing that stands out the most.

**Daniel Whitenack:** Do you have to do something very meta and search your own search analytics or something, to be able to find things?

**Hamish Ogilvy:** Basically, yeah.

**Daniel Whitenack:** \[laughs\] That's funny.

**Chris Benson:** \[00:39:53.20\] I'm curious, as you look forward... You know, we're kind of going through this time over the last couple of years where voice has become a big mode of making queries, instead of everything being through a keyboard, or touch... And as we look forward and there are other modes of interaction that are on the horizon, how does that change how you think about the process of search on the frontend, and maybe given the fact that not all modes of interaction yield the same information at the same place, does that change how you have to architect your solution to accommodate those? Any thoughts on where you're going with that?

**Hamish Ogilvy:** Definitely. And it raises a really important point, because when people use voice queries, they have a lot more context. Google went through this period where the query length, the average query length got shorter and shorter and shorter, and now we're in a period where it's getting longer and longer and longer. And that is definitely due to technology. Being able to take longer queries, understand the context... At the start of this, when we were talking about academic search, three or four keywords and you get no results. That doesn't happen today, and that's because there's a better understanding of how to map that text through into the indexes. So I think as voice gets more and more, you're gonna see these hybrid models.

Keywords aren't going away. If you search for very specific things, then you wanna get very specific things, and if people don't see those specific things, they're less likely to click on the result... So it kind of feeds back into itself. But then you have the hybrid of turning things into vectors, and understanding them with models... So you'll probably see that different queries - some will optimize to the old style and some will optimize more to the newer style, if that makes sense. I don't know if I explained that well.

**Chris Benson:** No, you did. That was good.

**Daniel Whitenack:** So you emphasized e-commerce a couple of times as you were discussing use cases, and I know that this year in particular has just been insane in terms of the growth of e-commerce, and I'm wondering if that's shifted some of the priorities within Sajari, in terms of having a lot having a lot more in-bound requests for that type of search? Whatever you've seen in terms of the impact that that whole segment, the explosion of that segment of the industry has -- how has that affected your growth and the company in general?

**Hamish Ogilvy:** Yeah, it's really interesting... I wish we went to e-commerce earlier than we did, in a way; we always planned to, and it's a natural area for us, because we have so much focus on improving the transaction rate. We always talk about the flywheel of improvement, how do you get continuous improvement in search, that drives more revenue etc. And I wish we switched into e-commerce sooner, but this year's been incredible. I think it's about a 350% growth in e-commerce queries from e-commerce customers. They're just growing at such a rapid rate, it's crazy.

\[00:43:06.19\] There's definitely demand there, but then there's also fatigue in e-commerce, because some of them have just been trying to keep the machine working... I don't know if you guys have wouldn't have seen this, but in Australia the Kmart brand had a virtual queue; because they got so busy, it would actually say "You're fifth in the queue. You have to wait three minutes before you can shop online", which is -- it seems kind of crazy for today, but you have to remember that a lot of these companies are still operating on some legacy systems that don't scale. So they've had to deal with those, they've had to deal with increase in inventory, and all sorts of other problems. So it's top of mind, but they're also busy, if you know what I mean.

**Chris Benson:** I do. I guess as you're looking forward, as we're kind of winding up here, and you're kind of thinking about the future of your company, how you're implementing these algorithms, and you're busy tracking the future of AI on one side, and more specifically the future of search on the other, whether it includes AI or the other non-AI components of it - that's a lot to track together. What are you expecting and hoping to see and how do you think that will impact your own services, how you develop this over the next few years? What's your whole future outlook at this point?

**Hamish Ogilvy:** Yeah, I think it's a really good question. In terms of keeping up with AI, it's almost impossible. You guys do this regularly, and you probably still struggle...

**Daniel Whitenack:** Part of the reason why we do this podcast... \[laughter\]

**Hamish Ogilvy:** Yeah, it's moving so fast... And for us, being able to be pluggable is really important, because I think that the AI aspect has to be able to evolve on its own. And from the search side, we're trying to get better. We have the mutable indexes, like I've mentioned before, and we're working on being able to distribute them globally, so that wherever you're searching, it's right by where you are. But that means you also need to distribute models and other things... So there's a whole host of challenges from a dev ops standpoint, systems engineering that you need to deal with as well. So I think pluggability is one of the big things. Don't try to keep up or stay ahead, because you're gonna struggle.

**Daniel Whitenack:** Awesome. Well, thank you so much for enlightening us on so many things. It's great to connect again. I know I've been wanting to make this conversation happen for quite some time, so I'm really happy to connect, and I hope that someday we're able to see each other again in-person. Thanks for chatting with us virtually, it was a real pleasure, and I'm looking forward to seeing what Sajari does in the future.

**Hamish Ogilvy:** Thanks, Dan, and thanks, Chris. Great to chat.

**Chris Benson:** Thank you, great.
