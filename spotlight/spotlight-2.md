**Jerod Santo:** Welcome to our first Spotlight series, recorded at OSCON London 2016. I'm Jerod Santo, managing editor of Changelog. Katrina Owen is an accomplished speaker, creator of the excellent coding practice and feedback site Exercism.io, and co-author of 99 Bottles of OOP.

Have you ever heard the story of how Katrina went from anonymous developer to sharing a byline with Sandi Metz? She shared all the details during this face-to-face chat. Listen in.

\* \* \*

**Jerod Santo:** As I told you, we had Sandi Metz on the show recently, which was kind of like a checkbox, like a bucket list for us. We always have to act like we're cool about it... You know, we had Matz on a year ago, sweatin' bullets... Like, it's Matz! And he was nervous, which made us nervous... But on that one we just were like, "You know what? We're just gonna grovel. \[laughter\] We don't have to play it cool, we're gonna just tell you how awesome you are over and over again."

**Kristina Owen:** Yeah, because that's not awkward...

**Jerod Santo:** I know, right? He was very gracious, and a great guest, and amazing story... Do you know his story...? He never had access to compute power, so he just read about programming languages.

**Kristina Owen:** No, I didn't know this.

**Jerod Santo:** He had one computer, but it could only do - and I'm gonna botch the details - Turbo Pascal, or something...

**Kristina Owen:** Right.

**Jerod Santo:** So he would just do that. But then he would go to the library and he'd buy books about Lisp and about these other languages...

**Kristina Owen:** That's amazing.

**Jerod Santo:** I don't think Perl was a thing back then, but probably SmallTalk and these things... And he would just read books about programming languages, and then he would kind of have this wanderlust, or this desire... He thought they were so beautiful, but he never used them. So by the time he was adult and doing things, he had this super knowledge of all these different design constructs and decisions, because he read the decision-making process and he thought about it, but he never got to use the practical ramifications of the decisions, and that kind of inspired him to create Ruby.

So he told us that story, and it was just amazing. But with Sandi we tried to play it cool, and even she seemed a little bit nervous, even though she talks now for a living. Then a few minutes later she was over it, and everything was good.

**Kristina Owen:** Yeah, Sandi's an amazing speaker. I first heard about her -- well, I stumbled across a video that she did, a conference... This is way before her book, so nobody knew... Basically, she knew whoever was at the local meetups; that's the thing that you do when you work as a minion at some university or whatever. So she had done a talk at Gotham Ruby or something like that, and I stumbled across it on the internet and it was amazing. At the very end, someone was asking, "So, do you blog? Do you write?"

**Jerod Santo:** She's like, "I don't do anything."

**Kristina Owen:** And she was like, "Oh, I know I should, but I don't... But I'm working on this book, but it's not gonna be ready for a long time."

**Jerod Santo:** \[laughs\] Did you meet her then?

**Kristina Owen:** No, so the timestamp on this video was a year earlier, and she said "Oh, the book won't be ready for at least a year", and I was like "Where's the book!? It must be ready!" So I found it in beta on Safari Books Online; I tried to buy it and there was a bug on the website that they wouldn't take my money...

**Jerod Santo:** So you couldn't get it...?

**Kristina Owen:** I complained on Twitter, I was like "Safari Books Online, you need to take my money because I need this book", and then Sandi came across it and she was like, "Um, let's figure out how we can make this happen." So I got to read the beta.

**Jerod Santo:** You really wanted that book.

**Kristina Owen:** \[00:04:03.01\] Oh, my goodness! It was really exactly what I needed at that time. I had been struggling with refactoring and trying to figure out on my own, like "How do you make code better? How do you remove dependencies? How do you make it more readable? How do you make it less painful?" The talk was all about that; it was like exactly that, and this book was gonna be life changing.

**Jerod Santo:** You just knew it.

**Kristina Owen:** It had to be. And then I was right too, because it was amazing.

**Jerod Santo:** That's awesome. You were right. So you kind of busted onto the scene giving a talk, and then you got on Ruby Rogues because of the talk, kind of...

