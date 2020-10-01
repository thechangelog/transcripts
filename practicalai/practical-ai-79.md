**Daniel Whitenack:** Welcome to another episode of Practical AI. I'm Daniel Whitenack, a data scientist with SIL International, and I'm joined as always by my co-host, Chris Benson, who is a principal AI strategist at Lockheed Martin. How are you doing, Chris?

**Chris Benson:** Doing great. How's it going today, Daniel?

**Daniel Whitenack:** It's going well. Coming off of vacation, it only took me just about till 2 PM on Monday to catch up on email, so not too bad... I had to jump in early and catch up from things, but all is good. How about you?

**Chris Benson:** Just slaving away while you were on vacation. My wife and daughter actually went to Disney World without me... So they left me at home with the pups, and doing work.

**Daniel Whitenack:** Gotcha. You didn't go to see the new Star Wars deal, Star Wars World, or - I don't know what it's called, actually.

**Chris Benson:** No, I think they saw Harry Potter, but not Star Wars this time.

**Daniel Whitenack:** Oh, that's a good one.

**Chris Benson:** Yeah, at Universal.

**Daniel Whitenack:** Cool. Well, I'm excited to be back from vacation, I'm excited to have with us today an awesome guest. Today we have with us Craig Wiley, who is director of product management for Google Cloud AI Platform. Welcome, Craig.

**Craig Wiley:** Thank you. Very excited to be here.

**Daniel Whitenack:** Yeah, excited to talk to you today about a lot of TensorFlow-related things and a lot of Google Cloud related things. Before we get into that, could you just give us a little bit of your background and how you got into AI, and eventually ended up at Google?

**Craig Wiley:** Sure. As you said, I run project management for our AI platform here at Google. Previous to that I spent a couple of years at AWS, building Amazon SageMaker. Then previous to that I've spent a number of years in Amazon's Supply Chain group, doing optimizations, starting with pivot tables and moving on to classic econometric regression, and then moving on to more and more unsupervised and deeper and deeper learning, as we tried to solve some of these unbelievably complex problems. The ever-present goal of trying to make all of this go faster and yield stronger results got me super-interested in the tooling space.

Since SageMaker are now at Google, I've been really focused on how it is that we can unlock the power of data within the enterprise, and give companies and enterprises the ability to gain full benefit from the datasets they're collecting.

**Daniel Whitenack:** So then is your background more on the -- did you do software engineering before that, or is your background more in science, in terms of how you got into working on Supply Chain stuff on Amazon and all that?

**Craig Wiley:** \[00:04:02.13\] Yeah, so I was a philosophy major who believes deeply that the world can be \[unintelligible 00:04:07.10\]. If you had all the information, then I think you could predict anything... So you kind of follow that sense, and as I joined Amazon, I've found myself at a data-driven company increasingly trying to answer the questions deeply with that... And the next thing I knew, I was leading the team of machine learning engineers trying to do this at a scale that I had never imagined.

**Daniel Whitenack:** So does your philosophy major - do you feel like that gives you a unique perspective on AI-related things, or do you feel like you're pretty much in the weeds of the technical stuff and you're not thinking about philosophy too much?

**Craig Wiley:** You know, it's a little of both. There are times where I'm pretty deep in the details here, and there's other times when I think that ability can lend some context around some of the work we're doing in Responsible AI... And fundamentally, if we can think about these problems as "Here is the input, and from this input we can determine an output" - you know, when we break the problem down into something that's that simple, I really think that we can broaden the customer group who we reach out to with regards to building these types of models.

**Daniel Whitenack:** I know one of the things that I've really appreciated for quite a while is -- and you probably know more of the background on this, but I remember that someone in Google came out with this sort of -- I think it was called "Machine Guidelines/Rules for Engineers", or something like that. I remember seeing it as a PDF originally, and I think now it's actually got a nice website, and everything... But it was a very practical set of guidelines for engineers getting into machine learning problems, and all of that... And I've found that really useful. Maybe we can link that in the show notes.

