**Chris Benson:** Hello there, and welcome to another episode of Practical AI, the podcast where we try to make AI practical, productive and accessible to everyone. This is Chris Benson, your co-host, and today I am at the NVIDIA GPU Technology Conference in Silicon Valley. It is Tuesday, March 19th.

I happen to be operating solo today. Daniel was not able to make it out here. I have a pretty amazing guest today to talk to... With me is Anima Anandkumar. Did I get your name okay?

**Anima Anandkumar:** Yeah, you did an amazing job.

**Chris Benson:** Okay. Anyone who listens to me on this regularly knows that I screw up names all the time, so I'm glad that I got yours right. You are the Director of Machine Learning Research at NVIDIA, and you're also the Bren Professor at Caltech, is that correct?

**Anima Anandkumar:** That's right. Yeah, I wear both hats, and I think it really gives me an opportunity to bridge industry and Academia in interesting ways.

**Chris Benson:** Absolutely. You are giving two separate talks here at GTC, and I would like to delve into both of those, but first I would really like to talk to you, and I know that you talk to people often - you've been in front of audiences quite a bit - about AI and the role you play there, but I actually wanna go back to the beginning and find out how you got into this, what that journey has been like, and talk a little bit about some of the challenges that you may have faced along the way. I know that you have spoken to some of those in the past, so... Can you tell us how you got into this at all?

**Anima Anandkumar:** Yeah, certainly. I've had a pretty amazing childhood in terms of the people around me were always encouraging me in my passion for maths and sciences, but also for dancing and arts and everything. My mom is an engineer, my dad has a small-scale industry that manufactures all kinds of components, builds machines... So I would go there as a kid, my mom and dad would take me there, to see how those machines operated and how -- it just seemed so magical that you could automatically build these components; they would be in all kinds of shapes, you had these machines going at this really high speed... So that was fascinating, and I would ask my parents "How is this possible?" and they would be like "It's all math." So math was a friendly thing to me from early childhood.

**Chris Benson:** \[00:04:34.01\] How old were you about that time period? What age were you at that point?

**Anima Anandkumar:** I think my earliest memories are either me solving some puzzles, or some toys, and going to industry -- like, my parents always took me when I was maybe three or four...

**Chris Benson:** Wow, that is young.

**Anima Anandkumar:** Yeah, that is super-young.

**Chris Benson:** So you had this fascination at that really young age...

**Anima Anandkumar:** Yes, yes.

**Chris Benson:** Okay. Keep going.

**Anima Anandkumar:** Some of my earliest memories are me trying to solve a math problem and wondering "There is this addition, and suddenly a subtraction. Why are there these two symbols? How are they related?" So I somehow remember being very fascinated with it.

My grandfather is a math teacher, so he was teaching me --

**Chris Benson:** You had a secret weapon in your family.

**Anima Anandkumar:** That's right, and my grandma would give me all these puzzles, and games... She tells me that I apparently had memorized the calendar for a ten-year time period, and they would quiz me on what day is the 12th of August, for instance...

**Chris Benson:** You've gotta be kidding me... How old were you for that?

**Anima Anandkumar:** Apparently three...

**Chris Benson:** Oh, my gosh... Okay...

**Anima Anandkumar:** This is what my grandma tells me. I can't do it anymore...

**Chris Benson:** But you're setting a high bar for the three-year-olds out there. I'm sure we have three-year-olds listening to the Practical AI Podcast, but for that one or two out there you've just set the bar very high. My daughter who just turned seven has no excuses at this point.

**Anima Anandkumar:** No, I think every child's development is different, but at the same time there is so much fascination in all aspects of development. For instance, I love dancing. I started dancing when I was three as well; so I wasn't put into a box. I wasn't told "This is math. You're only good at that. Do that."

**Chris Benson:** So do you think doing dance and other activities that have nothing to do with technology, do you think that made a difference, having that diversity of experiences made a difference in how you progressed?

**Anima Anandkumar:** Oh, certainly. That's what makes us human, right? The artistic side of us, and the humanities, and the liberal education is very much a part of our growth as human beings, as a society. To me, I would also argue it's highly mathematical.

**Chris Benson:** True.

**Anima Anandkumar:** Dancing is all about rhythm, and you count 1-2-3-4 for steps, and then you progress to saying it's no longer these discrete steps, it's a more continuum of movement. There is flow, but there's also sudden peaks, and sudden changes to it as you progress in dancing. To me it's highly mathematical. It's like a wave.

**Chris Benson:** I have this vision of you at four years old, going through your dance, and then dissecting it mathematically across the board there...

**Anima Anandkumar:** No, but I think the earliest memory that I have, that very much relates to what I'm doing with AI today - I remember suddenly stopping and questioning myself "Huh, I feel so differently right now. I feel like there's something that's me." It's kind of what they call self-actualization. And again, no one had told me about it, I had no idea, but I was just playing; I remember this moment very vividly, where I felt "Oh, there's something known as me", even though maybe that's not the language I used... And for us, taking baby steps in AI - that's so fascinating, how kids learn so quickly, learn so intuitively, come up with all these developments in their personality...

**Chris Benson:** \[00:08:22.09\] Yes, there's so many things that we take for granted as humans, and ironically, those of us now in the AI space look back with kind of increduleness, in terms of saying "Wow, you don't think about that, but there's so much there that we're trying to discover now in the field of AI, so that we can do amazing things.

**Anima Anandkumar:** Yeah, and I would say we are still quite far away from getting anywhere close to that, right? But that's what will keep me employed for a lifetime, so... \[laughs\]

**Chris Benson:** There you go. Job security right there.

**Anima Anandkumar:** But yeah, so going from those very early childhood memories, and getting fascinated about math, and all the way through high school, I was just getting into math all the time, and was like "What's the next thing?" I always remember there were number systems, and then there was suddenly complex numbers, and this is imaginary - "Huh, you can even make up things in math." Before that you think math is just concrete and you can't make up things in math, but an imaginary number is something we make up, but it's so powerful in the way we use it.

