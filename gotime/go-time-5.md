**Erik St. Martin:** It's Go Time! A weekly podcast where we discuss interesting topics around the Go programming language, the community and everything in between. If you currently write Go or aspire to, this is the show for you.

Alright everybody, welcome back for another episode of Go Time. This is episode number five. Today we have Brian Ketlesen here, say hello Brian.

**Brian Ketelsen:** I'm not here though, I'm in San Francisco this week. Hello!

**Erik St. Martin:** That's very true, you're part here. You're not here anyway - this is all virtual studio.

**Brian Ketelsen:** That's true.

**Erik St. Martin:** We also have Carlisia here.

**Carlisia Pinto:** I am also not there, I am in San Diego. \[laughter\] Hello everybody.

**Erik St. Martin:** And today on the show we have a special guest with us, Sarah Adams, who most of you know as an engineer, speaker, and also the founder of Women Who Go.

**Sarah Adams:** Hi!

**Erik St. Martin:** How are you, Sarah?

**Sarah Adams:** I'm listening to you from San Francisco.

**Erik St. Martin:** So is everybody in California but me today?

**Brian Ketelsen:** That's correct.

**Sarah Adams:** Sounds like it.

**Erik St. Martin:** I knew I was getting left out here.

**Brian Ketelsen:** You have some serious FOMO going on, Erik. Fear of missing out.

**Erik St. Martin:** But, see, I'll be having dinner before you guys, so I have less work when we're done.

**Brian Ketelsen:** You know, the problem with being out here is that my kids start sending me text messages at three in the morning.

**Sarah Adams:** Oh, no...

**Erik St. Martin:** Yeah, that's always rough, to get synced up with the kids and family. You think three hours isn't that long, but it's a lifetime.

**Brian Ketelsen:** It's a lot, it is.

**Erik St. Martin:** Like, everybody's going to bed before you're having dinner, and everybody's having lunch when you're waking up.

**Brian Ketelsen:** We've got a lot to talk about this week, I think we should dive in. There's a lot happening.

**Erik St. Martin:** Yeah, so last week we talked a bit about the 1.7 stuff and some of the performance change improvements there, and over this past week Dave Cheney put together some visualizations of that which really kind of blew my mind, because I knew there was improvements, but we've cut more than half the difference between 1.4 and 1.6 out of the way, so...

**Brian Ketelsen:** Yeah, we're halfway back to where we were, which is fabulous, because Go has really great compile times, and it's nice to see that coming back down to... Insanely great.

**Erik St. Martin:** And I'm looking forward to seeing it less than 1.4, that'd be a great achievement. Imagine being even faster than 1.4 was.

**Carlisia Pinto:** Is that even possible? Is that on the cards, though?

**Brian Ketelsen:** Anything's possible with SSA. Have you seen the team working on that? The brain trust will make it happen, I have confidence.

**Sarah Adams:** Who's working on it?

**Erik St. Martin:** I'm trying to think of who's specifically working on that functionality... Do you remember, Brian, who the specific team was working on the SSA stuff?

**Brian Ketelsen:** I don't know the whole list of team, no.

**Erik St. Martin:** We'll look that up and then we'll put it in the show notes.

**Brian Ketelsen:** So other big news this week, the context package is now going to be in standard library. This is huge, huge. I'm so excited about it.

**Sarah Adams:** Yeah, I'm really excited.

**Brian Ketelsen:** And the way that they've engineered it is really nice too, so that if you're using 1.7, it will use the one in standard library, and if you're not using 1.7, it will continue to use the one in the Net package. That's really awesome.

**Erik St. Martin:** Yeah, that's fantastic. Because gRPC and all that stuff depends on the context package, and we've been using that for -- I don't even know how long that's been floating around. I'm really glad to see it kind of pulled in. Sarah, were you saying something about the context package?

**Sarah Adams:** No, I'm just excited for it to be in the standard library, just a cool addition.

**Erik St. Martin:** And hopefully a lot more people will start using it as part of their packages where they expose network requests and things like that, because that's really the power in it - having the context forwarded along, so that you can stop it anywhere in the process.

**Brian Ketelsen:** Yeah, so all you library developers out there, if you're not putting context as the first parameter of your public functions, now is a great time to start doing that, please. I wanted to say please, I don't wanna sound too bossy. I can come across that way sometimes.

**Carlisia Pinto:** And from the little experience that I have with Go, I see a lot of times when people use other network packages just so they can get the context, and I would even do that, because I don't wanna do that stuff by hand. But now that it's in the standard library, I wonder how it's going to impact the usage of the external libraries. Or if people are just gonna have to keep adding more features to make it more attractive for people to use them.

