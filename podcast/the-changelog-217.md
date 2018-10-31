**Adam Stacoviak:** Welcome back, everyone. This is the Changelog and I am your host, Adam Stacoviak. This is episode 217 and today Jerod and I are talking to Beyang Liu. Beyang is the CTO and co-founder of Sourcegraph, and Sourcegraph is aiming to be the Google for Code. We talked about the back story of Sourcegraph, how it works, ideas around offline support, how it's licensed, which lead us talk about their new software license called Fair Source.

We have two sponsors today, Linode and DataLayer, a one-day event organized by our friends at Compose. Learn more at datalayer.com. Our first sponsor of the show is our friends at Linode, cloud server of choice here at Changelog. Linode Cloud Server up and running in seconds at the linode.com/changelog to get started, choose your flavor or Linux, resources and no location.

Plans are just 10 bucks a month to get full-load access, run VMs, runs containers. You can even manage your Linode from the comfort of a terminal using Linode CLI; they've got SDKs in Python and Pearl, PHP, Ruby, JavaScript, Node.js so you can hack away on your Linode with their API. Take advantage of add-ons, backups, node balancers, DNS manager and more. Again, use our code changelog20 for $20 in credit with unlimited uses. Tell your friends, head to linode.com/changelog. Now, onto the show.

**Adam Stacoviak:** We're back, we've got Beyang Liu here from Sourcegraph. Jerod, we like to charge through up and open source, right? And not just open source, but the details of it, the functions, the language, and see where their use cases are, and this is exactly what Sourcegraph does.

**Jerod Santo:** Yep.

**Adam Stacoviak:** So Beyang is obviously here to tell us about his company, but also all the cool open source they're doing at Sourcegraph.

**Jerod Santo:** Yeah, I feel like Beyang... He's been on BeyondCode, and then recently he was featured on GoTime and now he's on the Changelog.

**Adam Stacoviak:** He's making his rounds.

**Jerod Santo:** He's like heading for the cycle.

**Adam Stacoviak:** Yes.

**Beyang Liu:** Thank you guys for having me, it's great to be here.

**Adam Stacoviak:** Well, Beyang, let's begin with your origin story. You graduated from Stanford, you've got a unique path to where you're at today. But aside from working at some cool companies and figuring out some developer problems, where did things actually begin for you? How far back do we go to figure out where you got your interest peaked around open source or around software development?

**Beyang Liu:** Well, if you want to go origin story, I guess I should start with my birth. \[laughs\] I was born in China, but I was raised in the Midwest. I always like to mention that, in case there are any Midwesterners out there listening.

**Jerod Santo:** You're talking to Midwesterners.

**Adam Stacoviak:** Yeah.

**Beyang Liu:** Oh yeah, Jerod, you're out in Nebraska, right?

**Jerod Santo:** I'm in Nebraska and Adam's in Texas, so there you go.

**Beyang Liu:** Texas, nice. That's awesome. No wonder you guys are such nice guys. \[laughs\] Yeah, so I grew in the Midwest, but came to California for high-school. I think I first got into programming just - I had to buy a TI-83 graphing calculator for some, I think it was high school geometry.

**Jerod Santo:** Yes.

**Beyang Liu:** I happened to get the version of the calculator that came with like the 500-page reference manual, which not all versions come with. But this thing, it's got everything you ever would want to know about the TI-83 calculator. It includes a section at the back that teaches you how to write the dialog of BASIC that they have on the calculator. So when I was taking the bus back and forth from school, I would just kind of like take that book out and just try to program stuff on the calculator in my spare time, program some cool animations or some automated formula, calculators... That's kind of how I got into it. I liked it enough that after that my school offered a computer science class, I ended up taking that. Had a great teacher but …

**Jerod Santo:** \[00:04:25.10\] Can I stop you for a second Beyang?

**Beyang Liu:** Yeah.

**Jerod Santo:** I had a TI-86 in high school, which is like pretty much the exact same calculator.

**Beyang Liu:** Yeah.

**Jerod Santo:** And mine also came with the manual, but mine came with something that to me was better than the manual, which was the game Nibbles. \[laughter\] Did you have that one on yours?

**Beyang Liu:** No, I did not have Nibbles.

**Jerod Santo:** See, that could have changed the course of your life, because I had Nibbles, therefore I was not going to program anything into that thing. I just tossed the manual out and just play Nibbles the entire way to school.

**Beyang Liu:** Yeah.

**Jerod Santo:** So lucky you.

**Beyang Liu:** The TI-86 I think had a slightly faster processor. I was always envious of the folks who had that.

**Jerod Santo:** Maybe that's why it came with Nibbles stock and yours didn't.

**Beyang Liu:** Yeah, it just had just enough RAM to run Nibbles.

**Jerod Santo:** Exactly. Anyways, keep going.

**Beyang Liu:** Yeah. I had a great teacher by name of Mr. Olivares in high-school. He was great at just laying down the facts for computer science. I ended up kind of loving it, went off to college. I knew I wanted to do something math or science related, and computer science just seemed like kind of like the perfect marriage between stuff that was theoretically interesting, but also stuff that would have kind of a real-world impact. So that's kind of how I got into this whole thing.

**Adam Stacoviak:** So you got this calculator, obviously, and Jerod you mentioned that you had one similar to TI-86 and Beyang, you got the TI-83. Jerod, many people that come on this show, their origin stories sometimes begin with gaming.

**Beyang Liu:** Right.

**Adam Stacoviak:** It sounds like, Beyang, and correct if I'm wrong, but it sounds like what you're saying is that you were really interested in the sciences - which I think most computer scientists are anyways, but you were kind of interested in sciences, but more importantly the things that you can actually implement today and change the world around, versus being interested in simply just games to get you excited about. Is it fair to say that or is that not the truth?

Beyang: Yeah, you know... I'd like to think I had so noble of a mentality back in high school, but to be honest I think the reason why I never got into Nibbles or any other calculator game was I just had no patience for reading through how to install those things. The calculator didn't with any games pre-installed. I googled some stuff on like how I install -- I think the game that everyone else was playing was like Penguin, which was like a Super Mario clone. I could just never quite figure out how to install that on my calculator and I just gave up. So it was really out of sloth and laziness.

**Jerod Santo:** \[laughs\] I like that. Well, laziness means you'll make a great programmer.

**Adam Stacoviak:** Another question might be is do you still have the manual? Do you still have that 50-page manual around by any chance with notes in it, bookmarked and all?

**Beyang Liu:** Yes, I do. It's still on my bookshelf.

**Adam Stacoviak:** Wow, it's awesome.

**Beyang Liu:** Yeah.

**Jerod Santo:** It sounds like you had kind of a straight and narrow path to where you are in terms of education and desires, and lots of people kind of change that, they're not sure what they like... Maybe they found out through video games, maybe they found out through reading books or whatever happens to be... Other people take completely different course changes in life or in career before they end up being in software. Take us to where we met you. So this is GopherCon - was it 2015?

**Beyang Liu:** Yep.

**Jerod Santo:** July 2015 GopherCon? You now have the Sourcegraph thing, maybe it's a company at this point, maybe it's just a side project, but you meet us there, you're into Go and you have this Sourcegraph; your answer to the most influential open source project for you was SourceLib, that's what you said when we asked you that question.

**Beyang Liu:** Yeah.

**Jerod Santo:** \[00:08:12.10\] Take us from where you just left off, bring us all the way back up to the near present, which was July 2015. How did you get there?

**Beyang Liu:** Yeah, so I went to college. I wanted to do something math and science-related. After I took the very first CS class at Stanford, I kind of knew that this was probably the right thing, at least for the next four years, so I declared the major. I was fortunate enough to be accepted into a research lab as an undergrad. Stanford has this great undergrad research program called CURIS.

So I landed in Daphne Koller's research lab. She was a great mentor. She eventually became my advisor. I really got into AI research for a while. I thought I was going to get a PhD in computer vision or machine learning, something like that, but after doing that for a while, I kind of decided that industry was probably where I wanted to be more. So I started looking around for companies that I thought were doing interesting things with large datasets.