I definitely think that your background probably has helped you dig into some of those problems, and I really appreciate a lot of what Google has done in that area.

**Craig Wiley:** As a leader in this space, you know - with great power comes great responsibility... So we find ourselves building things like our AI principles in an effort to try and ensure that we're proud of the work we're doing and that our customers are doing, and that others in this industry are doing. So it's a deep area of passion for many involved here.

**Chris Benson:** Yeah, I'm not surprised... Following up on what Daniel was saying a moment ago, as Google has published various principles in terms of how to do machine learning, how to do ethics, which is a hot topic now that we talk about quite a bit - all these things are certainly very much leading edge, and the rest of us in the industry are constantly looking to see what you guys are putting out there... Which kind of transitions us to another topic, which is TensorFlow... Which obviously, being certainly one of the two dominant - maybe the dominant tool out there - to be able to do machine learning in this space. Probably the vast majority of our listeners are quite aware of it by this time...

I'm kind of curious though, what is the relationship -- could you tell us what TensorFlow is, and what is the relationship between TensorFlow and Google at large, and how do those communities interact? And maybe gives us a little bit about the origins of TensorFlow at Google; how it got kicked off, how people opted into that, and how the ecosystem started developing on that.

**Craig Wiley:** Yeah, so TensorFlow is - for those who aren't as aware - the premier deep learning framework for building these neural networks that have become so transformational in the journey of artificial intelligence and machine learning. TensorFlow is an open source project, started and led by Google, but with contributors from all over the world, and for many different companies and corporations and organizations.

\[00:07:54.06\] At the end of the day, when I think about TensorFlow I think about the ability for people to do increasingly complex tasks easily, so that they can get to the point of value creation faster. Now, you asked about how we sit organizationally, and things... TensorFlow is a part of our Research Group, and internally has a charter or mandate to ensure that Googlers have the best tools they need in order to build the kinds of assets, the kinds of machine learning tools and assets that they want.

Having said that, in cloud with work hand-in-hand with this group (to be honest) probably of folks who are not in my direct org. This is probably the org I am closest with, meeting with them on a daily basis to figure out how we can provide more value to TensorFlow users, and how TensorFlow can provide increasing value to Google and Google's cloud customers when need be.

**Daniel Whitenack:** Yeah, and even though I guess a lot of the decisions around TensorFlow and maybe the roadmap are made by people within Google, I know that for example TensorFlow 2.0 - there was a lot of community involvement in that and community feedback, that led to more usability and that sort of thing. TensorFlow 2.0 is a pretty big deal, I think... Maybe you could remind us what happened with TensorFlow 2.0, and how that was driven by a lot of this user feedback, and that sort of thing.

**Craig Wiley:** Yeah, I think you're right; TensorFlow continues to be an active open source program. Both the Google TensorFlow community and the open source community are constantly seeking a wide variety of input and contributions.

One of the things that I was most excited about within this same development time period, just as TensorFlow 2.0 was starting to really take shape and get to a point where it would be nearing release, is at that same moment that we started to come together and bring TensorFlow Enterprise to our customers - which is basically our offering for enterprises to be able to have a rich TensorFlow experience, with the requirements that they need front and center, in a cloud environment.

**Daniel Whitenack:** And what are those? Could you briefly describe what are some of those requirements that are unique to a production enterprise setting, that maybe are harder to deal with in an open source setting?

**Craig Wiley:** Yeah, so TensorFlow Enterprise - it's really designed to accelerate the software development experience, and improve the reliability for AI applications at the enterprise. It starts really first with enterprise-grade support. When I say "enterprise-grade support", really what I mean there is a lengthening of the support window for previous versions. We know that folks have developed exciting models, and models that create a lot of value for their organizations on 1.14, or TensorFlow 1.15, or something like that.

