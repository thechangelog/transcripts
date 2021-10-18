**Daniel Whitenack:** Welcome to Practical AI. How are you doing, Chris?

**Chris Benson:** I'm doing very well. How's it going today, Daniel?

**Daniel Whitenack:** It's going really great. As you know, in my background, I started out in Academia, and then I moved into industry to become a data scientist, and I'm really excited to have Himani Agrawal here with us, who has also made a similar transition and we're gonna talk about some of that today, and also what's she's working on currently with AT&T. Welcome, Himani.

**Himani Agrawal:** Hi, Chris and Daniel. Thank you very much for having me. I'm excited to be here.

**Daniel Whitenack:** Awesome. Could you just give us a brief sketch of your background and what you're doing now?

**Himani Agrawal:** Sure. My name is Himani Agrawal and I'm a machine learning engineer at AT&T, where I work on predicting the network outages and avoiding customer dispatch. My background is very interdisciplinary. I pursued a bachelor's in the area of civil engineering, where I was using optimization algorithms to find the optimal slope of a dam. During my Ph.D. I was working on solving interdisciplinary problems in the area of HIV infection, applied mathematics and computing.

**Daniel Whitenack:** Awesome. Yeah, that's a really great background, and I'd love to dive into the individual pieces of that. So you mentioned starting out more on the engineering side, specifically in civil engineering; was data analysis and machine learning and data science always something that you were interested in pursuing, or how did that develop during your schooling?

**Himani Agrawal:** Yeah, so I believe I was meant to be a machine learning engineer, and I see machine learning as an optimization problem. My first web optimization began in my undergrad school, which was located in the flat regions in the foothills of the Himalayas. A lot of dams have been built in the upstream of the city, and determining the optimal slope of these dams is a very important optimization problem that the engineers have to solve. I got really interested in that problem as a civil engineer, and I started working on developing a model to determine the optimal slope based on features like the type of soil, the water retention of the soil, precipitation conditions, which stations, and so on... And to solve these problems I used genetic algorithms, which is based on Darwin's theory of evolution of human beings. An interesting thing happened while I was solving that problem - not just computations and applied maths and optimization, but I also fell in love with computational biology.

\[04:03\] I decided to pursue a Ph.D. to solve biological problems in the area of computational biology, and during my Ph.D. I was working in a very interdisciplinary area encompassing fields like mechanics, biophysics, applied mathematics. I collaborated with the applied mathematics lab at Rutgers University and Materials Science Lab at Rice University to solve a very interesting problem of how rigid HIV proteins can make cell membranes softer.

**Chris Benson:** That sounds pretty amazing. It sounds like you've really known you wanted to be in this field for a long time. I was gonna ask you if you thought about getting into data science as you were doing your Ph.D., but it sounds like from your undergrad you already knew you wanted to do that. How young were you when you decided that this was the right path for you and this is the way you wanted to go?

**Himani Agrawal:** I've been really into mathematics and computing since I was a teenager. I decided to pursue engineering because I thought that involved a lot of mathematics and computing...

**Daniel Whitenack:** Yeah, as you were having those passions for mathematics, when did you start first hearing about data science and AI?

**Himani Agrawal:** During my undergrad I got a chance to attend a Grace Hopper Celebration of Women in Computing in India, and I presented a poster at the conference. I was also a Grace Hopper scholar for the Indian version of the conference, and that's where I got in touch with the technology industry. When I attended the conference, I came to know how my engineering and computing background can be directly applied to solve a variety of problems in the technology industry... And one thing is that I had a very varied interest, a lot of diverse interests, and I wanted to solve a variety of problems. I never wanted to get stuck in solving just one problem... So when I saw in the area of technology people work on multiple use cases and acquire the domain knowledge as they go forward with the project, I was really excited about the nature of solving problems in the technology industry.

**Daniel Whitenack:** Awesome. For those that aren't familiar, with is the Grace Hopper Celebration?

**Himani Agrawal:** The Grace Hopper Celebration of Women in Computing is the world's largest gathering of women technologists. Last year 22,000 women attended this conference in Houston. It sells out within minutes, it's an amazing conference. I have been attending the conference for the last five years. I have been a Grace Hopper scholar twice; one in 2013, for the Indian conference, and in 2014, when I attended the Phoenix conference. It has a wonderful community of women technologists, and I really loved it.

