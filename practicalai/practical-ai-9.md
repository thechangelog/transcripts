**Daniel Whitenack:** This is Daniel, data scientist creating AI for good, and I'm joined here by Chris Benson, my co-host, who's a digital transformation strategist, which is very exciting. How are you doing, Chris?

**Chris Benson:** I'm doing great today. How's it going, Daniel?

**Daniel Whitenack:** It's going well. Speaking of strategy, I think you're gonna really like today's. We have Mike Bugembe with us today. When I met Mike, I was really intrigued by his story... First of all, some of the things that he's worked on in the past, but also just the experience in kind of guiding a company all the way through the process of kind of defining and implementing data analytics and AI strategy within the company.

Today we're gonna talk to him about all of those things - the culture of AI, the operations of AI, the strategy around that, and when and how you can find AI use cases. I think it's gonna be really great. Welcome, Mike.

**Mike Bugembe:** Hello.

**Daniel Whitenack:** Why don't you tell us a little bit about yourself?

**Mike Bugembe:** Hello, I'm Mike Bugembe. I'm an all-around data evangelist and a consultant, working with organizations and trying to help them find value in this wonderful asset that everybody is so excited about... Working with them on identifying AI solutions, working machine learning problems, and so forth, and all of them seem to be really interested in building a really interesting algorithm for them, and the whole spectrum of AI.

And formerly, before I started working as a consultant, I was the chief analytics officer for JustGiving.com, a U.K. based company that also happens to be the world's largest online social giving platform.

**Daniel Whitenack:** Oh, wow. That's amazing. I wasn't super-familiar with Just Giving, but it's really large, right?

**Mike Bugembe:** I think we're bigger than a lot of people initially think. We are a for-profit organization that operates in the non-profit space. To date, they've raised more than three billion for great causes out there.

\[00:04:13.25\] I suppose I should explain a little bit about how it works, for the audience, because they might not be so familiar. Just Giving started in around the year 2000-2001. Essentially, what they are is a digitized form of the paper form that we used to take around when we were doing an event for charity.

Let's say we were running the marathon for charity - we would take a paper form to our colleagues and our friends and say "Would you sponsor me for this particular charity that I'm running for?" I may be running for Cancer Research UK, for example; I've picked that because someone in my family has been affected by cancer, and I'm really passionate about them eradicating the disease...

So I'd take this paper form and I'd go around to different people and they'd sponsor me. Some people would say they'll give you a pound a mile, some people would just throw in 50 quid (which is 50 pounds), or even more than that. And then companies tend to match that as well, so if you raise 500 pounds, companies will also add 500 pounds to that form.

And what Just Giving did is quite ingenious, actually - they took that paper form and they digitized it, so that they could reach effectively more people. As we're becoming a much more connected world, digitally at least, we're able to take that form and spread it around to lots of other people who would then come onto that new page, which we called a Fundraising Page, and they'd be able to donate directly to your page, and then you'd raise the money for charity, and then do the event. And that was like the mainstay of the organization.

As we progressed, in late 2013-2014, around that time, we also started building a sort of individual giving platform, where people could raise money for whatever cause they wanted, so it didn't have to be a formal charity... It would be things like, let's say, someone needed to travel to South America to see their grandmother before she passed, and needed to raise funds for the plane ticket, for example... And they would create the same page, reach out to their friends, their friends would come and donate (their friends or people they knew), and then that individual would be able to take those funds and carry out the for-good mission that they had initially raised the money for.

**Daniel Whitenack:** That's awesome. It's great to hear about how Just Giving has really empowered that sort of giving. You can only reach so many people given them a physical form, right? But our digital networks are so much larger now, so that's so great...

**Mike Bugembe:** Yeah. It is also one of those ideas that you think "Well, why didn't I think about it?" It's so simple in the concept, but it works so well... And as I said, they've raised more than three billion for really good causes to date. Very exciting.

**Daniel Whitenack:** That's awesome.

**Chris Benson:** That's amazing.

**Daniel Whitenack:** I've seen you post some stuff related to animal charities and stuff, Chris... You'll have to look into this for some of your --

**Chris Benson:** Oh, you've just piqued my interest. When I'm talking AI and data science and such, I'm all about animal advocacy.

**Mike Bugembe:** Oh, great.

**Daniel Whitenack:** That's awesome. Well, now you have Just Giving.

