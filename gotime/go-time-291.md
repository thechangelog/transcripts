**Kris Brandow:** Hello, hello, hello, wonderful gophers. We're back for another episode, and on this week's episode we're going to be talking about HTML templating, and a nice little project called Templ. Joining me today is my wonderful co-host, Jon. How are you doing today, Jon?

**Jon Calhoun:** I am doing well. How are you doing, Chris?

**Kris Brandow:** Doing well. A little overcast, but besides that, hopefully it's not gonna rain, hopefully. And joining us as well is the founder of Templ Adrian Hesketh. How are you doing today, Adrian?

**Adrian Hesketh:** Doing great, thank you.

**Kris Brandow:** Excellent. And for those of you who don't know, Adrian has around 20 years of experience. He's worked on Perl, ASP, Visual Basic, C\#... A whole bunch of other stuff. Go, JavaScript, TypeScript... Very, very long list here. He works as a tech lead and architect for customers, and he recently worked on a vehicle insurance platform with our other guest, Joe, where they picked Go and event-driven architecture with serverless for the project. Sold the first policy six months later. That's a nice accomplishment there. And the project created 30 new Go jobs, and nearly 30 new Go programmers. That's exciting. That's quite the accomplishment there.

**Adrian Hesketh:** Yeah, it was a really interesting project; pretty intense at times, and they're still really successful now, as the whole team continuing to develop that, and selling lots of car insurance in the UK.

**Kris Brandow:** That's awesome. And using Go to do it. That's quite fantastic.

**Adrian Hesketh:** Yeah.

**Kris Brandow:** And joining us as well is Joe Davidson, who is a maintainer on the Templ project. And Joe has worked with Go for three years now, mainly in the world of distributed systems, a place I love and that's near and dear to my heart, using AWS and serverless tech. How are you doing today, Joe?

**Joe Davidson:** Yeah, I'm good, thanks. A bit warm. I'm in the UK, though.

**Kris Brandow:** It's been a bit warm all over the place. I was hoping to get the fall temperatures, and here on the East Coast it was like 90 this week, or in the mid-90s.

**Jon Calhoun:** It was pretty warm last weekend. The rain was actually -- I was actually kind of liking the rain, because it was cooling things off, and Chris was like "Hopefully, it doesn't rain."

**Kris Brandow:** True. I've been hiding in my air-conditioned apartment for the past week, so I haven't experienced outside very much... So to me, it's just like "Oh, it's just pretty out there", but it's like 90-something, or whatever. I don't know what -- it's like, yeah, it is literally 90 degrees outside. It probably should rain.

**Joe Davidson:** Yeah, I guess we're being quiet because we have no idea what 90 degrees is.

**Adrian Hesketh:** Boiling, boiling temperature. \[laughter\] That sounds really bad.

**Jon Calhoun:** 32.2 Celsius is what it's saying.

**Joe Davidson:** It sounds really hot.

**Kris Brandow:** Yes, it's quite warm...

**Adrian Hesketh:** We're struggling and it's like 25 degrees.

**Jon Calhoun:** Do you guys struggle with the fact that like one degree of Celsius is like a pretty -- not a crazy broad range, but it's like a broader range than Fahrenheit.

**Adrian Hesketh:** No, I wouldn't say so. I guess I like the fact that zero is ice, 100 is steam...

**Jon Calhoun:** I like that... I just want a little bit more precision, I guess, in between sometimes.

**Adrian Hesketh:** Oh, it's the UK... You know, it's always either raining, windy... You can really never tell what's gonna happen.

**Kris Brandow:** Yeah. It's not like those places in North America, where it goes from -20 In the winter, all the way up to like 105 in the summer. You need that expressive range.

**Jon Calhoun:** Yeah. It's also only like two degrees, I think. It's not like a huge range, so it's not that outrageous... I feel like it would matter more for like cooking, or something along those lines, than it would for just your outside temperature. But then at the same time, I've also learned as I cook more that you don't have to be that precise with a lot of things when you're doing that... At least for my level of cooking.

**Kris Brandow:** Yeah, precision is -- oh, no, it's just what you're used to; it's kind of like the default OS you get loaded up with. It's just kind of like, everything makes sense from that reference point.

**Adrian Hesketh:** To be fair, the UK has got no leg to stand on here \[unintelligible 00:04:32.12\] using pints for drinks, we've got like liters to fill the car, but then everything's in miles per hour, and miles per gallon, and all that... So it's just complete absolute mess.

**Kris Brandow:** Oh, so it's like Canada, where you use different units depending on the thing that you're talking about. That's so confusing. Alright, well, we are not here today to talk about different ways to measure how hot or cold it is outside. We're actually here today to talk about templating, and specifically HTML templating with Go. And so let's just start off with - you know, there's an HTML templating library built into the standard library. I literally believe it's called html/template. And you, Adrian, have built a new one. So can you give us kind of the background on that? Why build a new templating library for Go?

**Adrian Hesketh:** Great question. Well, I've been building web apps for a long time, around 20 years... So I've been through a variety of different technologies through that, from my ASP 3.0 back in the day, where you don't really have anything, you're just writing kind of text to the output stream, and no escaping or anything like that; you've got to do all that yourself. And through to kind of modern stuff like JSX, where you've got this sort of super-expressive language, this ability to build components, and so on. And I was picking up Go and sort of looking to build out web pages, and then going "What would happen if I use Go instead of going for something like TypeScript for the frontend? Instead of having this frontend/backend split of two different languages, could I maybe make it so it's just one language? Could I put the same amount of effort into sort of making the backend fast as I do in the JavaScript, and would that make a difference?"

\[00:06:14.16\] And I just found the templating experience in Go pretty frustrating. There's a couple of rough edges on it. For instance, if you want to call a function, you've got to add it to a function map, and remember the name that you've given it in the function map. Then there's a sort of different syntax of how you do for loops. You can't just write arbitrary Go code inside the middle of your template; you have to sort of think about it in advance. And some of the errors happen at runtime, not compilation time.

So I've found that overall it's just not a great experience. And then to add to that, there isn't really any autocompletion, or anything like that. So if you want to sort of display a lot of information, like perhaps you're displaying an insurance policy to a customer, you might want to show all the different fields that are on there. And then if you just type that field incorrectly, you just end up with nothing on the screen. And you only find that out when you run the template. So I was thinking "Well, there's alternatives", right? So I tried out lots of the different alternatives, and I realized none of them had kind of autocomplete at all. So I set about trying to sort of add autocompletion to existing tools that were out there. And I think the one that I liked the most was probably quicktemplate. So initially, the project started out as "Could I add LSP-type features like autocompletion, go to definition, and all that stuff on top of an interesting project?" And it turned out that due to the kind of internals of how it worked, that was impossible. So I was like "Okay, right. It's on. Let's have a go."

**Kris Brandow:** Well, yeah, I like that approach there, thinking of it as like "I'd like to have some autocomplete for my templates." Because I've definitely written a lot of large, gnarly templates, and it is exhausting trying to hunt down "Why is this one thing incorrect?" Or Where's this one thing I'm missing?" Or it's like "Oh, you just mistyped this" or "Oh, you mistyped it when you put it into the function map", or all of that. So I definitely have felt those pains before.

