**Mat Ryer:** Hello, and welcome to Go Time. I'm Mat Ryer. Today we're talking about the new possibilities in AI (artificial intelligence). We're gonna dig into that a little, learn about what it means, what it is... And since this is a Go podcast, we're gonna keep our eye towards Go on this journey.

Joining me today - Jaana B. Dogan. Hello, Jaana. Welcome back!

**Jaana Dogan:** Hello! Hi!

**Mat Ryer:** How are you doing?

**Jaana Dogan:** Good. What about you?

**Mat Ryer:** Good, thanks. I'm excited, because we've got a couple of guests who know a considerable amount about AI, as you'll find out... It's Daniel Whitenack. Hello, Daniel.

**Daniel Whitenack:** Hello! Great to be here!

**Mat Ryer:** Welcome to the show. You are of course a host of our sister podcast, Practical AI, right?

**Daniel Whitenack:** I am, yes. So... Shameless plug for Practical AI, if you're interested in those sorts of things. We release a show every week, so check it out.

**Mat Ryer:** Yeah, well done. We're also joined by Miriah Peterson. Hello, Miriah.

**Miriah Peterson:** Hi!

**Mat Ryer:** Welcome to the show, thanks for joining us.

**Miriah Peterson:** Anytime.

**Mat Ryer:** Yeah, good. Well, we can just kick off if we're ready. I'm interested in just getting a very high-level idea for people that really haven't paid any attention to AI. Who wants to have a go at telling us a little bit about this? What is it?

**Daniel Whitenack:** What do you think, Miriah?

**Miriah Peterson:** I would say if they want to know, they can listen to Daniel's podcast.

**Daniel Whitenack:** \[laughs\]

**Miriah Peterson:** The way I like to explain it is what we think of AI is mostly just the typical problem-solving we do as software engineers; instead of having to think through it all ourselves, we're trying to get the computer to think through a little bit of it for us.

**Daniel Whitenack:** I think that's a great starting point. When someone thinks about something an AI model does - maybe that's like recognize a cat in a picture... So if you think about the function that's serving is literally a function, like a software function. You give input data, and you get output data.

We as software engineers can parameterize functions; we say "Oh, if I get this query string and it's this time of day, then do this thing" or something like that.

\[00:04:05.23\] But an AI function or an AI model is essentially the same, in the sense that it's a function, it's just that the internals of that function are parameterized not through the developer's logic only, but through a process called training, which is basically like trial and error. So you give the computer a bunch of examples to learn from, it goes through some trial and error process called training to set these parameters of the function, but you end up with just a function written in code, and that's AI... Which might be disappointing for some people that think there's some type of robots always involved, or something... But it's related to robots.

**Mat Ryer:** That was a disappointment for me initially, I must admit. It's interesting you talk about these functions then. So what does it look like inside it? Because obviously, if we write our own functions in Go code, we can see inside that function and we know every step that it's gonna go through. Is that the same for machine learning models?

**Daniel Whitenack:** Well, Mat, how would you write a function that recognizes a cat in an image? Let's take an example...

**Mat Ryer:** "If cat, then return true."

**Daniel Whitenack:** So it could be an if statement, right? It could be a series of if statements that is like "If I see a bunch of red in the image in this area, then it's a cat. "That's a perfectly fine model that we can parameterize, but it's not gonna be super-useful. I don't know that much about cats, but I don't think they're all red. Yeah, so - series of if-then statements like that actually could be considered a type of machine learning or AI called a decision tree. The difference with the AI model would be that the parameters of those if statements, or the thresholds involved, would be (again) set through a separate process called training. We wouldn't go in and set them ourselves.

There's kind of a numerable of these structures within a function that can be parameterized. One that people have probably heard a lot about is neural networks, which is kind of just like a bunch of sub-functions in a function that are all tied together in various ways, and could have up to like a billion parameters or so.

**Mat Ryer:** Wow.

**Jaana Dogan:** You mentioned a couple of times about machine learning... I wonder what is the difference between AI and machine learning nowadays. Because when I was a college student, we had a machine learning class, and they were trying to explain to us, you know, historically, this area started with AI, but then it became more about machine learning and pattern recognition... And they were trying to almost distance themselves from AI or that terminology, but now everything seems to be under the AI umbrella again.

**Daniel Whitenack:** That's a great question. I'm gonna let Miriah take this one, because I wanna avoid it as much as possible.

**Miriah Peterson:** Yeah, it's a question that keeps coming up a lot. The easiest way to explain it is AI is a general term for any process that involves some kind of a learned or patterned behavior. Statistical, repeatable processes end up being part of it, and just data science; machine learning ends up being part of it; the deep learning aspect of neural networks are part of it... And then to not confuse it, there's this generalized artificial intelligence, which is the idea that a computer can think like a human.

So AI, I think, is more of just the marketable name; any kind of learned or statistical process. And machine learning is what we determine to be the actual computational training or method behind that sellable AI.

**Jaana Dogan:** That clarifies a lot of things for me, thanks.

**Daniel Whitenack:** Yeah, that's excellent. That's a tricky question, because if you ask it at some AI conference, you'll get as many answers. It's kind of one of those, and various people are opinionated about it in various ways.

