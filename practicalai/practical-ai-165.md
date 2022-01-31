**Chris Benson:** Welcome back to another edition of Practical AI. We are the podcast that tries to make AI practical, productive and accessible to everyone. I'm Chris Benson, one of your co-hosts. Today Daniel Whitenack is not with us, but we have one of our former guests, Natalie Pistunovich, if I got the last name right, Natalie...

**Natalie Pistunovich:** You did.

**Chris Benson:** I did. Excellent!

**Natalie Pistunovich:** Zero-shot learning. Wonderful!

**Chris Benson:** Awesome! Natalie is here to co-host, and I would like to dive right into introducing our guest. His name is Bonaventure Dossou. Did I get that close to right there?

**Bonaventure Dossou:** Yes.

**Chris Benson:** How would you pronounce it, just so our listeners can hear you do it better?

**Bonaventure Dossou:** Bonaventure Dossou. Actually, it's not even a French or English, so the pronunciation is okay.

**Chris Benson:** Okay. So before we started the show, you mentioned something about your name and what it means, and I would just like to throw that out, because I thought it was pretty cool. Do you wanna tell the audience?

**Bonaventure Dossou:** So my first name, Bonaventure, is actually a French name, that is right at like -- as Bonaventure. I often split it into Bon, Aventure. It means actually "good adventure".

**Chris Benson:** Okay. So we're gonna have a good adventure on today's podcast.

**Bonaventure Dossou:** I guess yes. \[laughter\]

**Chris Benson:** So now that I've totally put you on the spot in the beginning - we like to have fun - do you wanna tell us a little bit about your background, how you got to this point where you're at right now? Then we'd like to dive into some of the stuff that you've been doing after that.

**Bonaventure Dossou:** Okay. How I got here - that's a very long story...

**Chris Benson:** You don't have to go all the way back to birth. It's okay. But if it's interesting, we'd like to hear it. \[laughter\]

**Bonaventure Dossou:** \[04:00\] Yeah, so I can say that I did not at all plan/predict where I am right now. I was meant to be a gynecologist, someone who helps pregnant women to give birth. I was trained in high school in biology, and to become a doctor. I sucked at math, and of course, I loved computer science, because I had my first computer when I was six. I envisioned myself doing it, but not that much. You know, medicine was my priority.

So a lot of things happened, family and stuff, personal issues, and finally, I jumped right into the field of mathematics. I then got a scholarship to study for my bachelor in mathematics in Russia, where I spent five years --

**Chris Benson:** That is cool.

**Bonaventure Dossou:** Yeah. And the education was fully in Russian, so there was no English, or such things.

**Natalie Pistunovich:** How long did it take you to get up to speed in Russian?

**Bonaventure Dossou:** Well, I can say seven or eight months. At least to know the basics of the language and everything. But then, throughout the years at the university, you don't have any other choice; we did not have any other choice other than to speak. So I consider we were also lucky enough, because studying math is the kind of studying an universal language, right? So whether you speak good or not the language, you can still go to the board and write and you can understand each other. But there are some classes, as like logic, or things like that, where you need actually to understand the language and understand the \[unintelligible 00:05:36.18\] So it was not so easy, but it was also interesting to try something new out.

**Chris Benson:** So before you go on, I'm just curious - you made a jump in there from medicine to math... And somewhere you had to make a serious decision on what that was. How did you make that leap? What happened there?

**Bonaventure Dossou:** So like I said, I sucked in math...

**Chris Benson:** And then he's majoring in it. \[laughs\] I'm struggling to follow... This is a great story though.

**Bonaventure Dossou:** My dad -- I mean, he's actually retired, but he's an architect. So I was living around mathematics. My sister works in finances, she's an accountant, so math is also her thing. But I was the only one who was lagging behind. So what happened is I luckily met a professor when I was back in high school who actually showed me that people don't come into this world; they don't have the gift of being super-duper good at math at birth. It's something actually that you get trained on. It's a science, so you learn it, right? It's not like someone comes with it. So he transmitted me that passion and that will to keep learning, learning, learning.

And you know, the most interesting fact about him was I could completely fail an exam, but he would focus on where I succeeded and give it as example. It was not only me, but it was many others. So actually, he was not pointing out the fact that the overall grade or score was bad, he was pointing out \[unintelligible 00:07:16.14\] And I knew then that I was sucking at geometry, but then good in arithmetics... And that's when the whole story started, because I loved to look at computational calculations, things like that, and then I started a lot of training. I could do a bunch of \[unintelligible 00:07:32.10\] and everything...

