**Nick Nisi:** Hoy-hoy. Welcome to another exciting JS Party. I'm your host this week, Nick Nisi, and I am joined by two wonderful regulars, and that is Kball - Kball, how's it going?

**Kevin Ball:** Going alright, coming in hot.

**Nick Nisi:** \[laughs\] Yes, as always. And also Jerod's here. Jerod, how's it going?

**Jerod Santo:** It's going great, because I'm here with you, I'm here with Kball, and my ears have this ringing, and I'm not sure why.

**Nick Nisi:** That's just my voice...

**Jerod Santo:** I think it might have been your fault.

**Austin Gil:** It's the sound of angels.

**Nick Nisi:** And that angelic voice that you've heard is Austin Gil joining us again. Austin, how's it going?

**Austin Gil:** Hey. I'm doing well, living the good summer life here in Portland, taking a break from camping, and river floats, and bike rides to come hang out with you all. It's such a pleasure.

**Nick Nisi:** Wooh!

**Jerod Santo:** Good to have you.

**Kevin Ball:** River float sounds good...

**Austin Gil:** Come by sometime. I will take you. I will make sure anyone on the show, anyone watching, anyone listening - come visit, I will show you a good time in Portland.

**Nick Nisi:** No promises there, but I can confirm that I will see you in person in Lincoln, Nebraska next month. So that's pretty exciting.

**Austin Gil:** That's right. I'm very excited.

**Kevin Ball:** Do you do river floats there?

**Nick Nisi:** No... Well, I think there is a river...

**Jerod Santo:** We have rivers. Come on, Nick, don't sell us short.

**Nick Nisi:** We do have -- do we have a river in Lincoln?

**Jerod Santo:** Oh, Lincoln. No. Nothing good ever came out of Lincoln. Just kidding... Sort of.

**Nick Nisi:** \[laughs\] But very exciting. We're gonna meet up in person for the first time, and - I just got my ticket yesterday.

**Jerod Santo:** Where are you guys gonna meet up?

**Kevin Ball:** Lincoln, it sounds like...

**Nick Nisi:** Yeah, everybody's going to Lincoln.

**Jerod Santo:** But why? But why? Is there a reason?

**Kevin Ball:** I don't know, Nebraska, but I'm guessing that's like five people, or something. It's easy to find.

**Austin Gil:** Well, yeah. I'll be there for Nebraska Codes. It should be a fun conference. I'll be speaking there, so if anyone wants to come find me - yeah, let's be friends.

**Nick Nisi:** Now, Austin, we had you on - let's see... It was quite a while ago; I think it was episode 243, and we were talking about HTML access without JavaScript from your camera. And that was a fascinating article. So we were kind of talking about what you've been up to lately, and it sounds like a little more digging into the file system API... Why don't you catch us up on what you've been doing?

**Austin Gil:** Yeah, so I don't know why I get into these deep-dives into fundamentals -- well, we use fundamentals as a loaded term... But yeah, into like fundamentals of what's available in the programming languages, and frameworks, and tools, and platforms that I use... So I did a deep-dive on forms, and then that led me into accessing files with just HTML, or accessing camera with just HTML... And then recently, I have been on this sort of quest from God on trying to promote people to understand fundamentals and use fundamentals, as opposed to leaning too heavily on libraries, and frameworks, and tools like that.

And I was on a conversation recently with JavaScript Jabber guys, and we talked about just the fundamentals, and rehashed this familiar conversation of "Should you focus on fundamentals, or should you focus on frameworks and libraries and tools?" and it became a very nebulous conversation... So I'd like to keep promoting people's understanding of fundamentals, without getting too into like heady/space/galaxy brain stuff... You know, maybe get into some more practical information today.

**Kevin Ball:** Where does the Galaxy brain land with regards to fundamentals?

**Austin Gil:** Well, I just think -- I guess nebulous is the best term. It's a loaded term that doesn't have a whole lot of clear definition of what you're talking about when you mean the fundamentals. I think the best that I've come to is saying that the fundamentals are sort of the lower-level knowledge that you need in order to explain the topic that you're discussing about. So when we're talking about fundamentals, I think a good framework to understand it is to say take a tool like Next.js - Next.js has a whole bunch of things that it makes available just within its sort of ecosystem, and building a Next.js application requires understanding those fundamental principles of that tool. But Next.js is built on top of React, and there are boundaries between what Next offers and what React offers. And React is like the lower-level primitive of that metaframework. And then React is built on top of JavaScript, so there's fundamental knowledge that you need to understand the separation of concerns between JavaScript and React... And then when you're with JavaScript, then you have to understand the platform, and...

**Kevin Ball:** It's turtles all the way down. We could take this down and say, "Okay, now we need to understand interpreters, and interpreted language, and that means we need to understand machine code, and compilers", and like all these different layers.

**Austin Gil:** But that is what I'm saying. But you have to find where you live in the layers, right? Like, where are you right now, and the work that you're doing - you need to understand the fundamentals of that. You don't need to go all the way down to ones and zeros, to understand everything. But say, "What is the code that I'm writing doing, and what of that code lives within the current stack, or the current layer of the stack, and what belongs to the next layer down?"

And I think at some point you do have to get down to like lower-level things, like HTTP, the protocols, and the platforms. And then at that point --

**Kevin Ball:** I mean, some of this comes to how leaky are your abstractions.

**Austin Gil:** Exactly, yes. Yes.

**Kevin Ball:** \[06:01\] The web platform and JavaScript provide pretty solid abstractions. It's pretty rare that those leak and you have to go lower than that if you're writing for the web. Next, or Nuxt, has some leaky spots.

**Austin Gil:** Yeah, yeah. And that's kind of what I'm promoting, is mostly the curiosity to take a moment and check your knowledge of understanding where those abstractions are, and who is responsible for those. And it just helps you write better software.

**Jerod Santo:** Please allow me to make this more abstract by introducing a metaphor, because I feel like this would be a great episode if we never let Austin get to his actual fundamental topic, and we just keep going...

**Austin Gil:** \[laughs\] This is exactly how the last conversation went... It's great.

**Jerod Santo:** So as a sports ball coach - you know, we coach basketball. And when you get the kids in the room, and you give them a ball, and you say "Okay, it's time for fundamentals." And Kball, we teach them dribbling, and passing, and shooting, and defense. That's basically the fundamentals. We're not gonna teach them gravity, or how to tie their shoes, or stuff like this, which actually are lower-level than the fundamentals, but they're not the fundamentals of basketball.

Now, having said that, what they like to do though is not come in and learn how to dribble; what they like to do is come to half court and just chuck the ball at the rim.

**Kevin Ball:** Scrimmage!

**Jerod Santo:** Yeah, see if they can get a half court shot to go in. That's what they want to do. And so there's your tie back to this desire to go straight to the end game, which is what we do a lot of times in web development. It's like "Well, I'm trying to get things done, and so I'm gonna grab Next.js, and I'm gonna maybe skip the dribbling and the passing and the shooting fundamentals. I can backfill those later." Austin is here to teach us how to dribble.

