**Angelica Hill:** Hello, and welcome to GoTime. On this GoTime episode we're going to be focusing on the art of delivering concise, interesting and captivating lightning talks. This is a popular format across a load of different conferences worldwide. We had it most recently at GopherCon, where they did seven-minute talks to share their interesting, innovative and difficult problems that they have been solving and thinking about.

I'm joined by some of those wonderful GopherCon lightning talk speakers today, and they're going to be talking to us about the experience of giving a lightning talk, some of the challenges, some kind of tips and tricks on how to effectively communicate an idea in such a limited amount of time. And then we're going to be putting their skills to the test, and a couple of them are going to be doing lightning talks as elevator talks, lightning talks in 60 seconds. So I think this is going to be a really, really fun episode.

So first of all, we have Jacob, who started his tech career at Sun Microsystems, where he learned the network is the computer. And then after discovering Go in 2015, he's been feverishly, or deviously, as he put it, modernizing legacy systems to Go. And then in 2020, he became an assistant professor at the University of North Texas, where he's been converting students to Go ever since. Very happy to hear that. How are you, Jacob?

**Jacob Hochstetler:** I'm doing great.

**Angelica Hill:** Really, really happy to have you on. Next up, we have Ehden, who is a software developer who spent most of his career tinkering with instrumentation, and trying to find ways for one piece of software to worm its way into another.

He's been using Go for fun since 2016, and then he managed to convince his employer to pay him to use it in 2019. Well done to you. How are you today?

**Ehden Sinai:** I'm okay. Thanks for having me.

**Angelica Hill:** Thank you for being here. And I see you have a little extra co-host with us today...

**Ehden Sinai:** Yeah... This is Banjo, and I'll try to keep myself mostly muted, so you don't hear him too much... But he's almost always going to chime in when I have something to say, too.

**Angelica Hill:** And for those of you listening, Banjo is not a cat, a dog, or a different exotic pet... It is, in fact, a lovely, beautiful birdie. So we're very excited to have an additional guest with us today. Next up, we have Dylan. So Dylan's been a professional software engineer since 1998, working on banking, healthcare, finance, and now computer security industries. He's been writing Go full-time since kind of early 2016. He's been at CrowdStrike since 2019, and he's also an active participant in the Gopher Slack organization. For those of you listening, that is a Slack organization that you can join if you Google it, or if you reach out to one of us, I'm sure we can add you... And he's a four-time GopherCon speaker. I feel like I should give you a medal of some kind. How are you today, Dylan?

**Dylan Bourque:** I'm good. How are you? Yeah, one of those was recorded, virtual, in 2020. But yeah, I've been on stage three times.

**Angelica Hill:** Oh, my gosh. Well, a talk is a talk, and we're going to have to pick your brains today after all that experience. Right. Next up, we have Cassie, who is a software engineer at Diagrid, and is actively contributing to Dapr. She focuses on backend development to simplify the creation of resilient, event-driven, and microservice-based apps. And she's part of a Gopher family. So for those of you who have listened to the podcast before, we have had her twin sister Sam on a couple of times, and then her brother also writes Go. So very excited to have you on today, Cassie. How are you doing?

**Cassie Coyle:** Hi, Angelica. Thank you so much for having me. I'm super, super-excited, and having a great Friday.

**Angelica Hill:** Yes, happy Friday. For those of you listening at a later date, all of these wonderful guests have agreed to spend their Friday afternoon with me. So I feel very lucky.

Then we have Matt Dale, who's a software engineer living in Pacific Northwest, with 10 years of experience. He discovered Go in 2015. He loves writing software, contributing to and blogging about software engineering, specifically Go... And in his free time, and professionally, he also does little side projects in Go. He's currently at MongoDB. Hey, Matt. How are you doing?

**Matt Dale:** Hey, Angelica. I'm doing good. Just moved into a new house. My head is spinning with all the stuff to do... And you can't see it on the stream, but the whole place is full of boxes.

**Angelica Hill:** Oh, my gosh. But priorities, for those of you listening... Matt did have time to get out his Gophers and place them on the shelf. So that is the most important thing to unbox when moving into a new house, is your Gopher plushies.

**Matt Dale:** I can't actually take credit for that. That was my wife. She was like "You have to put these in the background." I was like "Thank you for watching out for me."

**Angelica Hill:** I love that. And then last, but certainly not least, we have Andy Joseph, who has architected and developed several industrial control platforms that propel the growth of a startup company into a highly respected world leader in motion control, and sensing systems for manufacturing. As a prolific inventor, he's been awarded various patents in software, industrial motion, actuators, and sensing systems. I'm going to have to ask you about some of those words...

\[00:08:19.00\] Most recently, Andy led the development of an IoT product that connects industrial equipment to plant-wide data analytics and historian applications using services written in Go. I know we're here today to talk about lightning talks, but Andy, can you say a little bit more about what that is, and what that entails? It sounds extremely interesting.

**Andy Joseph:** It is. It keeps us very busy. We provide machines to manufacturing... So you think of like automotive, you're assembling cars and engines, and that sort of thing. And a lot of our machines show up in plants. About five years ago we had a big initiative to create this IoT product that would connect our machines to our customers' data analytics. And so it was a prime application to use Go, and to be able to connect the edge up to the cloud. So we had a lot of fun doing it, and we're continuing to do even more of that kind of development.

**Angelica Hill:** Really, really interesting. I'm sensing a follow-up episode where I'll want to dive in with you a little deeper... Awesome. Well, really excited to have you all. We're going to start with the very basics. What is a lightning talk? For those listeners who might not have attended a conference which had lightning talks before, or have heard the words "lightning talk", but are kind of unsure what that actually means... I wanted to ask, maybe Cassie, what is a lightning talk?

**Cassie Coyle:** A lightning talk for GopherCon is a seven-minute presentation. I think of it as a short and sweet presentation. It's kind of like a single idea or concept, and it's pretty fast-paced, because if you have quite a bit of content, you only get the seven minutes, then they cut you off.

**Angelica Hill:** For sure. And because you have such a short amount of time, how do you decide what idea to bring, what idea is interesting enough to captivate your audience, while also being able to kind of fit into seven minutes of time? I don't know, Jacob?

**Jacob Hochstetler:** I mean for me, I already had something prepared, that I just cut down... But I think the lightning talks are really interesting, because you have to focus on a single thing. And for a single problem, it's easy to add or remove background until you get the timing right, and you just give enough context to get people on board... And then you hit them with a conclusion, and it's seven minutes, and you're done. So for me, that's pretty much what it was.

Now, as a consumer of lightning talks, I actually like them a lot. I mean, I pick and choose the major talks, but I'll stay through all the lightning talks, because not only is it a break from the full sessions, but there's always more esoteric stuff that's going on in the lightning talks, I feel, that doesn't warrant a full presentation, but it's always like neat and different, kind of thing.

**Dylan Bourque:** Yeah, mine was a rant that I do at work already, all the time, and I said "I can do seven minutes on that."

**Andy Joseph:** I think it's an extremely creative endeavor, and I've always thought of creativity as the art of taking stuff away, and saying no to certain things. And the first draft I did was easily a 30-minute talk. And so I just kept refining it, and taking away stuff, and getting it down to the bare essentials, and I ended up with seven minutes... And it was quite an interesting process.

