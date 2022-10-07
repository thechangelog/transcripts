**Daniel Whitenack:** Welcome to another episode of Practical AI. This is Daniel Whitenack, I'm a data scientist with SIL International, and I'm joined as always by my co-host, Chris Benson, who's a principal AI strategist at Lockheed Martin. How are you doing, Chris?

**Chris Benson:** Doing great, Daniel. How's it going today?

**Daniel Whitenack:** It's going good, it is a snowy day here in the Midwest. Last night we lost our power at our house, but it's back now... So I spent the night putting logs on the fire, which wasn't so bad.

**Chris Benson:** Oh, boy... At least you got your power back, and you're not podcasting on the generator...

**Daniel Whitenack:** Exactly, not podcasting on the generator. Internet is back for work, and all things are good there. I'm guessing it's not quite the same in Georgia, but...

**Chris Benson:** By Georgia standards it's quite cold here, actually, so yeah... Definitely we're going "What happened?!"

**Daniel Whitenack:** Since it's cool outside, it's a good day to stay inside and --

**Chris Benson:** We've got a cool topic, don't we?

**Daniel Whitenack:** Yeah, yeah... That was a good one. And learn about some cool new stuff that's happening in the AI world, and particularly around machine learning and AI tooling and apps. Today we have with us Adrien Treuille, who's co-founder and CEO at Streamlit. Welcome, Adrien.

**Adrien Treuille:** Hey, thanks so much for having me. I'm thrilled to be here.

**Daniel Whitenack:** Yeah. So maybe before we jump into machine learning and AI apps and all that goes along with that, could you just give us a little bit of an idea about your background and how you ended up where you're at now?

**Adrien Treuille:** Sure. I started off my professional career as a professor at Carnegie Mellon, and I was working on large-scale simulations of smoke and water... And so got to see really the complexities of running these really long-running computations; it's very similar to AI in that way.

**Daniel Whitenack:** And was that for environmental sort of applications, or just for better understanding how to model those things, or...?

**Adrien Treuille:** Yes... So our application domain was computer graphics, actually, so basically making realistic virtual worlds indistinguishable from reality.

**Daniel Whitenack:** Gotcha.

**Adrien Treuille:** And the work that we did though was actually quite fundamnetal. It was really about how do you model the fluid equations, for example, on a computer, and what sort of efficiencies are made possible by the physics.

**Daniel Whitenack:** \[04:10\] Awesome, yeah. That's really interesting. Did that kind of lead you naturally into the whole machine learning and AI world, or was that something you developed an interest in later?

**Adrien Treuille:** We were actually pioneering AI-like techniques in the space of fluid simulation and cloud simulation... So we did a lot of so-called data-driven simulation, which means you capture a huge amount of data about how some phenomenon works, and then you can build an efficient model. So it really is a form of machine learning. So yeah, worked on that... And then also built some pretty large communities. I was the founder of Foldit, which was a protein folding video game, and then EteRNA, which was an RNA folding video game in collaboration with Stanford.

So I had a sort of weird career, which was a mixture of doing really large-scale computing on the one hand, and then also building these online communities on the other. So those came together in Streamlit.

**Daniel Whitenack:** The communities that you're talking about, this is where -- and I think I've read about this before... It's the idea that "We've got this really complicated problem and we want people to play this game to explore the solution space, in some ways"?

**Adrien Treuille:** That's exactly right.

**Daniel Whitenack:** So these were non-technical people interacting with your application, that had some sort of scientific or technical implications...

**Chris Benson:** And actually, could you provide just kind of an example of that, just to make it real?

**Adrien Treuille:** Yeah. An example is in the game EteRNA, which I recommend everyone just go and check out, eternagame.org - super-fun and interesting. What we were doing was designing RNAs - these are tiny molecules in the body that can, for example, switch between two shapes, under certain circumstances. This is actually the mechanism by which a lot of so-called "computation" happens in the cell.

So being able to master this is really a fundamental building block of building next-generation therapeutics... And it turns out that players playing this game - some of them have really developed an amazing technique and intuition about how to design molecules like this... It's actually really remarkable, and we've published papers in top journals based on discoveries by players, so... It's really sort of remarkable. Anyone can join and do the tutorials and learn how to do this.

In a way, I do see these crazy scientific computing games as precursors to Streamlit, because what we did was sort of translate one world into another... Computing, basically. In Foldit and EteRNA we were sort of translating the world of molecules and biomolecules into a game. And in Streamlit, which we've just released, we are essentially translating the world of app development into sort of the language of machine learning.