**Erik St. Martin:** But is it really a competition, though? I think at the end of the day it's about writing good quality software, that's readable, and I think that by having external libraries that people really like - and we kind of get consensus on these patterns - I think it's okay to pull that stuff in. Because not everybody's gonna be aware of these things, despite how much visibility we think they have, or as people find stuff in the standard library - that's generally where people look first, so I think it's a hard debate. We're kind of pulling away users from some standard library, but I think that the library owners are probably glad to see it there. I think it will get more love in the standard library, too.

**Brian Ketelsen:** It'll certainly be easier to use.

**Sarah Adams:** Yeah, I wonder how the Gorilla toolkit is gonna change because of this, because they've implemented their own network context, I think. I haven't used it in a while...

**Brian Ketelsen:** Yeah, Gorilla has its own context, and every other mux on the planet has its own context; I'm really excited about them not having their own contexts. I hope that they all converge to use the standard library context.

**Erik St. Martin:** That's actually really interesting, I hadn't even considered that. I mean, I've used the Gorilla mux in the past couple years, but I don't think I've used anything else from the Gorilla stuff in a while. So that will actually be really interesting to see how that's adapted to this.

**Sarah Adams:** Yeah, and I think the Gorilla mux even imports its own Gorilla context, within the mux package. So it will be interesting to see if they go forward with the Go standard library context.

**Erik St. Martin:** We should email them and ask.

**Brian Ketelsen:** Open an issue on the GitHub repo.

**Erik St. Martin:** Maybe one of their developers is one of the two listeners. \[laughter\] Alright, so one of the other projects that I've been using recently is vendor check. I noticed that they've got an update that now tells you your deprecated dependencies, which is awesome. So basically it goes through your vendor path; it's just a -u flag, and it will tell you all your unused \[cross-talk 00:07:55.09\]

**Brian Ketelsen:** This is interesting, because we've talked about the blog post that this originated from in our last episode, the CloudFlare blog post about creating the simplest possible SSA tools. Vendor check was an extension of that, and it's nice that it's getting some very usable features; it will be good to get that vendor directory pruned as needed.

**Carlisia Pinto:** It's also almost like vendor check should be side by side with fmt.

**Sarah Adams:** Yeah, and go imports.

**Brian Ketelsen:** Yeah, it's definitely a must-have tool.

**Erik St. Martin:** Yeah, and I think that the vendor stuff is probably early for that stuff to kind of get pulled in, at least adopted the Go team, right? Because it's only been recently that there's been this agreement that maybe the Go tooling should handle vendoring more, so it will be interesting to see how much they think should be pulled in. But I imagine we'll start seeing tools like Vim-Go and all that jazz incorporating in this, in something like the meta tooling.

**Carlisia Pinto:** Exactly.

**Erik St. Martin:** Like, there's a Go meta-linter and stuff like that that runs all the suite of different tooling.

**Carlisia Pinto:** I can totally see that happening, too.

**Brian Ketelsen:** So on that note, on the idea of having vendor tooling being built into Go itself, I know that Andrew Gerrand was talking about sponsoring a talk or a panel discussion on the hack day at GopherCon on the 13th of July, for an hour or so, talking about packaging and vendoring. So if you're got strong opinions on that, you might wanna come to Denver in July and get together and talk to the Go team directly about package management and vendoring. That would be a great opportunity to have your voice heard.

**Erik St. Martin:** And strong opinions in general. I know that they're wanting to do kind of a collaborative session with big Go users and kind of seeing what pain points are there and how people feel that the Go team can ease those pains, and make it easier to adopt and use Go.

**Carlisia Pinto:** And on that topic, there is an issue opened on the Go repo where they just pull in everybody's opinion into one place - at least they put links to things, and there's probably good to read through if you are going to go to this event and discuss, so we have all the information...

**Brian Ketelsen:** It's a really long issue.

**Carlisia Pinto:** Yeah, it's huge. But it's not the Go team endorsing any way or another; it's just gathering everybody's opinion in one place, and giving it as it is - "Okay, this is what people are saying. Let's just have it here, so we're not replicating this all over the place, so we have a starting point. We don't have to go back and talk about things that were already talked about." So it's all in there, very interesting.

**Erik St. Martin:** I ought to pull that up when I have a weekend.

**Brian Ketelsen:** It's longer than a weekend.

**Erik St. Martin:** I can only imagine.

**Carlisia Pinto:** Yeah. It's not light really, it's very thoughtful expressions of how things could be done technically. I'll find the link.

**Erik St. Martin:** Awesome. So on a sad news side of things, did anybody see the email that Rob Miller sent out to the Heka mailing list?

**Brian Ketelsen:** I did.

