**Kevin Ball:** Alright, we are here live, at React Summit. I'm Kball from JS Party, I'm joined by my co-host here...

**Nick Nisi:** I'm Nick. Ahoy-hoy.

**Kevin Ball:** Ahoy-hoy. And we have a special guest here today with us. Tom, why don't you introduce yourself?

**Tom Occhino:** Hey, everyone. I'm Tom Occhino. I was a part of the founding team of React at Facebook, now Meta, and these days I'm the chief product officer at Vercel.

**Kevin Ball:** Given that we are at React summit, I'm sure we have to go into the story. So tell us a little bit behind the scenes. What was it like getting React started?

**Tom Occhino:** Yeah, well, how long do you want -- what version do you want? How long do you want me to speak for? I could go for five minutes or five hours.

**Kevin Ball:** I mean, you've told this story again and again. We've got to start with it. But let's keep it tight, and then we'll try to get into what are some of the behind the scenes stuff that maybe hasn't come out before?

**Tom Occhino:** Yeah, sounds good. So in the early days, I think we were exploring a number of different ways to build web applications. And on the sort of ad side of our business we had some more sophisticated applications than on the consumer side. And the way that we were kind of building those at the time was the same way that everybody was building web apps, was sort of a client-side MVC... It was not dissimilar to something like Backbone, or Ember, or Angular at the time.

And an engineer came along and he's like "Look, this code is very hard to maintain. As our team grows, we're moving very slowly. Nobody wants to touch that thousand-line model over there. Only two people can touch that." And so he thought there was a better way. He was inspired by a bunch of things that we had already been doing in other parts of the business. But from that, a prototype of an early version of what would eventually become React was born.

At the time I think we didn't have the right home in the company inside of the ads business to sort of incubate that type of new technology, so Jordan came over and talked to some of us on the product infrastructure team, where we built frameworks and technologies that enabled other developers to be more efficient, and build higher-quality stuff... We gave it five minutes, we tried to build some things with it... We knew there was something important there. And that's when we kind of started to double down. And the rest, you can hear about in the documentary, or in one of the other interviews. But yeah, it was very much a -- it grew out of this organic sort of need, this emergent need for a simpler way of thinking about and developing our apps.

**Nick Nisi:** I'm curious, in ads before that, were you using something that's familiar? Or was it more like an in-house solution? I'm just curious what drove the need to React.

**Tom Occhino:** Yeah, it was something in-house, but it was not unfamiliar. I mean, one of the people that co-created our in-house framework, which was called Bolt, was a core contributor to Backbone. We also had folks from the sort of Dojo mobile team... We were very much in the soup of the JavaScript ecosystem at the time. And so yeah, I would compare our sort of in-house framework to sort of like Backbone, with a different way of doing the sort of view layer. And it was good, very good. And we used it for a very long time. And it wasn't until our team started to get bigger and our app started to get sort of pathologically complex that we started to need a simpler model, no pun intended. We had these massive controllers and these massive models that nobody really wanted to touch; so many inputs... And we couldn't make changes with confidence. So that's when you're kind of looking at it and you're like "Okay, I think there's maybe a simpler way to do this." So, yeah.

**Kevin Ball:** Well, and one of the things that React introduced that was so different, and that I remember -- you were at that JSConf when it was announced. And you talked about "Alright, we're going to put JSX in here, we're going to have everything in one component, we're not going to separate concerns..." And it was panned. I was not at the conference, you were, but I just remember the ripple effects coming out and people were like "What the heck is this...?"

**Tom Occhino:** Yeah, when Jordan and I introduced it at that conference, I remember it vividly. One of the things we wanted to focus on was the sort of syntax, and how this thing that was very familiar to us we thought would be also familiar to the rest of the world. It's like "Look, your HTML, the way that you want to think about your components - you don't have to use these nested JSON structures, and all this stuff. Look, it just \[unintelligible 00:07:46.01\] But the sort of conversation ended up becoming about this mixing of technologies. And at the time, it was like "No, no, no. The whole industry is moving towards a separation of concerns, and you guys are mashing them together." And we're like "Wait, wait, wait... This is one concern. It's my component. It's my UI."

\[00:08:05.22\] And so I think the biggest thing we did wrong there was we didn't actually start with the problems that we were trying to solve, we just started with our solution. So luckily, Pete Hunt, I think later the same year at JSConf EU, did a much better job of teeing up the problem. Here's what we were experiencing - as our applications got more complicated, as our models got super-big, people didn't want to make changes to them... We wanted a loose coupling between components, so that those components could be used in lots of places, but high cohesion between them. So how do you do that? And it's with the seam between components, which is the props boundary, and all these other things. So he did a much better job of teeing up the problem. And then I think it was more well accepted. People were willing to kind of give it five minutes after that point. But I'm glad that there wasn't like a stampeding herd of adoption. This is amazing.

At no point in React's history have we ever said "Behold, this is the answer! We've finally done it!" It's always been about sort of like "Here's the problems we're facing. Here's one solution that worked pretty well for us. If you have the same problems, let's chat. If not, no worries. There's lots of good solutions out there." But I'm glad that Pete came through and restored faith in the sort of engineering team that Jordan and I were attempting to represent. Because the team was great, and the tech was novel. Something interesting and important.

**Nick Nisi:** Yeah, I think it really -- being there, I had a tweet in the React documentary that was negative towards it... And it was because that separation of concerns; everything was pushed towards that. And then also just creating this new JSX syntax that wasn't real JavaScript at the time felt a little weird and strange... But I think that the key piece, looking back, that was missing, was that component mindset. We just weren't thinking in terms of components. For me, I was in Backbone in those days, and it was really more thinking about in terms of the view that I'm specifically showing, which at the time was usually like a page.

**Tom Occhino:** Yeah, that's right. The views, in our applications, ended up being massive. And then the models that needed to power those views were massive. And you can break them up. You can say "Okay, now I have multiple models that feed up into this thing, and now I have multiple views..." But everybody was thinking about things from a sort of like, I don't know, top-down, rather than sort of the component as the atom, inside-out sort of mentality. And that was the big shift, was "We're going to define a seam, and I can do anything I want inside of this seam, but the contract with the rest of the application is intact." And we could have done a better job of telling that story, but it worked out okay in the end.

**Kevin Ball:** Well, and that approach to decomposing user interfaces has taken over the world, right? Like, everything is now using component-oriented development, whether it's using JSX or something else, whether -- I mean, even if you're still doing separation of concerns in the traditional way, you're still thinking about it as components.

**Tom Occhino:** That's right.

**Kevin Ball:** Yeah, the day that Swift UI was announced, I remember writing Jordan and saying "Congratulations, man. We did it." The thing that we were so against was this idea that engineers should spend their time manually manipulating views, updating things based on new information coming in... And we just wanted the framework to be able to take care of that for you. And now, across every platform, every UI behaves that way. We have a declarative way of describing what our components and our UI should look like at any point in time, and you trust the framework to keep it up-to-date. We never will find that button and turn the text red, or set its state to disabled manually ever again. I think that's progress.

