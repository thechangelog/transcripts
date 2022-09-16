**Angelica Hill:** Hello, and welcome to Go Time! Today we are going to be talking about GopherCon. We're going to talk a little bit about kind of where did GopherCon come from, how is it put together every year... We'll be hearing about some of the logistics, the difficulties, the challenges, but also some of the fun stuff about putting a conference of this scale together. We're very, very lucky and excited to have our wonderful guest, Erik St. Martin, who is a GopherCon organizer, as well as being co-author of Go In Action. Welcome, Erik. Lovely to have you.

**Erik St. Martin:** Thanks. I'm glad to be here.

**Angelica Hill:** How are you doing?

**Erik St. Martin:** I'm doing pretty good. Yeah, I'm actually happy to be on. I miss hanging out with all of you on air.

**Angelica Hill:** I'm so excited. This is I think the first time I've hung out with you on air, so I'm excited. Oh, and then Johnny... He's my wonderful co-host... He's "Oh, fine. I'll leave you two to it. I don't want to interrupt this beautiful moment." \[laughs\] And he's back! Awesome. Great. Welcome back, Johnny. I was \[unintelligible 00:05:19.27\] "Oh, I'm sorry. I'm sharing this beautiful moment with you as well, Johnny."

**Erik St. Martin:** Johnny's "Oh, it's Erik. I'm outta here..." \[laughter\]

**Johnny Boursiquot:** I'm outta here...

**Angelica Hill:** Well, welcome. I'm excited. I haven't co-hosted a show with you in a while. How are you doing?

**Johnny Boursiquot:** It's been a while. I'm doing great, and I'm actually looking forward to this episode as well, because I'm one of the GopherCon OGs, as you'd say. I was at the very first one, and I think I've been in most of them, maybe for one, but we'll pretend that's not true.

**Angelica Hill:** Well, lovely to have you both as a co-host on the show, but also as a co-chair of this conference, as well as being on the Organizing Committee. So we're going to start right at the very basics for all our lovely newbie gophers... What is GopherCon, and how did it first become a thing?

**Erik St. Martin:** Yeah, so it's interesting... We've talked about this before on (I think) Go Time and Changelog as well... It came around as a really interesting story. At the time, Brian Ketelsen and I worked together at a company; this is 2011 or so... And we were both using Go, and we were attending lots of conferences... And so early 2013, we kept talking about the fact that like "I really wish there was a Go conference. I really, really want to go to a conference and meet other people who develop Go." We both live in Tampa, really big in the tech industry for healthcare, which is not, a bleeding edge technology adopter... So it was basically just Brian and I covering all of Tampa at that time with Go. It was still very, very early. And so mid-2013 rolls around, like April-May or so, and some folks in Denver, from the Denver Go meetup group were talking about "I really wish there was a Go conference." And Brian and I were "I know, this is what we've been saying." And so it was basically "Why don't you guys do it?" And we're "Well, how hard could it be? We should. We should totally do it." It turns out after the fact - really hard. It's actually a lot that goes into it. We knew it'd be a ton of work, we totally underestimated just how much work it would take. But yeah, so that's sort of how things came about.

It was really interesting, because we were hoping to just get, 100-200 people together. At the time, we didn't know how many gophers there were; the language was still super-new... And so we planned to hopefully get like two or three hundred people together, and then it just sort of exploded from there. We had to keep calling the venue back to get more room. We maxed out at 750 people the first year... So that was really crazy for us, because - I mean, anybody in the conference circuit kind of knows, like... I mean, most conferences take years to even hit those numbers. So we were just really, really in shock.

\[08:15\] It was really a humbling experience though too, like the number of sponsors who came on... And same thing, they just wanted a conference for this technology too, and so many of them weren't even worried about ROI at the time. They're just "The ROI is a Go conference starting, right? We need to hire people, we need these events to exist." And so that was really awesome.

Then like all of these people that we really admired in the Go community were there helping us stuff bags, swag bags... It turns out stuffing 750 swag bags takes a long time. Who knew...? So yeah, it was just really interesting to have -- I'm trying to even remember... Steve Francia, Bill Kennedy, Damian Gryski, Dave Cheney... There were so many. I'm gonna leave people out here, which I always hate doing those things... But trying to remember all of the people who were like back there - we'd sit here forever. But it was just kind of crazy, all of these people who were like "No, no, you should be giving talks. Why are you helping the stuff bags?" But yeah, I think everybody was just really excited to just see this thing that happen, and anything they could do to make it an event that would be remembered, they were willing to do.

And the same is true about MC-ing, right? At the time, Brian and I were running around just putting out fires, because there's so much stuff that happens behind the scenes that people don't even know, and like things that you need to manage while you're on site... And so we'd be like putting out a fire and then running up on stage to introduce the next speaker. And Kelsey Hightower came over and was like "It looks like you guys are kind of a little busy here... Do you want me to take over introducing the speakers for you, so that you guys can handle everything?" And so he did, and that's just like another example of people in the community just trying to pitch in to make it something.

I think that all of that probably sparked the atmosphere that exists there today, where we care more about the community than anything else, and everybody just sort of contributing to it being a great time.

**Angelica Hill:** So how has it evolved? The image I'm getting in my brain of you kind of scrapping this together, wonderful gophers helping in any way they can, to like the very put-together, huge conference that it is today... I would love to hear what are the big evolutions, what are the big changes that you've seen?

