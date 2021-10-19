**Daniel Whitenack:** Welcome to another episode of Practical AI. This is Daniel Whitenack, I am a data scientist with SIL International, and I'm joined as always by my co-host, Chris Benson, who is a principal emerging technology strategist at Lockheed Martin. How are you doing, Chris?

**Chris Benson:** I'm doing great. How's it going today, Daniel?

**Daniel Whitenack:** It's going wonderful. Have you got any cicada broods brooding down by your parts?

**Chris Benson:** So for any listeners that have listened to us for a while, they know that I do these weird wildlife things, and so yeah, I'm getting tons of calls totally outside the AI thing; our non-profit that does animal stuff - we're getting all sorts of calls about copperheads and all that, and people are afraid... And really, it's probably too late by the time people listen, but it's not an issue. There are no more copperheads than there ever are. So I know that has nothing to do with AI and ML, but there you go, there's my public service announcement for the cicada/copperhead thing.

**Daniel Whitenack:** Yeah, it is a fascinating thing that I hear people talking, of course, with climate changing and other things how the broods are a bit off... But it's hard to know a little bit, because also more people are reporting data via all sorts of apps and channels and all those sorts of things...

**Chris Benson:** That's true.

**Daniel Whitenack:** You're probably familiar with these apps.

**Chris Benson:** Yup. There's several of them.

**Daniel Whitenack:** \[04:01\] I think it's iNaturalist, and other things where people report different species, and that sort of thing, and those are fed into models and all sorts of goodness. I mean, it is interesting --

**Chris Benson:** I love how you just tied the wildlife thing in with the whole AI/ML thing. That was really good.

**Daniel Whitenack:** You know, it's just one stream of consciousness for me... I'm really excited -- well, Chris, you know that we're very practical on this show (at least we try to be) and relevant to our listeners...

**Chris Benson:** Indeed we are...

**Daniel Whitenack:** And I think that this is definitely going to be a very practical discussion, becuase we're gonna talk a little bit more about some new AI and ML developer tooling...

**Chris Benson:** Excellent!

**Daniel Whitenack:** ...and deployment tools and all of that stuff. Today we've got Tuhin Srivastava with us, who is co-founder and CEO of BaseTen. Welcome, Tuhin.

**Tuhin Srivastava:** Hi. Thanks for having me, Chris and Daniel.

**Daniel Whitenack:** Yeah, it was great to meet you. We had a chat last week and I was learning a little bit about some of the things that you're doing, and had to get you on the show right away... So I'm really excited to hear about that stuff. But before we dive into all that, could you just give us a little bit of info about your background, how you got into doing what you're doing now?

**Tuhin Srivastava:** So my background is actually in electrical engineering. I studied electrical engineering in college, and after college I decided that the right thing to do was to go work in finance in New York for a couple of years... It had nothing to do --

**Daniel Whitenack:** Yeah, that's the rumor in Academia that I heard, was like you can't sell your soul and go make a ton of money in finance... Not that you have to sell your soul to go into finance, but...

**Tuhin Srivastava:** Yeah. Well, I got to work on the fun problem of privatizing toll roads...

**Daniel Whitenack:** Oh, there you go.

**Tuhin Srivastava:** ...which is fascinating in its own way. But after a couple years of it I decided that this wasn't for me, and I decided to go back to engineering. So I actually moved to Boston from New York, to work at a weird academic lab at Beth Israel Medical Center, which is part of Harvard Medical School. There's a professor there who'd won a prize for coming up with a non-invasive way of tracking the progression of ALS. And he was spinning off a startup as part of that that was very data-driven; this is like 2011. I didn't know anything about machine learning or stats. I'd done a bunch of electrical engineering and information/signal processing in college, and I was like "I can probably convince him to just take me on." Boston startups are a weird breed, in that they're very research-focused, they get a lot of grants, and frankly, they're quite cheap... So I was like "I'll go and tell them to pay me hourly, and I'll go work there."

So I went there and I got to work with this guy and these three MIT Ph.D's, basically figuring out if they can predict the prognosis of neuromuscular disease.

**Chris Benson:** Do you remember their names? I'm just curious, because I've read up on ALS lately.

