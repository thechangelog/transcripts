**Jerod Santo:** Alright, we're here with Emil from Figma. Hey, welcome to the show.

**Emil Sjölander:** Thank you so much. Thank you. Happy to be here.

**Jerod Santo:** Happy to have you. Pretty cool stuff you've been working on over there. Dev Mode, which is - maybe it's a new product from Figma, maybe it's a new direction... We'll dig into all of that. But you didn't start there. You started as Visly, and ended up as Dev Mode. Do you want to give us a brief rundown on kind of the history of your company and joining the Figma team?

**Emil Sjölander:** Yeah, sure. So I can rewind it like before Visly as well. I think that's interesting.

**Jerod Santo:** Okay.

**Emil Sjölander:** For context, I started a company, Visly - we were maxed out at like nine folks; went through Y Combinator, kind of tried to build design tools specifically for developers for a while, and eventually joined Figma a couple years ago, and have been working on Dev Mode since, and I've launched that since then. So that's kind of the very, very short kind of gist of it. But stepping back a bit, really ever since I started coding, or started getting into software, which was late compared to a lot of folks... I really got into it when I was like 20, or whatever. 19, 20. I wasn't one of those 13-year-old script kiddies. So I have had a long background - or I guess not that long, but my whole time being involved in software has always been really focused on kind of the design, how things are built, why things are built, and really jumping between design and engineering, software engineering, on a daily basis. It comes kind of all the way back from university. And really every kind of thing I've worked on since then has been really focused on bridging this gap between design and development in various ways. I have had experiences working on product teams where the designers and the developers took this fluid shape, where it really kind of worked as one cohesive unit, as opposed to kind of two siloed teams, or whatever.

And that's really where my background comes from... So after having been at a few places, but most recently at Meta for three years, mostly working on open source, like layout engines, and mobile infrastructure, things like that, as well as developer tooling, I felt like I wanted to take kind of the next step. And I thought back to this thing that I'd been thinking about for ages, which is really getting designers and developers to work more closely together, and work as one cohesive unit. Because I think that has always, in my experience, led to just the best products being built, the most thoughtful products, the teams that have executed most quickly, they've kind of been these teams that work as one cohesive unit. And I wanted to build software to enable more teams to more easily work as such. So that's really where Visly started, trying to enable this.

So I started this company with a friend of mine at the time; that friend is also still at Figma. And we spent a few years basically trying to reenvision what a design tool would look like if it was built for developers, from the ground up. So really, kind of a React-based design tool that everything, every object, every layer, every pixel was a React component behind the scenes. We had big ambitions, which I think is always good. So it wasn't actually even a React component behind the scenes, it was this kind of abstract notion of a renderable object, that initially translated to React, but we'd also built a cross-platform, kind of high-performance Flexbox engine, so we could translate this stuff to iOS and Android and what have you in the future as well. But really, kind of at the core it was a design tool where every kind of interaction or action you took translated to a line of code.

**Adam Stacoviak:** \[10:12\] I think it's interesting to see this world of development that -- as I hear you share your story, I just think of like "We're trying to build products, we're trying to be frontenders, we're trying to be engineers, and work together. But then we're also building the tooling that allows us to build along the way." And I come from a generation where CSS was brand new, basically. We were still designing inside of Photoshop, we were still doing sliding doors to do different things with tabs in CSS. We did not have rounded things, we did not have all these cool things that are out there in web standards now. It's interesting to see how the iteration has taken place to get to this Dev Mode world, where finally we have a design tool that does have dev-friendly enablements. And it may not still be perfect, but it's so much better than where we were. Every iteration there is sort of -- very, very iterative because we're building products, but also inventing and re-establishing and iterating on the standards that get us there. And the tooling and products like yours and Figma have allowed designers and devs to play very well together.

**Emil Sjölander:** Yeah. I think it's interesting thinking about this, like you said, kind of in a historical context... Because I think the idea of visual tools to kind of augument frontend development has been around forever. I think since we built graphical user interfaces, the notion of kind of a graphical user interface to help you build graphical user interfaces has been a thing... Whether it's kind of like the interface builder in the '80s from Next, and later Apple, or tools from Adobe, or what have you, right? This has always been a thing, and in one way it's pretty obvious; it's easier to build a visual thing visually, for the most part. But this has actually gone, I think, harder to execute on over time, because the requirements have changed.

So let's say, looking back, Adam, like you were talking about, like CSS is just kind of becoming a thing. Back in those days, responsive design wasn't a thing.

**Adam Stacoviak:** No.

**Emil Sjölander:** It's 960 pixels or whatever, 720.

**Adam Stacoviak:** That's right.

**Emil Sjölander:** And that's it. And actually, you wouldn't have any CSS for styling. You'd use JPEGs as backgrounds. And if a hover effect was switching to a different jpeg, if you even had a hover effect... So in a way, it was very much - with the technology and the requirements at the time, it was actually much, much easier to go straight from design to a functioning application back in that day, because it was literally just like jpegs on a web page, roughly laid out, with a fixed kind of design.

So I think we still believe heavily in this notion of -- I think as frontend developers building graphical software, working with a graphical tool to help us build a graphical software as like a kind of abstract notion is really helpful. But we can't emulate what we had 20 years ago, because that was just built for a different time, and now we have to think about kind of the constraints we have now, and build different types of software, that helps modern frontend development. Even though we sometimes think like "I wish it was like 20 years ago", and in many ways simpler times, but things are better now, I think.

**Adam Stacoviak:** Simpler, yes, I suppose...

**Jerod Santo:** Tedious, though.

**Adam Stacoviak:** Even like psd to html, that terminology.

**Jerod Santo:** Oh, yeah.

**Adam Stacoviak:** Like, that's comical. There was companies that were born to do that.

**Jerod Santo:** Yeah, whole industries.

**Adam Stacoviak:** Right. And you would slice inside of Photoshop, or I think even at the time there was a whole different tool that was not Photoshop, that was acquired by Macromedia, or Adobe acquired Macromedia, and had this other tool that was -- I forget what it was called even. It's been that long ago. And I remember having debates with somebody when CSS came out, like "Don't use CSS, it's stupid. You can do that with tables. Why would I do that with CSS?" You know what I mean? You have this pushback of the new thing, and the change, and... But it was simpler, in some ways.

