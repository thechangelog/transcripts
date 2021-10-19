**Jerod Santo:** Oh yes, it's time once again, friends... My name is Jerod, and I am here for a party. I am joined by a couple of my internet friends. Regulars are here... Nick Nisi is in the house. What's up, Nick?

**Nick Nisi:** Oh, wowow... Hoy-hoy!

**Jerod Santo:** Hoy-hoy to you. And we're also joined by Feross. Feross, it's been a minute; always happy to have you.

**Feross Aboukhadijeh:** Yeah, good to be back on here.

**Jerod Santo:** And we have a special guest today... We're focusing on CSS for the day, and Tailwind CSS, and we have the creator of Tailwind here, Adam Wathan. Adam, what's up?

**Adam Wathan:** Hey! Thanks for having me on the show.

**Jerod Santo:** \[04:17\] Glad to have you, for sure. The way I like to start this show out - we'll get into the nitty-gritty of Tailwind and what you've been building, and why people are so interested... It seems like everywhere I go on the internet these days, I see people talking about Tailwind, which is exciting, I'm sure... But I wanted to open up the panel for a question. This is not specifically for Adam, it's for any of us; even maybe I'll answer it. No, I probably won't... But I'll let you guys go. And the question is "Why do people complain so much about CSS?" One of the things that you hear all the time - there's memes and jokes about CSS, there's all sorts of tooling for CSS... On our Frontend Feud episode, when we asked "Name something that frontend devs complain about", CSS was the number three answer, which was pretty high up the list... So it seems like it is a thing that people struggle with, complain about etc. I'm just curious, why do people think that is?

**Feross Aboukhadijeh:** Who's gonna bite?

**Jerod Santo:** If you don't raise your hand, I'll call on you... \[laughter\]

**Feross Aboukhadijeh:** I'll go first...

**Jerod Santo:** Alright, Feross. Thanks for biting.

**Feross Aboukhadijeh:** I think the number one reason is that people don't bother to learn it, and they just expect to figure it out. And this is also true of JavaScript; when you hear people complaining about JavaScript, oftentimes they're just winging it, because it looks like another language that they may know... And it's not surprising that if you don't learn the fundamental concepts, then you're gonna struggle to understand the interactions between the different parts of CSS. So that's my number one reason, I think, why people are hating on it.

**Jerod Santo:** I think that might be on point. And there might be more to it, as well. Nick, what do you think?

**Nick Nisi:** I think that maybe it's because there's no real - like, when you're just learning to use it, there's no real constraints around it, and it's more of like a design eye that you need... So you have this language, and you can make your content look like anything; without those constraints there, I think that it's hard to focus that, and then you don't spend a lot of time thinking about it, and it just kind of cascades from there... \[unintelligible 00:06:13.19\] Get it?

**Feross Aboukhadijeh:** I see what you did there...

**Jerod Santo:** Haah! \[laughter\] I like that. So people don't learn it, and it's also very general or very free; you can do almost anything with it, so it's hard to focus in. Adam, what are your thoughts?

**Adam Wathan:** I've got a few... I think one of the things is that it's actually really hard to get really good at CSS. I think HTML is funnily similar, too... It's one of these things that everybody knows a bit of, but there's actually not a huge number of people who invest that much time and effort into becoming real experts in it, the way that they do with JavaScript or other things.

I think a lot of people - they sort of start with HTML and CSS, get into JavaScript, and then they feel like they sort of graduated to JavaScript from there, and they don't level up their CSS and HTML knowledge the same way... Because in some ways it's not as exciting, because it feels like the potential for creating crazy stuff just isn't really there the same way that it is with JavaScript. So I think that's one thing.

I think another is that even though as a language -- simple isn't the right word, but learning the language is different from learning how to apply it in a maintainable codebase and come up with a system for writing CSS that feels like it scales with your application, and that you can go back and maintain it... And there's been so many competing philosophies for doing that over the years that it feels like there's no one true answer. We get things like Bootstrap that come out, or Tailwind, or any framework it feels like it's trying to be like the Rails for CSS as Rails is to Ruby; trying to provide some conventions and happy paths and best practices, and stuff... I think people are craving that a lot in the CSS world.

I think the other thing is that it hasn't been until somewhat recently that we've gotten the tools that we need in CSS to write things in a way where it's even possible for them to be maintainable.

\[08:12\] Before Flexbox, it was basically impossible to describe a lot of the layout stuff that we had to do in any sort of declarative way. There was always just like magic, like hardcoded numbers to make this height over here match this thing over here, because you had -- even just that simple pattern that you see all the time, where it's like a bar with a thing on the left and then a thing on the right; that's so trivial to do in Flexbox in a way where one of those gets bigger, like the container gets bigger... But if you do that -- back in the day, when we had to use floats for things, and maybe the thing on the right was floated right, if that thing got bigger because it was user-submitted content and the text wrapped, or something, now the container isn't gonna grow, unless you've... You know, there was just all sorts of -- it was hard to connect things in a way where they actually were built in such a way that they were related to each other, and not just borderline absolute-positioned on the screen...

**Jerod Santo:** Right.

**Adam Wathan:** So I think the tooling and the features that CSS includes now is a lot better in that regard, so I think it's a lot easier to build more resilient user interfaces now... But I think it still carries around a lot of that bad reputation from before some of the tools that we have now were available.

**Jerod Santo:** Yeah. The platform has gotten a lot more complicated, as well; underneath it more powerful, but more complicated... In the bad old days - maybe it was the good old days - you could just set a fixed width and be done. That's a thing that you could do. Now you just can't do that anymore, because it won't work on all these different platforms. The web platform has to live and breathe and work right in more places, and that's a great thing for the platform and for the users... But when it comes time to implement that, there's just a lot more to do to do it well.

**Feross Aboukhadijeh:** One other thing too is a lot of the early parts of CSS were geared around textual documents, and people were using those features to do more complicated layouts that arguable weren't the purpose of those constructs. So things like floats were meant for text-wrapping around, or putting an image over to the left and letting text wrap around it... And that's kind of why the hacks like clearfix and all the other stuff that people might have done back then were required. I think that's partially why CSS got a reputation for being difficult... And if you were maybe learning it from scratch today using the newer primitives, you wouldn't have as much trouble or it's not as bad as people make it out to be.

But yeah, I think part of that is just using a tool for more than it was originally intended to be used for, so it's taken a while for the spec to catch up to what people wanna do with it.