TensorFlow as an open source project - they only support older releases for one year. And what we've done in cloud is we've come through and said "We will extend that by an additional two years, so that you get a full three years of support, so that these models that you've built in TensorFlow 1.14 - you're not feeling pressure to move them out of production and replace them with newer models. You can keep them in their environment, producing value, knowing that security patches will still be deployed, and fundamental functionality patches or bugs will still be fixed, if you should incur them, even after one-year window has elapsed.

\[00:11:47.06\] We also focus deeply on cloud-scale performance, and ensuring that the TensorFlow Enterprise binaries are highly optimized for Google's cloud environment, as well as for running on Kubernetes, should folks wanna run it in a hybrid or on-prem installation.

And then finally, we believe there is an ecosystem of apps that are going to be critical for customers to gain the most value out of TensorFlow.

For instance, we've launched a public-facing TensorBoard experience, and we've been open about the fact that we're working on an enterprise version of that TensorBoard experience as well.

So it's really not one thing, but it's a series of pieces that we find we can piece together and build a comprehensive addition of TensorFlow that can really speak to the needs and requirements of these enterprises.

**Chris Benson:** You have customers that are engaging in TensorFlow in the enterprise model, and recognizing that the core TensorFlow project is open source, led by your internal Google team... From a customer's perspective, if they're opting into the enterprise version, what is the relationship like for the customer between engaging you with the additional support that you've just talked about in the enterprise model, versus that open source community? How do those two separate sides of the TensorFlow world at large interact with each other for that customer who has access to both?

**Craig Wiley:** Sure. It really comes down to -- you know, TensorFlow is an open source project; anyone can go and download TensorFlow, run it on their laptop, run it on their own data center, or run it on their cloud of choice. TensorFlow Enterprise, having been built and highly optimized for Google Cloud, is designed -- so we have a series of products such as our deep learning virtual machines, which are basically VMs within Google Cloud that are preconfigured to run TensorFlow Enterprise on them, so all you have to do is come in, pick an instance size... You know, do you want a small CPU or do you want a giant GPU? And say which version of TensorFlow Enterprise you want installed, and we will outfit you with a machine so you'll be up and running instantly, with everything you need pre-installed.

Then we have containers for folks who wanna use any of our Kubernetes managed services, or if they're running their own clusters, using Kubeflow or other Kubernetes frameworks for managing AI. It gives them the opportunity to get closer to their app if that's what they need to do, or move into an on-prem environment if that's a priority for them.

So really, the way they can engage in TensorFlow Enterprise is by -- it's kind of the default engagement when you work with Google Cloud.

**Daniel Whitenack:** I'm curious - we've talked about open source TensorFlow, we've talked about the various elements of TensorFlow enterprise... I was wondering also if you could mention a bit about what TensorFlow Hub is, since a lot of people I think part of their first interaction with TensorFlow, and maybe the problems that they're working on, can be solved by pre-trained models... So I was wondering if you could give us a glimpse into that world and what's available and how that works.

**Craig Wiley:** Yeah. TensorFlow Hub is a library for the publication and discovery and consumption of reusable parts of machine learning models. Users can create modules, which are kind of a self-contained TensorFlow graph, along with its weights and assets, that can be reused across different tasks or different applications.

So really the idea here - and I think we're increasingly seeing this both within TF Hub, as well as other locations, is this idea of composable AI, where folks can build small pieces that others can then take those pieces, leverage them, and make them more broadly available. So TensorFlow Hub is really a collection of those modules to help accelerate the machine learning process.

\[00:15:58.11\] I'll tell you, as someone who has worked for a number of years and continues to work in cloud machine learning, a huge percentage of my kind of thinking is spent on "How can we improve the cycle time of building machine learning models and getting them into production?" Because for so many companies it comes down to a "Hey, I have a team of data scientists. That team of scientists today can get me ten models a year. And if I can come through and with the tooling that we put together we can help them double, triple, 10x their velocity, then the ROI of machine learning in that organization increases substantively, and now the problems that they're willing to attack with machine learning gets much broader.

