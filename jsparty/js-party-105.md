**Kevin Ball:** Alright, hello, JS Party people! This is Kball, reporting live from JAMstack Conf SF. I'm here with Katie Sylor-Miller, front-end architect at Etsy.

**Katie Sylor-Miller:** Yes, yes, as of today.

**Kevin Ball:** As of today, that's amazing!

**Katie Sylor-Miller:** Yeah, big day.

**Kevin Ball:** So I'm gonna ask you about front-end architecture and architecting, because I think that's a good thing, but first let's talk about your talk.

**Katie Sylor-Miller:** Yes.

**Kevin Ball:** So you had a talk here at JAMstack Conf yesterday, is that right?

**Katie Sylor-Miller:** Yes, yesterday.

**Kevin Ball:** Can you tell us a little bit about it?

**Katie Sylor-Miller:** Yeah, so my talk was called "Get on the JAMstack." A couple years ago - three years ago now - I made this ridiculous website called OhShitGit, which is a list of problems that I got into with Git all the time, and then a list of the steps on how to solve them... And the website kind of went viral, extremely unexpectedly to me...

**Kevin Ball:** I feel like the name of it just captures a common sentiment among developers...

**Katie Sylor-Miller:** \[laughs\] Yeah, I think that was the key to success, is that I came up with this ridiculous and memorable name for the website... And it surprisingly was still available to buy the domain.

**Kevin Ball:** That's amazing. Okay, so talking about that and the JAMstack...

**Katie Sylor-Miller:** Yeah, exactly. So Phil reached out to me and was like "Hey, do you wanna come and talk at this conference?" and I was like "Cool!" I didn't even know what the JAMstack was. I had to go google it. I'd heard about it, of course - people are talking about it around the industry - but I didn't remember what JAM stood for. And so I was kind of like "Are you sure you really want ME to talk at your conference?" And he was like "No, no, no, Git is such a huge, core component of the JAMstack, and I'd love it if you could come and talk about Git."

I talk about Git a lot... I've given talks many times, and workshops, so I kind of use this as motivation to go out and learn about the JAMstack and how Git powers the JAMstack. So I did that by actually taking OhShitGit, which had been an index.html file that I crafted in about two hours, three years ago, and actually moved it into Git for the first time, and rebuilt it with Eleventy as a static page builder...

**Kevin Ball:** \[00:04:12.25\] There's something ironic about OhShitGit not living in Git for the first few years of its existence...

**Katie Sylor-Miller:** It was almost like a badge of honor at first. People would be like "Oh, is it in Git? Can I link to it?", and I would be like "No." \[laughs\]

**Kevin Ball:** This is as old-school as you get.

**Katie Sylor-Miller:** Yeah, basically. For a lot of years people have been reaching out and asking "Hey, can I translate your content into my language?", and my answer was usually "That's a great idea, but not now...", because there really wasn't a good mechanism for people to submit new translations. So I kind of used this conference and this talk as motivation to enable that. So now it's been translated into German, and I've had people volunteer for French, Serbian, Turkish, Russian, Portuguese... None of those are complete yet, but they're coming.

**Kevin Ball:** Do you get them to make more inventive cursing for each one?

**Katie Sylor-Miller:** \[laughs\] It's funny, so the guidance that I gave, and the instructions, is basically like -- I use a lot of idioms and a lot of swears that probably don't translate directly, and I say "Just be free... All I ask is that you keep the OhShit part in some way, whatever the equivalent of OhShit is in your language."

**Kevin Ball:** Right. \[laughter\]

**Katie Sylor-Miller:** Scheisse, in German, I guess...

**Kevin Ball:** Oh, Scheisse Geisse...? \[laughter\] Okay, so first experience with JAMstack stuff, at rebuilding this...

**Katie Sylor-Miller:** Yeah.

**Kevin Ball:** How did you feel? Because I know a lot of our listeners are probably looking at this and saying "That looks kind of interesting, but I don't know..."

**Katie Sylor-Miller:** Yeah, it's my favorite thing by far, especially -- I decided to use Netlify for hosting, and I decided to use Eleventy, just because it was the simplest, quickest and easiest setup... And I know Zach personally, so I can reach out to him and bother him with questions...

**Kevin Ball:** It always helps to know the maintainers or the authors of these frameworks...

**Katie Sylor-Miller:** Yeah.

**Kevin Ball:** And be like "This doesn't make sense...!"

**Katie Sylor-Miller:** Right...?! But yeah, I think it's great. I think to me the real killer feature was I wanted to move into this stack and then basically immediately rearchitect the entire page. First I've just brought over my flat index.html file, and then I went through the rearchitecting, by using a separate branch in Git and then using Branch Deploy Previews via Netlify--

**Kevin Ball:** Which is so freakin' amazing, by the way...

