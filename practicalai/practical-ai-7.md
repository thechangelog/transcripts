**Daniel Whitenack:** This is Daniel Whitenack, your data scientist co-host, and I'm joined by Chris Benson, who is the esteemed AI strategist specializing in deep learning. Chris, how are you doing?

**Chris Benson:** I'm doing great today. How are you, Daniel?

**Daniel Whitenack:** Doing great. Today we have a very special guest that I'm excited about... Tell me, Chris, if you opened up your editor, whatever that might be, what language would you start programming in?

**Chris Benson:** Well, usually it's gonna be either Python or Go for me, most of the time... But I understand we're going to do a different language today, which I'm looking forward to.

**Daniel Whitenack:** We're going in a different direction... I started out back in the day doing Fortran, and then kind of moved into the Python world, eventually to Go... But then every once in a while I kind of dabble in this other language called R, and I'm very happy that we have one of the great people from that community, the R language community, with us. We have Jared Lander. Welcome!

**Jared Lander:** Hi, folks. It's wonderful to be here.

**Chris Benson:** Hey, thanks for coming.

**Jared Lander:** Absolutely, thank you for having me.

**Daniel Whitenack:** Jared, give us a little bit of background about yourself... Where are you coming from and what do you do?

**Jared Lander:** I am what I would like to call, depending on the audience, either a statistician, a data scientist, I do machine learning or AI, depending on who's listening.

**Daniel Whitenack:** That also depends on if you're on a plane and if you actually want to talk to the person next to you, then probably you say AI, and if not, then you say "statistician" - is that how that works?

**Jared Lander:** That's pretty accurate. \[laughter\]

**Chris Benson:** Hey, I think I did meet you before.

**Daniel Whitenack:** Awesome. Well, what are you working on right now? I understand you have your own business, right?

**Jared Lander:** \[00:04:03.09\] Yes, I do. It's Lander Analytics. We are a data science consulting, training and events company. So at any given moment, we have many different things happening, whether it's client projects, we're teaching people how to use R, or we're putting on events.

**Daniel Whitenack:** Awesome. And actually, it was at one of those events that I met you... It was a great event, the NYC R Conference, or The R Conference NYC - which one of those is right? I forget...

**Jared Lander:** We call it NY R.

**Daniel Whitenack:** NY R... Even better. This is a really great event. I have to say not only was the content amazing, the technical content, but the catering was the best out of any conference I've been to, so a round of applause on that.

**Jared Lander:** Nice, thank you. We pride ourselves on the food. This year we stepped it up a notch, we had baristas on site, we have ice-cream sandwiches, pizza delivered in waves... We really tried to make it a party more than a conference.

**Chris Benson:** You mean the food doesn't all have to start with R?

**Jared Lander:** Yeah, you know, that's a fair one... Maybe we could try next year to find round pizzas only... \[laughter\]

**Daniel Whitenack:** Well, there is an impressive number of puns in the R community, as I've learned...

**Jared Lander:** Yes.

**Daniel Whitenack:** That seems to be a point of pride, as well.

**Jared Lander:** Yes. And not only puns, but people are into double puns. They really go deep in how much they pun things.

**Daniel Whitenack:** Yeah, so maybe we'll just devote a show to data science puns one of these days, and we can have you back on to discuss that.

**Jared Lander:** That would be great.

**Chris Benson:** I'm looking forward to that show.

**Daniel Whitenack:** I am, too. So tell us a little bit - you're involved in the New York R Conference, you also are really involved in the meetup scene in New York, I know... Even though I'm not in New York, I'm part of the Slack that you guys have going there; it's very active, and I just appreciate (I think) how much the community there - even though I'm not a really heavy R person - was very welcoming to me when I was there, and I think in general it's just a really welcoming and awesome community for newcomers to data science and machine learning and AI.

Why don't you tell us a little bit more about that community and what you guys do and how that came about?

**Jared Lander:** Absolutely. One of the hallmarks of the R community in general is its friendliness... And not just "Hey, how are you doing?", but it's a welcoming environment, that really strives to make everyone who walks in the door - either physically or virtually - feel welcome and happy, and like you are part of the community... And I do think that is one of the strengths of the R language - this community behind it.