**Angelica Hill:** So in terms of process - I mean, Matt, maybe you're going to dive a little bit more into this, but I'd love to hear from you specifically, what was the process? Did you start with just like writing down random ideas? Did you start with a full talk and then have to cut it down further? Interested in kind of your experience.

**Matt Dale:** \[00:12:02.04\] Well, I was fortunate to have written a couple of blog posts about this already, so I was like "I think that this could be an interesting topic for a lightning talk", because I think of lightning talks as sort of like adult show-and-tell, which is like, you just want to tease your audience with this concept, and then leave them asking questions. And that was sort of the original motivation for this blog series that I've been writing on, in this case, the Go Playground. So it was really obvious. I was like "Well, I really think that this would go well as a lightning talk also."

**Angelica Hill:** So, in terms of working out like how it went - kind of what you said, Matt - how did they go? I would love to hear a little bit about kind of, one, I would love if we could go around and say like what even was your lightning talk, and then also a little bit about like how did you feel it went? And I'm going to encourage you to be brutally honest with yourself.

If you were left being like "Oh, I wish I had needed more time", or "Oh, I wish I'd led with X, Y, Z", I'd really love for us to have that conversation... Because I think, one, nerves are a factor, but two, I feel like if any of you are anything like me, I feel like I leave lightning talks or any talk I give or any meeting that I need to leave with a lot of like "Oh, I could have done that better", or "Oh, I wish I had done X, Y, Z." Ehden, what do you think?

**Ehden Sinai:** I actually have no recollection of how my talk went. I think I remember bits and pieces, but it's mostly a bit of a blur, and I think that's pretty normal of talks, but especially when it's so short that - you know when you kind of black out for the first few minutes... That's the whole talk. So yeah, my talk was on how the coverage tool that's built into Go works, and it was supposed to be sort of educational, and teach people something that they didn't know a lot about... And so I had at least some basic set of material to get out within that amount of time. I definitely set myself up for failure with that one, but I think it went okay. I got feedback from people that they learned a bit that they didn't know before... It's about as good much as I can ask for.

**Jacob Hochstetler:** I have the same verbiage as you. I have no recollection. I remember being on stage and seeing lights, and then I remember not being buzzed. So 6 minutes 59 seconds, I think is what I did... But once they're posted, I'm going to go back and watch, because I can't remember.

**Ehden Sinai:** I do also remember the timer, what it said when I finished... So that is something that sticks out. I think it was 6:42 or 6:49.

**Matt Dale:** I did not look at the timer once. I just remember Angelica saying, "You've got so much time left. Do you want to give us a little dance lesson?" And I was like "No, I don't think I should do that. That's a bad idea."

**Andy Joseph:** I do remember having microphone issues, but I got through it pretty well, I think...

**Dylan Bourque:** Yeah, I was first in the session, so I got the privilege of standing on stage and having everyone stare at me for an extra 20 seconds during the intros.

**Cassie Coyle:** I don't even remember being like introduced and brought on. That was like blackout moment. I just walked on, and then I practiced so much and just turned into like autopilot... So I was pretty happy with how I did, but I just practiced so much.

**Dylan Bourque:** My first time on stage two years ago was like that. I was the opening keynote the second day, and just completely blinded and dumbfounded at the crowd. The entire conference is in front of you... It was my first time actually on stage, speaking to a big crowd... Lots of Zoom meetings and things, but it was a different experience, and it was kind of the same. I just went into autopilot mode and didn't remember a lot of the details while it was going on.

**Andy Joseph:** What caught me by surprise was I couldn't really see the audience. I think it was the lighting or something, and... Every presentation I've done before, I've been able to see the entire audience. But this one I couldn't. So it was a little bit -- I felt almost like I was there by myself on the stage.

**Ehden Sinai:** \[00:16:00.13\] I remember seeing a couple of people on the front row, that were clearly following along with the talk, but that was about it. It was just maybe a couple of people. One guy at some point smiled and gave me a thumbs up. I have no idea who he was, but shout-out to that guy. It really helped, because otherwise I would have been talking to nobody.

**Cassie Coyle:** I remember seeing the front row people... I don't even remember seeing my sister, as funny as that is. She sat in the front row, far over, just so I could see her. I did not. And it was like, beyond the front row, it's just like a black room. But I liked it that way, I don't know...

**Angelica Hill:** All of you have talked a little bit about how you kind of blanked out, a little bit autopilot... With that in mind, do you feel that practicing before help to be able to kind of go into that autopilot mode? I just feel like it is a sign of all of you being so prepared that you were able to even go into autopilot in the first place. Is that what you kind of attribute it to? Like, you've done it so many times before... Do any of you not practice too much? I know I've heard a few people in the past talk about not wanting to overpractice, so that it comes across like charismatic, or more conversational in presentation mode... But I would love to hear a little bit about like how did you prepare? Was it sitting down, writing notes, going through your slide decks?

**Dylan Bourque:** Honestly, I didn't practice a lot this year, because it was a lightning talk. It was very fast. And like I mentioned, it's something that I talk about at work all the time. My talk was on mocking, and proper ways to do it. I had to have fun with it. Title was "How to mock your co-workers without involving HR." So it's things that I talk about all the time, so I didn't need to rehearse to kind of really get the information down. And it was very quick compared to past experiences, where a 45-minute full tutorial - I practiced that for three weeks.

**Andy Joseph:** For me, the most difficult part of preparing was actually coming up with the first few things I would say. Everything else was pretty easy, because of course, I know the material, but making that first few sentences was -- it took me a couple hours to come up with something that I felt comfortable as an intro... Because it is a little awkward, because you don't want to spend too much time talking about non-essentials, but you kind of want to get a little bit of the understanding about what you're going to talk about. So yeah, that was a little awkward for me, but...

**Matt Dale:** I actually went back and watched most of the lightning talks from the last two years of GopherCon to be like "What do people do? How do you introduce yourself? What's important to really get out of your mouth in the first 30 seconds?"

**Jacob Hochstetler:** That's overachiever mode right there.

**Matt Dale:** That was like "I didn't know what to do" mode.

**Cassie Coyle:** I think for me, I wanted to make sure that I did not have filler words... Because if I pause and just think about something, I will say those. So I wanted to practice enough so it was polished, and I didn't have a bunch of likes, or uhms. I just knew what I was going to say for the seven minutes, and I ended right at 6:55. So I was also really proud of the timing. I wanted to be almost exact.

**Jacob Hochstetler:** I was going to say, I don't think I really spent a lot of time practicing the information. I spent at least three or four run-throughs on timing... Because it's like, one slide doesn't have the same information as another slide. And in my talk, I had a couple of slides that were obviously inserted for "comedic effect". So I had to sort of time that on like "Do I let this hang, or do I click on it? Read it as quick as possible and then move on, to like reinforce the stupidity of my slides?" So the timing was hard for me.

**Dylan Bourque:** \[00:19:56.25\] I did work out that my last slide, the conclusion, was about 45 seconds. So I spent quite a bit of time getting to hitting that slide at six minutes, to make sure that I was not going to get dinged... Because no one wants that.

