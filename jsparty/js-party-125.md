**Emma Bostian:** Welcome to JS Party! I'm Emma, and I am joined by the wonderful Segun, who is the creator of Chakra UI, as well as one of our JS Party panelists, Feross. How are you all doing today?

**Segun Adebayo:** I'm doing good. I'm really cool, excited to be here as well. I'm excited to talk about Chakra UI and to share my story in any way, hopefully to help someone out there.

**Feross Aboukhadijeh:** Nice, let's do it!

**Emma Bostian:** Let's do it! Feross, do you wanna kick things off?

**Feross Aboukhadijeh:** Yeah, so I just wanted to start by saying -- so I first learned of Chakra UI just a week or two ago, and I was trying to start a project during this lockdown period that we're all in right now, and get into a habit of releasing things quickly. I just finished my master's degree in school, so I'm sort of getting some more time to program now, and spend time not just doing homework...

So I was looking around for a UI library to use, and trying out a whole bunch of new technologies that I'm not that familiar with. React Hooks - I was learning how those work. I'm using Next.js for the first time... And then I came across Chakra UI, and I just found it such a breath of fresh air compared to all the other React UI libraries that I've seen. I especially loved how you have so many multiple examples for each component - showing how they work, and how to use them... And I was struck by just the consistency of how clear -- it was very predictable to figure out how each of the components worked after you sort of got used to a few of them... Because the prop naming was so nice, and the design -- I don't know, very impressive work all around.

And also, the focus on accessibility I thought was just really amazing. The focus states are so consistent, and just a lot of things that you don't see necessarily as well done in the other stuff that's out there. And then when I looked at the fact that it was less than a year old, I was just amazed... So I wanted to talk to you so badly after that.

Anyway, great work, and I'm glad we were able to get you on the show.

**Segun Adebayo:** Thank you.

**Emma Bostian:** \[00:03:48.14\] Yeah, I think my first experience with Chakra UI was at work, because we are building a design system currently for LogMeIn. We've got a lot of products, like GoToMeeting, GoToWebinar, GoToConnect, and they all needed this brand identity, which is why we're building a design system. And we had a lot of problems with accessibility, to Feross' point; it's very difficult to create custom components and make them fully accessible, because a lot of native HTML elements you can't use the semantic markup. So if you want a custom dropdown, you can't just use the Select Dropdown. If you want a custom-style it, you actually have to use unordered lists and list items, and use WAI-ARIA, but a lot of developers don't understand accessibility fully.

So we started using Chakra UI, and it has been the hot topic at work. Our developers are in love with it. They were so excited about the TypeScript integration, which we'll hear more about in a little bit... But I would love to hear the Chakra UI origin story. How did you start it, how did you get the idea? Why don't you tell us a little bit more?

**Segun Adebayo:** Amazing, I'm really excited to get feedback. This is live feedback right now, so I'm definitely excited to hear from you guys. I'm really happy -- you are using it and you've tried to use it and it works really well for you. It's amazing.

How Chakra UI started - to be honest, I didn't have it in mind to even create any open source project. Maybe I'll just confess on a live show right now... It's probably been like one years and six-seven months or so since I really started coding full-time. I used to be a full-time UI designer before, and that's been for about six years or so. So that's quite a lot of experience from a designer standpoint... And I just really started writing code - writing frontend code, specifically - about a year and six months ago.

Most of all, these concepts - I literally just took a lot of time to learn them, and I literally stopped working for a couple of months, just to fully dig into them and really understand the fundamentals.

So how it really started for me - while I was working as a UI designer, I used to freelance for a couple of clients around the world. At some point, it really felt like I was literally just a UI machine; like, someone who wants to design some UI, they just come to you, "Hey, can you help me make some mockup?" And it kind of felt tiring to me, and boring, to be honest, so I thought maybe I could just try something else.

I design products for clients... What if I can try to make my own product, instead of working for clients? I mean if I could maybe take the pain to design a product for myself, and create something people can pay for. That solves a good problem, and people can pay for it. The easiest idea that came to mind was a resume builder. Most of my colleagues always come to me to help them design their resumes as well when they want to apply for jobs, so I thought "Okay, this is a very interesting problem I'm used to, so let me just try to build a simple product for it." So I designed a UI in Sketch, and I just tried to figure out how to work a good solution for people that don't really know how to create a resume, and that kind of struggle putting words together, or even formatting their resume. So I thought maybe I could try to propose a software solution to that. I thought of a simple solution that could just help them. So that was really one of the origins.

