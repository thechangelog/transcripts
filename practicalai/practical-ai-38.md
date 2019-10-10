**Daniel Whitenack:** This is Daniel Whitenack, one of the co-hosts of Practical AI. I'm a data scientist with SIL International. I'm joined today by my co-host, Chris, who is a chief AI strategist with Lockheed Martin RMS APA Innovations. How are you doing, Chris?

**Chris Benson:** Doing great. How's it going today, Daniel?

**Daniel Whitenack:** It's going great. We were just talking before the show, I'm dealing with a few allergy issues; I think you are, too... But it's that time of the year, I guess.

**Chris Benson:** It is... So a couple of coughs here and there is a normal part of a podcast, as far as I'm concerned.

**Daniel Whitenack:** Yup. Well, are you up to date on your pop culture, Chris?

**Chris Benson:** I'm trying... I'm looking forward to learning a whole lot more on this episode.

**Daniel Whitenack:** \[laughs\] My wife and I have been watching Jeopardy, now that it's on Netflix, during our dinners recently, and I fail often at the pop culture category, so I'm really glad that we have Nick Hasty from GIPHY with us today, who is an expert in such areas, but also an expert in AI, to talk about some of the work they're doing in AI at GIPHY, and where that crosses with pop culture, and other things... So welcome, Nick!

**Nick Hasty:** Hi! Thanks for having me, it's great to be here. The extent of pop culture knowledge is a prerequisite here at GIPHY.

**Daniel Whitenack:** Yeah, I assume so... So hopefully I can do a little bit better at Jeopardy after this show.

**Nick Hasty:** Yeah.

**Daniel Whitenack:** So Nick is the director of research & development at GIPHY. Nick, do you wanna just give us a little bit of background about yourself, how you got into tech, how you got into AI, and how you ended up at GIPHY?

**Nick Hasty:** Yeah, for sure. I'd be happy to. I have kind of a varied background, to be honest... So I'm currently director of R&D here at GIPHY. We're in New York, New York, and I live in Brooklyn. I grew up in Georgia, actually...

**Chris Benson:** Oh, that's where I'm at! Okay, good for you. Georgia rocks!

**Nick Hasty:** Oh, right on! Yeah, I'm Canton, Georgia. It's about an hour-and-a-half North of Atlanta.

**Chris Benson:** I'm in Kennesaw, I know.

**Nick Hasty:** No kidding!

**Chris Benson:** And I grew up in Cobb County. For those who don't know the Atlanta metro area, I'm sorry, but we were practically neighbors growing up.

**Nick Hasty:** Totally, yeah.

**Daniel Whitenack:** I feel a little left out here, but I'll let you guys continue.

**Chris Benson:** Oh, so sorry...

**Nick Hasty:** \[00:03:56.25\] Yeah, that's really funny; small world. Atlanta is doing good. So then I went to the University of Georgia as an undergrad, and I was actually an English major. I always dabbled in computing in terms of custom Doom mods, and music technology stuff; I was big into music, and -- I actually didn't really get into web stuff and more computer science until grad school, when I went to an interactive telecommunications program called ITP, at NYU. It was kind of an art technology school in \[unintelligible 00:04:23.06\] They kind of take a bunch of random people who are good at a lot of different stuff and throw technology at them; anything from algorithms, data visualization stuff, to actual light electrical engineering, and just kind of see where you end up.

I was historically very into creative tech stuff, and even art proper, so after ITP I started working for the New Museum here in New York. They have a new media art branch called Rhizome; it's been around since the mid-90's. It started off as \[unintelligible 00:04:56.13\] and an archive where they house digital art. It's like an internet art organization. I was a director of technology there for a number of years, and I got a lot of my web chops there... And being at Rhizome, we were very invested into gif early on, because the gif is like a purely internet media, I guess you could say. It predates the internet, but it really came to its own.

**Chris Benson:** Yeah, once upon a time there were only gifs and jpegs on the internet, for images...

**Nick Hasty:** Yeah, totally.

**Daniel Whitenack:** Well, it's also a primary communication technique now almost, native to the internet.