**Nick Nisi:** Yeah. When React was first coming out, and like that first version, it really was just focused on kind of the view layer, and like displaying things. You know, "Here's the props, and here's how they're going to be displayed. And then here's the interactions between them." Was that a conscious decision, to keep it very limited to that and not to spread out into more state business logic?

**Tom Occhino:** \[00:12:06.11\] Yeah, I think it was sort of an implementation detail leaking out. I think we wanted to do one thing really well. But more importantly, we just had all this other stuff that this was sitting on top of. We had a way of doing data fetching at Facebook, we had a way of doing, you know, basically everything. Our router was like a server-based router... We really didn't need to solve all of the concerns. But over time, what happened is the community ended up filling in all the gaps. We needed a router, and then React Router came around. React needed server-side rendering. And then I think Pinterest was maybe the first company to build a server-side renderer that would work. Because Facebook didn't run JavaScript on the server at the time, and so we weren't investing in server-side rendering. But the architecture was very much designed with server-side rendering in mind. So you needed all of these things, state management libraries and different types of integrations, and the community really filled in the gaps.

And then I think the goal for the core team over time was to make it so that all of these things that were built on top of React could get thinner and thinner. They didn't have to be so sophisticated because the framework would take care of more of the atomic, low-level complexities for you, so that your framework that sits on top of this library that's growing in size could be thinner and thinner, but just as expressive.

So yeah, I mean, there was no sort of intentional "Oh, let's not worry about any of that, because the community will fill it in." It was like "Well, that's not what we need to solve, so we'll kind of like create an opportunity for the world to fill in the gaps." And that's when I think, React, we introduced it very clearly as a library. Is this a library or a framework? It's not a framework; it doesn't do everything for you. Ember was batteries included, and that was beautiful. Angular was the same way. Here's how you do testing. Here's how you do data fetching. Here's how you do routing. We were just like "Nah, this is just your views."

And a lot of the early adoption of React actually used it in conjunction with like Backbone models. So there was even a strong relationship between -- I mean, Instagram did this in the early days, where we had Backbone feeding into React Views, and it was just an easier way to do your view layer.

**Nick Nisi:** Yeah. And I think that that probably really helped with the adoption of it too, just because it was a simple way to do it, and it wasn't prescribing "This is the one way to do it", and people got to really experiment. And then these new experiments just flooded the market with all sorts of different ways to do it.

**Tom Occhino:** That's exactly right. I think there's sort of two reasons that React really took off. One was you could adopt it extremely incrementally. One part of your page - not even one page in your app, one piece of your page...

**Kevin Ball:** One component.

**Tom Occhino:** ...and the other thing was the other direction. So it included these escape hatches from the early days... And I remember we had one of these things where we had this very sophisticated autocomplete widget, that no one wanted to reimplement. It was just really complicated. And so there was this function in React that said "Find DOM node", and it would get you the DOM node that you needed, and then you could decorate it with whatever existing sort of jQuery-like application code you had or behavior you had. And then you could mix and match. And so because we created sort of escape hatches, and incremental adoption - for our own needs, by the way; this wasn't a strategy, like "This is how we'll get..." No one ever cared about React adoption at Facebook. No one ever took a goal on number of external React users. But we needed to build these things for ourselves, and it turned out those are the things that made it possible for other companies to try it, and then eventually expand their usage.

**Kevin Ball:** So you were at Facebook. React at Facebook is for their own needs. Now you've moved on, you're at Vercel, which is also supporting a lot of these open-source, frontend movements, but perhaps a little bit more self-interestedly, in some ways.

**Tom Occhino:** \[00:15:52.22\] There is a business there, yeah. It's very interesting, the contrast. One of the things I've loved about being at Vercel versus Facebook was Facebook had a business that was over there, that was funding everything that we needed to do, and it was enough for us to make our own engineers more efficient, to level up the quality of our applications... But we didn't really have to concern ourselves with how other companies are adopting our technologies. So that means that, you know, we collaborate, we build an open-source community, we benefit from recruiting, and thought leadership, and all these things... But there was no sort of like "On the balance sheet, here's the value that we derive." And I think being able to invest in open-source technologies from the angle of "There's kind of a business that's funding the open-source development, but I'm more directly connected to the customers" has been a really enlightening and great experience. We now can talk about business outcomes for our customers, and how the sort of frameworks and the technologies that we built led to those business outcomes.

But one of the things that both companies kind of have in common is Facebook famously said "We don't build services to make money, we make money so we can keep building better services." And Vercel is kind of the same way now with open source investment. We don't build Next.js to make money; we have a business that makes money, so that we can keep funding Next.js development. And I like being more directly connected to the customers, and seeing the ways that our framework improvements enable them to achieve better business outcomes, which is a much more direct link than I had at Facebook.

**Kevin Ball:** So you said the need for React kind of came out of this very complicated JavaScript application that - those of us who are older remember all of these, like, the spaghetti was the way, right? And you're trying to track the dependencies.

And so React kind of reimagined that, broke that down, filled the gap there. Where do you see right now that same kind of, if anywhere, places where people are getting stuck, where there needs to be some sort of reimagining of the paradigm?

**Tom Occhino:** Yeah, I think the biggest shift that we saw was in moving a lot of that application complexity into components where those components primarily contain - or not primarily, but those components contain everything that they need in order to exist inside of a larger application, and on their own. We just moved a lot of the complexity into those components, but on the client. And we moved so much of the application onto the client that I think we've had like a five-year run of single-page apps that show a loading spinner or a series of loading spinners, and then they fetch their own data from wherever it's coming from. And that led to a better developer experience, but admittedly, probably not the right user experience. And there's things that you can do in order to coalesce the data fetching, and make sure that you don't have waterfalls in your app... But it's kind of manual. It's not the default.

So I think the biggest shift we have is moving some of the work back to the server, when it belongs on the server. You're doing data fetching code, you're doing anything that hits a database, or touches secrets, or anything... And you can leave that code where it belongs, and then ship a thinner client.

And the thing that I'm kind of most excited about is using both the server and the client for the things that they're best at. Client is best for interactivity, and real-time, immediate, optimistic feedback, but the server is best for sort of orchestrating data fetching, and coalescing things, and sort of making it so that we have an efficient stream of updates coming to the page.

And so I think when you have a static shell, and then you stream in the dynamic bits of your app, but you keep everything interactive as the streams come in, I think that's kind of the North Star for web application delivery. And that's the shift we're seeing with like React Server Components. So we're far closer to the beginning of the RSC journey than the end there. And that's the shift I'm most excited about.

\[00:19:55.15\] But then I think there's also this renaissance of sort of like wanting to support in a more native way other devices and other platforms that have been coming online. It's not just about mobile anymore. It's also about TVs, and AR, VR etc. So we're going to see a proliferation of new clients that you want to support. And my hope is that this blend of the benefits of the server and the benefits of the client won't be lost as we move to all these new platforms.

**Nick Nisi:** It really seems like trying to get the best of both worlds in terms of developer experience and user experience.