**Chris Benson:** So as a kid, the tangible aspects of math, looking at machines working and realizing there was math involved, and having your parents and grandparents influence that... But then it sounds like as you grew in mathematics and learned more and more, the abstract nature really appealed to you, it sounds like.

**Anima Anandkumar:** Exactly. There is structure in the way we build math. We first start with the specific goal of counting numbers, but we said "Oh, this is not enough", right? We need to expand our number systems. We then had rational, and then we said "We also need irrational numbers", and real, and then complex... So it tends to get increasingly more abstract, but then it has all these applications that wouldn't be possible without it, and that's what fascinated me. The math, even though I cannot directly relate to it, I can't visualize it, I can still use it in many interesting ways. That's when I thought abstract thinking is important; I shouldn't always try to get it into something physically that I can relate to. I don't need that.

**Chris Benson:** So as you're growing up through this process, and becoming more and more proficient at mathematics through school and through home life and such, did you retain that passion for the engineering that you had as a child? Did that drive, or did you get more into just the pure mathematical passion that you were discovering?

**Anima Anandkumar:** That's a good point... My mom and dad would take me to different industry meetings, so we'd go to these big trade shows, like GTC but for manufacturing... And I'd be seeing the latest machines, the computerized, numerically-controlled machines. Back then, if you remember, it was the green screen, and it only had some simple programs you could write; in terms of the capabilities, it was like, "Okay, which access do you go? What would be the set of movements of this turret that would go, and which tooling do you use?" But to me, like, "Oh wow, you can program, and now you can change the material... And this is done in such an automated way..." - that was my introduction to programming, which is a very non-orthodox way of thinking of programming.

**Chris Benson:** And how old would you have been as you really started expressing yourself in programming?

**Anima Anandkumar:** I think I would have been more around eight or so...

**Chris Benson:** \[00:11:54.22\] Yeah, so you were still quite young at that point in time... Okay. By that time, did you pretty much know that this was the path that you were on, as you grew up? Or were you still kind of finding yourself...

**Anima Anandkumar:** I was still dancing; I always loved dance. I should say much of my family is engineers and mathematicians, although my uncle is a biotechnologist, so I would hear from him of advances in biology... So no one really put me in any one path. For me, I was generally fascinated with science and technology, math and engineering, but at that point I was looking at documentaries, for instance, about NASA, and space... That's how Caltech, actually -- you know, I remember thinking "Oh, that's such a fascinating place." So for me to go from there to actually be at Caltech, and be an NVIDIA, that's making these cutting edge technology to enable AI is a big leap.

**Chris Benson:** So you got to Caltech as an undergraduate then?

**Anima Anandkumar:** No, I didn't.

**Chris Benson:** No? Okay. So how did you make that shift? Coming through your teenage years, and it's time to pick universities - where did you go and what caused that decision-making process?

**Anima Anandkumar:** I was in high school, and at that point -- so I was back in India, and I was looking at the loal colleges... At that point I was still not ready to come halfway around the world... And this Indian Institute of Technology (IIT) had this really difficult entrance exam to enter them, because they're highly selective. I forget the exact number, but it's a huge number; maybe 5,000 students take that, and you had to be in the top 500 or 600 or so, at least when I was doing it, to be in computer science or electrical engineering, or some major that you would like to pick.

So I remember we were hearing about this exam in high school, and my first reaction was "Why is that so difficult? What makes it difficult?" Somebody would tell me "Oh, because it has difficult math." I'm like, "Really? What is difficult math?" \[laughs\]

**Chris Benson:** Just in my own experience, I think that is a fairly unusual reaction to these tests. Most of us just go, "Oh my god, I have a hard test I've gotta go figure out and study for", and everything. So it's interesting, you were already analyzing the test itself in terms of the difficulty and how to apply yourself to it.

**Anima Anandkumar:** Yeah, but also I was like "Oh, I really wanna learn something where I would be challenged", to be honest... Maybe because I had a lot of help from my family, and I was reading books beyond my schooling requirements... So I felt, honestly, like "I need to do more." Things I would see in the real world, like these machines that work, or I'd look at these documentaries about the space... I was having this huge gap about the math I'm doing in school, and how is this possible today.

**Chris Benson:** So which school did you start into at your undergraduate work, and did you select mathematics as your major, or...?

**Anima Anandkumar:** This was IIT, so they only had engineering as most of their majors... So I did take electrical engineering. That to me was a nice sweet spot, where I would be using a lot of math, I would be analyzing signals, I would still be connected to the hardware...

**Chris Benson:** Yeah. You're going back to that three-year-old seeing the machine working right there...**Anima Anandkumar:** Yeah, yeah... And I would still be programming. And I had a minor in computer science, so I'd have all these different elements put together. That's where this entrance exam I felt was an opportunity for me to really go into like -- you know, when we look at physics, like, "What are the basic principles?" Not only know about the laws of physics, but how do I apply to different systems?

\[00:16:11.28\] What made this test challenging, at least at that point - those were near to olympiad-level questions, and why are those questions challenging? That's because they're not the usual ones you would solve during your assignment, or during your usual schooling...

**Chris Benson:** So did you dive heavily into physics at your university schooling at that point? Had you been exposed to it prior to university at all, or was this kind of a new area that you entered into?

**Anima Anandkumar:** I mean, this was the entrance exam to get into the university...

**Chris Benson:** Oh, to get into your undergraduate.

**Anima Anandkumar:** Yeah.

**Chris Benson:** I misunderstood that. I apologize. Okay.

**Anima Anandkumar:** So it was physics, chemistry and mathematics. In all these three you had to dive deep into it. So when I was faced with these difficult questions, that's when I had to really go back and understand the principle. If I'd misunderstood it, I could not apply it to solve the problem.

**Chris Benson:** As you're approaching university -- that is a fantastic story, even up to that point; it's truly inspiring, and I hope people will share that with their daughters, like I will. As you got into university, how did you evolve at that point? You know, you're in it now, you're in your schooling; at some point I know you would have come to the United States and ended up at Caltech... Tell me how that process happened.