**Ehden Sinai:** I mean, I can echo what other people said, that the content of the talk wasn't really a problem, because I know a lot of that I could easily talk for an hour... But that's the problem, is that I could, so I had to drill it a lot, and make sure that I was going to hit the timing okay. Beause with the format, if you go over, there's a buzzer, and it doesn't look good, and it doesn't sound good, and there's no recovery. But a full length talk, you usually have at least a few minutes leeway. If you're a full length talk, you're not going to get booted off the stage immediately. So that was my fear. I definitely spent a lot of time -- the whole talk was scripted, pretty much, start to finish. It wasn't just a series of bullet points. I had to over-prepare, I felt like.

**Angelica Hill:** So I'm really going to push your -- what would you do differently? I mean, I know you're on autopilot, but there must have been something that you recollect, or now reflecting upon it, that you would do differently if you were to do another round of lightning talks.

**Ehden Sinai:** At six minutes there's a beep that goes off, and I can't remember exactly what slide I was on when that beep went off, but in hindsight, I wished I had paused, because I'm pretty sure I just kept going straight through it. So I walked off the stage knowing, as I watched other lightning talks, that I kind of maybe messed that up a bit... But who knows? We'll see when the recordings come out.

**Dylan Bourque:** I would have left out the Highlander reference. I think I was showing my age...

**Andy Joseph:** But there's a new one coming out. So a few years from now it will be relevant again.

**Dylan Bourque:** Right? I mean, the Simpsons reference worked. People got that one. The Hide the Pain Harold went over well... The Highlander one was just crickets. Not a lot of the GopherCon crowd remembers movies from the mid '80s.

**Angelica Hill:** No. I personally don't.

**Andy Joseph:** I don't remember it.

**Angelica Hill:** Go on, Jacob...

**Jacob Hochstetler:** I was disappointed that I resorted to using PowerPoint. For all my other talks, I use GoPresent, and this last year, the GoTalks server has been extra sassy... So you can't host it off of GitHub anymore, and you've got to do it local... And I just said, "You know what? I'm going to avoid any technical problems. I'm going to use PowerPoint. Trusted and true." And then I think the talk right after me was using GoPresent, and I was like "Uhh..." I was disappointed in myself.

**Ehden Sinai:** I did the opposite. I usually do something like DeckSet or GoPresent, where you write out your slides in Markdown or some kind of code... And I started with the tried and true this time, thinking I would keep it simple, and I think I got to Chicago and decided I hated my slides. I think I redid literally all my slides in DeckSet two days before the talk, after I landed in Chicago. So I could have gone either way, honestly.

**Angelica Hill:** Do you feel like slide decks and having a deck behind you is important for lightning talks? Do you think it helps people follow the talk? Does it help you all to kind of center yourself on where you are in the talk? I've seen lightning talks where they just had one slide, that had a gopher on it - not even words - and then they just talked for seven minutes. I'd be interested to hear yours view.

**Jacob Hochstetler:** I mean, personally, I like the slides during the lightning talk. It keeps you there, it keeps you following, you've got a timeline... And I am someone who if you give me 45 minutes and a slide with one word on it - yeah, I'll do that. I will run forever. So having the slides and keeping timing was really important for me.

**Andy Joseph:** I can't see doing it without slides, because as you're doing the scripting and you're memorizing it to some extent -- lik with me, I associate that with the pictures I'm seeing on the slides. So when I see that picture, the whole story comes back, and I can basically remember it that way. So I couldn't do it without the slides.

**Dylan Bourque:** \[00:24:01.10\] I kind of think the same. If it was without slides, I would have to rehearse so much to be able to get it all in that it would become mechanical. I don't think the presentation would go over as well without the slides, because - with the timing, and the cues... And then you can throw in Simpsons references and get a laugh from the crowd.

**Cassie Coyle:** I resonate. I also think like I need the slides to form the story more, so I don't just talk about nonsense and go off on tangents... Not that I think I would, but just to keep in order, build the story from start to finish, and then like add the details, where relevant, with slides and whatnot.

**Matt Dale:** Yeah. And to Dylan's point, how are you going to get memes if you don't have slides?

**Dylan Bourque:** That's the most important aspect.

**Angelica Hill:** I feel like it's hard though, because you don't know what memes to choose that are going to resonate with the full GopherCon audience. I feel like talks in the past, that has been -- obviously, the content's difficult too, but for me it's been "What gif do I put here? What meme would resonate?" I feel like it's a challenge.

**Jacob Hochstetler:** I teach, and I intentionally put cringe memes into the slide decks, just to keep the gen alphas entertained, and it's cringe. But for the lightning talk, I agree. It's like "What's going to hit?" I don't know the whole group of people. We have people from all over the world. So I just went with old standard British humor of silliness, and that seemed to work.

**Dylan Bourque:** I mean, it's an IT conference. The "Hide the pain, this is fine" will always go over well. We can all identify.

**Ehden Sinai:** Everyone will laugh at a disaster for sure.

**Dylan Bourque:** If I had to change something, that's actually something I would change. I felt like I under-memed. I mean, I was like "I'm going to keep this super-simple. This is like my first time presenting at GopherCon", and I was like "I could have really thrown some memes in there."

**Cassie Coyle:** I defaulted to showing cute gopher images instead of the memes, because I knew that would go over well.

**Angelica Hill:** Know your audience. A lot of cute gophers is definitely going to resonate. Awesome. So I'd love to talk a little bit now about the differences between lightning talks versus longer talks, workshop sessions... I know a number of you are very seasoned - Dylan - at talking at these kind of conferences... So I'd love to understand, what do you will see as the core differences, whether it be the way you prepare, the way it feels when you present, between doing lightning talks and doing longer form talks? Maybe, Dylan, as our seasoned speaker at GopherCon, you can let me know --

**Dylan Bourque:** As the grizzled veteran?

**Angelica Hill:** Which actually I think everyone on this call is pretty experienced, honestly. But yes, the grizzled GopherCon veteran Dylan.

**Dylan Bourque:** So my very first talk was, like I said, the second day keynote, it got picked and I was in front of the entire conference on the second day, first talk in the morning, dumping on Go modules, with Russ Cox sitting in the front row. So that wasn't awkward at all. But it was 25 minutes, so there were a lot of nerves. I spent a lot of time kind of "Hey, is this right? Is this the right balance of information?" Not getting into droning on about technical things... In comparison, the lightning talk, I approached it as a lot of fun. It was lighthearted... I think I had 17 or 18 slides, and probably six of them had some type of meme or joke on it. A lot more fun to do.

\[00:27:51.13\] The longer talk was much more stressful, especially with Russ 20 feet away. And I also did a 45-minute tutorial last year. That one was a lot of time. Much, much longer to put in. That one was probably 65 or 70 slides, with a bunch of content. That one took a long time to prepare for and to get everything together.

So for me, this year was fun. I came in, didn't have any responsibility to do a big talk... There was no stress level... I went into it like "Hey, lightning talks are gonna be fun this year. I can go rant for six and a half minutes."

**Angelica Hill:** I mean, you keep on saying how fun it was. I would love to hear from kind of anyone else in the group, when preparing for a longer talk, do you feel like it has to be a little bit more serious? I mean, in my mind, you have to keep your audience's attention for a longer period of time, so the temptation - certainly my temptation would be "I've got to keep it light to keep them engaged, get a laugh here and there... If I go too serious, maybe they'll zone out." But also, if you're talking about a really complex technical concept, you want to keep it crisp and clear, and maybe not muddy the waters with the a joke that might not resonate. I'd love to hear your reactions to that.

