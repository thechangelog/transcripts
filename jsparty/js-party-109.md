**Nick Nisi:** At Node.js Interactive... The talks are all quite attractive! From transpilation dread to awesome worker threads, this conf is surely impactive. Thank you! \[applause\]

So yeah, we're gonna get started and we're just gonna talk to some of the speakers that you've heard throughout today and yesterday. We're going to talk about their talks, and dig a little deeper, ask some other questions, and really get more out of them and more out of their content.

Let's get started and let's interview our first guest. That is Vladimir de Turckheim. Do you wanna come on up? \[applause.

**Vladimir de Turckheim:** Hi.

**Nick Nisi:** Hi, thanks for joining me.

**Vladimir de Turckheim:** Thanks for having me.

**Nick Nisi:** So you gave a talk yesterday, and it was on Node.js loader hooks.

**Vladimir de Turckheim:** Yes, that's right.

**Nick Nisi:** Tell me about that.

**Vladimir de Turckheim:** So a Node.js loader hook is an experimental API in Node.js. It's linked with ES6 modules, so it's the future and everyone loves that, I guess... \[laughter\] Basically, it's an API that enables you to hook any module that is loaded, and then you can do whatever you want, from logging, to actually creating virtual modules and load them... Because it doesn't hook existing modules that are loaded, it hooks modules that are asked to be loaded.

So let's say you are loading a module that is not present in your Node modules; you could dynamically create it virtually from a hook. It's just math science.

**Nick Nisi:** That is really cool. This is actually something that I hadn't heard about until seeing your talk yesterday. So why were loader hooks created? What's the problem that they're trying to solve?

**Vladimir de Turckheim:** That's a great question. There are few reasons why you want to know which modules are loaded. I was not part of the working group who designed this API, so I can't give a definitive answer on why they created it. But I can say that -- so at SqreenIO I do instrumentation of Node.js processes for security, meaning that I need to know which modules are loaded, because I need to inject security algorithms in these modules as they are loaded. And that's a similar issues that APMs have, like New Relic, Elastic, or Dynatrace.

So all these vendors - we need to know which modules are loaded, because we need to know what we need to instrument. Usually, historically, we use a very ugly patch by monkey-patching some private method in Node, which technically is not private anymore, because half of the ecosystem relies on that anymore, but... I see a TSC member looking at me with anger... So they created a proper API for us to do that without breaking everything.

**Nick Nisi:** Nice. Very cool. So it's to understand what's in the cache, is kind of the big--

**Vladimir de Turckheim:** \[04:06\] It's even before what's in the cache. When the modules are loaded, you have the chance/opportunity to intercept that, and ever rewrite the modules. In the talk yesterday I had three examples. One of them was actually loading TypeScript modules. So if you create a loader hook that transpilers TypeScript to JavaScript, you could virtually tell Node "Hey, this is how to do with TypeScript." And it will not run TypeScript natively, because nobody does that, but it will run TypeScript transparently, meaning that you would not have any single file of JavaScript in your code except the module, and Node will know how to do TypeScript because you have taught it how to do that.

After the talk, someone told me about having a YAML loader, because there are a lot of things you can do in YAML that you can't do in JSON, but that are still possible in a JavaScript object. So the idea would be like "Hey, I want to import YAML modules transparently, without having to read the file and transpile that. I want my developers to just import YAML modules", and that's pretty much what this API can do.

**Nick Nisi:** Interesting. Do you see that as being something that developers use in their actual production apps? For that example, could that be -- I know that it's experimental now, but is the end goal to be a really stable API that you can use to do things like that?

**Vladimir de Turckheim:** So it will be used in productions at least for APMs, because it will be the only way to intercept loading modules. So that's definitely a business need for APMs. Regarding transformations - yes. I mean, the TypeScript transformation - I would recommend having a build step. But if you want to load other things, like YAML - this is a great example - I don't see any reason why you would not choose that in production when it's stable.

The only potentially issue in the future is that "How do you compose multiple loader hooks?" We know that the JavaScript ecosystem is really strong in having entropy and diverse things in the ecosystem... So I hope that will be soon a standard for people to play along, and not to step on each other's feet when loading modules.

**Nick Nisi:** Very cool. So you can only use one loader at a time, is that right?

**Vladimir de Turckheim:** I think so, yeah.

**Nick Nisi:** Okay. Another example that you gave in your talk yesterday was mocking, or stubbing modules by changing them, and you were using a proxy. Do you wanna describe that a little bit for our listeners?

**Vladimir de Turckheim:** Yeah. It was a pretty complex use case... The idea is that, as I told you, you can rewrite the modules dynamically, as they are loaded... So in my example, which is a proof of concept - please don't choose that, even if it's on GitHub, so I guess it's public domain - what I do is that when a module is loaded, I check everything that is exported, because it's just an array of strings with the names of the things that are exported. And I replace all of the exports by your proxy, which is a native object in JavaScript that enables you to trap everything that happens on an object. So I replace each of these exports by your proxy, and I expose the proxy handler, the definition of how the proxy behaves, to the end user... Meaning that when you load the modules that have been transformed, you also have access to a set of objects that enable you to change the behavior of all of the exports. Of course, to make it smarter, we need better recursivity to change deeper fields, but as a first of anything, it's good enough.

Basically, instead of changing your code to make it easier to test, you would just need to load your code, and then in your test file you will be able to mock by changing the proxies and the behavior of the code, but only for your test file, not for the whole world.

**Nick Nisi:** \[08:08\] Yeah. That's really cool. So you would not necessarily have to write code that injects the dependencies; you could just have it through the loader inject the handler for the proxy, and then change things on the fly and change them back afterwards.

**Vladimir de Turckheim:** Exactly. Over the few last years I've seen so many people reinventing the wheel for dependency injection in Node... I won't troll any annotation-heavy framework in that, but... That's the thing - stop reinventing the wheel and creating 1,000 projects, when we can have one single, at least cleaner way of doing that, that does not require your code to have unstandard module loading... Because that's the main issue I have with all of these alternative dependency injections things - they reinvent the way you load modules, meaning that... I'm still a vendor, I still do Node.js instrumentation, and if you do weird things, that gives me more work to instrument it, and I'm lazy.

**Nick Nisi:** \[laughs\] The best developers are. So one thing that we rely on right now - I write TypeScript full-time, and I use ES module...

**Vladimir de Turckheim:** Excellent choice. \[laughs\]

**Nick Nisi:** Yeah... I use ES module-like syntax in TypeScript. And then I rely on tools like Jest. And I haven't looked at what Jest is actually doing, but it has the ability to mock your dependencies like this, which I assume is just relying on the fact that it's just an underlying Common.js module that's actually being run and being able to do that.

So do you see loader hooks as like the solution for those types of problems in the future, when theoretically we're all just writing straight ESM?

**Vladimir de Turckheim:** Definitely. Also, in my understanding, loader hooks will also be available for CommonJS. But actually, there will be no other solution to hook into things that are imported through ES6 module, so people will have to go with that. Sometimes it's good to have a unique way of doing that... But this API has been done cleanly. Historically, you can only mock modules synchronously; this API is based on async functions, meaning that you can do async treatment when you mock the modules, which will be incredibly powerful. And I think my talk is just an opening and a few possibilities you can do with that, but I'm really excited to see what people will build around that.

**Nick Nisi:** Yeah, definitely. So that really opens up things like -- what was one example... You were fetching something, right?

**Vladimir de Turckheim:** Yeah, I think it's the equivalent of Yarn plug and play of the Go module loading system, where you don't have the package.json. Disclaimer, I love package.json, I just love to do weird stuff to in my free time.

So basically, you would be loading modules from a URL, because it's just plain text at the end of the day, or bytes. And if you have a streamed byte that Node.js knows how to instrument it, whether it's JavaScript or WebAssembly, you just need to find a way to get it locally on your machine, and to give that to Node.js to build a module for.

So yeah, one of my examples was instantiating a gist without downloading it before starting the process, letting Node download the gist for me and instantiate it. This opens the door to thousands of security concerns, that's why it was just one example \[unintelligible 00:11:40.16\] I think if you want to go that way, you need to have a couple people full-time to figure out the security impact of such things.

**Nick Nisi:** Yeah, we don't need to worry about that. I'm sure it'll be fine.

**Vladimir de Turckheim:** Security is not a big deal, is it...? \[laughter\] Someone just say no.

**Nick Nisi:** \[12:01\] So that's really cool... And I see this API as being one of those APIs -- I'm thinking back to Myles' keynote yesterday, where he was talking about... I think he called it the existential dread of transpilation, or something along those lines. We are using transpilation and we're using CommonJS and all of this, and there are a lot of things that CommonJS can do, or can be abused to do, that ES modules really can't, because of the way that they're statically analyzed, and things like that... And this seems like one of those APIs that is allowing us to not really have to take away a lot of features when we go to that. So we can do things like that, kind of get in the middle of how modules are actually loaded and change that in really interesting ways.

Another way is the -- I think it was called "module attributes", where you might be able to load JSON in the future with ES modules, for example.

**Vladimir de Turckheim:** Yeah, actually someone came to me after the talk and asked "Hey, will it be possible to ES6-import CommonJS modules with a loader hook?" And that's actually doable, because you method in Node named create require, that enables you to create a custom require function that you can use in ES6 modules to load CommonJS modules. So you could definitely build a loader that would do that. Actually, in my TypeScript example, to import a TypeScript transpiler I had to do that, because it's not exposed as in ES6 modules; I had to load it as a CommonJS module.

So yeah, if you want to create backward-compatibility with CommonJS through a loader, you can. The entropy of weird things that will be available with this API is limitless, and that's one of the things I love with the Node.js and JavaScript at large ecosystems - it's just an infinite state machine where you just give a few rules... It's a collective AI. You give a few rules, and the pool of developers around the world will hack around it until everything is hacked around.

**Nick Nisi:** Absolutely. \[laughs\] As a closing question, what's one thing that you want developers to take away about loader hooks?

**Vladimir de Turckheim:** That's a good question... I'm really unprepared for that one. I guess the thing is Node.js can be turned into a universal runtime... And I could make a \[unintelligible 00:14:35.17\] on saying it's the Graal of runtimes, referencing GraalVM, which is an amazing product in development by Oracle, which aims at running all languages over the JVM. We have a change of doing something similar in Node.js, because through loader hooks you can load anything. And when I say anything, it's anything that Node.js can understand eventually, including loading REST code, and having it compiled to WebAssembly on the fly. Or even C or C++ code. As long as it can run either in WebAssembly or in JavaScript, you can run that on V8. And as long as you can do that, you can do a loader hook to transparently get that into V8.

So yeah, hack around and bring every language of the world to Node.js, so we can finally achieve world domination, as it was the plan all along.

**Nick Nisi:** That's great. Well, thank you so much, Vlad, for talking to us.

**Vladimir de Turckheim:** Thank you so much for having me.

**Nick Nisi:** Thank you. Alright. How's everyone feeling? I'm very excited for our next guest to come on, and that is Marian Villa. Would you please come up to the stage? Let's have a round of applause for Marian. \[applause\] Welcome, Marian.

**Marian Villa:** \[16:00\] Thank you.

**Nick Nisi:** Tell us a little bit about your talk. The title of that talk was "Transforming a country through code."

**Marian Villa:** Yeah, today we are sharing about our work in PionerasDev. PionerasDev is a nonprofit organization from Colombia. And in my talk I was sharing about when you think about Colombia, South America, first you don't know how to pronounce it if you are from out of Colombia... So it's Colombia, not Columbia, as the university. It's very different.

**Nick Nisi:** Yeah. I admit that I was taking notes, and I totally spelled it wrong, and then you corrected me, so I appreciate that... \[laughs\]

**Marian Villa:** Yeah, it's different. And the other thing is I know we have a really strong history about war, and about internal guerilla problems, and I know you saw Narcos, of course, on Netflix; it's a pretty primetime show... But that's not the reality in our country. So we created a small group with five girls in 2015; we started from there, and right now we are circa 1,200 young women who are learning how to code.

**Nick Nisi:** That's just crazy, the growth on that. That's great. Can you tell us what Pioneras -- am I saying that right, PionerasDev? Can you tell us what that looks like? What do you do with that, and what is the typical story of a young woman who goes through that program? What does it look like?

**Marian Villa:** Okay, so we realized that -- it began like a starting group of five enthusiastic girls (I was one of them), but then we realized that 85% of our group, that started small, they have lower income, so they can't afford to take a ticket to go to our innovation hub in Medellin... So the first successful story was Milady. Milady is a typical girl from the comunas; comunas is the poorest area of our city. She can't afford to go to university or to get a job, because she doesn't know how to work in a qualified work on the street.

So she goes to Pioneras, and we only created a meetup, but this meetup really changed her life. It was like ten meetups that year, in 2016, and at the end of the year she could get her first job in the tech field. So it was awesome.

**Nick Nisi:** That's so awesome. What kind of technology does the group focus on?

**Marian Villa:** Our core was Node, because we have a really cool mentors that are here, at this conference. They are really great for the tech culture in Colombia, because they created different conferences in our country. There was JSConf, I was co-organizer in 2018 and 2017, and I'm very close to this community.

Actually, most of them -- I know Node is back-end, but most of them have really strong roots in the JavaScript language. Most of them are front-end developers, but we have really cool \[19:35\] smart girls doing Node in Colombia.

**Nick Nisi:** Very cool. So the way that you get into the program - you start off with no skills in programming at all...

**Marian Villa:** Zero. Actually, most of them don't have a computer. We have a special room in \[unintelligible 00:19:57.22\] with really cool PC laptops... And they get in touch with the technology through this space, because they don't have it in their homes. So that's from zero, actually.

**Nick Nisi:** \[20:13\] So they go from that... And about how long is the typical program?

**Marian Villa:** It's one year, but I actually specified that -- I mean, they learn how to search on Stack Overflow, and GitHub, and how to... They self-learn in other spaces like libraries, or small study groups, and they can share one laptop for five young women... But with mentorship - because we also have a mentorship program - in a year they can get the job.

**Nick Nisi:** Very cool. So this was started in 2015 you said, in your city, right? And that's...

**Marian Villa:** Medellin.

**Nick Nisi:** Medellin, yup. And it has expanded beyond that, right?

**Marian Villa:** Yes. Right now we are in three main cities in Colombia: Cali, Barranquilla and Medellin. In Medellin we have a really big tech hub, but in other cities that's another story, because they don't have too many companies in there, or... Actually, it's not trendy for companies to be there, or don't have the spaces to run the meetups... So we are really helping through Medellin to reach other areas from Colombia that don't have too many opportunities.

**Nick Nisi:** And what kind of support do you get from the local businesses, or from the city, or from the country? What kind of support is there for yo?

**Marian Villa:** Actually, there are three things we need. We need someone to want to share their knowledge... So if you feel like you can share with us, you can write to us or follow us on social media, and you are able to share with one Pionera in Medellin, Colombia, or in other three cities that we are in right now.

The other thing is the venue, because we need a place to run these meetups, and the coworkings or innovation hubs will be very open to us. In cities like Cali - or another one that we'd like to open in is Cartagena, for example... In Cartagena it was really difficult to find a place, but perhaps through universities - we can reach them for 2020.

And the third thing will be food, because we like to share with them some snacks... But it will be a really low -- we need cookies and coffee, that's it'

**Nick Nisi:** Yeah, absolutely. Is there any other type of funding that happens for that?

**Marian Villa:** Yeah, we created a Shopify -- we put these T-shirts that cost like $15... It's in pesos, but people say that and it's like 35k, and they say like "Oh my god, that's so much", but the conversion will be $15; it could be less. But you can buy a T-shirt. Perhaps we could send it out of Colombia right now, but you are supporting our costs.

**Nick Nisi:** And has the group expanded outside of Colombia?

**Marian Villa:** Yes, actually I know in Latin America there are a few groups about girls in coding areas, but there are some places like Bolivia, or Peru... Peru also have, but -- I mean, Bolivia, Ecuador... And they have a space for something like Pioneras. But we are creating a change one community at a time.

\[24:12\] So we open a meetup in other cities, because we have 32 departmentos - and departamentos will be like burrows, or something like that - in demographical political divisions... But we have really jungle or really poor areas that don't have developed like the big cities that we are in right now. So we like to expand to the rural areas and perhaps create a bigger impact in our country first.

**Nick Nisi:** Very interesting. It's so cool, and it's such a great thing. You truly are transforming a country, just as your title states, which is really cool... How can we help with that?

**Marian Villa:** Just only write us an email and give us ideas how you could support us, and I'm sure we can figure it out.

**Nick Nisi:** And is that through helping with like teaching, and things like that?

**Marian Villa:** Yeah. See, we need people to share knowledge. We always know something to share, but perhaps you are always apprentice in life... But we really knowledge and time; time is the most valuable currency that you already have, so if you have the time to share one hour with these young women in Colombia, it would be great.

We need to improve our English skills, because they are really smart, but they need to pass the barrier of the language, and we need to practice our skills. So perhaps it will be English skills, I don't know.

**Nick Nisi:** Very good. And was there anything that you didn't mention in your talk, that you want to get out to everyone?

**Marian Villa:** The message that I'd like to share with all of you is please help us. Help us to transform our country, help us with your time and with your knowledge, because I know here will be the brightest minds to share about Node, and about the JavaScript world... So we need them. We need to change these young women's lives. Thank you.

**Nick Nisi:** I love it. I love what you're doing. Thank you so much for doing that...

**Marian Villa:** Thank you so much.

**Nick Nisi:** ...and thank you for talking with us.

**Break:** \[26:36\]

**Nick Nisi:** Alright, next up with have Chris Wilcox and Jason Etcovitch, so please welcome them to the stage. \[applause\] Welcome! Chris, you are an engineer at Google, and your talk yesterday was "Oh, no! The robots are taking over!", I think.

**Chris Wilcox:** Yeah, so I gave a talk about how you use bots in automation for the Google Cloud client libraries, to try to make our job a little bit easier and a little less repo-gardeny.

**Nick Nisi:** Yeah, absolutely. And in your talk you mentioned using Probot. Jason, you're the maintainer of Probot... Welcome to the show!

**Jason Etcovitch:** \[28:11\] Thank you. Thank you for having me.

**Nick Nisi:** One thing that I thought was pretty cool in your talk - you gave a list of the five levels of automation, and I just wanted to go over those real quick, and talk about them... Automating portions of your workflow is step one, automating the discovery and work, but under supervision, would be step two. Letting the robot do the work for you, but with supervision, would be step three, and then doing the work unsupervised, and pulling out the fallback support would be step four, and then "The robot is your boss" is step five.

You mentioned that we probably never will get to step five, and we wouldn't want to which is probably a good thing...

**Chris Wilcox:** Yeah, it's probably not that surprising as someone that works in technology, but I watched some science fiction, and generally that goes poorly. Anyone that's seen \[unintelligible 00:29:07.14\] knows that when we take technology to that point, it gets mean-spirited and causes us more pain than good.

**Nick Nisi:** Yeah, for sure. What could possibly go wrong...? So tell us about a problem that you're using robots to solve.

**Chris Wilcox:** We use robots for a lot of different things on Google Cloud. The example I used in the talk was about being able to run CI for things that are initiated by non-contributors. Many people in the community use dependency monitors, so things like Renovate, and those aren't first-class members of a repository; they don't have write access. But we don't really wanna have developers having to screen repositories. And for most developers, this probably isn't a huge problem, but at Google we have hundreds of repositories, and so having to go over each and every one just to initiate CI, to build and test the dependency update, is very painful.

So we can save literally hundreds of hours of developer time by using bots to do that work... And we use bots also for release management, publishing, docs monitoring... And we even take it -- not quite to step five, but we have some robots that do bot monitoring.

For instance, our publishing flow to Npm is multi-step. The first step is that we build CI, and we tag things on the GitHub side. But there's a step after that that will publish to Npm. And for some reason, in between those two - it doesn't get all the way to the end - a bot comes through, it notices, and then it opens a bug for us. That sort of ties back into the talk - it's good to scope your bots. So while it's monitoring, it is a very simple task, the worst thing you can do is open bugs against a repo; we have some safeguards so it doesn't try to open a lot of bugs, but... Yeah.

**Nick Nisi:** What could go wrong. So you have bots watching the bots?

**Chris Wilcox:** Yeah, and the last bot in the chain is never really monitored, which is sort of problematic... But knock on wood, nothing terrible has happened yet.

**Nick Nisi:** So these bots that you're building to watch and tag issues, and such - you're using Probot for that... So Jason, why don't you tell us a little bit about Probot?

**Jason Etcovitch:** Sure, I can do that. Before I do though, I had this really funny story that I wanna share about bots watching bots. There was this tweet where an open source project had a pull request where CI was run by a bot, it was then approved by a different bot, it was then deployed by a different bot, and then a different bot came along and said "Hey, congratulations everybody. Great job!" So who watches the bots, except when they're kind of doing their own things... It's kind of dangerous.

**Nick Nisi:** That's awesome. \[laughs\]

**Jason Etcovitch:** \[31:52\] It was this sort of weird thing where bots were interacting with each other... It was awesome, and terrifying. So Probot - the tagline on the website is "It's a framework for building GitHub Apps." So GitHub Apps are a way to integrate with GitHub. Probot is very webhook-focused, so if something happens on GitHub, your Probot app will be set up to receive a webhook, and then it has all kinds of helper APIs to say "Okay, this happened on GitHub. Now, here's how we're gonna handle it."

A very common example would be somebody pushed code, we wanna run CI - most CI providers will have that built-in, but if you wanted to build that through Probot, that's how you would sort of frame it.

**Nick Nisi:** Nice. So that sounds very similar to how Actions work, from my understanding. They're responding to Actions on a repository that might be essentially webhooks.

**Jason Etcovitch:** Yeah, totally. Probot does pre-date Actions. When Actions was coming along, the other Probot maintainers and I - we sort of look at it and said "Wow, this is awesome! This is great. This covers so many pain points that Probot has." Probot is just a framework, it's a Node.js framework; under the hook it's running an Express server... So where do you deploy that? But with GitHub Actions, all of a sudden GitHub runs your workflow automation tools, which is really exciting.

**Nick Nisi:** Nice. That's really cool. That was one takeaway that I took from your talk - the bots that you create are really just Node apps, and then you can put them under version control and keep them there. It sounds like you could do pretty much the same thing with GitHub Actions, where they're just under version control in your repository itself.

**Jason Etcovitch:** Yeah. I mean, there are definitely a few things that -- if I were to build a workflow automation tool, sometimes I'll use GitHub Actions, sometimes I'll use Probot. I'd say that for things like persistence, or long-running tasks, if you care if the server suddenly dies, Probot is probably a better option. But if you think to yourself "Hey, I'm gonna run this app in a Lambda function", Actions might be a really great place to do that.

**Nick Nisi:** Nice. Are there things that Actions solve, that Probot doesn't, or vice-versa?

**Jason Etcovitch:** Yeah, I have two things that I wanna mention. I think the most exciting one to me is in GitHub Actions you can really easily clone down the repository that the action is taking actions against. So you'll push some code, and you'll wanna run some test coverage tool or something. In Probot you'd have to download a whole Git object thing, which in Node isn't very fun to do, but in Actions you can add one line to a YAML file and suddenly you have all that code available to you. So that's really exciting. That sort of enables a whole slew of new things.

And then another one - and this is something that in the Probot community we saw as being a really important addition that we wanted to see in the platform itself, is some concept of secrets. In a repository you wanna configure some API tokens to deal with other things, like maybe you're pushing to SendGrid, or some other service... There's not really a built-in way to do that in a repository. But with Actions, you can include these things called Secrets, and you can include those in your action runs, and it sort of just works super-well.

**Nick Nisi:** Nice. That's really cool. So there's a lot that you can do with either Probot or Actions... Chris, what is the most complex thing that you have a bot doing?

**Chris Wilcox:** \[35:43\] Typically, you don't want bots to be complex. Complex bots fail in complex ways, and that tends to get sort of hairy. I would say the neatest thing we probably do though - not that it's that complex - we find that especially so many repositories' issues go stale. Either it gets assigned to a developer and that developer gets overburdened, or goes on leave, or it's just not their area of expertise; they were misassigned. So it just falls to the bottom of their stack in the stuff they do. And if we detect that, we'll pick someone else on the team to randomly assign it to, an issue juggler, essentially... And that tends to stop things from just getting stale, and it makes it look like we're a little more active, and we can be a little more responsive to customers.

**Nick Nisi:** Nice.

**Chris Wilcox:** The actually most complex thing we do is probably publishing, just because there's a lot of steps. Individually, it's all very simple, but we have to publish talks, and as well as the samples of the repository in the package... The Npm package, we use TypeScript, so that needs to be transpiled... None of it is too complicated, but all the pieces do need to fall together.

**Nick Nisi:** And for that example, what level of automation would you say that falls under?

**Chris Wilcox:** At this point it's up to -- I would say it's three or four. The levels are a bit fluid, if you noticed from the talk... They're based on something to do with automotive engineering, to driverless car leveling and understanding... So it's just really a way to frame risk and reward, honestly, more than anything else. It's about a level -- probably a 3, maybe a 4 at this point.

The thing that made the change for us is we go as far now to auto-detect if we ought to publish. So as commits come into the main branch, we can detect that there are new changes, and we use a thing called conventional commits. At the front of every commit is a label - be that "Chore", "Fix", "Breaking" - that it'll also detect "Is it a patch, a minor or a major release?" We can auto-generate changelogs... And from that, really the only thing you do as a developer on the team at this point is merge the PR, and everything else is done for you. So we still control whether or not we publish to Npm, but the rest is fully automated.

**Nick Nisi:** Nice. That must save a lot of time.

**Chris Wilcox:** It's really nice. I don't wanna go back.

**Nick Nisi:** So going back to that example, that shuffles issues that are getting stale - I haven't looked at the APIs closely, but is there a webhook for that? Is it proactively searching for that and running on like a cron job or something? How is that being kicked off?

**Chris Wilcox:** We have cron bots... So yeah, that's how this is done. And that's something we extended ourselves with using a thing called Cloud Scheduler, that Google Cloud can provide us. So we kick off that action... But already, Probot uses a thing called Octokit, that gives you access to a ton of different GitHub events. There's far more than I would have originally thought. It's definitely something we're checking out. You can trigger on all sorts of things, and it's very fine-grained, down to a pull request open, to synchronization, comments, labels...

**Nick Nisi:** Wow.

**Chris Wilcox:** So you can get pretty exact to when you want to take some sort of action and run some script.

**Nick Nisi:** Very cool. So what does the future look like for you? Would you still continue to use Probot? Would you use Actions? Would you have a mix?

**Chris Wilcox:** We started doing this before Actions was around, which is why we made the choices we did. We didn't have a chance to evaluate Actions. I think if we started today, we would definitely consider Actions... But there are a few constraints - Actions don't deal very well with long-running tasks, so that can be problematic. It's also hard if we ever wanted to scale up.

\[39:44\] So we used a thing called Google Cloud Functions, which ultimately takes a small bit of Node.js (or a few other languages; in our case it's Node) and executes it for us on an event hook. It starts up a service when we need it, and shuts it down, so it costs us very little money... And we could adapt that into Docker containers fairly straightforward, and then maybe eventually we need a Kubernetes cluster... Who knows.

We've also extended to have some security measures. We store none of the secrets in the functions themselves; they're all stored in the key management service - also a thing that Google Cloud provides - and allows us to be a little more secure, a little more confident. It's also a lot easier for us to rotate our secrets... So from a convenience standpoint it's pretty good for us.

**Nick Nisi:** Nice. Jason, what does the future of Probot look like? Will it have maybe some kind of integration with Actions, or some way of sharing the capabilities between the two? How does that look?

**Jason Etcovitch:** That's a great question. First of all, who knows...? We can do our best guess, but what I'd love to see is some of the features of Actions opened up to the ecosystem. Like the secrets thing that I was talking about - that's specific to Actions, but I'd love to see it come to the general ecosystem, so that Probot can use it and enable it for integrators that way.

**Nick Nisi:** Yeah, that would solve a big problem.

**Jason Etcovitch:** Yeah, for sure. But otherwise, I still see them as separate, I still see them as two separate ways to build integrations. I personally have written a ton of GitHub Actions (I think they're wonderful), I've written a ton of Probot apps, and every time I go and build something new, I'm like "Which one am I gonna choose today?"

There are some ways to use a Probot app within Actions. There's a repository in the Probot org on GitHub, github.com/probot. It's called (I wanna say) actions-adapter, and the premise is you wrap your Probot app in this little Node adapter thing, and you run it in Actions. So you kind of have the best of both worlds.

Like I said, Probot is just Node, so you can make some adjustments and throw it into a GitHub Action and call it a day.

**Nick Nisi:** Yeah. And it really gives you that flexibility to choose anything, whereas GitHub Actions are more streamlined for GitHub; they're running on GitHub servers... You're running yours on Google Cloud Functions, so you can have way more flexibility and make those more fine-grained decisions with Probot.

**Jason Etcovitch:** Yeah. I'd liken it to running your own server, versus throwing something on Heroku. It's just about control.

**Nick Nisi:** Very cool. Another cool thing that you showed off in your talk was a way to proxy the webhooks locally, so that you can access those and test your Probot locally. Do you wanna talk about that a little bit?

**Chris Wilcox:** I can talk about it... Or I think Jason is kind of an expert on SME.io.

**Jason Etcovitch:** I actually kind of wanna hear you talk about it, because I'm curious... \[laughter\] I never get to hear people describe it to me.

**Chris Wilcox:** Sure. SME.io is a service that Jason's also pretty involved in, that proxies, in our case, JSON payloads from GitHub to a local host. It's a rather simple service - Jason was telling me, I think it's hundreds of lines of code, it's at that level... And what it allows us to do is locally test our bots. So we don't need to get Google Cloud involved at all, we don't need to get Actions involved, or anything; we can run the Express server locally, we can make a test repository on GitHub, and that will send the event to SME.io, and they give you a slug, so it ends up being a random character string.

That will forward it to localhost:3000, and allow us to test it locally. You can debug things in that way, you can play around a bit... It doesn't have to be too serious then; it lets you experiment.

The other really nice thing that SME.io does is it lets you see the requests that have been made, which I find very useful when it comes time to write integration tests, unit tests... I can look at a real JSON payload and I can capture that, and I can use it again later. That I think is something I don't see a lot of examples of, but it's probably - for me personally - the most useful thing about SME.

**Nick Nisi:** \[44:09\] Yeah. That's a nice way to get at that. It's very beneficial.

**Jason Etcovitch:** Yeah, I think we actually have an issue open in the server repo; it's like "Add screenshots of the JSON payload view", because it's super-helpful.

**Nick Nisi:** Very cool. Well, is there anything else that you wanna tell us about Probot, that we haven't heard about today?

**Jason Etcovitch:** I'd actually like to expand on how SME works on the inside...

**Nick Nisi:** Sure.

**Jason Etcovitch:** ...because there's this sort of really interesting API that I'd never heard about before. It's called the EventSource API.

**Nick Nisi:** EventSource API...

**Jason Etcovitch:** Yeah, and it's kind of like a -- I'm probably gonna get this wrong... But it's like a unidirectional WebSocket implementation, kind of. And SME works by having this one server that's constantly running, and then multiple clients connect to it as -- I wanna say EventSource clients is the right term... We have this primary SME server that then shares payloads, as they come in, to all the different clients listening.

We built it specifically for Probot apps to receive webhook payloads locally, but I've played around with very weird implementations of it, using it to capture payloads from all over the place, to not just a Probot app, but some running servers.

It's a weird thing that we've seen people use for completely different intentions than we ever thought about... It's kind of cool seeing it.

**Nick Nisi:** Yeah, that's really cool. So what you said - there's a single server; that's a server that you're running, and then the clients would be a server that Chris is running for...

**Jason Etcovitch:** Yeah, exactly. So there's two separate parts to it - there's SME.io, and then there's the SME client; there's a CLI, or you can use it programmatically, so there's some built-in support in Probot... But you can also just use the CLI directly.

**Nick Nisi:** Cool. Very cool. Well, thank you so much for coming on and talking about Probot, and for sharing your wisdom on robots, and making me feel a little safer that we're not gonna get to level five automation any time soon, and that you're actively not doing that, so... I appreciate that.

**Chris Wilcox:** Thanks for having me.

**Jason Etcovitch:** Thank you.

**Break**: \[46:39\]

**Nick Nisi:** We have one more talk that we're gonna do, and that is on Node.js worker threads... So I'd like to introduce Rich Trott and Anna Henningsen. If you'd please come up... Let's give them a round of applause. \[applause\] Why don't you introduce yourselves?

**Anna Henningsen:** Okay, so I'm Anna. I work for NearForm, which is an Irish Node.js consulting company, and I work on Node.js. My job is working on bleeding edge features for Node.js, and other Node.js things.

**Nick Nisi:** Nice.

**Anna Henningsen:** \[48:04\] Workers is one thing that I pushed quite a bit, yeah.

**Nick Nisi:** And workers - so I'm learning about the Node team internals... What working group does workers fall under? Or does it?

**Anna Henningsen:** It doesn't have its own working group. It is what we call a strategic initiative. Rich can probably talk a lot more about what that exactly is than I do. Basically, there's somebody on the Technical Steering Committee of Node.js who is in charge of pushing that forward, who reports what progress has been made, and so on.

**Nick Nisi:** Cool. Rich, do you wanna introduce yourself?

**Rich Trott:** I'm Rich, I work at the University of California in San Francisco library, where my Node.js work is tolerated, but it's not my primary responsibility. Most of the work that happens inside Node.js -- well, I don't know; it depends how you quantify it... A lot of the work that happens isn't in a strategic initiative and isn't in a working group; there's no roadmap, because the features that get implemented and the bugs that get fixed, or whatever, the people who are contributing and collaborating wanna take their time to fix and implement... And Anna really, really wanted worker threads.

**Anna Henningsen:** Yup.

**Nick Nisi:** Very cool. Let's take a step back actually, for a moment, and - what even are worker threads?

**Anna Henningsen:** Well, they are threads built on the worker model that exists in browsers.

**Nick Nisi:** Okay.

**Anna Henningsen:** For a long, long time, browsers had this worker--

**Nick Nisi:** Like a service worker.

**Anna Henningsen:** Well... No. \[laughter\]

**Rich Trott:** No, web workers.

**Nick Nisi:** I'm sorry, web workers. \[unintelligible 00:50:01.15\]

**Anna Henningsen:** Service workers are also a thing that -- a while, somebody came up to me and asked me "How do workers and service workers relate to each other?" and I'm like "I'm sorry, they're completely different things." \[laughter\]

**Rich Trott:** It's like Java and JavaScript.

**Anna Henningsen:** Yeah, exactly.

**Nick Nisi:** I totally had my terminology mixed up. I meant web workers.

**Anna Henningsen:** Yeah, so web workers are a way for websites to offload CPU-intensive work to a different thread, communicate with it, send JavaScript data back and forth. Worker threads essentially bring that to Node.js.

**Nick Nisi:** Okay.

**Anna Henningsen:** So you can spawn multiple threads. They're kind of like separate Node.js processes, except they are in the same process, and they can share data very efficiently, especially if it's typed array data - that structure is very easily serializable.

**Rich Trott:** I don't know if you saw my talk yesterday, but I totally evaded the subject of explaining what they were by saying "They're kind of like web workers, but they have some differences", and I pointed out one difference, I think. And then "They're kind of like threads in other programming languages, but not really", and then I just quickly moved out, rather than actually try to clarify what kind of grey area they actually fall into. Just go look at the documentation and start using them, don't worry about it.

**Anna Henningsen:** Right, don't worry about it. That's actually good advice.

**Rich Trott:** Don't worry about it.

**Nick Nisi:** I love it. "Worker threads - don't worry about it."

**Rich Trott:** Just use the thing. \[laughter\]

**Nick Nisi:** So yeah, not to get into semantics much about it, because I will get all of this wrong, but when I think about, like -- you have your main thread in like a JavaScript app or a Node app, and then everytime you do something asynchronous, that's kind of... Is that considered a thread, or a process?

**Rich Trott:** That could offload to a thread in the pool that Node maintains under the hood, but no, it's not gonna be a thread that you manage through this.

**Anna Henningsen:** \[52:12\] Definitely not in a way that should be visible through the API.

**Nick Nisi:** Exactly, yeah.

**Anna Henningsen:** You shouldn't think of it as a separate thread.

**Nick Nisi:** Yeah. You should think of it more in terms of like the event loop, right?

**Anna Henningsen:** Yeah, exactly.

**Nick Nisi:** Cool. So I know that web workers have some constraints. For example, they can't access the DOM, or things like that... Are there similar constraints - obviously, not to the DOM, but are there constraints to worker threads?

**Anna Henningsen:** Well, for the most part, no. For the most part, most Node.js libraries are available in built-in modules. You can use require and it will work the same way as it does on the main thread.

**Nick Nisi:** Okay.

**Anna Henningsen:** There are some restrictions that are managing \[unintelligible 00:52:57.19\] like for example you can't change the process title or change the current working directory. We were thinking like, okay, this is something that affects the entire process, so that should ideally only happen on the main thread. But generally, no; there's no restrictions to what workers can do, and that's one of the very important ways in which they are different from web workers.

**Rich Trott:** Yeah, there's like one or two things (or a small number of things) in process \[unintelligible 00:53:30.09\] that they can't access... But for the most part - yeah, if you can do it in the main thread, you can do it in the worker thread. Worker threads can spawn worker threads; they can spawn additional worker threads. It could just be worker threads all the way down. \[laughter\]

**Nick Nisi:** So what state are worker threads at right now? Are they something that I can use in production today?

**Rich Trott:** Yes! Next question. \[laughter\]

**Anna Henningsen:** So in Node 10 they're still considered experimental. In Node 12 they are stable. There haven't been any significant changes to the API over the last half a year, or maybe a year or so. So they have effectively been stable for a while. The only few adjustments that we did before making it officially stable are some very weird edge cases around timing and the message transfer thing, in order to make it confirm to the web platform tests for that. You would never run into that as a regular Node developer. So yeah, they've been stable for a while, in a way.

**Nick Nisi:** Nice. Cool, so I can use them -- as long as I'm in Node 12, I can use them today.

**Anna Henningsen:** I guess you could also use them in Node 10, but you know... A little warning sign there.

**Nick Nisi:** And what can't you do with threads? With the other experimental features, are there things -- I'm specifically thinking... You said you can require in there; I assume ES modules would also work within threads...

**Anna Henningsen:** Yeah.

**Nick Nisi:** What can't you do with them?

**Anna Henningsen:** Well, one thing is workers are not there to replace the existing multi-process model that most (or at least a lot of Node.js) applications use, simply because it makes things easier when you have different processes, in some ways. You can attach debuggers to them individually. With Node workers it's kind of tricky. It works, but it's tricky, and Chrome DevTools doesn't have support for that yet.

If there's a hard crash, for some reason, like some bug in Node, it won't tear the whole application down, just the single process that was spawned by the parent. Yeah, they aren't there to replace job processes.

**Nick Nisi:** Gotcha.

**Rich Trott:** \[56:09\] Yeah, every use case is different, I guess... I've been surprised a few times, where -- mostly making example applications to sort of demonstrate worker threads... But I've been surprised a few times in both directions, like "Oh, worker threads should have really performed a lot better here, and they didn't." Or the other way around, where "Wow, that really made that take no time at all."

**Anna Henningsen:** Yeah.

**Rich Trott:** The API for worker threads is pretty small, the surface area. It's not a sprawling API, it's not a complicated API. It's the type of thing you can learn pretty quickly, and I find them a lot of fun to just experiment with. My recommendation is go hog wild and just benchmark everything and see what happens, and use them where they make sense, and don't use them where they don't make sense.

The one thing Anna warns against in her blog post, and is absolutely true, is that you're not going to get any benefit for I/O-heavy stuff with worker threads... Because Node already does a lot with the asynchronous calls, and your fs.read, or whatever, and fs.open... So trying to spawn worker threads to deal with massively concurrent I/O is probably not gonna get you anything.

**Anna Henningsen:** Not gonna help at all.

**Rich Trott:** Right. So that's something you can just not bother experimenting with, unless you like seeing negative results, which some of us do.

**Nick Nisi:** Is there a specific use case that worker threads were created to be a solution for?

**Anna Henningsen:** Yeah, that is like CPU-intensive work that ideally requires a lot of communication between the different threads... Because that is usually going to be faster than communicating with child processes, depending on how your data is structured. It's also a lot more flexible. You can send circular data, or generally things that don't fit into JSON, over to threads.

I think what Rich did in his talk is a very good example. For those who didn't see it - do you wanna explain, or...?

**Rich Trott:** Yeah, so if you might recall the Six Degrees of Kevin Bacon game - it was kind of like that before music. You have two musicians, so you'd spawn two worker threads, and have one thread try to find everybody who played with that musician, and the other worker thread do it for the other musician, and sends it back to the main thread, and the main thread just tells the worker threads to stop once they have a musician in common, which basically means you have a connection... But until that happens, both worker threads are just running, running, running, gathering lists of people. Did that cover the part you wanted to cover?

**Anna Henningsen:** Yeah.

**Rich Trott:** Okay. \[laughs\]

**Anna Henningsen:** CPU-intensive work that you wanna offload from the main thread...

**Rich Trott:** Yeah, because those queries get to be really expensive, at least the way I did them. So for me, the exciting use cases are -- so where I work, there's a lot of people who do or are interested in doing data science stuff, and they all wanna use Python, which is a great language for that. JavaScript has been a terrible language for that, but between worker threads, and recently also getting BigInt... I mean, we're not there yet, but it's getting pretty good for things like machine learning and natural language processing and all sorts of stuff.

\[01:00:14.23\] The other thing I think about for worker threads is all those JavaScript packages that do graphics manipulation... Like, "Here's an Npm package that will create thumbnails for your whatever." I think of graphics processing and that sort of thing as a CPU-intensive thing, and why not get a pool of four or eight worker threads, or however many make sense, and just launch them and have them do all of them at once, and bask in the glory of finishing your job faster?

**Anna Henningsen:** Yup. Imagine processing is a great example. It's also CPU-intensive work. Image data is usually represented in some way as \[unintelligible 01:01.04.06\] array of bytes... So you can transfer or share them with zero cost with workers.

**Rich Trott:** Yeah. That's something we haven't mentioned yet, which is that unlike with a cluster module, where you have individual processes, or anything where you have individual processes, with workers you can share memory in certain situations. If you know what size it is, and if it's a very predictable format that you can put it in, you can share the memory or you can even transfer the memory... So if you're the worker thread, I give the shared array buffer, and I can't use it anymore, but you can... Which is really cool.

**Nick Nisi:** Nice. I was just gonna ask if it was like shared array buffer, if that's what you're using as the medium to transport between...

**Anna Henningsen:** Yeah, shared array buffers are \[unintelligible 01:02:01.00\] and array buffers can be transferred.

**Rich Trott:** So I misspoke.

**Anna Henningsen:** \[unintelligible 01:02:04.26\]

**Nick Nisi:** Very cool. So how can people get started with worker threads? Where would you point them to get started with both using them, and/or contributing to them?

**Rich Trott:** Well, let me tell you, Nick... \[laughter\] I don't know if this will still be true for too much longer, but if you go to PalaceFamilySteakhouse.com, there'll be a list of links for my talk, and the very first link is a blog post that Anna wrote using worker threads to solve Sudoku puzzles.

**Nick Nisi:** Nice.

**Rich Trott:** And then there's a bunch of other things in there... A couple of blog posts from me, and the documentation, and some sample code, and a few other things.

As far as contributing to worker threads, my recommendation is know a lot about -- this is kind of a joke, but not really. Know a lot about Windows, and debugging Windows, and C++, and then clone the Node repository and fix test-worker-prof, because that one has been pretty stubborn. \[laughs\]

**Anna Henningsen:** Yeah, that's going to be quite a journey if you wanna do it... \[laughter\]

**Rich Trott:** ...but we're here to help. And by "we" I mean Anna, because you know, she knows the implementation. I don't.

**Anna Henningsen:** Usually, when you wanna contribute, you wanna have some visible result of that. I think right now workers as a feature are kind of complete. We can add stuff, and there's things that I wanna work on, like startup performance... Or there's this really cool thing that \[unintelligible 01:04:03.05\] snapshotting. You could basically take a note instance and take a snapshot of that, and then later deserialize it, which is kind of going to give you a very fast startup, if you have boilerplate code that you run at the start of a thread, or something like that. That would be really cool to have. It's gonna be a ton of work; if somebody's interested, that's great, but you're gonna have to read up a lot. V8 API comes with very poor documentation.

**Rich Trott:** Yeah. Are you ready?

**Nick Nisi:** Um, no. \[laughter\] Not at all, but that sounds amazing. Thank you for the very specific bug to go fix... \[laughter\]

**Rich Trott:** We know exactly where we struggle...

**Nick Nisi:** Right... \[laughs\]

**Anna Henningsen:** Yeah, it's been a terrible test for like forever.

**Nick Nisi:** Cool. Anna, Rich, thank you so much for chatting with me today about worker threads, and thank you to all of the guests that we had on JS Party. Definitely check out the podcast at changelog.com/jsparty. I think that your code should work; I tested it though and it didn't, so... I mean, just because the screen is not bright enough. \[laughter\] But yeah, definitely changelog.com/jsparty, go there, check it out... And we record every Thursday at noon Central Eastern Time, so check us out. Join the party. Thank you. \[applause\]

**Anna Henningsen:** Thank you so much.
