**Chris Benson:** Welcome to another episode of the Practical AI podcast. My name is Chris Benson, I'm a principal AI strategist at Lockheed Martin. Normally, listeners would know that Daniel Whitenack, my co-host would be with me. He is unavailable today, he's out sick, so I have the pleasure of introducing our guest today, who is a legend in the AI field. With me today is Stuart Russell, who is a professor of computer science at the University of California Berkeley, and holder of the Smith-Zadeh Chair, if I'm getting that correct...

**Stuart Russell:** Smith-Zadeh.

**Chris Benson:** Zadeh, I apologize. Also, if the name sounds familiar, he is the author of the standard book on artificial intelligence which most practitioners in the field will be familiar with, as well as a recent book for a general audience, which is called "Human Compatible: Artificial Intelligence and the Problem of Control." Stuart, thank you very much for coming on the show.

**Stuart Russell:** Pleasure.

**Chris Benson:** I know I barely touched on it. I know you have been in this field for decades... If you could tell us just a little bit more about your background before we get fully launching.

**Stuart Russell:** Yes, as you say, it's been quite a long time. I first started doing AI when I was in high school, because I got a programmable calculator and I thought I could make it really intelligent... But it turned out that it only allowed 36 keystrokes in the program, so I didn't get very far with taht attempt. Then I got to use a giant computer at Imperial College, so I wrote a chess program. That was my first serious AI program.

I did my Ph.D. at Stanford, I joined Berkeley in '86, so it's 34 years teaching at Berkeley... And it's been a pretty interesting time. Most people would say now is maybe the most exciting time to be doing AI, because there's so much progress... We've been able to solve, or nearly solve some of the major open problems of the field - speech recognition, machine translation, certain parts of computer vision, particularly recognizing objects and images... All those things now work pretty well, so we can roll out all those techniques into the real world, and do cool things like driving cars and everything like that. So it's lots of fun, and we're all very busy.

**Chris Benson:** \[04:13\] So I guess, given that you've seen so much of the evolution of this field over time, could you talk a little bit about what the field was like when you came into it, and what technologies were prevalent? And tell us a bit about the evolution of the field over the years, all the way into the current -- what's certainly taking off these last few years.

**Stuart Russell:** Sure, yeah. So in the early years - I guess I would say I started probably in 1975 - the focus was almost exclusively on problem-solving, game-playing, planning, logical reasoning. So everything was deterministic. We assumed that we could give the computer perfect knowledge of the problem, a perfectly stated goal, and then it would come up with a guaranteed solution... Whether it was proving a theorem, or finding a check-mate, or coming up with a plan to deliver a bunch of parcels to a bunch of recipients, or whatever it might be.

And in the '80s we had the big expert system boom. Initially, logical, rule-based systems, encoding expertise in logical rules. Sometimes we now call it business rules, or business intelligence. That's a phrase that they use, because the term "expert system" fell out of favor... But in the '80s, that was a really big, exciting, hype bubble, just like today.

**Chris Benson:** Sure.

**Stuart Russell:** And the beginnings of handling uncertainty - because we wanted to make expert systems that did things like medical diagnosis, where there were no hard and fast rules, you have to take the evidence and combine it to get some kind of soft prediction, you might say... But that technology largely failed in the real world. There's complicated reasons for it, but I think basically it was not doing uncertain reasoning correctly. So as you try to build bigger systems for real problems, the whole thing would kind of fall apart. Every time you add a new rule, the other ones would start messing things up, and the interactions would cause wrong answers to come out.

Companies very quickly stopped investing in this, and we had what we call the AI Winter. I think my AI course was down to about 25 students in 1990. It's up at about 900 right now.

**Chris Benson:** I imagine it is... \[laughs\]

**Stuart Russell:** And that's only because the fire marshal won't let us have any more people in the class. There would probably be 1,200-1,500 if they let everyone in. So what happened next in AI actually was that rigorous probabilistic methods took over within the field, mainly from the work of Judea Pearl, starting in the mid-80's. Then machine learning had a renaissance, reinforcement learning had a renaissance, and so from the late '80s until around 2011 or so there was pretty solid technical research progress, using probability statistics, connections to operations research, control theory... It became a very mathematical field.

Some of the techniques worked pretty well. Speech recognition became reasonably practical, and the first self-driving cars were operating long before the present day, and doing so reasonably successfully. There were big applications of planning, there were lots of diagnostic systems, and so on... So it was relatively successful, but it wasn't really until deep learning happened, until around 2011-2012, that it really hit the big-time in terms of media coverage and excitement, and so on.

