**Erik St. Martin:** Alright everybody, welcome back for another episode of GoTime. Today is episode number 43, and our sponsors for today are Toptal and DataDog.

On the show today we have myself, Erik St. Martin, we also have Carlisia Pinto - say hi, Carlisia...

**Carlisia Pinto:** Hi, everybody.

**Erik St. Martin:** And Brian finally made it on the show...

**Brian Ketelsen:** Oh, cut me some slack... I haven't had caffeine or sleep in like two weeks.

**Erik St. Martin:** \[laughs\] And our special guest today is a principal technologist at Pivotal and one of our favorite Gopher artists, Ashley McNamara. Do you wanna give everybody a brief little intro of who you are and some of the stuff you're working on?

**Ashley McNamara:** Yeah, so I am Ashley McNamara and I do a lot of Gopher artwork. \[laughs\]

**Erik St. Martin:** Our favorite Gopher artwork!

**Ashley McNamara:** Our favorite Gopher artwork... I created a little avatar generator called Gopherize.me, and then I've done the GopherCon... Logo, I guess you would call it this year, as well as a number of other art pieces in the Go community, because I love that silly Gopher so much.

**Brian Ketelsen:** Every adorable Gopher on the internet, every one, comes from Ashley.

**Ashley McNamara:** It's been a streak lately, I'll give you that.

**Erik St. Martin:** The machine box logo is pretty baller, too... That little robot is awesome.

**Ashley McNamara:** Oh my god... I love that little robot so much!

**Erik St. Martin:** I have to say I'm a little jealous though, because you can do both artwork and programming. I unfortunately cannot.

**Ashley McNamara:** Yeah, but being a Jill of all trades has some setbacks... I feel like I'm master of none. I feel like I'm always trying to learn things in different places, and never mastering one thing.

**Brian Ketelsen:** That's perfect!

**Carlisia Pinto:** Oh, I feel that way every day!

**Ashley McNamara:** Oh... Okay, so I'm normal. This is amazing.

**Carlisia Pinto:** That's so normal...

**Brian Ketelsen:** We call that life, right?

**Ashley McNamara:** Oh, okay...

**Carlisia Pinto:** Especially with tech... So many new things; you just have to try focus and not have anxiety over what you don't know and you're not learning.

**Ashley McNamara:** Yeah, that's why it's Xanax...

**Brian Ketelsen:** Now Xanax... I can get behind Xanax. \[laughter\]

**Erik St. Martin:** Family friendly here... \[laughs\]

**Ashley McNamara:** It's family friendly.

**Brian Ketelsen:** Xanax is family friendly.

**Ashley McNamara:** It definitely is.

**Brian Ketelsen:** The more Xanax I have, the more friendly I am. \[laughter\]

**Erik St. Martin:** I'd say that's pretty normal though, because everything in technology - it's impossible to know all areas. You'll see something somebody else did and you're like "Oh, I wish I was better at that", and it's like... You know, recently I've loved tinkering with hardware, but I'm not a hardware guy, so I see projects other people have done and I'm like "That would probably take me six years..." and it seemed like they did it in a week.

**Ashley McNamara:** Yeah, but do you feel like that about everything? Because I feel like that about everything, where I'm like "Oh man, I wish I was better at that." I feel like I say that a lot. "I wish I was better at Git, I wish I was better at all of the things..."

**Erik St. Martin:** Brian is a testament to it, ask him... I'm terrible about that; I think I'm good at nothing. \[laughter\]

**Brian Ketelsen:** \[00:04:00.12\] It's true. I have to force Erik to take credit for all the awesome stuff he does. He's like "No, this isn't that cool." Are you kidding me?! So I just post it for him. I do it all the time. I have absolutely no fear.

**Ashley McNamara:** Impostor syndrome is real.

**Brian Ketelsen:** Open sourcing Erik's projects is a service, that's my job.

**Ashley McNamara:** Oh, I love that. Alright...

**Erik St. Martin:** I think it's too hard... There's just too much we wanna do. There's a quote, like a Venn diagram that I saw one time where it's like "What you think other people know versus what they actually know", and you see the surface...

**Ashley McNamara:** It was a pie chart, I think.

**Erik St. Martin:** Yeah, and you're just kind of looking at it and you think they know everything to know about that topic, but really you're kind of seeing all they know about it in that little bit.

**Brian Ketelsen:** It's the Facebook view.

**Ashley McNamara:** Yes...

**Erik St. Martin:** You know, the internet... I love the internet, because it brings everybody together, and exposes us to a lot of stuff. But I hate it in the same way, because you're also comparing yourself to a highly curated list of the best the world has to offer, every single day.

**Ashley McNamara:** Totally.

**Erik St. Martin:** You're looking around at these cool things and you think everybody is cooler than -- like, "I'm not a millionaire at 20? I'm a failure in life..." \[laughter\]

**Carlisia Pinto:** So what are some of the things that you wish you knew better, Ashley?

**Ashley McNamara:** Oh geez, everything.

**Carlisia Pinto:** At least lately... Everything! \[laughter\]

**Ashley McNamara:** At least lately - Kubernetes is definitely on my list. Microservices in general, I wish I knew a lot more than I do. The good news is that community is awesome, so if I don't know something - which often times I don't - I always know somebody who does. There are always awesome people who are willing to teach me, like Kelsey Hightower, for example. Brian is another example - I ask him dumb questions about Go all the time. And everyone is just so patient...

**Brian Ketelsen:** You don't ask dumb questions...

**Ashley McNamara:** I super do...

**Brian Ketelsen:** Your questions aren't dumb. There are no dumb questions.

**Ashley McNamara:** I don't ask dumb questions.

**Brian Ketelsen:** You gotta understand that when you ask me a question, I just turn around and ask Erik and give you the answer.

**Ashley McNamara:** Oh great, okay... So I'm gonna skip the middleman. See you, Brian...

**Brian Ketelsen:** No, I like being the middleman. I like feeling important.

**Ashley McNamara:** Okay, killing two birds with one stone then... It's what I do.

**Erik St. Martin:** I don't think there's dumb questions though either, because really if you know the answer, it easy; if you don't, it can be impossible, right?

**Ashley McNamara:** Right.

**Erik St. Martin:** It's hard... You may feel dumb because it seems like a trivial thing, but if you've never used it, how would you know, right?

**Ashley McNamara:** Yes.

**Erik St. Martin:** If you think about basic life like that... If you saw a weed eater, and you've never seen one before, it's gonna be a foreign object, like "How do you start this thing? What do you use it for?"

**Brian Ketelsen:** A weed eater?

**Erik St. Martin:** I picked a random, inanimate object.

**Brian Ketelsen:** That is random, dude!

**Erik St. Martin:** \[laughs\] It's probably because people were out there mowing the lawn earlier...

**Brian Ketelsen:** Oh, that makes sense. You saw the livestream of the hedges behind my house and you thought "Somebody needs to trim that damn thing."

**Ashley McNamara:** We didn't wanna say it, but this is your intervention...

**Brian Ketelsen:** Thank you.

**Erik St. Martin:** That's my way of insinuating that Brian doesn't know how to use one. \[laughter\]

**Ashley McNamara:** \[unintelligible 00:07:15.14\] I don't know if you can explain it...

**Brian Ketelsen:** The shade is rough on this show. So tell me, Ashley, how did you come across all of the awesome stuff that you put on your learning to program wikis? Because I was looking through that -- I don't know, it was about two months ago when I was working on some educational material training stuff and I thought "My god! This is like the best resource ever!" and it's got like 50 stars or something on GitHub. I don't understand why there aren't a thousand million stars.

