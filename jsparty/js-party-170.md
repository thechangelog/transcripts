**Jerod Santo:** It's JS Party time... It's JS Party time... Oh, hi! I didn't see you there. I was just attending the pep rally for JS Party... And now I'm jacked! I'm Jerod, your internet friend, and I'm joined by my friend, Nick Nisi. What's up, Nick?

**Nick Nisi:** Ahoy-hoy. Hi, jacked!

**Jerod Santo:** Are you a dad?

**Nick Nisi:** \[laughs\] Yes.

**Jerod Santo:** That's usually -- "Hi, jacked. I'm dad."

**Nick Nisi:** \[laughs\]

**Jerod Santo:** You didn't quite finish the line, but I appreciate the effort anyways.

**Nick Nisi:** Team effort.

**Jerod Santo:** And it's just you and me here today, but I brought you something; I hope you appreciate it... A little gift from me to you. \[song extract 00:02:57.04\] I can't play any more of it, otherwise we'll get demonetized again, but that was a good 12 seconds...

**Nick Nisi:** I was trying to think of what the kids said at the end of it... I had not heard that song in a long time.

**Jerod Santo:** All I remember is Will Smith saying "Daddy loves you, daddy loves you..."

**Nick Nisi:** \[laughs\]

**Jerod Santo:** I don't remember the kid's line... I think it was actually his son, wasn't it?

**Nick Nisi:** I think so.

**Jerod Santo:** Yeah. Making him famous at a very young age. Of course, the Dr. Evil version with Mini-Me is even better, in which he says "Mini-Me, you complete me."

**Nick Nisi:** That's a set of movies that I haven't seen in a long time. I've been thinking about, but I'm just --

**Jerod Santo:** Austin Powers?

**Nick Nisi:** Yeah. I just worry that they won't hold up.

**Jerod Santo:** I have a feeling they do, because I still quote them on a regular basis... So maybe parts won't hold up, but there's gotta be good stuff in there.

**Nick Nisi:** Yeah...

**Jerod Santo:** I mean, "I eat a baby", you know, Goldmember... "I love gooooold..." There's lots of stupid things that are funny still, to me at least... But I'm perpetually 12 years old, I think. Well, I have a question for you, Nick... Do you like April Fool's Day?

**Nick Nisi:** No, I don't. \[laughter\]

**Jerod Santo:** I don't either... But here we are. It's April Fool's Day. Probably the worst day on the internet, isn't it?

**Nick Nisi:** \[00:04:10.01\] For sure.

**Jerod Santo:** So bad that none of our friends showed up for JS Party. They're just like "We're just gonna peace out and not be on the show today, because we wanna avoid the internet." But here we are, it's April Fool's, so none of the headlines can be believed... So based on that, I came up with this cool -- you decide if it's cool... I came up with this game called Headlies. Now, it's not head lice; that would be gross. It's Headlies, like fake news. And I thought I would pitch it to you today, live on the air...

**Nick Nisi:** Okay...

**Jerod Santo:** But first, let's talk about some of the big news that came out. This is real news; that launch is gonna be kind of a big deal, it seems like... I just wanna get your take on it... Which is the Deno.land folks now have their own company. So Ryan Dahl and Bert Belder wrote at the beginning of this week, announcing the Deno company. And they're taking it official... They've raised money, 4.9 million dollars of seed capital from folks from Four River Ventures, Guillermo Rauch from Rauch Capital (we know him from Vercel, and Next, and those things... Lee Jacobs from Long Journey Ventures, the Mozilla Corporation, Shasta Ventures, and a long-time collaborator, Ben Noordhuis, all invested up to almost five million dollars into this deal... And now Deno is like this official business now.

**Nick Nisi:** Yeah, so... Can you maybe explain it to me? ...like, what they're actually doing...

**Jerod Santo:** Like you're five? \[laughs\] It's a limited liability corp-- no, what are they doing... So I don't know exactly what they're going to do; I will tell you that they're not going to do an open core business model, which would be where they provide certain features of Deno and some sort of like an open source core, and then build on top of that, around it, more advanced, or pro, or premium features of deno, and make that what you pay for. They're not doing that. In fact, they software is MIT-licensed, and will retain the MIT license. In fact, Ryan says in their post "For Deno to grow and be maximally useful, it must remain permissively free. We don't believe the open core business model is right for a programming platform like Deno. We do not wanna find ourselves in the unfortunate position where we have to decide if certain features are for paid customers only." That's really the rub with these open cores - deciding what goes where... And there's a conflict of interest at different times, and it can be difficult to navigate that successfully.

They say "If you watch our conference talks, you will find we've been hinting at commercial applications of this infrastructure for years. We are bullish about the technology stack we've built, and intend to pursue those commercial applications ourselves. Our business will build on the open source project, not attempt to monetize it directly."

So that's what they're saying... Now, TBD what exactly all that means. There is on the new Deno.com - so they probably shelled out some of that five million on getting Deno.com, because it's always been deno.land, and now they have deno.com, because it's official. They have a new Deploy section, which seems a hint at their first potentially commercial offering... I just don't know exactly what that is. Did you check out that deploy thing?

**Nick Nisi:** Yeah. That does seem to be like the first product from the Deno company, I guess you could put it. That's what I was trying to understand... In terms of what I already know, they call it a globally-distributed JavaScript VM. So it's a V8 runtime where you can run your JavaScript, your TypeScript, your Web Assembly code... At the edge, worldwide, is what they say.

What I'm trying to understand - is this their own custom way to run Deno as like a Lambda function type thing? Is that comparable, or...?

