**Johnny Boursiquot:** Hello, hello, hello, and welcome to another episode of Go Time. Today, I have some special guests. I have some experts on the migratory patterns of the little-known godwit bar-tailed bird. These gentlemen are going to wow us with their expertise and knowledge on... I'm kidding. We're just here to talk about some AI and observability stuff.

**Mat Ryer:** I've got ChatGPT. I think we could do that show.

**Johnny Boursiquot:** \[laughs\] We probably could. We probably could. We just have to ask a few questions and it'll answer us. Speaking of asking AI for questions, our show today is going to be about using AI to ask questions of observability tooling, and products, and whatnot. Joining me is our very own Go Time co-host, Mat Ryer. Mat, say hi to the people.

**Mat Ryer:** Hello. Hello, everybody. I was totally ready to do that migratory bird podcast episode, Johnny. I was just going to completely blag it, and I was going to do a big Scottish accent.

**Johnny Boursiquot:** Yeah, you've been on a migration as well, right? We haven't heard from you in like a minute on this show. What's going on? Where have you been?

**Mat Ryer:** Well, I've been working hard at Grafana Labs. Too hard, I think, you know. So yeah. Well, not too hard, but it's good stuff, and it's all very exciting. So you're just sort of getting wrapped up in the whole world, and... Yeah. But I need to find time for my friends, and that's an important thing to remember. Work-life balance is very important, of course.

**Johnny Boursiquot:** Yeah, that's a lie, but we'll save that for unpopular opinions. Also joining us on today's show is one of the people Mat overworks with. Yasir Ekinci. I don't know if I'm saying your name right. Please correct me, introduce yourself, Mr. Yasir.

**Yasir Ekinci:** I am Yasir, or Yas, to be short. I mean, it's a weird one, because I'm Turkish; it's a Turkish name. So it's like Yasir, but nobody could pronounce my name properly. I live in Belgium. Nobody could pronounce properly in Belgium. In England it became like Yasir, so I was like "You know what? Let's keep it short and simple", and that's why I typically go by Yas. Like you said, I work with Mat, unfortunately, at Grafana Labs, for just over three years now. I really started in the ML team, and I think like three years ago, together with Mat, we were just about like starting that team. The team existed for like two months before us... And it's been quite a journey since then.

Before that, my background is really more in like econ stats... I've been working in this -- I mean, I'm not going to call it AI, because (unpopular opinion) I hate the word AI... But we'll get to that later. I've been working just over like 10 years in the space. My first job, it was called data mining still, before AI was cool... But a lot of the things still carry over to today.

**Mat Ryer:** Yeah, they got away from data mining, because it's a really dangerous job. A lot of people lost their lives. It's not very safe.

**Johnny Boursiquot:** You go underground, you go underground. It's like real mining. It's like coal mining, except for data.

**Mat Ryer:** Exactly. Yeah. And it's dangerous down there, you know. And I don't know why there's even data down there. Why are we digging that deep for it? So I'd pretty much prefer the modern approach, where it's more about databases.

**Johnny Boursiquot:** Well, good, good, good. Yeah, I do prefer that, too. I think it's healthier. Not as much gets into your lungs that way.

**Yasir Ekinci:** Yeah. My dad actually was a miner when he was younger. I don't mean like "and then he grew up", but he was actually in the mines, down in the pits... And he used to -- yeah, he'd come home and he looked like he was wearing eyeliner, or guy liner, because he'd have like soot in his eyes, and stuff. Obviously, it's not showered out properly, but... Yeah, he sort of looked like a seventies rock kind of glam star. It was great.

**Johnny Boursiquot:** So the whole time you just thought your dad was a rock star coming home every day.

**Mat Ryer:** Yeah. I knew he worked with rock. I know it was something to do with rock... And yeah, I think it was that. But then I learned later he was not doing that.

**Johnny Boursiquot:** Right. Right. Yeah, hard stuff. Hard stuff. Yeah, let's let's turn our attention to what we're here to talk about. So on a quick search -- I've gotten to use, to a certain extent, some... We'll use the term AI. Yas, you don't like that, but to make the whole conversation more approachable, we'll call it AI.

**Mat Ryer:** Yeah. So you can't just come on the podcast and say "You can't include these words now." That's too much of an ask for a first time guest.

**Johnny Boursiquot:** \[00:08:07.29\] Right. Yeah. Come back a few more times and you get some privileges. Yeah, but pretty much every vendor of observability tooling is sort of rushing to add some sort of -- well, not just observability tooling; I think everybody's sort of rushing to add some sort of AI capability. Sometimes that blends well, sometimes you're scratching your head and wondering "Are you trying too hard?" But at the very least, everybody is trying to use gen AI in some capacity to make the job of finding things, identifying things, working with things a bit easier. So I thought "Hey, why don't we have people who actually work on these systems come on the show and talk about what it takes to actually do this work?" Basically what I want to hear in particular is what were you doing pre-AI, pre-gen AI, that you now are doing differently because you're introducing gen AI. From both the development perspective and from a sort of product perspective.

**Yasir Ekinci:** Yeah.

**Mat Ryer:** Well, on your first point, Johnny - and I think this is a really good one. Everyone is just doing AI for the sake of it. And one of the things that we said from the beginning was we aren't going to do that. And I remember we were very sort of clear that we didn't want any AI for the sake of it. If we could solve a problem using more traditional data techniques, then we would. There's no reason to crowbar it in anywhere. And then once you've done that, you are then left looking at "Where does it fit, really? Where can it actually make a significant difference?" And that's the approach that Yas and the team take. Isn't it, Yas?