At that point in time - this is 2011 - Palantir was a big presence in the Stanford campus at that point. It seemed to me that they were tackling some really interesting problems with large datasets and doing really impactful things in the world. So I decided to join them, landed on the commercial side, which basically works with a lot of companies in the industry to help solve their most important technological and software-related problems.

It's kind of there that I got to work closely with my future co-founder, Quinn Slack. We've gone to school together and kind of knew each other from there, but it was at Palantir where we really got to spend some quality time together. That was also kind of a tipping point for me because I think a lot of the roots of Sourcegraph were planted in that experience.

Quinn and I are both CS majors by background, so we both kind of had this pain that I think every programmer feels, which is like, "Man, it seems like it's harder than it should be to find existing code and reuse it." It just seems like I'm spending too much time searching the Internet, crawling through random forums, trying to find the answer to how to do this pretty straightforward thing in code.

We felt that kind of day-to-day pain as programmers, but the experience at Palantir kind of showed us that this is a problem that's not just relevant to programmers now, it's actually relevant to, say, the top leadership at one of the big five banks in the US. Because what we realized was right now we were kind of at this point where software is becoming mainstream, and what I mean by that is, you know, it used to be that for non-technology companies - technology companies that are outside Silicon Valley - software engineering was kind of an afterthought or just a small department, or they might outsource it to some other firm. But these days it's becoming more of a core competency. More and more of the core logic of the business is actually captured in the logic of code. That's what we realized working at Palantir with the types of customers that we were working with.

\[00:12:07.16\] What we realized was as painful as it was or us, the pain was felt ten times as much outside the Silicon Valley, where companies aren't traditionally steeped in all the different processes and principles that we kind of soak up being immersed in the software development world, on how to run an engineering team, and what tools to use to find the answers to everyday questions.

So we kind of took a step back and were like, "Hmm, this seems like a solvable problem." You know, code is just another form of data, and at Palantir we were building all these fancy tools for other sorts of knowledge workers to analyze their data sets, but the tools that we seemed to be using as programmers, both at Palantir and at some of the customer sites that we were working with still seemed kind of primitive.

The top two code search utilities today are probably Google search and grep. Google is just kind of like the all-purpose fallback... Like, we have no other recourse, it's kind of like the Hail Mary. Like, I hope somewhere, someone has written a blog post or an answer out there that answers my question. Grep is a great tool, it's a powerful tool, but it was written in the 1970s and hasn't really changed much since then, even as the world of software has evolved around it.

So then we kind of got to think about this idea. We didn't start working on it right away; I went back to school to finish up my masters, Quinn went off and started another company with some folks from Palantir, and then we kind of serendipitously met each other at some house party in San Fransisco.

Actually, it might not have been serendipitous. I later learned that Quinn's then-girlfriend, now wife, she knew that he was thinking about this problem and she knew that I was gonna be at this house party, so she kind of like orchestrated the whole meeting \[laughter\] which is kind of funny.

**Jerod Santo:** That's interesting.

**Adam Stacoviak:** Wow. You must send her nice cards for Christmas, and stuff.

**Beyang Liu:** Yeah, yeah, she is great. But yeah, at the time it felt like, "Oh, you're thinking about this as well..." We got to kind of talking and then we started just hacking on this and got to a proof of concept pretty quickly, that at least in our minds demonstrated the value that this could provide.

Then we spent kind of the next maybe a year-and-a-half to two years, just building it out and testing both the technical side, which a lot of people didn't actually think could be done initially when we started. Also the product side, which is how do we actually make this something that people can rely on every day. That, I think, brings us up to GopherCon 2015.

We were a company at that point by then, but we were still relatively small. I think we only had a handful of people, but we had a good amount of traction by then, at least in open source. It seemed like we were definitely onto something and it was exciting to go to GopherCon and kind of share the tool that we had built with the people and kind of see their reaction.

**Jerod Santo:** \[00:15:58.21\] Yeah. It's interesting that you said a very similar sentiment when we interviewed you for BeyondCode that you just said here few minutes ago. And what you said then in the last summer was, "In the next 10 to 20 years, every interesting company is going to become a software company at its core." This seems like an insight that you've had over time and continued to believe to this day.

**Beyang Liu:** Yeah. There have been a couple additional points of validation, I think. Have you guys seen General Electric's most recent ad campaign? I think they aired it during the Superbowl, where they're kind of rebranding themselves. They're a digital company that happens to do infrastructure.

**Jerod Santo:** Yeah, it's like they're both. I don't think about them that way anymore. Now I think of them as like a software/hardware company.

**Beyang Liu:** Yeah, exactly. And that really indicates that they're putting software first. Another recent news item was the recent outage at Delta Airlines, where a software glitch basically shut down the airline for a day or more. If we live in a world where a software bug like that basically shuts down, makes it so you can't do business, that means that -- even as an airline, you may think your core business is flying planes, setting prices, and all of that is done more and more so in software.

**Adam Stacoviak:** I guess we've gotten this far here so far with your back story... We've mentioned Sourcegraph a couple of times even in the intro. I'm gonna have to rewind myself and get upset because I didn't' actually say what Sourcegraph is, but we're getting close to our first break. But before we go into that break, let's have you break down exactly what Sourcegraph is.

Obviously, you've kind of teed up some of the ideas for which Sourcegraph was built around, but I hope our listeners understand that when we come back from the break we'll go little further into. But what is Sourcegraph?

**Beyang Liu:** Sourcegraph is basically global jump to definition, find references, and documentation lookup across all the code you use, whether it's private or public, and it understands the code at a semantic level. That means when you're jumping to a definition or searching for something, it knows the difference between a function call and the occurrence of that particular name and some random doc stream. So those are things that programmers do every day, and it's a tool that helps you answer the most common everyday programming questions in seconds.

**Adam Stacoviak:** Well, there you have it. Let's take a break then, because we've got tons of questions about Sourcegraph. Everything from licensing to what you're open sourcing, how you choose what to open source, why you even open source and maybe some of the perspectives you have around how you license the different software you have and stuff like that, and this big idea of being able to be the Google of code, basically.

So let's pause here, take a break. When we come back, we dive a little further in.

**Break:** \[00:19:04.00\]

**Adam Stacoviak:** \[00:20:14.13\] Alright, we are back with Beyang Liu, CTO of Sourcegraph. Beyang, before we took the break we obviously got an explainer of exactly what Sourcegraph is, but it goes much deeper than this. I'm not sure if you coined this term or not, if this was The New Stack or Susan Hall who wrote this article, but the title is "Sourcegraph aims to be the Google for code."

And being a public utility for all developers out there, being able to look up functions and dive into different usages of open source, whether it's private or public, help us understand the beginnings of this company, what this company was founded upon and why you actually built it in the first place?

**Beyang Liu:** As far as the beginnings go, it was Quinn and myself in the begging. It really grew out of this itch that we had ourselves as programmers, which was we felt that a lot of the code that we were writing was somehow duplicative. Either someone in our company had probably already written it or there is probably some open source library that we just weren't aware of or just couldn't figure out how to use, that might save us a lot of time.

I think almost every professional programmer is aware of how often programmers reinvent the wheel every single day. We were trying to think about how we could encourage more code reuse, what was the thing that was preventing us from going out and discovering the pieces of the code that we knew someone, somewhere had already written, but it was just too difficult to find it out.

So we started thinking about it and what it came down to was like, "Well, look code is actually really like highly structured data." I come from a machine learning background and natural language processing. There's a lot of parallels between natural languages and programming languages, but the difficult thing about natural languages is that even to construct a simple parse tree from an everyday English sentence, that's still an open research problem , whereas with programming languages, you have this thing called a compiler or interpreter that just gives you literally, everything you'd ever want to know about a block of code.

And once you have all that data, then you ask yourself, "Well, can I build a system on top of this that helps me automate or partially automate the task of finding pieces of code, reading through existing piece of code and really understanding that piece of code in a way that let me use it?"

