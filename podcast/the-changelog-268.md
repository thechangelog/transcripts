**Jerod Santo:** So Ed, you're gonna have to help us out, because we first learned about Serenata de Amor in our ping repo from Fabio Rehm. Thank you, Fabio, for making us aware of this project. I have to admit I probably would have never found it on my own; I'm so grateful that it came to us, because it's very cool what you guys have been up to with this project down in Brazil.

Give us a little bit of the back-story. Tell us what it is first, and we'll dive in from there.

**Eduardo Cuducos:** Okay, good. First of all, thanks, Fabio, once more. Anyway, I think we are pretty good at technology stuff; by 'we', I mean people who started this project... But some of us were not so familiar with politics in general, so at a certain point Irio one of the founders, decided to get more involved in politics, and he might have asked a question that goes something like "How can I use the knowledge I have in technology (he's a great data scientist, he's a great developer) to go to a sea that is unknown to me, like politics?"

\[00:04:18.03\] As we live in an age that we have a lot of open data about our government, it was kind of one possible answer to use data science to understand what this data was telling us about our government, so we can know who should we vote for, or at least who shouldn't we vote for... So I think that is the very beginning of the idea of Serenata de Amor.

**Jerod Santo:** So if you're gonna summarize where we're at today or what it does currently, just at a big picture -- we'll dive into the details, but what does it do?

**Eduardo Cuducos:** We started to take data from the -- I think it would be the Lower House in the USA, but here it's the Chamber of Deputies. Those guys do a lot of expenses while they are working on their job, while they are representing us in the government. So we started to look at the data about those expenses and tried to find bizarre things, suspicious things in those data sets, because this would be corruption, or at least a kind of immoral or irregular use of public money. This is basically what we started with, and as we have just founded for a short stint, basically that's the plan today.

We are still looking for further data -- not looking for, but looking into (does that make sense?) this data set and trying to understand what people are doing with our money; the people are our representatives, and our money - the money we pay for government, like taxes etc.

**Jerod Santo:** The tagline on the website is "Artificial intelligence for social control of public administration", and that is the project focuses around the Brazilian government and these officials that you're speaking of, these Congress people, and uncovering via artificial intelligence in the system that you built - I think you said the word "odd" - potential corruption in their spending. Is that fair?

**Eduardo Cuducos:** Yes, yes. Completely. If I might jump into an example, it may be easier to grasp... A very simple example - Congress people can pay with public money for their meals, for example, but only their meals, not for someone who works for them or someone they're meeting, for whatever reason it is. And we can use data science and machine learning to take all those receipts from restaurants and identify which one is really an outlier... So probably there's something odd with this outlier, and maybe the guy is paying the lunch for someone else when he/she shouldn't. That's the kind of thing we're looking at.

**Jerod Santo:** Right. So you gave us the initial idea, and now we know what it is, what it does. Let's hear the back-story on bringing this software to exist. You said the idea happened... I'll lay out there that two months of development was crowdfunded, almost 1,300 people participated in that crowdfunding event... Tell us that story, when the founder had the idea for this project and how it came to be.

**Eduardo Cuducos:** \[00:08:09.03\] The founder is called Irio, and he had at a certain point that question in his mind "How can I use the technology I have to go deeper in politics?" He approached some friends - I was one of them - and we looked at his idea and said "Wow, that's amazing. Let's do something about it." The three of us were very familiar with crowdfundingm for different reasons, and our idea was "Okay, let's put a project on a crowdfunding platform, so we can raise money to do a kind of MVP and kind of show people that this is possible - we can actually use technology, we can use machine learning to make sense of it." There's like tons of data that is public by a law in Brazil, and in most of the countries, wherever they are.

This was kind of a crazy thing to do, because there's no -- we couldn't expect much from crowdfunding in terms of money; it wasn't feasible to expect money to work for a full year in the project, so we kind of estimated that we could raise money for two months. Two months is a very short period of time for a data science project, so we decided that we should start with a very simple idea, get our hands dirty on it and just show people that it's really possible.

So we gathered a team - I think we were six or seven in the beginning - and we put the project online; by project I mean the crowdfunding campaign. It was roughly one year ago, I think it was September 2016. So for two months we were open to donations, and then we got money to actually work three months on the project; it was better that we expected.

So what we did is translate law into code to \[unintelligible 00:10:31.24\] those data sets. Eight, or -- no, I think I'm over-estimating it; I think it was in the beginning five or six hypotheses of how people could be using the public money in illegal ways, or not so moral ways of using it. So that's what we actually did, how it got started.

