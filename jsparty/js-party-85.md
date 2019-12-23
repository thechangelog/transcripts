**Jerod Santo:** Welcome back everybody to JS Party, where we like to throw a party every week about JavaScript and the web. One of the things that we like to do at JS Party is have a lot of variety, just like you have a pizza perhaps with a lot of different toppings. Maybe you listened to last week's episode all about burnout. I was just listening to that this morning, Feross, on my morning walk; a great episode from you, Suz and Emma.

Of course, we have some interesting things in the works. We're talking about doing some debate-style shows, so pay attention for that, and subscribe if you haven't yet.

We also have a little bit something different today - a show about pizza. Well, maybe not exactly about pizza, but somewhat about pizza... We're joined by a special guest, Antoni Kepinski, but first let me introduce my panel... Feross is here. What's up, Feross?

**Feross Aboukhadijeh:** What's up, Jerod?

**Jerod Santo:** Not too much. Just getting you to install Zoom on your machine, just like my plans are...

**Feross Aboukhadijeh:** \[laughs\] I'm so angry about this. Today, of all days...

**Jerod Santo:** I know. I feel like this is a really bad time to announce our cutover to Zoom, but... Well, we've got you here anyways. And Mikeal Rogers. What's up, Mikeal?

**Mikeal Rogers:** Hey! It's a party with JavaScript...

**Jerod Santo:** That's right. You've gotta get that in there. So as I've mentioned, we have Antoni Kepinski joining us; a 16-year-old, notably, from Poland. Antoni, introduce yourself and say hi to everybody.

**Antoni Kepinski:** Hi, everyone. My name is Antoni, I'm 16 years old, as Jerod said, a developer from Poland. In my free time I like creating open source stuff... Mainly in JavaScript, but I'm also learning Rust in my free time, so that I can use WebAssembly in the future.

**Jerod Santo:** That is awesome. Let's play a quick game called "How young did you start programming?" Mikeal, I'll pitch it to you, because I think 16 is young; y'all might have me beat... How did everybody get into it? At what age?

**Mikeal Rogers:** I was like 12 or 13.

**Jerod Santo:** Okay...

**Feross Aboukhadijeh:** Well, I have a question... Does HTML count as programming?

**Jerod Santo:** Uuuh... Yes.

**Feross Aboukhadijeh:** Because I learned HTML first, and did that for several years, and I did Dreamweaver... So I don't know if that counts, but if it does, then...

**Jerod Santo:** Yeah, let's count it.

**Mikeal Rogers:** I count the time that I used Dreamweaver in the whole arch of my programming, so yes... \[laughs\] We'll count that time as well.

**Jerod Santo:** Yes, Dreamweaver counts.

**Feross Aboukhadijeh:** Okay, then it was probably like 12 or 13 as well.

**Antoni Kepinski:** Me too.

**Jerod Santo:** What introduced you to programming, Antoni? Was it the internet, was it a parent, school...? Where did you learn about it?

**Antoni Kepinski:** \[00:04:02.09\] Actually, I started programming in C\#, but this wasn't really my thing, and I stumbled upon a GitHub profile from a user called Sindre Sorhus. When I first saw JavaScript code, I knew it was something I want to learn in the future. That's how it started.

**Jerod Santo:** So I guess I skipped myself... But I'm gonna lose -- or win, depending on which way you're looking at it... Because I didn't own a computer until I was 18, and I didn't start to program said computer - unless you count downloading stuff off of Napster, which I don't think counts - until probably like 20, 21 age range. College. So y'all are killing me.

**Mikeal Rogers:** We had a computer around pretty early. Not because we had money, but because my dad was a \[unintelligible 00:04:49.03\] and when computers would get old, they would make their way into \[unintelligible 00:04:52.23\] houses, so... \[laughs\]

**Jerod Santo:** Hm! That works...

**Mikeal Rogers:** That's just how the docs work...

**Jerod Santo:** I did have a pre-programming moment in high school, where one of my friends was taking web programming, something like elective in high school... And I don't know if you guys remember the video game Secret of Mana, but I was quite into Secret of Mana... And so was he. And he had a Geocities page that he made during that class, and I remember the moment where he showed me -- the avatar or the sprite of the main character from Secret of Mana was all that was on the page. He managed to basically add an image tag, or however he was doing it back then... And then he showed me when you roll over it, it changed from -- he turned into stone, or something like that. And he just showed me that little -- like, put the mouse on it, and I was like "Whoa...!" I thought that was pretty cool. But it didn't actually get me to go try it myself; I just kind of moved on until later on, but I remember that pretty distinctly as being impressive that you could do that.

**Mikeal Rogers:** I remember when I was 17 I worked for this awful local web consultancy, and one of my co-workers wired up this thing where -- in JavaScript you can sort of make the mouse look like it was sort of like... Basically, it looked almost like it was slow, kind of going across the thing. It'd leave like an impression of itself that would slowly fade away... And I was like "Oh my god, this is the craziest thing I've ever seen. That's AMAZING!" And yeah, they thought it was so cool that they put it on their main website for this web consultancy. It's a completely useless feature. You would never wanna put it in the application. It was like front and center.

**Jerod Santo:** That was probably back in the day when everybody was doing the Flash intros on their web pages. A website's point was to be a useless feature; it was like "Watch this thing that I made in Flash!" Or maybe that was even before you. Go ahead, Feross.

**Feross Aboukhadijeh:** Oh, I'm just curious how Antoni got into programming when he was 12-13, and eventually how he found Sindre Sorhus' page, and what he liked about Sindre.

**Antoni Kepinski:** Let's start with that... My first days of programming were more experimenting than learning, but I don't really remember how I found the Sindre profile... But I know that one of his CLI apps - I don't know which one - looked really cool. That's how I first wanted to see how the code looks like.