So that was kind of the itch that we were scratching. A couple of other points of inspiration for us, you know, the stuff that we saw inside of Palantir was definitely something that solidified our belief that this was not only a problem that programmers everywhere face, but it's also a problem that's important to leaders of large businesses.

The other point of inspiration that we took was I had previously done internship inside of Google, and Google internally actually has this great utility. If you ever meet a software engineer who works in the main Google codebase and you ask him what they think about Google Code Search , I guarantee you they will say it's the best thing since sliced bread. Just ask him how many times they use it every day, how often they have it open in some browser tab, and they'll tell you, "60, 70, even 80% of time I just have it open as a reference."

\[00:23:57.02\] And so seeing the value that that provided inside Google and also just missing that tool and not seeing it anywhere else in kind of the outside world just made us want to build something like that, but something that could handle the entire universe of code, and kind of empower every individual developer out there to go and take advantage of this giant corpus of human knowledge that is open source code and code inside your company, and kind of stand on the shoulders of giants, so to speak.

**Jerod Santo:** Definitely, it bit off a big problem in terms of just surface area, I think, with things to do. Because even once you have the analysis done, you're collecting all the data - I'm sure you guys have some sort of crawler or something that's spanning the different code bases and finding other pieces of code that can go index - then you have developers using all these different environments, their editors, you have how many languages...? Was it ever overwhelming to say, "How can we provide support for all these popular editors and then across all these languages, to where we're really gonna provide a holistic solution for people?"

**Beyang Liu:** Yeah. That was definitely kind of a sticking point in the early days. One of the first technical hurdles we had to overcome was how do we do this in a manner that's efficient? How do we make it so that in 10 years from now we're not still writing the plugin for the umpteenth language that we're gonna support?

That kind of leads into the creation of SourceLib, which is the open source library that powers a lot of the underlying source code analysis that gives you what you see on Sourcegraph. The basic idea of SourceLib is as far as end-user applications are concerned, applications I want to make code explorable and accessible - so I'm thinking editor plugins, things like Google Code Search or Sourcegraph - most programming languages are basically the same. They all have a way to define things, and name them, and reference those things in some other part of code. So if we can kind of put the data - that is the code - in a form where you just capture kind of like that essential part of it, and it's a kind of a common, language-agnostic schema, then you can just build your end-user application on top of that single schema.

And then underneath you just have to build a bunch of translators from different languages to that schema. So that takes it from this problem of having to build a specific library or a plugin for every combination of editor and language to okay, now you just have to build the translator for every language to the schema, and then once you have that, you can build a single application that understands all those languages at once.

**Jerod Santo:** It's like the adapter pattern for languages.

**Beyang Liu:** Yeah, exactly. It takes it from O\[n2\] or O\[nm\] problem to an O\[n\] problem. \[00:27:25.21\]

**Jerod Santo:** Right. So that was where you started. What I would like to find out about is the schema that it gets translated into. What are the bits and bobs that you guys need for each of these - the normalized version - and then how do you store those?

**Beyang Liu:** \[00:27:50.00\] Yeah, the schema, it's a graph schema. The schema is in the name of the company, the Sourcegraph. It's literally like a graph of source code. There's three fundamental concepts in the schema. One is kind of the AST node. Once you've parsed the code, this is like the essence of the code. Once you have the AST, then you can kind of derive every other fact about the code that you need from that and you can also translate it back to text. I guess you could say it's like the natural form of code as data.

And then in addition to the AST node, the things that really lead us to build useful features on top of it are two concepts: a definition and a reference. So a definition is a function declaration or a class declaration or a variable definition somewhere in the code. It's basically anywhere you define a name in code.

We extract all those and we produce a unique identifier for each that's global to all the code in the world. And then, on the other side of the table you have references. Reference is any time one of the names that you define in code is referenced. So it could be a functional call, it could be a type reference, it could be package import... Once you have these two things, definitions and references, that essentially allows you to walk the graph of source codes.

If you think about the things that we do probably hundreds of times per day as developers when we're kind of exploring the dataset of the code we're working on, it's following forward and backward links. It's either jumping to definition or finding references. That's kind of the bread and butter of what we do and that's exactly what the schema allows you to do.

The main difference is that because of that globally unique identifier, you can now do so across all the code in the world, rather than just the code that's on your local machine.

**Jerod Santo:** Which is pretty rad. So SourceLib, open source, MIT license, sourcelib.org, we'll link up it in the show notes. That seems like you've opened up core piece of you guy's business, is that not the case?

**Beyang Liu:** Yeah, it's a good library. I would say for us it's just something that felt like it should be an open standard because it's gonna be useful I think for a lot of tools beyond just Sourcegraph. We hope that this is one wheel that people shouldn't have to reinvent when they're trying to build great tools for developers.

As far as the business case is concerned, we really think the value we're gonna provide to companies is scaling this across the entire open source universe and the code inside their company, and connecting those two different worlds of code together. So there's a lot of additional technology that we built around scaling this, making it super fast across all the code that you might use that is not in SourceLib. SourceLib is kind of the analysis primitive.

**Adam Stacoviak:** It also seems like it's a really nice way -- and I know people hate when we use the word leverage, but when you take advantage of... Well, that sounds bad too. But just kind of the open source spirit, right? I mean, especially when you have like an adapter situation where you've all these uncommon interfaces and what makes you guy's end-goal and end product better is the more adapters that you have.

For instance, you may not have the time or the capacity to write the language analyzers that would conform it to SourceLib, but the Elm community, when they see you can use Sourcegraph on GitHub and then look at the Go code and see what it does, they think "Oh, I want that." They're gonna get excited, they might actually build that for you. And then on the other side you have your editors or your plugins and you guys have a same situation there, maybe the Atom community says, "Why don't we have a Sourcegraph for Atom?" Or not Sourcegraph, but maybe something that adapts the SourceLib for Atom, and then they can do that. So it seems like a great business case, for it's also beneficial to all of us as open sourcers, as we don't have to be dealing with building this stuff.

**Beyang Liu:** \[00:32:31.12\] Yeah, exactly. You know, there are so many use cases out there for a library like that that we're not gonna be the ones to think of, that someone else is gonna think of it. That's exactly what happened when we released it. There were a lot of people in the community that kind of reached down and say, "Hey, I wanna build out support for this editor or this language." And it actually helped us on the business side, too. One of the companies that uses Sourcegraph is Twitter and we're deployed to Twitter's entire Scala code base.

There they reached out at a point where we didn't even have Scala support, but one of their engineers wanted this so bad, because he had also been a previous Google engineer and so he wanted something kind of like Google Code Search. So they actually built out Scala support as kind of a hacking project and we kind of took it from there.

It's great to have the source code of your product just publicly available, because speaking as programmer myself, it's just magical when I use a product and then I can go and see kind of how it works internally. People used to say that like in the old days, you know, with hardware, back in the 70s, you'd buy an old clock radio or something, or an old computer and you could just take it apart as a kid and kind of like figure out, map out how everything kind of worked, and its' kind of like a magical experience. Today it's not really a thing anyone because hardware is so complex... Some pieces of hardware even try to prevent you from taking it apart and seeing how it works. I just think as an engineer, it's just a magical experience where you buy something, you get a lot of value from it, and then you can just kind of disassemble it and peer inside and see how it works.

**Jerod Santo:** Yeah, or even in this case make it better.

**Beyang Liu:** Yeah.

**Jerod Santo:** A lot of times when we open things up, we can't get them back together again \[laughs\]. With source code you could always just get reset--hard and then you're right back.

**Adam Stacoviak:** Exactly, exactly.

**Beyang Liu:** Yeah.

**Adam Stacoviak:** I liked the idea that - and this is obvious to most listeners, but with this being open as you mentioned before, like it being an open standard basically, it's an invitation to the community out there that if motivated enough as Twitter was, as you mentioned with Scala, that in a weekend they can run a hack or something like that, or hackathon internally or whatever and build out\] own piece, and it could possibly actually be adopted into the main repository. But like having that motivation, if you're motivated enough and having open source, you're able to build out your own thing based on that or build on top of it if you wanted to.

