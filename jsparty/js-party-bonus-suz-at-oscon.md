**Jerod Santo:** So what do you mean by "your variables are all trash?" What does that mean?

**Suz Hinton:** \[laughs\] I was just talking to you both about how I'm really bad at coming up with names for projects, which means I'm also really bad at coming up with names for variables... So all my variables are trash.

**Jerod Santo:** Give us some examples, what are the variable names? Like a, b, c? Foo, bar, baz?

**Suz Hinton:** A couple days ago I was writing a library for the keynote that I was giving, so I was making some shortcut code... And when you break up a word into letters, and then each letter has like a Morse code notation of it, what do you call each dot or dash in the letter?

**Jerod Santo:** I don't know... What did you call it?

**Suz Hinton:** Right, so I first called them units, and I'm like "That makes no sense whatsoever." Then I changed it at the last minute to subletters. So you've got a word, a letter and a subletter... But I couldn't come up with anything better than that, and I was like "This is all just trash.

**Jerod Santo:** You know when you've totally jumped the shark is when you just call a variable 'data'. Have you ever done that?

**Suz Hinton:** Yes.

**Jerod Santo:** Like, "This is the data."

**Suz Hinton:** And sometimes it's like a reserved word in the language, which is even worse...

**Jerod Santo:** Yeah, and you have like data and some underscore or something, because you actually can't come up with anything else.

**Suz Hinton:** Yes, absolutely.

**Jerod Santo:** I've been there. I think we've all probably had trash variable names through our years.

**Suz Hinton:** It's my talent.

**Jerod Santo:** It's your talent.

**Suz Hinton:** Yeah.

**Jerod Santo:** So you're preparing for this keynote - by the way, by far the most talked about things that we've heard... Live coding, at OSCON, probably 2,000 people in the crowd, with hardware involved, JavaScript involved, ten minutes... You gave yourself an actual countdown timer; nobody asked you to do that...

**Suz Hinton:** \[laughs\]

**Jerod Santo:** So I guess the question is are you a masochist, or what's going on here?

**Suz Hinton:** I think so, yeah. Yeah, definitely. I think that I've given a lot of hardware talks, and I always think they're fun, but when you've given a few, it's kind of like when you repeat the same talk and you're sick of hearing your own jokes, and you're just like "I'm not funny", and you're surprised when people laugh when you give that same talk. That's sort of how I felt about hardware, and also because it was a keynote for OSCON, I hyped that up and I almost psyched myself out, and I thought "I have to do something next-level. I have to be super-extra and challenge myself in a way that I haven't done before", which is very silly, right?

Your job as a keynote is to inspire people, but also to be super professional and to kind of prove that you have the stage for a reason. So that was a pretty risky thing for me to do, I guess.

**Adam Stacoviak:** The timer was enough for me... It's fine to give yourself a timer, but it was also a tick, too. So you drew the crowd into your own suspense... I was on the edge of my seat.

**Suz Hinton:** That was definitely a tactic, and I practiced with the ticking, so that I learned to ignore it. It wasn't stressing me out, but I wanted to create that tension in the audience. I wanted them to feel like they were part of what I was doing on the stage, so instead of just sitting in a seat and watching someone's screen, I wanted them to feel much more immersed in it. I wanted them to feel like they understood the stress that I was under.

**Adam Stacoviak:** Where did the idea come from for that?

**Suz Hinton:** For the ticking?

**Adam Stacoviak:** Yeah.

**Suz Hinton:** I don't know. I just thought, "Well, if someone is watching you type, what's in it for them?" I guess... So I thought "There's gotta be something that will be funny to people." I wanted to be funny, so that if I was stuck on coding or something, people wouldn't be bored... So I guess the ticking just came about as just a filler.

**Adam Stacoviak:** \[04:06\] The ticking is actually a playbook from Hollywood. In scary movies or suspenseful things, they'll subliminally put in ticking of some sort -- it'll be the music, or it'll be in just some sort of sound in the scene, to make it feel like the time clock is ticking.

**Suz Hinton:** Totally. I don't watch scary or tension-featured movies for that reason; it works very well on me and I stress out.

**Jerod Santo:** It made me think of Peter Pan... I don't know, maybe it's just me... Because Captain Hook has the alligator that has the clock - he swallowed the clock when he also swallowed his arm...

**Suz Hinton:** Totally!

**Jerod Santo:** ...and the alligator is always following him, and he hears the ticking, and it's symbolic for death, right? Like death is coming from him.