**Johnny Boursiquot:** So Erik, before you answer that, as an attendee to the first one, I can tell you what my experience was... So I'm sitting probably like in the first or second row, and basically, I was there with my friend, Mark Bates, who's also a prominent member of the community... And we're sitting in like the first or second row, basically in this ballroom filled with 750 people... This was a single-track conference at the time; a massive number of people... Like, can you imagine as a speaker, right? For a brand -- effectively a new technology, right? Go had been around for a while, but it hadn't really hit its stride. But you're about to give a talk to a roomful of 750 people. So I can only imagine what the first speaker felt... But as an audience member, the whole thing was so smooth, with Erik running around, and Brian running around... I didn't know there was so many fires behind the scenes being put out. For me, it was just basically things -- the schedule went according to plan, the speakers were all on point, all the talks were great... To me, this was just a well-organized conference. Now, how do you beat that? Erik, how do you beat that?

**Erik St. Martin:** \[12:00\] Yeah, so it's kind of funny... There's always like the magic that happens behind the scenes. You're right, it was a very, very early technology then. April 2014 is when the very first GopherCon was held, and so we're talking pre-Docker, pre-Kubernetes, like all of these big technologies... Most of the HashiCorp products hadn't been released yet... Speaking of which - actually, Mitchell Hashimoto bought the first two tickets to the very first GopherCon.

**Johnny Boursiquot:** Nice...

**Erik St. Martin:** That's kind of a funny story there. But yeah, so all of these big technologies that we look at that are written in Go, most of these hadn't really taken off yet, or hadn't even been released. So it was still very, very early. But as an example of things that happen behind the scenes that people are unaware of... So we talked about the Kelsey thing... So I had this idea the first year - it was like, okay, well, most people will stay for the talks, and many people will leave the next day. Flights all over the world will be taking off at various times... Let's book the space for the next day too, and people can just hang out and hack on stuff, right? This is the thing we all know now as community day, right? That day, it was just called Hack Day. And the whole idea was just hang out, hack on stuff together, before leaving for your flight the next day, right?

And so we get down there in the morning, and the escalator just keeps coming. More people, more people. And there's like one of those "Oh, crap" moments. So many people had chosen to stay for the next day, just as part of the conference... And you look at each other and you're like "We're going to have to feed these people." And so we're just running back with the catering crew, like "What do we have that's for like events, in the next couple of days, that you can like reorder, that we can--" Yeah... And so there's things like that, that happen, and some of them are amusing after the fact, some of them are stressful.

But yeah, I think that with the first year there was a lot that wasn't thought about as far as the viability of it as, for lack of a better term, business. Because though it's not a for-profit company or whatever, bills have to be paid, right? And so you can't just sort of go in and be like "Oh, yeah..." And one of the big things we did was we dramatically underestimated just how expensive running events are. And the best way I can compare this for people is anybody who's ever gotten married, and you see -- you're like "How much per person for a plate of food...?" It's the same thing for events, and sometimes worse, where Wi-Fi for three days is $40,000 or something, right? The price tags on these things are just astronomical.

And so there was a lot of evolution that had to go in there, with budgets, and how are these things going to be paid, and how do we account for the prices of these things going up over time, how do we account for things like attrition... Most people don't realize this, but when you book these hotels to account for everybody staying there, you're committing to a number of hotel rooms being sold. And if people don't book those hotel rooms, you get hit with a giant bill. And most people don't realize that. And sometimes you're going to be wrong, and you will get hit with a bill, and so you have to kind of account for having budgets for these things. There's a lot that goes into just trying to figure out how many rooms are you going to need which nights of the week... Because if you guess too high, you get hit with an attrition bill. If you get too low, your attendees don't have a place to stay. And so there's like a lot of this sort of complexities there.

\[15:56\] So there's that side of things, thinking about those... But then the two other ways I'd say that things kind of evolve was one, the vision of like a high production value, right? I always love the idea of people feeling like they've made it. People who speak to thousands of people, you want them to kind of feel really excited about stepping up on stage, like "I got here!" And so the idea of that was really fascinating for me; I really wanted to make sure that that happened, and just a means of the production quality for videos coming out for people to have that type of stuff...

The other was I took off a month of work before that event, for all of the stuff that had to just be done... And there was so much work that was being done at night after work, and things like that. And so realizing that long-term, there was no way that we could manage that; not while having day jobs. And so this is where many of you who have been in the GopherCon circle, this is where Heather Sullivan and Convention Designs comes in.

The first year we had worked with them as a local contact; they were referred to us by the hotel, our planner at the hotel, for the ancillary events. So we wanted to do kind of like an offset party, and like a dinner for the speakers, and things like that... So that's how we first came in contact with their company.

And going into 2015 - that's where that relationship started to build even more, and they came in and help with a lot more of the logistics side of things, negotiating hotel contracts, and things like that. Managing travel, and working with the convention center, and all of that stuff, figuring out what we needed for insurance, and paramedics, and all of these things you don't really think about. Since then, every year, that relationship has built more and more, where they've taken on more and more of some of the backend logistics side of things so that we're able to focus on more of the content and the bigger picture... And there's still a lot that I do behind the scenes too, but all of that is -- like, going through event banquet orders and hotel contracts with a fine tooth comb... Not exactly exciting for me. So I'm really, really glad to have that relationship where Heather and I are very yin and yang when it comes to a lot of these things, like complement each other... So that was probably a big one, too.

