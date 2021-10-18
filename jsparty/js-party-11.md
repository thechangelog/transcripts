**Alex Sexton:** Hello and welcome to the JS Party Podcast, where some people might say that it's a party every day with JavaScript, but I certainly would never say that. This is a ridiculous tagline.

Anyways, today we have two guests who are members of the JavaScript community who I'm happy to have on. We were talking a little bit before the show how we were finally brave enough to do an "all-JavaScript dad podcast", the most important, under-represented group of JavaScript developers, almost certainly.

Today we have Wes Bos and Mike Taylor. Wes, introduce yourself.

**Wes Bos:** Hey, everybody. My name's Wes. I'm a full-stack dev from Canada, and I primarily make coding tutorials and courses on how to become a better web dev.

**Alex Sexton:** Very nice of you. Mike, how about yourself?

**Mike Taylor:** Yeah, I'm Mike Taylor, I work for Mozilla. I guess technically I'm a manager. I manage the web compatibility team, and that makes me a half-empty stack developer \[laughter\], because I see lots of really depressing things. I work from home, here in Austin, Texas.

**Alex Sexton:** I also work from home in Austin, Texas. Wes, do you sometimes work from home? Is that true?

**Wes Bos:** I always work from home. I'm in Hamilton.

**Alex Sexton:** What's the HackerYou stuff that you do?

**Wes Bos:** The HackerYou stuff is I teach twice a week part-time classes in Toronto at HackerYou. So I guess I do go in to teach there, but everything else is from home.

**Alex Sexton:** So you lied. This first thing out of your mouth was a lie.

**Wes Bos:** Well, well... Well... \[laughter\]

**Alex Sexton:** You have a pretty good A/V setup. I know this isn't an A/V podcast, but I appreciate a good A/V setup because you do all the tutorials, yeah? So you have like a little office with microphones and video...

**Wes Bos:** Yeah, I think I even asked you about how to do this stuff when I was first getting into it. I had to find a whole bunch of boxes with knobs, and they're turned the right way, and it makes me sound boomier than I actually am, which is nice...

**Alex Sexton:** Very nice! I actually haven't received any of the royalty checks from that help initially...

**Wes Bos:** Well, I sent it.

**Alex Sexton:** \[laughs\] Okay. It must be the damn U.S. Mail.

**Mike Taylor:** You should cash those as fast as you can, because he sent them in Canadian Dollars.

**Alex Sexton:** You're just kidding that we should visit Canada? What's the deal there, just as an economics podcast?

**Wes Bos:** Yeah, there's stuff that's happening in Canada with oil and NAFTA and mortgages, and the Canadian Dollar is going down, which makes those who have U.S. Dollars kings in Canada. So you can come here and... Kings have oysters, buy gold bars, listen to Drake...

**Alex Sexton:** Poutine...

**Wes Bos:** Poutine, all day.

**Alex Sexton:** Yeah, you could upgrade to the meat poutines, the brisket...

**Wes Bos:** Oh, that's so gnarly... Did you have that when you came here?

**Alex Sexton:** Oh, I had the brisket poutine, for sure.

**Wes Bos:** Oh yeah, that's good... I usually get Slaughterhouse, which is every type of meat...

**Alex Sexton:** Oh, man... That's intense.

**Mike Taylor:** That sounds terrible.

**Wes Bos:** If anyone's listening, it's amazing... Poutine is like French fries with cheese curds, and then gravy, so the cheese curds melt. Then you just put like every type of topping on top of it and you just go to sleep after you've eaten it.

**Mike Taylor:** This is how Canadians make it through the winter, right? \[laughter\]

**Wes Bos:** \[04:04\] Exactly! You hunker down... It's sort of like bears, except we still have to live, so we eat large amounts of potatoes and cheese...

**Mike Taylor:** Yeah, and sleep...

**Alex Sexton:** I've always thought that the name "cheese curds" didn't really do the actual thing justice. It sounds gross, the name "cheese curd."

**Wes Bos:** Yeah, curd... I don't know what would be a better name, though. Cheese nuggets?

**Alex Sexton:** Yeah, cheese nuggets would be fine, I guess. What a cheese curd actually is is just like the leftover cheese chunks that fall off in the cheese factory. So it's like the...

**Wes Bos:** Swept off the floor?

**Alex Sexton:** Yeah. Well, maybe not the floor, but swept off of something... \[laughter\] I think we may be a little too far into dairy, but we can come back out. There were a few things to happen in the world of the web this week -- or JavaScript I guess is the party we're having specifically. There is quite a bit of talk about ECMAScript modules hitting browsers, and I'm not sure there's a ton to talk about here... Wes, you've even done some ECMA module tutorial stuff as part of a larger tutorial, yeah?

**Wes Bos:** Yes, I've got a ES6 series, and part of that is obviously learning about how the modules work, but currently what that is is you have to use Webpack or something to bundle it up... So I guess now we are able to use modules straight away in the browser.

**Alex Sexton:** Yeah, and that's the type attribute equaling module. One interesting thing that I think was misunderstood a little bit from the Node drama around ECMAScript modules, which was that you were going to have to use the .mjs extension - so instead of .js, you have to use .mjs... Mike, I don't know if any of this hit standards versus just Node stuff -- because I think it's kind of Node-specific... But on the web, the web version of it, that's not actually true. You can use JavaScript, because we don't currently have a module spec that people are using wrong; it's all pre-built anyways.

The web doesn't give any damn about what extension you use. You could use .php for all your module files.

**Mike Taylor:** You probably should.

**Alex Sexton:** Yeah, yeah. I think it's a best practice, for sure... Just to show your mastery of your knowledge of the non-importance of extensions on the web. Mike, I asked you a question and then I answered most of the question I asked you, but is there any kind of movement in the standards space here that you've seen, or has it just mostly been like "This came out"?

