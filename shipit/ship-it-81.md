**Gerhard Lazu:** So even though I was not able to attend KubeCon North America this year, I heard that many people which did had a lot of fun doing so. Apparently, one keynote in particular had a meaningful contribution towards that fun. And deploying straight to production is quite the thrill, that's for sure, but I hear that the keynote was even better than the real thing... So Whitney, welcome to Ship It.

**Whitney Lee:** Thank you for having me. I'm so honored to be here.

**Gerhard Lazu:** And we also have Mauricio. Welcome back to Ship It.

**Mauricio Salatino:** Thank you very much. It's always a pleasure to be here.

**Gerhard Lazu:** So Whitney, this was your first KubeCon keynote. How was it for you?

**Whitney Lee:** So not only was it my first KubeCon keynote, it's the very first time I ever even spoke at a conference was only in April of this year. So I've been speaking at conferences for about six months. And then the first conference I ever attended even as an attendee, not even as a speaker, was one year ago at KubeCon L.A.

I couldn't have dreamed in a million years that I would be on the keynote stage. When I'm thinking about nervous Whitney who was at her first conference, who just wanted to make a good impression on people, that I'd be on that big stage.

**Gerhard Lazu:** That's amazing. So what's the secret? You must have done something very good, to go from attendee, like last year, to keynote speaker a year later. How did you manage to do that? What's the secret?

**Whitney Lee:** Oh, goodness... I mean, I've been working really hard; I have a daily study routine, and I did my very best, and I'm learning at a breakneck pace... Teaming up with Mauricio certainly doesn't hurt anything, since he certainly knows his stuff... And then I make a show called Enlightning. Sso I'm in the public eye a little bit... At least enough to know that I'm pretty natural in front of a camera, and that I can articulate ideas well... And I don't know, maybe they just made a mistake somehow, and I just capitalized on it. That's always a possibility too, right?

**Gerhard Lazu:** No, I think someone saw through many things, and they thought it's going to be amazing... Because I have watched the video - it came out three days ago... I watched it again today, and I could not have told that this was your first talk. I really couldn't. No way.

**Whitney Lee:** So I played in bands for many years, and I toured nationally in a band... So being in front of a pretty big audience is actually -- that's not a first for me. Speaking technically in front of a big audience is. But performing in front of one, I've done before.

**Gerhard Lazu:** I see. Okay. And Mauricio, it was your first KubeCon keynote, too.

**Mauricio Salatino:** It was my first KubeCon keynote, yes. I was pretty nervous with the opportunity, mostly because --

**Gerhard Lazu:** I've seen your nervousness, I definitely have, in the video.

**Mauricio Salatino:** Yeah.

**Gerhard Lazu:** Not Whitney's.

**Mauricio Salatino:** Not Whitney's.

**Gerhard Lazu:** No, I haven't. Of course I haven't, no. You were very confident. Come on, seriously. It comes so naturally to you, speaking.

**Mauricio Salatino:** Yeah, but the preparation and the presentation guide, the main change, at least in my head, was to realize that when you do a keynote, you do it for the entire audience of the conference... Which is not the same as when you're doing kind of like \[unintelligible 00:07:38.17\] where you can just target more the advanced, or the intermediate spectators. And in this case, it needed to be an encompassing, a very wide topic, covering from the high level, and for me that was definitely the challenge there. But we practiced a lot with Whitney, and I think that actually made a difference.

**Gerhard Lazu:** \[07:59\] Nice. What was the feedback like after people watched your talk?

**Whitney Lee:** I can't even tell you what talk came after us, because as soon as we got finished, we went straight backstage, and then we just both looked at our phones and scrolled through Twitter, and we were just like "Oh, my goodness..." I've never had such an experience of immediate feedback, and such positive feedback, and such warmth and happiness... It made my heart three times bigger.

**Mauricio Salatino:** Yeah, for me -- I don't know, after we got a lot of feedback, and of course, we were being recognized in the conference, which is kind of like a really nice feeling... But also, the realization was that we were touching one of the main topics of the conference. There were a lot of people talking about building platforms, and for us to show something in action was pretty big... Because there were a lot of companies saying "This is pretty much what we are going to", so it's good to see an example of something that is running, that is already implementing some of these things.

**Gerhard Lazu:** I really liked the complexity of the topic, and the ease and the simplicity with which you presented it, and how simple you made it look. Who was the wizard with the graphics? Because I think that had a huge role to play. Was it Whitney?

**Whitney Lee:** I made all of those silly drawings, yes.

**Gerhard Lazu:** They were amazing. They were very, very nice. Sometimes - and when I say "sometimes" I'm meaning most times - we take ourselves too seriously in this industry. Big hats, to cover all of the big heads, the ones that we think we have... But they're fairly hollow for many people... \[laughter\] Anyways, the point is that we take ourselves too seriously, and we shouldn't. Now, would I ship a spider in production? I'm not sure about that. But let's leave that for later. Maybe a unicorn, but not a spider, on purpose... \[laughter\]

Alright, so I have a very important question - should developers be able to push straight into production? What do you think, Mauricio?

**Mauricio Salatino:** For me it's definitely a no. So you need a platform to be taking care of all the things that you need in order to deploy stuff to production. I see people struggling with that. Not with the fact that you are not allowed to push to production, because there are some companies where teams are enabled to do that, so they can actually own their own components, and they can own them all the way. And I feel like for some companies, that might work, but what I'm seeing more and more is companies trying just to abstract away all the complexity and governance and all the tools that are needed in order to achieve that. And I think that in the CNCF landscape now more and more tools are popping up in that space, which makes it really attractive for people to not start from scratch. Like, you do not need to actually define all the things; you can just take from communities that are already building these tools, and then just build on top of that.

**Gerhard Lazu:** How are you thinking about that, Whitney, pushing to production?

**Whitney Lee:** The more those steps can be automated, the more the developer can have the illusion of pushing straight to production. Like, there are tons of checks and balances in there making it feel possible... But in terms of actually straight to production, that's difficult.

**Gerhard Lazu:** And why is that? Why do you think that is a problem? Or if you do that, it's less than ideal, let's put it that way. It's less than ideal if you push straight into production. Why is that?

**Mauricio Salatino:** Too many things can go wrong. And that's usually not a problem if you have all the mechanisms in place just to go back to a stable version of your system. Or at least the services that you're owning.

The problem is that most of the time, having that maturity to make sure that you can quickly recover, to avoid downtime, and to avoid frustrating your users, it's not something that every company has implemented, or have got the right mindset or culture just to be in that safe space.