**Feross Aboukhadijeh:** Was that when you were 16, or when you were younger than that?

**Antoni Kepinski:** I was 14, I guess. Or 13.

**Jerod Santo:** So the big difference between you and us is that we're looking way back at that time that we began, and you're looking back just a couple of years... And one of the things that's amazing and really caught my eye - the reason why I came across Antoni - is because you submitted PizzaQL to Changelog News as something that might be interesting. And I was looking at it and I thought "Wow, this is a pretty impressive thing to be put together at such a young age...", and really it was just the list of technologies at play, going from a few years back, finding a GitHub page to building a web application with React, and GraphQL, and MongoDB, and all these things... There's just a lot of moving parts that you're pulling together, and it was quite impressive.

Have you been for the last couple of years just all-in on learning this stuff, or is it coming naturally to you?

**Antoni Kepinski:** \[00:08:25.28\] Actually, PizzaQL started as a React learning project, to be honest with you... And from my point it was the best learning experience I've ever had. At first it was experimenting, then optimizing, and all of that made me want to learn React.

**Jerod Santo:** What was your process like, from the point that you found open source and GitHub, and you were doing some C\#, to the point that you have PizzaQL, which was your learning (experimental) project, and an impressive one at that? Did you look for tutorials? Did you take classes? What were some things that you did just getting started, and how did you know where to look?

**Antoni Kepinski:** I started learning the basics of JavaScript \[unintelligible 00:09:14.00\] and after I started creating some small websites in vanilla JavaScript, I created some CLI apps like CacheCLI, which has over 100 stars on GitHub... And after this time, I really wanted to learn React, as it was getting popular. Some of my friends who are also programming were talking about it.

I tried making something using the default Create React App, boilerplate. When I didn't understand something, I just looked in the React documentation, and if I haven't found anything, then I moved to Google and Stack Overflow.

I also attended some talks, for example in the Allegro - this is a big Polish company, making something like eBay or Amazon, but in Poland. They have monthly talks about React, front-end technologies, and stuff like that. Also, listening to JS Conf talks from Dan Abramov. It was really nice and helpful.

**Feross Aboukhadijeh:** So you said that you have friends who program, too. Are those friends who were in high school with you? Or I assume you're in high school still... Are those friends your age, and you're all learning to program together and you're sharing things with each other? How are you interacting with your friends and what do they think about programming?

**Antoni Kepinski:** Actually, in my class no one except from me learns programming, which is pretty sad. These friends are from different schools. Some of them I know in real life. They are a bit older than me, one or two years older. But as you said, we are learning together, sharing projects with each other, and giving suggestions.

**Feross Aboukhadijeh:** What do your parents things of the stuff you're building?

**Antoni Kepinski:** I don't know really. They say they are pretty impressed, but that's just parents. Actually, none of my parents program, so... Yeah.

**Jerod Santo:** Well, it's pretty cool that you can reach out ot a larger world, a community of people around the world like ourselves, who are interested in such things, and even if there arent' too many there with you that are into software and the web like you are, that you can have conversations with people around the world.

I'm curious - Mikeal and Feross - we're here talking to somebody who basically has been self-taught; he's learning on the Go, he's still learning, obviously, we're all still learning, but Antoni had a lot of success kind of just going to the React docs; I'm kind of impressed that he can just read React docs and go from there. Of course, you end up googling around as you get stuck, but... If you guys had to give advice on getting started today - Feross, you're very education-oriented - what resources of processes or tools would you say "Here's a good place to start for young people"? Maybe Antoni's age, or even a little bit younger.

**Mikeal Rogers:** \[00:12:25.09\] Sure. I don't have a strong opinion about the first docs that you land on. I mean, it really depends on which projects you're interested in, and which languages you're interested in, and all of them have varying degrees of good or bad talks, or books, or whatever it may be. I'm very impressed with Rust on this, actually. They've done a pretty good job. They have a lot of \[unintelligible 00:12:44.17\] docs, including a great book.

Once you're programming and you're trying to get better, I'd recommend as early as possible doing open source stuff. Even if you're not publishing your own work, just trying to contribute to other things, whether it's just doc fixes, or tests, or whatever... Because that code review process gives you an opportunity to interact with developers, and them to kind of level you up.

If you think about it, the open source ecosystem is just a giant educational ecosystem, where everybody is sort of leveling up all of the time and learning from each other. So the sooner that you can get involved in that...

That wasn't really accessible to me when I started programming, so I gravitated towards the hacking community actually, because there was a community that was much more accessible there.

**Feross Aboukhadijeh:** I think there's two ways I could interpret the question. When you're learning something, I think one of the biggest challenges is to stay motivated through the process of learning. So one way to interpret this question is like "What's the best way to keep yourself motivated and keep things fun, so that you continue to want to keep learning more and more about programming?" And then I guess the second way to interpret it would be like "Given that you wanna learn programming, what are the best resources to use, and what are the best techniques to use?"

I think the first part is probably more interesting to me. The reason why is I think that if you have the motivation, then you will do whatever it takes and you'll put up with whatever you have to put up with. You'll read terrible docs, you'll just keep trying something until you figure it out... So the motivation is really interesting. At least for me, the way that I got into programming was I wanted to build a specific thing. I had a down period in high school where basically we didn't really do much. We were supposed to go around fixing teacher's computers. It was called the Tech Team. But occasionally, we just had nothing to do, so we'd sit around watching Flash animations and playing Flash games, on those sort of -- I don't know if you remember eBaum's World, and Newgrounds... There were all these old Flash game websites.