So this really -- an event, once you get to this size, is a year-round effort, and I have a full-time job. There is no way that I'd be able to work all of this stuff full-time. I'm really grateful for that relationship, and most of you have met her over the years, and her amazing team that helps us with so many aspects of the conference.

**Break:** \[19:08\]

**Angelica Hill:** So we've heard a little bit about kind of the logistics, putting together an event... But of course, GopherCon would be nothing without its participants and its amazing speakers... So we'd love to hear a little bit about how do we get these amazing, wonderful people on stage? I know, Johnny, you've been a speaker, you've been part of the talk review committee, and now as a chair... I'd love to hear a little bit about what is that process? What is that process for the speaker, as well as kind of the committee, and getting to that final lineup?

**Johnny Boursiquot:** So there's two sides to this... And having been a speaker, and now being part of basically the people who get to decide who the speakers are going to be, these are very different things... So I'll tell you from a speaker's standpoint - even submitting a talk right is a terrifying process. \[laughs\] Despite all the advice that you read as a potential speaker, and you watch YouTube videos on how to go about it, even the GopherCon Committee puts out blog posts on "This is what we're looking for" and things like that, it's still a terrifying process. And this is something we definitely have to acknowledge. You always have basically this self-doubt that sort of travels with you, all the way from the time you hit submit for that proposal, all the way to the point where you deliver the talk and you're walking off stage and you're still thinking "Did I do a good job?"

\[22:05\] So it's a very scary proposition for a lot of people, and basically, this is me giving a shout-out to you - if you've ever submitted a proposal to GopherCon, even if you didn't get accepted, kudos to you, because we know it can be a very stressful process. And for those who have been accepted and have given talks over the years, big shout-out to you as well, because we know the preparation process, rehearsing over and over again, and making sure you crossed your T's, you dotted your I's, you're going on stage, whether you're doing a big sort of general audience talk, which is very scary, or you're doing a tutorial in a smaller room - we know it's very challenging... Unless you do -- even when you've done it a few times, it's still scary, it's still sort of inducing of sort of that fight or flight sort of emotion...

**Erik St. Martin:** And let's be clear here, too - the tutorial sessions and stuff like that are more about being able to go more in depth, having more time; it's much more specific, so you can drill in. But those rooms aren't small either, right? Pre-pandemic, you're talking 450-500 people. That's not a small talk...

**Johnny Boursiquot:** That's the size of another conference. \[laughs\] Exactly. But the thing is, we have this process... So moving on now to the sort of selection process. It's always a combination of what is something that -- basically, the value threshold was always high for us. It's "Is somebody going to do this talk just--" Sometimes we had proposals for talks that the topic itself is an interesting one, but there might not be enough there, enough meat on the bone, so to speak... It could be based on the proposer's comfort level with the talk, which sometimes comes through in the description and how they propose things... It could be that the material is interesting, but there's not enough interest for it... There's a lot of things that goes into the selection of the talks and the topics that we focus on.

For example, we've heard so many talks on gRPC, that this year in our selection process we're like "Ahh..." Yeah, we have a couple more gRPC submissions, but there's nothing in there that's sort of really new; there's not going to be new ground covered, so we might sort of basically deprioritize those in order to give other people a chance to introduce something new, right?

It's always about what is the value that we want the community to derive out of this conference when they walk away from it, and we want that to be as high as possible. All the machinations that goes on behind the scenes, between the coordination, just getting all of us in the same room at the same time, scheduling-wise, just to get the chairs together to pick the darn talks is challenging...

**Erik St. Martin:** Yeah, there was five, six meetings... This was after the shortlist was created...

**Johnny Boursiquot:** After the shortlist, yeah.

**Erik St. Martin:** To Johnny's point, too - to everybody who's ever submitted a talk... Like, we know emotionally there's a hit there, when your talk doesn't get accepted. But in a normal year - we're going to talk pre pandemic, because everything after is a mess... But pre-pandemic, we would get 300+ submissions, for 25 slots. Those are hard numbers. A lot of great talks aren't going to be accepted... And additionally, the process is intentionally set up so that none of us can favor certain talk types, and stuff like that. So there's a whole committee of people who review these things blindly, so we don't know who you are, or your expertise, and things like that, when they're reviewed. So two things come of that - so we rotate out the committee, and so that fresh perspectives, where it's not like a bunch of us who have been here ten years being like "Ah, do we really want an Intro to Go talk?" That wouldn't be fair. And so as we're swapping that out, that means the perspectives kind of change, and we get a consensus across the group, what topics are interesting or not.

\[26:03\] But I think the key thing here that Johnny pointed out is that because of the way this blind process works, we don't know anything about you. And so if you're super-vague about the talk that you're giving, why are you the person to give that perspective, right? And so if we can't look at your outline and abstract and kind of be like "Oh, this person really knows what they're talking about, they know what the takeaways should be..." We don't know if you're a good public speaker, we don't know how well the topic... If you're like "I'm going to talk about the compiler." What specifically about the compiler? That's complex. How are you going to fit that into a 25-minute talk? So you have to give enough detail that somebody who doesn't know who you are is able to look at that proposal and be like "This person's clearly thought about how long it's going to take to deliver this information, that there's a clear path to delivering it, they know what their takeaways are going to be", things like that.

