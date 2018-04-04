**Brian Ketelsen:** And we're back for episode number 74 of GoTime. I'm Brian Ketelsen, and with me today is Carlisia...

**Carlisia Pinto:** Hi, everybody.

**Brian Ketelsen:** And we've got a guest today, Jon Calhoun. Jon, do you wanna say hi?

**Jon Calhoun:** Hey, everybody.

**Brian Ketelsen:** And this is GoTime.fm, where we talk about all things Go, and sometimes things barbecue and other stuff that we like to talk about. So Jon, why don't you get us kicked off by introducing yourself, telling us a little bit about who you are, what you do... Let's get rolling there.

**Jon Calhoun:** Sure. I guess historically I've been a web developer, mostly doing back-end stuff. I've been doing that for quite a while; I started learning to code relatively young, and I've always sort of been interested in web development. But more recently, I've gotten into doing a lot more educational stuff, so recording videos and trying to release stuff that helps other people learn how to program, specifically in Go.

**Brian Ketelsen:** Nice. How did you get into Go?

**Jon Calhoun:** One of the startups I was working at a while back, basically every time an API -- or, sorry, there was an API; I should start there. Every time an API request came in, we had to go talk with external API's, and this was really painful in Ruby, which is what the server was written in at the time, because in Ruby there's not really this concurrent model, it's a single server handles a single request at a single time. The way people generally handled it was to spin up multiple instances of your server, so you'd use tools like Unicorn or Puma and do that... The problem was that was like crazy memory-heavy, so you'd be using like hundreds of megs of memory per single web request, which was just not a good idea. That got me looking into other languages, specifically Go and Javascript, so Node on the server.

**Brian Ketelsen:** Nice. It's almost exactly my origin story for Go, which I've told here many times, so I won't repeat, because it's pretty much the same thing.

**Jon Calhoun:** Yeah, it's crazy how Ruby and that sort of stuff is great up until you have a model like that, and then it's just like "This does not work", especially API's I found people hit in very spike-heavy traffic. So when you go from zero requests to a thousand requests a second, it's like "Alright, this really sucks that we have to try to spin up all these servers real quickly and try to make it work."

**Brian Ketelsen:** Yeah, it's not an easy scaling model, I agree.

**Carlisia Pinto:** And how did you get into teaching Go? Sorry, another question - did you start out teaching Go, or were you already teaching about tech before that?

**Jon Calhoun:** I wasn't really teaching too much before that. Before I got into Go, I released an open source project on Rails, and I released some videos along with it to try to make it easier for people to pick it up, to learn how to use it... So that was like my first taste for teaching, through Screencast and that sort of thing. I really enjoyed doing it, I thought it was really helpful, especially where you usually jump in and just see a relatively bland readme, having some videos that really showed people why they cared about something; it was very impactful.

\[00:04:05.25\] That was where I first got my taste for it, but it wasn't really until I learned Go and I'd been using Go for maybe a year or two, and I guess what really motivated me to do it was that I had seen in the Rails community how many great resources there were... And it's not that there aren't people making good stuff in the Go community, but it just wasn't anywhere near the same level.

To give you some examples, RailsCasts was like a weekly series where every week they'd release a new video that taught you how to do something in Rails. Michael Hartl had this book - and he also has videos for it - called Michael Hartl's Rails tutorial. It would basically teach people how to go from like zero to deploying a Twitter clone in this relatively long book, but it taught you everything you needed to know. I felt like when I was learning Go, it's not that there weren't resources, but they were all sort of spread out and you had to scour the internet through blogs and different tutorials and all this different stuff, so it wasn't as welcoming to somebody who was more of a beginner or wasn't accustomed to looking through all these different resources and piecing them together.

**Carlisia Pinto:** I agree with you, there really wasn't. Avdi Grimm's RubyTapas was also a very -- I think it's still going... It's a very good resource for Ruby.

**Jon Calhoun:** Yeah.

**Carlisia Pinto:** It's really neat to have videos with bite-sized instructions.

**Jon Calhoun:** Yeah, I like video a lot because -- I guess one of the things I always heard people telling other people was "You need to go code things", obviously, but they tell people to go read other people's code... And I didn't ever like that advice because it felt -- anytime I've jumped in and tried to read somebody's code, I've just felt like there were pieces missing; I just don't understand the context at which the developer actually wrote that code, so I don't know "Were they planning on a new feature, and that's why they wrote things this way? Were they time-constrained, memory-constrained? Maybe they had a really tight deadline, so they had to skip a couple things..."

You just don't know all this information, so I really like the videos as a way of teaching, and especially learning as well myself, because they really give that context and you can hear somebody talk about why they're making the decisions they're making. But when you go read somebody's code, you kind of have to infer "Maybe that's why they did it, but I don't really know."

