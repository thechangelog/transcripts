**Adam Stacoviak:** Welcome to Founders Talk, everyone. This is episode number 51. I'm your host, Adam Stacoviak. This show features in-depth one-on-one conversations - sometimes they're live, sometimes they're not - with founders. Today's show is not live... I'm joined once again by the ever famous Sam Soffes.

Sam, you're no stranger to this show. I kind of felt like I almost had to help close this chapter for you a bit, or maybe open a new one for you, who knows... But welcome back to the show, my friend.

**Sam Soffes:** Yeah, thanks so much. This is great. I can't believe we're doing another one.

**Adam Stacoviak:** Four, right?

**Sam Soffes:** It's crazy.

**Adam Stacoviak:** You were the first person to be on three times, and then obviously now you're the first to be the fourth.

**Sam Soffes:** It's good, I'm honored.

**Adam Stacoviak:** You have a crazy story, Sam. Episode one kind of opened it up, or part one. Part two talked a little bit about the product, what you were building at that time, and at that time you were knee-deep in open source in Cheddar, which you're still knee-deep in open source and whatnot, but you've since sold Cheddar. We talked a bit about some of your past story where you were engaged, things happened... You talked personally about your life, and a lot of people who follow you really took to part one and part two, and then obviously part three followed up with you doing Seesaw, and being VP of product -- or was it VP of engineering?

**Sam Soffes:** Engineering, yeah.

**Adam Stacoviak:** Okay. I figured you turned into a product designer versus a product engineer, so I wasn't really sure what you got crowned with there. People have listened to all three shows, who have become fans of you and fans of what you're doing... You're kind of out there with your life. It's crazy, right?

**Sam Soffes:** I have nothing to hide; I'm usually pretty open with most things... So it's good. It's crazy, I didn't expect -- like, you asked me to chat, and I was like "Yeah, sure." I didn't expect it to kind of turn into a four-part series, but this is great.

**Adam Stacoviak:** So what is it -- this isn't on my agenda for the notes, but since you've mentioned it and this is just a conversation, it's not live, it's not in front of a live studio audience, it's being recorded, so we do have a chance to edit a few things out... But we probably won't, because Sam is just cool like that, but we're doing it like this nonetheless.

What has it done for you to be as open as you have been about things in your life, both personally as well as professionally?

**Sam Soffes:** I think it's a big thing for my personal motivation. I say a lot of what I'm working on and things I'm doing; if I don't mention anything for a while -- I feel like someone somewhere might care and be like "I wonder why he hasn't shared anything in a while."

I know there's probably no one that's following me that closely, like "Oh, he hasn't open-sourced in like three days... What's he doing?" But I don't know, it's kind of like -- people notice what I'm doing, and it keeps me accountable to my own standards, that it's more public.

I have my fat.soff.es, it's like my weight graph from my Fitbit scale...

**Adam Stacoviak:** Right.

**Sam Soffes:** ...because I'm trying to lose weight and exercise more and stuff. And even though no one really looks at it, which is fine, it's there and it's public, so it makes me more conscious of it. I don't know.

**Adam Stacoviak:** This is on GitHub, so as a fan of open source and a big contributor, you open-source this... Did you hack an API for this? You said it's from your Fitbit; I have a Fitbit too, so I'm kind of curious what you did to do this.

**Sam Soffes:** \[00:04:11.05\] Yeah, there's like a Fitbit API. It's just a little Sinatra app that pulls in the data, and caches it in Redis, and then there's a nice Chart.js to draw the graph. It's really basic... Because Fitbit has all this data, so I just pull it in and show it nicely.

Yeah, I kind of wanted to make -- I've been working on this forever, a website to show everything about me... Like, how many songs I listen to, how many keys I press... Everything.

**Adam Stacoviak:** That's crazy, man. It could be a business; especially in this biometrics world we're getting into, with Fitbit... A couple years ago didn't quite exist the way it does, and now I've got friends who have Fitbits that I would have never expected to have even an iPhone, because they just aren't techy or geeky... It's just, technology has infected and injected every nuance of our life, you know?

**Sam Soffes:** Definitely. Yeah, kind of a variation of that was gonna be what I was gonna work on after Cheddar, and then didn't get to it. Maybe someday...

**Adam Stacoviak:** Maybe someday. Well, speaking of past projects, you've turned a new page - you recently got married, so first, congrats to you and Ellen.

**Sam Soffes:** Thanks so much, yeah.

**Adam Stacoviak:** Was it like a week ago, two weeks ago?

**Sam Soffes:** I think this is week three, I think.

**Adam Stacoviak:** You should know it down to the day, right?

**Sam Soffes:** Maybe it's four.

**Adam Stacoviak:** Is it not how it works? If you're still in month one, you should know like 18 days, or 17 and a half days...? To the hour maybe even.

**Sam Soffes:** I should. Well, the 17th is our one months, so we're almost there.

**Adam Stacoviak:** There you go. Close.

**Sam Soffes:** Yeah.

**Adam Stacoviak:** So... Merry life. It's a good thing, right?

**Sam Soffes:** It's great, yeah. It's just kind of like -- this is her first week back at work. The honeymoon is over and we're kind of like getting into the rhythm of things. But yeah, it's been great. We took a road trip from Kentucky to San Francisco, and along the way stopped at a bunch of places I've lived, to see some friends and show her around places I've been... It was a really good time, and now we're -- I walked her to work on her first day; it's just like ten minutes from our apartment. It's a big adjustment for both of us, but it's been really great.

**Adam Stacoviak:** Taking the trip together, I guess. That's what married life is about - becoming vulnerable to someone else, and then doing life together through the thick of it.

**Sam Soffes:** Yeah.

**Adam Stacoviak:** And she gets a front seat to your lifestyle... How does she feel about that?

**Sam Soffes:** Yeah, it's funny, she's really supportive and she's amazing. I quit my job at Seesaw two days before the wedding, and she was totally on board. She wasn't nervous about it, she was fully supportive. I've sold all of my stuff a couple times now, I'm kind of losing track... It's funny, I go to IKEA and I don't even go to the showroom, I just go to the warehouse, because I know...

**Adam Stacoviak:** You know where things are at.

**Sam Soffes:** Because I'm like "Oh, I've bought this dining room table four times now. Yeah, I know right where it is." I don't even look at the instructions, I just put it together. It's kind of out of hand, but... We decided we only wanted to get furniture we really liked, and not...

**Adam Stacoviak:** IKEA furniture.

**Sam Soffes:** You know, whatever we could afford right now... So our mattress is on the floor, and like, a chair... We've ordered this super amazing Jonathan Adler couch I've wanted for years... And she's really on board with -- you know, our apartment is super empty, and it probably sounds echoey in here because there's just like nothing in this room... But yeah, it's been really fun to kind of -- I got rid of all my stuff and we kind of are building up together with what we both want. It's really good.

**Adam Stacoviak:** \[00:07:56.10\] Do you mind if we tell the story of SF to Kentucky, the change there and what brought you -- mostly surrounding what brought you two back together? I kind of like wanna - as much as you want to, obviously - share with the listeners your road to Ellen, basically.

**Sam Soffes:** Sure. Yeah, so my best friend in high school, who actually I made my first product I sold online with, which is Countdown Maker, it was a Mac app... Anyway, he is now married to her sister, and at the time they were dating, in high school, obviously.

So I'd go and hang out with him, because he was in college, in Lexington, so he'd come back for the weekends and wanna hang out with his girlfriend and hang out with me, so we just hung out together at her house. And Ellen was there, so we got to know each other for years and years and years, because like, at Christmas time or whenever we were back in Louisville, we'd all hang out.

We had kind of like dated a little several years ago and it didn't really work out, because I had just moved to Oklahoma, and not being in the same city is pretty tough. So we reconnected when I was back; my mom was moving back to Louisville briefly, so I helped her move. While I was there for that, Ellen and I hung out briefly.

We started talking on the phone a lot, because I was back in San Francisco, and it was like "Well, I'd really like to date you" and she was like "Yeah, I'd like to date you too." It was like "Well, this won't work if we're not in the same city, so one of us should move." I was like "Okay, well I'm only gonna move if I'm gonna marry you, kind of serious", and she's like "Yeah, I'm that serious too", and I was like "Cool."