**Emil Sjölander:** \[14:11\] In some ways, yeah. But it's still -- it boggles my mind that we would... And I did this, but not for web, but for iOS... But boggles my mind that we used to use a tool for retouching photography, to design the UI. It reminds me of how people used Excel for literally everything, and then every Excel feature is like a startup itself.

**Adam Stacoviak:** I don't know, I feel like it's by any means necessary.

**Emil Sjölander:** Yeah, for sure.

**Adam Stacoviak:** It's kind of like the "by any means necessary" aspect. I think that's the unleashed -- we wanted to do this new thing on the web so badly that we used tools that were not designed for the job, and still got the job done. And we forced the tool to change. And I guess ultimately, the merger of the worlds of Adobe and Figma even happened. I mean, that long transcendence of a timeline is just - you couldn't have predicted it necessarily, but we forced it by means of just using the tools that we had.

**Jerod Santo:** So a long time ago I helped Grooveshark, which was an old music streaming app/service, rewrite their Flash app in HTML5. This was when HTML5 was burgeoning. And they always had great design. I mean, that was one of their things. The design was slick, and nice. And I met the lead designer of Grooveshark. Very talented guy. He did all of his design work, literally all of it, in Keynote. Apple Keynote.

**Emil Sjölander:** Apple used to design their stuff in Apple Keynote.

**Jerod Santo:** I asked him, "Isn't this a PowerPoint replacement, like slideshow thing?" He's like "Yeah, but it's a great design tool." And so he took Keynote, and he handed me Keynote, and I was supposed to implement that from there. And that actually was just as easy or painful as Photoshop. I had Keynote installed already, so at least I had that going for me... A lot of developers have Photoshop licenses or not...

**Emil Sjölander:** At least it was vector-based.

**Jerod Santo:** Yeah, exactly. It's vector-based. But it speaks to this real inefficiency that exists in the world, of the collaboration bit, which you guys are very much building tools right in that area, where you can lose so much time and money in those handoffs... If they even are handoffs. So there's many different ways of doing it; if you think about a software product, you have kind of the product owner... This is the person who decides the direction, the features etc. You have the designer, and you have the developer. These are the roles. Historically, I think the most successful and quickest-moving orgs are when those three things work very well together, or sometimes are inhabited by a single person. Like, the one person, unicorn who can think it up, design it, develop it. Very successful. But when you have teams doing those things, there's so many different ways of managing the collaboration between the three, and there's so many bad ways to do it. In fact, we can reminisce about some of the bad ways; when you had to go hire a company to like take your PSD and turn it into HTML, and then you had to go hire a different company to take your HTML and turn it into a working web application... It really struggles to be able to iterate when you have like silo, silo, silo, and then knowledge transfer fails. And so the person actually said this color, but the developer thought they said that color...

**Emil Sjölander:** Yeah. That's fundamental to Figma as a company and as a product, but also to how we -- when we started developing Dev Mode, we really wanted to think through Dev Mode from first principles. So everything was on the table, like "Should Dev Mode be a totally separate product?" Or should it be kind of a new file within Figma? Or should it be a mode? ...which is what we eventually landed on. But what we thought through with all of this was really back to this piece of communication and collaboration. We know that what really matters for companies to build better products and build those products faster, while also maintaining a high-quality bar, was really about communication, and like latency in communication, and fidelity of communication.

**Jerod Santo:** Right.

**Emil Sjölander:** \[18:15\] So for us, it was really obvious that developers, designers, PMs, or hell, even lawyers, be in the same spot and collaborate live, in real-time together. Because otherwise, you get asymmetry in information, or miscommunication, or you get things where somebody doesn't learn about information until like three days before launch. And then you either need to scramble, or most likely you're delaying launch by like a quarter, or whatever. So making sure everybody's on the same page, is looking at the same thing, and knows the same information is really key to great collaboration and building great products quickly.

**Jerod Santo:** And I don't think it can be overstated just how much time and money you can save by greasing those skids, because so much of the fails in the software development process is simply inefficiencies in our collaboration practices. And a lot of times we're trying to just make it up on our own. I've done a lot of small contract work where I'm working with different teams, different clients... And so I had like iterations on how many different ways you can collaborate around a software project... And so many of us are just making it up as we go along. And if you're not familiar with that one, there's just so many ways that you can waste time, waste money, waste effort on stuff that doesn't matter. And so yeah, if you can bring everybody to the table at the same place, and get them collaborating there, and provide tooling and resources for that to be effective for everybody, then that's a big win.

So when you started Dev Mode -- so you joined Figma to build Dev Mode? Is that fair to say? Like, Visly was already building kind of a thing, or... Yeah, tell us how that worked out.

**Emil Sjölander:** Yeah, so just finishing up with the thought on the communication front, which I think kind of segues into the next thing you're asking... This is something Figma has been thinking about since day one. This is the reason Figma is a URL and a web app. Because yes, you can get your whole design team to install some design software; or even that is hard sometimes. But let's imagine you can do that... It's really hard to get, say, a random stakeholder or engineer on the team to install this big design software, and create an account or whatever, just to kind of quickly view a prototype. So having that as a URL, where anybody can just load it up quickly and see what they need to see - that's really the foundation of what Figma was started for... Because we always knew that -- I say "we", like, Dylan and folks started Figma way before I joined. They always knew that design is a process that really involves more than designers, right? Everybody needs to be part of it, whether you're PM engineer, or marketing, or really anybody who even touches any aspect of the product needs to be part of that design process... And we want to encourage as many people as possible to as easily as possible come in there.

So the notion of "Design needs to accommodate for developers, developer handoff, engineering collaboration", that's something that Figma has been really been thinking about since day one. So the reason we joined Figma is really to deepen the investment in this, rather than start it up from scratch. It's really to deepen that investment in developer collaboration.