**Tom Occhino:** Yeah. One of the things I feel really strongly about is developer experience was never a goal on its own. Developer experience is always in service of creating a better user experience. The reason that we needed to improve the developer experience in sort of our sophisticated ads codebase was because we needed engineers to be able to keep iterating on it, and making improvements based on customer feedback and what we saw. So it wasn't like we were like "Oh, we just want to clean this up so we can have a better time ourselves." It's necessary in order to deliver the best user experience possible. So I think anybody who says that these things trade off against each other, I think they can, but they shouldn't. We need to make the defaults for anything that any framework outputs significantly higher quality, and sort of raise the baseline for everything.

One of our goals is sort of level up the entire web. We want to make the web better. I want to use software that feels great, not software that looks like it was cobbled together really quickly. Even if you can develop it quickly, that doesn't mean it has to feel like crap. So yeah, developer experience in service of a great user experience.

**Nick Nisi:** So you were around for the beginning of React, and kind of bringing that into the limelight, and getting all of the popularity that it has, and shaping the industry... And now, years later, you're at Vercel, doing Next. Do you see that as like a continuation of React, or a way to shape React for like 2024 and beyond, like the way that you might have built React in today's world, as opposed to 10 years ago?

**Tom Occhino:** Yeah... So in many ways, I think that what we're doing at Vercel is sort of inevitable. And React is an important piece of that, but not the sort of high order bit. So let me describe what I mean by that. Generally speaking, it's very hard to change developer behavior. But if you can do it, it affords you this ability to do some other interesting stuff. And one of the things that I really like about the sort of arc of Vercel is I believe that there's sort of like a human progress element here. There used to be -- and I'm talking about managed infrastructure, so just to not bury the lead... We used to -- literally, when I joined Facebook, we had teams that drove to data centers and rack-mounted machines. And I knew that team. The infrastructure team would like drive and rack-mount machines, and connect it to the internet, and call ISPs... And then, eventually, AWS comes along, and you don't have to do that anymore. Somebody's already done that, and now we can provision compute on demand. You just log into the console, you say how many machines you need, you configure them... And then something like Vercel comes along, and no one has to do that anymore.

So the arc is sort of like human progress happens when you take something that a small set of specialists can do. Only a small set of specialists. You make it so anyone can do it. And then you make it so no one has to. And the reason I'm so interested in this arc for technology is because I've seen time and time again many, many companies do what I've described as undifferentiated heat loss engineering.

**Kevin Ball:** \[laughs\]

**Tom Occhino:** \[00:23:43.15\] You're doing the same thing, over and over, across lots of different companies, where you're provisioning compute manually, you anticipate a spike because of some event that's happening, so you provision some more, manually... Or you build a script that sort of like tries to do this automatically for you... But then you didn't handle automatic failover. So what if this data center goes down? You have to have somebody log in, and do this thing... And you didn't handle what happens when you deploy your app and then somebody's using it actively, and then everything breaks... So you didn't handle deployment skew... And there's all this stuff. And most of the software in the world, because every company is doing the same thing, they're not thinking about it as holistically or as completely as Google, or Facebook, or now Vercel. And so what we're trying to do at Vercel is make it so that all of the concerns associated with provisioning compute, configuring your data center or your infrastructure primitives, all of that is handled for you automatically. And the reason I'm so interested in Next.js and React is because one of the only ways that we can define infrastructure for you automatically on demand is by having the framework define that infrastructure.

So we can certainly do it with more than just Next.js, but we have to conform to some sort of a scene that describes to the system how to provision infrastructure on demand. And so that's where framework-defined infrastructure comes from, and the build output API, and a bunch of other primitives. So very much sort of innovating with Next.js and Vercel's managed infrastructure, but then generalizing after the fact.

So again, this is another case where we want high cohesion between the infrastructure and the framework, very high cohesion, so we build them and develop them and innovate on them in tandem, but we want loose coupling, so we really clearly define the scene between the two. This is the build output API. If your framework, that you invent today, conforms to the build output API, Vercel's managed infrastructure can deploy it for you on demand, and auto-scale it.

And the same thing goes for the infrastructure. The infrastructure is influenced by, but decoupled from, so that it can be used to deploy anything, including Python and PHP very soon. So yeah, we're kind of like building managed infrastructure that is influenced by the code that you write, so that no one has to manually provision compute again.

**Kevin Ball:** There's something really interesting there in terms of like creating constraints for your architecture, that then enable you to automatically infer a set of different things. I'm curious, because I'm not super-familiar with the build output API or anything... What are, at a high level, if I'm not using Next.js - because it will deal with it for me - what are the constraints I need to put on my software architecture, that allow you to automatically scale and manage it?

**Tom Occhino:** Yeah, at the most sort of rudimentary level is this idea that when a page loads or when an application is loaded, is this specific resource static or dynamic? Is this something that can be loaded from a CDN, loaded from a cache, replicated out to dozens of regions, so that it can be just delivered directly to the browser? Or is this something that requires some compute? So is this dynamic? And if it's dynamic, let's say it's a cart, or a user profile, or some information about the visitor - then you'll need to provision some type of compute on demand. And that could come from a sort of like base layer of compute, or it could come from on-demand serverless functions... We're sort of redefining the way that you think about that to be a much more fluid boundary between the two.

So you don't have to think about whether something is going to be on-demand, serverless, or come from base compute. You just think about whether it's dynamic or not. And then when you tell the framework, when you tell the managed infrastructure "Hey, this is a dynamic piece", it will provision the necessary compute in a very efficient way. This is very high-level static versus dynamic, but there's more flavors... Like "What's your caching strategy, and how do you mix these things?"

**Kevin Ball:** Well, and how do you think about stateful resources? ...especially if you go beyond the simple databases.

**Tom Occhino:** \[00:27:52.28\] Yeah, that's right. And what we want to enable is anybody to pull in any stateful resources, whether it's databases, and any dynamic resources. So backends... I mean, AI apps are huge these days. We need efficient compute, efficient on-demand compute for talking to long-lived LLM outputs, that are streaming responses back. This is not the "Go fetch rows from the database of \[unintelligible 00:28:14.22\] where you just like synchronously just fetch some rows from a database. Now we have like much more sophisticated, stateful and dynamic backends, and we need to be able to connect to all of them.

**Kevin Ball:** So let's maybe dive in on that LLM side a little bit... I'm curious -- so this is a space that is very hot. It's also a space where most of the apps out there are -, I don't know if we're PG or not, but terrible. We'll use that word. I mean, just because we're still trying to understand what are the primitives, what are the pieces that actually make sense for an LLM-based application. I know y'all are diving into that with things like v0, and things like that. What is your perception of what the application layer needs? We've had tremendous development at the model layer, but what does the application layer need to be for LLM success?

**Tom Occhino:** Yeah, a few thoughts here... First is that we're far closer to the sort of beginning of that journey as well, than the end. And I think we're seeing right now LLMs level up developers. Every developer now is like a super-developer, because you can move much faster. But I think I'm more interested in the UX side of things. And so one kind of innovation here is this idea of LLMs not just outputting static content, so images and text, but also outputting dynamic applications.