\[07:56\] So it was deep learning that enabled us to, for example, beat the human world champion at Go. A combination of deep learning with reinforcement learning methods and gameplaying techniques that had been around for decades and decades... But deep learning was this extra ingredient that let the system somehow recognize patterns on the Go board that allowed it to beat the human world champion. So now we're in a position where, as I mentioned, thousands of students wanna take AI courses, there are thousands of startup companies... All the big companies have major AI divisions and are using AI in hundreds of applications throughout their business. So it's fun, it's exciting... Maybe there's some hype going on, too.

**Chris Benson:** There might be a little bit. So going through that, it really begs the question from me - and I'm gonna throw the question at you, I imagine it will be like "Oh..." But you're looking at all these different types of artificial intelligence, different things that are being labeled as artificial intelligence, from the symbolic logic, through expert systems, all the way up through today's deep learning and other associated technologies... And there are obviously vastly different underpinnings in terms of what they can do, and how you arrive at them... How do you define artificial intelligence? What does the term mean to you, as the person who has literally written the textbook on the subject, and how has that changed and evolved over those years?

**Stuart Russell:** It's a good question. All of the above, all the things you mentioned, this is all artificial intelligence, because it's all in the service of creating machines that can act intelligently... Which means really choosing actions that can be expected to achieve their objectives. If you're a self-driving car, the objective is to get to the airport safely, and legally, comfortably... So in order to do that, you need perception, but you also need symbolic planning to choose a route; you need probabilistic forecasting to deal with traffic delays, and maybe have a backup route, just in case... And you need speech recognition in order to interface with the passenger etc.

If you want to build a system that's gonna help a mathematician, you can't just throw a bunch of theorems and proofs into a deep learning system and say "Here. Learn how to do math." You actually have to have symbolic reasoning capabilities, theorem proving, which the underlying technology for that is symbolic logic, and not statistical learning. So it all depends what you wanna do.

The overriding model which I think pervades not just AI, but a lot of other disciplines - control theory, operations research, economics, statistics... They all have this model, which is that we specify an objective and then the machine finds some optimal solution, or a way of achieving the objective, the best solution.

So actually what the book is about, the Human Compatible book - it's basically saying "That model is really a terrible model." Now, unfortunately, the first three editions of my textbook actually kind of solidified that model... \[laughter\] And said "Okay, here's how we pull everything in AI together into a single conceptual framework", and you can see all of the different kinds of AI researches, different facets, different ways of looking at that same underlying conceptual framework. And the reason I think it's a terrible model is not a new thing; it's something we've known for thousands of years, which is we cannot specify our objectives completely and correctly. And if you look at the legend of King Midas, he specifies his objective, "I want everything I touch to turn to gold." The gods (or you could say the AI system) gives him the objective exactly as he specifies, and then of course, his food, and his drink, and his family all turn to gold and he dies in misery, starvation...

**Chris Benson:** \[12:02\] \[laughs\] Unexpected consequences.

**Stuart Russell:** Right. That's the thing... It's always unanticipated consequences, accidental side effects, collateral damage... Externalities is what the economists call it. But it's a pervasive problem, and we've known about it for a long time. That's why your third wish is always "Please undo the first two wishes, because I've ruined everything."

So the Human Compatible book basically says "Okay, we have to throw away that model", because -- you know, up to now, it hasn't been that bad, because first of all, most of our AI systems were toys. They were in the lab. We were doing demos...

**Chris Benson:** It wasn't out there in industry, at the level it's at now.

**Stuart Russell:** ...until recently, on a global scale, but now it is. Now you've got the content selection algorithms from all the different social media platforms. And those algorithms - they're machine learning algorithms, but they decide what billions of people spend hours every day reading and watching. So in terms of their actual direct -- like, you take the number of people times the amount of time, they are more powerful than anything that's ever existed in the history of the human race, by far. By far.

You think Stalin was powerful, but he got to speak to his people maybe half an hour every month, or something. These algorithms are speaking to 50 times more people for hours every day.

**Chris Benson:** A largely oblivious audience, for the most part, that's acting on them.

**Stuart Russell:** Yeah. So the audience doesn't know what the algorithms are doing or what they're trying to do. The algorithms are trying to maximize their objective, which is click-through, or engagement, or something like that... And in the course of doing that, rather than just send you what's interesting, they actually modify you into someone who's more predictable from their point of view. Because the more predictable you are, the more money they can make off you. So whatever you start out as, they change you and mold you into a predictable clicker. So that's what they've done, and I think most people would say that the results have been pretty disastrous on the whole.