I think in all of these cases, as soon as we released it, the community lit up and just was so excited... And I remember before the podcast here just saying "Half your tweets are about Streamlit", and I think it's because it's cool to give people new powers they didn't have before, and just sort of act as intermediary between two different worlds.

**Daniel Whitenack:** Yeah, I've always had a desire personally to get my hands dirty with front-end engineering, but at the same time I've always been so busy with other things that I'm like "Well, my stuff is cool", but in a lot of ways what you're doing on the back-end is totally transparent, or actually should in many ways be transparent to users... But always having a desire to create cool app things... I've never really got much into that world, other than random HTML or CSS sort of task... So yeah, I definitely could see it is a new super-power that people probably wish that they had, but there's a lot of barriers there, I guess.

**Chris Benson:** \[08:24\] It's been kind of a weak point, as people really try to get into this space in terms of AI technologies, and make them meaningful in what they're doing for work, or their life, or whatever, and being able to connect that in through apps, and stuff - it's been a huge area that needed attention, and it sounds like Streamlit is very much focusing on that.

**Adrien Treuille:** Yeah, and maybe for the benefit of your listeners who haven't heard of it, I'm happy to also give a really brief description of what it is... Demistify it.

**Daniel Whitenack:** Yeah, please do it. I think this would be a great time for that.

**Adrien Treuille:** Yeah. Basically, Streamlit is an app framework for machine learning engineers and data scientists; we were machine learning engineers, and so we took the starting point of what we saw as the machine learning engineering workflow, and we asked the question "How can we make a sort of machine learning script into an app as simply as possible, so that it basically feels like a scripting exercise?"

So what Streamlit is - it's just a package that you can install through pip, and it gives you a bunch of functions... And those functions - you can just interleave an existing ML code with these functions, and they essentially make things parameterizable, they do a little bit of layout, and they turn your code into a beautiful app... And it's really true.

As you pointed out, there's a lot of interesting tech just below the surface, that makes that possible. We have a multi-threaded server that starts in the background, there's WebSockets shuttling information back and forth to the browser, there's a whole browser app that's interpreting this and creating what you see on the screen... But all of that kind of goes away from the user's perspective, and you just get really a couple dozen magical Python commands that transform a machine learning script or a data science script into an app that you can use and share with others.

**Daniel Whitenack:** Yeah, that's really a great context. And as you mentioned, there's a lot to dig into there... Maybe next we could set the stage -- you've talked about the RNA stuff that you did, and we've talked about what Streamlit is... Maybe we could dive into why creating apps or these tools or interfaces is something that is relevant to particularly machine learning and AI practitioners. Why isn't it just the case that "Oh, machine learning and AI people should just write their code in Python scripts, and then pass things off to front-end engineers to make something pretty." Why is there this need to have data scientists or AI practitioners create apps themselves?

**Adrien Treuille:** Yeah, that's a great question. The first implicit observation is that they do need to create apps, and this is something that I've seen -- you know, after Carnegie Mellon I went to Google X, and then I went to Zoox and built self-driving cars... And every single ML team I've seen, you end up creating apps. I'll give you some examples from the self-driving cars space. We had an app that allowed engineers to run simulations; we had an app that allowed them to search all of our simulations, and compare two different simulations for different parameters. We had API endpoints that you could go to and see subsets of all the data that we collected, and look at images...

\[11:51\] So there was actually really this constellation, this sort of application layer that was built, that was sort of a focal point. It was like the bonfire of the team. It's where we all got together and communicated and chatted. So that is actually a really crucial part of the ML workflow - building these internal apps, especially in a non-trivial project.

Similarly, an important thing for machine learning and data scientists is to build apps for external consumption. Often other teams need to consume models in various ways, and they sort of an application layer to do that. We're in talks with a very big company to use Streamlit in production to allow their huge sales force to make interesting recommendation decisions. So it's really both for internal and external users.

Then the question is "Well, why don't you want ML engineers writing in Flask, for example, or using an app team?" and the answer is that those things really slow down the cycle. For example, a tool that we used all the time at Zoox was the scenario replay tool, which was if the car did something unexpected, we would wanna be able to go back and see every single sensor reading and everything all in one web page, and scrub through it, for example. That tool required new features every week... \[laughs\] We'd be developing a new sensor - that had to be displayed; it had a different dataset for vision, and we had to be able to switch between them etc.