**Jerod Santo:** \[00:08:06.18\] It seems like that's what it is... Yeah, probably competing with Cloudflare workers, and Netlify Functions (or whatever Netlify's functions thing is called). But can't all these other providers just run Deno as well and do the same thing? It seems like maybe they'll have some secret sauce that makes it fast, or cheap, or whatever way they can compete and make it better than what these other cloud(ish) things are providing. That's why it's to-be-determined on whether or not there's a real value proposition there, because anybody can spin up the Deno runtime and run it in some sort of a VM or container environment and provide you access to that, right?

**Nick Nisi:** I think, yeah. And what they're touting in the blog post and on the Deno Deploy landing page - the environment that you would deploy to is very similar to the Deno CLI. So it makes it really seamless for development, because you run it basically the same way, and pass it in for the cloud version... And then also, I think in the blog post they were touting the ability -- one of the key features of Deno is its different take on the security model, the JavaScript runtime, where specifically when you run Deno just by itself, you don't have access to the network, you don't have access to the file system, you don't have access to any of this... And what I got from this is that if you don't allow those flags in what you're actually deploying, then that portion of the Deno runtime just doesn't ship. There's absolutely no way to do any kind of file system stuff if it's not --

**Jerod Santo:** That's cool...

**Nick Nisi:** Yeah.

**Jerod Santo:** It's kind of annoying -- have you done any Deno? I've just toyed with it lately, just building a couple of things that are kind of like -- I would normally write these just in Ruby, or in Node, or whatever... I'm like "Well, I'll just try Deno out", just for utilities and scripts. And I've actually found that those \[unintelligible 00:09:56.03\] are kind of annoying... And I get it. I think it's probably worth the trade-off at the end of the day. But allowing file system access... --allow-env is one, just to get at an environment variable... So it is definitely a trade-off, and I find it to be kind of annoying for writing scripts, but maybe that's just not the main use case for Deno's scripting.

**Nick Nisi:** Yeah. So that kind of flips it, because if you write a script and give it to me to run, you have to tell me exactly how to run it, too... And you as a script writer, do you have to then do the checks? Like, do I have access to the environment variable? Nope. Throw up this error message, or...

**Jerod Santo:** Yeah. Or does the thing just blow up? Because if you try to run it without, it will just error out -- the runtime just errors out; it says "I can't run this script, because I need access to this and I don't have it." So it tells you, "I've run it again with --allow-env", so that's nice... But I don't know. I'm not sure. I think ultimately that trade-off was one that they were very serious about making, so they're kind of putting a stake in the ground and saying "Well, it's worth it." And if that's the case, if you can ship these miniaturized container runtimes, that don't even have the dangerous stuff in them in those cases... Like, it can't actually access the file system, because it doesn't even have those bits anywhere in the binary, and it's just not gonna work... I think that's pretty cool for security.

**Nick Nisi:** Yeah. Deno is -- like, I haven't really taken too much time to play with it, although it's definitely on my list of things to look into... And going back to that runtime, that's really the appeal of it to me. I think the most right now is the idea that you can write your scripts -- if I'm thinking of things that I would wanna do, it'd be like command line applications. I'm writing stuff in Bash right now, and I write it in Bash because I know that Bash is probably on your system and there's not really like a need to npm-install anything, or set up anything like that... And that's a knock against Node and why I don't write command line stuff like that, because I consider global modules to be ephemeral, and you'd have to provide an npm install, and get all of that, and then you'd be able to run the script. But with Deno, it sounds like you can create an executable that has the entire runtime and everything you need in it, and then just ship that.

**Jerod Santo:** \[00:12:20.01\] Yeah, a single binary.

**Nick Nisi:** Yeah. That's one of the big things --

**Jerod Santo:** Which is spectacular for distribution, right?

**Nick Nisi:** Yeah, exactly. That's one of the big things that I've seen Go being hoisted up as being a really great way to build these completely self-contained binaries that contain everything you need. It's a really good language for creating those command line scripts, if you need it, without having to worry about what's actually available on the system... And now I really like this, because now I can do it with JavaScript and it's a lot easier.

**Jerod Santo:** Yeah, exactly. We actually just shipped an episode of Go Time all about releasing, and there's a project called GoReleaser, and a lot of that conversation on that episode is with Go I just create a universal binary and then I just send that where it needs to go; what kind of release process do I need. So some of the argumentation was like "Is this even necessary, to have these release tools?" Because it really is as simple as generating that binary, and then you can FTP it, you can SSH it, you can drop it in your Slack channel, you can probably email it if it's small enough, and pass it around. As long as it has been compiled for everybody's architectures - which it has, for the most part - it's just gonna work on everybody's machines... Which has been one of the reasons that Go has really succeeded. I think that's a huge advantage that Deno has over Node. And I'm sure there's Node efforts to provide tooling around making that be a thing, but having it built right into the project and being a first-party thing is gonna be something that sets it apart.

**Nick Nisi:** Totally.

**Jerod Santo:** In terms of the business side, I'll just say, to Ryan Dahl and the team, congrats. Go ahead and get that money, get that sustainability there. Last time around - I don't remember the entire history of Node.js, but I know Ryan created this awesome thing, and many people got involved, and there's lots of early adopters and lots of other people working on it as well... And he left the project, and it went on from there. It seems like this time he worked at Joyent, and there was IP issues... There's lots of stuff that went into all that. Npm came along and made a big business around the package management side, and at this time I feel like Ryan is trying to correct a lot of his mistakes with Node; it's the way he kind of set out with Deno... He came out with that talk, "10 things I regret about Node", and then Deno was kind of his new idea of fixing those things... And it seems like maybe Deno the company is him trying to fix another (maybe) mistake that he made the last time around with Node... So I hope it works out for him.

**Nick Nisi:** Yeah, I hope so too. It's always good to see attempts at sustainability around open source, and I really hope it works out.

**Break:** \[00:14:56.16\]

