**Chris Benson:** Welcome to another Fully Connected episode, where Daniel and I keep you fully connected with everything that's happening in the AI community. We'll take some time to discuss the latest AI news, and we'll dig into learning resources to help you level up on your machine learning game.

My name is Chris Benson, I am a chief AI strategist at Lockheed Martin, focusing on artificial intelligence, high-performance computing and AI ethics, and with me is my co-host, Daniel Whitenack, who's a data scientist working with various NGOs and non-profits. How's it going today, Daniel?

**Daniel Whitenack:** It's going great. Great to talk again after the July 4th holiday, and get back into all AI goodness.

**Chris Benson:** Lots of good family stuff, right?

**Daniel Whitenack:** Yup, lots of good family stuff, lots of -- you know, family stuff is always good, and great, and awkward, and all of those things at the same time... But it was great to see family and have a couple days off. What about you?

**Chris Benson:** Pretty much the same. As you know, I have all these dogs, so for us fireworks twice a year, on the July 4th holiday and the New Year's eve - we try to have a little bit of fun early in the day and then hunker down with terrified dogs, so...

**Daniel Whitenack:** Yeah, that's rough.

**Chris Benson:** It was our usual; it wasn't bad. And I'm excited -- as we are recording, I'm about to head to Boston to participate in the developer workshop for AlphaPilot, which is a venture that Lockheed Martin is partnering up with NVIDIA and MIT and the Drone Racing League, where we have teams from major universities all over, that are coming together and they're gonna be starting the process of creating various neural network models that are gonna drive some really serious drones around a race course at high speed... So I'm gonna get a chance to meet a whole bunch of smart people this week; I'm really looking forward to that process, it should be a lot of fun.

**Daniel Whitenack:** That sounds really exciting. Is there a place people can follow up with that? Do you know if there'll be videos or recordings of this stuff going on?

**Chris Benson:** As far as this one, this is kind of the developer workshop, and we'll see about what can come out. There's gonna be a whole series of AlphaPilot drone races going on through the end of the year, and I'll put a link in the show notes where people can connect if they're interested.

\[00:04:04.09\] Every time I think about this -- I'm sure the people doing it will roll their eyes, but you know in Star Wards episode one, when the young Anakin's flying around through the desert... That's the thing that always teases my brain. I think it's a little bit more down to earth than that, but I'm looking forward to having fun with my version of Star Wars this coming week.

**Daniel Whitenack:** Yeah, that sounds like a lot of fun, it sounds very exciting, and it's always cool to see AI -- a lot of times we're just focused on... Like, I'm staring at my monitor, at my computer, and doing "AI", but it's cool to see AI and machinery of some time interact, whether that be robots, or drones, or little cars, or whatever it is... So that's always fun, and kind of connects it to the real world, I think.

**Chris Benson:** It does. It's gonna be interesting to see this; it's AI that most definitely has a tangible, real-world impact, that people can enjoy, as a sport that's televised... So I'm looking forward to the start of that process this week.

You and I had not done a show where we're really focusing on current events in a while, and as we were talking, we decided to do that this time around, because there's been so much news out that we have kind of gone right by in the weeks... So we're hoping listeners will sit down and enjoy us as we kind of go through this process of talking about some of the more interesting things we've found in AI news lately.

**Daniel Whitenack:** There's been a ton going on. I feel like we've done the topical shows, which have been really good, and I'm glad that we've done that and gotten deep in some of the subjects... But there's just been so much accumulating in the news - I think it'd be great to cover some of those things. Now, for our listeners, there's been actually so much going on in the AI community that it's really hard to narrow down into a number of topics that we can discuss in this format only in 45 minutes, or whatever we have. We've done our best to highlight a few things, but if you find anything interesting that you're interested in or involved with in the AI community, please share that with us on our Slack channel. You can find that on Changelog.com/community, and/or on our LinkedIn page. We're happy to hear about what you're doing, and also maybe feature some of that on the show in the future. We've done that in the past, and hope to do it more in the future.

**Chris Benson:** Alright, well do you wanna kick us off with the first article that you had brought to our attention?