**Tuhin Srivastava:** Yeah, so the guy's name is Seward Rutkove, and the technology that he created was called electrical impedance myography (EIM). This is really interesting and it makes me excited, so I'll tell you really quickly what it is. We use EMG today to track how muscle health is progressing when folks have neuromuscular disease; it's a pretty horrible thing to go into every three months and have a bunch of needles poked into you, so his idea was rather than poke needles in and track the electrophysiological properties, to shoot a small current, a micro-current that no one can feel across the outside of the muscle, measure the impedance drop and see if that correlates with muscle health. And it does. He's been working on it for 20 years. I happened to catch him at a time when he was commercializing the technology. A really fun time... I got to work on all sorts of things. I learned statistics again... I really got into machine learning, so really, the first thing we did was... At the time, we were applying support-vector machines - this is like 2011-2012, when support vector machines were all the rage - to see if we could separate out healthy muscle from diseased muscle. Not very fun. Published a couple of papers, and... I was like "Okay, this is pretty cool. It seems like there's not that many people doing this. I could focus on this for a few years."

\[07:54\] So I did that for a couple of years, and my now-wife, then girlfriend was a Ph.D. student at Berkeley, I was like "I need to move out to California..." So I moved to San Francisco and started working at this company called Gumroad. Gumroad is a lot bigger now than it was then; I was one of the first few employees. It was an open-ended e-commerce platform, so anyone could sign up and start charging people, anyone could get paid out. A great idea for creators. Really, really horrible from a payment security and fraud perspective. \[laughter\] Especially in the early days we used to get hammered with fraud... So we just started first applying heuristics, and then we built out an entire ML pipeline there to not only catch fraud, but also the tooling to be able to deal with it once something had been flagged.

So I did that until 2015, and then -- I kind of have the entrepreneurship bug, and founded a first company which went through a bunch of twists and turns, and ended up being an operational analytics company where we would capture data from a bunch of different operational tools, create a BI layer on top of it. Not really ML related, more data-related. I sold that company in 2018, and then after working at the acquirer for a year I decided that I really want to go back and work on ML tooling. I'd built a bunch of this stuff... I think a lot of ML engineers and data scientists end up building their own tooling. Even today, it seems like the beginning of something a lot bigger, and I don't know where it's gonna take us, but I really wanted to work on this idea of "How do we get more people doing more machine learning?" and the tooling that will enable that.

**Daniel Whitenack:** I'm curious, as you were in that progression, you were sort of thrown into the fire, working with statistical tools and machine learning at various stages in different companies. Throughout that history was it mostly sort of you as a data scientist or ML type person working with a bunch of developers, or was it sort of a bunch of developers trying to pull in machine learning tooling where they needed it, for the fraud detection and stuff? What sort of patterns did you see as you were working at those various places?

**Tuhin Srivastava:** Yeah, that's a really good question. I didn't actually start as an engineer. I started as a data scientist and machine learning engineer, and when I was in Boston, working at the healthcare company, it was okay, because it was very academic, and a lot of it was in MATLAB; we could get a lot of this stuff done in MATLAB and throw it over the fence to someone who would happily take it out of that.

When I joined Gumroad, it wasn't like that... I was a data scientist and engineer with an early-stage company, I ended up hiring another data scientist and engineer who was a really dear friend of mine from Australia... We didn't have the resources to help us productize this stuff we were building, so we just had to learn it ourselves. So it was very much coming at it from a data scientist perspective... But I don't think I was ever lucky enough to have a team of devs ready to go, being like "Hey, we'll happily productize this or productionize it." It was very much -- I was expected, as a data scientist or machine learning engineer, to do that myself, or be resourceful about that.

**Daniel Whitenack:** So do you feel like in that process -- where was your time spent in that process, as opposed to before, when you were at the company where most of your time was developing these prototypes in MATLAB, and now you were having to bring in this engineering side of things... Like, how did that sort of split up your time?