**Ehden Sinai:** I mean, I think my lightning talk was - I wouldn't say super-technical, but it did get into the weeds of something that a lot of people don't pay a lot of attention to, and so I had to get a lot of info out pretty quickly. So I don't think I had time to put memes on slides, really. Like Dylan was saying, his longest talk had 70 slides... Including transitions, the talk I gave was 48 slides, because there was just a ton of info to get out. So I really don't know. I'd be curious... This is certainly the biggest stage I've ever talked on, so that could be why this is the case, but I feel like I had to prepare much more for this than I have for any other talk I've given, at work, or local meetups, or anything like that.

**Angelica Hill:** Matt, what do you think?

**Matt Dale:** I think that one of the things that stresses me out about longer talks is the feeling like you're covering something more comprehensively, and you really have to like know the topic in and out, from like every angle, because someone's going to ask you - especially if it's at like a meetup, someone's going to be like "Oh, but what about this? What happens to this?" And I have felt, for the longer presentations, a lot more stress to comprehensively cover the technical topic. And for the lightning talk, I wanted to sort of avoid that particular stress, and present something more of like "Here's something that you can go explore yourself."

So that was probably the biggest difference, was I wanted to present more of like a marketed, like pull people in, rather than feel like I have to comprehensively cover some really deep, technical topic.

**Angelica Hill:** Yeah. Luckily, no Q&A at GopherCon. I know some other conferences will allow the audience to ask questions... And yeah, it can sometimes be a bit intimidating and a bit of a nightmare, especially if you have someone in the audience who is making it their mission to ask you the most complex question that they possibly can, and therefore you are forced to be like "That's a really good question. I'll talk to you after this. Yeah, let's talk more off the stage."

**Ehden Sinai:** "Meet me to the side of the stage in a few minutes..."

**Angelica Hill:** Yeah... And then, "Oh, I'm so sorry... I need to rush off somewhere. I'm so sorry. I can't actually talk to you right now."

**Matt Dale:** The email that we got from the conference organizer said in big, bold, red letters "Do not field any questions after your talk." So she was petty explicit about avoiding that.

**Angelica Hill:** Yeah, for sure.

**Jacob Hochstetler:** Last year I did have six or seven people lined up on the side of the stage, asking questions about the content of the talk. So my talk went over by about 15 or 20 minutes, with the conversations afterwards...

**Andy Joseph:** I think you get a lot more for your money when you do a seven-minute talk, versus say a 30 or 45-minute talk in terms of the number of people that you reach with a single message... And it takes about the same amount of time to prepare for both, so why wouldn't you do the lightning talk then?

**Angelica Hill:** \[00:32:00.11\] So I want to challenge that. Are you saying that you think it takes the same amount of time to prepare for a lightning versus a longer talk for you?

**Andy Joseph:** In my limited experience, it does take about the same amount of time, yeah. I mean, I've done 45-minute talks as well, and it took about the same time to prepare for it.

**Cassie Coyle:** But then if you practice, the practice loop is much longer.

**Andy Joseph:** It is, definitely.

**Dylan Bourque:** I'm definitely at the other end of the spectrum on that. Like I said, I spent weeks preparing for that first talk; literally, multiple weeks. And the lightning talk I think I spent 25-30 minutes writing up the original proposal, then probably two hours doing slides... And I practice it four or five times, mostly to get it under seven minutes.

**Matt Dale:** Do you think that had anything to do with the content of the talk? Or do you think that was because it was just a shorter talk?

**Dylan Bourque:** Probably a bit of both... A lot less stressful, and there's a lot less concern about making a mistake in 15 slides than in 60... So there isn't as much to rehearse and memorize. But also, this was content that I talk about all the time. I could do seven minutes on it right now if I wanted to. Just ad hoc.

**Matt Dale:** I mean, I feel like I could do 10 minutes ad hoc, and that's sort of the problem... So a lot of the practice went into making sure that I wouldn't do that. I think I'm kind of on the opposite end of the spectrum here from you, as far as I think I probably had to put more time into just this, because it was entirely scripted. But I don't know, I haven't done a longer talk at GopherCon, so...

**Jacob Hochstetler:** Long talk, short talk... At least it's not a workshop.

**Angelica Hill:** At least it's not a workshop.

**Jacob Hochstetler:** Yeah, prepping for workshops is not great. I love doing workshops, mostly because I've done it in like high school and then college students... But the prep for them is like -- you've got to look at every single piece of hardware you're bringing in... Or someone comes in and they're running Go 1.12, and you're like "What...?"

**Matt Dale:** I assume their prep email did not tell them not to field any questions...

**Dylan Bourque:** On Windows 95...

**Angelica Hill:** I mean, do you feel like a workshop is just like a more segmented talk? Like, you give a bit of a spiel, and then you talk through the concept, and then they do an exercise... I know it's very down to the workshop lead style of running the workshop, but I would be interested... We've talked about kind of the difference between lightning and full time; talk versus workshop session - I would love to dig into that just a little bit.

**Jacob Hochstetler:** I mean, I'll keep talking, just because I will... I'm a consumer of workshops. I do love them. I do backend code, so the first workshop I did at this last GoverCon was all IoT stuff, and the badger boards, and the drones. And I was like "This is awesome stuff!" I'm not an embedded programmer whatsoever, but this is a diversion from what I normally do, and it's really interesting. Now, organizing that workshop - I would hate to be on the other side. But a consumer of it, it was fun and great. So...

**Dylan Bourque:** Yeah, I've kind of been on both sides. I attended two workshops at GopherCon, one years ago, 2018, I believe, and then one this year. And they were drastically different. But both were very hands-on, kind of almost classroom environment... Which is, like Jacob said, different. It's fun. It's a diversion, but it's definitely a different experience. On the flipside, a co-worker of mine hosted a workshop, put one on this year. And I helped him put together his materials, and review the exercises, and kind of going through and writing the code for them... "How does this work? How does it feel?" It definitely was a ton of work that he put into making it an educational experience, where people would feel like they got value out of it.

**Break**: \[00:36:10.13\]

**Angelica Hill:** So before we kind of move on to our second segment of the episode, which is going to be where we're going to put a couple of you to the test in terms of being concise and to the point, I would love to go around and I can call on you kind of one by one and ask you to give like your top tip, one or two tips to anyone who's thinking about doing a lightning talk, to help our listeners understand from you all, now you've done it, I would argue successfully having seen all of yours and I enjoyed them a lot... Kind of give them some pearls of wisdom. So why don't we start with you, Matt?

**Matt Dale:** Sure. Probably the thing that helped me the most was presenting it to someone else. And obviously practicing a lot, at least for my style - I get really, really nervous when I do these, talks and I really need to be on autopilot... But presenting it to another person and getting their feedback, but also having to like stow your self-consciousness and get used to talking to another person.

**Angelica Hill:** Great. Jacob.

**Jacob Hochstetler:** So I've got two things... And it's more -- I guess not with the prep side, but like the "Hey, I've got to choose something" kind of side of things. So I had it easy... This was a workshop that this was the introduction to the workshop that I just sort of chopped down, and then got the timing right... But in preparation for something new, I think you've got really two paths. Either you can focus on a single problem, and then your path to that solution... And it could be a simple problem and a simple solution. And the filler in between is all the context and background. It's the why of why this was a problem, or why the solution had to happen this way. And then you can get right to 6:59 and you're done.

