**Mat Ryer:** Hello! I'm Mat Ryer, and welcome to Grafana's Big Tent, the podcast all about the people, community, tools and tech around observability. I'm joined here - as usual, it's Tom Wilkie. Hello, Tom!

**Tom Wilkie:** Hello, Mat. How are you?

**Mat Ryer:** Not bad, thank you very much. How are you?

**Tom Wilkie:** Yeah, having an interesting day.

**Mat Ryer:** Yeah, good. They are the good kinds of days, aren't they?

**Tom Wilkie:** \[laughs\] So I noticed some of our guests were looking a bit puzzled earlier when we played the intro music... And they probably don't know that you actually recorded it.

**Mat Ryer:** Oh, yes... Yeah, I did, yeah. Well, you know, today we're talking about hackathons, and this was a kind of little hackathon side project; something you could do outside of your dayjob, play around... It's a kind of creative thing, so it kind of fits with the subject a bit. Do you like it?

**Tom Wilkie:** I mean, it's very good. I'm not remotely musical, so I'm very impressed. And you crowdsourced some of it as well, didn't you?

**Mat Ryer:** Oh, yes. I went to the random channel in Slack and I asked people for a clap. I said "Have you always wanted to be a clap on a song?"

**Tom Wilkie:** And did you get enough claps?

**Mat Ryer:** I did get enough claps. I got about --

**Tom Wilkie:** Is each one different, or have you just repeated them?

**Mat Ryer:** Yeah, they're all different. They're all in different rooms, so the reverb's different; people do it differently, some people do it way too close, some people do it too far away... But when you average it and line them all up, it sounds great. And that's nice, that everyone - well, not everyone, but a lot of people got to have a clap in a song.

**Tom Wilkie:** I like that I can feel like at least I've contributed something to this podcast.

**Mat Ryer:** Yeah, there you go. Well, you're doing the talking bit as well, don't forget.

**Ash Mazhari:** That's a bucket list item, right Tom?

**Tom Wilkie:** Yeah, being a clap on a podcast.

**Mat Ryer:** Yeah, cross that one off the bucket list then. Good joke, Ash. Well, that other voice you've just heard is one of our guests. Ash Mazhari is the head of corporate dev and special projects at Grafana Labs, and leads the Hackathon. So this is why we invited you along, Ash. And you're calling in from Seattle, is that right?

**Ash Mazhari:** That's right. Thanks for having me, Mat.

**Mat Ryer:** It's a pleasure. How long have you been in Seattle now?

**Ash Mazhari:** It's been 13 years actually, and it's gone by quite fast.

**Mat Ryer:** Hm, has it? Well, faster than 13 years should take, or...?

**Ash Mazhari:** Yeah...

**Mat Ryer:** Like, it's not a time travel thing, is it?

**Ash Mazhari:** It feels like it's been maybe five, but also since Covid I have no sense of time anymore, so...

**Mat Ryer:** Yeah, me too. Well, in a similar timezone, if not the same exact timezone as you, I think Ryan McKinley is also there. Ryan, you work on Grafana and you make it do fundamentally new things, don't you?

**Ryan McKinley:** Yeah, I've been working with Grafana for (I think) six or seven years now...

**Mat Ryer:** Did it feel like that much time, or did it feel...?

**Ryan McKinley:** Oh, time is -- I'm not even sure what to say anymore... But yeah, I worked in the open source community, along with Torkel pretty much from the beginning... And I've now joined and I'm working inside Grafana as we grow and make this bigger and better.

**Mat Ryer:** Great, yeah. And you're calling in from Oakland, California, is that right?

**Ryan McKinley:** Pretty close... Actually Alameda, which is a little island near Oakland... But we're affiliated.

**Mat Ryer:** Oh, nice. You live on like a little island?

**Ryan McKinley:** It's not so little... You know, we've got a drawbridge, so...

**Tom Wilkie:** Can you pull the drawbridge up if you don't' want any of the Oakalnd people coming over?

**Ryan McKinley:** It's actually part of the dirty history... There were riots in the '60s and the drawbridge did get pulled up.

**Tom Wilkie:** Oh, really?

**Ryan McKinley:** It's not our proudest moment, I'll say.

**Tom Wilkie:** I'm so glad I brought it up.

**Mat Ryer:** There you go. You never know when you're gonna hit upon something problematic. We're also joined by Ward Becker. Ward is a solutions engineer, and you're calling in from Amsterdam; is that right, Ward?

**Ward Becker:** That is right, that is right. So I'm cheating a little bit... I'm a little bit below Amsterdam, but nobody knows that city, so I'm just saying Amsterdam for the geographically-challenged audience out there.

**Mat Ryer:** \[00:04:13.22\] And by below you mean South, not like underground. It's not like a secret bunker underneath the streets of Amsterdam.

**Ward Becker:** I cannot comment on that, but it's indeed a little bit South of Amsterdam, yeah.

**Mat Ryer:** Okay, cool. Welcome. And Ward, the reason you're here, the reason we invited you and Ryan is because you are winners of said hackathon at Grafana, right?