**Tuhin Srivastava:** Yeah, that's interesting. Initially, I was obviously in the model development part of it. But what I realized really quickly was, like a lot of other data scientists, you end up being perceived as somewhat of a research function, as opposed to a product function. I found that really demoralizing. So what I found was that, in my best interests and the company's best interests, if I worked on getting myself out of the Jupyter Notebook and in front of other folks, as opposed to keep optimizing my model... Because you can do that forever, right? The model is never gonna be at 100%. What I realized pretty quickly was that for me and Phil (the other data scientist I was working with), we had already got the highest order bits out of the model. What was the most important right now was to make this practical for the company and have it plugging in back into the business process, and really have other folks, whether that be the CEO, whether that be other engineers, customer support, really seeing the fruit of what this model can enable for the company, for them.

**Chris Benson:** \[12:05\] It's a bit of a timeless problem that you're describing there. I know in the organizations that I've been part of over the years I've seen that same set of problems recur over and over again, as well as those same biases and perceptions that people have. You talked about people assuming that the data scientist just has a research function, whereas the three of us are talking here today, we understand the value of applying data science into the daily operations of business, and yet so many people have failed to do that. It's a fairly wide chasm to get all of the things together, to be able to not only do the data science, but to be able to communicate that out to the audience in an effective way, and in a way that is accessible and usable to them. How did you approach that problem? Because that's a massive problem, that many people have tried to tackle, and I don't envy you that... So how did you set about going about that?

**Tuhin Srivastava:** Yeah, I think I was lucky in that I've talked to a lot of customers over the last year and a half, and one thing we realized is that a lot of engineering functions - and this is just kind of the nature of the beast of where a lot of data scientists and machine learning engineers are coming from... A lot of engineers don't want them writing code. They're like, "Hey, it'd be best if you didn't do that." And I was lucky enough to be in a place where it was encouraged to write code... So honestly, for 3-6 months I just became a Rails developer.

The company's monorepo was in Rails, and I was like "I'm gonna figure out how to do this." I'd already done a little bit of Django programming on the side, and I was like "I'll learn Rails, I'll understand their language, and then I'll be able to bridge that gap." I think that was really good. It's been really great for me, because as I've gone through and built products over the last 5-6 years, being able to be an engineer has been great. But at the same time, I don't know if that's attainable. I don't think a lot of great, really intelligent data scientists who have a great intuition when it comes to models want to be engineers; I don't think they want to learn about unit testing. It may not be the best use of their time. But that's how I went about it.

I've heard this story enough, that there's a lot of leverage to be gained if you can somehow give data scientists engineering skills. And there's not enough folks who have both of those skill sets. Has that been your experience as well?

**Chris Benson:** It has, I mean -- Daniel and I both came into the AI world with lots of programming experience and different backgrounds. We actually did not meet each other in the AI/ML world, we met each other in the Go programming language world...

**Tuhin Srivastava:** Awesome.

**Chris Benson:** ...and kind of transitioned over. So I think my own perspective on that is that no one can master everything, but it makes sense to have some areas of strength, and then extend your tentacles in other directions so that you can collaborate with other people who also have multiple areas, but maybe their strengths are in a slightly different area.

So that's how I've kind of tackled it as I've worked with different groups over time. I'm always super-excited to hear about how people are addressing it. And the thing that you're doing that I'm really impressed with is being able to scale that out to many people, whereas I'm struggling to do it on my own, and to work with different teams, and to make those skills overlap... So I'm pretty excited to see what you came up with in your solution here to enable that for other people, such as myself.

**Daniel Whitenack:** Yeah, I do see this changing, and maybe this is what you're referring to, Tuhin, with things changing, and the landscape. Before, when I saw many tutorials for people getting into AI and other things, I really just focused on data prep training and evaluation. And I think there's just this sort of common perception that "Okay, I'm evaluated, end of story. I've done my job." And some people I talk to - just even this concept that you can save a model, you can serialize it to a file, and then use it later; that's something they're not quite used to yet. And I find that very -- I mean, even if someone's not going to be a very engineering-focused person, having some level of understanding of the integration points and how our work feeds into other things - that integration point is very important. Was that what you were referring to when you were talking about trends you were seeing, or other things?

**Tuhin Srivastava:** \[16:24\] Yeah, totally. And the thing I'm seeing more and more is that the thing is most valued is people who are able to take some data, write some SQL, create this simple dataset to train the model, start to train the model, and then if you can get it behind a Flask API working, decently performantly, not amazingly performantly - honestly, you're in the top 5% of data scientists, I think.