**Mike Bugembe:** Exactly. One of the great things about that is it really begins to democratize the whole idea of giving... You know, moving on from the traditional ways that haven't changed very much, to be honest, where charities would solicit/ask/request from individuals, or you have what we call chuggers on the street, who are walking around with those tins, asking for money. Here, it's really connecting people to the causes that they care about, and then also connecting people to other people... So it's some really interesting AI use cases (if you like) that come out of that as well.

**Chris Benson:** Yeah, I'm looking forward to talking about those.

**Daniel Whitenack:** Yeah, that's awesome. I'd be interested to hear just a few more details on that front, as far as -- because this will, I think, give some context for the rest of our conversation in terms of, you know, when you came on with Just Giving, and how it's grown, if it's international at this point... I think it was acquired, right?

**Mike Bugembe:** \[00:08:11.21\] Yes.

**Daniel Whitenack:** So when you came on, what the state was then, versus now and how it's grown in terms of the markets that it's in, and size, and all of that.

**Mike Bugembe:** Yeah, so I joined in 2010, and at that point I would say the organization was very much in its infancy with regards to how they would work with data. They had a lot of the traditional elements in place in terms of having a data warehouse, and collecting some of the information... But culturally, there was a long way that they needed to go.

It was a team of one when I joined, which is essentially myself, with the founder's main objective saying they've got this valuable data set - and it is a valuable data set, if you think about it... You've got in excess of 20 million individuals from more than 100 or so different countries, that have very clearly stated that they're interested in a particular cause... And more importantly, they've also said why. For example, "I'm doing this for prostate cancer, because of what my grandfather went through", or something like that... Or "I'm from a particular country where there's been an earthquake", so you can see there's a clear relationship.

So millions of people connecting to thousands and hundreds of thousands of causes, telling us why they've connected to those causes, and then you have an additional million people coming to support those causes or those individuals, leaving comments that give us an even greater indication of other people that might be interested in those causes, or why they are supporting you... It's just a breadth of information that just sat there in that database.

**Daniel Whitenack:** Yeah, that's crazy. It seems like that is -- as a data person, that really excites me, and then also, I definitely see how you could leverage it for good purposes, and also for somewhat nefarious purposes as well.

**Mike Bugembe:** Yeah... Sadly, that's true with almost any organization or almost any data set; it's that ethical boundary of what do you actually use it for.

**Chris Benson:** Yeah, so that begs the question, especially given the fact that you've been there as long as you have... So when you're coming into the organization and you're trying to drive the decision-making process based on data at the organization, and build that up - how do you go about doing that? What is the best way to proceed? Can you share some of your experience there?

**Mike Bugembe:** Sure, absolutely. I will stop by saying, "With difficulty." \[laughter\]

**Daniel Whitenack:** Good disclaimer. You mean there's not a secret sauce?

**Mike Bugembe:** No, actually -- so I've put together what I believe to be a secret formula that helps organizations understand how they can generate value from that asset.

**Daniel Whitenack:** You're writing a book, right?

**Mike Bugembe:** Indeed, yes.

**Daniel Whitenack:** Before you jump into Chris' question, tell us a little bit about your book. I'd love to hear about it.

**Mike Bugembe:** I actually think the book is aligned to Chris' question, so I'll sort of put them all together and bunch them all in my response right now... The book is called "Solving the Data Puzzle", primarily because it's different for every organization, but it has an end state picture, an end state game... But it has many pieces that need to be put down in a specific order sometimes, in order for you to eventually get the picture that you're after...

I think the nuances are very, very important, like the shapes of the jigsaw puzzle pieces, and so forth... So that's what the title of the book is called, and essentially, what it does is it highlights and simplifies the whole problem that we have in the data space, and simplifies it to five keys that you need in order to truly begin to see value from data.

\[00:11:48.24\] This was built from both my experience at Just Giving and the organizations I worked in prior to that, as well as -- fortunately, at Just Giving (just as an aside), I had the opportunity to consult with a lot of our other organizations at the same time; I had a really good relationship with the founders at Just Giving that enabled me to do that... And as part of that, I got to test these five keys to see what was required to be successful, and also working with some of the larger organizations out there, so just the likes of Facebook and Google and so forth, working with individuals at those organizations to really begin to just see what's working for them... And it all comes down to those five ingredients, essentially.

So I think the question -- Chris, do you mind reminding me what that question was that you had asked earlier?

**Chris Benson:** Sure. As you are coming into the organization, you're trying to figure out the best way to build and drive a culture of good decision-making, that's based on the data that you're collecting - how do you go about that process?

