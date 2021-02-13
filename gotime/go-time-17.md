**Erik St. Martin:** We are back for another episode of Go Time. This is episode number 17. Today on the show we have myself, Erik St. Martin, Brian Ketelsen is also here...

**Brian Ketelsen:** Hello!

**Erik St. Martin:** And Carlisia Campos...

**Carlisia Thompson:** Hi!

**Erik St. Martin:** And today as our special guest, the man who needs very little introduction - everybody knows him from both the Go and Ruby world - Bryan Lyles.

**Bryan Liles:** Hi, how are you doing?

**Erik St. Martin:** So today we're gonna talk about monorepos, mentoring, movement building and anywhere this conversation goes, because you've been around the tech scene, in the public eye for quite some time and you have many interesting things that we can talk about -- wherever the conversation takes us. Do you wanna tell the audience a little bit about yourself, for those who may not be familiar with your work?

**Bryan Liles:** Yeah. I'm Bryan, and who am I? Well, I actually have the great pleasure of being able to say that I've been in tech for 20 years. I've only had tech jobs, mostly in the cloud industry or what we call the cloud industry. I actually started off in ISP land, then moved to server land, then to security land, and now I'm in cloud land.

Also, what I like to do is I like to make sure that tech is fun and inviting for everyone. I've worked in a lot of places and I've seen a lot of things, and I just like to go out and say that, "Hey, you know what? It doesn't really matter who you are, you can do this!" I worked with a lot of people, and throughout the years I've seen that anyone can have the aptitude to do what we do, and I just want to encourage everyone to do it.

**Erik St. Martin:** It's interesting that you say that; I was actually just having a conversation with a friend that's town-visiting, and he drives truck and he's been interested in tech, but he feels like he's not cut out for it, like he just doesn't have the natural ability to do that. We actually probably had a half an hour conversation that's similar to that; that's it's really about time investment and interest than it is sheer ability. That we kind of pedestal people and we think that only geniuses are capable, but if you put in the time -- anything, learning to play the guitar... You're not going to read one book and then be a master.

**Bryan Liles:** No, no. And really what it comes down to is how you learn. I had a little bit of a boost... My father was in the military and he got to see things that normal people wouldn't see. One day, he came home with computer books. They were C program language; I was 11 or 12. He said, "You should learn this."

I put a lot of time into it. My first language was C, my second language was 6502 Assembler, and my third 8080 Assembler. And that's weird. Who would ever do that? But what I see is that it's all about context. What I'm doing right now is thinking of ways to teach people machine learning just as a beginner thing. One of the things you need to learn for machine learning is linear algebra and graphs. Everybody hates graphs and matrices and thinks they're really hard, but you know what? Whenever you learned that, in high-school or in college, what they probably didn't do was give you context. If you understood the problem that you were solving in a context of words that you could understand, anyone can learn this. It's the same with computer programming.

**Erik St. Martin:** \[00:03:47.12\] I think though too that a little bit of "There's so much to know..." When you're first coming into the field, you feel like because you can't grasp all of those things, that you're not cut out to do it. I think over time you start to embrace the unknown. As developers, we're presented with new and challenging problems every day. Many times we start the project and we're not even sure how we're gonna do it yet.

People who are trying to get into the field and break into it, they start trying to do something and they feel that because they can't figure it out, that they're just not cut out for it, and they wait for that moment that they know everything they think they need to know to do the job.

**Bryan Liles:** Well, I look at it like Double Dutch. Have you ever double dutched before? It's really hard, actually, if you look at it. There's two ropes, they're moving in two different directions, and you always see the person who's getting ready to go next; they're always rocking back and forth, rocking back and forth. And then they just jump in. That's generally how I approach almost everything.

I solved problems that I've heard afterwards from PhD statisticians "You shouldn't have been able to do that without that knowledge." What I've learned from that is you have to be pretty naive in the way that you think about yourself. There's nothing you can't do. I live that life. I could go out and I could beat Usain Bolts, but until I get on the track and actually beat him, in my mind I'm actually winning.

It doesn't work for everything, but for computer things, it allows you to at least get the confidence to go out and figure out what you need to do, rather than be overwhelmed with all the complexities.

**Brian Ketelsen:** I read a book two years ago called Guitar Zero, about a PhD guy who had zero musical talent and just no aptitude for music, couldn't tap his foot to a beat. He took a sabbatical and decided as a learning project to write a paper about whether it was possible for someone with absolutely no musical talent to become a good musician, and it turned out that really it is just a matter of learning, and knowing what to learn is a key of that.

I think in the computer world, when you start off with nothing and you say, "I'm gonna become a programmer" that's great, because it's easy to make a Hello World app, but we have so many peripheral things that we have to know and learn to make real-world applications. I think that might be the hard part for people really starting off. So you can make Hello World and you can compile, but you don't know anything about talking to data, or databases, APIs... There is a really steep learning curve in terms of getting actual work done, versus just getting started. I think that's a frustrating point.

**Bryan Liles:** I agree with that. One of the problems that a lot of people who use methods to teach programming is we use programming as a means to an end, and that's actually not it. Programming is a tool - it doesn't matter what language it is. What you are trying to do is solve something. Right now, this is a project; I'm writing a Slack bot. I don't know much... Well, actually now I know more about Slack Box, but I know what a bot does, and I know what the inputs are, and I know what I want it to do on the output. Once you understand that, then you can just peel back one layer and figure out, "Well, how do I print something in an output?"

What we try to do whenever... I've seen some of the curriculums from these boot camps and other programs where they're just teaching, "This is a variable. In a web browser, this is how you make this happen." Even if you go down to Go, we can say "This is a goroutine", but we don't ever tell people the mindset or what it feels like to be happy whenever they get it right. They don't even know how close they are to getting it right, so they can't make those bridges themselves.

And do you notice what I'm saying? It's all the same things as just teaching, but really what I'm trying to do is paint the happy path for everyone, so they can understand what it feels like to succeed. People want to succeed, so they'll fight harder to get there.

**Erik St. Martin:** \[00:07:53.27\] I think there's a lot of stigma in it too, because we're constantly comparing ourselves to the rest of the world. A highly curated list of the best that the world has to offer, so it's easy to feel like you'll never get there, but there's also kind of being comfortable in your own skin and accepting that. There's plenty of people way smarter than me, but that's okay. I tell people what my number one skill is - being able to be thrown in the deep end and figure out how to swim. Being comfortable with learning and not knowing and exploring. Like you said, you start off on these projects you know nothing about.

I often try to get into electronics projects. I know nothing about electrical engineering or electronics engineering, but I just kind of explore away, make mistakes and learn along the way and that's okay. Like you said, people don't know how to figure out what was a success; that they have acquired some knowledge. Even though they don't feel like they learned web development yet, they've learned something. That's a check mark on the list of that foundational knowledge that you need. Katrina Owen spoke to this at the GopherCon talk - to start drawing those connections between things.

When you first get into the field, there's just too much to know.