She came out to visit a couple times, and then I went back to Louisville and proposed, and then moved. So we kind of decided on a phone call like "Cool, we're gonna get married and this is gonna be awesome."

**Adam Stacoviak:** That's crazy.

**Sam Soffes:** Because we had known each other for so long, and we were like, "Okay, cool." So we went on two official dates before we actually got engaged. So yeah, it was pretty crazy.

I moved to Louisville... I had only been at my new apartment for like three months or something, so that was pretty painful, but I ended up getting rid of it.

We hung out in Louisville, and my mom actually ended up moving away from Louisville, so I ended up taking over her apartment, the one I helped her move into when I reconnected with Ellen. It was kind of funny. Then after the wedding, a couple weeks ago, we packed up all our stuff and moved out here. It's been wild.

**Adam Stacoviak:** There's a couple things that you've said in there that we can key off of. I'll make a couple points, and we can go whichever direction you'd like to... One, it seems like you've become a professional stuff seller. Two, you're not bashful about making decisions quickly, but being stern with that decision. For example, you knew Ellen for a while - you just told the story and all that - but at the same time you quickly came to a conclusion that this was the next step for you and it was the best course of action. And ever her, too - following suit, to say basically yes over the phone.

**Sam Soffes:** Yeah, so stuff is just stuff; none of it is that special. I don't really have too many sentimental things. I mean, that stuff I usually have hung on to, or at least some of it... But most of it, like a couch or a TV or whatever - who cares? I'll just get a new one if I really need a new one. But a lot of the time it's like "I don't need one, so whatever." I had a couch I really liked, and Ellen didn't really like it that much, so I was like "Oh, whatever. We'll just get a new one." I don't really -- you know, and right now we don't have a couch, because we haven't... Like, it's not here yet, because we've paid for it and it's gonna take forever to get here. And it's fine; we can survive without a couch, it's not a big deal. I don't know.

\[00:12:21.10\] I mean, especially when I was trying to do Nothing Magical or Cheddar or whatever, and I sold all my stuff to have a little extra money and focus, it was really cool, and then later I decided I actually really wanted a couch, so I went and bought a couch... So it's whatever. I don't know, it's not a big deal to buy and sell stuff... To me. I don't know.

**Adam Stacoviak:** It's cool that you guys both have that perspective of "Stuff is just stuff." That's a big deal. People get attached to things of this world and think they really matter, like stuff, and when you die you can't take that couch with you, right?

**Sam Soffes:** Totally.

**Adam Stacoviak:** What you can take with you though is the love and memories that -- I mean, theoretically, obviously... You can take the love and stuff that you've accumulated here to somewhere else if you're a spiritual person or whatnot. I mean, focusing on relationships is I think core to humanity, but people tend to get focused on stuff, and it jades that perspective.

**Sam Soffes:** Totally. Yeah, and what I enjoy most is making things... Obviously, outside of being with people I love. So it's like, I don't need a bunch of stuff -- I mean, I'm not gonna sit in my apartment and watch TV; that's not something I do very often. I'm totally happy sitting on the floor and making something on my computer, than having a bunch of stuff in my apartment. So on both levels, there's really no reason for me to be attached to things.

Granted, I really enjoy a nice thing, so I guess it's kind of why I go in cycles of not having stuff, because I don't need it, and then like "Well, I actually enjoy stuff, so maybe I'll get some more." I've come in and out of that a couple times.

And I guess as far as making decisions, I'm usually like -- I'll think about it, and... I remember - this is kind of funny - I used to get in trouble when I was a little kid, because my mom would be like "Tell me something" and I'd be like "No." Or like I'd give an answer real quick, and she'd be like "You didn't even think about it", and I was like "No, I totally did. Like, here are the reasons... Here's point a, b and c on why this is the answer." She was like, "Oh, you need to communicate that you've thought through these things, instead of just give your answer." I was like, "Okay, well... Doesn't everyone think this quickly?" I don't really think it's odd, because how I've always done things.

That caused problems in my earlier -- like when I was 18 and I had my first programming job. People would propose something, and I'd just be like "No, it's dumb." They were like "Why? You didn't even think about it."

**Adam Stacoviak:** And you said "Oh, here's point a, b and c."

**Sam Soffes:** Yeah, totally. I was like "Here are the reasons why your idea is stupid." So I don't know, I guess I think things through pretty quickly; I don't know if it's different than how everyone else does... Apparently, I don't know. But yeah, I mean, I'll just evaluate the options, and land on a decision, and "Cool, that's what I'm gonna do." Rarely do I second-guess a decision I made. I mean, occasionally -- I guess this has pros and cons, but I'm totally open to admit when I'm wrong. Usually, I'll just kind of evaluate the situation, pick something and do it. There's no sense in being kind of like "Well, I'm gonna think about this for a month, and then not be real confident in my decision." I'm just like "I'm gonna do it."

**Adam Stacoviak:** Well, sometimes people get paralyzed by indecision. I mean, making decisions quickly is just as bad as never making decisions at all, you know?

**Sam Soffes:** Totally.

**Adam Stacoviak:** \[00:15:54.17\] I mean, just because this is the fourth time you've been on the show and listeners can literally go back and listen to part one, two and three and then now four, they can see how your quick decision-making has changed and impacted your life; they can see that through the story you've told about your life and what you've been doing, everything from Cheddar to Nothing Magical to open-sourcing things, to moving back and forth, selling stuff, getting married... You know, all these different things are effects or evidence of the impact of you doing that.

**Sam Soffes:** Yeah. And I guess something -- as you were listing those things, I was kind of thinking through what all these things have in common... And I guess part of -- you know, open-sourcing Cheddar I thought about for a couple days, and I was trying to figure out why did that take a couple days, versus why didn't I just do that on the spot, and I couldn't really give one good reason one way or the other for the choice... And it wasn't ever like "Well, this one just feels right, so I'm gonna do that." It was "Here are the reasons why."

I'm a very concrete thinker, as far as facts and logic and whatnot... So you know, I'm never happy to just like -- I feel like this is the right decision, so I'm just gonna go with that. And I feel like feeling the decision is right takes a lot longer than "Here are the facts, so that's what I'm choosing." I guess maybe that's part of it, I don't know. Anyway...

**Adam Stacoviak:** So I guess since you've mentioned that, reflecting back on the past three shows, you know as well as anyone else that listened to those what's in those shows... What do you think about where you've been, what you've been doing and where you're going now?

**Sam Soffes:** Yeah, I guess the only -- occasionally, when I think about the past couple years and what I'm doing now, I'll think about... Like, the offer at GitHub comes up a lot; I'm just like "I wonder if I should have done that", occasionally. And then I'm always like, "You know what, I'm really happy doing what I'm doing." Historically, I'm not good at working for someone else, or I don't enjoy it long-term. I'd rather be making my own things. I don't know, I'm really happy with the decisions I've made and where I am. Life is really good.

**Adam Stacoviak:** Speaking of GitHub, do you think that chapter is completely closed for you? When you say that, you sound as if it's not an option ever again.

**Sam Soffes:** I mean, I could probably be like "Hey, I really wanna work here" and they'd be like "Really? Would you actually stay?" and I was like "Eh, I don't know..." Historically, the answer is no.

**Adam Stacoviak:** "Probably not..."

**Sam Soffes:** I mean, realistically, probably not. And then they'd probably be like "Well, we're not really looking for someone that's just gonna be here a year." I was like "No, I know." I mean, if it was something I really wanted to do and changed my outlook on things, it could probably work out, but... It's not something I'm interested in. I mean, they're amazing people and an amazing place to work; if I had a different mindset, I would absolutely love to work there, but... I don't think it's something I'll do anytime soon, or ever. I don't know.

**Adam Stacoviak:** Now that you live in San Francisco though, you are pretty close to those who do work there. I mean, not everybody that's a GitHubber is right there in the proximity, but you can hang out with people at the office, or you probably cross paths at developer meetups, or whatever... Does that happen often? Do you know a lot people from GitHub that you get to pal around with?