And topics that have been covered in the past aren't necessarily bad if you also are talking about like how you're building off of the talks that have been given in the past, or how your perspectives on that technology have changed over time, and things like that, where there's some new information, and it's not effectively the same talk being given by a new person every year.

And sometimes there is room for some of those topics that are just going to be regular topics that every new generation of gophers coming to the conference is going to need to see or hear. Then there's some of the technologies that are -- I don't want to call them fads... They're just - they're trends, right? Like, this year, WebAssembly is just really hot, and there's lots of proposals about WebAssembly, or something, right? I don't want to call it a fad, because a fad makes it sound like it dies off... But people get really excited about one technology in this like one or two-year period, and so there's usually like an influx of talks about that topic.

**Johnny Boursiquot:** This year is GopherCon is all blockchain talks, folks. I'm kidding. I'm so kidding. \[laughs\]

**Erik St. Martin:** Web 3.

**Johnny Boursiquot:** It's Web 3. \[laughs\] No, no, no... We won't do that to you.

**Angelica Hill:** So just so there's absolute clarity, the process is that we have this group of enthusiastic gophers, ideally at different levels, different experiences, that come together to form a kind of paper review committee. Is it that the chairs reach out to these people? If there are wonderful Go Time listeners who are like "Oh, I'd love to volunteer. I'd love to be part of this process", how would they go about doing that?

**Erik St. Martin:** Yes, there's obviously the GopherCon channel that's inside Slack. Myself, Heather, we all hang out there... So I don't always get to read all of the scrollback, but if you ping myself or Heather Sullivan who's in there, or Johnny, or Angelica, or anybody else who works with us in the CFP committee and things like that, we can definitely do that.

Obviously, there's a limited number of slots there... Often we'll reach out to people, especially like newer speakers and things like that; we'll do that. Because ideally, you want people who kind of -- there's two needs there, right? So one is fresh perspectives on what topics are important and exciting to the community, and you want to make sure you kind of have your finger on the overall pulse of that. It's easy for us to kind of get in our own little world and be excited about things like Web 3, and NF Ts... \[laughter\] But the other is that you also want people who understand what is a good talk, right? Sometimes with these -- if there's enough information there, we will reach back out to people who have submitted talks, too. We're like "Okay, I think I have the gist of what they mean, and this could be a really engaging talk. Let's follow up with them and get them to give us just a little more detail, or to clarify some things."

\[30:02\] It's really hard to do at scale, giving everybody feedback... But if you're like on the 10-yard line, and we're like "I think this is a talk that could be super--" Especially if you've got a topic that's not done very often, that's really needed. I'll pick on a topic area that I'm super-passionate about, which is like security, right? There's not a lot of talks about security, but definitely needed. So if you submitted a talk in that category, that was so close, we might actually reach out and be like "Yeah, could you clarify a couple of these things?" and stuff like that. I think I kind of went off the beaten path here from the original topic we were talking about...

**Angelica Hill:** The beauty of Go Time.

**Johnny Boursiquot:** Well, I can add some flavor to that, too... So one, reaching out to us - if you're interested in sort of helping out at any level here... So you don't have to be a speaker at the conference to actually help out the conference, right? So you can be a part of the review committee... And again, we're always looking for a fresh perspective to help us sort of get our shortlist, get the talks that we should be paying close attention to. So you can always reach out to us and say, "Hey, I want to take part in the next time you do this", and we'll definitely reach out.

And sometimes we reach out to people, because we notice you. One of the things that people out there may not realize is that as active members of the community, we ourselves are always keeping an eye out for new blood, for fresh blood. So at some point, Erik's gonna retire from this; at some point, I will retire from this. And so will Brian, and so will all the people that you are familiar with, or you might have heard, and you see names popping up over and over again - these people will go away at some point, and we need to sort of be grooming, so to speak, the next generation. Who's going to take over GopherCon after Erik is done? Who's gonna be passionate enough to be able to step in his shoes and carry this forward, right? Because I'd hate to see GopherCon go away just because Erik decides to take a break. Right?

**Erik St. Martin:** What are you trying to say here, Johnny? Are you kicking me out?

**Johnny Boursiquot:** \[laughs\]

**Angelica Hill:** These are the five reasons that I feel that I would qualify... \[laughter\]

**Erik St. Martin:** It's a mutiny... I knew this was a setup! \[laughter\]

**Angelica Hill:** This is actually your exit interview...

**Johnny Boursiquot:** This is your exit interview. \[laughs\] We keep an eye out for people that are active members of the community, and we notice when somebody is, for lack of a better term, a nice member, a nice person to interact with, and sort of talk to...

**Angelica Hill:** I think that Johnny cut out...

**Erik St. Martin:** Yeah.

**Angelica Hill:** I think the moral of the story is that we've got our eyes out. If you're doing good work, if you're interested, if you're active, that doesn't go unnoticed. A big part of the work of the chairs and the work of those who are organizing GopherCon is to be in the Slack channels, to be going to the smaller meetups, to be keeping an eye out for interesting topics, people, and then engaging them. And I'll take advantage of the fact that Johnny is frozen and therefore can't hear this... Also, these are people who you can reach out to if you're even dabbling at the idea of submitting to GopherCon.

Personal story - when I was going into the GO community and I was like "Oh my gosh, GopherCon - this is so big. This is so cool. I aspire one day to speak at this amazing conference" and was talking to Johnny, and he was like "Angelica, just do it. Just put a proposal together and submit. If you don't get accepted, try again." And these people are so giving with their time, are so willing to help...

