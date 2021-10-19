**Erik St. Martin:** Welcome back, everybody! I know it's been a couple of weeks, between the storms and everything... First Houston where our studio is, and then here in Tampa where Brian and I are, and the studio getting moved... But we're getting back on track and we've got a fun show planned today.

Today's episode number is 58, and on the show today is myself, Erik St. Martin, Brian Ketelsen...

**Brian Ketelsen:** Hello!

**Erik St. Martin:** And Carlisia Pinto...

**Carlisia Thompson:** No storms in California...

**Erik St. Martin:** Right?! Maybe I should reconsider that West Coast move.

**Carlisia Thompson:** Yeah!

**Erik St. Martin:** And our special guest for today is Dmitri Shurya-- I knew I was gonna butcher that... Dmitri Shuryal-- why am I...? See, when I'm trying to say it fast, now I can't say it.

**Dmitri Shuralyov:** Yeah, you had it before...

**Erik St. Martin:** Dmitri Shuralyov. \[laughs\] You try to get that excitement up and say it fast, yeah... So Dmitri Shuralyov.

**Dmitri Shuralyov:** Yeah. Hello, everyone!

**Erik St. Martin:** Better known by his Twitter handle, @shurcooL.

**Dmitri Shuralyov:** Yeah, I'm shurcooL on GitHub, Twitter, and basically everywhere. It's great to be finally here.

**Erik St. Martin:** Yeah, so for anybody who may not be familiar with you and the work that you do, can you just kind give a brief rundown about who you are, what you do, and your history in the Go community?

**Dmitri Shuralyov:** Sure, absolutely. As you said, most people probably know me by shurcooL, that's what I use as my username everywhere. I'm a software engineer. I used Go since 2013 or so, so it's been four years now. It's no secret, I'm a big fan of Go, I really enjoy using it.

These days I kind of do something slightly unusual - I work full-time on open source Go code... And maybe it would make sense for me to kind of go a little bit into my background, how I started; that would kind of explain how I got here.

**Carlisia Thompson:** Yes!

**Brian Ketelsen:** Please do.

**Dmitri Shuralyov:** Alright, so I got into programming pretty early on, I think around 13 or 14. Basically, as soon as I discovered that you could actually make video games, not just play them, you could do that by writing code - that got me really hooked. I kind of quickly became very interested; I started to learn more about it, and quickly progressed from Visual Basic to others, and ended up with C++. That was my language of choice for a long period of time, because when you're doing video game development, that's one of the better tools.

I wanted to make video games for a long time, pretty much up until I got to my masters. I was doing my final project there; this was a huge project in C++, and I was working on it for many months. There was a lot of pressure, there were a lot of deadlines, and I had to do a lot of things very quickly, and I felt a lot of frustration at that time, because there were so many things I had to do kind of manually and in a very tedious manner.

So I was using Visual Studio, and for C++ it didn't have great refactoring tools, and I was just like doing all these things -- like, if I wanted to rename a variable or a function, I would have to change it in a CPP file and in a header file as well.

\[04:06\] If I were to move something, it would be a lot of manual steps, and that kind of frustration just made me really want to work on the tools that would make my job easier, or the jobs of all the programmers out there... So that got me interested more on the developing tools side.