What was pretty much important was that we got a lot of support from the media in Brazil. In a certain week we got a cover of the biggest newspaper of the country, and three minutes on the biggest TV news in the country. I think this gave us a lot of supporters in terms of not only code, but people that were very interested in what we were doing.

**Adam Stacoviak:** Something you said that was pretty interesting there was "translated law into code", if I heard you correctly. Is that what you said?

**Eduardo Cuducos:** Yes, yes.

**Adam Stacoviak:** What kind of process was that?

**Eduardo Cuducos:** It was literally going through law text... So we have a document - I really don't know how to say what this document is in English; it's not a law, but it's a kind of agreement from the Lower House, from the Chamber of Deputies, saying how much is this money we're talking about and how representatives can use it.

**Adam Stacoviak:** \[00:12:08.20\] Okay. So kind of like guidelines on how public officials can use public funds to go about doing their jobs day to day.

**Eduardo Cuducos:** Yes, yes. Those guidelines, for some reason, they have the same weight as the law, if you actually decide to sue someone, for example, because there's no law above it. It could be, but there's no law, so this is kind of the main piece that you would look at if someone sued a Congress person and said "Hey, you are not using this money as we expect you to do."

So first of all we have to understand law; that's how it really begins. And I think the second step is a bit \[unintelligible 00:12:54.02\] because once we understand this piece of law, this agreement, these guidelines, we should think okay, so if I was to try to -- how can I say...? A little workaround to use this money in another way, how would I do it? And then we could think about "Okay, let's say someone actually did this thing we just suggested in the brainstorm... How could data tell us that someone did that?" and then we start to really organize the law into code. So we have the law, we have a way to by-pass it, and we have a way to analyze data that would say that people used that exact by-pass we've thought about, and then it's kind of easier to write code on that.

**Jerod Santo:** So let's lay out a few of the findings... I think some of the details here are important, because it's specific to the setup that you have there in Brazil with regards to the money going to the Congress people, how much they're able to spend and the fact that they do report these reimbursements, or receipts, or however it goes in, that you can use for that data.

The cool thing is that the robot -- you guys gave it a name, right? Rosie? Is that the right name?

**Eduardo Cuducos:** Yes, Rosie. It's named after the corrector from The Jetsons.

**Adam Stacoviak:** Yes... The maid I think was Rosie, right?

**Eduardo Cuducos:** Yes, the maid from Jetsons.

**Jerod Santo:** There you go. Yeah, so Rosie has some findings, and they're on the website, which is linked up in the show notes, for those interested... But just a few to summarize - so 219 Congress people max out their monthly spending, that's one of the findings. One Congress person usually gets 30 gas tanks filled each month on average, which seems to be outside of the norm. Two Congress people have claimed 13 meals paid in the same day, and as you said, they're able to pay their own meals, but not other people's, so that would be a strange one...

These are the kinds of things that Rosie is uncovering, and I think it's important to understand that this works because the Congress people are reporting this. Tell us the process of how they actually send in their reimbursements and what that all looks like.