The meetup was actually founded back in 2009 by Josh Reich. Shortly thereafter, by the second meetup (it was a monthly meetup), Drew Conway had taken over, and every good scientist knows Drew Conway. He's one of the luminaries, he's one of the original -- I'm gonna call him the old guard of data science.

After running it for about two years and growing it to 1,800 members, Drew asked me to take over the meetup. I actually took over at the time with Wes McKinney, who's technically my co-organizer. The New York R Meetup, which is now called the Open Statistical Programming Meetup, so that it is welcome to all languages - and indeed, we've had Python, we've had Go, we've had SQL... We've done a number of different languages, as long as they're open source. It is primarily focused on R, but we do allow R and friends, and same with the conference.

\[00:07:58.09\] It started in a room at NYU back in 2009, founded by Josh Reich, and was quickly organized by Drew Conway... And everyone knows him, he's one of the old guards of data science. So after about two years of running it and growing it to about 1,800 members, he turned over the reins, and I am very proud to say we are now about to cross 10,000 members.

**Daniel Whitenack:** That's crazy.

**Chris Benson:** Wow...

**Jared Lander:** Yeah.

**Daniel Whitenack:** So how many of those 10,000 show up at an event? I know the proportion on meetups is smaller, but you still must have a lot at the in-person events.

**Jared Lander:** We do, and since we're in New York, space is our limiting factor. In our normal venue - we have a rotation of a few venues - we can hold about 120-150 people in the room.

**Daniel Whitenack:** That's awesome.

**Jared Lander:** Other venues, when we know we are gonna sell out - we have other venues that can hold 200 and even 300, depending on who's speaking.

**Daniel Whitenack:** We need to go to New York, Chris.

**Chris Benson:** Yeah, we do!

**Jared Lander:** Yes. And it's so much fun being here in person, but we do try to make the meetup a global community. I don't mean meetups in general, but I mean specifically the New York meetup. We have the Slack that Daniel mentioned, that is open to anyone from all over the world, and we now livestream all the meetups, so if someone can't be in New York, they can see it live wherever they happen to be.

**Chris Benson:** That's fantastic. Quick question - has that impacted attendance in any way, or has it just enhanced it?

**Jared Lander:** Our numbers for attendants have been pretty steady at sell-out size before and after the livestream, so it looks like it's just people who can't physically be here or who couldn't fit in the room.

**Daniel Whitenack:** That's awesome. I know I have appreciated being on the Slack, and like I said, I felt very welcome there. We'll post some of those links in the show notes, because if people - even if they're not in New York, it sounds like there's a lot of opportunities to get involved.

**Jared Lander:** Absolutely. There's always a way somehow that we just want everyone to be happy, doing data science together.

**Daniel Whitenack:** That's great. I really appreciate that. That's at the heart of what this show is - making data science and AI and machine learning accessible to people, and practical... So I really appreciate your work there.

**Jared Lander:** Thank you.

**Daniel Whitenack:** Yeah. So we're gonna back to R, the otheR AI language (to steal some puns from your community)... But yeah, I kind of wanted to get into a little bit -- I think you're a great person, since you've been at the forefront of data science for quite a while, and I know that we've talked about different AI techniques, and deep learning, and other things... And I also saw while the New York R Conference was going on some people tweeting out about how you were talking about deep learning, and how we can understand it as kind of extreme, non-linear modeling...

So we've had some comments in our Slack, the Changelog Slack, about wanting to get some perspective from one of the guests on the different landscape -- the landscape of AI and ML techniques, and how deep learning fits into that... So I think you would be a great person to give us that context - would you mind doing that?

**Jared Lander:** Absolutely. One of the key things about learning - that's what I've seen from teaching both private clients and at the Columbia is that - you have to disambiguate terminology, and people often just drown in the different terminology. In fact, the talk I gave at the most recent New York R Conference was comparing ML to deep learning, in R... And the first thing I started with was just the vocab, because different people from different fields will call the same exact thing with different words... Like an intercept versus a bias, or coefficients versus weights.

**Daniel Whitenack:** \[00:12:07.27\] Yeah, that was actually super-confusing to me when I started to get in data science. I was like "Oh, if I just would have known this was an intercept, then that would have made things so much easier."

