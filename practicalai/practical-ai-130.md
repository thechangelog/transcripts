**Daniel Whitenack:** Welcome to another episode of Practical AI. This is Daniel Whitenack. I am a data scientist with SIL International, and I'm joined as always by my co-host, Chris Benson, who is a principal emerging technology strategist at Lockheed Martin. How are you doing, Chris?

**Chris Benson:** I am doing very well. How is it going today, Daniel?

**Daniel Whitenack:** Oh, no complaints... Lots of work to do, but all interesting things, and fun things. You know my world, lots of natural --

**Chris Benson:** About the same, just lots of work, and trying to enjoy spring weather. Since I'm living in the South - I live in Georgia - I have a standing desk; I think I've mentioned this to you in the past...

**Daniel Whitenack:** I didn't know you had a standing desk...

**Chris Benson:** I do. I have a regular desk inside, which I need to replace... But I have a standing desk in my sunroom...

**Daniel Whitenack:** Oh, okay...

**Chris Benson:** So it's an open-air sunroom...

**Daniel Whitenack:** From those of you who aren't from the American South, a sunroom is basically just like a room... It's like a patio on the side of your house that has actual glass walls, instead of being open.

**Chris Benson:** I just realized that sunroom is jargon.

**Daniel Whitenack:** Maybe so, I don't know.

**Chris Benson:** I don't think of sunroom as jargon, but clearly --

**Daniel Whitenack:** obviously, in certain parts of the country, sunrooms aren't as maybe appealing as other parts of the country.

**Chris Benson:** I'm showing my bias right there. I didn't understand that. Okay, we're good, we're good. And just doing work and enjoying the weather... Nice way to combine the two. I highly encourage anyone out there, if you have an outdoor area with a roof over it, put a standing desk there; you'll love it.

**Daniel Whitenack:** Put a desk out there?

**Chris Benson:** \[00:04:03.08\] That's right. It's great. Do it.

**Daniel Whitenack:** Yeah, it's a good idea. Today's topic - I'm really excited about it, and the guest... We were talking before the show -- this is actually a topic that's really close to my heart, because as our listeners will know, my wife owns a small business, and has tried to navigate, I think with a lot of success, that business through these COVID times... And of course, that involves a lot of complicated stuff. Her business is a manufacturing business, so there were all sorts of supply chain things, and cashflow things, and planning things that were just really difficult, and I think daily having very interesting financial discussions with her team to try to make it through that time, from PPP loans, to all sorts of things...

**Chris Benson:** She needs good tools, doesn't she? That's what I'm getting from that.

**Daniel Whitenack:** She needs good tools, and good ways to make sense of that financial data and plan accordingly... And I'm really excited on that topic, because today we have Intuit's director of data science Nhung Ho with us. Welcome, Nhung.

**Nhung Ho:** Hey, guys. Thank you for having me.

**Daniel Whitenack:** Yeah. Before we get into all of that great stuff about customer experience, and working with financial data, and cashflow planning, and all of those cool things, could you just give us a little bit of sense of your background and how you ended up as director of data science at Intuit?

**Nhung Ho:** Yeah, definitely. You know, it's interesting, because seven years ago when I joined Intuit, I came from what we'd then call a non-traditional background. So if you look at my background, I actually have a Ph.D. in astrophysics, and before I started Intuit, I was doing a lot of data reduction, image processing, signal processing, and studying dark matter-dominated dwarf galaxies. A whole, complete other world away from what I do now in applied AI.

But what was interesting was that at that time the field was still fairly nascent, and a lot of us who came from non-traditional backgrounds kind of \[unintelligible 00:06:03.11\] over into data science and AI as a field, because we realized, like "Holy heck... We're actually using the same techniques", we just had completely different names for these techniques in our respective fields.

**Daniel Whitenack:** That's so true, right? I came from physics too, and I always had this experience where I was looking at all these data science methods and I was like "Oh, when you're saying you're doing this, you're just using ordinary least squares. How many times have I done that in my life? Like a million times. And you're just using a different word for it. That's kind of weird, but okay, I'll do that."

**Nhung Ho:** Yeah, exactly.

**Chris Benson:** What is it with physicists...? I'm telling you, I think that there are more people in data science and AI from physics than any other field that transfers over. You guys are ruling the world here, in that way.

**Daniel Whitenack:** Well, I think also physicists have this - and maybe Nhung, you have a perspective on this, but... I feel like in physics, for whatever reason, it breeds this sense of "I'm not qualified to operate in this area, but I do feel like I have the expertise to work in this area, so I'm gonna go ahead and jump in and do it." I don't know if you get that same sense... \[laughter\]