**Mike Bugembe:** Great. So I think where you started is a real indication of some of the problems that we suffer... Commercially, let's say. You immediately said - to paraphrase - "How do we get into the habit of good decision-making within an organization?" The first task that I had was to get the organization to understand that decision-making was an area that we needed to focus on.

The things that happen with data - people get very excited about what it can do, and we hear about Facebook's EdgeRank, and Google's PageRank - you get very excited about those sort of things, and you're looking for "Okay, what's OUR big algorithm that we're gonna talk about?" At Just Giving, we ended up coining it GiveRank, which is not very creative... But you know, you just get a lot of people just excited about "What algorithm can we build?", just completely forgetting that the main use case for data - and it would be useful to see if you can challenge this - whether you're playing with data science or AI, is for decision-making... And decision-making beyond just your organization; it's internal decision-making and external decision-making.

Take for example the two algorithms that I talked about... Facebook's EdgeRank - its purpose is to decide what content to show in order to maximize the chances of somebody coming back, or enjoying their time on Facebook. Or Google's PageRank - that addresses the decision of "What content should I serve or return, based on the query that was sent?"

These are decisions that we could do manually, but they've been automated, and had some mathematical algorithm placed on top of them. So with data, data's main use case being decisions, you can now begin to see that organizations need to take some time to try and understand "What are the key decision we have within our product, within our operations internally, or even with the users that use the product?" Am I making any sense there?

**Chris Benson:** Total sense.

**Daniel Whitenack:** Yeah, definitely.

**Chris Benson:** And not only that, but when you talk about whether or not that could be challenged - I don't think it can; I think it really comes down to decision-making can occur in different types of contexts, whether it's supporting humans, or whether it's automating a decision or whatever, but I think that your basis is really firm there.

**Daniel Whitenack:** Yeah, and I think that part of my struggle in the past at a couple places where I've worked is maybe -- you know, I can get people to the point of thinking about the decisions that they make on a daily basis, maybe in sales, or in operations, or whatever it is, but I have a harder time motivating them to understand that those decisions can be augmented or even leveled up in some way by data. They have this kind of mindset that they have the knowledge in their head to make the decisions, but they have a harder time crossing into that realm of understanding how data or algorithms actually interface with those decisions. Could you comment on that, and if that's something you've seen as well, or am I totally...?

**Mike Bugembe:** \[00:16:04.19\] No, you've hit the nail on the head there. See, the most interesting thing about data is that the individuals that tend to be the experts at it are also the individuals that are poorest at interacting with people. And the whole problem really here is it's a people problem, not a data problem.

What you've described there is the natural human tendency to over-estimate or give more credibility to their own opinions, which is fraught with biases; there are hundreds of books that are written on that right now. You can look at Daniel Kahneman, or Dan Ariely... People who talk about the frailties in human decision-making; we're just surrounded by so many natural biases. I think there's over 120 different cognitive biases that influence our decision-making.

I play a lot of tricks on some of the audiences when I'm speaking to them... There's one that I do, for example - I would ask people "Is the population of Rwanda (a small African country) bigger or smaller than 80 million?" Naturally, what I'm playing with there is anchoring, and most people would give an answer that isn't too far away from 80 million either side... But the population may actually be less than 10. But because I've said 80, they're anchored on that. We have a lot of those things that humans make incorrect decisions with.

So what we did at Just Giving, interestingly, was we spent a lot of time on behavioral economics; we spent a lot of time on just bringing the organization up to speed and understanding the frailties in human decision-making.

**Daniel Whitenack:** So that's a pretty new term to me... Could you explain what behavioral economics entails?

**Mike Bugembe:** Yeah, it's a field -- I'm not too sure when it began, but the key names when you type in behavioral economics are people like Dan Ariely and Daniel Kahneman... It looks at human beings as irrational beings. If you look at economics and the decision-making from an economic standpoint, it looked as human beings as very rational beings, who are always seeking to maximize payoff with each of the decisions that they made. But I think as research continued to carry on, they found that we weren't always behaving that way, and we were actually behaving almost irrationally, and it was because of this sort of biases that came into play... Just like with the example that I gave you - because I said 80 million, most people were anchored at that number, right? Which is a bit irrational, because a rational econ, if you like, would have thought through a different process. They wouldn't have been nudged by that number; but we are human beings, and this is how this just works.

So the field of behavioral economics, I believe, came into play to try and understand, research and explain how we are nudged or how those biases affect our decision-making.