**Katie Sylor-Miller:** Oh my god, it was--

**Kevin Ball:** "Okay, I'm gonna push this up, and I get a preview right away. I can send it to someone else, I can send it to me..."

**Katie Sylor-Miller:** It's so cool! I'm assuming that these kinds of things don't happen in isolation, and Netlify probably was not the first people to think of this... But there's just something about it that makes so much sense.

**Kevin Ball:** The execution that they have there is awesome, as well.

**Katie Sylor-Miller:** Yes. It was so seamless, and it really allowed me to feel comfortable rearchitecting the site, and going out and testing, and looking at it, and making sure that all of the redirects work... I mean, the fact that you can even set up individual redirects in a TOML file, and then push that out to your branch, and the branch handles all of the redirects the same way that the regular site would - that really made it so easy.

\[00:08:07.05\] So I think especially for blogging sites -- OhShitGit is not necessarily a blog site, but it's kind of similar, in a way; you create the content and it just stays the same, and it's not very dynamic...

**Kevin Ball:** Right, right.

**Katie Sylor-Miller:** So I think it's a really, really good fit, basically. I have been learning a lot from this conference about the way cooler stuff that the JAMstack can do.

**Kevin Ball:** I know, yeah. I keep dabbling my toes in. I recently launched a new site, that is essentially a blog, but I'm like "Okay, what can I do with this? This is fun, this is exciting..."

**Katie Sylor-Miller:** Yeah, totally.

**Kevin Ball:** There's some neat stuff going on. So you mentioned something that is gonna segue me back into talking with you about something we talked about earlier, which is you said you rearchitected it...

**Katie Sylor-Miller:** Yeah.

**Kevin Ball:** And you just got promoted to front-end architect.

**Katie Sylor-Miller:** \[laughs\] Yes, yes.

**Kevin Ball:** Let's talk a little bit about what that even means in the front-end. What does front-end architecture entail in your mind?

**Katie Sylor-Miller:** I think it's a couple of things... We have all of these product teams at Etsy, who are going out and they're focused really on features and products. And then we have our front-end infrastructure teams, which I have been -- you know, on my time at Etsy I've always been on front-end infrastructure... And there's this problem where when you're in infrastructure you're not building product; you're thinking about the longer-term and the bigger picture, and you wanna make sure that you're providing tools and workflows that work for product engineers...

**Kevin Ball:** Right.

**Katie Sylor-Miller:** Because frankly, product engineers don't always have time to think about that. They're under time constraints, they have deadlines, they have financial goals they need to meet... So it's kind of been growing organically for a long time, that I was moving more into looking at strategy overall, and making connections with folks on product teams and reaching out to them, and really being like "What are your stumbling blocks? What do you need?"

Then on the other side of things -- you know, at Etsy we have this philosophy of using boring tech, which in front-end space--

**Kevin Ball:** I love that.

**Katie Sylor-Miller:** I love it as well, but I think that in the front-end space it resulted in us falling behind the times.

**Kevin Ball:** Right.

**Katie Sylor-Miller:** And we've been working really hard to modernize our stack. We've just switched from our old, home-grown RequireJS build system that was built in 2011, to Webpack, finally... So there's a lot of different pieces of the stack that we need to modernize, and somebody needs to figure out how we're gonna do that.

**Kevin Ball:** Yeah, that's a really interesting problem... Because I like this philosophy of "Use boring tech." It's essentially saying, as I understand it - and you would know better than I do, but as I understand it - "Don't get shiny object syndrome", right?

**Katie Sylor-Miller:** Yup.

**Kevin Ball:** "Do what's gonna work to solve the problem at hand..."

**Katie Sylor-Miller:** Totally.

**Kevin Ball:** ...without getting pulled into "Oh, I've gotta microservice this, and I've gotta bundle all this", and whatever else is... But the challenge is you still don't wanna build up lots of tech debt, and you still don't want to fall behind in terms of capabilities, because yes, oftentimes the boring tech is good enough, but sometimes you lose a lot of productivity staying in boring tech, because there are actually breakthroughs that happen.

**Katie Sylor-Miller:** \[00:11:56.19\] Totally. And I think that's something that we've seen... We have two different parts of the site - there's the public-facing site that everyone goes to when they're shopping on Etsy, and then there's a whole back-end site for the people who are selling their homemade items on the site. And for a long time there's been this split where the seller back-end was built first in Backbone and Marionette.js, and then a couple years ago (I think i 2015) we started switching over to React, and now it's entirely built in React...

But then our front-end buyer side, because we haven't said "Okay, we're gonna accept the challenges of building a spa that actually works", because obviously SEO is huge for us, performance is huge for us...

**Kevin Ball:** Yup...