**Bryan Liles:** Yeah. And you said that you don't have to measure yourself against anyone else - I have a problem with that. I measure myself against myself. When I'm doing okay, I'm exactly one Bryan; then when I'm doing a little bit less, I'm maybe nine-tenths of a Bryan. Hopefully, the measure of Bryan actually increases as time goes on. What I don't ever do is compare myself to anyone else. The reason why is no one else grew up like I did. We didn't grow up poor, but we didn't grow up rich. I didn't get to go to all these good colleges. My parents were like, "You're gonna pay for it if you're gonna go. And by the way, you're gonna go."

I had a lot of distractions, but what I learned to do is realize, "Who's gonna get you there? Bryan's gonna get you there, not that person I'm comparing myself to." So I just stopped comparing myself to other people. And it helps your ego whenever there is Jeff Deans out there; when I read his papers... You know what? Jeff Dean and Bryan Lyles are two different bases; we just don't compare each other.

**Brian Ketelsen:** I really like this conversation, because talking about Bryans in the third person just makes me feel strange. \[laughter\]

**Erik St. Martin:** That's a conversation that I can't have. I can't talk about Bryans in the third person.

**Brian Ketelsen:** ...it just makes me wonder if I'm half of a Bryan or two-thirds of a Bryan today, and which Bryan am I half of.

**Bryan Liles:** Well, you know, we've discussed this before. There is definitely the superiority in the concept that my name has a Y versus an I, so you know where you stand.

**Brian Ketelsen:** I do. I'm at most 95% of a Bryan.

**Bryan Liles:** But, like I said, don't compare yourself to me, compare yourself to Brian K.

**Erik St. Martin:** I think that that's probably a good takeaway too, to constantly be evolving yourself and not look to other people. Like you said, you're comparing yourself to your perception of somebody else. Because they're smarter than you in one area, you assume they're smarter than you in all areas, and that's impossible. Everybody's gonna have specialties. It's all about where you put your time and energy and how you evolve as a person, and in your career. You're gonna be a natural at some things.

I can do server-based stuff pretty well, distributed systems-type stuff. But you put me working on a game engine, I'm gonna be clueless.

**Bryan Liles:** It's all triangles, don't worry about it.

**Erik St. Martin:** It's all triangles. \[laughter\]

**Brian Ketelsen:** Polygons everywhere.

**Erik St. Martin:** Bringing back Katrina Owen's talk, because I think it ties in a lot to this, how to teach and how to give people small wins - what was your take on that talk?

**Bryan Liles:** \[00:11:59.06\] Well, my number one take is, first of all, I adore Katrina. I've met her many times throughout the years and I love to see her speak. The second thing that I took from that was I liked the visualizations, I loved her slides.

**Brian Ketelsen:** Oh yeah, weren't they beautiful?

**Bryan Liles:** It was one of those talks where, "Well, someone put some thought into that." I speak a lot, and I never use pictures in my slides, so every time I find that someone uses a lot of pictures and they use them well... I was pretty impressed.

The third things is that I find that we... This is a point that I think she brought up - who owns tech? Who is tech? What is tech? We need to work on making tech more relatable to certain people. Some people want to just run up the hill. They're those free rock climbers who don't need any type of bracing or anything like that. But other people - I don't know, maybe my children will actually want to take the stairs... Or actually, the upwardly-facing escalator ramp, where it's slow, but it still gets you to the same place. What I've been meaning to do is figure out how to break those barriers down, and I'll be the first person to let you know I don't know how to do that. But what I do know is that we do have a need for it. And I'm not scared to take a step back sometimes and say that my way is not the best way, and that we should be evaluating more, because yeah, I am a person of color, I'm the representative person, a minority, or whatever else you wanna call me - a brown developer - my path into this was weird. I don't meet a lot of people who look like me, but that's not to say that another black woman, another Latina or anything else will have the same path.

We need to work on breaking these down to make them more relatable, or these concepts down, to make them more relatable to more people. Like I said, this is not easy. It's extremely hard, and we're not gonna find answers this generation. It's gonna be a generation or two down the way, but we need to make it better.

**Carlisia Thompson:** I'm listening to you talk about how you don't compare yourself to other people. I totally compare myself to other people.

**Erik St. Martin:** I do, too.

**Carlisia Thompson:** ...and I think it's useful for me to do so. I hope it's in a healthy kind of way that I do that. There is totally the unhealthy aspect to it, that I'm thinking "I'm not as good as that person and I should be." But I also try to make it in such a way that I am looking at the happy path for myself, just like Bryan Lyles was saying, what he's trying to teach - he's trying to show the happy path, what's possible for the person to achieve. I think that's awesome, it's very productive to try to teach people that way.

Because, to make a side note, it is hard to do something until you see what's possible; then you just go for it. At least for me it happens like that. But as far as comparing myself to other people, when I look at other engineers and I see, "Wow, they have ten years of experience, or they have five experience and look how much they accomplished." And I look at the projects they worked on and I'm just in awe. I start thinking, "Wow, I should aim for that as well, because that looks interesting to me. I'd love to know those things. How do I get there?"

For example, I've just covered Jack Lindamood. He spoke at GopherCon as well. He was not on my radar until recently, and I'm totally in awe of the things that he has done; how well he writes his blog about Go is amazing. And I'm thinking, "How did he get to work on those projects? How did he get there?" Because I didn't run into those opportunities. Do I have to carve these opportunities out? How do I do it? Do I need to get a mentor? Do I need somebody to pull me in? How do people get to that point?

\[00:16:06.06\] I'm trying to find a way... For example, I look at people who are at a certain level, for example Ines Sombra (she works at Fastly as well). I am totally an admirer of hers. She speaks at conferences, she runs the Papers We Love, she reads papers... So I'm trying to emulate the things that she does, to try to become that type of professional. So I'm always trying to emulate people whom I admire, people who work on things that I find interesting, like "Okay, how do I get my chance to work with projects that these people are working with because they sound so interesting to me?" And I don't know how, other than just trying to emulate what they do.

**Bryan Liles:** I have a thought on that, and specifically with Ines. I enjoy listening to Ines speak. If you ever get a chance to hear her speak in person, it's amazing how fast she speaks and how information-dense it is. It's actually quite an event. But one thing that I would ask Ines is not really how she does what she does, but why? Ask her the feelings that she gets whenever she does Papers We Love, or talks about all the crazy computer sciency stuff.

Because we look at her success and how far she's come, but we don't understand her impetus for doing it, and that's what we need to understand. I tell people all the time, it's not the How, it's the Why. Why do we do what we do?

Once you understand why she does what she does, or why someone else does what they do, then you can understand how they're doing this and how they're getting the success.

**Carlisia Thompson:** Yes. Just to clarify, because I don't want to leave people with the wrong impression. I run into a lot of things, I run into a lot of people, and a lot of things don't resonate with me. For example, when I started getting to Papers We Love, we'd just started a chapter here in San Diego - that resonates with me. I want to have that kind of knowledge, and that medium appeals to me. So I know how I feel when I run into these things.

When I look at somebody's work and that work resonates with me, I know how I feel and that's all I need to know. Maybe asking them how they feel would help me a little, too. Maybe they feel awful about it; that would dissuade me... But the point is there are things that we could be working on, that resonate with me, and then I do want to note the How. I want to go to the next step - how do I get involved with that? How do I get enough knowledge so that if that project's going on in my company I can be one of the people working on it because I have the skills?