**Adrian Hesketh:** Yeah, that's right. And I think if you go and try and tell people "Hey, this is an alternative to what you're doing over here, that you could use instead, but it's actually like lots worse in these ways", I think it's a really hard kind of thing to swallow for people. They're just gonna be like "Well, I'm gonna use this thing that I've got over here." So I thought I'd try and deal with that kind of early on.

**Kris Brandow:** Okay. And how old is this project? When were you thinking about doing this?

**Adrian Hesketh:** It was probably like three years ago I started thinking about -- I've written a lot of JavaScript frontend projects, and I saw how much people were struggling with learning React... Because it's not like you learn React, right? React is kind of relatively straightforward on its own. But a lot of developers are also learning TypeScript, and perhaps they're learning then the JavaScript ecosystem that goes along with it... And even if you've been doing JavaScript a long time, the JavaScript I learned in 1998 is very, very different to the JavaScript that people are writing today. So people are trying to sort of learn Typescript, and all that kind of stuff. And they're bringing their own knowledge to it. So C\# people write it like they're writing C\#, with loads of types everywhere, and other people write it as JavaScript, with a few type annotations... And I've just found that people really struggled to learn Typescript and adopt it, and I thought to myself, I wonder if there's a simpler way that we can build web apps. And I saw things like DHH putting together Hotwire, the turbo kind of thing, with the hey.com, and HTMX, and those kinds of new, kind of old-fashioned ways of looking at the frontend. So they reminded me of things like the asp.net update panel from years ago. And I thought, "Oh, okay, I wonder if - could that work in the modern world?" So I kind of approached it from that point of view, of making stuff that was really suitable for building those kinds of apps.

**Kris Brandow:** Nice. Alright. So once you decided that you wanted to build this thing, what was the process you went through to actually create it and bring it to existence? Was it just like "I'll make a GitHub repo and then start writing code"? Was there some more planning that went into it?

**Adrian Hesketh:** \[00:10:05.20\] Yes, I guess -- you know, I can't remember how I actually started the project. I'm gonna have to look back at the first commit and see what that actually looked like. But I'd already worked on a parser library. So I had already written the HTML parser in the past, in a different programming language. Because I used to work in the language translation industry, so I had this experience of parsing in HTML. Actually, my job was to try and parse invalid HTML and XML, get the text out of it, and then put it back in its completely broken form, as it was, without messing anything up. So I did a lot of work around parsing broken HTML and XML. So I knew I could write it. So I started out with the kind of parser elements of it.

And initially, really, I was aiming at building a cut-down version of quicktemplate. So the syntax in the first version was basically a ripoff of quicktemplate, with the objective of trying to put the LSP functionality in, and do a proof of concept around "Could I add the LSP functionality to quicktemplate?" So when I realized that quicktemplate doesn't really have an internal object model, so it doesn't parse the template into sort of in-memory representation, which then allows you to sort of interact with it, it's very sort of - the generator, as it's working through, just spits out Go code as it goes. So there's no sort of intermediary step that would make it possible to build a language server that could kind of look at what was going on... So I realized I would have to make a parser for it again. So I started out building the parser, and then as a cut-down version of the project.

So I built that out pretty quickly, and then I had to learn how to build language servers... Because I actually didn't know, I'd never tried it before. And so that was the second part, was "Okay, how would you go around building a language server?"

**Jon Calhoun:** So when you were going through this process, you said that you had like quicktemplates to work from. I assume that means that you didn't really have to sit down and -- I guess what I'm trying to ask is my process for something like this would be to actually sit down and be like "What do I want a template to look like?" So I'd actually write some HTML with some Go code or whatever inside of it, and I'd write a couple of those a few times, just sort of feel like "What do I want this to be, ignoring how hard it is to implement, or anything? Just what would I want it to be, ideally?" Did you already have that done from the quicktemplate stuff, or did you end up changing a little bit from what they had?

**Adrian Hesketh:** So quicktemplate had a lot of options. So things like how you could format things to strings, and so on like that. And so in my mind, what I wanted was something that was maximally as close to Go as possible. So very much like JSX, or there used to be this thing called Razor View in C\#, where you really were just writing your code straight inside the template, and so you've got this ability -- you don't even need to learn anything, you can just look at it and you know how it works, because it's just like your programming language, but with that in it. But I was really looking for the maximum adoption, and sort of -- I didn't want to kind of reinvent the wheel if I didn't need to... So it was really like "Okay, well, quicktemplate is really popular. Let's try and add it to that. Let's contribute to the community, rather than trying to sort of build my own thing." But I didn't really get any engagement from that, and there were some limitations in -- I thought the design of quicktemplate would make it really hard to do some of the LSP features.

So I switched out, and in the end sort of made a version two that was like "Okay, actually, this is the direction that I think we should go in." And that's the one that you see today, which is really -- the inversion was like instead of it being HTML with Go inside it, it was Go with HTML inside it. So it's really pure, kind of dry \[unintelligible 00:13:30.14\]

**Joe Davidson:** Yeah, that's where we kind of had some of the real conversations around "Okay, what's actually ergonomic? What can make this language as familiar as possible to write in Go, rather than like \[unintelligible 00:13:43.25\] having curly braces, and then percentage signs, and equal signs everywhere?" You just kind of want it to be as Go-ey as possible.

**Adrian Hesketh:** \[00:13:55.13\] And by that point, we had real users, right? Ourselves and our team. So we were using an early version of Templ to build HTML for PDFs, that produced insurance documents. So we had real users of it, and they were telling us things like "Hey, I really don't like having to type two characters", because the initial version was a curly brace, and then a percentage symbol, and then another percentage symbol and a curly brace to close it off. And they were like "This isn't great, because it's too much typing." And I could totally -- and that was kind of the syntax we inherited from quicktemplate.

So we started to sort of go "Okay, well, what would a second version look like?" And we did exactly what you were thinking there, of like "Well, what should it look like?" So you'll see that a template looks like a function, because that's what it is. It's a function that returns a component. So we tried to make it sort of the most obvious thing you could think of.

**Jon Calhoun:** I think it's interesting there, because Plush is the other template library I can think of that was written for Go... And they kind of took the opposite approach of "Let's take something" -- instead of something new, but feels like Go, it was "Let's take something that people are familiar with from another programming language, and try to do that." And I think both approaches work, it's just a matter of what you're trying to support, and sort of what your goals are. Because I've looked at both, and I feel like I could be happy using either of them. It's just a matter of like what I'm trying to do.

I will say that I was shocked when I saw that there was an LSP, especially as early as there was for Templ, because usually that's something that something has to get pretty big before they even consider doing it. But when you mentioned that that was something t the front of your mind when you were figuring out how to design it and build it, that makes a whole lot more sense, that you were building for an LSP from the start, versus "Oh, it's an afterthought, and now it's really hard to get working because it was an afterthought."