Realistically, we'd been running Visly for - I want to say two years, two and a half... I can't remember at this point, it's been a while... Something like that. And yeah, we had a product, we had it in beta. We didn't have a lot of -- we had sub 100 users, but enough to get feedback. But the feedback we were getting was really good. But from like indie developers, right? The developers who did both design and development, they really liked it. But basically, it was impossible for us to get into any larger team... Because designers didn't like the tool, which was like fair enough.

\[22:08\] We really set out to build a great design tool for engineers, and that was what we built... But at larger companies you need to bring design into it as well. And to a degree, Figma was kind of in the same spot, but the opposite spot, really. We were using Figma at Visly, so we knew about Figma, we loved Figma... But Figma was a tool that was just absolutely loved by designers... But engineers were like "I mean, it's better than Photoshop. I don't need to install Photoshop, so it's better than that", but they weren't in love with it, and they didn't see it as a daily use tool, necessarily. So that's the audience we were really trying to serve.

And again, Figma had been investing in developers as a cohort, but I started talking to Dylan, and really, we wanted the same end goal... So it just felt natural to come in and boost their investment in this space... And that's what we've been doing. So we came in, we tried to figure out how to best really serve this audience...

We actually started with something that's not Dev Mode at all. The first project we took on coming in was -- we called it Autolayout v4, or v3... I don't know, one of the versions. The next version of Autolayout, which is Figma's kind of Flexbox in the design tool... Because we knew from talking to users, or also just like knowing from ourselves, that -- I mean, if you get handed a design and it's all absolutely positioned, it's gonna take you a lot longer to translate that to code, than if it's using something you can relate to, like Flexbox. And the fact is that Autolayout was loved by a lot of designers, but it had a high barrier of entry. So it was hard to start using. And there were just a lot of cases it couldn't handle, where you had to opt out and just absolutely position stuff.

So all of this led to, relatively speaking, a low usage of Autolayout. So we really wanted to solve this problem for designers, so that they were excited, and could use Autolayout for more things, and thus kind of improve the developer end of things; kind of a second-order impact on developers. And once we completed that, we shifted over to building this entirely separate space, a dedicated space within Figma for developers, that we called Dev Mode. And it's ended up actually not being a separate tool or anything necessarily, it's more like a different tool set. So you're viewing the same content, the same canvas in Figma, but you're viewing it from the lens of a developer. So we change out the whole tool set, we change out the left and right panels, we make everything optimized for a developer as a user, which hadn't existed in Figma before, and allowed us to really make different trade-offs and optimizations where previously we might say "Oh, that's a developer tool, so let's put it behind this submenu." We now had an interface where we could say "No, let's make it the biggest thing on the screen", which is as a big difference for our users.

**Break:** \[25:08\]

**Jerod Santo:** So bring us from there to Dev Mode as it exists today. So you have this blog post out, "How we built Dev Mode." There was a lot of user research, there was a lot of conversations... This seems like maybe a not so hard problem to solve in the small, but when you try to solve it for disparate teams around the world, working in different ways, at different organization sizes, all of a sudden I get very overwhelmed just thinking about the task in front of you. So you landed on this mode, which is a way of thinking, but that wasn't where you started. Do you want to kind of take us a little bit on the journey, some of the conversations and how you ended up landing on what you've landed on so far?

**Emil Sjölander:** Yeah, it's a great question, and I can spend hours on this, so I'll try not to... But I think this is the crux of it. First of all, we're really happy where we've landed with Dev Mode. We're hearing from customers they're also really happy with it; it's really kind of accelerating teams in the way we want to accelerate them. That being said, there's also so much left to do, and there's definitely parts of it that I'm still embarrassed of... But that's because I'm kind of perfectionist at heart, and we're working hard to make it even better as we go along.

But the thing that makes designing for Dev Mode hard is that we're designing a new product at large scale, right? So we're designing it for all of Figma's existing users, and they have very different ways of working. Your large employee base bank, versus like two-person fintech startup... To nobody's surprise, they work differently, because they need to work differently. They have different processes, they have just different resources, and so forth.

So designing a product from scratch, that works for this breadth of people is really hard. Most products are not designed like that. As a startup, you don't have any users, so you start with designing for kind of one small cohort, and make it great for them. And then you build up over time, and over time that complexity grows with the product, and you can serve more and more users. But for us, we really had to serve all our users day one, so we had to take an approach which scaled to all those different kinds of customers.

So that's how we landed, or that was in the back of our heads as we were designing Dev Mode. So that's why we have such a strong focus on customizability. Extensions and plugins is a huge part of Dev Mode, where any user can go in and say that "No, I'm an iOS developer who still writes Objective-C, and I want to see code hints for that." You can get that, I think... There's a lot of plugins, so I think that exists. But basically, you can customize it to show you the kind of information you want to show; you can show the documentation you want to show for whatever design system you're using, and so forth. So customizability was really kind of a main angle.

\[32:02\] And another thing I kept thinking about was this kind of concept of making Dev Mode really feel like a home for developers; making it feel like this was built for me as a developer, and not like a developer feature slapped onto a tool for designers. We really want to encourage developers to really spend time here and really - not just to spend time to like boost metrics, right? In many ways, we actually want developers to get out of Figma as quickly as possible, and get back to coding; that's like a goal of ours. But we want the time they spend in Figma to be productive, rather than being kind of just searching and hunting for the right values.

So I guess this was some of the thinking behind the design of Dev Mode... And the path we took to get to where we are today is long, it's circular, it's winding... We went back and forth many, many times. But the highlight, I would say, is that it, it started with a huge focus on translating designs automatically to code. This was a big focus in the beginning, or a hypothesis in the beginning, I would say... Which we kind of quickly built out. It was actually really cool. We can talk about why it didn't work, but it was really cool. It looked like -- imagine Chrome Dev Tools. You basically had a split-screen, half of it was code, half of it was design; it was like inspecting the design and seeing the HTML for it. Super-cool from a UI perspective. When we actually put it in front of customers that didn't work at all, because that code is... I mean, it's just not the code they needed to write. Designers are not spending time getting the right layer structure, or like div structure for the designs, it's not necessarily using the correct abstractions you want... There's a million problems here that make this just like not work well. And in many ways, also go too deep on the design, and it easily lifted out, I would say, properties of the design that were unintentional.