**Eduardo Cuducos:** Okay. Brazil is a big country and we have a lot of representatives basically because we have a lot of different states, different sizes... To sum up, we have a little bit more than 500 representatives; it's 513, if I'm not wrong. They are reimbursed for those kinds of expenses - expenses with meals, with security, if they wanna subscribe for some content (whether it is digital or printed, it doesn't matter), consultancies... Which kind of makes sense.

\[00:16:14.17\] They have to vote for a law, and it's not their field of expertise, so they can hire a consultant or a consultancy to help them. Transportation, because in theory, in democracy they should be close to the people who voted for him, so they can be reimbursed for traveling from the capital, which is in the middle of a massive country, to whatever part of the country elected him or her... Different kinds of expenses, so it works in a reimbursement process. They pay from their pockets, they save the receipt and they submit it to the house, to the Chamber of Deputies, saying "Hey, I just spent 10 bucks with this", and show the receipt, and they are reimbursed.

The problem is actually that we've been to the Chamber of Deputies and there are actually four people working in this process. In the office there are not representatives, they are -- how do you call it? Public servants?

**Adam Stacoviak:** Yeah, they've got an office; it's their job to kind of hang out there and do their thing.

**Eduardo Cuducos:** Yes, they are part of the government but they are not the politicians themselves. They're the \[unintelligible 00:17:30.17\]

**Adam Stacoviak:** Public servants, yeah.

**Eduardo Cuducos:** Yeah. Anyway, so there are four people to actually receive and analyze and decide whether to reimburse or not all the receipts from 413 representatives. They said they actually receive more than 1,500 claims for reimbursements every day, and it's a massive job; it's basically impossible to handle this job without the help of technology. And actually, they are handling this without the help of technology, and probably that's why we have a lot of work for Rosie to do, because... They handle it, but we don't trust it's possible to do a good job. If I were in their shoes, probably I'd miss a lot of things, and I guess that's what's happening.

**Adam Stacoviak:** It's kind of like having checks and balances, right? You have a human doing the job, but at the same time that person could do errors, and that's part of doing any job, right? But Rosie is there to cover the checks and balances, to make sure that what goes through the system, these humans beings doing this awesome, hard job, is following the law.

**Eduardo Cuducos:** Yeah, that's it. Once, in a presentation about the project, I just made up a really simple example... I was saying okay, so imagine you are one of these guys over there, and there's a pile of receipts on your table, and you have to just look through them and just say "Is this a very expensive meal, like something that is not right?" And I just said to the public, imagine you have a pile as tall as the Lord of the Rings (the book, of course, not the DVDs)... \[laughter\]

**Jerod Santo:** Long movies, too...

**Eduardo Cuducos:** Yeah. \[laughs\]

**Adam Stacoviak:** One receipt per second of the movies... \[laughter\]

**Jerod Santo:** There you go.

**Eduardo Cuducos:** \[00:19:49.23\] There you go... \[laughs\] And I just ran a quick \[unintelligible 00:19:52.03\] okay, but imagine you have all those in a data set... And for the project we use Python and Pandas, so I'm just guessing, but in ten lines of code I could, from a sample of 1,500 receipts (that is basically what the department gets every day), I say "Okay, from this we have just 13 that are from meals or that are outliers." So in one day you can look at 13 receipts, but you can't look through 1,500 receipts... So that's the idea. And with technology it's easy; it's like ten lines of code and you can automatically approve probably most of them and just pay attention to the ones that probably deserve this extra attention. That's the idea, I guess.

**Jerod Santo:** Yeah, exactly. This is classic human empowerment, right? So the combination of a computer and a human in this case - you have the computer to basically flag outliers, or oddities, and then the human to then... You're reducing the human's load from 1,500 to maybe a dozen. Like you said, the previous number - you couldn't even do that, and then a dozen sounds like you can do that in an hour.

What's hard for computers and they're getting better at it, but they're still not there yet, is actually detecting whether or not this is corruption, right? Is this a false positive, is there an explanation? So Rosie doesn't do any actual reporting, right? Rosie just gives the information back to a person.

**Eduardo Cuducos:** Yes.

**Adam Stacoviak:** It would make sense to have a system though to have humans process the data, do data entry, basically... Obviously, do human flagging as well as part of the process, but because the load is so massive, to reduce the thought process during data processing - or data entry, so to speak - and do that after the fact... That would make sense to me anyways; this seems like the way it should be.

**Eduardo Cuducos:** Yes...

**Adam Stacoviak:** You guys agree, of course...

**Eduardo Cuducos:** Yeah. After the fact? The fact is the reimbursement itself? What do you mean?

**Jerod Santo:** After the data entry.

**Adam Stacoviak:** Yeah, right. So they're putting the data in to (I'm assuming) process it, and say "Okay, this person should get reimbursed this amount of money." They're just processing receipts, essentially, and applying it like "Here's your receipt for Ed. Ed got three receipts today", and boom! It's in the system. They didn't discern whether or not those three receipts was illegal or seemed illegal by any means. They didn't look at the law, they just simply processed the information and put it into the system, and allowed something like Rosie to do its job.