**Mat Ryer:** \[00:08:02.25\] So in this problem then of trying to find a cat, you mentioned you could use if statements and things to go and check the pixels, but of course, you don't know where the cat is gonna be in the image, you don't know (like you said) what kind of cat it is, so you wouldn't be able to write code in the traditional sense... So it makes sense then that we're gonna use example data or training data to come up with whatever those internals have to be. Are there any tricks to that? How many examples do we need, and what sort of challenges are around actually that data?

**Daniel Whitenack:** Yeah, I kind of like to think about the training process essentially as almost like iterative testing, with table tests of some function. If you're thinking about the trial and error process, then you parameterize these bits of the function... And if you're wondering "Well, how good is my parameterization? How good did I pick my numbers?", then what you wanna do is you wanna try some examples and see how many you get right.

The difference with a traditional software engineering function is that you always expect to get all the examples right. For your API endpoints you have a bunch of examples in a table; you want to get 100% of those right, and fail if you miss one.

In the case of the machine learning or AI model, you're gonna have a bunch of example images. Some of them are gonna have cats, some of them are not gonna have cats. You would never expect to get all of them right, but you want to get as many as possible. So what you do is you choose some random parameters to start with, and then you run your examples through and see how many you got right. Maybe you got like 20% right, or something.

Then you tweak your parameters a little bit and try again, and maybe you got 25% right, so you're kind of going in the right direction with your parameters... And you kind of just do this iteratively over and over, until you get the best parameter set that you can find. That's how the training process works.

Now, there's various mathematics that help in that, in terms of not just randomly choosing parameters, but moving them in the right direction... But it's essentially that trial and error. Now, it depends in terms of the training data and how much you need, it depends on how complicated your model is.

If you have just one if statement, then it's gonna be fairly quick to parameterize that, and you might not need that many examples. But if you have over a billion parameters, like some of these larger models that we see now, you're not going to find all of those parameters with 100 examples. You need very, very many examples, which is why with the scale of model complexity that we've seen over recent years, we've seen a similar sort of boom in how much training data is needed.

At the same time, we've seen various tricks that allow you to adapt or fine-tune models, and not always start from scratch with your training process... Which has been one of the reasons why things are moving so quickly - there's this kind of idea of piggy-backing off of other's work. Google might have trained already on 200 terabytes of data, and you're just fine-tuning to a particular problem, so you don't need as much.

**Jaana Dogan:** It's really interesting, one definition of machine learning back in the day -- I had a friend who decided to define it in a way that if you can't write the function, you just basically brute-force it, which really resembles what you're describing. If it's an easy function, you also have an easier option to maybe write it down yourself, if it's just one if, or whatever... But as soon as it's becoming more complicated \[unintelligible 00:11:53.16\] so the training phase is also getting more complicated.

**Daniel Whitenack:** \[00:12:02.02\] Yeah, I totally agree with that. One of the things - and Miriah did a great job at describing the umbrella term of AI, but one of the main shifts we've seen in recent years is a shift towards neural networks, which if you think about what's happening there, if you have something like logistic regression, which is based on a simple formula, or different regressions, or maybe time series models that have to do with something with seasonality, and things that have some connection to reality (the model is based on some expert knowledge of how reality behaves), well that requires expert input into how you form this function.

Whereas in recent times, the really interesting thing has happened where with these larger neural networks there's enough complexity in the neural network, there's enough parameters that you could essentially model any sort of relationship between your input and output, if you had enough data. So now we no longer have to rely on expert input as much in defining the function, we just kind of have a big function and a lot of data, and that allows us to do really interesting things. I'm not a linguist, but I can train a machine translation model, and know nothing about the two languages involved. That's pretty extraordinary.

**Jaana Dogan:** Is this why they say they don't understand what's going on in that black box anymore? Because it's all magic.

**Daniel Whitenack:** Yeah. I mean, at the end of the day, it's all code... But it isn't very interpretable code, let's say.

**Mat Ryer:** You mentioned the recent burst in AI... What's actually driven that? Why are we not seeing and hearing so much about AI? I ask this with the context that -- I know some of the machine learning research was actually done back in the '50s... So it's kind of curious. Why now? Why are we seeing it all now?

**Miriah Peterson:** I think now we just have more data than ever, more everything. They tend to - I mean, I'm not a historian, but I feel like somebody with historical knowledge tends to trace this AI boom back to the creation of the internet. All of a sudden you have internet, and now everybody's on it, and now there's a whole bunch of data. When you have a whole ton of data you can't go through, you try to figure out a way to process all of that data... And we've discovered that these neural networks can process a whole ton of data and can figure out patterns, and make leverage those patterns for our use, or for some kind of output.

**Daniel Whitenack:** Yeah, I think it's kind of multi-faceted... I love that word whenever I get to utilize it. I think one thing is the availability of data, the other thing is the availability of compute... Right?

**Miriah Peterson:** Yes, that's the other thing.

**Daniel Whitenack:** Yeah, these models that are processing a lot of data need to process it quickly, and go through many millions of iterations, potentially... And so that requires things like GPUs, most often.