**Sam Soffes:** \[00:19:48.22\] Yeah, I mean, most of my GitHub folks that I talk to are remote, like the Mac folks and Win. I have a couple friends that live here that I play poker with and such, but... Yeah, I guess I hang out with more people that work at Twitter than GitHub. But granted, that's again, a much larger pool of people, so... Anyway. Yeah, it's kind of neat, everyone's here. It's good to be back around my people.

**Adam Stacoviak:** Your people. Yeah, so let's go there for a bit then, if you don't mind. You wrote -- I guess we could talk about Roon just after this, but you have moved your blog to Roon, which is sam.roon.io, and you recently wrote a post called Onward, where you actually talk a bit about you and Ellen's move to San Francisco, the details around that and what you all have in store for yourselves there at San Francisco, that you don't have access elsewhere. What is that?

**Sam Soffes:** If I'm starting my own thing again, which I guess we can get to - you know, there's investors and such out here. And not that I'm really looking for investment, but... I heard one of my friends explain it this way - he was like, there's definitely investors in Texas and Kentucky and other places I've lived, but they don't really understand technology, like apps and whatnot... So they're like "I don't know about this. I have invested in oil, and that's made me money", or horses, or whatever that Kentucky has.

Out here, everyone kind of like gets it, and it's not from like just investors, it's kind of like everyone. I feel like the things I do are more appreciated, which feels good. Obviously, the weather is spectacular all the time. If you want winter, you can drive three hours to Tahoe and go snowboarding if you want; the beach - you can drive South a couple hours and go surfing... That's really awesome. It's always perpetually spring, and then you can choose a different season to go to temporarily, if you'd like.

I have a lot of friends here... I don't know, it's really good. It's nice being around many people, versus like, the only person that's doing anything remotely what I'm doing. I know two other developers in Kentucky; both are amazing guys, but it's kind of depressing to be so alone professionally. I don't know.

**Adam Stacoviak:** And you get to mesh well with others that can speak your language, for a lack of better terms, you know?

**Sam Soffes:** Yeah. I mean, I guess one of the other biggest pluses, if I were looking for a co-founder for something I'm doing, there's a lot of people I could just go have lunch with, versus in Louisville it's like I can fly to meet somebody and hopefully they'll be interested, and then fly home and we can work separately.

**Adam Stacoviak:** Right. What about the -- one common thing that comes up with moving to San Francisco, Silicon Valley, that area of the world is 1) cost of living, 2) traffic, and just the saturation of the job market, and I guess it depends on your perspective... In your case, you're building something for yourself, or your own thing, so it's a little different because you're not trying to get hired. But what do you have to say about the cost of living, traffic and the saturation level of -- I guess the opposite side of what you were just talking about?

**Sam Soffes:** \[00:23:47.07\] Yeah, so it's definitely expensive. Yeah, I'm paying more to live than I -- like, for my rent now I could have a mortgage and a car in every other state I've lived in, which is absurd. But that said, you get paid a lot more. I mean, obviously, as a contractor that's not as true, but for a salary, you get paid a lot more... It makes up for it. And stuff on Amazon is still the same price, so...

**Adam Stacoviak:** Yeah.

**Sam Soffes:** Really, the cost of living adjustment is huge. It's a lot. I don't really know any engineer who's making under six figures... So it's really not as bad when you look at like "Oh wow, I'm making way more."

Then as far as traffic goes, I don't really drive that often. I usually ride my bike, so that's not really...

**Adam Stacoviak:** Like, as in actually a bicycle?

**Sam Soffes:** Yeah, with pedals...

**Adam Stacoviak:** Pedals... You know, mechanical...

**Sam Soffes:** Yes.

**Adam Stacoviak:** Manual labor...

**Sam Soffes:** Well, which goes along with the losing weight thing, so it's good.

**Adam Stacoviak:** Right.

**Sam Soffes:** I actually got hit on my bike, before I moved back to Louisville.

**Adam Stacoviak:** Is that right?!

**Sam Soffes:** So it's been kind of a nice break... Yeah, it was crazy. I was crossing an intersection, and I looked, and I saw the car, but the light was red for them, so I was like "Oh, it's fine. I will just go, because they have a red light", and they just totally ran the light and hit \[unintelligible 00:25:16.25\] I did a full flip, and it dented my frame... It was really crazy. My bike was really jacked up; it was like $200 to fix. And it was crazy, because I was on the phone with Ellen at the time, with my earbuds. She was always like "You weren't paying attention" and I was like "No, they ran the light. It totally wasn't my fault."

**Adam Stacoviak:** "But you know me... I pay attention to everything."

**Sam Soffes:** \[laughs\] But I got hit, and I'm like totally in shock. I kept saying over and over, "Why did you hit me? Why did you hit me?" \[laughter\] I was shaking, because I was so -- oh, man. It was crazy.

**Adam Stacoviak:** I'm laughing, but it's not funny. I'm just laughing at this scenario of you saying that.

**Sam Soffes:** For the whole time she's just like freaking out, because all she can hear is like a car hit me, and my earbuds are not on my ears, they were just dangling... And a couple minutes later I was like "Oh, yeah... Hey, I'm okay. I'll call you later" into the earbuds and hung up.

**Adam Stacoviak:** My wife would kill me if I did that to her. She would be so worried.

**Sam Soffes:** Yeah, she was totally losing her mind. She was like "I thought I just heard you get killed." We were just engaged, and it was like -- that was pretty funny. I mean, not really funny, but I laugh about it. She doesn't think it's funny.

**Adam Stacoviak:** But did you have any long-term injuries from that, or any bumps and bruises that took a lot to go away?

**Sam Soffes:** No. My knee was kind of bloody, but besides that... I kind of like t-bowed, that's how I landed, one knee down. I guess it's the best exp-- you can see what I'm saying. It was crazy, because I didn't wear my... It was the first day back from proposing, and I was coming back for a couple weeks and then moving back to San Francisco after that... Or to Louisville. So I forgot my helmet, because I put it away and I hadn't been back for a while. I always wear my helmet, but I had forgotten it... So I did a full flip, like a barrel, I guess; not head over heels, but sideways. And I landed on my knee, which was crazy... People on the side came over and were like "That was incredible! Are you okay?" I was like, "Yeah", which was amazi-- you know, had I hit my probably would have been hurt pretty badly, because they were going pretty fast. So I was really thankful...

**Adam Stacoviak:** So the dangers don't lie in traffic, they lie in getting hit BY traffic.

**Sam Soffes:** They were like, "Oh yeah, I'm from New York, and we were looking at the next light. We're really sorry we hit you" and I was like "Ugh, jerks... Freaking tourists."

**Adam Stacoviak:** New Yorkers in San Francisco, ha-ha...

**Sam Soffes:** Yeah. So they gave me $80 and left, which is like illegal. You're supposed to give the insurance information. I didn't know; I was so out of it because I had just got hit by a car. Anyway, nothing to do with anything, but yeah, I bike everywhere, even though I got hit by a car, so... It's good.

**Adam Stacoviak:** It can't keep you down.

**Sam Soffes:** \[00:27:58.06\] Yeah, it's good. I really enjoy biking, so it's a good time.

**Adam Stacoviak:** So obviously, cost of living, we've just talked about that; traffic is a non-issue for you because you bike everywhere... I guess if you are hired somewhere and you do have to travel, what's the likelihood that if you live and work in the city -- what is the cost of living versus having to go places cost? Not so much rough, actual numbers, but... You said before - just to kind of give you some perspective of my question - you couldn't imagine making less than six figures, which I would think that that would be the case for sure, living out there; it's like minimum wage is six figures, you know?

**Sam Soffes:** Yeah, absolutely.

**Adam Stacoviak:** It seems like to me. Based on a mortgage and a car as rent. You don't even own the place, right?

**Sam Soffes:** Yeah.

**Adam Stacoviak:** And it's probably like 1,000 square foot, maybe less?

**Sam Soffes:** Oh, that's a big place. Anywhere around 700.