**Beyang Liu:** Yeah.

**Adam Stacoviak:** And it's just like an open invitation to do that. I'm kind of curious though, whenever you search with Sourcegraph or do any of the stuff that you do, like this being able to search a function or whatever, what sources are behind Sourcegraph? Like what do you come... like how does that work?

**Beyang Liu:** \[00:35:49.17\] So we crawl a lot of the major open source code repositories. So GitHub, Bitbucket... Currently we crawl mainlyfully-formed code repositories. In the future, we might also wanna do snippets that are just found in blog posts and Q&A forums on the Internet, but right now it's just a kind of like the go-to places where most open source code is hosted.

**Adam Stacoviak:** Did you have to do anything special to get access to that, or blessed API access or anything like that, any sort of relationship you have with the code hosts?

**Beyang Liu:** No, nothing formal. So we hit their APIs for some metadata, but by enlarge we mostly just hit the get API, so just like GetClone that kind of that kind of thing. And that's nice for us, because a lot of companies don't use a well-known code host internally, they just have a Git repository. So you can just point us to any GetClone URL and we'll be able to index that code.

**Adam Stacoviak:** So whenever you do that, are you actually pulling down the full repo? Walk us through what actually happens whenever you ping a source, you pull back the whole schema translation you talked about before with SourceLib... What happens then? What kind of data do you actually store about a repository and the code that's in it?

**Beyang Liu:** Yeah, so it's all kind of ephemeral. So if you give us access to your repository, every time we detect a new commit, we fetch that commit, we clone the repository, and then we just run SourceLib as kind of a command line tool in a Docker container, and that outputs the data in the schema that we expect, and then pushes that to an API endpoint in the Sourcegraph web application. Underneath the hood that then deserializes that and then stores it in one of several, kind of underlying database systems that we have.

The way SourceLib is structured is that it's kind of got this core orchestrator part of it, which kind of defines the schema and is responsible for coordinating the interface between source and the outside world, but underneath the hood it just shells out to a bunch of different command line tools. We call them toolchains, and each of the toolchains is responsible for translating from a specific language to the thing that SourceLib expects.

**Adam Stacoviak:** You've mentioned blog posts potentially being extended to this. I'm thinking back in the day of like microformats - is there some sort of spec that you plan on doing that might extend from SourceLib or whatever, or some sort of schema to adopt in terms of HTML, some sort of fragmenting to make that more possible? Like, you scan any blog or any Medium post or whatever and you auto-discover anybody who wants to sort of offer their code samples up to Sourcegraph? What's your plan there?

**Beyang Liu:** Yeah.

**Jerod Santo:** Pre tags.

**Adam Stacoviak:** Simple as that, I guess?

**Beyang Liu:** Yeah, so we used to have this thing called source boxes that was really cool. It basically allowed you to embed an interactive code snippet inside your blog post. The only problem was the way we implemented, it was this JavaScript thing that you'd embed, so you actually couldn't embed it in a medium post or any other blog site, unless you had the ability to post scripts to the site.

So we kind of discontinued that, but we've been thinking about this a lot and I think there's a couple of directions we could take. If any of your listeners are bloggers, I'd be curious to hear how useful they'd find this.

\[00:39:58.25\] One direction we could take is you give us any snippet of code and we'll kind of parse it in a mid HTML with links to the documentation and usage examples of whatever you call on Sourcegraph.

Granted, when you send us the code you'll have to give us enough context so that our analyzer can actually figure out what code your thing is calling. If you just type http.newrequest and just give us that one line, that's probably not enough context for us to resolve that to the new request method in the standard library. But if you give us the import at the top, and a couple of other lines of context, I think that should be good enough.

And the other angle we're thinking of coming at it is we have this Chrome extension now that you can install in Chrome. What it does is as you're browsing code on GitHub, it hits a Sourcegraph API and gives you \[unintelligible 00:40:56.18\] simple search, right in the GitHub UI. A lot of people really like that. It also does that in pull requests, and it's really useful for code review, just like being able to jump to death when you're reading through a large code review.

But we are thinking about extending that to code snippets too, so that if you have the Chrome extension installed... Let's say you come across some post on Stack Overflow that has a lengthy snippet that references some function, and now you wanna figure out what that function does - the Chrome extension could link that snippet of code, so you can just hover over a reference to see a documentation and click it to jump straight to where it's defined if you wanna go diving into the source.

**Jerod Santo:** What exactly, in terms of Sourcegraph the product - and you can help us differentiate free versus paid or open versus licensed as well, but what is it in terms of how I use it today as a developer? Is it plugins, you have the Chrome thing...? Do I go to your website? Give us the lay of land.

**Beyang Liu:** It's free for open source and always will be. If you're using it inside a company, you can use it for free up to -- I think the limit is 15 people now. And after that there is kind of the standard proceed pricing model. As far as how you can consume it, we've actually experimented with a couple of ways you can consume it.

The most popular way of consuming is just going to sourcegraph.com and using it as a web application; that gives you global search and global user examples. So you get user examples pulled from every open-source library that might use a function, and a bunch of other stuff that's useful in the application.

The other alternative is some people prefer a native application. Kind of the same way that the Slack native app is essentially the web application in a native frame. The Sourcegraph desktop is essentially the same experience, but in native frame and with the added benefit of direct editor integration. If you install a plugin, it will add some shortcuts to your editor that make it super simple to lookup stuff in Sourcegraph. So as you're coding, Sourcegraph will kind of like preload the documentation and usage examples it thinks are relevant to the code that you're writing. So you can quickly Alt+Tab over and get the answer to "How do I use this function?" in a split second.

And then there is a Chrome extension, which if you find yourself reading code on GitHub a lot, just install it. I'm biased obviously, but I think it's a magical experience to... Like, clicking the code on GitHub and everything is just linked. You can hover over or documentation, click on something, and even if it's defined in a completely separate repository, you know, you're there.

**Adam Stacoviak:** \[00:44:07.00\] What about language support?

**Beyang Liu:** Yeah, so language support - we support officially Java and Go. We have Python deployed to private beta JavaScripts also in private beta, but we're not confident enough in the quality of those yet to make those public. But if you sign it for the beta, we'll try to get you on is as quickly as possible, and then we have a couple of other languages in the pipeline. We have Scala inside some companies, but that's not public yet, either.

**Adam Stacoviak:** Well, what's up with that, man? Twitter added Scala support, so we're gonna get that for the rest of us, right?

**Beyang Liu:** \[laughs\] Yeah, yeah. The Twitter dev team has been great working with us on that. We're just kind of going through the process with them right now.

**Adam Stacoviak:** I'm sure there are contractual agreements with that particular customer, I'm sure.

**Beyang Liu:** Yeah.

**Adam Stacoviak:** Very good, I think that helps us understand exactly what it exists, in terms of how we can use it today, and I think we're gonna tee up our next break. But I do have a question for you with regards to all the data that you're capturing, and I think we should also talk about private source versus open source.

You're collecting a lot of data, I'm sure you're well aware of GitHub's recent push into public data with the BigQuery, and I'm guessing that Sourcegraph has some overlap there, perhaps. So let's not answer that now, but let's just take a break and we'll answer it on the other side.

**Break:** \[00:45:34.00\]

**Adam Stacoviak:** Alright, we are back with Beyang Liu and we are talking about Sourcegraph, source code, all that good stuff. Beyang, we mentioned before the break that you are collecting a lot of data.

**Beyang Liu:** Yep.

**Adam Stacoviak:** I like how you think about code as data, it seems like a very powerful way to think, because you end up with tooling like this. And recently, GitHub and Google made a big announcement around BigQuery and GitHub's public data set where they have added not just the commits and issues - I believe it was previously - they now actually have full source code snapshots in BigQuery, queriable. That was something that has been pretty cool and opened up a lot of opportunities to answer certain questions amongst open source people like us.

**Beyang Liu:** Yep.

**Adam Stacoviak:** I'm thinking that you guys have very similar type data and perhaps there are some opportunities there with regards to reporting, analysis and what have you. Can you talk to us about that?