**Ashley McNamara:** \[00:07:46.18\] I think it's because I don't advertise is as much as I maybe should. I started it because I went to a bootcamp to learn Python. That's sort of how I got into programming to begin with. I was contributing docs to OpenStack, and I wanted to contribute more, so I started to learn Python and thought "I can't do this by myself. This is impossible. Do I need to go get a CS degree? Who had time for that?!"

So I found this bootcamp and I went to this bootcamp, and it was terrible. They weren't teaching real-world software development. They weren't. Contributing to open source was irrelevant to them. Basically, every question I asked was "You don't need to know that...", but I needed to know all of those things. So I decided to go out and find free resources, and I started out with Zed Shaw's "Learn Python The Hard Way"...

**Erik St. Martin:** I love his stuff.

**Ashley McNamara:** I love his stuff too, he's so great. And I sent him an e-mail and he said, "Why don't you just come over? I'll teach you." \[laughter\] And I learned more at Zed's house than I learned in three months at this bootcamp.

**Brian Ketelsen:** That's so awesome.

**Ashley McNamara:** And I wanted to make sure that I helped other people in my situation. You don't need to drop $15,000 to learn to code. You are going to need in-person help, but there are plenty of people that mentor. All you have to do is ask, and people are so afraid to ask...

So I wanted to put together this resource where people have access at a glance to - at sort of a glance; it's huge - a free resource where you can learn on your own. Now I'm working on putting together a mentor program as well, where we can pair junior developers with seasoned developers and get some real world experience...

**Brian Ketelsen:** That's so cool.

**Ashley McNamara:** ...so that these people aren't alone.

**Erik St. Martin:** I think the other side of it too - and having a mentor is important here - is similar to what we were just talking about, where you feel like "I wish I knew all these things better and I don't know them enough." There's things that I've learned with people that kind of are in my circle - trying to get into programming is a psychological thing, too. There's so many little things... It's like, "Oh well, I'm trying to learn this, but what is that?" and you go down this rabbit hole... And people feel like "I'm just not smart enough to do this", and they don't realize it's just a lot of little things. It's a lot of time, and even most of us struggle like that on a day-to-day basis.

We don't set out immediately knowing how to solve a problem. I think we've just all grown comfortable in the struggle, or sometimes even grow to enjoy it, trying to figure out how this thing works...

**Ashley McNamara:** Right...

**Brian Ketelsen:** \[laughs\]

**Erik St. Martin:** So when you come in, I think it can be demotivating, because you're just like, "Oh, I'm just not cut out... I just can't get this to work. I don't understand it."

**Carlisia Pinto:** Yeah, that's a great point. Sorry, did I cut you off? Sorry, not sorry... \[laughter\]

**Brian Ketelsen:** Yeah, shut up, Erik. Carlisia needs to talk now.

**Carlisia Pinto:** No, I think the essence of programming is being comfortable with not knowing, and having your own strategies for putting the pieces of the puzzle together. For me sometimes it's study from the bottom and going up; sometimes it's starting from the outside, going in... There's all sorts of strategies that I use to solve problems. A lot of times it's breaking things apart, just solving one piece, and making sure I understand - even just renaming things, in the process of solving a problem. And that's fun... But if you think that you need to go in and you need to know -- it's not about knowing, it's about figuring it out, and you need to like the process of figuring things out.

**Erik St. Martin:** Enjoy the journey...

**Carlisia Pinto:** Yeah... Because mostly we don't know shit... We're just figuring stuff out.

**Brian Ketelsen:** This is a family show!

**Carlisia Pinto:** \[00:12:06.26\] Oh, that's not family-friendly?

**Brian Ketelsen:** Family show, Carlisia!

**Carlisia Pinto:** I'm gonna be bleeped.

**Erik St. Martin:** We miss Ashley's alternate words and phrases list...

**Carlisia Pinto:** I thought that was family-friendly, sorry... \[laughter\]

**Ashley McNamara:** You know what? Here's family-friendly: you be YOU! Don't let anybody tell you how to live your life.

**Carlisia Pinto:** We're just gonna be bleeped.

**Ashley McNamara:** Don't bleep us, it's so rude...

**Brian Ketelsen:** Yeah, you can't censor me.

**Ashley McNamara:** Yeah, don't do that. I had to teach myself to break problems down into micro-problems. That's also something that you need to learn as a developer... That you're better off learning with a mentor than you are at a school. I read so many books like "How to think like a programmer"... None of those books were helpful, but trial and error was helpful.

**Brian Ketelsen:** Well, I think we all do that instinctively, but we don't know we're doing it, and it's really hard for someone to step back and say, "Okay, you really just need to find the tiniest piece of this and solve that, and then find the next tiny piece and solve that", because that's what we all do. Even if you don't know what to search for on Stack Overflow, you've gotta figure it out, and it's just one tiny piece at a time. But it's hard to sell that to people, because you don't really know that that's what you're doing.

Some people do it instinctively, some people have to be taught, but it's how we're all solving the problems. Nobody goes off in a weekend and writes InfluxDB.

**Ashley McNamara:** Of course not, but I've had so many people come to me and say, "I wanna build this thing. Where do I start?" They don't know where to start in the lifecycle, right? They're thinking of this thing that they want, but they have no idea where to start building it.

**Erik St. Martin:** Yeah, I guess there's a degree of that, because it's almost like, if you're ever done freelance work or consulting work where you deal with people who want you to build something for them and they're not familiar with tech, they don't know it's possible, so they don't really know where to begin with it. Their demands are different than the problem they're actually trying to solve, because their demands are based on what they know about tech.

So I think there's a degree of that when you start... You don't even know that these things are possible, so where do you look? So yeah, I guess there's a lot of that into thinking like a programmer. I do it with math, too. People think I can do a lot of math in my head, and it's like, you just break it down into simpler problems, right? 15 x 27... I don't know what that is off the top of my head, but I know what 10 x 20 is, and things like that, you know?

I think the other side is confidence, too. A friend of mine just got his bachelor's degree in CompSci, and he's like "I don't know when I'll be ready to write code." It's like, "You've been ready... Since day one." It's just that confidence level of "When will I know enough to be able to do this?" and that's kind of where this thought got triggered for me.

You think about it... We do this all the time. If you started your day knowing 100% how you were gonna do what your task was for that day, and this was every day of your life, it would be boring... So boring! We like solving new problems, so we kind of want the uncharted territory.

**Ashley McNamara:** No, absolutely! That's one of the reasons why I went to Pivotal. It's really exciting to be the dumb kid in class again.

**Brian Ketelsen:** If you're not in the pool with lots of bigger fish, you're not learning.

**Ashley McNamara:** So true!

**Carlisia Pinto:** So what are you doing at Pivotal? Tell us...

**Ashley McNamara:** What I didn't know about Pivotal is that they have a really passionate set of Go developers. Pivotal started out as a Ruby on Rails shop, and most of CF was Ruby. I had no idea until I tweeted that I was looking for a job and I got a message from one of the Go developers at Pivotal...

\[00:16:09.25\] So I started doing some research, and I noticed that Pivotal has about 35 repos that are Go. It's like, this is weird that nobody knows about this. Is it because they are making an enterprise product and people don't care about that as much...? Or what's the deal?

So I started interviewing and I realized that they just didn't have a lot of people to be the face in that community, to evangelize that. So that's what I'm doing at Pivotal - making the Go community aware of what we have to offer.

**Carlisia Pinto:** First of all, CF is Cloud Foundry, right?

**Ashley McNamara:** Correct, yes.

