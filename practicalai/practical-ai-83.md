**Chris Benson:** Welcome to another episode of the Practical AI podcast. My name is Chris Benson, I'm a principal AI strategist at Lockheed Martin, and with me as always is Daniel Whitenack, a data scientists with SIL International. How's it going, Daniel?

**Daniel Whitenack:** It's going great. Got a few more guests in the house these days, because my brother-in-laws are back from college due to college being canceled... Or at least virtual for now. So it's a fun household right now, and that makes working from home -- I get a little bit more interaction with humans.

**Chris Benson:** Yeah, Coronavirus is making life interesting. We have my daughter home; our school system is closed indefinitely, so... Yup, we're doing home-schooling, and working, and no travel... So like I said, life is interesting right now, hopefully not in too bad a way. We're in early days. Hopefully, things will not get terrible, I'm crossing my fingers to see.

**Daniel Whitenack:** Yeah, yeah. And regardless, people across the world really are, I'm guessing, looking at maps a lot...

**Chris Benson:** I bet they are.

**Daniel Whitenack:** Geography, and all sorts of related things... Which is very relevant to our conversation today. Who do we have on our show today, Chris?

**Chris Benson:** We have today two guys from ESRI, which is the Environmental System's Research Institute, whose names are Daniel Wilson, who is the AI lead for professional services, and Rob Fletcher, senior data scientist at ESRI. Welcome to the show, gentlemen.

**Rob Fletcher:** Thank you.

**Daniel Wilson:** Thanks.

**Chris Benson:** I guess as we get started here, maybe first Daniel and then Rob, if you could each give us kind of an introduction to yourself - what you do and how you got to this point in your career, before we dive into learning a little bit more about ESRI.

**Daniel Wilson:** Sure. I have basically spent my entire career doing data science... But I didn't start that way. I went to school originally for engineering physics and applied mathematics. I thought that's where I wanted to go.

**Daniel Whitenack:** Oh... I went to school for engineering physics. I think it's the first engineering physics other than me that's been on the podcast, so... That's great.

**Daniel Wilson:** Cool. Colorado School of Mines...

**Daniel Whitenack:** No way! Me too! \[laughs\]

**Daniel Wilson:** Yeah?

**Rob Fletcher:** Oh, wow...

**Daniel Whitenack:** Yeah, this is so weird right now.

**Chris Benson:** It is a coincidence...

**Daniel Wilson:** That's funny.

**Chris Benson:** You were probably in the same class, at the same time, and just don't know it yet there. \[laughs\]

**Daniel Wilson:** That is very possible.

**Daniel Whitenack:** Yeah, I graduated in 2004. I'll have to talk to you afterwards to catch up on that.

**Daniel Wilson:** \[00:03:54.03\] Sounds good. I'm sure there was a lot of overlap. So I got started there because I was interested in math and physics, and I kind of just wanted to get into studying the universe. I found it really interesting, especially on the applied mathematics side. I really wanted to get into theoretical physics, so... That's kind of the path that I started down, was studying things like general relativity, and I was really fascinated with string theory at the time... And then life happened, as life tends to, and I ended up getting a job at a software company, mostly in the federal government space.

I started there, and I basically told my manager "Hey, I wanna do some math. I don't really know what math means in this context, but I love math, and I wanna figure out how to do it." So I kind of got put on a native science team, got a trial run working with the team -- it wasn't really called data science at the time. That was back in 2009, when data science wasn't really commonly said, at least most of the circles that I was in.

But that's kind of what we were doing - we were working with a lot of different sensor data types, and spatial data... Primarily spatial data. And really what we did was apply machine learning, statistics, or rather algorithms to geospatial data.

So my career kind of grew out of that. I'm pretty much self-taught. Most of my machine learning that I learned initially was from Christopher Bishop's Pattern Recognition Machine Learning book, and then I had some really great mentors there... So that's kind of where I learned it. But I got hungrier and hungrier for more machine learning, artificial intelligence, statistics, any field of applied mathematics really... And just kept learning more and more and more. And as things started to grow in the industry as well, I tried to keep pace and follow it. I've been with ESRI for about two years, and since then things have been really exciting, especially in the geospatial realm, which is where we're seeing a lot of changes happening right now.

**Chris Benson:** Very cool. Rob, how about you?

