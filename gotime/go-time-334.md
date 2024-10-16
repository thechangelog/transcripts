**Jerod Santo:** Hello, fellow gophers. GoTime producer, Jerod Santo here. I say fellow Gophers because despite my Ruby roots, my Elixir life, and the weekly JS Parties that I throw, I've been hanging out behind the scenes of GoTime for so long that I feel like I'm part of the Go community, you know? In fact, I even wrote a production Go app for some definition of the word production, at least... The little web app I built to host our Gopher's Say and Frontend Feud game boards - powered by Go. Anyways, what were we talking about? Yes, this week's episode. It's been too long since we've done a roundup of past unpopular opinion results. That's the plan for today.

Now, when I say too long, I really mean it. The last roundup episode was in November of 2021. We have to play some catch-up. So this time, we are going to rank and review the most popular and unpopular opinions of 2022. Let's get into it. But first, some stats.

GoTime hosts and guests shared 76 opinions that year. Of those, 52 were generally popular, 4 were right at the 50% mark, and 20 were generally unpopular. That means we had more than twice the number of popular opinions than unpopular ones. Maybe it's time we renamed the segment "Popular Opinion... Popular Opinion." Nah, that just doesn't sound right.

Okay, here's your top 5 most popular opinions shared on GoTime in 2022. Number 5 comes from episode number 255, Debugging Go. Natalie Pistunovich said on that show that managers ask for updates too often.

**Natalie Pistunovich:** I brought an unpopular opinion as well.

**Ian Lopshire:** Oh, wow. Okay...

**Natalie Pistunovich:** I think that as a manager, a team lead, or a product manager, or whatever, making a round of messages on your tracking system, like JIRA, Trello, and whatever - "What's the status here? What's the status here? What's the status here?", and then your developer arrive the next day to like ten messages that all look the same, "What's the status here?", is one of the worst things you can do.

**Liran Haimovitch:** Definitely.

**Natalie Pistunovich:** No, it's supposed to be unpopular. Don't say that.

**Liran Haimovitch:** Elon Musk is much, much better. Tell everybody they're fired next week if they don't deliver what you came up with overnight. \[laughter\]

**Natalie Pistunovich:** Now, that's an unpopular opinion.

**Ian Lopshire:** No, all those status messages never fail to give me anxiety. It's like, "Wait, was I supposed to get all of this done? Ah...!"

**Natalie Pistunovich:** Even if yes, there's better ways of doing that than ten messages of "What's the status here?"

**Tiago Queiroz:** Yeah, definitely.

**Natalie Pistunovich**: Maybe you have an agreement that you should update at the end of every day, every week, every other day, I don't know... If you don't have such an agreement, you should set that up. If the team is not happy with this agreement, you need to find something else, but just around like opening your inbox to ten of those messages is just like "I'm gonna close the computer. Bye."

**Jerod Santo:** \[00:07:50.17\] A whopping 92% of pollsters agreed with Natalie. Give us a break, managers. The cake will be baked when the cake is done baking, am I right?

Number four. On episode number 257, Nishant Roy joined Johnny and Jon to discuss how Pinterest delivers software at scale, and his unpopular opinion was that non-typed languages can be dangerous.

**Nishant Roy:** My unpopular opinion is that working with non-typed languages, non-compiled languages can be a nightmare, especially as your codebase grows extremely large. I will say, shout-out to the Pinterest team. I think they've done a fantastic job of making our Pythonic API easy to work with, easy to read, great documentation, great testing... However, still, if I just want to go in and read one bit of the code, it's really hard to understand exactly how it works, because I don't know -- for lack of typing, I don't know what's going into this function, unless things are really well named, which at this scale becomes hard to enforce... It becomes a little hard to test; you really need solid unit tests for everything, down to like input parameter validation, which is something you don't need in a typed language. And I think it becomes really easy to like accidentally introduce some bugs.

I know for a fact that one of my friends in the past who worked at Pinterest introduced one bug where they accidentally reused a variable that was defined elsewhere, overwrote that variable's name, because this file was like 900 lines long, and Python didn't throw up any flags for using this variable, like Go would... And it essentially caused a -- I'm not gonna go into the issues, but it caused an issue with the content users were seeing. And that's something we didn't realize till the change went out and was live for a few days. I mean, it was restricted to internal employees only, but it essentially caused -- it was something that I know that Go would have saved us like three days of wasted time, essentially.