**Carlisia Pinto:** Maybe you wanna tell us what that even is... But what is the important stuff that's working? What type of developers will benefit from what Pivotal has to offer?

**Ashley McNamara:** So you're gonna have to cut me a little bit of slack on this, because it's day four for me at Pivotal...

**Carlisia Pinto:** Consider it done! Totally.

**Ashley McNamara:** But many of the engineers are using a scripting language. They're writing small tools, like lightweight CLIs that might have once been done in Ruby or Bash, and it's especially handy when you want to, say, write a little diagnostic test on a Mac and then run it on an arbitrary Linux container without messing with the dependencies or worrying about Bash mysteries... So we're doing a lot of testing.

**Brian Ketelsen:** There's a significant amount of Cloud Foundry that's been completely rewritten in Go. Their router, Diego - that's a huge, huge piece of Cloud Foundry that's written in Go, and they had a nice blog post about that a year or two ago, on just how much Go brought to the game in that rewrite.

**Ashley McNamara:** Yeah, Go made it possible for them to run Diego on Linux and Windows, and that helped a lot with Pivotal's .NET story.

**Erik St. Martin:** I think Onsi works at Pivotal too, who created Ginkgo and Gomega, which is like a BDD framework

**Ashley McNamara:** He does...

**Brian Ketelsen:** That's cool.

**Ashley McNamara:** Yeah, so a lot of great Gophers at Pivotal, who I didn't even know until recently, and I feel sort of bad about that. I feel like everyone should know about them.

**Erik St. Martin:** Gophers are taking over.

**Brian Ketelsen:** I kind of feel like they're a little quiet in the Go world though, in general...

**Ashley McNamara:** Possibly...

**Brian Ketelsen:** They're not making enough noise, so they had to hire somebody to make more noise... \[laughter\]

**Ashley McNamara:** Well, hello... Here I am.

**Brian Ketelsen:** It's Ashley. It's the Ashley party.

**Carlisia Pinto:** Talking about Ashley party... What is your talk at GopherCon going to be about?

**Ashley McNamara:** Oh my gosh...

**Carlisia Pinto:** I'm so curious!

**Ashley McNamara:** I wavered on this a couple of times, so right now it says "My journey to Go", and I've talked to a couple of people about it; it feels pretentious in a way, like "Who cares about my specific journey?", but at the same time, "Could it be helpful for people that are learning?" I don't know, so I'm not a hundred percent sure, to be honest.

**Carlisia Pinto:** I wanna go back to that and give you my opinion, but do you have an alternative to that? Were you thinking about another talk?

**Ashley McNamara:** I have no idea... I would love to hear your opinion.

**Carlisia Pinto:** My opinion on the original talk, your journey to go - I think it can be extremely useful, because Go is growing tremendously, and there's always new people coming into the language... And when people are coming into a new language, of course they wanna see steps that people who are practicing have taken to get to where they are.

\[00:20:04.10\] So it can be inspiring, it can be informative... Definitely very helpful. And even for veterans, it's a chance for us to look back and see "Hey, what's that person's journey, compared to my journey?" I mean, I like talks like that.

**Ashley McNamara:** I do too, but...

**Erik St. Martin:** I mirror Carlisia's opinion. I think that you draw a lot of inspiration from it. A lot of people coming in - we talked about confidence, and things... Some of the favorite topics that we've had on this show are when people start giving their back-story and people realize that their journey is very similar to other people... That not everybody went to Ivy League schools and got PhD's and things like that. So I think that it's inspiring and motivating and it gives people a little confidence, and also to Carlisia's point, for veterans, it shows where the struggle points are for people. Like, "How can we help adoption?", because we see somebody stumbled through their journey, and something they probably shouldn't have stumbled over, how can we do that better?

**Ashley McNamara:** You're absolutely right.

**Brian Ketelsen:** That's the first time anybody has ever said that on this show. \[laughter\]

**Carlisia Pinto:** That Erik is right? \[laughs\]

**Brian Ketelsen:** That everybody's right...

**Erik St. Martin:** Alright, that's a wrap... I'm gonna split on a high note... \[laughter\] We should take our first sponsored break, though...

**Brian Ketelsen:** It's time - exactly time. I was supposed to watch that. It's exactly time right now. Take a sponsored break, Erik.

**Erik St. Martin:** Alright. So our first sponsor for today is Toptal.

**Break:** \[00:21:41.29\]

**Erik St. Martin:** Alright, we are back, talking with Ashley McNamara. So just before this sponsored break we were talking about your talk, and inspiring future Gophers and veterans... Brian, did you have a take on this?

**Brian Ketelsen:** I definitely do. I was thinking at it more from the veteran angle. It's already been mentioned, but my favorite idea about hearing the journey talks from multiple different angles is increasing adoption and how we can lower that friction and make it easier for anybody anywhere to come into Go. I know there are a lot of pain points, I see it when I'm teaching, but getting as many people's points of view as possible is absolutely critical.

**Ashley McNamara:** I agree.

**Erik St. Martin:** I think the "Like me" story is really important, too. We all have people we relate to, and when you can see somebody who's very similar to you in your upbringing and your journey, and they can see what their journey could look like a year or two from now, if they just kind of stay the course, I think that's important and I think it's motivating. It keeps people on track.

**Carlisia Pinto:** Yeah, that's a very good choice, because Ashley said that she feels that maybe it's pretentious to do a talk like that, and I assume it's because she doesn't have ten years of experience... But I think not necessarily that it's better - I think it's good to have different perspectives from a person who's only been programming with Go for a couple years, as well as somebody who's been programming with Go for 15 years. The people who are coming in, they will be able to relate a lot better to someone who's been programming for a couple years, because it's more manageable for them to visualize themselves two years ahead of time.

**Ashley McNamara:** \[00:24:07.20\] Yeah, you're absolutely right.

**Carlisia Pinto:** They will relate to that talk a lot more than if you have 15 years programming in Go.

**Erik St. Martin:** I think that some of the most moving parts of talks like these are hearing some of the failures, too... Where people can see that it's not all perfect, that other people struggled and they failed and fell off and got back on, and things like that. I think that's part of the motivating thing. I mean, if you stood up and just told everybody all your awesome accomplishments and were like "You may all now bow" and mic drop - that'd be a bit pretentious, but...

**Ashley McNamara:** I might mic drop anyway... I mean, if I'm gonna be holding a mic, I feel obligated to mic drop. But yeah, there are way more failures that successes, which is part of the job.

**Brian Ketelsen:** Alright, that's it - mic drop or get the hell out. Those are the rules.

**Ashley McNamara:** Yes.

**Erik St. Martin:** I have an idea now...

**Brian Ketelsen:** Yeah?

**Erik St. Martin:** We totally need to build some kind of statue or a toy of a gopher doing a mic drop that we give all speakers...

**Brian Ketelsen:** Oh my god! The best speaker gift ever!

**Ashley McNamara:** Give me a week.

**Brian Ketelsen:** Do it, we're in! That's so awesome!

**Ashley McNamara:** That's happening

**Erik St. Martin:** You might just have to get it made.

**Brian Ketelsen:** Drop the mic... We can get it made pretty easily. Oh, that's beautiful... Wow. I just got a little shiver.

**Ashley McNamara:** Yeah, give me a week. That will exist.

**Brian Ketelsen:** It's so nice having friends in high places.

**Erik St. Martin:** Right?!

**Brian Ketelsen:** Every time I turn around, Ashley's like "Hey, I made you a logo for X project." I'm like "Are you kidding me? That's so awesome!" \[laughter\]