**Adrian Hesketh:** Oh, yeah. And it was much easier to get it working because it was considered from the beginning. And I think the strategy that we picked with Templ also made it fairly straightforward to build the LSP... Because the way that Templ creates compiled templates from Go -- so it generates Go code from the template that you put in. So you write the template out in your text editor, you run the templ generate command, and it generates Go code. And that's what makes it really, really fast.

But the other thing is, as it's generating the Go code, it knows which bits of the Go expression's inside the braces, and which bits of the HTML are outside, that it's generating itself. So the LSP can piggyback on top of gopls, the Go language server, and provide all the features that gopls provide by just remapping the source code locations between the generated output and the template file that's in there. So essentially, that's our cheat code for getting an LSP from the get-go.

**Jon Calhoun:** So when you say you're generating Go code -- I haven't actually looked at the source code, but I'm assuming you're not generating something that uses the HTML template package.

**Adrian Hesketh:** No, no.

**Jon Calhoun:** You're using your own package behind the -- okay.

**Adrian Hesketh:** That would have been actually pretty good, yeah. \[laughs\]

**Jon Calhoun:** I mean, I assume it would be possible, but I also feel like that might limit what you could do at some point, if it doesn't support something really well and you wanted to do it.

**Adrian Hesketh:** Yeah, it generates really bog-standard Go code; all the Go code in \[unintelligible 00:17:00.09\] It takes parameters -- each function or template takes parameters, and then it returns a component, which has a function on it called render. And you can render that out to any output stream, so like the standard out, or a file, or a response...

**Jon Calhoun:** So you guys built your own parser to make sure that there's not like code injection, that sort of thing.

**Adrian Hesketh:** Yeah, absolutely. We took the features from Google's Safe HTML project, and sort of looked at how they'd approached it and how Hugo had approached it... Because I think early versions of Hugo had some issues around sort of injection... So from the get-go, everything was things like HTML encoded, and HTML attribute encoded... So it's context-aware of that. But sort of early feedback from version one from the kind of wider Go community was "Hey, what's the security model of the rest of it? So what happens if you start to use script tags, and what if you're injecting CSS attributes in some of the other elements of that?"

\[00:18:03.09\] So I went back around and rethought how that could work, and it added two new capabilities. One was this thing called CSS templates. So this idea that you can bundle -- like, if you've used CSS in JavaScript-type techniques, then you generally want to have your component, like a label or a button, include all of the CSS that's relevant to that button, and then you can use an optimization that means that that CSS is only rendered once to the page, even if there's multiple copies of the same component. So Templ can do that; you can create a CSS template, and then it's only rendered as CSS once on that single page. But also, you can pass in dynamic CSS attributes, and those are properly escaped using essentially snippets from the Google Safe HTML library, which covers all that kind of context escaping.

And then the same applies to scripting. So if you have some scripts that you want to attach to a particular component, sort of maybe like a reusable form element, or some other element, you can pass parameters to it dynamically. But it knows that those things are dynamic, and therefore can't be trusted, and JSON escapes them to look out for those kinds of issues like that. Like I say, my plan is to be able to use this stuff for real production, like real production workloads in my place of work. That's the goal. And like I say, we use it at the moment for generation of PDF documents, somewhere in the region of a few thousand a day for customers.

**Jon Calhoun:** So when you were setting this up, did you ever worry that the second generate step was going to cause pushback, or cause people to be scared away from the process? I guess especially knowing that, if I recall correctly, you have LSP for like VS Code and a couple other editors, but I don't think Go Land is there yet...

**Adrian Hesketh:** No, Go Land only added support for LSP type plugins last month, believe it or not. So before that, it was a relatively bewildering set of steps. So there's only two of us that are kind of the core maintainers of the project... So I kind of stuck to what I know. I use Vim mostly day to day, Neovim, and I also use VS Code, typically when I'm demoing to people, and it's sort of less intimidating, or some pair programming with somebody.

So I stuck to the editors that I kind of know and can work with, and I just never really got into sort of JetBrains' IDE, even though I'm an old C\# guy from back in the day, I still never really got into it. But yeah, the last month they released the capability to do that. And the source code and stuff looks really straightforward to do, so it's definitely on the roadmap to do that.

**Joe Davidson:** I think there's an issue and a flag for it, isn't there?

**Jon Calhoun:** Yeah, so -- my question, I guess, at that point is "Did you worry that was going to prevent adoption, essentially?" If you have a team that's using it, and some of those developers are using Go Land, all of a sudden they're at a disadvantage compared to everybody else, which is a little bit unfortunate...

**Adrian Hesketh:** Yeah, that is unfortunate. And actually - yeah, it is a mixed team, where all three of those editors are in play. But I think, actually, most of the teams that we work in - I think, Joe, you'd say the same - the editor, we kind of switch between editors a lot. So I think people really like the "Code With Me feature in the JetBrains stuff. And they see that that seems to work. If you have a dodgy network connection from time to time, it seems to be a little bit more resilient to that than VS Code... So I think we find ourselves using quite a few different editors. We practice a lot of mob programming at work, so there's generally -- sometimes we'll all be on the same machine, or sometimes we'll be taking turns, or different things. In practice, it turned out not to be a problem, but it's definitely something we want to sort out, because I think every year there's a go -- what is it, like a questionnaire, with like a summary of what people are doing. I think it's always like, VS Code is one of the biggest, and then it's Go Land, and then it's like Vim. But I think Vim has a surprising -- what is it, like 20% usage? Quite high.

**Kris Brandow:** Yeah, Vim is definitely the third. It's quite high compared to other languages, which is always a little interesting. It's higher than like Emacs as well. Emacs is very low in those surveys usually, which I always find interesting.

**Jon Calhoun:** \[00:22:04.17\] So when you were doing the LSP with VS Code, and -- I don't want to go too far in the LSP, but was it the same LSP for Vim in VS Code, or did you have to do anything custom for the two?

**Adrian Hesketh:** Well, Joe maintains the sort of Neovim plugin, if you like. The LSP itself is identical between all the different things... But what you do have to add on is the syntax highlighting, which is sadly distinct for each kind of editor... So I maintain the VS Code plugin, and that uses -- although Joe did a PR on it the other day, so we both do now... But it uses a different type of syntax highlighting structure than I think Go Land does, and I think Neovim uses a different one again. So that's probably the most irritating thing.

So I think Microsoft, if they're listening out there, it'd be ideal if you could in the LSP write back the syntax highlighting rules directly onto "Highlight this and this." Because then I could use the existing parser that we've already got, instead of trying to recreate the parser in regular expressions, just to do the syntax highlighting bit.

**Kris Brandow:** I was very excited to see Tree-sitter support for Neovim, because that's been one of my favorite things about -- I rebuilt my Neovim setup a few months ago, and adding Tree-sitter and all of the powerful syntax highlighting and all of that that it gives you, and also the nice little errors it gets you are super-nice.