**Anima Anandkumar:** Yeah, so once I was at IIT, I was just surrounded with a lot of amazing people. The faculty, the students - they've all come through the difficult test as well, right? But I found so many amazing friends that I still keep in touch with... And what fascinated me there was we all shared this common vision to ask how technology could help society, could help us have a better future... So I remember being very involved in this tech fest called Shaastra. That's the annual festival that IIT Madras (where I went to school) throws... And we were asking, "Okay, how do we bring in more students here? What kind of contest would be -- where do we get the best speakers? What are the best researchers today? How do we get them here?" To me, that was one of the highlights on -- you know, how I've seen this community come together and ask "How do we showcase today's technology? Where is that going in the future?" That kind of a community togetherness is what I experienced at IIT.

Part of that was also asking -- you know, at that point I was doing research, both in my undergrad school, also in Indian Institute of Science, which is in Bangalore, and that's when "Oh my god, I have so much freedom to think, and to ask what I could be doing in a way of, what's missing today and what I could really--"

**Chris Benson:** How you can make a difference.

**Anima Anandkumar:** Yeah, and create something myself that can make a difference. During my junior year I did this undergraduates research experience, an equivalent of what we call SURF here, and that summer undergraduate research fellowship. There was a similar program back in India, and that's when I decided I just needed to do a PhD. I had to dedicate that time to go deep into something... And who knows-- that was the adventure, because what I could do there I did know, but the possibilities seemed so exciting.

**Chris Benson:** Did you feel that you wanted to go -- I mean, Caltech being the world-class school it is, did that draw you at that point in time? Was that the natural next progression in your own growth?

**Anima Anandkumar:** Yeah, so I applied to quite a few schools. I ended up at Cornell University. Caltech -- I think I did apply there, but Caltech is a smaller school; we are highly selective... \[laughs\] But I'm glad I'm there now.

**Chris Benson:** Yeah, your idea of schools -- they're all world-class schools that you're naming here, so... It's good to have that kind of a problem, to figure out which of those schools you're gonna go to. So you got to Cornell first then.

**Anima Anandkumar:** Yes, that's right.

**Chris Benson:** So tell us from there.

**Anima Anandkumar:** Yeah, so when I arrived at Cornell, it was just this beautiful place... It is in the middle of nowhere, but it's nice. It's a lot of natural surroundings \[unintelligible 00:20:32.09\] is gorgeous.

**Chris Benson:** Good for thinking, right? Just birds, and...

**Anima Anandkumar:** I mean, I did arrive in early fall... \[laughs\] But yeah, to me it's a place where -- like, there's a lot of close-knit community. My advisor, Lang Tong, was just such a wonderful human being. He would give me that freedom to think and grow... He wouldn't say "Oh, no. This doesn't work." He's never told me that. He would be like "Go figure it out", and then if it didn't work, he would be like "Oh, why not?" So we'd have this very open conversation... Honestly, he really motivated me to be a professor, because when I saw him, how he deals with students, and the kind of lifestyle he has in terms of really being able to think openly...

**Chris Benson:** So you were in your PhD program at this point?

**Anima Anandkumar:** That's right. That's right, at Cornell.

**Chris Benson:** Okay.

**Anima Anandkumar:** So that's when I was going to conferences, I was meeting other researchers to share these ideas openly... I decided at that point when I was graduating that I wanted to be in Academia, because back then AI really hadn't taken off the way it is today. There were very few, almost no industrial research in machine learning and AI.

**Chris Benson:** As we talk about that, because we're kind of now turning explicitly to AI - at what point in that process...? Because we were talking about the math and the engineering for a while - at what point did you realize AI was the area that you wanted to focus on? When did that happen in that process?

**Anima Anandkumar:** In fact, it happened during my early PhD itself. Lang Tong is an expert in wireless networks and wireless communications, and back then I was thinking about all these challenges of how to communicate over wireless channels... But the question is also "What do you communicate?" During that point, the question was "Why if you just didn't blindly send all the data?" If you could make inferences, if you could make decisions on what's really relevant, you could really reduce how much you communicate.

So I came into it from that viewpoint of how to reduce requirements in communications, which is not a traditional way of getting into AI... But I've never taken a traditional path, in many ways.

**Chris Benson:** Clearly.

**Anima Anandkumar:** \[laughs\] So that's where it led me to asking, "Okay, we need to then do some inferences. I need to now think about machine learning techniques." You know, we called it statistical inference and estimation, and more this traditional signal processing community, but the foundation is the same, right?

**Chris Benson:** Yes.

**Anima Anandkumar:** So that was my first project on how do we do distributed learning, where there are a number of sensors, and they don't need to communicate all the raw data they collect. They only communicate after making some inferences, what's truly relevant to your problem.

**Chris Benson:** Understood.

**Anima Anandkumar:** Let's say if it's measuring the temperature and there's something anomalous, maybe you only wanna communicate that anomalous behavior, and not just keep communicating all the time.

**Chris Benson:** So did you get your PhD from Cornell?

**Anima Anandkumar:** Yes.

**Chris Benson:** \[00:23:58.05\] And specifically, what was the PhD in? By the time you finish this long process -- actually, "finishing" is probably the wrong word, but as you got to this point in this journey, what was your PhD in?

**Anima Anandkumar:** My thesis title, if I recall it right - it's been a decade now - is "Distributed statistical inference." My first project led to many other projects of like how do you route this in an energy-efficient way in a network, and how do you model correlations across different sensors in useful ways? That's when it got into this large-scale machine learning, because we said "Oh, there should be dependencies... What do these correlations mean?" There should be an underlying graphical model, a probabilistic model that connects all these measurements.