**Ward Becker:** Yes, indeed. And when you say "winners", that is true, but I'm not like the only one. There was actually a whole team with me that made that possible. So I'm part of the four folks from my team, and Ryan was probably also part of a larger team...

**Ryan McKinley:** Yeah, I was part of a team of five.

**Tom Wilkie:** And I know this is a sensitive topic for Mat, but we also invited Mat to the podcast that he hosts because Mat, you also won, didn't you? You won our second Hackathon.

**Mat Ryer:** I was on the team of people who won the second Hackathon.

**Tom Wilkie:** You don't like talking about it, do you?

**Mat Ryer:** Well, I'm very proud of the work that they did. It was very fun, actually, and I worked with people I hadn't worked with before, which is one of the nice elements of this, which I'm keen to talk about. And maybe we should go back and talk about this from the beginning then... What is a hackathon? What do we do? We basically take a week off, and...?

**Ash Mazhari:** What is a hackathon generally, or what is it at Grafana Labs? Because it can mean different things to different companies, right?

**Tom Wilkie:** Yeah, let's start with what we do, I guess.

**Ash Mazhari:** Yeah, I guess for us it's all about building cool stuff off Vector. There's always like the top-down mandates of what you need to do for customer feedback, and priorities, and roadmap, and then where you think you need to go in the industry to stay ahead of competitors... But I think what's cool about our hackathon is it's completely open. You can build whatever you want, and really leverage the expertise and knowledge that you have about our products, or just tech in general, and build something cool.

**Tom Wilkie:** So who takes part in hackathons at Grafana Labs?

**Ash Mazhari:** It's open to everybody, which I think is also somewhat unique.

**Mat Ryer:** Hm. Like, literally anybody in the company could take part?

**Ash Mazhari:** Absolutely.

**Tom Wilkie:** That's pretty cool. Set the scene... How long do they run for, how does one take part?

**Ash Mazhari:** Yeah, so our hackathons run for about a week. We give people time away from their dayjob to go and build something on the clock; because what we've found is a lot of times if you don't do that, people just won't take time out of their personal lives. So we thought it was important to carve out that time, give people that space to go and build, and then also give them the flexibility to do that in an unbounded way.

A lot of times you see hackathons that have a theme, or a specific objective... We wanted to not have that, so that it's completely open-ended. And then folks go and build for a week, come back, present, the judges go through the presentations, and then we sort of work the way up all the way to the finalists, and we present that at the company all-hands, which is also really cool, because it brings a certain visibility to the hackathon that's company-wide.

**Tom Wilkie:** Why do we choose to do this? Don't people get to build cool stuff during their dayjob?

**Ash Mazhari:** They do, especially at a company like Grafana Labs, where we have a pretty cool open source mantra, and a lot of interesting projects that people are excited about, passionate about... But in general, there's always that mandate of some broader mission that relates to the company objectives. The great thing about the hackathons is it takes all of that away. So forget about whatever priorities there might be from customers and whatnot, and go do what you've always thought is exciting and interesting.

**Ryan McKinley:** \[00:07:39.18\] Yeah, to me this is giving me new kind of hope and optimism as we grow. I joined Grafana as a very small company, where everything was really engineering-led; we were building stuff that we use, we know exactly what we want... Engineers - we're building stuff for ourselves. As we're getting bigger, we're putting in new infrastructure, new systems, new teams that kind of help manage that and make it less chaotic, which is great, and required to be mature and stable and all those things, but we don't wanna lose what made us interesting. We don't wanna lose why I work here. I work here because I wanna build stuff; I can't articulate it really without building some of it. I think that's true for a lot of us. So it's been great, because I think it's devoting real time for everyone to express themselves the way we have from the beginning.

**Mat Ryer:** Yeah, and it has this other benefit as well... When people join from companies where they don't have a very kind of engineering-empowered culture, they'll often have practices that are much more controlled; it's not so free. And there is that thing -- when I joined Grafana, I got the sense that there is this history and empowerment thing going on for engineers... And so you really want to give people a chance to flex those muscles and take part in that, and I think the hackathon does that quite well.

**Ryan McKinley:** Absolutely. And to say "engineers only" I think isn't quite fair, because the other part, the value I see is that we're giving a chance to work really across the company. When you actually look at the projects that win, they're always ones that involve someone across all of our disciplines. And as an exercise, I think giving people the chance to ignore all meetings for a week... You know, we say "Don't do your work." It's never really true; there's always something else going on. Ward, where you're able to just devote a hundred percent of your time to this? Probably not. But you do have an excuse at times to cancel some meetings... And that's great.

**Ward Becker:** Yeah, indeed, indeed. I'm a solutions engineer, so that means that I work with customers that are testing our software, and I can't really say to the customer "Oh, sorry, you can't test our software right now. I'm busy." That is a little bit hard. Of course, we definitely take that into account with the planning and that kind of stuff, but customers come first in my job. That is, I think, really important. But overall, I did spend quite some extra time, but it's also really nice to be able to work on something in a week, work with folks that believe that it is something worth sharing, and being able to present it to the whole company in just a week's time. That really energized it for me, and that also made it very easy for me just to spend a little bit more time after my normal dayjob on this.