**Yasir Ekinci:** Yeah. If I had to add, in terms of the difference, it's kind of weird, because in some sense it has made a difference in how we approach certain problems, and in some sense it has made no difference... As in we kind of know it's there, and I would say especially now, especially now that you can see overall in the market the hype bubble is kind of like fading away, and now people are actually seeing this for what it is... It's not like "Oh, it's complete snake oil and it's useless." I'm not saying that; it has some very valid, very useful use cases. But I think what we are seeing is -- and this is why I don't like the word AI, because when you say AI, that comes with a connotation of "Oh, this thing actually thinks like a human, can do the same stuff that we do, has the same reasoning capability", and what we're seeing is actually it's not that. It's really good at this interacting with language, and because it's using language, it gives you that illusion that there is this thinking machine... But when you go down, it's actually a very smart Google search that can do quite nice autocomplete. But like actual reasoning - it's not in there.

**Johnny Boursiquot:** So from a data handling perspective... Or rather -- well, let's think about sort of the process, from the ingestion, the collection, to where you make that information available. You do whatever you need to do to process it and put in the right format in order to make it queryable, observe, for me to look at a dashboard and see what I need to see from an operation standpoint. These new AI tools - do they play a role in the sort of ingestion, and sort of handling of the data before it becomes available in the product in some way?

**Yasir Ekinci:** They kind of do, they kind of do. I would say they kind of play a role, but interestingly, not in the way that you expected. Not in the systems themselves, but they kind of do play a role in helping people that are building those pipelines to get the data into those systems and setting those systems up.

\[00:11:56.01\] One of the big things, and even as a developer myself, one thing that I use day to day is when I open VS Code, I've got Copilot helping me out. That's an everyday thing. And sometimes it gets it right, sometimes it gets it wrong, but overall, even those suggestions give you some inspiration on "Okay, I'm trying to do this thing." It kind of takes the boiler plate away, it gets you where you want to go faster. Or if you're working with a very new technology, or like trying something new, in a new language, it can really be helpful there, because it can, again, provide you that baseline... And then it's still up to you to kind of like correct it, in a way. It can help you in that sense.

Otherwise, with dashboards we have experimented with generating dashboards from scratch, or even things like being able to edit a dashboard just using natural language. These things are possible. The generating dashboards specifically doesn't work that well out of the box, but that's less of a gen AI problem, but it's more of a structure problem, as in inside of -- like, if you take some of the popular data sources like Prometheus, for example, you don't have a lot of structure. And by that, I mean you don't know what the relationship is between metric A and metric B. You don't know if they're coming from the same underlying system, you don't know what labels, all of these things are available... So it's really hard to generate a query from that. But if we can add this structure on top, then that does become a bit easier for like LLMs to apply this inside of a tool.

**Mat Ryer:** Yeah. And there are different ways that we have AI, and different data techniques. One of the cool ones, one of the first big features I remember was the forecasting. And one of the nice things about Grafana, the actual dashboarding and all this sort of ecosystem around it is it's very pluggable. It's sort of the point of it; it's a big tent, you can plug everything into it. And so the team designed this... You can essentially go in and say -- so you've got a metric and maybe it's like CPU usage or whatever it is, aggregated, of all your systems. And you've got seasonal kind of traffic. Maybe it's like a food app, where lunchtime and dinner times are very busy, and the middle of the night, not so much. So if you set alerts up there, if you were watching that CPU and you set up an alert to say "If it drops down this low, let us know, because something's wrong. Or if it spikes up too high, let us know. We might need to do something." When you have that kind of seasonality, it's hard to find rules that fit that. And so the sort of like technique to train, essentially, learn from that, learn the sequence, learn the expected pattern and project that forward. And then you have kind of confident bounds around it... And then - yeah, you just say "If it now falls out of what you expect..."

So that's like a really nice, pragmatic one. And I love the way that the design of it was - essentially, once you've set it up, it became just another thing that you can plug into the Grafana dashboards. So it meant that you can visualize it, you can alert on it, and all those great things.

**Yasir Ekinci:** We actually exposed those forecasts as Prometheus metrics as well. So you can just use the same query language that you use before; when querying normal metrics, you can use that to query forecasts as well. The core thing is - and this is maybe where I need to make that distinction between the technology, and like the hammer, which is machine learning techniques and the generative AI, from what problems are we solving with it. And I think the problems we're solving, the two big ones actually in observability haven't really changed that much... The first one being around "Tell me when my service is not behaving as expected." And that's kind of like that alerting use case, where typically people would set a static threshold, but that doesn't always work, because of the behavior of your system, the behavior of your users. So you might want to have something that's a bit more dynamic instead.

\[00:16:00.27\] And the other one, which is "Well, once your system does not behave as expected - why?" This why question is like a really big one, because it's not easy to solve. So that's like another interesting, big area.

The third, new one I would say is a bit less directly related to those, but the third one is a bit more around make things easier to use. A very good example of that is we've got profiles with Pyroscope... And if you're looking at a profile, you see this big flame graph of like everything where the time is being spent in a particular call... And that's not really easy to understand, especially if you're coming into it new, or if you don't know exactly what this application is doing at this; if you're a new developer joining a team.

So that's kind of like where using generative AI and using the context of the internet that you can essentially call on, you can use that to explain what that profile is doing in human language. And I think that's kind of like the third new one that has been enabled by Gen AI.

**Mat Ryer:** Yeah. I love that one, because you're basically asking it to describe something that you can't describe in another way. The flame graph is structured data that you can describe that. And so you're asking it to translate that, essentially. So that, as a problem, it does a really good job of that. And if you've looked at flame graphs and just sort of wondered what's going on there, what do you read from it, just having an AI explain it to you - that is a phenomenal kind of... It works so well. So that's the kind of perfect place for it.

The other one is incident summaries. So just by looking at the timeline of what's going on, it's able to generate a summary from that. And you have to tell it, you have to literally tell it, "Don't make things up. Don't hallucinate stuff. Stick only to things that you can actually see." But if you do tell it that, it just does that.