**Nhung Ho:** Yeah, for sure. There was -- you know, kind of like figuring out the language of data science and how to translate the skills that you have and the things that you know into this new industry and this new accepted skill... But just knowing that "Hey, I write a lot of code, I know a lot of math, I did a lot of matrix math in my daily life previously - it seems like these are all the things that we do in data science, so let's just go for it."

And exactly as you said, Chris - now if you look at the composition of the backgrounds of folks who are coming into data science, it's all over the place, and the umbrella has really extended. But when I started, I had to go through a program to help me repackage all the things I knew, like "Oh, ordinary least squares", "Oh, it's actually regularization, and regression." So being able to speak that language to convince folks that "Hey, we have the skills..."

\[00:08:10.24\] Because in the past I would write these massive programs to take raw data from telescopes and then actually convert them into meaningful information, and then write papers... And a lot of the day-to-day work is exactly the same.

So that's kind of my journey towards data science... And I specifically wanted to \[unintelligible 00:08:32.06\] because when I was in grad school I used Mint a lot. Like, every dollar counts, and you have to be pretty obsessed with it... But I had a really poor user experience with Mint, and I'm like "You know, I'm pretty sure I can do better than what exists right now."

So when I came from my interviews, they said "Hey, you could totally work on Mint. You can come in and fix this." Like, "Yes, please. Sign me up." \[laughter\] It was just this openness to allowing us to innovate... And I found it kind of refreshing that I told my boss "Hey, I actually hate one of your products. Can I come and make it better?" He's like "Yes."

**Daniel Whitenack:** That's great. It's great to have that environment where you can sort of be comfortable sharing those things and brainstorming solutions. Of course, there's always boundaries within a workplace, but it's really cool to hear that you've found that environment.

**Nhung Ho:** Yeah, and it's been great ever since. As I mentioned, I've been at Intuit for seven years, and one of the things that I specialize in and my team specializes in is we specialize on the applied AI side, so building a lot of production models, features and systems that go directly to our end customer... Because that's something that I'm personally super-passionate about. I really like to take a look at some of the core problems that our customers have right now and figure out "Well, how do I bring my skillset in helping solve that for you and make it easier for you..." Because I previously was a customer, and I think similar to you, Daniel, I have ten siblings, and half of them own small businesses. So it really is a space that really speaks to me, and it's really fun to be able to actually build things that you can see your family using. I can really see that benefit.

**Chris Benson:** I just want you to know you have my sympathies. I thought -- I have four siblings, and there's five of us, and I thought we \[unintelligible 00:10:32.17\] So yeah, lots of respect there.

**Daniel Whitenack:** Do your siblings own businesses, Chris?

**Chris Benson:** Actually, yes. Several of them do.

**Daniel Whitenack:** Well, you can relate in that sense, I guess.

**Chris Benson:** Yeah, yeah. But she's done way better than I have. \[unintelligible 00:10:46.00\] so keep going. I'm sorry, I didn't mean to interrupt.

**Nhung Ho:** No, I think that most people are like "How do you deal with ten siblings?"

**Chris Benson:** \[laughs\]

**Nhung Ho:** You know, at any one time you have a high probability of liking at least one of them...

**Chris Benson:** There you go. \[laughs\] That's a good attitude.

**Daniel Whitenack:** And also the small business owners, they have to -- like we were talking about in physics, this sort of comfort level with operating in a space that you're not necessarily qualified to operate in, and just relying on the skills that you have in your past, and picking up what you need going forward... I feel like small business ownership is very similar. It's like, "Oh, I've never cleared a container from China through customers with my raw materials in it." It's like, "There's some information on the internet about that, but I'm gonna figure it out." But maybe it's some of that -- you're gonna talk about the cashflow things and other things, I think, on the financial side... But a lot of that too, it's like, maybe in -- you know, I've learned a lot of terms from my wife, which I'm not a financial person, but she learned how to do a Profit & Loss statement, and all of those things in her school, which is great... But there's all of these other things... For example forecasting sales, and raw material need, and all that. It is a very data science problem; it has to be data-driven, and if you get it wrong, then your business goes under, so it's very high stakes, too.

\[00:12:21.15\] But maybe before we jump into some of the individual tools that you've work on, Nhung, one of the things that you mentioned in terms of the general space that you're working in within Intuit is customer experience and AI for customer experience. So when you're thinking about customer experience at Intuit, what does that mean? Maybe for data science people out there that are trying to understand "What does it mean to do data science for customer experience?" How do you look at that?