**Erik St. Martin:** There's two points to that, that I'd like to point out. You said how this person was relatively unknown and within five years became this... I think we see that with businesses too; it's the myth of overnight success. You see people and it looks like they were completely off the map, and then in five years they became somebody prominent, but you don't see the ten years before that. For instance, before I got a really good paying tech job, I had been programming for fun little stuff on the side for something like five years before I even had a programming job. So there's all this stuff that leads into it, and we see what happens afterwards. We don't see everything that happens before the spotlight is pointed in that direction.

To the other point, I'd like to start seeing people share their stories. How did you get into tech? Because I think that humanizes people and you start to see that it was a long, hard road to travel; it wasn't just this immaculate thing where they just in two years became some prominent engineers. There was a long line of things before that, that we just didn't see.

\[00:20:06.03\] And even backgrounds - as Bryan Lyles pointed out - the way you grew up... I didn't grow up with a lot of money; I dropped out of high-school, I went back for a GED, completely self-taught... So, like Bryan said, everybody has their own path, and there are many paths that lead to the same place. Just because yours is different doesn't mean it's wrong. I think the passion and the desire to do well and the interest in the topics that you're working on is what really gets people successful. Because you can get lost in your work. You can go home after whatever your day job currently is, and you can lose five hours into it just because you're drawn to it.

**Carlisia Thompson:** Yeah, I like that idea a lot. Cassandra Gil from GoBridge had the idea of a blog post series where people will write blog posts anonymously, telling about their story. We are going to be seeking people who will have what we would call a different story from the mainstream. And I think they're probably the mainstream more than what we think is mainstream, because there is so much diversity, and I don't think we tend to talk about it.

**Erik St. Martin:** I love the Why question, too. I think that's a very good point, Bryan, that a Why is really what matters. Because it's always probably gonna end in passion. If somebody did something that really became a hit, it's probably because they were just really driven, for whatever reason; the technology interests them, the problem that it was solving interests them, things of that nature. I think that's what it's gonna boil down to.

**Brian Ketelsen:** Yeah, you almost never see technology succeed just on the basis of being cool technology. That's, at least in my experience - in fact, that might even be the kiss of death for a technology. Just because it's amazing technology, if it isn't solving an interesting problem or causing you to think differently, then it's just great technology, but not necessarily something that could be successful.

I think that same thought pattern goes with learning and programming. You could have a person who's a brilliant programmer; if they don't care about what they're doing, they're probably not gonna stay a programmer long.

**Carlisia Thompson:** I always say this... When people ask how I got into programming, I always say you have to really love it, because if you don't love it, you're not going to last a long time. You have to love it because it's very rigorous and demanding. I think you have to have a certain aptitude to dig deep and take the next step, even though a lot of times it's not easy. You have to keep doing it, otherwise you don't get anywhere.

**Erik St. Martin:** I think people need micro-successes too, to develop the love for it. Most people probably got into programming for one reason or another and then they did something, and that feeling that "I've built this" came out of it. This is a similar thing to a contractor. Long, hard working days, you bang your thumb with the hammer and all that stuff, but the exciting part is when you step back and you look at that finished product, and you're like, "I built that..." People need those wins.

Then I think it takes a different frame of mind, but I don't think that you have to have it to begin with. You can shift it.

\[00:23:43.16\] As an example, I had a friend over one day and we have these crazy RC cars, and you break them more than you drive them. So we're sitting there working on them, and he's getting really frustrated with his. He's like, "I don't know how you do this. How you can sit there and take it apart, put it back together and then keep tweaking and not get frustrated." It's like, I just look at it differently. Rather than feeling like the act of doing this is preventing me from what I want to do, which is driving the thing, I enjoy the process. I like sitting around, working on stuff and figuring out problems, having a beer, chatting with a friend while we're working on it...

I think that you can shift your mindset too, to where something not working doesn't cause you anxiety but it causes excitement, where it's a puzzle to solve. "I'm gonna figure this out." Once you shift that mindset, things become much easier.

**Bryan Liles:** That's a pretty important point there. I use this a lot in my life. I'll give you a good example of something that I've done more times over the years than I can actually count. The impression is that Bryan is some super programmer... And yeah, I do know a lot of languages - I think I'm up to about 20 now - but the reason why is because it's never because of the languages; it's always because I wanted to learn something.

The first GopherCon that I went to, I didn't know Go. But I saw all these nice people, and I knew Brian from before, and I knew of a couple people from before, and I'm like "Well, this is kind of cool. If these kinds of people wanna come to this kind of conference, I think that I should learn their language."

So what did I do? I said, well, I work at DigitalOcean. What can I do at DigitalOcean with Go? Because we weren't actually using Go. There was maybe one tiny Go project at that time. So I said, "Well, I wanna benchmark something with our cloud." I said, "Well, can I write an API in Go? Can I write this code in Go?" Because I didn't wanna write it in Java or Ruby or anything like that. No, it wasn't there. That was my first project right there. My first project was writing an API client for DigitalOcean in Go. Was it good? No, it was horrible. But does it still exist? Yes, it still exists. But it has also allowed me to move on.

I've been able to take my little win from writing this a few hundred-line thing in Go, to writing now the official API client for DigitalOcean in Go. Where did that come from? Well, I actually have the ability -- I boot up hundreds of virtual machines some days, and I got tired of writing software to do it, so I said, "I wanna do this for command line, because I love command lines."

So I just started writing it. In my spare time, when I was on the airplane, when I was at a conference speaking, when I was not doing something else. That evolved into our official command line client. And that's the thing you see. You see the success of the software that I wrote, but you didn't see that this came from an idea that I had two years ago, and I just slowly made it happen. I think that's what people need to realize. We don't need big wins.

I have this whole theory about being rich, and I can tell you why you don't wanna be rich. You just wanna pay all your bills and actually have one more dollar than you need to spend every month. I'm talking about after you pay yourself, after you save for vacation, after you pay for retirement, after you pay all your bills. Because guess what? If you have ten more, what are you gonna do with that money? If you're just gonna sit on it, it's not doing society any better; you might as well just give it away.

So what I'm saying here is that we just should build up slowly. We build up our savings slowly, we build up our knowledge slowly, we build up our personalities and our brand slowly. All these things that I've been doing, I've been doing almost the same things since 1994, and it took ten years for people to realize who I was. Now, ten years later, people are seeing me in multiple language communities and they're saying, "How did Bryan do this? Where did his ideas come from?" I just had a lot, and I played with them forever.

**Erik St. Martin:** \[00:27:44.02\] Yeah, that's a valid point too, financially and knowledge-wise to slow down and enjoy the journey. That's one thing that I know myself I've been trying to get out of. I raced and raced and raced... I wanted to reach what I felt was a level of success, and when you put yourself into that mindset, you never get there. You will always keep drawing the finish line out further and further. In the recent years, I've started to embrace that, but I'm working all the time. I'm missing out on family time, and that's the stuff that matters. You can't get that back. In the past couple of years I've been kind of going backwards.