**Jerod Santo:** Okay, let's find out who is an April fool, and who's gonna April drool... I don't know. That didn't really work out. We're gonna play a game called Headlies. I've gathered a bunch of real headlines, along with the first paragraph from the story. I've also gathered and written some fake headlines along with the first paragraph to those stories.

Here's how it's gonna work... The headline will be presented, at which point, Nick, you can guess true or false, with two points on the line. So if you're wrong, I get the points. If you're right, you get the points. Or you can opt to hear the first paragraph before guessing, with only one point on the line. So you can hear more, but you win more for getting it correct.

Now, at the end of the day, you've got a 50/50 shot on all these, right? So you could just guess... And you're gonna have to guess. And we'll see who comes out the victor. Sound like fun?

**Nick Nisi:** It sounds like every other game that we try and play, and my best shot is to not play...

**Jerod Santo:** \[laughs\] True. I do hope I win, as always... Mostly, I just hope that this is entertaining for everybody involved. Are you ready?

**Nick Nisi:** I'm ready. Let's do it!

**Jerod Santo:** Alright, here's the first headline. "Apple adds two brand new Siri voices, and will no longer default to a female or male voice in iOS." Now, you can guess true or false with two points on the line, or you can hear the first paragraph of the article.

**Nick Nisi:** That is true.

**Jerod Santo:** \[win sound\] Congratulations, you got it.

**Nick Nisi:** I've already listened to Accidental Tech Podcast today, so...

**Jerod Santo:** Aww... \[laughter\] Alright, so you're winning, 2-0. Not fair, you heard that headline. Alright, next one - are you ready?

**Nick Nisi:** I'm ready.

**Jerod Santo:** Enjin raises nearly 19 million dollars to build Polkadot-based blockchain for NFTs.

**Nick Nisi:** That sounds like a real headline, for sure... But Enjin makes me think of the Jurassic Park company, so I'm gonna say it's false.

**Jerod Santo:** You're gonna say it's false... \[fail sound\]

**Nick Nisi:** Ohhh...!

**Jerod Santo:** Sorry, you are incorrect. It is true.

**Nick Nisi:** No way...

**Jerod Santo:** Yes. Blockchain development Enjin has raised 18.9 million to build a Polkadot-based blockchain network especially for non-fungible tokens. The network, dubbed Efinity, will have its own token called Efinity token. The funding has been secured via selling EFT tokens. There you go.

**Nick Nisi:** Those fools were too busy worrying about if they could, they didn't stop to think whether they should...

**Jerod Santo:** \[00:20:01.00\] \[laughs\] Very nice... A Jurassic Park pull in there... Alright, so the score is tied; I'm back at it. It's 0-0. You've lost 2. Now, remember, if you're not sure, you can listen to the first paragraph and give yourself a little more information. Or you can just keep gambling it all. Are you ready for the next one?

**Nick Nisi:** Alright, I'm ready.

**Jerod Santo:** Google's Alphabet invests 50 million dollars in soup startup.

**Nick Nisi:** Okay... \[laughter\]

**Jerod Santo:** Go ahead, think out loud. Tell me your thought process here.

**Nick Nisi:** Well, Alphabet's a real company... A soup startup...? I think I do wanna hear the paragraph.

**Jerod Santo:** Do you wanna hear more?

**Nick Nisi:** yeah.

**Jerod Santo:** Okay. Here's the first paragraph of the article. "If you needed more indicators of easy access to capital in today's speculation-crazed market, look no further than a Silicon Valley startup called Souped Up, which announced today they've raised 100 million dollars in a series B round that is led by none other than Google's parent company, Alphabet. Souped Up applies advanced machine learning techniques to bring low-cost canned goods to developing nations and indigenous people." That's a mouthful.

**Nick Nisi:** Okay... It seems more plausible, but... Igor in the chat says "Alphabet Soup". I'm gonna say it's not real.

**Jerod Santo:** You're gonna say it's not correct, so it's a headlie...

**Nick Nisi:** Yeah.

**Jerod Santo:** \[win sound\] You are correct. I made that one up. But I had you going, didn't I?

**Nick Nisi:** Yeah.

**Jerod Santo:** Nice. \[laughs\]

**Nick Nisi:** For sure. I was gonna ask if you used GPT-3 to make that--

**Jerod Santo:** To generate these... \[laughs\] Well, that would require way more forethought that I've put into this... And skill, which I hold very little of. Alright, you're now winning 1-0. You've got one point for getting that one correct. And yes, the Alphabet Soup really was the funny bit, I thought... Okay, next headline. "Carbon labels are coming to your shampoo bottle."

**Nick Nisi:** Carbon labels are coming to your shampoo bottle...

**Jerod Santo:** That's correct.

**Nick Nisi:** I wanna hear the paragraph on this one, too.

**Jerod Santo:** Shoppers have been able to use nutrition labels to choose low-salt meals or reduced sugar cereal. Now some companies want to use labels to help them pick everything from shampoo to milk based on the product's carbon emissions.

**Nick Nisi:** I hope this is true. I'm gonna go with that.

**Jerod Santo:** There's no hopium here... Is it true or false?

**Nick Nisi:** It's true.

**Jerod Santo:** \[win sound\]

**Nick Nisi:** Alright!

**Jerod Santo:** You got it. You're now winning 2-0. These next few are all Florida Man headlines. Are you familiar with Florida Man?

**Nick Nisi:** Yes. \[laughs\]

**Jerod Santo:** Okay... You're about to be even more familiar with Florida man.

**Nick Nisi:** Why don't you explain Florida Man, just in case any of our listeners aren't familiar?

**Jerod Santo:** Okay... Well, why don't you go ahead and explain Florida Man? What do you think of him?

**Nick Nisi:** Any time you see some ridiculous article, it usually starts with "Florida Man." Like, "Florida Man gets head stuck in alligator", or something like that. So there's this canonical Florida Man that is always getting into high jinks.