We were obsessed with these Flash games, so I had this natural desire -- I was like "I wanna collect my favorite Flash games and animations and put them onto a website", and for whatever reason that was really motivating to me. I was a 13 or 14-year-old. It just seemed like the coolest thing, to have your own website where you could put your favorite games and your favorite animations. I was literally just taking them from other websites, downloading the Flash files and putting them onto my own site... Which is not very legal/legit thing to do, but that was how I learned. That kept me motivated, and I learned whatever I had to learn in order to make that work.

So yeah, I don't know... I think that was what worked for me. I'm actually curious if that has any connection to what Antoni did. What was attractive about programming to you? Did you have a specific project you wanted to build, or did you just think "Programming is this skill that I wanna have"? I'm just curious, what was the reason you got into it?

**Antoni Kepinski:** If we talk about programming in general, for me it was just a skill I wanted to have. But if we talk about PizzaQL, I saw a pizza ordering system written in PHP... It's from a Polish company. They sell it for a pretty huge amount of money, and I would like to build something like this, but in React, and make it open source, so that others can see it, and maybe in the future use it.

**Jerod Santo:** \[00:16:17.24\] Yeah. I think that's really neat. I wanna piggyback on what Feross was saying about motivation. I do believe that that is probably the more important part. Of course, we can talk tactically how you get started with these things. I think one place to point young people to - maybe not even young, but new people - is Free Code Camp, if they just wanna actually dive head-deep into things. It's a great source for learning.

The thing about motivation though is that it's perishable. In fact, it's one of the most perishable goods there are. I'm motivated today, but maybe not tomorrow. Maybe not even this afternoon. Heck, I might be losing my motivation right here as we talk...

**Feross Aboukhadijeh:** \[laughs\]

**Jerod Santo:** So staying motivated is a problem, and I think having something that you're really interested in helps you get over those humps. You really wanna see this thing exist... And I tell a lot of people, if you're trying to get started, you need to have a real-world project that you're trying to build. And hopefully it's one that you actually care about and wanna see exist in the world, so it sounds like, Antoni, you've hit (at least for now) a really good place, where with PizzaQL it's something that you want to exist.

A lot of people say "Well, I don't really know... I don't have a project, I don't have any big ideas. How do I come up with something that's worth building, or worth using to learn to build?" And I actually like the way that you did it. It's like "Well, just look out there for a proprietary software that exists, or something else that's in the world and people are using it, or it's providing value, and then just try to recreate that with your own skills."

**Antoni Kepinski:** Yeah, that's exactly what I did with PizzaQL.

**Break:** \[00:17:50.17\]

**Jerod Santo:** Okay, we're back, talking PizzaQL. Antoni, you mentioned you saw a Polish proprietary website that did this; it was in PHP, and you wanted to build one with React, and these technologies... Why pizza though? Do you love pizza? Did your parents run a pizza company, or do you wanna open up a pizzeria?

**Antoni Kepinski:** No, no... \[laughter\] I was just ordering pizza one day and thought about it.

**Jerod Santo:** Okay.

**Feross Aboukhadijeh:** Oh, is this a user-facing thing? Does the user interact with the ordering system, or is it more for the pizza restaurant to manage their orders?

**Antoni Kepinski:** PizzaQL is both order placement for users, and order management for pizza restaurant owners. I'm trying to balance the development of both panels, for user and for the owner, so that it's an all-in-one product.

**Jerod Santo:** \[00:19:57.11\] A lot of times building user-facing software -- I mean, it sounds like you have multiple users even. You have the customers and you have the management team... The technology and the programming is an aspect, but a lot of the really hard things is the flow of data, and how things are organized, and how the system works at a high level. Are these things that come naturally to you, or are you still trying to figure them out if we ask you to describe how PizzaQL works from an end user's perspective, how the data flows through the system... Are these things you've got figured out, or are you still learning as you go?

**Antoni Kepinski:** Yeah, most of the stuff is figured out. I still haven't implemented one of the most important things, which is pricing and ordering. Now you can just order pizza and you don't know how much you need to pay, and that is really important, so I need to implement that.

How PizzaQL works is the user places an order, which gets the status "In progress", and the manager sees it on his admin dashboard. They can change its status from "Completed", "Cancelled" or "Delete the order." That's pretty basic stuff.

Also, there is currently no option for the manager to add orders manually. For example, when someone doesn't use the online order placement form and instead they call the pizza shop, that's something that I also need to implement. So PizzaQL isn't really that ready yet, but I would say it's -- yeah, it's basic. There's a lot to implement.

**Feross Aboukhadijeh:** I see that you have one other contributor on GitHub. They have two commits, it seems. How did that happen? Was it a pull request that they sent to you, or is it somebody that you know?

**Antoni Kepinski:** Wait a second, I will just look who it is... Oh, okay, I know...

**Jerod Santo:** Surprise contributor.

**Antoni Kepinski:** The logo of PizzaQL was actually made by someone else...

**Jerod Santo:** Nice.

**Antoni Kepinski:** ...who submitted an issue if I want a logo for this app, and they made it for free.

**Jerod Santo:** Nice.

**Feross Aboukhadijeh:** That's really awesome.

**Antoni Kepinski:** A nice way of contributing to open source projects.

**Feross Aboukhadijeh:** Yeah. Are you looking for other open source contributors?

**Antoni Kepinski:** Yes, of course. A lot of people have much more knowledge than I do, and I think they can improve the code of PizzaQL and help me add new functionalities to this project.

**Feross Aboukhadijeh:** Okay, I'll start by sending you a pull request and I'll remove all the semi-colons from your project. \[laughter\]

**Jerod Santo:** Feross...!

**Antoni Kepinski:** Sorry, I'm not using your linter.

**Feross Aboukhadijeh:** Yeah, I noticed that. You're using Sindre Sorhus', because I think you like him better... That's fine. \[laughter\]

**Antoni Kepinski:** No, no...