**Tom Wilkie:** I think one of the reasons we're also super-keen on hackathons is - you know, coming from that kind of small company/startup background, I think I do my best work when I'm kind of given the freedom to pursue my own interests. The best open source projects come from scratching your own itch almost... As Ryan was saying, I think giving the engineers freedom to explore other ideas that motivate them personally, solve problems that they might experience on a day-to-day basis does tend to find new and interesting problems, new and interesting ways of solving them, and find things you don't expect. So that's one of the reasons why I'm so keen on the hackathons - it kind of surfaces up that thing you've always wanted to do, but you find you're just in the wrong team to do it.

**Ash Mazhari:** Yeah, for sure. And I think what's really cool is that, especially here at Grafana Labs, I've noticed people are just so talented and creative. When you give people that space to go and do something that they're passionate about, the kinds of things people have done so far have just blown me away. Just the fact that they can do a really cool project like that in a week's time just speaks to the people here as well.

**Ryan McKinley:** \[00:11:37.04\] Yeah. Interestingly, the week is a great kind of metric there. Because if it were a day, what you'd do is much smaller, and inconsequential. Probably still useful; there's a lot of things that a day of focus would help. But a week is actually long enough to rethink and reframe some bigger problems into something that's achievable, but meaningful. So I think it's phenomenal... And it also can help structure how we think about new projects going forward, how we think about different approaches... It's a chance to ignore existing systems, ignore existing approaches, and try something new.

**Tom Wilkie:** Yeah. So we've done three hackathons now at Grafana Labs over the past nine months or so... What did we learn from the first one? What did we do wrong, and how did we change the way we run the hackathons?

**Ash Mazhari:** Yeah, so I think what we learned is that 1) again, just the ability for people that output such great projects in that week's period of time was really impressive. So it reinforced that point that Ryan just made about the duration.

There was, when we first formulated this hackathon, a lot of concern about a full week's time given away to basically anyone who wanted to take that time, and so we got a lot of pushback from managers and things like that. And so that actually worked out well in terms of the output, but there was some questions around how people manage priorities, and things like that, that we had to go back and kind of provide guidance to managers on about "Listen, this is important." But obviously, customer things like what Ward was describing do come first as well.

**Tom Wilkie:** Yeah.

**Ryan McKinley:** Right. It's also -- in all fairness, the first one we're learning what this is, how to approach it, what participation actually looks like... And I think the uncertainty of how much time, how can we do it, when is it, was probably the biggest thing we learned from the first hackathon. Giving everyone a month, two months of prep time to know and schedule it is pretty different from "Hey, it's gonna be in a week."

**Ash Mazhari:** That's true. The first one was rolled out very quickly... And actually, in retrospect, I'm glad Raj pushed us to do it, because like you said, we learned a lot from it, and that set the stage for this three times a year cadence that we agreed to do.

**Ryan McKinley:** Well, again, that was one of the moments that I'm most proud of. I've been proud of Raj pretty frequently recently, I'll say, but we had a large leadership meeting discussing the success of these, and I'd say there's a distinction between what I would refer to as the mature people in the room, who are worried about how do we actually build an enterprise company, how do we follow through on a lot of the promises that we have... You know, and understandably, concerned that it takes a lot of time, it takes a lot of attention... And Raj's response was like "Okay, so four times a year, right?"

**Tom Wilkie:** \[laughs\] Yeah.

**Ryan McKinley:** And you know, we compromised at three... Which I think with the right guardrails, I think we can do this well. But it's something that makes me pretty proud to work here.

**Mat Ryer:** Yeah, I had friends at Google that would have that 20% projects where you could take the Fridays to just work on whatever you wanted... And what they try and do is save them up, so that they could put it all into a week. So it really made sense when I heard that this is actually a week thing... Even though I understand that's like a lot of time. But it's worth it, don't you think?

**Tom Wilkie:** Yeah, a hundred percent. And context switching is a real thing, right? If I had to spend every Friday switching to a different project, I'd lose a few hours a day. Whereas focusing on something for a whole week does allow me to see things differently.

**Ward Becker:** Yeah, and especially because everybody that was participating in the hackathon was focused on the hackathon, so it's also easier to say "Sorry, can that wait till next week? Because I'm busy with the hackathon."

If you have the whole company just going through the motions as they normally do, then it's much more difficult to push back and get that dedicated time, because there's always something urgent if other people are just working on their stuff as they normally do every day.

**Tom Wilkie:** Ash, I think you mentioned earlier that we judge the hackathons, right? We pick a winner and we've kind of tried to gamify it... Why did we do that?

**Ash Mazhari:** \[00:15:53.21\] Yeah, so I think that aspect is - you know, obviously, you wanna have a competitive spirit to these things. I think engineers by their nature are maybe somewhat competitive, and...

**Tom Wilkie:** I mean, not just engineers, but humans, really.

**Ash Mazhari:** Humans, yeah. Absolutely.

**Tom Wilkie:** Engineers are humans, too.