**Chris Benson:** Yeah, it's been really popular lately. I've read a bit on it recently, and I know it's very much on the rise, and trying to kind of fix some of the fallibility in traditional economic thought... But I think it's pretty fascinating that you had the foresight to bring it into the organization and train people in the field enough so that they could get the benefit of it.

**Mike Bugembe:** I think one of things that I would say it did, and this wasn't deliberate, but it seems to have worked, is -- I find in a lot of organizations, whilst people get very excited about data, there are a lot of people who get very nervous about it as well... Because at a data scientist, you'd look at data in a way that no one else has looked at before; you're able to find things that people haven't seen before, and therefore you're challenging things...

An example is imagine going to a CRM manager, whose job it is to send e-mails to an audience to try and get them to come back to your platform, for example... And the traditional methods for that are using things like recency, frequency and monetary value, as a simple equation. And then you come up to them and you say "Well, I have an algorithm that has a 90% improvement on your approach in bringing people back..." They'll be like, "Well, I've been 20 years in the game, so why would I listen to some mathematical formula...?" It becomes a very personal thing for some people, so you have that human challenge of them being threatened by data, as well as being excited by data.

**Daniel Whitenack:** \[00:20:19.24\] Yeah, that actually leads right into what I was just thinking, which was what kind of strategy can you put into place to express to people their built-in irrational thought, while at the same time not negating their background and their expertise, and giving them some light at the end of the tunnel that "This is actually gonna improve what you're doing. You're gonna be able to make more sales (or whatever it is)", versus just kind of telling them that they're irrational... Which maybe they are, but probably no one likes to hear that, right?

**Chris Benson:** That's a high-wire act right there.

**Mike Bugembe:** \[laughs\] A lot of the examples we were giving them was the interplay between gut-driven or a gut-informed decision, an experience-informed decision, and a data-informed decision. And what we did is not only did we show the frailties of human gut-making decisions, but also showed the frailties of data... Because data itself is also limited; it's limited by the data that's captured, you can add ten more data sources to an algorithm and suddenly it will give you a very different answer. You can just add more data of the same labels that you had previously, and you will also get a different answer.

Data as well has its problems, so what we were trying to do was look for the balance, essentially... The balance that is not fully leaning on either side - it's not fully data-driven, and it's fully gut-base-driven, but it's really a combination of the two. It's how we understand and are aware of our -- let's say the things that don't work very well in human decision-making, and where data can supplement and improve that, but at the same time not neglecting their gut and experience... Because we as human beings, interestingly enough, are one of the best data machines out there; we take data from a range of sources, not just our five senses.

I think there's people who talk about a whole range of senses, I think in excess of ten I think I've read, where... You know, take for example how you can close your eyes and still point at your nose; that's a sense that is not touch, it's not taste, it's not any of those, but it's some sort of directional sense that we have automatically.

So we're really good data machines, so we shouldn't ignore our gut at all... And that was a big message that we were saying - there's something in that, because we probably captured more data than the machines have, for now. So it's getting that balance right.

**Daniel Whitenack:** Yeah, so would you say that, in that light, a good guiding principle is to kind of frame things for people in the sense of augmenting their valuable capabilities, rather than replacing everything that they've done, right? But kind of utilizing their amazing capabilities, their skill, their background, but augmenting them to make them more effective or bring new things to light, or whatever that might be... Is that an okay way to frame it?

**Mike Bugembe:** Yeah, I wish we had your language to begin with; it might have made the journey smoother. Yeah, augmenting, I think, is the way you should say it, because you're giving credit to their own decision-making, rather than dismissing it... All you're saying is "You bring something to the table, but what we wanna do is enhance it."

**Chris Benson:** So when you're considering that and you're kind of educating them and getting them into the right mode of thinking about this, and bringing those practices into the organization's culture, and accounting for the fact that you have behavioral econ, and then you have more the traditional data strategy, how do you build a strategy out of all of these disparate parts into a coherent message, that everybody can understand and follow with?

**Mike Bugembe:** \[00:24:19.25\] Yes, that's a fantastic question. One of the things about data is that -- a good friend of mine describes it as a team sport. The data team alone cannot do that; the strategy needs buy-in from the entire organization. That's one of the reasons why I think I always push forward the lead of the data team to be part of the exec team, because they need to span across the entire organization...

But in order to develop the strategy, there's several things you need. Firstly, you need to make sure you understand the organizational strategy, and by that I mean you need to know the objectives of the organization, the boundaries of scope and the approach... And usually, those organizational strategies are hidden in reams and reams of documentation, and you've gotta just try and simplify it, because data also needs an objective to work towards.

