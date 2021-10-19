**Daniel Whitenack:** Welcome to another episode of Practical AI. This is Daniel Whitenack. I'm a data scientist with SIL International, and I'm joined as always by my co-host, Chris, who is a principal AI strategist at Lockheed Martin. How are you doing, Chris?

**Chris Benson:** I am doing very well. How's it going, Daniel?

**Daniel Whitenack:** It's going very well. Staying very busy. As we were talking before the episode, it seems like after the crisis and after being everyone at home right now - for future listeners, this is still during the Covid-19 crisis. It seems like I'm more busy--

**Chris Benson:** Shelter in place...

**Daniel Whitenack:** ...more busy work-wise now than even before. What about you?

**Chris Benson:** I think it's the same, and we're just trying to not be paranoid. We're right in the middle of pollen season, and everyone in my family suffers, so you get sore throats, and you're coughing, and you're like "Oh my god..." That's not symptomatic of Covid, or something... So we're just trying to maintain our calm, get through this, and all is well. Other than that, it is a lovely day here in Atlanta, Georgia.

**Daniel Whitenack:** Yeah, it's a beautiful time to get outside as well. Of course, maintaining distance from others... But we've got something pretty interesting to chat about today. In the midst of all of the Covid-19 and Coronavirus tweets and articles that I've been seeing, and reading, and all of that stuff, I was able to pick out this one story that seemed really interesting to me, that was not related to Covid-19... And that was the story about a team at Google who was using reinforcement learning to somehow design chips, like hardware computing chips.

We're joined today by Anna Goldie and Azalia Mirhoseini... I'm sorry to mess up the name. You can correct me here in a second on that one. Sorry, Azalia. Welcome to the show.

**Anna Goldie:** Thank you so much for having us.

**Azalia Mirhoseini:** Yeah, thanks for having us.

**Daniel Whitenack:** Excited to have you both, and excited to chat about this amazing project. It was really interesting when I read it. But before we jump into the project itself, I would love to hear a little bit about both of your backgrounds and how you ended up doing what you're doing now. So maybe we could start with Azalia - could you give us a little bit of information about your background?

**Azalia Mirhoseini:** \[03:50\] Yes. I'm a Ph.D. from Rice University, in computer engineering. My thesis was focused on code design of hardware/software systems for machine learning applications. Then I joined Google Brain through their residency program. I stayed at Google Brain as a resident for a year, and that was the time that I developed a passion for the work at the intersection of ML for systems, like how do we develop new machine learning algorithms and deep learning algorithms for systems. Ever since then I've been at Google Brain for like almost four years now, and enjoyed doing research, and work on impactful projects.

**Daniel Whitenack:** Awesome. And now you're a senior research scientist at Google Brain? Is that correct?

**Azalia Mirhoseini:** That's correct, yes.

**Daniel Whitenack:** Awesome. Thank you for the background. Anna, do you wanna give us a little bit of information about your background as well?

**Anna Goldie:** Yeah, sure. I studied computer science in linguistics at MIT, and I did my master's basically building a Mandarin-speaking dialogue system. I joined Google Research about eight years ago, and I've been working mostly before this on natural language processing applications. About 2,5-3 years ago I started working with Azalia. I actually saw some parallels to natural language processing in some of these systems' problems, because a lot of them could be formulated as sequential decision-making problems... And it's been just wonderful working with Azalia, and we have such an awesome team. We're basically trying to use machine learning to optimize and automate various problems in computer systems.

**Daniel Whitenack:** Could you give us a little bit more of an idea about this team, and how big it is? I know you both work closely together, but what's the team like that you're working on?

**Anna Goldie:** Actually, when we first started it was basically just me and Azalia, and then we've been gradually growing. I think we have something like 8-10 people on the research side, and then we also partner with chip designers who are building the next generation of TPUs. Maybe there's about 8-10 people on that side as well, so it's a pretty substantial effort at this point.