There is also a more formalized program around mentorship, and helping coach the speakers to be ready for stage... So even if you may have apprehension around like "Am I going to be okay at speaking? Am I going to be alright?" there are programs around helping you get on stage and be set up to succeed.

Johnny was the reason why I ended up speaking at GopherCon, and it's a huge part of that kind of mentorship programming... And serendipitously, Johnny seems to now be back. So I'm gonna pick on you, Johnny, to talk a little bit about -- you missed my whole spiel about how you were just a really bad mentor to me, and you never encouraged me to do anything...

**Johnny Boursiquot:** \[34:12\] Oh, wow... \[laughs\]

**Angelica Hill:** So this is your chance to defend your reputation.

**Johnny Boursiquot:** Redeem myself.

**Angelica Hill:** Yeah.

**Erik St. Martin:** The \[unintelligible 00:34:17.20\] But I think also -- like, we talked about how we got here, and it's interesting... When this conference was started, we always believed that people who knew how to run tech events would come build the big Go conference. But I think that whole caring about people and the community-first is the huge thing that probably made GopherCon what it is... Because from conference one, there were many of us, from organizing crew, to other speakers and stuff like that, that were in one of the hotel suites until all hours of the night, while some of the speakers did dry runs of their talks, and things like that. And over the years, it's become a much more formal thing, but that's always been prevalent.

And I know we're talking a lot about how do I get involved on the content side of things... So volunteering - if you've got a lot of public speaking experience and you want to mentor other people who are new to public speaking, that's a great way. But also, you can carve your own path. There's so much at the conference that have come from other people coming to us. Andy Walker came to us one year with the idea of like "How do we teach people how to have a good experience here, how to make the best out of a conference?" and things like that. That's when the whole Gopher Guides program was started. And he's ran with that, and it's been amazing, especially considering so many attendees are first-time attendees... Some of them have never been to another conference before. And so all it really takes is just being passionate about the community and bettering the experience for other people. And if you've got ideas, please come to us, because that's what matters more than anything to us.

**Break:** \[36:17\]

**Angelica Hill:** We've talked a little bit about kind of how to get involved, the speakers, moral of the story being if you have even an inkling of a thought of a dream that you would like to be involved in or talk at GopherCon, just do it. But I want to hear a little bit about this year, because obviously, we're coming off the back of the pandemic, a period of virtual hybrid conferences... This is going to be kind of the first in-person GopherCon in a hot second. I myself am extremely, extremely excited, given that I did my virtual keynote, next year was like reviewing papers, now I'm co-chairing... And this is going to be my first in-person GopherCon, ever.

**Johnny Boursiquot:** Wow...!

**Angelica Hill:** So I am extremely excited. I will be a first-time in-person GopherCon attendee.

**Johnny Boursiquot:** That is amazing. I hadn't realized that.

**Erik St. Martin:** Yeah, me neither.

**Angelica Hill:** Get ready, I'm gonna whip out the gopher onesie if I can find one on Amazon... \[laughter\] I'm ready. But tell us. Tell us a little bit about GopherCon. I know we had a bit of change; I want to hear about like Chicago. I'm certainly very excited about Chicago. Never been. The only thing I've been told is try the Deep Dish pizza... But Erik, can you --

**Erik St. Martin:** That's a lot of bread though...

**Angelica Hill:** I love bread. \[laughs\]

**Erik St. Martin:** This isn't my unpopular opinion, but really? Why don't we need that much bread?

**Johnny Boursiquot:** That's a lot of carbs. \[laughs\]

**Erik St. Martin:** They're gonna like put me back on the plane when I hit Chicago. "What did you say about our pizza...?" \[laughter\]

**Angelica Hill:** But tell us, this year, what are you excited about? What should we be looking forward to?

**Erik St. Martin:** I'm just excited to get people back together. And I know there's a lot to kind of work around and navigate right now, because the pandemic is far from over... So I know there's a lot to navigate there, but two years of sort of not being connected - it almost feels the way it did back in 2013, when this started; you just so desperately want to get together in the same room with some other gophers.

So yeah, that's what I'm most excited about, is just to have people there, even though it's not going to be the same scale as it was pre-pandemic... But there's also some opportunity to reminisce a little bit too, right? Like, that tight-knit group that came out of the first year, and everything, forging new relationships... So yeah, I'm pretty excited. I'm excited about some of the topics for talks, and things like that, too. I probably hit on a few of those, but then I'm like playing favorites here, which is like "How much should I do that?" \[laughs\]

**Johnny Boursiquot:** \[42:19\] I'm looking forward to seeing people again, face-to-face, honestly. For me, going to a conference, and perhaps there's other people out there who share the sentiment - going to the conference, I honestly go less for the talks, and more for the interaction with people. I get to see people face-to-face that perhaps I only know in avatar form on Twitter, or something like that, right? I get to actually have conversations with people, go out with people, knock a few beers back with people, and just really get to know the people that I interact with, that are part of this community, that I enjoy being a part of so much.