I'm super-excited about all of these technologies that give customers the ability to save time and effort and thought - like time of thinking and thought energy - on these problems that have been solved by someone else, and you don't need to reinvent the wheel. You just need to go get their wheel, drop it in and use it in your case. I think that's what TF Hub has shown such a strong ability to do.

**Break:** \[00:17:16.02\]

**Chris Benson:** So Craig, if you are a practitioner out there and you're using Google's Cloud AI services in the enterprise, what are some of the things that you're seeing pop up over and over again in terms of use cases, in terms of applications, that are kind of clearly leaning toward what your services are able to provide? Are there certain use cases that you're seeing come up over and over again, that are fairly common to the platform, and where people are able to bring value fairly quickly to AI using TensorFlow in this context of Cloud AI? Or is it just everything is different? What kind of trends are you seeing?

**Craig Wiley:** Yeah, this is one of these questions that gets harder every month for me to answer. If you had asked me this question a couple of years ago, I would have said "Oh, people build great recommendation systems, and people build great forecasts, or great vision models", or something like that. And the kind of application of models is still relatively narrow, but today, if I look at a company like Unity - Unity uses Google Cloud and TensorFlow Enterprise to quickly test, build and scale out ML models at a massive scale, allowing them to serve the most relevant ads and drive revenue for game developers.

\[00:20:13.20\] When we turn on the game on our phone or light up the most recent game that we're excited about, we don't think about the fact that there is tremendous technology going on behind the scenes to target those ads, to pay for that game, so that it can continue to be free for us. This is something that is very important to Unity and its developers and customers, and they have found tremendous success using TensorFlow, using TensorFlow Enterprise and using Google Cloud to be able to scale this problem that requires them to kick off hundreds, thousands or tens of thousands of models, in an effort to highly target their advertising, and what have you. I'd take that as one example.

On the other end, I can call at a company like GM Cruise. GM Cruise is a strong leader in autonomous vehicles, and is a TensorFlow Enterprise customer. The deep collaborations between Google Cloud, TensorFlow and GM Cruise have given us the ability to reduce their training times from -- I think when they arrived it was something along the order of four days, and now it's less than a day. So when you're able to achieve a 4x reduction in cycle time, now all of a sudden they can potentially move four times faster in trying to get to the solution to their problem.

As the father of a young child, I have to say, the idea that he'll never drive a car is a very exciting idea to me... So I'm more than willing to help all of these folks get as far down that path as they can, as quickly as possible.

**Chris Benson:** It's funny you say that, by the way, because I also have a young child and I try to tell her the same thing, and other people, and they struggle to believe it. I just found it very curious that you jumped in on that.

**Craig Wiley:** My son has even said, "At 17 I'm not sure I'll get my driver's license, because I'm not sure those will still exist", and things like this. \[laughter\]

**Chris Benson:** Yup.

**Daniel Whitenack:** Nice.

**Craig Wiley:** But those two problems are about as different from one another as could be, and certainly we see problems across industries, whether it's fintech, retail, manufacturing... I continue to be humbled by the creativity that folks have in finding ways to utilize this technology to create value for their companies.

**Daniel Whitenack:** I'm kind of interested - since you see so many use cases in your day-to-day, and have seen so much variety, I'm kind of curious to get your perspective on actually how enterprises are leveraging AI... And what I mean by that is kind of in my mind how I see various companies approaching AI- you've got on one end of the spectrum companies that are really investing in intense research and development, and maybe they actually have their own AI team and they're developing their own model architectures, and very unique models, very unique combinations of models, and doing those sorts of things.

You've got other groups that are what I would consider more kind of like doing AI cooking, in the sense that they get like a recipe, they get an existing neural network architecture or something like that, they plug in their own data to create their own model, and then go from there.

Then there's the other end of the spectrum - definitely a lot of people that are just scaling up inference. So they might be using a pre-trained model or a combination of pre-trained models or modules, or maybe they're just doing a bit of transfer learning or something like that, based on what someone else has previously done, so they're not even contributing a ton of data to the situation in terms of training... I was wondering, from your perspective, where are you seeing the biggest investment from enterprises these days? Is there a shift one direction or the other on that spectrum?