**Chris Benson:** I come from a software-only background, and as we dive in, I'll probably be more comfortable on the reinforcement learning part... But I knew nothing about creating chips, and stuff... And I guess if you could just lay out the context of what that means? I've heard the phrase "chip placement" and I've hear "chip floor planning"... Could you talk a little bit about the baseline, about what it is you're trying to do and the context of it from the hardware side, which I know nothing about?

**Anna Goldie:** Sure, maybe I can take a stab at that. Basically, this is just one of the stages of chip design. Basically, the computer architecture stage and synthesis occurs first... But the problem that we were solving in our research was taking a graph of chip components, which is called a netlist - it's basically a bunch of \[unintelligible 00:06:57.08\] memory components macros, and standard cells, which are logic gates like NANDs and NORs. All of these are connected by wires, so it's a graph, and we wanna place that graph onto this two-dimensional grid, such that we minimize various costs, like latency of computation, higher consumption \[unintelligible 00:07:14.00\] while adhering to hard constraints on density and congestion. So that's the core problem that's we're trying to solve.

**Daniel Whitenack:** So do I have it right - when you say that this is kind of graph-structured, you're meaning like "There's this component, something physical that has to go on the chip, and then there's these other components, and they need to be linked by an electrical connection?"

**Anna Goldie:** Exactly.

**Daniel Whitenack:** So the graph is formed of these components and the electrical connections between them. Is that kind of...?

**Anna Goldie:** Exactly, yeah. There's all these logic and memory components connected by wires or electrical connections, and then we physically need to decide where to place them, such that we get better performance for that chip.

**Daniel Whitenack:** Gotcha.

**Chris Benson:** \[08:01\] And can you talk a little bit about what that means? Why does physical placement have an impact on performance, and what it is about that placement which affects performance?

**Anna Goldie:** One way you can think about it is the timing of computation or the amount of time it takes to compute with this circuit is affected by the lanes of critical paths in this placed graph. If the total wirelengths connecting these components is larger, then it's gonna tend to be slower, it's gonna consume more power... That sort of thing.

**Daniel Whitenack:** Gotcha. And how big of a graph -- how many things are we needing to place and optimize, in general?

**Anna Goldie:** Millions. Millions of standard cells. In a chip there's typically many blocks, so hundreds of millions in total of components that you're placing.

**Daniel Whitenack:** Gotcha. Azalia, I'd love to get some context in terms of how has this problem of figuring out the placement of all of these components of the graph - how has this been approached in the past, and what are the bottlenecks or problems in terms of creating a solution to this?

**Azalia Mirhoseini:** Well, there were several approaches to this problem in the past. In fact, since 1960s research in both the academic community and industry started on doing the physical design or placement optimization. There are various approaches. For example, there are quantitative approaches, there are approaches based on greedy methods, or simulated annealing, or hill climbing approaches, genetic algorithms and such. I would say the way we came in and the way deep learning and reinforcement learning is helping us taking a new stab at this problem is that for the first time we can learn the context of the problem, and learn from experience... Meaning we think, unlike all the previous approaches, what we are doing is training agents that can accumulate experience, and as they are optimizing more chips, they become better at placing new chips. This is an approach that's different from all the previous existing methods.

**Chris Benson:** Gotcha. And for those who may not be very familiar with reinforcement learning as a technique, before we dive into how you're using it in this, could you take a moment and give listeners - either one of you, or both of you - what is reinforcement learning and why is that in particular a technique which lends itself...? Starting with just a quick run through the fundamentals of what it is, if you're not familiar with it.

**Azalia Mirhoseini:** So in normal machine learning or supervised learning you're trying to fit labels to input examples... In this case, you have this additional power, I guess; you can take actions in the world, and then you receive feedback from your environment, and then you use that information to try to optimize the parameters of your own policy which is generating these decisions to do better over time.