**Mike Taylor:** Yeah, I mean... I think there's still problems that need to be resolved. I don't follow -- a lot of this work was done in conjunction with TC39, so they're the standards body that works on ECMAScript the language, which is what we know as JavaScript. But the actual module loading stuff happened in the HTML spec in the WHATWG, and that's just like... If you ever run out of email to read, you should subscribe to that GitHub repo, because it's -- it's impressive that individuals are able to keep up with that. I'm kind of just like... I like to collect emails for fun, but I haven't followed it too closely.

Alex, you were talking about some of the problems around backwards compatibility for the Node ecosystem, and you're right - we don't have those on the web, in browsers, because like any "module system" we've had, if you used a module loader like RequireJS or the other one... I think you wrote a couple maybe, Alex...

**Alex Sexton:** No, definitely not.

**Mike Taylor:** \[07:58\] That's all just like regular JavaScript, right? It all evaluated to just be like -- the exact same thing is, I don't know, a script tag, at the end of the day. So there have really been no browser compatibility constraints. But there is this issue... There's this "no module" attribute, and that's something that I don't really entirely understand, and browsers don't even really support this now, but there are some kind of problems you can get into if your browser supports modules and you're mixing module code and non-module code.

So there will be a way for you to say like "This one's not a module. This is my fallback for Safari 9 or Firefox 38", or whatever it is.

**Alex Sexton:** Oh, I see...

**Mike Taylor:** But that said, I know like 1% of things to know about that. But if you're concerned about compatibility, like if it's your job...

**Alex Sexton:** It's Mike's job.

**Mike Taylor:** ...in theory, you should know about this. So that's on my to-do list. You know, anytime you add stuff to the web platform -- hang on a second... Is this like a PG podcast, or PG-13?

**Alex Sexton:** PG-13 is fine.

**Mike Taylor:** Okay, so I'll just say stuff is gonna break. \[laughter\] We'll save our swear words for the end, like when we put our kids to bed. Stuff's gonna break, so whenever you add to the web platform... People make all these weird assumptions. Heck, someone might have used type=module, so you're gonna run into broken web pages. This is an area where I imagine in a year or two when we start actually serving web pages like this we'll feel that pain. We just don't know right now.

**Alex Sexton:** Yeah, I don't think there's a ton of people using this in production quite yet, by the nature of how new it is.

**Mike Taylor:** Yeah, this is like this week, right? \[laughter\] They even serve like an evergreen demo-type thing.

**Wes Bos:** I'm just looking at a quick little blog post about it here, and for those listening that wanna know a little bit more about it, what this blog post is recommending is that you ship your ES6 modules to the browser, and then you use this "no module" attribute that Mike was talking about to signify to the browser "Hey, when you do not support ES6 modules..." So you should sort of ship two versions of your code base - one compiled and one not - and you can sort of fall back to the compiled version when there's not module support.

**Mike Taylor:** Sounds like a transition phase, right?

**Wes Bos:** Yeah.

**Alex Sexton:** It's been the no-script of modules, right? \[laughter\]

**Mike Taylor:** It's the no-module, yeah.

**Alex Sexton:** I see where they came up with the name...

**Mike Taylor:** Amazing.

**Alex Sexton:** One interesting thing that I guess I didn't really consider until now - and I may be considering it incorrectly... Whenever they did the modules back in TC39, there are things about modules that are true that they were able to like, since modules are new, and if you're using a module, that must mean you're using new JavaScript, which means that they can make different defaults to the language while you're in a module, if that makes sense. So they assume that since you're in a module, you must be in strict mode. I believe that's the case.

So this would be the first time - since this is the first native implementation of modules anywhere - that that is enforced, versus just...

**Mike Taylor:** An opt-in type thing...?

**Alex Sexton:** Yeah, a part of the compiler that you're using, that may or may not care about the strictness of your code. Because it wouldn't actually be enforced by the engine at runtime, right? So it probably actually means that to some degree there are places where modules could run faster, because they have fewer old things to worry about.

It's async by default, so you also can't do "document.write" and things like that, so it could very potentially allow the browsers -- like, browsers are pretty good at look ahead and all that stuff now, so it may not actually material and make a ton of difference.

\[12:09\] But it's kind of cool that because modules are a new enough thing, that we can unbreak some old things if you use them.

**Wes Bos:** Yeah. That reminds me of service workers. If your browser supports service workers, in order to support a service worker you have to implement a bunch of other things like Fetch and other things... So you only need to do one level of feature detection to be like "Do I have a service worker on the document?" or however you do that. And then you can make all these assumptions, like "Okay, now I'm in a modern environment", and you don't have to worry about all the other gross stuff.

**Alex Sexton:** Yeah, there's something with the CSP that's a very similar content security policy, where things on the page break if you're in an old browser and you have the CSP, but since those old browsers don't have CSP support, then it kind of accidentally works. It's this nice accidental upgradiness that breaks in a really nice way in the old browsers. It's nice when we can move things forward that way. It's kind of cool.

Let's talk about... Mike, you work on low compatibility; it's kind of similar to some of the stuff that we're talking about. I've seen you give a few talks on this, and you're at it from Mozilla, but there's a lot of actual more like general... Is it part of the Standards Organization, the compatibility effort? Feels like it's cross-browser people working on it together to help move the web.

**Mike Taylor:** Yeah, it's not just a Mozilla thing. I mean, Mozilla pays for my mortgage at the end of the day, which I'm grateful for, but our mission... So I guess you have to take a step back. If you've ever looked at what the Mozilla - we call it the Manifesto, the Mission... Maybe I should go take a step back and re-read that... But you've got these guiding principles of what it is that we do; there's ten of them, and number three, six and nine - don't fact-check me on that - really have to do with this notion of like "As an individual, I should have the freedom to experience the internet in any way that I see fit." So that doesn't just mean "As an individual I should download Firefox and use it", which you should, because I like to feed my kids... But you should be able to use -- you know, the promise of the open web and the internet is that anybody can access this information independent of their browser choices or their ability to do certain things... It kind of raises questions of accessibility, or even access to bandwidth etc.