So when building the strategy, the first thing that we did was made sure that we could disseminate the organizational strategy into a sentence that everybody could understand... And also that we could work very easily with data, so it was a little more discreet in its numbers, it had very clear numeric objectives, a timeline which it was working with, a bounded scope, so it wasn't just any free idea, and also a clear advantage that we were using.

For example, at Just Giving, the advantage that we had is that we had millions of causes on the site, and nobody else had that. So we had to work with that piece of content, rather than just coming up with something arbitrary at the time.

So getting the business strategy right was one of the most critical things we needed to do in order to get the data strategy. It was then from there that we went on to start looking at the possible use cases, and those use cases were really disseminating those decisions, as I said, to try and understand "What are the decision we're making operationally?" For example, sending an e-mail about a new campaign - let's say there was an earthquake... For example, we had the earthquake in Haiti a while ago - so who exactly are we gonna send that e-mail to? Because every time you send an e-mail, as with any decisions, there are tradeoffs; something happens, you send the e-mail, and there are people who will unsubscribe. That means there are less people available for us to e-mail for the next cause, so we need it to be personal.

So that was a decision that we had to make, "Who do we send that e-mail to?" and that's where we could apply AI. So that helps with the use cases.

Then also looking at the decisions that are being made externally by our audience... So when someone comes onto the site, are they deciding how much they want to give? Are they deciding who they wanna give to? Are they making a decision on whether they want to come just read, or absorb content? So trying to understand those and support those decisions...

And the last thing, actually -- so I said the strategy, the use cases... So the last thing in the data strategy was understanding where you are as an organization, so looking at it on almost two spectrums. The first spectrum is what capabilities do we have to develop any of these data solutions? Are we at the stage where we can only say what's happened and why it's happened, or can we build algorithms that can predict what's happening and even prescribe?

And the second spectrum we were looking at was "How well do we know our decisions?" Once we get an indication of where we are, you almost have a gameplan, a roadmap of how you're gonna get to the desired destination. It was a lot there, so let me know if I need to go through any of it again.

**Daniel Whitenack:** No, I appreciate that. That gives a ton of great context. Okay, Mike, so I definitely have learned a ton about implementing data-driven strategies and a strategy towards decision-making in a company culture, but after all, this is practical AI, so if we get to that point of kind of scoping out certain decisions that we want to tackle within a company in terms of data-driven decisions, how then do we make the leap to considering AI an machine learning efforts? Was that something that you considered right off the bat as you were implementing the strategy, or did that come somewhere down the line?

**Mike Bugembe:** \[00:28:23.07\] You know what, it's something we had in our back pocket the whole time. We knew we did have to take the organization on a journey, but there were some of these that were -- I've mentioned this a few times, that e-mail example was one that was so obvious to us very early on. We needed a machine-driven way to very quickly identify who was interested in what cause, because no matter how intelligent we thought we were as humans, we just could figure that out... Whereas there were a lot of clues hidden within the data. But we needed to go through that journey of getting the strategy understood and the use cases, which this one was one of those... The other thing that we needed to do quite practically - and this depends on where the organization is - is you needed to get an indication of what the payback was. So as the result of doing this, what's the cost versus the corresponding payback, if it works? So there were some calculations that we had to do there... Which makes the case for investment much easier.

Once you've got to that stage, this is where data continues to be a bit of a puzzle - you're not done yet. So you can have your gameplan, you can have the areas for which you know exactly where you're gonna apply some algorithms, you can get a team deployed on starting to think about "Are we gonna use a collaborative filter, or a genetic algorithm?", they get really excited about that... But there is nothing worse than spending all that time building your really sophisticated algorithm, and it sits on the shelf and it never gets used. Ultimately, this has to be deployed either on some level of production, or given to a team for them to actually use it.

So your biggest challenge after that is getting the culture of the organization, getting them to value and to have new behaviors for where these algorithms actually get used.

**Daniel Whitenack:** You're speaking our language here at Practical AI, you're helping us make it practical. In terms of that - is that something that you just kind of like... You know, in building up this strategy, is that something you instilled in people from the start of a project? ...but the real value comes once things are operationalized and deployed, not when things are conceptualized or when a model is trained in a Jupyter Notebook, or something... Is that something that you instilled in early, that mindset, or is that something you learned -- I mean, I think where I learned that is by lots of painful scenarios, where it wasn't the case...