And the other thing I was looking at was highlighting a product; doing sort of a product highlight. And product being a piece of software, a tool, something like that. And for there, you can just add highlights of that until you get to 69. Pretty much what Matt did, honestly... A simple highlight tool, get there... Bang, you're done. And that seems really effective. Matt's talk was great. I liked it. Everyone's talk was great, I'm so sorry. I loved everyone's talk. \[laughter\]

**Dylan Bourque:** Oh sure, you say it now...

**Cassie Coyle:** Yeah, we're picking favorites now...?

**Jacob Hochstetler:** That's my two, you know, tips for finding something.

**Angelica Hill:** Okay. But how to talk about a product without it sounding like a marketing pitch? ...which I think can sometimes be a challenge, I think. When I've thought about some lightning talks, talking about "Oh, why do I like this tool? It has X, Y, Z features", I've sometimes felt myself like I was being like a sales rep being like "This is why Temporal is great..." Which it is, by the way. Temporal is great. But you know what I mean? Like, finding that balance.

**Jacob Hochstetler:** I think focusing on what it provides. It's not really focusing on the product itself, but just focusing on what it provides. And then at the end of the talk, you can say "Hey, all these things that would be great in something... Oh, look, I've been talking about Temporal this whole time", and then at the last minute you just discuss how you use it.

**Angelica Hill:** A little mic drop moment...

**Dylan Bourque:** "You should come by the booth. We have salespeople there."

**Angelica Hill:** Oh, no...

**Jacob Hochstetler:** And then throw candy into the audience.

**Matt Dale:** To a technical audience, you can sort of tap into why you like working on it, like why it's exciting to you, because that might excite some of them. And so instead of trying to sell it to them, you sell them on why you work on it... And that usually goes over better, I think, than a logo.

**Cassie Coyle:** That's what I would say as like my tip - it's like picking something you're passionate about, and that excites you, not something that's kind of like dull and boring, because then it'll be dull and boring for the attendees. And then my tip was practice in a mirror... Because no one wants to have just like a dull face when you're presenting, right? You need to be engaging.

**Angelica Hill:** I love that. I feel like I should do that before any Go Time episode, even though they don't really see us... But I feel like I want to be animated for you all. I don't want a dull face.

**Dylan Bourque:** \[00:42:01.05\] If anyone ever asked me "Should I?" I would say, "Yes, do it." One of the highlights of Lightning Talks for me is that they are random. Like, they're not so regimented, technical, it's going to be Go execution tracer, or logging, or tracing, or whatever the case may be for the language... They're random. They're all over the place. It's a fun diversion to go and see Matt this year talk about remodeling his kitchen. The randomness is fun, and it's a nice diversion for people. So whatever it is that you think that you want to talk about, do it.

**Matt Dale:** I think the genuine passion for the topic comes through a lot more in Lightning Talks, because I think it's easier to be genuinely passionate about a topic for seven minutes than for 45 minutes. Like, after 45 minutes, you're like "Can I just talk about something else, please?"

**Angelica Hill:** It's exhausting talking for that long.

**Dylan Bourque:** The adrenaline crash after 45 minutes is definitely real.

**Angelica Hill:** Andy, what is your top tip?

**Andy Joseph:** I second what Cassie said... It's really important to talk about something you're passionate about. You know, what is it that you can talk about that just lights you up, and just makes you just smile about what you're talking about? I think that's key.

And I think the other big tip is just get a good night's sleep beforehand, because - you know, you want to practice a lot the night before, and then just go to sleep, and in the morning practice again, and you'd be amazed at how much better you can do the talk the next day. That helped me a lot. And definitely hydrate. You've gotta drink a lot of water, because you're kind of nervous, whatever, and you're burning up all that water, and you get up on stage and all of a sudden you get a dry mouth... So you definitely want to hydrate a lot.

**Matt Dale:** I can have a little counterpoint to that, which was I thought it would be a good idea to stay super-hydrated, but we get mic'ed up like 20 minutes before the talk start, and then I was the second in the lineup, so I had to stay for the entire rest of the hour... So I was going on like two hours after drinking a ton of water, because I really did not want to get dry mouth up on stage. So it can kind of go both ways, but hydration is a good tip anyway.

**Ehden Sinai:** Also, Andy, getting a good night's sleep is easier said than done before doing something like public speaking.

**Andy Joseph:** Yeah. And it's hard at the GopherCon, because you want to go and hang out with people, and all that... But you really have to think about it.

**Dylan Bourque:** Yeah. As a typical software engineer introvert, I save up my socializing for the four days during GopherCon, and I do a year of socializing in those three nights.

**Cassie Coyle:** Yeah. Same. It's like, you see the same people, and then you're all friends, and then you're like "Oh wait, but I need to practice. I can't go out tonight." But after my talk, I'm all for it.

**Angelica Hill:** For sure. Last but certainly not least, Ehden. What's your top tip? I know you plus one, but I want to hear your unique one.

**Ehden Sinai:** Yeah. I think everyone has stolen what I was going to say so far, but I'll say -- because I definitely struggled getting mine under time, and making sure that it would be under the right time... So I broke it up into like sections or chapters, and I would drill each section independent of one another. And it wasn't until the night before the morning of that I was able to string them all together, but I kind of knew I was under seven by just adding up the amount of time it took to do each individual chapter. And that helped, breaking it up, so you're not on rails the entire time.

**Angelica Hill:** Did that help also, like cutting down time? If you found a section was a little bit longer, you were able to like cut it down... Was that also kind of helpful as a tool?

**Ehden Sinai:** Yeah... I can kind of prioritize the importance of each section as far as what it'll take to make the audience understand what I'm trying to talk about, and then say "Okay, I will need to borrow a bit from one section to emphasize this section." So it did help a bit.

**Angelica Hill:** Awesome. Any final pearls of wisdom before we move on to our elevator pitches?

**Matt Dale:** \[00:45:58.02\] Something I learned that I didn't expect is macOS has like the scripting feature that can let you resize windows to very specific sizes... And that's a top tip I got from Jeff Geerling's blog. I like watching his stuff on YouTube, and I was like "Wow, this guy has all the tips."

**Angelica Hill:** Awesome. Thank you very much for your top tips. Now - we don't have a jingle for it, but I'm going to ask our lovely producer, Jerod, to make me one for when we actually releas the episode, for elevator pitches. So I'm just gonna \[unintelligible 00:46:30.09\]

**Dylan Bourque:** That's the jingle right there.

**Angelica Hill:** Knowing Jerod, he's probably going to sample my voice from this recording, and put it in there just to spite me...

**Jacob Hochstetler:** We're going to autotune this so hard...!

**Dylan Bourque:** I will be making sure that happens, because I'll be disappointed if your voice is not the jingle.

**Andy Joseph:** I think -- doesn't Aerosmith have a song about elevators?

**Angelica Hill:** Oh my gosh, yes. We should sample that. And we just make sure that we don't go over the copyright allowed number of seconds, and we'll be fine. If not, I can just grab the guitar, give it a go... It's fine. Add a few extra chords, so that it's not technically that close...