**Katie Sylor-Miller:** So we had this mostly jQuery-based JavaScript ecosystem in our buyer front-end... But it's getting to the point now where teams aren't just working on buyer or seller, they're working across the product, and it's hard to have transferable skills between the two.

**Kevin Ball:** Yeah. And hard to have consistent design systems, if you have to have totally different implementations, and consistent interactions...

**Katie Sylor-Miller:** Yeah. It's funny, actually - for a long time, my team owned the design system at Etsy, and we actually built an entire framework that would allow us to have a core vanilla JavaScript file for all of our design system components, that would then either get wrapped up in vanilla JavaScript to handle all of the DOM manipulation, or it would get wrapped up in a React component that would handle the React lifecycle, and all of that... Because we were like "Everything is getting so out of sync. One version is accessible, the other version isn't, the functionality is slightly different..."

**Kevin Ball:** Yup.

**Katie Sylor-Miller:** And I think also too that -- you know, we hire a lot of folks who come out of bootcamps, and they don't understand jQuery; they've never used it, they've never seen it. They don't have to worry about this. \[laughs\] All the crazy hoops you jump through to maintain what this is... Because they're used to ES6, they're used to building everything in React, building in Node on the server...

**Kevin Ball:** Yeah, that's the other side of boring tech - does that mean boring engineers? \[laughs\]

**Katie Sylor-Miller:** Yeah, right. \[laughs\]

**Kevin Ball:** Right? Or maybe I should say bored engineers...

**Katie Sylor-Miller:** Yeah, yeah. Well, I think it leads to frustrated engineers, and it leads to frustrated infrastructure folks like myself... Because we see code that we know is not performant, that we know isn't written the best way... But I don't blame the engineers at all, because they're used to this completely different programming paradigm, and you kind of throw them in and say "Here you go!"

So yeah, that's one of the big things that we're working on, is figuring out how to do server-side React rendering, and then hydration on the client, so that we can share components, we can share knowledge, but we don't sacrifice SEO and performance.

**Break:** \[00:15:35.04\]

**Kevin Ball:** Are you looking at Next, or because you've got so much established stuff you can't really go with a framework like that, or...?

**Katie Sylor-Miller:** Yeah, so I think what we're looking at right now -- so Airbnb has an open source thing called Hypernova, which is basically a server that you pass it a React component and a bunch of context data and then it will render the HTML and return it to you. So what we've been exploring first is basically taking that and bolting it into our existing PHP framework. So we're like a big PHP shop... And basically, instead of using -- right now we have Mustache files that we render on the server; there would be a way to sort of indicate "Okay, this particular PHP view...

**Kevin Ball:** Oh, "This is a React file..." Got it.

**Katie Sylor-Miller:** ...uses a JSX file instead", and then it would go off and the service would come back with the rendered markup, which we'd inject into the rest of the page, which is still probably coming from PHP.

**Kevin Ball:** Right, right. You basically use it as an external templating engine.

**Katie Sylor-Miller:** Exactly.

**Kevin Ball:** You pass off PHP data as JSON, it becomes context, and it renders--

**Katie Sylor-Miller:** Exactly.

**Kevin Ball:** Interesting. Okay, now I'm curious...

**Katie Sylor-Miller:** We're super-early in the process, so... \[laughs\]

**Kevin Ball:** Well, so I'll ask questions, and if you don't know, you don't know.

**Katie Sylor-Miller:** Okay.

**Kevin Ball:** So I assume you're having the server collocated, so it's on the same node as the PHP server where it's running... Or are you going over a network hub to render that template?

**Katie Sylor-Miller:** We are all in Google Cloud at this point, so I think what we're looking at right now is that it would be a separate service running in Google App Engine... So it is effectively an HTTP request, but it's all happening internal to our Google Cloud cluster.

**Kevin Ball:** It's inside the cluster, yeah. So what kind of latency do you see from that?

**Katie Sylor-Miller:** We don't know yet. \[laughs\] We just have a proof of concept.

**Kevin Ball:** Got it, okay.

**Katie Sylor-Miller:** Just started. But my hope is that we can do a lot of caching. Obviously, we're gonna have to wait and see what kind of features people are gonna wanna build out with this, but I'm guessing a lot of it is gonna be things like -- you know, a hard problem is sorting and filtering in search results. I'm hopeful that the markup for that isn't going to change a ton. It's more the items themselves that we display... So I think it's gonna require a lot of consideration and thought on how we structure the modules, so that we can cache as much as possible and then reduce the surface area of the really dynamic content that's actually gonna need to go all the way to the Hypernova service.

**Kevin Ball:** So can you send it a set of requests in one HTTP request?

**Katie Sylor-Miller:** Yeah, I think we're getting a little outside of-- my colleague Ali Jones is actually the one who's been working on the proof of concept...