**Chris Benson:** So I wanna ask you - there's a particular remark you make in the book that I wanted to ask you, and I think you're already kind of going down the path on this, to some degree... You say "We must plan for the possibility that machines will far exceed the human capacity for decision-making in the real world", and I think that you've started to address some of the challenges. Could you give us a little bit more of a holistic perspective on -- I mean, that statement has a lot in it right there. Can you talk a little bit about what the implications of that is?

**Stuart Russell:** Yeah, so let's give an example. Suppose that a few years or decades down the line you're the CEO of an IT company, or a solar power company, or whatever it might be... And you want your company to be more successful, so you engage an AI system and you give it the objective of, let's say, "Maximizing the profits or the revenues in my corporation." And because that system is far more capable than humans are, it devises plans that are more successful than all the competitors can be...

So that corporation, in the interest of maximizing revenues, gradually takes over larger and larger portions of the world economy. And if it's not properly designed, if that was the objective, wherever it was feasible, it might end up using slave labor, for example, in order to maximize profits. And so on and so forth.

\[15:55\] You could imagine all the ways that corporations have abused humanity in the past, and now we've got one that's much more capable than human beings are. Some people actually argue that this is already happening. Not from AI, but from corporations that optimize profit at the expense of everything else... For example, at the expense of the climate. The fossil fuel industry has optimized its profits by a sort of multi-decade misinformation strategy that has actually outwitted the human race. So even though the vast majority of experts and economists and scientist say "Oh, we need to have a carbon tax, we need to do this, we need to do that", we aren't doing any of it. We're just talking about it, and so effectively, the fossil fuel industry has defeated the human race by superior pursuit of a fixed objective. So it would get much worse than that when AI systems are able to invent and carry out these kinds of strategies.

So that's even within the realm of things that we currently understand... That you could have corporate strategy, you could enslave people, you could do this, you could do that. But AI systems will come up with things we don't understand.

**Chris Benson:** Sure.

**Stuart Russell:** And the whole human race could be collateral damage if we don't know how to control the systems that we create. So far, there's no examples of a dumb species controlling a more intelligent species forever.

**Chris Benson:** I totally agree with that. So for my own employer, I am actually the person leading on AI ethics. AI ethics is a huge passion of mine, and obviously you've raised some pretty big concerns there... And I'm taking a little bit of a tangent; I wasn't really expecting to go down this path, but I am curious how you envision the role of AI ethics in our society, in the world at large, given everything that you've just said. Clearly, the potential for consequences that we did not envision, that we did not plan on is fairly significant, especially as technology evolves. Do you have any thought--

**Stuart Russell:** In a sense, I wish it wasn't called AI ethics... \[laughs\]

**Chris Benson:** Okay... What should it be called?

**Stuart Russell:** Let's give you an analogy... The nuclear engineers who make sure that nuclear power stations don't explode like Chernobyl - are they ethicists? Would you say that's a nuclear ethics issue? No. It's just common sense, that you don't want your nuclear power station to explode. It's common sense that you want your AI systems to remain under human control.

**Chris Benson:** Sure.

**Stuart Russell:** But at the moment, under the standard model, they won't remain under human control.

**Chris Benson:** And would you talk us through what that implies? When you say it won't -- and I'm gonna set it up in this way, in that recognizing... And it's funny how many people I talk to have different perspectives from what I think you're about to go... But given the evolution that we've seen over time, and the rapid evolution we're seeing in deep learning and whatever follows coming up, that potential for loss of human control - where does that come from, why is it inevitable in your view?

**Stuart Russell:** I don't wanna say inevitable. If we persist with AI within the standard model, where we fix an objective. Because when you fix an objective, you're basically telling the system "Whatever course of action optimizes that objective is the correct thing to do. And in particular, for example, anything that imperil the success of the objective has to be prevented." Well, what might imperil the success of the objective? Being switched off.

**Chris Benson:** Sure.

**Stuart Russell:** So by giving a system a fixed objective, you've now given it an incentive to protect itself from any attempt to interfere with the objective, from any attempt to switch it off.

**Chris Benson:** \[19:58\] A very typical argument I hear people make, if you kind of go back to Asimov's Three Rules for Robotics, and the idea that you can, in a non-probabilistic way, just definitely say "You can't hurt people", that kind of thing, as an underlying thing... Given the fact that you have this ever-increasing capability in the AI realm, would it be fair to say that that's not a realistic perspective, that AI would fundamentally look to circumvent... How do you see that?

**Stuart Russell:** Yeah, so Asimov's laws, as you say, don't take into account the probabilistic perspective. They don't allow for uncertainty. But of course, in the real world there are always risks. So an Asimovian self-driving car would simply stay in the garage.