**Jerod Santo:** 93% of Govers agreed that was Nishant's first unpop with us, and he made a classic mistake of using a completely reasonable qualifier. You can't say things like "can be", or "should be", or "may be", and expect people to disagree with you. Hotter takes, please.

Well, we are actually getting less controversial from here... Number three. The third most popular opinion was that product roadmaps are dangerous. Inbal Cohen had this to say about it on episode number 247.

**Inbal Cohen:** My unpopular opinion has to do with roadmaps. Roadmaps are a very, very dangerous tool, that a lot of times is used against development teams, instead of by development teams for the business.

**Natalie Pistunovich:** Interesting...

**Inbal Cohen:** And my unpopular opinion would be - and this is funny, because it's an unpopular opinion in many companies that I've been in, but it's actually how they're supposed to be done... Which is roadmaps should be a combination of two directions meeting in the middle. From the top, we have the Why; the business telling us "These are the numbers that are going to make our company super-successful." We have the middle part, which is the product saying What. What are we building. I understand the need, and now I'm going to think about this fantastic software that's going to solve all our problems. And on the bottom, we have the How. These are the development teams - how is this going to get done?

And roadmaps are supposed to take those two edges of the Why and the How, and bring them in the middle, which also is the house of When. So when we're trying to drop on development teams when things are done, we're limiting how things are done.

**Jerod Santo:** \[00:12:00.13\] 95% of people who took the survey agree with her. Hmm... Too many manager questions, saying no to roadmaps...

I'm sensing a theme here. Number two. Here's Mark Sandstrom on episode number 218 called "Going with GraphQL."

**Mark Sandstrom:** My unpopular opinion - so I think manually grinding through work is an underrated engineering strategy. Computers are great at automating tasks that you know how to do, and you have to know how to do something really well manually before you can effectively automate it. You see this in product development, where startups will just have staff members doing tasks instead of their API automatically doing things as they're building things out. But it also applies, I think, to other areas of engineering, where it could be that perhaps a task isn't even worth automating... I really like the approach of assisted automation, where you let the computer do what it's really good at doing, perhaps finding places in code to update, but then you just go ahead and use your ability as a person to actually make the updates.

**Jerod Santo:** 96% agreed with Mark that grinding it out is often the way to go. Most successful software devs confessed to this, so it's no surprise that it made the top five. And now, for the moment we've all been waiting for - who will we crown with the most popular opinion, which technically means the absolute worst submission to a segment about unpopular opinions of 2022? Number one - Ivan Kwiatkowski believes NFTs are a scam, and not a single Gopher begged to differ. That was just one of four unpopular opinions shared by Ivan on episode number 251, Hacking with Go, part two. Here's the whole bundle.

**Natalie Pistunovich:** So Ivan, what is your unpopular opinion for us?

**Ivan Kwiatkowski:** Oh, my God, I totally forgot about that. But it's okay. The good thing is I do have many unpopular opinions, so I'm going to give you things off the top of my head, and you can tell me what you want to know more about. For instance, I think that cyberspace is never going to be regulated. I think that NFTs are a scam, I think that there is no political will to limit the sale of cyber offense tools... That kind of stuff. I do have a lot of unpopular political opinions as well, but I don't think I want to inflict that onto you. You've been very nice to me.

**Natalie Pistunovich:** What do you think about the European rule about USB-C, standardizing USBs?

**Ivan Kwiatkowski:** Oh, I'm very, very happy about it. I know it's some pressure put on some device constructors, but I've been carrying lots of different chargers for years, and I'm super-annoyed about this... And knowing that we are going to switch to like a single USB-C for every single device makes me extremely, extremely happy.

Another unpopular opinion I have, which you can add to the list, is that I'm not really a big fan of Apple. Like, not at all. I don't like their ecosystem. And I'm not going to get into this, but one of the things I don't like is that people have to pay 40 bucks for new chargers, and they change chargers every time they release a new product. And I'm very happy that this is going to cut off this revenue stream for them, because I think this should have never existed in the first place.

**Break:** \[00:15:45.21\]

**Jerod Santo:** We now come to the good stuff. Your actually unpopular opinion makers of 2022, starting with number five. This opinion was unpopular with 73% of Gophers. Michael Matloob thinks they should bring back the try proposal.

**Michael Matloob:** My unpopular opinion is we should bring back the try proposal.

**Mat Ryer:** Oh, really?