Basically, it's composed of states, which is sort of the state of the world at a given moment in time. For us, we're placing these chips, the nodes of this graph one at a time onto the chip, so the state is kind of "What is the placement so far?" and then actions or decisions that you make at each point in time, which is for us where to place the next node... And then reward is the final key component for reinforcement learning. It's the feedback that we get from our environment. In our case, after we place all of the nodes, we have approximate signals on wirelength, congestion and now timing, and we use a weighted average of these to tell our policy how well it did, so it can update itself and generate better placements over time.

**Daniel Whitenack:** \[12:05\] I know a lot of people might have heard about reinforcement learning, maybe with agents that play Atari games, or maybe more so in robotics... In those types of scenarios you have this agent, which may be composed of one or more models, and it's trying to take actions... People tend to maybe associate that with taking actions in the video game, or moving the arm of your robot, or something like that. In this case, the "game" you're playing is really the placement of these components, right? So your agent is placing components, and then getting feedback about how well it's placing those components. Is that a good way to put it?

**Anna Goldie:** Yeah, that's great.

**Azalia Mirhoseini:** Yes, exactly.

**Daniel Whitenack:** Okay, great. So in doing this, I'm curious -- I don't know if anyone's tried to do this before; I assume maybe not, in terms of reinforcement learning for this problem... How did you come to decide that reinforcement learning might be a good approach in this scenario, versus maybe some other methodologies? How did you come to the point where you say "Oh, those things that people are doing in robotics, or in these games, or something else", how did you come to think that those methods, specifically reinforcement learning, might be suitable here?

**Azalia Mirhoseini:** Before we started this project, we had been working on another project, which was doing device placement optimization with reinforcement learning. That project had to do with taking a computational graph such as a machine learning -- like a TensorFlow graph, and mapping it optimally to the hardware devices such as GPUs and TPUs, such that the runtime or performance of the underlying ML algorithm becomes as fast as possible.

So that problem was a combinatorial optimization problem, and a very complex task... And we started thinking about how ML in this context of learning can help doing that optimization problem better than existing ones. And reinforcement learning is really a natural thing to come in mind if we think about ML, because this task is not a supervised test; we don't have labels for it. We want to optimize this problem by doing several rounds of exploration/exploitations.

So we did reinforcement learning for that, and we got a lot of interesting, very encouraging results on the device placement task. Then we came to a natural next step for us to try "Okay, now what if we try the same kind of approaches for the chip placement problem?", which is a much more complex problem than device placement. So that was the transition for us from devices to chips... But the interesting thing was that chip placement, when we came to it, we realized it's orders of magnitude a more complex problem.

It was very unclear to us in the beginning that we were gonna get gains between reinforcement learning for this problem... There's so much research on it already, but after some trial and error and several rounds of improving our algorithms, it seems like it actually is helping a lot in this problem as well.

**Break**: \[15:43\]

**Chris Benson:** I am curious -- you mentioned a moment ago that the data itself wasn't labeled, lack of labels, and reinforcement learning seemed like a very good technique to lend... I am curious, if you had not gone down this route, or maybe not machine learning at all, what are some of the other options - whether they be in the realm of machine learning or not - might have been? ...just to have a sense of what the technique opportunity cost would have been? How might others have done it had you not gone down this path?

**Anna Goldie:** So we did experiment with some other techniques, like evolutionary strategies. They tend to be less sample-efficient, so it didn't really seem like too promising a path to go further down.

We also experiment using supervised learning as a way to basically ground our architecture search. The policy architecture that we were able to achieve generalization with was tuned using a supervised learning objective... And then we used that as the encoding stage of our full policy \[unintelligible 00:18:34.00\] achieve better generalization results.

**Daniel Whitenack:** I would love to follow up on a couple of those things. Maybe digging into a couple of those pieces, just to break it down for listeners... So when you're talking about this encoding piece and the supervised stage that you did complete - does that have to do with getting the graph structure data into another form, a sort of embedding or representation that you would use in other things? Could you describe that a little bit more?

**Anna Goldie:** Yeah, sure. I think in order to achieve generalization, it really is about the representations, as you said - what is the correct embedding for a given input graph. Basically, we created this very large dataset of different placements generated by different placement techniques, including reinforcement learning policies, but also \[unintelligible 00:19:33.18\] simulated annealing, greedy methods... And we used that to try different architectures on the task of predicting the approximate wirelengths and congestion for those placements.