So high school is divided into two main components. Maybe the first part, the first year of the four years - that's more general. After, you have to pass a national exam. And then the second part is when you go into a more specialized field... Like, if you want to do mathematics, advanced math, then there's a fit for it. If you want to do biology, there's a fit...

\[07:59\] So I performed well at that exam in biology, but not in math. So I was now redirected in biology. But in SS1, I met him. So the transition from SG4 to SS1 was huge, because people who were top math students and everything, they saw that transformation and they were like "Okay, so what happened?" I would say that's from where the whole passion about math and doing something that involves math started.

Then after, I still wanted to become a doctor, because that's always been my child dream... But then, they came in conflict, because I discovered computer science. I mean, I discovered the real computer science, all the math and algebra behind... It gave me more passion.

On the other side, I also had a few friends who were studying medicine back in Benin, and they used to \[unintelligible 00:09:02.02\] I prefer when I have the freedom to design my own thinking way to go to the target. Not that there's already a pre-existing thing that you have to learn.

I'm also someone who learns from mistakes a lot, so I was like "Okay, if you become a doctor, the mistakes here won't be \[unintelligible 00:09:25.08\]." \[laughter\] So yeah, that's when the thing came... But the big changing factor was when I wanted to come here in Canada to study medicine and they told us that they do not give that privilege to international students. That I have to be a doctor, to have at least a good background before coming over there. And then I'm like, "Okay, my dream is dead", so then I switched to mathematics, which actually I found out turned out to be a good choice.

**Chris Benson:** Yeah... You know, just looking through some of the stuff that you have on your resume, it sounds like you've made the best of a bad situation, I'd say...

**Bonaventure Dossou:** Yes! \[laughs\] Even when I was in Russia, I wanted to do mathematics and computer science, because I've never started in the mindset of becoming a math teacher; so I wanted to do something applied. But then they put me, my government somehow put me in maths and mechanics. So I was not doing anymore applied maths; it was purely theoretical maths. Well, I had a choice to change and everything, but I still said "Okay, let me take it as a challenge", and it ended up good.

**Chris Benson:** So you're in math, but I know that right now you're in Quebec, working in one of the coolest places on the planet Earth, doing deep learning. There's still a little bit of a leap to get from math to what you're doing... And I know I haven't revealed who's advising you and things like that - I'll let you do that - but... You know, Quebec... Hint, hint, folks... Anyway, go ahead and tell us, how did you get into that?

**Bonaventure Dossou:** Yeah. So the core of ML, of AI is actually maths, right? Differential equations, statistics, probabilities. And at first, me and my friend Chris, who also knows \[unintelligible 00:11:21.04\] were like, okay, we're one year from our graduation, and we knew that we wanted to do something that actually was on trend. Something a lot of people had attention to, and things like that. So we didn't want to do the classical software engineering, and things like that. We wanted to be more free, and we were people who liked giving crazy ideas. So at night, at 3 AM we won't be sleeping, we just jump up and then bring up a crazy idea, or things like that. So we found that doing research will be a better choice, because that's when you can try out a lot of ideas.

\[12:08\] I mean, we did not want to do research in maths, and then which field of computer was actually like (let me call it) the hot spot? It was AI. Then we looked at AI and we were like, "Okay, how can we connect AI with the math that we are currently doing?" That's where everything started. We now started reading books, watching tutorials, watching classes, and we now connected the dots between pure theoretical math and applications of deep learning.

For instance, when you want to use a self-driving car, sometimes you have to actually be able to measure the instant shift of movement of the car, or maybe of the camera, and things like that; like, how is it done? We're using differential equations, and things like that. So when we tried to connect the dots, it became more and more obvious that we needed math, and that actually what we are doing was something that was happiness. And then we now jumped machine translation... Because we were like, "Okay, currently, what can we start from?"

He asked me "Why do you always speak in French, when your mom speaks in Fon. I'm like, I don't really know Fon, because in Benin you are trained and brainwashed to speak French. Otherwise you are considered as someone who is from a village, or who is not civilized. So that is something that not some people by then had explored, because the \[unintelligible 00:13:36.09\] was around English, and high-resource languages. So we were like, "Okay, let us then get into a space where we actually do something that not everybody is doing." That's to bring some sort of novelty. And that's where we started from.

Then we started reading, reading, reading, started taking classes and seeing "Okay, how does, for instance, this convolutional neural network work? Machine translation - how is the \[unintelligible00:14:07.28\] activation?" things like that. Those are all based on mathematic formulas, exponential functions, logarithmic functions, things like that.