And one of the things that I think really I don't want us to take for granted is that -- basically, once I started sort of getting more involved in the community, and this basically started taking hold after the first one for me, because the community was so small at the time, I immediately saw the opportunity, based on the people that I had interacted with at the conference and beyond. I immediately saw an opportunity in the form of basically... Having been part of other communities before Go, I saw of some ways that some things kind of got derailed, and I saw some ways that interactions would be sort of sour, especially for beginners. There's that elite mentality that "Oh, RTFM" or "Don't ask, quote-unquote, stupid questions." Really, something I'm hoping technologies as a whole we're getting out of, although there's still quite a bit of that out there, but that whole sort of commonality around between other communities that I saw, I didn't see or sense any of that. Even though I was new to the community and new to the language, I didn't see or sense any of that negativity early on. So I'm like "Okay, maybe this is an opportunity to keep it that way, or to make it better, and kind of keep it moving in that direction."

And I think the people that are really involved, the people you know now, that have been longtime gophers - I think there was this implicit sort of decision on the part of all of us that says, "Hey, you know what - let us all collectively make this community what we'd like it to actually be in the future. Let's try to keep it a community that is welcoming, and nice to beginners, friendly to beginners, people that are still learning." Because whether we like it or not, there are more new Go developers currently than there are old hats like myself, or Erik, or folks on the committee. There's way more new people. That has been the case for the last, I'd say five plus years, right? Every year, more and more new people come into the community. And we want that first interaction to be a positive one.

We want you to come for the technology, but stay for the people. Because the people are really what's going to make the whole experience much better for you, whether it be a colleague, a co-worker or open source contributor that you happen to be working on something with; whatever that interaction is, we want it to be positive. And the Code of Conduct stuff that we have for the conference itself, the Go community Code of Conduct stuff in general, the interaction, the rules that sometimes not everybody likes for the Slack channel, Gopher Slack - we know that these things can sometimes be annoying in certain contexts. But overall, they are positive instruments for making sure that both the conference spaces that we're in, whether it be GopherCon in the US, or GopherCon Brazil, or GopherCon UK, or any other Go conference that GopherCon itself has inspired - we want all those spaces to be safe spaces for everybody, welcoming spaces for everybody, great learning environments for those who are brand new to the language and brand new to the community, and old hats as well.

I think this is something that's very important to us as community leaders, and I think that's something that, you know, whether Erik wanted it to be or not, that is what we've become, and I hope you do like where we're going, Erik, as far as conferences go.

**Erik St. Martin:** \[46:23\] Yeah. I mean, I like the community aspect... Prior to the pandemic, I had dreams about another conference I wanted to start too, for similar reasons. Conferences - you know, they're very community-focused, versus ones that very much are sales machines... And they are what they are, and that's not like a hit on them. I just... I'm passionate about being in the communities where it's just that - a bunch of people that are just trying to support each other and help lift each other up.

So I like where we're going, but it's interesting - you said about the number of new people... I mean, all of the OG gophers, so to speak, if most of them walked into a new Go conference, the only people who are probably going to recognize them are other OG gophers, right?

**Johnny Boursiquot:** Right. Exactly. \[laughs\]

**Erik St. Martin:** We've hit that point of sort of like critical mass. We all looked up to and admired, and have since gone on to do other things. People wouldn't even recognize their name, right? It's not good or bad. It's just the evolution of a technology once you hit a point of like critical mass, where it just explodes. Most people don't care about those details anymore. Right? Like, the number of people - as sad as it sounds - who cares about who the original people who wrote the Go programming language is, it's mostly OG people. Most of the people don't care, because they don't need to know that to get stuff done. They just want a language that works, and does what they need it to do, and it does that, in spades. So yeah...

**Angelica Hill:** So I want to kind of press on the community aspect a little bit harder; not to be a skeptic, but there are many communities that say they're very inclusive, they say they're very diverse, they say they're very welcome to all, but in practice they turn out not to be. So I'd love a little bit to hear about the actual, in-practice, how do you do that? How do you foster an inclusive, welcoming community? What are almost some like tips and things that you can do, some things that you are cognizant about? I would also like to press that one step further, and directly ask you, Erik - I know that the move to Chicago was rooted in serving our community, the Go community, so I'd love to hear a little bit about that, because I think that is an example of where these concepts of like we care about our community actually go into practice.

**Erik St. Martin:** Yeah, so that's a hard one, right? Because I don't claim to be an expert here. And we're all doing -- I can't say all, but most of us are doing our best to do what's right for other people, and to advocate for them, and things like that. And we're gonna screw up, right? Like, it happens. We're human, and we're going to make mistakes. I think the big thing there is to be accountable, and be able to admit fault and figure out those things. So I think a lot of it comes through example, if your people or other people look up to and they want to mimic your behavior. And if you're a jerk, then they're a jerk, too. And these things are important.

I think the other part is about -- we like to talk about being an ally, but I think for most people, it's very fair weather, right? Like, it's easy to be an ally when it requires words, right? It's much harder to do those things when there's real sacrifice needed, or you're exposing yourself to a ton of risk. And so the move to Chicago - that's one of those scenarios. I don't know what will come of that. There's a lot of complexities in all of that, a lot of which I can't get into currently... But those things come secondary to doing what's right.

\[50:22\] I think that when we look at the tech community and things like that, and even just people who mean a lot to me, that are very close to me, that are impacted by all of these changes - looking at Florida, it just doesn't align with our values, right? Like, we put up a code of conduct, and we talk about how we all need to be welcoming and accepting, and all of these things, and then it's like "Well, let's hold our event in this state that just keeps passing--" And I should clarify, the state I live in. Like, I have to live here. Moving out of state - speaking of hard things to do, right? A lot of complexities there. But, yeah, I mean, passing these laws that are very, very harmful to people in our community.