**Kristina Owen:** Very much because of it. I lived in Oslo, I knew 12 people; we'd go to the same meetup every month. I worked at a product company that was really cool there; small, like there were seven or eight engineers. And there was a conference that was announced in Sweden for the summer, and I hadn't really been to a conference before, and I wanted to do that. So I was like, "Hey, CEO person, who has money and control, can I go to this conference?" He was like, "That sounds like a great idea, you should go to this."

**Jerod Santo:** Ask and you shall receive.

**Kristina Owen:** Yeah, and a couple of my colleagues came along as well. I met all of these amazing people in the Ruby conference (it was a Ruby conference)... These fantastic people, who were welcoming and friendly and interesting and interested... I was a nobody and I was still having these fantastic conversations with people.

At one point, a couple other guys were like, "You should give a talk." I was like, "No... Hah, that's not gonna..."

**Jerod Santo:** Yeah, that's what everybody thinks at first.

**Kristina Owen:** That's not even gonna happen. Like, when would I do that? How would I do that? What would I talk about? Nothing, right? And then a year later I applied to give a talk at that same conference.

**Jerod Santo:** Well, what changed your mind, though? Because you said, "No, no, no", and now later you're doing it.

**Kristina Owen:** So one of the guys said, "It's really challenging, and it's really worth it." And I was like, first of all the fact that he acknowledged that fact that this is really hard - that was a relief. That made me think, "Okay, so he's not pretending it's easy." Hard things - I know how to do hard things: you practice. You work really hard and you figure our what the rules are, and then you practice.

**Jerod Santo:** Yeah, you put in the effort, and...

**Kristina Owen:** So I was like, "Um, maybe I could do that", but I put it away... I kept going to these meetups in Oslo, and every meetup I'd bring a little refactoring that I had done; I wouldn't show it upfront, but when most of the people had left, I'd pull it up and then say, "Oh, look what I did! This was a fun refactoring."

**Jerod Santo:** And people liked it.

**Kristina Owen:** Yeah, somebody said, "I would watch a whole talk of this." I was like, "Oh, I could do a talk."

**Jerod Santo:** Nice! So that was like a little bit of a confidence boost. You have to try. Was this the talk that shocked the Ruby world?

**Kristina Owen:** Yeah, totally. \[laughter\] It brought down Twitt-- no...

**Jerod Santo:** Twitter was going down pretty easily back then.

**Kristina Owen:** That's true, there was a fail well going on...

**Jerod Santo:** It was a low bar.

**Kristina Owen:** The bar was very low... No, so I did this talk, and James Edward Gray of the Ruby Rogues saw a video of it, and was like, "You should all see this talk, it's really good", and then they invited me on the show to just talk about refactoring. Then later they brought me back on as a panelist.

**Jerod Santo:** I recall that, because I used to listen to Rogues back then, and James was so effusive about this talk that I was like, "I should just pause this and go watch, I guess."

**Kristina Owen:** It's fascinating... I was so terrified when I was gonna give this talk. I thought I was gonna throw up, because I was just so scared. I had no idea what the reception would be.

**Jerod Santo:** What do you think that -- first, for the audience's sake, let's lay out what the talk was, but then tell me what you think really resonated about it. Because it did. Everybody loved it - why?

**Kristina Owen:** \[00:07:53.25\] Yeah, so the title was Therapeutic Refactoring. The CFP was blind; first of all, I was given a chance, even though I had no experience speaking, nobody knew anything about who I was. The abstract spoke for itself, and the title I think was alluring. This conference was also at a spa...

**Jerod Santo:** It was at a spa?

**Kristina Owen:** It was at a Japanese spa in Sweden?

**Jerod Santo:** Talk about therapeutic, right? You were so on theme.

**Kristina Owen:** Right, so I think I totally lucked out, in some ways. The talk itself was a very straightforward, simple story... But it really was a story. I formed it as "There's this horrible code and it's untested. How do you deal with it?" So it was the process, step-by-step, of adding characterization tests, and then the process (step-by-step) of refactoring. And it was using one of the recipes from Martin Fowler's Refactoring book; I hadn't made anything up.