Along with that... So it's data, it's compute, but then lastly it's kind of the realization that so many of these problems that we've been working on for so long, if you think about like edge detection in images - there were ways to do that before neural networks, or segmentation in images, or machine translation, or sentiment analysis... All of these things - there were methods for doing it before, but people have started to realize that all of these problems, this logic that we're interested in can be reformulated in the terms of a generalized machine learning problem, where you basically have some number of inputs in, a really complicated parameterized thing in the middle, and some number of inputs out. And most problems can be reformulated in that way without making it specialized to any domain. So now people have just kind of gone crazy with "Well, neural networks can do anything, if anything can be reformulated in this way."

**Mat Ryer:** \[00:16:06.10\] Yeah, that's a really interesting thing. John on the Slack channel -- by the way, we're on GopherSlack, for anyone that wants to join the live recordings of Go Time... And you can ask questions, like this one from John; he's talking about the training data and the training process, and he asked "How does the model not just only learn what it's seen in the example data? How is it that it can see new data that it's never seen before? ...a new photograph of a cat, and it knows it's a cat still."

**Daniel Whitenack:** That's a great question, that indicates a real problem in these methods. If you had a billion-parameter function, and a thousand pictures of cats and non-cats, then what's going to happen? Well, you're just going to be able to find the cats and the non-cats in those pictures really accurately. Almost at 100%. But you're not gonna be able to generalize, like Jon mentioned. This is a problem called over-fitting, and this problem has to do with your model being very complicated, but there not being enough variability in your data to generalize that model. And there's various ways to deal with this in the training process, including splitting out your data and actually optimizing around data that the model hasn't seen yet, or stopping early if you're over-fitting to the data that you're already seeing.

There's even recent examples, like with OpenAI's work in robotics, where they intentionally put in some sort of randomness into the robotic simulation training data to actually make the model a little bit more robust. You might have seen these really strange pictures of robotic hands manipulating Rubik's cubes, and then like a stuffed giraffe comes in and hits the hand - that's their "stuffed giraffe" perturbation on the experiment... And they're able to handle that situation with the robot because they introduced this sort of randomness into the training process.

**Mat Ryer:** It really highlights the fact that you want your training data to be as close to your real-life data as possible. I've done some work in machine learning as well in the past, and what would be very common would be that, say, customers want to detect or teach a model that it could learn to recognize logos, or something... And the training data was either a transparent PNG, or white background, very clear logo. And in the use cases, they're looking for this logo in live video streams, sports feeds, that kind of thing... And it was a kind of difficult challenge there. So would you say that it's important that your training data looks as much like your real-world data as possible?

**Miriah Peterson:** Well, you want your data to be parameterized or directed -- I don't know, I can't find the right word for that... But you want your data to be appropriate for the problem you're trying to solve. We're really liking this cat problem... So if you're trying to get really good at figuring out if something's a cat or not a cat, then having data that has thousands of different kinds of cats, and each of them is a cat, and then having data that's not a cat, like having a whole bunch of sharks, would help it determine between the problem of shark and cat. But there's a lot of really interesting techniques that people have discovered to help with that problem, just by making different kinds of tweaks to your data.

Say you have a whole bunch of different zoo animals and you have discovered that lemurs look really similar to cats, but you wanna still just figure out what a cat is - well, that's when you start manipulating your data. You can start adding random noise to it, and you can start adjusting size or pixel density... And then your model has to learn to pick out features that are not just maybe placement, or not maybe just ear size, but other things... And then it doesn't necessarily look like an actual cat anymore, because you've added different noises, but it helps to figure out the problem of only finding out what the cat is. So it really depends on what you're trying to look for and solve.

**Daniel Whitenack:** \[00:20:25.09\] The example that I like to think of with this is if you train the models used in a self-driving car - let's say in Sweden, or somewhere - it's probably going to be pretty good in snow, and maybe certain types of environments. But if you say "Oh, now we've solved the self-driving car problem", and we ship this thing over to Australia - well, the first kangaroo that runs across the road, you're gonna crash your car and there's gonna be some catastrophic event. Your target environment definitely influences how you construct that data to train your models.

**Jaana Dogan:** It's really interesting, because people have been saying that training is revealing some of the biases in the data that they have never seen before...

**Daniel Whitenack:** Yeah, definitely.

**Jaana Dogan:** ...which makes me also maybe ask more about "How do you evaluate the results?" We talked about testing, about the testing table, but you know, the actual evaluation is more complicated than that. What goes into evaluation?

**Daniel Whitenack:** Yeah, that's a great question, and the answer is kind of disappointing, in that it sort of depends on the problem that you're solving. There's a lot of metrics that are used though that are geared towards certain problems. Most of the time, what you do is you say "Oh, I'm doing a machine translation problem" or "I'm doing an object recognition problem" or "I'm doing a time series forecasting problem" - what are the metrics that have been used to evaluate these? With object recognition you might look at something like accuracy, or precision, or recall. All of these have to do with false positives, and true positives, false negatives and true negatives, and how you balance those. In a fraud detection case you might really want to get all of the true positives, even if you get some false positives mixed in there. But that might not be what you want in another case, right?

So your metric is very problem-dependent, and in machine translation you use this metric called "bleu", which has been developed specifically for that problem. Now, that's kind of separate from the bias issues that you talked about. So in addition to -- like, you could be very accurate, but still have bias in your training data, which will create a biased model. This has been shown with models that model recidivism for offenders coming out of jail... And the model will bias against black males, or something like that, because of the way that they've set up the data, which is obviously not something that we want to have happening...