**Daniel Whitenack:** Yeah, so this is actually like a series of articles that I've seen recently... I try to think about some trends that I've been seeing in the AI community, and one of the things - this spring, moving into very recently, a trend that I've seen starting to develop is various AI techniques that are impacting studies of the ancient world. I'm thinking of things like studying ancient languages, or archaeology, or preservation of artifacts, or making discoveries about the ancient world... There's been various things that are happening where the AI community is kind of intersecting, and worlds are colliding with archaeology and linguistics and other things.

I saw a couple of these things recently, and one that seems to have gotten a lot of attention was a study - I read about this in the MIT Technology Review, but there's an article on the archive as well... The title of the article is "Machine learning has been used to automatically translate long lost languages", which seems pretty cool. Does it seem cool to you, Chris?

**Chris Benson:** It seems very cool to me. There's so much happening... We keep calling out how much is happening in NLP (natural language processing, for those not familiar) these days. It's just been huge over the last year.

**Daniel Whitenack:** \[00:08:03.03\] Yeah, and this in particular - it's like all of those recent discoveries, kind of mixed with Indiana Jones, a little bit... So it makes it even more awesome, I think. There was a study -- apparently, there are these ancient lost languages, and I guess there's a number of them, but archaeologists have discovered tablets and other things with these languages, that date back to various times; in fact, there's this language called Linear A apparently, which dates from 1,800 to 1,400 BC, and then there's another one called Linear B, which dates along the same time period... And Linear A hasn't been deciphered, but Linear B has been deciphered. It was deciphered only - I forget what the article said - not that long ago.

The article basically shows how these researchers, which are from MIT and Google (Google Brain), and what they did was they basically showed how they could utilize similar words or similarities between various languages and how they were historically derived, to kind of automatically decipher this Linear B language, which is actually a lost language... And they showed that they could basically do it in a way that didn't rely on parallel data. So it's like a real deciphering of this language, which is pretty cool.

**Chris Benson:** That sounds really neat. So they're not basically looking for common words, for lack of a better description... \[unintelligible 00:09:49.13\] almost common approach to how language would be formed at the time?

**Daniel Whitenack:** Yeah, so there's this idea of cognates - and I'm not a linguist, so I apologize to all linguistic people out there where I'm butchering things - which are words that look similar in multiple languages. You're probably familiar with this, definitely in English and other languages... But they utilize these similar-looking words, or these corresponding cognates, and then they do a sort of character-matching thing. They have a pretty cool diagram in their paper, where kind of lost language characters come in, and they use LSTMs and Attention and softmax, and kind of known characters come out. So they do this kind of translation between Linear B, which is this lost language, and Greek, also utilizing these corresponding cognates, and this cognate mapping sort of stuff.

So they don't need parallel data between Linear B and Greek. They're really treating it as a lost language, but they're utilizing these similar-looking things.

**Chris Benson:** That seems really cool. I love the fact that there are so many applications that we're able to apply neural network technology today to. It's impacting just about everything you can imagine. I can now -- going back to your Indiana Jones, I can imagine Indiana just sighing wistfully, putting down his whip and sitting down at this laptop to get the real work done.

**Daniel Whitenack:** Yeah. And there's this other article which I think very much fits within that framework. There's this other article which I actually also read on MIT Tech Review, which - I guess I get a lot of things from there, it seems like... But this has to do not with language, but with games.

\[00:11:50.16\] I guess there's medieval manuscripts that include these representation of games, whether that's games played on horseback, or table games, or dice games, or these other games... And up until now there wasn't really -- I guess there wasn't really a field of study around ancient games... So there's this researcher in the Netherlands who's proposing that there's this new field of study of ancient games, which -- I'm probably gonna mispronounce this, but archaeoludology.

Anyway, he has these pictures of these ancient games that are represented in manuscripts, and he's proposing and has shown some evidence that using machine learning and AI we could use things like computer vision, but also evolutionary algorithms and other things to actually learn about how these games evolved, about their rules, and even take the whole of games that have been developed through time and use their basic elements to generate new games.

So there's also this idea of using all of these basic elements of games through history, and then using AI to take those components and generate new games that we might wanna play; I guess that's the goal.

**Chris Benson:** Yeah, I flipped up the web page that you're referring to, and they have an image of an old game that looks like a plus sign sort of, with various squares on it, and images... And then they have what I assume is a modern version of the same game.