**Beyang Liu:** Yeah, totally. First off, I think it's awesome that GitHub and Google released that data. It's a really interesting dataset, and there have been a lot of great blog posts written about that. They have been just like really interesting to read about certain patterns you can find in open source.

I think the data that we're collecting or that we're recording is -- the main way that it's different from that is, my understanding that the GitHub dump is basically kind of like a dump of source code as text, whereas on the backend with Sourcegraph, we actually go and parse out all the code. So we store every function definition and method call and things like that separately, as kind of a distinct node in the graph.

\[00:47:52.12\] So there are certain operations that might have a lower false positive rate on top of the dataset. That having been said, we thought a little bit about the use case of like "Hey, you know, I'm a key open source author" or "I'm a senior engineer at my company. I wanna go and analyze the codebase to see what kind of high-level patterns I can discover", but at the moment we're very focused on building for the day-to-day use case of developers, so helping developers answer the most common everyday questions they have, in seconds. Whereas the type of analysis you would do with that larger kind of dataset, in my view, is kind of something that you would kind of do every once in a while as a senior engineer, I think.

**Adam Stacoviak:** Also, that's being motivated too because it costs money. Not that that's such a huge factor, but obviously if you're gonna pay per query or pay per size of queries, then you're gonna wanna think a little closer to what you're actually doing; it's probably gonna be a barrier to that entry - not so much to pay for it, but if you had a general question you might wanna ask BigQuery and this datatset, but generally you gotta be pretty motivated, because you have to pay for it.

**Beyang Liu:** Yeah.

**Jerod Santo:** So this incentive, whenever you have paper use like querying, because like every time you do it, even if it's a small sum, there's like something in it, so as humans we're like "Oh, I gotta pay for that. Oh, I'll just figure it out myself." When you're coding, you want all that access at all times and you don't want to be thinking, "Is this lookup worth it to me?"

**Adam Stacoviak:** I guess the other question might be on the side of that, Jerod, since BigQuery obviously is a paid tool and searching the GitHub dataset on BigQuery is part of that, you know, the question for Beyang might be, how do you make it free, for one, and how do you make it fast, like you have?

I think Brian Ketelsen mentioned in the GoTime episode, we talked about it a couple of times in this show so far, was he actually had to uninstall something because it was a little slow - are you're aware of that? But for the most part it's pretty fast to get these lookups back.

**Beyang Liu:** Yeah. It really, I think, comes down to how we store the data. I mean, if we're storing all the code in the world as text, it would actually be pretty expensive to kind of come through all that text and try to parse it with regular expressions, and return answers in a live fashion. But the kind of high-level way to describe is we're taking advantage of structure in the data to make the problem of querying it faster.

One of the reasons that search is a lot faster is we don't have to index every single token and string constant or a doc string, we can just scope our search to the functions that we know are actual function definitions. That reduces the quantity of data that we have to sift through by a lot, and there are other sorts of gains that we can gain on the backend, because all the data that's coming into us is in the SourceLib schema, as opposed to just this file with a bunch of text in it.

**Jerod Santo:** You still have to be connected to the source, though. Is there any chance at offline support? I'm thinking of times of bad latency, you're on an airplane... Times where you don't wanna loose that customer who -- you don't wanna lose Brian. He's got his Vim open, he's got his Sourcegraph, and he's your customer and now he's like "Ah, this is just either too slow right now or it's not available." These are probably things you guys are thinking about.

**Beyang Liu:** Yeah, that's an avenue that we were thinking about with desktop - just kind of getting the code that you're writing real time and getting that into Sourcegraph, so that when you pop over to ask a question, it kind of has the data ready. But I do think that's a little bit more of a nice to have a use case, just because if you're on an airplane programming and there is no WiFi, then at that point you probably can't even look up documentation, if the documentation is hosted online, or read the code on GitHub.

\[00:52:08.07\] So at that point you're kind of in the mode where hopefully you're not having to rely on external libraries that you don't know as much. Whenever I'm about to take a plane, I try to think of like, "What's the most isolated coding task I could do?" The thing that I can just like be in the zone for five hours and just hit the standard library for it.

**Adam Stacoviak:** Yeah.

**Jerod Santo:** I'm with that, and I'm also against it to certain degree, because - pushback - I moved to the country, and Adam can attest to this, I have bad Internet. And so I often find times where it's painful to work online. Some days I'll go completely offline, and in those cases it's similar to you when you're getting ready for your plane ride.

There are tools... On the Mac there's a app called Dash, which is a paid app if you are on the Mac. It's a great one and it's a tool that many people are happy to pay for because it will offline all those and make them searchable, and stuff. I used to be swimming in bandwidth ,so I was like, "Who cares, guys?" \[laughs\] That's very narcissistic of me... But now that I have the problem, I've experienced it firsthand.

It's definitely a nice-to-have, but for some people it's like it could make or break a customer, and so I would say like, think about ways... Even if it's not the global Sourcegraph, so it's not like everybody's code, but at the least either like hot code, like things I've been looking at recently, or my local repository stuff. I think having that would be a really interesting extension of what you guys currently do.

**Adam Stacoviak:** That's true. Yeah, you could actually use... Like, most people use /code or /projects, where they keep all their source code locally.

**Beyang Liu:** Yeah.

**Adam Stacoviak:** And you could even kind of crawl locally one particular directory or set of directories based on a config.

**Beyang Liu:** Totally. That's actually a great point.

**Adam Stacoviak:** It's a good feature, let's do that.

**Beyang Liu:** One of the things that we really wanna make possible, - you're in a country where internet is terrible. Another place that is terrible is the developing world, and there's a lot of people who could become great programmers and contribute to the global graph of knowledge and software, but they're kind of hamstrung by a poor connectivity. So just kind of thinking out loud, like one of the things we could do is if you have code that you're working on on your local machine, Sourcegraph is smart enough to understand what exactly you're depending on, because we can actually go and parse the build file and figure out like "These are the repositories that you're using." And once we have that, we could just kind of like pre-fetch all the data for those things and store it locally and make that accessible, and be kind of like the equivalent of Google Maps, the save offline maps feature.

**Jerod Santo:** Right.

**Beyang Liu:** If you know you're gonna go to like a zone of poor connectivity, or if you just happen to live in one, maybe you could rely on that.

**Jerod Santo:** Yeah, it's not an easy problem to solve, but one thing that I've realized, and I think this is what you guys are going for, with any developer-focused product is anytime you can make a developer say, "I love Sourcegraph", you are winning.

**Beyang Liu:** Yeah.

**Jerod Santo:** And every time I have to go offline and I can still work because of that Dash app, I say to myself, "Ah, I love this thing." So it's rare, right? Like, most of the time I'm online, everything is fine, but when I have to use it and it's there for me, that's when you turn normal customers into customers that love your stuff.

**Beyang Liu:** \[00:55:58.27\] Yeah, totally. Back when I first started like programming on a computer, I remember... Those days we were writing mostly Java, and mostly the standard library. You could just pull all that documentation down, have it in your local machine. So even if you go into someplace where you didn't have the Wi-Fi password, it was all there.

It was almost in some ways like a nicer experience, because you didn't have the distraction of the Internet while you're trying to code. I feel like these days, when so many resources we look at are in the browser, it's so easy to get off on a tangent. You try to look into how to do this one thing and then maybe the same forum post links to this other library, and you open some other link and sooner or later, you're like on Hacker News and you're like, "How did I get here?"

**Jerod Santo:** Right.

**Adam Stacoviak:** \[unintelligible 00:56:53.07\]

**Jerod Santo:** You still have Twitter open in a tab and they have that thing that updates the page title with the number of notifications you have, so you don't have to view it. It's just there in the tab, "Oh, I have three notifications on Twitter," and it's just an hour later and you haven't done anything.

**Beyang Liu:** Yep.

**Adam Stacoviak:** Speak for yourself, Jerod. \[laughter\]

**Jerod Santo:** Somebody else told me they did that. That's fine, it's not a personal experience.