**Jerod Santo:** Right, you were just applying something that you read.

**Kristina Owen:** Yeah, and applying it sort of gently and carefully. And the whole point of the talk was that refactoring is something that can make you smarter, because it offloads a lot of the irrelevant details out into your tests, and this process, which is like lots of tiny steps, so you don't have to hold as much in your head; you're freeing up cognitive resources, and it makes you feel better and happier... So it's worth doing.

**Jerod Santo:** So it was therapeutic, yeah. So that happened, that was a thing...

**Kristina Owen:** Yeah, and I think the thing that resonated was that it was told as a story. It's not a readme; I'm not reciting a readme. They could go read a blog post, but it might not feel the same.

**Jerod Santo:** Yeah. So I'm just now thinking about your journey a little bit, because here you were, kind of stalking Sandi Metz's Safari page, trying to get her book...

**Kristina Owen:** No kidding, yeah... Sandi Metz, who at the time was completely unknown, which is almost ridiculous to think about now...

**Jerod Santo:** And then your internet fame explodes because of the talk, Sandi's does because of the book...

**Kristina Owen:** Yeah, and she's way more famous than I am.

**Jerod Santo:** ...and then she starts giving talks.

**Kristina Owen:** Her fame - she can't even go to the restroom if she goes to a conference, because she's being mobbed by the hoards who want to talk to her.

**Jerod Santo:** But you wanted to read her book so bad, and then a few years later you're writing a book with her. That's kind of a cool reversal...

**Kristina Owen:** Yeah, it is a cool reversal. I'm trying to think what were the steps in that. So the first thing was I gave her a ton of feedback about the book. After reading the first chapter, I was so excited that I sent her feedback, and she was like, "Oh, could you do that more? Could you just put your stream of consciousness in the margins?" I was like, "Yeah, I could totally do that."

**Jerod Santo:** Nice.

**Kristina Owen:** So I did, and when I finished doing that, we got on a call and talked about...

**Jerod Santo:** And a friendship probably spawned, or a relationship spawned.

**Kristina Owen:** Yeah, in some way... We had things to talk about, and it was an interesting -- I think we both got something out of that. And this is just about the time where my talk got accepted (Therapeutic Refactoring), so...

**Jerod Santo:** Okay, so it was pre-Therapeutic Refactoring.

**Kristina Owen:** She gave me feedback on the early versions of the talk, and the most important feedback - there were a couple of really important things that she... My talk would have been worse than mediocre is she had not had given me some pointers.

**Jerod Santo:** And they were...?

**Kristina Owen:** The first bit of feedback was I showed her the before and after shot of the first refactoring -- I had like seven examples that I was gonna put in this talk, and she was like "That's enough for ten talks. Let's just go with one example."

**Jerod Santo:** I see... So focus it in, and don't try to do too much.

**Kristina Owen:** Don't try to do too much. And then I showed her the before and after and sort of explained, and she was like, "Okay, so now you look smart and I feel dumb..." I was like, "Oh, that's not good..."

**Jerod Santo:** \[00:11:54.23\] That's not the goal, right?

**Kristina Owen:** That's not what I was trying to go for, so I worked really hard to try to figure out how do I carry the audience along with me in this discovery, so that it really feels like this is... I mean, this is not hard, right? But I want you to understand when watching it that this is simple and it's approachable and it's something that you can do, and it's not magical; I'm in no way special for doing this. So that was really important.

Then she said, "You've gotta tell a story", and I was like "How do you do that?" She was like, "You just do..." \[laughter\] This is something that some people have been doing all their lives, they tell stories, and that's never been something that I had done, so I started reading books about storytelling; The Anatomy of a Story is a book that is written by a screenwriter, and it's pulled in Hollywood films where the script isn't going to the right place... They bring him in to save a project.

**Jerod Santo:** Nice, that's a good one.