At that time, I was a UI designer, so I got my friends together and I'm like "Hey buddies, so I have this design in Sketch... Can you just help me write the code for it?" I'm sure this is the same story for almost all designers and frontend engineers. So I gave my friend this design in Figma. I've tried Sketch; he thought Sketch was quite clunky, so I literally took the Sketch file and I dumped it in Figma... So at least now you can inspect the code in Figma and it's a lot easier.

After a while, I noticed that he kind of struggles to nail the fundamentals. Things like the padding, the font size, line height... I'm like "Dude, come on. I sent you this sketch file, and at the end of the day this is what you are giving to me? It doesn't even look close to what I gave you." And I'm sure that's a very common story for most people, especially when you pair a designer and a frontend engineer together; it's a very popular story.

\[00:08:20.03\] So I kind of got frustrated after a while, so I just told my friend "Okay, thank you so much for helping me. I really appreciate your help, but you're not exactly helping me right now... So let me just go for someone else that can help me." I tried to hire a freelancer on UpWork to help me. I just gave him the design again; this was my second trial, so I gave him the design again. "Hey buddy, how much is it gonna cost to help me convert these to code?" And then one week after he sent it back to me, and it was totally horrible... Even worse than my friend that helped me. I'm like "What the heck is going on?"

I'm not a designer, but I feel like -- I mean, the design industry has created lots of tools to make design really easy... And back in the days when Photoshop was the reigning design tool, it was freakin' hard to create consistent components in Photoshop. But now we have Sketch, we have Figma, we have Framer, so I feel like there are lots of tools out there that could literally help us do this work. That's how I also felt when I was working with my friend...

So I told him, "Come on, I believe there should be tools out there that can help us do this", and they said "Oh, there's Bootstrap, there's Material UI, but it's just really hard to tweak their styles, and you have to write some CSS..." I'm like "Ugh... That doesn't sound fun to me." Because literally, for every component I give you, or every page, you have to write a ton of CSS. I wasn't happy with that, so I just furloughed the freelancer and I just thought "You know what, I think I'm going to just try to learn this myself." I believed that the fact that I'm coming from a design background would help me maybe structure this a little better.

One of the things I say off the bat is I think my experience as a designer really helped me, and is still helping me today, even when I write code. So I feel like having some design knowledge actually helps strengthen most of the code I write on Chakra UI in general.

**Emma Bostian:** One hundred percent! And I love that you found a common problem. It's a problem that I struggle with every day of my life... First of all, I love Sketch, and I would admit maybe it's a little clunkier than Figma. Figma is also great, but as oftentimes as developers we receive high-fidelity mockups from our designers, and we don't know how to -- like, unless it's redlined out, like "Okay, it's 16 pixels of margin or padding", unless it's redlined designs, I always struggled to translate that into code, and then our designers would come to me and be like "What the heck did you do? You've murdered our design." And I'm like, "Yeah, well..."

And I do think this is definitely a need in the industry, having these kind of hybrids. To me, you seem more of a UX engineer like myself, where we're very invested in visual and UX design, and we bring those skills into engineering. Feross, what's your take on the whole hybrid?

**Feross Aboukhadijeh:** So I'm not a trained designer, I've never taken a design class, but I've always sort of worked directly in CSS, whenever I'm designing stuff... So I can't relate as much to the back-story, but I do understand this dichotomy between the designer and the developer, and the design sort of getting messed up in that process.

I just wanna say that I dug a little bit into your code while looking at the project, because I always look at my dependencies before I use them, and I cannot tell that you have only been programming for a year and a half, like you said. It's really amazing code, it's really good work.

**Segun Adebayo:** Awesome. Thank you.

**Feross Aboukhadijeh:** Sorry if I'm gushing a little bit too much.

**Segun Adebayo:** \[laughs\] Yeah, that's totally fine.

**Feross Aboukhadijeh:** \[00:11:59.09\] I did not know that you had just been coding for that short of a period of time... It doesn't show at all.

**Emma Bostian:** Yeah...!

**Segun Adebayo:** There's one thing I can say, though... When I say how long I've been coding, most of the time it sounds like maybe it's just a short time... But it's just one principle I think I've learned that actually helped me, which is mostly about deep work. I read a book and it really helped me before I even started writing any code. The concept I learned from that book was mostly that someone who takes about six months consistently doing a certain thing only - I mean, literally, that's all you do for six months - can somewhat produce almost the same output as someone who has been in the industry for years. That's mostly because he has the recent knowledge and he really takes a lot of time to learn the fundamentals... And doesn't do any other thing distracting. So just literally focusing in on just a few topics, and not trying to learn so many things...

When you are trying to do a project, there are so many things involved in just getting the project -- the WebPack, the Babel, Next.js, routing, state management... But if you literally just focus on a small piece, which is literally the components, trying to get the design, trying to get the accessibility right, trying to get HTML mockup structure right, and just focusing only on those for a couple of months, and like years -- I mean, probably now it's like a year and a half that I've been working only on that, and that has really shown in the output of work that I create... I think that really helps.