There's a lot of people working on this problem. There's great tools from IBM and others that actually allow you to evaluate bias in various categories in your training data, and also integrate that into modifications in your training process such that you necessarily aren't creating these biases, even if it's at the cost of accuracy or whatever metric you're interested in.

**Break:** \[00:23:42.27\]

**Mat Ryer:** I think that gives us quite an interesting foundation of AI. Maybe we could shift now and talk a little bit about Go's role in this. When we built Machine Box, we had Python for a lot of the internals of these boxes, and we used Go around that to do different things. That decision really came out because of the maths libraries and some of the other libraries that had already been done... How far are we now in that? What are the options for Go programmers if they wanna do their own machine learning?

**Daniel Whitenack:** Miriah, what's your opinion? I know you have strong opinions here, so...

**Miriah Peterson:** I do have strong opinions, unfortunately. I actually get asked at work all the time if we're gonna start doing our machine learning in Go, because I talk about Go so much... I think there's a lot here. There's so much at play, but I think as far how far we are - it depends on your problem. If you can use Go and get a good result, good accuracy or good whatever, then you can deploy your model, fine. But what I always tell people is -- I guess it's just support.

I feel like there's a lot of community support that's lacking in maintaining the packages and the libraries that we have... So if you do run into an issue, you might not get the response back. There's a huge support for the Python stuff, and it's just -- you know, we've gotta get people in the community excited about using the Go libraries that are there, because they're awesome, they're strong; they just need more support. We don't want issues breaking production systems.

**Mat Ryer:** So why is it so good in Python and not in Go then? Is it just because of the history?

**Miriah Peterson:** There are tons -- PyData, NumPy, and there's a couple other organizations that support the open-sourcing of these mathematical libraries and these data science libraries, and they're paying for people to work on them full-time. When you do that, there's just a natural stability that people feel secure about when they're using it. That's not quite there for Go, and I'm not gonna ask the Go team to take over our mathematical libraries and the data science stuff. I don't think that's their goal. I think we as a community have a ton of people using Go, and I think we have a need to start putting machine learning in our systems that we already have written in Go... So we just have to start using what's there and supporting the great tools that we have. We have a ton of great tools and libraries, they just need more support and more use.

**Jaana Dogan:** I always had this impression that there's nothing much out there, so maybe it could be more of a knowledge share problem. Is there a way good way to understand what is the current state of things? Is there a requisitory that just captures what is out there?

**Daniel Whitenack:** \[00:27:59.04\] There are a few... One of the great resources that people don't know about - there's a data science channel in GopherSlack, which if you're looking for anything, that's probably the quickest answer that you're gonna get, because people are very active there.

**Miriah Peterson:** It's one of the most active channels I'm on.

**Daniel Whitenack:** Yeah. So if I just go over there now - it looks like there's about 1,500 people in that channel, and it's fairly active. There are a few different repositories online. I know I created one at one point under the GopherData org on GitHub... Although I think it probably needs updating, and I would welcome some PRs there. And there's a few other ones floating around.

We'll call out -- you know, getting involved in the Data Science channel will help, but also, there's a lot of great starting points for experimentation, but also contribution, like Miriah said. The Go Num family of libraries has a ton of things that are just like numerically-related, whether that's matrix manipulation, or regressions, or statistical tools - all of those things are there, which that is an incredible set of tools that people should know about. That's a great starting point.

Other than that - yeah, it depends on what you're looking for. For the neural networks and AI side of things people might take a look at Gorgonia, and also \[unintelligible 00:29:18.29\], which are two projects that are very active. They're side-projects for people, so like Miriah said, contributions are always welcome... But they've come so far in terms of supporting things like deep learning, supporting things like CUDA integrations for GPUs, and that sort of thing. So yeah, I would recommend getting involved in the data science channel and those other things.

The other thing I'll mention is, you know, as Mat said, Python has its strengths, but Go also has its strengths, so oftentimes where Python people struggle is not in the model training. They might be able to train a model really quickly and manipulate their data very quickly...

**Mat Ryer:** But they can't pass a string in in a safe way, can they? \[laughter\]

**Daniel Whitenack:** Exactly. Now when the software engineers come to them and they say "Oh, we wanna integrate this in our API layer", then all of a sudden there's a complete breakdown. So you have this really interesting thing where it's really easy to onboard into Python and do something quickly, it's really hard to productionize that stuff. It's getting a little bit better, but generally there's a lot of blockers there... Whereas if you can wrap things in your Go API and integrate things in that way, there's natural strengths there, there's a lot of great advantages there, and a great community around that... So there is a balance there.

**Jaana Dogan:** Do you see any rewrites to Go? People might be experimenting with Python and then maybe if it's possible to achieve the same thing with Go - are they rewriting it when they are productionizing it?

**Daniel Whitenack:** I definitely have seen a lot of people do training in Python, and then inference in Go. That seems to be a fairly common pattern. Inference - what I mean is you've trained the model and now you're utilizing it to make predictions... And if you think about what you're doing with that, it's the same thing you would do with any handler in an API, or another application; you're just sending data in, processing it with a thing, and taking data out... And that can be integrated in all the standard ways with how Go operates.