**Ehden Sinai:** I would love to hear that.

**Angelica Hill:** Me too. But luckily, we have some wonderful people who probably will do it far better than I would. Awesome. So the way it's going to work is I will kind of call on you... I won't start the time then, I'll ask you to introduce yourself, the title of your elevator pitch... And then I will say three, two, one, go. You will have 60 seconds to give your elevator pitch, which was your lightning talk at GopherCon. When you get to 60 seconds, there will be a buzzer. It will not be a sound effect buzzer, it will be a buzzer a la Angelica's mouth. And it will sound somewhat like a goat crossed with a cow. At that point, your time has been cut off. So you can quickly make your conclusion, and then I will do the same for the next wonderful elevator pitcher... And we'll get through you. We have lovely four elevator pitches today, and we're going to start with you, Dylan. So Dylan, introduce yourself, give me your title, and then I will say three, two, one, go. And then you'll be off to the races. So Dylan, do you want to introduce yourself?

**Dylan Bourque:** Sure. I'm Dylan Burke, I work at CrowdStrike, I'm an engineer for a long time. My lightning talk today is "How to mock your co-workers without involving HR."

**Angelica Hill:** Thank you so much. Right. Three, two, one, go!

**Dylan Bourque:** So mocking your co-workers usually earns you an uncomfortable meeting with your manager and someone from HR. But it doesn't have to if you limit it to just your tests. Opinions vary on whether or not to use mocks. But if you do, don't assume everyone else will make the same decisions that you did. Don't export your mocks. That's the line. Sounds simple enough, but how do we get there?

First, make sure that all of your mocks are in an \_test.go file, or in a folder under internal. That way guarantees that no one else can import your mocks and create coupling. Next, if you're using one of the frameworks that does code generation, don't assume it's installed. Go install drops binaries in GoPath bin. Lastly, don't predefine and export interfaces. You can't export mocks if there's nothing to mock.

**Angelica Hill:** BEEEEP!

**Dylan Bourque:** Argh, missed it by one second.

**Angelica Hill:** \[laughs\] That was very good. I like that you didn't speak too fast. You still retained an understandable pace. Five points to Gryffindor. That was great.

**Dylan Bourque:** Score!

**Angelica Hill:** \[00:49:53.09\] Ehden, you're next. So please introduce yourself, give us the talk title, and then I'll give you your countdown.

**Ehden Sinai:** Yeah. I'm Ehden, I work at Contrast Security on our Go agent, and I've been programming for a medium amount of time, I guess, compared to Dylan. My talk was called Implementing Code Coverage with Tool Exec.

**Angelica Hill:** Great. Three, two, one, go!

**Ehden Sinai:** Go's code coverage tool takes your source code and adds little counters to the top of every block of statements. So each branch gets its own counter, and as your code runs, it increments these counters. And then before your program exits, it dumps the state of all of these counters to disk, and then Go can use this to tell you which parts of your code ran. So it's really a lot simpler than most people assume it is.

Now, all of these counters get added just before your code is compiled, and there's a flag built into Go called Tool Exec, which tells Go that instead of spawning the compiler, it should spawn your program instead, and you can use that to implement your own version of the coverage tool.

Now, the obvious follow-up is why would you ever do this, and the answer is you probably shouldn't, but it is a fun excuse to poke around inside the Go command, and learn a little bit about how it works. And it's usually simpler than people assume it is, so it's a lot of fun to do it. That's all I got.

**Angelica Hill:** Oh, my gosh, under time. I love that. 52 seconds.

**Ehden Sinai:** Didn't expect that. I was pretty sure I was going to go over.

**Angelica Hill:** Oh, you've clearly packaged, even within 60 seconds, you've got your little sections... So you've got it down to a science at this point.

**Dylan Bourque:** You're offsetting my one second over. It's fine.

**Angelica Hill:** Yeah, sharing is caring. We can just share the time between you both. Awesome. Next up, we have Andy. Do you want to introduce yourself and your talk?

**Andy Joseph:** I'm Andy Joseph, I founded a project called Pronto GUI. I've been a developer for many, many years, in many different languages, and the title of my talk is an infomercial on "Would you like a GUI with that?"

**Angelica Hill:** Great title.

**Andy Joseph:** I predict that it will take 56 seconds and 21, roughly.

**Angelica Hill:** Okay. We'll put that to the test. Ready? Three, two, one, go!

**Andy Joseph:** If you love the Go programming language as much as I do, then you never want to leave that environment. Thankfully, there are Go modules for just about everything. But what if you want to create a GUI for your service? Do you have time to build and maintain a solution in React.js? Chances are you don't. This is where Pronto GUI helps. First, you import the Pronto GUI module into your program. It's lightweight, it's fast, it has few dependencies.

Next, you build your GUI using primitives, requiring things, representing things you want to see, such as buttons, text items, tables, and so on.

Finally, you launch a Pronto GUI app, which is built using Flutter, to interact with your GUI. They communicate using gRPC streaming. How cool is that?! This all happens in hours, not weeks. I've used Pronto GUI to build solutions such as simulating industrial machines, and an expense report management solution. I'm confident it can do a lot more. It's the fast way to develop a GUI in Go. You can get it on GitHub, and let me know what you think.

**Angelica Hill:** BEEEEP! \[laughs\]

**Dylan Bourque:** But wait, there's more...

**Andy Joseph:** There's more, but I didn't have the time...

**Angelica Hill:** That was a great infomercial.

**Matt Dale:** Yeah, I want to go use Pronto GUI right now.

**Angelica Hill:** Adjusting the tone and format based on the time you get given. Innovation at its finest. And flexibility.

**Andy Joseph:** The key to doing a one-minute talk is to practice breathing... Because I felt like I was running out of air.

**Angelica Hill:** Do you have time to breathe in a one-minute talk? Or do you just have to practice underwater talking?

**Andy Joseph:** Oh, it's hard.

**Angelica Hill:** Awesome. Last, but certainly not least - and those who have not given an elevator pitch, I will ask, if you would like to give one, no pressure. But finally, we have Cassie. Do you want to give a little intro on you and your talk title, and then I'll count you in?

**Cassie Coyle:** Definitely, can do. I'm Cassie Coyle, software engineer at Diagrid. I contribute to the Dapr open source project.

**Angelica Hill:** Awesome. And what is your talk title?

**Cassie Coyle:** \[00:54:01.26\] Oh, yes, I forgot. Standardizing errors in Go, a Practical Guide with Dapr. And that is my intro sentence as well, so I will say it again when I start.

**Angelica Hill:** Love that. Right. Three, two, one, go!

**Andy Joseph:** Welcome to Standardizing Errors in Go, a Practical Guide with Dapr. In this talk, I'll introduce Dapr, distributed application runtime, the 10th largest CNCF project, and share about our open source errors package to be more empathetic to our users. We'll explore the errors package that enriches errors using the informative model inspired by the Google's gRPC API error details.

The Dapr Kit Errors package is written entirely in Go, all open source, and it uses the builder pattern, allowing you to provide users with essential error details, including resource info, retry info, help link, and more. We implemented the error interface such that the primitive type returned is actually an error as well, and then you don't have that additional type to maintain. This is definitely an ongoing effort for us. I hope you see how it benefits us in our community, how it could also benefit you and yours. Thank you so much.