For me, the trend that I'm seeing is that people are valuing those people more. I think five years ago people were looking to hire data scientists, and more and more it's like "Hey, we want machine learning engineers." There's a difference there, I think. A data scientist is, in my mind, kind of a flawed title, in the sense that it just represents anything from someone doing BI as an analyst, to people building models, to ML engineers... And we're kind of separating those things out, which I think is great... But I think the trend that I'm seeing is that more people value those machine learning engineers; unfortunately, it's very difficult to find those folks. I think it's gonna take a bit for everyone to catch up to that. So that's the trend we're seeing, and that's one of the trends that we latched on to as well.

**Chris Benson:** I'm very curious - we've led up to it without talking, without diving into it yet, but I would love to hear the back-story about how the idea for BaseTen came about, how you moved into it, how you arrived at the start of that process.

**Tuhin Srivastava:** Absolutely. I think we've kind of gone through the context here, which is hey, it's pretty hard to get a model working. The hardest part of that, or maybe the most important part of getting a model working, from my perspective, and quite frankly, from the name of this podcast perspective, is making that model practical; it's making it plugged into some process, or in front of real users who can get feedback on that.

Again, as I mentioned, we noticed this, we learned that skillset. So I have two co-founders - one is Phil, who I've worked with a bunch, and our third co-founder was the head of engineering at Gumroad, who went to work at a healthcare startup which was very data-driven. And from his experience as well, there's so much tooling that needs to go in once you have that model, whether that be the deployment, monitoring, tooling... But more importantly, the stuff that happens afterwards, which is how do you integrate that into an existing system, or build an application out of that model.

What happens today that we notice over and over again with people who are building these sh***y... Sorry, I don't know if it's okay...

**Chris Benson:** It's okay, keep going.

**Daniel Whitenack:** There's a lot of them out there. I've seen them with my own eyes.

**Tuhin Srivastava:** Yeah, Flask apps that they're definitely not gonna scale. It's pretty hard to get them deployed. Everyone starts by pickling their models really quickly, as soon as their model gets any significant size you can't fit it in the memory anymore, so you kind of keep pickling and unpickling things...

We used to do this stuff ourselves. I'm not hating on it at all. We built these really bad systems where we took a model, and especially at Gumroad, we then deployed it; so we built a fast KPI, we were pickling and unpickling it on the fly... Not great. But then we were building all the application logic that sat on top of that model. So hey, model gets run -- so you compute the features, the model gets run, and then the decisioning part of it, if the model exceeds the threshold due to X, Y and Z, otherwise put it in front of a human to go and review that transaction... What we did was we went and built all those things. So we deployed the model, we built the backend service to support that model, and then we also learned frontend engineering to go and build that queue-like interface for folks to do that.

\[19:48\] My co-founder had a very similar experience at a healthcare company, where they were trying to predict diagnoses from a medical record. They wanted to put that in front of the doctors, so the doctors could get feedback on it. The way they did this was they ran the predictions in Bash, they piped into some data warehouse, ported it out, put it into Excel... I'm not joking, they sent the Excel file with the patient ID and the predicted diagnosis to the doctor, and also feedback.

Obviously, the doctor is not gonna act on that, right? They're gonna be like "This is too much work." So I've kind of led up to this, where I'm saying that, you know, if you are that top 1% of data scientists or machine learning engineer who can do all those things that we had to learn how to do - this is great; you can do that. But for the rest of them, can we give them leverage to become that data scientist? And what does that leverage mean?

So what we went and built was a way to lower the barrier to usable, productized machine learning. So today with BaseTen you can deploy machine learning models with a couple of lines of code. What that means is that you import BaseTen in your Python library, you `baseten.deploy` with your model binary, and then we take care of everything. We create a Docker container, we load it all up, you get an API that's ready to go, that's nice and scalable. And really, don't worry about Flask, don't worry about the infrastructure, the servers you need behind this to make it work. Do you need GPUs? It's literally an argument or a check of a box in our UI to pair it with a GPU. And don't worry about versioning. So you can keep deploying over this, and we can do version roll-out, and you can switch back.