**Craig Wiley:** \[00:24:08.23\] It's a really good question, and it's one that we spend a lot of time thinking about and working with companies on how they're thinking about this problem. The companies who I've been most impressed when I hear their strategy around these things - it really comes down to where they choose to buy, versus build. And from that perspective, one of the things that I think deeply about, and that I think others do as well, is this idea that if you can buy a solution, whether it's a Contact Center AI - our intelligent virtual assistant or contact agent in your call center - or our document understanding, these technologies that are powered by AI, these make a ton of sense for companies to buy, because for most folks your contact center isn't the primary point of differentiation for you.

Now, as you move further down the stack, I think the question becomes "Where are you comfortable using AI to accelerate your business and gain efficiencies in your business? And where are those efficiencies tied to your competitive advantage as a company?"

Fundamentally, the idea of buying your AI makes a ton of sense if it's something that you're very comfortable with your competitor buying as well. But when it comes to what you should build, it really comes down to "Where are the unique areas that you think you could express some differentiation in that industry?"

So if I take retail as an example, we'll see retailers who are happy to buy a recommendations system, but they wanna optimize the back-end and their supply chain deeply, because that's how they believe they can stand out. Or maybe they wanna highly optimize their promotional capabilities, or their forecasting capabilities... Whereas others may say "Listen, forecasting and supply chain - I'm happy to work with a partner and get the best-in-class, that is easily available to me... But I really wanna stand out on our usability or our recommendations, and things of that nature. That's how I plan on setting us apart from others."

I think that's a conversation that companies have been having for a long time with regards to the software they're building. If I think over the last decade of the number of industries where the leader in that industry has almost become a hybrid software company - whether it's a retailer who's become more or less a software company, or a healthcare provider who has a giant software investment... You know, the same decisions that have powered that kind of investment over the last decade, I think now we're seeing that same set of decisions behind applied to how they'll invest in intelligent computing, and where they'll choose to build versus buy.

I'm not seeing kind of a wholesale, like hey, people are giving up Notebooks and are only gonna go buy from now on, or vice-versa. It's really around how companies will choose where they are willing to build, versus where they're willing to buy, and how that aligns to their strategy.

**Chris Benson:** I love your perspective there, the business take on where you're gonna choose to invest in adding value and how you create competitive advantage using these types of AI tools for your organization. As you were saying that, I've found myself wondering, what do you think some of the big challenges that you see people trying to create a competitive advantage for themselves, where it's not the run-of-the-mill stuff, where they're just taking their data and doing a little bit of transfer learning, creating their own version of the same model... But the things where people are saying "This is where our organization wants to make a mark." Are there any examples that particularly surprised you or caught your attention in terms of big challenges that organizations are staking themselves on?

**Craig Wiley:** \[00:28:17.29\] It's an interesting one. My life is spent trying to make it easier for them... \[laughter\] And I'll say, I continue to believe that one of the biggest challenges in this space is actually far to the left of machine learning. When I say "left", I mean in a workflow -- you know, if I start with data acquisition at the left-hand side and I end up with a model in production at the right-hand side, that kind of data acquisition, that data cleansing... You know, the number of organizations where I'll talk to data scientists and they'll say "Yeah, the data is decently clean and I know where to get it, but I can't get it because there's organizational silos, and this other organization owns the data, and I can't do machine learning on it", or something like that.

**Chris Benson:** Really common problem, too.

**Craig Wiley:** Yeah, and these are the things that just break my heart. One of the exciting things for me about working with Google Cloud is that the tight integration between our AI team and our Analytics team results in some opportunities for customers to much more easily do these things.

A great example would be BigQuery. BigQuery is Google's hyperscale data warehouse product. If you haven't played with it, you should, because it is an order of magnitude faster and more scalable than anything I've gotten an opportunity to play with... And I came into machine learning by running data warehouses, in many ways, so it's close to home for me... But today, you can build machine learning models in BigQuery, using SQL as your programming language. So you can train an XGBoost model or train a TensorFlow model, all from the SQL UI that data analysts would be accustomed to.