**Nhung Ho:** Yeah, that's a great question. The way that we as a company approach it is we have a system called "Design for Delight" and customer-driven innovation. The approach is to really get into the minds of our customers and understand what are the most important problems that they have... Because you can only build great solutions if you really understand what the problem is, and not just like what it is that you wanna build, but why it's actually important.

So we use this system called Design for Delight, where we do a lot of customer interviews, we work with a customer experience researcher, and you just kind of see how your customers are using your products; where are they getting stuck, what is confusing for them, where are the tasks that they're spending a lot of time on that they wish they were not doing?

And then there's also the other piece, which is "What do they wish that you actually had that would make their lives a lot easier?" So there are some traditional methods where you can infer it by looking how the customer uses the product, but honestly, it's just faster to talk to a wide variety of customers and have them tell you directly.

So starting from that base, where you really understand what the problem is, then we take it back and we say "Okay, what are some of the hypotheses that we have in creating the solution?" And the solution could be done by data science, it could be done via an experience design, it could be done via some very simple rules.

But what is the solution that you wanna build to solve that problem, and then you go into the mode of decomposing it, into "Okay, there's the experience piece, there's the machine learning piece, there's the engineering piece..." Then we go off with these hypotheses, build a couple of quick MVPs (minimum viable products) for our listeners who are new.

Once we have these MVPs, the thing that I learned - which actually took me a little bit to appreciate - is that when you build an MVP for a customer and you show it to them, you're like "Tell me how you would use this. Would this be beneficial to you?" In the past, we would put in mock data, and then the customer would say "Yeah, if this was my data, I would react this way. I would see this." And it was actually not useful at all, because you're asking them to imagine what they would do.

So we pivoted, and moving forward from about 3-4 years ago when we've found this insight, we actually just loaded the customer's data in, we ran it through our models, we made the predictions, whatever, and then we showed it to the customer. And then immediately, the feedback that we got back was so much richer... It actually helped us narrow in on the right solution, and it was just like -- you know, this a-ha moment for me that I guess it's obvious now, but was not obvious back then.

**Chris Benson:** I love the -- as you've gone through, I've had 3-4 questions and you keep answering them before I ever get to... No, no, that's good; that's not a bad thing. I'm really curious -- I was gonna ask you about how do you know when you get to the quality of those inputs, so that it can translate to data and you're kind of saying "Well, now we're just going and taking the data." What is it about when you said "I took the data"? Can you dive into that for a moment, in terms of saying "How do you know that you've just ended up with the right dataset to innovate in such a way that your customers are gonna be delighted at the end of the process?" How do you recognize that you've achieved that moment?

**Nhung Ho:** \[00:16:16.15\] Yeah. It's a little bit of an art, but I would say that -- you know, as scientists, one of the things that we do is we always have a couple of hypotheses and a couple of approaches on how to solve the problem... So at any one time we would have multiple solutions, and we would beforehand identify what the success criteria is first that we want. Then we show it to the customer and we compare them. So this is like a super-lean, very baby, early A/B test before we go full into A/B testing.

What I find that gets in the way of this - there's a lot of times folks build models, but they don't think about "Well, what is the success criteria for me? What am I trying to get the user to do?" Like, if I talk to our marketing teams, it's like "We wanna get a user to convert." But that's maybe like 50 clicks before you even get there. But what are the things that I'm going to actually physically affect and ask a customer to do? That's my target.

So having that very robust target, and measuring it across your different hypotheses and experiments is one way to do it... But it can be a little bit challenging to come up with that.

**Chris Benson:** I can imagine... If I know that I have participated in similar processes before, and speaking from experience (not as much as you have), it was really hard to do. So I'm very impressed with that.

**Daniel Whitenack:** Yeah. I'm curious... One perspective on this is you look at the customers, and this customer experience survey, and then you identify where they're getting stuck, like you said. What if it's scenarios where maybe it's something that you need to developer that's outside -- like, the customer doesn't know that they need this yet, or it's outside of their scope of maybe what they even have imagined... Like, "Oh, I didn't imagine that I could have this", but how do you come up with a way to validate that those are sort of good ideas... The ones that might not be driven by a specific customer pain that you've observed in an interview, but maybe sort of new data product development is a good way to put it.

**Nhung Ho:** Yeah, so that one -- it's very interesting, because for me, I tend to be fairly customer-backed... So I go back to the roots of "Well, why is this thing a pain?" and not focusing so much on the what. I think a lot of times folks stop at the what; like, "What is it that the customers want?" It's really more about the why piece... Because otherwise you can't innovate. You can't wait for someone to say "I really want this thing." They might not know that they actually want that thing...