**Erik St. Martin:** Do you know what the hard part about having people in these positions are? We will never teach ourselves, because we don't have to.

**Brian Ketelsen:** No, I don't need to learn how to make pretty things on Photoshop, or whatever you guys use for that pretty stuff...

**Erik St. Martin:** I just don't have the creativity...

**Brian Ketelsen:** See, you're doing that impostor thing. What you need to do is visualize small steps towards your success, Erik.

**Erik St. Martin:** Do I picture an eye first, and then the microphone, and...

**Brian Ketelsen:** No, it's like that thing that's always traveling the internet - you draw the two circles, and then the next step, finish the owl. \[laughter\]

**Ashley McNamara:** Just like that!

**Carlisia Pinto:** So how did gopherize.me came about? Did you have the idea?

**Ashley McNamara:** No, it was not my idea at all. I just take credit for it. So I was creating these avatars... I created them initially for GopherCon, because I wanted to have placeholders for the speakers, and I love punny things, so I wanted to name them, so it was all really selfish. Eventually I ended up making a Brian gopher, and sent it to him. He tweeted about it, and then I made an Erik gopher, and then I made a Mark gopher, and eventually I was making all of these gophers... Then Todd on Twitter said, "Hey, you should just make an avatar generator", and 24 hours later there was an avatar generator, with the help of Matt.

**Erik St. Martin:** Yeah, Matt Ryer.

**Ashley McNamara:** Yeah, super helpful. It would have taken me a lot longer than 24 hours to draw it myself.

**Brian Ketelsen:** I'm gonna tell you... That made me mad. The tweet happened at like 8 o'clock in the morning, so the first thing I did was register a domain. And I thought as soon as work is over, I'm gonna start on this. By the time work was over, it was done. Damn you, Matt Ryer!

**Ashley McNamara:** He's so quick! He's so quick! Yeah, I feel bad... For only like a couple hours.

**Brian Ketelsen:** Quarter of a millisecond?

**Ashley McNamara:** Yeah...

**Brian Ketelsen:** That's alright.

**Carlisia Pinto:** Do you know how many avatars have been generated with that?

**Ashley McNamara:** \[00:28:00.11\] I haven't looked at the analytics in a while... But every day I see at least one avatar on Twitter, at least. They're every everywhere, which is awesome!

**Brian Ketelsen:** It's my entire Twitter feed... And Slack, too!

**Ashley McNamara:** Yes.

**Carlisia Pinto:** Yeah, I totally adopted it as my avatar.

**Ashley McNamara:** It was obviously something that the community needed, and eventually it will grow to be bigger and better... When we all have time.

**Brian Ketelsen:** So what's the next bigger and better step for Gopherize.me?

**Ashley McNamara:** Well, I think that people need to be able to use a color picker to pick their own hair color; there's that. Maybe same for the color of the gopher; that way I can cut out a lot of the duplicate hairstyles in different colors. That would be nice.

Then I would like to be able to have people customize a T-Shirt.

**Erik St. Martin:** That'd be awesome... Like, get your own gopher on your own T-shirt.

**Ashley McNamara:** Well, no... Like, the gopher's T-shirt. Upload a photo - that will be on there, instead of having all of these T-shirts that you're obligated to use if you want a T-shirt. Type a message on, something... So that's next.

**Erik St. Martin:** Nice. But yeah, just kind of upload your own image to put on your T-shirt.

**Ashley McNamara:** Exactly.

**Erik St. Martin:** That'd be pretty cool.

**Brian Ketelsen:** You're talking at OSCON this year, aren't you?

**Ashley McNamara:** I am, yeah.

**Brian Ketelsen:** What's your topic at OSCON?

**Ashley McNamara:** Building a command line applications with Go. I'll be doing it with Steve Francia.

**Brian Ketelsen:** Oh, nice!

**Carlisia Pinto:** Nice! The Cobra guy.

**Brian Ketelsen:** The Hugo guy, too.

**Ashley McNamara:** Hugo guy, yes.

**Erik St. Martin:** And now the Go team guy.

**Brian Ketelsen:** That's right.

**Carlisia Pinto:** I said Cobra because it's the CLI related talk... But he's many things, for sure.

**Brian Ketelsen:** True.

**Ashley McNamara:** He's many things, but yes, we will be using Cobra. We will also be doing it at Craft Camp, which is coming up pretty soon... Except there we have to make a three-hour talk sixty minutes, I think. So that will be fun.

**Brian Ketelsen:** "And this is how you do it. Thanksbye."

**Ashley McNamara:** \[laughs\] Right, exactly.

**Erik St. Martin:** So we kind of moved away from the topic, but there was one that I wanted to mention, too. We were talking about your resources to learn; one of them we didn't point out specifically was for kids. I thought that was really cool, too.

**Ashley McNamara:** Yeah, so I actually made that one first. That one came from -- my child is extremely nerdy. He's always breaking things. About a week ago he decided that he wanted to make a plasma ball himself, and he would put steel wool in the microwave... \[laughter\] So that was fun... We have a book called The Dangerous Book For Boys, and it's basically just ways to hurt yourself. We're constantly doing things like that... So I wanted to make sure that I had resources to do those things with him, but also I know that other people have nerdy kids as well, so I decided to share it.

**Brian Ketelsen:** That's awesome.

**Ashley McNamara:** It's a good book.

**Carlisia Pinto:** I've seen that book... It makes my blood boil. Why is it for boys? Everything in there a girl can do. Seriously...

**Brian Ketelsen:** Good point.

**Carlisia Pinto:** Oh my gosh...

**Ashley McNamara:** We should rebrand it.

**Carlisia Pinto:** Imagine girls reading that book... What does it mean? Only boys are allowed? Because that's how little kids think... First grade, second grade, third grade - that's how they think.

**Ashley McNamara:** Well, that's the reason why this industry will not be equal in our generation... Or our kids' generation.

**Carlisia Pinto:** \[00:32:02.12\] Sorry for side-tracking... Let's go back.

**Brian Ketelsen:** Well, it's a really good point, Carlisia.

**Erik St. Martin:** Yeah, we need to start with our kids. It's really hard to change perception for people... This is why they have the C-level suites at banks and all that stuff; it's the good ol' boys club. It's really hard to change their opinions, but it's really important for the newer generations, and that's why I like a lot of things that are going on with millennials and making these very important topics.

**Brian Ketelsen:** Wait, why is it only millennials? Why did they get all the credit? \[laughter\]

**Ashley McNamara:** I don't know, I have one of those, too... But on that topic, he wants to change her major to more computer science type things from business. She went to her school counselor with her change list, and the counselor was like "Honey, this is gonna be too hard for you. You should probably just stick with business..."

**Carlisia Pinto:** Oh my god...

**Brian Ketelsen:** Oh my god...

**Ashley McNamara:** I did sign her up for any of the classes she wanted.

**Carlisia Pinto:** Did you go back and give this woman a talking, too?

**Ashley McNamara:** I didn't find out until way later, unfortunately... Because I would have had words.

**Brian Ketelsen:** Not family-friendly ones?

**Ashley McNamara:** They would not be from that list I put in Slack, I'll tell you that.

**Erik St. Martin:** I hate the perception that we put on people that these are elite things that only the super smart do... I think it was a recording of Bryan Liles at one of the GopherCons... He said "Everybody thinks you have to be ridiculously smart, and there are some people that are just born geniuses that do some of the stuff that we may never do, or would take us ten times as long", but for most of us it's just work. You just put in the time... It's not overly difficult, it's just a lot of things to know; when you put the time in, you acquire it. Any business domain is that way, too. You have to learn about that industry.