**Kevin Ball:** I think one of the key questions there is how you make dribbling fun, right? Some people - I'm gonna run with your metaphor, except for me it's coaching soccer. I've been coaching soccer, rather than basketball.

**Jerod Santo:** Okay, fair enough.

**Kevin Ball:** But you still have dribbling. We have that in common.

**Jerod Santo:** Yeah, yeah.

**Kevin Ball:** So there are kids that they can map that "If I get better at this, I'm going to be better at that." I think the same is true for adults. There are adults who can say, "Okay, if I focus on this thing, that's going to eventually help me with that, so it's worth doing that." And there are kids where if you have them out there doing drills, they check out. They're not getting anything from that fundamentals work, because they're like "I don't see -- what's the point? This is boring. I'm gonna go chase butterflies." But if you get them in something that feels real... You know, a little scrimmage, maybe you narrow it down to like a 2-1-2, so they get lots of touches on the ball, they get lots of opportunity to start to move their body in these patterns... And you can give them little nudges here and there and say, "Okay, there you want to kick it a little bit more like this. Or that was a good opportunity to do a little bit more dribbling", but it's within a framework that looks a lot more like the real thing.

**Jerod Santo:** Right.

**Kevin Ball:** So I'm going to pull this back then to Austin - where is your 2-1-2? Where's your 2-1-2 when it comes to web fundamentals?

**Jerod Santo:** Wow. Tie that back, Austin.

**Austin Gil:** Uhhh... \[laughter\] I don't know if I can answer that. I'm just gonna deflect that and say that -- I think that you touched on a really good point, that I wanted to bring back, which is being able to see your developmental path. And if you want to get better at software engineering, then I think understanding the fundamentals helps with that, because while you're writing code, if you can periodically check in with yourself and say, "How much of this process or this functionality that I'm building do I understand what a tool or library or framework is doing?", to be able to explain and say, "Okay, it's definitely good that I'm using this tool, because if I didn't, I'd know what it would take to rebuild the same functionality, and there's too much work. Like, that abstraction is worth keeping." And otherwise, you can say "That abstraction may not be worth keeping", because that can paint you into a corner. That can be limiting to working with the API that they provide, and not be able to take advantage of certain features that are at that lower level, that could be introducing more blow into client-side tooling, because you're including a library that you really only need a small subset of the fundamentals, of what the platform can provide, that this library builds on top of, and introduces more work to download; libraries can also introduce more maintenance headache, can introduce more security vulnerabilities in addition to that bloat, can introduce that story where you come back to a project after six months and the upgrade story is a nightmare, because Node version compatibility is broken, or things like that... It's just it's kind of a nightmare.

**Nick Nisi:** \[10:43\] It doesn't have to be that way...

**Austin Gil:** It doesn't have to be that way...

**Jerod Santo:** But it is that way.

**Austin Gil:** But it kind of is that way. Yeah. Like, it's been that way for my career.

**Jerod Santo:** \[laughs\] Let's be real.

**Austin Gil:** Maybe it doesn't in the future, but... I don't know, there's actually -- well, that's a story for another time. But I think one of the most valuable skills that is underrated in terms of using tooling, or opting into using tooling, is as soon as you start relying on frameworks to do the work for you, you give up transferable knowledge. And when you work at a lower level - this is a JavaScript podcast. So when I have --

**Jerod Santo:** Ostensibly.

**Austin Gil:** Yeah. \[laughs\] When I have code that's like - let's say a random string generator to generate IDs for me; if I'm using that from a package that I rely on npm, or a tool that's available in like Solid.js, all of a sudden I have a dependency on that, and I can't take that code. It's not portable to take to other projects that are built on top of different tooling, and it's not knowledge that I can even transfer myself. So I like to have a snippet library in my GitHub that's like all of these little low-level things that I don't need a library for. I can copy off my GitHub, paste it into a different project, it works the same, as long as I'm in a JavaScript environment. There's a lot of value there for me.

**Kevin Ball:** I'm going to challenge your premise a little bit on this. This is just pushing a little bit here, which is - let's take the example of component-driven development. Component-driven development - the industry has pretty much normalized on that is the most productive way to do UI development. You break things down into components, you subdivide them in that way, and you do that. And there are a slew of different frameworks that allow you to do this in different ways, but the sort of raw platform in JavaScript does not have a good solution for this. Web Components are \*beep\*. They're terrible. They're not a valuable way to do this, because one of the key productivity boosts of this component-driven development is thinking about your UI in a declarative manner. And Web Components, for reasons that I do not understand, chose to maintain an imperative programming model.

So where I'm going to this is - if you invest time and energy in learning how to do component-driven development using one of these declarative frameworks, whether it is React, whether it is Vue, whether it is Angular, whether it is Lit, whether it is one of these other things, abstractions on top of the platform, that understanding, that model - while the framework details will vary, and that piece is not as portable, the mental model for how you do that development and do that breakdown is, and it is something that is going to be more valuable to you in moving from project to project, than if you had tried to do everything from scratch without that mental model.

**Austin Gil:** Yeah, totally agree. And that's the flip side of the coin, that I think understanding fundamentals informs your decision when you need to reach for a higher-level abstraction. Because if you say that everything should be done with the fundamentals, I think that's going too far into the other direction. And then you say, "Okay, do everything just with vanilla JavaScript." And then you say, "Okay, well, I'm going to use what's available on the platform. Maybe it's Web Components, or whatever, but they don't provide good reactivity models." So then I'm going to build some sort of reactivity system on top of proxies, or something along those lines, maybe reinvent signals, because that's pretty cool, and that's the new hotness... And before you know it, we have reinvented one of these frameworks that already exist, but you've created a crappier version.

\[14:24\] So that is what you want to avoid, but again, I think the knowledge of understanding what it is that these higher-level abstractions are doing at a lower level, and understanding what they're doing can inform your decision to say, "What does my project need?" and does that need surpass a barrier that says "Let me reach for an abstraction, let me not reinvent the wheel"?

**Jerod Santo:** I think it could be argued, Kball, just to continue down this line of conversation, that at this point, a component -- it's like we've identified a new fundamental of web development with components. Maybe it's higher level than we previously were, but yet it's so fundamental to the way that we do things now that you are actually learning fundamentals, even though you're learning them through this framework proxy.

**Nick Nisi:** It depends on the framework, right? Because if it's React, then yeah, you're doing a lot of fundamental JavaScript maps, for example... But if it's something that has a less fundamental templating library, like Angular - but I know Angular has changed a lot, so I don't know if I can say that, but... And how is ngf tags going to help me...?

**Kevin Ball:** Yeah, well, and that's -- that is actually kind of an interesting... There's a layering of knowledge here, which is there's syntax, and tactical details of the APIs that you're using in the frameworks, like how those are working, and then there's an architectural or mental model level. So if you're using Angular, or React, or Vue, or Svelte, or Qwik, or we can go on and on and on... Like, this has become the norm, and all of these different things are doing it. They have a set of things that are detailed and specific to their framework, but there is also this architectural fundamental, as you say, Jerod, that is the same throughout all of them.