Let me ask you this, I'm kind of curious - there seems to be a little bit of commonality potentially between these two. In one case we're talking about looking at old games to try to derive how they came about and what their rules are, and yet we just talked about lost languages as well, and going back... Would you consider that to be a somewhat similar approach, as NLP being used in both areas?

**Daniel Whitenack:** I think the commonality is maybe even a little bit higher. I know one thing that you're gonna talk about later in our chat today is unsupervised learning, and I think the connection that's happening in a lot of different areas of AI is really the kind of transition to these semi-supervised methods, and methods that kind of start from some data, but not really labeled data or annotated data, and try to learn something.

In the lost language case, they're really starting with text or characters from these languages, and learning and deciphering these lost languages. In the games case, they're starting with these images, and maybe rules, and they're doing some sort of evolutionary thing to learn about how those evolved, or to generate new things... So I think we're definitely seeing a lot of that all over the AI community.

**Chris Benson:** So do you think that there's any particular work that is interesting to you at this point, that this might be applied to in other areas? I know you're deeply involved in doing work with languages in your day job... What other areas do you think this may be very applicable to, in terms of going and rediscovering things from the past, or taking something we're already doing and thinking about what's next?

**Daniel Whitenack:** Yeah, I was really excited when I saw the lost languages article. I think that I only have a certain perspective, so I'm sure there's other things that are happening... But you know, in the language space -- I mean, there's a ton of languages where we don't have good machine translation technology... But there's also a ton of languages where, you know, these languages exist and they represent a certain view of the world, and they're endangered, and UNESCO has said "We need to preserve these languages", and other organizations have said that... But a lot of these languages may not even have written scripts, or anything like that. They're just spoken languages. So the fact that we could maybe use some of these techniques to document languages, to learn about languages, or even sign languages using computer vision and other things - all of those are pretty exciting to me.

**Chris Benson:** That sounds pretty cool.

**Break:** \[00:16:22.21\]

**Chris Benson:** We were talking a few minutes ago about NLP techniques being applied, in particular to deriving the rules from ancient games and such, and I'm gonna take that as a rough segue into some of the things that are currently happening in games. There were two things in particular that I noticed; one has to do with DeepMind, and there's an article that Ars Technica has called "DeepMind AI is secretly lurking on the public Starcraft II 1v1 ladder."

Over the last few years, talking about DeepMind and Starcraft, and that link in terms of Starcraft being played by DeepMind a few years ago - now they're kind of doing a second version of it that's really interesting. In that article they're talking about the fact that they're having AlphaStar play the game in an anonymous fashion... And they've done a bunch of limitations on it to make it more like the way the human would play it.

Some of the things that they had noted in it was the fact that the last time around DeepMind was able to utilize the entire game all at the same time, so it had an unfair advantage over the humans, in that it could do anything and see everything at the same time... And one of the things that they're talking about now is limiting it on what it can do from an action standpoint, in terms of acting -- they're limiting it so that it essentially cannot outact humans, and they're also focusing really on the camera view for the game, instead of having that kind of holistic view of the game.

I thought that was really interesting - they implement these characters, and when you have a group of people in the game, you may be playing with obviously humans, but you also may be playing with non-humans now, and have no idea... What do you think of that, Daniel?

**Daniel Whitenack:** I think it's really interesting. I wonder, in the game, other that maybe the screen name or something, I wonder if there's any way -- like, if they're making it known that this is a bot, or anything. Do you know?

**Chris Benson:** What they said in the article was explicitly no. They were deliberately doing it anonymously... And I don't know - if you were to communicate and say "Are you a human or are you a bot?" if they're just gonna lie. If it's a bot, it says "Of course I'm human. What a stupid question", that kind of thing. I don't know how they're handling that.

**Daniel Whitenack:** \[00:19:54.19\] Yeah... I wonder what the perception -- I'd be interested to read forums and different things around the perception of this... Because I definitely think there could be that -- I have brother-in-laws who are really into gaming; I'm not quite as much, but I know there's that -- when you're playing, especially ranked games and that sort of thing... You know, if you're playing against someone that has an unfair advantage, like you were saying... I know that they've tried to limit that, but that could not come off so well. Especially if this player is moving up in the rankings or something like that, I don't know that that would be accepted very well.