**Nick Nisi:** Yeah. I think it just really must have been cold there, in the shadow, for CSS and the tooling around it... Yeah, just in the shadow of JavaScript and HTML.

**Jerod Santo:** That's true. I was gonna say, there's like an inside-out problem too, where it's easy to conflate your frustration with the technology, when your actual frustration is your lack of design skills. Now I'm just speaking personally... I can get mad at the tool that I'm using -- sometimes you know what you want to design, and implementing with this tool is difficult, for whatever reason, so that you get frustrated on that side. But then on the other side of the equation you don't know what you wanna design, or you're struggling with the actual design decisions, and there's nobody to take that out on but yourself, or the tool that you're using to do the design, so it's easy to use it as kind of a scapegoat.

**Feross Aboukhadijeh:** CSS has to be flexible enough to support any kind of design that you wanna do. You as a developer might just be interested in building an app that looks like 90% of other apps out there. So a lot of the elements that you might wanna include in your app are sort of basic component-type things... You know, I wanna stick border-radius on this thing, and there's probably like four or five different border radius sizes that I might wanna use... But CSS can't build in constructs at that level of granularity, because it needs to be flexible enough for a lot more than that.

\[12:12\] So if you're just trying to get stuff done, it actually is helpful to have more constraints to save you from shooting yourself in the foot if you aren't the best designer... So I think that's kind of where Tailwind comes in.

**Jerod Santo:** Yeah, so Adam, here's a good primer for you to hop in to Tailwind and why you started it in the first place... Because there's lots of frameworks out there; you mentioned a few of them. Some are popular, some are less popular, there's different approaches... One of the things that you find often with a Bootstrap or a foundation is you start to have websites that all look somewhat similar, or at least widgets and components where you're like "Oh, this is a bootstrap site", and so that's one of the complaints with frameworks... But what were your thoughts around frameworks? Whenever you were like "I'm gonna start something brand new", surely you're not happy with what's currently available... So where were you when you decided for Tailwind?

**Adam Wathan:** Yeah, I can tell the whole story; I can try to do it in the shortest possible way. The origin story is really just like -- I was a Bootstrap fan for years and years and years, and I'm still a big fan of the project and the people involved, and I've always looked up to that team for a long time... I was using Bootstrap for everything in like the Bootstrap 3 days. Then when Bootstrap 4 came out, they were moving from LESS to Sass, which I think made sense at the time, because Sass had just kind of established itself as like the winner in the CSS pre-processor space, I think... But I just really had a soft spot in my heart for LESS over Sass; there's a bunch of little differences in how it worked that really appealed to me more... And one of them was the fact that in LESS classes could be used as mixins; this is something that's carried through all the way to Tailwind now, with our @apply feature is based on what you used to be able to do in LESS.

So when Bootstrap made the switch to Sass, I had to decide "Okay, I'm either gonna move to Sass, or I'm gonna just try and write my CSS from scratch." I was working on a new side-project with Steve, who's my partner at Tailwind Labs... And I decided "Let's just try and do all the CSS from scratch on this project, and put together a little toolkit for ourselves." So it was never any intention to build a framework from the beginning; we were just kind of writing the CSS for one particular project.

I kind of built everything I needed from scratch, very Bootstrap-inspired in the naming approach for classes, and stuff like that... But as I started trying to carry this set of files around with me from like abandoned side-project A, to abandoned side-project B, to abandoned side-project C, I would find myself changing little things about it every time... Like, "Okay, well the buttons need to look different in this project, or different in this project..." But there was little utilities like the ones that Bootstrap even had at the time, for text alignment, or margin, or padding, or whatever, that just stayed stable from project to project. Those were the only things that outlived one project.

So I found this set of CSS files that I was dragging around from project to project started to be more utility-focused and less focused on button classes, and form inputs, and stuff like that... And I was really enjoying working this way, and building out entire interfaces using utility classes instead of using component classes and stuff... And around this time is when I started to learn that other people had created tools like this too, that I had never seen, and if I had seen, I probably would have dismissed, because at first glance it just looks like such a terrible idea...

My friend, David Hemphill, had made a CSS framework called Beard CSS, that was the same sort of thing... And there was Tachyons, and Base CSS, and I think Ted had shed.css. It was all these different things that all looked terrible, just like Tailwind looks... But I found that I had just sort of like landed in the same place that a lot of these other people had, that had built some of these other frameworks, and realized that this is actually kind of a fun way to work.

\[16:07\] Around that time, a friend of mine Jonathan Reinink, who worked with me early on on Tailwind CSS - and this is kind of where we started working on it together - mentioned to me that he was about to start doing a redesign of the Sass app that he maintains, and wanted to know more about how I'd been doing CSS stuff lately. I told him I'm doing it this way, and he's like "That looks ridiculous, but I trust you, so I wanna try it." So he tried it out, and he was like "This is awesome."

Then we worked together to figure out "How can we--" because we both had separate copies of this copy and paste framework, essentially, that we're just like editing for our own projects... So him using it on his project and me using it on the projects me and Steve were working on was like the impetus for trying to figure out "How can we extract a shared core and create something where there's one source of truth that we're both leveraging in some way?" and that's when we just started working on trying to extract it into something that could be installed as a dependency for someone, essentially.

So we just kind of hashed that out together, trying to make sure that "Okay, I wanna add this opinion. Is that compatible with your side?" "Oh no, that's too opinionated because of X, Y, Z." It was like a forcing function for figuring out what is the universal set of styles that we can provide, and what level of customization and stuff do we need to be able to provide for it to be able to work, like changing your color palettes, or your shadows, or whatever.

So that's where all the Tailwind customization stuff came from. Originally, it was all written in LESS, because that was the reason I was even doing this whole thing, instead of just using Bootstrap... But as the level of customization started to get more and more sophisticated, we outgrew the ability to do it with LESS, because LESS was not designed as like a general-purpose programming language.

Then my friend David, who had built Beard CSS, suggested trying to write it in PostCSS, and I was like "What does that even mean, to write a framework in PostCSS? Isn't PostCSS a tool for adding vendor prefixes using auto-prefixer?" How do you take what PostCSS does and use that to make a CSS framework?

**Jerod Santo:** Right.

**Adam Wathan:** And he kind of explained to me some of the tricks that people had been using, where you can take an @ rule, like a media query or an imports statement and you can make custom ones using your own keywords, and PostCSS will parse them just fine... Because all it's trying to do is parse CSS-ish stuff; it's not like it has a hardcoded list of what's allowed to come after an @ sign.