**Kristina Owen:** Yeah, so I just started reading as much as I could to try to understand how do you structure a talk in order for it to be compelling, and stuff like that. Over time we just had things to talk about.

**Jerod Santo:** Right. Then POODR got released, and she continued to give talks.

**Kristina Owen:** And I continued to give talks...

**Jerod Santo:** Rinse and repeat...

**Kristina Owen:** Rinse and repeat... I launched Exercism.

**Jerod Santo:** That got on Wired.

**Kristina Owen:** That got on Wired, I was terrified.

**Jerod Santo:** It took you to a new level.

**Kristina Owen:** Oh, my goodness. Yeah, so the thing about Exercism that's important here is that Sandi in the very beginning did some of the exercises, sort of just for her own edification, and one of those exercises was the 99 bottle of beer problem...

**Jerod Santo:** Oh, no way!

**Kristina Owen:** ...which kicked off this whole thing where we went off, each to our own side, to do a bunch of refactoring, and we'd get on a call and say, "Why did you do this? I hate that/I love that. That's interesting. Hm... I'm not sure I understand where you're going with that..."

**Jerod Santo:** Right. To round that out a little bit... So the book is 99 Bottles, that you guys worked on together, and it's all about a specific problem. When we had Sandi on the Changelog we talked to her like "Why is that problem so profound? Why is it perfect for this style of teaching and all those things?", and she gave a lot of reasons. But what I didn't ask is where did it come from?

After the call, I was like "I should have found out..." -- like, "Did you think of this? Were you just like, 'No, it's gonna be good', or did you stumble upon it?" It turns out it was a part of Exercism.

**Kristina Owen:** It was a part of Exercism...

**Jerod Santo:** Mind = blown.

**Kristina Owen:** ...and people had been submitting solutions to this problem and they were all kind of terrible, and at some point...

**Jerod Santo:** So where did you get it?

**Kristina Owen:** Let's see... I probably -- I mean, there's a whole website of 99 Bottle of Beer in all the programming languages.

**Jerod Santo:** Oh, there is? It's kind of like Fizz-Buzz, or something.

**Kristina Owen:** Right, yeah. I think it was also used as one of the exercises in Chris Pine's Learn To Program book, so it's been out there. It's one of those common things that's got just enough algorithmic complexity to be useful.

**Jerod Santo:** But it looks simple.

**Kristina Owen:** Ridiculously simple.

**Jerod Santo:** Everybody thinks immediately, "Oh, I can do that in like ten minutes." And you can...

**Kristina Owen:** And you can...

**Jerod Santo:** But not well. \[laughs\]

**Kristina Owen:** Well, you can do a simple version, but nobody wants to do a simple version. They all wanna do a clever version.

**Jerod Santo:** They want people to think, "You're smart and I'm dumb." \[laughter\] Okay, so you introduced her to that problem via Exercism, and you both would kind of solve it in your own ways...

**Kristina Owen:** Well, in particular Sandi was solving it in really interesting ways. When most people submit a solution to Exercism, they'll submit one solution and then you talk about that. She submitted one solution that had four solutions in it; four completely different approaches with this long commentary of like, "Well, if this were the tradeoffs I was making, then this solution... But if this other thing, then this other solution." It was the most interesting approach that I'd ever seen in terms of not what the actual solutions were, but in terms of thinking deeply about the design tradeoffs here. Like, in what situations would one approach/design work, and in what situation would another?

\[00:15:58.12\] Also, this sort of lead to me asking, "There are these abstractions in this problem - how did you know?" and she was like, "Well, I just did." And I couldn't see it.

Eventually, over time, we used my refactoring practice and skill to figure out how can we go step by step from the simple solution to these abstractions that she just knew were there, because of her experience.

**Jerod Santo:** She had the expert intuition, or the experience, where you just don't.

**Kristina Owen:** Yeah.

**Jerod Santo:** That's an awesome skill, but it's not a helpful skill for other people.

**Kristina Owen:** It's really hard to teach...