**Johnny Boursiquot:** Those use cases... I keep thinking in my head - basically, to me there's three layers that, again, the broad term AI can be applied to. Now, whether you want to talk about, okay, make the user experience better for the customer using gen AI, or you want to use some machine learning and things that are not as sexy sounding, in sort of the system layer, and then you have the sort of developer experience itself... To me, there's those three buckets: the developer who's writing the code, and is being assisted by the tooling... And then on the other end is the customer, who wants to use natural language to ask questions of the data that you're providing. But I keep thinking that in the middle there, we don't talk about that enough... I'd love to imagine that these kinds of new tools coming up, or even existing ones that we didn't talk about, that weren't as trendy then, like machine learning, predictive analytics, and a lot of these sort of precursors to the whole gen AI trend, are used or should be used, or at least if they're being used, should be talked about more... Because at that level, this is where you can have sort of these tools help you, the operator of a product or a service or a system, help you identify when some things are going wrong. Anomaly detection, for example. If you didn't write an alert for a specific condition, can an "intelligent system" see basically that "Oh, okay, for this particular kind of customer, this is the typical ingestion rate, for this kind of data." And then all of a sudden it detects that, and it can tell you - because you've prompted the system, to use the term a bit broadly... You've prompted the system that says "Hey, one of your jobs is to detect anomalies. And this is how you do that. If the typical, average throughput is this, and all of a sudden it's that, then you need to raise an alarm." Basically, you tell the system what you needed to be on the lookout for. And then you can express those however you'd like, through code, through some sort of language, or if you want to use Gen AI to do that, you can do that, too. But ultimately, you have this system whose entire job is to help make you, the operator's job, easier.

\[00:20:21.08\] And again, not on the developer side, getting auto-complete, not on the customer side getting natural language to ask questions, but really on the systems side... What are we doing with that technology to operate services?

**Mat Ryer:** Yeah, so I'll just pick up one bit of that. So as I said earlier, one of the things with the AI team inside Grafana Labs, one of the things we said was we won't use AI for the sake of it. If there's a simpler technique, we'll use that. And so I think outlier detection that we have available in Grafana - that is not something you would call AI or ML. How is that actually done, Yasir?

**Yasir Ekinci:** I think it kind of fits somewhere between statistical approach and ML. I mean, the machine learning bit, I guess it's like if you're training any weights, I guess that fits under ML.

**Mat Ryer:** Yeah, yeah. So outlier detection, and anomaly detection, and change point detection - these kinds of things help you run systems. And we are literally building those into the apps. They show up there. A lot of them are available now. If people use Grafana Cloud, it's just kind of all there, and you can make use of it. And there's techniques like that...

The other thing is - you're right, so outlier detection is a nice one. So for example, you've got all these pods, and one of them or a couple of them start behaving differently to the rest. You want to know about that. And so yeah, that's an example of one that exists today, that does help you... Because you aren't necessarily -- and you're not training it, really, on anything. It's sort of compares -- I don't know how it works, really. \[unintelligible 00:22:01.22\]

**Johnny Boursiquot:** It's magic. It's wizardry.

**Mat Ryer:** Well, that's why we have this data science team.

**Yasir Ekinci:** I'll add to that - just generally, there's this gap between... There's the operator, that kind of, in your head, you kind of know what you want. Or even when we talk about like forecasting and seasonality, the operator knows that. They know that, for example, okay, in the evenings, my service is calmer, because people only use my service during the day. At the weekend there's more usage, or less usage. So they kind of know that, but it's hard to express those things in alerting systems, typically. Or it's hard to express them in a way that it always keeps working. You can try to do multiple if statements, essentially, and you just keep expanding that... But at some point, your alert is just going to get very noisy.

So what we're doing there with machine learning is really about - instead of like an operator manually trying to configure this, can we look at the data historically? Can we go back a month, six months, 12 months, and then figure out from the data itself what are these effects? What are the seasonality effects? What are anomalies that we've seen in the past? And based on that, so based on the historical data, can we set those thresholds properly?

Typically - again, I'm talking specifically in the context of observability here, but even things like classifying stuff, that's how it works. A machine learning basically is all about detecting patterns; patterns from historical data, or like historical observations. So this could be, again, you've got a bunch of different alerts, and they all fall into like four or five different buckets... Like, this is a latency alert, this is an error alert, this is something else... And the way that you would teach a machine learning algorithm like that is you would just give it a bunch of examples. It's kind of like a math exam, but you basically give it like all of these tests, and go "Okay, try to put everything in the right bucket."

\[00:24:04.00\] And the way that it works is it first does a step, you tell it the errors that it made, and then it goes like "Okay, let me take another step. Let me take another step. Let me take another step." That's a very simplified and probably wrong way of explaining gradient descent, but that's kind of like how it works. Like, you give it a lot of examples, and then you try to minimize the error, in a sense.

**Mat Ryer:** Is that where weights come in then? ...as each time it goes around, it's like weighting it slightly, one way or another.

**Yasir Ekinci:** Yes. I mean, you kind of see this with like big models, especially with big LLM models that are now being opened up, like for example, the LLaMA models from Meta... You'll see this thing where they talk about like 7 billion parameters, or 90 billion parameters, that talk about the model size. That kind of gives you an idea of like how much of the weights that you can change.

In a very simplified form, this is something like -- I mean, the simplest formula is almost like something you've probably seen in college, which is like Y equals AX plus B. And you're trying to figure out what is A and what is B. And the way that you do it is you just give it a bunch of examples, where 10 equals A times whatever the X is, and then plus B; you get a bunch of examples, and every time it sets an A and a B, those weights, you can basically then look at the total error that you made. You just sum everything up, you see "Oh, okay, I made this big of a mistake." And the big thing is then you can go "Okay, should A go up? Should A go down?" And same with B. And you just iterate through that. And obviously, because we have computers, we can do that iteration thousands of times. And that's how you do machine learning, folks.

**Mat Ryer:** Does it do binary searching when it's looking for those weights? Does it like jump a bit, and then hit the middle, and divide by that?

**Yasir Ekinci:** There are different algorithms. There are different ways. There's even algorithms on how you do that search itself. And especially when you get to like neural nets and large language transformer models, these algorithms can make a big impact in terms of -- you can even tweak things like how big of a step can you make in each iteration, what is the tolerance, when should you stop... So a bunch of things to tweak.