So we tried then to say "Okay, theoretically, in machine learning, how is that connected?" I mean, I won't say we've done it, but I would say that has been the click, the thing that made the change. We are still learning, but so far it has been so very helpful. I hope I helped bringing down the gap between mathematics and machine learning right now...

**Natalie Pistunovich:** So your next step after Russia was in Germany.

**Bonaventure Dossou:** Yes.

**Natalie Pistunovich:** How did that happen?

**Bonaventure Dossou:** Okay, so I wanted to come here in Canada, and because of the pandemic, it was something already impossible. And also, coming here as an international student in the North America is something that's very, very expensive. So we were like "Okay, given the fact I can't have a visa for Canada, it will be super-duper complicated", also from Russia... And the fact that education over there would be very expensive, where in the neighborhood is the best fit? Is it Germany?" I've always had a love for Germany. My dad used to work with German people, and that's when I started loving Germany. All of them were like, "Oh, this kid acts like German people." Also because of my height, because they say German people are very tall, or things like that.

But except that, when I went to Germany, I also found myself that I have a lot of common behavior with the culture in general. So given that fact, that I loved Germany, that my dad had worked with people from there and everything, I was like "Okay." And I also loved the German language, which unfortunately because I've been moving around a lot, I have not been able to practice. But it's a language that I love. So I was like, "Okay, let me go there and try that out. And then the next step could be Canada." That's actually how it worked.

**Natalie Pistunovich:** That's what brought you to Canada.

**Bonaventure Dossou:** I mean, Canada was not predicted this soon. I predicted Canada potentially when I'd be finishing my master, but it happened just a few months after I got into my master in Germany.

**Break:** \[16:32\]

**Natalie Pistunovich:** And so, Canada... Tell us about the interesting things that you're working on, and with whom.

**Bonaventure Dossou:** The Canadian episode is very interesting... \[laughs\] I came here and I'm working currently at Mila, like you said, which is one of the - if not the biggest research center in deep learning. It has always been my dream, and the dream of Chris, too. We have the person who is currently our advisor, \[unintelligible 00:19:17.25\] who was one of the top figures that we were looking up to.

You know, when you are kind of new in a field, you tend to look at someone and be like "Okay, he's achieved this and this, his way of doing, of thinking, the humanitarian side", and things like that... Things that actually say "Okay, you have a role model, or a model on the field." That was him, and I really wanted to come here. Plus also - Mila has done very cool things, very cool publications, things like that.

So I came here in Montreal, I'm currently at Mila, working on a drug discovery project. Except that, I've also joined Roche Canada. That one is more in my passion of working towards technological challenges or pharma-related challenges using deep learning. So I've been doing both at the same time.

\[20:15\] I also had many opportunities... For instance, I attended a scientist residence program which was first dedicated especially for Ph.D. students. Because when I applied, they were like "Okay, cool, your resume looks good, but we're only looking for Ph.D. students." I was like "Okay." Then one day they just came back, "Okay, fine. Out of all the applications we've seen, you're probably the best fit", and then we jumped in. And that was also an amazing thing because it was more practical, it was shifted away from Academia, and then it was brought into industry. I could actually see how people in the industry do it there. Because it's not only about creating a model, to \[unintelligible 00:20:57.26\] It's also about the business - how can you bring it to the market? How can you monetize it? Things like that.

And finally, in January 2022 I joined Google, and we've been working on building NLP, language technologies for more sub-Saharan languages, including mine, of course.

**Chris Benson:** I'm guessing that's how you met Daniel as well, working in that space, because I know we've had some episodes on the show here about all of the work that's being done in Africa, that so many people outside of Africa weren't aware of. It's really amazing, working in the NLP space... I wanna hear about some of the work you're doing, but I just have to comment - you're living the dream, man. To have worked where you're working, in both of those opportunities especially, is pretty cool. Do you wanna dive into some of the project work that you're doing, and talk about how you got into it, how you're approaching the problem? I'd love to hear some of the detail.