So getting down to the why, and then working with the teams on coming up with "Okay, what are some ways that we could actually solve this in experiences that are new?" In my team, we do a mix of replacing really rote existing things, and backing it with machine learning.

In other instances, we're building tools that the customers didn't even think they wanted at all. One example of that is in the cashflow space overall. When you think about cashflow, for me, naively, I initially said "Money in, money out. Delta between money in and money out. That's what I care about." And then you talk to a small business, and they're like "Well, actually, I have invoices, I have bills, I have loans that I need to pay, I have assets... And I care about all of those things, and I need to know where they all are."

But when we were talking to our small businesses, we said "Okay, you wanna know what are your outstanding invoices, so that you can get paid." They said "Yeah." We pushed and we said "Well, what if we can tell you not only when an invoice would get paid, but the date range within which it would get paid? Would that be something you would want?" And they were like "You can do that?! I didn't know that was possible at all."

\[00:20:14.15\] For them, they were really thinking about "Just send me a reminder if it's gonna be due soon." But we expanded that, and we said "We can actually build this new capability that allows you to go much further, and have more control." So I think that's one example of starting with the why, which is they need to understand their cashflow.

**Break:** \[00:20:31.26\]

**Chris Benson:** So I'd really like to dive back into that even more, because I'm very intrigued by -- you know, knowing the data that you have, and figuring out, how do you start that process...? Because we talk to people all the time, they're doing all sorts of cool things with data, but I'm really fascinated by your creative process that's kind of encompassing that... So when you're thinking about "I'm going to innovate for the customer in a way they have no idea that I can", how do you approach that? How do you know what you're gonna do with the data that you have, or know that you need to go get that data in order to achieve that, and using data science as a mechanism to get there? How do you put it together? Before you do the do, how do you conceive of it?

**Nhung Ho:** Before I do the do... I like that. \[laughter\] So that's something that I think a lot of us in the field are still working through... Because every new problem is a little bit different. Some are much more straightforward. You know exactly which data source you're gonna get, you know exactly where to start, and you even have an idea of what the initial features are that you wanna start with. For others, you have to get a little bit creative, and \[unintelligible 00:22:55.24\] through the data a little bit.

One of the ways that I try to fast-track this is that -- you know, as data scientists we don't work in silos. A lot of times we work with our analytics teams, we work with our product partners, and we work with our design teams to jam together, and say "Okay, these are some pie in the sky ideas that we wanna work on. That could really solve a big customer problem."

Once we narrow in on that, we actually source it from the broader team, because they have kind of like an initial starting point. And for me, I would rather not do a random walk through the parameter space to figure out where to start; it's easier to just crowdsource it from the team... Sometimes it's actually from our engineering partner, to say "Hm... I'm aware of this data that we're capturing right now. Do you think that that would be useful for you?" We go "A-ha. Okay. Actually, we'd never thought of that. Let's go and try it out."

**Chris Benson:** So it's almost like taking the creativity of the entire organization, the entire larger team, and then figuring out where to allocate resources against that creativity, based on what's rising to the top?

**Nhung Ho:** That's right, that's right.

**Chris Benson:** Okay.

**Nhung Ho:** So we start with the problem first, and then we figure out whether or not we have the data... Because I have never worked on a project where all of the data we ever needed was available. Sometimes you actually need to go and capture that data, you need to go and buy that data. Having everybody in there together opens up the door and more avenues for you to kind of see what you're not seeing right now.

**Daniel Whitenack:** \[00:24:25.04\] I'd really like to dive into this idea... There's an article that we'll link in our show notes about some of the things that you've been doing during the pandemic time... And I'd love to dive a little bit into those. One of the intriguing things that I kind of noted was that the pandemic hit, and then of course, as any business, including Intuit, there's this kind of natural inclination to be hesitant, to do a lot of different things... Because you know, we have no idea what's gonna happen next; we're really unsure about the future. But it seems like your team and Intuit really took the vision that "Hey, now is the time to innovate, and now is the time to try something different." It seems like that really paid off well, but I'm wondering if you could go through that mindset and how you kind of came to be motivated at this cashflow tool, and things that you should be focusing on during this time, during the pandemic?

**Nhung Ho:** Yeah. A year ago, the world kind of went upside down, right?

**Chris Benson:** Yeah, indeed it did...

**Daniel Whitenack:** I remember that, yeah. \[laughter\]