It's integrations like that that I hope can help us break down some of these barriers that are, I'll say -- often they're blamed on tech, but often the problems are as much policy as they are tech. I think the key is can we simplify the governance for folks? ...not remove it, by any means, but simplify it so that it becomes much easier and much less scary, so that they can get to the point of extracting value from their data even more quickly.

**Daniel Whitenack:** I know one of the things that I've hit occasionally is because you're working in the cloud and people in large enterprises have traditionally had their data in their local data centers, and maybe there's restrictions, like governance things, like you were talking about, around moving that data around... Do you still see that popping up in terms of people being hesitant to utilize cloud resources for AI, just because they have to move the data around? Or do you see any progress on that front in terms of people being more willing to invest in moving their training dataset to the cloud and managing it there?

**Craig Wiley:** Absolutely. Customers are getting more comfortable. I think this problem is being solved in two directions. One is the clouds in general - and in specific with Google's Anthos, which is our ability to run a Kubernetes cluster across a data center and cloud as if it were kind of one Kubernetes cluster...

**Daniel Whitenack:** Sort of like a hybrid deal?

**Craig Wiley:** \[00:31:42.00\] Right. Technologies like that start to diminish the damage of saying "Hey, I can only have my data here, and I can't move it elsewhere", kind of thing. So in one direction, their strategy is like that. And then in the other direction, as cloud continues to grow - and I will routinely meet companies who will say "Well, my industry (and you can fill in with whatever industry) doesn't allow me to put data in the cloud." We'll talk to them about how many references we have in their industry who are putting data in the cloud, and very quickly they realize that it's not their industry, it's their company or even their department that has built these rules, probably years ago, before it was understood the benefits of things like cloud security and reliability and resiliency.

I think those kinds of blockers are falling by the wayside, either because companies are realizing that the cloud is not as scary as maybe they imagined, and then secondly because the cloud is coming to the customers in a big way.

**Chris Benson:** One of the things as we kind of talk about Google's Cloud AI and using TensorFlow in the cloud - I know for me using Colab has been a real game-changer. I will just go ahead and say it - it is my favorite cloud environment to work in, and I know a lot of other people who feel the same way... So I've kind of stuck my own bias out there. What kind of insights have you had into the future of how we're gonna use these tools in the cloud, where Colab might be going specifically, and what kinds of integrations and accelerators will we continue to see in these types of environments?

**Craig Wiley:** Yeah, whether it's Colab or whether it's Notebooks on Kaggle, or whether it's Google Cloud's Jupyter as a service, or Jupyter Notebooks service - I continue to be excited, and I'll be honest, slightly disappointed, and I'll get into that in a moment... I continue to be excited by the evolution of tooling for machine learning.

You know, I say slightly disappointed - I wish it were moving faster. I think you're starting to see that with more and more opinionated workflows, whether it's AutoML type of workflows, or kind of rich templates, to your point of the cooking recipes, that can kind of get people 90% of the way there and then let them adjust the part that matters to them... I continue to believe that the way we're doing machine learning today probably isn't the way we'll be doing machine learning a decade from now.

I often think about software development, and if we were to rewind the clock on software development by 20 years, concepts like regression testing and unit testing and these kinds of things - they weren't a part of the everyday software development lifecycle. Today, if you went to go deploy something and you hadn't passed it through a regression testing suite, we would think you're irresponsible... And we don't have those same concepts yet for machine learning.

To me, one of the reasons why it's so exciting to work in this space is that I feel like we are getting to develop the next generation of standards around how people will develop machine learning. And whether it's things like pipeline technology to improve CI/CD experiences, whether it's specific TensorFlow modules build into TF Hub, or Notebook examples on Colab or on Kaggle - this is an area that you can feel is very likely going to evolve very quickly over the next few years.