That's when I started getting fascinated into all the literature of machine learning, that's considered core machine learning. I met Alan Willsky - who was a professor at MIT and now he's retired - at a conference, and my advisor said "Oh, just got visit him." So my whole last year was actually spent at MIT... Because he's the expert in graphical models and I wanted to dive deep into that. That's when I truly started publishing in machine learning conferences, at the end of my PhD and when I had a faculty job... So I kind of made a switch in terms of which communities I was publishing in. All the core math was very much connected and related, so I didn't feel it was a big switch, but a lot of people felt really surprised... "What? You're starting your faculty career and you're suddenly going to these new conferences?!"

Back then, these main machine learning conferences -- back then it was called NIPS, and now it's called NeurIPS, and ICML... These were tiny events. Signal processing events were much bigger, and so many people were wondering why I made the switch. For me it's always been about where the core intellectual ideas are, and where there's a lot of potential; to me it felt this machine learning revolution has to happen, it's just a matter of when... So I'm happy I went into core machine learning before it all took off.

**Break:** \[00:26:20.17\]

**Chris Benson:** So now that you've finished your PhD, let's turn toward you're now out there - you have your PhD, your faculty, and you are doing work in the space... How did you arrive at Caltech? There's a couple of questions I'll ask you about when you get there, and then ultimately at NVIDIA. And then after all that, I'm gonna turn you toward your talks itself down the road... But tell me how did you move over to Caltech, what made that transition?

**Anima Anandkumar:** So I'm still not at Caltech... \[laughs\]

**Chris Benson:** I'm sorry, okay...

**Anima Anandkumar:** No, no, that's what makes this a fascinating story, right? It's just suspense...

**Chris Benson:** So there's still a ways to go...

**Anima Anandkumar:** Yeah, yeah. \[laughs\]

**Chris Benson:** I see, I'm rushing your story... Terrible of me.

**Anima Anandkumar:** I actually started at UC Irvine, which is not far from Caltech; Southern California, a beautiful place, and a lot of really amazing colleagues.

**Chris Benson:** \[00:28:12.19\] If the listeners could see my face right now, I'm blushing, for having done that... But keep going, sorry about that.

**Anima Anandkumar:** \[laughs\] Yeah, and as I said, I was getting into this new field in the sense of publishing - these conferences, new people... So there was a bit of me that was stressed, "Oh my god, I'm starting this faculty life, I am doing this...", but there were just truly fascinating problems. I was looking at these probabilistic models and asking questions like "When can you learn these models at scale?" and "What do you mean there's a correlation between these models? Are there a few variables that can summarize the effects?" That's when I got introduced into latent variables, the idea that we can't measure everything in this world. There's always gonna be something hidden, and it's the hidden thing that maybe we are really after, that's what we'd like to learn, but we can't directly measure it.

**Chris Benson:** Based on your inquisitive nature, talking from childhood up, I'm not at all surprised that that's what you were going after.

**Anima Anandkumar:** I'm always after the hidden things.

**Chris Benson:** The next thing... "What makes that work...?" So keep going.

**Anima Anandkumar:** Yeah, so I was looking into what we call latent variable estimation... Think about understanding text, right? In the last few years we've made a lot of progress, but you wanna ask "What do I really wanna extract from this text?" It's the meaning. It's like the topics that are discussed in the text. But as human beings, even if that word is not even there, you can extract what the topic is. That level of extraction is hard, because we don't understand all the nuances of the language now through machines...

**Chris Benson:** Absolutely, we're struggling with that now. That's a big part of research in AI, with a couple of interesting things that have happened in NLP news lately... But keep going.

**Anima Anandkumar:** Yeah, exactly. So doing it in a fully generative way, like generate language and all its nuances is hard, and there's where I think simplicity -- there's something to be said about that. Back then, deep learning was not there, and with these models and the compute we had -- and even today actually, in fact, that's the state of the art results when it comes to categorizing large documents. So you have these lengthy news articles, or your reports, and they could be in the millions; and all you have is this raw text, maybe you have a bit of metadata, but not much. So you can't go laboriously even provide examples, you can't go annotate each word and say "Oh, this is representative of topic justice, this is representative of education, this is representative of geography..." You know, you can't go manually annotate each document of what it represents, and then ultimately even each word, because you want representative words for each topic...

**Chris Benson:** Right.

**Anima Anandkumar:** So this is called unsupervised learning, where we don't have these examples. No one's telling you what a topic should look like and how you should categorize your document into multiple topics.

**Chris Benson:** Even now, fully into the age of deep learning, that is still a huge push. That's where so much of the research is right now... So keep going.

**Anima Anandkumar:** Yeah, exactly. So back then, the question was "What's the simplest thing you can do there?" I tell my students and I tell my colleagues and all the researchers I work with - first think about the simplest thing you can do, and if it doesn't work, then go to the more and more complex... Because one of the dangers which I'll come to later with deep learning is you may just overly get it complicated and not understand what's going on.

**Chris Benson:** \[00:32:01.29\] You sound like an engineer when you say that; I can totally see that background there... You know, start with the simple.

**Anima Anandkumar:** Yeah, I have a lot of respect for the traditional engineering that makes aircrafts fly today, and all the transportation structures, everything. There's a lot, I think, which will come to my latest part, in the end, about my talk - it's blending the old and the new together.

Anyway, coming back to this "how to extract topics from documents and automatically categorize documents at scale in an unsupervised way", a simple \[unintelligible 00:32:38.24\] is what if you look at frequency of words? Let's say the word "apple" occurs a lot. If I'd just told you this, you'd be like "Huh... It could be about a fruit, or it could be about a company." So it's not enough. Then I'd tell you that the word "apple" and "orange" occurs in the document.

**Chris Benson:** It changes the context. You suddenly have a little bit of understanding of what was obscure before.

**Anima Anandkumar:** Yeah, you have more information. You know, Orange is also a company, but both of them may not occur that much together... So then you could go to tree words. You could say "apple, orange and banana", and now it's like "Oh, it is really something about fruits." So the more - what we call \[unintelligible 00:33:23.08\] if now look at how multiple words occur in the document together, then you can make better inferences of what the document is talking about.

**Chris Benson:** Okay.