**Mat Ryer:** Does a lack of generics in Go create a problem when it comes to implementing these maths libraries and things? Because I heard someone say that they tried to write something and they ended up using a lot of CodeGen to get the different types they needed in Go. Is that a problem you've come across?

**Daniel Whitenack:** Personally, I haven't found it to be the main issue that I'm dealing with. Other people that are developing the libraries themselves - maybe they have other opinions, and I've seen also people mention that as well... So I don't know, Miriah, if you have any thoughts there...

**Miriah Peterson:** \[00:32:04.13\] I feel pretty similarly. I think the generics question is more just people coming from a Pythonic way of doing it, and the way that it's worked before, and it just doesn't translate one-for-one back into Go. So there might be some workaround, but I don't think it's necessarily a hard block in the way.

I think the bigger issue is there's just different thought processes, and we have to think without generics for the time being, or sometimes you've just gotta hack it.

**Mat Ryer:** Does concurrency help at all, or is that training process -- you're bound anyway by other things? Does it matter which order you do the training in, and things?

**Daniel Whitenack:** Generally, if you think in terms of Map and Reduce operations, training is one giant, big Reduce operation where you really need to load a lot of data into memory... At least in batches. So there's batching that can be done. And you can separate out the work between workers using some schemes, but it doesn't always result in benefits. It also depends on communication and other things... So generally, training is not really the place. But again, with inference and prediction, if you're doing batch inference, like if you want to now tag 100 million images as either cats or not, then obviously there's gonna be a huge benefit to doing that operation in parallel in some way. That's my take anyway.

**Miriah Peterson:** I'm not gonna comment too much. I think concurrency ends up being a bigger benefit in the actual package development, and I haven't done a whole lot of actual implementation on that side, so I can't really comment effectively.

**Mat Ryer:** Fair enough.

**Jaana Dogan:** Is there any other language features that makes Go a better language for this type of job?

**Daniel Whitenack:** That's a great question. I find that Python, in the sense that -- like, people say it's very readable, but in the sort of Bill Kennedy way of describing what readability is, would be very not readable. When you're doing this sort of operation and something goes wrong, with Python the stack traces, like -- I've been running some experiments recently, and some of these errors in the stack traces I'm getting out are just so hard to deal with, because I have no idea what's going on under the hood, or at least where to trace things back to...

So I feel like Go's readability - not in the sense of things being concise, but in the sense of things being clear and logical - I think that is an extreme benefit to this sort of process, where the things that you're wiring up, like these functions, could be very complicated, these models... There could be a lot of integrations that are important, like with CUDA, or other things... So I think that that clarity definitely helps.

Obviously, the culture around testing and robustness and integrity is something that I think is a great benefit in Go, which is obviously the place where people hit blockers in terms of Python.

On Practical AI we interviewed a couple of different people around this topic, but Joel Grus, who works at the Allen AI Institute - they have a package called AllenNLP, which is written in Python, and they really have to do a lot of work to enforce type labels, and utilize CI/CD to do that type-checking on all of their code to actually make sure that their code is robust and operating... So it takes a lot of extra work to build that stuff into Python, where for us it just comes for free.

**Mat Ryer:** \[00:35:51.19\] Yeah, sometimes -- especially when people are new to Go from other dynamic languages, that's a bit frustrating that it's so strict... But of course, that pays dividends very quickly.

**Daniel Whitenack:** Yeah. I just pulled up -- there's this other package called SpaCy, which is a Python package, and their underlying library that they use for machine learning is called Thinc. And they just made a big new release of it and they branded it as "A refreshing functional take on deep learning", and one of their first bullet points of why it's so awesome is type checking. "Develop faster and catch bugs sooner with sophisticated type checking." And from the Python perspective, it's like "Oh, we can do that!" People are starting to realize that we're moving past this phase of "Let's train models as quick as we can", and into a phase of "Let's build products and integrate AI into products." And when you start thinking like that, then you'll have to consider a lot more than just training things quickly.

**Mat Ryer:** So is this technology -- obviously, it works at a big scale... I mean, whenever you see those little boxes that say "I'm not a robot" and you have to click, sometimes it then says "Okay, just to make sure you're not a robot, just tell me where all the street lamps are in this image, or where the cars are" or "Which of these images contain cars?" And this is basically us all training Google's AI brain, right? So at a big scale, when you've got lots of data and all these different users, obviously you can make some real use of this technology... But what about small companies? What about people that don't have much data? Should they still pay attention?

**Miriah Peterson:** Always. I'm gonna throw my company under the bus a little bit... I've been fighting this a lot at work. I'm a huge AI \[unintelligible 00:37:42.07\] we fight to find a lot of problems where we can use it. We're not super-big; we've got about 13,000 customers, about 60 engineers, and we have one model in production and it does really great sentiment analysis on text replies. If you text your dentist and say "Yeah, \*thumbs up\* I'm gonna be at that appointment", we know it's a confirmation. It does it great.

**Mat Ryer:** What if you say "Thumbs up\* I can't make it"?

**Miriah Peterson:** Well, usually we get people cussing us out, and that's how we know we've texted somebody that's not a customer.

**Mat Ryer:** Oh...