**Whitney Lee:** And then when you're trying to push to production, the question becomes too, like "Whose concern is that?" We're talking about the developer experience in terms of pushing to production, but that's not really what we want to developer or be concerned with at all. We want the developer to focus on application coding, push it to wherever, but they don't even need to think about that part, because it's someone else's job to get it the rest of the way to production.

**Mauricio Salatino:** \[12:04\] And most of the time it's about bringing business value, right? So it's more like a business and company-related decision of when to release this stuff. I'm really happy to see more and more automation and tools around feature flagging for cloud-native applications. It's really nice to see standards popping up in that space, because that's going to give you -- you know, you can just keep deploying, but then enabling features as you go, and turning things off if they are not working correctly.

**Gerhard Lazu:** So if I was to ask you, Whitney, what does the ideal push to production look like, what does that look like to you?

**Whitney Lee:** It's such a funny question, because whose perspective are we going from?

**Gerhard Lazu:** The developer.

**Whitney Lee:** From the developer perspective... I mean, which parts do they want to own, I guess? I think it's unique to the team, and as a platform team designing this for an application team, the first step is to ask the application team "What does an ideal experience look like for you for that particular team, and then for the platform team to enable that experience from there?" But it's really important to start with that conversation with the application teams.

**Mauricio Salatino:** Yeah. I would be very interested in seeing the feedback loop. Even if developers are pushing code or features, and they just actually can see which releases are being created with these changes that they are pushing to the application code, and then getting feedback about when those features are reaching to the production environment, to see how those things are performing, or if they are causing issues.

**Gerhard Lazu:** Yeah. I think that's the thing that most people miss... They say "We want the ability to push straight into production." I say "Great." So when something goes wrong, what would you expect to happen? It's like "Oh, we want this resiliency thing, and we want graceful degradation..." Okay, so who will build that? Who will know that whatever you're pushing will not take production down? And they say "Oh, hang on... I haven't thought about that. You mean I have to do that? Okay... Maybe I need some help." I think that's what usually happens. And if you can't take responsibility for what you're about to do - well, you can't have it both ways.

**Mauricio Salatino:** No... And something that we see a lot of people forgetting most of the time, at least in this kind of conference, is when they are doing demos, and showing simple examples, is that one thing is reaching to production, but then it's keeping production healthy for the long-run, and making sure that whatever it's running there, it's running a little bit better than it was running before.

**Gerhard Lazu:** And I think teams, also there's -- and especially now, I'm sure churn is on everyone's mind. People are coming and going, joining teams and leaving teams... So production hopefully will still be around when certain people leave. So it's everyone's problem. So how do we make it everyone's problem in a safe way, in a way that ensures continuity when specific people leave? Where do we put that knowledge?

So there's like the long game to consider... Production doesn't start and end with a single person. That would be very bad. Very bad.

**Mauricio Salatino:** To answer that, usually that's the concern of the platform. A platform is that box that will basically take care of all these company-wide decisions and policies and governance; it basically will be in charge, having all the automations that are needed to keep production safe, and also provide similar environments for developers to try their stuff, just to feel safe when they are deploying new things.

**Whitney Lee:** The more you can define and codify that knowledge, the better... Which can be difficult culturally, because the people who hold that knowledge, it's how they get their sense of importance somehow, and they don't want it to be defined and codified, because that's why they're important to that organization. That's a struggle.

**Gerhard Lazu:** Like, what do you tell to those people that say "No, I don't want to codify this, because you won't need me"?

**Whitney Lee:** \[laughs\] I mean, if you could find another way for them to get their sense of importance, and have some ownership over maybe doing that piece... But I suppose it depends on the individual. That's above my pay grade.

**Mauricio Salatino:** \[16:04\] I think that you can also promise them back their weekends... Because if they have everything encoded and automated, they just don't need to work on weekends, when things will probably go wrong.

**Gerhard Lazu:** Yeah, or they don't need to use the pager, by the way. If all of these things are resilient enough and everyone understands how it works, it's not your problem...

**Mauricio Salatino:** Exactly.

**Gerhard Lazu:** ...or only your problem, right? We can spread that load. Interesting. Okay... So platform teams, I think it's safe to say that they're here to stay, and they're only going to become more important... What happens for small development teams? Let's say there's only 2-3 developers, it's a small team, it's a startup, they don't have a platform team... So how does that work in smaller teams? How do you see platform teams, and developer teams, and any other teams working in a smaller startup, but especially from the platform and the app developer side.

**Mauricio Salatino:** Basically, I would say that they do have a platform. That's what cloud providers offer. And that's why it makes a lot of sense for a startup to say, "Okay, I will just go on and choose one of these cloud providers, because they give me all the tools for me to get started, without worrying about maintaining or running one of these clusters", which is something that you will need entire teams to manage.

On top of that, of course, you can start building your more company-specific set of capabilities, if you choose Google, or Amazon, or Azure - you will need to start building stuff on top that is more relevant to your domain. And all of this, cloud providers will provide you tooling to create these higher-level abstractions and tools.

**Whitney Lee:** I actually have a question for Mauricio around getting started with cloud provider services, which makes a lot of sense to use stuff that's provided for you out of the box... But then how can you start that from an angle where you avoid vendor lock-in, you avoid depending on that cloud? How do you do that?

**Mauricio Salatino:** In general, for startups, that's not one concern that they would have, because they need to get business value out; they need to build something fast. And for that, it's fine to pay that vendor lock-in. When you go a little bit bigger, when you start going, that's when you start thinking about this kind of concerns, and that's where Kubernetes becomes a good investment... Because you start breaking out of some of these lock-ins that you have if you jump in a cloud provider. But that's for a little bit larger companies, that I would say can invest a little bit more and have their own teams just to build and maintain that stuff.

**Break:** \[18:29\]

**Gerhard Lazu:** So when you're a small team, would you recommend starting with Kubernetes, or would you recommend elsewhere?

**Mauricio Salatino:** You're asking the very, very tough questions... I would say that -- yeah, so I would say that if you are a small team and you want to build business functionality, starting with a cloud provider is probably the safest bet. If you are small, you go there and you just build something.

It's really also up to what kind of business... If you are in the software provider kind of business, or if you are providing software for other companies, definitely look into Kubernetes. If you are more like an end user company, definitely go for a cloud provider and just build functionality first; then rearchitect, and then figure out if you need some abstractions from your cloud provider.

**Gerhard Lazu:** When you say cloud provider, what do you mean specifically?

**Mauricio Salatino:** When I say cloud provider, I usually mean Google Cloud Platform, or Amazon Web Services, or Microsoft Azure, which are the biggest ones.

**Gerhard Lazu:** And then you would pick services, rather than VMs... That's what you're thinking, right?