The architectures that were better at this prediction task did a much better job of creating policies that we're able to generalize across different chip netlists... Because they presumably had a better representation.

**Chris Benson:** \[20:03\] I am curious -- you mentioned a little while ago that the thing that inspired you guys to go down this particular path was device placement optimization... I would imagine - and correct me if I'm wrong - that this is like a completely different scale, in the sense of working in very small spaces, I would imagine, compared to the original device placement optimization you were doing. If that's accurate, did the scale - moving down to such small spaces - make a difference, or was it fundamentally the same...? Did the approach hold up the same as you had experienced in the prior project? Azalia, do you have any thoughts on that one?

**Azalia Mirhoseini:** Yes, so in both projects we were still doing reinforcement learning, so the meta-approach still remains the same... But like you said, the scale of these two problems is very different. For example, in device placement we have like a dozen -- our action space is like tens of devices, or less; or a few devices, a few GPUs, CPUs. But here, our action space is the placement or cells of the canvas onto which we are placing the chip. This canvas can have thousands (or even more) locations. So our action space is orders of magnitude larger than the previous problem.

At the same time, our input state, which is the graph that we are processing - a chip graph, like Anna mentioned, can have millions of nodes, whereas a computational graph can have tens of thousands or so. So here in this problem we were dealing with a much more complex state and action space.

To enable RL agents that can optimize this problem, we had to do several changes to the way that we present the environment to the agent. For example, we had to kind of take a hierarchical approach to the way we represent the input graph.

For example, we group certain standard cells, we break down the complexity of the input state to a graph with thousands of nods that we were later on placing. And on the representation learning we had to do a lot more work, because in this problem not only we were interested in placing one chip, we also interested in creating agents that become better at placing unseen chips, because that opens new opportunities for chip design optimization if we can quickly, given a chip block, can place it, optimize it and see how well we are doing in it.

So this generalization property that we wanted from \[unintelligible 00:22:47.20\] led us to really heavily focus on representation learning of the graph. We created a lot of new techniques for creating these generalized representations that we are hoping in future problems, in other stacks of chip design or other hard ML \[unintelligible 00:23:06.23\] combinatorial optimization that we are dealing with can help us do better in those problems as well.

**Daniel Whitenack:** I'm really curious -- I have a follow-up from that... And as you were talking, I was thinking about how essentially you have all of these different possible arrangements of the graph onto the physical canvas, like you said... But also in this problem, as you're placing components, there's this sequential nature to it. And maybe this is where -- I think it was mentioned earlier that there were kind of even some parallels with natural language processing... And I was wondering how you deal with this situation where you're really not just taking - at least in my understanding, you're not taking a one-step approach of like "Here's all my components, and then here's my prediction for the placement of all those components." You're kind of placing one component, and then placing another, and then placing another, kind of in a more iterative sort of way.

\[24:07\] How do you deal with that sequential nature of this process, and does it involve subgraphs within the graph, and then adding a component to that, and kind of taking the last so many components and then trying to figure out how the next component comes in? ...kind of like placing characters or placing words when you're doing text generation. How does that sequential thing come in?

**Anna Goldie:** So the first architecture that we had that worked well, we would actually pass images of the placement so far, and so the model -- it was kind of like a human designer; as they're maybe placing a graph, they could see what space is left on the canvas, and such. And we had basically an LSTM model for the policy head; that stores information about the full sequence of placement decisions that have been made up to that point.

But in the end, actually, I think our current policy has a deconvolutional neural net that predicts a policy decision over this two-dimensional grid.

**Chris Benson:** I'm kind of curious -- I'm also following up with the same thing, actually... You may be starting to address that there, but I was kind of curious, you mentioned when you were talking about representation learning of the graph that there were some new techniques that you got into. You made the comment, and then I was wondering - is there anything else that you kind of learned to apply to this, or did you just cover it right there?