**Jerod Santo:** That's right. These are three of those. The first one is "Florida Man gets beat up by Santa Claus."

**Nick Nisi:** \[laughs\] True.

**Jerod Santo:** True?

**Nick Nisi:** Yup.

**Jerod Santo:** \[fail sound\] Sorry, that's incorrect. It turns out it was an Easter bunny. \[laughter\] And with that, it's not 0-0 again. You're back at zero. The full story is "A Florida man received a beatdown from the Easter bunny, and the whole thing was caught on video. It all started when the man bumped into a woman and words were exchanged; the Easter bunny hopped into action and proceeded to demonstrate what happens when you're--" Oh, sorry; I rewrote it. I was trying to read the original... I'm reading mine. I changed it to "Santa leaped into action and proceeded to demonstrate what happens when you're naughty or not nice. The fight was eventually broken up by Orlando Police and a bystander."

So yeah, everything there is true, except for it was the Easter bunny and not Santa Claus, and I changed the puns... I think it said "The Easter bunny showed what happens when he pulled out his fist of fury", or something stupid like that... I don't know. Anyways, that one is false.

**Nick Nisi:** I should get half a point, because I refuse to believe that if you went back far enough there's not some article about a Florida man fighting Santa...

**Jerod Santo:** \[laughs\] Well, if you can find the link behind this show, I'll edit it back in. Alright, next one. "Florida man with state tattooed on head calls 911 for a ride home."

**Nick Nisi:** \[00:24:13.20\] Florida man with state tattooed... Like, the word "state", or the state of Florida?

**Jerod Santo:** I can't provide any more context, unless you want the paragraph. Do you want the paragraph?

**Nick Nisi:** Yeah, I'll do the paragraph.

**Jerod Santo:** Alright. A Florida man with his favorite state tattooed on his forehead was arrested after calling 911 multiple times requesting a ride home. A deputy who found the Florida man offered to call him a cab, but he said he didn't have money for one. He then began to walk in the direction of his home, then called 911 a second time again, requesting a ride. The same officer caught up with him and arrested him while he was on the line.

**Nick Nisi:** That sounds real.

**Jerod Santo:** \[win sound\] That one's real. One point.

**Nick Nisi:** We've all been there, Florida man... \[laughter\]

**Jerod Santo:** Have you ever had the state of Nebraska tattooed on your forehead...? \[laughter\] Alright, the last one - Florida man breaks into home, sucks on sleeping man's toes. \[laughter\] Oh, gosh... What do you think?

**Nick Nisi:** I think that it's false, but I wanna hear the paragraph just so I can hear that and just assume that you wrote that, and I just wanna hear what you would write about there.

**Jerod Santo:** Okay. The incident occurred on Christmas Eve. According to the resident, he awoke to find the Florida man at his feet, who then proclaimed that he broke into the home "To suck toes." He then attempted to fondle the man, according to the police report. After the two got into a fight, the Florida man smashed a window and the victim's windshield before making an escape. No arrests have been made.

**Nick Nisi:** I think it's false. I think it's a lie.

**Jerod Santo:** \[fail sound\] And you are false. That is 100% true, my friend. \[laughter\] And with that, you're back at zero. This is going very well - you get one right, you get one wrong. I wish that wasn't true as well... \[laughter\] Because that is terrible.

Okay, the next line... Rapper Flavor Flav in hot water after exposing himself during Cameo.

**Nick Nisi:** \[laughs\] I have seriously looked at getting a Cameo from Flavor Flav... So I hope that's not true. But I'm gonna say that it is true.

**Jerod Santo:** You're saying it's true... \[fail sound\] I made that one up.

**Nick Nisi:** It was somebody else, right?

**Jerod Santo:** No, I just completely made that up out of whole cloth. Do you wanna hear the paragraph I wrote for it?

**Nick Nisi:** I do...

**Jerod Santo:** Okay. I'll let you know that you have -1 one, so I'm officially winning. "William Jonathan Drayton Jr, widely known by his stage name Flavor Flav, may face charges for a video he produced on Cameo, a service where people hire celebrities to create brief videos and share them with their friends. The video in question was for a woman's 40th birthday, and according to Drayton, the customer requested "something special" for his biggest fan." Pretty believable, I guess...

**Nick Nisi:** Yeah... \[laughter\]

**Jerod Santo:** I thought that one might get over on you... Although I think that would make some sort of bigger news. You probably would have heard about it... I don't know, maybe not. There's lots of ridiculous things on the news.

Okay, you now have -1, you're digging out of the red. Are you ready?

**Nick Nisi:** I'm ready.

**Jerod Santo:** There's four more. Next headline. "Internet's Hide the Pain Harold accidentally used by Swedish COVID-19 vaccine website." Do you know Hide the Pain Harold? Do you know that guy?

**Nick Nisi:** I do. Yeah, it's the old guy holding a mug, right?

**Jerod Santo:** Yeah, he's smiling, but you can tell on his face that he's actually in serious pain, or hates his life, or whatever. People use it all the time when you're acting like you're okay.

**Nick Nisi:** I actually watched a "Where are they now?" with that guy on YouTube.

**Jerod Santo:** Oh, really?

**Nick Nisi:** Yeah.

**Jerod Santo:** Where is he now?

**Nick Nisi:** He's enjoying it. He gets noticed on the street, and people wanna take pictures with him...

**Jerod Santo:** Yeah, because it was a stock photo, wasn't it?

**Nick Nisi:** Yeah. He said he'd been doing it for years and never had anything come of it, and then...

**Jerod Santo:** \[00:27:57.12\] And someone just noticed "This guy's eyes tell a different story than his lips/smile." That's cool, he's living it up; he's an internet celebrity now.

**Nick Nisi:** Yeah.