**Jerod Santo:** And you had the refactoring history and practice of going step-by-step, so together you helped her kind of unfold how she got there. She would jump from step one to seven, but you were like, "Let's document two, three, four, five and six."

**Kristina Owen:** Yeah, and I didn't quite understand the process that I used. It's lots of tiny steps, but I didn't necessarily understand -- there, as well, was this element of like "I just did it in a way that I couldn't really articulate the value of." And of course, when she first saw it, she was kind of horrified, because it was like "Why would you do such a thing? Why don't you just do the thing that's kind of obvious?" I was like, "Well, it's not obvious to me..."

**Jerod Santo:** It's only obvious to a certain eye. Tell me about the book writing process now... What was that like? She sends you stuff, you send her stuff? How did that work?

**Kristina Owen:** So we worked on the problem back and forth for a long time, until we started realizing what the actual lessons in it were - both refactoring and design lessons - and then people were hounding her to give courses, to teach classes... Privately, in businesses, publicly as well, but mostly private. So we got together and worked out sort of an early version of some curriculum that we could go teach together, and we would prep in the morning, debrief in the evenings...

Of course, our first plans were nothing like reality, but over time things settled into a rhythm. We understood what the curriculum was... After a while, we had seen and heard every single version of every single...

**Jerod Santo:** There's not a solution that could possibly surprise you guys, right?

**Kristina Owen:** Right, after a while...

**Jerod Santo:** ...for the 99 Bottles.

**Kristina Owen:** Yeah, I'm pretty sure we've seen it all. So the curriculum got tightened up, and after a while - I don't even know at what point we've decided this, but this kind of has to be a book. We understand the content, we understand the problem really well, we've taught it, we've seen all of the objections, we've seen all of the solutions, we should be able to turn this into a book.

At that point, we worked a lot on the structure of the book. We had all of the code examples step by step by step, and it was like, "Okay, what is the structure in terms of chapters and sections? In which order do we put all of these ideas?", and then finally, there's like a final actual writing pass which Sandi does for having a very consistent voice in the whole book. And then several rounds of editing.

**Jerod Santo:** So is it out there? Is it done?

**Kristina Owen:** No...

**Jerod Santo:** It's out there, but it's not done...?

**Kristina Owen:** Yeah, so it's in beta. It's six long chapters, so it's a proper-sized book, like hundreds of pages; I don't know what the size is right now, but that number is probably available on our website.

**Jerod Santo:** She said there was like 45,000 words at one point.

**Kristina Owen:** Yeah, I think that was the four chapters.

**Jerod Santo:** Yeah, that's a lot of words.

**Kristina Owen:** So the first five chapters out of six are out. We didn't want to release it -- we released the first four chapters in beta this summer (early June, early July, something like that). We didn't wanna release it before those four chapters -- before we had something that you could actually read and get something out of it. We didn't want to sell you a promise, we wanted to sell you something concrete, that has valuable, that will be more valuable, but that you can already enjoy.

**Jerod Santo:** \[00:20:05.28\] That's a great story. I hope it's a really good book. I was able to sit in a little bit on one of your trainings, so I understand the problem and I have a feeling that it's gonna be a really good book, because just walking through the refactorings of that specific problem... I was there working for the Changelog, not taking the class, just observing, but I wanted to bust out my editor...

**Kristina Owen:** Oh, it's so tempting...

**Jerod Santo:** It was compelling. It was very compelling. And even as a person who's done object-oriented for ten years, I was just like, "This is a somewhat transformative way of applying thought to code."

**Kristina Owen:** Yeah, the actual ideas in the book are very simple, but it's hard to -- that simplicity that's at the other side of complexity that some people talk about... You have simple that's kind of naive, and then you have this complexity that feels very satisfying, and getting beyond that complexity is really hard, but once you do, you get to these deeper, simpler truths, and I think that that's something we've managed to do with this book.

**Jerod Santo:** Yeah, very cool. Let's talk about conferences a little bit, because it's kind of been a launchpad for you, at least in your public career. Here we are at a conference, OSCON... You used to be scared and had to step out on the ledge to give a talk; over time, you've probably now done talks many times, you've been to all the conferences all over the world... I'm sure conferences are different now than they were before. I know you're here with GitHub so you're kind of working as well, but you're speaking... What do you try to get out of conferences nowadays?