**Michael Matloob:** And this is where I'm going to not mention other features by name, but I'll say - of all the features that people have proposed as language changes to the Go language, I feel like none have been as potentially impactful as the try proposal was... And I was sad to see it pulled back. Because I think error handling properly is really important to writing good Go code, and I think the language ergonomics should encourage people to handle their errors properly. And so often people will just -- "if err!= nil {return err;}" and just not think about what they're doing with their errors... And I feel like try gave an opportunity to think a little bit harder about wrapping errors properly, and what to do with errors, and kind of nudged people to do the right thing a little bit more.

Certainly, the proposal as it was needed more work before it should go in, but I really do think we should bring back the try proposal, and keep working on it and make it better. I don't know when we'll have the bandwidth for another big language change like that, but...

**Jerod Santo:** Michael shared that unpopular opinion on episode number 217, "The other features in Go 1.18." We move now to number four. This one was unpopular with 87% of respondents. Ed Welch thinks Windows is the best desktop operating system.

**Ed Welch:** I believe Windows is the best desktop OS.

**Mat Ryer:** Okay, really?

**Ed Welch:** Specifically Windows with WSL 2 is everything that I've ever needed from a desktop OS. A close second would probably be macOS, although my experiences with Docker and macOS are frustrating, and my experiences with updating macOS and having it become less stable after every time it does an update... And in general, the expense of the Mac hardware and hostility of the Mac support community has shied me away from it.

And I love Linux. I've tried for years and years to run desktop Linux, and I just don't -- I just want my computer to work. I wanna join this podcast today and expect not to have any trouble. And that's Windows, man... That's where I'm at with Windows.

Also, it's not -- I'm not gonna say that I love it, right? That Windows is great and it doesn't have a whole host of its own problems. I just think it has the least problems.

**Mat Ryer:** Yeah. It does have Minesweeper.

**Jerod Santo:** See, kids, if you want to be unpopular, use words like "best". Don't say "best for me" or "my favorite". Just come out and declare objectively, globally, without any contextual qualifiers or wiggle room at all. Best. That's what our number three top unpop did as well. This time, swap out Windows and desktop OS'es, swap in C and programming languages.

**Mihalis Tsoukalos:** Okay, I have two smaller ones. The first one is that most meetings can be replaced by emails. We don't need so many meetings.

**Johnny Boursiquot:** Right. You just send an email. Yeah, I don't think that's gonna be unpopular at all. \[laughter\] A lot of meetings could have been an email.

**Mihalis Tsoukalos:** \[00:21:59.22\] And the second one is that C is the best programming language ever.

**Johnny Boursiquot:** Ooh...!

**Mihalis Tsoukalos:** \[laughs\]

**Johnny Boursiquot:** Okay, okay... Alright, alright... Let me mull on that for a second.

**Mihalis Tsoukalos:** If I have to choose a single programming language to live with, that would definitely be C.

**Johnny Boursiquot:** That would be C, huh? Okay, okay...

**Mihalis Tsoukalos:** Yes. Not C++, just C.

**Johnny Boursiquot:** Just C. You like managing your own memory, and all that stuff, huh...?

**Mihalis Tsoukalos:** No, I don't anymore... \[laughter\] I don't anymore. But you know, back then it was not easy to have garbage collection or automatic memory management. Otherwise we wouldn't have Unix. That would be a shame.

**Johnny Boursiquot:** Okay, okay... I mean, yeah, if you didn't have a choice... You know, if you're gonna write C, that's as close to the metal (as they say) as you're gonna get, unless you wanna start writing assembly, or something...

**Mihalis Tsoukalos:** Yes, exactly. \[laughs\] Exactly.

**Johnny Boursiquot:** I can see that... Okay, okay...

**Jerod Santo:** That was Mihalos Tsoukalos talking to Johnny on episode number 221, Mastering Go. And that opinion was unpopular with a resounding 83 percent of pollsters. The email opinion - yeah, not so much. We move now to number two. An opinion about CSS on a Go podcast? This probably won't end well. Let's see.

**Misha Avrekh:** Let's see... Alright, so my unpopular opinion, that is not about Go, is that CSS is a full-fledged programming language that will someday replace all other programming languages. Now I just need to figure out how to rewrite all of my backend microservices in CSS.

**Kris Brandow:** \[laughs\]

**Angelica Hill:** I don't even know how to respond to that one.

**Jeff Hernandez:** You broke my brain, I think.

**Misha Avrekh:** That will solve the legacy problem, for sure.

**Angelica Hill:** Yeah, let's just write everything in CSS...

**Jon Sabados:** Does it have to be CSS, or can I write it in Sass, and then transpile it to CSS?