**Chris Benson:** So what does it mean to be a Grace Hopper scholar? You've done it twice now, but for those of us who are not familiar with the details of it, could you tell us a little bit about it?

**Himani Agrawal:** As a Grace Hopper scholar, the Anita Borg Institute sponsors you to attend the conference. Many of the scholars are also either speaking at the conference or presenting a poster at the conference. There are very exclusive Grace Hopper scholar networking events that happen at the conference, where we get to meet with mentors and industry sponsors. We have roundtable discussions... So apart from the general conference, Grace Hopper scholars have access to a unique networking event at the conference.

Apart from that, we have a Grace Hopper scholar Facebook group where we keep in touch with all the Grace Hopper scholars. It's a wonderful community. We help each other and it's a great networking platform.

**Daniel Whitenack:** Awesome. It sounds like it had a really huge impact on your life in terms of you knowing about the engineering field and knowing that you really enjoyed mathematics, but then seeing how those skills could be applied in so many different areas. It sounds like it was really a great inspiration for you. That's awesome. We'll definitely put a link in the show notes so people can find out more.

\[08:12\] I'd be interested to hear a little bit -- you know, coming from a Ph.D. myself, I know it was a (I guess I should say) really weird experience coming from Ph.D. into industry. I know I had to learn a bunch of different jargon and find my own way through that. I was wondering if you could speak to that yourself. Did you find that to be a similarly weird transition, or how did you go about going from Academia to industry?

**Himani Agrawal:** My first experience with industry was when I got an internship with Microsoft Research. That was the first time, in 2015, I interned with Microsoft Research. It was a group Microsoft Research which works in the area of computational immunology, and I joined them as an HIV domain expert; that was the problem I was solving during my Ph.D. I was working with a machine learning group at Microsoft Research, although my background was not in the area of machine learning and data science in the traditional sense... So it was great to contribute my domain knowledge to the projects at Microsoft Research, but I was also very inspired to see the kinds of problems that the researchers there were solving, not just in the area of immunology, but in a variety of domains. And again, the very fact that technology (data science and machine learning) helps me solve a variety of problems - that's what excites me.

Apart from Grace Hopper Conference, that was a great platform where I got a first-hand experience seeing how machine learning can be applied to a variety of projects.

**Chris Benson:** That's pretty cool. You also did an immersive data science program with Galvanize, right? Why did you do it, and would you do that again? And could you just tell us a little bit about what that's like?

**Himani Agrawal:** Yeah, sure. The Galvanize Data Science immersive program was a very transformational experience for me. When I finished my Ph.D. I knew that I wanted to join the technology industry. I had all the technical skills, I had great computational skills, but I just didn't know how to really be a data scientist in the technology industry, and Galvanize made that happen. Galvanize Data Science immersive is a 12-week 500+ hour program that teaches industry standard data science tools and knowledge in statistical analysis, machine learning algorithms and data engineering. That program equipped me with the right skills which made me transition into the tech industry.

**Chris Benson:** That sounds cool. I'm curious, when you got to the end of that, and thinking about the fact that you are now an AI engineer at AT&T - did that Galvanize training help you bridge that to the real world, so that you could enter that job and be productive?

**Himani Agrawal:** Yes, so during the Galvanize program we went through several projects, and I also did an internship with machine learning for a genomic medicine based startup Simpatica Medicine, where I worked on machine learning for early diagnosis of Parkinson's disease from RNA sequencing data. The Galvanize program provided a great platform for me to not just learn the tech skills, but also apply it to a real-world problem with a company. That experience was very valuable. Then on the side, I also joined Jeremy Howard's Fast.ai deep learning class at the University of San Francisco, which was a great program. Jeremy Howard is a great teacher. I really enjoyed that class, and I built my deep learning skills during that program.

I was also working at Augment Solutions, which is a machine learning for customer experience based company... Does that sound right?

**Daniel Whitenack:** Yeah.

**Himani Agrawal:** ...where I was working on showing prediction from frontier customer chats data. This whole experience was possible only because of the Galvanize program, and then I transitioned into a full-time role at AT&T.

**Daniel Whitenack:** \[12:10\] Yeah, it's really great for me to hear that from you, because sometimes I think I myself feel pretty self-conscious in the industry because I also came from a non-CS and machine learning-focused background. I'm always learning new jargon that I wasn't exposed to before. I remember coming from Academia, it's like -- when I realized that when people were talking about these regressions, it was really just like ordinary least squareds; I remember having these light bulb moments when I understood "Hey, I did this back in science, but now it applies here."