I don't want or need as much money; I wanna slow down, I wanna be happy day to day, spend time with my family. But the knowledge thing, it kills you; you constantly feel like you don't know enough, so you learn... And you don't take a step at the end of the year and realize how far you've grown yourself, because you've drawn that line out further.

**Brian Ketelsen:** Maybe that's the hard part for beginners to understand, the non-linear curve of measuring your success. I agree with almost everything we've said. Everything starts really small, just having a tiny little Go API app that works against the DigitalOcean servers, turns into DigitalOcean's DO control, which I've seen countless people point out as one of the best examples of how to do an HTTP API client in Go.

**Bryan Liles:** Yaay!!

**Brian Ketelsen:** Yeah! More than once I've heard people say, "If you're looking for a way to do an API client, go copy this code." That didn't happen because you sat down one day and wrote the best code in the world; it happened because you did uglier stuff earlier and learned from it each time. There's a progression for all of us that we forget. It's easy to forget that we were all in that spot some time ago, and we're where we are today because of all of the things that we wrote before. As a beginner, you don't have that experience. You don't understand that these small steps each build upon each other and allow you to become better and better, because you don't understand the scope of what you don't know.

**Bryan Liles:** Yeah. If I were to write a book, this is what I would write a book about. The neat thing is that what I'm talking about translates well to programming, specifically Go, but it also translates to everywhere else in life. If you want to have a religion of Bryan, that's what it is. It's not my old religion, where I was characterized as someone who had a potty mouth, but this is the real religion of Bryan.

Actually, that's a great segue into something else that I wanted to talk about, where a lot of people know me from. About 8-9 years ago I did a talk about testing. I'm actually really interested in testing as a theory. I don't think that just having tests makes your code any better, but I do think that the act of testing and thinking about how your code works does make you a better developer, so I like testing.

I had this talk that was a sidebar talk at this conference, and he said "You have ten minutes. Make it good." I said, "Alright." So I went back to my slides and I put an F-bomb on every other slide. And not because I have a particularly bad mouth - actually, I kind of think that I don't have a bad mouth - but what the point was is that if you see somebody on stage pointing at you, cursing like a sailor, you're going to listen to what they're saying.

What I happened to be talking about was not politics or anything crazy like that, it was testing. I knew this was gonna resonate, and it still resonates 8-9 years in. When people come working with me now, they're like "I know of you because you did Test all the effin' time." And I'm like, "That's crazy! But do you realize what I did to you? I taught you something and you didn't even know it." And it's not about me talking about TDD or anything like that; what I did was I communicated the good passion that I felt about testing and I gave that to you as a gift. You took that gift and you want that feeling, too. So you went and found out, whether you liked it or you didn't like it.

\[00:32:06.18\] I'm not telling you to do TDD all the time; I really don't care, it's not my code, you don't work for me. What I'm saying is that I want you to have those opinions, and I'm giving you the field to go build those opinions. I think that's been my method over these years, and that's what when you see these talks that I do, that's what I'm trying to do. I'm just trying to get you interested in something that you might not have known about.

**Brian Ketelsen:** That's interesting. When I wrote my talk for abstractions I wasn't trying to convey information, I was trying to convey my feeling about the outcome of a particular technology. It's exactly what you just said. I didn't want people to learn about the subject that I talked about, I wanted people to understand the feeling that that subject gave me, because I think that was more important than the actual technology in my talk.

**Bryan Liles:** Yes. You know, I've used that. Just recently I spoke of abstractions as well. I didn't go into it, but really what I was talking about during that whole entire talk was a finite state machine, but I wasn't using those words. I was just talking about it, about what it allowed me to do, what this code allowed me to do, and "I was able to do this and then I could easily do that." But to get those words out there and explain to somebody this concept without using those terms, that's what I find the big challenge is, and that's why I like to speak. I speak about bots. And it's not because I really care about chat bots - I kind of like them - but I like all the technology that goes into them. If you have a chat bot and it goes to more than one server and you have multiple websockets connecting, because you're using Slack, how do you manage that? Guess what! That's a distributed systems programming problem. But I don't talk about it that way; I talk about it as "I just have to have multiple binaries, and I need to orchestrate those over multiple machines, or maybe multiple data centers." That gets people excited, whenever you talk in a language they like.

And I'm getting older, I don't like all the hip things anymore, but I will say that I do know developers, and when we learn to talk to developers in a language they can understand - and it could be sometimes really technical, from a paper - I can't read papers, they make me fall asleep - but also to a very light conference talk. What we're trying to do is make everybody engage so they can progress to the next goal. That's how I think about that.

**Brian Ketelsen:** This is a good time for us to take a quick break and talk about our sponsor today, which is Backtrace.

**Break:** \[00:34:39.05\]

**Erik St. Martin:** Awesome. I actually remembered you from TAFT too, Bryan, when we met at GopherCon. How can you forget that video...?

**Carlisia Thompson:** Same here.

**Brian Ketelsen:** It's funny, because I didn't remember TAFT, I remembered Smartacus \[00:35:55.02\] I spent so much time reading Bryan's blog posts about testing...

**Erik St. Martin:** That's true too, yeah...

**Bryan Liles:** \[00:36:01.20\] Yeah, I used to blog. You know, this day Twitter killed the blog star... \[laughter\] I really would love to blog again, and I know a lot of people say that, but I'm just not in that mood anymore. But I love to share. I do love to share, it's one of my favorite things.

**Erik St. Martin:** That's kind of why I like the podcast thing. The writing thing... I've never been a very good writer, and I struggle with organization and I feel like I revise it too many times, and then I just give up on finishing the post, but I like the freeform nature of podcasting, where you kind of just get to have conversations about stuff.

**Brian Ketelsen:** It's a nice way to share all of my opinions without having people be able to comment on my blog either. \[laughter\]

**Erik St. Martin:** They will comment on their blogs, though.

**Brian Ketelsen:** That's right.

**Erik St. Martin:** So you've been traveling a lot, Bryan, doing some talks at a number of conferences. You're doing LinuxCon, Velocity... I know you were at Abstractions...

**Bryan Liles:** I did all of those... This year I think I spoke maybe 10 or 15 times, and then I have something coming up next week. I'll be in Buffalo at a conference called CodeDaze. They're allowing me to give a keynote, which means I won't talk about anything specific; and I will not. Then, there's always the big conference, Web Summit in Lisbon, Portugal this year. I'll be there in November.

The reason I do this - and I've been thinking about this over the last minute - is years ago I heard something about the 10x developer. I don't know why it really grinds my gears and hurts my ears; I'm trying to be a 10x developer, and what I'm trying to do is be 10x - raise the group's productivity by 10x. Whether I'm a mentor, motivator or antagonizer - I can be antagonizer - it's really why I do all this stuff. I really just want the community, in whatever community I happen to be in, whether it's my home family community, my DigitalOcean work community, or the greater programming communities, dev-ops communities that I'm in - I would just like them to be better; that's really what it all comes down to. I want people to be the best that they can be.

And then you know what? At the end of the day, give me credit for it; and then we all win.

**Brian Ketelsen:** Amen! Preach it.