**Break**: \[00:26:23.02\]

**Johnny Boursiquot:** I wonder if there's a LeetCode for data scientists.

**Yasir Ekinci:** There is something called Kaggle. Kaggle is essentially -- it's a competition. Sometimes they even give out prizes. I'll preface this with I haven't been to Kaggle for ages. It's quite useful if you're just coming into the space, because they basically give you a bunch of datasets, and a competition where basically the most accurate model wins. And so you basically make some predictions, and then they have a specific test set that you don't get to see. They run your algorithm on the test set, you get a score, and the high score wins.

They've done a lot of interesting challenges... I remember one of them was around - I think this was a machine, like a robot in a factory, and they've got hundreds of them... And they basically gave you all the sensor readings. And also they gave you which of the machines failed, and you had to predict when a machine was going to fail based on that data.

**Mat Ryer:** That's cool. It was from a real factory, wasn't it?

**Yasir Ekinci:** That was from like a real, actual thing. They obviously anonymize it, because robots have privacy needs, too... \[laughter\]

**Mat Ryer:** Well, they can't accept cookies, can they? They can't click the "I'm not a robot thing." Not legally anyway.

**Johnny Boursiquot:** Oh, man... The EU is going to be pissed.

**Mat Ryer:** Yeah, but all the robots have USB-C now, so... You know what I mean? Swings and roundabouts...

**Johnny Boursiquot:** So are you training your own models to deliver your product?

**Yasir Ekinci:** Yes... I mean, for our product it's kind of a weird one, because we actually provide an algorithm that you apply on your own data. So we provide all of the infrastructure and the code to actually do it on our end, but basically you tell us, "Here's a series that I want you to predict into the future, so that I can do dynamic alerting on it." And what we do is then for each of those series, we train this model on our end. In our backend we train a model, and then we expose those predictions to you.

To bring the conversation back to the system end... There are some newer things that we're working on. These are still very experimental, but where we're looking at -- so far, all of these things that we talked about are really looking at one series at a time kind of approaches. The other thing that we're trying to do is looking at the whole system; the system as a whole.

The analogy I'll give is imagine you have a car, and the car has thousands of sensors... And you can look at each of these sensors individually, but one sensor on its own is not necessarily going to tell you whether or not the car is working. For example, you could have the amount of windshield wiper fluid that you still have left. That could be one of the series. That doesn't necessarily correlate to your car is working or is usable or not. So one thing that we're trying out is "Okay, can we take all thousands of these sensors?" And then on the other end, can we take the state of the car, which is like it's working or not... And in system terms, this is kind of like "Here are all your metrics", and on the other end, the state of your service, that's your SLO. The SLO actually tells you if a user is being impacted. And then can we figure out the relationship between these two? So that we can go based on historical performance, based on like historically how these metrics and these SLO states, the state of the car relate to each other, we can then try to figure out "Okay, when windshield wiper is low, or high" - it doesn't actually have any impact on the car. But one thing we can see is "Oh, oil engine temperature has an impact." And specifically oil engine temperature when the RPM is low, when the car is relatively idle - that is problematic in itself.

Now, the cool thing here is we're not manually implanting these rules. We're trying to discover these patterns from the data, from the historical data itself. So that's kind of like where you get to more of the system level, which is obviously a system is not just made out of one particular metric or one particular log, or something like that. So typically there's a bunch of metrics involved. There's a bunch of typically -- especially with microservices, there's a lot of like different services involved, there's a dependency graph... So could we scan all of this for a particular system, and then come back to you, the operator, and go "You should look here. This is the first place you should look. And then this is the second place. And this place, you shouldn't even look here, because knowing what we've learned from the historical data, this thing is not impacting the current values of the sensor readings. This thing is not impacting your SLO right now."

**Mat Ryer:** \[00:34:01.29\] That sounds amazing, if possible. It's still experimental...

**Johnny Boursiquot:** To piggyback on the car analogy, to me a useful -- well, whether it's useful or not, that's going to be sort of a decision a given sort of customer makes. But to me, if I'm on the road, I'm driving, say I have gas that's going to take me only so far. In my head, traditionally today, in my head I have to say, okay, I can see the mileage that the car is telling me "Hey, based on the amount of gas you have and how fast you're going, this is how many miles you can expect to get out of this thing." Now, I'm looking at that, and I'm also looking at the navigation, the GPS navigation, and figuring out "Okay, well, I'm trying to get to a destination", and it says "Hey, this is how many miles you have left." So those things aren't connected. And even in a car that has integrated a navigation system and knows how many miles I have to drive, those things aren't connected. Now, I as the human, I'm looking at my cluster gauge, I'm looking at the GPS and thinking, "Okay, I need to probably make a stop. If I continue to drive at the current speed, I need to make a stop at the closest gas station, otherwise I will not make it to my destination."

Now, in a sense, these are analog tools, versus what I could think of - the next step of that would be for that integration, for some sort of... Again, maybe you could do this with if-else statements, but I would like to think that there's a use for - and then again, I'm using the term "intelligent" here loosely... There's a useful intelligent system that can let me know, without me having -- maybe I've got kids in the car, I'm distracted, I haven't made the math in my head yet, but the car, basically that system can bring attention to the fact that "Hey, you might want to stop for gas, because I know how far you're going, I know the mechanics, what the car is telling me that you have for distance travel... You might want to take a look at this thing." So to me, that's use of an intelligent -- so adding that additional layer that says "Hey, I have all the indicators. You don't know what question to ask yet, but I can tell you what you need to pay attention to."

**Yasir Ekinci:** "You need to get a Tesla." \[laughter\] I'm not making this up. Tesla has actually solved this problem. They look at the wind speed, they look at your current consumption, navigation, and they give you -- if the car knows that you're not going to make it, it tells you "Oh, you should go to the supercharger here."