**Misha Avrekh:** Sass is fine.

**Jon Sabados:** Okay.

**Angelica Hill:** Getting snazzy with it here.

**Kris Brandow:** Well, you can do math in CSS now, so I can kind of see how you could create a virtual machine out of \[unintelligible 00:24:38.10\] the bytecode is CSS, and then... Oh, God. Now we're gonna wind up with someone writing a C compiler that compiles C into CSS, that can actually -- ah, this is terrible.

**Angelica Hill:** What have we started...?

**Jerod Santo:** I was right, It did not end well. 95% disagree with Misha Avrekh's sentiment that CSS is a full-fledged programming language that will someday replace all other programming languages. I wish he would have explained why, but you do have to give him points for going all-in with that opinion, earning him the number two spot.

And now the moment we've all been waiting for... The most unpopular opinion shared on GoTime in the year 2022 is from the exact same episode that brought us number two. That's episode number 223. It's called, "How Can We Prevent Legacy From Creeping In?" And on that episode, Jeff Hernandez said this:

**Jeff Hernandez:** So I've been racking my brain with this ever since I agreed to be on Go Time, so I don't think I have anything Earth-shattering like Jon's previous unpopular opinion... But what I came up with is I do not like any type of yogurt. I feel like that's a very popular snack that people like to eat. I just do not like yogurt at all. I have a story actually about that...

\[00:26:13.26\] So I bought Greek yogurt as a substitute for sour cream, because I heard that's like a good, healthy substitute... And it was my first time actually trying it. I opened up the container and it just smelled really funky. I told my college roommate at the time, "Did this go bad?" And he came over and smelled it, and he's like "No, that's just how it smells." I'm like, "Oh... Definitely not for me then."

**Angelica Hill:** \[laughs\] Wait, are we talking just like plain, or are we talking like mixed in with some granola and fruit?

**Jeff Hernandez:** Any...

**Angelica Hill:** You also don't like it?

**Jeff Hernandez:** I don't like any yogurt. I've never been like a yogurt person.

**Angelica Hill:** Like, Greek only? Are we talking about Yop, like drinkable yogurt?

**Jeff Hernandez:** No yogurt. No yogurt.

**Angelica Hill:** Oh my gosh, this is like an umbrella yogurt ban in the Jeff household.

**Jeff Hernandez:** Basically, yes. \[laughs\]

**Jerod Santo:** How many go-time listeners dislike yogurt as much as Jeff does? Pretty much none of us. Only 3% agreed with him, which leaves this opinion with a score of 97% unpopular. Congratulations, Jeff. We all think you're wrong. More wrong than anybody else who came on the show that entire year. Adam, tell Jeff what he wins.

**Adam Stacoviak:** You've won a lifetime of yogurt...! That's right, we'll fill your fridge with every type of creamy yogurt for years to come, ensuring you never run out of your favorite snack. \[unintelligible 00:27:42.08\] prohibited or restricted by law. No cash value. Taxes and delivery fees may apply. Not an actual prize.

**Break:** \[00:27:50.09\]

**Jerod Santo:** Since I have you here and since I spent way too much time reviewing way too many opinions from what feels like forever ago, here's a few bonus opinions for you. These weren't necessarily popular or unpopular. They're just some that I really enjoyed for a second time while reviewing these. First up, Matt Ryer's passionate take on shower gel.

**Mat Ryer:** Well, speaking of being really sweaty, my unpopular opinion -- I've got one today... I don't understand shower gel. I don't know if you've seen it or you have it. It's basically -- it's like some kind of bath time slime... And it never smells great. And people have it. Sometimes I'll go to my brother's, and I'll go in the shower, and he doesn't have any soap. He just has these bottles of shower gel. And it's sort of just slimy, and... I don't know, I never feel clean. I'm not happy with it. What's your stance on shower gel?

**Roger Peppe:** I tend to agree with you about the shower gel, because -- it just all drips away. You know, if you give me a bar soap, it's there, right?

**Mat Ryer:** You can really go to town.

**Egon Elbre:** Don't you use a sponge for it?

**Mat Ryer:** Oh, a sponge?

**Roger Peppe:** A sponge? No, no...

**Egon Elbre:** Like, something fluffy.

**Mat Ryer:** Oh, that makes sense. That does make sense, though.

**Roger Peppe:** I suppose that does make more sense. No.

**Egon Elbre:** Do you also feel the same about shampoo?

**Mat Ryer:** No, although I realize that that is very similar. I don't have loads of hair...