**Chris Benson:** Fair enough. \[laughs\]

**Stuart Russell:** It would say "Sorry, but the first rule does not allow me to leave the garage, because that would expose you to risk of injury or death. Sorry, we're not going anywhere."

**Chris Benson:** I love that. That's very funny, actually.

**Stuart Russell:** Right?

**Chris Benson:** It's true.

**Stuart Russell:** And if you were out for a walk, it would run around with an umbrella in case a photon from the sun landed on your skin and maybe initiated a little melanoma, or something like that. "There's a chance that could happen, so we have to protect you."

So in any kind of real-world situation there are trade-offs... But one of the things that Asimov's laws do is they make us start on saying what it is that humans want. One of the things is we don't want to be harmed, we don't want to be physically injured, and that's a start, because for example none of the self-driving cars that are out there know that people don't wanna be injured.

**Chris Benson:** Understood.

**Stuart Russell:** They have built-in rules that say "Well, if there's a pedestrian in front of you and you're going forward, stop." And if you're lucky, they have another rule that says "If there's a pedestrian behind you and you're going backwards, stop." But they don't know why. They don't know that if you run into a person you can injure or kill them, and they don't know that the person doesn't wanna be injured or killed. It's that lack \[unintelligible 00:21:54.23\] because when they get into situations they haven't been prepared for, they haven't the faintest idea what to do, because they don't know which course of action is good and which is bad.

So the solution that the book proposes actually is to say "Look, it doesn't matter how much the human tells you that they want this or they don't want that, there's always going to be residual uncertainty about other preferences the human may have." So if the human says "I'd like a cup of coffee", that's not your life's mission. The robot could say "Well, the coffee in this hotel is $15/cup. Are you sure you want a cup of coffee?" because this machine is uncertain about your trade-off between coffee and money.

If you're miles from the nearest coffee, the robot might not be sure, "Do you wanna wait two hours for this coffee? Is it okay if I trundle off across the desert to the nearest Starbucks and come back two hours later or two weeks later with a cup of coffee?" So it would be reasonable, again, to ask permission.

And if you give it a more important goal, like "Restoring carbon-dioxide levels to pre-industrial concentrations" - if that was the only objective, one very straightforward solution is just to get rid of all the people...

**Chris Benson:** Understood.

**Stuart Russell:** ...because they are the ones that are producing the carbon-dioxide. Then you might say "Oh, well, I didn't mean that. So wish number two, restore the carbon-dioxide, but don't kill anybody." And then the system says "Fine. No problem. We'll just have a multi-decade social media campaign to convince people not to have children", and then the human race will gradually die out, and then the carbon-dioxide levels will be restored, and that's great.

\[23:50\] So what I'm really proposing in the book is actually throw away the standard model, or only use the standard model in very restricted circumstances. But in general, have a new model where the objectives are in the human, and the machine knows that it doesn't know what they are. Its job is to try to satisfy them, but it knows that it doesn't know what they are.

When you design things that way, and you actually solve that problem - you can have an algorithm that for that problem specification decides what the machine is going to do... That algorithm produces behaviors that seem to be what we want, namely asking permission. "Is it okay if I turn the oceans into sulfuric acid in order to restore carbon-dioxide levels?" and you say "Nope."

**Chris Benson:** Not so much.

**Stuart Russell:** "We like those little fishies. Don't turn the ocean into sulfuric acid." So it will ask permission, it will even allow itself to be switched off... So rather than try to protect itself and take steps to prevent interference, it actually welcomes interference. Because interference by a human is a way of gaining information.

**Break:** \[25:09\]

**Chris Benson:** So if you would take us a little bit farther into the new model that you're proposing to replace the standard model... And maybe along the way - one of the things I was wanting to ask as you were discussing that is if you could do that also in the context of... As we're looking at AI in the deep learning context of today, anticipating wherever we may be going in the future, and with the idea that people talk about about AGI, which is Artificial General Intelligence, which presumably would change the nature of what AI is, maybe... And maybe distinguish how your new proposal would work, in both worlds.

Even today, as we're looking at exceeding human capability, if you have a complex set of tasks, even now we can take the models that we have and have mini-models, each one addressing a narrow scope, and working together, and they can far out-perform what humans could do in a similar complex task... And with the idea also of having AGI, where we have models that are - for lack of a better word - more capable themselves, maybe eventually aware, I don't know... If you could talk about what your proposal looks like in that evolving world, I'd love to know.

**Stuart Russell:** Sure. First of all, I should point out that I don't think deep learning evolves into AGI.

**Chris Benson:** Okay.