You come in, you can have an MBA, but you get dropped in an industry you've never worked in before; there's stuff to learn.

**Carlisia Pinto:** That's absolutely true, but I am willing to bet that this woman said what she said based on gender.

**Brian Ketelsen:** I agree.

**Carlisia Pinto:** It's a separate thing, and I think it's even worse than assuming that certain elitist things require somebody to be super smart; that's one big problem. But assuming that a person because they are not a straight male - or maybe even a straight white male - they're not smart enough to do harder work is just... Sigh!

**Erik St. Martin:** I hate it because usually I like to play devil's advocate; I like to at least understand the position somebody's coming from, even if I don't agree with them. But in this, I truly don't understand how anybody can think that somehow women are not smart enough to do that.

**Brian Ketelsen:** Well, this was a woman, too. It's even worse when it's a woman saying "No, you can't do that, honey."

**Ashley McNamara:** I think that it's way more common that we think, especially outside of our industry. When you're in college, it seems impossible to learn this, I'm sure, from anyone who doesn't know about it. I think that the sexism is worse outside of our industry.

**Erik St. Martin:** I think it comes to perseverance, right? It's not about born talent, it's about who's gonna take the struggle and continue through it, and who's gonna look at it and be like, "Oh, this is a lot to learn. I just don't wanna do it anymore." When we tell people, even if she continues on that path, now it's gonna be in her head every time she's struggling with something, what this advisor told her, that she's not cut out to do it. And then it's only more likely that she's going ot quit, because she's like "Oh, you know what? They were right all along", and that's not true. Everybody's struggles. It's a lot to learn.

**Ashley McNamara:** \[00:36:17.12\] That's already happened, and I'm having to steer her through it, and it's frustrating, because I'm her mother, so she tends to listen to me less.

**Brian Ketelsen:** But the advisor reinforced it.

**Ashley McNamara:** She needed that advisor.

**Erik St. Martin:** You're the parent, you're automatically not as smart as she is.

**Ashley McNamara:** Exactly.

**Carlisia Pinto:** I don't think it's like that. I think she's the parent, therefore she's biased. She might say "I think you are sufficiently capable to do this program" and she'll say "Well, you're my mother, of course you think that."

**Erik St. Martin:** "As a parent you're going to be supportive always" type of ordeal... You're not gonna tell it to them straight.

**Carlisia Pinto:** It's so important for people to be sensitive to these issues...

**Ashley McNamara:** And it makes me wonder if that's why people are ending up in bootcamps, because they were unable to get the classes in college... I wonder how often this happens now.

**Erik St. Martin:** Because somebody talked them out of it?

**Ashley McNamara:** Yeah.

**Erik St. Martin:** Ugh!

**Carlisia Pinto:** Let's change subjects.

**Erik St. Martin:** So on a positive note on this getting more people into stem and kids... The other night I saw a really awesome Verizon commercial. It went through LeBron James, and there's some actors and models and stuff -- basically, like "We don't need more LeBron James, we don't need more...", and showing the statistics of the number of professional football players versus the number of pro basketball players, and just this little kid, and it was like "We need more of me!" and he's doing like a LEGO Mindstorms thing or something, and it kind of rolls into how there's four million unfilled tech jobs. We don't need more celebrity actors and models and stuff, we need more tech people. I thought that was really cool.

**Ashley McNamara:** I'm gonna have to look this commercial up. You should put it in the Slack channel.

**Erik St. Martin:** Yeah, I'll drop it in the Slack channel now, but it is actually in our doc. Copying link...

And now everybody's gonna be listening to us live talk and listening to a commercial at the same time. \[laughter\]

**Ashley McNamara:** Haha, awesome!

**Brian Ketelsen:** Don't do it!

**Erik St. Martin:** Should we give a moment of silence for everybody to listen?

**Brian Ketelsen:** Well, why don't we take our next break right now, and that will be a perfect opportunity, Erik.

**Erik St. Martin:** That is a ridiculously good idea. Too bad I didn't think of it. And I have to give you credit. \[laughter\]

**Ashley McNamara:** Yeah, because \[unintelligible 00:38:44.00\]

**Erik St. Martin:** Alright, so our second sponsor for today is DataDog.

**Break:** \[00:38:51.14\]

**Ashley McNamara:** Well, I mean now they're making baby toys for programming concepts. Have you seen these things? They're like infant toys, which is great! We think that we are smart now... Just wait. Our kids are gonna crush us.

**Brian Ketelsen:** Well, we might as well just consider ourselves back on the air, because I think there's a real problem in that as we advance so much as a society, we are gaining such a tremendous amount of -- what is the word...? A corpus of knowledge that we can't possibly all know. So sure, the kids will know cooler things, but everybody still can't know all the things. We will always be maybe really good at one or two specialized areas, or maybe a good specialist that knows a lot about a lot of things, but not everything about a lot of things, but that body of knowledge is growing so fast at this point, that I'm almost worried that at some point, if we had some large population event and lost a lot of people, we wouldn't be able to continue as a society the way we are now, because nobody knows how to build that aircraft, or how to keep the power plant running, other than a very few specialized number of people.

**Ashley McNamara:** Okay, confession... I watch How It's Made, so that I can be that person that knows how... \[laughter\]

**Brian Ketelsen:** Now the truth is out... Such an awesome show!

**Erik St. Martin:** So we need to live near you. Zombie apocalypse... Where's Ashley?

**Ashley McNamara:** Yeah, exactly! I know exactly how to make a coffee, but...

**Erik St. Martin:** We've talked about this before too - I think that each generation we get further abstracted away from the things we use. I've mentioned this before... In the '50s if you owned a TV, you knew how to change the vacuum tubes; you went to the store and you bought one. In the '80s and probably early '90s if you owned a car, somebody in the household probably knew how to do some basic maintenance on it. But now it's common for us to have all kinds of devices and things that we use every day that we know how to use but we don't understand how they work. Ask non-tech people what Wi-Fi is and how it works... It's just magic. It's wireless. There's no concept of radio--

**Ashley McNamara:** It goes to space and back, right...? \[laughter\] Yeah...

**Erik St. Martin:** To Brian's point, Joe Rogan has a comedy bit where he talks about some of this stuff, and he's like "How many smart people are in the room?" And he's like, "No, I mean REALLY smart, not just use-stuff-made-by-smart-people... Like, how does your phone work?" \[laughter\]

**Carlisia Pinto:** I love him.

**Erik St. Martin:** He's just like "If you think you're smart... If I took you and gave you a hatchet and dropped you off in the middle of the forest/jungle, how long till you can send me an e-mail?" \[laughter\] And it goes to show -- he's like "What would happen, what do you do when the power goes out?" He's like "I know I'd do \[unintelligible 00:43:02.24\] Somebody's probably working on it right now!" He's like "What would happen if it never came back on, and we had to go back into the caves because the animal are coming in because there's no lights and sounds and stuff?"

**Carlisia Pinto:** You don't have a fridge. Stop and think about it for a second - you don't have fridge.

**Erik St. Martin:** Well, Brian and I would be safe.

**Brian Ketelsen:** Yeah, I'm good.

**Erik St. Martin:** We know how to smoke meat. \[laughter\]

**Brian Ketelsen:** We have a lot of ammunition and a really big grill.

**Erik St. Martin:** So that was the other thing he pointed out. He's like "I know what you're thinking. You're thinking "It's alright, I'd be safe. I've got a gun." He's like "But what happens when you run out of bullets? Do you know how to make a bullet? I don't know how to make a bullet."