What's most important though to us is the integration cost. This is really exciting that you can do that with a couple lines of code. But that's not really where we see our value. Our value is the stuff that comes after it. Can we make it so that as a data scientist and machine learning engineer you can also write all the business logic on top of that model? So we kind of give you a serverless framework to be able to write logic on top of that model. So you can build APIs, you can run things from cron, you can even have forks that you can have decision points within that business logic.

A data scientist or machine learning engineer can do all these things without learning any infrastructure. All they really have to worry about is their Python code. And that complexity of the infrastructure doesn't vanish, it just shifts. And we think we can take care of that, and all you need to worry about is your code, your Python and your model.

Lastly, something that we loved -- you know, at times we were kind of told that we were trying to boil the ocean here, but that's fun to us. The last thing we do that we love is - you know, we always wanted to put an interface on that model, so that folks could either get feedback on it, or operate at the output of the model. So if you're building a recommendations model, can you really quickly assemble a UI, so someone can input something, run that model that you deployed, see the recommendations, and give feedback on each of those recommendations, so the data scientists can take them and really get those iteration cycles going. So you can build that in a drag-and-drop way, without learning any JavaScript, HTML or CSS.

That's really where we arrived for now. What we, again, hope to be able to do is just give more machine learning engineers and data scientists that leverage so they can ship full-stack applications, and hopefully as a result of that what we will see is that people see results from machine learning faster, and as a result, they will invest in machine learning more, because they'll see what it can do for them. Sorry, I just spoke for a long time.

**Chris Benson:** No, it's good.

**Daniel Whitenack:** That's great. Yeah, really good to get that whole context. One of the things that I find interesting is - like, I see sort of a trend on my end in terms of ML/AI; in that world there's sort of this trend to kind of no-code solutions, and that sort of thing, where things plug together. What I find interesting about what you've just talked through - it's not no-code; so the data scientist is still working in their Python world, but then it lowers the barrier to these other things.

A data scientist, if we assume they're working in Python, it's not that far, like you say, to maybe have them think about a Flask app, or something like that. But then as soon as they try to start getting that out into the world, they're like "Oh, how do we scale this up?" and other things. And then they find out "Oh, there's these various layers of abstraction that I need to think about, like containers... And then how does that scale up? Well, now I need multiple instances of my service behind a load balancer. Where are all those containers gonna run? Well, they're gonna run in Kubernetes, or some container orchestrator."

**Tuhin Srivastava:** \[24:15\] Totally.

**Daniel Whitenack:** It starts to develop in their mind this sort of like inception dream within a dream within a dream. They just sort of keep going down that thing, and things start becoming less clear, and really strange.

So I think it's cool that you can still let them operate -- from my experience, data scientists and people working in this area love opening their Python editor...

**Tuhin Srivastava:** A hundred percent.

**Daniel Whitenack:** ...writing out their code, really having fine-grained control over the pre-processing, and fine-grained control over how they build their model architecture, and all those things... That's sort of where they wanna live. So not like taking that away from them and saying "No, don't do that in code anymore", but sort of letting them still enjoy that part of their code, but then adding on these other things I think is a really interesting way of thinking about it.

**Tuhin Srivastava:** This guy who has become a friend of sorts, He had this great tweet over the weekend, which was "What I want even more than no code is yes code. But literally, you never have to think about infra at all." And I think that is, from our perspective, a great articulation of the data scientist's issue. Python is a really valuable tool. You take Pandas away from me, I'm a third of the person I was. \[laughter\] I want to write Python, and I want to be able to do SQL as well. But I don't wanna think about Docker and Kubernetes; I don't wanna think about "If I deploy a model, how do I switch versions? How do I A/B test things? How do I monitor things? How do I deal with downtime?" Code is great, infra is hard.

**Chris Benson:** Yeah. Before I ask the next thing, I've gotta say, you have some really good one-liners in there that I'm gonna steal for later on...

**Tuhin Srivastava:** Please do.

**Chris Benson:** The "Boil the ocean", well that's what I like to do. Because I hear that all the time... \[laughter\]

**Daniel Whitenack:** Every day of my life, yeah.

**Chris Benson:** Yeah. You've had several there, so I'm stealing your stuff, dude.