So people were doing stuff like creating custom properties, for example; LostGrid is a PostCSS plugin that adds its own CSS properties that when you crawl that AST with PostCSS, it finds those and sort of expands them into multiple properties, or creates multiple rules from it. And that's when we realized "Maybe we can do an @Tailwind rule that is a spot for Tailwind to just inject a bunch of styles generated from some configuration once it finds that rule." So when I realized what you could do and what the tricks were for injecting CSS that was generated elsewhere, I started porting everything over to PostCSS in JavaScript, where I could actually write tests and make sure that the thing actually worked... And it was awesome.

So that's how it came to be... And we released a very, very first version on Halloween night 2017, I think, so a little over three years ago. People were excited about it, and it kind of started slowly growing after that. Then in 2019 I went full-time working on it, after we had released the Refactoring UI book a couple months before... And then since January 2019 I've been working full-time on Tailwind-related stuff, and now we have a team of six people, including me and Steve, all working full-time on this sort of stuff... And it just keeps growing and growing and growing, which I think has been awesome, and I think just because of the fact that most open source projects don't get to have teams of six people working on them full-time... But yeah, so that's what we do every day now, is work on stuff related to Tailwind, and it's been really fun.

**Break:** \[20:20\]

**Jerod Santo:** So Adam, you mentioned it was 2017 when it first came out... How long were you working on it beforehand? Because to never have sunlight on your face for all that time - it's gotta be a while. You wanna release it, right?

**Adam Wathan:** Yeah, so... I think I started on it in maybe like April... It depends how you look at it. I'd been carrying it around in some shape or form for years and years. I started working on it originally on this side-project called Digest that me and Steve started working on in 2014, which was like a tool for teams to share links with each other for articles they thought were interesting... And then I used it again on -- I don't know how many other side projects; at least two or three. And then I finally brought it over again for this app KiteTail, that we were working on in the spring of 2017. I had been live-streaming all my work on that app. You can find it, there's like probably forty YouTube livestreams, where it's just building the app from scratch, all on livestream.

The most common question that came up on the livestreams was like "What CSS framework is that? What CSS framework is that?" That's when I kind of realized that "Oh..." I mean, I never really intended to even share it, because it didn't really even occur to me that it was interesting to the general public... But because I'd been working in public and everyone had been asking for it, I kind of thought "Well, maybe I'll bundle this up into an open source thing." Originally, I released it under the namespace for the app; almost like GitHub Primer, which is their internal thing, that was kind of the original idea... But with where we ended up, it was just much more universal, and felt like it could just be a thing with its own name, so we did that. Then, of course, that side-project got abandoned, and now I just work on the CSS framework itself... So yeah.

**Jerod Santo:** \[laughs\] It's funny how that happens... And surely, you could have never imagined that it would come to this. This is like a business now. I mean, it's an open source CSS framework, and you've built a business around it. People are saying "Shut up and take my money." I mean... Isn't that exciting and then weird?

**Adam Wathan:** It's definitely exciting. I didn't know what I expected, I guess. I didn't really intend to build a business around it. But what seems to happen was the CSS framework was taking off, and it felt like "This is the thing that I've worked on that has had the highest potential for impact", you know, in terms of how many people can benefit from it, and stuff. So of all the things I'd worked on, this was the thing that I'm most likely to be known for.

\[24:07\] Unlike a lot of other open source type tools, there are established precedents for people making money on CSS framework-related stuff. Bootstrap has a theme store; ThemeForest is an enormous business on its own. So there's a pretty straightforward path to trying to do some sort of commercial stuff around it... So it felt like we should try to do that.

I think the approach that we ended up taking - we've released this product called Tailwind UI, which is designed to just be like a giant directory of examples of different UI patterns and components built with Tailwind CSS. It's a little bit different than some other traditional theme store approach, I think, but it's kind of rooted in the same sort of idea. People who are building stuff are not always good at design, or not even always good at taking a design and converting it into real code... And there's history proving that people will pay for that sort of thing, so that seems like a good way to try and fund the development of our open source stuff.

So we released that product in February of this year, and... That combined with the Refactoring UI book, which was also - me and Steve did that together - those were all under the same company. Those two products together are sort of what pay the bills and allowed us to work on Tailwind, and work on Headless UI, which is another open source tool that we have been working on... And \[unintelligible 00:25:37.13\] God knows how many other things that we work on, that aren't coming to mind right now...

But for the most part, out of the six people that work at the company, 90% of the time is spent working on open source-related stuff. I think only Steve and one other person spent the bulk of their time working on the paid stuff, so it's really cool to be able to commercialize it, in a sense, without forgoing work on the thing that got us here, in favor of working on the commercial stuff... Because I think that's always the risk. Everyone always says when you're building an open source tool, the way you should monetize it is by building some commercial business around it, and then you can work on the open source stuff using the money from that. But that's presuming that you're gonna be able to invent some business that only takes 15% of your time, but pays you a full-time salary somehow to work on all the open source stuff... They make it sound a little easier than it really is.

**Jerod Santo:** Yeah. It's like 92 jobs.

**Adam Wathan:** Yeah. Like, you still can only do open source on evenings and weekends, because the rest of your time is struggling to make this real business actually work... So I'm really fortunate to be in a position where we actually have found a way to spend a lot of time on the open source stuff, or to at least have the margins to be able to invest in hiring people that can focus entirely on the open source stuff... Because that's what feeds the commercial stuff anyways. It would be easy in our situation to forget what got us here, and I think investing just in growing the framework has been the most effective thing we've been able to do for growing the business, too. So it's just all kind of works, which has been great.

**Nick Nisi:** Yeah, that's great. I've looked at that Refactoring UI book and gone through it; I've spent a lot of time going through it, and I really like that -- it seems to tie back a lot to Tailwind and how you might do things with that, but also some of the theory behind... You know, colors is the one -- colors and white space are the ones that really stuck out to me, and it was really helpful... Because that's the thing, kind of like I said, going into CSS - I could do anything; I could have 40 pixels of white space over here and 27 over here, and no real rhyme or reason for that... But this kind of helps me understand the theory of it, and then Tailwind kind of helps you stay consistent within that. So through that book and that open source work, your content is really content to let me shine, and that's your way...

**Adam Wathan:** \[28:16\] That's awesome. Thanks, man. I really appreciate that.