**Kevin Ball:** Generative UI.

**Tom Occhino:** That's right. So Gen UI, this idea that -- in the simplest form, this is a chatbot, but you can interact with some of the messages that come back. Great. We've seen that. But what happens when we apply Gen UI into places where a very complicated UI wasn't previously progressively disclosed? I think it will make our applications, if we do this right, much more approachable, but the sort of full sophistication of those applications can be disclosed progressively.

And we used to have physical buttons for everything that you wanted to do on a radio. Then we got soft buttons that would be context-aware and give you an option. Then we got touchscreens that would say "Okay, here's all the stuff.

You can just touch on the screen", and the screen had a hard-coded set of sort of UIs that you could sift through. And now I think we will be able to have on-demand UI. And it'll still conform to conventional patterns - a button needs to look like a button - but it'll be able to be custom-tailored for your experience, which I think will end up being much less... You know, software can be much less overwhelming. I remember the first time I opened Photoshop, or like Framer has this too, where there's just all these panels, and buttons, and menus, and all this stuff... And it's like "Do I need to know about all of this up front?" And so I think with Gen UI and with the sort of like modern era of UX development we will be able to progressively disclose that stuff, contextually, when you need it, and not sort of up front. So I'm excited about that.

I'm also excited about the idea that - I don't know, LLMs are better at raising the baseline for everyone than most. And so what that means is "Hey, now that we finally have a really great feeling date picker, let's use that. Or let's let the top date pickers compete", so that I never get into that situation where like "Oh, God, I can't select... I have to click 15 times in order to get to the..." So I think we'll be able to more quickly, I hope, zero in on like optimal user experiences, especially on different modes. So if I'm on mobile versus desktop, I hope that we will be able to level up the user experience across the board. I don't want LLMs to contribute to a proliferation of low-quality apps. I really want to see LLMs enable us all to improve quality, and raise the quality floor for all software that we all use.

**Kevin Ball:** \[00:32:00.10\] I love what you talked about there, of like an LLM integrated application doesn't have to just be a chatbot.

**Tom Occhino:** That's right.

**Kevin Ball:** It can do these other things. And I think there's a transformation similar to what you were talking about with React, where you moved from a mode where you were very imperative, you were having to say "This data goes here, this data goes here", to something that is much more declarative. "Here's what I want to happen." The compiler takes care of all of that. And some of the best gen AI applications I've seen do something similar, where they take a user interface that used to be very imperative - I'm thinking of some of Adobe's tools.

**Tom Occhino:** Yeah, that's right.

**Kevin Ball:** I used to have to do this, color here, do this. And now I say "Make it look like a sky background", and it will just do it.

**Tom Occhino:** Yeah, that's right. So it was declarative UI, right? React sort of pioneered this idea of describe what your application looks like at any point in time. And maybe the era of LLMs, just to connect to the analogy, is "Describe your application at any point in time." So it's not just what it looks like now. Now it's how it behaves. There's a tweet going around with "Use AI when..." And actually, I think that directive is not that far off. You'll kind of describe what your application is supposed to do, and if we can ensure that the same predictable behavior and outcomes happen, we'll be able to -- we're in this sort of era, entering the era of personal software, I think. So we'll see.

**Nick Nisi:** Yeah. And I think to Kball's analogy of being able to just quickly replace the sky, one thing we were talking about last night was we could both do that and get two different skies right now. But talking to you, and maybe using gen AI... Or not gen AI, but just AI to help you guide through the deterministic outcomes that you want... So don't give me everything in Photoshop right away, but when I describe what I want to do, you can point me at the right tools, and kind of catch at a funnel with how anyone might describe what they want, and then push me to the right tools.

**Tom Occhino:** Yeah. Progressive disclosure of complexity.

**Nick Nisi:** Yeah, I like that.

**Kevin Ball:** Shifting gears slightly... So we're here at React Summit, all sorts of interesting things going on... You're here, obviously, speaking, talking to us, doing these things... What is your sense of conferences in 2024? We've gone through this whole dynamic of "Okay, pandemic. Nobody's going to anything. Virtual conferences. Virtual conferences are miserable." Like, all these different things. And they're not miserable. They're good, but they're not the same.

**Tom Occhino:** That's right.

**Kevin Ball:** So how would you talk to folks who are saying "Oh, I'm not at React. I'm watching this virtually. Should I go? Why should I go?"

**Tom Occhino:** It doesn't need to be necessarily this one, but I think getting together in person with people in the field, in the same space, and sharing ideas and building off of each other - that's what the magic is. When we created the first React Conf, 2015 - we started working on it in 2014 - I think our goal was to bring some of the community together, and tell some "Here's the latest updates." But the value that we got out of it was we literally built lifelong friendships. And many of the people that you still see speaking at all of these conferences today, and now in the industry, their first conference, their first React-related conference was React Conf, and now they're all sort of bonded over that experience.

So the pandemic hit all of us very hard. I thrive on collaborating in person with folks, and I really missed it. So it's really good to be here. Even just this morning so far, leading up to the sort of like the opening ceremonies, just all of the conversations, and just hearing what people are working on, and what they build... Yeah, you can't replace that. So even if it's a local meetup, get out and connect with people.

**Nick Nisi:** Yeah. Support your local meetups.

**Kevin Ball:** Absolutely. I think we're just about at time. Anything you want to leave people with?

**Tom Occhino:** \[00:35:56.20\] You know, I think it's been a fun journey so far, watching the evolution of React, and the community, and the sort of families of technologies around this... I think one of the things that I was very excited about, that I didn't necessarily see as a goal in the early days of React, was how it's sort of reignited interest in the web as a platform.

**Kevin Ball:** Yes...

**Tom Occhino:** And so I'm really heartened by all of the active development and innovation happening on the web as a platform. And so I'm a big proponent of sort of making the web win. The web is where I cut my teeth, and I know a lot of us as well, ever since the Mootools days, or even before that... Prototype, and Dojo, and all that stuff.

So I'm a big fan of continued investment in web technologies and the web platform, and happy and excited to connect with anybody who shares that passion. So yeah. Thanks, guys, for having me.

**Kevin Ball:** Thank you.

**Break**: \[00:36:52.17\]

**Nick Nisi:** Ahoy-hoy. We are here at React Summit. My name is Nick Nisi, and I'm here with Kball. Kball, how's it going?

**Kevin Ball:** Going good, excited to be here, as we've been...

**Nick Nisi:** It's been a long, very fun day at React Summit, and we are joined by the one, the only, Shruti Kapoor. Shruti, how are you doing?

**Shruti Kapoor:** I'm doing well. How are you doing, Nick?

**Nick Nisi:** I'm doing fantastic, now that you're here...

**Shruti Kapoor:** I tend to have that effect on people. \[laughter\]

**Nick Nisi:** For sure. Please, tell us a little bit about yourself.

**Shruti Kapoor:** Yeah, I'm a frontend engineer at Slack, I build web applications, help them scale... I mostly work in React, so I also speak about React a lot, which is why I'm here.