**Adam Stacoviak:** It might have been me, actually. Beyang, you've mentioned that you've got this background in machine learning, that that's a thing you love, obviously. And Jerod mentioned that you're obviously collecting a lot of data, you think of code as data, and that's a cool way to look at this, obviously.

**Beyang Liu:** Yeah.

**Adam Stacoviak:** So you must have -- not that this isn't big enough plan, you know, what you're doing at Sourcegraph, but you must have even bigger plans on top of all this knowledge, this wealth of knowledge that you're ultimately building for the developer community. Can you at all share the future for us? What's over the horizon, what's something no one knows about that you can at least tease us with what you're thinking about for the future Sourcegraph?

**Beyang Liu:** Yeah, I'm happy to spitball. I just wanna declare upfront that as of now we're not working on any sort of machine learning related thing. As a person of a machine learning background, it kind of rubs me the wrong way. A lot of companies say they have some fancy machine learning algorithm and really, it's just Mechanical Turk underneath the hood. I just wanna make it clear that Sourcegraph is not doing that.

If and when we do use machine learning, we wanna have a very clear use case in mind. Now, that having been said, one of the things that got me really interested in this problem in the first place was as a person who likes data and thinking about how to model it, the dataset of all the code - it's got two properties. One, it's extremely interesting because it's such a valuable dataset and there's so much information that's embedded in it. And two, it's relatively unexplored. There's not a lot of tools that are specifically designed for reading and understanding that data. Most of the tools are optimized for creating the data, actually writing code. And so from the get-go, this has been something that's been in the back of our minds.

Just to name a few things that we could do after we've collected the dataset, kind of half-baked ideas... One is kind of intelligent auto-complete. We think of auto-complete as this thing that just cues off of compiler signals and it gives you a list of all the possible tokens that are syntactically, semantically correct, to use at a given point of file.

\[00:59:49.17\] But what if you could actually go beyond that and suggest a variable name or suggest a parameter value based on the surrounding context? Now, that prediction problem is a lot fuzzier. You probably wouldn't be able to get that just from heuristics and what the compiler tells you alone.

That's probably something that you wanna learn, like "Okay, I've seen this pattern before in code.", this pattern AST and in the past, when I've seen the token read, for example, and now this user is calling some function that writes a file, and what if they're passing you the wrong value of the permissions flag? They're setting it to 0666 instead of 0777.

Given enough data, you could probably learn some interesting patterns there for what things to flag to the user that "Hey, maybe you're hitting this API incorrectly because you're using it in a different way than the hundred other people out there in open source use it." So that's kind of like one half-baked idea we have in the back of our minds.

Another problem which is kind of related to that is in order to do that prediction problem well, a sub-problem you kind of have to solve is the scoring problem. Machine learning, the way you'd phrase it is given this piece of code, give me the probability that this piece of code exists or is valid. So you give it a likelihood score, and what that tells you is, if you see a piece of unlikely code, like a piece of code that your model thinks is like, "Oh, that's kind of interesting," more likely than not it's an error and you can flag that sort of thing.

So you think about running this model, you train this model on all the code in the world, and you discover associations of specific words and doc strings and parameter values and function calls. Once you've trained it, you run it on all the code in the world and you can kind of give a print out to people saying like, "Hey, in addition to the linter errors that you already get, here are some places where you might wanna think about how you're calling this API" or "Hey, senior engineer, one of your jobs is to make sure that the other people on the team aren't shooting themselves on the foot or incurring a lot of tech debt. Here's a daily print out of hotspots that you might wanna scan that are model-discovered."

Both those ideas are very half baked, I haven't really explored them seriously yet, but I think, you know, given the structure of this data set and how novel it is, there's bound to be some great low-hanging fruit in there.

**Jerod Santo:** Just as an aside, I find it amusing somewhat that you are in research and doing machine learning, and you left it to get more into the industry side of things, and you flash forward to 2016, and like it's practically the most buzzword term of the entire industry. Everybody wants to do machine learning. "I'm doing machine learning. Do you have any machine learning going on?" So you couldn't actually be more in the industry right now.

**Beyang Liu:** \[laughs\] Yeah, you know, I think it's both good and bad. Like, I'm glad that people are interested in machine learning. I think it can add a lot of value to a lot of products, but along with the good also comes the hype, and it's kind of funny to watch.

**Jerod Santo:** Absolutely. Well, let's shift gears a little bit and let's talk about licensing. So we have a few different projects coming out of Sourcegraph. Of course, we've mentioned SourceLib itself, which is MIT License. You also have some cool new things like Checkup, which we can talk about in a minute in detail. That's also MIT License, but you guys commissioned a creation of a new open-source license called Fair Source, and you even hired a lawyer to write it. Can you give us the background on Fair Source, why it needed to exist and what are your thoughts are there?

**Beyang Liu:** \[01:04:06.15\] Yeah, totally. So just to be clear, we don't consider Fair Source open source, and we wanna make sure that people understand we're not trying to pond Fair Source off as an open source license. We think it's separate distinct from open source, but we do think it has a place in the world.

The reason that we created the Fair Source license is that in open source, you kind of have this problem, and a lot of companies building open source technology have this problem where you wanna build out something great, a utility that people really rely on, and you wanna make the source code publicly available, because it just feels like the right thing to do as a developer. As a developer if I'm curious, I wanna be able to kind of peek underneath the hood and figure out how something works. Nothing's worse than when you encounter some bug and the thing that you're using is a black box and you have no way of fixing at all, or even understanding what's going wrong.

And so we wanted to make the source code publicly available, but at the same time we wanted to build a sustainable business on top of this, because we think that this is a really valuable problem we're solving; it's gonna add a lot of value to both technology companies and non-technology companies alike. We think that it's fair for people investing time and effort in building these things to be compensated for the value that they're providing.

The classic kind of way to do this is the duo-licensing model where you release it as open source under some like really restrictive license like GPL or AGPL, and then you have kind of a separate commercial license. But that just didn't seem like a great fit for us. I mean if you talk to lawyers in the industry, there are actually a lot of concerns around that, just like "Oh, what if we accidently pull in the GPL part of your code base and we're not technically paying for it?" There's a lot of fear, uncertainty and doubt from the industry side of things.

We kind of looked around and said, "Well, can we kind of take some things from open source and take some things from closed source and make a license that lets us release the source code publicly, but at the same time if a company like Twitter comes along and wants to use our product, we can charge them a fair price for the value that we're providing to their development team?"

So we kind of looked around, we asked a bunch of open source contributors what they thought about the idea. We were really worried that we'd get a lot of pushback from people, because I think a lot of people - and rightly so - have concerns about companies coming along and trying to cast things as open source that aren't open source.

But what we found among open-source authors is actually kind of this latent frustration at the fact that they're kind of investing so many hours of their lives... A lot of these people have families and kids in addition to day jobs and they are investing time and energy into these projects and companies are using those projects to build things that make a lot of money, and the people actually building the underlying technology don't see a penny.

And that's bad, because if you're building something valuable for the world, you should be able to make a living off of it. So talking to those contributors kind of gave us the confidence to kind of keep looking around and then we ended up meeting this lawyer by the name of Heather Meeker who I think was involved in drafting the Mozilla Public License and a couple of other open source licenses.

\[01:08:02.07\] She's a lawyer who specifies in open source licensing law, and she had actually been thinking about this same problem. Because she works with a lot of open source contributors as well, and she heard all the same frustrations and it was kind of like very serendipitous.

We met them through a mutual friend of the company and she said, "I would love to take this on as a project", and we said, "That would be great. Can you draft up something simple that we can use to release our source code publicly, but still retain the ability to build a business on top of it?" And that's kind of how Fair Source is born.

**Jerod Santo:** Adam, we mentioned that Beyang has pretty much hit for the cycle on the Changelog network, but he actually hasn't been on Request For Commits yet.

**Adam Stacoviak:** Not yet.

**Jerod Santo:** It sounds like a good topic for our brand new show with Nadia and Michael.