**Stuart Russell:** Artificial General Intelligence is not going to be reached by just having bigger deep learning networks and more data. AGI and human intelligence require fundamental capabilities that are just not present in deep learning technology as we currently understand it. So deep learning systems don't know anything, they can't reason, and they can't accumulate knowledge, they can't apply what they learned in one context to solve problems in another context etc. And these are just elementary things that humans do all the time.

**Chris Benson:** \[27:58\] A bit of a stepping stone technology of the moment, in a sense, deep learning?

**Stuart Russell:** Well, I think deep learning is one of the pieces, but so is symbolic logic. So is probabilistic reasoning, so is sequential decision-making techniques, planning hierarchical reinforcement learning, probabilistic programming etc. So there's lots of pieces of the puzzle, some of which have been lying around for a long time. Deep learning is just the newest, shiniest one, so everyone's like "Oooh, look!" But in the '80s people were going "Oooh, look! Expert systems!" And similar claims were being made, that if you just scale up the number of rules by a factor of 500... And you had learned people making quantitative estimates, like "We would need about 500,000 rules to manage a military campaign", and stuff like this. Just complete drivel. And there's a lot of drivel being talked now about deep learning.

Okay, so within the context of just straightforward supervised learning, let's say for image classification... So how does it work? Well, we have training data, and then we have deep learning, which is basically a giant tunable circuit, with billions of tunable connection strengths, like little tiny volume control, and we just tweak all those volume controls in this huge circuit until the thing that comes out the other end is the correct classification of an image.

So in statistical learning what you do is you're supposed to specify the loss function, which says if you classify an object of type A as an object of type B; let's say you take a picture of a dog and you classify it as a cat. How bad is that? So almost everybody in this business uses what we call a uniform function, which means that they say every error is equally bad... Because that's how the competitions work - they penalize you for the number of errors you make, not how bad the errors are.

For example in ImageNet there are two categories of dogs -- well, there's 170 categories, but two of them are the Norfolk Terrier and the Norwich Terrier; these are practically identical. In fact, they weren't even recognized as separate breeds of dog until 1960-something. There's a slight difference in the shape of the ear... Okay, who cares; I'm sure the Norfolk Terriers are not gonna be that upset if you call them Norwich Terriers. I mean, Norwich is in Norfolk anyway...

**Chris Benson:** They'll lick your face anyway.

**Stuart Russell:** \[laughs\] Right. Clearly, that kind of error is relatively cheap... Whereas classifying a human as a gorilla, as Google found out, is really expensive...

**Chris Benson:** It is.

**Stuart Russell:** ...like in the billions of dollars of trashing your goodwill of your corporation and its global reputation for being fair, and idealistic, and all the rest of it. And yeah, I'm sure it was sort of an innocent error, coming from just using a uniform loss function.

**Chris Benson:** Sure.

**Stuart Russell:** But if they had thought about it, they would have said "Oh, of course our loss function is not uniform." "Oh, then what is it?" "Oh. Don't know. We haven't thought about it, and we're not sure." And in fact, you know, if you've got -- typically, on ImageNet there's like 20-something thousand different categories of objects, so your loss function is a matrix with 400-odd million entries. And do you know what they are? No. No one knows what they are. So you have an uncertain objective. You don't know what the objective is you're supposed to be optimizing.

\[31:39\] And when you formulate the problem that way, first of all you'd have to say "Okay, how do we specify a probability distribution over these 400 million entry matrices, these giant tables?" And now I've gotta say "Okay, what's the probability of each possible table of 400 million numbers?" Well, that probability distribution is itself a massively complex object to specify... And no one has ever figured out even how to write it down, how to structure that probability distribution... Because clearly it has lots of structure. The costs of misclassifying each breed of dog as a cat is probably the same. I think all dogs are equally upset to be equal to cats. But if you classify a bus as an insect, maybe that's a more embarrassing mistake to make, and so on.

So you could imagine that there's lots of structure in this matrix, and the structure partly reflects a taxonomic hierarchy of objects, and how we arrange them into categories. You could do a whole Ph.D. thesis just on that part of problem.

And now there's also "Well, what does the algorithm look like?" If it doesn't know the loss function and it has the opportunity to find out more, for example by asking the user, "Is it worse to call a cat a dog, or to call an apple an orange?" Sometimes the algorithm would say "I'm not going to classify that image. That's too dangerous, so I'm just not gonna make a guess as to what it is." So you immediately see that just the nature of supervised learning would change considerably if you allow for uncertainty about the underlying objective.

**Chris Benson:** Yes.