**Chris Benson:** Yeah, it explicitly was noting the fact that they're really putting all those restrictions on, and they refer to the previous time around (a couple years back) as an unfair, unrestricted view of the game. And as they do that, I find that fascinating, first of all just because gaming is obviously a great way to do that, but there are so many things I could see moving beyond the gaming world, that are out there in terms of general use cases.

We are at this moment where we're gonna start interacting with different types of AI models as just a standard course. The first thing that comes to mind is medicine. We've reported in the past that you'll have bots as your primary care physician within the next few years, less than five years from now... So if they're able to insert these alpha star-driven bot players and they're indistinguishable from the regular player in terms of how you're interacting and what they're capable of doing - once again, it really brings us into that world of that collaboration between the human and AI that we see going forward, for some period to come at least.

**Daniel Whitenack:** Yeah... The one interesting thing about a lot of these video games that they're getting into - and I know this was a topic of discussion, I forget with which video game they were talking about this... But the fact that these video games - there's multiple really interesting problems to solve from the AI perspective. So if we think about a game that has character selection, that's one thing that needs to be solved like a human would normally do. There's also the gameplay elements, and then there's even other things, like if you really want this agent to behave like a human in a game, there's also the chat and interaction element. Especially in a teamplay game, if an agent is playing as a member of a team, there's communication between the team often as well... So this intersects with a lot of different areas, and I would actually be pretty surprised, given the state of conversational AI and other things, if really an AI covering all of those elements at the same time is really in our near-term future... But maybe it is; I might be too skeptical.

**Chris Benson:** Yup. I've gotta say, I would love to have somebody from DeepMind who is directly working with this AlphaStar implementation onto the show, and just talk through some of the details of this... But it feels like the implications of how this could be used -- this is a great test case, but it really feels like we're turning a corner at this point.

And I guess while we're mentioning turning a corner, there was another article that I ran across... The article is on Polygon.com, and it was entitled "An unbeatable poker bot offers glimpses of video game AI's future."

**Daniel Whitenack:** I saw a lot about this on Twitter. It seemed like people were talking about this a lot.

**Chris Benson:** What did you hear? Before I leap into my part, I'm curious what the social media site said...

**Daniel Whitenack:** \[00:23:55.27\] I don't remember exactly what they said, and I didn't look a ton into this, so you'll have to brief me... But I just remember seeing, as I scroll down on my Twitter feed, a bunch of gifs with this flow chart of how this thing worked, and poker imagery, and all of this stuff... So it seemed like something that really caught people's attention.

**Chris Benson:** Yeah, the thing that the article really raises is that they kind of took a different approach with this bot. So instead of the model having the long-term strategic game view, they limit it to thinking only two or three moves ahead. Once again, in a sense, it's almost coming down to some human limitations that we have... But the thing that really jumped out about this was they trained this bot to be able to bluff effectively.

**Daniel Whitenack:** What does that mean in an electronic sense? It has no face, right?

**Chris Benson:** Yeah, actually it's a good question. I'm not sure... What they were talking about in it though was that -- I think it's just based on the action; so even if you're not sitting around a table, seeing faces, whatever someone out there is saying they're holding, or doing whatever... I'm not a poker player, so I don't wanna humiliate myself by trying to jump into that, but basically it's indicating that by only looking two or three moves ahead, it changes how bluffing would occur... And there was something in the article saying that if it had taken a longer view of the game, the way it would bluff would be different and it would be distinguishable; it's different from human action because it's taking a different view than what humans would do, which are typically looking just a few moves ahead...

So this could bluff, it could accommodate what humans that are playing against it are doing, whether they're bluffing or not. I think that was what really made it stand out as a different type of model from some of these that we've seen before and reported on, in some cases. But yeah, so we're teaching AI to bluff its way through, to lie...

**Daniel Whitenack:** Interesting. Is this active in some type of online poker play site, or is it just an experiment at this point?

**Chris Benson:** I'm looking back through the article right now... I didn't see it being deployed, so I'm assuming it's in a very controlled environment. But who knows...? Sometimes I go out to Vegas for various conferences and such, and you never know; you may walk into a casino at some point and be playing against the bot, or at least that'd be one of the players up there, and that's the new gimmick.