**Beyang Liu:** Yeah, that's with the Nadia Eghbal, right? She was on the show couple of weeks back?

**Jerod Santo:** Yeah, we had her on the Changelog all way back in January, and since then we enjoyed talking to her so much and we told her if she ever wanted to do a podcast, she should come to us, and she did. We've been working with her and Mikeal Rogers, who is the head of the -- well, what is he in the Node Foundation, Adam?

**Adam Stacoviak:** Let's see, he's something for the Node foundation, Chairman or Community Manager, that's what it is.

**Jerod Santo:** Community Manager.

**Adam Stacoviak:** Community Manager for Node Foundation, the Node.js Foundation.

**Jerod Santo:** Yeah. So the entire show is based around the human side of open source and sustainability and licensing and governance and all such things.

**Adam Stacoviak:** Yeah.

**Jerod Santo:** I'm sure Nadia and Michael have a lot of opinions about Fair Source, one way or the other, whereas I do not have very many opinions. Adam, what do you think?

**Adam Stacoviak:** I would say... Well, I don't know. You've got some opinions too, but maybe their opinions run deeper.

**Jerod Santo:** Yeah, they're probably more informed, whereas mine are just like gut reactions. Like, "Oh, this is great!" or "Oh, this is terrible!"

**Adam Stacoviak:** Yes, I would also say too that they actually have Heather Meeker on the list, and I think it would make sense obviously to add someone from Sourcegraph to that conversation to it. It hasn't been scheduled yet, but this story is really fascinating in terms of like, especially how you said, "It's not to replace open source, it is not open source." I think that's a good caveat to add to that even before mentioning it like you did, because some, especially like me, I know that whenever I first looked at it I thought that this was a new type of open source. You explained that portion of it, and it makes it a lot more clear that you're not doing that.

**Beyang Liu:** Yeah, it's not open source at all.

**Adam Stacoviak:** Yeah. So I guess the plan for this license for you in this case was to be a license for your core application. That's not open source yet though, right?

**Beyang Liu:** No, it's still a private repository at this point. We wanna release the code publicly soon, but there is just some cleanup things that we wanna do before we kind of are comfortable sharing the code with the world. So hopefully, the next couple of weeks, it will be online. You can look it up on GitHub.

**Adam Stacoviak:** Have you done much discussing or talking out there on the Internet anywhere about Fair Source and the motivations behind it and the plan for it?

**Beyang Liu:** Yeah, we've talked to... There has been some interest from open-source authors; a journalist from WIRED reached out a couple of months back and my co-founder, Quinn, spoke to him and I think wrote up an article. But it's not been kind of a core focus of the company. The main focus right now is just building an awesome product for developers. This is just a means for us to release the product in a way that we think is kind of the right way to do it for developers.

**Adam Stacoviak:** \[01:11:53.08\] Any common myths about this license you wanna debunk right now?

**Beyang Liu:** I think the main myth is that we're trying to cast it like an open source license. It's not open source, we've tried to make that clear from day one. I think maybe it's due to the fact that's called like blank source, people confuse it. We're not trying to kill open source, we love open source. I personally have gotten a lot of value from open source software.

As a curious teenager, I wouldn't have been able to dive into the repositories that I dove into if things weren't out in the open. I used Linux as my programming environment, and the worst thing would be for this to lead to the demise of the open source world. The main goal is just to let us release our code in a way that we think it should be released, and also give other code authors out there a way to actually see some of the value financially, in terms of what they provide to companies that use their software.

And I guess to that end, the license does include a clause saying like... It's actually a parameterized license, meaning you can call it Fair Source 10 or Fair Source 15.0. That means is any company that's below the size of 15 people can use your software for free. It's only after you hit that magical limit that then they need to acquire a separate commercial license from you.

**Adam Stacoviak:** I'm glad you mentioned that number there because I was actually thinking about that. It was in my notes to mention that, but I almost forgot. So how in the world do you track those? When I first read that, I was thinking "That's great, but how do you track usage of it?" You have to kind of operate on this honor system? And two, how do you create a conduit to get paid? Is it just a known way to pay someone? Like, how do they say, "Hey, I'm honest and I've used 16 of the 15 licenses, and now I'm gonna pay for license number 16, or something". How does it work? How do you plan to work?

**Beyang Liu:** Yeah, we're not trying to make money off of individual programmers or super small teams working for mom and pop coding shops, or small companies. The experience at Palantir has taught us that the problem that we're solving is valuable enough that it's the large and established companies that will pay us a lot of money to make their development teams more efficient. So that's where we think the business is. As for the rest of the world, we just want to make this accessible to as many developers as possible, because we think we built a tool that's great for learning and understanding code.

**Adam Stacoviak:** What about from the generalized license perspective, like if I use Fair Source 10, for example? How do I enable those who use it... Companies, once they get to 11, 12, 13, how do I enable them to one, be honest and say, "Hey, I've used it with 13 or 14 users versus the 10th. I need to pay for a few licenses", or whatever. Then how do I communicate to them how to pay? Is it just sort of on the license person who uses it to figure that or is it something that's actually baked into the license?

**Beyang Liu:** Yeah, right now it's kind of like the honor system. But the way we think about it is that there is no legitimate company in the world that would willingly violate a software license just so they could save $10, a few bucks a month on a piece of code. As for the ones who are illegitimate and skirt the law, you're probably not gonna make… Yeah, you're not gonna build a giant business off of those people anyway.

**Adam Stacoviak:** \[01:15:59.07\] Those were just some knee-jerk questions I had when I read that... I'm like, "Okay, so how do you enforce the honor system and how do you get paid?" Because it's great that you've got the license and it's great that you actually put that there, but how do you enforce it? Because if you don't enforce it or at least prescribe how you should operate around, then no one is gonna follow it.

**Beyang Liu:** Yeah.

**Adam Stacoviak:** And I was just thinking... Is that something that you've thought through? Is that something you have some suggestions on? I'm just curious. That's a smaller subject though, but just curious.

**Beyang Liu:** Yeah, I mean in the future we think that there can be a more automated mechanism, if we're thinking from the Sourcegraph perspective. If we're using something like Sourcegraph that understands the dependencies you start pulling in through your code, you can have like an automated alert that tells you like, "Hey, you start using this thing that has Fair Source license attached to it. If more than ten people start using it and you should pay this person." But that's just kind of like vague stuff that we haven't really built out yet.

**Adam Stacoviak:** Well, Beyang, we are getting close to low on time, but we do wanna touch on Checkup. We mentioned it earlier in the call and I wanna give you a chance to get that out there - a new piece of open source by Sourcegraph, and I believe built in collaboration with friend of the show Matt Holt of the Caddy Web Server. He has also been on the Changelog, he has also been on GoTime.

**Beyang Liu:** Yep.

**Adam Stacoviak:** So tell us about Checkup - simple, uptime monitoring, distributed, self-hosted health checks, and status pages. What is it and why is it?

**Beyang Liu:** Yeah, so I'll kind of start with the why. The problem that it kind of solves was... Like many web services, Sourcegraph uses an uptime monitoring service to make sure that our site is up and to make sure that someone gets paged when things go down. We kind of ran into a couple of pains that were kind of surprising using the standard uptime monitoring services.

The biggest pain for us was just like it was so hard to use the UI of these things. Like, you'd think it'd be the simplest UI in the world, like you've got some URLs that you wanna hit and I put them in and you tell me whether they're green or not. But a lot of the UI's just take multiple seconds to load a single page. You're sitting there as an engineer... Like, efficiency is the most important thing, and you're sitting there waiting for a page to load, and you can't help but appreciate the irony that the thing that's monitoring your site to make sure that your latencies are below one second itself is taking like seven seconds to load.

That coupled with the fact that there was no way to programmatically update the endpoints for a lot of services - or no easy way, I should say - that kind of got us thinking like, "Wow, you know, this is uptime monitoring, it's not rocket science. It's actually very simple. Ideally, we should be able to run these things as a unit test." Like, wouldn't it be great if I could actually run uptime checks in development, just to make sure that... You know, obviously you still need it in production in case of some weird production issue comes up, but a lot of times you break an endpoint just because you pushed a bug that breaks a page, so you could catch it in CI or in development.