**Eduardo Cuducos:** Yeah... Actually, politicians are pretty clever, I'm gonna say that. There's another layer to add to the discussion. Officially, the Chamber of Deputies, the administrations, the public servants we were talking about, they are only there - that's what's reading in this piece of paper that acts like the law - to say if the receipt used for the claim is a valid one... That says if the federal revenue ever gets the receipt, would the federal revenue say "Yes, this is actually legal for revenue", whatever... Which is bizarre; the other side of this coin is that only the politician (the representative) is able by law to decide if the expense is claimable (probably this word doesn't even exist), like if he or she can claim the reimbursement for this expense.

\[00:24:08.11\] If one of the representatives goes to a restaurant that we know for sure one cannot pay more than $100 for a meal, and he goes there and says "Okay, this is my receipt. I've spent $500", actually by law he is the only person allowed to say if this is reimbursable or not...

**Jerod Santo:** \[laughs\] Oh, man...

**Eduardo Cuducos:** It's bizarre, but I don't think we should go as far as that... Anyway.

**Jerod Santo:** You can only catch yourself.

**Eduardo Cuducos:** Yes, yes. They are pretty clever. \[laughter\] In spite of that, I think there's a lot of morality that we can put to work in our favor - by "our", I don't mean the project, I mean the population of Brazil. A classic example is that the law doesn't say anything about alcoholic drinks, so he could go to a liquor store, or something... But actually, there's the -- I forgot the word; I think it's "jurisprudence", is this familiar?

**Adam Stacoviak:** Say it again?

**Eduardo Cuducos:** Jurisprudence, or something...

**Jerod Santo:** Yeah...

**Eduardo Cuducos:** ...when a lot of judges seem to take the same directions in similar cases. It's not the law, but it's how the judgments probably -- all of them push to this direction.

**Adam Stacoviak:** I think what you're saying is when a lot of judges agree on a certain direction. I'm not sure what that term is called, but if you're got 11 of 12 judges agree on a direction, what is that...?

**Eduardo Cuducos:** Yes, that's the point. I don't know the word, but yeah. So about alcoholic drinks we don't have anything written that it's forbidden, but we have kind of this shared understanding that that's not the purpose for this money, so you can actually report someone in this context, like "He's using public money for alcoholic drinks", and even if it's not the law, probably the judge will...

**Adam Stacoviak:** So there's a lot of nuance, basically, into this process.

**Eduardo Cuducos:** Yes.

**Adam Stacoviak:** So the question back was basically "How do you take law and turn it into code?", and so it's very nuanced. A lot of creative liberty could even be taken, considering this one in particular where, while alcohol is discouraged, it's not lawfully enforced to not do it; it's just discouraged.

**Eduardo Cuducos:** Yeah.

**Adam Stacoviak:** Coming up, we ask Ed how he and his team got involved in this project and what their position is, whether they're civilians, government officials, employers, or none of the above. When they got started this project, they started to report these discrepancies back to the government, and as you may assume, they got a really low rate of response, so they gave Rosie (the robot) a Twitter handle and started making these discrepancies public data, which started to obviously raise awareness, but also ruffle the feathers of those in power. To find out what happens next, stay tuned.

**Break:** \[00:27:40.21\]

**Adam Stacoviak:** What about rewinding a bit when you said "To do this in the first place, the founder of this project, they wanted to get more into politics', and you say that you are working with the individuals processing these receipts. How did you all go about getting -- the idea is great too, but how did you get to actually be embedded into the government at seams? What is your position? Is your position civilians, is your position government officials? Is this project governmentally sanctioned? How did that sell happen, how did you get there?

**Eduardo Cuducos:** We are not related to government. When we started the project --

**Adam Stacoviak:** So this is happening outside of the government?

**Eduardo Cuducos:** Yes, totally outside. We are mostly in a kind of hacker culture, I guess. There's a lot of nuance over there, but by hacker culture I just mean the hands-on mode, really trying to not just wave banners, but let's do some stuff; what can we do with whatever we know?

**Adam Stacoviak:** Is this awareness then? So you're processing this data with Rosie and you're raising awareness back to the government, saying "Hey, here's corruption happening consistently"?

**Eduardo Cuducos:** Yes, I think that summarizes it pretty well. One very interesting point on that is that when we started to find something odd, we started to report, and it's pretty funny - the very first case we spotted was a guy drinking a Samuel Adams beer in Gordon Ramsay's restaurant in Las Vegas, a Brazilian representative... And we said "Hey, we are paying beer for someone in Vegas... That's unexpected."

So we started to report it, and actually we got a really low rate of response, because actually they don't have to reply at all. The Chamber of Deputies, if anyone from the population asked them something - "Hey, there's this data, this receipt here... It's kind of odd. Can you clarify that for me?", it's compulsory for them to give us a response, but it's not compulsory for the Congress person to report back to the Chamber of Deputies, to this administration part of the Chamber.

\[00:32:03.08\] So we started to have a really low rate of responses. We did a kind of marathon of reports in one week, and we reported almost a thousand cases, and we just had 10% of response, which is pretty low. So from that point we started to turn our attention not to officially reporting cases, but bringing them to the public arena, to a public place... Basically, we gave Rosie a Twitter account...

**Adam Stacoviak:** \[laughs\] That seems like the best way to call it out, just to make it public, instead of saying "Hey, can you tell me more about this?" It's more like, "Hey, this is happening."

**Eduardo Cuducos:** Yes, and until that point we were really afraid of publicizing some name of representatives, claiming that there was a suspicion in his reimbursement, because it was pointing fingers, and that wasn't the idea. We shouldn't just point fingers. But in the end it didn't work as we expected.

When Rosie started to tweet, we were careful with the language... So she basically asks for help, a kind of translation of the tweets, because she's a machine so she's pretty much repetitive in whatever she tweets... But it's "Hey people, I've found something suspicious here. Can you help me look into it and see if there's really something odd, or did I just mess it up?", because sometimes it happens, there's false positives. And that was pretty good, because a lot of different people started to follow Rosie, and when she tweets, they start to ask the representatives, like "Hey guys, what is this thing Rosie is saying about you?" So it's like, I don't know, maybe one, two, three, maybe ten people asking the Congress person "What the hell is going on with this reimbursement?" and this was effective, I think... So that's how we kept doing it. Rosie is still tweeting things, people ported the code, so she--

**Adam Stacoviak:** What's the Twitter for Rosie?

**Eduardo Cuducos:** @RosieDaSerenata, which is "Rosie from Serenata", translating it... I can share the link, so you put it on the podcast if you want.

**Jerod Santo:** Absolutely. I think it's very interesting that the limiting factor in Rosie's effectiveness is the actual structure of the government itself, meaning that you would have to reorganize the way it even works in order for the corruption reporting to have legal ramifications for these people, but you can't stop the spread of the information once it's been found. So while you had only 10% of respondents with these claims that were being submitted, now you can just say "Well, if we can't restructure the government, we can at least bring to light the corruption into the public forum", and then the individual people can hold their politicians to the fire. That's really cool.

**Eduardo Cuducos:** Yeah, that's it. That wasn't our first option, that's the only way we found, so we went with that.

**Adam Stacoviak:** That's interesting that your perspective first was to just silently whistle-blow back to the government potential corruption, or potentially just an error or an oversight - not so much saying "These people are wrong, they're breaking the law", maybe it's by accident, who knows? - to get essentially no response, or a lack of response, or slow response, in a lot of cases... And now turn it over to the public and say "Here's a public data set of erroneous receipts happening in our government, and here's who is to blame."

**Eduardo Cuducos:** \[00:36:16.29\] Yeah, it's interesting, because we work with \[unintelligible 00:36:20.12\] because this is public shaming and you shouldn't do that, like just pointing fingers; maybe people will believe some Congress person because of no reason... But an interesting story is that in the very beginning our idea was to put Rosie to work and she would give us back suspicions, and then we'd have a kind of blind review of suspicions, and then we had a Google forum for people interested in helping us investigate in the suspicion; so we would sort cases and do this bling review, and only after three people flag it as "Okay, this is not a false positive", then we would report it. And that was a disaster, because basically people don't have the knowledge of the law we had, so people wouldn't say "Okay, he was in Vegas and it was just a beer, a small bottle, so it's not illegal/immoral, so that's okay", when actually by the law, it's not written but we have this shared understanding that it wasn't supposed to be that way.

So we shut down this blind review thing in favor of -- which was kind of crazy, because we were putting a lot of pressure on our shoulders, a lot of work on our desk to investigate all the suspicions before reporting. Then we were kind of just tweeting stuff and names...

It was, I think, a really good experience, in spite of the blind review thing, and part of that is because a lot of our followers (or Rosie followers), they ask us stuff. "Can the Congress person do this or that? Which part of the law says this or that? How can I investigate that?" This was really cool; people were not just public shaming - of course, there were some doing it, but it's not the kind of behavior we try to foster. We care a lot about communication, like words and how we put cases, and in our Facebook account we really try to share our techniques of investigation, how we go from a receipt to a decision if it is a false positive or it's really suspicious. This was pretty cool, people's interest in the law, from Rosie's suspicions.

**Jerod Santo:** I like that you're not just raising the awareness, but you're also somewhat raising the education of the public's knowledge of what the law is and isn't. It's like a discussion, a forum around such things that many people would never engage or learn about, not given a medium like this.

**Eduardo Cuducos:** Pretty cool.

**Jerod Santo:** So the question is you've got Rosie Da Serenata... How scalable is Rosie? You have this Twitter account, and it's for Brazil and it's in Portuguese, and the question that I always seem to ask our guests is "How scalable are these things?" The idea of course is free, and anybody, in their government or their locality can go out and build their own system, but how scalable do you see this in light of taking the rules that are specific to Brazilian, and porting the system (or maybe even just the idea of this system) to different localities? Because citizens of many countries probably learn of something like this and think "I would love to have something like this where I live."

**Eduardo Cuducos:** \[00:40:08.23\] Okay, I love to talk about questions like that. First of all, I think the most basic step in this direction is that everything we do in terms of code, in terms of technology is in English. Again, we've been criticized because we were letting a lot of Brazilians out, that maybe don't speak English or maybe they don't feel comfortable discussing issues on GitHub in English... But that's a decision we took and we embrace it.

All the code itself is in English and all the comments or the discussions are in this technological forum that is GitHub... Because that's the idea - people should use it to their own realities. So this is the first thing.

The second thing is that to this point we are kind of specialized in analyzing reimbursements. If you have other kinds of public expenses, probably our classifiers won't fit, and you'll have to really write your own classifiers. But on the other hand, we tried to design this software in a way that is pretty much pluggable. Our architecture just requires basically an adaptor, which says where Rosie can find data, and a set of classifiers for this data. All the pipeline would work the same, it doesn't matter if you're pulling data from the Brazilian government or the US government, or my city, or whatever.

So we try to be useful for other -- not only other countries... Of course, other countries for sure, but even inside Brazil it's different... Like, if we are talking about a city hall or the federal government; it's completely different data sets etc. But we try to build this pipeline where we can plug adaptors for data and classifiers. So you can skip knowing the laws of your country, your city, your state, and translating it into code, maybe if you find some similarities comparing your law to Brazilian law. \[unintelligible 00:42:35.25\] it will be way easier. If it's completely different, you probably will have more work to do. But the idea is for us to grow the project to the point that we have a lot of references, and that will make it easier for people to use.

Right now in Brazil I've known about different cities or different initiatives trying to adapt our code to municipalities - just city halls, basically - and we try to support as much as we can. And also, there's this big thing of the idea of the project. The day before yesterday I was told some guys were looking into another kind of expense by the government. Again, I don't know the word in English, but when the government wants to hire a service or to buy something, the government can't just walk into the supermarket and be like "Okay, I need this" and buy it. It has to publically advertise that he's looking for this service, so every company can bid.

**Adam Stacoviak:** I think they call that a call for proposals.

**Jerod Santo:** Procurement.

**Adam Stacoviak:** Yeah, procurement.

**Eduardo Cuducos:** Okay, that's new for me.

**Adam Stacoviak:** They essentially put out a call like "Hey, we've got a project coming up. We need to have proposals from..."

**Jerod Santo:** An RFP.

**Adam Stacoviak:** Yeah, an RFP. A lot of people have to bid on it, and it's a process.

**Eduardo Cuducos:** \[00:44:05.15\] Yeah, like I'm building a bridge, so different engineers can bid "Okay, I can build this bridge for this amount", and the government is kind of obliged to pick the cheapest one.

So those guys - I've known about them like two days ago - they did this for the city of Sao Paolo (the biggest Brazilian city) for this RFP. They are using NLP to cluster these calls by similarity; so when they have very similar calls with very different prices, there's something wrong, so probably there's someone trying to take advantage of one or another call.

So they actually, as far as I know - I've gone through their GitHub - they haven't used a single line of code we wrote. They could, it's all open source, but I think the idea is spread, and this is amazing, this is really good. You don't have to use Rosie or whatever code we write, but just using technology to help make sense of public data - that's amazing; that's what we really expect to foster with this project.

**Adam Stacoviak:** In this final segment of the show we talk about the importance of open data, but more importantly, making it accessible. This involves data scientists joining the effort to help make this not just public data, but usable public data. They also call out to all of our listeners in Brazil to reach out and get involved in this project. We'll be right back.

**Break:** \[00:45:50.23\]

**Adam Stacoviak:** I think one of the things that gets me personally so excited about open data, public data from governments is that it allows those people out there that have the ability to look at the data and examine it, and potentially cross-examine how government spending is being done and put the power back into the people's hands, versus just assuming that there is no corruption, or there is no illegalities taking place.... That someone out there is looking into this, in ways that aren't just trusted individuals.

**Eduardo Cuducos:** Yes. When we started the project -- later they changed the API, but the Chamber of Deputies, they used to follow this open data loss; it was compulsory for them to publicize this data, but they actually did it in a really massive XML file. It was like five gigabytes. Okay, it's open data, it's out there; you can click and download, and you have all the data from this department from this part of the government, but actually how assessable is a five gigabytes XML? I don't think I can open it in my computer, it doesn't have enough memory to handle a file this big.

And also, is XML the proper file format to make that assessable? I think tech people know that XML exists; if I tell my mom, probably she has no clue about how to open an XML file. So I think it's really good to have open data, but we should be very critical in pondering how assessable it is for people...

**Adam Stacoviak:** Yeah, we've said that before.

**Eduardo Cuducos:** Yeah, and one step further - how can people actually make sense of it? Because if I open it in Excel, or some spreadsheet software, a 1.6 million lines file - how can I actually understand what these lines are telling me? I think it's a really good thing to bring data science to help you make sense of this data.

**Adam Stacoviak:** How many times have we said that, Jerod? It's nice to be open source, but wouldn't it be nice if it was also accessible?

**Jerod Santo:** Yeah.

**Adam Stacoviak:** Open source is one thing, but the accessibility of the project, or the data in this case... We said it at least a dozen times in this show, I'm sure.

**Jerod Santo:** Absolutely. There's a lot of work to be done in taking public data that's public the way that it is described - because it has to be, but there's no investment into it at all; they basically throw it over the wall, so to speak - and take that into usable public data. I know there's lots of foundations doing that kind of work, civic hackers and stuff like that... You say an XML file is bad; well, in terms of programmatic access, it's actually kind of nice. Like you said, it's just humongous and it's difficult to parse reliably, but what's worse is like PDFs or scanned images.

**Adam Stacoviak:** Ugh...

**Jerod Santo:** \[00:51:57.09\] There's terrible forms of public data, and we can't get to the interesting work until we get access to what is rightfully ours, in whatever locale you happen to be in as a citizen.

**Adam Stacoviak:** It's a big problem.

**Eduardo Cuducos:** Yeah, totally. We started to write our own kind of dashboard to browse data. Going through our analysis, we wanted to look into more details on a specific reimbursement, and we needed that kind of dashboard where we can just put the reimbursement number you have all the information... Which reminds me that we don't look only to the data set provided by the Chamber of Deputies, but we start to add layers of information. So okay, the reimbursement was at that company, so go to the Federal Revenue to grab more data about the company; then we have the address of the company, so we can go to Google Street view to see where this company is. There's a lot of layers of that that we add to the original data set.

And actually, this dashboard started as a kind of internal tool for us to do whatever we are doing, and now there's a big effort in the team, in the core of contributors, to make this dashboard more accessible. Because as an internal tool, it was really terrible in terms of UX. We had to know the reimbursement number and some other code, like numeric ID, to get to the data. Now we can search by name, and we can filter just through our state, and let's say a reimbursement from this or that category, like meals from my state in 2015...

I think this is pretty interesting. We've seen journalists doing amazing jobs because we offered this tool for them to browse government data. That's something the government should have done, I guess. Maybe they don't have enough people to do it, maybe that's not their focus... But this kind of dashboard that is not technical, it doesn't require Python or Pandas or whatever for the user - that is something really important; it doesn't matter if it's a kind of civic hacktivism stuff or if it's provided by the government itself. This is the kind of thing that really should exist out there.

**Adam Stacoviak:** Yeah. Maybe something that's sitting on everybody's thoughts, lips, whatever, as they're listening to this show is like "This name, Serenata de Amor." Serenade of Love, if you translate it into English... Why this name? Where did this come from?

**Eduardo Cuducos:** A literal translation wouldn't make sense, because it'd be Love Serenade, I guess... Serenade is like when people sing a song for someone who he/she is in love with, right?

**Adam Stacoviak:** Right.

**Eduardo Cuducos:** But actually, this is the name of a very famous Brazilian chocolate... Which is kind of even more bizarre, I guess, but the point is--

**Adam Stacoviak:** A lot of our listeners are really into chocolate. \[laughter\]

**Eduardo Cuducos:** Okay, good thing.

**Adam Stacoviak:** I know this by our downloads. Certain cities that are really into chocolate - big downloads in those cities. \[laughter\] Just kidding. I'm assuming our listeners like chocolate. I like chocolate.

**Jerod Santo:** It's a pretty safe assumption. Most people like chocolate. Who doesn't like chocolate? I mean, come on...

**Adam Stacoviak:** Yeah.

**Eduardo Cuducos:** But the real reason why we picked up a chocolate name is in the mid '90s there was a Swedish politician, she probably was going to be the next prime minister of Sweden, and for some reason (I don't remember why), they started to investigate her, and they realized that she was using public money to buy stuff she wasn't supposed to buy, and one of those things was a single bar or maybe two bars of Toblerone.