**Mauricio Salatino:** Yeah... If you analyze this from a developer's perspective, I've seen very different startups that are building functionality, and they look at tools like AWS Lambda, or Google Cloud, or Azure Functions, I think... Because they can quickly create functionality, deploy it, and have it running. And that's really important. To do that with Kubernetes you go through kind of like a period of learning, and I think that Whitney can tell you a lot about all the amazing projects that we have in the CNCF landscape... That will take you some time to learn; it's not something that you just read the documentation and then enjoy using it. You need to wrap your head around it, and have enough expertise to understand how to use these things, and how they work.

**Gerhard Lazu:** What is the first project that comes to your mind, Whitney, when it comes to solving these problems? Kubernetes is too much, right? You don't have the time, you don't have the expertise to figure this Kubernetes thing out... What else would you do?

**Whitney Lee:** Knative Serving is really great to abstract away a lot of the Kubernetes complexity and get a more simplified experience, while still being able to utilize all of what Kubernetes has to offer.

**Gerhard Lazu:** Okay. And where do you get Knative Serving from? I want one... How do I get one? \[laughter\]

**Whitney Lee:** knative.dev, I believe is the project's website...

**Gerhard Lazu:** Okay.

**Whitney Lee:** Yeah. It's open source, so you can just download it and use it. There's a great Quick Start tutorial on the site, so you can learn about how it works... And then not only do you have a more simplified experience, where if you're using vanilla Kubernetes you have to manage a lot of objects, you have to hook them together, you might be looking at 90 to 120 lines of Yaml to try to get it all running... You have like a 10-line Yaml experience deploying a Knative service... But then in addition to that, you can do a lot with traffic splitting, and you can scale to zero...

**Gerhard Lazu:** Hang on, hang on... No, in your keynote you said no Yaml and no dockerfile. So how do I get that? That's what I want. \[laughter\]

**Whitney Lee:** That's the Knative Functions project, which I'll hand the ball to Mauricio to talk about it.

**Mauricio Salatino:** Yeah, I guess in our keynote we tried to show that experience, just trying to build that kind of experience, where developers should be focused on writing code, and for that we used Knative Functions, which basically allows you to quickly bootstrap a project using different programming languages, and then they provide the functionality to just deploy into a Kubernetes cluster without knowing anything about Kubernetes or writing dockerfiles to containerize the application, or Yaml files to do the deployments.

\[24:00\] This is like a very small command line tool, but it's focused in this space of functions-as-a-service platforms, and I think that that's something that the more companies get more mature with the use of Kubernetes, they will start looking into these.

We keep hearing companies that have a lot of developers that they need to provide these more high-level programming languages, so they can allow developers to focus on coding features, instead of creating Yaml files, and just figuring out how to containerize their applications.

**Gerhard Lazu:** When it comes to a managed Knative, Mauricio, what would you recommend? Let's say I don't want that hassle, I just want to go to a cloud provider that gives me a managed Knative, or Knative-like experience... You yourself, what would you pick?

**Mauricio Salatino:** Yeah, so this is the thing... Knative is an open source project; it was created by Google, and that's why Google is providing Google Cloud Run, which actually exposes the same APIs as the open source Knative project... Which is a pretty important thing, and we hope more cloud providers start offering these interfaces... Because at the end of the day, you are just enabling your users just to run functions as a service, without worrying about who is running Kubernetes, or who is actually running the container, or where those containers are running.

So Google Cloud Run is the closest that you will get as having kind of like a Knative experience... But sometimes managing and installing Knative on your own makes a lot of sense, mostly if you are the platform team trying to provide your developers a very custom experience.

**Gerhard Lazu:** The one thing which I really liked about your talk is that there's also some code. I loved the pre-recorded demos. I loved them. They're my favorite, too. That's the way to go, because you're relaxed. The only surprises are the ones that you've put there intentionally, right? So when you pretend something goes wrong - hey, it's a recorded one, so... But you have code. You shared code that anyone can take, and can try running it. So if you're wondering how can you get this functioned experience, this Knative experience without any Yaml and any dockerfiles, there's a repo for that.

**Mauricio Salatino:** Yes, there is. And I think that we will share this in a link with the podcast probably, yes?

**Gerhard Lazu:** Yes. It'll be in the show notes, yes.

**Mauricio Salatino:** Or on Twitter as well. But yes, there is a step-by-step tutorial where you can reproduce in your own Kubernetes clusters, even running locally \[unintelligible 00:26:22.18\] the entire demo experience... Which basically goes from creating a new development environment, creating, building and deploying a function to that development environment, and finally, moving that new function that we created into a production environment using Argo CD.

I think that we tried to create a demo that people can run, because we see that maybe when you look at the presentation it looks nice, but when you actually try these tools, you learn a lot, and then you map to your scenarios, to your day-to-day job, all these tools that we are showing.

**Gerhard Lazu:** So even though it's rainbows, it's real, okay? It's rainbows that you can run yourself, okay? That's one of the takeaways... \[laughter\] So we're not just talking about this; there's code that you can try out and then see it for real. You can have your own rainbow service. Whose idea was that, by the way? The rainbows part.

**Whitney Lee:** Who do you think? \[laughter\]

**Gerhard Lazu:** I'm looking at your very colorful microphone... It looks like a rainbow right now... \[laughter\] So I think that's a give-away right there. Okay. Now, what about spiders? I would have expected unicorns... I mean, they go really well with rainbows. Why spiders? Because I was thinking that you're trying to ship a bug on purpose. I was intrigued, like "Where does this go?" and I was disappointed the bug was just a spider. It was not an actual bug.

**Whitney Lee:** \[laughs\]

**Gerhard Lazu:** So why a spider?

**Whitney Lee:** I think a spider is literally the opposite of a rainbow. I can't think of any characteristic they have in common. So I think in terms of just making a silly story where we have an important company that ships rainbow-as-a-service, they're staying on the cutting-edge of technology, and then the cutting-edge surprisingly is... Spiders. The rainbows connoisseurs - all of a sudden they wanna see spiders. Just to keep you on your toes.

**Gerhard Lazu:** \[28:13\] For me, rainbows-as-a-service is Twitter.

**Whitney Lee:** You said that before, yeah.

**Gerhard Lazu:** I did. Before we started recording. I don't know -- like, what about the spider? Who's the spider in this story...? But the similarity to real life - I mean, I don't think it's a fantasy story...

**Whitney Lee:** Elon Musk is the spider, yeah.

**Gerhard Lazu:** Maybe, maybe... Many bugs are being shipped on purpose; let's see how well it degrades.

**Whitney Lee:** \[laughs\]

