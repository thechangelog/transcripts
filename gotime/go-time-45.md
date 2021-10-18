**Erik St. Martin:** Alright everybody, welcome back for another episode of GoTime. Today's episode is number 45, and our sponsor for today is Toptal.

On the show today we have myself, Erik St. Martin, Carlisia Pinto is also here - say hello, Carlisia...

**Carlisia Thompson:** Hi, everybody.

**Erik St. Martin:** And Brian Ketelsen...

**Brian Ketelsen:** Hello!

**Erik St. Martin:** And we've actually managed to drag Adam Stacoviak back from behind the curtains. Say hello, Adam.

**Adam Stacoviak:** Hey! It's me.

**Erik St. Martin:** So our guest for today actually wasn't able to make it due to a scheduling conflict, but we had some discussions this morning and decided to do an Ask Me Anything, where we posted in Slack and on Twitter for questions for the hosts and for the producers - which is why Adam got dragged down to the show... So we're just gonna work through a document that we have of questions from everybody.

**Brian Ketelsen:** It's a huge document, too.

**Erik St. Martin:** And if you're listening live right now, feel free to -- Adam's probably watching Twitter, so feel free to ask questions @GoTimeFM on Twitter, and feel free to join us on Slack in the GoTimeFM channel and ask questions there, and we'll try to keep track of any new questions that come in.

**Adam Stacoviak:** What kind of questions?

**Erik St. Martin:** Any kind of questions.

**Adam Stacoviak:** What's off limits?

**Carlisia Thompson:** Well, they can ask and we can choose not to answer.

**Brian Ketelsen:** Yeah, we can choose not to answer, that's fine.

**Adam Stacoviak:** Okay.

**Brian Ketelsen:** It's not an Answer Anything, it's an Ask Anything.

**Carlisia Thompson:** \[laughs\] Yeah...

**Erik St. Martin:** Don't ask anything you wouldn't ask your mother, how's that?

**Carlisia Thompson:** Exactly.

**Brian Ketelsen:** That doesn't limit much...

**Adam Stacoviak:** Play nice.

**Erik St. Martin:** Yeah, so basically... We didn't wanna put anything off-limits. Questions about Go, questions about community, questions about maybe GopherCon, questions about maybe personal lives, hobbies, what we do for jobs... Anything anybody wants to know - it's time to get to know your hosts and producers. So does anybody want to narrate through the list, or do you want me to ask the questions?

**Brian Ketelsen:** Why don't we go through the fun questions in any random order that sounds fun, and go from there? Easy-breezy... I'm port forwarding something right now though, so we can have a little more fun later.

**Adam Stacoviak:** Oh, that sounds like fun.

**Brian Ketelsen:** So much excite!

**Adam Stacoviak:** "I'm port forwarding right now..."

**Erik St. Martin:** Chris Benson in the Slack channel just asked "Why didn't my artificial intelligence machine learning talk get selected for GopherCon?" \[laughter\]

**Adam Stacoviak:** Ooooooh...

**Brian Ketelsen:** I know the answer to that one. Oh wait, I'm gonna be quiet. Never mind... That wouldn't be nice, would it?

**Erik St. Martin:** Actually, I think we could get into that a little bit later, because I do remember seeing a question about how talks are selected. That probably falls in line really well there, and can help answer that question.

I'm just gonna start with the first one on the list, which actually is from a co-worker of mine... Martin Moudy says "What is the weirdest project you have seen written in Go?"

**Brian Ketelsen:** \[laughs\] I have the best answer for this one.

**Erik St. Martin:** Alright, let's hear it.

**Brian Ketelsen:** That's why I was trying to port forward a minute ago... So when I moved into my new house last year (right around this time) I lost the remote to my television. And I am cheap, and lazy, and did not want to get a new television. So I was googling around for interesting things to do, and I just started googling for the model number of my television, and it turns out that there is a home automation interface on the TV that is 100% unsecured over TelNet... And we don't need to get started about being unsecure over TelNet, but there is one - you have to explicitly enable it... It comes shipped off, so I had to turn it on. But once I did turn it on, now I have a TelNet prompt on my television.

\[04:30\] So I hacked up a tiny Go program - it's at [github.com/bketelsen/TV](https://github.com/bketelsen/tv), and using it, you can send commands to my television to turn it on and off, turn the volume up and down and change the input sources. So from my laptop I control my television... And it really is a tiny amount of code, and I was gonna port forward that port on my home router so that everybody could play and turn on the TV and turn the volume up and down... But I just realized the IP address of my TV has changed and I don't know what it is without going out to the television to find it, so we won't play the "Everybody screw up Brian's TV game right now...", but that would have been fun.

**Erik St. Martin:** \[laughs\] You get props for trying.

**Brian Ketelsen:** Right?

**Erik St. Martin:** How about you, Carlisia?

**Carlisia Thompson:** I don't recall anything odd or weird or stupid... I don't know, maybe I just don't pay attention, but I don't recall...

**Erik St. Martin:** So I've got one... I don't know whether I would call it weird, but definitely something I didn't expect to find written in Go. It was a while back, and I think we might have even mentioned it on the show. There was a project called [Fergulator](https://github.com/scottferg/Fergulator), which was a Nintendo emulator written in Go. That was really cool, I didn't expect to see that written in Go, especially so early in Go's life. Now, how about the next one...

**Adam Stacoviak:** I don't have an answer here?

**Erik St. Martin:** Hey, yes... You're familiar with Go projects.

**Adam Stacoviak:** Yeah, I know the Go world a little bit. I was actually really excited to see, and I thought it was a little weird - I didn't expect it, so that's why it's weird, but it's not a weird thing... It's [Rooby](https://github.com/rooby-lang/rooby), the Ruby lang written in Go. I think that's kind of interesting, to take Go and write an object-oriented language on top of it. I just thought that was unexpected, out of left field.

**Carlisia Thompson:** I'll just plus one that, can I? Because I thought the same. And by the way, do you wanna introduce yourself?

**Adam Stacoviak:** Me?

**Carlisia Thompson:** Mm-hm.

**Adam Stacoviak:** Let me see... I'm me.

**Carlisia Thompson:** Your name and who are you, because -- I didn't realize you were gonna be on... Awesome!

**Adam Stacoviak:** Well, for the folks who are listening, I'm usually the person behind the scenes. I'm here every single show. This is episode 45 - I've been here all 45 episodes. It's been a lot of fun. My name's Adam Stacoviak, editor in chief of Changelog. I've been doing this for a while. I started the Changelog back in 2009, I started podcasting back in 2006, so I've kind of been doing this for a bit... And it's a lot of fun.

I like meeting people. I love the hacker community, it's a lot of fun to do this and to do awesome shows like GoTime.

**Erik St. Martin:** And if you happen to be around 3 PM Eastern Time - well, I guess really it's 4-5 PM EST - the after show, Adam usually comes on after we...

**Adam Stacoviak:** Oh, yes... I appear there, too.

**Erik St. Martin:** Yes.

**Adam Stacoviak:** Sometimes.