**Feross Aboukhadijeh:** It's a really good example of sustainable open source that works. There's a lot of reasons why open source struggles to get funding; that's something I'm really interested in... You check a lot of the boxes that I think make it a little bit easier to build a business on top of what you're doing, because you have an end user-facing project, so people actually know that they're using Tailwind, because they chose to use it, or someone on their team chose to use it... So a lot of open source is like a dependency, if it's somewhere deep in the tree and no one even knows that it exists...

**Adam Wathan:** It's only really like the leaves of the tree that can really have the chance to even be successful in that regard. If you're not building the framework that people are using, then it's hard. Even PostCSS as a tool is gonna struggle to be funded, compared to us, even though we're built directly on top of that.

**Feross Aboukhadijeh:** Totally.

**Adam Wathan:** Yeah, I totally agree with you.

**Jerod Santo:** It's kind of like a movie set... The person who's in front of the camera is the one that gets all the money and all the stardom. Everybody else - maybe you're \[unintelligible 00:29:20.29\] Okay, that's not like a thing you go to school for; maybe you're a cinematographer... No one's ever gonna know, unless you watch the end credits, like, who was the cinematographer. Now, at a certain point those are so famous that people start to learn them, but the analogy holds to a certain degree. It's kind of like a rich get richer thing; it's not really that, but it's kind of like, certain projects just lend themselves to the success and the other ones don't, just by the nature of the thing they are.

**Adam Wathan:** Yeah. And there's even projects that are user-facing, things you work with day-to-day, that are still not obviously commercializable. Even Vue.js - Evan gets to work full-time on Vue.js, but not because he has some magical...

**Jerod Santo:** Model.

**Adam Wathan:** ...model, in terms of some service that he sells, or anything like that. He does really well through Patreon stuff. But even then, the Patreon stuff is companies who wanna advertise on the Vue.js docs, essentially. That's where the very bulk of all that comes from. So really, he's in the advertising business, essentially. And there's lots of other tools, things people interact with directly, day-to-day, that still haven't had success there... So yeah, it's tough. The whole open source funding problem is very real, for sure, and we're lucky to be in the spot that we're in, where we're working on the exact right type of tool, where there's a lot of history of people paying for things like this already... But that's just because of the nature of the tool, not because we've figured out anything that anyone else is trying to figure out.

**Feross Aboukhadijeh:** That's really great though. It's good to have an example of someone making it.

**Jerod Santo:** It's also a clear separation of concerns. The product versus the open source free stuff is very clear; it's like, "This is the framework to build things. And then, by the way, if you want some pre-built things, here they are." That's your delineation. It's like, "Here's the widgets. Tailwind UI."

**Adam Wathan:** Yeah...

**Jerod Santo:** And then you could build your own widgets, of course... But a lot of us aren't very good at building those widgets... Going back to the struggles with CSS, it's actually our design skills that need help, and so you're actually helping us with "Don't give me a blank canvas and a tool to paint. Give me a paint by numbers, or give me the numbers that are already -- the form I can just put things into. And I'm willing to pay for that."

**Nick Nisi:** Some constraints.

**Jerod Santo:** Yeah, exactly.

**Adam Wathan:** Yeah, at the end of the day we're definitely selling design more than anything else, which I think -- yeah, like we've been talking about, lots of precedent for that... And also, just a pretty in-demand skill. Yeah, it's been nice to be able to tie those two things together, to have a design co-founder, so that we're able to even do that... Because not every open source tool has on-staff designers... \[laughs\]

**Jerod Santo:** \[32:15\] So were there other people building competitors to your business side? I don't wanna say competitors, but are there other widget libraries, are there other UIs where you can say "It's Tailwind-based, but here's our philosophy" or "We're doing this", so that there's selection. Or is it "Build all your own stuff or use Tailwind UI"?

**Adam Wathan:** There's definitely other stuff out there. There are people who sell Tailwind UI kits, or Tailwind themes, and stuff like that... That's totally cool. I'm happy to see other people doing stuff like that, and for there to be other things existing, for sure.

Obviously, there's always some stress and pressure around the fact that we have to build the building blocks and the commercial stuff, and then people who compete with us only have -- they get to take advantage of all the work that we're doing on Tailwind without having to maintain it or invent it, or come up with a new feature.

**Jerod Santo:** Right.

**Adam Wathan:** They can just focus on the commercial side of things. But fortunately, we've been able to create a similar structure just internally, by having people who spend their time on the open source stuff and then people who spend their time on the commercial stuff... So you know, I don't really see this as a disadvantage anymore. It used to stress me out more when we had fewer people and had less resources. I would spend two months developing a bunch of Tailwind CSS features, which was two months that I could work on that commercial side of things... But now I think it's working out well.

Thankfully, just like being able to call our stuff the official stuff is a huge advantage, of course... So fingers crossed that no one ever eats our lunch completely, but... For now it's working out well, and it's been good that we can do both.

**Nick Nisi:** It's a benefit they're always walking a step behind...

**Jerod Santo:** That's right. Until AWS comes out with Tailwind widgets as a service...

**Adam Wathan:** Yeah, exactly... \[laughs\] Except no one will be able to figure out how to use those ones \[unintelligible 00:34:20.19\] to be able to find the right table, or whatever...

**Jerod Santo:** Right.

**Feross Aboukhadijeh:** But even if they are commercially successful, they're still building their business on top of Tailwind, so you're really the one with all the glory.

**Adam Wathan:** In a way, yeah... \[laughs\] Yeah, as long as our business is still doing well, I'm okay with that. But yeah, it's true; it's good -- I like to see people doing anything with the tool. I think the right attitude to have, for sure, is to be enthusiastic about what other people in the community are doing, especially as long as you're putting food on the table. I can see how it can get stressful otherwise, but right now we're not struggling in that way, so it's easy to be supportive and enthusiastic about this cool stuff that other people are doing.

A friend of mine yesterday just released this Chrome extension - I think it's actually for Firefox, too - called Windy that lets you basically hover over any DOM element and it'll read all the CSS for that and all its children, and reconstruct the HTML, and try to recreate it with pure Tailwind classes, so you can copy any piece of any website as Tailwind. Obviously, it's not gonna be totally, 100% bulletproof, but it's surprisingly good.

Even like -- you know, something has a padding left of 13 pixels, Windy will figure out what's the closest value that exists in Tailwind, and sort of round it to that. Same with font sizes and colors, and stuff like that... So yeah, people are doing all sorts of cool stuff; it's really crazy to have built something that has people even excited enough about it to invest time into creating crazy tools like that, so...