**Emma Bostian:** That's so inspirational, to hear your path and how you were so quickly -- you're someone I immensely respect in this industry and I look up to, because you're so incredibly intelligent not only in your coding journey, but in your ability to market and create open source projects that are widely used in massive enterprise industries. That's incredible.

And one thing that Chakra UI solves that other design systems and UI libraries did not for us, is the fact that it isn't very opinionated about styling... And you had mentioned CSS and Material Design from Google and other design systems, and one of the issues with them is while they're very accessible, they have a lot of components, they have a very strong brand identity.

So you can look at a Material-UI component or an IBM Carbon component and say "Oh, that belongs to IBM" or "Oh, that belongs to Google." With Chakra UI it's so nice - you don't have to sit there and overwrite all these styles... Which is great, because typically, CSS is hard for people to learn. It took me several years of doing it all the time to feel comfortable with it... But a lot of developers don't understand CSS specificity rules... So with these UI frameworks you're seeing a lot of importance all over the place, especially if they're using Bootstrap... Right? Because Bootstrap - you have to actually overwrite their styling with important, and it's just an absolute horror. So I love the fact that Chakra UI solves that issue.

**Segun Adebayo:** There's just one thing I would like to add to that. The core ideas and concepts from Chakra UI didn't solely just come from me. I would not say the origin of all the ideas came from me; it's mostly just a remix of already existing ideas in the industry. I will definitely give a shout-out Styled System. That was really one of the core foundations of Chakra UI. If Styled System did not exist, I think it'd be freakin' hard for me to pull off Chakra UI.

**Emma Bostian:** Yeah. I have one question for you before we take a break... Is Chakra UI specifically for React, or is it framework-agnostic? Does it work with other JavaScript frameworks and libraries?

**Segun Adebayo:** That's something we are looking at, but for the moment it's just for React. But I know of a team already working on the Vue version. So we are trying to create a common ground between React and Vue, which is just like framework-agnostic parts of Chakra UI, and then trying to import those framework-agnostic parts to Vue and React.

\[00:16:02.16\] At the end of the day, we hope to maybe abstract most of all the logic for example to state machines, so that it's really easy to create the framework-agnostic library. Chakra UI can still stay relevant for a couple of years at least.

**Emma Bostian:** Wonderful. Thank you for that intro... We're gonna take a quick break, and when we come back, we'll talk a little bit more about building a component library.

**Break:** \[00:16:30.21\]

**Emma Bostian:** So in the first part of the podcast we talked a little bit about Chakra UI, the journey of how it got created, as well as some of the problems in the industry that it's been solving... But I wanna shift gears and talk more about what it takes to build a component library. Let's start off with the question of what makes a good component library. What are some of the aspects? We've touched on accessibility, but are there other areas, Segun, that you keep in mind when you're developing Chakra UI?

**Segun Adebayo:** One of the biggest for me is really about the developer experience. Maybe not exactly developer experience. I call it more of like a design-to-development experience. That's what I like to think about it as.

Most of the time, when a developer gets a design from a designer, the goal for any component library should be "How can I help this developer literally convert the UI design without stress?" Because right now there's a whole lot of stress and friction involved in literally just translating the design to development, and that's because it's a whole lot of work, actually. I kind of understand, from a development perspective.

It's really easy for a designer to literally draw some rectangles, add some circles, and create a custom drop-down in Sketch, because they just have to draw some rectangles and put some text. But when a developer sees that, he knows that's a nightmare, because trying to create a custom select is not a small job... And even if you try to use a popular library, for example React Select, you still have to do some work. You have to read the documentation, you have to know how styling works in React Select to get it to work.

So just thinking about the developer experience is one of the huge parts for me, which I think is what I'm trying to infuse into Chakra UI. We try to nail the fundamentals. What I mean by fundamentals is being able to abstract design tokens from design files. Being able to abstract tokens like colors, fonts...

One thing I've been looking into recently is mostly like -- designers have this concept called text styles and layout styles when they create their design. This helps them literally not repeat themselves when working. So figuring out how Chakra UI can actually help in that process as well, so that all these tokens that designers are used to - literally, just bringing it into the code would also save the developer some time.

\[00:19:47.29\] So tokens are one. Nailing the fundamental accessible HTML structure - because most every time I feel like at least 60% of accessibility has to do with having to correct HTML structure for a component, and having the correct ARIA attributes for custom widgets, or just having other things in place.