**Rob Fletcher:** Yeah, so I started off very similar to Daniel, actually. I was very interested in engineering to begin with, but I ended up switching over to -- when I did my bachelor's degree I studied physics and mathematics. I was really obsessed with this stuff at the time, so I decided to go straight through to grad school... So I ended up going to the University of Pennsylvania to do my Ph.D. in particle physics. While I was there, the main experiment I worked on was the Large Hadron Collider, Geneva (Switzerland) on the ATLAS experiment. So I did quite a bit of work there, kind of all over the place. I did a lot of coding... You know, we don't really hire software engineers in physics experiments because they're expensive, and grad students are very cheap... So we kind of had to everything, and just get our hands in everywhere.

To start off with, I was doing a lot of software, writing a lot of packages that help do analysis, things like that. As I got further into my Ph.D, I started working on more actual analysis type topics.

One of the first major projects I worked on was doing an electron identification type task. We'd get all these signals in a detector, and we needed to make a decision whether they were an electron or something else that was the originating particle. I guess I didn't realize it at the time, but this is a pretty traditional classification problem in machine learning... So I was doing data science even quite a while ago, and just didn't really understand that that's what I was doing. I was just sort of solving problems...

Later on in my Ph.D. I went on to work on some physics that has to do with \[00:07:22.02\] the Higgs boson model; something called the Two Higgs Doublet Model. So we were specifically looking for these additional Higgs bosons that might be lurking somewhere in physics, and then produce two photons. So I wrote a lot of code, did a lot of analysis in that specific area right there, and then I think what really tipped me over the edge and got me thinking about data science... I noticed that as we were doing these things, this detector was collecting just so much data all the time, that a lot of these older statistical methods that were used to assess uncertainties, and really kind of backbones a lot of these analyses - these things were just kind of crumbling under the weight of all of this data that we had. It was just so much data that these things were falling apart...

\[00:08:06.10\] So I really started thinking out of the box and trying to see "Well, there's gotta be something better." A lot of these methods were old methods, that were developed in the '60s and '70s, with some of the original particle physics experiments...

So I really wanted to start looking around and seeing what other kind of advances were made. That sort of got me into some of the machine learning data science stuff that I started finding... And I ended up for a portion of my thesis using Gaussian process regression to estimate backgrounds in this model that I was working on. And again, it was just the tip of the iceberg for me; I didn't really completely understand that I was doing data science at the time. It was just sort of "Hey, here's some new fancy technique", which is actually not even all that new, but... I could start using it to make a real difference in these analyses.

So from there, I decided I really wanted to get out of Academia. I just didn't really wanna pursue that. I wanted to go into industry and was trying to decide what to do. I started applying for data science jobs, because it was the hot thing at the time... And got a couple of offers, and just really wasn't crazy about of them. None of the jobs really sounded that interesting. A lot of them were "How many more clicks can you get on a button that generates ad revenue?", things like that. It wasn't interesting to me at all.

And then I actually came across ESRI because my wife has worked for ESRI for quite a while, and she let me know that "Hey, we're actually looking for a data scientist. Maybe you should apply." It's something that never crossed my mind, but... So I applied for that, and I was one of the first ones. I was actually the second data scientist hired at ESRI next to Daniel... So a very new team, and really had this very uncertain sort of direction that it was going, and that really excited me. I thought it was really interesting that there was this whole new realm of topics that this company - and to some extent, the entire space of GIS just really hadn't tackled yet. That just sounded like a ton of fun to me and I couldn't pass that up, so I ended up accepting that job. So I've been at ESRI now for almost two years; a little less than two years now.

**Daniel Whitenack:** Super-interesting backgrounds, and I'm excited because I didn't know we'd be talking about particle physics or I'd be talking to an oredigger today... \[laughter\] But I'm excited about those things. Let's start a little bit to ESRI... For those that aren't familiar, what does ESRI do? What businesses are they involved with, and what are their primary products or services?

**Daniel Wilson:** I guess I'll take that one. ESRI is a GIS company. GIS is Geographic Information Systems. Basically, ESRI deals with all aspects of geospatial data, from collection, storage, to analysis. A large amount of our users are in the state and local government, federal government spaces, where they use our software as a system record for city management, land data, road networks, parcels... You name it; it's a place on the Earth, it's probably in a geospatial database, and ESRI maintains a lot of different geospatial databases.

**Daniel Whitenack:** With that data - are you providing some of that data, or are you serving mostly as a system to manage that sort of data? Or a little bit of both.

**Daniel Wilson:** A little bit of both. We actually have what's called the Living Atlas, and it's basically a collection of authoritative geospatial data that our ESRI subscribers can use. I kind of glossed over this, but ArcGIS is really the name for our primary software platform.