**Jerod Santo:** Yeah. There's your transferable knowledge right there.

**Kevin Ball:** There's your transferable knowledge. Exactly. And I would actually argue that those fundamentals are more important than the details of the APIs you're using, whether you're using a bare JavaScript API for file upload, versus you're using something else for upload. So the medium that you're using to learn it in is less important than that higher-level concept. And another place this shows up is programming languages. So for most software development jobs, you don't need to have prior experience in the specific programming language that is there. You can pick that up.

**Jerod Santo:** Sure you do. It's right there on the job description.

**Kevin Ball:** I mean, yeah, there are people who do that. But my premise would be, for example -- I mean, there are differences among different classes of programming languages, but if I have a job that is... Our application's written in Python, say, and you've done Node, or you've done Ruby, I think you can pick up Python without much difficulty, because the fundamental understanding of how does a dynamic scripting language, that has object-oriented pieces and functional pieces work, is something that you can get in both of those other environments. And that fundamental knowledge is transferable, and you will learn syntax. And there are - and this comes to kind of your point, I think, Austin - some places where there are real differences between these frameworks, and at some level of complexity or at some level of... There are some projects where that nuanced difference does matter, and understanding which parts are fundamental and which parts are specific will be important to you at that point... But I would argue that that's a pretty small minority of projects.

**Jerod Santo:** \[18:10\] So what you're saying ultimately is "It depends."

**Austin Gil:** It depends. And this of course, was -- \[laughter\] So before we started recording, Kball didn't want to rehash the fundamentals versus framework thing, and then I wanted to avoid the whole nebulous topic too much about... We were in galaxy brain territory of just "None of this makes sense."

**Kevin Ball:** So we're doing both.

**Austin Gil:** Yes, we're doing both. Hopefully, all three.

**Jerod Santo:** We're just trolling you, Austin. This is just a long roll. It's all this is. I mean, what does this have to do with uploading files, guys?

**Austin Gil:** Exactly. So I do want to finish with this... The reason I say that fundamentals are a loaded term is because a lot of people conflate it with the underlying platform, or like vanilla JavaScript, or like the DOM, or whatever. And there is a distinction there. You don't have to understand every single available method on inputs to know how to use them, right? You don't need to understand that HTML can access the camera. Probably not. Rarely ever going to need that. But again, I think it's just a matter of understanding the lower-level concepts, and stopping and just ensuring that you're taking moments in your day to stop and check your knowledge, and check your understanding of what it is that you're doing.

So Kball, to your point about components, and that being the important thing to learn - I think at a lower level you can -- back to the full stack of knowledge thing, you might start at Next, and then move down to React, and component architecture, like Nick was saying, is a fundamental piece of knowledge within or below React. If you take that, you can swap out React, and you can take that fundamental knowledge to Vue, to Solid, to Qwik. And there are going to be some differences, and understanding those differences is the implementation detail of the next level up.

**Nick Nisi:** Not to dive into that too much, but then those differences also can shape how you think about those individual components.

**Austin Gil:** Yes.

**Nick Nisi:** For example, if you're trying to avoid massive rewrites within a virtual DOM environment, you might break up into smaller components. Whereas maybe another framework better manages that, and doesn't require you to do that, so you don't have to break it up nearly as far.

**Austin Gil:** Yeah. It's interesting, because I've shifted to working with Solid a lot lately, and the way it renders things is totally different than React.

**Nick Nisi:** Yeah.

**Austin Gil:** And that is fundamental knowledge you need for that tooling, because then you can't build good applications without understanding what it's doing below, under the surface.

**Jerod Santo:** So it is fundamentals all the way down.

**Austin Gil:** It is, it is, ultimately.

**Jerod Santo:** \[laughs\]

**Austin Gil:** So let's bring this back to maybe a more practical, tangible topic...

**Jerod Santo:** No, no! Quick, someone interject something. Basketball, yes. \[laughter\]

**Kevin Ball:** Well, I am kind of interested... So you have dug into file uploads, and so I think that is a useful thing. Can we contrast doing bare file uploads using platform technology only, versus using a library that provides some abstractions around file uploads, and use that as a way to illustrate what are the fundamental pieces that are not specific to the, as you said, input APIs, and things like that, that actually do play out whether you're doing this with bare platform, bare HTML and JavaScript versus something a little higher-level?

**Austin Gil:** Yeah, absolutely. So this conversation is kind of based on a blog post series that I write, and I don't think that my writing is particularly unique or special. I think that there's a lot of excellent writers out there... But I think a gap that I try to fill is in all of these blog posts that I read, that kind of miss either the next logical step, or just like go around some lower-level concept that is necessary, or you want to understand how this stuff actually works... So I try to provide this fundamental knowledge in what I'm writing. At least like the one layer below.

\[22:01\] So to get into this sort of topic, I think the place to start with file uploads for me - I generally lean more towards the frontend. You could start in different areas, but I always like to start on the frontend, because that's what I see. And the most basic fundamental thing on the frontend is HTML. And even that, if we're talking about file uploads, you can't just talk about file uploads by understanding HTML, you have to understand the fundamental thing below it, which is HTTP. Because you need to make an HTTP request in order to upload a file. Yes? Cool? There so far?

**Jerod Santo:** You're now going to teach us HTTP. Go!

**Austin Gil:** Yeah, no, I'm not going to teach you HTTP. I probably don't understand it well enough.

**Jerod Santo:** And to understand that, you have to understand TCP/IP.

**Austin Gil:** Yes.

**Jerod Santo:** And to understand that, you have to understand Ethernet.

**Austin Gil:** That's the level that I probably don't understand.

**Jerod Santo:** \[laughs\] There you go. So we all have our limits, right?

**Austin Gil:** Yeah. And again, you don't need to understand everything all the way down, but you do need to understand the things kind of at the lower level, from the point that you work in.

**Jerod Santo:** Right below you.

**Austin Gil:** Yes, the next level below at least. So with HTML, to send a file, you need to do a number of things. In HTML, the communication language between computers on the web is HTTP, and to send a file with HTTP, you need access to the file contents. You need to modify the request header to send a post method, and you need to set the content type to multi-part form data.

So if we're at the level of HTTP, can you break down - what is the difference between a get and a post, at least? Because I think that is actually a key thing and something that we sometimes paper over with tools like GraphQL, and start using in strange ways.

**Austin Gil:** Yes, that's a good point. I think that there's going to be probably some areas of knowledge that y'all feel free to fill in. As I understand, an HTTP request is basically a protocol that you construct... I want to say it kind of looks like a string of text that a computer can send to another computer, but the way that string is constructed is important. So you define the HTTP headers, the version, and then the method, and the method can be I think one of either seven or nine different options. But with just HTML, HTML really only has access to two methods - the get request and the post request. And the get request is generally saying, "I'm trying to receive some data", or "I'm asking for data from the other computer", and a post request is saying "I have some data that I want to send to you", to another computer.