**Tuhin Srivastava:** I appreciate it.

**Chris Benson:** I wanted to ask - so one of the things that it sounds like you've done a really good job on is by taking those levels of abstraction, as Daniel referred to it, the dream within the dream... You can only handle so many layers of abstraction, you can't do it all, and it sounds like by taking control of some of that, that somebody can use BaseTen to integrate in with an existing environment by using the APIs. So they get a big payout, and they don't have to worry about all of the things, from containers - you name it; all the things that Daniel just talked about - and yet, can get the benefit that way... Which is quite beautiful, because I know that it's kind of where people have been trying to drive to, and it sounds like you've gotten a very nice, elegant solution for achieving that. Is that fair? Is that how you would think of using it?

**Tuhin Srivastava:** Yeah. I think we're very early on, and early users will tell you that there's a lot more elegance to be added...

**Chris Benson:** There always is.

**Tuhin Srivastava:** But that is from an abstraction perspective, absolutely. I think one of the things that we did early on was we kind of defined the principles of the architecture that we wanted to build, and I think two of them that really stand out here are the principle of least astonishment. The "take it away, but don't make it magic." It's like "Hide it from me, but still give me ideas as to what you're doing."

**Chris Benson:** You have a blog post that includes that information, I noticed, which you could talk a little bit about here, because I was gonna bring that up as well.

**Tuhin Srivastava:** Yeah, so the principle of least astonishment is really important to us, just because, again, data scientists and machine learning engineers - we're kind of like these pseudo-engineers; we're somewhere in between. We know what's going on. Maybe we don't know all the intricacies. So all the abstractions, but try to keep quite similar to firstly what data scientists and machine learning engineers understand, and two, even building an application for our end user. There's a backend, there's a frontend, and you see these concepts in BaseTen. We separate them out and we allow the interplay of them, but we're not hiding them altogether.

\[28:04\] The second thing which I think you're kind of talking about - this is something that we saw from one of our early engineers, it was like "Easy things are easy, and hard things are possible." To me, that's such a great line. We want 80% or 90% of the things to be simple. You don't have to think about them and they just happen. But that shouldn't come at the expense of control and visibility. I think that's one place where a lot of lower code or no-code abstractions get dinged; they hide things away and you're kind of like "Well, how did that happen?" That kind of scares me.

We are exposing these things, and so you can go deeper if you want with each of our concepts, because we are built on Docker, Knative, Postgres. You can write Postgres queries, you can inspect those technologies and go deeper if necessary.

**Break:** \[28:50\]

**Daniel Whitenack:** So with your solution we've talked about several different things. You talked about the sort of importing a few lines of code, deploying your model, and also this sort of UI builder. Could you describe for someone maybe that's listening to this that doesn't have a web page app, could you just describe a bit the developer workflow in terms of what they would need to do with BaseTen versus in their code to take their model from local model to an API, and then also maybe to build in one of these UI apps around it? What does that workflow practically look like at this point?

**Tuhin Srivastava:** It's a really good question. So you start the workflow from where you do your work - from a Jupyter Notebook... I mentioned earlier you could import BaseTen and `baseten.deploy` your model. That's it.

**Daniel Whitenack:** And that would be the REST API sort of framework?

**Tuhin Srivastava:** Yeah, exactly. Basically, we work with PyTorch, scikit-learn and TensorFlow models right now. You can also write a custom model. So if you just create a class with a load and a predict method, basically every time the model gets run, that predict method will get called; the load is kind of the deployment step. Again, easy things are easy, hard things are possible. If you want to do more, you can do those things.

But once you deploy it with that single line of code or couple lines of code, what you end up with is a REST API. You go to BaseTen.co, you'll be able to see the status of your model, all the times that it's being called, but then you get instructions on how to call it from your own services. Straight away, once you are there, you can easily move from the realm of the model to the realm of the application, and that's what we're really excited about.