**Miriah Peterson:** But see, it does that kind of a thing, and we did start at that very early; it was one of the first things we integrated, because it was a problem we noticed. We noticed that the text reply "C for confirm and infer no" was not a good user fit. The more dynamic relationship was a great user fit, and all we needed was our text. That's a really small dataset we were able to use. I think we used in open source one, and then we were able to actually create a game for our employees to add more data. So we didn't start with a whole bunch of data, but we gradually got more and it fit really well. And it was just a really small use case. So I think there's always a problem, and a small company can benefit from using machine learning to really just make their products better.

**Mat Ryer:** Great. I mean, next time try Y and N for yes and no, instead of C and N. Just an idea.

**Miriah Peterson:** C for Confirm.

**Mat Ryer:** Confirm, or No...

**Miriah Peterson:** N for No...

**Mat Ryer:** \[laughs\] Yeah, but classically, Y and N, but yeah... I see what you mean. Still, that natural conversation is better anyway though.

**Miriah Peterson:** Yeah.

**Daniel Whitenack:** Yeah, and I was gonna say, too... A part of what I mentioned around the rapid growth in AI is due to pre-trained models and transfer learning. These are two ideas that really benefit people that don't have a lot of data. So pre-trained models basically mean someone else has already trained a model for recognizing cats, which they definitely have, many times, on the internet. So you actually don't even have to go through that training process, you can just pull down a model from the internet and run it in your own code, just to do the predictions.

\[00:39:50.13\] There's also tons of APIs where you can integrate this sort of functionality that's AI-driven via API. So whether that's sentiment analysis, like Miriah is talking about, machine translation, object recognition - all of these sorts of functionalities are already available out there... And then transfer learning is basically the idea that someone's already trained a model to do almost what you want; you just have to tweak it a little bit.

This is something that I use all the time, because I work on a lot of technology for lower resource languages, natural languages, like languages that people speak... And the languages that we work with, typically we might have 30,000 samples of parallel data between English and this language. If you look at large-scale machine translation models, they might have nine million examples. So we have almost no data.

What we do is we really leverage things like "Oh, well there's a lot of data for English, right?" and someone's already trained a model for English. Well, if we wanna train a model for Singlish, which is a dialect of English spoken in Singapore, then we can start with the English model and then add in our small amount of data to fine-tune the model for the situation we want. So you no longer have to start from scratch, you're kind of standing on the shoulders of giants, in that sense.

**Miriah Peterson:** I've run into this - just to build off of a lot of what Daniel said... I've had people ask me a lot of times where to get started with AI, and I usually say find an API that works. Google's got great APIs, Microsoft's got great tools... And while you're using that API, start growing your data, so that you can find what you need -- I mean, so that you have good data, and once you get enough, you can start doing transfer learning and really fine-tune your use case. But don't push the problem off. Start with an API and then get ready to make it better.

**Break:** \[00:41:57.05\]

**Jaana Dogan:** We talked a lot about fine-tuning and tweaking things... Is this like you are tweaking the model primarily, or would you rather try to have a layer on top of that model to maybe eliminate some cases, or gather some more information about the incoming data, maybe pass things to different models, and so on? I've seen different approaches when it comes to composing different solutions... What's your opinion on this?

**Daniel Whitenack:** It really depends on if you want to do the same task, but for different data, or if you want to do a slightly different task. If you want to recognize -- I don't know, what's close to a cat? Miriah said lemurs are close; I'm not totally sure if that's true...

**Miriah Peterson:** Squirrels, fuzzy-faced animals, some dogs...

**Daniel Whitenack:** \[00:44:02.07\] Yeah, you could start -- like, if you wanted to adapt for raccoons, you're doing the same task, you're doing object recognition... So really, what you wanna do is tweak the parameters of the model; you don't necessarily want to change the model structure... Whereas a lot of times in natural language processing or in other areas there's open language models, which will tokenize your data and create a learned representation of language, but they won't complete the task that you want... Maybe that's sentiment analysis. In that case, you might have to add layers onto the model for the specific task.

When people have heard of these things - maybe they've heard of BERT and ELMo, and Transformers, and GPT-2... These are all really large-scale language models; they really are meant to be fine-tuned to these different tasks, and meant to be generalized across them.

**Mat Ryer:** A friend of mine, David Hernandez and I made a face recognition technology once... And the way we did it, essentially, was using transfer learning. We took a model that knew about loads of people, specific people, and then stripped away some of the layers so that it didn't quite know all the people, but it knew faces. And then just by giving it new examples - and not very many new examples - you could then specialize it just for your specific cases. So the net result was you could just train a small group of faces and it would be able to determine who those people were.

So yeah, I think that approach, transfer learning, using other APIs, using other things - I agree with that. I think we should all be hacking a bit more on AI and seeing what it can do in our use cases... Because you might be really surprised; hopefully very pleasantly surprised.

**Daniel Whitenack:** Yeah, one project worth mentioning that's very hackable and easy to get into is GoCV. GoCV has the ability to pull in TensorFlow models for things like object recognition, and do things like face recognition, or finding a certain person in an image, and those sorts of things... And really, you can do that sort of thing just by pulling in the models, and they have great examples of that. You really don't have to have anything special. They've done a great job of setting that up, if you're interested in something that's easy to onboard into.

**Mat Ryer:** And Natalie Pistunovich did a good talk about using TensorFlow with Go, and essentially using the client libraries there in that way. That is a real option for people. You don't have to be down in the weeds of a machine learning model and all that complexity... To be making use of the technology.