**Ash Mazhari:** Yeah, that's true in most cases. \[laughter\] But nonetheless, I think having that sense of judging it and presenting it was really important, because we wanted to people to 1) as part of the criteria, have a sense of the pitch, and how they present that. And then the judges also needed to have a certain set of criteria. The judges needed to be in tune with how the projects are evaluated, and how they could be important. We didn't want judges that were out of touch... And ultimately, it came together in a really great way, because ultimately that flow of "Okay, I worked on something really cool, I created it. Now I'm presenting it" - that excitement, you could feel it in the pitches, and then the judges had this challenge of "Wow, this is so many great projects. How do we elevate and pick the winners for the next round?" And that's, I think, fueled a lot of the excitement about this, because now people, when they work on this thing, they're thinking about the pitch, they're thinking about how they're gonna win over the judges, they're thinking about how do they get to the next round... And that's been really exciting to see.

**Tom Wilkie:** Ward, what was your opinion of the judging aspect of this? Would you have done the hackathon even if it weren't kind of gamified?

**Ward Becker:** That is a great question. I think yes, because for me initially it was just an opportunity to get something I wanted in Grafana for a long time already. \[laughter\] So for the folks that might not know, the project that we worked on was called "Stonks and Crypto", and one of the key parts of it was a new visualization in Grafana, to actually visualize stocks. Because I was working on a pet project, creating a foundation of algorithmic trading, and I was like "Okay, let's send the data to Loki, and then visualize it in a candlestick diagram", which is quite standard in the stonks and crypto world, and there wasn't any. So it was like, "Oh, help...! I want to make sure that this is there." So I'm like "Okay, well, we have the hackathon. Let's create something of a pitch and see who's gonna help out with creating such a candlestick diagram", and that kind of stuff.

So that was the initial one. But overall, I did like it that it was judged, and that we got multiple rounds, and you just felt excitement... And overall, it was always good to be able to win; that's really nice, to see the validation of your idea. But yeah, it really started with just wanting to do some cool stuff, and that was really valuable for me.

**Ash Mazhari:** Yeah. And the way we judge it is, for the final round, the company votes. So really the whole company is now judging their peers and their projects, and I think that's also been exciting, right Ward? Because you had a chance to be on that stage in front of all the Grafanistas.

**Ward Becker:** Yeah, it's really exciting... And it's really funny being on both sides. Being the person that is judged, and the person that needs to judge. Because we now did like three rounds of hackathon, and it was so difficult the last hackathon. I basically wanted to give a +1 on all the projects, and I felt really bad to actually need to choose; it was also really hard... And from the receiving side it's also like "Okay, all the other projects are also so good. They're SO good, and we're probably not gonna win, because the other ones are fantastic, and they did so much..."

Yeah, it was just very exciting; the pitch, the presentation, the people that presented were very smart, and... Yeah, it's a really exciting thing. I also think that it brings together the company on those all-hands calls, when we have the final voting. You really have a nice group/team feeling there. I really like it. I feel very energized, and also very positive about the future of Grafana Labs, because there are some things that we see maybe there first, before it's actually added at some point maybe to the roadmap. You never know.

**Mat Ryer:** \[00:20:04.17\] It's funny - for me, the competitive side of it wasn't an appeal. But it's very much more about the collaboration and being able to -- we're almost working together to build cool things. In the last hackathon somebody built something into the Grafana Incident Tool, which my squad builds... And we took time out of our day to help them do that. We wanted that to be a successful project as well, even if it competes with something that we're doing.

So although it's got this competitive kind of edge to it, I think the spirit in which everyone engages in it is very positive. There's no sabotage, is there? Now that I've said it, there will be. I've just thought of it, so I'll have to, next time. \[laughter\] But you know what I mean? There's no sabotage -- it's not really like aggressively competitive; it has a really nice feel about it, I agree.

**Ryan McKinley:** So the way it's structured, where we have a bunch of projects and then there's judges who are evaluating it based on criteria that does essentially relate to how relevant is it to our customers. And the initial rounds are really like "What does this mean to us as a company?"

The final rounds are like "Who likes the presentation? Who likes the video?" Ward, for as much as I like your project and did my best to help you, you should not have won that, aside from your amazing video, which the crowd loved. So there's a bit of a randomness to who actually wins.

**Tom Wilkie:** But I love that aspect of it.

**Ryan McKinley:** I know, absolutely. But that's the part that makes it that you -- like, to win, is it just a video? No. It can't be that, because we don't want that as a company. But I love that it does feel random, a bit, at the end.

**Mat Ryer:** The final pitches are five-minute videos, that get played to the company.

**Tom Wilkie:** Yeah.

**Mat Ryer:** So that's how you pitch. But it isn't just about making a video though, right?

**Tom Wilkie:** No, but I think it's important -- you know, one of the judging criteria is how well was this presented as a project, or how good was the pitch. I distinctly recall the quality of the pitches between the first, the second and the third hackathons has drastically improved because people realize they're being judged on this. But it's important to me and important to Grafana Labs that our team know how to communicate their ideas, and know how to communicate them effectively.

Honestly, Mat, the same could be \[unintelligible 00:22:24.14\] One of the reasons you won that hackathon is because your pitch was hilarious. It just had everyone in fits and giggles. It was just really well put together.