**Anima Anandkumar:** And note that no one is telling the algorithm, no one is writing down every triplet and saying "Well, if it's apple, orange, banana, call it fruit." We can't possibly do this in full scale. The size of English vocabulary is more than 100,000, and it's cubic in hundred thousands, so there is just no way we would ever be able to do this manually.

And now the question is where does math help us here. This has kind of been there underlying almost all of machine learning - where is all the energy? Where is the strong signal? If I can extract that strong signal, then I can really do this without writing down all the rules.

The most basic algorithm - or I wouldn't call it basic, because it was sophisticated for its time - is principle component analysis (PCA). That's where we say "Oh, this data could have a lot of noise. I'm gonna filter out the noise by looking at only the sub-space in which the majority of the signal lies in." So it's the same principle that underlies a lot of what I did at that time, but it was now taking it to more dimensions, into tensors.

**Chris Benson:** And can you identify for the audience what a tensor is?

**Anima Anandkumar:** A tensor is an extension of a matrix. You can think of it as a multidimensional array. Just as a matrix has rows and columns, now it has more dimensions in a tensor. But just as we multiply matrices, you can also now multiply and operate and train tensors, and so there's a whole algebra you can build around it, which gives a rich set of operations on which you can build algorithms.

**Chris Benson:** Sure. So at this point, where are you working? Because we talked about the work... What institution are you at at this point?

**Anima Anandkumar:** Yeah, so I'm still at UC Irvine, although I took a break... This particular work, when I first started doing tensors, was in Microsoft Research. Microsoft Research, even now on the East Coast, this is headed by Jennifer Chayes... Again, an amazing role model, both for women and men. She wants to encourage open research. I went there, I gave a talk on one of my earlier topics that works on statistical physics, and her background is physics. She was so fascinated I used it in machine learning; that was not a connection that many people made before... So she was like "Oh, come over, hang out, talk to researchers, see what comes out." So we had no agenda.

\[00:36:12.01\] There was \[unintelligible 00:36:12.28\] and many other researchers around... One day we started bouncing ideas about "Okay, there is PCA, this kind of algorithm on matrices...", now this topic modeling, which is looking at trying to extract topics - is that enough? And if not, why not? Why should we need more? I'm not an expert on tensors at that point, and nobody is, because we don't really study that in undergraduate. But I think asking questions is where you suddenly lead into a whole new direction and whole new area that's completely unexpected.

**Chris Benson:** And is that what happened to you?

**Anima Anandkumar:** Yes.

**Chris Benson:** So what was the next step then?

**Anima Anandkumar:** So with these tensors we realized "Oh, there is a rich history." In fact, it was back in 1900's that Spearman asked questions about intelligence and tried to use tensors to solve that. I'm making a very rough simplification of what he did, but there is a very interesting connection where he said "Probably people have a different source of intelligence as \[unintelligible 00:37:20.12\] and mathematical. Can I use this notion of tensors to try to separate the two?" It's, again, separating these signals and finding these different directions... And it's similar to separating topics in our documents. There's this common, underlying math...

**Chris Benson:** I love how you just connected that back there...

**Anima Anandkumar:** \[laughs\] Yeah, so there's math everywhere that connects things together. Once I got into that history and got into Richard Feynman, Albert Einstein, in quantum networks, there's just very much core of that. Then signal processing \[unintelligible 00:37:56.20\] this was used... So it's looking at all this history and asking "Okay, what's different now?" What's different is we have a lot of data. We can now scale up our computation, and we're now looking at collecting even different kinds of data, different modalities of data, whereas in the earlier generations when tensors were used, there wasn't enough data... So I felt like this was the right timing to really think about tensors.

**Chris Benson:** It is... So I guess at this point are you into deep learning full, or...?

**Anima Anandkumar:** All this happened before deep learning took off. There were these few years when we were thinking about "How can I now apply tensors to these different probabilistic models?" More and more challenging dependencies... How do I learn communities of people? I look at friendship links - how do I know who's interested in what aspects? Like in social media.

**Chris Benson:** So how did you make that leap into deep learning? At what point did you realize that was what you were gonna be doing to carry your work forward?

**Anima Anandkumar:** The early deep learning results came about by around 2012 and 2013. I was thinking about analyzing nonconvex optimization. These deep networks have highly nonconvex optimization surfaces... But so much of even my theory and my experiments and the experience was telling we shouldn't be afraid of nonconvex optimization. In fact, the tensor methods that we use are also highly nonconvex.

In the beginning, people were shooting us down. "Oh, this is not convex. How do I know it works?" and we were like, "We're showing you the results." "But still, is there real proof that this works?" and I'm like "Oh, there's proof, but it's under some conditions."

So I think that revolution was happening, that convex is great, but so many things are not convex, and we can't just try to force things to be convex when they are not. We'd be limiting ourselves so much.

**Chris Benson:** \[00:40:14.25\] Understood. So for the audience here, if you could see her - she is so passionate about what she is talking about. She's waving her arms around... It must be a delight to take classes from you, for your students. Keep going. We're both smiling a lot, because this is so fascinating... And you've made my job so far as an interviewer so easy, because you're good at carrying it on. So tell us how you delved into it.

**Anima Anandkumar:** Thanks, Chris. I love talking about it, and by the way, my most recent class - I will make all the videos online, so you are welcome to go check them out.

**Chris Benson:** We will put that into the show notes as they're available, so that after you listen to the episode you can go find and watch those.

**Anima Anandkumar:** To give a brief introduction of convex versus nonconvex - think of convex as this parable... You know, any pebble you slide from the top will only go to the bottom, right? It may oscillate a bit, but ultimately it'll settle all the way in the bottom. That's what essentially all these optimization algorithms are analyzing... But with nonconvex it's many peaks and valleys, like the natural landscapes, so then you don't know where it's going, and that's what makes this challenging to analyze.

To me, this is again like between math and engineering. I don't wanna solve problems just because they're easy for the math to solve. For the math, I understand, I can express them; I don't want that to be the reason to solve a problem.

**Chris Benson:** Understood.