**Daniel Whitenack:** Yeah. People have a vision of an AI person as like a really professor-looking person at a chalkboard, scratching away math problems, or something...

**Mat Ryer:** But you don't have a chalkboard, do you?

**Daniel Whitenack:** I don't. I would prefer a chalkboard over a whiteboard, but that's a whole another subject...

**Mat Ryer:** Yeah, that's for next week.

**Daniel Whitenack:** Maybe I have to give some unpopular opinion in the show, right?

**Mat Ryer:** Yeah, that could be it.

**Daniel Whitenack:** I'm giving mine early - chalkboard over whiteboard. Anyway, I feel often as a practitioner more like a cook than a professor, where really I'm just taking someone else's recipe, I'm adding my ingredients in, which is my data, and then I get out something that I can use in my code. I pull a great model from Google, or OpenAI, or someone, I combine it with my code according to their recipe of how it should be formatted, and then I get out a model that works for me and I integrate it into code. It's much more like that than it is other crazy things that people might have in their mind.

**Mat Ryer:** Yeah. I think that's a good lesson. I think it's always worth thinking like that, frankly... Because too often we want - for good reason - to be able to do all the bits ourselves, and we don't need to; and sometimes it's better not to.

\[00:48:05.19\] Barnaby in the Slack channel was asking about object recognition. When we were talking earlier about detecting cats, and things... With computer vision, how is AI different to that?

**Daniel Whitenack:** Yeah, I think with computer vision -- if you think about how this was used... Let's take an example of manufacturing and automation, which was something that people think a lot when they think about AI... So cameras have been used in manufacturing for a long time to detect edges, and insert things into slots, and do all sorts of things... But in the sort of computer vision way of thinking it's almost like -- one of our guests on Practical AI described it this way, "It's like you're finding your way around in the dark. You find this edge, and then you move two centimeters this way, and do this operation with your robot, and then move two centimeters down." It really has no idea what the thing is, it just knows there's an edge here, and "I'm moving this far."

Whereas with object recognition or more modern methods, really you are saying "This is the type A slot where I put in part X. And this is the type B slot, where I put in part Y." So it's really recognizing things in the surroundings, and performing operations based on that.. Not just working off of shapes and edges and that sort of thing.

**Mat Ryer:** Yeah. And I would also add to that - mash them up, if that helps. It helped us in the past. We used a combination of computer vision and machine learning, and the results sometimes were really staggering actually, so... Yeah, that's great.

Well, I think, Daniel, you jumped the shark a little, but it's time for our regular slot... It's time for Unpopular Opinions.

**Jingle:** \[00:50:00.27\] to \[00:50:18.15\]

**Mat Ryer:** So, let's see... Daniel, are you gonna stick with yours, or have you got another one? Chalkboards over blackboards, you prefer...

**Daniel Whitenack:** Well, on my chalkboard I would probably write something to the effect of "AI is the same as machine learning", which is my unpopular opinion. \[laughter\] Probably I just lost a lot of Practical AI subscribers and followers on all sorts of platforms, but that's my unpopular opinion.

**Mat Ryer:** Fair enough. Do you agree with that one, Miriah?

**Miriah Peterson:** That machine learning is AI?

**Mat Ryer:** Yeah.

**Miriah Peterson:** I use the words interchangeably all the time. That doesn't mean that they always have the same definition; that just means they're synonyms. Synonymous words don't have the same definition.

**Mat Ryer:** Yeah, good point.

**Daniel Whitenack:** \[laughs\] Burn.

**Miriah Peterson:** \[laughs\]

**Mat Ryer:** That's the best "Burn" though, ain't it? I like those complex "burns" that you have to look up later, to find out why you're insulted. Do you have an unpopular opinion of your own, Miriah?

**Miriah Peterson:** I have an opinion, I don't know if it's popular or unpopular...

**Mat Ryer:** Let's have it and we'll find out.

**Miriah Peterson:** But I think it's generally speaking unknown... I do a lot of community work, and as part of that I go off to speak at bootcamps, and I tell them how amazing Go is, and how awesome meetups are, and that they should go to all of my meetups and my conferences... But my sales pitch for it is that, by going the meetups, they're contributing to open source the same as a GitHub PR. Your community is open source, just like GitHub... So I think that everybody that goes to a meetup is contributing to open source, and that's my unpopular opinion.

**Mat Ryer:** Oh, that's a great one. That might not be that unpopular.

**Miriah Peterson:** \[00:51:55.18\] I know, but it's not verbalized. It's not formalized, so it is unpopular if it's not formalized.

**Mat Ryer:** Okay. That's the second one you got me on... \[laughter\] That's water-tight, legally, so I can't argue with that one, Miriah. Jaana, have you got an unpopular opinion these days?

**Jaana Dogan:** On this topic?

**Mat Ryer:** Anything.

**Jaana Dogan:** I'm just too under-qualified for this show.

**Mat Ryer:** Oh, well... No, not at all.

**Miriah Peterson:** Me too, it's okay. \[laughs\] I just talk at people a lot, and everybody thinks I know what I'm doing. \[laughter\]

**Mat Ryer:** You didn't mention your company earlier when you...

**Miriah Peterson:** Weave?