Some people may argue that, "What does that really do?" Right? Ron DeSantis isn't going to be like "Oh, GopherCon's leaving. We should reevaluate these laws." But it may not matter to them, but it matters to us, all of us who are part of the community. And it's a slightly different use of the phrase, but the law of two feet, right? Like, we're speaking with our feet. We remove ourselves from the situations that we don't want to be in, and move towards places. And so I think Chicago aligns a lot more with our values.

**Johnny Boursiquot:** Do you think we'll swing back over to San Diego at some point? That was my favorite spot, by the way... When we had it there.

**Erik St. Martin:** Yeah, so one of the things -- like, when we talk about the complexities and logistics and stuff, what a lot of people don't realize is the number of years in advance. I think we're contracted up to like 2025, like, going into the pandemic... And so there's a lot of complications in all of that. So yeah, San Diego is definitely on the list. We love San Diego, too.

And I should also clarify too, when we talk about sort of like acceptance and things like that too, and people doing their best, is there's a lot - and we don't have a lot of time here to go into the risks associated with running conferences and things like that... It's important to remember that while we made this decision, people's situations are completely different, and we have to understand there's a lot that goes into these things, in the contracts, and how long people are contracted out, and things like that. It's not an easy decision to make... And with any regard to conferences and these types of things.

So we have to have a critical eye on speaking with our feet, and not attending conferences that are just putting people with sexual harassment issues and things like that on stage, and stuff like that. We have to be very careful about -- we don't want to support conferences like that. But on the flip side, we have to understand that some of these things come with real, real consequences. You're signed out several years later, you've got minimum commitments and things like that, and great, you decide to go somewhere else. And then you get sued for everything, right?

And so we have to kind of give people a little space and support too when they don't do these things, and try to understand that - are these the type of people who would do something like... I don't know. Like I said, these things are complicated, and I don't claim to be an expert. We made the decision because like this conference was founded on the idea of the community being the most important thing, and so whatever comes from all of this, it's worth it to me to do the right thing. But also, I recognize that that's very, very hard.

\[54:11\] And these things take a long time, right? So even if somebody wants to do something, you don't just like make this decision on a whim. You have people reviewing contracts, and lawyers, and all of this stuff. They're not quick decisions. Even if you were already doing it, you can't make an announcement until you've found a new home. So there's a lot of these things we're sometimes giving people the time to sort this stuff out.

Don't get me wrong, publicly asking people like "Hey, what are you going to do about this? We don't agree with this scenario." Like, absolutely. Call people on that stuff. Let them know that that stuff's important to you. But also, you've gotta understand that these things -- if we have to sign a contract five years out, how long do you think it takes us to actually -- changing the wheels on a moving bus is a difficult thing.

**Angelica Hill:** Well, regrettably, we are coming to near the end of our time. I feel like there are so many more questions I want answers... But I have one more question to ask, which is - for anyone who's thinking about like "Should I, shouldn't I go to GopherCon this year?", why should they go?

**Erik St. Martin:** Because it's awesome.

**Angelica Hill:** Okay. \[laughs\]

**Johnny Boursiquot:** Clearly.

**Angelica Hill:** D'oh...

**Erik St. Martin:** I think, to Johnny's point, the networking aspect of conferences is huge. And I know we have digital means of communication, but it's not quite the same. And the interesting thing that I always find about attending conferences - and GopherCon is a conference that does this for me, but lots of conferences do as well - I always come out super-invigorated, and just excited about something that I want to just dive into... And having those conversations...

So I think, absolutely, if you can, please attend. If you can't, that's awesome, too; we totally understand, we're in the middle of some of the most challenging times for people, and everybody's situations are different... We recognize there's still risk in the pandemic, and we do our best to mitigate that stuff as best as possible... Also kind of recognize that budgets for companies to attend conferences and stuff like that, either through travel restrictions or just budget slashing and preparation for recessions and things like that aren't there... So obviously, if you're not in a position, we hope to see you in a future year... But we would love to get a bunch of people together this year. I know I'm super-excited about just getting together in-person with other gophers.

**Johnny Boursiquot:** I just can't wait to hang out with my friends again, and then make new ones. I'm tired of the endless Zooms, and the Hangouts, and the virtual thing... And I will acknowledge that for some, the virtual aspect of a conference is actually a good thing. It's allowed people to basically virtually attend these events, who normally wouldn't be able to travel, because it's not sponsored by their employer, or because it's just a little too much, especially if you're coming from abroad, and things like that... So we do see the value of having the virtual aspect/component for that, and hopefully, we can keep doing the hybrid thing, where we stream the talks as they happen. Obviously, the recordings are always available, usually within a matter of 2, 3, 4 weeks after the conference itself.

Ideally, we want to be able to support kind of both things for those who are able to make it on-site, and sort of get that full, immersive experience of actually physically hanging out with people. Hopefully, we can support both. I think that's sort of the best of both worlds kind of thing. But for me, really, it's the getting to hang out with people again... And I don't know, I enjoy the physical human contact. That's huge for me, and it's definitely what I'm looking forward to the most.