**Mike Bugembe:** Yeah, we had a lot of -- I don't know how to get away from the painful scenarios, because behavior change is very difficult to instill... Now, imagine being a data type individual, which we are, where -- you know, our interests aren't in "How do we change people's behavior?" personally. There are psychologists that have that as a profession, so for us to try and jump into that, it's always going to be difficult.

**Daniel Whitenack:** I'm definitely not a psychologist. Maybe Chris is....

**Chris Benson:** No, my wife can verify I'm not.

**Mike Bugembe:** \[laughs\] But this is why there's lots of other pieces that need to come into play. For example, if you have the buy-in of the exec team, that helps, because then working with each of the individual teams, you can begin to make sure that they get into the -- change the reward or value base for using some of these.

I've found a really simple equation to help sort of summarize behavior change from the cultural side of things... It was by a champ called B.J. Fogg. He does a lot of product behavioral design stuff, and he has a formula which is B=MAT. B is for Behaviour, is equal Motivation, Ability and Triggers, and it's the multiplication or the product of each of those three things... Which means if any of those don't exist, you don't get a change in behavior.

\[00:32:19.03\] By motivation, you've got to get the organization in sort of a behavioral approach where they are motivated to use the algorithm. So there's something -- they've got skin in the game, there's something interesting there for them as well, and you can't do that without working collaboratively with the teams. That's a key thing that the leadership team has a huge amount of involvement in. You cannot do that alone as a data team, the motivational structures for doing that. If they don't exist - and I've seen this and I have experience with this - where you can build something really amazing, will show an uplift, all the math adds up, it's definitely something worth doing, and you've built it, but it just doesn't get used because there is no motivation to do so.

If individuals are rewarded by doing something else, they would really struggle to sort of go off-piste. So motivation is a big one.

Ability - that's massive. One of the things we forget as data individuals is we don't speak English to the rest of the organization... So we almost limit their ability, or create this environment where we just look like really brainy eggheads and we're not so accessible.

A good example is how you can build that algorithm but it's not designed in a way that your team can use. You CRM or your customer service team have to be able to have the ability to use it and understand it. So we as data individuals have a lot of work to make what we do more accessible, and the output of what we do to be way more accessible, and that's there in the ability. If it's difficult and there's so many brain cycles required to even process the output, ability goes down, and then that breaks that equation straight away.

And the last one is Triggers. The other thing that I've seen and I've also been privy to is we can build some amazing things and never shout about it. I remember being a frustrated analyst many years ago, sitting there thinking "How come all the marketing teams get all the accolades, and we've got all this amazing stuff here...?" and then your CEO would come in and say "Well, you never told me about it." That's what the trigger is. We need to work on our communication, and in fact, at Just Giving we took the whole data team and taught them how to communicate, how to share some of the stuff that they're doing, in English, in a language that the rest of the organization can understand.

We began to slowly see some real changes in behavior when we took this equation and intentionally addressed every single one of those aspects.

**Daniel Whitenack:** You mean the rest of the world doesn't communicate in Python and DataFrames?

**Mike Bugembe:** \[laughs\]

**Chris Benson:** You mean there's another way...? \[laughter\]

**Daniel Whitenack:** I apparently need to learn a few more things.

**Mike Bugembe:** I mean, the fact that you guys are running a podcast is pretty amazing. I've gotta tell you, I've got a great story about an analyst who -- we took the team off-site and one of the things we did first was to do one of those psychological evaluation tests to see whether you're a blue type individual, a red type individual, or some of those Myers-Briggs type things.

The whole team came out exactly the same - we were all very blue, introverted type individuals... And you could see immediately where the problem was, because we had no one who was yellow or green to communicate with the rest of the organization.

The classic example was we had one analyst who used to start a sentence, when he was talking to the business, with the following words: "Let me explain to you how stupid you are", and then he would carry on his sentence.

**Chris Benson:** Oh, boy...

**Daniel Whitenack:** That's not effective? \[laughter\]

**Chris Benson:** No, Daniel. That's not effective.

**Daniel Whitenack:** \[00:36:03.21\] I am learning so much! \[laughter\]

**Chris Benson:** Okay, so I have been learning so much as well, especially as we've dived into behavioral economics... Because I don't think we've ever touched on that in any of these episodes that we've had to date, and I'm pretty fascinated by how you've taken strategy and added that in, and kind of all the various facets that you've been talking about. What I'm wondering is could you tell us what you think makes a good AI use case to dive into? And if you have a specific example that you're able to share and kind of talk about how you made it real, at a nuts and bolts level... I would love to hear that kind of pedal to the metal kind of thought process.