So these tools require constant new features, so it's really empowering to be able to create them yourself easily and beautifully, and then directly iterate on them and directly serve them to your users, be they other members of your team or other people in the company. So that's really the power of being able to write apps quickly and easily, and in a flow that you might expect, and I think that's why the community has been so receptive.

**Chris Benson:** One of the questions I wanted to ask upfront is as you're doing these GUI things, why not just use Jupyter, if you're a user out there, given the fact that it is so broadly deployed, and it's kind of become the standard way that people are starting out? Other than the fact that you might wanna show things to non-technical people, recognizing that not everyone looks at a Jupyter Notebook. What are some of the advantages of doing it this way? Could you talk a little bit about that, about using it internally?

**Adrien Treuille:** Totally. I would say that Jupyter -- first of all, we ourselves use Jupyter alongside with Streamlit, so they don't exclude one another at all. Jupyter, we feel, is centered on the EDA workflow - exploratory data analysis workflow - and it's a fantastic tool for that... And then it sort of branched out into making apps a little bit more, being an expository tool of various kinds... And those are all great, adjacent use cases. Streamlit was really founded on the idea of building interactive apps really easily. So we have a different workflow; I think it's very, very simple, it's very lightweight, it's super-easy to understand, and it's slightly difficult to describe. You just have to try it. In essence, we allow you to sprinkle these interactive widgets throughout your code, and then we sort of organize it into an app very easily. I think it's that simplicity that the community has really responded to.

**Break:** \[15:13\]

**Daniel Whitenack:** Adrien, you mentioned - getting more into Streamlit itself - that Streamlit is an app framework for machine learning and data science teams. I was wondering if you can unpack that a bit for people that maybe are not familiar with front-end engineering and creating apps. When we're talking about an app framework here, for example, are we talking about just something that's going to be like a UI that's running in your browser? Is this having anything to do with mobile? What is the app that we're talking about, and what does it mean that it's an app framework? I think you've mentioned some things about components, and stuff like that.

**Adrien Treuille:** Yeah. So what it means is that you can write a Python script with any kind of code that you want - NumPy, SciPy, PyTorch, TensorFlow - and then you can add these magical Streamlit commands. St.write lets you write anything to the screen. St.slider lets you put a slider on the screen. And you sprinkle these commands in your Python code... And what you have is a Python file that instead of saying python.file, you say "streamlit run that file", and that command sets up a server, opens up a browser, and connects the two. That app is now running locally on your laptop, or wherever you're running it. It could be an EC2 instance. It's actually an app that you can look at on mobile if you go to that URL.

It looks nice on mobile too, so it's both web and mobile in that sense... And it's something that you can share with others in your company, and give them an interactive view into whatever it was you were working on. So it could be as simple as "Here's a model. Play with the inputs and look at the outputs. I've just created this app in five minutes, just to show you." Or it could be something really sophisticated, like "Let's build an app to organize all of our data and all of our models, and allow us to run the latter on the former", in arbitrary subsets, and search engines, and all this stuff. So you can go really crazy with it.

So that's what an app is, and it's fundamentally basically just a Python program running on a server somewhere.

**Chris Benson:** I'm trying to think about workflow, and stuff... Is Streamlit mostly for prototyping, or how far can you take it? And as part of that, a couple of things - how would you integrate it into a small team environment, and then conversely... On the other side you also mentioned you'd been working with a larger client - how does it work in production for a larger team, in an enterprise environment, and would it replace maybe in that kind of context some front-end engineering that you might otherwise have in that enterprise?

**Adrien Treuille:** Yeah, that's exactly right. Really in a small or a large organization, the first step is just pip-install Streamlit. It's an open source project with a very permissive license. I don't think any organization would object to that... And you can play with it locally on your laptop and just see how it feels. I encourage people to do that, it's actually really fun, and extremely simple to learn.

Then, once you get to something, the next step might be "Look over my shoulder", show someone else in the organization, "Look at this thing I created." The next step is deploying it. Right now there's a bunch of articles in Medium - you can just google for them - which explain how to deploy Streamlit on EC2, or Heroku... It's a little bit of a process, to be honest, but you can set up a little server somewhere and then tell other people to point to it, and lo and behold you now have an app that can be used in the organization. So that's the existing workflow.