**Nick Nisi:** Yeah. So the biggest difference with that, falling within those params is that a post can also have a body on it, whereas get doesn't.

**Austin Gil:** Yes, it is a -- I don't know if it's against protocol to include a body on a get request.

**Nick Nisi:** It would often be ignored.

**Kevin Ball:** The only way you can pass data, or get requests -- well, there are two ways. There's the headers that you're sending, and then there's params, which are part of the location, the URL string that you are sending this to. So any HTTP request you're sending is going to a place, conceptually, a virtual place, but that is a URL, and it has a set of data passed as params, which some backends will treat as giving you more information about what place you're looking for. Like old school WordPress, you'd pass a parameter and that would tell you what page you're looking for, things like that... Others will just treat it as essentially modifying, but that's the only way you can pass data along. And the headers are relatively constrained, the params are not. You can put whatever you want in there.

**Austin Gil:** But you could also pass some data -- a REST API might pass some data via the URL itself. So you have the URL location, and then you also have the query string at the end.

**Kevin Ball:** Yeah, that location can be interpreted as data by the server. But you can't, for example, put a blob of binary data or something else in that.

**Austin Gil:** Exactly.

**Kevin Ball:** But with a post body, you can.

**Austin Gil:** You can do that. Yeah, and then you also need to set some content type along as the HTTP headers to denote what type of content you're sending. So this is really a fun conversation, because now we're actually getting into practical knowledge, that I think --

**Jerod Santo:** Let's just start the show right here.

**Austin Gil:** Yeah, exactly. \[laughter\]

**Kevin Ball:** Right, right, so that's a problem. We've got to Figure out a basketball, or soccer, or --

**Jerod Santo:** Some sort of way to derail Austin before he gets into details...

**Austin Gil:** Can we do field hockey?

**Jerod Santo:** \[26:13\] Field hockey.

**Kevin Ball:** Okay, so field hockey... So what's --

**Nick Nisi:** This is considered a pivot, I think, but in basketball if you lift that pivot foot, it'd be traveling, and --

**Austin Gil:** Oh...

**Jerod Santo:** That's right.

**Austin Gil:** Nice.

**Jerod Santo:** And Nick's exhausted his knowledge right there. Then what happens, Nick? \[laughter\]

**Nick Nisi:** I have the Wikipedia page open for basketball right now...

**Jerod Santo:** Oh, good.

**Austin Gil:** Okay, but the -- that's brilliant. Kball, I'm glad that you took us down that, because I didn't touch on that lower-level HTTP protocol... Which is funny, because it's redundant to say HTTP protocol, but I do it every time.

**Jerod Santo:** That's right.

**Austin Gil:** Whatever.

**Jerod Santo:** Because it's the last P, isn't it?

**Austin Gil:** It is the last P.

**Jerod Santo:** The last P stands for protocol.

**Austin Gil:** Hypertext Transfer Protocol... Yeah. Who cares? Okay, so we've kind of established that fundamental knowledge of HTTP, right? And then you get into the browser and the language of the browser, the sort of base-level language of the browser is HTML. And with HTML, you have access to making get requests using links, you can make get requests using forms... But there's only one way to send post requests, which we've established is necessary to send a file; the only way to make a post request is with an HTML form. And we also established that you need to have access to the actual file's contents, and you have to send the multipart form data HTTP header, right?

So with the browser - the browser provides a sort of sandbox -- it's an application. It's a computer application that communicates, and it translates HTML into a visual layout of a website, and it constructs HTTP requests for you, without you necessarily having to know what's going on. But the browser sort of works as a sandbox environment that doesn't give access to website developers, doesn't give them access to user file systems. Like, you can't build a website that accesses its user's file system.

A little asterisk there, because there are some experimental technologies about file system access, and that's sort of an aside, because it's a limited file system access... So before anyone kind of tramples on me, let's just say --

**Nick Nisi:** I was so close.

**Austin Gil:** I know. You don't have access to like the full file system. Any file in the user's computer, right? In order to do that, you have to have user interaction where the user can select the file, and in order to do that with HTML, you can only use an input with a type of file, right? So now we have access to the file, we have a form to construct a post request, you set the method on the form to post, you have to set the content type to multipart form data, which you do with the \[unintelligible 00:28:42.17\] type attribute on the form element... And bingo-bango, you can send files with HTML. That's kind of the bare minimum. Cool?

**Kevin Ball:** And so what that's doing under the covers is that file as a binary blob is getting sent along as the post body in HTTP. So then anything that's responding to that, something on a server somewhere, is able to access that blob.

**Austin Gil:** So it's also important to point out that if you leave off the method, browsers default to using a get request. So it just adds data from the form in query string parameters. If you leave off the \[unintelligible 00:29:21.16\] type, then browsers will send the body of that file, or it'll append the data from that file either in a get request to the query parameters, or in the body as just a string of the file name, I believe... So if you want to have access to the actual binary data from the file contents, it has to be multi-part form data. And it doesn't actually send it as a one blob in the request, because a file can be a large thing, so it can exceed the amount of data that can be included in a single request. So what the browser will do is send that as a stream of chunks of binary data. So like send little bits at a time.

\[30:06\] Then the next question that people ask is, "Well, yeah, HTML is cool. I'm glad I can do that", but everyone wants to do the thing where the page doesn't refresh, because when you just use HTML, you hit submit the form, the form's gonna reload the page, and whatever. We want to provide a nicer experience for users using JavaScript. So then what's the next question with JavaScript? Well, you still have to do the same things. You technically don't need an HTML form, because now you can construct an HTTP request using XML HTTP request, or fetch. Most likely fetch. So fetch can still construct the HTTP request, provide the URL, set the method to post, set the correct HTTP headers, and then you still need access to the file system, which still requires at least a file input, because you still need user interaction to select the file, because the browser doesn't have access to the file system.

**Kevin Ball:** That's worth actually -- I think that's a fundamental that's worth diving into a little bit more as well, which is... There's a set of things that you can trigger on your own with JavaScript. And there's a set of things that require user interaction. And there's, I think - I don't know off the top of my head what the list of things are, but there's a set of things where basically you have to be... What that plays out in is you have to be -- well, either it's handled by the browser, like attaching a file via an input, or you have to be inside of a user-generated event handler... An event handler for a user-generated event for it to work at all. Do you happen to know offhand what is that list of things? Or maybe even better, what's the conceptual model behind when that's going to be true?

**Austin Gil:** Dang, you put me on blast.

**Kevin Ball:** Ba-boom!

**Austin Gil:** On the spot. \[laughs\] No, no, no, I could not tell you. I probably couldn't even get close. But yeah, there are some things that can only happen within user-generated events.

**Jerod Santo:** Most of the time once you try to do it, it's logical. You're like "Oh, this makes sense." And it's usually security and privacy. You're like "Well, I'm not going to just be able to send myself arbitrary files, because you loaded my webpage." But once you interact, you can select the files, and now I have access to that thing. That just makes logical sense with regards to privacy and security and user intent.