**Chris Benson:** And could you tell us a little bit about what ArcGIS is? I guess that's a particular implementation, or a product (if you will) of GIS. Is that fair?

**Daniel Wilson:** \[00:11:56.04\] Yeah, so - GIS (Geographic Information Systems) the software behind it started several decades ago, and I think it's fair to say ESRI really started that side of things. ArcGIS specifically has evolved into a collection of desktop and server products for geospatial analysis and data manipulation. Some of that is for production mapping, where people take imagery, or other content, or even paper maps, and turn that into products that people can use.

**Daniel Whitenack:** So just as a side note here - I actually got exposed to ArcGIS a little bit more recently... So SIL - some of our listeners will know that we do language-related work around the world, and one of the things we do is we have a mapping team that does language survey work, and they produce maps of what languages are used where... So there's all these sorts of polygons around the world where certain languages are used, and populations exist, and all of those sorts of things.

Just to give an example -- that was one example that I was exposed to recently. I know they're using ArcGIS for this, so I'm assuming that ArcGIS is managing those polygons, and allowing them to do analysis over them, combine them, and that sort of thing. Would that be accurate?

**Daniel Wilson:** Yeah. Basically all functions of that, from geographic coordinate systems, to computational geometry, to normal database, relational database utilities, larger-scale spatial databases as well.

**Chris Benson:** Just looking through your website here while we're talking - it talks about spatial analysis, and remote sensing, and real-time visualization, and analytics both in 2D and 3D... Are all these applications centered around ArcGIS, or another product? Rob, would you take that one?

**Rob Fletcher:** Yeah. So most of them are centered around ArcGIS. We do a lot of extensions and other products that add on to all of these things. Like you said, there's the desktop products, which is the ArcGIS ones, and then we also have some server products... You know, things that are cloud-based to do large data consumption or analysis.

There's also a bunch of other extensions we have, that can do things. Even producing the data, like for instance Drone2Map. These are things that you can take drone footage, and as long as you have the correct metadata, it can do all the math under the hood to actually put those data you've taken by drone onto a map. So you can produce your own imagery products, and things like that.

**Daniel Whitenack:** Interesting. You mentioned that one of the big clients of ESRI are local and national governments... Who's primary using ArcGIS for the main use cases? What are the main use cases, I guess I should say? Why is it important to have this sort of specialized ability to deal with spatial data?

**Rob Fletcher:** A lot of the state and local government usage we see - some of it at the county level, where they might track parcels of land. This allows them to keep a really good system of record and inventory of where all these parcels are, and historical information about them. So all of these different geometries that you see, and that are actually enriched with data. So you can kind of think of it as being like a relational database, but a relational database that has spatial properties to it. So it's not just a row in a table, it's a polygon that sits on a map, that also has that relational information associated with it. Doing this allows state and local governments to keep track of (like I said) things like parcel data, tax information...

We get a lot of utilities, where they can look at where water lines are, or they can use this to actually do analysis to try to find out what kind of precautions need to be taken if, let's say, someone needs to go in and dig something. They can basically give and area and say "We need to dig right here", and based on this whole system of record with all this geometry, you can come up with things like "Oh, are there any gas lines, or water lines, or power lines? Is there anything nearby? Are you in some zone that needs to be low noise?" All of this analysis can be done inside of that form.

\[00:16:08.09\] So the state and local governments use this to do a lot of planning, to keep track of all of their things... But also to do analysis, forward-looking as well. For example, for a site selection type problem. We need to put something new somewhere. Where do we put it? Where is the best place to put it? Where are we gonna not infringe on other people's property, or keep it near some other utility that it needs to have access to... Things like that.

**Chris Benson:** Quick question, just as a follow-up - you mentioned the word "polygon" in reference to this, and I was wondering if you could take a second and just tell us what that is in this context.

**Rob Fletcher:** Sure. A polygon in this content is really just a series of points that exist in some map space, with their XY coordinates. In general, what makes it a polygon in our realm is that the first point is equal to the last point. That means that it's a closed thing, so you have some defined shape that's just series of XY coordinates on a map, basically.

**Break:** \[00:17:19.05\]

**Chris Benson:** Daniel, I've got a question for you... We've been kind of getting this carsh course in the last few minutes about GIS, and specifically ArcGIS, and some of the use cases and applications in a general sense... I'd like to start pulling artificial intelligence/machine learning ideas into it, and kind of understand how is ESRI using AI and ML in the context of GIS, and specifically ArcGIS, and your other products and services.