**Carlisia Pinto:** Exactly.

**Brian Ketelsen:** So it's almost like extending the idea of literate programming to the visual world, where instead of really long documentation in the form of comments, which you've got as a long and potentially rambly documentation in the form of a narration during the code session...

**Jon Calhoun:** Yeah. That's definitely a huge part of it, just making sure people can understand everything. As you said, it's not the documentation, but it's some other form they can consume.

There's other benefits, I think, to video. One of the ones is -- I've actually had a bunch of people recently asking me to do live stuff, and I've typically avoided it because I record in my office with my dog, and if he hears anything outside, he barks randomly or whatever, so... If you hear that today, sorry about that. But yeah, so people would wanna see the live stuff, and the reason I like that is because I think people get this perception that developers code things idiomatic and perfectly the very first time, and the truth is that most of us don't; we write something, we try to get an idea of what we're supposed to be building, and then once we really understand the requirements and really understand the technology that we're using and understand all the pieces, we can come back and refactor our code into something that we would feel proud of submitting as a pull request... But that's rarely the very first thing. At least for me, it's almost never the first thing that I write.

**Brian Ketelsen:** \[00:07:59.24\] Yeah, I've done quite a few live coding sessions, and I think that's one of the things that I enjoy most - the idea that we're not teaching how to get from A to Z in one step, we're talking about how to get from A to B, and B to C, and C to D. I don't ever write awesome code the first time, and usually my code requires Erik to come through and clean it up when I'm done... But that's a separate show.

**Jon Calhoun:** I mean, it definitely makes sense. That's why you have the whole team to review your code and help you refactor things and give you ideas that you weren't thinking of. It's very easy to feel like you need to get this all figured out on your own, but in reality the Go language was developed by a team, almost every big project is developed by a team, because with the team you can get other perspectives and you can learn from each other.

**Brian Ketelsen:** One thing that Erik constantly says, both on the show and in person, is that it's really easy to look at somebody else's code and suggest ways to make it better, but the harder act is the act of creation itself, where you're solving a problem. And even if you don't solve it as cleanly and as perfectly as you would have liked the first time, you did the harder thing by solving the problem; coming back later and cleaning things up a little bit is clean-up, and it's not the hard part, so you shouldn't take code reviews personally. And I enjoy what he says. I think he just does it to make me feel better about my crappy code.

**Jon Calhoun:** I doubt he's saying it just for that reason, but I think anybody who's done a code review knows that when you're looking back at something, it's easy to be critical, it's easy to look at what things weren't perfect... But as you said, creating something from nothing is very hard, and it's also hard to sort of put your code out there when you know you've created from nothing, just to get that feedback from people and worry "Are they gonna think I'm dumb because I didn't do this thing perfectly?'

**Carlisia Pinto:** Yeah, and on that note too, I don't know if everybody is like me... When I started out, I would try to write proper code back-to-back, right? Like, what is the proper way, what is the proper logic, let me figure it out loud... And now that I've been doing it for a while, I think the farther I get programming, the more sloppy I start out. And I see that other developers that are more expert than me, they actually recommend you to do it this way - just hack it... Like, now I fill in stuff that I don't know how to handle yet, I just fill in with fake stuff, and I basically try to get the flow of what I'm doing, because it's sort of useless to get everything right... But if the logic is not correct, then you end up reiterating too much. I don't know if that makes sense...

**Brian Ketelsen:** It does. I like to write a throw-away version before I actually write one. I very frequently will just write a garbage version that solves the problem or comes really close to solving the problem, and then I kind of understand the domain a little better, and then write it in a more formal "I wanna keep this" kind of way.

**Carlisia Pinto:** Yeah, having that understanding of the domain before you actually perfect the code itself I think makes a big difference.

**Jon Calhoun:** This is actually one of the reasons I'm -- it's not that I dislike test-driven development, but I'm not a huge advocate for it, because I feel like a lot of people get this impression that they can't -- I call that phase where you're just sort of getting a feel for the domain, a spike; I'm essentially just writing code that I don't care if I throw it away... I just wanna understand the problem space better.

\[00:11:50.09\] I think a lot of times when people really push for this test-driven development, some people take it the wrong way to mean that they can't even do that... That they have to immediately go write tests, and then know exactly what the final code is gonna look like and what the functions are gonna be. So it's not that test-driven development is necessarily the problem. I guess it's just I don't like teaching it, especially to beginners, because I feel like it gives them this false impression of how they're supposed to be developing software, and it can lead to not doing that experimental stage where they really get to understand the problem they're trying to solve.