I was wondering if you've also felt that way coming through this transition, and what advice you have for students coming from engineering or science backgrounds and wanting to transition into data science and AI.

**Himani Agrawal:** I definitely felt that way. I realized that during my Ph.D. I was working on solving optimization problems, which are very similar to the problems in the real data science industry, but I was not using the same jargons that are being used in the tech industry... So by being part of the Galvanize program I got to learn data science in the tech way. That really helped me a lot, and it helps me even today in my job at AT&T.

Coming to your second question, how can people from different backgrounds enter into data science - I believe that machine learning and data science is very ubiquitous right now. There is a huge scarcity of machine learning and data science expertise, so it's great if people from different backgrounds can enter into that field, because that would really spark creativity.

**Daniel Whitenack:** I think that it's great that you're exposing some of these things... I think people from engineering and science feel like "Oh, you should just know all this jargon" and all that stuff, but most people are trying to pick up either the computer science and programming pieces, or the science pieces, or the optimization pieces... I don't know if you know this, Chris, but I went through a similar transition and utilized the Thinkful course, which I think is now an online bootcamp, to get up on some of this jargon...

**Chris Benson:** I had no idea. I never knew that.

**Daniel Whitenack:** Yeah... I would similarly recommend -- I think Himani hit the nail on the head that it's a great time to get into this field, and don't let that lack of jargon scare you away. There's a lot of resources out there that you can use.

**Chris Benson:** So you two have made me wanna go and get in a bootcamp right now, after hearing both of you talk about it.

**Daniel Whitenack:** And what sort of events and opportunities are there with Women Who Code, or Women in ML, these different organizations? What sort of things are available?

**Himani Agrawal:** There are a lot of machine learning communities there... There are a lot Women in Machine Learning and Data Science groups all over the world, and they organize technical talks at companies, where we get to meet with machine learning technologists from varied backgrounds. I remember I attended a talk at the Chan Zuckerberg Initiative, and that was great... Apart from that, I know Women Who DS in San Francisco - they organize a code and coffee session every Friday. I think it's a great chance for aspiring data scientists to be involved in that community, so that they can receive mentorship from experienced women.

I have also been a part of Women in Machine Learning. It's a community that organizes one-day workshops and luncheons at conferences like NIPS and ICML. I attended a Women in Machine Learning workshop last year at NIPS; it was a great experience for me.

**Daniel Whitenack:** \[16:01\] Yeah, that's awesome. It's kind of one of my goals, to go to NIPS sometime; I haven't been yet. It's another one of those that sells out like a Taylor Swift concert. But I know you were mentioning before the show as well, Himani -- aren't you involved with MLconf? Maybe you could share a little bit about that. I know you've shared a lot of great community things, but I think you're pretty active also in the greater machine learning community... So tell us a little bit about MLconf and what you're doing with that.

**Himani Agrawal:** I'm excited to tell you about the upcoming MLconf in San Francisco, that's happening on November 14th. It's a single-day, single-track conference. It has amazing programming in the area of applied AI, from top industry AI experts. If anyone wants to go, I have a 20-person discount for them. They can use "himani20" and get 20% off the conference registration.

**Daniel Whitenack:** Awesome! Yeah, we'll put that in the show notes as well. It sounds like a great opportunity, I appreciate your efforts in helping to organize that.

**Chris Benson:** Alright, as we come back out of our break, Himani, I'm gonna turn us toward telecoms, since you are an AI engineer at AT&T... I wanted to start with a general question and just ask what are some of the main uses of machine learning and artificial intelligence in telecom?

**Himani Agrawal:** I would like to talk about the telecom industry from the AT&T perspective.

**Daniel Whitenack:** Sure.

**Himani Agrawal:** AT&T for me is first and foremost a modern media company, which is empowered by telecommunication engineering, television engineering, and advertising analytics. Along with our subsidiaries, HBO, CNN, Turner, Warner Brothers Entertainment, Xandr, AlienVault, Magic Leap, truly sky is the limit with what machine learning problems can be solved at AT&T. Within AT&T, I work with an organization called Chief Data Office. It's a really wonderful organization, and very young too, where I work with AT&T business units to develop automation solutions. We collaborate extensively with AT&T Labs and use the research innovations that's been out of the labs in our applied AI projects in the Chief Data Office. As a machine learning engineer, I work on data analysis and pattern recognition of telecommunication devices, and streaming alarms data to predict network outage and avoid customer dispatches.