**Nick Nisi:** Nice. I've heard of React...
**Shruti Kapoor:** Yeah, React, right? That library... Some people have heard of it.

**Nick Nisi:** Yeah, it's an app topic for React Summit, for sure. So you gave a talk today... What was your talk about?

**Shruti Kapoor:** Yeah, my talk was about everything you need to know about React 19.

**Nick Nisi:** Nice.

**Shruti Kapoor:** And the reason why I did this talk is because I feel like every time a new version of React comes out, a little bit of me is like "Ah \[unintelligible 00:42:13.16\] And then the other half is like "Oh, my God! New version, new shiny thing. Let's do it!" So I was giving this talk to kind of explain what are the new features that developers need to be aware of, especially like client-side developers, because there's a lot of client-side code that's come out with React 19. So what are some things you need to be aware of. React 19 is still in RC stage as of now, so it's nice to kind of be aware of these things now, so you can like think about how you're going to upgrade your code later on.

**Nick Nisi:** Yeah. So this is a perfect topic, because I'm a React developer. I haven't paid a lot of attention to React 19 specifically... But I know that - just from my perspective, I guess; I'm speaking for me - there's a little bit of confusion, because you've got like React 19, you've got React Server Components, and you've got React Compiler. Is that all React 19?

**Shruti Kapoor:** Oh, great question. So React Server Components, React Compiler, and even React Actions that's now come out with React 19, I would say it's kind of all like features, you can call them. So React Server Components, Compiler, which is actually a plugin, and React Actions - they're all kind of features. React 19 is the version of React that now makes React Server Components stable, it introduces React Actions, and it also introduces React Compiler as a plugin. But React 19 is kind of the version, and these are kind of like small features in it.

**Nick Nisi:** Okay.

**Shruti Kapoor:** So we kind of think of them in that way. React Server Components was introduced around 18-ish. So they've been around for a while, although they weren't stable at the time, but now they're stable.

**Nick Nisi:** Okay. And there's some confusion too, because I almost think of those more as like a Next feature, just because of that being the only implementation right now... So the lines are blurred, is what I'm trying to say. Thank you for helping me to make sense of that.

**Shruti Kapoor:** \[00:43:56.10\] Yeah. You know, it's such a funny thing, because today I was leading the panel Future of React, and I asked the same question... And I said, "It feels like Next.js is kind of like the favorite framework that React is choosing... So how do you feel about Next.js being the place where all of the new features are coming?" And you're right, even for new developers, it can feel that all of these are new features, which is something I felt as well when I was just starting out with React back in the day, when React and Redux were like this coupled thing... And so I thought every React thing is actually a Redux thing as well. And I was like "React and Redux, they just come in a package together." But instead, they're actually two different libraries. So you're right, that can kind of give that impression.

**Kevin Ball:** So because I think RSCs have been around for a while, they're a little more familiar, but Actions is something new, that I'm not sure folks have heard about. Do you want to explain kind of what that is and what it gets you as a developer?

**Shruti Kapoor:** Yeah, so Actions is kind of the way you can write async transitions as a function. Basically, to simplify it, we all know forms, and we've been handling forms for a long time. But the only way that we've known to submit a form is by having a click handler. So we have a form, we'll have a button, and then we'll attach a handle submit to the form, or we'll have an on-click, and we'll attach a handle submit to it. That's the way we've known to submit forms. But now with React Actions, it is now letting you submit the form as an action. So now it's introducing this new DOM method called Action.

And so instead of now having a form submit, or a form on-click submit, you can just have a form action, and that takes care of submitting the form when you hit the Submit button, showing you pending states... So Actions, as a definition, are just functions that use async transitions, but really, their use is to help submit forms easier.

**Nick Nisi:** And this is all client side?

**Shruti Kapoor:** This is all client side, but Actions are also supported on the server. So you can also create server actions as well. Same idea - you create an action, you just define it as a server action, but it can be used on the client side, or it can be used on the server side as well.

**Kevin Ball:** Well, and I think one of the things you mentioned there, a word that I'm going to pull out, is transitions. Because I think submitting forms - we all know how to submit forms. But there's so many different states along the way. And I think, from what I've seen at least, they somehow smooth the way for showing those transitions.

**Shruti Kapoor:** Yeah. I think here, when I say transition, I specifically refer to stack transition hook, which was introduced in React 18. And with React 19, now you can actually have like an async function within the stack transition hook as well, which is also a change of React 19. And that specific bit is what React defines as kind of actions. But the question here is - transition within a form, I think is what you were referring to, is what are the different states of how a form is being submitted. So a form - you enter fields, and then you send it over to the server. And while you're sending, it's in sort of an appending state, as in the form data is being submitted, the server is going to verify and it's going to send that data back. So in that state, it's kind of in a pending state.

**Kevin Ball:** And do you use this to handle error conditions and stuff as well, or how does it work?

**Shruti Kapoor:** Yeah, so you can use that to handle error conditions as well. I'm trying to think if the hook actually gives you an error back... I don't think it does. But it can be used to handle error conditions as well.

**Kevin Ball:** Alright. So RSCs, Actions...

**Shruti Kapoor:** Compiler...

**Kevin Ball:** Compiler.

**Shruti Kapoor:** Which is a big one. Do you want to talk about that?

**Kevin Ball:** Sure.

**Nick Nisi:** Yeah.

**Shruti Kapoor:** So Compiler actually is a plugin that is introduced in React 19. I think one thing that people kind of confuse with is that React 19 comes with a compiler embedded within React 19, but it's actually a plugin. So you get React 19, and you can get React Compiler separately. It has been introduced together in the conference, so people kind of confuse that it's part of the package, but it's not. Compiler basically is the way React can auto-compile code for you, and auto-memoize code for you. Which basically means that as of now, the way we kind of optimize our code is by having used memos, used callbacks, React memo... Going forward with React 19 we don't need to do that anymore, because with the help of React compiler we'll be able to auto-memoize our code.

**Nick Nisi:** \[00:48:02.23\] And it's a plugin. How do you opt into that?

**Shruti Kapoor:** So you can opt into that by installing as a Babel plugin, and it gets part of like your WebPack config. And then once React Compiler starts looking at your file, it's going to auto-optimize it, and you don't need to do anything after that.

So once you've installed it, it's good to go. You can opt out of it, but to opt in, you don't need to do anything after installing it.

**Nick Nisi:** Okay. And you said a Babel plugin. What if you're using something like Vite, or...?

**Shruti Kapoor:** I think there is an option for Vite as well. Actually, no. I take that back. With Vite, it's also working. I have a Vite project, so it works perfectly. Just, a Babel plugin works perfectly with Vite as well.

**Nick Nisi:** Awesome. Okay, cool. And then there's also the use hook. Is that part of React 19?

**Shruti Kapoor:** Yes. Use is a really great one, because I feel like it's so confusing, because it sounds like a hook, acts like a hook, but it's not a hook. It's actually an API. And I think the difference between... Let's pause on that for a minute. So what use does is it helps you read resources. I think the way it kind of reads in code is very intuitive. So let's say that you have a context, let's say you have theme contexts; this is how you read current theme - dark mode, light mode. What you can do is you can say \[unintelligible 00:49:10.10\] and then your context provider, so theme context, and so now you're actually reading through a context provider by just using use. So you don't have to embed your code within the context provider. So that's really neat.