**Nick Hasty:** It's a really wild trajectory that the gif has had. It's been really interesting to see. When I was at Rhizome, we would do art shows where the artists would only work in the gif format. They did stuff and art shows like that since the '90s, and the 2000s, and I started in the late 2000s there. I've worked hard on their digital archive; there were a lot of archived digital assets, including animated gifs, and those kinds of things.

After that I was teaching myself Node, and I was building a gif maker tool, and through a schoolmate I was introduced to Alex Chung, the GIPHY founder. He was at Betaworks and he had just been pulled in as like -- they were doing like a seed program for a number of different startup people.

Alex is a serial entrepreneur. He's been in the game for many, many years, and just has tremendous technical knowledge and business expertise... And he was looking for an engineer to build a team. We met and talked and just really hit it off, and then just started working at GIPHY the next day. This was GIPHY's first tweak, so I was technically GIPHY's first employee. There were two founders; a guy named Jace Cooke was the other founder, and then Alex, and then I was working on building the website, and Alex was building the API, and we were just kind of cranking for a while. The team continued to grow...

GIPHY took off like a rocket, it was very interesting. It was a really cool way that it worked out. The time and the place, like you were just saying, Daniel - the gif was coming into its own, with bandwidth increases; it wouldn't take ten minutes for a gif to load. In Tumblr, dumping gifs everywhere... I think on Tumblr people really started communicating with gifs and using gifs as reactions, and using gifs as a communications medium.

You've got pop culture, and all these different things you can load into a gif... If a celebrity is saying Hello, you've got all these different layers of meaning that you can unpack, and it became a really interesting way for people to interact with each other online. We kind of realized that, and our goal was to just -- you know, since gifs are so old, and since they work everywhere... I mean, at this time it was 2013, so there was still contention around which codec to use on the web, and Firefox supported this, but Safari supported that... But no matter what, the gif was supported everywhere. It was definitely an old format, and overweight, and kind of slow, but its universal ability to just load and play in anything, including iMessage way back in the day...

**Chris Benson:** \[00:08:23.05\] So at this point, with you guys been going for quite a few years at this point, what does GIPHY research do now, now that you've kind of grown into a full organization? What are the typical types of things that your researchers are engaged in?

**Nick Hasty:** Yeah, so fast-forward now, I've kind of moved out of engineering and I guess I'd say I'm more of like a product director person. I run the R&D team; we are within the Search Division.

**Daniel Whitenack:** How big is GIPHY in general, just to get a sense?

**Nick Hasty:** Yeah, that's a good question. There's about 100 people. There's roughly 75 in New York, and in L.A. we have our own content creation studio \[unintelligible 00:08:59.20\] there's about 25 of those. Engineering-wise, we're probably 30-40 at this point.

**Chris Benson:** That's a good sized organization. You're definitely past the early startup phase.

**Nick Hasty:** Oh yeah, totally. It's been a wild ride to see that happen. There's a lot of people here now, and it's awesome to have a lot of super-talented people here taking care of the things that you could just never deal with in the past. Now we're just so much more mature, and so much more able to handle everything that comes at us.

Like I was saying, my background is more like -- I like making things, so I have been able to move more into the R&D, special projects, kind of research things; find fun stuff, create prototypes for things, and then other teams may find value in it and pick it up.

But to be honest, our team - we're a good sized company, but we're not so big that we can just sit in the back and mix chemicals and play with our thumbs. We've gotta ship stuff. \[laughter\]

**Chris Benson:** I like that.

**Nick Hasty:** Maybe one day... So my team, alongside the celebrity detector stuff, we were kind of the first team to really use deep learning tools, like Word2vec; we use that deep learning model all over the place for recommendations, and a couple other things. On the GIPHY website, if you go to the gif detailed page, which is like a single gif, all the related gifs down below - our team overhauled that, and used Word2vec to take user data to approximate relatedness in terms of how visitors visited the GIPHY website in a session.

We do a similar thing with our tag space. We do related tags, and recommended searches using deep learning, Word2vec specifically.

We are doing other things now, where we're building trending tools, using various types of models, not all deep learning; some just machine learning, or some of them just kind of old school statistical algorithms. Doing language prediction stuff, we're doing head-to-head comparisons against search results, so that we can get a better sense of how our search is performing.