**Carlisia Thompson:** And Adam will also be at [GopherCon](https://www.gophercon.com).

**Adam Stacoviak:** Yeah, I'll be at GopherCon. I usually have random jobs there... Sometimes I grab the trash \[laughter\], I help out the staff, other times I have a camera in my hand. And sometimes I'm just standing there with a weird face, because I don't know what's going on, but I try... Anyways, Rooby - pretty interesting, written in Go.

**Erik St. Martin:** Alright, what have we got next?

**Carlisia Thompson:** The next question...

**Adam Stacoviak:** Are we going linear down this list?

**Carlisia Thompson:** Why not?

**Adam Stacoviak:** \[08:02\] "Where do each of you put Go lang in two years' time, maybe five years?" So basically, pontificate... Where is Go going, 2-5 years?

**Erik St. Martin:** Yeah, these future visions are always difficult... Right now, it really is the language of the cloud, right? Most distributed systems software is being written in it, all the tooling surrounding that, monitoring and metrics systems are all written in Go... I feel like it's gonna continue to grow there.

We keep seeing a little bit of hints at it on the phone and on embedded devices, but I think that the catalyst has kind of already happened in the distributed systems world. How about you, Brian? You love these things. I think they pinned your tweet on the GoTimeFM Twitter...

**Carlisia Thompson:** Where's Brian?

**Adam Stacoviak:** Brian's doing barbecue.

**Erik St. Martin:** Did we lose him?

**Adam Stacoviak:** He's muted, or something.

**Brian Ketelsen:** That would explain why you guys didn't laugh at the thing I said earlier, because I was muted! \[laughter\]

**Adam Stacoviak:** We'll laugh now. What did you say?

**Brian Ketelsen:** I said that you were the prince of podcasts, the royalty of radio, and the Ocelot of open source.

**Adam Stacoviak:** Whooow, okay... That's pretty interesting.

**Brian Ketelsen:** I thought that was pretty good, because I couldn't think of anything that was royalty that started with an O, and I needed to get open source in there, so you're an Ocelot.

**Adam Stacoviak:** That's good. Yeah, I like that. I dig it.

**Erik St. Martin:** Now you need a new business card.

**Adam Stacoviak:** Had I heard that, I would have laughed.

**Brian Ketelsen:** See?

**Adam Stacoviak:** Yeah, thank you.

**Brian Ketelsen:** You bet. I'm here for you. So I think that Go in two years will continue the trajectory it's on now, but in five years Go will be THE dominant server-side language, taking over the spot of Java. A lot of the really big server-side stuff that you see now, especially in the open source infrastructure bits, things like Kafka and ZooKeeper, they are slowly being replaced by much smaller memory footprint Go applications that are a little bit faster, a little bit easier to run, and significantly easier to deploy, and that trend will continue. So I think in five years definitely Go will own the server-side market. Two years - I don't think the change is gonna be that drastic to see it, but in five I think Go will be on top.

**Adam Stacoviak:** What do you think is perpetuating that?

**Brian Ketelsen:** Single binary deploy... If you've ever tried to administer a [Kafka](https://kafka.apache.org) cluster, or a [ZooKeeper](https://zookeeper.apache.org) cluster, or any of that... I mean, just the whole deploying JVM requires a masters degree in deploying JVMs.

**Adam Stacoviak:** Wow, that's a shame.

**Brian Ketelsen:** And Go is significantly easier to deploy. I honestly think the DevOps movement, the serverless movement - all of those things fit really nicely into a language that has a single binary deploy.

**Adam Stacoviak:** As sort of a flipside to that question - what do you say to somebody who's like "Rust or Go"?

**Brian Ketelsen:** I think it should be Rust AND Go. There are sweet spots for both languages, there's no reason that you have to choose one over the other, and there are places and times for each of them. I really like Rust for extreme memory safety, but I also think that Rust isn't the language to choose if you want to give it to a team of a hundred people and have them build some awesome cloud project. Rust is for smaller, really memory-sensitive apps.

**Erik St. Martin:** I was gonna add to that too, that I think a lot of it too is that these pieces of software for distributed systems are often complex and large, and a lot of moving parts, so I think that having a language that's much easier to fit the whole language in your head at one time I think really helps people be able to be productive writing this type of software. How about you, Carlisia? What's your vision for the next 2-5 years?

**Carlisia Thompson:** \[12:11\] I agree completely with Brian, even with the timeframe. I think in five years Go will take over a lot of space that's taken up by Java right now, it will become more enterprisy... And I say this because I think over the past years, independently of Go, it just has become easier to develop things in components and in a modular way, so it will be natural to just replace pieces of systems with Go.

I don't think Go is going to be the homogeneous, THE language that's going to be used - that will never happen, no matter what the language is, because it doesn't even make sense - but I think it will take up chunks and enough to be the dominant language, because of all the attributes that Go has.

Now, in the next two years what I see happening, with [Steve Francia](https://twitter.com/spf13) coming on board to be the sort of like product manager - he has a different title, but that's one idea of what he does - and the Development Working Group coming together, I think these next four years we're going to see a lot of changes in terms of making Go easier to onboard people. I don't know this for a fact, but I expect that the website is going to be redone and be friendlier, I expect more training material, I expect training material for different levels of developers - developers that are brand new programmers, developers who are experienced programmers but wanna learn Go... So that's what I expect is gonna happen in the next two years. And once that is in place, the adoption is gonna be exponential, even more than it is now.

**Erik St. Martin:** How about you, Adam? Do you wanna take a stab at this?

**Adam Stacoviak:** It's above my paygrade. \[laughter\]

**Erik St. Martin:** Alright, what's our next question?

**Adam Stacoviak:** That was Martin T., I'm assuming, von-SomethingLong, a cool name, who asked that question, and Martin Moudy who asked the previous question, so that was good. If we're going linear, I don't know who asked this next one; there's no name attached to that. Do you wanna camp there or do you wanna skip it?

**Brian Ketelsen:** Let's skip the GopherCon question... We can do those later, because there's a handful of them. And that was also by Martin T. von Butler.

**Adam Stacoviak:** Yes, that's a cool name. I didn't see the von Butler until I was sort of talking, so that's why I was all jacked up, but... That's how it works. Casey Wilson is next up though... Thank you, Casey, for submitting this question. This was on Twitter, is that right? This is to you, Erik?

**Erik St. Martin:** This was on Slack. I think we were just chatting back and forth...

**Adam Stacoviak:** Gotcha. I'm gonna summarize it, basically... "Bringing up the [Gopher Review Channel](https://gophers.slack.com/messages/goreviews/) would be cool. I think not a lot know that you can get full-on code reviews/help. Also how Johnny was talking about naming conventions and using more descriptive names as you get further away from the declarative...", then of course barbecue... They just wanna talk about barbecue. \[laughter\]

So let's start with the first one, which was the Gopher Review Channel - what is this?

**Erik St. Martin:** I guess we'll start there... That's more of an awareness thing. So on the Gophers Slack there is a Reviews Channel with lots of people who just camp out there and are happy to do code reviews for you. So definitely reach out with problems and questions there, and send them your code. Lots of people love to provide feedback... So yeah, that's an awareness thing more than it is a question for everybody.

\[16:08\] And then [Johnny Boursiquot](https://twitter.com/jboursiquot) was talking about naming conventions... The other day we were talking about whether or not we should have one-letter variable names and things, and those are some of the topics we discussed in those few channels. Basically, this was like the closer you get to the scope where you define a variable, the less descriptive they can be.

**Brian Ketelsen:** Yeah, that's actually in the Go styleguide, by the way.

**Erik St. Martin:** Oh yeah, that's right, it is. And then the third part of it was more on a personal note, and that was barbecue, "What is your preferred [cut of meat](http://www.chicagomeat.com/wp-content/uploads/2014/12/cow1.png) and wood type for smoking? Just sayin'..."

**Brian Ketelsen:** That's a good one.

**Erik St. Martin:** Who wants to go first?

**Brian Ketelsen:** I'll start with the meat - my preferred cut of meat these days is a sirloin roast...

**Erik St. Martin:** Nice.

**Brian Ketelsen:** And I found them at Costco... They are roughly a third of the price of prime rib, and maybe 90% of the awesome flavor of prime rib. So for a ridiculously lower amount, you can almost get prime rib. In fact, I'm cooking one tomorrow... It's like a eight or nine-pound roast, and I think I paid $27 for it. Crazy cheap, and I'm gonna be smoking that with pecan wood, because that's the wood I have. But generally, when I'm doing beef I like oak.

**Adam Stacoviak:** What is it about the trees...? Or the wood, I guess, because they're no longer trees, they're now wood, which is pretty funny... What is it about the wood type that brings out flavor?

**Erik St. Martin:** Each one of them kind of has their own unique flavor and how potent they are. Oak is a much more bold flavor, hickory has a much sweeter taste to it, pecan is similar, except probably milder...

**Brian Ketelsen:** It's mildly sweet, yeah...

**Erik St. Martin:** Yeah. Mesquite is very, very potent...

**Brian Ketelsen:** Strong... It's a little bit bitter.

**Erik St. Martin:** But most people usually use woods that are local to them. If you go to Texas, it's a lot of post oak, and things like that.

**Brian Ketelsen:** And mesquite.

**Adam Stacoviak:** That is so funny... There's literally a place here in Houston - and a street - called Post Oak.

**Erik St. Martin:** And then Georgia uses a lot of peach tree and stuff like that. So a lot of people use what's nearby.

**Brian Ketelsen:** And that availability of wood shapes the regional flavors, too. In Texas, the regional flavors are sharper because of the woods that are available and in South Carolina they're more sweet because of the woods that are available.

**Adam Stacoviak:** So that's why when you travel food tastes different, especially if it's smoked, in this case... Or at least barbecue tastes different. Because when you come to Texas, you come for steaks and you come for barbecue. There's no other reason to come.

**Brian Ketelsen:** It's a different story, yup.

**Erik St. Martin:** So I think we can probably make this question more generic to also the type you like to eat, so in case anybody here does not barbecue themselves...

**Brian Ketelsen:** What's your favorite cuts of meat and woods, Erik?

**Erik St. Martin:** I'm gonna have to go with brisket, and I think that's just because that's like the king of barbecue... You can perfect that, you are--

**Adam Stacoviak:** Burnt ends, \[unintelligible 00:19:26.22\]

**Brian Ketelsen:** Erik's brisket is to die for. Some of the best I've ever, ever had.

**Erik St. Martin:** I need to do another one, but yeah, definitely brisket. I like hickory a lot. I probably cook the most with hickory. Oak's good... I've got some black cherry that I'll throw in once in a while too, but for the most part it's probably hickory. How about you, Carlisia? Do you like eating barbecue?

**Carlisia Thompson:** \[19:55\] I don't eat much meat these days, but I did in the past... Brazilian barbecue, Rodizio, that kind of thing. I'm not as knowledgeable as you, especially when it comes to American cuts of meat, because in Brazil some of the cuts of meat are different.

**Adam Stacoviak:** Educate us, tell us...

**Carlisia Thompson:** I don't know enough to -- I don't even know how you call stuff here...

**Adam Stacoviak:** So they're just called different, right?

**Carlisia Thompson:** I just know that, because when Brazilians want to barbecue and they want a specific kind of meat, they go to the Brazilian meat store, because they're gonna cut the meat that way, and you don't get that cut of meat.

**Adam Stacoviak:** We have a couple places around here that are Brazilian, and when you order it's different than a traditional steakhouse, for example.

**Carlisia Thompson:** Yeah, yeah. And I'm talking about Brazilian in the U.S., outside of Brazil. But when I did eat a lot of meat and I'd go to Brazilian Rodizios, I remember I like a lot the hump - do you know what I mean? Like, some cows...

**Adam Stacoviak:** Maybe it was rump... Was it rump? Rump roast?

**Carlisia Thompson:** No, the hump, like on the back of the animal.

**Adam Stacoviak:** Really? There's meat back there?

**Carlisia Thompson:** Yeah, it's very fatty, it's very most, and whatever marinade you put on it, it holds it up pretty well. For example, I like brisket, but I don't think it tastes right; every brisket tastes the same. The texture changes, some are better than others, but...

**Erik St. Martin:** Yeah, so the difficulty -- and this is where you get into animal anatomy... So up near the back there aren't as much working muscles, so that's where the prime rib and all your ribeyes and all those good steaks come from. But in the cow, the brisket is in the breast area, so it's a really tough muscle, a working muscle, for holding -- I think they say that like 60% of the weight of the cow is supported by that, so it's really, really tough...

**Adam Stacoviak:** Their heads... Their heads are huge, you know?

**Erik St. Martin:** Yeah... So I think that's one of the reasons that I like that cut so much, is it's so tough... There's like this perfect balance between -- if it's not cooked enough, it doesn't break down and it doesn't become tender, and it's just tough and bland, and if you cook it too far, it becomes more like roast beef, just shreds... So trying to get that perfect... Yeah.

**Adam Stacoviak:** Is that where the term fatback came from?

**Brian Ketelsen:** Could be.

**Carlisia Thompson:** So I just looked up the cuts of meat that I was talking about. In Portuguese it's called "cupim", and in English it's called "hump steak".

**Brian Ketelsen:** I've never heard of it, that's awesome.

**Adam Stacoviak:** Me neither.

**Brian Ketelsen:** I'm gonna write it down, because I want some now.

**Carlisia Thompson:** If you go to a Brazilian churrascaria, you need to ask for this.

**Adam Stacoviak:** Wow, we are getting educated here, man...

**Carlisia Thompson:** It's amazing.

**Brian Ketelsen:** You know, there's a really good Brazilian steakhouse in Denver that we might need to go to, Carlisia, so you can educate us on all of this delicious meat.

**Carlisia Thompson:** Oh, let's do it.

**Adam Stacoviak:** Do you know the name, by any chance?

**Brian Ketelsen:** I don't remember the name, I just remember the location. We'll figure it out.

**Erik St. Martin:** Carlisia knows a lot of cool stuff...

**Adam Stacoviak:** She does!

**Erik St. Martin:** I was out in San Diego for work and I met up with her, and we went out to dinner to an Ethiopian restaurant... I'd never had it before?

**Brian Ketelsen:** What did you eat, fried dirt?

**Adam Stacoviak:** Fried dirt... \[laughter\]

**Erik St. Martin:** So one of the coolest parts about eating that way was -- one of the things that I love about barbecue and things like that is that it brings people together, having to cook out and having people over... But the way people eat is awesome. It's like, you ordered everything, and everything came out on one plate in the middle of the table. And I don't know what you call the bread that comes rolled up like that...

**Carlisia Thompson:** It's called "injera".

**Erik St. Martin:** \[24:01\] Yeah... It's almost like pancake material, spongy, and you tear off pieces and you kind of pinch your food off in it and eat collectively...

**Adam Stacoviak:** What?!

**Erik St. Martin:** Yeah...

**Adam Stacoviak:** That sounds cool.

**Carlisia Thompson:** Ethiopian food is my favorite food.

**Brian Ketelsen:** It's good stuff.

**Carlisia Thompson:** If I'm going to go for a day and you'll say "You can only have one meal that day, but you can choose whatever meal", it's gonna be Ethiopian food.

**Erik St. Martin:** Culturally, I thought that that was really cool, because that really brings everybody together. It's not like "I get my plate and then I go off and eat it", everybody is sitting around that plate; everybody's food is in the same place.

**Adam Stacoviak:** I'm gonna jump in here and say we have a ton of questions, and a finite amount of time...

**Erik St. Martin:** Yes, let's do this...

**Adam Stacoviak:** That was a good subject though, I liked that.

**Brian Ketelsen:** Well, why don't we take a break for our sponsor? Why don't we hit our first sponsor break while we're here, since we've gotten everybody hungry...

**Adam Stacoviak:** Brian, that's a great idea, I love it.

**Carlisia Thompson:** I'm starving... \[laughs\]

**Adam Stacoviak:** Let's break for some food.

**Carlisia Thompson:** Oh, gosh...

**Brian Ketelsen:** Today's show is brought to you by barbecue... And Toptal.

**Break:** \[25:08\]

**Erik St. Martin:** Alright, and we are back doing our AMA. \[laughter\] We went off on a tangent there with barbecue and food, and now that I'm hungry, what else do we have for questions? Here we go... Out next question is from Wade Arnold, and this came from Twitter. He says, "What aspects of the language have made it so popular for open source projects? Think of all the large codebases for complex systems in Go." I think we touched on this a little bit when we talked about the future of Go... I think that the single binary deploy, basically the language not being as complex for people to understand makes for more manageable codebases... Did anybody have any additional...?

**Brian Ketelsen:** I think there's a huge reason for me, and especially in terms of the large, complex codebases, it's the readability. Go was very specifically built to be read, more so than it was built to be written. In a really big codebase you spend far more time reading code that you do writing code. So having a programming language that optimizes for developer productivity by allowing you to easily read the code, I think Go trumps all other languages in terms of readability. It's so easy to see what's going on in Go, compared to other languages.

**Carlisia Thompson:** Yeah, I was thinking exactly that. I was going to say I don't really know, and the only thing I can think about is the readability factor, which is amazing. And you don't understand what it is until you're really working with it for a while.

**Adam Stacoviak:** It's interesting to say though that in a large codebase you would read a lot more than you write, because technically somebody had to write all that, but reading -- it would totally make sense, especially if you didn't write it... You're probably gonna read it, right? Because you can't write what you didn't write; you've gotta read it.

**Carlisia Thompson:** I totally agree with that, you read so much more... Even the code that I wrote I keep reading, to figure out "Okay, what is this doing again?" There's a lot more reading, I think.

**Adam Stacoviak:** Yeah, like a book... Code is like a book, y'all... Read it.

**Brian Ketelsen:** ...y'all.

**Erik St. Martin:** So our next question came from Casey Wilson on the GoTime FM Slack channel... It says "Something else... I'd like to see your guys' development environment. What does your focused mode look like?"

**Brian Ketelsen:** \[28:05\] That's a good question.

**Adam Stacoviak:** What does "focused mode" mean?

**Erik St. Martin:** I think like super productive, in the zone programming... This is what I'm gonna take that as.

**Adam Stacoviak:** Okay... I wasn't sure if it was like a turn for the IDE, or an editor you might use... I was like, "I don't know about no focused mode."

**Erik St. Martin:** So I'll start first... Typically I work in Vim and I use the i3 window manager in Linux. So typically I have kind of i3 configured where I just have Vim taking up most of the window, and another window to the side that's my shell, and this is what I do. I'm perfectly happy in just a command line...

**Brian Ketelsen:** Yeah, for a focused mode mine's exactly the same. If I know I have some dedicated time to really sit down and focus, I'm right with you in i3... Usually on a laptop though, so it would be one i3 window per thing. So I'll have an i3 window for my editor, an i3 window for my shell, an i3 window for a browser, and I just pop back and forth between them; I'm using the quick i3 command keys...

**Erik St. Martin:** Now, I should also add, when I'm in super focused mode, I'm a big music person, so I love to jam out to music while I'm coding. My wife will come home and that's when she knows I'm in the zone, because music will just be like blaring in the house. How about you, Carlisia?

**Carlisia Thompson:** I'm very volatile with editors, I've come to realize... Sometimes I go for stretches of times when I'm using Vim, and then I run into a roadblock with Vim and I switch to -- my go-to switch to was Atom, and then I recently changed to VS Code, which I really like, especially for the ability to navigate all the way through the terrain of function calls... But I haven't set it up yet. So I don't have any shortcuts, and there is a lot you can do.

We're actually going to have a show with the woman who developed the Go plugin for VS Code, in a couple weeks, I think. That's gonna be pretty awesome. I want her to give us a tutorial. So that's one thing...

Another part of my flow is the \[unintelligible 00:30:28.00\] that I can just move windows around with a couple shortcuts. I can't live without that.

I need to have headphones on my ears. I don't care if there is music playing... Sometimes I don't realize if music's playing or not...

**Adam Stacoviak:** Really, like \[unintelligible 00:30:41.06\] That's funny.

**Carlisia Thompson:** Yeah, it's a comfort thing. It doesn't matter if it's over the ear, if it's my Apple headphone... I need to have them on. Sometimes they're not plugged, they're hanging on my side, because I move around, I unplug, and then I'm like "Oh, it's unplugged..."

**Adam Stacoviak:** That is so funny.

**Carlisia Thompson:** \[laughs\] Yeah. But I do listen to music... House music is very good for me for coding.

**Adam Stacoviak:** Do you use Spotify by any chance? Or do you curate your own list?

**Carlisia Thompson:** Yeah, Spotify.

**Adam Stacoviak:** I've gotten into [brain food](https://play.spotify.com/user/spotify/playlist/37i9dQZF1DWXLeA8Omikj7?play=true&utm_source=open.spotify.com&utm_medium=open), personally... For me, (on the music front, at least) I will listen to some type of electronic music. For a while I was just listening to electroNOW, but then I found myself getting upset, and I'm like "Why am I getting upset? What's angering me?", and it's the music, because it's too repetitive and it's too beaty. So I switched over to brain food; it's the same thing, but a bit more... It's kind of like sleep music, but work music mixed, and it's kind of relaxing but yet motivating. I don't know how I get it, but... Yeah, I'm with you though. Some sort of house music is kind of cool too, because you can have like a "m-tz m-tz m-tz..." or something like that. I'm assuming - is that how house music goes, or am I wrong? Want me to do that again? "m-tz m-tz m-tz..."

**Brian Ketelsen:** "pum-chick pum-chick pum-chick."

**Adam Stacoviak:** Maybe it's like this.

**Erik St. Martin:** \[32:01\] That reminds me... Do you guys remember the Strong Bad episodes, the little cartoon online? The one where he answers an email, and it's something about...

**Adam Stacoviak:** You lost me.

**Erik St. Martin:** I'll look it up, it's hilarious... He starts [imitating how techno music goes](https://www.youtube.com/watch?v=O4gqsuww6lw)..

**Adam Stacoviak:** That's so funny though, Carlisia with the headphones... Like, even if there's no music, you've gotta have them on.

**Carlisia Thompson:** I gotta have them on.

**Adam Stacoviak:** I loved hearing that.

**Carlisia Thompson:** It's like "Concentration mode. Headphones go on." \[laughs\]

**Adam Stacoviak:** Wow...

**Brian Ketelsen:** I think that's pretty cool.

**Carlisia Thompson:** And also, talking about things that I don't have - I'm very aggressive about turning off notifications. I don't get mail notifications, I don't get Twitter notifications... If I'm looking at it, it's because I took the time to go look at it. So it's very important for me not to have stuff popping up all over the place.

**Brian Ketelsen:** Nice.

**Adam Stacoviak:** I'm with you on that, for sure.

**Erik St. Martin:** So Adam, what's your focused mode look like? And then I have a question to add to this, that kind of came up in this discussion.

**Adam Stacoviak:** My focused mode - it kind of depends what I'm doing... I can't compare it to coding in Go. There's lots of times where I'm writing code, there's lots of times where I'm in Sketch, designing something, there's lots of times when I'm in Adobe Audition editing something, or face in front of a mic recording something, or in front of something else, writing something. I often write a lot of stuff for the sponsors, intro stuff for us... All sorts of things, so it kind of depends.

But focused mode for me is definitely, like Carlisia said, turning off notifications... Basically just closing down Slack. I don't have email notifications, I silence my phone... I have stopped answering the phone, because basically I get nothing but solicitor phone calls. If I get a phone call, it's nine times (at least) -- okay, I'll say maybe ten times out of ten a solicitor. So focused mode for me is like turning that thing off. I almost don't even use the phone, except for me to call my wife or a doctor or something like that. I don't use the phone part of the phone.

But music, though? I'm a little bit there with Carlisia - I've gotta have some music on. If I'm doing something that requires me to get into flow, to get into the flow of doing it and doing it well, I find myself struggling if I don't have music going on. So if I feel myself kind of dragging, I'm like "What's wrong? Why am I not in the groove?", it's because I haven't turned on my music yet. So I've learned painlessly over time just to, at some point, turn on some music... But I don't always get to do it. If I'm editing, or something like that, I can't have Spotify or music going on AND be editing a podcast, because it's sort of like counter-intuitive to have two things of audio competing... So that's why I catch myself a lot not having audio going on.

So that's kind of focused mode for me - notifications off (I do not get email notifications), close things that I'm not paying attention to, and I'm a big fan of focus, and that's what I do.

**Erik St. Martin:** Yeah, the music thing helps a lot, too. I have ADHD too, so it's hard to get focused sometimes, and sometimes just kind of like getting in the groove of the music is enough to set you on track. So the question I had to add to all of this that sort of came up was styles of music, because this is actually really interesting... We did this experiment in a social gathering on one of my work trips, and it's actually really interesting to hear what everybody likes to listen to for music, what their favorite type of music is.

The weird thing is is there's usually always something, and EDM. Almost everybody's like, "Death metal and EDM."

**Adam Stacoviak:** Yeah... I like breakbeats a lot, I like the dubstep stuff - I like that kind of stuff, but then I will easily go and switch on Guns 'n Roses. I'm a huge fan of their first album... I think it's Appetite for Destruction. So I'll easily go back and just turn on Paradise City and start doing my moves... I can't help it. I'm a metal rock kind of guy, classic rock - Led Zeppelin, Kansas, Styx... I'm speaking Brian's love language here.

**Brian Ketelsen:** \[36:21\] You're close, but not quite...

**Adam Stacoviak:** Who's your number one? It's my number one too, but I haven't said their name yet.

**Brian Ketelsen:** Dream Theater.

**Adam Stacoviak:** Dream Theater, I knew it.

**Brian Ketelsen:** There is no other band.

**Adam Stacoviak:** There is no other band. That is the best. If you haven't listened to Dream Theater in a while, it's the best. Did you all know -- this is a side topic, and I'm sorry to take it there... But [Katrina Owen](https://twitter.com/kytrinyx) - her husband (or boyfriend, I'm not sure which it is) is a phenomenal drummer... Did you all know that?

**Carlisia Thompson:** No, I did not know that.

**Adam Stacoviak:** DrumQuake... Look up "DrumQuake" on YouTube; if you look at that video, you will be amazed, amazed... This guy is phenomenal. He's got a great resume, and he could totally hang with Dream Theater... That's how good he is.

**Brian Ketelsen:** That's big.

**Adam Stacoviak:** Yeah, it's big.

**Erik St. Martin:** Alright, how about you, Brian?

**Brian Ketelsen:** We just did mine. Dream Theater. And honestly, it's probably the same reason that people like EDM. For me it's the complex beats, complex rhythms, complex key signatures... I need something to distract a part of my brain so I can work, and that's what it boils down to for me. I have to distract some other thing, so that I can get work done. It's probably an ADD thing.

**Carlisia Thompson:** For me, I'm not super educated as far as music goes and styles, and I'm sure that there's styles out there that I would love, but I just haven't looked yet. I don't geek out on music so much, just because I wanna be practical... It's like, "Oh, this works... I don't have time." But I cannot listen to music that has lyrics. I love Guns 'n Roses, but it won't work for me if I'm coding, because I'll be paying attention to the lyrics, it sounds so nice, so I get distracted. So what I like to listen to is house music, heavy metal - Black Sabbath, Sepultura, things like that.

**Brian Ketelsen:** Nice...

**Adam Stacoviak:** \[unintelligible 00:38:19.22\] I mean, who doesn't love that band...? That to me -- they're the first one \[unintelligible 00:38:31.26\] Their first album?

**Carlisia Thompson:** I don't know...

**Adam Stacoviak:** It's amazing! It's death metal kind of stuff, or at least the early '90s version of death metal, I guess... It's amazing. I would totally rock out to that.

**Carlisia Thompson:** So now, if I'm doing something super repetitive, then it's the opposite... It's like, "I wanna listen to a podcast", because I don't wanna pay attention to what's happening... \[laughs\] It's so boring, and I don't wanna pay attention. I can do it, and then I want my brain to be out of focus from what I'm doing, and I'll listen to a podcast like Changelog, or something like that.

**Adam Stacoviak:** Dropping links in the chat there... "Arise", that's the album there.

**Carlisia Thompson:** Nice...

**Brian Ketelsen:** Nice...

**Adam Stacoviak:** That's like album one or two of theirs... It may be album number two. Phenomenal.

**Brian Ketelsen:** If I hadn't shaved off all my hair, I'd be headbangin' right now.

**Adam Stacoviak:** I mean, I wore the T-shirt... I was so young though when this came out... I think I might have been like 12, maybe 13. Sepultura. Nice.

**Erik St. Martin:** So my favorite music - I think I could take an entire episode. I like to think that I have bipolar music disorder... I listen to everything, and I think it's because my dad was a DJ growing up, so I always got used to listening to everything. I get bored with a style, so usually I'll go on several day kicks, or like a week of listening to some type of music. I listened to everything; I listened to rock, like modern bands - Five Finger Death Punch, Mudvayne... Stuff like that. I listened to softer stuff like 3 Doors Down, I listened to older stuff, I love Guns 'n Roses... I'll jam out to Madonna and Whitney Houston, I don't care.

**Adam Stacoviak:** \[40:16\] Nice.

**Erik St. Martin:** I like hip-hop. EDM - there's certain styles I like and some I don't. I like dubstep, I love breakbeats... Recently a little country, but that's still a little new for me. I love late '80s early '90s freestyle music; that was kind of like the precursor to techno. Yeah, I listen to just about everything.

**Adam Stacoviak:** It sounds like we all have similar tastes in music and we didn't even know it... To some degree.

**Brian Ketelsen:** I would say so, yeah.

**Erik St. Martin:** Is that an age thing? Is that a career thing?

**Adam Stacoviak:** I don't know... Could be an age thing.

**Carlisia Thompson:** We need to have a party!

**Adam Stacoviak:** I'd be surprised if I met a 20-year-old who knew Sepultura...

**Carlisia Thompson:** Yeah, me too.

**Adam Stacoviak:** And that's not ageism, that's just truth. They're just an older band, I don't even think they're popular anymore... And unless you knew somebody who turned you on to them, you probably wouldn't have heard of them, because they're kind of... I would say this kind of edge, to me. You'd hear about Guns 'n Roses, for sure, because they're sort of mainstream, but Sepultura was more...

**Carlisia Thompson:** I am super surprised you know Sepultura. I did not expect that.

**Adam Stacoviak:** Oh yeah, for sure. Love it. There's some bands that I love that I've forgotten, that if I heard, I'd tell you... We probably listen to the same music. Sacred Reich - phenomenal music there, as well... Lots of good stuff.

**Erik St. Martin:** Alright... You guys ready to jump into some more stuff and maybe do some Go questions? It's funny, Kyle on the GoTime channel says some of the people that are listening for the first time are like, "Is this a Go podcast?" \[laughter\]

**Adam Stacoviak:** It is, it is... It's a unique episode... It's episode 45, by the way, so if you want to go back in the backlog, do that. You'll find some awesome stuff.

**Erik St. Martin:** We are improvising. Our guest for today had some scheduling conflicts and could not make it, so we are improvising and making this episode a "get to know the hosts" episode

**Adam Stacoviak:** That's right.

**Erik St. Martin:** So here is a Go-related question from Joshua Smith on Twitter - he says "What are your thoughts on Go as a tooling language for sysadmin/ops people? What resources do you recommend for them?" Anybody wanna take this?

**Brian Ketelsen:** In terms of resources to be recommended for sysadmin and ops people, I think everything that you need as a sysadmin is in the standard library, which is one of the reasons that so many ops people like Go, especially the static compilation, too. Sysadmins in general have been using things like Perl and Ruby and Python to get those jobs done, but when you can use Go and statically compile a binary and just drop it on a bunch of machines and get work done, that's one less thing that you have to install somewhere else.

But really, in terms of resources, everything you need is in the standard library to get sysadmin work done, and it's fast.

**Erik St. Martin:** Yeah, I'd agree. You don't need to install any external modules or libraries, things like that. When you make a tool, you can pass it around, just the binary; you don't have to worry about each host having the proper version of Ruby or Python, and I write modules installed... That can be a lot of overhead. Or Node - there are some specific tools that are written in Node, too.

**Brian Ketelsen:** Why?

**Erik St. Martin:** So yeah, it's just... Copy a binary, and done.

**Brian Ketelsen:** Wait, wait... Back the truck up. Why would anybody write sysadmin tools in Node? I'm not hating on Node, but seriously... Why would you do that?

**Erik St. Martin:** It's the language you use, so it's the language you use, right?

**Brian Ketelsen:** Oh my god... There isn't a nail in the sysadmin world that looks like that. That hammer is not built. \[laughter\] Don't get me started.

**Adam Stacoviak:** \[44:00\] Go, go Brian! Go!

**Brian Ketelsen:** Don't encourage the boy...

**Erik St. Martin:** So our next question is "How do you do a code review? Do you have a checklist, a recipe or a wiki for reviews?"

**Brian Ketelsen:** There is an awesome code review guideline that I'm pulling up right now, on the wiki code review comment.

**Adam Stacoviak:** That's two questions from Martin. This is the second question... Nice.

**Brian Ketelsen:** Let me see if I can find this...

**Erik St. Martin:** So while you're looking for that, I'll answer.

**Brian Ketelsen:** Okay.

**Erik St. Martin:** I like to have at least two people review, a fresh pair of eyes... Hopefully one is at least familiar with the domain, which... Those people usually, because they're not trying to learn the domain of what you're doing, are typically looking for style and things like code correctness, and I like to have somebody who's not familiar with the domain, because then they make me question my implementation... Like, "Is this the right route? Did I even need to build this?" and things like that. Often, you get too close to the problem.

There's some cool tools too, like ReviewDog, which can automatically do some stuff. There's the `gometalinter` that can catch a lot of stuff as far as stylistic things, idiomatic Go.

**Brian Ketelsen:** I hate relying on those automated tools though, because they don't bring any domain knowledge, and they don't bring any logic or reason to the code review. I think they should be part of your CI system. You shouldn't be able to just paste sloppy code into an editor and expect that to go to production, but there has to be a human looking at that code and saying "You know, it makes zero sense to allocate this variable 57 times, when you could have done it outside the loop." And those are things that the linters don't always catch.

**Carlisia Thompson:** Oh, absolutely... You should not rely on that solely.

**Adam Stacoviak:** On that note, you've got this library that's pretty popular in JavaScript right now, called Prettier, and I think that's kind of what the purpose of that is. It's basically like, you write sloppy code and it cleans it up for you... So you're against that style of programming?

**Brian Ketelsen:** I'm not against any style of code review tools that reduce the ugliness of your code and reduce computer catchable errors, I'm just saying that that should be the first preliminary step. There should be a human behind that, actually looking at the code nicely. Just counting on `govet` or on the `gometalinter` isn't enough.

**Erik St. Martin:** Anybody else have anything they wanna throw in there? Or next question...

**Adam Stacoviak:** I've got nothing.

**Carlisia Thompson:** No, me neither.

**Erik St. Martin:** Alright, next question is from Daniel Morgan on the Slack channel. He says "What's the silver bullet for impostor syndrome?" And even in his question he noted \[unintelligible 00:46:45.20\]

**Adam Stacoviak:** I've got an answer for you... Own it! Just be the impostor, own it.

**Brian Ketelsen:** That's right.

**Carlisia Thompson:** Absolutely. That's exactly it - just do it. And if you need to take it down a notch from the thing that you really wanna do, take it down a notch, but just go ahead and do it, because when you do it, you'll figure out it's not as painful as you thought.

**Brian Ketelsen:** Yeah, I agree. Put yourself out there. Everybody else knows just as little as you do, it's okay. And I think -- I don't remember where I saw it... I'm pretty sure it was on Twitter this morning - somebody said, very specifically, "Hey, you admit what you don't know, and own what you do." It was somebody probably talking at CRAFT Conference today, because that was one of the larger themes of Twitter this morning.

I think that makes wonderful sense - admit what you don't know, and own what you do.

**Adam Stacoviak:** You know, the thing too is people fear that kind of stuff. I'm there too, but you just can't live in fear of judgment from other people, and it's so easy to say that and not live it, but that truly is the way out of impostor syndrome. It's like, care about how people feel about you, I guess, but don't make it so important to you that you become paralyzed to do something. Don't let fear of the crowd or fear of the impression of anybody pull you down. Just bypass it.

**Erik St. Martin:** \[48:05\] So I happened to see a tweet last night too, and [it was funny](https://twitter.com/d12/status/857417347224809473). The Hip-Hop group D12 actually tweeted this.

**Adam Stacoviak:** What...?

**Erik St. Martin:** It' s a clip of Gary Vaynerchuk - I love that man; he's such a motivational guy - and part of his thing, he kind of talks about the movie 8 Mile, with Eminem. He's like what he figures out and what everybody should figure out is that if you own the things that you're not good at and you just put them out there, there's nothing left, and then you can spend your time on the offense, rather than the defense.

**Adam Stacoviak:** That's so true. When he won that battle by saying, "Here's all the things you might say about me and here's how I'm twisting it back on you", and he won the battle.

**Carlisia Thompson:** Yeah. And Eminem in general, his music - it's all about owning it. Just be authentic and know that you have a value. I love Eminem. \[laughs\]

**Erik St. Martin:** I think it's something you have to remind yourself of almost every day, too. The view that you see of people from the outside is not how they feel about themselves. You might hear us on the podcast and we may seem very outgoing and all these things, but it's a role we play, right? So behind the scenes...

**Adam Stacoviak:** We're all playing games here, okay?

**Carlisia Thompson:** We are all faking it... \[laughs\]

**Brian Ketelsen:** It's a mask.

**Erik St. Martin:** Yeah, we're not all as confident as we may seem.

**Carlisia Thompson:** Every Thursday I hang up and go cry in the corner. \[laughter\]

**Brian Ketelsen:** That reminds me very specifically... Somebody asked the question, "We would love to watch you code real time. Could you live-stream some coding?" and the first thing I thought was "Why in the sweet name of anybody would you wanna watch me fumbling around while writing code?" And that's impostor syndrome; I'll own it. It's true.

**Erik St. Martin:** I'm terrible about it, and I'll fully admit... This show is actually me forcing myself to put myself out there and make mistakes, to say things wrong. It took me a while to even think about wanting to do this show, and I've become more and more comfortable with it, like "Hey, the world's not over if you say something wrong." So yeah, I think you just gotta own that fear, put yourself out there.

Anybody who's willing to take those mistakes that you have and turn them against you is not worth your time anyway, so who cares what they think?

**Adam Stacoviak:** Yeah, that's the truth.

**Brian Ketelsen:** A part of that is growing up and accepting constructively meant criticism or correction, too. When you leave your ego at the door, it's easy for you to accept somebody saying, "You really shouldn't have used a pointer there" or "You forgot the mutex", and that's perfectly acceptable for you to accept that correction without it being a sign of your incompetence. And learning that difference is harder than you would imagine.

**Erik St. Martin:** The next one is kind of a fun one, and I think it evolves from maybe a question that Scott Mansfield asked... It's "What emoji represents you best and why?" I'll start... So I added an emoji early on in the Slack; the character is Roz from Monsters Inc.

**Brian Ketelsen:** "Always watching, Wazowski."

**Erik St. Martin:** "Always watching..." and I think that's because I'm usually around; I watch Twitter, I watch Slack, but I'm not always actively engaged... I'm just watching. Anybody else?

**Adam Stacoviak:** So you're a lurker... Self-professed. \[laughter\] Now we know.

**Carlisia Thompson:** Erik is totally a lurker. His Twitter behavior is very unique.

**Adam Stacoviak:** I always knew it...

**Erik St. Martin:** But part of that is impostor syndrome, right? It's like, "Should I really say this?"

**Brian Ketelsen:** I'm gonna take the easy way out and say that the barbecue gopher emoji is mine, because it's so true... And if I'm not coding, I'm barbecuing.

**Erik St. Martin:** I was gonna use that one, but I felt that was too obvious.

**Brian Ketelsen:** \[52:02\] It is, and I'm just totally copping out on that, sorry.

**Adam Stacoviak:** There's a cop-out, it's pretty easy... Okay, so which one LEAST best describes you? Is that how you say that?

**Brian Ketelsen:** Yeah, that's probably good.

**Adam Stacoviak:** Least best, the opposite...

**Brian Ketelsen:** The party parrot \[unintelligible 00:52:17.05\] I hate that party parrot!

**Adam Stacoviak:** I'm not sure what it represents... What does it represent?

**Brian Ketelsen:** I don't know, but it's just obnoxious. It makes me wanna have a seizure.

**Carlisia Thompson:** For me, I can't pick just one; I have to pick two, because it'll have to be the screaming one, or the laughing one... The one that has tears in the eyes, because most of the times that's where I am. I'm either screaming, or laughing, cracking up.

**Adam Stacoviak:** If I had to pick one... In our Changelog Slack we actually have some custom ones. My wife put my face in there, so technically that would be the best one...

**Brian Ketelsen:** Oh, come on...

**Adam Stacoviak:** But if I'm looking at my frequently used list, sadly I like to wink a lot and thumbs up things... But I would say the one that represents me best is the 100 with two lines, because I'm down, always. I'm excited.

**Brian Ketelsen:** This is true.

**Adam Stacoviak:** I'd say at least 98% of the time. The other two percent... It's just a better time, a different time.

**Brian Ketelsen:** Fake it till you make it.

**Adam Stacoviak:** Yeah. So 100% - that's something I actually say. I've been saying that in response to somebody, instead of saying "I agree" or "Cool" or whatever... I just say 100%. I've been doing it for years. Maybe I've heard it from somebody, I don't know, but people coin it... People say I started it, but I don't believe them.

**Carlisia Thompson:** Next.

**Erik St. Martin:** Yeah, there's a question here from Joe Shaw... He says, "Maybe you can talk about your day jobs. You mentioned them a little bit in passing in shows, but as far as I can remember, you never really talk about what you do on a day-to-day basis. You work exclusively in Go?" Anybody want to take this first?

**Brian Ketelsen:** \[laughs\] I think we talked about what I do on a day-to-day basis... I shoot gators and make barbecue.

**Erik St. Martin:** \[laughs\] And think about Go while doing that.

**Adam Stacoviak:** What are you supposed to do?

**Brian Ketelsen:** Not necessarily in that -- no, that's not true. I teach Go and Kubernetes for a living, so if you need training for your company in Go or Kubernetes, I'm your guy. Lately, I've been spending a lot of time - since the first quarter is pretty quiet for training - building a completely self-driven online system for learning Go, and I hope to be launching that in the next couple of weeks.

**Adam Stacoviak:** Really?

**Brian Ketelsen:** It's true, and it's really awesome, actually.

**Adam Stacoviak:** I'm excited about that.

**Brian Ketelsen:** Really awesome...

**Carlisia Thompson:** Yeah, I can't wait to take one of your classes.

**Adam Stacoviak:** That's a good question - how can someone take a class from you, Brian?

**Brian Ketelsen:** Well, they could bring me out to their company and I would do the class, or if it's just one-on-one, I do remote classes. I've been spending a lot of time over the last two months with a development group in the Ukraine. I get up really, really early and teach them, and that's a ton of fun.

**Adam Stacoviak:** Wow... Five in the morning?

**Brian Ketelsen:** I wish...

**Adam Stacoviak:** Three?

**Brian Ketelsen:** Four-thirty, yeah.

**Adam Stacoviak:** Wow, that's early... Too early.

**Brian Ketelsen:** But they're really sharp students and it's one of my favorite classes that I've done.

**Adam Stacoviak:** Carlisia works at one of my favorite companies.

**Carlisia Thompson:** Yeah... \[laughs\]

**Adam Stacoviak:** Fastly. I love Fastly.

**Carlisia Thompson:** And it's funny, because Joe Shaw works at Fastly too, and he's my coworker, and we work closely together.

**Erik St. Martin:** So he already knows the answer to this question. \[laughter\]

**Brian Ketelsen:** Cheater!

**Carlisia Thompson:** For one of us... He doesn't know for the two of you. He's the one who does code reviews for me, and vice versa. We're on the same team. Joe's awesome, by the way.

**Erik St. Martin:** So for the listeners who are not Joe Shaw, what do you do? \[laughter\]

**Carlisia Thompson:** \[55:53\] Yeah, I'm only doing Go... What else do I do? So I work for Fastly, and that's a CDN company, and I'm on a team that's rebuilding, let's say, the TLS and DNS management system, so there is a lot for me to learn in that domain.

**Brian Ketelsen:** Can you explain what a CDN is for those of us who do backend code?

**Carlisia Thompson:** Yes. CDN is what you would like to use if you want to reduce the latency of your website loading, because obviously the further physically the user is from where your content is sitting, the more latency there will be. So if you use a CDN, that CDN is going to replicate your content, and you're just gonna greatly reduce that to the point of not even being noticeable. Now, that's a very simplistic way of explaining what a CDN is.

Also, there are other features that you get with it, which is protection from DDoS attacks. The CDN will take care of that for you and offer security. The CDN is the front gate for your system. So a lot of things that you should be worrying about, if you use a CDN you won't have to. Besides the content replication, you get a lot of features.

**Adam Stacoviak:** Yeah, and we actually use Fastly, so if you listen to this show via the podcast, not just live, the reason why it's so fast is because of Fastly. We use Fastly as a CDN to make our site fast, so if you go to Changelog.com, it's super fast... One, because of Elixir and Phoenix, but also because of Fastly, and our downloads for that is super awesome... And I'm not just saying that, but they're phenomenal.

And it's so easy - if we have to purge something, it's easy to hop into the admin and purge something and replace it. Very, very easy to use. We track downloads through it, our whole stats platform is built on the API; we use version 2... A lot of fun stuff, I love it.

**Erik St. Martin:** How about you, Adam? Do you wanna talk about your day job?

**Adam Stacoviak:** My day job... \[laughter\] Jeez, I wear so many hats.

**Brian Ketelsen:** What do you do?

**Adam Stacoviak:** At any given moment, I could be on a podcast... Believe it or not, a large part of my job is sales. My lord, I do so much sales, it's crazy. Mostly relationships - that's probably the easiest way to describe what I do; it's really about relationships. Everybody from the software development community, to open source, to people who are involved in open source, to companies who wanna sponsor our shows... And it's not just them giving us money; we really like to work with companies that perfectly align with our podcast and things we do. The relationships we form from that - we have so many people we've worked with over the years that they're good friends... I can call them and just say hello, and get birthday cards, hang out...

I do lots of stuff. Talk on the mic, podcast, write scripts, order T-shirts, pass out stickers at conferences, shoot video, shoot pictures, edit photos, create Flickr accounts, tweet... I just do a lot of stuff, and it's really hard to compartmentalize what I do. The biggest thing though that I do - hopefully - and what we do here at the Changelog... Our core motto is to enrich the lives of developers. Our jobs, to do what we do here, is to hopefully bring you joy, make your jobs more fun, make life more fun, help you get to that next step, face your impostor syndrome or get over it... That' the core thing we do - make people's lives better, help people. That's what I do - I help people.

**Erik St. Martin:** \[59:58\] So then I guess I'll finish this up... At my day job, I'm actually a systems architect at Comcast in the cable division. For cable, there's really kind of two sides of it: there is the newer kind of IP-based delivery, similar to the way Netflix or Hulu delivers, and then there's what we call QAM, which is Quadrature Amplitude Modulation, and that's how cable is delivered across the coax cable that comes in your house. So I work with that group, and currently I work on a project for replacing industry-specific hardware that's used to multiplex multiple video streams together into a single stream that gets modulated out of that cable... I'm replacing that with software.

The software itself was written in C++... There was a question about all Go. I primarily work in Go; occasionally, I have to patch that software, but mostly another team works on that that's written in C++. But a lot of what I do is design and build the orchestration system surrounding that - how those video streams get deployed, how they fail over when a blade goes down or an entire head end goes down, and things like that.

Anybody who's really interested in that, I actually did a talk back in November at KubeCon about this project, as we're kind of rolling out IP and how to leverage the same networks. [That's actually on YouTube](https://www.youtube.com/watch?v=7g4da6-JXfE), if anybody is actually really interested in it. But yeah... Mostly Go, mostly Kubernetes, and containers... I'm fortunate enough that they let me work on patches to Kubernetes and Docker that help support some of the stuff we're wanting to do.

**Brian Ketelsen:** And not just little patches either... Gigantic patches, awesome patches.

**Erik St. Martin:** The biggest patches ever...?

**Brian Ketelsen:** Some of your patches are crazy awesome, especially to Docker... So don't be shy.

**Erik St. Martin:** Another question from Joe Shaw - and this one especially is important because Adam is here - is "While I'm on the topic of behind the scenes stuff, I'm also interested in the production of the podcast itself." So do you wanna talk about how this show is done?

**Adam Stacoviak:** Yeah, where do I start? Well, we get some people together... I'm just kidding. I think this show is a little bit different than other shows. For example, I'll compare it against the Changelog. That show is sort of like a two-on-one or a one-on-one kind of scenario where it's more conversational, where this one is kind of like that, but it's more panelist conversational.

We also don't do that show live, so it's... I don't think we can get the same kind of conversation if the show was live. When you do a show live like GoTime, you kind of have to inherit some things like, well, people are gonna be hanging out on Slack, and that's part of the show. It may not end up in the show, but it reflects and helps give the show some attributes and attitude, so to speak. You can tell a live show versus a non-live show.

We just figured with GoTime it would be best to start doing it live, and that's one big thing. So the way we do that, I guess the technical pieces of that - we have a web service called WaveStreamer, and we point Nicecast to it, and we just broadcast everybody here to that. That's the easiest way to describe that.

It works... I wouldn't say it's my favorite way of doing it, but it does work and it's been reliable. We only had one issue, and it was a user error (my error). The time we had those live issues, it was not tech fault, it was Adam's fault... I was an idiot.

\[01:03:48.01\] We have a pretty interesting setup here though. We have a tower that is about 21U's - I don't know why it's 21 and not 20, but whatever... 21U's, a multichannel interface, four Mac minis which act as individual Skype machines, and basically Erik, Brian, Carlisia and the guest tend to hang out on those four individual machines, each one to its own machine; that gets plugged into the audio interface, which then goes into the Mac Pro, which then gets tracked to whatever DAW I'm using... A DAW is a Digital Audio Workstation. I use Adobe Audition - it's my preferred one, because I love JKL, long story short. What else..

We track it into there, it's multichannel, so I'm in my own channel; Erik, Brian and Carlisia - they're in their own channels, so I can independently move around the timeline and make edits, and independently EQ or level each individual guest. That's why it's a little easier having crappier mics. Most of our guests don't have professional mic's like we all do. They tend to be whatever headsets. You make that better by isolating it to its own channel, and you can then finetune it. Now, you can't correct it to make it a better mic, but it's one way we combat having bad sounding shows, by this process.

There's other ways to do podcasting. There's services out there that do some of this stuff... We've been educated what those services are and how they work and how they're better, but this is how we do it and this is how we like it... So there you go. That's pretty much it... What else can I share? What do you think?

**Erik St. Martin:** I'd like to give a shoutout to the unsung heroes.

**Adam Stacoviak:** Oh yeah, please.

**Erik St. Martin:** Behind the scenes Adam comes in, but [Jerod Santo](https://twitter.com/jerodsanto) also, from Changelog. He's always behind the scenes and he's throwing in ideas.

**Adam Stacoviak:** Santo.

**Erik St. Martin:** Santa.

**Adam Stacoviak:** Not Santa... \[laughter\]

**Erik St. Martin:** I said Santa...

**Adam Stacoviak:** He brings gifts, but... Anyway, Santo. Jerod Santo.

**Erik St. Martin:** Right, he did a ton of the work - or maybe all of the work on...

**Adam Stacoviak:** The CMS?

**Erik St. Martin:** ...the Changelog and GoTime CMS's.

**Adam Stacoviak:** That's one CMS. It's one CMS and one CDN.

**Erik St. Martin:** Right, yeah. But everybody sees it as kind of two separate podcasts. Somebody this morning also mentioned the difference between the sound that comes from the live stream and the final produced episodes, and that's a huge thank you to Jonathan Youngblood. It's he who makes us sound awesome.

**Adam Stacoviak:** He does. He does an amazing job, and without him I would be in a ball, crying, like Carlisia does after the show. I would just be... \[laughs\]

**Carlisia Thompson:** And just to be clear, he does the editing of the show...

**Adam Stacoviak:** That's right, yeah.

**Carlisia Thompson:** ...which I appreciate, because I was doing the editing; it's a lot of work.

**Adam Stacoviak:** It's a lot work... Yeah, it's a lot of work.

**Carlisia Thompson:** I'm sorry... Let me correct what I just said. I didn't do the editing, I did the show notes. And he does the editing, which is a tremendous amount of work. And he also is doing the show notes.

**Adam Stacoviak:** That's right. The reason why we do edit the show though is just to smooth it out... Not to journalistic it or make it NPR - it's not that; it's just to smooth it out. Because the live experience, if you listen live or you listen to the produced version that goes on the podcast feed, they sound somewhat different. One has ads and the other doesn't, so that's a reason to come listen live, but you kind of get this more raw take on the live version.

Now, we don't produce the live version as a produced version... It's just meant to be raw. So it's not a live production that just gets turned into a show; we allow people that listen to it live, and we welcome that, we want that, but then we take it behind the scenes and we polish it up and make it a little bit easier for somebody to listen to that may not be that into the raw side of things, so to speak, in terms of how this show is done.

**Brian Ketelsen:** \[01:08:02.09\] I love the live part of this show. I don't even think I would want to do it if we weren't broadcast live and if it didn't have that live feel.

**Adam Stacoviak:** Yeah.

**Brian Ketelsen:** For me, that's huge. It's part of the Go ethos - we're inclusive, everybody's involved, and it's not people up on a tower handing down news; it's everybody in the community being part of the process, and that's what I love about it the most.

**Adam Stacoviak:** I fully agree. The live part - that's why I like the chat after the show, because it's kind of fun having people there and hanging out, and stuff like that. I like the raw side of things for this show.

**Erik St. Martin:** Yeah, I love the dialogue between the listeners. It doesn't feel so much like just recording some material that's just gonna get posted somewhere, it feels more like a real, true interaction with the community. So if people have time to come at 3 PM EST and jump in the channel - we love that stuff. Even if you come for the after show...

**Adam Stacoviak:** And appreciate it -- I mean, we love it and appreciate it. It wouldn't be this show if we didn't have the GoTime FM channel and those who hang out there every single week. It's awesome.

**Erik St. Martin:** And then the other person would be [Breakmaster Cylinder](https://twitter.com/BrkmstrCylinder) who does our intro music.

**Adam Stacoviak:** Breakmaster Cylinder... Yeah, Breakmaster is very fun to work with, very awesome to work with, and is relentless... And I say that with capital letters, underlined, bolded - RELENTLESS with delivering the best stuff. What I mean by that is attention to detail; he wants us to be happy... Like, "Did it work out great? Does the community love his updated version of the...?" which is essentially inspired by the original. For those who went back to episode one through maybe 20, you'll hear one version of the intro music (our theme music), and the second version, which is Breakmaster Cylinder. When we did a rebrand, we went back and updated all of our music, and that's why you hear that Changelog's music is different as well. We wanted a certain thread between all of our music, and Breakmaster is awesome.

**Erik St. Martin:** So I think that we are overtime...

**Adam Stacoviak:** Twelve minutes over.

**Erik St. Martin:** Yeah, and I know that there were some other questions, and we will probably try to save these and talk about them later. I know we kind of deferred some GopherCon stuff... One thing I do wanna say while we're giving shoutouts is that although Brian and I are the faces of GopherCon, just like with this show, there are a lot of unsung heroes behind the scenes, making this happen, too.

I think Brian and I probably need to do a post just kind of shouting out to all the people who make it happen, because it's not just us; there are a number of people behind the scenes with that as well.

**Brian Ketelsen:** Yeah, and the biggest one I wanna shoutout this year, prematurely of our blog post or whatever we do is Sarah Adams, for helping us take on the scholarship applications and awarding process; that was a tremendous amount of help that she and the group of people that she brought together gave us. We really appreciate it.

**Adam Stacoviak:** That's awesome.

**Brian Ketelsen:** \[01:11:07.03\] They're not done yet, so if you haven't gotten a notification that you got a scholarship, don't freak out; there's still plenty of time left. But they did start announcing yesterday or the day before, and it's so much fun watching the excited tweets of people who are going to go to GopherCon who didn't think they could.

**Erik St. Martin:** Alright, so with that and our 12 minutes over, let's close this thing out. Thank you to everybody for being on the show and sharing your own personal thoughts, and huge thank you to Adam for actually coming out from behind the curtain. We've tried so long to get him to come out and talk on the show... Thanks to all the listeners and everybody who submitted questions for today, and even if we didn't get to your question, we will hang on to those and maybe we can do an AMA periodically with those. Definitely a huge thank you to Toptal, our sponsor.

Share the show with friends and co-workers. An easy way to subscribe is go to [GoTime.fm](https://changelog.com/gotime). We're on [Twitter](https://twitter.com/GoTimeFM), and if you wanna be on the show, have suggestions for guests or questions for the hosts, [ping](https://github.com/GoTimeFM/ping) us. With that, goodbye everybody. See you next week!

**Adam Stacoviak:** Later!

**Brian Ketelsen:** Thanks, Adam.

**Carlisia Thompson:** Bye!