**Mat Ryer:** Yeah, I think that's what happened, isn't it? The first one we kind of learned that "Oh, you can make a cool video", but no one had that thought before. And then suddenly we start doing that. And by the way, we steal other ideas as well, from other good projects; we were stealing. And in fact, I know of one hackathon project that was based entirely on a previous hackathon project.

**Tom Wilkie:** Wow.

**Mat Ryer:** So that spirit of stealing from each other and learning from each other...

**Tom Wilkie:** We'll call it borrowing, Mat.

**Mat Ryer:** Okay, yeah. Borrowing. Well, you can't give it back...

**Ash Mazhari:** Inspiration...

**Tom Wilkie:** But back to the video comment - these presentation skills aren't wasted, but I distinctly remember after you produced your hilarious runbook video, you then went on to launch a Grafana instance, and the video presentation for the launch was super-slick, really well presented...

**Mat Ryer:** Thank you, yeah. You basically pick up those skills because you need them for the hackathon, and then it's like "Oh, we can actually do this in the real world as well." So yeah, we'll put a link to that in the show notes, so you can watch the Grafana Incident Introduction video that I made using ScreenFlow, which by the way is a great tool if you wanna make --

**Tom Wilkie:** Did you write ScreenFlow by any chance, Mat?

**Mat Ryer:** No, I didn't. No.

**Tom Wilkie:** Oh, okay. \[laughter\] He always likes to get a plug in for one of his own personal projects in every podcast.

**Mat Ryer:** No, I'm not trying to do that. It just comes up. Prolific...

**Ryan McKinley:** \[00:23:55.06\] Going back to your question of whether the competition is what drives it... I'd say it's nice, it's good that it sort of puts real stakes on the table, but I don't think it's the main motivator for most people. I really think the main motivator is that we have -- everyone we're working with has ideas, has stuff they wanna do, and the competition sort of helps with visibility, helps give it some weight. So far, it's felt very successful to me.

**Tom Wilkie:** So here's another controversial opinion - part of what we do at Grafana Labs is we also give out prize money for the winning team. I mean, it's quite a lot; I don't actually know how much it is, but it's thousands of dollars.

**Ash Mazhari:** Yeah, it's four figures.

**Tom Wilkie:** And I know a lot of people will be hearing that and going "That is crazy, giving out money to win something you're paid to do in the first place." So what do you think? Ryan, do you think the prize money is a meaningful part of the hackathon?

**Ryan McKinley:** Well, it is now, right? It certainly is. We're all motivated somewhere in there, whatever you wanna do with your money. We live in capitalism; this is the world we live in, so absolutely.

**Tom Wilkie:** What did you do with your prize money, Ryan?

**Ryan McKinley:** We just finished, so I don't even know what the prize is yet.

**Tom Wilkie:** Mat.

**Mat Ryer:** Yeah.

**Tom Wilkie:** Same question. What did you do with your prize money?

**Mat Ryer:** I gave mine to Charity, which is the name of my wife. \[laughter\] Not really...

**Tom Wilkie:** I've met your wife, and she's not called Charity. So does she know about Charity? \[laughter\]

**Ash Mazhari:** Ouch, ouch...

**Mat Ryer:** This is not public, is it? \[laughter\] No, something tells me my wife is not gonna be listening to Grafana's Big Tent.

**Tom Wilkie:** No, I doubt it. \[laughter\] I sent \[unintelligible 00:25:35.10\] a link to the podcast and she's like, "Yeah, yeah, I'll listen to it later..."

**Ward Becker:** Yeah, I think we split the prize money in four, because we're four people working, and I think one of those - they bought a video card, which nowadays a GPU is pretty expensive, although prices are going down... At that point it was pretty expensive. So that definitely helped. And I think also somebody bought a skateboard with one wheel; how is this called, Ryan? I think you know how it's called.

**Ryan McKinley:** \[unintelligible 00:26:03.29\] got a one-wheel skateboard, which he practiced for a while, and ran the batteries out at full speed, and was in bandages for a while, but... He still feels good about it.

**Mat Ryer:** What's a one-wheel skate-- what did you do with the other three wheels?

**Ryan McKinley:** It's an electric skateboard with one wheel in the middle.

**Mat Ryer:** Oh yeah, I see.

**Tom Wilkie:** It's self-balancing, right?

**Ryan McKinley:** Well, you do the balancing part, too.

**Tom Wilkie:** Right, yeah.

**Ryan McKinley:** So that's a good use...

**Ward Becker:** Yeah. So it took a little bit longer to actually wrap up the new visualization, because somebody was in bandages, was injured... \[laughter\] So yeah, it was a little bit longer in beta because of that.

**Mat Ryer:** Did you factor that in, Ash? \[laughs\] The injuries from the people blowing this prize money.

**Ash Mazhari:** Definitely unintended consequence...

**Tom Wilkie:** You mentioned earlier that we do recordings; we record the presentation. I think in the first hackathon we didn't. We dive live presentations.