So for that model, you can then write all the pre-processing code and post-processing code within BaseTen, in the browser, around it. So think of it kind of like -- you know, we're still iterating on this and figuring out the exact right experience, but right now it kind of represents the DAG that you are used to in Airflow. So you can write the code within BaseTen, it's represented in a graph-like structure... Again, there is a shared state and context between each of those notes and that DAG, so you can reference things from the pre-processing node and the post-processing node... But you can do other things as well. If you wanna call the Twitter API, it's a Python-like environment, so you can bring in whatever libraries you want. Once you have done that, now that entire thing -- we already gave you the REST API for that model. That entire thing is callable by an API.

\[32:20\] You can also trigger it from a cron job. So we've got built-in support for cron, all in-line. Or you can call it from a streaming data source; if you have a Kafka queue, we'll build those integrations as well. So you've really gone from just a model in your notebook to something that was deployed with an API really quickly, and then in just a little bit more you can start to write the pre-processing and post-processing code and logic within BaseTen, put that behind an API.

So really what we've seen is stuff that would take 3-5 days of wrangling and getting it set up, without really even thinking about how to get it on AWS with an API - I don't like exaggerating, but it really is within 30-40 minutes we've had live services running with machine learning models.

I think the last thing now, as I mentioned earlier, is that now you have kind of like -- so you had this model, now you have these API endpoints; then you can start to build UI within BaseTen, and link actions within that UI to those API endpoints.

**Daniel Whitenack:** So with this deploy method, one of the things I'm thinking about, just from your perspective in terms of developing this infrastructure is all of the crazy stuff that varied frameworks and architectures and everything that people are using - so they have all sorts of crazy dependencies, some people are using, like you're saying, TensorFlow, some people are using PyTorch... Right now, how do you approach that sort of dependency stuff? You mentioned supporting TensorFlow, PyTorch models, scikit-learn models... What about the other dependency stuff? Is it a matter of pulling that from a person's virtual environment, or how do you go about handling that side of things?

**Tuhin Srivastava:** Yeah. Again, as I said with the PyTorch and TensorFlow and scikit-learn stuff, you don't have to really worry about that. With the custom model stuff - we do need that. We do need to know what requirements you need, so really, when you deploy that custom model, you also pass to us a requirements.txt, and then we basically set up the environment with that ready to go.

**Daniel Whitenack:** Cool. So I think this conversation has clarified a lot for me, and sort of where I'm distilling things down is that it seems like if you look at the sort of landscape of developer tooling for AI people, there's sort of some things kind of over in one area around MLOps and experiment management, like logging experiments and all of the things, you can run your Jupyter Notebook and log your experiments, and put your job in queues for GPUs, or whatever... And then you've sort of got maybe on the other side of things widget and prototype type builders, you've got like Streamlit or Gradio or something; in the middle maybe you have some serving frameworks that people use - maybe it's like a TensorFlow serving, or something like that... But this path from one side of that to the other just involves so many different jumps between different sort of systems, and spinning up all sorts of different kinds of infrastructure and all of that...

And I think all of those tools have obviously some really interesting features. It almost seems like you're sort of -- not all of it, but you're gluing many parts of that together in sort of a consistent workflow for people, that really could accelerate them through that process from experimentation to deployment. Am I characterizing that right? I'm trying to think of how people might view this with reference to other things in the landscape they might be familiar with.

**Tuhin Srivastava:** \[35:58\] Yeah, I think that's a pretty good characterization of it. We talked a bit about this last week on our call - it's pretty wild how the MLOps tooling has evolved over the last couple of years. There's so many great point solutions out there... And that's kind of the MLOps side, the Streamlit hacks side. There's some really great notebook-based application builders that are out there... You know, putting all these things together is quite difficult; and also having to jump between three or four different tools to kind of have that end-to-end thing working - it's pretty hard, and...

**Chris Benson:** It's complex, yeah.

**Tuhin Srivastava:** It takes time, patience, budget... And most of these tools, including us - we're in beta still; you can't just sign up and you're ready to go. So it is difficult to do, but what we do want to be able to do is, again, when you're Aruba and you have literally millions of requests per second going through, BaseTen is not the right tool for you. You need something specialized.

When you're working on something that's in its infancy, or it's critical but it doesn't need that type of latency or doesn't need that sort of specialization, what we hope is that BaseTen can kind of fit the bill of that end-to-end solution. So you have your model, and rather than waiting for DevOps to come and deploy your model, waiting for a frontend engineer or a product engineer to come and build the things that make that model relevant, for 80% or 90% of the use cases we think BaseTen can be that end-to-end solution to 1) get your prototypes and toys out the door, and 2) in the end build this full-stack, mission-critical application as well.