So with that being one of the guiding principles of what Mozilla does, we obviously want the internet to work in Firefox, but we also want the web to work in Chrome, in Edge, in XYZ, Opera Mini etc. So I think by the nature of what it is that we do, we collaborate a lot with other vendors.

This morning I was on a call with some of the good people at Google who work on the platform predictability team. Rick Byers is one, Philip Jägenstedt another, who used to be at Opera... And we were talking about ways we can collaborate and understand what are the pain points in the platform where things -- you know, like "Is this something that Chrome is not following the spec, but lots of web pages depend on? So what are the solutions there? Is Google willing to break that to move towards a standard, or should we change the standards to move towards reality?"

**Alex Sexton:** That's what happens... That's kind of the default answer, usually. Especially with very old Internet Explorer stuff, it seemed like half of HTML5 was us just standardizing internet for...

**Mike Taylor:** Exactly.

**Alex Sexton:** Is it still the case?

**Mike Taylor:** \[16:11\] It's often the case. A lot of the work I've been doing in the past year and a half, two years is just standardizing what I call "the de facto web". So you've got the web that you were promised, or the web that was written in specs and, you know, like people like Zeldman and others said "Code to web standards, and it will work everywhere." And then you've got the reality, which is, you know, like Apple came out with some really cool advanced CSS features years ago... Five, six, seven, eight years ago they had masks and gradients and reflections and all this cool stuff that you just couldn't do anywhere else... So of course designers and developers wanna experiment, they wanna put that in their products, and what happens over time is Apple didn't do such a great job at actually moving those things towards standards bodies, but it worked in browsers, and then we know Chrome came to be and they ended up using WebKit, and then they forked to Blink and inherited all this code.

So basically, the internet depends on this one feature, so you can either pretend, or get really upset, like "Oh, it's non-standard." You can care about that, or you can just say like "You know what? This is part of the web and it has a crappy name... That crappy name happens to just start with -webkit, so let's create a spec for it and let's get all the browsers to implement it, and then it just works."

At the same time, that kind of stuff kind of ruffles feathers. People are not entirely happy about it, both users and some other people at W3C... Some of this stuff that I worked on, the CSS Working Group, they were like "Oh, this is not our ideal design", so they're partially motivated to go make better versions, which I think is great for the web.

To circle back, you were hinting at this... There's an expression, "Pave the cow paths." I'm not sure if everyone's ever heard that with respect to standards or just like path-paving in general - I don't know if that's a profession.

**Alex Sexton:** I always assumed that Ian Hickson the editor of the HTML5 specs default response, like his autoresponder on his email is just "We're actually just standardizing the way things have always been, not designing a new thing." That seemed like his answer to a lot of things, which is fair, but often frustrating.

**Mike Taylor:** Yeah. I mean, that's why drag and drop is so terrible, for example, right? It's like, "Well, IE3 did this, and then Safari 2 copied it, so we might as well make everyone else do it", and then nobody uses it.

So paving the cow path is this notion that like, you know, all these cows walked this way, so that's obviously the optimal solution, so you wanna lay down some asphalt on that. So that's kind of one aspect of this work.

A part of that, my team works on this website called WebCompat.com, and that's a place where you can go if you're just like, "Oh, this website doesn't work in this browser" - it could be Firefox or Chrome...

**Alex Sexton:** Like an issue tracker...

**Mike Taylor:** Yeah, it's basically like a Honeypot for broken web pages... And we've got a small team that goes in and tries to triage... But it's like an open community effort; anybody can contribute, diagnose, do outreach etc. But we use that to try to help us understand "What does the web really look like? What's the shape of the web?" Because it doesn't always line up with the shape of what web standards are.

That shouldn't come as a surprise to anybody who has developed more than one web page and opened it in two browsers. It's all hacks, and there's bugs, and you want certain features but they only exist on one browser, so it's kind of like this big mess. That's a lot of fun and has a lot of potential.

\[20:10\] Just to spitball a couple examples off the top of my head... You can tell me when to stop talking, and I will.

**Alex Sexton:** No, keep going.

**Mike Taylor:** One thing that's really common, a problem for Firefox for Android users is there's this streaming video format called hls - I'm not sure if anyone's familiar with that... That stands for HTTP Live Streaming. So this is not a web standard, it's not like MPEG-Dash or MSE... We have these standards that exist to where you can take segments of video and kind of stitch them together and let people stream them live...

Apple went and they created this other version, which is really popular. I don't know why it's popular; it might be way easier to use. But basically, what you could do is you have a manifest file, it's called an m3u8 file, and that's literally just a text file with a list of MPEG-TS segments. You stick that in the video source, &lt;video src="bla.m3u8"/&gt;, and then the browser that supports it will play it.

It's not an open standard, so that means you can't freely implement this, if that makes sense. You might have to pay some money to some people... And I'm being careful here, I don't wanna use the p-word because then we're all subpoenaed, and... \[laughter\] Right.

So Gecko doesn't implement this, because it's not free as in free stuff, and so...

**Alex Sexton:** You nailed that one... \[laughs\]

**Mike Taylor:** Yeah, thank you. Shoutout to my spiritual mentor, Richard Stallman. \[laughter\] So people go to look at their favorite live streaming web pages, which are typically not PG-13, and it doesn't work, and that's really frustrating, and they report this bug to us. So we come to understand that "Whoa, there's a lot of web pages that are using this non-standard streaming format. This is a problem we need to understand and tackle. What is not working for these people?"

**Alex Sexton:** This is like the classic Betamax vs. VHS story, isn't it?

**Mike Taylor:** Yeah, a little bit. \[laughter\] What was the other one...? It was like HD DVD...

**Alex Sexton:** Yeah, versus Blu-ray.