\[20:03\] What we are working on with both large and small clients is something called Streamlit for Teams. What that does is it basically makes the deployment completely painless. That's the enterprise version. And it also adds a bunch of really interesting enterprise features - load balancing, greater scalability, authentication logging, those kinds of things.

**Chris Benson:** I wanted to follow up real quick on deployment, just while you're there... What does the mobile picture look like? Or is there one at this point? Is that something you're still working on?

**Adrien Treuille:** Yeah, so the mobile picture is that you deploy an app in one way or another, and so you would have to have either a VPN, or a public IP address... And then if you point someone to that app, they will see it either rendered correctly on a browser, or rendered correctly on a mobile device. An example of such an app that one of our users created is called Awesome Streamlit. It's basically a collection of cool scripts and tricks that people have figured out in Streamlit. It's another sort of separate open source project; you can do pull requests against it, and stuff... And it's an app that just runs on the internet and anyone can go to it.

So if you wanna see the mobile experience of Streamlit, just google Awesome Streamlit and play with it, on a mobile device or on a standard web browser. So that's the mobile story right now.

We don't have any way of packaging a Streamlit app into an iPhone app or something like that yet. It's a really cool idea though... \[laughs\] Maybe we should do that.

**Chris Benson:** Yeah. Cool, thanks.

**Daniel Whitenack:** So I'm wondering -- we've had people on the podcast in the past, and I know there's probably people that are listening that are familiar with the R world, and Shiny...

**Adrien Treuille:** Yup, totally.

**Daniel Whitenack:** ...and I always felt like there was the Shiny thing with R, that seemed cool and similar in some ways at least maybe, and there wasn't a parallel that at least I knew of for Python. If people aren't aware, Shiny has this ability to help you build apps around your R scripts, and that sort of thing... So I was wondering if there are actually some parallels there, or if the end goals of Streamlit are slightly different than Shiny, and if so, how you see all that.

**Adrien Treuille:** Yeah, so actually Shiny was a big inspiration for what we're doing... And indeed, when we were building the first iterations of Streamlit, one thing that we heard over and over again was "Why is there no Shiny for Python?" And so that was really kind of like a guiding light as we were developing Streamlit.

I would say that there is a fairly significant technical difference in the implementation, in that Shiny is based on wiring these callbacks, and Streamlit is actually based on a more declarative data flow model.

I think that the user experience of building apps in each is quite different... But certainly the space that they fill in the ecosystem - I think there are huge parallels. We would be really honored to be considered the Shiny of Python.

**Chris Benson:** One of the things we mentioned earlier was seeing Streamlit in our Twitter feed so much in recent weeks, and -- I guess it really seems like Streamlit kind of burst onto the scene with tons of existing support, a lot of attention... And you had mentioned that there were organizations like Stitch Fix, Uber, Twitter, that are using Streamlit. How did that happen - at least I guess from our perspective- so early on? As people became aware of it, you already had major uptake on the platform.

**Adrien Treuille:** Yeah. Basically, what happened was a year ago Streamlit was more or less a solo programming project of mine... And my mom was like "You should try to make a business around this if you're gonna spend so much time on this." I actually was unemployed at the time... And she was like, "It's impossible. You can't do it."

**Daniel Whitenack:** That's a good mom.

**Adrien Treuille:** I know, I know. She encourages her kids to follow their dreams. I guess she could have said "You should get a job." So anyway... \[laughter\]

**Chris Benson:** You made your job there. There you go.

**Adrien Treuille:** \[24:04\] Yeah, yeah. I started to realize that there might be a business model around this that made sense... But even in those early days, before there was a business model, I was showing it to my friends, and people were excited about it. I was a professor at Carnegie Mellon, and at Google X, and stuff, so I'm pretty -- I have a social network that stretches into the ML teams at all the big Silicon Valley companies... And so just by virtue of showing it to people, and in some cases them showing it to their friends, we built a little community of people that are using it, and at these very well-known companies.

They were a little leary, they were like "What's this thing? Is it open source? Are we allowed to use this in our company?", but they were also excited about it. That was really the thread that carried us through the initial seed raise, and I think the investors sensed our excitement, and our users' excitement, and then over the past year we've just been more or less listening to them and building features... And we waited a little bit, until we thought it was cool, and then we released it.