**Jerod Santo:** "Internet's Hide the Pain Harold accidentally used by Swedish COVID-19 vaccine website." You're at -1, so you can guess, you can get the paragraph...

**Nick Nisi:** If it's stock photography, how can it be accidentally used?

**Jerod Santo:** Hm... It's like a private eye over there...

**Nick Nisi:** I'm gonna say it's false.

**Jerod Santo:** You're gonna say it's false. \[fail sound\] You fail once again, that one's true.

**Nick Nisi:** Oh, no...

**Jerod Santo:** So "accidentally" might be an editorial word used by whoever's reporting this... I mean, it was on purpose. But I think the point of these websites is -- like, "It's a real person who's happy because they got their vaccine" or something. So it probably was accidental...

**Nick Nisi:** But then he's hiding the pain...

**Jerod Santo:** Yeah, exactly. \[laughter\]

**Nick Nisi:** Okay, I get it.

**Jerod Santo:** Yeah... He likes the pain... And according to the health authority in Sweden, officials said on Tuesday evening that the image has now been removed. So it definitely was an accident, because they got called out and they're like "Okay, we're taking that one down."

**Nick Nisi:** You would think that that would get the younger folks in to actually get the vaccine...

**Jerod Santo:** Yeah. Like, "If Harold can do it, I should be okay."

**Nick Nisi:** Yeah.

**Jerod Santo:** Okay, the next one. "Pringles to launch new lip balm product line."

**Nick Nisi:** Oh, man... I wanna hear the--

**Jerod Santo:** You've got -3. Do you wanna hear it?

**Nick Nisi:** Yeah.

**Jerod Santo:** "Kellogg Company announced a new set of products from its iconic Pringles brand. The company said it would release a delicious lip balm with flavors such as salt and vinegar, and sour cream and onion."

**Nick Nisi:** That can't be real...

**Jerod Santo:** \[laughs\] But you're not sure, are you...?

**Nick Nisi:** I'm not...

**Jerod Santo:** It's just like doing the internet on April Fool's Day, you never know, "Is this real or not?"

**Nick Nisi:** I'm going to say... You know what - I'm gonna say it's real.

**Jerod Santo:** Are you gonna say it's real?

**Nick Nisi:** Yeah.

**Jerod Santo:** \[fail sound\] I made it up. Ohh...! That was after one, so you've got -4 there. Or total -4. I'm feeling pretty happy at this point. I feel like I got you just never knowing what's true. Alright, two more. "330 million Americans sue Cardi B for psychological damage."

**Nick Nisi:** It's true.

**Jerod Santo:** \[fail sound\] Nope. \[laughs\] This one came off The Onion, one of those satire sites; I did not write that one. But it's believable...

**Nick Nisi:** Yeah... \[laughs\]

**Jerod Santo:** Okay, you're now at -6. You're failing miserably, and you would have been better off not having played, as you said at the top. Last one... "U.S. man returns from swift shopping trip to find 15,000 bees in his car."

**Nick Nisi:** \[laughs\] I feel like I saw this one... So I'm gonna say it's true.

**Jerod Santo:** \[win sound\]

**Nick Nisi:** Alright!

**Jerod Santo:** Yeah, that's right... And you got the last one right, which puts you at -4, so still a big loser... But it feels nice to get the last one correct. Yeah, apparently this guy went shopping in New Mexico, came back, there was 15,000 honey bees who had gotten in through an open window while he spent 10 minutes buying groceries. Astonishingly, the man did not notice the sudden presence of a giant swarm of buzzing insects on this vehicle's backseat until he was driving away.

**Nick Nisi:** What?!

**Jerod Santo:** Yeah... So he must have been distracted, because how do you miss it, right?

**Nick Nisi:** Yeah. And I just wonder what they were doing. Why would they wanna be in his car?

**Jerod Santo:** I don't know. Maybe there was something sweet in there... You know, bees swarm, and sometimes they'll leave their hive and swarm somewhere else around specific sources of food, or something... I don't know. Bees me... \[laughter\]

Alright, with that, we finish Headlies... I would say it was a big victory, for me at least... If you enjoyed this segment, please let us know and we will do it again. Otherwise, we'll banish it to the farthest recesses of the internet, never to be seen again until April Fool's Day 2022.

**Break:** \[00:31:46.26\]

**Jerod Santo:** Alright, we're gonna finish up today's show with some shout-outs... And I'm gonna go first. I'm gonna give a shout-out to a tool and some people that we're using right now, that I've been appreciating quite a bit lately... HackMD, which you'll find at hackmd.io. It is an online collaborative markdown-based writing tool. So think about Google Docs, and how crappy the UI and everything, and writing in there, and copying and pasting out of it - think about all that. Don't you ever have Google Docs and you're like "I just wanna write in markdown"?

And there's Dropbox Paper, which is better, because you can kind of write in markdown, but then it formats things weird, and then you can't copy it out exactly the same, and they have a lot of unfurling they do... And I'm just like "Please, stop unfurling. I just want the link to just sit there." Anyways. Not a huge fan... Although I would take Paper over Docs. And now I would take HackMD, because it's basically exactly what I would want. It is a markdown editor, and it even has that cool split view where the left-hand side is what you write, and the right-hand side is the rendered version; you can toggle that off and on, so you can go full writing mode, full viewing mode, or split-screen mode. But it has all the nifty collaboration tools that you would expect from a Google Docs or a Dropbox Paper, just by sharing the URL, which is my favorite thing... Like, "Give me my URL, make it an obfuscated one, so it can't be easily found, and just pass it around."

Now, they do have settings... You can set up who can read, who can write... It gets more complicated, but the base use case is super-simple, and that's what I love about it. I love web tools that allow me just to share quickly and get people involved. We've been using it for JS Party documentation -- not documentation; scratch sheets, where we're sharing, to do this show for a while. I've been doing it for a lot of my blog writing... I've been doing it for pretty much everything for the last six months or so.