**Mat Ryer:** Yeah. It builds it into your route, doesn't it?

**Yasir Ekinci:** Yeah. So whatever thoughts you have about Elon, it's like -- the Tesla engineers, they're doing some good stuff.

**Mat Ryer:** Oh, yeah.

**Johnny Boursiquot:** Yeah, I didn't know that. And I don't own an EV. I'm still kind of old school, I guess. But yeah, to me that was a natural sort of next step. So I'm wondering... Rather than seeing yet another product or service sort of sprinkling gen AI so somebody can ask natural language questions... Like, this is the next level of utility. And you don't even have to tell me as a customer that you're using AI to do these things. Make the product better on the backend for me. Basically, just make the system more intelligent.

**Yasir Ekinci:** Yeah. And I think this is -- I mean, this is like a recent anomaly almost, if I can say... Because if you go back a few years, one of the biggest applications of actual machine learning, I think, was like in Google Photos, and you didn't even know it was ML. In Google photos you could search for like "red car" or "beach" or something, and it would pull up those pictures... And they didn't even talk about "Oh, this is AI." And it worked. The cool thing is it's quite magic when it works, and as the user, you don't even need to know that there is like something, an algorithm behind it or not. I think it kind of tells you something if we need to like emphasize "Oh, there is AI behind this", as if like the word AI adds value to that product.

**Johnny Boursiquot:** \[00:38:13.18\] It's like signaling to each other in the industry that "Oh, we've got AI now. We've beaten you, competitor." I mean, does the end user really care? Does the customer actually care?

**Yasir Ekinci:** I don't think so... As long as there is a problem getting solved, and how well is the problem getting solved. And maybe, like I said, in some cases there is actually valuable places where you can use Gen AI in a valuable way. I'm thinking even things like customer support, for example, having questions where the answer adapts to your question in particular... Especially any type of like language interaction. I think this summary example that Mat gave - those kinds of things, creative writing, things very language related, that are quite helpful. Coding is another example. Coding is quite a structured language, so it's also like it's a bit easier to generate code than like general language. And especially if you use the latest Anthropic model, the Claude 3.5, it's surprisingly good at like giving you that full baseline of code to start off with.

So there are valuable use cases, definitely. But just the fact that you put AI on it probably is -- I don't know, at some point it might make people even more skeptical, especially if we go towards a more AI winter type of scenario. It might make people more skeptical. Right now, obviously, people are doing it because VC money.

**Johnny Boursiquot:** Right. Trendy.

**Mat Ryer:** Yeah. So Johnny, to your thing then... So you're looking at how much distance you can travel and how far you've got to go. Yes, you're also looking at things that can kind of project forward, and kind of give you early warning; not just the "Oh, now the system's in a state of disrepair", but actually "We're headed that way."

**Yasir Ekinci:** That could be -- I guess we're doing that in quite simple ways, I would say, for now. So for example, things like "Oh, you're about to run out of disk space." Things where you know that the quantity is limited, like the amount of disk that you have... Or if you have leaky RAM, those are things that are relatively easy to solve.

**Mat Ryer:** You could have a third output to your model there. You've got healthy, not healthy and becoming unhealthy.

**Yasir Ekinci:** Yes.

**Mat Ryer:** Johnny, I feel like we're just like product managers now. \[laughter\] \[unintelligible 00:40:32.14\]

**Johnny Boursiquot:** I mean, I keep struggling with the whole just AI for the sake of AI thing, because I see it everywhere. So I'm really trying to get to useful things, genuinely useful things, without having to tell me that it's AI and this and that... Because these are just signals that I as a customer doesn't care about.

**Yasir Ekinci:** The weird thing is like those things exist and have existed for the last 10 years. Like, you go to Amazon, you get your recommended items. Like I said, I gave you the Google Photos example. There's a bunch of these examples... When you're paying with your bank, there's a whole fraud detection system that works and you don't even know about it, but that prevents your card from being used in a fraudulent way. There's a lot of these systems that are using general -- I'm not gonna say like traditional, but some kind of like machine learning approach, that is not based on the whole new generative AI side, and they work really well. And those systems, by the way, are not moving to using "Oh, let's replace that with like a ChatGPT." Because fun fact, ChatGPT doesn't really work that well with numbers. Not ChatGPT and it's only ChatGPT, but like this whole transformer architecture doesn't really work quite well with numbers out of the box, at least not in the way that they're applying it in ChatGPT in Anthropic.

**Johnny Boursiquot:** \[00:42:00.13\] Let's circle back real quick to the use case you mentioned before for the dashboards. You mentioned that it didn't work quite well. For me as a customer, if the patterns of my products - say I offer widgets that are very popular during the holiday season, and not so popular the rest of the year, but there's a spike here and there, maybe my company gets featured on Hacking News and I get bombarded with traffic, whatever the case may be... But if I'm a limited staff operator, or perhaps maybe I don't even have an SRE or somebody who really understands observability, but at least they can describe what their business is... When do they usually see spikes, according to previous sales data? Can they provide enough information to you so that you have a better shot at generating the kind of dashboard with the kind of metrics that is actually useful for this particular customer? ...as opposed to saying "Hey, this is a generic dashboard."

**Yasir Ekinci:** Yes... This kind of like where you kind of get that mix of the data and the ML and all of it, and the domain expertise. And I think what you're talking about is somebody -- the customers, they have probably, certainly way more domain expertise about their business, their systems, and how their world operates.

One example I would give of that is we have the ability to add holidays. For example, you can set like -- if you know, for example, beforehand, if you're a store, you can add the US holidays, Black Friday to it, because you know that whatever is going to happen on those days is going to be very, very different from all the other days. And if you have historically, if you go back a year and you have historically data on like how a Black Friday operates, and how that impacts your system, you can then use that in your projections forward.

I'm not quite sure how that would work in the generative AI context. I guess, is your question about like "Could you use generative AI to basically instead of me going to a product and manually setting this up, I just tell the gen AI "Hey, I'm dealing with this type of problem. This is my domain. This is the thing" and go set it up?"