**Gerhard Lazu:** Okay... That's an interesting one.

**Mauricio Salatino:** I think that we wanted to draw that parallelism with the stuff that developers are usually asked to do... And we didn't have enough time to show that, but the idea here with all these tools that we show, including Knative, and Crossplane, and Argo CD is that you should be able to deploy new stuff that you're not 100% sure that it will work from a business perspective, but you have that flexibility in the platform to switch back, try different things... And then if it's working, you just leave it and move forward. If not, you just revert it back using a very simple mechanism.

**Gerhard Lazu:** Being able to see deploys as commits is super-powerful. And if we boil down everything that we do to that - a way that you can track, you can verify who did what, when, how, how was this produced... Having that full picture - super-important. So you still push to production, but not the way you think you do. There's no CLI involved other than something that shows you what is happening. Okay, git push, I suppose... But then other things happen behind the scenes.

**Mauricio Salatino:** That's correct. And I'm really hoping that next year \[unintelligible 00:29:46.04\] if we keep talking about platforms, and if we keep building tools to build these platforms, the things that we mentioned before, when we reach to production, we need to make sure that production stays healthy... So they are like projects kind of like being created in that space, and I think that that's really important... But also, if we are building platforms, it would be great that we can measure them from the start. Because a platform that doesn't help you to deliver software - it's probably just the wrong investment. So from the get-go, you start with building platforms, but you can measure how they are performing, and if they are just giving you the value of delivering more software more efficiently, that's a good platform. If not, we are talking about maybe not a so good platform.

**Gerhard Lazu:** Is there any specific tooling that you would like to give a shout-out to? Knative if one of them we already mentioned... I think Argo CD was mentioned as well... But is there anything else that you want to give shout-outs in terms of a tool that goes very well in the context of a platform?

**Mauricio Salatino:** Yeah, so basically, we talk about vcluster for development environments on ephemeral environments where you can create a cluster that you can destroy quickly... We talk about Crossplane for keeping things healthy, and just for remediation techniques, but I think that they are doing a great job there as well. And there are a bunch of other projects that are in that space that also deserve some mention as well.

**Gerhard Lazu:** Any from you, Whitney? Anything that you really like?

**Whitney Lee:** He took the words right out of my mouth.

**Mauricio Salatino:** But Whitney, you have a session about Buildpacks, and you have a session about Tekton as well, which are also very, very important projects.

**Whitney Lee:** Absolutely. Buildpacks are part of what's going on under the hood with Knative Functions to get the code into a container image in an automated way, in a way the platform team can control the governance and insecurity around. So that's a really cool project, and it eliminates the need for a Docker files within an organization, or at least greatly reduces it.

Tekton has been around for a while, but it's a pipeline to help you automate pretty much whatever you want. So you define your tasks, and they run in a certain order, and it works with Kubernetes APIs.

**Mauricio Salatino:** \[32:09\] And it also promotes that idea of sharing constructs, right? Like, the idea of enabling platform teams to say "I have my collection of things that we just reviewed, and we know that they work", so we can give developers these pipelines or these blocks that they can use. And I think that that's a pretty powerful message when you're talking about platforms and platform teams.

**Gerhard Lazu:** I'm wondering, is there something in the observability space, something that shows you what is actually happening in production in terms of SLOs, SLIs, anything that you would pick, or anything that you liked in your research?

**Mauricio Salatino:** Well, Captain is one of those tools, I would say. Captain is in that space, and for me, that's the tool that I've been closer to. I know that there are some other tools, but I'm closer to that one.

**Gerhard Lazu:** Okay.

**Whitney Lee:** I'm doing an Enlightning episode on OpenTelemetry coming up on December 8th. So I purposely fully don't know much about it, because I think it makes for a better episode when someone has to kind of explain to me from scratch what their project's about...

**Gerhard Lazu:** Oh, yes.

**Whitney Lee:** But I do understand it helps collect data in more of a vendor-agnostic way.

**Gerhard Lazu:** Okay. So you mentioned Enlightning. For our listeners, Whitney has a show, right? Would you call it a show? A streaming show?

**Whitney Lee:** Yeah.

**Gerhard Lazu:** It is fun. There's a whiteboard involved, or a glass board. I think that's what you call it, a glass board. You know what --

**Whitney Lee:** A lightboard...

**Gerhard Lazu:** Yeah, can you please describe it for us? Because I'm doing a bad job. Can you describe Enlightning for us, please?

**Whitney Lee:** In my home, I have a lightboard studio. So you may have seen this before... The experience of looking at it is like you're looking at someone who has a black background, and they're writing with almost glow sticks on that black background, and diagramming what they're talking about. So for me, it's an interactive experience. For Enlightning, I'll have a guest on my show, and they're often a person who represents a certain CNCF project. I think literally all the projects we've talked about - Buildpacks, Tektonic, Captain, Crossplane, I've done lightning episodes on all of those. So a guest will come on, and then I'm a blank slate, I'm pretty new to tech as we've established at the beginning... So a guest comes on and teaches me about their technology. And so as I learn from them, I diagram my understanding; and I have an eraser, so if I get it wrong, we get it -- but it forces them to explain from scratch what's the problem space for why your tool even exists, and then what does your tool do, and then a little bit probably about how it works. And they explain that to me, and I draw it out, and I ask lots of clarifying questions... The chat's always really amazing and fun, and they'll have questions, too... And it makes for a really fun show.

**Mauricio Salatino:** It's a pretty shocking experience for people that have been in the industry for quite a while, because for example, I did an episode on Knative eventing, and then you start realizing that if you want to explain these tools from scratch, there is a lot of background that you need to cover in order to actually explain why these tools were designed, and what kind of problems are they trying to solve. And sometimes those problems are very specific to the use cases, or very specific to the tools that you're building. But it's pretty interesting; when you see this show, you actually see the person who is trying to explain go through all that background, maybe quickly, in order to get to the point where they can start talking about the project... And that tells a lot about the industry that we are working in, because there is a lot of things going on.

**Gerhard Lazu:** That's very interesting... So there's something which I'm only just connecting now. What was the experience like for you, Whitney, coming into this industry, with all those nerds that assume that everyone knows what they're talking about? And you're like "No, hang on, hang on..." And the question, even though it may seem naive, there's a lot of importance to them, right? Because people make so many assumptions, and when you have this fresh pair of eyes perspective, it can be so Enlightning. So what was it like for you? What was your experience like, Whitney?

**Whitney Lee:** \[36:10\] It was absolutely overwhelming to try to untangle even the basics. I remember first learning Kubernetes, and I didn't understand that a box and a VM and a machine are all the same thing; and a node... They all are the same thing, and they all just mean a computer. Like, why can't we just say computer? All the different words we use for one thing...