If you want to know all the things you can do without any interaction, visit themostannoyingwebsite.com... Feross' website that will trigger every crazy thing that JavaScript can do, all at once, and you'll have to actually probably reboot your browser... So don't actually visit that, but if you want to, give it a shot.

**Nick Nisi:** You should do it while we're recording, Jerod.

**Jerod Santo:** Yes, I should do it right now, and then I'll just disappear.

**Austin Gil:** Yeah, yeah. Shout-out to Feross, actually, because Kball, that's a really good point that touches on, again, fundamentals that really lean into security principles. Because security is one of the pillars of web development, or requisite knowledge, and understanding what can happen -- like, there's a lot of dark patterns around tricking the browser to believe that a user did something, or attaching events to certain user interactions to then do things that would not otherwise be intended, like maybe clicking on hidden or a not visible thing... I don't know. We don't have to dive into it, but I'm glad that you brought that up. Again, fundamental knowledge that apparently I need to fill in.

**Kevin Ball:** I think it is key to realize, browser vendors are basically trying to protect their users, and make sure that you are doing things -- when you do things to them, it is because they asked you to. And so anything that is going to involve touching something from their computer, doing something that feels intrusive, launching a pop up, all these different things - browsers will try to make sure that you're doing this in response to a user event. And that has been an evolution over time, as people like Feross found all of the edges and the places where you could do things to a user that they maybe didn't want...

\[34:03\] And browsers have evolved over time. I know we've had conversations with folks who used to be in ad tech, where they were like "It was an arms race between us in the browsers, where we kept trying to figure out how can we do a pop over, a pop under, a be more in their face, and the browser's kept being like "Nope, nope, nope." But that core concept of fundamentally the browser is attempting to defend the users from malicious programmers is, I think, a key way to think about what it does and does not enable, and how it enables things when it enables them.

**Nick Nisi:** And I don't think that this is a was thing. It's still actively ongoing...

**Kevin Ball:** Oh, it is.

**Nick Nisi:** ...and it's personified perfectly, I think, in the recent Apple Vision Pro announcement, where that has a Safari browser on it, but it is explicitly going to protect the user from where their eyes are gazing... Because it can know exactly what you're looking at in Safari, but it's not going to give that information to the user, because that's so much more private than where your mouse is, for example.

**Jerod Santo:** Wait, stop. Tell me more. How does that - like, Apple, Safari in there won't give you access to it?

**Austin Gil:** To user eye-tracking.

**Nick Nisi:** Yeah.

**Jerod Santo:** But isn't that how a lot of things are triggered?

**Nick Nisi:** It's at an OS level which won't leave the device.

**Jerod Santo:** Okay.

**Austin Gil:** So web developers building websites in Safari on the device won't have access to eye tracking technology. However, the operating system does.

**Kevin Ball:** Yeah, so they'll get access to higher level events, like "Oh, this is a synthetic click event", or whatever, that may have been triggered by eye-tracking, and I was looking at it, and whatever, but the underlying eye location data is not going to show.

**Jerod Santo:** Gotcha.

**Austin Gil:** It's all about consent.

**Jerod Santo:** Yeah. So we consent to you continuing your tutorial.

**Austin Gil:** Awesome. So we've essentially sent things from the client side. And I think outside of the GraphQL stuff - because that's outside of the scope of my knowledge, uploading files with GraphQL; I don't know - probably at some level it's HTTP, so you'd have to do the same thing. That's the lower-level --

**Kevin Ball:** I mean, everything in GraphQL is a post, so it's in some ways a shorter gap...

**Austin Gil:** Yeah, yeah.

**Kevin Ball:** Though having the combination handler that understands both GraphQL and the file - that's another... A special snowflake.

**Austin Gil:** Yeah. Oh, GraphQL error handling... It's awesome.

**Nick Nisi:** Everything's 200. It's good.

**Austin Gil:** Everything's a 200. Great.

**Kevin Ball:** Alright. So we made that reference. We're talking about fundamentals... What's the 200?

**Jerod Santo:** Ah...

**Austin Gil:** Oh, gosh... \[laughs\] A 200 is a status code that says everything is -- I think it's a status code for received...

**Kevin Ball:** Okay, I think.

**Jerod Santo:** It's okay, isn't it?

**Austin Gil:** Or okay? Yeah, that the request went okay.

**Kevin Ball:** "You sent me a thing, I got it. It's all good."

**Jerod Santo:** Even if it's not good, because... GraphQL.

**Austin Gil:** Yeah, actually that was a -- the status codes is a sort of a milestone in my career, where I recognized that I understood the fundamentals of HTTP better than... You know, I started as a frontend developer, got into backend development, and then did a whole bunch of mistakes on how to handle communication between the two, because I was trying to do things at a higher level, and send things in like JSON responses of telling the client if the request was okay or not. And then you realize that no, if you just follow these decades-old protocols that all of this is built on top of, and you kind of opt into those, you now are doing things using tools that have been built over decades, and have a much larger ecosystem, therefore a much larger knowledge base; you're not building bespoke things that only apply in your case, and everyone else that joins your organization is going to do things in a standard way... And then when you move on, you can take those standards with you. It's great.

**Kevin Ball:** Well, and that points back to your original point of the value of fundamentals, right? You don't end up reinventing the wheel. You don't have to redo all of these things, and there's a lot of stuff that you get for free at the platform level, if you follow platform-defined semantics.

**Austin Gil:** \[38:01\] Yeah. Okay, so we sent out files from the frontend, right? Now, the lot of tutorials will stop there... Not this guy. We want to move on to the backend, because that's the other side. Like, anyone can just send files anywhere, you know? But I want to receive them. So this is a JavaScript podcast, I'm a JavaScript developer, we're building applications in Node... You might use Deno, or Bun, or something, or one of the other edge runners... I don't know. But anyway, a lot of these platforms are adopting Node standards, which is great. We want portable code, that's awesome. And the way to receive file uploads - again, touches on HTTP; you know that you're gonna be receiving a post request, you know that that header, the content type header is going to be multi-part form data, so you need to tap into that. And again, because we discussed how the browser is sending data one thing at a time, you have to be aware of that data coming in at different events. So in Node.js, a lot of people are familiar with Express, but even at the lower level, Node gives you access to an event handler system with the incoming message request object. So you can say request.on, and then listen to the data event, and that data is going to come in one little chunk at a time from what the browser is sending. It's not all going to be in one massive payload. Because if we're dealing with a 10-gigabyte file, too much for one HTTP request, right? Or one chunk.

So that becomes interesting, because then you have to do something with that data. And the data comes in as chunks of binary code, which JavaScript doesn't really know how to deal with... And so JavaScript has this concept of buffers, which are also confusing, because when you log into the console, it's just something that says, "Greater than buffer, a bunch of string -- of numbers", and then close bracket, right? And you're like "What the heck is this?" So you can convert it to a string, then you can start to see the little bits of string representation of that data, and that's nice... But you still have to do something once it all comes in. So the naive approach is to say "Take this chunk of data, convert it to a string, push it into an array", and then as each chunk comes in, you push all of those things onto an array. And there's a problem there, because eventually, that array is going to take up more and more space in memory, which is fine for small HTTP requests, but because files can be quite large - let's say a 10-gigabyte file, if you're running on a server that has two gigabytes of memory, it's going to exhaust those resources. And everyone that's had to create file upload scenarios probably has run into the server crashing, because it ran out of resources.