Today, because of April Fool's, it turns out, I've realized they also have Vim mode. And the reason why I've found that out - I thought maybe this was actually an April Fool's joke, and I was like "Please, don't let this be fake. I want this to always be here." But it has existed for a while, I just didn't notice it.

Today, for April Fool's, in the menu bar they did put this April Fool's joke, which was like the Nyan Cat -- they called it a Red Panda, which I'm not sure if that's like a different meme... But it's like a progress bar with the Red Panda walking across... And that drew my eyes down, and then I saw on the right-hand side they have different settings, such as "Do you wanna use tabs or spaces?" Of course, everybody picks spaces. And "Do you wanna have two or four?" and everybody picks two... But you can also set your editor, and they Sublime, and they Emacs, and they have Vim.

So you get your Vim key bindings in your browser, collaborative, share via URL, with lots of cool keyboard shortcuts and all the bells and whistles. I just really like this tool, so shout-out to the folks at HackMD. I did put some tweets out today and they responded, regarding this Vim thing, ensuring me that it's not an April Fool's joke, it's actually a real feature... And I decided to invite them on the show.

\[00:36:08.04\] I think it's all open source. They have 56 open source repos on their GitHub. I think they're over there in Taiwan. So they've agreed to come on... I'm not sure how it'll work out, timing and whatnot, and if they're native English speakers or anything like that, but... Cool technology, open source, all built with webby tools, and I'm a big fan, so shout-out to HackMD.

**Nick Nisi:** Yeah, that's awesome. I saw your tweet about the Vim mode... It made me wonder what is special about Sublime mode versus anything else, any other editor.

**Jerod Santo:** Yeah, I don't really know -- so I brought a lot of my Sublime shortcuts into VS Code, so I'm not sure what VS Code's defaults are, because I just kind of thought they were the same in terms of keyboard shortcuts... I wonder how different those stock Sublime Text vs stock VS Code, if those are similar. Of course, a lot of the editors used are borrowed from Emacs, which is a lot of the control-based shortcuts, and not modes. So maybe if there's an Emacs and there's a Sublime -- I don't know the difference between the two. I think it defaults to Sublime, because that's what I was in before I realized you could toggle it... But I'm not really sure. They have question mark operators? Let me see... A lot of times you can do question mark and they'll open up a keyboard shortcut overlay, which tells you what all things do... But it doesn't seem to be working, at least in Vim mode.

**Nick Nisi:** In Vim mode it opens up to do a regex search.

**Jerod Santo:** That's right. Is that what Vim does?

**Nick Nisi:** \[unintelligible 00:37:34.12\] which it also does in here.

**Jerod Santo:** Yeah, so forward slash I do. I've never hit question mark to do a regex in Vim, but I wouldn't be surprised if it did that as well.

Now, I've only used it in Vim mode for probably like two hours, and all of my normal navigation is working, so like dd to delete a line, :1 goes to the top, Shift+G goes to the bottom... All the things I'm used to. But I wonder how Uncanny Valley it gets the more you use it; how are they achieving this Vim support, and is it gonna be one of those things where it supports 80% of Vim key bindings, but then your favorite tip and trick doesn't work? I don't know... I haven't used it long enough to know that. But it is good enough for me to enjoy it so far.

**Nick Nisi:** Yeah. And real-time follow-up - I did not know this, but question mark does actually do regex search, but backwards.

**Jerod Santo:** Backwards meaning starting at the bottom of the document and working up?

**Nick Nisi:** Starting from your cursor and looking up, rather than down.

**Jerod Santo:** Oh, that's nifty...

**Nick Nisi:** I did not know that, because I've never used it... I use slash all the time...

**Jerod Santo:** Right. And it's Shift + slash, so it makes sense. It's the same key, just one with a Shift key. So one goes one way and the other one goes the other. TIL, right here, live, on JS Party...

**Jingle:** \[00:38:44.24\] to \[00:38:58.28\]

**Jerod Santo:** TIL, there we go. I stalled for you... We're still doing shout-outs. Do you have a shout-out, Nick? Shout us out.

**Nick Nisi:** I was gonna shout out also a thing, and that is an app called Keyboard Maestro. Have you heard of it?

**Jerod Santo:** I have heard of it. I do not know what it does, so please, tell me.

**Nick Nisi:** So it does a lot... But it lets you set up automations, basically, on your Mac. It's a Mac program. So when I hit the specific keyboard shortcuts and I can have it like specific to an application, so I can say "When Slack is in the foreground and I press ?? or something like that, then run this script." Or I can record a macro and have it actually move my mouse around and quickly do something; or I can have it select from a menu... And you can mix and match these all together to build cool automations that do a lot of different things.

\[00:40:00.14\] I started playing with this, and I also have a Stream Deck... And Stream Deck is a little device that has -- mine has 16 buttons, and all of the buttons are little LCD screens, so you can set what each button is... And I can trigger Keyboard Maestro macros from that. So I can push a button and have it do things like turn my lights on and off. I can also have it do things like automatically open up Audio Hijack, and get ready for a Zoom meeting, and get ready to record, or have it automatically start recording, and kind of combine them all together... So then I just push a button and it can do things like lay out windows, so I have it moving windows where I want on my screen, so everything is not overlapping, and it's all readily visible for me, and then it can start recording and turn my lights on, and do all this really cool stuff. It's a pretty cool way to do some simple and complex automation on your Mac.

**Jerod Santo:** That is cool. So it's actually driving the mouse around, and then everything as well, right?

**Nick Nisi:** It can.

**Jerod Santo:** Yeah, it can. So you can say "Go to this area of the screen and click here" kind of a thing?