Additionally, if you talk about manifest files, or configuration files, or definition files - like, they're also all the same thing, but we use these words interchangeably... And now it's almost like learning a whole new language. And now I speak the language, but I try to not -- like, on the show, if anyone ever says an acronym, even if it feels like a really obvious acronym to me at this point, I always take the time to say what it means. I do my best not to get so deep that I forget my roots and start to make those assumptions myself. But it's overwhelming to jump into this space, for sure.

**Mauricio Salatino:** And that was all part of the keynote preparation, right? We need to think actually on language that was being used across multiple projects to deliver a very complex message, in a simple way. That's kind of one Whitney's superpowers - she can take a very complicated message and actually make it accessible to people. But this was a very complex message. There were a lot of tools that we wanted to show, and then there was limited time to explain all these things. And again, we need to cover some background, and then just go deeper into the message that we were trying to deliver.

**Gerhard Lazu:** I've seen many presentations of yours, Mauricio, and now I understand why this one was the best.

**Mauricio Salatino:** Good... Thank you very much.

**Gerhard Lazu:** \[laughs\] Your demos are great, but this one was so nice and simple, and fun. Whitney, you made it fun, and you made it accessible, and I think that's very important. We forget -- again, we take ourselves too seriously. Spiders been a bad thing... Well, they do, but then they're also fun. They only have six legs. No, they're 12. Anyways... You know, things like that.

**Whitney Lee:** The spider is smiling.

**Gerhard Lazu:** It is a friendly spider, for sure.

**Whitney Lee:** Yeah.

**Gerhard Lazu:** Now, going back to Enlightning, do you know which was my favorite feature of the show?

**Whitney Lee:** Is it the dancing at the end?

**Gerhard Lazu:** It's the eraser? It makes such a lovely...

**Whitney Lee:** The eraser?

**Gerhard Lazu:** Exactly, yeah. I wish we could do that with code... Whenever you make a mistake, you can rub it off and you can hear it, and it's like so -- ah, the satisfaction to cleaning something... "Oh, it's a mistake. Sorry about that."

**Whitney Lee:** The squeaky little glass noise, yeah...

**Gerhard Lazu:** Yeah, the squeaky one, that was a good one. I really liked it.

**Whitney Lee:** I think it's important to be able to easily erase, and to ask questions that like "This may seem obvious, but there's something I'm not quite understanding here..." Yeah, I definitely ask some pretty silly questions. If I rewatch old episodes, I'm like, "Oh, okay... Yeah..."

**Gerhard Lazu:** There's another silly question coming your way, Whitney... How do you go from a lightboard to skydiving? How do you do that? That seems very extreme.

**Whitney Lee:** I did a tandem skydive this past Saturday, and in terms of adrenaline, or just like my heart rate getting up, the keynote was 100 times scarier than the skydiving. Like, 1,000 times. The skydiving wasn't even on the radar. And part of that is just -- I think I maybe trust the world... Like, it wouldn't be a good business model to let me jump out of the sky with zero training, if it was if it was actually really very risky... But with this keynote, I could very easily visualize a lot of ways it could terribly go wrong, and affect my life negatively for the foreseeable future... So it was so much scarier to do the keynote than skydiving.

**Gerhard Lazu:** The skydiving looked a lot of fun. A lot of fun.

**Whitney Lee:** \[39:59\] It was very fun.

**Gerhard Lazu:** Mauricio, when are we doing skydiving? Because I want to do it, after seeing that short video...

**Mauricio Salatino:** Definitely not my thing...

**Gerhard Lazu:** You're not doing that. Okay.

**Mauricio Salatino:** No, no. \[unintelligible 00:40:11.08\] keynotes maybe, maybe at some point, but... Yeah, it was a pretty intense experience. Yeah, definitely.

**Gerhard Lazu:** So I have a silly question for you, too... How much heavier is your laptop with all the stickers on it? Did you weigh it before and after?

**Mauricio Salatino:** It is pretty heavy... I think that now it has like two layers.

**Gerhard Lazu:** Exactly. You've like doubled its weight.

**Mauricio Salatino:** Totally. Yeah.

**Gerhard Lazu:** Does it have stickers on the bottom?

**Mauricio Salatino:** Not yet. Not yet. But that's something that I was planning to do.

**Gerhard Lazu:** Okay.

**Whitney Lee:** If I was a project and it had a sticker on the bottom of your laptop, I might get my feelings hurt a little bit...

**Mauricio Salatino:** Do you think so?

**Gerhard Lazu:** Maybe, yeah... But I think that's like the important stuff, right? You consider that the boring infrastructure, the things that just sustain everything else. I think Kubernetes should go on the bottom, because at this point, everything is built on top of it, right?

**Mauricio Salatino:** That's true. That's so true.

**Gerhard Lazu:** So we talked about tech quite a bit, we talked about people, to some extent... I think we touched up on process as well... But I'm wondering if there is some combination of all three perspectives that make what we build in the cloud-native landscape so interesting... Because I haven't seen such a good combination of people, tech and process in a way that is accessible, in a way that is friendly, and in a way that works when put together. Like, I haven't seen any other combination of these things work as well as the cloud-native space has. So what is your perspective on that? Why do you think the space where we operate in, this tech space, but it's a very specific tech space - why do you think it works so well? What do you think is its secret?

**Whitney Lee:** I appreciate, as a newcomer, how inclusive the CNCF community is, and how loud they are about how inclusive they are. So being a beginner, I jumped into SIG Docs and tried to contribute to Kubernetes... And I did, I updated the glossary to help make things more clearer... And I felt very warmly received. I had a lot of tools given to me to help me be successful. I felt safe asking my silly questions, which there are always many coming from me... And that makes such a huge difference, to not have your big egos, or not have certain people take up too much space, to not leave room for people who are coming in.

**Mauricio Salatino:** Yeah, exactly. I guess that the people is definitely making a difference. Also, the companies that are getting involved, and the fact that the foundation and the projects that are in there are becoming in some way standard, in some way... Like, that's kind of what companies are looking to use, and to save money, and to basically justify their investments. So I think that all these things combined together, and all the amazing stuff that is being built is just generating this \[unintelligible 00:43:10.00\] that it's bringing in more people, bringing in more companies bringing more investment into the space. And you can see very large companies actually recognizing now that they need to go there, and they need to get closer to these projects, these other companies that are building stuff... Because building things in isolation nowadays doesn't make much more sense.

**Gerhard Lazu:** Yeah, that's a good one.

**Break:** \[43:32\]