The beauty with design that's just kind of a picture that you can click on is that you don't see the unnecessary details. Like, if a thing is wrapped in like seven empty groups or whatever, you don't notice and you don't care, really. But if you're really exposed to the underlying, what that would translate to in code, now it starts exposing those kinds of details, and makes them look important in a way that they definitely aren't, and actually distracts you from the most important aspects of the design and the intentionality there.

So for all those reasons it didn't actually work, so we pivoted away from that, and tried a number of different other things... And throughout this, constantly just talked to users across all sizes of companies, just to figure out what the most important aspects were. The larger problem statement we landed on was - and this is gonna sound silly, but everybody we talked to wanted to build better products, faster. But this is hard, and especially at a scaling company; it's really hard to keep velocity high and quality high. So what we really just did was we talked to a lot of these customers, especially kind of post-100 employees... Because before then, if you're like three people, quality and velocity is pretty high, and it's easy to keep high. But as you grow, it can get harder.

And the things we noticed were, I'd say three buckets that I like to think about. One is - I kind of touched on this with the collaboration piece earlier. The first is like why you can't build great products fast is typically like organizational alignment problems. And this can be just like people have different opinions, but it can be also just purely kind of informational problems, which we see a lot, which is - one really simple example is designers and developers would have a different tool. You design in one place, and you hand off in another place. And because there's this silo of information, now you have duplicated information in two places; developers would sometimes build the wrong thing because a designer forgot to export the latest version. And you'll have a designer and developer think they're building the same thing, but they don't notice it until like two days before it's gonna ship... And then people get stressed.

\[36:34\] Or another classic example is engineers are working off of JIRA, or some other tool. This has nothing to do with JIRA. Some PM or designer engineer has basically created a bunch of JIRA issues that spec out the product, and included screenshots of everything to build. But nobody thinks to update those screenshots or those tasks when the designs change. And again, people will be building different things, because you've siloed the information, and you basically forked the information. So that's really something we want to resolve.

The second bucket of problems - again, hindering folks from moving fast and building great products - was more around just maintaining product quality as an organization grows and scales, and that it can be really hard to stay on top of this. And our favorite and best tool for this is really Design Systems. We think that's kind of the tool most companies employ to kind of scale quality. But the problem we've heard from a lot of customers is "Yes, they have a robust design system, but nobody uses it." Or people use it wrong, or all these things. So we really wanted to make sure that these companies who've invested in Design Systems, actually that that investment is worth it. We want to really make sure that that really helps them increase that product quality.

And the third bucket which we heard from companies that, again, wanted to, like everybody else, ship better products faster, was that dev efficiency was just hard to keep high as they scaled... And this mostly came down to just a lot of like small day-to-day papercuts; everything from like compile times, to what have you, that would just make their engineering orgs move slowly. And in the context of Figma we would hear things, like I talked about, "Oh, Figma is like complex to learn as a first-time user, especially as a developer, because it's kind of been designed for designers." Or a really classic one is that developers would get a version two or version three of a design, and they would literally spend a day just like playing the old game of find five differences between two pictures. It's like "Wait, what has changed here?" and try to construct a changelog manually, and then transfer that to a task tool, or whatever. All this kind of repetitive work that just slowed engineers down day to day.

So those were kind of the three buckets of problems we saw hindering companies to build better products fast. And that's what we kept top of mind as we were building Dev Mode, really. And again, this goes back to the conversation we had earlier, for that org alignment piece. It really starts with getting everybody to just talk, and use the same tool, and be in the same space, and that's why we built Dev Mode as a mode within Figma design. And we also knew we needed to build tools within Dev Mode for clearer communication as well, to have those clearer specs, be aligned on what to build, so you're actually building the same thing. And that's where we have things where designers can mark things as ready for dev, or they can annotate details of the design, and really spec it out... And then that last piece was really about making sure the information is in sync between kind of all the different silos of information.

\[39:57\] And that's where our partnership with -- I'll point out Atlassian here, because we have a really deep partnership with them... But also working with Linear, and Storybook, and other companies... But we really make sure to -- with the Atlassian partnership, we make sure that JIRA is up to date with Dev Mode, so you can create JIRA tickets within Dev Mode, and it automatically connects them via a link. And now you don't need to think about having information in two places, and worry about that. You can work wherever you need to work, and get the information you want, and that's ensured to be up to date, basically. So that's really how we've been thinking about Dev Mode, and... Happy to talk about the product quality piece and the dev efficiency piece as well, but that's generally how I see kind of the problems that we're trying to solve.

**Adam Stacoviak:** I just can't believe how much thinking goes into building such a tool. You can't just make a codegen and make it work. You can't just push the Magic button -- well, I mean, I guess in a way you can push the Magic button; it's kind of what you've done, in a way... But all the iteration it takes to make this work.

**Emil Sjölander:** Oh, and I'll tell you, while we can't build codegen and it just works, we also can't remove codegen and it just works... Because our customers love the codegen we have. And then others find it less useful. We have to find a way to balance that in a good way.

**Adam Stacoviak:** Yeah. It is smart though to do the toggle back and forth between -- because you could have made it a whole different product, as you mentioned... But making it in the Figma world and not making it some sort of bifurcated over here thing... It's really the great invitation; like you mentioned before, the day one of Figma. And I don't want to go back to the beginning necessarily, but to \[unintelligible 00:41:38.14\] it's the great invitation. And now this is still the same great invitation that Figma was, because you didn't have to install something, you didn't have to do all this setup like a developer might do to build up their dev environment. It's not like that at all. It's not a design environment, it's just "Go here, and if you're in the engineering or dev spaces, you can flip between the modes. And really just enjoy the direction that Figma is taking, what it means to design and develop for the web."