Furthermore, our devices have been impacted due to the recent hurricanes, so I'm working on utilizing the weather, flood and power data in conjunction with the streaming alarms data to predict the optimal dispatch time to restore the devices.

Apart from that, AT&T has been a pioneer in the area of 5G, and I believe 5Ge, when combined with Magic Leap, in conjunction with machine learning, is truly game-changing for personalized customer engagement for TV streaming.

**Daniel Whitenack:** Well, I am just super-impressed to hear all -- I mean, coming from optimizing dams, to working in computational biology, to helping with disaster-related recovery within telecom... All of this is definitely super-inspiring to me. It sounds like your team - this Chief Data Office - is positioned between research and the rest of the company. Do I have it right that you are more kind of on the applied side, that you take some of the things that are coming out of research and trying to figure out how to apply them within the rest of the company?

**Himani Agrawal:** Yes, that's quite right. Indeed, the Chief Data Office is on the production side of things. We want to deploy machine learning solutions at scale.

**Daniel Whitenack:** Awesome. Coming from more the academic research side, have you been surprised at all by some of the challenges that are involved in taking and applying those research things to a larger scale within a company context?

**Himani Agrawal:** \[20:03\] I've seen a lot of commonalities between my research experience and my experience right now as a data scientist. For example, during my research, when we come up with a research problem, it's so hazy... We go out there and read all the research papers and try to figure out the problems that we have to solve. Similarly, at AT&T, when we work with the business units, we get tons of data and we have to figure out what kind of problems can be solved. That's very similar to what we do as researchers - figure out the problems that we can solve, and execute them.

**Chris Benson:** I have a follow-up question. You just mentioned when you work with business, while you're doing that - I was wondering if you can actually share with us some of the things that you are working on, kind of tell us what you're doing on a day-to-day basis.

**Himani Agrawal:** Yeah, sure. As I mentioned, I'm working on the data analysis on the streaming alarms data that come out of the telecommunications devices. From that data, I try to figure out the root causes of the network outage. By doing that, I'm preventing a dispatch to a customer's house.

**Chris Benson:** That is super-cool.

**Daniel Whitenack:** Yeah, it is really cool. So the data that you're processing is actually kind of streaming off of all the AT&T-related devices, right? And then you're detecting network outages. Is that right?

**Himani Agrawal:** Yeah. So I have the network topology with me, and from that, from all the alarms that are being generated from the network, I try to find out where exactly in the network the problem arose, so the dispatch can be sent to that particular location.

**Chris Benson:** That is cool. I didn't mention at the beginning of the show, but about 20 years ago I worked for AT&T in network engineering, and honestly, we did not have any machine learning, at least that I was aware of, at the time... So I can tell you, going back and thinking of the pain of putting together networks, I wish we had had someone like you there then, to help us get through these difficult things. I couldn't help but think about that as you were describing your daily duties.

**Himani Agrawal:** I didn't know you worked at AT&T.

**Daniel Whitenack:** Yeah, and actually -- I don't know that I've mentioned it on this show before, but my first job as a data scientists was with a VoIP startup (voice over IP) and I know that we had in our mind kind of envisioned some of the things that you're talking about, so it's just really cool to see people actually putting this into practice. I know it's not an easy problem to solve at all.

**Himani Agrawal:** Is that when you got into AI?

**Daniel Whitenack:** It was, yeah. I was in my Ph.D., I came out into industry; I was actually working at an IP firm, and that's when I was doing the Thinkful program, and then right after that I started my very first data science job with this VoIP company called Telnyx, which is still around actually... It's voice over IP, and doing number porting, and all that stuff via API.

I wanted to dig into one more piece - you mentioned Magic Leap and machine learning and other things... I was wondering, as you look forward into the future of the media and telecom industry, what are you excited about in the future that you could see maybe AI enabling?

**Himani Agrawal:** I'm really passionate about music. I'm an opera singer...

**Daniel Whitenack:** Oh, wow... That's awesome!

**Chris Benson:** That's cool! Are you gonna sing for us now?

**Himani Agrawal:** \[laughs\] No, not now.

**Chris Benson:** Okay... I had to ask. I had to ask.