**Ward Becker:** That is correct. And that's where my team cheated... Because first of all, I know how difficult it is to do presentations, and do like a five-minute presentation is actually harder to do a five-minute presentation really well, than do like a one-hour presentation. It's incredibly hard, especially when you have live demo-ing into it, which probably always will fail at the wrong moment; that's how it works.

So I and our team actually opted to do a recording, but all the other teams didn't. And I think because of that we were able to better relay our message, and have a better pitch... And also because we needed to do it multiple times, that was just also easier for me.

**Tom Wilkie:** \[00:27:53.26\] And now we say everyone must do a recording, right? It also stops -- we had some presentations go slightly over their five minutes; that wasn't necessarily a fair use of time, so we now make everyone submit a video presentation, and it makes it much fairer, because you're gonna be judged through multiple stages, and you don't have the opportunity to change your presentation and work on it some more, which was also happening in the first go. So if you're gonna run a hackathon, maybe we'd encourage you to do video presentations at the end, instead of live ones.

**Mat Ryer:** Hm. And some people did just do slides and record the screen and talk, didn't they? I mean, the last one, Ryan's video was like -- I can't believe that. Like, I think that might be too good that it's ruined it now. I think it may have ruined it.

**Ryan McKinley:** I'm a little worried about that too, but... You know, Petros was a video producer in a former life...

**Tom Wilkie:** Oh, wow.

**Ryan McKinley:** ...and he brought out all the guns for this. But he also really wanted to win, I will say... When we started, he said "I'm in it to win it." And I said "Okay... It's good to be honest about this."

**Mat Ryer:** But he did, to be fair -- he did win it.

**Ryan McKinley:** Yeah.

**Ash Mazhari:** But that's honestly up-leveled our production -- I think it's gonna up-level the future pitches, because everyone realizes... I mean, as you pointed out, Ward, yours was well-produced, Mat, yours was... You know.

**Ryan McKinley:** Yeah, I mean some of that I think is constructing a team of the right people...

**Tom Wilkie:** Yeah.

**Ryan McKinley:** ...which includes presentation as an essential role of that. Even in the project I was working on, we had UX work that was mainly used as sort of slides of helping people understand where the project could go; not necessarily part of the technical implementation. I mean, we had sort of the range... But getting a solutions engineer involved in telling your story is hugely powerful, because they tell their stories every day.

**Ward Becker:** What I really liked about the recent hackathon - there was one project where they actually had user interviews... So people that were testing the feature, giving their feedback on why that feature mattered for them. I've found that really powerful, because these were real people, they were not talking from a script, or anything. That was just their honest opinion, and included in the presentation, which was awesome.

**Mat Ryer:** Yeah, but Ward, they're not gonna put one in where the person says "Nah, not for me... Thanks..." \[laughter\]

**Ward Becker:** No, it was a totally fair representation. Nobody did some editing there. \[laughter\]

**Mat Ryer:** That's another one of those ideas where I think that's gonna get borrowed...

**Tom Wilkie:** Yes, a hundred percent. A hundred percent.

**Mat Ryer:** ...to lend the word from Ash.

**Ward Becker:** Actually, that's a question for Ash... Are you not worried that because presentation is really important and we see incredibly high level of quality there, that it actually makes it harder for people that have great ideas, but don't have the presentation skills to actually be visible and to win here?

**Ash Mazhari:** Yeah, so similar to Tom's point about setting a time limit and going in with a recording model to level the playing field - I think what we wanna try to do on the quality of the pitches is try to help everybody who wants video production assistance to do that. So basically, what we're thinking of doing is getting a production crew contracted for that week, having open office hours, and then when people are creating their video, they can go to this office hours and get help on how to make it better.

I don't want it to be a distraction from the actual work, and make it seem like all smoke and mirrors, but at the same time, I do think up-leveling the pitches makes it more fun for everyone else as well.

**Ward Becker:** Yeah.

**Ryan McKinley:** Yeah. But interestingly, the parts of it -- production quality is one thing, but a scripting content... It doesn't really matter how flashy it is without a good scripting content.

**Mat Ryer:** Yeah, to be fair, Ryan, your last pitch could have just been an empty screen that just said what it was gonna do, and I would have still voted for that. \[laughter\]

**Ryan McKinley:** Yes. We went into it knowing that, but I believe some of it is like, again, the value of the... I mean, maybe it's worth just saying what the project was, because then you're like "What are you talking about?!"

**Tom Wilkie:** \[00:32:12.15\] Yeah, the audience are very frustrated right now, talking about this project...

**Ryan McKinley:** So in the last project, you know, anyone who's worked with Grafana for a while has always \[unintelligible 00:32:19.07\] "Hey, what's your story with GitOps? How do I actually manage what goes in, and do version control?" And you know, we've tried many awkward approaches in the past, so as a hackathon we sort of started over and just took a new approach to how to do GitOps, and make it first-class, dashboards, read and write from Git. There's some hand-waving in between... So you know, that alone, that idea - people were like "Great, let's finally do it. You've talked about it forever." So it's been a week prototyping it, showing how we could do it... Some of it was throwing out projects that are in the works, and things that people are really dedicated to, saying "Ah, do we really need to do that approach?" And it's been really interesting to watch then how things change as you get the visibility company-wide to say "This is important, and it's important to do it soon."