**Adam Stacoviak:** \[00:56:14.26\] Toblerones, yes. Those are really good.

**Eduardo Cuducos:** So it became known as "the Toblerone Affair." I don't know if we have a Wikipedia page for Toblerone, but if you go to this politician page on Wikipedia, it's there, the Toblerone Affair.

**Adam Stacoviak:** It is there.

**Eduardo Cuducos:** Yeah, Mona Sahlin is her name...

**Adam Stacoviak:** Yeah, we're gonna link this up in the show notes so everybody can follow along, because this is hilarious -- well, I guess not hilarious in hindsight, but the fact that it's connected to chocolate...

**Eduardo Cuducos:** Yeah... So I think it has a lot to do with the kind of illegal usage of public money we expect to find using data science. Because when there's a big corruption scandal of millions, billions, maybe trillions of whatever currency you're using, probably someone already spotted that and someone is working on it.

When we use big data, probably we are seeing a lot of small cases - a lot of small, a massive amount of small cases - that hardly ever would be spotted by a human being (that was our hypothesis), and I think it has a lot to do with the Toblerone Affair. It was a level of corruption in terms of monetary value very low... So this is the main reason.

There is a second reason that in Brazil when our (let's say) Federal Bureau of Investigation is investigating something, of course they can't say "I'm investigating this case" with a very meaningful name, so they just give random names; I don't know how it works elsewhere. So calling our project Serenata de Amor was a kind of joke with those random names our FBI uses. It's usually "Operation Something", and something that makes no sense. Operation Sand Castle, Operation CarWash, and then we have Operation Serenata de Amor.

**Adam Stacoviak:** \[laughter\] CarWash...

**Eduardo Cuducos:** Yeah, CarWash is actually the biggest investigation on corruption in Brazil that's going on... Anyway. And there's a third reason, that it's basically our \[unintelligible 00:58:42.21\] the kind of gesture we can do as citizens to help our country. It's a cheesy one, but I love it.

**Jerod Santo:** Great name, lots of meaning inside that name... That's excellent. And how can we as the hacker community get involved to help you out, further your cause? We have lots of listeners in Brazil, we have listeners around the globe... How can we help out and get involved?

**Eduardo Cuducos:** Well, we would be really proud of you get inspired by some of our ideas and try to do something local. You don't have to help us out in the sense of making this project better in Brazil for the levels of administration we are working at; feel free to take the idea forward. This would be amazing.

If you are just wanting to get in the code and stuff, we have a lot of issues, from deployment to UX, to dev ops, to data science... A lot of analysis we would like to do and we just can't, we just haven't had time to do it. This is basically because we started with this big crowdfunding campaign, and since then we've basically had no other big fundraising, except a recurring crowdfunding campaign we started when we ran out of money.

\[01:00:17.24\] We are really glad because there's people who are supporting us, but unfortunately the amount of money we raise is not enough to put a couple of people (two, three, four people) working full-time on the project, so right now we just have two or three part-time developers in the project.

So if you wanna write code, there's a lot of things to write, from data science to development, to UX, to dev ops, or whatever. There's a lot of communication stuff going on - there is someone looking after our social media, there's people from law school helping us to dig into laws and think about new ways to get better results out of the report, or maybe you think about new hypotheses that could be translated into classifiers...

Actually, there's a lot of things to do if you wanna help us... Just getting started reading something about us. There's our website - probably the link will go in the podcast post - or maybe in our GitHub, for more tech-savvy people... Feel free to drop a line on GitHub saying hi.

**Jerod Santo:** Very good. Well, Ed, this was a lot of fun. Thanks for stopping by and telling us all about it.

**Eduardo Cuducos:** Thanks for this opportunity. It's really good to talk about this project, not exactly because of the code we write, but the ideas underneath this code are really important for us. It's really a pleasure, it's an honor to be here, sharing these ideas with you guys... So thanks a lot for this opportunity.

**Adam Stacoviak:** Absolutely.