**Nhung Ho:** And I think we all kind of had plans for ourselves, and businesses had plans for what growth was going to look like... For us, we had a roadmap of what we were going to build for our customers, assuming that the growth was going to continue. And then kind of overnight, when the shutdown happened - you can look at it in our data; for some of our small businesses, revenue dropped 99%. And you don't see step functions like that in the data, ever. So this was just a global worldwide massive event that everybody was feeling simultaneously. And through every single new locale or state where a lockdown occurred, this drop happened. And we said "We have to do something for our small businesses", because this not only is such a scary time for them, but it's also a huge time of uncertainty for everyone across the world.

**Chris Benson:** And your data is sort of a history book for a monumental event in world history, when you think about it...

**Nhung Ho:** Yeah.

**Chris Benson:** ...you know, seeing that financial data... That is a powerful story right there that you're describing, seeing that step function.

**Nhung Ho:** Yeah, it absolutely was fairly shocking to be able to see it so immediately... And it was so fast as well. So we really came together and we said "What can we do to help our small business customers?" And we kind of sourced across the entire company, a whole host of different solutions.

If you can recall, early on in the pandemic there were a lot of GoFundMe's for small businesses. We hosted quite a few; we partner with GoFundMe to enable our small businesses to raise money. But that's a little bit of a temporary solve, for that moment... Because we didn't know how long the pandemic was going to last. And there's the PPP loan program... When that was announced, we realized actually a lot of our small businesses and a lot of our customers in general, including my sisters and family who I helped with the loan process, eligibility was really confusing. You needed to know so much more about your business than most people were equipped to be able to do, at all... So we rolled out another program, using our knowledge engine to build the Aid Assist, which helps small businesses quickly say "Am I eligible for these loans? What are the loans that I'm eligible for?" and get that.

\[00:27:59.12\] And then for my team specifically, because we're so close to the data, we looked in there and we said "Wow, cashflow right now - the historical data that we have about your cashflow is rotten." Those of us in this field - the historical data is where you build your models off of... And if you have this drastic shift and this drastic change, you need to go in and make huge modifications to your model to accommodate for that. And not just that... The level of granularity and detail that you provide to the customers, the information they wanna know is different. Some businesses did super-well, and some are really, really suffering.