**Daniel Whitenack:** \[00:35:26.29\] I was just gonna mention, before we get off of Colab and some of the things there... Certainly, as you've mentioned, there's standards that need to be developed, and rigorous things that need to be developed, and I know guests like Joel Grus and others on the podcast have talked about that... But on the other side of things - I've been working with this Masakhane collaboration recently, which is trying to involve research groups and people on the African continent into developing machine translation technology for the languages that they care about, and a central piece of that is the fact that they're able to very quickly onboard participants into their working group, because they have a set of Google Colab notebooks that they're able to spin up, they're able to run in their browser, they're able to have access to a GPU to get them started on training baselines, and they don't have to have access to their own GPU, they don't have to even have a lot of experience in a local environment setup, with an IDE that's set up to do certain things, and all of that... So that's really, I think, been crucial to that collaboration, is the fact that they are able to onboard quickly into that.

Now, obviously, as you productize things, as you were mentioning, you work with enterprises that have certain concerns, and there's definitely matters of integrity and robustness that need to be dealt with... But I think some of those concerns are being addressed, but also on the other side there's a lot of tooling that's being developed out there that's really helping make this technology more accessible to more groups of people, which is really exciting for me.

**Craig Wiley:** Absolutely, and I couldn't be more excited to be a part of the work that is going into this democratization process, and widening the field of machine learning developers and creators... And then fundamentally though, I'll say, I always worry about whether or not those models are gonna get into production. Because one of the things we know is that the vast majority of machine learning that gets built never makes it into the area where the inferences can now start creating value. All too often it gets built on someone's laptop, or maybe in the cloud, and then they're never able to actually integrate it into the application or integrate it into that point where it could create value...

This is an area where we invest deeply to try and ensure that "Hey, once I've built that model, whether it's in Colab or wherever I built it, that I can easily put it into a place where I can call it for inference and gain the full value of the model. As data scientists I think it's very easy to become attached to the training and the AUC curves or what have you as the point of success... But for me really, the success comes when those inferences are creating the goal that we all set out to achieve when we first started trying to build the model.

**Chris Benson:** That's a great point that you're making. We do tend to get caught up in our own training, and thinking of the training as the thing, versus the value that you're creating with the model after you deploy it.

I would feel remiss -- I'm kind of curious, I just wanted to go back a little bit to your personal bio for a minute... And definitely not wanting to get into the politics of competition and stuff, but coming from AWS, you came into Google, you had a hand obviously in creating SageMaker, and obviously, like you would with any job moving to another, you learn, and you get better, and you gain knowledge as you do that. Is there anything that comes to mind that you learned from that previous experience? And definitely not putting down SageMaker, but you know, yu went through that process, and you gained expertise, and then you came to Google and you started working on Google AI... Is there anything that really helped you as you came across there?

**Craig Wiley:** You know, I was unprepared for the benefit of sitting side-by-side with Google's research groups. Google is clearly a leader, if not \*the\* leader in AI and machine learning. ANd to get to sit shoulder-to-shoulder with Jeff Dean and others as they solve some of the most complex machine learning problems in the world, and then taking the components with the kind of fundamentals or the primitives that they've had to use, extracting those out of some of these world-class problems and putting them into an environment where enterprises of all levels can interact with them is something that I was just unprepared for.

\[00:40:11.14\] To give an example - if you're looking at DeepMind and what DeepMind has done with AlphaGo and with Starcraft, and then, you know, we use that same technology for optimizing manufacturing facilities, and optimizing the control systems in manufacturing facilities... That kind of research, the tight connection between research and the practical applications and practical tools we're building is just something I don't think you could get anywhere in the world like you can get it at Google.

**Daniel Whitenack:** I know one of the things that I feel a lot as someone who isn't at Google, but keeps a close eye on what's going on in AI, it often seems like there's just so much happening, so quickly... And obviously, Google is doing a lot, other groups are doing a huge amount of research, and it just seems like-- recently, I remember Facebook released this multi-language question-answering dataset, and I was like "Oh, this is really cool. This is something I've wanted to see for a while", so I started playing with it... And before I even got done figuring out some of what they had done, and how it worked, and the format, they were already -- I think Google came out with another one, and there was another... There'd been like three or four non-English question-answering datasets and models that have come out after that.