**Bonaventure Dossou:** Sure. So here at Mila I'm working as a drug discovery research intern, so it's also putting together AI and also biology. I'm currently focused on antimicrobial peptides. So the background is the antimicrobial resistance has actually been a very big (let me say) \[unintelligible 00:22:23.14\] to the whole humanity. Big companies like Roche, like the World Health Organization have given that red flag or alarming it - if we don't do something to come up with new drugs, then potentially we could be dying from a very simple injury or things like that, because bacterias are becoming more and more drug-resistant. So I'm currently working on a kind of active learning from work that will develop/generate good candidates, AMP candidates. AMPs I cannot dive deep in, because I'm \[unintelligible 00:23:01.03\] but they are actually the top one candidate, and all companies who are in the field are really focused on it. So there are some biological explanation about that, but I don't know it yet.

So coming to machine learning part and active learning part, where actually we try to maximize the production of good candidates. Now, we are doing discovery, so we are not in the mindset of rediscovering and recreating/regenerating what already exists. We want to do new things, or create or discover new things. So that's where the part I would call the diversity part comes in. So it's basically like setting up a lot of things -- I tried and brought a lot of ideas, of course with some other co-workers, my supervisor and co-supervisors, and we tried many bunch of things, and then I actually introduced a \[unintelligible 00:23:56.22\] to enhance and to produce more diverse sequences.

\[24:07\] Basically, the idea is that if I take a reference set that I know that are good AMPs from the real world, because the dataset that we are using is from a publicly-available source, that have been developed by biologists. So those sequences, the properties are well-known. So if I take that and I compare it to what I have, does it give me a good performance according to our metrics? One. Two, is that statistically different from the initial set? So that's two things. We wanted to be actually having more or equal to the same properties, but at the same time to be different... Because you can imagine \[unintelligible 00:24:42.21\] when you have a sequence of the same; we wanna do as better as multi-different sequences.

It's also, like a human being, when you are specializing in only one thing, you are only good at math. But in life, there's not only math. There's also biology, sports, things like that. So you have to be good, like mixing. That was the main idea, and that's what I have been working on.

I have good results, successful results, and I've written a manuscript for it, looking for what's potentially \[unintelligible 00:25:19.19\] subscription, submission to a journal. I used to tell my partner "This paper will save the world." \[laughs\] But it's just a joke, because I know all the talented people who are also working on it in the group.

We had also another extension to that, which is called \[unintelligible 00:25:38.02\] which is also a powerful tool, which is one of the main attention of \[unintelligible 00:25:43.07\] we will potentially develop it and then increase it to the same task, to see how it performs.

Roche is more pharma-related. Like, we have already the drugs, and then the prep line, the way the drugs are created, and everything. Let me see then... We have feedbacks from users that felt this or this, instead of feeling this or that symptoms, or side effects. So what could be the root cause, what could be the reasons why they are doing it? Is it because there's been a slight mistake during the production, or maybe the manufacturing process, things like that? So collecting all those information all together, and then making sense of it to improve actually the whole setup.

Yeah, that's it. So at Google, now I've recently just started, and I know that the main focus will be on building multilingual NLP models for African languages, or sub-Saharan languages. \[unintelligible 00:26:43.11\] So yeah, that's briefly what I'm working on right now. I hope it makes sense.

**Chris Benson:** It does. I have a question. I know that you're doing NLP in both the Google work and the work for the drug discovery. I know you talk about them being generative models when you discuss it...

**Bonaventure Dossou:** Yes.

**Chris Benson:** Can you tell us a little bit - if somebody out there is listening, a lot of folks are tuning in to learn, to listen, or to get new ideas... Why approach it that way? What is it that made you say "This is the way I wanna solve this problem"?

**Bonaventure Dossou:** So I guess I'm then targeting the projects here at Mila. Technically, generative models because we want to create new things. I don't know if you see the idea. Like, if we are pretending to do discovery, it's because we are creating new chemical compounds and new structures, new materials.

\[27:54\] So you can't do that by using a predictive model, for instance, where you already have a set of things, and then you just predict some value on it. Of course, we are using predictive models or classication of equation types in the process, but it doesn't really add anything new. The new thing that you bring in does not really come from building a prediction model. It comes from a generative one, because it learns from the data distribution of an existing dataset, and then tries to generate things that are similar, but not equal. That's from where I guess discovery comes from.

**Natalie Pistunovich:** So you mentioned all those interesting things that you're about to do at Google with sub-Saharan languages, and you're also working on that at Masakhane. What do you see as the future of those developments?