**Johnny Boursiquot:** Mm-hm.

**Yasir Ekinci:** Technically, yes, that is possible. But the gen AI is basically used as like a concierge, where it kind of goes and uses these products that are purpose-built for it, especially things like on the numeric end... You can't really ask Gen AI "What's wrong with my system?" and the gen AI will magically give you an answer. But a way that you can make that work where it appears as if the gen AI is solving the problem is you ask that question, the context is - we know the context of who you are, which team you're in, which service you're part of, we've got the structure where we can link all of the metrics of your service to you, essentially... We then send that to a separate numeric analysis tool that is not gen AI, that's just pure ML, for example, and then the results of that get fed back into the gen AI tool, the LLM, and then the LLM gives you the answer. So from the user perspective, it kind of does look like I'm asking a question and I'm getting an answer, but under the hood it's not really the LLM doing the hard work.

**Break**: \[00:45:22.27\]

**Johnny Boursiquot:** I have a feature request. Now, whether it's Grafana or any other -- again, I am a customer of these tools. I run systems, a large part of my work is being an SRE... So from a customer's perspective, I want an adaptive dashboard, meaning I open up my dashboard, or maybe I get paged, I go onto the main screen, the home screen, and what I see are the important things to me. Basically, what I see is "Okay, the system has noticed that this particular service is down, or it's not responding fast enough in the chain of microservices that I have to operate." Basically, the dashboard is adapting to the things that I've told it are most important to me. If I say "Hey, this particular service needs to be operating at 99.9% availability. The moment that drops, that is something that I need to know." It needs to tell me what should I focus on. And I'm not looking for a needle in the haystack, trying to figure out why my website is down... Because ultimately, that's what I want to know - why is my website or product or whatever it is down, and then tell me exactly where I need to look.

**Mat Ryer:** You're describing the dream. And honestly, this is literally what we're working towards. That is like the ultimate kind of thing that we want to provide. In fact, in some ways you get bits of that already... But yeah, Johnny, you should just come in and like work at Grafana labs, probably. \[laughter\] But at least let's have a proper chat, because as an actual customer, exactly that sort of insight is great.

**Yasir Ekinci:** We did have an interesting conversation about this. I was going to say, it's kind of related to SIFT as well. So SIFT, if you don't know SIFT, what SIFT does is it's another solution that we have where basically we just run -- every time you have an alert, we can trigger it, or you can also trigger it manually, and it's going to run a few of these predefined checks.

It's going to check "Has there been a new deployment? Is there an increase in your HTTP errors?" It's going to check the error logs that you have for your service and see if those increased... Even this experimental feature that I talked about, with the thousand sensors and the state of the car - that, for example, internally at least, we have that as part of SIFT as well.

Basically, the whole idea is every time you have an alert, SIFT can run a few of these checks that you would do normally, manually; it can run these checks already, and then just come back to you and say "Hey, I checked this, it was fine. I checked this, I've found these things. Here are some error pattern logs. You can check those", and kind of like give you a helping hand towards the solution.

**Mat Ryer:** But it's so cool. And literally in Slack, it replies to the alert that gets posted in Slack; it's in the thread. And the log one is my favorite, because this has helped us out a few times in really unexpected ways. Essentially, what it does is it looks at your logs, it knows from some context in the alert, it has an idea of where to go and look in logs... And it looks at, say, an hour before, where it assumes this was okay, and then it looks for anything that's different or anything that's new. Whether it's patterns, like just an increase in frequency of something, or literally sometimes there's a new error message. And we had an SSL error once that was kind of affecting lots of people, and no one could figure out what was going on for a while. But the SIFT thing had immediately gone and just said "Oh, there's this new error that I've just not seen." So it's things like that, really practical, useful stuff. And it just keeps building on it.

**Yasir Ekinci:** I was gonna add a thing there - there's this interesting idea of "Do we have like a more dynamic dashboard, and like change stuff?" We had this conversation where basically we talked about these tools like SIFT, and we've got another one, a search workbenches one, \[unintelligible 00:53:04.29\] We've got all of these different ways that you can like look at your data... And one thing that - we were talking with other SREs at Grafana, and one thing that they mentioned is "Well, the first thing I do is I still go to the dashboard. I still go to my dashboard, the dashboard that I created, or our team has created specifically for our service, because I know exactly what to look for in that dashboard. And it is specifically made for my service. Every time I go there, because I know it's the same, I know where the things are." So there is this element of familiarity with your own thing. And also, it's a dashboard that's specifically made for you and your service.

\[00:53:48.14\] So that's kind of like an interesting challenge of like how do you kind of compete with something like that? People that have created their own dashboards, versus these kind of like more generalist approaches, where "Here is one tool. And this one tool is going to adapt to everyone, and it's going to work for all of your services." But every time you go there, you don't know what you're going to see.

So there is this thing between being something that people have purposefully built for their own thing, for their own service, versus something that's made for the masses almost, very generic, but tries to -- every time you go there, it tries to personalize that experience.

**Johnny Boursiquot:** So here's a counterpoint to that. I've worked in a very large organization where you have a lot of dependencies spread throughout; each dependency is managed by different teams. So while a team has their own sort of dashboard for the services that they run and manage and maintain, they tend to have, or tended to have sort of this siloed vision. "As long as our services is good... We might have a little spike here, or we might have some load here, whatever it is. But as long as our services is not erring out", or "I'm only gonna worry about my service when it's erring out", the sort of tunnel vision on just the things they operate, whereby they are but a piece of a much larger problem, that if only they zoomed out a little bit, they would see that "Oh, our thing is being taken down by an influx of some other service, run by some other team", that really if you only just took a step back, immediately, maybe your service doesn't need to be the one that sends alerts, but because it's another team that's causing your system to react in an adverse way, and if only they address their issue, then you don't need to get paged to go look at your service, because your service is not the one that's at the root cause of this... Maybe just zoom out a little bit to sort of see the bigger picture.