**Daniel Whitenack:** Yeah... I'm also \[unintelligible 00:26:38.21\] I was reading through as you were talking, and they say that there was also an advantage they saw... So they trained the model on a 64-core server with less than 512 GB of RAM, and they're saying that the cloud servers to train up the program would cost only $150... So I think that that's a really interesting point, and consistent with some other things.

I've seen, of course, Fast.ai and Rachel Thomas and other people talking -- I think it was her I saw recently with a slide about how to do innovative AI things... A lot of compute isn't always necessary, and we shouldn't have that really as a precursor in our mind. And I really like that, both because there's a lot of people in the world that just don't have access to train a model on a TPU pod and spend $7,000 on compute costs to train one model, right?

**Chris Benson:** Yeah...

**Daniel Whitenack:** So I think that that's encouraging, that there's some cool stuff like this that's happening, with very little costs as far as compute goes... But also, of course, these huge, large-scale NLP models and other things happening these days - the compute cost is pretty ridiculous, and also the environmental impact of that is massive, which is kind of depressing...

**Chris Benson:** \[00:28:13.13\] Yeah, I saw that as well.

**Daniel Whitenack:** ...along with Bitcoin, we're just like destroying -- racking up all of these energy costs because of these models that we're training... Which I don't know that that's -- I forget if there's a study that shows the total percentage of our energy usage or something like that, but it's definitely something that's contributing a lot, and in some cases more than it really has to be, because we don't always have to throw a TPU pod or a V100 at a model. I think there's a lot of interesting things that we can do with limited architecture, which is something that I'm really interested in exploring, for sure.

**Chris Benson:** Totally. And I know we're sharing articles, so I'm going off-script slightly, but I've seen the same kind of thing about the amount of compute being just at crazy levels in terms of environmental damage relative to the benefit we're getting... I was talking to -- and I don't have any of my notes in front of me, but I was talking to a professor (I'm in the Atlanta area) at Georgia State, who had been working on taking complex models and finding the key important nodes in them. He has a technique where he goes through that and it can kind of compress a model way down; so you can take a really sophisticated model, and once it's trained, at least to inference much more cheaply than you would have been able to before. And I know he's doing that, and there's a lot of other similar initiatives to try to bring the cost of compute down. At some point it might even be worth doing a show on that, pooling some of these different techniques together or talking to some of the experts on this.

I do think that that is a giant area of research that the world at large is focusing on - being able to do effective inference at least, and maybe training, without such a catastrophic cost.

**Daniel Whitenack:** Yeah, you make a great point... There's that cost, but also things are moving towards us running AI more like in the browser and on edge devices, on mobile devices, and at least for the foreseeable future, those devices are limited hardware-wise... So I think that privacy-wise it makes sense to run those things in a more optimized way on edge devices in a lot of cases, but also we should be careful that we're not using all this compute as a crutch, in some ways.

I was just listening to our partner podcast, The Changelog - they had the Pragmatic Programmers on the show... There's this Pragmatic Programming book which is quite famous, and they were having an interesting discussion about hardware limitations and some things like that, that in some ways are good and in some ways are bad. I've talked to a lot of more experienced programmers that are really glad that they were forced to consider some of those things around memory constraints and other things like that, whereas now we kind of take it for granted; if we want more power, it's just there in the cloud, and maybe that's not always a great thing.

**Chris Benson:** No, we do tend to get very tunnel-visioned. I know that we have this bias - we're so convinced that this is world-changing stuff and amazing things can come of it and all, and we tend to forget that, boy, we're using a lot of electricity there in the background, so... We need to have a better, more holistic view of the world in that way.

**Break:** \[00:32:06.19\]

**Daniel Whitenack:** I wanted to follow up on one thing that we talked about in a recent episode, in a Fully Connected episode actually, which was deepfakes... And I think in that episode - and of course in general around this topic - there's pretty much a negative view of this technology... "GANs are bad, and they're destroying everything that's real in the world" sort of viewpoint... And in that show we talked about like "Oh, well what are some of the potentially beneficial things that this technology could do?" I remember talking through a couple things, we weren't totally sure on what those were... But I saw a recent article that took a really good perspective on this; I forget what the article was titled, but I remember seeing it mention good GANs... And for the listeners that want more info on GANs (generative adversarial networks), you can listen to our episode on that.