**Mike Taylor:** Yeah. So another one of these things that I'm working on right now is called Window.Event. It's this global event object, and if you know what this is, I'm amazed, and hopefully you don't use it in your code... This is something that IE invented. They had a different event model before the W3C came up with their own.

**Alex Sexton:** addEvent?

**Mike Taylor:** Yeah... attachEvent."

**Alex Sexton:** attachEvent, yeah.

**Mike Taylor:** And as part of that, you had this global event object. So when you're inside of an event handler, you can just access it by calling event.target, or... It was called "source element", but same thing. And so the W3C was like "No, we're gonna do our own thing called addEventListener" - I think they copied what Netscape was doing - and you pass in the event object.

If you've ever written some JavaScript, you'll know that when you're writing your little onclick=function and you pass in sometimes an e, or an ev, or an event, you can use that guy inside of your event handler, your callback.

So it turns out IE invented this thing, and Safari, back when it was actually KHTML - so this was before Apple even forked... Some crazy Norwegians in Oslo made this - they were called Trolltech... They made a browser engine which turned into KHTML, and they had to implement that for compatibility to get some banks running, or whatever.

\[24:04\] So then Safari has it, people start probably copying and pasting code from Stack Overflow, and it just keeps on working because you had no idea this was even a thing, and it works in Chrome and it works in Edge, because they forked from IE.

So this is one of these things where you're like, "Oh, we should just spec this and call it -- it's part of the web platform, it's ugly, it's historical..." Yeah, so this is something -- I'm working with [Anne van Kesteren](https://en.wikipedia.org/wiki/Anne_van_Kesteren) who is a web standards wizard; he works on HTML and DOM, and probably 50 other things... There's an open pull request, and then that'll just be part of the web.

**Wes Bos:** You're saying the event is just not standardized?

**Mike Taylor:** So the event object is standardized. Having a global variable that references that event...

**Wes Bos:** Oh, I see!

**Mike Taylor:** Yeah.

**Alex Sexton:** That's such a terrible architecture... It's so obviously wrong that it's beautiful that 10-15 years later we were all forced to implement it as a standard. \[laughter\]

**Mike Taylor:** We're stuck with it. So in your work, when you started programming, global variables were amazing, right? And then as it became more sophisticated, you're like "Oh, wait... These cause and create pain."

I don't know what the moral to that story is... You know, this is the technical debt of the web, basically.

**Alex Sexton:** Yeah. I think we're running off on a break, but we'll get back with some hot text after the break.

**Break:** \[25:54\]

**Alex Sexton:** And we're back. So I wanted to ask both of you a question that is not like a normal question that we ask on the show but I often find interesting, especially since both of you have ended up in standards and teaching and stuff like that, rather than necessarily directly creating -- I think we've all done some direct creating, but you guys are in somewhat different positions now.

So I'm interested in how you got into web development. Do you have computer science degrees, and did you do web stuff when you were 10, or was it your MySpace page? Wes, how about you?

**Wes Bos:** Yeah, it was my MySpace page. That's exactly how I got into it... \[laughs\] Which I don't know if you knew that or not, but...

**Alex Sexton:** No.

**Wes Bos:** ...pretty standard for folks like me, I guess. I initially got into it way back when I was sort of in the music scene, and that allowed me to build MySpaces for bands, and that turned into doing T-shirts and CD art, and from there I just started charging, and then I worked all the way through grade school, high school, and then through university building this sort of stuff. Then as I finished university, I just started working for myself, doing consulting and what not.

I've been at it for probably 10-15 years, but I've probably built some sites even before that.

**Alex Sexton:** So you're primarily self-taught?

**Wes Bos:** \[28:08\] Yeah. Well, I would say entirely self-taught. I went to school for what's called "Business technology management", so I have a business degree that's focused on running IT. Generally, they sort of like -- you go to work at banks and stuff, and run the IT infrastructure, and you work on projects and stuff like that for these big corporations. But we were taught a lot about swimlane diagrams and sending emails and the business side of things, but the actual coding - there was no actual coding in the entire course. It's more like that obnoxious manager that doesn't know what they're talking about. But I was coding all through university, so I kind of have the best of both worlds now, where I can understand, I can speak to people, I can write emails, and I know the business side of things, but then I can also sling the code.

**Alex Sexton:** It's very interesting, because your primary job is a teacher, whether it's via the tutorials or via HackerYou school.

**Wes Bos:** Yeah, yeah.

**Alex Sexton:** That comes across to me in a way... I was programming on MySpace, but I really came up through members.aol.com before MySpace. But I was in the MySpace scene for sure. I have a computer science degree, and it's interesting to me how many of the people who write very good, relatable tutorials for people to learn web development don't have that, and I think that's almost a benefit to them rather than something that is harmful.

**Wes Bos:** Yeah.

**Alex Sexton:** It's such a relatable position.

**Mike Taylor:** I think people with computer science degrees by nature lack empathy... \[laughter\]

**Alex Sexton:** Do you have a computer science degree...?

**Mike Taylor:** No, I don't... So my story -- it's kind of interesting. I studied linguistics in school; I did a bachelor's and I ended up working towards a PhD at NYU...

**Alex Sexton:** I was very disappointed whenever you did not finish. Me and your mom.

**Mike Taylor:** Yeah, I dropped out, and Alex and my mom are still working through this. My wife was not sad, by the way.

I was interested in computers as a kid, but we never really had the finances to have a PC at the house, so for me computers was all about the public library, and I would read those old programming magazines where they had basic programs... But I would just kind of like read them and imagine what they did; it's a tragic story. \[laughter\]

Later, when I was in college, I was 22 years old or something, I was at my buddy's house and his younger brother - his name is Karl - was doing something on the computer and he had some text open in a text editor (it was like notepad.exe) and I said "Hey, what are you doing? That looks interesting." So he was a total brat, and he was just like "You wouldn't understand... It's like way too complicated." And it turns out he was editing a theme not for MySpace, but there was a web page called DiaryLand, so it was like even more emo than MySpace... \[laughter\]