**Nick Nisi:** That's what happens, while you're the one with all the strength in the CSS realm.

**Jerod Santo:** That's right.

**Break:** \[36:20\]

**Feross Aboukhadijeh:** Adam, I'm so glad we have you here. For a long time I had just heard about Tailwind, and it was merely a beautiful face without a name for so long, but now we can actually ask you all of our questions about the nitty-gritty. So let's get into it. Maybe we could start with talking about the editor integrations...

**Adam Wathan:** Yeah, sure. So we have an official VS Code plugin, that was actually developed by Brett \[unintelligible 00:37:45.12\] and that's kind of how I got to know him and why we hired him... It's pretty awesome. Let me think of all the cool stuff it does... It does linting, so it can tell you pretty interesting things... One of the things that trips people up sometimes with Tailwind is adding two classes to an element that are kind of competing with each other. So pt-5 and pt-8 - which one of those is actually gonna take a fact? Is it gonna be 5 or 8? You shouldn't really put both of those on an element. So it can underline those and say "Hey, it looks like you have two conflicting CSS classes."

Or it gives you autocomplete for everything; that's like really intelligent autocomplete, which is great, because there's about six thousand million classes to remember... It can do cool stuff like it adds a little color swatch in front of utility classes that are color-related, so you can pick them out more quickly... It gives you autocomplete for some of the CSS-based functionality that we have, like that @apply rule, or we have some functions for referencing values from your Tailwind theme, and stuff like that... So that's kind of what that does.

I know that JetBrains just added official -- well, first-class Tailwind CSS support to their IDEs, too... But I haven't tried it yet, because I don't actually use WebStorm or PhpStorm, or anything... But from what I've heard from people who do, they're pretty excited about it. So those are the only two that I know of so far...

**Nick Nisi:** I can throw in one... The one I'm using is coc-tailwind-intellisense, which is a plugin for coc, which is a plugin for Neovim...

**Adam Wathan:** Nice.

**Nick Nisi:** So it's like IntelliSense in Neovim with that... And it's wonderful, because that IntelliSense is just a beautiful smile to hide the pain of having to remember all of those classes.

**Adam Wathan:** Yeah. Does that use a language server to do all that stuff?

**Nick Nisi:** Yeah, I think so.

**Adam Wathan:** Is it using the same one that we built for the VS Code one, I wonder...? It'd be cool if it was.

**Nick Nisi:** I would assume so, just based on the other coc plugins; that's how they all work.

**Feross Aboukhadijeh:** That's cool.

**Jerod Santo:** Nick, you go through such crazy constraints to get your Vim setup going... You'll do anything to get it somehow into Vim...

**Nick Nisi:** That's true... \[laughs\]

**Adam Wathan:** That is what all Vim users are like, man... Vim at all costs. \[laughter\]

**Jerod Santo:** That's right.

**Nick Nisi:** A plugin to run a plugin that is forked off of a VS Code plugin, which is used in a...

**Adam Wathan:** Yeah...

**Feross Aboukhadijeh:** And you didn't mention that Neovim is like a variant of Vim, which is a variant of Vi. So there's so many layers here...

**Nick Nisi:** \[40:21\] Right. \[laughs\] There's Ex in there somewhere...

**Jerod Santo:** Nick, I know I pick on you a lot for this Vim stuff, but did you ever know that you're my hero?

**Nick Nisi:** Thank you.

**Jerod Santo:** I mean, I can't believe what you do to get your Vim setup working. It's heroic.

**Adam Wathan:** One day we're gonna have a Chromium Windows in Vim dropdowns, just to be able to do this stuff people need to be able to do... And everyone's just kind of forgot that the reason they use Vim is because it's supposed to be fast, but low memory usage... And really, it's just because they hate \[unintelligible 00:40:47.24\] I guess... \[laughter\]

**Jerod Santo:** I actually gave up on Vim because it slowed down so much. I was like, "If it's gonna be slow, then I might as well use something that's slow that I like a little bit more." I didn't give up on it, I still use it, but you know what I mean... As my daily code editor.

**Adam Wathan:** Yeah...

**Jerod Santo:** All my plugins slowed it down. I can't believe, Nick, that yours is still fast, with how much junk you shove into your Vim... How is it fast?

**Nick Nisi:** 52 plugins, plus 14 coc plugins... Yeah, it's...

**Feross Aboukhadijeh:** Oh, my God...

**Nick Nisi:** It's still fast though... It's everything I would like it to be.

**Adam Wathan:** Nice.

**Jerod Santo:** \[unintelligible 00:41:18.06\]

**Feross Aboukhadijeh:** Having the editor integration sounds like it could be a game-changer for using something like this. I use Tachyons, which is kind of similar to Tailwind. You mentioned it earlier...

**Adam Wathan:** Yeah.

**Feross Aboukhadijeh:** You basically can't use it, especially when you're learning, unless you have the tab open to the official docs at all times, and you're always Cmd-F-ing and finding the class to use for the CSS that you would like to write... So having that just built in directly seems like a real game-changer.

**Adam Wathan:** Yeah, it's definitely helpful for learning... And we also put out this online Tailwind playground a couple months ago, which is at like play.tailwindcss.com. It's kind of like a CodePen specifically for Tailwind, that has all the same IDE integration stuff built right into it in the browser, but it actually works even better than the one in VS Code, because we just have more control over it... And the main reason that works better is because we have the live preview, and they can kind of talk to each other...

So one of the cool things that you can do in the Playground is when the autocomplete pops up to show you all the classes that it's suggesting based on what you've typed -- so maybe you type bg-red-, it's gonna suggest red-50, red-100, red-200 etc. As you hit up and down between all those options, the live preview will actually update immediately, without even having to hit Enter to select the color. So you can design in the browser just by hitting up and down between the different options and seeing things, preview instantly. That's become a pretty cool way for people to learn, too.

One of the projects that I wanna tackle soon is building -- the way that playground works is like a Share button that just creates a permalink to whatever that instance is. I wanna build a series of those that link to each other, that is almost like an interactive Tailwind tutorial that just -- without having to build our own custom tutorial thing... Because all it is is a series of playgrounds. I think that'd be kind of cool, to be able to have a link where you could just go somewhere and there's a link right in there to go to the next one after you've kind of read and tinkered with whatever the example is, and stuff like that. I think that'd be kind of fun.