This article is basically saying that a research group is using GANs and the technology behind deepfakes to actually improve cancer detection - the detection of tumors and abnormalities in X-rays and CT scans and MRIs. So the basic idea is that you would take existing imagery of cancerous tissue - and you only have so much of that; there's only so much data that exists in a nice form... So your models are kind of limited to that data. And similar to what we were talking about at the beginning of the show, people are much more considering semi-supervised and unsupervised methods intersecting various things, in this case computer vision.

So what this group did was to use GANs to actually generate new cancerous tissue imagery, in the same sort of style to where it looked pretty much like what a different cancerous imagery would look like. So they're using this to create this new dataset of simulated data, that can help them in training models for what potentially cancerous things will look like, which I think is really cool.

**Chris Benson:** I do, too. And I'm glad you mentioned that, because I think going into that episode where we talked about deepfakes in particular, I know for me I had just finished watching the congressional hearing on deepfakes, and the danger from a national security and all that stuff, and I was definitely in a dark place mentally, in terms of going, "Whoa...!" and then we sat down and record. So I apologize to listeners if that was a very ominous show.

GANs in particular - you're talking about the medical application there, with cancer, and I think I actually remember running across that article. But in the past we've talked about lots of different use cases, including the various types of creativity that can arise from it; we certainly talked about what Christie's had auctioned...

**Daniel Whitenack:** You can get rich with new artwork.

**Chris Benson:** Absolutely. I don't know why we're not focusing on that...

**Daniel Whitenack:** Yeah, what are we doing, Chris...?

**Chris Benson:** What are we doing...? We could be making a ton of money with GAN-based artwork.

**Daniel Whitenack:** I guess maybe it's more meaningful to cure cancer, although I guess there's no cure for cancer, but to help treat cancer.

**Chris Benson:** Okay, I'm gonna give up my greedy fascination with AI-based artwork.

**Daniel Whitenack:** Which one is better? \[laughter\]

**Chris Benson:** But it's interesting - we're seeing these leaps ahead... I think the GANs are gonna be a big area of growth over the next few years, and while some deepfake use cases are certainly on the negative side, I think we'll also see deepfakes that are being used in pretty creative ways.

It was pointed out to me after that episode - I was talking to somebody at the Atlanta Deep Learning meetup, and they were pointing out that gaming, and there's lots of educational uses where you change up use cases to teach somebody dynamically, on the fly... There are tons of good potential uses as well, so it may just be that we've had our attention drawn to some of the early, nefarious things, or bad actors have grabbed onto a new technology and done some naughty things with it. I think we'll see some pretty good uses of the technology as well, aside from the kind of things that we covered in the previous show.

**Daniel Whitenack:** \[00:40:20.20\] Yeah, I wasn't really thinking as much about simulated data when we were having that discussion, but now that this -- I read through this article and thought through it... That's kind of at the forefront of my mind around this topic, because the idea of simulated data, similar to things we've even already talked about in this podcast, is really valuable as we move into this phase or really focusing on semi-supervised and unsupervised methods. And I think one of the things that you also found this week had to do with unsupervised learning, is that right?

**Chris Benson:** Yeah, let me flip over to that one real fast... They're also in MIT Technology Review; wow, we've done a lot of stuff...

**Daniel Whitenack:** Yeah, it's an MIT Technology Review week, so - a plug for the great work that they're doing, which is apparently giving us all the information that we're looking at. Maybe not all of the information, but certainly they've been on a roll.

**Chris Benson:** They have. We keep referring to them here, so good job to that group there.

**Daniel Whitenack:** One of their articles was called "The AI technique that could imbue machines with the ability to reason." In it they talk to Yann LeCun, who is Facebook's chief AI scientist. He has, for some time, been talking about the fact that the field at large is gonna find the future great evolutions of the field in unsupervised learning, as opposed to supervised learning. He mentions that if we are going to think about the way humans learn, and the fact that we start off being born with a very limited set of knowledge obviously coming out of the womb, and that babies -- very little of what a human learns in their process is through supervised learning... And he also pointed out that very little is done through reinforcement learning in the scheme of things, and that it's really self-supervised/unsupervised learning, meaning self-regulated/unsupervised learning is how the vast majority of human knowledge comes about... And I've gotta say, I agree with it.