**Bonaventure Dossou:** Okay, so it is pretty straightforward, giving access to language technology to everybody. I started, and one of the motivations that made me start this is trying to improve the communication between my mom and I. And I can say that actually I did not envision it to be way more important, because after we launched -- there was also a keyboard that we launched, of native language, of language in Benin and in many other countries, and with a translator a lot of people use it. So a lot of artists are using, people who actually create music in Fon, in the native or local language, are using it. So it helps create more content, it helps create more data, it helps actually to improve and increase the representation of the language on the internet, because there's nothing more frustrating that "Oh, you come from a country", or things like that... Or let's even say that sometimes people ask me where I'm from, I say I'm from Benin, but they don't know; it's frustrating. And I have to locate it with respect to Nigeria. I have to say "Oh, it's left to Nigeria." "Oh, okay." Because people know Nigeria. Why? Because it's big. Why? Because there are a lot of people coming from there -- I mean, a lot of things why Nigeria \[unintelligible 00:30:11.08\] for the language. We have people like me, who are abroad, who can't actually speak the language, but the parents back at home are only speaking those languages. So how to improve the communication between those people and their parents.

Also, language resources. Like, when you go on the internet, or Facebook, and things like that, the translation of those languages is very often not good at all. And it also misleads. You can see also sometimes a lot of hate speech going around -- so actually, building or working on such kind of model will definitely benefit the marginalized and under-represented group, and will also actually increase the representation of the language. We could go on the internet -- like, in the next few years I hope I'll be able to have a voice assistant for instance for my kids, I hope, my children, which will be able to speak on the phone with them... Because that's just a part of their culture, that's just a part of their identity.

Yeah, that's also another interesting part - working on those languages helps the restoration of the cultural identity, or things like that; things that actually are \[unintelligible 00:31:26.12\] just trying to build models now. It has a very deep root, in preservation of those languages. We've seen a lot of groups of people who actually got \[unintelligible 00:31:43.24\] So we don't want it to happen with other languages, and everything.

\[31:55\] So I think I touched a lot of points... That's mainly how vast the problem is, and how I think that working on those kind of languages could actually help solving those problems, and bring in language technologies to everyone.

**Chris Benson:** It strikes me that though you're using similar toolsets, you're using deep learning in both problems, they're somewhat different... One being drug discovery, and one being under-resourced languages.

**Bonaventure Dossou:** Yeah.

**Chris Benson:** But I also notice that you seem to gravitate toward improving the state of the world. Things that will help people, and help do that. Is that an active part of your decision-making, is you're looking for projects to work on to try to make the world a better place? Because that's the common thread between two otherwise apparently unrelated projects that you're working on.

**Bonaventure Dossou:** Yeah. I did not mention it, because -- I mean, I like to look like a superhero... \[laughter\]

**Chris Benson:** I love the honesty in that.

**Bonaventure Dossou:** ...but I don't like to show off to much either. There should be a very good trade-off between both. But yeah, you said it - I've always been in the mindset that, of course, we are all mortals, so we came and we are going to die one day... I want actually to leave things that I can call legacy, so that when I leave, people will still be pointing at those things and remembering about me. We have good mathematicians whose theories or their formulas are still helping into serving the world problem of biology scientists. Einstein is dead since a while, but his name is as if he's now there, because they keep calling him; he's still useful, actually, to the world.

So yeah, I always have that mindset of - whatever I'm working on, make it somehow to the best of my capacities, improve humanity, impact people. I know a lot of friends, a lot of young people back in Africa - if you ask them "Oh, what are you interests? Who is your role model? Who is the person you look up to?" People who are actually in computer science or who have interests \[unintelligible 00:34:08.25\] but I would like to be a role model for other people back in Africa, from the next generation. And for doing that, I will definitely have to bring something new, I definitely have to \[unintelligible 00:34:30.01\] So yeah, I always have it in my mind. And the other part of why I'm working also and I'm really willing to do so is because the access to healthcare, which is actually a very, very big problem.

Access to healthcare should be a primary need. But in Africa currently it's a luxury to have access whenever you want to healthcare. People die \[unintelligible 00:35:00.26\] I had a sister that I never knew, because she actually could not come because of a problem, and she came before her term, and because of the lack of cares and things like that, she could not. Many people live the same situation. Or people actually who could not have access to surgery because they don't have money, or because there's a lack of electricity, or things like that.

So access to healthcare is still a very big problem, and a very big field that we scientists need to work on. So I would also like to bring something new into that, maybe through my research in AI, doing drug discovery, things like that, to actually contribute to the development, to the emancipation of the continent, and not just focusing on myself, on the fact that "Oh, I'm working at good places, places that everyone would like to be at..." Also maybe making good money doing this, or vice-versa.