**Mikeal Rogers:** That is what it's about. You follow your favorite developer and you're like "I want their style guide." That is how it goes.

**Feross Aboukhadijeh:** But seriously, that's cool. So I'm curious if after this show maybe some people who are curious about the project will come and check it out and see if there's any way they can help.

**Jerod Santo:** Yeah.

**Antoni Kepinski:** That would be great.

**Jerod Santo:** When it comes to running the system, is it built to be an open source project that powers a single website, that pizza people can sign up for and run their own instance, or is it supposed to be a "deploy to Heroku, or Glitch, or Now" or whatever? Kind of a "run your own instance"? Or is it really just like "Well, you're building a thing and you're building open source, and you'll see what happens"?

**Antoni Kepinski:** From the beginning it was going to be a host-it-yourself project. I know to do so I need to write documentation, so that others know what to do. That's the other thing - it's not only building the app, but also writing the docs for both deployment and security, and stuff like that. I'm currently in progress of writing the docs.

**Jerod Santo:** \[00:24:11.23\] The docs are always in progress.

**Antoni Kepinski:** Yes...

**Mikeal Rogers:** I'm way more interested in this other project you did called Oji. This text emoticon maker is pretty rad. It's really simple, but also amazing.

**Antoni Kepinski:** Yeah, it got a lot of stars. I don't really know why, to this date. I really need to update it.

**Jerod Santo:** Mikeal, paste a link to that, so I can check it out here.

**Mikeal Rogers:** Yeah, walks you through the different parts of making a text-based emoticon, and then outputs it at the end. And it's very simple, but also I have never been able to make these fancy emoticons before, because I don't get it. But now I actually get it, I understand it now; it makes sense.

**Feross Aboukhadijeh:** Oh, wow... That's really cool! I just saw it.

**Jerod Santo:** This is cool. Okay, O-J-I. I thought you were doing the original gangsta, like OG.

**Mikeal Rogers:** OG, yeah... \[laughter\] That's awesome.

**Antoni Kepinski:** I know that someone when I was building that submitted a pull request that I need to change "emoji" to "emoticon", because the thing this app is creating is not emoji, it's emoticon. I really need to change that.

**Mikeal Rogers:** Right, right. That's true. Emojis are their own spectrum...

**Jerod Santo:** So emoticons is like the semi-colon right parenthesis kind of thing, whereas emoji are the actual Unicode characters.

**Antoni Kepinski:** Yes.

**Mikeal Rogers:** It's the stuff we used to do back in the day on IRC. Not this fancy, Japanese-derived expressive images - no, no, no...

**Jerod Santo:** Right. They're Oji emoji.

**Mikeal Rogers:** Yeah, exactly. I think the name is proper in that regard.

**Jerod Santo:** So it's pretty cool that you moved from a -- I'm just looking at this and thinking... This is a very small scope, very cool "release it into the world and move on", and PizzaQL - you're taking on a very serious business, large-scale, large scope project. Are you trying to advance your skills, or is it just what you felt like working on at the time?

**Antoni Kepinski:** At some point I thought that making small projects like Oji or something like that isn't really enough; I just need to create something else, something bigger, so that I have a perspective on how to work on bigger projects, and use those skills in the future.

**Jerod Santo:** So what does success look like for PizzaQL? If you could look back and say "That did everything I wanted it to do in my life", what would that be? Like, you got a job, or you learned some stuff, or you built a pizza empire... What would success look like?

**Antoni Kepinski:** I would really like to see PizzaQL being used in production. Of course, there is a lot to do, but I think that might be possible. That would be a huge success, if some pizza shops would use PizzaQL in real life to manage orders, and stuff.

**Feross Aboukhadijeh:** Have you tried reaching out to any of the pizza shops near you and seeing if they want to give it a shot?

**Antoni Kepinski:** Not yet, because I still didn't implement the really important features, but I know one pizza shop nearby which does not have a good online form for ordering... So I think that they will be my target for this project.

**Feross Aboukhadijeh:** I have some customers for you as well. Domino's Pizza here in the U.S. has the most complicated ordering form I've ever seen. It takes ten minutes to get through it, and it feel like you're filling out your taxes just to order all the toppings that you want. It's extremely painful. So if you want me to put you in touch, I can try to make a contact there.

\[00:28:08.12\] No, but seriously, I think that when it comes to potential users, you can never talk to them too early. So maybe if you can talk to that local shop, even before you finished all the features that you want to include, it could help you prioritize the features. If you talk to them and you learn that they actually want this feature, which is different than what you thought they would want, that could really save you a lot of time... If this is the route that you wanna go down.

**Antoni Kepinski:** Good point. Also, I shared the PizzaQL project on Reddit, and some Subreddits list Programming, React, Web Development... And I've also received a lot of suggestions there. One of the users wrote a huge list - 100 items - of what I should do to make it easier for people...

**Jerod Santo:** Wow.

**Antoni Kepinski:** And I'm really glad I received that feedback.

**Feross Aboukhadijeh:** Yeah, I'm just mainly speaking from personal experience. I think as a developer it's really easy to get excited about all the features you can build... And then I guess if you're just trying to learn, there's nothing wrong with just building features, because it's fun... But if you talk to people who are actually using the software, it can really help prioritize the features and help you figure out what's important.

I made a mistake of -- in the past, I've actually made this mistake many times... Just working on stuff for a long period of time without really talking to anybody about whether it's a good idea or not, and then after many months I show it to somebody and I find out "Oh gosh, I built the wrong thing", or "Oh, they didn't actually want this." So yeah... Just trying to save you that suffering.

**Antoni Kepinski:** Yeah, I will definitely need to do that. Thanks.