**Mat Ryer:** Yes. So there's apps -- I mean, actually, I've heard... There's also an SLO team building an SLO product in Grafana. And I've heard them talk about this exact thing, of having basically a dependency tree of SLOs. Because yeah, who actually needs to be -- yeah, if you have a tree, and... You just want to find the earliest one, really, don't you? And alert that person at least first, because everything else is downstream from that.

So yeah, you should just work at Grafana Labs, Jonny. That mission of like automatic and dynamic dashboards is actually something we're building in these -- we have these new Explorer apps, which are essentially... We've got these really powerful databases, Mimir for metrics, Loki for logs, Tempo, PyScope, etc. But you need these query languages to use it.

And people that learn these query languages do some really powerful things. It's really impressive. It's kind of amazing.

So if you know these query languages, then you can do these amazing, powerful things... But most developers don't do that, because they have different -- they don't use it every day. They're not using these query languages every day, so they don't really learn it. You sort of do bits of it. And I'm kind of in this camp.

So we build these other apps, which essentially do the queries for you proactively and just visualize everything, and then you just click and drill into it. And that's the way that we've -- and we still have the problem of there's still loads of data. The number of metrics that everything's kicking out is phenomenal when you look at it. It blew my mind when I started at Grafana Labs. I've operated systems, but when you see the scale of some of the things and the amount of data that people have... So that's where AI, I think, can help with - or ML, whatever - to shrink that problem down a bit and focus in. But yeah, it's an exciting space, that's for sure, and it's really kind of cool to see all the innovation that's happening around.

**Johnny Boursiquot:** Yeah. Just to quickly recap, basically trying to get teams to not only focus just on their service and just their stuff, because their stuff is part of a bigger pool of stuffs, that is perhaps causing the reason for the page. So if we only have just teams caring about just their dashboard and nothing else, I think that's a missed opportunity.

**Yasir Ekinci:** Yes, I agree. I agree. I think the challenge of that is how do you bring it all together, and how do you map out these dependencies? When do you alert them of something going on in somebody else's world? But yeah, super-valid question.

**Johnny Boursiquot:** Cool, cool, cool, cool. So I think it's time for some unpops. What do you guys think? Some unpopular opinions?

**Yasir Ekinci:** Yeah.

**Johnny Boursiquot:** Yeah. I hope you brought some.

**Jingle**: \[00:58:46.24\]

**Johnny Boursiquot:** Alright, who wants to go first? I know y'all brought some.

**Mat Ryer:** Yeah, I've got one. Windows on the desktop are easier to use if they're scrambled around randomly, rather than neatly ordered. I like the -- something about you know where things are, and it's something about you're only focusing on one thing at a time... I'm a sucker for dashboards, and screens with loads of stuff on it, but I do like to just have a jumble of windows. Disagree?

**Johnny Boursiquot:** I don't think I care enough to disagree.

**Mat Ryer:** You just don't care. Cool.

**Yasir Ekinci:** Yeah... Just like \[unintelligible 00:59:36.02\]

**Johnny Boursiquot:** \[laughs\]

**Mat Ryer:** You just don't care. Okay, cool.

**Johnny Boursiquot:** I don't care enough about your window management problems, Mat...

**Mat Ryer:** Yeah. Okay. It's just, everyone still raves about -- I don't know, because they added in macOS a new window management in the latest OS, where you can drag the window to the side of the screen, and it'll sort of snap nicely. Yeah.

**Johnny Boursiquot:** Right. Yeah, I've been using my own -- there's been tools like Spectacle, which I've used for years... I'm using another one now called Rectangle... Yeah, so I don't know. I did try the new macOS sort of version of it, but for some reason it just didn't feel as natural as what I'm used to. I mean, I'll give it another fair shake, but I don't know; I was trying to get some work done, and I'm like "I can't do my keyboard \[unintelligible 01:00:23.24\] nothing's working. Screw that. I'm going to go back to what I know for now."

**Mat Ryer:** Yeah. You're just going to go back to what you know. That's true. I think that's always true, isn't it?

**Johnny Boursiquot:** Yes, it is. But we'll never learn anything new if we always keep doing that, right?

**Mat Ryer:** Yeah, absolutely. Oh, this is good. Gone from not caring to really quite deep insights into human condition.

**Yasir Ekinci:** Window managers and the human condition. \[laughter\]

**Johnny Boursiquot:** No one is the same twice when you step in a river; neither the river nor you.

**Mat Ryer:** Oh, yeah. That's good. But it's the same river though, isn't it?

**Johnny Boursiquot:** No, it's a different river. It's a different river.

**Mat Ryer:** The water's different, but I think it's the same river.

**Johnny Boursiquot:** Well, yeah, by name, but the river itself is always changing. Ever changing. Do you want to keep going down this road?

**Yasir Ekinci:** I used to say these things when I was like 14 years old, because I thought they made me sound deep... But anyway. \[laughter\]

**Mat Ryer:** What did you say?

**Yasir Ekinci:** These types of like "Oh, the river is deep."

**Mat Ryer:** Oh, yeah. Well, knowing a river's deep or not, it's quite useful.

**Johnny Boursiquot:** Yeah. Especially if you're going to step into it.

**Mat Ryer:** Yeah, especially if you step in it to prove Johnny's theory wrong \[unintelligible 01:01:29.08\]

**Yasir Ekinci:** We can go down this path of like different things... Like, if I was afraid of metal, I wouldn't get on the train.

**Mat Ryer:** Can you say that again?

**Yasir Ekinci:** If I was afraid of metal, I wouldn't get on the train.

**Mat Ryer:** Okay. Yeah. That's good. Is that philosophy?

**Johnny Boursiquot:** \[laughs\]

**Yasir Ekinci:** \[unintelligible 01:01:47.01\]

**Johnny Boursiquot:** Just some random word, just stringing words together... Like, Yas is imitating AI slop.