**Carlisia Pinto:** No, what?

**Brian Ketelsen:** Very, very sad.

**Erik St. Martin:** Yeah. So Rob Miller works for Mozilla on a tool called Heka. How would you best describe Heka, Brian?

**Brian Ketelsen:** Heka is a stream processing tool that you can use to take inputs and process them and munge them and do strange things with them and send them back out to other places. One of the most common use cases would be log aggregating and management; it's significantly more complicated than that, but that's probably the best use case for it - moving logs from here to there.

**Erik St. Martin:** Yeah, it's basically like a pipeline, and there's different inputs you can swap out - collectors and emitters and things like that, so you can take inputs from various types of systems, and you can output to various types of systems. There was a really interesting project, and he presented it at GopherCon 2014. By all accounts, it seems like people are using it, but I think he's been primarily the core maintainer of it, and they're using something else internally at Mozilla, and he hasn't had the time, and he's going to continue to have less time. So I think that that's probably going to be -- I don't know whether 'deprecated' is the right word for it...

**Brian Ketelsen:** Discontinued Mozilla support perhaps, or Mozilla sponsorship.

**Erik St. Martin:** ...and I think that they're open to somebody else taking over the project, but they don't have the time to help facilitate that takeover either, and I think he expressed some concerns about even the patterns it was designed under; the way they were using channels wasn't quite hitting the performance levels that they were wanting, and things like that. He kind of believed that there'd be some heavy refactoring. Maybe we can get him on the show and talk about it a little bit more in depth, what his thoughts are.

**Brian Ketelsen:** That'd be a great idea. We'll link to the mail list announcement in our show notes. It's way too long to discuss here, but the main takeaway from the email that he sent out was that the refactoring required to make Heka perform significantly better than it does now, which is actually really solid performance. But to get to that next level it would require less use of channels, and that's probably a good show topic for us at some point, talking about the performance of channels under significant load, and when channels are great and when they aren't.

**Carlisia Pinto:** That would be an amazing topic, I'm sure a lot of people can benefit. I can benefit from it.

**Erik St. Martin:** So before we get into some discussions about all the things that Sarah is doing these days, we typically go through some interesting Go projects, because Brian is full of -- just this encyclopedia of projects. But before we go into that, we don't need Brian anymore. Have you guys seen the LibHunt thing that was going around?

**Carlisia Pinto:** No.

**Erik St. Martin:** There is now the Go LibHunt. It's go.libhunt.com, and you can basically browse around, categorize projects and libraries in Go, and then kind of rank them.

**Brian Ketelsen:** You know, just because somebody lists a bunch of libraries in Go does not replace my curation, Erik. \[laughter\] The added value that I bring every week to the curation of cool projects is what's important here. You cannot replace me with a bash script. We can try.

**Sarah Adams:** Brian, what's your process? How do you find the Go projects?

**Brian Ketelsen:** Before I go to bed every night I look at the GoLang Reddit thing just to see if there's anything interesting there; I don't get a lot out of Reddit these days, but I have a special query on GitHub that I use to see recently updated or recently created Go projects, and I just scan through them, looking for things that sound exciting that I haven't seen before.

**Erik St. Martin:** And that query can be yours for just three easy payments of 59,90. \[laughter\]

**Brian Ketelsen:** Exactly. And actually I'd be happy to post that query in the show notes too, because there's nothing magic to it; it's just a really long GitHub query.

**Sarah Adams:** I had an app - it wasn't called StumbleUpon, but it was something like that and it acts like StumbleUpon, where you can look through and you can filter. It's like a Go project library, but it looks through GitHub and helps you stumble upon Go projects that are relatively popular. It was pretty cool.

**Brian Ketelsen:** That's nice. All of those queries are prone to error, because if GitHub's detection of the project type isn't accurate because maybe you don't have any Go files in the route - or whatever they use to detect the projects - they might be excluded.

**Sarah Adams:** Is that common?

**Brian Ketelsen:** It is. I've seen projects that don't list themselves as the primary language that they are just because whatever GitHub uses to detect that was thwarted by maybe their directory layout, or whatever.

**Erik St. Martin:** I'm not sure how that detection works. I mean, what percentage of the codebase is in what... Because if you had, say, [Grafana](https://grafana.com/) that's a bunch of Go, but it's a whole lot of web stuff too, HTML, CSS and JavaScript too, so is there more of one than the other, then does that cause false positives .

**Carlisia Pinto:** I have always wondered that too, if somebody knows, please...

**Sarah Adams:** You can also specify when you're creating a repo what language the project is.

**Carlisia Pinto:** Really?

**Sarah Adams:** Well, I think it just helps you then generate the git-ignore.