**Daniel Whitenack:** Well, if you have any videos or links to you singing, we would love to include them in the show notes. It's awesome to hear.

**Himani Agrawal:** I do have my performances, and actually I also currently train with a University of North Texas voice professor in Italian singing, as a mezzo-soprano.

**Chris Benson:** That is super-cool. Actually, there's another connection we have. I'm not currently a singer, but when I was young, I grew up in the Atlanta Boy Choir... It's not something I was ever expecting to say on this podcast, but there's a little connection.

**Himani Agrawal:** Yeah, I'd love to hear more.

**Daniel Whitenack:** \[24:10\] I'm continually amazed with all the things that you're able to do. You do the opera singing, and then you were kind of mentioning -- I think that was leading to something with the question of what is inspiring to you in media, with AI.

**Himani Agrawal:** Yes, so the reason I'm so much interested in media companies is because I'm passionate about music, and I'm very interested in exploring research in the area of reinforcement learning and score following. That's my side research passion.

**Daniel Whitenack:** That's awesome. Have you seen the stuff coming out of -- I think it's project Magenta...

**Himani Agrawal:** Yeah, that's a very cool project. I was particularly impressed with this project called \[unintelligible 00:24:48.15\] in which the random notes played by the user on their interface are turned into a beautiful melody. That was a very cool project that came out of Magenta.

**Daniel Whitenack:** Oh, that's amazing. Do you ever see yourself in the future devoting more of your time to music and AI?

**Himani Agrawal:** I'm definitely very interested in that. I'm very much interested to explore the realm of how reinforcement learning can be applied to music. I'm very excited about that area.

**Chris Benson:** So when you delve into that, you'll have to come back on the show and share with us a reinforcement learning within music topic with us, so that we can learn a little bit about that. That is one topic -- we were hitting reinforcement learning on this show, but we've never combined that with music.

**Himani Agrawal:** That would be great. I will keep you updated.

**Daniel Whitenack:** Sounds great. I had another question about your current work... You mentioned that you're an AI engineer, and I know that there's a lot of different labels that people are putting on those in industry doing AI and machine learning; sometimes they're called data scientists, or analysts, or machine learning engineers, or AI engineers... I was wondering, from your perspective, is there a difference in those things? Do you work with data scientists as well, or how does engineering fit into AI?

**Himani Agrawal:** That's a great question. My formal position is that of data scientist, but I do apply machine learning, I do use deep learning, and I solve challenging problems in this area, which is the concept of AI. \[unintelligible 00:26:18.10\] machines can see, machines can hear, and the machines can be creative, so I apply all of that in my role... So that's how I see myself as an AI engineer.

I believe that although there are a lot of titles that have come up recently, they are one and the same in my opinion, because as my job in this whole realm I have to use all the tools and technologies in multiple domains. So even though different terms have come up, a data scientist or a machine learning engineer has to be well-equipped with multiple skills.

**Chris Benson:** That sounds really cool. I have a question, because as you were talking about how those are going together -- when you're working with co-workers that are not in data science and not in AI, I'm curious, what is their perception of you now bringing AI? ...with this being relatively new to the industry, and certainly in kind of a production role. As you talk to these co-workers, how do they perceive you and the job you're doing?

**Himani Agrawal:** \[27:18\] My co-workers who are not data scientists, who are not machine learning engineers, believe that machine learning is magic, because all the work that was being done by human beings is now being done by machines. Machines are getting more intelligent, and I feel it appears like magic to a lot of people... But I really believe at the very end machine learning is mathematics deriving patterns from data, and it's only as good as the data that we have.

**Daniel Whitenack:** Yeah, that's a great point. I think that's a really great way to end up our conversation, with that emphasis on the applied side, and really emphasizing that AI is a set of methods that we apply in a predictable way. I was wondering if you wanna share any about where people can find you online, and maybe either on the AI side, or the upper side, or wherever... And we'll end up after that.

**Himani Agrawal:** Yeah, so I'm on LinkedIn, Twitter, I have two YouTube videos of my performance... I would be happy to share the links.

**Daniel Whitenack:** Awesome. Great. Well, thank you so much for joining us Himani. It's been fascinating to hear about your journey and what you're working on. I know me, for one, I'm super-impressed, so thank you so much for being on the show.

**Chris Benson:** Thank you very much.

**Himani Agrawal:** Thank you so much for having me.