I actually got interviewed myself a while back by Thomson Reuters and I was saying essentially the same thing - some of the really tough things that we have in this field, such as having the data that we need to train with, and accumulating it is much harder than the actual AI work itself that we're trying to do. Unsupervised learning presumably gives us a whole world to start exploring out there, without these giant obstacles to overcome before we ever get started.

**Daniel Whitenack:** Yeah, I'm actually working with an intern this summer and we're working on a sort of language-related graph-based method... But anyway, we're kind of halfway through the summer at this point...

**Chris Benson:** Roughly, yeah.

**Daniel Whitenack:** ...and we're still on the data issues of the problem. And I'm sure everyone that's actually worked on these problems can sympathize; those are really the bulk of the issues - the data side of things... Thinking about another conversation I had with someone just yesterday, where we were talking about how we basically just all lost any confidence in any data that we ever receive, or confidence in having good data... Because regardless of the process behind the data -- even if there's a good process in place, humans are generating data and they're biased in how they do it...

\[00:44:09.13\] So almost any dataset that we get, even if it's nicely formatted, I kind of just lost confidence in all of that... Which is kind of depressing, but it's also kind of encouraging that people are really saying at this point "Well, maybe we should focus on that less, and focus more on this sort of semi-supervised or unsupervised approach."

**Chris Benson:** Yeah... Before turning to that, I'll agree with -- I've been spending a ton of time focused on AI ethics lately at work, and I think it is a fair statement to say that an enormous amount of data out there is inherently biased in various ways... So we're certainly gonna need to address with tooling how we approach that. But we can talk about more of that later. I know we're gonna have that as a topic in the future.

**Daniel Whitenack:** Yeah. Biased, or even just bad. In some cases, datasets I've got -- and it looks good; there's a field labeled this, and it's a good name for the field... It's like "Language identifier" or something like that; I'm like "Oh, that's what this field means, and that's how everybody used it", but then I find out later on "Oh, that didn't mean the same thing that everybody--", and they input all sorts of crap into that field... So it's biased, it's bad data, everything's messy. So if everything's already messy, unsupervised methods and these other things - maybe that's where we need to put more focus.

**Chris Benson:** Yeah. And as LeCun points out - he said "Obviously, we're missing something. A baby can develop an understanding of an elephant after seeing two photos, while deep learning algorithms need to see thousands, if not millions. And a teen can learn to drive safely by practicing for 20 hours, and manage to avoid crashes without first experiencing one... While reinforcement learning algorithms must go through tens of millions of trials, including many egregious failures."

He has a great point there... We have these amazing biological models that have inspired us, but we're actually not very close to them currently in the vast majority of work we're doing, and maybe some of the work that comes out of that will lead to some pretty big breakthroughs. I'm rather hopeful there.

**Daniel Whitenack:** Yeah, it's good to be hopeful. Great point to end on. As we do in these Fully Connected episodes, we like to go through some of these news stuff, and updates, and all of that good stuff... But also, part of what we wanna do in these episodes is point you to some good learning resources that we run across. As you're trying to learn about these methods that we're talking about, I'm always looking for new things, new ways to learn things, because there's so much information and so many methods to learn... So we'll spend the last couple minutes here just going through some good learning resources that we've found recently.

Chris, have you found anything recently that's been interesting? ...either than you've gone through, or that you're interested in exploring a little bit more.

**Chris Benson:** Yeah. One that I saw was Google Cloud on their blog -- they had a blog that is "Deep learning containers", and then the subtitle says "Build your deep learning project quickly on Google Cloud" (obviously). What they're really focusing on there is if you're in their ecosystem - and obviously there's the pool that each of the major providers has - that they have a number of Docker containers, that give you complete environments. The purpose there is to be able to have a standardized environment.

I know the other providers are doing that as well, and I really wanted to call that out - standardization on the same thing that the software development is on Docker containers kind of becoming the de facto atom of work, if you will, about how people are getting things done.

**Daniel Whitenack:** Everything cloud-native.

**Chris Benson:** \[00:47:57.27\] Yeah, really. And you can pull them onto your laptop and have the same environment... And in this case, Google is just talking about the fact that they have a bunch of deep learning containers of various configurations, with different frameworks, and different configurations that they've found that their data scientists and deep learning engineers are needing on a regular basis.