**Alex Sexton:** I was on MyTeenOpenDiary at one point, I believe... \[laughter\]

**Mike Taylor:** That sounds .. \[laughter\] I'm gonna go look for those blog posts.

**Alex Sexton:** Yeah.

**Mike Taylor:** And so out of spite I went to the library and I checked out a book on like HTML 3.2 - I don't even think they had 4.0.1 or whatever - and I taught myself how to make web pages, just kind of as a hobby; I thought it was fun.

**Alex Sexton:** It was a challenge from Karl... "Don't tell me what I can't do."

**Mike Taylor:** You kid! It was spite-driven development.

**Alex Sexton:** \[32:08\] Exactly.

**Mike Taylor:** So later in grad school at NYU I needed a way to earn money to pay rent during the summer months; I had a fellowship which paid me $3/day to live in New York City. We were mostly covered for the academic year, and I ended up with some internships and some freelance stuff... And just kind of really self-taught, and got interested in web standards and specs and stuff like that, and just kind of read a lot email in my free time.

Honestly, Chris Coyier (css-tricks.com) taught me CSS. That was like my go-to resource. SitePen had some amazing books and tools, and then as I got more interested in it, I got to audit a few classes at NYU. I took a Ruby on Rails class, and had no idea what I was doing.

I remember the very first assignment was like "SSH into this box and put your contact details in a file. That's homework number one." I remember sitting there in my office, in my little grad student office, trying to google what the heck SSH was... \[laughter\] It took me hours to figure that out. It was pretty painful.

**Alex Sexton:** A part of my computer science degree was linguistics. Do you ever find that it's a useful thing in the language parts of programming itself?

**Mike Taylor:** I think so. I was just thinking about this the other day... What's that thing called that Facebook just came out with, that is like a...

**Alex Sexton:** Prepack?

**Mike Taylor:** Yes, thank you. So Prepack - I was looking at that... It uses Babel - I don't know how you pronounce that.

**Alex Sexton:** It depends... If you're Canadian, like Wes, it's Babel \[baybel\]. If you're normal, then it's Babel \[babble\].

**Wes Bos:** That's offensive to Canadians... \[laughter\]

**Alex Sexton:** Mike, explain what that is, just since it is pretty relevant news... Prepack.

**Mike Taylor:** Yeah, so Prepack is basically something that simplifies your code. It takes Babel, and what that does is it creates an AST, which is an abstract syntax tree... So it will go through and understand what's the structure and the operations that your code is trying to do, at this kind of like abstract, wonky level. You're basically drawing graphs and trees. And once you know that information, you can transform it and spit it out in different ways that will be functionally equivalent.

So what Prepack is trying to do is -- if you go to their homepage, one of the examples they give is like you've got this really complex recursive function trying to get like a Fibonacci sequence, and you're gonna call it, and it's gonna recurs like 27 times. The end result of that function is just the number, like 32,000... Something. I can't remember.

So Prepack will go through and it will do that operation for you beforehand, so the code you actually have to ship to the user is literally like VarX=20, or VarX=30,000, or whatever it is; so you're reducing the computation that has to happen on the client, and also the size of the file you have to send.

Long story short, I was thinking about this... I've spent years in college in syntax classes, and our homework was basically like "Here's a sentence. Now write an AST for this sentence using Chomsky's minimalist syntax, whatever... So it was a lot of drawing trees and doing grammar transformation, so I think that logical education definitely helped understand programming, and it's probably helped with spec writing; you have to be really algorithmic. I'm terrible at everything I do, but it's not so foreign as you might imagine if you have that kind of background.

**Alex Sexton:** \[36:14\] That's nifty. I guess it sounds weird, but you were talking about Prepack, and we're talking a little bit about news... There was a thing that came out this week called Interface Lovers, Ekechukwu is a friend of the podcast, Iheanyi is a dev out of New York. It's InterfaceLovers.com. It's interviews kind of like what we're talking about, on just great designers from different backgrounds on "Where do you come from? How did you get into design?" It's more design-focused than JavaScript-focused, but I thought it would be interesting from a perspective of most JavaScript developers care at least somewhat about the interface design and UX. I just wanted to give it a shoutout, since this was kind of relevant to the things we were talking about here.

I think we may land a plane and go into another break here, but we'll be back with some more from Wes after this, since he's a little bit too polite to interrupt Mike and I.

**Mike Taylor:** I talk way too much. \[laughter\]

**Break:** \[37:14\]

**Alex Sexton:** And we're back! Wes, you work quite a bit on education, almost entirely, we've decided... We've talked a little bit about education on this podcast, but you weren't here, so I'd like to get your take on -- explain the things that you've put out in the past, and sell it or do whatever you need to do here for that; it's not why you're here. You're here because we love you. \[laughter\]

For the record, Mike, Wes and I all go back to the days of the jQuery IRC channel from 2009-2010 area. We were all helpers in that channel back when that was cool, and we know each other from conferences. So before Wes became massively famous and successful doing tutorials, I knew him as a person who helped newbs in the jQuery IRC channel.

**Wes Bos:** Yeah. Or I was asking for help myself. What a nightmare! Already! Work!

**Mike Taylor:** Nobody knows.

**Wes Bos:** Nobody knows.

**Alex Sexton:** So tell us a little bit about the stuff you've been putting out, and I'll ask you some more questions about techniques and stuff.

**Wes Bos:** So I've got maybe six or seven different courses, all surrounding different web development. My two biggest ones that are paid are ES6.io and ReactForBeginners.com. I'm just on the brink - probably by the time you heard this it will be out... I'm gonna launch a series called Learn Node.

So just series that are approachable, they're real-world based, they're project-based, they're fun, they don't really put you to sleep... Just tutorials learning how to attack new technologies that are on the web, and how to implement them into your own world.