We had a spell of time in which we were doing a lot of image annotation. Obviously, GIPHY has a whole lot of gifs, and we relied on our content team to annotate those for a long time. We have a team of people who are ultra/mega pop culture wizards, who can \[unintelligible 00:11:20.10\] anybody in a gif, and then all the slugs and everything... But you know, humans can only go so far when you reach the tens of millions in terms of your catalog.

**Chris Benson:** You're the kind of company that can have a pop culture wizard department.

**Nick Hasty:** Oh yeah, totally. We could call it that; our content development team is definitely people whose jobs are to watch TV shows and cut gifs out of them \[unintelligible 00:11:44.10\] They'll watch the live event, they'll watch the Oscars, and they will cut gifs of the Oscars in real time, and catch all those awesome moments of people's sassy looks, or celebratory speeches, and those kinds of things, and will cut those in real time.

We work with partners, movie studios and various other people in the entertainment industry to live gif events, and things like that... So yeah, it's very funny.

**Daniel Whitenack:** \[00:12:13.03\] You mentioned a lot of different things that you've done and are doing... How many people are on this R&D team, working with you to come up with these projects?

**Nick Hasty:** Right now it's five of us; we've grown a little bit. We work with a team in Ukraine called Rails Reactor. Dmitry Voitekh and Ihor Kroosh are working with us right now. I've had a couple of other employees from them... But they are really amazing machine learning engineers, and kind of the specialists in terms of the algorithms, and building out the systems, and stuff like that. So we work with them... And then GIPHY's CTO, Anthony Johnson, works on our team a lot, too. He has a pretty extensive background in machine learning and deep learning. So right now we're tag teaming it, the team. It's been really awesome. We're really cranking out some stuff.

**Chris Benson:** So between the two organizations working together, is it kind of almost having a sub-team of deep learning folks inside your R&D organization then?

**Nick Hasty:** Exactly, yeah. Totally. Like I said, I've kind of moved into more product and vision and strategy, and communication... I mean, I still open up a Jupyter notebook and work on the data a little bit, and kind of figure out things around training data, and sources, and making decisions... But in terms of the actual implementation, I don't do that as much anymore. It's cool.

**Daniel Whitenack:** Obviously, the things that you're building are filtering pretty quickly into the product, and you're moving quick, and you have a smaller team... You are R&D, but R&D in some organizations - things take forever to get from R&D to product. Do you feel like that has influenced how you approach AI development, in one way or another?

**Nick Hasty:** Yeah. R&D initially was me trying to end up in a really, really removed, fun playland, kind of hoping for that, and thinking if I put the name first, then the reality will follow... \[laughter\]

**Daniel Whitenack:** You can hope.

**Nick Hasty:** Yeah. And not that I don't enjoy shipping, but with the velocity of GIPHY I was kind of hoping to slow down and play a little bit... But truth be told, the work we did had a lot of value. It was very obvious that it needed to be integrated into the company itself... So we ship, and it's a goal of ours. I think a lot of companies say "Oh, we're gonna spin up an R&D team", and then the team disappears and nothing ever shows up, and they're like, "Whoa, what are we throwing money into?" That can be kind of a gotcha... So we work hard to make sure that we're doing cool stuff, and we're reading papers, and we're looking at the latest stuff, but we're also taking what's out there and applying it directly to GIPHY, so that there is a real value that can be proven and integrated.

I think my team has probably taken over four or five of the GIPHY API endpoints. We don't deal with the actual search algorithm, but we have provided a lot of metadata that ends up in the search engine. The Slack integration - we took that over a while ago, and we redid it over the last summer. That's one of GIPHY's most well-known integrations; it's /giphy and then whatever, and then you get a random gif. Historically it was very random, and we really liked the juxtaposition of the weirdness, just kind of like the funniness... I don't know.

**Daniel Whitenack:** Oh yeah, I remember those days very well.

**Nick Hasty:** Yeah. Our philosophy is "Work is boring." You probably don't wanna be there, so maybe if you can just throw a little weirdness into the mix, it can make things a little funner. So we have taken over that, and applied some learning techniques to that to make it a little smarter, and make it a little more on point. We measured engagement and it's been 20%-30% increases overall in terms of how people have used the integration itself.