**Carlisia Pinto:** Yeah, because when I start writing code, mainly I try to focus on what's coming in and what needs to go out, and what I need to fill in between those two boundaries, those two points. Then if I start out with a test -- I have trouble starting out with a test, frankly... And I love tests, so don't get me wrong; they're essential. But if I start out with a test, then I am constantly modifying the test and the code, which I think is sort of the point... But I didn't learn to program that way, so it still feels awkward to me. With that said, you have a course that teaches how to write tests?

**Jon Calhoun:** It's not done. I created a web development course; I did that before Gophercises. That was just sort of based on my experience learning Go, learning how to build web applications, and sort of just taking all these different things I experimented with, learned through different tutorials and whatnot. Then after that I was like "I wanna do something..." -- because that's a paid course, and I wanted to do something free. I wanted to give back and sort of help people who are learning Go really have a good time with it. So I made [Gophercises](https://gophercises.com/), which is completely free, and it's just a bunch of practice coding exercises.

Now I'm working on another -- which is probably going to be a paid course, but basically it's supposed to teach testing through practical applications. It's heavily inspired by Adam Wathan's course -- if you do PHP, you've probably heard of him... It's called Test-Driven Laravel. Basically, he builds a real application and shows you how to test it as you build it. I think that's important, because basically you'll see people that give you "This is how you test a unit test", and you'll be like "Oh great, I really understand testing." And then the minute they go out to test something real, in the real applications, they'll be like "Oh man, there's like six issues that they didn't cover in that real simple two-page tutorial."

So I wanna do it as a -- we're gonna build a real web application and we're gonna test all the pieces as we build them, and you're gonna get to see the issues we run into, how we test them, how I think about what should and shouldn't be tested, and sort of leverage that. So I'm hoping to get that -- honestly, I don't expect that to be done until like late this summer, at best, because creating a course takes a lot of time and effort. Then I like to get other people to review it and make sure I'm not teaching things that are just wrong in some way, or I just did misunderstand something or misconvey something.

**Brian Ketelsen:** Yeah, it's very hard word creating content... I know that well. I couldn't agree more.

**Jon Calhoun:** Yeah. Gophercises was actually terrifying to me, because I've been doing that without the review session as much. Everything else I've done, I got other people to look it over, tried to get some feedback and sort of iterate on that, and it's -- you know, I'll record something and it might be weeks until people actually really see it. But Gophercises - I've been trying to do like an exercise and release it within a couple days.

I think part of the reason I wanted to do that was just because I wanted people to see, like I said before, this "not perfect" solution to problems... That's kind of the intended audience - I wanted people who were picking up Go, just giving it a go. I wanted them to be able to see some practice exercises and sort of build for them. So I figured that it wouldn't make as much sense if I made videos that were picture perfect every single time, because that's not where they're going to be, they're not gonna relate to that at all.

**Carlisia Pinto:** Yeah, wow... That's fantastic.

**Brian Ketelsen:** I'm curious what your most popular episode is. I see you've got about 13 up now... Which one of them gets the most views?

**Jon Calhoun:** \[00:16:05.26\] I don't actually know which one gets the most views; I can go look, but I haven't looked recently. I know that the one that gets the most pull requests for like student solutions is the very first one, and I think that's just kind of because it's the first one.

**Brian Ketelsen:** That would make sense, yeah.

**Jon Calhoun:** If you don't mind me plugging this, if anybody knows Go and is willing to give code reviews - there are a lot of people who are just learning Go and they'll submit solutions on the GitHub page... This is all open source (their solutions), and I try to give code reviews as much as I can, but sometimes I'll get really busy, overwhelmed, or sometimes is just nice to get another perspective in there. So if you ever do want to go give a code review to somebody who's new to the language, I'm more than happy to have other people help, and I'll gladly send you some stickers or do whatever else to sort of say thank you for that.

**Brian Ketelsen:** Nice. Very cool. Who did your Gopher art? We need to know. Did you do that yourself?

**Jon Calhoun:** Gophercises is [Marcus Olsson](https://twitter.com/marcusolsson). Originally, I was gonna work with Ashley McNamara, but she was like two months backed up, and this was right around the time that she was moving to Microsoft... So I'm assuming that just made her super busy anyway.

So Marcus Olsson did this. She recommended him to me. He created the gophers, and after he created the gophers, I really wanted something animated. If you go check out the site and see the animated gophers - I took what he had and sort of modified them a bit to make like a three or four frame animation for each one, and did those...

Then I think I e-mailed you guys -- I haven't actually released them, so maybe I'll post them on Twitter after this, or something... [Egon Elbre](https://twitter.com/egonelbre) I don't know how to pronounce his name, sadly. But he's the one who does the Gotham Go art and some other art... He actually did the artwork for the test course I'm working on, and it's a really cool crash test dummy mixed with a gopher that I really like.

So I've been trying to work with different artists, and every time I work with one -- this is something that I think is really cool about all the developers in the Go community... I offer to pay every single one of them, and every single time they tell me "No, just go donate it to a charity", or something like that.
I've been trying to donate to charities every time I worked with them, based on how much time it takes them and everything like that, but... It's just been crazy that none of them will take payment for the work they're doing.

**Brian Ketelsen:** We have an awesome community, a very giving community. I couldn't agree more.

**Carlisia Pinto:** How do you decide on the content? Do you have a source of inspiration, or is this just stuff you wish you had guidance to practice with when you were learning Go? Where does the inspiration come from? Your rule of thumb for deciding what to include in your courses...

**Jon Calhoun:** If it's like a larger course, like a web development or a testing one, I'll pick a big project that I wanna build, and everything will sort of come from that. If I'm building a photo sharing application and that's what the course teaches, everything sort of just stems from that. But for Gophercises, it's a bunch of small exercises, so obviously that's not the case... And that was a good mixture of just things I had built in the past, things I just thought would be fun to do, for one reason or another... Some of them were recommendations from people I've been interacting with and helping out with learning Go, and they would say "I'd really love to see you build this, or something like that." So it really stemmed from a lot of those...

I could give you some examples... The "Choose your own adventure" -- one of the exercises is you build a "Choose your own adventure" book... It's really just a web server with a JSON file that describes this story, and at every different spot in the story you can click a link to decide what you wanna do. Maybe you wanted to go to Gotham Go, or you wanna go to GopherCon in Denver... I think that's the way the story goes; it's been a while.

\[00:20:12.04\] So you click on the link and the story progresses, and I don't know if you guys have read those "Choose your own adventure" books when you were young, but it's based off of that.

And the exercise was actually based off of -- one year for Christmas I made my wife "Choose your own adventure book" that was... It was online, but it was a book that I took construction paper and crayons and I colored different artwork on them.

It basically told the story of our relationship, how we met and things like that; when we got engaged... And I had some variations, because it was a choose your own adventure story, but I played the obvious trick of no matter what route she took, she ended up married to me... That's how that one went, and she really liked it, so I thought that'd be a cool, relatively simple exercise to introduce people to JSON and some of that stuff... So it worked out.

Another one of the exercises - you create a URL forwarder. This is something that almost any project can make use of. I used it in my book - or one of the books I wrote; it was a book that went along with the web development course - because I'd wanna link to like source code, or code differences, or I'd wanna link to an article that I thought might be useful... But when you write in a book, you're worried that the link's gonna break, or something, so I made a URL forwarder so I could control the server, and then if the URL ever does break, I can find something comparable, or a cached version and update the URL forwarder. Again, it was just sort of based off of what I thought might be useful and what would be fun to build and teach something new.

**Brian Ketelsen:** One of the things that I've been doing recently is the new [GopherSnacks](https://www.gophersnacks.com/) website. It's probably very similar to Gophercises, except these are just videos of me talking and demonstrating, there's no exercise at the end of it. It's been interesting moving from speaking in front of lots of people, teaching, to recording myself with no audience. I find that I like the teaching better, the interactive working on front of people. It's more stimulating, and it's much harder for me to convey that message in front of a camera. I don't know whether that's because I expect more perfection out of the camera... I don't know, but it's very interesting. I'm finding it more difficult to do the recorded bits.

**Jon Calhoun:** It's funny, because I think I'm the exact opposite. I'm giving my first talk at Gotham Go this year, and I've never even been to a conference, let alone spoken at one, so saying I'm nervous is like the biggest understatement of the year for that. And even doing this - I was a little bit nervous going into it, I'm still a little bit nervous, but I'm trying to think of it as more like just recording myself, because for whatever reason, I've just gotten used to that, and it just feels like I'm, I guess, on a video call with people, even though they're not there and I can't see them.

**Brian Ketelsen:** That makes sense.

**Carlisia Pinto:** What is your topic at Gotham Go?

**Jon Calhoun:** I'm using Gophercises as an example, but the core of the talk is going to be -- I wanna talk about how people get this perception that they have to use all these technologies that they keep reading about, they keep hearing on the internet...

To give you examples, you'll hear about Docker and deploying with Docker and continuous integration, and using React on your front-end, and using all these different things... GraphQL is another one that comes up a lot. And I interact with a lot of people who are just learning to program, or who are transitioning from front-end to back-end work, or in some way are learning new things... And a lot of them get really caught up on this feeling that they have to use all these different pieces of technology that are -- you know, Facebook introduced GraphQL to solve a very specific problem that they had... And it's not that it isn't really cool technology, but if you're building your very first API, GraphQL might not be the way to go.

\[00:24:15.14\] I guess to get back to that, I'm trying to give the talk sort of explaining that you can build things that are useful, that are still cool projects, that aren't bad in any single way, that don't use all these pieces of technology that you read about on the internet all the time and think that "I have to be using these things."

**Carlisia Pinto:** I couldn't agree more, yeah.

**Brian Ketelsen:** But what if I do have to be using them? What if I like shiny things and blinking lights?

**Carlisia Pinto:** How do you even know before using it?

**Brian Ketelsen:** Well, it says right on the homepage that you can't live without it...

**Jon Calhoun:** I think that the shiny new things are really cool if you're using them to learn them or to get more experience with them. Take you, Brian, for example - if you want to use GraphQL and experiment with it, you're experienced enough that that's okay; you can jump into it and figure it out and go from there. Where it really frustrates me is somebody who literally has never built an API in their life, barely knows anything about back-end development, and for some reason they're convinced that they have to use GraphQL, React and six other different things to build their application, otherwise it's not worth building. I see so many people just get frustrated and quit, and don't really get to experience that joy in building cool things and showing them off to their friends.

It frustrates me, because I think back to when I learned to code, and I used free LAMP servers, learning PHP, and I was like 13 at the time, so I had no idea what I was doing... But it was still just fun to build those things, and I think a lot of people just miss out on that, just hacking away and having no real idea what you're doing, and just learning because it's fun.

**Brian Ketelsen:** Boy, that just sent me back into a wave of nostalgia... Without going into the "Oh my god, I'm so much older than you" game, I remember typing in things from magazines, like BYTE Magazine, and then getting really, really upset with my parents because they turned off the computer and we didn't have the cassette deck or the disk player to save the things that I was typing in, so... Yeah. Those were good days. That was fun.

**Jon Calhoun:** It's weird, because I think about future generations, and some of the things I learned when I learned to program I know they won't have, but I also think -- like, they'll have way more resources, which is awesome. Because you know, back when both of us learned, there weren't really people creating online courses or anything, so you had limited options... And nothing was more frustrating than like you said, getting a magazine or a book or something and reading it, and it was outdated and you're like "Well, what do I do now?" But I think they will miss out on some of the things, like you said, like using the old technologies or using things that are just simpler systems.

The first thing I learned to program on was an Apple basic computer, and we actually had floppy disks that were actually floppy. And the one thing I remember out of all the stuff I did with that was that we learned how -- at one point we learned how to take our disks and make them run a program when you stuck them into the computer. Once we learned that, we all thought "Okay, we can add security to our disks." It wasn't that long after that until somebody realized "Oh, you Ctrl+C while a program is running and it terminates the program", so we were effectively breaking each other's security.

A little while later we're all just trying to find ways to beef up our security on our disks, and it didn't make any sense -- like, we had nothing important on these disks at all; we all wrote the same programs. But we were all so worried about having the best security system...

I read books like Ender's Game, or different Sci-Fi books like that and I see things like that, and... It's obviously not on the same level as those books, but it sort of like brings back that nostalgia of, you know, I had some experience that was sort of like that, and it's always gonna stick with me.

**Brian Ketelsen:** \[00:28:07.03\] It sounds like an arms race, of the best fun kind. So when you do web development, Jon, what's your favorite way to build apps in Go? Are you a standard library guy? Do you like using Javascript and a Go API? What do you find is best for you for web development? Because it sounds like you've done quite a bit.

**Jon Calhoun:** I try different things, depending on what I'm building, but more often than not, if I can get away with not using a Javascript front-end, I won't. Not that I dislike them, it's just in my experience they always feel like they're changing and I don't wanna have to spend time learning something new. So a lot of the times I can just get something up quicker without it, and then I can go back and add it in if I want to... So a lot of the times it's just HTML rendered from Go.

I mostly use the standard library. I say that in the sense that I use a lot of third-party packages, but I don't really use a framework of any sort. I've messed around with [Buffalo](https://gobuffalo.io/en) and I really liked it a lot, but I don't like every single piece of it. I think it's the context they pass in a web request is kind of like a megacontext type thing and I'm just not a huge fan of that, personally. So there's some things like that, but I'll try different stuff...

Even when I make Gophercises, I try to couple different things that were a little bit different from what I'd done in the past... And I was just kind of curious how it would work and what it would end up looking like.

One example of that I can give is -- you've used Ruby before, so you've probably seen the decorator pattern...

**Brian Ketelsen:** Mm-hm.

**Jon Calhoun:** Okay, so for those of you who don't know what it is - essentially in Ruby, because you can metaprogram like nothing, or you're like just that crazy, you essentially take a class and you overload the methods on it so that you can change what the output of them is. Let's say you had a "created at" date; you would change it so that when they called "created at" in the view, instead of just printing out a timestamp, it might say something like "One day ago." So you could really just take your models that you have that represent back-end data, and you could sort of set them up to give you the strings that you want on the front-end. In Go you can't just do that with your types; you can't just make that work with a statically-typed language like that... At least not that I'm aware of.

But one of the things you can do is you can take all these fields that are on a type and you can take the methods that are on the type, and you can wrap that entire type in another type, and then when you get to the front-end... Where this would usually become an issue is a field if you wrap a method around it -- in Go there's a difference between calling a field and calling a method. But when you get to the HTML template package, it actually doesn't care which of those two you're calling. So you can actually start to do something very similar to that decorator pattern and go with the HTML template package.

I was just sort of experimenting with it, seeing what it was like, seeing if it led to issues or confusion or anything like that... When I built Gophercises I actually used a decent bit, just sort of getting a feel for how it worked and whether it made sense long-term.

**Brian Ketelsen:** Do you find yourself in smaller projects, experimenting more with the technologies that you use?

**Jon Calhoun:** Yeah, that would mostly -- especially now, because... So historically I was working with startups, so it was almost always -- like, I worked at Google before then, but for the most part it was companies that were less than ten people, and they were really trying to get product/market fit, so the application isn't massive, and you can sort of iterate over what you have, you're building something relatively small, and you can experiment with some stuff without too much worry.

More recently it's gotten even smaller, because I have sort of transitioned away from doing consulting and that sort of stuff to just doing educational stuff. So this is like the first year that I haven't done any consulting work so far, and I'm trying to get through the whole year without doing it; I guess we'll see how that goes, but...

\[00:32:09.18\] I want to do that because that means that long-term I can create more content to help people learn Go better, but it also means that the people who do buy courses I have, I can provide more support for them, I can be around to really help them with stuff, because that's something I really value about what I'm doing - I don't sell this course and then just disappear, or I don't just not update it or anything; I like to really help people.

Even on my blog, I write articles there that discuss different topics, and almost all of those stem from questions that I get asked in the Slack that I have. So I don't even have to think about what I wanna write about, it's usually just somebody will ask a question and it'll turn into a blog post. But yeah, getting back to your question, since I don't know if I answered it properly - most of the things I'm working on are relatively small these days.

I'm planning on building something a little bit bigger. Specifically, I want to build something to sort of house all the video courses I have, so that will end up being a little bit larger. Then the other thing that I -- I want to build something and actually release it... I have it in my mind for what it is, I just don't wanna talk about it just yet, for what I want to do with the testing course... I want to build that out, and it'll probably be bigger than what will actually be covered in the testing course, but it'll be the same type of idea.

**Brian Ketelsen:** Nice. One of the things that is always a big trap for me - or has been a big trap for me in the last two or three years - is my propensity to build tools to enable the thing that I'm trying to teach, rather than actually just teaching the darn thing. It's been a real stumbling block for me. "Oh, I should just build a much better website, and integrate Docker, and have runnable tutorials. I probably could have gotten twice as much teaching done if I had just put up a link that said Download This Here."

**Jon Calhoun:** I can relate to that, but at one point I just forced myself to start producing videos. To give you an example, one of the things I've wanted to do for the last year - and it's not hard to do, I just haven't done it - is when you're watching a video, you can't copy-paste code. One of the big downsides to a video is that you pause the video and anybody who's watched a teaching video has had this point where they pause it, they try to code all the code that's on the screen, they have some random typo and they just don't know what it is, and they're like "What is going wrong? Why is my code not working and his was working?"

So with editors like Atom and VS Code, you can actually write a plugin relatively simply that will keep track of all the changes you're making in your files, and then can sync them in either a JSON file, or something that will just have timestamps, or whatever. Then you can sync that up with the video, so that on the website you can just actually give them a copy/pastable version of all the code on your editor at any given time in the video, and just sync the two.

Building that is really -- especially in Atom, I built the plugin for it in like (I think it was) a half hour, and I've never built an Atom plugin before... So I know building the plugin is easy; it's just getting all that data, syncing it up with all my videos, recoding the videos, going through all the videos and actually live-coding them so I can keep the two synced is just a lot... And as much as I'd really think that'd be a cool toy to have to add to everything, it's... It's always that constant struggle, like you said, of "Do I build the toy, or do I release another video?"

**Brian Ketelsen:** Yeah, it's difficult, and I always get caught by the shiny "Oh, I should just go build this tool!"

**Carlisia Pinto:** Question for you, Jon - once you have these new videos, these new courses that you have on your current pipeline, what will you conceive on working on next? Let's say two, three years down the road you have plenty of materials for this level of expertise that you're trying to reach... What is next for you?

**Jon Calhoun:** \[00:36:03.12\] I know that after I'm done with the testing course what I want to do beyond that is something very similar to -- have you ever seen Laracasts, or RailsCasts was another example of this... But basically, there's a bunch of sites out there that have sort of continued education. I think Laracasts calls themself "the Netflix for your development career."

The idea is that basically you're releasing new stuff to teach new design patterns... As a new thing comes out in Go, say they release a new -- let's say they somehow add generics at some point, you could teach in a video, sort of showing how to use them effectively, how to get yourself in trouble with them... Different things beyond that.
With those models, they're kind of a continued education thing. So it's like you release an hour of video or maybe half hour of video in bite-sized chunks every week... And I could see myself doing that, specifically just because I don't think there's ever going to be a time where you wanna stop learning as a developer.

Beyond that, I think that there's still always going to be new technologies... Like, Docker came out, and people all wanted to go learn that. But beyond that, there's always going to be things, like a new API comes out, a new technology comes out, or a new Google app engine, some new version of that or something comes out... So I think there's always space for people to be learning, and I'd sort of like to continue down that route, just always helping people get better with their career.

But I will say that one of the things that worries me is I don't wanna get to the point where I'm doing that 24/7. I think I need to make sure I'm actually building things at least three or four days a week, because -- I think RailsCasts, the guy who did those videos is the one who ran into this issue where he did those videos for like three years, and after the third year he kind of fell out of touch with building real Rails applications. So as a result, he's like "I don't really know how to make videos that help people when I'm not really in touch with building real applications these days. All I do is work on this toy application that I've had for too long."

**Brian Ketelsen:** Yeah, that's a real danger, especially when you've isolated yourself so much. By doing all of that smaller work, you're not building real-world apps (say that one fast a couple times; that's tough for me).

**Jon Calhoun:** Yeah, I don't know exactly how to solve that problem. I think it takes at least a year or two to get to that point, and I think one of the things that'll help me is if I'm continually building things that I care about sort of in the background. Maybe that means you take six months off and build a bigger project or go work somewhere.

That could even mean maybe I get to go -- you know, if I get myself to the point where I'm completely fine financially, maybe that means I can donate six months of my time to go help some organizations or non-profits or something like that either build something that's gonna really help them in some way, or... There's even like -- Y Combinator is a startup incubator; they have non-profits coming through there, and maybe I could spend six months going and sort of doing a pseudo-internship type thing where I help them build out some stuff.

So I think there's options to sort of avoid that, but I definitely have that on the top of my mind as something that I don't want to be an issue; I don't want it to be something where I'm just not teaching relevant information.

**Brian Ketelsen:** Well, you've already thought about it, so you're a step ahead of me. \[laughs\] Alright, we've got some good Go projects and news to discuss this week... Just moments ago, hot off the press, Go 1.10.1, a minor release came out. Looking at the [release history](https://golang.org/doc/devel/release.html#go1.10.minor), it really doesn't look like there's that much exciting to it. Some fixes for the compiler and the runtime, archive/zip, crypto/tls, some JSON and HTTP and profiling updates, but nothing big or exciting, nothing that said "Oh my god, upgrade now!" That was a big piece of news that just came out.

**Jon Calhoun:** \[00:40:01.12\] You know how to sell it.

**Brian Ketelsen:** \[laughs\] Quick, fire up your update engines! This is critical! How's that?

**Jon Calhoun:** Much, much better.

**Brian Ketelsen:** Good. And then something that is near and dear to my heart - [Vim Go](https://github.com/fatih/vim-go) 1.17 was released. This one has [Delve](https://github.com/derekparker/delve) debugging support, which I've not yet tested, but it's way, way up at the top of my list of things that sound like fun. Vim Go is one of those game-changing pieces of software for me. It's made my life so much easier.

**Jon Calhoun:** This is one of those times where I kind of wish I had learned Vim a long time ago.

**Brian Ketelsen:** I have to blame Erik for it. I kept watching him be so fast and productive in Vim... I was like, "Damn, I always wanted to do that!", but I actually had to have Erik sitting nearish to me, where I could turn around and say "How do I do X?" and that really helped me. And I still don't know what I'm doing in Vim - I wonder if anybody actually does know what they're doing in Vim - but I'm fast enough to get where I want, and I have nice muscle memory built, so I enjoy it quite a bit.

**Jon Calhoun:** I got like that with Sublime Text. I was super efficient with it, and then their Go support was just terrible... I don't wanna say "terrible." I don't mean to say anything negative about the guy who builds the Go plugin, but at one point the guy who was doing it I think moved over to Atom, so as a result he just didn't care about the plugin that much at the time. It's completely relatable - if you're not using it, you don't wanna develop it... But it kind of left it a little bit behind where Atom and VS Code and some other tools were, so I had to sort of go learn another tool. Right now I'm using VS Code; it's similar, but there's still a couple differences that'll mess me up every once in a while.

**Brian Ketelsen:** [VS Code](https://code.visualstudio.com/) is pretty awesome. Those are the only two that I use - Vim and VS Code - these days, because VS Code is so light and fast. If I ever feel like I need a GUI - and I do, because I'm not really good at the global Search and Replace stuff, even though Erik tells me to use AG, and whatever... I still don't know how to do it all, so I just open up VS Code and do a global Search and Replace and I'm much happier.

Another bit of news that crossed my desk - [Zerolog](https://github.com/rs/zerolog), an allocation-free JSON logging package. Allocation-free logging is always exciting, because you don't want your logs to slow down your program more than the programming is slowing down your program. At this point, we're really close to the concept of having mux wars in the logging world.

This one has some nice benchmarks and shows no allocations for almost every operation that it does, and it looks really fast and really lightweight, so I'm looking forward to testing that one out. It looks interesting. Do you guys have any news or anything interesting stumble across this week?

**Jon Calhoun:** I'm drawing a blank, and Carlisia doesn't wanna talk to us...

**Carlisia Pinto:** Crickets... \[laughter\]

**Brian Ketelsen:** Alright, then if there's no other new news, let's move on to \#FreeSoftwareFriday. This segment is one of my personal favorites, where we just give a shout-out to a person or a project that's made an impact on you. It doesn't have to be Go-related; it can be a group, a company, a project, anything really... Just a way for us to give some appreciation to people or projects that have an impact on us.

I will kick it off this week with [Luke Smith](https://github.com/LukeSmithxyz). Luke released a package called [mutt-wizard](https://github.com/LukeSmithxyz/mutt-wizard). Mutt-wizard is awesome. I've been trying to go all command line for my e-mail forever, and I tried [JessFraz's Dotfiles](https://github.com/jessfraz/dotfiles) and I couldn't figure them out... But this mutt-wizard is a really nice curses-based wizard that just walks you through the whole thing, gets everything configured.

\[00:44:18.16\] I spent a couple hours - I guess it was Monday or Tuesday morning - and got mutt configured, and I still really don't know what to do with attachments in mutt yet, but give me some time, I'll figure it out. Otherwise I can read my e-mail now, and I'm very grateful for Luke's work putting that together.

**Jon Calhoun:** Do you mind if I ask you what's the benefit of that?

**Brian Ketelsen:** For me personally?

**Jon Calhoun:** Yes.

**Brian Ketelsen:** You're gonna laugh and call me OCD, and it's okay, I accept it... So I use i3 window manager, and the processor usage history - what do you call that? The three slots of processor usage is up in the top of my title bar... And for some reason, it drives me nuts when it gets high. So when I look at a mail app, especially these Electron-based mail apps these days, they're spinning my processor up too much. But mutt - or when I'm using NeoMutt - doesn't really take any processor usage, so I get to keep my processor usage really low. It's kind of OCD. I wish you hadn't asked that. \[laughter\]

**Carlisia Pinto:** I have another solution to that, too. Just don't open your e-mails.

**Brian Ketelsen:** Yeah, there you go.

**Jon Calhoun:** I wish... I wish so much, some days... So is this supposed to be like a new thing, or can I talk about something that's a little bit older?

**Brian Ketelsen:** No, anything. Absolutely anything.

**Jon Calhoun:** Okay, so [Slate](https://github.com/jigish/slate). It's a window manager for Mac. I think the last update was like three or four years ago, maybe even more... But basically, it allows you to sort of set up configurations that you can move windows to on your screen, and it's incredbily helpful when you're using an ultra-wide monitor, or something like that. I've been using it for quite some time now, but it's by far one of my favorite open source projects.

**Brian Ketelsen:** So would that be comparable to like Divvy, or some of the other window managers?

**Jon Calhoun:** Yes.

**Brian Ketelsen:** Okay. Very nice. Carlisia, any open source you wanna shout out this week?

**Carlisia Pinto:** No.

**Brian Ketelsen:** No? Alright. And Erik's not here, so even if he had something to shout out, he doesn't get to vote. Sorry, Erik. Alright, well if we've got no other open source to shout out, then this is the end of our show.

I'd like to congratulate Jon and Carlisia for such a great show, and thanks everybody who is listening live, and thanks to those of you who will listen eventually when we get this released. We'd love it if you would share this show with your fellow Go programmers or people who are looking to become Go programmers. You can point them to GoTime.fm.
You can follow us on Twitter, @GoTimeFM, or if you wanna suggest topics for the show, or perhaps suggest a new guest for us, GitHub.com/gotimefm/ping, just open up an issue.
With that, thank you, Jon. We appreciate you coming on the show.

**Jon Calhoun:** Thanks for having me.

**Carlisia Pinto:** Thank you, Jon, and thanks everybody. Bye!