**Kevin Ball:** Okay.

**Katie Sylor-Miller:** But I believe that it's parallelizable... I could be wrong.

**Kevin Ball:** Yeah, interesting.

**Katie Sylor-Miller:** If it isn't parallelizable, we should make it... \[laughs\]

**Kevin Ball:** Yeah, exactly. Thinking about it in the server-side world, which I think some of our folks are in that world - they're at Node, and things like that - network requests are the most expensive thing.

**Katie Sylor-Miller:** \[00:20:05.19\] Yup.

**Kevin Ball:** So imagining this situation, you either are gonna wanna do it at the page level, where you're just like "Okay, this whole page is React, and I'm gonna do one fetch and it's gonna render everything over there", almost where PHP is just your data layer, and then you're passing that over... Or you'd wanna have like "Here's the set of components I need, and I send them all in one request and get them all back."

**Katie Sylor-Miller:** Yeah. I think we're definitely more on the latter side of things, because just thinking long-term about what the roll-out plan is going to look like... It'll probably start with we'll pick one component on the page; maybe it's the logged in user menu or something like that, that's highly interactive. Or maybe it's our conversations UI.

**Kevin Ball:** Right.

**Katie Sylor-Miller:** And we'll just pick that one little tiny piece of the page and then just start there, with the expectation that a lot of the stuff that we serve in our markup is not dynamic. It doesn't need --

**Kevin Ball:** It doesn't need to be in React, yeah.

**Katie Sylor-Miller:** It doesn't need to be in React.

**Kevin Ball:** I love that, because that lets you migrate gradually...

**Katie Sylor-Miller:** Exactly.

**Kevin Ball:** ...which is something that is so often neglected in this ecosystem, because we're like "Okay, just use the latest and greatest thing." That doesn't work if you have a massive existing application.

**Katie Sylor-Miller:** That's always the hardest problem, I think, in infrastructure, is figuring out how do you do roll-outs effectively, how do you stay on top of adoption... We have a lot of things that are still kind of hanging around seven, eight, nine years later, because we didn't focus as much as we probably should have on getting full adoption. And then it becomes this compounding problem where when we wanna try to build new things, we have to accommodate the four different historical architectures of Etsy.com, that are still lingering in various corners of the codebase. All of our new infrastructure projects take twice as long as they probably should, because we have to --

**Kevin Ball:** Right, it all has to keep running.

**Katie Sylor-Miller:** Yeah.

**Kevin Ball:** You can't start from scratch, you've got a business going.

**Katie Sylor-Miller:** Exactly. It's kind of funny, we have a really big culture of rotations and bootcamps at Etsy, where folks can go and hang out on another team for a week, or a month, and just sort of get a taste for what other people are doing... And we've had multiple product engineers come and hang out with us, and at the end they're like "I don't wanna be an infrastructure engineer. \[laughter\] I don't know how do you what you do." And I'm like "Honestly, I could never be a product engineer again."

Someone would be like, "Hey, Katie, can you go build this feature?" and I would be like "Okay, here's a framework for building that feature, that's gonna make it more maintainable and robust, and easier to build." \[laughs\] So... Infrastructure engineer for life.

**Kevin Ball:** Yeah. So I'm curious to explore this more, because this migration question is something that I think is underserved in terms of educational content for folks. You mentioned there's four existing legacy architectures, that I imagine you're trying to gradually remove at least some of the older ones...

**Katie Sylor-Miller:** Yeah.

**Kevin Ball:** So what's the process for "Okay, we've decided we're moving on from this approach." How do you get to the next approach from there?

**Katie Sylor-Miller:** \[00:23:47.16\] Yeah, so I think a lot of it is -- and I will be 100% honest, that I think this is something that we're still constantly learning about... It's a really hard problem, and we don't always get it right. But I think a lot of it starts with thinking about developer experience. And I joke that I'm not a feature/product developer, but really I am; the product though that I'm building is for other engineers.

I think you have to have a lot of empathy and a lot of concern and care to make sure that the underlying structure of what you are building doesn't leak into the API that you expose for engineers to use, and that the API works in a way that the engineers who are using it think about it. So you have to put yourself in the shoes of someone who's gonna be using this, and thinking "What's gonna be the easiest way for them to switch to using this?"

**Kevin Ball:** Right.

**Katie Sylor-Miller:** And then I think it's just about partnering with teams, getting folks to start to use what you built, and have success with it. And then they share that, and then other people start getting excited and wanna use it, too.

**Kevin Ball:** So that gives me something about how you get them on the new thing... But how do you get rid of the old thing?

**Katie Sylor-Miller:** Oh, god... It's hard. \[laughter\] Ownership is a big problem... I honestly don't know if other large organizations have this problem, but...