And then the final part would be dealing with the design, making things look good, and also making sure it's accessible from a color contrast perspective, font size, readability perspective. After that, then comes keyboard navigation, making sure that the screen readers announce the components the way you want them to... making sure it's the same component across different touchpoints as well, across different browsers.

I know browser compatibility is a big issue when it comes to building component libraries... So there are all these different factors. It's a whole lot, to be honest. But just taking them one at a time will really help you build a solid component library, I think.

**Feross Aboukhadijeh:** One of the things that sold me on Chakra was when I looked and I saw that buttons actually look like buttons. That's so rare these days. These days you can't tell what a component is half the time. I know that I'm being a little tongue in cheek, but... Yeah, that's a huge deal for me.

**Emma Bostian:** I think that's the title of our show now. "These buttons look like buttons." That's a great title. \[laughter\] No, I would tend to agree - nowadays companies and design systems are trying to differentiate themselves from what's already on the marketing, and I feel like we're seeing a lot of radical design changes... Which can be good, but they can also be not so good.

Segun, you seem really interested and knowledgeable about accessibility, and it's also really refreshing to hear as well... I wanna ask you in a second how you learned so much about it. But for those listening, this could be a whole episode in and of itself, web accessibility. Segun mentioned color contrast ratios; also, our type scale has to be big enough. It's not just about our blind and visually-impaired users, it's also about people with motor disabilities, so keyboard navigation is important; if someone can't use a mouse. Also, maybe cognitive disability, so making sure that we are showing -- when you're checking out, for example; if I wanna go buy a flight, I wanna see all the details of my flight before I purchase. So every step of this checkout phase, I need to see the flight dates, the airports, all of these kinds of things, because you can't expect your users to cognitively be able to remember these details. I personally have bought flights for the wrong dates. It is not fun.

So there's a lot that goes into accessibility that we just don't think about, and I think Chakra UI is solving a lot of those problems. My question that I'm coming back around to is how did you learn so much about accessibility? Did you just read the W3C docs, or were there other resources?

**Segun Adebayo:** Before I answer the question, I'd just like to chime in on the previous discussion about having different button styles...

**Emma Bostian:** Sure. \[laughs\]

**Segun Adebayo:** ...because I'm really interested in that. Recently, I was having a conversation with a friend, and I literally said "All buttons work the same way. The only difference between them is just the styles we apply to them." One of the things that really trips me off these days is literally when we rewrite code for a button one million times. Every single company writes code for the same button styles, and they write the same structure of a button only to just change the background of a button, for example, or just to change the color or the text.

I feel like one of the things Chakra UI is going to solve or completely eliminate is the fact that we want to take care of the internal details of a button, and then leave you to create any styles you want... So it's really easy to create your own design system on top of Chakra UI in general.

**Emma Bostian:** Have you heard the blog post called "And you thought buttons were easy?" by Nathan Curtis?

**Segun Adebayo:** I'm not sure. I've not.

**Emma Bostian:** \[00:23:50.23\] We'll link it in the show notes. And I've also just posted it in our JS Party Slack channel...The premise of this is the fact that buttons are the most widely-used UI component throughout products, but they're also the most inconsistent across all products. He walks through this mathematical problem of let's say you have a designer, an engineer and a quality assurance engineer, and they're all designing, testing and coding this button... And it walks through like - okay, if you're paying every person $30/hour or something, you end up spending $20,000 to build, test and design your buttons, and he walks through why.

So we've got primary buttons, secondary buttons, tertiary buttons, we have large buttons, small buttons, we've got states for these buttons - hover, focus, disabled active - we have icon buttons, all these other kinds of buttons, success, error, warning... And when you add all of this up, it's $20,000/button for each team. And when you've got five teams building a set of buttons, that's $100,000 that your company is spending on building buttons.

It's a wonderful blog post. I reference it in all of my conference talks. I highly recommend reading it... And this is exactly the justification for why you need a design system or a UI library like Chakra... But yeah, it seems like buttons styles -- people love to redesign the buttons, don't they?

**Segun Adebayo:** \[laughs\] Yeah. Back to the topic of accessibility - one of the things that helped me really was the fact that I think I took quite some time to read about the correct HTML structure for any component, before actually even writing any code.