The reason I wanted to talk about this today and draw it out as a learning resource is the fact that this is really how things are getting done. Most of the organizations I've been in have been container-based over the last 2-3 years, and they're really focused on "How do we wanna do it?", and they develop a standard... So if you're not doing that, if it's something that you need to ramp up on -- maybe you're stronger on the data science side, and containers are still feeling kind of newish to you, this is a good area to jump into. Read this article, and there's similar ones out there from AWS, and Microsoft... And understand how you can accelerate what you're doing by using standardized containers that give you a full environment.

**Daniel Whitenack:** And thinking about learning resources, what stuck in my mind was the conversation we had with Joel Grus, which I think is the previous episode to this episode, in how they'll be released...

**Chris Benson:** Yup.

**Daniel Whitenack:** He wrote this book, "Data science from scratch", which we've referenced actually quite a few times on the show, I believe... So that's a great learning resource; but along with that, I was kind of looking at other things online that were from scratch, so kind of this idea of learning things by coding things from scratch... And I ran across this NumPy ML repo on GitHub, which seems to have drawn quite a bit of attention, but I really hadn't seen until I ran across it just in the last couple days. There's a ton of stuff in there. It's basically a ton of things that are implemented from scratch with NumPy. If you're working in Python, there's this library called NumPy, and you can do matrixy things, and other sort of mathematical operations with it... And there's just a ton of stuff implemented there.

**Chris Benson:** Yeah, are you kidding me?!

**Daniel Whitenack:** Yeah, it's crazy.

**Chris Benson:** I pulled it up, I'm just "Whoa...!" Okay...

**Daniel Whitenack:** Yeah, it kind of took me off-guard, for sure. There's LDA topic modeling, Hidden Markov models, neural networks of all types, pre-processing methods, reinforcement learning, there's various utilities... Now, I'm sure some of this -- surely there's multiple people contributing to this; it looks like there's six contributors... I haven't gone through and looked at the quality of all these things, but there's definitely a lot of attention that his has received; there's like 5,000 stars... So it seems like a reasonable place to go to just check out some things from scratch.

I'm definitely gonna be checking this out, and probably trying to learn from it and pull some of this into workshops and other things that I give.

**Chris Benson:** Yeah, I am bookmarking it even as we speak right now.

**Daniel Whitenack:** Good stuff. I was convinced by Joel that doing things from scratch is maybe not where you always want to do things, but it's good exercise when trying to learn something... So I think this is a great resource.

The other things I wanted to mention were a couple of newish - one newish, one new - NLP-related things. As our listeners probably know by this point, I'm trying to learn more about NLP and work in that space a little bit... But there's a really great course that's free on advanced NLP with spaCy from one of the developers there. It looks like a really great course and a really nice interface that's all integrated with nice notebooks, and all of those things.

Also Fast.ai, which has just a ton of other great resources, have introduced an NLP course. A code-first introduction to NLP, which covers a lot of different things, but including things like transfer learning, issues of bias, text generation, attention, and the transformer... So all sorts of great stuff there. Check that out if you're interested in those topics as well.

**Chris Benson:** Great finds, Daniel.

**Daniel Whitenack:** Yeah, it's great that people are releasing such amazing quality material for free as well, and in really great interfaces. There's a lot you can do without having to pay for a college course, or pay for expensive books, and other things... There's a lot of good stuff out there.

**Chris Benson:** Yeah, I wanted to call out that we had an episode just a few episodes back where we talked about how to get into the field, and we had a long list of educational resources, courses, books, videos, a lot of which were free. There were some really top-tier things in there that cost nothing, other than your time and attention... So we can add a link to that in the show notes as well. But yeah, great finds here. There's never been a better time to jump into this field right now, because even if you're tied down, you're working full-time, you have a family, anytime you can get on your laptop to focus on these, you can log into a course that doesn't cost anything and keep working through it, and stuff... So it's a good time to do it.

**Daniel Whitenack:** Well, I don't know a better way to end than with that pitch, so... Thanks so much for walking through some recent news with me, Chris. It was great to talk again, as always, and I wish you luck with your drones.

**Chris Benson:** We're gonna go have some fun flying them. I'll see you next week.