**Adam Stacoviak:** 700, right? Here you can get a 700 square foot nice place probably $500-$600, which is probably like a quarter, maybe even a lot less than what number you're paying.

**Sam Soffes:** Yeah, I owned a 1,000 square foot house in Oklahoma. Owned a house, giant backyard garage house, and the mortgage was like $700. It's crazy here that it's multiple times that, and it's smaller, and I have to pay several hundred dollars for parking as well.

**Adam Stacoviak:** So it's not even worth having a car.

**Sam Soffes:** Ellen uses it for work, because with her job she travels a little bit. She's an auditor, so she goes and drives to the company's office and audits them for a couple weeks, and then whatever. Usually it's not in the city, so she'll have to drive. But if it wasn't for that, we wouldn't have a car... Because as a software engineer, you're like \[unintelligible 00:29:52.02\] from your apartment to work; you don't really need to drive anywhere, unless you wanna go to Tahoe, or something. And obviously, I work from home now, since I'm a contractor, so it doesn't -- I never really drive. I had lunch with a friend in Cupertino today, otherwise I wouldn't have driven at all this week, so...

**Adam Stacoviak:** Yeah... Well, let's talk about some different stuff. We talked about your trip back to San Francisco and how you're excited about that and the opportunities there. I think to kind of summarize that point and move on would be that there's a high cost of living, but the access to the things that revolve around the kind of lifestyle you wanna live, build the kind of things you wanna build are more accessible and closer to reach in that area of the world, versus Kentucky, maybe even Houston, Texas, where I'm at.

**Sam Soffes:** Yeah, I think I mentioned this a little in part one - maybe not, but... I had kind of always wanted to try it, and heard that this was -- you know, I'd just see people, like, this is how everyone is as far as like, you know, people that work at Twitter, or GitHub, or whatever... I could only imagine knowing someone that works at any of those companies I'm a fan of, and I was just like, "Well, I'm just gonna do it, you know? I'm just gonna find a job and I'm gonna do it." And in like less than a week of job searching I had an offer, with a moving bonus, and I moved out here and did it. At the time I was fairly unknown, hadn't really done anything notable except Bible, my first app.

If it's something you wanna do, just do it. It's way easier than I think people think it is... Because everyone was hiring. If you're a software engineer or a designer, you can for sure get a job out here. There's tons of startups and they're all hiring, and it's like, well, if they fail, whatever; you'll just go get another job, because everyone's still hiring.

**Adam Stacoviak:** The talent pool just kind of shifts and moves accordingly.

**Sam Soffes:** Yeah, especially in the tech industry staying somewhere for 3-4 years is super unheard of. That's a really long time.

**Adam Stacoviak:** Resumes are long, recent experiences long... "So where have you worked at? Here, here, here, here and here? Sweet."

**Sam Soffes:** Yeah.

**Adam Stacoviak:** \[00:32:12.09\] If you've got one thing on your resume, that's a bad sign, right?

**Sam Soffes:** It's just like, "Oh, that's weird... Did you like that?" It's kind of like a red flag, it's so out of the ordinary.

**Adam Stacoviak:** Right, exactly.

**Sam Soffes:** But if it's like "Oh yeah, I've had a different job every year to six months in the last three years", they're like "Oh yeah, cool. So does everyone else."

**Adam Stacoviak:** So I guess the rhythm of titling Founders Talk shows is person's name, founder's name/whatever they're working on, or whatever they're most famous for at this point in time, and I guess that makes the most sense when talking about you, because it started out with Nothing Magical part I and part II, and then part III was Seesaw, because you were moving onto there, and now I just titled this one -- I don't think it's gonna change, so if it changes, sorry... But as of right now it's called "Onward", and I just figured that made the most sense, since that's your recent post on Roon about where you're going, and I wanna tie that into the next piece, which is how much do you charge per hour and the fact that you are hirable, and you have limited openings, even? Most of your slots are taken up. Is that fake or is that real?

**Sam Soffes:** No, it's totally real. I might be over-committed, we'll see. I'm kind of behind for this week already, but... Yeah, I'm doing -- I have a couple longer-term or bigger contracts right now that I'm working on, and because of my rate, I'll be able to take some time off once I finish my current commitments, and work on whatever products I wanna work on. I have a couple in mind I'm really excited about.

So I'm kind of just doing this to build up some buffer and some savings, and emergency fund and what not for my wife and I, and once we kind of have a big enough buffer, I'll just take some time off and work on a product. If it doesn't take off, I'll just do more contract work.

I've found the solution to making me happy while doing contract work -- because in the past I've really not enjoyed it... Now that I've kind of figured it out, I'm enjoying it a lot, so it's good.

**Adam Stacoviak:** We'll talk about this here in a bit, but I wanna mention the fact that your Doppelganger/Parity Twitter account... I think it even tweeted about the fact that -- what was it, Ultimate Freelancing Guide, and it's like "Don't"?

**Sam Soffes:** Oh, I think I tweeted that. Maybe I retweeted it, I don't know.

**Adam Stacoviak:** I was wondering if that was actually one of your sites that you just haven't announced.

**Sam Soffes:** No, it's ultimatefreelancingguide.com, and it just says "DON'T" in all caps, and it's really great. That was funny.

**Adam Stacoviak:** But yet here you are, doing consulting, freelance...

**Sam Soffes:** Yeah. So kind of what I do - not to get too boring or technical, but I'll end up making libraries that other apps will use. I'm working on some stuff for an app called Over, which is actually created by a friend that I used to live with in Kentucky, which is pretty cool. \[unintelligible 00:35:17.27\] Well, he lived with me in high school for a bit, which is kind of crazy. Anyway...

**Adam Stacoviak:** Small world.

**Sam Soffes:** Yeah, right? So I'm making a library that -- I don't have to really work on the application. They're integrating some of my technology into their app, to save time and stuff. Then I'm working on an app with Drew Wilson called Footage... It's a video editor for Mac; I'm making their full effects engine for doing video effects. So two things that are kind of like my own project, and I don't have to work with anyone else, which is kind of nice... So I kind of just do my thing and hand it off, and everyone's happy. I'm enjoying it a lot.

Those are two people I really enjoy working with, as far as like on a project basis - with Drew, and then my friends over at Over. It's been really good.

**Adam Stacoviak:** \[00:36:17.11\] I remember on -- I can't recall which show it was that we talked about it, but I think for a bit there you were doing consulting for like $1,000/hour.

**Sam Soffes:** Yeah, briefly. I only did one contract, and for three hours, so it wasn't that much money. Anyway, it takes me a lot longer now to make $3,000. Yeah, it was terrible; I really didn't like it at all, so...

**Adam Stacoviak:** You don't recommend it?

**Sam Soffes:** I mean, in theory, if it was gonna be a bunch of like come in for a couple hours and give my opinion and that's all I'm working for the week, that'd be awesome. But I'm finding those clients are really difficult and they're usually super high maintenance, so...

**Adam Stacoviak:** Find the sweet spot.

**Sam Soffes:** Yeah, I think this is like where it's at. Actually, Over and Footage are both at my friend's rate, not my -- I probably shouldn't even say this... My published rate is $250, and I've talked to a couple people and have some stuff in the pipeline, but... This is funny, my two biggest ones are less than what I normally charge, but that's alright. They're both really good friends, so it's alright.

**Adam Stacoviak:** So you mentioned Drew Wilson, and I guess we talked a little bit about Roon... That kind of popped up four months ago, maybe five months ago was it?

**Sam Soffes:** Something like that. I wrote most of it in April, so... Whatever that is.

**Adam Stacoviak:** Okay. And Roon, just to kind of preface that - essentially, it's a writing platform; is it a blogging platform, or is it writing? How do you guys talk about what Roon is?

**Sam Soffes:** We say it's the easiest way to blog.

**Adam Stacoviak:** Okay. And where did this come from? How did this pop up to even become real?

**Sam Soffes:** It's kind of a funny story... I had overheard Drew -- like, we both spoke at a conference in Miami, and I'd overheard him on a call with Josh Long... They were talking about Execute, and were like "Oh, we should make a blog for this." So I'm just typing on my computer and I just overhear Drew, because we're in this small room... And he's like "Yeah, I wish there was something better... Everything's kind of too complicated, and nothing really looks nice. Tumblr takes forever to make pretty... We just need to make a simple blogging thing. Whatever, we'll just figure something out."