\[00:16:12.19\] So like Slack, and that endpoint, which is our translate endpoint, our related gifs endpoint, related tag searches endpoint... So point being, the things that we've done - we've been able to prove value in that, and then those things have been able to be incorporated by the company as a whole.

**Daniel Whitenack:** So the AI stuff that you're doing - do you typically have a target value-add product-wise, when you're going into that? Or do some things just start like "Oh, I wonder if we could that with gif?"

**Nick Hasty:** That's a good question... A little bit of both. Being with the company for so long and not having the media constraints of having to ship very specific things, I kind of wanted to explore the periphery of GIPHY's products and offerings that have kind of been more lackluster, or unexplored, or whatever. Our tags space, which is something that hadn't really been maintained, and it was very flat, and no one knew what to do with it... And then here comes Word2vec, Let's see what happens when we throw the tags in Word2vec and play around... Like, "Oh, wow! This is really cool. We can see interesting relationships between our tags that we never knew existed." Hey, these are actually better than our current implementation of how we do related tags. Let's keep iterating on this product, and then it becomes an actual -- it replaces the old method in which we were able to do that. So that's been the approach.

For the celeb detector itself though, that was something that we've always had a need for tools that can annotate images... Like I was saying earlier, due to just general human constraints around our content team. As obvious, entertainment/celebrities - that's our bread and butter; so if we have a tool that can annotate these gifs as a command, through uploads and crawls and that kind of stuff, and help us surface those things - that's a value-add.

But that being said, it was always something we wanted to open-source, and it was always something we wanted to do to kind of demonstrate where GIPHY is and what we're doing, and the different intersections we exist at... Because given GIPHY's distributed nature, people are like "Oh, I know you from Slack", or "I see you in Facebook Messenger, or Instagram Messenger", or "Oh, I use stickers on Instagram", or whatever... People don't always know what it is; it's kind of this amorphous thing... So this was kind of a flag, in a way, to say "Hey, we're doing these things, we're using these technologies, these are the things we're thinking about, and this is the data that we have to deal with."

The list of the celebrities that we trained on - those are taken from top 50,000 celebs that people search for... So these are the celebrities that people actually care about. There are celeb detections systems out there. I think Microsoft has one that you can pay for; there's a couple of third-party hosts... But those services, while they may have a large number of classes in which they can provide, they didn't always hit the ones that we needed, because we tended to just be more on the cutting edge in terms of what's going on in popular culture and celebrity culture.

So the thesis was we can really demonstrate that we can do the tech, we can build something interesting and fun; we have a very unique set of data that is not necessarily handled by other people... So we can put all of our different ingredients into this stew and then give it to people as a way to -- if you're new to deep learning, or if you're new to these kinds of things, we can open this up for people.

Gifs are fun and easy. It's a nice entry point. If people are slightly intimidated by machine learning or deep learning or any of these technologies, gifs and celebrities is kind of like a nice spoonful of sugar to help people kind of dive in.

I've always personally found that when I'm working with fun content, or working on a fun project, I tend to learn the technology better that way, as opposed to just reading a book, or hammering stuff out in the class. I'm like, "I wanna build something, and I wanna incorporate this fun thing and this fun thing. You know, if I end up needing some deep learning algorithm or whatever to make it happen, that's cool." That was kind of the thought behind that.

**Break:** \[00:20:19.22\]

**Chris Benson:** Nick, to take you back -- we kind of leapt right into the full company, but I actually wanted to ask you a question about... You described when you had come into the company, and you were having that conversation, and the next day you were doing it... But even possibly before that, as you know it, how did the project itself come about? What was its genesis, and also, why were celebrities the thing that you moved to? Or was there anything before that?

**Nick Hasty:** The project you mean the celebrity detector, or GIPHY itself?

**Chris Benson:** Maybe describe both of them. Kind of discriminate between the two, and where they each were.

**Nick Hasty:** Yeah, totally. For GIPHY itself - Alex Chung, who is the founder... He's just a perennial creator, a dude who just makes stuff all the time, and has worked in the internet industry for a long time... And he caught on the gif thing and he built a gif search engine; it was just a website that he built on his own, and he launched it, and it immediately got some traction. I think it was a press article when it crashed and burned, because of the influx of traffic... So Betaworks, which is a New York City incubator/venture capital firm - they knew Alex, they were introduced to him, and Alex was like "I've got this thing I'm building." They are a cool company, they are very aware of culture, and art, and technology, and they just kind of got what Alex was up to...