**Joe Davidson:** Yeah, it is really good. Yeah, that wasn't even as some good Samaritan; I can't remember their username, who contributed that, but... Yeah, I was very happy. My plugin had a few issues, like the highlighting would break down in certain places, because it was my first Vim plugin, so...

**Jon Calhoun:** Yeah, I feel like that's something that's -- anybody who decides to build a project like this, I feel like they're likely going to be in the same spot, because I don't know anybody who is like an LSP specialist. It seems like a weird thing to specialize in, I guess...

**Adrian Hesketh:** Yeah, they must exist somewhere, like probably inside JetBrains or somewhere along those lines.

**Jon Calhoun:** Yeah. Or maybe Microsoft has one that like went and actually helped build LSPs for all the different languages, but... It's got to be a pretty small subset of developers who have that much experience. So I was asking a lot of those questions, because I feel like other people building similar projects are going to be interested in "How do I go about doing this stuff?" Because I think you're right, the three big ones of Go Land, VS Code and Vim, if you can support those, you've got a large enough group of Go developers and you're pretty good.

**Adrian Hesketh:** Yeah. I did a talk about LSPs and how to implement them at GopherCon UK a couple of weeks back... So that's going to be hitting YouTube whenever they get around to editing it. And I did it just for that reason, just because I've been through sort of the pain, if you like, of trying to interpret the specification, learn how it works and kind of redo the bits and pieces of source code and so on. So I've kind of gone through that, and I'm trying to share my experience of how other people can adopt these techniques for their projects, and hopefully help other people maintain them... Because I use things like the Nix language, which only recently got an LSP... And I think there's some other folks who are trying to build language service for all sorts of different tools.

So yeah, it's really 00 I think it's actually easier than it looks once you understand the spec... But the spec is quite difficult to get. There's no kind of entrypoint on the spec. It just kind of starts hitting you with "Tere's this type, there's this type, there's this type, there's these concepts, there's these concepts", and then sort of initialization steps, and its own -- you have to kind of read a lot before you go "Oh, okay. That's how it all fits together."

**Jon Calhoun:** So when you were building this, did anybody ever tell you or criticize you for building something that does server-side rendering when -- because I feel like I hear this a lot, where people are like "Why are you building applications, or showing something that uses server-side rendering when everything modern uses React?" ...at least in their head. And this is especially true of -- so I teach people how to do web development and other stuff, and I very much like to split it up to be like "Okay, we're gonna start with server-side, because it's significantly easier to wrap your head around, and then later we can add in the React stuff, if you want. But there's no reason to start with something more complicated than necessary." And I feel like you would have had that a ton, because you're building a whole library around that.

**Adrian Hesketh:** \[00:26:10.01\] Oh, absolutely. But in the UK, we have this government agency called GDS, or Government Digital Services, and they've defined a set of standards for building government services. So things like renewing your passport, getting a shotgun license, or anything along those kinds of lines. And what they've really focused in on is the accessibility of those services, like how can you make those services super-easy to use.

The NHS, which is like our National Health Service, if you want to log into the NHS apps to book a GP appointment, or kind of look at your prescriptions and stuff, all those services follow the GDS kind of standards for logging in, and they almost work without JavaScript on the client, because it's all about making sure that -- a lot of people who are accessing healthcare systems and so on might have temporary problems with their eyesight, or temporary problems... They haven't necessarily learned to adapt to using technology. So the idea is to make it sort of super-straightforward. So you see a lot of server-side rendering in those kinds of approaches, because it's kind of like the way that screen readers can work really effectively. It doesn't do any screen flashing, and all the kinds of accessibility elements.

I'm sure it's possible to do sort of really great stuff with JavaScript, but... Yeah, often it's set by clients to say "No, absolutely no JavaScript. It must work without JavaScript." So it's not completely out there to sort of make an app without JavaScript, even in 2023, in the UK, at least.

And then the other element is I really do think it's difficult for people to adopt these technologies and learn them effectively. We trained a lot of new engineers in TypeScript, and it is difficult for them to understand. Suddenly, they're looking at the syntax and going "Oh yeah, that's a union type" and "Oh, that's a knowledge coalescence operator", and "Oh yeah, that's a function passed into a function." There's so much kind of syntax to unpack; it is difficult. So what I was thinking is "What if we focused on the rendering speed on the server-side, and used modern techniques, use some of the new features of modern browsers like WebSockets, and Server-Sent Events, and all this other good stuff?" Would it actually be any worse? Because I've been looking at Lighthouse scores, which are measuring page load speeds of SPA type apps, and you're talking seconds for pages to render. And I'm going "Well, that doesn't seem right to me." Actually, you can do it faster if you adopt server-side rendering.

**Jon Calhoun:** And I should be clear, I wasn't trying to say you shouldn't do server-side, because I will definitely die on that hill of "Server-side is not dead." It's still very useful in a ton of things. It's just, I was just curious if that's something you've got a lot of criticism of, because there's always -- I think it's especially common with new developers. Nobody wants to write about server-side rendering, because it's a technology that's so old that there's not really anything new to say about it. But React and all these things are so new, and sometimes it feels like they're reinventing the wheel in something, so they get to write about it again. And as a result, you see all these posts about it, so it's like "Oh, that's what I should be doing."

**Adrian Hesketh:** I think that's true. I mean, I was I work in a lot of retail systems, as well as sort of pharmacy systems and other bits... Because working for a consultancy, you go across lots of different types of industry. And one thing I was building was like a website that sells cars. And we were really focusing on the server-side rendering aspect for that, because what we were really looking for was really good SEO. We want to have natural search, show up there... So a lot of people are using frameworks like Next.js, which is possibly the most popular for server-side rendering. You get some on the client, some on the server. But what again we've found is that developers really found that difficult to deal with this concept that the same code is going to run in the browser, but it's also gonna run on the server as well. And so you get sort of weird bugs where people just assumed a window object would be present, or they wrote sort of server-side code and shipped it to the client, because they just didn't really understand it... And you could say, "Okay, well, you just need to be a better developer, or you need a better senior engineer around you", but I guess the counter-argument is "Should it be that hard to build a web app?"

**Jon Calhoun:** \[00:30:16.04\] I think in general, it's -- I think one of the things people like about Go is that you can look at the code, and generally speaking, it's relatively easy to read and try to wrap your head around it and understand it. But then there's some languages, TypeScript being one of them at times, where if you aren't intimately familiar with it, looking at it is like "I genuinely have no clue what this is doing, and I've been programming for quite a while." And that's always weird as a developer, because you're like "I should be able to get a rough idea of what's happening."

**Joe Davidson:** I feel like I've discovered a new operator in TypeScript every day.

**Jon Calhoun:** I have not been able to churn on TypeScript enforced 100% in anything I've ever worked on, because I've just never used TypeScript enough to really learn it that well. So there's always cases where I'm just like "If I had all the time in the world, it would be great." I'd spend some time, it could be interesting. But because I don't have the time to do that, and I don't work on the projects that use it that much, it's like "Okay, this is not something for me."