**Kevin Ball:** I would wager they do.

**Katie Sylor-Miller:** I would wager they probably do... Yeah, that's something that we struggle with - "What do we do with all of these really old features that, for whatever reason, we don't wanna get rid of, but nobody's actively working on them?"

**Kevin Ball:** Yeah.

**Katie Sylor-Miller:** Because honestly, the upgrade path for that is probably non-existent. Something I've been kind of toying around with is coming up with a framework for like "Okay, let's rank our pages..." A lot of times we rank things based on how much they contribute to conversion, or seller happiness, or seller growth... And then we have these other pages though where it's not clear what their value is. And maybe we need to accept the fact that we're always gonna have parts of the site that we're never gonna upgrade or touch, and maybe what we need to do is wall them off into like a walled garden, where we don't worry about the fact that we're duplicating code, or that we are taking copies of files that we're updating other places... But just sort of saying "Okay, here be dragons. We accept that here be dragons, and we're not gonna try to ever bring this forward." Because let's be realistic, that's what happens.

**Kevin Ball:** Yeah. Interesting.

**Katie Sylor-Miller:** So yeah, that's something I've been kind of talking and thinking about with people a lot, is like "Alright, can we make some walled gardens of code where we're not gonna invest the time and energy that it takes to upgrade it until as an organization we decide that it's important?"

**Kevin Ball:** Yeah, that makes a ton of sense, because a migration path I've seen before or done before is you have sort of this walled garden of "This is the old stuff", or sometimes you start with - you have a walled garden that "This is the new, beautiful stuff", and then you gradually, piece-by-piece try to move things between one or the other, but you treat them completely differently.

**Katie Sylor-Miller:** Yeah. I think the pattern that we've generally used is more of like a hybrid, where we make the new stuff backwards-compatible, so you can mix and match... And as with everything, there's trade-offs. The trade-off with that is that the old stuff has a tendency to stick around longer... But it makes it easier to do a gradual roll-out. I think the -- what is it... The Strangler pattern - have you heard of the Strangler pattern?

**Kevin Ball:** \[00:28:07.20\] I think so, but let's review it...

**Katie Sylor-Miller:** It's a terrible name, but basically the idea is that it's like a stranger vine grows around a tree, and then gradually eats the tree away and replaces it. So I think the idea is that you build new stuff around the old stuff, and slowly eat away at it until the old stuff is gone. I could be butchering that... \[laughter\] I apologize in advance if I butchered what the Strangler pattern means.

**Kevin Ball:** It's a very graphic metaphor for code. "Okay, we're gonna wrap it up in this new stuff, and Webpack is slowly going to strangle the life out of our old code."

**Katie Sylor-Miller:** Yeah. \[laughs\]

**Kevin Ball:** Not to pick on Webpack, but...

**Katie Sylor-Miller:** No, no.

**Kevin Ball:** \[laughs\]

**Katie Sylor-Miller:** I like Webpack. I'm glad we actually have it now.

**Kevin Ball:** Yeah, it's fun, because it's -- it's easy to hate on Webpack, because there are so many configuration challenges, as far as they've come, but there's a reason we all keep adopting it, too.

**Katie Sylor-Miller:** Yeah.

**Kevin Ball:** If you go back to the older ways - you can't do a lot of the things you can now do with Webpack. And yeah, it's hard, but complexity is conserved; it's gotta be somewhere.

**Katie Sylor-Miller:** Yeah. Well, we have a team of three people whose entire job for a year was to figure out how to migrate us onto Webpack. So it's not easy, by any stretch of the imagination... But it was worth it. Again, with a boring tech, we sort of -- it took us a little while, but once it became pretty clear that Webpack was the de facto standard, and the support is there, the maintenance is there, we said "Okay, it's time to start using it."

**Break:** \[00:29:58.16\]

**Kevin Ball:** Another topic I wanted to pick your brain on - though I'm supposed to get away from using that metaphor, because that's a little bit of a weird visual there...

**Katie Sylor-Miller:** \[laughs\] This is a Halloween episode...

**Kevin Ball:** I know, right? Another topic I wanted to ask you about (to not try any metaphors) is design systems...

**Katie Sylor-Miller:** Yes!

**Kevin Ball:** Because I saw that you were one of the authors of the Design Systems Handbook, that I think InVision sort of coalesced together from different folks... You brought it up a little bit.

**Katie Sylor-Miller:** Yeah.

**Kevin Ball:** So tell us a little bit about how you think about a design system - what makes a good one, how do you develop it...

**Katie Sylor-Miller:** Yeah, yeah. Design systems to me I think is this natural progression that -- you know, I've been doing this for almost 15 years, and throughout that time it had a lot of different names. First it was style guide, then component library... And it just makes sense. Every other computing language uses small, reusable modules of code. It's an idea that just makes sense. But I think that, again, kind of like what I said before, the difference between a successful design system and an unsuccessful one is really putting care into that API.