**Roger Peppe:** I have to say that I have recently, in the last couple of years changed to using bar soap for the shampoo. You can get these shampoo bar soaps, and it works really well. So you don't have that bottle which you have to throw away, so less plastic, it lasts for ages... It actually works really well.

**Mat Ryer:** Sold.

**Roger Peppe:** I totally recommend it.

**Mat Ryer:** I want everything in a bar. I want a bar of toothpaste now. You just rub the bar in... \[laughs\] No, but a shower gel -- in some places where the water soft, it doesn't even all properly come off, so you end up being all slimy.

**Roger Peppe:** You're putting it on during the shower, not afterwards, right?

**Mat Ryer:** \[laughs\] To be fair, I have not read the label. It might be a user error, but I just don't get it. I just don't like it. I like a nice, rough bar of soap; something that's rugged, and... You know what I mean? I'm not one of those really manly people.

**Egon Elbre:** Steel wool.

**Mat Ryer:** Steel wool. Oh, yes, please. I like a towel. I went to a hotel - it was a bit fancy - and the towels were all soft, and it's horrible. I want a rough towel. I want it like an elephant rubbing up against a tree, please.

**Jerod Santo:** Matt's take on shower gel was unpopular with 62% of us, including me. I have no problem with shower gel. I do enjoy a nice bar of Irish spring, though. Product placement? No. TMI? Probs. Okay, next up, a bonus opinion from Johnny Boursiquot. I like this one because - well, I like this one.

**Johnny Boursiquot:** \[00:33:14.16\] I've always ended up regretting using a boolean to keep track of data, when I could use a timestamp.

**Mat Ryer:** A timestamp?

**Johnny Boursiquot:** Yeah, exactly.

**Mat Ryer:** Well, not like a string?

**Johnny Boursiquot:** Yes. Rather than storing -- like, for example, is active, or active, or whatever it is... Storing that, and storing a true/false, or one and zero, or whatever it is, in the database.

**Mat Ryer:** You just store the 5th of January, 1971.

**Johnny Boursiquot:** Yes, I store the timestamp. I store activated at, or active at, or whatever, something, because that gives me more information; because I know if there's a real date in there, right, I don't have to keep track of two pieces of information. I know "Oh, it is active", and now let me go find out later on, where do I store it? When was it last activated or even deactivated, right? I can just use one piece of data that communicates both pieces of information to me.

**Mat Ryer:** Oh, I see.

**Johnny Boursiquot:** So yeah.

**Mat Ryer:** That's really interesting.

**Johnny Boursiquot:** Don't use a boolean when a timestamp will do.

**Jerod Santo:** This last one is funny, I think, because - well, okay, it's my opinion, so of course, I think it's funny... But Ian and Chris laughed too, so I'm not merely being biased here... Also, it's meta. Also, it's terribly outdated, because Twitter is no more. Okay, enough of me explaining it. Let's just listen to it.

**Jerod Santo:** So on episode \#192 Ashley Jeffs had what was in my opinion the most unpop of all times. His opinion was that people who vote in Twitter polls are losers. Did you guys hear that one? He says they should get out more. Nobody cares about their opinion and it doesn't matter. Now, he thought that he'd gamed the system. He thought he made a perfectly unpopular opinion, because of course, we take the votes on Twitter... And where are they gonna vote? But reality is stranger than fiction. 71% of Twitter poll-takers agreed that they were indeed losers.

So based on that empirical evidence, I can with confidence state that my unpopular opinion is that people who vote on Twitter polls are winners, and they should tweet more. Everybody cares about your opinion, and it does matter!

**Kris Brandow:** \[laughs\]

**Ian Lopshire:** I feel like that one is going to be unpopular.

**Jerod Santo:** I think it might. \[laughs\]

**Kris Brandow:** I think people are just gonna be in spite just voting that... Like, yeah, that's unpopular, just to -- yeah.

**Jerod Santo:** Well, time will tell. Please follow @GoTimeFM on Twitter and vote your opinion. Do you think you're actually a winner, or a loser?

**Jerod Santo:** Sixty five percent of people who voted on Twitter agreed with me. They're winners. But time was the ultimate truth teller... And I think we can all agree that nobody wins on Twitter. On that note, we now post our polls multiple places. We are still on X as @GoTimeFM, and we're also posting to the Fediverse GoTime@Changelog.social. You know what would be really cool? A dedicated unpopular opinions website where people can post, vote and rank opinions whenever they like. If you build it, we will come. Or at least me. I'd totally be there.