**Anna Goldie:** I think Azalia was getting at this graph embeddings that were developed for this project... And I think at a high-level, the insight there was that for most graph convolutional neural net type applications it's really about the features of the nodes themselves... So you kind of represent nodes as some kind of average, or other aggregation of their neighbors' features... But in our case, what really matters is the connections between these nodes, because it's about the paths. So our graph embeddings are much more focused on edge features.

**Daniel Whitenack:** And diving a little bit more into those embeddings - again, I'm trying to make connections with maybe things that I've seen or heard about before... I know in the NLP world, with these newer language models that are coming out, and the word embeddings that they're generating, the thought is "Oh, we're gonna train this model, or learn this representation based on one or more tasks, like replacing missing words", or something like that... And then you learn this embedding and then kind of apply maybe some new layers onto the network to do a particular task, like question answering, or whatever it is. Is it similar here?

You were talking about how you used some supervised learning to train the embeddings, in my understanding... So you have these certain tasks that are supervised, and you learn the graph embeddings, and then you were able to apply those in a new scenario... Is that the strategy, or do I have that wrong?

**Anna Goldie:** Yeah, that's very much right.

**Azalia Mirhoseini:** Yes, that's correct. I think the way we can describe this is that we trained architectures to capture the representation or encoded embedding of the input by having a supervised model with very easy to produce labels. We call them pseudo-labels. Those labels where our proxy costs for the optimization were very fast and not at all expensive to generate. So the motivation for us to train architecture this way was if our agent, our policy is to generlize to unseen graphs, it should also have a good understanding of predicting what the actual reward is for a given state. That's like a prerequisite for generalizing policies to unseen graphs, is to have an idea of how good a current state is.

\[28:19\] That's what made us do the supervised approach first, where we predict the pseudo-labels for a given graph, and once the architecture is tuned in a way that this prediction task is done at a high accuracy for the test set, then we take that and use that as the encoder part of the policy for further optimization of placement.

**Daniel Whitenack:** Awesome. This is really interesting, because we brought up graph neural networks a couple times on the show, but maybe not in the sort of applied way that we're talking about them here. I was wondering if you could -- before we get too much further, just mention what makes a graph neural network a graph neural network, instead of just a normal neural network. And maybe help clarify for people -- because even in this episode, in our conversation, we mentioned computational graph; that might come to people's mind if they're thinking about TensorFlow, there's this computational graph in the background... But here, for a graph neural network, we're not talking necessarily about the computational graph. What makes the graph neural network a graph neural network? Is it just the input data, and this way of representing graph data?

**Azalia Mirhoseini:** So what graph neural nets graph neural nets is the way they encode information. In a typical graph neural net we are learning representations of the nodes of a graph with respect to the properties of this node, and the properties of its neighbor nodes, and the neighbor of the neighbors, and so on. So graph neural nets have this property that they can encode information about the one-hop, two-hop, k-hop adjacency information of a node. And you can also, on top of this adjacency information, like the connectivity graph, you can also add features per node, and in our case, you can also add features per edge of the graph.

Basically, graph neural nets are allowing us to capture all of this information about the graph structure of an input data, and generate embeddings of the nodes and edges that relate and can capture those graph structure and graph information.

**Chris Benson:** So having gone through this - and it was just fascinating; it's entirely new to me - I'm curious what the results were like. Where did you arrive, what surprised you along the way in the process, what was not what you were expecting to see, and also, how did the larger organization at Google take the results? Is it something that is now becoming standard at Google, or was it just a test/experiment? How did it affect the larger organization in terms of designing chips going forward?

**Azalia Mirhoseini:** We have definitely tested this method on chips that Google makes, and have gotten super-human results on a good portion of the complex chips that we tried placing them. But in terms of other questions you asked, I'm not sure if we can answer that at this point.

**Chris Benson:** Okay. But nothing jumped out from a surprise standpoint, just kine of like -- you got something? I'm just curious.