So we got to thinking... And we really did not wanna build this ourselves. We were like, "Surely there must be something out there that does this the way we wanted to", but we looked around and just couldn't find anything.

Matt Holt is kind of friend of Sourcegraph as well and we talk to him from time to time, and he kind of had his own frustrations of this sort. I'm sure he's heard a lot from folks who use the Caddy Web Server.

\[01:19:51.25\] So we got into talking and he was like, "You know I've been thinking about building this thing" and we were like, "We'd love to sponsor you. We would definitely use it." So he went and built this library for us, that's also a command line tool. What it essentially does is you can run it as a command line tool, which means you can run it basically like on any EC2 or Google Cloud instance.

And what it does is you give it a set of endpoints, programmatically - it's some config file that you can version in with your code. You run this command, it hits all the endpoint and then it uploads the data that it records to an S3 bucket. Then there's a separate command that pulls up a dashboard that pulls the data from the S3 bucket and that's the thing that tells you whether your site is up or down.

And so you can run the uptime command from any EC2 instances or any set of geographically-distributed EC2 instances and pull uptime data from all across the world, push it to an S3 bucket and then checking your uptime is as simple as running a command or display of dashboard. As a side benefit, because it's so simple, you can also run it in CI, or even development.

**Jerod Santo:** I love that. You've got a problem, maybe you don't have enough time to do it yourself, Matt Holt has some time and he also would like to solve such problem, and beautiful things happen \[unintelligible 01:21:18.08\].

It's the great new world of open source, where we do have businesses that are being run around open source and being successful and we can sponsor little things that can benefit ourselves, but also benefit the whole community. That's really cool.

**Beyang Liu:** Yeah, totally.

**Jerod Santo:** So that's us sourcegraph.github.io/checkup. We'll link that one up in the show notes, as well. Very cool. So that's kind of a thing that's just said and done? You guys launched it or is there actually continued development, do you have future plans for Checkup or is it just out there and use it?

**Beyang Liu:** Yeah, so it's out there, it's usable. It's kind of like a minimal viable tool right now. We're actively looking for other open source contributions. We've actually been overwhelmed by the sheer amount of interest. I guess it turns out that a lot of other people have had similar frustrations. But people have already submitted pull requests.

One person added the ability to check for TCP endpoints, as opposed to HTTP endpoints and we've got a lot of other great pull requests as well. If you're out there and you're listening and you wanna contribute to libraries like this, then we're open for business, we're happily accepting pull requests.

**Jerod Santo:** I've been working with Gerhard Lazu on the deployment of our new website and CMS and all that good stuff, and we have been discussing uptime monitoring. He's a DevOps guy and so he has opinions on all the different uptime monitors in the world.

The Pingdom, the Uptime Robots, the new shining Apex Ping, which looks interesting... One of the things I asked him was "What's the best one?" Because I've been using this Uptime Robot thing, which I appreciate, its free for me and cheap for many people - I don't wanna really wanna diss it here on the show, but it's not fitting all my needs, but I use it. And he's like, "I've used all of them." He's like, "I have accounts on nine different uptime monitors. \[laughs\] They're all subpar in some way and they all fall down in some way... I just use them all." \[laughter\] So I think he's gonna be interested in Checkup.

**Adam Stacoviak:** Yeah, sure.

**Beyang Liu:** I'd love to hear his thoughts.

**Adam Stacoviak:** Well, Beyang we would totally ask you the hero question on the show, except that you've already answered it on BeyondCode. So instead of doing that, we're just gonna link up your interview on BeyondCode at GopherCon 2015. But one of the other closing questions w like to ask is really an invitation to the community.

\[01:23:58.23\] So from Sourcegraph to the community, what are the best ways - with your mission, with what you're doing, with all of the things you have going on right now - for the open source community to step in to support what you're doing or to help you move the ball forward towards the progress you're trying to make, whether it's on the company side on the open source side. What's moving Sourcegraph forward and how can the open source community step in and help out?

**Beyang Liu:** I think the best thing right now is try out Sourcegraph and use it to explore some open source code, maybe use it to dive into that repository that you think is really cool, but perhaps a little bit inscrutable or overwhelming right now. Because, you know, really the reason we made it was to make it easier to dive into unfamiliar code and to figure out what's going on, what it's going.

So use it for that, hopefully it helps you. We'd love to hear your feedback and if you end up liking it, tell your friends, tell your teammates and help us spread the word.

**Adam Stacoviak:** What about the language support or editor support or different areas where, we talked earlier in the show about cross pollination or motivations to like look at where you're trying to go... Is there any unturned rocks out there that you just personally don't have time for, it's not on your roadmap, but the open source community can step in and help out?

**Beyang Liu:** Yeah, totally. So even for the languages that we do currently support, the toolchains could always be better. The Go, JavaScript, Python, TypeScript - those are the languages that we have kind of work-in-progress toolchains for; we'd love to get contributions for that. If your favorite language happens to be a language that's not one of those languages, if you reach out, we'd love to work with you on how to kind of build a toolchain for that.

It's one of those tasks that, I think... Like, building a source code analysis toolchain seems like really fancy, but you just come talk to us. It's actually pretty straightforward and you actually kind of learn a lot about the internals of programming languages and level up as a programmer when you do so. If you're interested in any of that, just tweet at us or shoot us an e-mail and we're happy to connect and see how we can work together.

**Adam Stacoviak:** Or on your contact page, it's hi@sourcegraph.com. Is that a good e-mail for something like that?

**Beyang Liu:** Yep, that's perfect.

**Adam Stacoviak:** Awesome. Any closing thoughts from you, Beyang, for the listeners who've been listening this whole entire show? I think it's an hour -- I think we're past; are we passed time 40 minutes? Yeah, we're past 40 minutes. Well, okay, so we're overtime by a bit. I haven't even watched the clock, Jerod, these last 40 minutes. Okay, so we're going on an hour-and-a-half show roughly. Any closing thoughts who've been hanging on to the end of the show here?

**Beyang Liu:** I think I would just say... I'll speak directly to the listeners who might be a little bit newer to programming, because I was definitely a person once who... I didn't start programming really in earnest until the end of high school, beginning of college and that's a little bit old for a lot of programmers in the software industry.

So if you're a person who is just learning to code and it just seems like there is this like huge universe of things out there that you can never hope to know, just keep going. Dive into source code, learn from the examples of other people. It's not rocket science at the end of the day and once you get out the other end and you can build stuff on your own, it's like you've been given magic powers.

**Adam Stacoviak:** A lot of great advice from you as well from that BeyondCode interview. I can remember you saying what would you go back and change and I'll just give us a snippet here, because we'll link it up anyways. But you said, "Go back and read more source code." And I thought that was such an interesting answer, considering what you do now with Sourcegraph, because that's pretty much what the tool is that you build does, is read source code and create some more information based on that, some more logic on top of that.

\[01:28:05.16\] We'll link that up. I thought it was a pretty interesting thing too as well, just to kind of go back and dive into the open source code out there and don't feel like there is a different way to get it right, that reading source code is probably the best option to learning programming.

**Beyang Liu:** Yeah.

**Adam Stacoviak:** Well, Beyang, thank you so much for coming on the show and definitely thank you for your love for open source and your love for productivity for developers out there and obviously, all the things that Sourcegraph and your company is doing to prosper open source but also to give us better tools to not have to rework every time, recreate the wheel every time, and to leverage the collective knowledge out there available in open source and all these open repositories to help us make our day-to-day lives a little bit better. That's obviously a pretty cool thing.

So sourcegraph.com is where you can find Sourcegraph obviously, github.com/sourcegraph is where you can find all their code, and with that, fellas, let's call this show done and say goodbye.

**Beyang Liu:** Thanks so much, Adam and Jerod, for having me on the show, I really appreciate it. I love the Changelog, keep doing what you're doing!

**Adam Stacoviak:** Awesome. Thanks, man, we appreciate that.