**Suz Hinton:** Wow, that got dark really quickly...

**Jerod Santo:** Oh, and they've just set up a Jenga board next to us... So that got dark, and then it got very loud very quickly. That's fun...

**Adam Stacoviak:** Either way, the ticking is gonna bring in...

**Jerod Santo:** Yeah, it's suspenseful.

**Adam Stacoviak:** So what's interesting there is that you had to deal with some pain, some discomfort, right?

**Suz Hinton:** Right.

**Adam Stacoviak:** You're giving a demo, you're on stage...

**Suz Hinton:** Yeah, and it was a relatively unplanned demo, because I thought I would take it next-level and give myself 16 possible outcomes, and then I created a randomized generator to generate an outcome for me to code. That particular scenario that I got on stage wasn't a scenario that I'd rehearsed end-to-end. I think I'd rehearsed maybe 4 of the possible 16 scenarios.

**Jerod Santo:** Give us some examples of these scenarios... It was like an Arduino board, and you have inputs/outputs... What were some scenarios?

**Suz Hinton:** Yeah, so the one that actually came up on stage was a light sensor as an input, and then that had to trigger the output, which was a server, which was like a motor that can turn. So I attached like a waving hand that had "Hello OSCON" written on it, and that was attached to the server. So the idea was if we can calibrate it to a certain light level, that would trigger the hand to wave on the stage. So that was the scenario... But we had everything from a little speaker, to a temperature sensor... There was also a flex sensor, so it's like a long strip and you can bend it, and then it gives you different readings... So I had a load of really fun scenarios done, but I just hadn't had a chance to rehearse that specific one.

**Adam Stacoviak:** You said that the light may be too bright in here, or something like that, at one point... I thought you were stalling, or making excuses... What was that about?

**Suz Hinton:** Yeah, I'm really glad that you said that, because you know when you run your code and you get a value, and you're thinking "That value seems a little too perfect"? So the value that came out was 1,023, which is on the largest side of a value you can get from an analog sensor... Generally, an analog sensor like the light sensor I was using will give you a value from 0 to 1,023.

Now, the lights were really bright on the stage, but generally, the nature of that sensor means that usually the lower end of the numbers signify brightness... So I knew something was wrong...

**Jerod Santo:** Because it should have been low if it was really bright...

**Suz Hinton:** It should have been low, and it should never really be at the absolute maximum value. That's very suspicious. So I knew something was wrong, and I was like "Oh, it looks like it's really bright", so I put my hand in front of it to try to alter the light, and of course, the value didn't change.

**Jerod Santo:** So you knew it was busted.

**Suz Hinton:** I love that you picked up on those little nuances. That's very sneaky.

**Adam Stacoviak:** I was like, "She's stalling, or it really is -- something's happening..."

**Suz Hinton:** There was something wrong, yeah.