**Angelica Hill:** Woooh! So close. You got it right, right on that 60 seconds.

**Dylan Bourque:** Now I feel like a massive failure as the only one who went over.

**Angelica Hill:** I mean, you did tell us earlier in the episode that you don't really prepare... So, you know, expected. No, I'm joking.

**Dylan Bourque:** It's fair.

**Angelica Hill:** Honestly, I feel like when I asked you all whether you would be comfortable doing your lightning talks in one minute, I was very prepared for you all to be like "Um, no..." So thank you very much for accepting the challenge. And I actually feel like those are really great elevator pitches, that I got a lot out of. And for those of you who feel like that elevator pitch just wasn't enough, you want to dig in more - as we've mentioned, all of our lovely guests today gave lightning talks at GopherCon this year. We'll be releasing the videos on our GopherCon YouTube, hopefully in the next few weeks, depending on when this episode gets released. Timings may vary, but you can check that and see the full seven-minute talk from all of these lovely guests.

Would anyone who didn't give an elevator pitch like to? No pressure. I just want an equal opportunity.

**Jacob Hochstetler:** Sure.

**Angelica Hill:** Jacob, you're up for it?

**Jacob Hochstetler:** I feel left out. Zero prep, we'll see what we can do here.

**Angelica Hill:** I'll give you a second. Introduce yourself and tell us what you're going to be talking about.

**Jacob Hochstetler:** So I'm Jacob, I write software. That's literally from my bio slide, because bios take too long.

**Angelica Hill:** Great. And what is your title?

**Jacob Hochstetler:** We can start. Let's just go. Let's rock and roll.

**Angelica Hill:** Okay, I'm ready. Three, two, one, go!

**Jacob Hochstetler:** So "Golang for competitive programming?", emphasis on question mark. The spoiler here is no. So there's a law in journalistic headlines that if the headline ends in a question mark, the answer is no. And in this case, no, Go is not great for competitive programming. What is competitive programming? It's a time sport where you basically play code golf to solve a problem with a solution in code. And a lot of times it's in Python, or JavaScript, or if you hate yourself, Java itself... But Go is not great for this, because it doesn't solve any of Go's actual -- it doesn't play to any of its strengths, like parallelism, or software engineering. So competitive programming itself is sort of antitethical to software engineering, and don't use Go for it. Done.

**Angelica Hill:** Mic drop. \[laughs\] Well done.

**Dylan Bourque:** "If you hate yourself, use Java." I feel that so much.

**Matt Dale:** Yeah. Even on his shirt.

**Ehden Sinai:** Besides that part of the message, I actually really like the other message, which is the reason that Go is not really great for competitive programming is actually stuff that makes it good. And I thought it was a nice way to phrase it.

**Jacob Hochstetler:** \[00:58:06.19\] And I could talk about it longer, obviously, and I will for five more seconds... It's one of the things the students right now really have a problem with, because I'm having to tell them, "Hey, for career readiness, as a senior, you need to like dive back into algorithms. You need to start doing LeetCode", because all the online assessments now - it's not a free pass anymore. Like, the market's a lot different.

And at the same time, I'm telling "Also, this is dumb. LeetCode is sort of dumb." If you enjoy it, it's great. It's like people who play chess. There's no point to chess, but if you play it and enjoy it, do it. But yeah, I'm going to mirror that sentiment. Go is not designed for this. It's not designed for software engineering at scale. The reasons we all love it.

**Dylan Bourque:** It's funny you're encouraging LeetCode, because I have a personal aversion to interview processes that involve LeetCode.

**Jacob Hochstetler:** Hey, I'm on the same side with you there.

**Cassie Coyle:** No one likes them.

**Jacob Hochstetler:** No one likes them.

**Dylan Bourque:** I go out of my way to not do it. It's like "No, we're not going to do some stupid algorithm -- algorithmic --" Bleah! I can't even speak, it annoys me so much. Some stupid algorithmic problem that either you already know, or you don't know, and you're just going to flounder for 45 minutes. Neither one of those helps anyone.

**Cassie Coyle:** But if you practice, you might get a similar question.

**Dylan Bourque:** Who has time to practice...?

**Cassie Coyle:** Yeah, that's the real question.

**Angelica Hill:** I feel like you all know where my brain is going, because we're going up to unpopular opinions, and I feel like, Jacob, you've given us two already to work off of...

**Jacob Hochstetler:** Those were popular opinions?

**Angelica Hill:** Unpopular opinions. Maybe. LeetCode sucks... I'm sure there are people who love it.

**Dylan Bourque:** This is a Go podcast. "Java is terrible" is a pretty safe bet.

**Angelica Hill:** Yeah. Awesome. So thank you all for taking the time to both do elevator pitches, talk about lightning talks, the differences between them and long talks, and also just spending your Friday afternoon with me. I really appreciate it. So with that very kind and caring sign off, we're now going to move into the more spicy section of the episode, which is unpopular opinions.

**Jingle**: \[01:00:29.10\]

**Angelica Hill:** So who is going to start us off with an unpopular opinion? A reminder - it does not need to be about Go, or tech, or anything remotely to do with Go or tech. It can be just an opinion that you believe when put on Twitter to our wonderful Go community, or other software engineers who happen to listen to Go Time, they're going to be like "No, I don't agree with you."

**Dylan Bourque:** I have a technical one.

**Angelica Hill:** Great.

**Dylan Bourque:** Using protobufs well-known types is overrated.

**Angelica Hill:** And what alternative do you suggest?

**Dylan Bourque:** Just define your own values. My example is a timestamp. Like, a timestamp is an integer, if we're being real about it. It's an integer, or maybe a string. Why do you need to pull in an external dependency, and a nested message, and all the conversions back and forth for a time? Disclaimer - my version is partly informed by having to do a massive conversion off of gogoprotobuf two-ish years ago... And they had their own implementation of all the protobuf well-known types, that I had to straddle gogo and Google for about 18 months. So just don't.

**Angelica Hill:** Do we think that's an unpopular one?

**Ehden Sinai:** \[01:02:09.03\] I think it makes sense... I mean, I've had to deal with timestamps before, and I've rolled my own type like three times dealing with other people's time formats, because there's almost no point using someone's built-in format, because you might need it in milliseconds or you might need it in something... I mean, there's just like weird things to consider that if you don't roll your own, you don't have the control over. I don't know. I know time was only one example, but yeah.

**Jacob Hochstetler:** I think it's an unpopular opinion among C++ devs. I think C++ devs will stab you in the front and the back over this sentiment. But yeah, I can get on board with this.

**Dylan Bourque:** I mean, there's the related opinion that time zones were a mistake.

**Ehden Sinai:** That's not unpopular among programmers... \[laughter\]

**Matt Dale:** But, I mean, I will say it kind of does play into like a little repetition is better than a little dependency, which is not supposed to be unpopular... It's one of the Go -- I forget the word; proverbs? It feels like that.

**Dylan Bourque:** I get a lot of pushback whenever I throw this idea out, but maybe you don't need an external dependency to send a time over the wire. You could just do it yourself. It doesn't seem to go over well.

**Jacob Hochstetler:** Angelica, did you grow up in UTC?

**Angelica Hill:** Yeah...