**Stuart Russell:** And then with AGI - we don't yet know exactly how to build AGI. There are a bunch of unsolved major conceptual problems that we have to figure out... But I think the basic answer is that if you formulate AGI within this new model -- the key property of a new model is that the better the AI solves the problem, the better the outcome is for human beings. Because it means that the AI system does a better job of finding out what it is you want, and does a better job of achieving it.

**Chris Benson:** So you were talking a moment ago about applying control in the new model that you were proposing as we move into AGI; would you pick that train of thought right up where you left it there?

**Stuart Russell:** Yeah. So with AGI, if we formulate it in the new model, the key property is that the smarter the AI, the better the outcome for humans... Because the AI system will be able to better interpret our behavior as evidence of our underlying preferences. This is the nature of information flow between the human and the machine about what the human's objectives and preferences are - everything the human does reveals evidence for our underlying preferences. So the AI system observing us, observing our whole history, observing everything we've ever written, is able to infer from that something about what we want as individuals, as a species, and so on. So the better the AI system, the better job it'll do at that, and the better it'll be able to achieve those objectives.

**Chris Benson:** When you say that, just to clarify, it sounds like you're going into unsupervised learning, where it just has the wealth of human knowledge and what humans have done. In this new approach, are you leaving it for the algorithm that you're training to figure that out? Are you specifying it as the practitioner? Do you see this at some point maybe leaving today's deep learning behind, and taking a different approach mathematically? How does that look going into the future if everyone adopts this?

**Stuart Russell:** Well, you often see this claim that there's supervised learning, unsupervised learning... Logically, if those were correct, then supervised and unsupervised would constitute a complete coverage of all learning, right? Because it's A and not A.

**Chris Benson:** Right.

**Stuart Russell:** And then they say "Oh, there's reinforcement learning as well." But actually, there's not. There's other kinds of learning, too. This is related to something we call inverse reinforcement learning. Inverse reinforcement learning is basically -- well, let me first say what reinforcement learning is. Reinforcement learning is the human specifies the reward to the machine, and then the machine learns how to optimally produce the reward.

\[36:17\] So the machine says "Okay, I'm gonna give you one point when you win the game, and I'm gonna give you zero when you lose." Then the machine learns to get one point more often than not.