**Mike Bugembe:** Yeah, I think -- I'm now reaching in my head -- I actually had an approach that helped to -- okay, so I think what we were thinking about was there's lots of decisions that take place within an organization; you have some operational, you have some strategic. A good AI use case is a decision that is repeatable. So it happens more than once, and whenever it happens, it's relatively the same questions asked. I keep referring to that e-mail example, it's the one that's on top of my head.

Let's take Amazon, for example. Whenever somebody has put something in their shopping basket, there is always the decision of "What else could we serve them in order to increase the basket size?" So you get that recommendation at the bottom. That decision is a repeatable decision, and it's a repeatable decision at a specific point in that. That point in time is very clear - every time someone puts something in their basket, you know you have the opportunity to up-sell them so that you can increase their basket size. That decision happens all the time.

So the questions you would ask is "Can the organization identify when that decision will be made?" Yes. "Can they decide or have an indication of what information is considered every time that decision takes place, and it's the same information, and are the possible actions that they could take consistent, so it's relatively the same ones?" Then next you say "Can the outcome be measures?" One of the most valuable things about working in AI and machines is how measurable the outcomes of the algorithm are... Because ultimately, it's an investment; data scientists are not cheap, cloud computing costs, although most say they should be cheaper, I always feel to some extent they can be more expensive than on prem... But then also your costs can go through the roof with the amount of compute and the amount of data that's available.

So looking at some repeatable decisions that are relatively complex, but they are measurable. That's the sort of lens that we would look for a good AI use case.

**Daniel Whitenack:** Yeah. You already mentioned data scientists are expensive... One big piece of this that's really tough is actually building up your team for AI and the operations around that, and the building of the models, but the operationalizing of them, and the monitoring of them... In terms of your experience at Just Giving or maybe other places, have you taken a strategy of kind of building up software engineers that are existing within a company into kind of AI engineers, or machine learning engineers? Or kind of just brought in fresh AI and data science people? Or has it been a mix of both? Do you see advantages or disadvantages to one or the other?

**Mike Bugembe:** Alright, so it's a mix of both. I'll answer this by going through the roles that I think were really critical for our team when we were building the team. There were essentially four key roles that we were looking for.

\[00:39:57.22\] The first was your traditional business analyst. This is the individual that is perhaps more communicative, they've come from a consulting background, they're almost the front-facing ones; they're the ones you take out of the basement and allow them to speak to users. These are quite important, because data always needs a face, and this is a representation of that... But we want them to be able to speak some of the languages of the rest of the business, go native if they need to... But they really understand the decisions and the key needs.

Then we've got the engineers. So one of the things we've stumbled across which was very interesting is when wrangling with large amounts of data and making it available for data scientists, what we found was -- you know that Pareto rule that 80% of your time is spent on getting the data ready, and only 20% on building the algorithm? We thought we would try and turn that on its head, and reduce the time that a data scientist spent on data preparation.

So we built a team of data engineers whose sole purpose was to make data go really smoothly from the source, all the way to being available for whatever algorithm was going to be built, so that the data scientist's time was not spent on getting the data correct, and the majority of the time was spent on just making sure it was in the usable format for whatever approach they were going to use.

Let's say they needed to do a logistic regression, for example... The data engineers would make sure that that data was set up so that you literally just had to run the logic command, whether it was in R, or whatever it was that you were using, and spend more time on the results, and perhaps consider a different approach to whether you wanted to move it through to a decision tree, for example, or a random forest... But to try and take away the expense that was being paid on working on the data side of things; so we had data engineers who could do that.

**Daniel Whitenack:** I think that sounds like a good way to both make things efficient and to keep data scientists happy, probably...

**Mike Bugembe:** Yes, exactly. And of course, there's the mix and match, because the data scientist ultimately is the hero role that everybody wants to be... So we had to just make sure they all had their strengths... The data engineers typically came from strong ETL backgrounds, but they were coders to some extent as well, because a lot of the data that needs to be moved around sometimes it's easier just to write some code, rather than build the traditional ETL funnels that we used to have... Spark jobs, for example. Data engineers have the capability of doing those.

And then finally we found that the data scientists couldn't build production-ready algorithms... So you could run it in R, get the results, and you still needed to build the model to work in real time for when a user came, if it was one of those, or at least to have the calculations available and the results available, so that the automatic decision could take place.

A quick example would be when a user comes to decide which charities should we show them and in which order; it's a calculation that needed to take place overnight, but then we found that it was changing every hour, as soon as there were different interactions that were taking place.