**Jared Lander:** Exactly, exactly. It's almost as if you have people at different universities doing the research not reading each other's papers and not knowing that these other terms exist.

**Daniel Whitenack:** Yeah, for sure. So help us disambiguate some of that... How do you see the AI/ML landscape in general, and kind of some of the major categories within that?

**Jared Lander:** I think first the AI buzz - half the time when someone says they have an AI, they mean they have an \[unintelligible 00:12:46.22\] statement.

**Daniel Whitenack:** \[laughs\] Yeah, that's true.

**Jared Lander:** Then beyond that, the majority - I do still believe in it from what I've seen in practice - after that is a logistic regression... And half of what you see that's coming out here as "automagical" (that's the word they use), it's basically tools that we've been using for 100 years.

I've been attending a number of Capitol Hill events about AI, and I heard someone make a really good point. He said, "Everyone's sort of up in arms right now about AI, but no one was concerned when we called it logistic regression."

**Daniel Whitenack:** Yeah, that's definitely -- I think everyone wants to add AI to the tag of their project now, right?

**Jared Lander:** Yes. There's been a run on .ai domains.

**Chris Benson:** There sure has... You can't get anything anymore, and they've only been out for the last year or so.

**Jared Lander:** Exactly. It's very difficult. I managed to get a few domains for myself I'm very happy about that I'm gonna start using, but of course, you have to jump on the bandwagon.

**Daniel Whitenack:** Yeah, I contemplated writing an AI that would generate both startup names, and then search for the .ai domain, and just register a bunch of them, and then I would raise venture capital and sell out and retire.

**Chris Benson:** How's that going for you, Daniel?

**Daniel Whitenack:** You know, I didn't make it too far. It was mostly a theoretical construct, so...

**Jared Lander:** Is PiedPiper.ai still available?

**Daniel Whitenack:** \[laughs\] I don't know, I hope so.

**Jared Lander:** But to the question you asked, where the different parts fall in, I see AI in a few different segments. There's automation, which could just be scripting, writing scripts. We've been doing a lot of work with some companies automating their data processes where people were literally copying and pasting from one spreadsheet to the other, and now doing it all through scripts; that's seen as AI by some people. It's made their lives easier.

**Chris Benson:** That's interesting, that we're seeing kind of a crossover of -- you know, I would only think of that as automation, but I guess if it is something you didn't have before, some people may define it that way in a very loose way.

**Jared Lander:** Exactly. It's like automated car production lines - that is a form of artificial intelligence, how to put the cars together. It's not thinking for itself, but it's doing tasks that humans used to do.

**Daniel Whitenack:** So let me kind of ask a follow-up on that... How do you think of AI? How does deep learning fit into that context, and how would you differentiate them?

**Jared Lander:** So the next step up from this automation is learning from data to make decisions for you. First, we have our linear models, our generalized linear models including binary regression, Poisson regression, whatever you may have, to learn and do things not just based on hard set rules, but to learn from context.

\[00:15:55.17\] Now, linear models were simplifications to make the math easy, because they were invented 100 years ago or so. Then you get into non-linear models, which at first were similar to linear models, but had a non-linear construction... But then they got into trees and tree-based models, whether they are random forests or boosted trees. And boosted trees, especially XGBoost, were the darling of the machine learning community for years.

**Daniel Whitenack:** And Kaggle.

**Jared Lander:** And Kaggle. Almost every Kaggle competition was won using XGBoost.

**Daniel Whitenack:** Yeah, with a very narrow margin between the other similar methods, right?

**Jared Lander:** Right. So random forest was the rage, and then XGBoost came on top of random forest, and then it turns out even with XGBoost you could do a boosted random forest.

**Daniel Whitenack:** Boost all the booths..

**Jared Lander:** Exactly.

**Daniel Whitenack:** Nice.

**Jared Lander:** So then, beyond XGBoost, we have deep learning. And this is essentially a neural network that just has many layers; neural networks have been around since at least the '50s... And they were cool, then they weren't cool, then they were cool again, then not cool, and they're cool yet again now.

**Daniel Whitenack:** And when you say a layer in the neural network, could you just explain a little bit what you mean by layer?

**Jared Lander:** So when you have a neural network, you have all of your input variables, and you have weights (coefficients) for them, and you multiply those weights by the coefficients, and then you take that and do a non-linear transformation. That is a layer. That is a set of now almost new inputs; they're not new inputs, but they're new variables, if you could say so, but they've been transformed with a two-step process. That is a layer.

You can repeat these layers again and again, until you finally get to a point where you get to your output. That's where the power of these neural networks is coming from today, having many of these hidden layers; these are just transformations of your input variables, and the next hidden layer is a transformation of the first layer, and you can keep transforming on and on.

**Chris Benson:** So let me ask - one of the things that I've seen you talk about is extreme non-linear modeling in reference to deep learning, and I was kind of wondering if you would kind of take us into what the difference is between those, or if it's the same, and how you see deep learning.

**Jared Lander:** So with a linear model, the reason we made it linear is because it was a simplification so that way they could do the math. But nowadays we have more powerful computers, and most things in life don't follow a linear relationship, they follow a non-linear relationship.

Now, when I say non-linear, that could have different meanings, depending on the technicality, but you can imagine if you had a cloud of points with a X and Y-axis - instead of fitting a straight line through those points, \[unintelligible 00:18:50.17\] step function. Maybe for the first segment it's about a third of the way up the Y-axis; the second segment, the straight line would go two-thirds up, and the last segment - it'd be back down to the bottom of the Y-axis. That's a simple step function that is non-linear. It doesn't fit a nice, straight line, it doesn't even fit a curvy linear line; it fits a step function. That's somewhat the idea behind a tree, somewhat.

The ability to capture these non-linear relationships, regardless of the method, allows us to really model reality better. That's why trees are really great, they have high predictive power, and why random forests and boosted trees. That's also why deep learning is powerful, because it is non-linear. It has a lot of non-linearities.

When you're going from your input to your first hidden layer, and then on to subsequent hidden layers, there are two steps. There is a matrix multiplication of the inputs by their weights (or coefficients) - and that's linear. If you just did that, a deep learning model would just be a linear model. You could even stack many more layers, and if you just did these multiplications by the weights, it would just be a series of linear models, which would become one large linear model. Then you essentially have a straight line or a curvy linear line.

\[00:20:24.11\] But it's that next step at each layer - the activation function. That is a non-linear function you are applying. So whether it is a tanh, or it's a ReLU, or a sigmoid, which is just a fancy word for inverse logit, regardless of which one you're doing, you're doing a non-linear transformation, and that puts a non-linearity in your model, which allows you to capture more complex relationships; if you do more layers, you have more non-linearities, so you can capture really interesting separations between your data.

**Daniel Whitenack:** Yeah, that's a really great context. Sometimes when I'm thinking about these problems solved by deep learning, I think about them in terms of, you know, I know that there must be these relationships between what I'm putting in and what I want to get out, but I have a really hard time understanding what those relationships are.

In your thought process, when you're doing this sort of deep learning technique, does that put you kind of further away from actually getting inside into those relationships? Does it really matter at that point?

**Jared Lander:** That's an interesting question, "Does it matter?" It depends on your goal. If you're doing a study on a medial trial, you really want to know what's happening, because you need to know "Is the drug helping or hurting?" You could do that with prediction, but you really wanna know what's happening with the treatment, what type of effect is it having? Is it a large effect, is it a small effect? And while there are ways to get that from purely predictive methods, like trees and deep learning, it's not as explanatory.

If on the other hand you're just trying to make a prediction and you don't necessarily care why, then it doesn't matter. But the idea of understanding it though, even with a logistic regression that is complex, with lots of interaction terms, it could be hard to interpret.

So yes, we are losing more that interpretation with a deep learning model, but depending on what you're doing, that's not terrible if you don't need to understand what's happening.

**Chris Benson:** Gotcha. So as we've been kind of talking about how we're approaching AI and deep learning specifically, one of the things that comes to mind is I'm curious if you're actually using deep learning with your clients, and if so, if you can kind of tell us what that looks like a little bit?

**Jared Lander:** Yes, we have a few clients we do deep learning with. In fact, we became NVIDIA partners because they are really pushing the forefront of deep learning; they have a vested interest with their GPUs... So we work with some of our own clients and some of NVIDIA's clients on specifically deep learning problems.

**Chris Benson:** Let me ask another question, especially coming as a newbie to the R community - what are some of the strengths that R have, that you specifically find really help you in the development of AI or ML technologies?

**Jared Lander:** R was written from the ground up as a data language. It was meant for handling data of different types, whether they're numbers, or text, or dates, or logicals... It was designed for data. And beyond that, it was designed for statistics, which is data science, ML, AI by another name. It was meant for doing matrix algebra, it was meant for mathematical programming. So anything involving data just comes so naturally to the R language that it's a joy to work with.

**Daniel Whitenack:** \[00:23:59.24\] So with respect to that - I mean, I think my kind of stereotypes before I was involved with the R community was that R was used by these people at universities, and they wrote kind of one-off things to do nifty visualization stuff and data munging, but it wasn't really like a production language that people are using for AI in production at companies... But that's not quite true, is it?

**Jared Lander:** Not true at all. There's a number of companies that I know are using it in production, which I can't name here; they are my clients. But I've also seen other companies not my clients who do use R in production on a daily basis, and it is a full robust language, just like any other.

**Daniel Whitenack:** Where do you see the largest interest in R industry-wise? Whether that's like finance, or healthcare... I know you're in New York, so maybe finance is a big one. What do you see as the main industries that have that interest, and is it also geographically distributed? I know you're in R, and maybe there is a difference on the West Coast, or something...

**Jared Lander:** For industries, I see the most adoption from personal experiences in finance, in pharmaceuticals and healthcare, and in defense.

**Daniel Whitenack:** Interesting. I didn't expect defense. Do you think that's just because those are communities that are being fed from kind of R-heavy academic fields, or what do you think is the reasoning behind that?

**Jared Lander:** It really depends how you come up. If you come up thinking about math and statistics, you're going to be an R person. If you come up thinking about engineering, computer science, you're gonna be a Python person... So a lot of the government agencies I've seen, whether they are defense-related, or even stuff such as the National Institutes for Standards and Technology, or the Census Bureau - a lot of them are gonna be trained as statisticians and mathematicians, so R comes naturally to that community.

**Daniel Whitenack:** Yeah. So you mentioned NIST, and I just have like a total flashback when I was in grad school, I think... I had a part-time appointment there, and I think all I did was like spilled nanotubes all over the floor, everywhere, at NIST. That's where I found out that I should not be in an actual lab, that I should just work on a computer.

**Jared Lander:** Yeah, no \[unintelligible 00:26:32.04\] work for you.

**Daniel Whitenack:** Yeah.

**Chris Benson:** So I have a follow-up question to that last answer you gave us... You kind of talked about how depending on what field people are in, they naturally gravitate to this language or that... But we're kind of in this age of poly-- polyglot programmers...

**Daniel Whitenack:** That is a hard word to say.

**Chris Benson:** It's a hard word to say. If you're one of those people, and maybe you start in R and then you also pick up Python, or anything - it could be Julia, it could be Go, it could be whatever... Do you have any advice on if you have multiple languages in your capability, when you might go to R and when you might not go to R, and go to a different language instead? Any thoughts on that?

**Jared Lander:** I see going to R when you wanna get something done quickly, and it's really data/machine-learning focused. Like I said, it's natural to be used for that stuff.

If you need something that's blazing fast, then you're going to do C++ or Go. If you need something that is out of your wheelhouse in R, that is more... Let's say building a web server - you could do that in R; you might go do that in a language that's more natural for a web server. So in my mind, it's really what is your goal, what is your broader ecosystem? It depends -- how does your company work? Do you have a pipelining tool that can pull from different resources, or does everything have to be monolithic? So it really depends on all those factors around you, and what the task at hand really is.

**Daniel Whitenack:** \[00:28:11.28\] Yeah, and I think even to that point, there's a lot of interaction with other communities and programming languages as well. I know that you're pretty good friends with Wes McKinney, right

**Jared Lander:** Yes, we are very good friends.

**Daniel Whitenack:** Yeah, and I remember -- I think it was at the R conference there in New York that he was giving a talk about some of these layers that actually bridge the gap between the data science and AI languages like Apache Arrow, and other things... Could you kind of share some of those intersections points? I think those are really exciting.

**Jared Lander:** Yeah, so Wes has been working on Apache Arrow, which is many things, but one of the key points to it is an inter-operable data frame. So you have a data frame in R, you save it to disk, and you can open that binary file in Python or Julia or any other language that supports it. And that's fantastic.

Even deeper than that, all of these interpreted languages - particularly R and Python - are really just high-level bindings for C and Fortran. So the same libraries are doing all the work, and there's just a different-flavored wrapper on top of it to suit different people's needs.

**Daniel Whitenack:** I think you just shook some people's worlds that maybe didn't know that they were using Fortran...?

**Jared Lander:** And when Daniel said he did Fortran -- I always say that anyone that knows Fortran is awesome.

**Daniel Whitenack:** Well, I don't know that I would say I know Fortran... When I "wrote" Fortran, I mostly wrote Python around Fortran, because I didn't wanna actually touch the Fortran for fear of breaking all sorts of large codebases that were beyond my scope... But occasional dabbling maybe, I'll leave it at that.

**Chris Benson:** No, Jared, I've gotta say - you've just made my day though, because my mother, who is now retired, taught Fortran at Georgia Tech back in the 1980's... That compliment you've just offered for Fortran - she's gonna love that. I might even get her to listen to the podcast now.

**Jared Lander:** Oh, that's fantastic. I love hearing that.

**Daniel Whitenack:** I'm really happy that our guest unknowingly complimented Chris' mom.

**Chris Benson:** You can't beat that.

**Jared Lander:** Nope, that's the best.

**Daniel Whitenack:** Yeah, that's awesome. It's great to hear about those kind of intersection points. I think more and more I'm seeing - and I'm really happy to see - hopefully less of these language war sort of competitions/discussions on Twitter and other places, and more intersection points between language communities, whether that be Apache Arrow, like you were just saying, or whether that be something like the ONNX neural network formats that exchange between different frameworks, and all of that. That's really exciting to me.

**Jared Lander:** Yeah, as long as you're doing just machine learning, doing AI, doing data science, people shouldn't care how you're doing it. Do it whichever way works best for you and for the problem you have, and use the tools that feel comfortable to you.

**Chris Benson:** I have a question that's especially for me, and maybe a few listeners out there are in the same boat as me... Since I'm brand new to R, and haven't used it in the past like you guys have, I wanna ask you - for AI/ML context here, how should I on day one kind of get started with machine learning in mind? What do you recommend?

**Jared Lander:** Of course the first step if you're just learning R, you have to get a copy of my book, "R for Everyone", obviously.

**Chris Benson:** Perfect.

**Daniel Whitenack:** Cha-ching!

**Jared Lander:** Exactly. You have to do it. There's no other way.

**Chris Benson:** Done deal!

**Daniel Whitenack:** We'll for sure put that link in the show notes. I even have evidence - I've seen the lines at conferences to get Jared's signature on his book, and it must be awesome if the lines are that long.

**Jared Lander:** \[00:32:12.05\] It's always very flattering when I see a long line of people lined up to come get my autograph; I'm like "I could do this all day long."

Beyond that, if you wanna start getting more specifically into ML, of course you have to show up to the meetups and the conferences; that's your in-person experience... And that's not just for the knowledge, which you do get a lot of knowledge, but it's to be around other like-minded people.

**Daniel Whitenack:** And for the pizza.

**Jared Lander:** And for the pizza, yes. We do pride ourselves -- in fact, every month we try to get pizza from a different place, and we have a data set running; people rate the pizza, and you can go pull that data (it's a live feed) and see how it's going over time.

**Daniel Whitenack:** I'm assuming that you haven't brought in some Chicago-style pizza yet... Which is my favorite, but probably less exciting in New York.

**Jared Lander:** So you mean casserole... \[laughter\]

**Daniel Whitenack:** I think we should move on to the next question.

**Jared Lander:** Yes. But to finish answering the question about statistics - then once you've already got a basis in R, the question becomes "Do you already know the math, the statistics?" If you don't, there's great books out there written by Andrew Gelman, and \[unintelligible 00:33:18.08\] Jennifer Hill... Those are great books to learn about the statistics. Then if you have a grounding in that, it's about how do you do it in R?

Now, how do you define ML? Well, you wanna learn linear regression - that's a simple one line of code. Then if you get into penalized regression, and XGBoost, you could do that all natively in R, or you could use a package called Caret. Caret was a unified interface for machine learning in R, written about ten years ago, and it's just gotten better and better since then. That was written by a guy named Max Kuhn, and he has a companion book called "Applied predictive modeling."

Then when you're ready to get into the deep learning part of your R experience, there is the older packages like Neural Net, and there's newer packages like MXNet, and J.J. Allaire, the head of our studio wrote a couple packages called TensorFlow and Keras. And he wrote a book to go along with that called "Deep learning in R."

So if you go through all of these books and go through using the functions yourself to Keras, you'll have the whole spectrum of doing AI, all within R.

**Daniel Whitenack:** I had a great time learning some R. I'm by no means an expert, but I think, like Jared already mentioned, it's a pretty quick way to get from nothing to something working in a short period of time, and I think that makes it a lot of fun.

You mentioned TensorFlow, Jared... What is the state of interaction between R and TensorFlow? I know it's kind of been a long time coming, for example in the Go community, where you can do inference - it's recommended that you do inference in Go with TensorFlow, but not necessarily training... What's the state of interaction between R and TensorFlow, and are there other larger frameworks that are integratable with R, like maybe PyTorch, or other things?

**Jared Lander:** So with the TensorFlow and Keras packages you get the full functionality of TensorFlow and Keras.

**Daniel Whitenack:** That's awesome.

**Jared Lander:** Yeah, it's really amazing. I sit on my computer - even actually on my Windows laptop - and I can build TensorFlow models thanks to the Keras interface in R.

**Daniel Whitenack:** That's awesome. Who did that work?

**Jared Lander:** So it was mainly J.J. Allaire. He's the head of our studio... And Francois Chollet was also involved, and the team at Google.

**Daniel Whitenack:** That's awesome.

**Jared Lander:** It's really amazing. Now, it has TensorFlow as the default, but you can plug in other compatible Keras frameworks. So it really gives you a broad spectrum what you can do, though I would say that 99% of the people using Keras and R are using TensorFlow as the framework underneath.

**Daniel Whitenack:** \[00:36:11.24\] Makes sense.

**Chris Benson:** That's pretty cool. So I guess as you look forward in R at this point, and as we are surging forward for the years to come in AI and ML and stuff, what are you excited about right now in the R community, and in your own projects, for that matter, where R is intersecting AI and ML?

**Jared Lander:** So it's kind of funny - you see other communities and they are super-excited about all the different machine learning stuff they can do. In the R community, it's sort of largely like "Been there, done that. R has been doing it for decades."

**Daniel Whitenack:** They're already onto better things...

**Jared Lander:** Not necessarily better things, but different fun things. We're all super-excited about using R Markdown to automate slideshows and reports, or HTML widgets to have interactive Javascript embedded in your R report... Or different types of graphics, or data manipulation, or network analysis - all this other fun stuff... Like, "Yeah, we've been doing machine learning forever, and look at all this other cool, fun stuff!"

**Daniel Whitenack:** Yeah, and I guess at this point you have awesome support for things like TensorFlow, like you already said... Those sorts of interactions with Javascript widgets or whatever it might be are really -- I think they're really interesting.

**Jared Lander:** And they're really cool and fun stuff, because let's be honest, the vast majority of time a data scientist spends is not doing all the really cool modeling that we all wanna do, it's doing the data prep, the manipulation, reporting, graphing... That's 80%-90% of the job now. Now this becomes so easy to do the modeling, to do the true AI part, that everything else takes up so much time.

**Daniel Whitenack:** So I have a confession that I need to make probably early on in this podcast, and that's that all of this data munging and cleaning and all of that - I really, really enjoy that.

**Jared Lander:** There's something fun about it. It's like it's problem-solving; you need to patch things together...

**Daniel Whitenack:** I don't know what makes me weird in that way, but I could spend just days heads down, cleaning data. I really like it.

**Jared Lander:** We need more people like that.

**Chris Benson:** I'll tell you what, I know! I don't know whether to praise you, Daniel, or just to say "Wow, that's a little bit crazy!" Or both.

**Daniel Whitenack:** Yeah, well, pair me with one of you guys and I'll do the data cleaning, and you can add an awesome Javascript widget powered by TensorFlow, or something... \[laughter\]

**Jared Lander:** It's funny you make that joke, but there's now Javascript bindings for TensorFlow.

**Daniel Whitenack:** Yeah, that's a really interesting topic, and I think that there's some very subtle, but really important implications of things like that... That's around privacy and other stuff like that. If you're actually embedding a model in Javascript and running it on someone's device, in their browser or wherever it might be, and maybe even updating a model in the browser, then data never has to leave that person's device. I think that's a really important and interesting implication of stuff like that.

**Chris Benson:** I sense a show coming up on that topic.

**Daniel Whitenack:** I would love to have that. There's a demo - maybe we'll find the link and put it in the show notes - from the recent TensorFlow Dev Summit... They had a web app that you could play PacMan with like your head movements, running in the browser, and you would just have to calibrate it by moving your head a certain number of times, and it would actually online update the model and then use your particular head movements to control the game.

**Chris Benson:** And then after you play the game, they had chiropractors and people giving massages, just to --

**Daniel Whitenack:** It's probably not a game that you're gonna want to play all night... Jared, so that's a lot of interesting stuff, but before we go too far down the PacMan hole, is there anything else that you wanted to mentioned that you're excited about, or things coming up?

**Jared Lander:** \[00:40:10.04\] Something I'm seeing a lot in the data science community in general, but particularly the R community, is what to do with these models after you've built them. In the past, I came up with all sorts of workarounds; I'd take a model, save it as a binary, and then have an R session running, and people would have to interact with that using R Script... And now it's becoming so easy, through various different tools, for other people to now consume the results of the model, particularly with predictions - or scoring, depending on the words you wanna use... Or even inference, as the deep learning community uses, even though that means something else in the stats community... It's now become so easy with different tools such as the Plumber API package in R, which turns your R scripts into APIs, or even third-party solutions... There's a company out there called Algorithmia, and they take your models, regardless of the language, then you build an API that anyone can hit.

With these tools we can productionalize our models so easily... I can write my code in R, I could use either Algorithmia or Plumber to create a simple RESTful API, have it running on a server or even a microservice, then someone else can go hit that and get the results of my model. So it really creates this accessibility, and it's so exciting seeing this happening faster and faster these days.

**Daniel Whitenack:** I was actually -- it's funny that you've mentioned that, because this morning on my drive in I was listening to the Changelog episode, which is our overlords' podcast, which you should definitely check out (our kind overlords' podcast). They were talking to -- I think it was the VP of AI at Microsoft (we'll link to the show in the show notes), and he was using this terminology around democratizing AI, and essentially that what we're seeing built now with these tools, like you mentioned, like Plumber and Algorithmia, and I think other things like MachineBox, like we had on another episode... It's actually creating a new layer in the software stack, which is making machine learning and AI techniques available to developers that might not have any interest or ability to go deep into the math of the model that they're using.

**Jared Lander:** Yeah, it's making our results accessible to other people to consume, and that makes it easier -- they can do their job and I can do my job, and then we both get to benefit from each other's work.

**Daniel Whitenack:** Yeah, exactly. And you can say, "Hey, we are exposing the ability for your program to recognize things, or understand speech", or whatever it is, and all they have to do is think about implementing that functionality within their software stack now via a nice API, like a REST API, or whatever it is.

**Jared Lander:** Exactly. They could be that much more efficient and consume these things that they had no chance to before; they would have to spend all the time building it. It's specialization in a very great way.

**Chris Benson:** Well, I am super psyched up, Jared. As soon as we finish up recording, I'm gonna have to go grab your book, and start my own journey into R, and trying to catch up at least with Daniel, at some point... So thank you so much for taking us through this, and kind of giving me a path forward on how I can start learning R and using it for AI and machine learning.

**Jared Lander:** Great. Thank you for having me. It's been really fun for me, too.

**Daniel Whitenack:** Awesome, thanks!