\[00:32:04.03\] The way that you build a custom dropdown component to handle your specific product use case, versus the way that you build something that is completely reusable and exposes an API that allows multiple different teams to inject their own data and their own interaction into a component that handles opening it, animating it, how do you surface what the user selected, how do you handle accessibility is a huge challenge for things like that... You know, it's a completely different mindset.

Systems thinking has to go into every layer of the design system, basically... And I think it's really exciting that several years ago -- gosh, it was probably 8 or 9 years ago now that at my job I suggested that we create a reusable pattern library... Because I was getting so frustrated that -- you know, it's like the 50 Shades of Gray. \[laughs\] Every single Photoshop document - because it was Photoshopped then - they sent to me had four different grays, and they weren't standard... And I was like "For the love of God, please give me something that I can reuse..." I think at that point the designers were kind of like "What...?!" But it seems to me that designers are much more on board.

A lot of organizations - and at Etsy, actually, our designs system actually came out of designers, not engineers, which I think is amazing. I'm really glad to see this kind of component-based development becoming a thing, because it makes so much sense, on so many levels.

**Kevin Ball:** Yes, okay. So let me dig a little deeper into that. So you mentioned systems thinking at each level of the design system... Can you maybe play out first what are the layers of the design system that you're thinking of, and then maybe highlight a little bit about how systems thinking influences each one?

**Katie Sylor-Miller:** Okay. Yeah, if you think about -- you know, Brad Frost introduced the Atomic Design language a long time ago, and I think a lot of it still makes sense. You start with like "What are your colors? What are your fonts? What are your icons?" Thinking about putting together a color palette that is something that designs can mix and match and express creativity, but also it meets accessibility requirements; you have strong guidelines about "Well, you never use the light grey on a white background. It only can be used for text on a black background."

To me, I think that's one of the hardest pieces, and I'm glad that I work with really talented designers, who can visually come up with "Okay, this is what the visual and informational hierarchy of text on the page..." That's the hardest part of any design system, I think. Something that you can reuse.

And then from there it's really thinking about components and what are the smallest pieces of your components. A lot of times a button might be -- I feel like that's the canonical thing for design systems, because buttons are everywhere...

**Kevin Ball:** Buttons are everywhere... You'd like to think they're simple. They are not simple.

**Katie Sylor-Miller:** \[00:35:51.10\] They are not simple at all. Again, thinking about how do you write your CSS in such a way -- I think a lot of folks have adopted this idea of having a structural class, and then themed classes, and just thinking about the interactions between those, and what options do you expose to people, how do you allow them to make the button bigger, how do you allow them to make the text bigger, what happens if they wanna put an icon inside of a button, what happens if the text wraps onto multiple lines... There's so many things you have to think about to build a component that seems so utterly simple.

**Kevin Ball:** Yeah.

**Katie Sylor-Miller:** What's the difference between a button that submits a form versus a button that opens a custom dropdown? What about a button that changes the pagination, what does that look like? How do you build that?

**Kevin Ball:** Right...

**Katie Sylor-Miller:** And then from there, once you get into the more complicated -- you know, the interaction with a button is relatively easy, although obviously the thinking about it is not. With your components that idea again of "What are the smallest units that I can build, and how do they interact with each other and build up, in order to make something really complicated, like a modal overlay dialog box?" Something like that, that is massive in terms of making sure that the entire page is structured correctly, so that a screen reader knows when this accessible dialog box is open, that it should ignore everything else on the page... You have to know how to capture the focus, and handle the tab order...

There's all these really deep, underlying facets to the interaction, but then there's also "How do I make it so that designers can use different sizes of it? What happens if they wanna have a header or a footer that stays fixed in the modal, and then the rest of it scrolls, because it's taking over the whole page? What about mobile? What about the tap interactions?"

There's so much complexity on every single level, and to me the best design systems abstract away all of that complexity. The designers and the developers who use it - maybe they don't even know that all that stuff is happening in the background. They just know that they can combine it and it does what they want, you know?

**Kevin Ball:** Yeah. That's interesting... So there's the implementation piece of this, but as you were talking about, there's thinking that is architectural thinking, but designed... Right? I don't know if I've ever seen the title Design Architect, but it's almost like you need that separation.

**Katie Sylor-Miller:** Yeah, totally.

**Kevin Ball:** There's a little bit of "Okay, this person is specializing in graphical design, what the thing looks like, this person is focusing on information architecture (I guess that's the closest area that I've heard)", but yeah... That's really interesting.