**Mikeal Rogers:** On a similar related topic - because you brought up Domino's Pizza stuff... There's this amazing episode of the Reply All podcast (\#141) about these phantom $2 Cokes that happened in Domino's across America...

**Jerod Santo:** Oh, yeah...!

**Mikeal Rogers:** And it's like this amazing investigative piece into these -- all these stores across America just get phantom orders of $2 Cokes for Adam Pisces that never get picked up...

**Jerod Santo:** I listed to that one.

**Mikeal Rogers:** It's brilliant. But it also gets into a lot of details on the technical aspects of Domino's software, including the fact that they have an internal social network for all of the employees and all the Domino's across the country. It' s a fascinating listen, and it gives you some insight into how their ordering system works.

One thing that I didn't recognize was that a big part of their business is people ordering ahead and then picking up in cash. So they do take orders without a credit card to put them down, and they'd potentially have to throw them away... But it's just such a marginal number of people that don't pick it up that they don't really care.

**Jerod Santo:** Yeah, I listened to that. I've heard all about it, but now it's all coming back to me. That was a great episode. And the actual mystery revelation -- I guess we probably shouldn't say what it is, otherwise it kind of ruins the...

**Mikeal Rogers:** Yeah, don't spoil it! \[laughs\]

**Jerod Santo:** Let's just say it's a very appropriate answer. Yeah... It's awesome. So Antoni, listen to that; listeners, listen to that if you haven't yet. It's a great episode.

**Antoni Kepinski:** Also, in terms of PizzaQL I haven't implemented the payment system. The reason behind it is because in the U.S. I think Stripe has a really good API so that you can implement checkout in your apps. Unfortunately, Stripe is not yet supported in Poland. It is in private beta that I can't get into, unfortunately... And other companies in Poland don't have good APIs, Npm packages or something like that... And that's really disappointing.

**Mikeal Rogers:** Maybe we can get you into that beta. Alex Sexton works at Stripe, and he's an old co-host for this podcast, so... We might be able to get you in. We'll just poke him about it.

**Antoni Kepinski:** That would be pretty nice.

**Mikeal Rogers:** Yeah.

**Feross Aboukhadijeh:** You know, even if you're not taking orders immediately, just to be able to get a test token, so you can actually build out all the infrastructure, and... Yeah, it might come out of beta by the time you're finished implementing everything.

**Antoni Kepinski:** Exactly.

**Break:** \[00:32:20.17\]

**Antoni Kepinski:** The PizzaQL project - I've written it in React, but at first I wanted to build it using vanilla JS. I guess that's nice if you build something in this way, because your app is optimized - of course, if you write it properly - and it isn't bloated in any way. However, I really wanted to learn how to use React, and also Next.js, which does server-side rendering, and all sorts of stuff.

I also wanted to use GraphQL. This was the second time I was using it... And I found out about Prisma, which is an ORM that helps you integrate your GraphQL API with a database... And yeah, I really like this project. It was really helpful.

**Jerod Santo:** So since you call it PizzaQL, I assume you're playing on GraphQL...

**Antoni Kepinski:** Yes, exactly.

**Jerod Santo:** Is that a big aspect of the back-end? I mean, obviously, your API layer is gonna be a big aspect; this is a front-end and a back-end, so a single-page app, I guess, is what the kids call it these days. You also have Apollo client, you have other things going on... What's the biggest decision you had to make so far? Is it the GraphQL layer that you decided to go with, or React, I assume?

**Antoni Kepinski:** I think the main part of this app on the back-end is actually GraphQL... Or maybe not. It's Prisma. Because with Prisma you can easily integrate to - as I said before - GraphQL and a database. And following the tutorials on their docs page was also really nice. Implementing the whole GraphQL thing was really easy, and I really enjoyed it. It's easy to expand, and all sorts of stuff.

**Feross Aboukhadijeh:** I'm curious, did you ever use anything besides GraphQL for interfacing with the database? Have you made a RESTful API, or anything like that before? Or did you just start with GraphQL?

**Antoni Kepinski:** I started with GraphQL, so that's pretty nice, I guess... But also, I know that I need to learn how to use REST... And I was doing it in my private projects, just to get the perspective, how does REST compare to GraphQL.

**Feross Aboukhadijeh:** That's so fascinating that you started with GraphQL. I wonder how that will change what you think of REST when you finally learn it.

**Mikeal Rogers:** I wonder of the differences actually between GraphQL and REST, and GraphQL at managing database access without that weird intermediary layer... But which actually cleans up a lot of the rough edges of databases. Traditional databases are not fun to work with; SQL is like a crazy black art that nobody really understands... And a lot of the REST interfaces just sit between you and this other database connection.

\[00:36:15.26\] And yeah, those databases have never been great to use. We tried to do a lot of new stuff in the SQL hype cycle that happened, but when we netted out the other end everybody still wanted \[unintelligible 00:36:26.15\] So everything kind of reverted back to the mean, and now we're back to GraphQL, which is in a way a much saner approach to the problem than ORMs were. ORMs were the 2000's version of this, where it's like "Oh, okay, we hate dealing with SQL. We'll just put this object map on top of it, and map all the field properly." That ended up being highly problematic in terms of scale, and in just not using a lot of database features properly. GraphQL is a much saner approach to that, where it's like "No, let's take some of the constraints and also some of the benefits of a relational database and expose them to this layer and this API that actually can map on object structures a lot easier."

**Antoni Kepinski:** Yeah, what I like about Prisma is that you don't really interact with the database; Prisma does it for you. I think that's making PizzaQL much easier and less time-consuming.

**Mikeal Rogers:** Yeah, we've been saying this for years... Like, CouchDB - the big thing about CouchDB ten years ago was like it's just an HTTP endpoint that you can just talk to; so you don't have to have a separate database layer, this extra tier. And when GraphQL came out, I was like "The logical extension here is that you just don't talk to the database anymore." There's just a service up, that's providing you data storage that has a GraphQL interface. So stuff like Prisma just seems like the natural extension of that whole space.

**Antoni Kepinski:** Yeah. What's also nice is that Prisma works with REST, as I found out... So I really need to experiment with that in the future.

**Jerod Santo:** In terms of writing your actual business logic with regards to -- let's just take one example... Data constraints. Users have to have an email address. In your stack, where are you writing that specific code? Is that an object that is like a Prisma deal, or...? Help me understand.

**Antoni Kepinski:** All the orders are stored in a MongoDB database, and all of this stuff is managed by Prisma... But authentication - and for now only the managers need to authenticate to access the dashboard to manage orders - I'm using Auth0 there. Because I don't really have experience with implementing authentication on the server, and I think that using the ready solution here is good for security, and also it's easy to integrate.

**Jerod Santo:** So let's not focus on the users then. Let's focus on the orders. When you describe in your program what an order is, what attributes it has, how it works etc. are you writing into the Prisma layer? Are you using Prisma libraries to define these things?

**Antoni Kepinski:** Yes. I said before, the order, when it's created, receives a status "In Progress." And because this is an object, it also receives other things, like name, order address, pizza type, size of the pizza, and other things. This is what goes to the MongoDB database. All of this stuff is seen by the manager, or a cook, that can see and know which pizza to make.

**Jerod Santo:** Gotcha.

**Mikeal Rogers:** This is really cool. So for the visual layer - are you using components that integrate really easily into Prisma objects? Are you doing that work --

**Antoni Kepinski:** \[00:40:06.10\] Yeah, to integrate with the GraphQL, Prisma and stuff, I'm using Apollo and Apollo React. And I'm taking the advantage of using server-side rendering with Next.js... And it's really easy to configure that. Of course, one of the most important features I want to add is to use GraphQL subscriptions, so that when someone creates an order, the manager does not need to refresh the page... But to do so, I need to write a custom Prisma resolver, which is a thing that I don't really know how to do, and I read more documentation about it.

**Mikeal Rogers:** I see you're also using StyledComponents here... A really cool library. I hadn't seen this before.

**Antoni Kepinski:** Yes. I don't really like the way you style React, and in Next.js the Styled JSX is integrated... But for me, StyledComponents is a more clear approach to styling stuff, and it's more like pure CSS. It's much easier for me.

**Mikeal Rogers:** Yeah, this looks like a great library. I hadn't seen it before. I've done a few experiments myself with just creating web components and using template literals to do interesting stuff to instantiate them and create them... And this is one of the better approaches I've seen, where it's really just CSS that you're attaching to each one, because that's the main thing you actually care about when you're creating these components.

**Jerod Santo:** Right.

**Feross Aboukhadijeh:** I'm curious if all this stuff you have to learn is overwhelming at all? Because you've listed off so far so many different buzzwords... You said React, Next.js, Apollo, StyledComponents, Prisma, GraphQL etc. So many different technologies in play here... And there's a discussion in the broader community about whether web development has become too difficult to learn because of the amount of different software packages and libraries that you have to understand in order to do a basic website... So I'm just curious what you think, since it seems like you learned -- well, actually you said you learned programming when you were 12 or 13, so maybe you did learn it in a simple way... But what are your thoughts on this? Is this overwhelming, or do you think making websites is too complicated? What do you think?

**Antoni Kepinski:** I think yes. At first, when I saw the Auth0 and Apollo GraphQL, I thought that I would never integrate it with my app. "I don't know how this works, I need to read a lot of documentation..." But what helped me were the tutorials on the internet, on the Medium blogs, and a lot of sample open source projects; they really helped me implement that. But now when I'm creating an app, I really focus on optimization. I see Google Chrome uses the new experimental feature of lazy-loading images, and for me web development is getting a bit stressful, and you need to learn a lot... And that wasn't the case in the past.

**Feross Aboukhadijeh:** So when you initially learned, did you just learn HTML, CSS and JavaScript?

**Antoni Kepinski:** Yes, exactly.

**Feross Aboukhadijeh:** Okay. So if you had a friend, or a little brother or sister who was trying to learn to program, would you tell them to start with HTML, CSS and JavaScript? Or would you try to teach them some of the stuff that you're using right now, like React and GraphQL and Apollo, and stuff like that?

**Antoni Kepinski:** \[00:43:56.25\] In my opinion, it's good to understand the basics - HTML, CSS and vanilla JavaScript first, because it makes learning other libraries like (React, Next.js) much easier in the future. So I don't think starting with React is a good way. It's better to learn the basics, and that's what I did.

**Jerod Santo:** With that in mind, a bit of a thought experiment - so you have your front-end and your back-end, and your major front-end dependency is React; all these other things tie into React, or are part of it... And on the back-end, your major dependency it seems like is Prisma. It's providing you that GraphQL layer, and you could swap out a database. So if I had to tell you "You're gonna rewrite half of your application and you're gonna swap out one of your major dependencies", so you can't use React, or you can't use Prisma - which one would you be more willing to let go of? Or in other words, what's the harder thing that you had to rewrite or relearn a bunch of stuff if you didn't have? Would it be React, or would it be Prisma on the back-end?

**Antoni Kepinski:** I think I would choose React. Making stuff in vanilla JavaScript isn't that hard. And also, I am not really a back-end developer, so removing Prisma would be really hard for me. I'd need to learn a lot of new stuff. I am more like a front-end developer... So yes, I would remove React.

**Feross Aboukhadijeh:** Yeah, that makes Sense. I mean, really, I think that React helps when you're dealing with a website that has hundreds of components, and you change state in one place and you wanna have all the components be in sync with that state. Honestly, a website with three, four, five pages is totally doable with plain, vanilla JavaScript. I understand once people get used to using React why they would wanna just use it all the time, even on a site that's simple; it's just because at that point you sort of have your tools in your toolbelt and you know how everything works with React, so you just wanna use it always... But you don't really need it in terms of -- it's not like it's impossible to make a plain JavaScript website and to sort of keep the state all in sync by hand for something that's simple enough.

**Antoni Kepinski:** Yeah, I saw your BitMidi application and I think it's written in pure JavaScript, am I right?

**Feross Aboukhadijeh:** BitMidi? No, it actually uses Preact.

**Antoni Kepinski:** Preact? Oh, okay. But it's really impressive.

**Feross Aboukhadijeh:** Thanks, yeah. Preact is -- I mean, it's the same API as React, pretty much... So I would say for BitMidi it was a little bit overkill, in the sense that there's not that many different pages on the website. It doesn't really need any kind of framework. But then again, the fact that Preact is so lightweight - it only adds 3 kb to the bundle - means that if I prefer that way of working, if I prefer a component model and the ease that comes with that, then I might as well just do it, because I'm not really paying any cost, so...

**Jerod Santo:** Well, BitMidi is -- do you do server-side rendering then? And how do you handle that?

**Feross Aboukhadijeh:** Yeah, BitMidi has a lot of unnecessary technical complexity, I would say...

**Jerod Santo:** \[laughs\]

**Feross Aboukhadijeh:** Yeah... I was trying to go out of my way to do everything as perfect as possible, just as a learning experiment for myself... So yeah, it does server-side rendering, it rehydrates on the client... It has really good SEO actually; for various "midi" searches it's always number one, so it worked out in that sense... But yeah, it's complicated, and I'm still not happy with it. I feel like it's too complicated and it's too brittle.

**Antoni Kepinski:** I was impressed with the WebAssembly midi player on your page. It's a nice way to use WebAssembly, in my opinion.

**Feross Aboukhadijeh:** Yeah, yeah. That's one of the best strengths of WebAssembly - to be able to take existing libraries that you don't wanna have to rewrite in JavaScript and just make them work. I actually considered rewriting it in JavaScript, but then I decided this is a perfect time to learn WebAssembly.

**Mikeal Rogers:** \[00:48:01.05\] I'm actually diving into a bunch of WebAssembly stuff because it can represent a different security model. You can't just run arbitrary JavaScript from arbitrary people; that's a bad idea... And there's a lot of limit to the current security model of the web, and a lot of big holes in it, like privacy... But WebAssembly doesn't have access to anything that you don't specifically pass into it. So if you can start to construct ways to share WebAssembly code, like code around data structures in particular, you can create a better security model, where as long as you contain the code and have certain limits on it, like you don't let it run for too long and stuff like that - yeah, you can now run kind of arbitrary code, from arbitrary people.

**Antoni Kepinski:** Also, in terms of PizzaQL I'm thinking about rewriting it to TypeScript. I only recently learned about it, and I think it's really cool; it's a good way to write stuff. I've already rewritten some of my modules to TypeScript.

**Feross Aboukhadijeh:** Nice. You can add one more buzzword to the list. \[laughter\]

**Jerod Santo:** That's right. Bingo! You are now compliant.

**Mikeal Rogers:** I generally feel like this is actually kind of a hard time, because it's not just that there's all of these tools to learn, it's that we're also at this weird inflection point, it feels like, where the platform has caught up, and a lot of our tooling that we rely on hasn't caught up with the changes in the platform. There's a bunch of new stuff in the browser that we're not using, and that some people are using, but then it's like this hard transition over to the new thing...

**Jerod Santo:** For example?

**Mikeal Rogers:** In the meantime, it's just a lot of extra stuff to use. Like the entire module system. I have a relatively small package, and I was doing a df the other day, figuring out where I'm using space, and in just a regular, tiny module project there's like 200 megs of dependencies in it, in the full tree. And most of that is not getting pulled in in the actual code; the bundle isn't 200 megs, but that's the install size. It's crazy. I had no idea that it would blow up like this when we were starting this nine years ago.

But yeah, so there's a new module system, there's new takes on module stuff, like Pika, there's the entire async/await transition still happening... So there's a ton of infrastructure and projects that still use the old callback patterns. And honestly, I feel like TypeScript is also gonna end up being one of those things that we have an awkward transition away from... Because a bunch of people are gonna do a bunch of stuff in TypeScript; we're eventually going to add some kind of typing primitives to the language. The language will update, the platform will update, and now we'll have all this \[unintelligible 00:50:44.20\] in the way.

If you look at the pain that Node is going through in upgrading to these patterns, I'm just not willing to take on a lot of new tooling that I think the platform is eventually gonna catch up on.

**Jerod Santo:** So would you advise Antoni not to do what he's currently doing, in terms of writing things in TypeScript, or what would you advise him?

**Mikeal Rogers:** I always caution people away from TypeScript, because it looks like one of those things -- it's covering up a deficiency of the language; that's the thing, that's they key. And so much of Node that we wrote was covering up deficiencies of the language... And because we wanted to use them then, we needed to do that, but it's so painful now to be upgrading everything, and to try and break the world and break the entire platform in order to catch up. Streams is probably the biggest example. Streams are super-painful. Every new version of Streams that we did ended up causing some break with the old stuff. There's now finally an actual pattern in the language that fixes this, and it's much better... And you realize very quickly that the moment that you're handling errors in your own special way and not allowing them to throw, you're off in your own crazy land, and you do not have the platform to help you anymore, and you're definitely covering up a deficiency in the language.

**Jerod Santo:** \[00:52:04.27\] Yeah.

**Mikeal Rogers:** Using async generators is just phenomenal. It's such a better pattern, and everything that I've built with it is infinitely simpler to deal with. But it's awkward; you can't use them still in those versions of Node -- well, I guess that's not true anymore, now that 12 is relatively current... Even LTS now supports the mode, although it does give you an annoying warning about it. But it's in all browsers now.

But now I have all these old stream code-arounds to deal with, and like - okay, so do I wrap them in a thing that makes \[unintelligible 00:52:45.20\] async generator, and then I have like a whole new class of weird edge cases and errors to deal with? Do I take the time to just rewrite that entire stream library?

**Jerod Santo:** Yeah, throw that code out, man... Just throw it away.

**Mikeal Rogers:** Yeah, I know, that's what I mean. This is one of the reasons why request is effectively being deprecated, and we're putting it into maintenance mode and trying to deprecate it... Because it's not going to be able to make this transition, and newer, better libraries probably should take its place.

Feross, how do you feel about this? Because you have as much code out there in old patterns as I do, that you have to maintain?

**Feross Aboukhadijeh:** It's so sad... All of our code is destined to be deleted. \[laughs\]

**Mikeal Rogers:** It's true.

**Jerod Santo:** Well, the best code is no code, so... Maybe that's a good thing.

**Mikeal Rogers:** Although nothing seems to get deleted in the Node ecosystem. It just ends up in your depths of depths.

**Jerod Santo:** Right. To the crufty corner underneath the bed.

**Feross Aboukhadijeh:** Yeah... I just merged a pull request on this package called Bitfield, which removes the Node buffer and switches over to \[unintelligible 00:53:44.22\] That's like a 20-line package, but it took me an hour to review every line and make sure that all the edge cases worked correctly... So I don't wanna imagine what it would be like to remove Buffer from something like WebTorrent. Plus, it wouldn't even make sense at this point to do that, because WebTorrent still uses Streams, and streams use buffers. Until there's actually a good story about how to do streams now in Node and in the browser - which maybe there is; I don't know, actually. We should do an episode about that maybe, but... Once that exists, then I could see doing the work to refactor, but... Ugh, it's going to be so much work. I don't know.

**Mikeal Rogers:** I attempted to not use buffers in new packages, so that I don't take the buffer polyfill into those packages when they get packaged to the browser, and I actually failed. I just couldn't get enough of the things working that I need to have working.

So I'd love to see packages that make working with actual browser-friendly APIs a lot easier \[unintelligible 00:54:45.21\]

**Jerod Santo:** So Antoni, this would be my advice for you, given where you are... TypeScript - take it or leave it; I don't have a take on that. You can take Mikeal's advice or not... I think what I would do -- if you were just purely in this for the learning and the leveling up, I would imagine some version of what 1.0 looks like in terms of PizzaQL's functionality, and get to there with your current stack. Just pound it out, get to 1.0.

\[00:55:14.20\] Then if you have the time and the inclination, I would throw out your front-end; I would just throw the whole thing out and I would rewrite, and leave the back-end untouched, completely untouched... And start a completely fresh, brand new front-end, and write it with none of these technologies. I bet you'd learn a ton, I bet it would work very well, and I think you'd have fun doing that. I would have fun doing that, actually.

**Antoni Kepinski:** Okay, thanks. I think I will try that.

**Jerod Santo:** Just some more unsolicited advice for you... \[laughter\]

**Mikeal Rogers:** One thing that I tend to tell newer programmers, or just people early in their career, is to especially early on learn languages that are really different from each other. If you know Python, don't learn Ruby. That's a somewhat useless exercise. But learning very different languages can really help you think about how to program, even in the languages that you're most familiar with.

I never wrote a lot of Haskell, but learning Haskell was really beneficial, actually. It made me think about functional programming in a different way, that just learning what functional programming looks like in JavaScript never really made that kind of click... And you're learning Rust - that's a great one, actually; it's a typed language, so you're getting that experience. It also has a very novel approach to memory management and ownership that's actually very unique. It has you thinking about the stack and the heap, and the way that compilers work in a way that I don't think that a lot of other languages actually force you to think about... So that's also really cool.

So I'm all for learning languages that are very different from each other. That said, I don't think TypeScript is that different from anything that you're already learning. You have the typing in Rust, and the rest is basically just JavaScript, so...

**Antoni Kepinski:** Yeah, for me learning Rust is harder than learning JavaScript, but that does not throw me away from learning Rust. For me it seems really nice.

**Mikeal Rogers:** Yeah... Also, a quick shout-out to Rust compiler errors. I've never seen more humane errors in any programming platform, ever.

**Antoni Kepinski:** Yeah, exactly.

**Mikeal Rogers:** It's brilliant. Why doesn't everybody do this? The errors are not just like "Oh, some arbitrary technical thing", it's like "No, here's the human version of what this actually means, and probably how to fix it." It's really, really nice.

**Jerod Santo:** There's kind of a renaissance in compiler or tooling error reporting with Rust, Elm does a great job, even Elixir... They're just very useful feedback from your compiler or your runtime, which - it's nice to see human interfaces for developers. Humane, human interfaces for us developers, who are used to random stack traces just pointing out to whatever \[unintelligible 00:58:03.05\] So that's awesome.

Well, any final thoughts - we're bumping up against our time - from y'all before we call this a show? Antoni, or Feross, or Mikeal.

**Feross Aboukhadijeh:** I'm curious what Antoni plans to do next. What are you most excited about, what's in your future?

**Antoni Kepinski:** In PizzaQL or in my new projects?

**Feross Aboukhadijeh:** In your life.

**Antoni Kepinski:** I really want to continue making open source projects and developing the existing ones, and in the future I would also like to work in a company that supports open source software.

**Jerod Santo:** Alright, that's our show this week. Thanks for hanging out, we'll see y'all next time!