**Adrian Hesketh:** Yeah, I can see that. I think we are at a point now where a lot of developers in the industry have never really seen anything other than React. People with five years experience have probably actually never seen a server-side-rendered traditional web application. So I think we're at the point now where you actually have to explain "Oh, yeah, actually, it works with a HTTP POST. And there's these things called key-value pairs that you get in the POST", because everybody's so used to pushing JSON around through REST-ish APIs' that's just what they're used to doing.

So I think, yeah, we're at the point where it's actually -- there's a lot more to explain than just "Hey, here's a server-side templating kind of thing." And I think even perhaps in \[unintelligible 00:31:47.05\] templating language doesn't even necessarily resonate, I think. If you're old enough like me to remember sort of multiple templating engines over time, then it probably makes sense, "Oh, it's another one of those things that I've seen before." But if all you've done is React, then perhaps it's a bit sort of "Well, what's a templating library?"

**Kris Brandow:** Yeah, I started my career in PHP, and I remember the different -- I mean, this was in the early 2010s, so it was kind of at the end of all of the new templating engines. But I still remember, I started with Drupal, and then we got Twig, and it was this transition, and all of this stuff... And looking at Templ, I was like "This is like a return to the old days", which is really nice. There was a lot of stuff I appreciated about server-side rendering. And I think in the future too, we're kind of headed to a world where server-side rendering is even more competitive with the kind of frontend-only things, especially with like transition APIs; I think, it's the big one. Because I feel like that's the biggest negative thing about server-side rendering, is "Oh, you have this whole big page refresh, and you've got to do all this state destruction." And it's like "Well, we're getting to a place where now you're gonna have nice, smooth transitions between pages. It's just gonna happen all in the browser."

**Adrian Hesketh:** It's even more powerful than that these days. If you've looked at HTMX, you're just literally adding a couple of attributes -- sorry, the hx-swap attribute, and you can swap out the contents of elements on the screen in relation to events.

One of the things that I noticed about a lot of the apps I was working on was we were building validation twice; once on the server-side, because you have to, because you can't trust the input from the client. And then once also on the client side. And sometimes you get like oddities between the two behaviors, or there'd be something that you can only test when you go to the server-side. And so you end up with -- you know, it passes in the client, and then there's this kind of extra step where then it fails, and it's kind of got this weird UX around it. Whereas I think if you look at something like HTMX, basically if you apply these attributes to your HTML, and then make sure the JavaScript HTMX client is in there, they'll basically replace all of your full-screen PostBacks with dynamic replacements. And the feeling of it is surprisingly good... Because latency is massively reduced in modern web apps; we have the ability to use cloud providers, CDNs, and just Go is really, really fast.

\[00:34:07.14\] There's an example app on the Templ docs of a counter, and you're clicking the counter, and it's so fast, it looks like it's happening locally, but it's actually doing a full post to the server, which is actually just a lambda function, it's doing a database update, a transaction, and then returning the \[unintelligible 00:34:21.01\] and it just feels like it's happening locally.

**Jon Calhoun:** We've had the founder, the guy who created HTMX on to talk, and I agree, it's a really cool thing. I think that's actually part of the reason that Kris asked me to do this one, is I think I hosted that one and -- I'm a big fan of seeing these things that allow us to do a lot of the same things we're doing with the really complex front ends, but really simplifying the developer process. And it's cool to see -- at least ideally, in my mind, it's something where hopefully in the future people are learning "Okay, I want to see how server-side works, then I want to see HTMX", and then if you really want to get complicated or you have a need to get really complicated, then you might want to build a complete JavaScript frontend of some sort. But in reality, I think the number of applications, at least in the future that we'll need that is going to be few and far between, or it's got to be a pretty complex app before things like HTML start to not work that well.

**Adrian Hesketh:** Yeah. And you don't have to eat it all in one go as well. One of the things I saw with HTMX that works really well is their kind of micro frontend type approach. So a year or two ago I was looking at things like module federation, and WebPack, and it was really complicated to do. And the basic idea is like breaking up a screen into multiple sections that are owned by different teams. So it's really kind of a way of scaling out your organization, rather than kind of for technical reasons so much. But with HTMX you can point a div at a remote location, and it'll just pull that content in and run it. So it's really straightforward to do, that kind of micro frontend stuff in a way that's really complicated. It can be really complicated in JavaScript, where you have to sort of all use the same version of React to make it efficient and sort of do all these complicated build steps.

**Break**: \[00:36:04.15\]

**Jon Calhoun:** So I want to get back to Templ for a bit, if that's okay. So one of the things I was curious about is, if I recall correctly looking at everything, you can call Go functions just inside of your templates, correct?

**Joe Davidson:** Yeah. There's a few restrictions on it. So initially, the initial design of it is based around this idea of view models. So like this idea that, ideally, you'd want your template to be a pure function. It wouldn't, for instance, call a database inside your template; that would be a bit weird. You would call a database and present information to the template. So although you can call any function you want, generally, the result has to be a string, or something, you're gonna output to the template. Or you can use standard if and switch statements, and so on. But we are going to add arbitrary code in the templates; that's been a feature request from some users. So it wasn't my initial design, or the way that I approach building templates, but I don't think it's the job of a templating library to be sort of pedantic about how someone wants to use it; too opinionated, at least.

**Jon Calhoun:** So I guess my question is, I need to like dig through the Templ stuff. I unfortunately haven't got to use it too, too much, so it's limited... But how do you go about -- I guess you're just using gopls to sort of make sure all that syntax is valid, and everything, behind the scenes?

**Adrian Hesketh:** Exactly that, yeah. It's that straightforward, yeah. So if you're writing a Go function inside -- say you want an HTML attribute to populate some text on a button. You'd open up a brace, and then just use the string. And if the string is in scope, fine. If it's not in scope, you'll get a squiggly red underline, like you'd expect. And you can use packages or functions to return those strings, just like you would in any other Go code... Because as soon as you open up those braces, what Templ is doing is sort of inside the LSP it's saying "Okay, this section here is Go code, and it knows where that is in the generated Go code", and then it proxies through to the gopls in the background. Gopls says "Hey, this code over here is broken." And then when it returns it to the Templ LSP, it goes "Oh yeah, that code location is actually in the template, in this location over here." And so it maps the two things together... Which gives you all the power of the LSP to do that.

**Jon Calhoun:** There are certain functions that if it's like user specific, and you want to have it inside of your template, the only way to really do that with the html/template package is to have a fake version of it, and then later when it comes time to actually render it, you have to clone the template and replace that function with another one. And it seemed like Templ does a better job of supporting that type of use case, where the function you're calling might be more specific to each individual rendering. Does that make sense?

**Adrian Hesketh:** \[00:40:15.16\] Yeah, it totally does, and you're absolutely. One of the things I really wanted to support was component-based design. So a lot of the web apps that I build - you know, I tend to use a UI framework of some description, that has like pre-built buttons, and other bits and pieces, and I want to make sure that you could use those kinds of tool sets or design systems inside Templ, so that you could bundle up the functionality and sort of share it across different projects. So you can write that in Templ, but you don't have to. As long as you implement the component interface, any Go code that you write can implement the Templ component interface, and then you can use it inside the template.