**Daniel Wilson:** Yeah, it sounds good. That's a really big question, and there's definitely a lot of sides to that that I would like to address.

**Chris Benson:** Sure, absolutely.

**Daniel Wilson:** I'd like to first start with what I think most people tend to think of when they think about applying artificial intelligence to spatial \[unintelligible 00:19:40.05\] geographic data... And that's things like aerial drone and satellite imagery, and extracting feature from that. So that could be something as simple as "We have a satellite image of an area and we want to extract all the buildings in there."

\[00:19:58.05\] Historically, that's been a manual process. A human has gone through satellite imagery and they've drawn boxes around the building footprints of a house, or drawn borders around things, or drawn lines where there are roads, or anything like that... And we're finding that we can automate a lot of that using mostly modern-day deep learning techniques, convolutional neural networks and the like. That's where a large amount of our use case and a lot of our focus on our AI strategy has revolved around... But I also wanna say that that's just a piece of everything. Really, what we're trying to do is find these areas where geospatial information in geographic context adds value to an analysis problem. There are countless areas where we've found applications of AI. I'd love to talk about some of those, definitely.

**Daniel Whitenack:** Yeah, so before we get into the specific applications, I guess I just have a sort of general question about AI and spatial data... So you talked about polygons and relational information to geographic entities... When we're thinking about AI models that use geospatial data, are there specific types of models or types of encoders that work with this sort of data out of the box? ...or most of the time are you kind of thinking of pulling features out of (let's say) ArcGIS, that are related to geography, and using those as kind of more "standard" features in an AI model?

**Daniel Wilson:** I think the answer is all of the above. I think the most common applications that we're seeing are things like using geospatial information. So when we say data in a relational database as a geometry, like a polygon, more generally we're talking about an arbitrary shape for an object. So that could be a polygon, it could be a series of points in a line that we call polyline points, or things like that. Sometimes you can extract features purely off of that geometry, and then tie that back to the attributes that are in the attributes table.

An example is we're trying to make predictions about something on, say, a road network. An application that I've put a lot of work into is car accident prediction. There's a lot of features that you can apply to a point on the road that could be extracted from both its geographic context, the attributes of the road itself, or the geometry, such as like how curvy it is. When we apply this in machine learning models, there's a lot of different applications.

This could be a normal, standard, out-of-the-box machine learning algorithm, something like a random forest or support vector machine, it could be a graph neural network if we're talking about something on a road graph... But really, it's not limited to any one set of models, or one type of data. There's a lot of different applications.

**Rob Fletcher:** Yeah, and I'd also like to just say that one of the things that really attracted me to this problem set in general is that using geospatial information in especially deep learning models - it's not always clear how to do that. You mentioned extracting these into the standard inputs that you would normally get, and that's definitely something that we do sometimes... But I think also we try to put a lot of thought into "Well, how can we use the objects themselves as input?" And this is, in general, a very difficult question, because you take something like a polygon, for example... You know, try putting a polygon into a neural network, and it could be hard, because if you have some arbitrary number of points that make up vertices of the polygon, it's really difficult to fit that into something that's like a confined or a predefined neural network that has a certain number of inputs.

So I think in general it's actually a pretty difficult problem to tackle in the general sense, and that's one of the things I think is really exciting about this field.

**Daniel Whitenack:** So on that point - and I know Daniel mentioned graph neural networks... So are you actively exploring these kind of unique ways? Because I know this is something that you face with text for example, too. You could have three words or you could have 17 words, but most of the time you sort of encode this information into a fixed-size vector somewhere in your model. Is it a similar strategy that you're pursuing, or maybe what are some of the methodologies that might be worth noting, that people are exploring in this area?

**Daniel Wilson:** \[00:24:22.26\] One area that I've found really interesting and that I've been following very closely over the last couple of years - and it's very similar to the NLP side of the world - is attention. Attention, normally, has been used within natural language processing contexts, to look at the relationship between words in a sentence, or characters in a word.

**Chris Benson:** As you go, can you define attention also, for anyone out there that doesn't know it?

**Daniel Wilson:** Sure. That's basically training a neural network what parts of an input are relevant to its computation. So it's a learned way of approximating -- you know, if you look at a scene, you're not looking at every last part of a scene. What you're doing is you're parsing it into the most important parts first, and paying the most attention to those. So in the context of a neural network, attentions are similar to that. Mathematically, it's a pretty simple operation, but applying attention outside of a natural language processing context - we've been trying it across spatial entities.