So the data scientists couldn't build the solution - a robust solution at least - to work in real time; we needed engineers to do that. We needed engineers who could understand the language that the data scientists were using, but then who were experts at building production-ready systems.

So you can see, all of these roles - they need to have the same fundamental skills, but then they have their areas of expertise; so the engineers we were training into machine learning, so that they could understand what was taking place, but really what they were good at was engineering. The data engineers - really what they were good at was working with large sets of data, but they still needed to have machine learning training, and so forth.

The data scientists - we reduced their work on the data prep and made them focus more on machine learning. Does that make sense?

**Daniel Whitenack:** \[00:44:02.09\] Yeah, that makes a lot of sense. I know that can be a hard road to navigate, but I think you've expressed it well in the sense that you wanna build up people's skills, but also build up people's skills into what they're interested in and what they do well... As already established on another episode, I actually really like data munging and cleaning, so maybe I would actually fit more into the data engineering part.

**Chris Benson:** There's a sickness that Daniel has in this. \[laughter\]

**Daniel Whitenack:** Yeah. It is what it is... I won't deny it. \[laughter\]

**Mike Bugembe:** That's a good place you've come to though, where you've looked inward and you can see what you enjoy most about the whole data science process, if you like... Because some people needed some convincing, sadly... Because the most famous of those four roles is the data scientist, which a lot of the team were aspiring to... So for some, we just called them a data scientist, but we knew they were data engineers.

**Chris Benson:** Gotcha. So I guess having gone through all this process over eight years, I guess, looking back at challenges that you've had, are there any standout lessons learned or things that if you could do over that you might do differently? I thought that might be a good one for winding the conversation up.

**Mike Bugembe:** Yeah, absolutely. I really wish I educated the organization as a whole on what data was and what it can do, and I wish I had started at that point... Because I've found I was explaining that to different individuals at different points in time... Whereas if we had done a bigger exercise, almost like a transformational exercise and just saying "Look, the whole organization needs to be educated on this", I think we would have had less problems; I'm not saying we wouldn't have had any, but we would have had less problems.

This became even more clear to me when -- I remember speaking to someone at Facebook and they were telling me that the whole organization goes to a data academy for two weeks; and a small part of that is understanding how to work with SQL, but a larger part of that is understanding how to ask the right question. This really just hit home to me, because if we had done more in educating the organization, we would remove a lot of redundant work as well, where people were asking things because they were just interested, or they weren't really asking the right question... And sometimes data teams can be quite literal; if they get a request from the business, they will do exactly what's been requested, but if you dug down, the real question was something else... And that's a fault on both sides.

\[00:46:57.00\] So I loved hearing that, and there are other businesses that are creating what they call Data Universities, where they put the whole organization through it just to get them up to speed primarily on "What is this thing called data?" Let's demistify some of the terms that have come around and confused a lot of people, and why is it something that we can make more democratic. You don't have to be technical to understand what data is and how it works, because we use it every day. We use information to make decisions all the time, and just demistifying that whole process for the organization -- I wish we had done more of that; I think we would have got a lot further. We've developed some amazing stuff, but I think the road would have been much smoother.

**Daniel Whitenack:** Awesome. Well, I know that I have learned a ton today. I've really enjoyed our conversation. Thank you so much for joining us, Mike. We'll put in the show notes a link to Mike's information online. Also, he's got this book coming out; you've heard a lot of great principles today, but I think that's gonna be a really great resource for people that are trying to create this sort of culture in a company... So we'll put the link in our show notes as soon as that's available; I know it's still in the works, but we'll put it there once it is available.

Thank you so much, Mike. I really appreciate you walking us through this process.

**Chris Benson:** Thank you very much!

**Mike Bugembe:** Thank you as well, very much. Thank you so much for the invite. It's great to be able to talk about this stuff. Me personally, I'm really motivated by organizations getting this to work. There's a lot of hype around it, but equally, there are a lot of organizations that are just struggling to get the game-changing value that data promises, so... If we can all sort of evangelize this a bit more, then I think we can really see some big things happen... Not just for commercial gain, but even for us as people in an intensely information world; data can help us get smarter, live healthier lives, and so forth. I'm very excited about what could happen.

**Daniel Whitenack:** Awesome. Yeah, that's super-inspiring - making AI practical since 2018, here on Practical AI. \[laughter\] Thanks, Mike, and really looking forward to the book. I hope to talk again soon.

**Mike Bugembe:** Great, thank you very much.

**Chris Benson:** Thanks. Bye-bye!

**Mike Bugembe:** Bye!