I was like, "Man, that's a good idea. I should make this", thinking to myself, just totally overhearing Drew. And then kind of separately later I was wanting to work on a markdown editor, because I was kind of frustrated with \[unintelligible 00:39:03.15\] and wanted to do some crazy thing. So I started working on a Mac app and tweeted some screenshots, and then Drew DM'ed me, he was like "Dude, we should make a blogging app, and there could be a Mac app for it." I was like, "Yes, I know exactly what you're talking about, because I overheard your conversation in Miami." \[laughter\] So we kind of got excited about it and talked on Skype for a couple hours, and like, okay, I went and built it.

**Adam Stacoviak:** Did he get upset at all that you eavesdropped on him?

**Sam Soffes:** No, he thought that was funny.

**Adam Stacoviak:** \[unintelligible 00:39:33.26\] I can imagine that. I imagine he would not be upset about it.

**Sam Soffes:** No, he said something hilarious.

**Adam Stacoviak:** He'd be like, "Oh, that's cool! That's rad! Thanks, man... Thanks for reminding me about that."

**Sam Soffes:** He's funny, he always fun expressions. \[laughs\] So yeah, it's been really good. We've taken it -- I mean, we had kind of both had different things in mind when we started, and to kind of come together with a combination of ideas... And it's turned out much better I think than if either of us had done it on their own. It's really good. We have -- our iOS update is coming out really soon, for iOS 7; that's really exciting, and working on the Mac app as well, though slower...

\[00:40:19.01\] Mac development is the worst. Anyway, it's a really fun side-project; tons of people use it, which is kind of crazy, because we don't really promote it that much. There's a lot of people using it, so it's pretty cool.

**Adam Stacoviak:** How many is a lot?

**Sam Soffes:** 50,000-ish, last time I looked.

**Adam Stacoviak:** Wow, that's pretty good.

**Sam Soffes:** I think it was ten, I forget. It was a lot, though. It was double another project I was working on, that I'm like promoting the crap out of. I looked and I was like, "Oh man, Roon has all these people. How did that happen?"

**Adam Stacoviak:** An app like that though, it's a numbers game, for sure, right? You're always gonna have a lot, especially when it's free.

**Sam Soffes:** Totally.

**Adam Stacoviak:** So converting 50,000 to paid may be the hard part.

**Sam Soffes:** Yeah, and even then, there's however many accounts, and a smaller percentage of that have actually published a post...

**Adam Stacoviak:** Right, or is active.

**Sam Soffes:** Yeah, a published user is a metric we track a lot. So we have a couple -- we have one paid add-on right now; we're adding a couple more really soon. So it's kind of like "Pay if you want to. You don't have to." It'll always be free forever, but there's add-ons, and we're hoping to do pretty well with all the add-ons once we get a little more situated.

The only one we have right now is custom domain. You can have SamSoffes.com instead of Sam.roon.io. But I keep the Roon one to kind of promote it a little.

**Adam Stacoviak:** Marketing, yeah. It's smart. For you, in your case, it totally makes sense to keep that. Others are like "Eh, I'm not promoting your stuff for you."

**Sam Soffes:** Yeah. We have a lot of folks that...

**Adam Stacoviak:** Or maybe they will.

**Sam Soffes:** ...enjoy it. They enjoy the custom domain. Someone's like -- their company website is "TheRoonBlog", which is kind of cool.

**Adam Stacoviak:** What's the plan there? You mentioned some numbers there in terms of how many you have, and some lightweight paid features, and potentially -- you'd mentioned somewhere down the road a Mac app, an iOS app and whatnot... What is the plan with this? Because if you look at the design, maybe the listeners that know Roon and know you and know Drew and what you guys have built - it's in the same camp as something like Medium, so how do you guys see what you're building versus what they're building and what the plan might be in comparison to what they're doing?

**Sam Soffes:** Yeah, so Leah Culver wrote a blog post recently - I think it was her, or maybe someone else... But it was "Medium is not your blog, it's a place to share your writing", which I think is pretty interesting. We had kind of like thought of it in a similar way... Because Medium owns all of your stuff, and it's this curated thing of pretty good writing, and we wanted to make more like a blog that anyone can use, that's less closed off, or whatever. So that's why we give you subdomains, instead of this crazy URL.

**Adam Stacoviak:** \[unintelligible 00:43:29.04\] that the Medium URLs are not very memorable.

**Sam Soffes:** Yeah, it's kind of silly; I don't know why they did that, but...

**Adam Stacoviak:** Yeah.

**Sam Soffes:** And then we have -- from the very beginning we added you can download an archive, like this file of everything you've ever written, all the images you've uploaded... Like, "Here's where all of your stuff is, in markdown. Take it and do whatever you want with it." That was important to us, to kind of like "This is more like yours and you can kind of do what you want with it" and less of this closed off thing.

\[00:44:04.15\] There's definitely competition in the writing space now that wasn't there that long ago, and we actually started working on Roon before Medium started sending out a bunch of invites. We were kind of like "Oh, I guess they're around now..."

**Adam Stacoviak:** They are. I thought for a while there was-- I'm not really sure what the plan was for a bit, because they had their landing page for a bit, and they were being a little elusive about it. Then it was like, "Oh, we are alive..." Or it was only accessible to the super elite for a bit there, you know?

**Sam Soffes:** Right, right. Yeah, I used to be on Svbtle, and it was the same kind of thing. I like Svbtle, but you can't really get in and -- it used to be like... It was cool, because no one could get in, and now a lot more people have it, so it's less cool.

**Adam Stacoviak:** Not cool, yeah. Once you have the numbers, it's like "Eh, whatever..." So is this a -- considering Yahoo!, Tumbler blogging... There's obviously some profit to be made. I mean, when you talk about the numbers that -- I know his last name, Karp, right? I can't recall his first name though... The founder of Tumblr.

**Sam Soffes:** No idea.

**Adam Stacoviak:** Okay, sorry... Then scratch that. We can't edit that out because I'm too lazy to do it, but... He made a lot of money. He made a lot of money in Yahoo! stock, and then obviously a crapload of cash, too... So there's an opportunity to potentially do something. But that's like an Instagram, right? It's not gonna happen every day.

**Sam Soffes:** Yeah. That's not really our goal. The way Drew and I think about building things, it's more like we're gonna build something we wanna use, and we're gonna enjoy working on it, and if it makes a bunch of money, then that's awesome. If not, it's like whatever.

I mean, I'd hope to break even on server costs with add-ons, and we're close(ish). If it can pay for itself and just run, I'll be totally happy. And if it makes us a billion dollars, I'll also be totally happy. We're not looking to sell it and the whole point of it isn't to get acquired, it's just to make something that people want.

I used to say -- maybe I still have it somewhere, but it was like "I make products people want to use" was like my bio for a bit, but I thought it sounded too pretentious... But that's kind of the goal, to make something people want, it's not to get acquired, or whatever.

**Adam Stacoviak:** Well, I think Roon is pretty neat. I think you guys did a great job, and especially since you already had a lot of the -- I know you did a bunch of crazy stuff with markdown parsing and what not with Cheddar, so to translate that into what is now Roon and all the... Because the way I see you, at least, is like you move on to things that you've built on what you've done previously. So every new step for you is building on what you've done before. You climb stairs, versus kind of going down this plateaued path; your next thing is building on what you've done before.

**Sam Soffes:** Yeah, especially on iOS. I think that's part of the reason I have so many open source projects, because it's like every time I come up to a problem, I'll solve it and make a thing for it, and I can use it in the next app. Seesaw has a ton -- most of the libraries we were using were all written by me, because it's problems I've solved in the past and this is how I do things... And I'm gonna do it again, because there's no reason to reinvent the wheel every time.

Actually, the markdown stuff in Roon has nothing to do with the Cheddar, it's completely different, actually. But it's still the same kind of idea. I actually invented two new markdown things and the GitHub folks merged it in.