**Kevin Ball:** Well, and this is highlighting another fundamental concept, which is streaming data, versus serialized data.

**Austin Gil:** Exactly. And the streaming stuff - for anyone listening, if this is your first experience with streams, it's really confusing. I don't even want to try and tackle explaining it, because it took me probably like 10 times of reading the same thing, reading different things, doing reading, versus video, versus presentations, before I actually had a decent grasp. So I do want to stop and say, if you are coming into streams your first time, be kind to yourself, and understand that a lot of people have problems with it, and that's okay. You'll get around to it.

**Kevin Ball:** I mean, I think there is a fundamental sportsball metaphor that we can make here...

**Austin Gil:** Sure, let's do it.

**Kevin Ball:** Let's do it. Sportsball...! So imagine that you have three people in spread out from each other, and you have a pile of soccer balls. You have like 10 soccer balls, and they start with one person. And you want to pass those balls along your lines, through a fireman style, one, two, until they get to the end. A stream would involve... A person starts with -- has 10 balls, they kick one to the middle person, that middle person immediately kicks the ball forward. And so as you transfer these balls, the person in the middle, as soon as they get a ball, they're kicking it forward. They don't have to have a lot of balls all at once.

\[42:03\] A buffered approach, or a serialized approach would mean you kick all the balls to that middle person, they collect them all, until they have their 10 balls. Then they turn around and they kick those 10 balls off to the next person. And so you end up with everything together at each step, bunched along. So bringing this back to programming, streaming is essentially saying, "Hey, I'm only dealing with a small chunk of data at a time, and I do whatever processing I need to do on it, and then I pass it on and I forget about it. I'm not worrying about it." And that is fundamentally more memory-efficient, because you're only storing in-memory that small amount at a time.

Now, there's things that are harder to do like that, right? Like, if I wanted to analyze an input file, some things I might be able to do easily. Say I'm counting the number of a's in a string - okay, I keep one counter. Look at this chunk; do I have any A's? I add them on, I pass it along, whatever. But if I'm doing like a whole image analysis, that's not going to work as easily in a stream-based manner. So there are problems that are easier to do in a streaming way that not, but fundamentally it has to do with "Am I storing up all the data as it's coming in, so I can look at all of it at once? Or am I looking at each piece and then passing it off and forgetting about it?"

**Austin Gil:** Yeah, that's a good point. I work at Akamai and we have edge compute technology, and one of the things that you might want to do with edge is you receive HTML from the origin server, and then you might want to do some sort of rewriting of the HTML, and then send it to the client... But because you're dealing with chunks of data at a time, what happens if you want to modify, let's say, the body tag, and one chunk of data comes in with open bracket BO, and then that's it, and then the next chunk has DY, close bracket... You can't -- it's really hard to tackle string replacement across chunks.

But anyway, so going back to the streaming thing, like, Kball, you were saying - that does introduce streams, right? You want to avoid writing files and potentially large payloads into memory because of that. So streams are the solution, where you open up a file write stream, and on the server that's running your application, as you receive each chunk of data, you maybe convert it to a string, and then you write it to the file system, and then you release that memory. And then the next chunk of data can come in, or multiple chunks can come in at a time, but you're writing them to disk and then releasing them.

Now, Kball, this concept comes back to one of the points that you made about abstractions. We're talking about the very low-level Node APIs that are available. And at this point, we're talking about -- we've basically described creating your own server, HTTP server, and creating your own file or routing system and file handler. You don't need to do that. We've had Express forever, Fastify is awesome, and they provide these higher-level tools. That makes sense, because I think you should understand how Node does this... But at this point, these are tried and true, and I'm not going to improve upon them. And they provide all the tools that I do need, and that I will need. It's worth it to opt into those.

**Kevin Ball:** Totally. Well, and the concept of streaming data is transferable, right? You can write streaming versus batched operations in Python, you can do it in Go, you can do it in Ruby... That core concept is going to be transferable regardless of whether you're learning it first in Node, first in Node with an abstraction, or what have you. Wrapping your head around that distinction is where the fundamental transferable knowledge is.

**Austin Gil:** Yeah. So those abstractions are good to know. In the article that I wrote, I go into -- basically, I'm building this application in Nuxt.js, which is a very high-level abstraction. Nuxt.js is a metaframework of Vue... But because I know I'm going to deploy it to a server that's running Node.js, I like the fact that Nuxt.js gives me an escape hatch to tap into the lower-level system of Node. And once I have access to Node, then I can write a middleware, or do things in the Node way, that I can take that chunk of code and bring it in and use it anywhere.

\[46:06\] So I can write a file stream handler using the Node ecosystem that will work in Next, in Nuxt, in just plain Node, whatever. And that also gives me access to the Node.js ecosystem, which is abundant, with tools like file system stream writers like Formidable.

So a library that I really like that's part of the Node ecosystem is Formidable. It was written a long time ago, where everything was done with the error handling upfront, the callbacks approach, where you get the error message, you check if there's an error, whatever... And so you can take that and you can write essentially a function that passes the underlying incoming requests from Node to Formidable, and then you have your own little well-tested, established tooling that can then live and be put into the Nuxt ecosystem, because you have a good understanding of where those boundaries are of what is the Nuxt responsibility and available tooling, what is the Node responsibility, what is the Formidable responsibility, and how do they interact with each other and interface with each other. Yeah?

**Jerod Santo:** You guys are nodding your heads, but this is an audio show. Please confirm audibly, yes. I'm here to say yes. Nick?

**Nick Nisi:** Yes.

**Jerod Santo:** Thank you. Kball?

**Kevin Ball:** I'm already talking enough. Y'all can handle this.

**Austin Gil:** \[laughs\] No, I really appreciate that. Kball, you've been doing a great job of checking me, so I appreciate it.

**Kevin Ball:** So yes, I think there's something more than just understanding the lines, which is that a well-designed framework or metaframework will actually give you seams where you can insert things from lower-level abstractions. They will make it easy to do. I think this is something -- if anybody out there remembers the Ruby on Rails ecosystem from 10 years ago, Rails was bad at this when it started. It was "We're gonna make a choice for you, and it's hard for you to sub in your own choices." And over time got much, much better and cleaner, of saying "Okay, here's how you sub in your own choice. You can alternate --", and it kind of created these seams where there's like a little thin abstraction layer around an underlying piece, or technology.

So I think in the JavaScript ecosystem right now, when you look at something like Nuxt, they're doing a reasonably good job of that. They're like "Okay, you're running something on the server; here's where that goes, and within that, you can plug in anything from Node you want." And so they've made it relatively straightforward to follow your understanding of fundamentals, and like cut in the different pieces that you want, where you want it. I think that that is something to look for also when you're adopting these higher-level abstraction, is "Do they provide those seams, those cutpoints for you to come in and inject changes that operate at a different level of abstraction?"