**Nick Nisi:** Oh, cool.

**Shruti Kapoor:** So you don't have to only have it within the components. You can actually have it somewhere as a hook as well. So it kind of behaves like a hook, but it's not a hook. And because it's not a hook, it doesn't follow the same rules of hook. So yeah.

**Kevin Ball:** So I have not dug into use, so I'm like live-exploring this now... So if I'm understanding correctly, it's a way to sort of pull in context without having to be in a nested component tree. So you can sort of compose contexts in different ways, rather than having to be purely hierarchical?

**Shruti Kapoor:** Correct. And it's a way to read resources, context being one of them. So context is an example, but promises are also an example. Promises sent by like a Suspense library is also an example.

**Nick Nisi:** So could it replace something like a React query?

**Shruti Kapoor:** I think React Query --

**Nick Nisi:** For at least simple use cases.

**Shruti Kapoor:** Yes, yes. I think for a simple use case like reading a context, or like reading a suspend rendered promise, yes. But React Query does a lot more than that. So I don't want to say yes, but... Yes. \[laughter\] For very simple use cases, I guess.

**Kevin Ball:** Well, and coming into it, it sounds like you can sort of put it in line in your component, but it's going to deal with an asynchronous thing...

**Shruti Kapoor:** Exactly.

**Kevin Ball:** ...and make React's rendering work all nicely with that, rather than having to embed that into like a use effect, or a callback, or something like that.

**Shruti Kapoor:** Yeah. So because it's like an API itself, you can have it within your component itself. You don't need to embed it within another hook. And because it's not a hook, you can also call it conditionally, so you can have like multiple hooks at the top, and then you can have... Because it's an API, it's not a hook, you can have it at the bottom somewhere in the component as well. So you don't need to have it at the very top.

**Kevin Ball:** Interesting. So in some way - I'm now speculating, but does it kind of... It hooks into the -- see what I did there. It hooks into the rendering path, right? So that your React component rendering may be suspended as it waits for this thing, or it's going to do a placeholder, or something like that?

**Shruti Kapoor:** I don't know the inner workings of use API, to be honest, so I can't say if it actually suspends the rendering path... But because it's waiting for an async promise to come back, I want to say yes, but I am not sure how it works in the background. So I don't know.

**Kevin Ball:** What happens on your screen while you're waiting for that resource to come back?

**Shruti Kapoor:** I don't know. Good question. I mean, it's a context, what I've checked, and I haven't really seen any loader screen or anything like that. It's been pretty instantaneous. I don't know. That's a good question.

**Kevin Ball:** \[00:52:04.13\] Speaking of loader screens, I think... Now, I'm still trying to remember exactly what was in React 19, but there was some sort of drama around something related to Suspense, or things around that. Where did that end up falling out?

**Shruti Kapoor:** Yes, there was concerns about Suspense kind of basically breaking the way it works right now. So basically, what happened is that Suspense components, if you have like four different components in a Suspend boundary, they would all kind of resolve, and they would all kind of resolve in an async pattern, so they would all resolve at their own time. However, with React 19, what was happening - and I think this was because of the compiler, if I'm not wrong... This was actually causing React -- this was also causing Suspense to kind of act as a waterfall. So if you have like four components, the first would finish, and then the second, and the third, and the fourth, and so it was taking incredibly long. This PR has now been reverted, so it's no longer part of like React 19 anymore, so that problem has been fixed. Or reverted back.

**Nick Nisi:** So kind of a rough transition into another topic, but we've been talking a lot about AI... We've heard a lot about it at this conference, we've seen a lot of great examples, and we've been discussing with other folks about like learning, and coming up to speed with AI in the world now. And I'm just curious, since we've been talking about these brand new features of React 19, for React 19 and for other frameworks as they evolve and come out with new features - do you see their adoption being delayed because LLMs might not know about the features in React 19 for a little bit?

**Shruti Kapoor:** Short answer, no. \[laughter\] Long answer... Let me put it this way - I think the people who are using LLMs have a different use case in mind, as compared to the people who are adopting these features. So I'm guessing when you're thinking of LLMs, you're thinking of tools like Cursor AI, you're thinking of tools like Copilot...

**Nick Nisi:** Or just asking ChatGPT like "Hey, how do I use the use hook?"

**Shruti Kapoor:** Yeah. So I inherently don't trust these tools to kind of give you the best optimized way of rendering your component... And I think that's true for most of these tools. They are a good starting point, especially with Cursor, for example - it's a good starting point to like write out a skeleton code, and from there you can optimize your code, and make it look nice, make it correct. Most of the times as a developer you have to validate your code. And you should validate your code if you're getting any of the code out of these AI tools.

**Kevin Ball:** You need to validate code coming out of me, too. \[laughter\]

**Shruti Kapoor:** Absolutely. And that's why we have PR reviews. However, I think because it's a starting point, it's not the final product, or it's not the final state of your code, I don't think the adoption will be delayed, because the people who are building these components, when it comes to optimizations, they would reach out to like React Compiler, or like use hooks, and things like that to optimize, instead of just waiting on what the AI has given them. At least as of now. So even if React 19 is introduced tomorrow, I do not feel that it will actually delay us.

**Nick Nisi:** I agree. It was a rough transition. \[laughter\]

**Shruti Kapoor:** But good question, actually.

**Nick Nisi:** It's on people's minds, because that is kind of now the first place I go when I have questions, just because I don't have to add a lot of... I don't have to like think in terms of how "Would I google for this?" I can just throw the context that I have at it and it can kind of figure it out.

**Shruti Kapoor:** Use the information out of it.

**Nick Nisi:** Yeah.

**Shruti Kapoor:** See what I did there? \[unintelligible 00:55:42.12\]

**Kevin Ball:** Yeah, there we go. Well, so how are you using AI in your codebases?

**Shruti Kapoor:** I am using it as a tool. \[laughter\]

**Kevin Ball:** I mean, it's perfect for use because it's really slow, so you're going to have to wrap it in a promise.

**Shruti Kapoor:** \[00:56:01.11\] There you go. I love these puns. I am using Cursor AI a lot. I'm a big fan. You feel so happy about it...

**Nick Nisi:** This is our fourth interview today, and everybody has said that.

**Shruti Kapoor:** Really?

**Nick Nisi:** He uses it all the time, and I am just sitting here like "What's Cursor...?"

**Shruti Kapoor:** There's other tools as well, which kind of like augment as doing the same thing... And I think why I really like it is because it's reduced my time to write code so much. I think I just posted like two days ago, I was building a side project, and typically that kind of stuff would take me like a week to ship out, but with the help of Cursor, I was able to get something up and running within two days, and even bring it to a demo-able state. And that is so awesome, just having the ability to like quickly refactor your code out, tell the chat command "Hey, I'm getting this bug. This is the bug." This is something that you would typically do with ChatGPT before, but now having this code tool too, which is right there, it has all the context, I think it's increased my performance a lot more.