**Daniel Whitenack:** As you were kind of taking what was then your personal project around, and showing it to people, and talking about it, and talking about the need there, and sensed the features that the community has been asking for, and other things, has anything surprised you in terms of what people really want a lot, versus things maybe that you thought would be important, but weren't as important? Has anything surprised you in that way?

**Adrien Treuille:** Totally. The big one actually is really this Shiny for Python thing. The original version of Streamlit was way more focused on just visualizing code, actually... So to the extent that there was interaction -- you know, we had this really cool hot reloading feature... So to the extent that there was interaction, it was because you were editing the code, and you could see things interactively changing on the screen, which was actually super-cool, and very much at the core, the fun of Streamlit.

But people basically said "We want apps." And I resisted it, actually. I said "This is a different product definition. We don't know how to do this right." And finally, the community overpowered us, basically, and we sat down and really thought deeply about how this would work. And in fact, we looked at every other app framework we could get our hands on, and created this giant 70-slide deck of how they all worked - Shiny, and Plotly dash, and all these other kinds of things. Then we built what we thought it should look like.

It was kind of a leap into the unknown, because I really wasn't sure it was gonna be the kind of magical experience that I thought Streamlit needed to be. And we just did it, and we showed it to people, and they were thrilled. Actually, we were huge users of Streamlit, so we built all of our dashboards and all this internal stuff into Streamlit...

I remember one of the engineers being like "Streamlit is really fun!" \[laughs\] And I was like "I know! Isn't that weird? It's really fun." It's almost like we discovered this thing, rather than built it. And then we were like "This thing is awesome." So that increased our excitement, basically. And it was being well-received by the user groups... So we really did have a nice community by the time we launched, and we also felt like we had confidence -- there's a lot of things that we wanted to improve a lot, but we had confidence that people could really use it.

**Chris Benson:** I love that story. You start off by scratching your own itch, and then you were building something that you and the people you were interacting with find fun, and useful, and exciting, and getting on top of that... And then on top of that - Daniel and I both come from software development and we're big, big open source advocates; we love the fact that Streamlit is open source, and wanted to understand what was the economic model behind Streamlit, and who is supporting it in that open source context, and who's developing on it and contributing to it at this point? What does that open source side of the business look like for you?

**Adrien Treuille:** \[28:17\] Yeah. There is sort of a guiding principle that we have borne in mind, which is that -- let me first say that the way Streamlit works is that the library that you download is completely free and open source, and it can be used for any reason whatsoever; forked, modified etc. We are also building an enterprise product called Streamlit for Teams, and that's something that we are gonna charge customers for.

Basically, there's this dual model, and it's actually becoming the dominant open source business model. The guiding principle basically is that anything that's tech, all of the crazy WebSocket stuff, the caching, the hashing, the queues, all of this stuff underneath Streamlit - that's all free and open source. And we have lots of plans to improve Streamlit in really fundamental ways; we're just super-excited about that. So there's a lot more tech coming down the line, and it's just gonna make it cooler and more magical. Then on the other hand there's all the features that are useful in a business context. That's increased scalability, load balancing, security, logging authentication, management of apps etc. Those features are gonna be a part of Streamlit for Teams. Right now we're in the process of talking with customers and understanding how we can nail the value prop there for different use cases.

So it looks really good... Corporations are excited about Streamlit for Teams, we have an incredibly long list of people who are basically telling us they'd like to pay when it comes out. That means that we can support the open source project, and that's just super-thrilling, because it's just so fun to build open source software.

**Break:** \[30:00\]

**Daniel Whitenack:** So as we've been having this conversation I've been kind of thinking about my own use cases, my own workflows, and where this comes in... And it seems like Streamlit itself is in one of those situations where it's like it's a tool, and if you ask "Oh, what could you do with Streamlit?", you could do an infinite combination of things with it... Which makes it kind of hard to nail down some starting points... So I'm thinking "Oh, if I wanted to create a UI where I didn't have to jump into my code and adjust a bunch of hyper-parameters to retrain my model, I could create a nice, little UI to do that." Or if I just wanted to push images through a model and do some inference, and drawn bounding boxes around them to review those things - I could do that...

\[31:47\] As you think about people's AI workflows going from data prep, to training, to inference, to maybe feedback and data labeling, where do you think maybe is a good place for people to start thinking about where Streamlit could provide the most value, quickest? Is it whenever you wanna show someone else something, or could it be other places? I'm curious about that.