**Ashley McNamara:** I know how to reload bullets... \[laughter\]

**Erik St. Martin:** \[00:43:48.28\] So it's just a really good point that despite you can look around and think you know about a lot of stuff, there's always gonna be things you don't know. There was a Survival(ish) show I watched a number of years ago where they put a programmer or electrician with a carpenter and a medic and they dropped them off, and it's a post-apocalyptic kind of town...

**Brian Ketelsen:** That was a cool show.

**Erik St. Martin:** Yeah, they had to invent stuff to try to survive for the week.

**Ashley McNamara:** That's rad! Why do they always cancel the cool stuff?

**Brian Ketelsen:** And then randomly they just eat one person at the end of each week... \[laughter\]

**Ashley McNamara:** Sacrifice, I like it.

**Erik St. Martin:** And they'd use dead pigs... They did something with it to break it down and turn it into a fuel for a tractor so that they could use that as a generator...

**Brian Ketelsen:** Bio-diesel.

**Erik St. Martin:** Yeah... It's just crazy.

**Carlisia Pinto:** I wanted to go back and ask Ashley... I didn't catch up with the age of your kid/kids - I don't even know if it's more than one... But I wanted to ask if you're teaching them how to code, and what you're using, how that's coming along...?

**Ashley McNamara:** Yeah, so I have a 19-year-old, the one that's in college... She is girl, and she is just now starting to come around to the idea of programming. I tried to teach her when she was about my son's age, who's 11, and she was having not part of it, and you can't force somebody to learn it; it just doesn't work.

My 11-year-old is very interested in it, and we started out with Scratch, and we're moving into Python, and doing some Go as well... But he loves Scratch.

**Brian Ketelsen:** You gotta watch out, that Scratch is a gateway drug. The next thing you know, they're doing Python, and before you know it, they're snorting C++ in the backroom.

**Ashley McNamara:** Yeah...

**Carlisia Pinto:** Why?! That makes no sense to me. No, really... Why? \[laughter\]

**Brian Ketelsen:** It was a bad joke, Carlisia... I apologize to all of the world for my bad joke.

**Carlisia Pinto:** Okay, it went over my head.

**Ashley McNamara:** You should expect this from Brian...

**Carlisia Pinto:** I should...

**Brian Ketelsen:** I haven't slept in a while.

**Ashley McNamara:** But yeah, so it's going well. It only goes well though if your kid's interested in it. You can't make them like it.

**Erik St. Martin:** Yeah, and depending on the age, the attention span... My son loves when we do stuff, like work on RC cars or we mod them, and sometimes a little bit of electronic stuff, when we work on the Cupid thing for the smoker... But he only hangs out for so long. I try to get a breadboard together and have all the supplies around to do an FM radio on a breadboard, and he didn't make it halfway through. He was like, "Can I go play...?"

**Ashley McNamara:** Yeah... When Tilford was really little, we got him snap circuits.

**Brian Ketelsen:** Oh, those are so cute!

**Erik St. Martin:** We have that still, yeah.

**Ashley McNamara:** It was great.

**Brian Ketelsen:** So I actually just had my first success. My son just turned 15, and I've been gently encouraging him to learn programming since he was a baby, and he's just always been "Yeah, that's cool, that's fun... Yet no, I'm not really interested. I'm gonna go play Minecraft or Overwatch" or whatever it is he's playing these days... But then just this year - March, last month - he said "Hey, do you have any more of those Raspberry Pi's laying around?"

**Ashley McNamara:** Minecraft server! \[laughs\]

**Brian Ketelsen:** I said, "As a matter of fact, I have a couple of Raspberry Pi's laying around. What do you need?" He said, "I was thinking about using a Raspberry Pi for Pi Day at school, to calculate pi, with Go. Do you think you could help me with that?" I'm like, "You know, I think I could. Yeah, that'd be fun." I let him do all the work and pointed him in the right direction... Of course, he just cut and pasted somebody's Calculate Pi In Go application, but he installed Go, he installed Linux on the Raspberry Pi... He did the whole thing. Then the compiled it, took it to school and got an A on his little project, so... Sometimes they just have to be ready.

**Erik St. Martin:** \[00:47:58.25\] I think it's kind of how Katrina said in her talk - your need or want to succeed or finish a project has to outweigh your reasons for quitting. They really wanna play their games and things like that, but in that case he really wanted to complete that project, so he's willing to persevere through any kind of struggle he has, because he wants to do that so bad. But when you're just like "Would you like to learn this?" they're like "Yeah, that sounds cool", and then when they start to struggle and they realize it's time, they're like "Yeah..."

**Ashley McNamara:** Yeah, that's why we combined games and programming with the Scratch stuff. Also, we were building Minecraft servers with Raspberry Pi's. That's sort of where we started with this.

**Erik St. Martin:** That's awesome. So anybody wanna talk about any projects and news before we -- I think some people have some hard stops.

**Brian Ketelsen:** Yeah, I think we do have some hard stops. There were several interesting things going on this month, absolutely.

**Erik St. Martin:** One thing that I saw, speaking of Steve Francia, is the new Developer Experience Working Group.

**Brian Ketelsen:** Yeah, I think that's more JBD than Steve, though.

**Ashley McNamara:** I think so too, yeah.

**Erik St. Martin:** I think he's on the team now.

**Brian Ketelsen:** Maybe, but it's JBD running the show. Don't take away a woman's credit and give it to a man, Erik. We'll shoot you down. \[laughter\] We will shoot you down!

**Erik St. Martin:** You're trying to get me \[unintelligible 00:49:32.01\]

**Ashley McNamara:** Listen, we need him. We need him... It's not time yet.

**Brian Ketelsen:** Okay, it's not time yet. \[laughs\] That's the most menacing thing anybody's ever said on this show. \[laughter\] "It's not time to kill him yet, Brian."

**Ashley McNamara:** It's not time... I'll just wait. \[laughter\]

**Erik St. Martin:** For anybody who hasn't seen it, there's a blog post talking about the initial goals of the Working Group, to kind of understand the community's use cases, and some of the stuff that we were talking about, like the struggle to get started, understanding tooling and things like that.

I don't know -- did they call for new members, or just participation from the community?

**Brian Ketelsen:** They did, yeah. They called for lots of participation and membership and activity.

**Carlisia Pinto:** There's a mailing list and it's been very active. There's a lot going on there. I haven't had time to read through it, but that's definitely the place to go to catch up.

**Ashley McNamara:** Did you guys put it in the Slack channel?

**Carlisia Pinto:** Yes...

**Ashley McNamara:** Do it...

**Carlisia Pinto:** Let's do it!

**Erik St. Martin:** Are you not looking at the doc, Ashley?

**Ashley McNamara:** No... Oh, am I supposed to be looking at the doc...?

**Brian Ketelsen:** There's a doc?

**Ashley McNamara:** Oh, if I did all my own work...

**Erik St. Martin:** No, you don't have to look...

**Brian Ketelsen:** It's okay. It's just a guide... A suggestion.

**Ashley McNamara:** Well, obviously, because I ignored it. I'm in the doc now, how about that?

**Carlisia Pinto:** I put the mailing list on Slack.

**Brian Ketelsen:** Alright, I have a complaint... I'm looking at this document about all these interesting Go projects and news, and there are two different Ruby implementations in Go this week?

**Carlisia Pinto:** I saw that!

**Brian Ketelsen:** What's up with that? Why do we have to rewrite Ruby in Go?