Let's say you have a bunch of points on the ground -- we've actually been working on a project to apply reinforcement learning to police control optimization. Within that particular application, the units that we're applying attention over are things like locations of crime, or police patrols, or... Basically, spatial entities that have an XY coordinate, and then maybe other attributes.

In this case, what we're doing is we're looking at -- where we're applying attention to that is "How do all of those relate to each other?" and using that as an input to the model. So it's not about bringing in new features, but how the features are handled within the model.

**Daniel Whitenack:** That's interesting. It makes me wonder about -- with that application it seems like there's these really interesting intersections with geospatial data and time as well... Because I'm assuming when you're optimizing those sorts of police patrols, obviously crime in certain areas is going to be very time-dependent as well, and possibly even weather-dependent... So it seems like there could be multiple layers of geospatial data that's also changing per time. It seems like quite a rich dataset.

**Daniel Wilson:** Yeah, absolutely. We're finding that a lot of the times that we're applying machine learning to geospatial problems it's not just one dataset. A lot of machine learning models are built on top of relational data, so bringing multiple tables together and then creating one big set of input features and rank the model... And that's still kind of true for geographic information, but it's about bringing together a lot more disparate sources of information together, into a model that I think makes it an especially unique challenge.

**Rob Fletcher:** Yeah, and I think that understanding the time characteristics in some of the problems - especially with something like crime prediction, and modeling how distributed not only over space, but over time... It's pretty difficult and it's something to be spent a lot of time on.

Also, you mentioned weather in there - that's something that obviously comes up all the time, whether it is a big factor, whenever you're talking about especially larger areas; even weather can be different across an entire area where you're trying to make predictions, so sourcing very good weather data has been a big task of ours. We're always on the lookout for better weather data, predictions in shorter quantities of time, and things like that.

**Chris Benson:** One of the things that I was noticing as I was looking through ESRI's material here that really caught my eye - and Daniel's eye as well - actually related to some stuff that we had already talked about in past episodes... So you have done some work with the U.S. Department of Defense's Joint AI Center, which short-hand is called the JAIC... And before I lead into the question, I'll not to listeners that we actually had an episode with Greg Allen, chief of strategy and communications at the JAIC, which was episode 72. It was entitled "How the U.S. military thinks about AI." So anybody that's interested in that can dive into the JAIC's perspective on that episode.

\[00:28:30.01\] But going into that, at Lockheed Martin we apparently have done some similar work to you guys in terms of the context of humanitarian assistance and disaster relief... You had a YouTube video talking about some of the work that ESRI has done with the JAIC, and I was wondering if you would just kind of tell us about that as a use case... And then you have a bunch of other interesting use cases that you note online as well; later on I want to ask you about those as well. But if you would tell us about what you're doing with the JAIC, that would be fascinating.

**Rob Fletcher:** Yeah, sure. So we are specifically involved with a portion of the JAIC that we call HADR, which is the Humanitarian Aid and Disaster Response. The main focus of this particular mission is this rapid response to any kind of natural disaster. The kind of response we're talking about is picture kind of 0 to 2 weeks after something like a hurricanes. This is when allocation of resources are very important, and it can be very difficult to gather information at the same time.

So one of the big things that we are supporting with the JAIC is using satellite imagery and any other data that we have access to - how can we enable them to make better, smarter decisions in a shorter frame of time, so that they can help the most people possible that are affected by these types of disasters.

**Daniel Whitenack:** I appreciate you leading us into this topic of humanitarian assistance, disaster relief... You talked about gathering whatever imagery and data that might be relevant to responding quickly in the case of a disaster... Could you give us kind of a scenario of how that might play out and how this system might help in terms of what you're trying to achieve?

**Rob Fletcher:** Yeah, definitely. How we kind of envision this being used is immediately after a disaster, as soon as this imagery becomes available - which varies depending on what kind of imagery it is, but there's a lot of satellite imagery you can get, and also NOAA captures aircraft-borne imagery pretty soon after these events happen... So one of the main use cases that we're working on has to do with road detection, and specifically road debris detection as well.

So what we kind of wanna do in the end is we want to be able to give them a system that allows them to understand the state of the road network in the affected area. Let's say because of blockages in the road you could find that there's some community that is completely cut off from any sort of aid, because all of the roads are completely blocked in there. This gets to this idea that we call service area, where we can say "Yeah, we know that this place is blocked off, and we need to maybe contract special vehicles to come in and actually deliver resources to them."