**Adrien Treuille:** Yeah... So it really runs the gamut, as you pointed out. It's sort of as broad as machine learning and data science itself. We've seen a lot of cool, different use cases. People are creating interactive resumes in Streamlit, so you can actually see the different models they've built. People are also building explainer demos, so we've seen now an increasing number of GitHub repos that say "If you wanna test out this model, or my code, just Streamlit-run this demo." That's super-fun, and really powerful for the people who are testing out different open source projects.

We're seeing people build dashboards, often for external consumption. So a dashboard for the marketing team, a recommendation engine, that kind of thing. Similarly, we're seeing tools for like an external operations team of some kind. For example, the ops team can see data from the self-driving car as it's being downloaded.

Annotation tools - people are doing that in Streamlit. We have some friends at Google X who are doing real-time monitoring of some pretty advanced and secret hardware. They just put Streamlit on the Raspberry Pi and then they built these real-time dashboards... And yeah, just managing data.

One way of thinking about it is like every time you might write a command line tool, just a little one for yourself... "I wanna list all of the data sets in this directory, and compute some statistics about them." You could imagine instead of writing a command line tool, writing a little Streamlit app, and suddenly it's really much easier to see, and prettier, it's more easily shareable with others, and understandable. All the parameters can be encoded as interactive widgets... And it's not much more complicated.

**Chris Benson:** That's a great example right there... Because I do that. I'll create little command line interfaces on a regular basis, just to scratch my own itch on stuff... So I'm glad you brought that out as an example. As I look around on the Streamlit website - I'm going through the documentation while we're talking - one of the things that I'm seeing is different terminology that you have associated with Streamlit... And recognizing that we are audio-only, that we're doing a podcast here and don't have the visuals, the diagrams... I wanted to talk about whether or not you could just briefly say what a couple of things mean to you... I'll throw out 4-5 terms, and just tell us what they are in the Streamlit context, if you would.

**Adrien Treuille:** Yeah.

**Chris Benson:** I'll name them all and then I'll prompt you later if you forget... Data flow, caching, widgets, sidebar, and app model - is a few. Could you talk to what each of those is to you?

**Adrien Treuille:** When we say that Streamlit has a data flow model, what that means is that it really is -- you could actually just say it's a scripting model, which is to say the script executes from top to bottom, and you can define variables, and those variables transform things... And it's really the machine learning workflow.

What we add to that workflow is a couple of cool super-powers. One of them is widgets, which is you can basically anywhere in the flow of your program insert - if you wanna say "x=5", instead of saying "x=5", you can say "x=st slider", and now a slide magically appears on the screen, and x will be whatever you set the slider to.

Another magical thing that we add is the sidebar. Super-simple, but it basically gives you an area on the left, usually, to put some widgets, and stuff... And it's a very simple layout model that actually leads to really pretty-looking apps, with almost no work at all.

\[35:46\] Another super-power that we give you is caching. What that means is that you can decorate your function with this magic called st.cache, and we will memorize the function, i.e. we'll remember how it behaves. That's useful because it lets you speed up your apps. So when people slide the sliders, or type in text in the text inputs, it'll just be faster.

And those things together - so the data flow from top to bottom, the layout, both in the main area and in the sidebar, the ability to do widgets and have inputs, and then caching to speed things up, are together what we call the Streamlit app model. It's actually quite unique, because it's really focused on "Let's make this understandable for machine learning engineers and data scientists, and let's give them the ability to create apps that otherwise would be very complicated to create", quite frankly.

**Daniel Whitenack:** As I'm thinking through some of my scripts, it's like, whenever I'm going through and I have the desire to put in a command line argument that I wanna modify all the time, maybe a way to think about it would just be to think about instead of having that command line in my mind, I could have a UI in my mind, where I'm thinking "Oh, what if this was a UI and I could just get that parameter in that way, or I could change this thing in that way, or display this graph/image in this way?" Is that a good way to think about it? ...as I'm going through my script and I know I'm gonna be modifying this all the time, or I know when I give this to someone else, then I'm gonna have to tell them all of these things to modify - is that a good way to think about it?

**Adrien Treuille:** That's a great way to think about it. I use it that way all the time. A script that I wanna write right now is -- when we do new feature releases... We've just released a new Streamlit two days ago, and we do it about every week or two... And we wanna make sure that everyone who requested a feature on the forums is basically notified by us that their feature was implemented. So what that amounts to is a little tiny script that runs some Git commands, and then does some GitHub stuff in order to assemble a list of pull requests, and then parse those out, so we can keep track of what happens easily and automatically.