**Erik St. Martin:** Yeah, the 10x thing isn't actually as crazy now as it was. I remember when everybody wanted a 10x developer... I feel like even 10x people are not 10x people, right? You're 10x people for three days a week, and then you're a X/2 person for the other two. It's impossible to sustain that level of energy. And I think it's highly based on what you're working on. If I'm presented with new and challenging problems, I'm an animal. You give me monotonous stuff, I'm just not nearly as productive because I'm not excited.

**Brian Ketelsen:** Did you just call me a half-ass developer?

**Erik St. Martin:** \[laughs\] Half X!

**Brian Ketelsen:** Oh, half X. I misheard... \[laughter\]

**Erik St. Martin:** This is a PG show, Brian.

**Brian Ketelsen:** No, it doesn't have to be.

**Bryan Liles:** I'm very PG.

**Erik St. Martin:** I try to be... I think that comes with age. You start realizing that you don't sound professional or intelligent speaking those ways, and you only further other people talking that way. It's kind of contagious. You have people over and they're all swearing, so everybody else starts swearing.

**Brian Ketelsen:** Well, there are just so many better ways to get a point across than swearing, although I do agree - I don't remember who made the blog post, it might have been DHH... Somebody said recently about the science behind swearing and how it does cause you to instantly pay attention to that particular topic, and I agree with that; I just don't think it's required most of the time. If you need that to bring attention to what you're saying, perhaps you should be saying more interesting things.

**Bryan Liles:** \[00:40:15.04\] Well, that was the whole point of the "Test all the effin' time", because testing is boring inherently; no one wants to do it, especially not in Go. I could go back and forth about my perils of testing in Go, but I want people to do it and not feel that just because it's hard, to do it poorly or not at all.

I think this is one of the things that the Ruby community got really well, is that, yeah, we had a whole bunch of testing frameworks, from RSpec to whatever else, but people thought about it. In Go, I think we dismissed it quite of quickly with the whole "no dependencies" movement, where we just didn't even think about, "Hey, Google is big, they have lots of engineers, lots of smart people, but guess what? They have not solved all the problems." AWS is still beating them in cloud, other people are still competitive in other places. Google doesn't have all the answers, so we need to go out and find those answers, because they can't even give us good dependency management, so why do you think they're gonna give us good testing management? And that's not a dig, that's just reality; I love you all.

**Carlisia Thompson:** Are you saying the test package in the standard library is not good enough and that we should be using others?

**Bryan Liles:** How about this - I will say that it is not always good enough. I can compare two things, I can use DeepEquals, I can write out all that stuff, or I could, on other projects, like I do in DO, control, CTL or whatever you want to call it - what I do is I use the Testify package, and I use their mocking package. Is it better? I don't know. It makes me move smoother sometimes, but then there's things I can't do with it.

This is the fallacy of smart people - we like to think that whatever we think, as a smart person, is the smartest thing. But that's not true. It might be the smartest in this situation, but who can account for all situation? So I would rather say that, "Hey, you should try these things and find something that works for your team." We do have the sticklers, and then we have the people who say, "You know what? I'd rather be doing something else other than writing three-line test cases when I can just write one and move on.

I'm never gonna say who's right and who's wrong. I'll say that we should be more pragmatic about it, and not fall into dogma.

**Carlisia Thompson:** Yeah, I like this philosophy of being pragmatic. Maybe because the Go community is relatively still new, there is a lot of purism and you're never sure if you should veer off the beaten path... So it's good to hear that message too, from experienced people.

**Bryan Liles:** It's religion. You know, I like the concept of religions and I'm not anti-religious, I'm just not very religious myself. But I do feel that once you get on the soap box and start saying that we need to do it this way or that way, it's like the difference between Christianity, Judaism and Islam. There are differences, but they're awful lot alike as well, and we need to work on celebrating our alike rather than your differences.

**Carlisia Thompson:** That's a very good point. In the Ruby and Ruby on Rails community they did an excellent job in bringing developers into the testing mentality, and I wanted to ask you where does the Go community stand, as far as you can tell, on the testing philosophy? You already gave some hints, but in more practical terms, what do you see?

**Bryan Liles:** \[00:43:45.11\] Well, I will tell you this - I can go to look at the github.com/stretchr/testify and I'm sure there's a lot of stars there. That alone says that there is a lot of things going on. But then you have the other integration-style testing things that are in Go. Yeah, they're a little bit weird - they're not quite Go... I'm thinking of Gomega.

**Brian Ketelsen:** Yeah, Ginkgo and Gomega.

**Bryan Liles:** Yes. It's a little weird, but guess what? It works. And then you have another one that's kind of like Gomega, but they have the cool little web page inversion of it...

**Brian Ketelsen:** GoConvey.

**Bryan Liles:** I'm thinking more of an integration-style testing... What I'm saying is don't dismiss those; understand the reason why they exist and why somebody will sit down and spend all that time writing them, before saying you don't need that. That's the problem that I have with just "You should do it this one way", because guess what? It doesn't work this one way whenever we don't have all the other things exactly the same.

And you know what? Adding a test dependency on Testify or whatever else - is it a really big deal? Probably not. Not as a big deal as you actually making a big deal about using it. It's something that can happen.

I hate to get lost between those kinds of differences, rather than "Hey, we're actually doing too many allocations" type things. When we get lost in the testing battle, we actually lose sight of what's important.

**Brian Ketelsen:** It's funny, the Ruby community was so strong on testing; that was such a big message, such a big thing that came out of Ruby and Rails. And I didn't like testing in Ruby, and I didn't write tests in Ruby, and it wasn't until I came to Go where I actually learned to really enjoy testing. Now, I often do TDD, where previously I wouldn't even have considered that. I just thought the whole idea of TDD was such a crazy religion. And I don't do it because I think there is business value to it, I do it because I think there's a practical value to it. Sometimes I don't know how I'm gonna solve a problem, so I write a test to determine whether that problem is solved and explore ways to do it. Go helped me get there far better than Ruby did, which is not a digging against Ruby at all, because it's really easy to test in Ruby; I just didn't enjoy testing in Ruby, and I enjoy testing in Go, which is so strange.

**Bryan Liles:** Yeah... I like to do TDD, but sometimes I just write software. I have a project in front of me right now where I just started writing because I wasn't sure if my abstraction was right; generally, whenever you get to the point where you're starting to lay down test, people are much more reluctant to change their way. So I said, "I'll just write for a little bit, and I'll write some tests to make sure that some things are working right, and then I'll go back through and I'll have these high-level tests to make sure that the application works right, and then I'll work down towards the units."

The reason I work like that is because it works for me. This is not a prescription for anyone. But what I'm saying is that we need to understand, once again, why do we have tests? What are tests for? Are we using them to prove correctness? I'm actually using it to make sure that I can move faster and I don't have to swap this whole HTTP library out that I use. Because I knew I was gonna mess up, and I'm gonna have to replace it with something else. I just wanna make sure the rest of the code works whenever I swap it out.

That's the only reason I write tests - because I don't trust future Bryan; or actually, I don't trust past Bryan. He's a jerk.

**Brian Ketelsen:** The past Bryan, exactly. It's always past Brian getting me in trouble.