**Nick Nisi:** Yeah. I use it actually in a very similar way to the way I use the TypeScript playground, which is to demo out things and share with teammates how to do this with TypeScript; I do that with Tailwind as well, and it's really nice for that.

**Adam Wathan:** Yeah, it's cool. It's been so helpful for us for troubleshooting things for people in our Discord, and stuff. Before, it used to be like "Well, send us a link to a code sandbox" or something, and it's kind of hard to set up, because there's a build time thing with Tailwind, especially if someone's having an issue with some custom configuration... You need to be able to recreate that. So all that stuff works in our playground. Someone could just send us a quick link and we can figure it out right there. So that's made customer support way easier; that's been definitely worth it.

**Jerod Santo:** \[44:05\] Do you advocate for people to learn Tailwind and use Tailwind forever? Or is there like an educational graduation where at a certain point you won't need it anymore? Or is it a utility framework? Like, even as an expert carpenter, I still use my utilities. Is that more like that? What would you think?

People will eventually be like "I used to use Tailwind, but then I learned how it worked, and now I have my own little thing that I use, that's lighter, or better customized." What do you think about that?

**Adam Wathan:** I mean, I'm obviously biased...

**Jerod Santo:** Sure. But what would you think?

**Adam Wathan:** My personal stance - to me, it feels like I finally have a unified theory of CSS for my own projects, you know what I mean? I tried every approach under the sun. And you can find articles I've written on the internet, that I completely disagree with now, from when I used to recommend doing things differently. Now it feels like a solved problem to me. It doesn't feel like something I think about. It's like when you find that one brand of jeans that's like "Okay, that's it." Now that question of "What jeans should I own?" is now no longer in my head. I know what ones I'm supposed to buy; that's solved.

**Jerod Santo:** \[laughs\] Done with that decision.

**Adam Wathan:** Yeah. Or like toothpaste, or deodorant, or something. "This is the one that I get. That doesn't occupy any space in my mind anymore." I don't know, there's obviously alternate approaches that have merit, especially -- I think CSS-in-JS is super-interesting if you're building apps where you can use that approach... And I think people are kind of still figuring out the best version of that... But there's lots of benefits to it, and interesting things you can do there. But not everyone is building a React SPA, so not everyone can really use that stuff.

Tailwind, I think is a really great trade-off, from my perspective, of something that kind of scales well, is fast to learn, and lets you make local changes really easily. It has lots and lots of flexibility and customization stuff, but works everywhere. It works on a WordPress theme, it works on a React app... It's just CSS at the end of the day, which is always gonna work.

Yeah, personally I don't expect -- I don't think there's this natural path of outgrowing it anyways, because to me the biggest benefit is that I don't have to write CSS the same way anymore. You don't spend time thinking of stupid classnames for things; you just put an existing class on something, and you're done. I think that's the biggest benefit to it, that people don't understand how big of a benefit it's gonna be until they actually experience it... You're not jumping to the CSS file and think -- well, usually the workflow would be in your HTML file, and you're like "Okay, I created this div, I created this other div... Well, I've gotta style this div. So I guess I needed some sort of identifier to slap on it, so that I can select that identifier in my CSS. What am I gonna call it? Well, I guess it's on the profile page, and it kind of is the thing that the avatar is inside of... So is it like a profile page avatar wrapper? Okay, I guess..."

It's so slow, compared to just like "Well, I know I need to make this display flex, and the line item center. So - flex, item, center. Moving on to the next problem."

**Nick Nisi:** You might have just answered that, but do you ever find yourself going into CSS and writing classes using the @apply, or do you consider that more of like a code smell, or...?

**Adam Wathan:** There's only a couple situations I'll do it. One is for typography/content stuff. Say you're working on a blog, and all your blog content comes from markdown; obviously, you can't go and litter your markdown with all these utility classes. You have to be able to target it from a higher level. I'll always create some sort of class like that; we've released a Tailwind plugin that kind of gives you some sensible defaults to this. It gives you this prose class, so you just slap prose on whatever div has the markdown-rendered content, and it's just gonna look pretty good. That's a situation where I would have written custom CSS, and still sometimes do...

\[48:12\] And then the only other time I really do it is when I find that I'm missing a feature in Tailwind. The other day I was rebuilding the Alberts.com website on the livestream, and they have this horizontal scrolling nav bar. By default, the scroll bar is visible, and this thing that's like 15 pixels high, and that just looks awful. So in theirs they hide the scroll bars, and we don't have utilities in Tailwind for hiding the scroll bar. So my approach is always like "Okay, I need to hide the scrollbars... I'm not gonna go create a CSS class for nav bar and add the scroll bar CSS there. I'm gonna figure out what feature do I wish Tailwind had already, which is some sort of class for hiding scroll bars." A very evil, unsemantic class name, you know? \[laughs\]

So whenever I end up writing custom CSS, a lot of the time it's more from that perspective. It's kind of extending Tailwind with Tailwindy type of things; not just writing custom, project-specific CSS. It's surprisingly rare how often I need to write custom CSS for things. I'll reach for JavaScript before I'll reach for custom CSS a lot of the time, just because I wanna avoid opening that Pandora's box of like "Now there is custom CSS in this project." I just wanna resist that as long as possible.

I'm already writing HTML, no matter what. A website cannot exist without HTML. So that is foregone. I must write HTML. But do I need to write CSS? I don't know... If I don't have to, but I do have to write HTML, then maybe I can just do it all there.

**Nick Nisi:** Yeah. That really makes me feel like "This project is making it so that I don't have to write a whole lot of custom CSS." And when I see that, it makes me take notice. Like, if I'm in a code review, I really scrutinize why custom CSS is showing up in here, because it seems like it might be able to do almost everything with Tailwind; or if you're trying to repeat things like that, I might have a custom button style where I might just @apply that in a custom class, and then have like a...

**Adam Wathan:** Yeah, yeah, that's another valid situation, for sure, extracting some repetition. But I think you have to be careful not to extract stuff that would be better extracted into a Vue component, or a React component, or even like a Twig partial, or something... Because I find as soon as there's more than one HTML element involved, that a CSS class is usually not the right place to try and remove that duplication... Because now - yeah, you might have created a card class, and a card header, and a card body, or whatever, but you still have to repeat that HTML structure from memory every single time you wanna create a card. So you haven't actually extracted all the duplication... Whereas if you can extract that into something that holds the HTML structure and the styles together, now there's a single source of truth for both of those things, whereas just using CSS, all you've done is created a single source of truth for the styles... And I find styles and markup structure are - as much as people wanna pretend that they're not linked, they're pretty linked.