**Jerod Santo:** Which is hard to do.

**Austin Gil:** Because if they don't, that's where you paint yourself into a corner, and then all of a sudden "I need to do something that they don't offer, and I don't have access to the underlying -- the thing that they've abstracted over, and now I'm stuck. Or I have to find something else." That's the worst.

Okay, so I think that that pretty much covers the technical side of things. But I don't think that that paints the whole story of what to deal with and what to think about when you're allowing for file uploads, because - well, first off, it doesn't look at the holistic architecture view of building applications these days, which could be distributed... So if you are building a distributed system, and you are receiving files and writing them to disk, but you have multiple computers that are processing your requests, all of a sudden it's really hard to track down where those files are being stored. Which server, which location, and stuff like that.

**Kevin Ball:** Which is why you stream them to S3 or something equivalent, right?

**Austin Gil:** \[50:02\] Exactly. On top of that, on top of the trouble with distributed systems is what happens when you start receiving large files and you have a server that's maybe like a lightweight server, and totally enough for your application to run, but it has smaller disk space, and all of a sudden, large files are taking up a lot of the disk space, you run out of disk space, you have to upgrade your server. Now, if you have to upgrade your server because you want to add more compute, you're getting sluggish, or you need more CPU - excellent reasons to upgrade a server. If you are running out of disk space, terrible reason to upgrade a server, because you may end up doubling the cost at a not very cost-effective way of essentially doubling the disk space. And before you know it, you're running out of disk space again.

So Kball, you mentioned S3... S3 stands for Simple Storage Solution, I think. S3 was created by Amazon, along with their service. They created their own protocol for storing files, adding files, managing files, deleting, updating, whatever. And it's been great. And that protocol has been adopted by a lot of other file storage solutions partners. I do work at Akamai, I feel like I should interject that we have an object storage service that we offer, that is S3-compatible... And the article that I write, again, speaks to fundamentals. Yes, I work for a company that offers object storage solutions, yes, in my examples I use that... But everything that I write, I try to do, again, at a fundamental level, so you can take this and apply it to anything that is S3-compatible. So anything that uses this protocol, take it and put that knowledge where you want it. Very important to me.

But one of the big factors for object storage, S3-compatible object storage, is that they are designed for these files. So they're highly available, easy to access, they store it in one location, and they're very, very cost-effective. So for the same price that you would get 25 gigabytes more on a VPS to upgrade your VPS, you can get 250 gigabytes, at least with Akamai's cloud computing services. So that's a 10x difference. And that applies -- and again, that would be across different service providers. I'm only saying the numbers that I know off the top of my head, but... Not trying to turn this into a sales pitch.

**Kevin Ball:** So in this case, the core concept is object storage, which --

**Austin Gil:** Yes, object storage, whoever you go.

**Kevin Ball:** ...is essentially like the distributed version of file storage, right?

**Austin Gil:** Exactly.

**Kevin Ball:** It's like, "Here's a location, that leads to a file, that has some set of permissions." And you can even do directory structures the same way you might in a file system... But is there anything more to it? Is there any other concept? Or is it -- if somebody is used to thinking about files, is this just files in the cloud?

**Austin Gil:** I mean, I would say basically yeah. If you're looking at object storage solution providers, I would encourage looking for S3-compatible object storage. I think most object storage providers are S3-compatible, because it's become such an industry standard. And the benefit there, again, is you have portability. You can write your code in one way, and as soon as a different provider, a different S3 provider, or S3-compatible provider offers something that is a deal-breaker for you, or maybe the current provider that you're using changes pricing, or planning, or how you're allowed to access your data, and you want to transfer it - cool; you don't have to change your business logic of your application. That's really important to me.

Any more on object storage? It's highly cost-effective, regardless who you use, and also very simple. And the key is - I won't get into the weeds on the implementation details, but the interesting thing when we bring it back to how you move your files from writing to your server, your application server, to object storage, matters, because there's a couple of different ways. And the question is how do you get those files into the object storage provider? And I think almost every piece of content that I've found out there suggested using what's called signed URLs, where essentially your client makes a request to your backend, the backend serves as a proxy for the object storage hosting, and the backend will make a request to the object storage provider for a signed URL. A signed URL is essentially the location where the file is going to be uploaded to, but it can only be uploaded to by the person with that signed URL. It's basically a URL that includes some sort of authentication mechanism, or authorization mechanism, as well as some expiration date.

\[54:41\] So your backend can provide that to the frontend, the frontend can take that, then upload the file directly to the object storage provider. It doesn't have to go through your backend at that point. And they can get the file there. That's what most people say is the best way, and it is a decent way. I personally prefer building my applications with progressive enhancement built in. You cannot do that, I don't believe, in a progressive enhanced way, because I believe the only way to use a signed URL is sending a put request, which HTML cannot support. So that breaks. But there is a different way, and there's a couple -- I'll explain the other way first, and then maybe we can look at the pros and cons...

The other way is you can send the file directly to your proxy service. And again, instead of streaming to writing the file to disk, you can pass that stream along and upload it as a stream to the S3 storage location. The big downside there is that - well, there's a couple of downsides. One, you are basically paying potentially double for that file, because you are going to pay For the file being stored in your object storage, but you may also be paying as your server, which serves as a proxy, is receiving that file - that's ingress cost; and as it streams that file out to the S3 provider, that is egress cost. So because it's passing through this proxy, you may be paying more, because of the traffic that's being run through. Your mileage may vary, check with your stack... Again, you can take this to anyone.

The other sort of advantage or disadvantage is because that file is passing through your proxy servers, now you have more control over what to do with that file. For example, if you wanted to do file optimization, if it's images, you can't do that if people are uploading directly to your object storage provider, unless you also pull it down, in which case you're going through your server anyway. The other sort of downside is, once again, because that file is passing through your proxy server, what happens if someone wants to upload malware? Now, if they upload malware through a signed URL, it's going to go to the object storage. It's kind of in quarantine there as long as you do some sort of malware scanning on it... But if you're passing a file through a proxy service, that malware could potentially be into your system, and then pass through. So then the question becomes, "How do I deal with malware on my uploads?" And once again, I think that this is the advantage -- as much as it might be a disadvantage, it's also an advantage of passing files through your service, because it gives you an opportunity to actually scan those files for malware. Any questions here so far before I continue into malware?

**Jerod Santo:** I'm waiting for the malware apart, man. Well, how are you scanning these things?

**Austin Gil:** Okay. Okay, so dealing with malware is interesting... OWASP has a whole cheatsheet that I can link to, or is in the blog post that I link from... OWASP has a whole cheat sheet on how you deal with malware in the context of file uploads, and it's pretty interesting, because once again, this sort of library, Formidable, that I had mentioned before - it's really awesome for dealing with files, because it handles all of this stuff that you would want to do sort of for you, or at least provides an easy API interface for doing that...