**Emil Sjölander:** Yeah, for sure. And I'm excited about the directions we're also taking in this to make it feel even better and more seamless for developers. And this is early days, but we've in the past six months integrated with Visual Studio Code as well, where you can actually bring up Dev Mode specifically in VS Code, and have your designs and code side by side... And it's not like -- I think that's interesting, and it limits context switching, but the really, really exciting part, and we're just like starting to touch on the possibilities here... But it's how Figma for VS Code actually interacts between the code and the Figma file, where you can do things like you're in a React component, and you're looking at the design for that component, and you can link those together. So later on, if you're browsing the code and you see a component, and you're wondering, "Is this design correct?" you can - not Command+Click on it, but basically you can click in the gutter, and it opens up the exact Figma design source of truth for that from your designer, and you can double-check that "Yup, okay, this looks correct." Or if you have a new design for something new up, we actually integrate with the autocomplete of VS Code. So if you start writing CSS, instead of Copilot suggesting random colors, we'll actually suggest colors and spacing values that come from your design file. So it feels like a super-smart Copilot that knows exactly about your design. And still early days, but I'm really excited about the potential there.

**Jerod Santo:** That's awesome. Going back to the codegen bit, it seems like people love it, people hate it, sometimes it delivers, sometimes it doesn't, because of the intricacies that you described earlier, where the designer is just thinking visually, and they're just doing what they need to do in order to get things to group etc. And now we have these layers and layers etc. and sometimes the code isn't just there good enough. Are you continuing down that path, though? Because I imagine, as a developer, if I did have the button that says "Take this and turn it into code that I would write", that for me sort of would be the end goal.

\[44:15\] I mean, obviously, the other stuff is nice as well. If I could get that and not have, let's just say like misaligned code, code that I would actually write, then you guys would be just printing money, for lack of a better word. Like, wouldn't that be -- like, everybody would sign up at that point. So are you still -- are you doing both? Like, okay, we need alignment tools, we need efficiency tools, we need to make sure people are using the design system and stuff, so integrating it in developers' workflows... All that stuff needs to continue with Dev Mode. But if the code gen could just be so smart that it could realize that these extra components are worthless and just throw them out, and grab the way I would in the first place, then that could be the solution, the end game. Are you still going down that path as well?

**Emil Sjölander:** Yeah, I agree. That as an end state is super-interesting. We'll see when/if we can get there. It's probably a when, than an if... Like, a few hundred years, or whatever... I don't know. Or two years. Who knows...?

**Jerod Santo:** Well, how far does it feel? More like a hundred than two? Because you've been working on it, so you would know better.

**Emil Sjölander:** No... I think there's a lot of -- there's a lot of problems with getting it correct. But I think it's very doable for us to make it a lot better than what it is today. So instead of kind of guessing at when we'll have this perfect solution, because I don't know... But I'll talk a bit more about how we're thinking about the next steps here. So what we have today is -- I mean, out of the box, you can choose if you want to to get some code for like CSS SwiftUI, or Jetpack Compose for Android. And that gives a reasonable hint at how to implement stuff. Personally, I use it a ton for box shadows, because I never remember the syntax for box shadow...

**Jerod Santo:** Who does...?

**Emil Sjölander:** ...or gradients, or whatever. It's super-nice to quickly get started. And it's like, yes, I'm not going to commit it directly to GitHub. That's not the point. And then there's great plugins that can give you like Tailwind code, or give you like full-on React code for the whole design... Again, don't commit it straight away, but this is a great starting point to get you started quicker.

I think what we're interested in next building - and we're just starting to think about this, but it's really a focus on design systems. So if you are using design systems, which a lot of customers - or companies in general - are doing today, across both code and Figma, to be clear, then if you click on a button, you don't want it to say div, and a class name... You want it to use my button component imported from my design system, right? So we want to make that work. And we think we have a path to get there in the near term, and we're exploring a few ideas. And I don't have anything specific to share there, but I can say the early explorations here are really exciting. And that's a place we can get to fairly soon.

And then I think it becomes more problematic if it's like "Here's a net new design for a website. Please code it up like I would have coded it up." I think that's much further off, although that's also much less common. Usually, it's like "Build this thing using components we already have", and developers just kind of want to be pointed at what components to use, where they exist in the codebase, where to import them from... And maybe some sample code for "This is how you should use the component." That's really what most people are asking for, and that is not far off, and I'm excited to kind of see what we can deliver on that over the coming year.

**Adam Stacoviak:** This is not production code, right? This is still something we might ship to production, right? In this scenario.

**Emil Sjölander:** \[48:05\] No, I mean, I think --

**Jerod Santo:** It depends...

**Emil Sjölander:** We'll see how it turns out, but I can think of... Yeah, it depends.

**Adam Stacoviak:** Currently it's not there, though. It's going to be there.

**Emil Sjölander:** Yeah, currently, we see codegen very much as it's kind of a starting point, kind of an unblock your writer's block kind of thing... And tell you how to do that box shadow, or filter, or linear gradient in CSS. It's great for that. It's a way to unblock writer's block, and documentation almost. But then we want to bring your design system into this as well, so that when you click on a button, it says "Import my button from library, and this is some sample code of how you can use that my button to achieve what you want." That is where we want to get to.

**Break:** \[48:57\]

**Jerod Santo:** How many orgs have design systems? I tend to have a very indie lens, so I'm always scaling up to largers... But I know that design systems are things that we talk about a lot on podcasts, and there's people who go and teach how to have a design system... But I feel like this is something that's high-quality, well-invested orgs have, but most of us don't have.

**Emil Sjölander:** I see a lot of startups with design systems as well. It depends on what you define as design systems.

**Adam Stacoviak:** Oh, yeah.

**Jerod Santo:** What do you define it as?

**Emil Sjölander:** Material Design is a design system used by like thousands of companies. Or you have Amp Design, or these open source design systems. I would still count that as the company having a design system. Even though they didn't build it, they're using a design system.

**Jerod Santo:** Okay. Sure.

**Emil Sjölander:** If you think about it like that, the vast majority are using some kind of design system. That's not an official stat, that's just like that's the feeling I get.

**Jerod Santo:** Sure, that's fair. I just think that, to a certain extent, it is a barrier to getting started, but maybe because of open source and because of the proliferation of at least low cost, available design systems, you could get started relatively easy. Maybe the steps two or three of startup is like business idea, some sort of feature list or go to market strategy... And then some kind of a design system so that you can start building that thing.