It can also help with things like routing. So if an agency like the JAIC comes in and they have some sort of base set up, and they need to be able to distribute resources or send out emergency crews, they need to know where they can get to as well. So this kind of real-time routing is something else that we're looking at, where we can say "I need to get from our base of operations (or whatever point we have here) out to some other point. How do I get there so that I'm not gonna get blocked by trees, or by flooding, or things like that?"

We really want to be able to give them the information that they need to be able to move around in this area without being hindered by running into a dead end and turning around and trying to find a way around.

**Daniel Whitenack:** I'm curious, on that front -- one of the things I'm thinking about as I'm thinking about these use cases is the work that's gonna have to go into the dataset behind this... And I'm guessing if -- let's say the satellite imagery exists of previous disasters, and you kind of have that dataset... It seems like there's two major challenges, from my side. One is the data labeling bit, and the overhead with that... And then second is the sort of variability you could get with disasters.

\[00:32:22.05\] Let's say a tornado or something in one part of the country - the ground cover is gonna look very different from a tornado in a separate part of the country... So are you thinking about those problems at all, in terms have you been able to deal with those? Is it a matter of brute force and data labeling, or are there tricks to dealing with this robustness issue?

**Daniel Wilson:** On the data labeling side we've actually partnered up with a company called Figure 8, that does large-scale image annotation for deep learning models, and they've been doing it for a very long time. There are those challenges that you've mentioned though.

There's a large amount of disaster imagery collected by DigitalGlobe and NOAA that's publicly available. DigitalGlobe has an open data program that you can get disaster imagery going back -- I don't remember how many, but several years. So we have quite a few earthquakes and tornados and hurricanes from disparate areas.

Then bringing all that data together, we can label that at scale, so that we have a large dataset to build our model upon. That's a good start, but we also have a large collection of high-resolution pre-disaster imagery. Some of that is from digital globe, from their pre-disaster imagery in the open data catalog, and some of that is internal imagery that we have at ESRI from a variety of sources, that we can use for this. Sorry, was that the question?

**Chris Benson:** No, that was great. I was just gonna actually add a little bit to that... It's a pretty amazing time. I love the work that you guys are describing, that you've done there... I know at my employer we've done similar stuff. We're basically creating datasets that are multi-sensor and multi-platform, and spatio-temporally synchronized, and stuff. So it's similar stuff, but I just wanted to comment that it's really an amazing time that we're gonna come into for the HADR use case, because we're gonna be able to finally apply AI technologies and data science in general to make a really meaningful impact through the DOD... And I love the way the DOD through the JAIC has really engaged a lot of different organizations, each contributing what they can, just as ESRI is, into this.

It's a pretty inspirational thing that we're all trying to accomplish, so I was pretty thrilled to see you guys doing that work there, and understand that going forward we're gonna have people all over the world as they look at these humanitarian assistance and disaster relief scenarios, being able to have tools that they've never had available before to save lives. I just wanted to really kind of draw out that social good on it.

**Rob Fletcher:** Yeah, we're really happy to be working on this. This is one of those projects that makes you feel really good, when you can get results and really deliver things to people, because you know it's making a difference. And also, to kind of touch on some of those other things - there's a lot of other people in the community contributing to this as well... And this is actually one of the goals of the JAIC - to establish a platform that allows everyone to come in and contribute to this. It's not just ESRI building models and running them for these different use cases. What we're also trying to do is we're trying to use this huge GIS platform that ESRI has been building over a very long time as this sort of basis that other people can come in and start contributing to.

\[00:35:54.01\] So I think one of the big things for me that makes these AI platforms really an attractive offering for something like this is that -- you know, there's a lot of companies out there that can produce AI, and do a great job it, they do really amazing work, but in the end they give you like a model file. Maybe they give you weights, maybe they even give you some results of what the output of their AI model is, but then what? What do you really do with that? I think that's one of the things that ESRI really brings to the table, is that we have this entire platform with these hundreds of geo-processing tools that have been built over a very long time by some very smart people, that can now take that data and run further analysis on it and really make use of it. In this case, AI can be thought of as just producing the data that you can then do even more analysis on, and you can kind of unleash this entire platform on it.