So you just imagine -- that would be an intricate little Python script to get that done on the command line. Instead, we can just use Streamlit to make it a little interactive app.

So the first step is just create that app, and then suddenly it's just prettier, it's easier to understand, it's easier to use, it's just as shareable... And then the next step is "You know, this is really cool. This should be running all the time. Everyone should have access to this without checking out my code. So let's deploy it."

I think just that attitude, "This is just a little script. Let me write it up" is the starting point for creating lots and lots of extremely cool and useful Streamlit apps.

**Chris Benson:** It sounds really great, I'm pretty excited about jumping into it after we stop recording this...

**Adrien Treuille:** Yeah, totally.

**Chris Benson:** And I'm thinking through my own use cases in my head while we're talking... If I get to a point where I don't have exactly in the tool the thing that I want, and I'm starting to think about extending what's possible, how do you go about doing that? How easy is it to extend Streamlit and create custom UIs and components that aren't necessarily the things that you're showing in examples, or the docs, or stuff? What does that extension possibility look like?

**Adrien Treuille:** Totally. The first thing I'd say is write your extension down in the forums. We have a super-active user community; we really try to also have as many Streamlit devs as possible involved, so questions get answered quickly and knowledgeably. So ask your question in the forums.

\[39:45\] One thing that I think a lot of people are surprised about is they say "Oh, Streamlit can't do this", and actually it can. We wrap all the basic visualization libraries, Matplotlib, Altair, Plotly, Deck.gl... And there's a lot of ways to combine the basic elements in Streamlit to do really, really cool things. And so often people are surprised when we say "Oh no, there is a way of doing that." So that's step one.

Step two is if it's impossible to do in Streamlit, you are welcome to check out and fork the repo, and we have instructions on how to do that. You can go in there and look at how we did that thing and make a change. And in fact, we're also welcoming and have started seeing a bunch of community improvements to Streamlit. So we welcome those PRs.

Number three is -- that's a pretty heavyweight thing, to check out Streamlit and modify it... We're working on a plugin architecture. And by "working on", I should caveat by saying we have designs on paper. We haven't started coding it up yet. I think this will be released sometime in 2020. But the designs are very cool, and I think it's just gonna breathe new life into Streamlit in terms of possibilities... So we're really excited to do that, and let people built essentially arbitrary front-ends in Streamlit, and then power them through Python.

**Daniel Whitenack:** Awesome. Well, just to wrap up and give people a place to go, get hands-on right away with Streamlit - because I know a lot of people will want to - where is the best place for people to go first? Is that your website? Maybe describe a little bit the tutorials and how people can get started. You mentioned you can pip-install it, but what's the best way to get up and running?

**Adrien Treuille:** Totally, yeah. The simplest starting point is just our web page, streamlit.io. Or you can go to our GitHub page, at github.com/streamlit/streamlit. And then once you get there, we're gonna give you the instructions, which are pretty simple. Pip-install Streamlit, and then you get this command called "streamlit", and you can test it out by typing "streamlit hello". So pip-install Streamlit, "streamlit hello".

Then once you're in any one of those points you kind of have touchpoints to get to all of the other parts of the community. The main hubs of the community are the wiki, the documentation, the forums, and GitHub. In all of those places you'll find people chatting, discussing, coming up with cool solutions, sharing information... So yeah, it's pretty great.

**Daniel Whitenack:** Awesome. Well, I know there'll be a lot of people checking that out. I would love to see what people build with Streamlit, so it you wanna share that with us, you can of course share that in Streamlit's community, but also on the Practical AI Slack channel, which you can find at Changelog.com/community, or share it with us on our LinkedIn page, or on Twitter. We would love to see what you build with Streamlit, and I'm really excited to see where the project goes. I really appreciate you taking time to talk to us about it today, Adrien.

**Adrien Treuille:** Yeah, it was a delight, and I'm really excited to see what your audience says, too... So yeah, let us know. Post in the forums, post on Twitter. We're trying to keep up on all that stuff, so we'd love to see what you're doing.

**Daniel Whitenack:** Excellent. Well, thank you so much. I hope we can meet in-person at a conference or something, but we'll look forward to seeing all the great things online.

**Adrien Treuille:** Cool!

**Daniel Whitenack:** Thanks for joining us.

**Adrien Treuille:** Yeah, thank you so much.