**Nick Nisi:** Yeah, that makes sense. I just wish they would have forked NeoVim rather than VSCode. \[laughter\]

**Kevin Ball:** So we aren't at CursorConf, as much as it seems like we might be... We are at ReactConf. I'm kind of curious, how's your experience of the conference been? What is it like for you coming to something like this?

**Shruti Kapoor:** Yeah, it has been a really wonderful experience. I think the audience has been really receptive to the new features of React 19. I feel like when a new feature comes out, when a new version comes out, people have a lot of resistance to it... But I've seen a lot of excitement in the audience members about the new features. A lot of the talks have been amazing, so I've had a really great time. I think one of the best things about coming to a conference is being able to talk to people one-on-one, and hanging out with your friends, but also meeting new people, which I feel like this conference has been really great at, because I've met so many amazing people. So a very positive experience... It's been wonderful. And having this kind of backdrop...

**Kevin Ball:** I know, right?

**Shruti Kapoor:** Where else can you get that...?

**Kevin Ball:** So you mentioned meeting new people, and I think one of the fun things is we've met both very experienced people, and some folks who are brand new to JavaScript. And they're kind of all here. And I know one of your interests is around how you kind of help these people who are newer to JavaScript... I won't say necessarily new to coding, but newer to JavaScript, or newer to the tech industry, and help them bring along. So I'm curious how you think about kind of that community building and mentorship aspect of things.

**Kevin Ball:** Yeah, I feel like when we are going through a hard time, we often feel like we're kind of alone in this, and nobody else is going through the same stuff that we're going, and we're probably like an imposter, we're not well suited to be here, and everybody else is amazing... And I think one of the things that I've been doing a lot with the Fireside Chats that I host is bringing people from the community and talking to them about the challenges that they've been facing as well, but also sharing this kind of like vulnerable side of people, who usually are put on pedestals, and showing people that there is a human side to everybody, and everybody's kind of been going through challenges themselves.

So kind of showing -- I feel like when we go through our struggles, we often look at these awesome people who have so much experience, and we think "Oh, they've always been successful. There's no way that they feel like an imposter." But then when you talk to folks, and you realize that they feel like that pretty much every day, every week... I think that's really a humbling experience and an eye-opening moment. For my mentorship experience, I've always tried to be like that empathetic coach, and telling people that you're not alone, and if you're facing a problem today, most likely it's true that somebody else is facing the same problem as well. So you're not alone, no matter what you're going through.

**Nick Nisi:** \[01:00:00.24\] Yeah, I love that. I feel like an imposter right now. \[laughter\]

**Kevin Ball:** It's like getting behind the social media view of it.

**Shruti Kapoor:** Exactly.

**Kevin Ball:** It's like "No, they're just as dysfunctional as I am."

**Shruti Kapoor:** Exactly.

**Nick Nisi:** You don't want the Instagram, like, perfect... You want to see "Oh, this was actually a lot of work." Or "I was really stuck on this typo for a week, and I had no idea. It was one line", you know, or something...

**Shruti Kapoor:** Yeah, exactly. You were missing a semicolon.

**Kevin Ball:** You should have asked Cursor. \[laughs\]

**Nick Nisi:** After this, okay... \[laughs\]

**Shruti Kapoor:** Maybe you did not have the most updated LLM, so...

**Nick Nisi:** Yeah.

**Shruti Kapoor:** But like you were talking about this, you feel like you're stuck on this one line of code for so long, and you feel like "Oh my God, I'm so stupid." But then when you talk to your staff engineer, and they're like "Oh yeah, I couldn't finish that feature for like two weeks, because I was stuck on that one line of code", you're like "What?! You did that, too?"

**Nick Nisi:** \[unintelligible 01:00:50.23\]

**Shruti Kapoor:** Yeah, exactly. You'd be like "What? That happens with you, too?"

**Kevin Ball:** Yeah, I would wager there's not a single developer out there who has not felt stupid about their code.

**Shruti Kapoor:** Exactly. We are not our code. We are much more than that.

**Nick Nisi:** Yeah, for sure.

**Shruti Kapoor:** We're not the code we write.

**Kevin Ball:** Or the code we prompt the LLM to write.

**Shruti Kapoor:** Yes.

**Kevin Ball:** Oh, dear...

**Nick Nisi:** So what keeps you coming to conferences? Is it the people, the connections? What is it specifically?

**Shruti Kapoor:** I think one thing that I really like about conferences is that it kind of gives me a deadline to learn something.

**Kevin Ball:** Conference-driven development.

**Shruti Kapoor:** Conference-driven development. Exactly.

**Kevin Ball:** Yes! I'm glad I'm not alone.

**Shruti Kapoor:** Exactly. Today I was giving a talk about React 19... I've given this talk before, but something different that I did in this talk - I added a bit more context about React Compiler. And so that encouraged me to learn about it, understand it, and share it with the world. And I think that really helps me stay up to date with React, with the community, the frontend, whatever. So I really like that it helps me still be active, and still enjoy my job, my full-time job, and not feel like I'm in a rut and just moving boxes every day on the screen... So I'm actually doing something worthwhile. And I think sharing something with the world, and people coming back and saying what I shared was really helpful, and they learned something new - I think that is really rewarding.

**Kevin Ball:** On the note of staying motivated in your job, what are the technical things that are really exciting for you right now?

**Shruti Kapoor:** At my job or outside of my job?

**Kevin Ball:** Your call.

**Shruti Kapoor:** So one of the things that I'm working at Slack is building a component library -- not library, building a component that can be used all across Slack. So I work in the design systems team of Slack, and specifically focusing on accessibility. Accessibility is something that I had not worked on before, and I have been in the industry for like a decade. And now at this point learning about accessibility and what it takes to build an accessible component from the get-go itself is such an eye-opening moment. I feel like there's so much that goes behind building an accessible component, and I think it has really made me a much better developer, because now I'm thinking about "This component needs to be accessible from a visual standpoint, from a physical standpoint. People with screen readers need to be able to use it. People with keyboards must be able to use it. There are people who are using assistive technology who must be able to use it." So I feel like I'm finally able to use my technical skills to actually make somebody's day-to-day life better, and that really excites me.

**Nick Nisi:** Yeah, I love that too, and I love the vulnerability in saying "I've worked in an industry for 10 years and really haven't looked into this much." It just goes to show how broad this field can be, even when you're just working on specific frontend pieces. You really don't truly dig into something until you actually have to, because there's so many things to learn. You have to focus. And thank you for sharing that, because I feel the same way, and I'm always "I'm pretty well into my career and I haven't done this, and this", and it's just because it has never come up in my specific scenarios.

**Shruti Kapoor:** \[01:04:07.27\] Right. Absolutely. And I kind of touched accessibility in my first year of development, but what I'm doing at Slack right now, versus what I was doing back then - I think it's so vastly different. And the world of accessibility can be really complex as well. And you're right, until you actually work on something, you don't really understand it fully... And I think we just have to cut ourselves a little bit of... Slack... \[laughter\]