**Daniel Whitenack:** In our episode with Hugging Face, Clément mentioned them as well.

**Nick Hasty:** Okay, right on. Yeah, totally. So they understood what Alex was trying to do, and they had a Hackers In Residence program, and they brought Alex on to build GIPHY. Then within the first week of Alex working there, I was introduced... I was doing contract work, and I had been working on gif stuff... I had been working on gif stuff already at my previous job at Rhizome, and I was building a gif creator, because at the time (in 2013) there was no good way to really make gifs on the web... And I met Alex through a mutual friend, and we just really hit it off; it was very evident that we would probably do good together, so I just started working the next day. That was 2013.

Flash forward six years, I'm doing their R&D stuff. The impetus is, you know, GIPHY - we do a lot of different things, people know us in different ways, but let's really flex and demonstrate the cool tech we're doing. I think people may have an idea of the volume, and the gifs we serve, and the scale at which we do - we serve a couple billion gifs every day - but I don't know if people know about the more interesting projects that happen in-house, and how working at GIPHY is working with interesting technology at the nexus of culture and entertainment. So the celeb detector embodied this - we could do this project, say "Hey, at GIPHY we do deep learning; we had this experiment happening in the background. We use this tool in-house to annotate our gifs", but the real goal was to put it out there for people, hopefully get some press, hopefully people are interested in it, and also be excited about the community itself.

\[00:24:21.17\] Like any startup, we use tons and tons of open source projects, and GIPHY would not exist, categorically, if it wasn't for awesome open source projects, so... Our success - we wanna give some of it back, and be able to demonstrate some of the things we've picked up and learned along the way, and give something that people could play with... So that was where it came from.

**Daniel Whitenack:** Cool, yeah. That describes a lot of the motivation. I'm curious - you've talked about how the celeb project came about... I'm wondering - you talked about previously using Word2vec and other things for related gifs, and all of that...

**Nick Hasty:** Yup.

**Daniel Whitenack:** In particular on the celeb detector project, as you moved into that space, what were the different things that you needed to learn tech-wise to be able to accomplish that, that you weren't doing before in your AI work?

**Nick Hasty:** It's a good question. We hadn't done a lot of conv net stuff. A lot of the image recognition/object detection stuff we had used a lot of third parties for. \[unintelligible 00:25:22.23\] If you need a generalized model for object detection and images, you're not necessarily gonna train your own for that... So we didn't necessarily need that in-house. But for the celebrity detection - yeah, this was like our first real extensive deep learning project.

There was a lot of experimentation in the background. First it was just getting the data together against our searches. We had a lot of images around some of these celebrities, some of them we didn't, so we had to scour the web a little bit to build the image dataset. This is probably like any real machine learning or deep learning project, but making sure the labels were good; like I'd mentioned earlier, GIPHY's tag system has been going for a while, and was kind of big and difficult to carry, or difficult to manage in some ways, so we used Figure Eight (it used to be Crowdflower) to help us make sure that the labels that we had for the celebrities were really good. Then I think since it is face detection, we did use previous existing models.

So just finding the right one that we wanted to build ours off, and it ended up the ResNet-50. I think all that was pretty standardized; I think a lot of it kind of got a little more hairy when it came to things like clustering, and finding out how to group our faces together. When our team used the center loss approach for face recognition (in the blog post I linked to the paper), when we used that approach, the results really dramatically increased. That was a big gateway.

**Daniel Whitenack:** I know in the blog post - which we'll link in the show notes, by the way, so make sure and check that out - you mention the face vectors, face detection, and then this clustering bit which you just mentioned, around using center loss... Could you describe a little bit, for those that aren't familiar, what do you mean when you say "These faces are kind of like encoded or vectorized, and we're doing clustering with center loss"? What does that process really mean? What are you doing when you're doing that?

**Nick Hasty:** Yeah, so... Again, I'm more of the product person, so I'm gonna try to give my high-level. I wasn't in the weeds as much on that stuff.

**Chris Benson:** No worries, no worries.