So if for some reason you want to use something that does dynamic lookups, or accesses the request context, or does any kind of weird stuff that sort of the Templ syntax is unwieldy for, you can just drop straight into programming language, like anything else, and use it; one of the two things, side by side, compatible. There's no problem at all to do that. So when you write a template in Templ, it just becomes a function in your Go code, and you can call that function use it like any other.

**Kris Brandow:** Yeah, that was one of the things I thought was really interesting, especially from an extensibility perspective, is that it's just this one interface that's kind of at the center of everything. So if you want to do Go, implement some kind of crazy complex thing, or some extension, it can still work with the rest of Templ; you don't have to go and like try to hack this thing in. No, no, it just fits with everything else. It kind of reminds me of Web Components and like custom elements, where you can use custom elements built with different libraries together, and they all just function together. It's kind of built on that kind of core foundational interface.

**Adrian Hesketh:** Yeah, good. Yes. Absolutely.

**Kris Brandow:** I do have a question about the LSP... So when you proxy through, is it rendering it as it's running, so it has something to give to gopls to actually be like "Oh, this is the location" and whatnot?

**Adrian Hesketh:** Exactly. It runs a generation. So it takes in the source template code, it generates the Go source code, and passes that to gopls, and then says "Hey, here's the latest Go code." And then gopls responds back with some notifications around "Oh, yeah, this is fine." It returns some diagnostic information to say "Hey, this is invalid", or "This is a warning", and that sort of thing. Yeah, so it's running in the background all the time. And obviously, the performance of that matter is so -- I've spent quite a bit of time on things like profiling that, and reducing the amount of time... Joe did a lot of optimization work on things like rendering speed, and other bits and pieces of that.

**Kris Brandow:** So what kind of projects do you kind of aim Templ to be good for? Is it kind of like any kind of web app? Is it smaller, medium, larger size? What kind of your vision for that?

**Adrian Hesketh:** Well, my initial kind of focus was kind of internal admin type systems. In my case, we had Go backends, and things like that. We wanted to be able to sort of "What's the minimum amount of work we can do to produce a really effective kind of frontend for this stuff, reusing our Go code?"

For instance, in one of the projects Joe and I have been working on, we use go APIs in the backend, but TypeScript in the frontend. Okay, so now we've got a problem, right? We've got Go types, and now we have to generate TypeScript types, or create TypeScript types... And so we use TypeScriptify for that. Other approaches might mean having some kind of exercise where you use something like Open API specification to do code generation... And now you've got these extra steps in what was previously a fairly straightforward thing. So I was thinking, how can we limit the amount of code and stuff we have to do? So initially, I was thinking admin apps and stuff like that, and then also a generation of server-side documents, and that sort of thing. But I'm thinking actually it's suitable for any kind of web application that you feel like writing. That's the goal, is to make it a valid and genuinely workable alternative to using tools like React.

\[00:44:18.22\] So React is a sort of big frontend, and stuff. And I think Templ is just a way of rendering HTML; you're free to then use HTMX, or Turbo/Hotwire, or any other kind of frontend additions to just raw HTML. You can plug in your favorite CSS library, one that uses loads of attributes, or whatever you want to do on top of that.

**Kris Brandow:** I like that vision. Like, take on React.

**Adrian Hesketh:** Yeah, that's right... As a really tiny team of two people. \[laughs\] But that was part of it, actually. A lot of the core design was based around this idea of frustration around the built-in Go templating, and why is there no autocomplete... Like, it's sat in the kind of issues list for ages. And when I looked at how hard it was to implement based on the design of the language, the Go templating language - it doesn't really have any types in it, the built-in one. And I was like "Oh yeah, well, no wonder it's really difficult." It's a real challenge to do that. So I was thinking -- it was kind of an experiment to see "Would this be possible? Is this real?" And also, is it sustainable? Can a solo dev essentially manage this? And then Joe has been really active in the project since then.

I think one of the worries, of course, when you adopt something like this is "Is this a sustainable project? Is this just like a flash in the pan, you get bored of it in a year and then you'll never see it again?" So I wanted to make it something that I felt like I could manage, that wasn't too crazy, wasn't like out there. So limiting the scope to a reasonable amount, but still making it useful.

So yeah, it's a balance to do that. As the project's gone more successful, people have a vision for it themselves, or kind of something that they'd like to see, or features they'd like to add... I think that'll be more challenging to keep control of over time. But it's great to see the numbers of contributors sort of rising, and we're getting really good pull requests now. I think it's probably one of the nice things about making a tool that's aimed at developers, is there's a good chance of doing a really good quality pull request.

**Kris Brandow:** Yeah, that always feels like one of the tough things about managing an open source project, is navigating "How do I make sure I say involved in this, I still have the energy and the desire to contribute, and how do we manage expanding the community?" We've had Ben Jonson on the podcast multiple times, and he talks a lot about how challenging it is to kind of maintain projects. And he's kind of gone this route now where he's just like "No, we don't take any outside help", kind of taking the SQLite model of just "Here's the code. You can use if you'd like, but I'm not going to take any of your requests." But he works on a very different type of thing, that I think makes it more challenging for that, whereas I think you are working on something that is a bit more easy to have more people come into. It's not a database at the end of the day, which is quite a bit harder, I would say, than a templating engine; not that building a templating engine is easy, it's just databases tend to be really hard.

**Adrian Hesketh:** Yeah, that's totally reasonable. I think one of the things I've been focusing on with interacting with people is trying to explain \[00:47:32.15\] only sitting down to sort of answer something when I've actually got the time to do a good answer. So trying to resist the urge to dash off a quick reply when you see something... But just take a minute, wait till you've got like a good hour to write a good response, and do that. And I guess I've been prioritizing doing a response overwriting code as well. And then when I do write code, I try and make a good explanation of where in the code -- so if somebody raises an issue, before I bother to try and fix the issue, what I'll sometimes do is explain where the issue is, what the probable causes are, and what the steps might be to fix it. And then I sort of write "That's it for today", and then I might come back to it a few days later. But sometimes I get back to it and it's sort of "Oh yeah, here's the answer then." So it's good.

**Kris Brandow:** \[00:48:19.02\] Yeah, I feel like that's a really good way to process things in general, or deal with things in general, is just to kind of let your subconscious chew on it for a while, instead of rushing and trying to figure out... There's definitely been some problems where I've gone down rabbit holes of being like "Oh, I don't know, I'm figuring this out..." And it's just like no, I just need to sit down, write it out, figure out what it was, and come back to it later, and then it's like "Oh, obviously, here's the answer." I feel like that's probably another good technique for the unsustainability of open source in general.

**Adrian Hesketh:** Having a good sleep...

**Kris Brandow:** Yeah, having a -- or just like kind of writing everything down on paper. I've been going through this transformation going back to being a writer myself, and definitely just like writing things down, and spelling it out on the page kind of helps solidify it in a way that just thinking about it in your head sometimes doesn't do.