Another one -- I've got a whole bunch of free ones, as well. I've got more free ones than paid ones. My biggest one is JavaScript 30, which is essentially just like, from teaching I generally get a lot of questions from people, like "Wes, how do I get better? What do I need to do in order to get better?" Well, the answer is always just like "Keep doing it. Build lots of stuff."

**Alex Sexton:** Program bore.

**Wes Bos:** \[40:12\] Yeah, program bore. And they're like, "Well thanks, but that doesn't help me, because I don't know what to build." I was lucky enough that I'm always curious and I always have ideas of stuff I wanna build, but some people are not that way, or they're just sort of sitting there and they need somebody to guide them through it. So I came up with this JavaScript 30, which is just 30 projects that are between 10 minutes and 30 minutes long.

It's totally all over the place - it's from webcam stuff, to speech detection, to creating speech, to just doing basic DOM stuff, understanding how event listeners work, and clicks, and ES6 and what not... And people seem to really like it, because it's just a great way of -- I don't know, it's kind of a neat way to learn modern JavaScript.

**Alex Sexton:** Get a lot of surface area

**Wes Bos:** Yeah, just to put your time in and get towards that -- 10,000 hours is what they say you need?

**Alex Sexton:** Yeah. Malcolm Gladwell probably needs a few more citations for that, but it seems like a pretty good general idea. The React For Beginners course - I personally purchased that. I kind of knew React and have been using it at work for a while, but I had never done an official read of the docs or read of anything, so I was like "I'm sure there's stuff that I misunderstand or I'm missing that someone who was breaking this down..." -- and I'm happy to announce that I knew everything ahead of time. I learned NOTHING from your course. \[laughter\]

The reality was that, but it was still extremely helpful. I definitely encourage -- not even just this... Like, certainly go buy Wes's React For Beginners course even if you're not a beginner in React and you just wanna make sure you have the holes in your knowledge built... But for other things, too.

I've brought it up a few times with the Redux Egghead.io thing that Dan Abramov did. I've been using Redux for months, or a month, or something like that at that point, and I listened and I was like, "Oh, this is really cool, kind of breaking it down and going back to basics", now that I had jumped into it.

But sometimes it's hard for certain personality types to start directly on a tutorial; you kind of have to jump in and use it, and then be like "Okay, I'm not smart enough to just use this", but that's enough motivation to go learn the tutorial side of things. So I definitely appreciated that tutorial.

The other thing that is interesting is that React kind of moves quickly. How do you handle the fact that context changes, or the version numbers change? What's the strategy there?

**Wes Bos:** Generally, it's just a lot of re-recording, because React moves so quickly... It's sort of a blessing and a curse of doing it. I've re-recorded it twice now.

**Alex Sexton:** The whole thing?

**Wes Bos:** Yeah.

**Mike Taylor:** Wow.

**Wes Bos:** It's a lot of work. It takes about a month to record it. So it's just re-recording it. Or I can go in and jump into a video and be like, "Hey folks, this totally changed, so you'll see me grabbing the index file in the root here, but it's now in a folder. That's where it changed." Or - this is one thing I have to do now - React Router 4, which we use in the class and React Router 4 that actually got released is a totally different API, so I have to import it again... So I'll have to cut into that video and redo it.

**Mike Taylor:** Do you ever think about doing a course with Scriptaculous 1.7? It's settled down, it's pretty mature... \[laughter\]

**Wes Bos:** That's something that I want. When I choose what to do, how fast it's moving is definitely something I take into account, just because I don't want it to be out of date. If it takes me a couple months to build this thing, I don't want it to be out of date within a month.

\[44:06\] I've been talking with some of the Webpack guys about creating a Webpack course, and I'm like "So what are your plans with the API?" and they're like, "Oh, we're totally gonna change it again." \[laughter\] Good! So I don't know... We'll see. It's definitely something that just comes with working on cutting edge stuff.

**Alex Sexton:** Yeah. It's good that you do that, though. It's very frustrating as someone who's learning to come across a tutorial that is no longer up to date. It's so anti-helpful... So I think you're a very noble, good soul for doing that. Good work, good work!

**Wes Bos:** Thank you.

**Mike Taylor:** So you also teach at HackerYou? Is that just general programming stuff? What's HackerYou all about?

**Wes Bos:** Well, I've been there for about five years, and I primarily do part-time classes. I have done two of the bootcamps, but right now I primarily do the part-time classes, as well as one to two-day workshops.

**Alex Sexton:** Let's talk about bootcamps in general. I'm interested in your feelings on how people come out of those... You don't have to name names of others ones; do you have a general idea -- I think probably a lot of people who listen to podcasts or people who are just getting into things, maybe they're in a bootcamp or they're thinking about a bootcamp... Where does it put you, how much can you learn in just your tutorials versus these bootcamps etc.? I'd love your thoughts on that.

**Wes Bos:** Yeah, I think there's really no substitution for learning in person with somebody. Hands-on, having somebody sitting next to you in order to do that, especially when you are first learning -- that's what the bootcamps are targeted at, it's people who are looking to break into the industry. You can get up to speed so much faster by doing a bootcamp, rather than just -- obviously, you can do it with tutorials, but your time is probably better spent... If you are able to quit your job and all the thousands of dollars that these things cost, then absolutely... I think it's a really nice way to start.

It's not for absolutely everybody; I think that there's a certain type of person that you need to be in order to make a bootcamp work for you, but I'm definitely a big fan of them. And I don't just say that because I run one; I actually think that. I've seen hundreds and hundreds of people come out of it, both from the HackerYou one, as well as other people I talk to that take my course, and they're all in really good shape.

**Alex Sexton:** I guess that's kind of the next question that I'm interested in. My feeling is that the way that, and I don't think this is the case with HackerYou, but I think the average pitch for these courses is -- there's a huge lack of available programmers, and because of that, you can come in and learn everything you need to learn by doing this extensive ten-hour day course for ten weeks, and pay these thousands of dollars, and then immediately when you leave, you'll make a six-figure salary.