**Daniel Whitenack:** I really like what you're saying about the platform, and we've discussed a lot about satellite imagery... And I'm just kind of scrolling -- as Chris said, you've got a lot of great use cases on your blog as well, and I see a lot of those are talking about 3D data as well, which we haven't really talked about much. So there's the satellite imagery part, and we haven't really talked a lot about 3D data in AI on this podcast... So before we get too much further, I kind of wanted to see what your thoughts were in terms of the current state of AI utilizing 3D data, and challenges around that, and what sort of use cases that fits into.

**Daniel Wilson:** Yeah, 3D data has actually been a pretty big focus for the last year, for my team and some others within ESRI. There's a lot more LiDAR being collected. That's where a lot of the 3D data that we're talking about is coming from - it's from vehicle-mounted LiDAR. Sometimes it's the Department of Transportation for a state or city that is driving around to collect roadside assets such as street signs, or anything that they need to know exactly where it is.

In the end, the human has to go through and extract those manually. So what we're doing with 3D deep learning - it's all been deep learning to this point - is trying to extract objects like that, or run segmentation models to find buildings, or vegetation... There's a lot of different applications that we've been seeing.

**Daniel Whitenack:** So with 3D data specifically, I'm just thinking like "Oh, 3D data - it must be so big and hard to work with." Is that the case, or are these 3D datasets in general very large and hard to deal with computationally, or is that just kind of a misconception on my part?

**Daniel Wilson:** Well, it depends. That's usually the answer to most questions, "it depends." But there's actually been a lot of really good advances in the last couple of years that make that problem less simple. A lot of times when I worked with 3D data in the past - it was then with what's called a voxel model, where with an image you can have a 2D array of pixels, and work in that space, or you can stretch that into three dimensions, and then your pixels become voxels.

Now, data explodes when you start getting into voxels space, because now you're talking about the cube of the number of points... But you can actually run deep learning models directly on groups of points themselves. So as long as the number of points in the type of objects that you're detecting isn't absolutely massive, you can run these on regular hardware such as GPUs.

To talk about a couple of specific models, we've been looking at things like PointNet and PointCNN. PointNet appoints that convolutional neural network. Those actually take in the individual points as features, and they use a set of shared weights basically, and then aggregations further down in the network.

So you can have a network that takes an arbitrary number of points as an input, and it basically embeds that collection of points into some lower-dimensional feature space, that is then used by pretty much a normal neural network to do classification, and segmentation, and object detection.

**Chris Benson:** \[00:40:07.00\] And I noticed, as you talk about that specifically - I'm looking at your blog as you're talking, because you guys have so much interesting stuff here... There's the PointCNN article - could you take us through a use case? I wanted to ask about actually several of the use cases that you had here. Would you take us through that PointCNN one where you talk about replacing 50,000 man hours with AI?

**Daniel Wilson:** Sure. I'll do my best on that one, since I did not directly work on that project, but...

**Chris Benson:** No worries.

**Daniel Wilson:** ...Dmitry, the guy who wrote the article, would be the perfect one to ask if he were here. So that was using that algorithm I mentioned before, called PointCNN. It's close - maybe not quite state of the art at the moment, but it's still a very good algorithm. In that case, what we did was we had a large training dataset that was created manually. Some humans went through and they labeled utility poles and wires within a large LiDAR dataset. I believe that was an airborne LiDAR dataset, but I'm not entirely sure on that one... And it was a TensorFlow-based implementation of PointCNN, and it was trained on a single NVIDIA GV100 GPU. It has 32 GB or RAM, to answer your question about size... To get at high performance you still wanna have a pretty large GPU or set of GPUs, but in this case we didn't even need multiple GPUs to train that model.

**Chris Benson:** Yeah. I just had one other quick follow-up. A moment ago you were talking about voxels... And I'm wondering if you would go ahead and kind of tell us -- I've worked with it, obviously, but not everybody has; if you would describe what a voxel is, and talk about how that works into a typical process.

When you're working with three-dimensional space - what is a voxel, how does it apply to a modeling process? And if you have a favorite use case where you've used it, that would be great. I'm trying to make it tangible in this sense.

**Daniel Wilson:** Sure. So 3D data can be represented in a lot of ways. One way is a point cloud, which is just each point has XYZ and some attributes. You can represent 3D objects as meshes. So when you're looking at 3D models such as in video games, or in 3D animation movies, like Pixar animations and stuff like that - that's when you deal with mesh surface. And there are some other categories too, and the whole field of computer graphics talks about that.

Voxels is what happens when you aggregate information into a fixed grid. So just like an image is a two-dimensional grid, a voxel - you can represent a 3D object as a 3D image in voxels instead of pixels. So instead of an X width and a Y width, you'd also have a Z width as well.