**Anima Anandkumar:** So when deep learning started taking off, that mirrored my experience that what I'd seen with tensors, which both are nonlinear and both are nonconvex, but things work very well in practice. So right from the beginning I was like, "Yes, this should work very well."

But at the same time, I think parts of it that I'm still hesitant on is it's highly black box, it requires a lot of data, but those are the opportunities, so I was like "This is great, what results we've seen now, but there is so much more we need to solve there."

One of the first things we did there was to ask "Okay, where do tensors and deep learning come together?" I mean, it's natural, because I understand one field very well, I know the other and what is the connection. That's where we said - and I showed it in my talk on Monday - I was asking, you know, if you look at the current neural network models, essentially it's matrix operations. You're multiplying two matrices; convolution is still a form of linear algebra... And that's because this methodology has been developed for the last 60 years or so. We have linear algebra libraries that have been highly well-developed, so that was one of the main reasons to build it as a foundation even for our deep learning.

**Chris Benson:** Since you mentioned - your Monday talk was the role of tensors in machine learning, right?

**Anima Anandkumar:** That's right.

**Chris Benson:** So go ahead and share with us a little bit about what you did there, because I think you're starting to go that way anyway here..

**Anima Anandkumar:** Yes, exactly. One aspect of the role of tensors was what I described earlier, with these probabilistic models and how do we extract useful latent variable modeling. So in this new one, with deep learning, we asked "Okay, why should it be only linear layers and linear algebra?" We can do these higher-order ones... So what does that add? And that's when we found you can get very high rates of compression of those networks and still get good accuracies. The \[unintelligible 00:44:02.28\] is if your data is in many dimensions, you'd rather also process it in many dimensions.

**Chris Benson:** That makes sense, yes.

**Anima Anandkumar:** \[00:44:10.21\] So why do we then limit all to two dimensions and just matrices, when we go through the layers? That's kind of the basic \[unintelligible 00:44:18.08\] If you think about the image, it's width and height, and if it's a colored image, it's now also RGB channels.

**Chris Benson:** Sure.

**Anima Anandkumar:** And if it's going through these convolution layers, it's collecting more layers, it still has spatial structure... And then when it comes to fully-connected layers, you destroy all that and you just do a matrix vector multiplication.

One of the first things we did was "Let's retrain that 3D information throughout, until the very end output, and design operations that we understand very well from tensors." That showed a very high rate of compression. That's when we said "Oh, this is natural. Things should come together", because a deep network is nothing but a tensor operation; it's a big tensor in the end.

**Chris Benson:** Okay, you heard it here, folks. That was a great explanation for that.

**Anima Anandkumar:** So at that point I'm still not at NVIDIA, I'm still not at Caltech, but I'm getting closer now. I was at my point of sabbatical, so I got my tenure at UC Irvine, and that's when as the field is taking off, there's so much happening in the industry, and it's really getting built into practical applications, it's being deployed in the real world, and in the industry there's so much activity... So I joined Amazon Web Services as a principal scientist on the AI team. It was almost from the beginning when the AI services were getting launched into AWS. That was, again, an amazing time, because it's like, you know, what would an AI service look like? And we were also doing all this in a very short amount of time, because there's a lot of demand for AI services from the public.

**Chris Benson:** Even though you haven't even gotten to NVIDIA and Caltech yet, I'm just amazed at how much of the pioneering work that you were doing in this space... You really stand out in that way.

**Anima Anandkumar:** Thank you, Chris. I think I've had amazing mentors and amazing support as well from the community to enable that. At Amazon that's what I've found. I learned a lot in terms of "How do we think about the customer? What are the needs? How do we have this short timeline to the product, but still make the customer happy? What would the requirements be?" And PR FAQ, which is the press release with the FAQ is how we first think about the product. That's to me so non-traditional... But again, I like that... \[laughs\]

So that was an amazing and a very busy time there. I launched the topic detection algorithm that I described earlier to categorize documents, that's running today in the AWS cloud, in the Comprehend service.

**Chris Benson:** Really?

**Anima Anandkumar:** \[laughs\] So yeah, going from this basic theory, all the way to something that's working...

**Chris Benson:** To applying it in a very real-world scenario, that is touching a lot of people.

**Anima Anandkumar:** Yes. And I was also managing an engineering team, and looking into all the processes of the sprint, and how do we ensure a good software engineering process, which was new to me, because I was in Academia before... So it was a big learning process, and that's where there are a lot of great people who help me learn new things.

Yeah, so seeing both the engineering side of it from a big production viewpoint, and all the pain points... This is where the SageMaker machine learning platforms that got also discussed in the keynote yesterday when Jensen Huang invite Matt Garman from AWS, right? It was a part of the launch...

**Chris Benson:** \[00:48:01.11\] Sure. I've used SageMaker, so I now know...

**Anima Anandkumar:** Yes. So I was very much involved right from the beginning to the launch. So all that was great learning lessons, and that's when at that point I got an offer from Caltech. There's so much happening in Amazon and in industry in general... And that's when I asked, "Okay, what do I do? Because I'm in a great place right now." But I do think for the longer-term research, and especially going to the fundamental sciences -- you know, Caltech in particular has such a strong strength... And for me, machine learning and artificial intelligence would make a true impact. I mean, not to downplay the other ones; the others are important, too. To me, a holy grail would be "What basic scientific discoveries can we make with that?" If we can enable that, that can just have such transformative effects.

**Chris Benson:** So you're at Caltech now... And I'm gonna throw a little bit of a wildcard in - before we started recording we were having our introductory conversation, and we were talking about some of the challenges that women face in the field, and our mutual desire to remedy that. And we were talking about the fact that there was the controversy -- anyone who's been in this space for a while will remember that there was a conference that used to be called NIPS, and there were connotations that may not be appropriate to that, so it was rebranded as NeurIPS... That originated out of Caltech, did it not?

**Anima Anandkumar:** Yeah, so the conference actually started at Caltech. And let's talk about the name in a bit, but the purpose of that conference was neural information processing... So it's highly multi-disciplinary, and this was back in '87; it's truly visionary to think about "Let's bring neuroscience", information that's like information theory, all the notions...