**Daniel Whitenack:** When you're looking at that data and you're going through the middle of this enormous event, one which we're still in the tail end of, presumably (hopefully the tail end), are you looking at how so many organizations are trying to cope and you have that real-time data and the history developing on that, and you're figuring out how your own organization is going to address that, serve its customers, and deal with the same set of circumstances - did that give you or the company (I'll let you answer it any way you want) any sense of insight or revelation in terms of how to approach the business of finance in a different way than you ever had before? Something that might actually be sustained past just the pandemic. So truly a lesson learned, not just a coping mechanism for the moment. Is there anything that you and your colleagues talked about, about like "Now that we know this, nothing will ever be the same in how we look at this, and we're making changes"?

**Nhung Ho:** Yeah, so there's two parts. I can speak for my team and how we built models... But I'll start with how we as a company realize and really reinforced one of our beliefs from before the pandemic and made it much stronger. We have our product called QuickBooks Capital, and so we provide small business loans to our customers. And I would say the magic or secret sauce there is we have a lot more data than a standard lender would. For our customers, we have all of their accounting data, and from that, we're able to actually offer loans to customers who traditionally would not be able to get loans.

What we saw during the pandemic was that there was a large population who were underserved, in general, who would not have been able to get loans, who we were able to offer PPP loans for, because we knew their data very well, we knew their risk profile, and we could actually underwrite.

I think that really reaffirms our decision that we need to continue to invest, and figuring out ways to continue to serve the underbanked and underserved population - that's at the company level. And there's a lot that you can do in the data to figure out whether or not you're capturing that population or you're actually doing the right thing there.

On the other side, the more technical side, with our teams, is that we've seen just -- you know, with these large worldwide events... I like to point back to 2008, where you think it's like a once in a generation event... And then ten years later you have another once in a generation event. These events - you can't write them off as one-time anomalies; you actually have to figure out how to fold that in and be able to automatically regress against them, learn from them, and then figure out how to apply it moving forward.

Like you said, we're at the tail end of the pandemic right now, hopefully - fingers crossed.

**Chris Benson:** Yeah, hopefully... Yup.

**Nhung Ho:** But what happens if another large, worldwide event happens ten years from now? We can't just clip that chunk of data, remove it, and act as if it never existed. So you need to build that into the methodology of your models.

**Chris Benson:** \[00:32:00.27\] Real quick -- and Daniel, I saw you were about to say something... I just wanted to say something before you left that point... In the different industry that I'm on, in defense, I noticed it because it's directly to your point there. The intelligence community, which is the industry I'm in, has just released its annual assessment of world events, and one of the big things that goes directly to your point is the fact that they're talking about with the pandemic over there will still be fallout politically and economically in various geographies for years to come. So the outcome of today will lead to other events that are unforeseen, some of which may be significant.

I just wanted to note that... That's a great point, and it really spans across industries and different contexts. And Daniel, I apologize for cutting you; I saw you were just about to speak...

**Daniel Whitenack:** Oh, I forgive you, Chris. I'll always forgive you. So you were talking about this idea that models that you build need to be robust against these sort of once-in-a-generation event... That you can no longer expect that this is a once-in-a-generation, but you have to be ready for them. Again, we'll link to this blog post in our show notes, but... I'm sort of looking at the cashflow planner, and maybe you can talk a little bit about the goals there... But one of the things I see is developing a personalized forecast, and when I think about forecasting, like you're talking about, it's like "Oh, well, how much historical data do you have to develop that forecast?" So how is it even possible to develop a sort of robust forecasting system that's robust against these sort of really crazy events that we're dealing with?

**Nhung Ho:** Well, I can tell you it's dang hard... \[laughter\] That's the short answer. One of the things that we got creative with in the forecasting example is -- well, let's take sales as one type of input forecast. Traditionally, you take your sales in the past, and then you can project that forward; standard time series forecasting. What we were seeing during the pandemic is that there are actually a lot of customers who have extremely sparse data, because what used to be daily sales are now turning into maybe once a week you're getting a sale \[unintelligible 00:34:14.06\] and that was the totality of your sale. So incorporating that in, and being able to deal with sparsity of data is one way that we folded that in.

There's also actually learnings to be had. This is where you can actually transfer the models that you build from one business to another. There are certain businesses who essentially all of their sales and all of their events happen once during the year. My favorite example is a Halloween store. It is a very short lifetime for a Halloween store, where they have nothing, they have everything, and then they have nothing again, for a while. So for those, we actually can take the models that we've built for them, learn from them and actually apply them for companies who are going through somewhat similar events right now. So that's why it's been advantageous to have that broad view across the industry, and being able to transfer across.

**Break:** \[00:35:10.10\]

**Daniel Whitenack:** So Nhung, I'm interested to get a little bit more into the weeds of this response to these changing times in your data and your forecasting. We don't have time to get into all the specifics, but if you take and you look at some of the trends out there in AI right now, in terms of -- well, we've got all sorts of things. We've got, of course, the trend to use neural network-based models, we've got sort of semi-supervised things, we've got reinforcement learning... Plus the "more traditional type" machine learning models or statistical models... As you're thinking and you're looking about this scenario where -- like, looking to the forward, we don't know what sort of events are gonna come up, and we need to be able to adapt our models as our data increasingly changes over and over... So if you sort of match that landscape of AI techniques up with this problem that you're looking at, which of those sort of become most relevant, and have you experimented with a variety of those? What have you found most useful in your context?

**Nhung Ho:** Yeah, that's a great question. We've actually experimented with quite a bit. It wasn't until very recently that deep learning kind of beat your traditional time series methodology in terms of performance.

In the space that myself and my team work in, one of the considerations that we have to make is model performance and efficacy, compared to in our case explainability and being able to actually help our customers understand why we're making these decisions. And that's specifically because we're dealing with financial data, and it can have very large implications if you don't really trust the output of the recommendations we provide for you.

So in most cases where it's not as customer-facing and the decision is not directly to your dollar; we use more black box techniques, as I call them... But for this case, specifically for time series forecasting, we tend to stick with models where we can explain why these decisions are made, simply because for our customers, you have to be able to build trust. They won't use it unless they know what goes into it. I'm sure your wife may have comments and feedback about this, Daniel, but when you're dealing with money, you have to be fairly sensitive and really understand the tolerance level from the customer in terms of how far you can go and how black box you can go.

**Chris Benson:** How might that evolve over time? And I'm asking a speculative question, I recognize that... But there's a lot of concern about anything that's sensitive. I'm in a sensitive industry, you're in a sensitive industry, dealing with people's money and their finances... And as these technologies evolve, both on the capability side and the need for explainability, a) for the purpose of satisfying regulatory concerns, for the purposes of gaining trust so that you can continue to innovate the way that you and your team have been doing... How do you envision -- when you're thinking about it, how do you envision explainability evolving, and the level of importance? Do you think we're just going to reach a level and it kind of plateaus? How does that weave its way through the industry over the years ahead in the way that you're thinking?