**Adam Stacoviak:** Sweet.

**Sam Soffes:** It's not super official, but it's kind of neat that it's -- we added underline and highlight, which wasn't really there before, so... It's kind of fun.

**Adam Stacoviak:** \[00:48:06.22\] What do you do to do the highlight? You wrap something in the span \[unintelligible 00:48:09.05\] or something, or...?

**Sam Soffes:** There was actually a mark element in HTML5 before, so that's what we use.

**Adam Stacoviak:** \[unintelligible 00:48:16.11\]

**Sam Soffes:** \[unintelligible 00:48:19.00\] but one of the GitHub guys was like "You should use mark" and I was like "That's a great idea!"

**Adam Stacoviak:** That's what it is, you wrap it in mark?

**Sam Soffes:** Yeah.

**Adam Stacoviak:** Oh.

**Sam Soffes:** I think by default you might have a yellow background color style, I don't know. Obviously, we change it, but...

**Adam Stacoviak:** Right. So you're signature yellow.

**Sam Soffes:** Yes. Drew added this little blur around it, or like an outer glow or whatever; it looks really nice. But yeah, it's totally like "Yay, now I can --" because I was really unhappy that I can't use the highlight, because that's totally my thing... And it's really cool now to see other people on Roon blogging and using the highlight. I was like "This is amazing! This is how I wanna read things. I just wanna read the highlighted parts if I don't really care that much."

Actually, someone ported that stuff to like a JavaScript one, or... People like the new stuff we added, so it's pretty cool.

**Adam Stacoviak:** You mentioned Seesaw there for a bit, and I guess we can't kind of close your chapter here without mentioning the fact - I guess we touched on it earlier in the show - that two days prior to you getting married you left Seesaw \[unintelligible 00:49:27.13\] and you'd mentioned that a lot of your open source was used there... What do you wanna say about your departure from Seesaw and just the fact that what you built there?

**Sam Soffes:** I actually came up with the name Everlapse, I'm kind of proud of it, but... I don't think I mentioned that anywhere, so I've gotta get it in. Well, I really enjoyed working at Seesaw, and the team and everyone was really awesome. I hung out just the other night with one of my friends at Seesaw, so we're still on good terms, which is really good to hear they weren't mad about it, or whatever. It's like "Yeah, you definitely didn't burn any bridges... It's totally fine."

**Adam Stacoviak:** Well, it's like you said earlier, if you don't mind me saying it, on the burning bridges thing... When you're younger - and I say that being someone in my thirties - and you don't have guidance from somebody who's wise or have been born with a little bit of wisdom to realize you shouldn't burn bridges, in the tech industry you definitely should not burn bridges, because you will absolutely cross paths with them at some point, if you plan on making it your career... So just to preface with that.

**Sam Soffes:** Yeah, absolutely. So I knew that I wanted to leave to work on my own thing, because I was not super excited about what we were working on anymore. And I didn't want them to give me three weeks off and pay for my move and then quit in a couple months, because that's just unfair to them, because that's a ton of money. So I was like "You know what, guys? Here's the deal - I can stay some more, but I'm gonna take three weeks off for my honeymoon, or we can do this now." Obviously, it would be easier for me if we didn't do it, so I could continue to get paid, but if that's what you guys wanna do, that's fine. I wanna do what's right with you guys. They were like "We can just, you know -- at the end of the week be done." I was like "Cool. It works for me."

So yeah, we worked on Everlapse... There's a new update coming out really soon that's all iOS 7; actually Drew designed a good part of it, which was kind of fun. We brought him on as a contractor. So it was a really good experience, and obviously Drew and I don't work on it anymore; they've kind of took it over and made it their own. It was really fun to work there and everyone was really awesome, but I kind of like -- we were making something that I wasn't that excited about. I don't really need another social network, and that's kind of what they wanted to make, social networks. I was like "I'm more excited about making tools that people want, than a new way for people to connect with each other."

\[00:52:09.12\] I mean, there's obviously people that want that and enjoy that, but that's not personally what I'm into... So it was just hard for me to stay motivated on stuff that I probably won't really use. I'd already kind of had some -- I was talking with the Over guys a little bit and they really wanted to hire me, and it was like "Well, we can do some contract stuff if you want." They were like, "Okay, yeah. Let's do that." The timing worked out perfectly, to just leave Seesaw and start on the contract with Over. Financially that helped me bridge the gap and make the transition.

It's been really good. Sometimes the transition is a little painful, from getting a paycheck to not getting a paycheck, but it wasn't too bad.

**Adam Stacoviak:** So if -- what is your plan? I was gonna say "Is the plan to stay with Over for a bit?", then I was like "Probably not", so I can already answer that question on my own, but... I mean, since we're titling this "Onward" and this is you getting married, stepping into new areas, going back to San Francisco and whatnot, what is next for you?

**Sam Soffes:** So I have a 50-hour/month contract with Over right now. We have the end of October already locked up, so it's like another month after this month. And it's great, I really enjoy working with them and I'm fine to continue doing that. That'll kind of pay the bills, and doing this project on Footage with Drew is gonna build up some buffer. I can of plan to just kind of back off how much work I'm doing, because right now I'm working a lot to kind of just build up some buffer.

So I plan to back off, and I'll probably still continue to work for Over for the foreseeable future, and work on some products I have in mind that I'm really excited to work on. That's what I really enjoy doing, it's making new things... And to work on Roon, and whatever else. But I have a physical product in mind that I'm really excited about. I'm really bad at hardware, so I'll probably take forever to make that, but that's kind of what's at the top of my list right now.

**Adam Stacoviak:** And do you think you can mention about that? I mean, obviously it ties in with maybe our common question that tail-ends the show, but is there anything you wanna mention about that physical product?

**Sam Soffes:** Yeah, sure. So it's a smartwatch, which I feel bad saying now, because Samsung just introduced theirs and it's like totally not exciting anymore...

**Adam Stacoviak:** They did it badly, though.

**Sam Soffes:** It's hilarious... Apple didn't' introduce one yesterday, on the new iPhone event... I was really nervous, like if Apple introduces one, I probably won't make it anymore, because it'll be awesome. But they didn't announce one. So I won't really say what makes mine special, because I feel like that would give away too much, but it should be really cool. I have a couple friends that are designers that are excited to work on it.

Everyone I tell about it is just really excited, when I tell them the specifics... So it's been really encouraging, because it was kind of just like "Oh, maybe I'll work on this", and everyone I tell is like "You have to make this!" It'll probably take a really long time. Once I get a prototype, I'll maybe Kickstart it, or something, but... But yeah, it should be good.

I'm just excited, because I'm totally in over my head; I don't know hardware at all, so it's fun to learn something totally new, so I'm enjoying it a lot.

**Adam Stacoviak:** \[00:56:08.03\] That's your MO, man. I don't know if you know that, but that's your MO, being in over your head, in a sense. I mean, not so much in a bad way, but I think you put yourself there purposefully - if I know you well enough, having done these shows with you and kind of getting to know you a bit. I feel like you kind of put yourself there because that's where you thrive, that's where you grow...

**Sam Soffes:** Totally.

**Adam Stacoviak:** You're comfortable being in that position, whereas somebody else may not be quite as comfortable being in over their head, because they might prefer to see what's ahead, have a bit more of a peripheral on the horizon... Whereas you, you like to be right on the edge.

**Sam Soffes:** Yeah, I mean... I can make iPhone apps for the rest of my life, or however long iPhone's around, but that's not fun; I know how to make an iPhone app, and -- like I said, I kind of use the same things every time. All of the hard problems are -- I mean, not all, but a lot of the hard things are solved, because this is how I do it, and I'll just do it the same in every app, and it has lost its excitement.

I remember one of my first contract things when I was 16 or something, someone hired me to make a YouTube rip-off, and I knew nothing about video encoding and servers and stuff. I was like "Cool, yeah, I can totally make this for you." They were like, "Okay." I had no idea.

**Adam Stacoviak:** Meanwhile, you're like \[unintelligible 00:57:32.14\]