**Katie Sylor-Miller:** Yeah. And honestly, I've worked with several designers in the last four years at Etsy on building this design system, and they all are design architects. They think about those higher questions, they have a systems mindset. And to me, I think that systems mindset really transcends just software architecture.

**Kevin Ball:** Absolutely, absolutely. That's super-cool. I'm still spinning, thinking about design systems...

**Katie Sylor-Miller:** \[laughs\] I could talk about design systems all day.

**Kevin Ball:** And it's interesting -- so maybe the thing I would ask... Thinking about a design system from now the perspective of a front-end developer, what are the key pieces in terms of designing that API that are gonna make a difference in the engineering utilization there?

**Katie Sylor-Miller:** \[00:40:08.22\] Well, I think a lot of it really depends -- so there's a couple of different ways to approach how you build a design system. Some design systems just provide "Here's a bunch of CSS classes, and some example markup, and you go out and build it in whatever language you're gonna use. You just use our classes, and you use our markup structure, and you sort of handle everything else." And then there's all the way through to "We provide all of the components to you", basically.

**Kevin Ball:** Yeah, yeah.

**Katie Sylor-Miller:** And I think the interesting thing about the API is a lot of times those components might be PHP markup, or some other server-side language... Or these days most likely it's probably like React or Vue components. And you wanna have an API where engineers can pass in properties that correspond to the CSS classes that you're gonna apply. So if they pass in "button is huge", then it applies the "button huge" class.

**Kevin Ball:** Right.

**Katie Sylor-Miller:** And thinking about the translation from a CSS class to a consistent property that you pass in in a Javascript component is really interesting. And then I think there's a lot around -- you know, the design system that we use, we sort of provide these structural classes and themes, but then we allow folks to heavily modify. We have -- I think Bootstrap does this, Tailwind does this, where you have margin classes, padding classes, borders, text colors...

So there's a lot of thinking you have to do about "Okay, so if someone is building this button and they wanna pass through additional classes and parameters", having your React component set up to allow those properties to just get passed right through into the markup that gets output is really important. Because there's a balance. You can't have a property for every single possible thing that people are gonna wanna do with your components... So it's really about thinking "Okay, how can I make it so that it's really clear when I pass in this prop what's the markup gonna look like when it comes out the other side?"

**Kevin Ball:** Well, there's kind of a deliberate constraints thing too, right? An engineer might not be thinking about the fact that there are only certain spacings that fit within the design and the design system. So by making that something that you're passing in, where there's (I don't know) three different margin classes or something like that, you don't get engineers who are like "Wait, but if I try to measure this with my pixel thing it's actually 14 pixels instead of 15 pixels."

**Katie Sylor-Miller:** Oh, god, no, no, no... Honestly, that's just something that I work really hard - try to help engineers feel empowered to push back on designs that don't follow the system.

**Kevin Ball:** Yes...

**Katie Sylor-Miller:** I generally tell them "If the designer hands you something that doesn't exist in the system, go out and build it with this system, as close as you can get it to their design, show it to them, say 'Is this acceptable?' and then if they say 'No, this isn't quite right', that's when you can have a conversation about the trade-offs of writing custom markup, writing custom CSS, maintaining that in the long-term versus using what's available." Or then you can have a conversation with your design systems team or whoever owns your design system about "Hey, these patterns don't fit what my designers want to do anymore, so maybe we need to expose a new class, or a new variable, or maybe a whole new pattern needs to be developed."

\[00:44:19.21\] So I think a lot of times engineers, especially more junior engineers, will get handed a design and they'll just go -- they'll measure it and they'll go and they'll build it exactly... But if there's a good system in place, you should never--

**Kevin Ball:** You should never have to do that.

**Katie Sylor-Miller:** You should never have to do that. You should never want to do that. \[laughs\]

**Kevin Ball:** Yes, that's a great way to unmaintainable CSS and markup.

**Katie Sylor-Miller:** Exactly. It's exactly that thing which is why designed systems exist in the first place, is to solve those problems.

**Kevin Ball:** This raises another related and interesting question, which is "How do you think about the evolution of a designed system?" Because we'd all love to create the one perfect thing, and then always be able to use it, and that's not reality.

**Katie Sylor-Miller:** No.

**Kevin Ball:** Reality evolves, and changes, and our constraints change, and things like that. So how do you think about managing that process and making the trade-offs of "Does this belong as a new thing in the design system, or should we remove this option and do something either custom, or build it closely with the system?"

**Katie Sylor-Miller:** Yeah... I think as far as the last question, adoption and -- when you think about it, you don't necessarily want or need to have everything in the design system. The stuff in the design system should be reusable by any team, in any context. Maybe the cool, flashy, new thing that the designer on the search team needs is so specific to search that it's not about building something that's reusable.