**Carlisia Pinto:** I've never seen that.

**Brian Ketelsen:** Interesting.

**Sarah Adams:** But I'm not sure if they keep that data...

**Brian Ketelsen:** Yeah, I wonder if they store that as metadata. I've never done that specifically, so I don't know.

**Erik St. Martin:** Like Sarah said, I think I've only used it once just to generate the git-ignore.

**Brian Ketelsen:** So now that Erik has tried to replace me with a website... \[laughter\]

**Erik St. Martin:** The pressure is on...

**Brian Ketelsen:** Yeah, the next segment of our show is where we each talk about interesting Go projects that we perhaps stumbled upon in the past week. I'll start, since I'm bringing the most value here - I'm really angry with you Erik now, this isn't gonna fly... So the thing I found this week that I thought was really cool was a combination of one that I talked about previously, which is Minio, an S3 object storage clone that you can deploy on your own hardware or on the cloud somewhere, that gives you an S3-compatible object storage pool, and another project that is awesome, which is Kubernetes... So the Deis team - Deis is a platform as a service on top of Kubernetes - they created a Minio storage plugin for Kubernetes, so you can use Minio S3 storage for your Kubernetes cluster, and it's got some really tight integration with Kubernetes. It looks really awesome, so two great tastes that taste together again, which is Minio and Kubernets. That's at Github.com/deis/minio

**Erik St. Martin:** So I will go next. I saw this a while back, and I think it was really in its infancy, which is Lime Text, which is like a Sublime Text clone, but written in Go, and it's actually been coming along quite well. I was actually curious whether Carlisia had tried it, because I know you're a Sublime user, right Carlisia?

**Carlisia Pinto:** No, I'm not.

**Erik St. Martin:** Oh, I thought you were a Sublime user.

**Sarah Adams:** I use Sublime.

**Carlisia Pinto:** I used it, but I've stopped using it long ago.

**Sarah Adams:** And I haven't heard of Lime.

**Erik St. Martin:** Have you checked it out, Sarah?

**Sarah Adams:** No, I haven't. I'm looking at it right now.

**Erik St. Martin:** Yeah, so this is actually pretty interesting. I mean, you can't get me away from Vim, but I feel like if you could, it might be Sublime, and this makes it kind of enticing, because if I wanted to modify the editor, I could actually do it in Go.

**Brian Ketelsen:** Well, it's interesting from another perspective, in that it's almost modeled on the Emacs and Neovim server and client model. So the Lime Text app has a backend, and then it can have multiple frontends. You could actually use a command line app to use Lime Text, or they've got a Qt-based editor for a graphical environment, but the backend stays the same. So that makes it unique I think, in terms of Go-based text editors. It certainly made it more interesting to me.

**Carlisia Pinto:** I do wanna check it out. Yeah, I'm an Atom user - I use it with the Vim plugin, but this looks cool.

**Erik St. Martin:** I don't know why I thought you used Sublime, but now I remember Atom, because you did bring up a new set of plugins for Atom. It wasn't in the last episode, but the one before.

**Carlisia Pinto:** Yeah. All these editors look a lot the same in a lot of ways, so...

**Erik St. Martin:** I can't keep up with all the new editors.

**Carlisia Pinto:** Sarah, do you have a Go project you wanted to mention?

**Erik St. Martin:** Feel free to say no.

**Sarah Adams:** No, I didn't prepare anything.

**Carlisia Pinto:** Yeah, so I'll go next. I found this HDR histogram, and it's not something I have used, but I can see myself using it. It keeps track of a simple count of basically incoming requests - a simple count of incoming requests that you have. You can specify what it is that you wanna look at over time.

**Erik St. Martin:** So this is showing like a requests-per-second over time, or...?

**Carlisia Pinto:** I think it's requests per seconds.

**Brian Ketelsen:** I've used this package before, I think it's more generic than just requests per second. I think it's actually just a histogram package that you can use to collect metrics about any particular event, and then present them in a histogram. So a request per second is a great example of how you would use it if you were collecting metrics on a website.

**Carlisia Pinto:** Yeah, exactly. It looks like that. It's configurable. They have a Go version of this, and the way I found about it and why it's relevant is because I saw a talk by Gil Tene on Strange Loop from last year, and he was talking about how network graphs usually show us the 95 percentile of the worst response times that you get. And he goes on to talk in detail about how meanless that is, and how much it hides the information that you really want to see, which is the actual count, the actual max. He also goes on to talk about the difference between service time and response time, and it's fascinating because - I don't know, I don't usually think about it in those terms, but it makes total sense. It's a fascinating talk, and if you want to monitor your stuff and what you're using is the usual commercial tools that are out there, maybe you should check this out. We will have links.