**Emil Sjölander:** \[52:22\] Yeah... But also, design systems aren't a binary thing. It's not like you either have it or you don't have one. Even like week one as a startup, you'll probably be like "What color should we use for our logo? What font should we use?" Those are the first decisions you're starting to make as your design system, right? Or how should our buttons look? So a decision you have to make, and probably you want your styling of your various elements to kind of have a consistent look and feel, whether you're using an open source system or not. And this is building up a design system. Now, it might not be formally a design system, so to speak, but that's the starting point of a very good design system.

**Jerod Santo:** What color should we use for our logo, and then the answer is always blue or purple. Everybody's picking blue or purple.

**Emil Sjölander:** I want more to pick orange, but that's just my opinion.

**Jerod Santo:** I'm a fan of orange as well. Adam? Blue? Purple?

**Adam Stacoviak:** Green. Green.

**Jerod Santo:** Green.

**Adam Stacoviak:** Hacker green, bro... You know? Hacker for life.

**Jerod Santo:** There you go.

**Emil Sjölander:** Dev Mode is green...

**Jerod Santo:** Heck yeah, man. That's where the terminal prompt lives, in greenland.

**Adam Stacoviak:** This has been designed initially for those that appreciate, whether they do it themselves or inherit it or adopt it, a design system first... Because that's a good place to begin. Right?

**Emil Sjölander:** I would say yes and no. I would say that is our core focus now. I would say for those that don't have a design system, Dev Mode works great. I would say if you are super-invested in design systems... There's just a lot more we can do. I think Dev Mode works great if you have a design system today as well. I think there's just more opportunity to provide even more value once you have a design system... Versus if you don't have a design system, in a way there's just like a cap for how much value we can bring to you. By knowing that system, we can infer a lot of things, we can build upon that, and just provide a lot more value. So that's where our focus is. We think for those without a design systems, Dev Mode is - I wouldn't say done; it's never done. But we think it solves for them pretty well today. And again, it does so for those with design systems as well; there's just like infinite kind of runway to do more, I think.

**Adam Stacoviak:** Okay. Is it challenging to give us a zero to Dev Mode scenario, to go from not a Figma user, to Figma user, to enjoying what Dev Mode is? Let's just say I'm a startup who adopted Material, as an example you did. We didn't build it, we inherited it, we adopted it, we appreciate it... But How do I go from zero to appreciate what Dev Mode offers my team?

**Emil Sjölander:** \[55:04\] Yeah, that's a great question. I think with something like Material Design, using a design system like that, one, it's like a really big design system. It's pretty complicated once you get into it. There's a lot of options, there's a million components... And what Dev Mode offers is really a way to really move faster as a developer here. You can get those mockups, you can quickly -- whatever you're clicking, it'll actually tell you "Oh, this is the documentation for that specific component. This is what you should be using in code." And that's linked to -- if you're using like MUI, or whatever, like an implementation of Material Design and code, you quickly know exactly what components to use. So you're not trying, for every step in the design, trying to read the docs, figure out kind of what to do. You can much more quickly translate this over. And that's kind of one of the things that Dev Mode gives you to move really quickly.

I think especially if you're using a Dev Mode within VS Code, you can be really heads down, in the flow, focus on coding, and always be easily referencing those components you need to use to reliably recreate what the designer has done. But especially in - let's say this is a smaller team, that's like really quick-moving... I think things like our Compare Changes feature is super-powerful here, where when something's changing, go into Dev Mode, and just hit a button, and instead of asking your designer to write up a changelog, and we're only human, so they're going to forget 60% of the things they changed... You can just ask the computer, "What actually changed here? What should I be updating? What values? What components should I be changing to really stay in sync with what my designer wants me to do here?" And this, in the end, one, it goes faster; you're more autonomous, because you don't need to rely on like waiting for the designer to respond... And three, you're going to build a higher quality product, because you're not going to miss something that you would have naturally missed otherwise.

There's many more examples of this... But yeah whether you're a small team, or like tens of thousands, hundreds of thousand-person organization, you can take advantage of various features of Dev Mode to really help you, again, build better products, faster.

**Adam Stacoviak:** I like that tagline. I'm going to keep using that, too. That's pretty solid.

**Jerod Santo:** What are you gonna use it for?

**Adam Stacoviak:** Build better products, faster.

**Emil Sjölander:** Anything. \[laughter\]

**Adam Stacoviak:** To describe all the things I'm doing.

**Jerod Santo:** Yup. Just helping you build better products, faster.

**Adam Stacoviak:** It's like cliché if you're a Silicon Valley fan. They say that often in season one, so I've gotta mention that.

**Emil Sjölander:** Wait, do they?

**Adam Stacoviak:** Yeah...

**Emil Sjölander:** Maybe that's where I've gotten it from.

**Jerod Santo:** Maybe that's where you got it from.

**Adam Stacoviak:** "Listen, I don't want to be cliché here, but we're making the world a better place. We're building better products, faster."

**Emil Sjölander:** I don't think they say exactly that, but yeah...

**Adam Stacoviak:** Not like that... I'm being very caricature, but yeah, it's a thing.

**Jerod Santo:** Well, art imitates life, and life imitates art.

**Adam Stacoviak:** That's right.

**Jerod Santo:** Let me ask you this, Emil... Did you use Dev Mode to build Dev Mode?

**Emil Sjölander:** Well, not in the beginning, because Dev Mode didn't exist.

**Jerod Santo:** \[laughs\] Well, when did it become self-hosted? Yeah, exactly.

**Emil Sjölander:** Yeah, we quickly started it both as a company and as a team. The Dev Mode team is pretty small within Figma. It's growing, but pretty small. So we use Dev Mode, and engineers and designers use Dev Mode... And the rest of the company does as well. The beauty of that is we never forced anybody to use it. I think that's the worst kind of dogfooding, if you force people to use it, because then you don't learn why they choose not to use it. So in the beginning people chose not to use it, and we learned really much from that internally, as we iterated on the product... And we got to a place where really the majority of developers internally are using it. I mean, not everybody, and you wouldn't expect that... But we got to a place where more and more started to use it, and that's when we were kind of starting to move to more external testing at that point.