**Nhung Ho:** Yeah, I think we are early now, especially in our space in fintech, as just getting customers comfortable with having an AI system work on their behalf and making decisions on their behalf, on a daily basis. But if you look at some of the other areas where AI has kind of had a bit of a head start, people get comfortable real fast...

**Chris Benson:** That's a good point.

**Nhung Ho:** \[00:40:01.27\] It's about building trust. And once they trust in the decision-making power of the system, what I've seen is they tend to need to know less about how it works, because there's that large baseline in time that they've had to build trust in the system.

**Chris Benson:** Yeah. It's a great insight.

**Nhung Ho:** I expect in the near future that we'll be able to use much more sophisticated techniques, because we've built up that trust. But trust takes time, and it's very easy to violate that trust as well; you have to be fairly careful, and make sure that you bring your customers along... But sometimes also you just need to push it through, because folks don't like change. So there's that balance.

**Chris Benson:** As a quick follow-up, just talking about folks liking change - you've made these innovations that you've talked about through the COVID period, because your customers really needed you to do that. And there's that old saying about "Don't let a good crisis go to waste", and I realize that the sentiment on that is probably not appropriate for the COVID time, and I'm trying to acknowledge that... But at the same time, it's during times of change that great things can really come about and happen. As you're thinking about that and knowing that that is necessary, and the explainability can be achieved, to some degree gain that trust and do that - you have amazing tools going forward in the years ahead that are being developed. Deep learning goes farther, reinforcement, other branches that we don't yet know about that could come about at some point from current research... How might you approach some of those in terms of how do you make that judgment on "Now's the time to push, because they really need it, and I can really help them, and I know that they'll trust it quickly" versus being more conservative and saying "I'm afraid to"? How do you assess that?

**Nhung Ho:** Yeah, I would say just A/B test it.

**Chris Benson:** Oh, good point.

**Nhung Ho:** A small A/B test costs very little... And there are certain portions of the population who are okay with it. So doing a random test with a small population on a very bold idea that pushes it far ahead - you might get actually really, really great results, and then you can kind of step your way up into opening up more. That's how I would think about approaching it... Because I can tell you, this population we serve for some of our products with accountants - they're not necessarily the most open to trying out new technologies at all... But if you go through just with an A/B test and test without them really knowing it, then you really get the true reaction. And then you can actually start bringing the people along as you have that data and that evidence.

**Chris Benson:** Gotcha.

**Daniel Whitenack:** Chris knows I'm always the one asking super-selfish, practical questions, because I always struggle to do practical things myself, and I wanna make sure -- I know there's listeners out there that are all the time thinking about practical data science things... And I notice in reading about some of your work you were talking about having individual models for different transaction streams, and aggregating those together... And I'm just thinking in a practical sense you've got models per transaction stream, per user and how many users does this QuickBooks have... My question is like when you're dealing with this many models and this many predictions, do you have any practical advice in terms of model management, and model debugging, and that sort of thing?

I think a lot of people can sometimes get something into production, but then managing it after that, especially when you're managing it for multiple customers becomes really difficult... So any practical advice on that front?

**Nhung Ho:** \[00:43:56.22\] Oh, man... \[laughter\] The operational component of the work that we do cannot be understated... Because it's not just about building the model, it's actually taking it to production, dealing with the ETL, grabbing the data, serving the customers... So you need to really make sure that you have fairly robust monitoring in, so that you can be proactively alerted if something goes wrong. Because the worst-case scenario would be a customer contacting you and saying "Hey, you totally messed up my cashflow. Now I can't pay a vendor this month." That would be disastrous. So building and monitoring... But you can't feasibly monitor for every event, for everything... And so doing a sampling and monitoring along the way.

I will also just put in a plug, which is that when you're building - for us, we have three million customers in the U.S. alone for QuickBooks, and then multiple transaction streams, we've got, again, all that data... And we quickly get into the realm of over ten million models being built and served. Start in batch mode. There's this obsession with building models in real time for everything. Every single team I talk to, they're like "When am I gonna get the model in real time?" Well, let's start with a batch. The complexity for a batch model is just much easier to handle. You validate your hypothesis, you validate the use case, and then you can say "Is the ROI enough if we move it to real-time?" That's one area.