**Brian Ketelsen:** Will you put that link in the show notes? That sounds like a great talk.

**Carlisia Pinto:** Yes, I already did. There it is.

**Brian Ketelsen:** Perfect.

**Erik St. Martin:** So Sarah, one project that we would love to hear you talk about is your Test2Doc. That's really cool.

**Sarah Adams:** Thanks. So I got this idea like a year and a half ago. I was maintaining a ReST API; I was working for a company called Sproutling, we were building a web baby monitor, so I was building a ReST API that had multiple clients. We had custom hardware, which was sort of a base station that was monitoring room temperature in the baby's room; we had an iOS app, which was the second client, and we had a web app, which was the third client.

So we had multiple developer teams working on each of these, and since I was the only person responsible for the ReST API - well, not because of that, but I needed to have API documentation, of course. So I started using [Apiary](https://apiary.io/), because I liked the format. You can write it in markdown, and the API blueprint specification was open source, which is nice. For larger changes I kept adding an endpoint, or deleting an endpoint - those were easy to remember to update the documentation, but for smaller things like deleting an attribute, all the way down to deleting a column on a database table would trickle up to the endpoint change, which would mean the field was missing on the JSON response.

Those smaller changes started to add up a lot, and so my documentation was often really inconsistent with the actual API. So I forked to a tool called [Dredd](http://dredd.org/en/latest/), which is meant for testing new documentation against your actual API. It was pretty good, but I had to periodically just run this and update all of the documentation. I started to get really frustrated, because my unit tests were all there; if only my fellow engineers could read my Go unit tests and the status documentation, that would have worked great. So I realized that all of the information that you need for API documentation is in the endpoint Hammer test, so I decided I was just gonna record the requests and responses as the test ran, and put them in a markdown file in the appropriate format, and then be able to generate all of my API documentation, host it, and have everything be automated, so I would never have to worry about out of date documentation and angry developers, people asking me questions and things like that. So that's sort of where that came from.

**Brian Ketelsen:** So when you're writing your tests, how much differently do you write your tests to make the documents look appropriate? Do you have to...?

**Sarah Adams:** Not at all.

**Brian Ketelsen:** Not at all?

**Sarah Adams:** Yeah, it's super simple. There's maybe six lines of code that you have to add. Essentially, if you have really good, really thorough unit tests, like testing for user passes nil, and user passes opposed with no request data, and all of that - all of those tests are captured, and so you can see in the documentation "When you pass nil, this happens". So the tests are really just like "If this is the request that the user sends, what should the appropriate response be?" And that's exactly what documentation is also.

**Erik St. Martin:** That's really interesting. So how do you have that implemented? You're statically analyzing the tests?

**Sarah Adams:** No... Actually this is what - I wrote this bit a while ago. But I think I used the HTTP tests.

**Erik St. Martin:** They're like response-recorders, and stuff like that?

**Sarah Adams:** Yeah, so I actually paused the test right before the actual test executes, and copy the request body from the request object itself and put that into a buffer somewhere, then execute the tests and copy the response data before we actually returned, and put that into the buffer as well. And then when the full test suite is finished, flush that buffer to a file, in the appropriate format. And there are some other intricacies, like pulling out requests, URL variables... In the documentation, for example if you're testing "Get widgets with ID1" and then "Get widgets with ID2", those would naturally be two separate URLs; they're trying to figure out how to match those two together, and notice that that the one in two are actually variables. So there's some intricacies with that, same with query parameters.

**Erik St. Martin:** Does this support header logic, too?

**Brian Ketelsen:** Yeah, all your headers are logged also to the same buffer, and they're in the appropriate format for the API blueprint.

**Erik St. Martin:** That's really awesome, I kind of wanna play with this.

**Sarah Adams:** Yeah, it is awesome, I love it. I use it at work.

**Erik St. Martin:** And is there a way to augment the documentation, so things that aren't necessarily captured by monitoring the requests and responses, things that you might wanna take notes on, like what appropriate values are, or things like that?

**Sarah Adams:** Yeah, so for each package, a API BEE file is spit out, and what you actually need to do is have sort of a -- I call it a template, but it's really just the description of your API and sort of high-level things like that. Those go at the top of the API BEE file. Once all of your tests have run, you'll get back one API BEE file per package, so you need to combine them. During that step, you can actually insert... For my current company we have a list of all of our errors and error codes at the top of our documentation file, so that's generated right before we append all the API BEE files. So yeah, it's totally flexible.

**Carlisia Pinto:** That's cool.

**Erik St. Martin:** So what's the process for this? You just run this tool after you're done, so that you're kind of committing this documentation?

**Sarah Adams:** Yeah, I have it built into our CI flow. You push out some code on a feature branch, and when it's ready to land into the development branch, or whatever you use - master... You land that in, and then we have a special hook that says, "Oh, if I'm on the master branch, I need to run the combined API BEE file script", and push that up to -- well, how I have it is I push that up to a separate branch, a docs branch on a repo, and then have Apiary actually read that file to show the parsed, beautiful API documentation.

**Brian Ketelsen:** Nice.

**Carlisia Pinto:** I just thought about making this - another tool... Make a diff between the pushes, so you can see like a change log version, that would be really cool.

**Sarah Adams:** Yeah, that would be cool. And there are a lot of things that I wanna add to this. A couple people have requested Swagger support; I think that's probably more common that Apiary for API documentation.

**Erik St. Martin:** Swagger has really blown up lately.

**Sarah Adams:** Yeah. The interesting thing about Swagger though is they seem to want you to generate your sort of hammer skeletons. I'm not really sure how that fits into this sort of test-generates-docs flow, because really what they want you to do is have a spec generate the code... It's sort of cyclical. I'm not sure how that's gonna work, I haven't played with it yet. We'll see.

**Erik St. Martin:** Yeah, they kind of fit in different parts of the workflow, right?

**Sarah Adams:** Yeah, exactly.

**Erik St. Martin:** It's that Swagger kind of... You build to the specification and then it spits out code, and it knows that it meets it, whereas this tool kind of comes in after the fact and kind of gets insight into how your API works.

**Sarah Adams:** Exactly, it's a different workflow.

**Carlisia Pinto:** Here's the perfect workflow: you do your specs, you run it, you spit out the Swagger docs, you run the Swagger docs and that then generates your codes.

**Erik St. Martin:** But I think this is interesting though, because people love Swagger, but everybody likes building their APIs in different ways, and we see that prevalent in all the number of frameworks out there for building APIs right now. But yours, it doesn't have any ties into those specific... You can write in whatever you wanted to and have similar documentation to Swagger, and I think that's an awesome idea.

**Sarah Adams:** Thanks!

**Carlisia Pinto:** Yeah. The one issue I can see with trying to make it fit in with Swagger is that Swagger has a very... Well, it has a specification, so it's strict in that way, and if you design something that is not supported - not necessarily, it wouldn't be ReSTful, but it's not supported by that spec version that you're working with, then it just doesn't work.

**Sarah Adams:** Well, API Blueprint has a pretty strict spec also. You just have to match the data, you have to really evaluate the spec and match the data, fit it into the spec.

**Carlisia Pinto:** Yeah, so you have to have some prior knowledge of what the spec is for the tool you're working with.

**Sarah Adams:** Sure.

**Erik St. Martin:** Alright, so I think we've got about ten minutes left, and I definitely don't want to close the show out without getting a chance to speak with you about your Women Who Go initiatives.

**Sarah Adams:** Oh, awesome.

**Erik St. Martin:** Could you tell us a little bit about that, and kind of how things are going there?

**Sarah Adams:** Yeah, sure. We're actually growing really fast at the moment. I'm sort of blown away, it's really exciting. We just launched a chapter in Tokyo, so that's really cool. I could talk about why I started it, or how I started it...

**Erik St. Martin:** Yeah, talk a little bit about what it is and how it got started, and what your goals are.

**Sarah Adams:** Sure. So I really wanted to create a safe space for women to enter the Go ecosystem. I started the group about a year ago, and I had been going to Go SF meetups since mid-2013, when they were still really small, like 30-50 people, or something. And I was often the only woman, very consistently, so I started to get a little frustrated. But the meetups were so excellent that it worked out okay.

Then I got accepted to talk at GopherCon early 2014, and I was actually listening to a Changelog podcast about GopherCon, and I think it was Brian who... I can't actually remember - someone asked a question like, "How can we help people get more involved in the Go community?", or something like that. And Brian suggested that you start a Go group in your community, and I sort of took that as my community being my women, and I wanted to get more women involved in Go, so I started Women Who Go.

We had our first event about a year ago. We just talked about the difficulties of being a woman in tech and a woman in the Go community, and how can we start trying to fix these issues. And I've had a meetup about every month for a year, and I think our largest event has been the Bill Kennedy workshop - we had 70 women attend and want to learn Go, which was really powerful.

The main goal of the group is just to provide a safe environment for women to learn more about Go, to explore, and hopefully the idea is that then they go to Go SF events or GopherCon, once they feel a little more safe. I think it's been working pretty well.

As far as our ten chapters around the world, women actually will message me or somehow find me on Twitter, and they'd be like "I see what you're doing and it's really cool. I wanna start a group in Denver" or wherever, and I just help them get started, and they really run with it. The number of women that have been really excited about starting groups like this has been really spectacular.

**Brian Ketelsen:** That is so awesome to hear. I'm just all verklempt over here, so keep talking. You said you have ten chapters now, right?

**Sarah Adams:** Yes, we do. We've got five in the U.S., we've got one in Bangalore, one in London, one in Tokyo... If you go to WomenWhoGo.org you can see our list of chapters, and there are also resources if you wanna get involved, but you don't need to identify as a woman. We've got Berlin, Bangalore, Tokyo, Mexico City and London, and then in the U.S. we've got Boston, Boulder, New York City, San Diego and San Francisco.

**Brian Ketelsen:** Is there information on WomenWhoGo.org for people who might be interested in starting their own chapter?

**Sarah Adams:** Not explicitly, but people have found the hello@womenwhogo.org email address there and that's usually how they contact me.

**Brian Ketelsen:** Perfect.

**Sarah Adams:** So I suppose I could on the say on the site, "If you wanna start a chapter..."

**Erik St. Martin:** I think it's great when things kind of grow bigger than you can keep track of anymore.

**Sarah Adams:** It's amazing, especially when it's such a cool cause, trying to get more women into Go.

**Erik St. Martin:** This is probably the first that I've been a part of that at least visibly had these big women-only -- I'm not saying women-only, but advocating more women get into the community. There probably exist, but it definitely didn't feel as prevalent as it is here. I've been watching Twitter and seeing the new Women Who Go chapters and stuff like that, and it's like wow, I can't even keep up with how many there are anymore. I think that's fantastic.

**Sarah Adams:** I know, it's awesome. There are a few meetups that I've been to, like Pythonistas and Women Who Code has a Ruby Tuesdays for women, but I haven't come across any other women's group specific to a programming language that is spread across multiple chapters.

**Erik St. Martin:** Yeah, I've seen Ladies Who Linux, that's gotten bigger, and there's an Infosec one too, but for the life of me, I can't remember the name of it.

**Carlisia Pinto:** There is also PyLadies.

**Erik St. Martin:** Oh yeah, PyLadies...

**Brian Ketelsen:** PyLadies, Rails Girls...

**Sarah Adams:** True, yeah, so there's a ton...

**Brian Ketelsen:** But it feels stronger in the Go community, and I love that. I love the push to have that inclusivity and that feeling of safety, so anybody can come in and learn without worrying about external factors. That's very nice, so be proud of what you've done, this is really cool. Like you were saying earlier, when you have that feeling where it's growing so big it's hard to keep track of - Erik and I get that same thing at GopherCon when somebody in Brazil sends us an email and says "Hey, we wanna do a GopherCon in Brazil." "Yes, please. Go do that." It's awesome.

**Sarah Adams:** Yeah, that's exactly it.

**Erik St. Martin:** Anything that gets more people involved is always a good thing.

**Sarah Adams:** Yeah, I agree.

**Erik St. Martin:** More conferences, more meetups, more blogs, more podcasts...

**Carlisia Pinto:** I think there's also a good opportunity to break some misconceptions - there are additional opportunities to break misconceptions here. There are so many misconceptions that women cannot program, or even we ourselves say "Maybe I cannot program" or "Maybe I can program but I cannot be a great programmer", and there is a sense that Go is a low-level language; it's not as low level as C, but it can be used for low-level systems development. And there is an additional misconception that women cannot do systems-level programming. I don't know if you agree that this exists, but I have seen it. So with Go, we can help break this myth.

**Erik St. Martin:** Yeah, I think in STEM in general there's a lot of that, being critical of other genders and their ability to do the job, and I think it's just naive.

**Carlisia Pinto:** Yeah, but it exists, so...

**Sarah Adams:** That's one of the things I love about the Go community so much - when those things pop up, people seem to be sort of all over it, like "That's really not okay." And I love how much time and energy that people like Andrew Gerrand and Jason Buberel have put into the code of conduct. Our code of conduct thread went on for months, because people were so passionate about trying to make sure that Go was so inclusive and that everyone felt safe in the Go community, and I really thank them for that.

**Erik St. Martin:** Yeah, I really applaud that effort as well. I think that that was a fantastic thing that happened. And in general too, right? I know Carlisia and I have had conversations about this before - every be nice to each other, what's hard about that? That was one of the things I loved about this community when I came into it, because I don't have a masters degree or PhD in CompSci, I'm not a highly academic programmer, but there were these PhD people all chatting up in mailing lists and stuff and perfectly happy to help and answer questions, and just their love of the language, they wanted to share that with people. I think that we should do that, whoever it is that's trying to join our community, we should be as welcoming as possible.

**Carlisia Pinto:** Exactly.

**Sarah Adams:** Yeah, and I think since we started being really inclusive and being aware of that when we were so small - I really think that it's gonna help us as we grow, to maintain that sense of inclusivity and safety, as opposed to other languages who are sort of trying to tack it on... After they've grown a lot, it's a lot harder, or it seems a lot harder.

**Brian Ketelsen:** So for the women who are listening to the podcast or listening live, if they go to WomenWhoGo.org they can see a list of chapters. Will that give them the ability to find when the next meetings are?

**Sarah Adams:** Yes, exactly. There is a list of all of the Meetup pages, or in Tokyo's case the Connpass. There's a Twitter account for each chapter, and some of them have Facebooks, and they're on Slacks. There are links for all of those on the WomenWhoGo.org site.

**Erik St. Martin:** And you said for people interested in potentially starting their own chapters, the best thing to do is to email you at hello@womenwhogo.org.

**Carlisia Pinto:** Exactly.

**Erik St. Martin:** Awesome.

**Brian Ketelsen:** Great topic.

**Erik St. Martin:** Yeah. And on that note, I think that we are just about out of time for this episode, so unfortunately we get to say our goodbyes. But before we do that, we typically do the whole \#FreeSoftwareFriday where each of us just kind of briefly mentions a project that we are kind of grateful for, just to give support to the project and its contributors, or some of these things that we use every single day... Because sometimes a thank you is just good to give back, even if you can't contribute code. With that being said, who wants to kick this thing off?

**Brian Ketelsen:** I'll start it off. My \#FreeSoftwareFriday shout out this week is to the thousand plus people who have contributed to Docker. I still love Docker as a build tool and a deploy tool. Docker is a lot of fun and it has made the easy things easier and some of the hard things more accessible, and caused me to lose a little bit of hair every once in a while, but I love Docker. So thank you, Docker people.

**Sarah Adams:** I'm gonna shout out to the folks at Apiary, writing the Apiary Blueprint spec. It's really awesome, and you guys have been very accommodating about my documentation change requests.

**Erik St. Martin:** That's awesome. Carlisia?

**Carlisia Pinto:** I have two today. I will real quick give a shout out to remotemeetup.golangbridge.org, it's the Go Remote Meetup initiative that a few people are coming around to. It's what the name says - if you want to give a talk online and reach people who are not in your physical community, hop on there, we'll schedule a talk - I'm part of it too, so I'm saying 'we'. This is dear to my heart, I love it, especially because I'm not in a big tech center. San Diego is pretty good, but it's not Boston or San Francisco. So I'm looking forward to this, and people who want to see these talks, presentations, demos, tutorials and hopefully programming sessions - I have people here in San Diego who want to do that - just subscribe and you'll get notified. We have some stuff there already, and more coming.

The other one that I've been meaning to say for the longest time is the Sourcegraph Chrome Extension. Install it on your computer and then go to GitHub and when you look at code, it's gonna be magic. You just hover your mouse over functions and constants and you get all sort of extra information that you don't have to hop to other places to see. There is a mini-tutorial video that they have, and we will include that on the show notes. It's pretty cool.

**Erik St. Martin:** And we actually have Beyang, one of the co-founders of Sourcegraph, lined up for an episode. So that will be coming up as well.

**Carlisia Pinto:** Yes.

**Erik St. Martin:** For me this week - and hopefully I pronounce this correctly, because I don't think I've heard anybody say it - it's Rofi, which is a kind of an application launcher and window switcher for Linux, and I use that while I'm in i32. Open up new programs...

**Brian Ketelsen:** +1.

**Erik St. Martin:** What's that?

**Brian Ketelsen:** +1, Rofi's awesome.

**Erik St. Martin:** Yeah, and recently they had a new release that brought a lot more features and made it look a lot prettier, so I've been having a blast with it. With that said, I wanna thank everybody, I wanna thank the panel - Brian and Carlisia - and I certainly wanna thank Sarah for coming on the show. I wanna thank everybody who's listening now and everybody who will be listening when these podcasts drop. Definitely share the show with your fellow Go programmers. Best way to subscribe would be to go to GoTime.fm and we will also have a weekly newsletter coming out - you can do that. Or on Twitter as well, @GoTimeFM. With that said, thanks everybody, and we'll see you next week.

**Carlisia Pinto:** I'm glad to be here.

**Brian Ketelsen:** Thank you.

**Carlisia Pinto:** Thank you, Sarah.

**Sarah Adams:** Thanks.

**Carlisia Pinto:** Bye.

**Brian Ketelsen:** Thank you, Sarah.

**Sarah Adams:** Thank you.