**Erik St. Martin:** I like the safety of refactoring by having a test suite. I've never been a hundred percent test-coverage person because I think that that just makes people write tests that just hit the code and they don't actually truly exercise the program. Also, I've never adopted that whole red-green-refactor thing; that just felt not like typical programming workflow, I just never cared for it. I'm a little bit, like you said -- I'll develop some stuff, I'll write some code that kind of tests it so that as I'm adding new features I don't have to keep going back and checking the things that I already knew worked; I can see when I break those by adding the new features... But I mean, that's about it. I try to get as best a test coverage as I can, but I'm not going through testing every single edge case.

\[00:48:15.05\] And typically, through the development and through the usage of an application, I'll throw in tests as issues come up, to prevent regressions. I like testing, but I'm not a "test first" all the time. There's some problems where I will start with the uni-test first and kind of build from there, but there's other times where I'll just build the application first and then kind of start building some sanity checks.

**Bryan Liles:** Yeah. Red-green-refactor is hard, and I like how books have it and they're like, "That's how you do it." I always use something different, and I know this is valid because before Jim Weirich died, he said "Bryan, this is a good idea." And I stuck with this one.

So what I've done is I write a little code, and maybe I write a test first or maybe I write the test last; I run the test, and hopefully it fails, because you should try to make those tests fail. Then I change a little bit of code and I run the test again. I don't think about red-green-refactor. I do red-green-red-green-red-green-refactor-refactor-refactor. I think once we start prescribing this method, this will make a lot of sense to people, and people start losing interest.

Just remember, all we're trying to do is write code faster. If I can write code fast with no test and it was a hundred percent correct, would I write tests? No.

**Erik St. Martin:** Yeah, until future Bryan has to deal with past Bryan, and tries to refactor.

**Bryan Liles:** Well, past Bryan is a jerk, and we know past Bryan is a jerk, so I don't expect him to be better.

**Carlisia Thompson:** For me, one thing that I have adopted at some point and since then I always use it, and it has been tremendously helpful, is to have the red there at some point. I don't care if I'm writing the test first or not, but making that test fail makes a huge difference, because you could be writing and everything's passing -- guess what? It's not passing what you think it is testing, so making sure it fails with the proper case makes a difference. Because it happens... Sometimes you write a test to fail and it doesn't fail, and you're like "Whoops! I'm not even testing what I thought I was testing..."

**Erik St. Martin:** There's also some unit tests... I know in Ruby they have it - I forgot the name of the library now - where it inverts your test to basically make sure that it would fail without it. They have fuzzying tools and stuff like that.

So we talk about having those tests there for refactoring; unless it's a large refactor that I have to do, it doesn't always bother me to write the tests before I do the refactoring. If I'm looking at some small library with very little surface in the API, I'll write a test, test out a couple of scenarios that I wanna make sure work, and then I go in and I refactor stuff. So it's not always a bad deal, but like you said, the general consensus is we should test as much as we can, as much as it adds value to the project and to your development time and the safety there.

I think if you're on a large team and lots of people are touching the same code, I think it benefits you more to have a lot of test coverage, because there's a lot of risk there, that I start stepping in and making changes, but then, you know... Brian and Carlisia are working on stuff and I break them because I'm not testing the area that they're working on, and stuff like that. So for large projects and large teams I think it benefits more.

**Carlisia Thompson:** And testing is something that really pays off to learn how to do well.

**Erik St. Martin:** Without a doubt.

**Carlisia Thompson:** \[00:51:47.02\] Right? I'm not there yet, I keep learning, but you look at a codebase and it has a ton of tests, and most of them are useless. It consumes time from everybody - they have to read... I mean, when I look at a new codebase, the first thing I read is the test, because it will tell me the business logics for the system. If you find everything is so convoluted, and once you start learning the codebase, you figure out, "Oh, these are all useless." It's a major waste of time.

**Erik St. Martin:** Yeah, if they not valid tests, they're just trying to hit lines of code, then there's no point in having them. But I think the takeaway is you should try to test as best as you can. If you've got a one or two-line function that does something very clear - formats a string, or something - I don't know whether you should feel guilty that you didn't get 100% coverage because you didn't test that method.

**Bryan Liles:** Obviously, I have one last thing for people that think about testing and they always say to me, "I'm gonna go look at the Go standard library and see of a test." You realize that if you were writing the standard library, that would be a good place to go look for tests. But if you're writing an application, the way they do testing in the standard library is not always helpful to what you're doing. So really what we need to find in the community is better examples of how to do certain kinds of things, like testing an application at this level.

If you look at a project like Kubernetes, it's a little convoluted, but they have a good way of testing it. They have a great end-to-end set, and they have a great set of unit tests. And they're pretty religious about that. I'm not saying it's the right way, but if you wanna look for something that's better than the standard library for application-type things, look at Kubernetes.

**Erik St. Martin:** Yeah, that's fair, because the standard library is gonna be mostly unit test style, it's not really gonna be end-to-end and integration tests where you have multiple components that need to be stood up and communicate with each other.

**Bryan Liles:** Yeah.

**Carlisia Thompson:** That's a very good point Bryan, because I have just started to realize a lot of the blog posts out there, a lot of the examples, a lot of the sample codes are applicable to libraries if you're writing a library; but if you're writing an application or an API, you have to do things a bit differently. It's different. And that's a good tip, so I definitely will need to look up that codebase.

**Brian Ketelsen:** We need to take a break and talk about our next sponsor. Bryan, I'd like it if you just closed your ears for a moment, please?

**Break:** \[00:54:25.03\]

**Brian Ketelsen:** You can open your ears back up, Bryan.

**Bryan Liles:** \[laughs\] You know, I will offer some commentary and they'll be very positive. I think a lot of developers need to understand this. Unless you own your company - I don't own my company; I just work there for a paycheck. I like to hear about all the stuff going on in our market. That validates that our market works; it validates the idea that the founders, the execs at my company are doing the right thing. But I'll tell you first thing - I'm gonna speak for Bryan Liles, I don't speak for anyone else.

\[00:55:56.10\] I think that more people need to realize that you should champion yourself without trying to be a detriment to your employer, but realize that when push comes to shove, they're gonna push you off, because they need to win. A lot of people don't realize that - the allegiance is with yourself and with your family. You always need to make sure that you're gonna come out on top (without hurting anyone else; don't be a jerk). Definitely think about that when you're moving forward.

**Erik St. Martin:** But you already said that past Bryan is a jerk, so...

**Bryan Liles:** Past Bryan is a jerk, but he's not here anymore, so we can talk about him. \[laughter\]

**Erik St. Martin:** Past Bryan isn't here because he was a jerk.

**Bryan Liles:** That's right.

**Carlisia Thompson:** Talking about your company - how about the monorepo deal with DigitalOcean? Let's talk about that.

**Bryan Liles:** Oh, I'll give you where that came from. We were doing Go; let's say I did start doing Go in the middle of 2014. We started doing Go, everybody started doing Go, but the problem is that we had our internal GitHub and then we had about 15 projects inside of there and actually making sure everything mounted up just didn't work.