**Jacob Hochstetler:** When did you learn about other time zones?

**Angelica Hill:** When I was young and I moved to the US.

**Jacob Hochstetler:** Oh, okay. They're horrible. I hate them.

**Angelica Hill:** No, I've actually ironically spent the least time of my life in London, and in England... I spent the rest of my life in other places.

**Jacob Hochstetler:** UTC, my beloved...

**Dylan Bourque:** I'm in central time in Louisiana, and this company I used to work for had a customer in Arizona who chooses not to do daylight savings time.

**Angelica Hill:** Okay...

**Dylan Bourque:** And scheduling is really fun on the border between Arizona and New Mexico, when five minutes down the road, it may or may not be an hour different. Time zones were a mistake.

**Angelica Hill:** Okay. Time zones were a mistake.

**Cassie Coyle:** I just implemented a distributed scheduler, and we had to consider these kinds of things, so... Yeah, fun stuff.

**Angelica Hill:** Alright. Well, we'll see what the masses think of what the -- what I think was two unpopular opinions. So... Great. Very, very great. I don't think this group found them all that unpopular, but maybe the masses will. We'll wait and see. Does anyone else have an unpopular opinion that they would like to share?

**Ehden Sinai:** Since we were talking about C++ and other languages earlier, mine is that cgo has performance issues. I don't think that's a particularly controversial take... But Go's kind of shaky interop with C is I think actually a good thing, because it has forced us to not have to depend on a lot of popular libraries, much of which are kind of garbage at this point. Like, there are a lot of really bad C++ libraries out there, or C libraries that people have just defaulted to for things like SSL, or like parsing XML, and things like that. And interop with C is very useful at times, but I think it's kept Go away from a lot of trash dependencies. And I say this because I've been noodling with Zig for the past couple of weeks, for one reason or another, and we really got off easy with much simpler builds, not having to depend on so much C libraries.

**Dylan Bourque:** As someone who's had to deal with quite a bit of cgo, I concur 100%. It's kind of a good thing that it's hard, because lots of people are like "Oh, I can just use cgo." But you could also not.

**Ehden Sinai:** Yeah. At this point, I almost always prefer the not. There's a few exceptions, but... Yeah.

**Jacob Hochstetler:** \[01:05:57.09\] I work in a weird place where sometimes we need weird stuff, and... I'm not attacking your opinion, let me start off... This is a backdoor agreeing with your opinion.

**Angelica Hill:** I mean, you can disagree too, Jacob. This is the spicy segment.

**Jacob Hochstetler:** Oh, I will. I will disagree with a lot more.

**Angelica Hill:** Okay, I'm ready.

**Jacob Hochstetler:** Like crypto FIPS. The crypto FIPS library doesn't exist in Go, and even Microsoft had to go create their own, and it's binding to OpenSSL, sort of... And there's huge gaps. And the Go packages themselves are great and solid. Crypto itself is super-solid now. It's just not as big as it needs to be, and there's not enough people working on it. And that's where there's a lot more people that know C, versus there's a lot of people who know Go.

**Ehden Sinai:** Yeah. I mean, with crypto in particular, frankly, I would prefer to use stuff that I know is written by people like Filippo and Roland, and super-well-tested... And usually, more than once they've found bugs with the reference implementations in C, because they had to re-implement it... And stuff wouldn't happen if interop was seamless the way it is with other languages.

**Dylan Bourque:** Slightly related to that, speaking of Filippo and crypto, the regressions in 1.20, that he fixed in 1.21, and talked about at GopherCon this year - yeah, those were fun at work. We have a few systems that spend a lot of time verifying public-private keys, and things did not go well when that regressed like it did.

**Angelica Hill:** Good job that they fixed it.

**Ehden Sinai:** His talk was really good.

**Dylan Bourque:** Yes. I went and personally shook his hand and thanked him at the conference.

**Ehden Sinai:** Filippo's talk was really great, and whenever it's uploaded to YouTube, I'd definitely recommend it for everybody. But one thing that stuck out to me was that he didn't use speaker notes at all. He wasn't even standing in front of the podium. He just kind of like riffed for 30 minutes straight, with what I'm pretty sure was very little prep. He can just ramble about that stuff for a really long time. And no one cares, because they all like to listen to him.

**Angelica Hill:** I will say, Filippo is the king of preparing like crazy, and then coming across so laissez faire, so "I'm just talking... It's chill..." So huge props. I want to emanate that kind of speaker confidence in the future.

**Dylan Bourque:** Yes. Life goals as a speaker.

**Angelica Hill:** Mm-hm. Cassie, I feel like you had one.

**Cassie Coyle:** I have one, but yours were like so hard tech, and I couldn't think of like so many... And then one just came to me as I was drinking my water. It's like a work-life-health balance thing, so like related... But mine was I'd rather carry around a gallon jug of water everywhere I go, rather than filling up a cup... Because I never get up from my desk. I'm always at my desk. So now I just stay at my desk if I stay hydrated. But I don't think other people like to carry a gallon jug.

**Angelica Hill:** Do you have one of those like monster bottles, that look like the size of your head?

**Dylan Bourque:** I would concur... I don't want to carry a gallon of water everywhere... So yes, unpopular.

**Cassie Coyle:** Yeah.

**Andy Joseph:** It doesn't really fit in the cup holder in my car, that's the problem...

**Cassie Coyle:** Yeah... You have to prop it up.

**Jacob Hochstetler:** That's what baby seats are for.

**Ehden Sinai:** Exactly. Strap it in.

**Dylan Bourque:** You put it on the passenger seat, and the little automatic system thinks there's someone there, and then starts dinging at you to buckle the seatbelt...

**Andy Joseph:** And then it rolls onto the floor, and you can't reach it, and you get in a car accident... That doesn't work out too well.

**Dylan Bourque:** Just downsides all around.

**Angelica Hill:** Before this gets too dark, we are coming to the end of our time together. Does anyone have any final burning unpopular opinions? I don't want to cut us off.

**Jacob Hochstetler:** So ever since Go 1.13 was released, I think checking on errors has become intuitively worse, and I hate it. In the past, it was easy to do a switch case on errors. I call an API, I do a switch case, I've got five different errors going back... Bingo-bango. Call out the functions. And now I'm doing this errors is, I've got to like -- it's not great. It could be easily implemented in the switch case that "Oh, you're on errors? I'm gonna avoid errors is, and just have the errors listed." So that's my unpopular opinion.

**Cassie Coyle:** If you standardize them and listen to my talk, it could be a little easier... \[laughs\]

**Dylan Bourque:** Cassie has solved that problem for you.

**Cassie Coyle:** Done. It's open source. Please use it.

**Angelica Hill:** Awesome. Well, that actually brings us to a close from this episode. It's been an absolute pleasure to spend this kind of hour or so with you all. Again, I will encourage all you lovely listeners to go and watch the lightning talks. And if you are interested in giving a lightning talk, I feel like we've left you with a few little tips and tricks to set you up for success. So thank you all again. Have a wonderful weekend. Thank you for spending your Friday with us at Go Time, and goodbye all.

**Ehden Sinai:** Thank you.

**Dylan Bourque:** Thanks.

**Cassie Coyle:** Thank you.

**Dylan Bourque:** Bye everyone.

**Cassie Coyle:** Bye!