**Mat Ryer:** \[01:01:56.15\] Yeah, he's just \[unintelligible 01:01:56.24\] I do like the idea though, that -- I like that thing of you are just completely different atoms at some point, and yet you're the same person. And you're right, you're sort of not really the same person, but... There was an old British comedy show called "Only fools and horses", and there was a character on it who had this broom; he had the same broom for 20 years, and everyone's like "Wow, that's amazing." He's like "Yeah, I've changed the handle loads of times, but it's the same room. Oh, and I've changed the head a few times over the years, but this is the same room." Yeah, he swapped out all the bits... But there you go.

**Yasir Ekinci:** Can I add another unpopular -- I don't know if it's really unpopular.

**Mat Ryer:** Well, we'll find out.

**Yasir Ekinci:** I don't think AI is going to take over anytime soon. Okay, more unpopular, maybe - I don't think we're going to get any type of like real, proper AI or like conscious AI terminator cell, maybe not in the next hundred years, maybe ever.

**Mat Ryer:** No general intelligence.

**Yasir Ekinci:** Nope.

**Mat Ryer:** Yeah. LLMs aren't it, for sure.

**Johnny Boursiquot:** Right. Right. Right.

**Mat Ryer:** Autocomplete. It's not going to take over the world, is it? Let's face it.

**Johnny Boursiquot:** No, no. But for people who've never experienced anything like it, it does seem magical. As with most things in life, the deeper you look, the more aware you become. You start seeing through the haze of marketing.

**Yasir Ekinci:** It still affects us in maybe indirect ways. Like, if you go on Twitter and see all the bots that are now powered by actual LLMs, it's a bit crazy. Like, at some point, how much percent of the internet is just going to be LLMs? Is there really real people on the internet? Is that --

**Mat Ryer:** Good point. We won't know the difference, will we? At some point we won't know the difference or care.

**Johnny Boursiquot:** Right. We'll just train bots on our personalities. "Hey, take a look at all my previous tweets, and now automatically tweet or reply to tweets based on how I would normally do it." And you just set it and forget it, and you go about your business.

**Mat Ryer:** You could easily make a Johnny bot. And they did a Black Mirror episode on this, where they did that, and then this guy dies, and then his partner kind of has an AI version of him, that she can talk to, and it simulates his voice, and stuff. That would be a big comfort to people, but certainly --

**Johnny Boursiquot:** Yeah. You can tweak the settings, the things that you found annoying about your real life partner. You can just turn off in a new one. It's amazing. It's amazing.

**Mat Ryer:** Oh, wow. That's amazing. You can't do that in real life.

**Johnny Boursiquot:** No longer leaves the toilet seat up. Turn that off. \[laughs\] Adjust that bit. Yeah, yeah, yeah.

**Mat Ryer:** Well, it would learn, wouldn't it? If it's an AI, it would sort of just learn better than -- that's the other danger, is that the bot's better than us. Like, my wife prefers the bot.

**Johnny Boursiquot:** \[laughs\] You come home one day and your bot version of you standing at the door... "Can't let you in, Mat. She don't want you no moe, Mat."

**Mat Ryer:** \[unintelligible 01:05:03.10\] somewhere else.

**Johnny Boursiquot:** It's going to be stronger than you, so you can't do anything about it, really.

**Mat Ryer:** Yeah, that's a good point.

**Johnny Boursiquot:** \[01:05:13.07\] Yeah, that's unfortunate. Yeah, we should probably move off of this dystopian line of thinking. Yeah, so I've got a - not unpopular opinion, but more like a joke that I thought was very funny, but also not a joke if you don't want it to be.

**Mat Ryer:** Hang on... That's quite a setup.

**Johnny Boursiquot:** Listen, listen, listen, listen. Truth, and funny, not funny... Everything is subjective. It's all about the lens you choose to look at it through. Everything is personalized these days... So here's the thing. But Mat, when I saw that, I completely thought about you. So I'm glad you're on the show so I can share it. So I wanted to suggest to you that if you rename your toilet from john to gym, you can tell people literally that "I go to the gym every morning." \[laughter\]

**Mat Ryer:** Oh, that was worth, that was worth all that setup. For sure.

**Yasir Ekinci:** Exactly.

**Mat Ryer:** I liked that. That's a good idea. It's worth having a friend called Jim who lives nearby, for that. That is also worth doing. I don't know if you can -- is there an app where you can sort of search for friends by name, new friends app, discovery app?

**Johnny Boursiquot:** Maybe there's a contacts app on your phone maybe...

**Mat Ryer:** Don't worry, I'll do it on Grindr. I'll do it on Grindr, and then I'll just break the news when I get there. "I'm just looking for someone called Jim, so I can do a joke on the podcast."

**Johnny Boursiquot:** Oh, man. Beautiful, beautiful. So gents, thank you so much for coming on the show, and talking about useful implementations of Gen AI, and things of that nature. I am on the lookout for those things, because I don't want to amplify the things that seemingly are useless to the world. So yeah, so thank you for coming, and yeah, we'll catch you on the next one. Yas, don't be a stranger.

**Yasir Ekinci:** I'm always, always, always a stranger.

**Mat Ryer:** That's his motto. Mysterious. Yas, what you want is, you want the image to come across like you're mysterious and interesting. Not "I'm always a stranger."

**Yasir Ekinci:** Next time on Go Time... Oh, next time on Go Time. That kind of sounds like one of those Power Rangers ending scenes... Like, "Next week on the Power Rangers."

**Mat Ryer:** Exactly.

**Yasir Ekinci:** I can talk about my kidnapping, if that's what you want to hear...

**Johnny Boursiquot:** Wow, you sat on that the whole show? Dude...! Now we have to bring you back to talk about that.

**Yasir Ekinci:** Or we can talk about the other story that involves Post Malone... That's for another day.

**Johnny Boursiquot:** What?! Dude, you are a treasure trove of just stuff. Yeah, we're definitely bringing you back. Alright, folks, have a good one on us.