**Adrian Hesketh:** Yeah. I think we've all been the consumer of libraries and stuff like that where you see a bug, and it's been fixed, and you're like -- it's fixed in 231, or something, and you're like "That's great, but I have no idea how to use it. How to use this kind of new feature", or whatever, because there's no docs, there's nothing else. So earlier this year I spent a few days just sitting down to write reasonable docs.

**Kris Brandow:** Yeah, I went through all the docs. I was like "These are very good." It's surprising for like a smaller project, having -- that plus the LSP. I was like like "This is fantastic." Because it's just like the things you don't expect from the newer projects... Even though it's not that new, but kind of like these smaller, not like a big company behind it projects.

**Joe Davidson:** Yeah, it helps with adoption, doesn't it? ...to explain to people how to use it. I guess one of the enhancements to that in the future is going to be to actually dogfood Templ, and use it to hopefully generate the docs... Because ironically, at the moment, I think it's using a React-based documentation engine, Docusaurus.

**Adrian Hesketh:** Yeah, it is. Embarrassingly, there was a crash on the page, wasn't there? \[unintelligible 00:50:10.07\] JavaScript crashed on one of the pages, and that was broken for a while. But yeah, I mean, Docusaurus is a great product. It makes writing documentation pretty straightforward. It's just some Markdown in a directory. So there's a lot to be grateful for.

**Jon Calhoun:** I think there's even times where you're a big software company and you use WordPress for your blog, because there's no reason to reinvent the wheel.

**Adrian Hesketh:** Yeah, absolutely.

**Kris Brandow:** It's always the trade-offs and what you want to spend your time focusing on. You eventually get to bootstrapping. The Go programming language until 1.5 was written in C... So you focus on some things and you eventually get around to making it not like an ironic thing, where it's like "No, no, our documentation site is in fact built with Templ." It's like, does it really matter that much? Probably not.

**Joe Davidson:** \[unintelligible 00:51:00.23\] In the grand scheme of things now.

**Kris Brandow:** Some people might be like "You should have used Hugo instead of some React thing", but...

**Joe Davidson:** Oh yeah, and Mk -- is it MkDocs? That's the other one.

**Adrian Hesketh:** Yeah, I think it'd be a good addition, because we'd have something to kind of really try out the web features on. So we've done a lot of generating documents, and we've got a few kind of \[unintelligible 00:51:24.19\] their actual websites being served by Templ. But if we had like a Docusaurus, or a Hugo-style documentation engine, then we might have some interesting problems like fuzzy searching, and that kind of thing, which are kind of... Well, they're solved problems in server-side rendering, but just kind of showing how that can be done, and really responsive, using Templ and HTMX, or something similar... I think it could be really cool. And just having a playground really to kind of test out new features, make sure it works, make sure it's ergonomic.

**Jon Calhoun:** \[00:52:02.14\] So for somebody who's building a new project like this, how did you go about making sure the documentation was actually approachable? I say this because I -- I know when you've spent so much time on something, it can sometimes be hard to break it back down to "How does a beginner actually get into this?" without assuming certain knowledge.

**Adrian Hesketh:** I started out by writing like a bullet point list of all the things that I thought would need to be covered. And then I looked at other projects that had done a reasonable job of like a walkthrough, and compared it to that. And then I asked people, I said "What do you think about this set of headings? Do you think this is the right set of headings to learn this thing?" And Joe \[unintelligible 00:52:40.21\] and a bunch of other people around... Basically, just anyone who would look at it, hey, in the office, "What do you think about this?" And then eventually, I was like "Okay, that seems to be the way to go about it." And then I just sat down one weekend, and just started hacking... Like "Okay, here's the headings, here's the Markdown, just get typing", and then lots of editing to make it sort of concise, cut the nonsense out of it as much as possible... Really try to make sure that code samples were straightforward, and put a bit of craft into those sorts of things as well.

Yeah, I mean, you never really know until you get feedback from real users about how successful those things are... But I also wanted to sort of make it super-realistic. There's an example in there of not just how you build templates, like in an abstract concept, but "Here's a web application, here's your classic counter, here's your other bits and pieces." And then it also includes the infrastructure to deploy those in both Fly.io, which is a really great container, a way to host little container-type apps. And then also running inside Lambda functions as well, which I think is a really good option for sort of low-cost hobbyist type projects. And actually, commercially as well. So I think for the last five years, most of the backends that I've written have been entirely driven by Lambda and DynamoDB, for kind of commercial projects, with frontends typically running in sort of Fargate containers running Next.js. So that's been a really successful pattern. So I was like "Okay, yeah, Lambda. How do you how do you do these things?" And the infrastructure as well, so you can really get going fast.

One of the things on our roadmap is a -- you know the new go new feature that's sort of been kicked around, this idea that you can create a new Go project... So one of the things with Go is you've got this really nice experience, of setting up a new project, except you have to start it with go mod in it, which is a sort of really strange set of words... Because as soon as you say to a new go programmer "Hey, first you have to initialize your module with go mod in it." It's like "Okay, what's a module? Why do I have to type this stuff?" Whereas I think typing "go new" is a much more approachable, "Oh yeah, I can kind of understand what that's going to do." So yeah, if you imagine saying "go new" and it creates you a website structure in Templ, I think that will be a nice way to sort of batteries incl-- it's trying to be a bit more batteries included, how to get started.

Because I think it's a challenge in the sense of most web projects need both the bit that renders the HTML, like the server, the dynamic bit, but also static content, like images, JavaScript bundles, CSS bundles, and other bits and pieces. So the hosting isn't always straightforward as well as, if you want to get the lowest possible cost... Which I do.

**Kris Brandow:** Alright, I think that's a good place to end. So let's move on to our final segment of the show, Unpopular Opinions.

**Jingle**: \[00:55:43.01\]

**Kris Brandow:** Alright, let's start with you, Adrian. Do you have an unpopular opinion?

**Adrian Hesketh:** Alright. I'm no fan of Docker. Or Kubernetes. There we go. I said it. I said it out loud.

**Kris Brandow:** \[laughs\] Okay, do you want to expand upon that at all, or do you just want to leave it there?

**Adrian Hesketh:** \[laughs\] Well, there are lots of different reasons, I guess... I think when Docker came out, I was sort of a relatively early adopter, using Rancher 1.0 before kind of things like Kubernetes existed, I think, in the wild... And before kind of the cloud providers really got really good options for running stuff. Yeah, it was okay, it was a good way \[unintelligible 00:56:38.04\] doing things like what I was doing on premises. But I think over time, I've been a bit more frustrated by some of the limitations of it, in terms of the overall architecture of the thing. One is like the lack of reproducible builds in Docker containers; essentially, you're just running shell commands and grabbing things off the internet, and that sort of stuff, so it's really hard to reproduce a Docker image. They're pretty big. You still get these kind of multi-hundred megabyte things, when with a Go program you've just got a little binary, generally.