**Carlisia Pinto:** No, it's funny, because earlier in the week I saw one of them... One of you dropped it in our private channel, and I'm like "Why do we want this...?" And now there are two of them! \[laughs\] I'm like "Why?!"

**Erik St. Martin:** So here's how the story goes... I came across Rooby, which is like a Ruby the language-like language; it's somebody's own interpretation of the language, written in Go. And this is really cool, from the perspective similar to how we talked about writing compilers and interpreters and things like that in Go, so I thought that was really cool. And then I came across Go Ruby, which is an actual implementation of the real Ruby language in Go.

**Brian Ketelsen:** \[00:52:07.08\] Wow.

**Erik St. Martin:** Yeah. Both really cool.

**Brian Ketelsen:** Speaking of that, I'm gonna bring this back full circle, because that's how we do things here at GoTime FM. The book by Thorsten Ball that we talked about building the interpreter in Go - and that was a great conversation, I don't remember what episode it was... In the 20s probably, it was so long ago; we're up at what - 43 now? Time flies, I tell you what. So that book is the inspiration that Mark Bates used from episode 30-something, from live at the Dunkin' Doughnuts in Boston - he used that book to create the new interpreter that powers Plush, which is the new template language that powers Go Buffalo, and Plus is a killer, killer template.

If you haven't used Buffalo or Plus yet - because you can use Plush without Buffalo if you chose to... It is so much nicer in Go's built-in template. So much nicer! Go do that. Use Plush.

So I just brought that whole thing full circle. Did you see how I did that?

**Carlisia Pinto:** That was very nice. Good job!

**Brian Ketelsen:** Thank you. Thank you so much.

**Erik St. Martin:** Did anybody have any other projects to mention before we jump into \#FreeSoftwareFriday? Or news...?

**Ashley McNamara:** Well, I mean, Hugo's latest release was kind of cool, with custom formats...

**Brian Ketelsen:** Oh...! I wanna abuse that so badly! What do you wanna do with it? Tell me.

**Ashley McNamara:** I don't know yet, I don't know. The options are endless, it seems, at this point...

**Brian Ketelsen:** I know, right?! I read the blog post and the first thing I thought was "How can I totally abuse this?" Because you create these documents, and you create a template and a custom output format, the next thing you know you've got an API server that's feeding off of static markdown documents, right? I'm there.

**Ashley McNamara:** Do you wanna do a project?

**Brian Ketelsen:** I do! Call me.

**Ashley McNamara:** Let's do a project! I'm calling you. \[laughter\]

**Carlisia Pinto:** I don't know what to say. \[laughter\]

**Brian Ketelsen:** We're gonna abuse Hugo this weekend while I'm grilling my pig.

**Erik St. Martin:** Hey, we can bring it full circle there, too...

**Brian Ketelsen:** Do it!

**Erik St. Martin:** If we used it for something barbecue-related... There's lots to be done for the live barbecue stuff.

**Carlisia Pinto:** Where even is the blog? I'm on the page and I don't see a blog. You said you read the blog post?

**Ashley McNamara:** Yeah, hang on a second, I'll drop it in. Here you go...

**Carlisia Pinto:** Thank you.

**Erik St. Martin:** Is this about sweet and nice silly?

**Brian Ketelsen:** I'm not kidding, I wanna abuse this so badly... There are so many crazy awesome things you can do with these new custom output formats...

**Ashley McNamara:** I know, it's gonna be awesome. I asked Steve if he wanted me to say anything specific about that, and he said "Oh, there was a release?" \[laughter\] So he's in full vacation mode right now. He's on vacation.

**Brian Ketelsen:** Well, I think Bjørn Erik Pedersen has been the lead maintainer on Hugo for quite some time now.

**Ashley McNamara:** Yeah.

**Brian Ketelsen:** Or bep, as he calls himself these days. We've got JBP, we've got bep... I'm going by BJK now. \[laughter\]

**Carlisia Pinto:** So I wanted to mention real quick... Caddy is launching officially on 20th April. There's going to be a party somewhere in Utah... Just follow Matt Holt on Twitter to find out if you are in that area. He has really cute Caddy stickers, but we need to order them, because of course, it's unfeasible for him to send everybody a sticker.

**Brian Ketelsen:** I ordered $25 worth if you need any.

**Ashley McNamara:** Oh, I need one...

**Carlisia Pinto:** I would love to have one.

**Brian Ketelsen:** I couldn't help myself. I love Caddy so much, I was like "Stickers?! Must have all of them!"

**Carlisia Pinto:** Yes, that is how I felt.

**Brian Ketelsen:** Two seconds after he tweeted that I ordered a ton.

**Carlisia Pinto:** \[00:55:59.04\] Send me one.

**Brian Ketelsen:** I figured the stickers were probably relatively cheap, and any extra money was going towards Caddy, so it was a good investment.

**Carlisia Pinto:** Exactly. Yeah, he works so hard on that.

**Brian Ketelsen:** So yes, I'll share my stickers. I'm happy to.

**Ashley McNamara:** Yes, nice!

**Erik St. Martin:** I don't have to wait, I just have to drive around the corner. \[laughter\] "I'm here for the stickers!"

**Brian Ketelsen:** "Your stickers are here, Erik!"

**Ashley McNamara:** Rub it in.

**Brian Ketelsen:** Alright, \#FreeSoftwareFriday. Let's move on.

**Erik St. Martin:** Hey, you get to drive to Zed Shaw's house, so...

**Brian Ketelsen:** True.

**Ashley McNamara:** Yeah, okay... Okay, I still win. I knew that deep inside, I was just trying to help, though...

**Brian Ketelsen:** Wait, are you saying that Zed Shaw is better than me? Now I'm feeling inadequate.

**Ashley McNamara:** You know, I didn't wanna say it out loud, but...

**Brian Ketelsen:** I'm done with this show.

**Ashley McNamara:** You brought this on yourself... Awkward silence! \[laughs\]

**Brian Ketelsen:** Yeah, the world is still. Everybody wonders how serious they are.

**Erik St. Martin:** Because we mentioned Zed again too though, his stuff is really cool from the perspective -- I like when he goes and shows you how to break stuff, and then kind of tells you how to fix it so you notice the breaking. That's one of my favorite things about the way he teaches stuff. Because usually it doesn't work the way somebody says in their blog post or video. You're like "This is broken, and I don't understand why!"

**Ashley McNamara:** Yeah, the first thing that he had me do when I showed up at his house is he brought out these giant post-its and he said "Map out what you want. Map it out", and I was like "What do you mean?" "Just draw it out!" It took me forever... A solid three hours to map out basically an anti-social media app. I had no idea what I was doing, but it was so helpful, and I still do it now... Just drawing it out. I never would have known if I didn't go to Zed's house.

**Erik St. Martin:** That's awesome.

**Brian Ketelsen:** See, that's mentoring.

**Ashley McNamara:** Yeah.

**Carlisia Pinto:** It's funny, because when you were saying people have trouble knowing where to start, I didn't have a chance to jump in and say what I was thinking... What I was thinking was you start at the end. You find out what it is that you want, you break it down and then you start researching how you get that done.

**Ashley McNamara:** Yeah.

**Carlisia Pinto:** So I thought that was a really good tip that he gave for you, to start with what it is that you wanted to do.

**Brian Ketelsen:** True.

**Ashley McNamara:** I loved that.

**Erik St. Martin:** Alright, so \#FreeSoftwareFriday.

**Brian Ketelsen:** Let's do it.

**Erik St. Martin:** You ready?

**Brian Ketelsen:** I'm ready.

**Erik St. Martin:** Alright, who wants to go first?

**Brian Ketelsen:** I'll go first. I've got a good one this week.