**Jerod Santo:** There was so much tension... We should say (the audience doesn't know...) it was a ten-minute timer, and you finished with three or four minutes left. So there was tension, but flying colors in reality, in terms of success... It would have been a lot more suspenseful as we counted down towards 30 seconds -- maybe sweat would have been beating off you at that point.

**Suz Hinton:** I think so, yeah... I think that because I fixed it so quickly, that was a big relief... But when I knew it had gone wrong so early on, I was like "Alright, this is either gonna be great, or it's gonna completely flop", and luckily, I fixed it up pretty quickly.

**Adam Stacoviak:** \[08:07\] Why do you think this particular type of keynote was asked of you? Because you didn't pitch this; this was asked of you...

**Suz Hinton:** I was reached out to, and OSCON said "We'd like you to livecode something. We know you do a lot of hardware on Twitch, so can you do something to do with that?" Initially, I thought "Great, I've got half an hour to just livecode some hardware" and then they were like "No, you have 15 minutes, but we have one minute reserve for walking on, one minute for walking off... So you've got 13 minutes." I thought, "What can I livecode in 13 minutes?"

They obviously didn't have any ideas, because they weren't really sure what I could pull off... So I pitched it as "What if either the audience voted for what I used, or if I had something that just randomly generated something for me? What if I did that?" I thought that they would say "No, that's too risky", but I think they just rusted me... So that's kind of how it came about.

**Adam Stacoviak:** So was it -- I guess a fun way to start a conference is livecoding, right? ...but why do you think that in particular? Sure, you're good at it, but why livecoding?

**Suz Hinton:** I think that looking over the history of OSCON, there hasn't been a whole lot of that, and I think that it's not just OSCON, but a lot of other technical conferences, keynotes tend to be a little bit high-level...

**Adam Stacoviak:** Yeah, true...

**Suz Hinton:** ...and that's really good, because you wanna inspire people, and the way to kind of reach as many people as possible is to keep it kind of high-level, so it's not too specific. I think what they wanted was they wanted to surprise people this year, and I think that that's a good thing. It just sort of mixes things up.

I didn't expect it to have such a good reaction, and I think that's really fun. I've noticed that there were a few other livecoding sessions that were down yesterday and today as well, so I'm hoping that that becomes more of a thing next year as well.

**Jerod Santo:** So a couple times you mentioned that you were like taking it up a level, or next-level, or... 2019 OSCON, hypothetically, what could possibly be next-level from here? Are you gonna do it like with fire rings around you, or something? What could possibly be better?

**Adam Stacoviak:** Blindfolded.

**Suz Hinton:** That's not a bad one, blindfolded. Don't encourage me, because I feel like this year -- I feel like I got so lucky on stage that I don't wanna push it.

**Jerod Santo:** Oh...

**Suz Hinton:** Yeah...

**Adam Stacoviak:** You should push it.

**Suz Hinton:** ...so maybe I'll quit while I'm winning. I should push it?

**Adam Stacoviak:** Yeah.

**Suz Hinton:** Alright, so blindfolded?

**Jerod Santo:** You had four minutes to spare... That's plenty of time to be blindfolded.

**Suz Hinton:** I thought I was gonna be over.

**Jerod Santo:** \[laughs\]

**Suz Hinton:** So yeah, let's do the blindfold next year.

**Jerod Santo:** Alright, we'll talk to the OSCON team...

**Adam Stacoviak:** Or you could do something where you can't tell what the audience is thinking. You could tell because of the sound maybe...

**Jerod Santo:** How could you tell what they're thinking?

**Adam Stacoviak:** Well, not so much thinking, but how they're feeling...

**Jerod Santo:** Their reactions?

**Adam Stacoviak:** Like, if you've messed up -- maybe if you had like headphones on where you couldn't hear... You know how they do that on like a Tonight Show, or something like that? They'll have somebody --

**Jerod Santo:** Oh, like the Cone of Silence...

**Adam Stacoviak:** Yeah, they'll put some headphones on and you can't tell, so you're sort of like your own track, essentially... You can't really hear.

**Suz Hinton:** Oh, I love that, yeah. So everyone is screaming at me, like correcting my typos, and I have no idea...

**Adam Stacoviak:** And you maybe even see them waving...

**Suz Hinton:** ...so they're all yelling at me and I'm like, "Yeah, hey...!"

**Adam Stacoviak:** I mean, you take away one core sense, essentially.

**Jerod Santo:** Or you could have like a trapdoor, and if she messes up, she falls in and there's sharks with laser beams on their heads...

**Adam Stacoviak:** Hey, you've been wanting that for a while...

**Jerod Santo:** Just consider it. Just think about it.

**Suz Hinton:** Actually, I really like this one. Maybe without the sharks and the lasers...

**Jerod Santo:** \[laughs\] Just the water...

**Suz Hinton:** Okay, so you know those pools with the target shooters?

**Jerod Santo:** Yeah, like a dunk tank...

**Suz Hinton:** Yeah, that kind of thing. So if my code doesn't compile the first time, I get dunked.

**Jerod Santo:** Exactly. And you still have to keep going though...

**Suz Hinton:** Okay, this is what we're gonna do.

**Jerod Santo:** So you climb back up if you're going.

**Adam Stacoviak:** Oh, my gosh... That would be good!

**Suz Hinton:** I love this! I'm being quite serious...

**Jerod Santo:** I know you are. That's why I love this, too.

**Adam Stacoviak:** That would be really cool if you got dunked and you had to come back and keep going.

**Suz Hinton:** You have all the ideas. This is the second brilliant idea that you--

**Jerod Santo:** \[12:09\] Well, let's tell the people about my first brilliant idea, because I think that this idea that you have come up with is very interesting. Your next art project, your next hack - the next thing you're planning on doing is kind of an IoT home that talks to you, but only in certain-- just tell us, because I can't even describe it.

**Suz Hinton:** Yeah, I'll tell you. So now that I'm not freaking out about my OSCON keynote anymore, I have a little bit more time to spend on some of my other personal projects.

I've just moved into a new place, it's a really cool apartment... And I wanna start putting different devices around the place and rolling my own IoT devices. I'm someone who really likes peace and quiet, and I usually try and set up my house so that it's a nice, quiet environment... So I thought it would be funny if I hooked up all of my IoT devices to have different personalities and different voices, and that they would all be talking... They'd be talking over each other, and they'd be talking intermittently, but you don't know that this is happening, unless you put on a pair of headphones while you're in the house, and then all of a sudden the house becomes super-chatty, and it becomes this whole different world to what you were in before.

**Jerod Santo:** One of the examples you gave is like the plants asking to be watered... What are some other ideas you've come up with?

**Suz Hinton:** Yeah, so there was also like a doorbell that could also just be sort of like a Marvin -- is it Marvin, from the Hitchhiker's Guide to the Galaxy? He's like "Oh, I guess your friend's here... I didn't know you had friends", or something like that.

**Jerod Santo:** \[laughs\] It's like, not only is the house gonna talk to her, but it's gonna be creepy and weird and annoying, too. You mentioned the passive-aggressive plant...

**Adam Stacoviak:** Nothing like (I guess) technology having attitude, right?

**Suz Hinton:** Yes.

**Adam Stacoviak:** That's the best.

**Suz Hinton:** I really like that.

**Adam Stacoviak:** That particular Hitchhiker's Guide to the Galaxy character was really good.

**Suz Hinton:** Yeah, I absolutely adored that robot. But I didn't know what to call this project, and I don't even know how we started talking about this yesterday, but I was talking about it and then you both awkwardly laughed... But then you sort of got the idea and you said "Oh, it's as if the walls could talk", and I was like "Yes! That's it!" So that's what I wanna call it - if the walls could talk.

**Jerod Santo:** Boom goes the dynamite.

**Adam Stacoviak:** Boom! Dynamite.

**Jerod Santo:** So there it is. So what can the people expect in terms of -- when are you gonna be working on it? I assume you'll be Twitching some of this... What's that look like?

**Suz Hinton:** Yeah, I might work on it on Twitch. I'm setting myself a goal of having it done in the next couple of months. It's something that I just want to be one of those on/off again projects that I can keep coming back to... So if I add one plant...

**Jerod Santo:** That's the thing, you can come up with a new idea at any time, and then just add it to the system.

**Adam Stacoviak:** I have an idea too along with this...

**Suz Hinton:** Okay, I wanna hear it.

**Adam Stacoviak:** So the headphones, which means you have to be in the house... I'm sure you don't want all the weirdoes on the internet coming to your home, right/

**Jerod Santo:** Oh, I see where you're going with this already.

**Adam Stacoviak:** So what if you could always be live-broadcasting the audio, so that anybody can listen in live?

**Suz Hinton:** I really like this, too. And what if I put that on my Twitch channel, or created a Twitch channel for it? I love where this is going.

**Jerod Santo:** 24/7 livestream...

**Adam Stacoviak:** Because then people can always peek in on what your house is saying, like "Suz hasn't watered me in three days", or "Nobody's visited for four..."

**Suz Hinton:** Adam, I love this...

**Jerod Santo:** Do you have any integrations on your Twitch channel?

**Suz Hinton:** Yes!

**Jerod Santo:** I saw one guy who was streaming where he had a red light back behind him, and there was a slash command or some sort of Twitch command on the chat, and they could turn the light off and on.

**Suz Hinton:** Yeah, totally.

**Jerod Santo:** I thought that was cool. Do you have anything like that?

**Suz Hinton:** So a couple of those projects that other Twitchers did were inspired by a Tiara that I made. It's a battery-powered Tiara, and it has like flowers and stuff, but it has these 3D-printed fake crystals, and they each have a light in them... So I would wear the Tiara, and you could use a command -- I think it was like !Tiara and then a color, and then it would change that color. So if I'm just kind of deep in the weeds, reading documentation and I'm not paying attention to the chat, people can still kind of mess with me.

**Jerod Santo:** Right.

**Suz Hinton:** \[16:10\] And the other one I have is - for a while, when I lived in New York, I was in this super-stuffy study, and so in summer I would just start... Like, there was an inverse correlation between my programming ability and how hot the room got, and people would just see me stumbling, and there's like sweat--

**Jerod Santo:** As the temperature goes up?

**Suz Hinton:** And then I just started making more typos, and I was like "I'm sorry, it's just getting really warm in here..." Because I would do it with the door closed, so I didn't disturb anybody...

So I just hooked up a simple thermometer to the cloud, and that now shows in the corner of my Twitch stream every single Sunday.

**Jerod Santo:** Cool!

**Suz Hinton:** So people can see "What kind of skill level is she gonna be at today?", based on the temperature of my room... So that's really fun, too.

**Jerod Santo:** Very cool. So this fits right in, really...

**Suz Hinton:** Yes. So you're saying that my house should also be talking, on Twitch...

**Adam Stacoviak:** Yeah, I would like to actually tune in live whenever I want to. I mean, I'd like to come over for a visit, but at the same time, I don't wanna have to be there to have to listen. \[laughter\] I kind of wanna peek in...

**Jerod Santo:** "I would like to come over, but I don't wanna be there..."

**Suz Hinton:** So you can tune in at midnight and --

**Adam Stacoviak:** Well, I live kind of far away... Houston and Seattle is kind of far, so...

**Suz Hinton:** ...and there's this one lone plant at midnight going, "You forgot me about me, didn't you...?" \[laughter\]

**Adam Stacoviak:** And maybe it's the only one; everyone else is happy, snoozing...

**Suz Hinton:** And you're texting me, going "Would you just water the dang plant? It's crying right now..."

**Jerod Santo:** She can get busted for plant abuse, because somebody was tracking her watering habits online and reports her to Plant Protective Services.

**Adam Stacoviak:** Oh, my gosh...

**Jerod Santo:** This might backfire, we should think about this...

**Adam Stacoviak:** You don't have any animals, do you?

**Suz Hinton:** No. I have a load of animal figurines, and I have a hyper-realistic raccoon plush that I showed you both yesterday...

**Adam Stacoviak:** Wait, what...?

**Jerod Santo:** \[laughs\] Where did you get that, and why do you have it?

**Suz Hinton:** I got it off the internet...

**Jerod Santo:** You acquired this by your own volition.

**Suz Hinton:** Yes, yes.

**Jerod Santo:** Okay. Because...

**Adam Stacoviak:** You pushed the button "Order"? You were like "Buy Now"?

**Suz Hinton:** Yeah, I bought it off -- I have to figure out where I bought it from; it was from the internet. It's a brand called Hansa, and they actually make animatronic versions of their plushes as well. So you can get an animatronic baby elephant, and you can ride it, and it will raise its trunk, and stuff...

**Jerod Santo:** You can ride it?

**Suz Hinton:** For children.

**Adam Stacoviak:** Or small people.

**Suz Hinton:** Yeah. And they have a dinosaur and they have a dragon. The dragon is like $2,500, but it is a life-size plus, hyper realistic dragon.

**Jerod Santo:** So you're saving up for it then?

**Suz Hinton:** Yes. \[laughter\]

**Adam Stacoviak:** That's on my list.

**Suz Hinton:** The raccoon was slightly more affordable. I'm not gonna tell you how much I've spent on it, because it's embarrassing, but I love it... Because I travel so much that it's difficult for me to have pets, and so plants and hyper realistic plush animals tend to -- I just sound like... I'm gonna stop.

**Jerod Santo:** They age better.

**Suz Hinton:** I don't need a justification for a trashpanda in my house. \[laughter\]

**Adam Stacoviak:** Do what you've gotta do...

**Jerod Santo:** That's right. So you mentioned a raccoon integration, but then I asked "Is this like a programmable raccoon?" and you said no.

**Suz Hinton:** That's right.

**Jerod Santo:** So what's your plan there? How are you gonna work this into the Whisper House?

**Suz Hinton:** I think just when my friends come over it's just always gonna be in a different spot. That was my original plan.

**Jerod Santo:** Okay. So it'll be all manual though...

**Suz Hinton:** Yeah, it's all manual.

**Jerod Santo:** No Johnny-Five involved here.

**Suz Hinton:** It would be cool if we could put it on a little sort of wheeled platform, and it just kind of like darts across doorways or something when my friends are here... But I feel like that's just taking it slightly too far.

**Jerod Santo:** You could mount it to a Roomba.

**Suz Hinton:** That's clever. I do love that.

**Jerod Santo:** Three ideas I've had today...

**Suz Hinton:** That's three. Adam doesn't look impressed.

**Adam Stacoviak:** How would that work?

**Jerod Santo:** The Roomba goes around vacuuming...

**Adam Stacoviak:** Yeah, I know, but...

**Jerod Santo:** ...and you think it's a freakin' raccoon attacking you.

**Adam Stacoviak:** Okay...

**Jerod Santo:** And if it's dark enough...

**Suz Hinton:** It's really cute though. It's really cute, I love it.

**Jerod Santo:** Okay, so you think a cute raccoon is attacking you.

**Suz Hinton:** Yeah.

**Adam Stacoviak:** \[20:12\] Maybe the raccoon has emotions, and the Roomba activates based on emotion.

**Suz Hinton:** I'm silently dying right now; that's me actually --

**Jerod Santo:** You had to one-up me, didn't you...?

**Adam Stacoviak:** It could have emotions...

**Jerod Santo:** Alright, I think we've been there and done that on this one.

**Adam Stacoviak:** It's still an interesting concept though, to have your house...

**Jerod Santo:** It's super-interesting!

**Adam Stacoviak:** ...be alive and you can't hear it. I think that's cool.

**Suz Hinton:** I think it's cool, too... And it satisfies me, because I just love things to be silent, but I also want fun, so I can choose when to indulge in my passive-aggressive house, you know? But it's always there. They're still talking, I just can't hear them.

**Jerod Santo:** It's kind of like when a tree falls in the wilderness, you know?

**Suz Hinton:** Right. I like the remote idea actually, because when I'm traveling, I could listen in on my own house.

**Adam Stacoviak:** You could be like, "What's going on here?"

**Suz Hinton:** And if one of my plants is just being really, really antagonistic, I can call one of my friends and be like "Can you go and water my snake plant, or my zz plant?" or "My fiddly fig is being really whiny today..."

**Jerod Santo:** Yeah.

**Adam Stacoviak:** Get those plants some water...

**Jerod Santo:** That's a life hack right there... That's a life hack.

**Adam Stacoviak:** What else is going on in your life?

**Suz Hinton:** What else is going on?

**Adam Stacoviak:** You just moved...

**Suz Hinton:** I just moved...

**Adam Stacoviak:** New city...

**Suz Hinton:** New city...

**Adam Stacoviak:** New friends?

**Suz Hinton:** I'm really lucky because I think because of open source especially, actually, I have friends all over. What I really enjoy is not necessarily having to move somewhere, but when you end up in a city and you get to meet an open source contributor to one of your repos... That's one of my favorite things.

I remember the first time I met somebody who had contributed an improvement to one of my repositories, and I met him in Berlin... And it was like greeting an old friend, because we'd had so many conversations online, and I had so much respect for what he was using my library for, and he had so much respect for me writing the library, that it was, again, like greeting an old friend. We then hung out and we talked about what he'd been up to, and it was great.

So for me, moving to a new city means an opportunity to get to know some poeple I've met in a fleeting sense a little better... Because I used to come to Seattle a lot before I moved here.

**Jerod Santo:** Adam and I collaborate on Changelog stuff for probably two years before we met.

**Suz Hinton:** Oh, really?

**Jerod Santo:** Something like that.

**Adam Stacoviak:** It was kind of weird, actually.

**Jerod Santo:** We met on the internet, we met because of the Changelog...

**Adam Stacoviak:** We were like, "Um, it's been a while..."

**Suz Hinton:** And I met the two of you yesterday for the first time, and I've done like five episodes of JS Party with y'all...

**Adam Stacoviak:** Or more...

**Suz Hinton:** That's really cool. And then I've met Tim today.

**Jerod Santo:** That's right. And I met Tim for the first time this week.

**Suz Hinton:** What?!

**Adam Stacoviak:** On Monday.

**Suz Hinton:** Really?

**Adam Stacoviak:** Yeah.

**Suz Hinton:** Really?

**Adam Stacoviak:** IRL on Monday.

**Jerod Santo:** For the first time.

**Suz Hinton:** That's super cool.

**Jerod Santo:** The internet brings us all together.

**Suz Hinton:** It's actually a party in person... It's a JS Party in person!

**Adam Stacoviak:** It sure is!

**Jerod Santo:** Well, Jenga is over there... It seems like the party is picking up; maybe we should...

**Adam Stacoviak:** Close it down.

**Jerod Santo:** ...call it a day.

**Adam Stacoviak:** Suz, always a pleasure.

**Suz Hinton:** Thanks for letting me be a weirdo on air, as usual...