You know, the world of frontend development is so fast, and changing, and it's so vast, you cannot keep up with everything, and you will not be an expert on everything... So I think just being okay with that also takes a lot of strength, but it's okay to not know everything.

**Kevin Ball:** Well, and if you're doing it at the design system layer, most of the developers that are going to use that won't even have to understand all the different nuances that have gone into making it accessible.

**Shruti Kapoor:** Absolutely.

**Kevin Ball:** They just pull in your component.

**Shruti Kapoor:** Exactly. And that's the goal. That's my goal. I want to create a component that they can just embed and get those accessibility powers out of the bag. They don't have to worry about it. As long as they're providing the right attributes, this will be good to go.

**Kevin Ball:** Will it be exposed via the Block Kit UI?

**Shruti Kapoor:** It will not be. You can use it, but it won't be exposed. It's going to be an internal component.

**Kevin Ball:** Oh, dear. Okay.

**Shruti Kapoor:** Good question, though.

**Kevin Ball:** You can tell I've been doing stuff in Slack... I have more questions for you later.

**Shruti Kapoor:** Yeah, okay. \[laughter\]

**Nick Nisi:** I'm just curious, kind of shifting gears again...

**Shruti Kapoor:** Rough transition...!

**Kevin Ball:** Hey, it's late, alright?

**Shruti Kapoor:** No problem at all. It's late for me, too.

**Kevin Ball:** And we're showing our internal imposters of just like "Wait, okay..."

**Nick Nisi:** I'm just curious your thoughts on TypeScript versus JavaScript.

**Shruti Kapoor:** Oh, spicy take. Spicy take. Okay, I will be very honest... Before starting TypeScript, I was like "Ugh, I don't need Java in JavaScript..."

**Nick Nisi:** Yes. Yes.

**Shruti Kapoor:** I think the entire type thing, and tightly typed, all of that kind of pissed me off about it, especially because JavaScript was supposed to be loosely typed. And that's what brought me to JavaScript. Now, having worked with TypeScript for around three years, I'm a big fan of TypeScript, especially when I'm working with people outside of my team, when it's just not me, there's other people as well... And the reason being TypeScript gives you a contract out of the bat, so you don't have to specifically provide it. And it's become a lot easier to skip errors that could have been easily occurring in your codebase, because of even simple things like undefined, or null. So it's given that type safety to you, which is really helpful, especially when working across teams.

**Nick Nisi:** Yeah. 100%. The reason I used to use the Chrome debugger, for example, was to figure out "What am I actually passing here?" And TypeScript kind of eliminated that for me.

**Shruti Kapoor:** Right.

**Nick Nisi:** I'm curious - you mentioned the contracts that it helps you to keep and create with your team. Was that the main thing that made it click? Or was there some specific thing that was like "Oh, okay, I do get this now."

**Shruti Kapoor:** Yeah. I think the contract was a big one, because building a component that needs to be used by other people, I think it's important for me to make sure that, for example, a prop is going to be supplied. Let's just say \[unintelligible 01:07:30.06\] label, for example. If I'm expecting this component to be accessible, I'm dependent on you as a developer to provide that attribute to me. And how can I make sure that that happens is through TypeScript types. So I can provide that as a required attribute. So that has really helped me kind of understand why TypeScript is so popular, especially when people are working across teams. So yes, I think type safety is definitely one of those. The contract is definitely one of those.

**Kevin Ball:** I like that, actually, as an example too, around if you want to make sure that the thing you're doing is accessible, instead of having to remember, as a developer, and putting that burden on the developer, "Oh, you've got to remember to set this, and you've got to set this, and you've got to set this." Bake it into the type system.

**Shruti Kapoor:** Exactly.

**Kevin Ball:** It's there. If it's not there, it won't compile.

**Shruti Kapoor:** \[01:08:15.02\] Exactly. Yeah. And it gives you that -- you don't even have to wait for your code to get pushed or anything, it's right there. You see it as you type, that you need to provide this required attribute, which I love.

**Nick Nisi:** A hundred percent.

**Kevin Ball:** And typed HTML.

**Shruti Kapoor:** \[laughs\] Oh, wow. Okay. We're going into the Java territory of JavaScript as well. \[laughter\]

**Kevin Ball:** Ah, dear... Well, thank you, Shruti, for coming. I think we can tell we're all a little punch drunk at this point, and ready to get on to the social parts of the conference... Is there anything you would like to leave folks with coming out of this? Things that you'd like them to take away.

**Shruti Kapoor:** Yes. Two things. I think a lot of people are very interested in coming to conferences, but also kind of see themselves speaking at a conference, but sometimes they feel overwhelmed. Feeling that that might be a step for a later date. I just want to inspire people and tell them that the hurdle to getting there is a lot lower than you feel. So you might feel like you need to have a polished topic, you might need to have the bleeding edge technology, or you need to be really well versed with the stuff that you're about to do... But I can tell you that if you submit a topic, you have three months to prepare for that topic. You will be able to come up with a talk.

So I want to tell people, giving a conference talk is a lot easier than you think, so apply for your first conference talk. It's easier than you think, and you can do it. I believe in you. There's a lot of conferences that happen online as well, and they're always looking for speakers. There's a lot of meetups, which is a really great place to kind of start speaking at conferences as well. So that's number one.

Actually, adding one more thing to that - there's a few tips that I've given on my YouTube channel, which... Can I link a video as well?

**Nick Nisi:** Mm-hm.

**Shruti Kapoor:** Okay, so I'll hand the link over to you, and I think that will be a nice video for people who are interested in speaking at conferences, but have that little bit of imposter like "Oh, I'm not ready yet." So I think that will be a really nice video for folks.

The second thing I would say is that there's a lot of debate on whether or not React is still relevant, still the framework of a library that people should learn, especially coming out of bootcamps, especially with AI tools, and people feeling like maybe they don't need to learn any framework or library. I would say React is still relevant. It's still the number one technology that people are looking for when they're hiring, so definitely learn React. There's a lot of great courses out there. A lot of free content on YouTube. I also have a course on O'Reilly, which I'll give the link as well... But definitely learn React. It's a really great way to ensuring that you have a secure frontend career at least for the next five years.

**Nick Nisi:** I agree.

**Kevin Ball:** Well, and if you get good at it, you can take those concepts anywhere.

**Shruti Kapoor:** That's true.

**Kevin Ball:** If you get really good at React, right now that's the best way to get a frontend job. And if in five years the answer is Svelte, most of those core concepts that you learned in React will translate.

**Shruti Kapoor:** Absolutely.

**Nick Nisi:** We talked to Tom Occhino earlier today about just how React was there, but it's kind of influenced the whole industry, in terms of like the new frameworks that are coming out are still creating the same core concepts, component-based development, and things like that. So it is very transferable.

**Shruti Kapoor:** Absolutely. Yes, I agree.

**Kevin Ball:** Alright. Well, this has been Shruti Kapoor.

**Shruti Kapoor:** Thank you so much for having me. This was so wonderful.