**Erik St. Martin:** Okay.

**Brian Ketelsen:** I would like to thank one of my favorite open source contributors, Erik St. Martin, who this week put together some of my other favorite open source pieces, like Grafana and Influx and Telegraf and Mosquitto and Gobot and MQTT, and built the most gorgeous dashboard ever for our barbecue project. It's awesome.

**Ashley McNamara:** That's really pretty...

**Brian Ketelsen:** It's awesome. It's live. If you wanna see it now, you can go to http://barbecue.live and you can see it. Because I'm grilling right now, and you can see it live on the internet. I was livestreaming YouTube too, but I had to shut it off because of this stupid phone/Skype disaster because of my MacBook, but don't get me started with that.

**Erik St. Martin:** I've gotta correct the link though, for anybody listening live... We'll drop a link directly to the dashboard, because there's just like a placeholder with a barbecue gopher on it on the main page. You have to know the secret URL to get to the dashboards for Brian's grill.

**Brian Ketelsen:** ...to get to Brian's barbecue. I've got the link right here, I'll put it in Slack.

**Erik St. Martin:** Alright, how about you, Carlisia?

**Carlisia Pinto:** I found this really neat (I think it's neat) project called All Contributors. It's a way to recognize contributors to your project that makes it very visible. On their own page you can see an example down at the bottom. It gives you a grid with the photo or avatar of each one of the contributors. That was really neat. They have a spec you need to follow to be able to display it on your homepage.

**Erik St. Martin:** \[01:00:06.24\] Oh, that's really cool.

**Carlisia Pinto:** Neat, isn't it?

**Erik St. Martin:** Nice, I hadn't seen this before. And how about you, Ashley?

**Ashley McNamara:** Oh, I did mine early... You know how you said "Are you looking at the doc?" and I said "Yes" and then I closed it... \[laughter\] So yeah, mine was Hugo, I was really excited about that.

**Erik St. Martin:** Hugo is so awesome.

**Ashley McNamara:** Yeah. Can you guys hear my dog breathing into the mic? \[laughter\]

**Erik St. Martin:** No... So mine for this week - and I won't be upset for Brian taking away all of my stuff early, because he gave me a shoutout, so how can you be mad? - is actually to Grafana, InfluxDB and Mosquitto, because it was ridiculously cool in an evening what can get thrown together with zero lines of code written. Basically, you're able to just take a Mosquitto instance, which is MQTT, which is like a \[unintelligible 01:00:58.05\], Brian's Cupid project just blasts metrics at Mosquitto, then Telegraf, which is also written by Influx Data, just has a configuration for an MQTT consumer that reads that data in a certain JSON format and pumps it in as InfluxDB metrics, and then Grafana just reads that. So I was able to just kind of install those things and configure some stuff, and zero lines of code were harmed in this experiment.

**Ashley McNamara:** Crazy...

**Erik St. Martin:** Yeah, it's amazing that you can build what seems like a full-fledged app with writing zero code, right?

**Ashley McNamara:** Yeah, that's insanity.

**Brian Ketelsen:** Well, it totally made my day this morning, too. I woke up and Erik's like, "Hey, got a second to look at this link?" I was like "Sure." He pulls up this link, and it's my barbecue with all of the stats on it; I was blown away. I was like, "How awesome is this!?" It was so exciting. It has been one of the better days I've had in years, because of all of the awesome barbecueness.

**Ashley McNamara:** You should try sleep, it's good for you out here.

**Brian Ketelsen:** I've heard sleep is pretty good, but I wouldn't know.

**Erik St. Martin:** I have to accept blame in that, because I knew he was tired this morning, and he literally had said "I'm gonna take a nap" and I'm like "No, wait! I've gotta show you this thing!" \[laughter\]

**Brian Ketelsen:** I blame Erik for the campy lack of sleep in my life.

**Erik St. Martin:** \[laughs\] "Don't go! You must see this!" \[laughter\]

**Ashley McNamara:** Casey says, "Wait, did he come over and light barbecue to start gathering data?"

**Erik St. Martin:** No, actually I knew that he was going to be cooking something this morning, and I knew that last night we had kind of negotiated what the MQTT topics would look like, so last night I whipped together something so that when he started his smoker this morning he could see graphs.

**Brian Ketelsen:** That was the last thing I said before I went to bed - "I'm gonna send this stuff to MQTT. We'll graph it tomorrow, or sometime." And then I get out of bed this morning and the graph is already there because Erik is awesome.

**Ashley McNamara:** You guys know it was on the same call that you guys used to match your outfits, so what are you wearing tomorrow? \[laughter\]

**Brian Ketelsen:** I'm wearing my GoTime shirt. What are you wearing?

**Erik St. Martin:** I'm actually wearing my Denver Gophers shirt. That finally came.

**Brian Ketelsen:** Nice! Who drew that gopher?

**Erik St. Martin:** I don't know... \[laughter\] So that was more artwork by Ashley that's just awesome. I love that little Denver gopher.

**Brian Ketelsen:** It's awesome, isn't it?

**Ashley McNamara:** It's for a great cause, too. I'll have to put the link in Slack... I ordered that shirt weeks ago and I still haven't gotten it.

**Brian Ketelsen:** Really?

**Ashley McNamara:** Yes.

**Brian Ketelsen:** I've got mine, Erik got his...

**Ashley McNamara:** I wonder if it got lost...

**Erik St. Martin:** Maybe they just had to source sizes, or something like that...

**Ashley McNamara:** Possible.

**Erik St. Martin:** But that's the only difference that I can think of, aside from distanced for delivery, but I think enough time has passed to account for that.

**Ashley McNamara:** Yeah, shoutout to Denver gophers.

**Brian Ketelsen:** We heart Denver gophers here a lot. We couldn't have GopherCon without them.

**Carlisia Pinto:** Three months away, I cannot believe it. Three months and we're all gonna be in Denver.

**Erik St. Martin:** \[01:04:08.29\] Yeah, it's gonna be awesome.

**Brian Ketelsen:** So much awesome! Which reminds me, it's time to start practicing for the GopherCon band.

**Ashley McNamara:** Oh, is this a real thing?

**Brian Ketelsen:** Erik thinks I'm kidding, but I've already worked out with our welcome party people - we've got a corner, we've got live music set up, and there will be a GopherCon band, dammit!

**Erik St. Martin:** I know better than to think you're kidding. \[laughter\]

**Brian Ketelsen:** My reputation precedes me.

**Ashley McNamara:** I'm going to live-tweet about this.

**Erik St. Martin:** So I know that we have a hard stop for the recorded show... Adam is probably waiting patiently to stop recording before we corrupt all of his data...

**Brian Ketelsen:** He's twitching. Adam twitches.

**Erik St. Martin:** So with that, I wanna thank everybody for being on the show, especially thank you to Ashley for all the great things that you do for the community, and for coming on our lowly show, for lowering your standards.

**Ashley McNamara:** Thank you for having me.

**Erik St. Martin:** Huge shoutout to our sponsors for today's episode, Toptal and DataDog. Please share this show with fellow Go programmers. An easy way to subscribe is by going to GoTime.fm. We are @GoTimeFM on Twitter. If you have suggestions for topics or people - or the people is you - that want to be on the show, you can go to GitHub.com/GoTimeFM/ping. With that, goodbye everybody. We'll see you next week.

**Carlisia Pinto:** This was great, bye!

**Ashley McNamara:** Bye!

**Brian Ketelsen:** Thanks for being on the show, Ashley.

**Ashley McNamara:** Thanks, Brian!