Yeah, CSS Zen Garden I think has demonstrated that you can do crazy things without changing the HTML structure... But I'm not sure that that's actually the way teams really wanna work most of the time.

**Jerod Santo:** Yeah...

**Adam Wathan:** That's like a code golf problem, you know what I mean?

**Jerod Santo:** CSS Zen Garden is the thing that you should do that's crazy. That's the one time that you would wanna do that, is if you're creating a CSS Zen Garden, you know?

**Adam Wathan:** Exactly. That's how I see it. It's like a challenge, you know what I mean?

**Jerod Santo:** \[laughs\] Exactly.

**Adam Wathan:** \[51:53\] It's like, "How can I get from this side of the room to the other side of the room without touching the floor?" It's a fun challenge, I think, but I don't know that it should be the default way that we actually try to write things. I always make this joke with CSS Zen Garden -- obviously, it's a cool project, and a really cool demo of what's possible; I'm definitely not slagging on it in any way... But people always say "Look how different you can make this site look, without changing the HTML, just by changing the style sheet." It's like, man, you should see how different I can make a site look by just changing the HTML, and not changing the CSS file at all. \[laughs\]

**Jerod Santo:** Right.

**Adam Wathan:** With Tailwind, I will give you one style sheet that you can use to build 50 different sites, where all you did was change the HTML, you never touched the CSS; and none of the content is the same somehow, and none of the layout is the same...

**Jerod Santo:** Right, yeah. So one of the things that happens with CSS - we didn't bring it up at the top, but it seems only additive - is one of the problems that we have, is like deleting CSS rarely happens, especially in teams, because you don't know what's being used, and stuff. And surely, Tailwind solves that problem, because you're not writing a whole bunch of CSS, you're reusing the same stuff. This may sound facetious, but take it seriously - you are adding tons of HTML classes in your HTML, and I wonder, at a practical level on a large site, do you get HTML bloat, or is it nominal and you shouldn't worry about it? Because eventually, you have large HTML pages with a bunch of classes. What are your thoughts on that?

**Adam Wathan:** Yeah, I think the first person I saw talk about this was Nicholas Gallagher, who's the guy who created Normalize. He used to work at Twitter; I think he works at Instagram now. He has this blog post about HTML semantics and frontend architecture where he talks about this problem a little bit... And he did some tests where he took an HTML file with tons and tons of classes in it, and then the same HTML file with all the classes removed, and just compared the size after HTTP compression... And in his tests, it just wasn't enough to be--

**Jerod Santo:** Moving the needle.

**Adam Wathan:** ...significant. And I haven't done tests myself to find out... It would be interesting though to really have something measured, where you could say "Yup, this is a problem, because it's so much extra stuff in the DOM, and it's slower, or whatever." But I've never noticed that being a problem. The payload still seemed to be pretty small. But it's a valid concern. CSS is cacheable from request to request, whereas the HTML was not. So I haven't noticed it being a bottleneck enough to care about it, you know what I mean? But it would be interesting to really get full scientist on it and come up with some real serious conclusions.

**Jerod Santo:** Feross, you've been quiet. Anything kicking around your head over there?

**Feross Aboukhadijeh:** I was wondering how using Tailwind would affect CSS performance in terms of when you're trying to inline all the critical styles at the top of the page. You have to figure out basically which classes were used in the HTML and just inline that portion of the Tailwind CSS file... And then you put that inline in a style tag, I guess. That's sort of the best practice for making that first pageload really fast, because then you don't have to go out to the network and wait for that CSS file to come back before the page can be drawn.

**Adam Wathan:** Yeah, I know there's definitely some people who are doing that stuff with Tailwind... I haven't actually ever done that on any of my own sites, like done a critical CSS thing... But I know there's this guy Andrew that's in the Tailwind community that's super into that sort of thing and he's shared solutions before. I don't think it's particularly different than the way that you do it with any CSS... At the end of the day, what you get from Tailwind is still just a regular CSS file... I don't know enough about how similar solutions work... Because I think the challenges would be the same. One of the challenges -- I guess this wouldn't actually be a real issue in practice, because I guess what you do is you inline all the critical CSS, and then you put the actual CSS file after the critical CSS, so that it overrides all those same declarations and maintains the same CSS order, since the class order is sort of important for specificity stuff... But the same tools should work. I'm not sure what the most popular tools are for that. I think there's a tool called Critical CSS, or something.

**Jerod Santo:** \[56:25\] How do you do it, Feross?

**Feross Aboukhadijeh:** There's one that I've used before on BitMidi. I think it's called PurgeCSS...

**Adam Wathan:** Yeah, PurgeCSS is a little different.

**Feross Aboukhadijeh:** It crawls your component files or your template files, depending on what you use, and it looks for stuff that looks like basically any string. It just sort of runs strings on the file, figures out all these strings, and then if any of these match a class that's in the CSS file, then it'll keep that class, because it may be used. It's obviously not perfect, but it errs on the side of it being conservative, so you'll end up with -- all the possible classes in that file will be in the...

**Adam Wathan:** A couple of false positives, but...

**Feross Aboukhadijeh:** Yeah, exactly.

**Adam Wathan:** Yeah, yeah. So PurgeCSS -- I think may I misunderstood what you're asking... PurgeCSS has like a requirement to use Tailwind at this point, because the number of combinations of classes that we generate for different colors, and breakpoints, and hover states, and focus states and stuff - the default Tailwind build is huge; it's like 3 megs, or something, in development. So PurgeCSS has integrated into Tailwind now; we expose a simpler API on top of it, that is sort of like Tailwind-aware, so we can intelligently purge stuff that's safe to purge, but keeps stuff that's not safe to purge.

A problem people run into with Purge, after just using it manually, for example, is -- maybe you're using a library like Flatpickr, or Pikaday, or something, that includes a bunch of CSS in your Node modules folder somewhere... Or it includes its own templating stuff deep in your Node modules folder, and you forget to tell Purge to scan that particular folder to find usages of classes, it'll accidentally rip out all those classes. So our integration makes sure it only is purging stuff that Tailwind generates, so any custom CSS is always kept, just to be as safe as possible...

But yes, that's built right into Tailwind now, and all you have to do is provide an array of paths to your templates, which is just like a glob syntax... So for Next.js it's like .pages/\*\*/\*.js sort of thing. And in production, it'll strip everything out automatically.