**Nick Nisi:** Yeah. It's got a little recorder too, so you can just record and then do it one, and it'll figure out what to do from there. From there, it'll be like "Oh, I click inside of TweetBot and then click 60 pixels from the right and 120 pixels from the top. Click right there", so it's relative to where the window edges, and then go from there.

**Jerod Santo:** That sounds a little fickle.

**Nick Nisi:** Yeah, it can be, I'm sure...

**Jerod Santo:** \[laughter\] Like, if you change the size of your TweetBot window, it's broken.

**Nick Nisi:** Yeah. Well, now you know about my unit tests, so... \[laughter\]

**Jerod Santo:** So is this a free app, is it a paid app? Is it Mac only?

**Nick Nisi:** It is Mac only... It is not free either. I forgot how much it is. $36. It's pretty cool... Just being able to set these things up and have automatically set my workspace up the way I want it for different scenarios, whether that's writing code, or looking at documentation, or taking a meeting, or doing a podcast. I can have it quickly switch... And that's kind of the main thing that I've been coming into it with, is "How do I set up my workspace without me having to manually move windows around, and set things up exactly how I always want them?" It's just now a button click away for me.

**Jerod Santo:** Yeah, that's nice. I have this laptop, and I -- I don't dock it, but I plug it into things. I have a separate monitor, and I have my interface etc. to plug into... And then I wanna leave my desk and take my laptop downstairs, and I do that, and everything kind of like munges into one screen... So I kind of have two modes of computing on this thing - I have my plugged in -- almost like docked mode and undocked mode. And it'd be nice to have just like -- I wish it would detect, like "Hey, I just plugged into your second monitor. I'm gonna put everything back where you had it before you detached", or something like that.

**Nick Nisi:** Yeah.

**Jerod Santo:** I could get that done maybe with Keyboard Maestro, and just have it do certain things? Does it trigger on a keyboard shortcut, or -- can I have a trigger on an event?

**Nick Nisi:** Yeah. So you could have it trigger on mounting a particular volume, connecting to a specific Wi-Fi... There's display layout change, which would probably be like going from an external monitor to your laptop...

**Jerod Santo:** Exactly.

**Nick Nisi:** ...and have it trigger based on that. So yeah, there's lots of different...

**Jerod Santo:** That's cool.

**Nick Nisi:** And then there's just simple things, like you can just have it startup its own web server, and then you can send it triggers. If you publicly expose that, you can just send triggers to it... Or from your local network, you could have it -- "I'm going to just post to this address, and now my Mac's gonna go do something." Or you can just have it be a cron trigger.

**Jerod Santo:** That sounds dangerous... \[laughs\]

**Nick Nisi:** Yeah.

**Jerod Santo:** How do you do this deal where you change the lights in your room, that you just demonstrated?

**Nick Nisi:** Yeah, so that's actually connected with the Stream Deck software; it has a control center that is controlling them...

**Jerod Santo:** \[00:44:06.22\] Which is a piece of software that runs on your machine... So Keyboard Maestro is just controlling that software.

**Nick Nisi:** Right.

**Jerod Santo:** Okay. So what would be a cool thing that you would run a web server and post to it from different parts of your house?

**Nick Nisi:** That is a good question...

**Jerod Santo:** Can those Hue lights - can they do webhook kind of things? Can you configure those things to make -- because this is inbound request, right?

**Nick Nisi:** Yeah.

**Jerod Santo:** ...like, it's posting to your Keyboard Maestro web server, so something would have to be pushing data, or pushing an event, like "The lights turned on". Maybe you could have it hook up to your switch as well; like, if you have a regular light switch, and it turned on, if you could configure the Hue lights to actually do that, they could make a post over to your web server and do something on your laptop, control your laptop somehow via some other switch in your house.

**Nick Nisi:** Yeah, for sure.

**Jerod Santo:** Pretty neat. All I want is for my windows to go back where they were when I unplugged, man. It's all I want in my life... \[laughter\] I like this dance I do, "Plug in, this goes here, that goes there, that goes there... Ah, I'm back." It's like "This seems like something a computer should do."

**Nick Nisi:** Yeah. They can do it, that's the amazing thing.

**Jerod Santo:** They can, but they won't without a lot of tomfoolery.

**Nick Nisi:** Yeah, that's how it always seems like.

**Jerod Santo:** It is. You're like, "Ah, this thing's not gonna last." I've set up enough hacks in my life where I'm like "This hack isn't gonna last." And nowadays I just do the manual thing, I'm like -- I either set up the hack, maintain the hack, or I can just do the manual thing." And nowadays I'm just like "I'm just gonna drag the window every time, until something that actually is supported by the operating system." If Steve Jobs doesn't come back from the dead and do this feature for me, I'm not gonna have it. That's what has to happen.

**Nick Nisi:** Well, I haven't looked into it too much, but there is Automator that comes standard with Macs.

**Jerod Santo:** Yeah.

**Nick Nisi:** And you probably have to write ApplesScript, which is immediately something I don't wanna look at... But you can do a lot of automation just natively on the Mac, without any extra software.

**Jerod Santo:** Yeah... So have you write AppleScripts? Because I have...

**Nick Nisi:** Yes.

**Jerod Santo:** \[laughs\] I'd rather do it the manual way. That being said, there is a JavaScript interface now \[unintelligible 00:46:11.20\] but I've also tried to use that, and to very little success.

**Nick Nisi:** It's still terrible.

**Jerod Santo:** The documentation - it's inscrutable. How do I even use it? I understand JavaScript, but I can't use this API.