**Gerhard Lazu:** As I mentioned at the beginning, I was not able to join KubeCon North America this time, this edition... What was that like for you? What was the experience like? How was it different from other KubeCons, from other conferences?

**Whitney Lee:** I can't speak for Mauricio, but I was so stressed about the keynotes that I attended almost nothing socially leading up to the keynote. I was very intent on my own headspace, and well-being, and physical and mental health, so that I could be the best person I could be on Thursday morning. After that, I had a lot of fun... But I a little bit had my head under a rock for the first half of it.

**Mauricio Salatino:** Yeah... For me, I think that this time -- I think that this time personally I met a lot of good mentors, and people that were willing to share advice. And I'm reaching to a point in my career where -- you know, like, when you do a keynote, then you think that maybe you start like not finding the right things to keep learning, or the right people just to keep learning from... And in this case, I've met a lot of people that I really respect and value as mentors, and as people that I can learn from. And at the same time, I actually realized that I was being connected with people that was looking for the same, so I started talking with people and guiding people in certain areas... And it feels really rewarding from both sides, like finding mentors, and also mentoring a lot of people.

**Gerhard Lazu:** Any people that you want to give a shout-out to, either of you?

**Mauricio Salatino:** There are too many. I have a blog post about KubeCon where I'm just mentioning all the folks that I met, and the ones that actually made a very strong mark on my experience there at KubeCon. There are too many, to be honest. All the co-chairs of the conference, and all the organizers, definitely there.

**Whitney Lee:** One thing that's so cool about KubeCon, for me at least, is that I interact with a lot of people from a lot of different communities, from all over the globe... And then to have everyone together, the same space and time, and just like be around, and just walk -- like, your friends who you only ever know online, when you see them in real life, it feels almost like seeing a celebrity, or something. You're like "Oh my God, it's you", and like hugs, and like "You do have a physical form. This is amazing."

**Gerhard Lazu:** Yeah, it's not just the head. There's more to it. \[laughter\] Okay, nice. So Whitney, I want to go very quickly, one last time, back to Enlightning. Is there a recent Enlightning talk episode that you think is a must-see for people that maybe haven't seen Enlightning?

**Whitney Lee:** Oh, where to start for a good episode to dig in on...? The one I did right before KubeCon was on Captain, and that's related to our talk today... So that one I recommend. Mauricio and I did one together, as he mentioned, about Knative eventing, and that was one of the more advanced things I covered, I would say... And another thing we've talked about today -- so there's a Knative serving episode, but also Cloud Native Buildpacks is interesting...

The thing about the Cloud Native Buildpacks episode is Cloud Native Buildpacks are really easy to use. The experience of using them is so simple. But knowing how they work is actually very complex. So in that episode, we untangle exactly everything about how they work. So maybe you don't need or want to know that level of complexity around Cloud Native Buildpacks, but if you're interested, I think it's a really fun episode.

**Gerhard Lazu:** Okay.

**Whitney Lee:** Oh, and Argo CD. One more - Argo CD was great, too.

**Gerhard Lazu:** Okay. Okay. We will try to put them all in the show notes. That's a very nice list. Thank you, Whitney.

**Whitney Lee:** I'd choose Argo CD up at the top.

**Gerhard Lazu:** \[48:08\] Okay, excellent. That will be the first one that I'll list in the show notes. Cool. Mauricio, we talked earlier this year about continuous delivery for Kubernetes, the book that you're writing, the Manning book that you're writing. How is that coming along?

**Mauricio Salatino:** That's coming along pretty well. I'm writing the last --

**Gerhard Lazu:** Did you have time for it? With all the conferences and everything, I don't think you had much time for it.

**Mauricio Salatino:** It's pretty wild, but I'm actually writing the last chapter now, and it's all about that, like the thing that we mentioned before, measuring platforms, and how do we use, for example, DORA Metrics to measure performance on software delivery. So I'm currently building a small POC that will go with the book, some tutorial that basically you can just create, some sort of way of calculating these metrics on top of a Kubernetes solution. And that's been an interesting thing, because again, as most of the things that I'm working today, they involve different communities, and the collaboration between different groups. So I'm really looking forward to finish that chapter, because it has been a lot of work, but also because it will have something that you can actually try on your own.

**Gerhard Lazu:** So does that mean that v1 is almost finished, of the book?

**Mauricio Salatino:** v1 should be pretty close to be finished by January this next year.

**Gerhard Lazu:** 2023. Okay.

**Mauricio Salatino:** It has been a long time in the making, but...

**Whitney Lee:** When you say finished, do you mean your part's finished? Or do you mean it's available to the public?

**Mauricio Salatino:** So it's already available in the early access program. You can access the draft of all the chapters. But I guess that the deadline here that we're talking about is to having it printed. And that will happen after I finished my parts, of course, after a long review process. So I'm hoping that January I finish my part, and then the review process and then the printing goes there like early 2023.

**Gerhard Lazu:** So what I'm hearing is summer 2023, knowing how these things work.

**Mauricio Salatino:** Yeah.

**Gerhard Lazu:** Summer 2023 - by then, there should be a printed copy. Okay.

**Mauricio Salatino:** It's like software, you know? It's like software. We are iterating on it, it will take time...

**Gerhard Lazu:** It's never finished.

**Mauricio Salatino:** Exactly.

**Gerhard Lazu:** Okay.

**Whitney Lee:** Will you autograph my copy, Mauricio?

**Mauricio Salatino:** That's going to be expensive, but maybe. Maybe. We can talk about it.

**Gerhard Lazu:** Yes, please. Yes, please. Okay. Well, when the book is finished, let's talk about it again. Okay? Because we did one - I forget when it was; it was this year, we already had an episode on that. I forget even the number. It's been a while. But when it's finished, let's talk about it again. Cool.

**Mauricio Salatino:** I have learned so much from writing it, because it's just a learning experience. So I feel that I have enough to share, to write another book on the experience. And a keynote. I can make a book about writing a book and doing a keynote.

**Gerhard Lazu:** A book about the book. I like that. Okay. So what else is coming up for you, Whitney? I mean, you had the KubeCon, you had the keynote, you did skydiving... Where do you take it from there? What's next on your list?

**Whitney Lee:** So I have, of course, Enlightning episodes indefinitely, and those are all really fun... Personally, I'm going to a friend's wedding in India in December, that I'm very excited about... And then Viktor Farcic, who does the GitOps ToolKit channel - he and I are talking about collaborating... But I don't want to say too much about what we have up our sleeves until it's a little further along. But I'm excited.