So yeah, we use it, and the features we love to rely on as a team are really this -- I mean, a lot of the design system features I've talked about, but also these tools for clearer communication. Specifically, the Ready for Dev stuff, because our designers do like 700 mock-ups, which is like great, and we get a lot of exploration, but it can be really unclear about "Wait, which one did we land on in the end?" And Ready for Dev in Dev Mode really allows us to really get everybody on the same page there, and same using Annotations to really annotate every little detail. Annotations is, for those listening in, not a feature yet of Dev Mode, but it's coming really soon and we couldn't be more excited about it. It's a way for you to annotate every little measurement, or add little notes, or annotate like "This should be 12 pixel font size..." Really spec out all the details in a way that you could always do before manually, but now it's like 10x faster, which really makes sure your designer's actually going to enjoy spec-ing up the spec... Which also leads to basically you being on the same page. So so we're using that a ton as well.

**Jerod Santo:** \[01:00:12.18\] That's a great medium for us designers to take out our passive-aggressive moves, put the note on there... "It's 12 pixels wide, Carl...!" You know, stuff like that. \[laughs\]

**Emil Sjölander:** Yeah... And you'll see teams using it. Like, I don't love this, but you'll see teams sometimes using it as a way to cover their own ass. Like "Oh, well, if I annotated it, then it's not my fault. It's not in there."

**Jerod Santo:** Right...

**Emil Sjölander:** I don't think that's the best culture to have, but... That's not how we use it.

**Jerod Santo:** Well, it's a tool... And humans use tools as humans use tools. So Annotations coming soon... Very cool. Anything else about the process, the creation process for you all internally? Are there any bits of Visly that are left in here as assets, or is that just ancient history, and this was like a fresh start, everything's like Figma 100%. codebase?

**Emil Sjölander:** Yeah, it's Figma 100% from a codebase perspective. We really came in as people who had thought about this a lot, more so than people with a large codebase. And in terms of process, I think there's a ton of talk about there. I think the thing to keep in mind, and that I love about working at Figma is - and what is instilled in Dev Mode as well - is that building this product has been really collaborative. We've had our designers and our fantastic product managers thinking about this, but also the whole engineering team, and giving feedback constantly as well... Because it's a developer tool, but developers at Figma give feedback all the time on designer tools as well. So that's fine. But it's like a super-collaborative process. And yes, we've gone in circles a couple of times, and back and forth to make sure we land on the correct thing... But it's really been developed as a really collaborative product, and it's been developed collaboratively as well, in a way that -- we couldn't have gotten to the same quality product if we hadn't gotten kind of all those opinions in the room while we were designing it and building it out.

**Adam Stacoviak:** I'm just glad we're here, you know? The psd to html days are just "Whatever, man..."

**Jerod Santo:** PTSD...? \[laughs\]

**Adam Stacoviak:** PTSD to OMG, you know? Forget that stuff, scenario. I'm just glad we're here. I'm glad we have people like you, just -- I mean, what an amount of effort it must have taken... I know you even struggled for -- well, iterated for over a year and a half \[unintelligible 01:02:43.24\] how to get there; how to go to that Magic button moment. And it's hard to appreciate those moments; it's hard to appreciate all that goes into the details to make the future possible.

**Emil Sjölander:** For sure. And it's so fun now that we've launched Dev Mode in beta. It's since - was it mid-June? I keep forgetting dates... But mid-June, let's call it.

**Jerod Santo:** Don't ask u...

**Emil Sjölander:** Yeah, \[unintelligible 01:03:12.16\] in mid-June, and it's been so fun, not just to see people use it, but it's entirely changed how we develop the product, in a really good way. When it's secret in the beginning, also before launching, you talk to some customers, you ask them to sign an NDA, and it's like over a Zoom... And it is what it is, and you get some feedback. But since launching it, we've been able to really talk to users in an entirely different way. And that's really led us to really be able to accelerate development on Dev Mode in a very different way as well. When we launched it in mid June, we launched it with a big, like, "Give us feedback" button up top. And the interesting thing is a lot of people have written in to us like "Oh, I don't think anybody will read this." It's like, we read every single one. We connected it to our Slack, so we get a ping notification for every single feedback request... In the beginning, this was thousands per day, so it was overwhelming. I might have missed one or two, but we read most of them.

**Adam Stacoviak:** \[01:04:20.21\] That's awesome.

**Emil Sjölander:** And not just like me read it, or like my boss, or whatever, but every single engineer and designer on the team was in that Slack channel, reading every single piece of feedback. And through mid-June to - I think it was mid-August, we resolved over 200 issues... Of varying sizes, sure, but added features, resolved issues, and just like worked super-closely with everybody... And we're continuing to do that since then as well, but the team was just like operating at a totally different velocity than before, in terms of fixing those sorts of issues... Because we had user feedback, so we saw these issues that we couldn't possibly see before, and we had like a fire hose directly kind of injected into the team, that they could see and get pinged on every single day. And I still get - at this point I don't know the number; less than 1000 per day, but still we get many times per day pinged by the Slackbot, which is like "Here's feedback, here's feedback." So we're seeing it all in real time, and that's how we like to build products.

**Jerod Santo:** Very cool, Emil. Well, the blog post is out there on the Figma Blog if you want to read more. Of course, we had a deep-dive here... Anything left unsaid, anything we didn't ask you about, that you've been itching to say before we call it a show?

**Emil Sjölander:** One thing that we haven't talked about, and this being - like, there's a lot of developers listening in here... I think it's worth maybe just like chatting a bit about the developer platform that is Figma as well. We've had this really robust Rust API for a long time now, and also like a really robust plugin API for a long time... And they play into Figma as a whole, but also especially Dev Mode. And I think it's such a fun kind of visual platform to develop for, in many ways. It's been around for a while, but it's not the iOS App Store; there's definitely a lot of space for innovation here, and a ton of untouched ground.

**Jerod Santo:** What kind of stuff can you build? Can you paint a picture for folks? Like, give us an idea of what kind of stuff we could build.

**Emil Sjölander:** Yeah, so generally speaking, the API gives you access to everything in a Figma file, with high-fidelity, down to individual vector paths for all the drawings, images, fonts etc. It also gives you access -- if you're building plugins in Figma Design, it gives you access to also add any design object to the canvas. In Dev Mode you can't edit the canvas, because again, this is something we heard from developers; they didn't want to accidentally edit the canvas, so we restrict plugins from editing.