I think they are very responsible, and I think HackerYou definitely falls into this category of more responsible -- and I don't even necessarily disagree with the idea behind that, which is definitely there's a need for programmers... Honestly, I find that the need for programmers should more be stated "There's a need for senior programmers." I personally don't think people hire nearly enough junior programmers, but how do you find the transition out of the school? My gut is that it's actually more like you can go become an intern at a company and then you can turn that into a job if you do well, and then three years later you can have the hundred thousand dollar salary - which is still great, but I'm interested in how the bootcamp that you see typically translates into being able to get a job, being able to get a high salary, or what the pathway is to that.

**Wes Bos:** \[48:12\] Yeah... I don't have the numbers off hand, but I do know that the people are coming specifically out of the HackerYou bootcamp, within a month of graduating, I'd say about 80%-90% of them do have a paying job. It's pretty surprising how quickly people can get a job. There's lots of companies who are just hiring out of these bootcamps, because they know that they're sort of ramped up... But that is also to say that it's not like anyone can come off the street, take this course and do it; it's generally the type of people that even get into this program, that are sort of filtered through that, they're already good learners, they're already self-starters, they're already smart people. Almost everybody that comes into this has a college university degree already, and they're just looking for a career shift.

That's generally how it is - you can get a paying job right out of the gate if you have the personality type, and then a couple years later you start to see -- are people burned out of it because they didn't actually like this? They don't actually like coding and they're frustrated that Webpack changed again and they're sick of it, because they just wanted cash and they don't necessarily care all that much about all the changing in the web development. Or they actually love it, they love building stuff and they love staying up to date. It really starts to show through after a couple years, because some people I do know after a couple years of bootcamp are making six figures, and some people I know are not longer doing development because it's just not in them, they got into it for the wrong reasons, or they just didn't know... Which, in that case, I'm glad you tried it, but maybe it's not for you.

**Alex Sexton:** The explosion of bootcamps happened probably in the last three, four years maybe...? They existed before that, but the massive explosion of availability of these... Accreditation is not necessarily meaningful if there's no accreditation possibility and things like that, but it's really kind of difficult as someone who doesn't know about programming, if you're going to a credible source. Again, I dislike that we're talking about HackerYou and then talking about non-credible bootcamps, because it's one of the finest bootcamps, for sure.

**Wes Bos:** Yeah, it is accredited actually.

**Alex Sexton:** Oh, really? Cool! Is that a Canadian thing?

**Wes Bos:** Yeah, the Ministry of Education came along and was like, "Hey, you have to have this accredited." It's a lot of work for them; I wasn't involved in that, but I know that they did a lot of work, which is just amazing for students coming out of it now.

**Alex Sexton:** Yeah, that's really great. So to that end though, I'm really interested to see what hopefully comes out of the -- I think it's a good thing for the industry if in five years after the boom you have suddenly way more programmers who have five years of experience, who have worked at their first job now and know enough stuff to move into more senior roles, and things like that. I'm interested to see how that kind of plays out, and it seems like HackerYou has been around long enough to where you're seeing that definitely happened for some of the students... But I'm hopeful that these bootcamps as a jumping off point can increase the diversity -- HackerYou is especially very good at diversity; I don't know the specifics, but it's woman-led... Are there other things...?

**Wes Bos:** Yeah, the CEO is a woman... So it was born out of this thing that we did in Toronto called Ladies Learning Code, which is... It's in the name - ladies learning code. So a lot of people who come to HackerYou and come to the bootcamp, they're coming from Ladies Learning Code, because they took a couple weekend courses, then they stayed up all night building their website, because they realized they just absolutely love it.

So yeah, a huge push for diversity, and I think it's great to see that sort of stuff, an increase in diversity in the industry.

**Alex Sexton:** \[52:24\] Yeah. And I know we're three white guys on a podcast talking about diversity so we should get Heather on the show sometime for sure, because she has a lot of very interesting, good input on all this stuff. But the focus at these bootcamps on diversity seems very important and good, because a lot of times it is absolutely not the case that this is the only problem, but your pipeline is part of the problem; the pipeline of available engineers who exist is not a great pipeline, as well as the industry does not have favorable conditions for diverse members of our community. But if we can get these kind of quicker starts, it seems like a faster fix than going -- which we should actively still do; we should do the slow fix, but also the fast fix.

You can go to elementary schools in different parts of town and put in more computers and add more teachers doing more courses... There's all that, but that's like a 20-year path to fixing things, which we should do... But I really like that if someone came up through a different path, they can switch into the bootcamp path and change their career... Obviously, that opportunity is gonna be available to people who have better opportunities in general, and that's not always the case with diversity, but focusing on that I think can really help to magnify those efforts more quickly, which I think is good.

**Mike Taylor:** So Wes, you're constrained by time... The students that are in HackerYou - did you say it was ten weeks?

**Wes Bos:** I think it's nine weeks.

**Mike Taylor:** Okay... Naturally, I'm biased towards thinking about cross-browser compatibility and interoperability... Is it like, "Here's your assignment. If it works in Chrome, you get an A+?" or do you actually teach what the reality is of front-end development with multiple browsers?

**Wes Bos:** Yeah, that's definitely a part of it. I wouldn't say it's a huge part; obviously it's the latest Chrome, Firefox working - that's great, and then the cross-browser compatibility stuff sort of comes after... It's not a huge, huge focus, but I think that can also be a bit of a -- as important as it is, it's also a huge put-off for people, because then you tell them to open up a VM and get IE9 working, and then it starts to become less fun.

That stuff definitely comes, and there's definitely a lot of pain moments that you can hit along the way, but generally it's more focused on actually learning the stuff and getting the fundamentals down.