I remember us talking about this in the fall of 2014, but then what happened is I ran into some Google people at a conference - it was Gotham Go - and I happened to speak there, and I said "I'm not gonna lose this chance to talk to Google people about, "How do you all do this? Because what we're doing makes no sense, and I think your language is dumb because it doesn't provide these concepts for us." So they walked through how they did the monorepo, and I took that information back.

We converted what we do at DigitalOcean and we created this thing called cthulhu. I didn't know what a cthulhu was, I had to look it up. I'm not quite sure I understand what it is now, but it's where our Go code goes. Really all it is, the monorepo is -- and we don't do it quite like other projects do it. We have two Go paths, but we have two items in our Go path. The first item is our third-party directory, and the second one is where our Go code goes. Really what we do is whenever you go get, the software goes into the first part of the path, which goes into our third-party, and then underneath Go code we have something called Doge, which we'll talk about in a second. And then we have where all of our teams confederate and do whatever they need to do.

Back to Doge... A standard library in Go is actually pretty good, there's a lot of things in there. But unfortunately, it doesn't do a lot of things that we like to do. We're pretty deep in things like gRPC, we have the way that we log, we have the way that we do metrics... So what we did is we wrote another standard library on top of the original standard library, that allows us to do all those things.

One day we might open source it; it's actually kind of neat the things we have in there. But what it allows us to do is you download the whole Go repo - it's like 200 MB, it's actually pretty big... But whenever you download it, you have the whole environment. The reason that I like it - and then I'll tell you the reason that I hate it - is because it does allow us to use all the Go tooling on there. We have a custom version of Go Imports, because some people have a crazy way of organizing imports. But also what I like about it is that when you make a change, we know if it's gonna break. You could actually run the test for the whole entire environment on your box. You probably don't wanna do that because it will take a little bit, but you can.

Then when we reintegrate to master, we pretty much know if it's gonna work or if it's gonna fail; there's no guessing. And that's what I think is the real win, is that it takes the guesswork. We know if all our Go tests pass. The bad side is that yes, Go does compile quickly, but not if you have a metric crap ton of packages it actually has to pass again and again, so our Go test suite takes about 45 minutes. One day we'll open source this (almost there), we have a tool called GTA, and I don't know why it's called GTA; somebody must have been a gamer. But really what it does, it just allows you to test the portion that just changed. It actually uses the Go type stuff to actually figure out what's changed and only touch the things in that graph. If you touched a piece of software and then you touch something in our Doge, it would only compile those two things and test those things, rather than testing the whole thing together.

**Erik St. Martin:** \[01:00:27.08\] I'm gonna go out on a limb and say that the name is Grand Test Auto, how's that?

**Bryan Liles:** Yeah, we'll just say Grand Test Auto. It's a weird thing, developers... But I will say this, it's allowed us to move faster, but as we've grown to a hundred engineers, it's actually made things slower; integrating people into it, getting new projects started has been difficult. But one thing we've done is created quite a bit of tooling around it to allow it to have owners look inside the monorepo to make sure that the tests run fast, and to make sure that we have a way to build artifacts out of there.

I will say this, you can explore the monorepo, but realize that it's not a panacea. Like having children - they're amazing when they come out, that first second, but for the next three weeks or three months they suck, because they cry all the time. \[laughter\] Then they get older and they're amazing again. That's about where we are right now. We're right at the point where it stopped crying and it started getting amazing again, and we can see where it's going to be a really awesome adult.

**Carlisia Thompson:** Do you ever talk about breaking it out?

**Bryan Liles:** Some people talk about it, and I would say there are projects that aren't in the repo for reasons political or technical, but we're just trying to make sure that everyone keeps \[unintelligible 01:01:48.17\] for the greater good of the team; we keep all the Go in the same place. And you know, this is another thing that comes down to dependency management in Go. Since it's not a thing that we know about, it's not a solved problem for us, we chose to solve it by just blocking everything in and burgeoning the dependencies along with everything else.

**Carlisia Thompson:** A question for you - what is your ratio of commits to merge conflicts?

**Bryan Liles:** Merge conflicts? Never.

**Carlisia Thompson:** Really?

**Bryan Liles:** Never. No, we don't have merge conflicts. The reason we don't is because if you think about it, we have our standard library Doge, and then all the teams... So, in any particular section of the code, there might only be like 3 or 4 developers. It's not like everybody is in there, killing everything at one time. It's one repo, but there is a lot of pieces that are being touched at once, and not everybody -- there's no hot spot inside the codebase.

**Erik St. Martin:** So the monorepo thing though - it's much more popular than people think, especially in bigger companies. My first exposure to it was working for Disney, which has a massive perforce server. And it had everything on there, and not just the division of Disney I worked for, but the artists, and things like that; everything was in one place. I thought it was odd at first, but the way all of that stuff works together and you can ensure the stuff...

The way I see it is it's like software - you have to look at coupling and cohesion. If you've got two different repos that need to know a lot about each other, and changes in one often require changes in the other, that becomes a beast to maintain. How do you submit a pull request? Docker is one that I've contributed a patch to, and it's a similar thing - in one pull request you have to mention a pull request in another repo that's required for this pull request to work, and it just becomes a much bigger problem than it needs to be, if kind of all those things lived in one space.

**Carlisia Thompson:** \[01:03:58.05\] Yeah, that is true. I've been there too, and you have to put a "Work in Progress, no merge please, until this one is merged. Then we can merge the other one."

**Bryan Liles:** And we do that. Sometimes you will see a tweet come through that says, "Please do not merge", and no one merges it. But I think as long as communities or the teams talk about these things, it's okay. The good thing about having the monorepo is that it defeats the tribal mentality that... Developers love to get information and then not share it; but if everybody is developing in the same repo, that tribe gets way larger and we don't have such tiny, compartmentalized information. No one has to worry about the build system. You know how you can just have builds? You just put it in this repo, and it will get builds. You know how to get a binary? Mention it in this JSON file, and it will get built and published.

I'll say one last cool thing - we don't worry about version. Internally, we don't do software versions. We just push out the latest thing, or the latest working thing.

**Carlisia Thompson:** How about the peripheral work? For example, do you get build notifications for every single build?

**Bryan Liles:** Yeah, in a different Slack room called Golang-build, and you just look for your name in there.

**Carlisia Thompson:** Wow, that would drive me crazy.

**Bryan Liles:** No, I just turn off all the notifications -- actually, my Slack is weird; I turned the notifications off for everything. I join all the channels and then turn all the notifications off, and then I can go look when I wanna look. But generally, I only look in there whenever I care. The only time that you will see a notification in the main Go room is whenever Master Build builds; that's important. But other than that, who cares?

**Brian Ketelsen:** One thing that I noticed with a really large monorepo that I had a year or so ago, which was actually inspired by your post, was that the Go tooling really slowed down. It became much more difficult for things like Vim Go and Go Imports to work when you had such a gigantic codebase. I found that really frustrating.

**Bryan Liles:** Yeah, yeah. I will say that Go code and a few others don't like large codebases; it's a little bit slower... I mean, I have my beefy Mac here, with 32 GB of memory and lots of CPU; it's pretty fast on this one, but on my laptop it's horrible.