**Nick Hasty:** But yeah, when you have a face coming into the networks and you make an embedding of it, so that it becomes like a series of numbers, or whatever...

**Daniel Whitenack:** Yeah, so that's like face to numbers.

**Nick Hasty:** \[00:28:00.12\] Yeah, exactly. So then for all the faces they have a numerical representation, and what you wanna do is be able to find similar faces and be able to match them. So if a new face comes in, when you translate that face into a group of numbers, you wanna be able to check it against the previously existing groups of numbers that live within the model, to come up with a prediction.

For us, there are pre-existing models, like I was saying, like the ResNet, that can take an image and make it into a vector. That wasn't so hard, but finding the right way to take the vectors and cluster them and group them in such a way that when a new face vector came in, we could make an accurate prediction. That was definitely the biggest challenge for us.

**Chris Benson:** You mentioned that you had selected ResNet-50... What kind of tools was the team using to be able to do it? Was this TensorFlow, or PyTorch, MXNet? Do you have any sense?

**Nick Hasty:** Yeah, totally. We went with PyTorch. We played with TensorFlow a little bit, but PyTorch was great. We kind of fell in love with it. I guess it's very Pythonic, to say... TensorFlow in Python has its own idioms and its own ways in which it wants to be used, but PyTorch was easier to -- it was just more malleable, we would say, and it allowed us to iterate faster, and it allowed us to kind of experiment quicker. So we really fell in love with that, and that's kind of become our go-to... And the code that we released is all in PyTorch.

**Daniel Whitenack:** Cool, yeah. So you're building this face detector bit, which vectorizes the faces, you've got this clustering bit, and I'm just imagining, pop culture in general - it's so dynamic; there's gonna be new celebrities that are super-popular in a super-short period of time... Have you thought about how that influences how you manage and deploy the model, in the sense of as new celebrities come onto the scene, how you're updating it over time, how you're swapping out models in terms of serializing them out of PyTorch and then swapping them out in a service, or something... How do you think about that sort of updating stuff over time?

**Nick Hasty:** Yeah, for sure. I mean, we'll probably continue adding to the model based on the search queries that come in, because we wanna be able to identify the celebrities that our users are searching for... And that, by its nature, tends to be the newer, cutting edge stuff. So we'll continue to -- I'm not sure when's the next time we will, because we've got other projects going on, but at some point in the future we'll probably do another big sweep across our searches and see who are missing.

**Chris Benson:** Can I ask a follow-up to that before you move on?

**Nick Hasty:** Yeah, yeah.

**Chris Benson:** I'm just curious, when you're tying the business side - a new celebrity comes on the scene, and you guys are going through some sort of process about "Hey, we've gotta add this in", and you have this deep learning model out there, how are you connecting the business side and the technical side together in a meaningful way, to where you're able to get on top of it quickly, and make it work, and get it deployed out? What's the connection between the business side and the deep learning team?

**Nick Hasty:** You mean in terms of making this value proposition to the business--

**Chris Benson:** Yeah, the process - how does it go from somebody who has nothing to do with deep learning is maybe watching the celebrity scene, saying "Oh, there's somebody else that we need to start paying attention to", how does get into a task-level action from the deep learning team? How does that move across there?

**Nick Hasty:** Totally. I'm in pretty good contact with our content development team, and they're in charge of all the latest pop culture stuff... And I worked closely with them through this for them to go through the list of celebs, and to approve the different ones, and make sure there's nothing bad or weird in there... And as things bubble up, they can certainly hit us up and say "Hey, this person's really growing... Can we add them at some point?" And we'll probably wait, because training obviously takes a little time, and we have to make sure we've got the right dataset.

\[00:32:06.26\] As we hit a certain set of new celebs, we'll probably just do one big training, and then re-release the model after that. It hasn't been a huge ask so far. In terms of business value, I think this isn't something where were' like "Hey, GIPHY's got an API that we offer to everyone, that's part of the GIPHY API, so you can get celebrity predictions..." The proposition was never deep learning as a service, it was always like "Let's do this thing in-house, set it up in-house, and then also give it out to other people to show how we do things in-house." That's why we included some ops-oriented code like Docker, and those kinds of things - to show our philosophy now for deploying... Those kinds of things.