**Kristina Owen:** The most important thing is meeting people, having real conversations. Not those fleeting, "Oh, hey... What do you do? I program. Me too! We have so much in common!", but to actually be able to say, "Oh yeah, you work on this project - what's hard about it? What's interesting about it?" Those conversations are really valuable. They don't always, but they often grow into something that's a little bit more durable. Now there's this face that I recognize, this voice that I know, this person that I have some/very little idea of what they care about, so suddenly on the internet when I see tweets from them or blog posts from them I have this bigger idea of who this person is.

**Jerod Santo:** Right, a more round picture of people.

**Kristina Owen:** Yeah, and I think that's a valuable thing, because suddenly these tenuous relationships become important in other ways. It's like, "Oh, we suddenly are going to be working on a very similar thing, and I have experiences and you have experiences, and we can trade, and it's gonna be useful."

**Jerod Santo:** There's a lot of people that go to conferences and they find that getting past the shallow, "Hi, how are you?"/shake the hand, it's very difficult. You're a quiet person, you're kind of shy, and yet you seem to have relationships with conferences - maybe because just because you do it so much, and because you've been to so many... But do you have any tips? How do you bust out of that awkwardness, that fear, or whatever it is that keeps us from even engaging in conversations and conferences? You just go to the talks, and then go back to your hotel room.

**Kristina Owen:** Well, going to the talks is good, but it's kind of the least valuable part of a conference.

**Jerod Santo:** Especially when they record them and put them online... You can watch it later.

**Kristina Owen:** That, too. So the talks are interesting in particular because they can work as a conversation starter; you meet someone at the coffee stand and you're like, "Wow, what have you seen?"

**Jerod Santo:** Yeah, it's a shared experience.

**Kristina Owen:** Yeah, and then that's a launching point for trying to find that common ground where you can actually have a real conversation. Often, those real conversations happen in that edge of where technology meets human fear.

**Jerod Santo:** I like that.

**Kristina Owen:** \[00:24:03.00\] You're now talking about the vulnerability of being human and not being perfect, and not figuring this all out, and that's often where we can help each other in just having insights and sharing experiences.

**Jerod Santo:** I would say it's worth it. It's worth stepping out a little bit. I have a tendency where if I have a lot of knowns in the place, I will just cling to them.

**Kristina Owen:** Yeah...

**Jerod Santo:** I always had friends in high-school or college, we'll go to a party, and if I have three buddies with me I'll just hang out with them the whole time.

**Kristina Owen:** Yeah, I see people do that at conferences. I think it's a shame.

**Jerod Santo:** Well, I kind of do, too. I kind of like coming to this conference by myself, because I don't really have a choice - I'm either the awkward one, standing by himself, or I go talk to somebody. So it kind of pushes me over my tendency to cling to the known, because there's no known here to cling to, which is kind of cool.

Well, this has been a lot of fun. Closing thoughts, words of wisdom?

**Kristina Owen:** No, I'm not wise.

**Jerod Santo:** \[laughs\] You heard it here first - Katrina Owen, not wise. Check out 99 Books -- I keep calling it 99 Books...

**Kristina Owen:** 99 Bottles of OOP.

**Jerod Santo:** I call it 99 Problems, I called it 99 Books... 99 Bottles of OOP - check that out. Thanks for stopping by here at OSCON.

**Kristina Owen:** Thanks for having me!

\* \* \*

**Adam Stacoviak:** Thanks again to our friends at O'Reilly for the awesome working partnership at OSCON London 2016. We'll see you again, OSCON, in 2017 in Austin, Texas. If you want to save some money on that ticket, if you're going, use the code "changelog20" to save 20% off your registration to OSCON 2017 in Austin, Texas.

For more episodes like this head to changelog.com/spotlight, click Subscribe, don't miss a show, and thanks for listening!