**Ward Becker:** Yeah, I particularly found this very daring, that you actually went for Microsoft Visual SourceSafe instead of Git. \[laughter\] That was really a highlight...

**Mat Ryer:** Brave.

**Tom Wilkie:** Very brave, yeah.

**Ryan McKinley:** Very brave, yeah, exactly.

**Mat Ryer:** Another nice thing about this fact that it's a week, and it's a hackathon - you have permission to cut corners, and really focus on what matters, whether that's the key bits in the storytelling, even by choosing what you build. When we did ours, which was a -- I think I can talk about what ours was, can't I, Tom?

**Tom Wilkie:** Yeah, of course you can.

**Mat Ryer:** So we did this project which was basically dynamic runbooks. So given an alert, you change variables inside that and put graphs in, and things... So it's like runbooks that are alive. And one of the things we actually built was an editor for this... And that's just a piece of the story. And this was an interesting discussion that we had. It was kind of like a tough choice to make, what we actually built... And so yeah, we decided to build the editor. So this is where you're typing and writing your markdown runbook, and then you see the preview on the other side with all the context added. And we skipped over auth with GitHub, and other things that you might need.

**Tom Wilkie:** Yeah, of course.

**Mat Ryer:** Of course you wouldn't waste your time there. So that's nice too, being able to just focus on those bits.

**Tom Wilkie:** There's a good question there though, Mat... What's gonna happen to that project?

**Mat Ryer:** Well, the other thing when we did it was we were thinking "Could we design something that's actually deliverable quickly?" Something that's not got too big a scope; really shrink the scope right down. And yeah, this is a good question, "What then happens now?" At some point we have to get that scheduled -- we have to turn that into real work, and put that into somewhere.

**Tom Wilkie:** But it is part of the roadmap now for your team, for that product. And so much of our future roadmap and the stuff we build in hackathons does eventually end up -- I mean, Ward, what happened with Stonks and Crypto?

**Ward Becker:** So the main part - and that's the visualization part - got released. I think it took a few minor versions of Grafana, but then eventually that got released, and it's now available for everybody to use.

**Mat Ryer:** So the candlestick visualization, is it?

**Ward Becker:** Yeah, the candlestick visualization.

**Mat Ryer:** I didn't realize that came out of that project. I thought you just used it -- ah, that's even better. I vote for you. Can I go and change my vote? \[laughter\]

**Ward Becker:** Well, we already won. We're okay.

**Mat Ryer:** Yeah, you don't need my vote.

**Ward Becker:** We don't need the vote. But yeah, one of the other things is that -- so one thing is of course to create a visualization, but the other thing is also to create something that people can see externally. "How do we use this candlestick diagram of visualization?" And that's something we're currently working on, or I'm working on together with some folks, to build up demo dashboards; maybe a few YouTube videos around it, so that people get a little bit of sense of how they can combine it with maybe some of the external APIs that are available...

\[00:36:14.13\] Because there's a lot of Stonks and Crypto information that you can get for free, where you just need to provide an API key and a REST endpoint and you're good to go. And that's actually very easy to do, and that's something I'm currently building kind of a demo video for, so that people know how to go about that.

**Tom Wilkie:** And I know the other project that I think came second in your hackathon was a cool project to accelerate PromQL queries and shard them...

**Ward Becker:** Yeah.

**Tom Wilkie:** And that just got released as part of Mimir, as part of our new open source project. So a lot of the projects that come out of the hackathons do end up in some of our open source, in blog posts, in videos, in our products.

Last question from me, Ryan - and this is probably what any Grafana used in the audience really wants to know - is when is your GitOps project gonna be shown to the world?