There's also -- the thing that we've made an investment in that has really helped is investing in a robust machine learning platform that allows us to do distributed training and distributed scoring... So marrying the best of, essentially, the MapReduce framework. Doing that distributed computing with our models.

The cashflow is not the only use case where we have individual models for users. For transaction categorization, which is where any transaction comes in, we figure out which accounting books it goes into. We have individual models serving in real-time for customer in that case as well. But you also have to figure out when is the scenario where you actually wanna get to that level of complexity.

So for us, we always start with one base vanilla model for everyone to start with, and then see how far we get, and then we figure out "Okay, how do we blow this up in times of scale and complexity?", and how much headroom is there in order to solve the problem well.

**Chris Benson:** Gotcha. You said something as you were going through there that grabbed my attention as well as you were going... And that was you talked about platform. And you can answer this one any way that you want, because not every company wants to talk about the details of their infrastructure and stuff like that, and I totally get that... But how do you approach platform? ...because that is one of those practical questions for practical AI that everybody has to contend with. We often ask guests how their organization is tackling that. I'd love to hear how Intuit is approaching data science and AI platform, and what that means to you... Because it means different things to different people.

**Nhung Ho:** Yeah... So I've been at Intuit for long enough where I've lived in the world before we invested in the platform, and the world after we invested in the platform... And I can tell you that for us, a platform should enable us to be able to ship machine learning models that are high-quality, that have scale built-in faster. Those are essentially the requirements of what a great platform would be able to allow you to do, essentially.

So our platform solves for being able to deploy models quickly, train models in a consistent way, and then monitor the performance of those models when they go out the door.

We have a close collaboration with AWS, and underneath we use SageMaker as one of the core components of our platforms. Different companies have \[unintelligible 00:47:53.18\] specifically for this... But for me as a data scientist, what I want out of a platform is to make the job of actually the maintenance, the monitoring, the scaling easy, so I can focus on the algorithms. That's what we've optimized for.

**Daniel Whitenack:** \[00:48:15.28\] Awesome. So at the beginning of our conversation you mentioned how your engagement with Intuit really started from a felt need that you had and a problem that you saw, and you brought that problem to Intuit... As we close out here, I'm wondering - as you look to the future, what are those things in your mind, like "Oh, I see this problem and I really think AI or data science has a great solution for it, I just haven't done it yet"? Or maybe it's things out there that you're just really excited to try, but you haven't tried yet... When you look into the future, what keeps you up at night and runs through your mind?

**Nhung Ho:** Yeah, I am constantly chasing -- for me, one of the Holy Grail problems... And I would be happy to retire if we could solve this, which is actually how do we go from the state right now where if you have to actually run your books every month if you're a small business... Right now, a lot of small businesses are doing it manually; they're answering things by hand, they're figuring out the complexity of accounting. As we've talked about early on, a lot of small businesses don't go into the business of small business, thinking about books. They think about "Wow, I really wanna do this thing." No one gets joy from doing accounting, to say the least. But it's a really difficult problem, to go from raw transaction data to a state where we can actually tell you "This is what your books are, this is your cashflow, this is how much taxes are owed, and this is how you should run your payroll."

For me, I'm always chasing after how could we actually fully automate the entire accounting process for our customers, so that they can actually spend time doing the things they like, and we can have the machine learning solve this problem. It's really difficult, because it's so multifaceted... And in the future, we're really gonna be innovating quite a bit, both on the algorithmic side, but also on potentially making fairly major changes to our product, to get folks comfortable with this. I'm super-jazzed about that.

I know not every kid grows up saying "I wanna be an accountant" and "I wanna build machine learning for accounting." It's such an old problem, but for me it's a super-exciting problem.

**Chris Benson:** It's fascinating to hear you say that, because as you say that, I'm thinking back to what you were talking about with customer experience, and holding that as high as you do; there is a self-awareness in you and your organization when you recognize that while your product is doing great things for someone's business, that's not what they wanna be thinking about. That's what they want you to handle. So you're basically saying "The highest thing is for them not to have to worry about us at all. We're just there, doing the magic, but they never have to deal with us." And that is almost like perfect customer experience when you think about it, because you're optimizing their own experience, so they can do the thing they love. I loved hearing that answer.

**Daniel Whitenack:** I've learned a lot in this, and I really appreciate the insights. Thank you so much, Nhung, for joining us. As I mentioned, I'll point our listeners to some links in the description, so make sure you check those things out, and check out what Intuit is doing in this space... But I really appreciate you taking time; it was great to talk to you, Nhung.

**Nhung Ho:** Yeah, thank you for having me, guys.