\[58:40\] So when you do that, most sites will be, after a Brotli compression, like 4-5 kb of CSS, instead of 3 megs of CSS, which is pretty wild. Even the Tailwind website, which I think has gotta be the biggest production Tailwind CSS file, just because - how could it not be, because the whole point of the website is to demo the framework... Even that is like -- let's see... It's 24 kb compressed, and that demo is like -- every feature in Tailwind is demoed, you know what I mean? But not every single class is demoed, because you don't need to use every single class to demonstrate each feature. I don't have to show you how margin left 2 works on every single breakpoint for you to understand how it works, you know what I mean? So there's lots of stuff that we can strip out.

**Jerod Santo:** What's a typical site then? If that's like all, with the kitchen sink. Would you say like 10 kb, or what?

**Adam Wathan:** Less than 10, for sure. Less than 10. I'm trying to think of a good one to look at, that I know is pure Tailwind... Because lots of people still end up writing custom CSS. Firefox Send used to be my go-to one, but they shut that service down, so...

**Jerod Santo:** They did. That was sad...

**Adam Wathan:** And now it doesn't even have a placeholder page, it just links to the Mozilla homepage. So it's sad.

**Jerod Santo:** That was a service -- I never used it, but the fact that it existed, I respected that...

**Adam Wathan:** Yeah, exactly. I felt the same way. \[laughter\]

**Feross Aboukhadijeh:** Cool.

**Adam Wathan:** Did you guys know -- something I can actually do that most other people can't do is that I can fly higher than an eagle.

**Jerod Santo:** Wow... Well, I mean, you're really making -- I can't respond to that... \[laughter\] Oh, Adam broke the show... I think probably that's a good point to end on. Thank you for putting Tailwind out in the world. We're super-excited you're having so much success, especially with building a business around it, because not everybody can do that in open source. And every time we see it, we celebrate it, because that means you can sustainably, reliably go forward and create more open source goodness for all of us to build upon, and that's awesome.

So we are thankful for Tailwind, we're thankful for you coming on the show, putting up with us... And thank you for putting the tailwind beneath our wings, Adam... \[laughter\] That's our show for this week.

**Adam Wathan:** Thanks for having me on.

**Jerod Santo:** Thanks for putting up with us, listeners. Thanks, Feross, for joining us. Nick was also here... And we'll talk to you next time.

**Outro:** \[01:01:12.28\]

**Nick Nisi:** Adam, I don't know if you can tell, but I've been saying weird, random things, like "It must be cold there in my shadow..." I'm trying to work in the lyrics to Wind Beneath My Wings \[unintelligible 01:02:35.10\] \[laughter\] So if you hear me go--

**Adam Wathan:** I've not put that together...

**Jerod Santo:** I didn't think you were anywhere near \[unintelligible 01:02:43.03\] because the latency kills the vibe, but... I'm like, "Now it just seems like you're a weirdo, Nick. I don't know if we can go the full episode..." This is part of the break, this part will not be on the show, but... We wanna put together an Easter Egg, because we wanna call this "The Tailwind Beneath Your Wings" as the name of this episode.

**Adam Wathan:** Okay...

**Jerod Santo:** And we're hoping that Nick could somehow say each -- Nick and me... Now I'm kind of backing out, but I'll do it with Nick... We're just hoping we can utter each lyric throughout the show.

**Adam Wathan:** Sounds good.

**Jerod Santo:** So if we say things in roundabout ways, or you're kind of wondering "What the heck is that guy talking about?", just play it cool...

**Adam Wathan:** Alright, I will.

**Jerod Santo:** ...and it'll work out in the end.

**Feross Aboukhadijeh:** I was wondering what Nick was doing there... I thought that was more poetic than it needed to be... \[laughter\]

**Jerod Santo:** We should take a break right now... \[laughter\] I have a feeling we're just tanking this show... Adam's over here like "Why am I on this show? These guys just keep saying the weirdest stuff to me." This is good. \[laughter\]

**Adam Wathan:** I feel like it's only gonna get worse from here, too... \[laughter\]

**Jerod Santo:** Some of these were really hard to say...

**Adam Wathan:** Especially once you get close to the end, where you have to just repeat things...

**Jerod Santo:** Yeah. Well, I think we're just gonna go up to the first \[unintelligible 01:04:00.11\] of The Wind Beneath My Wings." That's probably what we're trying to get to... Which is gonna be a struggle, because we're in our last segment already... But some of these--

**Adam Wathan:** Okay... We're like 40% of the way there.

**Jerod Santo:** Yeah. But "A beautiful face without a name for so long" - I mean, how does that make any sense? Unless I go back to your origin story... You're like "So, back when Tailwind was..." Huh, maybe I can do that. Yeah... Alright. Well, where should we go from here? What do you think, Adam?

**Adam Wathan:** Yeah, I will talk about whatever you want.

**Jerod Santo:** Okay. What about 1980s era hit pop songs?

**Adam Wathan:** Yeah, we can talk about that... But let's keep it subtle though...

**Jerod Santo:** Let's keep it subtle... \[laughs\] We'll do our best. Alright. Nick, have you got a game plan for this next one?

**Nick Nisi:** This is the hardest one.

**Jerod Santo:** I know...

**Feross Aboukhadijeh:** You could say "I'm so glad we're having this conversation... I only had heard about Tailwind. Before it was merely a beautiful face without a name for so long. But now..."

**Jerod Santo:** Oh, that sounds great, Feross... Okay, you're on it.

**Feross Aboukhadijeh:** Oh, God... \[laughter\]

**Jerod Santo:** Oh, this is gonna be the best breaks episode ever for our post-show. You don't wanna say that live? It was so good. The way you did it was perfect.

**Feross Aboukhadijeh:** Alright, I'll say it.

**Jerod Santo:** Okay. Do you wanna open the segment with it?

**Adam Wathan:** Now it's gonna be forced though, and it's gonna be like 150% more awkward.

**Jerod Santo:** It is... I might have to turn off my camera for a second, so I can \[unintelligible 01:05:28.28\]

**Feross Aboukhadijeh:** Alright, alright.

**Jerod Santo:** Okay, go!

**Feross Aboukhadijeh:** Well, I'm so glad we have you here, because for a long time I had just heard about -- no, no. It's terrible. It's terrible! Awkward! \[laughter\]

**Jerod Santo:** Take two...

\[original song insert\] "Thank you, thank you... Thank God for you, the wind beneath my wings."