Running Docker in Docker is still a pain. If you want to build a Docker container inside a Docker container, that's still a problem. Rootless Docker and the security sandboxing around that isn't great. The sandboxing of Docker isn't ideal, either. It's still difficult to achieve that.

So yeah, I think it seems like we've put a lot of effort into Docker, and the results are alright, but I still feel like there's more we could do in that space. Maybe it's time to more seriously consider other options... But it's got so much kind of mindshare, and sort of things going on that it's the center of a lot of ways of working.

**Kris Brandow:** Alright. I think that'll probably be pretty unpopular, because people do love themselves some Docker and some Kubernetes...

**Adrian Hesketh:** \[laughs\] Yeah, I guess I didn't get into the idea of, you know, the problem that Kubernetes solves, in the sense of we've been packing lots of processes on a single machine isn't necessarily a problem that you face in the modern cloud environment, because you have like a mixture of different instance sizes from providers, and so on. So are you really benefiting from Kubernetes? I mean, this idea that it's an abstraction layer across your cloud provider is okay, but you generally start using the secret management features, or the kind of database platforms of your underlying platform anyway, so you tend not to be that insulated from it in practice.

**Kris Brandow:** Yeah, yeah. I definitely don't disagree. I think people kind of use Kubernetes a little too quickly most of the time. It's like, you probably don't have the support you need for this, but.. Alright, we'll poll that on Twitter and the Fediverse, and...

**Adrian Hesketh:** \[laughs\] Oh, no...

**Kris Brandow:** I guess X now. X, formerly known as Twitter, and the Fediverse... And we'll see if our audience agrees that that's an unpopular --

**Adrian Hesketh:** I'm gonna be in trouble a long time. Am I gonna get canceled in tech?

**Kris Brandow:** We'll see. I am king of unpopular opinions, or the monarch of unpopular opinions. I got some really good ones. I think I'm still number two of all time, so... Yu don't have to worry too much. But maybe Joe can one-up you. Joe, do you have an unpopular opinion?

**Joe Davidson:** I do. It's not tech-related, but my opinion is that socks and sandals are actually an underrated combination. I think that for casual footwear, people are looking for like peak breathability. What's more breathable than a sandal.

**Kris Brandow:** So doesn't the sock defeat the purpose of that? If you want peak breathability, you would not want to wear socks. Like, why are you wearing socks? I don't understand it. That is unpopular with me.

**Jon Calhoun:** I'm on board here.

**Joe Davidson:** It's comfortable...

**Adrian Hesketh:** I mean, I would never wear sandals... I'd feel broke.

**Jon Calhoun:** \[01:00:01.09\] I can say, after all sorts of sporting events, I've taken off shoes and slipped on sandals, and it's so comfortable at that point. And for whatever reason, if you take the socks off, it's just not quite as comfortable.

**Joe Davidson:** Exactly.

**Kris Brandow:** It just looks weird.

**Jon Calhoun:** Sure.

**Joe Davidson:** It's coming back. I'm calling it now, it's coming back.

**Jon Calhoun:** I mean, I will say this... I don't know that I'd wear it to an interview.

**Adrian Hesketh:** Yeah, okay... I mean, yes, I can see that. What about crocs? Are crocs sandals? They are, aren't they? And socks with crocs is an acceptable combination.

**Kris Brandow:** I don't think crocs are ever an acceptable anything.

**Adrian Hesketh:** Oh, that might be actually an unpopular opinion... I mean, I'm not an expert on fashion, but I believe them to be quite fashionable at the moment.

**Jon Calhoun:** I don't know if crocs were ever fashionable... I think they were just comfortable, and people didn't care.

**Kris Brandow:** Yeah. I feel this is kind of like athleisure in general, or like that whole wave, which is kind of like "We all know you don't go to the gym, or you're not doing yoga." People are just like "I don't care. It's comfortable, and I'm gonna wear this." Or wearing sweatpants to the grocery store, or whatever. It's like, okay, if that's what you're gonna... I feel like the people that wear sweatpants to the grocery store are also people that wear socks with sandals, or wear crocs with socks.

**Jon Calhoun:** I mean, I've worn pajama pants to the grocery store.

**Adrian Hesketh:** I wore a tie to work the day, and everyone just couldn't understand what was happening. They were just like "What? What are you doing? What's going on?" It's just like "I just wanted to make you feel uncomfortable."

**Kris Brandow:** I remember it was a few months ago I saw a tweet, or a post on X -- whatever; a tweet... So like this fashion guy -- because someone was just like "Oh, tech, people don't care about fashion." And he's like "Yes, you do. Try wearing a suit to work and see how people react to you." I feel like you could probably still land a job if you wore socks with sandals to an interview, more than if you wore a suit to an interview for like a software eng job.

**Adrian Hesketh:** Yeah, like 10 years ago my whole team used to wear like shirts and ties to work every single day. And I had a client over in San Francisco, and I was over there, and we opened up the video call and like one of my engineers sat stood there in his shirt and tie, and the whole room started laughing, and they were just like "Oh, he's an engineer? How did you do this?" I was like "This is just what we wear." It's totally different now, but yeah, 10 years ago it was pretty standard for software engineers. Professional job.

**Kris Brandow:** Yeah, yeah. My first job I had to wear business casual, upper business casual. So it was buttoned-down shirt, with a tie, and slacks, and nice shoes.

**Jon Calhoun:** It's definitely who you're interacting with. because I think a lot of government contractors in the State still -- you're still expected to dress reasonably upper business.

**Kris Brandow:** Well, I guess we should try and wrap this up... Socks and sandals - I don't know. We'll poll it on the internet and see how it goes. Jon, do you want to try?

**Jon Calhoun:** I'll keep it simple and say that I don't think the html/template package is that bad. It definitely has quirks and it's weird to get used to, but once you get used to it it's not terrible. That's not to suggest people shouldn't try Templ. I think they should. But...

**Kris Brandow:** \[laughs\]

**Adrian Hesketh:** Yeah. And Templ isn't trying to compete with html/template. It's going for React. Html/template is not the enemy. Not that React is the enemy; it's just a tool, right? \[unintelligible 01:03:26.27\]

**Kris Brandow:** But I feel like if you want to use the kind of built-in style, you should go with Google's Safe HTML package over html/template. I feel like that does some security things that html/template doesn't do, if I'm remembering correctly...

**Adrian Hesketh:** I think actually Go's html/template does a lot of really good stuff around context-aware escaping of stuff, definitely picked -- like, it is very much aware of like the context that it's operating in when it's dropping in variables. It's good stuff.

**Kris Brandow:** Oh, okay. Well, I stand corrected. Alright, well, I think that does it for this episode of Go Time. Audience out there, go check out Templ. It's a really cool package, a really cool library. Thank you, Adrian and Joe, for joining us today.

**Adrian Hesketh:** Thank you for having us on. I really appreciate it.

**Joe Davidson:** Yeah, thanks. Enjoyed it.

**Kris Brandow:** And thank you, Jon, for co-hosting. We'll see you in the next one, everybody. Have a good day.