There are a couple of websites that helped me. [a11yproject.com](https://a11yproject.com) It's a very popular site, as well... And even just checking the W3C accessibility standard and guide, you are able to see literally the HTML structure for a component. And if you are interested in some JavaScript, they also have some JavaScript implementation as well.

So just digging into this code helps me to see and understand why I think we need to reteach HTML the right way, or even HTML and CSS the right way... Because if you have this HTML and you want to make for example a tab, if you are designing a tab component, and you want to show the active tab, or the current selected tab... The way we thought was to add a class name called "active" and then style it to that class name. Digging in for that, I realized "Okay, there's some attribute that could literally hint assistive technologies that this tab is now active." So why can't we just use this attribute to style the elements instead?

That's where we are tying HTML and CSS to accessibility, and we are sort of enforcing those standards, whether you are writing HTML markup or you are styling in CSS. That was the first part for me, just learning those foundations (HTML and CSS) through this website.

Two major courses that actually helped me as well is a course from React Training, by Ryan Florence. I can't remember the course name specifically, but it has to do with building uncontrolled components. That really helped me learn a lot about managing state, the concepts of controlled components and uncontrolled components in React.

Another course that helped me is Frontend Masters, Marcy Sutton's Frontend Accessibility for Web Applications, something like that; I think that's the name. I literally watched the course, downloaded the GitHub repo, and lesson by lesson I'm writing the code, I'm pausing the video before she writes the code to see if I can figure it out on my own, and then tried to learn the solution she proposes. That also helped me boost my knowledge a whole lot.

When someone is teaching, I think this concept has to do with learning in general. When I watch a video, or when I'm trying to watch a course, what I try to do most of the time to challenge myself is after the teacher or whoever is teaching the concept talks about it and wants to write some code, I just pause the video and I try to figure it out on my own, before even watching what they have to say... Just to see if I can dig into the solution and challenge myself. That actually helped me a whole lot.

**Emma Bostian:** \[00:28:13.17\] That's wonderful. I love that concept of being an active learner, because so often - and I've found myself doing this, too - I just watch the tutorials and my mind will start wandering off, and I don't challenge myself. Then by the end of the course -- this happened with a Scott Tolinski course I took about React Spring... I watched the entire course, I loved it, and then I finished it and realized I didn't retain any of this information, because I wasn't challenging myself and I wasn't actively learning... So that's a very good point.

So talking about accessibility and going back to the fundamentals of HTML and CSS, I loved what you said about we should really be focusing on semantic HTML and CSS, especially because -- and I have mentioned this before on Twitter, I think, but when I was interviewing for jobs, in my technical interviews I got asked a lot about HTML, CSS and accessibility. So I was questioned about JavaScript, but I do think a lot of companies now are migrating towards comprehensive questions that really test "Do they know how to write CSS? Do they know CSS transitions? Do they know about specificity?" and I definitely think this is something that developers -- I personally took it for granted, especially when I started out, and then I found myself at a deficit when I needed to create semantic scaffolding for a site, and I realized I didn't know how to.

Feross, when you were learning web development, did you learn it from HTML/CSS/JavaScript, or how did you get into that?

**Feross Aboukhadijeh:** I got started back before there was any React, or declarative UI stuff that people are doing. It was HTML and CSS. And I still remember I had a book called CSS Hacks, and it was all about the different tricks to include syntax errors in your CSS, so that certain versions of Internet Explorer would interpret the CSS, but newer versions wouldn't interpret CSS... And it was literally taking advantage of bugs in the parsers. And it was really bad days for the web, I feel like. That's when I got started.

I do think learning the fundamentals is important, and I'm glad that I have that base, but at the same time, I think one of the things that's really great about Chakra UI and this type of higher-level abstraction is that maybe most of the time when you're working you don't wanna be working at a level below. You wanna just use a component from Chakra and know that it's gonna have the right tab behavior...

This is the advantage in general of abstractions in software - you can solve a difficult problem one time and encapsulate it into usable components and just use it everywhere. That way members of the team that are newer or haven't learned this stuff yet can just be productive right away, or even experienced people can not have to implement the same thing constantly.

I just feel like we want people to know this stuff, but if they don't, this is a good way to get the same benefit and to end up with good products despite the fact that we might not be perfect all the time and know all this stuff.

**Segun Adebayo:** Yeah, that's a good point actually, and I was gonna talk about that as well. To be honest -- I mean, except if your job role is a UX or UI engineer, or you're a design system manager, that's when you really want to care about these details. One of the persistent realities that we have right now is that most of the projects we build are moving really fast. Right now we are even in times where companies need to move super-fast. They're not going to stop an entire project from launching just because the dropdown is not accessible. They're gonna literally fire you the next day, just because of that.

Most of our teams are fast-moving, so trying to focus on all this nitty-gritty sometimes can be time-consuming, and that's why it's always a good idea to leverage someone else's work, someone who has thought about all those fundamentals and accessibility details and the styling details of a component... And literally just make your life easier in general.

**Feross Aboukhadijeh:** \[00:32:16.17\] My tendency when I'm working on projects is typically -- if I look at a library or I look at a component, a package on Npm and I notice even one or two minor things about it that I don't like, I tend to say "Okay, I can clearly do better than this", and I'll go and reinvent it... Because part of it is it's a good learning exercise, it's fun. I enjoy knowing how stuff works at a lower level...

**Segun Adebayo:** Cool.

**Feross Aboukhadijeh:** But actually, I've found that fighting that tendency in the last few weeks while I've been working on a new project, I've been sort of just saying "You know what - if I see a library and it's not perfect, it's 95%, it's 96%", I should probably just run with that, instead of stopping everything to go and try to reimplement it. That's been just so freeing for me... Because while I might actually be able to improve it in one or two ways, I identify a weakness about the library and I'm able to go and make a better version that doesn't have that problem, I'm only one person. So actually embracing the fact that a community all working together on a project means that when I'm done working on it, the community is still there and improving it. So that's actually why I'm actually excited to be using Chakra on this project, because I have confidence that it's gonna improve over time, and it's doing a bunch of things I would have never thought to do, and it's just better than trying to reinvent everything.

I mean, reusability 101 - it's kind of obvious when you think about it, but I've just found fighting the tendency to just be like "You know what, I'm gonna redo this" and then reimplementing everything... It just saves so much time, and that's really important.

**Segun Adebayo:** Yeah, cool.

**Emma Bostian:** Absolutely. Well, thanks for that... And I think that wraps up the second segment. Let's take a quick break, and when we come back we will talk a little bit more about the actual pros/cons, highlights/lowlights of building a component library.

**Break:** \[00:34:11.01\]

**Emma Bostian:** Alright, let's talk a little bit about the benefits and drawbacks of founding an open source project. Segun, can you tell us a little bit more about some of the things that you think have gone really well, and some of the things that maybe you weren't expecting about it?

**Segun Adebayo:** Let's start with the things that I think went really well for me. To be honest, I didn't expect Chakra UI to get the traction that it's getting right now. One of the things I did not mention was that the concept of Chakra UI started from a product I was working on... And literally, I had a component library for that product itself. So after learning, I literally went to build a component library myself, and then just give it over back to my friend to help me put it together, and just wire up the states, and things like that.

After doing that, I literally saw that -- before we started the project, when I was struggling, it literally took us three months just to convert design to code... But then after I built the component library and I gave it to him, I think it took us about three or four days to literally rebuild the entire thing again with the component library.

\[00:36:04.04\] I was really excited about that, and I thought "If this could literally help my friend..." And I could literally see him get excited; his face is all lit up. I mean, if this is the experience of my friend, what if I could literally take this same experience and just ship it out to other people, to just use for free?

To be honest, I literally struggled with the concept of free, just like ship it for other people to use... But I just thought it's more of like the way it works in general. To get more from life, I feel like you just have to give more. Don't expect to not give and then get a lot. It's mostly just like a general law I think I've learned. So I thought "Maybe if I could literally just give value to other people out there, somehow I know the value will definitely come back to me."

So that's one of the pros of having an open source project, because you get to touch so many people out there. One thing I know that is really common is there are lots of people, there are lots of developers out there who don't have the privilege that I've had, or anyone else has had; people who work in companies that don't pay them so well. And yet, we know that this project takes some time to do. And I just felt like really "What can I do to help this kind of people to be able to ship the apps and really do their work and feel comfortable about it?" That was one of the benefits for me as well... I get to impact people the way I want to, in general.

The other thing is you get to find bugs. Not by yourself; other people get to find bugs in your application and they help you build them and fix them. That's one of the pros. So even if you are building a project and you feel like -- there might be some use cases you never thought about, or some things you never saw, but if other people use it, they'll definitely find it faster than you will. So getting other people to contribute, to help, to fix typos - that's a whole lot, to be honest. Even to help arrange your code, and make it better... Things like that generally help.

It feels more like a community is building on top of your idea, rather than only you, a one-man team, trying to make it all work and fee like So that's one of the benefits.

There are some cons as well. One of the cons is literally the fact that when you have an open source project, if you don't tend to manage your time properly, it can literally consume you, it can literally consume your time. There are people opening issues every single day... Like, "Hey, this button is not working. I don't like the way it looks." Some issues can literally trip you off, because -- I mean, I've done a lot of work on this library, and then you're coming here just to say this button doesn't look good? Like, come on, man. What the heck.

But at the end of the day, I just try to go back to the reason why I made it. Sometimes just going back to the reason why helps you let off these emotions and just recenter myself, and just know that if this person is complaining, it means they have a genuine reason why... And maybe I can just be kind enough to really understand why they think it's an issue. I might not even know what the issue is, so let's just be kind and get all this feedback.

It's kind of a con, because there are people who don't exactly value the work you've done, and that's a reality as well in open source projects... And there are people who approach you as though they hired you to build the library. But at the end of the day, I think it's all about human interaction. If you just treat everyone as a normal human -- I mean, not everyone exactly is normal, but if you just assume that everyone is a normal human and interact with them as such, you won't have so much problems. But if you try to react based on emotions, then I feel like sometimes open source projects can lead you down a wrong path of anger, annoyance and self-defeat, and you just want to close the project and just go back to your normal life in general.

**Feross Aboukhadijeh:** \[00:40:08.00\] I can totally sympathize with that... The idea that open source can sometimes feel like -- you know, the way GitHub issues is designed, it's sort of like your to-do list is publicly-writeable, and you're just letting anyone who shows up add items to your list. Then you wake up and you just have to process through them, and you can become very bogged down in dealing with the issues and you can forget about the bigger picture of what you're trying to do and what are the bigger goals you have for the project if you're just dealing with this sort of inbound issues every day... Totally, I sympathize with that a lot.

**Segun Adebayo:** There's one more thing I'd like to add as well, which is very common in the industry... It's like, you release an open source project -- even from the beginning of Chakra UI I didn't have ideas of TypeScript and having type support for a library. I literally had to go to DefinitelyTyped, and I was literally reading all the type definitions for popular UI libraries just to understand how it works. TypeScript got my head spinning, a hundred percent... Like, "What the heck is this? What is this concept of generics? What does it mean?" So I was really offended after trying to learn it a couple of times and I didn't get it, so I just left it...

Most of the time, I feel like when you reach that state, just go to sleep and wake up the next day to look at it. So the next day when I looked at it, it kind of made sense to me, interestingly... I literally was like "Oh, okay... Let me just try this with Chakra UI", and I just challenge myself to add this to Chakra. I didn't get the type use 100% correct, but literally no one knows most of these areas. It's just me that built it; I built it myself, so I know where the issues are...

Then the other common issue I was going to talk about is when release an open source library in JavaScript, and maybe add some type support, and then the next day you are going to see an issue about TypeScript support, and someone literally flags it like "Hey man, you need to add full support for TypeScript, so that we can use it." And it feels like "Come on..." I mean, I've built this up to this point, I feel like it's a community project, and everyone should contribute to it as well. If you feel TypeScript support is necessary, you're welcome to add it... But most likely they won't add it.

I literally just saw that as an opportunity for me... So when I was done with my own work and my personal work -- because Chakra UI is not my life... Literally, I'm like "When I'm done with everything else, I can consider those..." So I took some time and was like "Well, TypeScript support won't be a bad idea." It's also a good opportunity for me to master TypeScript... So again, I went back to my learning mode, just a couple of months again, Frontend Masters, Mike North, TypeScript Fundamentals... And I think I understood the core concepts in TypeScript from the course.

So I just went back, created a new branch, Chakra UI, going all TypeScript and trying to figure out how it works along the way. I haven't used this on a big project before, this was my first time... But I think I'm pretty excited and proud with myself as well, and the progress I've made.

**Emma Bostian:** You should be... And it's just funny how -- like, the community becomes your project manager when you're running an open source project.

**Segun Adebayo:** Exactly.

**Emma Bostian:** It's funny, because at work we were having this conversation of "Hey, when can you merge the Chakra UI implementation of this component library into our main design system monorepo?" And Christian Schroder, who was leading the effort, who I think Segun you actually met with the other day...

**Segun Adebayo:** Yes, yes, yes. He's a cool guy.

**Emma Bostian:** Yeah, he's super-cool. He was like, "Well, you know, it's an open source project, so it's not like they have deliverables. People are working on it, but we can't give a definitive answer." You know, the community sometimes is never satisfied with the fact that it's open source. They just want "Well, why don't you have TypeScript support? Why don't you have this feature? When are you gonna support Vue?"

**Segun Adebayo:** \[laughs\]

**Feross Aboukhadijeh:** Yeah... And the right thing to say to those people is "If there's a problem with this open source project, it's your problem. That's how open source works. Send a pull request."

**Segun Adebayo:** \[00:44:13.02\] \[laughs\] Exactly.

**Feross Aboukhadijeh:** Sometimes it's just tough love, you know...? That's what you've gotta say. Speaking of that though, you said Chakra UI is not your life... How much time do you spend on it, and how do you fund that work? Do you have a dayjob, or are you getting enough donations from people that you can work on it? How does that work? As a maintainer myself, I'm just curious how you make that work.

**Segun Adebayo:** To be honest, right now I have a dayjob. I currently work at a company called Tradeling in Dubai. I work as the UI engineer, so I help build components for -- Tradeling is sort of an e-commerce B2B application, so I help them build components for the e-commerce app. Definitely using Chakra UI, so there's a lot of this I can do really for us. I get to have the privilege of building those components super-fast, because I made Chakra UI... And if I have project to do -- I mean, it would normally take me two days, but because I'm using Chakra UI that I made myself, I can literally build it off in maybe 5-6 hours, and I'm done... Because I also know the fundamentals, it helps me...

The reason why I said that is it gives me the privilege to have some more free time to do other stuff. By other stuff I mean taking on freelance projects, just consulting with other people who need help with their products... And it even frees up time for me to also think of other business opportunities... Because I feel like when it comes to open source projects, the consistent theme is that most open source projects are under-funded, so you don't want to rely on the funding you get from other people. And even if it gets to be funded well, it's most likely for the project, not for personal gains... But I feel like I'm going to think of other business ideas or business products I can make with this skill I have, to actually make a profit off that.

There are two key principles I think I have somewhere in my head - you have to make something that gets you known, and then you have to make something that makes you money. So you can literally leverage off the attention that you get from the fact that you are known, and then use that to make something that makes you money at the end. So the open source cycle doesn't just end in "I just made an open source library. I'm excited." There's no money coming off that at the end of the day... And money is something we don't like to talk about a lot in open source; we have to talk about money, because - come on, Chakra UI is not going to feed me at the end of the day.

I literally have to fend for myself and my family as well, so... It affords me some time; my work is quite flexible, which is one of the things I like about it... So I get to also focus on other projects, and even improve the product I already have, which is the resume application. I already have paid customers, so there are people we already serve. If people can literally pay for a product I built, maybe I can build more products and make some more money for myself.

**Feross Aboukhadijeh:** Totally. By the way, what's the URL of that project, in case people wanna check it out?

**Segun Adebayo:** It's called Career Lyft. CareerLyft.com.

**Feross Aboukhadijeh:** Nice.

**Emma Bostian:** Perfect. We will link that in the show notes.

**Segun Adebayo:** Cool.

**Emma Bostian:** Awesome. Thank you so much for sharing your knowledge with us today. It's been an absolute pleasure talking with you. I just want to commend you also for just being a nice human, because when I was preparing my Frontend Masters workshop, Segun was nice enough to help audit it and fix some of my bugs... So I just wanted to personally thank you for that.

**Segun Adebayo:** Awesome. You're welcome.

**Emma Bostian:** How can listeners help you out? How can they get involved with Chakra UI?

**Segun Adebayo:** Currently, we have a branch where we're currently trying to put all components of TypeScript. One of the biggest parts we need help with now is documentation. We have the core concepts in place, and we have new ideas, new interests and ideas that we're looking to introduce in the next major version of Chakra UI... So trying to get people to help communicate these ideas would really help. So documentation is one thing we really need help with.

\[00:48:20.17\] One surprising thing I saw recently is I think mostly about 40% of the Chakra UI traffic to the website comes from countries like China and India... So that makes me already think that somehow we need to make this documentation localized for them, so that it's easier to understand this. Trying to figure out that process is a lot of work; I cannot get myself involved in code and also get myself involved in doing that at the same time... So as much help as we can get with regards to documentation and localization - we really appreciate that.

**Emma Bostian:** Wonderful. So if you're listening to this and you like to write, and you're good at writing, or even if you're not, it's fine, they'll work with you on it - go open a pull request to Chakra UI, help them with some documentation... And also just check out the system, because it's incredible, and you're doing fabulous work.

If you enjoyed this episode, go follow Segun on Twitter. We will link his Twitter in the show notes. He's a wonderful human and a kind teacher as well. Anything or anyone you wanna give a shout-out to while we wrap things up?

**Segun Adebayo:** Yes, there's quite a number of people, to be honest... \[laughs\] I mean, just a couple of people. I think Ryan Florence would be one, for really helping me understand the fundamentals, for creating React Training. That's a huge shout-out. Even Adam, the creator Tailwind CSS. I think the core concepts in Tailwind CSS also helped me, because I saw the way Tailwind CSS makes the life of people easy. I introduced some ideas from Tailwind into Chakra as well.

And definitely Brent Jackson, and Styled Components, Emotion... So many open source libraries worked in Chakra UI. I think I'll just use this channel to say thank you to all of them. And definitely the amazing people who have contributed to Chakra UI, who have worked behind the scenes to help me out. I really appreciate every single person, whether it's a type you fixed, or some bit of code you fixed in Chakra UI, it doesn't matter; it's still a contribution, so I'd just like to thank everyone else. Thank you!

**Feross Aboukhadijeh:** Thank you for all the work you've put into Chakra UI, and for releasing it as open source, and I look forward to the future of the project. Thanks for coming on our show.

**Segun Adebayo:** Awesome. Thank you. Thank you, Feross.