**Sam Soffes:** My friend, Sam - he's married to Ellen's sister, that kind of connected us - worked on it a little with me, and he's like "How did you take this? You don't even know anything about video." I was like, "I'll be fine, I'll figure it out." He's like "I don't understand, this is crazy." He's like "You should worry more", and I was like "I guess you're probably right. Maybe I should worry a little more, but... You know, I'll figure it out. What's the worst that could happen?"

**Adam Stacoviak:** What's the worst that could happen...?

**Sam Soffes:** I mean, I try to make a smartwatch and like totally fail and waste a couple thousand dollars on parts... Like, whatever. That's not the end of the world. That's how I look at most things, it's like "What's the worst that could happen?" I mean, I guess now that I have a wife to support, I can't be as risky financially, which is totally fine. I'm not angry about it, or anything. It's just probably healthy to not lose every penny on some idea and have to work back from nothing... Which is kind of fun, by the way, but anyway.

But not, it's good... I'm finding other ways to take risks and learn things, while still being safe and responsible. It's a really exciting time. I'll work on this watch thing, and if it doesn't work out, then whatever, I'll make something else. Maybe I'll work on that quantified self thing that we mentioned earlier. I don't know.

**Adam Stacoviak:** That's definitely a neat idea. I think that a lot of people are approaching that market, and probably 90% of them don't have quite the understanding you do of technology or how to actually execute and build something. One thing I like about your perspective, Sam, and your story, is what you've just said there, which is to work yourself up to something and then lose it all and then work back to it... I think having that perspective and having been through that few times - I mean, we said earlier that you're like a professional seller of stuff, because you're used to just kind of like buying things and getting rid of them, and then kind of opening new chapters, but... You kind of wrestle with life; I mean, not that you are in control of it, because obviously you're not, and you deal with the hurdles and constraints and boundaries that you have in different ways than other people, but I think what you've proven to yourself is that stuff and things are interchangeable and they don't really matter quite as much as people let them think they believe - a house, a salary, where you're at...

\[01:00:17.10\] You know, life is what you're gonna make it, and you're tougher than let's say not so much the average person, but you're just tougher than life lets you think you might be... Because sometimes we lie to ourselves that "I'm not that strong and I can't bounce back should I lose my house, or should I do whatever", and put this risk out there and lose it all. You've kind of like taken the bull by the horn, so to speak, and just don't look back, and win.

**Sam Soffes:** Yeah, I mean, that's the only to do it.

**Adam Stacoviak:** It's the only way to do it... \[laughs\] "I don't know how else I can do this thing...!"

**Sam Soffes:** There's definitely long-term consequences from certain things... You know, when I sold my house - I'd only had my house for six months. So if you've ever purchased a house...

**Adam Stacoviak:** Yeah, that's bad.

**Sam Soffes:** Owning the house for six months is financially a terrible thing to do... And I also had the stimulus package at the time, because it was like '09, or something... So I got $8,000 from the government, and I was like "Awesome!" and I bought an iMac, and a really sweet lawn mower, and whatnot.

**Adam Stacoviak:** A sweet lawn mower... \[laughs\]

**Sam Soffes:** It was a Honda, it was amazing. I loved that lawn mower.

**Adam Stacoviak:** That's funny.

**Sam Soffes:** Anyway...

**Adam Stacoviak:** Just the combination of iMac and lawn mower was...

**Sam Soffes:** I know, right? I'd, like, tape it on the lawn mower -- no, I'm just kidding. But then I moved, and like "Well, crap!" I had a payment plan for my taxes, to pay back the $8,000... Because at the time, $8,000 was a huge amount of money to me. I was making like - I probably shouldn't - not very much in Oklahoma land. So I was like, "Oh, whatever." And now, like -- I mean, I've had a payment plan on the IRS a couple times, and I'm okay with that, it's not a big deal anymore. \[laughter\]

My wife's like "Oh man, that's really crazy!" I was like, "Oh, it's fine. Don't worry about it." So it's definitely like -- you know, there was one point after I moved to Kentucky, I was like "Well, I have no money at all right now. I'm completely broke." I went from having a ton of money invested in Apple and being super comfortable financially to being totally broke. I mean, not that I'm really rich now by any means, or even have a lot in savings, but it's like, you know, it's easy enough to just work hard and come back from that if that's what you wanna do, or to just stay at the bottom... It's wherever you wanna be.

For a while, I was like "I don't really care about anything, really. I just wanna be with my fiancée (at the time), so who cares?" Now it's kind of like, "Well, I want us to have nice things and buy my wife things that she wants", and like "Cool, I'll just work hard and make some money." I don't know, I kind of go back and forth on my work ethic, if I'm gonna work hard or if I'm just gonna enjoy life... Not that they're mutually exclusive, or anything.

**Adam Stacoviak:** Well, it would be easy for someone like you to coast.

**Sam Soffes:** Absolutely.

**Adam Stacoviak:** I mean, like you had said -- so just to put it out there, you can go to github.com/soffes, and use all the software that you've talked about that you use when you go into your consulting gigs to easily do the things you've done before. So you can rinse and repeat... You can use Sam's code today for free, he puts it out there. I'm talking to the listeners...

**Sam Soffes:** Indeed.

**Adam Stacoviak:** You could totally coast, but I think one thing that resonates to me about you is that you don't let fear control your decision-making abilities. You might be concerned about the next step and the future step you're taking, but you don't let that fear cloud your ability to have good judgment of what you should and shouldn't do, and what matters and doesn't matter to you.

**Sam Soffes:** \[01:04:04.08\] Yeah, I think it just goes back to how I make decisions, which we talked about in the beginning.

**Adam Stacoviak:** You should do a blog post on that, "How I Make Decisions." That's it.

**Sam Soffes:** There you go, that's a good one. I'll have to add that to my list. But yeah, I mean, it's all logic-based. It's like, I'll think "What is the worst thing that can happen?" and logically, the worst thing that can happen is I'll have no money and owe someone some money, and have to live with a friend on their floor for a couple days... Whatever, I'll just go do some contract work and bounce back. If that is the worst thing that could happen, like the absolute worst thing that could happen...

**Adam Stacoviak:** What's the best?

**Sam Soffes:** ...that's not terrible. The risks are worth it. I mean, obviously, being married, the worst thing that could happen is much different, but still, there's really no reason to be scared of things. I don't know, I just approach it and I get through it. It's not like this big "I have to make a decision, let me take a month...", and I don't know. Anyway.

**Adam Stacoviak:** So I've got a couple common questions that I usually asked to tail off the show, and we're getting to that \[unintelligible 01:05:13.24\] point of commuter-friendly, and also you've got a lunch appointment to get to, but is there anything else you wanna mention before I dive into those?

**Sam Soffes:** No. Shoot away.

**Adam Stacoviak:** So I guess in retrospect of the last three shows, this show, things you've talked about, someone not so much trying to be Sam, not so much trying to be you, but trying to follow in some of the footsteps you've set forth in kind of attacking decisions fearlessly, kind of -- you know, all the things we've just talked about on this show, what kind of advice can you give to someone in that position, that maybe you haven't already mentioned in this show?

**Sam Soffes:** So someone that's looking to do --

**Adam Stacoviak:** Yeah, software development, open source, making something of themselves, not letting life beat them down... That kind of thing.

**Sam Soffes:** Yeah, I mean... Making confident decisions I guess is -- you know, we talked about how I make decisions is probably one of the keys to how I run through life. I think my Twitter bio is "Go make stuff", and I really like the -- if it wasn't for Nike, I'd be like "Just do it", because I love that.

**Adam Stacoviak:** It's so simple.

**Sam Soffes:** I don't really like Nike things, but... There's a million reasons to not do something, but who cares? Just do it. When I was in Texas, I was like "Man, it'd be cool to move to San Francisco. You know what, I'm just gonna do it." Two weeks later I'm moving to San Francisco. And not to say you have to make all your decisions super rationally, but I think what there is to lose is a lot less than people think about... I mean, the risks of doing something that could have a huge benefit are less than people think about... I don't know.

If you wanna get into open source or development or whatever, just do it.