**Anna Goldie:** Yeah, sure, I have something to offer on that. Maybe not surprising, maybe just exciting. In terms of those generalization results, we would take a policy and pre-train it on a larger number of chip netlists, and then apply it to a new chip. Something surprising that excited us was that a pre-trained policy that was fine-tuned for, say, only 12 hours would outperform a policy that was trained from scratch on this netlist for 24 hours or more. I think it was exciting to us that this new policy architecture generalized so well that it actually does better and it takes less time.

**Chris Benson:** \[32:29\] That's pretty amazing.

**Daniel Whitenack:** Was that having to do -- I know when I was looking at the paper you talked about domain adaptation, which I remember we talked about with the OpenAI team, and also we've talked about in relation to robotics, and moving hands... So is that key to that generalizability, is adapting the domain or the environment during this training? If so, did you have to create a bunch of simulated data for various environment changes, and that sort of thing? What was your approach there?

**Anna Goldie:** So we actually just used real chip netlists for all of the pre-training... So we (say) trained on 20 real chip netlists, and then we were able to achieve those results where we had much better and faster results... But we probably could use some kind of data augmentation, where we could maybe turn those 20 into many more; or source more netlists in some other way and we would do much better.

**Daniel Whitenack:** And what is your feeling in terms of how specific this pre-train policy is for the sorts of chips that are included in the set of chip nets (I think you called them) that you used during pre-training?

**Anna Goldie:** Yes, netlists.

**Daniel Whitenack:** How specific do you think the pre-trained version of the policy is for that kind of family of chips? Or do you think it's generalizable beyond that?

**Anna Goldie:** I think it definitely affected -- the policy's performance on a new netlist is definitely affected by the types of netlists that it's trained on in the past. At the same time, it's a pretty general problem... So yeah, I think as long as you train on a representative set of netlists, you could do well on any one.

**Daniel Whitenack:** Gotcha. And what are some of the challenges that maybe you faced during this project, that you maybe didn't have time to address in the initial version of this project? What were some of the things that you want to explore more going forward?

**Anna Goldie:** I mean, there's just so many other stages of this process... And what's exciting about developing policies that can more quickly generate high-quality placement is that we can explore feedback or interactions between (say) previous stages, upstream choices, like this choice of \[unintelligible 00:34:51.14\]. Basically, there's a certain amount of memory that needs to be in this chip, but the choice of how to slice it up into these macros is somewhat arbitrary. And if you can try to slice up the \[unintelligible 00:35:04.29\] a particular way, and then see what kind of placement, what level of quality you can get in terms of timing and other properties from that quickly, you could do all sorts of explorations upstream.

**Chris Benson:** I wanna follow up on something that you were saying before, just to make sure I understand... When you're looking at these different types of chips that you wanna apply this to -- and going back, I know we had someone talk about some chips from a previous company earlier, but they were talking about basically different types, from GPU, TPU, FPGAs, and such... Do those different architectures dramatically change the problem for you?

\[35:47\] I know that we were talking about the domain adaptation a moment ago, but in a practical sense, do you have a substantially different RL approach every time you change out the chips, given that -- I believe a GPU will have a whole bunch of things beyond what a TPU might have on it, because it's being able to address problems, whereas a TPU is very specific to the matrix multiplication... How does that affect your approach on that? I personally wasn't clear enough on it, because of trying to learn this as we go...

**Azalia Mirhoseini:** Yes, so we have tried our method on a bunch of different types of chips that were available inside of Google, and also chips that were available open source... And the way we did -- our RL approach didn't need to change going from one set of chips to the other. But definitely, like Anna was mentioning, if you have a chip that is drastically different from anything you have seen before, then it could affect the performance of the agent.

But at the same time, the input space of our problem is very abstract. We don't deal with the specifics of a chip, rather we are dealing with a generic netlist representation of the chip, with these nodes with certain connectivities, and the nodes have different sizes and different shapes, and we are placing them, optimizing for the cost that we have developed.