Sometime after that I felt so motivated to do that, and I had all these ideas and I wanted to try them out, so I started working on this experimental project called [Conception](https://www.youtube.com/watch?v=DNJ7HqlV55k). I really wanted to try some crazy ideas, like -- I was thinking "Why is it that source code is text files? That is so backwards; it should be something more sophisticated." I tried to put those ideas to the test, and for about a year after that I worked exclusively on this project. It was a lot of fun, it was very interesting, we tried a lot of experimental ideas, and at the end of that year I actually submitted it to a conference -- it was a competition, Live 2013, and I ended up winning first prize. That was pretty cool.

What happened after that is that the project got a lot of visibility and publicity, and it kind of helped me get my first job in San Francisco, which was a place that I really wanted to end up or go to to work sometime. I'm from Toronto, and San Francisco -- it's always been a dream to go and work there, because I knew it's one of the best places for technology. It's where all the startups are, all the big companies, and lots of things are happening there, so it's kind of like just a dream to go there.

I ended up getting a job, so I ended up working first at Triggit. It was a startup where we did real-time bidding and advertising, things like that; this was a company that was just getting into using Go, so one of the reasons they hired me was because I was good with C++ and Go. I thought this is a great place for me to practice both languages and help them convert a lot of things they were doing, from many languages. They had a lot of success with Go, so they started to push it to more and more projects.

After that I worked at another company, [Sourcegraph](https://github.com/sourcegraph). That one, you may have heard of it. We were building tools for developers, and it's kind of famous in the Go community because of doing the live streaming for [GopherCon](https://www.gophercon.com/), and so on. This was a very different environment where there was a lot more open source. I was actually working on developer tools, so this was a lot of fun.

In the course of working in San Francisco for those three years, I was kind of always saving up towards this future dream of being able to just work on open source full-time. That was my dream of what I wanted to try next... Because it's one thing when you have your weekends, maybe an hour or two on weekdays to contribute to open source, and a whole different story if you actually have your full time available to do it.

Because I became such a big fan of working with Go, I wanted to basically do more of that. So this actually happened, and I ended up starting this -- beginning of this year, end of last year, and I kind of transitioned; I left my job there and I came back to Toronto, and started doing this thing of working full-time on open source Go code.

**Carlisia Thompson:** That is fantastic!

**Brian Ketelsen:** It is. It's really awesome.

**Carlisia Thompson:** I was going to ask you if you are being self-funded, or funded by a company... But it sounds like you're being self-funded, right?

**Dmitri Shuralyov:** \[07:54\] I am self-funded, yes. It's basically my savings that I was working on saving towards this goal, and that's kind of what's funding this year. Of course, as I earn some money and add to that, I can continue to do this a bit more, but right now I don't have a concrete idea about next year; we'll see how that goes, but this year it's definitely... Yeah.

**Carlisia Thompson:** And you have a ton of experience, so I am assuming the break that you're taking to work on the open source projects that you want to work on is not so you can acquire more skills, so I'm wondering what your end game is. Are you trying to just take a mental break and work on the projects you want and maybe finish some, or take them to a higher level...? Or you don't have an endgame, or are you preparing yourself for your next step? What is it?

**Dmitri Shuralyov:** Absolutely, yeah. I definitely have an endgame, and it's more of a, you know, intermediate, one step at a time kind of plan, rather than a complete vision for where I wanna be. But essentially, I can say that I'm just building or I'm working on the things that I really want to exist that don't really exist yet.
I'm just kind of filling my own desires of some tooling, or some things in the Go ecosystem that I think will be awesome to have, but they don't necessarily exist or they're not finished. So I just basically work on making the things that I wanna see happen. That is the main motivation, and of course, I wanna maintain my skills and always learn new things and get better, but it is mostly about just making things that I wanna see happen.

**Carlisia Thompson:** Awesome.

**Brian Ketelsen:** That is really cool. I think we need to go back and talk about Conception for a little bit, because that stuff was out there... Waaay out there! Tell us, since this is a podcast and we can't see it, tell us what Conception was and what you were trying to accomplish.

**Dmitri Shuralyov:** Absolutely. So the original project was actually started in C++, and back then I was really into IDE's, and I wanted them to become a little bit more visual, and also I wanted them to kind of help you more with the refactoring.

Again, when I started, C++ was the language that I had in mind as what I wanted to use, and I just thought that there are all these opportunities to make it easier to develop in C++, but essentially what happened is that as I started to work on the project, I kind of discovered Go. That's somewhere at the beginning of that -- in the middle of the first year of working on the project I saw that "Hey, there's this cool language called Go. Let me try it." The problem that I was solving at the time was I needed to start some binaries, basically shell out, run some commands, and in C++ this was at the time really difficult. It was probably 80 lines of non-portable, really hacky and error-prone code, that kind of worked, but you just knew that this is not right; it would probably fail if something happened, and it was so long that it was really hard to read the code.

So when I tried Go, I found the _os/exec_ package and I was just really, really impressed with what I saw there, so then I started to use Go for more things. Very quickly, Conception ended up being -- it was supposed to be, at least, an IDE for working on Go code, so it stepped away from C++.

But the way to describe it -- and it's definitely best to see... There's a five-minute video that I made that describes basically everything I've done in those one-and-a-half years (in five minutes). So think of it as a 2D canvas; a really large, maybe infinitely-sized canvas that you have a viewport into, and on this canvas you had what I called widgets at the time. The widgets could be basically anything, but most of it would be things like maybe a Go file, for example; another widget could be a Go run widget, which would take a file widget and run it, and I present the output. But then you can also connect other widgets on top of that. You'd have a diff widget, so you could connect that to the output of a program, and then maybe diff it against the output that you wanted to produce.

\[12:24\] The idea was that everything was alive, and as you'd make a change - change the code or change a connection between the widgets, it would update everything automatically; there'd be no having to press buttons to make that happen.

As a result, you could kind of create things and just keep working, and whenever you had a question about the problem you were working on and you wanted to get some visibility into it, hopefully there was a widget that could help you get that answer, or if not, you could create it. Well, at least I was creating them at the time.

That's kind of how it went, and given that it was an experimental project, one of the biggest benefits for me or the learnings that I've done was to gain understanding for why things are done the way there are in so many ways, and why seemingly bad or outdated practices, like using text files, that you'd think "Well, this was done in the '70s; it's gotta be because computers back then weren't so powerful." Well, not really. There's many ways that existing systems are really good, and people tend to not really appreciate it, not really understand it, but when you try to create a system to beat what exists, that is a great way of finding why it works so well.

So a lot of it was learning about the strengths of some of the ways that we use compilers, code editors and so on, in ways that are actually really good. Armed with that knowledge, the next things that I could do would be obviously better.

**Brian Ketelsen:** It was absolutely mind-blowing for me when I first saw the [demos](https://www.youtube.com/watch?v=DNJ7HqlV55k), so congratulations on thinking outside the box and working through different concepts and ideas for code editing, because it really was just amazing to see that the first time.

**Dmitri Shuralyov:** Thanks a lot, I appreciate it. That's kind of what I was hoping to, just try to create something that would be really cool and that would make a lot of sense when you see it. It's not easy, but the things that do work well, it's always great to see it. If I can inspire people, that's an awesome thing as well.

**Brian Ketelsen:** The good news is I think of two things when I think of your name. The first is Conception and how awesome that is, and the second is "Isn't that the guy that put packages in gists in GitHub?"

**Dmitri Shuralyov:** \[laughs\] I knew that that was gonna come up. I can't ever escape that, I guess.

**Brian Ketelsen:** No, you can't.

**Dmitri Shuralyov:** Yeah, I'd like to cover that, so... Just upfront, I will say that I have deleted the very last gist, I believe in 2015.

**Brian Ketelsen:** \[laughs\] That's awesome!

**Dmitri Shuralyov:** From that point forward, the only gists that still exist are people's old code; maybe they've copied it, or forked it, or vendored it, or whatever, and so on. So none of my code has gists anymore, but yes, I did that... And again, that was an experiment that I ran, so when I was doing it, I was kind of well aware of the downsides of it. Well, maybe more so after some time... But it was a thing that I wanted to try because there were also advantages to putting some coding gists... Because imagine you want to have a function shared between two projects, and you wanna do this in maybe a minute and a half; you don't have time to go through the whole process of creating a new Go package, and making it really nice... You just wanna do this really quickly, so a gist was perfect for that.

What actually made it work was that I had a widget in Conception that I can just press a button, and whatever I'd paste into a box would automatically become a gist, it will put it into my GOPATH... It would do everything in one button press. So that is the reason why it was kind of efficient to create a lot of code for sharing between projects at that time.

\[16:08\] Over time, I saw that it's great for the initial prototyping, it is not good for maintenance; it's bad that the gists have numbers, that's the package name... So it is not a good practice, and over time I refactored all the code that I needed, to have really idiomatic, nice package names, and be the kind of code that people should say "Yeah, this is something I can actually import in my project.

So yes, they did exist then, they no longer do exist, and if you see them, please delete them...

**Brian Ketelsen:** I think you should wear it with pride. Why not...?

**Dmitri Shuralyov:** I do, yeah.

**Carlisia Thompson:** I wanna now take a moment and discuss if it's gist \[djist\] or gist \[gist\]? No, I'm kidding... \[laughter\]

**Erik St. Martin:** Then we have to stop talking about gif \[gif\] or gif \[djif\]...

**Dmitri Shuralyov:** Yeah, yeah, it's the same question. \[laughter\]

**Carlisia Thompson:** But you know, I say gif \[gif\] and gist \[djist\], so it cannot be the same...

**Erik St. Martin:** Yeah, I do, too.

**Carlisia Thompson:** Right?

**Dmitri Shuralyov:** Yeah, it doesn't make any sense.

**Carlisia Thompson:** See? Let's not go there... \[laughter\] I do wanna talk about though -- because to me it seems like such a big deal what you're doing, taking time off to work on your preferred open source projects, the ones that you really wanna make sure happen, and there's so many projects you're involved with, but I do want you to talk to us about your top three, starting from the most important, the ones that you really wanna make happen, and why, and where are you at with that project, and are you getting help, is it far from being completed, what does completed mean...? So tell us.

**Dmitri Shuralyov:** Sure, sure. So I don't think I have a nice disconnect between the different projects; a lot of them are interconnected in some ways, and a lot of them are kind of these umbrella projects where there's maybe something higher level, and lower level. But let me say that right now I think that we're in a very interesting point in time; the language Go came out relatively recently... It has been almost like ten years now, but it is relatively new, and just maybe a few years back, on the backend we had a whole different set of languages that people could choose from, but on the front-end it's always been that JavaScript was kind of the only officially supported language, because that's the only language that browsers support, and that has started to change recently. One of the ways that it has started to change the most in my opinion is there is -- well, there was [asm.js](https://en.wikipedia.org/wiki/Asm.js), that technology first... Well, what is happening now is [Web Assembly](http://webassembly.org/).

In my opinion, this is a really awesome and kind of important point in time, because it means that hopefully soon more and more people can start to see that there's now the choice of what language to use inside the browser, what kind of technologies you use to develop your front-end stuff, and I really wanna see Go play a more important role here, because in my opinion, Go is just a really great language. I mean that in a general way; I don't think it's great for making web servers, even though it is, but it's great for many things.

I find that it's great even for doing front-end stuff, and I've been testing that theory for the last two years, I think, and I'm still very happy with it, so I'm continuing to push in that direction.

But because of that, I think Web Assembly and Go are important, so that is kind of what I'm thinking about, and one of my top priorities - I wanna make that as much of reality as possible over the next few years.

**Erik St. Martin:** Now, is there anything currently that's compiling or transpiling to Web Assembly from Go? Does [gopher.js](https://github.com/gopherjs/gopherjs) do that?

**Dmitri Shuralyov:** \[20:06\] So the situation right now is that if you want to write your front-end code in Go, you have a really good option, and that is Gopher.js, but Gopher.js goes directly from Go code to JavaScript. It has nothing to do with Web Assembly, and the thing about Web Assembly is that it's a very, very efficient, low-level bytecode, virtual machine, stack machine language, so the idea is that you really want to target that with a powerful compiler. So things like Clang, GCC, those kinds of compilers - they have a great opportunity to produce Web Assembly code. You don't wanna do it completely from scratch, by hand and so on, so what makes Gopher.js do what it does is that it basically completely revolves around Go and JavaScript.

If you were to try to add Web Assembly support to Gopher.js, you're basically starting from scratch. There's nothing really in it that helps you accomplish that job. So the way that I think this will happen is that hopefully maybe the official Go compiler will sometime in the future be able to target it, or maybe somebody will work on a separate project... But yeah, Gopher.js is not gonna help in this sense, because it's basically targeting JavaScript, and there's no point in trying to make it target something else.

**Erik St. Martin:** So basically everything you work on is kind of like these bleeding edge kind of thoughts and concepts... Because you've also been working on [GraphQL](https://graphql.org/) stuff for a long time, too...

**Dmitri Shuralyov:** Yeah, GraphQL is something that I've somewhat dabbled in recently, and I'm mostly done with that effort. What I saw - this happened about four months ago, three months ago... At that time, GitHub announced that their next version of the API (version 4) is going to use GraphQL. For anyone who hasn't heard of it, it's a technology from Facebook; they've kind of made it for their own API's, because REST wasn't really cutting it and they wanted to kind of push the envelope... So it's a way of building your websites' API's, and then kind of being able to make these really efficient queries that just give you the exact data you want, and nothing else.

When GitHub announced that their next API is using this, that's when I saw that like this is actually a technology that's now picking up steam, and it's kind of more useful to have support for it, and I saw that in Go. There were a couple packages that implemented the GraphQL server-side, so you could have your GraphQL server written in Go, but there was absolutely nothing for the client. That's when I saw that there was this opportunity to work on a client.

I've done a little bit of research and I tried a few things, and I saw that "Okay, if I spend maybe a couple weeks, I could have a working client." I saw that there was quite a bit of work, but I saw that I could do this in that amount of time, and I thought it was worthwhile to make it so that there'd be a Go client for GraphQL that people could use. That's sort of where things are right now, [I've created it](https://github.com/shurcooL/graphql).

It has some to-do's, but it's mostly done in the to-do's that can be completed over time. The basic functionality works, and anyone can use it.

**Carlisia Thompson:** That is very cool. GraphQL is pretty cool.

**Erik St. Martin:** Yeah, it's one of those technologies that always seems really fascinating, and I was always looking for the nail for that hammer...

**Dmitri Shuralyov:** \[23:50\] Yeah. So I was somewhat fortunate in that very recently - maybe just two weeks ago - I actually had the chance to use it for real in a project. Up until that point, I've only been testing it. I've written programs that would just do various things for testing purposes, never really using it to serve any concrete needs. But then, when I had a chance to actually use it, that was really nice. It was a pleasant experience.

One of the things about it, one of the properties of GraphQL is that it's very type-safe, and I really enjoy that property of Go. It was really nice to see it here, as well. So you have really great, strong type safety, and it makes things like autocomplete help you a lot more, and the code that you write, you can see that like this handles all the cases; there's nothing unhandled here. Yeah, it was just awesome to use it. It helped me.

**Carlisia Thompson:** I know there is at least one episode on the Changelog that talks about GraphQL, and I listened to it, and whenever I listen to somebody talking about it, or I read about it, I wanna use it immediately... But then I go back to good ol' REST. \[laughs\]

**Dmitri Shuralyov:** I really think that GraphQL is a great technology, it has a lot of strengths, but it also has some weaknesses that will take time for everybody to find ways to deal with. Nobody's gonna jump and switch to it right away this year; it's gonna take many years I think, and people will gradually switch over to it. It really makes the most sense if you're starting a new project to consider using it then. It's not so nice to take an existing one, that's already built around RESTful API's and try to rewrite that, or start adding GraphQL. It's not gonna help you as much... But it could. So it's okay if you don't jump on it right away; the more you wait, the more mature it's going to be when you do use it, but it definitely has some really nice properties compared to REST.

**Carlisia Thompson:** And talking about front-end stuff, because you know so much about this space... Sometimes, some applications need to be a back-end that interfaces with the database, and it needs a reporting layout on top of it. Is there any Go package that would do that?

**Dmitri Shuralyov:** When you say 'reporting', do you mean like kind of just render some front-end components that visualize whatever data is on the back-end, that's being served?

**Carlisia Thompson:** Yeah, something like the equivalent of an Excel front-end.

**Dmitri Shuralyov:** Oh, like an Excel front-end, I see.

**Carlisia Thompson:** Yeah. Not an Excel exactly, but you know... You choose fields and then you get a table, output of data

**Dmitri Shuralyov:** Well, I can't think of an existing project off the top of my head that's exactly like that; if you're really talking about like a database editing/table editing component, or...

**Carlisia Thompson:** No, just output.

**Dmitri Shuralyov:** Oh, just like visualizing it...

**Carlisia Thompson:** Exactly, yes.

**Dmitri Shuralyov:** Do you have some database output that you wanna visualize this way and you'd wanna use it?

**Carlisia Thompson:** Yeah, and I might wanna filter by fields.

**Dmitri Shuralyov:** I see. I don't know of an existing solution. I think you would have to maybe look for it or maybe just create it yourself, but the thing that does exist right now - or continues to be developed - is a project called [Vecty](https://github.com/gopherjs/vecty), and I think this has already come up on some previous episodes. It's kind of the equivalent of React, but written in Go and really specifically focused on Go... Because even though there have been project wrappers around React, to make it possible to use on the front-end, there's a lot of inefficiency in having to map to what they've created in React, which was targeting JavaScript specifically.

So Vecty tries to do things in a very Go-centered way, and you could totally use Vecty then to create some sort of front-end. You would still have to build it from the individual HTML tags and so on, to visualize all the things you want... But it will let you not worry about having to re-render some parts of the page as the data changes; it takes care of that, just like React. But yeah, you would have to be the person that works on it, or something like that.

\[28:12\] One of the disadvantages of trying to use Go on the front-end is that unless somebody else has created it, you probably have to do it yourself, and sometimes you have to really make this path that no one has traveled yet before. But that can also be a lot of fun, so it's kind of great if you're looking for that kind of challenge.

**Carlisia Thompson:** Yeah, because the other languages that are more mature, they have a bunch of packages that would do things like that.

**Dmitri Shuralyov:** Yeah, actually I saw an example of that very recently. There's an NPM package you can download, and it's basically a component that visualizes diffs, or patch files, and I was like "Well, you can just NPM install that, and it already exists, and it has all these properties that you can configure how it displays it." That's the kind of state that they're at - they have pre-made components for visualizing diffs. I thought it was interesting to see that, whereas I was building something like that myself from scratch, because it didn't exist yet.

**Brian Ketelsen:** I think we've talked about Vecty a time or two, but it's definitely the one Gopher.js front-end framework that I understand best, that clicks with me the best. I like Vecty a lot.

**Carlisia Thompson:** Do you know any project that uses it, Brian?

**Brian Ketelsen:** That's a good question. Now, off the top of my head I don't, but...

**Carlisia Thompson:** Well, it's easy to search on GitHub.

**Brian Ketelsen:** Yeah, I have some GitHub stars...

**Erik St. Martin:** Or Sourcegraph...

**Carlisia Thompson:** Sourcegraph, there you go. Sourcegraph is the best.

**Dmitri Shuralyov:** I actually use it in one of my projects. It's called Go Package Store, and it's a project for displaying updates for your Go packages in your GOPATH. Originally, it was this really simple application that would basically stream the HTML from the backend, and the browser displayed it as the HTML was being served to it. But that had some disadvantages... There were some things I couldn't do, so I ended up rewriting it so that everything renders on the front-end, and I used Vecty for that, and it works really well, in my experience. It enabled me to do all that, and some things I couldn't do before.

There was a feature request to add an Update All button, so... I guess people don't wanna click on updating every single Go package individually, they just wanna press that Update All button and it will take care of the rest for them. Now that button exists, and Vecty made it super easy to implement it.

It's also a package that is kind of in development, so there are still some changes that are being done to it, and they're always looking for ways to improve things or do things better. It's still somewhere in its medium milestones, I'd say, but it's definitely usable; you can start using it today, and it works well as long as you're willing to update your code, should something change.

**Brian Ketelsen:** One of my favorite examples of a Vecty app is the [Go Play Space](https://goplay.space/). Oh, it looks like somebody just posted that into our Slack, too. It's at [gtitHub.com/iafan/goplayspace](https://github.com/iafan/goplayspace), and it's like a Go playground that has lots of extra cool features. It's really slick.

**Dmitri Shuralyov:** Yeah, that's a really great example of it.

**Erik St. Martin:** So I started our timer a little late, so I think we've got time for probably a couple more things and then we can roll into projects and news. One thing I'd like to -- so at GopherCon this was kind of discussed, and I saw this morning too... So for everybody who doesn't know, while we're sitting here on this show, Gotham Go is currently going on, and I have FOMO.

**Brian Ketelsen:** Lots of it, yes.

**Erik St. Martin:** \[32:02\] I saw a couple of posts, especially with regard to [Steve Francia's](https://twitter.com/spf13) [talk about the state of Go](https://www.youtube.com/watch?v=l_FkVIPerzE), and there has kind of been like -- everybody's talking about Go 2 and things like that... What's your take on that? What would you like to see happen, what would you like to not see happen?

**Carlisia Thompson:** That's a great question, Dimitri...

**Dmitri Shuralyov:** Yeah, so I definitely have a very specific way in which I enjoy using Go, and that's - one of the ways at least... And that's I appreciate it for its simplicity; it gives you really well thought out basic building blocks and kind of lets you do the rest. That really works well with the way that I like to approach things.

The opposite of what I want is Go to becoming the next JavaScript, completely changing it, adding generics, and all these new features... I don't want to see new features, I just want to see stability and Go continue to be simple.

It can, of course, address things. Basically, the [talk](https://www.youtube.com/watch?v=h6Cw9iCDVcU&t=282s) that [Ross Cox](https://twitter.com/_rsc) gave about how they're planning to get to 2.0 sounds amazing to me. He said that it's not gonna be this major jump, but rather they're gonna work on everything that has to happen that is still backwards-compatible. So the next many years of releases will just be incremental changes to make 2.0 possible, but still be 1.x... 1.11, 1.12, and so on.

**Erik St. Martin:** Yeah, I really kind of like that approach... That it was very likely that it could be like "Well, 1.20 is now 2.0."

**Dmitri Shuralyov:** Yeah, and it's not like a big, dramatic change, it's like a smooth transition. That sounds really awesome. I think there is another talk that [Brad Fitzpatrick](https://twitter.com/bradfitz) gave about how as Go matures, it kind of becomes asymptotically more boring, but that is a great thing, and he definitely makes a strong argument for it, because the excitement happens at a higher level - it's the projects you build, it's the libraries you build, it's how you use Go; that's where the excitement is. But Go itself - it doesn't need to do more things.

When people think about like "Why not add these features? Why not do this and that?", you have to consider all perspectives, and one of the perspectives that is often overlooked is how this feature will interplay on the tooling; it's how it's going to affect the kind of things you could kind of use Go for, or how you could maybe generate code, or the kind of questions that you can answer about codebases...

One of the goals of Go is to be able to create code or projects that scale really well, and that's scale across complexity of the project, scale as more developers work on that codebase... And these are things where you don't necessarily want all the latest fancy features. It's the opposite. You just want it to do what it does really well, and continue to scale that way. I think that works really well.

**Erik St. Martin:** It's actually really interesting, because I just left Velocity, and Brendan Burns did a talk - and this was Kubernetes-focused, but it's along the same lines. He talks about the evolution of things, like we have a problem, we invent something to solve the problem, then it takes a while for that to kind of stabilize and mature, and for patterns to evolve from that, and then we built a layer of abstraction on top of it. Like, first there was machine code, then there was assembly, and we kind of built C and C++ on top of that.

The takeaway from his talk was really that the way we're building distributed systems even with Kubernetes was like doing it in assembly language. But I think that the point is still kind of the same with Go right now - it doesn't need to be fancy and brand new and all kinds of stuff crammed in there, because then it never matures to a point where we have consistent patterns where we can build that layer of abstraction on top, and the innovation always comes from the level of abstraction above. We can build significantly better systems now in languages like Go than we ever could in assembly.

\[36:19\] So yeah, to your point, we want it to stay fairly stable, and like "Let's figure out the patterns."

**Dmitri Shuralyov:** Yeah, absolutely. One of my favorite quotes, because I said that I value simplicity, so there is one quote that I found... It's by Frederic Chopin; he was this Polish pianist from the early 1800s; he said that _Simplicity is the final achievement. After one has played a vast quantity of notes, and more notes, it is simplicity that emerges as the crowning reward of the art_.

I really resonate with that, because when you're working on a project at first, when you don't quite know what it's gonna be or how you're gonna achieve it, you end up doing a whole bunch of things and you try to learn about it, and then once you have it finished, that's when you start to understand it better, and then only after all that insight you can actually maybe simplify it and come up with the final solution, which you can't have started with. That simplification was possible because you understood how things work.
Similarly with Go, many of the programming language features that it has, they seem to be from decades ago, but that's because it really took all those insights from the languages and the developments that have happened before it, and applied very carefully.

It's really interesting how that works, but yeah, you don't get to simplicity right away.

**Brian Ketelsen:** I've been reading a lot of code lately that is written in languages that have _Generics_, and I know that it's been said many times that Go was designed specifically to be a language that's easy to read and understand... And after dealing with these languages - and I'm not gonna mention any names, because this isn't a language war thing, but I do really appreciate the fact that Go doesn't have _Generics_, because it makes it truly harder to read what's going on.

**Dmitri Shuralyov:** Yeah, yeah.

**Carlisia Thompson:** I agree with that.

**Dmitri Shuralyov:** I've got another example of -- this was a feature request that went into an issue tracker, and I just wanted to share a perspective on how adding something that seemingly makes your life easier may not do that.

The feature in question was about being able to have build tags for test files, so you could exclude things or include things only when you're testing or not. Like right now it's just \_test, that's the only way, but the feature request was about also being able to use build tags. One of the ways that I really appreciate the current limitation - that you cannot use build tags for anything test related - is that I know whenever I'm reading code, I know very well that if I run the real code right now, and then if I run the test, it has to be the same thing. There's no additional code that can only happen when it's not in test mode.

Some of these restrictions, they basically make it easier to read and understand the code and make certain guarantees about it. So it really helps; the readability is definitely prioritized, and that's one of the best features of Go in my opinion as well.

**Carlisia Thompson:** Yes, I've worked with languages that did _Generics_, and I understand that makes some things simpler; I'm not sure if there are things that can only be achieved with generics, I'm not that knowledgeable, but I am still not convinced that anything that would be simpler by using _Generics_, or easier or shorter to write, would trump the readability feature of Go.

**Dmitri Shuralyov:** Yeah.

**Carlisia Thompson:** \[40:05\] I think it's a very personal thing, maybe.

**Dmitri Shuralyov:** Well, and we have to keep in mind that in programming languages and in software engineering as a whole we always have to make compromises. You can't have absolutely everything, so you have to make sure that you balance what you have and what you don't have, and sometimes it means saying no to things, sometimes it means not doing what you want, because you understand the greater benefit is worth it. We have to remember the positive side of saying no.

**Brian Ketelsen:** I think you can have everything. Isn't that what Scala is? \[laughter\]

**Carlisia Thompson:** Oh, gosh...

**Dmitri Shuralyov:** Yeah... I mean, actually C++ these days, all the latest revisions, the C++ 17 and the later ones - it's a great example of what happens when you have everything under the sun in it. Sure, you can do all those things, but I wouldn't want to review that kind of code or maintain it.

**Carlisia Thompson:** You don't have everything, because you don't have the readability. Come on!

**Dmitri Shuralyov:** Yeah.

**Carlisia Thompson:** Go read some C++... It's like, you have to be like "Let's look at the header to see what this does."

**Dmitri Shuralyov:** I wanted to measure this... So this morning I ran this program - it measures lines of code, and I saw that I have more than 100,000 lines of Go code in packages that I support daily. These are packages that if somebody has a bug or if it fails to build or something breaks, I would within 24 hours respond to that and follow up on it - I'd feel very comfortable doing that - and there's just no way I could deal with so much code written in something else, where I wouldn't have all these guarantees and the simplicity that Go offers me.

I feel like the ability to maintain so much Go code - that is enabled by Go itself. I couldn't have done it otherwise.

**Brian Ketelsen:** Amen!

**Carlisia Thompson:** I think lines of code in Go is misleading, because I think Go is very vertically dense, but if you read ten lines of code in Go, there's very little there. It's just there's a lot that's happening on the vertical space, but there is not a lot that's happening in that vertical space. So 100 lines of Go compared to 100 lines of another language - there's a lot less happening in that 100 lines of code in Go. But maybe it should be more, I'm not sure, but there's definitely a lot less because there's more going on vertically.

**Brian Ketelsen:** No, and that makes it easier to read.

**Dmitri Shuralyov:** Yeah, you can see everything that happens. It's all right in the code in front of you; there's no necessity to jump into, maybe there's a macro #define, or something else, or maybe an operator has been overloaded... None of that. You just know that it's exactly what you see.

**Carlisia Thompson:** Yes. And you are a maintainer for the Go language, right?

**Dmitri Shuralyov:** I'm -- let's see, what's the right word for it...? I'm a contributor, I believe. So I contributed to the project. I do have the reviewer maybe bit, so I can review code that goes in, but of course, they have it so that -- there's always like a package owner, so that person has to make the final call if a change that goes into a certain package goes in or not.

**Erik St. Martin:** So we're probably running short on time a little bit... Do we wanna jump into projects and news? I know there's one particular news item that we need to make sure we cover...

**Brian Ketelsen:** Absolutely.

**Dmitri Shuralyov:** Sounds good!

**Erik St. Martin:** Okay, so we should start off with the most important thing, which is there is security releases - [Go 1.9.1 and 1.8.4](https://groups.google.com/forum/#!msg/golang-nuts/sHfMg4gZNps/a-HDgDDDAAAJ). If you are running 1.9 or 1.8, please update. I think it was like two different security issues those solve for.

**Brian Ketelsen:** \[44:13\] Yeah, one of them was `net.smtp`, and the other was a nested Git vulnerability; if you tried to check out a Go package into another Git repository, you could cause a code execution exploit.

**Dmitri Shuralyov:** Yes, don't `go get` packages you don't trust until that update... And probably not after, either.

**Erik St. Martin:** Yeah, you probably shouldn't trust those anyway. Almost every language has that, because there's execution that takes place, like `go install` something.. You don't have control over--

**Dmitri Shuralyov:** Right. Actually, Go is better is a sense because when you `go get` something, it only does the download, the checkout, and then also maybe it builds it, but it doesn't actually run any of that code until you `go test` it, for example.

**Erik St. Martin:** Yeah, but you could have generators and things like that with build \[unintelligible 00:45:04.09\]

**Dmitri Shuralyov:** Right, so unless you `go generate`, you wouldn't be executing any of their code.

**Erik St. Martin:** I guess that's true, too.

**Dmitri Shuralyov:** So this bug was really the only way to have somebody where you could `go get` and be compromised. As far as I know, there's no other way to do it.

**Erik St. Martin:** Alright, so interesting projects...

**Brian Ketelsen:** [Skylark](https://github.com/google/skylark) was released this week, and that looks interesting because it's a light version of Python, but it's written in Go, and it looks like it's gonna be used for [Bazel](https://bazel.build/), which is Google's build tool, to replace the original version of that scripting tool. Now I don't remember what the Python version is called, but it looks like a really interesting project, because it's embeddable in Go, so it could be used nicely for building DSL's, for building configuration languages etc. The original Python version was also called Skylark.

**Erik St. Martin:** There was a new [Lua interpreter](https://github.com/milochristiansen/lua) too that came out in Go.

**Brian Ketelsen:** There was.

**Erik St. Martin:** I have to pull up a link... I'll make sure it's in the show notes, but there was a couple a few years ago that I remember using... But yeah, I had seen something come out, there's a new one.

**Dmitri Shuralyov:** This one I think it's targeting Lua 5.3, which is one of the more recent versions, and I think the previous ones have maybe been through that, so that's the exciting part... Because most people actually wanna use the later version.

**Erik St. Martin:** Nobody wants to use old languages...

**Dmitri Shuralyov:** Well, they currently changed a lot between the point releases, so it's almost like a new major version actually.

**Erik St. Martin:** Yeah, I actually haven't kept up with Lua too much. It's interesting, because earlier in my career I used a lot of Lua, now not so much.

**Brian Ketelsen:** So the question for you is why did you -- oh, somebody already posted the link in our Slack. These guys are on it! \[laughter\]

**Erik St. Martin:** Yeah, I was just pulling up the link, too...

**Brian Ketelsen:** So why did you use a lot of Lua, though? What was the thing, what was the problem you were solving with Lua? For me it was scripting inside NGINX with something like OpenResty...

**Erik St. Martin:** Yeah, so there's that, but then there's also things where in your application you might have some sort of DSL, you need to create rules, engines or something like that, and maybe you don't want to have to build your own things, so you just kind of support Lua.

And I know video games use it, too.

**Dmitri Shuralyov:** Yeah, that's where I've seen it used most. That was a while ago, but it was one of the best use cases for it, just scripting everywhere.

**Erik St. Martin:** It's just super fast to embed in something and give somebody close to a real language to work with, and there's pretty easy ways to sandbox it where the code they execute doesn't really have access to the full implementation.

**Brian Ketelsen:** \[48:08\] I would love to see some code examples of a Go application that embeds a Lua scripting language to do stuff. That's my open challenge to you, internets. Send me an example of that. I wanna see it.

**Erik St. Martin:** Now I'm gonna have to come up with something. I'll think of something.

**Brian Ketelsen:** You don't have to make up one, I just wanna see a real life application.

**Carlisia Thompson:** Not a fake one, Erik. A real one.

**Dmitri Shuralyov:** If they exist.

**Erik St. Martin:** Alright, so another cool tool that I saw come out - I'm guessing the name is called Colly (the dog). It's at [gitHub.com/asciimoo/colly](https://github.com/gocolly/colly). It's like a web scraping utility written in Go, and you can kind of visit links and things like that. That looks really cool. Because a lot of people have been using like Python for this, so there's some good tools like Scrapy, or something like that... There's another one that's really common for doing web scraping.

I wonder whether we're gonna get some Capybaras and things like that built on top of that.

**Brian Ketelsen:** That'd be cool.

**Erik St. Martin:** So aside from that, in full disclosure, I have not watched this full video yet - I've been traveling a bunch - but Tyler Treat gave a [talk](https://www.youtube.com/watch?v=DJ4d_PZ6Gns) at StrangeLoop titled "So you wanna go fast?", and that was actually pretty interesting, getting into the \[unintelligible 00:49:39.11\] things of that nature. We will drop a link to that video in the show notes; that's worth a watch, at least to the point that I've watched it so far.

**Brian Ketelsen:** Yeah, I'm the same - I watched some of it, and it looked really good.

**Carlisia Thompson:** I'm definitely gonna watch it.

**Brian Ketelsen:** I've not watched all of it.

**Erik St. Martin:** He is super smart, so I assume the rest of it is also good.

**Brian Ketelsen:** Yeah, based on his historical blog posts and other talks, it's probably guaranteed to be a great presentation, so... You won't do yourself any harm by watching it.

**Erik St. Martin:** Too much travel -- and see, I just went to drop the link in the channel, and Florin is already on it.

**Brian Ketelsen:** Yeah...

**Erik St. Martin:** Why does everybody even need us for anymore...?

**Brian Ketelsen:** Freakin' [Florin](https://twitter.com/dlsniper)... \[laughter\]

**Erik St. Martin:** Alright. So let's roll into \#FreeSoftwareFriday. Does anybody have anybody they wanna give shoutouts to this week?

**Brian Ketelsen:** I do.

**Erik St. Martin:** Alright, let's hear it.

**Brian Ketelsen:** So I decided I was gonna finally learn tmux. I've been resisting tmux forever, because it just annoys me that there's one more layer of things on top of the things that I already have to remember in Vim, so I've been avoiding it... But I found - and I'm not even gonna try to pronounce it; I'll spell it - [Byobu](http://byobu.co/) by Dustin Kirkland, and it's a pretty wrapper on top of either tmux or Screen, and it's pretty nice. Just a handful of keyboard commands that you really need to remember, as opposed to the billion crazy tmux combinations... So I'm all about that.

**Carlisia Thompson:** Let us know how that went... \[laughs\]

**Erik St. Martin:** What's that?

**Carlisia Thompson:** Let us know how it went.

**Brian Ketelsen:** I will.

**Carlisia Thompson:** I wanna give a shoutout to _Go Examples_... How do I say this in the right way? The ability to write examples in Go.

**Erik St. Martin:** Yeah, that's part of the documentation...

**Carlisia Thompson:** Yeah.

**Dmitri Shuralyov:** Oh yeah, the _godoc_ feature...

**Carlisia Thompson:** Yeah, so you can write tests, and you can write examples - which I actually only found out a couple months ago. It makes me so warm and fuzzy inside... It's one of those things. I'm in absolute love with it. And today, I got to write my first one, and I think I'm gonna be obsessed about it.

**Dmitri Shuralyov:** Nice.

**Brian Ketelsen:** That is awesome.

**Dmitri Shuralyov:** That's a great feature.

**Erik St. Martin:** \[52:01\] I absolutely love them, because they ensure that it always runs, right?

**Carlisia Thompson:** And it runs! I love that! I love it!

**Brian Ketelsen:** And they're tests. That's the best part, they're tests. So if your examples don't pass, your tests don't pass.

**Dmitri Shuralyov:** Yup.

**Carlisia Thompson:** Yeah!

**Erik St. Martin:** And then they are basically breaking the build if you break the API. Your examples don't match anymore.

**Brian Ketelsen:** Yup.

**Carlisia Thompson:** And it's so helpful for people who don't know your codebase. You can populate a type, and run, and the output is right there; I mean, you don't even need to run, it's just right there on the file. So cool.

**Erik St. Martin:** We should look at who implemented that, just so we can give them a huge shoutout.

**Carlisia Thompson:** Yes. Whoever you are, you're amazing. Thank you.

**Brian Ketelsen:** You know, odds are pretty good it was Brad. All the outside the box stuff in the Go team comes from Brad, let's be honest. You can quote me on that on Twitter, go ahead. It's okay. He's on parental leave right now.

**Dmitri Shuralyov:** Yeah, you can tell he's missing. It's kind of -- he's not around.

**Brian Ketelsen:** It's so quiet...

**Dmitri Shuralyov:** Well, I can tell, at least.

**Brian Ketelsen:** He was the one that pushed for the patch release for the security update. That probably wasn't going to happen if he hadn't pushed it too hard. So even on paternity leave, even with a newborn, Brad's taking care of business. Shoutout to Brad! Shoutout to baby. We like baby gophers.

**Erik St. Martin:** Always.

**Dmitri Shuralyov:** And you know, he's growing up surrounded by tons and tons of gophers.

**Brian Ketelsen:** It's kind of awesome.

**Erik St. Martin:** Yeah, my household has so many gopher things in it, it's not even funny. People have to think we're like the oddest family ever.

**Dmitri Shuralyov:** Well, now I feel pretty good, because I've got a bunch of them, too.

**Erik St. Martin:** Like, "What is their obsession with cartoon gophers? I don't get it." \[laughter\]

**Dmitri Shuralyov:** I've got a project in mind.

**Brian Ketelsen:** Awesome.

**Dmitri Shuralyov:** So this is [GopherCI](https://gopherci.io/) by Bradley Falzon. He made this continuous code quality CI system of sorts, and it's specifically for Go. It will run a bunch of the static code analysis Go tools, like `staticcheck`, `govet`, `gosimple` - all the ones that are made by the community, and of course, the official ones. The idea is that it's very simple to use; it's easier to use than Travis CI, for example.

You basically enable it for your GitHub username, and then all your Go projects will start to benefit from it. When you push a pull request or somebody else makes one, if there are any issues found by those tools, it will kind of leave a comment and let you know.

Bradley Falzon worked on creating this, and he's developing it further. It's just a really awesome Go project, so I'm really glad that it exists, and thanks to him for making it.

**Brian Ketelsen:** Yeah, it's crazy cheap, and we've gotta give a shoutout to all the gophers down under... Down where the toilets flush in the other direction, thanks Bradley.

**Dmitri Shuralyov:** \[55:11\] And I'm also a huge fan of the fact that he made the project open source. Basically, the way it works is if you want to run it yourself, you can just do that, it's open source. Download the code, put it on your server and run it. But if you want the convenience of having a hosted version running your code, you pay the $4/month for the personal version or something like that, and you don't have to do it yourself. It's kind of like the best of both worlds, in my opinion.

**Erik St. Martin:** Yeah, and it's evolved quite a bit. We actually have him on the list of people we're gonna try to \[unintelligible 00:55:43.02\] on the show to talk about it.

**Brian Ketelsen:** Very cool.

**Dmitri Shuralyov:** Nice. Yeah, so I watched the repository where he develops the new features, and it's just really cool to see the things that are happening. He makes all the code really high quality before merging it, so it's great to be able to do that.

**Erik St. Martin:** For mine, I don't have anything new that people haven't heard of before, but it's new to me... So I'm gonna give a shoutout to [VSCode](https://code.visualstudio.com/) and [Ramya](https://twitter.com/ramyanexus) and all the people who contribute to the Go plugin.

**Brian Ketelsen:** Awesome!

**Erik St. Martin:** Because I promised her when we had her on the show just before GopherCon that I would give VS Code a solid go, because I've been a Vim user for so long, and the past couple weeks I've been using that kind of exclusively for both logging and writing code, and it's pretty sweet.

I'm undecided if I'll stay, because I have withdrawals from Vim, but if I left Vim for anything, it would probably be VS Code.

Did anybody have any more shoutouts, or do we wanna wrap this thing up?

**Carlisia Thompson:** I think we're done.

**Dmitri Shuralyov:** I can do one more quick one...

**Carlisia Thompson:** Yeah!

**Dmitri Shuralyov:** This is more for an open source contributor. This will be to [Glenn Lewis](https://github.com/gmlewis). He helps a lot with the go-github Go package - it's the Go client for GitHub's API. He basically makes sure that the PR's get reviewed and merged, and without him I'm not sure what that project would do, so huge thanks for all his work. It's Glenn Lewis.

**Erik St. Martin:** Awesome.

**Carlisia Thompson:** Dmitri, just please add a link to that.

**Dmitri Shuralyov:** Oh yeah, good idea.

**Carlisia Thompson:** Thanks.

**Erik St. Martin:** We'll make sure to get all this stuff that we mentioned into the show notes. So with that, we're probably about out of time, so we're gonna wrap the official show up, and then as always, we might hang out and take some questions from the live listeners. So if you happen to be around at 3 PM on Thursdays (Eastern Time) and you join us in the Slack channel, you get to kind of interact with us before and after the show.

With that, thanks everybody for being on the show. Huge thank you to Dmitri for coming on and baring with us through all of the delays and rescheduling and reworking the way we record episodes temporarily...

**Dmitri Shuralyov:** Hey, I'm really glad to be here. Thanks for having me!

**Brian Ketelsen:** Thanks so much for coming, Dmitri.

**Erik St. Martin:** You can find us on Twitter @GoTimeFM, or GoTime.fm online. If you wanna be on the show or have suggestions for guests or topics, the best way to do that is file an issue on our GitHub repo, which is [ping](https://github.com/GoTimeFM/ping). With that, bye everybody. We'll see you next week.

**Brian Ketelsen:** Bye!

**Carlisia Thompson:** Bye! This was a great show!

**Dmitri Shuralyov:** Bye!