But what I generally tell people is "Build every component that you build custom on the site as if it were already in the design system, so that if we get to the point where we put it out there and other teams start using it, we can just copy and paste the markup and the structure and the CSS into the design system, and then everything is in alignment and it makes it much easier." Because you know, if you build it just kind of any haphazard way, if you're not thinking about "Alright, if this is eventually gonna be reusable, then we can't port it very easily."

**Kevin Ball:** Yeah, that's a tricky balance though, because as you mentioned, product engineers 1) they're often under tight deadline constraints, and 2) they may not even have the perspective of "What are all the variables that people might wanna change here?"

**Katie Sylor-Miller:** Totally. Totally. We have a pretty good setup right now where a lot of those conversations are happening more in design crits, and the designers who work really heavily on the design system go to other teams crits, and there's like a global, sort of all of Etsy design does a weekly crit together... So I think it's about having those good relationships outside of the design system world, with the actual designers and engineers who are gonna be using it, and making sure that there's a really clear, open line of communication.

**Kevin Ball:** Yeah, just constant talking, communication, back and forth.

**Katie Sylor-Miller:** Yes. And it's funny, because probably because one of the busiest customer service channels in our Slack instance is the design systems channel.

**Kevin Ball:** Interesting.

**Katie Sylor-Miller:** \[00:48:03.05\] People are constantly popping in and asking questions, "How do I use this component?" "I wanna do this thing. The designers asked for this. How do I make it happen?" Yeah, so it's a lot... \[laughs\] You definitely have to have a very customer service mindset in order to work effectively on a design system team... And relationship building, clear guidelines about contributions... At least at Etsy, our design system kind of represents what we hope -- and we're not perfect; nobody's perfect, but... I like to think that it's our highest ideals for what our front-end code should look like.

Everything should be perfectly structured, everything should be perfectly accessible, everything should be consistently named... \[laughs\] Not that we always achieve that, because we're humans, but... In my opinion, I think if other people are building stuff in their own stack that follows the lofty ideals and guidelines that we put down for the design system, then they're gonna be set up for success regardless. These are good architectural patterns for everyone. You don't have to be a design systems engineer to think about "How do I separate business logic from interaction logic?" These are important things everywhere.

**Kevin Ball:** Absolutely. Awesome. The only last note I have to talk with you is to highlight what I think on Twitter you said was your career apex success.

**Katie Sylor-Miller:** \[laughs\]

**Kevin Ball:** You recently were subtweeted by Horse JS.

**Katie Sylor-Miller:** Yes, I was, yes! That was awesome! I was very, very lucky to be invited to MC JSConf US in California...

**Kevin Ball:** Oh, nice! I missed it this year. I was sad to miss it.

**Katie Sylor-Miller:** It was so fun! It was my first JSConf, actually...

**Kevin Ball:** Oh, they're wonderful, aren't' they?

**Katie Sylor-Miller:** ...so I got thrown in the deep end, but... It was amazing, it was so much fun. I really enjoyed MC-ing. If anybody else wants me to MC their conference, I will come and MC. It was a lot of fun. Yeah, and I tweeted a picture from backstage, and Horse JS retweeted me instantly... So I have theories now; I think I know who Horse JS is.

**Kevin Ball:** At JSConf two years ago there was a whole talk about unveiling Horse JS...

**Katie Sylor-Miller:** Yeah...!

**Kevin Ball:** ...which they didn't, because they staged it... But it was really funny to have them doing that, and have Horse JS subtweeting them as they're doing it... So we know that he or she was at JSConf, doing this, listening to the talk about unveiling Horse JS... It was hilarious.

**Katie Sylor-Miller:** Yeah. The person who I think is Horse JS, I have asked them directly "Are you Horse JS?" and they always say no... But I don't know if I believe them. \[laughter\] I've also heard a really good theory that it's not just one person, it's actually a bunch of people, and I think that makes a ton of sense also...

**Kevin Ball:** The data they did expose in that talk seemed to indicate that if it is multiple people, they are at least geographically collocated.

**Katie Sylor-Miller:** Hm, okay... Yeah, but you know...

**Kevin Ball:** Who knows...? Horse JS is still out there.

**Katie Sylor-Miller:** ...you can spoof geography, come on... \[laughter\] So yeah, that was probably the highlight of my career. And of course it wasn't about anything interesting I said about JavaScript. It was like a picture. But that's okay, I'll take it. \[laughs\]

**Kevin Ball:** Yeah. Alright, awesome. Anything else you wanna talk about, or...?

**Katie Sylor-Miller:** No, this has been a really awesome conversation. Thank you so much for inviting me, Kevin. It's so great to be here.

**Kevin Ball:** Yeah, absolutely. Thank you for joining me, Katie.

**Katie Sylor-Miller:** Thank you, take care.

**Kevin Ball:** Alright, you too.