**Nick Nisi:** Yeah. The only piece of AppleScript that I've written - and I wrote it actually in AppleScript and JavaScript, and that was to ask Music or Spotify what song is playing, so that I can put that in my \[unintelligible 00:46:34.18\] just refreshes every five seconds and asks "What's playing right now?" and it updates right there... And that broke in macOS Big Sur. It broke in a really weird way, where it just throws an error that the object that I'm trying to grab from Music doesn't exist, except it does if I'm playing a music file that is in my library. But if it's just like I'm listening to Apple Music Radio, whatever that's called, or an Apple Music playlist that is not in my library, then it's like "Whoa, I don't know what this is" and it just blows up.

**Jerod Santo:** Wow. Yeah... That's life. The best AppleScript I've written - probably ever, but definitely lately - is one that we use for our clips, the way we make our clips... Which is we actually use Keynote for our clips. And we write the text in a text document. So we pull the text out of our transcripts - and they're just markdown transcripts, so they're basically text with a little bit of formatting... And we just copy all those into a text document, and just space it out, so it'd be like Jerod, and then a thing, and then Nick, and then a thing, and just formatting it according to what I came up with... And then you copy that into your clipboard. Then you open up Keynote and you execute this AppleScript, and it actually scripts Keynote to go and parse the text and then add a slide for each one and paste it into there. And then it'll even go and switch the active face, and stuff like that...

**Nick Nisi:** Wow...

**Jerod Santo:** \[00:48:05.17\] Super-cool. But it took me way too long, way too long to get this to work. But once it worked, it felt like magic, because I hit Paste... It's like a special -- and then I attach that AppleScript to a keyboard shortcut inside a Keynote... So I just execute it and it's like "PRRRRR", and all these slides come into life...

**Nick Nisi:** Do you watch it as it's going?

**Jerod Santo:** So cool.

**Nick Nisi:** Is it recording -- like, does it start the screen show and then record that somehow, or is that something manual?

**Jerod Santo:** No... It just pastes them in, basically. Then you'll wanna do some fixes from there, usually, because the way the words show up on the slide - it will be weirdly formatted, so maybe like add a line, or remove a line, or shrink the text to make the text bigger... So you do all that; it's kind of like a QA phase.

And then inside Keynote they have an actual recording option, which people use, I believe, to either prerecord their talks or to practice their talks and watch them back. So you can go inside Keynote and say "Record my talk", and it'll display your talk on the screen, as well as your regular heads-up display - what do they call that...? The presentation view. So you can see the timing, you can see the next slide etc. And it'll record what's on the screen and your voice, and anything that's going through the system.

You can also add a soundtrack in keynote as well. Maybe you wanna have mood music while you're doing your talk... These weird features of Keynote - we're abusing them. So we drag the sounds into there, and we just say play, and we record it, and then we just hit the Next button over and over again as it makes sense with the person talking... So you basically perform the slide once in real time. Then it records that, and then you've got your clip.

**Nick Nisi:** Nice.

**Jerod Santo:** Yeah. It still takes some work, but it's way less work than what the other way is, which is basically you get most of these tools - you get all your clips into a thing, and then you have to change the start and end times of every clip... And it's usually on every slide, and it's like this sideways horizontal scroll thing, super-annoying, and then it uses up a bunch of RAM, because it's some Adobe thing or some web thing that just clogs the rest of your machine now... And it takes like an hour to do one good clip, and this way we can crank them out.

But that automator was worth writing, because I wrote it once and we've used it hundreds of times, you know?

**Nick Nisi:** Yeah. That's amazing.

**Jerod Santo:** Sometimes computers are cool. \[laughter\] As long as they don't change the size of the window, or whatever... \[laughs\] You know, until it breaks; then I'll be cursing it again.

**Nick Nisi:** Yeah. So did you have to write a lot of AppleScript for that, or was it more of like a recording macros type thing?

**Jerod Santo:** I have the AppleScript here... At the end of the day, it's probably like 100-150 lines.

**Nick Nisi:** Okay. But getting to those lines... I wrote probably 1,000 to get to the 150. Because there's certain ways you access the Keynote object, and you can instruct it to do things, and then pass it the data... But that's not the way. And every time that you change it, you have to run through -- you know, there's no automated test suite where I can just hit Compile and run.

So it took a long time, but I think it's not very much AppleScript. And there are built-in things for parsing the text file -- or not parsing it, but ingesting the text file, and then looping over the lines, and then just very basic regular expressions stuff to say like "Is this a start of a phrase, or is this a person's name?", that kind of stuff.

**Nick Nisi:** Nice.

**Jerod Santo:** I tried to write it in JavaScript and I just couldn't figure it out. It wasn't the JavaScript's fault, it was their scripting API.

**Nick Nisi:** Like AppleScript JavaScript?

**Jerod Santo:** Yeah. Like, this is written in actual AppleScript... But I was trying to use the JavaScript interface. The documentation just didn't -- I just couldn't figure it out, so I was like "Well..." The AppleScript documentation is actually better, so that's gonna be the difference. Even the language is just terrible.

**Nick Nisi:** Yeah.

**Jerod Santo:** "Tell this to do that." It's weird. Anyways, Keyboard Maestro - shout-out to that, and shout-out to HackMD. That's our show for this week. We have a couple of cool episodes coming down the pipeline. Next week we're gonna have the author of HTMX come on the show. This is an HTML over the wire solution, so it's similar to Livewire, or Phoenix LiveView, and Basecamp's new Hotwire stuff... So the HTMX author is gonna be on. Feross will be back for that one as well. We also have Jenn Creighton coming up soon; she is the host of the Single-threaded Podcast, so stay tuned for that one... And other cool things that I can't think about off the top of my head.

We appreciate you hanging out with us. If you liked Headlies, let us know, because that's the only way we'll do it again, is if people say "Yeah, do it again!" Otherwise it was a one-hit wonder... And yeah, that's JS Party for this week. We'll talk to you next time.

**Nick Nisi:** See ya!

**Outro:** \[00:53:03.00\]

**Horse JS:** Reading the ECMAScript standard literally changed my life. Like most people.