**Mat Ryer:** That's it, yeah. Well, you can't point to your hat, because it's a podcast. They can only hear us.

**Miriah Peterson:** I'm gonna point to my hat every time I say Weave.

**Mat Ryer:** You can point to it, but one saying is they won't know that you've done that. Also, that hat looks like it was knitted...

**Miriah Peterson:** Oh, it was definitely knitted by a machine.

**Mat Ryer:** Yeah. AI...

**Miriah Peterson:** Definitely. Robotics.

**Mat Ryer:** Yeah. But not woven; that was the thing. So that's disappointing, but... You know, no problem.

**Daniel Whitenack:** What about you, Mat? What's your -- you've never had an unpopular opinion, have you?

**Mat Ryer:** No, they're always popular. I can't help it.

**Miriah Peterson:** Never mind, I'm not gonna be that mean today.

**Mat Ryer:** No, you can do it. Go on, you can say it. It'll get cut out if it's mean to me.

**Miriah Peterson:** I was just gonna say that you're English, so all of your opinions are unpopular in America.

**Mat Ryer:** \[laughs\] Okay, yeah. That's definitely gonna get cut out. \[laughter\]

**Miriah Peterson:** Okay, I told you it was kind of mean...

**Mat Ryer:** Not really... Not really. I'm just catching up on Slack to see if we've got any other bits and pieces...

**Daniel Whitenack:** So people were mentioning that the infra around machine learning and AI, written in Go... That's maybe a good topic to mention here at the end; there's a lot of great infrastructure written for machine learning and AI, and it's written in Go, because great infrastructure is written in Go. Things like Pachyderm, Seldon, Dgraph... I don't know, I'm probably missing some others. Those come to mind immediately. Obviously, a lot of Python people even use Docker, and other things...

So I would say if you're wanting to run machine learning/AI pipelines at scale, Go is definitely your friend, even if you don't know you're using it.

**Miriah Peterson:** Yes!

**Mat Ryer:** Great.

**Miriah Peterson:** Anybody that's using Kubernetes is using Go for machine learning, so...

**Mat Ryer:** Well, we had the CTO of Cloudflare on, and he told us that essentially anybody using the internet is in some way using Go somewhere, so... It is kind of cool.

**Daniel Whitenack:** You're probably using Python as well, right? If that's the logic...

**Mat Ryer:** Yeah, maybe.

**Jaana Dogan:** \[laughs\]

**Mat Ryer:** Yeah. And definitely JavaScript.

**Daniel Whitenack:** Oh, yeah.

**Mat Ryer:** And PHP, Jon said... Okay, that is all the time we have for today, so thank you so much to our special guests, Daniel, Miriah and Jaana, and we'll see you next week on Go Time!

**Break:** \[00:55:13.03\]

**Mat Ryer:** ...keep it short and sweet. Then this is where the music plays... But this is now the after-party, so... Now you can--

**Daniel Whitenack:** Nice.

**Jaana Dogan:** But we're still live, um...

**Mat Ryer:** Miriah, now you can say whatever you like.

**Jaana Dogan:** We're still live.

**Mat Ryer:** Yeah, that's true. We're still live.

**Daniel Whitenack:** \[laughs\]

**Miriah Peterson:** But I can say whatever I want?

**Mat Ryer:** Now you don't have to hold back... I was joking, because you weren't holding back.

**Miriah Peterson:** Well, then I should tell everybody to go to my conference.

**Mat Ryer:** Yeah, actually you should, anyway. Which is it?

**Miriah Peterson:** GoWest.

**Mat Ryer:** GoWest. And which direction, how do you get there?

**Miriah Peterson:** Well, generally speaking, if you fly West, since the world is circular, you'll get there eventually.

**Mat Ryer:** So you might as well call it GoEast.

**Miriah Peterson:** Well, if you're in California, East would be the quicker way to travel.

**Mat Ryer:** Yeah, but I hope people won't. I hope they will stick to the guidelines/the code of conduct set by the conference - you have to go West to get there.

**Miriah Peterson:** Go West, yeah.

**Mat Ryer:** I think that's absolutely fine. And when is it, and where?

**Miriah Peterson:** So May 8th is the conference day. We have workshops May 7th. The idea is we wanna do a regional conference that highlights a lot of the regional talent and still brings in a lot of bigger names to the area. There's a huge Go community here in Utah, I know there's one in Phoenix, Arizona, and in Denver... So we're trying to just take all of those communities and give them a huge, awesome, amazing conference to celebrate it.

**Mat Ryer:** Great. And is the conference in Utah?

**Miriah Peterson:** It is. I live there, in Sandy, Utah. It's a nice 20-minute drive South of Salt Lake. A quick little stint over from the airport.

**Mat Ryer:** Yeah. And it's a lovely state, Utah, isn't it?

**Miriah Peterson:** Yeah. And in May it'll be just gorgeous. It's green, you'll still have snow in the mountains, but it's warm.

**Mat Ryer:** Perfect.

**Jaana Dogan:** What is the website?

**Miriah Peterson:** GoWestConf.com.

**Jaana Dogan:** Okay.

**Mat Ryer:** Great. And if the editors are listening - which they're not - they'll put that into the show.

**Miriah Peterson:** You know, I would be so happy... \[laughter\] I would jump. \[playing Van Halen - Jump\]