**Chris Benson:** As you're looking now -- you're in beta, you're approaching release... What do you have in mind, what needs to be there that may not be there yet, that you're envisioning for release? Are there any new features, or is it solidifying the things that you already have in BaseTen? How are you seeing that 1.0 release in the short term?

**Tuhin Srivastava:** Yeah, totally. It's a really good question. So we did a launch last week, which was well received, and we got a ton of inbound from that, which has been great... But really, what we're trying to figure out in this next phase is usability. Again, there's the user and the use cases; they're intricate and they're complex, and figuring out "Hey, how can I get you to value -- how quickly can you have your a-ha moment and be using this in something real?" We wanna solve that, and we wanna solve that well, before we open this up to the world and say "Go out." Because we know that a lot of the decisions that are easy to iterate on and change once you are working with a small, core group of users, where you know that value is to be added.

**Daniel Whitenack:** As you're having all of these discussions with users... Obviously, right now you're talking to a lot of people, you're getting feedback, so you're sort of seeing a cross-section of the industry, to some degree. As you're having that perspective and maybe looking at the industry more generally, as we close up here, is there anything in terms of the AI/ML industry or maybe the developer tooling industry that just sort of generally excites you in terms of where the industry is headed, or maybe capabilities that are being developed, or other things? What's on your mind? I mean, you're obviously focused a lot on BaseTen right now, but what are those things that you're thinking about towards the future?

**Tuhin Srivastava:** \[39:03\] Yeah, so there's two things that I keep thinking about which make me really, really excited. The first one is -- one of our investors has a really good campus recruiting program, and so we're able to spend a lot of time with new grads. What's really exciting to me is that nine out of ten software engineers (not data scientists) coming out of the best schools in the country, or honestly any computer science degree, have exposure to AI and ML. They've taken a couple of courses... At the very least they can frame a problem in terms of how machine learning can solve it. And that to me is amazing, because that means that the amount of evangelization that needs to be done within a company is lower, because people already appreciate what can happen with that.

The second thing which should be considered in line with this or together with this is the prevalence of pre-trained models is going up. Hugging Face has done so freakin' well over the last couple of years, and almost every company that we talk to who's starting some NLP initiative is starting with Hugging Face; maybe with some fine-tuning step, but to me, that's really exciting... Because you have two things going on - you have one thing going on, which is more and more people know what ML can do, and two is that there's all these ways to have that model ready to go. You don't need that two or three-month effort to get that first model up and running. Put those things together and I think you've got something really special. People understand what the tool can do, and more powerful tools in the form of pre-trained models.

I think that's one thing that we're kind of leading into as well, even with our user base - we're not only considering data scientists and machine learning engineers as our user base, but are you an engineer who knows what ML can do for you? Because if you are, we hook up all those pre-trained models and give you a model zoo. So if you wanna have a zero-shot classifier, you don't really have to think about anything; you can have it embedded in the workflow, in the application with BaseTen, as long as you know how to frame the problem.

I tied it back to ourselves, but from a high-level, those are two things that I'm really excited about.

**Daniel Whitenack:** That's awesome. Those are really exciting. It is really cool to see... Most conversations now that I'm having with teams in companies - you don't have to get over the hurdle of "We expect AI/ML to give us some value", it's more like entering into the follow-up discussion to that, which is where is their value, where should we focus, and that sort of thing. So technical teams are really thinking about this a lot, which is cool.

Thank you so much, Tuhin, for joining us. This is really exciting. Congratulations on your launch, it's awesome. We really hope that our listeners - please check out what BaseTen is doing; we'll have links in our shows notes, so check them out. Talk to us about some of your opinions about this in our Slack channel. You can always find us in one of our communities on LinkedIn, or go to Changelog.com/community, join our Slack channel and we are happy to chat with you about BaseTen and other things.

Thank you so much, Tuhin, and we'll let you get back to work.

**Tuhin Srivastava:** Thank you guys so much. You guys are really nice, and it was really nice being on the show.