**Chris Benson:** Absolutely.

**Anima Anandkumar:** ...and processing, which is computation.

**Chris Benson:** Yeah, it is still one of the top conferences, maybe even the top one in the world, in the area, so I totally get that.

**Anima Anandkumar:** Yeah. And actually the origin to that conference goes back to a course that Richard Feynman, Carver Mead and John Hopfield taught together in '81, before I was born.

**Chris Benson:** I did not know that.

**Anima Anandkumar:** Yeah... I'll send you a link; it's just so fascinating. I mean, can you think of these three luminaries coming together and saying "We need to bring all these fields together." And ultimately, that resulted in a new option we have for PhD's - and a new division, in fact - that's called the Computational Neuroscience (CNS) at Caltech. We admit students today to that discipline, and it's highly multi-disciplinary. So all that led to the formation of this conference, back then called NIPS.

**Chris Benson:** Understood.

**Anima Anandkumar:** But yeah, back then it was a small event. People went, they liked to ski, and also discuss topics... So at that point -- I mean, the name had unfortunate connotations...

**Chris Benson:** It did.

**Anima Anandkumar:** ...but it wasn't explicitly there. To me, even the beginning years of when I started attending the conference in 2010, before deep learning took off and the field just expanded, I thought "Oh, funny name", but I didn't do much about it, and I never got bothered or harassed by it.

**Chris Benson:** Sure.

**Anima Anandkumar:** But once the field started growing, that's when it began very problematic.

**Chris Benson:** I was just thinking that. When it's small enough, and a very small community, people may not be thinking in that direction. But after it grows to what it had become and you have those negative connotations, maybe just as the conference had matured, maybe it was time for some of the branding around to mature as well.

**Anima Anandkumar:** That's right. And now we have to have higher standards because all eyes are upon us, right?

**Chris Benson:** \[00:52:11.14\] Absolutely.

**Anima Anandkumar:** Now it's in the public, and they're asking, "Oh, what is this name?" And worse than that, you have these few bad actors use the name to gain notoriety, because any news is news, right? Any publicity is good, because everybody's competing for talent, competing for attention... So you'd have these T-shirts with things like "My NIPS \[unintelligible 00:52:36.03\]" and all these...

Honestly, I have been in these house parties that we'd have back then, when the conference was small... They were wild, but I felt so safe and so included in them. And suddenly, these corporate parties are where I experience a really toxic environment. There was this infamous party where barely clothed women were brought in just for the purpose of entertainment, to a group of almost exclusively men.

**Chris Benson:** Yeah, so just as an aside, when I hear things like that, it's something that I just find revolting... Having grown up in a family of strong technical women, it wasn't until I was an adult that I realized that there were challenges for women to face... Because I had such amazing women in our family that it never occurred that there could be inequality. So when I hear about bad behaviors like that, perpetuating those kinds of stereotypes and other things, I find it disgusting. Daniel is not with me today, but I know he does as well... So I am glad for people like you stepping up and doing what you can to correct the behavior that needs it.

**Anima Anandkumar:** Because I really worry... As the field is growing, that's when this kind of things can have a big effect. If you look into the history of programming, there was a great New York Times article where in the beginning it was all the women who were programming...

**Chris Benson:** I actually was sharing that on LinkedIn when it came out last week, I believe...

**Anima Anandkumar:** And they were literally driven out by the forces... And I see the same happening today. To me, that's a big concern.

**Chris Benson:** So call to action to everyone listening to this - we all together need to put things right in this way. We need to have a global AI community that is welcoming to all, and is fair to all, and doesn't accept such bad behaviors.

**Anima Anandkumar:** That's right. I mean, democratization of AI will come in so many different ways.

**Chris Benson:** Absolutely.

**Anima Anandkumar:** And that's the thing... Honestly, the name didn't bother me before, but once these elements started appearing, it was a big issue, and then for the younger women it was an ever bigger issue than it was for me... And that's why I decided to speak out, and so many others did. It was just this huge collective community action.

I think it really helped us grow as a community better, because it brought us together, it raised awareness. So many men said, "Oh, I had no idea it was this bad, that you guys were having so many issues."

**Chris Benson:** On behalf of the community, all the listeners that will be thinking the same thought, thank you very much for being proactive and taking care of a problem that was developing in that area... And let's not let such things happen in the future.

**Anima Anandkumar:** Yeah, and this is to me just the beginning. There's so many efforts, like AI For All, that brings in under-represented high school students, or Fast.ai, democratizing AI to everybody... And there's the human perspective of AI that was launched at Stanford just a few days ago, that's specifically saying ethics should be at the forefront. I think these are all things that we as researchers, we as people having a stake in AI, in whichever different role, should really think about.

**Chris Benson:** \[00:56:14.25\] I'm gonna turn us a little bit, and as we start to wind up, I'd like to get -- you've talked a little bit about your first talk, and the role of tensors in machine learning, but you also had a fascinating talk, and I know Daniel is going to be incredibly jealous that I was the one, because Daniel came into AI from physics, and I did not... But your talk is "Infusing physics into deep learning algorithms for stable landing of drones", and I was wondering if you'd share a few minutes of that was about...

**Anima Anandkumar:** Sure.

**Chris Benson:** ...and maybe also talk a little bit about how you came to NVIDIA as well.

**Anima Anandkumar:** Yeah, absolutely. GTC is a place that really brings all this together.

**Chris Benson:** It sure does. This is a wonderful place to meet people, and to have fun, and to just really enjoy this field.

**Anima Anandkumar:** Yeah, so this project was done at Caltech, before I joined NVIDIA. It's very much of the Caltech nature, because if you look at the author list, it's from many different areas. There's people like me in machine learning, people in controls, in aerospace... So how we collectively solve a question. It wasn't like, "Oh, I'm gonna use my one tool" or "This is what should work", but really trying to solve the problem here... And so talking to domain experts. Soon-Jo Chung is the main professor from aerospace. He's an expert in drones and all the drone flights.