One of the things is you want to ensure that -- well, essentially, to deal with files or malware, you kind of have to have the entire content of the file. So remember how we said you could stream a file from the client to your proxy server, or to your backend, and then pass that stream along to the object storage location? If you want to address malware, you may not want to do that; you may want to go back to writing it to the disk on that server, because you need the entire contents of a file to know whether it's malware, or to scan it for malware.

**Jerod Santo:** \[58:23\] Right. But you could just stream it to like temp storage or something, and then...

**Austin Gil:** You could stream it to temp storage, or what you could do -- yeah, and you could have a temporary sort of quarantine folder on disk, that is the temporary storage, and then pass that to object storage again, which is probably how you would do this if you went this approach.

**Jerod Santo:** Or have like another bucket that's like your temporary object storage bucket, if you're thinking distributed systems. Those disks -- I mean, local disks just destroy distributed systems when it comes time to actually distribute them...

**Austin Gil:** Yeah... I mean, yeah, you could have another object storage location, but if you want to scan it, you'd still have to pull it down to some server, and then scan it there... So it would kind of be redundant. So I think what you might do is

**Jerod Santo:** Well, it depends on how long these processes take, right? You could throw it in a background queue...

**Austin Gil:** That's true.

**Jerod Santo:** ...and you could have a bunch of workers that are working off the backend to just scan those things...

**Austin Gil:** That's true. You could have you could have a separate backend just for scanning files.

**Jerod Santo:** But I don't know how long it takes. That maybe helps inform this discussion.

**Austin Gil:** That's a good question. So a lot of the OWASP recommendations are like obscuring file names, or not using the file names from the client, because that could use disallowed characters, checking file types, checking content, and the \[unintelligible 00:59:38.03\] or the MIME type of the file, and sort of like filtering that way, preventing certain file sizes... So if you have a system that's like only scanning PDFs, you don't need gigabytes of data... Versus an application that is going to be doing like video editing - you may need to support multiple gigabytes. So this is where you get into like more bespoke decisions around what your application is.

But ultimately, you can have malware scanners running. Like, basically receive the file, write it to disk, run a scan on it, but that can take a long time, and therefore you can't really build a system that does that within the request/response cycle, because a request and a response has to be quick. Basically, just the time it takes to upload it, and then I need to know that it's there. So you would want to build some sort of background process that then requires a database, that keeps track of all of the metadata about the file: the file name, where it exists on disk, what the MIME type is, and then some sort of other information of whether it has been scanned or not, and then you'd have some sort of background process that says, "Okay, check the database, look for the files that have not been scanned, pull them off of their location, download them, scan them if they're good, put them back, mark them as green..." And then this kind of comes back to "Are you going to be presenting these files back to a client somewhere?" Because if you are, you want to be able to upload those files, you want to be able to tell people that their files are uploaded, and you have a record of them; so you might show that to people on the frontend. But if they have not been scanned, you want to show them the metadata, but not provide a link to download that, because you don't want to -- even if you protect your system, even if malware gets into your system and you have a way of quarantying it -- quarantining it... \[laughs\]

**Jerod Santo:** You got it.

**Kevin Ball:** Corinthians...?

**Austin Gil:** Something in there... You know what I'm saying; protecting it.

**Kevin Ball:** Are we doing Bible verses?

**Austin Gil:** Yeah. \[laughter\]

**Jerod Santo:** 1 Corinthians...

**Austin Gil:** You want to be able to protect your system, because you don't want to -- you don't want to give a file access to maybe reading your database credentials, or whatever. But you also want to ensure that your system can be trusted by your users. So you don't want to become a source of distributing malware.

**Kevin Ball:** \[01:01:50.21\] Well, and you can see this example anytime you upload a file that is large enough that it'll take substantial time to a social network, or YouTube, or something like that. They'll say, "Okay, this is uploaded. We are scanning it." Then once it's scanned, it'll go live. And the big guys make it real fast. They do what they can to make that happen really quickly. But it can take some time.

I think to Jerod's earlier point, by the time you're doing all this tracking and background tasks, it's going to be simpler if you build distributed-first. So you put it someplace in S3, you track it, then you have whatever your background cue is; they're the ones pulling it down locally, and they don't have the latency worries. So they can just pull it down locally, do all the scanning that needs, mark it off wherever it is; you don't have to do quite as much bookkeeping, in that sense. So yeah, I think once you're thinking distributed systems, object storage all the way.

**Austin Gil:** For sure. Hopefully -- I mean, I think that kind of tied up the whole solution. We did HTML, JavaScript, Node, metaframeworks, storage solutions... We didn't talk about delivery, which is a CDN to basically make sure that files that are being downloaded to people in Tokyo, or Toledo, or Toronto - they all get them as fast as possible.

I should just mention that CDNs are basically like a globally distributed network of connected computers that can be used to automatically identify traffic, and they're sort of distributed as close to users as possible. So they can route traffic to the nearest node in the network from where the user is coming from. And they're useful for storing things like static assets, so that people don't have to request things all the way from an origin or an object storage location. And they also these days are a lot more advanced; they can offer features like web application firewalls, DDoS protection, and other awesome security features.

**Kevin Ball:** So coming back to then your file example - after somebody has uploaded this file, they've stuck it in an object storage, CDN basically will ask that object storage... The first time somebody requests that file, they'll ask the object storage, they'll get it back, and then it'll store a copy of it all out on these edge nodes, which are computers all over the world close to where users might be... And then when future requests come in, following all the cache protocols, and whatever your cache timeouts are, it'll get it just from that local edge, not even go back to that object storage.

**Austin Gil:** Kind of yes. I think most CDNs work with a poll feature instead of a push feature. So when you upload a new file, you don't push it to the entire network. It's just when a user that goes through a specific node, that node, the first time that request is made, will pull the file from its origin, which might be an object storage location, and then store a cached version. And then any other user that passes through the same node will get that same file stored and delivered at like a fraction of the time.

**Kevin Ball:** Got it. So it'll go back to the object -- you know, Akamai has thousands of nodes out there.

**Austin Gil:** Yes.

**Kevin Ball:** So I might get thousands of hits back to my original object storage, but only one for each location.

**Austin Gil:** Yeah, so it could reduce some of the bandwidth needs for your origin server as well. Because if you're gonna get thousands of hits from users around the world, you're going to receive those the first hit, no matter what. But then if they're coming from the same location, you would only get one hit, and pay for that... In theory.

**Jerod Santo:** In theory. Everything in theory...

**Kevin Ball:** I was struggling to find a sportsball reference for that. It's like tennis, the guy standing at the net, and you hit the ball over, and he's like "Nope." Hits it right back to you. But it doesn't work quite right.

**Austin Gil:** Yeah, I can't -- I don't have a good one. I watch roller derby, so...

**Nick Nisi:** That's alright... Another episode is in the can. And just like coaching kids in basketball, understanding JavaScript file uploads is just mastering these fundamentals. So whether it's a three-point shot, or a three-gigabyte file upload...

**Austin Gil:** Nice...!
**Nick Nisi:** ...practice makes perfect. So keep coding, and keep coaching, and we'll catch you next time.