**Daniel Whitenack:** Awesome. Thanks for sharing. And I guess as we kind of get to the end here, there's obviously a lot of things that we don't have time to cover, and I encourage people to check out the ESRI blog and some of their videos online, which we'll link in the show notes to explore further... But I was curious, from both of your perspectives, what are you most excited about in terms of geospatial data and AI in the near future? What are you most excited about either working on personally, or things that you've seen people working on out there that really excites you? Rob, do you wanna start out?

**Rob Fletcher:** Yeah, sure. One of the big things that I've been tackling recently and been doing a lot of reading on is (I guess) not particular to geospatial, but I think could play a big role in it - it's unsupervised learning. We kind of consistently see the case that when we do engage with a client and the client asks us to do a problem, especially if it's something like an imagery type problem, they tend to not have enough imagery to really make a data scientists comfortable in results you might get from that... So one of the big things that I've been thinking about a lot lately is some way of kind of doing unsupervised pre-training on some of these networks...

\[00:44:08.17\] Because satellite imagery all looks very similar. I would say for the most part satellite imagery from different parts of the world looks a little bit more similar than just your random ImageNet dataset, or something like that, just sort of cell phone pictures or oriented imagery... And I think that could be a big advantage, in that if you can extract a lot of information -- you know, I kind of think of something like the image equivalent of BERT, for example, which (for those who don't know) is a language model that gets pretrained on a massive corpus of text in order to learn not necessarily specific tasks, but learn about language in general.

I've been really interested in this idea for imagery, where instead of learning to do some specific task, like find a car or find a tree, you can teach some network to understand what an object is. If I see a line that's perfectly straight over here, I can assume that that line is probably gonna continue over here, and that these all kind of constitute maybe one object or one thing that is like a discreet unit.

I think if you can get to that state, the amount of data that you'll actually need to make really good progress under these imagery-related tasks go way down... And this really opens up AI to a lot of companies that maybe don't have the capital or the time to invest in huge datasets and to label them as well.

**Chris Benson:** Sounds good. Daniel, what are you excited about?

**Daniel Wilson:** Well, I'm excited about most of it, but... Let me just mention that a lot of the work that I've been doing for my career has been on the computer vision side, and I wanna say I kind of lost interest in it as soon as deep learning \[unintelligible 00:45:42.16\] So really what I'm interested in is everything that's not imagery. Imagery is huge, there's a lot of amazing opportunities and ways that we can apply deep learning to it, and extract a lot of value.

Don't get me wrong, it's a very amazing place to be, but the problems that I've had the most fun working on, and I think are really the future of a lot of this geospatial data, are either multi-modal or non-imagery datasets. So that's bringing things like imagery in text, and what we call vector data, or basically tabular data that also has geometric information. All of those together.

So just to motivate that a little bit... The problem that I've been working on most recently is car accident prediction. I actually have an article on that Medium blog about the way we used to do it, and I hopefully will have one about the way we're doing it now coming up fairly soon... But that's a situation where if you think about it -- you know, imagine yourself on the road, and the terrain affects how far you can see, it affects the slope of the road...

The road itself could be made in a curvy way, the speed limit changes things, the number of lanes changes things, the position of the sun in the sky changes things, the weather, cloud cover, precipitations, snow, the condition of the roads themselves... And all of that can be captured in a lot of different datasets. Some of that could be imagery, some of that could be in the actual geometry described on the road, some of that could be in a table... It's all in different places, and it becomes really difficult to assemble all of that information together into a model that can actually make a real-world impact.

So that's really what excites me within the geospatial context - all of this data can be brought together in really interesting and novel ways, that I think people are just starting to scratch the surface of. My whole career I've been working on spatial data science, and it's been really hard to find "Oh, someone's done it before." I mean, chances are someone's tried it before, but it's such a hard and interesting problem that now that I think with the advent of so much large-scale spatial data, a lot of people are starting to take notice of this field, and there's a lot of great work happening that we can capitalize on.

**Chris Benson:** I'll tell you what - that's a great place to close it out. Well said, both of you. I guess we'll wind up... Daniel Wilson and Rob Fletcher, thank you so much for coming on the show with Daniel Whitenack and myself, to tell us all about what ESRI is working on. It's been really fascinating. Talk to you soon!

**Daniel Wilson:** Yeah, thank you for having us.

**Rob Fletcher:** Thank you for having us.