The main challenge, even today, if you look at the commercial drones, is they take a long time to land, and that's because the aerodynamics \[unintelligible 00:57:53.29\] is very hard to model, so they're being extremely conservative in the landing.

**Chris Benson:** Sure.

**Anima Anandkumar:** So the question was "Can machine learning help us do this?" On the other hand, most machine learning, deep reinforcement learning is about learning from scratch. You're doing it on games, and there is a certain interesting aspect to it, but for most practical applications you wouldn't do it from scratch, right?

**Chris Benson:** Right.

**Anima Anandkumar:** And the question is what is that right blend between existing knowledge, existing physics, and what should you learn from data. I think this is broadly a question for us to figure out. In most fields you have some existing knowledge, existing models, but they're not perfect. You also have data, but that's also not a lot. How do you bring the two together? It's not gonna be a purely deep learning-based approach, at least not the standard way it's done.

In this work we said, "Okay, let's now learn this unknown ground effect through deep learning, but we'll keep the existing controller and try to cancel this as a residual." But at the same time, we wanna guarantee stability, so it's not gonna be a standard neural network. And we did try that in the beginning, because we start with simple things, and it just crushed the drone.

**Chris Benson:** So you started with a simple thing, true to your engineering, didn't work, and you did then the logical thing about...

**Anima Anandkumar:** Yeah. And it also shows that we shouldn't apply deep learning blindly. Then once we stabilized the network, and we also have guaranteed theoretically that this will not crash, meaning it has \[00:59:30.21\] perspective (that's the technical term), then that also worked beautifully... I have videos of it where you see a very quick speed-up, and still a very fast, but smooth landing, with deep learning. To me, this is just even the first step. Ultimately, what we wanna ask is these autonomous drone flights - that you can certify they are safe, and that still today, given the recent incidents, we have so much to uncover there.

**Chris Benson:** Yes.

**Anima Anandkumar:** \[01:00:01.20\] And I think machine learning broadly can help us a lot. That also speaks to many of the projects I'm now doing at NVIDIA, which looks at using simulations; NVIDIA has just such strong simulation tools, like PhysX FleX, and all the graphics rendering and all that expertise. The first part of the keynote you saw, and how that blends in with the second part on machine learning and AI...

**Chris Benson:** Yes, absolutely.

**Anima Anandkumar:** ...and how do we bring those two knowledge together and those frameworks together for robotics, for drones, for autonomous driving - these are all questions that are very much connected, too.

**Chris Benson:** And just as an aside for the audience, she's talking about the keynote... Yesterday (which was Monday) afternoon Jensen Huang, who is the CEO of NVIDIA, gave his keynote for this conference, and was covering the topics that she was just talking about... And as always, it was a very impressive talk. It was one of those things that you don't wanna miss.

**Anima Anandkumar:** Yeah. It's a marathon, but it has so many -- each part you have to keep attention, because it's so informative...

**Chris Benson:** A two hour and forty-five minute keynote and yet it will actually keep you riveted all the way through it.

**Anima Anandkumar:** Yeah. And that's my broad philosophy today, when it comes to deep learning - what is the next thing? Right now we've shown with a lot of data, label data and computation, thanks to NVIDIA GPUs...

**Chris Benson:** There you go.

**Anima Anandkumar:** ...we are able to get good accuracies on deep learning in some tasks. But there's so many others where there's not gonna be enough label data, but maybe you'll have unlabeled data, and then you also have no prior knowledge about what structures you should impose, and how it should behave, what constraints it should have... And that's what I think is the future in order to make it truly applicable in a diverse set of applications.

**Chris Benson:** Well, that is fascinating. Just out of curiosity, when did you join NVIDIA? At what point in the process did you join the organization?

**Anima Anandkumar:** It was roughly at the end of September.

**Chris Benson:** So it's fairly recently.

**Anima Anandkumar:** Yes, yes.

**Chris Benson:** Okay. It's funny, as you have taken us through your story, that seems like such a natural place for you to end up, given the work that you've been doing.

**Anima Anandkumar:** That's right. And to me, it's at all the levels. If you go back to tensors, the basic primitives of these tensor operations, how do we speed them up - they'll come at the level of CUDA or even below that. Today, most of them we've sped up for matrix operations, so we need to rethink on what would be a new way to have primitives. There's gonna be a talk tomorrow with the title "cuTENSOR". That's gonna be a new library for those tensor primitives. And now there's all through the layers of the stack, how do you truly take advantage of these new operations, and parallelize them even more effectively, like you can get better speed-ups, and build better neural networks, build better probabilistic models of all different kinds.

**Chris Benson:** I know that NVIDIA publishes these, so by the time this comes out, it may very well be out, and we can put that in the show notes as well.

**Anima Anandkumar:** That's right.

**Chris Benson:** So right after you listen to this, you can go look at that as well.

**Anima Anandkumar:** That's right. The library, tomorrow, after the talk, will be available for the public.

**Chris Benson:** Fantastic. Okay. Well, this has been just an absolutely fascinating conversation. Listeners may know that we went a little longer than we usually do, but I think everybody will agree this was well worth it. Just truly an inspiring story that you had to share, and I hope that you will come back again sometime.

If people wanna reach out to you and talk to you about this kind of work, is there a preferred way that you have of people reaching out?

**Anima Anandkumar:** Sure. I am on different social media, as well as my Caltech email is public... My Twitter handle is @AnimaAnandkumar. That's a lot, but that's my first and last name. And my Caltech email is anima@caltech.edu.

**Chris Benson:** And we'll have all of those in the show notes as well. Anima, thank you so much for coming on the show. It's been a truly fascinating conversation, as I'm sure everybody will agree. Keep up the amazing work that you're doing. I'm looking forward to seeing what you do next.

**Anima Anandkumar:** Thanks a lot, Chris, and thanks for coming to GTC. Truly great to see you again.

**Chris Benson:** Thanks for having me.