Inverse reinforcement learning is the other way around. The machine is observing (let's say) the human, and trying to figure out "What is the reward function that this human is optimizing?" And we came up with it actually when I was collaborating with some biologists, and we were trying to figure out how could we apply reinforcement learning to understand animal locomotion - cockroaches, and flies, and other creepy crawlies and so on... And it struck me that actually we can't apply reinforcement learning to create a simulated insect, because we don't know what the reward function is.

**Chris Benson:** Right.

**Stuart Russell:** So then I said "Well, why don't we watch them walking, and figure out what reward function are they optimizing with their particular choice of how to locomote?" I don't know if you've ever seen the Monty Python Silly Walks sketch...

**Chris Benson:** Yes, I have.

**Stuart Russell:** Your listeners may wanna check that out on the web. John Cleese demonstrates that there are many other ways you could walk besides the usual one. We choose the usual way of walking because it does something good for us, whether it's energy-efficient, or stable, or avoids falling over... Whatever it might be, it's optimizing something. So the idea of inverse reinforcement learning is observe the behavior and figure out what is being optimized by this behavior.

**Chris Benson:** Okay.

**Stuart Russell:** This approach, the new model, is a sort of generalization of that idea, because it's generalized in the sense that the human is not just being passively observed doing whatever human thing, but the human is an active participant. For example, if the human solves their half of this problem, they will actively teach the robot about their preferences... Including saying things like "I would like a cup of coffee." That's conveying preference information to the robot; it's not an order, it's just factual evidence about my state of mind, and the robot can interpret it as it wishes.

So when you solve this kind of problem - it's what economists call a game; it just means a decision problem with more than one decision-making entity. So you can imagine one human and one machine, or lots of humans, lots of machines. So you can solve that problem mathematically, and then you just look at the behaviors that the machine and the human engage in when they solve this problem. Indeed, the human teaches the machine, and the machine does things, it asks permission, it allows itself to be switched off, and so on.

So you get very different behaviors than you do in the standard model of AI. I'm reasonably optimistic that in fact it shouldn't matter how intelligent the AI system is; things will still go well. And then the old model, the more intelligent the machine, the worse the outcome for people, because the machine would find some way of messing with the world to achieve the objective that you said, and mess with the things you forgot to mention, that you care about.

**Chris Benson:** \[39:42\] So I'm kind of curious, as you take this and you're looking -- we've hit so many different areas, so I'm trying to tie it together... You look into the future at this point, having come as far through this field as it's evolved and changed over the years... Where do you see it going, especially with control in mind?

As you've talked about how the current standard model can lead us awry, then if you are a practitioner, and you're out in industry and you're trying to do the things that your organization wants you to do, how do you apply your new model? And as you look out, what do you think we're gonna be doing, in terms of what types of models...? What is AI evolving into, if you're looking out five years or ten years, and we're learning these lessons that you're teaching us in this capacity? What does the near-mid, and the little bit farther out look to you at this point?

**Stuart Russell:** Interesting. First of all, there's gonna be a little bit of pushing and shoving, right?

**Chris Benson:** I would imagine...

**Stuart Russell:** The AI community that's grown up with the standard model, and learned it from the textbook, is going to keep pushing ahead with their solving the technical problems that they're solving, within the standard model. And they have to be dragged, kicking and screaming, into this new way we're doing things. So it partly means we - you know, my research group, and there are maybe a dozen other research groups around the world working in this new framework now - we have to provide the technical solutions. We have to provide the new algorithms that behave according to the different principles. And I think if we can do that in practical settings, whether it's recommendation systems, content selection for social media, intelligent personal assistants, then I think that will have a significant effect. People will say "Oh, now I get it." In fact, no, they won't say "Now I get it", they'll say "Oh, I always thought that way."

**Chris Benson:** Of course.

**Stuart Russell:** So they won't be a moment of capitulation, there'll be just a gradual realization that, of course, this is what they've always thought. And it makes sense, right?

**Chris Benson:** It does make sense. Do you think that as they adopt this... As I'm thinking about what you're saying here - and you've already mentioned the poorly-named idea of AI ethics, in terms of how do we prevent those... How does that come together? Because there's the algorithmic side, there's the new algorithms where you are going out into the future and you're implementing inverse reinforcement learning, and it's working for you technically... And you're also trying to say "We wanna ensure that the outcomes are beneficial, and certainly to the human involved" - how does all that come together? Because right now, as I look at people, there are people that are doing the outcome, the ethical concern there, there are people that are strictly algorithmically focused in terms of solving problems... And yet, if I'm understanding you correctly, you need to be able to fuse all these together, it sounds like, so that that works.

**Stuart Russell:** Yeah. Because I think the last thing you want - and you've probably experienced this yourself - is the AI ethics people leaning over the shoulder of the AI practitioners, and wagging their finger and saying "No, you're a bad person." It doesn't work.

So what we have to do, actually, is to get people to understand that this is just how you do AI. When civil engineers design bridges, there's not a bunch of bridge designers and then a bunch of ethicists saying "Oh, by the way, you have to make sure it doesn't fall over." Of course it's not supposed to fall over; it wouldn't be a bridge if it just fell over, right?

**Chris Benson:** \[laughs\]

**Stuart Russell:** And similarly, nuclear engineers who design nuclear power stations - there isn't another discipline of people who care about safety, and then the nuclear engineers don't care about safety, and they just wanna generate lots of energy. It doesn't work that way. If we wanna generate energy, we could just set off lots of bombs. That's cheap and cheerful, it gets past all that red tape and all that crap...

\[43:53\] So I think there should be a strong incentive to just design systems this way, because they won't fall down. The example I use in a lot of talks is that your domestic robot, if it's designed this way, won't cook the cat for dinner because the fridge is empty... Because it might realize, "Yeah, cooking the cat for dinner solves the problem of lack of food, but I am uncertain about -- perhaps the cat has sentimental value, and so I shouldn't cook it. Or I should ask permission before I cook it."

So you get better behavior out of your AI systems, and so they'll be economically more valuable, they'll incur far less in the way of liability insurance, and so on. So there's that. But I also think that at some point we'll need regulation, because just as with malware, there's a temptation to just bypass safety and all the rest, just in terms of immediate grasping.

**Chris Benson:** Sure.

**Stuart Russell:** So as AI systems become more and more capable, and potentially powerful, they need to be regulated more and more strictly, just as we do with nuclear power stations.

**Chris Benson:** Sure. And I would imagine that's not just at a national level, but there will have to be a body of international law, because you have different parts of the world, different countries have different values that they're bringing to play, and some are gonna care more about these kinds of outcomes than others.

I guess I wanted to finish up with -- you know, you have all these students looking to you, and they're coming in and they are starting their careers out in this field... You have people like me, that are a little bit older, and we are trying to constantly retool, and stay up with the field... And in this conversation that we've just had, you've really shifted how I'm looking at the future, and the things that need-- how does a practitioner or a student that's about to be a practitioner tool themselves today, beyond just the current state of deep learning? Because that's where all the focus is right now. It's all about TensorFlow (or pick whatever tool you wanna use), and we're building neural networks or adjacent technologies, and that's where all the education is really focusing, that's broadly available out there on the internet; and by service providers, and others.

How should someone like myself or a student coming in the field be thinking about this, and how should we focus on educating ourselves for the future to align ourselves with this vision that you've just set out. Obviously, there's your book, there's Human Compatible... I don't know if it's out yet, the fourth edition to your textbook...

**Stuart Russell:** Yeah, so the fourth edition is out next week. We finished it a few weeks ago, and I think it'll be in the stores in a week's time.

**Chris Benson:** Perfect timing as they hear this. They can go out and buy it.

**Stuart Russell:** Yeah, so it's an unfortunate situation, because we've basically put the technical content from Human Compatible into the new edition of the textbook. So the first two chapters are saying "Well, this is the old way of thinking about AI, and now this is the new way." But we don't have all the chapters in the middle, telling you how to do the new way... So we're gonna tell you how to do the old way. But keep in mind that you really should be thinking about the new way.

**Chris Benson:** That'll have to be the fifth edition.

**Stuart Russell:** An awkward timing, yeah... So the fifth edition will hopefully have more stuff. But the things to keep in mind are, first of all, the objective that you're designing your system to optimize. As I mentioned with the example of image classification, and classifying the person as a gorilla, most people are not even thinking about that. The objective there is typically implicit. When you run TensorFlow, if you don't put in a loss function, then you're putting in a uniform loss function. And if you put in a uniform loss function, you're saying that classifying a human and a gorilla is just as bad as classifying one kind of terrier as another... And that's not true, so don't do it.

**Chris Benson:** Right.

**Stuart Russell:** \[47:50\] The second thing to think about is what is the scope of action of your system? So if your system could learn any function that strings together actions that it carries out - you know, what is the sort of transitive closure, what's the full set of states that your system could take the world into when it runs in the real world? And if, for example, you are just writing a Go program, and it's only moving pieces on a simulated board within the memory of the computer, and then displaying, it's relatively safe... Because no matter what sequence of moves it does, it's still only changing what appears on the screen when someone's playing Go with it.

Now, theoretically, it's not perfectly safe, because just as we have learned the origins of our own universe, and the physics of the world in which our bodies run, a sufficiently intelligent Go program could actually do the same thing, and then figure out that there must be other entities outside of its computer, and try to communicate with them through the Go board, and convince them to give it more CPU power, or whatever. So it's not hermetically sealed, even then.

But if your algorithm is in direct contact with humans, then -- you know, here's one good way to remember this... Hitler did it with words. Hitler was not a 1,000-foot tall, giant robot with a laser beam, sweeping destruction everywhere; he was just a little guy who spoke.

**Chris Benson:** Yeah. That's a great point.

**Stuart Russell:** So if your AI system is in direct contact with humans, it has far more power than Hitler already, because it can speak to billions of people all the time.

**Chris Benson:** That may be the most terrifying thing I've ever heard a person say right there. That's perspective right there.

**Stuart Russell:** Yeah. If you're thinking "What is the transitive closure of all possible actions that system could do?", there's really no limit to it.

**Chris Benson:** Yes.

**Stuart Russell:** It could affect the world in any way. So those kinds of systems, I think, should absolutely be carefully regulated. And I think -- for example, we talked earlier about how social media algorithms work. I think you can distinguish between reinforcement learning algorithms in that context, and supervised learning algorithms. A supervised learning algorithm, roughly speaking, will learn what people want... Whereas a reinforcement learning algorithm will learn to manipulate people to change what they want, so that the algorithm can make more money.

So I really think that algorithms that are facing the general public in that way need to be regulated, not in exactly the same way, but in some way analogous to the way we regulate pharmaceuticals. We don't just get to spit out new pharmaceuticals to billions of people whenever we feel like it, right? They have to be carefully tested on animals, and on all control groups of humans... Because if it goes wrong, it's really bad. And the same, as we learned, is true with these social media algorithms.

**Chris Benson:** Well, I just wanted to say thank you so much for coming on the show. This has truly been one of the most fascinating conversations I've ever had. I think at this point I will be recommending that people read Human Compatible pretty much everywhere I go.

**Stuart Russell:** Well, thank you. \[laughs\]

**Chris Benson:** You point out the danger of, as we grow here, if we don't start taking that into account... So thank you so much for coming on the show. You've really blown my mind, so... I don't normally finish the show stuttering like this, so... Thank you very much.

**Stuart Russell:** \[laughs\] Thank you, Chris. It was nice talking to you.