**Adam Stacoviak:** Well, it's funny that you say that, because I think in the first show we talked about your perspective of learning, and one way to learn is just to do it, right? You didn't wanna take Nike's slogan, but you came up with your own, which is "Go make stuff", and I think that's very fitting.

**Sam Soffes:** \[01:07:52.16\] Yeah, like if you wanted to get into iOS development, you've never programmed ever, just do it - google "how to make an iPhone app", google what's a book to read...

**Adam Stacoviak:** Just start doing it.

**Sam Soffes:** Just go and do it. Even if it's not the best way to get started, you're starting, and that's better than not starting. That's how I learn anything, really... Like, "Okay, I wanna make a smartwatch." Well, crap. I need to find a bunch of electronic components and connect them... So what components do I need? Okay, I'm gonna search around for which processor I should get. And I probably won't even ship with this one, but at least it's something to learn; I'm gonna go learn something. Anyway... Just do it.

**Adam Stacoviak:** Another question we came up with on this show which I think is kind of fitting for you - I'm totally not sure who you're gonna say and hopefully I don't catch you completely off-guard and you've gotta think about it for too long... If you do, then we'll give you a minute and we can enter a different question, but we've got two more questions. First one is founder hero... So one thing I think is kind of neat on this show is that we have some neat people come on and talk about their life; every Founders Talk is a little different, and I think yours have been the most different than we've had on the show, but... Who's a founder out there that you totally look up to? It could be somebody that's helped you along the way, it could be somebody you've never met - I have no idea... But who's a founder hero to you?

**Sam Soffes:** The first - and not to be too cliché... I guess I'll give two, just because I feel bad about this answer. I love the story of Apple, and him losing everything and making NeXT... Totally lost everything; there was that photo of him on the floor with just his record player and speakers and a lamp... I love that picture of just like "I don't have anything and that's okay. Now I'm gonna go make something from nothing and rule the world."

When Steve went and made NeXT - that's still what we're using; that's OS10, that's iOS... All of that is based on the NeXT stuff. I love that "lost everything and came back" story, because I've kind of been there a little bit, semi by choice, I guess... But that's super inspiring, I think. And I feel like Steve Jobs is a terrible answer to this question.

**Adam Stacoviak:** Can we talk about that - why do you think it's terrible? Just because he's so well-known and because of him recently passing and having such a fame? Do you feel like that's why it's a bad answer?

**Sam Soffes:** I mean, I feel like that's like -- "Who's your favorite founder?" and it's like "Well, Steve Jobs, of course."

**Adam Stacoviak:** It's a copout...

**Sam Soffes:** I'm talking on my Apple computer, looking at my iPhone on my desk... It's like, "Well, of course." And I guess it makes sense, because the Apple products are so in our culture. But someone a little less... I don't know.

**Adam Stacoviak:** Less known?

**Sam Soffes:** Yeah. I really look up to Drew Wilson, and I work with him on a lot of projects now, so I got to know him pretty well. The other night he made Namebox in like two nights. It was just crazy. He had an idea and just executed it, and \[unintelligible 01:11:30.06\] and put it out there. That's so inspiring, because you can totally just get in the -- because you know, we're working on Roon and stuff together, and he's like "You know what, I just really wanna ship something big, and we're not really in a spot to do that right now on Roon, because we're working on other things, and that's fine, so I'm just gonna go make something big and launch it..." I love that "I'm just gonna go do it." There's no reason not to. I think that's really great.

**Adam Stacoviak:** Drew has been on the show, he was actually our first two-parter on this show; I'm a big fan of Drew. He could be our second 3-P.

**Sam Soffes:** There you go.

**Adam Stacoviak:** \[01:12:14.03\] I guess we kind of keyed off of some of this stuff, and I even asked you this question a little bit in the show, but what's -- not so much just "What's next?", but is there anything secret? Do you have any secret? Anything on the horizon that no one knows about? I guess maybe the smartwatch is one thing, but anything that no one knows that you can mention on the show today?

**Sam Soffes:** I haven't told anyone about the watch publicly; I've only sent a couple DM's and text messages about it, so that's super unknown. I guess I'd mentioned I'm working on a physical product, but that's what it is.

**Adam Stacoviak:** And if somebody wants to follow along, do they follow you on Twitter? Is there a mailing list they can kind of hit you on? I know you're pretty public about most things, so if someone does totally wanna be on the beta waiting list to know what's coming next from this, where do they go?

**Sam Soffes:** I guess just follow me on Twitter, because I'll definitely be talking about it when it gets more ready... But I probably won't post anything publicly or talk about it until I get it more -- at least a prototype that works. I don't know. I kind of decided I'm not gonna -- you know, I'm gonna follow more the Apple route and be like "Here it is! Surprise!" instead of like here's a year of me tweeting pictures of circuit boards... Which isn't exciting.

**Adam Stacoviak:** Well, I mean you were pretty vocal about the ongoing development of Cheddar, so it is quite a contrast.

**Sam Soffes:** Yeah, I thought I might try it out, especially since it's something I'm so terrible at... It's gonna take a super long time to show anything, like "Here's a circuit board that can put a dot on the screen!" A month later, well, that's still all I have to show, just because it's gonna be such a slow and boring process... Because for a while - I joke with my wife that like, it's gonna be a messenger bag watch; I'll have to wear this bag with an extension cord, to like have this thing on your wrist, because it's gonna be so much electronics... I'll have to work on making it smaller once I get it working.
I kind of thought, like, until it gets at least to like -- it can at least fit on my wrist and tell me the time, I probably wouldn't talk about it a whole lot. I don't know, maybe I'll change my mind.

**Adam Stacoviak:** Time will tell.

**Sam Soffes:** Yeah, indeed. I guess that's it, that's all I really have going on. I'm working on an update for Shares; I think I might have mentioned that publicly, I'm not sure...

**Adam Stacoviak:** For iOS 7, right?

**Sam Soffes:** For 7, and iPhone 5 support, and iPad. A bunch of people really like it, which is great; I don't have any stocks anymore, because I sold them all, because I went broke, so I don't really care about it that much. But people really love it, so maybe I'll work on it.

\[01:15:10.03\] Yeah, it's pretty much just like, I'm enjoying contracting, and when I get a big enough offer I'll sit down and pick something to work on, and work on it. Right now I'm most excited about the watch, just because I don't know anything about it. Maybe I'll be more public about it, so I don't get frustrated and give up... Because I feel like if I tweet about it, then I can't really give up, so maybe I'll be public about it. We'll see.

**Adam Stacoviak:** Well, it's certainly been a long road for us. It's definitely been fun having you back on the show. I'm happy for you and Ellen, I'm happy for your new chapter in life, and definitely thanks for making the time to come on this show. I said it a number of times - those who are listening, going back and listening to part one, two and three, you'll hear me tell Sam just thanks for being open about who you are, what you're up to... Because I think that your perspective isn't what I see - not that it's wrong; you know, I'm not quite as open and vocal about what I'm doing as you are... Our personalities are quite different, but I can appreciate and respect your perspective towards things, and I think that by you doing that - one, it has helped you, but two, it has help others to 1) learn by doing, 2) just to do it, and 3) to kind of squash that fear and just start to accomplish what they see is their chapter in life, and whatever fits for them. In that light, you've been an inspiration to some people.

Thanks for doing me the honor to come on this show and share that kind of information. It's pretty neat.

**Sam Soffes:** Yeah, thanks so much. I'm not that great about writing in general or talking about myself in great detail, I guess because I feel like no one really cares, so there's really no reason to write about it... So it's good to have a platform to talk about my life. I appreciate it.

**Adam Stacoviak:** If you're listening, and you've listened to part one, two and three of Sam, and you're a fan of Sam, follow him on Twitter, use his code on GitHub, read his blog on Roon, follow what he's doing, and all that good stuff.

This is episode number 51 of Founders Talk. You can go to 5by5.tv/founderstalk/51 to listen. You can also listen on other avenues... Sam, thanks for coming back on the show; to you, listener, thanks for listening, and I guess let's say goodbye.

**Sam Soffes:** Great. Thanks so much, Adam. See ya.

**Adam Stacoviak:** Later, Sam.