As someone who's helping shape the future of Google Cloud AI, and in those discussions, how do you parse through all of the advances that are just happening so quick, and what people are wanting to do? How do you keep from getting left behind? I guess that tight integration is part of it, but it still seems like a hard thing to keep up with.

**Craig Wiley:** Yeah, herding ducks I think would probably be the right idea here...

**Chris Benson:** \[laughs\]

**Craig Wiley:** I mean, it is amazing, because you'll sit there and think "My goodness, I couldn't be any deeper on this topic than I am today", and then a team will announce that they've done something that's two orders of magnitude deeper than where we were... And you just sit there and you're like "Wow..." So really, getting to know all those folks and keeping close with them, so that we can look at not what they're doing today, but where are they going, and where are they gonna be six months from now, 18 months from now, and 36 months from now, and how do we ensure that we're building towards that fact?

\[00:42:47.09\] In cloud, where I sit, I look at things like GANs, or things like reinforcement learning, and say "Well, listen, most enterprises aren't running machine learning." Most enterprises, if they're running machine learning, they're running scikit models at this point. So what is the value of GANs to me right now, outside of an academic environment? But then what we find is very quickly, far more quickly than I would have imagined, companies start jumping on some of these technologies, and we find new and exciting ways.

For example, we are running a reinforcement learning Kaggle competition right now, the first of its kind within Kaggle... And seeing some really interesting ways in which users and developers who have never done reinforcement learning before are starting to interact with this. And by watching the conversations they're having, and the challenges they're having, I think it allows us to build better products as we come out of that.

**Chris Benson:** So as we work our way to the end here, people are listening to this, they've gotten a little bit of knowledge about cloud AI, if they haven't already, and TensorFlow... What would you recommend is the best way for people to get their hands started in TensorFlow and in TensorFlow in the context of cloud AI as an enterprise customer? Obviously, there's the crash course that Google has, which kind of gets you started there, but could you take us a little deeper into how people can steer into all these tools and get started with you?

**Craig Wiley:** Yeah. I think if you're getting started fresh and haven't touched this technology before, then I would certainly recommend heading towards Kaggle and some of their educational resources. They have things like "Coding in Python in Ten Weeks" and other things around learning a number of the basics, and starting to get engaged with machine learning. I think that's a great place to start if you're newer.

If this is an area where you have skills and expertise, then absolutely continuing to utilize Kaggle, and their competitions and their wide variety of code samples, and Colab as well. But then, going to cloud.google.com and heading to our AI tab... And then honestly, going to our deep learning environments and spinning up a VM with deep learning on it.

I remember years ago when I was working at Supply Chain, I had a really strong econometrician on the team, and I said "Hey, why don't you go install a deep learning package?" I can't remember if at that point it was Theano or TensorFlow... This was earlier days. And install a package, get going and let me know what you think.

The next week I met with him, and he said "I worked at it for a number of hours, couldn't get it running, and so I went back to the stuff I know, because I knew I could create value there." Well, with our deep learning environments, our deep learning VMs and what have you, all you have to do is click on the thing, and now you have a TensorFlow experience. Or open a notebook with a GPU as a backend and you have everything you need to run strong and run fast there...

So I would just tell people "Dive in, find some code samples, try and break them, try and mess them up, and go from there."

**Daniel Whitenack:** Awesome. I appreciate that perspective, and we appreciate you taking time from all of your work to come and chat with us. It's been a great time. I know I've learned a lot, and I'm excited to continue exploring what's coming out of Google.

Thank you so much for joining us. We'll mention all the things that you just did in our show notes, and hope to stay in contact, and see you at a conference or something soon.

**Chris Benson:** Yeah, thanks a lot.

**Craig Wiley:** Absolutely. Thank you.