**Ryan McKinley:** It's very interesting, because since showing it, it's allowed us to (I'd say) simplify some of our approaches to things, but also really focus on what needs to happen soon. So Grafana 9 is coming, and I'd love to say "Grafana 9 will have this."

**Tom Wilkie:** Well, you heard it here first, people, and on that note we'll finish the --

**Ryan McKinley:** You heard it here first! \[laughter\] But I also don't wanna wave our hands, because the last thing we need is to over-promise on a solution that's still not quite right. So I'm dedicated to making sure - and I'd say my main focus for a key deliverable out of the hackathon was like what are the two fundamental changes we need to make, that allow this to be real and first-class. And those will be part of Grafana 9; you may not notice. Along with it we will have some sort of exploratory workflows that we'd love to start working with people. But very soon after -- I mean, it's been interesting, because dedicating and redirecting so many people and resources and ideas towards this now.

**Tom Wilkie:** But that's the power of the demo, right? That's the power of putting it together. Now people have something concrete they can aim for.

**Ryan McKinley:** A hundred percent. And enthusiasm, excitement to do something that's real and meaningful, instead of another approach that may not actually go anywhere; there's now momentum that's like "This will happen. Get on board, or..."

**Tom Wilkie:** There is no "or". Just get on board.

**Ryan McKinley:** Yes, there's technical compromises, but we have to figure those out. That's normal.

**Ash Mazhari:** Yeah. And the fact that all these winning projects are getting onto the roadmap, the point that Tom made, actually, in one of the surveys we did after the hackathon, was one of the key motivators for people. They said "Funding or resources for my project" was one of the top reasons that they participated.

**Ryan McKinley:** And visibility. Because even -- it's not just the winners that do it. I'd say in the top 15, 10 of them are kind of real things. So that's where I'd say that actually winning is a little bit of a crap-shoot; it's a little bit random, that final prize. But you know, it's a good mass of these that are really interesting projects, that should happen. The sad part is how many are really interesting but actually can't happen, and kind of will -- I don't wanna say die on the vine, but... We also, as a company - my God, we're doing a ton of half-built projects... \[laughs\]

**Tom Wilkie:** We have to focus occasionally.

**Ryan McKinley:** I'm guilty as anyone there, but... That part's a little sad to see.

**Ash Mazhari:** Yeah, but it's also a function of the volume of participation. We've had over 150 projects in less than a year, so it's a lot to sort through for our relative size, but it's also a good problem to have.

**Ryan McKinley:** \[00:39:51.05\] Yeah, totally. And importantly, projects -- you brought this up before, of like... You know, one hackathon project was just picking up the last one and doing it again. I think that's great, personally... And in a real way, coming to a hackathon saying "We're gonna work on a Git workflow" and Petros shows up with documentation that we wrote two years ago on why this is a good idea... You know, is that cheating? Maybe. But do I care? No.

**Ash Mazhari:** No, I think that should be encouraged, picking up where others left off. I think one of the ones around the racing and video game integration with Grafana also originated that way.

**Ryan McKinley:** Yeah. Those ones I'm so thrilled to see, mainly selfishly, for having built a lot of the streaming infrastructure, and kind of what could Grafana be as a real-time solution... Watching people take those and pick them up to do real things is always really exciting.

**Mat Ryer:** Will we ever release the videos? Because I have a feeling that people would love to see these.

**Tom Wilkie:** I think we should. I think we should find a way to.

**Ash Mazhari:** Yeah, absolutely.

**Mat Ryer:** I mean, if we release the -- well, when we release the runbook thing, I wanna put the hackathon project; tell that story in the blog post when we do that. But there's loads of other projects and great ideas and stuff that is just sitting there now. It would be great to crack that open.

**Ryan McKinley:** Yes is the short answer. We should definitely release them. There's probably gonna need to be some editing, but that's reasonable.

**Ward Becker:** Yeah. And we also need to be careful, because for example, when you post the video on YouTube and people see "Hey, this is done by Grafana", people automatically assume that is something that we already pre-agreed to put on our roadmap. And yes, of course, like the previous discussion, we really would like to do it, but there might be reasons why it's not now, maybe later, maybe in a different form... And we also need to be careful on the expectations.

**Mat Ryer:** Yeah, that's a very good point.

**Ward Becker:** Because I talk a lot with customers, and if they see something like that... For example, we're working with a customer and they say "Yeah, we really need that Git integration", and they see the video, and it's like "Yeah, sorry, but it looks almost at -- it's a great video, you can just touch it, you can just feel it", and then to say "Sorry, it might take like a year to actually make this a reality." That is really hard, so we need to be careful there. And it's not that we don't want it, it's just to make sure that we set the right expectations.

**Mat Ryer:** Yeah, you're right.

**Ryan McKinley:** Am I wrong that the blog post for the candlestick post - I think it included the video.

**Ward Becker:** Yeah, it is a little bit a different video. So it's not the complete video that we did for the pitch, because reasons... \[laughs\] Again. But yeah, it is indeed the demo that you are able to see during the pitch.

**Ryan McKinley:** Right. And I expect the GitOps flavor to be similar...

**Ward Becker:** Yeah.

**Ryan McKinley:** ...where we'll edit it slightly, but...

**Mat Ryer:** Do you need a hand?

**Ryan McKinley:** ...but mainly, the goal is to not have it be roadmap announcement, but have it come with something that's real.

**Mat Ryer:** Yeah, I think that's a very good point. Alight, so we won't release them just yet... But hopefully, they will see the light of day one day. Well, unfortunately, that's is all the time we have for today. Thank you very much, Tom Wilkie, and to our special guests, Ward, Ryan and Ash. I'm Mat Ryer, and thank you very much for listening. We'll see you next time on this big, old tent of ours.

**Outro:** \[00:43:34.20\]

**Mat Ryer:** Hello, and welcome to Grafana's Big Tent. I'm Mat Ryer, and -- I've said that wrong. This is not going well... \[laughter\]

**Tom Wilkie:** "I'm Mat Ryer, and I've said that wrong."

**Mat Ryer:** I've said it wrong. Okay.

**Tom Wilkie:** But Mat, your name is actually Mat Ryer. You got that bit right.

**Mat Ryer:** Oh, I did get it right then in the end. Okay.

**Ward Becker:** How many episodes did you already create from your previous podcasts? I just want to know...

**Mat Ryer:** Yeah, no... This doesn't always go to plan. This is the behind the scenes...

**Tom Wilkie:** These recordings, by the way, will be used for the bloopers clip.

**Mat Ryer:** Oh, yes...