**Daniel Whitenack:** Yeah, that's much appreciated, by the way.

**Nick Hasty:** We've actually been working with -- for some of the latest stuff that we're doing, we're looking into KubeFlow, and specifically Seldon. I don't know if you guys are familiar with that... Because we use Kubernetes here at GIPHY for all our architecture, and deployments, and stuff. KubeFlow seems pretty magical and awesome, especially Seldon, because it will give you gRPC and Rest APIs kind of out of the box, and it handles all the model management, all those kinds of things that feel a little ad-hoc; I think everyone just does what they can, like "Oh, I'll put it on S3 and then download it" or put it directly into the image, or something.

That's kind of where we're moving towards. It seems like a sustainable and very efficient way to handle machine learning/deep learning deployments.

**Daniel Whitenack:** Yeah, that community is moving forward really quickly. I know Chris and I are both big fans of things that are going on there. In our last episode - the one that will air prior to this one - we talked about some AI infrastructure, and Seldon was mentioned there, and KubeFlow too, and a lot of the great things that are going on in the Kubernetes community... So I definitely encourage people to check that stuff out, and check out that episode if you want more details there as well.

So you kind of moved to talking a little bit about how you really wanted people to try this out. You realized that there wasn't a great open source tool for this, and you wanted to release it and kind of put your foot down somewhere in terms of your open source contributions... Being probably the greatest experts on using AI for gifs, I was wondering, for those that are interested in this subject and maybe they'll look at the GitHub repo, which we'll link in the show notes, what are the unique challenges of using gif data in AI models, as opposed to videos or single images? Does it carry over the same techniques? ...like you mentioned, convolutional neural networks... Some of that, I imagine, carries through frame-by-frame, or something like that...

**Nick Hasty:** Exactly.

**Daniel Whitenack:** How different is working with gifs and AI models than working with videos and images?

**Nick Hasty:** Yeah. Like you said, we do it frame-by-frame, for the most part. We use a conv net and just iterate through the frames. The challenges though are just like -- and video is kind of the same way. And truth be told, we do transcode all our gifs into different video formats, so we don't always work exclusively with gifs. Sometimes these are just, if you're doing some stuff, to just work with a video file, or whatever.

But the challenges are, number one, the format is heavy. It's kind of a hefty format. The compression algorithm (is it Lempel–Ziv–Welch...?) is older, and it's kind of dictionary-based, from what I remember... So it compresses, but it's still a big format. It hasn't been able to take advantage of all the things that happened in video, so it's really just like a bunch of images that are squashed together into this file and the player just goes through each of the frames... And there's metadata at the beginning and the end of the file, that kind of say "Here's the speed, here's the colors", and those kinds of things.

\[00:36:02.29\] Gifs are also limited in the color pallet. If you have a high-quality video or high-quality image, and then you transfer it over to gif, each frame is only limited to 256 colors, I believe... So you're gonna lose some coloration there, which could very well affect how your deep learning system interprets the image properties and determines the values. So ideally, if you can, it's good to work with as high quality of images as you can, so you can be the most accurate. Those are kind of the main things...

It's just slowness, too. If you're moving with big files, and it takes longer to train, and it takes longer -- if you're moving stuff over the wire, that takes slower... Those are the biggest challenges, I would say, that we had to deal with. And maybe this happens with video too, but if a gif has 90 frames or 120 frames, it may become the situation where evaluating every frame is not your best option, just because of the overhead involved, or the time involved... You've gotta do some sampling across frames, and then figuring out which frames to sample, and then how you wanna aggregate it, and how you want to -- if the end result is a single prediction of a celebrity, getting to that single prediction by looking at a single gif, which could count 100 frames, maybe multiple faces, those kinds of things, since there are so many frames and the frames are different (more than one face could appear in a frame or not), you do have to play a lot, like I was saying earlier, with the clustering, and how you wanna group things in order to end up with that single prediction. So there's a lot of time spent in that component.

**Chris Benson:** I wanted to ask a quick question - I noticed in the blog post you talked about testing the model for different types of bias, and that kind of piqued my curiosity... I was wondering if you could give us a little bit of detail on that.