So the problem, if we don't think about what chips they are, is very abstract, in the sense that it can really handle different sorts of input from different chips. And so far, we didn't have a chip that was drastically different from our training set that we had to change the RL algorithm for. There is always a modification of the algorithm for improving it overall, but like I said, the input state is pretty standard among different types of chips.

**Daniel Whitenack:** I'm kind of curious the more I think about this problem... It seems kind of like we're using an AI method to help design a chip on which AI will hopefully operate, or be trained, or run inference on, or that sort of thing... I'm kind of curious, on a more general sense, how you see AI -- as we move into the future and AI development continues to accelerate, are we gonna need these sorts of methods more and more, because more specialized chips are going to be needed for these types of AI problems moving forward? How do you see AI influencing the hardware that AI runs on?

**Azalia Mirhoseini:** Chip design is a really complicated task, and making customized chips is definitely also very complicated. We are witness that we are going to need more and more of these customized chips, because of various computational demands, of especially AI algorithms.

Our vision is AI can help the design of these chips because of its ability to learn and improve over time, and its ability to optimize over a very large optimization space.

For example, if you look into the chip design process, there are various stages of optimization, from architecture design, to logic design, to verification, and physical design and placement... Each of these stages are very complicated, are combinatorially hard. So our goal or our vision is that AI can help us finding globally-optimized solutions across all of these stages. Then we are gonna have hopefully a lot more performance improvement over what we have right now, where we optimize each stage separately and then just cascade them together.

\[39:59\] The reason we think AI can help with it - we mentioned this a couple times in this conversation - is that AI can improve over time, and this property is something that's very different from what we have seen in any other existing methods. So the policy, the agents can become better, more experienced at doing newer tasks. So if we accumulate this experience over time, then we are dealing with these agents that become much better than any single person or single algorithm that has ever optimized a chip.

**Chris Benson:** Yeah, and that way - it almost seems like so many other areas that we're applying AI techniques to, and that you take it to that super-human level and just continue on... It makes me wonder, as you guys -- and this may be almost an organizational question to some degree, but I'm curious whether having pioneered this, being able to apply reinforcement learning to this particular problem, is this something that the two of you are expecting to continue working on for some time? Or have you kind of done your experiment, you got your results and you're gonna move on to other problems? If it's the latter, what might those other problems be? Or if it's staying on this, what are you looking to next? What's the next step, whether it be on this problem or doing something else, for each of you? Anna, do you wanna go first?

**Anna Goldie:** I think that there are definitely other stages of the chip design process that have a lot of impact. Getting to your last question a little bit, in terms of how can this affect AI, for AI in chips - the current chip design process takes nearly two years... So there could be certain types of machine learning architectures that just aren't computationally feasible on today's hardware. But if we could more quickly design chips for them, they might become more viable approaches.

But the problem is that, say chip floor planning is just one of these stages. So if we wanted to dramatically accelerate this process, we would have to tackle these other stages... Like architectural exploration, or design verification.

**Daniel Whitenack:** Awesome. And you've built one of the building blocks of that process, but you could be exploring some of those other building blocks as well - is that right?

**Anna Goldie:** That's right.

**Daniel Whitenack:** Awesome. What about you, Azalia?

**Azalia Mirhoseini:** I think I'm in a similar boat. I'm very excited about the research on RL and ML for optimization tasks in general... And I think chip design is a very critical and important application of optimization. Something that's gonna enable -- if we have better chips, we're gonna have better next-generation AI algorithms as well, because chips are key enablers of those algorithms.

So I would say both research on RL for optimization, and with applications in chip designs - that's something I'm very excited about and look forward to continue working on.

**Daniel Whitenack:** Awesome. Well, thank you both for taking time to join us. This has been super-fascinating, and it's been great to dive into some of these subjects, like graph neural networks and chip design, and these things that we haven't talked a lot about on the show... So I really appreciate both of you taking time and joining us for the conversation. It was great to talk.

**Azalia Mirhoseini:** Thanks for having us.

**Anna Goldie:** Thank you so much for having us.