So what's the answer? The answer is we need more people to use it like this, so that someone can go in and fix Go code to make it work better, because the person who wrote it didn't look at it to a base this big.

So I'm not gonna not use those tools because it's a little slow. But also, I'll give you a hint here. I know people are gonna hate this, and my co-workers are definitely gonna hate this. The stuff in Visual Studio Code, all the Go stuff in there - way faster than Vim.

**Brian Ketelsen:** Yeah, Visual Studio Code is awesome, I won't disagree with you at all.

**Bryan Liles:** And my co-worker, he actually writes Vim Go. We have a huge amount of people internally that use it, and I'm like one of the only stalwarts; I'm like, "I found this thing and it's amazing. I want to configure it, because I can see me using that." And it's not that bad. Everything pretty much works, though sometimes when I rename it's a little bit slower, but that's okay.

**Erik St. Martin:** I still haven't tried Visual Studio Code. I know a lot of people rave about it... I'm just a creature of habit.

**Carlisia Thompson:** I've tried it twice and I couldn't wrap my head around it.

**Brian Ketelsen:** I use it in my training classes, because it's a really easy thing to configure and people can see what you're doing while you're clicking, rather than wonder what you're doing while you're typing strange Vim movement commands.

**Erik St. Martin:** That's fair.

**Bryan Liles:** Yeah.

**Erik St. Martin:** I think we're actually overtime, so we should probably roll into \#FreeSoftwareFriday. For anybody who's new, we basically try to give shout outs to projects that are currently or have made our lives easier in the past, to show them love instead of just opening tickets when things don't work. \[laughter\]

\[01:07:57.08\] I think somebody mentioned that we should start opening tickets just to tell them how much we love the project, but I feel like that would flood the issues system.

**Brian Ketelsen:** That was me. That was my blog post last November, that started this whole thing. I said, just open a ticket and say "I love this project. Please close this ticket." And actually I haven't had anybody complain about that, because I do it a lot.

So I'll kick this off. My \#FreeSoftwareFriday mention for the day is PfSense, open source router and firewall. I've been running one for three or four years now, and every time I have to touch it, it just makes me happy because it's so fast, it works so well and it's got so many awesome tools built into it; I can see what the heck my kids are doing... It's a great thing, so thank you to everybody who is behind the PfSense open source router and firewall.

**Erik St. Martin:** Yeah, it's got a nice web interface. You can do IPsec VPN... It's built on top of FreeBSD, but it's got IDS and IPS in there, snorts built in, lots of cool things.

**Brian Ketelsen:** It's good stuff.

**Erik St. Martin:** And they're relatively inexpensive. You can put them on a small Intel Atom computer in your closet, or you can buy one that's pre-built with a PfSense already loaded on there. But yeah, for a home firewall, if you want something... I mean, they're used even outside of home; there's a lot of businesses that use them just because they're cost-effective...

**Brian Ketelsen:** ...and powerful.

**Erik St. Martin:** And you can put it on your own beefy box if you want to. How about you, Carlisia.

**Carlisia Thompson:** I don't have one today.

**Erik St. Martin:** Okay. I have one. I have been dealing with it a lot. Ansible. I love Ansible. I still struggle too, because Puppet and everything has its own appeal, but I'm still just a big fan of building out scripts for deployment using Ansible.

**Brian Ketelsen:** I love Ansible too. I'm with you there.

**Bryan Liles:** I'm a fan of Ansible. I use it quite a bit, and I do like it.

**Erik St. Martin:** Yeah, the hardest part I think is just managing all this stuff, when you have these complex build-outs. For example doing a Kubernetes cluster - there's just so many components and certificates that need to be set up in Docker, and Flannel, or OpenContrail...

**Bryan Liles:** One of the secrets is to use module. So have a common module, have a Kubernetes master module, have a Kubernetes node module, and use it in a more modular fashion, rather than having some long YAML file, because then you'll get confused.

**Erik St. Martin:** Yeah, which is basically what I do, and then I'll default within the modules and then I'll override them up in my inventory files or group files.

**Brian Ketelsen:** Ansible is nice because you can get a lot done without knowing a ton about Ansible. It's when you wanna get really crazy complicated that it's harder, but it's more than enough for what I need, and I enjoy that.

How about you, Bryan? Any shout outs you wanna give?

**Bryan Liles:** Okay, so I'm not choosing a project, I'm choosing a person and a blog series. Ben Johnson has done a lot of things in Ruby land, BoltDB, making Influx better, and a few other things. He's writing this series about Go's standard library. The last one came out about two hours ago. It's about strconv. He just goes through it and says, "This is how it works. This is how you would use it. This is why this is there." It's kind of neat, because with Go we've got the standard library, we've got the language document, and then we've got this Getting Started guide, but we never understood why things are there. This kind of explains all of the different pieces way better than the documentation does, and I'm very thankful for him making this series.

**Erik St. Martin:** \[01:12:03.07\] Yeah, we actually had him on the episode before the last - the one that basically just got released - and we were talking to him about these things. We love these walkthroughs. It was actually kind of surprising because it was a shift from the types of stuff that Ben's been talking about. First year at GopherCon he was talking about high-performance databases; the second year he spoke about static single assignment, and now here's kind of like a "back to the basics; let's break down the standard library, what's in there, how do we use it and why do we use it." I'm loving this series. I have not seen the latest one.

**Brian Ketelsen:** That's because we've been recording.

**Erik St. Martin:** Not for three hours we haven't... So I think that is it, unless Carlisia thought of one at the last minute? No?

**Carlisia Thompson:** I can +1 what Bryan Liles said.

**Erik St. Martin:** That works.

**Carlisia Thompson:** Ben Johnson's posts are awesome.

**Erik St. Martin:** I love these posts like this, and I'm really loving that we've reached a point in the community's growth that we're seeing a lot more content now than we have in prior years. Lots of people are stepping up and talking about things. I love all the new stuff by Dave Cheney with the solid design, and all these things... You remember, Bryan, coming from the Ruby world, all that stuff was exciting; we were talking about patterns, testing and things like that.

**Bryan Liles:** People hate it, but we need it as a community. It's a great place for us to be right now.

**Brian Ketelsen:** Amen.

**Carlisia Thompson:** Yes. And we're going to have Aaron Schlesinger on the show and we're going to talk about design patterns; I'm looking forward to that.

**Erik St. Martin:** Yes, that will be next week.

**Carlisia Thompson:** Yes.

**Erik St. Martin:** So with that, I guess we have to say goodbye... At some point we have to, because we're out of time. I wanna thank everybody on the show, and especially I wanna thank Bryan for coming on the show and talking to us about all the great topics today. Thanks to everybody who's listening now; if you're not subscribed, you can go to GoTime.FM. We will be setting up a weekly email at some point; we're kind of acquiring content at the moment. You can follow us on Twitter, @GoTimeFM and hit us up on our GitHub, which is github.com/gotimefm/ping, if you wanna be on the show, or you wanna recommend a guest or have questions. With that, goodbye everybody.

**Brian Ketelsen:** Goodbye, thanks Bryan.

**Bryan Liles:** Thanks for having me.

**Carlisia Thompson:** Thanks, Bryan.