**Chris Benson:** \[36:02\] You've gone from medicine to -- you realize that you have invented the notion of the AI superhero, which I actually love that idea. It's a beautiful idea, it's great.

**Bonaventure Dossou:** Yeah. Actually, I'll say - the fact that I wanted to be not the superhero, but someone who helps, someone who brought to the world, to the continent, to his country, when he was alive, that one drug with AI, because I saw it as a tool to do those kinds of things.

**Chris Benson:** My advice, my friend, is to own it, and the reason I say that is kids will aspire to it. You'll bring the next generation along that way. So what are you thinking about as you look toward the future? You've kind of hit these two spectacular areas as projects. Drug discovery, which will presumably have a high impact on medicine in Africa and elsewhere, where you can really impact people's lives that way, and you've also simultaneously addressed a whole different problem that you're addressing in terms of under-resourced language, to help people communicate better. You've kind of tackled two big things. What are you thinking about in the future? Are there certain aspirations that you would like to say "I would like a swing at that and see what I can do to make it"? Is there anything that you can envision yourself after you complete these projects, that you might wanna go do?

**Bonaventure Dossou:** I'll say education. That's also one of my dreams, to be able to come up with a research institute, like Mila, or any other places, in Africa. You know, most of the researchers -- even during this pandemic, most of the vaccines, things like that, they did not come from Africa. We just waited and waited for people to have solutions... And actually, we have been even suffering \[unintelligible 00:37:56.26\] but they are not. They worked on it, they have to care about the people first.

I feel like AI can help not only economically improve or develop Africa, the continent, but also improve the access to education. Because when today you talk about AI to people or to young African men or women, when they don't know what it is actually, they will feel like you are a god, like you can do anything. People will come to me and be like, "Oh, can you create this model that does this or that?" But I'll ask them, "Can you actually do that by yourself? Because if you can't actually teach a computer in a very \[unintelligible 00:38:44.11\] way, or if you actually can't do it by yourself, so how are you going to teach it to a computer?" Things like that.

So they still have that lack of education. There are not so many universities, institutes, programs that are actually training the people, the young generation, the people to come, to actually acquire that knowledge, that powerful side of what AI can do for Africa. And for that, like I was saying, one of my dreams is to have a research institute in Africa, like Mila, where actually world-renowned scientists could actually come, where actually a lot of research would be ongoing, whether it's on vaccines, whether it's on promoting the languages, working on tackling the healthcare problem of the continent... Because we have problems over there that for instance you did not have in Canada, or in the U.S, or in France, or in Germany. So every continent, every country has its own reality.

So one institute that would actually attract investors, that will attract world scientists to Africa. That will actually make it a bigger hub of AI. I mean, not bigger -- I mean, I don't know how big it's going to be, but a reference at least in Africa. If I succeed in making it at least a reference in Africa, that would have already been great.

\[40:16\] So I talked about education, I talked about healthcare, and like I said earlier, there's also access to language technologies. I hope I'll be still alive to witness that our language is incorporated into cell phones. So the keyboard people are really using, but the model that we developed, people are not. They have to go to a website to be able to use it. But what if it was integrated into an app? That's something I hope really wish achieved by this year with my friend, Chris. But there was a map integrated in the phone, so that they could just easily use it, like they use Google Translate, or things like that.

And those language technologies would come from AI and from many other groups, many other sectors, activities, like electronics, things like that. It should be an interdisciplinary collaboration. But still, AI has its own role into creating those technologies, so that other fields could use it.

So those are the potential three fields and three ways I feel like AI can impact people's lives in Africa... And I've also shared one of my dreams of making one of them happening.

**Natalie Pistunovich:** That is so inspiring, and that is so many things, and yet, it feels like something that is on your shortlist, that's kind of like "Bonaventure, what is your next 5-year plan?" And it's like, "I'm gonna do that", and then in five years we'll have you here again... So what's next? \[laughs\] With all the wonderful things that you have achieved and you will be achieving.

**Bonaventure Dossou:** I hope, too.

**Chris Benson:** Well, Bonaventure, thank you so much for coming on as a guest today. It's very inspiring. I'm looking forward to releasing the episode. I really actually hope some of the parents out there will share it with their kids. And Natalie, thank you very much for coming on and co-hosting with me today.

**Natalie Pistunovich:** It was such an interesting conversation.

**Chris Benson:** It really was, it was fantastic. Thank you very much to both.

**Natalie Pistunovich:** Thank you.

**Bonaventure Dossou:** Thank you so much for having me.