**Nick Hasty:** Yeah, for sure. We're gonna do another blog post around that specifically, but... It's been in the news, obviously, that there are biases built in, or certain models that have been released tend to have different biases around race, or gender, these kinds of things, and we were curious to see about that.

Our methodology was to -- we wanted to see the representation of cultures just in terms of our dataset, to make sure that it wasn't something that was leaning any one specific way. We wanted to make sure we have a wide swath of people who were being identified.

**Chris Benson:** Sure. Yeah, it's a big challenge for a lot of folks.

**Nick Hasty:** Yeah, for sure... And then making sure that those identifications are proper. So we looked at the different names, and we checked out their -- I think we used Wikipedia to get their ethnicities, and then we did a breakdown to see which ways we'd skewed... And there wasn't any kind of major red flag.

GIPHY itself - we're a younger company, and people who work here are millennials, so we're very sensitive to these kinds of things... And our user base tends to be kind of a proper representation of genders, and diversity, and those kinds of things. So we found the classes that we had, and it was a good representation, and there wasn't any kind of overweight in terms of any single ethnicity, or gender, or whatever.

So we put up the -- this is probably one of my favorite things about the whole project... There's a link in the blog post to the vector space of all the faces that we have.

**Daniel Whitenack:** Yeah, that was super-cool. I checked that out.

**Chris Benson:** Yeah. And you can really see -- it's interesting to see how a computer... Or when you take an image and you crunch it down into numbers, and then you group those numbers together, and then you re-equate those numbers with faces, it's cool to see how the computer actually groups faces together based on their properties - skin tone, hair color, and all these kinds of things.

It was really funny to see celebrities that looked alike, or who had shared similar characteristic in their face that you had never seen. To be honest, maybe our very favorite thing about this whole thing - within the company itself, everyone would upload their own face, and then they would get their celebrity prediction, and there was like a huge email thread that the company shared out, where everyone was like "Oh look, my match is Brad Pitt", or "Oh, I'm Jennifer Lawrence" or Idris Elba, or whatever... Everyone's got their egos stroked a little bit.

**Daniel Whitenack:** \[00:40:19.10\] Yeah, that's awesome. I was just thinking while you were talking about open-sourcing things and having that online, it's something I need to try out and share the results with my wife; I'm sure she'd be interested to see that.

I really appreciate you taking time to go through the project with us. Great work on everything.

**Nick Hasty:** Cool, I appreciate it.

**Daniel Whitenack:** I really appreciate your practical perspective on things, and I also appreciate you diving into some of the finer points of things, like bias, and other things. We'll look forward to that follow-up blog post. All of this will be linked in the show notes. Nick mentioned the 3D face embedding explorer, the GitHub repo, the blog post - we'll link all of that in the show notes, so check it out.

Thank you so much for joining us, Nick. It's been really fun. I've definitely learned a few things about gif along the way.

**Chris Benson:** And I've learned a few things about pop culture.

**Nick Hasty:** Hey, my job here is done then. \[laughs\]

**Daniel Whitenack:** Right as we finish out, did you have a favorite gif?

**Nick Hasty:** I do. Within the Reddit release, when we put it on Reddit, someone asked for the favorite gif, and I put it there. It's Vince McMahon; do you know Vince McMahon from the world of wrestling?

**Chris Benson:** Yeah.

**Nick Hasty:** He is this crazy showman, with insane faces, and there's a meme situation where he has progressively more audacious reaction to images. So there's this one where there's this bodybuilder dude, and then Vince McMahon looks at him and keeps getting more and more excited, until he falls out of a chair. It's just really funny. That whole Vince McMahon meme format for me -- I don't know... Maybe this is the Georgia in me talking about wrestling, but... Yeah, that's maybe my all-time favorite.

**Daniel Whitenack:** Awesome.

**Chris Benson:** Yeah, I think wrestling is uniquely suitable there, to that gif format, with the expressions and the exaggeration in it,

**Nick Hasty:** It's incredible drama. Yeah, we've got some great, totally ridiculous wrestling gifs, that I could just watch over and over and just ponder "What the hell is happening within this thing?"

**Daniel Whitenack:** Yeah. Awesome. Well, we'll make sure and add that link to the show notes as well. Thank you so much, Nick; it's been great. Thanks for joining us.

**Nick Hasty:** Of course, my pleasure.