**Gerhard Lazu:** I like it. Yeah. Okay, exciting. What about conferences? Any other talks coming up, or any blog posts, Whitney, or anything like that, that you'd like to mention?

**Whitney Lee:** My next conference is CodeMash in Ohio. It's at a water park in Ohio, in January.

**Gerhard Lazu:** Wow, okay. Won't it be too cold?

**Whitney Lee:** It's an indoor water park. I left out a very important adjective.

**Gerhard Lazu:** So then it's okay.

**Whitney Lee:** Yeah. And I'll be talking about Knative Serving at that. I'll be doing a Knative Serving talk with no slides. So I'll switch back and forth from diagramming how it works, to going to the terminal and actually deploying an application and showing the experience.

**Gerhard Lazu:** \[52:06\] What about you, Mauricio? I know that you have so many things you don't even remember them, right? You have to check your calendar. So hopefully, we've given you enough time to do that... What's coming up?

**Mauricio Salatino:** No, no, 100%... I'm really hyped, because I'm going to do a KubeDay Japan, in Tokyo, on the 7th of December.

**Gerhard Lazu:** Wow. Okay.

**Mauricio Salatino:** And I think that I'm really hyped, because I will be talking all platforms, pretty much along the same lines of the keynote. I'm hoping to be able to do all the demos that I did, like, more live. I'm just going deeper into the technical side of things. But what gets me really hyped about this trip is that I'm taking my father with me, and it's his first time in Tokyo and in Japan.

**Gerhard Lazu:** Wow, okay...

**Mauricio Salatino:** And it's one of those places that on his own, he will never go there, so I use this opportunity to take him with me and visit the city and see the craziness of Japan.

**Gerhard Lazu:** That's amazing. Okay, very nice. What about Christmas? What's happening for Christmas?

**Mauricio Salatino:** Christmas, I'm staying here in the UK, but for New Year's Eve I'm going to South America, to Argentina and Uruguay to spend 15 days disconnected, trying to recover, so I can come back and actually finish the book.

**Gerhard Lazu:** Very nice. Hopefully, you'll keep Twitter switched off, because I know that is something that is constantly distracting you, right? There's always a message waiting for you. Or a like or a thumbs up, or something like that. Okay. What about you, Whitney? What does Christmas look like?

**Whitney Lee:** My brother and I are doing a vegan tour of India, so we'll be in India for Christmas and New Year, together. So that'll be something I'll remember for the rest of my life, I think... But I'm really looking forward to it.

**Gerhard Lazu:** Well, if we're going to do a vegan tour, I can't imagine many more places better than India, with all the flavors, and all the local cuisines... It's a very big place, and a very interesting place. They lie to the senses, I hear.

**Whitney Lee:** Wonderful. I've never been, so I trust your judgment.

**Gerhard Lazu:** I only hear. I hear that. If the Indian Ocean counts as India, I can tell you it's very good. Okay, so what else would you like us to talk about? I mean, I don't do this often, but you have, between two of you, so much experience, and you see so many things... So anything that you'd like to talk about in this context? Kubernetes, cloud native, tooling, people... Anything interesting?

**Whitney Lee:** I can talk about like personal anecdotes more than -- I can riff off of your tooling talks, but I don't know what to bring up. But I think maybe it's interesting how Mauricio and I met each other...

**Gerhard Lazu:** Yes, Whitney, how did you meet Mauricio? That's a very interesting combination. So let's start right there, because I'm intrigued.

**Whitney Lee:** So I met some Knative people at KubeCon last year, and somehow Mauricio got onto my radar. I'm sure someone just retweeted one of his blog posts... He had some general blog about the state of something or other, and so I happened to click into it, and I read it, and I was like, "This guy seems nice, and he seems like he knows what he's talking about", and I followed him. I had a generally positive impression... And also, he's only an avatar. So based on his experience, I thought he was probably an old guy, too.

**Gerhard Lazu:** Okay... Interesting...

**Whitney Lee:** Nothing against old people. I like them.

**Gerhard Lazu:** Very wise person. Experienced. Wise. Seasoned. Okay, okay...

**Whitney Lee:** \[laughs\] So I followed him and didn't think much of it. And then I'll leave it to Mauricio to tell his first impressions of when I came onto his radar.

**Mauricio Salatino:** Yeah, so it was pretty wild... So you know that I'm always like submitting proposals for different conferences, and there's this conference that I've been doing for the last eight years or something, which is JBCNonf in Barcelona. I have my parents living in Barcelona, so for me that conference is a good excuse to go to Barcelona, and also to meet with the Java space there in Barcelona. Because they started in the early 2010s with the conference, they have been growing a lot, and they have been building a lot of expertise about building these events, and creating a community, which is really nice. I've seen kind of like that progression, so it's always good to go and sync back with them, and see what they're up to.

\[56:21\] So I was about to submit my presentation, my Knative presentation, I started working with the Knative project, I made some contributions, and I had some very interesting topic to discuss there... So I was about to submit my proposal when I noticed that there was someone already talking about Knative, and that was Whitney, who had submitted a presentation to the conference. And I said, you know, okay, where does she work? She worked for the same company that I was working for. So I said "Okay, let's go to Slack and reach out" and say, "Hey, let's collaborate in the future, because we are talking about the same things, so we should be doing things together." And that's when I reached out via Slack, and said hi, and introduced myself, and we started talking because it actually made a lot of sense to start collaborating. And at that point, I think that I received the invitation for Enlightning, because you were starting with that, and you were looking for new speakers on people to cover different topics.

**Whitney Lee:** It was great. He reached out to me, and to him, I was like -- yeah, some person at his company talking about a technology he's a maintainer on. And he's like, "Who the heck is this person?" But I didn't even realize -- I was so green, I didn't even realize how much I was putting myself out there, or representing the company, or like needing to interact with the community as part of being in the public eye.

So he contacted me, and I had that experience of knowing who he is, and admiring him, and thinking he knows a lot of stuff... And so it was a little intimidating for me when he reached out, but he was also so friendly. I also had that impression, that he was really friendly. So him wanting to collaborate - I don't do this anymore, but back then, in like February of this year, as soon as someone said, "Hey, Whitney, I want you to do this", I would very quickly say, "I know nothing. I'm brand new here. I barely know anything." I don't do that -- I know a lot, actually, now... So that was my first, like, "Oh, I'd love to collaborate with you, but you're like seven rungs ahead of where I am right now."

So it's lovely to think about that moment, and then think just like later the same year we're gonna do a keynote together, and it's gonna -- you know...

**Gerhard Lazu:** Wow. That's an amazing combination. I mean, again, I told you, and I actually meant it; it was recorded, so everyone heard it... This was the best presentation that Mauricio gave, this keynote. Really, really good. Really good stuff.