**Angelica Hill:** \[57:56\] Awesome. Well, I'm very excited. I would very much encourage anyone, I would mimic what you both said - if you can't go this year, please look to GopherCon in the future as a conference that would welcome you, that is wonderful to attend. As I said, I'm very excited to see where my involvement in GopherCon goes, because I feel like my first keynote was like "Anyone can be a gopher." My next one will be "How GopherCon changed my life and taught me I was secretly technical."

**Johnny Boursiquot:** Nice.

**Angelica Hill:** So I would say it can truly change your life. And I mean that from the bottom of my heart, from anyone who remotely knows me. Awesome. So now we're on to the -- not the best part of this discussion, because I think the whole chat was great; but the part that I'm intrigued to hear, which is unpopular opinions.

**Jingle:** \[58:45\] to \[59:03\]

**Angelica Hill:** Erik, what is your unpopular opinion?

**Erik St. Martin:** Is it the Brooklyn-style pizza is way better than Chicago-style? And also pineapple on pizza is good. Fight me. \[laughter\]

**Angelica Hill:** Catch me outside.

**Erik St. Martin:** So let's use one for the industry... I actually -- you know, as a manager and things like that, and doing interviews, and I've had discussions about people who've been interviewing for new jobs, and there's always that fun one, like "Why should we hire you?" sort of ordeal. Or "Why do you want to work here?" So I'm gonna go with my unpopular opinion is like I dislike those types of questions. It's kind of narcissistic, in a manner... To be succinct in it, "To make good money", or "To get a paycheck" is a perfectly acceptable answer to "Why do you want to work here", right? You don't need to have passion, and all... Those things are great, right? Like, for some of us who are invigorated by tech, and we want most of our life to be that, that's awesome. But it's perfectly okay if you're just somebody who just wants a good-paying job, so that you can enjoy the rest of your life outside of work. And I think we need to do away with all of the crazy, like "You need to write an essay about why our company is the only company you've ever wanted to work for in your entire life, and stroke our ego more." It's just -- yeah, it's gross.

**Angelica Hill:** Do you have a response to that, Johnny? I see you nodding your head.

**Johnny Boursiquot:** I understand the spirit in which the question is asked... But like Erik says, I don't think I like the sort of connotation of it. If somebody is asking that, they're really -- why don't they just ask sort of the underlying thing, which is "Why do you want to work here? What value is there going to be basically for us mutually to benefit from? What can we do for you, what can you do for us?" kind of thing. Because this is all it is at the end of the day, right? It's an exchange of my time for your dollars? Let's not pretend it's more than what it actually is.

\[01:01:02.07\] If I work somewhere and I happen to like the company - great, that's even better. But to tell you the truth, perhaps that is my unpopular opinion - I don't have a problem working for a company that is disliked. If the money is THAT good, right? I don't know. Because at the end of the day, you may have a social justice agenda, or you may have some sort of agenda, and that's fine. It's good to have beliefs, and have values, and believe in things... But I have one too, which trumps yours. In my case feeding my family trumps all of your values, I don't care what they are. For me, that is number one. And if that means working for a company that perhaps you happen to dislike, I don't have a problem with that. You do, but I don't have a problem with that.

And again, I know that's gonna be unpopular with some folks, but you kind of have to give people space to make the decisions that are right for them and their family; not everything I do or say you'll agree with, and not every decision I make you'll agree with, and that's okay, too. Give each other some space and some grace.

**Erik St. Martin:** The ability to walk away from your job because you disagree with something that company does is a position of extreme privilege, that not everybody has. And more power to the people who are in a position to do so, and are willing to take that risk. And it's the same thing with like the moving of a conference, right? Awesome for people who can do that, but it doesn't necessarily make somebody evil because they're not in a position to do so, or are uncomfortable with the risks, right? Like, some of us are much more risk-averse than others, and stuff like that. And there's nothing inherently wrong with making decisions that are good for your family.

It's the same thing when people quit a job, and they feel really terrible, like they owe the business their life. It's like, you should never feel guilty for doing what's best for you and your family, especially if it doesn't harm other people. Like, why even judge somebody for that? If it harms nobody, and it enriches that person's life, then it was a good choice.

**Angelica Hill:** Moral of the story - your choices are yours. Other people's choices are their own.

**Johnny Boursiquot:** Yes...

**Angelica Hill:** Let us all be accountable to our own choices, because we don't know what's going on with other people. And I would hope just listening to this conversation gives you an insight into the wonderful human beings that are behind GopherCon, and how considerate and thoughtful they are about the world. It has been an absolute joy to talk to you both. I'm hoping that I get you both on with me very, very soon again. And thank you for jumping on on a Friday...

**Erik St. Martin:** I'm always happy to come back.

**Angelica Hill:** I will hold you accountable to that, Erik. I know you're very, very busy, and now you've said it. You're coming back from GopherCon very soon...

**Erik St. Martin:** As long as nobody's like "Keep that man off the air", I'm happy to come back and discuss other things. Even if it's not GopherCon-related.

**Angelica Hill:** Well, as long as Go Time lets me come, I'll get you on, too. And if not, we can just start another podcast. Don't tell Jerod. \[laughter\]

Jerod Santo: I heard that...

**Angelica Hill:** Thank you both. I could babble to you all day, and it gives me such happiness just to see your faces, and I cannot wait to see them at GopherCon in real life!

**Erik St. Martin:** Me too.

**Johnny Boursiquot:** Yay!

**Angelica Hill:** Have a great rest of your Fridays, and a great weekend.