But yeah, plugins in Dev Mode, we have -- again, you'll have simpler things, but still really powerful. Our integration with JIRA and Atlassian, a partnership there where you can click on any part of the design, and New Issue, and it'll link it together with exactly that part of the design. And similar, Storybook has built an integration, so you can connect your Chromatic Storybook instance to Dev Mode, and you can say "This component in Figma is this component in my Storybook", and you can link this together. Once you've done that once, any developer going in later can run that plugin and see and interact with the code version of the component and the Figma component at the same time, and spot differences, or know the API, learn the API, and so forth. So it's super-powerful.

\[01:07:53.21\] We've seen plugins that allow you to export assets in formats that we at Figma just haven't gotten to supporting yet... And then there's, I think at this point over 100 different codegen plugins for like Tailwind, Flutter, React Native, React, Swift... All the things. And even some -- you know, entire companies built around codegen, like Anima, who've built a fantastic codegen plugin for Dev Mode that exports really high-quality React applications... Or even like Vue, and a couple of other frameworks, for you to get a really strong starting point, I would say, on your development.

So I highly encourage looking into these plugins... But as a developer, there's just a lot you can do here, and I'm excited to just see people innovate. I don't want to like say "These are the things you can build", because honestly, I'm excited to see what people think about when they kind of read up on this more and check out what's already existing... But you can really do anything you want with the visual content in Figma. It's super-cool. And that's like the plugin API in Figma; then people are building -- we talked about the REST API, things like a designer changes a design token, or we call them variables, in Figma... That automatically pushes a GitHub PR to your repo, with CSS versions of that definition. So if you update a color in Figma, you can accept the pull request in GitHub for that new color, which is also super-cool.

**Jerod Santo:** There you go.

**Adam Stacoviak:** That's there now?

**Emil Sjölander:** Yeah, I mean, the REST API is there... I can't point to a specific implementation of kind of the GitHub syncing, but I know there's some kind of open source things there.

**Adam Stacoviak:** What I asked you before, is this production, around Dev Mode - the question I really was kind of getting there was less specifically to Dev Mode in particular, but more the platform of Figma. Like, with such a -- you're eventually going to become where production happens. You're going to be experimenting in production, to some degree, with design even too, where it's still pull requests, it's still code changes, it's still git-based, like all workflows are. It's still gonna have CI in there. But at some point, you're literally going to be iterating on the exact thing that is the production artifact, that's working, that has A/B tests... And you won't have this dev production silo. It'll just be "This is what it is."

**Emil Sjölander:** I think partially. I mean, our mission with Dev Mode is really to help developers go from design to production as quickly as possible, and with as high quality as possible. And I think that helps developers there and is like a really important piece of it. We're really not trying to replace developers here, we're really trying to help them... And I think where we can go directly, from tool to git and like bypass the developer, is in very specific scenarios, and it's the specific scenarios I think engineers hate doing, which is like "A color got updated in Figma. Please update the hex code corresponding to that in code." That's very machine-translatable. Or like "This icon got a new vector in it. Please re-export it and reuse that thing in all the places it's already used." It's like, a computer should be able to do this for me, right? Let's find and replace with the same asset, just an updated asset.

Those are the things we're thinking about when it comes to like pipelining from design to - not production necessarily, but to git, let's call it, directly... But for everything else, we're just really trying to give developers the support they need to go as quickly as possible, while maintaining high quality from design to production.

**Adam Stacoviak:** Maybe one last question on that front and we can call it a show... When they get to production, does this tool go away? Because if it's so influential and so transformative to get there faster, I would just want to stay there, faster, more efficient, better etc.

**Emil Sjölander:** \[01:11:58.27\] It's a great question. I don't think it has to end. It does today. Or in a way it does today. I would say, it doesn't end; there's a gap. Because I think all product development is a cycle, where it will go back and design updates will be made, and those will eventually go through Dev Mode and reach production again... But there's a gap there between kind of - you know, it goes to production, and then Dev Mode stops being used until new designs, and then starts being used again... Like, you could imagine us in the future helping you assess your production environments, how close it is to the designs, to spot bugs maybe, or spot things that should be tweaked... Or maybe there's a way for you to -- I'm very much just spitballing on ideas here that are kind of in the back of my head, but maybe there's ways for you to like on your production site maybe add a note to be like "You know, in our next redesign maybe we should fix this", or things like that. And that's somehow connected back to your designs, or to complete that loop.

I think there's potential for interesting things there in the future. It's not something we're necessarily working on now, but I think it's interesting to think about how we can really acknowledge that this is a cycle, and it's a cycle of iteration, and not just a one-time pass. And that's really how we're thinking about all of Figma, and especially Dev Mode, all the time... It's not necessarily "How can we finish the process faster?", it's "How can we squeeze out five more iteration cycles?" That's how we're thinking about things. Because we know that twice the iteration cycle is twice the product quality. \[unintelligible 01:13:44.27\] code quality, whatever.

So we're not necessarily trying to get you to finish the project faster - although you can choose to use it in that way - but we're more thinking about it as like squeezing out more iteration. You can save five hours and use five hours more on iteration, or you can split that time however you want, right?

**Adam Stacoviak:** Well, again, I appreciate you being on the mission... Because somebody needs to be. And this is the future, because it's what's being used; the most widely adopted design tool... I know we use it internally for various different things... And it's the future. So don't sleep on it. Use it. Check it out. What's left? Anything else?

**Emil Sjölander:** It's 2023 and we haven't talked about AI, but I feel like that's a whole thing...

**Jerod Santo:** We should not.

**Emil Sjölander:** We should stop before we talk about it. \[laughter\] The only thing I'll say is that I'm excited. Can't talk about much, but there's definitely exciting things coming down.

**Adam Stacoviak:** Very cool. We'll have to use that as a tease for some future content.

**Jerod Santo:** The future.

**Adam Stacoviak:** Yeah. Well, thanks, Emil. It was awesome.

**Emil Sjölander:** It was great chatting with the both of you.

**Jerod Santo:** Yeah, you too.