**Whitney Lee:** But to be fair, Mauricio's presentations are awesome all the time. He does a great job of -- yeah, his demos are really well put together, and they get to the meat of what needs to happen, and he explains things really well... So I maybe can make things even more simple than what he does, and then I can add the color and the flair and the fun... And I also have a deep understanding of what's going on. We're great team, 100%, and we are yin and yang; our skills dovetail really well. But I think Mauricio is a very solid presenter on his own. And I like to think I am, too.

**Gerhard Lazu:** So full disclosure, Whitney - we worked together with Mauricio. We were part of the same company. We worked even on Knative together... So the only reason why I'm joking with him is because we have some history together, and he knows how to take it. No, no, no, he's, he's amazing...

**Mauricio Salatino:** No, but to be honest, I think that we actually complemented very, very well together, because of that. For example, one of the things that I quickly recognized - like, my presentation style is I will add as much content as I can. I will just go full in, very, very fast, through the entire presentation. And for like a keynote, you can actually not do that. It's kind of madness just to try to add too much content. So we need to spend a lot of time cutting things, making sure that the story was coherent, and it actually made sense...

\[01:00:05.29\] And also, we wanted to make sure that we sounded relaxed, and not rushing all the time. That's kind of why we needed to decide, for example, that the demos should be recorded instead of actually running the demos live, which was my dream, right? Like, at that point I really wanted to go ahead and just do the live demos. But at the end of the day, that gets in the way of how do you deliver the presentation, and how it feels, like, how the message feels at the end.

**Gerhard Lazu:** Yeah. And as a keynote, you don't have 40 minutes, right? So if something goes wrong, it can easily take up half your time. You only have 15-16 minutes, something around that mark. And it has to be relaxed, it has to be memorable, it has to be a lot of things... And it was. I enjoyed it very much. I wish I had been there in person, I really do.

**Mauricio Salatino:** I think that's something that actually helped us a lot is that we have people cheering in the audience. When we were just presenting -- probably in the recording you cannot see it, but we had some people there in the audience actually chewing up, and reacting to the different switches in mood, and the jokes, and all that stuff... Which I think that for us as presenters, it gave us kind of like the right feedback just to even do it better.

**Gerhard Lazu:** That was a bit like your concert, Whitney, right? Like your past performances; did it feel similar to that? Did it feel familiar?

**Whitney Lee:** Yeah... And it's the experience of -- mostly what's in your eyes is light, so you're going off of the sounds of the audience more than anything you can actually see. For sure, it's a similar feeling. This felt more vulnerable. When I was in a band, I sang harmonies, and I played keys quietly in the background. I wasn't front and center in the full focus of attention the way that it was with the keynote.

**Gerhard Lazu:** Nice. So as we are preparing to wrap this up, I'm wondering about the key takeaway for the listeners that stuck with us all the way to the end. Who would like to start?

**Whitney Lee:** What's the key takeaway? I mean --

**Gerhard Lazu:** So from our conversation... You know, we had we had a great time together. What would you like our listeners to remember from this conversation? Something for them to take away, something to remember, whether it's the keynote, whether it's what we talked... Something important, something that they can be like "Yeah, from that conversation, I remembered one thing, and this was it." Have platform teams, for example... I'm just giving examples. You know, "When you give a keynote, try to give it with Whitney", maybe, I don't know... Or go to Whitney for presentations... Or anything. Anything you want.

**Whitney Lee:** So I think all the things we talked about technically are important, and platform teams are important... But I think we've made a good case for that in the keynote itself. Talking now, I think the takeaway is more about community, and being kind to new people in the community. You never know where your next opportunity is going to come from. And really, even in the context of platform building, how much the interactions between people are really important.

**Mauricio Salatino:** \[01:03:08.28\] Yeah, I would say that the more that we are maturing in the Kubernetes community and in the CNCF space, it's like being welcoming to new people, having people like Whitney creating content for these audiences, explaining all this background, and all these complicated topics, and how all these crazy tools work together. It's really important.

And I would go back to that mentorship space, right? Like, use these conferences, use these events to find people that you will look up to and learn from, and also make sure that you connect with people that are newer in the industry, so you can also share your experiences and bring more people in. For me, that's the most valuable part of these kinds of conferences and events, and that's why I'm so happy to go to Tokyo, which is a completely different community, a different society, a different culture, just to see if I can learn something from there, but also to see if I can mentor someone in that space.

**Whitney Lee:** Mauricio, you've been kind of a mentor to me, and I appreciate that. Thank you.

**Mauricio Salatino:** Aww... You have been mentoring myself, too. I've learned a lot.

**Gerhard Lazu:** If you want to learn something, try and teach it. And then you learn things about yourself. That's what they say - if you wanna really understand something, try and teach it to someone that maybe is not as experienced, that doesn't make certain assumptions, or understands things easily, because they will force you to dig deep, and maybe think differently than you would normally present it.

**Mauricio Salatino:** Exactly. And it's all about perspective, right? When I think about my experience with Whitney -- because we know each other for such a short period of time, right? We are not friends forever, but we have been collaborating quite a lot, and you kind of see that even if I'm experienced in certain areas, I am completely unexperienced in others, where Whitney is very experienced, and she can share a lot of wisdom on that space.

So sometimes when you feel that you're like under-experienced in some areas, you need to know that you probably have life experience that can bring some stuff to the table... And from that, everybody can learn and share their experiences.

**Gerhard Lazu:** I really like that. We each have our strengths and weaknesses... And you know, I think the more experienced we get, we learn how to hide our weaknesses; we get very good at faking it, right? And it's not always the best strategy. Sometimes it's good to be vulnerable, to show "Hey, I really don't know that thing. I forgot. Can we check it together? I don't understand. Actually, you know what - I never I never understood this thing. Whitney, can you help me diagram this so that I understand it?" Things like that. So that makes a lot of sense to me.

Alright. Those were amazing takeaways. Thank you very much both. I had a lot of fun. I wish we started recording a bit earlier, because we really laughed like crazy before. I think that was like the best part. So yeah, next time I'll know how to do it. I wish some of those jokes would have been in. They were so good. But anyways... So thank you both. I had a lot of fun. I'm looking forward to next time, because there will be a next time, I promise. Thank you very much, and have a great end of the week, have a great Christmas, New Year... Because we are getting there. We're in it last month. Many of us are thinking about that. I definitely am. Have great travels, safe travels, and see you in the new year. Thank you both.

**Mauricio Salatino:** Thank you, Gerhard. Have a good one.

**Whitney Lee:** Bye! Thank you so much.