**Alex Sexton:** I think there's definitely a difference between web compatibility in the sense that things work back to IE6 and web compatibility in the sense that things work in all current major browsers because the existing \[unintelligible 00:55:14.21\] and stuff like that. Those are two different skills...

**Wes Bos:** Yeah, and it's honestly not even that big of a deal anymore. It's funny, because you do hear these bootcamp students and part-time students going off about "Oh, freakin' IE11! It's so old! I can't believe I have to support that!" \[laughter\] I was like, "Oh, son... Sit down, and let me tell you about the old days of pngFix and all of these things: the rounded corner hack that we had, Cufon, so...

**Alex Sexton:** Let me tell you about some sliding doors...

**Mike Taylor:** \[55:50\] Off-topic, but I used to work at this music-based start-up. We redesigned the site, and it was working in all the evergreen browsers. We were using HTML5 back when that was interesting; then it turned out that the people who we were partnering with only used IE7 - these were like record industry execs - and it was such a painful month after that... We were like, "Seriously?" IE10 was about to come out, or something...

The reality of what's important and when it's important is an interesting topic that's totally not what we're talking about, so I'll be quiet now... \[laughter\]

**Alex Sexton:** That's fine... We're kind of coming up in the last section of the podcast, where we do picks. For people who haven't listened before, this is kind of where we give (let's call it) a shoutout to maybe something that is cool in the industry, or someone, or a book, or a tutorial... And I'll start, since I have one off the top of my head.

My pick this week is gonna be InterfaceLovers.com. I talked about it earlier - it's a website where you can go look at what inspires and got other people into design and user interfaces and UX, and kind of gain inspiration yourself.

Mike, do you have something? Did I catch you off-guard?

**Mike Taylor:** No, I do have something... Maybe this is not cool anymore, but I recently started using this project called Prettier... I guess it's just a JavaScript formatter, and it runs -- it's like an NPM thing, so you need the Node stack to get it to work; you don't have to be developing on Node to use it, but basically it's opinionated... You can configure a couple of things, but it's nice... If you've ever had to do code review and you're constantly writing "'nit-, space before paren', or 'nit-'" a big waste of time. So on this project I work on, we decided "Let's just stick this in there..." You can code however you want, you can use all your own weird habits, but run this thing before you submit a pull request, and it's great; you never have to worry about indenting your code ever again.

**Alex Sexton:** Classic. Wes, how about you?

**Wes Bos:** Mine is a Chrome extension called NiM (Node Inspector Manager). If you run a Node app from the command line and you wanna console log something, you know that it's kind of stone-agey, because all you get is text and you don't get any of the formatting that you do in the regular console, or any of the debugging tools that you're getting in Chrome's tools. So if you throw --debug to a Node process, it will give you this random URL that you can visit in your browser, and then that will allow you to use the Chrome dev tools to inspect your application.

The problem with it is every time your application starts, it gives you a new URL, so you have to copy/paste or click through that URL every single time. So what Node Inspector Manager does is it will watch your system for these instances and it will automatically open it up.

Recently after I was chatting with the guy who builds it - now if you have a nodemon that kills your process and restarts it every single time that you save a file, it will just refresh the page to the new URL of the updated version of your debugging instance.

So it's just like you would normally use in like a front-end debugging, you can use this to debug all of your Node stuff.

**Alex Sexton:** That's nifty. So it's a Chrome extension that port scans your computer and watches all your processes.

**Wes Bos:** Exactly.

**Alex Sexton:** Make sure everyone installs it as root... \[laughs\]

**Wes Bos:** Well, okay... You give it a port and everything, and it's on Github as well. Maybe I am gonna get totally hacked and whatnot, but... \[laughter\] You can manually connect to it as well, but it's no way to live your life.

**Alex Sexton:** \[01:00:12.07\] It seems really cool, because -- and I always hate talking about Node without Mikeal, because I'm sure he goes back and listens to these and then he's yelling because he knows something that I don't, but... \[laughter\] The path to this point has been long for Node debugging. We've had Chrome DevTools pretty much the entire time that Node has been around - I'm pretty sure that's roughly accurate - the good Chrome DevTools that could do this... And there have always been little projects that pop up - Node Debugger, and there was another one back in the day - and it was always just like it runs Chrome DevTools, but it actually runs it as a totally separate web server, so it's not actually the Chrome DevTools you know and all the good features are gone and you can't do any of the stuff... So it's been years in the making, and now you can finally just run your Node app and you get Chrome DevTools automatically attached.

The kids that you're gonna teach this to in your Node class are gonna be like, "I can't believe that it has to reload every time and it just can't do in-memory swapping of something!" Well, let me tell you... \[laughter\]

Mike Taylor is one of my favorite "Kids, get off my lawn" tweeter, so if you don't follow Mike on Twitter, he often tweets about websites he comes across that have poor compatibility with the web in general, and his dry "get off my lawn" attitude about it is potentially some of my favorite Twitter content. And Wes is notorious at this point for tweeting on tips and tricks, so go follow @WesBos.

**Mike Taylor:** You have these really nice hot tips...

**Wes Bos:** Yeah.

**Mike Taylor:** So you can search for "Wes Bos" and like a flame emoji and you'll learn so much really cool stuff.

**Wes Bos:** You actually can't!

**Mike Taylor:** Nice!

**Wes Bos:** No, you can't, because you can't search by emoji on Twitter. I get emails all the time; people are like "Where's the archive of your hot tips?" and I don't have one. You can use the Twitter stream API to search by emoji, but you cannot do a back search by emoji.

**Alex Sexton:** That's rough.

**Wes Bos:** Yeah...

**Alex Sexton:** So Mike Taylor's Twitter is his name, @MikeTaylr - without the "o" at the end. That's what you guys both are pretty much everywhere. Check these guys' stuff out, and well it was nice to talk to you all!

**Mike Taylor:** Bye!

**Wes Bos:** Thanks for having me!

**Mike Taylor:** Thank you!
